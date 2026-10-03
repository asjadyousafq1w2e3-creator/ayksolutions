import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Web Design Insights for Small Businesses | Novalix",
  description:
    "Practical guides on website design, SEO, ecommerce and online presence for small businesses in Belgium, Saudi Arabia, Europe and Australia.",
  alternates: {
    canonical: "https://novalix.tech/insights/",
  },
  openGraph: {
    title: "Web Design Insights for Small Businesses | Novalix",
    description:
      "Practical guides on website design, SEO and online presence for small businesses.",
  },
};

const upcomingArticles = [
  {
    category: "Website Design",
    title: "How Much Does a Small Business Website Cost in Belgium?",
    description:
      "A clear breakdown of what affects website pricing in Belgium — from a simple landing page to a full ecommerce store — with what to look out for.",
    readTime: "7 min read",
    comingSoon: true,
  },
  {
    category: "SEO",
    title: "How to Get Your Belgian Business Found on Google",
    description:
      "An honest guide to local and international SEO for small businesses in Belgium — what to prioritise, what to avoid and realistic timelines.",
    readTime: "10 min read",
    comingSoon: true,
  },
  {
    category: "E-commerce",
    title: "Shopify vs. Custom Ecommerce: What's Right for Your Business?",
    description:
      "A practical comparison of Shopify and custom-built online stores — comparing cost, flexibility, maintenance and long-term value.",
    readTime: "8 min read",
    comingSoon: true,
  },
  {
    category: "Website Design",
    title: "Five Signs Your Website Is Costing Your Business Customers",
    description:
      "Common website problems that drive potential customers away — and practical ways to fix them without a full rebuild.",
    readTime: "6 min read",
    comingSoon: true,
  },
  {
    category: "Web Apps",
    title: "When Does a Small Business Need a Web Application?",
    description:
      "How to decide if your business needs a website, a web application, or both — with clear examples and realistic cost ranges.",
    readTime: "8 min read",
    comingSoon: true,
  },
  {
    category: "Saudi Arabia",
    title: "Building an Arabic and English Website for the Saudi Market",
    description:
      "A practical guide to bilingual website design for businesses serving the Saudi Arabia market — covering RTL, Arabic SEO and user experience.",
    readTime: "9 min read",
    comingSoon: true,
  },
];

const topics = [
  "Website Design",
  "SEO",
  "E-commerce",
  "Web Applications",
  "Belgium",
  "Saudi Arabia",
  "Australia",
  "Business Automation",
];

export default function InsightsPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="professional-shell" aria-labelledby="insights-h1">
        <div className="absolute inset-0 brand-grid animate-grid-drift opacity-45 [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-14 md:pt-32 md:pb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary mb-4">
              <Sparkles size={12} aria-hidden="true" />
              Novalix Insights
            </div>
            <h1
              id="insights-h1"
              className="mt-2 max-w-4xl font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl"
            >
              Web Design Insights for Small Businesses
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Practical guides on website design, SEO, ecommerce and online presence — written for
              small business owners in Belgium, Saudi Arabia, Europe and Australia. No jargon, no
              filler. Just honest, actionable information.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── TOPICS ────────────────────────────────────────────────────────── */}
      <section
        aria-label="Content topics"
        className="border-t border-border/60 bg-secondary/30 py-8"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground shadow-soft"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMING SOON ARTICLES ──────────────────────────────────────────── */}
      <section
        aria-labelledby="articles-heading"
        className="border-t border-border/60 bg-background py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2
              id="articles-heading"
              className="font-display text-2xl font-semibold text-foreground"
            >
              Upcoming Articles
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our first articles are being written. Subscribe below to be notified when they
              publish.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {upcomingArticles.map((article, i) => (
              <Reveal key={article.title} delay={i * 0.06}>
                <article className="group relative flex flex-col h-full rounded-[1.5rem] border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/30">
                  {article.comingSoon && (
                    <span className="absolute top-4 right-4 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700">
                      Coming Soon
                    </span>
                  )}
                  <div className="mb-3">
                    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-base leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-muted-foreground flex-1">
                    {article.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock size={12} aria-hidden="true" />
                    {article.readTime}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER SIGN-UP ────────────────────────────────────────────── */}
      <section
        aria-labelledby="notify-heading"
        className="border-t border-border/60 bg-secondary/30 py-20"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <BookOpen size={32} className="mx-auto text-primary mb-4" aria-hidden="true" />
            <h2 id="notify-heading" className="font-display text-2xl font-semibold text-foreground">
              Get Notified When New Articles Publish
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We publish practical guides on web design, SEO and online business for small
              businesses in Belgium, Saudi Arabia, Europe and Australia. Contact us to be added to
              our notification list.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-[#b8040b]"
              >
                Contact Us <ArrowRight size={15} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
              >
                Back to Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
