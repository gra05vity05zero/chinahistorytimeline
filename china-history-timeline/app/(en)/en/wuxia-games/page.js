import Link from "next/link";
import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, Paras, DataTable, NoteCard, cardStyle, serif, isLive } from "@/components/en/EnFeature";

const title = "Chinese Wuxia and Mythology Games and the History Behind Them: Black Myth: Wukong, Where Winds Meet, Phantom Blade Zero";
const description =
  "Recent Chinese-developed wuxia, history and mythology games — Black Myth: Wukong, Where Winds Meet, Phantom Blade Zero, Wuchang: Fallen Feathers and Black Myth: Zhong Kui — and the real history and legends behind them: Journey to the West and Xuanzang, the Sixteen Prefectures and the Five Dynasties, late-Ming Sichuan and the legend of Zhong Kui.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/wuxia-games", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/wuxia-games", image: { title: "Chinese Wuxia and Mythology Games", subtitle: "The history behind them", seal: "侠" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

// Some apps only serve their header from a hashed path (same images as the Japanese page)
const STEAM_HEADERS = {
  3564740: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3564740/74dc272a73049fcaaf661c1b1c4a93deb972495a/header_japanese.jpg",
  4115450: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4115450/7f882f889630270d3d3fb93825ac6f55b55e7a6c/header.jpg",
};
const steamHeader = (id) => STEAM_HEADERS[id] || `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${id}/header.jpg`;

