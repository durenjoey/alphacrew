import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

// Served at /sitemap.xml. The site is one page.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/` }];
}
