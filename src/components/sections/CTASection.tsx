import AnimatedReveal from "@/components/ui/AnimatedReveal";
import Button from "@/components/ui/Button";
import { LINKS } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Ready to elevate your operations?",
  subtitle = "Start building calmer, more structured Roblox group management today.",
  primaryLabel = "Get Started Free",
  primaryHref = LINKS.signup,
  secondaryLabel = "Contact Sales",
  secondaryHref = LINKS.contact,
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-lake-900/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-lake-800)_0%,_transparent_70%)] opacity-20" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
            {title}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={primaryHref} size="lg" external={primaryHref.startsWith("http")}>
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="outline" size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
