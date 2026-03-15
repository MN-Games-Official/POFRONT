import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Superior's mission, philosophy, and the inspiration behind the premium Roblox group management platform.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        badge="About Superior"
        title="Built with purpose. Inspired by the shore."
        subtitle="Superior exists because Roblox group management deserves better tools — calm, intelligent, and built to last."
      />

      {/* Origin Story */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-text-primary mb-6 tracking-tight">
                Why Superior exists
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Running a Roblox group is a real operational challenge. Applications
                  pile up. Interviews lack consistency. Promotions happen
                  arbitrarily. Training exists as scattered documents and tribal
                  knowledge. The tools available are fragmented, unreliable, or
                  simply nonexistent.
                </p>
                <p>
                  Superior was born from a simple observation: the Roblox community
                  has grown beyond what ad-hoc management can support. Groups today
                  operate like real organizations, with staff hierarchies, hiring
                  pipelines, training requirements, and operational complexity that
                  demands real tooling.
                </p>
                <p>
                  We built Superior to be the platform we wished existed — one that
                  treats group operations as something worth doing well, with
                  intelligence, consistency, and calm.
                </p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* North Shore Inspiration */}
      <section className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedReveal direction="left">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-lake-900/50 to-lake-800/20 border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🌊</div>
                  <p className="text-text-muted text-sm">Lake Superior, North Shore</p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="right" delay={0.1}>
              <h2 className="text-3xl font-bold text-text-primary mb-6 tracking-tight">
                Inspired by the North Shore
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Our name and identity draw from Lake Superior and Minnesota&apos;s
                  North Shore — a place of immense natural power expressed with
                  quiet, unwavering consistency. Cold, deep waters. Fog rolling
                  over rocky cliffs. Pine forests standing steady through every
                  season.
                </p>
                <p>
                  This landscape embodies what we believe great software should
                  feel like: powerful but calm, reliable but not rigid, beautiful
                  but functional. The North Shore doesn&apos;t announce itself —
                  it simply endures.
                </p>
                <p>
                  We designed Superior to carry that same energy. Premium without
                  being flashy. Sophisticated without being complicated. A
                  platform that works with the steady confidence of deep water.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-lake-300 border border-lake-700 mb-6">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 tracking-tight">
              To make group operations feel effortless
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg mb-6">
              Every Roblox group — from small teams to large organizations —
              deserves tools that bring order without friction, intelligence
              without complexity, and scale without chaos. Our mission is to
              build the platform that makes that possible.
            </p>
            <p className="text-text-secondary leading-relaxed text-lg">
              We believe that when operations run well, people can focus on
              what actually matters: building great communities, developing
              talented staff, and creating experiences worth being part of.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-lake-300 border border-lake-700 mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
              What guides everything we build
            </h2>
          </AnimatedReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Calm Confidence",
                desc: "Great tools don't need to shout. Superior works quietly and effectively, giving you control without overwhelm.",
              },
              {
                title: "Intentional Design",
                desc: "Every feature, every interaction, every pixel exists for a reason. Nothing is arbitrary or decorative without purpose.",
              },
              {
                title: "Operational Excellence",
                desc: "We hold ourselves to the same standards we help our users achieve — consistent, reliable, and always improving.",
              },
              {
                title: "Accessible Intelligence",
                desc: "AI should make tools simpler, not more complex. We use intelligence to reduce work, not create new puzzles.",
              },
              {
                title: "Respect for Scale",
                desc: "Small groups and large organizations both deserve professional tools. We build for the spectrum, not the edges.",
              },
              {
                title: "Enduring Quality",
                desc: "Like the North Shore that inspires us, we build things meant to last — stable, resilient, and dependable over time.",
              },
            ].map((v, i) => (
              <AnimatedReveal key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-border bg-surface/50">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pine-600/10 text-pine-300 border border-pine-600/30 mb-6">
              Design Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 tracking-tight">
              Rustic in texture. Modern in execution.
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
              <p>
                Our design language bridges the natural world with modern
                software. Textures of stone and wood meet clean layouts and
                precise typography. Atmospheric depth meets functional clarity.
              </p>
              <p>
                We draw from the visual vocabulary of the North Shore — muted
                palettes, cinematic compositions, and the kind of understated
                beauty that reveals itself slowly. This isn&apos;t design for
                attention&apos;s sake. It&apos;s design that serves the experience.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedReveal>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-lake-300 border border-lake-700 mb-6">
              Looking Forward
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 tracking-tight">
              The platform grows with the community
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg max-w-2xl mx-auto">
              Superior is a living platform. As the Roblox community evolves,
              our tools evolve with it. We&apos;re continuously building new
              modules, expanding AI capabilities, and listening to the groups
              that depend on us. The future of Roblox group management is being
              built right here.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Experience the platform yourself"
        subtitle="See why serious Roblox groups choose Superior for their operations."
        primaryLabel="Get Started Free"
        secondaryLabel="Explore Features"
        secondaryHref="/features"
      />
    </>
  );
}
