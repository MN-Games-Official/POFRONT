export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  group: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Superior transformed how we handle applications. What used to take hours of manual review now happens automatically with consistent quality.",
    author: "Alex R.",
    role: "Group Owner",
    group: "Horizon RP",
  },
  {
    quote:
      "The AI interviewers gave us the ability to scale our hiring without sacrificing evaluation quality. Our team can focus on what matters.",
    author: "Jordan M.",
    role: "HR Director",
    group: "Nexus Gaming",
  },
  {
    quote:
      "We manage three groups through Superior. The consistency and visibility across all of them is something we couldn't achieve before.",
    author: "Sam K.",
    role: "Operations Lead",
    group: "Atlas Group Network",
  },
];
