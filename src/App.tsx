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
import lumiLogo from '../images/LumiNation_White.png'
import { animate, motion, MotionConfig, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import CitySimulator from './CitySimulator'
import LandingCurtain from './sections/LandingSection'
import { useSimHistory } from './hooks/useSimHistory'
import { useIsMobile } from './hooks/useIsMobile'
import HeadlineMetric from './components/HeadlineMetric'
import ParticleBackground from './components/ParticleBackground'
import DashboardSection from './sections/DashboardSection'
import { CITY_LAMPS } from './constants'

type Mode = 'lumination' | 'baseline' | 'compare' | 'fpv'

// Custom slider — works reliably on mobile (pointer capture, no native range quirks)
function TouchSlider({ min, max, step, value, onChange }: {
  min: number; max: number; step: number; value: number; onChange: (v: number) => void
}) {
  const trackRef = useRef<HTMLDivElement>(null)

  const calc = (clientX: number) => {
    const rect = trackRef.current!.getBoundingClientRect()
    const pct  = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const raw  = min + pct * (max - min)
    return Math.max(min, Math.min(max, Math.round(raw / step) * step))
  }

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    trackRef.current!.setPointerCapture(e.pointerId)
    onChange(calc(e.clientX))
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (e.buttons === 0) return
    onChange(calc(e.clientX))
  }

  const pct = (value - min) / (max - min)
  return (
    <div
      ref={trackRef}
      className="touch-slider-track"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      style={{ touchAction: 'none' }}
    >
      <div className="touch-slider-fill" style={{ width: `${pct * 100}%` }} />
      <div className="touch-slider-thumb" style={{ left: `${pct * 100}%` }} />
    </div>
  )
}

