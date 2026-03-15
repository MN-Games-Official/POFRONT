export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

export const products: Product[] = [
  {
    id: "applications",
    title: "AI Applications",
    subtitle: "Structured intake, intelligent evaluation",
    description:
      "Create sophisticated application workflows with AI-generated questions tailored to your group's needs. Our grading engine evaluates responses consistently, reducing manual review time and delivering cleaner candidate pipelines at any scale.",
    features: [
      "AI-generated application questions",
      "Automated response grading",
      "Configurable evaluation criteria",
      "Faster review workflows",
      "Consistent candidate evaluation",
      "Reduced manual screening time",
    ],
    icon: "📋",
  },
  {
    id: "rank-centers",
    title: "AI Rank Centers",
    subtitle: "Streamlined progression, consistent standards",
    description:
      "Build transparent promotion pathways with structured ranking logic and evaluation criteria. Eliminate bottlenecks in advancement workflows while maintaining consistent standards across your entire organization.",
    features: [
      "Structured promotion workflows",
      "Consistent advancement standards",
      "Scalable rank management",
      "Transparent progression paths",
      "Reduced promotion bottlenecks",
      "Multi-tier evaluation support",
    ],
    icon: "📊",
  },
  {
    id: "interviewers",
    title: "AI Interviewers",
    subtitle: "Standardized evaluation, scalable interviews",
    description:
      "Deploy intelligent interview systems that standardize candidate evaluation across your team. Configurable workflows ensure fair, consistent assessments while dramatically reducing interviewer workload.",
    features: [
      "Standardized interview processes",
      "Configurable question workflows",
      "Fair and consistent evaluations",
      "Reduced interviewer workload",
      "Scalable interview systems",
      "Detailed candidate insights",
    ],
    icon: "🎙️",
  },
  {
    id: "training",
    title: "AI Training Centers",
    subtitle: "Guided development, measurable growth",
    description:
      "Build structured training and onboarding infrastructure that scales with your organization. Track progress, ensure consistency, and develop staff readiness with guided development pathways.",
    features: [
      "Structured onboarding flows",
      "Scalable training programs",
      "Progress tracking & visibility",
      "Consistent training standards",
      "Staff readiness assessment",
      "Guided development pathways",
    ],
    icon: "🎓",
  },
];

export const platformCapabilities = [
  {
    title: "Audit & Compliance",
    description:
      "Complete audit trails for every action, decision, and workflow across your organization.",
  },
  {
    title: "Cross-Group Scalability",
    description:
      "Manage multiple Roblox groups from a unified dashboard with consistent standards.",
  },
  {
    title: "Analytics & Insights",
    description:
      "Deep operational analytics to understand performance, bottlenecks, and growth patterns.",
  },
  {
    title: "Administration Controls",
    description:
      "Fine-grained permissions, role-based access, and comprehensive admin tooling.",
  },
  {
    title: "Standardization",
    description:
      "Enforce consistent processes across your entire organization, regardless of scale.",
  },
  {
    title: "Future-Ready Platform",
    description:
      "Built for expansion. New modules and capabilities are continuously added to the platform.",
  },
];

export const featuresFAQ = [
  {
    question: "How does the AI generate application questions?",
    answer:
      "Our AI analyzes your group's structure, roles, and requirements to generate relevant, thoughtful questions that evaluate candidates effectively. You can customize, approve, or modify any generated content.",
  },
  {
    question: "Can I customize the AI behavior for my group?",
    answer:
      "Absolutely. Every AI module is configurable to match your group's tone, standards, and evaluation criteria. You maintain full control over how the AI interacts with your candidates and staff.",
  },
  {
    question: "Is Superior suitable for small groups?",
    answer:
      "Yes. Superior scales from small teams to large organizations. Our Starter plan is free and provides essential tools for groups just beginning to formalize their operations.",
  },
  {
    question: "How does Superior handle data security?",
    answer:
      "We take security seriously. All data is encrypted in transit and at rest. We maintain strict access controls, audit logging, and follow industry best practices for data protection.",
  },
  {
    question: "Can I integrate Superior with other tools?",
    answer:
      "Professional and Enterprise plans include API access for custom integrations. We're continuously expanding our integration ecosystem based on community needs.",
  },
];

export const rolesBenefits = [
  {
    role: "Group Owners",
    benefit: "Complete operational visibility and control across your entire organization.",
  },
  {
    role: "Administrators",
    benefit: "Streamlined management tools that reduce repetitive tasks and enforce consistency.",
  },
  {
    role: "HR & Recruitment",
    benefit: "AI-powered application processing and interview systems that scale effortlessly.",
  },
  {
    role: "Trainers",
    benefit: "Structured training programs with progress tracking and measurable outcomes.",
  },
  {
    role: "Managers",
    benefit: "Clear promotion pathways and evaluation criteria that ensure fair advancement.",
  },
  {
    role: "Decision Makers",
    benefit: "Analytics and insights to make informed operational decisions with confidence.",
  },
];
