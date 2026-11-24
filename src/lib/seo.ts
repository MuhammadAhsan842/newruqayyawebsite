import type { Metadata } from "next";
import { hospital } from "@/lib/hospital";

export const siteUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:4327";

export function pageMeta(
  title: string,
  description: string,
  path = "/"
): Metadata {
  const full = title === hospital.name ? title : `${title} · ${hospital.name}`;
  return {
    title: full,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: full,
      description,
      url: path,
      siteName: hospital.name,
      locale: "en_PK",
      type: "website",
    },
  };
}
