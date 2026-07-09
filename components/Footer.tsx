import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { site, addressLine } from "@/lib/site";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/impact", label: "Impact" },
  { href: "/donate", label: "Donate" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-800 text-white">
      <div className="container-content grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-1">
              <Image
                src="/images/brand/samson-foundation-logo.png"
                alt="The Samson Foundation seal."
                width={52}
                height={52}
                className="rounded-full"
              />
            </span>
            <div>
              <p className="font-heading text-lg font-bold">The Samson Foundation</p>
              <p className="text-sm italic text-forest-100">
                &ldquo;{site.motto}&rdquo;
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-forest-100">
            A non-profit, humanitarian, and community development organization
            transforming lives through compassion, empowerment, and sustainable
            development across Nigeria.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-heading text-base font-bold text-gold-300">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-forest-100 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-base font-bold text-gold-300">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-forest-100">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden />
              <span>{addressLine}</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p.tel} className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden />
                <a href={`tel:${p.tel}`} className="hover:text-white">
                  {p.display}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-base font-bold text-gold-300">Get Involved</h2>
          <p className="mt-4 text-sm leading-relaxed text-forest-100">
            Volunteer, partner, or give — lasting change begins by empowering
            people with the resources, knowledge, and opportunities they need.
          </p>
          <Link href="/get-involved" className="btn-gold mt-5">
            Get Involved
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-5 text-xs text-forest-100 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} The Samson Foundation. All rights
            reserved.
          </p>
          <p className="italic">Move to help the less privileged.</p>
        </div>
      </div>
    </footer>
  );
}
