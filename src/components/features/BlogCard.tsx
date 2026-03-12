import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="overflow-hidden rounded-xl bg-white border border-neutral-200 transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-accent-600 bg-accent-50 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-neutral-400">{post.readingTime} min de lecture</span>
          </div>
          <h3 className="font-heading text-lg font-bold text-neutral-900 line-clamp-2 group-hover:text-primary-700 transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 line-clamp-2">{post.excerpt}</p>
          <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
            <span>{post.author}</span>
            <span>{formatDate(post.publishDate)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
