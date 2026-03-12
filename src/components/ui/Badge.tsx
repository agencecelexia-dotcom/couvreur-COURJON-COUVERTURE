import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variant === "default" && "bg-primary-100 text-primary-800",
        variant === "accent" && "bg-accent-100 text-accent-800",
        variant === "outline" && "border border-neutral-300 text-neutral-600",
        className
      )}
    >
      {children}
    </span>
  );
}
