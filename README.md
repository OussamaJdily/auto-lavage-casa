# Auto Lavage Premium Casablanca

Site web premium pour un service d'auto lavage haut de gamme à Casablanca, Maroc.

## Stack

- **Vite + React 18**
- **TypeScript-free, ESM**
- **Tailwind CSS 3**
- **Framer Motion** — animations UI premium
- **React Three Fiber + drei** — 3D (voiture stylisée, particules d'eau)
- **GSAP + Lenis** — motion + smooth scroll
- **Zustand** — state global (theme + i18n persistés)
- **Lucide React** — icônes vectorielles

## Lancer

```bash
npm install
npm run dev      # dev: http://localhost:3003
npm run build    # production build → dist/
npm run preview  # preview production
```

## Features

- 9 sections complètes : Navbar, Hero 3D, Services, Before/After, Why Us, Pricing, Gallery, Booking, Location, Footer
- Trilingue : FR (défaut) / AR (RTL) / EN — sélecteur dans la nav, persistance localStorage
- Deux themes : Dark (luxe garage nuit) / Light (showroom) — toggle dans la nav, persistance localStorage
- 3D : voiture stylisée Hero + particules d'eau animées, code-splittées (`React.lazy`)
- Animations : page loader, scroll reveal, parallax, magnetic buttons, custom cursor
- Formulaire de réservation avec validation + état de succès
- SEO : meta tags, Open Graph, Schema.org LocalBusiness, sitemap-ready
- Performance : lazy loading des chunks 3D, preload fonts, GPU-accelerated transforms

## Structure

```
src/
├── components/     # Navbar, Button, CustomCursor, PageLoader, ScrollProgress
├── sections/       # Hero, Services, BeforeAfter, WhyUs, Pricing, Gallery, Booking, Location, Footer
├── canvas/         # HeroCar (R3F), WaterBackground (particles)
├── hooks/
├── store/          # Zustand store
├── i18n/           # translations.js (FR/AR/EN)
└── utils/
```

## RTL (Arabe)

L'attribut `dir="rtl"` est appliqué sur `<html>` quand la langue = `ar`. Tous les composants utilisent des utilitaires Tailwind logiques (`ps-*`, `ms-*`, `text-start`, etc.) ou sont symétriques.

## Déploiement

Voir `zosite.json` — configuration standard Zo Site (Vite + preview).