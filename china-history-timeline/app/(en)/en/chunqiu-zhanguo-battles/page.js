import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { ZHANGUO_MAP_EN } from "@/lib/en/borderMaps";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";
import { ZhanguoBorderMap } from "@/components/ZhanguoBorderMap";
import { FeaturePage, Section, Paras, FlowList, BattleCard, PointMap, jaEventSlug, serif } from "@/components/en/EnFeature";

const title = "Spring and Autumn and Warring States Battle Map: From Chengpu to Changping";
const description =
  "Five and a half centuries of war from the Zhou move east to Qin’s unification of China, told through the major battles — Chengpu, Maling, Changping and more — with the generals who fought them and a map of each battlefield.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/chunqiu-zhanguo-battles", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/chunqiu-zhanguo-battles", image: { title: "Spring and Autumn and Warring States Battles", seal: "覇" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ev = (eraId, key) => {
  const s = jaEventSlug(ERAS, stripRuby, eraId, key);
  return s ? `/en/events/${s}` : null;
};

const EV_TOSEN = ev("chunqiu", "平王");
const EV_QIHUANGONG = ev("chunqiu", "斉桓公");
const EV_JOBOKU = ev("chunqiu", "城濮");
const EV_KOUSHI = ev("chunqiu", "孔子");
const EV_GOETSU = ev("chunqiu", "呉");
const EV_SANKABUNSHIN_CQ = ev("chunqiu", "三家分晋");
const EV_SANKABUNSHIN_ZG = ev("zhanguo", "三家分晋");
const EV_SHOUOU = ev("zhanguo", "商鞅");
const EV_GASSHOU = ev("zhanguo", "合従連衡");
const EV_CHOUHEI = ev("zhanguo", "長平");
const EV_SHUUKETSU = ev("zhanguo", "戦国の終結");
const QSH = figureEnByJa("qin", "始皇帝（嬴政）");

const CQ_FLOW = [
  { year: "770 BC", title: "King Ping moves the capital east", note: "The capital moves to Luoyi, and the Spring and Autumn period begins as Zhou royal authority becomes an empty shell.", href: EV_TOSEN },
  { year: "707 BC", title: "The Battle of Xuge", note: "King Huan of Zhou is defeated by a mere vassal, and the military prestige of the Zhou kings collapses.", anchor: "cq-battle-1" },
  { year: "679 BC", title: "Duke Huan of Qi becomes hegemon", note: "Aided by Guan Zhong, Duke Huan of Qi becomes the first hegemon of the Spring and Autumn period.", href: EV_QIHUANGONG },
  { year: "632 BC", title: "The Battle of Chengpu", note: "After withdrawing “three days’ march,” Duke Wen of Jin defeats Chu and becomes the new hegemon.", anchor: "cq-battle-2" },
  { year: "597 BC", title: "The Battle of Bi", note: "King Zhuang of Chu defeats Jin and is counted among the Five Hegemons.", anchor: "cq-battle-3" },
  { year: "575 BC", title: "The Battle of Yanling", note: "Jin defeats Chu, halting Chu’s advance into the Central Plains for a time.", anchor: "cq-battle-4" },
  { year: "551 BC", title: "The birth of Confucius", note: "The founder of Confucianism, who would shape East Asian thought for millennia, is born.", href: EV_KOUSHI },
  { year: "494–473 BC", title: "Wu against Yue: “sleeping on brushwood and tasting gall”", note: "After biding his time since his humiliation at Kuaiji, King Goujian of Yue finally destroys Wu.", anchor: "cq-battle-5" },
  { year: "453 BC", title: "The partition of Jin", note: "The great state of Jin splits into Han, Wei and Zhao — the turning point toward the Warring States.", href: EV_SANKABUNSHIN_CQ },
];

const ZG_FLOW = [
  { year: "403 BC", title: "The partition of Jin recognized", note: "Han, Wei and Zhao are formally recognized as lords by the Zhou king, and the Warring States period begins in earnest.", href: EV_SANKABUNSHIN_ZG },
  { year: "356 BC", title: "Shang Yang’s reforms", note: "Thoroughgoing legalist reforms in Qin build the strength that will later unify China.", href: EV_SHOUOU },
  { year: "353 & 341 BC", title: "The Battles of Guiling and Maling", note: "The strategist Sun Bin twice defeats his old rival Pang Juan.", anchor: "zg-battle-1" },
  { year: "333 BC", title: "The diplomacy of alliances", note: "Su Qin, Zhang Yi and the other “vertical and horizontal” strategists play out their contest of diplomacy.", href: EV_GASSHOU },
  { year: "293 BC", title: "The Battle of Yique", note: "The young Qin general Bai Qi annihilates a Han–Wei army of 240,000.", anchor: "zg-battle-2" },
  { year: "278 BC", title: "The fall of Ying", note: "Bai Qi captures the Chu capital, and the poet Qu Yuan drowns himself in the Miluo River.", anchor: "zg-battle-3" },
  { year: "260 BC", title: "The Battle of Changping", note: "400,000 Zhao soldiers are buried alive, and Qin’s path to unification is sealed.", anchor: "zg-battle-4" },
  { year: "257 BC", title: "The Battle of Handan", note: "Lord Xinling of Wei steals the tally of command and saves Zhao from destruction.", anchor: "zg-battle-5" },
  { year: "230–221 BC", title: "Qin destroys the six states", note: "King Zheng of Qin conquers the six states one after another and unifies China for the first time.", anchor: "zg-battle-6" },
];

