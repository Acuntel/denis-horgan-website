import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { supabaseAdmin, PHOTO_BUCKET } from "@/lib/supabase";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  if (!isAuthenticated())
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const db = supabaseAdmin();
  if (!db)
    return NextResponse.json(
      { error: "Supabase not configured" },
      { status: 500 },
    );

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File))
    return NextResponse.json({ error: "No file" }, { status: 400 });
  if (file.size > 10 * 1024 * 1024)
    return NextResponse.json({ error: "Max 10MB per photo" }, { status: 400 });
  if (!file.type.startsWith("image/"))
    return NextResponse.json(
      { error: "Only image files allowed" },
      { status: 400 },
    );

  const ext = file.name.split(".").pop() || "jpg";
  const safeExt =
    ext
      .replace(/[^a-z0-9]/gi, "")
      .toLowerCase()
      .slice(0, 5) || "jpg";
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${safeExt}`;

  const buf = Buffer.from(await file.arrayBuffer());

  const { error } = await db.storage.from(PHOTO_BUCKET).upload(filename, buf, {
    contentType: file.type,
    upsert: false,
  });
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  const { data: pub } = db.storage.from(PHOTO_BUCKET).getPublicUrl(filename);
  return NextResponse.json({ url: pub.publicUrl });
}
