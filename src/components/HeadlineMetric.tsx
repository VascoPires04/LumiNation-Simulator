// HeadlineMetric — large glanceable metric display.
// Used in SimulatorSection (Phase 3) for the annual € saved at city scale.

interface HeadlineMetricProps {
  value: string      // e.g. "€4.2M"
  label: string      // e.g. "saved per year · city scale"
  sublabel?: string  // e.g. "100,000 streetlights"
}

export default function HeadlineMetric({ value, label, sublabel }: HeadlineMetricProps) {
  return (
    <div className="headline-metric">
      <div className="headline-metric-value">{value}</div>
      <div className="headline-metric-label">{label}</div>
      {sublabel && <div className="headline-metric-sublabel">{sublabel}</div>}
    </div>
  )
}
