"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import type { LogInField } from "@/types/login";

export interface UseLogInLogicResult {
  values: Record<LogInField["name"], string>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function useLogInLogic(): UseLogInLogicResult {
  const [values, setValues] = useState<UseLogInLogicResult["values"]>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // No backend yet: log-in submission is intentionally a no-op.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return { values, handleChange, handleSubmit };
}
