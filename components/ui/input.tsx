import { forwardRef, useId, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface Props extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, id, className, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="flex w-full flex-col gap-2">
        <label
          htmlFor={inputId}
          className="text-sm leading-5 font-medium text-ink"
        >
          {label}
        </label>
        <div className="flex items-center rounded-lg border border-line bg-white px-4 py-3 focus-within:border-brand focus-within:shadow-[inset_0_0_0_1px_var(--color-brand)]">
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "min-w-0 flex-1 bg-transparent text-base leading-6 text-ink outline-none placeholder:text-placeholder",
              className,
            )}
            {...props}
          />
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
