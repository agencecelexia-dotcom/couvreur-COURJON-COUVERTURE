import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import { services } from "@/data/services";
import { company } from "@/data/company";
import { clientConfig } from "@/config/client.config";
import type { Service } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
}

function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <Container className="relative z-10">
          <FadeIn>
            <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-neutral-200">
              {service.shortDescription}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Content */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-8">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
                <p className="text-neutral-600 leading-relaxed text-lg mb-8">
                  {service.fullDescription}
                </p>

                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
                  Ce que comprend notre prestation
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-accent-100 flex items-center justify-center">
                        <svg className="h-3 w-3 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn delay={0.2}>
                <div className="sticky top-24 space-y-6">
                  {/* CTA card */}
                  <div className="bg-primary-900 rounded-xl p-6 text-white">
                    <h3 className="font-heading text-xl font-bold mb-3">
                      Demandez un devis
                    </h3>
                    <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
                      Devis gratuit sous 24h. Nous intervenons sur {clientConfig.ZONE_INTERVENTION}.
                    </p>
                    <Link
                      href="/contact"
                      className="block text-center py-3 px-4 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      Obtenir mon devis gratuit
                    </Link>
                    <a
                      href={`tel:${company.contact.phone}`}
                      className="flex items-center justify-center gap-2 mt-3 py-3 px-4 border border-white/20 hover:border-white/40 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Appeler maintenant
                    </a>
                  </div>

                  {/* Guarantees */}
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <h3 className="font-heading text-base font-bold text-neutral-900 mb-4">
                      Nos garanties
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Assurance tous risques",
                        "Devis transparent et détaillé",
                        "Équipe professionnelle qualifiée",
                        "Réponse sous 24h",
                      ].map((g) => (
                        <li key={g} className="flex items-center gap-3 text-sm text-neutral-700">
                          <svg className="h-4 w-4 text-accent-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Other services */}
      {others.length > 0 && (
        <section className="py-16 bg-primary-50">
          <Container>
            <FadeIn>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-2xl font-bold text-neutral-900">
                  Nos autres services
                </h2>
                <Link
                  href="/services"
                  className="flex items-center gap-1 text-sm text-accent-600 hover:text-accent-700 transition-colors font-medium"
                >
                  Tous les services
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="grid sm:grid-cols-3 gap-5">
                {others.map((s) => (
                  <Link key={s.id} href={`/services/${s.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading text-base font-bold text-neutral-900 group-hover:text-accent-600 transition-colors mb-1">
                        {s.title}
                      </h3>
                      <p className="text-xs text-neutral-500 line-clamp-2">{s.shortDescription}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </Container>
        </section>
      )}
    </>
  );
}
