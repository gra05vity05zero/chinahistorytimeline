import Link from "next/link";
import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { HeritageThumb } from "@/components/Shared";
import { FeaturePage, Section, Paras, DataTable, NoteCard, cardStyle, serif } from "@/components/en/EnFeature";

const title = "Koei’s Romance of the Three Kingdoms Series: Every Game, the Latest Releases and Kou Shibusawa";
const description =
  "Koei Tecmo’s historical strategy series Romance of the Three Kingdoms (Sangokushi), from the 1985 original to Romance of the Three Kingdoms XIV and 8 Remake: the full list of games, the latest releases, ruler play versus officer play, its creator Kou Shibusawa (Yoichi Erikawa), and the real history behind the famous officers.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/koei-sangokushi", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/koei-sangokushi", image: { title: "Romance of the Three Kingdoms Games", subtitle: "From the original to the latest", seal: "三" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const LORD_COLOR = "#B5452F";
const OFFICER_COLOR = "#4F6FA0";
const fig = (n) => figureEnByJa("sanguo", n);

const LATEST = [
  { title: "Romance of the Three Kingdoms XIV with Power Up Kit — Complete Edition", date: "Released September 10, 2026",
    body: "The definitive edition of 2020’s Romance of the Three Kingdoms XIV, bundling the Power Up Kit and later downloadable content. Its single map, on which you spread your faction’s color across the land, gives it a distinctive strategic feel, and its roster of more than 1,000 officers is the largest in the series. In June 2026 Koei Tecmo announced that the XIV games had shipped more than a million copies." },
  { title: "Romance of the Three Kingdoms 8 Remake with Power Up Kit", date: "Released January 29, 2026",
    body: "The Power Up Kit edition of Romance of the Three Kingdoms 8 Remake — the October 2024 remake of 2001’s Romance of the Three Kingdoms VIII — and a 40th-anniversary title for the series. Its appeal is “officer play,” living out a whole life as your favorite officer; this edition adds “jewels” that grant different commands depending on rank, “turning points” that break stalemates between factions, and five hypothetical scenarios." },
];

const HISTORY = [
  { period: "1985 to early 1990s", title: "The birth of historical simulation",
    body: "Koei (now Koei Tecmo Games), which had pioneered the historical simulation genre with Nobunaga’s Ambition in 1983, released Sangokushi for personal computers in December 1985. The player becomes one of the warlords and directs domestic affairs, diplomacy and war with the aim of unifying China. Each officer’s abilities were expressed as numbers, and the pleasure of gathering talent and building up a state became the foundation of the whole series. II added stratagems and custom rulers, III leadership and naval abilities, and ports to the Famicom and Super Famicom won fans on home consoles." },
  { period: "1990s", title: "Deepening systems",
    body: "IV (1994) added siege weapons such as catapults and the handling of captured officers, and from around this time the “Power Up Kit,” adding scenarios and features, became a fixture. V (1995) introduced formations and fame, and VI (1998) abilities that change with age and officers’ ideals and factions, each game recreating the Three Kingdoms from a different angle." },
  { period: "2000s", title: "Officer play and the single map",
    body: "VII (2000) introduced “all-officer play,” letting you play not only as a ruler but as a free officer or a vassal; VIII (2001) even portrayed marriage and raising children. IX (2003), by contrast, returned to ruler play, showing all of China on a single map with factions moving simultaneously in semi-real time, and 11 (2006) won acclaim for its 3D single map on which you place facilities. From then on, ruler-play and officer-play games tended to alternate." },
  { period: "2010s to today", title: "Toward the 30th and 40th anniversaries",
    body: "12 (2012) featured online battles, and the 30th-anniversary 13 (2016) all-officer play centered on the bonds between officers. XIV (2020) won fans with its color-spreading single map and 1,000-plus officers, and in 2024 Romance of the Three Kingdoms 8 Remake was the series’ first full-scale remake. The series reached its 40th anniversary in 2025, with worldwide sales of more than 9.5 million." },
];

