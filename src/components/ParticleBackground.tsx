// ParticleBackground — calm Canvas 2D amber particle scene for the dashboard.
// NOT the city simulator. Runs at 30fps (20fps mobile).
// ~80 particles desktop, ~30 mobile.

import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  r: number           // dot radius 2-4px
  alpha: number       // current opacity
  baseAlpha: number   // resting opacity
  pulse: boolean      // whether this particle gently pulses
  pulsePhase: number  // 0-2π
  pulseSpeed: number  // rad/s
}

interface Props {
  visible: boolean
  isMobile: boolean
}

const AMBER = { r: 250, g: 199, b: 117 }

export default function ParticleBackground({ visible, isMobile }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef  = useRef<{ particles: Particle[]; raf: number }>({ particles: [], raf: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const COUNT    = isMobile ? 30 : 80
    const FPS      = isMobile ? 20 : 30
    const INTERVAL = 1000 / FPS
    const MAX_DIST = 80   // connection line max distance
    const SPEED    = 8    // px/s

    let W = 0, H = 0
    let lastFrame = 0

    function resize() {
      if (!canvas) return
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    function rand(min: number, max: number) { return min + Math.random() * (max - min) }

    function makeParticle(): Particle {
      const isPulse = Math.random() < 0.13
      return {
        x: rand(0, W), y: rand(0, H),
        vx: rand(-SPEED, SPEED), vy: rand(-SPEED * 1.3, -SPEED * 0.3), // slight upward bias
        r:  rand(2, 4),
        alpha: rand(0.3, 0.7),
        baseAlpha: rand(0.3, 0.7),
        pulse: isPulse,
        pulsePhase: rand(0, Math.PI * 2),
        pulseSpeed: rand(0.4, 0.9),
      }
    }

    stateRef.current.particles = Array.from({ length: COUNT }, makeParticle)

    function draw(now: number) {
      stateRef.current.raf = requestAnimationFrame(draw)
      if (now - lastFrame < INTERVAL) return
      const dt = Math.min(0.1, (now - lastFrame) / 1000)
      lastFrame = now

      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, W, H)

      const pts = stateRef.current.particles
      const useLines = !isMobile

      // Connection lines first (under dots)
      if (useLines) {
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const dx = pts[i].x - pts[j].x
            const dy = pts[i].y - pts[j].y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < MAX_DIST) {
              const lineAlpha = 0.08 * (1 - dist / MAX_DIST)
              ctx.beginPath()
              ctx.moveTo(pts[i].x, pts[i].y)
              ctx.lineTo(pts[j].x, pts[j].y)
              ctx.strokeStyle = `rgba(${AMBER.r},${AMBER.g},${AMBER.b},${lineAlpha})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        }
      }

      // Update + draw particles
      for (const p of pts) {
        // Physics
        p.x += p.vx * dt
        p.y += p.vy * dt

        // Wrap edges
        if (p.x < -10) p.x = W + 10
        if (p.x > W + 10) p.x = -10
        if (p.y < -10) p.y = H + 10
        if (p.y > H + 10) p.y = -10

        // Pulse alpha
        if (p.pulse) {
          p.pulsePhase += p.pulseSpeed * dt
          p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.2
        }

        // Glow halo
        const haloR = p.r * 7
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloR)
        grad.addColorStop(0, `rgba(${AMBER.r},${AMBER.g},${AMBER.b},${p.alpha * 0.35})`)
        grad.addColorStop(1, `rgba(${AMBER.r},${AMBER.g},${AMBER.b},0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, haloR, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        // Dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${AMBER.r},${AMBER.g},${AMBER.b},${p.alpha})`
        ctx.fill()
      }
    }

    stateRef.current.raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(stateRef.current.raf)
      ro.disconnect()
    }
  }, [isMobile])

  return (
    <canvas
      ref={canvasRef}
      className="particle-bg"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  )
}
