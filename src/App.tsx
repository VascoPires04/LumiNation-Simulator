import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import CitySimulator from './CitySimulator'
import LandingSection from './sections/LandingSection'

type Mode = 'lumination' | 'baseline' | 'compare' | 'fpv'

export default function App() {
  const [mode, setMode] = useState<Mode>('lumination')

  // Topbar fades in as user scrolls past the landing section
  const { scrollY } = useScroll()
  const topbarOpacity = useTransform(scrollY, [120, 320], [0, 1])
  const [topbarInteractive, setTopbarInteractive] = useState(false)

  useEffect(() => {
    return scrollY.on('change', v => setTopbarInteractive(v > 120))
  }, [scrollY])

  return (
    <div className="app app--v2">
      <motion.header
        className="topbar"
        style={{ opacity: topbarOpacity, pointerEvents: topbarInteractive ? 'auto' : 'none' }}
      >
        <div className="brand">
          <div className="brand-mark">L</div>
          <div>
            <div className="brand-name">LumiNation</div>
            <div className="brand-tag">The adaptive light corridor · live simulator</div>
          </div>
        </div>
        <div className="mode-bar">
          <button className={mode === 'lumination' ? 'active' : ''} onClick={() => setMode('lumination')}>LumiNation</button>
          <button className={mode === 'baseline'   ? 'active' : ''} onClick={() => setMode('baseline')}>Always-on</button>
          <button className={mode === 'compare'    ? 'active' : ''} onClick={() => setMode('compare')}>Compare</button>
          <button className={mode === 'fpv'        ? 'active' : ''} onClick={() => setMode('fpv')}>Citizen view</button>
        </div>
      </motion.header>

      <LandingSection />

      <section className="sim-section">
        <CitySimulator mode={mode} />
      </section>

      <footer className="footer">
        <span>LumiNation · Red Bull Basement Portugal 2026 · Instituto Superior Técnico</span>
        <span>v0.1 · early prototype</span>
      </footer>
    </div>
  )
}
