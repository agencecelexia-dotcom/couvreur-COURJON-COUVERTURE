export interface SiteImage {
  path: string;
  filename: string;
  usage: string;
}

export interface ImageGroup {
  label: string;
  images: SiteImage[];
}

export const imageGroups: ImageGroup[] = [
  {
    label: "Hero & Bannieres",
    images: [
      {
        path: "/images/hero-toiture.png",
        filename: "hero-toiture.png",
        usage: "Image hero principale — page d'accueil (parallax)",
      },
    ],
  },
  {
    label: "Services",
    images: [
      {
        path: "/images/services/couverture-neuve.jpg",
        filename: "services/couverture-neuve.jpg",
        usage: "Service 1 — Couverture neuve (+ blog)",
      },
      {
        path: "/images/services/renovation-toiture.jpg",
        filename: "services/renovation-toiture.jpg",
        usage: "Service 2 — Renovation toiture (+ blog)",
      },
      {
        path: "/images/services/zinguerie.jpg",
        filename: "services/zinguerie.jpg",
        usage: "Service 3 — Zinguerie (+ blog)",
      },
      {
        path: "/images/services/isolation-toiture.jpg",
        filename: "services/isolation-toiture.jpg",
        usage: "Service 4 — Isolation toiture (+ blog)",
      },
      {
        path: "/images/services/depannage.jpg",
        filename: "services/depannage.jpg",
        usage: "Service 5 — Depannage urgence (+ blog)",
      },
      {
        path: "/images/services/demoussage.jpg",
        filename: "services/demoussage.jpg",
        usage: "Service 6 — Demoussage entretien (+ blog)",
      },
    ],
  },
  {
    label: "Portfolio — Projets",
    images: [
      {
        path: "/images/projects/projet-ardoise-1.png",
        filename: "projects/projet-ardoise-1.png",
        usage: "Projet 1 (ardoise) — image principale + hero realisations",
      },
      {
        path: "/images/projects/projet-ardoise-2.png",
        filename: "projects/projet-ardoise-2.png",
        usage: "Projet 1 (ardoise) — image galerie",
      },
      {
        path: "/images/projects/projet-tuiles-1.png",
        filename: "projects/projet-tuiles-1.png",
        usage: "Projet 2 (tuiles) — image principale",
      },
      {
        path: "/images/projects/projet-tuiles-2.png",
        filename: "projects/projet-tuiles-2.png",
        usage: "Projet 2 (tuiles) — image galerie",
      },
      {
        path: "/images/projects/projet-zinc-1.png",
        filename: "projects/projet-zinc-1.png",
        usage: "Projet 3 (zinc) — image principale",
      },
      {
        path: "/images/projects/projet-zinc-2.png",
        filename: "projects/projet-zinc-2.png",
        usage: "Projet 3 (zinc) — image galerie",
      },
      {
        path: "/images/projects/projet-renovation-1.png",
        filename: "projects/projet-renovation-1.png",
        usage: "Projet 4 (renovation) — image principale",
      },
      {
        path: "/images/projects/projet-renovation-2.png",
        filename: "projects/projet-renovation-2.png",
        usage: "Projet 4 (renovation) — image galerie",
      },
    ],
  },
  {
    label: "Equipe & Portraits",
    images: [
      {
        path: "/images/projects/portrait-dirigeant.png",
        filename: "projects/portrait-dirigeant.png",
        usage: "Portrait du dirigeant — page A propos",
      },
      {
        path: "/images/projects/equipe-chantier.png",
        filename: "projects/equipe-chantier.png",
        usage: "Photo equipe au travail — A propos, CTA, contact, services hero",
      },
      {
        path: "/images/projects/artisan-ardoise.png",
        filename: "projects/artisan-ardoise.png",
        usage: "Artisan au travail — WhyChooseUs, A propos, blog hero",
      },
    ],
  },
  {
    label: "Meta",
    images: [
      {
        path: "/images/og-default.png",
        filename: "og-default.png",
        usage: "Image Open Graph — partage reseaux sociaux",
      },
    ],
  },
];