const SERIES = [
  ["I", "1985", "lord", "The first game, for PCs (the NEC PC-8801 series)."],
  ["II", "1989", "lord", "Adds stratagems and custom rulers."],
  ["III", "1992", "lord", "City-by-city battles, leadership and naval abilities, custom officers."],
  ["IV", "1994", "lord", "Adds siege weapons and captured officers; the Power Up Kit becomes standard."],
  ["V", "1995", "lord", "Introduces formations and fame."],
  ["VI", "1998", "lord", "Abilities that change with age; ideals and factions."],
  ["VII", "2000", "officer", "The series’ first all-officer play."],
  ["VIII", "2001", "officer", "Marriage and children; more than 50 scenarios. Remade in 2024."],
  ["IX", "2003", "lord", "Single map and semi-real-time play; bases other than castles."],
  ["X", "2004", "officer", "All-officer play; adds “campaigns.”"],
  ["11", "2006", "lord", "3D single map; city-building with facilities."],
  ["12", "2012", "lord", "A free online battle mode."],
  ["13", "2016", "officer", "30th-anniversary title; emphasis on bonds between officers."],
  ["XIV", "2020", "lord", "Color-spreading single map; more than 1,000 officers."],
  ["8 Remake", "2024", "officer", "The series’ first full remake, rebuilding VIII."],
];
const STYLE = { lord: { label: "Ruler", color: LORD_COLOR }, officer: { label: "All-officer", color: OFFICER_COLOR } };

const STYLES = [
  { key: "lord", title: "Ruler play", sub: "Lead a state to unify the realm",
    body: "Become a ruler such as Cao Cao or Liu Bei and direct everything: domestic affairs, appointments, diplomacy and war. For players who want the satisfaction of growing a power, or who love planning strategy.",
    picks: "Recommended: Romance of the Three Kingdoms XIV (modern controls and 1,000-plus officers), 11 (a much-loved classic)" },
  { key: "officer", title: "All-officer play", sub: "Live through the age as a single officer",
    body: "Play not only as a ruler but as a free officer or a vassal. Serve a lord, rise in rank or strike out on your own, befriend other officers and even marry — the fun is in becoming a character in the story. For players with a favorite officer.",
    picks: "Recommended: Romance of the Three Kingdoms 8 Remake (accessible and story-rich), 13" },
];

const FIGURES = [
  { ja: "曹操", role: "Warlord who laid the foundations of Wei", note: "In every game his politics, leadership and intelligence are all high and he has plenty of talent: the strongest ruler for beginners to experience unifying the realm." },
  { ja: "劉備", role: "First emperor of Shu Han", note: "Known for his high charisma since the 1985 original. In many games he starts with no territory, and the classic way to play is to wander with Guan Yu and Zhang Fei before founding a state." },
  { ja: "孫権", role: "First emperor of Wu", note: "Based in Jiangdong behind the Yangtze, with great ministers such as Zhou Yu and Lu Su. His strength is defensive war using his navy." },
  { ja: "諸葛亮", role: "Chancellor of Shu Han", note: "His intelligence and politics stats are among the highest throughout the series, and the event recreating Liu Bei’s “three visits to the thatched cottage” to recruit him appears in many games." },
  { ja: "関羽", role: "Liu Bei’s sworn brother", note: "Excellent in war and leadership, and usually portrayed as loyal and hard to lure away." },
  { ja: "司馬懿", role: "Wei minister and foundation of the Jin", note: "A great general who matches wits with Zhuge Liang. In later scenarios he is effectively the protagonist, carrying the story toward the Jin unification." },
];

const SPINOFFS = [
  { title: "Sangokushi Eiketsuden, Koumeiden and Sousouden", meta: "1995–1998", body: "Simulation RPGs that follow a fixed hero’s story, retracing the great scenes of the Three Kingdoms from the viewpoints of Liu Bei, Zhuge Liang and Cao Cao." },
  { title: "Dynasty Warriors (Shin Sangoku Musou)", meta: "2000– · Action", body: "Action games in which you control an officer and mow down whole armies on the battlefield. 2025’s Dynasty Warriors: Origins portrays the turmoil after the Yellow Turban Rebellion through the eyes of a nameless hero.", href: "/en/musou" },
  { title: "Sangokushi Hadou", meta: "2020– · Smartphone and PC", body: "An online strategy game in which players across the country fight for territory on the same map, inheriting the series’ officer portraits and stats." },
];

