import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_URL, SITE_NAME_EN, bilingualAlternates, findEventEn, displayYearEn } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, Paras, ItemCard, cardStyle, serif, eventLink } from "@/components/en/EnFeature";

const title = "Qin Shi Huang, the First Emperor of China: Life, Unification and Legacy";
const description =
  "Qin Shi Huang unified China in 221 BC and created the title “emperor.” His life, the conquest of the six states, Qin government and Legalism, the Great Wall, his tomb and the Terracotta Army, why he is called a tyrant, the mystery of his death and the fall of Qin.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/qinshihuang", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/qinshihuang", type: "article", image: { title: "Qin Shi Huang", subtitle: "The First Emperor", seal: "秦" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ja = (eraId, key) => ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(key))?.slug || null;
const EV = {
  zhanguoEnd: ja("zhanguo", "戦国の終結"),
  unification: ja("qin", "中国統一"),
  counties: ja("qin", "郡県制"),
  wall: ja("qin", "万里の長城"),
  burning: ja("qin", "焚書坑儒"),
  chenSheng: ja("qin", "陳勝"),
  fall: ja("qin", "秦の滅亡"),
};

const LIFE = [
  ["259 BC", "Born at Handan, capital of Zhao. His father was the Qin prince Yiren (later King Zhuangxiang), a hostage in Zhao; his mother was Lady Zhao. When the great merchant Lü Buwei arranged his father’s return to Qin and accession, Zheng became crown prince of Qin."],
  ["247 BC", "On the death of his father King Zhuangxiang he became king of Qin at just thirteen. Because he was so young, the chancellor Lü Buwei acted as guardian and ran the state."],
  ["238 BC", "At 22 he began ruling in person. He crushed a revolt by his mother’s lover Lao Ai, and the next year forced his guardian Lü Buwei from power, taking complete control."],
  ["230–221 BC", "Relying on Legalist ministers such as Li Si and sending generals such as Wang Jian, he destroyed the six states — Han, Zhao, Wei, Chu, Yan and Qi — one after another."],
  ["221 BC", "With the surrender of Qi, the last to resist, he achieved the first unification in Chinese history. He created the title “emperor” (huangdi) and called himself the First Emperor."],
  ["220–211 BC", "He standardized weights and measures, script and currency, imposed commanderies and counties, built the Great Wall, the Epang Palace and his own tomb, and toured the empire. In 213 BC he ordered the burning of books, and the next year the burying of scholars."],
  ["210 BC", "He died suddenly at Shaqiu in Hebei during his fifth tour, aged 50 (by East Asian reckoning)."],
];

const PEOPLE = [
  { name: "Lü Buwei", role: "Chancellor and guardian", text: "Originally a great merchant, he is said to have engineered the return and accession of the First Emperor’s father, a hostage abroad, and as guardian of the boy king long held real power. He fell after the emperor began ruling in person and took his own life." },
  { name: "Li Si", role: "Chancellor, Legalist", text: "The First Emperor’s right-hand man who put Legalist thought into practice — the driving force behind commanderies and counties, the standardization of weights, measures and script, and the burning of books and burying of scholars. After the emperor’s death he was drawn in by Zhao Gao, who finally had him executed on false charges.", href: "/en/people/qin/li-si" },
  { name: "Meng Tian", role: "General", text: "The great Qin general who fought the Xiongnu in the north and directed the building of the Great Wall. After the First Emperor’s death a forged edict forced him to kill himself; thinking of the toil of building the wall, he is said to have lamented that he had sinned against Heaven.", href: "/en/people/qin/meng-tian" },
  { name: "Fusu", role: "Eldest son", text: "The First Emperor’s eldest son, a gentle man said to have objected to the burning of books and burying of scholars. The natural heir, he was ordered to kill himself by a forged edict contrived by Zhao Gao and Li Si after his father’s death, and the throne went to his younger brother Huhai." },
  { name: "Huhai", role: "The Second Emperor", text: "The First Emperor’s youngest son. Enthroned by Zhao Gao, he became Zhao’s puppet and kept up heavy taxes and harsh rule, until Zhao drove him to suicide, blaming him for the revolts breaking out everywhere." },
  { name: "Zhao Gao", role: "Eunuch", text: "The man who conspired with Li Si to forge the will at the First Emperor’s death. After enthroning Huhai he wielded power at will, and is known for the story of “calling a deer a horse” to test the loyalty of the court. He was finally killed by Ziying, whom he himself had set up." },
  { name: "Xiang Yu", role: "Rebel leader", text: "The Chu general who destroyed the main Qin army and burned Xianyang.", href: "/en/people/qin/xiang-yu" },
  { name: "Liu Bang", role: "Rebel leader, founder of Han", text: "The first rebel to enter the Qin capital, who went on to found the Han dynasty.", href: "/en/people/westernhan/liu-bang" },
];

