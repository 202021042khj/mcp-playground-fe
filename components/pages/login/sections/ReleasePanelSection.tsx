import Image from "next/image";

import { RELEASE_CARD } from "@/constants/login";

export default function ReleasePanelSection() {
  const { badgeLabel, highlights, linkLabel } = RELEASE_CARD;

  return (
    <aside className="flex flex-1 flex-col justify-center border-t border-line bg-surface-subtle px-6 py-16 md:border-t-0 md:border-l lg:px-[120px]">
      <div className="flex max-w-[480px] flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-sm leading-5 font-semibold tracking-[0.08em] text-brand">
            WHAT&apos;S NEW
          </p>
          <h2 className="text-3xl leading-tight font-bold tracking-[-0.01em] text-ink md:text-[40px] md:leading-[48px]">
            Build workflows by just describing them
          </h2>
          <p className="text-lg leading-[30px] text-ink-secondary md:text-xl">
            The new AI builder turns a plain-language prompt into a ready-to-run
            workflow.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-white p-8">
          <div className="flex items-center gap-2 rounded-full bg-brand-subtle px-3 py-1 text-sm leading-5 text-brand">
            <span className="font-bold">New</span>
            <span className="font-medium">{badgeLabel}</span>
          </div>
          <ul className="flex w-full flex-col gap-3">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-3">
                <Image
                  src="/images/landing/icon-check.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <span className="text-base leading-6 text-ink">{highlight}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="text-sm leading-5 font-semibold text-brand">
            {linkLabel}
          </a>
        </div>
      </div>
    </aside>
  );
}
