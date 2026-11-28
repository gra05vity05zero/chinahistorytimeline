import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, englishPersonPath } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, ItemCard, cardStyle, serif } from "@/components/en/EnFeature";
const title = "18 Best Movies About Chinese History, in Order — and How Accurate They Are";
const description =
  "Hero, Red Cliff, Kingdom, The Last Emperor and more: 18 films set in Chinese history, in the order of the periods they show, with the real events behind each one, what is fact and what is invented, and a historical-accuracy rating.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/history-movies", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/history-movies", image: { title: "Movies About Chinese History", seal: "映" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const slug = (eraId, key) => (key ? ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(key))?.slug || null : null);
// English person page, if the Japanese person (by ja slug) has one
const person = (eraId, jaSlug, label) => {
  const href = englishPersonPath(eraId, jaSlug);
  return href ? { href, label } : null;
};

// Same films and order as the Japanese page (/history-movies): by the period shown on screen. Year = home-country release.
// score: rough historical accuracy (5 = close to the record, 1 = only the setting is historical)
const GROUPS = [
  {
    id: "ancient",
    heading: "Spring and Autumn, Warring States and Qin",
    films: [
      { id: "bokko", title: "A Battle of Wits", original: "墨攻", year: "2006", director: "Jacob Cheung", period: "Warring States", score: 2, setting: "The Mohists’ art of defending cities",
        body: "When the small state of Liang is threatened by a huge Zhao army, a lone Mohist named Ge Li arrives to organize its defense. Based on a Japanese novel by Sakemi Ken’ichi and the manga by Mori Hideki, it was a joint production of China, Japan, Hong Kong and South Korea. The fighting centers on siege engines and clever defenses, which gives a good feel for Warring States warfare.",
        diff: "Liang and Ge Li are invented. But the Mohists really did condemn wars of aggression and specialize in defending the side under attack, and the Mozi still contains chapters on how to hold a city.",
        event: slug("zhanguo", "諸子百家"), era: "zhanguo" },
      { id: "kingdom", title: "Kingdom", original: "キングダム", year: "2019", director: "Shinsuke Sato", period: "Late Warring States (Qin)", score: 2, setting: "The young King Zheng and his half-brother Chengjiao’s revolt",
        body: "A Japanese live-action adaptation of Hara Yasuhisa’s manga. The war orphan Xin meets Ying Zheng, the future First Emperor, and helps him retake the capital Xianyang from his half-brother Chengjiao. Four films had been released by 2024’s The Great General Returns, which reaches the Battle of Mayang and the death of Wang Qi.",
        diff: "Xin is modeled on the Qin general Li Xin, and Yang Duanhe and Wang Qi also appear in the Records of the Grand Historian; Piao and Diao are invented. The real Chengjiao rebelled in 239 BC while leading an army against Zhao, and there is no record of him seizing the capital.",
        event: slug("zhanguo", "戦国の終結"), era: "zhanguo", extra: { href: "/en/kingdom", label: "Kingdom and real history" } },
      { id: "assassin", title: "The Emperor and the Assassin", original: "荊軻刺秦王", year: "1998", director: "Chen Kaige", period: "Late Warring States (Qin)", score: 3, setting: "Jing Ke’s attempt on the King of Qin (227 BC)",
        body: "An epic about King Zheng of Qin as he drives toward unification, the assassin Jing Ke sent from Yan, and the woman from Zhao caught between them. It also weaves in the court scandals recorded in the Records of the Grand Historian, such as Lao Ai’s revolt and the rumor that Lü Buwei was Zheng’s real father.",
        diff: "Jing Ke’s mission for Crown Prince Dan of Yan — approaching the king on the pretext of presenting the head of Fan Yuqi and a map of Dukang — follows the Records’ biographies of assassins. The heroine, and the idea that the king lured an assassin to give himself an excuse to attack Yan, are invented.",
        event: slug("qin", "中国統一"), era: "qin", person: person("qin", "始皇帝", "The First Emperor") },
      { id: "hero", title: "Hero", original: "英雄", year: "2002", director: "Zhang Yimou", period: "Late Warring States (Qin)", score: 1, setting: "Assassins who target the King of Qin",
        body: "A nameless swordsman who claims to have killed three assassins is brought before the King of Qin, and each time his story is retold the truth shifts. Famous for scenes washed in red, blue or white, it helped Chinese wuxia films find a worldwide audience.",
        diff: "Nameless, Broken Sword, Flying Snow and Sky are all fictional; the assassination attempt borrows from Jing Ke. Its ending — sparing the king for the sake of “all under heaven” — drew criticism for seeming to justify conquest in the name of unity.",
        event: slug("qin", "中国統一"), era: "qin" },
    ],
  },
  {
    id: "sanguo",
    heading: "Three Kingdoms and the Northern and Southern Dynasties",
    films: [
      { id: "redcliff", title: "Red Cliff (Parts I and II)", original: "赤壁", year: "2008–2009", director: "John Woo", period: "Late Han / Three Kingdoms", score: 2, setting: "The Battle of Red Cliffs (208)",
        body: "A two-part epic of Liu Bei and Sun Quan joining forces against Cao Cao’s vast army. Built around the friendship of Zhou Yu and Zhuge Liang, it is packed with famous scenes from the novel Romance of the Three Kingdoms: the eight-trigram formation, borrowing 100,000 arrows, and the fire attack waiting on the southeast wind.",
        diff: "The arrows and the summoned wind are inventions of the novel. The film adds its own, too: Sun Quan’s sister Sun Shangxiang spying in Cao Cao’s camp, and Zhou Yu’s wife Xiao Qiao going to Cao Cao alone to buy time. The official Records of the Three Kingdoms suggests disease in Cao Cao’s army was a major reason for his defeat.",
        event: slug("sanguo", "赤壁の戦い"), era: "sanguo", extra: { href: "/en/sanguo-battles", label: "Three Kingdoms battle map" } },
      { id: "guanyu", title: "The Lost Bladesman", original: "関雲長", year: "2011", director: "Alan Mak and Felix Chong", period: "Late Han", score: 2, setting: "Guan Yu’s journey back to Liu Bei (200)",
        body: "Donnie Yen plays Guan Yu, who has surrendered to Cao Cao and now fights his way through one pass after another to return to Liu Bei. The close-quarters fights with his guandao are the highlight.",
        diff: "Guan Yu did surrender to Cao Cao, kill Yan Liang at Baima and then return to Liu Bei. But “crossing five passes and slaying six generals” comes from the novel, and his romance with the woman betrothed to Liu Bei is the film’s own.",
        era: "sanguo", person: person("sanguo", "関羽", "Guan Yu") },
      { id: "mulan", title: "Mulan", original: "Mulan", year: "1998 / 2020", director: "Tony Bancroft and Barry Cook (1998 animation); Niki Caro (2020 live action)", period: "Said to be the Northern Wei", score: 1, setting: "The legend of Hua Mulan",
        body: "A daughter disguises herself as a man to take her aged father’s place in the army. Disney made it into an animated film in 1998 and a live-action film in 2020. The source is the Ballad of Mulan, a folk song of the Northern Dynasties, long familiar in China through opera and television.",
        diff: "Whether Mulan existed is unknown. The ballad calls the ruler “khagan” and describes war with northern nomads, so it is usually linked to the Xianbei Northern Wei and its wars with the Rouran. The “Huns” of the animated film and the witch of the live-action version are inventions.",
        event: slug("nanbei", "北魏による華北統一"), era: "nanbei" },
    ],
  },
  {
    id: "tang",
    heading: "Tang, Five Dynasties and Song",
    films: [
      { id: "detective-dee", title: "Detective Dee and the Mystery of the Phantom Flame", original: "狄仁傑之通天帝国", year: "2010", director: "Tsui Hark", period: "Tang (Wu Zetian’s reign)", score: 2, setting: "Wu Zetian’s enthronement (690)",
        body: "On the eve of the coronation of Wu Zetian, China’s only female emperor, officials in Luoyang burst into flame from the inside. The imprisoned Di Renjie is brought back to solve the case. A mystery-wuxia film set around a giant Buddha statue, it was followed by sequels.",
        diff: "Di Renjie was a real chancellor trusted by Wu Zetian; the image of “Judge Dee” the detective comes from the novels of the Dutch diplomat Robert van Gulik. The burning bodies and the giant statue are invented, but Wu Zetian really did raise huge monuments in Luoyang, such as the Bright Hall and the Celestial Axis.",
        event: slug("tang", "武則天"), era: "tang", person: person("tang", "武則天", "Wu Zetian"), extra: { href: "/en/women-rulers", label: "Women who ruled China" } },
      { id: "kukai", title: "Legend of the Demon Cat", original: "妖猫伝", year: "2017", director: "Chen Kaige", period: "Tang (early 9th century)", score: 2, setting: "The Japanese monk Kūkai and the death of Yang Guifei",
        body: "The young Japanese monk Kūkai, in Chang’an with an embassy from Japan, teams up with the poet Bai Juyi to investigate an emperor’s sudden death and a talking black cat — and uncovers the truth about the death of Yang Guifei some fifty years earlier. Based on a novel by Yumemakura Baku, it was a Chinese–Japanese co-production with Chang’an rebuilt as an enormous set.",
        diff: "Kūkai did reach Tang China in 804, and Bai Juyi wrote his Song of Everlasting Sorrow about Emperor Xuanzong and Yang Guifei around the same time — but there is no record that the two ever met. The histories say Yang Guifei was killed at Mawei in 756 during the An Lushan Rebellion; the film’s “truth” is fiction.",
        event: slug("tang", "安史の乱"), era: "tang", person: person("tang", "楊貴妃", "Yang Guifei") },
      { id: "golden-flower", title: "Curse of the Golden Flower", original: "満城尽帯黄金甲", year: "2006", director: "Zhang Yimou", period: "Five Dynasties (set in the Later Tang)", score: 1, setting: "A fictional imperial family torn apart",
        body: "Before the Double Ninth Festival, the emperor is secretly poisoning the empress, and the empress is plotting a rebellion. A tragedy of an imperial family’s secrets, famous for its armies in golden armor and palaces carpeted with chrysanthemums.",
        diff: "The family is fictional, and the story is adapted from Cao Yu’s play Thunderstorm. The Chinese title, “the whole city clad in golden armor,” is a line from a chrysanthemum poem by Huang Chao, the late-Tang rebel.",
        event: slug("wudai", "後唐の建国"), era: "wudai" },
      { id: "great-wall", title: "The Great Wall", original: "長城", year: "2016", director: "Zhang Yimou", period: "Song", score: 1, setting: "A secret army fighting monsters on the Wall",
        body: "European mercenaries who come to China in search of gunpowder join a secret army that fights the Taotie, monsters that attack the Wall every sixty years. A Hollywood–Chinese co-production starring Matt Damon.",
        diff: "The Taotie is a monster motif from Shang and Zhou bronzes, and the story is pure fantasy. Most of the Wall that survives today was built under the Ming; the Song did not carry out major work on it. Gunpowder weapons did begin to be used in battle under the Song.",
        era: "northernsong", extra: { href: "/en/great-wall", label: "The Great Wall of China" } },
    ],
  },
  {
    id: "qing",
    heading: "The Qing dynasty",
    films: [
      { id: "crouching-tiger", title: "Crouching Tiger, Hidden Dragon", original: "臥虎蔵龍", year: "2000", director: "Ang Lee", period: "Qing", score: 1, setting: "A wuxia tale of a stolen sword",
        body: "The legendary sword Green Destiny, given away by the retiring swordsman Li Mu Bai, is stolen in Beijing, and the secret of the aristocrat’s daughter Jen comes to light. Its wire-work fight in the bamboo treetops became famous, and it won the Academy Award for Best Foreign Language Film.",
        diff: "Based on a novel by the Republican-era wuxia writer Wang Dulu, and all its characters are fictional. But the officials’ mansions of Qing Beijing and a Manchu bannerman’s daughter pushed into an arranged marriage reflect the society of the time well.",
        era: "qing" },
      { id: "opium-war", title: "The Opium War", original: "鴉片戦争", year: "1997", director: "Xie Jin", period: "Qing (mid-19th century)", score: 4, setting: "The First Opium War (1840–1842)",
        body: "Lin Zexu is sent to Guangzhou to stamp out opium smuggling, seizes and destroys the British merchants’ opium, and the conflict slides into war. It was made to mark 1997, the year Hong Kong returned from Britain to China.",
        diff: "The main lines follow the record: Lin Zexu destroyed the confiscated opium at Humen in 1839, and the defeated Qing ceded Hong Kong Island in the Treaty of Nanjing. Details of the personal exchanges are dramatized, and the story is told as a chapter of China’s “century of humiliation.”",
        event: slug("qing", "アヘン戦争"), era: "qing", person: person("qing", "林則徐", "Lin Zexu") },
      { id: "warlords", title: "The Warlords", original: "投名状", year: "2007", director: "Peter Chan", period: "Qing (late 19th century)", score: 2, setting: "The Taiping Rebellion and the murder of a viceroy",
        body: "During the Taiping Rebellion, a Qing general and two former bandits swear blood brotherhood and fight together, until ambition and betrayal tear them apart. Starring Jet Li, Andy Lau and Takeshi Kaneshiro.",
        diff: "It grows out of the 1870 assassination of Ma Xinyi, Viceroy of Liangjiang, by Zhang Wenxiang. Because the motive was never made clear, the case became a favorite subject of plays and novels from the late Qing on, and the story of the sworn brothers comes from that tradition.",
        event: slug("qing", "太平天国"), era: "qing" },
      { id: "55-days", title: "55 Days at Peking", original: "55 Days at Peking", year: "1963", director: "Nicholas Ray", period: "Late Qing", score: 3, setting: "The Boxer Uprising and the siege of the legations (1900)",
        body: "A Hollywood epic of the foreign diplomats and soldiers who held out for 55 days in Beijing’s Legation Quarter, besieged by the Boxers and Qing troops, until relief arrived. Charlton Heston starred, and the Japanese officer Lieutenant-Colonel Shiba Gorō was played by Itami Jūzō.",
        diff: "The quarter really was besieged for about two months before an eight-nation force entered Beijing, and Shiba’s leadership in the defense was widely praised. The American officer’s love story is invented, and the film tells events strictly from the Western side.",
        event: slug("qing", "義和団"), era: "qing" },
      { id: "1911", title: "1911", original: "辛亥革命", year: "2011", director: "Zhang Li", period: "Late Qing to Republic", score: 4, setting: "The 1911 Revolution",
        body: "Made for the revolution’s centenary, with Jackie Chan — in his 100th film — as the revolutionary commander Huang Xing. It runs from the failed Huanghuagang uprising through the Wuchang Uprising and Sun Yat-sen’s inauguration as provisional president to the bargaining with Yuan Shikai.",
        diff: "The sequence of events stays close to history, down to details such as Sun Yat-sen hearing of the Wuchang Uprising while in the United States. But it casts Sun and Huang as heroes and gives the Qing court and Yuan Shikai little more than a sketch.",
        event: slug("qing", "辛亥革命"), era: "qing", person: person("qing", "孫文", "Sun Yat-sen") },
    ],
  },
  {
    id: "modern",
    heading: "Modern China",
    films: [
      { id: "last-emperor", title: "The Last Emperor", original: "The Last Emperor", year: "1987", director: "Bernardo Bertolucci", period: "Late Qing to the People’s Republic", score: 4, setting: "The life of Puyi, the last Qing emperor (1906–1967)",
        body: "Puyi is enthroned at two, abdicates in the 1911 Revolution but goes on living in the Forbidden City, becomes emperor of Manchukuo, spends the postwar years in a prison camp as a war criminal and ends his life as an ordinary citizen. It was the first Western film allowed to shoot inside the Forbidden City, and won nine Academy Awards including Best Picture.",
        diff: "Based on Puyi’s autobiography among other sources, its overall course is accurate. It does lean toward showing Puyi in Manchukuo as a victim used by Japan. Amakasu Masahiko, played by Sakamoto Ryūichi, shoots himself in the film; the real Amakasu took cyanide in 1945.",
        event: slug("roc", "満洲事変"), era: "roc", person: person("roc", "溥儀", "Puyi"), extra: { href: "/en/emperors", label: "Emperors of China" } },
      { id: "farewell", title: "Farewell My Concubine", original: "覇王別姫", year: "1993", director: "Chen Kaige", period: "Republic to the Cultural Revolution", score: 3, setting: "Fifty years in the lives of two opera actors (1920s–1970s)",
        body: "Two actors raised in a Peking opera school become stars playing the parting of Xiang Yu and Lady Yu in Farewell My Concubine, only to be torn apart by the war with Japan, the civil war, the founding of the People’s Republic and the Cultural Revolution. It won the Palme d’Or at Cannes.",
        diff: "The leads are fictional, but the background — the brutal training of opera schools, performing under Japanese occupation, traditional actors being denounced at struggle sessions in the Cultural Revolution — reflects history closely. It was briefly banned in China. The opera within the film depicts the Battle of Gaixia in the Chu–Han Contention.",
        event: slug("prc", "文化大革命"), era: "prc", extra: { href: "/en/chuhan-battles", label: "Chu–Han Contention battle map" } },
    ],
  },
];

