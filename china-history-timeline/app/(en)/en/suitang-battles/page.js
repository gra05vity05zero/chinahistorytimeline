import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { SUITANG_MAP_EN } from "@/lib/en/borderMaps";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";
import { SuitangBorderMap } from "@/components/SuitangBorderMap";
import { FeaturePage, Section, Paras, FlowList, BattleCard, PointMap, jaEventSlug, serif } from "@/components/en/EnFeature";

const title = "Sui, Tang and Five Dynasties Battle Map: From Hulao Pass to the Song Unification";
const description =
  "About four hundred years from the Sui reunification through the rise and fall of the Tang and the Five Dynasties and Ten Kingdoms to the Song unification, told through the major battles — Hulao Pass, the Xuanwu Gate, the An Lushan Rebellion, Huang Chao, Gaoping — with a battlefield map and an animated map of the shifting balance of power.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/suitang-battles", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/suitang-battles", image: { title: "Sui, Tang and Five Dynasties Battles", seal: "唐" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ev = (eraId, key) => {
  const s = jaEventSlug(ERAS, stripRuby, eraId, key);
  return s ? `/en/events/${s}` : null;
};
const person = (eraId, jaName) => figureEnByJa(eraId, jaName);
const portrait = (p) => (p?.imageUrl ? { name: p.name, imageUrl: p.imageUrl, credit: p.credit } : null);
const life = (p) => (p?.href ? [{ href: p.href, label: `The life of ${p.name}` }] : []);

const EV_SUI_FOUND = ev("sui", "隋の建国");
const EV_CHEN = ev("sui", "陳を滅ぼし");
const EV_GOGURYEO = ev("sui", "高句麗");
const EV_SUI_FALL = ev("sui", "隋の滅亡");
const EV_GENBUMON = ev("tang", "玄武門");
const EV_TUJUE = ev("tang", "東突厥");
const EV_WUZETIAN = ev("tang", "武則天");
const EV_ANSHI = ev("tang", "安史の乱");
const EV_TANG_FALL = ev("tang", "朱全忠");
const EV_HOUTANG = ev("wudai", "後唐");
const EV_ENUN = ev("wudai", "燕雲十六州");
const EV_CHAIRONG = ev("wudai", "柴栄");
const EV_CHENQIAO = ev("wudai", "趙匡胤");
const WENDI = person("sui", "隋文帝（楊堅）");
const YANGDI = person("sui", "隋煬帝（楊広）");
const TAIZONG = person("tang", "唐太宗（李世民）");
const LIJING = person("tang", "李靖");
const YANGGUIFEI = person("tang", "楊貴妃");
const ZHUQUANZHONG = person("tang", "朱全忠（朱温）");
const LICUNXU = person("wudai", "李存勗（後唐荘宗）");
const CHAIRONG = person("wudai", "柴栄（後周世宗）");
const SONGTAIZU = person("northernsong", "宋太祖（趙匡胤）");

const EARLY_FLOW = [
  { year: "581", title: "The Sui is founded (Yang Jian)", note: "Yang Jian, a relative by marriage of the Northern Zhou royal house, receives the throne by abdication and becomes Emperor Wen.", href: EV_SUI_FOUND },
  { year: "589", title: "Sui conquers Chen and reunites north and south", note: "Sui armies cross the Yangtze and take Jiankang, and China is one again for the first time in about 270 years.", anchor: "early-battle-1" },
  { year: "612", title: "The Goguryeo campaign and the Battle of the Salsu River", note: "Emperor Yang’s great expeditionary army is destroyed at the Salsu River, and popular discontent begins to shake the Sui.", anchor: "early-battle-2" },
  { year: "618", title: "Emperor Yang dies; the Tang is founded", note: "Emperor Yang is killed at Jiangdu, and Li Yuan in Chang’an takes the throne and founds the Tang.", href: EV_SUI_FALL },
  { year: "621", title: "The Battle of Hulao Pass", note: "Li Shimin forces the submission of both Dou Jiande and Wang Shichong, deciding the course of unification.", anchor: "early-battle-3" },
  { year: "626", title: "The Xuanwu Gate Incident", note: "Li Shimin kills his elder brother the crown prince and takes the throne as Taizong; the “Reign of Zhenguan” begins.", anchor: "early-battle-4" },
  { year: "630", title: "The conquest of the Eastern Göktürks", note: "Li Jing captures Illig Qaghan, and Taizong is hailed as “Heavenly Khan.”", anchor: "early-battle-5" },
  { year: "663", title: "The Battle of Baekgang (Hakusukinoe)", note: "A Tang–Silla army defeats the forces of Japan and Baekje; defeated Japan hurries to strengthen its defenses and build a centralized state." },
  { year: "690", title: "Wu Zetian becomes emperor", note: "The only woman to reign as emperor in Chinese history takes the throne and briefly renames the dynasty “Zhou.”", href: EV_WUZETIAN },
  { year: "751", title: "The Battle of Talas", note: "A Tang army is defeated by the Abbasid Caliphate in Central Asia; one theory holds that papermaking reached the west through prisoners taken there.", href: "/en/four-inventions" },
];

