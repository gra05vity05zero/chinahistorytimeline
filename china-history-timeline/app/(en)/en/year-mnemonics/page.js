import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Paras, cardStyle, serif, jaEventSlug } from "@/components/en/EnFeature";

const title = "Key Dates in Chinese History and How to Remember Them";
const description =
  "The most important dates in Chinese history, from Qin’s unification in 221 BC to the founding of the People’s Republic in 1949, each with a simple hook to help you remember it.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/year-mnemonics", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/year-mnemonics", image: { title: "Key Dates in Chinese History", seal: "年" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ev = (eraId, key) => {
  const s = jaEventSlug(ERAS, stripRuby, eraId, key);
  return s ? `/en/events/${s}` : null;
};

const YEARS = [
  { year: "221 BC", event: "Qin unifies China", hook: "2-2-1: count down — two, two, one — and the six states are gone.", note: "The First Emperor ends 550 years of division.", href: ev("qin", "中国統一") },
  { year: "202 BC", event: "Liu Bang founds the Han", hook: "Just 19 years after 221: Qin’s empire barely outlived a generation.", note: "Victory over Xiang Yu in the Chu–Han war puts a peasant on the throne.", href: ev("westernhan", "漢を建国") },
  { year: "220", event: "Wei is founded; the Eastern Han ends", hook: "2-2-0 echoes 2-2-1 BC: the first great empire began at 221, the Han’s four centuries end at 220.", note: "Cao Pi receives the throne from Emperor Xian by abdication.", href: ev("sanguo", "魏の建国") },
  { year: "581", event: "The Sui is founded (Yang Jian)", hook: "Founded 581, reunified China 589 — eight years from founding to unity.", note: "The Sui ends some 270 years of division between north and south.", href: ev("sui", "隋の建国") },
  { year: "618", event: "The Tang is founded (Li Yuan)", hook: "6-1-8: the Sui lasted only 37 years (581–618) — another short unifier, like the Qin.", note: "Li Yuan, who rose at Taiyuan, takes the throne in Chang’an.", href: ev("tang", "唐の建国") },
  { year: "907", event: "The Tang falls (Zhu Quanzhong usurps the throne)", hook: "618 to 907: just under 300 years of Tang.", note: "Zhu Quanzhong founds the Later Liang, and the Five Dynasties begin.", href: ev("tang", "唐を簒奪") },
  { year: "960", event: "Zhao Kuangyin founds the Song", hook: "960 — forty years short of 1000, after about fifty years of the Five Dynasties.", note: "His officers drape a yellow imperial robe over him at Chenqiao.", href: ev("northernsong", "宋の建国") },
  { year: "1279", event: "The Southern Song falls; the Yuan unifies China", hook: "1279: the Yuan won all of China only about 90 years before it was driven out in 1368.", note: "The last Song emperor dies in the sea at Yamen.", href: ev("southernsong", "崖山") },
  { year: "1368", event: "The Ming is founded (Zhu Yuanzhang)", hook: "1-3-6-8: the digits climb (1, 3, 6, 8) just as Zhu Yuanzhang climbed from beggar-monk to emperor.", note: "A peasant-born rebel drives out the Mongols.", href: ev("ming", "明の建国") },
  { year: "1644", event: "The Qing enter Beijing", hook: "16-44: the double four — the Ming fell and the Qing entered Beijing in the same year.", note: "Li Zicheng takes Beijing, the last Ming emperor dies, and the Qing march in through Shanhai Pass.", href: ev("qing", "清の北京入城") },
  { year: "1911", event: "The 1911 Revolution", hook: "1-9-1-1: the Xinhai Revolution ends two thousand years of imperial rule.", note: "The Wuchang uprising brings down the Qing; the Republic of China follows in 1912.", href: ev("qing", "辛亥革命") },
  { year: "1949", event: "The People’s Republic of China is founded", hook: "Thirty-eight years after 1911, and four years after the end of the Second World War.", note: "After the civil war, Mao Zedong proclaims the People’s Republic on October 1.", href: ev("prc", "中華人民共和国の建国") },
];

export default function EnglishYearMnemonicsPage() {
  return (
    <FeaturePage
      title="Key Dates in Chinese History"
      jaPath="/year-mnemonics"
      intro="Beyond the order of the dynasties, a handful of dates anchor the whole of Chinese history. Here are twelve of the most important, each with a simple hook — a pattern, a comparison or a gap between dates — to help it stick. (The Japanese version of this page uses Japanese number wordplay, goroawase, which doesn’t translate; these hooks are written for English readers.)"
      related={[
        { href: "/en/mnemonics", label: "How to remember the dynasties" },
        { href: "/en/quiz", label: "Chinese history quiz" },
        { href: "/en/printable-timeline", label: "Printable timeline" },
      ]}
    >
      <div className="flex flex-col gap-3">
        {YEARS.map((y) => (
          <div key={y.year} className="flex gap-4 p-4" style={cardStyle}>
            <div style={{ ...serif, fontSize: 20, fontWeight: 900, color: COLORS.vermilion, minWidth: 84 }}>{y.year}</div>
            <div className="flex-1 min-w-0">
              <div style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink }}>{y.event}</div>
              <div style={{ fontSize: 13.5, color: COLORS.gold, marginTop: 4 }}>{y.hook}</div>
              <div style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 4 }}>{y.note}</div>
              {y.href && <Link href={y.href} style={{ fontSize: 12.5, color: COLORS.vermilion, display: "inline-block", marginTop: 6 }}>Read this event on the timeline →</Link>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24 }}>
        <Paras items={["These hooks are only examples — the best memory aids are the ones you make yourself."]} />
      </div>
    </FeaturePage>
  );
}
