"use client";

import CountUp from "@/components/animations/CountUp";
import FadeUp from "@/components/animations/FadeUp";
import { clientConfig } from "@/config/client.config";

const stats = [
  { value: parseInt(clientConfig.ANNEES_EXPERIENCE, 10), suffix: "+", label: "Années d'expérience" },
  { value: 500, suffix: "+", label: "Chantiers réalisés" },
  { value: 98, suffix: "%", label: "Clients satisfaits" },
  { value: 8, suffix: "", label: "Professionnels dévoués" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1} className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-bold text-white">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-neutral-300">{stat.label}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
