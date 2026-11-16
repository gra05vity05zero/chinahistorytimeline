import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, ItemCard, cardStyle, serif } from "@/components/en/EnFeature";

const title = "Eunuchs in Chinese History: Famous Eunuchs and How They Gained Power";
const description =
  "Eunuchs were castrated men who served the emperor and the imperial harem. From Zhao Gao of Qin and the Ten Attendants of the Han to Gao Lishi, Zheng He, Wei Zhongxian and Li Lianying, the famous eunuchs who moved dynasties — and why they could seize power.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/eunuchs", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/eunuchs", image: { title: "Eunuchs in Chinese History", seal: "宦" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const slug = (eraId, key) => ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(key))?.slug || null;

const EUNUCHS = [
  { id: "zhaogao", name: "Zhao Gao", period: "Qin (3rd c. BC)", key: "Hid the First Emperor’s death and brought Qin down from within",
    body: "A close attendant of the First Emperor. When the emperor died while touring in 210 BC, Zhao Gao joined the chancellor Li Si in hiding his death and rewriting his will to make the youngest son Huhai the Second Emperor (the Shaqiu Plot). The rightful heir Fusu was driven to suicide, and later Li Si too was killed. The story of how he presented a deer as a “horse” and ruined the ministers who honestly called it a deer — “pointing at a deer and calling it a horse” — is famous. He was finally killed by Ziying, whom he had set up himself.",
    fact: "He has long been called a eunuch on the strength of the Records of the Grand Historian, though some recent scholars argue he was not one.",
    event: slug("qin", "秦の滅亡"), era: "qin" },
  { id: "cailun", name: "Cai Lun", period: "Eastern Han (early 2nd c.)", key: "The eunuch who improved papermaking",
    body: "A eunuch who served Emperor He of the Eastern Han as head of the workshops that made the palace’s implements. In 105 he presented to the emperor a way of making strong paper from bark, hemp waste and old fishing nets, and the paper was called “Marquis Cai’s paper.” Paper existed before him, but for making it cheap and plentiful he is credited as the hero of papermaking, one of China’s Four Great Inventions — a reminder that eunuchs were bearers of technology and culture, not only players in power struggles.",
    fact: "A real person with a biography in the History of the Later Han.",
    event: slug("easternhan", "製紙法の改良"), era: "easternhan", person: { href: "/en/people/easternhan/cai-lun", label: "Cai Lun" } },
  { id: "shichangshi", name: "The Ten Attendants", period: "Late Eastern Han (late 2nd c.)", key: "Manipulated the emperor and set off the turmoil of the Three Kingdoms",
    body: "The later Eastern Han saw a long struggle in which the empress’s kin (the consort clans) and the eunuchs took turns holding power. In 159 Emperor Huan overthrew the consort kinsman Liang Ji with eunuch help, and from then on eunuchs swayed the government; officials and scholars who criticized them were persecuted as “partisans” (the Proscription of the Partisans). The next emperor, Emperor Ling, trusted the eunuchs called the “Ten Attendants,” such as Zhang Rang and Zhao Zhong, so much that he called them “my father, my mother.” In 189, when the consort kinsman He Jin, trying to remove the eunuchs, was killed instead, Yuan Shao and others stormed the palace and killed more than 2,000 eunuchs. In the confusion Dong Zhuo entered the capital, and the age moved into the turmoil of the Three Kingdoms.",
    fact: "Cao Cao’s grandfather Cao Teng was also a eunuch, and Cao Cao’s father Cao Song was his adopted son.",
    event: slug("easternhan", "党錮の禁"), era: "easternhan", person: { href: "/en/people/sanguo/cao-cao", label: "Cao Cao" } },
  { id: "gaolishi", name: "Gao Lishi", period: "Tang (8th c.)", key: "Xuanzong’s most trusted aide",
    body: "He served Xuanzong from before his accession and won such trust that documents for the emperor passed through his hands first; even the crown prince called him “elder brother.” He is said to have been one of those who introduced Yang Guifei to Xuanzong, and there is a famous story of the drunken poet Li Bai making him pull off his boots. When Xuanzong fled the capital in the An Lushan Rebellion, Gao Lishi went with him, and at Mawei it fell to him to give Yang Guifei the order to die. When he learned of Xuanzong’s death he grieved deeply and soon died himself — remembered as the model of the loyal eunuch.",
    fact: "In the later Tang, eunuchs commanded the palace armies (the Shence Army) and grew powerful enough to make and kill emperors. In 835 Emperor Wenzong’s plan to wipe them out failed (the Sweet Dew Incident), and many officials were killed instead.",
    event: slug("tang", "安史の乱"), era: "tang", person: { href: "/en/people/tang/yang-guifei", label: "Yang Guifei" } },
  { id: "zhenghe", name: "Zheng He", period: "Ming (early 15th c.)", key: "Led great fleets as far as Africa",
    body: "Born into a Muslim family in Yunnan, he was captured as a boy by the Ming army and made a eunuch. Serving the Prince of Yan (the future Yongle Emperor), he won distinction in the Jingnan Campaign and was given the surname Zheng. From 1405 he led seven voyages with fleets of dozens of ships and over 20,000 men to Southeast Asia, India, the Arabian Peninsula and the east coast of Africa, urging the states he visited to send tribute to the Ming — the largest voyages in the world at the time, more than eighty years before Columbus.",
    fact: "The Yongle Emperor relied heavily on eunuchs, even entrusting them with the Eastern Depot, a secret police that watched over officials — the beginning of eunuch power under the Ming.",
    event: slug("ming", "鄭和"), era: "ming", person: { href: "/en/people/ming/zheng-he", label: "Zheng He" } },
  { id: "wangzhen", name: "Wang Zhen", period: "Ming (mid 15th c.)", key: "Took the emperor to war — and into captivity",
    body: "The childhood tutor of the Zhengtong Emperor (Yingzong), he ran the government as he pleased once the emperor took the throne. In 1449, when the Mongol Oirats attacked, he strongly urged the emperor to lead the army in person despite having no military experience. The ill-prepared Ming army was crushed at Tumu Fortress and the emperor was taken prisoner by the Oirats (the Tumu Crisis); Wang Zhen himself was killed in the chaos. An emperor captured by the enemy was one of the worst humiliations in Ming history.",
    fact: "Other eunuchs followed who wielded power through imperial favor, such as Liu Jin under the Zhengde Emperor; Liu Jin was executed by slow slicing for alleged rebellion.",
    event: slug("ming", "土木の変"), era: "ming", person: { href: "/en/people/ming/emperor-yingzong", label: "Emperor Yingzong" } },
  { id: "weizhongxian", name: "Wei Zhongxian", period: "Late Ming (early 17th c.)", key: "Called “Nine Thousand Years,” he hastened the Ming’s fall",
    body: "He is said to have made himself a eunuch to escape gambling debts. Under the Tianqi Emperor, who had no interest in government, he seized real power and used the Eastern Depot to imprison and torture the officials of the opposing Donglin faction one after another. He was hailed as “Nine Thousand Years,” second only to the emperor’s “Ten Thousand Years,” and shrines to him were built across the country while he was still alive. In 1627 the new Chongzhen Emperor dismissed him at once, and he took his own life. But the political turmoil did not end, and seventeen years later the Ming fell.",
    fact: "There are said to have been tens of thousands of eunuchs at the end of the Ming.",
    event: slug("ming", "明の滅亡"), era: "ming" },
  { id: "lilianying", name: "Li Lianying", period: "Late Qing (late 19th c.)", key: "The eunuch closest to Empress Dowager Cixi",
    body: "Learning from the Ming’s failure, the Qing strictly forbade eunuchs to meddle in government. In 1869 An Dehai, a favorite eunuch of Empress Dowager Cixi, was executed by a provincial governor for leaving the capital without permission. Afterward it was Li Lianying who served Cixi and won her favor, receiving the second official rank — extraordinary for a eunuch. One story says he rose through his skill at dressing her hair. TV dramas often cast him as a villain, but there are few records of him openly directing policy.",
    fact: "In 1923 Puyi, still living in the Forbidden City, expelled most of the eunuchs, effectively ending an institution more than two thousand years old. Sun Yaoting, said to be the last eunuch, lived until 1996.",
    era: "qing", person: { href: "/en/people/qing/empress-dowager-cixi", label: "Empress Dowager Cixi" } },
];