const LATE_FLOW = [
  { year: "755", title: "The An Lushan Rebellion breaks out", note: "The military governor An Lushan rises in revolt at Fanyang and quickly takes Luoyang.", href: EV_ANSHI },
  { year: "756", title: "The Battle of Tong Pass and the tragedy at Mawei", note: "The gateway to Chang’an is broken, and Xuanzong loses Yang Guifei on his flight to Shu.", anchor: "late-battle-1" },
  { year: "757", title: "The Siege of Suiyang", note: "Zhang Xun and his comrades hold out for ten months, stopping the rebels’ advance south.", anchor: "late-battle-2" },
  { year: "875–884", title: "The Huang Chao Rebellion", note: "The salt smuggler Huang Chao occupies Chang’an, and Tang rule effectively collapses.", anchor: "late-battle-3" },
  { year: "907", title: "The fall of the Tang; the Five Dynasties and Ten Kingdoms begin", note: "Zhu Quanzhong overthrows the Tang and founds the Later Liang, and regional powers break away one after another.", href: EV_TANG_FALL },
  { year: "923", title: "The Later Tang destroys the Later Liang", note: "Li Cunxu storms Bianzhou and overthrows the dynasty of the Zhu family, his father Li Keyong’s mortal enemies.", anchor: "late-battle-4" },
  { year: "936", title: "The cession of the Sixteen Prefectures", note: "Shi Jingtang of the Later Jin hands vital lands south of the Great Wall to the Khitan in return for their help.", href: EV_ENUN },
  { year: "954", title: "The Battle of Gaoping", note: "Emperor Shizong of the Later Zhou (Chai Rong) defeats the Northern Han and Liao, opening the road to unification.", anchor: "late-battle-5" },
  { year: "960", title: "The Chenqiao Mutiny and the founding of the Song", note: "Put forward by the officers and men of the palace army, Zhao Kuangyin takes the throne and founds the Song.", href: EV_CHENQIAO },
  { year: "979", title: "The fall of the Northern Han; Song unifies China", note: "The Northern Han, last of the Ten Kingdoms, surrenders, ending some seventy years of division.", anchor: "late-battle-6" },
];

