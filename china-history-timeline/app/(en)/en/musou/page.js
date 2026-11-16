import Link from "next/link";
import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { HeritageThumb } from "@/components/Shared";
import { FeaturePage, Section, Paras, DataTable, NoteCard, cardStyle, serif } from "@/components/en/EnFeature";

const title = "Dynasty Warriors and Real History: Every Game, Origins, and Were the Officers and Weapons Real?";
const description =
  "Koei Tecmo’s action series Dynasty Warriors (Shin Sangoku Musou), from the 2000 original to Dynasty Warriors: Origins and the 2026 remaster: the full list of games, and how Lü Bu, Guan Yu, Zhao Yun, the women warriors such as Diaochan and Sun Shangxiang, weapons like the Green Dragon Crescent Blade, and battles such as Hulao Pass, Changban and Red Cliffs compare with history.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/musou", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/musou", image: { title: "Dynasty Warriors", subtitle: "The games and the history", seal: "無" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const fig = (n) => figureEnByJa("sanguo", n);

const LATEST = [
  { title: "Dynasty Warriors: Origins", date: "Released January 17, 2025 (Switch 2 version January 22, 2026)",
    body: "The first new main entry in seven years since Dynasty Warriors 9, following a nameless hero who has lost his memory through the turmoil from the Yellow Turban Rebellion to the Battle of Red Cliffs. It is marked by armies thousands strong filling the screen and the feel of surviving the battlefield as a single soldier. Shipments passed one million worldwide in about a month, and in January 2026 a Switch 2 version was released along with “Visions of Four Heroes,” a large expansion exploring developments the main game did not show." },
  { title: "Shin Sangoku Musou 2 with Moushouden Remastered (Dynasty Warriors 3: Complete Edition Remastered)", date: "Released October 1, 2026",
    body: "The series’ first remaster, announced in September 2025 as part of the 25th-anniversary project. It combines 2001’s Shin Sangoku Musou 2 (Dynasty Warriors 3 in the West) with its expansion disc and rebuilds the graphics. Originally due in March 2026, it was delayed to improve quality." },
];

const SERIES = [
  ["Sangoku Musou (Dynasty Warriors)", "1997", "PS", "The origin of the series: a one-on-one 3D fighting game."],
  ["Shin Sangoku Musou (Dynasty Warriors 2)", "2000", "PS2", "Reborn as an action game in which one warrior mows down whole armies."],
  ["Shin Sangoku Musou 2 (Dynasty Warriors 3)", "2001", "PS2", "Introduced each officer’s own story (Musou Mode). Expansion “Xtreme Legends” editions became standard."],
  ["Shin Sangoku Musou 3 (Dynasty Warriors 4)", "2003", "PS2", "Officer-by-officer story modes; the strategy-flavored Empires line began."],
  ["Shin Sangoku Musou 4 (Dynasty Warriors 5)", "2005", "PS2", "Deeper officer stories, and more battlefield gimmicks such as siege weapons."],
  ["Shin Sangoku Musou 5 (Dynasty Warriors 6)", "2007", "PS3 / Xbox 360", "Officer designs and action rebuilt for a new generation of hardware."],
  ["Shin Sangoku Musou 6 (Dynasty Warriors 7)", "2011", "PS3 / Xbox 360", "Sima Yi’s Jin appears as an independent faction."],
  ["Shin Sangoku Musou 7 (Dynasty Warriors 8)", "2013", "PS3 / Xbox 360 and others", "Introduced “hypothetical routes” that depart from history."],
  ["Shin Sangoku Musou 8 (Dynasty Warriors 9)", "2018", "PS4 / Xbox One / PC", "An open world spanning all of China, with about 90 officers."],
  ["Dynasty Warriors: Origins", "2025", "PS5 / Xbox Series X|S / PC", "The Yellow Turbans to Red Cliffs, seen through an original hero’s eyes."],
];

