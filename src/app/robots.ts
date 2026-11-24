import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

// Served at /robots.txt. The whole site is open to search engines.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
