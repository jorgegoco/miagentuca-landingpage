# Phase 1: Current State Audit - miagentuca.es

**Audit Date:** 2026-01-27
**Files Analyzed:**
- `index.html` (main homepage)
- `public/blog/index.html` (blog listing)
- `public/blog/inteligencia-artificial-cantabria-guia-2026.html`
- `public/blog/inteligencia-artificial-santander-pymes-2026.html`
- `public/blog/arquitectura-3-capas-explicada.html`

---

## 1. Meta Tags Found

### Homepage (index.html)

| Meta Tag | Value | Status |
|----------|-------|--------|
| `charset` | UTF-8 | OK |
| `viewport` | width=device-width, initial-scale=1.0 | OK |
| `title` | "Jorge Gonzalez \| Consultor de IA en Santander y Cantabria - Automatizacion" | OK |
| `name="title"` | "Inteligencia Artificial Santander \| Consultor IA Cantabria - Jorge Gonzalez" | OK (different from title) |
| `name="description"` | "Experto en Inteligencia Artificial en Santander y Cantabria. Implemento Agentes de IA..." (165 chars) | OK |
| `name="keywords"` | 14 keywords including local terms | OK |
| `name="robots"` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 | EXCELLENT |
| `name="googlebot"` | index, follow | OK |
| `name="Google-Extended"` | index, follow | EXCELLENT (GEO strategy) |
| `name="author"` | Jorge Gonzalez | OK |
| `rel="canonical"` | https://miagentuca.es/ | OK |

### Geo-Tagging (Homepage)

| Meta Tag | Value | Status |
|----------|-------|--------|
| `geo.region` | ES-CB | OK |
| `geo.placename` | Santander | OK |
| `geo.position` | 43.4623;-3.8099 | OK |
| `ICBM` | 43.4623, -3.8099 | OK |

### Open Graph Tags (Homepage)

| Property | Value | Status |
|----------|-------|--------|
| `og:type` | website | OK |
| `og:url` | https://miagentuca.es/ | OK |
| `og:title` | "Jorge Gonzalez \| IA y Automatizacion en Cantabria" | OK |
| `og:description` | "Deja de hacer de robot. Implemento Agentes de IA..." | OK |
| `og:locale` | es_ES | OK |
| `og:site_name` | Mi Agentuca - Consultoria IA | OK |
| `og:image` | https://miagentuca.es/og-image.png | OK |

### Twitter Cards (Homepage)

| Property | Value | Status |
|----------|-------|--------|
| `twitter:card` | summary_large_image | OK |
| `twitter:url` | https://miagentuca.es/ | OK |
| `twitter:title` | "Jorge Gonzalez \| Consultor IA Santander" | OK |
| `twitter:description` | Present | OK |
| `twitter:image` | https://miagentuca.es/og-image.png | OK |

### Blog Index (public/blog/index.html)

| Meta Tag | Status |
|----------|--------|
| `title` | OK - "Blog de Inteligencia Artificial Cantabria \| Mi Agentuca" |
| `description` | OK - Contains local keywords |
| `keywords` | OK - 6 keywords |
| `canonical` | OK |
| `og:*` tags | OK (type, url, title, description, locale) |
| **JSON-LD Schema** | **MISSING** - No structured data |
| **Geo tags** | **MISSING** - No geo.region, geo.placename |

### Blog Articles

| Element | Status |
|---------|--------|
| `title` | OK - Unique per article |
| `description` | OK - Descriptive |
| `keywords` | OK - Includes local terms |
| `canonical` | OK |
| `og:type` | article (correct) |
| `article:author` | OK |
| Article JSON-LD | OK - Present in all articles |
| **Geo tags** | **MISSING** in articles |

---

## 2. JSON-LD Structured Data Found

### Homepage - ProfessionalService Schema

```json
{
  "@type": "ProfessionalService",
  "name": "Jorge Gonzalez - Consultor de IA",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Santander",
    "addressRegion": "Cantabria",
    "addressCountry": "ES",
    "postalCode": "39001"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.4623,
    "longitude": -3.8099
  },
  "areaServed": [City: Santander, AdministrativeArea: Cantabria, Country: Espana],
  "hasOfferCatalog": 3 services listed,
  "sameAs": ["https://www.linkedin.com/in/jorgegoco/"]
}
```

**Status:** GOOD but missing:
- `telephone` (empty)
- `openingHours`
- `aggregateRating` / reviews
- `logo` (has image but not logo property)

### Homepage - FAQPage Schema

```json
{
  "@type": "FAQPage",
  "mainEntity": [5 Q&A items]
}
```

**Status:** EXCELLENT - Well implemented

### Blog Articles - Article Schema

