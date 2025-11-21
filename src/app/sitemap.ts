import type { MetadataRoute } from "next";
import { getAllCategories } from "@/lib/calculator-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";
  const now = new Date().toISOString();
  const urls: MetadataRoute.Sitemap = [
    { url: `${origin}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${origin}/calculators`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${origin}/privacy-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${origin}/cookies`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${origin}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${origin}/disclaimer`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${origin}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const categories = getAllCategories();
  for (const category of categories) {
    // EN routes
    urls.push({
      url: `${origin}/calculators/${category.id}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
    for (const calc of category.calculators) {
      urls.push({
        url: `${origin}/calculators/${category.id}/${calc.id}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

  }

  return urls;
}