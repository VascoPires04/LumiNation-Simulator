// App.tsx — V2 architecture: one persistent fixed canvas (full variant), scrollable curtain on top.
//
// Z-index stack (bottom → top):
//   0   canvas-layer         — position:fixed, inset:0 — full CitySimulator (no sidebar), always interactive
//   1   canvas-dim-veil      — position:fixed, pointer-events:none — flat rgba dim, fades on scroll
//   2   sim-compact-sidebar  — position:fixed, right side — fades in after curtain starts lifting
//   3   landing-curtain      — position:fixed, pointer-events:none — wordmark/slogan/cue, lifts on scroll
//   4   scroll-doc           — position:relative, pointer-events:none — transparent, drives scroll height
//   100 topbar               — position:fixed — fades in on scroll, interactive when visible
//
// The compact sidebar (z=2) is the ONLY sidebar. CitySimulator renders canvas only (showFullSidebar=false).
//
// Mobile curtain: auto-dismisses after 1s with a fade. No scroll interaction on mobile.
// Desktop curtain: scroll-driven lift as before.

import { useEffect, useRef, useState } from 'react'
import { animate, motion, MotionConfig, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import CitySimulator from './CitySimulator'
import LandingCurtain from './sections/LandingSection'
import { useSimHistory } from './hooks/useSimHistory'
import { useIsMobile } from './hooks/useIsMobile'
import HeadlineMetric from './components/HeadlineMetric'
import ParticleBackground from './components/ParticleBackground'
import DashboardSection from './sections/DashboardSection'

type Mode = 'lumination' | 'baseline' | 'compare' | 'fpv'

// Curtain lift completes over LIFT px of scroll
const LIFT = 600
const LISBON_LAMPS = 70_000

export default function App() {
  const isMobile = useIsMobile()
  const [mode, setMode]               = useState<Mode>('lumination')
  const [baselinePct, setBaselinePct] = useState(0.30)
  const [lookaheadSec, setLookaheadSec] = useState(4.0)
  const [spawnMode, setSpawnMode]     = useState<'ped' | 'car'>('ped')
  const [tooltip, setTooltip]         = useState<'baseline' | 'lookahead' | null>(null)
  const externalSpawnModeRef = useRef<'ped' | 'car'>('ped')
  const hudNavRef    = useRef<HTMLElement>(null)
  const [hudMax, setHudMax] = useState(220)

  const hudY    = useMotionValue(0)
  const [hudOpen, setHudOpen] = useState(true)
  const springCfg = { type: 'spring' as const, stiffness: 400, damping: 38 }

  const hudSnap = (_: unknown, info: { velocity: { y: number } }) => {
    const cur = hudY.get()
    const vel = info.velocity.y
    if (hudOpen ? (cur > hudMax * 0.4 || vel > 300) : (cur < hudMax * 0.6 || vel < -300)) {
      animate(hudY, hudOpen ? hudMax : 0, springCfg)
      setHudOpen(o => !o)
    } else {
      animate(hudY, hudOpen ? 0 : hudMax, springCfg)
    }
  }
  const hudToggle = () => {
    animate(hudY, hudOpen ? hudMax : 0, springCfg)
    setHudOpen(o => !o)
  }
  const scrollRef        = useRef<HTMLDivElement>(null)
  const externalSpawnRef = useRef<((cx: number, cy: number) => void) | null>(null)
  const touchStartRef    = useRef<{ x: number; y: number } | null>(null)
  const lastTouchRef     = useRef(0) // timestamp — blocks ghost click after touch
  const { scrollY } = useScroll({ container: scrollRef })

  // ── Canvas layer — pull-in zoom with spring for smooth feel ──────────────
  const springScrollY = useSpring(scrollY, { stiffness: 180, damping: 42, restDelta: 0.001 })
  const canvasScale = useTransform(springScrollY, [0, LIFT], [1.04, 1.0])
  const canvasY     = useTransform(springScrollY, [0, LIFT], [20, 0])

  // ── Flat dim veil — fades independently of gradient veil ──────────────────
  const dimVeilOpacity = useTransform(scrollY, [0, LIFT * 0.75], [1, 0])

  // ── Compact sidebar — fades in as curtain starts lifting ──────────────────
  const sidebarOpacity = useTransform(scrollY, [LIFT * 0.1, LIFT * 0.45], [0, 1])
  const [sidebarVisible, setSidebarVisible] = useState(false)

  // Measure nav position once sidebar becomes visible, cap panel travel to keep bar on-screen
  useEffect(() => {
    if (!sidebarVisible || !hudNavRef.current) return
    const rect = hudNavRef.current.getBoundingClientRect()
    setHudMax(Math.max(60, window.innerHeight - rect.top - 24))
  }, [sidebarVisible])

  // ── Topbar — fades in as curtain lifts (Effect E) ─────────────────────────
  const topbarOpacity = useTransform(scrollY, [LIFT * 0.25, LIFT * 0.6], [0, 1])
  const [topbarVisible, setTopbarVisible] = useState(false)

  // ── Autoplay / curtain visibility ────────────────────────────────────────
  // Declared early so effectiveCurtainVisible can reference curtainVisible below.
  const [userCleared, setUserCleared] = useState(false)
  const [curtainVisible, setCurtainVisible] = useState(true)

  // ── Mobile-specific MotionValues for HUD/topbar fade-in (scroll is 0 on mobile) ──
  const mobileHudOpacity     = useMotionValue(0)
  const mobileTopbarOpacity  = useMotionValue(0)

  // ── Mobile curtain: auto-dismiss after 1s, no scroll needed ──────────────
  // Once gone it never comes back (clicking L doesn't re-show it).
  const [mobileCurtainFading, setMobileCurtainFading] = useState(false)
  const [mobileCurtainGone,   setMobileCurtainGone]   = useState(false)

  useEffect(() => {
    if (!isMobile) return
    // Start fade after 1s
    const t1 = setTimeout(() => {
      setMobileCurtainFading(true)
      setSidebarVisible(true)
      setTopbarVisible(true)
      animate(mobileHudOpacity,    1, { duration: 0.55, ease: 'easeOut', delay: 0.15 })
      animate(mobileTopbarOpacity, 1, { duration: 0.55, ease: 'easeOut', delay: 0.25 })
    }, 1000)
    // Unmount curtain DOM after fade completes (1000 + 800ms)
    const t2 = setTimeout(() => setMobileCurtainGone(true), 1800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [isMobile, mobileHudOpacity, mobileTopbarOpacity])

  // Effective values — mobile uses timer-based, desktop uses scroll-based
  const effectiveCurtainVisible  = isMobile ? !mobileCurtainGone  : curtainVisible
  const effectiveSidebarOpacity  = isMobile ? mobileHudOpacity    : sidebarOpacity
  const effectiveTopbarOpacity   = isMobile ? mobileTopbarOpacity : topbarOpacity
  const effectiveSidebarVisible  = sidebarVisible
  const effectiveTopbarVisible   = topbarVisible

  const autoplay: 'sparse' | 'none' = (effectiveCurtainVisible && !userCleared) ? 'sparse' : 'none'

  // ── Lisbon-scaled headline metric ─────────────────────────────────────────
  const simHistory = useSimHistory(60)
  const latest     = simHistory[simHistory.length - 1]
  const lisbonEur = latest
    ? latest.eurSaved * (LISBON_LAMPS / Math.max(latest.lampCount, 1))
    : 0
  const fmtEur = lisbonEur >= 1_000_000
    ? `€${(lisbonEur / 1_000_000).toFixed(1)}M`
    : lisbonEur >= 1_000
    ? `€${Math.round(lisbonEur / 1_000)}k`
    : `€${Math.round(lisbonEur)}`

  // Citizen view is desktop-only — redirect away if somehow reached on mobile
  useEffect(() => {
    if (isMobile && mode === 'fpv') setMode('lumination')
  }, [isMobile, mode])

  // Reset scroll container to top on mount
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [])

  // iOS Safari: prevent document-level touchmove outside .scroll-doc so the
  // browser never falls back to window scrolling (which hides the URL bar).
  useEffect(() => {
    const handler = (e: TouchEvent) => {
      if (!(e.target as Element).closest('.scroll-doc')) e.preventDefault()
    }
    document.addEventListener('touchmove', handler, { passive: false })
    return () => document.removeEventListener('touchmove', handler)
  }, [])

  // ── Pause state — shared by HUD sidebar and dashboard ────────────────────
  const [paused, setPaused] = useState(false)

  // ── Dashboard: canvas fades linearly with scroll ──────────────────────────
  const [dashInView, setDashInView] = useState(false)
  const canvasLayerOpacity = useMotionValue(1)
  const dashOffsetRef = useRef(0)

  // ── Mobile: hide HUD when dashboard scrolls into view ────────────────────
  // Use a ref so initial mount (dashInView=false) doesn't override the curtain fade-in sequence
  const hasVisitedDashRef = useRef(false)
  useEffect(() => {
    if (!isMobile) return
    if (dashInView) {
      hasVisitedDashRef.current = true
      animate(mobileHudOpacity, 0, { duration: 0.35, ease: 'easeInOut' })
    } else if (hasVisitedDashRef.current) {
      animate(mobileHudOpacity, 1, { duration: 0.35, ease: 'easeInOut' })
    }
  }, [isMobile, dashInView, mobileHudOpacity])

  // Measure dashboard position once (and on resize)
  useEffect(() => {
    const measure = () => {
      const el = document.getElementById('dashboard')
      if (el) dashOffsetRef.current = el.offsetTop
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // ── Scroll snap — snaps to simulator or dashboard when user stops mid-way ──
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let timer: ReturnType<typeof setTimeout>

    const onScroll = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        if (!isMobile) return
        const v   = el.scrollTop
        const sim = (document.querySelector('.sim-section-spacer') as HTMLElement | null)?.offsetTop ?? LIFT
        const dash = dashOffsetRef.current
        if (v <= sim || v >= dash) return   // outside the snap zone — let user scroll freely
        const mid = (sim + dash) / 2
        el.scrollTo({ top: v < mid ? sim : dash, behavior: 'smooth' })
      }, 180)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => { el.removeEventListener('scroll', onScroll); clearTimeout(timer) }
  }, [])

  // ── Desktop scroll listener — curtain/sidebar/topbar + linear canvas fade ──
  useEffect(() => {
    return scrollY.on('change', v => {
      setTopbarVisible(v > LIFT * 0.25)
      setSidebarVisible(v > LIFT * 0.1)
      const visible = v < LIFT * 0.65
      setCurtainVisible(visible)
      if (visible) setUserCleared(false)

      // Canvas fades out as dashboard scrolls into view, linearly with scroll
      if (!isMobile) {
        const dashTop  = dashOffsetRef.current
        const vh       = window.innerHeight
        const fadeStart = dashTop - vh * 0.85   // canvas starts fading when dashboard is ~85vh below viewport top
        const fadeEnd   = dashTop - vh * 0.05   // fully faded when dashboard nearly fills the screen
        const ratio = Math.max(0, Math.min(1, (v - fadeStart) / Math.max(1, fadeEnd - fadeStart)))
        canvasLayerOpacity.set(1 - ratio)
      }
    })
  }, [scrollY, isMobile, canvasLayerOpacity])

  return (
    <MotionConfig reducedMotion="user">
      <div className="app app--v2">

        {/* ── Layer 0a: particle background — fades in when dashboard in view ── */}
        <ParticleBackground visible={dashInView} isMobile={isMobile} />

        {/* ── Layer 0b: persistent fixed canvas — fades out when dashboard in view ── */}
        <motion.div
          className="canvas-layer"
          style={{ scale: canvasScale, y: canvasY, opacity: canvasLayerOpacity }}
        >
          <CitySimulator
            mode={mode}
            variant="full"
            showFullSidebar={false}
            interactive={!effectiveCurtainVisible}
            autoplay={autoplay}
            onClear={() => setUserCleared(true)}
            baselinePct={baselinePct}
            onBaselineChange={setBaselinePct}
            lookaheadSec={lookaheadSec}
            onLookaheadChange={setLookaheadSec}
            externalSpawnRef={externalSpawnRef}
            externalSpawnModeRef={externalSpawnModeRef}
          />
        </motion.div>

        {/* ── Mobile spawn buttons — z:10, above scroll-doc, only after curtain lifts ── */}
        {isMobile && !effectiveCurtainVisible && mode !== 'fpv' && !dashInView && (
          <motion.div
            className="mobile-spawn-btns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <button
              className={`spawn-toggle${spawnMode === 'ped' ? ' active' : ''}`}
              onClick={() => { externalSpawnModeRef.current = 'ped'; setSpawnMode('ped') }}
            >🚶</button>
            <button
              className={`spawn-toggle${spawnMode === 'car' ? ' active' : ''}`}
              onClick={() => { externalSpawnModeRef.current = 'car'; setSpawnMode('car') }}
            >🚗</button>
          </motion.div>
        )}

        {/* ── Layer 1: flat dim veil — softens canvas at landing state ──────── */}
        <motion.div
          className="canvas-dim-veil"
          style={{ opacity: dimVeilOpacity }}
          aria-hidden="true"
        />

        {/* ── Layer 2: HUD — two independent elements for responsive layout ──
             Desktop: both right-side, headline above controls.
             Mobile:  headline top-center, controls bottom bar.          ── */}
        {mode !== 'fpv' && (
          <motion.div
            style={{ opacity: effectiveSidebarOpacity, pointerEvents: effectiveSidebarVisible && !(isMobile && dashInView) ? undefined : 'none' }}
          >
            {/* Headline — display only, no interaction */}
            <motion.div
              className="hud-headline"
              aria-live="polite"
              aria-label="Live savings estimate"
            >
              <HeadlineMetric
                value={fmtEur}
                label="saved per year"
                sublabel="LISBON · 70K LAMPS"
              />
            </motion.div>

            {/* Controls — modes + sliders + CTA, one group */}
            <motion.nav
              ref={hudNavRef}
              className="hud-controls"
              aria-label="Simulator controls"
            >
              {/* Draggable on mobile only — static on desktop */}
              <motion.div
                className="hud-controls-body"
                style={isMobile ? { y: hudY } : undefined}
                drag={isMobile ? 'y' : false}
                dragConstraints={isMobile ? { top: 0, bottom: hudMax } : undefined}
                dragElastic={isMobile ? { top: 0.02, bottom: 0.02 } : undefined}
                onDragEnd={isMobile ? hudSnap : undefined}
              >
                {/* Handle — mobile only */}
                {isMobile && (
                  <div className="hud-controls-handle-row" onClick={hudToggle}>
                    <div className="hud-controls-handle" />
                  </div>
                )}

                <div className="hud-controls-inner" style={{ pointerEvents: hudOpen ? 'auto' : 'none' }}>
                  <div className="hud-section">
                    <p className="hud-section-desc">Switch between modes to visualize the impact.</p>
                    <div className="sim-compact-modes">
                      <button
                        className={mode === 'lumination' ? 'active' : ''}
                        onClick={() => setMode('lumination')}
                      >LumiNation</button>
                      <button
                        className={mode === 'baseline' ? 'active' : ''}
                        onClick={() => setMode('baseline')}
                      >Always-on</button>
                      <button
                        className={mode === 'compare' ? 'active' : ''}
                        onClick={() => setMode('compare')}
                      >Compare</button>
                    </div>
                  </div>

                  <div className="sim-compact-controls">
                    <div className="slider-col">
                      <label className="sim-compact-label">
                        <span className="sim-compact-label-row">
                          Baseline brightness
                          <button
                            className="hud-info-btn"
                            onClick={() => setTooltip(t => t === 'baseline' ? null : 'baseline')}
                            onPointerDown={e => e.stopPropagation()}
                            aria-label="Info about baseline brightness"
                          >ⓘ</button>
                          {tooltip === 'baseline' && (
                            <span className="hud-tooltip">Minimum lamp brightness when no pedestrian or vehicle is detected nearby.</span>
                          )}
                        </span>
                        <span className="sim-compact-value">{Math.round(baselinePct * 100)}%</span>
                      </label>
                      <input
                        type="range" min={0} max={100}
                        value={Math.round(baselinePct * 100)}
                        onChange={e => setBaselinePct(Number(e.target.value) / 100)}
                        onPointerDown={e => e.stopPropagation()}
                      />
                    </div>
                    <div className="slider-col">
                      <label className="sim-compact-label">
                        <span className="sim-compact-label-row">
                          Light corridor
                          <button
                            className="hud-info-btn"
                            onClick={() => setTooltip(t => t === 'lookahead' ? null : 'lookahead')}
                            onPointerDown={e => e.stopPropagation()}
                            aria-label="Info about light corridor"
                          >ⓘ</button>
                          {tooltip === 'lookahead' && (
                            <span className="hud-tooltip">How far ahead the lamps illuminate as someone walks or drives through.</span>
                          )}
                        </span>
                        <span className="sim-compact-value">{lookaheadSec.toFixed(1)}s</span>
                      </label>
                      <input
                        type="range" min={0.5} max={8} step={0.5}
                        value={lookaheadSec}
                        onChange={e => setLookaheadSec(Number(e.target.value))}
                        onPointerDown={e => e.stopPropagation()}
                      />
                    </div>
                  </div>

                  {dashInView ? (
                    /* Dashboard context — pause + back */
                    <div className="hud-dash-actions">
                      <button
                        className={`dash-pause-btn${paused ? ' active' : ''}`}
                        onClick={() => setPaused(p => !p)}
                      >
                        {paused ? '▶ Resume data' : '⏸ Pause data'}
                      </button>
                      <button
                        className="sim-cta"
                        onClick={() => {
                          setDashInView(false)
                          canvasLayerOpacity.set(1)
                          const simSpacer = document.querySelector('.sim-section-spacer') as HTMLElement | null
                          scrollRef.current?.scrollTo({ top: simSpacer ? simSpacer.offsetTop : 650, behavior: 'smooth' })
                        }}
                      >
                        ↑ Back to the city
                      </button>
                    </div>
                  ) : (
                    /* Simulator context — explore CTA */
                    <button
                      className="sim-cta"
                      onClick={() => {
                        const el = document.getElementById('dashboard')
                        if (el && scrollRef.current) {
                          scrollRef.current.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
                        }
                      }}
                    >
                      Explore the data
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}

        {/* ── Layer 3: curtain ─────────────────────────────────────────────────
             Desktop: scroll-driven lift via LandingCurtain's internal transforms.
             Mobile:  same curtain but wrapped in a fade-out that triggers after 1s.
                      Once gone it never returns (no scroll re-trigger on mobile). ── */}
        {(!isMobile || !mobileCurtainGone) && (
          <motion.div
            animate={isMobile ? { opacity: mobileCurtainFading ? 0 : 1 } : { opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 4,
              pointerEvents: 'none',
            }}
          >
            <LandingCurtain scrollY={scrollY} />
          </motion.div>
        )}

        {/* ── Layer 5: scroll-doc — drives curtain on desktop, forwards taps to canvas ── */}
        <div
          ref={scrollRef}
          className="scroll-doc"
          style={mode === 'fpv' ? { pointerEvents: 'none' } : undefined}
          onTouchStart={(e) => {
            touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
          }}
          onTouchEnd={(e) => {
            const t = e.changedTouches[0]
            const start = touchStartRef.current
            touchStartRef.current = null
            if (!effectiveCurtainVisible && t && start && externalSpawnRef.current) {
              const dx = Math.abs(t.clientX - start.x)
              const dy = Math.abs(t.clientY - start.y)
              if (dx < 10 && dy < 10) { // tap, not scroll
                lastTouchRef.current = Date.now()
                externalSpawnRef.current(t.clientX, t.clientY)
              }
            }
          }}
          onClick={(e) => {
            // Block ghost click fired by browser after touch
            if (Date.now() - lastTouchRef.current < 500) return
            if (!effectiveCurtainVisible && externalSpawnRef.current) {
              // Shift+click spawns a car (desktop shortcut)
              if (e.shiftKey) externalSpawnModeRef.current = 'car'
              externalSpawnRef.current(e.clientX, e.clientY)
              if (e.shiftKey) externalSpawnModeRef.current = spawnMode === 'car' ? 'car' : 'ped'
            }
          }}
        >
          {/* Landing spacer — transparent, height drives curtain lift distance on desktop */}
          <div className="landing-spacer" aria-hidden="true" />

          {/* Simulator section spacer — keeps scroll height for sidebar context */}
          <div className="sim-section-spacer" aria-hidden="true" />

          <DashboardSection
            onInView={setDashInView}
            isMobile={isMobile}
            scrollRef={scrollRef}
            paused={paused}
            onPause={setPaused}
            onBackToCity={() => {
              setDashInView(false)
              canvasLayerOpacity.set(1)
              const simSpacer = document.querySelector('.sim-section-spacer') as HTMLElement | null
              scrollRef.current?.scrollTo({ top: simSpacer ? simSpacer.offsetTop : 650, behavior: 'smooth' })
            }}
          />

          <footer className="footer">
            <span>LumiNation · Red Bull Basement Portugal 2026 · Instituto Superior Técnico</span>
            <span>v0.1 · early prototype</span>
          </footer>
        </div>

        {/* ── Layer 100: topbar — fixed, glassmorphic, fades in on scroll/timer ── */}
        <motion.header
          className="topbar"
          style={{
            opacity: effectiveTopbarOpacity,
            pointerEvents: effectiveTopbarVisible ? 'auto' : 'none',
          }}
        >
          <div className="brand">
            <motion.div
              className="brand-mark"
              initial={{ scale: 0.6 }}
              animate={effectiveTopbarVisible ? { scale: 1 } : { scale: 0.6 }}
              transition={{ type: 'spring', stiffness: 420, damping: 18 }}
              onClick={() => {
                // Desktop only: scroll to top re-shows the curtain
                if (!isMobile) scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              title={isMobile ? undefined : 'Back to start'}
              style={{ cursor: isMobile ? 'default' : 'pointer' }}
            >
              L
            </motion.div>
            <div>
              <div className="brand-name"><span className="brand-lumi">Lumi</span><span className="brand-nation">Nation</span></div>
              <div className="brand-tag">The adaptive light corridor · live simulator</div>
            </div>
          </div>
          {/* Citizen view is desktop-only — too heavy for most phones */}
          {!isMobile && (
            <div className="mode-bar">
              {mode === 'fpv'
                ? <button className="active" onClick={() => setMode('lumination')}>← Simulation</button>
                : <button onClick={() => {
                    setMode('fpv')
                    if (dashInView) {
                      setDashInView(false)
                      canvasLayerOpacity.set(1)
                      const simSpacer = document.querySelector('.sim-section-spacer') as HTMLElement | null
                      scrollRef.current?.scrollTo({ top: simSpacer ? simSpacer.offsetTop : 650, behavior: 'smooth' })
                    }
                  }}>Citizen view</button>
              }
            </div>
          )}
        </motion.header>

      </div>
    </MotionConfig>
  )
}
