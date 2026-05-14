"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Home, ArrowRight } from "lucide-react";
import { DENIS } from "@/lib/denis-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100/60 pointer-events-none" />
      <div className="relative container-x pt-16 pb-24 lg:pt-28 lg:pb-36 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 1.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-teal" />
            <div className="h-eyebrow">{DENIS.market}</div>
          </div>
          <h1 className="h-display text-balance">
            Your move,{" "}
            <span className="italic-emph text-teal-600">our mission.</span>
            <br className="hidden sm:block" />
            <span className="text-navy">
              Three hundred fifty-nine homes
            </span>{" "}
            <span className="text-navy/70 italic-emph">sold.</span>
          </h1>
          <p className="lede mt-7 max-w-xl">
            Denis Horgan is a top-producing Redfin Principal Agent serving
            Downers Grove, Naperville, Wheaton, and the entire western Chicago
            suburbs. $144M closed. 4.9 stars across 185 client reviews. The
            honest, attentive realtor your family deserves.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/listings" className="btn-navy">
              <Search size={15} /> Search Homes
            </Link>
            <Link href="/contact?intent=valuation" className="btn-ghost">
              <Home size={15} /> What Is My Home Worth?
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <div className="flex -space-x-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className="grid h-6 w-6 place-items-center rounded-full bg-teal text-[11px] font-medium text-cream-50 border-2 border-cream-50"
                >
                  ★
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="font-medium text-navy">4.9 / 5.0</div>
              <div className="text-mute text-xs">
                185 verified Redfin reviews
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 1.3 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[28px] overflow-hidden shadow-cardHover">
            <div className="absolute inset-0 border-[6px] border-cream-50 rounded-[28px] z-20 pointer-events-none" />
            <div className="absolute inset-[6px] border border-teal/40 rounded-[22px] z-20 pointer-events-none" />
            <Image
              src={DENIS.headshot}
              alt={DENIS.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent p-6 z-10">
              <div className="text-cream-50 font-serif text-xl">
                {DENIS.name}
              </div>
              <div className="text-cream-50/85 text-[10px] uppercase tracking-[0.22em] mt-1">
                Redfin Principal Agent
              </div>
            </div>
          </div>
          <div className="absolute -left-3 sm:-left-10 top-12 hidden sm:block card px-5 py-4 max-w-[210px] rotate-[-3deg] bg-cream-50">
            <div className="text-[10px] uppercase tracking-[0.18em] text-mute">
              Closed transactions
            </div>
            <div className="text-3xl font-serif text-navy mt-1">359</div>
            <div className="text-[11px] text-teal-700 font-medium tracking-wide">
              $144M total volume
            </div>
          </div>
          <div className="absolute -right-2 sm:-right-8 bottom-12 hidden sm:block card px-5 py-4 max-w-[230px] rotate-[3deg] bg-cream-50">
            <div className="text-[10px] uppercase tracking-[0.18em] text-mute">
              Home market
            </div>
            <div className="text-lg font-serif text-navy mt-0.5">
              Downers Grove
            </div>
            <div className="text-[11px] text-teal-700 font-medium tracking-wide">
              48 deals and counting
            </div>
          </div>
        </motion.div>
      </div>

      <Link
        href="#stats"
        className="relative block text-center pb-6 text-[10px] uppercase tracking-[0.28em] text-mute hover:text-navy"
      >
        <ArrowRight
          size={12}
          className="rotate-90 inline-block mr-1.5 -mt-0.5"
        />{" "}
        Continue
      </Link>
    </section>
  );
}
