import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/inquiries", priority: 0.9 },
    { path: "/adoption", priority: 0.8 },
    { path: "/guardian-program", priority: 0.7 },
    { path: "/guardian-program/application", priority: 0.6 },
    { path: "/our-dogs", priority: 0.7 },
    { path: "/our-dogs/our-girls", priority: 0.6 },
    { path: "/our-dogs/our-boys", priority: 0.6 },
    { path: "/resources", priority: 0.5 },
    { path: "/faq", priority: 0.5 },
    { path: "/contact", priority: 0.5 },
  ];

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
