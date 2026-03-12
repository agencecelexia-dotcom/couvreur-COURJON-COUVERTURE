"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-[#2C3E50] text-white hover:bg-[#1a2535]",
        secondary:
          "bg-[#F5F5DC] text-[#2C3E50] hover:bg-[#ede9cc]",
        accent:
          "bg-[#B8860B] text-white hover:bg-[#9a700a]",
        outline:
          "border border-[#2C3E50] bg-transparent text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white",
        "outline-light":
          "border border-white/60 bg-transparent text-white hover:bg-white hover:text-[#2C3E50]",
        ghost:
          "bg-transparent text-[#2C3E50] hover:bg-[#F0ECE4]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-15 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
