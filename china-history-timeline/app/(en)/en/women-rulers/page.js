import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { isLive } from "@/components/en/EnFeature";
import { FeaturePage, Section, ItemCard, cardStyle, serif } from "@/components/en/EnFeature";

const title = "Women Who Ruled China: Wu Zetian, Empress Lü, Empress Dowager Cixi and More";
const description =
  "Wu Zetian, China’s only woman emperor, and the empresses and empresses dowager who ran the state — Empress Lü, Deng Sui, Empress Dowager Feng, Empress Xiao of Liao, Cixi and others — in order, with what “ruling from behind the curtain” meant and whether they were really villains.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/women-rulers", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/women-rulers", image: { title: "Women Who Ruled China", seal: "后" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const slug = (eraId, key) => ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(key))?.slug || null;

const WOMEN = [
  { id: "lvhou", name: "Empress Lü (Lü Zhi)", period: "Western Han (2nd c. BC)", badge: "Notorious", key: "Ran the Han for fifteen years after the death of her husband Liu Bang",
    body: "Empress of Liu Bang, founder of the Han. When he died she set up her son Emperor Hui and held real power as empress dowager. The story that she cut off the limbs of Lady Qi, Liu Bang’s beloved consort, called her a “human swine” and poisoned her son is notorious; Emperor Hui, seeing it, is said to have been so shaken that he gave up on government. After Emperor Hui’s death she set up child emperors and governed herself from the court, making members of the Lü clan kings one after another. When she died in 180 BC the senior ministers wiped out the Lü clan and brought in Emperor Wen.",
    fact: "Sima Qian gave Empress Lü her own “Basic Annals” in the Records of the Grand Historian, the same status as an emperor, and judged that whatever the cruelty in the palace, the people of the realm, freed from war, lived in peace.",
    event: slug("westernhan", "呂后専権"), era: "westernhan", person: { href: "/en/people/westernhan/empress-lu", label: "Empress Lü" } },
  { id: "dengsui", name: "Deng Sui (Empress Hexi)", period: "Eastern Han (early 2nd c.)", key: "The “wise empress dowager” who held the state together for sixteen years",
    body: "Empress of Emperor He of the Eastern Han. When he died in 105 she set up the infant Emperor Shang, just over 100 days old, and then the thirteen-year-old Emperor An, governing as empress dowager for sixteen years until her death in 121. In hard times of floods, droughts and Qiang revolts, she cut palace luxuries to pay for relief and promoted learning. It was Deng Sui who advanced the eunuch Cai Lun, who improved paper.",
    fact: "Because the Eastern Han had a run of child emperors, many other empresses dowager governed too, and the struggle between their kin (the consort clans) and the eunuchs weakened the dynasty.",
    era: "easternhan", extra: { href: "/en/eunuchs", label: "Eunuchs in Chinese history" } },
  { id: "jianafeng", name: "Jia Nanfeng", period: "Western Jin (late 3rd c.)", key: "The empress whose power struggles ignited the War of the Eight Princes",
    body: "Empress of Emperor Hui of the Western Jin. Her husband is said to have been too dull to govern, and in 291 she used imperial princes to destroy the Yang clan of the empress dowager and seized power. She went on to bring down princes and ministers one after another and even killed the crown prince, who was not her son, until in 300 the imperial prince Sima Lun had her killed. From here the princes’ killing of one another began in earnest (the War of the Eight Princes), and the Western Jin headed toward its fall.",
    event: slug("westernjin", "八王の乱"), era: "westernjin", person: { href: "/en/people/westernjin/jia-nanfeng", label: "Jia Nanfeng" } },
  { id: "fengtaihou", name: "Empress Dowager Feng (Empress Wenming)", period: "Northern Wei (late 5th c.)", key: "Raised Emperor Xiaowen and drove the Northern Wei’s great reforms",
    body: "Empress of Emperor Wencheng of the Northern Wei. After her husband’s death she took part in government as empress dowager, and when her grandson Emperor Xiaowen took the throne as a child she held real power until her death in 490. She created institutions handed down even to the Sui and Tang, such as the equal-field system (485), under which the state allotted land to the people, and the three-elders system organizing the villages. Emperor Xiaowen’s policy of sinicization was built on his grandmother’s reforms.",
    event: slug("nanbei", "北魏の漢化政策"), era: "nanbei", person: { href: "/en/people/nanbei/emperor-xiaowen", label: "Emperor Xiaowen" } },
  { id: "dugu", name: "Empress Dugu", period: "Sui (late 6th c.)", key: "Called one of the “Two Sages” alongside her husband",
    body: "Empress of Emperor Wen (Yang Jian), founder of the Sui. She rode to the palace in the same carriage as the emperor when he attended court and was consulted on government, so the two were called the “Two Sages.” She was also known for not allowing him other consorts; disliking the crown prince Yang Yong for doting on his concubines, she backed the second son Yang Guang, who behaved modestly, as heir. That Yang Guang was Emperor Yang, who would bring the Sui to ruin.",
    event: slug("sui", "隋の建国"), era: "sui", person: { href: "/en/people/sui/emperor-yang-of-sui", label: "Emperor Yang of Sui" } },
  { id: "wuzetian", name: "Wu Zetian (Empress Wu)", period: "Tang (7th–8th c.)", badge: "Only woman emperor", key: "The only woman in Chinese history to take the throne as emperor",
    body: "She entered Taizong’s harem as a cairen and became empress of the next emperor, Gaozong. She governed in place of the sickly Gaozong, and after his death deposed her sons as emperors one after another; in 690 she renamed the dynasty “Zhou” and took the throne herself. She encouraged informers and used cruel officials to purge opponents, yet she also chose talent through the examinations regardless of family and nurtured great ministers such as Di Renjie. In 705, past eighty, she was forced to abdicate and the Tang was restored.",
    fact: "At the Qianling Mausoleum, where she is buried beside her husband Gaozong, stands the “Wordless Stele,” on which no record of her achievements was ever carved — perhaps, it is said, to leave judgment to later ages.",
    event: slug("tang", "武則天"), era: "tang", person: { href: "/en/people/tang/wu-zetian", label: "Wu Zetian" }, extra: { href: "/en/harem-ranks", label: "From cairen to empress: harem ranks" } },
  { id: "weihou", name: "Empress Wei and Princess Taiping", period: "Tang (early 8th c.)", key: "Women who aimed to be the second woman emperor",
    body: "After Wu Zetian’s abdication, Empress Wei, wife of her son Zhongzong, imitated Wu and meddled in government, and her daughter Princess Anle asked her father to make her “Crown Princess.” When Zhongzong died suddenly in 710, rumor said Empress Wei had poisoned him. In response, Wu Zetian’s daughter Princess Taiping and her nephew Li Longji raised troops and killed Empress Wei. But then Princess Taiping fought for power with Li Longji, now enthroned as Xuanzong, and in 713 was driven to suicide.",
    fact: "The age of Wu Zetian and Empress Wei was later called “the disaster of Wu and Wei.” Under Xuanzong, who ended the turmoil, the Tang entered its golden age, the “Reign of Kaiyuan.”",
    era: "tang" },
  { id: "liue", name: "Liu E (Empress Zhangxian)", period: "Northern Song (early 11th c.)", key: "Wore the emperor’s robes, but never became emperor",
    body: "Empress of Zhenzong of the Northern Song. She rose to empress from humble origins — some say she had been an entertainer. When Zhenzong died in 1022, she governed for eleven years in place of the young Renzong. Some urged her to take the throne like Wu Zetian, but she refused, saying she could not betray the ancestors. Late in life, though, she startled the court by worshipping at the ancestral temple in robes reserved for the emperor.",
    fact: "Renzong’s birth mother was not Liu E but a maid, Lady Li; from this came the story “a civet cat for the crown prince” (the newborn prince swapped for a skinned cat), a favorite of Peking opera and TV drama — though the swap is fiction.",
    era: "northernsong" },
  { id: "xiaotaihou", name: "Empress Dowager Xiao (Xiao Chuo)", period: "Liao (10th–11th c.)", key: "Led armies in person against the Northern Song",
    body: "Empress of the Liao, the state of the Khitans in the north, she governed for 27 years in place of her twelve-year-old son Shengzong after her husband’s death. She was leading Liao at the time of the battle of 986 in which the Song general Yang Ye was captured, and appears as an archenemy in the Generals of the Yang Family stories. In 1004 she and Shengzong led a great army into the Northern Song and forced the Treaty of Chanyuan, under which the Song paid silver and silk every year — bringing more than a hundred years of peace between the two states.",
    event: slug("northernsong", "澶淵の盟"), era: "northernsong", person: { href: "/en/people/northernsong/yang-ye", label: "Yang Ye" } },
  { id: "xiaozhuang", name: "Empress Xiaozhuang", period: "Qing (17th c.)", key: "The “mother of the nation” who supported two child emperors",
    body: "Born into a Mongol princely family, she was a consort of Hong Taiji of the Qing. Her son the Shunzhi Emperor took the throne at six, and when he too died young she set up her eight-year-old grandson, the Kangxi Emperor. She never governed openly herself, but devoted herself to Kangxi’s education and supported him when he removed the overbearing regent Oboi. As the grandmother who raised Kangxi, who opened the Qing golden age, she is still highly regarded in China.",
    fact: "The story that she married the regent Dorgon is widely told, but there is no reliable record and it is considered folklore.",
    event: slug("qing", "康熙帝"), era: "qing", person: { href: "/en/people/qing/kangxi-emperor", label: "Kangxi Emperor" } },
  { id: "cixi", name: "Empress Dowager Cixi", period: "Late Qing (late 19th–early 20th c.)", badge: "Notorious", key: "Held real power in the Qing for about half a century",
    body: "A consort of the Xianfeng Emperor and mother of his only son, the Tongzhi Emperor. When Xianfeng died in 1861 she joined Empress Dowager Ci’an and Prince Gong to overthrow the regents and began “ruling from behind the curtain” behind the six-year-old Tongzhi. When Tongzhi died at nineteen she set up her four-year-old nephew, the Guangxu Emperor, and took power again. In 1898, when Guangxu began modernizing reforms (the Hundred Days’ Reform), she crushed them after little more than a hundred days and confined the emperor. In 1900 she backed the Boxers and declared war on the powers, fleeing to Xi’an when Beijing was occupied. She died in 1908, the day after Guangxu, and the Qing fell a few years later.",
    fact: "It is often said that diverting navy funds to rebuild the Summer Palace led to defeat in the Sino-Japanese War. On the other hand, she approved the Self-Strengthening Movement and its modern factories and armies, and recent scholarship has been reassessing her.",
    event: slug("qing", "義和団事件"), era: "qing", person: { href: "/en/people/qing/empress-dowager-cixi", label: "Empress Dowager Cixi" } },
];