const EARLY_BATTLES = [
  { no: 1, id: "early-battle-1", year: "588–589", name: "The Sui conquest of Chen (the taking of Jiankang)", location: "Jiankang (Nanjing, Jiangsu)", x: 358, y: 218,
    sides: [["Sui", "Yang Guang (Prince of Jin, the future Emperor Yang), He Ruobi, Han Qinhu"], ["Chen", "Chen Shubao (the Last Ruler)"]],
    body: "In the winter of 588, Emperor Wen put his second son Yang Guang, Prince of Jin, in overall command and sent a vast army — said to number over 510,000 — forward on eight fronts from the upper to the lower Yangtze. In the first month of 589 the armies of He Ruobi and Han Qinhu crossed the river and closed on the capital Jiankang, and the pleasure-loving Chen court, unable to mount any organized resistance, let Han Qinhu’s troops storm in. The Last Ruler, Chen Shubao, is said to have been dragged out of a well in the palace where he was hiding with his favorite consorts. So ended the division between north and south that had lasted some 270 years since the fall of the Western Jin.",
    portrait: portrait(WENDI), links: [{ href: EV_CHEN, label: "Read the Sui reunification of China" }] },
  { no: 2, id: "early-battle-2", year: "612", name: "The Goguryeo campaign (the Battle of the Salsu River)", location: "From Liaodong Fortress (Liaoyang, Liaoning) to the Salsu (the Chongchon River, northern Korea)", x: 390, y: 132,
    sides: [["Sui", "Emperor Yang, Yuwen Shu, Yu Zhongwen"], ["Goguryeo", "Eulji Mundeok"]],
    body: "In 612 Emperor Yang personally led an unprecedented army against Goguryeo — two million strong by its own boast, with over 1.13 million combat troops by one count. When the siege of Liaodong Fortress dragged on, Yuwen Shu and others led a detached force of more than 300,000 straight for the capital Pyongyang. The great Goguryeo general Eulji Mundeok drew the Sui army deep into his country with feigned surrenders and retreats, then fell on the exhausted army as it crossed the Salsu River on its way back and destroyed it; only about 2,700 men are said to have made it back to Liaodong alive. Emperor Yang mounted further campaigns without success, and revolts by people crushed under the burden hastened the fall of the Sui.",
    portrait: portrait(YANGDI), links: [{ href: EV_GOGURYEO, label: "Read the failed Goguryeo campaigns" }] },
  { no: 3, id: "early-battle-3", year: "621", name: "The Battle of Hulao Pass", location: "Hulao Pass (Xingyang, Henan)", x: 316, y: 192,
    sides: [["Tang", "Li Shimin (Prince of Qin), Yuchi Jingde"], ["Xia and Zheng", "Dou Jiande, Wang Shichong"]],
    body: "When Li Shimin, Prince of Qin, besieged Wang Shichong, who held Luoyang under the name of “Zheng,” Dou Jiande of Hebei marched to the rescue with an army said to number over 100,000. Leaving the siege of Luoyang in place, Li Shimin raced ahead with just 3,500 picked men to the vital pass of Hulao to the east and blocked Dou Jiande’s path. After a standoff of about a month, he charged the tired and disordered Xia army with his cavalry, crushed it and took Dou Jiande prisoner. With all hope of relief gone, Wang Shichong surrendered too: a single battle had brought both great rivals to submission and decided the Tang unification of the realm.",
    portrait: portrait(TAIZONG), links: life(TAIZONG) },
  { no: 4, id: "early-battle-4", year: "626", name: "The Xuanwu Gate Incident", location: "The north gate of the Taiji Palace, Chang’an (Xi’an, Shaanxi)", x: 282, y: 200,
    sides: [["Prince of Qin’s household", "Li Shimin, Zhangsun Wuji, Yuchi Jingde"], ["Crown prince’s household", "Crown Prince Li Jiancheng, Li Yuanji, Prince of Qi"]],
    body: "The rivalry between Li Shimin, Prince of Qin — the second son and the man who had done most to found the Tang — and his elder brother the crown prince Li Jiancheng and younger brother Li Yuanji deepened until each side was plotting the other’s death. In the sixth month of 626, Li Shimin hid troops at the Xuanwu Gate, the palace’s north gate, and ambushed Jiancheng and Yuanji as they came to court; he shot Jiancheng himself, and Yuanji was killed by Yuchi Jingde. Their father, Emperor Gaozu (Li Yuan), accepted what had happened, made Li Shimin crown prince and abdicated two months later. As Emperor Taizong, Li Shimin went on to a celebrated reign known as the “Reign of Zhenguan,” but the fratricide by which he reached the throne has been debated ever since.",
    portrait: portrait(TAIZONG), links: [{ href: EV_GENBUMON, label: "Read the Xuanwu Gate Incident" }, ...life(TAIZONG)] },
  { no: 5, id: "early-battle-5", year: "630", name: "The conquest of the Eastern Göktürks (the Battle of the Yin Mountains)", location: "Dingxiang and the Yin Mountains (Inner Mongolia)", x: 305, y: 137,
    sides: [["Tang", "Li Jing, Li Ji"], ["Eastern Göktürks", "Illig Qaghan"]],
    body: "In the early Tang the Eastern Göktürks to the north were powerful: in 626 Illig Qaghan’s great army reached the Wei River near Chang’an, and the newly enthroned Taizong had to go out in person to make a treaty. When the Eastern Göktürks were later weakened by internal strife and disastrous snows, Taizong struck back. In 630 the great general Li Jing took Dingxiang in a night attack with only 3,000 horsemen, then with Li Ji fell on Illig Qaghan’s headquarters in the Yin Mountains and routed it. The captured Qaghan was sent to Chang’an, the nomadic peoples of the north gave Taizong the title “Heavenly Khan,” and the Tang established itself as the leading power of East Asia.",
    portrait: portrait(LIJING), links: [{ href: EV_TUJUE, label: "Read the conquest of the Eastern Göktürks" }] },
];

