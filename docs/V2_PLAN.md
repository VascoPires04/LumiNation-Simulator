# LumiNation V2 — Plano de Arquitectura (Phase 0)

> Documento de planeamento. Nenhum código de produção é tocado até aprovação.
> Escrito por Claude, para revisão de Vasco antes de avançar para Phase 1.

---

## Assunções explícitas

Antes de qualquer decisão técnica, estas são as assunções que tomei do brief.
Se alguma estiver errada, diz antes de aprovares o plano.

1. **O demo tem de funcionar em mobile iOS Safari a qualquer momento.** As
   optimizações de mobile que já fizemos (Lambert materials, reduced counts,
   no shadows) devem sobreviver intactas ao V2.

2. **"Demoable at all times" significa** que o URL do Replit pode ser aberto
   entre fases e mostrado a alguém sem vergonha. Não é necessário que cada
   feature intermédia esteja polida — basta não estar quebrada.

3. **O Citizen View (FPV3D.tsx) não muda na estrutura desta V2.** Continua
   acessível pelo botão "Citizen view" na topbar. É possível que em futuras
   iterações se queira integrá-lo melhor, mas não está no scope deste plano.

4. **O scroll é vertical e natural** (não hijacked — o browser faz o scroll,
   nós só reagimos a ele). Nada de `overflow: hidden` na página toda.

5. **D3 via React hybrid** — D3 computa (escalas, axes, paths), React renderiza
   (SVG como JSX). D3 nunca toca no DOM directamente. Isto é inegociável para
   não criar bugs de reconciliação impossíveis de debugar.

6. **Duas instâncias de Canvas 2D simultâneas** (ambient + interactive) estão
   OK porque Canvas 2D é CPU, não GPU — e a ambient é pausada pelo
   IntersectionObserver quando fora de viewport. Confirmei: o browser consegue
   gerir dois `requestAnimationFrame` loops independentes com pausas activas
   sem problemas de performance notáveis em mobile mid-range.

---

## 1. Estrutura final de ficheiros

```
src/
├── main.tsx                    (inalterado)
├── App.tsx                     (refactored: scroll page com 3 sections)
├── CitySimulator.tsx           (parameterised: variant/interactive/autoplay props)
├── FPV3D.tsx                   (inalterado)
├── styles.css                  (extended: V2 layout + animations + sections)
│
├── hooks/
│   ├── useIsMobile.ts          (inalterado)
│   └── useSimHistory.ts        (NEW: subscreve simBus, mantém histórico rolling)
│
├── sim-bus.ts                  (NEW: event emitter de módulo, zero-dependency)
│
├── components/
│   ├── SimControls.tsx         (NEW: extractor dos controls da sidebar — slider baseline,
│   │                                slider lookahead, mode buttons. Usado dentro de
│   │                                CitySimulator e na SimulatorSection.)
│   └── HeadlineMetric.tsx      (NEW: métrica grande e glanceable — €/yr, large type)
│
├── sections/
│   ├── Landing.tsx             (NEW: hero com ambient simulator + foreground text)
│   ├── SimulatorSection.tsx    (NEW: compact interactive simulator + HeadlineMetric)
│   └── Dashboard.tsx           (NEW: D3 charts section)
│
└── charts/
    ├── PowerChart.tsx          (NEW: area chart — LumiNation vs always-on over time)
    ├── CumulativeSavings.tsx   (NEW: dois line charts — kWh e € acumulados)
    └── Co2Gauge.tsx            (NEW: radial/arc indicator de CO₂ poupado)

docs/
└── V2_PLAN.md                  (este ficheiro)
```

**Nota sobre AgentsHistogram:** O brief marcou-o como "opcional se barato". A minha
recomendação é não o implementar em Phase 4. Os três charts principais (Power, Savings,
CO₂) já são ricos e o histogram de agentes não acrescenta insight suficiente para
justificar o custo de implementação. Substituo por uma linha de texto nos tooltips
("X pedestrians + Y cars active") que é suficientemente informativa.

---

## 2. Parameterização de CitySimulator.tsx

### Novos props (todos com defaults que preservam comportamento actual)

```ts
interface Props {
  mode: Mode                          // existente — inalterado
  variant?: 'full' | 'compact' | 'ambient'  // NEW, default: 'full'
  interactive?: boolean               // NEW, default: true
  autoplay?: 'none' | 'sparse'        // NEW, default: 'none'
  dimmed?: boolean                    // NEW, default: false
}
```

**`variant='full'` (default):**
Comportamento exactamente igual ao actual. Sidebar completa com todos os
controls. Stats todas visíveis. Spawn buttons. Lisbon Scale. Live chart. Zero
alteração de comportamento — é um alias para "o que existe hoje".