const FIGURES = [
  { ja: "呂布", en: "Lü Bu", game: "The mightiest warrior, wielding his sky piercer halberd", real: "In the official history too he was a fierce warrior, called the “Flying General” for his skill with bow and horse. The official history also mentions his famous horse Red Hare, and people said, “Among men, Lü Bu; among horses, Red Hare.” But he killed two masters, Ding Yuan and Dong Zhuo, and lost all trust; defeated by Cao Cao at Xiapi in 198, he was executed." },
  { ja: "関羽", en: "Guan Yu", game: "The god of war with the Green Dragon Crescent Blade", real: "That at the Battle of Boma in 200 he cut down the enemy general Yan Liang in the midst of a great army is in the official history. But it was Sun Jian’s army that killed Hua Xiong; crediting Guan Yu is an invention of the Romance. In 219, after Wu took Jing Province, he was captured and beheaded. Later deified, he is still worshipped today as Lord Guan (Guandi)." },
  { ja: "張飛", en: "Zhang Fei", game: "A wild warrior with his serpent spear", real: "The story of his holding off Cao Cao’s pursuing army at Changban in 208 with just twenty horsemen, his back to a bridge, is also in the official history, which says he challenged them “holding his spear crosswise” — so he certainly fought with a spear. Harsh with his men, he was killed by his own subordinates in 221." },
  { ja: "趙雲", en: "Zhao Yun", game: "Cutting through great armies with a single spear", real: "That he protected Liu Bei’s son A Dou (the future Liu Shan) and Lady Gan at Changban is in the official history. But charging in and out of Cao Cao’s army again and again is an embellishment of the Romance. His official biography is short; most of his exploits come from the Unofficial Biography of Zhao Yun quoted in Pei Songzhi’s commentary." },
  { ja: "張遼", en: "Zhang Liao", game: "The fierce general who terrified the armies of Wu", real: "At Hefei in 215 he led 800 picked men in a charge against Sun Quan’s great army and came within a step of catching Sun Quan himself. This is recorded in the official history — not a game exaggeration. In Jiangdong, it is said, the words “Zhang Liao is coming” were enough to silence crying children." },
  { ja: "夏侯惇", en: "Xiahou Dun", game: "The one-eyed warrior", real: "That he lost his left eye to a stray arrow fighting Lü Bu and was nicknamed “Blind Xiahou” is in the official history. The scene of him eating his own eye — “my father’s seed, my mother’s blood” — is an invention of the Romance. In history he did his best work not on the battlefield but governing the rear and running military farms while Cao Cao was away." },
  { ja: "諸葛亮", en: "Zhuge Liang", game: "The genius strategist who commands the field with his feather fan", real: "Summoning the southeast wind at Red Cliffs is an invention of the Romance. The historian Chen Shou praised Zhuge Liang highly as a statesman who governed the country, but also wrote that “improvised military strategy was not his strength.” He died of illness in camp at Wuzhang Plains in 234." },
  { ja: "周瑜", en: "Zhou Yu", game: "The handsome Zhou Lang who leads Wu", real: "In the Romance he is outwitted by Zhuge Liang, but in the official history the real architect of the victory at Red Cliffs was Zhou Yu. He was also a fine musician, and because he would always turn around if a player made a mistake, a song went: “If the tune is wrong, Master Zhou looks round.” He died of illness in 210, aged 36." },
];

const WOMEN_TYPE = {
  real: { label: "Real", color: "#4F6FA0" },
  legend: { label: "Real; name from legend", color: "#8A6D2F" },
  fiction: { label: "Fictional", color: "#B5452F" },
};
const WOMEN = [
  { name: "Diaochan", type: "fiction", note: "A character invented in the Romance. The official history only says that Lü Bu was secretly involved with one of Dong Zhuo’s maids; the story of the “chain stratagem” is thought to have grown from this." },
  { name: "Da Qiao and Xiao Qiao", type: "legend", note: "The official history speaks only of “the two daughters of Lord Qiao”: the elder married Sun Ce and the younger Zhou Yu. Their real names are not known." },
  { name: "Sun Shangxiang", type: "legend", note: "Sun Quan’s sister, “Lady Sun,” who married Liu Bei, was real. The official history says she was fierce-tempered and kept over a hundred maids armed with swords. The name “Shangxiang” comes from later Peking opera and the like." },
  { name: "Zhenji", type: "legend", note: "Modeled on Lady Zhen, wife first of Yuan Shao’s son Yuan Xi and then of Cao Pi. Mother of Cao Rui, Wei’s second emperor, she was ordered to die by Cao Pi in 221." },
  { name: "Cai Wenji", type: "real", note: "The real poet Cai Yan, daughter of the scholar Cai Yong. Carried off by the Xiongnu in the chaos of war, she was ransomed and brought home by Cao Cao twelve years later. Her “Poem of Grief and Indignation” about her suffering survives." },
  { name: "Yueying", type: "legend", note: "The official history calls Zhuge Liang’s wife only “the daughter of Huang Chengyan,” and her name is unknown. “Yueying” is a name given by later folk tradition." },
  { name: "Wang Yi", type: "real", note: "The wife of Zhao Ang, who fought Ma Chao — a real woman who took up arms herself to defend her city, recorded in the Biographies of Women quoted in Pei Songzhi’s commentary." },
  { name: "Zhurong", type: "fiction", note: "An invented character who appears in the Romance as the wife of Meng Huo, king of the south. Her name is taken from the god of fire in Chinese mythology." },
  { name: "Xingcai", type: "fiction", note: "An original character created for the games as Zhang Fei’s daughter. The historical Zhang Fei had two daughters, both of whom became empresses of Liu Shan, but their names are not recorded." },
];

