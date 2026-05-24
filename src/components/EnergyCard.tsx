// EnergyCard — cumulative session kWh saved with sparkline.
// Split from MoneyCard to allow independent card expansion.

import { useMemo, useState } from 'react'
import { line, curveMonotoneX } from 'd3-shape'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import type { SimSample } from '../sim-bus'
import type { SimTotals } from '../hooks/useSimTotals'

const LISBON = 70_000
const AMBER  = '#FAC775'

interface Props {
  history:    SimSample[]
  totals:     SimTotals | null
  isMobile:   boolean
  expandable?: boolean
}

function fmtKwh(v: number): { val: string; unit: string } {
  if (v >= 1_000_000) return { val: (v / 1_000_000).toFixed(3), unit: 'GWh' }
  if (v >= 1_000)     return { val: (v / 1_000).toFixed(2),     unit: 'MWh' }
  return                     { val: v.toFixed(1),                unit: 'kWh' }
}

const W_INT = 300
const H_INT = 58

function Sparkline({ values, uid }: { values: number[]; uid: string }) {
  if (values.length < 2) return <svg width="100%" height={H_INT} />
  const m = max(values) ?? 1
  const x = scaleLinear().domain([0, values.length - 1]).range([0, W_INT])
  const y = scaleLinear().domain([0, m * 1.1]).range([H_INT, 2])
  const pathD = (line<number>()
    .x((_, i) => x(i))
    .y(v => y(v))
    .curve(curveMonotoneX))(values) ?? ''

  return (
    <svg viewBox={`0 0 ${W_INT} ${H_INT}`} width="100%" height={H_INT} preserveAspectRatio="none" style={{ display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id={`sparkGradEnergy-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={AMBER} stopOpacity="0.45" />
          <stop offset="100%" stopColor={AMBER} stopOpacity="0" />
        </linearGradient>
        <clipPath id={`sparkClipEnergy-${uid}`}><rect width={W_INT} height={H_INT} /></clipPath>
      </defs>
      <path
        d={pathD + ` L${W_INT},${H_INT} L0,${H_INT} Z`}
        fill={`url(#sparkGradEnergy-${uid})`}
        clipPath={`url(#sparkClipEnergy-${uid})`}
      />
      <path d={pathD} fill="none" stroke={AMBER} strokeWidth={2} opacity={0.9} clipPath={`url(#sparkClipEnergy-${uid})`} />
    </svg>
  )
}

export default function EnergyCard({ history, totals, isMobile: _isMobile, expandable = false }: Props) {
  const [expanded, setExpanded] = useState(false)

  const kwhValues = useMemo(() =>
    history.map(s => s.kwhSaved * (LISBON / Math.max(s.lampCount, 1))),
    [history]
  )

  const kwh = totals?.kwhSaved ?? 0
  const { val: kwhVal, unit: kwhUnit } = fmtKwh(kwh)

  const inner = (
    <div className="money-card-wrap" style={{ position: 'relative' }}>
      {expandable && (
        <button
          className="card-expand-btn"
          onClick={() => setExpanded(e => !e)}
          aria-label={expanded ? 'Collapse' : 'Expand'}
        >
          {expanded ? '✕' : '⤢'}
        </button>
      )}
      <div className="dash-card-label">ENERGY AVOIDED · SESSION</div>
      <div className="money-big-number">
        {kwhVal}
        <span className="money-unit">{kwhUnit}</span>
      </div>
      <div className="money-sublabel">cumulative this session</div>
      <div className="sparkline-wrap"><Sparkline values={kwhValues} uid="energy" /></div>
    </div>
  )

  if (expanded) {
    return (
      <>
        <div className="card-expand-backdrop" onClick={() => setExpanded(false)} />
        <div className="card-expand-overlay">
          <div className="dash-card card-expand-panel">
            {inner}
          </div>
        </div>
      </>
    )
  }

  return inner
}
