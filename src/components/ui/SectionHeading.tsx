import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          light ? "text-white" : "text-neutral-900"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-accent-500",
          centered && "mx-auto"
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg",
            light ? "text-neutral-200" : "text-neutral-600",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
