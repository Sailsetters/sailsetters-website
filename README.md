# Sailsetters Website

Website des Sailsetters e.V. — [sailsetters.de](https://sailsetters.de)

## Stack

- **Next.js 16** (App Router) — deployed on Vercel
- **React 19**
- **Tailwind CSS 4** — configured CSS-first in `app/globals.css`, no `tailwind.config.ts`
- **TypeScript 6**

The site is **German only**. There is no internationalisation and none is planned.

## Entwicklung

Requires Node.js 20.19+, 22.13+, or 24+.

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (also type-checks)
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Struktur

```
app/            routes (App Router)
  page.tsx        homepage
  impressum/      Impressum (§ 5 TMG)
  satzung/        Vereinssatzung
  globals.css     Tailwind entry + brand palette
components/     shared components
public/         images, partner logos, Satzung PDF
```

### Farben

The brand palette is defined in the `@theme` block in `app/globals.css` and is
available as normal Tailwind utilities (`bg-blood`, `text-linen`, …):

| Token       | Hex       |
| ----------- | --------- |
| `blood`     | `#5c0905` |
| `burnt`     | `#f87e60` |
| `tangerine` | `#e59d76` |
| `tawny`     | `#ce6127` |
| `linen`     | `#f7e8de` |
| `powder`    | `#fefefa` |

## Branches

- `main` — what is live
- `v2` — the ongoing redesign, including the Payload CMS admin panel and the
  application/contact forms

Content and legal corrections (Impressum, contact details) go directly to `main`
and are merged into `v2`.
