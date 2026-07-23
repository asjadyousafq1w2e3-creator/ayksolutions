"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, CheckCircle2, ExternalLink, Layers, Sparkles, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projectsData, type Project } from "@/data/caseStudies";

const categories = [
  "All",
  "Corporate Websites",
  "Ecommerce",
  "AI Solutions",
  "SaaS Products",
  "Business Services",
  "Industrial",
  "International Clients",
  "Shopify",
] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.filterCategories.includes(activeCategory);
  });

  return (
    <>
      {/* HERO SECTION */}
      <section className="professional-shell">
        <div className="absolute inset-0 brand-grid animate-grid-drift opacity-45 [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pt-24 pb-14 md:pt-28 md:pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.52fr)] lg:items-end">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
              <Sparkles size={12} />
              SELECTED CLIENT WORK
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              Digital Experiences Built for Real Businesses
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Explore websites, ecommerce platforms, AI-powered products and business systems
              created to solve practical challenges and support measurable business goals.
            </p>
            <p className="mt-3 text-xs font-semibold text-primary">
              From Saudi business services and industrial companies to ecommerce brands and SaaS
              products, every project is shaped around the client’s audience, operations and growth
              objectives.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="professional-card rounded-[1.75rem] p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Layers size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Engineering Discipline
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">
                    Tested capabilities, real platforms.
                  </p>
                </div>
              </div>
              <div className="mt-4 grid gap-2.5 border-t border-border pt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Production-ready software systems
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Verified tech stacks only
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-primary" /> Mobile-first responsive architecture
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FILTER BAR & PROJECTS GRID SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pb-10">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_6px_20px_rgba(214,9,18,0.3)] scale-105"
                    : "border border-border bg-card text-muted-foreground hover:border-foreground/20 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid: 3 columns desktop, 2 columns tablet, 1 column mobile */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} onOpenDetails={() => setSelectedProject(project)} />
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No projects found in this category.
          </div>
        )}
      </section>

      {/* DETAILS MODAL */}
      {selectedProject && (
        <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}

function ProjectCard({ project, onOpenDetails }: { project: Project; onOpenDetails: () => void }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
      {/* Project Thumbnail Header */}
      <div className="relative aspect-[16/10] overflow-hidden bg-card">
        <Image
          src={project.thumbnail}
          alt={project.altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {/* Abstract UI Pattern Layer inside thumbnail */}
        <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
          <div className="flex items-center justify-between gap-2">
            <span className="truncate rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
              {project.category.split("·")[0].trim()}
            </span>
            <span className="shrink-0 rounded-full bg-black/50 border border-white/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              {project.status}
            </span>
          </div>

          <div className="relative rounded-xl border border-white/15 bg-black/60 p-3 backdrop-blur-md">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
              {project.tags[0]}
            </p>
            <h4 className="mt-0.5 text-base font-display font-bold text-white">{project.title}</h4>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-xl font-display font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-2.5 line-clamp-3 text-xs leading-6 text-muted-foreground">
            {project.shortDescription}
          </p>

          {/* Card Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary/80 px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Action Buttons */}
        <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
          <button
            onClick={onOpenDetails}
            type="button"
            className="flex-1 rounded-xl border border-border bg-secondary/70 py-2.5 text-center text-xs font-bold text-foreground transition hover:border-primary/30 hover:bg-secondary hover:text-primary min-h-[44px]"
          >
            View Case Study
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition hover:bg-[#b8040b] min-h-[44px]"
            >
              <span>View Project</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectDetailsModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-border bg-card p-6 shadow-2xl sm:p-8">
        <button
          onClick={onClose}
          type="button"
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-border bg-secondary text-foreground transition hover:bg-border"
          aria-label="Close details"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="pr-8">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-primary">
            {project.category}
          </span>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {project.title}
          </h2>
        </div>

        {/* Modal Body */}
        <div className="mt-6 space-y-6">
          {/* Project Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Project Overview
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/90">
              {project.longDescription}
            </p>
          </div>

          {/* The Challenge */}
          {project.challenge && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                The Challenge
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {project.challenge}
              </p>
            </div>
          )}

          {/* Our Approach */}
          {project.approach && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Our Approach
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {project.approach}
              </p>
            </div>
          )}

          {/* What We Delivered */}
          {project.whatWeDelivered && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                What We Delivered
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground/90">
                {project.whatWeDelivered}
              </p>
            </div>
          )}

          {/* Services Highlighted */}
          {project.servicesHighlighted && project.servicesHighlighted.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Services Highlighted
              </h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.servicesHighlighted.map((service) => (
                  <div key={service} className="flex items-center gap-2 text-xs text-foreground/88">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Business-Focused Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Business-Focused Features
            </h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-xs text-foreground/88">
                  <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Confirmed Technology Stack */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Confirmed Technology Stack & Badges
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Final Experience / Value Statement */}
          {project.valueStatement && (
            <div className="rounded-2xl border border-primary/25 bg-primary/10 p-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Project Value Statement
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed font-medium text-foreground">
                {project.valueStatement}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <div className="flex items-center gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition hover:bg-[#b8040b] min-h-[44px]"
              >
                <span>View Live Website</span>
                <ExternalLink size={14} />
              </a>
            ) : (
              <span className="text-xs font-semibold text-muted-foreground">
                Internal Case Study Platform
              </span>
            )}
          </div>

          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-bold text-primary transition hover:gap-3"
          >
            Start a project like this <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
