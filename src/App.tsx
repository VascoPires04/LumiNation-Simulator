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

import { useEffect, useState } from 'react'
import { motion, MotionConfig, useScroll, useTransform } from 'framer-motion'
import CitySimulator from './CitySimulator'
import LandingCurtain from './sections/LandingSection'
import { useSimHistory } from './hooks/useSimHistory'
import HeadlineMetric from './components/HeadlineMetric'

type Mode = 'lumination' | 'baseline' | 'compare' | 'fpv'

// Curtain lift completes over LIFT px of scroll
const LIFT = 600
const LISBON_LAMPS = 70_000

export default function App() {
  const [mode, setMode]               = useState<Mode>('lumination')
  const [baselinePct, setBaselinePct] = useState(0.30)
  const [lookaheadSec, setLookaheadSec] = useState(4.0)
  const { scrollY } = useScroll()

  // ── Canvas layer — pull-in zoom (Effect C) ────────────────────────────────
  const canvasScale = useTransform(scrollY, [0, LIFT], [1.04, 1.0])
  const canvasY     = useTransform(scrollY, [0, LIFT], [20, 0])

  // ── Flat dim veil — fades independently of gradient veil ──────────────────
  const dimVeilOpacity = useTransform(scrollY, [0, LIFT * 0.75], [1, 0])

  // ── Compact sidebar — fades in as curtain starts lifting ──────────────────
  const sidebarOpacity = useTransform(scrollY, [LIFT * 0.1, LIFT * 0.45], [0, 1])
  const [sidebarVisible, setSidebarVisible] = useState(false)

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

  // Disable browser scroll restoration so refresh always starts at top
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    return scrollY.on('change', v => {
      setTopbarVisible(v > LIFT * 0.25)
      setSidebarVisible(v > LIFT * 0.1)
      const visible = v < LIFT
      setCurtainVisible(visible)
      if (visible) setUserCleared(false)
    })
  }, [scrollY])

  return (
    <MotionConfig reducedMotion="user">
      <div className="app app--v2">

        {/* ── Layer 0: persistent fixed canvas — FULL simulator, no sidebar ── */}
        <motion.div
          className="canvas-layer"
          style={{ scale: canvasScale, y: canvasY }}
        >
          <CitySimulator
            mode={mode}
            variant="full"
            showFullSidebar={false}
            autoplay={autoplay}
            onClear={() => setUserCleared(true)}
            baselinePct={baselinePct}
            onBaselineChange={setBaselinePct}
            lookaheadSec={lookaheadSec}
            onLookaheadChange={setLookaheadSec}
          />
        </motion.div>

        {/* ── Layer 1: flat dim veil — softens canvas at landing state ──────── */}
        <motion.div
          className="canvas-dim-veil"
          style={{ opacity: dimVeilOpacity }}
          aria-hidden="true"
        />

        {/* ── Layer 2: compact sidebar — fixed right, fades in after curtain starts lifting ── */}
        <motion.aside
          className="sim-compact-sidebar"
          style={{
            opacity: sidebarOpacity,
            pointerEvents: sidebarVisible ? 'auto' : 'none',
          }}
          aria-label="Simulator controls"
        >
          {/* Headline metric — Lisbon scale always on, sublabel replaces badge */}
          <HeadlineMetric
            value={fmtEur}
            label="saved per year"
            sublabel="LISBON · 70K LAMPS"
          />

          {/* Mode buttons */}
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

          {/* Sliders */}
          <div className="sim-compact-controls">
            <label className="sim-compact-label">
              <span>Baseline brightness</span>
              <span className="sim-compact-value">{Math.round(baselinePct * 100)}%</span>
            </label>
            <input
              type="range" min={15} max={100}
              value={Math.round(baselinePct * 100)}
              onChange={e => setBaselinePct(Number(e.target.value) / 100)}
            />

            <label className="sim-compact-label">
              <span>Lookahead</span>
              <span className="sim-compact-value">{lookaheadSec.toFixed(1)}s</span>
            </label>
            <input
              type="range" min={1} max={8} step={0.5}
              value={lookaheadSec}
              onChange={e => setLookaheadSec(Number(e.target.value))}
            />
          </div>

          {/* CTA */}
          <button
            className="sim-cta"
            onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore the data
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.aside>

        {/* ── Layer 3: curtain — gradient veil + text, pointer-events:none ── */}
        <LandingCurtain />

        {/* ── Layer 4: scroll-doc — transparent, provides scroll height only ── */}
        <div className="scroll-doc">
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
            >
              L
            </motion.div>
            <div>
              <div className="brand-name">LumiNation</div>
              <div className="brand-tag">The adaptive light corridor · live simulator</div>
            </div>
          </div>
          <div className="mode-bar">
            <button className={mode === 'fpv' ? 'active' : ''} onClick={() => setMode('fpv')}>Citizen view</button>
          </div>
        </motion.header>

      </div>
    </MotionConfig>
  )
}
