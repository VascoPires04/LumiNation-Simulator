// LandingSection — smooth spring-driven curtain lift.
//
// Uses useSpring(scrollY) so the curtain has physical inertia —
// elements "coast" slightly past where you stop scrolling and settle.
// Each layer moves at a different speed (parallax depth) and fades
// with an easeIn curve so opacity feels crisp, not linear.
//
// Spring config: stiffness 180, damping 42 — snappy but with presence.
// Larger Y travel than before (wordmark: –260px) so the lift reads clearly.

import { MotionValue, motion, useSpring, useTransform } from 'framer-motion'
import { cubicBezier } from 'framer-motion'

const LIFT = 600

// Easing curves for opacity: ease-in so things are crisp at full opacity
// and melt away quickly once they start fading.
const fadeEase  = cubicBezier(0.42, 0, 1, 1)   // easeIn
const liftEase  = cubicBezier(0.22, 0, 0.36, 1) // custom decel

interface Props { scrollY: MotionValue<number> }

export default function LandingCurtain({ scrollY }: Props) {
  // Spring wrapping gives the curtain physical inertia —
  // it "floats" rather than snapping exactly to scroll position.
  const spring = useSpring(scrollY, {
    stiffness: 180,
    damping:   42,
    restDelta: 0.001,
  })

  // Gradient veil — fades away cleanly in the first 70% of lift
  const veilOpacity = useTransform(spring, [0, LIFT * 0.70], [1, 0])

  // Wordmark — deepest element, travels furthest, lingers longest
  const wordmarkY       = useTransform(spring, [0, LIFT], [0, -260], { ease: liftEase })
  const wordmarkOpacity = useTransform(spring, [0, LIFT * 0.68], [1, 0], { ease: fadeEase })
  const wordmarkScale   = useTransform(spring, [0, LIFT * 0.8], [1, 0.90])

  // Slogan — mid layer, slightly less travel
  const sloganY       = useTransform(spring, [0, LIFT], [0, -200], { ease: liftEase })
  const sloganOpacity = useTransform(spring, [0, LIFT * 0.55], [1, 0], { ease: fadeEase })
  const sloganScale   = useTransform(spring, [0, LIFT * 0.65], [1, 0.93])

  // Scroll cue — closest layer, fades first
  const cueY       = useTransform(spring, [0, LIFT * 0.5], [0, -80], { ease: liftEase })
  const cueOpacity = useTransform(spring, [0, LIFT * 0.28], [1, 0], { ease: fadeEase })

  return (
    <>
      {/* Fixed gradient veil — dims canvas, fades on scroll */}
      <motion.div
        className="landing-gradient-veil"
        style={{ opacity: veilOpacity }}
        aria-hidden="true"
      />

      {/* Hero text — each element has independent parallax + opacity */}
      <div className="landing-text-layer" aria-hidden="false">
        <div className="landing-hero">

          {/* Wordmark — leads the lift, deepest parallax */}
          <motion.div
            className="landing-wordmark"
            style={{ y: wordmarkY, opacity: wordmarkOpacity, scale: wordmarkScale }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            LumiNation
          </motion.div>

          {/* Slogan line 1 */}
          <motion.p
            className="landing-line"
            style={{ y: sloganY, opacity: sloganOpacity, scale: sloganScale }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
          >
            Light that moves with you
          </motion.p>

          {/* Subtitle line */}
          <motion.p
            className="landing-subtitle"
            style={{ y: sloganY, opacity: sloganOpacity, scale: sloganScale }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
          >
            streets brighten ahead of you — and quietly dim behind
          </motion.p>


          {/* Scroll cue — fades very early so canvas reveals quickly */}
          <motion.div
            className="landing-scroll-cue"
            style={{ y: cueY, opacity: cueOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.42 }}
          >
            <span className="landing-scroll-label">scroll to explore</span>
            <div className="landing-scroll-drip" aria-hidden="true" />
          </motion.div>

        </div>
      </div>
    </>
  )
}
