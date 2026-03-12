import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import ReadingProgress from "@/components/ui/ReadingProgress";
import ShareButtons from "@/components/ui/ShareButtons";
import { blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
}

function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <div className="relative h-[50vh] lg:h-[60vh]">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute top-24 left-0 right-0">
          <Container>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Tous les articles
            </Link>
          </Container>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pb-10">
          <Container>
            <Badge variant="accent" className="mb-3">{post.category}</Badge>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-sm text-neutral-300">
              <span>{post.author}</span>
              <span>·</span>
              <span>{formatDate(post.publishDate)}</span>
              <span>·</span>
              <span>{post.readingTime} min de lecture</span>
            </div>
          </Container>
        </div>
      </div>

      {/* Content */}
      <section className="py-[clamp(4rem,8vw,6rem)]">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="prose prose-neutral max-w-none">
                  {post.content.map((block, i) => {
                    if (block.type === "paragraph") {
                      return <p key={i} className="text-neutral-600 leading-relaxed mb-6">{block.content}</p>;
                    }
                    if (block.type === "heading") {
                      if (block.level === 2) {
                        return <h2 key={i} className="font-heading text-2xl font-bold text-neutral-900 mt-10 mb-4">{block.content}</h2>;
                      }
                      return <h3 key={i} className="font-heading text-xl font-bold text-neutral-900 mt-8 mb-3">{block.content}</h3>;
                    }
                    if (block.type === "list" && block.items) {
                      return (
                        <ul key={i} className="space-y-2 mb-6">
                          {block.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 text-neutral-600">
                              <svg className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (block.type === "quote") {
                      return (
                        <blockquote key={i} className="border-l-4 border-accent-500 pl-6 my-8 italic text-neutral-700">
                          {block.content}
                        </blockquote>
                      );
                    }
                    if (block.type === "image" && block.src) {
                      return (
                        <figure key={i} className="my-8">
                          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                            <Image src={block.src} alt={block.alt || ""} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
                          </div>
                          {block.caption && (
                            <figcaption className="text-sm text-neutral-500 mt-2 text-center">{block.caption}</figcaption>
                          )}
                        </figure>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-neutral-200">
                    <p className="text-sm font-semibold text-neutral-500 mb-3">Tags :</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <ShareButtons title={post.title} />
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn delay={0.2}>
                <div className="sticky top-24 space-y-6">
                  <div className="bg-accent-500 rounded-xl p-6 text-white">
                    <h3 className="font-heading text-lg font-bold mb-2">
                      Besoin d&apos;un devis ?
                    </h3>
                    <p className="text-sm text-white/80 mb-5">
                      Nos experts se déplacent gratuitement pour évaluer votre projet.
                    </p>
                    <Link
                      href="/contact"
                      className="block text-center py-3 px-4 bg-white text-accent-600 text-sm font-semibold hover:bg-accent-50 rounded-lg transition-colors"
                    >
                      Demander un devis
                    </Link>
                  </div>

                  {related.length > 0 && (
                    <div>
                      <h3 className="font-heading text-base font-bold text-neutral-900 mb-4">
                        Articles similaires
                      </h3>
                      <div className="space-y-4">
                        {related.map((p) => (
                          <Link key={p.id} href={`/blog/${p.slug}`} className="group flex gap-3">
                            <div className="relative w-20 h-16 shrink-0 overflow-hidden rounded-lg">
                              <Image src={p.featuredImage} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="80px" />
                            </div>
                            <div>
                              <p className="text-xs text-accent-600 font-semibold mb-1">{p.category}</p>
                              <h4 className="text-sm font-medium text-neutral-900 group-hover:text-accent-600 transition-colors line-clamp-2 leading-snug">
                                {p.title}
                              </h4>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
