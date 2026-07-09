import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ImpactBand from "@/components/ImpactBand";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBand from "@/components/CtaBand";
import { galleryGroups } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Impact & Stories",
  description:
    "More than 2,000 lives positively impacted through business grants, educational support, mobility aids, skills acquisition, and emergency humanitarian assistance. See photos from the field.",
};

export default function ImpactPage() {
  return (
    <>
      <section className="bg-forest-800">
        <div className="container-content py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Impact & Stories"
              title="Hope, restored — one life at a time"
              intro="These photographs are from the Foundation's own outreach work across Taraba State and beyond. Every face here is a neighbour, met with dignity."
            />
          </Reveal>
        </div>
      </section>

      <ImpactBand />

      {galleryGroups.map((group, i) => (
        <section
          key={group.slug}
          id={group.slug}
          className={i % 2 === 1 ? "bg-parchment/60" : undefined}
        >
          <div className="container-content py-14 sm:py-20">
            <Reveal>
              <SectionHeading title={group.title} intro={group.intro} />
            </Reveal>
            <Reveal delay={0.08} className="mt-10">
              <GalleryGrid photos={group.photos} />
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
