import { useEffect, useRef, useState } from 'react'
import FPV3D from './FPV3D'
import { useIsMobile } from './hooks/useIsMobile'
import SimControls from './components/SimControls'
import { simBus } from './sim-bus'

type Mode = 'lumination' | 'baseline' | 'compare' | 'fpv'
type AgentType = 'ped' | 'car'

interface Lamp {
  x: number
  y: number
  brightness: number
  target: number
  streetId: number
  side: string
}

interface Street {
  ax: number
  ay: number
  bx: number
  by: number
  dir: 'h' | 'v'
}

interface Agent {
  x: number
  y: number
  vx: number
  vy: number
  type: AgentType
  street: Street
  t: number
  stride: number
  color: string | null
}

type BlockZone = 'downtown' | 'mall' | 'civic' | 'residential' | 'commercial'
interface Building {
  x: number; y: number; w: number; h: number
  btype: 'residential' | 'commercial' | 'office'
  isoH: number  // oblique wall height in screen-px (0 in flat mode, assigned in layoutCity)
  zone: BlockZone
}

interface Tree { x: number; y: number }
interface ParkZone { x: number; y: number; w: number; h: number }

interface Props {
  mode: Mode
  variant?: 'full' | 'compact' | 'ambient'
  interactive?: boolean
  autoplay?: 'none' | 'sparse'
  dimmed?: boolean
  onClear?: () => void
  // Controlled baseline + lookahead — when provided, overrides internal state
  baselinePct?: number
  onBaselineChange?: (v: number) => void
  lookaheadSec?: number
  onLookaheadChange?: (v: number) => void
  // When false, renders canvas only — no sidebar, no chart, no controls
  showFullSidebar?: boolean
  // External spawn — lets a parent element (e.g. scroll-doc overlay) forward taps
  externalSpawnRef?: React.MutableRefObject<((cx: number, cy: number) => void) | null>
  // External spawn mode — lets parent control ped/car toggle
  externalSpawnModeRef?: React.MutableRefObject<'ped' | 'car'>
  // External zoom — lets parent forward wheel events that it intercepts
  externalZoomRef?: React.MutableRefObject<((delta: number) => void) | null>
}

// Constants — tweak these and the whole sim re-balances
const LAMP_WATTS = 80
const PRICE_PER_KWH = 0.15
const CO2_PER_KWH = 0.13           // Portugal grid 2023 — APA official data
const HOURS_PER_YEAR_NIGHT = 4100
const PED_SPEED = 1.4
const CAR_SPEED = 11
const METERS_PER_PIXEL = 0.35
const LAMP_REACH_PED = 60
const LAMP_REACH_CAR = 25
const LAMP_REACH_BEHIND_PED = 70
const LAMP_REACH_BEHIND_CAR = 60
const MAX_VISUAL_BRI = 0.1  // Visual scale: physical brightness × this = visual brightness (smooth, no dead zone)
const CAR_COLORS = ['#3a6fb5', '#a83232', '#2c8a4a', '#5a4a8a', '#c47a1a']

// ── Oblique-iso projection ────────────────────────────────────────────────────
// Toggle: set to true to enable 3D oblique rendering. false = flat top-down.
const ISO_MODE = true

// Y-shear for the ground plane (roads, sidewalks).
// sx = wx always — x-extent is preserved, streets always fill the canvas width.
// sy = wy − (wx − W/2) × ISO_SHEAR — right side of canvas lifts slightly.
// 0.12 is subtle: ±36px shift at the canvas edges of a 600px wide canvas.
const ISO_SHEAR = 0.12

// Oblique wall extrusion for buildings — screen-space, per unit of building height.
// Walls extend ISO_WALL_DX px right and ISO_WALL_DY px down per height-pixel.
const ISO_WALL_DX = 0.55
const ISO_WALL_DY = 0.72

/**
 * Project world (wx, wy) → screen (sx, sy) with a Y-shear.
 * sx = wx (width unchanged).  sy = wy − (wx − W/2) × ISO_SHEAR.
 * In flat mode this is a no-op.
 */
function isoProject(wx: number, wy: number, W: number, _H: number): { sx: number; sy: number } {
  if (!ISO_MODE) return { sx: wx, sy: wy }
  return { sx: wx, sy: wy - (wx - W * 0.5) * ISO_SHEAR }
}

/**
 * Inverse: screen tap (sx, sy) → world (wx, wy). Used for spawn-on-tap.
 */
function isoUnproject(sx: number, sy: number, W: number, _H: number): { wx: number; wy: number } {
  if (!ISO_MODE) return { wx: sx, wy: sy }
  return { wx: sx, wy: sy + (sx - W * 0.5) * ISO_SHEAR }
}

/**
 * Draw a road segment as a filled parallelogram quad (iso mode).
 * halfW is the half-width of the road layer in world pixels.
 * dir='h' → horizontal street; dir='v' → vertical street.
 */
function drawRoadQuad(
  ctx: CanvasRenderingContext2D,
  s: Street,
  halfW: number,
  W: number, H: number,
) {
  let p0: { sx: number; sy: number }
  let p1: { sx: number; sy: number }
  let p2: { sx: number; sy: number }
  let p3: { sx: number; sy: number }
  if (s.dir === 'h') {
    // Horizontal street: centre at y=s.ay, extends ±halfW in y
    p0 = isoProject(s.ax, s.ay - halfW, W, H)
    p1 = isoProject(s.bx, s.ay - halfW, W, H)
    p2 = isoProject(s.bx, s.ay + halfW, W, H)
    p3 = isoProject(s.ax, s.ay + halfW, W, H)
  } else {
    // Vertical street: centre at x=s.ax, extends ±halfW in x
    p0 = isoProject(s.ax - halfW, s.ay, W, H)
    p1 = isoProject(s.ax + halfW, s.ay, W, H)
    p2 = isoProject(s.bx + halfW, s.by, W, H)
    p3 = isoProject(s.bx - halfW, s.by, W, H)
  }
  ctx.beginPath()
  ctx.moveTo(p0.sx, p0.sy)
  ctx.lineTo(p1.sx, p1.sy)
  ctx.lineTo(p2.sx, p2.sy)
  ctx.lineTo(p3.sx, p3.sy)
  ctx.closePath()
  ctx.fill()
}
// ─────────────────────────────────────────────────────────────────────────────

function seededRng(seed: number) {
  let s = ((seed + 1) * 2654435761) >>> 0 || 1
  return () => {
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5
    return (s >>> 0) / 4294967295
  }
}

function getVirtualBounds(W: number, H: number, z: number) {
  const vW = W / z, vH = H / z
  const vx0 = (W - vW) / 2, vy0 = (H - vH) / 2
  return { vx0, vy0, vx1: vx0 + vW, vy1: vy0 + vH, vW, vH }
}

