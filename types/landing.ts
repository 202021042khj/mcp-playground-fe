export interface Feature {
  icon: "zap" | "shield" | "chart";
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  priceUnit: string;
  cta: string;
  featured?: boolean;
  features: string[];
}

export interface FooterColumn {
  title: string;
  links: string[];
}

export interface Stat {
  label: string;
  value: string;
}
