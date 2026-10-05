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

const domain = "https://www.novalix.tech";

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: "POS Systems, Cloud Inventory & Web Systems | Novalix",
  description:
    "Novalix builds POS systems, cloud inventory and custom web systems. Explore Dine3D, our restaurant platform.",
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
  openGraph: {
    images: ["/opengraph-image"],
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
};

/** JSON-LD structured data — Organization + WebSite */
function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${domain}/#organization`,
    name: businessIdentity.name,
    url: domain,
    logo: {
      "@type": "ImageObject",
      url: `${domain}/transparent-logo.png`,
      width: 551,
      height: 453,
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
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${domain}/#website`,
    url: domain,
    name: "Novalix",
    description: "POS systems, cloud inventory and custom web systems for growing businesses.",
    publisher: { "@id": `${domain}/#organization` },
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
