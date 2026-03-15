"use client";

import { motion } from "framer-motion";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import type { PricingPlan } from "@/data/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  annual: boolean;
  index: number;
}

export default function PricingCard({ plan, annual, index }: PricingCardProps) {
  const price = annual ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <AnimatedReveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={`relative rounded-2xl border p-8 h-full flex flex-col ${
          plan.highlighted
            ? "border-lake-600 bg-gradient-to-b from-lake-900/30 to-surface shadow-xl shadow-lake-900/20"
            : "border-border bg-surface"
        }`}
      >
        {plan.badge && (
          <div className="absolute -top-3 left-8">
            <Badge variant="accent">{plan.badge}</Badge>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-xl font-bold text-text-primary">{plan.name}</h3>
          <p className="text-sm text-text-secondary mt-1">{plan.description}</p>
        </div>

        <div className="mb-6">
          {price !== null ? (
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-text-primary">${price}</span>
              <span className="text-text-muted">/month</span>
            </div>
          ) : (
            <div className="text-4xl font-bold text-text-primary">Custom</div>
          )}
          {annual && price !== null && price > 0 && (
            <p className="text-xs text-pine-400 mt-1">Billed annually</p>
          )}
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="text-pine-400 mt-0.5 flex-shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>

        <Button
          href={plan.ctaHref}
          variant={plan.highlighted ? "primary" : "outline"}
          size="lg"
          className="w-full"
          external={plan.ctaHref.startsWith("http")}
        >
          {plan.cta}
        </Button>
      </motion.div>
    </AnimatedReveal>
  );
}
