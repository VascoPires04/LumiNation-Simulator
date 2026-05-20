// App.tsx — V2 architecture: one persistent fixed canvas (full variant), scrollable curtain on top.
//
// Z-index stack (bottom → top):
//   0   canvas-layer      — position:fixed, inset:0 — full CitySimulator, always interactive
//   1   canvas-dim-veil   — position:fixed, pointer-events:none — flat rgba dim, fades on scroll
//   2   landing-gradient-veil — position:fixed, pointer-events:none — textured dim, fades on scroll
//   3   landing-text-layer    — position:fixed, pointer-events:none — wordmark/slogan/cue, lifts on scroll
//   4   scroll-doc        — position:relative, pointer-events:none — transparent, drives scroll height
//   100 topbar            — position:fixed — fades in on scroll, interactive when visible
//
// Curtain layers (1, 2, 3) are all pointer-events:none.
// Clicks pass straight through to the full simulator at z-index 0.

import { useEffect, useState } from 'react'
import { motion, MotionConfig, useScroll, useTransform } from 'framer-motion'
import CitySimulator from './CitySimulator'
import LandingCurtain from './sections/LandingSection'

type Mode = 'lumination' | 'baseline' | 'compare' | 'fpv'

// Curtain lift completes over LIFT px of scroll
const LIFT = 600

export default function App() {
  const [mode, setMode] = useState<Mode>('lumination')
  const { scrollY } = useScroll()

  // ── Canvas layer — pull-in zoom (Effect C) ────────────────────────────────
  // scale 1.04→1.0, translateY 20→0: "moving into the city" on curtain lift.
  const canvasScale = useTransform(scrollY, [0, LIFT], [1.04, 1.0])
  const canvasY     = useTransform(scrollY, [0, LIFT], [20, 0])

  // ── Flat dim veil — fades independently of gradient veil ──────────────────
  const dimVeilOpacity = useTransform(scrollY, [0, LIFT * 0.75], [1, 0])

  // ── Topbar — fades in as curtain lifts (Effect E) ─────────────────────────
  const topbarOpacity = useTransform(scrollY, [LIFT * 0.25, LIFT * 0.6], [0, 1])
  const [topbarVisible, setTopbarVisible] = useState(false)

  // ── Autoplay: sparse while curtain is visible; stops when gone or cleared.
  // curtainVisible is bidirectional — resets if user scrolls back up.
  // userCleared also resets when curtain comes back, so sparse resumes.
  const [userCleared, setUserCleared] = useState(false)
  const [curtainVisible, setCurtainVisible] = useState(true)
  const autoplay: 'sparse' | 'none' = (curtainVisible && !userCleared) ? 'sparse' : 'none'

  // Disable browser scroll restoration so refresh always starts at top
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    return scrollY.on('change', v => {
      setTopbarVisible(v > LIFT * 0.25)
      const visible = v < LIFT
      setCurtainVisible(visible)
      // Reset clear flag when curtain comes back so sparse resumes
      if (visible) setUserCleared(false)
    })
  }, [scrollY])

  return (
    <MotionConfig reducedMotion="user">
      <div className="app app--v2">

        {/* ── Layer 0: persistent fixed canvas — FULL simulator, always interactive ── */}
        {/* Not aria-hidden: the simulator is the primary interactive content. */}
        <motion.div
          className="canvas-layer"
          style={{ scale: canvasScale, y: canvasY }}
        >
          <CitySimulator
            mode={mode}
            variant="full"
            autoplay={autoplay}
            onClear={() => setUserCleared(true)}
          />
        </motion.div>

        {/* ── Layer 1: flat dim veil — softens canvas at landing state ──────── */}
        <motion.div
          className="canvas-dim-veil"
          style={{ opacity: dimVeilOpacity }}
          aria-hidden="true"
        />

        {/* ── Layers 2–3: curtain — gradient veil + text, all pointer-events:none ── */}
        <LandingCurtain />

        {/* ── Layer 4: scroll-doc — transparent, provides scroll height only ── */}
        <div className="scroll-doc">
          {/* Landing spacer — transparent, height drives curtain lift distance */}
          <div className="landing-spacer" aria-hidden="true" />

          {/* Phase 3: SimulatorSection mounts here (controls overlay on fixed canvas) */}
          <div className="sim-section-placeholder" />

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
            {/* Effect E: brand mark bounces in, one-shot, on topbar appearance */}
            <motion.div
              className="brand-mark"
              initial={{ scale: 0.6 }}
              animate={topbarVisible ? { scale: 1 } : { scale: 0.6 }}
              transition={{ type: 'spring', stiffness: 420, damping: 18 }}
            >
              L
            </motion.div>
            <div>
              <div className="brand-name">LumiNation</div>
              <div className="brand-tag">The adaptive light corridor · live simulator</div>
            </div>
          </div>
          <div className="mode-bar">
            <button className={mode === 'lumination' ? 'active' : ''} onClick={() => setMode('lumination')}>LumiNation</button>
            <button className={mode === 'baseline'   ? 'active' : ''} onClick={() => setMode('baseline')}>Always-on</button>
            <button className={mode === 'compare'    ? 'active' : ''} onClick={() => setMode('compare')}>Compare</button>
            <button className={mode === 'fpv'        ? 'active' : ''} onClick={() => setMode('fpv')}>Citizen view</button>
          </div>
        </motion.header>

      </div>
    </MotionConfig>
  )
}
