"use client";

import { useState } from "react";
import { Save, CheckCircle, AlertCircle } from "lucide-react";
import { clientConfig } from "@/config/client.config";

interface Fields {
  NOM_ENTREPRISE: string;
  NOM_LEGAL: string;
  SIRET: string;
  PRENOM_DIRIGEANT: string;
  NOM_DIRIGEANT: string;
  DIPLOME_DIRIGEANT: string;
  ANNEE_CREATION: string;
  ANNEES_EXPERIENCE: string;
  TELEPHONE: string;
  EMAIL: string;
  ADRESSE: string;
  CODE_POSTAL: string;
  VILLE: string;
  DEPARTEMENT: string;
  REGION: string;
  HORAIRES: string;
  ZONE_INTERVENTION: string;
  SLOGAN: string;
  ACCROCHE_HERO: string;
  DESCRIPTION_ENTREPRISE: string;
  DESCRIPTION_FOOTER: string;
  DESCRIPTION_APROPOS: string;
  DOMAINE: string;
  META_TITLE: string;
  META_DESCRIPTION: string;
  META_KEYWORDS: string;
  FACEBOOK_URL: string;
  INSTAGRAM_URL: string;
  LINKEDIN_URL: string;
  PINTEREST_URL: string;
  GOOGLE_MAPS_URL: string;
  HEBERGEUR_NOM: string;
  HEBERGEUR_ADRESSE: string;
  HEBERGEUR_SITE: string;
  N8N_WEBHOOK: string;
  ADMIN_PASSWORD: string;
}

const INITIAL_FIELDS: Fields = {
  NOM_ENTREPRISE: clientConfig.NOM_ENTREPRISE,
  NOM_LEGAL: clientConfig.NOM_LEGAL,
  SIRET: clientConfig.SIRET,
  PRENOM_DIRIGEANT: clientConfig.PRENOM_DIRIGEANT,
  NOM_DIRIGEANT: clientConfig.NOM_DIRIGEANT,
  DIPLOME_DIRIGEANT: clientConfig.DIPLOME_DIRIGEANT,
  ANNEE_CREATION: clientConfig.ANNEE_CREATION,
  ANNEES_EXPERIENCE: clientConfig.ANNEES_EXPERIENCE,
  TELEPHONE: clientConfig.TELEPHONE,
  EMAIL: clientConfig.EMAIL,
  ADRESSE: clientConfig.ADRESSE,
  CODE_POSTAL: clientConfig.CODE_POSTAL,
  VILLE: clientConfig.VILLE,
  DEPARTEMENT: clientConfig.DEPARTEMENT,
  REGION: clientConfig.REGION,
  HORAIRES: clientConfig.HORAIRES,
  ZONE_INTERVENTION: clientConfig.ZONE_INTERVENTION,
  SLOGAN: clientConfig.SLOGAN,
  ACCROCHE_HERO: clientConfig.ACCROCHE_HERO,
  DESCRIPTION_ENTREPRISE: clientConfig.DESCRIPTION_ENTREPRISE,
  DESCRIPTION_FOOTER: clientConfig.DESCRIPTION_FOOTER,
  DESCRIPTION_APROPOS: clientConfig.DESCRIPTION_APROPOS,
  DOMAINE: clientConfig.DOMAINE,
  META_TITLE: clientConfig.META_TITLE,
  META_DESCRIPTION: clientConfig.META_DESCRIPTION,
  META_KEYWORDS: clientConfig.META_KEYWORDS,
  FACEBOOK_URL: clientConfig.FACEBOOK_URL,
  INSTAGRAM_URL: clientConfig.INSTAGRAM_URL,
  LINKEDIN_URL: clientConfig.LINKEDIN_URL,
  PINTEREST_URL: clientConfig.PINTEREST_URL,
  GOOGLE_MAPS_URL: clientConfig.GOOGLE_MAPS_URL,
  HEBERGEUR_NOM: clientConfig.HEBERGEUR_NOM,
  HEBERGEUR_ADRESSE: clientConfig.HEBERGEUR_ADRESSE,
  HEBERGEUR_SITE: clientConfig.HEBERGEUR_SITE,
  N8N_WEBHOOK: clientConfig.N8N_WEBHOOK,
  ADMIN_PASSWORD: clientConfig.ADMIN_PASSWORD,
};

