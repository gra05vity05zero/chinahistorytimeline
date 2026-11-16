import { ERAS, stripRuby } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, findEventEn } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";
import { FeaturePage, ItemCard, PointMap } from "@/components/en/EnFeature";

const title = "Walled Cities, Passes and Fortresses of Chinese History";
const description =
  "Chengziya, the Great Wall, the Forbidden City, Shanhai Pass and more: the walled cities, fortresses and passes that appear on this timeline, with the era each was built in and the events they witnessed.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/china-castles", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/china-castles", image: { title: "Walled Cities and Fortresses of China", seal: "塁" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

// Same selection as the Japanese page: [eraId, event title (ja, partial), heritage name (ja, partial), location, x, y]
const SITES = [
  ["neolithic", "竜山", "城子崖", "Zhangqiu, Shandong", 348, 175],
  ["shang", "殷の建国", "鄭州商城", "Zhengzhou, Henan", 319, 193],
  ["chunqiu", "覇者となる", "斉国故城", "Linzi District, Zibo, Shandong", 354, 174],
  ["qin", "万里の長城の修築", "万里の長城", "Beijing (Badaling) and elsewhere", 327, 132],
  ["nanbei", "劉宋の建国", "建康城遺跡", "Nanjing, Jiangsu", 358, 218],
  ["ming", "北京遷都", "紫禁城", "Beijing", 340, 145],
  ["ming", "土木の変", "土木堡遺跡", "Huailai County, Hebei", 333, 141],
  ["qing", "清の北京入城", "山海関", "Qinhuangdao, Hebei", 365, 144],
];

function resolve([eraId, evTitle, hName, location, x, y]) {
  const ev = ERAS.find((e) => e.id === eraId)?.events.find((e) => stripRuby(e.title).includes(evTitle));
  const idx = ev?.heritage?.findIndex((h) => stripRuby(h.name).includes(hName)) ?? -1;
  if (!ev || idx < 0) return null;
  const en = findEventEn(ev.slug);
  const item = en?.event.heritage[idx];
  return item ? { ...item, era: en.era, eventSlug: ev.slug, location, x, y } : null;
}

const RESOLVED = SITES.map(resolve).filter(Boolean);

export default function EnglishChinaCastlesPage() {
  return (
    <FeaturePage
      title="Walled Cities and Fortresses of China"
      jaPath="/china-castles"
      intro="Chinese history is full of fortifications: walls guarding capitals, the Great Wall dividing the frontier, passes commanding strategic routes. Here are the walled cities, fortresses and passes that appear on this timeline, with the era each one comes from."
      related={[
        { href: "/en/great-wall", label: "The Great Wall" },
        { href: "/en/china-capitals", label: "Capitals of China" },
        { href: "/en/world-heritage", label: "World Heritage in China" },
      ]}
    >
      <PointMap outline={CHINA_OUTLINE} taiwan={TAIWAN_OUTLINE} points={RESOLVED} note="A map based on China’s real coastline. The numbers match the list below." />
      <div className="flex flex-col gap-4">
        {RESOLVED.map((s, i) => (
          <ItemCard key={s.name} index={i + 1} title={s.name} subtitle={s.era.name} meta={s.location} imageUrl={s.imageUrl} imageType={s.type} credit={s.credit} links={[{ href: `/en/events/${s.eventSlug}`, label: "Read the related event" }]}>
            {s.description}
          </ItemCard>
        ))}
      </div>
    </FeaturePage>
  );
}
