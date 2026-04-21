"use client";

import {
  Package,
  Wrench,
  TrendingUp,
  PiggyBank,
  Coins,
  Headset,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import { BENEFITS } from "@/lib/constants";

const BENEFIT_ICONS: ComponentType<LucideProps>[] = [
  Package,
  Wrench,
  TrendingUp,
  PiggyBank,
  Coins,
  Headset,
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel>WHAT YOU GET</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            Everything you need. Nothing you don't.
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => {
            const Icon = BENEFIT_ICONS[i];
            return (
              <AnimatedSection key={benefit.title} delay={i * 0.08}>
                <Card className="h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ember/10">
                    <Icon className="h-5 w-5 text-ember" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark/60">
                    {benefit.description}
                  </p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
