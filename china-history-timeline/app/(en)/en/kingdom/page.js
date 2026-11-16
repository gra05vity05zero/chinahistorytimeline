import Link from "next/link";
import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, Paras, DataTable, NoteCard, cardStyle, serif } from "@/components/en/EnFeature";

const title = "Kingdom (Manga) and Real History: Were the Characters Real?";
const description =
  "Hara Yasuhisa’s manga Kingdom compared with history: Xin (Li Xin), Ying Zheng, Wang Qi, Li Mu, Huan Yi, Wang Jian and the rest set against the Records of the Grand Historian; which real years the manga’s battles correspond to; what history says comes next; and the anime series and live-action films.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/kingdom", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/kingdom", image: { title: "Kingdom and Real History", subtitle: "Were the characters real?", seal: "秦" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const LEVEL = {
  real: { label: "Real", color: COLORS.jade },
  model: { label: "Based on a real figure", color: COLORS.gold },
  fiction: { label: "Fictional", color: COLORS.vermilion },
};

const CHARACTERS = [
  { name: "Xin (Li Xin)", level: "real",
    manga: "The hero: a war-orphan slave boy who sets out to become “the greatest general under heaven,” as he promised his friend Piao. He leads the Hishin Unit to victory after victory and rises to general.",
    history: "The Qin general Li Xin was real. The Records of the Grand Historian say he distinguished himself pursuing Crown Prince Dan of Yan in 226 BC, and in 225 BC attacked Chu with 200,000 men but was badly beaten by Xiang Yan. He later joined Wang Ben in conquering Yan and Qi. His slave origins and youthful exploits are not recorded and are the author’s invention. The great Western Han general Li Guang is said to have been his descendant." },
  { name: "Ying Zheng (King Zheng of Qin)", level: "real",
    manga: "The young king of Qin, enthroned at thirteen. Shaped by a harsh childhood as a hostage in Zhao, he resolves to unify China by force and create a world without war.",
    history: "The future First Emperor. Born in 259 BC in Handan, the Zhao capital, he became king of Qin at thirteen in 247 BC and unified the realm by destroying the six states in 221 BC. His ideal in the manga — “unite China and end war” — is invented: the historical First Emperor burdened his people with harsh laws and vast building projects after unification, and Qin collapsed soon after his death." },
  { name: "Wang Qi", level: "model",
    manga: "The last of the “Six Great Generals of Qin” from King Zhao’s reign. Defeated at the Battle of Bayou by the plans of Pang Nuan and Li Mu, he dies after entrusting his glaive to Xin.",
    history: "Modeled on the general Wang Yi (王齮), whose name appears in the Basic Annals of Qin Shi Huang. A single line records his death in 244 BC; his personality and death at Bayou are entirely invented. No “Six Great Generals” institution appears in the histories either." },
  { name: "Li Mu", level: "real",
    manga: "One of Zhao’s “Three Great Heavens” and its chancellor. A brilliant strategist and Qin’s greatest enemy, he even organizes a grand coalition against Qin.",
    history: "A real and celebrated Zhao general. He crushed the Xiongnu in the north and drove back Qin armies at Fei in 233 BC and Fanwu in 232 BC. But in 229 BC, falling for a Qin plot to sow discord, the king of Zhao had him killed, and Zhao fell the following year. His command of the coalition is a dramatic embellishment." },
  { name: "Huan Yi", level: "model",
    manga: "A Qin general who began as a bandit. Cruel but a master of unorthodox tactics, he wins at Kokuyou Hill, Pingyang and elsewhere, before being defeated and killed by Li Mu at Feixia.",
    history: "Modeled on the Qin general Huan Yi (桓齮), recorded as having killed 100,000 Zhao soldiers at Pingyang in 234 BC. Defeated by Li Mu the following year, he is said in the Records simply to have “fled,” and his end is unclear. One theory identifies him with Fan Wuji, who defected to Yan." },
  { name: "Wang Jian", level: "real",
    manga: "A masked, enigmatic great general. Suspected of the ambition to “become a king himself,” he still leads Qin’s armies in major campaigns such as the attack on Ye.",
    history: "The greatest hero of Qin’s wars of unification. He destroyed Zhao and, demanding an army of 600,000 for the invasion of Chu, defeated Xiang Yan. Before setting out he is said to have asked the king again and again for fields and mansions — to show he had no thoughts of rebellion. His royal ambition is a dramatic embellishment." },
  { name: "Meng Tian", level: "real",
    manga: "Heir of the noble Meng family and Xin’s and Wang Ben’s rival for advancement, leading the Gakuka Unit.",
    history: "His grandfather Meng Ao and father Meng Wu were also real Qin generals. After unification Meng Tian campaigned against the Xiongnu with 300,000 men and built the Great Wall. After the First Emperor’s death he was driven to suicide by the plotting of Zhao Gao and others. Legend also credits him with inventing the writing brush." },
  { name: "Wang Ben", level: "real",
    manga: "Wang Jian’s son, a proud master of the spear who leads the Gyokuhou Unit. He clashes with Xin, but the two come to respect each other.",
    history: "A real general who did great service in the later wars of unification. In 225 BC he diverted the Yellow River to flood Daliang, the Wei capital, and destroyed Wei; later he subdued Yan and Dai, and finally Qi." },
  { name: "Qiang Lei (Kyou Kai)", level: "model",
    manga: "A girl from the assassin clan of Shiyuu who fights with a sword-dance technique and supports Xin as vice-captain of the Hishin Unit.",
    history: "The Records mention only that in 229 BC Qiang Lei attacked Zhao with Wang Jian. Because the record gives no gender, the author has said, Qiang Lei was drawn as a woman. The assassin-clan background is invented." },
  { name: "Lord Changping", level: "real",
    manga: "Commander-in-chief of the Qin army. He switches from Lü Buwei’s faction to Zheng’s and plans the wars of unification. He has royal Chu blood.",
    history: "A prince of Chu who helped suppress Lao Ai’s revolt in Qin. He later returned to Chu, was set up as its king by Xiang Yan to resist Qin, and is said to have died in battle in 223 BC. Nothing records him as Qin’s chief strategist." },
  { name: "Lü Buwei", level: "real",
    manga: "Chancellor of Qin, who uses his vast wealth and connections to vie with Zheng for power.",
    history: "A real man who rose from great merchant to chancellor of Qin. He put the hostage prince Zichu (Zheng’s father) on the throne and gathered scholars to compile the Annals of Lü Buwei. Implicated in Lao Ai’s revolt, he fell from power and poisoned himself in 235 BC. The Records even report a claim that he was Zheng’s real father." },
  { name: "Chengjiao", level: "real",
    manga: "Zheng’s half-brother. At the start of the story he rebels to seize the throne, but later reconciles with Zheng and dies at Tunliu.",
    history: "Real, as Lord Chang’an, Chengjiao. He is recorded as having rebelled in 239 BC at Tunliu, on his way to attack Zhao, and died. The palace coup of the first volume is invented." },
  { name: "Pang Nuan", level: "model",
    manga: "Zhao’s “God of War,” one of its Three Great Heavens — an overwhelming warrior who kills Wang Qi and Biao Gong.",
    history: "A real Zhao general who defeated Ju Xin of Yan in 242 BC and attacked Zui in Qin with the coalition of 241 BC. He is also said to have written works on strategy, and was more of a strategist and debater. The “God of War” persona is invented." },
  { name: "Lian Po", level: "real",
    manga: "Once one of Zhao’s Three Great Heavens, he defects to Wei and fights Qin at Shanyang.",
    history: "The great Zhao general famous for his “friendship unto death” with Lin Xiangru. Out of favor with the king of Zhao, he went to Wei and then to Chu, where he died. There is no record of him fighting Qin at Shanyang." },
  { name: "Yang Duanhe", level: "model",
    manga: "The beautiful queen of the mountain tribes, who allies with Zheng and fights alongside Qin, as at Ye.",
    history: "A real Qin general whose name appears in the attacks on Ye (236 BC) and Handan (229 BC). Making Yang Duanhe a woman and queen of the mountain tribes is invented." },
  { name: "Piao, Diao (Ten) and Zi Xia", level: "fiction",
    manga: "Xin’s friend Piao, who dies as Zheng’s body double; Diao, the mountain-tribe girl who becomes the Hishin Unit’s strategist; and Zi Xia, the black-market trader who smuggled the boy Zheng out of Zhao.",
    history: "None of them appears in the histories: all are the author’s own creations, devised above all to flesh out the little-recorded youth of Li Xin." },
];

