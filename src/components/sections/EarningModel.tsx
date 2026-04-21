"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { EARNING_CARDS } from "@/lib/constants";

export default function EarningModel() {
  return (
    <section id="earnings" className="bg-bark py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel className="text-terracotta">
            EARNING MODEL
          </SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-cream sm:text-4xl">
            You keep the majority. We mean it.
          </h2>
          <p className="mt-4 max-w-xl text-base text-cream/60">
            One workflow built once generates revenue from multiple channels
            simultaneously. Here is how the money flows.
          </p>
        </AnimatedSection>

        {/* Revenue split visual */}
        <AnimatedSection delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-cream/10 bg-cream/5 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-cream/40">
              Revenue split per client subscription
            </p>
            <div className="mt-4 flex h-12 overflow-hidden rounded-lg">
              <div className="flex items-center justify-center bg-ember text-sm font-bold text-cream" style={{ width: "70%" }}>
                You
              </div>
              <div className="flex items-center justify-center bg-terracotta text-sm font-bold text-bark" style={{ width: "30%" }}>
                autari
              </div>
            </div>
            <p className="mt-3 text-xs text-cream/40">
              You keep the majority. Exact split agreed per partnership.
            </p>
          </div>
        </AnimatedSection>

        {/* Three earning cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {EARNING_CARDS.map((card, i) => (
            <AnimatedSection key={card.title} delay={0.15 + i * 0.1}>
              <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6">
                <h3 className="text-lg font-bold text-cream">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {card.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
