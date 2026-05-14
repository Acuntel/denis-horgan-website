import ContactForm from "./ContactForm";
import { DENIS } from "@/lib/denis-data";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Denis Horgan",
  description:
    "Reach Denis directly — he responds to every inquiry personally, usually within the hour.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { intent?: string; address?: string };
}) {
  return (
    <section className="bg-sand">
      <div className="container-x py-16 lg:py-24 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="h-eyebrow">Get in touch</div>
          <h1 className="h-display mt-2 text-balance">
            Let's <span className="italic-emph text-teal">talk.</span>
          </h1>
          <p className="lede mt-4 max-w-md">
            Buying, selling, refinancing, or just exploring? Send Denis a
            message and he'll personally get back to you — usually within the
            hour during business hours.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a href={DENIS.phoneHref} className="flex items-center gap-3 group">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-teal shadow-card">
                <Phone size={16} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-mute">
                  Phone
                </span>
                <span className="font-semibold text-navy group-hover:text-teal">
                  {DENIS.phone}
                </span>
              </span>
            </a>
            <a
              href={`mailto:${DENIS.email}`}
              className="flex items-center gap-3 group"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-teal shadow-card">
                <Mail size={16} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-mute">
                  Email
                </span>
                <span className="font-semibold text-navy group-hover:text-teal">
                  {DENIS.email}
                </span>
              </span>
            </a>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-teal shadow-card">
                <MapPin size={16} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-mute">
                  Office
                </span>
                <span className="text-navy text-sm">{DENIS.office}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="card p-6 sm:p-8">
          <ContactForm
            initialIntent={searchParams?.intent}
            initialAddress={searchParams?.address}
          />
        </div>
      </div>
    </section>
  );
}