export default function CitySimulator({
  mode,
  variant = 'full',
  interactive = true,
  autoplay = 'none',
  dimmed = false,
  onClear,
  baselinePct: baselinePctProp,
  onBaselineChange,
  lookaheadSec: lookaheadSecProp,
  onLookaheadChange,
  showFullSidebar = true,
  externalSpawnRef,
  externalSpawnModeRef,
  externalZoomRef,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  // Variant/autoplay refs — readable inside RAF loop without stale closure
  const variantRef = useRef(variant); variantRef.current = variant
  const autoplayRef = useRef(autoplay); autoplayRef.current = autoplay
  const isMobileRef = useRef(isMobile); isMobileRef.current = isMobile
  // Sparse autoplay timer (seconds until next auto-spawn)
  const sparseTimerRef = useRef(2 + Math.random() * 3)

  // Sim state lives in refs so the render loop never re-mounts
  const lampsRef = useRef<Lamp[]>([])
  const streetsRef = useRef<Street[]>([])
  const agentsRef = useRef<Agent[]>([])
  const trackedRef = useRef<Agent | null>(null)
  const dimsRef = useRef({ W: 0, H: 0 })

  // Zoom state — re-layouts city when changed
  const zoomRef = useRef(0.75)
  const targetZoomRef = useRef(0.75)
  const pinchRef = useRef<{ dist: number; zoom: number } | null>(null)
  const presetSpawnedRef = useRef(false)
  const wasPinchingRef = useRef(false)
  // Pan state
  const panRef = useRef({ x: 0, y: 0 })
  const isDraggingRef = useRef(false)
  const didDragRef = useRef(false)
  const dragStartRef = useRef({ mouseX: 0, mouseY: 0, panX: 0, panY: 0 })
  const touchDragRef = useRef<{ startX: number; startY: number; panX: number; panY: number } | null>(null)
  const isTouchDraggingRef = useRef(false)
  // Zoom anchor — snapshot of cursor at wheel time, held fixed throughout the easing transition
  const zoomAnchorRef = useRef<{ x: number; y: number } | null>(null)
  const virtualBoundsRef = useRef({ vx0: 0, vy0: 0, vx1: 600, vy1: 400, vW: 600, vH: 400 })
  const streetPosRef = useRef<{ cols: number[]; rows: number[] }>({ cols: [], rows: [] })
  // Static layer offscreen canvas — baked once after each layout change
  const staticCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const staticDirtyRef = useRef(true)
  const bakedPanRef = useRef({ x: 0, y: 0 })   // pan at time of last bake
  const bakedZoomRef = useRef(1)                  // zoom at time of last bake
  const dprRef = useRef(1)
  // Inertia — velocity in px/s applied after drag release
  const panVelRef = useRef({ vx: 0, vy: 0 })
  // Velocity tracker — last few samples for accurate release velocity
  const velSamplesRef = useRef<{ x: number; y: number; t: number }[]>([])

  // ambient forces lumination mode so the corridor is always visible as backdrop
  const effectiveMode: Mode = variant === 'ambient' ? 'lumination' : mode
  const modeRef = useRef<Mode>(effectiveMode)
  modeRef.current = effectiveMode

  // Controlled pattern: external prop overrides internal state when provided
  const [baselinePctLocal, setBaselinePctLocal] = useState(0.30)
  const baselinePct = baselinePctProp !== undefined ? baselinePctProp : baselinePctLocal
  const setBaselinePct = onBaselineChange !== undefined ? onBaselineChange : setBaselinePctLocal

  const [lookaheadSecLocal, setLookaheadSecLocal] = useState(4.0)
  const lookaheadSec = lookaheadSecProp !== undefined ? lookaheadSecProp : lookaheadSecLocal
  const setLookaheadSec = onLookaheadChange !== undefined ? onLookaheadChange : setLookaheadSecLocal
  const [scenario, setScenario] = useState<'manual' | 'quiet' | 'busy' | 'mixed'>('manual')
  const [paused, setPaused] = useState(false)
  const [spawnMode, setSpawnMode] = useState<'ped' | 'car'>('ped')
  const spawnModeRef = useRef<'ped' | 'car'>('ped')
  // If parent supplies a spawn mode ref, use it as the source of truth
  const activeSpawnModeRef = externalSpawnModeRef ?? spawnModeRef
  const [lisbon, setLisbon] = useState(false)
  const [controlsOpen, setControlsOpen] = useState(false)
  const [stats, setStats] = useState({
    powerNow: 0,
    powerPct: 0,
    kwhSaved: 0,
    eurSaved: 0,
    co2Saved: 0,
    peds: 0,
    cars: 0,
    lampCount: 0,
    fullPower: 0,
  })

  // ── Power history ring buffer (60s at 0.5s intervals = 120 entries) ──────
  const powerHistoryRef = useRef<{ lumi: number; full: number }[]>([])
  const histTickRef = useRef(0)
  const chartRef = useRef<HTMLCanvasElement>(null)


  // Redraw chart whenever stats update
  useEffect(() => {
    const canvas = chartRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const w = canvas.width, h = canvas.height
    const buf = powerHistoryRef.current
    ctx.clearRect(0, 0, w, h)
    if (buf.length < 2) return

    const maxV = Math.max(...buf.map(p => p.full), 1)
    const toY = (v: number) => h - (v / maxV) * h * 0.88 - h * 0.06
    const toX = (i: number) => (i / (buf.length - 1)) * w

    // Always-on shadow line
    ctx.strokeStyle = 'rgba(255,255,255,0.18)'
    ctx.lineWidth = 1
    ctx.setLineDash([3, 4])
    ctx.beginPath()
    buf.forEach((p, i) => { i === 0 ? ctx.moveTo(toX(i), toY(p.full)) : ctx.lineTo(toX(i), toY(p.full)) })
    ctx.stroke()
    ctx.setLineDash([])

    // LumiNation filled area
    const grad = ctx.createLinearGradient(0, 0, 0, h)
    grad.addColorStop(0, 'rgba(250,199,117,0.28)')
    grad.addColorStop(1, 'rgba(250,199,117,0.02)')
    ctx.beginPath()
    buf.forEach((p, i) => { i === 0 ? ctx.moveTo(toX(i), toY(p.lumi)) : ctx.lineTo(toX(i), toY(p.lumi)) })
    ctx.lineTo(toX(buf.length - 1), h)
    ctx.lineTo(0, h)
    ctx.closePath()
    ctx.fillStyle = grad
    ctx.fill()

    // LumiNation line
    ctx.strokeStyle = '#FAC775'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    buf.forEach((p, i) => { i === 0 ? ctx.moveTo(toX(i), toY(p.lumi)) : ctx.lineTo(toX(i), toY(p.lumi)) })
    ctx.stroke()
  }, [stats])

  const baselineRef = useRef(baselinePct)
  baselineRef.current = baselinePct
  const lookaheadRef = useRef(lookaheadSec)
  lookaheadRef.current = lookaheadSec
  const scenarioRef = useRef(scenario)
  scenarioRef.current = scenario
  const pausedRef = useRef(paused)
  pausedRef.current = paused
  const kwhSavedRef = useRef(0)
  const scenarioTimerRef = useRef(0)
  const buildingsRef = useRef<Building[]>([])
  const treesRef = useRef<Tree[]>([])
  const parkRef = useRef<ParkZone | null>(null)

  // --- Layout the city ---
  function layoutCity(width: number, height: number) {
    // Generate for full zoom-out extent. Mobile matches desktop so users can zoom out far.
    const minZoom = isMobileRef.current ? 0.40 : 0.45
    const { vx0, vy0, vx1, vy1 } = getVirtualBounds(width, height, minZoom)

    const colStep = width * 0.32
    const rowStep = height * 0.30

    // Road geometry constants — single source of truth
    const ASPHALT_HW  = 22  // half-width of asphalt (matches drawRoadQuad call)
    const SIDEWALK_HW = 32  // half-width of sidewalk drawing (matches drawRoadQuad call)
    const buildingInset = ISO_MODE ? (isMobileRef.current ? 28 : 42) : 14

    // Both lamp and tree sit in the drawn sidewalk strip (ASPHALT_HW → SIDEWALK_HW).
    // Lamp: 1/3 of the way in (near the curb, like real street furniture)
    const lampOffset = Math.round(ASPHALT_HW + (SIDEWALK_HW - ASPHALT_HW) / 3)   // = 25
    const treeOffset = lampOffset  // same sidewalk position as lamps

    // Columns centered at W/2, extending to fill visible virtual range
    const colX: number[] = []
    for (let x = width * 0.5; x > vx0 - colStep; x -= colStep) colX.unshift(x)
    for (let x = width * 0.5 + colStep; x < vx1 + colStep; x += colStep) colX.push(x)

    // Rows centered at H/2, extending to fill visible virtual range
    const rowY: number[] = []
    for (let y = height * 0.5; y > vy0 - rowStep; y -= rowStep) rowY.unshift(y)
    for (let y = height * 0.5 + rowStep; y < vy1 + rowStep; y += rowStep) rowY.push(y)

    streetPosRef.current = { cols: colX, rows: rowY }

    const streets: Street[] = []
    rowY.forEach(y => streets.push({ ax: vx0 - 60, ay: y, bx: vx1 + 60, by: y, dir: 'h' }))
    colX.forEach(x => streets.push({ ax: x, ay: vy0 - 60, bx: x, by: vy1 + 60, dir: 'v' }))

    // Lamps: same density as original (Math.min(W,H) * 0.11)
    const lampStep = Math.min(width, height) * 0.11
    const lamps: Lamp[] = []
    streets.forEach((s, sid) => {
      if (s.dir === 'h') {
        for (let x = vx0; x <= vx1 + lampStep; x += lampStep) {
          lamps.push({ x, y: s.ay - lampOffset, brightness: baselineRef.current, target: baselineRef.current, streetId: sid, side: 'top' })
          lamps.push({ x, y: s.ay + lampOffset, brightness: baselineRef.current, target: baselineRef.current, streetId: sid, side: 'bot' })
        }
      } else {
        for (let y = vy0; y <= vy1 + lampStep; y += lampStep) {
          lamps.push({ x: s.ax - lampOffset, y, brightness: baselineRef.current, target: baselineRef.current, streetId: sid, side: 'lft' })
          lamps.push({ x: s.ax + lampOffset, y, brightness: baselineRef.current, target: baselineRef.current, streetId: sid, side: 'rgt' })
        }
      }
    })

    // Buildings: between adjacent streets.
    // ISO_MODE uses a wider inset so buildings don't overlap the street visually.
    const inset = buildingInset
    const xBounds = [vx0, ...colX.flatMap(x => [x - inset, x + inset]), vx1].sort((a, b) => a - b)
    const yBounds = [vy0, ...rowY.flatMap(y => [y - inset, y + inset]), vy1].sort((a, b) => a - b)
    const buildings: Building[] = []
    for (let ci = 0; ci < xBounds.length - 1; ci++) {
      for (let ri = 0; ri < yBounds.length - 1; ri++) {
        const x0 = xBounds[ci], x1 = xBounds[ci + 1]
        const y0 = yBounds[ri], y1 = yBounds[ri + 1]
        const bW = x1 - x0, bH = y1 - y0
        if (bW < 8 || bH < 8) continue // degenerate block
        // Skip blocks whose centre sits on a road axis (road-zone strips)
        const blockCX = (x0 + x1) / 2, blockCY = (y0 + y1) / 2
        if (colX.some(cx => Math.abs(blockCX - cx) < inset)) continue
        if (rowY.some(ry => Math.abs(blockCY - ry) < inset)) continue

        // Normalised coords relative to city centre (0,0 = block adj to centre col+row)
        const normCi = Math.round((x0 - width * 0.5) / colStep)
        const normRi = Math.round((y0 - height * 0.5) / rowStep)

        // Assign a district zone to this block
        let zone: BlockZone = 'commercial'
        if (normCi === 0 && normRi === 0) zone = 'downtown'
        else if (normCi === 1 && normRi === 0) zone = 'mall'
        else if ((normCi === 0 || normCi === 1) && normRi === -1) zone = 'civic'
        else if (Math.abs(normCi) >= 2 || Math.abs(normRi) >= 2) zone = 'residential'

        const rng = seededRng(normCi * 41 + normRi * 13 + 7)

        // Zone-specific layout parameters
        let nCols: number, nRows: number, skipRate: number
        let btype: 'residential' | 'commercial' | 'office'
        // Rectangular buildings: blocks are ~160px wide × ~90px tall so
        // 2-3 cols × 2 rows gives natural wide-rectangle footprints.
        if (zone === 'downtown') { nCols = 2 + Math.floor(rng() * 2); nRows = 2; skipRate = 0.12; btype = 'office' }
        else if (zone === 'mall') { nCols = 1; nRows = 1; skipRate = 0; btype = 'commercial' }
        else if (zone === 'civic') { nCols = 1; nRows = 1; skipRate = 0; btype = 'office' }
        else if (zone === 'residential') { nCols = 2 + Math.floor(rng() * 2); nRows = 2; skipRate = 0.22; btype = 'residential' }
        else { nCols = 2 + Math.floor(rng() * 2); nRows = 2; skipRate = 0.18; btype = 'commercial' }

        for (let bc = 0; bc < nCols; bc++) {
          for (let br = 0; br < nRows; br++) {
            if (rng() < skipRate) continue
            const stepX = bW / nCols, stepY = bH / nRows

            // ~5% of buildings become tall towers — same footprint, just much taller.
            const isTower = zone !== 'mall' && rng() < 0.05
            const bw = stepX - 10
            const bh = stepY - 10
            const offX = 5, offY = 5

            if (bw > 4 && bh > 4) {
              const mob = isMobileRef.current
              const isoH = ISO_MODE ? Math.round(
                isTower
                  ? (mob ? 50 + rng() * 30 : 100 + rng() * 60)   // tower: 50–80 mobile / 100–160 desktop
                  : zone === 'downtown' ? (mob ? 18 + rng() * 18 : 28 + rng() * 28)
                    : zone === 'mall' ? (mob ? 7 + rng() * 7 : 10 + rng() * 10)
                      : zone === 'civic' ? (mob ? 24 + rng() * 18 : 35 + rng() * 25)
                        : zone === 'residential' ? (mob ? 10 + rng() * 12 : 14 + rng() * 18)
                          : (mob ? 12 + rng() * 14 : 18 + rng() * 18)
              ) : 0
              buildings.push({ x: x0 + bc * stepX + offX, y: y0 + br * stepY + offY, w: bw, h: bh, btype, isoH, zone })
            }
          }
        }
      }
    }

    // Park zone: block just left of center column, just below center row
    // Use actual street positions so it works at any canvas/mobile size
    const centerCol = colX[Math.floor(colX.length / 2)] ?? width * 0.5
    const leftCol   = colX[Math.floor(colX.length / 2) - 1] ?? centerCol - colStep
    const centerRow = rowY[Math.floor(rowY.length / 2)] ?? height * 0.5
    const nextRow   = rowY[Math.floor(rowY.length / 2) + 1] ?? centerRow + rowStep
    const pkXStart = leftCol   + inset
    const pkXEnd   = centerCol - inset
    const pkYStart = centerRow + inset
    const pkYEnd   = nextRow   - inset
    parkRef.current = pkXEnd > pkXStart + 4 && pkYEnd > pkYStart + 4
      ? { x: pkXStart, y: pkYStart, w: pkXEnd - pkXStart, h: pkYEnd - pkYStart }
      : null

    // Trees along streets
    const trees: Tree[] = []
    streets.forEach(s => {
      const posKey = s.dir === 'h' ? Math.round(s.ay / rowStep * 100) : Math.round(s.ax / colStep * 100)
      const tRng = seededRng(posKey * 137 + 42)
      if (s.dir === 'h') {
        for (let x = vx0 + lampStep * 0.5; x < vx1; x += lampStep) {
          if (tRng() < 0.28) trees.push({ x, y: s.ay - treeOffset })
          if (tRng() < 0.20) trees.push({ x, y: s.ay + treeOffset })
        }
      } else {
        for (let y = vy0 + lampStep * 0.5; y < vy1; y += lampStep) {
          if (tRng() < 0.24) trees.push({ x: s.ax - treeOffset, y })
          if (tRng() < 0.18) trees.push({ x: s.ax + treeOffset, y })
        }
      }
    })

    lampsRef.current = lamps
    streetsRef.current = streets
    buildingsRef.current = buildings
    treesRef.current = trees
    staticDirtyRef.current = true  // city geometry changed — rebake static layer

    // Remap existing agent street references to new street objects (positions unchanged)
    for (const a of agentsRef.current) {
      const newStreet = streets.find(s =>
        s.dir === a.street.dir &&
        (s.dir === 'h' ? Math.abs(s.ay - a.street.ay) < 5 : Math.abs(s.ax - a.street.ax) < 5)
      )
      if (newStreet) a.street = newStreet
    }
  }

  // --- Spawn agents ---
  function nearestStreet(px: number, py: number) {
    const { vx0, vy0, vx1, vy1 } = virtualBoundsRef.current
    let best: { s: Street; qx: number; qy: number } | null = null
    let bestD = Infinity
    for (const s of streetsRef.current) {
      let qx: number, qy: number
      if (s.dir === 'h') { qx = Math.max(vx0, Math.min(vx1, px)); qy = s.ay }
      else { qx = s.ax; qy = Math.max(vy0, Math.min(vy1, py)) }
      const d = Math.hypot(px - qx, py - qy)
      if (d < bestD) { bestD = d; best = { s, qx, qy } }
    }
    return best
  }

  function spawnAgent(px: number, py: number, type: AgentType, forceSign?: number): Agent | null {
    const hit = nearestStreet(px, py)
    if (!hit) return null
    const { s, qx, qy } = hit
    const speed = (type === 'car' ? CAR_SPEED : PED_SPEED)
    const sign = forceSign !== undefined ? forceSign : (Math.random() < 0.5 ? -1 : 1)
    const a: Agent = {
      x: qx, y: qy,
      vx: s.dir === 'h' ? sign * speed : 0,
      vy: s.dir === 'v' ? sign * speed : 0,
      type, street: s, t: 0,
      stride: Math.random() * Math.PI * 2,
      color: type === 'car' ? CAR_COLORS[Math.floor(Math.random() * CAR_COLORS.length)] : null,
    }
    agentsRef.current.push(a)
    return a
  }

  function spawnRandomEdge(type: AgentType) {
    const { vx0, vy0, vx1, vy1 } = virtualBoundsRef.current
    const streets = streetsRef.current
    const s = streets[Math.floor(Math.random() * streets.length)]
    if (s.dir === 'h') {
      const fromLeft = Math.random() < 0.5
      spawnAgent(fromLeft ? vx0 + 2 : vx1 - 2, s.ay, type, fromLeft ? 1 : -1)
    } else {
      const fromTop = Math.random() < 0.5
      spawnAgent(s.ax, fromTop ? vy0 + 2 : vy1 - 2, type, fromTop ? 1 : -1)
    }
  }

  // --- Physics step ---
  function step(dt: number) {
    const agents = agentsRef.current
    for (const a of agents) {
      a.x += a.vx * dt / METERS_PER_PIXEL
      a.y += a.vy * dt / METERS_PER_PIXEL
      a.t += dt
      a.stride += dt * (a.type === 'car' ? 0 : 8)
    }

    // Use full layout extent (min zoom) so agents aren't culled when zooming in
    const { W, H } = dimsRef.current
    const minZoom = isMobileRef.current ? 0.40 : 0.45
    const { vx0, vy0, vx1, vy1 } = getVirtualBounds(W, H, minZoom)
    agentsRef.current = agents.filter(a => a.x > vx0 - 60 && a.x < vx1 + 60 && a.y > vy0 - 60 && a.y < vy1 + 60)
    if (trackedRef.current && !agentsRef.current.includes(trackedRef.current)) {
      trackedRef.current = agentsRef.current.find(a => a.type === 'ped') || null
    }

    // Intersection turning
    for (const a of agentsRef.current) {
      for (const s of streetsRef.current) {
        if (s === a.street) continue
        let near = false
        if (s.dir === 'h' && a.street.dir === 'v') {
          if (Math.abs(a.y - s.ay) < 4) near = true
        } else if (s.dir === 'v' && a.street.dir === 'h') {
          if (Math.abs(a.x - s.ax) < 4) near = true
        }
        if (near && Math.random() < 0.012) {
          const speed = Math.hypot(a.vx, a.vy)
          const sign = Math.random() < 0.5 ? -1 : 1
          if (s.dir === 'h') { a.vx = sign * speed; a.vy = 0 }
          else { a.vx = 0; a.vy = sign * speed }
          a.street = s
        }
      }
    }

    // Lamp targets
    // Scale the REAR corridor proportionally to canvas width — on a 375px mobile
    // canvas the 260px rear reach was eating almost the whole screen. The FRONT
    // reach stays full-size so (a) the corridor looks long ahead and (b) the
    // Lookahead slider has a visible effect. Reference width: 960px desktop.
    const backScale = Math.min(1, dimsRef.current.W / 960)
    // Only process lamps near the visible area — huge perf win for the extended pre-generated city
    const { vx0: svx0, vy0: svy0, vx1: svx1, vy1: svy1 } = virtualBoundsRef.current
    const corrMargin = 500
    const stepLamps = lampsRef.current.filter(l =>
      l.x > svx0 - corrMargin && l.x < svx1 + corrMargin &&
      l.y > svy0 - corrMargin && l.y < svy1 + corrMargin)
    for (const l of lampsRef.current) l.target = baselineRef.current
    for (const a of agentsRef.current) {
      const isCar = a.type === 'car'
      const sp = Math.max(0.1, Math.hypot(a.vx, a.vy))
      const dx = a.vx / sp
      const dy = a.vy / sp
      const lookaheadPx = lookaheadRef.current * 21 * Math.sqrt(sp / PED_SPEED)
      const reachAhead = (isCar ? LAMP_REACH_CAR : LAMP_REACH_PED) + lookaheadPx
      const reachBehind = ((isCar ? LAMP_REACH_BEHIND_CAR : LAMP_REACH_BEHIND_PED) + lookaheadPx * 1.6) * backScale
      const agentStreet = a.street

      for (const l of stepLamps) {
        const sameStreet = streetsRef.current[l.streetId] === agentStreet

        if (!sameStreet) {
          const d = Math.hypot(l.x - a.x, l.y - a.y)
          const spillover = 50
          if (d < spillover) {
            const boost = 1 - (d / spillover)
            l.target = Math.max(l.target, boost)
          }
          continue
        }

        const distAlong = (l.x - a.x) * dx + (l.y - a.y) * dy
        if (distAlong >= -reachBehind && distAlong <= (lookaheadPx + reachAhead)) {
          l.target = 1.0
        }
      }
    }

    for (const l of stepLamps) {
      if (l.brightness === l.target) continue
      const rising = l.target > l.brightness
      const rate = rising ? 3.2 : 1.2
      const ease = 1 - Math.exp(-dt * rate)
      l.brightness += (l.target - l.brightness) * ease
      if (Math.abs(l.target - l.brightness) < 0.01) l.brightness = l.target
    }

    // Energy
    const N = lampsRef.current.length
    const fullPower = N * LAMP_WATTS
    let luminationPower = 0
    for (const l of lampsRef.current) luminationPower += LAMP_WATTS * l.brightness
    const savedW = fullPower - luminationPower
    kwhSavedRef.current += (savedW * dt) / 3_600_000

    return { luminationPower, fullPower }
  }

  // --- Drawing helpers ---
  function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)
  }

  function drawPedestrian(ctx: CanvasRenderingContext2D, a: Agent, brightness: number, px?: number, py?: number) {
    const x = px ?? a.x, y = py ?? a.y
    const s = isMobileRef.current ? 0.6 : 1  // smaller on mobile
    const sw = Math.sin(a.stride) * 5 * s
    const cw = Math.cos(a.stride) * 3.5 * s
    const skin = `rgba(240,200,160,${0.6 + 0.4 * brightness})`
    const body = `rgba(200,210,230,${0.55 + 0.45 * brightness})`

    // Arms
    ctx.strokeStyle = body
    ctx.lineWidth = 2.5 * s
    ctx.beginPath()
    ctx.moveTo(x - 6 * s - sw * 0.4, y); ctx.lineTo(x + 6 * s + sw * 0.4, y)
    ctx.stroke()

    // Legs
    ctx.lineWidth = 2.2 * s
    ctx.strokeStyle = `rgba(170,180,200,${0.5 + 0.5 * brightness})`
    ctx.beginPath()
    ctx.moveTo(x, y + 2 * s); ctx.lineTo(x + cw * 0.9, y + 8 * s)
    ctx.moveTo(x, y + 2 * s); ctx.lineTo(x - cw * 0.9, y + 8 * s)
    ctx.stroke()

    // Body
    ctx.fillStyle = body
    ctx.beginPath()
    ctx.ellipse(x, y, 5 * s, 6 * s, 0, 0, Math.PI * 2)
    ctx.fill()

    // Head
    ctx.fillStyle = skin
    ctx.beginPath()
    ctx.arc(x, y - 3.5 * s, 3.8 * s, 0, Math.PI * 2)
    ctx.fill()
  }

  function drawCar(ctx: CanvasRenderingContext2D, a: Agent, brightness: number, px?: number, py?: number, screenAngle?: number) {
    const angle = screenAngle ?? Math.atan2(a.vy, a.vx)
    ctx.save()
    ctx.translate(px ?? a.x, py ?? a.y)
    ctx.rotate(angle)

    const s = isMobileRef.current ? 0.6 : 1
    const w = 36 * s, h = 16 * s

    ctx.fillStyle = 'rgba(0,0,0,0.45)'
    ctx.beginPath()
    roundRect(ctx, -w / 2 + 1, -h / 2 + 1.5, w, h, 2)
    ctx.fill()

    ctx.fillStyle = a.color || '#888'
    ctx.beginPath()
    roundRect(ctx, -w / 2, -h / 2, w, h, 2.2)
    ctx.fill()

    ctx.fillStyle = 'rgba(255,255,255,0.18)'
    ctx.beginPath()
    roundRect(ctx, -w / 2 + 3, -h / 2 + 1.5, w - 8, h - 3, 1.5)
    ctx.fill()

    ctx.fillStyle = `rgba(180,210,240,${0.35 + 0.4 * brightness})`
    ctx.beginPath()
    ctx.moveTo(w / 2 - 5, -h / 2 + 1.5)
    ctx.lineTo(w / 2 - 2.5, -h / 2 + 1.5)
    ctx.lineTo(w / 2 - 2.5, h / 2 - 1.5)
    ctx.lineTo(w / 2 - 5, h / 2 - 1.5)
    ctx.closePath()
    ctx.fill()

    // Headlights cone
    const grd = ctx.createRadialGradient(w / 2 + 2, 0, 0, w / 2 + 2, 0, 28)
    grd.addColorStop(0, `rgba(255,240,200,${0.55 * (0.7 + 0.3 * brightness)})`)
    grd.addColorStop(1, 'rgba(255,240,200,0)')
    ctx.fillStyle = grd
    ctx.beginPath()
    ctx.moveTo(w / 2, -h / 2 + 1)
    ctx.lineTo(w / 2 + 28, -h * 1.2)
    ctx.lineTo(w / 2 + 28, h * 1.2)
    ctx.lineTo(w / 2, h / 2 - 1)
    ctx.closePath()
    ctx.fill()

    ctx.fillStyle = 'rgba(255,250,220,0.9)'
    ctx.beginPath(); ctx.arc(w / 2 - 0.5, -h / 2 + 1.8, 0.9, 0, Math.PI * 2); ctx.fill()
    ctx.beginPath(); ctx.arc(w / 2 - 0.5, h / 2 - 1.8, 0.9, 0, Math.PI * 2); ctx.fill()

    ctx.fillStyle = 'rgba(220,40,40,0.8)'
    ctx.beginPath(); ctx.arc(-w / 2 + 0.5, -h / 2 + 1.8, 0.7, 0, Math.PI * 2); ctx.fill()
    ctx.beginPath(); ctx.arc(-w / 2 + 0.5, h / 2 - 1.8, 0.7, 0, Math.PI * 2); ctx.fill()

    ctx.restore()
  }

  function localBrightnessAt(x: number, y: number): number {
    const { W, H } = dimsRef.current
    const reach = Math.min(W, H) * 0.14
    let v = 0
    for (const l of lampsRef.current) {
      const d = Math.hypot(l.x - x, l.y - y)
      if (d < reach) v += l.brightness * (1 - d / reach) * 0.4
    }
    return Math.min(1, v + 0.1)
  }

  function drawCityTopDown(ctx: CanvasRenderingContext2D, useBaseline: boolean, staticOnly = false) {
    const { W, H } = dimsRef.current
    const { vx0, vy0, vx1, vy1, vW, vH } = virtualBoundsRef.current

    // Cull to visible virtual bounds — avoids drawing off-screen elements.
    // ox/oy are world-space offsets (sx = wx in ISO projection), so the margin
    // must be in world pixels regardless of zoom.
    // max isoH ≈ 160 (desktop tower), ox = 0.55*160 = 88, oy = 0.72*160 = 115.
    // Use 200px to give a comfortable buffer.
    const isoCullMX = ISO_MODE ? 200 : 0
    const isoCullMY = ISO_MODE ? 200 : 0
    const visBuildings = buildingsRef.current.filter(b =>
      b.x < vx1 + isoCullMX && b.x + b.w > vx0 - isoCullMX &&
      b.y < vy1 + isoCullMY && b.y + b.h > vy0 - isoCullMY)
    const visTrees = treesRef.current.filter(t =>
      t.x > vx0 - 12 && t.x < vx1 + 12 && t.y > vy0 - 12 && t.y < vy1 + 12)

    // Ground/terrain base (covers full visible virtual area)
    ctx.fillStyle = isMobileRef.current ? '#0e0c14' : '#08080e'
    ctx.fillRect(vx0, vy0, vW, vH)

    // ── Roads drawn FIRST so buildings render on top ─────────────────────────
    if (ISO_MODE) {
      ctx.fillStyle = '#131420'  // sidewalk — matches inset=32
      for (const s of streetsRef.current) drawRoadQuad(ctx, s, 32, W, H)
      ctx.fillStyle = '#0d0e17'  // asphalt
      for (const s of streetsRef.current) drawRoadQuad(ctx, s, 22, W, H)
      ctx.fillStyle = '#111222'  // centre highlight
      for (const s of streetsRef.current) drawRoadQuad(ctx, s, 7, W, H)
      ctx.fillStyle = '#32324e'  // centre line
      for (const s of streetsRef.current) drawRoadQuad(ctx, s, 0.5, W, H)
      // Roundabouts
      const { cols: rCols0, rows: rRows0 } = streetPosRef.current
      const rcRx0 = 20, rcRy0 = rcRx0 * (1 - ISO_SHEAR * 0.8)
      rCols0.forEach((cx, ci) => {
        rRows0.forEach((cy, ri) => {
          if (seededRng(ci * 31 + ri * 17 + 3)() >= 0.40) return
          const rcp = isoProject(cx, cy, W, H)
          if (rcp.sx < vx0 - 30 || rcp.sx > vx1 + 30 || rcp.sy < vy0 - 30 || rcp.sy > vy1 + 30) return
          ctx.strokeStyle = '#1a1c30'; ctx.lineWidth = 10
          ctx.beginPath(); ctx.ellipse(rcp.sx, rcp.sy, rcRx0, rcRy0, 0, 0, Math.PI * 2); ctx.stroke()
          const rcg0 = ctx.createRadialGradient(rcp.sx, rcp.sy, 0, rcp.sx, rcp.sy, rcRx0 * 0.65)
          rcg0.addColorStop(0, '#0d1a0e'); rcg0.addColorStop(1, '#070d08')
          ctx.fillStyle = rcg0
          ctx.beginPath(); ctx.ellipse(rcp.sx, rcp.sy, rcRx0 * 0.60, rcRy0 * 0.60, 0, 0, Math.PI * 2); ctx.fill()
          ctx.fillStyle = 'rgba(200,210,255,0.15)'
          ctx.beginPath(); ctx.ellipse(rcp.sx, rcp.sy, 2.5, 2, 0, 0, Math.PI * 2); ctx.fill()
        })
      })
    }

    // Park zone (green space) — projected through isoProject in ISO mode
    const park = parkRef.current
    if (park) {
      if (ISO_MODE) {
        const pTL = isoProject(park.x, park.y, W, H)
        const pTR = isoProject(park.x + park.w, park.y, W, H)
        const pBR = isoProject(park.x + park.w, park.y + park.h, W, H)
        const pBL = isoProject(park.x, park.y + park.h, W, H)
        const pg = ctx.createLinearGradient(pTL.sx, pTL.sy, pBR.sx, pBR.sy)
        pg.addColorStop(0, '#0a1e0c')
        pg.addColorStop(1, '#091508')
        ctx.fillStyle = pg
        ctx.beginPath()
        ctx.moveTo(pTL.sx, pTL.sy); ctx.lineTo(pTR.sx, pTR.sy)
        ctx.lineTo(pBR.sx, pBR.sy); ctx.lineTo(pBL.sx, pBL.sy)
        ctx.closePath(); ctx.fill()
      } else {
        const pg = ctx.createLinearGradient(park.x, park.y, park.x + park.w, park.y + park.h)
        pg.addColorStop(0, '#0a1e0c')
        pg.addColorStop(1, '#091508')
        ctx.fillStyle = pg
        ctx.fillRect(park.x, park.y, park.w, park.h)
      }
    }

    // ── Lamp positions computed early so poles can be drawn BEFORE buildings ──
    const glowScale = (W + H) / 2 / 580
    const glowR = (14 + 110) * glowScale + 4
    const visLamps = lampsRef.current.filter(l =>
      l.x > vx0 - glowR && l.x < vx1 + glowR && l.y > vy0 - glowR && l.y < vy1 + glowR)

    type LampScreenPos = { sx: number; sy: number; b: number; poleH: number }
    const isoLampPositions: LampScreenPos[] = []
    if (ISO_MODE) {
      // ── Collect lamp screen positions for the depth-sorted draw list ────────
      const poleH = 9
      for (const l of visLamps) {
        const p = isoProject(l.x, l.y, W, H)
        const b = useBaseline ? MAX_VISUAL_BRI : Math.pow(l.brightness, 0.7) * MAX_VISUAL_BRI
        isoLampPositions.push({ sx: p.sx, sy: p.sy, b, poleH })
      }
      const { cols: rCols0, rows: rRows0 } = streetPosRef.current
      rCols0.forEach((cx, ci) => {
        rRows0.forEach((cy, ri) => {
          if (seededRng(ci * 31 + ri * 17 + 3)() >= 0.40) return
          const rp = isoProject(cx, cy, W, H)
          const near = lampsRef.current.filter(l => Math.hypot(l.x - cx, l.y - cy) < 50)
          const rb = near.length > 0
            ? (useBaseline ? MAX_VISUAL_BRI : Math.pow(near.reduce((s, l) => s + l.brightness, 0) / near.length, 0.7) * MAX_VISUAL_BRI)
            : Math.pow(baselineRef.current, 0.7) * MAX_VISUAL_BRI
          isoLampPositions.push({ sx: rp.sx, sy: rp.sy, b: rb, poleH: 14 })
        })
      })

      // ── Palettes + helpers ──────────────────────────────────────────────────
      // [roofFrom, roofTo, westWall(lit), southWall(mid), eastWall(shadow)]
      const PALETTE: [string, string, string, string, string][] = [
        ['#4a4a52', '#3e3e46', '#545460', '#484850', '#323238'],
        ['#3c3c54', '#303046', '#464660', '#38384a', '#262634'],
        ['#5a4028', '#46301a', '#664c30', '#523a1e', '#382410'],
        ['#643e24', '#4a2c14', '#724c3c', '#5a321a', '#3e1e0e'],
        ['#1c2b52', '#142244', '#243860', '#1a2848', '#0e1c34'],
        ['#152458', '#0e1c4e', '#1a2e68', '#121e50', '#080e38'],
        ['#5e2010', '#4c160a', '#6c2a20', '#581c0e', '#3c1008'],
        ['#25441e', '#1a3416', '#2e5024', '#203c1e', '#142814'],
      ]
      const ZONE_PALS: Record<BlockZone, number[]> = {
        downtown: [0, 1, 4, 5, 4, 5],
        mall: [0, 1, 2, 0, 2, 3],
        civic: [0, 1, 4, 7, 0, 1],
        residential: [0, 1, 2, 3, 4, 5, 6, 7],
        commercial: [0, 1, 2, 3, 4, 5, 6, 7],
      }

      const fillQuad = (
        x0: number, y0: number, x1: number, y1: number,
        x2: number, y2: number, x3: number, y3: number,
      ) => {
        ctx.beginPath()
        ctx.moveTo(x0, y0); ctx.lineTo(x1, y1)
        ctx.lineTo(x2, y2); ctx.lineTo(x3, y3)
        ctx.closePath(); ctx.fill()
      }

      // ISO crosswalks — before depth sort so buildings correctly occlude them
      if (ISO_MODE) {
        const drawIsoRect2 = (wx: number, wy: number, rw: number, rh: number) => {
          const tl = isoProject(wx, wy, W, H)
          const tr = isoProject(wx + rw, wy, W, H)
          const br = isoProject(wx + rw, wy + rh, W, H)
          const bl = isoProject(wx, wy + rh, W, H)
          ctx.beginPath()
          ctx.moveTo(tl.sx, tl.sy); ctx.lineTo(tr.sx, tr.sy)
          ctx.lineTo(br.sx, br.sy); ctx.lineTo(bl.sx, bl.sy)
          ctx.closePath(); ctx.fill()
        }
        ctx.fillStyle = 'rgba(200, 205, 240, 0.14)'
        streetPosRef.current.cols.forEach(ix => {
          streetPosRef.current.rows.forEach(iy => {
            for (let i = 0; i < 4; i++) {
              // Horizontal stripes (26×3) on horizontal roads — step in y
              drawIsoRect2(ix - 50, iy - 9 + i * 6, 26, 3)   // left of intersection
              drawIsoRect2(ix + 22, iy - 9 + i * 6, 26, 3)   // right
              // Vertical stripes (3×26) on vertical roads — step in x
              drawIsoRect2(ix - 9 + i * 6, iy - 54, 3, 26)   // above intersection
              drawIsoRect2(ix - 9 + i * 6, iy + 22, 3, 26)   // below
            }
          })
        })
      }

      // ── Unified depth-sorted draw list: buildings + lamps merged ─────────
      // Each lamp's depth key = its world (x+y). Building depth key = (x+y) of footprint.
      type DrawItem =
        | { kind: 'building'; depth: number; bld: Building }
        | { kind: 'lamp'; depth: number; wx: number; wy: number; b: number; ph: number }
        | { kind: 'tree'; depth: number; wx: number; wy: number }
        | { kind: 'agent'; depth: number; agent: Agent; bri: number }

      const drawList: DrawItem[] = []
      for (const bld of visBuildings)
        drawList.push({ kind: 'building', depth: (bld.x + bld.w) + (bld.y + bld.h) + ISO_WALL_DX * bld.isoH, bld })
      for (const l of visLamps) {
        const b = useBaseline ? MAX_VISUAL_BRI : Math.pow(l.brightness, 0.7) * MAX_VISUAL_BRI
        drawList.push({ kind: 'lamp', depth: l.x + l.y, wx: l.x, wy: l.y, b, ph: poleH })
      }
      for (const t of visTrees)
        drawList.push({ kind: 'tree', depth: t.x + t.y, wx: t.x, wy: t.y })
      if (!staticOnly) {
        for (const a of agentsRef.current) {
          const bri = useBaseline ? MAX_VISUAL_BRI : localBrightnessAt(a.x, a.y) * MAX_VISUAL_BRI
          drawList.push({ kind: 'agent', depth: a.x + a.y, agent: a, bri })
        }
      }
      // Roundabout lamps
      rCols0.forEach((cx, ci) => {
        rRows0.forEach((cy, ri) => {
          if (seededRng(ci * 31 + ri * 17 + 3)() >= 0.40) return
          const near = lampsRef.current.filter(l => Math.hypot(l.x - cx, l.y - cy) < 50)
          const rb = near.length > 0
            ? (useBaseline ? MAX_VISUAL_BRI : Math.pow(near.reduce((s, l) => s + l.brightness, 0) / near.length, 0.7) * MAX_VISUAL_BRI)
            : Math.pow(baselineRef.current, 0.7) * MAX_VISUAL_BRI
          drawList.push({ kind: 'lamp', depth: cx + cy, wx: cx, wy: cy, b: rb, ph: 14 })
        })
      })
      drawList.sort((a, b) => a.depth - b.depth)  // far first, near last

      for (const item of drawList) {
        if (item.kind === 'lamp') {
          const { wx, wy, b, ph } = item
          const p = isoProject(wx, wy, W, H)
          const hx = p.sx, hy = p.sy - ph
          // Pole — always drawn (static)
          ctx.strokeStyle = 'rgba(180, 185, 210, 0.75)'; ctx.lineWidth = 0.9
          ctx.beginPath(); ctx.moveTo(p.sx, p.sy); ctx.lineTo(hx, hy); ctx.stroke()
          ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(hx + 3, hy - 2); ctx.stroke()
          if (staticOnly) continue  // skip dynamic halo when baking static layer
          // Halo — normalised to 0-1 for linear visual response
          const n = b / MAX_VISUAL_BRI
          if (n > 0.01) {
            const r = n * (isMobileRef.current ? 33 : 28) * glowScale
            const grd = ctx.createRadialGradient(hx, hy, 0, hx, hy, r)
            grd.addColorStop(0, `rgba(255, 224, 155, ${0.88 * n})`)
            grd.addColorStop(0.15, `rgba(252, 208, 128, ${0.50 * n})`)
            grd.addColorStop(0.40, `rgba(250, 199, 117, ${0.22 * n})`)
            grd.addColorStop(0.70, `rgba(250, 199, 117, ${0.07 * n})`)
            grd.addColorStop(1, 'rgba(250, 199, 117, 0)')
            ctx.fillStyle = grd
            ctx.beginPath(); ctx.arc(hx, hy, r, 0, Math.PI * 2); ctx.fill()
          }
          ctx.fillStyle = `rgba(255, 230, 170, ${n})`
          ctx.beginPath(); ctx.arc(hx, hy, 2.2, 0, Math.PI * 2); ctx.fill()
          ctx.fillStyle = '#22222a'
          ctx.beginPath(); ctx.arc(hx, hy, 0.9, 0, Math.PI * 2); ctx.fill()
          continue
        }

        // kind === 'tree'
        if (item.kind === 'tree') {
          const tp = isoProject(item.wx, item.wy, W, H)
          const tx = tp.sx, ty = tp.sy
          // Trunk — short vertical line
          ctx.strokeStyle = 'rgba(60,40,20,0.9)'; ctx.lineWidth = 2
          ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(tx, ty - 10); ctx.stroke()
          // Canopy — stacked ellipses getting smaller going up
          ctx.fillStyle = 'rgba(8,42,11,0.97)'
          ctx.beginPath(); ctx.ellipse(tx, ty - 10, 8, 5, 0, 0, Math.PI * 2); ctx.fill()
          ctx.fillStyle = 'rgba(15,65,20,0.88)'
          ctx.beginPath(); ctx.ellipse(tx - 1, ty - 16, 6, 3.5, 0, 0, Math.PI * 2); ctx.fill()
          ctx.fillStyle = 'rgba(26,95,34,0.65)'
          ctx.beginPath(); ctx.ellipse(tx - 1, ty - 21, 4, 2.5, 0, 0, Math.PI * 2); ctx.fill()
          continue
        }

        // kind === 'agent' — skip when baking static layer
        if (item.kind === 'agent' && staticOnly) continue
        if (item.kind === 'agent') {
          const a = item.agent
          const { sx, sy } = isoProject(a.x, a.y, W, H)
          if (a.type === 'car') {
            // Adjust screen-space angle for the Y-shear
            const isoAngle = Math.atan2(a.vy - a.vx * ISO_SHEAR, a.vx)
            drawCar(ctx, a, item.bri, sx, sy, isoAngle)
          } else {
            drawPedestrian(ctx, a, item.bri, sx, sy)
          }
          continue
        }

        // kind === 'building'
        const bld = item.bld
        const { x, y, w, h, isoH } = bld
        const mob = isMobileRef.current
        const ox = ISO_WALL_DX * isoH
        const oy = ISO_WALL_DY * isoH

        // Pick palette from zone-appropriate range so each district has a distinct look
        const rng = seededRng(Math.round(x) * 7 + Math.round(y) * 11)
        const zonePalIdxs = ZONE_PALS[bld.zone]
        const pal = PALETTE[zonePalIdxs[Math.floor(rng() * zonePalIdxs.length)]]

        // Project all 4 footprint (ground-level) corners through the Y-shear.
        const pTL = isoProject(x, y, W, H)
        const pTR = isoProject(x + w, y, W, H)
        const pBR = isoProject(x + w, y + h, W, H)
        const pBL = isoProject(x, y + h, W, H)

        // Roof corners = footprint + oblique offset (right & UP in screen space).
        const rTL = { sx: pTL.sx + ox, sy: pTL.sy - oy }
        const rTR = { sx: pTR.sx + ox, sy: pTR.sy - oy }
        const rBR = { sx: pBR.sx + ox, sy: pBR.sy - oy }
        const rBL = { sx: pBL.sx + ox, sy: pBL.sy - oy }

        // Draw order: far faces first (painter's algorithm within each building)
        // East wall (shadow — far right face, darkest)
        ctx.fillStyle = pal[4]
        fillQuad(
          pTR.sx, pTR.sy,
          pBR.sx, pBR.sy,
          rBR.sx, rBR.sy,
          rTR.sx, rTR.sy,
        )

        // ── West wall (lit face — left side, brightest side face) ──
        ctx.fillStyle = pal[2]
        fillQuad(
          pTL.sx, pTL.sy,  // ground top-left
          pBL.sx, pBL.sy,  // ground bottom-left
          rBL.sx, rBL.sy,  // roof bottom-left
          rTL.sx, rTL.sy,  // roof top-left
        )

        // ── South wall (front face — medium shade) ──
        ctx.fillStyle = pal[3]
        fillQuad(
          pBL.sx, pBL.sy,
          pBR.sx, pBR.sy,
          rBR.sx, rBR.sy,
          rBL.sx, rBL.sy,
        )

        // Windows on south wall — bilinear placement follows the parallelogram
        if (oy > 6) {
          const winRows = Math.max(2, Math.floor(oy / 7))
          const winCols = Math.max(2, Math.floor(w / 9))
          for (let c = 0; c < winCols; c++) {
            const hFrac = (c + 0.5) / winCols
            const wallTopY = rBL.sy + (rBR.sy - rBL.sy) * hFrac
            const wallBotY = pBL.sy + (pBR.sy - pBL.sy) * hFrac
            for (let r = 0; r < winRows; r++) {
              if (rng() < 0.40) {
                const vFrac = (r + 0.5) / winRows
                // Bilinear x: follow the parallelogram — horizontal + shear from roof overhang
                const wx = pBL.sx + hFrac * (pBR.sx - pBL.sx) + (1 - vFrac) * ox
                const wy = wallTopY + vFrac * (wallBotY - wallTopY)
                ctx.fillStyle = rng() < 0.15
                  ? 'rgba(180,220,255,0.65)'
                  : 'rgba(250,199,117,0.85)'
                ctx.fillRect(wx - 2, wy - 1.5, 4, 3)
              }
            }
          }
        }

        // ── Roof (top face) — flat color on mobile, gradient on desktop ──
        if (mob) {
          ctx.fillStyle = pal[0]
        } else {
          const roofGrd = ctx.createLinearGradient(rTL.sx, rTL.sy, rBR.sx, rBR.sy)
          roofGrd.addColorStop(0, pal[0])
          roofGrd.addColorStop(1, pal[1])
          ctx.fillStyle = roofGrd
        }
        fillQuad(rTL.sx, rTL.sy, rTR.sx, rTR.sy, rBR.sx, rBR.sy, rBL.sx, rBL.sy)

        // Roof edge highlight — skip on mobile
        if (!mob) {
          ctx.strokeStyle = 'rgba(255,255,255,0.11)'
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(rBL.sx, rBL.sy); ctx.lineTo(rTL.sx, rTL.sy); ctx.lineTo(rTR.sx, rTR.sy)
          ctx.stroke()
        }

        // Rooftop detail — skip on mobile
        if (!mob) {
          for (let c = 0; c < Math.floor((w - 6) / 6); c++) {
            for (let r = 0; r < Math.floor((h - 6) / 6); r++) {
              if (rng() < 0.08) {
                const u = (4 + c * 6) / w   // 0..1 across width
                const v = (4 + r * 6) / h   // 0..1 across height
                const rx = rTL.sx + (rTR.sx - rTL.sx) * u + (rBL.sx - rTL.sx) * v
                const ry = rTL.sy + (rTR.sy - rTL.sy) * u + (rBL.sy - rTL.sy) * v
                ctx.fillStyle = 'rgba(250,199,117,0.22)'
                ctx.fillRect(rx, ry, 1.5, 1.5)
              }
            }
          }
        }
      }  // end for drawList
    } else {
      // ── Flat top-down buildings ───────────────────────────────────────────
      // Building shadows — SE offset creates height illusion
      for (const bld of visBuildings) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.62)'
        ctx.fillRect(bld.x + 4, bld.y + 4, bld.w, bld.h)
      }

      // Building footprints with strong type tints + edge lighting
      for (const bld of visBuildings) {
        const bGrd = ctx.createLinearGradient(bld.x, bld.y, bld.x + bld.w, bld.y + bld.h)
        if (bld.btype === 'residential') {
          bGrd.addColorStop(0, '#1e1316'); bGrd.addColorStop(1, '#281c22')
        } else if (bld.btype === 'commercial') {
          bGrd.addColorStop(0, '#10152a'); bGrd.addColorStop(1, '#171f38')
        } else {
          bGrd.addColorStop(0, '#111a18'); bGrd.addColorStop(1, '#172420')
        }
        ctx.fillStyle = bGrd
        ctx.fillRect(bld.x, bld.y, bld.w, bld.h)
        // NW highlight — simulates light from upper-left
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)'
        ctx.fillRect(bld.x, bld.y, bld.w, 1.5)
        ctx.fillRect(bld.x, bld.y, 1.5, bld.h)
        // SE shadow edge
        ctx.fillStyle = 'rgba(0, 0, 0, 0.38)'
        ctx.fillRect(bld.x + bld.w - 1.5, bld.y, 1.5, bld.h)
        ctx.fillRect(bld.x, bld.y + bld.h - 1.5, bld.w, 1.5)
        // Windows
        const rng = seededRng(bld.x * 13 + bld.y * 31)
        const winSize = 2
        const winSpacing = 5
        const wCols = Math.floor((bld.w - 6) / winSpacing)
        const wRows = Math.floor((bld.h - 6) / winSpacing)
        if (wCols > 0 && wRows > 0) {
          for (let c = 0; c < wCols; c++) {
            for (let r = 0; r < wRows; r++) {
              if (rng() < 0.13) {
                ctx.fillStyle = 'rgba(250, 199, 117, 0.25)'
                ctx.fillRect(bld.x + 4 + c * winSpacing, bld.y + 4 + r * winSpacing, winSize, winSize)
              }
            }
          }
        }
      }
    }

    // Roads: flat mode only (ISO roads already drawn above before buildings)
    if (!ISO_MODE) {
      ctx.strokeStyle = '#131420'  // sidewalk (slightly lighter than terrain)
      ctx.lineWidth = 44
      for (const s of streetsRef.current) {
        ctx.beginPath(); ctx.moveTo(s.ax, s.ay); ctx.lineTo(s.bx, s.by); ctx.stroke()
      }
      ctx.strokeStyle = '#0d0e17'  // asphalt (darker than sidewalk)
      ctx.lineWidth = 30
      for (const s of streetsRef.current) {
        ctx.beginPath(); ctx.moveTo(s.ax, s.ay); ctx.lineTo(s.bx, s.by); ctx.stroke()
      }
      ctx.strokeStyle = '#111222'  // faint centre
      ctx.lineWidth = 10
      for (const s of streetsRef.current) {
        ctx.beginPath(); ctx.moveTo(s.ax, s.ay); ctx.lineTo(s.bx, s.by); ctx.stroke()
      }
      ctx.strokeStyle = '#32324e'
      ctx.lineWidth = 0.8
      ctx.setLineDash([6, 8])
      for (const s of streetsRef.current) {
        ctx.beginPath(); ctx.moveTo(s.ax, s.ay); ctx.lineTo(s.bx, s.by); ctx.stroke()
      }
      ctx.setLineDash([])
    }

    // Flat-mode crosswalks and roundabout (ISO crosswalks drawn earlier, before depth sort)
    if (!ISO_MODE) {
      ctx.fillStyle = 'rgba(200, 205, 240, 0.14)'
      streetPosRef.current.cols.forEach(ix => {
        streetPosRef.current.rows.forEach(iy => {
          for (let i = 0; i < 4; i++) {
            ctx.fillRect(ix - 34 - i * 5, iy - 13, 3, 26)
            ctx.fillRect(ix + 28 + i * 5, iy - 13, 3, 26)
            ctx.fillRect(ix - 13, iy - 34 - i * 5, 26, 3)
            ctx.fillRect(ix - 13, iy + 28 + i * 5, 26, 3)
          }
        })
      })

      // Roundabout at center intersection (cosmetic — routing is unchanged)
      const rcx = 0.5 * W, rcy = 0.5 * H
      ctx.strokeStyle = '#1e2030'
      ctx.lineWidth = 10
      ctx.beginPath(); ctx.arc(rcx, rcy, 19, 0, Math.PI * 2); ctx.stroke()
      const ig = ctx.createRadialGradient(rcx, rcy, 0, rcx, rcy, 13)
      ig.addColorStop(0, '#142a1a'); ig.addColorStop(1, '#0a1510')
      ctx.fillStyle = ig
      ctx.beginPath(); ctx.arc(rcx, rcy, 13, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = 'rgba(15, 58, 20, 0.97)'
      ctx.beginPath(); ctx.arc(rcx, rcy, 6, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = 'rgba(30, 95, 38, 0.65)'
      ctx.beginPath(); ctx.arc(rcx - 1, rcy - 1, 3, 0, Math.PI * 2); ctx.fill()
    }

    // Trees along sidewalks — flat mode only; ISO trees are in the depth-sorted draw list
    if (!ISO_MODE) {
      for (const t of visTrees) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.42)'
        ctx.beginPath(); ctx.arc(t.x + 2, t.y + 2, 8, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = 'rgba(8, 42, 11, 0.97)'
        ctx.beginPath(); ctx.arc(t.x, t.y, 8, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = 'rgba(15, 65, 20, 0.88)'
        ctx.beginPath(); ctx.arc(t.x - 1, t.y - 1, 5.5, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = 'rgba(26, 95, 34, 0.52)'
        ctx.beginPath(); ctx.arc(t.x - 2, t.y - 2, 3, 0, Math.PI * 2); ctx.fill()
      }
    }

    // Communication mesh + halos + agents — dynamic, skip when baking static layer
    if (staticOnly) return

    // Communication mesh — opacity reacts to lamp brightness + amber pulse
    ctx.lineWidth = 1
    const byStreet = new Map<string, Lamp[]>()
    visLamps.forEach(l => {
      const key = `${l.streetId}-${l.side}`
      if (!byStreet.has(key)) byStreet.set(key, [])
      byStreet.get(key)!.push(l)
    })
    byStreet.forEach(arr => {
      arr.sort((a, b) => (a.x + a.y) - (b.x + b.y))
      for (let i = 0; i < arr.length - 1; i++) {
        const avgB = useBaseline ? MAX_VISUAL_BRI : Math.pow((arr[i].brightness + arr[i + 1].brightness) / 2, 0.7) * MAX_VISUAL_BRI
        ctx.strokeStyle = `rgba(250, 199, 117, ${0.02 + avgB * 0.08})`
        ctx.beginPath()
        ctx.moveTo(arr[i].x, arr[i].y); ctx.lineTo(arr[i + 1].x, arr[i + 1].y)
        ctx.stroke()
      }
    })

    // ── Flat mode halos (no poles, buildings not an issue) ──────────────────
    if (!ISO_MODE) {
      const roundX = W * 0.5, roundY = H * 0.5, roundZone = 40
      const roundLamps = visLamps.filter(l => Math.hypot(l.x - roundX, l.y - roundY) < roundZone)
      const roundB = roundLamps.length > 0
        ? (useBaseline ? MAX_VISUAL_BRI : Math.pow(roundLamps.reduce((s, l) => s + l.brightness, 0) / roundLamps.length, 0.7) * MAX_VISUAL_BRI)
        : Math.pow(baselineRef.current, 0.7)

      const drawFlatHalo = (hx: number, hy: number, b: number) => {
        const n = b / MAX_VISUAL_BRI  // normalise to 0-1 for linear visual response
        if (n > 0.01) {
          const r = n * 120 * glowScale
          const grd = ctx.createRadialGradient(hx, hy, 0, hx, hy, r)
          grd.addColorStop(0, `rgba(255, 224, 155, ${0.88 * n})`)
          grd.addColorStop(0.15, `rgba(252, 208, 128, ${0.56 * n})`)
          grd.addColorStop(0.40, `rgba(250, 199, 117, ${0.22 * n})`)
          grd.addColorStop(0.70, `rgba(250, 199, 117, ${0.07 * n})`)
          grd.addColorStop(1, 'rgba(250, 199, 117, 0)')
          ctx.fillStyle = grd
          ctx.beginPath(); ctx.arc(hx, hy, r, 0, Math.PI * 2); ctx.fill()
        }
        ctx.fillStyle = `rgba(255, 230, 170, ${n})`
        ctx.beginPath(); ctx.arc(hx, hy, 2.2, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = '#22222a'
        ctx.beginPath(); ctx.arc(hx, hy, 0.9, 0, Math.PI * 2); ctx.fill()
      }
      for (const l of visLamps) {
        if (Math.hypot(l.x - roundX, l.y - roundY) < roundZone) continue
        const b = useBaseline ? MAX_VISUAL_BRI : Math.pow(l.brightness, 0.7) * MAX_VISUAL_BRI
        drawFlatHalo(l.x, l.y, b)
      }
      drawFlatHalo(roundX, roundY, roundB)
    }

    if (!ISO_MODE) {
      for (const a of agentsRef.current) {
        const bri = useBaseline ? MAX_VISUAL_BRI : localBrightnessAt(a.x, a.y) * MAX_VISUAL_BRI
        if (a.type === 'car') drawCar(ctx, a, bri)
        else drawPedestrian(ctx, a, bri)
      }
    }

  }

  function drawFPV(ctx: CanvasRenderingContext2D) {
    const { W, H } = dimsRef.current

    if (!trackedRef.current) {
      trackedRef.current = agentsRef.current.find(a => a.type === 'ped') || spawnAgent(W * 0.5, H * 0.5, 'ped')
      if (!trackedRef.current) return
    }
    const a = trackedRef.current
    const sp = Math.max(0.1, Math.hypot(a.vx, a.vy))

    // 1. Sky Background (Deep atmospheric indigo-black)
    const sky = ctx.createLinearGradient(0, 0, 0, H * 0.45)
    sky.addColorStop(0, '#020205')
    sky.addColorStop(1, '#0b0914')
    ctx.fillStyle = sky
    ctx.fillRect(0, 0, W, H)

    // 2. Stars
    const starRng = seededRng(777)
    ctx.fillStyle = '#ffffff'
    for (let i = 0; i < 40; i++) {
      const sx = starRng() * W
      const sy = starRng() * (H * 0.45 - 20)
      const size = 0.5 + starRng() * 1.0
      ctx.globalAlpha = 0.15 + starRng() * 0.7
      ctx.fillRect(sx, sy, size, size)
    }
    ctx.globalAlpha = 1.0

    const horizonY = H * 0.45
    const vpx = W / 2
    const bobY = Math.sin(a.stride * 1.0) * 3 // Walking head-bob

    const camHeight = 0.5
    const projX = (x: number, depth: number) => {
      const scale = 1 / depth
      return vpx + x * scale * W
    }
    const projY = (y: number, depth: number) => {
      const scale = 1 / depth
      return horizonY - (y - camHeight) * scale * H + bobY
    }

    // 3. Draw Road & Sidewalk asphalt surface (perspective trapezoids)
    // Ambient road surface - slightly lit so it's not pitch black
    const farZ = 60.0
    ctx.fillStyle = '#101018'
    ctx.beginPath()
    ctx.moveTo(projX(-0.4, farZ), projY(0, farZ))
    ctx.lineTo(projX(0.4, farZ), projY(0, farZ))
    ctx.lineTo(projX(0.4, 0.3), projY(0, 0.3))
    ctx.lineTo(projX(-0.4, 0.3), projY(0, 0.3))
    ctx.closePath()
    ctx.fill()

    // Left Sidewalk
    ctx.fillStyle = '#151520'
    ctx.beginPath()
    ctx.moveTo(projX(-0.65, farZ), projY(0, farZ))
    ctx.lineTo(projX(-0.4, farZ), projY(0, farZ))
    ctx.lineTo(projX(-0.4, 0.3), projY(0, 0.3))
    ctx.lineTo(projX(-0.65, 0.3), projY(0, 0.3))
    ctx.closePath()
    ctx.fill()

    // Right Sidewalk
    ctx.fillStyle = '#151520'
    ctx.beginPath()
    ctx.moveTo(projX(0.4, farZ), projY(0, farZ))
    ctx.lineTo(projX(0.65, farZ), projY(0, farZ))
    ctx.lineTo(projX(0.65, 0.3), projY(0, 0.3))
    ctx.lineTo(projX(0.4, 0.3), projY(0, 0.3))
    ctx.closePath()
    ctx.fill()



    // Curb lines
    ctx.strokeStyle = '#222232'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(projX(-0.4, 10.0), projY(0, 10.0)); ctx.lineTo(projX(-0.4, 0.3), projY(0, 0.3))
    ctx.moveTo(projX(0.4, 10.0), projY(0, 10.0)); ctx.lineTo(projX(0.4, 0.3), projY(0, 0.3))
    ctx.stroke()

    // Sidewalk joint/paving lines scrolling in depth
    const spacing = Math.min(W, H) * 0.11
    const pixelsToZ = 1.5 / (spacing * 1.2)
    const progress = a.t * (sp / METERS_PER_PIXEL) * pixelsToZ

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
    ctx.lineWidth = 1
    const pavingStart = (10 - (progress % 0.5)) % 0.5
    for (let zVal = pavingStart; zVal < farZ; zVal += 0.5) {
      if (zVal < 0.3) continue
      // Left sidewalk lines
      ctx.beginPath()
      ctx.moveTo(projX(-0.65, zVal), projY(0, zVal))
      ctx.lineTo(projX(-0.4, zVal), projY(0, zVal))
      ctx.stroke()

      // Right sidewalk lines
      ctx.beginPath()
      ctx.moveTo(projX(0.4, zVal), projY(0, zVal))
      ctx.lineTo(projX(0.65, zVal), projY(0, zVal))
      ctx.stroke()
    }

    // Centered dashed road markings scrolling in depth
    ctx.fillStyle = 'rgba(255, 255, 255, 0.22)'
    const dashStart = (10 - (progress % 1.0)) % 1.0
    for (let zVal = dashStart; zVal < farZ; zVal += 1.0) {
      if (zVal < 0.3) continue
      ctx.beginPath()
      ctx.moveTo(projX(-0.012, zVal + 0.3), projY(0, zVal + 0.3))
      ctx.lineTo(projX(0.012, zVal + 0.3), projY(0, zVal + 0.3))
      ctx.lineTo(projX(0.012, zVal), projY(0, zVal))
      ctx.lineTo(projX(-0.012, zVal), projY(0, zVal))
      ctx.closePath()
      ctx.fill()
    }

    // 4. Construct Renderable Items (Painters Algorithm: sort by Z descending)
    interface RenderItem {
      type: 'building' | 'lamp'
      z: number
      bldIndex?: number
      lamp?: Lamp
      relativeSide?: string
    }

    const renderItems: RenderItem[] = []

    // Populate perspective buildings
    const startBldIndex = Math.floor(progress / 1.5) - 1
    for (let i = 0; i < 40; i++) {
      const bldIndex = startBldIndex + i
      const zWorld = bldIndex * 1.5
      const zRel = zWorld - progress
      if (zRel >= 0.3 && zRel <= 60) {
        renderItems.push({ type: 'building', z: zRel, bldIndex })
      }
    }

    // Populate virtual streetlights — evenly spaced, scrolling infinitely like buildings
    const lampSpacing = 1.6  // Natural staggered spacing (1.6 Z units instead of 0.75)
    const startLampIndex = Math.floor(progress / lampSpacing) - 1
    for (let i = 0; i < 30; i++) {
      const lampIndex = startLampIndex + i
      const zWorld = lampIndex * lampSpacing
      const zRel = zWorld - progress
      if (zRel >= 0.3 && zRel <= 45) {
        // Alternate: even index = left side, odd = right side (staggered like real streets)
        const side = lampIndex % 2 === 0 ? 'left' : 'right'
        renderItems.push({ type: 'lamp', z: zRel, lamp: lampsRef.current[0], relativeSide: side })
      }
    }

    // Sort render queue: furthest first, lamps render AFTER buildings at same depth
    renderItems.sort((r1, r2) => {
      if (Math.abs(r1.z - r2.z) < 0.01) return r1.type === 'lamp' ? 1 : -1
      return r2.z - r1.z
    })

    const lerp2D = (p1: { x: number; y: number }, p2: { x: number; y: number }, t: number) => ({
      x: p1.x + (p2.x - p1.x) * t,
      y: p1.y + (p2.y - p1.y) * t
    })

    // Render loop
    renderItems.forEach(item => {
      if (item.type === 'building') {
        const bldIndex = item.bldIndex || 0
        const hRng = seededRng(bldIndex * 59 + 7)
        const h = 3.5 + hRng() * 2.5 // Building heights (taller than lamp poles)
        const zF = item.z
        const zB = item.z + 1.5

        // Left building block
        {
          const xL = -2.2, xR = -0.45
          const yG = 0, yR = h
          const fTR = { x: projX(xR, zF), y: projY(yR, zF) }
          const fBR = { x: projX(xR, zF), y: projY(yG, zF) }
          const bTR = { x: projX(xR, zB), y: projY(yR, zB) }
          const bBR = { x: projX(xR, zB), y: projY(yG, zB) }

          const fTL = { x: projX(xL, zF), y: projY(yR, zF) }
          const fBL = { x: projX(xL, zF), y: projY(yG, zF) }

          // Side wall
          ctx.fillStyle = '#09080f'
          ctx.beginPath()
          ctx.moveTo(fTR.x, fTR.y)
          ctx.lineTo(bTR.x, bTR.y)
          ctx.lineTo(bBR.x, bBR.y)
          ctx.lineTo(fBR.x, fBR.y)
          ctx.closePath()
          ctx.fill()

          ctx.strokeStyle = 'rgba(255,255,255,0.02)'
          ctx.lineWidth = 0.5
          ctx.stroke()

          // Side wall window grid
          const numCols = 3
          const numRows = 5
          for (let c = 0; c < numCols; c++) {
            for (let r = 0; r < numRows; r++) {
              const u = (c + 0.25) / numCols
              const v = (r + 0.22) / numRows
              const wWidth = 0.5 / numCols
              const wHeight = 0.55 / numRows

              const wBR = lerp2D(lerp2D(fBR, bBR, u), lerp2D(fTR, bTR, u), v)
              const wTR = lerp2D(lerp2D(fBR, bBR, u), lerp2D(fTR, bTR, u), v + wHeight)
              const wTL = lerp2D(lerp2D(fBR, bBR, u + wWidth), lerp2D(fTR, bTR, u + wWidth), v + wHeight)
              const wBL = lerp2D(lerp2D(fBR, bBR, u + wWidth), lerp2D(fTR, bTR, u + wWidth), v)

              const winRng = seededRng(bldIndex * 47 + c * 13 + r * 19)
              ctx.fillStyle = winRng() < 0.15 ? 'rgba(250, 199, 117, 0.52)' : 'rgba(8, 8, 14, 0.8)'
              ctx.beginPath()
              ctx.moveTo(wBR.x, wBR.y)
              ctx.lineTo(wTR.x, wTR.y)
              ctx.lineTo(wTL.x, wTL.y)
              ctx.lineTo(wBL.x, wBL.y)
              ctx.closePath()
              ctx.fill()
            }
          }

          // Front wall
          ctx.fillStyle = '#050508'
          ctx.beginPath()
          ctx.moveTo(fTL.x, fTL.y)
          ctx.lineTo(fTR.x, fTR.y)
          ctx.lineTo(fBR.x, fBR.y)
          ctx.lineTo(fBL.x, fBL.y)
          ctx.closePath()
          ctx.fill()
        }

        // Right building block
        {
          const xL = 0.45, xR = 2.2
          const yG = 0, yR = h
          const fTL = { x: projX(xL, zF), y: projY(yR, zF) }
          const fBL = { x: projX(xL, zF), y: projY(yG, zF) }
          const bTL = { x: projX(xL, zB), y: projY(yR, zB) }
          const bBL = { x: projX(xL, zB), y: projY(yG, zB) }

          const fTR = { x: projX(xR, zF), y: projY(yR, zF) }
          const fBR = { x: projX(xR, zF), y: projY(yG, zF) }

          // Side wall
          ctx.fillStyle = '#09080f'
          ctx.beginPath()
          ctx.moveTo(fTL.x, fTL.y)
          ctx.lineTo(bTL.x, bTL.y)
          ctx.lineTo(bBL.x, bBL.y)
          ctx.lineTo(fBL.x, fBL.y)
          ctx.closePath()
          ctx.fill()

          ctx.strokeStyle = 'rgba(255,255,255,0.02)'
          ctx.lineWidth = 0.5
          ctx.stroke()

          // Side wall windows
          const numCols = 3
          const numRows = 5
          for (let c = 0; c < numCols; c++) {
            for (let r = 0; r < numRows; r++) {
              const u = (c + 0.25) / numCols
              const v = (r + 0.22) / numRows
              const wWidth = 0.5 / numCols
              const wHeight = 0.55 / numRows

              const wBL = lerp2D(lerp2D(fBL, bBL, u), lerp2D(fTL, bTL, u), v)
              const wTL = lerp2D(lerp2D(fBL, bBL, u), lerp2D(fTL, bTL, u), v + wHeight)
              const wTR = lerp2D(lerp2D(fBL, bBL, u + wWidth), lerp2D(fTL, bTL, u + wWidth), v + wHeight)
              const wBR = lerp2D(lerp2D(fBL, bBL, u + wWidth), lerp2D(fTL, bTL, u + wWidth), v)

              const winRng = seededRng(bldIndex * 47 + c * 13 + r * 19 + 11)
              ctx.fillStyle = winRng() < 0.15 ? 'rgba(250, 199, 117, 0.52)' : 'rgba(8, 8, 14, 0.8)'
              ctx.beginPath()
              ctx.moveTo(wBL.x, wBL.y)
              ctx.lineTo(wTL.x, wTL.y)
              ctx.lineTo(wTR.x, wTR.y)
              ctx.lineTo(wBR.x, wBR.y)
              ctx.closePath()
              ctx.fill()
            }
          }

          // Front wall
          ctx.fillStyle = '#050508'
          ctx.beginPath()
          ctx.moveTo(fTL.x, fTL.y)
          ctx.lineTo(fTR.x, fTR.y)
          ctx.lineTo(fBR.x, fBR.y)
          ctx.lineTo(fBL.x, fBL.y)
          ctx.closePath()
          ctx.fill()
        }
      } else if (item.type === 'lamp') {
        const scale = 1 / item.z
        const relativeSide = item.relativeSide
        // Citizen View: calculate brightness dynamically based on lookahead and baseline
        // - All active streetlights in the corridor have the exact same 100% physical light output (MAX_VISUAL_BRI)
        // - Distant lamps fade smoothly to the baseline brightness slider percentage
        const lookaheadZ = lookaheadRef.current * 1.6  // Scale factor to make slider changes highly visible in 3D perspective
        const safeZLimit = Math.max(1.5, lookaheadZ)
        const fadeLength = 1.2 // Sharper, cleaner transition so lookahead cuts are highly distinct

        let bri = MAX_VISUAL_BRI
        if (item.z > safeZLimit) {
          const distPast = item.z - safeZLimit
          const fadeFactor = Math.max(0, Math.min(1, distPast / fadeLength))
          // Fade from MAX_VISUAL_BRI to (baseline * MAX_VISUAL_BRI)
          const baseBri = Math.pow(baselineRef.current, 0.7) * MAX_VISUAL_BRI
          bri = MAX_VISUAL_BRI * (1 - fadeFactor) + baseBri * fadeFactor
        }

        // Depth-fade to prevent distant overlapping semi-transparent elements from compounding into a solid block
        const depthFade = Math.max(0.08, Math.min(1.0, 4.5 / item.z))

        const isLeft = relativeSide === 'left'
        const lampX = isLeft ? -0.38 : 0.38  // on the sidewalk, between curb (±0.40) and building (±0.45)

        // Pole — realistic: ~6m streetlight, eye level ~1.7m => ratio ~3.5x
        const poleBaseX = projX(lampX, item.z)
        const poleBaseY = projY(0, item.z)
        const poleHeight = 1.8
        const poleTopY = projY(poleHeight, item.z)

        ctx.strokeStyle = `rgba(140, 140, 160, ${0.6 + 0.4 * scale})`
        ctx.lineWidth = Math.max(2, 4 * scale)
        ctx.beginPath()
        ctx.moveTo(poleBaseX, poleBaseY)
        ctx.lineTo(poleBaseX, poleTopY)
        ctx.stroke()

        // Arm extending toward street
        const armLength = isLeft ? 0.10 : -0.10
        const armX = projX(lampX + armLength, item.z)
        const armY = projY(poleHeight + 0.04, item.z)

        ctx.beginPath()
        ctx.moveTo(poleBaseX, poleTopY)
        ctx.lineTo(armX, armY)
        ctx.stroke()

        // VISIBLE LIGHT CONE from fixture down to ground
        // This is the key: you see the beam going FROM the lamp TO the road
        const groundCenterX = projX(lampX * 0.3, item.z) // cone lands toward road center
        const groundY = projY(0, item.z)
        const coneSpreadGround = 0.22 * scale * W // how wide the cone is at ground level
        const coneGrd = ctx.createLinearGradient(armX, armY, groundCenterX, groundY)
        coneGrd.addColorStop(0, `rgba(255, 235, 190, ${0.45 * bri * depthFade})`)
        coneGrd.addColorStop(0.5, `rgba(250, 215, 150, ${0.22 * bri * depthFade})`)
        coneGrd.addColorStop(1, `rgba(250, 199, 117, ${0.10 * bri * depthFade})`)
        ctx.fillStyle = coneGrd
        ctx.beginPath()
        ctx.moveTo(armX - 2 * scale, armY)  // narrow at fixture
        ctx.lineTo(armX + 2 * scale, armY)
        ctx.lineTo(groundCenterX + coneSpreadGround, groundY)  // wide at ground
        ctx.lineTo(groundCenterX - coneSpreadGround, groundY)
        ctx.closePath()
        ctx.fill()

        // Ground light pool (where the cone hits the road)
        const poolRadX = (0.10 + 0.36 * bri) * scale * W
        const poolRadY = poolRadX * 0.35

        const poolGrd = ctx.createRadialGradient(groundCenterX, groundY, 0, groundCenterX, groundY, poolRadX)
        poolGrd.addColorStop(0, `rgba(255, 224, 155, ${0.70 * bri * depthFade})`)
        poolGrd.addColorStop(0.3, `rgba(250, 199, 117, ${0.40 * bri * depthFade})`)
        poolGrd.addColorStop(0.7, `rgba(250, 199, 117, ${0.12 * bri * depthFade})`)
        poolGrd.addColorStop(1, 'rgba(250, 199, 117, 0)')
        ctx.fillStyle = poolGrd
        ctx.beginPath()
        ctx.ellipse(groundCenterX, groundY, poolRadX, poolRadY, 0, 0, Math.PI * 2)
        ctx.fill()

        // Bulb glow/halo at fixture
        const glowRad = (8 + bri * 32) * scale
        const glowGrd = ctx.createRadialGradient(armX, armY, 0, armX, armY, glowRad)
        glowGrd.addColorStop(0, `rgba(255, 240, 200, ${0.95 * bri * depthFade})`)
        glowGrd.addColorStop(0.2, `rgba(255, 224, 155, ${0.55 * bri * depthFade})`)
        glowGrd.addColorStop(0.5, `rgba(250, 199, 117, ${0.18 * bri * depthFade})`)
        glowGrd.addColorStop(1, 'rgba(250, 199, 117, 0)')
        ctx.fillStyle = glowGrd
        ctx.beginPath()
        ctx.arc(armX, armY, glowRad, 0, Math.PI * 2)
        ctx.fill()

        // Bright lamp core dot
        ctx.fillStyle = `rgba(255, 250, 235, ${0.7 + 0.3 * bri * depthFade})`
        ctx.beginPath()
        ctx.arc(armX, armY, Math.max(1.5, 2.5 * scale), 0, Math.PI * 2)
        ctx.fill()
      }
    })



    // Soft vignette (lighter than before)
    const vg = ctx.createRadialGradient(W / 2, H / 2, W * 0.35, W / 2, H / 2, W * 0.85)
    vg.addColorStop(0, 'rgba(0,0,0,0)')
    vg.addColorStop(1, 'rgba(0,0,0,0.35)')
    ctx.fillStyle = vg
    ctx.fillRect(0, 0, W, H)

    ctx.fillStyle = 'rgba(255,255,255,0.45)'
    ctx.font = '12px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('the corridor stays ahead — the citizen never notices', W / 2, H - 24)
  }

  function draw(ctx: CanvasRenderingContext2D) {
    const { W, H } = dimsRef.current
    const m = modeRef.current
    const z = zoomRef.current
    const dpr = dprRef.current
    const bounds = getVirtualBounds(W, H, z)
    // Shift visible bounds by pan (pan is in screen px, convert to world coords)
    const { x: panX, y: panY } = panRef.current
    const panWorldX = panX / z, panWorldY = panY / z
    virtualBoundsRef.current = {
      vx0: bounds.vx0 - panWorldX,
      vy0: bounds.vy0 - panWorldY,
      vx1: bounds.vx1 - panWorldX,
      vy1: bounds.vy1 - panWorldY,
      vW: bounds.vW,
      vH: bounds.vH,
    }
    const { vx0, vy0, vW, vH } = bounds

    // Fill entire canvas first so no black gaps appear outside the city at max zoom-out
    ctx.fillStyle = '#08080e'
    ctx.fillRect(0, 0, W, H)

    if (m === 'fpv') {
      drawFPV(ctx)
      return
    }

    // ── Static layer baking ──────────────────────────────────────────────────
    // Bake ground/roads/buildings/trees into an offscreen canvas once.
    // During pan/drag, offset the blit by the delta — no rebake until drag ends.
    // During zoom animation, SKIP the rebake entirely — the dynamic layer draws
    // everything correctly, and a single quality rebake fires when zoom settles.
    if (m !== 'compare') {
      const useBaseline = m === 'baseline'
      // Allocate / resize offscreen canvas to match physical pixel size
      let sc = staticCanvasRef.current
      const physW = Math.round(W * dpr), physH = Math.round(H * dpr)
      if (!sc || sc.width !== physW || sc.height !== physH) {
        sc = document.createElement('canvas')
        sc.width = physW
        sc.height = physH
        staticCanvasRef.current = sc
        staticDirtyRef.current = true
      }

      // Only rebake when zoom has settled — skip the expensive redraw while easing
      const zoomIsSettled = Math.abs(targetZoomRef.current - zoomRef.current) < 0.002
      if (staticDirtyRef.current && zoomIsSettled) {
        const sCtx = sc.getContext('2d')!
        sCtx.setTransform(dpr, 0, 0, dpr, 0, 0)
        sCtx.fillStyle = '#08080e'
        sCtx.fillRect(0, 0, W, H)
        sCtx.save()
        sCtx.translate(W / 2 + panX, H / 2 + panY)
        sCtx.scale(z, z)
        sCtx.translate(-W / 2, -H / 2)
        sCtx.fillStyle = '#08080e'
        sCtx.fillRect(vx0, vy0, vW, vH)
        drawCityTopDown(sCtx, useBaseline, true)
        sCtx.restore()
        staticDirtyRef.current = false
        bakedPanRef.current = { x: panX, y: panY }
        bakedZoomRef.current = z
      }

      if (!staticDirtyRef.current) {
        // Blit static layer offset by pan delta since last bake (GPU copy — nearly free)
        const dpx = panX - bakedPanRef.current.x
        const dpy = panY - bakedPanRef.current.y
        ctx.drawImage(sc, 0, 0, physW, physH, dpx, dpy, W, H)
      } else {
        // Zoom is still easing — skip stale blit, dynamic layer will draw the full scene
        ctx.fillStyle = '#08080e'
        ctx.fillRect(0, 0, W, H)
      }

      // Dynamic layer: halos + mesh + agents on top (with current pan)
      ctx.save()
      ctx.translate(W / 2 + panX, H / 2 + panY)
      ctx.scale(z, z)
      ctx.translate(-W / 2, -H / 2)
      drawCityTopDown(ctx, useBaseline)
      ctx.restore()
    } else {
      // Compare mode — always full redraw (secondary mode)
      // Use pan-corrected virtual bounds so clip rect aligns with the transform
      // (zoom-to-cursor shifts pan, so non-corrected bounds would offset the clip)
      const { vx0: pvx0, vy0: pvy0, vW: pvW, vH: pvH } = virtualBoundsRef.current
      const halfVW = pvW / 2
      // Divider in virtual space is always at centre of visible area
      const dividerX = pvx0 + halfVW
      ctx.save()
      ctx.translate(W / 2 + panX, H / 2 + panY)
      ctx.scale(z, z)
      ctx.translate(-W / 2, -H / 2)
      ctx.fillStyle = '#08080e'
      ctx.fillRect(pvx0, pvy0, pvW, pvH)
      ctx.save(); ctx.beginPath(); ctx.rect(pvx0, pvy0, halfVW, pvH); ctx.clip()
      drawCityTopDown(ctx, true)
      ctx.restore()
      ctx.save(); ctx.beginPath(); ctx.rect(dividerX, pvy0, halfVW, pvH); ctx.clip()
      drawCityTopDown(ctx, false)
      ctx.restore()
      ctx.strokeStyle = 'rgba(255,255,255,0.18)'
      ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(dividerX, pvy0); ctx.lineTo(dividerX, pvy0 + pvH); ctx.stroke()
      ctx.restore()
    }

    // Warm ambient lift on mobile — dark palette needs a faint overlay so buildings aren't pure black
    if (isMobileRef.current) {
      ctx.fillStyle = 'rgba(70, 50, 20, 0.18)'
      ctx.fillRect(0, 0, W, H)
    }

    // Atmospheric vignette — desktop only, skip on mobile
    if (!isMobileRef.current) {
      const vg = ctx.createRadialGradient(W / 2, H / 2, W * 0.28, W / 2, H / 2, W * 0.78)
      vg.addColorStop(0, 'rgba(0,0,0,0)')
      vg.addColorStop(1, 'rgba(0,0,0,0.48)')
      ctx.fillStyle = vg
      ctx.fillRect(0, 0, W, H)
    }
  }

  // --- Scenario auto-spawn ---
  function handleScenario(dt: number) {
    // Sparse autoplay — runs regardless of scenario picker, caps agents at 4
    if (autoplayRef.current === 'sparse') {
      sparseTimerRef.current -= dt
      if (sparseTimerRef.current <= 0) {
        sparseTimerRef.current = 2 + Math.random() * 3
        const agents = agentsRef.current
        const pedCount = agents.filter(a => a.type === 'ped').length
        const carCount = agents.filter(a => a.type === 'car').length
        const maxPeds = isMobileRef.current ? 2 : 3
        if (Math.random() < 0.75) {
          if (pedCount < maxPeds) spawnRandomEdge('ped')
        } else {
          if (carCount < 1) spawnRandomEdge('car')
        }
      }
    }

    if (scenarioRef.current === 'manual') return
    scenarioTimerRef.current -= dt
    if (scenarioTimerRef.current > 0) return
    if (scenarioRef.current === 'quiet') {
      scenarioTimerRef.current = 4 + Math.random() * 5
      spawnRandomEdge(Math.random() < 0.85 ? 'ped' : 'car')
    } else if (scenarioRef.current === 'busy') {
      scenarioTimerRef.current = 0.4 + Math.random() * 0.6
      spawnRandomEdge(Math.random() < 0.55 ? 'car' : 'ped')
    } else if (scenarioRef.current === 'mixed') {
      scenarioTimerRef.current = 1.2 + Math.random() * 1.5
      spawnRandomEdge(Math.random() < 0.5 ? 'car' : 'ped')
    }
  }

  // --- Main effect: canvas setup + render loop ---
  useEffect(() => {
    const canvas = canvasRef.current
    const stage = stageRef.current
    if (!canvas || !stage) return
    const ctx = canvas.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    dprRef.current = dpr

    const resize = () => {
      const rect = stage.getBoundingClientRect()
      const W = rect.width, H = rect.height
      const { W: prevW, H: prevH } = dimsRef.current
      dimsRef.current = { W, H }
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      staticCanvasRef.current = null  // force offscreen canvas realloc on resize
      staticDirtyRef.current = true
      // Re-layout when width changes OR when height changes by more than 20px
      // (e.g. switching between mobile/desktop stage heights)
      if (W !== prevW || Math.abs(H - prevH) > 20) {
        virtualBoundsRef.current = getVirtualBounds(W, H, zoomRef.current)
        layoutCity(W, H)
        if (!presetSpawnedRef.current) {
          presetSpawnedRef.current = true
          // Peds on horizontal streets (exact row y → distance 0 → always wins)
          // Rows at H*0.20, H*0.50, H*0.80
          spawnAgent(W * 0.25, H * 0.20, 'ped',  1)   // top row, left → right
          spawnAgent(W * 0.75, H * 0.20, 'ped', -1)   // top row, right → left
          spawnAgent(W * 0.30, H * 0.80, 'ped',  1)   // bottom row, left → right
          // Cars on vertical streets (exact col x → distance 0 → always wins)
          // Cols at W*0.18, W*0.50, W*0.82
          spawnAgent(W * 0.18, H * 0.30, 'car',  1)   // left col, moving down
          spawnAgent(W * 0.82, H * 0.40, 'car', -1)   // right col, moving up
        }
      }
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(stage)

    let lastTick = performance.now()
    let lastAmbientFrame = 0
    let raf = 0
    let statsTick = 0
    let busTick = 0   // separate 2Hz gate for simBus (dashboard history)

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop)
      // Throttle ambient to 20fps — it's a backdrop, not the main interaction
      if (variantRef.current === 'ambient' && now - lastAmbientFrame < 50) return
      if (variantRef.current === 'ambient') lastAmbientFrame = now
      const dt = Math.min(0.1, (now - lastTick) / 1000)
      lastTick = now


      // Smooth zoom easing — each wheel tick sets targetZoom, we glide towards it
      const minZoom = isMobileRef.current ? 0.40 : 0.45
      targetZoomRef.current = Math.max(minZoom, targetZoomRef.current)
      if (zoomRef.current !== targetZoomRef.current) {
        const oldZ = zoomRef.current
        const ease = 1 - Math.exp(-dt * 8)
        zoomRef.current += (targetZoomRef.current - zoomRef.current) * ease
        if (Math.abs(targetZoomRef.current - zoomRef.current) < 0.001) {
          zoomRef.current = targetZoomRef.current
        }
        zoomRef.current = Math.max(minZoom, zoomRef.current)
        // Zoom-to-cursor: keep the world point under the cursor fixed as zoom eases
        const newZ = zoomRef.current
        if (newZ !== oldZ) {
          const { W, H } = dimsRef.current
          // Use zoom anchor snapshotted at wheel-time; fall back to canvas center
          const anchor = zoomAnchorRef.current
          const cx = anchor ? anchor.x : W / 2
          const cy = anchor ? anchor.y : H / 2
          const factor = newZ / oldZ
          const pan = panRef.current
          pan.x = pan.x * factor + (cx - W / 2) * (1 - factor)
          pan.y = pan.y * factor + (cy - H / 2) * (1 - factor)
          clampPan(pan, newZ)
          staticDirtyRef.current = true  // zoom changed — rebake static layer
        }
      }

      // Inertia — apply pan velocity after drag release, damp each frame
      const vel = panVelRef.current
      if (Math.abs(vel.vx) > 1 || Math.abs(vel.vy) > 1) {
        const pan = panRef.current
        pan.x += vel.vx * dt
        pan.y += vel.vy * dt
        clampPan(pan, zoomRef.current)
        const damping = Math.pow(0.92, dt * 60)  // frame-rate independent damping
        vel.vx *= damping
        vel.vy *= damping
        // Snap to zero and do final rebake when velocity is negligible
        if (Math.abs(vel.vx) < 1 && Math.abs(vel.vy) < 1) {
          vel.vx = 0; vel.vy = 0
          staticDirtyRef.current = true
        }
      }

      if (pausedRef.current) return
      handleScenario(dt)
      const power = step(dt)
      draw(ctx)

      // Throttle stats updates (re-renders React) to ~10Hz
      statsTick += dt
      if (statsTick > 0.1) {
        statsTick = 0
        const N = lampsRef.current.length
        const full = N * LAMP_WATTS
        const pct = full > 0 ? Math.round((power.luminationPower / full) * 100) : 0
        const instSavedW = full - power.luminationPower
        const annualKwh = (instSavedW / 1000) * HOURS_PER_YEAR_NIGHT
        const eurSavedNow = Math.round(annualKwh * PRICE_PER_KWH)
        const co2SavedNow = Math.round(annualKwh * CO2_PER_KWH)
        const pedsNow = agentsRef.current.filter(a => a.type === 'ped').length
        const carsNow = agentsRef.current.filter(a => a.type === 'car').length
        setStats({
          powerNow: Math.round(power.luminationPower),
          powerPct: pct,
          kwhSaved: kwhSavedRef.current,
          eurSaved: eurSavedNow,
          co2Saved: co2SavedNow,
          peds: pedsNow,
          cars: carsNow,
          lampCount: N,
          fullPower: full,
        })
      }

      // simBus emit at 2Hz — dashboard history; skip ambient (backdrop, not a data source)
      busTick += dt
      if (busTick >= 0.5 && variantRef.current !== 'ambient') {
        busTick = 0
        const N2 = lampsRef.current.length
        const full2 = N2 * LAMP_WATTS
        const instSaved2 = full2 - power.luminationPower
        const annKwh2 = (instSaved2 / 1000) * HOURS_PER_YEAR_NIGHT
        simBus.emit({
          t: performance.now(),
          powerW: power.luminationPower,
          baselineW: full2,
          eurSaved: Math.round(annKwh2 * PRICE_PER_KWH),
          co2Kg: Math.round(annKwh2 * CO2_PER_KWH),
          kwhSaved: kwhSavedRef.current,
          peds: agentsRef.current.filter(a => a.type === 'ped').length,
          cars: agentsRef.current.filter(a => a.type === 'car').length,
          lampCount: N2,
        })
      }

      // Power history ring buffer — push every 0.5s
      histTickRef.current += dt
      if (histTickRef.current >= 0.5) {
        histTickRef.current = 0
        const buf = powerHistoryRef.current
        buf.push({ lumi: power.luminationPower, full: power.fullPower })
        if (buf.length > 120) buf.shift()
      }
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  // --- Canvas click / touch handlers ---
  // Register external spawn function so App.tsx scroll-doc overlay can forward taps
  useEffect(() => {
    if (!externalSpawnRef) return
    externalSpawnRef.current = (cx: number, cy: number) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const { x, y } = toSimCoords(cx - rect.left, cy - rect.top)
      const a = spawnAgent(x, y, activeSpawnModeRef.current)
      if (a && a.type === 'ped' && !trackedRef.current) trackedRef.current = a
    }
    return () => { if (externalSpawnRef) externalSpawnRef.current = null }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // stable: spawnAgent uses only refs internally

  useEffect(() => {
    if (!externalZoomRef) return
    externalZoomRef.current = (delta: number) => {
      targetZoomRef.current = Math.min(3, Math.max(0.45, targetZoomRef.current * delta))
    }
    return () => { if (externalZoomRef) externalZoomRef.current = null }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Convert screen coordinates to simulation coordinates (accounting for zoom + ISO projection)
  const toSimCoords = (screenX: number, screenY: number) => {
    const { W, H } = dimsRef.current
    const z = zoomRef.current
    const { x: panX, y: panY } = panRef.current
    // 1. Undo pan + zoom transform
    const zx = (screenX - W / 2 - panX) / z + W / 2
    const zy = (screenY - H / 2 - panY) / z + H / 2
    // 2. Undo ISO shear
    const { wx, wy } = isoUnproject(zx, zy, W, H)
    return { x: wx, y: wy }
  }

  const clampPan = (pan: { x: number; y: number }, z: number) => {
    const { W, H } = dimsRef.current
    const minZ = isMobileRef.current ? 0.40 : 0.45
    const { vx0, vy0, vx1, vy1 } = getVirtualBounds(W, H, minZ)
    pan.x = Math.max(W / 2 - (vx1 - W / 2) * z, Math.min((W / 2 - vx0) * z - W / 2, pan.x))
    pan.y = Math.max(H / 2 - (vy1 - H / 2) * z, Math.min((H / 2 - vy0) * z - H / 2, pan.y))
  }

  // Window-level mouse listeners for drag.
  // mousedown checks the click lands inside the canvas bounds (not on HUD/buttons).
  // move/up on window so drag continues outside the canvas.
  useEffect(() => {
    if (!interactive) return

    const onDown = (e: MouseEvent) => {
      if (e.button !== 0) return
      const canvas = canvasRef.current
      if (!canvas) return
      // Only start drag if click is within the canvas rect
      const rect = canvas.getBoundingClientRect()
      if (e.clientX < rect.left || e.clientX > rect.right ||
          e.clientY < rect.top  || e.clientY > rect.bottom) return
      // Don't drag if the click landed on a UI element (button, nav, hud, etc.)
      if ((e.target as Element).closest('button, nav, a, input, select, [role="button"], .hud-controls, .hud-headline, .topbar, .info-btn, .info-modal, .card-expand')) return
      isDraggingRef.current = true
      didDragRef.current = false
      panVelRef.current = { vx: 0, vy: 0 }  // kill any ongoing inertia
      velSamplesRef.current = []
      dragStartRef.current = { mouseX: e.clientX, mouseY: e.clientY, panX: panRef.current.x, panY: panRef.current.y }
      canvas.style.cursor = 'grabbing'
    }
    const onMove = (e: MouseEvent) => {
      const canvas = canvasRef.current
      if (canvas) {
        const rect = canvas.getBoundingClientRect()
        zoomAnchorRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      }
      if (!isDraggingRef.current) return
      const dx = e.clientX - dragStartRef.current.mouseX
      const dy = e.clientY - dragStartRef.current.mouseY
      if (!didDragRef.current && Math.hypot(dx, dy) > 5) didDragRef.current = true
      if (didDragRef.current) {
        const pan = panRef.current
        pan.x = dragStartRef.current.panX + dx
        pan.y = dragStartRef.current.panY + dy
        clampPan(pan, zoomRef.current)
        // Track velocity samples (keep last 80ms)
        const now = performance.now()
        const samples = velSamplesRef.current
        samples.push({ x: pan.x, y: pan.y, t: now })
        while (samples.length > 1 && now - samples[0].t > 80) samples.shift()
      }
    }
    const onUp = () => {
      if (!isDraggingRef.current) return
      isDraggingRef.current = false
      const canvas = canvasRef.current
      if (canvas) canvas.style.cursor = 'grab'
      // Compute release velocity from recent samples
      const samples = velSamplesRef.current
      if (samples.length >= 2) {
        const first = samples[0], last = samples[samples.length - 1]
        const dt = (last.t - first.t) / 1000
        if (dt > 0) {
          panVelRef.current = {
            vx: (last.x - first.x) / dt,
            vy: (last.y - first.y) / dt,
          }
        }
      }
      velSamplesRef.current = []
      staticDirtyRef.current = true
    }

    window.addEventListener('mousedown', onDown)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [interactive])

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (didDragRef.current) return  // suppress click after drag
    const rect = canvasRef.current!.getBoundingClientRect()
    const { x, y } = toSimCoords(e.clientX - rect.left, e.clientY - rect.top)
    const isCar = e.shiftKey || activeSpawnModeRef.current === 'car'
    const a = spawnAgent(x, y, isCar ? 'car' : 'ped')
    if (a && a.type === 'ped' && !trackedRef.current) trackedRef.current = a
  }

  // Track how much of the stage is visible — used to gate zoom vs page-scroll
  const stageVisibilityRef = useRef(0)
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const io = new IntersectionObserver(
      ([entry]) => { stageVisibilityRef.current = entry.intersectionRatio },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    )
    io.observe(stage)
    return () => io.disconnect()
  }, [])

  // Wheel zoom registered via DOM directly (passive:false) so preventDefault works.
  // Only intercepts when the stage is ≥80% visible — otherwise lets the page scroll.
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !interactive) return
    const onWheel = (e: WheelEvent) => {
      if (stageVisibilityRef.current < 0.8) return  // let page scroll when half-visible
      e.preventDefault()
      const minZ = isMobileRef.current ? 0.40 : 0.45
      const rect = canvas.getBoundingClientRect()
      // Real mouse wheel: large deltaY (≥100px per click), no deltaX, not ctrlKey.
      // Everything else (trackpad two-finger scroll, pinch) uses tiny fixed steps.
      const isMouseWheel = !e.ctrlKey && Math.abs(e.deltaX) < 2 && Math.abs(e.deltaY) >= 100
      if (isMouseWheel) {
        // Physical scroll wheel — 3% per click is fine (≤3 events/sec)
        zoomAnchorRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
        const factor = e.deltaY > 0 ? 0.97 : 1.03
        targetZoomRef.current = Math.min(3, Math.max(minZ, targetZoomRef.current * factor))
      } else if (!e.ctrlKey && Math.abs(e.deltaX) > Math.abs(e.deltaY) * 0.5) {
        // Trackpad two-finger pan (has meaningful horizontal component)
        const pan = panRef.current
        pan.x -= e.deltaX * 0.6
        pan.y -= e.deltaY * 0.6
        clampPan(pan, zoomRef.current)
      } else {
        // Trackpad two-finger vertical scroll OR pinch — tiny fixed step per event
        // Ignores deltaY magnitude: trackpad fires 60–120 events/sec so magnitude
        // scaling causes runaway zoom. 0.4% per event is perceptible but controlled.
        zoomAnchorRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
        const factor = e.deltaY > 0 ? 0.996 : (1 / 0.996)
        targetZoomRef.current = Math.min(3, Math.max(minZ, targetZoomRef.current * factor))
      }
    }
    canvas.addEventListener('wheel', onWheel, { passive: false })
    return () => canvas.removeEventListener('wheel', onWheel)
  }, [interactive])

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 2) {
      wasPinchingRef.current = true
      touchDragRef.current = null
      isTouchDraggingRef.current = false
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      pinchRef.current = { dist: Math.hypot(dx, dy), zoom: zoomRef.current }
    } else if (e.touches.length === 1) {
      touchDragRef.current = null
      isTouchDraggingRef.current = false
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 2 && pinchRef.current) {
      e.preventDefault()
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      const dist = Math.hypot(dx, dy)
      const ratio = dist / pinchRef.current.dist
      const minZ = isMobileRef.current ? 0.40 : 0.45
      const oldZ = zoomRef.current
      const pz = Math.min(3, Math.max(minZ, pinchRef.current.zoom * ratio))
      // Zoom to pinch midpoint
      const rect = canvasRef.current!.getBoundingClientRect()
      const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left
      const my = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top
      const { W, H } = dimsRef.current
      const factor = pz / oldZ
      const pan = panRef.current
      pan.x = pan.x * factor + (mx - W / 2) * (1 - factor)
      pan.y = pan.y * factor + (my - H / 2) * (1 - factor)
      clampPan(pan, pz)
      zoomRef.current = pz
      targetZoomRef.current = pz
      staticDirtyRef.current = true  // pinch zoom changed — rebake static layer
    } else if (e.touches.length === 1 && !pinchRef.current) {
      const touch = e.touches[0]
      if (!touchDragRef.current) {
        panVelRef.current = { vx: 0, vy: 0 }  // kill any ongoing inertia
        velSamplesRef.current = []
        touchDragRef.current = { startX: touch.clientX, startY: touch.clientY, panX: panRef.current.x, panY: panRef.current.y }
      }
      const dx = touch.clientX - touchDragRef.current.startX
      const dy = touch.clientY - touchDragRef.current.startY
      if (!isTouchDraggingRef.current && Math.hypot(dx, dy) > 8) isTouchDraggingRef.current = true
      if (isTouchDraggingRef.current) {
        e.preventDefault()
        const pan = panRef.current
        pan.x = touchDragRef.current.panX + dx
        pan.y = touchDragRef.current.panY + dy
        clampPan(pan, zoomRef.current)
        // Track velocity samples (keep last 80ms)
        const now = performance.now()
        const samples = velSamplesRef.current
        samples.push({ x: pan.x, y: pan.y, t: now })
        while (samples.length > 1 && now - samples[0].t > 80) samples.shift()
      }
    }
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length < 2) pinchRef.current = null
    // Once all fingers are lifted, check if this was a plain tap (not a pinch or drag)
    if (e.touches.length === 0) {
      const wasPinching = wasPinchingRef.current
      const wasTouchDragging = isTouchDraggingRef.current
      wasPinchingRef.current = false
      if (isTouchDraggingRef.current) {
        // Compute release velocity from recent samples
        const samples = velSamplesRef.current
        if (samples.length >= 2) {
          const first = samples[0], last = samples[samples.length - 1]
          const dt = (last.t - first.t) / 1000
          if (dt > 0) {
            panVelRef.current = {
              vx: (last.x - first.x) / dt,
              vy: (last.y - first.y) / dt,
            }
          }
        }
        velSamplesRef.current = []
        staticDirtyRef.current = true
      }
      isTouchDraggingRef.current = false
      touchDragRef.current = null
      if (!wasPinching && !wasTouchDragging && e.changedTouches.length === 1) {
        e.preventDefault()  // block the synthetic click the browser fires ~300ms later
        const touch = e.changedTouches[0]
        const rect = canvasRef.current!.getBoundingClientRect()
        const { x, y } = toSimCoords(touch.clientX - rect.left, touch.clientY - rect.top)
        const a = spawnAgent(x, y, activeSpawnModeRef.current)
        if (a && a.type === 'ped' && !trackedRef.current) trackedRef.current = a
      }
    }
  }

  // --- Render ---
  const dimmedActual = dimmed || variant === 'ambient'

  return (
    <div className={`main${variant === 'ambient' ? ' main--ambient' : ''}`}>
      <div
        className={`stage${dimmedActual ? ' stage--dimmed' : ''}`}
        ref={stageRef}
        style={{ cursor: interactive ? 'grab' : undefined }}
      >
        <canvas
          ref={canvasRef}
          onClick={interactive ? handleClick : undefined}
          onTouchStart={interactive ? handleTouchStart : undefined}
          onTouchMove={interactive ? handleTouchMove : undefined}
          onTouchEnd={interactive ? handleTouchEnd : undefined}
          style={{
            display: effectiveMode === 'fpv' ? 'none' : undefined,
            touchAction: interactive ? 'none' : 'auto',
          }}
        />
        {variant !== 'ambient' && effectiveMode === 'fpv' && (
          <FPV3D
            lampsRef={lampsRef}
            trackedRef={trackedRef}
            lookaheadRef={lookaheadRef}
            baselineRef={baselineRef}
            agentsRef={agentsRef}
            pausedRef={pausedRef}
            spawnPed={() => {
              spawnRandomEdge('ped')
              const arr = agentsRef.current
              return arr[arr.length - 1] ?? null
            }}
            onBaselineChange={onBaselineChange ?? setBaselinePctLocal}
            onLookaheadChange={onLookaheadChange ?? setLookaheadSecLocal}
          />
        )}
        {variant !== 'ambient' && effectiveMode === 'compare' && (
          <div className="stage-label-row">
            <span>Always-on</span><span>LumiNation</span>
          </div>
        )}
        {variant !== 'ambient' && effectiveMode !== 'fpv' && interactive && (
          <div className="stage-hint">
            {isMobile ? (
              <>
                <button
                  className={`spawn-toggle ${spawnMode === 'ped' ? 'active' : ''}`}
                  onTouchEnd={e => { e.stopPropagation(); activeSpawnModeRef.current = 'ped'; setSpawnMode('ped') }}
                  onClick={() => { activeSpawnModeRef.current = 'ped'; setSpawnMode('ped') }}
                >🚶 Ped</button>
                <button
                  className={`spawn-toggle ${spawnMode === 'car' ? 'active' : ''}`}
                  onTouchEnd={e => { e.stopPropagation(); activeSpawnModeRef.current = 'car'; setSpawnMode('car') }}
                  onClick={() => { activeSpawnModeRef.current = 'car'; setSpawnMode('car') }}
                >🚗 Car</button>
                <span className="spawn-hint-text">tap a street to add</span>
              </>
            ) : 'click a street to add a pedestrian · shift+click for a car'}
          </div>
        )}
      </div>

      {variant !== 'ambient' && showFullSidebar && <aside className="sidebar">
        {(() => {
          const scale = lisbon ? 100_000 / Math.max(stats.lampCount, 1) : 1
          const scaledPower = stats.powerNow * scale
          const scaledFull = stats.fullPower * scale
          const scaledEur = stats.eurSaved * scale
          const scaledCo2 = stats.co2Saved * scale
          const scaledKwh = stats.kwhSaved * scale

          const fmtW = (w: number) =>
            w >= 1_000_000 ? (w / 1_000_000).toFixed(2) + ' MW'
              : w >= 1_000 ? (w / 1_000).toFixed(1) + ' kW'
                : Math.round(w) + ' W'

          const fmtEur = (e: number) =>
            e >= 1_000_000 ? '€' + (e / 1_000_000).toFixed(1) + 'M'
              : e >= 1_000 ? '€' + (e / 1_000).toFixed(0) + 'k'
                : '€' + Math.round(e).toLocaleString()

          const fmtCo2 = (kg: number) =>
            kg >= 1_000 ? (kg / 1_000).toFixed(1) + ' t CO₂/yr'
              : Math.round(kg).toLocaleString() + ' kg CO₂/yr'

          return <>
            {lisbon && (
              <div style={{ background: '#FAC77522', border: '1px solid #FAC77566', borderRadius: 8, padding: '6px 10px', marginBottom: 6, fontSize: 12, color: '#FAC775', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 15 }}>🏙</span>
                <span><strong>City scale</strong> · 100,000 lamps</span>
              </div>
            )}

            <div className="card">
              <div className="card-label">Power now</div>
              <div className="metric-row">
                <span className="metric-value">{fmtW(scaledPower)}</span>
                <span className="metric-aux">{stats.powerPct}% of always-on{lisbon ? ` (always-on = ${fmtW(scaledFull)})` : ''}</span>
              </div>
            </div>

            <div className="card">
              <div className="card-label">Agents</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginTop: 4 }}>
                <span>Pedestrians</span><span style={{ fontWeight: 500 }}>{stats.peds}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginTop: 4 }}>
                <span>Vehicles</span><span style={{ fontWeight: 500 }}>{stats.cars}</span>
              </div>
            </div>

            <div className="card chart-card" style={{ paddingBottom: 4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="card-label" style={{ marginBottom: 0 }}>Power · last 60s</div>
                <div style={{ fontSize: 10, color: 'var(--text-muted)', display: 'flex', gap: 8 }}>
                  <span style={{ color: '#FAC775' }}>— LumiNation</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>- - Always-on</span>
                </div>
              </div>
              <canvas ref={chartRef} width={220} height={64}
                style={{ width: '100%', height: 64, marginTop: 6, borderRadius: 4 }} />
            </div>

            <div className="card">
              <div className="card-label">Energy saved (session)</div>
              <div className="metric-row">
                <span className="metric-value">{scaledKwh.toFixed(lisbon ? 1 : 3)}</span>
                <span className="metric-unit">kWh</span>
              </div>
            </div>

            <div className="card">
              <div className="card-label">Projected annual savings</div>
              <div className="metric-row">
                <span className="metric-value">{fmtEur(scaledEur)}</span>
                <span className="metric-aux">{fmtCo2(scaledCo2)}</span>
              </div>
            </div>
          </>
        })()}

        <div className="card controls">
          <button
            className="controls-toggle"
            onClick={() => setControlsOpen(o => !o)}
            aria-expanded={controlsOpen}
          >
            <span className="card-label" style={{ marginBottom: 0 }}>Controls</span>
            <span className="controls-toggle-arrow">{controlsOpen ? '▲' : '▼'}</span>
          </button>
          <div className={`controls-body${controlsOpen || !isMobile ? ' controls-body--open' : ''}`}>
            <div className="card-label" style={{ marginBottom: 6 }}>Scenario</div>
            <select value={scenario} onChange={e => setScenario(e.target.value as any)}>
              <option value="manual">Manual (click to add)</option>
              <option value="quiet">Quiet residential · 3am</option>
              <option value="busy">Busy avenue · 8pm</option>
              <option value="mixed">Mixed traffic · 11pm</option>
            </select>

            <SimControls
              baselinePct={baselinePct}
              onBaselineChange={setBaselinePct}
              lookaheadSec={lookaheadSec}
              onLookaheadChange={setLookaheadSec}
            />

            <div className="button-row">
              <button onClick={() => { agentsRef.current = []; trackedRef.current = null; kwhSavedRef.current = 0; powerHistoryRef.current = []; onClear?.() }}>Clear</button>
              <button onClick={() => setPaused(p => !p)}>{paused ? 'Resume' : 'Pause'}</button>
            </div>
            <button
              onClick={() => setLisbon(l => !l)}
              style={{
                marginTop: 8, width: '100%', padding: '7px 0',
                background: lisbon ? '#FAC775' : 'transparent',
                color: lisbon ? '#0a0a12' : '#FAC775',
                border: '1px solid #FAC775',
                borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              🏙 {lisbon ? 'City scale ON · 100k lamps' : 'City scale (100,000 lamps)'}
            </button>
          </div>
        </div>
      </aside>}
    </div>
  )
}
