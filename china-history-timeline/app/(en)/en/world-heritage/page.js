import { ERAS, stripRuby } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, findEventEn } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";
import { FeaturePage, ItemCard, PointMap } from "@/components/en/EnFeature";

const title = "UNESCO World Heritage Sites in China, by Dynasty";
const description =
  "The Great Wall, the Terracotta Army, the Forbidden City and more: China’s World Heritage Sites that appear on this timeline, on a map, with the dynasty and era each one comes from.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/world-heritage", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/world-heritage", image: { title: "World Heritage Sites in China", seal: "遺" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

// Same selection as the Japanese page: [eraId, event title (ja, partial), heritage name (ja, partial), location, x, y]
const SITES = [
  ["shang", "甲骨文字", "殷墟遺跡", "Anyang, Henan", 325, 181],
  ["chunqiu", "孔子の誕生", "曲阜", "Qufu, Shandong", 344, 185],
  ["qin", "中国統一", "秦始皇陵", "Xi’an, Shaanxi", 274, 189],
  ["qin", "万里の長城", "万里の長城", "Beijing (Badaling) and elsewhere", 327, 132],
  ["westernhan", "西域へ", "張騫", "Chenggu County, Hanzhong, Shaanxi", 273, 209],
  ["nanbei", "華北統一", "雲岡石窟", "Datong, Shanxi", 309, 149],
  ["nanbei", "漢化政策", "龍門石窟", "Luoyang, Henan", 310, 194],
  ["sui", "大運河の建設", "京杭大運河", "Beijing to Hangzhou, Zhejiang", 371, 205],
  ["tang", "唐の建国", "大明宮", "Xi’an, Shaanxi", 292, 205],
  ["yuan", "元の建国", "元上都", "Inner Mongolia", 339, 123],
  ["ming", "明の建国", "明孝陵", "Nanjing, Jiangsu", 358, 218],
  ["ming", "北京遷都", "紫禁城", "Beijing", 340, 145],
  ["qing", "治世（最盛期へ）", "避暑山荘", "Chengde, Hebei", 352, 136],
];

function resolve([eraId, evTitle, hName, location, x, y]) {
  const ev = ERAS.find((e) => e.id === eraId)?.events.find((e) => stripRuby(e.title).includes(evTitle));
  const idx = ev?.heritage?.findIndex((h) => stripRuby(h.name).includes(hName)) ?? -1;
  if (!ev || idx < 0) return null;
  const en = findEventEn(ev.slug);
  const item = en?.event.heritage[idx];
  if (!item) return null;
  return { ...item, era: en.era, eventSlug: ev.slug, location, x, y };
}

const RESOLVED = SITES.map(resolve).filter(Boolean);

export default function EnglishWorldHeritagePage() {
  return (
    <FeaturePage
      title="World Heritage Sites in China"
      jaPath="/world-heritage"
      intro="China has many UNESCO World Heritage Sites, and most are closely bound up with the history of a particular dynasty. Here are the World Heritage Sites that appear on this timeline, with the era each one comes from."
      related={[
        { href: "/en/terracotta-army", label: "The Terracotta Army" },
        { href: "/en/great-wall", label: "The Great Wall" },
        { href: "/en/eras", label: "All eras" },
      ]}
    >
      <PointMap
        outline={CHINA_OUTLINE}
        taiwan={TAIWAN_OUTLINE}
        points={RESOLVED}
        note="A map of China based on its real coastline. The numbers match the list below."
        labels={[
          { label: "Beijing", x: 355, y: 154, anchor: "start" },
          { label: "Xi’an", x: 284, y: 230 },
          { label: "Shanghai", x: 388, y: 220, anchor: "start" },
          { label: "Inner Mongolia", x: 420, y: 90 },
          { label: "Xinjiang · Silk Road", x: 105, y: 165 },
          { label: "Tibet", x: 195, y: 265 },
        ]}
      />
      <div className="flex flex-col gap-4">
        {RESOLVED.map((s, i) => (
          <ItemCard
            key={s.name}
            index={i + 1}
            title={s.name}
            subtitle={s.era.name}
            meta={s.location}
            imageUrl={s.imageUrl}
            imageType={s.type}
            credit={s.credit}
            links={[{ href: `/en/events/${s.eventSlug}`, label: "Read the related event" }]}
          >
            {s.description}
          </ItemCard>
        ))}
      </div>
    </FeaturePage>
  );
}
