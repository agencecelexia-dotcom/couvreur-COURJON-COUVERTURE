import type { BlogPost } from "@/types";
import { clientConfig } from "@/config/client.config";

const dirigeant = `${clientConfig.PRENOM_DIRIGEANT} ${clientConfig.NOM_DIRIGEANT}`;

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "comment-savoir-si-votre-toiture-a-besoin-renovation",
    title: "Comment Savoir si Votre Toiture a Besoin d'Être Rénovée",
    excerpt:
      "Fuites, tuiles cassees, mousse envahissante... Les signes qui indiquent qu'il est temps de renover votre toiture, et les solutions adaptees.",
    category: "Conseils",
    author: dirigeant,
    publishDate: "2024-11-15",
    readingTime: 6,
    featuredImage: "/images/services/renovation-toiture.jpg",
    tags: ["renovation", "diagnostic", "toiture"],
    content: [
      {
        type: "paragraph",
        content:
          "Votre toiture est la premiere protection de votre maison contre les intemperies. Avec le temps, elle subit les effets du vent, de la pluie, du gel et du soleil. Savoir reperer les signes de vieillissement est essentiel pour intervenir avant que les degats ne s'aggravent.",
      },
      {
        type: "heading",
        content: "Les Signes Visibles depuis l'Exterieur",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Tuiles ou ardoises cassees, fissurees ou manquantes",
          "Mousse et lichen abondants sur la couverture",
          "Gouttieres deformees, percees ou decrochees",
          "Faitiere endommagee ou descellée",
          "Solins decollés autour des cheminées et lucarnes",
        ],
      },
      {
        type: "heading",
        content: "Les Signes Visibles depuis l'Interieur",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Depuis vos combles, inspectez la charpente a la recherche de traces d'humidite, de taches sombres sur le bois ou de rayons de lumiere filtrant a travers la couverture. Des traces d'infiltration au plafond des etages superieurs sont egalement un signal d'alerte a ne pas negliger.",
      },
      {
        type: "heading",
        content: "Quand Faut-il Agir ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "En regle generale, une toiture en tuiles a une duree de vie de 30 a 50 ans, et une toiture en ardoise de 75 a 100 ans. Si votre couverture approche de ces ages ou presente les signes decrits ci-dessus, il est temps de faire appel a un professionnel pour un diagnostic complet. Une renovation anticipee coute toujours moins cher qu'une reparation d'urgence apres infiltration.",
      },
    ],
  },
  {
    id: "2",
    slug: "ardoise-vs-tuiles-quel-materiau-choisir",
    title: "Ardoise vs Tuiles : Quel Matériau Choisir pour Votre Toiture",
    excerpt:
      "Duree de vie, esthetique, prix, entretien... Comparatif complet entre l'ardoise et les tuiles pour vous aider a faire le bon choix.",
    category: "Guide",
    author: dirigeant,
    publishDate: "2024-10-02",
    readingTime: 8,
    featuredImage: "/images/services/couverture-neuve.jpg",
    tags: ["ardoise", "tuiles", "materiaux", "comparatif"],
    content: [
      {
        type: "paragraph",
        content:
          "Le choix du materiau de couverture est determinant pour l'esthetique, la durabilite et le budget de votre toiture. L'ardoise naturelle et les tuiles (terre cuite ou beton) sont les deux options les plus courantes en France. Voici un comparatif pour vous aider a trancher.",
      },
      {
        type: "heading",
        content: "L'Ardoise Naturelle : Noblesse et Longevite",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "L'ardoise naturelle est un materiau noble par excellence. Sa duree de vie exceptionnelle (75 a 100 ans), son esthetique raffinee et sa resistance naturelle aux intemperies en font un choix de prestige. Elle est particulierement adaptee aux toitures a forte pente et aux batiments de caractere. Son inconvenient : un cout de pose plus eleve en raison de la technicite requise.",
      },
      {
        type: "heading",
        content: "Les Tuiles : Polyvalence et Rapport Qualite-Prix",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Les tuiles en terre cuite offrent un excellent rapport qualite-prix avec une duree de vie de 30 a 50 ans. Disponibles dans une grande variete de formes (plates, mecaniques, canal) et de coloris, elles s'adaptent a tous les styles architecturaux. Les tuiles mecaniques a grand moule sont les plus economiques a la pose.",
      },
      {
        type: "heading",
        content: "Quel Materiau Choisir ?",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Budget serre : privilegiez les tuiles mecaniques en beton ou terre cuite",
          "Longevite maximale : optez pour l'ardoise naturelle",
          "Batiment ancien ou classe : respectez le materiau d'origine (souvent impose par le PLU)",
          "Extension contemporaine : le zinc a joint debout est une alternative moderne",
          "Toiture a faible pente : les tuiles a emboitement ou le bac acier sont plus adaptes",
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "importance-isolation-toiture-economies-energie",
    title: "L'Importance de l'Isolation de Toiture pour Vos Economies d'Energie",
    excerpt:
      "Jusqu'a 30% des deperditions thermiques passent par le toit. Decouvrez pourquoi et comment isoler votre toiture efficacement.",
    category: "Energie",
    author: "L'equipe",
    publishDate: "2025-01-08",
    readingTime: 10,
    featuredImage: "/images/services/isolation-toiture.jpg",
    tags: ["isolation", "economies", "energie", "RE2020"],
    content: [
      {
        type: "paragraph",
        content:
          "La toiture est le premier poste de deperdition thermique d'une maison mal isolee : jusqu'a 30% de la chaleur s'echappe par le toit. Investir dans l'isolation de votre toiture est donc le geste le plus rentable pour reduire votre facture energetique et ameliorer votre confort.",
      },
      {
        type: "heading",
        content: "Les Techniques d'Isolation de Toiture",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Isolation sous rampants : pose de panneaux ou rouleaux isolants sous la charpente, ideale pour les combles amenages",
          "Isolation des combles perdus : soufflage de laine minerale ou vegetale sur le plancher des combles, solution la plus economique",
          "Sarking (isolation par l'exterieur) : pose de panneaux rigides sur la charpente avant la couverture, sans perte de surface habitable",
        ],
      },
      {
        type: "heading",
        content: "Les Aides Financieres Disponibles",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Plusieurs dispositifs permettent de reduire le cout de vos travaux d'isolation : MaPrimeRenov (jusqu'a 75 euros/m² selon vos revenus), les Certificats d'Economies d'Energie (CEE), l'eco-pret a taux zero et la TVA reduite a 5,5%. Un artisan certifie RGE comme nous vous permet d'acceder a l'ensemble de ces aides.",
      },
      {
        type: "heading",
        content: "Quel Retour sur Investissement ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "En moyenne, une isolation de toiture bien realisee permet de reduire votre facture de chauffage de 20 a 30%. Le retour sur investissement se situe generalement entre 5 et 8 ans, voire moins avec les aides financieres. Sans compter le gain de confort : fini les pieces froides en hiver et la surchauffe en ete.",
      },
    ],
  },
  {
    id: "4",
    slug: "entretien-toiture-gestes-essentiels",
    title: "Entretien de Toiture : Les Gestes Essentiels pour la Preserver",
    excerpt:
      "Demoussage, nettoyage des gouttieres, verification des solins... Les bons reflexes pour prolonger la duree de vie de votre couverture.",
    category: "Entretien",
    author: dirigeant,
    publishDate: "2024-09-12",
    readingTime: 5,
    featuredImage: "/images/services/demoussage.jpg",
    tags: ["entretien", "demoussage", "gouttieres", "prevention"],
    content: [
      {
        type: "paragraph",
        content:
          "Comme tout element de votre maison, votre toiture necessite un entretien regulier pour conserver son etancheite et son esthetique. Des gestes simples, realises une a deux fois par an, permettent de prevenir les problemes couteux et de prolonger significativement la duree de vie de votre couverture.",
      },
      {
        type: "heading",
        content: "Les Controles a Effectuer Chaque Annee",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Verifier visuellement l'etat des tuiles ou ardoises (cassees, deplacees, manquantes)",
          "Controler les solins et raccords autour des cheminees, lucarnes et velux",
          "Inspecter la faitiere et les rives",
          "Nettoyer les gouttieres et descentes d'eaux pluviales (feuilles, mousse, debris)",
          "Verifier l'etat de la charpente depuis les combles (traces d'humidite, insectes)",
        ],
      },
      {
        type: "heading",
        content: "Le Demoussage : Quand et Pourquoi",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La mousse, le lichen et les algues ne sont pas seulement inesthetiques : ils retiennent l'humidite, accelerent le vieillissement des materiaux et peuvent soulever les tuiles. Un demoussage tous les 3 a 5 ans, suivi d'un traitement hydrofuge, est recommande pour maintenir votre toiture en bon etat.",
      },
      {
        type: "heading",
        content: "Quand Faire Appel a un Professionnel ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Si vous constatez des fuites, des tuiles endommagees en nombre, ou si votre toiture a plus de 20 ans sans entretien, il est preferable de faire appel a un couvreur professionnel. Il realisera un diagnostic complet et vous proposera les interventions necessaires, de la simple reparation a la renovation partielle.",
      },
    ],
  },
  {
    id: "5",
    slug: "zinguerie-role-importance-gouttieres",
    title: "Zinguerie : Rôle et Importance des Gouttières pour Votre Maison",
    excerpt:
      "Gouttieres, cheneaux, descentes EP... Pourquoi la zinguerie est indispensable et comment bien l'entretenir.",
    category: "Technique",
    author: "L'equipe",
    publishDate: "2024-08-20",
    readingTime: 7,
    featuredImage: "/images/services/zinguerie.jpg",
    tags: ["zinguerie", "gouttieres", "evacuation", "eaux pluviales"],
    content: [
      {
        type: "paragraph",
        content:
          "La zinguerie designe l'ensemble des elements metalliques qui assurent l'etancheite et l'evacuation des eaux de pluie de votre toiture : gouttieres, cheneaux, descentes, noues, abergements et solins. Souvent negligee, elle joue pourtant un role essentiel dans la protection de votre batiment.",
      },
      {
        type: "heading",
        content: "Les Differents Elements de Zinguerie",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Gouttieres et cheneaux : collectent les eaux de pluie en bas de pente",
          "Descentes d'eaux pluviales : acheminent l'eau vers le sol ou le reseau",
          "Noues : assurent l'etancheite a la jonction de deux pans de toiture",
          "Abergements : protegent le pourtour des cheminees et lucarnes",
          "Solins : raccordent la couverture aux murs et elements traversants",
        ],
      },
      {
        type: "heading",
        content: "Les Consequences d'une Zinguerie Defaillante",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Une gouttiere percee ou bouchee, un solin decolle ou un cheneau mal dimensionne peuvent provoquer des infiltrations, des ruissellements sur les facades, des dommages aux fondations et meme des problemes de moisissure a l'interieur du batiment. L'entretien regulier de la zinguerie est donc indispensable.",
      },
      {
        type: "heading",
        content: "Les Materiaux de Zinguerie",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Le zinc naturel reste le materiau de reference pour sa longevite (50 a 80 ans) et son esthetique. Le cuivre offre un rendu premium avec une patine verte caracteristique. L'aluminium laque est une alternative plus economique, disponible dans de nombreux coloris. Le PVC, moins durable, convient aux budgets serres.",
      },
    ],
  },
  {
    id: "6",
    slug: "demoussage-toiture-quand-pourquoi",
    title: "Démoussage de Toiture : Quand et Pourquoi le Faire",
    excerpt:
      "Mousse, lichen, algues... Pourquoi votre toiture se couvre de vegetaux et comment y remedier efficacement.",
    category: "Entretien",
    author: "L'equipe",
    publishDate: "2024-12-05",
    readingTime: 4,
    featuredImage: "/images/services/depannage.jpg",
    tags: ["demoussage", "mousse", "entretien", "hydrofuge"],
    content: [
      {
        type: "paragraph",
        content:
          "La mousse et le lichen s'installent naturellement sur les toitures, surtout celles exposees au nord ou situees a proximite d'arbres. Si un leger verdissement est normal, une proliferation excessive peut compromettre l'etancheite de votre couverture et accelerer sa degradation.",
      },
      {
        type: "heading",
        content: "Pourquoi la Mousse est Nuisible",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Elle retient l'humidite et favorise le gel/degel, qui fissure les tuiles",
          "Ses racines s'infiltrent sous les materiaux et les deplacent",
          "Elle bouche les gouttieres et empeche le bon ecoulement des eaux",
          "Elle donne un aspect neglige au batiment et diminue sa valeur",
        ],
      },
      {
        type: "heading",
        content: "Les Techniques de Demoussage",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Le demoussage mecanique consiste a gratter la mousse a l'aide d'une brosse ou d'un racloir, sans utiliser de nettoyeur haute pression qui pourrait endommager les tuiles. Le traitement chimique utilise un produit anti-mousse biodegradable qui elimine progressivement les vegetaux. L'application d'un hydrofuge en finition impermeabilise la surface et retarde la reapparition de la mousse.",
      },
      {
        type: "heading",
        content: "A Quelle Frequence Demousser ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Un demoussage est recommande tous les 3 a 5 ans selon l'exposition de votre toiture et l'environnement (arbres, humidite). La meilleure periode est le printemps ou l'automne, lorsque les temperatures sont douces et que la mousse est humide. Evitez les periodes de gel ou de forte chaleur.",
      },
    ],
  },
  {
    id: "7",
    slug: "aides-financieres-renovation-toiture",
    title: "Les Aides Financières pour la Rénovation de Toiture en 2025",
    excerpt:
      "MaPrimeRenov, CEE, eco-pret, TVA reduite... Tour d'horizon des aides pour financer vos travaux de toiture.",
    category: "Budget",
    author: dirigeant,
    publishDate: "2024-07-18",
    readingTime: 9,
    featuredImage: "/images/projects/artisan-ardoise.png",
    tags: ["aides", "financement", "MaPrimeRenov", "CEE", "renovation"],
    content: [
      {
        type: "paragraph",
        content:
          "La renovation de toiture represente un investissement important, mais de nombreuses aides financieres existent pour alleger la facture, notamment lorsque les travaux ameliorent la performance energetique du batiment. Voici un panorama des dispositifs accessibles.",
      },
      {
        type: "heading",
        content: "MaPrimeRenov : L'Aide Principale",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "MaPrimeRenov est l'aide phare de l'Etat pour la renovation energetique. Elle finance notamment l'isolation de toiture (sous rampants ou combles perdus) a hauteur de 15 a 75 euros/m² selon les revenus du menage. Condition indispensable : les travaux doivent etre realises par un artisan certifie RGE.",
      },
      {
        type: "heading",
        content: "Les Certificats d'Economies d'Energie (CEE)",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Les CEE sont finances par les fournisseurs d'energie et prennent la forme d'une prime versee directement au particulier. Cumulables avec MaPrimeRenov, ils peuvent couvrir une part significative du cout de l'isolation. Le montant depend de la surface isolee, de la resistance thermique atteinte et de la zone geographique.",
      },
      {
        type: "heading",
        content: "Autres Dispositifs",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Eco-pret a taux zero (eco-PTZ) : jusqu'a 50 000 euros sans interets pour un bouquet de travaux",
          "TVA reduite a 5,5% : applicable aux travaux d'isolation realises par un professionnel",
          "Aides locales : certaines collectivites proposent des complements de financement",
          "Cheque energie : utilisable pour payer une partie des travaux de renovation energetique",
        ],
      },
      {
        type: "paragraph",
        content:
          "Pour beneficier de ces aides, il est essentiel de faire appel a un artisan certifie RGE (Reconnu Garant de l'Environnement). Notre entreprise dispose de cette certification et vous accompagne dans le montage de vos dossiers de financement.",
      },
    ],
  },
  {
    id: "8",
    slug: "charpente-signes-usure-solutions",
    title: "Charpente : Signes d'Usure et Solutions pour la Préserver",
    excerpt:
      "Insectes xylophages, champignons, deformations... Comment detecter et traiter les problemes de charpente avant qu'il ne soit trop tard.",
    category: "Technique",
    author: "L'equipe",
    publishDate: "2024-06-03",
    readingTime: 6,
    featuredImage: "/images/projects/equipe-chantier.png",
    tags: ["charpente", "traitement", "bois", "insectes", "entretien"],
    content: [
      {
        type: "paragraph",
        content:
          "La charpente est la structure portante de votre toiture. En bois dans la grande majorite des maisons, elle est exposee a plusieurs menaces : insectes xylophages (capricornes, vrillettes, termites), champignons lignivores (merule) et deformations liees au temps. Un controle regulier est indispensable pour garantir la solidite de l'ensemble.",
      },
      {
        type: "heading",
        content: "Les Signes d'Alerte a Surveiller",
        level: 2,
      },
      {
        type: "list",
        items: [
          "Petits trous dans le bois avec presence de sciure fine (vrillettes, capricornes)",
          "Bois qui sonne creux lorsqu'on le frappe",
          "Deformations visibles : fleche des pannes, gauchissement des arbaletriers",
          "Traces d'humidite ou de moisissure sur le bois",
          "Affaissement visible de la toiture depuis l'exterieur",
        ],
      },
      {
        type: "heading",
        content: "Les Traitements Preventifs et Curatifs",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Le traitement preventif consiste a appliquer un produit insecticide et fongicide sur l'ensemble de la charpente pour la proteger pendant 10 a 20 ans. Le traitement curatif, necessaire lorsque des degats sont constates, implique le bûchage des parties attaquees, l'injection de produit sous pression et eventuellement le renforcement ou le remplacement des pieces fragilisees.",
      },
      {
        type: "heading",
        content: "Quand Faut-il Remplacer une Piece de Charpente ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Lorsqu'une piece de charpente a perdu plus de la moitie de sa section utile a cause des insectes ou des champignons, le remplacement est generalement necessaire. Un couvreur-charpentier qualifie peut realiser un renforcement par doublage ou un remplacement a l'identique, en veillant a maintenir l'equilibre structural de l'ensemble.",
      },
    ],
  },
];
