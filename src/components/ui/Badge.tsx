import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "pine" | "stone";
  className?: string;
}

const variantClasses: Record<string, string> = {
  default: "bg-surface-raised text-text-secondary border-border",
  accent: "bg-accent/10 text-lake-300 border-lake-700",
  pine: "bg-pine-600/10 text-pine-300 border-pine-600/30",
  stone: "bg-stone-500/10 text-stone-300 border-stone-500/30",
};

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
