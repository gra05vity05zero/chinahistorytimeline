import { ERAS, stripRuby } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { SANGUO_MAP_EN } from "@/lib/en/borderMaps";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";
import { SanguoBorderMap } from "@/components/SanguoBorderMap";
import { FeaturePage, Section, Paras, FlowList, BattleCard, PointMap, jaEventSlug } from "@/components/en/EnFeature";

const title = "Three Kingdoms Battle Map: From Guandu and Red Cliffs to Wuzhang Plains";
const description =
  "The Three Kingdoms period from the Yellow Turban Rebellion to reunification, told through its major battles — Guandu, Red Cliffs, Yiling, Wuzhang Plains and more — with the generals who fought them and a map of where each took place.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/sanguo-battles", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/sanguo-battles", image: { title: "Three Kingdoms Battle Map", seal: "戦" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ev = (eraId, key) => {
  const s = jaEventSlug(ERAS, stripRuby, eraId, key);
  return s ? `/en/events/${s}` : null;
};
const person = (eraId, jaName) => {
  const p = figureEnByJa(eraId, jaName);
  return p ? { portrait: { name: p.name, imageUrl: p.imageUrl, credit: p.credit }, href: p.href || null, name: p.name } : { portrait: null, href: null };
};

const EV_HUANGJIN = ev("easternhan", "黄巾の乱");
const EV_CHIBI = ev("sanguo", "赤壁");
const EV_WEI = ev("sanguo", "魏の建国");
const EV_SHU = ev("sanguo", "蜀漢の建国");
const EV_WU = ev("sanguo", "呉の建国");
const EV_WUZHANGYUAN = ev("sanguo", "五丈原");
const EV_SHUFALL = ev("sanguo", "蜀漢の滅亡");
const EV_REUNIFY = ev("westernjin", "西晋による中国再統一");
const ZHUGE = person("sanguo", "諸葛亮");
const CAOCAO = person("sanguo", "曹操");
const LIUBEI = person("sanguo", "劉備");
const SUNQUAN = person("sanguo", "孫権");
const LIUSHAN = person("sanguo", "劉禅");
const SIMAYAN = person("westernjin", "司馬炎（武帝）");

const FLOW = [
  { year: "184", title: "The Yellow Turban Rebellion", note: "A great revolt by followers of the Way of Great Peace opens the age of rival warlords.", href: EV_HUANGJIN },
  { year: "190s", title: "Rival warlords", note: "Cao Cao takes Emperor Xian under his protection, while Yuan Shao and other warlords hold sway in their own regions." },
  { year: "200", title: "The Battle of Guandu", note: "Cao Cao defeats Yuan Shao of Hebei and seizes the lead in unifying the north.", anchor: "battle-1" },
  { year: "208", title: "The Battle of Red Cliffs", note: "The allied forces of Sun Quan and Liu Bei turn back Cao Cao’s drive south, fixing the three-way division of the realm.", anchor: "battle-2" },
  { year: "215", title: "The Battle of Hefei", note: "Wei’s Zhang Liao drives off Sun Quan’s great army with a small force.", anchor: "battle-3" },
  { year: "220", title: "Founding of Wei (Cao Pi)", note: "The Eastern Han ends and Cao Pi takes the throne as emperor.", href: EV_WEI },
  { year: "221", title: "Founding of Shu Han (Liu Bei)", note: "Claiming to continue the legitimate Han line, Liu Bei takes the throne as emperor.", href: EV_SHU },
  { year: "222", title: "The Battle of Yiling and the founding of Wu", note: "Liu Bei’s invasion of Wu ends in disaster, and Sun Quan becomes independent as King of Wu (he would declare himself emperor in 229).", anchor: "battle-4" },
  { year: "228", title: "The Battle of Jieting", note: "Zhuge Liang’s first northern campaign founders with Ma Su’s defeat.", anchor: "battle-5" },
  { year: "234", title: "The Battle of Wuzhang Plains", note: "Zhuge Liang dies in camp in the middle of his northern campaigns.", anchor: "battle-6" },
  { year: "263", title: "The fall of Shu Han", note: "Chengdu falls to a surprise attack by Wei.", anchor: "battle-7" },
  { year: "280", title: "Western Jin reunifies China", note: "Wu falls, and the Three Kingdoms era ends in name and in fact.", anchor: "battle-8" },
];

const life = (p) => (p.href ? [{ href: p.href, label: `The life of ${p.name}` }] : []);

