"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Home, ArrowRight } from "lucide-react";
import { DENIS } from "@/lib/denis-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand to-white">
      <div className="container-x pt-14 pb-20 lg:pt-24 lg:pb-32 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="h-eyebrow mb-5">
            {DENIS.tagline} · {DENIS.market}
          </div>
          <h1 className="h-display text-balance">
            Your move,{" "}
            <span className="italic-emph text-teal">our mission.</span>
            <br className="hidden sm:block" />
            <span className="text-navy/90">359 homes sold.</span>{" "}
            <span className="text-navy">Yours next.</span>
          </h1>
          <p className="lede mt-6 max-w-xl">
            Denis Horgan is a top-producing Redfin Principal Agent serving
            Downers Grove, Naperville, Wheaton, and the entire western Chicago
            suburbs. <span className="italic-emph">$144M sold.</span> 4.9 stars
            across 185 client reviews. The honest, attentive realtor your family
            deserves.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/listings" className="btn-primary">
              <Search size={16} /> Search Homes
            </Link>
            <Link href="/contact?intent=valuation" className="btn-ghost">
              <Home size={16} /> What's My Home Worth?
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className="grid h-7 w-7 place-items-center rounded-full bg-teal text-[11px] font-bold text-white border-2 border-white"
                >
                  ★
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="font-semibold text-navy">4.9 / 5.0</div>
              <div className="text-mute text-xs">
                185 verified Redfin reviews
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-cardHover">
            <Image
              src={DENIS.headshot}
              alt={DENIS.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 via-navy/40 to-transparent p-6">
              <div className="text-white text-lg font-semibold">
                {DENIS.name}
              </div>
              <div className="text-white/85 text-xs uppercase tracking-wider">
                Redfin Principal Agent · IL #{DENIS.licenseNumber}
              </div>
            </div>
          </div>
          <div className="absolute -left-3 sm:-left-8 top-10 hidden sm:block card px-4 py-3 max-w-[200px] rotate-[-3deg]">
            <div className="text-xs text-mute">Closed transactions</div>
            <div className="text-2xl font-semibold text-navy">359+</div>
            <div className="text-[11px] text-teal font-medium">$144M sold</div>
          </div>
          <div className="absolute -right-2 sm:-right-6 bottom-10 hidden sm:block card px-4 py-3 max-w-[220px] rotate-[3deg]">
            <div className="text-xs text-mute">Top neighborhood</div>
            <div className="text-lg font-semibold text-navy">Downers Grove</div>
            <div className="text-[11px] text-teal font-medium">
              48 deals & counting
            </div>
          </div>
        </motion.div>
      </div>

      <Link
        href="#stats"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-1 text-xs text-mute hover:text-navy"
      >
        Discover Denis <ArrowRight size={12} />
      </Link>
    </section>
  );
}
