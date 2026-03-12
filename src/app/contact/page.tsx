import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "@/components/features/ContactForm";
import GoogleMap from "@/components/features/GoogleMap";
import { company } from "@/data/company";
import { clientConfig } from "@/config/client.config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Demandez un devis gratuit pour vos travaux de toiture. ${clientConfig.NOM_ENTREPRISE} intervient sur ${clientConfig.ZONE_INTERVENTION}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/projects/equipe-chantier.png" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <Container className="relative z-10 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Contactez-nous
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-200">
              Devis gratuit et sans engagement — réponse sous 24h
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-[clamp(4rem,8vw,6rem)]">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
                  Votre Demande de Devis
                </h2>
                <ContactForm />
              </FadeIn>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
                  Nos Coordonnées
                </h2>
                <ul className="space-y-5">
                  {[
                    {
                      icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      label: "Téléphone",
                      value: company.contact.phone,
                      href: `tel:${company.contact.phone}`,
                    },
                    {
                      icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      label: "Email",
                      value: company.contact.email,
                      href: `mailto:${company.contact.email}`,
                    },
                    {
                      icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      label: "Adresse",
                      value: `${company.address.street}, ${company.address.postalCode} ${company.address.city}`,
                    },
                    {
                      icon: (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      label: "Horaires",
                      value: company.contact.hours,
                    },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <div className="mt-0.5 h-10 w-10 shrink-0 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-neutral-800 hover:text-accent-600 transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-sm text-neutral-800">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <GoogleMap />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
