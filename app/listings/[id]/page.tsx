import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchListingById } from "@/lib/supabase";
import { DENIS } from "@/lib/denis-data";
import {
  BedDouble,
  Bath,
  Square,
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { id: string } }) {
  const listing = await fetchListingById(params.id);
  if (!listing) return { title: "Listing not found" };
  return {
    title: `${listing.address}, ${listing.city}`,
    description: listing.description ?? undefined,
  };
}

export default async function ListingDetail({
  params,
}: {
  params: { id: string };
}) {
  const listing = await fetchListingById(params.id);
  if (!listing) notFound();

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(listing.price);

  const photos = listing.photos?.length ? listing.photos : [];

  return (
    <article className="bg-cream-50">
      <div className="container-x pt-8">
        <Link
          href="/listings"
          className="inline-flex items-center gap-1 text-sm text-mute hover:text-navy"
        >
          <ArrowLeft size={14} /> All listings
        </Link>
      </div>

      <div className="container-x mt-6">
        {photos.length > 0 ? (
          <div className="grid gap-2 sm:grid-cols-3 rounded-2xl overflow-hidden max-h-[520px]">
            <div className="relative sm:col-span-2 aspect-[4/3] sm:aspect-auto sm:row-span-2 bg-line">
              <Image
                src={photos[0]}
                alt={listing.address}
                fill
                className="object-cover"
                priority
              />
            </div>
            {photos.slice(1, 5).map((p, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] bg-line hidden sm:block"
              >
                <Image src={p} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <div className="aspect-[16/9] rounded-2xl bg-sand grid place-items-center text-mute">
            Photo coming soon
          </div>
        )}
      </div>

      <div className="container-x py-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="chip">{listing.status}</span>
            {listing.listing_type && (
              <span className="text-xs text-mute uppercase tracking-wider">
                {listing.listing_type}
              </span>
            )}
          </div>
          <h1 className="mt-3 text-4xl font-semibold text-navy tracking-tightish">
            {price}
          </h1>
          <div className="mt-2 text-xl text-ink">{listing.address}</div>
          <div className="flex items-center gap-1 text-mute mt-1">
            <MapPin size={14} />
            {listing.city}, {listing.state} {listing.zip || ""}
          </div>

          <div className="mt-6 flex items-center gap-6 text-navy">
            {listing.beds != null && (
              <span className="flex items-center gap-1.5">
                <BedDouble size={18} />{" "}
                <span className="font-semibold">{listing.beds}</span> beds
              </span>
            )}
            {listing.baths != null && (
              <span className="flex items-center gap-1.5">
                <Bath size={18} />{" "}
                <span className="font-semibold">{listing.baths}</span> baths
              </span>
            )}
            {listing.sqft != null && (
              <span className="flex items-center gap-1.5">
                <Square size={18} />{" "}
                <span className="font-semibold">
                  {listing.sqft.toLocaleString()}
                </span>{" "}
                sqft
              </span>
            )}
          </div>

          {listing.description && (
            <div className="mt-8 prose prose-navy max-w-none">
              <h2 className="text-lg font-semibold text-navy">
                About this home
              </h2>
              <p className="mt-3 text-ink/80 leading-relaxed whitespace-pre-line">
                {listing.description}
              </p>
            </div>
          )}

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {listing.mls_number && (
              <Spec label="MLS #" value={listing.mls_number} />
            )}
            <Spec label="City" value={listing.city} />
            <Spec label="State" value={listing.state} />
            {listing.zip && <Spec label="ZIP" value={listing.zip} />}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 self-start">
          <div className="card p-6">
            <div className="flex items-center gap-3">
              <Image
                src={DENIS.headshot}
                alt={DENIS.name}
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <div className="font-semibold text-navy">{DENIS.name}</div>
                <div className="text-xs text-mute">{DENIS.title}</div>
              </div>
            </div>
            <div className="mt-5 space-y-2.5">
              <a href={DENIS.phoneHref} className="btn-primary w-full">
                <Phone size={16} /> Call {DENIS.phone}
              </a>
              <Link
                href={`/contact?intent=tour&address=${encodeURIComponent(
                  `${listing.address}, ${listing.city}`,
                )}`}
                className="btn-ghost w-full"
              >
                <Mail size={16} /> Request a tour
              </Link>
              {listing.redfin_url && (
                <a
                  href={listing.redfin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-xs text-mute hover:text-navy pt-2"
                >
                  View on Redfin →
                </a>
              )}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-sand p-3">
      <div className="text-[11px] text-mute uppercase tracking-wider">
        {label}
      </div>
      <div className="text-sm font-medium text-navy mt-0.5">{value}</div>
    </div>
  );
}
