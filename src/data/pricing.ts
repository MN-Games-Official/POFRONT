export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaHref: string;
  badge?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For small groups getting started with structured management.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "1 group workspace",
      "Basic AI applications",
      "Up to 50 applicants/month",
      "Standard rank management",
      "Community support",
      "Basic analytics",
    ],
    cta: "Start Free",
    ctaHref: "/signup",
  },
  {
    name: "Growth",
    description: "For active groups scaling their operations with AI tools.",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      "Up to 3 group workspaces",
      "AI applications with grading",
      "Up to 500 applicants/month",
      "AI rank centers",
      "AI interviewers",
      "Priority support",
      "Advanced analytics",
      "Custom branding",
    ],
    cta: "Get Started",
    ctaHref: "/signup",
    badge: "Popular",
    highlighted: true,
  },
  {
    name: "Professional",
    description: "For established groups needing advanced automation and control.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Up to 10 group workspaces",
      "Full AI suite access",
      "Unlimited applicants",
      "AI training centers",
      "Advanced workflow automation",
      "Audit logging",
      "API access",
      "Priority email support",
      "Multi-admin controls",
      "Custom integrations",
    ],
    cta: "Get Started",
    ctaHref: "/signup",
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex operational requirements.",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited group workspaces",
      "Full platform access",
      "Dedicated account manager",
      "Custom AI model tuning",
      "White-glove onboarding",
      "SLA guarantee",
      "Custom contracts",
      "Advanced security controls",
      "SSO integration",
      "Priority 24/7 support",
      "Custom feature development",
    ],
    cta: "Contact Sales",
    ctaHref: "/enterprise#contact",
  },
];

export const pricingFAQ = [
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we prorate any differences.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "Every paid plan comes with a 14-day free trial. No credit card required to start. You can explore the full feature set before committing.",
  },
  {
    question: "What counts as a group workspace?",
    answer:
      "A group workspace is a single Roblox group connected to Superior. Each workspace has its own applications, rank systems, interviewers, and training pipelines.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes. Annual billing saves you approximately 20% compared to monthly pricing. All plans support both monthly and annual billing options.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer:
      "We'll notify you as you approach your limits and help you find the right plan. We never cut off your service unexpectedly.",
  },
  {
    question: "Can I manage multiple Roblox groups from one account?",
    answer:
      "Absolutely. Growth plans and above support multiple group workspaces, allowing you to manage all your groups from a single dashboard.",
  },
];
