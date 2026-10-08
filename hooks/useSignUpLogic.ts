"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import type { SignUpField } from "@/types/signup";

export interface UseSignUpLogicResult {
  values: Record<SignUpField["name"], string>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function useSignUpLogic(): UseSignUpLogicResult {
  const [values, setValues] = useState<UseSignUpLogicResult["values"]>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // No backend yet: sign-up submission is intentionally a no-op.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return { values, handleChange, handleSubmit };
}
