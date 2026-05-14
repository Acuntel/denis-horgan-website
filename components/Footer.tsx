import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { DENIS, ALL_AREAS_SERVED } from "@/lib/denis-data";

export default function Footer() {
  return (
    <footer className="mt-0 bg-navy-900 text-cream-50 relative overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none opacity-60" />
      <div className="relative container-x py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-teal-400/40 bg-cream-50/5">
              <span className="font-serif italic text-cream-50 text-[15px] -mt-0.5">
                DH
              </span>
            </div>
            <div className="font-serif text-2xl tracking-tighter2">
              {DENIS.name}
            </div>
          </div>
          <div className="mt-3 text-[10.5px] uppercase tracking-[0.22em] text-cream-50/60">
            {DENIS.title} · {DENIS.licenseState} #{DENIS.licenseNumber}
          </div>
          <p className="mt-6 max-w-md text-[14.5px] text-cream-50/75 leading-[1.7] font-light">
            Top-producing Redfin agent serving Downers Grove, Naperville,
            Wheaton, and the entire western Chicago suburbs. {DENIS.tagline}.
          </p>
          <div className="mt-7 h-px w-full max-w-md bg-cream-50/15" />
          <div className="mt-7 space-y-3 text-[14px] text-cream-50/85">
            <a
              href={DENIS.phoneHref}
              className="flex items-center gap-2.5 hover:text-teal-400 transition"
            >
              <Phone size={13} className="text-teal-400" /> {DENIS.phone}
            </a>
            <a
              href={`mailto:${DENIS.email}`}
              className="flex items-center gap-2.5 hover:text-teal-400 transition"
            >
              <Mail size={13} className="text-teal-400" /> {DENIS.email}
            </a>
            <div className="flex items-start gap-2.5">
              <MapPin size={13} className="mt-1 shrink-0 text-teal-400" />
              <span className="text-cream-50/75">{DENIS.office}</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-teal-400">
            Explore
          </div>
          <ul className="mt-5 space-y-2.5 text-[14px] text-cream-50/85">
            <li>
              <Link href="/listings" className="hover:text-teal-400 transition">
                Active Listings
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal-400 transition">
                About Denis
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/contact?intent=valuation"
                className="hover:text-teal-400 transition"
              >
                Home Valuation
              </Link>
            </li>
            <li>
              <a
                href={DENIS.redfinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition"
              >
                Redfin Profile
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-teal-400">
            Areas Served
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px] text-cream-50/75 font-light">
            {ALL_AREAS_SERVED.slice(0, 18).map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-cream-50/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-cream-50/55">
          <div className="flex items-center gap-2">
            <span className="font-serif italic text-teal-400">
              {DENIS.tagline}.
            </span>
            <span className="text-cream-50/30">·</span>©{" "}
            {new Date().getFullYear()} {DENIS.name}. Equal Housing Opportunity.
          </div>
          <div className="uppercase tracking-[0.16em]">
            Brokered by Redfin Corporation
          </div>
        </div>
      </div>
    </footer>
  );
}