const ALL_FILMS = GROUPS.flatMap((g) => g.films);
const byId = new Map(ALL_FILMS.map((f) => [f.id, f]));

const PICKS = [
  { label: "To learn the history", ids: ["last-emperor", "1911", "opium-war"] },
  { label: "For Three Kingdoms fans", ids: ["redcliff", "guanyu"] },
  { label: "The First Emperor’s age", ids: ["assassin", "kingdom", "hero"] },
  { label: "For visuals and wuxia", ids: ["hero", "crouching-tiger", "golden-flower"] },
];

const FAQ = [
  { q: "Which movie about Chinese history is the most accurate?", a: "On this page the most accurate are The Last Emperor, based partly on Puyi’s own autobiography; 1911, which follows the course of the revolution; and The Opium War, centered on Lin Zexu. All three show modern events, for which the records are rich. Among films about ancient China, The Emperor and the Assassin, built on the story of Jing Ke in the Records of the Grand Historian, is comparatively close to the sources." },
  { q: "Are the Three Kingdoms movies historically accurate?", a: "Most Three Kingdoms films are based not on the official Records of the Three Kingdoms but on the Ming-dynasty novel Romance of the Three Kingdoms. Many of the famous scenes in Red Cliff and The Lost Bladesman come from the novel or are the filmmakers’ own. Watch them as a way in, then look up how the official history differs." },
  { q: "How accurate is the live-action Kingdom?", a: "Ying Zheng (the future First Emperor), Li Xin, Wang Qi and Yang Duanhe were real, and so is the broad story of Qin conquering the other six states. But Xin’s background, his friendship with Piao and the details of the battles are almost entirely invented — the histories say very little about Li Xin." },
  { q: "Are Hero and Curse of the Golden Flower true stories?", a: "Both are Zhang Yimou films, and their assassins and imperial family are fictional. Hero borrows from Jing Ke’s attempt on the King of Qin, and Curse of the Golden Flower from Cao Yu’s play Thunderstorm. Enjoy them as wuxia and court drama in a historical setting." },
];

