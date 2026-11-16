import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_URL, SITE_NAME_EN, bilingualAlternates, findEventEn, displayYearEn } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, Paras, Facts, ItemCard, DataTable, cardStyle, serif } from "@/components/en/EnFeature";

const title = "Why Did the Qin Dynasty Fall? Five Reasons It Lasted Only 15 Years";
const description =
  "Why did the Qin, which unified China under the First Emperor, collapse after just fifteen years? Harsh law and heavy taxes, giant building projects, the emperor’s sudden death and the succession plot, Zhao Gao’s misrule and the Chen Sheng revolt — explained with a timeline and comparison table.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/qin-fall", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/qin-fall", type: "article", image: { title: "Why Did the Qin Fall?", subtitle: "Five reasons", seal: "亡" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ja = (eraId, key) => ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(key))?.slug || null;
const RELATED = [ja("qin", "中国統一"), ja("qin", "万里の長城"), ja("qin", "焚書坑儒"), ja("qin", "陳勝"), ja("qin", "秦の滅亡"), ja("westernhan", "漢を建国")];

const FACTS = [
  { q: "When did it fall?", a: "In 206 BC, when Ziying, king of Qin, surrendered to Liu Bang." },
  { q: "How long did it last?", a: "Just fifteen years from unification in 221 BC — and only four years after the First Emperor’s death." },
  { q: "Who brought it down?", a: "Liu Bang made the capital Xianyang surrender; Xiang Yu, arriving later, killed Ziying and burned Xianyang." },
  { q: "The five reasons", a: "(1) Harsh law and heavy taxes (2) giant building projects (3) the First Emperor’s sudden death and the succession plot (4) Zhao Gao’s misrule (5) the spread of revolt after Chen Sheng and Wu Guang rose." },
];

const RULERS = [
  { name: "Qin Shi Huang (Ying Zheng)", reign: "221–210 BC", note: "King of Qin from 247 BC. Died of illness at Shaqiu while touring the empire." },
  { name: "The Second Emperor (Huhai)", reign: "210–207 BC", note: "The First Emperor’s youngest son. Cornered by Zhao Gao, he killed himself." },
  { name: "Ziying, King of Qin", reign: "207–206 BC", note: "Dropped the title of emperor and called himself “king of Qin.” After 46 days he surrendered to Liu Bang and was later killed by Xiang Yu. His exact relationship to the imperial family is disputed." },
];

