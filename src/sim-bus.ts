// sim-bus.ts — module-level event emitter for simulation data.
// CitySimulator emits samples here (downsampled to ~2Hz).
// Dashboard / any consumer subscribes via `simBus.on()`.
// Zero React dependency — safe to call from requestAnimationFrame loops.

export interface SimSample {
  t: number          // performance.now() at emission
  powerW: number     // LumiNation power (W)
  baselineW: number  // always-on baseline (W)
  eurSaved: number   // projected annual € saved (current lamp config, unscaled)
  co2Kg: number      // projected annual CO₂ saved (kg, unscaled)
  kwhSaved: number   // cumulative kWh saved this session
  peds: number
  cars: number
  lampCount: number  // current number of lamps — needed for Lisbon scaling
}

type Listener = (s: SimSample) => void
const listeners = new Set<Listener>()

export const simBus = {
  emit: (s: SimSample) => listeners.forEach(fn => fn(s)),
  on:   (fn: Listener): (() => void) => {
    listeners.add(fn)
    return () => listeners.delete(fn)
  },
}
