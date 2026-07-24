import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, Sparkles, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { businessIdentity } from "@/data/businessIdentity";

const domain = "https://ayksolutions.com";
const canonicalUrl = `${domain}/be/en/web-design-belgium/`;

export const metadata: Metadata = {
  title: "Web Design Belgium for Small Businesses | AYK Solutions",
  description:
    "Professional small-business websites in Belgium with mobile-first design, clear pricing and fast delivery. Build trust and launch your online presence with AYK Solutions.",
  alternates: {
    canonical: canonicalUrl,
    languages: {
      "en-BE": canonicalUrl,
      "fr-BE": `${domain}/be/fr/creation-site-web-belgique/`,
      "nl-BE": `${domain}/be/nl/webdesign-belgie/`,
      en: `${domain}/`,
      "x-default": `${domain}/`,
    },
  },
  openGraph: {
    title: "Web Design Belgium for Small Businesses | AYK Solutions",
    description:
      "Professional small-business websites in Belgium with mobile-first design, clear pricing and fast delivery.",
    url: canonicalUrl,
    locale: "en_BE",
  },
};

const included = [
  "Custom mobile-first responsive design",
  "Clear service and product presentation",
  "WhatsApp and email contact integration",
  "Enquiry and booking forms",
  "Search-engine-ready site structure",
  "Google Analytics setup",
  "Performance and security optimisation",
  "Post-launch support",
  "Transparent pricing — no hidden costs",
  "Professional business email guidance",
];

const belCities = [
  { city: "Brussels", fr: "Bruxelles", nl: "Brussel" },
  { city: "Antwerp", fr: "Anvers", nl: "Antwerpen" },
  { city: "Ghent", fr: "Gand", nl: "Gent" },
  { city: "Bruges", fr: "Bruges", nl: "Brugge" },
  { city: "Leuven", fr: "Louvain", nl: "Leuven" },
  { city: "Liège", fr: "Liège", nl: "Luik" },
  { city: "Charleroi", fr: "Charleroi", nl: "Charleroi" },
  { city: "Namur", fr: "Namur", nl: "Namen" },
  { city: "Mechelen", fr: "Malines", nl: "Mechelen" },
  { city: "Hasselt", fr: "Hasselt", nl: "Hasselt" },
];

const faqs = [
  {
    q: "How much does a small business website cost in Belgium?",
    a: "Pricing depends on the scope, number of pages, required features and integrations. After a free discovery conversation, we provide a clear written proposal with no hidden costs. Contact us to receive a tailored recommendation.",
  },
  {
    q: "How quickly can you build a website for my Belgian business?",
    a: "Eligible standard business websites can launch in as little as seven days after content, scope and assets are confirmed. Larger projects with custom features typically take three to six weeks.",
  },
  {
    q: "Can you build websites in French and Dutch for Belgian businesses?",
    a: "Yes. We can build multilingual websites in English, French and Dutch to serve all three Belgian language communities.",
  },
  {
    q: "Do you work with businesses across all of Belgium?",
    a: "We work remotely with businesses across Belgium — Brussels, Antwerp, Ghent, Liège, Charleroi, Bruges and beyond. All communication, reviews and approvals happen online.",
  },
  {
    q: "What types of businesses do you work with in Belgium?",
    a: "We work with startups, service businesses, restaurants, retail shops, clinics, consultants, construction companies, beauty businesses and any small to medium enterprise that needs a professional digital presence.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: "Web Design Belgium for Small Businesses | AYK Solutions",
      description:
        "Professional small-business websites in Belgium with mobile-first design, clear pricing and fast delivery.",
      inLanguage: "en-BE",
      isPartOf: { "@id": `${domain}/#website` },
      breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: domain },
        { "@type": "ListItem", position: 2, name: "Belgium", item: `${domain}/be/` },
        { "@type": "ListItem", position: 3, name: "Web Design Belgium", item: canonicalUrl },
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
      name: "Web Design Belgium",
      provider: { "@id": `${domain}/#organization` },
      areaServed: { "@type": "Country", name: "Belgium" },
      description:
        "Professional website design and development for small businesses in Belgium. Mobile-first, conversion-focused and delivered fast.",
      url: canonicalUrl,
    },
  ],
};