const REASONS = [
  {
    title: "Harsh law and heavy taxes",
    body: [
      "Following the Legalism of Shang Yang, Qin ran the state through detailed laws and harsh punishments. Under the system of mutual responsibility, neighbors were held liable for one another, so one person’s crime could fall on family and neighbors. In the Warring States period this produced a strong army and efficient administration, but forcing the same laws all at once on the people of the six conquered states, with different cultures and customs, provoked strong resentment.",
      "On top of this came heavy taxes. The Western Han thinker Dong Zhongshu complained that Qin’s people bore thirty times the labor service and twenty times the taxes of antiquity. Yet the excavated Qin laws, such as the Shuihudi bamboo slips found in 1975, show that arriving a few days late for labor service was punished only by a reprimand or fine. Qin law was not as uniformly cruel as the Records of the Grand Historian suggests; a growing view holds that the problem was less the severity of the laws than the haste with which they were rigidly applied to newly conquered lands.",
    ],
  },
  {
    title: "Giant building projects such as the Great Wall and the Epang Palace",
    body: [
      "After unification Qin pushed ahead almost simultaneously with the Great Wall in the north, the Epang Palace and the First Emperor’s tomb, imperial highways and canals across the country, and an expedition to Lingnan (present-day Guangdong and Guangxi) in the south. The Records of the Grand Historian says more than 700,000 convicts worked on the Epang Palace and the Mount Li tomb alone. With a population thought to be around 20–30 million, that means hundreds of thousands to a million people were always away on some project or garrison.",
      "With their workers taken, villages fell behind in farming and lost the means to pay taxes. Each project made sense as state-building, but imposing them without respite on people exhausted by the long wars of the Warring States was fatal. The Second Emperor even resumed work on the Epang Palace after taking the throne, so the burden did not lighten after the First Emperor’s death (excavations suggest the palace was never finished).",
    ],
  },
  {
    title: "The First Emperor’s sudden death and the succession plot",
    body: [
      "For all his search for immortality, the First Emperor died suddenly at fifty in 210 BC at Shaqiu during a tour, without having formally named an heir. The eunuch Zhao Gao and the chancellor Li Si, who were with him, feared for their positions if the popular eldest son Fusu took the throne; they rewrote the emperor’s will, ordered Fusu and General Meng Tian to kill themselves, and enthroned the youngest son Huhai (the Shaqiu Plot).",
      "Fusu was a moderate who had even objected to the burning of the books, and he was allied with Meng Tian, who commanded 300,000 troops in the north. Had Fusu taken the throne, Qin might have softened its policies and survived. Qin lost both the chance to change course and its best general — not to an enemy, but by its own hand.",
    ],
  },
  {
    title: "Zhao Gao’s misrule",
    body: [
      "Once enthroned, the Second Emperor, Huhai, executed brothers and sisters who might threaten his throne one after another and pushed aside the senior ministers of his father’s reign. Zhao Gao, holding real power, suppressed reports of revolt and finally had even his fellow conspirator Li Si executed.",
      "The story of how he presented a deer at court, called it a horse and destroyed the ministers who said “deer” — “pointing at a deer and calling it a horse” — symbolizes a court where the emperor no longer received the truth. In 207 BC, as rebel armies closed in, Zhao Gao drove Huhai to suicide to escape blame, but was himself killed by Ziying, whom he had set up. With judgment lost at the center, the response to the revolts was always too late.",
    ],
  },
  {
    title: "The spread of revolt after Chen Sheng and Wu Guang",
    body: [
      "In 209 BC the peasants Chen Sheng and Wu Guang, on their way to frontier duty in the north, were delayed by heavy rain and rose in revolt, reasoning that “being late means death, and running away means death — better to die raising an army” (Records of the Grand Historian). Famous for the cry “Are kings, lords, generals and ministers born to their rank?”, their revolt was put down in about half a year, but Xiang Liang and Xiang Yu, Liu Bang and the royal families of the old six states followed one after another.",
      "The revolt spread so far because the grudges of the six destroyed states had never faded. In Chu especially people said, “Even if Chu is reduced to three households, it will be Chu that destroys Qin”; Chen Sheng named his state “Zhangchu,” and both Xiang Yu and Liu Bang were men of Chu. Qin, meanwhile, had placed no royal princes in the provinces to defend the dynasty under its system of commanderies and counties, and its best troops were tied down against the Xiongnu in the north and in Lingnan in the south. When Zhang Han’s army, hastily raised from the convicts of Mount Li, was defeated by Xiang Yu at the Battle of Julu in 207 BC, Qin had almost no army left to hold its heartland.",
    ],
  },
];

const COMPARISON = [
  ["(1) Harsh law and heavy taxes", "Foundation", "From unification", "Li Si and the Legalist officials", "Built up discontent among the people of the six states, a motive for revolt"],
  ["(2) Building projects", "Foundation", "From c. 215 BC", "The First Emperor, Huhai", "Took workers from the villages and ruined livelihoods"],
  ["(3) Sudden death and succession", "Turning point", "210 BC", "Zhao Gao, Li Si, Fusu", "Lost the chance to change course, and the great general Meng Tian"],
  ["(4) Zhao Gao’s domination", "Accelerant", "210–207 BC", "Zhao Gao, Huhai", "The court stopped functioning; the response to revolt came too late"],
  ["(5) The Chen Sheng revolt", "Trigger", "From 209 BC", "Chen Sheng, Xiang Yu, Liu Bang", "Joined with the resentment of the six states and spread across the country"],
];

