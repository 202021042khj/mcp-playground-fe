import type { LogInField, ReleaseCard } from "@/types/login";

export const LOG_IN_FIELDS: LogInField[] = [
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
    placeholder: "Enter your password",
    type: "password",
    autoComplete: "current-password",
  },
];

export const RELEASE_CARD: ReleaseCard = {
  badgeLabel: "October release",
  highlights: [
    "AI workflow builder (beta)",
    "Run history with step-level replay",
    "40 new integrations, including Linear and Notion",
  ],
  linkLabel: "Read the changelog →",
};