export default function WebDesignBelgiumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="professional-shell" aria-labelledby="be-en-h1">
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
              <li>
                <span>Belgium</span>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium">Web Design</li>
            </ol>
          </nav>

          {/* Language switcher */}
          <div className="mb-8 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
              🇧🇪 English
            </span>
            <Link
              href="/be/fr/creation-site-web-belgique/"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] font-semibold text-muted-foreground hover:border-primary/40 hover:text-primary transition"
            >
              🇧🇪 Français
            </Link>
            <Link
              href="/be/nl/webdesign-belgie/"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] font-semibold text-muted-foreground hover:border-primary/40 hover:text-primary transition"
            >
              🇧🇪 Nederlands
            </Link>
          </div>

          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary mb-4">
              <Sparkles size={12} aria-hidden="true" />
              Web Design Belgium
            </div>
            <h1
              id="be-en-h1"
              className="mt-2 max-w-4xl font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl"
            >
              Professional Web Design for Small Businesses in Belgium
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              We help Belgian startups, local businesses and service providers build credible,
              mobile-friendly websites that attract enquiries and present their services
              professionally. Fast delivery. Transparent pricing. Genuine support after launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?market=belgium"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-[#b8040b] hover:shadow-glow"
              >
                Get Your Free Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/32466317714?text=Hi%20AYK%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project%20in%20Belgium."
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

      {/* ── WHAT'S INCLUDED ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="included-heading"
        className="border-t border-border/60 bg-background py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2
              id="included-heading"
              className="font-display text-2xl font-semibold text-foreground md:text-3xl"
            >
              What Is Included in Our Belgium Website Service
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Every website we deliver is designed around your business goals — not a generic
              template.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {included.map((item) => (
              <Reveal key={item}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <CheckCircle2
                    size={16}
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

      {/* ── IS YOUR WEBSITE WORKING? ───────────────────────────────────────── */}
      <section
        aria-labelledby="problem-be-heading"
        className="border-t border-border/60 bg-secondary/30 py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2
              id="problem-be-heading"
              className="font-display text-2xl font-semibold text-foreground md:text-3xl max-w-3xl"
            >
              Is Your Current Website Losing Potential Customers?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Visitors make quick decisions about a business. If your website is slow, difficult to
              use on mobile, outdated or unclear about what you offer, potential customers may leave
              before contacting you.
            </p>
            <div className="mt-8 rounded-[1.75rem] border border-primary/20 bg-primary/5 p-8">
              <h3 className="font-display text-xl font-semibold text-foreground">
                We Turn Your Website Into a Business Asset
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                AYK Solutions creates websites that present your Belgian business professionally,
                explain your services clearly and guide visitors toward enquiries, bookings and
                purchases.
              </p>
              <Link
                href="/contact?market=belgium"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-[#b8040b]"
              >
                Request a Website Quote <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CITY COVERAGE ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="cities-heading"
        className="border-t border-border/60 bg-background py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2
              id="cities-heading"
              className="font-display text-2xl font-semibold text-foreground md:text-3xl"
            >
              Serving Small Businesses Across Belgium
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              We work remotely with businesses throughout Belgium. No matter where your business is
              located, you can access the same quality website service.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {belCities.map(({ city, fr, nl }) => (
              <div
                key={city}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft"
              >
                <MapPin size={13} className="text-primary" aria-hidden="true" />
                {city}
                <span className="text-muted-foreground text-xs">
                  / {fr} / {nl}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="related-services-heading"
        className="border-t border-border/60 bg-secondary/30 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2
              id="related-services-heading"
              className="font-display text-xl font-semibold text-foreground mb-6"
            >
              Website Services for Belgian Businesses
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Small Business Websites", href: "/services/custom-websites/" },
                { label: "Website Redesign", href: "/services/wordpress/" },
                { label: "Shopify & E-commerce", href: "/services/shopify-ecommerce/" },
                { label: "Web Applications", href: "/services/web-apps/" },
                { label: "Website Maintenance", href: "/services/custom-software/" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-soft transition hover:border-primary/40 hover:text-primary"
                >
                  {label} <ArrowRight size={12} />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-be-heading"
        className="border-t border-border/60 bg-background py-20"
      >
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2
              id="faq-be-heading"
              className="font-display text-2xl font-semibold text-foreground md:text-3xl"
            >
              Frequently Asked Questions — Web Design Belgium
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

      {/* ── CONTACT STRIP ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="be-contact-heading"
        className="border-t border-border/60 bg-secondary/30 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-8 rounded-[1.75rem] border border-border bg-card p-8 text-center shadow-card md:flex-row md:text-left">
              <div>
                <h2
                  id="be-contact-heading"
                  className="font-display text-xl font-semibold text-foreground"
                >
                  Ready to Discuss Your Website Project?
                </h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                  Contact us to receive a clear recommendation and transparent pricing for your
                  Belgian business website.
                </p>
                <div className="mt-4 flex flex-col gap-1 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {businessIdentity.addressLabel}
                  </span>
                  <span>
                    {businessIdentity.streetAddress}, {businessIdentity.postalCode}{" "}
                    {businessIdentity.cityFr}, {businessIdentity.country}
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
                  href="/contact?market=belgium"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-[#b8040b]"
                >
                  Get a Free Consultation <ArrowRight size={15} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
