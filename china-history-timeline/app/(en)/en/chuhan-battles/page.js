import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, getPeopleByEraEn } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";
import { FeaturePage, Section, FlowList, BattleCard, PointMap, jaEventSlug } from "@/components/en/EnFeature";

const title = "The Chu–Han Contention: A Battle Map of Xiang Yu and Liu Bang";
const description =
  "From the revolt of Chen Sheng and Wu Guang to the Battle of Gaixia: the fall of Qin and the Chu–Han Contention between Xiang Yu and Liu Bang, battle by battle — Julu, Hongmen, Pengcheng, Gaixia and more — with a map.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/chuhan-battles", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/chuhan-battles", image: { title: "The Chu–Han Contention", subtitle: "Battle map", seal: "楚" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ev = (eraId, key) => {
  const s = jaEventSlug(ERAS, stripRuby, eraId, key);
  return s ? `/en/events/${s}` : null;
};
const fig = (eraId, slug) => getPeopleByEraEn().find((r) => r.era.id === eraId)?.people.find((p) => p.slug === slug) || null;

const CHENSHENG = ev("qin", "陳勝");
const HONGMEN = ev("qin", "鴻門");
const HANFOUND = ev("westernhan", "漢を建国");
const XIANGYU = fig("qin", "xiang-yu");
const LIUBANG = fig("westernhan", "liu-bang");
const portrait = (p) => (p ? { name: p.name, imageUrl: p.imageUrl, credit: p.credit } : null);
const life = (p, label) => (p ? { href: p.href, label } : null);

const FLOW = [
  { year: "209 BC", title: "The revolt of Chen Sheng and Wu Guang", note: "The peasants Chen Sheng and Wu Guang rise, and anti-Qin forces stir everywhere.", anchor: "battle-1" },
  { year: "209 BC", title: "Xiang Liang and Xiang Yu raise troops", note: "Xiang Yu, of a great Chu family, becomes with his uncle Xiang Liang the core of the anti-Qin forces." },
  { year: "207 BC", title: "The Battle of Julu", note: "With the do-or-die resolve of “breaking the cauldrons and sinking the boats,” Xiang Yu crushes the main Qin army.", anchor: "battle-2" },
  { year: "206 BC", title: "The fall of Qin and the Feast at Hong Gate", note: "Xiang Yu confronts Liu Bang, who entered Xianyang first; Liu Bang narrowly escapes assassination.", anchor: "battle-3" },
  { year: "206 BC", title: "The Battle of Chencang", note: "Liu Bang and Han Xin retake Guanzhong with a famous ruse, and the Chu–Han War begins.", anchor: "battle-4" },
  { year: "205 BC", title: "The Battle of Pengcheng", note: "Xiang Yu destroys Liu Bang’s 560,000-strong coalition with just 30,000 elite troops.", anchor: "battle-5" },
  { year: "204 BC", title: "The Battle of Jingxing (backs to the river)", note: "Han Xin defeats Zhao’s great army with a small force, giving rise to the saying “fighting with one’s back to the river.”", anchor: "battle-6" },
  { year: "204–203 BC", title: "The struggle for Xingyang and Chenggao", note: "Cornered again and again, Liu Bang doggedly keeps up a war of attrition.", anchor: "battle-7" },
  { year: "202 BC", title: "The Battle of Gaixia", note: "Surrounded by “songs of Chu on four sides,” Xiang Yu takes his own life and the war ends.", anchor: "battle-8" },
  { year: "202 BC", title: "Liu Bang founds the Han", note: "The peasant-born Liu Bang takes the throne, beginning a Han dynasty that would last four hundred years.", href: HANFOUND },
];

