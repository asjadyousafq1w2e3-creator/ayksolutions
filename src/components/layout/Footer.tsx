"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";

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
                  Let&apos;s talk performance
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Ready to elevate your digital presence?
                </h3>
              </div>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(205,4,11,0.3)] transition hover:-translate-y-0.5 hover:bg-[#b8040b] hover:shadow-glow"
              >
                Start a project
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
                  href="mailto:hello@ayksolutions.com"
                  className="flex items-center gap-2.5 transition hover:text-primary"
                >
                  <Mail size={15} className="text-primary" /> hello@ayksolutions.com
                </a>
                <div className="flex items-center gap-2.5">
                  <MapPin size={15} className="text-primary" /> Remote-first · Worldwide
                </div>
              </div>
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
                  <Link href="/contact" className="transition hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/50">
                Services
              </h4>
              <ul className="space-y-3 text-sm text-white/75">
                <li>
                  <Link
                    href="/contact?service=Custom%20Website%20Development"
                    className="transition hover:text-primary"
                  >
                    Custom Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact?service=Web%20Applications"
                    className="transition hover:text-primary"
                  >
                    Web Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact?service=Inventory%20Management"
                    className="transition hover:text-primary"
                  >
                    Inventory Control
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact?service=Shopify%20%26%20E-commerce"
                    className="transition hover:text-primary"
                  >
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact?service=Custom%20Software%20Solutions"
                    className="transition hover:text-primary"
                  >
                    Custom Software
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar inside Footer Card */}
          <div className="border-t border-white/10 bg-black/20 px-6 py-6 sm:px-10">
            <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/60 sm:flex-row">
              <span>© {new Date().getFullYear()} AYK Solutions. All rights reserved.</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-white/80 transition hover:text-primary"
              >
                Start a project <ArrowRight size={14} />
              </Link>
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
