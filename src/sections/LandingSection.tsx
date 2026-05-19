// LandingSection — Phase 2 revision: pure curtain overlay, NO canvas.
//
// Architecture: the persistent canvas lives in App.tsx (position: fixed, z-index: 0).
// This file renders only the fixed overlay elements that lift away as the user scrolls.
//
// Stagger timings (committed):
//   wordmark entrance:  0ms
//   line 1 (slogan):   0ms
//   line 2 (slogan):  150ms
//   scroll cue:        400ms
//
// Effects implemented:
//   A. Curtain lift — text translates up + fades, gradient veil fades
//   D. Wordmark glow breathing — CSS animation while at rest
//   F. Scroll cue drip — CSS animation (amber line drips downward)
//
// prefers-reduced-motion: Framer Motion respects it via MotionConfig in App.
// CSS animations disabled via @media (prefers-reduced-motion: reduce) in styles.css.

import { motion, useScroll, useTransform } from 'framer-motion'

// Full curtain lift completes over this many pixels of scroll
const LIFT = 600

export default function LandingCurtain() {
  const { scrollY } = useScroll()

  // ── Gradient veil — darkens canvas at rest, fades as curtain lifts ──────
  const veilOpacity = useTransform(scrollY, [0, LIFT * 0.85], [1, 0])

  // ── Text layer — whole block fades out ───────────────────────────────────
  const textLayerOpacity = useTransform(scrollY, [0, LIFT * 0.65], [1, 0])

  // ── Wordmark — lifts up, scales down, subtle rotateX perspective tilt ───
  const wordmarkY        = useTransform(scrollY, [0, LIFT], [0, -90])
  const wordmarkScale    = useTransform(scrollY, [0, LIFT], [1, 0.85])
  const wordmarkRotateX  = useTransform(scrollY, [0, LIFT], [0, -8])

  // ── Slogan — lags 15% behind wordmark (softer parallax) ─────────────────
  const sloganY = useTransform(scrollY, [0, LIFT], [0, -55])

  // ── Scroll cue — fades out first, before the rest ────────────────────────
  const cueFade = useTransform(scrollY, [0, LIFT * 0.28], [1, 0])

  return (
    <>
      {/* Fixed gradient veil — dims the canvas in landing state */}
      <motion.div
        className="landing-gradient-veil"
        style={{ opacity: veilOpacity }}
        aria-hidden="true"
      />

      {/* Fixed text layer — entire block fades + individual elements lift */}
      <motion.div
        className="landing-text-layer"
        style={{ opacity: textLayerOpacity }}
        aria-hidden="false"
      >
        <div className="landing-hero">

          {/* Giant wordmark — parallax lift with perspective tilt */}
          <motion.div
            className="landing-wordmark"
            style={{
              y: wordmarkY,
              scale: wordmarkScale,
              rotateX: wordmarkRotateX,
              transformPerspective: 900,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            LumiNation
          </motion.div>

          {/* Slogan line 1 — 0ms, lifts with lag */}
          <motion.p
            className="landing-line"
            style={{ y: sloganY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0 }}
          >
            We are not turning the lights off,
          </motion.p>

          {/* Slogan line 2 — 150ms, same lift */}
          <motion.p
            className="landing-line landing-line-em"
            style={{ y: sloganY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            we are turning them on <em>intelligently.</em>
          </motion.p>

          {/* Scroll cue — 400ms, fades out earlier than the rest */}
          <motion.div style={{ opacity: cueFade }}>
            <motion.div
              className="landing-scroll-cue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              <span className="landing-scroll-label">scroll to explore</span>
              {/* Drip line (Effect F) — CSS animation in styles.css */}
              <div className="landing-scroll-drip" aria-hidden="true" />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </>
  )
}
