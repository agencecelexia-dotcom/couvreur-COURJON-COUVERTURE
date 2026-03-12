# CLAUDE.md — Gouvernance Projet : Site Couvreur Pro

> **Source unique de vérité.** Consulter ce fichier avant toute session de travail.

---

## 📌 Vision & État Actuel

- **Projet** : Site vitrine haut de gamme pour couvreur professionnel en Île-de-France
- **Nom entreprise** : Couverture Pro (placeholder — remplacer dans `src/lib/data/company.ts`)
- **Objectif** : Générer des leads qualifiés via SEO local + formulaire devis optimisé
- **Statut** : Sprint 3/6 — Pages services + formulaires en cours
- **Dernière mise à jour** : 2026-02-15

---

## 🛠️ Stack Technique

| Outil | Version | Usage |
|---|---|---|
| Next.js | 16.1 (App Router) | Framework |
| React | 19.2 | UI |
| TypeScript | 5.9 (strict) | Typage |
| Tailwind CSS | 4.1 | Styles |
| Shadcn/UI | latest | Composants de base |
| Framer Motion | 12 | Animations |
| React Hook Form | 7.71 | Formulaires |
| Zod | 4.3 | Validation |
| Lucide React | 0.564 | Icônes |
| Puter.js | v2 (CDN) | Nano Banana (génération images Gemini) |

**Commandes** :
```bash
pnpm dev          # localhost:3000
pnpm build        # build production
pnpm lint         # ESLint
pnpm start        # serveur production
```

---

## 🎨 Design System

