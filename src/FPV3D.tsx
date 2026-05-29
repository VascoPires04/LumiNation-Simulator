import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from './hooks/useIsMobile'
import * as THREE from 'three'

// Touch-friendly slider — pointer capture, works on mobile
function TouchSlider({ min, max, step, value, onChange }: {
  min: number; max: number; step: number; value: number; onChange: (v: number) => void
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const calc = (clientX: number) => {
    const rect = trackRef.current!.getBoundingClientRect()
    const pct  = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const raw  = min + pct * (max - min)
    return Math.max(min, Math.min(max, Math.round(raw / step) * step))
  }
  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    onChange(calc(e.clientX))
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (e.buttons === 0) return
    onChange(calc(e.clientX))
  }
  const pct = (value - min) / (max - min)
  return (
    <div ref={trackRef} className="touch-slider-track"
      onPointerDown={onPointerDown} onPointerMove={onPointerMove}
      style={{ touchAction: 'none' }}>
      <div className="touch-slider-fill" style={{ width: `${pct * 100}%` }} />
      <div className="touch-slider-thumb" style={{ left: `${pct * 100}%` }} />
    </div>
  )
}

interface Agent {
  x: number; y: number; vx: number; vy: number
  type: 'ped' | 'car'; stride: number; t: number
  street: { ax: number; ay: number; bx: number; by: number; dir: 'h' | 'v' }
  color: string | null
}

interface Lamp {
  x: number; y: number; brightness: number; target: number
  streetId: number; side: string
}

interface FPV3DProps {
  lampsRef: React.MutableRefObject<Lamp[]>
  trackedRef: React.MutableRefObject<Agent | null>
  lookaheadRef: React.MutableRefObject<number>
  baselineRef: React.MutableRefObject<number>
  agentsRef: React.MutableRefObject<Agent[]>
  pausedRef: React.MutableRefObject<boolean>
  spawnPed: () => Agent | null
  onBaselineChange?: (v: number) => void
  onLookaheadChange?: (v: number) => void
}

const MAX_VISUAL_BRI = 0.68
const PED_SPEED = 1.4
const METERS_PER_PIXEL = 0.35

function seededRng(seed: number) {
  let s = ((seed + 1) * 2654435761) >>> 0 || 1
  return () => {
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5
    return (s >>> 0) / 4294967295
  }
}

function makeWindowTexture(seed: number): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 128; canvas.height = 256
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#050508'
  ctx.fillRect(0, 0, 128, 256)

  const rng = seededRng(seed)
  const cols = 4, rows = 8
  const pw = 128 / cols, ph = 256 / rows

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const lit = rng() < 0.18
      ctx.fillStyle = lit ? `rgba(250,199,117,${0.5 + rng() * 0.4})` : '#07070d'
      ctx.fillRect(c * pw + 3, r * ph + 3, pw - 6, ph - 6)
    }
  }
  return new THREE.CanvasTexture(canvas)
}

