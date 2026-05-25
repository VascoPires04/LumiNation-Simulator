# Isometric City Upgrade — Implementation Plan

> Goal: replace the flat top-down city with an isometric projection that gives a
> real sense of depth, building height, and atmosphere — without destroying mobile
> performance or requiring a full rewrite.
>
> Chosen direction: **Canvas 2D isometric** (not Three.js). All drawing stays in
> the existing `<canvas>`, just with a coordinate transform applied. No new
> runtime dependencies. Mobile cost is a modest draw-call increase, not an extra
> WebGL context.

---

## Why isometric on Canvas 2D (not Three.js)

- Three.js already runs for FPV. A second WebGL context on mobile is a hard no.
- Canvas 2D isometric is deterministic, CPU-only, and very controllable.
- It gives the visual impression of 3D (height, shadows, depth) at ~1.5–2× the
  draw cost of the current flat view — acceptable on mobile with culling.
- The existing simulation data model (streets, lamps, buildings, agents) maps
  directly to isometric tiles with no logic change.

---

## Coordinate system

Standard isometric projection:

```
screen_x = (world_x - world_y) * TILE_W / 2
screen_y = (world_x + world_y) * TILE_H / 2
```

where `TILE_W : TILE_H = 2 : 1` (classic 2:1 iso ratio).

All world coordinates remain in the same pixel space as today. Only the
**draw functions** apply the transform — the simulation physics, agent positions,
and lamp logic are untouched.

A helper `isoProject(wx, wy)` returns `{sx, sy}` and is used everywhere drawing
happens. Zoom (`ctx.scale`) is applied on top, same as today.

---

## Step-by-step plan

### Step 1 — Add `isoProject` helper and toggle flag

**Files:** `CitySimulator.tsx`

- Add a `ISO_MODE = true` constant at the top (can be toggled to `false` to
  revert to flat view during development).
- Add `isoProject(wx: number, wy: number): {sx: number, sy: number}`.
- Add `ISO_TILE_W` and `ISO_TILE_H` constants (e.g. `ISO_TILE_W = 2`, `ISO_TILE_H = 1`
  — these scale with the existing `METERS_PER_PIXEL` factor).

**No visual change yet** — this step is pure plumbing.

---

### Step 2 — Convert road drawing to isometric

**Files:** `CitySimulator.tsx` → `drawRoad()` (or equivalent road section in
`drawCityTopDown`)

Roads in isometric look like flat parallelograms. For each street segment:

1. Compute the 4 corner points in world space.
2. Project each corner with `isoProject`.
3. Draw as a filled `Path2D` quad (not a `fillRect`).

Road layers (sidewalk border → asphalt → center highlight → dashes) all use the
same quad shape, drawn sequentially.

**Acceptance:** roads look like a grid of diamond/parallelogram tiles from above
at an angle. Intersections form a clean X.

---

### Step 3 — Convert buildings to isometric boxes

This is the step that creates the "3D city" feel.

Each building has a world-space bounding rect `{x, y, w, h}` and a height
`isoH` (assign during `layoutCity` — randomised per building, range e.g. 20–80
world-px equivalent).

Draw each building as **three visible faces**:

- **Top face** (roof): parallelogram, lighter shade of the wall color.
- **Left face** (west wall): parallelogram, medium shade.
- **Right face** (east wall): parallelogram, darkest shade (shadow side).

Paint order (back → front): buildings are sorted by `(world_x + world_y)`
descending so nearer buildings occlude farther ones correctly.

Add windows as small bright rectangles on the left and right faces, with the
same warm amber glow as today.

**Acceptance:** city looks like it has real building depth from a bird's-eye
isometric angle.

---

### Step 4 — Convert streetlamps to isometric poles

Each lamp has a world position `{x, y}`. In isometric:

1. Project `{x, y}` to screen.
2. Draw the pole as a thin vertical line (screen-space, no iso transform needed
   for vertical elements — just draw straight up from the projected base point).
3. Draw the lamp head as a small circle or diamond at the top.
4. The halo (radial gradient) stays in screen space, centered on the lamp head
   projected point. Radius scales with zoom, same as today.

The halo is the most important part visually — keep it exactly as-is, just move
its center to the projected lamp position.

**Acceptance:** lamps sit at street corners, poles have visible height, halos
pool realistically on the ground below them.

---

### Step 5 — Light pooling on building walls

This is the "remarkable" part that justifies the isometric upgrade.

When a lamp is bright, cast a warm cone of light upward on the **nearest
building wall face**:

- Identify the closest building face (left or right) to each lit lamp.
- Draw a soft radial gradient in amber (`rgba(250,199,117,α)`) on that face,
  centered at the base of the wall, fading up and outward.
- `α` scales with `lamp.brightness` — it appears and disappears with the
  corridor exactly like the ground halos do.

This makes the corridor activation visually dramatic: as an agent walks down the
street, you see amber light bloom on the building facades and fade away behind
them.

**Acceptance:** building walls glow when a lamp is active and go dark when the
lamp dims. The corridor is visible as a moving wave of wall-light.

---

### Step 6 — Convert agents (pedestrians + cars) to isometric

**Pedestrians:**
- The walking figure is already drawn from world `{x, y}`. Apply `isoProject` to
  the base position.
- Vertical elements (legs, torso, head) stay screen-space vertical — no iso
  transform on the Y axis of the figure itself, same as the lamp poles.
