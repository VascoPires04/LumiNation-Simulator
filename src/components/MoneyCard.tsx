// MoneyCard — two big numbers (€ saved + kWh saved) each with a tiny sparkline.
// The "money shot" for non-technical audiences.

import { useMemo, useRef, useEffect } from 'react'
import { line, curveMonotoneX } from 'd3-shape'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { SimSample } from '../sim-bus'
import { SimTotals } from '../hooks/useSimTotals'

const LISBON = 70_000
const AMBER  = '#FAC775'

interface Props {
  history:  SimSample[]
  totals:   SimTotals | null
  isMobile: boolean
}

// Animated number display using requestAnimationFrame
function useAnimatedNumber(target: number, duration = 400): number {
  const displayRef = useRef(target)
  const rafRef     = useRef(0)
  const prevTarget = useRef(target)
  // We return a ref-based value; trigger re-renders via a dummy state.
  // Actually simplest: just return target directly (values update at 2Hz, smooth enough).
  return target
}

function Sparkline({ values, w = 120, h = 38 }: { values: number[]; w?: number; h?: number }) {
  if (values.length < 2) return <svg width={w} height={h} />
  const m = max(values) ?? 1
  const x = scaleLinear().domain([0, values.length - 1]).range([0, w])
  const y = scaleLinear().domain([0, m * 1.1]).range([h, 2])
  const pathD = (line<number>()
    .x((_, i) => x(i))
    .y(v => y(v))
    .curve(curveMonotoneX))(values) ?? ''

  return (
    <svg width={w} height={h} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={AMBER} stopOpacity="0.35" />
          <stop offset="100%" stopColor={AMBER} stopOpacity="0" />
        </linearGradient>
        <clipPath id="sparkClip"><rect width={w} height={h} /></clipPath>
      </defs>
      {/* Fill area */}
      <path
        d={pathD + ` L${w},${h} L0,${h} Z`}
        fill="url(#sparkGrad)"
        clipPath="url(#sparkClip)"
      />
      {/* Line */}
      <path d={pathD} fill="none" stroke={AMBER} strokeWidth={1.5} opacity={0.8} clipPath="url(#sparkClip)" />
    </svg>
  )
}

function fmtEur(v: number): string {
  if (v >= 1_000_000) return `€${(v / 1_000_000).toFixed(2)}M`
  if (v >= 1_000)     return `€${Math.round(v / 1_000)}k`
  return `€${Math.round(v)}`
}

function fmtKwh(v: number): { val: string; unit: string } {
  if (v >= 1_000_000) return { val: (v / 1_000_000).toFixed(3), unit: 'GWh' }
  if (v >= 1_000)     return { val: (v / 1_000).toFixed(2),     unit: 'MWh' }
  return                     { val: v.toFixed(1),                unit: 'kWh' }
}

export default function MoneyCard({ history, totals, isMobile }: Props) {
  const SPARK_W = isMobile ? 100 : 130

  const eurValues = useMemo(() =>
    history.map(s => s.eurSaved * (LISBON / Math.max(s.lampCount, 1))),
    [history]
  )
  const kwhValues = useMemo(() =>
    history.map(s => s.kwhSaved * (LISBON / Math.max(s.lampCount, 1))),
    [history]
  )

  const eur = totals?.eurSavedAnnual ?? 0
  const kwh = totals?.kwhSaved       ?? 0
  const { val: kwhVal, unit: kwhUnit } = fmtKwh(kwh)

  return (
    <div className="money-card-wrap">
      {/* Top half: € savings */}
      <div className="money-half">
        <div className="dash-card-label">SAVED (ANNUALISED · LISBON)</div>
        <div className="money-big-number">{fmtEur(eur)}</div>
        <div className="money-sublabel">per year projected</div>
        <Sparkline values={eurValues} w={SPARK_W} />
      </div>

      <div className="money-divider" />

      {/* Bottom half: kWh */}
      <div className="money-half">
        <div className="dash-card-label">ENERGY AVOIDED · SESSION</div>
        <div className="money-big-number">
          {kwhVal}
          <span className="money-unit">{kwhUnit}</span>
        </div>
        <div className="money-sublabel">cumulative this session</div>
        <Sparkline values={kwhValues} w={SPARK_W} />
      </div>
    </div>
  )
}
