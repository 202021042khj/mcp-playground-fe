"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

import { buttonVariants, type ButtonColor, type ButtonVariant } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<typeof Link> {
  variant?: ButtonVariant;
  color?: ButtonColor;
}

// Link styled as a Button. Not built on `<Button asChild>`: Slot clones the
// element it receives, which breaks (renders nothing) when that element comes
// from a server component and the page is re-rendered by client navigation.
export default function LinkButton({
  variant,
  color,
  className,
  ...props
}: Props) {
  return (
    <Link
      className={cn(buttonVariants({ variant, color }), className)}
      {...props}
    />
  );
}