Each article has:
```json
{
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Person", "name": "Jorge Gonzalez" },
  "publisher": { "@type": "Organization", "name": "Mi Agentuca" },
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD"
}
```

**Status:** GOOD but missing:
- `image` property
- `publisher.logo`
- `wordCount`
- `articleSection` / `keywords`

### Blog Index - NO JSON-LD

**Status:** **MISSING** - Should have ItemList or CollectionPage schema

---

## 3. Local Keywords Count

### Primary Keywords Across All Pages

| Keyword | Homepage | Blog Index | Cantabria Article | Santander Article | 3-Capas Article | **TOTAL** |
|---------|----------|------------|-------------------|-------------------|-----------------|-----------|
| "Santander" | 6 | 2 | 7 | **47** | 2 | **64** |
| "Cantabria" | 8 | 5 | **43** | 5 | 3 | **64** |
| "Espana" / "Espanol" | 2 | 0 | 0 | 0 | 0 | **2** |
| "Torrelavega" | 0 | 0 | 4 | 0 | 0 | **4** |
| "Castro Urdiales" | 0 | 0 | 3 | 0 | 0 | **3** |
| "Laredo" | 0 | 0 | 2 | 0 | 0 | **2** |
| "Reinosa" | 0 | 0 | 2 | 0 | 0 | **2** |

### Assessment:
- **Santander/Cantabria:** Well covered
- **Other municipalities:** Only mentioned in Cantabria article
- **"Espana":** Underused - only in JSON-LD
- **Neighborhood mentions (Santander article):** El Sardinero, Centro, Cueto, Monte, Calle Burgos - GOOD

---

## 4. Heading Structure

### Homepage (index.html)
- Rendered by React - headings in components
- `<noscript>` fallback has: H1, H2, H2, H2 - GOOD structure

### Blog Index
| Level | Content |
|-------|---------|
| H1 | "Blog de Inteligencia Artificial" |
| H2 | Article titles (5 articles) |

**Issues:**
- H1 doesn't include "Cantabria" or "Santander"
- No H3s for organization

### Blog Articles (typical structure)

| Level | Usage |
|-------|-------|
| H1 | Article title (1 per page) - OK |
| H2 | Main sections (4-6 per article) - OK |
| H3 | Subsections (e.g., case studies) - OK |
| H4 | Within info boxes - OK |

**Assessment:** GOOD hierarchy, proper nesting

---

## 5. Internal Linking Patterns

### Homepage
- Links to `/blog/` in navigation
- No direct links to specific blog articles
- Contact modal trigger via query param (`/?contact=true`)

### Blog Index
- Links to all 5 blog articles
- Link back to homepage (`/`)
- Breadcrumb: Inicio > Blog

### Blog Articles Internal Links

| From Article | Links To |
|--------------|----------|
| Cantabria Guide | Santander article, 3-capas article |
| Santander Article | Cantabria guide, 3-capas article, por-que-fallan article |
| 3-Capas | Cantabria guide, Santander article |
| Por que fallan | (need to verify) |

**Cross-linking Pattern:**
- "Pillar" articles (Cantabria, Santander) link to each other
- Technical articles link to pillar content
- All articles have "Related Articles" section with 2 links
- All articles link to contact (`/?contact=true`)

### Missing Internal Links:
- Homepage doesn't link to any blog articles
- No link from blog articles back to specific homepage sections (services, methodology)
- No breadcrumbs on blog articles (only on blog index)

---

## 6. Summary of Findings

### Strengths
1. Comprehensive meta tags on homepage
2. Geo-tagging implemented (geo.region, geo.position, ICBM)
3. Google-Extended meta tag for AI search (GEO strategy)
4. ProfessionalService + FAQPage schemas on homepage
5. Article schema on all blog posts
6. Good local keyword density for Santander/Cantabria
7. Cross-linking between blog articles
8. Noscript fallback for crawlers

### Gaps Identified
1. **Blog Index missing JSON-LD** (no ItemList/CollectionPage schema)
2. **Blog articles missing geo-tags** (only homepage has them)
3. **Article schema incomplete** (no image, no publisher.logo)
4. **ProfessionalService missing** telephone, openingHours, reviews
5. **Homepage doesn't link to blog articles** directly
6. **No breadcrumbs on blog articles**
7. **"Espana" keyword underused** (only 2 mentions)
8. **No LocalBusiness schema** (using ProfessionalService which is good, but could add LocalBusiness too)
9. **Missing BreadcrumbList schema**
10. **No Person schema for author** (author only nested in Article)

---

## Next Steps
- Phase 2: Analyze aduarte.es competitor
- Phase 3: Create prioritized action plan based on gaps
