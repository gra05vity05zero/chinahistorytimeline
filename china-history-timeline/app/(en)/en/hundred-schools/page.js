import Link from "next/link";
import { COLORS } from "@/lib/data";
import { SITE_URL, SITE_NAME_EN, bilingualAlternates, findEventEn } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, Paras, Facts, ItemCard, DataTable, cardStyle, serif } from "@/components/en/EnFeature";

const title = "The Hundred Schools of Thought: Confucianism, Daoism, Legalism, Mohism and the Military School";
const description =
  "What were the Hundred Schools of Thought of the Spring and Autumn and Warring States periods? The ideas of Confucius, Mencius and Xunzi, Laozi and Zhuangzi, Shang Yang and Han Fei, Mozi and Sunzi, with a lineage map, a comparison table and what became of them.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/hundred-schools", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/hundred-schools", type: "article", image: { title: "The Hundred Schools of Thought", seal: "思" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const COLOR = { Confucianism: COLORS.vermilion, Daoism: COLORS.jade, Legalism: COLORS.ink, Mohism: COLORS.gold, "Military": "#6B5B3E" };

const FACTS = [
  { q: "When", a: "The late Spring and Autumn period to the Warring States period (6th–3rd centuries BC)." },
  { q: "The name", a: "“The masters” are the many thinkers; “the hundred schools” are their many schools." },
  { q: "Main schools", a: "Confucianism, Daoism, Legalism, Mohism, the Military school, the Diplomatists, the Yin–Yang school and others." },
  { q: "Why then?", a: "With the authority of the Zhou kings gone, rulers fighting for survival sought able men regardless of birth." },
  { q: "Afterward", a: "Qin adopted Legalism and unified China; from Emperor Wu of Han on, Confucianism became the orthodox learning of the state." },
];

// ---- Lineage map ----
const MAP_W = 424;
const COL_X = { Daoism: 82, Confucianism: 158, Legalism: 234, Mohism: 310, Military: 386 };
const COL_HEAD = { Daoism: "Daoist", Confucianism: "Confucian", Legalism: "Legalist", Mohism: "Mohist", Military: "Military" };
const COL_KEY = { Daoism: "non-action", Confucianism: "ren · li", Legalism: "law · reward", Mohism: "universal love", Military: "strategy" };
const ROWS = [
  { label: "Late Spring & Autumn", short: "Late S&A", y: 80 },
  { label: "Early Warring States", short: "Early WS", y: 150 },
  { label: "Mid Warring States", short: "Mid WS", y: 220 },
  { label: "Late Warring States", short: "Late WS", y: 290 },
  { label: "End of Warring States", short: "End WS", y: 360 },
  { label: "Qin", short: "Qin", y: 430 },
];
const NW = 70;
const NH = 40;
const NODES = [
  { name: "Laozi", sub: "dates unknown", s: "Daoism", row: 0 },
  { name: "Confucius", sub: "551–479 BC", s: "Confucianism", row: 0 },
  { name: "Sun Wu", sub: "6th–5th c. BC", s: "Military", row: 0 },
  { name: "Mozi", sub: "c. 470–390 BC", s: "Mohism", row: 1 },
  { name: "Zhuangzi", sub: "c. 369–286 BC", s: "Daoism", row: 2 },
  { name: "Mencius", sub: "c. 372–289 BC", s: "Confucianism", row: 2 },
  { name: "Shang Yang", sub: "?–338 BC", s: "Legalism", row: 2 },
  { name: "Sun Bin", sub: "4th c. BC", s: "Military", row: 2 },
  { name: "Xunzi", sub: "c. 313–238 BC", s: "Confucianism", row: 3 },
  { name: "Han Fei", sub: "?–233 BC", s: "Legalism", row: 4 },
  { name: "Li Si", sub: "chancellor", s: "Legalism", row: 5 },
];
const FATE = {
  Daoism: ["Huang–Lao", "→ Daoism"],
  Confucianism: ["orthodox", "under Han"],
  Legalism: ["drove Qin’s", "unification"],
  Mohism: ["all but died", "out after Qin"],
  Military: ["read as", "manuals"],
};