const CQ_BATTLES = [
  { no: 1, id: "cq-battle-1", year: "707 BC", name: "The Battle of Xuge", location: "Near Changge, Henan", x: 321, y: 198,
    sides: [["Zhou royal army", "King Huan of Zhou"], ["Zheng", "Duke Zhuang of Zheng, Zhu Dan"]],
    body: "Hoping to restore royal authority, King Huan of Zhou personally led an army against Duke Zhuang of Zheng, one of the most powerful lords, but was badly defeated — and is said to have been wounded in the shoulder by an arrow shot by Zheng’s retainer Zhu Dan. That the Zhou king, supposed overlord of all under heaven, could be beaten in battle by a single vassal showed everyone that royal authority had become an empty shell, and set the pattern of the Spring and Autumn period, in which “hegemons” backed by real power kept order." },
  { no: 2, id: "cq-battle-2", year: "632 BC", name: "The Battle of Chengpu", location: "Near Juancheng County, Shandong", x: 335, y: 178,
    sides: [["Jin", "Duke Wen of Jin (Chong’er), Xian Zhen"], ["Chu", "Ziyu"]],
    body: "Enthroned after nineteen years in exile, Duke Wen of Jin contested mastery of the Central Plains with the great southern state of Chu. At the outset, repaying a debt of kindness he owed Chu from his wandering years, he withdrew his army “three days’ march” (90 li) — and then broke the army of the overconfident Chu general Ziyu with a skillful ambush. The victory secured Duke Wen’s place as the new hegemon after Duke Huan of Qi.",
    links: [{ href: EV_JOBOKU, label: "Read Duke Wen of Jin and the Battle of Chengpu" }] },
  { no: 3, id: "cq-battle-3", year: "597 BC", name: "The Battle of Bi", location: "Near Xingyang, Henan", x: 305, y: 185,
    sides: [["Chu", "King Zhuang of Chu"], ["Jin", "Xun Linfu"]],
    body: "In his first years King Zhuang of Chu seemed to do nothing but amuse himself — “for three years neither singing nor flying,” as the saying goes — but he was in fact sizing up his ministers, and once he took charge he quickly built up the state’s strength. At Bi he crushed a Jin army whose chain of command had broken down, driving it in flight to the Yellow River, and the victory established him as a new hegemon, counted among the Five Hegemons of the Spring and Autumn period." },
  { no: 4, id: "cq-battle-4", year: "575 BC", name: "The Battle of Yanling", location: "Near Yanling County, Henan", x: 338, y: 208,
    sides: [["Jin", "Duke Li of Jin, Luan Shu"], ["Chu", "King Gong of Chu"]],
    body: "Chu’s supremacy after Bi did not last long. At Yanling the Jin army attacked so fiercely that King Gong of Chu was wounded by an arrow, and won a great victory that halted Chu’s advance north. After this defeat Chu’s influence in the Central Plains receded, and for some time Jin kept the leadership of the lords of the Central Plains." },
  { no: 5, id: "cq-battle-5", year: "494–473 BC", name: "Wu against Yue (“sleeping on brushwood and tasting gall”)", location: "From Kuaiji (Shaoxing, Zhejiang) to Gusu (Suzhou, Jiangsu)", x: 372, y: 225,
    sides: [["Wu", "Fuchai"], ["Yue", "Goujian, Fan Li"]],
    body: "Crushed by Wu at Mount Kuaiji and forced into a humiliating peace, King Goujian of Yue vowed revenge — tasting bitter gall every day, in the famous phrase “sleeping on brushwood and tasting gall” — while rebuilding his state with the help of able ministers such as Fan Li. After nearly twenty years of waiting, Yue struck back, defeated the arrogant King Fuchai of Wu again and again, and finally took the Wu capital Gusu and destroyed Wu. Goujian went on to become the last “hegemon” of the Spring and Autumn period, his name known even in the Central Plains.",
    links: [{ href: EV_GOETSU, label: "Read the struggle between Wu and Yue" }] },
];

