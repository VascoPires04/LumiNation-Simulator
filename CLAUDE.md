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

**Files of interest:**
- `src/CitySimulator.tsx` — simulation logic (city layout, agents, lamps,
  physics step, drawing, scenarios). All key tunables are at the top.
- `src/FPV3D.tsx` — Three.js Citizen View (1500+ lines). Completely independent
  from the Canvas 2D system; receives simulation state as React refs via props.
- `src/App.tsx` — top bar with mode buttons (LumiNation / Always-on / Compare /
  Citizen view) and footer.
- `src/styles.css` — global styles + LumiNation brand tokens.
- `THREEJS_FPV_ROADMAP.txt` — original implementation plan for the 3D FPV.
- `SIMULATION_VALUES_RESEARCH_REPORT.txt` — research on Portuguese energy values.

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
  darkens canvas edges. Both Always-on and LumiNation are capped at
  `MAX_VISUAL_BRI = 0.85` so visual comparison is fair.
- Lamp corridor logic: same-street lamps within [−reachBehind, lookaheadPx +
  reachAhead] are lit at 100%; cross-street lamps get a 50px intersection
  spillover glow. Asymmetric easing: fast warm-up (τ≈0.31s), slow dim-down
  (τ≈0.83s). Snaps to target when Δ < 0.01.
- Click anywhere on a street to spawn a pedestrian; shift+click for a car.
- Pedestrians drawn as walking figures with animated stride.
- Cars drawn pseudo-3D with body, windshield, headlight cones, tail lights.

### Citizen view (FPV — `src/FPV3D.tsx`, Three.js WebGL)

The Canvas 2D FPV has been fully replaced by a Three.js 3D scene. Key features:

**Scene & rendering:**
- `WebGLRenderer` with PCFSoftShadowMap, ReinhardToneMapping (exposure 1.0),
  antialias, pixelRatio capped at 2.
- `FogExp2(0x020a18, 0.009)` — subtle atmospheric depth haze.
- Scene background `0x020205` (near-black indigo).
- Single `AmbientLight(0x08080c, 0.05)` — extremely dim fill only.

**Ground & road:**
- Road: `PlaneGeometry(8, 800)`, `color: 0x0e0e0e` (neutral dark asphalt).
- Sidewalks: `PlaneGeometry(4.5, 800)` each side, `color: 0x181816`.
- Curb edges: `BoxGeometry(0.14, 0.14, 800)` at ±4.06m.
- White road centre dashes: 63 pooled `BoxGeometry(0.12, 0.01, 3.2)` boxes,
  `color: 0xe8e8e8`, recycled as camera advances.

**Sky:**
- 280 stars: `Points` geometry with `PointsMaterial({ fog: false })` (critical:
  fog:false prevents FogExp2 from occluding distant stars).

**Building pool (23 per side, 22m spacing):**
- Slot system — each building position is deterministically assigned one of four
  types via `seededRng`:
  - **`building`** (most common): 2 sub-buildings with varied heights, 10 WALL_COLORS
    (antique white → charcoal → terracotta → sage → ochre → teal → taupe),
    individual `PlaneGeometry` glass window panes (lit: emissive amber; unlit:
    dark glass metalness 0.9), doors with frame + handle, shopfront glazing, awnings.
  - **`park`**: grass ground plane, `DodecahedronGeometry` trees with bark trunk,
    bench, wall-mounted LED lamp (registered as AdaptiveLamp).
  - **`playground`**: grass, wooden fence rails, sandbox (frame + sand plane),
    slide, swing set (A-frame, chains, seat), globe lamp post (AdaptiveLamp).
  - **`parking`**: asphalt, painted parking lines, low-poly parked cars
    (body + cab + 4 wheels + headlights), wall LED (AdaptiveLamp).
- Recycling: when group.position.z > 240, teleport to far end, reassign slot.

**Streetlamp pool (46 total, 11m spacing, staggered ±5.5m per side):**
- Per lamp: pole (`CylinderGeometry`) + arm (`BoxGeometry`) + fixture hood
  (`CylinderGeometry`) + bulb (`SphereGeometry` with emissive) + `PointLight`
  + soft radial pool (canvas texture, `AdditiveBlending`).
- `PointLight(0xffd060, 18, 13, 2)` — warm amber, distance 13m, decay 2.
- Corridor brightness: `bri * 16` → PointLight.intensity.
- Shadows cast on road surface.

**Tree pool (11 per side, 48m spacing):**
- `DodecahedronGeometry` foliage + cylinder trunk, recycled like buildings.

**Bollards:**
- Stone-gray bollards placed at curb edges between lamps.

**AdaptiveLamps system:**
- Park/playground/parking lights register into `adaptiveLamps[]`.
- Each frame: intensity driven by same `getBri()` corridor function as streetlamps.

**Corridor brightness (`getBri()`):**
```ts
const lookaheadDist = lookaheadRef.current * 8.0 * currentSpeedMult
// distAhead = lamp's distance ahead of camera, corrected for yaw
if (distAhead >= 0 && distAhead <= lookaheadDist) → bri = MAX_VISUAL_BRI
else → fade to baselineRef.current * MAX_VISUAL_BRI
```
- Speed multiplier expands the corridor: faster walk → longer lit zone.

