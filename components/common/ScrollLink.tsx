"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";

interface Props extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  section: string;
}

// Desktop and mobile pages are both mounted, so a section can exist twice;
// scroll to the copy that is actually visible.
export default function ScrollLink({ section, onClick, ...props }: Props) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    const target = Array.from(
      document.querySelectorAll<HTMLElement>(`[data-section="${section}"]`),
    ).find((element) => element.offsetParent !== null);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <a href={`#${section}`} onClick={handleClick} {...props} />;
}
