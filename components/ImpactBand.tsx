import Reveal from "@/components/Reveal";

/**
 * Dignified impact band. Uses ONLY the real figure from the brief:
 * more than 2,000 lives positively impacted. The supporting lines name
 * the five real intervention types — no invented statistics.
 */
const interventions = [
  "Business grants",
  "Educational support",
  "Mobility aids for persons with disabilities",
  "Skills acquisition",
  "Emergency humanitarian assistance",
];

export default function ImpactBand() {
  return (
    <section aria-label="Our impact" className="bg-forest-800">
      <div className="container-content py-16 sm:py-20">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-300">
            Our Impact
          </p>
          <p className="mt-4 font-heading text-5xl font-bold text-white sm:text-6xl">
            2,000<span className="text-gold-400">+</span>
          </p>
          <p className="mx-auto mt-3 max-w-xl text-lg text-forest-100">
            lives positively impacted through community-driven interventions
          </p>
          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {interventions.map((item) => (
              <li
                key={item}
                className="rounded-full border border-gold-300/40 bg-white/5 px-4 py-2 text-sm text-forest-50"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
