"use client";

import { motion } from "framer-motion";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function PageHero({ badge, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-lake-900/30 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-lake-800)_0%,_transparent_60%)] opacity-30" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-lake-300 border border-lake-700 mb-6">
              {badge}
            </span>
          </motion.div>
        )}

        <AnimatedReveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary tracking-tight leading-[1.1]">
            {title}
          </h1>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </AnimatedReveal>

        {children && (
          <AnimatedReveal delay={0.3}>
            <div className="mt-8">{children}</div>
          </AnimatedReveal>
        )}
      </div>
    </section>
  );
}
