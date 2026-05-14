import Link from "next/link";
import PropertyCard from "./PropertyCard";
import { fetchListings } from "@/lib/supabase";
import { ArrowRight } from "lucide-react";

export const revalidate = 60;

export default async function FeaturedListings() {
  const listings = await fetchListings({ limit: 6 });

  return (
    <section id="listings" className="bg-white">
      <div className="container-x py-20 lg:py-28">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <div className="h-eyebrow">Active Inventory</div>
            <h2 className="h-section mt-2 max-w-2xl">Featured Listings</h2>
            <p className="lede mt-3 max-w-xl">
              A curated look at Denis's current and recent inventory across the
              western suburbs.
            </p>
          </div>
          <Link
            href="/listings"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-teal"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        {listings.length === 0 ? (
          <div className="card p-10 text-center">
            <div className="text-mute text-sm">
              New listings hitting the market soon — call {`(630) 870-1800`} for
              off-market opportunities.
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((l) => (
              <PropertyCard key={l.id} listing={l} />
            ))}
          </div>
        )}

        <div className="mt-10 text-center md:hidden">
          <Link href="/listings" className="btn-ghost">
            View all listings <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
