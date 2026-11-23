import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, englishPersonPath } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, ItemCard, cardStyle, serif } from "@/components/en/EnFeature";

const title = "The Worst Emperors of China: Ranking the Tyrants and Incompetent Rulers";
const description =
  "A ranking of China’s most notorious tyrants and incompetent rulers — King Zhou of Shang and his “lake of wine,” Emperor Yang of Sui, Emperor Ling who sold offices, the artist-emperor Huizong and the Wanli Emperor who stopped holding court — what they did, and how historians reassess them today.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/tyrants", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/tyrants", image: { title: "Tyrants and Incompetent Rulers of China", seal: "暴" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const slug = (eraId, key) => ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(key))?.slug || null;
// English person page, if the Japanese person (by ja slug) has one
const person = (eraId, jaSlug, label) => {
  const href = englishPersonPath(eraId, jaSlug);
  return href ? { href, label } : null;
};

// Same order as the Japanese page (/tyrants): a rough guide based on the harm done and the ruler's notoriety in the histories
const TYRANTS = [
  { id: "zhouwang", name: "King Zhou (Di Xin)", dynasty: "Shang", period: "11th c. BC", key: "The “lake of wine and forest of meat” and the burning pillar — the archetypal tyrant",
    body: "The last king of the Shang. According to the Records of the Grand Historian he was eloquent and strong enough to fight wild beasts bare-handed, but he doted on his favorite Daji and neglected government. The phrase “a lake of wine and a forest of meat” comes from his feasts, where wine filled a pond and meat hung like trees in a forest. Ministers who remonstrated were made to walk a greased bronze pillar laid over burning coals, and his uncle Bi Gan had his chest cut open because the king wanted to see whether a sage’s heart really had seven openings. Around 1046 BC he was defeated by King Wu of Zhou at the Battle of Muye, set fire to his Deer Terrace and died in the flames.",
    fact: "It has long been suspected that the Zhou, who overthrew him, exaggerated his crimes to justify their conquest. Even Confucius’ disciple Zigong said that Zhou’s wickedness “was not as extreme as they say” (Analects). Exhausting campaigns against the peoples to the east probably did more to bring down the Shang.",
    event: slug("shang", "牧野の戦い"), era: "shang", person: person("shang", "紂王", "King Zhou") },
  { id: "yangdi", name: "Emperor Yang (Yang Guang)", dynasty: "Sui", period: "r. 604–618", key: "Wore out his people with the Grand Canal and three wars on Goguryeo",
    body: "The second Sui emperor. He schemed his elder brother, Crown Prince Yang Yong, out of the succession, and some accounts say he murdered his father, Emperor Wen. On taking the throne he conscripted millions of people to build a new capital at Luoyang and dig the Grand Canal, then toured the finished canal in magnificent dragon boats. From 612 he sent huge armies against the Korean kingdom of Goguryeo three times, and failed each time. Unable to bear the burden, people rose in rebellion across the empire, while Emperor Yang shut himself up in Jiangdu (Yangzhou) and drank. In 618 he was killed by the guards commander Yuwen Huaji, and the Sui collapsed just 38 years after unifying China.",
    fact: "“Yang” is an insulting posthumous name meaning one who defied Heaven and oppressed the people, given by the Tang who replaced him. Yet the Grand Canal linked north and south China for more than a thousand years, and his work on the examination system passed to the Tang, so some call him an emperor too far ahead of his time. He was also the emperor who received Japan’s letter from “the Son of Heaven where the sun rises” — and was not pleased.",
    event: slug("sui", "大運河"), era: "sui", person: person("sui", "隋煬帝", "Emperor Yang") },
  { id: "shihu", name: "Shi Hu", dynasty: "Later Zhao (Sixteen Kingdoms)", period: "r. 334–349", key: "Burned his own son alive — the cruelest ruler of the Sixteen Kingdoms",
    body: "The third ruler of the Later Zhao, founded by Shi Le of the Jie people. After Shi Le died he deposed Shi Le’s son and took power himself. He built one splendid palace after another at Ye and Luoyang, each time conscripting hundreds of thousands of people; he tore countless families apart to gather beautiful women from across the realm and killed anyone who resisted. In 348, when his crown prince Shi Xuan murdered a brother, Shi Hu had him blinded, mutilated and burned alive, and executed his wife and children too. When Shi Hu died the next year his sons fought one another, and the Later Zhao fell within two years.",
    fact: "His deeds were recorded by histories written on the side of the Chinese dynasties that opposed the Later Zhao (the Book of Jin), which tend to paint non-Chinese rulers badly. Even so, the records of his cruelty are specific and numerous, and his reputation as a tyrant is hard to dispute.",
    era: "sixteenkingdoms" },
  { id: "huhai", name: "Huhai (the Second Emperor)", dynasty: "Qin", period: "r. 210–207 BC", key: "Killed his brothers and sisters and wrecked Qin in three years",
    body: "The youngest son of the First Emperor. When the First Emperor died on tour, Zhao Gao and Li Si rewrote his will, forced the rightful heir Fusu to kill himself and made Huhai emperor. Fearing for his position, Huhai executed twelve brothers and ten sisters and killed one veteran minister after another. Work on the Epang Palace and the First Emperor’s tomb went on, the burden on the people grew heavier still, and in 209 BC Chen Sheng and Wu Guang rose in revolt. He left government entirely to Zhao Gao — when Zhao Gao presented a deer and called it a horse, the emperor could not get at the truth — and in the end Zhao Gao drove him to suicide.",
    fact: "Much of the cruelty is attributed to Zhao Gao’s advice, so Huhai is both a tyrant and a manipulated weakling. Bamboo slips found in 2013 at Tuzishan in Yiyang include an edict in which Huhai proclaims that he took the throne by the First Emperor’s will, and some scholars now doubt the usurpation story in the Records of the Grand Historian.",
    event: slug("qin", "陳勝"), era: "qin" },
  { id: "jie", name: "Jie", dynasty: "Xia", period: "traditionally 16th c. BC", key: "The original tyrant, paired with King Zhou as “Jie and Zhou”",
    body: "The last king of the Xia, traditionally China’s first dynasty. He is said to have doted on the beauty Moxi, lived in boundless luxury, built palaces that crushed his people and killed the loyal minister Guan Longfeng for remonstrating. He boasted that he would last as long as the sun, and the people cursed: “O sun, when will you perish? We would gladly perish with you.” Defeated by Tang of Shang at the Battle of Mingtiao, he was exiled to Nanchao. Ever since, “Jie and Zhou” has meant a tyrant, and their overthrow became the model for the idea that a king who loses virtue may rightfully be deposed.",
    fact: "Since the Xia dynasty itself has not been firmly established, many scholars think Jie’s crimes were invented later on the pattern of King Zhou’s. The stories are suspiciously alike — Moxi and Daji, a lake of wine, and so on.",
    event: slug("xia", "鳴条の戦い"), era: "xia", person: person("xia", "桀", "Jie") },
];

