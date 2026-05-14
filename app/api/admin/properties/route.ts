import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { supabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function noSupabase() {
  return NextResponse.json(
    {
      error:
        "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in env vars.",
    },
    { status: 500 },
  );
}

export async function GET() {
  if (!isAuthenticated()) return unauthorized();
  const db = supabaseAdmin();
  if (!db) return noSupabase();
  const { data, error } = await db
    .from("properties")
    .select("*")
    .order("created_at", { ascending: false });
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ properties: data ?? [] });
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated()) return unauthorized();
  const db = supabaseAdmin();
  if (!db) return noSupabase();
  const body = await req.json();
  const row = sanitize(body);
  if (!row) {
    return NextResponse.json(
      { error: "address, city, price are required" },
      { status: 400 },
    );
  }
  const { data, error } = await db
    .from("properties")
    .insert(row)
    .select()
    .single();
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ property: data });
}

function sanitize(body: Record<string, unknown>) {
  const address = String(body.address || "").trim();
  const city = String(body.city || "").trim();
  const priceNum = Number(body.price);
  if (!address || !city || !priceNum || isNaN(priceNum)) return null;

  return {
    address,
    city,
    state: String(body.state || "IL").trim() || "IL",
    zip: body.zip ? String(body.zip).trim() : null,
    price: Math.round(priceNum),
    beds: body.beds != null && body.beds !== "" ? Number(body.beds) : null,
    baths: body.baths != null && body.baths !== "" ? Number(body.baths) : null,
    sqft: body.sqft != null && body.sqft !== "" ? Number(body.sqft) : null,
    status: ALLOWED_STATUSES.includes(String(body.status))
      ? String(body.status)
      : "For Sale",
    featured: Boolean(body.featured),
    description: body.description ? String(body.description) : null,
    photos: Array.isArray(body.photos) ? body.photos : [],
    mls_number: body.mls_number ? String(body.mls_number) : null,
    redfin_url: body.redfin_url ? String(body.redfin_url) : null,
    listing_type: body.listing_type ? String(body.listing_type) : "Listing",
  };
}

const ALLOWED_STATUSES = [
  "For Sale",
  "Pending",
  "Sold",
  "Coming Soon",
  "Off Market",
];
