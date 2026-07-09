"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HandHeart, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-600/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
      <nav
        aria-label="Main navigation"
        className="container-content flex h-16 items-center justify-between gap-4 md:h-20"
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="The Samson Foundation — home"
        >
          <Image
            src="/images/brand/samson-foundation-logo.png"
            alt="The Samson Foundation seal: the silhouette of Africa marked with a cross, encircled by the Foundation's name."
            width={48}
            height={48}
            priority
            className="h-10 w-10 shrink-0 rounded-full md:h-12 md:w-12"
          />
          <span className="min-w-0">
            <span className="block truncate font-heading text-base font-bold leading-tight text-forest-700 md:text-lg">
              The Samson Foundation
            </span>
            <span className="hidden text-xs italic text-stone sm:block">
              Move to help the less privileged.
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-forest-600 ${
                pathname === l.href ? "text-forest-600" : "text-ink/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/donate" className="btn-gold">
            <HandHeart className="h-4 w-4" aria-hidden />
            Donate
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link href="/donate" className="btn-gold !px-4 !py-2">
            <HandHeart className="h-4 w-4" aria-hidden />
            Donate
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-md p-2 text-forest-700 hover:bg-forest-600/10"
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-forest-600/10 bg-cream lg:hidden">
          <div className="container-content flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`rounded-md px-2 py-3 text-base font-medium hover:bg-forest-600/5 ${
                  pathname === l.href ? "text-forest-600" : "text-ink/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
