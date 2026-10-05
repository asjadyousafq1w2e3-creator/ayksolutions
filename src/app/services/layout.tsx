import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Custom Websites, Web Apps & Business Software",
  description:
    "Explore Novalix services: custom websites, web applications, WordPress, Shopify, software solutions and inventory systems.",
  alternates: { canonical: "https://www.novalix.tech/services/" },
  openGraph: { url: "https://www.novalix.tech/services/" },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
