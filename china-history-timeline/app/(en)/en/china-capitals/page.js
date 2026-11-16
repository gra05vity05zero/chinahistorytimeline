import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, findEraEn, displayPeriodEn, translateCredit } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";
import { FeaturePage, Section, ItemCard, PointMap, cardStyle, serif } from "@/components/en/EnFeature";

const title = "Capitals of China Through History: Where Every Dynasty Ruled From";
const description =
  "From Erlitou of the Xia and Chang’an of the Han and Tang to Beijing of the Ming and Qing: where China’s dynasties placed their capitals, on a map and in a table by era, with why the capital moved and what happened there.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/china-capitals", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/china-capitals", image: { title: "Capitals of China", seal: "都" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const CAPITALS = [
  { name: "Erlitou", dynasty: "Xia", years: "c. 2070–1600 BC", location: "Yanshi, Henan", eraId: "xia", ev: "夏の建国", h: "二里頭", x: 317, y: 188,
    text: "The site identified as the capital of the Xia, China’s oldest dynasty, said to have been founded by Yu. Palace foundations and bronze workshops have been excavated, showing an early state as rule passed from abdication to heredity." },
  { name: "Yin (Anyang)", dynasty: "Shang", years: "c. 1300–1046 BC", location: "Anyang, Henan", eraId: "shang", ev: "盤庚の遷都", h: "殷墟", x: 325, y: 181,
    text: "The capital moved here by the nineteenth king, Pan Geng, which flourished as the capital of the later Shang for some 250 years. Twentieth-century excavations, oracle bones above all, revealed the reality of its advanced civilization." },
  { name: "Haojing", dynasty: "Western Zhou", years: "1046–771 BC", location: "Xi’an, Shaanxi", eraId: "westernzhou", ev: "周の建国", x: 266, y: 180,
    text: "The first Zhou capital, founded by King Wu, who destroyed the Shang under the banner of the Mandate of Heaven. In 771 BC, under King You, who doted on his favorite, it fell to the invading Quanrong." },
  { name: "Luoyi", dynasty: "Eastern Zhou (Spring and Autumn, Warring States)", years: "770–256 BC", location: "Luoyang, Henan", eraId: "chunqiu", ev: "平王の東遷", x: 310, y: 194,
    text: "The Eastern Zhou capital to which King Ping moved after losing Haojing. The Zhou royal house’s real power shrank and its authority became a formality, while the age of the Spring and Autumn and Warring States, in which powerful lords contended for supremacy, began." },
  { name: "Xianyang", dynasty: "Qin", years: "221–206 BC", location: "Xianyang, Shaanxi", eraId: "qin", ev: "中国統一", x: 274, y: 189,
    text: "Qin’s base since the Warring States, which after unification became the heart of the first unified empire. It is said to have been burned by Xiang Yu’s army soon after the First Emperor’s death." },
  { name: "Chang’an (Western Han)", dynasty: "Western Han", years: "202 BC – AD 8", location: "Xi’an, Shaanxi", eraId: "westernhan", ev: "漢を建国", x: 282, y: 197,
    text: "The Han capital Liu Bang chose in the defensible Guanzhong region. Carrying on Qin institutions, it was the starting point of a Han dynasty that lasted four hundred years, and flourished as the eastern terminus of the Silk Road." },
  { name: "Luoyang (Eastern Han)", dynasty: "Eastern Han", years: "25–220", location: "Luoyang, Henan", eraId: "easternhan", ev: "漢を再興", x: 316, y: 199,
    text: "When Emperor Guangwu, Liu Xiu, restored the Han, he made this his capital rather than the Western Han’s Chang’an. Wei and the Western Jin later made it their capital in turn, and it remained the political center of the Central Plain." },
  { name: "Chengdu", dynasty: "Shu Han (Three Kingdoms)", years: "221–263", location: "Chengdu, Sichuan", eraId: "sanguo", ev: "蜀漢の建国", x: 248, y: 231,
    text: "The capital of Shu, chosen by Liu Bei when he took the throne claiming to continue the Han. Governed well under the chancellor Zhuge Liang and protected by its natural fastness, it kept its independence, but in 263 Shu became the first of the Three Kingdoms to fall to Wei." },
  { name: "Jianye", dynasty: "Wu (Three Kingdoms)", years: "229–280", location: "Nanjing, Jiangsu", eraId: "sanguo", ev: "呉の建国", x: 358, y: 218,
    text: "The capital of Wu, chosen by Sun Quan when he took the throne. Backed by the Yangtze defense line and the development of the south, Wu outlasted the other two kingdoms, setting the precedent for the Southern Dynasties to make this their capital." },
  { name: "Jiankang", dynasty: "Eastern Jin and the Southern Dynasties", years: "317–589", location: "Nanjing, Jiangsu", eraId: "nanbei", ev: "劉宋の建国", h: "建康城遺跡", x: 352, y: 224,
    text: "The capital for some 270 years of the Eastern Jin, founded by Sima Rui after he was driven from North China, and of the four Southern Dynasties that followed — Song, Qi, Liang and Chen. It was the center of southern culture, where aristocratic culture and Buddhist art flowered." },
  { name: "Chang’an (Sui and Tang)", dynasty: "Sui and Tang", years: "581–907", location: "Xi’an, Shaanxi", eraId: "tang", ev: "唐の建国", h: "大明宮", x: 292, y: 205,
    text: "Newly built by Emperor Wen of Sui, under the Tang it reached its height as a cosmopolitan city of over a million people — one of the largest cities in the world, where goods and ideas from east and west met along the Silk Road." },
  { name: "Kaifeng", dynasty: "Five Dynasties and Northern Song", years: "907–1127", location: "Kaifeng, Henan", eraId: "northernsong", ev: "宋の建国", x: 328, y: 190,
    text: "The capital of most of the Five Dynasties regimes from the Later Liang on, and of the Song after Zhao Kuangyin founded it. A hub of canal transport, it built the flourishing commercial city culture shown in the scroll Along the River During the Qingming Festival." },
  { name: "Lin’an (Hangzhou)", dynasty: "Southern Song", years: "1127–1276", location: "Hangzhou, Zhejiang", eraId: "southernsong", ev: "南宋の建国", h: "臨安", x: 368, y: 235,
    text: "Where Gaozong settled after losing Kaifeng in the Jingkang Incident. It was never formally declared the capital — officially it was a “temporary residence” — yet on the wealth of the south it built an economic prosperity surpassing even the Northern Song." },
  { name: "Dadu (Beijing)", dynasty: "Yuan", years: "1271–1368", location: "Beijing", eraId: "yuan", ev: "元の建国", h: "元上都", x: 340, y: 145,
    text: "The Yuan capital Kublai built with a Chinese-style palace city and government. A cosmopolitan metropolis described in Marco Polo’s Travels, it was linked directly to the goods of the south by the rebuilt Grand Canal. (The photo shows the ruins of Shangdu, Kublai’s summer capital.)" },
  { name: "Beijing (Ming and Qing)", dynasty: "Ming and Qing", years: "1421–1912", location: "Beijing", eraId: "ming", ev: "北京遷都", h: "紫禁城", x: 348, y: 150,
    text: "The Yongle Emperor moved the capital here from Nanjing in 1421 and built the magnificent Forbidden City. For some five hundred years, to the end of the Qing, it remained the political heart of China." },
  { name: "Nanjing (Republic of China)", dynasty: "Republic of China", years: "1912; 1927–1937, 1945–1949", location: "Nanjing, Jiangsu", eraId: "roc", ev: "中華民国の成立", x: 346, y: 230,
    text: "Where Sun Yat-sen set up the provisional government as provisional president. It was made the capital again under the Nationalist government, which moved to Chongqing when the war with Japan broke out and to Taipei after defeat in the civil war." },
  { name: "Beijing (People’s Republic of China)", dynasty: "People’s Republic of China", years: "1949–", location: "Beijing", eraId: "prc", ev: "中華人民共和国の建国", x: 332, y: 152,
    text: "Where Mao Zedong proclaimed the founding of the state from atop Tiananmen. The Forbidden City (Palace Museum) and Tiananmen Square remain the stage for great state ceremonies today." },
];

