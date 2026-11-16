import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { CHINA_OUTLINE } from "@/lib/chinaOutline";
import { HeritageThumb } from "@/components/Shared";
import { FeaturePage, Section, Paras, FlowList, BattleCard, DataTable, NoteCard, cardStyle, serif, jaEventSlug } from "@/components/en/EnFeature";

const title = "The Generals of the Yang Family (Yangjiajiang): The Song–Liao Wars in History and Legend";
const description =
  "The story of the Yang family, a great military clan of the Northern Song, seen through history, the Ming novels and Kitakata Kenzō’s modern retelling: the Song–Liao wars over the Sixteen Prefectures and Yang Ye’s last stand at Chenjiagu, with a map, a timeline, the main characters and how history differs from legend.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/yangjiajiang", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/yangjiajiang", image: { title: "The Generals of the Yang Family", subtitle: "The Song–Liao wars", seal: "楊" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const SONG_COLOR = "#B5452F";
const LIAO_COLOR = "#4F6FA0";
const ev = (eraId, key) => {
  const s = jaEventSlug(ERAS, stripRuby, eraId, key);
  return s ? `/en/events/${s}` : null;
};
const fig = (jaName) => figureEnByJa("northernsong", jaName);
const portrait = (p) => (p?.imageUrl ? { name: p.name, imageUrl: p.imageUrl, credit: p.credit } : null);
const life = (p) => (p?.href ? [{ href: p.href, label: `The life of ${p.name}` }] : []);

