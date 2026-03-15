import VideoHero from "@/components/sections/VideoHero";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import ProductCard from "@/components/sections/ProductCard";
import TestimonialCard from "@/components/sections/TestimonialCard";
import MetricCard from "@/components/sections/MetricCard";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";
import { products } from "@/data/features";
import { testimonials } from "@/data/testimonials";
import { LINKS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <VideoHero />

      {/* Trust Band */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <MetricCard value="500+" label="Groups Managed" index={0} />
            <MetricCard value="50K+" label="Applications Processed" index={1} />
            <MetricCard value="99.9%" label="Platform Uptime" index={2} />
            <MetricCard value="4.9/5" label="Satisfaction Rating" index={3} />
          </div>
        </div>
      </section>

      {/* What is Superior */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedReveal direction="left">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-lake-300 border border-lake-700 mb-4">
                The Platform
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight leading-tight mb-6">
                Modern AI infrastructure for serious Roblox groups
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Superior is a comprehensive management platform designed for Roblox
                organizations that need structure, automation, and scale. From
                applications to training, every operational workflow is built to be
                consistent, intelligent, and effortless.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Whether you manage one group or many, Superior gives you the tools
                to run professional operations with the calm confidence of a
                well-built system.
              </p>
              <Button href={LINKS.features} variant="outline">
                Explore the Platform
              </Button>
            </AnimatedReveal>

            <AnimatedReveal direction="right" delay={0.1}>
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-lake-900/50 to-surface border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lake-400 to-lake-600 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">S</span>
                  </div>
                  <p className="text-text-muted text-sm">Platform Dashboard Preview</p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Core Products */}
      <section className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Products"
            title="Everything your group needs"
            subtitle="A cohesive suite of AI-powered tools designed to bring structure, consistency, and efficiency to every aspect of Roblox group operations."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <ProductCard key={p.id} {...p} index={i} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href={LINKS.features} variant="outline">
              See All Features
            </Button>
          </div>
        </div>
      </section>

      {/* Why Groups Choose Superior */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Superior"
            title="Built for groups that take operations seriously"
            subtitle="Superior replaces fragmented tools and manual processes with a unified, intelligent platform."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Consistent Standards",
                desc: "Every application, interview, promotion, and training session follows the same quality standards — automatically.",
                icon: "⚡",
              },
              {
                title: "AI-Powered Efficiency",
                desc: "Reduce hours of manual review and administration. Let intelligent systems handle the repetitive work so your team can focus on what matters.",
                icon: "🧠",
              },
              {
                title: "Scale with Confidence",
                desc: "Whether you're managing 50 members or 5,000, Superior's infrastructure grows with you without sacrificing quality or control.",
                icon: "📈",
              },
              {
                title: "Complete Visibility",
                desc: "Audit trails, analytics, and operational dashboards give you full insight into how your group operates at every level.",
                icon: "👁️",
              },
              {
                title: "Multi-Group Ready",
                desc: "Manage multiple Roblox groups from a single platform with shared standards and unified reporting.",
                icon: "🏗️",
              },
              {
                title: "Security First",
                desc: "Enterprise-grade security practices protect your data, your staff records, and your operational integrity.",
                icon: "🔒",
              },
            ].map((item, i) => (
              <AnimatedReveal key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-border bg-surface/50 hover:bg-surface hover:border-border transition-all duration-300">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Workflow Story */}
      <section className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="How It Works"
            title="From application to advancement"
            subtitle="See how Superior creates a seamless operational pipeline for your Roblox group."
          />

          <div className="mt-16 space-y-6">
            {[
              {
                step: "01",
                title: "Configure Your Workspace",
                desc: "Set up your group workspace, define roles, and customize your operational standards. Superior adapts to your structure.",
              },
              {
                step: "02",
                title: "Deploy AI Applications",
                desc: "Create intelligent application forms with AI-generated questions. Candidates receive a professional, consistent experience.",
              },
              {
                step: "03",
                title: "Automated Evaluation",
                desc: "AI grades responses against your criteria. Your team reviews pre-screened candidates instead of raw applications.",
              },
              {
                step: "04",
                title: "Structured Interviews & Training",
                desc: "Qualified candidates move through standardized interviews and training programs, building competency and confidence.",
              },
              {
                step: "05",
                title: "Managed Progression",
                desc: "Rank advancement follows clear, consistent pathways. Your organization scales with integrity and transparency.",
              },
            ].map((item, i) => (
              <AnimatedReveal key={i} delay={i * 0.1}>
                <div className="flex gap-6 md:gap-8 p-6 md:p-8 rounded-xl border border-border bg-surface/50 hover:border-lake-700/30 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-lake-700 flex-shrink-0 w-12">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Reliability */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedReveal direction="left">
              <div className="aspect-square max-w-md rounded-2xl bg-gradient-to-br from-lake-900/40 to-surface border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🔒</div>
                  <p className="text-text-muted text-sm">Security Architecture</p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="right" delay={0.1}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pine-600/10 text-pine-300 border border-pine-600/30 mb-4">
                Security & Trust
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight leading-tight mb-6">
                Your operations, protected
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Superior is built with security as a foundation, not an afterthought.
                Every interaction, every record, and every workflow is protected by
                modern security practices.
              </p>
              <ul className="space-y-3">
                {[
                  "End-to-end data encryption",
                  "Complete audit trail logging",
                  "Role-based access controls",
                  "Regular security assessments",
                  "Data isolation per workspace",
                  "99.9% uptime commitment",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-secondary text-sm">
                    <span className="text-pine-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Testimonials"
            title="Trusted by serious groups"
            subtitle="Hear from the teams that rely on Superior for their daily operations."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedReveal>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-lake-300 border border-lake-700 mb-6">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
              Plans for every stage of growth
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
              Start free. Scale when you&apos;re ready. Superior grows with your
              group from day one to enterprise operations.
            </p>
            <Button href={LINKS.pricing} size="lg">
              View Pricing
            </Button>
          </AnimatedReveal>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
