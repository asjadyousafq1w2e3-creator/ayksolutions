import type { Metadata } from "next";
import Link from "next/link";
import { businessIdentity } from "@/data/businessIdentity";

export const metadata: Metadata = {
  title: "Cookie Policy | AYK Solutions",
  description:
    "Cookie policy for AYK Solutions website — what cookies we use and how to manage them.",
  robots: { index: true, follow: false },
  alternates: { canonical: "https://ayksolutions.com/cookies/" },
};

const lastUpdated = "July 2026";

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <div className="mb-8 rounded-2xl border-2 border-dashed border-amber-400/60 bg-amber-50/50 p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
          Development Notice
        </p>
        <p className="mt-1 text-sm text-amber-700">
          Review and update cookie categories to accurately reflect the specific cookies your
          deployed site uses. Have this reviewed by a qualified lawyer before publication.
        </p>
      </div>

      <p className="section-kicker">Legal</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Cookie Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground">
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">
            1. What Are Cookies?
          </h2>
          <p className="mt-3">
            Cookies are small text files placed on your device by a website. They are widely used to
            make websites work, improve user experience and provide information to website owners.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">
            2. How We Use Cookies
          </h2>
          <p className="mt-3">
            {businessIdentity.name} uses the following categories of cookies on{" "}
            <a href={businessIdentity.website} className="text-primary hover:underline">
              {businessIdentity.website}
            </a>
            :
          </p>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground text-sm">Essential Cookies</h3>
              <p className="mt-2 text-xs">
                Required for the website to function. These cannot be disabled.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground text-sm">Analytics Cookies</h3>
              <p className="mt-2 text-xs">
                Used to understand how visitors use the website (e.g. pages visited, time on site).
                We may use Google Analytics for this purpose. This data is anonymised or
                pseudonymised wherever possible.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground text-sm">Functional Cookies</h3>
              <p className="mt-2 text-xs">
                Used to remember your preferences (e.g. language). These improve your experience but
                are not strictly required.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">
            3. Managing Cookies
          </h2>
          <p className="mt-3">
            You can control and delete cookies through your browser settings. Note that disabling
            cookies may affect website functionality. For more information, visit{" "}
            <a
              href="https://www.aboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              aboutcookies.org
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">
            4. Third-Party Cookies
          </h2>
          <p className="mt-3">
            Third-party services embedded in our website (such as Google Analytics) may set their
            own cookies. These are subject to the respective third party&apos;s privacy policy.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">5. Contact</h2>
          <p className="mt-3">
            Questions about our use of cookies?{" "}
            <a href={`mailto:${businessIdentity.email}`} className="text-primary hover:underline">
              {businessIdentity.email}
            </a>
          </p>
        </section>

        <div className="border-t border-border pt-6 flex gap-4">
          <Link href="/privacy" className="text-xs font-semibold text-primary hover:underline">
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold text-muted-foreground hover:text-primary transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
