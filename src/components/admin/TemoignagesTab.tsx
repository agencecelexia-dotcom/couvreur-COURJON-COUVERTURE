"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Star, Pencil, Trash2, X, Loader2 } from "lucide-react";

interface Testimonial {
  id: string;
  clientName: string;
  clientRole?: string;
  quote: string;
  rating: number;
  projectType: string;
  date: string;
}

const EMPTY_FORM: Omit<Testimonial, "id"> = {
  clientName: "",
  clientRole: "",
  quote: "",
  rating: 5,
  projectType: "",
  date: "",
};

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className="transition-transform hover:scale-110"
        >
          <Star
            size={22}
            className={n <= value ? "fill-accent-500 text-accent-500" : "text-neutral-300"}
          />
        </button>
      ))}
    </div>
  );
}

export default function TemoignagesTab() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<Testimonial | null>(null);
  const [form, setForm] = useState<Omit<Testimonial, "id">>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const loadItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/testimonials");
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

  function openEdit(item: Testimonial) {
    setEditItem(item);
    setForm({
      clientName: item.clientName,
      clientRole: item.clientRole ?? "",
      quote: item.quote,
      rating: item.rating,
      projectType: item.projectType,
      date: item.date,
    });
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditItem(null);
    setForm(EMPTY_FORM);
  }

  async function handleSave() {
    setSaving(true);
    try {
      const data = editItem
        ? { ...form, id: editItem.id }
        : { ...form, id: Date.now().toString() };
      const res = await fetch("/api/admin/testimonials", {
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
      const res = await fetch("/api/admin/testimonials", {
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
          <h1 className="font-heading text-3xl font-bold text-neutral-900">Témoignages</h1>
          <p className="mt-1 text-neutral-500">{items.length} témoignage{items.length !== 1 ? "s" : ""}</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 rounded-lg bg-primary-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          <Plus size={16} />
          Ajouter
        </button>
      </div>

      {/* List */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 size={24} className="animate-spin text-neutral-400" />
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-xl border border-dashed border-neutral-300 bg-white p-12 text-center">
          <p className="text-neutral-500">Aucun témoignage. Ajoutez-en un !</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < item.rating ? "fill-accent-500 text-accent-500" : "text-neutral-200"}
                  />
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm text-neutral-700 line-clamp-3 mb-4">&ldquo;{item.quote}&rdquo;</p>
              {/* Client */}
              <div className="border-t border-neutral-100 pt-3">
                <p className="text-sm font-semibold text-neutral-900">{item.clientName}</p>
                {item.clientRole && <p className="text-xs text-neutral-500">{item.clientRole}</p>}
                <p className="text-xs text-neutral-400 mt-0.5">{item.projectType} — {item.date}</p>
              </div>
              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => openEdit(item)}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50"
                >
                  <Pencil size={13} />
                  Modifier
                </button>
                <button
                  onClick={() => setDeleteId(item.id)}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                >
                  <Trash2 size={13} />
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
              <h3 className="font-heading text-xl font-bold text-neutral-900">
                {editItem ? "Modifier le témoignage" : "Ajouter un témoignage"}
              </h3>
              <button onClick={closeModal} className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100">
                <X size={18} />
              </button>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Nom du client</label>
                <input
                  type="text"
                  value={form.clientName}
                  onChange={(e) => setForm((f) => ({ ...f, clientName: e.target.value }))}
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none"
                  placeholder="Marie-Claire Dubois"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Localisation / Rôle</label>
                <input
                  type="text"
                  value={form.clientRole}
                  onChange={(e) => setForm((f) => ({ ...f, clientRole: e.target.value }))}
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none"
                  placeholder="Particulier — Votre Ville"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Témoignage</label>
                <textarea
                  value={form.quote}
                  onChange={(e) => setForm((f) => ({ ...f, quote: e.target.value }))}
                  rows={4}
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none resize-y"
                  placeholder="Leur expérience avec votre entreprise..."
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Note</label>
                <StarPicker value={form.rating} onChange={(v) => setForm((f) => ({ ...f, rating: v }))} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Type de projet</label>
                  <input
                    type="text"
                    value={form.projectType}
                    onChange={(e) => setForm((f) => ({ ...f, projectType: e.target.value }))}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none"
                    placeholder="Couverture complete"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5">Date (AAAA-MM)</label>
                  <input
                    type="text"
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none"
                    placeholder="2024-06"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3 px-6 pb-6">
              <button onClick={closeModal} className="flex-1 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
                Annuler
              </button>
              <button
                onClick={handleSave}
                disabled={saving || !form.clientName || !form.quote}
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
            <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">Supprimer ce témoignage ?</h3>
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
