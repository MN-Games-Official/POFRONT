import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import ProductCard from "@/components/sections/ProductCard";
import FeatureSplitSection from "@/components/sections/FeatureSplitSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { products, platformCapabilities, featuresFAQ, rolesBenefits } from "@/data/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Superior's AI-powered product suite: applications, rank centers, interviewers, training, and more for Roblox group management.",
};

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        badge="Product Suite"
        title="Everything your group needs to operate at its best"
        subtitle="A cohesive ecosystem of AI-powered tools that bring structure, consistency, and efficiency to every corner of Roblox group operations."
      />

      {/* Platform Overview Grid */}
      <section className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Products"
            title="Four pillars of intelligent management"
            subtitle="Each module is designed to work independently or as part of the complete Superior platform."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <ProductCard key={p.id} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Sections */}
      {products.map((p, i) => (
        <FeatureSplitSection
          key={p.id}
          id={p.id}
          title={p.title}
          subtitle={p.subtitle}
          description={p.description}
          features={p.features}
          icon={p.icon}
          reversed={i % 2 === 1}
          index={i}
        />
      ))}

      {/* Role-Based Benefits */}
      <section className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Built for Every Role"
            title="Value across your entire organization"
            subtitle="From group owners to trainers, Superior delivers targeted value for every team member."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rolesBenefits.map((rb, i) => (
              <AnimatedReveal key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-border bg-surface/50 hover:bg-surface hover:border-lake-700/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {rb.role}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {rb.benefit}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Platform"
            title="Beyond the modules"
            subtitle="Superior provides the operational infrastructure that ties everything together."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformCapabilities.map((cap, i) => (
              <AnimatedReveal key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-border bg-surface/50">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Workflow"
            title="A seamless operational pipeline"
            subtitle="See how Superior connects every step of your group's operations into a cohesive, automated workflow."
          />

          <div className="mt-16 max-w-3xl mx-auto space-y-0">
            {[
              { title: "Define", desc: "Set up roles, criteria, and operational standards for your group." },
              { title: "Attract", desc: "Deploy polished AI application forms that evaluate candidates intelligently." },
              { title: "Evaluate", desc: "AI-powered screening ensures consistent, fair candidate assessment." },
              { title: "Interview", desc: "Standardized interview workflows scale your hiring without compromising quality." },
              { title: "Train", desc: "Structured onboarding programs build staff readiness and consistency." },
              { title: "Advance", desc: "Clear promotion pathways ensure transparent, merit-based progression." },
            ].map((item, i) => (
              <AnimatedReveal key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-lake-800 border border-lake-600 flex items-center justify-center text-lake-300 text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < 5 && <div className="w-px h-12 bg-border" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                    <p className="text-sm text-text-secondary mt-1">{item.desc}</p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Common questions"
            subtitle="Everything you need to know about Superior's features and capabilities."
          />

          <div className="mt-12">
            <FAQAccordion items={featuresFAQ} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to see the platform in action?"
        subtitle="Start building better operations for your Roblox group with Superior."
      />
    </>
  );
}
