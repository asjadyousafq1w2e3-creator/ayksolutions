import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects and Dine3D | Novalix",
  description: "Explore Novalix projects, including Dine3D restaurant POS, ordering and inventory.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