const BATTLES = [
  ["c. 245 BC", "Battle of the Dakan Plains", "Vols. 5–7", "An invented battle based on Biao Gong’s attack on Juan in Wei (245 BC)."],
  ["244 BC", "Battle of Bayou", "Vols. 9–16", "The year Wang Yi died. The battle at Bayou is invented."],
  ["242 BC", "Conquest of Shanyang", "Vols. 17–23", "Meng Ao attacked Wei, took twenty towns and set up Dong Commandery. As in history."],
  ["241 BC", "The coalition (Hangu Pass and Zui)", "Vols. 25–33", "Chu, Zhao, Wei, Han and others joined to attack Qin, and Pang Nuan advanced on Zui. As in history."],
  ["239 BC", "Tunliu and Chengjiao’s revolt", "Vols. 34–35", "Chengjiao rebelled at Tunliu and died. As in history."],
  ["238 BC", "The capping ceremony and Lao Ai’s revolt", "Vols. 37–40", "In the year of Zheng’s coming-of-age ceremony, the queen dowager’s favorite Lao Ai rebelled and was crushed. As in history."],
  ["236 BC", "The conquest of Ye (Zhuhai Plain)", "Vols. 46–59", "Wang Jian, Huan Yi and Yang Duanhe took Ye and other Zhao cities. Broadly as in history."],
  ["234 BC", "Battles of Pingyang and Wucheng", "Vols. 62–64", "Huan Yi defeated a Zhao army and killed 100,000. As in history."],
  ["233 BC", "Battle of Feixia (Yi’an)", "Vols. 65–69", "Li Mu defeated Huan Yi. As in history."],
  ["232 BC", "Battle of Fanwu", "Vols. 70–72", "Li Mu again drove back the Qin army. As in history."],
  ["230 BC", "The fall of Han", "Vol. 73 on", "Neishi Teng captured King An of Han, and Han became the first of the six states to fall. As in history."],
];