const BATTLES = [
  { no: 1, id: "battle-1", year: "209 BC", name: "The Dazexiang Uprising (the revolt of Chen Sheng and Wu Guang)", location: "Dazexiang, Suzhou, Anhui", x: 330, y: 215,
    sides: [["Rebels", "Chen Sheng, Wu Guang"], ["Qin", "local commandery garrisons"]],
    body: "On their way to frontier duty, delayed by heavy rain and facing execution for missing the deadline, the peasants Chen Sheng and Wu Guang rose in revolt with the cry “Are kings, lords, generals and ministers born to their rank?” The revolt spread swiftly across North China, and Chen Sheng went so far as to proclaim an independent regime, “Zhangchu.” The rising itself was crushed in about half a year, but it inspired Xiang Yu, Liu Bang and anti-Qin forces everywhere to take up arms one after another, sealing Qin’s collapse.",
    links: [{ href: CHENSHENG, label: "Read the revolt of Chen Sheng and Wu Guang" }, { href: "/en/people/qin/chen-sheng", label: "Chen Sheng" }] },
  { no: 2, id: "battle-2", year: "207 BC", name: "The Battle of Julu", location: "Near Julu County, Xingtai, Hebei", x: 329, y: 169,
    sides: [["Anti-Qin coalition", "Xiang Yu"], ["Qin", "Zhang Han, Wang Li"]],
    body: "To relieve the anti-Qin forces besieged at Julu by the main Qin army, Xiang Yu led his troops across the river, then sank the boats and smashed the cooking pots so that his men had no way back and must fight to the death. With this ruse, “breaking the cauldrons and sinking the boats,” Xiang Yu’s army won all nine fierce engagements and destroyed the main Qin army. The armies of the other lords, which had watched from the sidelines, are said to have been so awed by his ferocity that they submitted without a fight, and the victory established Xiang Yu as leader of the anti-Qin coalition.",
    portrait: portrait(XIANGYU), links: [life(XIANGYU, "The life of Xiang Yu")].filter(Boolean) },
  { no: 3, id: "battle-3", year: "206 BC", name: "The fall of Qin and the Feast at Hong Gate", location: "Lintong District, Xi’an, Shaanxi", x: 287, y: 197,
    sides: [["Liu Bang’s camp", "Liu Bang, Zhang Liang, Fan Kuai"], ["Xiang Yu’s camp", "Xiang Yu, Fan Zeng"]],
    body: "While the coalition was defeating the main Qin army at Julu, Liu Bang had led a separate force into the Qin capital Xianyang first. Xiang Yu, arriving later, was enraged and invited Liu Bang to a banquet at Hong Gate. His adviser Fan Zeng tried to have Liu Bang killed under cover of a sword dance, but Liu Bang’s follower Fan Kuai forced his way into the feast with sword and shield and glared down the room, and Liu Bang slipped away. After this “Feast at Hong Gate,” Xiang Yu parceled out lands to the lords and called himself “Hegemon-King of Western Chu,” but discontent with his rewards soon sparked the Chu–Han War.",
    portrait: portrait(LIUBANG), links: [{ href: HONGMEN, label: "Read the fall of Qin and the Feast at Hong Gate" }, life(LIUBANG, "The life of Liu Bang")].filter(Boolean) },
  { no: 4, id: "battle-4", year: "206 BC", name: "The Battle of Chencang", location: "Baoji, Shaanxi", x: 266, y: 200,
    sides: [["Han", "Liu Bang, Han Xin"], ["Yong", "Zhang Han"]],
    body: "Banished after Hong Gate to remote Hanzhong, Liu Bang moved to retake Guanzhong on the advice of Han Xin, whom he had made supreme general. Openly repairing the plank roads through the mountains to draw the enemy’s eye, he secretly sent a force along the back road through Chencang — the ruse of “openly repairing the plank road, secretly crossing at Chencang” — and defeated the army of the former Qin general Zhang Han, who held Guanzhong. With his base in Guanzhong regained, Liu Bang opened the full-scale struggle with Xiang Yu for the realm: the Chu–Han War.",
    portrait: portrait(LIUBANG), links: [{ href: HANFOUND, label: "Read Liu Bang’s founding of the Han" }, life(LIUBANG, "The life of Liu Bang")].filter(Boolean) },
  { no: 5, id: "battle-5", year: "205 BC", name: "The Battle of Pengcheng", location: "Xuzhou, Jiangsu", x: 347, y: 198,
    sides: [["Chu", "Xiang Yu"], ["Han coalition", "Liu Bang"]],
    body: "While Xiang Yu was away suppressing a revolt in Qi, Liu Bang gathered the lords into an army said to number 560,000 and took the Chu capital Pengcheng. But on hearing the news Xiang Yu raced back with just 30,000 elite horsemen, fell on the unwary Han army at dawn and quickly routed it. Many fleeing Han soldiers are said to have been driven into the Sui River and drowned, and Liu Bang himself barely escaped with a handful of followers. It was one of the great reversals of the war: an overwhelmingly larger coalition swept away by Xiang Yu’s mobile elite.",
    portrait: portrait(XIANGYU), links: [life(XIANGYU, "The life of Xiang Yu")].filter(Boolean) },
  { no: 6, id: "battle-6", year: "204 BC", name: "The Battle of Jingxing (backs to the river)", location: "Near Jingxing County, Shijiazhuang, Hebei", x: 315, y: 155,
    sides: [["Han", "Han Xin, Zhang Er"], ["Zhao", "Chen Yu"]],
    body: "Leading a separate Han force, Han Xin set out to defeat Zhao’s great army with a small one by deliberately camping with his back to a river — against all the rules of war. With no way to retreat, his men fought with the resolve that “there is no way to live but to advance and fight,” while a detached force stormed the weakly held Zhao camp and raised Han flags, and the Zhao army collapsed. The tactic became the proverb “fighting with one’s back to the river,” and the battle showed the realm the true worth of Han Xin, whom Xiao He had once called “a gentleman without equal in the land.”" },
  { no: 7, id: "battle-7", year: "204–203 BC", name: "The struggle for Xingyang and Chenggao", location: "Near Xingyang, Henan", x: 317, y: 193,
    sides: [["Han", "Liu Bang, Ji Xin"], ["Chu", "Xiang Yu"]],
    body: "After his crushing defeat at Pengcheng, Liu Bang held the strongholds of Xingyang and Chenggao and fought a long war of attrition with Xiang Yu. At one point he was completely surrounded and seemed lost, but his loyal follower Ji Xin disguised himself as Liu Bang and pretended to surrender, letting the real Liu Bang escape through the west gate. After a long standoff the two sides agreed to divide the realm east and west along the Hong Canal, but Liu Bang, on the advice of Zhang Liang and Chen Ping, broke the pact and pursued the withdrawing Xiang Yu.",
    portrait: portrait(LIUBANG), links: [{ href: HANFOUND, label: "Read Liu Bang’s founding of the Han" }, life(LIUBANG, "The life of Liu Bang")].filter(Boolean) },
  { no: 8, id: "battle-8", year: "202 BC", name: "The Battle of Gaixia", location: "Near Guzhen County, Suzhou, Anhui", x: 360, y: 213,
    sides: [["Han coalition", "Han Xin, Liu Bang, Peng Yue, Ying Bu"], ["Chu", "Xiang Yu"]],
    body: "A great Han army under Han Xin surrounded Xiang Yu’s exhausted troops at Gaixia in layer upon layer. At night, when songs of Chu, Xiang Yu’s homeland, were heard from the Han camps on every side, Xiang Yu is said to have lamented, “Has Han already taken all of Chu?” — and with these “songs of Chu on four sides” his soldiers lost all will to fight. After a poem of farewell to his beloved Consort Yu, Xiang Yu broke through the encirclement with a few horsemen, but, cornered on the bank of the Wu River, he took his own life. His death ended the Chu–Han War, and the victorious Liu Bang took the throne and founded the Han dynasty.",
    portrait: portrait(XIANGYU), links: [{ href: HANFOUND, label: "Read Liu Bang’s founding of the Han" }, life(XIANGYU, "The life of Xiang Yu")].filter(Boolean) },
];

