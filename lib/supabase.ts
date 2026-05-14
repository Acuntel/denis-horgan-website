import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Listing } from "./denis-data";
import { SEED_LISTINGS } from "./denis-data";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseConfigured = Boolean(URL && ANON);

let _public: SupabaseClient | null = null;
let _admin: SupabaseClient | null = null;

export function supabasePublic(): SupabaseClient | null {
  if (!supabaseConfigured) return null;
  if (!_public) _public = createClient(URL!, ANON!);
  return _public;
}

export function supabaseAdmin(): SupabaseClient | null {
  if (!URL || !SERVICE) return null;
  if (!_admin)
    _admin = createClient(URL, SERVICE, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  return _admin;
}

const TABLE = "properties";
export const PHOTO_BUCKET = "property-photos";

export async function fetchListings(opts?: {
  featured?: boolean;
  limit?: number;
}): Promise<Listing[]> {
  const client = supabasePublic();
  if (!client) {
    let rows = SEED_LISTINGS as unknown as Listing[];
    if (opts?.featured) rows = rows.filter((r) => r.featured);
    if (opts?.limit) rows = rows.slice(0, opts.limit);
    return rows;
  }
  let q = client
    .from(TABLE)
    .select("*")
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false });
  if (opts?.featured) q = q.eq("featured", true);
  if (opts?.limit) q = q.limit(opts.limit);
  const { data, error } = await q;
  if (error) {
    console.error("Supabase fetchListings error:", error);
    return SEED_LISTINGS as unknown as Listing[];
  }
  return (data ?? []) as Listing[];
}

export async function fetchListingById(id: string): Promise<Listing | null> {
  const client = supabasePublic();
  if (!client) {
    return (
      (SEED_LISTINGS as unknown as Listing[]).find((l) => l.id === id) ?? null
    );
  }
  const { data, error } = await client
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .single();
  if (error || !data) return null;
  return data as Listing;
}
