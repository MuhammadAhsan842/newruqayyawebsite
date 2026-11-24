import type { MetadataRoute } from "next";
import { doctors, services } from "@/lib/hospital";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/doctors",
    "/appointments",
    "/about",
    "/contact",
    "/emergency",
  ];
  const extra = [
    ...services.map((s) => `/services/${s.slug}`),
    ...doctors.map((d) => `/doctors/${d.slug}`),
  ];
  return [...staticPaths, ...extra].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
