# Mi Agentuca - AI Consulting Landing Page & Blog

Professional website for AI consulting services focused on implementing intelligent agents for SMBs in Santander and Cantabria, Spain.

## Live Site

**https://miagentuca.es**

## Overview

Mi Agentuca is a hybrid website combining a React SPA (home page) with static HTML pages (blog and services). It showcases AI agent services for small and medium businesses, with interactive demos connecting to live AI agent APIs.

### Site Structure

The site has 14 pages:

**Home (React SPA)**
- Landing page with hero, methodology, agent showcase, interactive demos, use cases, audience, FAQ, about, and contact modal

**Services (Static HTML) — /servicios/**
- Services index listing page
- Inteligencia Artificial en Cantabria — AI consulting service page
- Automatizacion para Pymes en Santander — Automation service page

**Blog (Static HTML) — /blog/**
- Blog index listing page
- 8 articles covering AI guides, tools comparisons, automation tutorials, and local resources

### Key Features

- **3-Layer Methodology** — Explains the architecture that makes AI agents reliable (Directivas, Orquestacion, Ejecucion)
- **Interactive Demos** — Live demos connecting to real AI agent APIs hosted on Contabo VPS
- **Use Cases Section** — Realistic automation scenarios for local businesses
- **Static Blog** — 8 SEO-optimized articles about AI, automation, and local resources
- **Service Pages** — 2 dedicated service pages for different keyword clusters
- **IndexNow Integration** — Automatic search engine notification on deploy

## Live Demos

The landing page includes interactive demos connecting to live APIs:

| Demo | Description | API Docs |
|------|-------------|----------|
| **Gestoria** | Upload a PDF and get automatic document classification | [gestoria.miagentuca.es/docs](https://gestoria.miagentuca.es/docs) |
| **Compras** | Search for products with quantity/urgency controls, compare suppliers with price ranges and confidence badges, get procurement strategy and tips | [compras.miagentuca.es/docs](https://compras.miagentuca.es/docs) |
| **Explain** | Describe a business process and get a structured DOE architecture: process analysis, directive summary, layered steps, execution capabilities, edge cases, and implementation estimate | [explain.miagentuca.es/docs](https://explain.miagentuca.es/docs) |

## Technology Stack

- **React 19** + **TypeScript** — Home page SPA
- **Vite** — Build tool and dev server
- **Tailwind CSS 4** — Utility-first styling (compiled, not CDN)
- **Framer Motion** — Animations
- **Lucide React** — Icon system
- **Static HTML** — Blog and service pages (no framework, shared Tailwind CSS)
- **GitHub Pages** — Hosting
- **GitHub Actions** — CI/CD (auto-deploy on push to main)
- **IndexNow** — Search engine notification on deploy
- **FormSubmit.co** — Serverless contact form

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm

### Local Development

```bash
# Clone
git clone https://github.com/jorgegoco/miagentuca-landingpage.git
cd miagentuca-landingpage

# Install
npm install

# Dev server (port 3000)
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
miagentuca-landingpage/
├── components/                # React components (home page)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ShiftSection.tsx
│   ├── MethodologySection.tsx
│   ├── AgentsSection.tsx
│   ├── DemoSection.tsx
│   ├── UseCasesSection.tsx
│   ├── AudienceSection.tsx
│   ├── FAQSection.tsx
│   ├── AboutSection.tsx
│   ├── SectionDivider.tsx
│   ├── Footer.tsx
│   └── ContactModal.tsx
├── public/                    # Static assets + pages
│   ├── blog/                  # Static blog articles (8 articles + index)
│   │   ├── index.html
│   │   ├── inteligencia-artificial-cantabria-guia-2026.html
│   │   ├── inteligencia-artificial-santander-pymes-2026.html
│   │   ├── top-herramientas-ia-pymes-espana-2026.html
│   │   ├── como-automatizar-gestoria-ia-cantabria.html
│   │   ├── ayudas-digitalizacion-ia-cantabria-2026.html
│   │   ├── del-papel-al-codigo-framework-do.html
│   │   ├── por-que-los-agentes-ia-fallan.html
│   │   └── arquitectura-3-capas-explicada.html
│   ├── servicios/             # Static service pages (2 pages + index)
│   │   ├── index.html
│   │   ├── inteligencia-artificial-cantabria.html
│   │   └── automatizacion-pymes-santander.html
│   ├── css/
│   │   └── styles.css         # Compiled Tailwind CSS
│   ├── robots.txt
│   ├── sitemap.xml            # 14 URLs
│   ├── CNAME
│   ├── favicon.svg
│   └── .nojekyll
├── scripts/
│   └── indexnow-ping.sh       # IndexNow search engine notification
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions CI/CD
├── App.tsx                    # Root React component
├── index.tsx                  # React entry point
├── index.html                 # HTML template with SEO metadata
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## Available Scripts

| Command             | Description                                    |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Start development server (port 3000)           |
| `npm run build`     | Compile Tailwind CSS + Vite production build   |
| `npm run preview`   | Preview production build locally               |
| `npm run deploy`    | Build + deploy via gh-pages + IndexNow ping    |
| `npm run css:build` | Compile Tailwind CSS only                      |
| `npm run css:watch` | Watch and recompile Tailwind CSS               |

## Deployment

### Automatic (Recommended)

Every push to `main` triggers GitHub Actions:

1. Install dependencies
2. Build project
3. Deploy to GitHub Pages

After pushing, manually run IndexNow to notify search engines:

```bash
bash scripts/indexnow-ping.sh
```

### Manual Alternative

```bash
npm run deploy
```

This builds, deploys via gh-pages, and runs IndexNow automatically.

## SEO & Structured Data

All pages include comprehensive SEO optimization:

- **Schema.org JSON-LD** — ProfessionalService, Article, FAQPage, BreadcrumbList, ItemList, CollectionPage, WebSite, Place
- **Open Graph + Twitter Card** meta tags
- **Geo-tagging** — geo.region, geo.placename, geo.position, ICBM
- **Breadcrumbs** — visible + schema markup on all static pages
- **IndexNow** — instant Bing/Yandex notification on content updates
- **Sitemap** — 14 URLs with priority and lastmod
- **robots.txt** — configured for search engines and AI bots

## Contact Form

Uses [FormSubmit.co](https://formsubmit.co/) for serverless form handling. No backend required.

## License

Copyright 2026 Jorge Gonzalez. All rights reserved.

## Contact

**Jorge Gonzalez**

- Website: [miagentuca.es](https://miagentuca.es)
- LinkedIn: [linkedin.com/in/jorgegoco](https://www.linkedin.com/in/jorgegoco/)
- Email: jorgegoco70@gmail.com
