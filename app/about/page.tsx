import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { targets } from "@/lib/programs";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Samson Foundation is a non-profit, humanitarian, and community development organization founded with the vision of restoring hope to vulnerable individuals and communities across Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-forest-800">
        <div className="container-content py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="About Us"
              title="Restoring hope to vulnerable individuals and communities"
              intro="A non-profit, humanitarian, and community development organization based in Taraba State, Nigeria."
            />
          </Reveal>
        </div>
      </section>

      {/* About Us — real copy */}
      <section className="container-content grid gap-12 py-16 sm:py-24 lg:grid-cols-[3fr_2fr]">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold text-forest-800 sm:text-3xl">
            Who we are
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-ink/90">
            <p>
              The Samson Foundation is a non-profit, humanitarian, and community
              development organization committed to transforming lives through
              compassion, empowerment, and sustainable development. Founded with
              the vision of restoring hope to vulnerable individuals and
              communities, the Foundation works to improve the well-being of
              disadvantaged people across Nigeria.
            </p>
            <p>
              For years, the Foundation has championed initiatives that promote
              education, youth empowerment, women&rsquo;s economic development,
              humanitarian assistance, healthcare support, and community
              advocacy. Through strategic partnerships and community-driven
              interventions, The Samson Foundation has positively impacted more
              than 2,000 lives by providing business grants, educational
              support, mobility aids for persons with disabilities, skills
              acquisition opportunities, and emergency humanitarian assistance.
            </p>
            <p>
              We believe that lasting change begins by empowering people with
              the resources, knowledge, and opportunities they need to build a
              better future for themselves and their communities.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border-l-4 border-gold-400 bg-parchment/70 p-6">
            <p className="font-heading text-lg font-bold text-forest-800">
              Our motto
            </p>
            <p className="mt-1 text-xl italic text-clay-600">
              &ldquo;Move to help the less privileged.&rdquo;
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4">
            <Image
              src="/images/impact/community/greeting-community-children.jpg"
              alt="A Samson Foundation team member bends down to warmly greet children during a community outreach."
              width={1000}
              height={753}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="w-full rounded-2xl object-cover shadow-md"
            />
            <Image
              src="/images/impact/homevisits/family-home-visit-together.jpg"
              alt="A family listens together during a Samson Foundation home visit."
              width={753}
              height={1000}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="w-full rounded-2xl object-cover shadow-md"
            />
          </div>
        </Reveal>
      </section>

      {/* Vision — real copy */}
      <section className="bg-forest-700">
        <div className="container-content grid gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Our Vision"
              title="Dignity, self-reliance, and sustainable development for every individual"
            />
            <div className="mt-6 space-y-5 leading-relaxed text-forest-50">
              <p>
                To build a society where every individual, regardless of
                background or circumstance, has access to opportunities that
                promote dignity, self-reliance, and sustainable development.
              </p>
              <p>
                Our vision is to become a leading humanitarian organization
                recognized for empowering vulnerable communities, promoting
                social justice, reducing poverty, and inspiring hope through
                impactful and sustainable interventions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-heading text-xl font-bold text-gold-300">
              Our approach
            </h3>
            <p className="mt-4 leading-relaxed text-forest-50">
              The Samson Foundation is committed to transforming lives through
              faith-based and community-centered initiatives that promote
              sustainable development and human dignity — working hand in hand
              with churches, communities, and development agencies.
            </p>
            <h3 className="mt-8 font-heading text-xl font-bold text-gold-300">
              Our targets
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {targets.map((t) => (
                <li key={t} className="flex items-start gap-2 text-forest-50">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />
                  <span>{t}</span>
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
