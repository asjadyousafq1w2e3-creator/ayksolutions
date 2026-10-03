import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import RootLayoutClient from "./layout.client";
import { businessIdentity } from "@/data/businessIdentity";
import "../styles.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display-next",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans-next",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const domain = "https://novalix.tech";

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: {
    default: "POS Systems, Cloud Inventory & Web Systems | Novalix",
    template: "%s | Novalix",
  },
  description:
    "Novalix builds POS systems, cloud inventory and custom web systems. Explore Dine3D, our restaurant platform.",
  keywords: [
    "Novalix",
    "POS systems",
    "restaurant POS",
    "cloud inventory systems",
    "web systems",
    "Dine3D",
    "web design Belgium",
    "website development Belgium",
    "small business website Belgium",
    "web design Brussels",
    "professional website Belgium",
    "web design Saudi Arabia",
    "website development Saudi Arabia",
    "small business web design Australia",
    "ecommerce development Belgium",
    "Shopify developer Belgium",
    "WordPress website Belgium",
    "website redesign",
    "conversion-focused website",
    "mobile-first web design",
  ],
  authors: [{ name: "Novalix", url: domain }],
  creator: "Novalix",
  publisher: "Novalix",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: domain,
    languages: {
      en: `${domain}/`,
      "en-BE": `${domain}/be/en/web-design-belgium/`,
      "fr-BE": `${domain}/be/fr/creation-site-web-belgique/`,
      "nl-BE": `${domain}/be/nl/webdesign-belgie/`,
      "en-SA": `${domain}/sa/en/web-design-saudi-arabia/`,
      "ar-SA": `${domain}/sa/ar/`,
      "en-AU": `${domain}/au/en/small-business-web-design/`,
      "x-default": `${domain}/`,
    },
  },
  openGraph: {
    title: "POS Systems, Cloud Inventory & Web Systems | Novalix",
    description:
      "POS systems, cloud inventory and custom web systems from Novalix. Meet Dine3D for restaurants.",
    type: "website",
    url: domain,
    siteName: "Novalix",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "POS Systems, Cloud Inventory & Web Systems | Novalix",
    description: "POS systems, cloud inventory and web systems. Explore Dine3D.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    // google: "YOUR_GSC_VERIFICATION_CODE",  // Add when GSC is configured
    // other: { "msvalidate.01": "YOUR_BING_CODE" },
  },
};

/** JSON-LD structured data — Organization + WebSite */
function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${domain}/#organization`,
    name: businessIdentity.name,
    legalName: businessIdentity.legalName,
    url: domain,
    logo: {
      "@type": "ImageObject",
      url: `${domain}/transparent-logo.png`,
      width: 524,
      height: 476,
    },
    description:
      "Novalix builds POS systems, cloud inventory and custom web systems, including Dine3D for restaurants.",
    telephone: businessIdentity.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessIdentity.streetAddress,
      addressLocality: businessIdentity.city,
      postalCode: businessIdentity.postalCode,
      addressCountry: businessIdentity.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessIdentity.phone,
      contactType: "customer service",
      availableLanguage: ["English", "French", "Dutch", "Arabic"],
    },
    areaServed: [
      { "@type": "Country", name: "Belgium" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Country", name: "France" },
    ],
    sameAs: [
      // Add confirmed social profile URLs here when available
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${domain}/#website`,
    url: domain,
    name: "Novalix",
    description: "POS systems, cloud inventory and custom web systems for growing businesses.",
    publisher: { "@id": `${domain}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${domain}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('novalix-theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <StructuredData />
      </head>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
