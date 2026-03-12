"use client";

import { useState } from "react";
import {
  Eye,
  Users,
  MousePointerClick,
  FileText,
  RefreshCw,
  Phone,
  Mail,
  X,
  TrendingUp,
  Clock,
  Percent,
} from "lucide-react";
import { clientConfig } from "@/config/client.config";

// Zones parsed from ZONES_LISTE (comma-separated in CLIENT.md)
const zones = clientConfig.ZONES_LISTE.split(",").map((z) => z.trim());

type SubmissionStatus = "Nouveau" | "Contacté" | "En cours" | "Converti";

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
  location: string;
  date: string;
  time: string;
  status: SubmissionStatus;
}

const INITIAL_SUBMISSIONS: Submission[] = [
  {
    id: "1",
    name: "Sophie Marchand",
    email: "sophie.marchand@email.fr",
    phone: "06 12 34 56 78",
    service: "Renovation toiture",
    subject: "Renovation toiture maison ancienne 150m2",
    message: "Bonjour, notre toiture en tuiles a plus de 40 ans et presente des fuites. Nous souhaitons un diagnostic complet et un devis pour la renovation. Maison de 150m2.",
    location: zones[0] ?? clientConfig.VILLE,
    date: "21/02/2026",
    time: "10:23",
    status: "Nouveau",
  },
  {
    id: "2",
    name: "Pierre & Nathalie Bonnet",
    email: "bonnet.pierre@gmail.com",
    phone: "06 98 76 54 32",
    service: "Isolation toiture",
    subject: "Isolation combles amenageables par sarking",
    message: "Nous souhaitons isoler notre toiture par l'exterieur (sarking) pour amenager les combles. Toiture de 120m2. Pouvez-vous nous faire un devis avec les aides eligibles ?",
    location: zones[1] ?? zones[0] ?? clientConfig.VILLE,
    date: "20/02/2026",
    time: "14:45",
    status: "Contacté",
  },
  {
    id: "3",
    name: "Michel Faure",
    email: "m.faure@orange.fr",
    phone: "07 23 45 67 89",
    service: "Zinguerie",
    subject: "Remplacement gouttieres et descentes EP",
    message: "Les gouttieres de ma maison sont percees et les descentes d'eaux pluviales sont oxydees. Je souhaite un devis pour le remplacement complet en zinc.",
    location: zones[2] ?? zones[0] ?? clientConfig.VILLE,
    date: "19/02/2026",
    time: "09:15",
    status: "En cours",
  },
  {
    id: "4",
    name: "Isabelle Petit",
    email: "isabelle.petit@sfr.fr",
    phone: "06 34 56 78 90",
    service: "Depannage urgence",
    subject: "Tuiles arrachees apres tempete — fuite",
    message: "Plusieurs tuiles ont ete arrachees par le vent cette nuit et il y a une fuite dans la chambre. Pouvez-vous intervenir rapidement pour un bachage d'urgence ?",
    location: zones[3] ?? zones[0] ?? clientConfig.VILLE,
    date: "18/02/2026",
    time: "16:30",
    status: "Converti",
  },
  {
    id: "5",
    name: "Jean-Marc Reynaud",
    email: "jm.reynaud@free.fr",
    phone: "06 45 67 89 01",
    service: "Couverture neuve",
    subject: "Couverture ardoise maison neuve 200m2",
    message: "Construction d'une maison neuve de 200m2, nous cherchons un couvreur pour la pose de la couverture en ardoise naturelle. Charpente en cours de pose.",
    location: zones[4] ?? zones[0] ?? clientConfig.VILLE,
    date: "17/02/2026",
    time: "11:00",
    status: "Nouveau",
  },
];

