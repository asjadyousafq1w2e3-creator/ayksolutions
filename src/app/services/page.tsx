"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Gauge,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  Rocket,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";
import { AnimatedServiceCard } from "@/components/ui/animated-card-chart";

const process = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Discovery and scope",
    body: "We clarify the business goal, users, risks, integrations, and the exact first release that should be built.",
  },
  {
    step: "02",
    icon: Layers3,
    title: "Design system and prototype",
    body: "You see the product before code starts: flows, responsive layouts, key states, and content hierarchy.",
  },
  {
    step: "03",
    icon: Gauge,
    title: "Weekly build cycles",
    body: "Production code, working demos, short feedback loops, and clear progress against the agreed roadmap.",
  },
  {
    step: "04",
    icon: LockKeyhole,
    title: "Launch hardening",
    body: "Performance, SEO, analytics, accessibility, security basics, QA, deployment, and handover documentation.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Improve and support",
    body: "After launch, we monitor, refine, add features, and help your team keep moving with confidence.",
  },
];

const serviceProof = [
  "Senior design and engineering",
  "Clear estimates before build",
  "Performance and SEO included",
  "Handover-ready documentation",
];

export default function ServicesPage() {
  return (
    <>
      <section className="professional-shell">
        <div className="absolute inset-0 brand-grid animate-grid-drift opacity-45 [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pt-24 pb-14 md:pt-28 md:pb-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.58fr)] lg:items-end">
          <Reveal>
            <p className="section-kicker">Software services</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-display font-semibold leading-tight md:text-5xl">
              Design, engineering, and automation for businesses that need software to work.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              AYK Solutions builds conversion-focused websites, SaaS products, e-commerce
              storefronts, internal systems, and automation workflows with the discipline of a
              product engineering team.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-[#b8040b] hover:shadow-glow"
              >
                Scope a project <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-foreground/15 bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
              >
                See results
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="professional-card rounded-[1.75rem] p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <MessageSquareText size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    What clients get
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Fewer surprises, better launches.
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {serviceProof.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[rgb(15_159_154_/_0.12)] text-[color:var(--accent-technical)]">
                      <Check size={13} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <AnimatedServiceCard
                index={i}
                slug={s.slug}
                title={s.title}
                short={s.short}
                bullets={s.bullets}
                icon={s.icon}
                mainColor={s.mainColor}
                secondaryColor={s.secondaryColor}
                badge1={s.badge1}
                badge2={s.badge2}
                tooltipTitle={s.tooltipTitle}
                tooltipSub={s.tooltipSub}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/55">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-kicker">Delivery model</p>
              <h2 className="mt-3 text-2xl font-display font-semibold md:text-4xl">
                A mature process for calm, predictable delivery.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Professional software sites make the buying path feel safe. This process shows how
                we reduce risk before, during, and after the build.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06}>
                <div className="technical-card h-full rounded-[1.35rem] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-soft">
                      <p.icon size={18} />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[color:var(--accent-technical)]">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="metric-strip overflow-hidden rounded-[2rem] p-7 text-background shadow-card md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-background/78">
                  Start with clarity
                </p>
                <h2 className="mt-3 max-w-2xl text-2xl font-display font-semibold md:text-4xl">
                  Bring us the problem. We will help shape the right software path.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-background/82">
                  You will leave the first call with a sharper scope, a realistic timeline, and a
                  recommendation on what to build first.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-[#b8040b]"
              >
                Book discovery <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