const ZG_BATTLES = [
  { no: 1, id: "zg-battle-1", year: "353 & 341 BC", name: "The Battles of Guiling and Maling", location: "Guiling and Maling (both near Heze, Shandong)", x: 339, y: 184,
    sides: [["Qi", "Sun Bin, Tian Ji"], ["Wei", "Pang Juan"]],
    body: "Sun Bin and Pang Juan had once studied under the same master, but became mortal enemies when Pang Juan’s slander got Sun Bin sentenced to have his feet cut off. Escaping to Qi, Sun Bin won at Guiling by striking at Wei’s rear while it attacked Zhao — the stratagem “besiege Wei to rescue Zhao.” More than ten years later, at Maling, he feigned retreat, reducing the number of campfires in his camp each day to make the enemy careless; lured into a trap, Pang Juan was crushed and took his own life. These two battles earned Sun Bin lasting fame as a military strategist." },
  { no: 2, id: "zg-battle-2", year: "293 BC", name: "The Battle of Yique", location: "Yique, south of Luoyang, Henan", x: 310, y: 195,
    sides: [["Qin", "Bai Qi"], ["Han–Wei coalition", "Gongsun Xi"]],
    body: "Han and Wei raised a combined army of 240,000 to meet the rising power of Qin, but the young Qin general Bai Qi, though outnumbered, outmaneuvered them by defeating each in turn, captured their commander Gongsun Xi and all but annihilated the coalition. The battle made Bai Qi Qin’s foremost general at a stroke, and for decades afterwards he would strike terror into the six eastern states." },
  { no: 3, id: "zg-battle-3", year: "278 BC", name: "The fall of Ying", location: "Jingzhou, Hubei (Ying)", x: 308, y: 234,
    sides: [["Qin", "Bai Qi"], ["Chu", "King Qingxiang of Chu"]],
    body: "After his fame at Yique, Bai Qi pushed south and took Ying (modern Jingzhou, Hubei), the Chu capital, using floods among other means. Driven from its capital, Chu was forced to move east, and its strength as a great power suffered a severe blow. In despair at the news, the Chu poet Qu Yuan is said to have drowned himself in the Miluo River — the story later linked to the origins of the Dragon Boat Festival and its offerings of rice dumplings." },
  { no: 4, id: "zg-battle-4", year: "260 BC", name: "The Battle of Changping", location: "Near Gaoping, Shanxi", x: 305, y: 168,
    sides: [["Qin", "Bai Qi"], ["Zhao", "Zhao Kuo"]],
    body: "When Zhao’s veteran general Lian Po, who had held to a defensive war of attrition, was replaced by the inexperienced Zhao Kuo, Qin’s Bai Qi surrounded the Zhao army completely, and 400,000 men were forced to surrender. Fearing a revolt by the prisoners, Bai Qi is said to have buried most of them alive, making this the bloodiest battle of the entire Warring States period. Zhao never recovered its strength, and Qin’s path to unification was sealed.",
    links: [{ href: EV_CHOUHEI, label: "Read the Battle of Changping" }] },
  { no: 5, id: "zg-battle-5", year: "257 BC", name: "The Battle of Handan (stealing the tally to save Zhao)", location: "Handan, Hebei", x: 322, y: 168,
    sides: [["Wei and Chu relief forces", "Lord Xinling"], ["Qin", "the army besieging Handan"]],
    body: "Following up its victory at Changping, Qin besieged Handan, the Zhao capital, and Zhao stood on the brink of destruction. Unwilling to abandon an ally in danger, Lord Xinling, a prince of Wei, had the king’s favorite concubine steal the tally that conferred military command, took control of the Wei relief army on his own authority and drove off the Qin army — the famous story of “stealing the tally to save Zhao.” It was a grave defiance of his king’s orders, but it saved Zhao, and Lord Xinling went down in history as one of the chivalrous “Four Lords of the Warring States.”" },
  { no: 6, id: "zg-battle-6", year: "230–221 BC", name: "Qin destroys the six states", location: "Linzi (the Qi capital, Zibo, Shandong) and elsewhere", x: 354, y: 174,
    sides: [["Qin", "King Zheng of Qin (the First Emperor), Wang Jian"], ["The six states", "Han, Zhao, Wei, Chu, Yan, Qi"]],
    body: "Half a century after Changping, King Zheng of Qin destroyed Han, Zhao, Wei, Chu and Yan one after another in barely ten years. Along the way came the attempt by Crown Prince Dan of Yan to have the assassin Jing Ke kill the king of Qin — an attempt that failed. Finally Qi, the great eastern state that had kept its independence to the last, surrendered without a fight, and in 221 BC King Zheng became the first ruler to unify all of China, taking the title “First Emperor.” The 550-year age of division in the Spring and Autumn and Warring States periods was over.",
    portrait: QSH ? { name: QSH.name, imageUrl: QSH.imageUrl, credit: QSH.credit } : null,
    links: [{ href: EV_SHUUKETSU, label: "Read the end of the Warring States" }, QSH?.href ? { href: QSH.href, label: "The life of the First Emperor" } : null].filter(Boolean) },
];