const FAQ = [
  { q: "What did Qin Shi Huang do?", a: "He was the king of Qin who destroyed the six states in 221 BC, unified China for the first time and created the title “emperor.” He standardized weights and measures, script and currency, introduced commanderies and counties and built the Great Wall, creating the prototype of Chinese government for more than 2,000 years." },
  { q: "Why is he called a tyrant?", a: "Mainly because of his control of thought through the burning of books and burying of scholars, and the brutal forced labor for the Great Wall, the Epang Palace and his tomb. His achievement in unifying China was great, but the harshness of his rule divides opinion." },
  { q: "How did he die?", a: "The Records of the Grand Historian says only that he died of illness, without giving a cause. A leading theory is poisoning from the mercury-laced “elixirs” he took in search of immortality, but death from overwork or chronic illness has also been suggested; it remains unsettled." },
];

export default function EnglishQinShiHuangPage() {
  const events = Object.values(EV).filter(Boolean).map((s) => findEventEn(s)).filter(Boolean);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Qin Shi Huang",
    alternateName: ["Ying Zheng", "King Zheng of Qin", "First Emperor of Qin"],
    description,
    birthDate: "-0259",
    deathDate: "-0210",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/qinshihuang` },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <FeaturePage
      title="Qin Shi Huang, the First Emperor"
      jaPath="/qinshihuang"
      intro="Qin Shi Huang was the man who, in 221 BC, unified China for the first time and created for himself the title “emperor” in place of “king.” His surname was Ying and his personal name Zheng; as king he was known as King Zheng of Qin. After unification he called himself the “First Emperor,” hoping his descendants would rule as Second and Third Emperors for ten thousand generations. The framework of government he set up — standard weights, measures, currency and script, centralized rule through commanderies and counties, the Great Wall — became the prototype of the Chinese state for more than two thousand years. Yet his harsh control of thought and brutal forced labor also earned him the name of tyrant, and he remains one of the most divisive emperors in Chinese history."
      related={[
        { href: "/en/people/qin/qin-shi-huang", label: "Profile and life timeline" },
        { href: "/en/terracotta-army", label: "The Terracotta Army" },
        { href: "/en/qin-fall", label: "Why Qin fell so fast" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ ...serif, fontSize: 13, color: COLORS.gold, marginTop: -8, marginBottom: 24 }}>
        259–210 BC · King of Qin 247–221 BC · Emperor 221–210 BC
      </div>

      <Section title="His life">
        <div className="flex flex-col gap-3">
          {LIFE.map(([year, text]) => (
            <div key={year} className="flex gap-3">
              <div className="shrink-0" style={{ width: 96, ...serif, fontSize: 13, color: COLORS.vermilion, paddingTop: 1 }}>{year}</div>
              <div style={{ fontSize: 14, lineHeight: 1.75, color: COLORS.inkSoft, borderLeft: `2px solid ${COLORS.mist}`, paddingLeft: 12 }}>{text}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Unifying China">
        <Paras items={["Qin had steadily built up its strength through decades of diplomatic maneuvering among the states, and its crushing blow to Zhao, its greatest rival, at the Battle of Changping in 260 BC made unification all but certain. Pressing further for wealth and military power with Legalist ministers such as Li Si, the First Emperor destroyed the six states in turn — Han (230 BC), Zhao (228), Wei (225), Chu (223), Yan (222) and Qi (221) — and in 221 BC brought a vast territory under a single power for the first time. Feeling that “king” no longer did justice to his achievement, he created the new title “emperor” to show an authority surpassing even the legendary Three Sovereigns and Five Emperors, and called himself the First Emperor. Unification ended an age of division and war that had lasted about 180 years since the partition of Jin in 403 BC — or some 550 years counting from the Zhou move east in 770 BC."]} />
        <EventLinks slugs={[EV.zhanguoEnd, EV.unification]} />
      </Section>

      <Section title="How Qin governed">
        <Paras
          items={[
            "After unification the First Emperor abolished the feudal system based on kinship that had existed since the Zhou, divided the country into 36 (later more than 40) commanderies and set counties beneath them. The commanderies were run by officials the emperor appointed and dismissed, with no hereditary right — a way to stop regional powers from building their own armies and rising against the center. He also rapidly standardized weights and measures, currency (the banliang coin), script (small seal) and even axle widths, making uniform the foundations of a society that had long been divided.",
            "This centralized system, in which the whole country was governed by the emperor’s command, became the prototype of Chinese government for more than two thousand years. At the same time, huge projects — the magnificent Epang Palace near the capital Xianyang, a network of imperial highways — increased the burden on the people and were a distant cause of Qin’s fall.",
          ]}
        />
        <EventLinks slugs={[EV.counties]} />
      </Section>

      <Section title="Legalism and the burning of the books">
        <Paras
          items={[
            "Since Shang Yang’s reforms in the mid-Warring States period, Qin had made Legalism — rule by law and strict reward and punishment — its guiding principle, and the First Emperor continued it, leaving the practice of government to his chancellor Li Si. The Legalists taught that the state should be governed solely by written law and strict rewards and punishments, not by kinship or rank, and dismissed the benevolence, ritual and old hierarchy prized by the Confucians. The First Emperor is said to have admired the writings of Han Fei, and Legalism’s hard-headed realism and centralism drove the conquest of the six states and the holding together of a vast empire.",
            "In 213 BC, on Li Si’s proposal, the histories of the other states and the Confucian classics — everything except practical books on medicine, divination and agriculture and Qin’s own records — were burned in an attempt to control thought (the “burning of the books”). The next year, according to the Records of the Grand Historian, the emperor, angered that his magicians had failed to find the elixir of immortality, had several hundred scholars and magicians said to have criticized him buried alive. Together these two acts are known as “burning the books and burying the scholars,” the main reason the First Emperor was condemned as a tyrant in later Confucian society — though later exaggeration has been pointed out, and their scale and nature are still debated.",
          ]}
        />
        <EventLinks slugs={[EV.burning]} />
      </Section>

      <Section title="The Great Wall">
        <Paras items={["In 214 BC the First Emperor sent General Meng Tian against the Xiongnu in the north and had the walls built separately by Yan, Zhao, Qin and other states in the Warring States period linked and repaired, creating a great line of defense from Lintao (in present-day Gansu) in the west to Liaodong in the east. Hundreds of thousands of people conscripted from across the country are said to have been put to work, with many dying from the brutal labor. The legend of Lady Meng Jiang, whose weeping for her husband lost to the wall brought part of it down, was told for centuries as a symbol of that suffering. Few Qin walls survive; most of the wall seen by visitors today was rebuilt by the Ming, but the idea of a northern defensive line fixed at this time was carried on by later dynasties."]} />
        <EventLinks slugs={[EV.wall]} extra={[{ href: "/en/great-wall", label: "The Great Wall of China" }]} />
      </Section>

      <Section title="His tomb and the Terracotta Army">
        <Paras
          items={[
            "Right after taking the throne, the First Emperor is said to have begun building his tomb at the foot of Mount Li near the capital Xianyang; after unification its scale grew, and the Records of the Grand Historian says 700,000 people worked on it. The histories describe rivers and seas of mercury inside the underground palace, a ceiling painted with the heavens and crossbows rigged to shoot intruders. Modern surveys have reported high levels of mercury in the soil around the mound, and with the risk of looting, the limits of preservation and unknown dangers, excavation of the underground palace itself has still not begun.",
            "The Terracotta Army is a group of life-size pottery soldiers, horses and chariots buried east of the tomb as an accompanying burial. Found by chance in 1974 by farmers digging a well at Lintong, Shaanxi, it became one of the greatest archaeological discoveries of the 20th century. The three excavated pits have yielded an estimated 8,000 figures, famous for their individual faces and original bright colors, and thought to have been made as an army to guard the emperor in the afterlife. With the mausoleum, it was inscribed as a UNESCO World Heritage Site in 1987.",
          ]}
        />
        <EventLinks slugs={[]} extra={[{ href: "/en/terracotta-army", label: "The mysteries of the tomb and the Terracotta Army" }]} />
      </Section>

      <Section title="The death of the First Emperor">
        <Paras
          items={[
            "In 210 BC the First Emperor died suddenly at Shaqiu in Hebei, on his fifth tour of the empire, aged 50. The Records of the Grand Historian gives no cause, saying only that he died of illness. In his last years, terrified of death, he pursued immortality, sending magicians to search for elixirs; poisoning from mercury-laced “elixirs” is a leading theory, but exhaustion from his tours or chronic illness have also been suggested, and there is no firm conclusion. The legend of the magician Xu Fu, who set sail with thousands of people to find the elixir on the eastern island of Penglai and never returned, also belongs to this time.",
            "His close aide, the eunuch Zhao Gao, and the chancellor Li Si feared for their positions if the eldest son Fusu, who was not with the tour, took the throne, so they kept the emperor’s death secret and forged his will (the “Shaqiu Plot”). To disguise the smell of the decaying body, it is said, they loaded the carriages with salted fish. Back in the capital, the forged edict ordered Fusu and General Meng Tian to kill themselves, and the youngest son Huhai was set up as the Second Emperor.",
          ]}
        />
      </Section>

      <Section title="The fall of Qin">
        <Paras
          items={[
            "The Second Emperor, Huhai, enthroned by Zhao Gao, became his puppet and continued the heavy taxes and harsh laws. Zhao Gao in time had even the chancellor Li Si executed on false charges and seized all power; the story of his “calling a deer a horse” to test the loyalty of the court symbolizes his tyranny. In 209 BC the peasants Chen Sheng and Wu Guang, conscripted for frontier duty and facing execution after heavy rain made them late, rose in revolt; the rebellion spread rapidly, and anti-Qin forces led by Xiang Yu, Liu Bang and others rose one after another, sealing Qin’s collapse.",
            "Cornered, Zhao Gao drove Huhai to suicide to shift the blame and set up Ziying as king, but Ziying promptly had Zhao Gao killed. It was too late: when Ziying surrendered to Liu Bang, who had been first to reach the capital Xianyang, Qin fell — just fifteen years after its founding as an empire. Xiang Yu and Liu Bang then fought the Chu–Han War for mastery of the realm, and the victorious Liu Bang founded the Han dynasty.",
          ]}
        />
        <EventLinks slugs={[EV.chenSheng, EV.fall]} extra={[{ href: "/en/qin-fall", label: "Why Qin fell in only fifteen years" }]} />
      </Section>

      <Section title="People around the First Emperor">
        <div className="flex flex-col gap-3">
          {PEOPLE.map((p) => (
            <ItemCard key={p.name} title={p.name} subtitle={p.role} links={p.href ? [{ href: p.href, label: "Profile" }] : []}>
              {p.text}
            </ItemCard>
          ))}
        </div>
      </Section>

      <Section title="Related events">
        <div className="flex flex-col gap-2">
          {events.map(({ event }) => (
            <Link key={event.slug} href={`/en/events/${event.slug}`} className="block px-4 py-3" style={{ ...cardStyle, borderLeft: `3px solid ${COLORS.vermilion}` }}>
              <span style={{ ...serif, color: COLORS.inkSoft, fontSize: 13 }}>{displayYearEn(event.year)}</span>
              <span style={{ ...serif, color: COLORS.ink, fontSize: 15, fontWeight: 600, marginLeft: 10 }}>{event.title}</span>
            </Link>
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

function EventLinks({ slugs, extra = [] }) {
  const links = [...slugs.filter(Boolean).flatMap((s) => {
    const found = findEventEn(s);
    return found ? eventLink(s, `Read “${found.event.title}”`) : [];
  }), ...extra];
  if (links.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
      {links.map((l) => (
        <Link key={l.href} href={l.href} style={{ fontSize: 13, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
          {l.label} →
        </Link>
      ))}
    </div>
  );
}
