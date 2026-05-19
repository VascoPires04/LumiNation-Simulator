// LandingSection — Phase 2 rev2: pure translateY + opacity curtain.
//
// No rotateX. No scale. No perspective. Pure 2D veil being pulled upward.
//
// Stagger timings (committed):
//   wordmark entrance:  0ms delay
//   line 1 (slogan):   0ms delay
//   line 2 (slogan):  150ms delay
//   scroll cue:        400ms delay
//
// Scroll-driven curtain lift over LIFT=600px:
//   wordmark:   translateY 0 → -180px, opacity 1 → 0
//   slogan:     translateY 0 → -160px, opacity 1 → 0
//   scroll cue: translateY 0 → -140px, opacity 1 → 0 (faster: done at 60% of LIFT)
//   dim veil:   opacity 1 → 0 over 80% of LIFT
//
// prefers-reduced-motion: MotionConfig in App handles all FM animations.
// CSS animations (.wordmark-breathe, .drip-drop) overridden in styles.css.

import { motion, useScroll, useTransform } from 'framer-motion'

const LIFT = 600

export default function LandingCurtain() {
  const { scrollY } = useScroll()

  // Gradient veil fades over 80% of LIFT
  const veilOpacity = useTransform(scrollY, [0, LIFT * 0.80], [1, 0])

  // Wordmark: leads the lift
  const wordmarkY       = useTransform(scrollY, [0, LIFT], [0, -180])
  const wordmarkOpacity = useTransform(scrollY, [0, LIFT * 0.75], [1, 0])

  // Slogan: 10px behind the wordmark
  const sloganY       = useTransform(scrollY, [0, LIFT], [0, -160])
  const sloganOpacity = useTransform(scrollY, [0, LIFT * 0.70], [1, 0])

  // Scroll cue: last element, fades first (gone at 60% of LIFT)
  const cueY       = useTransform(scrollY, [0, LIFT], [0, -140])
  const cueOpacity = useTransform(scrollY, [0, LIFT * 0.40], [1, 0])

  return (
    <>
      {/* Fixed gradient veil — dims canvas at landing state, fades on scroll */}
      <motion.div
        className="landing-gradient-veil"
        style={{ opacity: veilOpacity }}
        aria-hidden="true"
      />

      {/* Hero text — each element has independent translateY + opacity */}
      <div className="landing-text-layer" aria-hidden="false">
        <div className="landing-hero">

          {/* Wordmark — leads the lift */}
          <motion.div
            className="landing-wordmark"
            style={{ y: wordmarkY, opacity: wordmarkOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            LumiNation
          </motion.div>

          {/* Slogan line 1 — 0ms entrance, lifts 10px behind wordmark */}
          <motion.p
            className="landing-line"
            style={{ y: sloganY, opacity: sloganOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0 }}
          >
            We are not turning the lights off,
          </motion.p>

          {/* Slogan line 2 — 150ms entrance, same lift as line 1 */}
          <motion.p
            className="landing-line landing-line-em"
            style={{ y: sloganY, opacity: sloganOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            we are turning them on <em>intelligently.</em>
          </motion.p>

          {/* Scroll cue — 400ms entrance, fades first (gone at 40% of LIFT) */}
          <motion.div
            className="landing-scroll-cue"
            style={{ y: cueY, opacity: cueOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <span className="landing-scroll-label">scroll to explore</span>
            {/* Drip line (Effect F) — CSS animation in styles.css */}
            <div className="landing-scroll-drip" aria-hidden="true" />
          </motion.div>

        </div>
      </div>
    </>
  )
}
