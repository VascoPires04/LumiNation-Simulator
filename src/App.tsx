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

import { useEffect, useRef, useState } from 'react'
import { animate, motion, MotionConfig, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import CitySimulator from './CitySimulator'
import LandingCurtain from './sections/LandingSection'
import { useSimHistory } from './hooks/useSimHistory'
import { useIsMobile } from './hooks/useIsMobile'
import HeadlineMetric from './components/HeadlineMetric'

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

  // ── Autoplay: sparse while curtain is visible; stops when gone or cleared.
  const [userCleared, setUserCleared] = useState(false)
  const [curtainVisible, setCurtainVisible] = useState(true)
  const autoplay: 'sparse' | 'none' = (curtainVisible && !userCleared) ? 'sparse' : 'none'

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

  useEffect(() => {
    return scrollY.on('change', v => {
      setTopbarVisible(v > LIFT * 0.25)
      setSidebarVisible(v > LIFT * 0.1)
      const visible = v < LIFT * 0.65
      setCurtainVisible(visible)
      if (visible) setUserCleared(false)
    })
  }, [scrollY])

  return (
    <MotionConfig reducedMotion="user">
      <div className="app app--v2">

        {/* ── Layer 0: persistent fixed canvas — always z:0 below scroll-doc ── */}
        <motion.div
          className="canvas-layer"
          style={{ scale: canvasScale, y: canvasY }}
        >
          <CitySimulator
            mode={mode}
            variant="full"
            showFullSidebar={false}
            interactive={!curtainVisible}
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
        {isMobile && !curtainVisible && mode !== 'fpv' && (
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
          <>
            {/* Headline — display only, no interaction */}
            <motion.div
              className="hud-headline"
              style={{ opacity: sidebarOpacity }}
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
              style={{
                opacity: sidebarOpacity,
                pointerEvents: sidebarVisible ? undefined : 'none',
              }}
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
                </div>
              </motion.div>
            </motion.nav>
          </>
        )}

        {/* ── Layer 3: curtain — gradient veil + text, pointer-events:none ── */}
        <LandingCurtain scrollY={scrollY} />

        {/* ── Layer 5: scroll-doc — fixed transparent overlay that drives curtain.
              Always pointer-events:auto so scroll works in both directions.
              Spacer children have no click handlers so clicks are "silent".
              Canvas interaction handled by raising canvas-layer z-index above
              scroll-doc (z:5) after curtain lifts.                              ── */}
        <div
          ref={scrollRef}
          className="scroll-doc"
          onTouchStart={(e) => {
            touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
          }}
          onTouchEnd={(e) => {
            const t = e.changedTouches[0]
            const start = touchStartRef.current
            touchStartRef.current = null
            if (!curtainVisible && t && start && externalSpawnRef.current) {
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
            if (!curtainVisible && externalSpawnRef.current) {
              externalSpawnRef.current(e.clientX, e.clientY)
            }
          }}
        >
          {/* Landing spacer — transparent, height drives curtain lift distance */}
          <div className="landing-spacer" aria-hidden="true" />

          {/* Simulator section spacer — keeps scroll height for sidebar context */}
          <div className="sim-section-spacer" aria-hidden="true" />

          {/* Dashboard placeholder — Phase 4 will fill this */}
          <section id="dashboard" className="dashboard-placeholder" aria-label="Dashboard" />

          <footer className="footer">
            <span>LumiNation · Red Bull Basement Portugal 2026 · Instituto Superior Técnico</span>
            <span>v0.1 · early prototype</span>
          </footer>
        </div>

        {/* ── Layer 100: topbar — fixed, glassmorphic, fades in on scroll ───── */}
        <motion.header
          className="topbar"
          style={{
            opacity: topbarOpacity,
            pointerEvents: topbarVisible ? 'auto' : 'none',
          }}
        >
          <div className="brand">
            <motion.div
              className="brand-mark"
              initial={{ scale: 0.6 }}
              animate={topbarVisible ? { scale: 1 } : { scale: 0.6 }}
              transition={{ type: 'spring', stiffness: 420, damping: 18 }}
              onClick={() => scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Back to start"
              style={{ cursor: 'pointer' }}
            >
              L
            </motion.div>
            <div>
              <div className="brand-name"><span className="brand-lumi">Lumi</span><span className="brand-nation">Nation</span></div>
              <div className="brand-tag">The adaptive light corridor · live simulator</div>
            </div>
          </div>
          <div className="mode-bar">
            {mode === 'fpv'
              ? <button className="active" onClick={() => setMode('lumination')}>← Simulation</button>
              : <button onClick={() => setMode('fpv')}>Citizen view</button>
            }
          </div>
        </motion.header>

      </div>
    </MotionConfig>
  )
}
