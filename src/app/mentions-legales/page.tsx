import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import { clientConfig } from "@/config/client.config";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: false },
};

function SectionCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-900">
          {icon}
        </div>
        <h2 className="font-heading text-xl font-bold text-neutral-900">{title}</h2>
      </div>
      <div className="text-neutral-600 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-2 border-b border-neutral-100 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 sm:w-48 shrink-0">
        {label}
      </span>
      <span className="text-sm text-neutral-700 font-medium">{value}</span>
    </div>
  );
}

export default function MentionsLegalesPage() {
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
                Mentions légales
              </h1>
              <p className="mt-3 text-neutral-500">
                Dernière mise à jour : Février 2026
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-6">
              {/* Éditeur du site */}
              <SectionCard
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                }
                title="Éditeur du site"
              >
                <div className="space-y-0">
                  <InfoRow label="Raison sociale" value={clientConfig.NOM_LEGAL} />
                  <InfoRow label="N° SIRET" value={clientConfig.SIRET} />
                  <InfoRow label="Siège social" value={`${clientConfig.ADRESSE}, ${clientConfig.CODE_POSTAL} ${clientConfig.VILLE}`} />
                  <InfoRow label="Téléphone" value={clientConfig.TELEPHONE} />
                  <InfoRow label="Email" value={clientConfig.EMAIL} />
                  <InfoRow
                    label="Directeur de publication"
                    value={`${clientConfig.PRENOM_DIRIGEANT} ${clientConfig.NOM_DIRIGEANT}`}
                  />
                </div>
              </SectionCard>

              {/* Hébergement */}
              <SectionCard
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                  </svg>
                }
                title="Hébergement"
              >
                <div className="space-y-0">
                  <InfoRow label="Hébergeur" value={clientConfig.HEBERGEUR_NOM} />
                  <InfoRow label="Adresse" value={clientConfig.HEBERGEUR_ADRESSE} />
                  <InfoRow label="Site web" value={clientConfig.HEBERGEUR_SITE} />
                </div>
              </SectionCard>

              {/* Propriété intellectuelle */}
              <SectionCard
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                }
                title="Propriété intellectuelle"
              >
                <p>
                  L&apos;ensemble des contenus présents sur le site <strong className="text-neutral-800">{clientConfig.DOMAINE}</strong> —
                  incluant, de manière non exhaustive, les textes, photographies, illustrations, logos, icônes,
                  mises en page et éléments graphiques — sont protégés par les lois françaises et internationales
                  relatives à la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle,
                  de ces éléments, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans
                  l&apos;autorisation écrite préalable de <strong className="text-neutral-800">{clientConfig.NOM_LEGAL}</strong>.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de l&apos;un de ses éléments sera considérée comme
                  constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles
                  L.335-2 et suivants du Code de la Propriété Intellectuelle.
                </p>
              </SectionCard>

              {/* Responsabilité */}
              <SectionCard
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                }
                title="Limitation de responsabilité"
              >
                <p>
                  <strong className="text-neutral-800">{clientConfig.NOM_ENTREPRISE}</strong> s&apos;efforce d&apos;assurer
                  au mieux l&apos;exactitude et la mise à jour des informations diffusées sur ce site.
                  Toutefois, <strong className="text-neutral-800">{clientConfig.NOM_ENTREPRISE}</strong> ne peut garantir
                  l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
                </p>
                <p>
                  En conséquence, <strong className="text-neutral-800">{clientConfig.NOM_ENTREPRISE}</strong> décline
                  toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations
                  disponibles sur ce site, ainsi que pour tout dommage résultant d&apos;une intrusion frauduleuse
                  d&apos;un tiers ayant entraîné une modification des informations mises à la disposition sur le site.
                </p>
                <p>
                  Les liens hypertextes mis en place dans le cadre du présent site en direction d&apos;autres ressources
                  sur Internet ne sauraient engager la responsabilité de <strong className="text-neutral-800">{clientConfig.NOM_ENTREPRISE}</strong>.
                </p>
              </SectionCard>

              {/* Données personnelles */}
              <SectionCard
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                }
                title="Données personnelles"
              >
                <p>
                  Conformément à la loi n° 78-17 du 6 janvier 1978 modifiée, dite « Informatique et Libertés »,
                  et au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679), vous disposez
                  d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données
                  personnelles vous concernant.
                </p>
                <p>
                  Pour plus d&apos;informations sur le traitement de vos données, veuillez consulter notre{" "}
                  <Link href="/politique-confidentialite" className="text-accent-600 hover:text-accent-700 font-medium underline underline-offset-2">
                    politique de confidentialité
                  </Link>.
                </p>
                <p>
                  Pour exercer vos droits, vous pouvez nous contacter à l&apos;adresse suivante :{" "}
                  <a href={`mailto:${clientConfig.EMAIL}`} className="text-accent-600 hover:text-accent-700 font-medium underline underline-offset-2">
                    {clientConfig.EMAIL}
                  </a>
                </p>
              </SectionCard>

              {/* Cookies */}
              <SectionCard
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                }
                title="Cookies"
              >
                <p>
                  Le site <strong className="text-neutral-800">{clientConfig.DOMAINE}</strong> peut être amené
                  à utiliser des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent
                  aucune donnée personnelle et sont indispensables pour assurer les fonctionnalités de base du site
                  (navigation, sécurité, préférences d&apos;affichage).
                </p>
                <p>
                  Aucun cookie publicitaire ou de suivi n&apos;est déposé sans votre consentement préalable.
                  Vous pouvez à tout moment modifier vos préférences via le bandeau de gestion des cookies
                  ou dans les paramètres de votre navigateur.
                </p>
              </SectionCard>

              {/* Droit applicable */}
              <SectionCard
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                  </svg>
                }
                title="Droit applicable et juridiction"
              >
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut
                  de résolution amiable, les tribunaux français seront seuls compétents pour connaître de ce litige.
                </p>
              </SectionCard>

              {/* Crédits */}
              <SectionCard
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                }
                title="Crédits & conception"
              >
                <p>
                  Ce site a été conçu et développé par{" "}
                  <strong className="text-neutral-800">Agence Celexia</strong>.
                </p>
                <p>
                  Les photographies et visuels utilisés sur ce site sont la propriété de{" "}
                  <strong className="text-neutral-800">{clientConfig.NOM_ENTREPRISE}</strong>{" "}
                  ou sont utilisés avec l&apos;autorisation de leurs auteurs respectifs.
                </p>
              </SectionCard>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
