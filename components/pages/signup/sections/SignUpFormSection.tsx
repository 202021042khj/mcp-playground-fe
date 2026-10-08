import GoogleButton from "@/components/common/auth/GoogleButton";
import OrDivider from "@/components/common/auth/OrDivider";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { SIGN_UP_FIELDS } from "@/constants/signup";
import type { UseSignUpLogicResult } from "@/hooks/useSignUpLogic";

export default function SignUpFormSection({
  values,
  handleChange,
  handleSubmit,
}: UseSignUpLogicResult) {
  return (
    <section className="flex flex-1 items-center justify-center px-6 py-16 lg:px-[120px]">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[440px] flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl leading-tight font-bold tracking-[-0.01em] text-ink md:text-[40px] md:leading-[48px]">
            Start your free trial
          </h1>
          <p className="text-base leading-6 text-ink-secondary">
            14 days free. No credit card required.
          </p>
        </div>
        <GoogleButton />
        <OrDivider />
        <div className="flex flex-col gap-4">
          {SIGN_UP_FIELDS.map(({ name, label, placeholder, type, autoComplete }) => (
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
        <Button
          type="submit"
          className="h-12 w-full rounded-lg bg-brand px-6 text-base leading-6 font-semibold hover:bg-brand/90"
        >
          Create account
        </Button>
        <p className="text-sm leading-5 text-ink-secondary">
          By creating an account, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </form>
    </section>
  );
}
