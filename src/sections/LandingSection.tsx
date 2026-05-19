// LandingSection — Phase 2: full-viewport hero with ambient city background.
//
// Stagger timings (committed values):
//   line 1 (first headline):  0ms delay
//   line 2 (second headline): 150ms delay
//   scroll cue:               400ms delay
//
// Wordmark → topbar transition: giant wordmark fades out on scroll (no morphing).
// Gradient overlay: pure CSS ::after on .landing-canvas-wrap (never painted in canvas).

import { motion, useScroll, useTransform } from 'framer-motion'
import CitySimulator from '../CitySimulator'

export default function LandingSection() {
  const { scrollY } = useScroll()

  // Wordmark + scroll cue fade out as user scrolls
  const heroOpacity = useTransform(scrollY, [0, 280], [1, 0])
  const heroY       = useTransform(scrollY, [0, 280], [0, -32])

  return (
    <section className="landing-section">
      {/* Ambient city canvas — fills the section, CSS gradient overlay via ::after */}
      <div className="landing-canvas-wrap">
        <CitySimulator
          mode="lumination"
          variant="ambient"
          autoplay="sparse"
          dimmed
          interactive={false}
        />
      </div>

      {/* Hero content — layered above canvas */}
      <div className="landing-hero">
        {/* Giant wordmark — fades out on scroll, no initial animation */}
        <motion.div
          className="landing-wordmark"
          style={{ opacity: heroOpacity, y: heroY }}
          aria-hidden="true"
        >
          LumiNation
        </motion.div>

        {/* Slogan line 1 — 0ms */}
        <motion.p
          className="landing-line"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0 }}
        >
          We are not turning the lights off,
        </motion.p>

        {/* Slogan line 2 — 150ms */}
        <motion.p
          className="landing-line landing-line-em"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          we are turning them on <em>intelligently.</em>
        </motion.p>

        {/* Scroll cue — 400ms, then fades with the hero on scroll */}
        <motion.div
          className="landing-scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          <motion.div style={{ opacity: heroOpacity }}>
            <span className="landing-scroll-label">scroll to explore</span>
            <svg
              className="landing-scroll-arrow"
              width="16" height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path d="M8 2v12M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
