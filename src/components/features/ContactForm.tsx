"use client";

import { useState } from "react";
import { contactFormSchema } from "@/lib/validation";
import { services } from "@/data/services";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    projectDescription: "",
    budget: "",
    rgpdConsent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">Demande envoyée !</h3>
        <p className="text-neutral-600 text-sm">
          Nous vous recontacterons dans les 24 heures pour discuter de votre projet.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-primary-600 hover:text-primary-700 underline"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {[
          { name: "firstName", label: "Prénom", type: "text", placeholder: "Jean" },
          { name: "lastName", label: "Nom", type: "text", placeholder: "Dupont" },
        ].map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-neutral-700 mb-1.5">
              {field.label} <span className="text-accent-500">*</span>
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name as keyof typeof formData] as string}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors ${errors[field.name] ? "border-red-400 bg-red-50" : "border-neutral-200 bg-white"}`}
            />
            {errors[field.name] && <p className="mt-1 text-xs text-red-500">{errors[field.name]}</p>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Email <span className="text-accent-500">*</span>
          </label>
          <input
            id="email" name="email" type="email" placeholder="jean@exemple.fr"
            value={formData.email} onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors ${errors.email ? "border-red-400 bg-red-50" : "border-neutral-200 bg-white"}`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Téléphone <span className="text-accent-500">*</span>
          </label>
          <input
            id="phone" name="phone" type="tel" placeholder="06 12 34 56 78"
            value={formData.phone} onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors ${errors.phone ? "border-red-400 bg-red-50" : "border-neutral-200 bg-white"}`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Service concerné <span className="text-accent-500">*</span>
        </label>
        <select
          id="serviceType" name="serviceType"
          value={formData.serviceType} onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors ${errors.serviceType ? "border-red-400 bg-red-50" : "border-neutral-200 bg-white"}`}
        >
          <option value="">Sélectionnez un service</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>{s.title}</option>
          ))}
        </select>
        {errors.serviceType && <p className="mt-1 text-xs text-red-500">{errors.serviceType}</p>}
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Budget estimé <span className="text-accent-500">*</span>
        </label>
        <select
          id="budget" name="budget"
          value={formData.budget} onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors ${errors.budget ? "border-red-400 bg-red-50" : "border-neutral-200 bg-white"}`}
        >
          <option value="">Sélectionnez une fourchette</option>
          <option value="moins-5k">Moins de 5 000 €</option>
          <option value="5k-15k">5 000 € - 15 000 €</option>
          <option value="15k-30k">15 000 € - 30 000 €</option>
          <option value="30k-50k">30 000 € - 50 000 €</option>
          <option value="plus-50k">Plus de 50 000 €</option>
        </select>
        {errors.budget && <p className="mt-1 text-xs text-red-500">{errors.budget}</p>}
      </div>

      <div>
        <label htmlFor="projectDescription" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Description du projet <span className="text-accent-500">*</span>
        </label>
        <textarea
          id="projectDescription" name="projectDescription" rows={4}
          placeholder="Decrivez votre projet : type de travaux, surface estimee, contraintes particulieres..."
          value={formData.projectDescription} onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors ${errors.projectDescription ? "border-red-400 bg-red-50" : "border-neutral-200 bg-white"}`}
        />
        {errors.projectDescription && <p className="mt-1 text-xs text-red-500">{errors.projectDescription}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox" id="rgpdConsent" name="rgpdConsent"
          checked={formData.rgpdConsent}
          onChange={handleChange}
          className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-accent-500 focus:ring-accent-500"
        />
        <label htmlFor="rgpdConsent" className="text-xs text-neutral-600">
          J&apos;accepte que mes données soient traitées conformément à la{" "}
          <a href="/politique-de-confidentialite" className="underline hover:text-neutral-900">
            politique de confidentialité
          </a>{" "}
          de l&apos;entreprise. <span className="text-accent-500">*</span>
        </label>
      </div>
      {errors.rgpdConsent && <p className="-mt-3 text-xs text-red-500">{errors.rgpdConsent}</p>}

      {status === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-600">
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 px-6 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 disabled:opacity-60 rounded-lg transition-colors shadow-sm"
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
    </form>
  );
}
