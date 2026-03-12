import type { Testimonial } from "@/types";
import { clientConfig } from "@/config/client.config";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: clientConfig.TEMOIGNAGE_1_NOM,
    role: `Particulier — ${clientConfig.TEMOIGNAGE_1_VILLE}`,
    quote: clientConfig.TEMOIGNAGE_1_TEXTE,
    rating: parseInt(clientConfig.TEMOIGNAGE_1_NOTE, 10),
    projectType: "Renovation toiture",
    date: "2024-10-15",
  },
  {
    id: "2",
    name: clientConfig.TEMOIGNAGE_2_NOM,
    role: `Particulier — ${clientConfig.TEMOIGNAGE_2_VILLE}`,
    quote: clientConfig.TEMOIGNAGE_2_TEXTE,
    rating: parseInt(clientConfig.TEMOIGNAGE_2_NOTE, 10),
    projectType: "Isolation toiture",
    date: "2024-08-20",
  },
  {
    id: "3",
    name: clientConfig.TEMOIGNAGE_3_NOM,
    role: `Professionnel — ${clientConfig.TEMOIGNAGE_3_VILLE}`,
    quote: clientConfig.TEMOIGNAGE_3_TEXTE,
    rating: parseInt(clientConfig.TEMOIGNAGE_3_NOTE, 10),
    projectType: "Depannage urgence",
    date: "2024-06-10",
  },
];
