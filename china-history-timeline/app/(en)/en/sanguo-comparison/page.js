import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { SANGUO_MAP_EN } from "@/lib/en/borderMaps";
import { SanguoBorderMap } from "@/components/SanguoBorderMap";
import { HeritageThumb } from "@/components/Shared";
import { FeaturePage, Section, Paras, DataTable, FlowList, NoteCard, cardStyle, serif, bodyText, jaEventSlug } from "@/components/en/EnFeature";

const title = "Wei, Wu and Shu Compared: The Three Kingdoms’ Strength, Rulers and People";
const description =
  "How did Wei, Wu and Shu differ? A side-by-side comparison of the Three Kingdoms — founders, capitals, territory, population, how each fell — with their strengths, weaknesses, key figures and an animated map.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/sanguo-comparison", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/sanguo-comparison", image: { title: "Wei, Wu and Shu Compared", seal: "鼎" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const fig = (jaName, eraId = "sanguo") => figureEnByJa(eraId, jaName);

const KINGDOMS = [
  {
    id: "wei", seal: "魏", name: "Wei", aka: "Cao Wei", color: "#4F6FA0", founder: "曹操", founderEn: "Cao Cao",
    catch: "The great power that held North China",
    body: "The dynasty founded when Cao Cao, holding the Eastern Han emperor Xian under his control, pacified North China, and his son Cao Pi received the throne from Emperor Xian by abdication in 220. Far ahead of the other two kingdoms in population and farm output, Wei also laid institutional foundations for later dynasties, securing its food supply through military-agricultural colonies (tuntian) and creating the “nine-rank system” for selecting officials. But after the death of Cao Rui (Emperor Ming) a series of child emperors followed, and in the Gaopingling Incident of 249 Sima Yi seized real power. In 265 Wei came to an end when the throne was handed to Sima Yi’s grandson Sima Yan.",
    strengths: ["The largest population and productive capacity of the three", "Well-developed systems of government, such as the tuntian colonies and the bureaucracy", "The legitimacy of having formally received the throne from Han"],
    weaknesses: ["Imperial power weakened early, and the state was taken over by the Sima family of senior ministers", "It had to defend on many fronts: the northern peoples, Wu to the east and Shu to the west"],
    people: ["曹操", "曹丕", "司馬懿", "荀彧", "郭嘉", "夏侯惇", "張遼", "鄧艾"],
  },
  {
    id: "wu", seal: "呉", name: "Wu", aka: "Sun Wu or Eastern Wu", color: COLORS.vermilion, founder: "孫権", founderEn: "Sun Quan",
    catch: "The southern kingdom guarded by the Yangtze and its navy",
    body: "The state founded by Sun Quan on the base in Jiangdong (the lower Yangtze) built by his father Sun Jian and brother Sun Ce. It turned back Cao Cao’s drive south at Red Cliffs in 208, and in 219 defeated Guan Yu and took most of Jing Province. In 222 it declared its own era name and became independent, and in 229 Sun Quan took the title of emperor. Protected by the natural barrier of the Yangtze and a powerful navy, Wu did much to develop the south — a step toward the later Southern Dynasties and the shift of China’s economic center southward. In Sun Quan’s last years a succession struggle (the “Two Palaces” affair) shook the state, and with the misrule of its last emperor Sun Hao as well, Wu surrendered to the Western Jin in 280.",
    strengths: ["An iron defense in the Yangtze and its navy", "Growing economic strength from the development of the south", "The longest-lived of the three kingdoms"],
    weaknesses: ["Essentially a coalition of powerful clans, with weak central authority under the emperor", "It lost talented men in the succession struggle of Sun Quan’s last years"],
    people: ["孫堅", "孫策", "孫権", "周瑜", "魯粛", "呂蒙", "陸遜", "甘寧"],
  },
  {
    id: "shu", seal: "蜀", name: "Shu", aka: "Shu Han (its official name was simply “Han”)", color: "#5F7A3D", founder: "劉備", founderEn: "Liu Bei",
    catch: "The smallest kingdom, sworn to restore the Han",
    body: "The state founded when Liu Bei, who claimed descent from the Han imperial house, took Jing Province and Yi Province (modern Sichuan) following his strategist Zhuge Liang’s “plan to divide the realm in three,” and took the throne in 221 in answer to Cao Pi’s enthronement. Its official name was “Han,” and it claimed to be the legitimate heir of the Han dynasty. After Liu Bei’s death, Zhuge Liang served as regent for the young Liu Shan, pacified the south (Nanzhong) and then campaigned north against Wei again and again, until he died of illness in camp at Wuzhang Plains in 234. Jiang Wei carried on the northern campaigns, but the state was exhausted, and when Wei’s Deng Ai closed on Chengdu in 263, Liu Shan surrendered.",
    strengths: ["The Sichuan Basin, ringed by mountains, was rich and easy to defend", "Strict and fair government under Zhuge Liang", "A clear cause: the restoration of the Han"],
    weaknesses: ["The smallest population and strength of the three", "The death of Guan Yu and the disaster at Yiling cost it Jing Province and many able men", "Repeated northern campaigns drained its strength"],
    people: ["劉備", "諸葛亮", "関羽", "張飛", "趙雲", "馬超", "黄忠", "姜維"],
  },
];