const AHEAD = [
  ["229 BC", "Li Mu of Zhao is killed by his own king, the victim of a Qin plot to sow discord"],
  ["228 BC", "Wang Jian takes Handan, and Zhao falls"],
  ["227 BC", "Jing Ke, the assassin sent by Crown Prince Dan of Yan, fails to kill Zheng"],
  ["225 BC", "Wei falls to Wang Ben’s flooding of Daliang. The same year, Li Xin is badly beaten by Chu"],
  ["223 BC", "Wang Jian destroys Chu; Lord Changping and Xiang Yan die in battle"],
  ["222 BC", "Wang Ben and Li Xin subdue Yan and Dai"],
  ["221 BC", "Qi surrenders and the realm is unified; Zheng takes the title “First Emperor”"],
];

const ANIME = [
  ["Season 1", "Jun 2012 – Feb 2013", "38", "Chengjiao’s revolt to the Battle of Bayou"],
  ["Season 2", "Jun 2013 – Mar 2014", "39", "Conquest of Shanyang to the start of the coalition"],
  ["Season 3", "Apr 2020 – Oct 2021", "26", "The coalition arc (Hangu Pass and Zui)"],
  ["Season 4", "Apr – Oct 2022", "26", "Chengjiao’s end, the conquest of Zhuyong and Lao Ai’s revolt"],
  ["Season 5", "Jan – Mar 2024", "13", "The Battle of Kokuyou Hill"],
  ["Season 6", "Oct – Dec 2025", "13", "The conquest of Ye (Zhuhai Plain)"],
];

const MOVIES = [
  { title: "Kingdom", year: "April 2019", body: "Xin meets Ying Zheng; Piao’s death; retaking the palace from Chengjiao’s revolt (manga vols. 1–5)." },
  { title: "Kingdom II: Far and Away", year: "July 2022", body: "Xin’s first battle, against Wei on the Dakan Plains. Qiang Lei makes her first appearance." },
  { title: "Kingdom III: The Flame of Destiny", year: "July 2023", body: "The story of Zi Xia, who saved the boy Zheng, and the start of the Battle of Bayou against Zhao." },
  { title: "Kingdom IV: Return of the Great General", year: "July 2024", body: "The end of the Battle of Bayou and Wang Qi’s death. With a box office of over ¥8 billion, it was the series’ biggest hit." },
  { title: "Kingdom: Tamashii no Kessen", year: "July 2026", body: "Three years after Bayou, the six states join forces to invade Qin in the coalition arc. Oguri Shun plays Li Mu." },
];

