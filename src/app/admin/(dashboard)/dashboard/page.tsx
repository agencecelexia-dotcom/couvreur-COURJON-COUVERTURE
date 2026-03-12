"use client";
import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import DashboardTab from "@/components/admin/DashboardTab";
import ContenuTab from "@/components/admin/ContenuTab";
import PhotosTab from "@/components/admin/PhotosTab";
import TemoignagesTab from "@/components/admin/TemoignagesTab";
import ServicesTab from "@/components/admin/ServicesTab";
import ProjetsTab from "@/components/admin/ProjetsTab";

type Tab = "dashboard" | "contenu" | "photos" | "temoignages" | "services" | "projets";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");

  const renderTab = () => {
    switch (activeTab) {
      case "dashboard": return <DashboardTab />;
      case "contenu": return <ContenuTab />;
      case "photos": return <PhotosTab />;
      case "temoignages": return <TemoignagesTab />;
      case "services": return <ServicesTab />;
      case "projets": return <ProjetsTab />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex overflow-hidden bg-neutral-50">
      <AdminSidebar activeTab={activeTab} setActiveTab={(tab) => setActiveTab(tab as Tab)} />
      <main className="flex-1 overflow-y-auto">
        <div className="px-6 pb-6 pt-16 lg:p-8 max-w-7xl mx-auto">{renderTab()}</div>
      </main>
    </div>
  );
}
