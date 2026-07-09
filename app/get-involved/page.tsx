import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Church,
  HandHeart,
  Handshake,
  Mail,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, partner, or give — join The Samson Foundation in restoring hope to vulnerable individuals and communities across Nigeria.",
};

const ways = [
  {
    icon: Users,
    title: "Volunteer",
    body: "Give your time and skills — from outreach days and distribution to mentoring young people and supporting literacy work.",
    cta: {
      label: "Volunteer with us",
      href: waLink("Hello! I would like to volunteer with The Samson Foundation."),
      external: true,
    },
  },
  {
    icon: Handshake,
    title: "Partner Organizations",
    body: "NGOs, development agencies, and language organizations — let's implement sustainable, community-driven projects together.",
    cta: {
      label: "Discuss a partnership",
      href: `mailto:${site.email}?subject=${encodeURIComponent("Partnership with The Samson Foundation")}`,
      external: false,
    },
  },
  {
    icon: Church,
    title: "Churches",
    body: "We collaborate with churches on Bible translation, discipleship, and caring for widows, children, and the vulnerable.",
    cta: {
      label: "Connect your church",
      href: `mailto:${site.email}?subject=${encodeURIComponent("Church collaboration with The Samson Foundation")}`,
      external: false,
    },
  },
  {
    icon: HandHeart,
    title: "Donors",
    body: "Fund a business grant, a scholarship, a wheelchair, or emergency relief — and move help directly to the less privileged.",
    cta: { label: "Give today", href: "/donate", external: false },
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest-900">
        <Image
          src="/images/impact/children/children-laughing-together.jpg"
          alt="Children laugh together with a Foundation volunteer on a village road."
          fill
          sizes="100vw"
          className="object-cover object-[center_35%] opacity-30"
        />
        <div className="container-content relative py-16 sm:py-24">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Get Involved"
              title="Be part of the move"
              intro="Volunteers, partner organizations, churches, and donors make every intervention possible. There is a place for you."
            />
          </Reveal>
        </div>
      </section>

      <section className="container-content py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {ways.map((way, i) => {
            const Icon = way.icon;
            return (
              <Reveal key={way.title} delay={Math.min(i * 0.06, 0.24)}>
                <article className="flex h-full flex-col rounded-2xl border border-forest-600/10 bg-white p-7 shadow-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest-600/10 text-forest-600">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h2 className="mt-4 font-heading text-xl font-bold text-forest-800">
                    {way.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                    {way.body}
                  </p>
                  {way.cta.external ? (
                    <a
                      href={way.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-forest mt-5 self-start"
                    >
                      {way.cta.label}
                    </a>
                  ) : way.cta.href.startsWith("/") ? (
                    <Link href={way.cta.href} className="btn-forest mt-5 self-start">
                      {way.cta.label}
                    </Link>
                  ) : (
                    <a href={way.cta.href} className="btn-forest mt-5 self-start">
                      {way.cta.label}
                    </a>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 rounded-2xl bg-parchment/70 p-7 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold text-forest-800">
                Not sure where you fit? Just reach out.
              </h2>
              <p className="mt-2 max-w-xl leading-relaxed text-stone">
                Call, WhatsApp, or email us — we would love to hear how you want
                to help.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${site.phones[0].tel}`} className="btn-forest">
                <Phone className="h-4 w-4" aria-hidden /> Call
              </a>
              <a
                href={waLink("Hello! I would like to get involved with The Samson Foundation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-forest"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
              </a>
              <a href={`mailto:${site.email}`} className="btn-forest">
                <Mail className="h-4 w-4" aria-hidden /> Email
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
