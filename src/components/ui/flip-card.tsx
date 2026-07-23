import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceFlipCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  index?: number;
  color?: string;
  cta?: ReactNode;
  className?: string;
}

function withOpacity(hex: string, opacity: number) {
  const normalized = hex.replace("#", "");
  const raw =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : normalized;

  if (raw.length !== 6) {
    return `rgb(214 9 18 / ${opacity})`;
  }

  const red = Number.parseInt(raw.slice(0, 2), 16);
  const green = Number.parseInt(raw.slice(2, 4), 16);
  const blue = Number.parseInt(raw.slice(4, 6), 16);
  return `rgb(${red} ${green} ${blue} / ${opacity})`;
}

function ServiceVisualGraphics({
  index,
  icon: Icon,
  color,
  primaryGlow,
}: {
  index: number;
  icon: LucideIcon;
  color: string;
  primaryGlow: string;
}) {
  // 0: Custom Websites Development
  if (index === 0) {
    return (
      <div className="relative flex min-h-[9.5rem] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0e] p-4 text-white shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,9,18,0.22)_0%,transparent_60%)]" />
        <div className="absolute inset-0 circuit-lines opacity-20" />

        {/* Laptop Frame */}
        <div className="relative h-20 w-40 rounded-t-xl border border-white/25 bg-[#16161b] p-2 shadow-2xl transition-transform duration-500 group-hover:scale-105">
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <span className="h-2 w-2 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[8px] font-mono font-semibold text-white/50">main.tsx</span>
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="h-2 w-4/5 rounded-full bg-primary/60 animate-pulse" />
            <div className="h-1.5 w-full rounded-full bg-white/20" />
            <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Floating Mobile Device */}
        <div className="absolute right-4 bottom-2.5 h-16 w-9 rounded-lg border border-white/30 bg-[#22222c] p-1 shadow-2xl animate-bounce [animation-duration:4s]">
          <div className="mx-auto h-0.5 w-2.5 rounded-full bg-white/40 mb-1" />
          <div className="h-1.5 w-full rounded bg-primary/70" />
          <div className="mt-1 h-1 w-3/4 rounded bg-white/30" />
        </div>

        {/* Floating Icon Badge */}
        <div
          className="service-card-float relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 text-white shadow-card"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, #a20208 100%)`,
            boxShadow: `0 14px 32px ${primaryGlow}`,
          }}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
    );
  }

  // 1: Web Applications (SaaS Analytics Dashboard)
  if (index === 1) {
    return (
      <div className="relative flex min-h-[9.5rem] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0e] p-4 text-white shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,9,18,0.22),transparent_60%)]" />

        <div className="relative h-24 w-48 rounded-xl border border-white/25 bg-[#16161c] p-2.5 shadow-2xl transition-transform duration-500 group-hover:scale-105">
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
            <div>
              <span className="text-[8px] uppercase tracking-wider text-white/50">MRR Growth</span>
              <div className="text-[11px] font-bold text-white">
                $48,250 <span className="text-emerald-400 text-[9px]">+32%</span>
              </div>
            </div>
            <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[8px] font-bold text-primary">
              SaaS App
            </span>
          </div>

          <div className="mt-2.5 flex items-end justify-between gap-1.5 h-10 px-1">
            <div className="w-3 h-5 rounded-t bg-primary/40" />
            <div className="w-3 h-8.5 rounded-t bg-primary/70 animate-pulse" />
            <div className="w-3 h-6 rounded-t bg-primary/50" />
            <div className="w-3 h-10 rounded-t bg-primary animate-pulse" />
            <div className="w-3 h-7.5 rounded-t bg-primary/60" />
          </div>
        </div>

        <div
          className="service-card-float absolute z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 text-white shadow-card"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, #a20208 100%)`,
            boxShadow: `0 14px 32px ${primaryGlow}`,
          }}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
    );
  }

  // 2: WordPress Websites
  if (index === 2) {
    return (
      <div className="relative flex min-h-[9.5rem] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0e] p-4 text-white shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,9,18,0.2),transparent_65%)]" />

        <div className="relative h-24 w-48 rounded-xl border border-white/25 bg-[#16161c] p-2.5 shadow-2xl transition-transform duration-500 group-hover:scale-105">
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
            <span className="text-[9px] font-bold text-white/70">Gutenberg Editor</span>
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[8px] font-bold text-emerald-400">
              ⚡ 99 Speed
            </span>
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="h-4.5 rounded-lg border border-primary/40 bg-primary/15 p-1 flex items-center justify-between">
              <span className="h-2 w-16 rounded bg-primary/80" />
              <span className="h-2 w-4 rounded bg-white/25" />
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-4 rounded-md bg-white/10 border border-white/10" />
              <div className="h-4 rounded-md bg-white/10 border border-white/10" />
            </div>
          </div>
        </div>

        <div
          className="service-card-float absolute z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 text-white shadow-card"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, #a20208 100%)`,
            boxShadow: `0 14px 32px ${primaryGlow}`,
          }}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
    );
  }

  // 3: Shopify & E-commerce
  if (index === 3) {
    return (
      <div className="relative flex min-h-[9.5rem] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0e] p-4 text-white shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,9,18,0.22),transparent_60%)]" />

        <div className="relative h-24 w-44 rounded-xl border border-white/25 bg-[#16161c] p-2.5 shadow-2xl flex items-center gap-2.5 transition-transform duration-500 group-hover:scale-105">
          <div className="h-16 w-14 rounded-lg bg-white/10 border border-white/20 p-1 flex flex-col justify-end">
            <div className="h-10 rounded bg-primary/50" />
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="h-2 w-full rounded bg-white/30" />
            <div className="text-[11px] font-bold text-emerald-400">$148.00</div>
            <div className="h-4 w-full rounded-md bg-primary text-[8px] font-bold text-center leading-4 text-white">
              Buy Now
            </div>
          </div>
        </div>

        <div className="absolute right-4 top-2 rounded-full border border-white/30 bg-primary/95 px-2.5 py-0.5 text-[8px] font-bold text-white shadow-lg animate-bounce [animation-duration:3.5s]">
          🛒 +1 Cart
        </div>

        <div
          className="service-card-float absolute z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 text-white shadow-card"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, #a20208 100%)`,
            boxShadow: `0 14px 32px ${primaryGlow}`,
          }}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
    );
  }

  // 4: Custom Software Solutions
  if (index === 4) {
    return (
      <div className="relative flex min-h-[9.5rem] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0e] p-4 text-white shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,9,18,0.22),transparent_60%)]" />
        <div className="absolute inset-0 circuit-lines opacity-25" />

        <div className="relative grid grid-cols-3 gap-4 w-44 place-items-center transition-transform duration-500 group-hover:scale-105">
          <div className="h-8 w-8 rounded-xl border border-white/20 bg-white/10 flex items-center justify-center text-[9px] font-mono font-bold text-primary backdrop-blur">
            DB
          </div>
          <div className="h-8 w-8 rounded-xl border border-white/20 bg-white/10 flex items-center justify-center text-[9px] font-mono font-bold text-emerald-400 backdrop-blur">
            AUTH
          </div>
          <div className="h-8 w-8 rounded-xl border border-white/20 bg-white/10 flex items-center justify-center text-[9px] font-mono font-bold text-amber-400 backdrop-blur">
            AWS
          </div>
        </div>

        <div
          className="service-card-float absolute z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 text-white shadow-card"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, #a20208 100%)`,
            boxShadow: `0 14px 32px ${primaryGlow}`,
          }}
        >
          <Icon className="h-6 w-6 animate-pulse" />
        </div>
      </div>
    );
  }

  // 5: Inventory Management
  return (
    <div className="relative flex min-h-[9.5rem] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0e] p-4 text-white shadow-inner">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,9,18,0.22),transparent_60%)]" />

      <div className="relative h-24 w-48 rounded-xl border border-white/25 bg-[#16161c] p-2.5 shadow-2xl flex flex-col justify-between transition-transform duration-500 group-hover:scale-105">
        <div className="flex items-center justify-between border-b border-white/10 pb-1">
          <span className="text-[9px] font-mono font-bold text-white/80">SKU-8924</span>
          <span className="text-[8px] font-bold text-emerald-400">1,420 Stock</span>
        </div>

        <div className="relative h-10 w-full bg-white/5 rounded-lg p-1 flex items-center justify-between gap-0.5 overflow-hidden">
          <div className="absolute inset-y-0 w-2.5 bg-primary shadow-[0_0_16px_#CD040B] animate-[marquee_2.2s_linear_infinite]" />
          {[2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 2, 1, 4, 2, 1, 3].map((w, i) => (
            <span key={i} className="h-full bg-white/40" style={{ width: `${w * 2}px` }} />
          ))}
        </div>
      </div>

      <div
        className="service-card-float absolute z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 text-white shadow-card"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, #a20208 100%)`,
          boxShadow: `0 14px 32px ${primaryGlow}`,
        }}
      >
        <Icon className="h-6 w-6" />
      </div>
    </div>
  );
}

