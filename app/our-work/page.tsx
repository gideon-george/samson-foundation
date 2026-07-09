import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import CtaBand from "@/components/CtaBand";
import { programs, targets } from "@/lib/programs";
import { Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Seven program areas: Bible translation & language development, youth empowerment, women & widow empowerment, education support, humanitarian & healthcare assistance, community development, and advocacy & civic engagement.",
};

export default function OurWorkPage() {
  return (
    <>
      <section className="bg-forest-800">
        <div className="container-content py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Our Work"
              title="Transforming lives through faith-based, community-centred initiatives"
              intro="The Samson Foundation is committed to transforming lives through initiatives that promote sustainable development and human dignity. Our major areas of work:"
            />
          </Reveal>
        </div>
      </section>

      <section className="container-content py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <Reveal key={program.slug} delay={Math.min(i * 0.05, 0.25)}>
              <ProgramCard program={program} variant="full" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Focus areas — "Our target" from the brief */}
      <section className="bg-parchment/60">
        <div className="container-content py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our Targets"
              title="Focus areas"
              intro="The Foundation channels its energy and partnerships toward these areas:"
            />
            <ul className="mt-8 flex flex-wrap gap-3">
              {targets.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-forest-600/20 bg-white px-4 py-2 text-sm font-medium text-forest-700"
                >
                  <Target className="h-4 w-4 text-clay-500" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