const FAKE_STATS = {
  totalViews: 3241,
  todayViews: 47,
  weekViews: 213,
  monthViews: 891,
  ctaClicks: 178,
  formSubmits: 54,
  uniqueVisitors: 2156,
  avgSessionDuration: "2m 51s",
  bounceRate: "35.7%",
  conversionRate: "1.7%",
  topPages: [
    { page: "/", label: "Accueil", views: 1284 },
    { page: "/realisations", label: "Réalisations", views: 643 },
    { page: "/services", label: "Services", views: 521 },
    { page: "/contact", label: "Contact", views: 389 },
    { page: "/a-propos", label: "À propos", views: 234 },
    { page: "/blog", label: "Blog", views: 170 },
  ],
  topReferrers: [
    { source: "Google organic", visits: 1456, pct: "67%" },
    { source: "Direct", visits: 412, pct: "19%" },
    { source: "Google Maps", visits: 178, pct: "8%" },
    { source: "Instagram", visits: 75, pct: "3%" },
    { source: "Pages Jaunes", visits: 35, pct: "2%" },
  ],
};

const STATUS_COLORS: Record<SubmissionStatus, string> = {
  Nouveau: "bg-blue-100 text-blue-700",
  Contacté: "bg-yellow-100 text-yellow-700",
  "En cours": "bg-orange-100 text-orange-700",
  Converti: "bg-green-100 text-green-700",
};

