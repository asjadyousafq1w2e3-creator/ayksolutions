"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  MessageSquareCheck,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  X,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const othersLack = [
  "Generic templates",
  "Limited revisions",
  "Slow communication",
  "No conversion strategy",
  "Poor mobile experience",
  "No post-launch support",
  "Hidden additional costs",
  "Website delivered without guidance",
];

const aykDelivers = [
  "Custom business-focused design",
  "Clear project scope and communication",
  "Mobile-first responsive experience",
  "Lead-generation and conversion features",
  "SEO-ready website structure",
  "WhatsApp, forms and analytics integration",
  "Transparent pricing",
  "Post-launch support and maintenance",
  "Fast and organized delivery",
  "Solutions designed around business goals",
];

const valueCards = [
  {
    icon: Target,
    title: "Business-First Approach",
    body: "We begin with your goals, customers and challenges—not only the visual design.",
  },
  {
    icon: MessageSquareCheck,
    title: "Clear Communication",
    body: "You always know what is being built, what comes next and when it will be delivered.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Focused Design",
    body: "Every page is designed to guide visitors toward enquiries, bookings, calls or purchases.",
  },
  {
    icon: ShieldCheck,
    title: "Support After Launch",
    body: "We remain available for improvements, maintenance and future business growth.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-ayk"
      className="relative overflow-hidden border-t border-border/70 bg-background py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
              <Sparkles size={12} />
              WHY AYK SOLUTIONS
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-foreground">
              <span className="gradient-text">More Than</span> Just a Website
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              We do not simply build websites. We create reliable digital systems that help
              businesses look professional, capture more leads, automate repetitive work and grow
              with confidence.
            </p>
          </div>
        </Reveal>

        {/* Two-Column Comparison (Desktop: Left vs Right; Mobile: AYK Solutions first) */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* AYK Solutions Delivers Card (Shown first on mobile using order-first lg:order-last) */}
          <Reveal delay={0.1} className="order-first lg:order-last flex">
            <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-primary/35 bg-gradient-to-b from-card via-card to-primary/5 p-6 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(214,9,18,0.12)] sm:p-8">
              {/* Subtle ambient red glow */}
              <div className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-4 border-b border-border/60 pb-5">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">
                      <Sparkles size={11} />
                      Built for Business Growth
                    </span>
                    <h3 className="mt-2.5 font-display text-2xl font-semibold text-foreground">
                      What You Get With Ayk Solutions
                    </h3>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {aykDelivers.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-xs font-medium text-foreground/90"
                    >
                      <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check size={12} className="stroke-[2.5]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-border/60 pt-4 text-xs font-semibold text-primary">
                ✓ Fully engineered for conversion, speed, and business continuity.
              </div>
            </div>
          </Reveal>

          {/* What Others Often Lack Card */}
          <Reveal delay={0.15} className="order-last lg:order-first flex">
            <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-border/80 bg-muted/50 p-6 sm:p-8">
              <div>
                <div className="border-b border-border/60 pb-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-muted-foreground/20 bg-muted px-3 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Industry Reality
                  </span>
                  <h3 className="mt-2.5 font-display text-2xl font-semibold text-muted-foreground">
                    What Others Often Lack
                  </h3>
                </div>

                <div className="mt-6 space-y-3">
                  {othersLack.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-xs font-medium text-muted-foreground"
                    >
                      <div className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500/70">
                        <X size={12} className="stroke-[2.5]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                ✕ Generic deliverables often require costly re-builds later.
              </div>
            </div>
          </Reveal>
        </div>

        {/* 4 Additional Compact Value Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={0.1 + idx * 0.05}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={20} />
                    </div>
                    <h4 className="mt-4 font-display text-lg font-semibold text-foreground transition-transform duration-300 group-hover:-translate-y-0.5">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{card.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Section Call To Action */}
        <Reveal delay={0.25}>
          <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 text-center shadow-soft sm:flex-row sm:text-left md:p-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                Ready to build something that actually supports your business?
              </h3>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                Get a clear scope, transparent pricing, and a fast 7–14 day delivery timeline.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-sm transition hover:bg-[#b8040b]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/80 px-5 py-3 text-sm font-bold text-foreground transition hover:border-primary/40 hover:text-primary"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
