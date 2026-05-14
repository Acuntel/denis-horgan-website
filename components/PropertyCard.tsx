import Link from "next/link";
import Image from "next/image";
import type { Listing } from "@/lib/denis-data";
import { BedDouble, Bath, Square, MapPin } from "lucide-react";

const STATUS_COLORS: Record<string, string> = {
  "For Sale": "bg-teal text-white",
  Pending: "bg-amber-500 text-white",
  Sold: "bg-navy text-white",
  "Coming Soon": "bg-fuchsia-600 text-white",
  "Off Market": "bg-mute text-white",
};

export default function PropertyCard({ listing }: { listing: Listing }) {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(listing.price);

  const photo = listing.photos?.[0];

  return (
    <Link
      href={`/listings/${listing.id}`}
      className="card overflow-hidden group block"
    >
      <div className="relative aspect-[4/3] bg-line overflow-hidden">
        {photo ? (
          <Image
            src={photo}
            alt={`${listing.address}, ${listing.city}`}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="object-cover group-hover:scale-[1.04] transition duration-700"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-mute text-sm">
            Photo coming soon
          </div>
        )}
        <div
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${
            STATUS_COLORS[listing.status] || STATUS_COLORS["For Sale"]
          }`}
        >
          {listing.status}
        </div>
        {listing.featured && (
          <div className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-navy">
            Featured
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="text-[22px] font-semibold tracking-tight text-navy">
          {price}
        </div>
        <div className="mt-1 text-[15px] font-medium text-ink">
          {listing.address}
        </div>
        <div className="flex items-center gap-1 text-sm text-mute mt-0.5">
          <MapPin size={12} />
          {listing.city}, {listing.state} {listing.zip || ""}
        </div>

        <div className="mt-4 flex items-center gap-4 text-sm text-navy/80">
          {listing.beds != null && (
            <span className="flex items-center gap-1.5">
              <BedDouble size={15} /> {listing.beds} bd
            </span>
          )}
          {listing.baths != null && (
            <span className="flex items-center gap-1.5">
              <Bath size={15} /> {listing.baths} ba
            </span>
          )}
          {listing.sqft != null && (
            <span className="flex items-center gap-1.5">
              <Square size={15} /> {listing.sqft.toLocaleString()} sqft
            </span>
          )}
        </div>

        <div className="mt-4 text-[11px] text-mute uppercase tracking-wider">
          Listed by Denis Horgan · Redfin
        </div>
      </div>
    </Link>
  );
}