const HREF_YANYUN = ev("wudai", "燕雲十六州");
const HREF_SONG = ev("northernsong", "宋の建国");
const HREF_YONGXI = ev("northernsong", "雍熙の北伐");
const HREF_CHANYUAN = ev("northernsong", "澶淵の盟");
const YANG_YE = fig("楊業");
const YANG_YANZHAO = fig("楊延昭");
const PAN_MEI = fig("潘美");
const TAIZONG = fig("宋太宗（趙光義）");
const KOU_ZHUN = fig("寇準");
const XIAO = { imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Empress_Dowager_Xiao_1892.jpg", credit: "Illustration from a Qing edition of the Northern Song Chronicles (Yangjiajiang yanyi) / Wikimedia Commons (public domain)" };

const project = (lon, lat) => [340 + 7.495 * (lon - 116.4), 145 - 9.343 * (lat - 39.9)];
const YANYUN_POLYGON = [
  [112.0, 40.3], [113.8, 40.8], [115.8, 41.0], [117.4, 40.8], [118.1, 40.1], [117.6, 39.3],
  [116.9, 38.5], [116.0, 38.3], [115.3, 38.6], [114.8, 39.1], [113.6, 39.0], [112.2, 39.0],
].map(([lon, lat]) => project(lon, lat).map((v) => v.toFixed(1)).join(",")).join(" ");

const BATTLES = [
  { no: 1, id: "battle-1", year: "979", name: "The taking of Taiyuan (the fall of the Northern Han)", location: "Taiyuan, Shanxi", label: "Taiyuan", lon: 112.55, lat: 37.87, side: "right",
    sides: [["Song", "Taizong, Pan Mei"], ["Northern Han", "Liu Jiyuan, Liu Jiye (Yang Ye)"]],
    body: "The Northern Han, the last survivor of the Five Dynasties and Ten Kingdoms, held out against the Song with Liao backing. Emperor Taizong of Song led a great army in person, besieged the capital Taiyuan, drove off a Liao relief force and forced the Northern Han to surrender. Liu Jiye, the Northern Han general who fought on to the very end, gave in only when his lord persuaded him. Admiring his valor, Taizong treated him generously; Liu Jiye took back his original surname of Yang, called himself Yang Ye, and went on to fight the Liao as a general of the Song.",
    portrait: portrait(TAIZONG), links: life(TAIZONG) },
  { no: 2, id: "battle-2", year: "979", name: "The Battle of the Gaoliang River", location: "Near Beijing (Youzhou, the Liao Southern Capital)", label: "Gaoliang River", lon: 116.35, lat: 39.95, side: "right",
    sides: [["Song", "Taizong"], ["Liao", "Yelü Xiuge, Yelü Xiezhen"]],
    body: "Riding the momentum of the Northern Han’s fall, Taizong marched north without rest and besieged the Liao city of Youzhou (modern Beijing), the heart of the Sixteen Prefectures. But his army was worn out by the long campaign, and on the banks of the Gaoliang River it was routed by a Liao relief army under Yelü Xiuge and others. Taizong himself was wounded by an arrow and is said to have escaped in a donkey cart. So ended the first attempt to recover the Sixteen Prefectures.",
    portrait: portrait(TAIZONG) },
  { no: 3, id: "battle-3", year: "980", name: "The Battle of Yanmen Pass", location: "Dai County, Xinzhou, Shanxi", label: "Yanmen Pass", lon: 112.87, lat: 39.18, side: "right",
    sides: [["Song", "Yang Ye, Pan Mei"], ["Liao", "a great Liao army"]],
    body: "The year after its victory at the Gaoliang River, the Liao advanced with a great army on Yanmen Pass, a key point on the Great Wall. Yang Ye, defending Daizhou, led just a few hundred horsemen by a byway around to the enemy’s rear and, together with Pan Mei’s army in front, caught the Liao between them and routed them. It was said that afterwards Liao soldiers would fall back at the mere sight of Yang Ye’s banner, and he became known as “Yang the Invincible.”",
    portrait: portrait(YANG_YE), links: life(YANG_YE) },
  { no: 4, id: "battle-4", year: "986", name: "The Battle of Qigou Pass (the Yongxi northern campaign)", location: "Near Zhuozhou, Hebei", label: "Qigou Pass", lon: 115.97, lat: 39.49, side: "right",
    sides: [["Song (eastern army)", "Cao Bin, Mi Xin"], ["Liao", "Yelü Xiuge, Empress Dowager Xiao"]],
    body: "In 986, seeing an opportunity in the accession of the child emperor Shengzong in the Liao, Taizong sent great armies along three routes — east, center and west — to recover the Sixteen Prefectures (the Yongxi northern campaign). Cao Bin, leading the main eastern army, got as far as Zhuozhou, but Yelü Xiuge harried his supply lines relentlessly and forced him to withdraw; on the retreat the Liao caught him at Qigou Pass and inflicted a crushing defeat. The whole campaign collapsed, and every army was ordered to pull back.",
    links: [{ href: HREF_YONGXI, label: "Read the Yongxi northern campaign" }] },
  { no: 5, id: "battle-5", year: "986", name: "The Battle of Chenjiagu (Yang Ye’s last stand)", location: "Near Shuozhou, Shanxi", label: "Chenjiagu", lon: 112.43, lat: 39.33, side: "left",
    sides: [["Song (western army)", "Yang Ye, Yang Yanyu, Pan Mei, Wang Shen"], ["Liao", "Yelü Xiezhen"]],
    body: "Yang Ye, deputy commander of the western army, was covering the evacuation of the people of four captured prefectures into Song territory, and argued against meeting the victorious Liao head-on. But the army supervisor Wang Shen called him a coward, and he was forced to attack. Yang Ye asked his commander Pan Mei to post a relief force in ambush at the mouth of the valley of Chenjiagu — but when he fell back there after the battle, there were no friendly troops in sight. His son Yang Yanyu was killed, and Yang Ye, taken prisoner, is said to have starved himself to death. This tragedy became the heart of the later Yang family legends.",
    portrait: portrait(YANG_YE), links: [{ href: HREF_YONGXI, label: "Read the Yongxi campaign and Yang Ye’s death" }, ...life(YANG_YE)] },
  { no: 6, id: "battle-6", year: "999", name: "The defense of Suicheng", location: "Near Xushui District, Baoding, Hebei", label: "Suicheng", lon: 115.65, lat: 39.02, side: "right",
    sides: [["Song", "Yang Yanzhao"], ["Liao", "Empress Dowager Xiao, Shengzong"]],
    body: "After his father’s death Yang Yanzhao continued to guard the frontier, and in 999 the small town of Suicheng that he held was besieged by a great Liao army led by Empress Dowager Xiao herself. With few troops and the town in turmoil, Yang Yanzhao is said to have poured water over the walls on a bitter winter night, turning them into sheets of ice that the enemy could not climb, and so held the town. He went on guarding the northern frontier for more than twenty years, and in the legends, as “Yang the Sixth Son,” he is a general to equal his father.",
    portrait: portrait(YANG_YANZHAO), links: life(YANG_YANZHAO) },
  { no: 7, id: "battle-7", year: "1004", name: "The Treaty of Chanyuan", location: "Puyang, Henan (Chanzhou)", label: "Chanzhou", lon: 115.03, lat: 35.76, side: "right",
    sides: [["Song", "Zhenzong, Kou Zhun"], ["Liao", "Shengzong, Empress Dowager Xiao"]],
    body: "When Empress Dowager Xiao and Shengzong led a great army south in person and reached Chanzhou, close to the Song capital Kaifeng, some at the Song court urged moving the capital, but on the advice of the chief minister Kou Zhun, Emperor Zhenzong went to the front, and the two sides made peace. Under this treaty the Song sent 200,000 bolts of silk and 100,000 taels of silver each year in return for fixing the border where it stood; the Sixteen Prefectures were confirmed as Liao territory, and peace between the two states lasted some 120 years. The Song–Liao wars that the Yang family had fought for so long came, for the time being, to an end.",
    portrait: portrait(KOU_ZHUN), links: [{ href: HREF_CHANYUAN, label: "Read the Treaty of Chanyuan" }] },
];

const FLOW = [
  { year: "936", title: "The cession of the Sixteen Prefectures", note: "Shi Jingtang of the Later Jin hands the sixteen prefectures south of the Great Wall to the Khitan (Liao) in return for help in founding his dynasty.", href: HREF_YANYUN },
  { year: "960", title: "The Song is founded (Zhao Kuangyin)", note: "Recovering the Sixteen Prefectures becomes the Song’s great ambition from its founding.", href: HREF_SONG },
  { year: "979", title: "The fall of the Northern Han", note: "Taizong completes the unification of China proper. The Northern Han general Liu Jiye surrenders to the Song and takes the name Yang Ye.", anchor: "battle-1" },
  { year: "979", title: "The Battle of the Gaoliang River", note: "Aiming to recover the Sixteen Prefectures, Taizong is badly beaten by the Liao under Yelü Xiuge.", anchor: "battle-2" },
  { year: "980", title: "The Battle of Yanmen Pass", note: "Yang Ye defeats a great Liao army with a small force and is feared as “Yang the Invincible.”", anchor: "battle-3" },
  { year: "986", title: "The Yongxi northern campaign and the Battle of Qigou Pass", note: "A three-pronged campaign to recover the Sixteen Prefectures; the main eastern army is crushed by Yelü Xiuge.", anchor: "battle-4" },
  { year: "986", title: "The Battle of Chenjiagu", note: "Left without relief during the retreat, Yang Ye is captured and starves himself to death.", anchor: "battle-5" },
  { year: "999", title: "The defense of Suicheng", note: "Yang Ye’s son Yang Yanzhao drives off the Liao with walls of ice.", anchor: "battle-6" },
  { year: "1004", title: "The Treaty of Chanyuan", note: "Song and Liao make peace, and the Sixteen Prefectures are confirmed as Liao territory.", anchor: "battle-7" },
];

const PEOPLE = [
  { side: "Song", color: SONG_COLOR, list: [
    { name: "Yang Ye", role: "Head of the Yang family, “Yang the Invincible”", note: "A fierce general who surrendered to the Song from the Northern Han. He defeated the Liao at Yanmen Pass and met a tragic end at Chenjiagu. In the legends he is also called Yang Linggong or Yang Jiye.", img: YANG_YE },
    { name: "Yang Yanzhao", role: "Yang Ye’s son, “Yang the Sixth Son” of legend", note: "A great general who held the northern frontier for more than twenty years after his father’s death.", img: YANG_YANZHAO },
    { name: "Pan Mei", role: "Commander of the western army", note: "A hero of the early Song wars of unification. Demoted for failing to save Yang Ye at Chenjiagu, he became the villain “Pan Renmei” in the legends.", img: PAN_MEI },
    { name: "Emperor Taizong (Zhao Guangyi)", role: "Second emperor of the Northern Song", note: "He destroyed the Northern Han and completed the unification, but twice failed to recover the Sixteen Prefectures.", img: TAIZONG },
  ] },
  { side: "Liao", color: LIAO_COLOR, list: [
    { name: "Yelü Xiuge", role: "Great Liao general", note: "He defeated the Song at both the Gaoliang River and Qigou Pass, and was given yuyue, the highest honor of the Liao." },
    { name: "Empress Dowager Xiao (Xiao Chuo)", role: "Mother of Shengzong and regent", note: "After the death of her husband Jingzong she governed for the young Shengzong — a formidable woman who repulsed the Song northern campaigns and brought about the Treaty of Chanyuan.", img: XIAO },
    { name: "Yelü Xiezhen", role: "Liao general", note: "In 986 he met the Song western army and captured Yang Ye at Chenjiagu." },
  ] },
];

const COMPARE = [
  ["Yang Ye’s death", "Captured at Chenjiagu; died after refusing food for three days.", "Surrounded by the enemy, he kills himself by dashing his head against the stele of Li Ling."],
  ["Pan Mei", "Demoted three grades for failing to send relief, but later restored.", "As “Pan Renmei,” a treacherous minister with a grudge against the Yangs who drives Yang Ye and his sons to their deaths."],
  ["Yang Ye’s wife", "Said to have come from the noble She family, but almost nothing of her life is recorded.", "As “She Taijun,” a heroine who leads the family after her husband and sons are gone."],
  ["The sons", "Seven sons are recorded; Yang Yanyu died at Chenjiagu, and Yang Yanzhao succeeded as head of the family.", "Seven brave sons, many of whom die in battle; the Fourth Son is captured by the Liao and marries a Liao princess."],
  ["Women generals", "No record.", "The “Women Generals of the Yang Family,” led by Mu Guiying, fight on the battlefield."],
];

const FAQ = [
  { q: "Is the story of the Yang family generals true?", a: "That three generations — Yang Ye, Yang Yanzhao and Yang Wenguang — fought the Liao and Western Xia as Song generals is historical fact recorded in the official History of Song. But the exploits of She Taijun and Mu Guiying and the stories of the seven brothers were largely embellished or invented in the Ming novels and Peking opera, so history and legend are best enjoyed separately." },
  { q: "Why was Yang Ye called “Yang the Invincible”?", a: "Because at Yanmen Pass in 980 he won a great victory by striking the rear of a huge Liao army with only a few hundred horsemen. It was said that afterwards Liao soldiers fell back at the mere sight of his banner, and the name “Yang the Invincible” was born." },
  { q: "Does a descendant of the Yang family appear in Water Margin?", a: "Yes. Yang Zhi, the “Blue-Faced Beast,” one of the heroes of Mount Liang, is said to be a descendant of Yang Ye (Yang Linggong)." },
];

function YangMap() {
  const [kx, ky] = project(114.31, 34.8);
  const [lx, ly] = project(114.6, 40.35);
  return (
    <div style={{ ...cardStyle, padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 12, color: COLORS.inkSoft, marginBottom: 10 }}>A map of North China based on the real coastline. The red numbers mark the battles below, the hatched area shows the approximate extent of the Sixteen Prefectures, and the gold dot marks Kaifeng, the Song capital.</p>
      <svg viewBox="298 122 64 76" style={{ width: "100%", maxHeight: 460, display: "block", margin: "0 auto" }} role="img" aria-label="Map of the Song–Liao wars">
        <defs>
          <pattern id="yanyun-hatch-en" width="1.2" height="1.2" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="1.2" stroke={LIAO_COLOR} strokeWidth="0.25" strokeOpacity="0.45" />
          </pattern>
        </defs>
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="0.3" strokeLinejoin="round" />
        <polygon points={YANYUN_POLYGON} fill="url(#yanyun-hatch-en)" stroke={LIAO_COLOR} strokeWidth="0.3" strokeDasharray="1 0.7" />
        <text x={lx} y={ly} textAnchor="middle" style={{ ...serif, fontSize: 1.9, fontWeight: 700, fill: LIAO_COLOR }}>Sixteen Prefectures</text>
        <text x={331} y={129} textAnchor="middle" style={{ ...serif, fontSize: 3.6, fontWeight: 900, fill: LIAO_COLOR, opacity: 0.55 }}>LIAO</text>
        <text x={320} y={178} textAnchor="middle" style={{ ...serif, fontSize: 3.6, fontWeight: 900, fill: SONG_COLOR, opacity: 0.5 }}>SONG</text>
        <circle cx={kx} cy={ky} r="0.9" fill={COLORS.gold} stroke={COLORS.paper} strokeWidth="0.3" />
        <text x={kx + 1.6} y={ky + 0.6} style={{ ...serif, fontSize: 1.7, fill: COLORS.inkSoft }}>Kaifeng (Song capital)</text>
        {BATTLES.map((b) => {
          const [x, y] = project(b.lon, b.lat);
          const right = b.side === "right";
          return (
            <a key={b.no} href={`#${b.id}`}>
              <circle cx={x} cy={y} r="1.35" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="0.3" />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="central" style={{ ...serif, fontSize: 1.6, fontWeight: 700, fill: "#FBF8F0" }}>{b.no}</text>
              <text x={right ? x + 2 : x - 2} y={y + 0.6} textAnchor={right ? "start" : "end"} style={{ ...serif, fontSize: 1.7, fontWeight: 700, fill: COLORS.ink }}>{b.label}</text>
            </a>
          );
        })}
      </svg>
    </div>
  );
}

export default function EnglishYangjiajiangPage() {
  return (
    <FeaturePage
      title="The Generals of the Yang Family"
      jaPath="/yangjiajiang"
      intro="The “Generals of the Yang Family” (Yangjiajiang) is the story of the Yang clan, a great military family of the Northern Song that fought for generations against the powerful northern state of the Liao. The real deeds of Yang Ye, feared as “Yang the Invincible,” and his son Yang Yanzhao spread through popular storytelling and drama, were gathered into novels in the Ming, and in modern Japan found new readers through Kitakata Kenzō’s novel Yōkashō. This page follows the Song–Liao wars behind the legend from three angles: history, the Ming novels, and modern retellings."
      related={[
        { href: "/en/eras/northernsong", label: "The Northern Song" },
        { href: "/en/song-yuan-battles", label: "Song, Jin and Yuan battles" },
        { href: "/en/suikoden", label: "Water Margin" },
        { href: "/en/novelists", label: "Japanese novelists of Chinese history" },
      ]}
    >
      <Section title="Background: the Song, the Liao and the Sixteen Prefectures">
        <Paras items={[
          "In 936, during the Five Dynasties and Ten Kingdoms, Shi Jingtang, founder of the Later Jin, ceded sixteen prefectures south of the Great Wall — including modern Beijing and Datong — to the Khitan (later the Liao) in return for their help in founding his dynasty. These were the “Sixteen Prefectures of Yan and Yun.”",
          "Without the natural barrier of the Great Wall, the dynasties of the Central Plains lay exposed to the Liao cavalry. For the Song, founded in 960, recovering the Sixteen Prefectures became a cherished goal, and its second emperor, Taizong, launched great northern campaigns in 979 and 986. It was in these wars over the Sixteen Prefectures that the men of the Yang family fought and died.",
        ]} />
      </Section>

      <Section title="Timeline"><FlowList items={FLOW} /></Section>

      <Section title="Map: the battlefields of the Song and Liao"><YangMap /></Section>

      <Section title="Battles of the Yang family">
        <div className="flex flex-col gap-5">{BATTLES.map((b) => <BattleCard key={b.id} b={b} />)}</div>
      </Section>

      <Section title="Main characters: the generals of Song and Liao">
        {PEOPLE.map((g) => (
          <div key={g.side} style={{ marginBottom: 20 }}>
            <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: g.color, marginBottom: 8 }}>{g.side}</div>
            <div className="flex flex-col gap-3">
              {g.list.map((p) => (
                <div key={p.name} className="flex gap-3 p-3" style={cardStyle}>
                  {p.img?.imageUrl && (
                    <div className="flex items-center justify-center shrink-0" style={{ width: 72, height: 88, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}>
                      <HeritageThumb imageUrl={p.img.imageUrl} name={p.name} type="figure" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: g.color, marginTop: 2 }}>{p.role}</div>
                    <p style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 4 }}>{p.note}</p>
                    {p.img?.credit && <div style={{ fontSize: 10, color: COLORS.mist, marginTop: 4 }}>{p.img.credit}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section title="History and legend">
        <Paras items={["The Yang family stories passed through Yuan drama and were gathered in the Ming into novels such as the Northern Song Chronicles and the Romance of the Yang Family Generals; from the Qing onward they became favorite Peking opera pieces. The novels embellish history heavily, and many of the best-known scenes are invented."]} />
        <div style={{ marginTop: 12 }}>
          <DataTable head={["", "History (History of Song and other sources)", "Novels and Peking opera"]} rows={COMPARE} />
        </div>
      </Section>

      <Section title="Kitakata Kenzō’s retellings">
        <NoteCard title="Yōkashō (2003) and Ketsurui: Shin Yōkashō (2006)">
          Kitakata Kenzō’s two novels, the first of which won the 38th Yoshikawa Eiji Prize for Literature, take Yang Ye and the men of his family as their heroes and boldly rework the old novels into a story very much his own. Read Yōkashō first; Ketsurui is its sequel. (Japanese only.)
        </NoteCard>
      </Section>

      <Section title="Common questions about the Yang family generals">
        <div className="flex flex-col gap-3">
          {FAQ.map((f) => <NoteCard key={f.q} title={f.q}>{f.a}</NoteCard>)}
        </div>
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 12 }}>
          Water Margin is covered on <Link href="/en/suikoden" style={{ color: COLORS.vermilion }}>its own page</Link>.
        </p>
      </Section>
    </FeaturePage>
  );
}
