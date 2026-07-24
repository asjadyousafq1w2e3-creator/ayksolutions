import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projectsData } from "@/data/caseStudies";

const domain = "https://ayksolutions.com";

function url(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = "monthly") {
  return {
    url: `${domain}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((s) =>
    url(`/services/${s.slug}/`, 0.8),
  );

  const projectPages = projectsData.map((p) =>
    url(`/projects/${p.slug}/`, 0.7),
  );

  return [
    // ── Global core pages ─────────────────────────────────────────────────────
    url("/", 1.0, "weekly"),
    url("/services/", 0.9, "weekly"),
    url("/projects/", 0.9, "monthly"),
    url("/about/", 0.8, "monthly"),
    url("/contact/", 0.9, "monthly"),
    url("/pricing/", 0.85, "monthly"),
    url("/insights/", 0.8, "weekly"),

    // ── Belgium (highest priority market) ────────────────────────────────────
    url("/be/en/web-design-belgium/", 0.95, "monthly"),
    url("/be/fr/creation-site-web-belgique/", 0.95, "monthly"),
    url("/be/nl/webdesign-belgie/", 0.95, "monthly"),

    // ── Saudi Arabia ─────────────────────────────────────────────────────────
    url("/sa/en/web-design-saudi-arabia/", 0.9, "monthly"),
    url("/sa/ar/", 0.9, "monthly"),

    // ── Australia ────────────────────────────────────────────────────────────
    url("/au/en/small-business-web-design/", 0.85, "monthly"),

    // ── Legal ─────────────────────────────────────────────────────────────────
    url("/privacy/", 0.3, "yearly"),
    url("/cookies/", 0.3, "yearly"),
    url("/terms/", 0.3, "yearly"),

    // ── Dynamic pages ────────────────────────────────────────────────────────
    ...servicePages,
    ...projectPages,
  ];
}
