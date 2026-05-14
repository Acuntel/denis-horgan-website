import Link from "next/link";
import { DENIS } from "@/lib/denis-data";
import { Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-sand">
      <div className="container-x py-20 lg:py-28">
        <div className="card p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-white to-sand">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            <div>
              <div className="h-eyebrow">Ready when you are</div>
              <h2 className="h-section mt-2 text-balance">
                Buying, selling, or just curious about your home's value?{" "}
                <span className="italic-emph text-teal">Let's talk.</span>
              </h2>
              <p className="lede mt-4 max-w-xl">
                No pressure, no spam, no hard sell. Denis personally responds to
                every inquiry — usually within the hour.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={DENIS.phoneHref} className="btn-primary">
                  <Phone size={16} /> Call {DENIS.phone}
                </a>
                <Link href="/contact" className="btn-ghost">
                  <Mail size={16} /> Send a message
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-teal-50 text-teal">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">
                      Chat 24/7
                    </div>
                    <div className="text-xs text-mute">
                      Multilingual AI assistant — bottom-right of every page
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-teal-50 text-teal">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">
                      Call or text
                    </div>
                    <div className="text-xs text-mute">{DENIS.phone}</div>
                  </div>
                </div>
              </div>
              <div className="card p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-teal-50 text-teal">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">Email</div>
                    <div className="text-xs text-mute">{DENIS.email}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
