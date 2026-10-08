export interface SignUpField {
  name: "name" | "email" | "password";
  label: string;
  placeholder: string;
  type: "text" | "email" | "password";
  autoComplete: string;
}

export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
}
