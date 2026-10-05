"use client";

import * as React from "react";
import { useState } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { LucideIcon } from "lucide-react";
import {
  Check,
  ArrowRight,
  Laptop,
  Smartphone,
  LayoutDashboard,
  Database,
  Globe,
  ShieldCheck,
  ShoppingBag,
  CreditCard,
  Cpu,
  Server,
  PackageSearch,
  Barcode,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Card Shell Components ---

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function AnimatedCard({ className, ...props }: CardProps) {
  return (
    <div
      role="region"
      className={cn(
        "group/animated-card relative w-full flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow",
        className,
      )}
      {...props}
    />
  );
}

export function CardVisual({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "relative h-[210px] w-full overflow-hidden border-b border-border/60 bg-gradient-to-b from-secondary/50 via-background to-secondary/30",
        className,
      )}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: CardProps) {
  return (
    <div
      role="group"
      className={cn("flex flex-1 flex-col justify-between p-6 space-y-4", className)}
      {...props}
    />
  );
}

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn(
        "font-display text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover/animated-card:text-primary",
        className,
      )}
      {...props}
    />
  );
}

type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p className={cn("text-xs leading-relaxed text-muted-foreground", className)} {...props} />
  );
}

// ============================================================================
// DOMAIN-SPECIFIC ANIMATED SERVICE VISUALS
// ============================================================================

