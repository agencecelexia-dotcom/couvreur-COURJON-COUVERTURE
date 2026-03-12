import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { services } from "@/data/services";
import { clientConfig } from "@/config/client.config";

export const metadata: Metadata = {
  title: "Nos Services",
  description: `Decouvrez nos services de couverture : toiture neuve, renovation, zinguerie, isolation, depannage urgence et demoussage a ${clientConfig.VILLE}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/projects/equipe-chantier.png" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <Container className="relative z-10 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Nos Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-200">
              Un savoir-faire complet au service de votre toiture
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <FadeIn key={service.id}>
                <div className={`flex flex-col gap-8 lg:gap-16 lg:items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className="lg:w-1/2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">{service.title}</h2>
                    <div className="mt-4 h-1 w-12 rounded-full bg-accent-500" />
                    <p className="mt-6 text-neutral-600 leading-relaxed">{service.fullDescription}</p>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-neutral-700">
                          <svg className="mt-1 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-lg transition-colors">
                        Demander un devis
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-primary-50">
        <Container className="text-center">
          <FadeIn>
            <SectionHeading title="Un Projet en Tête ?" subtitle="Contactez-nous pour en discuter. Notre équipe vous conseille et vous accompagne à chaque étape." />
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-lg transition-colors">
              Contactez-nous
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
