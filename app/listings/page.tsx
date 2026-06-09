import type { Metadata } from "next";
import { getProperties } from "@/lib/properties";
import ListingsClient from "./ListingsClient";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Active Listings",
  description:
    "Browse Denis Horgan's current listings across the western Chicago suburbs — Downers Grove, Naperville, Wheaton, Glen Ellyn and more.",
  alternates: { canonical: canonical("/listings") },
  openGraph: {
    title: "Active Listings | Denis Horgan",
    description:
      "Current homes for sale across the western Chicago suburbs, listed by top-producing Redfin agent Denis Horgan.",
    url: canonical("/listings"),
    type: "website",
  },
};

export default function ListingsPage() {
  const listings = getProperties({});
  return (
    <div className="bg-cream-100">
      <div className="container-x pt-14 pb-8 lg:pt-20">
        <div className="h-eyebrow">Active Inventory</div>
        <h1 className="h-display mt-2">
          My <span className="italic-emph text-teal">Listings</span>
        </h1>
        <p className="lede mt-3 max-w-2xl">
          Filter by status, price, or beds. New listings are added the moment
          they hit the market. Check back often, or call {`(630) 870-1800`} for
          off-market opportunities.
        </p>
      </div>
      <ListingsClient initialListings={listings} />
    </div>
  );
}
