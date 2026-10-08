import Image from "next/image";

import { SIGN_UP_BENEFITS, SIGN_UP_TESTIMONIAL } from "@/constants/signup";

export default function ValuePanelSection() {
  const { quote, initials, name, role } = SIGN_UP_TESTIMONIAL;

  return (
    <aside className="flex flex-1 flex-col justify-center gap-12 border-t border-line bg-surface-subtle px-6 py-16 md:border-t-0 md:border-l lg:px-[120px]">
      <div className="flex max-w-[480px] flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-sm leading-5 font-semibold tracking-[0.08em] text-brand">
            WHY TEAMS CHOOSE FLOWLY
          </p>
          <h2 className="text-3xl leading-tight font-bold tracking-[-0.01em] text-ink md:text-[40px] md:leading-[48px]">
            Join 4,000+ teams automating their busywork
          </h2>
        </div>
        <ul className="flex flex-col gap-4">
          {SIGN_UP_BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <Image
                src="/images/landing/icon-check.svg"
                alt=""
                width={20}
                height={20}
              />
              <span className="text-base leading-6 text-ink">{benefit}</span>
            </li>
          ))}
        </ul>
        <figure className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-8">
          <blockquote className="text-lg leading-[30px] text-ink md:text-xl">
            {quote}
          </blockquote>
          <figcaption className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-brand-subtle text-sm leading-5 font-semibold text-brand">
              {initials}
            </div>
            <div className="flex flex-col text-sm leading-5">
              <span className="font-semibold text-ink">{name}</span>
              <span className="text-ink-secondary">{role}</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </aside>
  );
}