function resolve(c) {
  const ev = ERAS.find((e) => e.id === c.eraId)?.events.find((e) => stripRuby(e.title).includes(c.ev));
  if (!ev) return null;
  const h = c.h ? ev.heritage?.find((x) => stripRuby(x.name).includes(c.h)) : null;
  return { ...c, slug: ev.slug, imageUrl: h?.imageUrl, credit: translateCredit(h?.credit), type: h?.type || "building" };
}
const RESOLVED = CAPITALS.map(resolve).filter(Boolean);

const BY_ERA = [
  ["xia", [["Zhenxun (identified with Erlitou)", "Yanshi District, Luoyang, Henan"]]],
  ["shang", [["Bo (Zhengzhou Shang City theory)", "Zhengzhou, Henan", "early"], ["Yin (Yinxu)", "Anyang, Henan", "after Pan Geng’s move"]]],
  ["westernzhou", [["Haojing", "Xi’an, Shaanxi"]]],
  ["chunqiu", [["Luoyi (Chengzhou)", "Luoyang, Henan", "capital of the Zhou royal house"]]],
  ["zhanguo", [["Luoyi", "Luoyang, Henan", "the Zhou royal capital; the seven states had their own capitals at Xianyang, Daliang, Handan and elsewhere"]]],
  ["qin", [["Xianyang", "Xianyang, Shaanxi"]]],
  ["westernhan", [["Chang’an", "Xi’an, Shaanxi"]]],
  ["xin", [["Chang’an (renamed Chang’an “Everlasting Peace”)", "Xi’an, Shaanxi"]]],
  ["easternhan", [["Luoyang", "Luoyang, Henan"], ["Xu (Xuchang)", "Xuchang, Henan", "at the end, where Cao Cao received Emperor Xian"]]],
  ["sanguo", [["Luoyang", "Luoyang, Henan", "Wei"], ["Chengdu", "Chengdu, Sichuan", "Shu Han"], ["Jianye", "Nanjing, Jiangsu", "Wu"]]],
  ["westernjin", [["Luoyang", "Luoyang, Henan"]]],
  ["sixteenkingdoms", [["Jiankang", "Nanjing, Jiangsu", "Eastern Jin"], ["Chang’an", "Xi’an, Shaanxi", "Former Qin and others; northern states also had capitals at Ye, Pingcheng and elsewhere"]]],
  ["nanbei", [["Jiankang", "Nanjing, Jiangsu", "Southern Dynasties (Song, Qi, Liang, Chen)"], ["Pingcheng", "Datong, Shanxi", "early Northern Wei"], ["Luoyang", "Luoyang, Henan", "Northern Wei after Emperor Xiaowen’s move (494)"]]],
  ["sui", [["Daxing (Chang’an)", "Xi’an, Shaanxi", "Luoyang was also built as the eastern capital"]]],
  ["tang", [["Chang’an", "Xi’an, Shaanxi", "Luoyang was the eastern capital, and Wu Zetian’s Zhou made it the “Divine Capital”"]]],
  ["wudai", [["Kaifeng (Bianzhou)", "Kaifeng, Henan", "Later Liang, Later Jin, Later Han, Later Zhou"], ["Luoyang", "Luoyang, Henan", "Later Tang"]]],
  ["northernsong", [["Kaifeng (Bianjing, Dongjing)", "Kaifeng, Henan"]]],
  ["southernsong", [["Lin’an", "Hangzhou, Zhejiang"]]],
  ["yuan", [["Dadu", "Beijing", "Shangdu (Inner Mongolia) served as the summer capital"]]],
  ["ming", [["Yingtian (Nanjing)", "Nanjing, Jiangsu", "from the founding to the Yongle Emperor’s move"], ["Shuntian (Beijing)", "Beijing", "from 1421"]]],
  ["qing", [["Shengjing", "Shenyang, Liaoning", "before entering China proper"], ["Beijing", "Beijing", "from 1644"]]],
  ["roc", [["Nanjing", "Nanjing, Jiangsu", "1912; 1927–1937 and 1946–1949"], ["Beijing", "Beijing", "the Beijing government (1912–1928)"], ["Chongqing", "Chongqing", "wartime capital (1937–1946)"]]],
  ["prc", [["Beijing", "Beijing"]]],
];

