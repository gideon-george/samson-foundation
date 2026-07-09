import Link from "next/link";
import { HandHeart, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

/**
 * The recurring Donate / Get-Involved call-to-action band.
 */
export default function CtaBand() {
  return (
    <section aria-label="Support the Foundation" className="bg-forest-700">
      <div className="container-content py-16 text-center sm:py-20">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            Move with us to help the less privileged.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-forest-100 sm:text-lg">
            Every gift, every volunteer hour, and every partnership helps
            restore hope to vulnerable individuals and communities.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
  );
}