const FAQ = [
  { q: "How many women emperors did China have?", a: "Only one woman formally took the throne and ruled as emperor: Wu Zetian. In 528 the Northern Wei briefly set up a newborn princess as emperor, pretending she was a boy, and deposed her at once, but she is not usually counted. Empress Lü and Cixi held more power than many emperors, but they governed as empresses dowager and never took the throne themselves." },
  { q: "What is “ruling from behind the curtain”?", a: "Governing in place of the emperor — usually a child — as empress dowager. So as not to meet male officials face to face, she sat behind a screen hung behind the throne and heard state business through it, hence the name (chuilian tingzheng). In the Han it was called “attending court and issuing decrees,” and Cixi at the end of the Qing is the most famous example." },
  { q: "Were they really villains?", a: "Empress Lü, Wu Zetian and Cixi are often grouped as China’s most notorious women, and all three treated rivals and consorts cruelly. Yet under Empress Lü the people lived in stability, under Wu Zetian the population grew, and Cixi helped keep the Qing going. Many point out that the histories were written by male officials who believed that women in government brought disorder, so their bad side has been emphasized." },
  { q: "How does this compare with Japan’s women emperors?", a: "Japan had eight women on the throne (ten reigns), from Empress Suiko to Empress Go-Sakuramachi in the Edo period — in contrast to China’s single woman emperor. By coincidence, 690, the year Wu Zetian took the throne, was also the year Empress Jitō was formally enthroned in Japan, so in that year women stood at the top in both Japan and China." },
];

