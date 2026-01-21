# Mi Agentuca - AI Consulting Landing Page

Professional landing page for AI consulting services focused on implementing intelligent agents for SMBs in Santander and Cantabria, Spain.

## 🌐 Live Site

**https://miagentuca.es**

## 📋 Overview

This is a modern, SEO-optimized landing page showcasing three main AI agent services:

- **Administrative Agents** - Automation for accounting firms
- **Purchasing Agents** - Procurement optimization for construction
- **Calendar/Scheduling Agents** - 24/7 virtual secretary services

### Key Features

- **3-Layer Methodology Section** - Explains the architecture that makes AI agents reliable (Directivas, Orquestación, Ejecución)
- **FAQ Section** - Accordion-style answers to common questions
- **Static Blog** - SEO-optimized articles about AI agents and methodology

## 🛠️ Technology Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon system
- **Tailwind CSS** - Utility-first styling (via CDN)
- **GitHub Pages** - Free, reliable hosting
- **GitHub Actions** - Automated CI/CD

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/jorgegoco/miagentuca-landingpage.git
   cd miagentuca-landingpage
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   Your site will be available at `http://localhost:3000`

4. **Build for production**

   ```bash
   npm run build
   ```

   Production files will be in the `dist/` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 Project Structure

```
miagentuca-landingpage/
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ShiftSection.tsx
│   ├── MethodologySection.tsx  # 3-layer architecture explanation
│   ├── AgentsSection.tsx
│   ├── AudienceSection.tsx
│   ├── FAQSection.tsx          # Accordion FAQ
│   ├── AboutSection.tsx
│   ├── Footer.tsx
│   └── ContactModal.tsx
├── public/              # Static assets
│   ├── blog/            # Static blog articles
│   │   ├── index.html
│   │   ├── por-que-los-agentes-ia-fallan.html
│   │   └── arquitectura-3-capas-explicada.html
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── CNAME
│   └── .nojekyll
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment
├── App.tsx             # Main app component
├── index.tsx           # React entry point
├── index.html          # HTML with SEO metadata
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🔧 Available Scripts

| Command           | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start development server                           |
| `npm run build`   | Build for production                               |
| `npm run preview` | Preview production build locally                   |
| `npm run deploy`  | Manual deployment (not needed with GitHub Actions) |

## 🚢 Deployment

This project uses **GitHub Actions** for automatic deployment to GitHub Pages.

### Automatic Deployment (Recommended)

Every push to the `main` branch automatically triggers:

1. Build process
2. Deployment to GitHub Pages
3. Live site update at https://miagentuca.es

No manual intervention required!

### Manual Deployment (Alternative)

If you need to deploy manually:

```bash
npm run deploy
```

This builds the project and pushes to the `gh-pages` branch.

## 🌍 SEO Features

- **Local SEO optimized** for Santander and Cantabria
- **Schema.org JSON-LD** structured data (ProfessionalService, FAQPage, Article)
- **Open Graph** and Twitter Card meta tags
- **Geo-tagging** for local search priority
- **AI-friendly** metadata (Google-Extended, GPTBot allowed)
- **Mobile-responsive** design
- **HTTPS** with automatic SSL certificate
- **Static blog** with Article schema for rich search results

## 📧 Contact Form

The contact form uses [FormSubmit.co](https://formsubmit.co/) for handling submissions without a backend. Messages are sent to the configured email address.

## 🔒 Security & Privacy

- HTTPS enforced via GitHub Pages
- No sensitive data stored in repository
- FormSubmit.co privacy token configured
- DNS secured via DonDominio

## 📝 License

Copyright © 2025 Jorge González. All rights reserved.

## 🤝 Contributing

This is a private business website. Contributions are not accepted.

## 📞 Contact

**Jorge González**

- Email: jorgegoco70@gmail.com
- LinkedIn: [linkedin.com/in/jorgegoco](https://www.linkedin.com/in/jorgegoco/)
- Website: [miagentuca.es](https://miagentuca.es)

---

**Built with React + TypeScript + Vite**
**Deployed on GitHub Pages**
