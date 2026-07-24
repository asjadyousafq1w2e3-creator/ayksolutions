import type { Metadata } from "next";
import Link from "next/link";
import { businessIdentity } from "@/data/businessIdentity";

export const metadata: Metadata = {
  title: "Terms and Conditions | AYK Solutions",
  description: "Terms and conditions governing the use of the AYK Solutions website and services.",
  robots: { index: true, follow: false },
  alternates: { canonical: "https://ayksolutions.com/terms/" },
};

const lastUpdated = "July 2026";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <div className="mb-8 rounded-2xl border-2 border-dashed border-amber-400/60 bg-amber-50/50 p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Development Notice</p>
        <p className="mt-1 text-sm text-amber-700">
          These terms are a general-use placeholder. They must be reviewed and finalised by a
          qualified lawyer before being relied upon or published as official terms.
        </p>
      </div>

      <p className="section-kicker">Legal</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Terms and Conditions
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground">
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">1. About These Terms</h2>
          <p className="mt-3">
            These terms govern your use of the {businessIdentity.name} website at{" "}
            <a href={businessIdentity.website} className="text-primary hover:underline">{businessIdentity.website}</a>.
            By using our website, you accept these terms. If you do not accept them, please do not
            use the website.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">2. Use of the Website</h2>
          <p className="mt-3">
            You may use this website for lawful purposes only. You must not misuse the website,
            attempt to gain unauthorised access to any part of it, or transmit any harmful content.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">3. Intellectual Property</h2>
          <p className="mt-3">
            All content on this website — including text, design, graphics and code — is the
            intellectual property of {businessIdentity.name} unless otherwise stated. You may not
            reproduce any content without written permission.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">4. Service Enquiries</h2>
          <p className="mt-3">
            Submitting a contact form or enquiry does not constitute a contract. A project engagement
            begins only when both parties have agreed to a written scope, timeline and payment terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">5. Limitation of Liability</h2>
          <p className="mt-3">
            To the extent permitted by law, {businessIdentity.name} is not liable for any indirect
            or consequential losses arising from use of this website or any information contained
            within it.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">6. Governing Law</h2>
          <p className="mt-3">
            These terms are governed by the laws of Belgium. Any disputes shall be subject to the
            exclusive jurisdiction of the Belgian courts.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">7. Changes</h2>
          <p className="mt-3">
            We reserve the right to update these terms at any time. Continued use of the website
            after changes are published constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">8. Contact</h2>
          <p className="mt-3">
            For questions about these terms:{" "}
            <a href={`mailto:${businessIdentity.email}`} className="text-primary hover:underline">
              {businessIdentity.email}
            </a>
            {" — "}
            {businessIdentity.streetAddress}, {businessIdentity.postalCode}{" "}
            {businessIdentity.cityFr}, {businessIdentity.country}.
          </p>
        </section>

        <div className="border-t border-border pt-6 flex gap-4">
          <Link href="/privacy" className="text-xs font-semibold text-primary hover:underline">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="text-xs font-semibold text-primary hover:underline">
            Cookie Policy
          </Link>
          <Link href="/" className="text-xs font-semibold text-muted-foreground hover:text-primary transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
