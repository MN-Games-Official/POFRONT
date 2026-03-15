export const SITE_NAME = "Superior";
export const SITE_TAGLINE = "The calm of efficient, secure Roblox management.";
export const SITE_DESCRIPTION =
  "Superior is the premium AI-powered operations platform for serious Roblox groups. Applications, interviews, rank systems, and training — all in one platform.";

export const LINKS = {
  dashboard: process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.superior.gg",
  signup: process.env.NEXT_PUBLIC_SIGNUP_URL || "https://app.superior.gg/signup",
  login: process.env.NEXT_PUBLIC_LOGIN_URL || "https://app.superior.gg/login",
  contact: "/enterprise#contact",
  demo: "/enterprise#contact",
  pricing: "/pricing",
  features: "/features",
  about: "/about",
  enterprise: "/enterprise",
  home: "/",
};

export const NAV_ITEMS = [
  { label: "Features", href: "/features" },
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/enterprise" },
];

export const FOOTER_LINKS = {
  product: [
    { label: "AI Applications", href: "/features#applications" },
    { label: "AI Rank Centers", href: "/features#rank-centers" },
    { label: "AI Interviewers", href: "/features#interviewers" },
    { label: "AI Training Centers", href: "/features#training" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Contact Sales", href: "/enterprise#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
