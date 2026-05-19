// App.tsx — V2 architecture: one persistent fixed canvas, scrollable overlay curtain.
//
// Layer stack (z-index):
//   0  canvas-layer    — position: fixed, CitySimulator variant="ambient", always running
//   1  canvas-dim-veil — position: fixed, semi-transparent black that fades on scroll
//   2  landing-gradient-veil — inside LandingCurtain, fades on scroll
//   3  landing-text-layer    — inside LandingCurtain, lifts on scroll
//   4  scroll-doc      — position: relative, provides scroll height; sections have no bg
//  100 topbar           — position: fixed, fades in on scroll

import { useEffect, useState } from 'react'
import { motion, MotionConfig, useScroll, useTransform } from 'framer-motion'
import CitySimulator from './CitySimulator'
import LandingCurtain from './sections/LandingSection'

type Mode = 'lumination' | 'baseline' | 'compare' | 'fpv'

// Full curtain lift completes over this many px of scroll (matches LandingSection constant)
const LIFT = 600

export default function App() {
  const [mode, setMode] = useState<Mode>('lumination')
  const { scrollY } = useScroll()

  // ── Canvas layer — pull-in zoom effect (Effect C) ───────────────────────
  // Starts slightly zoomed in (1.04), settles to exact-fit (1.0) as curtain lifts.
  // translateY 20→0 gives a "moving forward into the city" feel.
  const canvasScale = useTransform(scrollY, [0, LIFT], [1.04, 1.0])
  const canvasY     = useTransform(scrollY, [0, LIFT], [20, 0])

  // Dim veil over canvas — separate from the gradient veil in LandingCurtain.
  // This one is purely a flat rgba layer that fades as canvas un-dims.
  const dimVeilOpacity = useTransform(scrollY, [0, LIFT * 0.75], [1, 0])

  // ── Topbar — fades in as curtain lifts (Effect E via brand-mark spring) ─
  const topbarOpacity = useTransform(scrollY, [LIFT * 0.25, LIFT * 0.6], [0, 1])
  const [topbarVisible, setTopbarVisible] = useState(false)

  useEffect(() => {
    return scrollY.on('change', v => setTopbarVisible(v > LIFT * 0.25))
  }, [scrollY])

  return (
    // MotionConfig respects prefers-reduced-motion: all FM animations instant when set
    <MotionConfig reducedMotion="user">
      <div className="app app--v2">

        {/* ── Layer 0: persistent fixed canvas ─────────────────────────── */}
        <motion.div
          className="canvas-layer"
          style={{ scale: canvasScale, y: canvasY }}
          aria-hidden="true"
        >
          <CitySimulator
            mode={mode}
            variant="ambient"
            autoplay="sparse"
            dimmed={false}
            interactive={false}
          />
        </motion.div>

        {/* ── Layer 0.5: dim veil — softens canvas at landing state ─────── */}
        <motion.div
          className="canvas-dim-veil"
          style={{ opacity: dimVeilOpacity }}
          aria-hidden="true"
        />

        {/* ── Layers 2–3: landing curtain (gradient veil + text) ────────── */}
        <LandingCurtain />

        {/* ── Layer 4: scrollable document — drives scroll height ───────── */}
        <div className="scroll-doc">
          {/* Landing spacer — transparent, sets height for curtain lift */}
          <div className="landing-spacer" aria-hidden="true" />

          {/* Phase 3: SimulatorSection will be mounted here */}
          {/* Placeholder so the page has content after the landing */}
          <div className="sim-section-placeholder" />

          <footer className="footer">
            <span>LumiNation · Red Bull Basement Portugal 2026 · Instituto Superior Técnico</span>
            <span>v0.1 · early prototype</span>
          </footer>
        </div>

        {/* ── Layer 100: topbar — fixed, fades in on scroll ─────────────── */}
        <motion.header
          className="topbar"
          style={{
            opacity: topbarOpacity,
            pointerEvents: topbarVisible ? 'auto' : 'none',
          }}
        >
          <div className="brand">
            {/* Effect E: brand mark scales in with a spring bounce, one-shot */}
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
