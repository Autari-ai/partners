"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { FAQ_ITEMS } from "@/lib/constants";

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-bark/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 text-base font-bold sm:text-lg">{question}</span>
        <span
          className={`flex-shrink-0 text-xl text-ember transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-bark/60">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            Common questions.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-12">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