const NOTE = "A map based on China’s real coastline. The red numbers mark the battles below.";

function PeriodHeader({ range, title, text }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ ...serif, fontSize: 13, color: COLORS.gold }}>{range}</div>
      <h2 style={{ ...serif, fontSize: 24, fontWeight: 900, color: COLORS.ink, marginTop: 2 }}>{title}</h2>
      <p style={{ fontSize: 14, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 6 }}>{text}</p>
    </div>
  );
}

export default function EnglishChunqiuZhanguoBattlesPage() {
  return (
    <FeaturePage
      title="Spring and Autumn and Warring States Battle Map"
      jaPath="/chunqiu-zhanguo-battles"
      intro="From the Zhou move east in 770 BC to Qin’s unification of China in 221 BC, the 550 years of the Spring and Autumn and Warring States periods were the longest age of division in Chinese history, as dozens of states rose and fell. This page covers the earlier Spring and Autumn period and the later Warring States period in turn, with their major battles and generals, on a map."
      related={[
        { href: "/en/eras/chunqiu", label: "The Spring and Autumn period" },
        { href: "/en/eras/zhanguo", label: "The Warring States period" },
        { href: "/en/chuhan-battles", label: "The Chu–Han Contention" },
        { href: "/en/kingdom", label: "Kingdom: the history behind the manga" },
      ]}
    >
      <div className="flex gap-4 flex-wrap" style={{ fontSize: 14, marginBottom: 28 }}>
        <Link href="#chunqiu" style={{ color: COLORS.vermilion }}>→ Spring and Autumn (770–403 BC)</Link>
        <Link href="#zhanguo" style={{ color: COLORS.vermilion }}>→ Warring States (403–221 BC)</Link>
      </div>

      <div id="chunqiu" style={{ scrollMarginTop: 16 }}>
        <PeriodHeader range="770 – 403 BC" title="Battles of the Spring and Autumn period"
          text="An age when the authority of the Zhou kings was a mere formality, and powerful lords such as Qi, Jin, Chu, Wu and Yue claimed the title of “hegemon” and gave orders to the realm." />
        <Section title="The course of events"><FlowList items={CQ_FLOW} /></Section>
        <Section title="Battle map">
          <PointMap outline={CHINA_OUTLINE} taiwan={TAIWAN_OUTLINE} points={CQ_BATTLES} note={NOTE}
            labels={[{ label: "Jin", x: 300, y: 150 }, { label: "Qi", x: 368, y: 155 }, { label: "Chu", x: 300, y: 250 }, { label: "Wu & Yue", x: 392, y: 245 }]} />
        </Section>
        <Section title="The major battles">
          <div className="flex flex-col gap-5">{CQ_BATTLES.map((b) => <BattleCard key={b.id} b={b} />)}</div>
        </Section>
      </div>

      <div id="zhanguo" style={{ scrollMarginTop: 16, marginTop: 16 }}>
        <PeriodHeader range="403 – 221 BC" title="Battles of the Warring States period"
          text="After the partition of Jin, the “Seven Warring States” — Qin, Chu, Qi, Yan, Han, Wei and Zhao — fought for survival in a far harsher age where the strong devoured the weak." />
        <Section title="The course of events"><FlowList items={ZG_FLOW} /></Section>
        <Section title="Battle map">
          <PointMap outline={CHINA_OUTLINE} taiwan={TAIWAN_OUTLINE} points={ZG_BATTLES} note={NOTE}
            labels={[{ label: "Qin", x: 250, y: 195 }, { label: "Chu", x: 300, y: 255 }, { label: "Qi", x: 368, y: 150 }, { label: "Yan", x: 340, y: 115 }]} />
        </Section>
        <Section title="Animated map of the shifting balance of power">
          <Paras items={["From the seven states standing side by side to Qin swallowing the six and unifying the realm — use the play button or the year tabs to watch the map change."]} />
          <ZhanguoBorderMap t={ZHANGUO_MAP_EN} />
        </Section>
        <Section title="The major battles">
          <div className="flex flex-col gap-5">{ZG_BATTLES.map((b) => <BattleCard key={b.id} b={b} />)}</div>
        </Section>
      </div>

      <Paras items={["For what came after unification — the Chu–Han Contention between the fall of Qin and the rise of Han, and the Three Kingdoms four hundred years later — see the other battle maps."]} />
    </FeaturePage>
  );
}