const FAQ = [
  { q: "How many Romance of the Three Kingdoms games are there?", a: "There are fourteen numbered games, from the 1985 original to Romance of the Three Kingdoms XIV in 2020, plus the 2024 remake Romance of the Three Kingdoms 8 Remake. Most also have “Power Up Kit” editions with added content." },
  { q: "Which game should a beginner start with?", a: "Romance of the Three Kingdoms XIV or 8 Remake: both run on current hardware and have good tutorials. If you want to enjoy running a state, choose ruler-play XIV; if you want to become your favorite officer, officer-play 8 Remake." },
  { q: "Why is the Japanese title written 三國志 rather than 三国志?", a: "國 is the traditional form of the character 国 (“country”). Koei’s games have used the traditional form for their official title since the original, which also marks them off from the novel and the history." },
  { q: "Are the games historically accurate?", a: "Most of the characters and events are based on the Ming novel Romance of the Three Kingdoms. Great events such as the Battle of Red Cliffs are historical, but scenes such as Zhuge Liang summoning the wind are fiction. Recent games also draw on the official Records of the Three Kingdoms, so both the historical and the fictional faces of the era appear." },
  { q: "What is a Power Up Kit?", a: "An expanded edition released after the main game, adding new scenarios, events and systems and tools for editing officer data. It is sold both bundled with the main game (“with Power Up Kit”) and on its own for owners of the base game." },
];

