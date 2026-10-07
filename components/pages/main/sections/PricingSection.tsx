import Image from "next/image";

import SectionHeader from "@/components/common/SectionHeader";
import Button from "@/components/ui/button";
import { PRICING_PLANS } from "@/constants/landing";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  return (
    <section className="flex flex-col items-center gap-16 bg-surface-subtle px-6 py-16 md:py-24 lg:px-[120px]">
      <SectionHeader
        eyebrow="PRICING"
        title="Simple pricing that scales with you"
        description="Start free and upgrade when you are ready. No hidden fees, cancel anytime."
      />
      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "flex flex-col gap-6 rounded-2xl bg-white p-8",
              plan.featured ? "border-2 border-brand" : "border border-line",
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[22px] leading-[30px] font-semibold text-ink">
                {plan.name}
              </h3>
              {plan.featured && (
                <span className="rounded-full bg-brand px-3 py-1 text-sm leading-5 font-semibold text-white">
                  Most popular
                </span>
              )}
            </div>
            <p className="text-base leading-6 text-ink-secondary">
              {plan.description}
            </p>
            <div className="flex items-baseline gap-2 whitespace-nowrap">
              <span className="text-5xl leading-[56px] font-bold tracking-[-0.02em] text-ink">
                {plan.price}
              </span>
              <span className="text-base leading-6 text-ink-secondary">
                {plan.priceUnit}
              </span>
            </div>
            {plan.featured ? (
              <Button className="h-12 w-full rounded-lg bg-brand px-6 text-base leading-6 font-semibold hover:bg-brand/90">
                {plan.cta}
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="black"
                className="h-[50px] w-full rounded-lg border-line px-6 text-base leading-6 font-semibold text-ink hover:bg-surface-subtle"
              >
                {plan.cta}
              </Button>
            )}
            <div className="h-px w-full bg-line" />
            <ul className="flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Image
                    src="/images/landing/icon-check.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <span className="text-base leading-6 text-ink">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
