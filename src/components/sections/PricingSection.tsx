"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  FileCheck,
  FileText,
  Headphones,
  HelpCircle,
  Lock,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export type CurrencyCode = "USD" | "SAR" | "EUR" | "GBP";

export interface CurrencyConfig {
  code: CurrencyCode;
  label: string;
  symbol: string;
  rate: number;
}

export const currencies: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: "USD", label: "$ USD", symbol: "$", rate: 1 },
  SAR: { code: "SAR", label: "﷼ SAR", symbol: "SAR ", rate: 3.75 },
  EUR: { code: "EUR", label: "€ EUR", symbol: "€", rate: 0.92 },
  GBP: { code: "GBP", label: "£ GBP", symbol: "£", rate: 0.79 },
};

export function formatPrice(usdPrice: number, currencyCode: CurrencyCode): string {
  const curr = currencies[currencyCode];
  if (currencyCode === "USD") return `${curr.symbol}${usdPrice}`;
  if (currencyCode === "SAR") {
    const raw = usdPrice * curr.rate;
    const rounded = Math.round(raw / 10) * 10 - 1;
    return `${curr.symbol}${rounded > 0 ? rounded : Math.round(raw)}`;
  }
  if (currencyCode === "EUR") {
    const raw = usdPrice * curr.rate;
    const rounded = Math.round(raw / 5) * 5 - 1;
    return `${curr.symbol}${rounded > 0 ? rounded : Math.round(raw)}`;
  }
  if (currencyCode === "GBP") {
    const raw = usdPrice * curr.rate;
    const rounded = Math.round(raw / 5) * 5 - 1;
    return `${curr.symbol}${rounded > 0 ? rounded : Math.round(raw)}`;
  }
  return `${curr.symbol}${Math.round(usdPrice * curr.rate)}`;
}

interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  priceUSD: number;
  popular?: boolean;
  features: string[];
  buttonText: string;
  footerText: string;
  trustTag?: string;
}

const mainPlans: PricingPlan[] = [
  {
    id: "starter",
    title: "Starter Website",
    subtitle:
      "For individuals, startups and small businesses that need a professional online presence.",
    priceUSD: 199,
    features: [
      "Up to 5 professional pages",
      "Responsive mobile design",
      "Contact and enquiry forms",
      "WhatsApp integration",
      "Social media links",
      "Basic on-page SEO",
      "Google Maps integration",
      "Basic performance optimization",
      "Domain and hosting connection",
      "14 days post-launch support",
    ],
    buttonText: "Start Your Website",
    footerText: "Best for portfolios, local businesses and service providers.",
  },
  {
    id: "business",
    title: "Business Growth",
    subtitle:
      "For growing businesses that need a stronger website, better lead generation and custom functionality.",
    priceUSD: 399,
    popular: true,
    trustTag: "Most selected by growing businesses",
    features: [
      "Up to 10 custom pages",
      "Premium responsive design",
      "Lead-generation landing sections",
      "Advanced contact and enquiry forms",
      "WhatsApp and email integrations",
      "Blog or content management",
      "Basic analytics setup",
      "SEO-ready page structure",
      "Speed and performance optimization",
      "Custom animations and interactions",
      "30 days post-launch support",
      "Two revision rounds",
    ],
    buttonText: "Grow Your Business",
    footerText: "Best for agencies, schools, clinics, restaurants and professional companies.",
  },
  {
    id: "ecommerce",
    title: "Ecommerce Store",
    subtitle:
      "For brands that want to sell products through a modern and professional online store.",
    priceUSD: 499,
    features: [
      "Shopify or custom ecommerce setup",
      "Professional homepage design",
      "Product and collection structure",
      "Mobile shopping optimization",
      "Product-page design",
      "Cart and checkout improvements",
      "Shipping and policy-page setup",
      "Payment or COD configuration",
      "WhatsApp order support",
      "Basic ecommerce SEO",
      "Analytics integration",
      "30 days post-launch support",
    ],
    buttonText: "Launch Your Store",
    footerText: "Best for ecommerce brands, Instagram sellers and product-based businesses.",
  },
  {
    id: "ai-automation",
    title: "AI Lead Automation",
    subtitle:
      "For businesses that want to automate enquiries, customer questions and lead collection.",
    priceUSD: 299,
    features: [
      "Website AI assistant",
      "Business FAQ setup",
      "Lead information collection",
      "Human handoff workflow",
      "Email or Google Sheets integration",
      "Appointment or callback requests",
      "Custom business knowledge setup",
      "Basic conversation analytics",
      "One automation workflow",
      "30 days technical support",
    ],
    buttonText: "Automate Your Leads",
    footerText: "Best for businesses receiving repeated customer enquiries.",
  },
];