const COMPARE_HEAD = ["", "Wei", "Wu", "Shu"];
const COMPARE_ROWS = [
  ["Founder", "Cao Pi (the groundwork laid by his father Cao Cao)", "Sun Quan (the base built by his father Sun Jian and brother Sun Ce)", "Liu Bei"],
  ["Founded", "220", "222 (independence); 229 (imperial title)", "221"],
  ["Fell", "265", "280", "263"],
  ["Lasted", "about 45 years", "about 58 years", "about 42 years"],
  ["Capital", "Luoyang", "Jianye (modern Nanjing)", "Chengdu"],
  ["Main territory", "North China (the Yellow River basin)", "The middle and lower Yangtze and the south, plus Jiao Province (northern Vietnam)", "Yi Province (the Sichuan Basin) and Hanzhong"],
  ["Registered population", "about 4.43 million", "about 2.3 million", "about 0.94 million"],
  ["Number of emperors", "5", "4", "2"],
  ["Last emperor", "Cao Huan", "Sun Hao", "Liu Shan"],
  ["How it ended", "Throne handed to Sima Yan; replaced by Western Jin", "Surrendered to a great Western Jin army", "Surrendered to the invading Wei generals Deng Ai and Zhong Hui"],
  ["Famous strategists", "Xun Yu, Guo Jia, Sima Yi", "Zhou Yu, Lu Su, Lu Xun", "Zhuge Liang, Pang Tong, Fa Zheng"],
];

const POPULATION = [
  { id: "wei", label: "Wei", value: 443, households: "about 660,000 households", note: "263", color: "#4F6FA0" },
  { id: "wu", label: "Wu", value: 230, households: "about 520,000 households", note: "280", color: COLORS.vermilion },
  { id: "shu", label: "Shu", value: 94, households: "about 280,000 households", note: "263", color: "#5F7A3D" },
];

const slugFor = (eraId, key) => jaEventSlug(ERAS, stripRuby, eraId, key);
const TIMELINE = [
  { year: "208", title: "The Battle of Red Cliffs. The Sun Quan–Liu Bei alliance defeats Cao Cao, and the three-way division of the realm emerges", ev: ["sanguo", "赤壁の戦い"] },
  { year: "219", title: "Wu’s Lü Meng kills Guan Yu, defender of Jing Province, and most of Jing passes to Wu" },
  { year: "220", title: "Cao Cao dies; his son Cao Pi receives the throne from Emperor Xian and founds Wei. The Eastern Han ends", ev: ["sanguo", "魏の建国"] },
  { year: "221", title: "Liu Bei takes the throne as emperor in Chengdu (Shu Han)", ev: ["sanguo", "蜀漢の建国"] },
  { year: "222", title: "At Yiling, Wu’s Lu Xun crushes Liu Bei. Sun Quan declares his own era name and becomes independent", ev: ["sanguo", "呉の建国"] },
  { year: "223", title: "Liu Bei dies at Baidicheng. Zhuge Liang becomes guardian to Liu Shan and restores the alliance with Wu" },
  { year: "229", title: "Sun Quan takes the title of emperor: three emperors now stand side by side" },
  { year: "234", title: "Zhuge Liang dies of illness at Wuzhang Plains while facing Sima Yi", ev: ["sanguo", "五丈原の戦い"] },
  { year: "249", title: "The Gaopingling Incident: Sima Yi seizes real power in Wei in a coup" },
  { year: "263", title: "Wei’s army closes on Chengdu; Liu Shan surrenders and Shu falls", ev: ["sanguo", "蜀漢の滅亡"] },
  { year: "265", title: "Sima Yan receives the throne from Wei’s Emperor Yuan and founds the Western Jin. Wei ends", ev: ["westernjin", "西晋の建国"] },
  { year: "280", title: "Western Jin destroys Wu, reunifying China for the first time in about sixty years", ev: ["westernjin", "西晋による中国再統一"] },
].map((t) => {
  const s = t.ev ? slugFor(...t.ev) : null;
  return { year: t.year, title: t.title, href: s ? `/en/events/${s}` : null };
});

