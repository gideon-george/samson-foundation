import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import NonProfitJsonLd from "@/components/NonProfitJsonLd";
import { site, addressLine, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Reach The Samson Foundation at ${addressLine}, by phone, WhatsApp, or email.`,
};

export default function ContactPage() {
  return (
    <>
      <NonProfitJsonLd />

      <section className="bg-forest-800">
        <div className="container-content py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Contact"
              title="We would love to hear from you"
              intro="Questions, giving, volunteering, partnership — every message matters to us."
            />
          </Reveal>
        </div>
      </section>

      <section className="container-content grid gap-10 py-16 sm:py-24 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold text-forest-800">
            Contact details
          </h2>
          <ul className="mt-6 space-y-5">
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-600/10 text-forest-600">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-ink">Address</p>
                <p className="mt-1 text-sm leading-relaxed text-stone">
                  {site.address.street},<br />
                  {site.address.landmark},<br />
                  {site.address.state}, {site.address.country}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-600/10 text-forest-600">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-ink">Phone</p>
                <p className="mt-1 space-x-3 text-sm">
                  {site.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="text-forest-600 underline-offset-4 hover:underline"
                    >
                      {p.display}
                    </a>
                  ))}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-600/10 text-forest-600">
                <MessageCircle className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-ink">WhatsApp</p>
                <a
                  href={waLink("Hello, The Samson Foundation!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-forest-600 underline-offset-4 hover:underline"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-600/10 text-forest-600">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-ink">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block break-all text-sm text-forest-600 underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </div>
            </li>
          </ul>

          {/* Map */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-forest-600/10 shadow-sm">
            {/*
              TODO(foundation): replace the query with the exact Google Maps
              pin / plus-code for No. 26 NC Ali, Lassandi once confirmed.
            */}
            <iframe
              title="Map showing the area of The Samson Foundation office, opposite Jolly Nyame Stadium, Taraba State"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                "Jolly Nyame Stadium, Jalingo, Taraba State, Nigeria"
              )}&output=embed`}
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-heading text-2xl font-bold text-forest-800">
            Send a message
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
