// MobileBottomSheet — iOS-style draggable bottom sheet for mobile controls.
//
// Two snap states:
//   collapsed  — translateY(HIDE_OFFSET): only handle + mode indicator visible (~64px)
//   expanded   — translateY(0):           full controls visible (~290px)
//
// Drag is initiated via useDragControls on the handle row only, so sliders
// inside the sheet don't conflict with the drag gesture.

import { useRef, useState } from 'react'
import {
  animate,
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
} from 'framer-motion'

const EXPANDED_H  = 290
const COLLAPSED_H = 64
const HIDE_OFFSET = EXPANDED_H - COLLAPSED_H // 226px — translateY when collapsed

type Mode = 'lumination' | 'baseline' | 'compare' | 'fpv'

const MODE_LABELS: Record<string, string> = {
  lumination: 'LumiNation',
  baseline:   'Always-on',
  compare:    'Compare',
}

interface Props {
  mode: Mode
  setMode: (m: Mode) => void
  baselinePct: number
  setBaselinePct: (v: number) => void
  lookaheadSec: number
  setLookaheadSec: (v: number) => void
  scrollRef: React.RefObject<HTMLDivElement>
}

export default function MobileBottomSheet({
  mode, setMode,
  baselinePct, setBaselinePct,
  lookaheadSec, setLookaheadSec,
  scrollRef,
}: Props) {
  const dragControls = useDragControls()
  const y = useMotionValue(HIDE_OFFSET) // starts collapsed
  const [expanded, setExpanded] = useState(false)

  // Fade expanded content in/out as sheet opens/closes
  const expandedOpacity  = useTransform(y, [0, HIDE_OFFSET * 0.45], [1, 0])
  const collapsedOpacity = useTransform(y, [HIDE_OFFSET * 0.55, HIDE_OFFSET], [0, 1])

  const springCfg = { type: 'spring' as const, stiffness: 400, damping: 38 }

  const expand = () => {
    animate(y, 0, springCfg)
    setExpanded(true)
  }
  const collapse = () => {
    animate(y, HIDE_OFFSET, springCfg)
    setExpanded(false)
  }
  const toggle = () => (expanded ? collapse() : expand())

  const handleDragEnd = (_: unknown, info: { velocity: { y: number } }) => {
    const current = y.get()
    const vel     = info.velocity.y
    if (expanded) {
      current > HIDE_OFFSET * 0.4 || vel > 350 ? collapse() : expand()
    } else {
      current < HIDE_OFFSET * 0.6 || vel < -350 ? expand() : collapse()
    }
  }

  return (
    /* Wrapper is pointer-events:none so taps on the canvas above pass through */
    <div className="mobile-sheet-wrapper">
      <motion.div
        className="mobile-sheet"
        style={{ y }}
        drag="y"
        dragControls={dragControls}
        dragListener={false}           /* only handle starts the drag */
        dragConstraints={{ top: 0, bottom: HIDE_OFFSET }}
        dragElastic={{ top: 0.05, bottom: 0.05 }}
        onDragEnd={handleDragEnd}
      >
        {/* ── Drag handle row — touch target that starts drag + tap to toggle ── */}
        <div
          className="mobile-sheet-handle-row"
          onPointerDown={(e) => dragControls.start(e)}
          onClick={toggle}
        >
          <div className="mobile-sheet-handle" />
        </div>

        {/* ── Collapsed state: mode indicator dot + label ── */}
        <motion.div
          className="mobile-sheet-collapsed-row"
          style={{ opacity: collapsedOpacity }}
          aria-hidden={expanded}
        >
          <span className="mobile-sheet-mode-dot" />
          <span className="mobile-sheet-mode-label">
            {MODE_LABELS[mode] ?? mode}
          </span>
        </motion.div>

        {/* ── Expanded state: full controls ── */}
        <motion.div
          className="mobile-sheet-expanded"
          style={{ opacity: expandedOpacity }}
          aria-hidden={!expanded}
        >
          {/* Mode buttons */}
          <div className="mobile-sheet-modes">
            {(['lumination', 'baseline', 'compare'] as const).map((m) => (
              <button
                key={m}
                className={`mobile-mode-btn${mode === m ? ' active' : ''}`}
                onClick={() => setMode(m)}
              >
                {MODE_LABELS[m]}
              </button>
            ))}
          </div>

          {/* Sliders — stopPropagation prevents drag conflicts */}
          <div className="mobile-sheet-sliders">
            <div className="mobile-slider-col">
              <div className="mobile-slider-label">
                Baseline
                <span className="mobile-slider-value">
                  {Math.round(baselinePct * 100)}%
                </span>
              </div>
              <input
                type="range" min={15} max={100}
                value={Math.round(baselinePct * 100)}
                onChange={(e) => setBaselinePct(Number(e.target.value) / 100)}
                onPointerDown={(e) => e.stopPropagation()}
              />
            </div>
            <div className="mobile-slider-col">
              <div className="mobile-slider-label">
                Lookahead
                <span className="mobile-slider-value">
                  {lookaheadSec.toFixed(1)}s
                </span>
              </div>
              <input
                type="range" min={2} max={8} step={0.5}
                value={lookaheadSec}
                onChange={(e) => setLookaheadSec(Number(e.target.value))}
                onPointerDown={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* CTA */}
          <button
            className="mobile-sheet-cta"
            onClick={() => {
              const el = document.getElementById('dashboard')
              if (el && scrollRef.current) {
                scrollRef.current.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
              }
            }}
          >
            Explore the data <span>→</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}
