import AnimatedReveal from "@/components/ui/AnimatedReveal";

interface MetricCardProps {
  value: string;
  label: string;
  index: number;
}

export default function MetricCard({ value, label, index }: MetricCardProps) {
  return (
    <AnimatedReveal delay={index * 0.1}>
      <div className="text-center p-6">
        <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
          {value}
        </div>
        <div className="text-sm text-text-muted">{label}</div>
      </div>
    </AnimatedReveal>
  );
}
