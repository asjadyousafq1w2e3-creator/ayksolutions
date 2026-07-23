import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Code2,
  FileCheck,
  HelpCircle,
  Layers,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services, type ServiceDetail } from "@/data/services";
import { ServiceDomainVisual } from "@/components/ui/animated-card-chart";
import { caseStudies } from "@/data/caseStudies";

export function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found | AYK Solutions",
    };
  }

  return {
    title: `${service.title} — Professional Engineering & Delivery | AYK Solutions`,
    description: service.heroSubhead,
    openGraph: {
      title: `${service.title} — AYK Solutions`,
      description: service.short,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const relatedStudies = caseStudies.slice(0, 3);

  return (
    <>
      {/* HERO SECTION */}
      <section className="professional-shell">
        <div className="absolute inset-0 brand-grid animate-grid-drift opacity-40 [mask-image:linear-gradient(180deg,black,transparent_85%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-24">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Link href="/" className="transition hover:text-foreground">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/services" className="transition hover:text-foreground">
              Services
            </Link>
            <ChevronRight size={12} />
            <span className="text-foreground">{service.title}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
                <Sparkles size={12} />
                SOFTWARE SERVICE
              </div>

              <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.15]">
                {service.heroHeadline}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {service.heroSubhead}
              </p>

              {/* Quick Signal Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-foreground">
                <div className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 shadow-sm">
                  <Clock size={14} className="text-primary" />
                  <span>Timeline: {service.timeline}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 shadow-sm">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span>Post-Launch Support Included</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition hover:bg-[#b8040b] hover:shadow-glow"
                >
                  Scope a project{" "}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-bold text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  View Pricing Plans
                </Link>
              </div>
            </Reveal>

            {/* Interactive Domain Hero Visual */}
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card p-4 shadow-card">
                <div className="flex items-center justify-between border-b border-border/60 pb-3 px-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon size={16} />
                    </div>
                    <span className="text-xs font-bold text-foreground">{service.title}</span>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live System Simulation
                  </span>
                </div>

                <div className="relative h-[250px] sm:h-[280px] w-full rounded-xl overflow-hidden mt-3 border border-border/60 bg-secondary/30">
                  <ServiceDomainVisual
                    slug={service.slug}
                    mainColor={service.mainColor}
                    secondaryColor={service.secondaryColor}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TECH STACK BAR */}
      <section className="border-y border-border bg-gradient-soft py-6">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground shrink-0">
            Engineered with:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED DELIVERABLES GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
              DELIVERABLES & CAPABILITIES
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              What You Get with {service.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Every deliverable is defined before development starts and built to standard
              engineering protocols.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.deliverables.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-xs">
                      0{i + 1}
                    </div>
                    <CheckCircle2 size={16} className="text-emerald-500" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROVEN END-TO-END DELIVERY PROCESS */}
      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
                DELIVERY METHODOLOGY
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                Our Proven 5-Step Delivery Process
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Calm, predictable execution with clear milestones and weekly feedback loops.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {service.processSteps.map((step, i) => (
              <Reveal key={step.phase} delay={i * 0.08}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-soft">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-primary">{step.phase}</span>
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <h3 className="mt-3 font-display text-sm font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-border/60 pt-3 text-[10px] font-semibold text-primary">
                    Output: {step.output}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE SPECIFIC FAQS */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-primary">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
              Questions About {service.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 space-y-4">
          {service.faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-border bg-card p-6 open:bg-secondary/30 transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-bold text-foreground">
                <span>{faq.q}</span>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CONVERSION BANNER */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/40 bg-gradient-to-r from-primary/15 via-card to-primary/10 p-8 text-center shadow-card md:p-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Ready to Start Your {service.title} Project?
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground md:text-sm">
                Discuss your goals with a senior developer today. Receive a clear scope, estimated
                timeline, and fixed price proposal.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-xs font-bold text-primary-foreground shadow-sm transition hover:bg-[#b8040b]"
                >
                  <span>Start Your Project</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-xs font-bold text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
