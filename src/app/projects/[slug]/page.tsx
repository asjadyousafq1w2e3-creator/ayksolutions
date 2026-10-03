import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, ImageIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projectsData, type Project } from "@/data/caseStudies";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Novalix",
    };
  }

  return {
    title: `${project.title} | Novalix Work`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const idx = projectsData.findIndex((p) => p.slug === project.slug);
  const nextProject = projectsData[(idx + 1) % projectsData.length];

  return (
    <>
      {/* HERO BANNER */}
      <section className="professional-shell">
        <div className="absolute inset-0 brand-grid animate-grid-drift opacity-45 [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-12 md:pt-32 md:pb-16">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-primary"
            >
              <ArrowLeft size={15} /> All projects
            </Link>
            <p className="mt-6 section-kicker">{project.category}</p>
            <h1 className="mt-3 max-w-4xl font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>
          </Reveal>

          {/* PROJECT FEATURED SCREENSHOT HERO FRAME */}
          <Reveal delay={0.12}>
            <div className="mt-10 overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-card">
              {/* Top Browser Bar */}
              <div className="flex items-center justify-between border-b border-border/60 bg-secondary/50 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 hidden sm:inline-block rounded-md bg-background px-3 py-1 text-xs font-mono text-muted-foreground border border-border/60">
                    {project.liveUrl || `https://novalix.tech/projects/${project.slug}`}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {project.status}
                  </span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-sm transition hover:bg-[#b8040b]"
                    >
                      <span>Visit Live</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Main Screenshot Container */}
              <div className="relative w-full max-h-[600px] overflow-hidden bg-muted">
                <Image
                  src={project.thumbnail}
                  alt={project.altText}
                  width={1400}
                  height={800}
                  className="w-full object-cover object-top transition-transform duration-700 hover:scale-[1.01]"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DETAILS BODY */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[300px_minmax(0,1fr)]">
        {/* Sidebar Info */}
        <Reveal>
          <aside className="technical-card rounded-[1.5rem] p-6 lg:sticky lg:top-28">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Categories
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.filterCategories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-foreground dark:bg-card"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="my-6 soft-divider" />

            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Technologies & Tags
            </p>
            <div className="mt-3 space-y-2">
              {project.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 text-xs font-semibold text-muted-foreground"
                >
                  <CheckCircle2 size={14} className="text-primary" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </aside>
        </Reveal>

        {/* Main Details Column */}
        <div className="space-y-8">
          <Reveal>
            <article className="professional-card rounded-[1.75rem] p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Project Overview & Architecture
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {project.longDescription}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="professional-card rounded-[1.75rem] p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Delivered Features & Capabilities
              </h2>
              <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-foreground/88">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          {/* PROJECT GALLERY GRID (IF MULTIPLE SCREENSHOTS) */}
          {project.gallery && project.gallery.length > 0 && (
            <Reveal delay={0.12}>
              <article className="professional-card rounded-[1.75rem] p-8">
                <div className="flex items-center gap-2 mb-6">
                  <ImageIcon size={18} className="text-primary" />
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Project Gallery & Interfaces
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-xl border border-border bg-muted shadow-sm transition hover:shadow-card"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        width={600}
                        height={400}
                        className="w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </section>

      {/* NEXT PROJECT STRIP */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <Reveal>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group metric-strip flex flex-col gap-6 rounded-[2rem] p-7 text-white shadow-card transition hover:shadow-glow md:flex-row md:items-center md:justify-between md:p-10"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/78">
                Next Featured Project
              </p>
              <h3 className="mt-2 max-w-3xl font-display text-2xl font-semibold md:text-3xl">
                {nextProject.title} — {nextProject.category}
              </h3>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-white transition group-hover:gap-3">
              Explore next project <ArrowRight size={16} />
            </span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
