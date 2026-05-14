import Link from "next/link";
import { DENIS } from "@/lib/denis-data";
import { Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-cream-200 relative">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="relative container-x py-24 lg:py-32">
        <div className="rounded-3xl overflow-hidden bg-cream-50 shadow-card border border-line/60 p-10 sm:p-14 lg:p-20">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-14 items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-teal" />
                <div className="h-eyebrow">Ready when you are</div>
              </div>
              <h2 className="h-section mt-4 text-balance">
                Buying, selling, or simply curious about your home's value?{" "}
                <span className="italic-emph text-teal-600">Let's talk.</span>
              </h2>
              <p className="lede mt-5 max-w-xl">
                No pressure, no spam, no hard sell. Denis personally responds to
                every inquiry, usually within the hour.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={DENIS.phoneHref} className="btn-navy">
                  <Phone size={15} /> Call {DENIS.phone}
                </a>
                <Link href="/contact" className="btn-ghost">
                  <Mail size={15} /> Send a message
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              <ContactRow
                icon={<MessageSquare size={16} />}
                title="Chat anytime"
                body="Multilingual AI assistant, bottom-right of every page"
              />
              <ContactRow
                icon={<Phone size={16} />}
                title="Call or text"
                body={DENIS.phone}
              />
              <ContactRow
                icon={<Mail size={16} />}
                title="Email"
                body={DENIS.email}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-center gap-4 p-5 border border-line rounded-2xl bg-cream-50 hover:border-teal/40 transition">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-teal-50 text-teal-700 border border-teal/20">
        {icon}
      </div>
      <div>
        <div className="text-[10.5px] uppercase tracking-[0.22em] text-mute">
          {title}
        </div>
        <div className="text-[15px] font-medium text-navy mt-0.5">{body}</div>
      </div>
    </div>
  );
}