const carePlans = [
  {
    title: "Website Care",
    priceUSD: 39,
    features: [
      "Regular backups",
      "Security checks",
      "Minor content changes",
      "Form testing",
      "Performance monitoring",
      "Technical support",
    ],
  },
  {
    title: "Ecommerce Care",
    priceUSD: 79,
    features: [
      "Product updates",
      "Banner and collection changes",
      "Store maintenance",
      "Discount setup",
      "Technical support",
      "Basic SEO improvements",
    ],
  },
];

const trustStripItems = [
  {
    icon: FileText,
    title: "Clear Project Scope",
    body: "Everything included in your package is documented before development starts.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment Milestones",
    body: "Payments are divided into clear stages, so you always know what you are paying for.",
  },
  {
    icon: Clock,
    title: "Regular Progress Updates",
    body: "You receive updates throughout the project instead of waiting until the final delivery.",
  },
  {
    icon: Eye,
    title: "Review Before Final Payment",
    body: "You can review the agreed work before completing the remaining project payment.",
  },
  {
    icon: Headphones,
    title: "Post-Launch Support",
    body: "Every package includes support after launch to help ensure a smooth transition.",
  },
];

const promiseSteps = [
  {
    num: "01",
    title: "Step 1 — Define",
    body: "We discuss your business goals, requirements, timeline and expected results.",
  },
  {
    num: "02",
    title: "Step 2 — Confirm",
    body: "You receive a clear proposal covering the scope, price, deliverables and payment milestones.",
  },
  {
    num: "03",
    title: "Step 3 — Build",
    body: "We develop your solution while sharing progress updates and review links.",
  },
  {
    num: "04",
    title: "Step 4 — Launch",
    body: "After approval, we launch the project and provide the included support period.",
  },
];

const trustBadges = [
  "Transparent Pricing",
  "Milestone-Based Payments",
  "Responsive Communication",
  "Mobile-First Development",
  "Post-Launch Assistance",
];

const guaranteeCards = [
  {
    icon: FileCheck,
    title: "Scope Clarity",
    body: "You approve the project requirements before development begins.",
  },
  {
    icon: Smartphone,
    title: "Quality Review",
    body: "The project is checked across common screen sizes and key user journeys before launch.",
  },
  {
    icon: Rocket,
    title: "Launch Assistance",
    body: "We help connect the website, domain, hosting and required business integrations.",
  },
];

const faqs = [
  {
    q: "Can I request custom features?",
    a: "Yes. Every package can be customized depending on your business requirements.",
  },
  {
    q: "Are domain and hosting charges included?",
    a: "Domain, hosting and paid third-party tools are quoted separately when required.",
  },
  {
    q: "How long does a website take?",
    a: "A standard business website usually takes 7–14 working days, depending on content, revisions and functionality.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Each package includes a support period, and monthly maintenance plans are also available.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can improve its design, mobile responsiveness, performance, structure and conversion flow.",
  },
  {
    q: "Can you build a custom platform or SaaS product?",
    a: "Yes. Custom applications, dashboards, ecommerce systems, marketplaces and AI products are quoted separately.",
  },
];