export default function DashboardTab() {
  const [submissions, setSubmissions] = useState<Submission[]>(INITIAL_SUBMISSIONS);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [stats, setStats] = useState(FAKE_STATS);
  const [refreshing, setRefreshing] = useState(false);

  function handleStatusChange(id: string, status: SubmissionStatus) {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
    if (selectedSubmission?.id === id) {
      setSelectedSubmission((prev) => (prev ? { ...prev, status } : null));
    }
  }

  function handleRefresh() {
    setRefreshing(true);
    setTimeout(() => {
      setStats((prev) => ({
        ...prev,
        todayViews: prev.todayViews + Math.floor(Math.random() * 5) + 1,
        totalViews: prev.totalViews + Math.floor(Math.random() * 5) + 1,
      }));
      setRefreshing(false);
    }, 800);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-neutral-900">Tableau de bord</h1>
          <p className="mt-1 text-neutral-500">Vue d&apos;ensemble de votre activité</p>
        </div>
        <button
          onClick={handleRefresh}
          className="flex items-center gap-2 rounded-lg bg-primary-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          <RefreshCw size={15} className={refreshing ? "animate-spin" : ""} />
          Actualiser
        </button>
      </div>

      {/* Stats Grid 2x2 */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          icon={Eye}
          label="Vues totales"
          value={stats.totalViews.toLocaleString("fr-FR")}
          sub={`+${stats.todayViews} aujourd'hui`}
          color="bg-blue-50 text-blue-700"
        />
        <StatCard
          icon={Users}
          label="Visiteurs uniques"
          value={stats.uniqueVisitors.toLocaleString("fr-FR")}
          sub={`Ce mois: ${stats.monthViews}`}
          color="bg-primary-50 text-primary-700"
        />
        <StatCard
          icon={MousePointerClick}
          label="Clics CTA"
          value={stats.ctaClicks.toString()}
          sub={`Taux: ${stats.conversionRate}`}
          color="bg-accent-50 text-accent-700"
        />
        <StatCard
          icon={FileText}
          label="Formulaires"
          value={stats.formSubmits.toString()}
          sub={`Rebond: ${stats.bounceRate}`}
          color="bg-green-50 text-green-700"
        />
      </div>

      {/* Secondary stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm flex items-center gap-3">
          <Clock size={18} className="text-neutral-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-neutral-500">Durée moy. session</p>
            <p className="text-lg font-bold text-neutral-900">{stats.avgSessionDuration}</p>
          </div>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm flex items-center gap-3">
          <TrendingUp size={18} className="text-neutral-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-neutral-500">Vues cette semaine</p>
            <p className="text-lg font-bold text-neutral-900">{stats.weekViews}</p>
          </div>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm flex items-center gap-3">
          <Percent size={18} className="text-neutral-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-neutral-500">Taux de rebond</p>
            <p className="text-lg font-bold text-neutral-900">{stats.bounceRate}</p>
          </div>
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-neutral-100">
          <h2 className="font-heading text-lg font-semibold text-neutral-900">
            Demandes récentes
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 text-left">
                <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Nom</th>
                <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Localisation</th>
                <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Sujet</th>
                <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Date</th>
                <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {submissions.map((s) => (
                <tr
                  key={s.id}
                  className="hover:bg-neutral-50 cursor-pointer transition-colors"
                  onClick={() => setSelectedSubmission(s)}
                >
                  <td className="px-4 py-3 font-medium text-neutral-900">{s.name}</td>
                  <td className="px-4 py-3 text-neutral-500">{s.location}</td>
                  <td className="px-4 py-3 text-neutral-700 max-w-xs truncate">{s.subject}</td>
                  <td className="px-4 py-3 text-neutral-500 whitespace-nowrap">{s.date}</td>
                  <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                    <select
                      value={s.status}
                      onChange={(e) => handleStatusChange(s.id, e.target.value as SubmissionStatus)}
                      className={`rounded-full px-2.5 py-1 text-xs font-medium border-0 cursor-pointer ${STATUS_COLORS[s.status]}`}
                    >
                      <option value="Nouveau">Nouveau</option>
                      <option value="Contacté">Contacté</option>
                      <option value="En cours">En cours</option>
                      <option value="Converti">Converti</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom grid: Top Pages + Referrers */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Top Pages */}
        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-100">
            <h2 className="font-heading text-base font-semibold text-neutral-900">Pages les plus visitées</h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {stats.topPages.map((p, i) => (
              <div key={p.page} className="flex items-center justify-between px-6 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-neutral-400 w-4">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">{p.label}</p>
                    <p className="text-xs text-neutral-400 font-mono">{p.page}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-neutral-700">{p.views.toLocaleString("fr-FR")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Referrers */}
        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-100">
            <h2 className="font-heading text-base font-semibold text-neutral-900">Sources de trafic</h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {stats.topReferrers.map((r) => (
              <div key={r.source} className="flex items-center justify-between px-6 py-3">
                <span className="text-sm text-neutral-700">{r.source}</span>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-24 rounded-full bg-neutral-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent-500"
                      style={{ width: r.pct }}
                    />
                  </div>
                  <span className="text-xs font-medium text-neutral-500 w-8 text-right">{r.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
              <div>
                <h3 className="font-heading text-xl font-bold text-neutral-900">{selectedSubmission.name}</h3>
                <p className="text-sm text-neutral-500">{selectedSubmission.location} — {selectedSubmission.date} à {selectedSubmission.time}</p>
              </div>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 py-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${STATUS_COLORS[selectedSubmission.status]}`}>
                  {selectedSubmission.status}
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">{selectedSubmission.service}</span>
              </div>

              <div>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1">Sujet</p>
                <p className="text-sm font-medium text-neutral-900">{selectedSubmission.subject}</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1">Message</p>
                <p className="text-sm text-neutral-700 leading-relaxed">{selectedSubmission.message}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1">Email</p>
                  <p className="text-sm text-neutral-700">{selectedSubmission.email}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1">Téléphone</p>
                  <p className="text-sm text-neutral-700">{selectedSubmission.phone}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-2">Changer le statut</p>
                <div className="flex flex-wrap gap-2">
                  {(["Nouveau", "Contacté", "En cours", "Converti"] as SubmissionStatus[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => handleStatusChange(selectedSubmission.id, s)}
                      className={`rounded-full px-3 py-1 text-xs font-medium border transition-all ${
                        selectedSubmission.status === s
                          ? STATUS_COLORS[s] + " ring-2 ring-offset-1 ring-current"
                          : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 px-6 pb-6">
              <a
                href={`tel:${selectedSubmission.phone}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
              >
                <Phone size={15} />
                Appeler
              </a>
              <a
                href={`mailto:${selectedSubmission.email}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
              >
                <Mail size={15} />
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
  color: string;
}

function StatCard({ icon: Icon, label, value, sub, color }: StatCardProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">{label}</p>
          <p className="mt-1.5 text-2xl font-bold text-neutral-900">{value}</p>
          <p className="mt-0.5 text-xs text-neutral-400">{sub}</p>
        </div>
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${color}`}>
          <Icon size={18} />
        </div>
      </div>
    </div>
  );
}
