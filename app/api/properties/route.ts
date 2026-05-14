import { NextResponse } from "next/server";
import { fetchListings } from "@/lib/supabase";

export const revalidate = 60;

export async function GET() {
  const listings = await fetchListings({});
  return NextResponse.json({ listings });
}
