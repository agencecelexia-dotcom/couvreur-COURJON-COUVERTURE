# Guide de Personnalisation — Template Couvreur
> Pour les agents IA. Suivre ces étapes dans l'ordre pour personnaliser entièrement le site.

---

## VUE D'ENSEMBLE

La personnalisation se fait en **3 étapes** :
1. Remplir `CLIENT.md` (configuration centralisée)
2. Lancer `npm run sync-client` (génère `src/config/client.config.ts`)
3. Personnaliser les fichiers de contenu dynamique (textes longs, FAQ, projets, témoignages)

**Important :** `client.config.ts` est généré automatiquement. Ne jamais l'éditer à la main — toujours passer par `CLIENT.md`.

---

## ÉTAPE 1 — REMPLIR `CLIENT.md`

Fichier : `CLIENT.md` à la racine du projet.

Chaque variable suit le format : `NOM_VARIABLE: "valeur"`

### Section IDENTITE

| Variable | Description | Exemple |
|---|---|---|
| `NOM_ENTREPRISE` | Nom commercial affiché partout sur le site | `"Couverture Dupont"` |
| `NOM_LEGAL` | Raison sociale complète pour mentions légales | `"Couverture Dupont SARL"` |
| `SIRET` | Numéro SIRET (mentions légales) | `"123 456 789 00012"` |
| `METIER` | Identifiant métier (minuscule, pas d'espace) | `"couvreur"` |
| `METIER_LABEL` | Métier affiché (majuscule initiale) | `"Couvreur"` |
| `GENRE_DIRIGEANT` | `"M"` ou `"F"` (accord he/she dans les textes) | `"M"` |
| `PRENOM_DIRIGEANT` | Prénom du dirigeant | `"Jean"` |
| `NOM_DIRIGEANT` | Nom du dirigeant | `"Dupont"` |
| `DIPLOME_DIRIGEANT` | Qualification (commence par minuscule — capitalisé automatiquement) | `"couvreur-zingueur diplômé, Compagnon du Devoir"` |
| `ANNEE_CREATION` | Année de fondation de l'entreprise | `"2008"` |
| `ANNEES_EXPERIENCE` | Nombre d'années d'expérience (= année courante - ANNEE_CREATION) | `"17"` |

### Section CONTACT

| Variable | Description | Exemple |
|---|---|---|
| `TELEPHONE` | Numéro de téléphone principal (affiché + FloatingCTA) | `"01 23 45 67 89"` |
| `EMAIL` | Email de contact principal | `"contact@couverture-dupont.fr"` |
| `ADRESSE` | Rue et numéro | `"12 Rue des Artisans"` |
| `CODE_POSTAL` | Code postal | `"78000"` |
| `VILLE` | Ville principale (utilisée dans les projets et SEO) | `"Versailles"` |
| `DEPARTEMENT` | Département | `"Yvelines"` |
| `REGION` | Région | `"Île-de-France"` |
| `PAYS` | Pays | `"France"` |
| `HORAIRES` | Horaires d'ouverture | `"Lun-Ven: 8h00-18h00, Sam: 9h00-13h00"` |
| `ZONE_INTERVENTION` | Zone géographique complète (texte libre utilisé dans FAQ, CTA, footer) | `"Versailles, Saint-Germain-en-Laye, Rambouillet et les Yvelines (78)"` |
| `ZONES_LISTE` | **Liste de villes séparées par virgule** — alimente les badges "Notre Zone d'Intervention" sur la home ET les localisations du tableau de bord admin. La 1ère ville est mise en avant (badge coloré). | `"Versailles, Saint-Germain-en-Laye, Rambouillet, Poissy, Mantes-la-Jolie, Les Mureaux, Houdan"` |
| `LATITUDE` | Latitude GPS (Schema.org) | `"48.8014"` |
| `LONGITUDE` | Longitude GPS (Schema.org) | `"2.1301"` |

### Section BRANDING

Les couleurs utilisent le format **oklch()**. Garder les valeurs par défaut si le client n'a pas de charte graphique.

| Variable | Description | Défaut |
|---|---|---|
| `COULEUR_PRIMAIRE_HUE` | Teinte de la couleur primaire (0-360) | `"220"` (bleu) |
| `COULEUR_PRIMAIRE_900` | Couleur primaire foncée (header, textes foncés) | `"oklch(0.22 0.06 220)"` |
| `COULEUR_ACCENT_HUE` | Teinte de l'accent (0-360) | `"25"` (orange) |
| `COULEUR_ACCENT_500` | Couleur d'accent (boutons CTA, éléments clés) | `"oklch(0.64 0.16 25)"` |
| `COULEUR_FOND_50` | Fond clair (sections alternées) | `"oklch(0.985 0.005 80)"` |
| `FONT_TITRES` | Police des titres | `"Playfair Display"` |
| `FONT_CORPS` | Police du corps de texte | `"DM Sans"` |

### Section SEO

| Variable | Description | Exemple |
|---|---|---|
| `DOMAINE` | Domaine sans protocole | `"www.couverture-dupont.fr"` |
| `META_TITLE` | Title de la page d'accueil (50-60 car.) | `"Couverture Dupont \| Couvreur à Versailles"` |
| `META_DESCRIPTION` | Description meta (150-160 car.) | `"Couvreur à Versailles depuis 2008. Toiture neuve, rénovation, zinguerie, isolation. Devis gratuit sous 48h."` |
| `META_KEYWORDS` | Mots-clés SEO (liste séparée par virgules) | `"couvreur Versailles, couverture Yvelines, toiture 78"` |
| `SCHEMA_TYPE` | Type Schema.org | `"RoofingContractor"` |

### Section CONTENU

Ces variables alimentent les sections principales du site.

| Variable | Utilisé dans | Exemple |
|---|---|---|
| `SLOGAN` | Header (sous le logo) | `"L'excellence de la couverture artisanale"` |
| `ACCROCHE_HERO` | Titre h1 de la hero section | `"Votre Toiture — Entre de Bonnes Mains"` |
| `DESCRIPTION_ENTREPRISE` | Section "À propos" de la home, meta description alternative | Texte 2-3 phrases sur l'entreprise |
| `DESCRIPTION_FOOTER` | Footer (colonne présentation) | Texte court 1-2 phrases |
| `DESCRIPTION_APROPOS` | Page À propos, paragraphe intro hero | Texte 3-4 phrases sur l'histoire |

### Section SERVICES (SERVICE_1 à SERVICE_6)

Six services avec titre et description courte. Ces valeurs alimentent la grille services de la home et les cards de la page services.

| Service | Titre suggéré | Description (80-120 car.) |
|---|---|---|
| SERVICE_1 | `"Couverture Neuve"` | Installation complète depuis la charpente |
| SERVICE_2 | `"Rénovation de Toiture"` | Refection partielle ou totale |
| SERVICE_3 | `"Zinguerie"` | Gouttières, descentes EP, solins |
| SERVICE_4 | `"Isolation de Toiture"` | Sarking ou isolation par l'intérieur |
| SERVICE_5 | `"Dépannage & Urgence"` | Intervention sous 24-48h |
| SERVICE_6 | `"Démoussage & Entretien"` | Traitement anti-mousse et hydrofuge |

### Section RESEAUX SOCIAUX

Laisser vide (`""`) si le réseau n'est pas utilisé. Les liens vides sont masqués automatiquement.

| Variable | Exemple |
|---|---|
| `GOOGLE_MAPS_URL` | `"https://maps.google.com/?cid=XXXXX"` |
| `GOOGLE_REVIEWS_URL` | `"https://g.page/r/XXXXX/review"` |
| `FACEBOOK_URL` | `"https://www.facebook.com/couverturedupont"` |
| `INSTAGRAM_URL` | `"https://www.instagram.com/couverturedupont"` |
| `LINKEDIN_URL` | `""` (couvreurs n'ont généralement pas de LinkedIn) |
| `PINTEREST_URL` | `""` |

### Section TEMOIGNAGES

**⚠️ Important :** Remplacer les placeholders par de vrais témoignages ou des témoignages plausibles. Les valeurs `"Famille Placeholder"`, `"M. Placeholder"`, `"Commune voisine"`, `"Ville proche"` ne doivent PAS apparaître sur le site final.

| Variable | Exemple |
|---|---|
| `TEMOIGNAGE_1_NOM` | `"Famille Martin"` |
| `TEMOIGNAGE_1_VILLE` | Utiliser une vraie ville de la zone d'intervention |
| `TEMOIGNAGE_1_TEXTE` | Témoignage naturel, 2-3 phrases, sur une prestation réelle |
| `TEMOIGNAGE_1_NOTE` | `"5"` (sur 5) |
| `TEMOIGNAGE_2_NOM` | `"M. Bernard"` |
| `TEMOIGNAGE_2_VILLE` | Ville voisine de la zone |
| `TEMOIGNAGE_2_TEXTE` | Témoignage différent du 1er (autre type de travaux) |
| `TEMOIGNAGE_3_NOM` | `"Mme. Rousseau"` |
| `TEMOIGNAGE_3_VILLE` | Autre ville de la zone |
| `TEMOIGNAGE_3_TEXTE` | Témoignage sur urgence ou entretien |

### Section HEBERGEMENT

Pré-rempli pour Vercel. Modifier si hébergeur différent.

### Section INTEGRATIONS

| Variable | Description |
|---|---|
| `N8N_WEBHOOK` | URL du webhook n8n pour réception des formulaires (laisser vide si non utilisé) |
| `ADMIN_PASSWORD` | ⚠️ **CHANGER IMPÉRATIVEMENT** — mot de passe panneau admin |

---

## ÉTAPE 2 — LANCER SYNC-CLIENT

```bash
npm run sync-client
```

Cette commande :
- Lit `CLIENT.md`
- Génère `src/config/client.config.ts`
- Met à jour les couleurs et polices dans `src/app/globals.css`

**En local :** le serveur de développement (`npm run dev`) détecte automatiquement le changement via HMR.

**Sur Vercel :** les changements nécessitent un commit + push → redeployment Vercel.

---

## ÉTAPE 3 — PERSONNALISER LE CONTENU DYNAMIQUE

Ces fichiers contiennent du texte qui ne peut pas être paramétré via `CLIENT.md` et doit être adapté manuellement (ou par l'IA).

### 3.1 FAQ — `src/data/faq.ts`

6 questions/réponses. Adapter les réponses au contexte local du couvreur :

- **Question 1** (devis) : Vérifier que le numéro de téléphone est bien via `clientConfig.TELEPHONE`
- **Question 2** (matériaux) : Mentionner les matériaux spécifiques à la région (ex : tuiles canal en Sud, ardoise en Normandie)
- **Question 3** (durée) : Adapter si nécessaire aux délais habituels de l'entreprise
- **Question 4** (garanties) : Vérifier que les garanties mentionnées correspondent aux assurances réelles
- **Question 5** (urgence) : Préciser le délai d'intervention réel (24h, 48h, etc.)
- **Question 6** (déroulement) : Vérifier que `clientConfig.ZONE_INTERVENTION` est bien utilisé

**À faire :** remplacer le texte générique par des informations précises propres à l'entreprise cliente.

### 3.2 Projets — `src/data/projects.ts`

4 projets types. Pour chaque projet, personnaliser :

- `title` : Adapter si nécessaire (ex : "Couverture Tuiles Canal — Mas Provençal" pour un couvreur provençal)
- `shortDescription` : 1-2 phrases sur le projet
- `fullDescription` : Description complète du projet (3-5 phrases) — adapter aux techniques et matériaux locaux
- `challenge` : Contrainte technique rencontrée
- `solution` : Solution apportée
- `surface` : Surface réelle ou plausible pour la région
- `duration` : Durée réelle du type de chantier
- `location` : Utiliser `clientConfig.VILLE` ou une ville de la zone
- `year` : Année récente (2022-2024)

**⚠️ Vérifier :** aucune référence géographique hardcodée ne doit rester (ex : "d'Angers" pour les ardoises — déjà corrigé en "de haute qualité").

### 3.3 Services — `src/data/services.ts`

Les titres et descriptions courtes viennent de `clientConfig` (via `SERVICE_X_TITRE` et `SERVICE_X_DESC`).

Les **descriptions longues** (`fullDescription`) et les **features** sont dans le fichier. Adapter si l'entreprise a des spécificités :
- Mettre en avant les matériaux phares de la région
- Adapter les mentions d'aides financières (MaPrimeRenov, CEE — toujours valables en 2025)
- Si l'entreprise ne propose pas tous les services, retirer le service du fichier ET de `CLIENT.md`

### 3.4 Blog — `src/data/blog-posts.ts`

6 articles. Le contenu est générique (conseils couverture). Pour un site de qualité :
- Adapter les exemples dans les articles à la région/aux matériaux locaux
- Vérifier que l'auteur (`author`) utilise bien `clientConfig.PRENOM_DIRIGEANT + NOM_DIRIGEANT`
- Optionnel : réécrire 1-2 articles avec du contenu SEO ciblé sur les mots-clés locaux

### 3.5 Page À Propos — `src/app/a-propos/page.tsx`

Trois éléments à personnaliser dans ce fichier :

**Tableau `certifications` (lignes 15-20) :**
```typescript
const certifications = [
  { name: "Garantie Décennale", description: "..." },
  { name: "Qualibat RGE", description: "..." },      // Supprimer si pas certifié RGE
  { name: "Assurance RC Pro", description: "..." },
  { name: "Formation Continue", description: "..." },
];
```
→ Ne garder que les certifications réelles de l'entreprise.

**Tableau `timeline` (lignes 22-30) :**
Généré automatiquement à partir de `ANNEE_CREATION` et `ANNEES_EXPERIENCE`. Les libellés des événements sont génériques. Adapter si l'entreprise a une histoire particulière (reprise de parent, fusion, prix obtenus, etc.).

**Tableau `values` (lignes 32-38) :**
```typescript
const values = [
  "Matériaux de qualité sélectionnés auprès de fournisseurs reconnus",
  "Équipes formées et expérimentées en couverture traditionnelle",
  "Aucun sous-traitant — toujours nos propres équipes",
  "Chantier propre et sécurisé, voisinage respecté",
  "Garantie décennale sur tous nos travaux de couverture",
];
```
→ Adapter aux vraies valeurs de l'entreprise. Supprimer "Aucun sous-traitant" si l'entreprise sous-traite.

---

## ÉTAPE 4 — IMAGES

### Architecture des 19 images

Déposer les images dans les dossiers correspondants :

```
public/images/
├── hero-toiture.png                    ← Image principale hero (1920×1080)
├── og-default.png                      ← Image Open Graph réseaux sociaux (1200×630)
├── services/
│   ├── couverture-neuve.jpg            ← Service 1
│   ├── renovation-toiture.jpg          ← Service 2
│   ├── zinguerie.jpg                   ← Service 3
│   ├── isolation-toiture.jpg           ← Service 4
│   ├── depannage.jpg                   ← Service 5
│   └── demoussage.jpg                  ← Service 6
└── projects/
    ├── projet-ardoise-1.png            ← Projet ardoise (photo principale)
    ├── projet-ardoise-2.png            ← Projet ardoise (photo secondaire)
    ├── projet-tuiles-1.png             ← Projet tuiles (photo principale)
    ├── projet-tuiles-2.png             ← Projet tuiles (photo secondaire)
    ├── projet-zinc-1.png               ← Projet zinc (photo principale)
    ├── projet-zinc-2.png               ← Projet zinc (photo secondaire)
    ├── projet-renovation-1.png         ← Projet rénovation (photo principale)
    ├── projet-renovation-2.png         ← Projet rénovation (photo secondaire)
    ├── equipe-chantier.png             ← Photo équipe sur chantier
    ├── artisan-ardoise.png             ← Artisan en train de poser des ardoises
    └── portrait-dirigeant.png          ← Portrait professionnel du dirigeant
```

### Génération via Puter.js / Higgsfield

Le script Puter.js (disponible dans `layout.tsx`) permet de générer des images via Gemini :

```js
// Hero
puter.ai.txt2img("Vue aérienne toiture en ardoise française rénovée, maison de caractère, ciel bleu, qualité photo professionnelle")

// Service couverture neuve
puter.ai.txt2img("Artisan couvreur posant des tuiles mécaniques sur toit neuf, sécurité, soleil, France, style reportage photo")

// Portrait dirigeant
puter.ai.txt2img("Portrait professionnel artisan couvreur, tenue de travail, souriant, fond chantier flou, France")
```

---

## ÉTAPE 5 — DÉPLOYER SUR VERCEL

```bash
# 1. Vérifier que tout compile
npm run build

# 2. Committer tous les fichiers modifiés
git add -A
git commit -m "feat: personnalisation client [NOM_ENTREPRISE]"

# 3. Pousser sur le dépôt
git push origin main
```

Vercel détecte automatiquement le push et relance un déploiement.

---

## RÉCAPITULATIF — CHECKLIST COMPLÈTE

### CLIENT.md
- [ ] `NOM_ENTREPRISE` — nom commercial réel
- [ ] `NOM_LEGAL` + `SIRET` — pour mentions légales
- [ ] `PRENOM_DIRIGEANT` + `NOM_DIRIGEANT` + `DIPLOME_DIRIGEANT`
- [ ] `GENRE_DIRIGEANT` — M ou F
- [ ] `ANNEE_CREATION` + `ANNEES_EXPERIENCE`
- [ ] `TELEPHONE` + `EMAIL`
- [ ] `ADRESSE` + `CODE_POSTAL` + `VILLE` + `DEPARTEMENT` + `REGION`
- [ ] `LATITUDE` + `LONGITUDE` (pour Schema.org)
- [ ] `HORAIRES`
- [ ] `ZONE_INTERVENTION` — zones géographiques complètes (texte libre)
- [ ] `ZONES_LISTE` — liste de villes séparées par virgule (7 villes max recommandées)
- [ ] `DOMAINE` — URL finale du site
- [ ] `META_TITLE` + `META_DESCRIPTION` + `META_KEYWORDS`
- [ ] `SLOGAN` + `ACCROCHE_HERO`
- [ ] `DESCRIPTION_ENTREPRISE` + `DESCRIPTION_FOOTER` + `DESCRIPTION_APROPOS`
- [ ] `SERVICE_1` à `SERVICE_6` — titres et descriptions
- [ ] Réseaux sociaux (URLs ou `""` si absent)
- [ ] `TEMOIGNAGE_1/2/3` — **vrais noms, vraies villes, vrais textes**
- [ ] `ADMIN_PASSWORD` — **changer le mot de passe par défaut "1234"**

### Contenu dynamique
- [ ] `src/data/faq.ts` — réponses adaptées à l'entreprise
- [ ] `src/data/projects.ts` — descriptions projets adaptées à la région et aux matériaux
- [ ] `src/data/services.ts` — fullDescription et features vérifiés
- [ ] `src/app/a-propos/page.tsx` — certifications réelles, values adaptées
- [ ] `src/data/blog-posts.ts` — contenu pertinent (optionnel : enrichir pour le SEO local)

### Images (19 fichiers)
- [ ] `hero-toiture.png`
- [ ] `og-default.png`
- [ ] 6 images services (JPG)
- [ ] 8 images projets (PNG, 4 projets × 2)
- [ ] `equipe-chantier.png` + `artisan-ardoise.png` + `portrait-dirigeant.png`

### Technique
- [ ] `npm run sync-client` lancé après modification de `CLIENT.md`
- [ ] `npm run build` passe sans erreur
- [ ] `git push` → déploiement Vercel

---

## NOTE SUR LE PANNEAU ADMIN

Le panneau admin (`/admin`) est principalement un outil de **développement local** pour prévisualiser et modifier la configuration.

- En local (`npm run dev`) : les modifications via "Contenu du site" sont sauvegardées dans `CLIENT.md` ET `client.config.ts`, et visibles immédiatement via HMR.
- **Sur Vercel (production)** : le filesystem est en lecture seule. Les modifications via le panneau admin ne persistent pas. Toute mise à jour du contenu doit passer par `CLIENT.md` → `sync-client` → `git push`.
