export interface CompanyInfo {
  name: string;
  legalName: string;
  siret: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    region: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    hours: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  icon: string;
  order: number;
}

export type ProjectCategory =
  | "couverture-ardoise"
  | "couverture-tuiles"
  | "couverture-zinc"
  | "renovation"
  | "zinguerie"
  | "isolation";

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  "couverture-ardoise": "Couverture ardoise",
  "couverture-tuiles": "Couverture tuiles",
  "couverture-zinc": "Couverture zinc",
  renovation: "Rénovation",
  zinguerie: "Zinguerie",
  isolation: "Isolation",
};

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  category: ProjectCategory;
  featuredImage: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  surface?: string;
  duration: string;
  location: string;
  year: number;
  featured: boolean;
  services: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  photo?: string;
  quote: string;
  rating: number;
  projectType: string;
  date: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishDate: string;
  readingTime: number;
  featuredImage: string;
  tags: string[];
  content: Array<{
    type: "paragraph" | "heading" | "image" | "list" | "quote";
    content?: string;
    items?: string[];
    src?: string;
    alt?: string;
    caption?: string;
    level?: 2 | 3;
  }>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  specialties: string[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  projectDescription: string;
  budget: string;
  rgpdConsent: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