const CHRONOLOGY = [
  [221, "King Zheng of Qin conquers Qi, the last of the six states, and unifies China. He takes the title “emperor” and becomes the First Emperor. Commanderies and counties are imposed everywhere; weights, measures, script and currency are standardized."],
  [218, "At Bolangsha, Zhang Liang, a noble of the former state of Han, attacks the touring First Emperor but fails. The grudges of the old six states already show."],
  [215, "General Meng Tian attacks the Xiongnu with 300,000 troops and begins rebuilding the Great Wall. In the south, a great army is sent into Lingnan."],
  [213, "The burning of the books; the next year, the burying of the scholars. Around this time over 700,000 convicts are put to work on the Epang Palace and the Mount Li tomb."],
  [211, "A meteorite falls in Dong commandery inscribed “When the First Emperor dies the land will be divided”; the people living nearby are executed."],
  [210, "The First Emperor dies suddenly at Shaqiu on tour. In the Shaqiu Plot Fusu and Meng Tian are forced to kill themselves, and the youngest son Huhai becomes the Second Emperor."],
  [209, "The revolt of Chen Sheng and Wu Guang. On this signal the royal families of the six states, Xiang Liang and Xiang Yu, Liu Bang and others rise everywhere."],
  [208, "The Qin general Zhang Han defeats the rebels, and Xiang Liang is killed. In the capital, Li Si is executed on Zhao Gao’s false charges."],
  [207, "Xiang Yu defeats the main Qin army at the Battle of Julu, and Zhang Han surrenders. Zhao Gao forces Huhai to kill himself and sets up Ziying, but is killed by Ziying."],
  [206, "Liu Bang enters the Qin heartland; Ziying surrenders and Qin falls. Xiang Yu, arriving later, kills Ziying and burns Xianyang."],
];

const HAN_LESSONS = [
  ["Three articles of law", "On entering Xianyang, Liu Bang abolished Qin’s complex laws and promised just three: whoever kills shall die, and whoever wounds or steals shall be punished — winning the people’s hearts. (A lesson from reason 1.)"],
  ["Rest and lower taxes", "In the early Western Han, “government by non-action” based on Huang–Lao thought lightened taxes and let the people rest. The reserves built up then underpinned the prosperity of Emperor Wu’s reign. (Lessons from reasons 1 and 2.)"],
  ["Commanderies and kingdoms", "The region around the capital was ruled directly through commanderies and counties, while relatives and meritorious followers were enfeoffed as kings in the provinces — an attempt to place bulwarks that would protect the dynasty even if the center faltered. (A lesson from reason 5.)"],
  ["What Han kept", "The title of emperor, provincial rule through commanderies and counties, and the standardization of script, weights and measures — the framework Qin built passed to the Han and on to later dynasties."],
];

const FAQ = [
  { q: "How many years did the Qin dynasty last?", a: "Just fifteen years, from the unification of China in 221 BC to its fall in 206 BC. Qin had existed as a feudal state for centuries since the Zhou, but as a unified dynasty it is among the shortest-lived in Chinese history." },
  { q: "What was the main reason Qin fell?", a: "At root, it imposed harsh laws and heavy labor and taxes without respite on a people exhausted at the moment of unification. Then the First Emperor’s sudden death and Zhao Gao’s false succession came together, so the chance to change course was lost before the revolt of Chen Sheng and Wu Guang." },
  { q: "Who was the last Qin emperor?", a: "The last to hold the title of emperor was the Second Emperor, Huhai. Ziying, who followed, called himself “king of Qin” rather than emperor because the territory had shrunk, and surrendered to Liu Bang after 46 days." },
  { q: "Did Liu Bang or Xiang Yu destroy Qin?", a: "It was Liu Bang who received the surrender of Ziying, king of Qin. But it was Xiang Yu who destroyed the main Qin army at Julu, and when he entered Xianyang he killed Ziying and the Qin royal family and burned the capital, finishing Qin completely." },
];

