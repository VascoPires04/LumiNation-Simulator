# LumiNation — Claude Code context

> This file is automatically read by Claude Code when working in this project.
> It contains the full project briefing, current state of the simulator, and
> next steps. Keep it updated as the project evolves.

---

## Project identity & tone

LumiNation is an early-stage smart public lighting startup created by a
multidisciplinary student team from Instituto Superior Técnico in Portugal.
The team won **Red Bull Basement Portugal 2026** and will represent Portugal at
the **Red Bull Basement World Final in Silicon Valley**.

**Tone for all work:** ambitious, technically credible, startup-like and
polished, but not exaggerated. No fake claims. Sound sharp, mature and realistic.
When something is not yet proven, frame as design direction, pilot assumption,
or product roadmap.

---

## Project summary

LumiNation transforms existing streetlights into an intelligent, interconnected
network. The goal is to **reduce wasted public lighting while preserving the
citizen's feeling of safety and visibility**.

The system keeps streets at a **safe baseline lighting level** and increases
brightness **dynamically when pedestrians or vehicles are detected**. The light
corridor illuminates ahead of the user and gently dims behind them — for
citizens the street feels safe, visible and familiar; for cities, energy waste,
electricity costs and CO₂ emissions drop.

**Slogan:** "We are not turning the lights off, we are turning them on intelligently."

**Poetic framing (Carl Jung):** "One does not become enlightened by imagining
figures of light, but by making the darkness conscious."

---

## The problem

- More than 40% of public lighting is wasted.
- Lisbon + Porto alone: over €10M/year wasted.
- Portugal has ~3 million public lamps; tens of millions of euros wasted per year.
- Lisbon alone has ~70,000 streetlights → LumiNation could save an estimated
  €4M/year there.

Rhetorical anchor: **"Why are we lighting empty streets?"**

---

## The solution

The system:
1. Detects pedestrians and vehicles (mmWave radar, privacy-preserving).
2. Predicts speed and direction.
3. Communicates with nearby lamps.
4. Creates a smooth, dynamic corridor of light that follows the user.
5. Illuminates ahead and gently dims behind.
6. Never leaves the street in complete darkness — returns to a safe baseline.

For citizens: experience unchanged (safe, visible, familiar).
For cities: less wasted energy, lower CO₂, lower electricity costs, no pole
replacement, potential foundation for smarter urban data.

---

## AI positioning (important nuance)

- For one lamp, AI is **not essential** — deterministic physics (speed, distance,
  ETA at next lamp) handles real-time prediction fine.
- AI becomes valuable **at city scale**: learning urban movement patterns,
  optimizing lighting profiles by street/hour/day/weather/events, reducing
  false positives, balancing energy savings with perceived safety, supporting
  anomaly detection and predictive maintenance.
- The product is **AI-enhanced**, not AI-for-the-sake-of-AI.

---

## Hardware / technical concept

Core internal functional blocks:

1. **mmWave radar sensor** — privacy-preserving, low-light friendly. Considering
   2 sensors per module, diagonal positioning, to reduce blind spots.
2. **Controller** — ESP32-class microcontroller. Local prediction + mesh comms.
3. **AC/DC power converter** — 230V AC → low-voltage DC (e.g. 5V) for the
   LumiNation electronics. Not the LED driver.
4. **WAGO / wire connector** — quick-lever connector for safe internal wiring.
5. **Cable gland** — sealed cable entry for outdoor IP rating.
6. **Dimming interface** — DALI / DALI-2 / D4i / 0-10V / PWM, sending brightness
   commands to the LED driver inside the luminaire. LumiNation controls the
   driver, not the LEDs directly.

**Realistic caveat:** these six components are the internal functional blocks.
A deployable product also needs weatherproof enclosure, mounting, surge/fuse
protection, certification, driver compatibility testing, comms validation,
and fail-safe architecture (if module fails → return to normal static operation).

---

## Business model

- **€20/module** — target hardware cost/price at scale (not full installed cost).
- **€12/year/node** — SaaS subscription (dashboard, analytics, optimization,
  updates, maintenance, reporting).

**Preferred go-to-market: B2B2G via ESCOs / energy-service partners.**
LumiNation sells hardware + SaaS to an ESCO. The ESCO installs and operates
the system for the municipality through an energy-performance or efficiency
contract. The municipality pays the ESCO via service fees or shared savings.

