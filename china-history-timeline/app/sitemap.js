import { ERAS, SITE_URL } from "@/lib/data";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
    { url: `${SITE_URL}/search`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/people`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/eras`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const eventRoutes = ERAS.flatMap((era) =>
    era.events.map((event) => ({
      url: `${SITE_URL}/events/${event.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  const peopleRoutes = ERAS.map((era) => ({
    url: `${SITE_URL}/people/${era.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const eraRoutes = ERAS.map((era) => ({
    url: `${SITE_URL}/eras/${era.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...eventRoutes, ...peopleRoutes, ...eraRoutes];
}