export default function EnglishQinFallPage() {
  const events = RELATED.filter(Boolean).map((s) => findEventEn(s)).filter(Boolean);
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", headline: title, description, inLanguage: "en", mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/qin-fall` } };

  return (
    <FeaturePage
      title="Why Did the Qin Dynasty Fall So Fast?"
      jaPath="/qin-fall"
      intro="In 221 BC the First Emperor ended more than five hundred years of war and united China as one state for the first time. He hoped his descendants would rule for ten thousand generations, yet Qin fell just four years after his death and fifteen years after unification. Why did an empire with the strongest army and the most precise laws collapse so quickly? Here are the five reasons, with a timeline and a comparison table."
      related={[
        { href: "/en/qinshihuang", label: "Qin Shi Huang" },
        { href: "/en/eras/qin", label: "The Qin dynasty" },
        { href: "/en/eunuchs", label: "Eunuchs in Chinese history" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ ...serif, fontSize: 13, color: COLORS.gold, marginTop: -8, marginBottom: 20 }}>Unification: 221 BC · Fall: 206 BC · Capital: Xianyang</div>

      <Facts heading="The fall of Qin in brief" items={FACTS} />

      <Section title="The Qin dynasty: basic facts">
        <Paras items={["Qin was a feudal state in the west from the Zhou period, which grew strong in the Warring States period through Shang Yang’s reforms. Beginning with Han in 230 BC, King Zheng (the future First Emperor) destroyed Zhao, Wei, Chu and Yan in turn, and in 221 BC conquered Qi, the last, unifying the realm. He created the title “emperor” in place of “king,” divided the country into 36 commanderies run by officials sent from the center, and standardized weights and measures, script, currency and even axle widths. The capital was Xianyang (northwest of present-day Xi’an, Shaanxi)."]} />
        <h3 style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink, margin: "18px 0 8px" }}>The rulers of unified Qin</h3>
        <div className="flex flex-col gap-2">
          {RULERS.map((r) => (
            <ItemCard key={r.name} title={r.name} subtitle={r.reign}>{r.note}</ItemCard>
          ))}
        </div>
        <Paras items={["In 207 BC Liu Bang, who had reached the Qin heartland before Xiang Yu, closed in on Ziying, who had killed Zhao Gao and become king of Qin. Ziying surrendered riding in a plain white carriage, a cord around his neck, offering up the imperial seal. That was 206 BC (the first year of Han), counted as the fall of Qin. Xiang Yu, entering Xianyang afterward, killed Ziying and the Qin royal family and set the palaces on fire."]} />
      </Section>

      <Section title="Five reasons Qin fell">
        <Paras items={["The fall of Qin was not one failure: strains carried from the moment of unification (reasons 1 and 2) were compounded by blunders after the First Emperor’s death (3 and 4), and revolt (5) delivered the final blow."]} />
        <div className="flex flex-col gap-4 mt-4">
          {REASONS.map((r, i) => (
            <div key={r.title} style={{ ...cardStyle, padding: 14 }}>
              <h3 style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink, marginBottom: 8 }}>
                <span style={{ color: COLORS.vermilion, marginRight: 8 }}>{i + 1}.</span>
                {r.title}
              </h3>
              <Paras items={r.body} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="The five reasons compared">
        <Paras items={["Sorted by the role each played, the five reasons run from foundation (long-standing causes) to turning point, accelerant and trigger."]} />
        <div className="mt-3">
          <DataTable head={["Reason", "Role", "When", "Main people", "Effect on the fall"]} rows={COMPARISON} />
        </div>
      </Section>

      <Section title="Timeline: from unification to collapse">
        <Paras items={["The fifteen years from unification to the fall. Discontent built up over the first eleven, and everything collapsed in just four years after the First Emperor’s death (210 BC); events after his death are marked in red."]} />
        <div className="flex flex-col gap-3 mt-3">
          {CHRONOLOGY.map(([year, text]) => (
            <div key={year} className="flex gap-3">
              <div className="shrink-0" style={{ width: 92, ...serif, paddingTop: 1 }}>
                <div style={{ fontSize: 13, color: COLORS.vermilion }}>{year} BC</div>
                <div style={{ fontSize: 11, color: COLORS.gold }}>{year === 221 ? "Unification" : `Year ${221 - year} after`}</div>
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.75, color: COLORS.inkSoft, borderLeft: `2px solid ${year <= 210 ? COLORS.vermilion : COLORS.mist}`, paddingLeft: 12 }}>{text}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What if the First Emperor had lived longer?">
        <Paras
          items={[
            "History has no “what ifs,” but the question helps in thinking about why Qin fell. The First Emperor died at fifty. Had he lived ten more years, the succession plot (3) and Zhao Gao’s domination (4) would very likely not have happened; he himself could have named Fusu as heir and handed him the throne with Meng Tian’s army behind him.",
            "On the other hand, the harsh laws and heavy taxes (1) and the giant building projects (2) were the First Emperor’s own policies. As Zhang Liang’s assassination attempt and the meteorite inscribed “When the First Emperor dies the land will be divided” show, discontent surfaced even in his lifetime. A strong emperor might have kept the revolts down while he lived, but a change of reign without a change of policy could have led down the same road.",
            "What decided Qin’s fate, then, was less the First Emperor’s lifespan than whether he could pass the baton to a successor able to switch from wartime methods to peacetime ones. (This section is informed speculation based on the sources.)",
          ]}
        />
      </Section>

      <Section title="What happened after Qin fell?">
        <Paras items={["Xiang Yu, leader of the rebels who toppled Qin, styled himself “Hegemon-King of Western Chu” and enfeoffed his generals as eighteen kings. Liu Bang was pushed off to remote Hanzhong as “king of Han,” but discontent with the settlement reignited war everywhere, and the realm again became a contest between Xiang Yu and Liu Bang. In 202 BC, at the Battle of Gaixia, Xiang Yu found himself “surrounded by the songs of Chu on four sides” and killed himself at the Wu River; Liu Bang took the throne as emperor and the Han dynasty began.", "The Han treated Qin as a warning yet kept many of its institutions — hence the saying “Han inherited the Qin system” — and lasted some four hundred years."]} />
        <div className="grid gap-3 mt-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {HAN_LESSONS.map(([head, text]) => (
            <ItemCard key={head} title={head}>{text}</ItemCard>
          ))}
        </div>
      </Section>

      <Section title="Summary">
        <Paras
          items={[
            "Qin unified China in 221 BC and fell in 206 BC — just fifteen years as a unified dynasty. Harsh law and heavy taxes and giant building projects built up discontent among the people of the six states (the foundation); the First Emperor’s sudden death and the forged will removed the moderate Fusu and the great general Meng Tian (the turning point); Zhao Gao’s domination paralyzed the court and delayed the response to revolt (the accelerant); and the Chen Sheng revolt joined with the resentment of the six states and spread across the country (the trigger).",
            "In his essay “The Faults of Qin,” the Western Han scholar Jia Yi summed up the cause of Qin’s fall: “It failed to rule with humanity and righteousness, not realizing that the power to attack and the power to hold are different.” Winning an empire and keeping it require different things, but Qin never gave up its harsh wartime methods after unification. All five reasons lead back to this failure to switch from attack to defense.",
          ]}
        />
      </Section>

      <Section title="Frequently asked questions">
        <div className="flex flex-col gap-3">
          {FAQ.map((f) => (
            <ItemCard key={f.q} title={f.q}>{f.a}</ItemCard>
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
    </FeaturePage>
  );
}