**Speed system:**
- Hold `Shift` → sprint (3× speed). Release → walk (1×).
- UI buttons: Walk (1.4 m/s) / Jog (2.5×) / Sprint (4×).
- `speedMult` syncs directly to 2D agent velocity so top-down and FPV stay in sync.

**Look behind:**
- Press `Space` or `B` → camera yaw rotates to 180° (smooth 6 rad/s), held 2s, auto-returns.
- `targetYawRef` / `currentYawRef` system; `getBri()` uses `Math.cos(currentYaw)` to
  correct distance-ahead calculation when looking back.

**Head-bob:**
- `camera.position.y = 1.7 + sin(stridePhase × 2π) × 0.04`
- `camera.position.x = sin(stridePhase × π) × 0.015`
- `stridePhase += dt × PED_SPEED × speedMult / 0.75`

**UI overlay (glassmorphic):**
- "Citizen Dashboard" panel: corridor length (m), walking speed (km/h), mode label.
- "Citizen Controls" panel: Walk / Jog / Sprint buttons, Look Behind button.
- Styled with `.fpv-overlay` CSS class (backdrop-filter blur, amber accents).

### Shared features

- Four view modes: LumiNation (default), Always-on, Compare (split-screen), Citizen view.
- Live metrics: power now (W), % of always-on, session kWh saved, projected
  annual €/CO₂ savings, pedestrian + vehicle counts.
- Scenarios: manual, quiet residential 3am, busy avenue 8pm, mixed 11pm.
- Controls: baseline brightness slider (15–100%), lookahead time slider, clear,
  pause/resume.

### UI / brand

- Darker base palette: `--bg: #050508`, `--bg-elev: #0e0e16`.
- 'Outfit' heading font alongside 'Inter'; metric values use heading font at 26px/700.
- Brand mark has a subtle amber box-shadow glow. Larger corner radii (12/16px).

---

## Tunables

### `CitySimulator.tsx` (top of file)

```ts
const LAMP_WATTS = 80              // wattage per lamp at full
const PRICE_PER_KWH = 0.15         // €/kWh public lighting
const CO2_PER_KWH = 0.13           // Portuguese grid (updated from EU avg 0.25)
const HOURS_PER_YEAR_NIGHT = 4100  // night hours/year
const PED_SPEED = 1.4              // m/s
const CAR_SPEED = 11               // m/s (~40 km/h)
const METERS_PER_PIXEL = 0.35
const LAMP_REACH_PED = 180         // corridor front radius for pedestrians (px)
const LAMP_REACH_CAR = 300         // corridor front radius for cars (px)
const LAMP_REACH_BEHIND_PED = 260  // safety rear margin for pedestrians (px)
const LAMP_REACH_BEHIND_CAR = 200  // safety rear margin for cars (px)
const MAX_VISUAL_BRI = 0.85        // visual brightness cap (both modes equal at peak)
```

### `FPV3D.tsx` (scene constants)

```ts
BLDG_COUNT = 23, BLDG_SPACING = 22m, BLDG_DEPTH = 14m, BLDG_WIDTH = 11m
BLDG_X_L = -12.5m, BLDG_X_R = +12.5m
LAMP_COUNT = 46 (23/side), LAMP_SPACING = 11m
TREE_COUNT = 11 per side, TREE_SPACING = 48m
DASH_COUNT = 63, DASH_SPACING = 8m
PointLight: color 0xffd060, base intensity 18, distance 13m, decay 2
Animation: bri * 16 → PointLight.intensity
FogExp2 density: 0.009
Camera FOV: 72°, near: 0.1m, far: 300m
Lookahead scale: 8 m/sec
```

---

## Roadmap (in priority order, before the World Final)

1. ~~**Polish visual**~~ ✅ **Done** — buildings, atmospheric vignette, smoother
   halos, reactive mesh, refined typography, darker palette, Outfit font.
2. ~~**Three.js Citizen View**~~ ✅ **Done** — full 3D WebGL scene with
   realistic buildings (4 slot types), streetlamps, trees, bollards, park/playground/
   parking areas, real PointLights, corridor brightness, speed system, look-behind,
   glassmorphic UI overlay.
3. **Lisbon-scale preset** — a button that multiplies displayed numbers to
   represent 70,000 lamps and surfaces the headline €4M/year savings figure.
4. **Live time-series chart** — last 60s of power consumption, with a shadow
   line showing always-on for comparison. Visually very powerful.
5. **Cinematic / "Play story" mode** — auto-runs a 30-second scripted sequence
   ideal for stage use: quiet street → first pedestrian → corridor activates →
   metrics tick up → reset.
6. **Sound design (optional)** — subtle "lamp wake" tone when lamps activate.
   Toggleable; off by default for stage safety.
7. **Recordable fallback video** — capture the demo in OBS as backup if live
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
- `FPV3D.tsx` is **not tracked by git** (appears as untracked in git status).
  This means `git checkout` cannot revert it — any undo must be done manually
  via Edit tool. Be extra careful before making large changes to this file.