export default function EnglishChuHanBattlesPage() {
  return (
    <FeaturePage
      title="The Chu–Han Contention: Battle Map"
      jaPath="/chuhan-battles"
      intro="From the revolt of Chen Sheng and Wu Guang in 209 BC to the Battle of Gaixia in 202 BC, the few years between the fall of Qin and the unification under Han were among the most dramatic in Chinese history, as two contrasting heroes, Xiang Yu and Liu Bang, fought for the realm. This page follows eight major battles — Julu, Hong Gate, Pengcheng, Gaixia and more — and the generals who fought them."
      related={[
        { href: "/en/eras/qin", label: "The Qin dynasty" },
        { href: "/en/chunqiu-zhanguo-battles", label: "Spring and Autumn and Warring States battles" },
        { href: "/en/sanguo-battles", label: "Three Kingdoms battles" },
      ]}
    >
      <Section title="The course of events"><FlowList items={FLOW} /></Section>
      <Section title="Battle map">
        <PointMap outline={CHINA_OUTLINE} taiwan={TAIWAN_OUTLINE} points={BATTLES} note="A map based on China’s real coastline. The numbers mark the battles below."
          labels={[{ label: "Han (Liu Bang’s base)", x: 245, y: 165 }, { label: "Chu (Xiang Yu’s home)", x: 400, y: 183 }]} />
      </Section>
      <Section title="The major battles">
        <div className="flex flex-col gap-5">
          {BATTLES.map((b) => <BattleCard key={b.no} b={b} />)}
        </div>
      </Section>
    </FeaturePage>
  );
}
