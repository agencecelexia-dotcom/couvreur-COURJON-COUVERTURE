import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/ui/Container";
import { clientConfig } from "@/config/client.config";

const reasons = [
  { title: `${clientConfig.ANNEES_EXPERIENCE} ans d'expertise`, desc: "Un savoir-faire artisanal transmis et perfectionné au fil des chantiers." },
  { title: "Garantie décennale", desc: "Tous nos travaux de couverture sont couverts par une assurance décennale." },
  { title: "Matériaux de qualité", desc: "Ardoise naturelle, tuiles terre cuite, zinc — uniquement des matériaux certifiés et durables." },
  { title: "Devis gratuit et détaillé", desc: "Un devis transparent, poste par poste, sans surprises sur le prix final." },
  { title: "Intervention rapide", desc: "Disponibilité et réactivité pour les urgences toiture et dépannages." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <FadeUp>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/projects/artisan-ardoise.png"
                alt={`Équipe ${clientConfig.NOM_ENTREPRISE} au travail`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeUp>

          {/* Content */}
          <div>
            <FadeUp>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-600 mb-4">
                Pourquoi nous choisir
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
                L&apos;Excellence au Service de Votre Toiture
              </h2>
            </FadeUp>

            <div className="space-y-5">
              {reasons.map((r, i) => (
                <FadeUp key={r.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 shrink-0 h-6 w-6 rounded-full bg-accent-500 flex items-center justify-center">
                      <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{r.title}</p>
                      <p className="text-sm text-neutral-600 mt-0.5">{r.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
