import { STATS } from "@/lib/denis-data";

export default function Stats() {
  return (
    <section id="stats" className="border-y border-line bg-white">
      <div className="container-x py-14 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <div className="text-3xl sm:text-4xl font-semibold tracking-tightish text-navy">
              {s.value}
            </div>
            <div className="mt-1.5 text-[11px] sm:text-xs uppercase tracking-[0.16em] text-mute">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
