// SimControls — reusable baseline + lookahead sliders.
// Used by CitySimulator's full sidebar and will be used by SimulatorSection (Phase 3).

interface SimControlsProps {
  baselinePct: number
  onBaselineChange: (v: number) => void
  lookaheadSec: number
  onLookaheadChange: (v: number) => void
}

export default function SimControls({
  baselinePct,
  onBaselineChange,
  lookaheadSec,
  onLookaheadChange,
}: SimControlsProps) {
  return (
    <>
      <div className="row">
        <span>Baseline brightness</span>
        <span>{Math.round(baselinePct * 100)}%</span>
      </div>
      <input
        type="range" min={15} max={100} step={1}
        value={Math.round(baselinePct * 100)}
        onChange={e => onBaselineChange(parseInt(e.target.value, 10) / 100)}
      />

      <div className="row">
        <span>Lookahead</span>
        <span>{lookaheadSec.toFixed(1)}s</span>
      </div>
      <input
        type="range" min={20} max={80} step={1}
        value={Math.round(lookaheadSec * 10)}
        onChange={e => onLookaheadChange(parseInt(e.target.value, 10) / 10)}
      />
    </>
  )
}
