"use client";

import { useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cloud,
  ExternalLink,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  siCloudflare,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siShopify,
  siStripe,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";
import heroResponsiveDevices from "@/assets/hero-responsive-devices.png";
import { Reveal } from "@/components/Reveal";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { AnimatedServiceCard } from "@/components/ui/animated-card-chart";
import { StackedProductCards } from "@/components/ui/stacked-product-cards";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

type TechLogo = {
  name: string;
  icon?: SimpleIcon;
  color?: string;
};

const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "8 yrs", label: "Building software" },
  { value: "99.98%", label: "Average uptime" },
  { value: "40+", label: "Happy clients" },
];

const techLogos: TechLogo[] = [
  { name: "React", icon: siReact },
  { name: "TypeScript", icon: siTypescript },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Postgres", icon: siPostgresql },
  { name: "AWS", color: "#FF9900" },
  { name: "Shopify", icon: siShopify },
  { name: "WordPress", icon: siWordpress },
  { name: "Tailwind", icon: siTailwindcss },
  { name: "Stripe", icon: siStripe },
  { name: "Supabase", icon: siSupabase },
  { name: "Cloudflare", icon: siCloudflare },
];
const marqueeTechLogos = [...techLogos, ...techLogos];

const heroSignals = [
  "Desktop and mobile first",
  "Fast, accessible interfaces",
  "Built for scale and handover",
];

const featuredCaseStudies = caseStudies.slice(0, 4);

function BrandIcon({ icon, color, name }: { icon?: SimpleIcon; color?: string; name: string }) {
  if (icon) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0 fill-current text-foreground/80"
        style={color ? { color } : undefined}
      >
        <title>{name}</title>
        <path d={icon.path} />
      </svg>
    );
  }

  return (
    <span className="grid h-5 w-5 place-items-center rounded bg-primary/10 text-[10px] font-bold text-primary">
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroCopyY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const heroPreviewY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const heroGridOpacity = useTransform(scrollYProgress, [0, 1], [0.65, 0.22]);

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-border bg-background lg:min-h-[calc(100svh-4rem)]"
      >
        {/* PRETTY & PROFESSIONAL ANIMATED DRIFTING GRID LINES & BACKGROUND IMAGE */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-hero" />

          {/* Background Image from Footer */}
          <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply">
            <Image
              src="/footer-bg-image.png"
              alt=""
              fill
              sizes="100vw"
              className="block h-full w-full object-cover object-center"
            />
          </div>

          {/* Sophisticated High-End Minimalist Grid */}
          <div className="absolute inset-0 brand-grid animate-grid-drift opacity-100 [mask-image:radial-gradient(ellipse_at_top,black_50%,transparent_80%)]" />
          <div className="absolute inset-0 matrix-grid animate-matrix-grid opacity-100 [mask-image:radial-gradient(ellipse_at_top,black_50%,transparent_80%)]" />
          <div className="absolute inset-0 hero-light-sweep opacity-30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-12 sm:pt-28 md:pt-36 md:pb-16 lg:flex lg:min-h-[calc(100svh-4rem)] lg:flex-col lg:justify-center lg:pt-36">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center lg:gap-12">
            <motion.div style={{ y: heroCopyY }}>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="section-kicker"
              >
                AYK Solutions
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 max-w-4xl font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
              >
                Launch your website & lead system <span className="gradient-text">in 7 days.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
                className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground md:text-base"
              >
                Ayk Solutions helps small businesses launch professional websites and automated lead
                systems within seven days.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-[#b80309]"
                >
                  Start a project
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-xl border border-foreground px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-background"
                >
                  View Pricing
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-5 grid gap-2.5 sm:max-w-2xl sm:grid-cols-3"
              >
                {heroSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-xl border border-border bg-background/90 px-3.5 py-2.5 text-xs font-medium text-foreground shadow-soft"
                  >
                    {signal}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* HERO ANIMATED VISUAL */}
            <motion.div style={{ y: heroPreviewY }}>
              <Reveal delay={0.25}>
                <aside
                  data-cursor="focus"
                  className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-foreground p-4 text-background shadow-card sm:p-5"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(205,4,11,0.18),transparent_30%),linear-gradient(180deg,#161616_0%,#0f0f10_100%)]" />

                  <div className="relative">
                    <div className="flex justify-end">
                      <span className="rounded-full border border-white/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-background/65">
                        Live preview
                      </span>
                    </div>

                    <div className="relative mt-6">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="rounded-[2rem] border border-white/10 bg-[#171717] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.3)] sm:p-4"
                      >
                        <div className="screen-panel relative overflow-hidden rounded-[1.6rem] border border-black/10 p-3 sm:p-4">
                          <div className="hero-device-scan absolute inset-0 pointer-events-none rounded-[1.6rem]" />
                          <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                                Responsive product preview
                              </span>
                            </div>
                            <div className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-soft">
                              Web app + mobile app
                            </div>
                          </div>

                          <div className="overflow-hidden rounded-[1.35rem] border border-black/8 bg-white">
                            <Image
                              src={heroResponsiveDevices}
                              alt="Laptop and mobile phone showing a responsive business software dashboard."
                              className="block w-full object-cover"
                              priority
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </aside>
              </Reveal>
            </motion.div>
          </div>

          {/* HERO STATS BAR */}
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="bg-background px-5 py-4">
                  <div className="text-xl font-display font-semibold text-foreground md:text-2xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH MARQUEE BAR */}
      <section className="border-b border-border bg-gradient-soft">
        <Reveal>
          <div className="overflow-hidden border-y border-border/80 bg-white/45 py-5 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max animate-marquee-reverse items-center gap-2 pr-2 hover:[animation-play-state:paused]">
              {marqueeTechLogos.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex shrink-0 items-center gap-3 px-5 py-2"
                  aria-hidden={index >= techLogos.length}
                >
                  <BrandIcon icon={tech.icon} color={tech.color} name={tech.name} />
                  <span className="whitespace-nowrap text-sm font-semibold text-foreground">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative overflow-hidden border-y border-border/70 bg-gradient-to-b from-background via-secondary/40 to-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
                <Sparkles size={12} />
                WHAT WE BUILD & DELIVER
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-foreground">
                Complete digital systems, built & launched fast.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                From high-converting 7-day websites to custom web applications, e-commerce stores,
                and custom software — engineered for performance and growth.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <AnimatedServiceCard
                  index={i}
                  slug={s.slug}
                  title={s.title}
                  short={s.short}
                  bullets={s.bullets}
                  icon={s.icon}
                  mainColor={s.mainColor}
                  secondaryColor={s.secondaryColor}
                  badge1={s.badge1}
                  badge2={s.badge2}
                  tooltipTitle={s.tooltipTitle}
                  tooltipSub={s.tooltipSub}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / WHAT WE OFFER SECTION */}
      <WhyChooseUs />

      {/* FEATURED PROJECTS SECTION WITH SCROLL ANIMATION & COMPACT PREVIEW */}
      <FeaturedProjectsSection studies={featuredCaseStudies} />

      {/* PRICING PLANS TEASER SECTION */}
      <PricingTeaser />
    </>
  );
}

function FeaturedProjectsSection({ studies }: { studies: CaseStudy[] }) {
  return (
    <section className="relative bg-background pt-16 md:pt-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 pb-8 md:pb-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-border/60 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
                <Sparkles size={12} />
                SELECTED CLIENT WORK
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Digital Experiences Built for Real Businesses
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-xs font-bold text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary"
            >
              View All Projects ({caseStudies.length})
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>

      {/* High-End Stacked Product Cards Experience */}
      <StackedProductCards studies={studies} />
    </section>
  );
}
