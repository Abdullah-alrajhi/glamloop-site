# GlamLoop — Marketing Site

A static, lightweight bilingual (Arabic-first / English) marketing landing page for
**GlamLoop**, the Saudi P2P dress resale marketplace.

It reuses the exact design tokens, fonts, colors, and component styles extracted from
the product prototype so it reads as visually identical, while being a standalone,
backend-free site.

## Stack

- **React 19 + Vite** (same toolchain as the prototype)
- No backend, no data storage — the "Register your interest" form only `console.log`s
  and shows a success state.

## Design tokens

Extracted verbatim from the prototype into `src/theme.js`:

- Font: **Tajawal** (Google Fonts, weights 300–900)
- Core colors: ink `#1A1A1A`, bg `#FAFAF7`, surface `#FFFFFF`, buyTint `#F0EDE7`,
  sellTint `#F1E9E9`, gold `#C9A75A`
- Pill buttons (radius 14), rounded cards (radius 14–22), pill chips (radius 999)

## Bilingual content & RTL/LTR

All copy lives in `src/content.js` under `CONTENT.ar` and `CONTENT.en` with identical
structure. The language switcher (AR/EN toggle in the header):

- swaps every string, and
- flips `document.documentElement.dir` between `rtl` (Arabic) and `ltr` (English).

Layout mirrors automatically because it uses CSS logical properties
(`paddingInline`, `insetInlineStart`, `textAlign: 'start'`) and flexbox.

The `[SAR]` token in a string renders as the riyal glyph in Arabic and the text
`SAR` in English.

## Sections (top → bottom)

1. **Header** — centered logo, language switcher, "Register your interest" button
   (opens a Name/Email modal → success state), and a "Try the live demo" button
   linking to <https://demo.glamloop.app> (new tab).
2. **Hero / Why GlamLoop** — buy/sell toggle with benefit cards + "Buying steps" /
   "Selling steps" modals.
3. **Sell section** — "Sell your dresses with us" hero, the 5-step "How the platform
   works" explainer, and the "Start listing now" CTA.
4. **FAQ** — one deduplicated list (trust/registration, shipping coverage, commission,
   shipping method, dispute policy).
5. **Footer** — Saudi Business Center badge, CR number, payment icons
   (mada / Apple Pay / Visa / Mastercard), social icons.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # → dist/
npm run preview
```

## Deploy to Vercel (new, separate project)

This is a **separate** Vercel project from the existing `demo.glamloop.app` deployment,
intended for the **root domain `glamloop.app`**.

1. Push this folder to a new GitHub repo (e.g. `glamloop-site`).
2. In Vercel → **Add New… → Project** → import that repo.
3. Framework preset: **Vite** (auto-detected via `vercel.json`).
   - Build command: `vite build` · Output dir: `dist`
4. Deploy.
5. In the new project's **Settings → Domains**, add `glamloop.app` (and `www.glamloop.app`
   redirecting to the apex). Point the domain's DNS at Vercel as instructed there.

> Keep this project distinct from the `demo.glamloop.app` project — the demo subdomain
> stays attached to the existing project; only the apex `glamloop.app` points here.

Or via CLI:

```bash
npm i -g vercel
vercel          # first run links/creates a NEW project — do NOT link to the demo project
vercel --prod
```
