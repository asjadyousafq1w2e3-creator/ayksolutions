import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development, Ecommerce, AI and SaaS Projects | Our Work",
  description:
    "Explore our web development portfolio featuring ecommerce stores, AI interview platforms, automotive marketplaces and multi-tenant restaurant SaaS products.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
