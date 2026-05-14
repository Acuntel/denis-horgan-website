"use client";

import { useState } from "react";
import { FAQS } from "@/lib/denis-data";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white">
      <div className="container-x py-20 lg:py-28 grid lg:grid-cols-[1fr_1.5fr] gap-12">
        <div>
          <div className="h-eyebrow">Common Questions</div>
          <h2 className="h-section mt-2">
            Answers, <span className="italic-emph text-teal">upfront.</span>
          </h2>
          <p className="lede mt-3">
            The questions Denis hears the most — answered straight. Don't see
            yours? Use the chat bubble or call {`(630) 870-1800`}.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="border border-line rounded-2xl bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left p-5 hover:bg-sand transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy text-[15px]">
                    {f.q}
                  </span>
                  {isOpen ? (
                    <Minus size={18} className="text-teal shrink-0" />
                  ) : (
                    <Plus size={18} className="text-navy shrink-0" />
                  )}
                </button>
                <div
                  className={`grid transition-all ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-[15px] text-ink/80 leading-relaxed">
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
