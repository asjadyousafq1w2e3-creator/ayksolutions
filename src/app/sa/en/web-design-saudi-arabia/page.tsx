import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { businessIdentity } from "@/data/businessIdentity";

const domain = "https://novalix.tech";
const canonicalUrl = `${domain}/sa/en/web-design-saudi-arabia/`;

export const metadata: Metadata = {
  title: "Web Design Saudi Arabia for Growing Businesses | Novalix",
  description:
    "Launch a fast, modern and bilingual-ready business website in Saudi Arabia. Novalix creates websites that build trust and generate customer enquiries.",
  alternates: {
    canonical: canonicalUrl,
    languages: {
      "en-SA": canonicalUrl,
      "ar-SA": `${domain}/sa/ar/`,
      en: `${domain}/`,
      "x-default": `${domain}/`,
    },
  },
  openGraph: {
    title: "Web Design Saudi Arabia for Growing Businesses | Novalix",
    description:
      "Fast, modern and bilingual-ready business websites for companies in Saudi Arabia.",
    url: canonicalUrl,
    locale: "en_SA",
  },
};

const included = [
  "Custom mobile-first responsive design",
  "Arabic and English bilingual capability",
  "Right-to-left (RTL) layout support",
  "WhatsApp and email integration",
  "Enquiry and booking forms",
  "Search-engine-ready site structure",
  "Google Analytics setup",
  "Ecommerce and payment integration",
  "Performance and security optimisation",
  "Post-launch support",
];

const saudiCities = [
  "Riyadh",
  "Jeddah",
  "Mecca",
  "Medina",
  "Dammam",
  "Khobar",
  "Dhahran",
  "Tabuk",
  "Abha",
  "Najran",
];

const saudiSectors = [
  {
    name: "Retail & E-commerce",
    desc: "Online stores and product catalogues optimised for Saudi shoppers.",
  },
  { name: "Real Estate", desc: "Property listings, virtual tours and agent enquiry systems." },
  {
    name: "Restaurants & Hospitality",
    desc: "Menu showcases, online reservations and WhatsApp ordering.",
  },
  {
    name: "Professional Services",
    desc: "Law firms, consultancies, clinics and financial advisors.",
  },
  {
    name: "Construction & Contracting",
    desc: "Project galleries, certifications and quotation forms.",
  },
  { name: "Education & Training", desc: "Course listings, enrollment forms and student portals." },
];

const faqs = [
  {
    q: "Do you build Arabic and English bilingual websites for Saudi businesses?",
    a: "Yes. We build fully bilingual websites with proper right-to-left (RTL) Arabic layout, Arabic typography and Arabic metadata. Both English and Arabic versions are search-engine optimised.",
  },
  {
    q: "How much does a business website cost in Saudi Arabia?",
    a: "Pricing depends on the number of pages, required features, language versions and integrations. After a free discovery conversation, we provide a clear written proposal with no hidden charges.",
  },
  {
    q: "How quickly can you deliver a website for a Saudi business?",
    a: "Eligible standard business websites can launch in as little as seven days after content, scope and required assets are confirmed. Larger or multilingual projects typically take three to six weeks.",
  },
  {
    q: "Can you integrate Saudi payment gateways and ecommerce features?",
    a: "Yes. We can integrate local and international payment solutions, Shopify, and custom ecommerce functionality suitable for the Saudi market.",
  },
  {
    q: "Do you work remotely with businesses across Saudi Arabia?",
    a: "Yes. We work with businesses in Riyadh, Jeddah, Dammam, Khobar and across all regions of Saudi Arabia. All collaboration, reviews and approvals happen online.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: "Web Design Saudi Arabia for Growing Businesses | Novalix",
      inLanguage: "en-SA",
      isPartOf: { "@id": `${domain}/#website` },
      breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: domain },
        { "@type": "ListItem", position: 2, name: "Saudi Arabia", item: `${domain}/sa/` },
        { "@type": "ListItem", position: 3, name: "Web Design Saudi Arabia", item: canonicalUrl },
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
      name: "Web Design Saudi Arabia",
      provider: { "@id": `${domain}/#organization` },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      description:
        "Professional website design and development for businesses in Saudi Arabia. Bilingual Arabic-English, mobile-first and conversion-focused.",
      url: canonicalUrl,
    },
  ],
};

