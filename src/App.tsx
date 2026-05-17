import { useState } from 'react'
import CitySimulator from './CitySimulator'

type Mode = 'lumination' | 'baseline' | 'compare' | 'fpv'

export default function App() {
  const [mode, setMode] = useState<Mode>('lumination')

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">L</div>
          <div>
            <div className="brand-name">LumiNation</div>
            <div className="brand-tag">The adaptive light corridor · live simulator</div>
          </div>
        </div>
        <div className="mode-bar">
          <button className={mode === 'lumination' ? 'active' : ''} onClick={() => setMode('lumination')}>LumiNation</button>
          <button className={mode === 'baseline' ? 'active' : ''} onClick={() => setMode('baseline')}>Always-on</button>
          <button className={mode === 'compare' ? 'active' : ''} onClick={() => setMode('compare')}>Compare</button>
          <button className={mode === 'fpv' ? 'active' : ''} onClick={() => setMode('fpv')}>Citizen view</button>
        </div>
      </header>

      <CitySimulator mode={mode} />

      <footer className="footer">
        <span>LumiNation · Red Bull Basement Portugal 2026 · Instituto Superior Técnico</span>
        <span>v0.1 · early prototype</span>
      </footer>
    </div>
  )
}
