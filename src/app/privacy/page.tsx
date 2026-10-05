import type { Metadata } from "next";
import Link from "next/link";
import { businessIdentity } from "@/data/businessIdentity";

export const metadata: Metadata = {
  title: "Privacy Policy | Novalix",
  description: "Privacy policy for Novalix — how we collect, use and protect personal data.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.novalix.tech/privacy/" },
};

const lastUpdated = "July 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      {/* Dev notice — remove before production */}
      <div className="mb-8 rounded-2xl border-2 border-dashed border-amber-400/60 bg-amber-50/50 p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
          Development Notice
        </p>
        <p className="mt-1 text-sm text-amber-700">
          This privacy policy was drafted using standard templates and your confirmed business
          details.
          <strong>
            {" "}
            Have this reviewed by a qualified lawyer before enabling public indexing or promoting
            the page.
          </strong>
        </p>
      </div>

      <p className="section-kicker">Legal</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground">
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">1. Who We Are</h2>
          <p className="mt-3">
            {businessIdentity.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the
            website{" "}
            <a href={businessIdentity.website} className="text-primary hover:underline">
              {businessIdentity.website}
            </a>
            .
          </p>
          <p className="mt-2">
            Business contact address: {businessIdentity.streetAddress},{" "}
            {businessIdentity.postalCode} {businessIdentity.cityFr}, {businessIdentity.country}.
          </p>
          <p className="mt-2">
            Email:{" "}
            <a href={`mailto:${businessIdentity.email}`} className="text-primary hover:underline">
              {businessIdentity.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">
            2. What Data We Collect
          </h2>
          <p className="mt-3">
            We may collect the following data when you use our website or contact us:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>Name and email address (when you submit a contact form or enquiry)</li>
            <li>Phone number (if provided voluntarily)</li>
            <li>Business name and website URL (if provided)</li>
            <li>Message content submitted through our contact form</li>
            <li>
              Technical data: IP address, browser type, pages visited, time on site (via analytics
              tools)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">
            3. How We Use Your Data
          </h2>
          <p className="mt-3">We use personal data to:</p>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>Respond to enquiries and quotation requests</li>
            <li>Communicate project updates with clients</li>
            <li>Improve the performance and content of our website</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-3">
            We do not sell, trade or rent your personal data to any third party. We do not use your
            data for automated decision-making or profiling.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">
            4. Legal Basis for Processing (GDPR)
          </h2>
          <p className="mt-3">
            For users in the European Economic Area (including Belgium), we process personal data on
            the following legal bases:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>
              <strong>Consent:</strong> when you submit a contact form
            </li>
            <li>
              <strong>Legitimate interests:</strong> for website analytics and service improvement
            </li>
            <li>
              <strong>Contractual necessity:</strong> to deliver agreed services to clients
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">5. Data Retention</h2>
          <p className="mt-3">
            We retain contact enquiry data for no longer than three years unless a continuing client
            relationship requires longer retention. Analytics data is anonymised and retained
            according to the applicable analytics platform settings.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">6. Cookies</h2>
          <p className="mt-3">
            This website may use cookies for analytics and performance purposes. See our{" "}
            <Link href="/cookies" className="text-primary hover:underline">
              Cookie Policy
            </Link>{" "}
            for full details.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">7. Your Rights</h2>
          <p className="mt-3">Under GDPR (and equivalent legislation), you have the right to:</p>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the relevant data protection authority</li>
          </ul>
          <p className="mt-3">
            To exercise your rights, contact us at{" "}
            <a href={`mailto:${businessIdentity.email}`} className="text-primary hover:underline">
              {businessIdentity.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">
            8. Third-Party Services
          </h2>
          <p className="mt-3">
            We may use third-party tools such as Google Analytics. These services have their own
            privacy policies and may set cookies on your device.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">
            9. Changes to This Policy
          </h2>
          <p className="mt-3">
            We may update this privacy policy periodically. Any material changes will be noted with
            an updated &quot;Last updated&quot; date at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-foreground">10. Contact</h2>
          <p className="mt-3">
            For privacy questions or data requests, contact us at{" "}
            <a href={`mailto:${businessIdentity.email}`} className="text-primary hover:underline">
              {businessIdentity.email}
            </a>{" "}
            or write to us at {businessIdentity.streetAddress}, {businessIdentity.postalCode}{" "}
            {businessIdentity.cityFr}, {businessIdentity.country}.
          </p>
        </section>

        <div className="border-t border-border pt-6">
          <Link href="/" className="text-xs font-semibold text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
