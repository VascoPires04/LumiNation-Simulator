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

**Stack:** React 18 + TypeScript + Vite. No backend. All client-side.

**Files of interest:**
- `src/CitySimulator.tsx` — all simulation logic (city layout, agents, lamps,
  physics step, drawing, scenarios, FPV view). All key tunables are at the top.
- `src/App.tsx` — top bar with mode buttons (LumiNation / Always-on / Compare /
  Citizen view) and footer.
- `src/styles.css` — global styles + LumiNation brand tokens.

**Currently implemented features:**

*City top-down view:*
- 3×3 city grid with horizontal and vertical streets, intersections, and now
  building blocks between streets (deterministic seeded layout, gradient fills,
  faint warm-lit windows on building faces).
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

*Citizen view (FPV — completely rebuilt):*
- Full perspective projection with `projX`/`projY` helpers and camera head-bob
  tied to stride animation.
- Deep indigo-black sky with ~40 deterministic stars.
- Road surface + left/right sidewalks rendered as perspective trapezoids.
  Scrolling curb lines, pavement joint marks, and dashed road centre markings
  all animate with the walker's position.
- 3D perspective buildings on both sides: side wall + front wall; 3×5 window
  grid per wall face — 15% of windows randomly lit in amber.
- Streetlight poles with lateral arm, visible downward light cone (linear
  gradient), elliptical ground pool, and bulb glow halo. All rendered via a
  painters-algorithm sort (furthest first; lamps after buildings at same depth).
- Lamp brightness in FPV tied to lookahead slider: corridor lamps inside
  `lookaheadZ` are at `MAX_VISUAL_BRI`; beyond that, fade linearly to baseline.
  Depth-fade prevents distant glow elements compounding into solid blocks.
- Soft radial vignette. Caption: "the corridor stays ahead — the citizen never
  notices."

*Shared:*
- Four view modes: LumiNation (default), Always-on, Compare (split-screen),
  Citizen view.
- Live metrics: power now (W), % of always-on, session kWh saved, projected
  annual €/CO₂ savings, pedestrian + vehicle counts.
- Scenarios: manual, quiet residential 3am, busy avenue 8pm, mixed 11pm.
- Controls: baseline brightness slider (15–100%), lookahead time slider, clear,
  pause/resume.

*UI / brand:*
- Darker base palette: `--bg: #050508`, `--bg-elev: #0e0e16`.
- 'Outfit' heading font added alongside 'Inter'; metric values use heading font
  at 26px/700 weight.
- Brand mark has a subtle amber box-shadow glow. Larger corner radii (12/16px).

---

## Tunables (top of `CitySimulator.tsx`)

```ts
const LAMP_WATTS = 80              // wattage per lamp at full
const PRICE_PER_KWH = 0.15         // €/kWh public lighting
const CO2_PER_KWH = 0.25           // EU grid avg
const HOURS_PER_YEAR_NIGHT = 4100  // night hours/year
const PED_SPEED = 1.4              // m/s
const CAR_SPEED = 11               // m/s (~40 km/h)
const METERS_PER_PIXEL = 0.35
const LAMP_REACH_PED = 180         // corridor front radius for pedestrians (px)
const LAMP_REACH_CAR = 300         // corridor front radius for cars (px)
const LAMP_REACH_BEHIND_PED = 260  // safety rear margin for pedestrians (px)
const LAMP_REACH_BEHIND_CAR = 400  // safety rear margin for cars (px)
const MAX_VISUAL_BRI = 0.85        // visual brightness cap (both modes equal at peak)
```

---

## Roadmap (in priority order, before the World Final ~2 weeks)

1. ~~**Polish visual**~~ ✅ **Done** — buildings, atmospheric vignette, smoother
   halos, reactive mesh, refined typography, darker palette, Outfit font.
   Citizen view fully rebuilt in 3D perspective with buildings, windows, poles,
   light cones, ground pools, head-bob, stars.
2. **Lisbon-scale preset** — a button that multiplies displayed numbers to
   represent 70,000 lamps and surfaces the headline €4M/year savings figure.
3. **Live time-series chart** — last 60s of power consumption, with a shadow
   line showing always-on for comparison. Visually very powerful.
4. **Cinematic / "Play story" mode** — auto-runs a 30-second scripted sequence
   ideal for stage use: quiet street → first pedestrian → corridor activates →
   metrics tick up → reset.
5. **Sound design (optional)** — subtle "lamp wake" tone when lamps activate.
   Toggleable; off by default for stage safety.
6. **Recordable fallback video** — capture the demo in OBS as backup if live
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
