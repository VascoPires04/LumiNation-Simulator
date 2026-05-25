// PowerChart — dual-line comparison chart.
// Always-on: thick bright cream line at top (the waste).
// LumiNation: amber area fill from zero + amber line (what we actually use).
// Gap between them = savings — immediately obvious.

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { max } from 'd3-array'
import { axisBottom, axisLeft } from 'd3-axis'
import { scaleLinear, scaleTime } from 'd3-scale'
import { select } from 'd3-selection'
import { area, curveMonotoneX, line } from 'd3-shape'
import { SimSample } from '../sim-bus'

const CITY_LAMPS = 100_000
const AMBER  = '#FF9500'
const ORANGE = '#C85000'

interface Props {
  history:  SimSample[]
  paused:   boolean
  isMobile: boolean
}

interface Point { t: Date; lumi: number; baseline: number }

function fmtPower(w: number): { val: string; unit: string } {
  if (w >= 1_000_000) return { val: (w / 1_000_000).toFixed(2), unit: 'MW' }
  if (w >= 1_000)     return { val: (w / 1_000).toFixed(1),     unit: 'kW' }
  return               { val: w.toFixed(0),                      unit: 'W'  }
}

const MARGIN     = { top: 16, right: 14, bottom: 36, left: 52 }
const MARGIN_MOB = { top: 10, right: 10, bottom: 28, left: 44 }