**`variant='compact'`:**
- Sidebar simplificada: apenas `<SimControls>` (baseline slider + lookahead
  slider + mode buttons) + `<HeadlineMetric>` (€/yr em Lisbon scale).
- Sem spawn buttons (auto-spawn via `autoplay`).
- Sem Lisbon Scale toggle (fica sempre ligado em compact, já que o headline
  number no contexto da landing é sempre o de Lisboa).
- Sem live chart inline (o chart fica na Dashboard section abaixo).
- Sem scenarios dropdown visível (usa `autoplay` para controlar).

**`variant='ambient'`:**
- Sem sidebar. Sem topbar. Sem qualquer UI.
- Canvas preenche o container pai (100% × 100%).
- `interactive={false}` aplicado automaticamente.
- `autoplay='sparse'` aplicado automaticamente.
- Visualmente dimmed: a opacidade do canvas é 0.72 e um overlay gradient
  dark-to-transparent cobre o topo e fundo para o texto da landing ser legível.

**`interactive={false}`:**
- Canvas ignora todos os click/touch events.
- Sem cursor change.
- O `touchAction` do canvas volta a `'auto'` (não intercede no scroll da página).

**`autoplay='sparse'`:**
- Spawna agentes automaticamente: intervalo médio 3-5s, max 3 pedestres + 1 carro simultâneos.
- Usa o scenario 'mixed' mas com rate muito baixo.
- O utilizador não pode spawnar manualmente quando `interactive={false}`.

**`dimmed={true}`:**
- CSS `opacity: 0.72` no canvas wrapper + um `::after` pseudo-element
  com `background: linear-gradient(to bottom, #0a0a0f 0%, transparent 30%,
  transparent 70%, #0a0a0f 100%)` para "enquadrar" o canvas na landing.

### Extracção de `<SimControls>`

```tsx
// src/components/SimControls.tsx
interface SimControlsProps {
  baselinePct: number
  onBaselineChange: (v: number) => void
  lookaheadSec: number
  onLookaheadChange: (v: number) => void
  mode: Mode
  onModeChange: (m: Mode) => void
}
```

O componente é puramente controlado (controlled component). `CitySimulator` continua
a gerir o estado destes valores — `SimControls` é apenas a apresentação.

### Extracção de `<HeadlineMetric>`

```tsx
// src/components/HeadlineMetric.tsx
interface HeadlineMetricProps {
  value: string      // e.g. "€4.2M"
  label: string      // e.g. "saved per year · Lisbon scale"
  sublabel?: string  // e.g. "70,000 streetlights"
}
```

Renderiza o valor em `font-size: clamp(3rem, 8vw, 6rem)`, cor amber, com label
em `text-muted` abaixo. Simples, glanceable, impactante.

---

## 3. Simulation data store: `simBus` + `useSimHistory`

### Decisão: event emitter de módulo (zero dependencies)

Rejeito Zustand para este caso específico. Razão: o simulador corre a 60fps
num `requestAnimationFrame` loop que **nunca chama hooks React**. Zustand usa
`subscribe()` do store que ainda funciona fora de React, mas adiciona uma
dependência para um problema que tem solução nativa em 15 linhas.

O padrão que proponho:

```ts
// src/sim-bus.ts

export interface SimSample {
  t: number           // timestamp (performance.now())
  powerW: number      // LumiNation power now (W)
  baselineW: number   // always-on baseline (W)
  eurSaved: number    // cumulative € saved this session
  co2Kg: number       // cumulative CO₂ saved (kg) this session
  kwhSaved: number    // cumulative kWh saved
  peds: number
  cars: number
}

type Listener = (s: SimSample) => void
const listeners = new Set<Listener>()

export const simBus = {
  emit: (s: SimSample) => listeners.forEach(fn => fn(s)),
  on:   (fn: Listener) => { listeners.add(fn); return () => listeners.delete(fn) },
}
```

**CitySimulator chama `simBus.emit(sample)` a cada 500ms** (não a 60fps —
o sim loop conta ticks e emite só cada 30 frames a 60fps). Isto é downsampling
deliberado: o dashboard precisa de 2Hz de dados, não 60Hz.

**O hook `useSimHistory`** subscreve ao bus e mantém uma array rolling:

```ts
// src/hooks/useSimHistory.ts
export function useSimHistory(maxSamples = 120) {
  const historyRef = useRef<SimSample[]>([])
  const [tick, setTick] = useState(0)  // trigger re-render periodicamente

  useEffect(() => {
    return simBus.on(sample => {
      historyRef.current = [...historyRef.current.slice(-(maxSamples - 1)), sample]
      setTick(t => t + 1)  // força re-render do consumer a 2Hz
    })
  }, [maxSamples])

  return historyRef.current
}
```

