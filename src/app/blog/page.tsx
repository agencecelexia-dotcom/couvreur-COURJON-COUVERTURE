import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import BlogCard from "@/components/features/BlogCard";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog & Conseils Toiture",
  description:
    "Conseils d'experts, guides pratiques et actualites sur la couverture, la renovation de toiture et l'entretien.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/projects/artisan-ardoise.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Blog & Conseils
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-200">
              Nos experts partagent leurs connaissances sur la couverture, l&apos;isolation et l&apos;entretien de toiture.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.05}>
                <BlogCard post={post} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
