import AnimatedReveal from "@/components/ui/AnimatedReveal";

interface FeatureSplitSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  reversed?: boolean;
  icon: string;
  index: number;
  id?: string;
}

export default function FeatureSplitSection({
  title,
  subtitle,
  description,
  features,
  reversed = false,
  icon,
  index,
  id,
}: FeatureSplitSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center`}
        >
          {/* Content */}
          <AnimatedReveal
            direction={reversed ? "right" : "left"}
            delay={index * 0.05}
            className={reversed ? "md:order-2" : ""}
          >
            <span className="text-4xl mb-4 block">{icon}</span>
            <p className="text-sm text-lake-400 font-medium mb-2">{subtitle}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 tracking-tight">
              {title}
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">{description}</p>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <span className="text-pine-400 mt-0.5 flex-shrink-0 text-sm">✓</span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </AnimatedReveal>

          {/* Visual Placeholder */}
          <AnimatedReveal
            direction={reversed ? "left" : "right"}
            delay={index * 0.05 + 0.1}
            className={reversed ? "md:order-1" : ""}
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-surface-raised to-surface border border-border flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">{icon}</div>
                <p className="text-text-muted text-sm">Product Preview</p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
