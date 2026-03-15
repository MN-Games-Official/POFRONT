import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/30",
  secondary:
    "bg-surface-raised text-text-primary hover:bg-surface-overlay border border-border",
  outline:
    "border border-border text-text-primary hover:bg-surface-raised hover:border-slate-500",
  ghost: "text-text-secondary hover:text-text-primary hover:bg-surface-raised",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  external,
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2 rounded-lg font-medium
    transition-all duration-200 ease-out cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background
    ${variantClasses[variant]} ${sizeClasses[size]} ${className}
  `.trim();

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
