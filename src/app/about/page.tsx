import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Globe,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Novalix",
  description: "Novalix builds POS systems, cloud inventory and custom web systems.",
  alternates: {
    canonical: "https://www.novalix.tech/about/",
  },
  openGraph: {
    images: ["/opengraph-image"],
    title: "About Novalix",
    description: "Practical POS, inventory and web systems for growing businesses.",
    url: "https://www.novalix.tech/about/",
  },
};

const values = [
  {
    icon: Target,
    title: "Outcome-led",
    body: "We connect design and engineering decisions to business goals, user needs, and measurable product results.",
  },
  {
    icon: BadgeCheck,
    title: "Senior ownership",
    body: "You work with people who can make product, architecture, and delivery decisions without hiding behind layers.",
  },
  {
    icon: Sparkles,
    title: "High craft",
    body: "Interfaces should feel refined, fast, accessible, and maintainable after your team starts using them.",
  },
  {
    icon: ShieldCheck,
    title: "Built responsibly",
    body: "We care about documentation, deployment, security basics, analytics, and handover as much as launch day.",
  },
];

const standards = [
  "Clear weekly demos and progress notes",
  "Responsive UI across desktop, tablet, and mobile",
  "SEO, analytics, accessibility, and performance checks",
  "Maintainable code with practical handover documentation",
];

export default function AboutPage() {
  return (
    <>
      <section className="professional-shell">
        <div className="absolute inset-0 brand-grid animate-grid-drift opacity-45 [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pt-24 pb-14 md:pt-28 md:pb-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.55fr)] lg:items-center">
          <Reveal>
            <p className="section-kicker">About Novalix</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-display font-semibold leading-tight md:text-5xl">
              Practical Software for Growing Businesses
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              We build POS systems, cloud inventory and websites that make daily work simpler.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground shadow-soft">
              <Globe size={12} className="text-primary" aria-hidden="true" />
              Serving small businesses in Belgium, Saudi Arabia, Europe &amp; Australia remotely
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="professional-card overflow-hidden rounded-[1.75rem] p-6">
              <div className="flex items-center gap-4">
                <div className="relative grid h-16 w-16 place-items-center rounded-3xl border border-border bg-card shadow-soft dark:border-white/10 dark:bg-white/5">
                  <span className="absolute inset-0 logo-sheen" />
                  <Image
                    src="/transparent-logo.png"
                    alt=""
                    width={112}
                    height={102}
                    className="relative h-auto w-14 object-contain"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Studio profile
                  </p>
                  <h2 className="mt-1 text-xl font-display font-semibold">Novalix</h2>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["BE 🇧🇪", "Belgium"],
                  ["SA 🇸🇦", "Saudi Arabia"],
                  ["AU 🇦🇺", "Australia"],
                  ["EU 🇪🇺", "Europe"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-secondary/70 p-3">
                    <div className="text-base font-display font-semibold text-primary">{value}</div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="section-kicker">How we think</p>
            <h2 className="mt-3 text-2xl font-display font-semibold md:text-4xl">
              Professional software work should feel clear from the first call.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Good technology partners reduce uncertainty. They explain tradeoffs, show progress
              early, build for real users, and leave you with a system your team can own.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 0.06}>
              <div className="professional-card h-full rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-glow">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <v.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-display font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/55">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.55fr)] lg:items-center">
          <Reveal>
            <div>
              <p className="section-kicker">Quality standards</p>
              <h2 className="mt-3 max-w-3xl text-2xl font-display font-semibold md:text-4xl">
                We design the full operating experience, not just the visible pages.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                A beautiful website is only part of the job. Software also needs to be fast, usable,
                reliable, secure enough for its context, and understandable to the people who will
                run it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="technical-card rounded-[1.75rem] p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[rgb(15_159_154_/_0.12)] text-[color:var(--accent-technical)]">
                  <HeartHandshake size={20} />
                </div>
                <p className="font-display text-lg font-semibold">What we protect</p>
              </div>
              <ul className="mt-5 grid gap-3">
                {standards.map((standard) => (
                  <li
                    key={standard}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    {standard}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="metric-strip overflow-hidden rounded-[2rem] p-7 text-white shadow-card md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/78">
                  Work with Novalix
                </p>
                <h2 className="mt-3 max-w-2xl text-2xl font-display font-semibold md:text-4xl">
                  Build a website that helps your business look professional and win more customers.
                </h2>
                <p className="mt-3 text-sm text-white/70 max-w-xl">
                  We serve small businesses in Belgium, Saudi Arabia, Europe and Australia. All
                  collaboration happens remotely — clear, fast and focused on your goals.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-[#b8040b]"
              >
                Get a Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
