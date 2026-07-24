import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { businessIdentity } from "@/data/businessIdentity";

const domain = "https://ayksolutions.com";
const canonicalUrl = `${domain}/au/en/small-business-web-design/`;

export const metadata: Metadata = {
  title: "Small Business Web Design Australia | AYK Solutions",
  description:
    "Mobile-first websites for Australian small businesses, consultants and service providers. Clear scope, fast delivery and ongoing website support. Serving Australian businesses remotely.",
  alternates: {
    canonical: canonicalUrl,
    languages: {
      "en-AU": canonicalUrl,
      en: `${domain}/`,
      "x-default": `${domain}/`,
    },
  },
  openGraph: {
    title: "Small Business Web Design Australia | AYK Solutions",
    description:
      "Mobile-first websites for Australian small businesses, consultants and service providers.",
    url: canonicalUrl,
    locale: "en_AU",
  },
};

const included = [
  "Custom mobile-first responsive design",
  "Clear service and product presentation",
  "Enquiry and contact forms",
  "Google Maps and Google Business integration",
  "WhatsApp and email integration",
  "SEO-ready site structure",
  "Google Analytics setup",
  "Performance and security optimisation",
  "Transparent pricing — no hidden costs",
  "Ongoing support after launch",
];

const australianIndustries = [
  {
    name: "Tradies & Construction",
    desc: "Websites for builders, plumbers, electricians, landscapers and tradespeople with quote forms and service area coverage.",
  },
  {
    name: "Local Service Businesses",
    desc: "Professional websites for cleaning, pest control, removals, beauty services and other local service providers.",
  },
  {
    name: "Consultants & Professionals",
    desc: "Clean, credible websites for accountants, lawyers, coaches, financial advisers and business consultants.",
  },
  {
    name: "Health & Wellness",
    desc: "Booking-ready websites for physiotherapists, personal trainers, nutritionists and wellness practitioners.",
  },
  {
    name: "Retail & E-commerce",
    desc: "Online stores for Australian product-based businesses with Shopify or custom ecommerce solutions.",
  },
  {
    name: "Restaurants & Hospitality",
    desc: "Menu showcases, online reservations and Google Maps integration for cafes, restaurants and catering businesses.",
  },
];

const faqs = [
  {
    q: "How much does a small business website cost in Australia?",
    a: "Our pricing is transparent and based on project scope — the number of pages, features and integrations required. After a free introductory conversation, we provide a clear written proposal. Contact us for a tailored recommendation.",
  },
  {
    q: "Do you work with Australian businesses remotely?",
    a: "Yes. We serve Australian small businesses entirely remotely. All collaboration, reviews and approvals happen online. We communicate clearly across time zones and respond quickly to messages.",
  },
  {
    q: "How quickly can my Australian business website go live?",
    a: "Eligible standard business websites can launch in as little as seven days after content, scope and assets are confirmed. Larger projects typically take three to six weeks.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We frequently redesign outdated websites for Australian businesses — improving mobile usability, page speed, service clarity and overall professional presentation.",
  },
  {
    q: "Do you build Shopify stores for Australian businesses?",
    a: "Yes. We build and customise Shopify stores configured for Australian businesses, including local payment gateways and Australian shipping integration.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: "Small Business Web Design Australia | AYK Solutions",
      inLanguage: "en-AU",
      isPartOf: { "@id": `${domain}/#website` },
      breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: domain },
        { "@type": "ListItem", position: 2, name: "Australia", item: `${domain}/au/` },
        { "@type": "ListItem", position: 3, name: "Small Business Web Design", item: canonicalUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "Service",
      name: "Small Business Web Design Australia",
      provider: { "@id": `${domain}/#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      description:
        "Professional website design for Australian small businesses. Mobile-first, conversion-focused and delivered remotely with ongoing support.",
      url: canonicalUrl,
    },
  ],
};

export default function AustraliaWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="professional-shell" aria-labelledby="au-h1">
        <div className="absolute inset-0 brand-grid animate-grid-drift opacity-45 [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-14 md:pt-32 md:pb-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>Australia</li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium">Small Business Web Design</li>
            </ol>
          </nav>

          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary mb-4">
              <Globe size={12} aria-hidden="true" />
              Serving Australian Businesses Remotely
            </div>
            <h1
              id="au-h1"
              className="mt-2 max-w-4xl font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl"
            >
              Professional Websites for Australian Small Businesses
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              We design mobile-first, conversion-focused websites for Australian small businesses,
              tradies, consultants and service providers. Clear scope, transparent pricing and
              genuine support after launch — delivered remotely to businesses across Australia.
            </p>

            {/* Honest remote positioning */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground shadow-soft">
              <Globe size={12} className="text-primary" aria-hidden="true" />
              Serving Australian businesses remotely — all collaboration happens online
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact?market=australia"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-[#b8040b] hover:shadow-glow"
              >
                Get Your Free Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/32466317714?text=Hi%20AYK%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20website%20for%20my%20Australian%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366]/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
              >
                View Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="au-included-heading"
        className="border-t border-border/60 bg-background py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2
              id="au-included-heading"
              className="font-display text-2xl font-semibold text-foreground md:text-3xl"
            >
              What Is Included in Every Australian Business Website
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {included.map((item) => (
              <Reveal key={item}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <CheckCircle2
                    size={15}
                    className="mt-0.5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium leading-5 text-foreground/90">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="au-industries-heading"
        className="border-t border-border/60 bg-secondary/30 py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2
              id="au-industries-heading"
              className="font-display text-2xl font-semibold text-foreground md:text-3xl"
            >
              Websites for Australian Business Types
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              We design websites that match the specific needs and customer expectations of your
              industry.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {australianIndustries.map((ind) => (
              <Reveal key={ind.name}>
                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <h3 className="font-display font-semibold text-foreground text-sm">{ind.name}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-au-heading"
        className="border-t border-border/60 bg-background py-20"
      >
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2
              id="faq-au-heading"
              className="font-display text-2xl font-semibold text-foreground md:text-3xl"
            >
              Frequently Asked Questions — Web Design Australia
            </h2>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-card">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border-b border-border p-6 last:border-b-0 open:bg-secondary/35"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display font-semibold text-sm">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="au-cta-heading"
        className="border-t border-border/60 bg-secondary/30 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-8 rounded-[1.75rem] border border-border bg-card p-8 text-center shadow-card md:flex-row md:text-left">
              <div>
                <h2
                  id="au-cta-heading"
                  className="font-display text-xl font-semibold text-foreground"
                >
                  Ready to Launch Your Australian Business Website?
                </h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                  Get in touch for a clear recommendation and transparent pricing. We work entirely
                  remotely with Australian businesses — fast, reliable and personal.
                </p>
                <div className="mt-4 flex flex-col gap-1 text-xs text-muted-foreground">
                  <a
                    href={`tel:${businessIdentity.phonePlain}`}
                    className="hover:text-primary transition"
                  >
                    {businessIdentity.phone}
                  </a>
                  <a
                    href={`mailto:${businessIdentity.email}`}
                    className="hover:text-primary transition"
                  >
                    {businessIdentity.email}
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link
                  href="/contact?market=australia"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-[#b8040b]"
                >
                  Get a Free Quote <ArrowRight size={15} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
