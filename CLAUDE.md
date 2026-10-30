# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website for Alcaware (custom software studio in Monterrey, MX), served at https://www.alcaware.com. React 19 + TypeScript + Vite + Tailwind v4, bilingual (Spanish default, English under `/en`), and pre-rendered to static HTML per route for SEO. Code comments and commit messages are in Spanish.

## Commands

```bash
npm run dev               # Vite dev server (client-only rendering)
npm run lint              # ESLint
npm run build             # tsc -b type-check + client build to dist/
npm run build:prerender   # production build: client build + SSR bundle (dist/server) + node prerender.mjs
npm run preview           # serve dist/
```

There is no test suite. `npm run build` (type-check) and `npm run lint` are the checks to run after changes; run `npm run build:prerender` when touching routing, SEO, i18n, or anything that renders on the server.

## Architecture

**Pre-render pipeline.** `index.html` holds two placeholders: `<!--seo-head-start-->…<!--seo-head-end-->` and `<!--app-html-->`. `prerender.mjs` imports the SSR bundle built from `src/entry-server.tsx` (which exports `render`, `renderHeadTags`, `renderSitemap`, `ALL_PATHS`), and for every route writes `dist/<route>/index.html` with the rendered app, route-specific head tags and the correct `<html lang>`. It also writes `dist/sitemap.xml` (overwriting `public/sitemap.xml`) and `dist/404.html` (wired up via `public/.htaccess`, so hosting is Apache-style static). On the client, `src/main.tsx` hydrates if `#root` has content, otherwise mounts fresh (dev).

Because every page is rendered in Node, component render code must not touch `window`/`document`; keep browser APIs inside effects or event handlers. Pages are `React.lazy` loaded in `App.tsx`; `renderToPipeableStream` waits for `onAllReady`, so lazy pages are fully rendered in the static HTML.

**Routes and language are driven by `src/i18n/routes.ts`.** `PAGE_PATHS` maps each `PageKey` to its Spanish and English path (e.g. `ai` → `/inteligencia-artificial` and `/en/artificial-intelligence`). `App.tsx` generates `<Route>`s from it, `ALL_PATHS` drives pre-rendering and the sitemap, and the language is derived from the URL (`langFromPath`), never from user state. Use `useLocalePath().to(page, hash)` for internal links and `switchLangPath` for the language toggle. Adding a page means: add a `PageKey` + paths in `routes.ts`, a `<Route>` in `App.tsx`, and an entry in the `SEO` map in `src/seo.ts` (the `Record<PageKey, …>` type will force the last one).

**SEO lives in `src/seo.ts`.** Per page/lang title, description, optional `serviceName` (emits a schema.org `Service`) and `faq` (emits `FAQPage` JSON-LD, sourced from the i18n JSON FAQ items so visible FAQs and structured data stay in sync). `renderHeadTags` builds canonical, hreflang alternates (incl. `x-default` → Spanish), Open Graph/Twitter and the `ProfessionalService` organization JSON-LD; unknown paths get `noindex`. `components/layout/RouteSeo.tsx` updates title/description/canonical/lang during client-side navigation.

**Content and translations.** All visible copy comes from `src/i18n/es.json` and `src/i18n/en.json` via `react-i18next` `t()`, keyed by page (`webmobil.*`, `blockchain.*`, `ai.*`, …). Any copy change must be made in both files with the same key structure.

**Page layout.** Each page is `src/pages/<page>/<Page>.tsx` composing its own `sections/` folder. Service pages (`pages/services/{web-mobile,blockchain,ai}`) share a parallel section structure (Hero, ServicesAccordion, Diferenciadores, Casos, Entregables, Technologies, FAQ, …) but each has its own copy of the component rather than a shared one. The top-level `src/sections/` folder is not imported anywhere (legacy).

**Animated backgrounds.** `components/ui/backgrounds/*` wrap `UnicornBackground.tsx`, which loads the Unicorn Studio script from a CDN at runtime and mounts a scene by `projectId`.

**Analytics and leads.** GA4 (`G-32P5X8TZWG`) is loaded in `index.html`. `src/analytics.ts` exposes `trackEvent` and a global click listener that logs `contact_whatsapp` / `contact_email` for `wa.me` and `mailto:` links. Contact forms (`pages/home/sections/Contact.tsx`, and the AI/blockchain service pages) send via EmailJS with IDs hard-coded in the component and fire a `generate_lead` event on success.

**Assets.** Many images under `src/assets/images` exist as `.avif` / `.webp` / original, and home sections serve them through `<picture>` with fallbacks; follow that pattern for new large images. Fonts (Melete, Montserrat) are self-hosted `.woff2` in `src/assets/fonts`, and `Melete-UltraLight` is preloaded in `index.html`.
