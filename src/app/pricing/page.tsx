"use client";

import { useState } from "react";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import PricingCard from "@/components/sections/PricingCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { pricingPlans, pricingFAQ } from "@/data/pricing";

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      {/* Hero */}
      <PageHero
        badge="Pricing"
        title="Plans that grow with your group"
        subtitle="Start free. Scale when you're ready. Every plan gives you access to Superior's core AI-powered tools."
      >
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <span
            className={`text-sm ${!annual ? "text-text-primary" : "text-text-muted"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
              annual ? "bg-accent" : "bg-surface-overlay"
            }`}
            aria-label="Toggle annual billing"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                annual ? "translate-x-6" : ""
              }`}
            />
          </button>
          <span
            className={`text-sm ${annual ? "text-text-primary" : "text-text-muted"}`}
          >
            Annual{" "}
            <span className="text-pine-400 text-xs font-medium">Save 20%</span>
          </span>
        </div>
      </PageHero>

      {/* Pricing Cards */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} annual={annual} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Compare Plans"
            title="Find the right fit"
            subtitle="A detailed look at what's included in each plan."
          />

          <AnimatedReveal className="mt-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 pr-4 text-text-muted font-medium">
                      Feature
                    </th>
                    {pricingPlans.map((p) => (
                      <th
                        key={p.name}
                        className={`text-center py-4 px-4 font-semibold ${
                          p.highlighted ? "text-lake-300" : "text-text-primary"
                        }`}
                      >
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Group Workspaces", values: ["1", "3", "10", "Unlimited"] },
                    { feature: "AI Applications", values: ["Basic", "✓", "✓", "✓"] },
                    { feature: "AI Grading", values: ["—", "✓", "✓", "✓"] },
                    { feature: "AI Rank Centers", values: ["—", "✓", "✓", "✓"] },
                    { feature: "AI Interviewers", values: ["—", "✓", "✓", "✓"] },
                    { feature: "AI Training Centers", values: ["—", "—", "✓", "✓"] },
                    { feature: "Analytics", values: ["Basic", "Advanced", "Advanced", "Custom"] },
                    { feature: "Audit Logging", values: ["—", "—", "✓", "✓"] },
                    { feature: "API Access", values: ["—", "—", "✓", "✓"] },
                    { feature: "Custom Branding", values: ["—", "✓", "✓", "✓"] },
                    { feature: "SSO Integration", values: ["—", "—", "—", "✓"] },
                    { feature: "Priority Support", values: ["—", "✓", "✓", "24/7"] },
                    { feature: "Dedicated Manager", values: ["—", "—", "—", "✓"] },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-3 pr-4 text-text-secondary">{row.feature}</td>
                      {row.values.map((v, j) => (
                        <td
                          key={j}
                          className={`text-center py-3 px-4 ${
                            v === "—"
                              ? "text-text-muted"
                              : v === "✓"
                                ? "text-pine-400"
                                : "text-text-secondary"
                          }`}
                        >
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Enterprise Upsell */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedReveal>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-lake-300 border border-lake-700 mb-6">
              Enterprise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
              Need something custom?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
              For large organizations with complex requirements, we offer
              tailored solutions with dedicated support, custom integrations,
              and white-glove onboarding.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Pricing questions"
            subtitle="Everything you need to know about our plans and billing."
          />
          <div className="mt-12">
            <FAQAccordion items={pricingFAQ} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Start managing your group better today"
        subtitle="Sign up free and explore Superior's AI-powered tools."
      />
    </>
  );
}
