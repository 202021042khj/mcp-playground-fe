import type { SignUpField, Testimonial } from "@/types/signup";

export const SIGN_UP_FIELDS: SignUpField[] = [
  {
    name: "name",
    label: "Full name",
    placeholder: "Jamie Kim",
    type: "text",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Work email",
    placeholder: "you@company.com",
    type: "email",
    autoComplete: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "At least 8 characters",
    type: "password",
    autoComplete: "new-password",
  },
];

export const SIGN_UP_BENEFITS = [
  "Unlimited workflows during your trial",
  "200+ integrations, ready in minutes",
  "SOC 2 Type II security from day one",
];

export const SIGN_UP_TESTIMONIAL: Testimonial = {
  quote:
    "“We replaced a dozen brittle scripts with Flowly in a week. Our ops team got back ten hours every sprint.”",
  initials: "JK",
  name: "Jamie Kim",
  role: "Head of Operations, Northwind",
};
