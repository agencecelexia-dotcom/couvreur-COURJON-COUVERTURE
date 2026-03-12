import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import BeforeAfterSlider from "@/components/features/BeforeAfterSlider";
import Lightbox from "@/components/features/Lightbox";
import { projects } from "@/data/projects";
import { PROJECT_CATEGORY_LABELS } from "@/types";
import type { Project } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
}

function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${PROJECT_CATEGORY_LABELS[project.category]} — ${project.location}. ${project.shortDescription.slice(0, 120)}...`,
    openGraph: {
      title: project.title,
      description: project.shortDescription.slice(0, 160),
      images: [project.featuredImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className="relative h-[55vh] lg:h-[65vh]">
        <Image
          src={project.featuredImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0">
          <Container>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Toutes les réalisations
            </Link>
          </Container>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-10">
          <Container>
            <span className="inline-block text-xs tracking-wider uppercase text-accent-400 font-medium mb-2">
              {PROJECT_CATEGORY_LABELS[project.category]}
            </span>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h1>
          </Container>
        </div>
      </div>

      {/* Content */}
      <section className="py-[clamp(4rem,8vw,6rem)] bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="text-neutral-600 leading-relaxed text-lg mb-8">
                  {project.fullDescription || project.shortDescription}
                </p>

                {project.challenge && (
                  <div className="bg-primary-50 border-l-4 border-accent-500 p-6 mb-6 rounded-r-lg">
                    <p className="font-semibold text-primary-900 mb-2">Défi du chantier</p>
                    <p className="text-neutral-600 text-sm leading-relaxed">{project.challenge}</p>
                  </div>
                )}

                {project.solution && (
                  <div className="bg-accent-50 border-l-4 border-accent-500 p-6 mb-8 rounded-r-lg">
                    <p className="font-semibold text-primary-900 mb-2">Notre solution</p>
                    <p className="text-neutral-600 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                )}

                {/* Before/After slider */}
                {project.beforeImage && project.afterImage && (
                  <div className="mb-10">
                    <h2 className="font-heading text-xl font-bold text-neutral-900 mb-4">
                      Avant / Après
                    </h2>
                    <BeforeAfterSlider
                      beforeImage={project.beforeImage}
                      afterImage={project.afterImage}
                      beforeLabel="Avant"
                      afterLabel="Après"
                    />
                  </div>
                )}

                {/* Gallery with lightbox */}
                {project.images && project.images.length > 1 && (
                  <Lightbox
                    images={project.images.slice(1)}
                    alt={project.title}
                  />
                )}
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn delay={0.2}>
                <div className="sticky top-24 space-y-6">
                  {/* Project details */}
                  <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                    <h2 className="font-heading text-lg font-bold text-neutral-900 mb-5">
                      Détails du chantier
                    </h2>
                    <ul className="space-y-4">
                      {[
                        { label: "Localisation", value: project.location },
                        { label: "Année", value: String(project.year) },
                        { label: "Durée", value: project.duration },
                        { label: "Surface", value: project.surface },
                        { label: "Type", value: PROJECT_CATEGORY_LABELS[project.category] },
                      ].filter(item => item.value).map((item) => (
                        <li key={item.label} className="flex items-start gap-3 border-b border-neutral-100 pb-3 last:border-0 last:pb-0">
                          <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mt-0.5 w-24 shrink-0">
                            {item.label}
                          </span>
                          <span className="text-sm text-neutral-800 font-medium">{item.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services */}
                  {project.services && project.services.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((s) => (
                        <Badge key={s} variant="outline">{s.replace(/-/g, " ")}</Badge>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="bg-accent-500 rounded-xl p-6 text-white">
                    <p className="font-heading text-lg font-bold mb-2">
                      Un projet similaire ?
                    </p>
                    <p className="text-sm text-white/80 mb-5">
                      Demandez votre devis gratuit. Réponse sous 24h.
                    </p>
                    <Link
                      href="/contact"
                      className="block text-center py-3 px-4 bg-white text-accent-600 text-sm font-semibold hover:bg-accent-50 rounded-lg transition-colors"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Prev / Next navigation */}
      {(prevProject || nextProject) && (
        <section className="bg-neutral-50 border-t border-neutral-200">
          <Container>
            <div className="flex items-stretch">
              {prevProject ? (
                <Link
                  href={`/realisations/${prevProject.slug}`}
                  className="group flex-1 flex items-center gap-4 py-6 pr-4 hover:bg-neutral-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-accent-600 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Précédent</p>
                    <p className="text-sm font-semibold text-neutral-900 group-hover:text-accent-600 transition-colors truncate">
                      {prevProject.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextProject ? (
                <Link
                  href={`/realisations/${nextProject.slug}`}
                  className="group flex-1 flex items-center justify-end gap-4 py-6 pl-4 hover:bg-neutral-100 transition-colors text-right"
                >
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Suivant</p>
                    <p className="text-sm font-semibold text-neutral-900 group-hover:text-accent-600 transition-colors truncate">
                      {nextProject.title}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-accent-600 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Other projects */}
      {others.length > 0 && (
        <section className="py-16 bg-primary-50">
          <Container>
            <FadeIn>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-2xl font-bold text-neutral-900">
                  Autres réalisations
                </h2>
                <Link
                  href="/realisations"
                  className="flex items-center gap-1 text-sm text-accent-600 hover:text-accent-700 transition-colors font-medium"
                >
                  Tout voir
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="grid sm:grid-cols-3 gap-5">
                {others.map((p) => (
                  <Link key={p.id} href={`/realisations/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-3">
                      <Image
                        src={p.featuredImage}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <span className="text-xs text-accent-600 uppercase tracking-wider font-semibold">
                      {PROJECT_CATEGORY_LABELS[p.category]}
                    </span>
                    <h3 className="font-heading text-base font-bold text-neutral-900 group-hover:text-accent-600 transition-colors leading-tight mt-1">
                      {p.title}
                    </h3>
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
