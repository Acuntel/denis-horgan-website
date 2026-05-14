import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { supabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

const ALLOWED_STATUSES = [
  "For Sale",
  "Pending",
  "Sold",
  "Coming Soon",
  "Off Market",
];

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  if (!isAuthenticated()) return unauthorized();
  const db = supabaseAdmin();
  if (!db)
    return NextResponse.json(
      { error: "Supabase not configured" },
      { status: 500 },
    );

  const body = await req.json();
  const patch: Record<string, unknown> = {};
  if (body.address != null) patch.address = String(body.address).trim();
  if (body.city != null) patch.city = String(body.city).trim();
  if (body.state != null) patch.state = String(body.state).trim();
  if (body.zip !== undefined)
    patch.zip = body.zip ? String(body.zip).trim() : null;
  if (body.price != null) patch.price = Math.round(Number(body.price));
  if (body.beds !== undefined)
    patch.beds =
      body.beds === "" || body.beds == null ? null : Number(body.beds);
  if (body.baths !== undefined)
    patch.baths =
      body.baths === "" || body.baths == null ? null : Number(body.baths);
  if (body.sqft !== undefined)
    patch.sqft =
      body.sqft === "" || body.sqft == null ? null : Number(body.sqft);
  if (body.status != null && ALLOWED_STATUSES.includes(String(body.status)))
    patch.status = String(body.status);
  if (body.featured !== undefined) patch.featured = Boolean(body.featured);
  if (body.description !== undefined)
    patch.description = body.description ? String(body.description) : null;
  if (body.photos !== undefined && Array.isArray(body.photos))
    patch.photos = body.photos;
  if (body.mls_number !== undefined)
    patch.mls_number = body.mls_number ? String(body.mls_number) : null;
  if (body.redfin_url !== undefined)
    patch.redfin_url = body.redfin_url ? String(body.redfin_url) : null;
  if (body.listing_type !== undefined)
    patch.listing_type = body.listing_type ? String(body.listing_type) : null;

  const { data, error } = await db
    .from("properties")
    .update(patch)
    .eq("id", params.id)
    .select()
    .single();
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ property: data });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  if (!isAuthenticated()) return unauthorized();
  const db = supabaseAdmin();
  if (!db)
    return NextResponse.json(
      { error: "Supabase not configured" },
      { status: 500 },
    );
  const { error } = await db.from("properties").delete().eq("id", params.id);
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
