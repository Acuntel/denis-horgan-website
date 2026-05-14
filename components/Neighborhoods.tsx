import Image from "next/image";
import Link from "next/link";
import { NEIGHBORHOODS } from "@/lib/denis-data";

export default function Neighborhoods() {
  return (
    <section id="neighborhoods" className="bg-sand">
      <div className="container-x py-20 lg:py-28">
        <div className="max-w-2xl mb-12">
          <div className="h-eyebrow">Where Denis Works</div>
          <h2 className="h-section mt-2">
            Featured{" "}
            <span className="italic-emph text-teal">Neighborhoods</span>
          </h2>
          <p className="lede mt-3">
            Denis has closed transactions in every corner of the western
            suburbs. Here are the markets he knows house-by-house.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NEIGHBORHOODS.map((n) => (
            <Link
              key={n.slug}
              href={`/listings?neighborhood=${n.slug}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] block"
            >
              <Image
                src={n.image}
                alt={n.name}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover group-hover:scale-[1.05] transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-white text-xl font-semibold tracking-tightish">
                  {n.name}
                </div>
                <p className="mt-2 text-white/85 text-sm leading-relaxed line-clamp-3">
                  {n.blurb}
                </p>
                <div className="mt-3 text-[11px] text-teal-400 font-semibold uppercase tracking-wider">
                  View homes →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
