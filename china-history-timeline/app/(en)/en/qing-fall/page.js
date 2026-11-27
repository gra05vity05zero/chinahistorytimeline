import { ERAS, stripRuby } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { EnDynastyFallArticle } from "@/components/en/EnDynastyFall";

const title = "Why Did the Qing Dynasty Fall? Five Reasons China’s Last Dynasty Ended";
const description =
  "Why did the Qing, China’s last imperial dynasty, fall in 1912? Population explosion and fiscal strain, the Opium Wars and the Western powers, the Taiping Rebellion and the rise of regional armies, the failure of reform, and the 1911 Revolution — with a timeline from the Opium War to Puyi’s abdication and a comparison table.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/qing-fall", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/qing-fall", type: "article", image: { title: "Why Did the Qing Fall?", subtitle: "Five reasons", seal: "清" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ja = (eraId, key) => ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(key))?.slug || null;

const ARTICLE = {
  title,
  description,
  jaPath: "/qing-fall",
  h1: "Why Did the Qing Dynasty Fall?",
  meta: "Founded: 1636 (entered Beijing 1644) · Fell: 1912 · Capital: Beijing",
  intro:
    "The Qing was the last imperial dynasty of China, founded by the Manchus. Under the Kangxi, Yongzheng and Qianlong emperors in the eighteenth century it ruled more territory than China does today, and it is said to have produced nearly a third of the world’s manufactured goods. Yet in the nineteenth century it was shaken from within and without, and in 1912 it ended with the abdication of the six-year-old Xuantong Emperor, Puyi. That was the end not only of a dynasty but of the imperial age that had lasted more than two thousand years since the First Emperor of Qin. Here are the five reasons the Qing fell, with a timeline and a comparison table.",
  related: [
    { href: "/en/eras/qing", label: "The Qing dynasty" },
    { href: "/en/ming-fall", label: "Why the Ming fell" },
    { href: "/en/women-rulers", label: "Empress Dowager Cixi and other women who ruled" },
    { href: "/en/eunuchs", label: "Eunuchs in Chinese history" },
  ],
  factsHeading: "The fall of the Qing in brief",
  facts: [
    { q: "When did it fall?", a: "On 12 February 1912, when the Xuantong Emperor, Puyi, abdicated after the revolution of the previous year." },
    { q: "How long did it last?", a: "276 years from the adoption of the name Qing in 1636, or 268 years from the entry into Beijing in 1644." },
    { q: "Who brought it down?", a: "Sun Yat-sen and the revolutionaries led the revolution, but the man who pressed the emperor to abdicate was Yuan Shikai, a leading Qing minister." },
    { q: "The five reasons", a: "(1) Population explosion and fiscal strain (2) the Opium Wars and the Western powers (3) the Taiping Rebellion and the rise of regional power (4) the failure of reform (5) the revolutionary movement and the 1911 Revolution." },
  ],
  basics: {
    heading: "The Qing dynasty: basic facts",
    blocks: [
      {
        h3: "Founding and golden age (1616–1795)",
        paras: [
          "In 1616 Nurhaci of the Jurchens founded the Later Jin, and his son Hong Taiji renamed it Qing in 1636. When the Ming fell to Li Zicheng’s rebellion in 1644, the Qing passed through Shanhai Pass, entered Beijing and went on to rule all of China. The roughly 130 years of the Kangxi (r. 1661–1722), Yongzheng and Qianlong (r. 1735–1795) emperors are called the “High Qing,” when the empire expanded into Mongolia, Tibet, Xinjiang and Taiwan. Many of China’s present borders derive from the Qing territory of this era.",
        ],
      },
      {
        h3: "The last four Qing emperors",
        rulers: [
          { name: "The Xianfeng Emperor", reign: "1850–1861", note: "The Taiping Rebellion broke out the year after his accession; in 1860 British and French troops occupied Beijing and he fled to Rehe, where he died." },
          { name: "The Tongzhi Emperor", reign: "1861–1875", note: "Son of Xianfeng and Cixi. Enthroned at five, with his mother Cixi governing in his name. Died of illness at eighteen." },
          { name: "The Guangxu Emperor", reign: "1875–1908", note: "Cixi’s nephew. He launched the Hundred Days’ Reform in 1898 but was imprisoned by Cixi, and died suddenly the day before her death (later tests found arsenic in his remains)." },
          { name: "The Xuantong Emperor (Puyi)", reign: "1908–1912", note: "Enthroned at two and abdicated at six, the last emperor of China. He later became emperor of Manchukuo." },
        ],
      },
      {
        h3: "The fall of the Qing (1912)",
        paras: [
          "On 10 October 1911 soldiers of the New Army rose at Wuchang (modern Wuhan), and within about two months most provinces had declared independence from the Qing. On 1 January 1912 the Republic of China was proclaimed at Nanjing with Sun Yat-sen as provisional president. The court entrusted Yuan Shikai with crushing the revolution, but Yuan bargained with the revolutionaries and pressed for the emperor’s abdication on condition that he himself become president. On 12 February the abdication edict was issued in the name of Empress Dowager Longyu, and the Qing came to an end.",
        ],
      },
    ],
  },
  reasonsHeading: "Five reasons the Qing fell",
  reasonsLead:
    "On a foundation of population explosion and fiscal strain behind the golden age (reason 1), the Opium War (2) opened the way for the Western powers, the Taiping Rebellion (3) let regional Han Chinese officials gain power, the failure of reform (4) led people to give up on the dynasty, and the 1911 Revolution (5) brought the end.",
  reasons: [
    {
      title: "Population explosion, fiscal strain and corruption",
      body: [
        "Thanks to the peace of the High Qing and the spread of maize and sweet potatoes from the Americas, China’s population nearly tripled, from about 150 million around 1700 to about 430 million around 1850. But farmland grew far less, and the number of officials and the tax system barely changed, so landless peasants multiplied and local administration could no longer keep up with the population.",
        "In Qianlong’s last years his favorite Heshen amassed a vast fortune through bribery, and corruption spread through officialdom. When the White Lotus Rebellion broke out in 1796, the Qing’s main forces — the Eight Banners and the Green Standard Army — proved useless, and suppressing it took nine years and over 100 million taels. As the nineteenth century began, the Qing was already losing the slack it needed to withstand shocks from abroad.",
      ],
    },
    {
      title: "The Opium Wars and the Western powers",
      body: [
        "Britain bought huge amounts of tea from China and paid for it by smuggling in opium grown in India. By the 1830s great quantities of silver were flowing out of China to pay for opium, and the rising price of silver made taxes heavier for peasants, who paid in silver. In 1839 Lin Zexu seized and destroyed British merchants’ opium at Guangzhou; the next year Britain sent a fleet, and the Opium War began.",
        "Defeated by Britain’s modern warships and guns, the Qing ceded Hong Kong, opened five ports and paid a large indemnity under the Treaty of Nanjing in 1842. In the Arrow War (1856–1860) British and French troops occupied Beijing and burned the Old Summer Palace. Russia took the lands north of the Amur and the Maritime Province, and the Qing lost the right to set its own tariffs and to try foreigners under its own laws (the unequal treaties). The prestige of a dynasty that saw itself as the center of the world was badly damaged.",
      ],
    },
    {
      title: "The Taiping Rebellion and the rise of regional power",
      body: [
        "Hong Xiuquan, who failed the civil service examinations four times, came under Christian influence, declared himself the younger brother of Christ and rose in 1851 under the banner of the “Heavenly Kingdom of Great Peace.” Calling for equal land distribution and rejecting the Manchu queue, the Taiping armies gathered starving peasants, marched north and in 1853 took Nanjing, renaming it the Heavenly Capital. The rebellion lasted fourteen years, and war, famine and disease are said to have killed more than twenty million people — the largest civil war of the nineteenth-century world.",
        "The regular Qing forces were useless; the rebellion was crushed by volunteer armies such as the Xiang Army that the Han Chinese official Zeng Guofan raised in his home province of Hunan, and Li Hongzhang’s Huai Army. They funded themselves with their own local tax (lijin), and their soldiers were loyal to their commanders rather than to the emperor. The dynasty was saved, but real military and fiscal power shifted to regional Han officials — a line that led to Yuan Shikai’s Beiyang Army and later to the warlords of the Republic.",
      ],
    },
    {
      title: "The failure of the Self-Strengthening Movement and the Hundred Days’ Reform",
      body: [
        "After the Taiping, Li Hongzhang and others, under the slogan “Chinese learning as the essence, Western learning for practical use,” built arsenals, shipyards and the modern Beiyang Fleet (the Self-Strengthening Movement). But they left the political system untouched, and in the war of 1894–95 the Beiyang Fleet was destroyed by Japan, which had modernized its institutions in the Meiji Restoration. Under the Treaty of Shimonoseki the Qing ceded Taiwan and owed an indemnity of 200 million taels.",
        "In 1898 the young Guangxu Emperor, advised by Kang Youwei and Liang Qichao, launched a political reform modeled on the Meiji Restoration (the Hundred Days’ Reform). But Cixi, backed by conservatives, staged a coup and the reform ended after just over a hundred days; Guangxu was imprisoned and Tan Sitong and five others were executed. In 1900 Cixi backed the anti-foreign Boxers and declared war on the powers, and an eight-nation army occupied Beijing. Under the Boxer Protocol of the following year the Qing owed an indemnity of 450 million taels — several years of state revenue.",
      ],
    },
    {
      title: "The revolutionary movement and the 1911 Revolution",
      body: [
        "After the Boxer disaster the Qing finally began serious reforms (the New Policies): in 1905 it abolished the 1,300-year-old civil service examinations and promised a constitution and a parliament. But the first cabinet, formed in May 1911, had nine Manchus among its thirteen ministers, seven of them imperial princes — the “Princes’ Cabinet” — disillusioning those who had hoped for constitutional government.",
        "Meanwhile, abroad, Sun Yat-sen founded the Tongmenghui (Revolutionary Alliance) in Tokyo in 1905, calling for the overthrow of the Qing to “expel the Manchus and restore China.” In 1911, when the Qing nationalized railways built with private capital to use them as collateral for foreign loans, a huge protest movement (the Railway Protection Movement) broke out in Sichuan. With troops diverted to suppress it, the New Army at Wuchang rose on 10 October (the 1911 or Xinhai Revolution). The New Army the Qing created to modernize, and the railway nationalization meant to fund modernization, became the dynasty’s undoing.",
      ],
    },
  ],
  comparison: [
    ["(1) Population and fiscal strain", "Foundation", "From the late 18th century", "Qianlong, Heshen", "Left no slack in livelihoods or state finances"],
    ["(2) Opium Wars and the powers", "Turning point", "From 1840", "Lin Zexu, Britain", "Unequal treaties cost sovereignty and prestige"],
    ["(3) Taiping and regional power", "Accelerant", "1851–1864", "Hong Xiuquan, Zeng Guofan, Li Hongzhang", "Devastated the land; military and fiscal power moved to the provinces"],
    ["(4) Failure of reform", "Accelerant", "1860s–1901", "Cixi, Guangxu, Kang Youwei", "Defeats by Japan and in the Boxer War; people gave up on the dynasty"],
    ["(5) The 1911 Revolution", "Trigger", "1911–1912", "Sun Yat-sen, Yuan Shikai", "Provinces seceded and the emperor abdicated"],
  ],
  chronology: {
    heading: "Timeline: from the Opium War to the fall",
    lead: "The seventy years from the Opium War (1840) to the Xuantong Emperor’s abdication (1912). In the seventeen years after the defeat by Japan in 1895, reform to save the dynasty and revolution to overthrow it competed — and revolution won. Events after 1895 are marked in red.",
    items: [
      { y: "1796", text: "The White Lotus Rebellion (to 1804) exposes the weakness of the regular Qing army." },
      { y: "1840", text: "The Opium War begins. Hong Kong is ceded under the Treaty of Nanjing in 1842.", sub: "Opium War" },
      { y: "1851", text: "Hong Xiuquan rises under the banner of the Taiping; Nanjing falls to him in 1853." },
      { y: "1860", text: "In the Arrow War, British and French troops occupy Beijing and burn the Old Summer Palace." },
      { y: "1861", text: "The Xianfeng Emperor dies. Cixi takes power in a coup and governs behind the boy emperor Tongzhi." },
      { y: "1864", text: "The Xiang Army takes the Heavenly Capital (Nanjing) and the Taiping fall. The Self-Strengthening Movement gathers pace." },
      { y: "1895", text: "Defeated by Japan, the Qing cedes Taiwan under the Treaty of Shimonoseki.", late: true, sub: "First Sino-Japanese War" },
      { y: "1898", text: "The Hundred Days’ Reform ends in Cixi’s coup; the Guangxu Emperor is imprisoned.", late: true },
      { y: "1900", text: "The Boxer Uprising. An eight-nation army occupies Beijing and Cixi flees to Xi’an.", late: true },
      { y: "1905", text: "The civil service examinations are abolished. Sun Yat-sen founds the Tongmenghui in Tokyo.", late: true },
      { y: "1908", text: "The Guangxu Emperor and Cixi die a day apart. Two-year-old Puyi becomes the Xuantong Emperor.", late: true },
      { y: "1911", text: "In May, the Princes’ Cabinet and railway nationalization; the Railway Protection Movement erupts in Sichuan, and on 10 October the New Army rises at Wuchang (the 1911 Revolution).", late: true },
      { y: "1912", text: "The Republic of China is proclaimed on 1 January. On 12 February the Xuantong Emperor abdicates and the Qing falls.", late: true, sub: "Fall of the Qing" },
    ],
  },
  whatIf: {
    heading: "What if the Hundred Days’ Reform had succeeded?",
    paras: [
      "The Hundred Days’ Reform was modeled on Japan’s Meiji Restoration. Had Guangxu and Kang Youwei been allowed to continue, might the Qing have survived as a constitutional monarchy like Japan or Britain, with an emperor still on the throne today?",
      "The conditions were far harsher than in Japan. Above the Guangxu Emperor stood Cixi, and the reformers had no army behind them. And because the Qing was a Manchu dynasty, conservatives feared that reform empowering Han Chinese would cost the Manchus their privileges, which made their resistance all the fiercer. In fact Cixi herself pursued reforms much like the 1898 program after 1901 — but, as the Princes’ Cabinet showed, the Manchu princes would not give up power.",
      "What decided the Qing’s fate was less the content of reform than its failure ever to answer the question of who would give up power. Reform came too late and aimed only at preserving the dynasty, so people’s hopes moved outside it, to revolution. (This section is informed speculation based on the sources.)",
    ],
  },
  after: {
    heading: "What happened after the Qing fell?",
    paras: [
      "The fall of the Qing ended more than two thousand years of imperial rule, and the Republic of China was born as one of Asia’s first republics. But Yuan Shikai, as president, suppressed parliament, tried to make himself emperor in 1915, met revolt across the country and died a broken man the next year. China then entered an age of division in which warlords descended from the Beiyang Army fought each other, until Chiang Kai-shek’s Nationalist government achieved a nominal reunification in 1928.",
    ],
    cards: [
      ["Inheriting the Qing’s lands", "In return for generous terms for the abdicated imperial family, the Republic declared that it inherited the Qing’s territory, including Mongolia, Tibet and Xinjiang — the origin of many of China’s border questions today."],
      ["What became of Puyi", "He lived on in the Forbidden City until expelled in 1924, became chief executive (later emperor) of Japan’s puppet state of Manchukuo in 1932, and ended his life as an ordinary citizen of the People’s Republic."],
      ["The end of the queue", "The Manchu queue, imposed by the Qing on all men, was cut off with the revolution and became a symbol of the new age."],
      ["The question of modernization", "How to build a state able to stand up to the powers — the question of the late Qing — passed to the Republic and then to the People’s Republic of 1949."],
    ],
  },
  summary: [
    "The Qing took its name in 1636 and fell in 1912 with the abdication of Puyi, the Xuantong Emperor; it was China’s last dynasty. As the population nearly tripled, finances and administration fell behind and corruption spread (the foundation); defeat in the Opium and Arrow Wars brought unequal treaties and lost sovereignty (the turning point); the Taiping Rebellion devastated the land and shifted military and fiscal power to regional Han officials, and the failure of the Self-Strengthening Movement and the Hundred Days’ Reform, followed by defeat by Japan and the Boxer disaster, led people to give up on the dynasty (accelerants); and in the 1911 Revolution the provinces seceded and Yuan Shikai pressed the emperor to abdicate (the trigger).",
    "Unlike earlier dynasties, the Qing did not fall to internal revolt alone; it fell while confronting a new kind of rival, the industrialized powers. The Han officials’ armies that crushed the Taiping, the New Army built for modernization, the railway nationalization meant to fund reform — the measures taken to save the dynasty became the forces that toppled it. In the end, its inability to change who ran the country as the times changed brought two thousand years of emperors to a close.",
  ],
  faq: [
    { q: "Who was the last Qing emperor?", a: "The Xuantong Emperor, Puyi. He took the throne in 1908 at the age of two and abdicated in 1912 at six, the last emperor in Chinese history. He later became emperor of Japan’s puppet state of Manchukuo, and his life was the subject of the film The Last Emperor." },
    { q: "Who overthrew the Qing?", a: "Sun Yat-sen and the revolutionaries led the movement that toppled the Qing in the 1911 Revolution. But the decisive push came from Yuan Shikai, whom the court had entrusted with crushing the revolution, and who pressed for abdication in exchange for becoming president himself." },
    { q: "What was the main reason the Qing fell?", a: "At root, a rapidly growing population had outstripped the state’s institutions just as the Western powers arrived after the Opium War. The Taiping Rebellion shifted military power to the provinces and reform came too late, so when the 1911 Revolution broke out, the provinces abandoned the Qing one after another." },
    { q: "What period of Japanese history was the fall of the Qing?", a: "The end of the Meiji period — the 45th year of Meiji (1912). The Meiji Emperor died that July and the era changed to Taisho. Many Japanese, such as Miyazaki Toten and Umeya Shokichi, who supported Sun Yat-sen, were involved in the 1911 Revolution." },
  ],
  relatedSlugs: [ja("qing", "康熙帝"), ja("qing", "アヘン戦争"), ja("qing", "太平天国"), ja("qing", "日清戦争"), ja("qing", "義和団"), ja("qing", "辛亥革命"), ja("roc", "中華民国の成立")],
};

export default function EnglishQingFallPage() {
  return <EnDynastyFallArticle a={ARTICLE} />;
}
