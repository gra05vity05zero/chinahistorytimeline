import { ERAS, SITE_URL, getEraFigures, personSlug } from "@/lib/data";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
    { url: `${SITE_URL}/search`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/people`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/eras`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/mnemonics`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/idioms`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/year-mnemonics`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/japan-china-timeline`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/terracotta-army`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/world-heritage`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  const eventRoutes = ERAS.flatMap((era) =>
    era.events.map((event) => ({
      url: `${SITE_URL}/events/${event.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  // 人物情報が未登録の時代ページは実質空ページのためサイトマップから除外する
  const peopleRoutes = ERAS.filter((era) => getEraFigures(era).length > 0).map((era) => ({
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

  // 伝記本文（bio）が用意されている人物のみ個別ページをサイトマップに含める
  const personRoutes = ERAS.flatMap((era) =>
    getEraFigures(era)
      .filter((p) => p.bio)
      .map((p) => ({
        url: `${SITE_URL}/people/${era.id}/${personSlug(p.name)}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.6,
      }))
  );

  return [...staticRoutes, ...eventRoutes, ...peopleRoutes, ...eraRoutes, ...personRoutes];
}