const WEAK = [
  { id: "lingdi", name: "Emperor Ling (Liu Hong)", dynasty: "Eastern Han", period: "r. 168–189", key: "Put official posts up for sale and brought on the Yellow Turban Rebellion",
    body: "Enthroned at twelve, he handed government over to the eunuchs Zhang Rang, Zhao Zhong and the rest of the “Ten Attendants,” whom he called “my father, my mother.” Citing the court’s money troubles, he set up an office in the Western Garden that sold official posts at fixed prices — even the highest ministries could be bought. Officials who had paid for their posts squeezed the people to get their money back, and in 184 Zhang Jue of the Way of Great Peace launched the Yellow Turban Rebellion. Inside the palace the emperor set up a market in the harem and played at being a merchant, and amused himself driving carts pulled by donkeys. After his death the capital fell to Dong Zhuo, and the turmoil of the Three Kingdoms began.",
    fact: "Zhuge Liang’s famous memorial to the throne recalls how the late Liu Bei would sigh with regret whenever they discussed the reigns of Emperors Huan and Ling — he was seen as the ruler who ruined the Han even in his own century. The money raised by selling offices is said to have gone into his private treasury.",
    event: slug("easternhan", "黄巾の乱"), era: "easternhan" },
  { id: "wanli", name: "The Wanli Emperor (Shenzong)", dynasty: "Ming", period: "r. 1572–1620", key: "Stayed away from court for some thirty years",
    body: "He came to the throne at ten, and for the first decade the reforms of Grand Secretary Zhang Juzheng restored Ming finances. But after Zhang died in 1582, the emperor — reacting against his strict teacher — confiscated his property and gradually withdrew from government. When officials opposed his wish to make the son of his favorite, Consort Zheng, crown prince (the “root of the state” dispute), he stopped attending court audiences for some thirty years and left vacant posts unfilled. Meanwhile he sent eunuchs around the country to collect mining and commercial taxes, and poured vast sums into his own tomb, the Dingling.",
    fact: "The History of Ming says that “the fall of the Ming really began under Shenzong.” Yet the “Three Great Campaigns of Wanli,” including the defense of Korea against Toyotomi Hideyoshi’s invasions, all ended in victory — he still made decisions on vital military matters. The Dingling has been excavated and is open to visitors.",
    era: "ming" },
  { id: "huizong", name: "Emperor Huizong", dynasty: "Northern Song", period: "r. 1100–1125", key: "A genius artist who lost his empire and ended up a captive",
    body: "As a calligrapher and painter he stands out among all emperors: he created the slender, sharp “Slender Gold” script and left masterpieces of bird-and-flower painting. But he left government to ministers such as Cai Jing, and his “Flower and Rock Network,” which hauled rare stones and plants from the south to decorate his gardens, crushed the people and provoked the Fang La Rebellion in 1120. In the north he allied with the rising Jurchen Jin to crush the Liao between them (the Alliance Conducted at Sea), but the Jin saw how weak the Song army was and attacked the Song instead. He hastily abdicated in favor of his son Qinzong, but in 1127 the capital Kaifeng fell and father and son were carried off north together (the Jingkang Incident). Huizong died a prisoner at Wuguocheng.",
    fact: "He is the classic case of “a failure as an emperor, a master as an artist.” The novel Water Margin is set in his reign, and its villain Gao Qiu is modeled on a real man whom Huizong promoted for his skill at kickball.",
    event: slug("northernsong", "靖康の変"), era: "northernsong", person: person("northernsong", "徽宗", "Emperor Huizong") },
  { id: "huidi", name: "Emperor Hui (Sima Zhong)", dynasty: "Western Jin", period: "r. 290–306", key: "“Why don’t they eat meat porridge?” — he could not stop the War of the Eight Princes",
    body: "The son of Sima Yan (Emperor Wu), founder of the Western Jin. He was said from childhood to be mentally impaired, and ministers objected to him as heir, but his father kept him as crown prince. Told that people were starving to death, he is said to have asked, “If they have no grain, why don’t they eat meat porridge?” Once he was emperor, Empress Jia Nanfeng seized power and killed her rivals, setting off the War of the Eight Princes (291–306), in which princes of the imperial clan fought for control of the emperor’s person. Through it all he was a puppet, deposed and dragged from place to place, and in 306 he may have been poisoned. The Western Jin fell about ten years after his death.",
    fact: "Not a malicious ruler — the real blame lies with the father and court who put him on the throne. When the loyal minister Ji Shao died shielding him amid flying arrows and his blood spattered the emperor’s robe, Emperor Hui is said to have told his attendants: “Do not wash it. This is the blood of Attendant Ji.”",
    event: slug("westernjin", "八王の乱"), era: "westernjin" },
  { id: "youwang", name: "King You", dynasty: "Western Zhou", period: "r. 781–771 BC", key: "Lit false beacon fires to make Bao Si laugh",
    body: "The last king of the Western Zhou. Infatuated with his favorite Bao Si, he deposed his queen, Lady Shen, and the crown prince, and set up Bao Si and her son in their place. According to the Records of the Grand Historian, Bao Si rarely smiled, but she burst out laughing when the beacon fires that warned of invasion were lit and the lords came rushing in a panic. Delighted, the king lit them again and again, until the lords stopped believing them. In 771 BC, when the deposed queen’s father, the Marquis of Shen, attacked together with the Quanrong, the beacons brought no one, and King You was killed at the foot of Mount Li. The capital moved east to Luoyi, and the Spring and Autumn period began.",
    fact: "The beacon story looks like a “boy who cried wolf” tale. The Xinian, a Warring States text on bamboo slips published in 2011 (the Tsinghua slips), does not mention it, and some point out that a beacon system did not yet exist at the time.",
    event: slug("westernzhou", "犬戎"), era: "westernzhou", person: person("westernzhou", "幽王", "King You") },
];

