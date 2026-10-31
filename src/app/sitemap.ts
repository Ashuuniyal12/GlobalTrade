import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/international-trade",
    "/services/customs-documentation",
    "/services/freight-logistics",
    "/industries",
    "/industries/pharmaceuticals",
    "/industries/active-pharmaceutical-ingredients",
    "/industries/textiles",
    "/industries/raw-materials",
    "/global-markets",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const lastModified = "2026-10-26T00:00:00.000Z";

  return routes.map((route) => {
    let priority = 0.7;
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (
      route.startsWith("/industries/pharmaceuticals") ||
      route.startsWith("/industries/active-pharmaceutical-ingredients") ||
      route === "/services" ||
      route === "/contact"
    ) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (route.startsWith("/services") || route.startsWith("/industries")) {
      priority = 0.8;
      changeFrequency = "monthly";
    } else if (route === "/privacy-policy" || route === "/terms") {
      priority = 0.3;
      changeFrequency = "yearly";
    }

    return {
      url: `${siteConfig.url}${route}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
