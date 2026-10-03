import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="professional-shell">
      <div className="absolute inset-0 brand-grid opacity-45 [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="section-kicker justify-center">Page not found</p>
        <h1 className="mt-4 text-3xl font-display font-semibold leading-tight md:text-5xl">
          This page is not available.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          The link may have moved, or the address may be mistyped. You can return home or continue
          exploring Novalix from the main pages.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-[#b8040b] hover:shadow-glow"
          >
            <Home size={16} />
            Go home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-foreground/15 bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary dark:bg-card"
          >
            Contact Novalix <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