At this stage, LumiNation should **not** try to become the ESCO. It should be
the technology layer ESCOs and smart-lighting operators use. Later, with
validated pilots, capture more value via shared-savings or co-ESCO models.

---

## Policy context (Portugal/EU)

- EU Energy Efficiency Directive: -11.7% final energy consumption by 2030.
- European Green Deal: climate neutrality by 2050.
- Portugal PNEC 2030: emissions reduction, renewables, efficiency, energy security.
- Potential partners: Schréder, PreZero, SmartWatt, Veolia, GreenYellow,
  Galp energy-services, EDP energy-services. (Not as electricity retailers —
  as energy-services divisions where efficiency is the product.)

---

## Competition

**Important: smart public lighting already exists. Never claim "nobody does this."**

- Portuguese reference: **Arquiled** (smart lighting projects with EDP/InovCity
  in Évora ~2010; ongoing connected LED + LoRaWAN + AI/IoT work).

**LumiNation's differentiation:**
1. Retrofit-first (not a luminaire manufacturer).
2. Low-cost module (€20 target).
3. **Predictive corridor of light** (not just remote dimming or reactive
   presence detection — lamps coordinate to light ahead of users before they arrive).
4. AI-enhanced optimization at city scale.
5. Citizen safety perception preserved.
6. Could partner with players like Arquiled, not only compete.

---

## Team

Four students from Instituto Superior Técnico, originally met during Physics /
Physics Engineering. Now combining:
- Physics
- Computer Science
- Electrical Engineering
- Management / Entrepreneurship

Members: Duarte Lopes, Liliana Silva, Vasco Pires, João Guilherme.

---

## What is in THIS repo

This repository contains the **LumiNation City Simulator** — an interactive web
demo built to show the adaptive light corridor in action. It's the artifact we
plan to use on stage at the Silicon Valley World Final, plus as a marketing /
investor-facing piece.

**Stack:** React 18 + TypeScript + Vite + Three.js (^0.184.0) + Framer Motion + D3. No backend. All client-side.
**Published:** Replit (public URL). All files tracked by git including `FPV3D.tsx`.

**Files of interest:**
- `src/App.tsx` — V2 shell: fixed canvas layer + scroll-driven landing curtain + compact HUD + DashboardSection. Framer Motion throughout. ~690 lines.
- `src/CitySimulator.tsx` — all simulation logic (city layout, agents, lamps, physics,
  drawing, scenarios, Lisbon scale, zoom system). All key tunables are at the top.
  Emits samples to `sim-bus` at ~2Hz.
- `src/FPV3D.tsx` — Three.js Citizen View (~1750 lines). Completely independent
  from the Canvas 2D system; receives simulation state as React refs via props.
- `src/sim-bus.ts` — module-level event emitter. `CitySimulator` calls `simBus.emit()`;
  dashboard components subscribe via `simBus.on()`. Zero React dependency — safe in rAF loops.
- `src/sections/LandingSection.tsx` — spring-driven curtain with wordmark, slogan, scroll
  cue. Parallax: each layer has independent Y travel and opacity easing via Framer Motion.
- `src/sections/DashboardSection.tsx` — data dashboard below the simulator. Owns
  pause/freeze state; passes frozen or live data to chart components.
- `src/components/PowerChart.tsx` — D3 SVG dual-line chart. LumiNation amber area +
  always-on orange line + savings gap fill + hover crosshair. Lisbon-scaled.
- `src/components/CO2Gauge.tsx` — D3 arc-based radial gauge (270°). Smooth rAF animation.
  Shows annual CO₂ saved + km-of-driving equivalent. Lisbon-scaled.
- `src/components/EurCard.tsx` — annual € savings card with D3 sparkline. Lisbon-scaled.
- `src/components/EnergyCard.tsx` — session kWh saved card with D3 sparkline. Lisbon-scaled.
- `src/components/HeadlineMetric.tsx` — live Lisbon-scaled savings headline in the HUD.
- `src/components/ParticleBackground.tsx` — ambient particle effect, fades in when
  dashboard is in view.
- `src/components/SimControls.tsx` — extracted control widgets (used internally).
- `src/hooks/useIsMobile.ts` — `window.matchMedia` hook, breakpoint 768px.
- `src/hooks/useSimHistory.ts` — subscribes to `simBus`, maintains rolling array of
  `SimSample[]` up to `maxSamples`. Re-renders at ~2Hz.
