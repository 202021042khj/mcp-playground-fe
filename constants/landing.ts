import type {
  Feature,
  FooterColumn,
  PricingPlan,
  Stat,
} from "@/types/landing";

export const NAV_LINKS: { label: string; section?: string }[] = [
  { label: "Features", section: "features" },
  { label: "Pricing", section: "pricing" },
  { label: "Customers" },
  { label: "Docs" },
];

export const PREVIEW_STATS: Stat[] = [
  { label: "Workflows run", value: "128,430" },
  { label: "Hours saved", value: "3,912" },
  { label: "Success rate", value: "99.4%" },
];

export const PREVIEW_SIDEBAR_WIDTHS = [120, 150, 110, 140, 96];

export const PREVIEW_BAR_HEIGHTS = [
  40, 64, 52, 88, 72, 110, 96, 130, 118, 150, 140, 176,
];

export const FEATURES: Feature[] = [
  {
    icon: "zap",
    title: "Automate the busywork",
    description:
      "Build no-code workflows that trigger on any event and run across 200+ tools you already use.",
  },
  {
    icon: "shield",
    title: "Enterprise-grade security",
    description:
      "SOC 2 Type II, SSO, and granular permissions keep your data locked down by default.",
  },
  {
    icon: "chart",
    title: "Insights in real time",
    description:
      "Track every workflow with live dashboards and get alerted before issues become outages.",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    description: "For individuals getting started with automation.",
    price: "$0",
    priceUnit: "/month",
    cta: "Start for free",
    features: [
      "Up to 3 workflows",
      "1,000 runs / month",
      "Basic integrations",
      "Community support",
    ],
  },
  {
    name: "Pro",
    description: "For growing teams that need more power.",
    price: "$29",
    priceUnit: "/user/month",
    cta: "Start free trial",
    featured: true,
    features: [
      "Unlimited workflows",
      "50,000 runs / month",
      "Advanced analytics",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced needs.",
    price: "Custom",
    priceUnit: "billed annually",
    cta: "Contact sales",
    features: [
      "Unlimited runs",
      "SSO & SCIM provisioning",
      "Dedicated success manager",
      "99.99% uptime SLA",
    ],
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Blog"],
  },
  {
    title: "Resources",
    links: ["Docs", "Help center", "API status", "Contact"],
  },
];

export const FOOTER_LEGAL_LINKS = ["Privacy", "Terms", "Security"];