const REEVAL = [
  { id: "liushan", name: "Liu Shan", dynasty: "Shu Han", period: "r. 223–263", key: "“I’m happy here and don’t miss Shu”",
    body: "The son of Liu Bei, also known by his childhood name A Dou. In 263, when the Wei army closed in on Chengdu, he surrendered without a fight and was moved to Luoyang. At a banquet given by Sima Zhao, when the music of Shu was played and his former ministers wept, Liu Shan alone laughed and said, “I’m happy here and don’t think of Shu.” In China, “an A Dou who can’t be propped up” is still a saying for a hopeless case.",
    fact: "Yet his 41-year reign was the longest of any Three Kingdoms emperor. He left government to Zhuge Liang without interfering, and kept the state going for some thirty years after Zhuge Liang’s death. His surrender can be seen as sparing the people of Chengdu from war, and his “happy here” reply as playing the fool so that Sima Zhao would not see him as a threat.",
    event: slug("sanguo", "蜀漢の滅亡"), era: "sanguo", person: person("sanguo", "劉禅", "Liu Shan") },
];

const FAQ = [
  { q: "What is the difference between a tyrant and an incompetent ruler?", a: "A tyrant actively made the people suffer through cruel punishments, reckless building projects or wars. An incompetent (or “benighted”) ruler, lacking interest or ability, handed the state to eunuchs or consort clans and so let it decline. King Zhou of Shang is the model tyrant; Emperor Ling of the Eastern Han the model incompetent." },
  { q: "Who was the worst tyrant in Chinese history?", a: "Traditionally Jie of Xia and King Zhou of Shang, paired as “Jie and Zhou,” are the very byword for tyranny. Judged by the actual harm done, many would name Emperor Yang of Sui, who conscripted millions for the Grand Canal and three wars on Goguryeo and destroyed his dynasty in 38 years." },
  { q: "Was the First Emperor a tyrant?", a: "Because he burned books, is said to have buried scholars alive, and crushed the people with the Great Wall, the Epang Palace and his tomb, Confucian tradition long called him a tyrant. But his achievement in unifying China for the first time and standardizing its script, coinage and measures was enormous, and today he is seen as more than “a tyrant.” This page leaves him out of the ranking, judging that his achievements outweigh his faults." },
  { q: "How true are these stories?", a: "In China each new dynasty wrote the history of the one before. To justify having overthrown it, the new rulers tended to paint its last ruler especially black. For many stories — King Zhou’s lake of wine, King You’s beacon fires — later bamboo-slip texts and archaeology suggest exaggeration or invention." },
  { q: "Who are the great emperors, the opposite of tyrants?", a: "Those most often named are Taizong of Tang (Li Shimin), famed for the “Reign of Zhenguan”; Emperors Wen and Jing of the Han, who brought the dynasty to its height; and the Kangxi Emperor, who ruled the Qing for 61 years. The Essentials of Government of the Zhenguan Era, a record of Taizong’s conversations with his ministers, was read in Japan too as a textbook for rulers." },
];