const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

function Stars({ score }) {
  return (
    <span aria-label={`Accuracy ${score} out of 5`} style={{ color: COLORS.vermilion, letterSpacing: 1 }}>
      {"★".repeat(score)}
      <span style={{ color: COLORS.mist }}>{"★".repeat(5 - score)}</span>
    </span>
  );
}

function FilmCard({ f }) {
  return (
    <div id={f.id} style={{ ...cardStyle, padding: "14px 16px", scrollMarginTop: 16 }}>
      <div className="flex items-baseline justify-between gap-x-3 flex-wrap">
        <h3 style={{ ...serif, fontSize: 17, fontWeight: 700, color: COLORS.ink }}>{f.title}</h3>
        <span style={{ ...serif, fontSize: 12, color: COLORS.gold }}>{f.year}</span>
      </div>
      <div style={{ fontSize: 12.5, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 4 }}>
        Original title: {f.original} · Director: {f.director}
      </div>
      <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ fontSize: 13, marginTop: 6 }}>
        <span><strong style={{ color: COLORS.gold, marginRight: 4 }}>Period</strong>{f.period}</span>
        <span><strong style={{ color: COLORS.gold, marginRight: 4 }}>Accuracy</strong><Stars score={f.score} /></span>
      </div>
      <p style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>{f.setting}</p>
      <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>{f.body}</p>
      <div style={{ marginTop: 10, padding: "8px 10px", backgroundColor: "#F3ECD9", fontSize: 13, lineHeight: 1.75, color: COLORS.inkSoft }}>
        <span style={{ fontWeight: 700, color: COLORS.gold, marginRight: 6 }}>Fact vs. fiction</span>
        {f.diff}
      </div>
      <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ marginTop: 10, fontSize: 13 }}>
        <Link href={f.event ? `/en/events/${f.event}` : `/en/eras/${f.era}`} style={linkStyle}>{f.event ? "Read the real event" : "About this era"} →</Link>
        {f.person && <Link href={f.person.href} style={linkStyle}>{f.person.label} →</Link>}
        {f.extra && <Link href={f.extra.href} style={linkStyle}>{f.extra.label} →</Link>}
      </div>
    </div>
  );
}

