import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/lib/programs";

type ProgramCardProps = {
  program: Program;
  /** Compact preview (homepage) vs. full description (Our Work page). */
  variant?: "preview" | "full";
};

export default function ProgramCard({ program, variant = "preview" }: ProgramCardProps) {
  const Icon = program.icon;
  const body = variant === "full" ? program.description : program.short;

  return (
    <article
      id={program.slug}
      className="group flex flex-col overflow-hidden rounded-2xl border border-forest-600/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={program.image}
          alt={program.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest-600 text-white shadow-md">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-bold text-forest-800">
          {program.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{body}</p>
        {variant === "preview" && (
          <Link
            href={`/our-work#${program.slug}`}
            className="mt-4 text-sm font-semibold text-forest-600 underline-offset-4 hover:underline"
          >
            Learn more
            <span className="sr-only"> about {program.title}</span>
          </Link>
        )}
      </div>
    </article>
  );
}
