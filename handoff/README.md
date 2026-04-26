# Ontheground · Design System Handoff

**Version 0.4 · Sans + Serif · April 2026**

A small package for any developer (human or AI) implementing the Ontheground
brand. Spirit first: paper tones, the rust dot, two type families with clear
roles. No frameworks required — these are plain CSS variables + HTML snippets.

---

## What's in this folder

```
handoff/
├── tokens.css                ← CSS variables, single source of truth
├── tokens.json               ← Same tokens, machine-readable
├── tailwind.preset.cjs       ← Drop into tailwind.config.js
├── components.css            ← Buttons, tags, fields, type, mobile
├── handoff-overview.html     ← Visual handoff document (open in browser)
├── examples/
│   ├── article.html          ← Long-form article reference
│   ├── card.html             ← Story card reference
│   └── mobile-shell.html     ← Mobile shell reference
└── README.md                 ← This file
```

---

## Quick start

### Plain HTML / CSS

```html
<link rel="stylesheet" href="handoff/tokens.css">
<link rel="stylesheet" href="handoff/components.css">

<button class="btn btn--primary">Open story</button>
<span class="dateline">Kupiansk · 14 Mar 2026 · 04:42</span>
<h1 class="ty-h1">A trench near Kupiansk<span style="color:var(--accent)">.</span></h1>
```

### Tailwind

```js
// tailwind.config.js
const otg = require('./handoff/tailwind.preset.cjs');
module.exports = { presets: [otg], content: ['./src/**/*.{html,jsx,tsx}'] };
```

```jsx
<h1 className="font-sans text-h1 tracking-display">
  We believe in telling true stories<span className="text-accent">.</span>
</h1>
```

### Design-token consumers (Style Dictionary, Specify, etc.)

Point them at `tokens.json` — W3C Design Tokens shape.

---

## Type system

| Family            | Job            | Used for                                                |
|-------------------|----------------|---------------------------------------------------------|
| **Archivo**       | The voice      | Display, headlines, subheads, labels, buttons, nav      |
| **Source Serif 4**| The body       | Lead, body, long-form, captions, blockquotes            |
| **JetBrains Mono**| The record     | Datelines, timestamps, coordinates, audio/video timers  |

Italic emphasis is always **serif italic inside a sans headline** — that's how the
"true stories" flourish works. See `examples/card.html`.

The dot `<span class="dot" style="color:var(--accent)">.</span>` after the
wordmark and after key headlines is the pin-on-the-map. Treat it as part of the
voice, not decoration.

---

## Color rules

- Paper tones recede; **never** use accent as a large background.
- `accent` (rust) is for: hover, the dot, one emphasized word, focus rings.
- `ink` for primary text; `ink-2/3/4` step down. Never use pure black.
- Two palettes: **Ink & Paper** (default) + **Clay & Stone** (features, photo).
  Switch with `<html data-palette="clay">`.

---

## Mobile rules of engagement

The mobile site keeps the spirit but makes some adjustments:

- Tap targets **≥ 44px** (`--tap-min`).
- Content margin **20px** (`--m-margin`); on desktop it's 48px.
- Display sizes step down: H1 max ≈ 56px on mobile (vs 96px desktop).
- Audio always sticky bottom; bottom tab bar 4-up; never both at once with the
  iOS home indicator overlapping.
- Photo essays go full-bleed, 4px gutter, vertical scroll. No carousels.

See `examples/mobile-shell.html` and the live prototype at
`Ontheground Mobile.html`.

---

## Principles (the only rule)

1. **Image and sound are the work.** Frame before headline.
2. **Proximity over scale.** Specific place, specific person.
3. **Time is a credit.** Surface the record.
4. **Tactile, not slick.** Warm paper, soft grain. No gradients, no glow.
5. **One thousand no's for every yes.** Every element earns its place.

If a design choice doesn't serve one of these, it doesn't belong.

---

## Contact

Marcel Vink · Ontheground · Rotterdam
hello@ontheground.studio

— v0.4 · April 2026
