"use client";

import { motion } from "framer-motion";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  group: string;
  index: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  group,
  index,
}: TestimonialCardProps) {
  return (
    <AnimatedReveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-surface rounded-2xl border border-border p-8 h-full flex flex-col"
      >
        <div className="text-lake-400 text-4xl mb-4 leading-none">&ldquo;</div>
        <p className="text-text-secondary leading-relaxed flex-1">{quote}</p>
        <div className="mt-6 pt-6 border-t border-border">
          <p className="font-medium text-text-primary">{author}</p>
          <p className="text-sm text-text-muted">
            {role} · {group}
          </p>
        </div>
      </motion.div>
    </AnimatedReveal>
  );
}