const GAMES = [
  { id: "wukong", name: "Black Myth: Wukong", alt: "Chinese title: Hei shenhua: Wukong", steam: 2358720, developer: "Game Science", release: "August 20, 2024", platforms: "PS5 / Windows",
    era: "Tang (the story’s setting); Ming (when the novel was written)", source: "The novel Journey to the West",
    summary: "An action RPG telling what happened “after” Journey to the West. Having become a buddha at the end of the pilgrimage, Sun Wukong renounces his rank, fights the armies of heaven and is defeated by Erlang Shen. His power is split into six “relics” scattered across the land, and the player, as a monkey warrior called the Destined One, gathers them by fighting demon kings in places from the novel such as Black Wind Mountain, Yellow Wind Ridge and the Flaming Mountains. It sold 10 million copies in three days and won Best Action Game and other awards at The Game Awards 2024 — proof that a big-budget Chinese console and PC game could succeed worldwide.",
    notes: [
      { title: "The bosses are the novel’s demons", text: "The Black Bear Demon who stole Guanyin’s cassock, the Yellow Wind King who hurt Wukong’s eyes with his wind, the Yellow Brow King who built a fake Thunderclap Monastery, the spider spirits, Red Boy and his father the Bull Demon King — each chapter’s enemies come from episodes in the novel, so readers will recognize “the sequel to that story.”" },
      { title: "Settings scanned from real Shanxi temples", text: "The game’s temples and shrines were built from 3D scans of real historic buildings. Of 36 locations, 27 are in Shanxi province, and places such as the Little Western Heaven in Xi County (a late-Ming temple) and the Jade Emperor Temple in Jincheng saw big rises in visitors after release. Spared much of the destruction of war, Shanxi preserves more Song, Liao, Jin and Yuan wooden buildings than anywhere else in China." },
      { title: "Erlang Shen’s roots in Qin flood control", text: "Erlang Shen, who defeats Wukong, was originally a water god worshipped at Guankou in Sichuan. One tradition makes him the son of Li Bing, the Qin governor of Shu who built the Dujiangyan irrigation system: a hero of flood control became a god, and later Wukong’s rival in fiction." },
    ],
    links: [{ href: "/en/events/tang--4", label: "Xuanzang’s journey to India, the real model (Tang, 629–645)" }, { href: "/en/saiyuki", label: "Journey to the West: the story and the history" }, { href: "/en/four-great-novels", label: "The Four Great Classical Novels" }] },
  { id: "yanyun", name: "Where Winds Meet", alt: "Chinese title: Yanyun shiliu sheng (“Sixteen Sounds of Yanyun”)", steam: 3564740, developer: "Everstone Studio (NetEase)", release: "China: December 27, 2024; global: November 2025", platforms: "Windows / PS5 / iOS / Android (free to play)",
    era: "The end of the Five Dynasties and Ten Kingdoms (10th century)", source: "The history of the Sixteen Prefectures and wuxia fiction",
    summary: "An open-world wuxia action RPG set in the 10th century, near the end of the Five Dynasties and Ten Kingdoms, when short-lived dynasties followed one another after the fall of the Tang. The player is a young swordsman of the jianghu — the world of martial artists and knights-errant — racing over rooftops and cliffs with “lightness skill,” learning the arts of the martial schools and getting caught up in the intrigues of a troubled age. The Chinese title refers to the “Sixteen Prefectures of Yan and Yun,” whose loss at this time fatally weakened China’s northern defenses.",
    notes: [
      { title: "What were the Sixteen Prefectures?", text: "In 936 the Later Tang general Shi Jingtang founded the Later Jin with military help from the Khitan (later the Liao), and in return ceded sixteen prefectures centered on modern Beijing and Datong. Vital ground inside the Great Wall passed to the northern peoples, and the dynasties of the Central Plains were left facing cavalry armies across open plains." },
      { title: "The emperors who tried to win them back", text: "Emperor Shizong of the Later Zhou (Chai Rong) recovered part of them in a northern campaign in 959 but died of illness soon after. In 960 Zhao Kuangyin founded the Song; its second emperor, Taizong, sent a great army in 986 but was badly defeated, and the great general Yang Ye was killed. Under the Treaty of Chanyuan in 1004 the Song agreed to send the Liao silver and silk every year, and the sixteen prefectures were never recovered." },
      { title: "How far the “wuxia” is from history", text: "The rise and fall of dynasties and the tension with the Khitan draw on the atmosphere of real history, but the hero’s story, the martial schools, the near-flying lightness skill and pressure-point techniques are fiction from the wuxia novels of Jin Yong and others. Placing an imaginary jianghu in the “gaps” of history is the traditional method of wuxia fiction." },
    ],
    links: [{ href: "/en/events/wudai--2", label: "The cession of the Sixteen Prefectures (936)" }, { href: "/en/events/wudai--5", label: "The death of Shizong, Chai Rong (959)" }, { href: "/en/events/wudai--6", label: "Zhao Kuangyin’s coup (960)" }, { href: "/en/events/northernsong--yongxi", label: "The Yongxi northern campaign and Yang Ye’s death (986)" }, { href: "/en/events/northernsong--2", label: "The Treaty of Chanyuan (1004)" }, { href: "/en/yangjiajiang", label: "The Generals of the Yang Family" }] },
  { id: "phantomblade", name: "Phantom Blade Zero", alt: "Chinese title: Yingzhiren ling", steam: 4115450, developer: "S-GAME (Beijing)", release: "October 29, 2026", platforms: "PS5 / Windows",
    era: "No specific period (an imaginary world)", source: "Wuxia fiction and Hong Kong action cinema",
    summary: "A fast-paced “kungfupunk” action game set in a world that blends ancient China with steam engines and mechanical weapons. The hero, an assassin called Soul, is framed for the murder of his organization’s leader and, with only a little life left in his body, hunts the real killer. It is the first big console title from S-GAME, maker of the 2D mobile Phantom Blade series, and sold 4 million copies in three days (according to the developer).",
    notes: [
      { title: "No dynasty as a model", text: "Unlike Black Myth or Where Winds Meet, it is set in a “shadow world” rather than a real period. But it is packed with the conventions of wuxia: swords, sabers and spears, hidden weapons, martial schools and the code of the jianghu. Japanese action directors known for Hong Kong films and the live-action Rurouni Kenshin worked on its fight choreography." },
      { title: "The roots of wuxia: assassins and knights-errant in the Records", text: "Stories of the xia — swordsmen who stand outside power and fight for righteousness — go back more than two thousand years. Sima Qian of the Western Han devoted chapters of the Records of the Grand Historian to “assassins” and “wandering knights,” recording men such as Jing Ke, who tried to kill the First Emperor. Through the woman assassin Nie Yinniang of Tang tales and the heroes of the Ming Water Margin, the genre reached its modern form in the 20th-century novels of Jin Yong and Gu Long. A game with an assassin hero stands at the end of this line." },
    ],
    links: [{ href: "/en/qinshihuang", label: "The First Emperor, Jing Ke’s target" }, { href: "/en/history-books", label: "The Records of the Grand Historian and other histories" }, { href: "/en/suikoden", label: "Water Margin" }] },
  { id: "wuchang", name: "Wuchang: Fallen Feathers", alt: "Chinese title: Mingmo: Yuanqian zhi yu", steam: 2277560, developer: "Leenzee (Chengdu)", release: "July 24, 2025", platforms: "PS5 / Xbox Series X|S / Windows",
    era: "The end of the Ming (early 17th century)", source: "War and plague in late-Ming Sichuan, and the underworld envoys called Wuchang",
    summary: "A dark-fantasy action RPG set in Shu (modern Sichuan) at the end of the Ming, amid war and plague. As the “Feathering” — a strange disease that sprouts feathers from people’s bodies and turns them into monsters — spreads, Bai Wuchang, a woman pirate who has lost her memory, searches for the truth while suffering from the same disease herself. It is also a game in which a studio from Chengdu, Sichuan, chose its own region’s history as its setting.",
    notes: [
      { title: "The real disasters of late-Ming Sichuan", text: "The Feathering is imaginary, but the misery of the late Ming behind it is close to history. In the 17th century China suffered failed harvests and famine from global cooling (the Little Ice Age) and great epidemics in the north, while the rebellions of Li Zicheng and Zhang Xianzhong spread. Zhang Xianzhong founded “Great Xi” at Chengdu in 1644, but war, massacre and the wars with the Qing that followed devastated Sichuan’s population, and under the Qing great numbers of settlers were sent from Hubei, Hunan and elsewhere to refill it." },
      { title: "The legend of the sunken silver at Jiangkou was true", text: "Pursued by Qing armies, Zhang Xianzhong was said to have loaded vast amounts of gold and silver onto boats and sunk them in the Min River. Long dismissed as legend, it was proved true in 2017 when excavations at Jiangkou in Pengshan, Sichuan, turned up large quantities of silver ingots inscribed “Great Xi,” gold seals and more." },
      { title: "The hero’s name: Wuchang, envoy of the underworld", text: "In Chinese folk religion, the envoys who lead the souls of the dead to the underworld are called Wuchang (“impermanence”), shown as a pair: White Wuchang in white and Black Wuchang in black. The heroine, fighting on the border between life and death, bears this name." },
    ],
    links: [{ href: "/en/events/ming--6", label: "Li Zicheng’s rebellion and the fall of the Ming (1644)" }, { href: "/en/events/qing--0", label: "The Qing enter Beijing (1644)" }, { href: "/en/eunuchs", label: "The eunuchs who brought down the Ming" }] },
  { id: "zhongkui", name: "Black Myth: Zhong Kui", alt: "In development", developer: "Game Science", release: "TBA (announced August 2025)", platforms: "PC and consoles",
    era: "Tang (the period of the legend)", source: "The legend of Zhong Kui",
    summary: "The second game in the Black Myth series after Black Myth: Wukong, announced at gamescom in August 2025 as a separate, independent story. Its hero is Zhong Kui, the demon-queller loved in both China and Japan.",
    notes: [
      { title: "A demon-queller born from Xuanzong’s dream", text: "According to the story told in Shen Kuo’s Dream Pool Essays (Northern Song) and elsewhere, when Emperor Xuanzong of Tang lay sick with fever, a great demon appeared in his dream, caught a small demon and ate it. It announced itself as “Zhong Kui of Mount Zhongnan. I failed the imperial examination and took my own life, but I was given an honorable burial, and in gratitude I will rid the world of demons.” When Xuanzong awoke he was cured, and he had the painter Wu Daozi paint the figure." },
      { title: "A familiar face in Japan", text: "Pictures of Zhong Kui spread as charms against evil, and in Japan he can still be seen as a doll or banner for the Boys’ Day festival, and as the little tile figures called “Shōki-san” set on the roofs of Kyoto townhouses." },
    ],
    links: [{ href: "/en/keju", label: "The imperial examinations Zhong Kui failed" }, { href: "/en/eras/tang", label: "Xuanzong’s age: the Tang dynasty" }] },
];

