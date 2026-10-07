import Image from "next/image";

import Button from "@/components/ui/button";
import {
  PREVIEW_BAR_HEIGHTS,
  PREVIEW_SIDEBAR_WIDTHS,
  PREVIEW_STATS,
} from "@/constants/landing";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-16 bg-surface-subtle px-6 py-16 md:py-24 lg:px-[120px]">
      <div className="flex max-w-[880px] flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2 rounded-full bg-brand-subtle px-3 py-1 text-sm leading-5 text-brand">
          <span className="font-bold">New</span>
          <span className="font-medium">AI-powered workflows are here →</span>
        </div>
        <h1 className="text-4xl leading-tight font-bold tracking-[-0.02em] text-ink md:text-[64px] md:leading-[72px]">
          Ship work faster with workflows that run themselves
        </h1>
        <p className="max-w-[680px] text-lg leading-[30px] text-ink-secondary md:text-xl">
          Flowly connects your tools, automates repetitive work, and gives your
          team real-time visibility — all without writing code.
        </p>
        <div className="flex flex-wrap items-start justify-center gap-3">
          <Button className="h-12 rounded-lg bg-brand px-6 text-base leading-6 font-semibold hover:bg-brand/90">
            Start free trial
          </Button>
          <Button
            variant="outlined"
            color="black"
            className="h-[50px] rounded-lg border-line px-6 text-base leading-6 font-semibold text-ink hover:bg-surface-subtle"
          >
            Book a demo
          </Button>
        </div>
        <p className="text-sm leading-5 text-ink-secondary">
          No credit card required · 14-day free trial
        </p>
      </div>

      <div className="flex h-[520px] w-full max-w-[1200px] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-preview">
        <div className="flex h-11 shrink-0 items-center gap-2 border-b border-line bg-surface-subtle px-4">
          {[0, 1, 2].map((i) => (
            <Image
              key={i}
              src="/images/landing/window-dot.svg"
              alt=""
              width={10}
              height={10}
            />
          ))}
        </div>
        <div className="flex min-h-0 flex-1">
          <aside className="hidden w-[220px] shrink-0 flex-col gap-4 border-r border-line bg-surface-subtle p-6 md:flex">
            {PREVIEW_SIDEBAR_WIDTHS.map((width, i) => (
              <div
                key={i}
                style={{ width }}
                className={cn(
                  "h-[10px] rounded-full",
                  i === 0 ? "bg-brand" : "bg-line",
                )}
              />
            ))}
          </aside>
          <div className="flex min-w-0 flex-1 flex-col gap-6 overflow-hidden p-4 md:p-8">
            <p className="text-[22px] leading-[30px] font-semibold text-ink">
              Overview
            </p>
            <div className="flex gap-4">
              {PREVIEW_STATS.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex min-w-0 flex-1 flex-col gap-1 rounded-xl border border-line bg-white px-6 py-4 whitespace-nowrap"
                >
                  <span className="text-sm leading-5 text-ink-secondary">
                    {label}
                  </span>
                  <span className="text-[22px] leading-[30px] font-bold text-ink">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex min-h-0 flex-1 items-end gap-3 rounded-xl bg-brand-subtle p-6">
              {PREVIEW_BAR_HEIGHTS.map((height, i) => (
                <div
                  key={i}
                  style={{ height }}
                  className="min-w-0 flex-1 rounded-lg bg-brand"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
