"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, Upload, X, Loader2 } from "lucide-react";
import type { Listing } from "@/lib/denis-data";

const STATUSES = [
  "For Sale",
  "Pending",
  "Sold",
  "Coming Soon",
  "Off Market",
] as const;

const EMPTY = {
  id: "",
  address: "",
  city: "",
  state: "IL",
  zip: "",
  price: "",
  beds: "",
  baths: "",
  sqft: "",
  status: "For Sale" as (typeof STATUSES)[number],
  featured: false,
  description: "",
  photos: [] as string[],
  mls_number: "",
  redfin_url: "",
  listing_type: "Listing",
};

export default function PropertyForm({
  initial,
  onSaved,
  onClose,
}: {
  initial?: Listing;
  onSaved: () => void;
  onClose: () => void;
}) {
  const isEdit = Boolean(initial?.id);
  const [form, setForm] = useState(
    initial
      ? {
          id: initial.id,
          address: initial.address,
          city: initial.city,
          state: initial.state,
          zip: initial.zip ?? "",
          price: String(initial.price),
          beds: initial.beds != null ? String(initial.beds) : "",
          baths: initial.baths != null ? String(initial.baths) : "",
          sqft: initial.sqft != null ? String(initial.sqft) : "",
          status: initial.status as (typeof STATUSES)[number],
          featured: initial.featured,
          description: initial.description ?? "",
          photos: initial.photos ?? [],
          mls_number: initial.mls_number ?? "",
          redfin_url: initial.redfin_url ?? "",
          listing_type: initial.listing_type ?? "Listing",
        }
      : EMPTY,
  );
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onPhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setUploading(true);
    try {
      const urls: string[] = [];
      for (const f of files) {
        const fd = new FormData();
        fd.append("file", f);
        const r = await fetch("/api/admin/upload", {
          method: "POST",
          body: fd,
        });
        if (!r.ok) {
          const j = await r.json().catch(() => ({}));
          throw new Error(j.error || "Upload failed");
        }
        const j = await r.json();
        urls.push(j.url);
      }
      update("photos", [...form.photos, ...urls]);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  async function save() {
    setErr(null);
    if (!form.address || !form.city || !form.price) {
      setErr("Address, city, and price are required.");
      return;
    }
    setSaving(true);
    try {
      const payload = {
        ...form,
        price: Number(form.price),
        beds: form.beds ? Number(form.beds) : null,
        baths: form.baths ? Number(form.baths) : null,
        sqft: form.sqft ? Number(form.sqft) : null,
      };
      const url = isEdit
        ? `/api/admin/properties/${form.id}`
        : `/api/admin/properties`;
      const r = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) {
        const j = await r.json().catch(() => ({}));
        throw new Error(j.error || "Save failed");
      }
      onSaved();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="bg-sand min-h-[80vh]">
      <div className="container-x py-10 max-w-3xl">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-1 text-sm text-mute hover:text-navy"
        >
          <ArrowLeft size={14} /> Back to dashboard
        </button>
        <h1 className="mt-3 text-3xl font-semibold text-navy tracking-tightish">
          {isEdit ? "Edit Property" : "Add Property"}
        </h1>

        <div className="mt-8 card p-6 sm:p-8 space-y-5">
          <Field label="Address *">
            <input
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              className={input}
            />
          </Field>
          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="City *">
              <input
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                className={input}
              />
            </Field>
            <Field label="State">
              <input
                value={form.state}
                onChange={(e) => update("state", e.target.value)}
                className={input}
              />
            </Field>
            <Field label="ZIP">
              <input
                value={form.zip}
                onChange={(e) => update("zip", e.target.value)}
                className={input}
              />
            </Field>
          </div>
          <div className="grid sm:grid-cols-4 gap-4">
            <Field label="Price (USD) *">
              <input
                type="number"
                value={form.price}
                onChange={(e) => update("price", e.target.value)}
                className={input}
              />
            </Field>
            <Field label="Beds">
              <input
                type="number"
                value={form.beds}
                onChange={(e) => update("beds", e.target.value)}
                className={input}
              />
            </Field>
            <Field label="Baths">
              <input
                type="number"
                step="0.5"
                value={form.baths}
                onChange={(e) => update("baths", e.target.value)}
                className={input}
              />
            </Field>
            <Field label="Sqft">
              <input
                type="number"
                value={form.sqft}
                onChange={(e) => update("sqft", e.target.value)}
                className={input}
              />
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Status">
              <select
                value={form.status}
                onChange={(e) =>
                  update("status", e.target.value as (typeof STATUSES)[number])
                }
                className={input}
              >
                {STATUSES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
            <label className="flex items-center gap-2 self-end mb-2 text-sm">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => update("featured", e.target.checked)}
                className="h-4 w-4"
              />
              <span className="font-medium text-navy">
                Featured (shows on homepage)
              </span>
            </label>
          </div>

          <Field label="Description">
            <textarea
              rows={5}
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              className={input}
              placeholder="Describe the home — highlight updates, location, schools, etc."
            />
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="MLS #">
              <input
                value={form.mls_number}
                onChange={(e) => update("mls_number", e.target.value)}
                className={input}
              />
            </Field>
            <Field label="Redfin URL">
              <input
                value={form.redfin_url}
                onChange={(e) => update("redfin_url", e.target.value)}
                className={input}
                placeholder="https://www.redfin.com/IL/..."
              />
            </Field>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-mute mb-2">
              Photos ({form.photos.length})
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {form.photos.map((url, i) => (
                <div
                  key={url}
                  className="relative aspect-square rounded-xl overflow-hidden bg-line group"
                >
                  <Image
                    src={url}
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <button
                    onClick={() =>
                      update(
                        "photos",
                        form.photos.filter((_, j) => j !== i),
                      )
                    }
                    className="absolute top-1 right-1 grid h-6 w-6 place-items-center rounded-full bg-white/95 text-navy hover:bg-red-100 hover:text-red-600"
                    aria-label="Remove photo"
                  >
                    <X size={12} />
                  </button>
                  {i === 0 && (
                    <div className="absolute bottom-1 left-1 text-[10px] bg-navy/85 text-white px-1.5 py-0.5 rounded">
                      COVER
                    </div>
                  )}
                </div>
              ))}
              <label className="aspect-square rounded-xl border-2 border-dashed border-line hover:border-teal hover:bg-teal-50 grid place-items-center cursor-pointer text-mute hover:text-teal transition">
                {uploading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    <Upload size={20} />
                    <span className="text-[11px] mt-1">Add</span>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={onPhoto}
                  className="hidden"
                  disabled={uploading}
                />
              </label>
            </div>
            <div className="mt-1.5 text-[11px] text-mute">
              First photo is used as the cover. JPG/PNG/WEBP up to 10MB each.
            </div>
          </div>

          {err && (
            <div className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded-xl">
              {err}
            </div>
          )}

          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={save}
              disabled={saving}
              className="btn-primary disabled:opacity-60"
            >
              {saving
                ? "Saving..."
                : isEdit
                  ? "Save changes"
                  : "Publish listing"}
            </button>
            <button onClick={onClose} className="btn-ghost">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const input =
  "w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-teal";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-mute mb-1.5">
        {label}
      </div>
      {children}
    </div>
  );
}
