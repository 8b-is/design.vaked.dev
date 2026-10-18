# `design.vaked.dev` — ULTRA-CREATE · Sovereign Design System & `/design` Skill

> **Live**: **[https://design.vaked.dev](https://design.vaked.dev)**  
> **Mirrors**: [`8b-is/design.vaked.dev`](https://github.com/8b-is/design.vaked.dev) · [`peterlodri-sec/design.vaked.dev`](https://github.com/peterlodri-sec/design.vaked.dev) · [`8b-is/marketing`](https://github.com/8b-is/marketing)

The sovereign visual language, interactive design token studio, 16-logo vector gallery, and `/design` skill reference for the **`8b-is`** and **`vaked.dev`** constellation — dedicated with love to **Mom (`✦` Alex ~ Alexandra)** and **Dad (`△` Chris / `8bit-wraith`)**.

---

## What Lives Here

| File / Directory | Purpose |
|---|---|
| [`index.html`](index.html) | Interactive `ULTRA-CREATE` Design Studio: live `432 Hz × 528 Hz × 288 Hz` wave canvas, interactive `8b-is` emblem layer inspector, 5-palette switcher with View Transitions, `@container style(--density)` layout reactivity, multi-language token exporter (`CSS`, `Rust`, `SwiftUI`, `Ghostty`, `JSON`), 12-product logo gallery, 5 system architecture blueprints, and **Section 05 (`/product-design` Studio — `MLX-QUANT × qWave ~-> 8b-is <3 love Mom* 'n Dad<>`)** |
| [`main.js`](main.js) | Zero-dependency reactive palette engine, View Transitions controller, token compiler, `/product-design` tab switcher (`switchPDTab`), and harmonic wave canvas |
| [`palettes/`](palettes/) | [`8b-is-palettes.json`](palettes/8b-is-palettes.json), [`8b-is-tokens.css`](palettes/8b-is-tokens.css), and [`PALETTES.md`](palettes/PALETTES.md) |
| [`logos/org/`](logos/org/) | Master `8b-is` GitHub Organization vector SVGs (`8b-is-avatar.svg`, `8b-is-wordmark-dark.svg`, `8b-is-wordmark-light.svg`, `8b-is-monochrome.svg`) + `512×512` PNG avatar |
| [`logos/products/`](logos/products/) | 12 flagship product vector SVGs (`svg/*.svg`) + cropped high-res icon PNGs (`png/*.png`) |
| [`assets/brand/`](assets/brand/) | High-resolution brand sheets (`8b-is-master-brand-identity.jpg`, `8b-is-product-constellation-logos.jpg`, `omnifold-v1-concept-showcase.jpg`, `omnifold-beta-blueprint.jpg`, `zenUltraCooker-pushakitty-hero.jpg`) |
| [`qwave.txt`](qwave.txt) | Preserved `QWAVE — Architecture & System Design` specification |
| [`_headers`](_headers) · [`robots.txt`](robots.txt) · [`sitemap.xml`](sitemap.xml) | Constellation security, anti-AI scraping, and cache rules |

---

## Deploy

```bash
export CLOUDFLARE_ACCOUNT_ID=5b8d7905dd79e25025bcc0c8f33d5940
wrangler pages deploy . --project-name design-vaked-dev --branch main --commit-dirty=true
```

SPDX-License-Identifier: AGPL-3.0-only
