# Phase 2: Competitor Analysis - aduarte.es

**Analysis Date:** 2026-01-27
**Pages Analyzed:**
- Homepage (aduarte.es)
- Services page (aduarte.es/servicios/)
- Blog index (aduarte.es/blog/)

---

## 1. JSON-LD Structured Data

### Homepage Schemas (5 types)

| Schema Type | Implementation |
|-------------|----------------|
| **Organization** | Full implementation with name, URL, contact, logo, address |
| **Place** | Geographic: Solares, Cantabria |
| **WebSite** | Search action enabled |
| **WebPage** | Publication/modification dates |
| **FAQPage** | **10 Q&A items** (vs miagentuca's 5) |

### Services Page
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"position": 1, "name": "Inicio", "item": "https://aduarte.es/"},
    {"position": 2, "name": "Servicios", "item": "https://aduarte.es/servicios/"}
  ]
}
```

### Blog Page Schemas (4 types)

| Schema Type | Implementation |
|-------------|----------------|
| **Organization** | With sameAs links to Twitter, LinkedIn, Instagram |
| **WebSite** | Alternate name: "Aduarte \| Inteligencia Artificial y Desarrollo Web" |
| **CollectionPage** | Blog index identified as collection |
| **BreadcrumbList** | Inicio > Blog navigation |

**Key Insight:** aduarte.es uses **CollectionPage** schema on blog - miagentuca.es is missing this entirely.

---

## 2. Local SEO Elements

### Geographic Targeting

| Element | aduarte.es | miagentuca.es |
|---------|------------|---------------|
| Place Schema | Yes (Solares, Cantabria) | No |
| Address in Schema | Full (Solares, Cantabria, Spain) | Full (Santander, Cantabria) |
| geo.region meta | Not found | Yes (ES-CB) |
| geo.placename meta | Not found | Yes (Santander) |
| geo.position meta | Not found | Yes (coordinates) |
| ICBM meta | Not found | Yes |

**Observation:** miagentuca.es has BETTER geo-meta tags, but aduarte.es compensates with Place schema.

### Local Keywords Used

| Location | aduarte.es | miagentuca.es |
|----------|------------|---------------|
| Cantabria | Primary focus | Primary focus |
| Santander | Not emphasized | Strong emphasis |
| Solares | Primary (headquarters) | Not mentioned |
| Torrelavega | Mentioned (client) | Mentioned in blog |

### Local Content Strategy

aduarte.es blog articles with local focus:
- "Prepara tu web para eventos locales"
- "Keyword Research Local con IA"
- "Guia Verifactu para Pymes Cantabras"
- "Marcado Schema para SEO Local"

**Key Insight:** aduarte.es explicitly targets "SEO Local" as a keyword and writes content about local optimization techniques.

---

## 3. Content Structure

### Homepage Structure

| Element | aduarte.es | miagentuca.es |
|---------|------------|---------------|
| H1 | "Webs que venden y sistemas que automatizan" | (React-rendered) |
| H2 count | 7+ sections | (React-rendered) |
| FAQ section | Yes (10 items, with schema) | Yes (5 items, with schema) |
| Testimonials/Results | "Resultados Reales" section | Not found |
| About section | "Quien soy?" | In AboutSection |

### Services Structure

aduarte.es has dedicated service pages:
1. `/servicios/diseno-y-desarrollo-web/`
2. `/servicios/desarrollo-de-aplicaciones-web-y-mvp/`
3. `/servicios/seo/`
4. `/servicios/ia-y-automatizaciones/`
5. `/servicios/marketing/`

miagentuca.es: All services on single page (no dedicated URLs)

### Blog Structure

| Element | aduarte.es | miagentuca.es |
|---------|------------|---------------|
| Blog H1 | "Ideas y Guias Practicas" | "Blog de Inteligencia Artificial" |
| CollectionPage schema | Yes | **NO** |
| BreadcrumbList schema | Yes | **NO** |
| Categories visible | 5 (Web, IA, SEO, Emprendimiento, Blog) | Tags only (no category system) |
| Post count visible | 9+ | 5 |

---

## 4. Key Differentiators

### What aduarte.es Does Better

1. **More Schema Types:**
   - Place schema for geographic entity
   - CollectionPage for blog index
   - BreadcrumbList on all pages
   - Organization with sameAs (social profiles)

2. **More FAQs:**
   - 10 Q&A items vs 5 (doubles rich snippet opportunities)

3. **Dedicated Service Pages:**
   - Each service has its own URL (better for ranking individual services)
   - Allows for service-specific schema (Service schema potential)

4. **Social Profiles in Schema:**
   - Twitter, LinkedIn, Instagram linked in Organization sameAs
   - Builds entity recognition

5. **Blog Categories:**
   - Organized content taxonomy
   - Enables category-based navigation

6. **Local SEO Content:**
   - Writes articles ABOUT local SEO (establishes topical authority)
   - "Marcado Schema para SEO Local" shows expertise

7. **BreadcrumbList Everywhere:**
   - Consistent breadcrumb schema on services and blog
   - Improves site structure signals

### What miagentuca.es Does Better

1. **Geo-Meta Tags:**
   - geo.region, geo.placename, geo.position, ICBM
   - aduarte.es doesn't have these

2. **Google-Extended Meta:**
   - Explicitly allows AI crawlers (GEO strategy)
   - Not found on aduarte.es

3. **Santander Focus:**
   - Strong local keyword density for Santander specifically
   - Neighborhood-level content (El Sardinero, Cueto, Monte)

4. **Article Schema on All Posts:**
   - Consistent implementation
   - datePublished and dateModified present

5. **Noscript Fallback:**
   - Content accessible to crawlers even without JS
   - Good SPA SEO practice

---

## 5. Technical Comparison

| Technical Element | aduarte.es | miagentuca.es |
|-------------------|------------|---------------|
| Platform | WordPress | React SPA |
| Blog CMS | WordPress native | Static HTML |
| Schema Plugin | Likely Yoast/RankMath | Manual implementation |
| Breadcrumbs | Automated | Missing on articles |
| Open Graph | Not found | Full implementation |
| Twitter Cards | Not found | Full implementation |
| Meta Description (blog) | Missing on some pages | Present |

---

## 6. Opportunities Identified

Based on competitor analysis, miagentuca.es should consider:

### High Priority (aduarte.es has, miagentuca.es doesn't)
1. Add CollectionPage/ItemList schema to blog index
2. Add BreadcrumbList schema to all pages
3. Add social profiles to Organization sameAs
4. Create dedicated service pages with unique URLs
5. Expand FAQ to 10+ items
6. Add Place schema for Santander

### Medium Priority (competitive parity)
7. Add categories/tags system to blog
8. Write content about local SEO itself
9. Add testimonials/results section
10. Add publisher.logo to Article schema

### Low Priority (already strong)
- Geo-meta tags (already better than competitor)
- Open Graph tags (already implemented)
- Google-Extended (already implemented)

---

## 7. Summary

| Metric | aduarte.es | miagentuca.es |
|--------|------------|---------------|
| Schema Types Used | 7 | 4 |
| FAQ Items | 10 | 5 |
| Service Pages | 5 dedicated | 1 (all-in-one) |
| Blog Organization | Categories + Tags | Minimal |
| BreadcrumbList | Yes | No |
| CollectionPage | Yes | No |
| Geo-Meta Tags | No | Yes |
| Social in Schema | Yes | LinkedIn only |
| Local SEO Content | Writes about it | Implements it |

**Overall Assessment:** aduarte.es has more comprehensive schema markup and better site architecture for SEO. miagentuca.es has stronger geo-tagging and social meta tags. The biggest gaps are: missing blog index schema, no breadcrumbs, and no dedicated service pages.
