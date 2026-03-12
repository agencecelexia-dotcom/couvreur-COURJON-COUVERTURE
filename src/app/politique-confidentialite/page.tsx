import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import { clientConfig } from "@/config/client.config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: false },
};

function SectionCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="flex items-start gap-4 mb-5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500 text-white text-xs font-bold shrink-0">
          {number}
        </span>
        <h2 className="font-heading text-xl font-bold text-neutral-900 pt-0.5">{title}</h2>
      </div>
      <div className="text-neutral-600 text-sm leading-relaxed space-y-3 pl-12">{children}</div>
    </div>
  );
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-32 pb-24 bg-neutral-50 min-h-screen">
      <Container>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-accent-600 transition-colors mb-6"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour à l&apos;accueil
              </Link>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-neutral-900">
                Politique de confidentialité
              </h1>
              <p className="mt-3 text-neutral-500">
                Dernière mise à jour : Février 2026
              </p>
              <div className="mt-6 rounded-xl bg-primary-50 border border-primary-100 p-5">
                <p className="text-sm text-primary-900 leading-relaxed">
                  <strong className="font-semibold">{clientConfig.NOM_ENTREPRISE}</strong> s&apos;engage
                  à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité décrit
                  les types de données personnelles collectées, les raisons de leur collecte, leur
                  traitement et vos droits en tant qu&apos;utilisateur, conformément au Règlement Général
                  sur la Protection des Données (RGPD — Règlement UE 2016/679).
                </p>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-5">
              {/* 1. Responsable du traitement */}
              <SectionCard number="1" title="Responsable du traitement">
                <p>
                  Le responsable du traitement des données personnelles collectées sur le site{" "}
                  <strong className="text-neutral-800">{clientConfig.DOMAINE}</strong> est :
                </p>
                <div className="rounded-lg bg-neutral-50 border border-neutral-100 p-4 space-y-1.5">
                  <p><strong className="text-neutral-800">{clientConfig.NOM_LEGAL}</strong></p>
                  <p>{clientConfig.ADRESSE}, {clientConfig.CODE_POSTAL} {clientConfig.VILLE}</p>
                  <p>Email : <a href={`mailto:${clientConfig.EMAIL}`} className="text-accent-600 hover:text-accent-700 underline underline-offset-2">{clientConfig.EMAIL}</a></p>
                  <p>Téléphone : {clientConfig.TELEPHONE}</p>
                  <p>Représentant légal : {clientConfig.PRENOM_DIRIGEANT} {clientConfig.NOM_DIRIGEANT}</p>
                </div>
              </SectionCard>

              {/* 2. Données collectées */}
              <SectionCard number="2" title="Données personnelles collectées">
                <p>
                  Nous collectons les données personnelles suivantes lorsque vous utilisez notre formulaire
                  de contact ou de demande de devis :
                </p>
                <ul className="space-y-2">
                  {[
                    "Nom et prénom",
                    "Adresse email",
                    "Numéro de téléphone (si renseigné)",
                    "Adresse postale ou ville du projet (si renseignée)",
                    "Type de prestation souhaitée",
                    "Description détaillée de votre projet",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="h-4 w-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Nous ne collectons aucune donnée sensible au sens de l&apos;article 9 du RGPD
                  (origines ethniques, opinions politiques, données de santé, etc.).
                </p>
              </SectionCard>

              {/* 3. Finalités */}
              <SectionCard number="3" title="Finalités du traitement">
                <p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
                <ul className="space-y-2">
                  {[
                    "Traiter votre demande de devis ou de contact",
                    "Vous recontacter pour apporter une réponse personnalisée",
                    "Établir un devis adapté à votre projet",
                    "Améliorer la qualité de nos services et de notre site",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="h-4 w-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Vos données ne sont <strong className="text-neutral-800">jamais utilisées à des fins de prospection commerciale non sollicitée</strong> et
                  ne sont <strong className="text-neutral-800">jamais cédées, vendues ou louées à des tiers</strong>.
                </p>
              </SectionCard>

              {/* 4. Base légale */}
              <SectionCard number="4" title="Base légale du traitement">
                <p>Le traitement de vos données repose sur :</p>
                <ul className="space-y-2">
                  {[
                    "Votre consentement explicite lors de l'envoi du formulaire (article 6.1.a du RGPD)",
                    "L'exécution de mesures précontractuelles à votre demande (article 6.1.b du RGPD)",
                    "L'intérêt légitime de l'entreprise à répondre à vos demandes (article 6.1.f du RGPD)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="h-4 w-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>

              {/* 5. Destinataires */}
              <SectionCard number="5" title="Destinataires des données">
                <p>
                  Les données collectées sont destinées exclusivement à{" "}
                  <strong className="text-neutral-800">{clientConfig.NOM_ENTREPRISE}</strong> et à ses
                  collaborateurs habilités, dans le cadre strict du traitement de votre demande.
                </p>
                <p>
                  Les données peuvent être transmises à notre hébergeur{" "}
                  <strong className="text-neutral-800">{clientConfig.HEBERGEUR_NOM}</strong> dans le cadre
                  technique de l&apos;hébergement du site, dans le respect des dispositions contractuelles
                  garantissant la protection de vos données.
                </p>
              </SectionCard>

              {/* 6. Durée de conservation */}
              <SectionCard number="6" title="Durée de conservation">
                <p>
                  Vos données personnelles sont conservées pour la durée strictement nécessaire aux
                  finalités décrites ci-dessus, et au maximum :
                </p>
                <div className="rounded-lg bg-neutral-50 border border-neutral-100 p-4 space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold text-accent-500 bg-accent-50 rounded px-2 py-0.5 shrink-0">3 ans</span>
                    <span>à compter du dernier contact pour les données de prospection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold text-accent-500 bg-accent-50 rounded px-2 py-0.5 shrink-0">5 ans</span>
                    <span>pour les données liées à un contrat ou une facture (obligation légale)</span>
                  </div>
                </div>
                <p>
                  Passé ces délais, vos données sont supprimées de manière sécurisée et irréversible.
                </p>
              </SectionCard>

              {/* 7. Vos droits */}
              <SectionCard number="7" title="Vos droits (RGPD)">
                <p>
                  Conformément au RGPD et à la loi « Informatique et Libertés », vous disposez des droits suivants :
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { right: "Droit d'accès", desc: "Obtenir la confirmation que vos données sont traitées et en recevoir une copie" },
                    { right: "Droit de rectification", desc: "Faire corriger des données inexactes ou incomplètes" },
                    { right: "Droit à l'effacement", desc: "Demander la suppression de vos données personnelles" },
                    { right: "Droit à la limitation", desc: "Demander la suspension du traitement de vos données" },
                    { right: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré et lisible" },
                    { right: "Droit d'opposition", desc: "Vous opposer au traitement de vos données à tout moment" },
                  ].map((item) => (
                    <div key={item.right} className="rounded-lg bg-neutral-50 border border-neutral-100 p-3">
                      <p className="text-xs font-bold text-neutral-900 mb-1">{item.right}</p>
                      <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p>
                  Pour exercer l&apos;un de ces droits, envoyez un email à{" "}
                  <a href={`mailto:${clientConfig.EMAIL}`} className="text-accent-600 hover:text-accent-700 font-medium underline underline-offset-2">
                    {clientConfig.EMAIL}
                  </a>{" "}
                  en précisant votre identité et la nature de votre demande. Nous nous engageons à y répondre
                  dans un délai de 30 jours.
                </p>
                <p>
                  Vous pouvez également introduire une réclamation auprès de la{" "}
                  <strong className="text-neutral-800">Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</strong>{" "}
                  — <span className="text-neutral-500">www.cnil.fr</span>
                </p>
              </SectionCard>

              {/* 8. Cookies */}
              <SectionCard number="8" title="Cookies">
                <p>
                  Le site <strong className="text-neutral-800">{clientConfig.DOMAINE}</strong> utilise des cookies
                  techniques strictement nécessaires à son bon fonctionnement. Ces cookies ne collectent aucune
                  donnée personnelle à des fins publicitaires ou de suivi.
                </p>
                <p><strong className="text-neutral-800">Types de cookies utilisés :</strong></p>
                <ul className="space-y-2">
                  {[
                    "Cookies de session : maintien de votre navigation (expiration à la fermeture du navigateur)",
                    "Cookies de préférence : mémorisation de vos choix (consentement cookies, thème d'affichage)",
                    "Cookies d'authentification : accès à l'espace administration (réservé au gestionnaire du site)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="h-4 w-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies. Notez toutefois que
                  certaines fonctionnalités du site pourraient ne plus être disponibles.
                </p>
              </SectionCard>

              {/* 9. Sécurité */}
              <SectionCard number="9" title="Sécurité des données">
                <p>
                  Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour
                  protéger vos données personnelles contre tout accès non autorisé, toute perte, altération
                  ou divulgation, notamment :
                </p>
                <ul className="space-y-2">
                  {[
                    "Chiffrement SSL/TLS de l'ensemble des communications (HTTPS)",
                    "Hébergement sécurisé avec accès restreint aux données",
                    "Mises à jour régulières des systèmes et logiciels",
                    "Accès aux données limité aux seules personnes habilitées",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="h-4 w-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>

              {/* 10. Modifications */}
              <SectionCard number="10" title="Modifications de la politique">
                <p>
                  <strong className="text-neutral-800">{clientConfig.NOM_ENTREPRISE}</strong> se réserve
                  le droit de modifier la présente politique de confidentialité à tout moment. Les
                  modifications prendront effet dès leur publication sur cette page. Nous vous invitons
                  à consulter régulièrement cette page pour prendre connaissance des éventuelles mises à jour.
                </p>
              </SectionCard>

              {/* Contact box */}
              <div className="rounded-2xl bg-accent-500 p-6 sm:p-8 text-white">
                <h2 className="font-heading text-xl font-bold mb-3">
                  Une question sur vos données ?
                </h2>
                <p className="text-sm text-white/80 leading-relaxed mb-5">
                  Pour toute question relative à la protection de vos données personnelles ou pour exercer
                  vos droits, n&apos;hésitez pas à nous contacter.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`mailto:${clientConfig.EMAIL}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-accent-600 text-sm font-semibold rounded-lg hover:bg-accent-50 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    {clientConfig.EMAIL}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-white/40 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Formulaire de contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
