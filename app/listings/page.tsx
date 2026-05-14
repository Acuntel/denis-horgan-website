import { fetchListings } from "@/lib/supabase";
import ListingsClient from "./ListingsClient";

export const revalidate = 60;

export const metadata = {
  title: "Active Listings",
  description:
    "Browse Denis Horgan's current listings across the western Chicago suburbs.",
};

export default async function ListingsPage() {
  const listings = await fetchListings({});
  return (
    <div className="bg-sand">
      <div className="container-x pt-14 pb-8 lg:pt-20">
        <div className="h-eyebrow">Active Inventory</div>
        <h1 className="h-display mt-2">
          All <span className="italic-emph text-teal">Listings</span>
        </h1>
        <p className="lede mt-3 max-w-2xl">
          Filter by status, price, or beds. New listings are added the moment
          they hit the market — check back often, or call {`(630) 870-1800`} for
          off-market opportunities.
        </p>
      </div>
      <ListingsClient initialListings={listings} />
    </div>
  );
}
