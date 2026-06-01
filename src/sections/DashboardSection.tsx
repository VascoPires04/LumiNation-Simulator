// DashboardSection — Phase 4 live data dashboard.
// Layout: PowerChart full width on top, then 3 cards.
// Desktop: 3 cards in equal columns. Mobile: CO₂ left (spans 2 rows), € + kWh stacked right.
// Pause state lifted to App.tsx.

import { useEffect, useRef, useState } from 'react'
import { useSimHistory } from '../hooks/useSimHistory'
import { useSimTotals } from '../hooks/useSimTotals'
import PowerChart  from '../components/PowerChart'
import CO2Gauge   from '../components/CO2Gauge'
import EurCard    from '../components/EurCard'
import EnergyCard from '../components/EnergyCard'

interface Props {
  onInView:        (v: boolean) => void
  inView:          boolean
  isMobile:        boolean
  scrollRef:       React.RefObject<HTMLDivElement>
  paused:          boolean
  onPause:         (p: boolean) => void
  onBackToCity:    () => void
  captureFreezeRef?: React.MutableRefObject<(() => void) | null>
}

export default function DashboardSection({ onInView, inView, isMobile, paused, onPause, onBackToCity, captureFreezeRef }: Props) {
  const rootRef = useRef<HTMLElement>(null)

  const liveHistory = useSimHistory(600)
  const liveTotals  = useSimTotals()

  const [frozenHistory, setFrozenHistory] = useState(liveHistory)
  const [frozenTotals,  setFrozenTotals]  = useState(liveTotals)

  const liveHistoryRef = useRef(liveHistory)
  liveHistoryRef.current = liveHistory
  const liveTotalsRef = useRef(liveTotals)
  liveTotalsRef.current = liveTotals

  // Expose capture function — caller can invoke this synchronously before setting paused=true
  // so the frozen snapshot and the pause state land in the same React render batch (no flash)
  if (captureFreezeRef) {
    captureFreezeRef.current = () => {
      setFrozenHistory([...liveHistoryRef.current])
      setFrozenTotals(liveTotalsRef.current)
    }
  }

  const handlePause = (p: boolean) => onPause(p)

  const displayHistory = paused ? frozenHistory : liveHistory
  const displayTotals  = paused ? frozenTotals  : liveTotals

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => onInView(entry.intersectionRatio > 0),
      { threshold: [0, 0.01] }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [onInView])

  const hasData = displayHistory.length >= 2

  const elapsed = (() => {
    const secs = Math.round(displayHistory.length / 2)
    return secs < 60 ? `${secs}s` : `${Math.round(secs / 60)} min`
  })()

  return (
    <section ref={rootRef} id="dashboard" className={`dashboard-section${isMobile && inView ? ' is-visible' : ''}`} aria-label="Live data dashboard">

      <div className="dash-header">
        <div>
          <div className="dash-title-row">
            <h2 className="dash-title">How a smart city saves money</h2>
            {isMobile && (
              <button
                className={`dash-pause-icon${paused ? ' active' : ''}`}
                onClick={() => { if (!paused) captureFreezeRef?.current?.(); handlePause(!paused) }}
                aria-label={paused ? 'Resume data' : 'Pause data'}
              >
                {paused ? '▶' : '⏸'}
              </button>
            )}
          </div>
          <p className="dash-subtitle">
            Live data from your session · last {elapsed}
            {paused && <span className="dash-frozen-badge"> · frozen</span>}
            <br />city scale · 100,000 lamps
          </p>
        </div>
      </div>

      {!hasData && (
        <div className="dash-empty">
          <p>Waiting for simulation data…</p>
          <p className="dash-empty-hint">Scroll up and let the simulation run for a few seconds.</p>
        </div>
      )}

      {hasData && (
        <div className="dash-charts-area">
          <div className="dash-card dash-chart-row">
            <div className="dash-card-label">POWER OVER TIME</div>
            <div className="dash-chart-legend">
              <span className="dash-legend-dot dash-legend-dot--amber" />
              <span className="dash-legend-label">LumiNation</span>
              <span className="dash-legend-line dash-legend-line--alwayson" />
              <span className="dash-legend-label">Always-on</span>
            </div>
            <PowerChart history={displayHistory} paused={paused} isMobile={isMobile} />
          </div>

          <div className="dash-bottom-cards">
            <div className="dash-card dash-bottom-card">
              <CO2Gauge totals={displayTotals} history={displayHistory} isMobile={isMobile} />
            </div>
            <div className="dash-card dash-bottom-card">
              <EurCard history={displayHistory} totals={displayTotals} isMobile={isMobile} />
            </div>
            <div className="dash-card dash-bottom-card">
              <EnergyCard history={displayHistory} totals={displayTotals} isMobile={isMobile} />
            </div>
          </div>

        </div>
      )}

      {isMobile && (
        <button className="dash-back-btn dash-back-btn--bottom" onClick={onBackToCity}>
          ↑ Back to city
        </button>
      )}

    </section>
  )
}
