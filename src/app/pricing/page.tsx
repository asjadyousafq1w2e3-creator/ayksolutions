import type { Metadata } from "next";
import { PricingSection } from "@/components/sections/PricingSection";

export const metadata: Metadata = {
  title: "Pricing & Packages | Transparent Software & Website Plans | AYK Solutions",
  description:
    "Explore transparent pricing packages for custom websites, Shopify e-commerce, web applications, and AI lead automation. Multi-currency estimates in USD, SAR, EUR, and GBP.",
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      <PricingSection />
    </div>
  );
}
