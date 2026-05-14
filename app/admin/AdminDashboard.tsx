"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, LogOut, Pencil, Trash2, Star } from "lucide-react";
import type { Listing } from "@/lib/denis-data";
import PropertyForm from "@/components/admin/PropertyForm";

export default function AdminDashboard() {
  const router = useRouter();
  const [properties, setProperties] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Listing | null>(null);
  const [creating, setCreating] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    try {
      const r = await fetch("/api/admin/properties", { cache: "no-store" });
      if (!r.ok) {
        const j = await r.json().catch(() => ({}));
        throw new Error(j.error || "Failed to load");
      }
      const j = await r.json();
      setProperties(j.properties || []);
      setErr(null);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this property? This cannot be undone.")) return;
    const r = await fetch(`/api/admin/properties/${id}`, { method: "DELETE" });
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      alert(j.error || "Failed to delete");
      return;
    }
    load();
  }

  if (creating || editing) {
    return (
      <PropertyForm
        initial={editing ?? undefined}
        onClose={() => {
          setEditing(null);
          setCreating(false);
        }}
        onSaved={() => {
          setEditing(null);
          setCreating(false);
          load();
        }}
      />
    );
  }

  return (
    <div className="bg-sand min-h-[80vh]">
      <div className="container-x py-10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-semibold text-navy tracking-tightish">
              Listings
            </h1>
            <p className="text-mute text-sm mt-1">
              Add, edit, or remove properties shown on the public site.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setCreating(true)} className="btn-primary">
              <Plus size={16} /> Add Property
            </button>
            <button onClick={logout} className="btn-ghost">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {err && (
          <div className="mt-6 text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded-xl">
            <strong>Heads up:</strong> {err}
            <br />
            <span className="text-xs">
              If Supabase isn't configured yet, see ENV_SETUP.md for setup
              steps.
            </span>
          </div>
        )}

        {loading ? (
          <div className="mt-10 text-mute">Loading...</div>
        ) : properties.length === 0 ? (
          <div className="mt-10 card p-12 text-center">
            <div className="text-mute mb-4">
              No properties yet. Click "Add Property" to publish your first
              listing.
            </div>
            <button onClick={() => setCreating(true)} className="btn-primary">
              <Plus size={16} /> Add your first listing
            </button>
          </div>
        ) : (
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl overflow-hidden shadow-card">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="text-left p-3"></th>
                  <th className="text-left p-3">Address</th>
                  <th className="text-left p-3">City</th>
                  <th className="text-left p-3">Price</th>
                  <th className="text-left p-3">Bd/Ba</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-right p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {properties.map((p) => (
                  <tr key={p.id} className="hover:bg-sand/60">
                    <td className="p-3 w-12">
                      {p.featured && (
                        <Star
                          size={14}
                          className="text-amber-500 fill-amber-500"
                        />
                      )}
                    </td>
                    <td className="p-3 font-medium text-navy">{p.address}</td>
                    <td className="p-3">
                      {p.city}, {p.state}
                    </td>
                    <td className="p-3">${p.price.toLocaleString()}</td>
                    <td className="p-3">
                      {p.beds ?? "-"} / {p.baths ?? "-"}
                    </td>
                    <td className="p-3">
                      <span className="chip">{p.status}</span>
                    </td>
                    <td className="p-3 text-right whitespace-nowrap">
                      <button
                        onClick={() => setEditing(p)}
                        className="inline-flex items-center gap-1 text-navy hover:text-teal mr-3"
                      >
                        <Pencil size={14} /> Edit
                      </button>
                      <button
                        onClick={() => remove(p.id)}
                        className="inline-flex items-center gap-1 text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