const BATTLES = [
  { no: 1, id: "battle-1", year: "200", name: "The Battle of Guandu", location: "Near Zhongmu County, Henan", x: 322, y: 193,
    sides: [["Cao Cao’s army", "Cao Cao, Xun Yu, Xu You"], ["Yuan Shao’s army", "Yuan Shao, Yan Liang, Wen Chou"]],
    body: "The decisive battle for mastery of North China, in which the outnumbered Cao Cao faced Yuan Shao, the greatest warlord of Hebei. Hugely inferior in numbers, Cao Cao’s army was forced into a grueling war of attrition, until, acting on intelligence from Xu You — a defector from Yuan Shao’s camp — Cao Cao personally led a daring raid on Wuchao, where Yuan Shao’s supplies were stored, and burned it. Without its grain, Yuan Shao’s army collapsed, and the victory made Cao Cao’s leadership in unifying the north decisive.",
    portrait: CAOCAO.portrait, links: [{ href: EV_WEI, label: "Read the founding of Wei (Cao Pi)" }, ...life(CAOCAO)] },
  { no: 2, id: "battle-2", year: "208", name: "The Battle of Red Cliffs", location: "Near Chibi, Hubei (on the Yangtze)", x: 321, y: 240,
    sides: [["Sun Quan–Liu Bei alliance", "Zhou Yu, Lu Su, Huang Gai, Zhuge Liang"], ["Cao Cao’s army", "Cao Cao"]],
    body: "The greatest battle of the Three Kingdoms, in which the allied forces of Sun Quan and Liu Bei met the vast army of Cao Cao — by now master of almost all the north — as it pressed south across the Yangtze. Unused to fighting on water and stricken by disease, Cao Cao’s army saw its fleet destroyed by Huang Gai’s feigned surrender and a surprise attack with fire ships. The defeat shattered Cao Cao’s ambition to unify the realm and became the turning point that fixed the three-way balance of Wei, Wu and Shu.",
    portrait: ZHUGE.portrait, links: [{ href: EV_CHIBI, label: "Read the Battle of Red Cliffs" }, ...life(ZHUGE)] },
  { no: 3, id: "battle-3", year: "215", name: "The Battle of Hefei (Xiaoyao Ford)", location: "Near Hefei, Anhui", x: 347, y: 220,
    sides: [["Wei", "Zhang Liao, Yue Jin, Li Dian"], ["Wu", "Sun Quan, Gan Ning, Ling Tong"]],
    body: "As Wu kept up its pressure after Red Cliffs, Zhang Liao, defending Wei’s stronghold at Hefei with only a small garrison, is said to have led a charge in person before dawn that threw Sun Quan’s army — reportedly 100,000 strong — into chaos. Sun Quan himself is said to have come close to being killed, and Zhang Liao’s name became so feared among the men of Wu that, as the story goes, merely saying “Zhang Liao is coming” was enough to make crying children fall silent.",
    portrait: SUNQUAN.portrait, links: [{ href: EV_WU, label: "Read the founding of Wu (Sun Quan)" }, ...life(SUNQUAN)] },
  { no: 4, id: "battle-4", year: "222", name: "The Battle of Yiling", location: "Near Yichang, Hubei (on the Yangtze)", x: 302, y: 231,
    sides: [["Shu Han", "Liu Bei, Feng Xi, Zhang Nan"], ["Wu", "Lu Xun, Zhu Ran, Han Dang"]],
    body: "To avenge his sworn brother Guan Yu, killed by Wu, Liu Bei — newly enthroned as emperor — personally led a great army into Wu. Wu’s young general Lu Xun deliberately fell back again and again in the early fighting, drawing Liu Bei’s army deep into the mountains along the Yangtze; then, when the Shu forces had strung their camps out in a long line in the summer heat, he attacked with fire and burned the whole chain of camps in a single night. The disaster cost the newly founded Shu Han many of its officers and men, and Liu Bei himself died of illness soon afterwards.",
    portrait: LIUBEI.portrait, links: [{ href: EV_SHU, label: "Read the founding of Shu Han (Liu Bei)" }, ...life(LIUBEI)] },
  { no: 5, id: "battle-5", year: "228", name: "The Battle of Jieting", location: "Near Qin’an County, Tianshui, Gansu", x: 258, y: 193,
    sides: [["Shu Han", "Zhuge Liang, Ma Su"], ["Wei", "Zhang He"]],
    body: "After Liu Bei’s death, the chancellor Zhuge Liang launched his first northern campaign under the banner of restoring the Han. The opening went well, but Ma Su, entrusted with holding the vital pass of Jieting, disobeyed Zhuge Liang’s orders and broke all convention by camping on a hilltop far from water; Wei’s Zhang He cut off his water supply and inflicted a crushing defeat. With his forward base lost, Zhuge Liang had no choice but to withdraw his whole army, and to uphold military discipline he tearfully executed Ma Su, his favorite protégé — the famous story of “weeping as he beheaded Ma Su.”",
    portrait: ZHUGE.portrait, links: [{ href: EV_WUZHANGYUAN, label: "Read the Battle of Wuzhang Plains (the end of the northern campaigns)" }, ...life(ZHUGE)] },
  { no: 6, id: "battle-6", year: "234", name: "The Battle of Wuzhang Plains", location: "Near Qishan County, Baoji, Shaanxi", x: 274, y: 196,
    sides: [["Shu Han", "Zhuge Liang, Jiang Wei"], ["Wei", "Sima Yi"]],
    body: "The last battle of Zhuge Liang, who campaigned north again and again against a far more powerful Wei. Facing the Shu army encamped on the Wuzhang Plains south of the Wei River, Wei’s Sima Yi avoided open battle and stuck to a strategy of waiting them out, and the two armies faced each other for months. Zhuge Liang had prepared for a long campaign by having his soldiers farm, but worn out by overwork he fell ill in camp and died. Having lost its commander, the Shu army was forced to withdraw, and Shu Han never again mounted a major offensive against Wei.",
    portrait: ZHUGE.portrait, links: [{ href: EV_WUZHANGYUAN, label: "Read the Battle of Wuzhang Plains" }, ...life(ZHUGE)] },
  { no: 7, id: "battle-7", year: "263", name: "The fall of Shu Han (the fall of Chengdu)", location: "Chengdu, Sichuan", x: 248, y: 231,
    sides: [["Wei", "Deng Ai, Zhong Hui"], ["Shu Han", "Jiang Wei, Liu Shan"]],
    body: "After Zhuge Liang’s death, Jiang Wei carried on his northern campaigns but won no great victories, and Shu Han’s strength was steadily worn away. Wei’s Deng Ai bypassed Jiang Wei’s army at the front and made a bold surprise march along trackless mountain paths to close on Chengdu. The appearance of an enemy army from an unexpected direction broke the city’s defenses, and the emperor Liu Shan surrendered with hardly any resistance. Forty-three years after Liu Bei founded it, Shu Han was gone — the first of the three kingdoms to disappear.",
    portrait: LIUSHAN.portrait, links: [{ href: EV_SHUFALL, label: "Read the fall of Shu Han" }, ...life(LIUBEI)] },
  { no: 8, id: "battle-8", year: "280", name: "Western Jin’s conquest of Wu (the fall of Jianye)", location: "Nanjing, Jiangsu (Jianye, the Wu capital)", x: 358, y: 218,
    sides: [["Western Jin", "Wang Jun, Du Yu"], ["Wu", "Sun Hao"]],
    body: "Founded on Wei’s abdication, the Western Jin stepped up its attacks on Wu, the last of the three kingdoms. Jin’s Wang Jun launched a great fleet built in Yi Province onto the Yangtze and advanced on the capital Jianye (modern Nanjing), burning through the iron chains Wu had stretched across the river. Sun Hao, Wu’s last emperor and a notorious tyrant, finally surrendered, and China, divided for nearly a century since the Yellow Turban Rebellion at the end of the Eastern Han, was unified once more.",
    portrait: SIMAYAN.portrait, links: [{ href: EV_REUNIFY, label: "Read Western Jin’s reunification of China" }] },
];