const FAQ = [
  { q: "Which of Wei, Wu and Shu was strongest?", a: "In national strength Wei was far ahead: its registered population was about 4.43 million, against about 2.3 million for Wu and 0.94 million for Shu, so Wei alone outnumbered the other two combined. And it was the Western Jin, founded by the Sima family who had taken control of Wei, that finally unified the realm." },
  { q: "Why is Liu Bei’s state called “Shu”?", a: "The official name of Liu Bei’s state was “Han.” To distinguish it from the Western and Eastern Han, later generations called it “Shu” or “Shu Han” after the name of its home region (Shu, modern Sichuan). In the official history Records of the Three Kingdoms, too, its records are gathered as the “Book of Shu.”" },
  { q: "Which of the three kingdoms lasted longest?", a: "Wu. Shu was destroyed by Wei in 263, and Wei itself gave way to the Western Jin when the throne passed to Sima Yan in 265. Wu survived another fifteen years, but surrendered to the Western Jin in 280, closing the Three Kingdoms era." },
  { q: "Who is the hero in the Records of the Three Kingdoms and in the Romance of the Three Kingdoms?", a: "The official Records of the Three Kingdoms, compiled by the Western Jin historian Chen Shou, treats Wei — which handed the throne to Jin — as the legitimate dynasty. The Ming-era novel Romance of the Three Kingdoms, by contrast, makes Liu Bei and Zhuge Liang’s Shu, sworn to restore the Han, the heroes and casts Cao Cao as the villain. Much of the popular image of the Three Kingdoms comes from the Romance." },
  { q: "Who unified the three kingdoms?", a: "Sima Yan (Emperor Wu), first emperor of the Western Jin. His grandfather was Sima Yi, the Wei minister famous as Zhuge Liang’s rival; over three generations the Sima family took control of Wei and received its throne in 265. In 280 Sima Yan destroyed Wu and reunified China." },
];

function PersonLinks({ names }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1" style={{ fontSize: 13 }}>
      {names.map((n) => {
        const p = fig(n);
        if (!p) return null;
        return p.href ? (
          <Link key={n} href={p.href} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>{p.name}</Link>
        ) : (
          <span key={n} style={{ color: COLORS.inkSoft }}>{p.name}</span>
        );
      })}
    </div>
  );
}

