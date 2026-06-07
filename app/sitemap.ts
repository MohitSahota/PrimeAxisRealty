import { MetadataRoute } from "next";
import { properties } from "../data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const propertyUrls = properties.map((property) => ({
    url: `https://primeaxisrealty.in/properties/${property.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: "https://primeaxisrealty.in",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: "https://primeaxisrealty.in/properties",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },

    {
      url: "https://primeaxisrealty.in/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...propertyUrls,
  ];
}