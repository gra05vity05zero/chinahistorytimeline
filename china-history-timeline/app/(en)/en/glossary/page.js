import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, DataTable, cardStyle, serif, isLive, jaEventSlug } from "@/components/en/EnFeature";

const title = "Glossary of Chinese History: Key Terms Explained (Commanderies, Equal-Field System, Two-Tax System and More)";
const description =
  "Key terms of Chinese history explained by theme and in chronological order — government, land, tax and military systems, thought, diplomacy and the economy — with a table of easily confused pairs such as the commandery-county and commandery-kingdom systems, or the zuyongdiao and two-tax systems.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/glossary", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/glossary", image: { title: "Glossary of Chinese History", seal: "辞" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

function resolve(link) {
  if (!link) return null;
  if (link.page) return `/en${link.page}`;
  if (link.event) {
    const s = jaEventSlug(ERAS, stripRuby, ...link.event);
    return s ? `/en/events/${s}` : null;
  }
  if (link.person) {
    for (const era of ERAS) {
      const p = figureEnByJa(era.id, link.person);
      if (p?.href) return p.href;
    }
  }
  return null;
}

const SECTIONS = [
  { id: "politics", title: "Government", terms: [
    { term: "Fengjian (“feudalism”)", era: "Western Zhou", body: "The system by which the Zhou king gave land to kinsmen and meritorious followers as lords, who served the king with tribute and military service. It was bound together by ties of kinship (the zongfa lineage system) and worked differently from European feudalism.", link: { page: "/eras/westernzhou" } },
    { term: "Commandery-county system (junxian)", era: "Qin", body: "Dividing the whole country into commanderies and counties governed directly by officials sent from the center. The First Emperor applied it everywhere after unification, and it became the basic model of centralized rule.", link: { event: ["qin", "郡県制"] } },
    { term: "Commandery-kingdom system (junguo)", era: "Western Han", body: "Direct commandery-county rule around the capital combined with kingdoms granted to imperial kinsmen and others in the provinces — a mix of the commandery and feudal systems. After the Rebellion of the Seven States in 154 BC the kings’ power was cut back, and it came close to a pure commandery system in practice.", link: { event: ["westernhan", "呉楚七国"] } },
    { term: "Nine-rank system (jiupin zhongzheng)", era: "Wei to the Northern and Southern Dynasties", body: "Local “impartial judges” graded men into nine ranks to recommend them for office. In practice the sons of powerful clans were always rated high — “no poor families in the upper grades, no great clans in the lower” — and it produced an aristocracy of great families. The Sui abolished it in favor of the imperial examinations.", link: { page: "/keju" } },
    { term: "Three Departments and Six Ministries", era: "Sui and Tang", body: "The central government of the Secretariat, which drafted edicts; the Chancellery, which reviewed them; and the Department of State Affairs, which carried them out — with six ministries under the last (Personnel, Revenue, Rites, War, Justice and Works). It became the model for Japan’s ritsuryō state.", link: { page: "/eras/tang" } },
    { term: "Military governors (jiedushi)", era: "Tang", body: "Commanders of frontier armies set up for defense. They came to control not only the military but finances and administration, becoming half independent — An Lushan launched his rebellion as one. After the rebellion, regional military governors (fanzhen) held sway across the country and weakened the Tang.", link: { event: ["tang", "安史の乱"] } },
    { term: "Civil supremacy (wenzhi zhuyi)", era: "Song", body: "The policy, born of the warlordism of the late Tang and Five Dynasties, of curbing the military and entrusting government to civil officials chosen by examination. It brought stability at home but weakened the army, one reason the Song suffered at the hands of the Liao and Jin.", link: { event: ["northernsong", "杯酒釈兵権"] } },
    { term: "Eight Banners", era: "Qing", body: "The Manchu military and social organization created by Nurhaci, dividing the army into units under eight colored banners to which soldiers and their families belonged. It was the backbone of Qing rule over China.", link: { page: "/eras/qing" } },
    { term: "Grand Council (junjichu)", era: "Qing", body: "A body directly under the emperor, set up under the Yongzheng Emperor to handle the secret affairs of the war in the northwest. It became the highest organ of government and underpinned imperial autocracy.", link: { page: "/emperors#qing" } },
  ] },
  { id: "land", title: "Land, tax and military systems", terms: [
    { term: "Well-field system (jingtian)", era: "Zhou (legendary)", body: "A system in which land was divided into nine plots like the character 井 (“well”), eight families each farming an outer plot and jointly farming the central plot for the lord. Mencius held it up as an ideal; whether it was ever practiced is doubtful.", link: null },
    { term: "Military-agricultural colonies (tuntian)", era: "Wei", body: "Cao Cao’s system of having soldiers and refugees farm land to secure food supplies. It revived land laid waste by war and laid the foundation for Wei becoming the strongest of the Three Kingdoms.", link: { person: "曹操" } },
    { term: "Equal-field system (juntian)", era: "Northern Wei to Tang", body: "The state allotted land to adult men and others and took it back when they died. Begun in the Northern Wei in 485 under Empress Dowager Feng and continued by the Sui and Tang, it was the model for Japan’s handen shūju system.", link: { page: "/women-rulers#fengtaihou" } },
    { term: "Zuyongdiao tax system", era: "Sui and Tang", body: "The taxes owed by farmers allotted land under the equal-field system: zu in grain, yong in labor at the capital (or silk or cloth instead), and diao in local products such as silk and cloth. It was a tax on persons.", link: { page: "/eras/tang" } },
    { term: "Garrison militia (fubing)", era: "Western Wei to Tang", body: "Soldiers drawn from farmers allotted land under the equal-field system, who supplied their own weapons and food and served in rotation. It was a heavy burden on farmers, and collapsed when the equal-field system broke down.", link: null },
    { term: "Professional army (mubing)", era: "Tang (from the middle period)", body: "Hiring soldiers for pay. It spread from the early 8th century as the militia system collapsed, giving rise to armies of professional soldiers led by the military governors.", link: null },
    { term: "Two-tax system (liangshuifa)", era: "Tang (780)", body: "A tax system introduced on the advice of the chancellor Yang Yan: people paid twice a year, in summer and autumn, where they actually lived, according to how much land and property they held. Taxing property rather than persons, it became the basis of Chinese taxation thereafter.", link: null },
    { term: "Single-whip system (yitiaobianfa)", era: "Ming (16th century)", body: "Combining the many separate land taxes and labor obligations into a single payment in silver. It was made possible by the great inflow of silver from Japan and the Americas, and Zhang Juzheng extended it across the country.", link: null },
    { term: "Combined land and poll tax (didingyin)", era: "Qing (18th century)", body: "Folding the poll tax into the land tax, leaving only a land tax. The Kangxi Emperor froze the poll-tax quota, and under the Yongzheng Emperor the reform spread nationwide. With the poll tax gone, the registered population shot up.", link: { person: "康熙帝" } },
  ] },
  { id: "thought", title: "Thought and learning", terms: [
    { term: "The Hundred Schools of Thought", era: "Spring and Autumn and Warring States", body: "The many thinkers and schools that appeared in an age of war: the Confucians (Confucius, Mencius, Xunzi), Daoists (Laozi, Zhuangzi), Legalists (Shang Yang, Han Fei), Mohists (Mozi), military strategists (Sunzi) and more.", link: { person: "孔子" } },
    { term: "Human nature: good or evil?", era: "Warring States", body: "Mencius held that human nature is good and need only be cultivated; Xunzi that it is evil and must be corrected by ritual. The Legalists Han Fei and Li Si were Xunzi’s students.", link: null },
    { term: "Burning of books and burying of scholars", era: "Qin", body: "The thought control attributed to the First Emperor, who on the advice of the Legalist Li Si had all books except those on medicine, divination and agriculture burned, and is said to have buried alive scholars who criticized him.", link: { event: ["qin", "焚書坑儒"] } },
    { term: "Confucianism made state orthodoxy", era: "Western Han", body: "Emperor Wu, following the advice of Dong Zhongshu, made Confucianism the learning of the state and appointed Erudites of the Five Classics. For two thousand years afterwards it stood at the center of Chinese government and education.", link: { event: ["westernhan", "儒教"] } },
    { term: "Neo-Confucianism (Zhu Xi school)", era: "Southern Song", body: "The new Confucianism brought to completion by Zhu Xi. It held that the world consists of li (principle) and qi (vital force), and stressed deepening knowledge by investigating the principle of things. From the Yuan onward it was the standard for the examinations, and in Japan it became the official learning of the Tokugawa shogunate.", link: { person: "朱熹" } },
    { term: "Wang Yangming school", era: "Ming", body: "The Confucianism founded by Wang Shouren (Wang Yangming), which held that principle lies in the mind itself and that knowing and acting are one (“unity of knowledge and action”). In Japan it influenced Ōshio Heihachirō and the activists of the late Edo period.", link: null },
    { term: "Evidential scholarship (kaozheng)", era: "Qing", body: "The empirical study of the words and contents of old texts on the basis of evidence, founded by Gu Yanwu and others. The Qing’s harsh suppression of political criticism (the literary inquisitions) is said to have been one reason scholars turned away from politics toward textual study.", link: null },
  ] },
  { id: "diplomacy", title: "Diplomacy and the economy", terms: [
    { term: "Tributary (investiture) system", era: "Han to Qing", body: "An international order in which the Chinese emperor gave neighboring rulers titles such as king, establishing a relationship of lord and vassal, and they sent tribute in return. The gold seal given in 57 to the king of Na in Wa by Emperor Guangwu, and the title “King of Wa, Friend of Wei” given to Himiko in 239, belong to this system.", link: { page: "/japan-china-timeline" } },
    { term: "Loose-rein policy (jimi)", era: "Tang", body: "Governing conquered peoples through protectorates that supervised them while leaving actual rule to their own chiefs. It sustained the Tang’s vast territory.", link: { page: "/dynasty-territory-map" } },
    { term: "Maritime trade offices (shibosi)", era: "Tang to Ming", body: "Offices that managed seaborne trade and collected customs duties. First set up at Guangzhou in the Tang, they multiplied in ports across the country in the Song, when sea trade flourished.", link: null },
    { term: "Jiaozi", era: "Northern Song", body: "Paper money first used by merchants in Sichuan and later issued by the state — among the earliest paper currencies in the world, followed by the Southern Song huizi and the Yuan jiaochao.", link: { page: "/eras/northernsong" } },
    { term: "Maritime ban (haijin)", era: "Ming", body: "The policy forbidding private people to trade with foreign countries or put to sea, limiting trade to official tribute missions. Partly a measure against the wokou pirates, it actually increased smuggling, and was relaxed in the late 16th century.", link: null },
    { term: "Tally trade (kangō bōeki)", era: "Ming", body: "The tributary trade between the Ming and the Muromachi shogunate. To distinguish them from pirates, official ships carried matching tallies called kangō. It was begun by Ashikaga Yoshimitsu.", link: { page: "/japan-china-timeline" } },
    { term: "Cohong (gonghang)", era: "Qing", body: "The guild of licensed merchants at Guangzhou that monopolized trade with Europe. In 1757 trade with the West was confined to the single port of Guangzhou. Britain grew increasingly frustrated with these restrictions, and the Cohong was abolished by the Treaty of Nanjing after the Opium War.", link: { event: ["qing", "アヘン戦争"] } },
  ] },
];

