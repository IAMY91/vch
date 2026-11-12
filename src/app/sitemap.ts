import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://verena-claudia-haage.iamy.chatgpt.site";
  return ["", "/sources/", "/privacy/"].map((path) => ({
    url: base + path,
    lastModified: "2026-11-12",
    changeFrequency: "monthly" as const,
    priority: path ? 0.5 : 1,
  }));
}