- `src/hooks/useSimTotals.ts` — subscribes to `simBus`, returns latest sample with
  Lisbon scaling (70,000 lamps) already applied as `SimTotals`.
- `src/styles.css` — global styles + LumiNation brand tokens + full mobile layout.
- `SIMULATION_VALUES_RESEARCH_REPORT.txt` — research on Portuguese energy values.
- `docs/ISOMETRIC_PLAN.md` — step-by-step plan for upgrading the city top-down view to isometric Canvas 2D rendering.
- `docs/V2_PLAN.md` — earlier V2 planning document.

---

## Site flow & screens (V2 architecture)

The app is a single page. No routing. `App.tsx` is the orchestrator — it owns a
fixed canvas layer that never unmounts and a scrollable document on top that drives
all reveal animations.

### Z-index stack (bottom → top)

```
0  canvas-layer       — position:fixed, full viewport — CitySimulator (no sidebar)
1  canvas-dim-veil    — position:fixed, pointer-events:none — dims canvas at landing
2  hud-headline       — position:fixed — Lisbon-scaled headline, fades in with HUD
2  hud-controls       — position:fixed — mode buttons + sliders, fades in with HUD
3  landing-curtain    — position:fixed, pointer-events:none — lifts on scroll
4  scroll-doc         — position:relative, pointer-events:none — transparent, drives height
                        DashboardSection lives here (below the scroll spacers)
100 topbar            — position:fixed — fades in as curtain lifts
```

### Landing curtain (`LandingSection.tsx`)

Covers the full viewport at load. Contains:
- **Wordmark** — "LumiNation", deepest parallax (–260px travel on desktop scroll).
- **Slogan** — "Light that moves with you", mid parallax (–200px).
- **Scroll cue** — "scroll to explore" + animated drip arrow, fades earliest.

Desktop: scroll-driven lift. `useSpring(scrollY, { stiffness:180, damping:42 })` gives
physical inertia. Curtain lifts completely over `LIFT = 600px` of scroll.

Mobile: auto-dismisses with a fade after **1 second**. No scroll required. Curtain DOM
unmounts 800ms after fade starts.

### HUD (compact controls — always present once curtain lifts)

Two fixed elements that fade in together as the curtain lifts:

**`hud-headline`** — top-right (desktop) / top-center (mobile)
- Live Lisbon-scaled annual savings (`HeadlineMetric` component).
- Display only, no interaction.

**`hud-controls`** — bottom-right (desktop) / bottom sheet draggable (mobile)
- Mode switcher: LumiNation / Always-on / Compare (3 buttons).
- Baseline brightness slider (0–100%).
- Light corridor slider (0.5–8s lookahead).
- **"Explore the data" CTA** — scrolls to `#dashboard` (desktop) or triggers in-place
  dashboard view (mobile).
- When `dashInView=true`, CTA is replaced by **Pause data / Resume data** + **↑ Back to the city**.

Mobile bottom sheet: draggable up/down with snap. `hudY` MotionValue drives `y` offset.
`hudMax` is measured dynamically via `ResizeObserver` so it always matches content height.

### Modes (`mode` state in App.tsx)

**`lumination`** (default) — adaptive corridor active.
**`baseline`** — all lamps at max brightness (always-on reference).
**`compare`** — split-screen left=LumiNation / right=Always-on.
**`fpv`** — desktop only; `FPV3D.tsx` Three.js scene. Citizen view.

Mode is set via the `hud-controls` mode switcher (3 buttons) or the topbar Citizen view button.

### Topbar (fades in as curtain lifts)

Glassmorphic header, `position:fixed`, `z-index:100`. Contains:
- Brand mark "L" + "LumiNation" + tagline.
- Clicking "L" scrolls back to top (desktop only).
- **Citizen view** button (desktop only — too heavy for mobile).

### Info button + modal

A floating "i" button appears once the curtain is gone. First-time users also see a
bouncing "Click here ↓" hint for 3.2s.

Clicking opens an info modal: what LumiNation is, how the simulator works, spawn
instructions (tap vs shift+click depending on platform).

### Dashboard section (`DashboardSection.tsx`)

Lives inside the scroll-doc, below two invisible spacers. Revealed by scrolling.

When `dashInView` becomes true:
- The canvas fades out linearly with scroll (`canvasLayerOpacity` MotionValue).
- `ParticleBackground` fades in (ambient particles behind the dashboard).
- On mobile: the HUD fades out to avoid overlap.