const FAQ = [
  { q: "Is Kingdom a true story?", a: "The broad course of Qin’s unification of China, and people such as Ying Zheng, Li Xin, Li Mu and Wang Jian, are historical, recorded in the Records of the Grand Historian. But the histories say very little, so most of the characters’ personalities, dialogue and the details of the battles are the author’s invention. There are original characters too, such as Piao and Diao." },
  { q: "Did the hero Xin really exist?", a: "Yes — he is the Qin general Li Xin, named in the pursuit of Crown Prince Dan of Yan, the attack on Chu and the conquest of Yan and Qi. But his origins as a slave and his exploits as a young man are not recorded and are invented." },
  { q: "When is Kingdom set?", a: "The story begins around 245 BC, shortly after Ying Zheng became king of Qin, in the last years of the Warring States period. The latest chapters have reached around the fall of Han in 230 BC, about ten years before unification in 221 BC." },
  { q: "What happens next, according to history?", a: "In Zhao, Li Mu is killed on the strength of slander, and Zhao falls in 228 BC. Wei, Chu, Yan and Qi follow, and Qin unifies the realm in 221 BC. Li Xin suffers a crushing defeat in the attack on Chu, but goes on fighting as a general to the very end of the wars of unification." },
];

export default function EnglishKingdomPage() {
  return (
    <FeaturePage
      title="Kingdom: The History Behind the Manga"
      jaPath="/kingdom"
      intro="Kingdom is a historical manga by Hara Yasuhisa, serialized in Weekly Young Jump since 2006. It is set in the 3rd century BC, at the end of China’s Warring States period: a slave boy, Xin, aims to become “the greatest general under heaven,” while the young king of Qin, Ying Zheng — the future First Emperor — aims to unify China, and the two rise together through an age of war. Most of the characters are real people named in Sima Qian’s Records of the Grand Historian, though often in no more than a few lines. This page introduces the series and compares its main characters and battles with history, along with the anime and live-action films."
      related={[
        { href: "/en/eras/zhanguo", label: "The Warring States period" },
        { href: "/en/qinshihuang", label: "Qin Shi Huang, the First Emperor" },
        { href: "/en/chunqiu-zhanguo-battles", label: "Spring and Autumn and Warring States battles" },
        { href: "/en/terracotta-army", label: "The Terracotta Army" },
      ]}
    >
      <Section title="What is Kingdom?">
        <Paras items={[
          "The story begins with two boys, Xin and Piao, raised as slaves in the Qin countryside. Piao, taken into the palace, dies as the body double of King Ying Zheng, and Xin meets Zheng, Piao’s double. After protecting Zheng from the revolt of his half-brother Chengjiao, Xin wins distinction on the battlefield and rises from commander of a hundred to commander of a thousand and on to general.",
          "Its great attractions are the battles of wits between generals of overpowering personality — Wang Qi, Li Mu, Huan Yi — and its thrilling depictions of armies hundreds of thousands strong. It won the Grand Prize of the 17th Tezuka Osamu Cultural Prize in 2013 and has sold more than 120 million copies. The story falls into a first part on the struggles within Qin and the “Conquest of the Six States” arc; as of October 2026 the latest volume is volume 80.",
        ]} />
      </Section>

      <Section title="Were the characters real? Manga and history compared" id="characters">
        <Paras items={["The main historical source is the Records of the Grand Historian. Each character is marked by how close the manga stays to the histories:"]} />
        <div className="flex flex-wrap gap-3" style={{ fontSize: 12.5, margin: "10px 0 16px" }}>
          {[["real", "a real person recorded in the histories"], ["model", "name or deeds have a historical model, but the character is largely invented"], ["fiction", "the author’s own creation"]].map(([k, t]) => (
            <span key={k}><span style={{ color: "#fff", backgroundColor: LEVEL[k].color, padding: "1px 6px", fontWeight: 700 }}>{LEVEL[k].label}</span> {t}</span>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {CHARACTERS.map((c) => (
            <div key={c.name} className="p-4" style={cardStyle}>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink }}>{c.name}</span>
                <span style={{ fontSize: 11, color: "#fff", backgroundColor: LEVEL[c.level].color, padding: "1px 6px", fontWeight: 700 }}>{LEVEL[c.level].label}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-2">
                <div><div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.gold }}>In the manga</div><p style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft }}>{c.manga}</p></div>
                <div><div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.jade }}>In history</div><p style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft }}>{c.history}</p></div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 12 }}>
          Zheng’s life is covered in <Link href="/en/qinshihuang" style={{ color: COLORS.vermilion }}>Qin Shi Huang, the First Emperor</Link>, and the people of the age in <Link href="/en/people#zhanguo" style={{ color: COLORS.vermilion }}>People of the Warring States</Link>.
        </p>
      </Section>

      <Section title="Which years are the manga’s battles?" id="battles">
        <Paras items={["The manga gives almost no dates, but its main battles can be matched with records such as the Basic Annals of Qin Shi Huang. Volume numbers are approximate."]} />
        <div style={{ marginTop: 12 }}><DataTable head={["Year", "Battle in the manga", "Volumes", "What the histories record"]} rows={BATTLES} /></div>
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 12 }}>
          The battles of the Warring States, including past battles mentioned in the story such as Changping, are mapped in <Link href="/en/chunqiu-zhanguo-battles" style={{ color: COLORS.vermilion }}>the Spring and Autumn and Warring States battle map</Link>.
        </p>
      </Section>

      <Section title="What history says comes next (spoilers)" id="ahead">
        <Paras items={["Following the history shows where the story is heading. Skip this section if you don’t want to know."]} />
        <div style={{ marginTop: 12 }}><DataTable head={["Year", "Event"]} rows={AHEAD} /></div>
        <div style={{ marginTop: 12 }}>
          <Paras items={["Just eleven years after unification, in 210 BC, the First Emperor died of illness while on tour. Meng Tian was forced to kill himself by Zhao Gao’s plotting, and Qin fell in 206 BC. Xiang Yu, who brought Qin down, was the grandson of Xiang Yan — the Chu general who had defeated Li Xin."]} />
        </div>
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 12 }}>
          For the struggle between Xiang Yu and Liu Bang that followed, see <Link href="/en/chuhan-battles" style={{ color: COLORS.vermilion }}>the Chu–Han battle map</Link>.
        </p>
      </Section>

      <Section title="The Kingdom anime" id="anime">
        <Paras items={["The TV anime has aired on NHK, with six seasons made by 2025, animated by Pierrot (with Studio Signpost from season 3). Xin is voiced by Morita Masakazu and Ying Zheng by Fukuyama Jun. A sequel to season 6 has been announced."]} />
        <div style={{ marginTop: 12 }}><DataTable head={["Season", "Aired", "Episodes", "Main story"]} rows={ANIME} /></div>
      </Section>

      <Section title="The live-action films" id="movies">
        <Paras items={["Directed by Sato Shinsuke, with Yamazaki Kento as Xin and Yoshizawa Ryo as Ying Zheng, the live-action series features a star cast — Osawa Takao as Wang Qi, Nagasawa Masami as Yang Duanhe — and huge battle scenes shot on location in China. Each of the five films has earned more than ¥5 billion at the box office."]} />
        <div className="flex flex-col gap-3" style={{ marginTop: 12 }}>
          {MOVIES.map((m, i) => <NoteCard key={m.title} title={`${i + 1}. ${m.title} (${m.year})`}>{m.body}</NoteCard>)}
        </div>
      </Section>

      <Section title="Common questions about Kingdom" id="faq">
        <div className="flex flex-col gap-3">
          {FAQ.map((f) => <NoteCard key={f.q} title={f.q}>{f.a}</NoteCard>)}
        </div>
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 12 }}>
          The Records of the Grand Historian itself is introduced in <Link href="/en/history-books" style={{ color: COLORS.vermilion }}>The Great Histories of China</Link>.
        </p>
      </Section>
    </FeaturePage>
  );
}
