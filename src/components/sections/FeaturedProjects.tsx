import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { PROJECT_CATEGORY_LABELS } from "@/types";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  if (featured.length === 0) return null;

  const [main, ...rest] = featured;

  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <SectionHeading
            title="Nos Réalisations"
            subtitle="Chaque chantier est unique. Decouvrez nos realisations les plus remarquables."
            centered={false}
            className="mb-0"
          />
          <Link
            href="/realisations"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900 transition-colors shrink-0"
          >
            Voir tout
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main featured */}
          <FadeUp>
            <Link href={`/realisations/${main.slug}`} className="group block relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={main.featuredImage}
                alt={main.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block text-xs font-semibold text-accent-400 uppercase tracking-widest mb-2">
                  {PROJECT_CATEGORY_LABELS[main.category]}
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">{main.title}</h3>
                <p className="mt-1 text-sm text-neutral-300">{main.location} · {main.year}</p>
              </div>
            </Link>
          </FadeUp>

          {/* Secondary */}
          <div className="flex flex-col gap-6">
            {rest.map((project, i) => (
              <FadeUp key={project.id} delay={(i + 1) * 0.15}>
                <Link href={`/realisations/${project.slug}`} className="group block relative aspect-[16/9] overflow-hidden rounded-2xl">
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent group-hover:from-black/85 transition-all" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block text-xs font-semibold text-accent-400 uppercase tracking-widest mb-1">
                      {PROJECT_CATEGORY_LABELS[project.category]}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white">{project.title}</h3>
                    <p className="mt-0.5 text-sm text-neutral-300">{project.location} · {project.year}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900 transition-colors"
          >
            Voir toutes nos réalisations →
          </Link>
        </div>
      </Container>
    </section>
  );
}