// Curtain lift completes over LIFT px of scroll
const LIFT = 600
export default function App() {
  const isMobile = useIsMobile()
  const isNarrowScreen = useIsMobile(1024)
  const [mode, setMode]               = useState<Mode>('lumination')
  const [baselinePct, setBaselinePct] = useState(0.20)
  const [lookaheadSec, setLookaheadSec] = useState(5.0)
  const [spawnMode, setSpawnMode]     = useState<'ped' | 'car'>('ped')
  const [tooltip, setTooltip]         = useState<'baseline' | 'lookahead' | null>(null)
  const externalSpawnModeRef = useRef<'ped' | 'car'>('ped')
  const hudNavRef     = useRef<HTMLElement>(null)
  const hudInnerRef   = useRef<HTMLDivElement>(null)
  const hudMaxRef     = useRef(260)
  const [hudMax, setHudMax] = useState(260)

  const hudY       = useMotionValue(260)  // start collapsed
  const [hudOpen, setHudOpen] = useState(false)
  const [infoBaseBottom, setInfoBaseBottom] = useState(128)
  const infoBtnBottom  = useTransform(hudY, v => Math.max(8, infoBaseBottom - v))
  const infoHintBottom = useTransform(hudY, v => Math.max(8, infoBaseBottom - v + 58))
  // Fade info button out as panel opens (hudY goes from max→small), in as it closes
  const infoBtnOpacity = useTransform(hudY, v => Math.min(1, Math.max(0, (v - 40) / (hudMax - 40))))
  const springCfg = { type: 'spring' as const, stiffness: 400, damping: 38 }

  // Observe inner content height — hudMax always equals content height so
  // sliding by hudMax pushes content fully off-screen on any phone
  useEffect(() => {
    if (!isMobile) return
    const el = hudInnerRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      if (!el.isConnected) return  // ignore stale callbacks after unmount
      const h = el.offsetHeight + 40 // +40 for handle row + padding
      hudMaxRef.current = h
      setHudMax(h)
      if (!hudOpen) hudY.jump(h)  // sync collapsed position without animation
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [isMobile])

  // When returning from FPV, the HUD remounts but hudY may have drifted.
  // Re-sync hudY to the correct open/closed position based on hudOpen state.
  useEffect(() => {
    if (!isMobile || mode === 'fpv') return
    if (hudOpen) {
      hudY.jump(Math.round(window.innerHeight * 0.06))
    } else {
      hudY.jump(hudMaxRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, isMobile])

  const HUD_OPEN_Y = Math.round(window.innerHeight * 0.06)
  const hudToggle = () => {
    const max = hudMaxRef.current
    animate(hudY, hudOpen ? max : HUD_OPEN_Y, springCfg)
    setHudOpen(o => !o)
  }

  // Manual drag — pure pointer tracking, no Framer Motion drag system
  const handleDragRef = useRef<{
    startPointerY: number
    startHudY: number
    lastY: number
    lastT: number
    vel: number
  } | null>(null)

  const onHandlePointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    handleDragRef.current = {
      startPointerY: e.clientY,
      startHudY: hudY.get(),
      lastY: e.clientY,
      lastT: performance.now(),
      vel: 0,
    }
  }
  const onHandlePointerMove = (e: React.PointerEvent) => {
    const d = handleDragRef.current
    if (!d) return
    const now = performance.now()
    const dt = now - d.lastT
    const dy = e.clientY - d.lastY
    d.vel = dt > 0 ? dy / dt * 1000 : d.vel
    d.lastY = e.clientY
    d.lastT = now
    const max = hudMaxRef.current
    const next = Math.min(max, Math.max(HUD_OPEN_Y, d.startHudY + (e.clientY - d.startPointerY)))
    hudY.set(next)
  }
  const onHandlePointerUp = () => {
    const d = handleDragRef.current
    if (!d) return
    handleDragRef.current = null
    const cur = hudY.get()
    const vel = d.vel
    const max = hudMaxRef.current
    if (hudOpen ? (cur > max * 0.4 || vel > 300) : (cur < max * 0.6 || vel < -300)) {
      animate(hudY, hudOpen ? max : HUD_OPEN_Y, springCfg)
      setHudOpen(o => !o)
    } else {
      animate(hudY, hudOpen ? HUD_OPEN_Y : max, springCfg)
    }
  }
  const scrollRef        = useRef<HTMLDivElement>(null)
  const externalSpawnRef = useRef<((cx: number, cy: number) => void) | null>(null)
  const externalZoomRef  = useRef<((delta: number) => void) | null>(null)
  const spawnMouseDownRef = useRef<{ x: number; y: number } | null>(null)
  const spawnDidDragRef   = useRef(false)

  const curtainVisibleRef = useRef(true)
  const dashInViewRef     = useRef(false)
  const dashUnlockedRef   = useRef(false)  // true only after user clicks "Explore the data"

  // Intercept wheel on scroll-doc and forward to zoom when over the simulation
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      // Only zoom when curtain is gone and dashboard is not in view
      if (!externalZoomRef.current) return
      if (curtainVisibleRef.current || dashInViewRef.current) return
      e.preventDefault()
      e.stopPropagation()
      // Real mouse wheel: large deltaY per click (≥100px), no horizontal component.
      // Trackpad two-finger scroll: many small events — use tiny fixed step to avoid
      // runaway zoom (10% × 60Hz = completely out of control).
      const isMouseWheel = Math.abs(e.deltaX) < 2 && Math.abs(e.deltaY) >= 100
      const delta = isMouseWheel
        ? (e.deltaY > 0 ? 0.9 : 1.1)
        : (e.deltaY > 0 ? 0.988 : (1 / 0.988))
      externalZoomRef.current(delta)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])
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

  // Measure nav position for info button placement
  useEffect(() => {
    if (!sidebarVisible || !hudNavRef.current) return
    const rect = hudNavRef.current.getBoundingClientRect()
    setInfoBaseBottom(window.innerHeight - rect.top - 24
      
    )
  }, [sidebarVisible])

  // ── Topbar — fades in as curtain lifts (Effect E) ─────────────────────────
  const topbarOpacity = useTransform(scrollY, [LIFT * 0.55, LIFT * 0.85], [0, 1])
  const [topbarVisible, setTopbarVisible] = useState(false)

  // ── Autoplay / curtain visibility ────────────────────────────────────────
  // Declared early so effectiveCurtainVisible can reference curtainVisible below.
  const [userCleared, setUserCleared] = useState(false)
  const [curtainVisible, setCurtainVisible] = useState(true)

  // ── Mobile-specific MotionValues for HUD/topbar fade-in (scroll is 0 on mobile) ──
  const mobileHudOpacity     = useMotionValue(0)
  const mobileTopbarOpacity  = useMotionValue(0)
  const mobileVeilOpacity    = useMotionValue(1)
  const mobileCanvasScale    = useMotionValue(1.04)
  const mobileCanvasY        = useMotionValue(20)

  // ── Mobile curtain: auto-dismiss after 1s, re-triggerable via logo tap ──────
  const [mobileCurtainFading, setMobileCurtainFading] = useState(false)
  const [mobileCurtainGone,   setMobileCurtainGone]   = useState(false)
  const [mobileCurtainKey,    setMobileCurtainKey]    = useState(0)

  useEffect(() => {
    if (!isMobile) return
    const isReplay = mobileCurtainKey > 0
    setMobileCurtainGone(false)
    setMobileCurtainFading(false)
    setSidebarVisible(false)
    setTopbarVisible(false)

    if (isReplay) {
      // Smooth reverse: fade HUD/topbar out, veil/canvas back to intro state
      animate(mobileHudOpacity,    0,    { duration: 0.35, ease: 'easeIn' })
      animate(mobileTopbarOpacity, 0,    { duration: 0.35, ease: 'easeIn' })
      animate(mobileVeilOpacity,   1,    { duration: 0.5,  ease: 'easeIn' })
      animate(mobileCanvasScale,   1.04, { duration: 0.5,  ease: 'easeIn' })
      animate(mobileCanvasY,       20,   { duration: 0.5,  ease: 'easeIn' })
    } else {
      // First load: instant jump to intro state
      mobileHudOpacity.set(0)
      mobileTopbarOpacity.set(0)
      mobileVeilOpacity.set(1)
      mobileCanvasScale.set(1.04)
      mobileCanvasY.set(20)
    }

    // Curtain appears (fade-in on replay takes ~0.8s), hold 1s, then dismiss
    const holdDelay = isReplay ? 1800 : 1000
    const t1 = setTimeout(() => {
      setMobileCurtainFading(true)
      setSidebarVisible(true)
      setTopbarVisible(true)
      animate(mobileHudOpacity,    1,   { duration: 0.55, ease: 'easeOut', delay: 0.15 })
      animate(mobileTopbarOpacity, 1,   { duration: 0.55, ease: 'easeOut', delay: 0.25 })
      animate(mobileVeilOpacity,   0,   { duration: 0.8,  ease: 'easeOut' })
      animate(mobileCanvasScale,   1.0, { duration: 0.8,  ease: 'easeOut' })
      animate(mobileCanvasY,       0,   { duration: 0.8,  ease: 'easeOut' })
    }, holdDelay)
    const t2 = setTimeout(() => setMobileCurtainGone(true), holdDelay + 800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [isMobile, mobileCurtainKey, mobileHudOpacity, mobileTopbarOpacity, mobileVeilOpacity, mobileCanvasScale, mobileCanvasY])

  // Effective values — mobile uses timer-based, desktop uses scroll-based
  const effectiveCurtainVisible  = isMobile ? !mobileCurtainGone  : curtainVisible
  curtainVisibleRef.current = effectiveCurtainVisible
  const effectiveSidebarOpacity  = isMobile ? mobileHudOpacity    : sidebarOpacity
  const effectiveTopbarOpacity   = isMobile ? mobileTopbarOpacity : topbarOpacity
  const effectiveSidebarVisible  = sidebarVisible
  const effectiveTopbarVisible   = topbarVisible

  const autoplay: 'sparse' | 'none' = (effectiveCurtainVisible && !userCleared) ? 'sparse' : 'none'

  // ── Lisbon-scaled headline metric ─────────────────────────────────────────
  const simHistory = useSimHistory(60)
  const latest     = simHistory[simHistory.length - 1]
  const lisbonEur = latest
    ? latest.eurSaved * (CITY_LAMPS / Math.max(latest.lampCount, 1))
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

  // ── Pause state — shared by HUD sidebar and dashboard ────────────────────
  const [paused, setPaused] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [showInfoHint, setShowInfoHint] = useState(false)

  // Show bouncing hint every time the curtain lifts
  useEffect(() => {
    if (effectiveCurtainVisible) return
    setShowInfoHint(true)
    const t = setTimeout(() => setShowInfoHint(false), 3200)
    return () => clearTimeout(t)
  }, [effectiveCurtainVisible])

  // ── Dashboard: canvas fades linearly with scroll ──────────────────────────
  const [dashInView, setDashInView] = useState(false)
  dashInViewRef.current = dashInView
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

  // ── Scroll lock — after curtain lifts, block downward scroll until user clicks Explore ──
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      if (curtainVisibleRef.current || dashUnlockedRef.current) return
      if (el.scrollTop > LIFT + 5) el.scrollTop = LIFT
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  // ── Desktop scroll listener — curtain/sidebar/topbar + linear canvas fade ──
  useEffect(() => {
    return scrollY.on('change', v => {
      setTopbarVisible(v > LIFT * 0.55)
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
          style={{ scale: isMobile ? mobileCanvasScale : canvasScale, y: isMobile ? mobileCanvasY : canvasY, opacity: canvasLayerOpacity }}
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
            externalZoomRef={externalZoomRef}
          />
        </motion.div>

        {/* ── Mobile spawn buttons — z:10, above scroll-doc, only after curtain lifts ── */}
        {(isMobile || isNarrowScreen) && !effectiveCurtainVisible && mode !== 'fpv' && !dashInView && (
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

        {/* ── Info button + first-time hint arrow ── */}
        {!effectiveCurtainVisible && !dashInView && mode !== 'fpv' && (
          <>
            {showInfoHint && (
              <motion.div
                className="info-hint-arrow"
                aria-hidden="true"
                style={isMobile ? { bottom: infoHintBottom, opacity: infoBtnOpacity } : undefined}
              >
                <span>Click here</span>
                <span className="info-hint-caret">↓</span>
              </motion.div>
            )}
            <motion.button
              className="info-btn"
              onClick={() => setShowInfo(true)}
              aria-label="About LumiNation"
              style={isMobile ? { bottom: infoBtnBottom, opacity: infoBtnOpacity } : undefined}
            >i</motion.button>
          </>
        )}

        {/* ── Info modal ── */}
        {showInfo && (
          <div className="info-modal-backdrop" onClick={() => setShowInfo(false)}>
            <div className="info-modal" onClick={e => e.stopPropagation()}>
              <button className="info-modal-close" onClick={() => setShowInfo(false)}>✕</button>
              <div className="info-modal-tag">LumiNation · live simulator</div>
              <h2 className="info-modal-title">"We are not turning the lights off.<br />We are turning them on intelligently."</h2>
              <p className="info-modal-body">
                LumiNation retrofits existing streetlights with a small sensor module that detects pedestrians and vehicles, then coordinates with nearby lamps to create a smooth corridor of light that travels with you — illuminating ahead and gently dimming behind.
              </p>
              <p className="info-modal-body">
                This simulator shows a top-down view of a city block at night. Lamps respond in real time to agents moving through the streets. Use the controls to adjust baseline brightness and corridor reach, spawn pedestrians or cars, and compare LumiNation against always-on lighting.
              </p>
              <div className="info-modal-hint">
                {isMobile
                  ? <>
                      <span>Tap anywhere on the street to spawn a pedestrian</span>
                      <span>Use the <strong>Ped / Car toggle</strong> in the controls to switch agent type</span>
                    </>
                  : <>
                      <span>Click anywhere on the street to spawn a pedestrian</span>
                      <span>Shift + click to spawn a car</span>
                    </>
                }
              </div>
            </div>
          </div>
        )}

        {/* ── Layer 1: flat dim veil — softens canvas at landing state ──────── */}
        <motion.div
          className="canvas-dim-veil"
          style={{ opacity: isMobile ? mobileVeilOpacity : dimVeilOpacity }}
          aria-hidden="true"
        />

        {/* ── Layer 2: HUD — two independent elements for responsive layout ──
             Desktop: both right-side, headline above controls.
             Mobile:  headline top-center, controls bottom bar.          ── */}
        {mode !== 'fpv' && (
          <motion.div
            style={{ opacity: effectiveSidebarOpacity, pointerEvents: effectiveSidebarVisible && !(isMobile && dashInView) ? undefined : 'none', position: 'relative', zIndex: 15 }}
          >
            {/* Headline + optional pause icon when in dashboard */}
            <motion.div
              className="hud-headline"
              aria-live="polite"
              aria-label="Live savings estimate"
            >
              <HeadlineMetric
                value={fmtEur}
                label="saved per year"
                sublabel="CITY · 100K LAMPS"
                valueAction={dashInView ? (
                  <button
                    className={`hud-pause-icon${paused ? ' active' : ''}`}
                    onClick={() => setPaused(p => !p)}
                    aria-label={paused ? 'Resume data' : 'Pause data'}
                  >
                    {paused ? '▶' : '⏸'}
                  </button>
                ) : undefined}
              />
            </motion.div>

            {/* Controls — modes + sliders + CTA, one group */}
            <motion.nav
              ref={hudNavRef}
              className="hud-controls"
              aria-label="Simulator controls"
            >
              {/* Body — only y-translated via hudY, no Framer Motion drag */}
              <motion.div
                className="hud-controls-body"
                style={isMobile ? { y: hudY } : undefined}
              >
                {/* Handle — pure pointer tracking, no FM drag */}
                {isMobile && (
                  <div
                    className={`hud-controls-handle-row${!hudOpen ? ' hud-controls-handle-row--nudge' : ''}`}
                    onPointerDown={onHandlePointerDown}
                    onPointerMove={onHandlePointerMove}
                    onPointerUp={onHandlePointerUp}
                    onPointerCancel={onHandlePointerUp}
                    onClick={hudToggle}
                    style={{ touchAction: 'none' }}
                  >
                    <div className="hud-controls-handle" />
                  </div>
                )}

                <div ref={hudInnerRef} className="hud-controls-inner" style={{ pointerEvents: isMobile && !hudOpen ? 'none' : 'auto' }}>
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
                      <TouchSlider
                        min={0} max={100} step={1}
                        value={Math.round(baselinePct * 100)}
                        onChange={v => setBaselinePct(v / 100)}
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
                      <TouchSlider
                        min={0.5} max={8} step={0.5}
                        value={lookaheadSec}
                        onChange={setLookaheadSec}
                      />
                    </div>
                  </div>

                  {dashInView ? (
                    /* Dashboard context — back only (pause is the icon in dash-header) */
                    <div className="hud-dash-actions">
                      <button
                        className="sim-cta"
                        onClick={() => {
                          dashUnlockedRef.current = false
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
                        dashUnlockedRef.current = true
                        if (isMobile) {
                          setDashInView(true)
                        } else {
                          const el = document.getElementById('dashboard')
                          if (el && scrollRef.current) {
                            scrollRef.current.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
                          }
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
            key={mobileCurtainKey}
            initial={isMobile && mobileCurtainKey > 0 ? { opacity: 0 } : false}
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

        {/* ── Layer 5: scroll-doc — drives curtain on desktop, drives scroll height ── */}
        <div
          ref={scrollRef}
          className="scroll-doc"
          style={mode === 'fpv' ? { pointerEvents: 'none' } : undefined}
          onMouseDown={(e) => {
            spawnMouseDownRef.current = { x: e.clientX, y: e.clientY }
            spawnDidDragRef.current = false
          }}
          onMouseMove={(e) => {
            const d = spawnMouseDownRef.current
            if (d && !spawnDidDragRef.current && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 5) {
              spawnDidDragRef.current = true
            }
          }}
          onMouseUp={() => { spawnMouseDownRef.current = null }}
          onClick={(e) => {
            if (spawnDidDragRef.current) return
            if (!effectiveCurtainVisible && externalSpawnRef.current) {
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
            inView={dashInView}
            isMobile={isMobile}
            scrollRef={scrollRef}
            paused={paused}
            onPause={setPaused}
            onBackToCity={() => {
              setDashInView(false)
              canvasLayerOpacity.set(1)
              if (!isMobile) {
                const simSpacer = document.querySelector('.sim-section-spacer') as HTMLElement | null
                scrollRef.current?.scrollTo({ top: simSpacer ? simSpacer.offsetTop : 650, behavior: 'smooth' })
              }
            }}
          />

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
                if (isMobile) setMobileCurtainKey(k => k + 1)
                else scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              title={isMobile ? 'Back to start' : 'Back to start'}
              style={{ cursor: 'pointer' }}
            >
              <img src={lumiLogo} alt="LumiNation" className="brand-logo-img" />
            </motion.div>
          </div>
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
        </motion.header>

        {/* ── Fixed footer — mirrors topbar, fades in when dashboard is in view ── */}
        <motion.footer
          className="footer app-footer"
          animate={{ opacity: dashInView ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: dashInView ? 'auto' : 'none' }}
        >
          <span>LumiNation · Red Bull Basement Portugal 2026</span>
          <span>v.1 · published</span>
        </motion.footer>

      </div>
    </MotionConfig>
  )
}
