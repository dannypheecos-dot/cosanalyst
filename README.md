# CosAnalyst

Research desk. Publication. Not a landing squeeze.

**BOOK FACT · NOT A TICKET.** Publisher + AI-assisted. Oil is `$WTI`.

This repo is the static-export publication for [cosanalyst.com](https://cosanalyst.com). It ships to GitHub Pages as a Next.js `output: 'export'` site.

## Desk rules

- CosAnalyst is one word. Fox mark. Charcoal / mint.
- Sector Selector is a research project card only: [sectorselector.ai](https://sectorselector.ai). `sectorSelector: false`.
- Newsletter is **The CosAnalyst Market Brief**. Desk: desk@cosanalyst.com. No auto-enroll.
- Public copy says **GEX snapshot**, never a vendor brand.
- Do not invent GEX, CMT, or FedWatch. Do not print G-D+.
- Production source maps stay off. The build strips `.map` files and fails if personal tokens or banned vendor brands appear in `out/`.

## Local

```bash
npm ci
npm run build
npm start
```

`basePath` and `assetPrefix` are empty so the apex custom domain serves `/_next` and nav at site root. Canonical URLs and JSON-LD stay on `https://cosanalyst.com/...`.

## Pages

GitHub Actions builds `out/` and deploys from `main`. A `CNAME` file ships with exactly `cosanalyst.com`.
