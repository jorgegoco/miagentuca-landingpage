# Phase 3: Action Plan - SEO & GEO Improvements

**Created:** 2026-01-27
**Based on:** Phase 1 (Current State) + Phase 2 (Competitor Analysis)

---

## 1. Comparison Table: What They Do vs What You're Missing

| SEO Element | aduarte.es | miagentuca.es | Gap Level |
|-------------|------------|---------------|-----------|
| CollectionPage schema (blog) | Yes | **NO** | CRITICAL |
| BreadcrumbList schema | Yes (all pages) | **NO** | CRITICAL |
| Place schema | Yes (Solares) | **NO** | HIGH |
| Social profiles in sameAs | Twitter, LinkedIn, Instagram | LinkedIn only | HIGH |
| Dedicated service pages | 5 pages | Single page | MEDIUM |
| FAQ items count | 10 | 5 | MEDIUM |
| Blog categories | 5 categories | None | MEDIUM |
| Publisher logo in Article | Likely yes | **NO** | MEDIUM |
| Image in Article schema | Likely yes | **NO** | MEDIUM |
| Testimonials section | Yes | **NO** | LOW |
| Geo-meta tags | **NO** | Yes | You're ahead |
| Google-Extended meta | **NO** | Yes | You're ahead |
| Open Graph tags | Not found | Yes | You're ahead |
| Twitter Cards | Not found | Yes | You're ahead |
| Noscript fallback | Unknown | Yes | You're ahead |

---

## 2. Top 10 Specific Changes (Priority Order)

### Priority 1: Quick Wins (Can implement today)

---

#### 1. Add CollectionPage Schema to Blog Index

**File:** `public/blog/index.html`

**Why:** aduarte.es has this, you don't. Helps Google understand your blog structure.

**Add before closing `</head>`:**

```html
<!-- Blog CollectionPage JSON-LD Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Blog de Inteligencia Artificial Cantabria",
  "description": "Articulos sobre Inteligencia Artificial en Cantabria y Santander. Guias practicas de automatizacion, agentes de IA y la arquitectura de 3 capas para pymes cantabras.",
  "url": "https://miagentuca.es/blog/",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Mi Agentuca",
    "url": "https://miagentuca.es"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://miagentuca.es/blog/del-papel-al-codigo-framework-do.html"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://miagentuca.es/blog/inteligencia-artificial-cantabria-guia-2026.html"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "url": "https://miagentuca.es/blog/inteligencia-artificial-santander-pymes-2026.html"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "url": "https://miagentuca.es/blog/por-que-los-agentes-ia-fallan.html"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "url": "https://miagentuca.es/blog/arquitectura-3-capas-explicada.html"
      }
    ]
  }
}
</script>
```

**Effort:** 5 minutes
**Impact:** HIGH

---

#### 2. Add BreadcrumbList Schema to All Blog Articles

**Files:** All HTML files in `public/blog/` except index.html

**Why:** aduarte.es has breadcrumbs everywhere. Improves navigation signals and can show in search results.

**Add to each blog article (adjust URL for each):**

```html
<!-- BreadcrumbList JSON-LD Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://miagentuca.es/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://miagentuca.es/blog/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "ARTICLE_TITLE_HERE",
      "item": "https://miagentuca.es/blog/ARTICLE_SLUG_HERE.html"
    }
  ]
}
</script>
```

**Also add visual breadcrumb after header:**

```html
<!-- Breadcrumb -->
<div class="bg-slate-100 border-b border-slate-200">
  <div class="container mx-auto px-6 py-3">
    <nav class="text-sm text-slate-600">
      <a href="/" class="hover:text-electric-600 transition-colors">Inicio</a>
      <span class="mx-2">/</span>
      <a href="/blog/" class="hover:text-electric-600 transition-colors">Blog</a>
      <span class="mx-2">/</span>
      <span class="text-slate-900 font-medium">ARTICLE_TITLE</span>
    </nav>
  </div>
</div>
```

**Effort:** 20 minutes (5 articles)
**Impact:** HIGH

---

#### 3. Add Place Schema to Homepage

**File:** `index.html`

**Why:** aduarte.es uses Place schema for their location. Strengthens local entity signals.

**Add as new script after existing JSON-LD:**

```html
<!-- Place Schema for Local SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Mi Agentuca - Consultoria IA Santander",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Santander",
    "addressRegion": "Cantabria",
    "postalCode": "39001",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.4623,
    "longitude": -3.8099
  },
  "containedInPlace": {
    "@type": "AdministrativeArea",
    "name": "Cantabria"
  }
}
</script>
```

