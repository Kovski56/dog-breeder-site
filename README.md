# Kennel Website

A landing page and puppy-inquiry page for a dog breeder, built with Next.js
(App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install      # first time only
npm run dev      # start the dev server at http://localhost:3000
```

Other scripts:

- `npm run build` — production build
- `npm start` — run the production build
- `npm run lint` — lint the project

## Project structure

| Path | What it is |
| --- | --- |
| `src/app/page.tsx` | Landing page (hero, about, upcoming litter) |
| `src/app/inquiries/page.tsx` | Puppy inquiry page |
| `src/app/inquiries/actions.ts` | Server Action that handles form submissions |
| `src/components/` | Shared header, footer, and the inquiry form |
| `src/lib/site.ts` | **Edit this first** — kennel name, contact info, breed |
| `src/app/globals.css` | Brand colors (placeholders until the style guide is applied) |
| `public/images/` | Put photos here |

## To customize

1. **`src/lib/site.ts`** — set the kennel name, tagline, breed, email, phone, location.
2. **`src/app/globals.css`** — replace the placeholder `--brand*` colors with the style-guide palette.
3. **`public/images/`** — add photos, then swap the placeholder image slots in the pages for `<Image>` components.
4. **`src/app/inquiries/actions.ts`** — wire up where inquiries should go (email, database, or a form service). Right now it just logs to the server console.
