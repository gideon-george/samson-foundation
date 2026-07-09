type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const centered = align === "center";
  const light = tone === "light";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-widest ${
            light ? "text-gold-300" : "text-clay-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 font-heading text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-forest-800"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-forest-100" : "text-stone"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