export default function EnglishSanguoComparisonPage() {
  const max = Math.max(...POPULATION.map((p) => p.value));
  return (
    <FeaturePage
      title="Wei, Wu and Shu Compared"
      jaPath="/sanguo-comparison"
      intro="From the fall of the Eastern Han in 220 until the Western Jin reunified the realm in 280, China was divided among three kingdoms: Wei, heir to Cao Cao; Sun Quan’s Wu; and Liu Bei’s Shu. This is the Three Kingdoms period of legend. Though the three stood side by side at the same time, they differed greatly in territory, population, origins and government. This page compares them in a table and in figures, with each kingdom’s strengths, weaknesses and key people."
      related={[
        { href: "/en/sanguo-battles", label: "Three Kingdoms battle map" },
        { href: "/en/people#sanguo", label: "People of the Three Kingdoms" },
        { href: "/en/four-great-novels", label: "The Four Great Classical Novels" },
        { href: "/en/koei-sangokushi", label: "Romance of the Three Kingdoms games" },
      ]}
    >
      <Section title="Wei, Wu and Shu at a glance">
        <DataTable head={COMPARE_HEAD} rows={COMPARE_ROWS} />
        <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 8 }}>Lengths of rule are approximate, counted from founding (for Wu, independence in 222) to fall. Population figures are registered numbers; see below.</p>
      </Section>

      <Section title="National strength: Wei had about five times Shu’s population">
        <div style={{ ...cardStyle, padding: 16 }}>
          <div style={{ fontSize: 12, color: COLORS.gold, marginBottom: 10 }}>Registered population (at each kingdom’s fall)</div>
          <div className="flex flex-col gap-3">
            {POPULATION.map((p) => (
              <div key={p.id}>
                <div className="flex items-baseline justify-between" style={{ ...serif, fontSize: 14, color: COLORS.ink }}>
                  <span style={{ fontWeight: 700 }}>{p.label} <span style={{ fontSize: 12, fontWeight: 400, color: COLORS.inkSoft }}>({p.note})</span></span>
                  <span>{(p.value / 100).toFixed(2)} million <span style={{ fontSize: 12, color: COLORS.inkSoft }}>· {p.households}</span></span>
                </div>
                <div style={{ height: 10, backgroundColor: "#EFE7D0", marginTop: 4 }}>
                  <div style={{ height: "100%", width: `${(p.value / max) * 100}%`, backgroundColor: p.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 14 }}>
          <Paras items={[
            "Wei’s population was larger than Wu’s and Shu’s combined, and the gap in national strength was plain. Zhuge Liang’s repeated northern campaigns were in part an attempt to strike first, before that gap widened further.",
            "At the height of the Eastern Han (the mid-2nd century), the registered population is said to have been about 56 million; the three kingdoms together amounted to only about a seventh of that. Besides the losses of war, the number of refugees and of people under the control of powerful clans — beyond the reach of state registers — is thought to have grown, so the real population was probably considerably larger.",
          ]} />
        </div>
      </Section>

      <Section title="The character of each kingdom">
        <div className="flex flex-col gap-5">
          {KINGDOMS.map((k) => {
            const f = fig(k.founder);
            return (
              <div key={k.id} id={k.id} style={{ ...cardStyle, borderTop: `3px solid ${k.color}`, padding: 16 }}>
                <div className="flex gap-3">
                  {f?.imageUrl && (
                    <div className="flex items-center justify-center shrink-0" style={{ width: 80, height: 80, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}>
                      <HeritageThumb imageUrl={f.imageUrl} name={f.name} type="figure" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span style={{ ...serif, fontSize: 20, fontWeight: 900, color: k.color }}>{k.seal}</span>
                      <span style={{ ...serif, fontSize: 18, fontWeight: 900, color: COLORS.ink }}>{k.name}</span>
                      <span style={{ fontSize: 12, color: COLORS.inkSoft }}>also {k.aka}</span>
                    </div>
                    <div style={{ ...serif, fontSize: 14, color: COLORS.gold, marginTop: 2 }}>{k.catch}</div>
                    {f?.credit && <div style={{ fontSize: 10, color: COLORS.mist, marginTop: 2 }}>Portrait: {k.founderEn} — {f.credit}</div>}
                  </div>
                </div>
                <p style={{ ...bodyText, marginTop: 12 }}>{k.body}</p>
                <div className="grid sm:grid-cols-2 gap-3 mt-3">
                  {[["Strengths", k.strengths, COLORS.jade], ["Weaknesses", k.weaknesses, COLORS.vermilion]].map(([label, items, color]) => (
                    <div key={label}>
                      <div style={{ fontSize: 12, fontWeight: 700, color, marginBottom: 4 }}>{label}</div>
                      <ul style={{ fontSize: 13, lineHeight: 1.7, color: COLORS.inkSoft }}>
                        {items.map((x) => <li key={x}><span style={{ color }}>• </span>{x}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: COLORS.gold, marginTop: 12, marginBottom: 4 }}>Key people</div>
                <PersonLinks names={k.people} />
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="The rise and fall of the three kingdoms"><FlowList items={TIMELINE} /></Section>

      <Section title="The shifting map">
        <Paras items={["From the age of rival warlords to the three-way standoff and reunification under the Western Jin, watch how the territories of Wei (blue), Wu (red) and Shu (green) changed."]} />
        <SanguoBorderMap t={SANGUO_MAP_EN} />
      </Section>

      <Section title="Common questions about Wei, Wu and Shu">
        <div className="flex flex-col gap-3">
          {FAQ.map((f) => (
            <NoteCard key={f.q} title={f.q}>{f.a}</NoteCard>
          ))}
        </div>
      </Section>
    </FeaturePage>
  );
}
