import type { Metadata } from "next";
import { PricingSection } from "@/components/sections/PricingSection";

export const metadata: Metadata = {
  title: "Pricing & Packages | Transparent Software & Website Plans | Novalix",
  description:
    "Explore transparent pricing packages for custom websites, Shopify e-commerce, web applications, and AI lead automation. Multi-currency estimates in USD, SAR, EUR, and GBP.",
  alternates: { canonical: "https://www.novalix.tech/pricing/" },
  openGraph: { url: "https://www.novalix.tech/pricing/", images: ["/opengraph-image"] },
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      <PricingSection />
    </div>
  );
}
