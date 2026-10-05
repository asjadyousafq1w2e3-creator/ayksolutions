import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projectsData } from "@/data/caseStudies";

const domain = "https://www.novalix.tech";
const entry = (path: string): MetadataRoute.Sitemap[number] => ({ url: `${domain}${path}` });

const belgiumLanguages = {
  "en-BE": `${domain}/be/en/web-design-belgium/`,
  "fr-BE": `${domain}/be/fr/creation-site-web-belgique/`,
  "nl-BE": `${domain}/be/nl/webdesign-belgie/`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["/", "/services/", "/projects/", "/about/", "/contact/", "/pricing/"].map(entry),
    ...Object.values(belgiumLanguages).map((url) => ({
      url,
      alternates: { languages: belgiumLanguages },
    })),
    entry("/sa/en/web-design-saudi-arabia/"),
    entry("/au/en/small-business-web-design/"),
    ...services.map((service) => entry(`/services/${service.slug}/`)),
    ...projectsData.map((project) => entry(`/projects/${project.slug}/`)),
  ];
}
