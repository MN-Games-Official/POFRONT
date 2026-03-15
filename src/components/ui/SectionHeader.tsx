import AnimatedReveal from "./AnimatedReveal";
import { type ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <AnimatedReveal className={`${centered ? "text-center" : ""} ${className}`}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-lake-300 border border-lake-700 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-3xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </AnimatedReveal>
  );
}
