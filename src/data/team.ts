import type { TeamMember } from "@/types";
import { clientConfig } from "@/config/client.config";

export const team: TeamMember[] = [
  {
    id: "fondateur",
    name: `${clientConfig.PRENOM_DIRIGEANT} ${clientConfig.NOM_DIRIGEANT}`,
    role: "Fondateur & Dirigeant",
    bio: `${clientConfig.DIPLOME_DIRIGEANT.charAt(0).toUpperCase() + clientConfig.DIPLOME_DIRIGEANT.slice(1)}, ${clientConfig.PRENOM_DIRIGEANT} a fonde ${clientConfig.NOM_ENTREPRISE} en ${clientConfig.ANNEE_CREATION} avec une vision claire : offrir des prestations de couverture haut de gamme, alliant savoir-faire traditionnel et techniques modernes. ${clientConfig.GENRE_DIRIGEANT === "M" ? "Il" : "Elle"} supervise personnellement chaque chantier d'envergure.`,
    photo: "/images/projects/portrait-dirigeant.png",
    specialties: ["Couverture ardoise", "Gestion de projet", "Relation client"],
  },
];
