"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Pencil, Trash2, X, Loader2, Star } from "lucide-react";

interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  featuredImage: string;
  surface?: string;
  duration?: string;
  location: string;
  year: number;
  featured: boolean;
  services: string[];
}

interface ProjectForm {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: number;
  surface: string;
  duration: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  featuredImage: string;
  beforeImage: string;
  afterImage: string;
  featured: boolean;
}

const CATEGORIES = [
  { value: "couverture-ardoise", label: "Couverture ardoise" },
  { value: "couverture-tuiles", label: "Couverture tuiles" },
  { value: "couverture-zinc", label: "Couverture zinc" },
  { value: "renovation", label: "Renovation" },
  { value: "zinguerie", label: "Zinguerie" },
  { value: "isolation", label: "Isolation" },
];

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const EMPTY_FORM: ProjectForm = {
  slug: "",
  title: "",
  category: "couverture-ardoise",
  location: "",
  year: new Date().getFullYear(),
  surface: "",
  duration: "",
  shortDescription: "",
  fullDescription: "",
  challenge: "",
  solution: "",
  featuredImage: "",
  beforeImage: "",
  afterImage: "",
  featured: false,
};

const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.value, c.label])
);

export default function ProjetsTab() {
  const [items, setItems] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<Project | null>(null);
  const [form, setForm] = useState<ProjectForm>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const loadItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/projects");
      if (res.ok) {
        const data = await res.json();
        setItems(data.data ?? data);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadItems(); }, [loadItems]);

  function openAdd() {
    setEditItem(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  }

  function openEdit(item: Project) {
    setEditItem(item);
    setForm({
      slug: item.slug,
      title: item.title,
      category: item.category,
      location: item.location,
      year: item.year,
      surface: item.surface ?? "",
      duration: item.duration ?? "",
      shortDescription: item.shortDescription,
      fullDescription: item.fullDescription,
      challenge: item.challenge ?? "",
      solution: item.solution ?? "",
      featuredImage: item.featuredImage,
      beforeImage: item.beforeImage ?? "",
      afterImage: item.afterImage ?? "",
      featured: item.featured,
    });
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditItem(null);
    setForm(EMPTY_FORM);
  }

  function handleTitleChange(title: string) {
    setForm((f) => ({
      ...f,
      title,
      slug: editItem ? f.slug : slugify(title),
    }));
  }

  async function handleFeaturedToggle(item: Project) {
    const updated = { ...item, featured: !item.featured };
    await fetch("/api/admin/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "update", data: updated }),
    });
    await loadItems();
  }

  async function handleSave() {
    setSaving(true);
    try {
      const data = editItem
        ? {
            ...editItem,
            ...form,
            images: editItem.images,
            services: editItem.services,
          }
        : {
            ...form,
            id: form.slug || Date.now().toString(),
            images: form.featuredImage ? [form.featuredImage] : [],
            services: [],
          };
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: editItem ? "update" : "add", data }),
      });
      if (res.ok) {
        await loadItems();
        closeModal();
      }
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!deleteId) return;
    setDeleting(true);
    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete", id: deleteId }),
      });
      if (res.ok) {
        await loadItems();
        setDeleteId(null);
      }
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-neutral-900">Projets</h1>
          <p className="mt-1 text-neutral-500">{items.length} projet{items.length !== 1 ? "s" : ""}</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 rounded-lg bg-primary-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          <Plus size={16} />
          Ajouter
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 size={24} className="animate-spin text-neutral-400" />
        </div>
      ) : (
        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 text-left border-b border-neutral-100">
                <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Titre</th>
                <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide hidden sm:table-cell">Catégorie</th>
                <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide hidden md:table-cell">Lieu</th>
                <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide hidden md:table-cell">Année</th>
                <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide text-center">Mis en avant</th>
                <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide w-28">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {items.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-neutral-400">
                    Aucun projet. Ajoutez-en un !
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id} className="hover:bg-neutral-50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium text-neutral-900 max-w-xs truncate">{item.title}</p>
                      <p className="text-xs text-neutral-400 font-mono">{item.slug}</p>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                        {CATEGORY_LABELS[item.category] ?? item.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-neutral-500 hidden md:table-cell">{item.location}</td>
                    <td className="px-4 py-3 text-neutral-500 hidden md:table-cell">{item.year}</td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleFeaturedToggle(item)}
                        className={`inline-flex items-center justify-center rounded-full p-1.5 transition-colors ${
                          item.featured
                            ? "bg-accent-100 text-accent-600"
                            : "bg-neutral-100 text-neutral-400 hover:text-neutral-600"
                        }`}
                      >
                        <Star size={14} className={item.featured ? "fill-current" : ""} />
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEdit(item)}
                          className="flex items-center gap-1 rounded-lg border border-neutral-200 px-2.5 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50"
                        >
                          <Pencil size={12} />
                          Modifier
                        </button>
                        <button
                          onClick={() => setDeleteId(item.id)}
                          className="flex items-center justify-center rounded-lg border border-red-200 p-1.5 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Add / Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
              <h3 className="font-heading text-xl font-bold text-neutral-900">
                {editItem ? "Modifier le projet" : "Ajouter un projet"}
              </h3>
              <button onClick={closeModal} className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100">
                <X size={18} />
              </button>
            </div>
            <div className="px-6 py-5 space-y-4">
              {/* Title + Slug */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Titre</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none"
                    placeholder="Titre du projet"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">
                    Slug <span className="text-neutral-400 normal-case font-normal">(auto-généré)</span>
                  </label>
                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm font-mono focus:border-primary-900 focus:outline-none"
                  />
                </div>
              </div>

              {/* Category, Location, Year */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Catégorie</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none bg-white"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Lieu</label>
                  <input
                    type="text"
                    value={form.location}
                    onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none"
                    placeholder="Centre-ville"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Année</label>
                  <input
                    type="number"
                    value={form.year}
                    onChange={(e) => setForm((f) => ({ ...f, year: parseInt(e.target.value) || f.year }))}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none"
                  />
                </div>
              </div>

              {/* Surface + Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Surface</label>
                  <input
                    type="text"
                    value={form.surface}
                    onChange={(e) => setForm((f) => ({ ...f, surface: e.target.value }))}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none"
                    placeholder="400 m²"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Durée</label>
                  <input
                    type="text"
                    value={form.duration}
                    onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none"
                    placeholder="8 semaines"
                  />
                </div>
              </div>

              {/* Descriptions */}
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Description courte</label>
                <textarea
                  value={form.shortDescription}
                  onChange={(e) => setForm((f) => ({ ...f, shortDescription: e.target.value }))}
                  rows={2}
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none resize-y"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Description complète</label>
                <textarea
                  value={form.fullDescription}
                  onChange={(e) => setForm((f) => ({ ...f, fullDescription: e.target.value }))}
                  rows={3}
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none resize-y"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Défi</label>
                  <textarea
                    value={form.challenge}
                    onChange={(e) => setForm((f) => ({ ...f, challenge: e.target.value }))}
                    rows={3}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none resize-y"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Solution</label>
                  <textarea
                    value={form.solution}
                    onChange={(e) => setForm((f) => ({ ...f, solution: e.target.value }))}
                    rows={3}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none resize-y"
                  />
                </div>
              </div>

              {/* Images */}
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Image principale (chemin)</label>
                <input
                  type="text"
                  value={form.featuredImage}
                  onChange={(e) => setForm((f) => ({ ...f, featuredImage: e.target.value }))}
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm font-mono focus:border-primary-900 focus:outline-none"
                  placeholder="/images/projects/projet-1-apres.jpg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Image avant (chemin)</label>
                  <input
                    type="text"
                    value={form.beforeImage}
                    onChange={(e) => setForm((f) => ({ ...f, beforeImage: e.target.value }))}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm font-mono focus:border-primary-900 focus:outline-none"
                    placeholder="/images/projects/projet-1-avant.jpg"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Image après (chemin)</label>
                  <input
                    type="text"
                    value={form.afterImage}
                    onChange={(e) => setForm((f) => ({ ...f, afterImage: e.target.value }))}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm font-mono focus:border-primary-900 focus:outline-none"
                    placeholder="/images/projects/projet-1-apres.jpg"
                  />
                </div>
              </div>

              {/* Featured */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))}
                    className="sr-only"
                  />
                  <div className={`h-5 w-5 rounded border-2 transition-colors flex items-center justify-center ${form.featured ? "border-primary-900 bg-primary-900" : "border-neutral-300 bg-white"}`}>
                    {form.featured && <span className="text-white text-xs font-bold">✓</span>}
                  </div>
                </div>
                <span className="text-sm font-medium text-neutral-700">Mettre ce projet en avant</span>
              </label>
            </div>
            <div className="flex gap-3 px-6 pb-6">
              <button onClick={closeModal} className="flex-1 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
                Annuler
              </button>
              <button
                onClick={handleSave}
                disabled={saving || !form.title}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
              >
                {saving && <Loader2 size={14} className="animate-spin" />}
                {saving ? "Sauvegarde..." : "Sauvegarder"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
            <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">Supprimer ce projet ?</h3>
            <p className="text-sm text-neutral-500 mb-6">Cette action est irréversible.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
                Annuler
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
              >
                {deleting && <Loader2 size={14} className="animate-spin" />}
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
