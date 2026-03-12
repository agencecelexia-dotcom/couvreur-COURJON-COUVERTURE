"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  FileText,
  ImageIcon,
  MessageSquare,
  Wrench,
  FolderOpen,
  Menu,
  X,
  LogOut,
  Home,
} from "lucide-react";
import { clientConfig } from "@/config/client.config";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "contenu", label: "Contenu", icon: FileText },
  { id: "photos", label: "Photos", icon: ImageIcon },
  { id: "temoignages", label: "Témoignages", icon: MessageSquare },
  { id: "services", label: "Services", icon: Wrench },
  { id: "projets", label: "Projets", icon: FolderOpen },
];

export default function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/");
  }

  function handleTabClick(tabId: string) {
    setActiveTab(tabId);
    setMobileOpen(false);
  }

  const SidebarContent = () => (
    <div className="flex h-full flex-col bg-primary-900">
      {/* Header */}
      <div className="border-b border-white/10 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent-500">
            <Home size={18} className="text-white" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-white">{clientConfig.NOM_ENTREPRISE}</p>
            <p className="text-xs text-neutral-400">Administration</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleTabClick(item.id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-left ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-neutral-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={18} className={isActive ? "text-accent-500" : ""} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-white/10 px-3 py-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <LogOut size={18} />
          Déconnexion
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-shrink-0">
        <div className="w-64">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-900 text-white shadow-lg lg:hidden"
        aria-label="Ouvrir le menu"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="fixed inset-y-0 left-0 z-50 w-64">
            <div className="relative h-full">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute right-3 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg text-white/60 hover:bg-white/10 hover:text-white"
                aria-label="Fermer le menu"
              >
                <X size={18} />
              </button>
              <SidebarContent />
            </div>
          </div>
        </>
      )}
    </>
  );
}
