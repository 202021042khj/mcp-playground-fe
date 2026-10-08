import Link from "next/link";

import GoogleButton from "@/components/common/auth/GoogleButton";
import OrDivider from "@/components/common/auth/OrDivider";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { LOG_IN_FIELDS } from "@/constants/login";
import type { UseLogInLogicResult } from "@/hooks/useLogInLogic";

export default function LogInFormSection({
  values,
  handleChange,
  handleSubmit,
}: UseLogInLogicResult) {
  return (
    <section className="flex flex-1 items-center justify-center px-6 py-16 lg:px-[120px]">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[440px] flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl leading-tight font-bold tracking-[-0.01em] text-ink md:text-[40px] md:leading-[48px]">
            Welcome back
          </h1>
          <p className="text-base leading-6 text-ink-secondary">
            Log in to your Flowly workspace.
          </p>
        </div>
        <GoogleButton />
        <OrDivider />
        <div className="flex flex-col gap-4">
          {LOG_IN_FIELDS.map(({ name, label, placeholder, type, autoComplete }) => (
            <Input
              key={name}
              name={name}
              label={label}
              placeholder={placeholder}
              type={type}
              autoComplete={autoComplete}
              value={values[name]}
              onChange={handleChange}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <a href="#" className="text-sm leading-5 font-medium text-brand">
            Forgot password?
          </a>
        </div>
        <Button
          type="submit"
          className="h-12 w-full rounded-lg bg-brand px-6 text-base leading-6 font-semibold hover:bg-brand/90"
        >
          Log in
        </Button>
        <p className="flex justify-center gap-1 text-sm leading-5 text-ink-secondary">
          Don&apos;t have an account?
          <Link href="/signup" className="font-semibold text-brand">
            Start free trial
          </Link>
        </p>
      </form>
    </section>
  );
}
