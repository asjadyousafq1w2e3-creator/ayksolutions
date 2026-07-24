"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Marketing sites usually take 3-6 weeks. Web apps and SaaS MVPs often take 10-16 weeks. Larger platforms are scoped after discovery.",
  },
  {
    q: "What does it cost?",
    a: "Every project is estimated around scope, integrations, content, timeline, and launch needs. After discovery, we share a clear proposal.",
  },
  {
    q: "Can you improve an existing website or app?",
    a: "Yes. We can redesign, rebuild, optimize performance, improve UX, add features, or stabilize existing systems.",
  },
  {
    q: "Do you work with existing teams?",
    a: "Yes. We can embed with your team, collaborate with your designer or developer, or own the full delivery end-to-end.",
  },
];

const expectations = [
  "A practical reply within one business day",
  "A clear recommendation on next steps",
  "No pressure, no vague sales theater",
];

const serviceOptions = [
  "Custom Website Development",
  "Web Applications",
  "WordPress Websites",
  "Shopify & E-commerce",
  "Custom Software Solutions",
  "Inventory Management",
  "Other",
];

function buildMailto({
  name,
  email,
  company,
  service,
  message,
}: {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}) {
  const subject = encodeURIComponent(`Project brief from ${name || "AYK website visitor"}`);
  const body = encodeURIComponent(
    [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      service ? `Service: ${service}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return `mailto:hello@ayksolutions.com?subject=${subject}&body=${body}`;
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactPageShell />}>
      <ContactPageContent />
    </Suspense>
  );
}

function ContactPageContent() {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service") ?? "";
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const budget = String(fd.get("budget") || "");
    const timeline = String(fd.get("timeline") || "");
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const company = String(fd.get("company") || "");
    const service = String(fd.get("service") || "");
    const message = String(fd.get("message") || "");
    const composedMessage = [
      message,
      budget ? `Budget: ${budget}` : "",
      timeline ? `Timeline: ${timeline}` : "",
    ]
      .filter(Boolean)
      .join("\n\n")
      .slice(0, 2000);
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          service,
          message: composedMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = (await response.json()) as { ok?: boolean; persisted?: boolean };

      if (result.persisted === false) {
        window.location.href = buildMailto({
          name,
          email,
          company,
          service,
          message: composedMessage,
        });
        toast.info("Email fallback opened. Send the draft so we receive your brief directly.");
        return;
      }

      setDone(true);
      toast.success("Message sent. We will be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      window.location.href = buildMailto({
        name,
        email,
        company,
        service,
        message: composedMessage,
      });
      toast.error("We could not reach the form service, so an email fallback was opened.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="professional-shell">
        <div className="absolute inset-0 brand-grid animate-grid-drift opacity-45 [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 md:py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(300px,0.55fr)] lg:items-end">
          <Reveal>
            <p className="section-kicker">Contact</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-display font-semibold leading-tight md:text-5xl">
              Tell us what you need to build, improve, or automate.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Share the problem, timeline, and business context. We will reply with the right next
              step, whether that is a discovery call, audit, or scoped proposal.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="professional-card rounded-[1.75rem] p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <MessagesSquare size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    First response
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Within one business day.
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {expectations.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-[color:var(--accent-technical)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_360px]">
        <Reveal>
          <form onSubmit={handle} className="professional-card rounded-[1.75rem] p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Your name" name="name" required placeholder="Jane Doe" />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
              />
              <Field label="Company" name="company" placeholder="Acme Co." />
              <SelectField
                label="Service interested in"
                name="service"
                options={serviceOptions}
                defaultValue={serviceFromUrl}
              />
              <SelectField
                label="Estimated budget"
                name="budget"
                options={["Not sure yet", "$3k - $8k", "$8k - $20k", "$20k - $50k", "$50k+"]}
              />
              <Field label="Timeline" name="timeline" placeholder="Launch in 8 weeks" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold">Project brief</label>
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={1800}
                rows={7}
                placeholder="What are you trying to build? What problem should it solve? Any deadlines, integrations, or constraints we should know about?"
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>

            <button
              type="submit"
              disabled={loading || done}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-[#b8040b] hover:shadow-glow disabled:translate-y-0 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending
                </>
              ) : done ? (
                <>
                  <CheckCircle2 size={16} /> Message sent
                </>
              ) : (
                <>
                  Send project brief <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="space-y-5 lg:sticky lg:top-28">
            <InfoCard
              icon={Mail}
              title="Email"
              body="hello@ayksolutions.com"
              href="mailto:hello@ayksolutions.com"
            />
            <InfoCard icon={Phone} title="Phone" body="+32 466 31 77 14" href="tel:+32466317714" />
            <InfoCard
              icon={MapPin}
              title="Location"
              body="Chau. d'Anvers 11, 1000 Bruxelles, Belgium"
            />
            <InfoCard icon={Clock} title="Response time" body="Within one business day" />
            <InfoCard
              icon={ShieldCheck}
              title="Best fit"
              body="Websites, apps, automation, and custom software"
            />
            <div className="metric-strip rounded-[1.5rem] p-5 text-background shadow-card">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-background/78">
                Prefer email?
              </p>
              <p className="mt-2 text-sm leading-6 text-background/84">
                You can send the same brief directly and we will reply from the same inbox.
              </p>
              <div className="mt-5 grid gap-2">
                <a
                  href="https://wa.me/32466317714?text=Hi%20AYK%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1db954]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp us now
                </a>
                <a
                  href="mailto:hello@ayksolutions.com?subject=Project%20brief%20for%20AYK%20Solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-[#b8040b]"
                >
                  Email project brief <ArrowRight size={15} />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-background transition hover:border-primary/60 hover:text-primary"
                >
                  Review services
                </Link>
              </div>
            </div>
          </aside>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <Reveal>
          <p className="section-kicker">Questions</p>
          <h2 className="mt-3 text-2xl font-display font-semibold md:text-3xl">
            Frequently asked before a first call.
          </h2>
        </Reveal>
        <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-card">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-b border-border p-6 last:border-b-0 open:bg-secondary/35"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display font-semibold">{f.q}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPageShell() {
  return (
    <section className="professional-shell">
      <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
        <p className="section-kicker">Contact</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-display font-semibold leading-tight md:text-5xl">
          Tell us what you need to build, improve, or automate.
        </h1>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  defaultValue = "",
}: {
  label: string;
  name: string;
  options?: string[];
  defaultValue?: string;
}) {
  const values = options ?? serviceOptions;
  const selected = values.includes(defaultValue) ? defaultValue : "";

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">{label}</label>
      <select
        name={name}
        defaultValue={selected}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
      >
        <option value="">Select...</option>
        {values.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
  href,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-soft">
        <Icon size={18} />
      </div>
      <h3 className="mt-4 font-display font-semibold">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{body}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="technical-card block rounded-[1.5rem] p-5 transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-glow"
      >
        {content}
      </a>
    );
  }

  return <div className="technical-card rounded-[1.5rem] p-5">{content}</div>;
}