const WEAPONS = [
  { name: "The Green Dragon Crescent Blade (Guan Yu)", note: "The official history says nothing of Guan Yu’s weapon. The yanyue dao — a crescent blade on a long pole — appears in later sources such as the Northern Song military manual Wujing zongyao (1044), and is thought not to have existed yet in the Three Kingdoms period." },
  { name: "The sky piercer halberd (Lü Bu)", note: "The ji halberd itself is an ancient weapon, and the official history tells how Lü Bu settled a quarrel by shooting an arrow into the side-blade of a ji planted far away. But the fangtian huaji form, with crescent blades on both sides, is thought to date from the Song and Ming or later." },
  { name: "The serpent spear (Zhang Fei)", note: "The “eighteen-foot serpent spear” with its wavy blade became famous through the Romance. The official history says he held a spear at Changban, so he certainly fought with one." },
];

const SCENES = [
  ["Hulao Pass (190)", "Liu Bei, Guan Yu and Zhang Fei take on Lü Bu together", "“Three heroes fight Lü Bu” is an invention of the Romance. Sishui Pass and Hulao Pass are separate in the story but are thought to be different period names for the same pass. In the official history, it was Sun Jian who fought Dong Zhuo’s army hardest."],
  ["Changban (208)", "Zhao Yun’s lone charge, Zhang Fei standing guard at the bridge", "Zhao Yun protecting A Dou and Zhang Fei stopping the pursuers at the bridge are in the official history. Liu Bei was overtaken because he fled with crowds of civilians, and the defeat was so bad he abandoned his wife and children."],
  ["Red Cliffs (208)", "Burning Cao Cao’s great fleet with the chain stratagem and fire", "That Huang Gai of Wu set the fleet ablaze after a feigned surrender, and Cao Cao was defeated, is history. Pang Tong’s chain stratagem and Zhuge Liang summoning the wind are inventions of the Romance, and disease in Cao Cao’s army was another cause of defeat."],
  ["Wuzhang Plains (234)", "The last battle of wits between Zhuge Liang and Sima Yi", "Sima Yi kept to his defenses and avoided battle, and Zhuge Liang died of illness in camp. When Sima Yi pursued the withdrawing Shu army and turned back in alarm at its show of resistance, a saying was born: “A dead Zhuge scares off a living Zhongda.”"],
];

const FAQ = [
  { q: "What does “Musou” mean?", a: "“Without equal.” The phrase guoshi wushuang (“a man without equal in the land”), Xiao He’s praise of Han Xin in the Records of the Grand Historian, is famous — and fits a game in which one warrior defeats whole armies." },
  { q: "How do Dynasty Warriors and Romance of the Three Kingdoms differ?", a: "Both are Koei Tecmo Three Kingdoms games, but Romance of the Three Kingdoms is a historical strategy game in which you direct states and officers to unify the realm, while Dynasty Warriors is an action game in which you control an officer directly on the battlefield. Dynasty Warriors is developed by the team Omega Force." },
  { q: "Do the games follow history?", a: "The broad story follows the Ming novel Romance of the Three Kingdoms, with characters and developments original to the games added. Some scenes are based on history, such as the Battle of Red Cliffs or Zhao Yun’s feats at Changban; others, such as Diaochan or the three heroes’ fight at Hulao Pass, are fiction." },
  { q: "Did generals really fight one-on-one duels?", a: "Rarely. The official history records only a handful of cases, such as Guan Yu cutting down Yan Liang, or Sun Ce grappling with Taishi Ci. Battles of the time were mass actions in which commanders directed large bodies of troops; one officer defeating thousands is the special pleasure of the games." },
  { q: "Which game should I play first?", a: "Dynasty Warriors: Origins, which runs on current hardware. Its story begins with the Yellow Turban Rebellion, so even players who know nothing of the Three Kingdoms can follow the flow of events. If you want the classic experience with a large cast of playable officers, there is Dynasty Warriors 9, or the 2026 remaster of Dynasty Warriors 3." },
];

