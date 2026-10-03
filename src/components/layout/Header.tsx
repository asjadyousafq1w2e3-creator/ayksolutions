"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";

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
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("novalix-theme", next ? "dark" : "light");
    } catch {
      // The theme still works for this visit when storage is unavailable.
    }
    setDark(next);
  };

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
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 rounded-full border bg-white/95 px-4 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-[#111319]/90 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_18px_48px_rgba(0,0,0,0.4)] sm:px-5 ${
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
          aria-label="Novalix home"
        >
          <div className="relative grid h-9 w-9 place-items-center rounded-lg transition duration-300 group-hover:-translate-y-0.5">
            <Image
              src="/transparent-logo.png"
              alt=""
              width={55}
              height={50}
              priority
              className="relative h-auto w-9 object-contain"
            />
          </div>
          <span className="font-display text-[0.95rem] font-bold uppercase tracking-wide">
            Novalix
          </span>
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

        {/* Theme and desktop CTA */}
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            aria-pressed={dark}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition hover:border-primary/50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-white/15 dark:bg-white/5"
          >
            {dark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
          </button>
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
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card transition hover:bg-secondary lg:hidden"
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
          className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-[#111319]/95 lg:hidden"
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
