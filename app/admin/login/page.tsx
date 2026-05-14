"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      const r = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!r.ok) throw new Error("Invalid password");
      router.push("/admin");
      router.refresh();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Login failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-[70vh] grid place-items-center bg-sand">
      <form onSubmit={submit} className="card p-8 w-full max-w-sm">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-teal-50 text-teal mx-auto">
          <Lock size={20} />
        </div>
        <h1 className="text-xl font-semibold text-navy text-center mt-4">
          Denis Admin
        </h1>
        <p className="text-sm text-mute text-center mt-1">
          Sign in to manage your listings.
        </p>

        <label className="block mt-6 text-xs uppercase tracking-wider text-mute mb-1.5">
          Password
        </label>
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm focus:outline-none focus:border-teal"
        />

        {err && (
          <div className="mt-3 text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
            {err}
          </div>
        )}

        <button
          type="submit"
          disabled={busy}
          className="btn-primary w-full mt-5 disabled:opacity-60"
        >
          {busy ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
