import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { team } from "@/data/team";
import { clientConfig } from "@/config/client.config";

export const metadata: Metadata = {
  title: "À Propos — Notre Histoire",
  description: `Depuis ${clientConfig.ANNEES_EXPERIENCE} ans, ${clientConfig.NOM_ENTREPRISE} realise vos travaux de couverture et toiture dans ${clientConfig.ZONE_INTERVENTION}. Savoir-faire, qualite et garantie decennale.`,
};

const certifications = [
  { name: "Garantie Decennale", description: "Couverture de vos travaux pendant 10 ans apres reception" },
  { name: "Qualibat RGE", description: "Certification Reconnu Garant de l'Environnement" },
  { name: "Assurance RC Pro", description: "Responsabilite civile professionnelle pour tous nos chantiers" },
  { name: "Formation Continue", description: "Equipes formees aux dernieres techniques de couverture" },
];

const timeline = [
  { year: clientConfig.ANNEE_CREATION, event: `Creation de l'entreprise par ${clientConfig.PRENOM_DIRIGEANT} ${clientConfig.NOM_DIRIGEANT} a ${clientConfig.VILLE}` },
  { year: String(parseInt(clientConfig.ANNEE_CREATION, 10) + 2), event: "Premiers chantiers de couverture et renovation de toiture" },
  { year: String(parseInt(clientConfig.ANNEE_CREATION, 10) + 5), event: `Extension a toute la ${clientConfig.REGION} — 3 equipes operationnelles` },
  { year: String(parseInt(clientConfig.ANNEE_CREATION, 10) + 8), event: "Obtention de la certification Qualibat RGE — isolation et renovation energetique" },
  { year: String(parseInt(clientConfig.ANNEE_CREATION, 10) + 10), event: "Developpement du service zinguerie et couverture zinc a joint debout" },
  { year: String(parseInt(clientConfig.ANNEE_CREATION, 10) + 12), event: "Lancement du service depannage urgence — intervention sous 24-48h" },
  { year: String(parseInt(clientConfig.ANNEE_CREATION, 10) + parseInt(clientConfig.ANNEES_EXPERIENCE, 10)), event: `${clientConfig.ANNEES_EXPERIENCE} ans d'expertise au service de vos toitures` },
];

const values = [
  "Materiaux de qualite selectionnes aupres de fournisseurs reconnus",
  "Equipes formees et experimentees en couverture traditionnelle",
  "Aucun sous-traitant — toujours nos propres equipes",
  "Chantier propre et securise, voisinage respecte",
  "Garantie decennale sur tous nos travaux de couverture",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-primary-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(0.64 0.16 25) 0, oklch(0.64 0.16 25) 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-accent-400 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
                Notre histoire
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Professionnels depuis<br /> {clientConfig.ANNEE_CREATION}
              </h1>
              <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                {clientConfig.DESCRIPTION_APROPOS}
              </p>
              <div className="flex flex-wrap gap-4">
                {certifications.slice(0, 2).map((c) => (
                  <div key={c.name} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                    <svg className="w-4 h-4 text-accent-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-white text-sm font-medium">{c.name}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/projects/equipe-chantier.png"
                  alt={`L'équipe ${clientConfig.NOM_ENTREPRISE}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/images/projects/artisan-ardoise.png"
                  alt="Notre équipe en action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-accent-600 text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                Notre philosophie
              </p>
              <h2 className="font-heading text-4xl font-bold text-neutral-900 leading-tight mb-6">
                Le soin du détail, toujours
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Dans un monde qui va vite, nous choisissons la rigueur et l&apos;attention.
                Chaque ardoise posee, chaque solin facade, chaque element de zinguerie
                realise avec precision porte la signature de notre equipe. Une toiture realisee par {clientConfig.NOM_ENTREPRISE} est
                pensee pour durer des decennies.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                C&apos;est pourquoi nous refusons les compromis sur les materiaux, les delais
                irrealistes et les prestations baclees. Notre reputation — construite sur {clientConfig.ANNEES_EXPERIENCE} ans
                de chantiers de couverture — est notre bien le plus precieux.
              </p>
              <ul className="space-y-3">
                {values.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-[clamp(3rem,6vw,5rem)] bg-primary-50">
        <Container>
          <FadeIn>
            <SectionHeading
              title="La Confiance par les Preuves"
              subtitle="Nos garanties et engagements pour votre sécurité et votre tranquillité d'esprit."
              centered
            />
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {certifications.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">{c.name}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{c.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <FadeIn>
            <SectionHeading
              title="Des Professionnels Passionnés"
              subtitle="Notre equipe de couvreurs experimentes partage une passion commune pour le travail bien fait."
              centered
            />
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            {/* Dirigeant */}
            {team.map((member) => (
              <FadeIn key={member.id}>
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent-600 text-sm font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {member.specialties.map((s) => (
                        <span key={s} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-900">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
            {/* Team photo */}
            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/projects/equipe-chantier.png"
                  alt={`L'equipe ${clientConfig.NOM_ENTREPRISE} sur un chantier`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-[clamp(4rem,8vw,6rem)] bg-primary-900">
        <Container>
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-accent-400 text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                {clientConfig.ANNEES_EXPERIENCE} ans d&apos;histoire
              </p>
              <h2 className="font-heading text-4xl font-bold text-white">
                Notre parcours
              </h2>
            </div>
            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-[60px] top-0 bottom-0 w-px bg-white/10 hidden sm:block" />
              <div className="space-y-8">
                {timeline.map((item) => (
                  <div key={item.year} className="flex gap-8 items-start">
                    <div className="w-[60px] shrink-0 text-right">
                      <span className="font-heading text-sm font-bold text-accent-400">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-1 pt-0.5 relative">
                      <div className="w-2 h-2 bg-accent-500 absolute -left-[2.35rem] mt-1.5 hidden sm:block rounded-full" />
                      <p className="text-neutral-300 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-500">
        <Container className="text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Prêt à nous confier votre toiture ?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Contactez-nous pour un devis gratuit. Notre équipe intervient sur {clientConfig.ZONE_INTERVENTION}.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-accent-600 bg-white hover:bg-accent-50 rounded-lg transition-colors"
            >
              Demander un devis gratuit
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
