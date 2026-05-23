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

**Stack:** React 18 + TypeScript + Vite + Three.js (^0.184.0). No backend. All client-side.
**Published:** Replit (public URL). All files tracked by git including `FPV3D.tsx`.

**Files of interest:**
- `src/App.tsx` — shell: topbar with 4 mode buttons, renders `<CitySimulator>`, footer.
- `src/CitySimulator.tsx` — all simulation logic (city layout, agents, lamps, physics,
  drawing, scenarios, Lisbon scale, live chart). All key tunables are at the top.
- `src/FPV3D.tsx` — Three.js Citizen View (~1750 lines). Completely independent
  from the Canvas 2D system; receives simulation state as React refs via props.
- `src/hooks/useIsMobile.ts` — `window.matchMedia` hook, breakpoint 768px.
- `src/styles.css` — global styles + LumiNation brand tokens + full mobile layout.
- `SIMULATION_VALUES_RESEARCH_REPORT.txt` — research on Portuguese energy values.

---

## Site flow & screens

The app is a single page. No routing. `App.tsx` holds a `mode` state that switches
what `CitySimulator.tsx` renders (and whether `FPV3D.tsx` is mounted).

### Top bar (always visible)
- Left: amber "L" brand mark (glowing box-shadow) + "LumiNation" heading + tagline
  "The adaptive light corridor · live simulator"
- Right (desktop) / below brand (mobile 2×2 grid): 4 mode buttons

### 4 mode buttons → 4 screens

**1. LumiNation** (default, `mode='lumination'`)
- 2D top-down canvas: 3×3 city grid, dark night palette.
- Adaptive corridor active: lamps near pedestrians/cars illuminate ahead, dim behind.
- Communication mesh lines between adjacent lamps, opacity reacts to brightness.
- Sidebar visible (right on desktop, top on mobile).

**2. Always-on** (`mode='baseline'`)
- Same 2D canvas but all lamps rendered at `MAX_VISUAL_BRI` permanently.
- Useful to show the contrast: "this is what cities do today."

**3. Compare** (`mode='compare'`)
- Split-screen: left half = LumiNation, right half = Always-on.
- Same simulation state drives both halves — direct side-by-side comparison.
- Sidebar visible.

**4. Citizen view** (`mode='fpv'`)
- Full `FPV3D.tsx` Three.js scene mounts; canvas is hidden.
- First-person walk down a city street at night, corridor of light ahead of you.
- Glassmorphic overlay with: Walk / Jog / Sprint buttons + Citizen Dashboard stats.
- Sidebar still visible below on mobile (metrics, controls).

### Sidebar (right on desktop, bottom on mobile — always shown except in fpv on some layouts)

**Controls card:**
- Baseline brightness slider (15–100%)
- Lookahead time slider
- Scenario selector: Manual / Quiet residential 3am / Busy avenue 8pm / Mixed 11pm
- Spawn buttons: "Spawn Pedestrian" / "Spawn Car" (desktop), tap-mode toggle (mobile)
- **Lisbon Scale** toggle button — multiplies all displayed metrics by 70,000/lampCount
  to surface the €4M/year headline figure for Lisbon's 70,000 streetlights.
- Pause / Resume / Clear buttons

**Metrics card:**
- Power now (W or kW or MW with Lisbon scale)
- % of always-on power
- Session kWh saved
- Annual € savings (projected)
- Annual CO₂ savings (kg or t)
- Live pedestrian + vehicle counts

**Live power chart (canvas element):**
- 60-second ring buffer (120 entries × 0.5s) drawn each time stats update.
- Amber filled area = LumiNation power over time.
- Dashed white line = always-on reference.
- Y axis: 0 → full power. X axis: last 60 seconds.

### Footer (always visible)
`LumiNation · Red Bull Basement Portugal 2026 · Instituto Superior Técnico` + `v0.1 · early prototype`

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
6. **Cinematic / "Play story" mode** — auto-runs a 30-second scripted sequence
   ideal for stage use: quiet street → first pedestrian → corridor activates →
   metrics tick up → reset.
7. **Sound design (optional)** — subtle "lamp wake" tone when lamps activate.
   Toggleable; off by default for stage safety.
8. **Recordable fallback video** — capture the demo in OBS as backup if live
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
