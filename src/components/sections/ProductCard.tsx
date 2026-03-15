"use client";

import { motion } from "framer-motion";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

interface ProductCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  index: number;
  id?: string;
}

export default function ProductCard({
  icon,
  title,
  subtitle,
  description,
  features,
  index,
  id,
}: ProductCardProps) {
  return (
    <AnimatedReveal delay={index * 0.1}>
      <motion.div
        id={id}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group relative bg-surface rounded-2xl border border-border p-8 hover:border-lake-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-lake-900/10 h-full"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lake-800/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <div className="text-3xl mb-4">{icon}</div>
          <h3 className="text-xl font-bold text-text-primary mb-1">{title}</h3>
          <p className="text-sm text-lake-400 mb-4">{subtitle}</p>
          <p className="text-text-secondary leading-relaxed mb-6 text-sm">
            {description}
          </p>
          <ul className="space-y-2">
            {features.slice(0, 4).map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                <span className="text-pine-400 mt-0.5 flex-shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatedReveal>
  );
}
