# Portfolio

Personal portfolio for Aditya Chauhan — built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Stack

- **Vite + React + TypeScript** — no router, single-page anchor-scroll layout
- **Tailwind CSS v4** — CSS-first config via `@tailwindcss/vite`, theme tokens as CSS custom properties in `src/index.css`
- **Framer Motion** — scroll reveals, hero entrance, hover/tap micro-interactions
- **lucide-react** — icon set (GitHub/LinkedIn marks are hand-rolled SVGs in `src/components/ui/BrandIcons.tsx`, since lucide dropped brand icons)

## Local development

```bash
npm install
npm run dev       # dev server at http://localhost:5173/Portfolio/
npm run build      # production build to dist/
npm run preview    # serve the production build locally
```

Content (experience, projects, skills, nav, social links, hero copy) lives entirely in `src/data/*.ts` — edit those files to update copy without touching component code.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app and deploys `dist/` to GitHub Pages via `actions/deploy-pages`.

**One-time setup**: in the repo's Settings → Pages, the source must be set to **GitHub Actions** (not "Deploy from a branch") for the workflow to take effect.

The Vite `base` is set to `/Portfolio/` in `vite.config.ts` to match the GitHub Pages project-site path (`adichn.github.io/Portfolio/`).

## Resume

The "Download Resume" link points to `public/resume-aditya-chauhan.pdf`, which is not checked in — drop a redacted copy of the resume there to enable the download.
