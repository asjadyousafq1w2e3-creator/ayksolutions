"use client";

import type { Metadata } from "next";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Globe,
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

// ── Types ────────────────────────────────────────────────────────────────────
type TechLogo = { name: string; icon?: SimpleIcon; color?: string };

// ── Static data ──────────────────────────────────────────────────────────────
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

const trustPills = [
  { icon: Globe, text: "Belgium business contact" },
  { icon: MonitorSmartphone, text: "Mobile-first design" },
  { icon: BadgeCheck, text: "Transparent scope" },
  { icon: ShieldCheck, text: "Post-launch support" },
];

const websiteProblems = [
  "The website looks outdated and untrustworthy",
  "Difficult to use on mobile devices",
  "Services are not explained clearly",
  "Visitors cannot find contact information",
  "Pages load slowly and visitors leave",
  "No clear call to action on any page",
  "The business does not appear credible online",
  "Traffic exists but enquiries are low",
  "Competitors look more professional online",
  "The website is not properly indexed by search engines",
];

const solutionFeatures = [
  "Modern responsive design",
  "Clear service presentation",
  "Mobile-first user experience",
  "Enquiry and booking forms",
  "WhatsApp and email integration",
  "Search-friendly site structure",
  "Analytics setup",
  "Performance optimisation",
  "Security best practices",
  "Post-launch support",
];

const launchProcess = [
  {
    num: "01",
    title: "Discovery and content",
    body: "We clarify your goals, audience, services and content before any design begins.",
  },
  {
    num: "02",
    title: "Structure and design",
    body: "Page layouts, mobile-first design and visual identity reviewed and approved by you.",
  },
  {
    num: "03",
    title: "Development",
    body: "Production-quality build on proven technology — fast, secure and maintainable.",
  },
  {
    num: "04",
    title: "Review and refinement",
    body: "You review the live preview. Feedback is incorporated before launch.",
  },
  {
    num: "05",
    title: "Testing and launch",
    body: "Cross-device testing, SEO checks, performance review and go-live.",
  },
];

const featuredCaseStudies = caseStudies.slice(0, 4);