export default function EnglishSanguoBattlesPage() {
  return (
    <FeaturePage
      title="Three Kingdoms Battle Map"
      jaPath="/sanguo-battles"
      intro="Beginning with the Yellow Turban Rebellion in 184 and ending with reunification in 280, the Three Kingdoms period is the most retold age of turmoil in Chinese history. This page follows the course of events from the fall of the Eastern Han to reunification under the Western Jin through eight major battles — Guandu, Red Cliffs, Yiling, Wuzhang Plains and more — and the generals who made their names in them."
      related={[
        { href: "/en/eras/sanguo", label: "The Three Kingdoms" },
        { href: "/en/sanguo-comparison", label: "Wei, Shu and Wu compared" },
        { href: "/en/chuhan-battles", label: "The Chu–Han Contention" },
        { href: "/en/suitang-battles", label: "Sui and Tang battles" },
      ]}
    >
      <Section title="The course of events"><FlowList items={FLOW} /></Section>
      <Section title="Battle map">
        <PointMap outline={CHINA_OUTLINE} taiwan={TAIWAN_OUTLINE} points={BATTLES}
          note="A map based on China’s real coastline. The red numbers mark the battles below; the gold dot marks Luoyang, the capital of Wei."
          labels={[{ label: "Wei (North China)", x: 330, y: 158 }, { label: "Shu (Yi Province)", x: 220, y: 258 }, { label: "Wu (Jiangnan)", x: 395, y: 250 }]}
          refs={[{ label: "Luoyang (capital of Wei)", x: 310, y: 194 }]} />
      </Section>
      <Section title="Animated map of the shifting balance of power">
        <Paras items={["From rival warlords to the three kingdoms of Wei, Shu and Wu, and on to reunification under the Western Jin — use the play button or the year tabs to watch the map change."]} />
        <SanguoBorderMap t={SANGUO_MAP_EN} />
      </Section>
      <Section title="The major battles">
        <div className="flex flex-col gap-5">
          {BATTLES.map((b) => <BattleCard key={b.no} b={b} />)}
        </div>
      </Section>
    </FeaturePage>
  );
}