The section manages a **pause/freeze** toggle. When paused, it captures a snapshot
of `liveHistory` and `liveTotals` and serves the frozen data to all chart components.

**Dashboard charts (all Lisbon-scaled to 70,000 lamps):**

- `PowerChart` — D3 SVG. Full-width top row. Dual-line: amber area (LumiNation power,
  0→now) + orange line (always-on reference). Savings gap fill between them. D3 axes
  with formatted time ticks. Hover crosshair shows exact values + % savings at that
  moment. "X% saved now" badge bottom-right. `paused` state shows "data frozen" watermark.

- `CO2Gauge` — D3 arc (270°, -135° → +135°). Fills from left with amber gradient as
  savings ratio increases. Smooth rAF animation (400ms ease-in-out interpolation).
  Shows: annual CO₂ value + unit, % of max savings, km-of-driving equivalent.

- `EurCard` — Annual projected € savings with D3 sparkline (session history, amber fill +
  line). Expandable to overlay panel on click.

- `EnergyCard` — Cumulative session kWh saved with D3 sparkline. Same expandable pattern.

**Data pipeline:**
```
CitySimulator (rAF loop)
  → simBus.emit() at ~2Hz
    → useSimHistory(600) — 300s rolling array for dashboard
    → useSimTotals()     — latest sample, Lisbon-scaled, typed as SimTotals
      → PowerChart, CO2Gauge, EurCard, EnergyCard
```

### Footer (inside scroll-doc, below dashboard)
`LumiNation · Red Bull Basement Portugal 2026 · Instituto Superior Técnico` + `v0.1 · early prototype`

### Scroll snap (mobile only)

After scrolling stops, a 180ms debounce checks if scroll position is in the
"gap" between the simulator spacer and the dashboard. If so, it snaps to whichever
is nearer — no half-revealed states on mobile.

---

## Currently implemented features

### City top-down view (Canvas 2D — `CitySimulator.tsx`)

- 3×3 city grid with horizontal and vertical streets, intersections, and building
  blocks between streets (deterministic seeded layout, gradient fills, faint
  warm-lit windows on building faces).
- Road rendered in 4 layers: sidewalk border → road surface → centre highlight →
  dashed centreline. Lamps placed at ±20px offset from street centre.
- Communication mesh lines between adjacent lamps — opacity reacts dynamically
  to the average brightness of each lamp pair.
- Lamp halos: 5-stop radial gradient for smooth falloff; atmospheric vignette
  darkens canvas edges. Both Always-on and LumiNation use `brightness * MAX_VISUAL_BRI`
  (multiplicative, smooth 0→100% range, no dead zone).
- Lamp corridor logic: same-street lamps within [−reachBehind, lookaheadPx +
  reachAhead] are lit at 100%; cross-street lamps get a 50px intersection
  spillover glow. Asymmetric easing: fast warm-up (τ≈0.31s), slow dim-down
  (τ≈0.83s). Snaps to target when Δ < 0.01.
- Click (desktop) or tap (mobile) on a street to spawn a pedestrian.
  Shift+click (desktop) or tap-mode toggle (mobile) for a car.
- Pedestrians drawn as walking figures with animated stride.
- Cars drawn pseudo-3D with body, windshield, headlight cones, tail lights.
- `spawnRandomEdge()` — spawns agents at valid street edges (not building centers).
- Scenarios auto-spawn agents at appropriate rates:
  - Quiet residential 3am: sparse pedestrians, rare cars.
  - Busy avenue 8pm: frequent cars, moderate pedestrians.
  - Mixed 11pm: balanced.
- **Lisbon Scale** — `scale = 70_000 / lampCount` multiplier applied to all displayed
  metrics. Surfaces headline €4M/year figure. Scale badge shown when active.
  Resize bug fixed: sidebar growth no longer triggers canvas resize (overflow:hidden on .app).
- **Live power chart** — 60s ring buffer drawn on a `<canvas>` in the sidebar.
  Amber area = LumiNation; dashed white = always-on. Drawn via `useEffect` on stats change.

#### Zoom / pan system (added 2026-05)

- **Drone flyover zoom** — mouse wheel (desktop) and pinch (mobile) zoom the canvas
  in and out. Zoom range: 0.4× (full city overview) to 3× (close-up).
- **Extended city pre-generation** — `layoutCity` generates streets, lamps,
  buildings, and trees for the full zoom-out extent (`getVirtualBounds(W, H, 0.4)`)
  at resize time. No re-layout during zoom transitions — elements stay in place as
  the view scales, giving a true drone effect.