function EraTable() {
  const cell = { padding: "7px 10px", borderTop: "1px solid #E8E0CA", verticalAlign: "top" };
  return (
    <div style={{ ...cardStyle, overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5, minWidth: 420 }}>
        <thead>
          <tr style={{ backgroundColor: COLORS.paperDeep, ...serif, color: COLORS.ink }}>
            <th className="text-left" style={{ padding: "8px 10px" }}>Era</th>
            <th className="text-left" style={{ padding: "8px 10px" }}>Capital</th>
            <th className="text-left" style={{ padding: "8px 10px" }}>Today</th>
          </tr>
        </thead>
        <tbody>
          {BY_ERA.map(([eraId, caps]) => {
            const era = findEraEn(eraId);
            if (!era) return null;
            return caps.map(([old, now, note], i) => (
              <tr key={`${eraId}-${i}`}>
                {i === 0 && (
                  <td rowSpan={caps.length} style={{ ...cell, ...serif, fontWeight: 700 }}>
                    <Link href={`/en/eras/${eraId}`} style={{ color: COLORS.ink }}>{era.name}</Link>
                    <div style={{ fontSize: 11.5, color: COLORS.gold, fontWeight: 400 }}>{displayPeriodEn(era.period)}</div>
                  </td>
                )}
                <td style={{ ...cell, color: COLORS.ink }}>
                  {old}
                  {note && <div style={{ fontSize: 12, color: COLORS.inkSoft }}>{note}</div>}
                </td>
                <td style={{ ...cell, color: COLORS.inkSoft }}>{now}</td>
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function EnglishChinaCapitalsPage() {
  return (
    <FeaturePage
      title="Capitals of China Through History"
      jaPath="/china-capitals"
      intro="In China the capital moved again and again — with each change of dynasty, and sometimes within a single dynasty. Here are the capitals of China’s dynasties in the order they changed, from Erlitou of the Xia to Beijing of the People’s Republic."
      related={[
        { href: "/en/ancient-capitals", label: "The great ancient capitals" },
        { href: "/en/emperors", label: "Emperors of China" },
        { href: "/en/silk-road", label: "The Silk Road" },
      ]}
    >
      <Section title="Capitals by era">
        <EraTable />
        <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 8 }}>Some locations are disputed. For periods of division, the capitals of the main states are given.</p>
      </Section>

      <Section title="The capitals, in order">
        <PointMap outline={CHINA_OUTLINE} taiwan={TAIWAN_OUTLINE} points={RESOLVED} note="A map based on China’s real coastline. The numbers match the list below; several capitals shared the same city." />
        <div className="flex flex-col gap-4">
          {RESOLVED.map((c, i) => (
            <ItemCard key={c.name} index={i + 1} title={c.name} subtitle={`${c.dynasty} · ${c.years}`} meta={c.location} imageUrl={c.imageUrl} imageType={c.type} credit={c.credit} links={[{ href: `/en/events/${c.slug}`, label: "Read the related event" }]}>
              {c.text}
            </ItemCard>
          ))}
        </div>
      </Section>
    </FeaturePage>
  );
}