export default function EnglishMusouPage() {
  return (
    <FeaturePage
      title="Dynasty Warriors: The History Behind the Games"
      jaPath="/musou"
      intro="Dynasty Warriors (Shin Sangoku Musou in Japan) is an action game series launched by Koei (now Koei Tecmo Games) in 2000. Players control officers such as Lü Bu, Guan Yu and Zhao Yun and cut their way through the enemy soldiers that flood the battlefield — the thrill of “one warrior against a thousand” that has kept the series popular through its 25th anniversary in 2025. This page covers the series and its latest games, and what history says about the officers, weapons and famous battles."
      related={[
        { href: "/en/eras/sanguo", label: "The Three Kingdoms" },
        { href: "/en/koei-sangokushi", label: "Romance of the Three Kingdoms games" },
        { href: "/en/four-great-novels", label: "The Four Great Classical Novels" },
        { href: "/en/four-beauties", label: "The Four Beauties (including Diaochan)" },
      ]}
    >
      <NoteCard title="In short: the Romance of the Three Kingdoms, plus the games’ own inventions">
        Most of the characters and famous scenes come from the Ming novel Romance of the Three Kingdoms. Some feats are true to the official history, such as Zhang Liao at Hefei; others are weapons from later ages, such as the Green Dragon Crescent Blade, or original characters such as Xingcai.
      </NoteCard>

      <div style={{ marginTop: 28 }}>
        <Section title="The latest games (2026)" id="latest">
          <div className="flex flex-col gap-3">
            {LATEST.map((l) => <NoteCard key={l.title} title={`${l.title} — ${l.date}`}>{l.body}</NoteCard>)}
          </div>
        </Section>
      </div>

      <Section title="Every game in the series" id="series">
        <Paras items={["Years are for the first Japanese release. Western titles are numbered one higher, because the 1997 fighting game was released abroad as Dynasty Warriors. Most games also have “Xtreme Legends” expansions and strategy-flavored “Empires” editions."]} />
        <div style={{ marginTop: 12 }}><DataTable head={["Game", "Year", "Main platforms", "Main features"]} rows={SERIES} /></div>
        <div style={{ marginTop: 12 }}>
          <Paras items={["The same Musou formula spread to Samurai Warriors (2004–), set in Japan’s Sengoku period, and Warriors Orochi (2007–), in which officers from both series meet."]} />
        </div>
      </Section>

      <Section title="Popular officers: game and history" id="figures">
        <Paras items={["In the games they are all warriors who can take on a thousand, but the real people described in the official Records of the Three Kingdoms were a little different. Follow the links to read about them."]} />
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
                    {p?.href ? <Link href={p.href} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>{p.name}</Link> : <span style={{ color: COLORS.ink }}>{p?.name || f.en}</span>}
                  </div>
                  <div style={{ fontSize: 12.5, color: COLORS.gold, marginTop: 2 }}>In the games: {f.game}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 4 }}><span style={{ fontWeight: 700, color: COLORS.ink }}>In history: </span>{f.real}</p>
                  {p?.credit && <div style={{ fontSize: 10, color: COLORS.mist, marginTop: 4 }}>{p.credit}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Were the women warriors real?" id="women">
        <Paras items={["Dynasty Warriors features many women warriors, but very few women are recorded in the official history as having fought. Here they are divided into real people, real people whose names come from legend, and characters invented by fiction or the games."]} />
        <div className="flex flex-col gap-2" style={{ marginTop: 12 }}>
          {WOMEN.map((w) => (
            <div key={w.name} className="px-4 py-3" style={cardStyle}>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{w.name}</span>
                <span style={{ fontSize: 11, color: "#fff", backgroundColor: WOMEN_TYPE[w.type].color, padding: "1px 6px", fontWeight: 700 }}>{WOMEN_TYPE[w.type].label}</span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 4 }}>{w.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Did the Green Dragon Crescent Blade exist in the Three Kingdoms?" id="weapons">
        <Paras items={["The weapons that define the officers also mostly come from the Romance. The main weapons of the Three Kingdoms period were spears, ji halberds, ring-pommel swords (straight blades with a ring at the end of the hilt), bows and crossbows."]} />
        <div className="flex flex-col gap-3" style={{ marginTop: 12 }}>
          {WEAPONS.map((w) => <NoteCard key={w.name} title={w.name}>{w.note}</NoteCard>)}
        </div>
      </Section>

      <Section title="The famous battles in history" id="scenes">
        <DataTable head={["Battle", "In the games", "In history"]} rows={SCENES} />
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 12 }}>
          Where and how each battle was fought is covered in <Link href="/en/sanguo-battles" style={{ color: COLORS.vermilion }}>the Three Kingdoms battle map</Link>, and the differences between the kingdoms in <Link href="/en/sanguo-comparison" style={{ color: COLORS.vermilion }}>Wei, Wu and Shu compared</Link>.
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
