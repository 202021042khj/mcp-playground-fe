"use client";

import { motion } from "motion/react";

import FeatureCard from "@/components/common/FeatureCard";
import SectionHeader from "@/components/common/SectionHeader";
import { FEATURES } from "@/constants/landing";

export default function MobileFeaturesSection() {
  return (
    <section className="flex flex-col items-center gap-16 bg-white px-6 py-16">
      <SectionHeader
        eyebrow="FEATURES"
        title="Everything your team needs to move faster"
        description="Replace scattered scripts and manual handoffs with one platform built to scale with you."
      />
      <div className="flex w-full flex-col gap-6">
        {FEATURES.map((feature) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