export default function PowerChart({ history, paused, isMobile }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const xAxisRef     = useRef<SVGGElement>(null)
  const yAxisRef     = useRef<SVGGElement>(null)

  const [dims, setDims] = useState({ w: 600, h: isMobile ? 180 : 260 })
  const [hoverX, setHoverX] = useState<number | null>(null)

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      setDims({ w: el.offsetWidth, h: isMobile ? 180 : 260 })
    })
    ro.observe(el)
    setDims({ w: el.offsetWidth, h: isMobile ? 180 : 260 })
    return () => ro.disconnect()
  }, [isMobile])

  const mg = isMobile ? MARGIN_MOB : MARGIN
  const iW = Math.max(10, dims.w - mg.left - mg.right)
  const iH = Math.max(10, dims.h - mg.top  - mg.bottom)

  const data = useMemo<Point[]>(() => {
    return history.map(s => {
      const scale = CITY_LAMPS / Math.max(s.lampCount, 1)
      return {
        t:        new Date(s.t),
        lumi:     s.powerW    * scale,
        baseline: s.baselineW * scale,
      }
    })
  }, [history])

  const xDomain = useMemo<[Date, Date]>(() => {
    if (!data.length) return [new Date(Date.now() - 60_000), new Date()]
    return [data[0].t, data[data.length - 1].t]
  }, [data])

  const yMax = useMemo(() => max(data, d => d.baseline) ?? 100, [data])

  const xScale = useMemo(
    () => scaleTime().domain(xDomain).range([0, iW]),
    [xDomain, iW]
  )
  const yScale = useMemo(
    () => scaleLinear().domain([0, yMax * 1.08]).range([iH, 0]).nice(),
    [yMax, iH]
  )

  // LumiNation area (0 → lumi)
  const lumiAreaPath = useMemo(() => {
    if (data.length < 2) return ''
    return (area<Point>()
      .x(d => xScale(d.t))
      .y0(iH)
      .y1(d => yScale(d.lumi))
      .curve(curveMonotoneX))(data) ?? ''
  }, [data, xScale, yScale, iH])

  // LumiNation top line
  const lumiLinePath = useMemo(() => {
    if (data.length < 2) return ''
    return (line<Point>()
      .x(d => xScale(d.t))
      .y(d => yScale(d.lumi))
      .curve(curveMonotoneX))(data) ?? ''
  }, [data, xScale, yScale])

  // Always-on reference line
  const baselinePath = useMemo(() => {
    if (data.length < 2) return ''
    return (line<Point>()
      .x(d => xScale(d.t))
      .y(d => yScale(d.baseline))
      .curve(curveMonotoneX))(data) ?? ''
  }, [data, xScale, yScale])

  // Always-on area fill (0 → baseline) — cream, very transparent
  const baselineAreaPath = useMemo(() => {
    if (data.length < 2) return ''
    return (area<Point>()
      .x(d => xScale(d.t))
      .y0(iH)
      .y1(d => yScale(d.baseline))
      .curve(curveMonotoneX))(data) ?? ''
  }, [data, xScale, yScale, iH])

  // Savings fill — gap between lumi and baseline (the visual savings zone)
  const savingsAreaPath = useMemo(() => {
    if (data.length < 2) return ''
    return (area<Point>()
      .x(d => xScale(d.t))
      .y0(d => yScale(d.lumi))
      .y1(d => yScale(d.baseline))
      .curve(curveMonotoneX))(data) ?? ''
  }, [data, xScale, yScale])

  // D3 axes
  useEffect(() => {
    if (!xAxisRef.current) return
    select(xAxisRef.current)
      .call(
        axisBottom(xScale)
          .ticks(isMobile ? 3 : 5)
          .tickFormat(d => {
            const date = d as Date
            const totalSec = date.getMinutes() * 60 + date.getSeconds()
            if (totalSec === 0) return '0s'
            if (totalSec < 60) return `${totalSec}s`
            const mins = Math.floor(totalSec / 60)
            const secs = totalSec % 60
            return secs === 0 ? `${mins}m` : `${mins}m${secs}s`
          })
      )
      .call(g => g.select('.domain').attr('stroke', 'rgba(255,255,255,0.1)'))
      .call(g => g.selectAll('.tick line').attr('stroke', 'rgba(255,255,255,0.1)'))
      .call(g => g.selectAll('.tick text')
        .attr('fill', 'rgba(240,240,245,0.38)')
        .attr('font-size', isMobile ? '9' : '10')
        .attr('font-family', 'Inter, sans-serif'))
  }, [xScale, isMobile])

  useEffect(() => {
    if (!yAxisRef.current) return
    const { unit } = fmtPower(yMax)
    select(yAxisRef.current)
      .call(
        axisLeft(yScale)
          .ticks(isMobile ? 3 : 4)
          .tickFormat(v => {
            const n = v as number
            if (unit === 'MW') return (n / 1_000_000).toFixed(1)
            if (unit === 'kW') return (n / 1_000).toFixed(0)
            return n.toFixed(0)
          })
      )
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line')
        .attr('stroke', 'rgba(255,255,255,0.06)')
        .attr('x2', iW))
      .call(g => g.selectAll('.tick text')
        .attr('fill', 'rgba(240,240,245,0.38)')
        .attr('font-size', isMobile ? '9' : '10')
        .attr('font-family', 'Inter, sans-serif'))
  }, [yScale, yMax, iW, isMobile])

  // Hover
  const hoverPoint = useMemo(() => {
    if (hoverX === null || !data.length) return null
    const t = xScale.invert(hoverX).getTime()
    let closest = data[0]
    let minDiff = Math.abs(data[0].t.getTime() - t)
    for (const p of data) {
      const diff = Math.abs(p.t.getTime() - t)
      if (diff < minDiff) { minDiff = diff; closest = p }
    }
    return { x: xScale(closest.t), ...closest }
  }, [hoverX, data, xScale])

  // Current savings %
  const latest  = data[data.length - 1]
  const savePct = latest && latest.baseline > 0
    ? Math.round(100 * (1 - latest.lumi / latest.baseline))
    : 0

  return (
    <div ref={containerRef} className="power-chart-wrap">
      <svg
        width={dims.w}
        height={dims.h}
        onMouseMove={e => {
          const rect = (e.currentTarget as SVGElement).getBoundingClientRect()
          setHoverX(e.clientX - rect.left - mg.left)
        }}
        onMouseLeave={() => setHoverX(null)}
      >
        <defs>
          <linearGradient id="lumiAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#FF9500" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#FF9500" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="baselineAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%"  stopColor="#F99040" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#F99040" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="savingsGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#C85000" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#C85000" stopOpacity="0.04" />
          </linearGradient>
          <clipPath id="chartClip">
            <rect width={iW} height={iH} />
          </clipPath>
          <filter id="amberGlow" x="-20%" y="-60%" width="140%" height="220%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="creamGlow" x="-10%" y="-60%" width="120%" height="220%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>


        <g transform={`translate(${mg.left},${mg.top})`}>
          {/* Chart bg */}
          <rect width={iW} height={iH} fill="rgba(255,255,255,0.012)" rx={4} />

          {/* Horizontal grid */}
          {yScale.ticks(isMobile ? 3 : 4).map(tick => (
            <line
              key={`h-${tick}`}
              x1={0} x2={iW}
              y1={yScale(tick)} y2={yScale(tick)}
              stroke="rgba(255,255,255,0.055)"
              strokeWidth={1}
            />
          ))}

          {/* Vertical grid */}
          {xScale.ticks(isMobile ? 3 : 5).map((tick, i) => (
            <line
              key={`v-${i}`}
              x1={xScale(tick)} x2={xScale(tick)}
              y1={0} y2={iH}
              stroke="rgba(255,255,255,0.055)"
              strokeWidth={1}
            />
          ))}

          <g clipPath="url(#chartClip)">
            {/* Always-on area fill (0 → baseline) — cream, very transparent, behind amber */}
            <path d={baselineAreaPath} fill="url(#baselineAreaGrad)" />

            {/* Savings gap fill — between lumi and baseline */}
            <path d={savingsAreaPath} fill="url(#savingsGrad)" />

            {/* LumiNation amber area fill (0 → lumi) */}
            <path d={lumiAreaPath} fill="url(#lumiAreaGrad)" />

            {/* LumiNation top edge */}
            <path d={lumiLinePath} fill="none" stroke={AMBER} strokeWidth={2.5} opacity={0.9} />

            {/* Always-on reference — brighter orange line above */}
            <path d={baselinePath} fill="none" stroke={ORANGE} strokeWidth={4} filter="url(#creamGlow)" />
            <path d={baselinePath} fill="none" stroke={ORANGE} strokeWidth={2.5} opacity={0.9} />
          </g>

          {/* Axes */}
          <g ref={xAxisRef} transform={`translate(0,${iH})`} />
          <g ref={yAxisRef} />

          {/* Savings badge — bottom right inside chart */}
          <g transform={`translate(${iW - (isMobile ? 68 : 76)},${iH - (isMobile ? 36 : 44)})`}>
            <rect width={isMobile ? 68 : 76} height={isMobile ? 32 : 38} rx={6} fill="rgba(10,10,18,0.7)" stroke="rgba(250,199,117,0.2)" strokeWidth={0.5} />
            <text
              x={isMobile ? 34 : 38} y={isMobile ? 16 : 18}
              fill={AMBER}
              fontSize={isMobile ? 16 : 19}
              fontFamily="Outfit,Inter,sans-serif"
              fontWeight={600}
              letterSpacing="-0.02em"
              textAnchor="middle"
            >{savePct}%</text>
            <text
              x={isMobile ? 34 : 38} y={isMobile ? 27 : 31}
              fill="rgba(240,240,245,0.45)"
              fontSize={8}
              fontFamily="Inter,sans-serif"
              textAnchor="middle"
            >saved now</text>
          </g>

          {/* Hover crosshair */}
          {hoverPoint && (
            <g>
              <line
                x1={hoverPoint.x} x2={hoverPoint.x}
                y1={0} y2={iH}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth={1}
                strokeDasharray="3 2"
              />
              <circle cx={hoverPoint.x} cy={yScale(hoverPoint.lumi)}    r={3.5} fill={AMBER} />
              <circle cx={hoverPoint.x} cy={yScale(hoverPoint.baseline)} r={3}   fill={ORANGE} />
              {(() => {
                const boxW = isMobile ? 148 : 160
                const tx = hoverPoint.x > iW * 0.65 ? hoverPoint.x - boxW - 8 : hoverPoint.x + 8
                const { val: lv, unit: lu } = fmtPower(hoverPoint.lumi)
                const { val: bv }           = fmtPower(hoverPoint.baseline)
                const pct = hoverPoint.baseline > 0
                  ? Math.round(100 * (1 - hoverPoint.lumi / hoverPoint.baseline))
                  : 0
                return (
                  <g transform={`translate(${tx},8)`}>
                    <rect rx={5} width={boxW} height={52} fill="rgba(10,10,18,0.93)" stroke="rgba(255,255,255,0.08)" strokeWidth={0.5} />
                    <text x={8} y={16} fill={AMBER}                 fontSize={10} fontFamily="Inter,sans-serif" fontWeight={600}>{lv} {lu} · LumiNation</text>
                    <text x={8} y={30} fill="rgba(255,200,140,0.8)" fontSize={9}  fontFamily="Inter,sans-serif">{bv} {lu} · always-on</text>
                    <text x={8} y={44} fill="rgba(100,220,100,0.85)" fontSize={9}  fontFamily="Inter,sans-serif">{pct}% less right now</text>
                  </g>
                )
              })()}
            </g>
          )}
        </g>

        {paused && (
          <text
            x={mg.left + iW / 2} y={mg.top + iH / 2}
            fill="rgba(250,199,117,0.22)"
            fontSize={11}
            fontFamily="Inter,sans-serif"
            textAnchor="middle"
            fontStyle="italic"
          >data frozen</text>
        )}
      </svg>
    </div>
  )
}
