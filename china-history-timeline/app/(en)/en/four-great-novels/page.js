import Link from "next/link";
import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { HeritageThumb } from "@/components/Shared";
import { FeaturePage, Section, Paras, DataTable, cardStyle, serif } from "@/components/en/EnFeature";

const title = "The Four Great Classical Novels of China and the Dynasties That Produced Them";
const description =
  "Romance of the Three Kingdoms, Water Margin and Journey to the West took their present form under the Ming; Dream of the Red Chamber was written under the Qing. Authors, dates, the periods the stories are set in, and what they are about.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/four-great-novels", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/four-great-novels", image: { title: "The Four Great Classical Novels", seal: "書" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const NOVELS = [
  {
    name: "Romance of the Three Kingdoms",
    author: "attributed to Luo Guanzhong",
    period: "Written: late Yuan–early Ming (14th c.) · Set: late Eastern Han to the Three Kingdoms (2nd–3rd c.)",
    body: "A long novel of the Three Kingdoms period, when Wei, Wu and Shu contended for supremacy after the collapse of the Eastern Han. It opens with Liu Bei, Guan Yu and Zhang Fei swearing brotherhood in the “Oath of the Peach Garden,” and is famous for scene after scene such as Zhuge Liang’s stratagems and the Battle of Red Cliffs. It grew from the official Records of the Three Kingdoms together with folk tradition and storytelling, and is hugely popular in Japan too, through adaptations such as Yoshikawa Eiji’s.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Peach_garden_ceremony.jpg",
    caption: "The Oath of the Peach Garden in a Ming edition of 1591 (Peking University Library)",
    credit: "Wikimedia Commons (public domain)",
    era: "sanguo",
  },
  {
    name: "Water Margin",
    author: "attributed to Shi Nai’an",
    period: "Written: late Yuan–early Ming (14th c.) · Set: end of the Northern Song (12th c.)",
    body: "The story of 108 heroes who, hounded by corrupt officials or turning their backs on the world, gather at Liangshan Marsh and take on the court as righteous outlaws. Highlights include Wu Song killing a tiger with his bare hands and the rollicking exploits of Lu Zhishen. In Japan, retellings by Shibata Renzaburō and Kitakata Kenzō are widely read.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Wu_Song_Water_Margin.jpg",
    caption: "Wu Song, a hero of Water Margin, in a 19th-century mural (the Long Corridor, Summer Palace, Beijing)",
    credit: "Wikimedia Commons (public domain)",
    era: "northernsong",
  },
  {
    name: "Journey to the West",
    author: "attributed to Wu Cheng’en",
    period: "Written: Ming (16th c.) · Set: Tang (7th c.)",
    body: "A fantastic tale of the Tang monk Tripitaka’s journey to India in search of scriptures, accompanied by the Monkey King Sun Wukong, Zhu Bajie (Pigsy) and Sha Wujing (Sandy). Its model was the real journey of the Tang monk Xuanzang, who broke the ban on travel abroad to reach India. Its humorous battles with demons and shape-shifters have long been loved in Japan as well, through many TV dramas and anime.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Journey_to_the_West,_Shidetang_Hall_of_Jinling_in_1592.jpg",
    caption: "An illustration from the 1592 Shidetang edition, Nanjing — thought to be the oldest surviving edition",
    credit: "Wikimedia Commons (public domain)",
    era: "tang",
    person: { href: "/en/people/tang/xuanzang", label: "The real Xuanzang" },
  },
  {
    name: "Dream of the Red Chamber",
    author: "Cao Xueqin",
    period: "Written: Qing (18th c.) · Set: Qing (18th c.)",
    body: "Set in the declining aristocratic Jia family, this masterpiece portrays the sickly young master Jia Baoyu and his romances with his cousins Lin Daiyu and Xue Baochai against the splendor and decay of Qing high society. Unlike the other three, it is not a work grown from popular storytelling but the creation of its author — a work of literary fiction often called the summit of classical Chinese literature for its subtle characters and detailed picture of daily life. It survives unfinished because of the author’s death, and the origin of its later chapters is still debated.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cao_Xueqin,_Dream_of_the_Red_Chamber_(4140083340).jpg",
    caption: "A stone relief of famous scenes from Dream of the Red Chamber (outskirts of Beijing)",
    credit: "Photo: klarititemplateshop / Wikimedia Commons, CC BY 2.0",
    era: "qing",
  },
];

const TABLE = [
  ["Romance of the Three Kingdoms", "Ming (took shape late Yuan–early Ming)", "Late Eastern Han to the Three Kingdoms"],
  ["Water Margin", "Ming (took shape late Yuan–early Ming)", "End of the Northern Song"],
  ["Journey to the West", "Ming (16th century)", "Tang"],
  ["Dream of the Red Chamber", "Qing (18th century)", "Qing"],
];

export default function EnglishFourGreatNovelsPage() {
  return (
    <FeaturePage
      title="The Four Great Classical Novels of China"
      jaPath="/four-great-novels"
      intro="Romance of the Three Kingdoms, Water Margin, Journey to the West and Dream of the Red Chamber are called the “Four Great Classical Novels,” the summit of the Chinese long novel. An earlier grouping, the “Four Masterworks,” included The Plum in the Golden Vase; in modern times Dream of the Red Chamber took its place and today’s line-up became established. The first three grew over centuries from oral storytelling into collective works, while Dream of the Red Chamber is the personal creation of its author, Cao Xueqin."
      related={[
        { href: "/en/four-inventions", label: "The Four Great Inventions" },
        { href: "/en/four-beauties", label: "The Four Beauties" },
        { href: "/en/people", label: "People" },
      ]}
    >
      <Section title="In which dynasties were they written?">
        <Paras items={["Romance of the Three Kingdoms, Water Margin and Journey to the West were all published in the forms we know under the Ming (the first two took shape at the end of the Yuan and beginning of the Ming). Only Dream of the Red Chamber is from the Qing, in the 18th century. Note that the period in which each story is set is different from the period in which it was written."]} />
        <div className="mt-3"><DataTable head={["Novel", "Dynasty of writing", "Period of the story"]} rows={TABLE} /></div>
      </Section>

      <div className="flex flex-col gap-5">
        {NOVELS.map((n, i) => (
          <div key={n.name} style={cardStyle}>
            <div className="relative" style={{ width: "100%", height: 190, backgroundColor: "#EFE7D0", overflow: "hidden" }}>
              <HeritageThumb imageUrl={n.imageUrl} name={n.name} type="building" />
              <span className="absolute flex items-center justify-center" style={{ top: 8, left: 8, width: 26, height: 26, borderRadius: 13, backgroundColor: COLORS.vermilion, color: "#FBF8F0", ...serif, fontSize: 12, fontWeight: 700 }}>{i + 1}</span>
            </div>
            <div style={{ padding: "14px 16px" }}>
              <div style={{ fontSize: 10.5, color: COLORS.mist, marginBottom: 8 }}>{n.caption} / {n.credit}</div>
              <h2 style={{ ...serif, fontSize: 19, fontWeight: 700, color: COLORS.ink }}>{n.name}</h2>
              <div style={{ fontSize: 12, color: COLORS.gold, ...serif, marginTop: 2 }}>{n.period}</div>
              <p style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>Author: {n.author}</p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>{n.body}</p>
              <div className="flex items-center gap-4 flex-wrap" style={{ marginTop: 10, fontSize: 13 }}>
                <Link href={`/en/eras/${n.era}`} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>The era it is set in →</Link>
                {n.person && <Link href={n.person.href} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>{n.person.label} →</Link>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </FeaturePage>
  );
}
