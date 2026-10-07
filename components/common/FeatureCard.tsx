import Image from "next/image";

import type { Feature } from "@/types/landing";

export default function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-8">
      <div className="flex size-12 items-center justify-center rounded-xl bg-brand-subtle">
        <Image
          src={`/images/landing/icon-${icon}.svg`}
          alt=""
          width={24}
          height={24}
        />
      </div>
      <h3 className="text-[22px] leading-[30px] font-semibold text-ink">
        {title}
      </h3>
      <p className="text-base leading-6 text-ink-secondary">{description}</p>
    </div>
  );
}
