// EnergyCard — cumulative session kWh saved with sparkline.

import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { line, curveMonotoneX } from 'd3-shape'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import type { SimSample } from '../sim-bus'
import type { SimTotals } from '../hooks/useSimTotals'
import { CITY_LAMPS } from '../constants'
const AMBER  = '#FAC775'

interface Props {
  history:    SimSample[]
  totals:     SimTotals | null
  isMobile:   boolean
  expandable?: boolean
}

function fmtKwh(v: number): { val: string; unit: string } {
  if (v >= 1_000_000) return { val: (v / 1_000_000).toFixed(1), unit: 'GWh' }
  if (v >= 1_000)     return { val: (v / 1_000).toFixed(1),     unit: 'MWh' }
  return                     { val: Math.round(v).toString(),    unit: 'kWh' }
}

function fmtKwhShort(v: number): string {
  const { val, unit } = fmtKwh(v)
  return `${val}${unit}`
}

function Sparkline({ values, uid, h, w, elapsed }: {
  values: number[]; uid: string; h: number; w: number; elapsed: number
}) {
  if (w < 20 || values.length < 2) return <svg width={w} height={h} />
  const fSize = Math.min(Math.max(6, Math.round(h * 0.12)), 11)
  const ML = Math.round(fSize * 6.5)
  const MR = 4
  const MT = fSize + 2   // room for top label text above the chart area
  const MB = fSize + 6
  const m      = max(values) ?? 1
  const iW     = w - ML - MR
  const iH     = h - MT - MB
  const nTicks = h < 70 ? 3 : 4
  // Step 1: get a stable step size from a nice provisional scale
  const provisional = scaleLinear().domain([0, Math.max(m, 1e-9)]).nice()
  const provTicks = provisional.ticks(nTicks).filter(t => t > 0)
  const step = provTicks.length >= 2 ? provTicks[1] - provTicks[0] : (provisional.domain() as [number,number])[1]
  const labelStep = step * 2  // labeled ticks are every 2 steps
  // Step 2: find the next labeled (even) ceiling above the data
  const evenCeiling = Math.ceil(Math.max(m, 1e-9) / labelStep) * labelStep
  // Step 3: only pre-jump two steps when data is within one step of the labeled ceiling
  // (approaching it) — otherwise one step of headroom is enough
  const yMax = m > evenCeiling - step ? evenCeiling + labelStep : evenCeiling
  const niceY = scaleLinear().domain([0, yMax])
  const rawTicks = niceY.ticks(nTicks).filter(t => t > 0 && t <= yMax)
  // Deduplicate by formatted label
  const seen = new Set<string>()
  const ticks = rawTicks.filter(t => {
    const label = fmtKwhShort(t)
    if (seen.has(label)) return false
    seen.add(label)
    return true
  })
  if (ticks.length === 0 && yMax > 0) ticks.push(yMax)
  const x      = scaleLinear().domain([0, values.length - 1]).range([0, iW])
  const y      = scaleLinear().domain([0, yMax]).range([iH, 0])
  const pathD  = (line<number>()
    .x((_, i) => x(i))
    .y(v => y(v))
    .curve(curveMonotoneX))(values) ?? ''
  const elStr  = elapsed < 60 ? `${elapsed}s` : `${Math.floor(elapsed / 60)}m`

  return (
    <svg width={w} height={h} style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`sgK-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={AMBER} stopOpacity="0.45" />
          <stop offset="100%" stopColor={AMBER} stopOpacity="0" />
        </linearGradient>
        <clipPath id={`scK-${uid}`}><rect width={iW} height={iH} /></clipPath>
      </defs>

      {/* Grid lines on every tick, labels only on even indices */}
      {ticks.map((t, i) => (
        <g key={t}>
          {i % 2 === 0 && (
            <text x={ML - 4} y={MT + y(t) + 4} textAnchor="end"
              fontSize={fSize} fill="rgba(240,240,245,0.38)" fontFamily="Inter,sans-serif">
              {fmtKwhShort(t)}
            </text>
          )}
          <line x1={ML} x2={w - MR} y1={MT + y(t)} y2={MT + y(t)}
            stroke="rgba(255,255,255,0.06)" strokeWidth={1} />
        </g>
      ))}

      {/* X labels */}
      <text x={ML} y={h - 3} fontSize={fSize} fill="rgba(255,255,255,0.4)" fontFamily="Inter,sans-serif">0s</text>
      <text x={w - MR} y={h - 3} textAnchor="end" fontSize={fSize} fill="rgba(255,255,255,0.4)" fontFamily="Inter,sans-serif">{elStr}</text>

      <g transform={`translate(${ML},${MT})`}>
        <path d={pathD + ` L${iW},${iH} L0,${iH} Z`} fill={`url(#sgK-${uid})`} clipPath={`url(#scK-${uid})`} />
        <path d={pathD} fill="none" stroke={AMBER} strokeWidth={1.5} opacity={0.9} clipPath={`url(#scK-${uid})`} />
      </g>
    </svg>
  )
}

export default function EnergyCard({ history, totals, isMobile, expandable = false }: Props) {
  const [expanded, setExpanded] = useState(false)
  const cardRef  = useRef<HTMLDivElement>(null)
  const wrapRef  = useRef<HTMLDivElement>(null)
  const [sparkW, setSparkW] = useState(200)
  const [sparkH, setSparkH] = useState(isMobile ? 90 : 110)

  useLayoutEffect(() => {
    const card = cardRef.current
    const wrap = wrapRef.current
    if (!card || !wrap) return
    const update = () => {
      setSparkW(wrap.offsetWidth)
      if (!isMobile) setSparkH(Math.max(60, card.offsetHeight * 0.55))
    }
    const ro = new ResizeObserver(update)
    ro.observe(card)
    ro.observe(wrap)
    update()
    return () => ro.disconnect()
  }, [isMobile])

  const kwhValues = useMemo(() =>
    history.map(s => s.kwhSaved * (CITY_LAMPS / Math.max(s.lampCount, 1))),
    [history]
  )
  const elapsed = Math.round(history.length / 2)
  const kwh = totals?.kwhSaved ?? 0
  const { val: kwhVal, unit: kwhUnit } = fmtKwh(kwh)
  const H   = isMobile ? 90 : sparkH

  const inner = (
    <div className="money-card-wrap" ref={cardRef} style={{ position: 'relative' }}>
      {expandable && (
        <button className="card-expand-btn" onClick={() => setExpanded(e => !e)}
          aria-label={expanded ? 'Collapse' : 'Expand'}>
          {expanded ? '✕' : '⤢'}
        </button>
      )}
      <div className="dash-card-label">ENERGY SAVED · SESSION</div>
      <div className="money-big-number">
        {kwhVal}<span className="money-unit">{kwhUnit}</span>
      </div>
      {!isMobile && <div className="money-sublabel">cumulative this session</div>}
      <div className="sparkline-wrap" ref={wrapRef}>
        <Sparkline values={kwhValues} uid="energy" h={H} w={sparkW} elapsed={elapsed} />
      </div>
    </div>
  )

  if (expanded) {
    return (
      <>
        <div className="card-expand-backdrop" onClick={() => setExpanded(false)} />
        <div className="card-expand-overlay">
          <div className="dash-card card-expand-panel">{inner}</div>
        </div>
      </>
    )
  }
  return inner
}
