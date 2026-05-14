"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/denis-data";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const n = TESTIMONIALS.length;
  const t = TESTIMONIALS[idx];

  return (
    <section className="bg-navy-900 text-cream-50 relative overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 pointer-events-none" />
      <div className="relative container-x py-24 lg:py-32 grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-teal-400" />
            <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-teal-400">
              What clients say
            </div>
          </div>
          <h2 className="mt-5 font-serif text-[36px] lg:text-[48px] font-normal tracking-tighter2 leading-[1.05] text-balance">
            4.9 stars across{" "}
            <span className="italic-emph text-teal-400">185 reviews.</span>
          </h2>
          <p className="mt-6 text-cream-50/75 leading-relaxed font-light">
            Every review on this site is verified through Redfin's platform. No
            edits, no cherry-picking. Read them in Denis's words and his
            clients'.
          </p>
          <a
            href="https://www.redfin.com/real-estate-agents/denis-horgan/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-teal-400 hover:text-cream-50 border-b border-teal-400/40 pb-0.5"
          >
            See all reviews on Redfin →
          </a>
        </div>

        <div className="relative">
          <Quote
            className="absolute -top-6 -left-3 text-teal-400/25"
            size={80}
            strokeWidth={1}
          />
          <AnimatePresence mode="wait">
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <blockquote className="font-serif text-[22px] lg:text-[28px] leading-[1.4] text-cream-50/95 italic-emph font-normal">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 text-[11px] uppercase tracking-[0.22em] text-cream-50/60">
                <span className="text-teal-400">{t.role}</span>
                <span className="mx-2 text-cream-50/30">/</span>
                {t.city}
                <span className="mx-2 text-cream-50/30">/</span>
                {t.date}
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-3">
            <button
              onClick={() => setIdx((idx - 1 + n) % n)}
              className="grid h-11 w-11 place-items-center rounded-full border border-cream-50/20 hover:bg-cream-50/10 hover:border-teal-400 transition"
              aria-label="Previous review"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setIdx((idx + 1) % n)}
              className="grid h-11 w-11 place-items-center rounded-full border border-cream-50/20 hover:bg-cream-50/10 hover:border-teal-400 transition"
              aria-label="Next review"
            >
              <ChevronRight size={16} />
            </button>
            <div className="text-[11px] uppercase tracking-[0.22em] text-cream-50/60 ml-3">
              {String(idx + 1).padStart(2, "0")}{" "}
              <span className="text-cream-50/30">/</span>{" "}
              {String(n).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