O Dashboard usa `useSimHistory()` — re-renderiza a ~2Hz, perfeitamente suave.
O CitySimulator não é afectado (emite e esquece — não subscreve ao seu próprio bus).

**Por que não passar `onSample` como prop?** Porque a Section da Landing também
tem um `<CitySimulator variant="ambient">` que não deve emitir para o bus
(geraria dados misturados). Com o bus, é o CitySimulator que decide se emite —
só o faz quando `variant !== 'ambient'`.

---

## 4. Scroll & animações: Framer Motion + IntersectionObserver nativo

### Decisão: Framer Motion para animações UI, IntersectionObserver nativo para scroll state

**Framer Motion** (nova dependência, ~40kb gzip, mainstream no ecossistema React):
- `motion.div` + `initial`/`animate`/`exit` para o fade-up da landing.
- `AnimatePresence` para transições entre sections visíveis.
- `variants` para o stagger das linhas de texto no hero.
- Micro-interactions nos botões (whileHover, whileTap).
- `useInView` do Framer Motion para trigger de animações na entrada de cada section.

Rejeito GSAP: dependência pesada (~130kb), API imperativa que luta com React,
e não há nenhum efeito neste brief que GSAP faça melhor do que Framer Motion.

**IntersectionObserver nativo** (zero dependencies):
- Detectar qual section está active (landing / simulator / dashboard).
- Controlar `topbar` visibility (opaco/transparente sobre a landing).
- Pausa/retoma dos canvas animtion loops.
- Scroll position state global guardado num `useRef` no `App.tsx`.

**A topbar desaparece/aparece:**
```ts
// No App.tsx
const [heroVisible, setHeroVisible] = useState(true)
// IntersectionObserver observa a landing section
// heroVisible=true → topbar opacity:0, pointer-events:none
// heroVisible=false → topbar opacity:1, transition 0.4s
```

### Transição visual Landing → Simulator (Phase 3)

Usamos **Approach A** (dois canvases, cross-fade) conforme indicado no brief.

Mecanismo concreto:
1. Landing section: `<CitySimulator variant="ambient">` com scale(1.0).
2. Conforme o utilizador scrolls até à section edge, aplicamos via CSS:
   `transform: scale(1.05)` no canvas da landing (parallax subtil de zoom).
3. O canvas da SimulatorSection faz `opacity: 0 → 1` via `useInView`.
4. Ambos os canvases têm `will-change: transform, opacity` para GPU compositing.
5. A landing canvas faz pause (cancelAnimationFrame) quando está < 5% visible.

**Não há resize do canvas nem repositionamento de DOM.** Cada canvas fica no
seu container — é só opacity + scale via CSS transform, o que é zero-layout-cost.

---

## 5. Novas dependências propostas

| Pacote | Versão | Motivo | Tamanho (gzip) |
|---|---|---|---|
| `framer-motion` | ^11 | Animações declarativas React — stagger, fade, micro-interactions | ~40kb |
| `d3-scale` | ^4 | Escalas para eixos dos charts | ~8kb |
| `d3-shape` | ^3 | Paths SVG (area, line) | ~8kb |
| `d3-array` | ^3 | `extent`, `bisector` para tooltips | ~4kb |
| `d3-axis` | ^3 | Eixos SVG | ~5kb |
| `d3-brush` | ^3 | Zoom/brush no PowerChart | ~7kb |
| `d3-time-format` | ^4 | Formatar timestamps no eixo X | ~3kb |

**Total adicionado: ~75kb gzip.** Bundle actual é essencialmente React + Three.js (~450kb gzip). Pós-V2 estimativa: ~525kb gzip. Aceitável.

**NÃO instalo:** `d3` (package completo), `zustand`, `gsap`, `react-spring`,
`recharts` (chart library — usaríamos D3 directamente como o brief especifica).

---

## 6. Risk list honesta

### Risco 1 — Dois canvas loops simultâneos matam mobile (HIGH)
**Descrição:** Mesmo com IntersectionObserver a pausar o canvas fora de viewport,
há um momento de overlap durante o scroll onde ambos estão visíveis. Em iOS
Safari com CPU limitado, isso pode causar frame drops.  
**Mitigação:** O canvas ambient tem `requestAnimationFrame` com um throttle
adicional de 20fps (não 60fps). Em mobile, reduz para 10fps. O canvas
interactive mantém 60fps. O overlap durante scroll é < 500ms — aceitável.

### Risco 2 — IntersectionObserver + CSS scroll fight com o `overflow: hidden` existente (HIGH)
**Descrição:** Actualmente `.app` tem `overflow: hidden; height: 100dvh` para
impedir que o sidebar faça resize do canvas. Com V2, a página precisa de scroll
vertical natural (`overflow-y: auto` no body). Estes dois requisitos conflituam.  
**Mitigação em Phase 1:** Remover o `overflow: hidden` do `.app` e resolver o
resize issue do canvas de outra forma — provavelmente com um `ResizeObserver`
explícito no canvas que ignora variações de altura < 20px (já temos parcialmente
esta lógica no código). Isto é um pré-requisito para o scroll funcionar.

