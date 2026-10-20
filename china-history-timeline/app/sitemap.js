import { ERAS, SITE_URL, getEraFigures, personSlug } from "@/lib/data";

export default function sitemap() {
  // lastModifiedは付けない。ビルド日時（new Date()）を入れると毎デプロイで全ページが
  // 「更新された」扱いになり、Googleがこの値自体を信用しなくなるため。
  const staticRoutes = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${SITE_URL}/people`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/eras`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/mnemonics`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/idioms`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/year-mnemonics`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/japan-china-timeline`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/qinshihuang`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/terracotta-army`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/world-heritage`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/china-castles`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/emperors`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/china-capitals`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/silk-road`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/great-wall`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/four-inventions`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/four-great-novels`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/history-books`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/novelists`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/sanguo-battles`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/sanguo-comparison`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/chuhan-battles`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/chunqiu-zhanguo-battles`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/suitang-battles`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/yangjiajiang`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/suikoden`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/saiyuki`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/funny-episodes`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const eventRoutes = ERAS.flatMap((era) =>
    era.events.map((event) => ({
      url: `${SITE_URL}/events/${event.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  // 人物情報が未登録の時代ページは実質空ページのためサイトマップから除外する
  const peopleRoutes = ERAS.filter((era) => getEraFigures(era).length > 0).map((era) => ({
    url: `${SITE_URL}/people/${era.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const eraRoutes = ERAS.map((era) => ({
    url: `${SITE_URL}/eras/${era.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // 伝記本文（bio）が用意されている人物のみ個別ページをサイトマップに含める
  const personRoutes = ERAS.flatMap((era) =>
    getEraFigures(era)
      .filter((p) => p.bio)
      .map((p) => ({
        url: `${SITE_URL}/people/${era.id}/${personSlug(p.name)}`,
          changeFrequency: "yearly",
        priority: 0.6,
      }))
  );

  return [...staticRoutes, ...eventRoutes, ...peopleRoutes, ...eraRoutes, ...personRoutes];
}