export default function WebDesignSaudiArabiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="professional-shell" aria-labelledby="sa-en-h1">
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
              <li>Saudi Arabia</li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium">Web Design</li>
            </ol>
          </nav>

          {/* Language switcher */}
          <div className="mb-8 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
              🇸🇦 English
            </span>
            <Link
              href="/sa/ar/"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] font-semibold text-muted-foreground hover:border-primary/40 hover:text-primary transition"
            >
              🇸🇦 عربي
            </Link>
          </div>

          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary mb-4">
              <Sparkles size={12} aria-hidden="true" />
              Web Design Saudi Arabia
            </div>
            <h1
              id="sa-en-h1"
              className="mt-2 max-w-4xl font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl"
            >
              Professional Websites for Businesses in Saudi Arabia
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              We build fast, modern and bilingual-ready business websites for growing companies in
              Saudi Arabia. Arabic and English capability, mobile-first design, and genuine support
              after launch — delivered remotely to businesses across the Kingdom.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?market=saudi-arabia"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-[#b8040b] hover:shadow-glow"
              >
                Get Your Free Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/32466317714?text=Hi%20Novalix%2C%20I%27d%20like%20to%20discuss%20a%20website%20project%20for%20my%20business%20in%20Saudi%20Arabia."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366]/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
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

      {/* ── BILINGUAL HIGHLIGHT ────────────────────────────────────────────── */}
      <section
        aria-labelledby="bilingual-heading"
        className="border-t border-border/60 bg-gradient-to-br from-primary/5 to-background py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary mb-4">
                  <Globe size={12} aria-hidden="true" />
                  Bilingual Arabic–English
                </div>
                <h2
                  id="bilingual-heading"
                  className="font-display text-2xl font-semibold text-foreground md:text-3xl"
                >
                  Arabic and English Websites for the Saudi Market
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  We build fully bilingual websites with proper right-to-left Arabic layout, Arabic
                  typography and Arabic metadata. Reach your Saudi audience in both languages — each
                  version professionally designed and search-engine optimised.
                </p>
                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                  <div className="text-right" dir="rtl">
                    <p className="font-semibold text-foreground text-sm">
                      عربي · نص من اليمين إلى اليسار
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      تصميم احترافي للمواقع الإلكترونية
                    </p>
                  </div>
                  <div className="w-px h-8 bg-border" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">English · Left to right</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Professional website design
                    </p>
                  </div>
                </div>
                <Link
                  href="/sa/ar/"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  lang="ar"
                  dir="rtl"
                >
                  عرض الصفحة العربية <ArrowRight size={15} className="rotate-180" />
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
                  >
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-medium leading-5 text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTORS ────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="sectors-heading"
        className="border-t border-border/60 bg-background py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2
              id="sectors-heading"
              className="font-display text-2xl font-semibold text-foreground md:text-3xl"
            >
              Industries We Serve in Saudi Arabia
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              We work with businesses across a wide range of sectors throughout the Kingdom.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {saudiSectors.map((sector) => (
              <Reveal key={sector.name}>
                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <h3 className="font-display font-semibold text-foreground text-sm">
                    {sector.name}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{sector.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITY COVERAGE ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="sa-cities-heading"
        className="border-t border-border/60 bg-secondary/30 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2
              id="sa-cities-heading"
              className="font-display text-xl font-semibold text-foreground mb-4"
            >
              Serving Businesses Across Saudi Arabia
            </h2>
            <div className="flex flex-wrap gap-3">
              {saudiCities.map((city) => (
                <div
                  key={city}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft"
                >
                  {city}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              We work remotely with businesses in all regions of Saudi Arabia. No travel required.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-sa-heading"
        className="border-t border-border/60 bg-background py-20"
      >
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2
              id="faq-sa-heading"
              className="font-display text-2xl font-semibold text-foreground md:text-3xl"
            >
              Frequently Asked Questions — Web Design Saudi Arabia
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
        aria-labelledby="sa-cta-heading"
        className="border-t border-border/60 bg-secondary/30 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-8 rounded-[1.75rem] border border-border bg-card p-8 text-center shadow-card md:flex-row md:text-left">
              <div>
                <h2
                  id="sa-cta-heading"
                  className="font-display text-xl font-semibold text-foreground"
                >
                  Ready to Launch Your Saudi Business Website?
                </h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                  Contact us for a clear recommendation, transparent pricing and fast delivery for
                  your Saudi Arabia website project.
                </p>
                <div className="mt-4 flex flex-col gap-1 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {businessIdentity.addressLabel}
                  </span>
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
                  href="/contact?market=saudi-arabia"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-[#b8040b]"
                >
                  Request a Free Consultation <ArrowRight size={15} />
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