const LATE_BATTLES = [
  { no: 1, id: "late-battle-1", year: "756", name: "The Battle of Tong Pass (An Lushan Rebellion)", location: "Tong Pass (Tongguan County, Weinan, Shaanxi)", x: 297, y: 193,
    sides: [["Tang", "Geshu Han"], ["Yan", "An Lushan, Cui Qianyou"]],
    body: "In the winter of 755 the army of the military governor An Lushan, who had risen at Fanyang (near modern Beijing), quickly took Luoyang, and in the first month of the next year he proclaimed himself “Emperor of Great Yan.” The Tang strengthened its defenses at Tong Pass, the eastern gateway to Chang’an, under the veteran general Geshu Han — but the chancellor Yang Guozhong, fearing Geshu Han’s growing military power, urged an attack, and Emperor Xuanzong ordered him to march out. Forced into the field, the Tang army was ambushed by Cui Qianyou in a narrow defile and destroyed, and Geshu Han was captured. With Tong Pass lost, Xuanzong abandoned Chang’an and fled toward Shu; at Mawei Station on the way his furious soldiers killed Yang Guozhong, and Xuanzong was forced to order the death of Yang Guifei as well.",
    portrait: portrait(YANGGUIFEI), links: [{ href: EV_ANSHI, label: "Read the An Lushan Rebellion" }, ...life(YANGGUIFEI)] },
  { no: 2, id: "late-battle-2", year: "757", name: "The Siege of Suiyang", location: "Suiyang (Shangqiu, Henan)", x: 336, y: 198,
    sides: [["Tang", "Zhang Xun, Xu Yuan"], ["Yan", "Yin Ziqi"]],
    body: "Even after An Lushan was murdered by his son, the rebels remained strong and eyed a push south into the Jiang–Huai region that kept the Tang treasury afloat. At Suiyang, which stood in their way, Zhang Xun and Xu Yuan held out for about ten months with only a few thousand men against Yin Ziqi’s army, said to number over 100,000. With no relief and their food gone, the defenders are said to have eaten sparrows, rats and even tree bark before the city fell in the tenth month of 757 and Zhang Xun and his comrades were executed. But their long resistance kept the rebels out of the Jiang–Huai region, and the supplies it protected are credited with helping the Tang retake Chang’an and Luoyang that same year." },
  { no: 3, id: "late-battle-3", year: "875–884", name: "The Huang Chao Rebellion (the occupation of Chang’an)", location: "Chang’an (Xi’an, Shaanxi) and across North China, Jiangnan and Lingnan", x: 280, y: 201,
    sides: [["Rebels", "Wang Xianzhi, Huang Chao, Zhu Wen (later Zhu Quanzhong)"], ["Tang", "Li Keyong (Shatuo army) and regional military governors"]],
    body: "The salt smugglers Wang Xianzhi and Huang Chao rose in revolt around 875, gathering peasants suffering from heavy taxes and famine. After Wang Xianzhi’s death Huang Chao led the rebels, avoiding head-on battles with government forces and campaigning from Jiangnan as far as distant Guangzhou before turning north; at the end of 880 he took Luoyang and then Chang’an, and was enthroned as emperor of “Great Qi.” But when his lieutenant Zhu Wen defected to the Tang — receiving the name Quanzhong — and the cavalry of Li Keyong of the Shatuo joined the fight, the tide turned. Driven from Chang’an in 883, Huang Chao met his end near Mount Tai in 884. The rebellion was put down, but Tang authority was in ruins, and the fateful rivalry between Zhu Quanzhong and Li Keyong, who had both won fame suppressing it, would shape the Five Dynasties to come.",
    portrait: portrait(ZHUQUANZHONG), links: [{ href: EV_TANG_FALL, label: "Read Zhu Quanzhong’s overthrow of the Tang" }] },
  { no: 4, id: "late-battle-4", year: "923", name: "The Later Tang strikes Bianzhou (the fall of the Later Liang)", location: "Bianzhou (Kaifeng, Henan)", x: 324, y: 192,
    sides: [["Later Tang", "Li Cunxu (Zhuangzong), Li Siyuan"], ["Later Liang", "the Last Emperor (Zhu Youzhen), Wang Yanzhang"]],
    body: "Succeeding his father Li Keyong, Li Cunxu, Prince of Jin, fought Zhu Quanzhong’s Later Liang across the Yellow River for more than ten years. In the fourth month of 923 he took the throne and named his dynasty Tang (the Later Tang); in the tenth month, while the main Liang army was pinned down along the Yellow River, he sent Li Siyuan ahead and raced to the Liang capital Bianzhou in a matter of days. Caught by surprise, the last Liang emperor took his own life, and the Later Liang fell just seventeen years after its founding. Legend says that on his deathbed Li Keyong gave his son three arrows and charged him with revenge on Yan, the Khitan and Liang — a charge this victory is said to have fulfilled. But once enthroned, Li Cunxu doted on actors and neglected government, and he was killed in a mutiny just three years later.",
    portrait: portrait(LICUNXU), links: [{ href: EV_HOUTANG, label: "Read the founding of the Later Tang" }] },
  { no: 5, id: "late-battle-5", year: "954", name: "The Battle of Gaoping", location: "Gaoping (Jincheng, Shanxi)", x: 314, y: 183,
    sides: [["Later Zhou", "Shizong (Chai Rong), Zhao Kuangyin"], ["Northern Han and Liao", "Liu Chong (Northern Han), Yang Gun (Liao)"]],
    body: "In 954, when Guo Wei, founder of the Later Zhou, died and his adopted son Chai Rong (Shizong) took the throne, the Northern Han of Taiyuan seized the moment to march south with Liao (Khitan) reinforcements. Overriding his senior ministers, Shizong led his army in person and clashed with the Northern Han at Gaoping. Just after battle was joined, the generals of his right wing fled and the whole army began to give way, but Shizong rode to the front line through a hail of arrows to rally his men, and palace-army officers such as Zhao Kuangyin made a desperate charge that turned the battle and routed the Northern Han. Afterwards Shizong executed more than seventy officers who had fled, tightening discipline, and began reforming the palace army. Zhao Kuangyin, who made his name in this battle, would found the Song six years later. Gaoping, incidentally, is also the old battlefield of Changping from the Warring States period.",
    portrait: portrait(CHAIRONG), links: [{ href: EV_CHAIRONG, label: "Read the reign of Shizong (Chai Rong)" }] },
  { no: 6, id: "late-battle-6", year: "963–979", name: "The Song unification (the conquest of the Northern Han)", location: "Taiyuan (Shanxi, capital of the Northern Han) and elsewhere", x: 311, y: 164,
    sides: [["Song", "Taizu (Zhao Kuangyin), Taizong (Zhao Guangyi), Cao Bin"], ["The Ten Kingdoms", "Jingnan, Hunan, Later Shu, Southern Han, Southern Tang, Northern Han and others"]],
    body: "Enthroned in the Chenqiao Mutiny of 960, Taizu (Zhao Kuangyin) adopted a policy of “south first, then north”: conquer the rich south first and leave the formidable Northern Han, allied with the Liao, for later. Starting with Jingnan and Hunan in 963, he took Later Shu in 965 and Southern Han in 971, and in 975 the great general Cao Bin bridged the Yangtze with pontoons, took the Southern Tang capital Jinling and received the surrender of its Last Ruler, Li Yu, famous as a poet. After Taizu’s sudden death his younger brother Taizong brought Wuyue and others to submit without a fight in 978, and in 979 drove off a Liao relief army and took Taiyuan, the Northern Han capital. So ended some seventy years of division under the Five Dynasties and Ten Kingdoms — but the Sixteen Prefectures held by the Liao were never recovered, and the Song would be troubled by the northern threat ever after.",
    portrait: portrait(SONGTAIZU), links: [{ href: EV_CHENQIAO, label: "Read the Chenqiao Mutiny and the founding of the Song" }] },
];

