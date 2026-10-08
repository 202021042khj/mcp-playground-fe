import Link from "next/link";

import { cn } from "@/lib/utils";

interface Props {
  inverse?: boolean;
  href?: string;
}

export default function LogoMark({ inverse, href }: Props) {
  const logo = (
    <>
      <div className="flex size-8 items-center justify-center rounded-lg bg-brand text-base font-bold text-white">
        F
      </div>
      <span
        className={cn(
          "text-[22px] leading-[30px] font-bold",
          inverse ? "text-white" : "text-ink",
        )}
      >
        Flowly
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center gap-2">
        {logo}
      </Link>
    );
  }

  return <div className="flex items-center gap-2">{logo}</div>;
}
