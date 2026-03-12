"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";
import { PROJECT_CATEGORY_LABELS, type Project, type ProjectCategory } from "@/types";

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [active, setActive] = useState<string>("all");

  const filters = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return [
      { value: "all", label: "Tous" },
      ...cats.map((c) => ({ value: c, label: PROJECT_CATEGORY_LABELS[c as ProjectCategory] })),
    ];
  }, [projects]);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <FilterBar filters={filters} active={active} onChange={setActive} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
