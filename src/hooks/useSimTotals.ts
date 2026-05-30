// useSimTotals — subscribes to simBus and returns the latest sample
// with city scaling (100 000 lamps) already applied.
// Re-renders at ~2Hz matching the simBus emit rate.

import { useEffect, useState } from 'react'
import { simBus, SimSample } from '../sim-bus'
import { CITY_LAMPS } from '../constants'

export interface SimTotals {
  powerW:        number   // Lisbon-scaled current power (W)
  baselineW:     number   // Lisbon-scaled always-on power (W)
  eurSavedAnnual: number  // Lisbon-scaled projected annual € saved
  co2KgAnnual:   number   // Lisbon-scaled projected annual CO₂ saved (kg)
  kwhSaved:      number   // Lisbon-scaled cumulative session kWh saved
  peds:          number
  cars:          number
  savingsPct:    number   // 0-100 — how much is currently being saved
  lampCount:     number   // raw lamp count (for external scaling if needed)
}

export function useSimTotals(): SimTotals | null {
  const [latest, setLatest] = useState<SimSample | null>(null)

  useEffect(() => simBus.on(s => setLatest(s)), [])

  if (!latest) return null

  const scale = CITY_LAMPS / Math.max(latest.lampCount, 1)
  return {
    powerW:         latest.powerW   * scale,
    baselineW:      latest.baselineW * scale,
    eurSavedAnnual: latest.eurSaved  * scale,
    co2KgAnnual:    latest.co2Kg     * scale,
    kwhSaved:       latest.kwhSaved  * scale,
    peds:           latest.peds,
    cars:           latest.cars,
    savingsPct:     latest.baselineW > 0
      ? Math.round(100 * (1 - latest.powerW / latest.baselineW))
      : 0,
    lampCount:      latest.lampCount,
  }
}
