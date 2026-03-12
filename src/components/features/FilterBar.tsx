"use client";

import { cn } from "@/lib/utils";

interface FilterBarProps {
  filters: { value: string; label: string }[];
  active: string;
  onChange: (value: string) => void;
}

export default function FilterBar({ filters, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200",
            active === filter.value
              ? "bg-primary-900 text-white border-primary-900 shadow-sm"
              : "bg-white text-neutral-600 border-neutral-200 hover:border-primary-300 hover:text-primary-700"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
