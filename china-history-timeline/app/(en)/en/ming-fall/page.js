import { ERAS, stripRuby } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { EnDynastyFallArticle } from "@/components/en/EnDynastyFall";

const title = "Why Did the Ming Dynasty Fall? Five Reasons It Collapsed After 276 Years";
const description =
  "Why did the Ming, founded by Zhu Yuanzhang, fall in 1644? The Wanli Emperor’s withdrawal and the eunuch Wei Zhongxian, the Donglin factional strife, bankruptcy from the three great campaigns and extra levies, the rise of the Later Jin (Qing), and Little Ice Age famine and Li Zicheng’s rebellion — with a timeline and comparison table.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/ming-fall", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/ming-fall", type: "article", image: { title: "Why Did the Ming Fall?", subtitle: "Five reasons", seal: "明" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ja = (eraId, key) => ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(key))?.slug || null;

const ARTICLE = {
  title,
  description,
  jaPath: "/ming-fall",
  h1: "Why Did the Ming Dynasty Fall?",
  meta: "Founded: 1368 · Fell: 1644 · Capital: Nanjing, then Beijing",
  intro:
    "In 1368 Zhu Yuanzhang (the Hongwu Emperor), born a poor peasant, drove the Mongol Yuan north and founded the Ming. Under the Yongle Emperor, Zheng He’s great fleets sailed as far as Africa and the Forbidden City rose in Beijing. In 1644 that Ming fell when a peasant rebel army took Beijing and the last emperor, Chongzhen, took his own life — and the one who won China was not the rebels but the Qing from the north. Here are the five reasons the Ming fell, with a timeline and a comparison table.",
  related: [
    { href: "/en/eras/ming", label: "The Ming dynasty" },
    { href: "/en/qing-fall", label: "Why the Qing fell" },
    { href: "/en/eunuchs", label: "Eunuchs in Chinese history" },
    { href: "/en/tyrants", label: "Tyrants and incompetent rulers" },
  ],
  factsHeading: "The fall of the Ming in brief",
  facts: [
    { q: "When did it fall?", a: "In 1644, when Li Zicheng’s rebels took Beijing and the Chongzhen Emperor hanged himself on the hill behind the Forbidden City." },
    { q: "How long did it last?", a: "276 years from 1368. Ming princes resisted in the south as the “Southern Ming” until 1662." },
    { q: "Who brought it down?", a: "Li Zicheng took Beijing, but he was soon defeated by the Qing army allied with Wu Sangui, and China passed to the Qing." },
    { q: "The five reasons", a: "(1) Emperors who abandoned government, and the eunuchs (2) the Donglin factional strife (3) bankruptcy (4) the rise of the Later Jin (Qing) (5) Little Ice Age famine and Li Zicheng’s rebellion." },
  ],
  basics: {
    heading: "The Ming dynasty: basic facts",
    blocks: [
      {
        h3: "Founding and heyday (1368–1449)",
        paras: [
          "Rising out of the Red Turban revolts at the end of the Yuan, Zhu Yuanzhang became emperor at Nanjing in 1368 and drove the Yuan out of Dadu (Beijing). The Hongwu Emperor abolished the post of chief minister to concentrate power in the throne and purged his followers on a massive scale. The third emperor, Yongle, seized the throne from his nephew and moved the capital to Beijing in 1421. The early Ming was strong, but after the emperor was captured by the Mongols in the Tumu Crisis of 1449, it turned to defense.",
        ],
      },
      {
        h3: "The last four Ming emperors",
        rulers: [
          { name: "The Wanli Emperor", reign: "1572–1620", note: "His 48-year reign was the longest of the Ming. Zhang Juzheng’s reforms restored the finances early on, but after Zhang’s death the emperor barely appeared at court for some thirty years." },
          { name: "The Taichang Emperor", reign: "1620", note: "Died suddenly just a month after his accession, right after taking a red pill presented to him (the Red Pill Case)." },
          { name: "The Tianqi Emperor", reign: "1620–1627", note: "Loved carpentry and left government to the eunuch Wei Zhongxian. Died of illness at twenty-two." },
          { name: "The Chongzhen Emperor", reign: "1627–1644", note: "Brought down Wei Zhongxian and worked hard at government, but was deeply suspicious, replacing and executing ministers one after another. Killed himself the day Beijing fell." },
        ],
      },
      {
        h3: "The fall of the Ming (1644)",
        paras: [
          "In the third lunar month of 1644, as Li Zicheng’s army approached Beijing, the defenders — unpaid for months — opened the gates almost without a fight. The Chongzhen Emperor rang the bell to summon his ministers, but no one came. He ordered the empress to kill herself, struck at his daughter with a sword, and hanged himself on Meishan (today’s Jingshan) north of the Forbidden City. He was thirty-three. With that, the Ming fell.",
        ],
      },
    ],
  },
  reasonsHeading: "Five reasons the Ming fell",
  reasonsLead:
    "On a foundation of political paralysis (reasons 1 and 2) and bankruptcy (3) going back to the Wanli reign, the war with the Qing in the north (4) drained the state, and famine caused by a colder climate produced Li Zicheng’s rebellion (5). This is why the official History of Ming, compiled under the Qing, said that “the Ming truly fell under Shenzong” — the Wanli Emperor.",
  reasons: [
    {
      title: "Emperors who abandoned government, and the eunuch Wei Zhongxian",
      body: [
        "Because the Hongwu Emperor had abolished the chief minister, the Ming state stopped whenever the emperor himself did not drive it. After fifteen years of quarrelling with his officials over whether his eldest son or the son of his favorite, Consort Zheng, should succeed him, the Wanli Emperor almost stopped appearing at court for about thirty years. Vacant ministerial and provincial posts went unfilled, while eunuchs sent out to collect mining and commercial taxes earned the people’s hatred.",
        "Under the next emperor, Tianqi, the eunuch Wei Zhongxian monopolized power through the secret police of the Eastern Depot. Officials across the empire built shrines to worship him as a living god, and he was hailed as “Nine Thousand Years” — second only to the emperor’s “Ten Thousand.” When the emperor left government, eunuchs filled the vacuum.",
      ],
    },
    {
      title: "The Donglin and the eunuch faction",
      body: [
        "In 1604 Gu Xiancheng and other dismissed officials began lecturing and criticizing government at the Donglin Academy in Wuxi, and officials who shared their views became known as the Donglin faction. The Donglin are seen as upright reformers who attacked eunuch power and heavy taxes, but they also fiercely purged officials who disagreed with them as an “evil faction.”",
        "When Wei Zhongxian took power, officials opposed to the Donglin gathered around him (the eunuch faction), and from 1625 Donglin officials such as Yang Lian were tortured to death in prison. Even after Chongzhen drove Wei Zhongxian to suicide, the Donglin in turn purged the eunuch faction, and the factional war went on until the end. Even with the Qing and the rebels closing in, court debate was spent attacking the other side.",
      ],
    },
    {
      title: "Bankruptcy from the three great campaigns and the three levies",
      body: [
        "The reserves built up by Zhang Juzheng’s reforms vanished in the Wanli Emperor’s three great campaigns: suppressing a mutiny at Ningxia in 1592, sending armies to Korea against Toyotomi Hideyoshi’s invasions from the same year, and crushing the rebellion of Yang Yinglong in Bozhou from 1597. Together they are said to have cost more than ten million taels of silver; the Korean war alone lasted nearly seven years.",
        "To cover military costs the Ming piled extra levies on the peasants one after another: the Liaodong levy for the war with the Qing (from 1618), a levy for suppressing rebels, and a levy for training troops. With what officials skimmed off, the burden grew still heavier, and peasants who could not pay abandoned their land and became refugees. The refugees joined the rebels, and suppressing the rebels raised taxes again — a vicious circle.",
      ],
    },
    {
      title: "The rise of the Later Jin (Qing) and the burden of the northern frontier",
      body: [
        "In 1616 Nurhaci of the Jurchens (later called Manchus) founded the Later Jin, and in 1619 he crushed a large Ming army at the Battle of Sarhu. The Ming lost most of Liaodong and poured troops and money into the fortresses of Ningyuan and Jinzhou beyond Shanhai Pass. In 1626 Yuan Chonghuan used Western-style cannon to repel Nurhaci at Ningyuan, and Nurhaci died that same year.",
        "But in 1629 Nurhaci’s successor Hong Taiji bypassed Shanhai Pass, crossed the Great Wall and besieged Beijing. The Chongzhen Emperor suspected Yuan Chonghuan of colluding with the enemy, arrested him and in 1630 executed him by the cruelest of punishments — perhaps falling for a Qing ruse to divide them. The Ming had destroyed its most reliable general with its own hands, and Hong Taiji, who renamed his state Qing in 1636, raided the Beijing region again and again.",
      ],
    },
    {
      title: "Little Ice Age famine and Li Zicheng’s rebellion",
      body: [
        "The seventeenth century was one of the coldest stretches of the global “Little Ice Age,” and from the late 1620s drought and locusts struck North China again and again. In Shaanxi, where revolt first flared, people were recorded eating tree bark and even earth. In the 1640s epidemics also swept Beijing and other cities.",
        "Li Zicheng, a courier in Shaanxi’s government post-station system, lost his job when the Chongzhen Emperor cut the post stations to save money, and joined the rebels. Promising to “equalize the land and abolish taxes,” he gathered starving peasants; in 1641 he took Luoyang, killed the Wanli Emperor’s son, the Prince of Fu, and handed out the prince’s grain to the people. Proclaiming the Shun dynasty at Xi’an at the New Year of 1644, he marched straight on Beijing and took the capital in about two months.",
      ],
    },
  ],
  comparison: [
    ["(1) Withdrawal and eunuchs", "Foundation", "From the late 1580s", "Wanli, Tianqi, Wei Zhongxian", "Decision-making stopped; eunuch extortion earned public hatred"],
    ["(2) Factional strife", "Accelerant", "From the 1600s to the end", "Donglin, eunuch faction", "The court could not unite in a crisis"],
    ["(3) Bankruptcy", "Foundation", "From the 1590s", "Wanli, Chongzhen", "Heavy taxes created refugees; soldiers went unpaid"],
    ["(4) Rise of the Later Jin (Qing)", "Turning point", "From 1619 (Sarhu)", "Nurhaci, Hong Taiji, Yuan Chonghuan", "Drained troops and money to the north; lost a great general"],
    ["(5) Famine and Li Zicheng", "Trigger", "From 1628", "Li Zicheng, Zhang Xianzhong", "Starving peasants’ revolt spread and Beijing fell"],
  ],
  chronology: {
    heading: "Timeline: the last seventy years of the Ming",
    lead: "From the Wanli Emperor’s accession (1572) to the Qing entry into Beijing (1644). Cracks in government and finance spread in the first half; in the seventeen years after Chongzhen’s accession the Ming collapsed from the north and from within at the same time. Those later events are marked in red.",
    items: [
      { y: "1572", text: "The Wanli Emperor takes the throne as a boy; Zhang Juzheng’s reforms restore the finances." },
      { y: "1582", text: "Zhang Juzheng dies. The emperor confiscates his family’s property and the reforms are rolled back." },
      { y: "1592", text: "The Ningxia mutiny, and Toyotomi Hideyoshi’s invasion of Korea (to 1598). The Ming sends armies to Korea." },
      { y: "1604", text: "Gu Xiancheng and others revive the Donglin Academy; the Donglin faction is born." },
      { y: "1616", text: "Nurhaci founds the Later Jin." },
      { y: "1619", text: "A great Ming army is crushed by the Later Jin at the Battle of Sarhu.", sub: "Battle of Sarhu" },
      { y: "1620", text: "The Wanli Emperor dies; the Taichang Emperor dies within a month and the Tianqi Emperor takes the throne." },
      { y: "1625", text: "Wei Zhongxian sends Donglin officials to prison and death." },
      { y: "1627", text: "The Chongzhen Emperor takes the throne and drives Wei Zhongxian to suicide. Peasant revolts spread in Shaanxi from the following year.", late: true },
      { y: "1630", text: "Blamed for the siege of Beijing the year before, Yuan Chonghuan is executed.", late: true },
      { y: "1636", text: "Hong Taiji renames his state Qing and proclaims himself emperor.", late: true },
      { y: "1641", text: "Li Zicheng takes Luoyang and kills the Prince of Fu.", late: true },
      { y: "1644 (3rd month)", text: "Li Zicheng takes Beijing and the Chongzhen Emperor hangs himself on Meishan. The Ming falls. (Lunar months.)", late: true, sub: "Fall of the Ming" },
      { y: "1644 (4th month)", text: "Wu Sangui, commander at Shanhai Pass, submits to the Qing and defeats Li Zicheng with Qing troops. The next month the Qing enters Beijing.", late: true },
      { y: "1662", text: "The last Southern Ming emperor, Yongli, is killed by Wu Sangui, ending Ming resistance.", late: true },
    ],
  },
  whatIf: {
    heading: "Was the Chongzhen Emperor the ruler who lost the dynasty?",
    paras: [
      "Chongzhen was one of the hardest-working Ming emperors. He brought down Wei Zhongxian as soon as he took the throne, attended to government almost daily and practiced frugality. Before his death he is said to have written that he was not a ruler who lost his country — it was his ministers who lost it.",
      "Yet he was deeply suspicious. In seventeen years he went through some fifty grand secretaries (the equivalent of chief ministers) and executed many generals and ministers, beginning with Yuan Chonghuan. Fearing criticism, he never decided on peace talks with the Qing that might have eased the burden in the north, and when Li Zicheng approached Beijing he rejected proposals to move the capital to Nanjing.",
      "What Chongzhen inherited was a state whose finances and armies were already failing; it is not clear that even a great ruler could have saved it. But his inability to trust capable people and let them do their work surely hastened the end. (This section includes informed speculation based on the sources.)",
    ],
  },
  after: {
    heading: "What happened after the Ming fell?",
    paras: [
      "In Beijing, Li Zicheng’s army squeezed money out of former Ming officials and quickly lost popular support. Wu Sangui, guarding Shanhai Pass, allied with the Qing regent Dorgon and defeated Li Zicheng together with the Qing army. Claiming to have avenged the Ming, the Qing entered Beijing, brought in the young Shunzhi Emperor and began its rule of China. In the south, Ming princes set up emperors at Nanjing and elsewhere (the Southern Ming), and the family of Zheng Chenggong (Koxinga) on Taiwan held out against the Qing until 1683.",
    ],
    cards: [
      ["Abolishing the extra levies", "On entering Beijing the Qing announced the abolition of the late-Ming extra levies to win over the people; the Kangxi Emperor later decreed that the head tax would never be raised. (A lesson from reason 3.)"],
      ["Barring eunuchs from politics", "The Shunzhi Emperor set up an iron tablet in the palace forbidding eunuchs to interfere in government, and Qing eunuchs almost never held power. (A lesson from reason 1.)"],
      ["Hard-working emperors", "The Kangxi, Yongzheng and Qianlong emperors insisted on governing in person, and Yongzheng created the Grand Council to speed up imperial decisions. (A lesson from reason 1.)"],
      ["What the Qing kept", "The Forbidden City, the examinations, and government through the Grand Secretariat and Six Ministries — much of the Ming framework passed to the Qing."],
    ],
  },
  summary: [
    "The Ming was founded in 1368 and fell in 1644 when Li Zicheng took Beijing, after 276 years. The Wanli Emperor’s withdrawal and Wei Zhongxian’s dominance paralyzed decision-making, and the three great campaigns and extra levies bankrupted the state and created refugees (the foundation); the Donglin factional strife kept the court from uniting (the accelerant); the war with the Later Jin drained the state and cost it Yuan Chonghuan (the turning point); and Little Ice Age famine spread Li Zicheng’s rebellion until Beijing fell (the trigger).",
    "Li Zicheng destroyed the Ming, but it was the Qing who took China. The Ming faced two enemies at once — the Qing in the north and rebellion at home — and in the fifty years since Wanli it had lost the financial and political strength to meet either. The five reasons show how fragile a system that concentrated all power in the emperor became once the emperor abandoned government.",
  ],
  faq: [
    { q: "Who was the last Ming emperor?", a: "The Chongzhen Emperor (Zhu Youjian). When Li Zicheng’s army took Beijing in 1644, he hanged himself on Meishan (Jingshan) north of the Forbidden City. Ming princes then claimed the throne in the south (the Southern Ming); the last, the Yongli Emperor, was killed in 1662." },
    { q: "Did Li Zicheng or the Qing destroy the Ming?", a: "Li Zicheng took Beijing and drove the Ming emperor to suicide. But his Shun dynasty was defeated by Wu Sangui and the Qing and driven out of Beijing after only about forty days, and it was the Qing who ruled China." },
    { q: "What was the main reason the Ming fell?", a: "It is hard to name just one, but at root, political paralysis and bankruptcy dating from the Wanli reign had left the Ming unable to deal with the Qing in the north and rebellion at home at the same time. Famine from the cooling of the Little Ice Age then made Li Zicheng’s rebellion spread rapidly." },
    { q: "What period of Japanese history was the fall of the Ming?", a: "The early Edo period, under the third shogun Tokugawa Iemitsu. The Southern Ming and Zheng Chenggong asked the shogunate for troops, but none were sent." },
  ],
  relatedSlugs: [ja("ming", "明の建国"), ja("ming", "土木の変"), ja("ming", "文禄"), ja("ming", "李自成"), ja("qing", "北京入城")],
};

export default function EnglishMingFallPage() {
  return <EnDynastyFallArticle a={ARTICLE} />;
}