- Scale the figure slightly smaller to match the iso perspective.

**Cars:**
- Project the car center point to screen.
- The car body becomes an isometric box (top face + two side faces), same
  technique as buildings but smaller and driven by the agent's `angle`.
- Headlight cones project forward in iso space.

**Acceptance:** agents look grounded in the isometric world, not floating on a
flat plane.

---

### Step 7 — Isometric mesh lines (lamp-to-lamp communication)

The mesh lines between adjacent lamps currently draw as straight screen lines.
In isometric they should still connect lamp heads (projected positions) — no
change needed in logic, just ensure `isoProject` is applied to both endpoints
before drawing.

Opacity logic is unchanged.

---

### Step 8 — Trees in isometric

Trees are currently simple circles. In isometric:

- Draw a short pole (same as lamp pole technique).
- Draw the foliage as a stack of ellipses at increasing heights, getting smaller
  — gives the impression of a rounded tree crown seen from above-and-to-the-side.
- Cast a small shadow ellipse on the ground plane (dark transparent oval, offset
  slightly in the iso shadow direction).

---

### Step 9 — Depth sort all draw calls

Isometric requires painter's algorithm: draw back-to-front.

Sort all drawables by `(world_x + world_y)` before rendering each frame:
- Buildings (already sorted in Step 3).
- Trees.
- Agents (pedestrians and cars).
- Lamps (poles only — halos are drawn in a separate pass on top of everything).

Implement a single sorted draw list each frame. The sort is O(n log n) on ~100–
200 elements — negligible cost.

---

### Step 10 — Mobile performance audit

After Steps 1–9 work on desktop, profile on mobile:

- **Culling:** the existing `virtualBoundsRef` culling already skips off-screen
  elements — ensure it works in iso space (convert virtual bounds to iso screen
  bounds for the cull check).
- **Building faces:** on mobile, skip the right (shadow) face entirely — draw
  only top + left. Saves ~33% building draw calls.
- **Wall light pooling (Step 5):** on mobile, only draw wall light for lamps
  within 150px of the camera center. On desktop draw all visible.
- **Trees (Step 8):** on mobile, draw just a single ellipse (top view) instead
  of stacked crown — no poles, no shadow.
- Target: same 60fps on mid-range mobile as today.

---

### Step 11 — Compare mode in isometric

The split-screen compare mode draws left half and right half independently.
Each half applies its own `ctx.save() / ctx.restore()` with a `ctx.clipRect`
and the same iso transform centered on its half.

No structural change — the iso drawing functions are called twice with different
clip regions, same as the current flat compare mode.

---

### Step 12 — Atmospheric polish pass

Once the core isometric structure is solid:

- **Sky gradient:** subtle vertical gradient at the very top of the canvas
  (deep navy → black) to imply a horizon. Drawn before everything else.
- **Ground plane tint:** very faint blue-grey fill on the road/sidewalk faces
  (moonlight ambient).
- **Lamp corona:** when a lamp is at full brightness, add a tiny bright white
  point at the lamp head before the amber halo — mimics the actual LED point
  source visible at distance.
- **Intersection glow:** at road intersections where multiple lamps meet, blend
  their halos — the ground should be notably brighter at crossings when active.

---

## What does NOT change

- All simulation physics (`step()`, corridor logic, easing, `getBri()`).
- All tunables at the top of `CitySimulator.tsx`.
- The sidebar, metrics, power chart, Lisbon Scale toggle.
- FPV3D.tsx — completely unaffected.
- Mobile detection and `isMob` pattern.
- The zoom system (`ctx.scale` centered transform, `targetZoomRef` easing,
  `stageVisibilityRef` scroll guard, pinch handler).

---

## Suggested implementation order

| Priority | Step | Effort | Visual impact |
|----------|------|--------|---------------|
| 1 | Step 1 — helper + flag | XS | none |
| 2 | Step 2 — iso roads | S | medium |
| 3 | Step 3 — iso buildings | M | **high** |
| 4 | Step 4 — iso lamps | S | medium |
| 5 | Step 8 — iso trees | S | low |
| 6 | Step 5 — wall light | M | **very high** |
| 7 | Step 6 — iso agents | M | medium |
| 8 | Step 9 — depth sort | S | correctness |
| 9 | Step 7 — mesh lines | XS | low |
| 10 | Step 10 — mobile audit | M | perf |
| 11 | Step 11 — compare mode | S | correctness |
| 12 | Step 12 — polish | S | **high** |

Steps 1–5 + 9 deliver the "wow" moment. Steps 6–12 complete the picture.
Stopping after Step 5 is a valid shipping point if time is tight.

---

## Risk flags

- **Depth sort + agent movement:** agents move each frame, so the sort runs every
  frame. With <30 agents this is fine. If someone spawns 50+ agents the sort
  becomes O(50 log 50) ≈ trivial. No risk.
- **Compare mode clip:** `ctx.clipRect` needs to be set correctly before the iso
  transform. Test this early.
- **Touch spawn in iso:** the reverse iso transform (`worldFromScreen`) is needed
  to convert a tap position back to world coordinates for spawning. Add
  `isoUnproject(sx, sy)` alongside `isoProject` in Step 1 — it's the same math
  inverted.
- **Zoom + iso:** the existing `ctx.translate/scale` zoom wrapper still works —
  iso is just a change to the `drawX()` functions inside the wrapper. No conflict.