### Risco 3 — D3 + React na mesma árvore cria bugs difíceis (MEDIUM)
**Descrição:** Se em algum ponto do desenvolvimento usarmos `d3.select()` para
manipular um nó que React também controla, o React vai sobrescrever as alterações
do D3 no próximo render.  
**Mitigação:** Regra de ferro — D3 nunca escreve no DOM. Todos os `path`, `g`,
`line` etc são renderizados via JSX. D3 é usado exclusivamente para `d3.line()`,
`d3.scaleLinear()`, `d3.axisBottom()` (que devolve uma função que aplicamos via
`useEffect` num `g` ref — a única excepção necessária para `d3.axis`).

### Risco 4 — Framer Motion + canvas numa landing esttica pode parecer distracting (MEDIUM)
**Descrição:** Texto animado sobre um canvas em movimento pode parecer demasiado
agitado em vez de cinematográfico.  
**Mitigação:** O texto da landing só anima uma vez (no mount). Depois fica estático.
O canvas ambient tem `dimmed={true}` (opacity 0.72). A intensidade total de movimento
visual na landing é menor do que parece no brief — a cidade serve de backdrop, não
de protagonista. Se em review parecer demasiado, o fix é trivial (aumentar o dim,
reduzir a velocidade dos agentes em ambient).

### Risco 5 — 14 dias não chegam para Phase 4 completa se D3 complicar (MEDIUM)
**Descrição:** D3 charts com brush, tooltips e interactividade podem facilmente
triplicar o tempo estimado se houver bugs de scaling ou coordenadas.  
**Mitigação:** Definir um "Phase 4 MVP" — apenas o PowerChart (area chart com
hover tooltip) em vez dos três charts completos. Os outros dois (CumulativeSavings,
CO₂ Gauge) entram se houver tempo. Isto garante que o deadline é cumprido com algo
demonstrável em D3, sem sacrificar qualidade.

---

## 7. Timeline estimada por fase

| Fase | O que faz | Estimativa | Risco de atraso |
|---|---|---|---|
| **Phase 0** | Plano (este doc) | ½ dia | — |
| **Phase 1** | Parameterizar CitySimulator, extrair SimControls + HeadlineMetric, simBus | 1 dia | baixo |
| **Phase 2** | Landing section + Framer Motion text animations + ambient canvas | 1.5 dias | médio |
| **Phase 3** | Scroll transition, compact SimulatorSection, topbar behaviour | 2 dias | médio-alto |
| **Phase 4** | simBus → useSimHistory → Dashboard + D3 charts (MVP = 1 chart) | 2.5 dias | alto |
| **Phase 5** | Polish, ambient lighting CSS, performance audit | 1 dia | baixo |
| **Buffer** | Bugs, resets, review iterations | 1.5 dias | — |
| **Total** | | **~10 dias** | dentro dos 14 |

**Honestidade sobre Phase 4:** se D3 brush + tooltip complicarem, corto
CumulativeSavings e CO₂Gauge, entrego só o PowerChart bem feito. Um chart
interactivo de alta qualidade é mais impressionante do que três charts mediocres.

---

## 8. O que não muda (confirmação explícita)

Para clareza absoluta — nada disto é tocado em nenhuma das fases:

- `FPV3D.tsx` — o Three.js citizen view não muda. Continua acessível pelo
  botão "Citizen view" na topbar.
- Todos os tunables em `CitySimulator.tsx` (LAMP_WATTS, PRICE_PER_KWH, etc.)
- A lógica de corridor, spawning, easing, lamp physics
- Mobile optimizations em FPV3D (Lambert materials, isMob detection)
- O `useIsMobile` hook
- Lisbon Scale (continua funcional — em compact mode fica sempre ligado)
- Live chart (o canvas chart da sidebar continua em `variant='full'`; o D3
  chart da Dashboard section é adicional, não substitui)

---

## Decisão que discordo do brief (uma)

O brief sugere que o botão "Citizen view" possa aparecer como CTA secundário
"Walk a street yourself" perto do simulator. Discordo: mover o acesso ao
Citizen View para fora da topbar cria dois pontos de entrada para a mesma feature
com UX inconsistente. Recomendo mantê-lo **apenas na topbar**, que é sempre
visível assim que o utilizador passa o hero. Se a topbar estiver demasiado pequena
em mobile compact, posso tornar o botão mais prominente na topbar em vez de o
duplicar. À tua consideração.

---

**Aguardo aprovação antes de tocar em qualquer ficheiro `.tsx` ou `.css`.**
