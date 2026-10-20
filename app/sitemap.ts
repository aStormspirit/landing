import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://shinkadev.org";

const languages = {
  ru: `${siteUrl}/ru/`,
  en: `${siteUrl}/en/`,
  "x-default": `${siteUrl}/ru/`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/ru/`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${siteUrl}/en/`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages },
    },
  ];
}
