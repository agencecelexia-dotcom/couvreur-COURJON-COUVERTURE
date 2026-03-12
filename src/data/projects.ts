import type { Project } from "@/types";
import { clientConfig } from "@/config/client.config";

export const projects: Project[] = [
  {
    id: "ardoise-1",
    slug: "couverture-ardoise-maison-bourgeoise",
    title: "Couverture Ardoise — Maison Bourgeoise",
    shortDescription:
      "Refection complete d'une toiture en ardoise naturelle sur une maison bourgeoise de 200 m², avec remplacement de la sous-toiture et pose de faitieres en zinc.",
    fullDescription:
      "Refection integrale de la couverture d'une maison bourgeoise du XIXe siecle. Depose de l'ancienne couverture en ardoise, remplacement de l'ecran sous-toiture, verification et traitement de la charpente, puis repose d'ardoises naturelles de haute qualite. Finitions en zinc naturel pour les faitieres, rives et noues.",
    challenge:
      "Charpente ancienne presentant des signes de fatigue sur certains arbaletriers. Acces difficile au chantier en raison de la hauteur et de la pente du toit (45 degres). Conservation du cachet architectural de la maison.",
    solution:
      "Renforcement des arbaletriers fatigues par doublage. Mise en place d'un echafaudage perimetral integral avec filet de protection. Utilisation d'ardoises naturelles de meme format et couleur que les originales pour respecter l'esthetique du batiment.",
    category: "couverture-ardoise",
    featuredImage: "/images/projects/projet-ardoise-1.png",
    images: [
      "/images/projects/projet-ardoise-1.png",
      "/images/projects/projet-ardoise-2.png",
    ],
    surface: "200 m²",
    duration: "3 semaines",
    location: clientConfig.VILLE,
    year: 2024,
    featured: true,
    services: ["couverture-neuve", "zinguerie"],
  },
  {
    id: "tuiles-1",
    slug: "couverture-tuiles-pavillon",
    title: "Couverture Tuiles — Pavillon Familial",
    shortDescription:
      "Remplacement integral de la couverture en tuiles mecaniques d'un pavillon de 140 m², avec pose d'ecran sous-toiture et ventilation de faitage.",
    fullDescription:
      "Renovation complete de la toiture d'un pavillon familial des annees 1980. Depose des anciennes tuiles mecaniques vieillissantes, mise en place d'un ecran sous-toiture HPV, remplacement des liteaux et contre-liteaux, puis pose de tuiles mecaniques neuves grand moule. Installation d'une ventilation de faitage pour assurer la perennite de la charpente.",
    challenge:
      "Toiture de faible pente (25 degres) necessitant une attention particuliere a l'etancheite. Presence d'un velux et d'une cheminee imposante compliquant la pose. Maintien de l'habitation occupee pendant les travaux.",
    solution:
      "Choix de tuiles a emboitement renforce pour la faible pente avec pose d'un ecran sous-toiture HPV. Refection complete des raccords d'etancheite autour du velux et de la cheminee avec bavettes en plomb. Organisation du chantier par versant pour limiter la gene aux occupants.",
    category: "couverture-tuiles",
    featuredImage: "/images/projects/projet-tuiles-1.png",
    images: [
      "/images/projects/projet-tuiles-1.png",
      "/images/projects/projet-tuiles-2.png",
    ],
    surface: "140 m²",
    duration: "2 semaines",
    location: `${clientConfig.VILLE} et environs`,
    year: 2023,
    featured: true,
    services: ["renovation-toiture", "zinguerie"],
  },
  {
    id: "zinc-1",
    slug: "couverture-zinc-joint-debout",
    title: "Couverture Zinc — Joint Debout",
    shortDescription:
      "Realisation d'une couverture en zinc a joint debout sur une extension contemporaine, avec gouttieres et descentes EP en zinc naturel.",
    fullDescription:
      "Couverture complete en zinc naturel a joint debout d'une extension contemporaine adossee a une maison de caractere. Travail sur mesure avec decoupe et pliage en atelier, puis pose sur voligeage. Realisation des gouttieres pendantes, descentes d'eaux pluviales et dauphins en zinc naturel. Raccordement soigne entre la couverture existante en tuiles et la nouvelle couverture zinc.",
    challenge:
      "Raccordement delicat entre la toiture existante en tuiles et la nouvelle extension en zinc. Geometrie complexe du toit avec plusieurs pentes et un puits de lumiere. Exigences esthetiques elevees du maitre d'ouvrage.",
    solution:
      "Realisation d'un solin de raccordement en plomb et zinc entre les deux couvertures. Travail de tracage et decoupe sur mesure en atelier pour les parties complexes. Pose de bandes de zinc avec pattes de fixation a dilatation pour assurer la longevite.",
    category: "couverture-zinc",
    featuredImage: "/images/projects/projet-zinc-1.png",
    images: [
      "/images/projects/projet-zinc-1.png",
      "/images/projects/projet-zinc-2.png",
    ],
    surface: "65 m²",
    duration: "10 jours",
    location: clientConfig.VILLE,
    year: 2024,
    featured: true,
    services: ["couverture-neuve", "zinguerie"],
  },
  {
    id: "renovation-1",
    slug: "renovation-toiture-apres-tempete",
    title: "Rénovation Toiture — Après Tempête",
    shortDescription:
      "Reparation d'urgence et renovation d'une toiture endommagee par une tempete : bachage, remplacement d'ardoises arrachees et refection de la faitiere.",
    fullDescription:
      "Intervention d'urgence suite a une tempete ayant arrache une partie de la couverture en ardoise d'une maison d'habitation. Bachage immediat pour securiser le batiment, puis renovation complete du versant endommage : remplacement des ardoises arrachees, refection de la faitiere, verification et reparation de la charpente impactee. Accompagnement du proprietaire dans ses demarches d'assurance.",
    challenge:
      "Urgence de l'intervention pour eviter les infiltrations. Etendue des degats plus importante que visible depuis le sol. Delais de fourniture des ardoises de meme provenance.",
    solution:
      "Bachage d'urgence le jour meme de l'appel. Diagnostic complet par drone avant intervention. Constitution du dossier photographique pour l'assurance. Approvisionnement en ardoises de meme format aupres de notre reseau de fournisseurs.",
    category: "renovation",
    featuredImage: "/images/projects/projet-renovation-1.png",
    images: [
      "/images/projects/projet-renovation-1.png",
      "/images/projects/projet-renovation-2.png",
    ],
    surface: "90 m²",
    duration: "1 semaine",
    location: clientConfig.VILLE,
    year: 2024,
    featured: true,
    services: ["depannage-urgence", "renovation-toiture"],
  },
];
