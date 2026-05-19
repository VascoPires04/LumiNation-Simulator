import { useEffect, useRef, useState } from 'react'
import { simBus, SimSample } from '../sim-bus'

// Subscribes to simBus and maintains a rolling history array.
// Re-renders the consumer at ~2Hz (matching simBus emit rate).
// maxSamples = 120 → 60 seconds at 2Hz.
export function useSimHistory(maxSamples = 120): SimSample[] {
  const historyRef = useRef<SimSample[]>([])
  const [, setTick] = useState(0)

  useEffect(() => {
    return simBus.on(sample => {
      const h = historyRef.current
      historyRef.current = h.length >= maxSamples
        ? [...h.slice(-(maxSamples - 1)), sample]
        : [...h, sample]
      setTick(t => t + 1)
    })
  }, [maxSamples])

  return historyRef.current
}
