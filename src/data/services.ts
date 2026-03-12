import type { Service } from "@/types";
import { clientConfig } from "@/config/client.config";

export const services: Service[] = [
  {
    id: "couverture-neuve",
    slug: "couverture-neuve",
    title: clientConfig.SERVICE_1_TITRE,
    shortDescription: clientConfig.SERVICE_1_DESC,
    fullDescription:
      "Installation complete de votre toiture neuve avec les materiaux de votre choix : ardoise naturelle, tuiles mecaniques ou plates, zinc a joints debout ou bac acier. Nous intervenons depuis la charpente jusqu'aux finitions de faitiere, en passant par l'ecran sous-toiture, la pose de liteaux et la couverture elle-meme. Chaque chantier est realise dans les regles de l'art pour une etancheite parfaite et une duree de vie optimale.",
    features: [
      "Choix des materiaux (ardoise, tuile, zinc, bac acier)",
      "Pose d'ecran sous-toiture HPV",
      "Liteaunage et contre-liteaunage",
      "Couverture et finitions (faitieres, rives, noues)",
      "Garantie decennale sur tous nos travaux",
    ],
    image: "/images/services/couverture-neuve.jpg",
    icon: "home",
    order: 1,
  },
  {
    id: "renovation-toiture",
    slug: "renovation-de-toiture",
    title: clientConfig.SERVICE_2_TITRE,
    shortDescription: clientConfig.SERVICE_2_DESC,
    fullDescription:
      "La renovation de toiture comprend le remplacement partiel ou total de votre couverture existante. Nous realisons un diagnostic complet de l'etat de votre toit, identifions les zones endommagees et proposons la solution la plus adaptee : remplacement de tuiles cassees, refection de la sous-toiture, ou renovation complete avec mise aux normes. Notre objectif : redonner a votre toiture son etancheite et son esthetique d'origine.",
    features: [
      "Diagnostic complet de l'etat de la toiture",
      "Remplacement tuiles ou ardoises endommagees",
      "Refection de la sous-toiture si necessaire",
      "Traitement de charpente preventif",
      "Mise aux normes et respect du PLU",
    ],
    image: "/images/services/renovation-toiture.jpg",
    icon: "refresh-cw",
    order: 2,
  },
  {
    id: "zinguerie",
    slug: "zinguerie",
    title: clientConfig.SERVICE_3_TITRE,
    shortDescription: clientConfig.SERVICE_3_DESC,
    fullDescription:
      "La zinguerie est un element essentiel de votre toiture : elle assure l'evacuation des eaux de pluie et protege les points sensibles de votre couverture. Nous realisons la pose et la reparation de gouttieres, descentes d'eaux pluviales, cheneaux, noues, abergements et solins en zinc, cuivre ou aluminium laque. Un travail de precision pour une etancheite durable.",
    features: [
      "Pose de gouttieres et descentes EP",
      "Fabrication sur mesure de cheneaux",
      "Realisation de noues et abergements",
      "Pose de solins et bavettes",
      "Materiaux : zinc, cuivre, aluminium laque",
    ],
    image: "/images/services/zinguerie.jpg",
    icon: "droplets",
    order: 3,
  },
  {
    id: "isolation-toiture",
    slug: "isolation-de-toiture",
    title: clientConfig.SERVICE_4_TITRE,
    shortDescription: clientConfig.SERVICE_4_DESC,
    fullDescription:
      "L'isolation de toiture est le premier levier d'economies d'energie de votre habitation : jusqu'a 30% des deperditions thermiques passent par le toit. Nous proposons l'isolation par l'interieur (sous rampants, combles perdus) ou par l'exterieur (sarking). Nos solutions repondent aux exigences de la RE2020 et vous permettent de beneficier des aides financieres en vigueur (MaPrimeRenov, CEE).",
    features: [
      "Isolation sous rampants et combles perdus",
      "Isolation par l'exterieur (sarking)",
      "Materiaux certifies (laine de verre, laine de bois, PIR)",
      "Conformite RE2020 et eligibilite aides",
      "Amelioration du confort ete comme hiver",
    ],
    image: "/images/services/isolation-toiture.jpg",
    icon: "thermometer",
    order: 4,
  },
  {
    id: "depannage-urgence",
    slug: "depannage-et-urgence",
    title: clientConfig.SERVICE_5_TITRE,
    shortDescription: clientConfig.SERVICE_5_DESC,
    fullDescription:
      "Une fuite, des tuiles arrachees par le vent, un degat des eaux ? Notre equipe intervient rapidement pour securiser votre toiture et limiter les degats. Nous realisons le bachage d'urgence, le remplacement des elements endommages et la remise en etat de votre couverture. Disponibilite et reactivite pour proteger votre habitation dans les plus brefs delais.",
    features: [
      "Intervention rapide sous 24 a 48h",
      "Bachage d'urgence apres tempete",
      "Remplacement de tuiles ou ardoises cassees",
      "Reparation de fuites et infiltrations",
      "Prise en charge du dossier assurance",
    ],
    image: "/images/services/depannage.jpg",
    icon: "alert-triangle",
    order: 5,
  },
  {
    id: "demoussage-entretien",
    slug: "demoussage-et-entretien",
    title: clientConfig.SERVICE_6_TITRE,
    shortDescription: clientConfig.SERVICE_6_DESC,
    fullDescription:
      "L'entretien regulier de votre toiture est essentiel pour preserver son etancheite et son esthetique. Nous proposons le demoussage mecanique ou chimique, le traitement anti-mousse longue duree et l'application d'un hydrofuge pour impermeabiliser vos tuiles ou ardoises. Un entretien realise dans les regles de l'art pour prolonger significativement la duree de vie de votre couverture.",
    features: [
      "Demoussage mecanique ou chimique",
      "Traitement anti-mousse longue duree",
      "Application d'hydrofuge protecteur",
      "Nettoyage des gouttieres et descentes",
      "Controle visuel de l'etat general du toit",
    ],
    image: "/images/services/demoussage.jpg",
    icon: "leaf",
    order: 6,
  },
];
