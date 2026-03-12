import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z
    .string()
    .email("Veuillez entrer une adresse email valide"),
  phone: z
    .string()
    .min(10, "Veuillez entrer un numéro de téléphone valide"),
  serviceType: z
    .string()
    .min(1, "Veuillez sélectionner un service"),
  projectDescription: z
    .string()
    .min(20, "Veuillez décrire votre projet (minimum 20 caractères)"),
  budget: z
    .string()
    .min(1, "Veuillez sélectionner une fourchette de budget"),
  rgpdConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Vous devez accepter la politique de confidentialité",
    }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
