import { clientConfig } from "@/config/client.config";

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Comment obtenir un devis pour mes travaux de toiture ?",
    answer: `Contactez-nous par telephone au ${clientConfig.TELEPHONE} ou via notre formulaire en ligne. Nous vous proposerons un rendez-vous gratuit pour evaluer l'etat de votre toiture et vous remettre un devis detaille et sans engagement. Le deplacement et le diagnostic sont offerts.`,
  },
  {
    question: "Quels materiaux de couverture utilisez-vous ?",
    answer: "Nous travaillons avec l'ensemble des materiaux de couverture : ardoise naturelle française ou espagnole, tuiles en terre cuite (plates, mecaniques, canal), tuiles en beton, zinc naturel ou pre-patine, cuivre, bac acier et membrane EPDM. Nous vous conseillerons le materiau le plus adapte a votre projet, votre budget et aux contraintes du Plan Local d'Urbanisme.",
  },
  {
    question: "Quelle est la duree moyenne des travaux de toiture ?",
    answer: "La duree depend de la nature et de l'ampleur des travaux. Un demoussage avec traitement hydrofuge se realise en 1 a 2 jours. Une reparation ponctuelle prend generalement une demi-journee a une journee. Une renovation complete de couverture necessite 2 a 4 semaines selon la surface et la complexite du toit. Nous vous communiquons un planning precis dans notre devis.",
  },
  {
    question: "Quelles garanties proposez-vous sur vos travaux ?",
    answer: "Tous nos travaux de couverture sont couverts par la garantie decennale, obligatoire pour les travaux de gros oeuvre et d'etancheite. Nous disposons egalement d'une assurance responsabilite civile professionnelle. Pour les travaux d'entretien (demoussage, hydrofuge), nous offrons une garantie de resultat de 5 ans.",
  },
  {
    question: "Intervenez-vous en urgence en cas de fuite ou de degat de tempete ?",
    answer: "Oui, nous proposons un service de depannage rapide. En cas de fuite, de tuiles arrachees par le vent ou de tout autre degat necessitant une intervention urgente, nous intervenons sous 24 a 48 heures pour securiser votre toiture par un bachage et eviter l'aggravation des degats. Nous vous accompagnons ensuite dans vos demarches aupres de votre assurance.",
  },
  {
    question: "Comment se deroule un chantier de couverture ?",
    answer: `Apres acceptation du devis, nous planifions le chantier selon vos disponibilites et la meteo. L'intervention commence par l'installation de l'echafaudage et des protections. Nous realisons ensuite la depose de l'ancienne couverture, les travaux de charpente si necessaire, la pose de l'ecran sous-toiture, le liteaunage, la couverture et les finitions de zinguerie. Nous intervenons principalement sur ${clientConfig.ZONE_INTERVENTION}. Un chef d'equipe est present en permanence sur le chantier pour coordonner les travaux et repondre a vos questions.`,
  },
];