- **Centered scale transform** — `draw()` applies `ctx.translate(W/2,H/2); ctx.scale(z,z);
  ctx.translate(-W/2,-H/2)` so zoom anchors to the canvas center.
- **Smooth zoom** — `targetZoomRef` stores the desired zoom; the render loop applies
  exponential easing `1 - Math.exp(-dt * 10)` each frame so zoom transitions are
  fluid, not stepped.
- **Visibility culling** — `draw()` and `step()` skip elements outside
  `virtualBoundsRef` (the current virtual coordinate range at the current zoom).
  `step()` uses a 500px margin so corridor logic stays correct near edges.
- **Scroll vs zoom guard** — a canvas-level `IntersectionObserver` tracks what
  fraction of the stage is visible (`stageVisibilityRef`). The wheel listener
  only intercepts scroll when `stageVisibilityRef ≥ 0.8`; otherwise the page
  scrolls normally. Dashboard `IntersectionObserver` threshold is `> 0` (fires
  as soon as any pixel is visible) to prevent the guard from misfiring during
  half-scroll transitions.
- **Pinch-spawn fix** — `wasPinchingRef` flag prevents finger-release from
  spawning agents after a pinch gesture. A spawn only fires if `wasPinchingRef`
  is `false` at touch end.

### Citizen view (FPV — `src/FPV3D.tsx`, Three.js WebGL)

Full 3D WebGL scene. Key features:

**Rendering (desktop / mobile adaptive):**
- `WebGLRenderer`: antialias on desktop, off on mobile. `PCFSoftShadowMap` on desktop, disabled on mobile.
- `ReinhardToneMapping` exposure 1.0.
- `pixelRatio`: capped at 2 on desktop, 1 on mobile.
- `FogExp2`: density 0.006 on desktop, 0.022 on mobile (3.7× thicker → shorter draw distance).
- Camera far plane: 300m desktop, 120m mobile.
- `HemisphereLight(0x1a2540, 0x0a0906, 1.2)` + `AmbientLight(0x0a0c12, 0.3)`.

**Materials (desktop / mobile):**
- Desktop: `MeshStandardMaterial` (PBR) throughout.
- Mobile: `MeshLambertMaterial` for all non-emissive surfaces (2–4× faster fragment shading).
- Emissive materials (bulb, windows) use same parameters on both; Lambert supports emissive.

**Ground & road:**
- Road: `PlaneGeometry(8, 800)`, dark asphalt.
- Sidewalks: `PlaneGeometry(4.5, 800)` each side.
- Curb edges: `BoxGeometry(0.14, 0.14, 800)` at ±4.06m.
- White road centre dashes: 63 (desktop) / 20 (mobile) pooled boxes, recycled as camera advances.

**Sky:**
- Stars: 280 (desktop) / 80 (mobile) `Points` geometry, `fog: false` so FogExp2 doesn't hide them.

**Building pool (desktop: 23/side, mobile: 10/side, 22m spacing):**
- Slot types (desktop only — mobile forces 'building' to avoid extra PointLights):
  - **`building`** (most common): 2 sub-buildings with varied heights, 10 WALL_COLORS.
    Individual glass window panes (desktop only; skipped on mobile — too many draw calls).
    Doors + frame + handle, shopfront glazing, awnings, café tables (desktop only).
  - **`park`**: grass, bench, tree, wall-mounted LED (AdaptiveLamp PointLight).
  - **`playground`**: grass, fence, sandbox, slide, swing set, globe lamp (AdaptiveLamp).
  - **`parking`**: asphalt, parking lines, low-poly parked cars, wall LED (AdaptiveLamp).
- Bollards at curb edges (desktop only; skipped on mobile).
- Recycling: when `group.position.z > 240`, teleport to far end.

**Streetlamp pool (desktop: 46/side, mobile: 10/side, 11m spacing, staggered):**
- Per lamp: pole + arm + fixture hood + emissive bulb + `PointLight` + two pool planes (AdditiveBlending).
- `PointLight(0xffd060, 18, 13, 2)` — warm amber.
- Corridor brightness: `bri * 16` → `PointLight.intensity`.
- Shadow maps: only for 1–2 closest lamps per side (desktop); fully disabled mobile.
- Total PointLights: ~92 desktop, ~20 mobile (this is the biggest perf difference).

