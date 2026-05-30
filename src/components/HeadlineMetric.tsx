// HeadlineMetric — large glanceable metric display.
// Used in SimulatorSection (Phase 3) for the annual € saved at city scale.

import type { ReactNode } from 'react'

interface HeadlineMetricProps {
  value: string
  label: string
  sublabel?: string
  valueAction?: ReactNode  // rendered top-aligned beside the value, e.g. a pause icon
}

export default function HeadlineMetric({ value, label, sublabel, valueAction }: HeadlineMetricProps) {
  return (
    <div className="headline-metric">
      {valueAction ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="headline-metric-value">{value}</div>
          {valueAction}
        </div>
      ) : (
        <div className="headline-metric-value">{value}</div>
      )}
      <div className="headline-metric-label">{label}</div>
      {sublabel && <div className="headline-metric-sublabel">{sublabel}</div>}
    </div>
  )
}