export default function FPV3D({ lampsRef, trackedRef, lookaheadRef, baselineRef, agentsRef, pausedRef, spawnPed, onBaselineChange, onLookaheadChange }: FPV3DProps) {
  const isMobile = useIsMobile()
  const containerRef = useRef<HTMLDivElement>(null)

  const [speedMult, setSpeedMult] = useState(1.0)
  const [realSpeed, setRealSpeed] = useState(1.4)
  const [corridorLength, setCorridorLength] = useState(24.0)
  const [baselineVal, setBaselineVal] = useState(() => Math.round(baselineRef.current * 100))
  const [lookaheadVal, setLookaheadVal] = useState(() => lookaheadRef.current)

  const speedMultRef = useRef(1.0)

  const handleSpeedChange = (mult: number) => {
    setSpeedMult(mult)
    speedMultRef.current = mult
  }

  // ── FPV bottom sheet (mobile) ───────────────────────────────────────────
  const sheetRef  = useRef<HTMLDivElement>(null)
  const sheetY    = useRef(0)
  const sheetIsOpen = useRef(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const PEEK = 56

  const sheetSetY = (el: HTMLDivElement, y: number, animated: boolean) => {
    sheetY.current = y
    el.style.transition = animated ? 'transform 0.38s cubic-bezier(0.32, 1.25, 0.6, 1)' : 'none'
    el.style.transform  = `translateY(${y}px)`
  }

  const sheetSnap = (open: boolean) => {
    const el = sheetRef.current; if (!el) return
    const maxY = el.offsetHeight - PEEK
    sheetSetY(el, open ? 0 : maxY, true)
    sheetIsOpen.current = open
    setSheetOpen(open)
  }

  // Start collapsed after first layout
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const el = sheetRef.current; if (!el) return
      const maxY = el.offsetHeight - PEEK
      sheetSetY(el, maxY, false)
      sheetY.current = maxY
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  const onSheetDown = (e: React.PointerEvent) => {
    const el = sheetRef.current; if (!el) return
    const startY = sheetY.current
    let lastY = e.clientY, lastT = performance.now(), vel = 0
    sheetSetY(el, startY, false)

    const onMove = (ev: PointerEvent) => {
      const now = performance.now(); const dt = now - lastT
      vel   = dt > 0 ? (ev.clientY - lastY) / dt * 1000 : vel
      lastY = ev.clientY; lastT = now
      const maxY = el.offsetHeight - PEEK
      sheetSetY(el, Math.max(0, Math.min(maxY, startY + (ev.clientY - e.clientY))), false)
    }
    const onUp = () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup',   onUp)
      const maxY  = el.offsetHeight - PEEK
      const cur   = sheetY.current
      const isOpen = sheetIsOpen.current
      const goOpen = isOpen ? (cur < maxY * 0.45 && vel < 400) : (cur < maxY * 0.55 || vel < -300)
      sheetSnap(goOpen)
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup',   onUp)
  }

  useEffect(() => {
    const container = containerRef.current!
    const W = container.clientWidth
    const H = container.clientHeight

    // On portrait screens the standard 72° vertical FOV produces a very narrow
    // horizontal FOV, cutting off buildings on both sides. This keeps horizontal
    // coverage consistent across all aspect ratios.
    function computeFOV(aspect: number): number {
      const TARGET_HFOV_RAD = 75 * Math.PI / 180  // target ≥75° horizontal
      const vFOV = 2 * Math.atan(Math.tan(TARGET_HFOV_RAD / 2) / aspect) * 180 / Math.PI
      return Math.max(72, Math.min(120, vFOV))
    }

    // ── Key Listeners for Sprinting ────────────────────────────────────────
    const keys = { Shift: false }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        keys.Shift = true
        speedMultRef.current = 3.0
        setSpeedMult(3.0)
      }
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        keys.Shift = false
        speedMultRef.current = 1.0
        setSpeedMult(1.0)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    const isMob = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || W <= 768

    // ── Scene ──────────────────────────────────────────────────────────────
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x050810)
    scene.fog = new THREE.FogExp2(0x0a1428, isMob ? 0.010 : 0.006)

    // ── Camera ─────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(computeFOV(W / H), W / H, 0.1, isMob ? 160 : 300)
    camera.position.set(0, 1.7, 0)
    camera.rotation.order = 'YXZ'  // standard FPS: yaw first, then pitch
    camera.lookAt(0, 1.7, -100)

    // ── Renderer ───────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: !isMob })
    renderer.setPixelRatio(isMob ? 1.0 : Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.shadowMap.enabled = !isMob   // shadows too heavy for mobile WebGL
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ReinhardToneMapping
    renderer.toneMappingExposure = 1.0
    container.appendChild(renderer.domElement)

    // ── Look-around (drag to rotate camera, spring back on release) ────────
    let lookYaw        = 0
    let lookPitch      = 0
    let lookDragActive = false
    let lookDragStartX = 0
    let lookDragStartY = 0
    const LOOK_SENS  = isMob ? 0.004 : 0.0025
    const PITCH_MAX  = 70 * Math.PI / 180
    const LOOK_SPRING = 0.07  // fraction per frame toward center on release

    const onLookDown = (e: PointerEvent) => {
      lookDragActive = true
      lookDragStartX = e.clientX
      lookDragStartY = e.clientY
      renderer.domElement.setPointerCapture(e.pointerId)
    }
    const onLookMove = (e: PointerEvent) => {
      if (!lookDragActive) return
      lookYaw   = -(e.clientX - lookDragStartX) * LOOK_SENS
      lookPitch = -(e.clientY - lookDragStartY) * LOOK_SENS
      lookPitch = Math.max(-PITCH_MAX, Math.min(PITCH_MAX, lookPitch))
    }
    const onLookUp = () => { lookDragActive = false }

    renderer.domElement.addEventListener('pointerdown',   onLookDown)
    renderer.domElement.addEventListener('pointermove',   onLookMove)
    renderer.domElement.addEventListener('pointerup',     onLookUp)
    renderer.domElement.addEventListener('pointercancel', onLookUp)
    renderer.domElement.style.touchAction = 'none'

    // ── Lights ─────────────────────────────────────────────────────────────
    // Hemisphere light: sky colour (cool blue-grey) from above, ground bounce
    // (warm dark) from below. This ensures building faces are always at least
    // subtly visible on all devices — real-world night streets have sky glow.
    // Mobile: boost ambient since no shadow maps to add depth contrast
    scene.add(new THREE.HemisphereLight(0x1a2540, 0x0a0906, isMob ? 1.8 : 1.2))
    scene.add(new THREE.AmbientLight(0x0a0c12, isMob ? 0.55 : 0.3))

    // ── Ground ─────────────────────────────────────────────────────────────
    const roadMat = isMob ? new THREE.MeshLambertMaterial({ color: 0x0e0e0e }) : new THREE.MeshStandardMaterial({ color: 0x0e0e0e, roughness: 0.95, metalness: 0.0 })
    const road = new THREE.Mesh(new THREE.PlaneGeometry(8, 800), roadMat)
    road.rotation.x = -Math.PI / 2
    road.position.set(0, 0, -100)
    road.receiveShadow = !isMob
    scene.add(road)

    const swMat = isMob ? new THREE.MeshLambertMaterial({ color: 0x181816 }) : new THREE.MeshStandardMaterial({ color: 0x181816, roughness: 0.92 })
    const swL = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 800), swMat)
    swL.rotation.x = -Math.PI / 2; swL.position.set(-6.25, 0.005, -100); scene.add(swL)
    const swR = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 800), swMat)
    swR.rotation.x = -Math.PI / 2; swR.position.set(6.25, 0.005, -100); scene.add(swR)

    // Curb edges
    const curbMat = isMob ? new THREE.MeshLambertMaterial({ color: 0x2a2a28 }) : new THREE.MeshStandardMaterial({ color: 0x2a2a28 })
    const curbGeo = new THREE.BoxGeometry(0.14, 0.14, 800)
    const curbL = new THREE.Mesh(curbGeo, curbMat); curbL.position.set(-4.06, 0.07, -100); scene.add(curbL)
    const curbR = new THREE.Mesh(curbGeo, curbMat); curbR.position.set(4.06, 0.07, -100); scene.add(curbR)

    // Road centre dashes — pooled, recycled
    const DASH_COUNT = isMob ? 30 : 63
    const DASH_SPACING = 8
    const dashMat = new THREE.MeshBasicMaterial({ color: 0xe8e8e8 })
    const dashGeo = new THREE.BoxGeometry(0.12, 0.01, 3.2)
    const dashes: THREE.Mesh[] = []
    for (let i = 0; i < DASH_COUNT; i++) {
      const m = new THREE.Mesh(dashGeo, dashMat)
      const dashInitZ = isMob ? (-i * DASH_SPACING) : (-i * DASH_SPACING + 200)
      m.position.set(0, 0.01, dashInitZ)
      scene.add(m); dashes.push(m)
    }

    // ── Stars ──────────────────────────────────────────────────────────────
    const starGeo = new THREE.BufferGeometry()
    const starPos: number[] = []
    const starRng = seededRng(777)
    for (let i = 0; i < (isMob ? 150 : 280); i++) {
      const theta = starRng() * Math.PI * 2
      const phi = starRng() * Math.PI * 0.48   // upper hemisphere
      const r = isMob ? 130 : 180
      starPos.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi) + 30,
        r * Math.sin(phi) * Math.sin(theta)
      )
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3))
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.4, sizeAttenuation: false, fog: false, transparent: true, opacity: 1.0 })
    scene.add(new THREE.Points(starGeo, starMat))

    // ── Building pool ──────────────────────────────────────────────────────
    const BLDG_COUNT = isMob ? 14 : 23  // per side
    const BLDG_SPACING = 22   // metres between building groups
    const BLDG_DEPTH = 14     // Z depth of each block
    const BLDG_WIDTH = 11
    const BLDG_X_L = -12.5
    const BLDG_X_R = 12.5

    interface BldgGroup { group: THREE.Group; index: number }
    const bldgsL: BldgGroup[] = []
    const bldgsR: BldgGroup[] = []

    interface AdaptiveLamp {
      point: THREE.PointLight
      bulb?: THREE.Mesh
      ledMesh?: THREE.Mesh
      pool: THREE.Mesh
      parentGroup: THREE.Group
      localZOffset: number
      maxIntensity: number
      maxPoolOpacity: number
    }
    const adaptiveLamps: AdaptiveLamp[] = []

    const trunkMat = isMob ? new THREE.MeshLambertMaterial({ color: 0x2e1d15 }) : new THREE.MeshStandardMaterial({ color: 0x2e1d15, roughness: 0.92 })
    const foliageMat = isMob ? new THREE.MeshLambertMaterial({ color: 0x1a5228 }) : new THREE.MeshStandardMaterial({ color: 0x0a2e12, roughness: 0.88 })

    const poleMat = isMob ? new THREE.MeshLambertMaterial({ color: 0x888898 }) : new THREE.MeshStandardMaterial({ color: 0x888898, roughness: 0.6 })
    const armMat = isMob ? new THREE.MeshLambertMaterial({ color: 0x777788 }) : new THREE.MeshStandardMaterial({ color: 0x777788, roughness: 0.6 })
    const fixtureMat = isMob ? new THREE.MeshLambertMaterial({ color: 0x444455 }) : new THREE.MeshStandardMaterial({ color: 0x444455, roughness: 0.5 })
    const bulbMat = isMob
      ? new THREE.MeshLambertMaterial({ emissive: new THREE.Color(0xffeebb), emissiveIntensity: 3, color: 0x111111 })
      : new THREE.MeshStandardMaterial({ emissive: new THREE.Color(0xffeebb), emissiveIntensity: 3, color: 0x111111 })

    // Soft radial gradient texture for ground pool — avoids hard circle edge
    function makeSoftPoolTexture(): THREE.CanvasTexture {
      const c = document.createElement('canvas'); c.width = 128; c.height = 128
      const cx2 = c.getContext('2d')!
      const g = cx2.createRadialGradient(64, 64, 0, 64, 64, 64)
      g.addColorStop(0,    'rgba(255, 220, 100, 0.85)')
      g.addColorStop(0.25, 'rgba(255, 200, 80,  0.45)')
      g.addColorStop(0.55, 'rgba(250, 175, 55,  0.14)')
      g.addColorStop(0.80, 'rgba(250, 155, 30,  0.04)')
      g.addColorStop(1,    'rgba(250, 140, 20,  0)')
      cx2.fillStyle = g; cx2.fillRect(0, 0, 128, 128)
      return new THREE.CanvasTexture(c)
    }
    const poolTex = makeSoftPoolTexture()

    const WALL_COLORS = [
      0xd8d2c8, // antique muted white
      0xc8c2b6, // weathered cream
      0xb0a89e, // mid-tone gray facade
      0x7a7875, // dark gray render
      0x52565c, // charcoal concrete
      0xb87858, // terracotta / warm brick
      0x6a7d6e, // sage / olive green
      0xc89c6a, // warm ochre / mustard
      0x3e5868, // deep teal / blue-gray
      0x8a6e64, // warm taupe
    ]
    const AWNING_COLORS = [0xb81820, 0x1a4aaa, 0x1a7830, 0x884400, 0x6a1a8a, 0x186878]
    const SIGN_COLORS   = [0xd02020, 0x2060cc, 0x20aa40, 0xcc8800, 0x8830cc, 0x20aacc]

    // ── NPC materials ───────────────────────────────────────────────────────
    const npcSkinMat  = isMob ? new THREE.MeshLambertMaterial({ color: 0xb07850 }) : new THREE.MeshStandardMaterial({ color: 0xb07850, roughness: 0.80 })
    const npcHairMat  = isMob ? new THREE.MeshLambertMaterial({ color: 0x1a1008 }) : new THREE.MeshStandardMaterial({ color: 0x1a1008, roughness: 0.90 })
    const npcBodyMat  = isMob ? new THREE.MeshLambertMaterial({ color: 0x2a3245 }) : new THREE.MeshStandardMaterial({ color: 0x2a3245, roughness: 0.92 })
    const npcLegMat   = isMob ? new THREE.MeshLambertMaterial({ color: 0x1e2030 }) : new THREE.MeshStandardMaterial({ color: 0x1e2030, roughness: 0.95 })
    const npcEyeMat   = new THREE.MeshBasicMaterial({ color: 0x080404 })  // always visible
    const npcDogMat   = isMob ? new THREE.MeshLambertMaterial({ color: 0x6b4c30 }) : new THREE.MeshStandardMaterial({ color: 0x6b4c30, roughness: 0.88 })

    // Adds hair + eyes + nose to a head sphere already in the group.
    // Face direction is local -Z (walker group has rotation.y=π so local -Z → world +Z = camera)
    function addFaceFeatures(g: THREE.Group, headY: number) {
      // Hair — squished sphere covering top + back of head
      const hair = new THREE.Mesh(new THREE.SphereGeometry(0.138, 7, 5), npcHairMat)
      hair.scale.y = 0.58
      hair.position.set(0, headY + 0.042, 0.01)
      g.add(hair)
      // Eyes
      const eyeGeo = new THREE.SphereGeometry(0.022, 4, 3)
      const eyeL = new THREE.Mesh(eyeGeo, npcEyeMat)
      eyeL.position.set(-0.046, headY + 0.005, -0.120)
      g.add(eyeL)
      const eyeR = new THREE.Mesh(eyeGeo, npcEyeMat)
      eyeR.position.set( 0.046, headY + 0.005, -0.120)
      g.add(eyeR)
      // Nose
      const nose = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.020, 0.030), npcSkinMat)
      nose.position.set(0, headY - 0.018, -0.128)
      g.add(nose)
    }

    function makeWalkerMesh(): { group: THREE.Group; limbs: WalkerLimbs } {
      const g = new THREE.Group()

      // Head + face
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 7, 6), npcSkinMat)
      head.position.set(0, 1.63, 0)
      g.add(head)
      addFaceFeatures(g, 1.63)

      // Torso
      const torso = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.50, 0.20), npcBodyMat)
      torso.position.set(0, 1.16, 0)
      g.add(torso)

      // Helper: make a limb pivot. pivot positioned at joint, geometry hangs downward.
      function makeLimbPivot(pivotY: number, pivotX: number, geo: THREE.BufferGeometry, mat: THREE.Material, meshOffY: number): THREE.Group {
        const pivot = new THREE.Group()
        pivot.position.set(pivotX, pivotY, 0)
        const mesh = new THREE.Mesh(geo, mat)
        mesh.position.set(0, meshOffY, 0)
        pivot.add(mesh)
        return pivot
      }

      // Legs — pivot at hip, leg box hangs down
      const legGeo = new THREE.BoxGeometry(0.14, 0.52, 0.16)
      const legL = makeLimbPivot(0.90, -0.10, legGeo, npcLegMat, -0.26)
      const legR = makeLimbPivot(0.90,  0.10, legGeo, npcLegMat, -0.26)
      g.add(legL); g.add(legR)

      // Arms — pivot at shoulder, arm box hangs down (skin-coloured hand appended)
      const upperArmGeo = new THREE.BoxGeometry(0.11, 0.26, 0.13)
      const foreArmGeo  = new THREE.BoxGeometry(0.09, 0.22, 0.11)
      function makeArm(side: number): THREE.Group {
        const shoulder = new THREE.Group()
        shoulder.position.set(side * 0.245, 1.38, 0)
        const upper = new THREE.Mesh(upperArmGeo, npcBodyMat)
        upper.position.set(0, -0.13, 0)
        shoulder.add(upper)
        const fore = new THREE.Mesh(foreArmGeo, npcSkinMat)
        fore.position.set(0, -0.35, 0)
        shoulder.add(fore)
        return shoulder
      }
      const armL = makeArm(-1)
      const armR = makeArm( 1)
      g.add(armL); g.add(armR)

      return { group: g, limbs: { armL, armR, legL, legR } }
    }


    // ── Shared window materials (reused across ALL buildings — saves 1000+ GPU state changes) ──
    const sharedLitWinMat = new THREE.MeshStandardMaterial({
      color: 0xffc56c, roughness: 0.3, metalness: 0.0,
      emissive: new THREE.Color(0xff8c1a), emissiveIntensity: 1.5,
    })
    const sharedUnlitWinMat = new THREE.MeshStandardMaterial({
      color: 0x0a0c10, roughness: 0.05, metalness: 0.9,
    })
    // Shared wing-window geometry used in park/playground/parking slots
    const sharedWingWinGeo = new THREE.PlaneGeometry(0.8, 1.2)

    function makeBuildingGroup(side: 'left' | 'right', index: number): BldgGroup {
      const rng  = seededRng(index * 73  + (side === 'left' ? 0 : 333))
      const rng2 = seededRng(index * 131 + (side === 'left' ? 0 : 700))

      const group = new THREE.Group()
      const isLeft  = side === 'left'
      const faceX   = isLeft ?  BLDG_WIDTH / 2 : -BLDG_WIDTH / 2  // local X of street face
      const outDir  = isLeft ? 1 : -1                               // +1 toward road for left bldg

      const slotTypeVal = rng()
      let slotType: 'building' | 'park' | 'playground' | 'parking' = 'building'
      if (!isMob && index > 0 && index < BLDG_COUNT - 1) {
        // Deterministically check if the previous slot (index - 1) was chosen as an interstitial
        const prevRng = seededRng((index - 1) * 73 + (side === 'left' ? 0 : 333))
        const prevSlotVal = prevRng()
        const wasPrevInterstitial = (index - 1 > 0) && (prevSlotVal < 0.30)

        if (!wasPrevInterstitial) {
          if (slotTypeVal < 0.10) {
            slotType = 'park'
          } else if (slotTypeVal < 0.22) {
            slotType = 'playground'
          } else if (slotTypeVal < 0.30) {
            slotType = 'parking'
          }
        }
      }

      if (slotType === 'building') {
        // Split the 14m slot into two sub-buildings of different height & colour
        const splitZ  = 6 + rng() * 4           // where the two buildings meet (4–10m from slot start)
        const depthA  = splitZ                   // sub-building A depth (Z)
        const depthB  = BLDG_DEPTH - splitZ      // sub-building B depth
        const hA      = 7  + rng() * 16
        const hB      = 6  + rng() * 14
        const colorA  = WALL_COLORS[Math.floor(rng() * WALL_COLORS.length)]
        const colorB  = WALL_COLORS[Math.floor(rng() * WALL_COLORS.length)]

        // Local Z centres of each sub-building (slot goes from -BLDG_DEPTH/2 to +BLDG_DEPTH/2)
        const zA = -BLDG_DEPTH / 2 + depthA / 2
        const zB =  BLDG_DEPTH / 2 - depthB / 2

        const addSubBuilding = (h: number, depth: number, color: number, localZ: number, seed: number) => {
          const wallMat = isMob ? new THREE.MeshLambertMaterial({ color }) : new THREE.MeshStandardMaterial({ color, roughness: 0.88, metalness: 0.03 })
          const geo  = new THREE.BoxGeometry(BLDG_WIDTH, h, depth)
          const mesh = new THREE.Mesh(geo, wallMat)
          mesh.castShadow = true; mesh.receiveShadow = true
          mesh.position.set(0, h / 2, localZ)
          group.add(mesh)

          // Window panes on the street-facing side
          {
            const wRng   = seededRng(seed)
            // Mobile: half the columns/rows — fewer draw calls, same look
            const cols   = Math.max(2, Math.round(depth / (isMob ? 4.5 : 2.8)))
            const rows   = Math.max(2, Math.round((h - 3.5) / (isMob ? 4.5 : 3.0)))
            const winW   = (depth / cols) * 0.52
            const winH   = ((h - 3.5) / rows) * 0.55
            const rotY   = isLeft ? Math.PI / 2 : -Math.PI / 2
            for (let c = 0; c < cols; c++) {
              for (let r = 0; r < rows; r++) {
                const lit  = wRng() < 0.18
                const win = new THREE.Mesh(new THREE.PlaneGeometry(winH, winW), lit ? sharedLitWinMat : sharedUnlitWinMat)
                win.rotation.y = rotY
                const wz = localZ - depth / 2 + (c + 0.5) * (depth / cols)
                const wy = 3.5 + (r + 0.5) * ((h - 3.5) / rows)
                win.position.set(faceX + outDir * 0.06, wy, wz)
                group.add(win)
              }
            }
          }
        }

        addSubBuilding(hA, depthA, colorA, zA, index * 17 + (side === 'left' ? 0 : 500))
        addSubBuilding(hB, depthB, colorB, zB, index * 31 + (side === 'left' ? 100 : 600))

        // ── Ground floor details ───────────────────────────────────────────
        const addDoor = (localZ: number) => {
          const doorColors = [0x2a1206, 0x0e1020, 0x0e2010, 0x1a0808]
          const doorMat = new THREE.MeshStandardMaterial({
            color: doorColors[Math.floor(rng2() * doorColors.length)], roughness: 0.85
          })
          const door = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.3, 1.1), doorMat)
          door.position.set(faceX + outDir * 0.04, 1.15, localZ)
          group.add(door)
          // door frame
          const frameMat = new THREE.MeshStandardMaterial({ color: 0x333028, roughness: 0.7 })
          const frame = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.45, 1.3), frameMat)
          frame.position.set(faceX + outDir * 0.03, 1.225, localZ)
          group.add(frame)
          // handle — small metallic sphere offset from centre
          const handleMat = new THREE.MeshStandardMaterial({ color: 0xc8a030, roughness: 0.2, metalness: 0.95 })
          const handle = new THREE.Mesh(new THREE.SphereGeometry(0.055, 7, 5), handleMat)
          handle.position.set(faceX + outDir * 0.1, 1.05, localZ + 0.28)
          group.add(handle)
        }

        if (!isMob) {
        addDoor(zA)
        addDoor(zB)
        }

        // Shopfront for sub-building A (40% chance) — skip on mobile
        const hasShop = !isMob && rng2() < 0.40
        if (hasShop) {
          const glassMat = new THREE.MeshStandardMaterial({
            color: 0x0c1520, roughness: 0.05, metalness: 0.6, transparent: true, opacity: 0.55
          })
          const shopW = depthA * 0.6
          const glass = new THREE.Mesh(new THREE.BoxGeometry(0.07, 2.5, shopW), glassMat)
          glass.position.set(faceX + outDir * 0.035, 1.25, zA)
          group.add(glass)
        }

        // Awning for sub-building B (38% chance) — skip on mobile
        const hasAwning = !isMob && rng2() < 0.38
        if (hasAwning) {
          const awningMat = new THREE.MeshStandardMaterial({
            color: AWNING_COLORS[Math.floor(rng2() * AWNING_COLORS.length)],
            roughness: 0.95, side: THREE.DoubleSide
          })
          const awningDepth = depthB * 0.65
          const awning = new THREE.Mesh(new THREE.BoxGeometry(0.07, 1.1, awningDepth), awningMat)
          awning.rotation.z = outDir * 0.38
          awning.position.set(faceX + outDir * 0.65, 3.05, zB)
          group.add(awning)
        }

        // Café tables (20% chance, only if has shopfront) — skipped on mobile via hasShop=false
        const hasCafe = hasShop && rng2() < 0.40
        if (hasCafe) {
          const fMat = new THREE.MeshStandardMaterial({ color: 0x1a1208, roughness: 0.85 })
          for (let t = 0; t < 2; t++) {
            const tz = zA + (t - 0.5) * 3.2
            // table top
            const top = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.055, 0.65), fMat)
            top.position.set(faceX + outDir * 0.45, 0.74, tz)
            group.add(top)
            // table leg
            const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.74, 5), fMat)
            leg.position.set(faceX + outDir * 0.45, 0.37, tz)
            group.add(leg)
            // two chairs
            for (const cOff of [-0.5, 0.5]) {
              const seat = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.055, 0.38), fMat)
              seat.position.set(faceX + outDir * 0.45, 0.44, tz + cOff)
              group.add(seat)
              const back = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.42, 0.055), fMat)
              back.position.set(faceX + outDir * 0.45, 0.66, tz + cOff + (cOff > 0 ? 0.16 : -0.16))
              group.add(back)
            }
          }
        }
      } else if (slotType === 'park') {
        // Grass lawn (depth 10.0 to create a tight gap, width 30.0 to prevent void)
        const grassMat = new THREE.MeshStandardMaterial({ color: 0x1a3c1e, roughness: 0.95 })
        const grassGeo = new THREE.BoxGeometry(30.0, 0.04, 10.0)
        const grass = new THREE.Mesh(grassGeo, grassMat)
        grass.position.set(outDir * -10.0, 0.02, 0)
        grass.receiveShadow = true
        group.add(grass)

        // Add building wings to squeeze the park space to a tight 10m gap
        const wingMat = new THREE.MeshStandardMaterial({ color: 0x3d3535, roughness: 0.88, metalness: 0.03 })
        const wingGeo = new THREE.BoxGeometry(30.0, 14.0, 9.8)

        // Left wing
        const wingL = new THREE.Mesh(wingGeo, wingMat)
        wingL.position.set(outDir * -10.0, 7.0, -9.9)
        wingL.castShadow = true; wingL.receiveShadow = true
        group.add(wingL)

        // Right wing
        const wingR = new THREE.Mesh(wingGeo, wingMat)
        wingR.position.set(outDir * -10.0, 7.0, 9.9)
        wingR.castShadow = true; wingR.receiveShadow = true
        group.add(wingR)

        // Add lit windows on the Z-facing facades of the wings
        // Left wing windows (at Z = -4.95, facing +Z)
        for (const wx of [outDir * -2.0, outDir * -6.0]) {
          for (const wy of [3.2, 7.2]) {
            const wMesh = new THREE.Mesh(sharedWingWinGeo, rng2() < 0.25 ? sharedLitWinMat : sharedUnlitWinMat)
            wMesh.position.set(wx, wy, -4.99)
            group.add(wMesh)
          }
        }

        // Right wing windows (at Z = 4.95, facing -Z)
        for (const wx of [outDir * -2.0, outDir * -6.0]) {
          for (const wy of [3.2, 7.2]) {
            const wMesh = new THREE.Mesh(sharedWingWinGeo, rng2() < 0.25 ? sharedLitWinMat : sharedUnlitWinMat)
            wMesh.rotation.y = Math.PI
            wMesh.position.set(wx, wy, 4.99)
            group.add(wMesh)
          }
        }

        // 1 beautiful stylized pocket park tree
        const pTree = new THREE.Group()
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 1.6, 5), trunkMat)
        trunk.position.set(0, 0.8, 0)
        trunk.castShadow = true; trunk.receiveShadow = true
        pTree.add(trunk)

        const f1 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.65, 1), foliageMat)
        f1.position.set(0, 1.9, 0)
        f1.castShadow = true; f1.receiveShadow = true
        pTree.add(f1)

        const f2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5, 1), foliageMat)
        f2.position.set(0.04, 2.35, 0)
        f2.castShadow = true; f2.receiveShadow = true
        pTree.add(f2)

        pTree.position.set(outDir * -2.5, 0, 2.0)
        group.add(pTree)

        // A cute park bench facing the street
        const bench = new THREE.Group()
        const woodMat = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 })
        const ironMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.6 })

        const seat = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.05, 1.8), woodMat)
        seat.position.set(0, 0.45, 0)
        seat.castShadow = true; seat.receiveShadow = true
        bench.add(seat)

        const back = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 1.8), woodMat)
        back.position.set(outDir * -0.28, 0.7, 0)
        back.castShadow = true; back.receiveShadow = true
        bench.add(back)

        const legGeo = new THREE.BoxGeometry(0.06, 0.45, 0.6)
        const legL = new THREE.Mesh(legGeo, ironMat)
        legL.position.set(0, 0.225, -0.8)
        legL.castShadow = true
        bench.add(legL)

        const legR = new THREE.Mesh(legGeo, ironMat)
        legR.position.set(0, 0.225, 0.8)
        legR.castShadow = true
        bench.add(legR)

        bench.position.set(outDir * 2.0, 0, -1.8)
        bench.rotation.y = isLeft ? -Math.PI / 2 : Math.PI / 2
        group.add(bench)


        // Wall-mounted cozy pocket park warm LED light
        const wallLamp = new THREE.Group()
        
        // Horizontal bracket coming out of the wall
        const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.08, 0.08), fixtureMat)
        bracket.position.set(0, 0, 0.25)
        wallLamp.add(bracket)

        const lightFixture = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.1, 0.3), fixtureMat)
        lightFixture.position.set(0, -0.05, 0.45)
        wallLamp.add(lightFixture)

        // Glowing warm LED face
        const ledFaceMat = new THREE.MeshBasicMaterial({ color: 0xffea9f, transparent: true, opacity: 1.0 })
        const ledFace = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), ledFaceMat)
        ledFace.rotation.x = Math.PI / 2
        ledFace.position.set(0, -0.11, 0.45)
        wallLamp.add(ledFace)

        const parkPointLight = new THREE.PointLight(0xffb040, 15, 12, 2)
        parkPointLight.position.set(0, -0.15, 0.45)
        wallLamp.add(parkPointLight)

        const parkPoolMat = new THREE.MeshBasicMaterial({
          map: poolTex, transparent: true, opacity: 0.7,
          depthWrite: false, blending: THREE.AdditiveBlending
        })
        const parkPool = new THREE.Mesh(new THREE.PlaneGeometry(9, 9), parkPoolMat)
        parkPool.rotation.x = -Math.PI / 2
        parkPool.position.set(0, -4.38, 0.45)
        wallLamp.add(parkPool)

        // Place the wall lamp on the left building wing facade facing +Z (at Z = -5.0)
        wallLamp.position.set(outDir * -2.0, 4.4, -4.95)
        group.add(wallLamp)

        // Register in adaptiveLamps for movement response!
        adaptiveLamps.push({
          point: parkPointLight,
          ledMesh: ledFace,
          pool: parkPool,
          parentGroup: group,
          localZOffset: -4.5,
          maxIntensity: 15,
          maxPoolOpacity: 0.7
        })
      } else if (slotType === 'playground') {
        // Grass lawn (depth 10.0 to create a tight gap, width 30.0 to prevent void)
        const grassMat = new THREE.MeshStandardMaterial({ color: 0x1f3b23, roughness: 0.95 })
        const grassGeo = new THREE.BoxGeometry(30.0, 0.04, 10.0)
        const grass = new THREE.Mesh(grassGeo, grassMat)
        grass.position.set(outDir * -10.0, 0.02, 0)
        grass.receiveShadow = true
        group.add(grass)

        // Add building wings to squeeze the playground space to a tight 10m gap
        const wingMat = new THREE.MeshStandardMaterial({ color: 0x3d3535, roughness: 0.88, metalness: 0.03 })
        const wingGeo = new THREE.BoxGeometry(30.0, 14.0, 9.8)

        // Left wing
        const wingL = new THREE.Mesh(wingGeo, wingMat)
        wingL.position.set(outDir * -10.0, 7.0, -9.9)
        wingL.castShadow = true; wingL.receiveShadow = true
        group.add(wingL)

        // Right wing
        const wingR = new THREE.Mesh(wingGeo, wingMat)
        wingR.position.set(outDir * -10.0, 7.0, 9.9)
        wingR.castShadow = true; wingR.receiveShadow = true
        group.add(wingR)

        // Add lit windows on the Z-facing facades of the wings
        // Left wing windows (at Z = -4.95, facing +Z)
        for (const wx of [outDir * -2.0, outDir * -6.0]) {
          for (const wy of [3.2, 7.2]) {
            const wMesh = new THREE.Mesh(sharedWingWinGeo, rng2() < 0.25 ? sharedLitWinMat : sharedUnlitWinMat)
            wMesh.position.set(wx, wy, -4.99)
            group.add(wMesh)
          }
        }

        // Right wing windows (at Z = 4.95, facing -Z)
        for (const wx of [outDir * -2.0, outDir * -6.0]) {
          for (const wy of [3.2, 7.2]) {
            const wMesh = new THREE.Mesh(sharedWingWinGeo, rng2() < 0.25 ? sharedLitWinMat : sharedUnlitWinMat)
            wMesh.rotation.y = Math.PI
            wMesh.position.set(wx, wy, 4.99)
            group.add(wMesh)
          }
        }

        // Horizontal fence rails at the back of playground gap (Z = -5.0 to 5.0)
        const fenceMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.5, metalness: 0.7 })
        const railLower = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 9.8), fenceMat)
        railLower.position.set(outDir * -4.8, 0.45, 0)
        railLower.castShadow = true
        group.add(railLower)

        const railUpper = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 9.8), fenceMat)
        railUpper.position.set(outDir * -4.8, 0.95, 0)
        railUpper.castShadow = true
        group.add(railUpper)

        // Vertical posts
        const postGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.2, 6)
        for (let zVal = -4.5; zVal <= 4.5; zVal += 2.25) {
          const post = new THREE.Mesh(postGeo, fenceMat)
          post.position.set(outDir * -4.8, 0.6, zVal)
          post.castShadow = true
          group.add(post)
        }

        // Sandbox ("Caixa de areia" - beautiful hollow wooden frame)
        const sandbox = new THREE.Group()
        const woodFrameMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.85 })
        const sandMat = new THREE.MeshStandardMaterial({ color: 0xddd2ab, roughness: 0.95 })
        
        // Sand
        const sand = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.1, 1.6), sandMat)
        sand.position.set(0, 0.05, 0)
        sand.receiveShadow = true
        sandbox.add(sand)

        // 4 border wooden walls
        const wallThickness = 0.1
        const wallHeight = 0.16
        const wallLength = 1.8

        const fWallGeo = new THREE.BoxGeometry(wallLength, wallHeight, wallThickness)
        const wallFront = new THREE.Mesh(fWallGeo, woodFrameMat)
        wallFront.position.set(0, wallHeight / 2, (wallLength - wallThickness) / 2)
        wallFront.castShadow = true; wallFront.receiveShadow = true
        sandbox.add(wallFront)

        const wallBack = new THREE.Mesh(fWallGeo, woodFrameMat)
        wallBack.position.set(0, wallHeight / 2, -(wallLength - wallThickness) / 2)
        wallBack.castShadow = true; wallBack.receiveShadow = true
        sandbox.add(wallBack)

        const sWallGeo = new THREE.BoxGeometry(wallThickness, wallHeight, wallLength - wallThickness * 2)
        const wallLeft = new THREE.Mesh(sWallGeo, woodFrameMat)
        wallLeft.position.set((wallLength - wallThickness) / 2, wallHeight / 2, 0)
        wallLeft.castShadow = true; wallLeft.receiveShadow = true
        sandbox.add(wallLeft)

        const wallRight = new THREE.Mesh(sWallGeo, woodFrameMat)
        wallRight.position.set(-(wallLength - wallThickness) / 2, wallHeight / 2, 0)
        wallRight.castShadow = true; wallRight.receiveShadow = true
        sandbox.add(wallRight)
        
        sandbox.position.set(outDir * -1.8, 0, 2.0)
        group.add(sandbox)

        // A cute wooden park bench for parents
        const bench = new THREE.Group()
        const woodMat = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 })
        const ironMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.6 })

        const benchSeat = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.05, 1.8), woodMat)
        benchSeat.position.set(0, 0.45, 0)
        benchSeat.castShadow = true; benchSeat.receiveShadow = true
        bench.add(benchSeat)

        const benchBack = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 1.8), woodMat)
        benchBack.position.set(outDir * -0.28, 0.7, 0)
        benchBack.castShadow = true; benchBack.receiveShadow = true
        bench.add(benchBack)

        const legGeo = new THREE.BoxGeometry(0.06, 0.45, 0.6)
        const legL = new THREE.Mesh(legGeo, ironMat)
        legL.position.set(0, 0.225, -0.8)
        legL.castShadow = true
        bench.add(legL)

        const legR = new THREE.Mesh(legGeo, ironMat)
        legR.position.set(0, 0.225, 0.8)
        legR.castShadow = true
        bench.add(legR)

        bench.position.set(outDir * 2.0, 0, -2.0)
        bench.rotation.y = isLeft ? -Math.PI / 2 : Math.PI / 2
        group.add(bench)

        // Slide ("Escorrega")
        const slideGroup = new THREE.Group()
        const playGreenMat = new THREE.MeshStandardMaterial({ color: 0x28a745, roughness: 0.8 })
        const playRedMat = new THREE.MeshStandardMaterial({ color: 0xdc3545, roughness: 0.7 })

        // Platform base
        const platform = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.0, 0.8), playGreenMat)
        platform.position.set(0, 0.5, 0)
        platform.castShadow = true; platform.receiveShadow = true
        slideGroup.add(platform)

        // Roof 4 small pillars + canopy
        const metalMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.4, metalness: 0.8 })
        for (let xOff of [-0.35, 0.35]) {
          for (let zOff of [-0.35, 0.35]) {
            const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.8, 4), metalMat)
            pillar.position.set(xOff, 1.4, zOff)
            pillar.castShadow = true
            slideGroup.add(pillar)
          }
        }
        const roof = new THREE.Mesh(new THREE.ConeGeometry(0.65, 0.4, 4), playRedMat)
        roof.rotation.y = Math.PI / 4
        roof.position.set(0, 1.9, 0)
        roof.castShadow = true
        slideGroup.add(roof)

        // Slide ramp going towards the street
        const ramp = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.06, 0.6), playRedMat)
        ramp.rotation.z = -outDir * 0.4
        ramp.position.set(outDir * 0.85, 0.5, 0)
        ramp.castShadow = true; ramp.receiveShadow = true
        slideGroup.add(ramp)

        // Step boxes behind platform
        const step1 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.3, 0.3), playGreenMat)
        step1.position.set(0, 0.15, -0.55)
        step1.castShadow = true
        slideGroup.add(step1)
        
        const step2 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.3), playGreenMat)
        step2.position.set(0, 0.3, -0.85)
        step2.castShadow = true
        slideGroup.add(step2)

        slideGroup.position.set(outDir * -2.4, 0, -2.0)
        group.add(slideGroup)

        // Swings ("Baloiços")
        const swingGroup = new THREE.Group()
        const playYellowMat = new THREE.MeshStandardMaterial({ color: 0xffc107, roughness: 0.8 })

        // A-frames support
        const leg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.0, 4), metalMat)
        leg1.rotation.z = 0.22
        leg1.position.set(-0.2, 0.95, -0.9)
        leg1.castShadow = true
        swingGroup.add(leg1)

        const leg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.0, 4), metalMat)
        leg2.rotation.z = -0.22
        leg2.position.set(0.2, 0.95, -0.9)
        leg2.castShadow = true
        swingGroup.add(leg2)

        const leg3 = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.0, 4), metalMat)
        leg3.rotation.z = 0.22
        leg3.position.set(-0.2, 0.95, 0.9)
        leg3.castShadow = true
        swingGroup.add(leg3)

        const leg4 = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.0, 4), metalMat)
        leg4.rotation.z = -0.22
        leg4.position.set(0.2, 0.95, 0.9)
        leg4.castShadow = true
        swingGroup.add(leg4)

        // Top bar
        const topBar = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 2.0), playYellowMat)
        topBar.position.set(0, 1.9, 0)
        topBar.castShadow = true
        swingGroup.add(topBar)

        // The seat
        const seatMat = new THREE.MeshStandardMaterial({ color: 0xdc3545, roughness: 0.9 })
        const seat = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.02, 0.38), seatMat)
        seat.position.set(0, 0.45, 0)
        seat.castShadow = true; seat.receiveShadow = true
        swingGroup.add(seat)

        // Thin chain cylinders
        const chainL = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 1.45, 4), metalMat)
        chainL.position.set(0, 1.175, -0.12)
        swingGroup.add(chainL)

        const chainR = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 1.45, 4), metalMat)
        chainR.position.set(0, 1.175, 0.12)
        swingGroup.add(chainR)

        swingGroup.position.set(outDir * 0.5, 0, 0.0)
        group.add(swingGroup)

        // A cute round globe lamp post for the playground
        const playLamp = new THREE.Group()
        const playPole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 3.2, 6), new THREE.MeshStandardMaterial({ color: 0x17a2b8, roughness: 0.6 }))
        playPole.position.set(0, 1.6, 0)
        playPole.castShadow = true
        playLamp.add(playPole)

        const playFixture = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), new THREE.MeshStandardMaterial({
          emissive: new THREE.Color(0xfff0b0), emissiveIntensity: 3, color: 0x222222
        }))
        playFixture.position.set(0, 3.2, 0)
        playLamp.add(playFixture)

        const playPointLight = new THREE.PointLight(0xffea9f, 10, 9, 2)
        playPointLight.position.set(0, 3.2, 0)
        playLamp.add(playPointLight)

        const playPoolMat = new THREE.MeshBasicMaterial({
          map: poolTex, transparent: true, opacity: 0.6,
          depthWrite: false, blending: THREE.AdditiveBlending
        })
        const playPool = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), playPoolMat)
        playPool.rotation.x = -Math.PI / 2
        playPool.position.set(0, 0.022, 0)
        playLamp.add(playPool)

        playLamp.position.set(outDir * -1.5, 0, 1.5)
        group.add(playLamp)

        // Register in adaptiveLamps for movement response!
        adaptiveLamps.push({
          point: playPointLight,
          bulb: playFixture,
          pool: playPool,
          parentGroup: group,
          localZOffset: 1.5,
          maxIntensity: 10,
          maxPoolOpacity: 0.6
        })

      } else if (slotType === 'parking') {
        // Asphalt driveway (depth 10.0 to create a tight gap, width 30.0 to prevent void)
        const driveMat = new THREE.MeshStandardMaterial({ color: 0x111113, roughness: 0.92 })
        const driveGeo = new THREE.BoxGeometry(30.0, 0.02, 10.0)
        const drive = new THREE.Mesh(driveGeo, driveMat)
        drive.position.set(outDir * -10.0, 0.01, 0)
        drive.receiveShadow = true
        group.add(drive)

        // Add building wings to squeeze the parking space to a tight 10m gap
        const wingMat = new THREE.MeshStandardMaterial({ color: 0x3d3535, roughness: 0.88, metalness: 0.03 })
        const wingGeo = new THREE.BoxGeometry(30.0, 14.0, 9.8)

        // Left wing
        const wingL = new THREE.Mesh(wingGeo, wingMat)
        wingL.position.set(outDir * -10.0, 7.0, -9.9)
        wingL.castShadow = true; wingL.receiveShadow = true
        group.add(wingL)

        // Right wing
        const wingR = new THREE.Mesh(wingGeo, wingMat)
        wingR.position.set(outDir * -10.0, 7.0, 9.9)
        wingR.castShadow = true; wingR.receiveShadow = true
        group.add(wingR)

        // Add lit windows on the Z-facing facades of the wings
        // Left wing windows (at Z = -4.95, facing +Z)
        for (const wx of [outDir * -2.0, outDir * -6.0]) {
          for (const wy of [3.2, 7.2]) {
            const wMesh = new THREE.Mesh(sharedWingWinGeo, rng2() < 0.25 ? sharedLitWinMat : sharedUnlitWinMat)
            wMesh.position.set(wx, wy, -4.99)
            group.add(wMesh)
          }
        }

        // Right wing windows (at Z = 4.95, facing -Z)
        for (const wx of [outDir * -2.0, outDir * -6.0]) {
          for (const wy of [3.2, 7.2]) {
            const wMesh = new THREE.Mesh(sharedWingWinGeo, rng2() < 0.25 ? sharedLitWinMat : sharedUnlitWinMat)
            wMesh.rotation.y = Math.PI
            wMesh.position.set(wx, wy, 4.99)
            group.add(wMesh)
          }
        }

        // Draw crisp white parking lines defining 3 perpendicular spots in the tight gap
        const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 })
        const lineGeo = new THREE.PlaneGeometry(6.0, 0.12)
        const zOffsets = [-4.5, -1.5, 1.5, 4.5]
        for (const zVal of zOffsets) {
          const pLine = new THREE.Mesh(lineGeo, lineMat)
          pLine.rotation.x = -Math.PI / 2
          pLine.position.set(0, 0.015, zVal)
          group.add(pLine)
        }

        // Low-poly Cars parked side-by-side (up to 3 stalls)
        const spots = [-3.0, 0.0, 3.0]
        for (let s = 0; s < spots.length; s++) {
          // 80% occupancy chance per spot so they are usually mostly full!
          if (rng2() < 0.20) continue; 

          const car = new THREE.Group()
          const carColors = [0x9c1a1c, 0x1a409c, 0x222222, 0x7a8090, 0x4a7a5c, 0xd4a373]
          const carColor = carColors[Math.floor(rng2() * carColors.length)]
          const carMat = new THREE.MeshStandardMaterial({ color: carColor, roughness: 0.2, metalness: 0.8 })
          const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 })
          const glassMat = new THREE.MeshStandardMaterial({ color: 0x101216, roughness: 0.05, metalness: 0.9 })

          const bodyGeo = new THREE.BoxGeometry(1.8, 0.6, 3.8)
          const body = new THREE.Mesh(bodyGeo, carMat)
          body.position.set(0, 0.55, 0)
          body.castShadow = true; body.receiveShadow = true
          car.add(body)

          const cabGeo = new THREE.BoxGeometry(1.6, 0.55, 2.2)
          const cab = new THREE.Mesh(cabGeo, glassMat)
          cab.position.set(0, 1.05, -0.2)
          cab.castShadow = true
          car.add(cab)

          const wheelGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.25, 8)
          const w1 = new THREE.Mesh(wheelGeo, wheelMat)
          w1.rotation.z = Math.PI / 2
          w1.position.set(-0.9, 0.28, 1.0)
          w1.castShadow = true
          car.add(w1)

          const w2 = new THREE.Mesh(wheelGeo, wheelMat)
          w2.rotation.z = Math.PI / 2
          w2.position.set(0.9, 0.28, 1.0)
          w2.castShadow = true
          car.add(w2)

          const w3 = new THREE.Mesh(wheelGeo, wheelMat)
          w3.rotation.z = Math.PI / 2
          w3.position.set(-0.9, 0.28, -1.0)
          w3.castShadow = true
          car.add(w3)

          const w4 = new THREE.Mesh(wheelGeo, wheelMat)
          w4.rotation.z = Math.PI / 2
          w4.position.set(0.9, 0.28, -1.0)
          w4.castShadow = true
          car.add(w4)

          // Headlights
          const lightGeo = new THREE.SphereGeometry(0.08, 6, 6)
          const lightMat = new THREE.MeshBasicMaterial({ color: 0xfff0b0 })
          const hlL = new THREE.Mesh(lightGeo, lightMat)
          hlL.position.set(-0.6, 0.55, 1.9)
          car.add(hlL)

          const hlR = new THREE.Mesh(lightGeo, lightMat)
          hlR.position.set(0.6, 0.55, 1.9)
          car.add(hlR)

          const baseRot = isLeft ? Math.PI / 2 : -Math.PI / 2
          // Give them small organic offsets so it looks like real people parked them
          car.rotation.y = baseRot + (rng2() * 0.10 - 0.05)
          // Parked slightly forward or backward in the spot
          const parkDepthOffset = rng2() * 0.6 - 0.3
          car.position.set(outDir * -1.0 + parkDepthOffset, 0, spots[s])
          group.add(car)
        }

        // Wall-mounted cozy alley LED light that responds to movement
        const wallLamp = new THREE.Group()
        
        // Horizontal bracket coming out of the wall
        const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.08, 0.08), fixtureMat)
        bracket.position.set(0, 0, 0.25)
        wallLamp.add(bracket)

        const lightFixture = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.1, 0.3), fixtureMat)
        lightFixture.position.set(0, -0.05, 0.45)
        wallLamp.add(lightFixture)

        // Glowing warm LED face
        const ledFaceMat = new THREE.MeshBasicMaterial({ color: 0xffea9f, transparent: true, opacity: 1.0 })
        const ledFace = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), ledFaceMat)
        ledFace.rotation.x = Math.PI / 2
        ledFace.position.set(0, -0.11, 0.45)
        wallLamp.add(ledFace)

        const alleyPointLight = new THREE.PointLight(0xffb040, 15, 12, 2)
        alleyPointLight.position.set(0, -0.15, 0.45)
        wallLamp.add(alleyPointLight)

        const alleyPoolMat = new THREE.MeshBasicMaterial({
          map: poolTex, transparent: true, opacity: 0.7,
          depthWrite: false, blending: THREE.AdditiveBlending
        })
        const alleyPool = new THREE.Mesh(new THREE.PlaneGeometry(9, 9), alleyPoolMat)
        alleyPool.rotation.x = -Math.PI / 2
        // pool center aligns with the point light source
        alleyPool.position.set(0, -4.38, 0.45)
        wallLamp.add(alleyPool)

        // Place the wall lamp on the left building wing facade facing +Z (at Z = -5.0)
        wallLamp.position.set(outDir * -2.0, 4.4, -4.95)
        group.add(wallLamp)

        // Register in adaptiveLamps for movement response!
        adaptiveLamps.push({
          point: alleyPointLight,
          ledMesh: ledFace,
          pool: alleyPool,
          parentGroup: group,
          localZOffset: -4.5,
          maxIntensity: 15,
          maxPoolOpacity: 0.7
        })
      }

      // ── Sidewalk Bollards (Pilaretes de Passeio) ───────────────────────────
      let bollardZPositions: number[] = []
      if (slotType === 'park' || slotType === 'playground') {
        bollardZPositions = [-5.5, -2.5, 0, 2.5, 5.5]
      } else if (slotType === 'parking') {
        bollardZPositions = [-5.5, 5.5]
      } else {
        // Building slots: two bollards at slot boundaries (mark the block edges)
        bollardZPositions = [-5.5, 5.5]
      }

      if (!isMob && bollardZPositions.length > 0) {
        const bollardMat = new THREE.MeshStandardMaterial({ color: 0xd0d0d0, roughness: 0.9, metalness: 0.05 })
        const bollardBaseGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.65, 8)
        const bollardCapGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.08, 8)
        const bollardDomeGeo = new THREE.SphereGeometry(0.07, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2)

        const bollardX = outDir * 8.24 // 0.2m inside the curb on the sidewalk

        for (const localZ of bollardZPositions) {
          const bollardGroup = new THREE.Group()
          
          // Base pillar
          const base = new THREE.Mesh(bollardBaseGeo, bollardMat)
          base.position.set(0, 0.325, 0)
          base.castShadow = true
          base.receiveShadow = true
          bollardGroup.add(base)

          // Subtle decorative collar ring (replicates the premium stone groove look)
          const cap = new THREE.Mesh(bollardCapGeo, bollardMat)
          cap.position.set(0, 0.68, 0)
          cap.castShadow = true
          bollardGroup.add(cap)

          const dome = new THREE.Mesh(bollardDomeGeo, bollardMat)
          dome.position.set(0, 0.72, 0)
          dome.castShadow = true
          bollardGroup.add(dome)

          bollardGroup.position.set(bollardX, 0.02, localZ)
          group.add(bollardGroup)
        }
      }

      const xPos = side === 'left' ? BLDG_X_L : BLDG_X_R
      const bldgInitZ = isMob
        ? (-index * BLDG_SPACING - BLDG_DEPTH / 2)
        : (-index * BLDG_SPACING - BLDG_DEPTH / 2 + 200)
      group.position.set(xPos, 0, bldgInitZ)
      scene.add(group)
      return { group, index }
    }

    for (let i = 0; i < BLDG_COUNT; i++) {
      bldgsL.push(makeBuildingGroup('left', i))
      bldgsR.push(makeBuildingGroup('right', i))
    }

    // ── NPC walker pool ────────────────────────────────────────────────────
    // 3 silhouettes: 2 regular walkers + 1 dog walker, coming toward camera
    // They do NOT affect lamps — purely decorative
    const NPC_WALK_SPEED = 1.1  // m/s their own walking speed (toward camera)
    interface WalkerLimbs {
      armL: THREE.Group; armR: THREE.Group
      legL: THREE.Group; legR: THREE.Group
    }
    interface NpcEntry {
      group: THREE.Group
      stridePhase: number
      isDogWalker: boolean
      walkerLimbs: WalkerLimbs | null
      dogGroup: THREE.Group | null
      dogLegs: THREE.Group[]   // [frontL, frontR, backL, backR]
      leashPosAttr: THREE.BufferAttribute | null
      dogSniffOffset: number
    }
    const npcEntries: NpcEntry[] = []
    const npcRng = seededRng(4242)

    // Place them at irregular intervals far ahead so they feel sporadic
    const npcStartZs = [-35, -145, -270]  // meters ahead of camera at start
    const npcSides   = [1, -1, 1]         // left (+) or right (-) sidewalk

    for (let i = 0; i < 3; i++) {
      const group = new THREE.Group()
      const isDogWalker = i === 1
      const sidewalkX = npcSides[i] * 5.2

      // Walker body
      const { group: walkerGroup, limbs: walkerLimbs } = makeWalkerMesh()
      group.add(walkerGroup)

      let dogGroup: THREE.Group | null = null
      let leashPosAttr: THREE.BufferAttribute | null = null

      const dogLegs: THREE.Group[] = []

      if (isDogWalker) {
        dogGroup = new THREE.Group()

        // Rounded body — sphere scaled to oval
        const dBody = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), npcDogMat)
        dBody.scale.set(1.0, 0.85, 1.45)
        dBody.position.set(0, 0.32, 0)
        dogGroup.add(dBody)

        // Head — sphere
        const dHead = new THREE.Mesh(new THREE.SphereGeometry(0.11, 7, 6), npcDogMat)
        dHead.position.set(0, 0.44, 0.24)
        dogGroup.add(dHead)

        // Snout — small squashed sphere
        const dSnout = new THREE.Mesh(new THREE.SphereGeometry(0.065, 6, 4), npcDogMat)
        dSnout.scale.set(0.9, 0.7, 0.9)
        dSnout.position.set(0, 0.40, 0.33)
        dogGroup.add(dSnout)

        // Nose — tiny dark sphere
        const npcNoseMat = new THREE.MeshStandardMaterial({ color: 0x1a0f0a, roughness: 0.6 })
        const dNose = new THREE.Mesh(new THREE.SphereGeometry(0.022, 5, 4), npcNoseMat)
        dNose.position.set(0, 0.415, 0.365)
        dogGroup.add(dNose)

        // Ears — two small flat spheres
        for (const ex of [-0.085, 0.085]) {
          const dEar = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 4), npcDogMat)
          dEar.scale.set(0.6, 1.1, 0.55)
          dEar.rotation.z = ex < 0 ? 0.4 : -0.4
          dEar.position.set(ex, 0.52, 0.21)
          dogGroup.add(dEar)
        }

        // Tail — tapered cylinder curled upward
        const dTail = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.028, 0.20, 5), npcDogMat)
        dTail.rotation.x = -1.1   // curves up and back
        dTail.position.set(0, 0.42, -0.23)
        dogGroup.add(dTail)

        // Legs — Group pivots at body attachment so rotation animates correctly
        // order: [frontL, frontR, backL, backR]  (front = positive Z in dogGroup local space)
        const legConfigs: [number, number][] = [[-0.09, 0.14], [0.09, 0.14], [-0.09, -0.14], [0.09, -0.14]]
        for (const [lx, lz] of legConfigs) {
          const pivot = new THREE.Group()
          pivot.position.set(lx, 0.28, lz)  // attachment at body underside
          const legMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.016, 0.24, 5), npcDogMat)
          legMesh.position.set(0, -0.12, 0)  // hangs downward from pivot
          pivot.add(legMesh)
          // Small paw — sphere at bottom of leg
          const paw = new THREE.Mesh(new THREE.SphereGeometry(0.030, 5, 4), npcDogMat)
          paw.scale.set(1.1, 0.6, 1.3)
          paw.position.set(0, -0.24, 0.01)
          pivot.add(paw)
          dogGroup.add(pivot)
          dogLegs.push(pivot)
        }

        // Dog ahead of walker toward camera (local -Z = world +Z because group.rotation.y=π)
        // dogGroup.rotation.y=π cancels the parent's π so dog faces same world direction as walker
        dogGroup.rotation.y = Math.PI
        dogGroup.position.set(npcSides[i] * 0.5, 0, -1.3)
        group.add(dogGroup)

        // Leash: Line from hand to dog collar — updateable each frame
        const leashPts = new Float32Array([
          npcSides[i] * 0.20, 0.90, -0.05,  // hand (near walker body)
          npcSides[i] * 0.50, 0.40, -1.30   // dog collar
        ])
        const leashGeo = new THREE.BufferGeometry()
        leashPosAttr = new THREE.BufferAttribute(leashPts, 3)
        leashGeo.setAttribute('position', leashPosAttr)
        const leash = new THREE.Line(leashGeo, new THREE.LineBasicMaterial({ color: 0x4a4040 }))
        group.add(leash)
      }

      group.position.set(sidewalkX, 0, npcStartZs[i])
      group.rotation.y = Math.PI  // face toward camera
      scene.add(group)

      npcEntries.push({
        group, isDogWalker, walkerLimbs,
        stridePhase: npcRng() * Math.PI * 2,
        dogGroup, dogLegs, leashPosAttr,
        dogSniffOffset: npcRng() * Math.PI * 2
      })
    }

    // Total Z range for recycling: distance between first and last + some buffer
    const NPC_TOTAL_RANGE = 320

    // ── Tree pool ──────────────────────────────────────────────────────────
    const TREE_COUNT = isMob ? 7 : 11   // per side
    const TREE_SPACING = 48  // metres
    interface TreeGroup {
      group: THREE.Group
      index: number
      side: 'left' | 'right'
    }
    const treeGroupsL: TreeGroup[] = []
    const treeGroupsR: TreeGroup[] = []



    function makeTreeGroup(side: 'left' | 'right', index: number): TreeGroup {
      const isLeft = side === 'left'
      const treeX = isLeft ? -5.3 : 5.3
      const group = new THREE.Group()

      // Trunk
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.11, 2.0, 5), trunkMat)
      trunk.position.set(0, 1.0, 0)
      trunk.castShadow = true; trunk.receiveShadow = true
      group.add(trunk)

      // Canopy (3 stacked spheres for a stylized low-poly look)
      const c1 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.85, 1), foliageMat)
      c1.position.set(0, 2.3, 0)
      c1.castShadow = true; c1.receiveShadow = true
      group.add(c1)

      const c2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.72, 1), foliageMat)
      c2.position.set(isLeft ? 0.05 : -0.05, 2.9, 0)
      c2.castShadow = true; c2.receiveShadow = true
      group.add(c2)

      const c3 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55, 1), foliageMat)
      c3.position.set(0, 3.4, 0)
      c3.castShadow = true; c3.receiveShadow = true
      group.add(c3)

      // Stagger: left starts at 0, right starts at TREE_SPACING/2
      const zOffset = side === 'right' ? TREE_SPACING / 2 : 0
      const treeInitZ = isMob
        ? (-index * TREE_SPACING - zOffset - 4)
        : (-index * TREE_SPACING - zOffset - 4 + 200)
      group.position.set(treeX, 0, treeInitZ)
      scene.add(group)

      return { group, index, side }
    }

    for (let i = 0; i < TREE_COUNT; i++) {
      treeGroupsL.push(makeTreeGroup('left', i))
      treeGroupsR.push(makeTreeGroup('right', i))
    }

    // ── Streetlight pool ───────────────────────────────────────────────────
    const LAMP_COUNT = isMob ? 20 : 46  // per side
    const LAMP_SPACING = 11  // metres — dense urban spacing
    const LAMP_HEIGHT = 6.0
    const LAMP_ARM = 1.4     // arm toward road

    interface LampGroup {
      group: THREE.Group
      point: THREE.PointLight
      bulb: THREE.Mesh
      pool: THREE.Mesh
      poolOuter: THREE.Mesh
      index: number
      side: 'left' | 'right'
    }
    const lampGroupsL: LampGroup[] = []
    const lampGroupsR: LampGroup[] = []



    function makeLampGroup(side: 'left' | 'right', index: number): LampGroup {
      const isLeft = side === 'left'
      const lampX = isLeft ? -4.35 : 4.35
      const armDir = isLeft ? LAMP_ARM : -LAMP_ARM
      const armEndX = lampX + armDir

      const group = new THREE.Group()

      // Pole
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.065, LAMP_HEIGHT, 6), poleMat)
      pole.position.set(lampX, LAMP_HEIGHT / 2, 0)
      pole.castShadow = true
      group.add(pole)

      // Arm
      const arm = new THREE.Mesh(new THREE.BoxGeometry(Math.abs(armDir), 0.06, 0.06), armMat)
      arm.position.set(lampX + armDir / 2, LAMP_HEIGHT + 0.05, 0)
      group.add(arm)

      // Fixture cone (inverted)
      const fixture = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.22, 8), fixtureMat)
      fixture.rotation.x = Math.PI
      fixture.position.set(armEndX, LAMP_HEIGHT - 0.1, 0)
      group.add(fixture)

      // Bulb
      const bulbClone = bulbMat.clone()
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), bulbClone)
      bulb.position.set(armEndX, LAMP_HEIGHT, 0)
      group.add(bulb)

      const point = new THREE.PointLight(0xffd060, 18, 13, 2)
      point.position.set(armEndX, LAMP_HEIGHT, 0)
      point.castShadow = true
      point.shadow.mapSize.width = 128
      point.shadow.mapSize.height = 128
      group.add(point)

      // Ground pool — two soft layers: tight bright core + wide ambient halo
      const poolMatInner = new THREE.MeshBasicMaterial({
        map: poolTex, transparent: true, opacity: 0.75,
        depthWrite: false, blending: THREE.AdditiveBlending
      })
      const pool = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), poolMatInner)
      pool.rotation.x = -Math.PI / 2
      pool.position.set(armEndX * 0.3, 0.012, 0)
      group.add(pool)

      // Wide ambient halo
      const poolMatOuter = new THREE.MeshBasicMaterial({
        map: poolTex, transparent: true, opacity: 0.28,
        depthWrite: false, blending: THREE.AdditiveBlending
      })
      const poolOuter = new THREE.Mesh(new THREE.PlaneGeometry(26, 26), poolMatOuter)
      poolOuter.rotation.x = -Math.PI / 2
      poolOuter.position.set(armEndX * 0.25, 0.011, 0)
      group.add(poolOuter)

      // Stagger: left starts at 0, right starts at LAMP_SPACING/2
      const zOffset = side === 'right' ? LAMP_SPACING / 2 : 0
      // Mobile: spread lamps ahead of camera (no +200 offset — only 10 lamps, range=110m)
      // Desktop: +200 offset so lamps span both ahead and behind at startup
      const initZ = isMob
        ? (-index * LAMP_SPACING - zOffset)
        : (-index * LAMP_SPACING - zOffset - 8 + 200)
      group.position.set(0, 0, initZ)
      scene.add(group)

      return { group, point, bulb, pool, poolOuter, index, side }
    }

    for (let i = 0; i < LAMP_COUNT; i++) {
      lampGroupsL.push(makeLampGroup('left', i))
      lampGroupsR.push(makeLampGroup('right', i))
    }

    // ── Caption ────────────────────────────────────────────────────────────
    const caption = document.createElement('div')
    caption.style.cssText = `
      position:absolute;bottom:${isMob ? '72px' : '28px'};left:0;right:0;text-align:center;
      color:rgba(255,255,255,0.45);font:12px/1 Inter,sans-serif;
      pointer-events:none;letter-spacing:0.04em;
    `
    caption.textContent = 'the corridor stays ahead — the citizen never notices'
    container.style.position = 'relative'
    container.appendChild(caption)

    // ── Resize ─────────────────────────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      const w = container.clientWidth, h = container.clientHeight
      camera.aspect = w / h
      camera.fov = computeFOV(w / h)
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    })
    ro.observe(container)

    // ── Pre-allocated loop arrays (outside animate to avoid GC pressure) ──────
    const allLampGroups = [...lampGroupsL, ...lampGroupsR]
    const allBldgs = [...bldgsL, ...bldgsR]
    const allTrees = [...treeGroupsL, ...treeGroupsR]
    const totalLampRange = LAMP_COUNT * LAMP_SPACING
    const totalBldgRange = BLDG_COUNT * BLDG_SPACING
    const totalTreeRange = TREE_COUNT * TREE_SPACING

    // ── Animation loop ─────────────────────────────────────────────────────
    let rafId = 0
    let lastT = performance.now()
    let scrollZ = 0
    let currentSpeedMult = 1.0
    // corridorSpeedMult lags behind currentSpeedMult — the system only widens
    // the corridor after it has observed the pedestrian moving faster for a while
    let corridorSpeedMult = 1.0
    let lastStateRealSpeed = 1.4
    let lastStateCorridor = 24.0

    function animate() {
      rafId = requestAnimationFrame(animate)
      const now = performance.now()
      const dt = Math.min((now - lastT) / 1000, 0.05)
      lastT = now

      // Ensure tracked pedestrian exists
      if (!trackedRef.current) {
        trackedRef.current = agentsRef.current.find(a => a.type === 'ped') || spawnPed()
      }
      const agent = trackedRef.current

      // Read target speed mult from ref or keyboard listeners
      let targetSpeedMult = speedMultRef.current
      if (keys.Shift) {
        targetSpeedMult = 3.0
      }

      // Smoothly interpolate speed multiplier
      currentSpeedMult += (targetSpeedMult - currentSpeedMult) * 0.08

      // Write back to tracked pedestrian velocity in 2D so they speed up on the 2D map in sync!
      if (agent) {
        const dirX = agent.vx === 0 ? 0 : Math.sign(agent.vx)
        const dirY = agent.vy === 0 ? 0 : Math.sign(agent.vy)
        agent.vx = dirX * PED_SPEED * currentSpeedMult
        agent.vy = dirY * PED_SPEED * currentSpeedMult
      }

      const speed = agent ? Math.max(0.1, Math.hypot(agent.vx, agent.vy)) : PED_SPEED
      const sp = speed / METERS_PER_PIXEL  // px/s → m/s
      const realSpeed = sp * METERS_PER_PIXEL  // back to m/s
      const stride = (agent?.stride ?? 0) * (currentSpeedMult > 1.2 ? 1.4 : 1.0) // speed up head-bob bobbing when running

      // Advance world scroll (camera stays at 0; objects move toward +Z)
      if (!pausedRef.current) {
        scrollZ += realSpeed * dt
      }

      // Head-bob
      camera.position.y = 1.7 + Math.sin(stride) * 0.04
      camera.position.x = Math.sin(stride * 0.5) * 0.012

      // ── Corridor brightness per lamp ──────────────────────────────────
      // corridorSpeedMult follows currentSpeedMult slowly — the system only
      // widens the corridor after observing sustained higher speed (reactive, not instant)
      corridorSpeedMult += (currentSpeedMult - corridorSpeedMult) * 0.012

      const baseLookahead = Math.max(10, lookaheadRef.current * 8)
      const lookaheadDist = baseLookahead * corridorSpeedMult
      const fadeLen = 10
      const baseBri = baselineRef.current * MAX_VISUAL_BRI

      // Sync variables to React state for real-time stats overlay
      if (Math.abs(realSpeed - lastStateRealSpeed) > 0.05) {
        setRealSpeed(realSpeed)
        lastStateRealSpeed = realSpeed
      }
      if (Math.abs(lookaheadDist - lastStateCorridor) > 0.5) {
        setCorridorLength(lookaheadDist)
        lastStateCorridor = lookaheadDist
      }

      function getBri(zWorld: number): number {
        // zWorld is distance ahead of camera (positive = in front)
        if (zWorld <= 0) {
          // Behind camera: fade based on distance behind (21.6 meters)
          const distBehind = Math.abs(zWorld)
          if (distBehind <= 12) return MAX_VISUAL_BRI // fully lit for 12m behind
          const fadePast = distBehind - 12
          const t = Math.min(1, fadePast / 10) // fade out over 10m
          return MAX_VISUAL_BRI * (1 - t) + baseBri * t
        }
        if (zWorld <= lookaheadDist) return MAX_VISUAL_BRI
        const distPast = zWorld - lookaheadDist
        const t = Math.min(1, distPast / fadeLen)
        return MAX_VISUAL_BRI * (1 - t) + baseBri * t
      }

      // ── Recycle & update lamps ────────────────────────────────────────
      for (const lg of allLampGroups) {
        // Move group with world scroll
        if (!pausedRef.current) lg.group.position.z += realSpeed * dt

        // Recycle: wrap lamps that have scrolled past camera back to far ahead
        // Mobile threshold is smaller (pool spans only 110m vs 506m desktop)
        const recycleThreshold = isMob ? totalLampRange * 0.4 : 240
        if (lg.group.position.z > recycleThreshold) {
          lg.group.position.z -= totalLampRange
        }

        // Distance ahead of camera (camera is at z=0, looking forward)
        const distAhead = -lg.group.position.z
        const bri = getBri(distAhead)

        // Apply brightness
        lg.point.intensity = bri * 16
        ;(lg.bulb.material as THREE.MeshStandardMaterial).emissiveIntensity = bri * 4.5
        ;(lg.pool.material as THREE.MeshBasicMaterial).opacity = bri * 0.70
        ;(lg.poolOuter.material as THREE.MeshBasicMaterial).opacity = bri * 0.25

        // Only cast shadows for the 1-2 closest lamps per side
        lg.point.castShadow = distAhead < 14 && distAhead > -2
      }

      // ── Recycle & update buildings ────────────────────────────────────
      const bldgRecycle = isMob ? totalBldgRange * 0.4 : 240
      for (const bg of allBldgs) {
        if (!pausedRef.current) bg.group.position.z += realSpeed * dt
        if (bg.group.position.z > bldgRecycle) {
          bg.group.position.z -= totalBldgRange
        }
      }

      // ── Update adaptive interstitial lamps ────────────────────────────
      for (const al of adaptiveLamps) {
        const worldZ = al.parentGroup.position.z + al.localZOffset
        const distAhead = -worldZ
        const bri = getBri(distAhead)

        // Apply dynamic brightness
        al.point.intensity = bri * al.maxIntensity
        if (al.bulb) {
          (al.bulb.material as THREE.MeshStandardMaterial).emissiveIntensity = bri * 4.5
        }
        if (al.ledMesh) {
          (al.ledMesh.material as THREE.MeshBasicMaterial).opacity = 0.3 + bri * 0.7
        }
        (al.pool.material as THREE.MeshBasicMaterial).opacity = bri * al.maxPoolOpacity
      }

      // ── Recycle & update trees ────────────────────────────────────────
      const treeRecycle = isMob ? totalTreeRange * 0.4 : 240
      for (const tg of allTrees) {
        if (!pausedRef.current) tg.group.position.z += realSpeed * dt
        if (tg.group.position.z > treeRecycle) {
          tg.group.position.z -= totalTreeRange
        }
      }

      // ── Update NPC walkers ────────────────────────────────────────────
      for (const npc of npcEntries) {
        if (!pausedRef.current) {
          // Move toward camera: scene scroll + their own walking speed
          npc.group.position.z += (realSpeed + NPC_WALK_SPEED) * dt
          npc.stridePhase += NPC_WALK_SPEED / 0.75 * dt
          npc.dogSniffOffset += 2.1 * dt
        }
        // Recycle when they pass the camera
        if (npc.group.position.z > 6) npc.group.position.z -= NPC_TOTAL_RANGE

        // Subtle head bob
        npc.group.position.y = Math.sin(npc.stridePhase * Math.PI * 2) * 0.022

        // Human gait: left arm + right leg swing forward together, right arm + left leg oppose
        if (npc.walkerLimbs) {
          const gait = npc.stridePhase * Math.PI * 2
          const legAmp = 0.52   // radians — leg swing
          const armAmp = 0.38   // radians — arm swing (less than legs, as in real walking)
          npc.walkerLimbs.legL.rotation.x =  Math.sin(gait) * legAmp
          npc.walkerLimbs.legR.rotation.x = -Math.sin(gait) * legAmp
          npc.walkerLimbs.armL.rotation.x = -Math.sin(gait) * armAmp  // opposite to legL
          npc.walkerLimbs.armR.rotation.x =  Math.sin(gait) * armAmp  // opposite to legR
        }

        // Dog sniff + leg animation
        if (npc.dogGroup && npc.leashPosAttr) {
          const sniffZ = Math.sin(npc.dogSniffOffset * 1.3) * 0.12
          const sniffY = Math.abs(Math.sin(npc.dogSniffOffset * 1.8)) * 0.06
          npc.dogGroup.position.z = -1.3 + sniffZ
          npc.dogGroup.position.y = sniffY
          // Animate legs: front pair and back pair alternate (trot gait)
          // dogLegs order: [frontL, frontR, backL, backR]
          if (npc.dogLegs.length === 4) {
            const gait = npc.stridePhase * Math.PI * 2
            const amp = 0.45  // radians of leg swing
            npc.dogLegs[0].rotation.x =  Math.sin(gait) * amp         // frontL
            npc.dogLegs[1].rotation.x = -Math.sin(gait) * amp         // frontR (opposite)
            npc.dogLegs[2].rotation.x = -Math.sin(gait) * amp         // backL (opposes frontL)
            npc.dogLegs[3].rotation.x =  Math.sin(gait) * amp         // backR
          }
          // Update leash end point (index 1) to follow dog collar
          const side = npc.group.position.x < 0 ? -1 : 1
          npc.leashPosAttr.setXYZ(1, side * 0.50, 0.40 + sniffY, -1.3 + sniffZ)
          npc.leashPosAttr.needsUpdate = true
        }
      }

      // ── Recycle centre dashes ─────────────────────────────────────────
      for (const d of dashes) {
        if (!pausedRef.current) d.position.z += realSpeed * dt
        const dashRange = DASH_COUNT * DASH_SPACING
        if (d.position.z > (isMob ? dashRange * 0.4 : 240)) d.position.z -= dashRange
      }

      // ── Stars react to baseline brightness ────────────────────────────────
      // Below 60%: fully visible. 60→90%: fade out. Above 90%: gone.
      // Below 50%: sky gets denser (larger points = more prominent stars).
      const bri = baselineRef.current
      const newStarOpacity = bri <= 0.6 ? 1.0 : Math.max(0, 1 - (bri - 0.6) / 0.35)
      const newStarSize    = bri <= 0.5 ? 1.4 + (0.5 - bri) * 1.2 : 1.4
      if (starMat.opacity !== newStarOpacity) { starMat.opacity = newStarOpacity; starMat.needsUpdate = true }
      if (starMat.size    !== newStarSize)    { starMat.size    = newStarSize;    starMat.needsUpdate = true }

      // ── Look-around: apply rotation + spring back to center on release ───
      if (!lookDragActive) {
        lookYaw   *= 1 - LOOK_SPRING
        lookPitch *= 1 - LOOK_SPRING
      }
      camera.rotation.y = lookYaw
      camera.rotation.x = lookPitch

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      renderer.domElement.removeEventListener('pointerdown',   onLookDown)
      renderer.domElement.removeEventListener('pointermove',   onLookMove)
      renderer.domElement.removeEventListener('pointerup',     onLookUp)
      renderer.domElement.removeEventListener('pointercancel', onLookUp)
      ro.disconnect()
      renderer.dispose()
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      if (container.contains(caption)) container.removeChild(caption)
    }
  }, [])

  return (
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <div
        ref={containerRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />

      {/* Floating Glassmorphic UI Panel */}
      <div ref={isMobile ? sheetRef : undefined} className="fpv-overlay">
        {/* Drag handle — mobile only */}
        {isMobile && (
          <div
            className={`fpv-sheet-handle-row${!sheetOpen ? ' fpv-sheet-handle-row--nudge' : ''}`}
            onPointerDown={onSheetDown}
            onClick={() => sheetSnap(!sheetOpen)}
            style={{ touchAction: 'none' }}
          >
            <div className="fpv-sheet-handle" />
          </div>
        )}
        {/* Left Side: Citizen Dashboard */}
        <div className="fpv-card fpv-card--dashboard">
          <div className="fpv-card-title">🏃 Citizen Dashboard</div>
          
          <div className="fpv-stat-row">
            <span className="fpv-stat-label">Velocity</span>
            <span className="fpv-stat-value">
              {realSpeed.toFixed(1)} m/s ({Math.round(realSpeed * 3.6)} km/h)
            </span>
          </div>

          <div className="fpv-stat-row">
            <span className="fpv-stat-label">Lookahead Corridor</span>
            <span className="fpv-stat-value">{corridorLength.toFixed(0)} meters</span>
          </div>

          <div className="fpv-stat-row">
            <span className="fpv-stat-label">Light Frequency</span>
            <span className="fpv-stat-value" style={{ color: speedMult > 1.5 ? '#f59e0b' : '#3b82f6' }}>
              {speedMult > 1.5 ? '⚡ HIGH (Running Mode)' : '🚶 NORMAL (Walking Mode)'}
            </span>
          </div>
        </div>

        {/* Right Side: Speed Controls + sliders */}
        <div className="fpv-card" style={isMobile ? undefined : { minWidth: '300px' }}>
          <div className="fpv-card-title">⚙️ Citizen Controls</div>

          <div className="fpv-button-group">
            <button
              className={`fpv-btn ${speedMult === 1.0 ? 'active' : ''}`}
              onClick={() => handleSpeedChange(1.0)}
            >
              🚶 Walk (1.0x)
            </button>
            <button
              className={`fpv-btn ${speedMult === 2.0 ? 'active' : ''}`}
              onClick={() => handleSpeedChange(2.0)}
            >
              🏃 Jog (2.0x)
            </button>
            <button
              className={`fpv-btn ${speedMult === 3.0 ? 'active' : ''}`}
              onClick={() => handleSpeedChange(3.0)}
            >
              ⚡ Sprint (3.0x)
            </button>
          </div>

          {!isMobile && (
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginTop: 4 }}>
              Pro Tip: Hold <b>SHIFT</b> to sprint on keyboard!
            </div>
          )}

          {onBaselineChange && (
            <div style={{ marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', color: 'rgba(255,255,255,0.65)', marginBottom: 4 }}>
                <span>Baseline brightness</span>
                <span style={{ color: '#FAC775' }}>{baselineVal}%</span>
              </div>
              <TouchSlider min={0} max={100} step={1} value={baselineVal}
                onChange={v => { setBaselineVal(v); onBaselineChange(v / 100) }}
              />
            </div>
          )}

          {onLookaheadChange && (
            <div style={{ marginTop: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', color: 'rgba(255,255,255,0.65)', marginBottom: 4 }}>
                <span>Lookahead</span>
                <span style={{ color: '#FAC775' }}>{lookaheadVal.toFixed(1)}s</span>
              </div>
              <TouchSlider min={0.5} max={8} step={0.5} value={lookaheadVal}
                onChange={v => { setLookaheadVal(v); onLookaheadChange(v) }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
