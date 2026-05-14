import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { DENIS, ALL_AREAS_SERVED } from "@/lib/denis-data";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-navy text-white">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-xl font-semibold tracking-tightish">
            {DENIS.name}
          </div>
          <div className="mt-1 text-sm text-white/70 uppercase tracking-wide">
            {DENIS.title} · {DENIS.licenseState} #{DENIS.licenseNumber}
          </div>
          <p className="mt-4 max-w-md text-sm text-white/75 leading-relaxed">
            Top-producing Redfin agent serving Downers Grove, Naperville,
            Wheaton, and the entire western Chicago suburbs. {DENIS.tagline}.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/85">
            <a
              href={DENIS.phoneHref}
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone size={14} /> {DENIS.phone}
            </a>
            <a
              href={`mailto:${DENIS.email}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail size={14} /> {DENIS.email}
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 shrink-0" />
              <span>{DENIS.office}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
            Explore
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>
              <Link href="/listings" className="hover:text-white">
                Active Listings
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Denis
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/contact?intent=valuation"
                className="hover:text-white"
              >
                Home Valuation
              </Link>
            </li>
            <li>
              <a
                href={DENIS.redfinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Redfin Profile
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
            Areas Served
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-white/75">
            {ALL_AREAS_SERVED.slice(0, 18).map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} {DENIS.name}. All rights reserved.
            Equal Housing Opportunity.
          </div>
          <div>
            Brokered by Redfin Corporation · {DENIS.licenseState}{" "}
            {DENIS.licenseTitle} #{DENIS.licenseNumber}
          </div>
        </div>
      </div>
    </footer>
  );
}