const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

function RankCard({ e, rank }) {
  return (
    <div id={e.id} style={{ ...cardStyle, padding: "14px 16px", scrollMarginTop: 16 }}>
      <div className="flex items-baseline justify-between gap-3 flex-wrap">
        <h3 style={{ ...serif, fontSize: 18, fontWeight: 700, color: COLORS.ink }}>
          {rank && <span style={{ color: rank === 1 ? COLORS.vermilion : COLORS.gold, fontSize: 13, marginRight: 8 }}>No. {rank}</span>}
          {e.name}
        </h3>
        <span style={{ fontSize: 12, color: COLORS.gold, ...serif }}>{e.dynasty} · {e.period}</span>
      </div>
      <p style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>{e.key}</p>
      <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>{e.body}</p>
      <div style={{ marginTop: 10, padding: "8px 10px", backgroundColor: "#F3ECD9", fontSize: 13, lineHeight: 1.75, color: COLORS.inkSoft }}>
        <span style={{ fontWeight: 700, color: COLORS.gold, marginRight: 6 }}>Reassessment</span>
        {e.fact}
      </div>
      <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ marginTop: 10, fontSize: 13 }}>
        <Link href={e.event ? `/en/events/${e.event}` : `/en/eras/${e.era}`} style={linkStyle}>{e.event ? "Read the related event" : "About this era"} →</Link>
        {e.person && <Link href={e.person.href} style={linkStyle}>{e.person.label} →</Link>}
      </div>
    </div>
  );
}