export default function ServiceFlipCard({
  title,
  subtitle,
  description,
  features,
  icon: Icon,
  index = 0,
  color = "#D60912",
  cta,
  className,
}: ServiceFlipCardProps) {
  const primaryGlow = withOpacity(color, 0.16);
  const primaryBorder = withOpacity(color, 0.14);
  const primaryWash = withOpacity(color, 0.06);
  const softPrimaryWash = withOpacity(color, 0.03);

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border bg-card p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_22px_55px_rgba(214,9,18,0.12)]",
        className,
      )}
      style={{ borderColor: primaryBorder }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${primaryWash}, transparent 34%), linear-gradient(180deg, ${softPrimaryWash}, transparent 56%)`,
        }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
        {/* Header Row */}
        <div className="flex items-center justify-between">
          <div className="rounded-full border border-border bg-secondary/80 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            0{index + 1}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#CD040B]" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              Active
            </span>
          </div>
        </div>

        {/* Animated Inner Visual Stage */}
        <ServiceVisualGraphics index={index} icon={Icon} color={color} primaryGlow={primaryGlow} />

        {/* Title & Description */}
        <div>
          <h3 className="text-xl font-display font-semibold text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-2 text-xs leading-6 text-muted-foreground">{description}</p>

          {/* Feature Checkmarks */}
          <div className="mt-3.5 space-y-1.5 border-t border-border/60 pt-3">
            {features.slice(0, 3).map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-xs text-foreground/88">
                <div
                  className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-md"
                  style={{ backgroundColor: withOpacity(color, 0.12) }}
                >
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card CTA Footer */}
        <div className="border-t border-border/60 pt-3.5 mt-auto">
          {cta ?? (
            <div
              className="inline-flex items-center gap-2 text-xs font-bold text-primary transition-all group-hover:gap-3"
              style={{ color }}
            >
              Learn more
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