**Tree pool (desktop: 11/side, mobile: 5/side, 48m spacing):**
- `DodecahedronGeometry` foliage (3 stacked spheres) + cylinder trunk.

**AdaptiveLamps system (desktop only):**
- Park/playground/parking lights register into `adaptiveLamps[]`.
- Each frame: intensity driven by same `getBri()` corridor function as streetlamps.

**NPC walker pool (3 silhouettes: 2 walkers + 1 dog walker):**
- Articulated human figures: head (SphereGeometry) + hair + eyes + nose + torso + hip-pivot legs + shoulder-pivot arms.
- Human gait: `legL/armR` and `legR/armL` swing in opposing phases (realistic walk).
- Dog walker: oval body (scaled SphereGeometry), snout, nose, ears, tail, 4 leg pivots with paws.
  Dog uses diagonal trot gait. Sniff animation: vertical + horizontal head oscillation.
- Leash: `THREE.Line` with `BufferAttribute` updated each frame to follow dog collar.
- Dog faces correct direction: `dogGroup.rotation.y = Math.PI`, `position.z = -1.3`.
- Recycled when they pass camera (z > 6), reappear 320m ahead.

**Corridor brightness (`getBri()`):**
- Lamps 0–12m behind camera: fully lit (safety zone).
- 12m+ behind: fade to baseline over 10m.
- Ahead within `lookaheadDist`: fully lit.
- Beyond lookaheadDist: fade to baseline over 10m.
- `lookaheadDist = lookaheadRef.current * 8 * corridorSpeedMult`
- `corridorSpeedMult` lags behind `currentSpeedMult` (reactive, not instant).

**Speed system:**
- Hold `Shift` → 3× speed (keyboard sprint).
- UI buttons: Walk (1.0×) / Jog (2.0×) / Sprint (3.0×).
- `speedMult` syncs back to 2D agent velocity so top-down and FPV stay in sync.

**Head-bob:**
- `camera.position.y = 1.7 + sin(stridePhase × 2π) × 0.04`
- `camera.position.x = sin(stridePhase × π) × 0.012`

**UI overlay (glassmorphic `.fpv-overlay`):**
- "Citizen Dashboard" panel: velocity (m/s + km/h), lookahead corridor (m), light frequency.
- "Citizen Controls" panel: Walk / Jog / Sprint buttons.
- SHIFT hint hidden on mobile (`!isMobile`).

### Mobile layout (responsive — `src/styles.css` + `useIsMobile` hook)

- **`useIsMobile`** hook: `window.matchMedia('(max-width: 768px)')` with change listener.
- **`.app`**: `height: 100vh; height: 100svh; height: 100dvh` triple fallback for iOS Safari.
  `overflow: hidden` to prevent sidebar growth from triggering canvas resize.
- **Single breakpoint** `@media (max-width: 768px)`:
  - `.stage`: `height: clamp(300px, 56vh, 600px)`
  - `.sidebar`: 2-column grid, controls card spans full width and sits at `order: -1` (top).
  - `.mode-bar`: 2×2 grid, buttons `min-height: 32px`.
  - FPV overlay: horizontal row, hides dashboard card, shows only slim speed controls strip.
  - Spawn: tap-mode toggle instead of shift+click.
- Canvas has `touchAction: 'none'` to prevent browser scroll interception.
- **FPV mobile scene settings** (detected via `isMob = /Mobi|Android|iPhone|iPad/i.test(UA) || W <= 768`):
  - `antialias: false`, `shadowMap.enabled: false`, `pixelRatio: 1`.
  - `FogExp2 density: 0.022` (vs 0.006), camera far: 120m.
  - `MeshLambertMaterial` everywhere (vs `MeshStandardMaterial`).
  - LAMP_COUNT: 10/side (vs 46), BLDG_COUNT: 10/side (vs 23), TREE_COUNT: 5/side (vs 11).
  - DASH_COUNT: 20 (vs 63), Stars: 80 (vs 280).
  - No window panes, no bollards, no doors/awnings/cafés, no park/playground/parking slots.

---

## Tunables

### `CitySimulator.tsx` (top of file)

