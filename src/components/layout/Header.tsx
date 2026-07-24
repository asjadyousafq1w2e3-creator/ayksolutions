"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto flex h-14 max-w-4xl items-center justify-between gap-4 rounded-full border bg-white/95 px-4 backdrop-blur-xl transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-border shadow-[0_14px_42px_rgb(16_17_20/0.12)]"
            : "border-foreground/10 shadow-[0_10px_34px_rgb(16_17_20/0.08)]"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
          aria-label="AYK Solutions home"
        >
          <div className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-lg bg-white transition duration-300 group-hover:-translate-y-0.5">
            <span className="absolute inset-0 logo-sheen opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Image
              src="/ayk/logo.png"
              alt=""
              width={32}
              height={32}
              priority
              className="relative h-7 w-7 object-contain"
            />
          </div>
          <span className="font-display text-[0.95rem] font-bold uppercase tracking-wide">AYK</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden items-center lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`relative flex h-10 items-center px-3 text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              } after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-center after:rounded-full after:bg-primary after:transition-transform ${
                isActive(link.href)
                  ? "after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[0_8px_24px_rgb(214_9_18/0.22)] transition hover:-translate-y-0.5 hover:bg-[#b8040b] hover:shadow-glow"
          >
            <span>Free Consultation</span>
            <ArrowRight
              size={15}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white transition hover:bg-secondary lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-2 max-w-4xl overflow-hidden rounded-3xl border border-border bg-white/95 shadow-card backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`rounded-xl px-3 py-3 text-sm font-semibold ${
                  isActive(l.href)
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
            >
              Let&apos;s build
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