export default function EnglishWomenRulersPage() {
  const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
  return (
    <FeaturePage
      title="Women Who Ruled China"
      jaPath="/women-rulers"
      intro="In China’s long history only one woman, Wu Zetian, formally became emperor. But many women ran the state in the emperor’s place as his mother or wife. Here, in order, are empresses dowager who governed behind child emperors, empresses who shared in government beside their husbands, and an empress dowager who led armies herself."
      related={[
        { href: "/en/harem-ranks", label: "Ranks of the imperial harem" },
        { href: "/en/four-beauties", label: "The Four Beauties" },
        { href: "/en/emperors", label: "Emperors of China" },
      ]}
    >
      <div style={{ ...cardStyle, padding: "12px 14px", marginBottom: 20 }}>
        <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.08em", color: COLORS.gold, marginBottom: 6 }}>IN SHORT</div>
        <div style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.ink }}>
          <div><b>China’s only woman emperor:</b> Wu Zetian (Tang, reigned 690–705)</div>
          <div><b>The three most notorious:</b> Empress Lü, Wu Zetian and Empress Dowager Cixi</div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2" style={{ marginBottom: 24 }}>
        {WOMEN.map((w) => (
          <a key={w.id} href={`#${w.id}`} className="hover:opacity-90" style={{ ...cardStyle, padding: "8px 10px" }}>
            <div style={{ ...serif, fontSize: 13.5, fontWeight: 700, color: COLORS.ink }}>{w.name.replace(/\s*\(.*$/, "")}</div>
            <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>{w.period}</div>
          </a>
        ))}
      </div>

      <Section title="Women who held power, in order">
        <div className="flex flex-col gap-4">
          {WOMEN.map((w, i) => (
            <div key={w.id} id={w.id} style={{ ...cardStyle, padding: "14px 16px", scrollMarginTop: 16 }}>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 style={{ ...serif, fontSize: 18, fontWeight: 700, color: COLORS.ink }}>
                  <span style={{ color: COLORS.gold, fontSize: 12, marginRight: 8 }}>{i + 1}</span>
                  {w.name}
                  {w.badge && <span style={{ display: "inline-block", marginLeft: 8, padding: "1px 7px", fontSize: 10.5, fontWeight: 700, color: "#FBF8F0", backgroundColor: COLORS.vermilion, verticalAlign: "middle" }}>{w.badge}</span>}
                </h3>
                <span style={{ fontSize: 12, color: COLORS.gold, ...serif }}>{w.period}</span>
              </div>
              <p style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>{w.key}</p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>{w.body}</p>
              {w.fact && <div style={{ marginTop: 10, padding: "8px 10px", backgroundColor: "#F3ECD9", fontSize: 13, lineHeight: 1.75, color: COLORS.inkSoft }}>{w.fact}</div>}
              <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ marginTop: 10, fontSize: 13 }}>
                <Link href={w.event ? `/en/events/${w.event}` : `/en/eras/${w.era}`} style={linkStyle}>{w.event ? "Read the related event" : "About this era"} →</Link>
                {w.person && <Link href={w.person.href} style={linkStyle}>{w.person.label} →</Link>}
                {w.extra && isLive(w.extra.href) && <Link href={w.extra.href} style={linkStyle}>{w.extra.label} →</Link>}
              </div>
            </div>
          ))}
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