const LONG_FIELDS: (keyof Fields)[] = [
  "DESCRIPTION_ENTREPRISE",
  "DESCRIPTION_FOOTER",
  "DESCRIPTION_APROPOS",
  "META_DESCRIPTION",
  "META_KEYWORDS",
  "HORAIRES",
  "ZONE_INTERVENTION",
  "HEBERGEUR_ADRESSE",
];

type Toast = { type: "success" | "error"; message: string } | null;

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h2 className="font-heading text-base font-semibold text-neutral-900 mb-5">{title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

interface FieldProps {
  label: string;
  fieldKey: keyof Fields;
  fields: Fields;
  onChange: (key: keyof Fields, value: string) => void;
  fullWidth?: boolean;
}

function Field({ label, fieldKey, fields, onChange, fullWidth }: FieldProps) {
  const isLong = LONG_FIELDS.includes(fieldKey);
  return (
    <div className={fullWidth ? "sm:col-span-2" : ""}>
      <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">
        {label}
      </label>
      {isLong ? (
        <textarea
          value={fields[fieldKey]}
          onChange={(e) => onChange(fieldKey, e.target.value)}
          rows={3}
          className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-900 focus:border-primary-900 focus:outline-none focus:ring-1 focus:ring-primary-900 resize-y"
        />
      ) : (
        <input
          type="text"
          value={fields[fieldKey]}
          onChange={(e) => onChange(fieldKey, e.target.value)}
          className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-900 focus:border-primary-900 focus:outline-none focus:ring-1 focus:ring-primary-900"
        />
      )}
    </div>
  );
}

export default function ContenuTab() {
  const [fields, setFields] = useState<Fields>(INITIAL_FIELDS);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<Toast>(null);

  function handleChange(key: keyof Fields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSave() {
    setSaving(true);
    setToast(null);
    try {
      const res = await fetch("/api/admin/save-client", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setToast({ type: "success", message: "Contenu sauvegardé avec succès !" });
    } catch {
      setToast({ type: "error", message: "Erreur lors de la sauvegarde. Réessayez." });
    } finally {
      setSaving(false);
      setTimeout(() => setToast(null), 4000);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-neutral-900">Contenu du site</h1>
          <p className="mt-1 text-neutral-500">Modifiez les informations de votre entreprise</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-primary-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
        >
          <Save size={15} />
          {saving ? "Sauvegarde..." : "Sauvegarder"}
        </button>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
            toast.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {toast.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          {toast.message}
        </div>
      )}

      {/* Identité */}
      <Section title="Identité">
        <Field label="Nom de l'entreprise" fieldKey="NOM_ENTREPRISE" fields={fields} onChange={handleChange} />
        <Field label="Nom légal" fieldKey="NOM_LEGAL" fields={fields} onChange={handleChange} />
        <Field label="SIRET" fieldKey="SIRET" fields={fields} onChange={handleChange} />
        <Field label="Prénom du dirigeant" fieldKey="PRENOM_DIRIGEANT" fields={fields} onChange={handleChange} />
        <Field label="Nom du dirigeant" fieldKey="NOM_DIRIGEANT" fields={fields} onChange={handleChange} />
        <Field label="Diplôme du dirigeant" fieldKey="DIPLOME_DIRIGEANT" fields={fields} onChange={handleChange} />
        <Field label="Année de création" fieldKey="ANNEE_CREATION" fields={fields} onChange={handleChange} />
        <Field label="Années d'expérience" fieldKey="ANNEES_EXPERIENCE" fields={fields} onChange={handleChange} />
      </Section>

      {/* Contact */}
      <Section title="Contact">
        <Field label="Téléphone" fieldKey="TELEPHONE" fields={fields} onChange={handleChange} />
        <Field label="Email" fieldKey="EMAIL" fields={fields} onChange={handleChange} />
        <Field label="Adresse" fieldKey="ADRESSE" fields={fields} onChange={handleChange} />
        <Field label="Code postal" fieldKey="CODE_POSTAL" fields={fields} onChange={handleChange} />
        <Field label="Ville" fieldKey="VILLE" fields={fields} onChange={handleChange} />
        <Field label="Département" fieldKey="DEPARTEMENT" fields={fields} onChange={handleChange} />
        <Field label="Région" fieldKey="REGION" fields={fields} onChange={handleChange} />
        <Field label="Horaires" fieldKey="HORAIRES" fields={fields} onChange={handleChange} />
        <Field label="Zone d'intervention" fieldKey="ZONE_INTERVENTION" fields={fields} onChange={handleChange} fullWidth />
      </Section>

      {/* Contenu du site */}
      <Section title="Contenu du site">
        <Field label="Slogan" fieldKey="SLOGAN" fields={fields} onChange={handleChange} fullWidth />
        <Field label="Accroche héro" fieldKey="ACCROCHE_HERO" fields={fields} onChange={handleChange} fullWidth />
        <Field label="Description entreprise" fieldKey="DESCRIPTION_ENTREPRISE" fields={fields} onChange={handleChange} fullWidth />
        <Field label="Description footer" fieldKey="DESCRIPTION_FOOTER" fields={fields} onChange={handleChange} fullWidth />
        <Field label="Description à propos" fieldKey="DESCRIPTION_APROPOS" fields={fields} onChange={handleChange} fullWidth />
      </Section>

      {/* SEO */}
      <Section title="SEO">
        <Field label="Domaine" fieldKey="DOMAINE" fields={fields} onChange={handleChange} />
        <Field label="Meta title" fieldKey="META_TITLE" fields={fields} onChange={handleChange} />
        <Field label="Meta description" fieldKey="META_DESCRIPTION" fields={fields} onChange={handleChange} fullWidth />
        <Field label="Mots-clés" fieldKey="META_KEYWORDS" fields={fields} onChange={handleChange} fullWidth />
      </Section>

      {/* Réseaux sociaux */}
      <Section title="Réseaux sociaux">
        <Field label="Facebook URL" fieldKey="FACEBOOK_URL" fields={fields} onChange={handleChange} />
        <Field label="Instagram URL" fieldKey="INSTAGRAM_URL" fields={fields} onChange={handleChange} />
        <Field label="LinkedIn URL" fieldKey="LINKEDIN_URL" fields={fields} onChange={handleChange} />
        <Field label="Pinterest URL" fieldKey="PINTEREST_URL" fields={fields} onChange={handleChange} />
        <Field label="Google Maps URL" fieldKey="GOOGLE_MAPS_URL" fields={fields} onChange={handleChange} fullWidth />
      </Section>

      {/* Hébergement (mentions légales) */}
      <Section title="Hébergement (mentions légales)">
        <Field label="Nom de l'hébergeur" fieldKey="HEBERGEUR_NOM" fields={fields} onChange={handleChange} />
        <Field label="Site web hébergeur" fieldKey="HEBERGEUR_SITE" fields={fields} onChange={handleChange} />
        <Field label="Adresse hébergeur" fieldKey="HEBERGEUR_ADRESSE" fields={fields} onChange={handleChange} fullWidth />
      </Section>

      {/* Intégrations */}
      <Section title="Intégrations">
        <Field label="Webhook N8N" fieldKey="N8N_WEBHOOK" fields={fields} onChange={handleChange} fullWidth />
        <Field label="Mot de passe admin" fieldKey="ADMIN_PASSWORD" fields={fields} onChange={handleChange} />
      </Section>

      {/* Save bottom */}
      <div className="flex justify-end pb-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-primary-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
        >
          <Save size={15} />
          {saving ? "Sauvegarde..." : "Sauvegarder les modifications"}
        </button>
      </div>
    </div>
  );
}