**Couleurs** (Tailwind CSS 4 via CSS variables) :
- `--primary` = `#1E3A8A` (bleu couvreur professionnel)
- `--accent` = `#F97316` (orange CTA — tous les boutons d'action)
- Fond principal : blanc `#FFFFFF`
- Fond secondaire : slate-50 `#F8FAFC`
- Texte : slate-800 `#1E293B`

**Typographie** : Geist Sans (Next.js default)
- Titres : `font-bold` ou `font-semibold`
- Corps : `font-normal`

**Utilitaires CSS** :
- `.container-wide` = `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- `.section-padding` = `py-16 md:py-24`

---

## 📁 Architecture Fichiers

```
src/
├── app/
│   ├── page.tsx                    ✅ Page d'accueil
│   ├── layout.tsx                  ✅ Layout global + Schema.org
│   ├── globals.css                 ✅ Design system
│   ├── sitemap.ts                  ✅ SEO sitemap
│   ├── robots.ts                   ✅ SEO robots
│   ├── services/
│   │   ├── page.tsx                ✅ Liste services
│   │   └── [slug]/page.tsx         ✅ Service dynamique
│   ├── realisations/
│   │   └── page.tsx                ✅ Galerie portfolio
│   ├── a-propos/
│   │   └── page.tsx                ✅ À propos
│   ├── contact/
│   │   └── page.tsx                ✅ Formulaire devis
│   └── blog/
│       ├── page.tsx                ✅ Liste articles
│       └── [slug]/page.tsx         ✅ Article détail
├── components/
│   ├── layout/
│   │   ├── header.tsx              ✅ Header sticky + mobile menu
│   │   └── footer.tsx              ✅ Footer complet
│   ├── home/
│   │   ├── hero-section.tsx        ✅ Hero avec gradient + CTA
│   │   ├── services-grid.tsx       ✅ Grid 6 services animée
│   │   ├── stats-section.tsx       ✅ Compteurs animés
│   │   ├── certifications.tsx      ✅ Certifications RGE/Qualibat
│   │   ├── testimonials-carousel.tsx ✅ Carrousel auto-scroll
│   │   ├── zones-section.tsx       ✅ Zones Île-de-France
│   │   └── cta-band.tsx            ✅ CTA orange réutilisable
│   ├── services/
│   │   └── service-page-template.tsx ✅ Template page service
│   ├── projects/
│   │   └── project-gallery.tsx     ✅ Galerie filtres + lightbox
│   └── forms/
│       └── quote-form.tsx          ✅ Formulaire devis 3 étapes
├── lib/
│   ├── utils.ts                    ✅ cn() utility
│   ├── data/
│   │   ├── company.ts              ✅ Infos entreprise, stats, certifs, zones
│   │   ├── services.ts             ✅ 6 services détaillés
│   │   ├── projects.ts             ✅ 8 projets avec photos
│   │   ├── testimonials.ts         ✅ 8 témoignages
│   │   └── blog.ts                 ✅ 5 articles SEO
│   └── validations/
│       └── quote-schema.ts         ✅ Zod schema formulaire devis
└── types/
    └── index.ts                    ✅ Types TypeScript centralisés
```

---

## 🎯 Puter.js / Nano Banana

**Script** : `<script src="https://js.puter.com/v2/" async>` dans `layout.tsx`
**Aucune clé API requise.**

**Modèles** :
- Production/qualité : `gemini-3-pro-image-preview`
- Rapide/prototype : `gemini-2.5-flash-image-preview`

**Prompts types pour couvreur** :
```js
// Hero
puter.ai.txt2img("Vue aérienne toit ardoise française rénovée, maison normande, ciel bleu, qualité photo professionnelle")

// Service
puter.ai.txt2img("Artisan couvreur installant tuiles mécaniques, sécurité, France, style reportage photo")
```

**⚠️ Fallback** : Si Puter.js indisponible → Unsplash avec tag "roofing" ou "roof tiles france"

---

## 🔑 À Personnaliser (Placeholders)

Modifier `src/lib/data/company.ts` :
- `COMPANY.name` → Nom réel de l'entreprise
- `COMPANY.phone` + `COMPANY.phoneMobile` → Vrais numéros
- `COMPANY.email` + `COMPANY.emailDevis` → Vrais emails
- `COMPANY.address` → Adresse réelle
- `COMPANY.siret` → SIRET réel
- `COMPANY.website` → URL du domaine final
- `COMPANY.social` → Liens réseaux sociaux réels

---

## 📋 Sprint Journal

### Sprint 1 — Fondations ✅
- [x] Next.js 16 + TypeScript + Tailwind CSS 4
- [x] Shadcn/UI initialisé + composants de base
- [x] Design system (couleurs bleu/orange/slate)
- [x] Puter.js intégré dans layout.tsx
- [x] CLAUDE.md créé

### Sprint 2 — Layout + Accueil ✅
- [x] Header sticky avec menu déroulant services + hamburger mobile
- [x] Footer complet (4 colonnes + CTA band orange)
- [x] HeroSection (gradient + CTA + trust badges)
- [x] ServicesGrid (6 cards animées)
- [x] StatsSection (compteurs animés au scroll)
- [x] CertificationsSection (RGE, Qualibat, décennale, Pro BTP)
- [x] TestimonialsCarousel (auto-scroll + dots + arrows)
- [x] ZonesSection (Île-de-France)
- [x] CtaBand (réutilisable)

### Sprint 3 — Pages + Contenu ✅
- [x] ServicePageTemplate (réutilisable, avec breadcrumb + sidebar)
- [x] Services index page + routes dynamiques [slug]
- [x] ProjectGallery avec filtres + lightbox avant/après
- [x] Réalisations page
- [x] À Propos (timeline + valeurs + certifications)
- [x] Contact page + QuoteForm 3 étapes (Zod + validation)
- [x] Blog index + article template

### Sprint 4 — SEO ✅
- [x] generateMetadata par page
- [x] sitemap.ts natif Next.js
- [x] robots.ts
- [x] Schema.org RoofingContractor dans layout.tsx

### Sprint 5 — À faire
- [ ] Server Action envoi email (formulaire devis)
- [ ] Mentions légales + politique confidentialité
- [ ] Page 404 personnalisée
- [ ] Images Nano Banana (génération)

### Sprint 6 — Optimisation & Déploiement
- [ ] Audit Lighthouse (objectif > 95)
- [ ] Optimisation images (WebP/AVIF, lazy loading)
- [ ] Test responsive (mobile/tablette/desktop)
- [ ] Déploiement Vercel
- [ ] Configuration domaine personnalisé

---

## ⚠️ Règles de Développement

**TypeScript** :
- Strict activé, aucun `any` autorisé
- Types centralisés dans `src/types/index.ts`
- Zod pour toute validation formulaire

**Composants** :
- Server Components par défaut
- `"use client"` uniquement pour : forms, carousels, animations, galeries
- Convention : PascalCase pour composants, camelCase pour utils

**Performance** :
- `next/image` obligatoire pour toutes les images (sizes attribute requis)
- `loading="lazy"` sur images hors-viewport
- Suspense/loading.tsx pour routes lentes

**SEO** :
- `generateMetadata` sur chaque route obligatoire
- Attribut `alt` sur 100% des images
- Schema.org JSON-LD injecté dans layout.tsx

**Accessibilité** :
- Aria-labels sur tous les éléments interactifs
- Contraste WCAG AA minimum (4.5:1)
- Navigation clavier fonctionnelle
