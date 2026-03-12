"use client";

import { useState } from "react";
import FadeUp from "@/components/animations/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { faqItems } from "@/data/faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Questions Fréquentes"
          subtitle="Retrouvez les reponses aux questions les plus posees sur nos services de couverture."
        />
        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="border border-neutral-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-neutral-50 transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-neutral-900 text-sm sm:text-base">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 text-neutral-400 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