const COMPARISONS = [
  ["Commandery-county system (Qin)", "Commandery-kingdom system (Western Han)", "Direct rule everywhere, or a mix with kingdoms in the provinces"],
  ["Zuyongdiao (Sui and Tang)", "Two-tax system (Tang, 780)", "From a tax on persons to a tax on land and property"],
  ["Garrison militia (fubing)", "Professional army (mubing)", "Military service owed by farmers, or soldiers hired for pay"],
  ["Single-whip system (Ming)", "Combined land and poll tax (Qing)", "Taxes combined and paid in silver → then the poll tax abolished, leaving only land tax"],
  ["Zhu Xi school (Southern Song)", "Wang Yangming school (Ming)", "Seek principle in external things, or within the mind"],
];

export default function EnglishGlossaryPage() {
  return (
    <FeaturePage
      title="Glossary of Chinese History"
      jaPath="/glossary"
      intro="Key terms of Chinese history, arranged by theme and in chronological order. Institutions are easier to remember as a sequence — what each kept from the age before and what it changed. Easily confused pairs are compared in the first table."
      related={[
        { href: "/en/quiz", label: "Chinese history quiz" },
        { href: "/en/mnemonics", label: "How to remember the dynasties" },
        { href: "/en/keju", label: "The imperial examinations" },
      ]}
    >
      <nav className="flex flex-wrap gap-x-4 gap-y-2" style={{ fontSize: 14, marginBottom: 24 }}>
        <a href="#compare" style={{ color: COLORS.vermilion }}>Easily confused terms</a>
        {SECTIONS.map((s) => <a key={s.id} href={`#${s.id}`} style={{ color: COLORS.vermilion }}>{s.title}</a>)}
      </nav>

      <Section title="Easily confused terms" id="compare">
        <DataTable head={["Term A", "Term B", "The key difference"]} rows={COMPARISONS} />
      </Section>

      {SECTIONS.map((s) => (
        <Section key={s.id} title={s.title} id={s.id}>
          <div className="flex flex-col gap-2">
            {s.terms.map((t) => {
              const href = resolve(t.link);
              const live = href && isLive(href.split("#")[0]);
              return (
                <div key={t.term} className="px-4 py-3" style={cardStyle}>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink }}>{t.term}</span>
                    <span style={{ fontSize: 12, color: COLORS.gold }}>{t.era}</span>
                  </div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 4 }}>{t.body}</p>
                  {live && <Link href={href} style={{ fontSize: 12.5, color: COLORS.vermilion }}>Related page →</Link>}
                </div>
              );
            })}
          </div>
        </Section>
      ))}
    </FeaturePage>
  );
}