**Effort:** 5 minutes
**Impact:** MEDIUM-HIGH

---

#### 4. Expand Organization sameAs with Social Profiles

**File:** `index.html` (modify existing ProfessionalService schema)

**Why:** aduarte.es has Twitter, LinkedIn, Instagram. You only have LinkedIn.

**Change this:**
```json
"sameAs": ["https://www.linkedin.com/in/jorgegoco/"]
```

**To this:**
```json
"sameAs": [
  "https://www.linkedin.com/in/jorgegoco/",
  "https://twitter.com/YOUR_TWITTER_HANDLE",
  "https://github.com/YOUR_GITHUB_USERNAME"
]
```

*Note: Add whichever social profiles you actually have.*

**Effort:** 2 minutes
**Impact:** MEDIUM

---

### Priority 2: Medium Effort Improvements

---

#### 5. Enhance Article Schema with image and publisher.logo

**Files:** All blog article HTML files

**Why:** Your Article schema is missing image and publisher logo. These improve rich snippets.

**Current Article schema - add these properties:**

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "description": "...",
  "image": "https://miagentuca.es/og-image.png",
  "author": {
    "@type": "Person",
    "name": "Jorge Gonzalez",
    "url": "https://miagentuca.es"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mi Agentuca",
    "url": "https://miagentuca.es",
    "logo": {
      "@type": "ImageObject",
      "url": "https://miagentuca.es/logo.png",
      "width": 512,
      "height": 512
    }
  },
  "mainEntityOfPage": {...},
  "datePublished": "...",
  "dateModified": "...",
  "wordCount": 1500,
  "articleSection": "Inteligencia Artificial"
}
```

**Effort:** 30 minutes (all articles)
**Impact:** MEDIUM

---

#### 6. Add Geo-Tags to Blog Index Page

**File:** `public/blog/index.html`

**Why:** Your homepage has geo-tags, but blog doesn't. Consistency helps local signals.

**Add to `<head>`:**

```html
<!-- Geo-Tagging for Local SEO -->
<meta name="geo.region" content="ES-CB" />
<meta name="geo.placename" content="Santander" />
<meta name="geo.position" content="43.4623;-3.8099" />
<meta name="ICBM" content="43.4623, -3.8099" />
```

**Effort:** 2 minutes
**Impact:** MEDIUM

---

#### 7. Expand FAQ Section to 10 Items

**File:** `index.html` (FAQPage schema and React component)

**Why:** aduarte.es has 10 FAQs, you have 5. More FAQs = more rich snippet opportunities.

**Suggested additional FAQs:**

```json
{
  "@type": "Question",
  "name": "Cuanto cuesta un agente de IA para mi empresa?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Un agente de IA basico para automatizar un proceso especifico cuesta entre 2.000 y 5.000 euros de implementacion, mas 150-300 euros mensuales de mantenimiento. Existen programas europeos de ayuda a la digitalizacion que pueden cubrir parte o todo el coste inicial."
  }
},
{
  "@type": "Question",
  "name": "Trabajas solo en Santander o en toda Cantabria?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Trabajo con empresas en todo Cantabria: Santander, Torrelavega, Castro Urdiales, Laredo, Reinosa y cualquier municipio de la region. Puedo reunirme presencialmente en cualquier punto de Cantabria para entender tu negocio."
  }
},
{
  "@type": "Question",
  "name": "Que sectores pueden beneficiarse de agentes de IA?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Cualquier empresa con procesos repetitivos: gestorias y asesorias, constructoras, comercios, hosteleria, clinicas, despachos profesionales, inmobiliarias, y empresas de servicios. Si dedicas tiempo a tareas manuales y repetitivas, probablemente un agente de IA puede ayudarte."
  }
},
{
  "@type": "Question",
  "name": "Puedo ver una demo antes de contratar?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Si. En la seccion de demos de la web puedes probar agentes reales: clasificacion de documentos, busqueda de proveedores, y diseno de arquitecturas. Son ejemplos funcionales de lo que podemos implementar para tu negocio."
  }
},
{
  "@type": "Question",
  "name": "Que pasa si quiero cancelar el servicio?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "No hay permanencia. Puedes cancelar en cualquier momento. Al finalizar, recibes toda la documentacion y accesos para que puedas continuar usando el sistema internamente o con otro proveedor si lo prefieres."
  }
}
```

**Effort:** 30 minutes (schema + React component update)
**Impact:** MEDIUM

---

#### 8. Add Blog Index Link from Homepage

**File:** React component (likely `Hero.tsx` or add to `AgentsSection.tsx`)

**Why:** Your homepage doesn't link to specific blog content. Internal links help distribute authority.

**Add a "Featured Articles" section or link in Hero:**

```tsx
{/* Add after services or before CTA */}
<div className="mt-12">
  <h3 className="text-lg font-semibold text-navy-900 mb-4">
    Aprende sobre IA en Cantabria
  </h3>
  <div className="flex flex-wrap gap-4">
    <a href="/blog/inteligencia-artificial-cantabria-guia-2026.html"
       className="text-electric-600 hover:underline">
      Guia IA Cantabria 2026
    </a>
    <a href="/blog/inteligencia-artificial-santander-pymes-2026.html"
       className="text-electric-600 hover:underline">
      IA para Pymes Santander
    </a>
  </div>