function SchoolsMap() {
  const top = (r) => ROWS[r].y - NH / 2;
  const bot = (r) => ROWS[r].y + NH / 2;
  const label = (x, y, text) => (
    <g>
      <rect x={x - (text.length * 5.2 + 8) / 2} y={y - 8} width={text.length * 5.2 + 8} height={15} fill="#FBF8F0" />
      <text x={x} y={y + 3.5} textAnchor="middle" fontSize={9} fill={COLORS.inkSoft} style={serif}>{text}</text>
    </g>
  );
  const fateY = 476;
  return (
    <figure style={{ margin: 0, ...cardStyle, padding: "12px 8px" }}>
      <svg viewBox={`0 0 ${MAP_W} 540`} role="img" aria-label="Lineage map of the Hundred Schools: Laozi to Zhuangzi; Confucius to Mencius and Xunzi; Xunzi’s pupils Han Fei and Li Si perfected Legalism, building on Shang Yang; Sun Wu to Sun Bin" style={{ width: "100%", maxWidth: 520, display: "block", margin: "0 auto" }}>
        <defs>
          <marker id="en-schools-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={COLORS.inkSoft} />
          </marker>
        </defs>
        {ROWS.map((r, i) => (
          <g key={r.label}>
            {i > 0 && <line x1={4} y1={r.y - 35} x2={MAP_W - 4} y2={r.y - 35} stroke="#E6DCC2" strokeDasharray="3 3" />}
            <text x={4} y={r.y + 3.5} fontSize={8.5} fill={COLORS.gold} style={serif}>{r.short}</text>
          </g>
        ))}
        <line x1={4} y1={fateY - 12} x2={MAP_W - 4} y2={fateY - 12} stroke={COLORS.mist} />
        <text x={4} y={fateY + 29} fontSize={8.5} fill={COLORS.gold} style={serif}>Later</text>
        {Object.entries(COL_X).map(([s, x]) => (
          <g key={s}>
            <rect x={x - NW / 2} y={6} width={NW} height={22} fill={COLOR[s]} />
            <text x={x} y={21} textAnchor="middle" fontSize={11} fontWeight={700} fill="#FBF8F0" style={serif}>{COL_HEAD[s]}</text>
            <text x={x} y={44} textAnchor="middle" fontSize={9} fill={COLOR[s]} style={serif}>{COL_KEY[s]}</text>
          </g>
        ))}
        <g stroke={COLORS.inkSoft} strokeWidth={1.2} fill="none">
          <line x1={COL_X.Daoism} y1={bot(0)} x2={COL_X.Daoism} y2={top(2) - 1} markerEnd="url(#en-schools-arrow)" />
          <line x1={COL_X.Confucianism} y1={bot(0)} x2={COL_X.Confucianism} y2={top(2) - 1} markerEnd="url(#en-schools-arrow)" />
          <line x1={COL_X.Military} y1={bot(0)} x2={COL_X.Military} y2={top(2) - 1} markerEnd="url(#en-schools-arrow)" />
          <line x1={COL_X.Legalism} y1={bot(2)} x2={COL_X.Legalism} y2={top(4) - 1} markerEnd="url(#en-schools-arrow)" />
          <line x1={COL_X.Confucianism} y1={bot(2) + 1} x2={COL_X.Confucianism} y2={top(3) - 1} strokeDasharray="4 3" markerStart="url(#en-schools-arrow)" markerEnd="url(#en-schools-arrow)" />
          <path d={`M${COL_X.Confucianism},${bot(3)} V${ROWS[5].y} H${COL_X.Legalism - NW / 2 - 1}`} markerEnd="url(#en-schools-arrow)" />
          <line x1={COL_X.Confucianism} y1={ROWS[4].y} x2={COL_X.Legalism - NW / 2 - 1} y2={ROWS[4].y} markerEnd="url(#en-schools-arrow)" />
        </g>
        {label(COL_X.Daoism, 150, "Lao–Zhuang")}
        {label(COL_X.Confucianism, 150, "carried on")}
        {label(COL_X.Military, 150, "descendant")}
        {label(COL_X.Confucianism, 255, "good ⇔ bad")}
        {label(COL_X.Legalism, 290, "theorized law")}
        {label(COL_X.Confucianism, 395, "pupils")}
        {NODES.map((n) => {
          const x = COL_X[n.s];
          const y = ROWS[n.row].y;
          return (
            <g key={n.name}>
              <rect x={x - NW / 2} y={y - NH / 2} width={NW} height={NH} fill="#fff" stroke={COLOR[n.s]} strokeWidth={1.5} />
              <text x={x} y={y - 2} textAnchor="middle" fontSize={11.5} fontWeight={700} fill={COLORS.ink} style={serif}>{n.name}</text>
              <text x={x} y={y + 13} textAnchor="middle" fontSize={7.5} fill={COLORS.inkSoft} style={serif}>{n.sub}</text>
            </g>
          );
        })}
        {Object.entries(FATE).map(([s, lines]) => (
          <g key={s}>
            <rect x={COL_X[s] - NW / 2} y={fateY} width={NW} height={48} fill="none" stroke={COLOR[s]} strokeDasharray="3 2" />
            {lines.map((t, i) => (
              <text key={t} x={COL_X[s]} y={fateY + 20 + i * 14} textAnchor="middle" fontSize={9} fill={COLORS.ink} style={serif}>{t}</text>
            ))}
          </g>
        ))}
      </svg>
      <figcaption style={{ fontSize: 11.5, color: COLORS.mist, marginTop: 8, textAlign: "center" }}>
        Solid arrows show teacher–pupil links or inherited ideas; the dotted line shows opposing views. Dates are approximate and disputed.
      </figcaption>
    </figure>
  );
}

