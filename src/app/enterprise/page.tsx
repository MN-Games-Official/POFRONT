import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import EnterpriseContactForm from "@/components/sections/EnterpriseContactForm";
import { LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Enterprise",
  description:
    "Superior Enterprise: custom AI-powered Roblox group management for large organizations with complex operational requirements.",
};

export default function EnterprisePage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        badge="Enterprise"
        title="Built for organizations that operate at scale"
        subtitle="Custom solutions, dedicated support, and advanced capabilities for large Roblox groups and multi-group networks."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button href="#contact" size="lg">
            Contact Sales
          </Button>
          <Button href={LINKS.pricing} variant="outline" size="lg">
            View Plans
          </Button>
        </div>
      </PageHero>

      {/* Who It's For */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Who It's For"
            title="Enterprise is designed for teams that need more"
            subtitle="If your group has outgrown standard tooling, Superior Enterprise gives you the flexibility and support to operate with confidence."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Large Roblox Groups",
                desc: "Groups with hundreds or thousands of staff members needing structured, scalable management.",
              },
              {
                title: "Multi-Group Networks",
                desc: "Organizations operating multiple Roblox groups that need unified standards and centralized oversight.",
              },
              {
                title: "Complex Hiring Operations",
                desc: "Groups with sophisticated application, interview, and evaluation pipelines requiring advanced automation.",
              },
              {
                title: "Training-Heavy Organizations",
                desc: "Teams that rely on structured training and development programs to maintain staff quality.",
              },
              {
                title: "Compliance-Focused Groups",
                desc: "Organizations that need audit trails, reporting, and governance controls for operational integrity.",
              },
              {
                title: "Custom Integration Needs",
                desc: "Teams requiring API access, custom workflows, and integration with existing tools and processes.",
              },
            ].map((item, i) => (
              <AnimatedReveal key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-border bg-surface/50 hover:bg-surface hover:border-lake-700/30 transition-all duration-300 h-full">
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

      {/* Why Enterprise */}
      <section className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedReveal direction="left">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-lake-300 border border-lake-700 mb-4">
                Enterprise Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight leading-tight mb-6">
                Everything in Professional, plus the power to customize
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Enterprise gives you full access to Superior&apos;s platform with
                  additional capabilities designed for complex organizational needs.
                  Custom AI model tuning, advanced security controls, and dedicated
                  support ensure your operations run exactly the way you need.
                </p>
                <p>
                  Every Enterprise engagement begins with a thorough understanding
                  of your group&apos;s structure, goals, and challenges. We don&apos;t just
                  give you tools — we help you build the operational foundation
                  your organization deserves.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="right" delay={0.1}>
              <ul className="space-y-4">
                {[
                  "Unlimited group workspaces",
                  "Custom AI model tuning",
                  "Dedicated account manager",
                  "White-glove onboarding & implementation",
                  "Priority 24/7 support",
                  "SLA guarantee",
                  "Custom contracts & billing",
                  "Advanced security controls",
                  "SSO integration",
                  "Custom feature development",
                  "Advanced API access",
                  "Quarterly business reviews",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-secondary">
                    <span className="text-pine-400 flex-shrink-0">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Security & Reliability */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Security & Reliability"
            title="Enterprise-grade protection for your operations"
            subtitle="Security isn't an add-on — it's the foundation everything is built on."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Data Encryption", desc: "End-to-end encryption for all data in transit and at rest." },
              { title: "Access Controls", desc: "Fine-grained role-based permissions with complete audit trails." },
              { title: "Data Isolation", desc: "Complete workspace isolation ensures your data stays separate." },
              { title: "99.9% Uptime SLA", desc: "Guaranteed uptime backed by service level agreements." },
            ].map((item, i) => (
              <AnimatedReveal key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-border bg-surface/50 text-center">
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

      {/* White-Glove Onboarding */}
      <section className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <div className="text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-lake-300 border border-lake-700 mb-6">
                Implementation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-6">
                White-glove onboarding that sets you up for success
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
                Every Enterprise engagement includes a dedicated onboarding experience.
                Our team works alongside yours to configure workspaces, set up
                workflows, train staff, and ensure a smooth transition.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-12 text-left">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    desc: "We learn your group's structure, processes, and goals to build the right configuration.",
                  },
                  {
                    step: "02",
                    title: "Implementation",
                    desc: "Our team configures your workspace, sets up AI models, and builds your operational workflows.",
                  },
                  {
                    step: "03",
                    title: "Launch & Support",
                    desc: "We go live together, train your team, and provide ongoing dedicated support.",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-xl border border-border bg-surface/50">
                    <div className="text-2xl font-bold text-lake-700 mb-3">{item.step}</div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Contact Form */}
      <EnterpriseContactForm />

      {/* CTA */}
      <CTASection
        title="Ready to elevate your operations?"
        subtitle="Join the organizations building better Roblox communities with Superior Enterprise."
        primaryLabel="Contact Sales"
        primaryHref="#contact"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