const FAQ = [
  { q: "Why could eunuchs seize power?", a: "Eunuchs handled everything from the emperor’s daily needs to passing on documents, and were at his side all day. To a child emperor they were almost foster parents, and since they could not have descendants, they were thought less likely to found a family line and usurp the dynasty. So emperors relied on eunuchs as allies against powerful consort clans and officials, and the eunuchs used their role as transmitters of the emperor’s orders to swell their own power." },
  { q: "How did a man become a eunuch?", a: "In early times criminals sentenced to castration and prisoners of war were made eunuchs; under the Ming and Qing, many poor men volunteered in hope of advancement or a living. The most famous man castrated as punishment is Sima Qian, author of the Records of the Grand Historian: having angered the emperor by defending the general Li Ling, who had surrendered to the Xiongnu, he chose castration over death in order to finish his history." },
  { q: "Did Japan have eunuchs?", a: "Japan adopted many Tang institutions, such as the ritsuryō legal codes, through its envoys, but not eunuchs or the examinations. At the Japanese court, female officials attended to the emperor and passed on his orders, so there was no need for eunuchs; Japan’s weak pastoral tradition, with no custom of castration, is also given as a reason." },
];

export default function EnglishEunuchsPage() {
  return (
    <FeaturePage
      title="Eunuchs in Chinese History"
      jaPath="/eunuchs"
      intro="Eunuchs were castrated men who served the emperor and the imperial harem. Only men who had been castrated — so that no trouble could arise with the women of the harem — were allowed into the inner palace, where they attended to the emperor and passed on his orders. Being closest of all to the emperor, they sometimes manipulated him to rule the country and even caused the fall of dynasties. In China they existed for over two thousand years, from the Zhou at the latest until the end of the Qing."
      related={[
        { href: "/en/harem-ranks", label: "Ranks of the imperial harem" },
        { href: "/en/keju", label: "The imperial examinations" },
        { href: "/en/qin-fall", label: "Why Qin fell" },
      ]}
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" style={{ marginBottom: 24 }}>
        {EUNUCHS.map((e) => (
          <a key={e.id} href={`#${e.id}`} className="text-center hover:opacity-90" style={{ ...cardStyle, padding: "8px 6px" }}>
            <div style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.ink }}>{e.name}</div>
            <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>{e.period}</div>
          </a>
        ))}
      </div>

      <Section title="Famous eunuchs who changed history">
        <div className="flex flex-col gap-4">
          {EUNUCHS.map((e, i) => (
            <div key={e.id} id={e.id} style={{ ...cardStyle, padding: "14px 16px", scrollMarginTop: 16 }}>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 style={{ ...serif, fontSize: 18, fontWeight: 700, color: COLORS.ink }}>
                  <span style={{ color: COLORS.gold, fontSize: 12, marginRight: 8 }}>{i + 1}</span>
                  {e.name}
                </h3>
                <span style={{ fontSize: 12, color: COLORS.gold, ...serif }}>{e.period}</span>
              </div>
              <p style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>{e.key}</p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>{e.body}</p>
              <div style={{ marginTop: 10, padding: "8px 10px", backgroundColor: "#F3ECD9", fontSize: 13, lineHeight: 1.75, color: COLORS.inkSoft }}>{e.fact}</div>
              <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ marginTop: 10, fontSize: 13 }}>
                <Link href={e.event ? `/en/events/${e.event}` : `/en/eras/${e.era}`} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>{e.event ? "Read the related event" : "About this era"} →</Link>
                {e.person && <Link href={e.person.href} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>{e.person.label} →</Link>}
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
