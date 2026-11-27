import { ERAS, stripRuby } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { EnDynastyFallArticle } from "@/components/en/EnDynastyFall";

const title = "Why Did the Tang Dynasty Fall? Five Reasons a 290-Year Empire Collapsed";
const description =
  "Why did the Tang, whose capital Chang’an was one of the greatest cities in the world, fall in 907? The An Lushan Rebellion and the independent military governors, eunuch domination, the collapse of the tax system and the salt monopoly, the Niu–Li factional strife, and the Huang Chao rebellion and Zhu Quanzhong’s usurpation — with a timeline and comparison table.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/tang-fall", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/tang-fall", type: "article", image: { title: "Why Did the Tang Fall?", subtitle: "Five reasons", seal: "唐" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ja = (eraId, key) => ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(key))?.slug || null;

const ARTICLE = {
  title,
  description,
  jaPath: "/tang-fall",
  h1: "Why Did the Tang Dynasty Fall?",
  meta: "Founded: 618 · Fell: 907 · Capital: Chang’an",
  intro:
    "The Tang lasted from 618 to 907, and its capital Chang’an, with perhaps a million people, was one of the largest cities in the world. Japanese envoys came to study there and Silk Road merchants gathered in its markets. Yet after the An Lushan Rebellion of 755 the great empire slowly crumbled from within. The Tang survived the rebellion by nearly 150 years — so what was happening all that time? Here are the five reasons the Tang fell, with a timeline and a comparison table.",
  related: [
    { href: "/en/eras/tang", label: "The Tang dynasty" },
    { href: "/en/suitang-battles", label: "Sui and Tang battle map" },
    { href: "/en/eunuchs", label: "Eunuchs in Chinese history" },
    { href: "/en/four-beauties", label: "The Four Beauties" },
  ],
  factsHeading: "The fall of the Tang in brief",
  facts: [
    { q: "When did it fall?", a: "In 907, when Emperor Ai was forced to yield the throne to the military governor Zhu Quanzhong." },
    { q: "How long did it last?", a: "289 years from its founding in 618 — among the longest of China’s unified dynasties, alongside the Han, Ming and Qing." },
    { q: "Who brought it down?", a: "Zhu Quanzhong (Zhu Wen), once a general of the rebel Huang Chao, who defected to the Tang, became a military governor and later founded the Later Liang." },
    { q: "The five reasons", a: "(1) The An Lushan Rebellion and the independent military governors (2) eunuch domination (3) the collapse of the tax system and the salt monopoly (4) the Niu–Li factional strife (5) the Huang Chao rebellion and Zhu Quanzhong’s usurpation." },
  ],
  basics: {
    heading: "The Tang dynasty: basic facts",
    blocks: [
      {
        h3: "Founding and golden age (618–755)",
        paras: [
          "As revolts spread against the misrule of Emperor Yang of Sui, Li Yuan (Emperor Gaozu) founded the Tang at Chang’an in 618. His son Li Shimin (Emperor Taizong) took the throne after killing his brothers in the Xuanwu Gate Incident of 626, and his stable “Reign of Zhenguan” became a model of good government. The state rested on the equal-field system, the zu-yong-diao tax and the militia army, and by the mid-seventh century Tang power reached Central Asia. After the reign of Wu Zetian, the Tang reached its peak under Emperor Xuanzong in the early eighth century.",
        ],
      },
      {
        h3: "Key emperors of the Tang’s decline",
        rulers: [
          { name: "Emperor Xuanzong", reign: "712–756", note: "A great ruler in his early years, he later doted on Yang Guifei, left government to Li Linfu and Yang Guozhong, and brought on the An Lushan Rebellion." },
          { name: "Emperor Xizong", reign: "873–888", note: "Enthroned by eunuchs at eleven, he was devoted to polo and cockfighting. He fled to Chengdu during the Huang Chao rebellion." },
          { name: "Emperor Zhaozong", reign: "888–904", note: "Tried to restore the dynasty but was imprisoned by eunuchs, and finally moved to Luoyang and killed by Zhu Quanzhong." },
          { name: "Emperor Ai", reign: "904–907", note: "Zhaozong’s son, set up by Zhu Quanzhong at twelve and forced to abdicate three years later. He was killed the following year." },
        ],
      },
      {
        h3: "The fall of the Tang (907)",
        paras: [
          "After the Huang Chao rebellion left Chang’an in ruins, the Tang emperors were reduced to pawns of the military governors. The strongest of them, Zhu Quanzhong, moved Emperor Zhaozong to Luoyang in 904 and had him killed, tearing down Chang’an’s palaces and houses for their timber. In 907 Zhu Quanzhong accepted the abdication of Emperor Ai and named his dynasty Liang (the Later Liang). The Tang was over, and the era of the Five Dynasties and Ten Kingdoms began.",
        ],
      },
    ],
  },
  reasonsHeading: "Five reasons the Tang fell",
  reasonsLead:
    "Starting from the independence of the military governors created by the An Lushan Rebellion (reason 1), the Tang weakened over 150 years through the struggles of eunuchs and officials (2 and 4) and a deadlocked treasury (3), until the Huang Chao rebellion and Zhu Quanzhong (5) delivered the final blow.",
  reasons: [
    {
      title: "The An Lushan Rebellion and the independent military governors",
      body: [
        "From the early eighth century the Tang guarded its frontiers with military governors (jiedushi) who controlled both troops and revenue. Xuanzong’s favorite, the Sogdian-Turkic general An Lushan, held three northern governorships with some 180,000 troops, and in 755, using his feud with the chief minister Yang Guozhong as a pretext, he rebelled. After his death his officer Shi Siming and Shi’s son carried on, and only with Uyghur help was the rebellion ended some eight years later (755–763).",
        "The registered population fell from about 53 million before the rebellion to about 17 million just after it. More people probably fled the registers than died, but that meant the state could no longer keep track of its people. Worse, the Tang let surrendering rebel generals stay on as military governors, so the three Hebei provinces of Weibo, Chengde and Lulong became near-independent states that paid no taxes and appointed their own officials. Governors were installed in the interior as well, and the Tang lost the ability to rule the provinces directly.",
      ],
    },
    {
      title: "Eunuch domination",
      body: [
        "No longer able to trust the governors, the emperors turned to the eunuchs around them. In the late eighth century eunuchs were given command of the Shence Army, the strongest force guarding the capital, and with these troops behind them they came to decide who would be emperor. Emperor Xianzong (820) and Emperor Jingzong (826) are said to have been killed by eunuchs, and most ninth-century emperors were put on the throne by them.",
        "In 835 Emperor Wenzong plotted with his confidants to wipe out the eunuchs, but the plan leaked and failed (the Sweet Dew Incident). The troops of the eunuch Qiu Shiliang killed chief ministers and many other officials, and Wenzong lamented that earlier puppet emperors had at least been controlled by mighty lords, while he was controlled by his own household slaves. Emperors could not act freely even inside their own palace until Zhu Quanzhong slaughtered the eunuchs by the hundreds in 903.",
      ],
    },
    {
      title: "The collapse of the tax system and the salt monopoly",
      body: [
        "The early Tang tax, zu-yong-diao, assumed the equal-field system in which the state allotted land to farmers, each of whom paid the same grain, labor and cloth. As the population grew there was not enough land to allot, and as the powerful gathered land into estates the system broke down in the eighth century. The rebellion’s destruction of the registers finished it off, and in 780 the chief minister Yang Yan replaced it with the Two-Tax Law, collected twice a year in summer and autumn according to land and property.",
        "The shortfall was made up by the salt monopoly: the state controlled salt and sold it at high prices, and by the ninth century salt is said to have supplied about half of state revenue. Salt prices rose dozens of times over, and networks of smugglers moving cheap black-market salt grew everywhere. Wang Xianzhi and Huang Chao, who would later shake the Tang, were both salt smugglers. The fix for the treasury bred the very men who would lead the rebellion.",
      ],
    },
    {
      title: "The Niu–Li factional strife",
      body: [
        "In the early ninth century the court was torn for about forty years between the “Niu faction” of Niu Sengru and Li Zongmin and the “Li faction” around Li Deyu. Some see it as a clash between officials who rose through the examinations and those from great families, but in practice personal likes and dislikes, favors and grudges were tangled together, and whichever side took power drove the other into exile in the provinces.",
        "Emperor Wenzong sighed that “it is easy to get rid of the rebels in Hebei, but hard to get rid of the factions at court.” Faced with the great problems of the governors and the eunuchs, the officials could not unite, and both factions at times allied with eunuchs to bring down their rivals. The officials who might have rebuilt the Tang spent their strength on infighting.",
      ],
    },
    {
      title: "The Huang Chao rebellion and Zhu Quanzhong’s usurpation",
      body: [
        "In 875, after years of famine and heavy taxes, the salt smuggler Wang Xianzhi rose in revolt and was joined by Huang Chao, another salt trader who had failed the civil service examinations. Exploiting the reluctance of the governors to fight, the rebels roamed across north and south China, and at the end of 880 they took Luoyang and Chang’an, where Huang Chao proclaimed himself emperor of Qi. Emperor Xizong fled to Chengdu.",
        "The Tang could not retake Chang’an on its own and relied on Li Keyong of the Turkic Shatuo and on Zhu Wen, a general who had defected from Huang Chao. The emperor gave Zhu Wen the name Quanzhong — “perfect loyalty” — and after Huang Chao died in 884, Zhu Quanzhong grew from his base at Bianzhou (modern Kaifeng) into the most powerful governor of all. This “loyal minister” massacred the eunuchs, killed Emperor Zhaozong, had some thirty high officials of noble birth killed and thrown into the Yellow River in 905 (the Baima Massacre), and seized the Tang throne in 907.",
      ],
    },
  ],
  comparison: [
    ["(1) An Lushan and the governors", "Turning point", "755–763 and after", "Xuanzong, An Lushan, Shi Siming", "Lost direct rule of the provinces; governors became independent"],
    ["(2) Eunuch domination", "Foundation", "From the late 8th century", "Qiu Shiliang, Wenzong", "Emperors lost real power; reforms were crushed"],
    ["(3) Taxes and the salt monopoly", "Foundation", "From the 8th century", "Yang Yan, Wang Xianzhi", "Heavier burdens on the people bred the rebels"],
    ["(4) The Niu–Li factions", "Accelerant", "Early 9th century", "Niu Sengru, Li Deyu", "Officials could not unite; recovery was delayed"],
    ["(5) Huang Chao and Zhu Quanzhong", "Trigger", "875–907", "Huang Chao, Zhu Quanzhong, Li Keyong", "Chang’an was ruined and a governor seized the dynasty"],
  ],
  chronology: {
    heading: "Timeline: from the An Lushan Rebellion to the fall",
    lead: "The 150 years from 755 to 907. The Tang held on long after the rebellion, but collapsed in the thirty years after the Huang Chao rebellion (875); those later events are marked in red.",
    items: [
      { y: "745", text: "Xuanzong makes Yang Taizhen his consort (Yang Guifei); her cousin Yang Guozhong later becomes chief minister." },
      { y: "755", text: "An Lushan rebels at Fanyang; the An Lushan Rebellion begins.", sub: "An Lushan Rebellion" },
      { y: "756", text: "Chang’an falls. During the flight, Yang Guifei is killed at Mawei Station and Xuanzong abdicates." },
      { y: "763", text: "Shi Chaoyi dies and the rebellion ends. Surrendering generals are kept on as military governors." },
      { y: "780", text: "The Two-Tax Law replaces zu-yong-diao on Yang Yan’s proposal." },
      { y: "820", text: "Emperor Xianzong, who had brought the governors to heel, is killed by eunuchs." },
      { y: "835", text: "The Sweet Dew Incident: a plot against the eunuchs fails, and many officials are killed." },
      { y: "845", text: "Emperor Wuzong’s great persecution of Buddhism confiscates monastery wealth." },
      { y: "875", text: "Wang Xianzhi rebels and Huang Chao joins him (the Huang Chao rebellion).", late: true },
      { y: "880", text: "Huang Chao takes Luoyang and Chang’an and proclaims himself emperor of Qi. Xizong flees to Chengdu.", late: true },
      { y: "882", text: "Huang Chao’s general Zhu Wen surrenders to the Tang and is given the name Quanzhong.", late: true },
      { y: "883", text: "Li Keyong and others retake Chang’an; Huang Chao dies, cornered, in 884.", late: true },
      { y: "903", text: "Zhu Quanzhong kills hundreds of palace eunuchs.", late: true },
      { y: "904", text: "Zhu Quanzhong moves Zhaozong to Luoyang, kills him and enthrones Emperor Ai.", late: true },
      { y: "905", text: "The Baima Massacre: some thirty high officials are killed and thrown into the Yellow River.", late: true },
      { y: "907", text: "Zhu Quanzhong accepts Emperor Ai’s abdication and founds the Later Liang. The Tang falls.", late: true, sub: "Fall of the Tang" },
    ],
  },
  whatIf: {
    heading: "What if the An Lushan Rebellion had never happened?",
    paras: [
      "The An Lushan Rebellion splits Tang history in two. Had Xuanzong not given An Lushan so many troops, or had he settled the feud with Yang Guozhong, could the Tang have kept its golden age much longer?",
      "In fact the Tang system was fraying before the rebellion. The equal-field system and the militia army had already broken down, and the frontiers were in the hands of governors with professional armies. Even without An Lushan, the danger of a governor with a huge army clashing with the court would surely have surfaced somewhere. In 751 a Tang army had been defeated by the Abbasids at the Talas River in Central Asia; outward expansion had already reached its limit.",
      "Without the rebellion, though, the registers would not have collapsed all at once, and the tax system and frontier armies might have been reformed more calmly. What decided the Tang’s fate was less one general’s revolt than its slowness to switch from the institutions of an age of expansion to those of an age of defense. (This section is informed speculation based on the sources.)",
    ],
  },
  after: {
    heading: "What happened after the Tang fell?",
    paras: [
      "After the Tang, five dynasties — Later Liang, Later Tang, Later Jin, Later Han and Later Zhou — replaced one another in the north within about fifty years, while some ten kingdoms such as Wuyue and Southern Tang divided the south (the Five Dynasties and Ten Kingdoms). Each dynasty was founded by a general from the governor class and toppled by its own generals. In 960 the Later Zhou general Zhao Kuangyin was proclaimed emperor by his troops and founded the Song, which reunified China by 979.",
    ],
    cards: [
      ["Curbing the generals", "Zhao Kuangyin persuaded his generals at a banquet to give up their commands (“relinquishing military power over a cup of wine”). Provincial troops, revenue and appointments passed to civil officials sent from the capital. (A lesson from reason 1.)"],
      ["Government by civil officials", "The Song greatly expanded the examinations and added a palace examination with the emperor as examiner, so officials were chosen by merit and bound directly to the throne. (A lesson from reason 4.)"],
      ["Keeping eunuchs from troops", "No Song eunuch ever gained the power to make or unmake emperors. (A lesson from reason 2.)"],
      ["The price", "Having restrained its generals so tightly, the Song was militarily weak and suffered for centuries at the hands of the Liao and Jin to the north."],
    ],
  },
  summary: [
    "The Tang was founded in 618 and fell in 907, seized by Zhu Quanzhong after some 290 years. The An Lushan Rebellion (755–763) wrecked the registers and made the military governors independent (the turning point); eunuchs who controlled the Shence Army came to make and unmake emperors, and the collapse of the tax system and the burden of the salt monopoly bred the future rebels (the foundation); the Niu–Li factional strife kept officials from uniting (the accelerant); and the Huang Chao rebellion ruined Chang’an and let the governor Zhu Quanzhong seize the dynasty (the trigger).",
    "The Tang was badly wounded by the An Lushan Rebellion yet lasted almost 150 years more, thanks to new institutions such as the Two-Tax Law and the salt monopoly. But it never healed the wounds the rebellion left — the governors, the eunuchs and the factions. And in the end the Tang was toppled not by rebels, but by one of the governors it had relied on to put the rebels down.",
  ],
  faq: [
    { q: "How long did the Tang dynasty last?", a: "289 years, from Li Yuan’s founding in 618 to its fall in 907. From 690 to 705 Wu Zetian renamed the state Zhou, but this period is usually counted as part of Tang history." },
    { q: "What was the main reason the Tang fell?", a: "At root, the An Lushan Rebellion of 755 led military governors, who controlled troops and revenue, to become independent across the empire, so the emperor could no longer govern the provinces. Eunuch domination and factional strife compounded this, and finally the governor Zhu Quanzhong, who rose during the Huang Chao rebellion, seized the throne." },
    { q: "Who destroyed the Tang?", a: "Zhu Quanzhong (Zhu Wen). Originally a general in Huang Chao’s rebel army, he defected to the Tang in 882 and built his power as a military governor. In 907 he received the throne from Emperor Ai and founded the Later Liang, but in 912 he was murdered by his own son." },
    { q: "What period of Japanese history was the fall of the Tang?", a: "The middle of the Heian period, under Emperor Daigo. Japan, aware of the Tang’s turmoil, had stopped sending envoys to the Tang in 894 on the advice of Sugawara no Michizane, thirteen years before the fall." },
  ],
  relatedSlugs: [ja("tang", "唐の建国"), ja("tang", "武則天"), ja("tang", "安史の乱"), ja("tang", "朱全忠"), ja("wudai", "後梁の建国")],
};

export default function EnglishTangFallPage() {
  return <EnDynastyFallArticle a={ARTICLE} />;
}
