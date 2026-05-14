import Image from "next/image";
import Link from "next/link";
import { DENIS, BIO, STATS, TEAM, ALL_AREAS_SERVED } from "@/lib/denis-data";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "About Denis Horgan",
  description:
    "From Ireland to Chicago to the western suburbs. Meet Denis Horgan, top-producing Redfin Principal Agent with $144M in closed transactions.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-cream-50 overflow-hidden">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100 to-cream-50 pointer-events-none" />
        <div className="relative container-x py-20 lg:py-28 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-teal" />
              <div className="h-eyebrow">About Denis</div>
            </div>
            <h1 className="h-display text-balance">
              From Ireland, to Chicago, to{" "}
              <span className="italic-emph text-teal-600">
                your neighborhood.
              </span>
            </h1>
            <p className="lede mt-6 whitespace-pre-line">{BIO.long}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={DENIS.phoneHref} className="btn-navy">
                <Phone size={15} /> {DENIS.phone}
              </a>
              <Link href="/contact" className="btn-ghost">
                <Mail size={15} /> Get in touch
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[28px] overflow-hidden shadow-cardHover">
            <div className="absolute inset-0 border-[6px] border-cream-50 rounded-[28px] z-20 pointer-events-none" />
            <div className="absolute inset-[6px] border border-teal/40 rounded-[22px] z-20 pointer-events-none" />
            <Image
              src={DENIS.headshot}
              alt={DENIS.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-cream-50">
        <div className="container-x py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-semibold tracking-tightish text-navy">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-[0.16em] text-mute mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-100">
        <div className="container-x py-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="h-eyebrow">Denis's Team</div>
            <h2 className="h-section mt-2">
              Full Redfin support behind every transaction.
            </h2>
            <p className="lede mt-3">
              When you hire Denis, you get a Principal Agent, plus a transaction
              coordinator, listing coordinator, and sales advisor working the
              deal in the background.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.name} className="card p-6">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-teal-50 text-teal font-bold">
                  {m.name
                    .split(" ")
                    .map((s) => s[0])
                    .join("")}
                </div>
                <div className="mt-4 font-semibold text-navy">{m.name}</div>
                <div className="text-sm text-mute mt-0.5">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50">
        <div className="container-x py-16 lg:py-24 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <div className="h-eyebrow">Where Denis Works</div>
            <h2 className="h-section mt-2">26+ western suburb markets.</h2>
            <p className="lede mt-3">
              From Downers Grove to Plainfield, Denis has closed transactions
              across DuPage, western Cook, and Will County. If your zip code
              isn't listed, ask anyway.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-mute">
              <MapPin size={14} /> {DENIS.office}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-2 text-sm text-navy">
            {ALL_AREAS_SERVED.map((a) => (
              <div key={a} className="py-1.5 border-b border-line">
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