const SCHOOLS = [
  {
    s: "Confucianism", figures: "Confucius, Mencius, Xunzi", books: "Analects, Mencius, Xunzi", key: "Government by virtue, through benevolence (ren) and ritual (li)",
    body: [
      "Confucius took the rites and music of the early Zhou as his ideal and taught government by virtue: rule by gentlemen who had cultivated ren, a caring regard for others, and li, the ritual forms that give it shape as social order. In his lifetime he traveled from Lu to other states seeking office but was never given real power, and in old age he devoted himself to teaching. His sayings and deeds were compiled by his disciples as the Analects.",
      "In the Warring States period Mencius held that human nature is good and argued for the “kingly way” of ruling by virtue rather than force; he even held that a ruler who oppresses the people loses the mandate of Heaven and may rightly be replaced. Xunzi, by contrast, taught that human nature is selfish and must be corrected by education and the norms of ritual. Through his pupils Han Fei and Li Si, this view led into Legalism.",
    ],
    quote: ["What you do not wish for yourself, do not do to others.", "Analects"],
    links: [{ slug: "chunqiu--3" }, { href: "/en/people/chunqiu/confucius", label: "The life of Confucius" }],
  },
  {
    s: "Daoism", figures: "Laozi, Zhuangzi", books: "Laozi (Daodejing), Zhuangzi", key: "Non-action and naturalness — give up contrivance and follow nature",
    body: [
      "Laozi called the source of the cosmos and all things the Dao (“the Way”) and held that the artificial morality and institutions the Confucians preached were themselves the cause of strife. A ruler should do nothing superfluous (wuwei, non-action) and leave the people to their natural ways; his ideal was a small state with few people living simply. Whether Laozi existed, and when, is unclear, and the Laozi is thought to have taken shape over a long time at many hands.",
      "Zhuangzi taught that distinctions such as good and bad, beautiful and ugly, life and death are merely relative, seen from a human standpoint, and described in many fables a free life bound by nothing. Their thought is called “Lao–Zhuang” philosophy; in the early Han it was used in government as “Huang–Lao” thought, and later, merged with popular belief, it became one of the sources of the Daoist religion.",
    ],
    quote: ["The highest good is like water.", "Laozi"],
    links: [],
  },
  {
    s: "Legalism", figures: "Shang Yang, Han Fei, Li Si", books: "The Book of Lord Shang, Han Feizi", key: "Rule by law, with strict rewards and punishments",
    body: [
      "The Legalists held that a state should be governed not by the ruler’s virtue or the people’s morals but by laws applied equally to all, with strict rewards and punishments. Shang Yang, serving Duke Xiao of Qin, pushed through reforms such as mutual responsibility among households and ranks granted for military merit, turning Qin from a backward western state into a great power.",
      "At the end of the Warring States, Han Fei perfected Legalist thought by combining Shang Yang’s “law” with “technique” for controlling ministers and the ruler’s “authority.” Impressed by his writings, King Zheng of Qin (the future First Emperor) invited him, but according to the Records of the Grand Historian he was brought down by his fellow student Li Si and died in prison. As the First Emperor’s chancellor, Li Si built Legalism into the institutions of a unified state: commanderies and counties, standard script, weights and measures, and the burning of the books.",
    ],
    quote: null,
    links: [{ slug: "zhanguo--1" }, { slug: "qin--3" }, { href: "/en/people/zhanguo/shang-yang", label: "Shang Yang" }, { href: "/en/people/qin/li-si", label: "Li Si" }],
  },
  {
    s: "Mohism", figures: "Mozi", books: "Mozi", key: "Universal love and opposition to aggressive war",
    body: [
      "Mozi criticized Confucian love as “love with distinctions” that favored family and those of similar rank, and preached jian’ai — loving all people equally. He opposed wars of aggression (“against attack”) and rejected the lavish funerals and music prized by the Confucians as burdens on the people.",
      "The Mohists were not just a school of thinkers but a tightly disciplined organization, and specialists in defense who would rush to small states under attack to direct the defense of their walls. In the Warring States they were a major force, paired with the Confucians as “Ru and Mo,” but after the unified empires of Qin and Han they declined rapidly and all but disappeared.",
    ],
    quote: ["Promote what benefits the world, and remove what harms it.", "Mozi"],
    links: [],
  },
  {
    s: "Military", figures: "Sun Wu (Sunzi), Sun Bin", books: "The Art of War (Sunzi), Sun Bin’s Art of War", key: "Win without fighting — thinking about war rationally",
    body: [
      "The Military school analyzed victory and defeat not as fate but rationally, from conditions such as intelligence, terrain, supply and morale. The Art of War of Sun Wu, said to have served King Helü of Wu at the end of the Spring and Autumn period, held that the best strategy is to make the enemy yield through diplomacy and stratagem before any fighting.",
      "Sun Bin of the Warring States, said to be Sun Wu’s descendant, defeated Wei at the Battles of Guiling and Maling as strategist of Qi. His treatise was long lost until bamboo slips were found in 1972 in a Han tomb at Yinqueshan in Shandong, reappearing after two thousand years. The Art of War is still read as a business book, and in Japan the warlord Takeda Shingen’s banner, “Swift as the wind, silent as the forest, fierce as fire, immovable as the mountain,” comes from one of its lines.",
    ],
    quote: ["Know the enemy and know yourself, and in a hundred battles you will never be in peril.", "The Art of War"],
    links: [],
  },
];

