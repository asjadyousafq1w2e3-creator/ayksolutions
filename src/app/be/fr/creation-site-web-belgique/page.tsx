import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { businessIdentity } from "@/data/businessIdentity";

const domain = "https://ayksolutions.com";
const canonicalUrl = `${domain}/be/fr/creation-site-web-belgique/`;

export const metadata: Metadata = {
  title: "Création Site Web Belgique pour Petites Entreprises | AYK Solutions",
  description:
    "Création de sites web professionnels pour petites entreprises en Belgique. Design responsive, livraison rapide et tarifs transparents. Lancez votre présence en ligne avec AYK Solutions.",
  alternates: {
    canonical: canonicalUrl,
    languages: {
      "fr-BE": canonicalUrl,
      "en-BE": `${domain}/be/en/web-design-belgium/`,
      "nl-BE": `${domain}/be/nl/webdesign-belgie/`,
      en: `${domain}/`,
      "x-default": `${domain}/`,
    },
  },
  openGraph: {
    title: "Création Site Web Belgique pour Petites Entreprises | AYK Solutions",
    description: "Création de sites web professionnels pour petites entreprises en Belgique.",
    url: canonicalUrl,
    locale: "fr_BE",
  },
};

const inclus = [
  "Design responsive et mobile-first",
  "Présentation claire de vos services",
  "Intégration WhatsApp et email",
  "Formulaires de contact et de réservation",
  "Structure optimisée pour les moteurs de recherche",
  "Configuration Google Analytics",
  "Optimisation des performances et sécurité",
  "Assistance après la mise en ligne",
  "Tarification transparente — sans frais cachés",
  "Contenu disponible en français, néerlandais et anglais",
];

const villes = [
  "Bruxelles",
  "Anvers",
  "Gand",
  "Bruges",
  "Louvain",
  "Liège",
  "Charleroi",
  "Namur",
  "Malines",
  "Hasselt",
];

const faqs = [
  {
    q: "Combien coûte la création d'un site web pour une petite entreprise en Belgique ?",
    a: "Le tarif dépend de la portée du projet, du nombre de pages et des fonctionnalités souhaitées. Après un entretien de découverte gratuit, nous vous remettons une proposition claire et détaillée, sans frais cachés.",
  },
  {
    q: "En combien de temps peut-on lancer mon site web en Belgique ?",
    a: "Les sites vitrine standard peuvent être mis en ligne en aussi peu que sept jours ouvrables, une fois le contenu, la portée et les ressources validés. Les projets plus complexes prennent généralement entre trois et six semaines.",
  },
  {
    q: "Créez-vous des sites web bilingues ou trilingues pour les entreprises belges ?",
    a: "Oui. Nous concevons des sites web multilingues en français, néerlandais et anglais pour servir les trois communautés linguistiques de Belgique.",
  },
  {
    q: "Travaillez-vous avec des entreprises situées en dehors de Bruxelles ?",
    a: "Nous collaborons à distance avec des entreprises dans toute la Belgique — Bruxelles, Anvers, Gand, Liège, Charleroi, Bruges et ailleurs. Toutes les communications et validations se font en ligne.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: "Création Site Web Belgique pour Petites Entreprises | AYK Solutions",
      description:
        "Création de sites web professionnels pour petites entreprises en Belgique. Design responsive, livraison rapide et tarifs transparents.",
      inLanguage: "fr-BE",
      isPartOf: { "@id": `${domain}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: domain },
        { "@type": "ListItem", position: 2, name: "Belgique", item: `${domain}/be/` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Création site web Belgique",
          item: canonicalUrl,
        },
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

export default function CreationSiteWebBelgiquePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="professional-shell" aria-labelledby="be-fr-h1">
        <div className="absolute inset-0 brand-grid animate-grid-drift opacity-45 [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-14 md:pt-32 md:pb-20">
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span>Belgique</span>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium">Création site web</li>
            </ol>
          </nav>

          {/* Sélecteur de langue */}
          <div className="mb-8 flex flex-wrap gap-2">
            <Link
              href="/be/en/web-design-belgium/"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] font-semibold text-muted-foreground hover:border-primary/40 hover:text-primary transition"
            >
              🇧🇪 English
            </Link>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
              🇧🇪 Français
            </span>
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
              Création site web Belgique
            </div>
            <h1
              id="be-fr-h1"
              className="mt-2 max-w-4xl font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl"
            >
              Création de site web professionnel pour les entreprises en Belgique
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Nous aidons les startups, commerces locaux et prestataires de services belges à se
              doter d'un site web crédible, responsive et optimisé pour attirer des contacts
              qualifiés. Livraison rapide. Tarification claire. Accompagnement après la mise en
              ligne.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?market=belgium"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-[#b8040b] hover:shadow-glow"
              >
                Obtenir une consultation gratuite <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/32466317714?text=Bonjour%20AYK%20Solutions%2C%20je%20souhaite%20discuter%20d%27un%20projet%20de%20site%20web%20en%20Belgique."
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
                Voir nos réalisations
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CE QUI EST INCLUS ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="inclus-heading"
        className="border-t border-border/60 bg-background py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2
              id="inclus-heading"
              className="font-display text-2xl font-semibold text-foreground md:text-3xl"
            >
              Ce qui est inclus dans notre service de création de site web en Belgique
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Chaque site que nous livrons est conçu autour de vos objectifs commerciaux — pas d'un
              modèle générique.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {inclus.map((item) => (
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

      {/* ── VILLES DESSERVIES ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="villes-heading"
        className="border-t border-border/60 bg-secondary/30 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2
              id="villes-heading"
              className="font-display text-xl font-semibold text-foreground mb-6"
            >
              Nous accompagnons les entreprises dans toute la Belgique
            </h2>
            <div className="flex flex-wrap gap-3">
              {villes.map((ville) => (
                <div
                  key={ville}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft"
                >
                  <MapPin size={13} className="text-primary" aria-hidden="true" />
                  {ville}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-fr-heading"
        className="border-t border-border/60 bg-background py-20"
      >
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2
              id="faq-fr-heading"
              className="font-display text-2xl font-semibold text-foreground md:text-3xl"
            >
              Questions fréquentes — Création site web Belgique
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
        aria-labelledby="fr-contact-heading"
        className="border-t border-border/60 bg-secondary/30 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-8 rounded-[1.75rem] border border-border bg-card p-8 text-center shadow-card md:flex-row md:text-left">
              <div>
                <h2
                  id="fr-contact-heading"
                  className="font-display text-xl font-semibold text-foreground"
                >
                  Prêt à lancer votre projet de site web ?
                </h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                  Contactez-nous pour recevoir une recommandation claire et une tarification
                  transparente pour votre entreprise en Belgique.
                </p>
                <div className="mt-4 flex flex-col gap-1 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Contact commercial en Belgique
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
                  Consultation gratuite <ArrowRight size={15} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  Voir nos réalisations
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
