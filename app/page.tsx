import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HandHeart, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ImpactBand from "@/components/ImpactBand";
import ProgramCard from "@/components/ProgramCard";
import CtaBand from "@/components/CtaBand";
import NonProfitJsonLd from "@/components/NonProfitJsonLd";
import { programs } from "@/lib/programs";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <NonProfitJsonLd />

      {/* Hero */}
      <section className="relative isolate min-h-[85vh] overflow-hidden">
        <Image
          src="/images/impact/relief/relief-outreach-supplies.jpg"
          alt="A smiling Samson Foundation team member stands among children and community members during a relief outreach in Taraba State."
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-900/60 to-forest-900/30"
          aria-hidden
        />
        <div className="container-content relative flex min-h-[85vh] flex-col items-start justify-end pb-16 pt-24 sm:pb-24">
          <Reveal>
            <span className="inline-flex items-center justify-center rounded-full bg-white p-1.5 shadow-lg">
              <Image
                src="/images/brand/samson-foundation-logo.png"
                alt=""
                aria-hidden
                width={72}
                height={72}
                className="h-14 w-14 rounded-full sm:h-16 sm:w-16"
              />
            </span>
            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
              Move to help the <span className="text-gold-300">less privileged.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-forest-50 sm:text-lg">
              The Samson Foundation works to restore hope to vulnerable
              individuals and communities — transforming lives through
              compassion, empowerment, and sustainable development across
              Nigeria.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/donate" className="btn-gold">
                <HandHeart className="h-4 w-4" aria-hidden />
                Donate
              </Link>
              <Link href="/get-involved" className="btn-outline-light">
                <Users className="h-4 w-4" aria-hidden />
                Get Involved
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission intro */}
      <section className="container-content grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Who We Are"
            title="A faith-based foundation, moved by compassion"
            intro={site.description}
          />
          <p className="mt-4 max-w-2xl leading-relaxed text-stone">
            We believe that lasting change begins by empowering people with the
            resources, knowledge, and opportunities they need to build a better
            future for themselves and their communities.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-forest-600 underline-offset-4 hover:underline"
          >
            Read our full story <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
        <Reveal delay={0.1} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/impact/children/children-selfie-joy.jpg"
              alt="A joyful group selfie of a Foundation volunteer with smiling children, one holding a handmade football."
              width={750}
              height={1000}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="h-full w-full rounded-2xl object-cover shadow-md"
            />
            <div className="grid gap-4">
              <Image
                src="/images/impact/mobility/tricycle-handover-home.jpg"
                alt="A young man tries out his new mobility tricycle while Foundation volunteers look on."
                width={540}
                height={405}
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="w-full rounded-2xl object-cover shadow-md"
              />
              <Image
                src="/images/impact/homevisits/family-home-visit-encouragement.jpg"
                alt="A Foundation team member encourages a family during a home visit."
                width={753}
                height={1000}
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="h-full w-full rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Impact band — real figure only */}
      <ImpactBand />

      {/* Our Work preview */}
      <section className="bg-parchment/60">
        <div className="container-content py-16 sm:py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our Work"
              title="Seven ways we serve"
              intro="Faith-based, community-centred initiatives that promote sustainable development and human dignity."
            />
            <Link href="/our-work" className="btn-outline-dark shrink-0">
              View all programs <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 6).map((program, i) => (
              <Reveal key={program.slug} delay={Math.min(i * 0.06, 0.3)}>
                <ProgramCard program={program} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured story strip */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/impact/mobility/walker-support-young-man.jpg"
          alt="A volunteer carefully supports a young man as he receives a new walking frame."
          fill
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-forest-950/70" aria-hidden />
        <div className="container-content relative py-20 sm:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">
              Stories from the Field
            </p>
            <blockquote className="mt-4 font-heading text-2xl font-bold leading-snug text-white sm:text-3xl">
              Mobility aids — wheelchairs, tricycles, and walkers — restore
              independence and dignity to persons living with disabilities.
            </blockquote>
            <p className="mt-4 leading-relaxed text-forest-100">
              It is one of the ways the Foundation has touched more than 2,000
              lives — alongside business grants, educational support, skills
              acquisition, and emergency humanitarian assistance.
            </p>
            <Link
              href="/impact"
              className="btn-gold mt-8"
            >
              See our impact <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
