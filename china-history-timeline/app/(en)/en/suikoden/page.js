import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { CHINA_OUTLINE } from "@/lib/chinaOutline";
import { HeritageThumb } from "@/components/Shared";
import { FeaturePage, Section, Paras, FlowList, DataTable, NoteCard, NumberBadge, cardStyle, serif, bodyText, jaEventSlug } from "@/components/en/EnFeature";

const title = "Water Margin Explained: Mount Liang, the 108 Heroes and the Real Song Jiang";
const description =
  "A guide to Water Margin (Shuihu zhuan), one of the Four Great Classical Novels: the plot, the historical setting, the main characters and the 108 stars, a map of the real Mount Liang marsh, how the historical Song Jiang rebellion differs from the novel, the versions of the text, and its legacy in Japan.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/suikoden", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/suikoden", image: { title: "Water Margin", subtitle: "Mount Liang and the 108 heroes", seal: "梁" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ev = (key) => {
  const s = jaEventSlug(ERAS, stripRuby, "northernsong", key);
  return s ? `/en/events/${s}` : null;
};
const HUIZONG = figureEnByJa("northernsong", "徽宗");
const COURT_COLOR = "#4F6FA0";
const JSS_CREDIT = "Illustrations from the 1883 Qing edition of The Fifth Book of Genius: Water Margin / Wikimedia Commons (public domain)";
const jss = (name) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(`${name}（第五才子書水滸傳）.jpg`)}`;
const project = (lon, lat) => [340 + 7.495 * (lon - 116.4), 145 - 9.343 * (lat - 39.9)];

const STORY = [
  { no: 1, title: "The heroes gather", range: "Chapters 1–40 or so",
    body: "The story opens when Marshal Hong, a high court official, breaks a seal and releases 108 demon stars into the world. Gao Qiu, who rose in the world on nothing more than his skill at kickball, becomes head of the army, and through his tyranny Lin Chong, arms instructor of the imperial guard, is exiled on a false charge. Chao Gai and his band seize the “birthday gifts” — treasure being sent to a corrupt minister — and the clerk Song Jiang becomes a fugitive after killing a woman. One by one, men driven out of society for reasons of their own make their way to Mount Liang." },
  { no: 2, title: "Mount Liang flourishes", range: "Chapters 41–71 or so",
    body: "Once Song Jiang is welcomed at Mount Liang, every battle with government troops and local strongmen brings more heroes, and the marsh fortress grows into a great power. After the chief Chao Gai is killed in battle, Song Jiang succeeds him, and the eminent Lu Junyi joins them. In chapter 71 a stone tablet falls from heaven bearing the names and stars of all 108, and under the banner “Carry out the Way on Heaven’s behalf” their order of rank is fixed." },
  { no: 3, title: "Amnesty: returning to the court", range: "Chapters 72–90 or so",
    body: "Song Jiang had never given up his loyalty to the throne, and longed for “amnesty” (zhao’an) — pardon, and service as imperial troops. After overcoming the obstruction of Gao Qiu and the other treacherous ministers, Mount Liang finally accepts it, and the 108 fight the Liao in the north as an imperial army. The 120-chapter version adds campaigns against the rebels Tian Hu and Wang Qing." },
  { no: 4, title: "The campaign against Fang La and a tragic end", range: "Chapter 90 or so to the end",
    body: "The final battle is against Fang La, who has risen in revolt in Jiangnan. Fang La is defeated after fierce fighting, but the heroes die one after another in battle or of illness, and only 27 — about a quarter — return to the capital in triumph. Song Jiang himself is given poisoned wine by the treacherous ministers and dies, taking his sworn brother Li Kui with him. The story of Mount Liang ends with its loyal heroes unrewarded." },
];

const FLOW = [
  { year: "1069", title: "Wang Anshi’s New Policies", note: "A long feud between the reformers and conservatives divides the court.", href: ev("王安石") },
  { year: "1100", title: "Huizong takes the throne", note: "Under an emperor devoted to the arts, Cai Jing, Tong Guan and others hold power.", anchor: "background" },
  { year: "1115", title: "The Jin is founded", note: "The Jurchen Jin breaks away from the Liao; the Song plans to join the Jin in attacking the Liao from both sides.", href: ev("金の建国") },
  { year: "c. 1119", title: "Song Jiang’s rebellion", note: "Song Jiang and 36 comrades ravage Shandong and Huainan.", anchor: "history-vs-legend" },
  { year: "1120", title: "Fang La’s rebellion", note: "Fang La rises in Jiangnan, which suffers under the levies of the “flower and rock convoys”; he is crushed by Tong Guan’s army the next year.", anchor: "history-vs-legend" },
  { year: "1121", title: "Song Jiang surrenders", note: "According to the History of Song, Song Jiang surrendered after being defeated by Zhang Shuye, prefect of Haizhou.", anchor: "history-vs-legend" },
  { year: "1127", title: "The Jingkang Incident: the fall of the Northern Song", note: "Jin armies take the capital Kaifeng and carry Huizong and Qinzong off to the north.", href: ev("靖康の変") },
  { year: "Yuan era", title: "Old Incidents of the Xuanhe Era", note: "The story of Song Jiang and the 36 is set down in writing, and the heroes appear on the stage in Yuan drama.", anchor: "versions" },
  { year: "Ming era", title: "Water Margin takes shape", note: "The stories are gathered into a long novel attributed to Shi Nai’an and Luo Guanzhong.", anchor: "versions" },
];

const PLACES = [
  { no: 1, name: "Mount Liang marsh (Liangshanpo)", label: "Mount Liang", lon: 116.1, lat: 35.8, side: "right", note: "The heroes’ base, near modern Liangshan County, Shandong. Yuncheng County, where Song Jiang served as a clerk, lies just to the south." },
  { no: 2, name: "Jingyang Ridge (Yanggu)", label: "Jingyang Ridge", lon: 115.78, lat: 36.12, side: "right", note: "The pass where Wu Song killed a man-eating tiger with his bare hands." },
  { no: 3, name: "Daming", label: "Daming", lon: 115.15, lat: 36.28, side: "left", note: "Lu Junyi’s hometown, which the Mount Liang army attacks to rescue him." },
  { no: 4, name: "Jiangzhou", label: "Jiangzhou", lon: 116.0, lat: 29.7, side: "left", note: "The town (modern Jiujiang) where the exiled Song Jiang writes a seditious poem and is nearly executed." },
  { no: 5, name: "Muzhou", label: "Muzhou", lon: 119.0, lat: 29.6, side: "right", note: "Where Fang La rose in revolt (around modern Chun’an and Jiande, Zhejiang); in the novel it is the scene of the last great battle." },
  { no: 6, name: "Haizhou", label: "Haizhou", lon: 119.2, lat: 34.6, side: "right", note: "Where the historical Song Jiang was defeated by Zhang Shuye and surrendered (modern Lianyungang)." },
];

const HEROES = [
  { name: "Song Jiang", ja: "宋江", role: "Rank 1 · Star of Heavenly Leader · “Protector of Righteousness”", note: "A minor clerk of Yuncheng County, beloved as “Timely Rain” for his unstinting generosity to people in need. After Chao Gai’s death he becomes chief of Mount Liang and brings about the amnesty." },
  { name: "Wu Yong", ja: "吳用", role: "Rank 3 · Star of Heavenly Intelligence · “Resourceful Star”", note: "A village schoolteacher who becomes Mount Liang’s strategist. He plans the seizure of the birthday gifts and directs many later campaigns." },
  { name: "Lin Chong", ja: "林冲", role: "Rank 6 · Star of Heavenly Valor · “Panther Head”", note: "Arms instructor to the 800,000-strong imperial guard. When Gao Qiu’s adopted son covets his wife, he is framed and exiled, and flees to Mount Liang." },
  { name: "Lu Zhishen", ja: "魯智深", role: "Rank 13 · Star of Heavenly Solitude · “Tattooed Monk”", note: "A former army officer who became a monk after killing a man to protect the weak — a mighty warrior-priest tattooed with flowers all over his body." },
  { name: "Wu Song", ja: "武松", role: "Rank 14 · Star of Heavenly Injury · “The Pilgrim”", note: "The hero who killed a tiger with his bare hands on Jingyang Ridge, also famous for avenging his brother, poisoned by Pan Jinlian and Ximen Qing." },
  { name: "Yang Zhi", ja: "楊志", role: "Rank 17 · Star of Heavenly Darkness · “Blue-Faced Beast”", note: "An officer with a blue birthmark on his face, said to descend from Yang Ye of the Yang family generals. He joins Mount Liang after failing to escort the birthday gifts." },
  { name: "Li Kui", ja: "李逵", role: "Rank 22 · Star of Heavenly Killer · “Black Whirlwind”", note: "A wild man who wields twin axes, yet follows Song Jiang with single-minded devotion as his elder brother — the novel’s best-loved character." },
  { name: "Yan Qing", ja: "燕青", role: "Rank 36 · Star of Heavenly Cleverness · “The Prodigy”", note: "Lu Junyi’s handsome young servant, a man of many talents — wrestling, archery, music — who also helps bring about the amnesty." },
];

const COURT = [
  { name: "Emperor Huizong", role: "Eighth emperor of the Northern Song", note: "A genius of calligraphy and painting who neglected government and left affairs of state to treacherous ministers. The novel shows him as an emperor who understands the heroes’ loyalty but is deceived by his ministers.", img: HUIZONG },
  { name: "Gao Qiu", role: "Grand Marshal (the novel’s chief villain)", note: "Taken up by Huizong before his accession for his skill at kickball. In history too he rose to high military office, but the novel makes him the foremost of the treacherous ministers who hound the heroes." },
  { name: "Zhang Shuye", role: "Prefect of Haizhou", note: "According to the History of Song, he burned Song Jiang’s fleet when it raided Haizhou and forced him to surrender. Later he fought the Jin in the Jingkang Incident, was captured, and died on the way north." },
  { name: "Fang La", role: "Rebel leader in Jiangnan", note: "He rose at Muzhou in 1120 and for a time controlled much of Jiangnan, before being captured by Tong Guan’s government army the following year and executed." },
];

const TOP_TEN = [
  ["1", "Heavenly Leader (天魁星)", "Song Jiang", "Protector of Righteousness"],
  ["2", "Heavenly Might (天罡星)", "Lu Junyi", "Jade Unicorn"],
  ["3", "Heavenly Intelligence (天機星)", "Wu Yong", "Resourceful Star"],
  ["4", "Heavenly Leisure (天閑星)", "Gongsun Sheng", "Dragon in the Clouds"],
  ["5", "Heavenly Valiance (天勇星)", "Guan Sheng", "Big Halberd"],
  ["6", "Heavenly Valor (天雄星)", "Lin Chong", "Panther Head"],
  ["7", "Heavenly Ferocity (天猛星)", "Qin Ming", "Thunderbolt"],
  ["8", "Heavenly Prestige (天威星)", "Huyan Zhuo", "Double Clubs"],
  ["9", "Heavenly Heroism (天英星)", "Hua Rong", "Little Li Guang"],
  ["10", "Heavenly Nobility (天貴星)", "Chai Jin", "Little Whirlwind"],
];

const COMPARE = [
  ["Numbers", "Recorded as “Song Jiang and 36 others.”", "108 heroes and a great force of tens of thousands."],
  ["Base", "Roving bandits who fought across Shandong and Huainan; there is little record of Mount Liang as their base.", "A strong mountain stronghold at Mount Liang, defended by a navy."],
  ["Ending", "Defeated by Zhang Shuye at Haizhou in 1121 and surrendered; little is recorded after that.", "Accept amnesty, fight the Liao and Fang La as imperial troops, then are poisoned by treacherous ministers."],
  ["Campaign against Fang La", "Some records say the surrendered Song Jiang joined it, others contradict this; opinions differ.", "Described in detail as Mount Liang’s last great war, in which most of the heroes die."],
  ["Gao Qiu", "A senior military official favored by Huizong; not counted among the notorious “Six Traitors.”", "The foremost treacherous minister and the chief villain of the story."],
];

const VERSIONS = [
  { name: "100-chapter version", note: "A Ming edition. It runs through the amnesty, the war with the Liao and the campaign against Fang La, ending with Song Jiang’s death, and is thought to preserve an older form of the text." },
  { name: "120-chapter version", note: "The Complete Water Margin of Loyalty and Righteousness, published around 1614 at the end of the Ming: the 100-chapter version plus twenty chapters on the campaigns against Tian Hu and Wang Qing." },
  { name: "70-chapter version", note: "The version made by the late-Ming critic Jin Shengtan, who cut the story off at chapter 71, where the 108 are ranked, and ended it with Lu Junyi’s nightmare. It was the most widely read version in the Qing." },
];

const JAPAN = [
  { era: "Edo period", title: "Translations and yomihon", body: "A translation was published in the mid-18th century, and the novel came to be widely read by ordinary people. Kyokutei Bakin translated the Shinpen Suiko gaden, illustrated by Katsushika Hokusai, and the influence of Water Margin is strongly felt in his masterpiece, The Eight Dog Chronicles." },
  { era: "Edo period", title: "Kuniyoshi’s warrior prints", body: "Utagawa Kuniyoshi’s series “One of the 108 Heroes of the Popular Water Margin,” published from around 1827, caused a sensation with its dynamic images of heroes tattooed from head to toe, made Kuniyoshi the leading artist of warrior prints, and is said to have influenced the fashion for tattoos in Edo." },
  { era: "Modern times", title: "Novels, manga and television", body: "Through Yoshikawa Eiji’s Shin Suikoden (unfinished at his death), Shibata Renzaburō’s adaptation, Yokoyama Mitsuteru’s manga, Kitakata Kenzō’s 19-volume reimagining and its sequels Yōreiden and Gakuhiden, and the 1970s television series known in English as The Water Margin, the story has been retold again and again in Japan." },
];

const FAQ = [
  { q: "Is Water Margin a true story?", a: "It is a historical fact, recorded in the History of Song, that at the end of the Northern Song a man named Song Jiang led a revolt with 36 companions and surrendered to government forces. But most of the 108 heroes, their exploits based at Mount Liang, and their wars against the Liao and Fang La after the amnesty are fiction that grew through storytelling and drama." },
  { q: "Was Mount Liang a real place?", a: "Yes. At the foot of Mount Liang, in modern Liangshan County, Shandong, there was once a great marsh, swollen by floods of the Yellow River: that was Liangshanpo. When the Yellow River later changed course, it dried up; Dongping Lake nearby is one of its remnants." },
  { q: "Is there a connection between Yang Zhi and the Yang family generals?", a: "In the novel, Yang Zhi is said to descend from Yang Ye (Yang Linggong), founder of the line of the Yang family generals. That the heir of a great Northern Song military family should fall on hard times and join a band of outlaws is one of the story’s ironies." },
  { q: "Which version should I read — 70, 100 or 120 chapters?", a: "If you want the whole story to the end, read the 100- or 120-chapter version, which runs through the amnesty and the campaign against Fang La to Song Jiang’s death. The 70-chapter version ends at the climax when the 108 are gathered, so it reads briskly, but it does not tell what became of the heroes." },
];

function SuikodenMap() {
  const [kx, ky] = project(114.31, 34.8);
  const [lx, ly] = project(116.1, 35.8);
  return (
    <div style={{ ...cardStyle, padding: 16, marginBottom: 16 }}>
      <p style={{ fontSize: 12, color: COLORS.inkSoft, marginBottom: 10 }}>A map based on China’s real coastline. The red numbers mark the places below; the blue area shows the approximate extent of the Mount Liang marsh, and the gold dot marks Kaifeng, the Song capital.</p>
      <svg viewBox="316 158 64 96" style={{ width: "100%", maxHeight: 520, display: "block", margin: "0 auto" }} role="img" aria-label="Map of places in Water Margin">
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="0.3" strokeLinejoin="round" />
        <ellipse cx={lx} cy={ly} rx="2.6" ry="1.8" fill={COURT_COLOR} fillOpacity="0.28" stroke={COURT_COLOR} strokeWidth="0.25" strokeDasharray="0.8 0.5" />
        <circle cx={kx} cy={ky} r="0.9" fill={COLORS.gold} stroke={COLORS.paper} strokeWidth="0.3" />
        <text x={kx - 1.6} y={ky + 0.6} textAnchor="end" style={{ ...serif, fontSize: 1.7, fill: COLORS.inkSoft }}>Kaifeng (Song capital)</text>
        {PLACES.map((p) => {
          const [x, y] = project(p.lon, p.lat);
          const right = p.side === "right";
          return (
            <a key={p.no} href={`#place-${p.no}`}>
              <circle cx={x} cy={y} r="1.35" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="0.3" />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="central" style={{ ...serif, fontSize: 1.6, fontWeight: 700, fill: "#FBF8F0" }}>{p.no}</text>
              <text x={right ? x + 2 : x - 2} y={y + 0.6} textAnchor={right ? "start" : "end"} style={{ ...serif, fontSize: 1.7, fontWeight: 700, fill: COLORS.ink }}>{p.label}</text>
            </a>
          );
        })}
      </svg>
    </div>
  );
}