const Y0 = 34;
const YEAR0 = 600;
const SCALE = 0.42;
const yOf = (year) => Y0 + (year - YEAR0) * SCALE;
const BANDS = [
  { name: "Tang", start: 618, end: 907, fill: "#EFD9C7" },
  { name: "5 Dyn.", start: 907, end: 960, fill: "#E6DCC2" },
  { name: "N. Song", start: 960, end: 1127, fill: "#DCE6D9" },
  { name: "S. Song", start: 1127, end: 1279, fill: "#E6EDE2" },
  { name: "Yuan", start: 1279, end: 1368, fill: "#E8E2D2" },
  { name: "Ming", start: 1368, end: 1644, fill: "#F0E4C8" },
  { name: "Qing", start: 1644, end: 1700, fill: "#E2DDE8" },
];
const MARKERS = [
  { start: 629, end: 645, fact: "Xuanzang’s journey to India", game: "Black Myth: Wukong", color: COLORS.vermilion },
  { start: 730, end: 745, fact: "Zhong Kui legend (Xuanzong’s dream)", game: "Black Myth: Zhong Kui", color: COLORS.vermilion },
  { start: 936, end: 960, fact: "Sixteen Prefectures ceded; Song founded", game: "Where Winds Meet", color: COLORS.jade },
  { start: 1592, end: 1592, fact: "Journey to the West published", game: "Black Myth: Wukong (source)", color: COLORS.vermilion, labelY: -10 },
  { start: 1630, end: 1647, fact: "Late-Ming Sichuan; Zhang Xianzhong", game: "Wuchang: Fallen Feathers", color: COLORS.ink, labelY: 10 },
];

