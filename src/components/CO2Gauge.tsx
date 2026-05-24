// CO2Gauge — D3 arc-based radial gauge showing projected annual CO₂ savings.
// Value:   Lisbon-scaled annual CO₂ avoided (kg)
// Max:     theoretical max = all lamps fully dimmed
// Animates smoothly with requestAnimationFrame interpolation.

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { arc } from 'd3-shape'
import { interpolateNumber } from 'd3-interpolate'
import { SimTotals } from '../hooks/useSimTotals'
import type { SimSample } from '../sim-bus'

// 3/4 arc: from -135° (lower-left) clockwise to 135° (lower-right)
const START_ANGLE = -Math.PI * 0.75  // -135°
const END_ANGLE   =  Math.PI * 0.75  //  135°
const ARC_SPAN    = END_ANGLE - START_ANGLE  // 270° = 1.5π

// ~0.12 kg CO₂ per km driving (IPCC reference)
const CO2_PER_KM  = 0.12

interface Props {
  totals:   SimTotals | null
  history:  SimSample[]
  isMobile: boolean
}

function formatCO2(kg: number): { val: string; unit: string } {
  if (kg >= 1_000_000) return { val: (kg / 1_000_000).toFixed(2), unit: 'Mt CO₂' }
  if (kg >= 1_000)     return { val: (kg / 1_000).toFixed(1),     unit: 't CO₂'  }
  return                      { val: kg.toFixed(0),                unit: 'kg CO₂' }
}

export default function CO2Gauge({ totals, isMobile, history: _history }: Props) {
  const animRef      = useRef<number>(0)
  const prevFill     = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [fillAngle, setFillAngle] = useState(START_ANGLE)
  const [availW, setAvailW] = useState(isMobile ? 200 : 240)

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setAvailW(el.offsetWidth))
    ro.observe(el)
    setAvailW(el.offsetWidth)
    return () => ro.disconnect()
  }, [])

  const SIZE = Math.min(isMobile ? 200 : 240, availW - 8)
  const CX   = SIZE / 2
  const CY   = SIZE / 2 + (isMobile ? 10 : 14)
  const R_OUT = SIZE * 0.40
  const R_IN  = SIZE * 0.29
  const TRACK_W = R_OUT - R_IN

  // Target fill ratio
  const fillRatio = totals && totals.baselineW > 0
    ? Math.min(1, Math.max(0, (totals.baselineW - totals.powerW) / totals.baselineW))
    : 0
  const targetAngle = START_ANGLE + fillRatio * ARC_SPAN

  // Smooth animation
  useEffect(() => {
    const from = prevFill.current
    const to   = targetAngle
    if (Math.abs(from - to) < 0.001) return

    const duration = 400
    const start = performance.now()
    const interp = interpolateNumber(from, to)

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t // ease in-out
      const current = interp(eased)
      setFillAngle(current)
      if (t < 1) {
        animRef.current = requestAnimationFrame(tick)
      } else {
        prevFill.current = to
      }
    }
    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [targetAngle])

  // Arc generators
  const trackArc = arc()({
    innerRadius: R_IN,
    outerRadius: R_OUT,
    startAngle:  START_ANGLE,
    endAngle:    END_ANGLE,
  }) ?? ''

  const fillArc = arc()({
    innerRadius: R_IN,
    outerRadius: R_OUT,
    startAngle:  START_ANGLE,
    endAngle:    fillAngle,
  }) ?? ''

  // Tick marks at 25% intervals
  const ticks = [0.25, 0.5, 0.75, 1.0].map(pct => {
    const angle = START_ANGLE + pct * ARC_SPAN
    const cos = Math.cos(angle - Math.PI / 2)
    const sin = Math.sin(angle - Math.PI / 2)
    const r1 = R_OUT + 4
    const r2 = R_OUT + 10
    return {
      x1: CX + cos * r1, y1: CY + sin * r1,
      x2: CX + cos * r2, y2: CY + sin * r2,
      pct,
    }
  })

  const { val, unit } = formatCO2(totals?.co2KgAnnual ?? 0)
  const kmEq = totals ? Math.round((totals.co2KgAnnual / CO2_PER_KM) / 1000) : 0
  const pct  = totals ? Math.round(fillRatio * 100) : 0

  return (
    <div ref={containerRef} className="co2-gauge-wrap">
      <div className="dash-card-label">CO₂ AVOIDED · ANNUAL PROJECTION</div>
      <svg width={SIZE} height={SIZE} style={{ overflow: 'visible', display: 'block', margin: '0 auto' }}>
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#EF9F27" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FAC775" stopOpacity="1" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="gaugeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* d3-arc outputs paths centred at origin; translate to CX,CY */}
        <g transform={`translate(${CX},${CY})`}>
          {/* Track */}
          <path d={trackArc} fill="rgba(255,255,255,0.06)" />

          {/* Filled arc */}
          {fillAngle > START_ANGLE + 0.02 && (
            <path d={fillArc} fill="url(#gaugeGrad)" filter="url(#gaugeGlow)" />
          )}

          {/* Tick marks */}
          {ticks.map(({ x1, y1, x2, y2, pct: p }) => (
            <line
              key={p}
              x1={x1 - CX} y1={y1 - CY}
              x2={x2 - CX} y2={y2 - CY}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth={1}
            />
          ))}
        </g>

        {/* Centre text — positioned absolutely in SVG coords */}
        <text
          x={CX} y={CY - TRACK_W * 0.5}
          textAnchor="middle"
          fontFamily="Outfit, Inter, sans-serif"
          fontWeight={500}
          fontSize={isMobile ? 24 : 30}
          fill="#FAC775"
          letterSpacing="-0.02em"
        >{val}</text>
        <text
          x={CX} y={CY + (isMobile ? 16 : 20)}
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize={isMobile ? 10 : 11}
          fill="rgba(240,240,245,0.6)"
          letterSpacing="0.05em"
          style={{ textTransform: 'uppercase' }}
        >{unit} / year</text>
        <text
          x={CX} y={CY + (isMobile ? 32 : 38)}
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize={isMobile ? 9 : 10}
          fill="rgba(240,240,245,0.38)"
        >Lisbon · 70k lamps</text>

        {/* Percentage at arc tip */}
        <text
          x={CX} y={CY + R_OUT + (isMobile ? 20 : 24)}
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize={isMobile ? 11 : 12}
          fill="rgba(240,240,245,0.55)"
        >{pct}% of max savings</text>
      </svg>

      {/* Comparison context */}
      <p className="co2-comparison">
        ≈ {kmEq.toLocaleString()} thousand km of driving avoided per year
      </p>
    </div>
  )
}
