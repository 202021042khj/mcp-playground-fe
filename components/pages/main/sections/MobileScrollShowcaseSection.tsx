"use client";

import Image from "next/image";
import { motion } from "motion/react";

const STEPS = [
  {
    icon: "/file.svg",
    title: "Scroll-linked progress",
    description:
      "On desktop this same content is pinned and scrubbed by scroll position — see it at a wider screen width.",
  },
  {
    icon: "/globe.svg",
    title: "Pinned viewport",
    description:
      "Pinning a tall scroll-jacked section works against mobile browsers' dynamic viewport height and momentum scroll, so it's skipped here.",
  },
  {
    icon: "/window.svg",
    title: "Reveal on scroll",
    description:
      "Instead, each step just fades and slides up once as it enters the viewport — a much more mobile-friendly pattern.",
  },
] as const;

export default function MobileScrollShowcaseSection() {
  return (
    <div className="flex flex-col gap-16 px-6 py-16">
      {STEPS.map((step) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <Image src={step.icon} alt="" width={48} height={48} className="dark:invert" />
          <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
          <p className="max-w-xs text-sm text-muted-foreground">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
