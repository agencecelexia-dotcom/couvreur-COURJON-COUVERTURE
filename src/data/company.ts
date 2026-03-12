import { clientConfig } from "@/config/client.config";
import type { CompanyInfo } from "@/types";

export const company: CompanyInfo = {
  name: clientConfig.NOM_ENTREPRISE,
  legalName: clientConfig.NOM_LEGAL,
  siret: clientConfig.SIRET,
  address: {
    street: clientConfig.ADRESSE,
    city: clientConfig.VILLE,
    postalCode: clientConfig.CODE_POSTAL,
    region: clientConfig.REGION,
    country: clientConfig.PAYS,
  },
  contact: {
    phone: clientConfig.TELEPHONE,
    email: clientConfig.EMAIL,
    hours: clientConfig.HORAIRES,
  },
  social: {
    facebook: clientConfig.FACEBOOK_URL || undefined,
    instagram: clientConfig.INSTAGRAM_URL || undefined,
    linkedin: clientConfig.LINKEDIN_URL || undefined,
  },
  coordinates: {
    lat: parseFloat(clientConfig.LATITUDE),
    lng: parseFloat(clientConfig.LONGITUDE),
  },
};
