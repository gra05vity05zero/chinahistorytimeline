import { ERAS, stripRuby } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { EnDynastyFallArticle } from "@/components/en/EnDynastyFall";

const title = "Why Did the Three Kingdoms Fall? Five Reasons Shu, Wei and Wu Ended Under the Jin";
const description =
  "Why did Shu, Wei and Wu all fall, leaving Sima Yan’s Jin to reunify China in 280? The gap in national strength, Shu’s exhaustion after Zhuge Liang, Wu’s succession feud and Sun Hao’s tyranny, the Sima family’s takeover of Wei, and the Jin conquest — with a timeline and comparison table.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/sanguo-fall", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/sanguo-fall", type: "article", image: { title: "Why Did the Three Kingdoms Fall?", subtitle: "Five reasons", seal: "鼎" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ja = (eraId, key) => ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(key))?.slug || null;

const ARTICLE = {
  title,
  description,
  jaPath: "/sanguo-fall",
  h1: "Why Did the Three Kingdoms Fall?",
  meta: "Shu fell: 263 · Wei fell: 265 · Wu fell: 280",
  intro:
    "When the Eastern Han fell in 220, China split into three kingdoms: Wei, Shu and Wu. Yet the age of Cao Cao, Liu Bei, Sun Quan and Zhuge Liang did not end with one of the three conquering the others. Shu fell in 263, Wei in 265 and Wu in 280, and the final winner was the Jin dynasty of the Sima family — once ministers of Wei. Why did the Three Kingdoms fall? Here are the five reasons, with a timeline and a comparison table.",
  related: [
    { href: "/en/eras/sanguo", label: "The Three Kingdoms era" },
    { href: "/en/sanguo-comparison", label: "Wei, Wu and Shu compared" },
    { href: "/en/sanguo-battles", label: "Three Kingdoms battle map" },
    { href: "/en/qin-fall", label: "Why the Qin fell" },
  ],
  factsHeading: "The fall of the Three Kingdoms in brief",
  facts: [
    { q: "In what order?", a: "Shu (263), then Wei (265), then Wu (280). Jin then reunified China." },
    { q: "Who reunified China?", a: "Sima Yan, grandson of Sima Yi. He took the throne from the last Wei emperor, founded the Jin (Western Jin) and conquered Wu in 280." },
    { q: "How long did the era last?", a: "About sixty years, from the founding of Wei in 220 to the fall of Wu in 280." },
    { q: "The five reasons", a: "(1) The gap in national strength (2) Shu’s lack of talent and the drain of the northern campaigns after Zhuge Liang (3) Wu’s succession feud and Sun Hao’s tyranny (4) the Sima family’s takeover of Wei (5) the Jin’s carefully planned conquest." },
  ],
  basics: {
    heading: "The Three Kingdoms: basic facts",
    blocks: [
      {
        h3: "How the three kingdoms formed (220–229)",
        paras: [
          "After the Yellow Turban Rebellion of 184, warlords fought across the Han empire. Cao Cao, master of the north, was defeated by Sun Quan and Liu Bei at the Battle of Red Cliffs in 208, fixing the three-way division. In 220 Cao Cao’s son Cao Pi received the throne from the last Han emperor and founded Wei; Liu Bei proclaimed himself emperor of Shu (Shu Han) at Chengdu in 221, and Sun Quan became emperor of Wu at Jianye (modern Nanjing) in 229.",
        ],
      },
      {
        h3: "When each kingdom fell",
        table: {
          head: ["Kingdom", "Founded", "Fell", "Last emperor", "Ended by"],
          rows: [
            ["Shu (Shu Han)", "221", "263 (42 years)", "Liu Shan", "Wei expedition under Deng Ai and Zhong Hui"],
            ["Wei", "220", "265 (45 years)", "Cao Huan", "Abdication to Sima Yan (founding of Jin)"],
            ["Wu", "222 (emperor from 229)", "280 (58 years)", "Sun Hao", "Jin expedition under Wang Jun, Du Yu and others"],
          ],
        },
      },
      {
        h3: "The last rulers",
        rulers: [
          { name: "Liu Shan (Shu)", reign: "223–263", note: "Liu Bei’s son. His reign of about forty years was the longest of any Three Kingdoms emperor. When Deng Ai’s army reached Chengdu he surrendered, and lived out his life in Luoyang." },
          { name: "Cao Huan (Wei)", reign: "260–265", note: "Set up after the previous emperor, Cao Mao, was killed trying to overthrow Sima Zhao. He yielded the throne to Sima Yan and survived as Prince of Chenliu." },
          { name: "Sun Hao (Wu)", reign: "264–280", note: "Sun Quan’s grandson. He became a tyrant after taking the throne, and surrendered when the Jin armies reached Jianye." },
        ],
      },
    ],
  },
  reasonsHeading: "Five reasons the Three Kingdoms fell",
  reasonsLead:
    "On top of the gap in strength between Wei and the other two (reason 1), Shu and Wu each weakened from within (2 and 3), Wei itself was taken over by the Sima family (4), and the Jin conquest (5) settled the matter.",
  reasons: [
    {
      title: "The overwhelming gap in national strength",
      body: [
        "We imagine three evenly matched rivals, but their strength was very unequal. At the time of their fall, Shu’s registered population was about 940,000 (with just over 100,000 soldiers) and Wu’s about 2.3 million (230,000 soldiers). Wei had about 4.4 million — more than the other two combined. Wei held the whole North China Plain, the heart of the population and agriculture, while Shu was based in the mountain-ringed Sichuan basin and Wu in the still-developing lands south of the Yangtze.",
        "Many people escaped the registers, so the real numbers were higher, but the gap was the same. Shu and Wu could survive only by allying against Wei. Yet in 219 Wu seized Jing province and killed Guan Yu, and in 222 Liu Bei was crushed at Yiling. Shu lost its second route north, and the two-pronged advance at the heart of Zhuge Liang’s strategy became impossible.",
      ],
    },
    {
      title: "Shu’s lack of talent and the drain of the northern campaigns",
      body: [
        "After Liu Bei’s death, Shu was held together by the chancellor Zhuge Liang. From 228 he launched five northern campaigns against Wei, but was blocked by Sima Yi and others, and died in camp at Wuzhang Plains in 234. Jiang Wan and Fei Yi then put recovery first and avoided major wars, but after Fei Yi was assassinated in 253 the general Jiang Wei resumed the northern campaigns again and again.",
        "Feeding 100,000 soldiers and campaigning almost yearly was a heavy burden for a state of under a million people; the historian Chen Shou, himself from Shu, judged that Jiang Wei “toyed with his troops and abused his army.” At court, Liu Shan trusted the eunuch Huang Hao, who began to meddle in government. Once the generation Liu Bei had brought from Jing province passed away, Shu never built a way to replace them.",
      ],
    },
    {
      title: "Wu’s succession feud and Sun Hao’s tyranny",
      body: [
        "Sun Quan led Wu for over fifty years but made a great mistake in old age. When Crown Prince Sun Deng died in 241, the court split between the new crown prince, Sun He, and his equally favored brother Sun Ba (the Two Palaces Affair). The great general Lu Xun, who defended Sun He, died in anguish after repeated rebukes in 245, and in 250 Sun Quan deposed Sun He and ordered Sun Ba to kill himself. Wu lost many senior ministers and was left with a child heir, Sun Liang.",
        "After Sun Quan’s death in 252, powerful regents killed one another and even deposed an emperor. Sun Hao, enthroned in 264, raised hopes at first but went on to execute ministers who criticized him, used gruesome punishments such as flaying faces and gouging eyes, and burdened the people with palace building. When the Jin armies came, many Wu soldiers surrendered or scattered without a fight.",
      ],
    },
    {
      title: "The Sima family’s takeover of Wei",
      body: [
        "Wei, the strongest of the three, also fell from within. After Cao Cao, Cao Pi and Cao Rui, the eight-year-old Cao Fang came to the throne in 239, and his regents Cao Shuang and Sima Yi became rivals. In 249, while Cao Shuang was away from the capital with the emperor, Sima Yi staged a coup (the Incident at the Gaoping Tombs), executed Cao Shuang’s clan and took power.",
        "After Sima Yi, his son Sima Shi deposed Cao Fang, and under his second son Sima Zhao the emperor Cao Mao — declaring that “Sima Zhao’s intentions are known to every passer-by” — led his guards against him in 260 and was killed. The Sima did to Wei what Cao Cao had done to the Han. The Cao had kept their own princes weak and away from the capital, so no member of the imperial clan could stop them. In 265 Sima Yan accepted the abdication of Cao Huan and founded the Jin; Wei ended without a battle.",
      ],
    },
    {
      title: "The Jin’s carefully planned conquest",
      body: [
        "In 263 Sima Zhao sent Zhong Hui and Deng Ai against Shu. While Jiang Wei held Zhong Hui’s main army at the pass of Jiange, Deng Ai crossed some 700 li of trackless mountains from Yinping, appeared before Chengdu and defeated Zhuge Liang’s son Zhuge Zhan at Mianzhu. Shu still had troops and cities, but Liu Shan surrendered without a fight.",
        "Against Wu, the Jin took its time. Yang Hu, commander on the Jing frontier, treated Wu’s people and soldiers generously and won their goodwill, while in Sichuan Wang Jun spent years building a great fleet to sail down the Yangtze. After Yang Hu’s death, six armies including that of Du Yu, whom he had recommended, moved at once in 279; Wang Jun’s fleet burned through the iron chains across the Yangtze and sped to Jianye. In 280 Sun Hao surrendered. Du Yu’s phrase for the advance, “like splitting bamboo,” is still an idiom for unstoppable momentum.",
      ],
    },
  ],
  comparison: [
    ["(1) Gap in strength", "Foundation", "From the start", "Cao Cao, Liu Bei, Sun Quan", "Shu and Wu could resist Wei only as allies"],
    ["(2) Shu after Zhuge Liang", "Accelerant", "From 234", "Zhuge Liang, Jiang Wei, Huang Hao", "Wore down Shu’s strength and weakened its court"],
    ["(3) Wu’s succession feud", "Accelerant", "From 241", "Sun Quan, Sun He, Sun Hao", "Lost senior ministers; people and soldiers turned away"],
    ["(4) Rise of the Sima", "Turning point", "249 (Gaoping Tombs)", "Sima Yi, Sima Zhao, Sima Yan", "Wei was taken from within and became Jin"],
    ["(5) The Jin conquest", "Trigger", "263 and 279", "Deng Ai, Yang Hu, Wang Jun", "Destroyed Shu and Wu and reunified China"],
  ],
  chronology: {
    heading: "Timeline: from three kingdoms to one",
    lead: "The sixty years from the founding of Wei to the fall of Wu. The three were balanced at first; after Zhuge Liang’s death and the Gaoping Tombs coup, everything was decided in the last thirty years. Events after Zhuge Liang’s death are marked in red.",
    items: [
      { y: "220", text: "Cao Pi receives the throne from the last Han emperor and founds Wei. The Eastern Han ends." },
      { y: "221", text: "Liu Bei becomes emperor at Chengdu (Shu Han). The next year he is crushed by Lu Xun of Wu at Yiling." },
      { y: "223", text: "Liu Bei dies at Baidicheng. Liu Shan succeeds and entrusts the state to Zhuge Liang." },
      { y: "229", text: "Sun Quan proclaims himself emperor; there are now three emperors." },
      { y: "234", text: "Zhuge Liang dies at Wuzhang Plains on his fifth northern campaign.", late: true },
      { y: "241", text: "Wu’s crown prince Sun Deng dies; the Two Palaces Affair over Sun He and Sun Ba begins.", late: true },
      { y: "249", text: "In Wei, Sima Yi stages the Gaoping Tombs coup, destroys Cao Shuang and takes power.", late: true },
      { y: "252", text: "Sun Quan dies. Wu’s regents begin killing one another.", late: true },
      { y: "260", text: "The Wei emperor Cao Mao is killed trying to strike down Sima Zhao.", late: true },
      { y: "263", text: "Wei invades Shu; Deng Ai reaches Chengdu. Liu Shan surrenders and Shu falls.", late: true },
      { y: "264", text: "Zhong Hui rebels in Shu with Jiang Wei; both are killed. In Wu, Sun Hao takes the throne.", late: true },
      { y: "265", text: "Sima Yan accepts the abdication of Cao Huan and founds the Jin. Wei ends.", late: true },
      { y: "280", text: "Jin armies, launched the previous year, reach Jianye; Sun Hao surrenders. Wu falls and Jin reunifies China.", late: true },
    ],
  },
  whatIf: {
    heading: "What if Zhuge Liang had lived longer?",
    paras: [
      "Zhuge Liang died at fifty-three. His rival Sima Yi lived into his seventies and launched the Gaoping Tombs coup at seventy. Had Zhuge Liang lived fifteen more years, Huang Hao might never have disrupted Shu’s government, and Shu might have exploited the power struggle in Wei.",
      "But the gap in strength (reason 1) was more than one man could close. In five campaigns Shu never took Chang’an, and supply problems forced it back again and again; Chen Shou judged that “adapting to changing circumstances in war was not his strength.” A longer life would more likely have meant a somewhat longer-lived Shu than a reunified China.",
      "What decided the fate of the Three Kingdoms was less one genius’s lifespan than the size of each state and how power was passed to the next generation — and at that the Sima, who handed power down through Sima Yi, Sima Shi, Sima Zhao and Sima Yan, were the most skilled. (This section is informed speculation based on the sources.)",
    ],
  },
  after: {
    heading: "What happened after the Three Kingdoms?",
    paras: [
      "The peace of the reunified Jin did not last. Learning from Wei’s mistake, Sima Yan made his relatives kings in the provinces and gave them troops — but after his death the princes fought one another in the War of the Eight Princes (291–306). The northern and western peoples they had brought in as soldiers broke away; in 311 the capital Luoyang fell to a Xiongnu army, and in 316 the Western Jin collapsed, just thirty-six years after reunification. China entered nearly three centuries of division.",
    ],
    cards: [
      ["Records and Romance", "Chen Shou, a Shu man who served the Jin, wrote the official Records of the Three Kingdoms; over a thousand years later the Ming novel Romance of the Three Kingdoms retold the story with Shu as the rightful dynasty."],
      ["A model for abdication", "The pattern of Han to Wei to Jin — forcing an emperor to “yield” the throne — was repeated by later dynasties, including the founders of the Sui and Tang."],
      ["The rise of the south", "Wu’s capital on the lower Yangtze spurred the development of the south, which grew into China’s economic center in later centuries."],
      ["The danger of princes", "Wei’s mistake of making the imperial clan too weak and Jin’s of making it too strong became lessons for every dynasty that followed."],
    ],
  },
  summary: [
    "The Three Kingdoms fell in the order Shu (263), Wei (265) and Wu (280), and Sima Yan’s Jin reunified China. Wei’s population exceeded that of Shu and Wu combined, and after losing Jing province Shu had little chance (the foundation); after Zhuge Liang, the northern campaigns and a lack of talent exhausted Shu, while the Two Palaces Affair and Sun Hao’s tyranny turned Wu’s ministers and people away (accelerants); the Gaoping Tombs coup moved power in Wei to the Sima (the turning point); and Deng Ai’s daring march and Wang Jun’s fleet ended it “like splitting bamboo” (the trigger).",
    "The empire the heroes of the Three Kingdoms fought for went to none of their descendants. And the Sima, who took Wei the way Cao Cao had taken the Han, lost the empire just thirty-six years after reunification. More than victories on the battlefield, it was the gap in strength and the handing of power to the next generation that decided the fate of the Three Kingdoms.",
  ],
  faq: [
    { q: "Which of the Three Kingdoms fell first?", a: "Shu (Shu Han). In 263 the Wei general Deng Ai reached Chengdu and Liu Shan surrendered. Wei gave way to the Jin in 265, and Wu fell in 280, ending the era." },
    { q: "Who unified the Three Kingdoms?", a: "None of the three: it was Sima Yan, first emperor of the Jin (Western Jin). His grandfather Sima Yi took power in Wei, his father Sima Zhao conquered Shu, and Sima Yan took the throne from Wei and conquered Wu in 280." },
    { q: "Was Liu Shan to blame for the fall of Shu?", a: "He did favor the eunuch Huang Hao late in life and surrendered while Shu could still fight. But some argue that Shu, with a fifth of Wei’s population, lasted as long as it did because Liu Shan trusted Zhuge Liang and others for some forty years. His famous reply in Luoyang that he was “too happy here to think of Shu” may have been an act to stay alive." },
    { q: "How long did the Three Kingdoms period last?", a: "Usually about sixty years, from the founding of Wei in 220 to the fall of Wu in 280. Some count from the Yellow Turban Rebellion (184) or the Battle of Red Cliffs (208)." },
  ],
  relatedSlugs: [ja("sanguo", "魏の建国"), ja("sanguo", "蜀漢の建国"), ja("sanguo", "呉の建国"), ja("sanguo", "五丈原"), ja("sanguo", "蜀漢の滅亡"), ja("westernjin", "西晋の建国"), ja("westernjin", "再統一")],
};

export default function EnglishSanguoFallPage() {
  return <EnDynastyFallArticle a={ARTICLE} />;
}