const OTHERS = [
  { name: "The Diplomatists (School of Vertical and Horizontal Alliances)", figures: "Su Qin, Zhang Yi", text: "Orators who traveled from state to state selling diplomatic strategies. According to the Records of the Grand Historian, Su Qin urged the six states to ally against Qin (the “vertical alliance”), and Zhang Yi urged each to ally with Qin (the “horizontal alliance”), though recent research questions their dates." },
  { name: "The Yin–Yang school", figures: "Zou Yan", text: "Explained all things through yin and yang and the five phases — wood, fire, earth, metal and water. It explained even changes of dynasty as the cycle of the five phases; Qin called itself a dynasty of the “water” virtue. It also influenced Japan’s onmyōdō." },
  { name: "The School of Names (Logicians)", figures: "Gongsun Long, Hui Shi", text: "A school of logic analyzing the relation of words to things. Gongsun Long’s argument that “a white horse is not a horse” (the concept “white horse” is not the same as the concept “horse”) is famous, and became a byword for sophistry." },
  { name: "The Agriculturalists", figures: "Xu Xing", text: "Held farming to be the root of the state and taught that rulers too should till the land alongside the people. Because they rejected the division of labor by rank, Mencius sharply criticized them." },
  { name: "The Eclectics", figures: "Lü Buwei", text: "Combined the teachings of various schools. Their representative work is the Annals of Lü Buwei, compiled by the retainers of Qin’s chancellor Lü Buwei, who boasted he would give a thousand pieces of gold to anyone who could improve a single character." },
];