function JumpGrid({ list, label }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.gold, marginBottom: 4 }}>{label}</div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {list.map((e, i) => (
          <a key={e.id} href={`#${e.id}`} className="text-center hover:opacity-90" style={{ ...cardStyle, padding: "8px 6px" }}>
            <div style={{ fontSize: 11, color: COLORS.gold }}>No. {i + 1}</div>
            <div style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.ink, marginTop: 2 }}>{e.name.replace(/ \(.*$/, "")}</div>
            <div style={{ fontSize: 11, color: COLORS.inkSoft, marginTop: 2 }}>{e.dynasty.replace(/ \(.*$/, "")}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function EnglishTyrantsPage() {
  return (
    <FeaturePage
      title="Tyrants and Incompetent Rulers of China"
      jaPath="/tyrants"
      intro="The model tyrants of Chinese history are King Zhou of Shang, of the “lake of wine and forest of meat,” and Emperor Yang of Sui, whose Grand Canal and wars on Goguryeo destroyed his dynasty. The model incompetents are Emperor Ling of the Eastern Han, who sold official posts and brought on the Yellow Turban Rebellion, and the Wanli Emperor of the Ming, who stayed away from court for some thirty years. This page ranks five tyrants who made their people suffer and five incompetent rulers who let their states decline, with what each did and how recent research reassesses them."
      related={[
        { href: "/en/emperors", label: "Emperors of China" },
        { href: "/en/eunuchs", label: "Eunuchs in Chinese history" },
        { href: "/en/qin-fall", label: "Why Qin fell" },
        { href: "/en/women-rulers", label: "Women who ruled China" },
      ]}
    >
      <div style={{ ...cardStyle, padding: "12px 14px", marginBottom: 12, fontSize: 13.5, lineHeight: 1.8, color: COLORS.inkSoft }}>
        <div><strong style={{ color: COLORS.gold }}>Tyrant (暴君):</strong> a ruler who made the people suffer through cruel punishments, forced labor and heavy taxes.</div>
        <div><strong style={{ color: COLORS.gold }}>Incompetent ruler (暗君):</strong> a ruler who neglected government or left it to favorites, letting the state decline.</div>
        <div style={{ marginTop: 6, fontSize: 12.5 }}>The ranking is this site’s rough guide, based on the harm each ruler did and how notorious he is in the histories. Bear in mind that their misdeeds were usually recorded by those who overthrew them.</div>
      </div>

      <JumpGrid list={TYRANTS} label="Tyrants" />
      <JumpGrid list={WEAK} label="Incompetent rulers" />

      <Section title="Top 5 tyrants">
        <div className="flex flex-col gap-4">
          {TYRANTS.map((e, i) => <RankCard key={e.id} e={e} rank={i + 1} />)}
        </div>
      </Section>

      <Section title="Top 5 incompetent rulers">
        <div className="flex flex-col gap-4">
          {WEAK.map((e, i) => <RankCard key={e.id} e={e} rank={i + 1} />)}
        </div>
      </Section>

      <Section title="Bonus: was he really so hopeless?">
        <div className="flex flex-col gap-4">
          {REEVAL.map((e) => <RankCard key={e.id} e={e} />)}
        </div>
      </Section>

      <Section title="Frequently asked questions">
        <div className="flex flex-col gap-3">
          {FAQ.map((f) => (
            <ItemCard key={f.q} title={f.q}>{f.a}</ItemCard>
          ))}
        </div>
      </Section>
    </FeaturePage>
  );
}