</div>
```

**Effort:** 15 minutes
**Impact:** MEDIUM

---

### Priority 3: Larger Structural Changes

---

#### 9. Create Dedicated Service Landing Pages (Future)

**New Files:**
- `public/servicios/agentes-administrativos.html`
- `public/servicios/agentes-compras.html`
- `public/servicios/secretaria-virtual.html`

**Why:** aduarte.es has 5 dedicated service pages. Each page can rank for specific service keywords.

**Structure for each:**
- Unique title with service + location keywords
- Service-specific schema markup
- Dedicated FAQs for that service
- Case study or demo link
- CTA to contact

**Example title:** "Agentes de IA para Gestorias en Santander | Automatizacion Documental"

**Effort:** 2-3 hours per page
**Impact:** HIGH (long-term)

---

#### 10. Add WebSite Schema with SearchAction

**File:** `index.html`

**Why:** aduarte.es has WebSite schema with search. Even if you don't have search, the schema helps define your site.

```html
<!-- WebSite Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mi Agentuca",
  "alternateName": "Jorge Gonzalez - Consultor IA Cantabria",
  "url": "https://miagentuca.es",
  "description": "Consultoria de Inteligencia Artificial y Agentes de IA para empresas en Santander y Cantabria",
  "inLanguage": "es",
  "publisher": {
    "@type": "Organization",
    "name": "Mi Agentuca",
    "url": "https://miagentuca.es"
  }
}
</script>
```

**Effort:** 5 minutes
**Impact:** LOW-MEDIUM

---

## 3. Implementation Checklist (Quick Wins First)

### Today (< 1 hour total)

- [ ] Add CollectionPage schema to `public/blog/index.html`
- [ ] Add Place schema to `index.html`
- [ ] Add geo-tags to `public/blog/index.html`
- [ ] Expand sameAs in ProfessionalService schema
- [ ] Add WebSite schema to `index.html`

### This Week

- [ ] Add BreadcrumbList schema to all 5 blog articles
- [ ] Add visual breadcrumbs to all blog articles
- [ ] Enhance Article schema (image, publisher.logo) in all articles
- [ ] Add 5 more FAQs to homepage (schema + component)

### This Month

- [ ] Create dedicated service landing pages
- [ ] Add "Featured Articles" section to homepage
- [ ] Consider adding testimonials/results section

---

## 4. Validation Tools

After implementing, validate with:

1. **Google Rich Results Test:** https://search.google.com/test/rich-results
2. **Schema Validator:** https://validator.schema.org/
3. **Google Search Console:** Monitor for new rich results
4. **Bing Webmaster Tools:** Submit updated sitemap

---

## 5. Expected Results

| Change | Expected SEO Benefit |
|--------|---------------------|
| CollectionPage schema | Blog appears as collection in search |
| BreadcrumbList schema | Breadcrumb rich snippets in SERPs |
| Place schema | Stronger local entity signals |
| More FAQs | More FAQ rich snippets |
| Enhanced Article schema | Better article rich snippets |
| Service pages | Rank for individual service keywords |

---

## Summary

**Immediate wins (< 1 hour):**
1. CollectionPage schema on blog index
2. Place schema on homepage
3. Geo-tags on blog index
4. WebSite schema on homepage

**High-impact improvements (this week):**
5. BreadcrumbList on all pages
6. Enhanced Article schema
7. More FAQs

**Strategic improvements (this month):**
8. Dedicated service pages
9. Homepage links to blog
10. Testimonials section

Your site already has strong geo-tagging and GEO-strategy elements (Google-Extended). The main gaps are schema completeness and site architecture. Filling these gaps will bring you to parity or ahead of aduarte.es in structured data signals.
