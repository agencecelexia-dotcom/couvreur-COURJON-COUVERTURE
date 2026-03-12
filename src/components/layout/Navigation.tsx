"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/navigation";

interface NavigationProps {
  light?: boolean;
}

export default function Navigation({ light = false }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navigationItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors rounded-md group",
              light
                ? isActive
                  ? "text-accent-300"
                  : "text-white/85 hover:text-white"
                : isActive
                ? "text-primary-700"
                : "text-neutral-600 hover:text-neutral-900"
            )}
          >
            {item.label}
            <span
              className={cn(
                "absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full transition-all duration-300 origin-left",
                light ? "bg-accent-300" : "bg-accent-500",
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