```ts
const LAMP_WATTS = 80              // wattage per lamp at full
const PRICE_PER_KWH = 0.15         // €/kWh public lighting
const CO2_PER_KWH = 0.13           // Portuguese grid 2023 — APA official data
const HOURS_PER_YEAR_NIGHT = 4100  // night hours/year
const PED_SPEED = 1.4              // m/s
const CAR_SPEED = 11               // m/s (~40 km/h)
const METERS_PER_PIXEL = 0.35
const LAMP_REACH_PED = 180         // corridor front radius for pedestrians (px)
const LAMP_REACH_CAR = 300         // corridor front radius for cars (px)
const LAMP_REACH_BEHIND_PED = 260  // safety rear margin for pedestrians (px)
const LAMP_REACH_BEHIND_CAR = 200  // safety rear margin for cars (px)
const MAX_VISUAL_BRI = 0.58        // multiplicative scale: brightness × this = visual (smooth, no dead zone)
```

### `FPV3D.tsx` (scene constants — desktop values, mobile in parentheses)

```ts
BLDG_COUNT = 23 (mob: 10), BLDG_SPACING = 22m, BLDG_DEPTH = 14m, BLDG_WIDTH = 11m
BLDG_X_L = -12.5m, BLDG_X_R = +12.5m
LAMP_COUNT = 46 (mob: 10) per side, LAMP_SPACING = 11m
TREE_COUNT = 11 (mob: 5) per side, TREE_SPACING = 48m
DASH_COUNT = 63 (mob: 20), DASH_SPACING = 8m
Stars = 280 (mob: 80)
PointLight: color 0xffd060, base intensity 18, distance 13m, decay 2
Animation: bri * 16 → PointLight.intensity
FogExp2 density: 0.006 (mob: 0.022)
Camera FOV: 72° min (auto widens on portrait), near: 0.1m, far: 300m (mob: 120m)
MAX_VISUAL_BRI = 0.68 (FPV internal; separate from CitySimulator's 0.58)
Lookahead scale: 8 m per lookahead unit × corridorSpeedMult
```

---

## Roadmap (in priority order, before the World Final)

1. ~~**Polish visual**~~ ✅ **Done**
2. ~~**Three.js Citizen View**~~ ✅ **Done**
3. ~~**Lisbon-scale preset**~~ ✅ **Done** — button in controls, scales all metrics to 70,000 lamps, €4M/year.
4. ~~**Live time-series chart**~~ ✅ **Done** — 60s ring buffer canvas chart with LumiNation amber area and always-on dashed line.
5. ~~**Mobile-friendly layout**~~ ✅ **Done** — full responsive CSS, mobile FPV optimizations (Lambert materials, reduced counts, no shadows), touch spawn, iOS Safari height fix.
6. ~~**Zoom / drone flyover**~~ ✅ **Done** — pinch + wheel zoom (0.4×–3×), extended city pre-generation, smooth easing, scroll/zoom guard, pinch-spawn fix.
7. **Isometric city upgrade** — convert flat top-down to isometric canvas rendering
   with building height, depth, wall-light corridor pooling. Plan in `docs/ISOMETRIC_PLAN.md`.
   Estimated effort: 3–5 focused sessions. Stops at Step 5 (wall light) are shippable.
8. **Cinematic / "Play story" mode** — auto-runs a 30-second scripted sequence
   ideal for stage use: quiet street → first pedestrian → corridor activates →
   metrics tick up → reset.
9. **Sound design (optional)** — subtle "lamp wake" tone when lamps activate.
   Toggleable; off by default for stage safety.
10. **Recordable fallback video** — capture the demo in OBS as backup if live
    demo breaks on stage.

---

## What I want from Claude when working in this repo

- Be realistic. Don't overclaim. If something is uncertain, say so.
- When suggesting features, keep "ships in <2 weeks" as a hard constraint.
- Prefer small, well-scoped edits over big rewrites.
- When changing the simulation, preserve the existing tunables structure at the
  top of `CitySimulator.tsx`.
- When adding UI elements, follow the existing brand: dark background, amber
  accent (`#FAC775`), thin borders, generous whitespace.
- If a request would risk breaking the live demo close to the deadline, flag it
  and suggest a safer alternative.
- Speak Portuguese with me when I write in Portuguese, English when I write in
  English.
- `FPV3D.tsx` **is tracked by git** — changes are versioned normally and
  `git checkout` can revert it. Still, be careful before making large changes.
- Mobile and desktop are both production targets. Any new feature must consider both.
- The `isMob` detection in `FPV3D.tsx` is done inside the `useEffect` closure
  (not from the `useIsMobile` hook) because the hook's React state isn't reliably
  available at WebGL init time. Keep this pattern.
