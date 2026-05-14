"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { DENIS } from "@/lib/denis-data";

const LINKS = [
  { href: "/listings", label: "Listings" },
  { href: "/#neighborhoods", label: "Neighborhoods" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <div className="grid h-9 w-9 place-items-center rounded-full bg-navy text-white text-sm font-bold">
            DH
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-[15px] font-semibold text-navy">
              {DENIS.name}
            </div>
            <div className="text-[11px] text-mute tracking-wide uppercase">
              {DENIS.title}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy/80 hover:text-navy transition"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={DENIS.phoneHref}
            className="flex items-center gap-1.5 text-sm font-semibold text-navy"
          >
            <Phone size={14} /> {DENIS.phone}
          </a>
          <Link
            href="/contact?intent=valuation"
            className="btn-primary !py-2 !px-4"
          >
            Home Valuation
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-navy"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-white">
          <div className="container-x py-4 flex flex-col gap-3">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-navy"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={DENIS.phoneHref}
              className="py-2 text-base font-semibold text-navy flex items-center gap-2"
            >
              <Phone size={16} /> {DENIS.phone}
            </a>
            <Link
              href="/contact?intent=valuation"
              onClick={() => setOpen(false)}
              className="btn-primary"
            >
              Home Valuation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