// ── Helper components ────────────────────────────────────────────────────────
function BrandIcon({ icon, color, name }: { icon?: SimpleIcon; color?: string; name: string }) {
  if (icon) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0 fill-current text-foreground/80"
        style={color ? { color } : undefined}
        aria-label={name}
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

// ── Page component ───────────────────────────────────────────────────────────
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroCopyY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const heroPreviewY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const heroGridOpacity = useTransform(scrollYProgress, [0, 1], [0.65, 0.22]);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        aria-labelledby="hero-heading"
        className="relative overflow-hidden border-b border-border bg-background lg:min-h-[calc(100svh-4rem)]"
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply">
            <Image
              src="/footer-bg-image.png"
              alt=""
              fill
              sizes="100vw"
              className="block h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 brand-grid animate-grid-drift opacity-100 [mask-image:radial-gradient(ellipse_at_top,black_50%,transparent_80%)]" />
          <div className="absolute inset-0 matrix-grid animate-matrix-grid opacity-100 [mask-image:radial-gradient(ellipse_at_top,black_50%,transparent_80%)]" />
          <div className="absolute inset-0 hero-light-sweep opacity-30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-12 sm:pt-28 md:pt-36 md:pb-16 lg:flex lg:min-h-[calc(100svh-4rem)] lg:flex-col lg:justify-center lg:pt-36">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center lg:gap-12">
            {/* Copy column */}
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
                id="hero-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 max-w-4xl font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
              >
                Your Business Deserves a Website That{" "}
                <span className="gradient-text">Builds Trust and Wins Customers</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
                className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground md:text-base"
              >
                We design fast, professional and conversion-focused websites that build trust,
                explain your services clearly and generate qualified enquiries.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/contact"
                  id="hero-cta-primary"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-[#b80309]"
                >
                  Get Your Free Website Consultation
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-foreground px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-background"
                >
                  View Our Work
                </Link>
              </motion.div>

              {/* Trust pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-5 flex flex-wrap gap-2"
              >
                {trustPills.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/90 px-3 py-1.5 text-[11px] font-medium text-foreground shadow-soft"
                  >
                    <Icon size={12} className="text-primary" aria-hidden="true" />
                    {text}
                  </div>
                ))}
              </motion.div>

              {/* 7-day disclaimer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-3 text-[10px] text-muted-foreground/70 leading-5 max-w-sm"
              >
                Seven-day delivery applies to eligible standard business websites after content,
                scope and required assets have been approved.
              </motion.p>
            </motion.div>

            {/* Visual column */}
            <motion.div style={{ y: heroPreviewY }}>
              <Reveal delay={0.25}>
                <aside
                  data-cursor="focus"
                  aria-label="Responsive website preview on laptop and mobile"
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
                              <span
                                className="h-2.5 w-2.5 rounded-full bg-primary"
                                aria-hidden="true"
                              />
                              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                                Responsive design preview
                              </span>
                            </div>
                            <div className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-soft">
                              Mobile-first
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-[1.35rem] border border-black/8 bg-white">
                            <Image
                              src={heroResponsiveDevices}
                              alt="Laptop and mobile phone showing a responsive small business website designed by AYK Solutions."
                              className="block w-full object-cover"
                              priority
                              sizes="(max-width: 768px) 100vw, 45vw"
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
        </div>
      </section>

      {/* ── TECH MARQUEE ───────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-soft" aria-label="Technologies we use">
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

      {/* ── PROBLEM SECTION ────────────────────────────────────────────────── */}
      <section
        id="website-problems"
        aria-labelledby="problem-heading"
        className="relative overflow-hidden border-b border-border/70 bg-gradient-to-b from-secondary/30 to-background py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-amber-600">
                <AlertTriangle size={12} />
                Is your website working for your business?
              </div>
              <h2
                id="problem-heading"
                className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-foreground"
              >
                Your Website Should Generate Opportunities—not Send Customers Away
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                An outdated, slow or confusing website can weaken trust before a customer ever
                contacts you. We improve the design, messaging, mobile experience and conversion
                journey so visitors can understand your business and take action confidently.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {websiteProblems.map((problem, i) => (
              <Reveal key={problem} delay={i * 0.04}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500"
                    aria-hidden="true"
                  >
                    <span className="block h-2 w-2 rounded-full bg-red-500" />
                  </span>
                  <p className="text-xs font-medium leading-5 text-foreground/85">{problem}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 rounded-[1.75rem] border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 text-center md:p-10">
              <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                We Turn Your Website Into a Business Asset
              </h3>
              <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-muted-foreground">
                AYK Solutions creates websites that present your business professionally, explain
                your value clearly and guide visitors toward enquiries, bookings, calls or
                purchases.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-[#b80309]"
              >
                Discuss Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES SECTION ───────────────────────────────────────────────── */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="relative overflow-hidden border-y border-border/70 bg-gradient-to-b from-background via-secondary/40 to-background py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
                <Sparkles size={12} aria-hidden="true" />
                Our Services
              </div>
              <h2
                id="services-heading"
                className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-foreground"
              >
                Everything Your Business Needs to Look Professional Online
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                From conversion-focused small-business websites to custom web applications,
                e-commerce stores and business automation — delivered with clarity and speed.
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

      {/* ── WHY TRUST AYK ──────────────────────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── SEVEN-DAY LAUNCH PROCESS ───────────────────────────────────────── */}
      <section
        id="seven-day-process"
        aria-labelledby="process-heading"
        className="relative overflow-hidden border-t border-border/70 bg-background py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
                <Zap size={12} aria-hidden="true" />
                Fast-Launch Website Service
              </div>
              <h2
                id="process-heading"
                className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-foreground"
              >
                From Idea to Online in as Little as Seven Days
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Our streamlined process helps eligible small businesses launch quickly without
                sacrificing clarity, mobile usability or professional presentation.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
            {launchProcess.map((step, i) => {
              const isLast = i === launchProcess.length - 1;
              return (
                <Reveal
                  key={step.num}
                  delay={i * 0.08}
                  className={i === 4 ? "col-span-2 lg:col-span-1" : ""}
                >
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-2xl sm:text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors duration-300">
                          {step.num}
                        </span>
                        {!isLast && (
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                            aria-hidden="true"
                          >
                            <ArrowRight size={13} />
                          </motion.div>
                        )}
                      </div>
                      <h3 className="mt-3 font-display text-xs sm:text-sm font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[11px] sm:text-xs leading-4 sm:leading-5 text-muted-foreground">
                        {step.body}
                      </p>
                    </div>

                    {/* Animated accent line */}
                    <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.15 }}
                        className="h-full bg-gradient-to-r from-primary/40 to-primary"
                      />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ──────────────────────────────────────────────── */}
      <FeaturedProjectsSection studies={featuredCaseStudies} />

      {/* ── PRICING TEASER ─────────────────────────────────────────────────── */}
      <PricingTeaser />

      {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
      <section
        id="final-cta"
        aria-labelledby="final-cta-heading"
        className="relative overflow-hidden border-t border-border/70 bg-gradient-to-b from-background to-secondary/30 py-24"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary mb-6">
              <Sparkles size={12} aria-hidden="true" />
              Start your project
            </div>
            <h2
              id="final-cta-heading"
              className="font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-foreground"
            >
              Your Next Customer May Already Be Searching for You
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground max-w-2xl mx-auto">
              Make sure they discover a business that looks professional, trustworthy and ready to
              help. Tell us about your project and receive a clear website recommendation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                id="final-cta-button"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition hover:bg-[#b80309]"
              >
                Start Your Website Project
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href="https://wa.me/32466317714?text=Hi%20AYK%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3.5 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366]/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Build trust online before your customer contacts you.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

// ── Featured projects sub-component ─────────────────────────────────────────
function FeaturedProjectsSection({ studies }: { studies: CaseStudy[] }) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative bg-background pt-16 md:pt-24 border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-6 pb-8 md:pb-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-border/60 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
                <Sparkles size={12} aria-hidden="true" />
                Selected Client Work
              </div>
              <h2
                id="projects-heading"
                className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
              >
                Real Websites Built for Real Businesses
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-xs font-bold text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary"
              aria-label={`View all ${caseStudies.length} projects`}
            >
              View All Projects ({caseStudies.length})
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>

      <StackedProductCards studies={studies} />
    </section>
  );
}
