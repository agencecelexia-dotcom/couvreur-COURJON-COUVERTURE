import Image from "next/image";
import Link from "next/link";
import { PROJECT_CATEGORY_LABELS, type Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/realisations/${project.slug}`}
      className="group block relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100"
    >
      <Image
        src={project.featuredImage}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="inline-block text-xs font-semibold text-accent-400 uppercase tracking-wider mb-1">
          {PROJECT_CATEGORY_LABELS[project.category]}
        </span>
        <h3 className="font-heading text-lg font-bold text-white line-clamp-2 leading-snug">
          {project.title}
        </h3>
        <p className="mt-1 text-xs text-neutral-300">
          {project.location}
          {project.surface && ` · ${project.surface}`}
        </p>
      </div>
    </Link>
  );
}