export function PricingSection() {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

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
        ? Math.min(activeSlide + 1, mainPlans.length - 1)
        : Math.max(activeSlide - 1, 0);
    scrollToSlide(nextIdx);
  };

  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-border/70 bg-gradient-to-b from-background via-secondary/30 to-background py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Intro Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
              <Sparkles size={12} />
              SIMPLE & TRANSPARENT PRICING
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-foreground">
              Choose the Right Plan for Your Business
            </h2>
            <p className="mt-4 text-base font-semibold text-foreground">
              Professional digital solutions at transparent, globally competitive prices.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose your preferred currency and explore a package designed around real business
              outcomes.
            </p>

            {/* Currency Switcher */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
                {(Object.keys(currencies) as CurrencyCode[]).map((code) => {
                  const curr = currencies[code];
                  const active = currency === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setCurrency(code)}
                      className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                        active
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {curr.label}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-muted-foreground">
                Currency values are estimates. Final quotations are confirmed before the project
                begins.
              </p>
            </div>
          </div>
        </Reveal>

        {/* MOBILE VIEW: Trust Strip as a Point-by-Point List */}
        <div className="mt-10 block space-y-3 sm:hidden">
          {trustStripItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-3.5 rounded-2xl border border-border/80 bg-card p-4 shadow-soft"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-sm font-bold text-foreground">{item.title}</h4>
                    <span className="font-mono text-[10px] font-bold text-primary">0{idx + 1}</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
                  <div className="mt-2.5 flex items-center gap-1.5 border-t border-border/50 pt-2 text-[10px] font-semibold text-primary/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span>Included in all plans</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP VIEW: 5-Column Grid */}
        <div className="mt-14 hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {trustStripItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 0.06}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon size={19} />
                      </div>
                      <span className="font-mono text-[10px] font-bold tracking-wider text-muted-foreground/60">
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="mt-4 font-display text-sm font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 border-t border-border/50 pt-3 text-[10px] font-semibold text-primary/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span>Included in all plans</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* MOBILE VIEW: Pricing Plans Slider / Carousel */}
        <div className="mt-10 block md:hidden">
          {/* Mobile Swipe Hint Badge & Slide Counter */}
          <div className="mb-3.5 flex items-center justify-between px-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-primary">
              <Sparkles size={12} />
              Swipe to view plans
            </span>
            <span className="font-mono text-xs font-bold text-foreground">
              {activeSlide + 1} / {mainPlans.length}
            </span>
          </div>

          {/* Horizontal Touch Scroll Container */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto gap-4 pb-4 pt-1 no-scrollbar scroll-smooth"
          >
            {mainPlans.map((plan) => (
              <div key={plan.id} className="w-[88vw] max-w-[340px] shrink-0 snap-center">
                <div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border bg-card p-6 shadow-card ${
                    plan.popular
                      ? "border-primary/50 shadow-[0_20px_60px_rgba(214,9,18,0.14)] ring-2 ring-primary/20"
                      : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -right-12 -top-12 -z-10 h-48 w-48 rounded-full bg-primary/15 blur-2xl pointer-events-none" />
                  )}

                  <div>
                    {plan.popular && (
                      <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-sm">
                        <Zap size={11} />
                        MOST POPULAR
                      </div>
                    )}

                    <h3 className="font-display text-xl font-bold text-foreground">{plan.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground min-h-[2.5rem]">
                      {plan.subtitle}
                    </p>

                    <div className="mt-5 border-t border-border/70 pt-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Starting from
                      </span>
                      <div className="mt-1 flex items-baseline gap-1">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={currency}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.25 }}
                            className="font-display text-3xl font-bold text-foreground"
                          >
                            {formatPrice(plan.priceUSD, currency)}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2.5 border-t border-border/70 pt-5">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2.5 text-xs text-foreground/88"
                        >
                          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check size={11} className="stroke-[2.5]" />
                          </div>
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-border/70 pt-5">
                    <Link
                      href={`/contact?plan=${encodeURIComponent(plan.title)}`}
                      className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold shadow-sm ${
                        plan.popular
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-secondary/80 text-foreground"
                      }`}
                    >
                      <span>{plan.buttonText}</span>
                      <ArrowRight size={14} />
                    </Link>

                    <div className="mt-3.5 space-y-1 text-center text-[11px] font-semibold text-muted-foreground">
                      <p className="text-primary/90">✓ Clear deliverables</p>
                      <p>✓ No hidden development charges</p>
                      {plan.trustTag && (
                        <p className="text-emerald-500 font-bold mt-1">⭐ {plan.trustTag}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Controls */}
          <div className="mt-4 flex items-center justify-between px-2">
            <button
              type="button"
              onClick={() => scrollSlide("prev")}
              disabled={activeSlide === 0}
              aria-label="Previous pricing plan"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {mainPlans.map((p, i) => (
                <button
                  key={p.id}
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
              disabled={activeSlide === mainPlans.length - 1}
              aria-label="Next pricing plan"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* DESKTOP VIEW: Main Pricing Cards Grid (4 Cards) */}
        <div className="mt-14 hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainPlans.map((plan, idx) => (
            <Reveal
              key={plan.id}
              delay={0.08 * idx}
              className={plan.popular ? "order-first md:order-none" : ""}
            >
              <div
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] ${
                  plan.popular
                    ? "border-primary/50 shadow-[0_20px_60px_rgba(214,9,18,0.14)] ring-2 ring-primary/20 scale-[1.02]"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -right-12 -top-12 -z-10 h-48 w-48 rounded-full bg-primary/15 blur-2xl pointer-events-none" />
                )}

                <div>
                  {plan.popular && (
                    <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-sm">
                      <Zap size={11} />
                      MOST POPULAR
                    </div>
                  )}

                  <h3 className="font-display text-xl font-bold text-foreground">{plan.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground min-h-[2.5rem]">
                    {plan.subtitle}
                  </p>

                  <div className="mt-5 border-t border-border/70 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Starting from
                    </span>
                    <div className="mt-1 flex items-baseline gap-1">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currency}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.25 }}
                          className="font-display text-3xl font-bold text-foreground sm:text-4xl"
                        >
                          {formatPrice(plan.priceUSD, currency)}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2.5 border-t border-border/70 pt-5">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5 text-xs text-foreground/88"
                      >
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check size={11} className="stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-border/70 pt-5">
                  <Link
                    href={`/contact?plan=${encodeURIComponent(plan.title)}`}
                    className={`group/btn flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold shadow-sm transition-all ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-[#b8040b] shadow-[0_6px_20px_rgba(214,9,18,0.3)]"
                        : "border border-border bg-secondary/80 text-foreground hover:border-primary/40 hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>

                  <div className="mt-3.5 space-y-1 text-center text-[11px] font-semibold text-muted-foreground">
                    <p className="text-primary/90">✓ Clear deliverables</p>
                    <p>✓ No hidden development charges</p>
                    {plan.trustTag && (
                      <p className="text-emerald-500 font-bold mt-1">⭐ {plan.trustTag}</p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Payment Confidence Card */}
        <Reveal delay={0.15} className="mt-12">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/30 bg-gradient-to-r from-card via-card to-primary/5 p-6 shadow-card md:p-8">
            <div className="absolute right-6 top-6 -z-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
                  <Lock size={12} />
                  Start With Confidence
                </div>
                <h3 className="mt-2.5 font-display text-xl font-bold text-foreground md:text-2xl">
                  Pay as Work Progresses — Not All Upfront
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                  You do not need to pay the complete project price before work begins. Most
                  projects start with a 50% upfront payment, followed by the remaining payment after
                  the agreed work has been completed and reviewed.
                </p>
                <p className="mt-2 text-[11px] text-muted-foreground italic">
                  Payment terms may vary for larger, longer or custom projects and will always be
                  confirmed in the project proposal.
                </p>
              </div>

              <div className="flex flex-col gap-2 shrink-0 text-xs font-semibold text-foreground/90">
                <div className="flex items-center gap-2 rounded-lg bg-card px-3.5 py-2 border border-border">
                  <CheckCircle2 size={15} className="text-primary" />
                  <span>Clear scope before payment</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-card px-3.5 py-2 border border-border">
                  <CheckCircle2 size={15} className="text-primary" />
                  <span>Progress visibility during development</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-card px-3.5 py-2 border border-border">
                  <CheckCircle2 size={15} className="text-primary" />
                  <span>Final review before project completion</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Full-Width Horizontal Custom Solution Card */}
        <Reveal delay={0.2} className="mt-12">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 shadow-card md:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
                  ENTERPRISE & CUSTOM
                </span>
                <h3 className="mt-2.5 font-display text-2xl font-semibold text-foreground md:text-3xl">
                  Need Something More Advanced?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                  Planning a SaaS platform, marketplace, restaurant system, custom dashboard, mobile
                  application or AI-powered business product? We can prepare a tailored solution
                  based on your requirements.
                </p>
                <p className="mt-2 text-xs font-semibold text-primary">
                  ✓ Detailed quotation provided before development
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 shrink-0 sm:flex-row sm:items-center">
                <Link
                  href="/contact?plan=Custom%20Solution"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs font-bold text-primary-foreground shadow-sm transition hover:bg-[#b8040b]"
                >
                  <span>Request a Custom Quote</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-muted-foreground transition hover:text-primary underline underline-offset-4"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Our Transparent Project Promise Timeline */}
        <Reveal delay={0.22} className="mt-16">
          <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft md:p-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
                TRANSPARENT PROCESS
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-foreground md:text-3xl">
                Our Transparent Project Promise
              </h3>
              <p className="mt-2 text-sm font-semibold text-primary">
                No confusing process. No unexpected charges. No disappearing after payment.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                From the first discussion to the final launch, every stage is handled with clear
                communication, defined deliverables and visible progress.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
              {promiseSteps.map((step) => (
                <div
                  key={step.num}
                  className="relative rounded-2xl border border-border/80 bg-secondary/30 p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-extrabold text-primary/40">
                      {step.num}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <h4 className="mt-3 font-display text-base font-bold text-foreground">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Monthly Support Add-on Section */}
        <Reveal delay={0.25} className="mt-16">
          <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft md:p-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-primary">
                ONGOING MAINTENANCE & CARE
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                Keep Your Website Secure, Updated and Performing
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Maintenance plans can be added after the website is launched.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {carePlans.map((care) => (
                <div
                  key={care.title}
                  className="rounded-2xl border border-border/80 bg-secondary/40 p-5"
                >
                  <div className="flex items-baseline justify-between border-b border-border pb-3">
                    <h4 className="font-display text-base font-bold text-foreground">
                      {care.title}
                    </h4>
                    <span className="text-sm font-bold text-primary">
                      {formatPrice(care.priceUSD, currency)}
                      <span className="text-[10px] text-muted-foreground">/mo</span>
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    {care.features.map((f) => (
                      <div key={f} className="flex items-center gap-1.5">
                        <Check size={12} className="text-primary shrink-0" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Understated Trust Badges Row */}
        <Reveal delay={0.28} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground/90 shadow-sm"
              >
                <CheckCircle2 size={14} className="text-primary" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Built Around Clarity, Quality and Accountability */}
        <Reveal delay={0.3} className="mt-16">
          <div className="rounded-[1.75rem] border border-border/80 bg-card p-6 shadow-soft md:p-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-primary">
                OUR COMMITMENT
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-foreground md:text-3xl">
                Built Around Clarity, Quality and Accountability
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                Our responsibility does not end when the design looks good. We focus on responsive
                performance, reliable functionality, clear communication and a smooth launch
                experience.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {guaranteeCards.map((g) => {
                const Icon = g.icon;
                return (
                  <div
                    key={g.title}
                    className="rounded-2xl border border-border/80 bg-secondary/30 p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <h4 className="mt-3 font-display text-base font-bold text-foreground">
                      {g.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{g.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* FAQ Accordion Section */}
        <Reveal delay={0.32} className="mt-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <HelpCircle size={15} />
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                Pricing & Project Enquiries
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-2xl border border-border bg-card transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full items-center justify-between p-5 text-left font-display text-sm font-semibold text-foreground transition hover:text-primary"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-0 text-xs leading-relaxed text-muted-foreground border-t border-border/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Final Conversion Block CTA */}
        <Reveal delay={0.35} className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/40 bg-gradient-to-r from-primary/10 via-card to-primary/10 p-8 text-center shadow-card md:p-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Not Sure Which Package Fits Your Business?
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground md:text-sm">
                Tell us what you are planning, and we will recommend the most suitable approach
                without pushing unnecessary features.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-xs font-bold text-primary-foreground shadow-sm transition hover:bg-[#b8040b]"
                >
                  <span>Get a Free Project Consultation</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/contact?plan=Custom%20Quote"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-xs font-bold text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  Request a Custom Quote
                </Link>
              </div>

              <p className="mt-4 text-[11px] text-muted-foreground">
                No obligation. No hidden consultation fee. Just a clear discussion about your
                project.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
