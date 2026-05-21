// MobileHero — mobile-only top layer (replaces scroll-driven curtain on ≤768px).
// Solid black, fixed to top, contains brand row + tagline + live headline metric.

type Mode = 'lumination' | 'baseline' | 'compare' | 'fpv'

interface Props {
  mode: Mode
  setMode: (m: Mode) => void
  fmtEur: string
  sessionCo2Kg: number
}

export default function MobileHero({ setMode, fmtEur, sessionCo2Kg }: Props) {
  const co2Label = sessionCo2Kg >= 1000
    ? `${(sessionCo2Kg / 1000).toFixed(2)}t CO₂ avoided · session`
    : `${sessionCo2Kg.toFixed(1)} kg CO₂ avoided · session`

  return (
    <div className="mobile-hero">
      {/* Row 1: brand mark + wordmark + citizen view button */}
      <div className="mobile-hero-row1">
        <div className="mobile-hero-brand">
          <div className="mobile-brand-mark">L</div>
          <span className="mobile-brand-wordmark">
            <span className="mobile-brand-lumi">Lumi</span>
            <span className="mobile-brand-nation">Nation</span>
          </span>
        </div>
        <button className="mobile-citizen-btn" onClick={() => setMode('fpv')}>
          Citizen view
        </button>
      </div>

      {/* Row 2: tagline */}
      <div className="mobile-hero-tagline">The adaptive light corridor</div>

      {/* Row 3: headline metric */}
      <div className="mobile-hero-metric">
        <div className="mobile-metric-label">LISBON · SAVED ANNUALLY</div>
        <div className="mobile-metric-value">{fmtEur}</div>
        <div className="mobile-metric-sublabel">{co2Label}</div>
      </div>
    </div>
  )
}
