import Link from "next/link";
import { cn } from "@/lib/utils";
import { clientConfig } from "@/config/client.config";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export default function Logo({ light = false, className }: LogoProps) {
  // Split company name for two-line display (first word + rest)
  const words = clientConfig.NOM_ENTREPRISE.split(" ");
  const line1 = words[0] || clientConfig.NOM_ENTREPRISE;
  const line2 = words.slice(1).join(" ") || "";

  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 2L2 14h4v20h28V14h4L18 2z"
            fill={light ? "oklch(0.64 0.16 25)" : "oklch(0.22 0.06 220)"}
            opacity="0.9"
          />
          <path
            d="M18 2L2 14h4v20h28V14h4L18 2z"
            stroke={light ? "oklch(0.72 0.14 27)" : "oklch(0.40 0.09 220)"}
            strokeWidth="1.5"
            fill="none"
          />
          <rect
            x="13"
            y="20"
            width="10"
            height="14"
            fill={light ? "oklch(0.22 0.06 220)" : "oklch(0.64 0.16 25)"}
            opacity="0.85"
          />
        </svg>
      </div>
      <div>
        <p
          className={cn(
            "font-heading text-lg font-bold leading-none",
            light ? "text-white" : "text-primary-900"
          )}
        >
          {line1}
        </p>
        {line2 && (
          <p
            className={cn(
              "text-xs font-semibold tracking-widest uppercase",
              light ? "text-accent-300" : "text-accent-600"
            )}
          >
            {line2}
          </p>
        )}
      </div>
    </Link>
  );
}