const COMPARISON = [
  ["Ideal government", "Government by virtue and ritual", "Government by doing nothing (wuwei)", "Government by law and reward and punishment", "Government by universal love and frugality"],
  ["View of human nature", "Mencius: good; Xunzi: bad", "Drop contrivance and live in harmony with nature", "People seek gain and fear punishment", "Everyone can love one another"],
  ["Attitude to Confucians", "—", "Morality is artificial and breeds strife", "Virtue cannot govern a state", "Criticized their “love with distinctions”"],
  ["Adopted by", "Every dynasty from Emperor Wu of Han", "Early Han (Huang–Lao thought)", "Qin", "Never adopted by a state"],
];

const AFTERMATH = [
  { year: "4th c. BC", text: "Scholars are gathered at the Ji Gate of Linzi, the Qi capital; the schools debate at the “Jixia Academy.”" },
  { year: "356 BC", text: "Shang Yang’s reforms: Legalist policies make Qin a great power.", slug: "zhanguo--1" },
  { year: "221 BC", text: "Qin, having adopted Legalist thought, unifies the realm." },
  { year: "213 BC", text: "The burning of the books: writings of schools other than Legalism are suppressed.", slug: "qin--3" },
  { year: "134 BC", text: "On Dong Zhongshu’s proposal Confucianism becomes the orthodox learning of the Han (the so-called adoption of Confucianism as state doctrine).", slug: "westernhan--5" },
  { year: "2nd c.", text: "At the end of the Eastern Han the Way of Great Peace and the Way of the Five Pecks of Rice spread, and the Daoist religion, absorbing Daoist thought, takes shape.", href: "/en/eras/easternhan" },
  { year: "12th c.", text: "Zhu Xi of the Southern Song perfects Neo-Confucianism, later the official interpretation for the civil service examinations.", slug: "southernsong--2" },
];

const FAQ = [
  { q: "Were there really a hundred schools?", a: "“Hundred” just means “many”; there were not literally a hundred. The History of the Former Han’s treatise on literature arranged them into ten schools — Confucians, Daoists, Yin–Yang, Legalists, Logicians, Mohists, Diplomatists, Eclectics, Agriculturalists and storytellers — with the military writers classified separately." },
  { q: "Why did so many thinkers appear in the Spring and Autumn and Warring States periods?", a: "As the Zhou royal house lost authority and the states fought for survival, each sought able men regardless of birth to make itself rich and strong. Thinkers traveled from court to court selling their ideas, and some states, like Qi with its Jixia Academy, gathered and supported scholars." },
  { q: "What is the difference between “human nature is good” and “human nature is bad”?", a: "Both are Confucian. Mencius held that people are born with the sprouts of goodness, such as compassion, and become virtuous by nurturing them. Xunzi held that people are born selfish and must be corrected by education in ritual. Xunzi did not mean that people are wicked — he was stressing the importance of effort and learning." },
  { q: "Which school won in the end?", a: "Qin, which unified the realm, adopted Legalism but fell after fifteen years, partly because its rule was so harsh. Under the Han, Confucianism became the orthodox learning in Emperor Wu’s time, and for over two thousand years stayed at the center of Chinese government and the examinations. In practice, though, Legalist institutions remained in use — hence the saying “Confucian on the outside, Legalist within.”" },
];

