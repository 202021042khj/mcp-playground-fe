export interface LogInField {
  name: "email" | "password";
  label: string;
  placeholder: string;
  type: "email" | "password";
  autoComplete: string;
}

export interface ReleaseCard {
  badgeLabel: string;
  highlights: string[];
  linkLabel: string;
}
