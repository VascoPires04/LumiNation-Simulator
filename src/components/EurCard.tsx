// EurCard — annual € savings with sparkline.
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

function fmtEur(v: number): string {
  if (v >= 1_000_000) return `€${(v / 1_000_000).toFixed(2)}M`
  if (v >= 1_000)     return `€${Math.round(v / 1_000)}k`
  return `€${Math.round(v)}`
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
        <linearGradient id={`sparkGradEur-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={AMBER} stopOpacity="0.45" />
          <stop offset="100%" stopColor={AMBER} stopOpacity="0" />
        </linearGradient>
        <clipPath id={`sparkClipEur-${uid}`}><rect width={W_INT} height={H_INT} /></clipPath>
      </defs>
      <path
        d={pathD + ` L${W_INT},${H_INT} L0,${H_INT} Z`}
        fill={`url(#sparkGradEur-${uid})`}
        clipPath={`url(#sparkClipEur-${uid})`}
      />
      <path d={pathD} fill="none" stroke={AMBER} strokeWidth={2} opacity={0.9} clipPath={`url(#sparkClipEur-${uid})`} />
    </svg>
  )
}

export default function EurCard({ history, totals, isMobile: _isMobile, expandable = false }: Props) {
  const [expanded, setExpanded] = useState(false)

  const eurValues = useMemo(() =>
    history.map(s => s.eurSaved * (LISBON / Math.max(s.lampCount, 1))),
    [history]
  )

  const eur = totals?.eurSavedAnnual ?? 0

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
      <div className="dash-card-label">SAVED (ANNUALISED · LISBON)</div>
      <div className="money-big-number">{fmtEur(eur)}</div>
      <div className="money-sublabel">per year projected</div>
      <div className="sparkline-wrap"><Sparkline values={eurValues} uid="eur" /></div>
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
