import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import { getAllLocations } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/dienstleistungen",
    "/ueber-uns",
    "/standorte",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  const serviceRoutes = services.map((s) => `/dienstleistungen/${s.slug}`);
  const locationRoutes = getAllLocations().map((l) => `/standorte/${l.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
