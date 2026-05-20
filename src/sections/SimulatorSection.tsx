// SimulatorSection — Phase 3 compact overlay.
//
// Lives inside scroll-doc (z-index 4, pointer-events:none by default).
// The compact overlay has pointer-events:auto and is position:sticky so it
// stays visible while the user scrolls through the simulator section.
//
// The full CitySimulator sidebar (z-index 0) is visually covered by this
// overlay — same right-side position, solid glassmorphic background.
// No variant switching → no canvas resize jank.
//
// Lisbon scale is always ON here (per spec). No toggle shown.
// Mode buttons: LumiNation / Always-on / Compare only (Citizen view stays in topbar).

import { useRef } from 'react'
import { useSimHistory } from '../hooks/useSimHistory'
import HeadlineMetric from '../components/HeadlineMetric'

type Mode = 'lumination' | 'baseline' | 'compare' | 'fpv'

interface Props {
  mode: Mode
  onModeChange: (m: Mode) => void
  baselinePct: number
  onBaselineChange: (v: number) => void
  lookaheadSec: number
  onLookaheadChange: (v: number) => void
}

const LISBON_LAMPS = 70_000

export default function SimulatorSection({
  mode, onModeChange,
  baselinePct, onBaselineChange,
  lookaheadSec, onLookaheadChange,
}: Props) {
  const history = useSimHistory(60)
  const latest  = history[history.length - 1]

  // Lisbon-scaled annual € savings
  const lisbonEur = latest
    ? latest.eurSaved * (LISBON_LAMPS / Math.max(latest.lampCount, 1))
    : 0
  const fmtEur = lisbonEur >= 1_000_000
    ? `€${(lisbonEur / 1_000_000).toFixed(1)}M`
    : lisbonEur >= 1_000
    ? `€${Math.round(lisbonEur / 1_000)}k`
    : `€${Math.round(lisbonEur)}`

  const overlayRef = useRef<HTMLDivElement>(null)

  return (
    <section className="sim-section" aria-label="Simulator controls">
      {/* Transparent left half — canvas shows through */}
      <div className="sim-section-gap" />

      {/* Sticky compact overlay — covers the full sidebar beneath */}
      <div className="sim-compact-overlay" ref={overlayRef}>

        {/* Headline metric — Lisbon scale, always on */}
        <div className="sim-compact-headline">
          <HeadlineMetric
            value={fmtEur}
            label="saved per year"
            sublabel="Lisbon · 70,000 streetlights"
          />
          <span className="lisbon-badge">Lisbon scale</span>
        </div>

        {/* Mode buttons */}
        <div className="sim-compact-modes">
          <button
            className={mode === 'lumination' ? 'active' : ''}
            onClick={() => onModeChange('lumination')}
          >LumiNation</button>
          <button
            className={mode === 'baseline' ? 'active' : ''}
            onClick={() => onModeChange('baseline')}
          >Always-on</button>
          <button
            className={mode === 'compare' ? 'active' : ''}
            onClick={() => onModeChange('compare')}
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
            onChange={e => onBaselineChange(Number(e.target.value) / 100)}
          />

          <label className="sim-compact-label">
            <span>Lookahead</span>
            <span className="sim-compact-value">{lookaheadSec.toFixed(1)}s</span>
          </label>
          <input
            type="range" min={1} max={8} step={0.5}
            value={lookaheadSec}
            onChange={e => onLookaheadChange(Number(e.target.value))}
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

      </div>
    </section>
  )
}
