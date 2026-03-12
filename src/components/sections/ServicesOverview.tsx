import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";

const icons: Record<string, React.ReactNode> = {
  home: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  "refresh-cw": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  droplets: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a8 8 0 01-8-8c0-4 8-11 8-11s8 7 8 11a8 8 0 01-8 8z" />
    </svg>
  ),
  thermometer: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9V3m0 6a3 3 0 100 6 3 3 0 000-6zm0 6v6M9 3h6" />
    </svg>
  ),
  "alert-triangle": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  leaf: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 21c4-4 6-8 6-12 0-4 5-8 10-8-1 5-3 8-6 10s-4 6-4 10" />
    </svg>
  ),
};

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Des Services Complets"
          subtitle="De la couverture neuve au dépannage d'urgence, nous prenons soin de votre toiture avec un savoir-faire artisanal."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeUp key={service.id} delay={i * 0.08}>
              <div className="group rounded-2xl border border-neutral-200 p-6 hover:border-primary-300 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 group-hover:bg-accent-50 group-hover:text-accent-600 transition-colors">
                  {icons[service.icon] ?? icons.home}
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                >
                  Découvrir →
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