export default function EnglishHistoryMoviesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <FeaturePage
      title="Movies About Chinese History"
      jaPath="/history-movies"
      intro="The films best suited to learning real Chinese history are those about the modern era, such as The Last Emperor, 1911 and The Opium War. Epics about ancient China like Hero and Red Cliff are built on history but invent much of their story. This page lists 18 films set in Chinese history, from the Warring States to the Cultural Revolution, in the order of the periods they show, with the real events behind each one and what is fact and what is fiction."
      related={[
        { href: "/en/dramas", label: "Chinese historical dramas" },
        { href: "/en/kingdom", label: "Kingdom and real history" },
        { href: "/en/four-great-novels", label: "The Four Great Classical Novels" },
        { href: "/en/wuxia-games", label: "Wuxia and myth games" },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ ...cardStyle, padding: "12px 14px", marginBottom: 12, fontSize: 13.5, lineHeight: 1.8, color: COLORS.inkSoft }}>
        {PICKS.map((p) => (
          <div key={p.label}>
            <strong style={{ color: COLORS.gold }}>{p.label}:</strong>{" "}
            {p.ids.map((id, i) => (
              <span key={id}>
                {i > 0 && ", "}
                <a href={`#${id}`} style={linkStyle}>{byId.get(id).title}</a>
              </span>
            ))}
          </div>
        ))}
        <div style={{ marginTop: 6, fontSize: 12.5 }}>The accuracy rating (out of five stars) is this site’s rough guide, based on whether the main characters were real, whether the main events happened, and whether the sequence follows the record. Years are home-country release years.</div>
      </div>

      <Section title="All 18 films in historical order">
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, lineHeight: 1.6 }}>
            <thead>
              <tr style={{ color: COLORS.gold, textAlign: "left", borderBottom: `1px solid ${COLORS.mist}` }}>
                <th style={{ padding: "6px 6px 6px 0" }}>Film</th>
                <th style={{ padding: 6 }}>Setting</th>
                <th style={{ padding: 6, whiteSpace: "nowrap" }}>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {ALL_FILMS.map((f) => (
                <tr key={f.id} style={{ borderBottom: `1px solid ${COLORS.mist}`, color: COLORS.inkSoft }}>
                  <td style={{ padding: "6px 6px 6px 0" }}>
                    <a href={`#${f.id}`} style={linkStyle}>{f.title}</a>
                    <span style={{ fontSize: 11, color: COLORS.gold, marginLeft: 4 }}>{f.year}</span>
                  </td>
                  <td style={{ padding: 6 }}>{f.setting}</td>
                  <td style={{ padding: 6, whiteSpace: "nowrap" }}><Stars score={f.score} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {GROUPS.map((g) => (
        <Section key={g.id} id={g.id} title={g.heading}>
          <div className="flex flex-col gap-4">
            {g.films.map((f) => <FilmCard key={f.id} f={f} />)}
          </div>
        </Section>
      ))}

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