function PersonCard({ name, role, note, imageUrl }) {
  return (
    <div className="flex gap-3 p-3" style={cardStyle}>
      {imageUrl && (
        <div className="flex items-center justify-center shrink-0" style={{ width: 72, height: 88, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}>
          <HeritageThumb imageUrl={imageUrl} name={name} type="figure" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink }}>{name}</div>
        <div style={{ fontSize: 12, color: COLORS.vermilion, marginTop: 2 }}>{role}</div>
        <p style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 4 }}>{note}</p>
      </div>
    </div>
  );
}

export default function EnglishSuikodenPage() {
  return (
    <FeaturePage
      title="Water Margin: Mount Liang and the 108 Heroes"
      jaPath="/suikoden"
      intro="Water Margin (Shuihu zhuan) is a long novel set in the reign of Emperor Huizong at the end of the Northern Song, in which 108 heroes, driven out by corrupt officials and treacherous ministers, gather at the Mount Liang marsh and fight under the banner “Carry out the Way on Heaven’s behalf.” It is counted among China’s Four Great Classical Novels, alongside Romance of the Three Kingdoms, Journey to the West and Dream of the Red Chamber. Behind it lies a real rebellion led by Song Jiang at the end of the Northern Song. This page covers the plot and characters, the real Mount Liang, and how history differs from the novel."
      related={[
        { href: "/en/eras/northernsong", label: "The Northern Song" },
        { href: "/en/four-great-novels", label: "The Four Great Classical Novels" },
        { href: "/en/yangjiajiang", label: "The Generals of the Yang Family" },
        { href: "/en/novelists", label: "Japanese novelists of Chinese history" },
        { href: "/en/song-yuan-battles", label: "Song, Jin and Yuan battles" },
      ]}
    >
      <Section title="The story">
        <div className="flex flex-col gap-3">
          {STORY.map((s) => (
            <div key={s.no} className="flex gap-3 p-4" style={cardStyle}>
              <NumberBadge n={s.no} />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink }}>{s.title}</span>
                  <span style={{ fontSize: 12, color: COLORS.gold }}>{s.range}</span>
                </div>
                <p style={{ ...bodyText, marginTop: 6 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="The setting: the reign of Huizong" id="background">
        <Paras items={[
          "Huizong, who took the throne in 1100, was an artist by temperament: he created his own “slender gold” style of calligraphy and was a master painter of birds and flowers. But he cared little for government, real power fell to the chief minister Cai Jing and the eunuch Tong Guan, and corruption spread through the court.",
          "The “flower and rock convoys” (huashigang), which brought rare stones and trees from Jiangnan to the capital for Huizong’s gardens, laid a heavy burden on the people. Revolts and banditry broke out everywhere, and in 1120 Fang La rose in Jiangnan. Song Jiang’s rebellion was one of the events of this unsettled time. That Water Margin takes the view that “the fault lies not with the emperor but with the treacherous ministers who deceive him” reflects the memory of this age.",
          "The Song then allied with the rising Jin to attack the Liao, only to be invaded by the Jin itself; in the Jingkang Incident of 1127 the Northern Song fell. The heroes of Water Margin live out their story in the last decade or so of the Northern Song’s slide toward ruin.",
        ]} />
      </Section>

      <Section title="Timeline: the age of Water Margin and how the novel took shape"><FlowList items={FLOW} /></Section>

      <Section title="Where was Mount Liang?">
        <Paras items={[
          "Mount Liang (Liangshanpo) is no imaginary place: it was a marsh spreading out at the foot of Liangshan, a small mountain in modern Liangshan County, Shandong (po means a lake or marsh). The area had been wetland since ancient times, known as the Daye or Juye marsh, and from the Five Dynasties through the Northern Song repeated breaches of the Yellow River poured water into it until it became a great lake.",
          "Surrounded by tangled waterways and thick reeds, Mount Liang was hard for government troops to attack, and in Northern Song times it really did become a hideout for bandits. The vast water fortress of “eight hundred li” described in Water Margin is an exaggeration built on the memory of this landscape.",
          "Later, when the Yellow River shifted its course south, the water receded and the lake gradually dried up. Today Liangshan has been developed as a Water Margin pilgrimage site, with buildings such as the Hall of Loyalty recreated on the mountain, and nearby Dongping Lake is regarded as a remnant of the old expanse of water.",
        ]} />
        <div style={{ marginTop: 16 }}><SuikodenMap /></div>
        <div className="flex flex-col gap-2">
          {PLACES.map((p) => (
            <div key={p.no} id={`place-${p.no}`} className="flex gap-3 px-4 py-3" style={{ ...cardStyle, scrollMarginTop: 16 }}>
              <NumberBadge n={p.no} />
              <div>
                <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{p.name}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.7, color: COLORS.inkSoft }}>{p.note}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Main characters">
        <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: "#B5452F", marginBottom: 8 }}>The heroes of Mount Liang</div>
        <div className="flex flex-col gap-3">
          {HEROES.map((h) => <PersonCard key={h.name} {...h} imageUrl={jss(h.ja)} />)}
        </div>
        <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: COURT_COLOR, margin: "20px 0 8px" }}>The court and historical figures</div>
        <div className="flex flex-col gap-3">
          {COURT.map((c) => <PersonCard key={c.name} {...c} imageUrl={c.img?.imageUrl} />)}
        </div>
        <p style={{ fontSize: 10.5, color: COLORS.mist, marginTop: 8 }}>Hero portraits: {JSS_CREDIT}.{HUIZONG?.credit ? ` Huizong: ${HUIZONG.credit}` : ""}</p>
      </Section>

      <Section title="The 108 stars">
        <Paras items={[
          "The 108 heroes are said to be reincarnations of 108 stars. The top 36 are the “Heavenly Spirits” (tiangang) and the other 72 the “Earthly Fiends” (disha), and each has a star name of its own, such as “Star of Heavenly Leader” or “Star of Earthly Leader.”",
          "In chapter 71, when Mount Liang holds a ceremony to worship heaven, a stone tablet falls from the sky inscribed with the names, stars and ranks of all 108, fixing Mount Liang’s order as the will of heaven. Each hero also has a nickname — “Timely Rain,” “Panther Head” — that sums up his character in a phrase.",
        ]} />
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 12, color: COLORS.gold, marginBottom: 6 }}>The top ten in rank</div>
          <DataTable head={["Rank", "Star", "Name", "Nickname"]} rows={TOP_TEN} />
        </div>
      </Section>

      <Section title="The historical Song Jiang and the novel" id="history-vs-legend">
        <Paras items={[
          "According to the official History of Song, in the Xuanhe era (1119–1125) Song Jiang rose in revolt with 36 companions and ravaged the country from Shandong to Huainan. Even government troops had trouble with him, but in 1121, when he appeared at Haizhou, the prefect Zhang Shuye ambushed him and burned his boats, and he surrendered.",
          "What became of Song Jiang after his surrender is unclear. Some records say he joined the campaign against Fang La’s rebellion at about the same time, while other sources can be read to say that after Fang La was defeated Song Jiang was still being captured as a bandit, and scholars disagree. Fragmentary facts like these grew, through storytelling and drama, into the grand tale of the 108.",
        ]} />
        <div style={{ marginTop: 12 }}>
          <DataTable head={["", "History (History of Song and other sources)", "The novel Water Margin"]} rows={COMPARE} />
        </div>
      </Section>

      <Section title="How the novel took shape, and its versions" id="versions">
        <Paras items={[
          "Stories of Song Jiang and his band were told by storytellers in the entertainment quarters from Southern Song times. The Yuan-era Old Incidents of the Xuanhe Era already contains plot lines that lead to the later novel, such as Yang Zhi selling his sword and Chao Gai’s band seizing the birthday gifts, and many Yuan plays featured Li Kui and other heroes.",
          "In the Ming these tales and plays were brought together into the long novel Water Margin. It is attributed to Shi Nai’an, or to Shi Nai’an and Luo Guanzhong together, but nothing is certain. The novel exists in several versions of different lengths and endings, of which three main lines are known.",
        ]} />
        <div className="flex flex-col gap-3" style={{ marginTop: 12 }}>
          {VERSIONS.map((v) => <NoteCard key={v.name} title={v.name}>{v.note}</NoteCard>)}
        </div>
      </Section>

      <Section title="Water Margin in Japan">
        <div className="flex flex-col gap-3">
          {JAPAN.map((j) => <NoteCard key={j.title} title={`${j.title} (${j.era})`}>{j.body}</NoteCard>)}
        </div>
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 12 }}>
          The story of Yang Ye and his family, Yang Zhi’s ancestors, is told on <Link href="/en/yangjiajiang" style={{ color: COLORS.vermilion }}>The Generals of the Yang Family</Link>.
        </p>
      </Section>

      <Section title="Common questions about Water Margin">
        <div className="flex flex-col gap-3">
          {FAQ.map((f) => <NoteCard key={f.q} title={f.q}>{f.a}</NoteCard>)}
        </div>
      </Section>
    </FeaturePage>
  );
}