function GamesTimeline() {
  const bandX = 40;
  const bandW = 40;
  const lineX = 100;
  const height = yOf(1700) + 56;
  return (
    <figure style={{ margin: 0, ...cardStyle, padding: "12px 8px" }}>
      <svg viewBox={`0 0 380 ${height}`} role="img" aria-label="When the games are set: a timeline of the periods and sources behind each game" style={{ width: "100%", maxWidth: 460, display: "block", margin: "0 auto" }}>
        {BANDS.map((b) => (
          <g key={b.name}>
            <rect x={bandX} y={yOf(b.start)} width={bandW} height={(b.end - b.start) * SCALE} fill={b.fill} stroke="#FBF8F0" />
            <text x={bandX + bandW / 2} y={yOf((b.start + b.end) / 2) + 4} textAnchor="middle" fontSize={9.5} fontWeight={700} fill={COLORS.ink} style={serif}>{b.name}</text>
          </g>
        ))}
        {[600, 800, 1000, 1200, 1400, 1600].map((y) => (
          <text key={y} x={bandX - 4} y={yOf(y) + 3.5} textAnchor="end" fontSize={9} fill={COLORS.gold} style={serif}>{y}</text>
        ))}
        {MARKERS.map((m) => {
          const y1 = yOf(m.start);
          const y2 = Math.max(yOf(m.end), y1 + 3);
          const ly = (y1 + y2) / 2 + (m.labelY || 0);
          return (
            <g key={m.fact}>
              <rect x={bandX + bandW + 2} y={y1} width={6} height={y2 - y1} fill={m.color} />
              <line x1={bandX + bandW + 8} y1={(y1 + y2) / 2} x2={lineX} y2={ly} stroke={m.color} strokeWidth={1} />
              <text x={lineX + 4} y={ly - 2} fontSize={10.5} fontWeight={700} fill={COLORS.ink} style={serif}>{m.game}</text>
              <text x={lineX + 4} y={ly + 10} fontSize={9} fill={COLORS.inkSoft} style={serif}>{m.start === m.end ? m.start : `${m.start}–${m.end}`}: {m.fact}</text>
            </g>
          );
        })}
        <line x1={8} y1={height - 34} x2={372} y2={height - 34} stroke={COLORS.mist} />
        <text x={12} y={height - 16} fontSize={10.5} fontWeight={700} fill={COLORS.ink} style={serif}>Phantom Blade Zero</text>
        <text x={130} y={height - 16} fontSize={9.5} fill={COLORS.inkSoft} style={serif}>… an imaginary wuxia world, no real period</text>
      </svg>
      <figcaption style={{ fontSize: 11.5, color: COLORS.inkSoft, textAlign: "center", marginTop: 6 }}>The colored bands are historical periods. Black Myth: Wukong relates both to its story’s setting (Tang) and to when its source novel was written (Ming).</figcaption>
    </figure>
  );
}

const FAQ = [
  { q: "What is “wuxia”?", a: "A genre of stories in which xia — knights-errant skilled in the martial arts — fight for righteousness in the jianghu, a world outside the law and power of the state. With roots in the assassins and wandering knights of the Records of the Grand Historian, Tang tales and Water Margin, it took its present form in the 20th-century novels of Jin Yong and Gu Long. Like Japanese period drama or ninja stories, it borrows real historical periods to tell the stories of imaginary heroes." },
  { q: "Can I enjoy Black Myth: Wukong without knowing Journey to the West?", a: "Yes, but the game is a sequel to the novel, so knowing its plot and the names of its demons makes the bosses’ dialogue and the staging much clearer. The main characters — Sun Wukong, Zhu Bajie, the Bull Demon King, Red Boy — and famous scenes such as the Flaming Mountains are introduced on the Journey to the West page." },
  { q: "When is Where Winds Meet set?", a: "In the 10th century, near the end of the Five Dynasties and Ten Kingdoms — the troubled age between the fall of the Tang in 907 and the Song’s near-reunification of China by 979. Its Chinese title, “Yanyun,” comes from the Sixteen Prefectures of Yan and Yun that the Later Jin ceded to the Khitan (Liao) in 936." },
  { q: "Is Phantom Blade Zero based on real history?", a: "No. It is set in an imaginary world that mixes ancient-Chinese-style wuxia with steam-age technology, with no particular dynasty or person as its model. It is a modern action game built on the conventions of wuxia stories with assassins and knights-errant as heroes." },
  { q: "Why are there suddenly so many Chinese history and mythology games?", a: "Until recently the Chinese games market centered on mobile and online games, but the worldwide success of Black Myth: Wukong in 2024 showed there was strong demand for big console and PC games built on China’s own myths and history. Subjects every Chinese player knows — Journey to the West, wuxia, the late Ming — feel fresh to players abroad." },
];