export default function EnglishKoeiSangokushiPage() {
  return (
    <FeaturePage
      title="Romance of the Three Kingdoms: The Koei Game Series"
      jaPath="/koei-sangokushi"
      intro="Sangokushi — released in English as Romance of the Three Kingdoms — is a series of historical strategy games launched by Koei (now Koei Tecmo Games) in 1985. The player becomes one of the warlords or officers of the late Eastern Han and Three Kingdoms period and seeks to unify the realm through domestic affairs, diplomacy and war. Created by Kou Shibusawa (Yoichi Erikawa), the series celebrated its 40th anniversary in 2025, with more than 9.5 million copies sold worldwide. This page covers the latest releases, the history of the series, every game, how to choose one, and the real history behind its famous officers."
      related={[
        { href: "/en/eras/sanguo", label: "The Three Kingdoms" },
        { href: "/en/sanguo-battles", label: "Three Kingdoms battle map" },
        { href: "/en/sanguo-comparison", label: "Wei, Wu and Shu compared" },
        { href: "/en/musou", label: "Dynasty Warriors" },
      ]}
    >
      <Section title="The latest releases (2026)" id="latest">
        <Paras items={["For the 40th anniversary, definitive editions of two popular games were released in 2026. As of October 2026, no new numbered title (XV) had been announced."]} />
        <div className="flex flex-col gap-3" style={{ marginTop: 12 }}>
          {LATEST.map((l) => <NoteCard key={l.title} title={`${l.title} — ${l.date}`}>{l.body}</NoteCard>)}
        </div>
      </Section>

      <Section title="The history of the series" id="history">
        <div className="flex flex-col gap-3">
          {HISTORY.map((h) => <NoteCard key={h.title} title={`${h.title} (${h.period})`}>{h.body}</NoteCard>)}
        </div>
      </Section>

      <Section title="Every game in the series" id="series">
        <Paras items={["Years are for the first platform; most games were later ported to other systems or released in Power Up Kit editions."]} />
        <div style={{ marginTop: 12 }}>
          <DataTable head={["Game", "Year", "Style", "Main features"]} rows={SERIES.map(([no, y, s, n]) => [no === "I" ? "Romance of the Three Kingdoms" : `Romance of the Three Kingdoms ${no}`, y, STYLE[s].label, n])} />
        </div>
        <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 8 }}>Style: “Ruler” games have you run a faction as its ruler; “All-officer” games also let you play as officers other than rulers.</p>
      </Section>

      <Section title="Ruler play or officer play: how to choose" id="how-to-choose">
        <Paras items={["The games differ greatly in how they play. Start by asking whether you want to run a state or live as a single officer."]} />
        <div className="grid sm:grid-cols-2 gap-3" style={{ marginTop: 12 }}>
          {STYLES.map((s) => (
            <div key={s.key} className="p-4" style={{ ...cardStyle, borderTop: `3px solid ${STYLE[s.key].color}` }}>
              <div style={{ ...serif, fontSize: 16, fontWeight: 700, color: STYLE[s.key].color }}>{s.title}</div>
              <div style={{ fontSize: 12.5, color: COLORS.gold, marginTop: 2 }}>{s.sub}</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 6 }}>{s.body}</p>
              <p style={{ fontSize: 12.5, color: COLORS.ink, marginTop: 6 }}>{s.picks}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="The creator: Kou Shibusawa" id="creator">
        <Paras items={[
          "Kou Shibusawa is the game-designer name of Yoichi Erikawa, founder of Koei Tecmo. Born in 1950 in Ashikaga, Tochigi, he graduated from Keio University and in 1978 founded Koei in Ashikaga as a wholesaler of dyes and industrial chemicals.",
          "The turning point came in 1980, when his wife Keiko Erikawa gave him a personal computer for his thirtieth birthday. He taught himself programming and in 1981 released his first game, Kawanakajima no Kassen. The hits Nobunaga’s Ambition (1983) and Sangokushi (1985) made Koei synonymous with historical simulation. On the business side Keiko supported the company alongside him and later served as its president.",
          "He oversaw the Sangokushi series as producer for many years and is known as a devoted reader of Yokoyama Mitsuteru’s Three Kingdoms manga. After the 2009 merger with Tecmo he has led Koei Tecmo Holdings, and a concert marking 45 years of his creative work and the 40th anniversary of Sangokushi was planned for 2026.",
        ]} />
      </Section>

      <Section title="Famous officers and the real history" id="figures">
        <Paras items={["Behind the stats and events of the games lie the lives of real people. Follow the links to read about them."]} />
        <div className="flex flex-col gap-3" style={{ marginTop: 12 }}>
          {FIGURES.map((f) => {
            const p = fig(f.ja);
            return (
              <div key={f.ja} className="flex gap-3 p-3" style={cardStyle}>
                {p?.imageUrl && (
                  <div className="flex items-center justify-center shrink-0" style={{ width: 72, height: 72, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}>
                    <HeritageThumb imageUrl={p.imageUrl} name={p.name} type="figure" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div style={{ ...serif, fontSize: 16, fontWeight: 700 }}>
                    {p?.href ? <Link href={p.href} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>{p.name}</Link> : <span style={{ color: COLORS.ink }}>{p?.name || f.ja}</span>}
                  </div>
                  <div style={{ fontSize: 12, color: COLORS.gold, marginTop: 2 }}>{f.role}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 4 }}>{f.note}</p>
                  {p?.credit && <div style={{ fontSize: 10, color: COLORS.mist, marginTop: 4 }}>{p.credit}</div>}
                </div>
              </div>
            );
          })}
        </div>
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 12 }}>
          The differences in strength and talent between the three kingdoms are covered in <Link href="/en/sanguo-comparison" style={{ color: COLORS.vermilion }}>Wei, Wu and Shu compared</Link>, and the great battles that become the games’ scenarios in <Link href="/en/sanguo-battles" style={{ color: COLORS.vermilion }}>the Three Kingdoms battle map</Link>.
        </p>
      </Section>

      <Section title="Related series and spin-offs" id="spinoffs">
        <div className="flex flex-col gap-3">
          {SPINOFFS.map((s) => (
            <NoteCard key={s.title} title={`${s.title} (${s.meta})`}>
              {s.body}
              {s.href && <> <Link href={s.href} style={{ color: COLORS.vermilion }}>The Dynasty Warriors games and the history behind them →</Link></>}
            </NoteCard>
          ))}
        </div>
      </Section>

      <Section title="What to read after the games" id="books">
        <Paras items={[
          "Once the games have taught you the officers’ names, meeting them in fiction and history makes the next playthrough all the richer. In English, the novel Romance of the Three Kingdoms is available in full translations such as Moss Roberts’s; the official Records of the Three Kingdoms is the source of the games’ officer biographies. In Japan, Yoshikawa Eiji’s novel and Yokoyama Mitsuteru’s 60-volume manga shaped the popular image of the era.",
        ]} />
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 12 }}>
          The relationship between the novel and the official history is explained in <Link href="/en/four-great-novels" style={{ color: COLORS.vermilion }}>The Four Great Classical Novels</Link> and <Link href="/en/history-books" style={{ color: COLORS.vermilion }}>The Great Histories of China</Link>, and Japanese writers of the Three Kingdoms in <Link href="/en/novelists" style={{ color: COLORS.vermilion }}>Japanese novelists of Chinese history</Link>.
        </p>
      </Section>

      <Section title="Common questions" id="faq">
        <div className="flex flex-col gap-3">
          {FAQ.map((f) => <NoteCard key={f.q} title={f.q}>{f.a}</NoteCard>)}
        </div>
      </Section>
    </FeaturePage>
  );
}