// 1. Custom Website Development Visual (Laptop + Mobile Screen Simulation)
function WebsiteDevelopmentVisual({
  mainColor,
  secondaryColor,
}: {
  mainColor: string;
  secondaryColor: string;
}) {
  return (
    <div className="relative h-full w-full flex items-center justify-center p-4 overflow-hidden">
      {/* Ambient Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d60912_1px,transparent_1px)] [bg-size:16px_16px] opacity-15" />

      {/* Main Desktop Screen Frame */}
      <div className="relative w-[210px] sm:w-[230px] rounded-xl border border-border/90 bg-card p-2 shadow-card transition-transform duration-500 ease-out group-hover/animated-card:-translate-y-2 group-hover/animated-card:scale-105">
        {/* Browser Top Header Bar */}
        <div className="flex items-center gap-1.5 pb-2 border-b border-border/60">
          <span className="h-2 w-2 rounded-full bg-red-500/80" />
          <span className="h-2 w-2 rounded-full bg-amber-500/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
          <span className="ml-2 h-2.5 w-24 rounded-full bg-secondary/80 text-[8px] font-mono text-muted-foreground/70 flex items-center px-1.5 truncate">
            https://www.novalix.tech
          </span>
        </div>

        {/* Website Content Mockup Layout */}
        <div className="mt-2 space-y-2">
          <div className="h-4 w-3/4 rounded-md bg-primary/20 animate-pulse" />
          <div className="grid grid-cols-3 gap-1.5">
            <div className="h-10 rounded-md bg-secondary/80 border border-border/40 p-1">
              <div className="h-2 w-full rounded bg-primary/30" />
              <div className="mt-1 h-1.5 w-2/3 rounded bg-muted-foreground/30" />
            </div>
            <div className="h-10 rounded-md bg-secondary/80 border border-border/40 p-1">
              <div className="h-2 w-full rounded bg-emerald-500/30" />
              <div className="mt-1 h-1.5 w-2/3 rounded bg-muted-foreground/30" />
            </div>
            <div className="h-10 rounded-md bg-secondary/80 border border-border/40 p-1">
              <div className="h-2 w-full rounded bg-amber-500/30" />
              <div className="mt-1 h-1.5 w-2/3 rounded bg-muted-foreground/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Mobile Phone Mockup */}
      <div className="absolute right-6 bottom-3 z-10 w-[76px] rounded-[1.2rem] border-2 border-border/90 bg-card p-1.5 shadow-card transition-transform duration-500 ease-out group-hover/animated-card:translate-y-[-8px] group-hover/animated-card:scale-110">
        <div className="mx-auto h-1 w-6 rounded-full bg-border" />
        <div className="mt-2 space-y-1.5">
          <div className="h-2.5 w-full rounded bg-primary/30" />
          <div className="h-8 rounded bg-secondary border border-border/40 p-1">
            <div className="h-1.5 w-full rounded bg-emerald-500/40" />
            <div className="mt-1 h-1 w-3/4 rounded bg-muted-foreground/30" />
          </div>
          <div className="h-2 w-full rounded bg-primary/80" />
        </div>
      </div>

      {/* Floating Speed & Responsive Badge */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1 text-[10px] font-bold text-foreground shadow-soft backdrop-blur-md transition-all duration-300 group-hover/animated-card:scale-105">
        <Laptop size={12} className="text-primary" />
        <span>Responsive 100%</span>
      </div>
    </div>
  );
}

// 2. Web Applications Visual (SaaS Dashboard & Real-Time Metrics)
function WebAppVisual({
  mainColor,
  secondaryColor,
}: {
  mainColor: string;
  secondaryColor: string;
}) {
  return (
    <div className="relative h-full w-full flex items-center justify-center p-4 overflow-hidden">
      {/* Background Ambient Pulse */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-primary/10" />

      {/* SaaS Dashboard Window */}
      <div className="relative w-full max-w-[270px] rounded-xl border border-border/90 bg-card p-3 shadow-card transition-transform duration-500 ease-out group-hover/animated-card:scale-105">
        <div className="flex items-center justify-between border-b border-border/60 pb-2">
          <div className="flex items-center gap-2">
            <LayoutDashboard size={14} className="text-[color:var(--accent-technical)]" />
            <span className="text-[11px] font-bold text-foreground">SaaS Control Panel</span>
          </div>
          <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live WS
          </span>
        </div>

        {/* Dashboard Active Graph & Metrics */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-secondary/70 p-2 border border-border/40">
            <span className="text-[9px] font-semibold text-muted-foreground uppercase">
              Active Users
            </span>
            <div className="text-sm font-extrabold text-foreground mt-0.5">14,892</div>
            <div className="mt-1 h-1.5 w-full rounded-full bg-emerald-500/30 overflow-hidden">
              <div className="h-full w-3/4 bg-emerald-500 rounded-full" />
            </div>
          </div>
          <div className="rounded-lg bg-secondary/70 p-2 border border-border/40">
            <span className="text-[9px] font-semibold text-muted-foreground uppercase">
              API Latency
            </span>
            <div className="text-sm font-extrabold text-[color:var(--accent-technical)] mt-0.5">
              12 ms
            </div>
            <div className="mt-1 h-1.5 w-full rounded-full bg-teal-500/30 overflow-hidden">
              <div className="h-full w-4/5 bg-teal-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Floating Endpoint Callout */}
        <div className="mt-2.5 flex items-center justify-between rounded-lg bg-background border border-border/60 px-2.5 py-1.5 text-[10px] font-mono font-medium text-foreground">
          <span className="text-emerald-600 font-bold">GET /api/v1/auth</span>
          <span className="text-muted-foreground">200 OK</span>
        </div>
      </div>

      {/* Floating Real-Time Sync Badge */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1 text-[10px] font-bold text-foreground shadow-soft backdrop-blur-md">
        <Database size={12} className="text-[color:var(--accent-technical)]" />
        <span>Realtime Sync</span>
      </div>
    </div>
  );
}

// 3. WordPress Websites Visual (Block Builder & Hardened Security)
function WordPressVisual({
  mainColor,
  secondaryColor,
}: {
  mainColor: string;
  secondaryColor: string;
}) {
  return (
    <div className="relative h-full w-full flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10" />

      {/* Gutenberg Block Canvas */}
      <div className="relative w-full max-w-[270px] rounded-xl border border-border/90 bg-card p-3 shadow-card transition-transform duration-500 ease-out group-hover/animated-card:-translate-y-1">
        <div className="flex items-center justify-between border-b border-border/60 pb-2">
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-blue-600" />
            <span className="text-[11px] font-bold text-foreground">WP Gutenberg Engine</span>
          </div>
          <span className="text-[9px] font-bold text-blue-600 bg-blue-500/10 px-2 py-0.5 rounded-full">
            Custom Theme
          </span>
        </div>

        {/* Floating Gutenberg Content Blocks */}
        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-blue-500/30 bg-blue-500/5 p-2 transition-transform group-hover/animated-card:translate-x-1">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="text-[10px] font-bold text-foreground">Hero Header Block</span>
            </div>
            <CheckCircle2 size={12} className="text-blue-600" />
          </div>

          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-secondary/60 p-2 transition-transform group-hover/animated-card:translate-x-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold text-foreground">WooCommerce Grid</span>
            </div>
            <CheckCircle2 size={12} className="text-emerald-500" />
          </div>
        </div>
      </div>

      {/* Floating Security Badge */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1 text-[10px] font-bold text-foreground shadow-soft backdrop-blur-md">
        <ShieldCheck size={12} className="text-blue-600" />
        <span>Hardened Security</span>
      </div>
    </div>
  );
}

// 4. Shopify & E-commerce Visual (Interactive Product Card & Instant Checkout)
function EcommerceVisual({
  mainColor,
  secondaryColor,
}: {
  mainColor: string;
  secondaryColor: string;
}) {
  return (
    <div className="relative h-full w-full flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-green-500/10" />

      {/* Product Shopping Card */}
      <div className="relative w-full max-w-[260px] rounded-xl border border-border/90 bg-card p-3 shadow-card transition-transform duration-500 ease-out group-hover/animated-card:scale-105">
        <div className="flex items-center justify-between border-b border-border/60 pb-2">
          <div className="flex items-center gap-2">
            <ShoppingBag size={14} className="text-emerald-600" />
            <span className="text-[11px] font-bold text-foreground">Shopify Storefront</span>
          </div>
          <span className="text-[9px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
            +88.4% Conv.
          </span>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <div className="h-14 w-14 shrink-0 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 font-extrabold text-xs">
            SKU #1
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold text-foreground">Premium Product</div>
            <div className="text-sm font-extrabold text-emerald-600 mt-0.5">$199.00</div>
            <div className="mt-1 flex items-center gap-1 text-[9px] text-muted-foreground">
              <CreditCard size={10} className="text-emerald-600" />
              <span>Apple Pay & Stripe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Checkout Success Alert */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1 text-[10px] font-bold text-foreground shadow-soft backdrop-blur-md">
        <Sparkles size={12} className="text-emerald-600" />
        <span>Instant Checkout</span>
      </div>
    </div>
  );
}

// 5. Custom Software Solutions Visual (Cloud Microservices Architecture)
function CustomSoftwareVisual({
  mainColor,
  secondaryColor,
}: {
  mainColor: string;
  secondaryColor: string;
}) {
  return (
    <div className="relative h-full w-full flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-primary/10" />

      {/* Interconnected Cloud Nodes Network */}
      <div className="relative w-full max-w-[270px] rounded-xl border border-border/90 bg-card p-3 shadow-card transition-transform duration-500 ease-out group-hover/animated-card:-translate-y-1">
        <div className="flex items-center justify-between border-b border-border/60 pb-2">
          <div className="flex items-center gap-2">
            <Cpu size={14} className="text-purple-600" />
            <span className="text-[11px] font-bold text-foreground">Microservices Mesh</span>
          </div>
          <span className="text-[9px] font-bold text-purple-600 bg-purple-500/10 px-2 py-0.5 rounded-full">
            Fault-Tolerant
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-2 transition-transform group-hover/animated-card:scale-105">
            <Server size={14} className="mx-auto text-purple-600" />
            <span className="mt-1 block text-[9px] font-bold text-foreground">API Gateway</span>
          </div>
          <div className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-2 transition-transform group-hover/animated-card:scale-105 delay-75">
            <Cpu size={14} className="mx-auto text-purple-600" />
            <span className="mt-1 block text-[9px] font-bold text-foreground">Auth Worker</span>
          </div>
          <div className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-2 transition-transform group-hover/animated-card:scale-105 delay-150">
            <Database size={14} className="mx-auto text-purple-600" />
            <span className="mt-1 block text-[9px] font-bold text-foreground">
              Postgres Cluster
            </span>
          </div>
        </div>
      </div>

      {/* Floating Architecture Badge */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1 text-[10px] font-bold text-foreground shadow-soft backdrop-blur-md">
        <Zap size={12} className="text-purple-600" />
        <span>10x Throughput</span>
      </div>
    </div>
  );
}

// 6. Inventory Management Visual (Live Multi-Warehouse Barcode Scanner)
function InventoryVisual({
  mainColor,
  secondaryColor,
}: {
  mainColor: string;
  secondaryColor: string;
}) {
  return (
    <div className="relative h-full w-full flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-600/10" />

      {/* Live Barcode Stock Card */}
      <div className="relative w-full max-w-[270px] rounded-xl border border-border/90 bg-card p-3 shadow-card transition-transform duration-500 ease-out group-hover/animated-card:scale-105">
        <div className="flex items-center justify-between border-b border-border/60 pb-2">
          <div className="flex items-center gap-2">
            <PackageSearch size={14} className="text-amber-600" />
            <span className="text-[11px] font-bold text-foreground">Stock Scanner</span>
          </div>
          <span className="text-[9px] font-bold text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-full">
            100% SKU Sync
          </span>
        </div>

        {/* Laser Scanner Beam & Barcode */}
        <div className="relative mt-3 rounded-lg border border-border/60 bg-secondary/70 p-2.5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-foreground">Warehouse Central A</div>
              <div className="text-xs font-extrabold text-amber-600 mt-0.5">
                1,420 Units Available
              </div>
            </div>
            <Barcode size={22} className="text-foreground/80" />
          </div>

          {/* Animated Laser Scanning Line */}
          <div className="absolute inset-x-2 top-1/2 h-0.5 bg-amber-500 shadow-[0_0_8px_#f59e0b] animate-pulse" />
        </div>
      </div>

      {/* Floating Stock Sync Badge */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1 text-[10px] font-bold text-foreground shadow-soft backdrop-blur-md">
        <PackageSearch size={12} className="text-amber-600" />
        <span>Multi-Warehouse</span>
      </div>
    </div>
  );
}

// Router function to pick the domain-tailored visual for each service
export function ServiceDomainVisual({
  slug,
  mainColor,
  secondaryColor,
}: {
  slug: string;
  mainColor: string;
  secondaryColor: string;
}) {
  switch (slug) {
    case "custom-websites":
      return <WebsiteDevelopmentVisual mainColor={mainColor} secondaryColor={secondaryColor} />;
    case "web-apps":
      return <WebAppVisual mainColor={mainColor} secondaryColor={secondaryColor} />;
    case "wordpress":
      return <WordPressVisual mainColor={mainColor} secondaryColor={secondaryColor} />;
    case "shopify-ecommerce":
      return <EcommerceVisual mainColor={mainColor} secondaryColor={secondaryColor} />;
    case "custom-software":
      return <CustomSoftwareVisual mainColor={mainColor} secondaryColor={secondaryColor} />;
    case "inventory":
      return <InventoryVisual mainColor={mainColor} secondaryColor={secondaryColor} />;
    default:
      return <WebsiteDevelopmentVisual mainColor={mainColor} secondaryColor={secondaryColor} />;
  }
}

// --- Complete Service Card Component ---

export interface ServiceCardProps {
  title: string;
  short: string;
  bullets: string[];
  mainColor: string;
  secondaryColor: string;
  badge1: string;
  badge2: string;
  tooltipTitle: string;
  tooltipSub: string;
  icon: LucideIcon;
  slug: string;
  index: number;
}

export function AnimatedServiceCard({
  title,
  short,
  bullets,
  icon: Icon,
  slug,
  index,
}: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
          <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground/65">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-5 text-muted-foreground">{short}</p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-center gap-1.5 text-[11px] font-medium text-foreground/75"
          >
            <Check size={12} className="shrink-0 text-primary" aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
      <Link
        href={`/services/${slug}`}
        className="mt-auto flex items-center justify-between gap-3 border-t border-border/70 pt-4 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Explore service
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