function PeriodHeader({ range, title, text }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ ...serif, fontSize: 13, color: COLORS.gold }}>{range}</div>
      <h2 style={{ ...serif, fontSize: 24, fontWeight: 900, color: COLORS.ink, marginTop: 2 }}>{title}</h2>
      <p style={{ fontSize: 14, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 6 }}>{text}</p>
    </div>
  );
}

export default function EnglishSuitangBattlesPage() {
  return (
    <FeaturePage
      title="Sui, Tang and Five Dynasties Battle Map"
      jaPath="/suitang-battles"
      intro="From the Sui reunification of north and south in 589, after some 270 years of division, to the Song’s ending of the Five Dynasties and Ten Kingdoms in 979, these four centuries saw the flourishing of the Tang as a world empire, its collapse after the An Lushan and Huang Chao rebellions, and the turmoil of rapidly changing dynasties that followed. This page covers the Sui and early Tang, then the late Tang and Five Dynasties, with their major battles and the people who fought them, on a map."
      related={[
        { href: "/en/eras/sui", label: "The Sui dynasty" },
        { href: "/en/eras/tang", label: "The Tang dynasty" },
        { href: "/en/eras/wudai", label: "The Five Dynasties and Ten Kingdoms" },
        { href: "/en/song-yuan-battles", label: "Song and Yuan battles" },
        { href: "/en/yangjiajiang", label: "The Generals of the Yang Family" },
      ]}
    >
      <div className="flex gap-4 flex-wrap" style={{ fontSize: 14, marginBottom: 28 }}>
        <Link href="#early" style={{ color: COLORS.vermilion }}>→ Sui and early Tang (581–755)</Link>
        <Link href="#late" style={{ color: COLORS.vermilion }}>→ Late Tang and Five Dynasties (755–979)</Link>
        <Link href="#map" style={{ color: COLORS.vermilion }}>→ The shifting map</Link>
      </div>

      <div id="early" style={{ scrollMarginTop: 16 }}>
        <PeriodHeader range="581 – 755" title="Battles of the Sui and early Tang"
          text="The Sui reunited north and south but fell after just two emperors; the Tang that replaced it grew under Taizong into a world empire whose sway reached from the steppe to the Western Regions." />
        <Section title="The course of events"><FlowList items={EARLY_FLOW} /></Section>
        <Section title="Battle map">
          <PointMap outline={CHINA_OUTLINE} taiwan={TAIWAN_OUTLINE} points={EARLY_BATTLES}
            note="A map based on China’s real coastline. The red numbers mark the battles below (the Salsu River campaign is shown at Liaodong Fortress, the base of the expedition)."
            labels={[{ label: "Göktürks", x: 270, y: 112 }, { label: "Goguryeo", x: 418, y: 120 }, { label: "Guanzhong", x: 262, y: 186 }, { label: "Hebei", x: 345, y: 170 }, { label: "Jiangnan", x: 350, y: 240 }]} />
        </Section>
        <Section title="The major battles">
          <div className="flex flex-col gap-5">{EARLY_BATTLES.map((b) => <BattleCard key={b.id} b={b} />)}</div>
        </Section>
      </div>

      <div id="late" style={{ scrollMarginTop: 16, marginTop: 16 }}>
        <PeriodHeader range="755 – 979" title="Battles of the late Tang and the Five Dynasties"
          text="Shaken by the An Lushan Rebellion, the Tang crumbled as military governors broke away and the Huang Chao Rebellion swept the land; then five dynasties rose and fell in the north while more than ten kingdoms came and went in the south." />
        <Section title="The course of events"><FlowList items={LATE_FLOW} /></Section>
        <Section title="Battle map">
          <PointMap outline={CHINA_OUTLINE} taiwan={TAIWAN_OUTLINE} points={LATE_BATTLES}
            note="A map based on China’s real coastline. The red numbers mark the battles below (the Huang Chao Rebellion is shown at Chang’an, which it occupied)."
            labels={[{ label: "Khitan (Liao)", x: 300, y: 112 }, { label: "Guanzhong", x: 262, y: 186 }, { label: "Hebei", x: 345, y: 165 }, { label: "Shu", x: 248, y: 232 }, { label: "Jiangnan", x: 350, y: 240 }]} />
        </Section>
        <Section title="Animated map of the shifting balance of power" id="map">
          <Paras items={["The Sui unification, the Tang at its height, the An Lushan Rebellion and the rule of the military governors, and the division of the Five Dynasties and Ten Kingdoms through to the Song unification — use the play button or the year tabs to watch the map change."]} />
          <SuitangBorderMap t={SUITANG_MAP_EN} />
        </Section>
        <Section title="The major battles">
          <div className="flex flex-col gap-5">{LATE_BATTLES.map((b) => <BattleCard key={b.id} b={b} />)}</div>
        </Section>
      </div>

      <Paras items={["For the Three Kingdoms some four hundred years before the Sui, and the Spring and Autumn and Warring States periods earlier still, see the other battle maps. There is also a feature on the Generals of the Yang Family, set in the wars between the Song and the Liao."]} />
    </FeaturePage>
  );
}