export default function EnglishWuxiaGamesPage() {
  return (
    <FeaturePage
      title="Chinese Wuxia and Mythology Games"
      jaPath="/wuxia-games"
      intro="Since the huge success of Black Myth: Wukong in 2024, Chinese game studios have released one big title after another drawing on China’s own history, mythology and wuxia tradition. This page looks at five much-discussed recent games, what they are about, and the periods, history and legends behind them."
      related={[
        { href: "/en/saiyuki", label: "Journey to the West" },
        { href: "/en/musou", label: "Dynasty Warriors" },
        { href: "/en/koei-sangokushi", label: "Romance of the Three Kingdoms games" },
        { href: "/en/dramas", label: "Chinese historical dramas" },
      ]}
    >
      <NoteCard title="In short: three kinds of source">
        (1) Based on classic novels and legends (Black Myth: Wukong, Black Myth: Zhong Kui); (2) imaginary heroes placed in a real period (Where Winds Meet, Wuchang); (3) an imaginary wuxia world with no set period (Phantom Blade Zero).
      </NoteCard>

      <div style={{ marginTop: 28 }}>
        <Section title="The games and their periods" id="list">
          <DataTable head={["Game", "Released", "Period", "Source"]} rows={GAMES.map((g) => [g.name, g.release, g.era, g.source])} />
        </Section>
      </div>

      <Section title="When are the games set?" id="map"><GamesTimeline /></Section>

      {GAMES.map((g) => (
        <Section key={g.id} title={g.name} id={g.id}>
          {g.steam && (
            <figure style={{ margin: "0 0 12px" }}>
              <a href={`https://store.steampowered.com/app/${g.steam}/`} target="_blank" rel="noreferrer">
                <img src={steamHeader(g.steam)} alt={`${g.name} key art`} loading="lazy" width={460} height={215}
                  style={{ width: "100%", height: "auto", aspectRatio: "460 / 215", objectFit: "cover", display: "block", border: `1px solid ${COLORS.mist}`, backgroundColor: "#EFE7D0" }} />
              </a>
              <figcaption style={{ fontSize: 10.5, color: COLORS.mist, marginTop: 4 }}>
                Image: <a href={`https://store.steampowered.com/app/${g.steam}/`} target="_blank" rel="noreferrer" style={{ color: COLORS.mist }}>Steam store page</a> (© {g.developer.replace(/\s*\(.*$/, "")})
              </figcaption>
            </figure>
          )}
          <div style={{ fontSize: 12.5, color: COLORS.inkSoft, marginBottom: 10 }}>
            {g.alt} · Developer: {g.developer} · Released: {g.release} · Platforms: {g.platforms} · Setting: {g.era}
          </div>
          <Paras items={[g.summary]} />
          <div className="flex flex-col gap-3" style={{ marginTop: 12 }}>
            {g.notes.map((n) => <NoteCard key={n.title} title={n.title}>{n.text}</NoteCard>)}
          </div>
          {g.links.filter((l) => isLive(l.href)).length > 0 && (
            <div style={{ fontSize: 13, marginTop: 12 }}>
              <span style={{ fontWeight: 700, color: COLORS.ink }}>The history in more depth: </span>
              {g.links.filter((l) => isLive(l.href)).map((l, i) => (
                <span key={l.href}>{i > 0 && " · "}<Link href={l.href} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>{l.label}</Link></span>
              ))}
            </div>
          )}
        </Section>
      ))}

      <Section title="Common questions" id="faq">
        <div className="flex flex-col gap-3">
          {FAQ.map((f) => <NoteCard key={f.q} title={f.q}>{f.a}</NoteCard>)}
        </div>
        <p style={{ fontSize: 11.5, color: COLORS.mist, marginTop: 12 }}>Release dates and sales figures are based on official announcements and press reports as of November 2026. Game images are copyright of their developers and publishers.</p>
      </Section>
    </FeaturePage>
  );
}
