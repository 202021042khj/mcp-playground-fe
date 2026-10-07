"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

import FeatureCard from "@/components/common/FeatureCard";
import SectionHeader from "@/components/common/SectionHeader";
import { FEATURES } from "@/constants/landing";
import type { Feature } from "@/types/landing";

const REVEAL_START = 0.05;
const REVEAL_STEP = 0.2;
const REVEAL_LENGTH = 0.2;

export default function DesktopFeaturesSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={wrapperRef} className="relative h-[250vh] bg-white">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-16 overflow-hidden px-6 lg:px-[120px]">
        <SectionHeader
          eyebrow="FEATURES"
          title="Everything your team needs to move faster"
          description="Replace scattered scripts and manual handoffs with one platform built to scale with you."
        />
        <div className="grid w-full max-w-[1200px] grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <RevealCard
              key={feature.title}
              index={index}
              progress={scrollYProgress}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface RevealCardProps extends Feature {
  index: number;
  progress: MotionValue<number>;
}

function RevealCard({ index, progress, ...feature }: RevealCardProps) {
  const start = REVEAL_START + index * REVEAL_STEP;
  const range = [start, start + REVEAL_LENGTH];
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [48, 0]);
  const scale = useTransform(progress, range, [0.95, 1]);

  return (
    <motion.div style={{ opacity, y, scale }}>
      <FeatureCard {...feature} />
    </motion.div>
  );
}
