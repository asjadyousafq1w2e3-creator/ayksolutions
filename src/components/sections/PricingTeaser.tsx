"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { currencies, type CurrencyCode, formatPrice } from "@/components/sections/PricingSection";

const teaserPackages = [
  {
    title: "Starter Website",
    priceUSD: 199,
    desc: "Up to 5 custom pages, responsive design, WhatsApp & enquiry forms.",
    tag: "Small Business",
  },
  {
    title: "Business Growth",
    priceUSD: 399,
    desc: "10 custom pages, lead-generation sections, CMS & speed optimization.",
    popular: true,
    tag: "Most Popular",
  },
  {
    title: "Ecommerce Store",
    priceUSD: 499,
    desc: "Shopify or custom storefront, product catalog, cart & checkout setup.",
    tag: "Online Stores",
  },
  {
    title: "AI Lead Automation",
    priceUSD: 299,
    desc: "Website AI assistant, FAQ automation & lead collection workflows.",
    tag: "Lead Systems",
  },
];

export function PricingTeaser() {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, clientWidth } = sliderRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveSlide(index);
  };

  const scrollToSlide = (idx: number) => {
    if (!sliderRef.current) return;
    const clientWidth = sliderRef.current.clientWidth;
    sliderRef.current.scrollTo({
      left: clientWidth * idx,
      behavior: "smooth",
    });
    setActiveSlide(idx);
  };

  const scrollSlide = (dir: "prev" | "next") => {
    const nextIdx =
      dir === "next"
        ? Math.min(activeSlide + 1, teaserPackages.length - 1)
        : Math.max(activeSlide - 1, 0);
    scrollToSlide(nextIdx);
  };

  return (
    <section className="relative overflow-hidden border-t border-border/70 bg-gradient-to-b from-background via-secondary/40 to-background py-20">
      {/* Background Ambient Glow */}
      <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
              <Sparkles size={12} />
              TRANSPARENT & ACCESSIBLE PRICING
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-foreground">
              Fixed-scope pricing engineered for business growth.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              No hidden fees, no vague hourly rates. Every project starts with a documented scope,
              milestone billing, and guaranteed post-launch support.
            </p>

            {/* Interactive Currency Switcher Bar */}
            <div className="mt-7 flex flex-col items-center gap-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/90 p-1.5 shadow-sm">
                <div className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-muted-foreground">
                  <Globe size={14} className="text-primary" />
                  <span>Currency:</span>
                </div>
                {(Object.keys(currencies) as CurrencyCode[]).map((code) => {
                  const curr = currencies[code];
                  const active = currency === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setCurrency(code)}
                      className={`rounded-full px-3.5 py-1 text-xs font-bold transition-all ${
                        active
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {curr.label}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-muted-foreground">
                Click any currency above to see prices in your preferred region.
              </p>
            </div>
          </div>
        </Reveal>

        {/* MOBILE VIEW ONLY: Teaser Package Cards Slider */}
        <div className="mt-10 block sm:hidden">
          {/* Mobile Swipe Hint Badge & Slide Counter */}
          <div className="mb-3.5 flex items-center justify-between px-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-primary">
              <Sparkles size={12} />
              Swipe to view packages
            </span>
            <span className="font-mono text-xs font-bold text-foreground">
              {activeSlide + 1} / {teaserPackages.length}
            </span>
          </div>

          {/* Horizontal Touch Scroll Container */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto gap-4 pb-4 pt-1 no-scrollbar scroll-smooth"
          >
            {teaserPackages.map((pkg) => (
              <div key={pkg.title} className="w-[88vw] max-w-[340px] shrink-0 snap-center">
                <Link
                  href="/pricing"
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                    pkg.popular
                      ? "border-primary/50 bg-gradient-to-b from-card to-primary/5 shadow-card ring-2 ring-primary/20"
                      : "border-border bg-card shadow-soft"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-primary">
                        {pkg.tag}
                      </span>
                      {pkg.popular && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-primary">
                          <Zap size={11} /> Popular
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                      {pkg.title}
                    </h3>

                    <div className="mt-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Starting from
                      </span>
                      <div className="mt-0.5">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={currency}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="font-display text-2xl font-extrabold text-foreground"
                          >
                            {formatPrice(pkg.priceUSD, currency)}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{pkg.desc}</p>
                  </div>

                  <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between text-xs font-bold text-primary">
                    <span>View full package</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Slider Pagination Controls */}
          <div className="mt-4 flex items-center justify-between px-2">
            <button
              type="button"
              onClick={() => scrollSlide("prev")}
              disabled={activeSlide === 0}
              aria-label="Previous package"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {teaserPackages.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => scrollToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    activeSlide === i ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollSlide("next")}
              disabled={activeSlide === teaserPackages.length - 1}
              aria-label="Next package"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* DESKTOP VIEW ONLY: 4 Compact Teaser Package Cards Grid */}
        <div className="mt-12 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teaserPackages.map((pkg, idx) => (
            <Reveal key={pkg.title} delay={idx * 0.06}>
              <Link
                href="/pricing"
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                  pkg.popular
                    ? "border-primary/50 bg-gradient-to-b from-card to-primary/5 shadow-card ring-2 ring-primary/20 hover:shadow-[0_20px_50px_rgba(214,9,18,0.14)]"
                    : "border-border bg-card shadow-soft hover:border-primary/40 hover:shadow-card"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-primary">
                      {pkg.tag}
                    </span>
                    {pkg.popular && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-primary">
                        <Zap size={11} /> Popular
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {pkg.title}
                  </h3>

                  <div className="mt-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Starting from
                    </span>
                    <div className="mt-0.5">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currency}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="font-display text-2xl font-extrabold text-foreground"
                        >
                          {formatPrice(pkg.priceUSD, currency)}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{pkg.desc}</p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between text-xs font-bold text-primary">
                  <span>View full package</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Big Conversion Banner to /pricing */}
        <Reveal delay={0.2} className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/40 bg-gradient-to-r from-primary/15 via-card to-primary/10 p-8 text-center shadow-card md:p-12">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
                <ShieldCheck size={14} />
                50% Milestone Billing • Post-Launch Support Included
              </div>

              <h3 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                Compare All Pricing Packages & Currency Options
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                Explore detailed feature breakdowns, transparent milestone schedules, and custom
                pricing options for your region.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/pricing"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-xs font-bold text-primary-foreground shadow-sm transition hover:bg-[#b8040b]"
                >
                  <span>View All Pricing & Packages</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-xs font-bold text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  Request Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
