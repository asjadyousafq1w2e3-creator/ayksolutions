import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Novalix",
  description:
    "Contact Novalix about a website, web application, POS platform or inventory system. Tell us about your project and receive a clear next step.",
  alternates: { canonical: "https://www.novalix.tech/contact/" },
  openGraph: { url: "https://www.novalix.tech/contact/" },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
