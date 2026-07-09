import type { Metadata } from "next";
import Link from "next/link";
import {
  Banknote,
  CreditCard,
  HandHeart,
  Handshake,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Give to The Samson Foundation and help provide business grants, educational support, mobility aids, skills acquisition, and emergency humanitarian assistance to the less privileged.",
};

const givingImpact = [
  "Business start-up grants for young people, widows, and vulnerable women",
  "Scholarships, school materials, and educational sponsorship for children",
  "Wheelchairs, walkers, and other mobility aids for persons with disabilities",
  "Relief materials and emergency assistance for communities in hardship",
  "Bible translation and mother-tongue literacy for underserved communities",
];

export default function DonatePage() {
  return (
    <>
      <section className="bg-forest-800">
        <div className="container-content py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Donate"
              title="Your gift moves help to the less privileged"
              intro="Every donation — however small — becomes a business grant, a school fee, a wheelchair, or a food parcel in the hands of someone who needs it."
            />
          </Reveal>
        </div>
      </section>

      <section className="container-content grid gap-10 py-16 sm:py-24 lg:grid-cols-[3fr_2fr]">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold text-forest-800">
            What your giving makes possible
          </h2>
          <ul className="mt-6 space-y-4">
            {givingImpact.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <HandHeart className="mt-1 h-5 w-5 shrink-0 text-clay-500" aria-hidden />
                <span className="leading-relaxed text-ink/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-6">
            {/* Bank transfer — details pending from the Foundation */}
            <div className="rounded-2xl border border-forest-600/15 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-forest-800">
                <Banknote className="h-5 w-5 text-forest-600" aria-hidden />
                Give by bank transfer
              </h3>
              {/*
                TODO(foundation): Add the Foundation's official bank account
                details here — bank name, account name, account number.
                Do not publish until confirmed by the Foundation.
              */}
              <p className="mt-3 text-sm leading-relaxed text-stone">
                Our official bank account details will be published here very
                soon. In the meantime, please reach us directly and we will
                gladly share how to give:
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={`tel:${site.phones[0].tel}`} className="btn-outline-dark !px-4 !py-2 text-xs">
                  <Phone className="h-4 w-4" aria-hidden /> {site.phones[0].display}
                </a>
                <a href={`mailto:${site.email}?subject=${encodeURIComponent("I would like to give to The Samson Foundation")}`} className="btn-outline-dark !px-4 !py-2 text-xs">
                  <Mail className="h-4 w-4" aria-hidden /> Email us
                </a>
                <a
                  href={waLink("Hello! I would like to support The Samson Foundation with a donation. Please share your giving details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark !px-4 !py-2 text-xs"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp us
                </a>
              </div>
            </div>

            {/* Online giving — integration pending */}
            <div className="rounded-2xl border border-dashed border-forest-600/30 bg-parchment/50 p-6">
              <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-forest-800">
                <CreditCard className="h-5 w-5 text-forest-600" aria-hidden />
                Give online
              </h3>
              {/*
                TODO(foundation): Integrate an online-giving provider
                (e.g. Paystack or Flutterwave payment link) and replace this
                placeholder with the live payment button.
              */}
              <p className="mt-3 text-sm leading-relaxed text-stone">
                Secure online giving (card, bank transfer, USSD) is coming
                soon. Until then, please contact us and we will walk you
                through giving directly.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="rounded-2xl bg-forest-700 p-6 text-white sm:p-8">
            <h2 className="flex items-center gap-2 font-heading text-xl font-bold">
              <Handshake className="h-5 w-5 text-gold-300" aria-hidden />
              Partner with us
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-forest-100">
              Churches, organizations, and individuals partner with The Samson
              Foundation to reach further together — through strategic
              partnerships and community-driven interventions, more than 2,000
              lives have already been positively impacted.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-forest-100">
              To discuss a partnership, gifts-in-kind (such as mobility aids,
              school materials, or relief supplies), or sponsoring a specific
              program, reach us on:
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {site.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="flex items-center gap-2 hover:text-gold-200">
                    <Phone className="h-4 w-4 text-gold-300" aria-hidden />
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 break-all hover:text-gold-200">
                  <Mail className="h-4 w-4 shrink-0 text-gold-300" aria-hidden />
                  {site.email}
                </a>
              </li>
            </ul>
            <Link href="/get-involved" className="btn-gold mt-6 w-full">
              More ways to get involved
            </Link>
          </aside>
        </Reveal>
      </section>
    </>
  );
}
