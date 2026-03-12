"use client";

import { useState } from "react";
import { X, ZoomIn, Upload } from "lucide-react";
import Image from "next/image";
import { imageGroups, type SiteImage } from "@/config/images";

export default function PhotosTab() {
  const [preview, setPreview] = useState<SiteImage | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-neutral-900">Bibliothèque photos</h1>
        <p className="mt-1 text-neutral-500">Toutes les photos utilisées sur le site</p>
      </div>

      {/* Groups */}
      {imageGroups.map((group) => (
        <div key={group.label} className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-100">
            <h2 className="font-heading text-base font-semibold text-neutral-900">{group.label}</h2>
            <p className="text-xs text-neutral-500 mt-0.5">{group.images.length} photo{group.images.length > 1 ? "s" : ""}</p>
          </div>
          <div className="p-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {group.images.map((photo) => (
              <div
                key={photo.path}
                className="group relative rounded-lg border border-neutral-200 bg-neutral-50 overflow-hidden"
              >
                {/* Image */}
                <div
                  className="relative aspect-video bg-neutral-100 cursor-pointer"
                  onClick={() => setPreview(photo)}
                >
                  <Image
                    src={photo.path}
                    alt={photo.filename}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
                    <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                {/* Info + Replace button */}
                <div className="p-2.5">
                  <p className="text-xs font-mono text-neutral-600 truncate">{photo.filename}</p>
                  <p className="mt-0.5 text-xs text-neutral-400 line-clamp-2">{photo.usage}</p>
                  <button className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-md border border-neutral-200 px-2 py-1 text-xs font-medium text-neutral-600 hover:bg-neutral-100 transition-colors">
                    <Upload size={12} />
                    Remplacer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Preview Modal */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreview(null)}
              className="absolute -top-10 right-0 flex items-center gap-1.5 text-sm text-white/70 hover:text-white"
            >
              <X size={16} />
              Fermer
            </button>
            <div className="relative rounded-xl overflow-hidden bg-neutral-900">
              <div className="relative aspect-video w-full">
                <Image
                  src={preview.path}
                  alt={preview.filename}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
              <p className="text-sm font-mono text-white/90">{preview.path}</p>
              <p className="mt-0.5 text-xs text-white/60">{preview.usage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
