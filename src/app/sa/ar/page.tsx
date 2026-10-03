import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { businessIdentity } from "@/data/businessIdentity";

const domain = "https://novalix.tech";
const canonicalUrl = `${domain}/sa/ar/`;

export const metadata: Metadata = {
  title: "تصميم مواقع السعودية للشركات | Novalix",
  description:
    "تصميم مواقع إلكترونية احترافية للشركات في المملكة العربية السعودية. مواقع عربية وإنجليزية، تصميم متجاوب، تسليم سريع. ابدأ حضورك الرقمي مع Novalix.",
  alternates: {
    canonical: canonicalUrl,
    languages: {
      "ar-SA": canonicalUrl,
      "en-SA": `${domain}/sa/en/web-design-saudi-arabia/`,
      en: `${domain}/`,
      "x-default": `${domain}/`,
    },
  },
  openGraph: {
    title: "تصميم مواقع السعودية للشركات | Novalix",
    description: "تصميم مواقع إلكترونية احترافية للشركات في المملكة العربية السعودية.",
    url: canonicalUrl,
    locale: "ar_SA",
  },
};

/**
 * NOTICE: This page scaffold is ready for professional Arabic content.
 * The placeholder text below must be replaced with a human-reviewed
 * Arabic translation before this page is indexed or promoted.
 *
 * Mark this page as noindex until professional content is ready:
 * export const metadata = { robots: { index: false } };
 */

export default function ArabicSaudiPage() {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <section className="professional-shell" aria-labelledby="sa-ar-h1">
          <div className="absolute inset-0 brand-grid animate-grid-drift opacity-45 [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
          <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-14 md:pt-32 md:pb-20" dir="rtl">
            {/* Language switcher */}
            <div className="mb-8 flex flex-wrap gap-2">
              <Link
                href="/sa/en/web-design-saudi-arabia/"
                lang="en"
                dir="ltr"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] font-semibold text-muted-foreground hover:border-primary/40 hover:text-primary transition"
              >
                🇸🇦 English
              </Link>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                🇸🇦 عربي
              </span>
            </div>

            {/* ── PROFESSIONAL TRANSLATION REQUIRED ── */}
            {/* Replace everything in this notice block with final Arabic content */}
            <div className="rounded-2xl border-2 border-dashed border-amber-400/60 bg-amber-50/50 p-6 mb-10">
              <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Development Notice
              </p>
              <p className="mt-2 text-sm text-amber-700">
                This page requires a professional Arabic translation before publication. The page
                structure, metadata and hreflang are correctly configured. Replace the placeholder
                content below with human-reviewed Modern Standard Arabic.
              </p>
            </div>

            <Reveal>
              <h1
                id="sa-ar-h1"
                className="mt-2 max-w-4xl font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl"
                lang="ar"
              >
                {/* [PROFESSIONAL ARABIC TRANSLATION REQUIRED] */}
                تصميم مواقع إلكترونية احترافية للشركات في المملكة العربية السعودية
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground" lang="ar">
                {/* [PROFESSIONAL ARABIC TRANSLATION REQUIRED] */}
                نقدّم مواقع إلكترونية سريعة، احترافية ومُحسَّنة للتحويل للشركات في المملكة العربية
                السعودية. تصميم متجاوب مع الهواتف، دعم اللغتين العربية والإنجليزية، وتسليم سريع.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact?market=saudi-arabia"
                  dir="rtl"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-[#b8040b]"
                >
                  {/* [PROFESSIONAL ARABIC TRANSLATION REQUIRED] */}
                  احصل على استشارة مجانية
                  <ArrowRight size={16} className="rotate-180" />
                </Link>
                <Link
                  href="/sa/en/web-design-saudi-arabia/"
                  lang="en"
                  dir="ltr"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  View in English
                </Link>
              </div>
            </Reveal>

            {/* Contact strip */}
            <Reveal delay={0.15}>
              <div
                className="mt-14 rounded-[1.75rem] border border-border bg-card p-6 shadow-card"
                dir="rtl"
              >
                <p className="font-semibold text-foreground text-sm" lang="ar">
                  {/* [PROFESSIONAL ARABIC TRANSLATION REQUIRED] */}
                  تواصل معنا
                </p>
                <div className="mt-3 flex flex-col gap-1.5 text-xs text-muted-foreground">
                  <a
                    href={`tel:${businessIdentity.phonePlain}`}
                    dir="ltr"
                    className="hover:text-primary transition"
                  >
                    {businessIdentity.phone}
                  </a>
                  <a
                    href={businessIdentity.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#25D366] hover:underline"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {/* [PROFESSIONAL ARABIC TRANSLATION REQUIRED] */}
                    واتساب
                  </a>
                  <a
                    href={`mailto:${businessIdentity.email}`}
                    dir="ltr"
                    className="hover:text-primary transition"
                  >
                    {businessIdentity.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </body>
    </html>
  );
}
