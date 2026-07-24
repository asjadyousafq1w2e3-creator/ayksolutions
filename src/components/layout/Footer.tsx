"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { businessIdentity } from "@/data/businessIdentity";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Image is FIXED at viewport bottom (position: fixed; bottom: 0;).
  // It NEVER moves or scrolls down.
  // As user scrolls UP away from bottom (1 -> 0 over ~600px),
  // the footer content slides down over the fixed image like a curtain,
  // and the image opacity smoothly dissolves into the background color (#ffffff).
  const imageOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0, 0.35, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-x-hidden bg-white pb-64 sm:pb-80 md:pb-[340px]"
    >
      {/* Floating Footer Card Container — Positioned at z-10 so it slides OVER the fixed background image */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-4 sm:px-6">
        <footer className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0d0d0f] text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          {/* Background Image & Ambient Glow Layer */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(205,4,11,0.25)_0%,transparent_45%),radial-gradient(circle_at_bottom_left,rgba(205,4,11,0.14)_0%,transparent_40%),linear-gradient(180deg,#141418_0%,#08080a_100%)]" />
          <div className="absolute inset-0 -z-10 circuit-lines opacity-25" />
          <div className="absolute -right-16 -top-16 -z-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -left-16 -bottom-16 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

          {/* Top Floating CTA Strip inside Footer Card */}
          <div className="border-b border-white/10 bg-white/[0.03] px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
                  <Sparkles size={12} className="text-primary" />
                  Ready to get started?
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Build a website that earns your business more customers.
                </h3>
              </div>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(205,4,11,0.3)] transition hover:-translate-y-0.5 hover:bg-[#b8040b] hover:shadow-glow"
              >
                Get a Free Consultation
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Main Footer Links Grid */}
          <div className="grid gap-10 px-6 py-12 sm:px-10 md:grid-cols-4">
            <div className="max-w-sm md:col-span-2">
              <Link href="/" className="flex items-center gap-3" aria-label="AYK Solutions home">
                <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
                  <Image
                    src="/ayk/logo.png"
                    alt=""
                    width={36}
                    height={36}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div className="leading-none">
                  <span className="block font-display text-base font-bold uppercase tracking-[0.16em]">
                    AYK
                  </span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.26em] text-white/60">
                    Solutions
                  </span>
                </div>
              </Link>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
                We design and build professional digital products for ambitious businesses — from
                high-performing websites to custom web applications and automations.
              </p>

              <div className="mt-6 flex flex-col gap-2 text-sm text-white/70">
                <a
                  href={`mailto:${businessIdentity.email}`}
                  aria-label={`Email ${businessIdentity.email}`}
                  className="flex items-center gap-2.5 transition hover:text-primary"
                >
                  <Mail size={15} className="text-primary" aria-hidden="true" />{" "}
                  {businessIdentity.email}
                </a>
                <a
                  href={`tel:${businessIdentity.phonePlain}`}
                  aria-label={`Call ${businessIdentity.phone}`}
                  className="flex items-center gap-2.5 transition hover:text-primary"
                >
                  <Phone size={15} className="text-primary" aria-hidden="true" />{" "}
                  {businessIdentity.phone}
                </a>
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    {businessIdentity.streetAddress},&nbsp;{businessIdentity.postalCode}&nbsp;
                    {businessIdentity.cityFr},&nbsp;{businessIdentity.country}
                  </span>
                </div>
              </div>
              <a
                href={businessIdentity.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with AYK Solutions on WhatsApp"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2 text-xs font-semibold text-[#25D366] transition hover:bg-[#25D366]/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <div>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/50">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-white/75">
                <li>
                  <Link href="/about" className="transition hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="transition hover:text-primary">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="transition hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="transition hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="transition hover:text-primary">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/50">
                Markets
              </h4>
              <ul className="space-y-3 text-sm text-white/75">
                <li>
                  <Link href="/be/en/web-design-belgium/" className="transition hover:text-primary">
                    🇧🇪 Belgium (EN)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/be/fr/creation-site-web-belgique/"
                    className="transition hover:text-primary"
                    lang="fr"
                  >
                    🇧🇪 Belgique (FR)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/be/nl/webdesign-belgie/"
                    className="transition hover:text-primary"
                    lang="nl"
                  >
                    🇧🇪 België (NL)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sa/en/web-design-saudi-arabia/"
                    className="transition hover:text-primary"
                  >
                    🇸🇦 Saudi Arabia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/au/en/small-business-web-design/"
                    className="transition hover:text-primary"
                  >
                    🇦🇺 Australia
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar inside Footer Card */}
          <div className="border-t border-white/10 bg-black/20 px-6 py-6 sm:px-10">
            <div className="flex flex-col gap-4 text-xs text-white/60">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <span>
                  © {new Date().getFullYear()} {businessIdentity.name}. All rights reserved.
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-white/80 transition hover:text-primary"
                >
                  Start a project <ArrowRight size={14} />
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4">
                <Link href="/privacy" className="transition hover:text-white/90">
                  Privacy Policy
                </Link>
                <Link href="/cookies" className="transition hover:text-white/90">
                  Cookie Policy
                </Link>
                <Link href="/terms" className="transition hover:text-white/90">
                  Terms
                </Link>
                <span className="ml-auto text-white/40">
                  {businessIdentity.addressLabel}: {businessIdentity.streetAddress},{" "}
                  {businessIdentity.postalCode} {businessIdentity.cityFr}
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* FIXED VIEWPORT-BOTTOM Background Image Scene — Positioned at fixed bottom-0 (Never moves) */}
      <motion.div
        style={{ opacity: imageOpacity }}
        className="fixed bottom-0 left-0 right-0 z-0 pointer-events-none w-full overflow-hidden leading-none"
        aria-hidden="true"
      >
        <div className="relative h-[260px] w-full overflow-hidden sm:h-[340px] md:h-auto">
          {/* Smooth linear gradient from white background */}
          <div className="absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none" />

          <Image
            src="/footer-bg-image.png"
            alt=""
            width={1920}
            height={500}
            className="absolute bottom-0 left-1/2 block h-full w-auto min-w-[880px] max-w-none -translate-x-1/2 object-cover object-center md:relative md:bottom-auto md:left-0 md:h-auto md:w-full md:min-w-0 md:max-w-full md:translate-x-0 md:object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
