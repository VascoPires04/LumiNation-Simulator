# LumiNation City Simulator

Live interactive simulator of the LumiNation adaptive light corridor.
Built for Red Bull Basement Portugal 2026 → World Final, Silicon Valley.

**Stack:** React 18 + TypeScript + Vite. No backend. Everything runs in the browser.

---

## 1. Quick start (run on your machine)

You need **Node.js 18 or newer**. Check with:
```bash
node -v
```

If you don't have Node, install it from https://nodejs.org (LTS version) or via `nvm`.

Then, in this folder:

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).
Edits to files in `src/` hot-reload automatically.

---

## 2. Project structure

```
lumination-simulator/
├── package.json          ← dependencies and scripts
├── vite.config.ts        ← Vite config (don't usually touch)
├── tsconfig.json         ← TypeScript config
├── index.html            ← page title, meta tags
└── src/
    ├── main.tsx          ← entry point (boots React)
    ├── App.tsx           ← top bar, mode buttons, footer
    ├── CitySimulator.tsx ← all simulation logic (the big file)
    └── styles.css        ← global styles + LumiNation brand
```

**Most of your edits will be in `CitySimulator.tsx` and `styles.css`.**

---

## 3. Things you'll likely want to tweak

All key tunables are at the top of `CitySimulator.tsx`:

```ts
const LAMP_WATTS = 80              // wattage per lamp at full brightness
const PRICE_PER_KWH = 0.15         // €/kWh for public lighting
const CO2_PER_KWH = 0.25           // kg CO₂ per kWh (EU grid avg)
const HOURS_PER_YEAR_NIGHT = 4100  // night hours per year
const PED_SPEED = 1.4              // m/s walking speed
const CAR_SPEED = 11               // m/s (~40 km/h)
const LAMP_REACH_PED = 120         // pedestrian corridor radius (pixels)
const LAMP_REACH_CAR = 200         // car corridor radius (pixels)
```

To change brand colors → `src/styles.css` → `:root` variables.
To change layout (sidebar width, breakpoints) → `src/styles.css` → `.main`.
To change copy on the top bar → `src/App.tsx`.

---

## 4. Build for production

```bash
npm run build
```

Output lands in `dist/`. That's a static site — you can host it anywhere.

To preview the production build locally:
```bash
npm run preview
```

---

## 5. Deploy to Vercel (recommended, ~5 minutes)

### Option A — via GitHub (best for ongoing iteration)

1. Create a new GitHub repo (private or public, your call).
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/lumination-simulator.git
   git push -u origin main
   ```
3. Go to https://vercel.com → "Add New Project" → import your repo.
4. Vercel auto-detects Vite. Just click **Deploy**.
5. You'll get a URL like `lumination-simulator.vercel.app`.
6. Every `git push` to main triggers an automatic redeploy.

### Option B — drag-and-drop (no Git needed)

1. `npm run build`
2. Go to https://vercel.com/new → drag the `dist/` folder onto it.
3. Done. Note: no automatic redeploys this way.

### Custom domain

In Vercel → project settings → Domains → add e.g. `sim.lumination.com`.
Vercel gives you DNS records to point at it.

---

## 6. Deploy to Netlify (alternative)

Same idea — connect your GitHub repo at https://app.netlify.com.
Build command: `npm run build`. Publish directory: `dist`.

---

## 7. Tips for the World Final

- **Record a screen capture of the simulator working before you fly.**
  If wifi or the laptop misbehaves, you play the video. Never present a live
  demo without a fallback.
- **Test on the actual presentation laptop.** Especially the canvas — high-DPI
  scaling can behave differently on Mac vs Windows.
- **Bookmark the simulator URL on your phone** so you can pull it up after
  the pitch when judges ask follow-up questions.
- **Run offline.** This site has no API calls — once the page loads, no
  internet is needed.

---

## 8. Common gotchas

- **"npm install" fails:** make sure your Node version is 18+. `nvm use 18` if needed.
- **Canvas looks blurry:** the device-pixel-ratio handling assumes a normal
  display. If you're on a 4K external, it should still look sharp.
- **TypeScript errors after editing:** save the file; Vite re-checks. Real
  errors show in the terminal where `npm run dev` is running.

---

Good luck in Silicon Valley.
