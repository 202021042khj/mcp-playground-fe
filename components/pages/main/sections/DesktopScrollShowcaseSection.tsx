"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const STEPS = [
  {
    icon: "/file.svg",
    title: "Scroll-linked progress",
    description:
      "Scroll position inside this section maps directly to an animation value — no manual timers, no IntersectionObserver polling.",
  },
  {
    icon: "/globe.svg",
    title: "Pinned viewport",
    description:
      "The panel is pinned in place with position: sticky while the tall wrapper underneath keeps scrolling past it.",
  },
  {
    icon: "/window.svg",
    title: "Crossfaded content",
    description:
      "Each step crossfades in and out based on how far you've scrolled through the pinned range — scrub up or down and it follows exactly.",
  },
] as const;

function getSegmentRange(index: number, total: number): [number, number, number, number] {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  const raw = [start - segment * 0.3, start, end - segment * 0.3, end];

  // Keyframe offsets must stay within [0, 1] and strictly increase, or the
  // browser's Web Animations API throws — clamp the edges, then nudge apart
  // any values that collide as a result (only ever the first/last step).
  const clamped = raw.map((value) => Math.min(1, Math.max(0, value)));
  for (let i = 1; i < clamped.length; i++) {
    if (clamped[i] <= clamped[i - 1]) {
      clamped[i] = Math.min(1, clamped[i - 1] + 0.0001);
    }
  }

  return clamped as [number, number, number, number];
}

export default function DesktopScrollShowcaseSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={wrapperRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        {STEPS.map((step, index) => (
          <ShowcaseStep
            key={step.title}
            index={index}
            total={STEPS.length}
            progress={scrollYProgress}
            {...step}
          />
        ))}
        <ShowcaseDots total={STEPS.length} progress={scrollYProgress} />
      </div>
    </div>
  );
}

interface ShowcaseStepProps {
  icon: string;
  title: string;
  description: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function ShowcaseStep({
  icon,
  title,
  description,
  index,
  total,
  progress,
}: ShowcaseStepProps) {
  const range = getSegmentRange(index, total);
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const scale = useTransform(progress, range, [0.92, 1, 1, 0.92]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute flex flex-col items-center gap-4 px-8 text-center"
    >
      <Image src={icon} alt="" width={64} height={64} className="dark:invert" />
      <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
      <p className="max-w-md text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}

interface ShowcaseDotsProps {
  total: number;
  progress: MotionValue<number>;
}

function ShowcaseDots({ total, progress }: ShowcaseDotsProps) {
  return (
    <div className="absolute bottom-10 flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <ShowcaseDot key={index} index={index} total={total} progress={progress} />
      ))}
    </div>
  );
}

function ShowcaseDot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const range = getSegmentRange(index, total);
  const opacity = useTransform(progress, range, [0.3, 1, 1, 0.3]);

  return <motion.span style={{ opacity }} className="h-2 w-2 rounded-full bg-foreground" />;
}
