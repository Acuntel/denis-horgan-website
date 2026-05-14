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
    <section className="bg-navy text-white relative overflow-hidden">
      <div className="container-x py-20 lg:py-28 grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
            What clients say
          </div>
          <h2 className="mt-3 text-[36px] lg:text-[44px] font-semibold tracking-tightish leading-[1.05] text-balance">
            4.9 stars across{" "}
            <span className="italic-emph text-teal-400">185 reviews.</span>
          </h2>
          <p className="mt-5 text-white/75 leading-relaxed">
            Every review on this site is verified through Redfin's platform. No
            edits, no cherry-picking — read them in Denis's words and his
            clients'.
          </p>
          <a
            href="https://www.redfin.com/real-estate-agents/denis-horgan/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-400 hover:text-white"
          >
            See all reviews on Redfin →
          </a>
        </div>

        <div className="relative">
          <Quote
            className="absolute -top-4 -left-2 text-teal-400/30"
            size={64}
          />
          <AnimatePresence mode="wait">
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <blockquote className="text-lg lg:text-xl leading-relaxed text-white/95">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-white/70">
                <span className="font-semibold text-white">{t.role}</span> ·{" "}
                {t.city} · {t.date}
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={() => setIdx((idx - 1 + n) % n)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10 transition"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setIdx((idx + 1) % n)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10 transition"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
            <div className="text-xs text-white/60 ml-2">
              {idx + 1} / {n}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