export default function EnglishHundredSchoolsPage() {
  const ev = (slug) => findEventEn(slug)?.event || null;
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", headline: title, description, inLanguage: "en", mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/hundred-schools` } };
  return (
    <FeaturePage
      title="The Hundred Schools of Thought"
      jaPath="/hundred-schools"
      intro="In the Spring and Autumn and Warring States periods, the Zhou kings had lost their authority and the rulers of the states competed for supremacy. As each state sought able men regardless of birth to grow rich and strong, thinker after thinker appeared, asking how a state should be governed and how people should live. Together they and their schools are called the “Hundred Schools of Thought.” Confucianism, Daoism, Legalism and the other ideas born here became the foundation of Chinese politics and culture for more than two thousand years, and deeply influenced all of East Asia."
      related={[
        { href: "/en/qinshihuang", label: "Qin Shi Huang" },
        { href: "/en/keju", label: "The imperial examinations" },
        { href: "/en/eras/zhanguo", label: "The Warring States" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Facts heading="The Hundred Schools at a glance" items={FACTS} />

      <Section title="A lineage map of the schools">
        <Paras items={["The thinkers of the five main schools, arranged by period. As Han Fei and Li Si of the Legalists came from among Xunzi’s pupils, the schools were linked by teacher–pupil ties and by criticism of one another."]} />
        <div className="mt-3"><SchoolsMap /></div>
      </Section>

      <Section title="The five main schools">
        <div className="flex flex-col gap-5">
          {SCHOOLS.map((x) => {
            const links = x.links
              .map((l) => (l.slug ? (ev(l.slug) ? { href: `/en/events/${l.slug}`, label: `Read “${ev(l.slug).title}”` } : null) : l))
              .filter(Boolean);
            return (
              <article key={x.s} style={{ ...cardStyle, padding: 14, borderTop: `3px solid ${COLOR[x.s]}` }}>
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <h3 style={{ ...serif, fontSize: 19, fontWeight: 900, color: COLOR[x.s] }}>{x.s === "Military" ? "The Military school" : x.s}</h3>
                  <span style={{ fontSize: 12.5, color: COLORS.gold, ...serif }}>{x.figures}</span>
                </div>
                <p style={{ fontSize: 14, fontWeight: 700, color: COLORS.ink, margin: "6px 0 8px" }}>{x.key}</p>
                <Paras items={x.body} />
                {x.quote && (
                  <blockquote style={{ borderLeft: `3px solid ${COLOR[x.s]}`, padding: "4px 12px", margin: "10px 0", ...serif, fontSize: 15, color: COLORS.ink }}>
                    “{x.quote[0]}” <span style={{ fontSize: 12, color: COLORS.inkSoft, marginLeft: 6 }}>— {x.quote[1]}</span>
                  </blockquote>
                )}
                <div style={{ fontSize: 13, color: COLORS.inkSoft }}><b style={{ color: COLORS.ink }}>Main texts:</b> {x.books}</div>
                {links.length > 0 && (
                  <div className="flex flex-col gap-1" style={{ marginTop: 10, fontSize: 13 }}>
                    {links.map((l) => (
                      <Link key={l.href} href={l.href} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>{l.label} →</Link>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </Section>

      <Section title="Confucians, Daoists, Legalists and Mohists compared">
        <DataTable head={["", "Confucianism", "Daoism", "Legalism", "Mohism"]} rows={COMPARISON} />
      </Section>

      <Section title="Other schools">
        <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
          {OTHERS.map((o) => (
            <ItemCard key={o.name} title={o.name} subtitle={o.figures}>{o.text}</ItemCard>
          ))}
        </div>
      </Section>

      <Section title="What became of the Hundred Schools">
        <Paras items={["The age when “a hundred schools contended” ended with Qin’s unification. The competition between ideas was settled by which school the state adopted."]} />
        <ol style={{ ...cardStyle, listStyle: "none", margin: "12px 0 0", padding: "4px 14px" }}>
          {AFTERMATH.map((a) => {
            const href = a.slug && ev(a.slug) ? `/en/events/${a.slug}` : a.href || null;
            return (
              <li key={a.year} className="flex gap-3" style={{ fontSize: 13.5, lineHeight: 1.75, padding: "6px 0", borderBottom: "1px solid #E6DCC2" }}>
                <span className="shrink-0" style={{ width: 72, ...serif, fontWeight: 700, color: COLORS.vermilion }}>{a.year}</span>
                <span style={{ color: COLORS.inkSoft }}>
                  {a.text}
                  {href && (
                    <>
                      {" "}
                      <Link href={href} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>More</Link>
                    </>
                  )}
                </span>
              </li>
            );
          })}
        </ol>
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
