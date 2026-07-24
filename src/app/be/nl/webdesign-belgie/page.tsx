import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { businessIdentity } from "@/data/businessIdentity";

const domain = "https://ayksolutions.com";
const canonicalUrl = `${domain}/be/nl/webdesign-belgie/`;

export const metadata: Metadata = {
  title: "Webdesign België voor Kleine Bedrijven | AYK Solutions",
  description:
    "Professioneel webdesign voor kleine bedrijven in België. Mobiel-first design, transparante prijzen en snelle oplevering. Start uw online aanwezigheid met AYK Solutions.",
  alternates: {
    canonical: canonicalUrl,
    languages: {
      "nl-BE": canonicalUrl,
      "en-BE": `${domain}/be/en/web-design-belgium/`,
      "fr-BE": `${domain}/be/fr/creation-site-web-belgique/`,
      en: `${domain}/`,
      "x-default": `${domain}/`,
    },
  },
  openGraph: {
    title: "Webdesign België voor Kleine Bedrijven | AYK Solutions",
    description:
      "Professioneel webdesign voor kleine bedrijven in België. Mobiel-first design, transparante prijzen en snelle oplevering.",
    url: canonicalUrl,
    locale: "nl_BE",
  },
};

const inbegrepen = [
  "Responsief mobiel-first design",
  "Duidelijke presentatie van uw diensten",
  "WhatsApp- en e-mailintegratie",
  "Contact- en reservatieformulieren",
  "Zoekmachineoptimalisatie (SEO)",
  "Google Analytics-configuratie",
  "Prestatie- en beveiligingsoptimalisatie",
  "Ondersteuning na lancering",
  "Transparante prijzen — geen verborgen kosten",
  "Website beschikbaar in Nederlands, Frans en Engels",
];

const steden = [
  "Brussel",
  "Antwerpen",
  "Gent",
  "Brugge",
  "Leuven",
  "Luik",
  "Charleroi",
  "Namen",
  "Mechelen",
  "Hasselt",
];

const faqs = [
  {
    q: "Hoeveel kost een website laten maken in België?",
    a: "De prijs hangt af van de omvang van het project, het aantal pagina's en de gewenste functies. Na een gratis kennismakingsgesprek ontvangt u een duidelijk voorstel zonder verborgen kosten.",
  },
  {
    q: "Hoe snel kan mijn website online zijn?",
    a: "Standaard bedrijfswebsites kunnen in slechts zeven werkdagen live gaan, nadat de inhoud, scope en benodigde bestanden zijn goedgekeurd. Complexere projecten nemen doorgaans drie tot zes weken in beslag.",
  },
  {
    q: "Maken jullie ook meertalige websites voor Belgische bedrijven?",
    a: "Ja. We bouwen meertalige websites in het Nederlands, Frans en Engels voor de drie Belgische taalgemeenschappen.",
  },
  {
    q: "Werken jullie ook buiten Brussel?",
    a: "Wij werken op afstand samen met bedrijven door heel België — Brussel, Antwerpen, Gent, Luik, Charleroi, Brugge en meer. Alle communicatie en goedkeuringen verlopen online.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: "Webdesign België voor Kleine Bedrijven | AYK Solutions",
      inLanguage: "nl-BE",
      isPartOf: { "@id": `${domain}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: domain },
        { "@type": "ListItem", position: 2, name: "België", item: `${domain}/be/` },
        { "@type": "ListItem", position: 3, name: "Webdesign België", item: canonicalUrl },
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
  ],
};

export default function WebdesignBelgiePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="professional-shell" aria-labelledby="be-nl-h1">
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
              <li>België</li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium">Webdesign</li>
            </ol>
          </nav>

          {/* Taalkeuze */}
          <div className="mb-8 flex flex-wrap gap-2">
            <Link
              href="/be/en/web-design-belgium/"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] font-semibold text-muted-foreground hover:border-primary/40 hover:text-primary transition"
            >
              🇧🇪 English
            </Link>
            <Link
              href="/be/fr/creation-site-web-belgique/"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] font-semibold text-muted-foreground hover:border-primary/40 hover:text-primary transition"
            >
              🇧🇪 Français
            </Link>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
              🇧🇪 Nederlands
            </span>
          </div>

          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary mb-4">
              <Sparkles size={12} aria-hidden="true" />
              Webdesign België
            </div>
            <h1
              id="be-nl-h1"
              className="mt-2 max-w-4xl font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl"
            >
              Professioneel webdesign voor kleine bedrijven in België
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Wij helpen Belgische startups, lokale ondernemers en dienstverleners een
              professionele, mobiel-vriendelijke website te bouwen die vertrouwen wekt en meer
              aanvragen genereert. Snelle oplevering. Transparante prijs. Ondersteuning na
              lancering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?market=belgium"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-[#b8040b] hover:shadow-glow"
              >
                Gratis consult aanvragen <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/32466317714?text=Hallo%20AYK%20Solutions%2C%20ik%20wil%20graag%20een%20website%20laten%20maken%20voor%20mijn%20bedrijf%20in%20Belgi%C3%AB."
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
                Bekijk ons werk
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── INBEGREPEN ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="inbegrepen-heading"
        className="border-t border-border/60 bg-background py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2
              id="inbegrepen-heading"
              className="font-display text-2xl font-semibold text-foreground md:text-3xl"
            >
              Wat is inbegrepen in onze websitedienst in België
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Elke website die wij opleveren, is ontworpen rond uw bedrijfsdoelen — geen generieke
              sjablonen.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {inbegrepen.map((item) => (
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

      {/* ── STEDEN ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="steden-heading"
        className="border-t border-border/60 bg-secondary/30 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2
              id="steden-heading"
              className="font-display text-xl font-semibold text-foreground mb-6"
            >
              Wij werken samen met bedrijven door heel België
            </h2>
            <div className="flex flex-wrap gap-3">
              {steden.map((stad) => (
                <div
                  key={stad}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft"
                >
                  <MapPin size={13} className="text-primary" aria-hidden="true" />
                  {stad}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-nl-heading"
        className="border-t border-border/60 bg-background py-20"
      >
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2
              id="faq-nl-heading"
              className="font-display text-2xl font-semibold text-foreground md:text-3xl"
            >
              Veelgestelde vragen — Webdesign België
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

      {/* ── CTA CONTACT ───────────────────────────────────────────────────── */}
      <section
        aria-labelledby="nl-contact-heading"
        className="border-t border-border/60 bg-secondary/30 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-8 rounded-[1.75rem] border border-border bg-card p-8 text-center shadow-card md:flex-row md:text-left">
              <div>
                <h2
                  id="nl-contact-heading"
                  className="font-display text-xl font-semibold text-foreground"
                >
                  Klaar om uw websiteproject te bespreken?
                </h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                  Neem contact op voor een duidelijke aanbeveling en transparante prijsopgave voor
                  uw Belgisch bedrijf.
                </p>
                <div className="mt-4 flex flex-col gap-1 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Zakelijk contact in België</span>
                  <span>
                    {businessIdentity.streetAddress}, {businessIdentity.postalCode}{" "}
                    {businessIdentity.cityNl}, {businessIdentity.country}
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
                  Gratis consult aanvragen <ArrowRight size={15} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  Bekijk ons werk
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
