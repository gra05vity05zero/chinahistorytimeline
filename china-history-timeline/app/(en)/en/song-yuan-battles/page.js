import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { SONGYUAN_MAP_EN } from "@/lib/en/borderMaps";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";
import { SongYuanBorderMap } from "@/components/SongYuanBorderMap";
import { FeaturePage, Section, Paras, FlowList, BattleCard, PointMap, jaEventSlug, serif } from "@/components/en/EnFeature";

const title = "Song, Jin and Yuan Battle Map: From Chanyuan to Yamen and the Mongol Invasions of Japan";
const description =
  "About three hundred years from the founding of the Song through its wars with the Liao, Western Xia and Jin, the Jingkang Incident, Yue Fei’s northern campaigns and the Mongol advance to the fall of the Southern Song at Yamen and the Yuan unification — with a battlefield map and an animated map of the shifting balance of power.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/song-yuan-battles", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/song-yuan-battles", image: { title: "Song, Jin and Yuan Battles", seal: "宋" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ev = (eraId, key) => {
  const s = jaEventSlug(ERAS, stripRuby, eraId, key);
  return s ? `/en/events/${s}` : null;
};
const person = (eraId, jaName) => figureEnByJa(eraId, jaName);
const portrait = (p) => (p?.imageUrl ? { name: p.name, imageUrl: p.imageUrl, credit: p.credit } : null);
const life = (p) => (p?.href ? [{ href: p.href, label: `The life of ${p.name}` }] : []);

const EV_SONG_FOUND = ev("northernsong", "宋の建国");
const EV_YONGXI = ev("northernsong", "雍熙");
const EV_CHANYUAN = ev("northernsong", "澶淵");
const EV_XINFA = ev("northernsong", "新法");
const EV_JIN_FOUND = ev("northernsong", "金の建国");
const EV_JINGKANG = ev("northernsong", "靖康");
const EV_NANSONG_FOUND = ev("southernsong", "南宋の建国");
const EV_YUEFEI = ev("southernsong", "岳飛");
const EV_JIN_FALL = ev("southernsong", "金の滅亡");
const EV_LINAN = ev("southernsong", "臨安");
const EV_YASHAN = ev("southernsong", "崖山");
const EV_YUAN_FOUND = ev("yuan", "元の建国");
const EV_BUNEI = ev("yuan", "文永の役");
const EV_KOAN = ev("yuan", "弘安の役");
const TAIZONG = person("northernsong", "宋太宗（趙光義）");
const YANGYE = person("northernsong", "楊業");
const KOUZHUN = person("northernsong", "寇準");
const AGUDA = person("northernsong", "完顔阿骨打（金太祖）");
const HUIZONG = person("northernsong", "徽宗");
const YUEFEI = person("southernsong", "岳飛");
const KUBILAI = person("yuan", "クビライ（世祖）");

const EARLY_FLOW = [
  { year: "960", title: "The Song is founded (Zhao Kuangyin)", note: "Enthroned in the Chenqiao Mutiny, Taizu founds the Song with its capital at Kaifeng and builds a state governed by civil officials.", href: EV_SONG_FOUND },
  { year: "979", title: "The Northern Han conquered; the Battle of the Gaoliang River", note: "Taizong unifies China proper, but the Song army, pressing on toward the Sixteen Prefectures, is badly beaten by the Liao.", anchor: "early-battle-1" },
  { year: "986", title: "The Yongxi northern campaign and the Battle of Chenjiagu", note: "A second northern campaign also fails, and Yang Ye, feared as “Yang the Invincible,” dies.", anchor: "early-battle-2" },
  { year: "1004", title: "The Treaty of Chanyuan", note: "Facing a Liao army at Chanzhou, the Song makes peace, buying about 120 years of peace with annual gifts.", anchor: "early-battle-3" },
  { year: "1038", title: "The Western Xia is founded", note: "Li Yuanhao of the Tanguts proclaims himself emperor and breaks away in the Song’s northwest." },
  { year: "1041", title: "The Battle of Haoshuichuan", note: "A Song army is destroyed in a Western Xia ambush; under the 1044 peace the Song promises gifts to the Western Xia too.", anchor: "early-battle-4" },
  { year: "1069", title: "Wang Anshi’s New Policies", note: "Reforms to enrich the state and strengthen the army begin, to overcome crushing military costs and fiscal crisis.", href: EV_XINFA },
  { year: "1115", title: "The Jin is founded", note: "Wanyan Aguda of the Jurchens defeats the Liao, breaks away and takes the throne as emperor.", anchor: "early-battle-5" },
  { year: "1125", title: "The fall of the Liao", note: "Allied with the Song, the Jin destroys the Liao — then, seeing how weak the Song army is, turns on the Song." },
  { year: "1127", title: "The Jingkang Incident: the fall of the Northern Song", note: "Kaifeng falls, and Huizong, Qinzong and the imperial family are carried off to the north.", anchor: "early-battle-6" },
];

const LATE_FLOW = [
  { year: "1127", title: "The Southern Song is founded (Gaozong)", note: "Zhao Gou, Qinzong’s younger brother who escaped capture, takes the throne and eventually makes Lin’an (Hangzhou) his capital.", href: EV_NANSONG_FOUND },
  { year: "1130", title: "The Battle of Huangtiandang", note: "Han Shizhong’s fleet bottles up the withdrawing Jin army on the Yangtze for 48 days.", anchor: "late-battle-1" },
  { year: "1140", title: "The Battle of Yancheng (Yue Fei’s northern campaign)", note: "The Yue family army defeats the elite Jin cavalry, and the recapture of Kaifeng seems within reach.", anchor: "late-battle-2" },
  { year: "1142", title: "The Shaoxing peace; the death of Yue Fei", note: "Qin Hui makes peace with the Jin, and Yue Fei, who argued for fighting on, dies in prison.", href: EV_YUEFEI },
  { year: "1161", title: "The Battle of Caishi", note: "The civil official Yu Yunwen repulses Prince Hailing of Jin as he tries to cross the Yangtze.", anchor: "late-battle-3" },
  { year: "1206", title: "Genghis Khan takes power", note: "Having unified the Mongolian plateau, Temüjin becomes khan and begins attacking the Jin and Western Xia." },
  { year: "1234", title: "The Battle of Caizhou: the fall of the Jin", note: "A Mongol and Southern Song army takes the last Jin stronghold.", anchor: "late-battle-4" },
  { year: "1259", title: "The Battle of Diaoyu Fortress", note: "The Great Khan Möngke dies while attacking a mountain fortress in Sichuan, and the Mongol offensive halts for a time.", anchor: "late-battle-5" },
  { year: "1271", title: "The Yuan is founded (Khubilai)", note: "Khubilai names his dynasty “Great Yuan,” with its capital at Dadu (Beijing).", href: EV_YUAN_FOUND },
  { year: "1273", title: "The fall of Xiangyang and Fancheng", note: "After a five-year siege, the fortresses guarding the way into the Yangtze surrender to the Yuan.", anchor: "late-battle-6" },
  { year: "1274", title: "The first Mongol invasion of Japan (Bun’ei)", note: "A Yuan–Goryeo army attacks Tsushima and Iki and lands in Hakata Bay.", anchor: "late-battle-8" },
  { year: "1276", title: "Lin’an surrenders", note: "Bayan’s Yuan army sails down the Yangtze, and the Southern Song capital surrenders without a fight.", href: EV_LINAN },
  { year: "1279", title: "The Battle of Yamen: the fall of the Southern Song", note: "The last Southern Song forces are destroyed in a sea battle off Guangdong, and the Yuan unifies all of China.", anchor: "late-battle-7" },
  { year: "1281", title: "The second Mongol invasion of Japan (Kōan)", note: "A vast army of 140,000, including former Southern Song troops, attacks Japan again but is wrecked by storms and withdraws.", href: EV_KOAN },
];

const EARLY_BATTLES = [
  { no: 1, id: "early-battle-1", year: "979", name: "The Battle of the Gaoliang River", location: "The Gaoliang River, northwest of Youzhou (the Liao Southern Capital, modern Beijing)", x: 339, y: 145,
    sides: [["Song", "Taizong (Zhao Guangyi)"], ["Liao", "Yelü Xiuge, Yelü Xiezhen"]],
    body: "In the fifth month of 979, having taken Taiyuan from the Northern Han and ended the division of the Five Dynasties and Ten Kingdoms, Emperor Taizong pressed straight on — heedless of his tired troops — to recover the Sixteen Prefectures held by the Liao. The Song army besieged Youzhou, but the city held until Liao reinforcements arrived, and on the banks of the Gaoliang River the cavalry of Yelü Xiuge and Yelü Xiezhen fell on the Song army from both flanks and routed it. Taizong himself is said to have taken an arrow in the leg and barely escaped in a donkey cart. The defeat cost the Song its chance to regain the Sixteen Prefectures, and from then on it was often on the defensive against the horsemen of the north.",
    portrait: portrait(TAIZONG), links: life(TAIZONG) },
  { no: 2, id: "early-battle-2", year: "986", name: "The Yongxi northern campaign (the Battle of Chenjiagu)", location: "Qigou Pass (Zhuozhou, Hebei) and Chenjiagu (near Shuozhou, Shanxi)", x: 310, y: 151,
    sides: [["Song", "Cao Bin, Pan Mei, Yang Ye"], ["Liao", "Empress Dowager Chengtian (Xiao Chuo), Yelü Xiuge, Yelü Xiezhen"]],
    body: "Hearing that the child emperor Shengzong had taken the Liao throne with his mother, Empress Dowager Chengtian, governing for him, Taizong saw his chance and in 986 sent armies north on three fronts. But Cao Bin, leading the main eastern army, ran short of supplies and was badly defeated at Qigou Pass, and the whole army was ordered to withdraw. Yang Ye, deputy commander of the western army, was covering the retreat of the local population when the army supervisor Wang Shen forced him into a reckless sortie. Yang Ye went out after asking for a relief force to be posted at Chenjiagu, but the relief force had left its post; isolated and captured, he is said to have starved himself to death. The story of Yang Ye — feared as “Yang the Invincible” — and his family lives on in the tales of the Generals of the Yang Family.",
    portrait: portrait(YANGYE), links: [{ href: EV_YONGXI, label: "Read the Yongxi northern campaign" }, ...life(YANGYE)] },
  { no: 3, id: "early-battle-3", year: "1004", name: "The Battle of Chanyuan (the Treaty of Chanyuan)", location: "Chanzhou (Puyang, Henan)", x: 330, y: 184,
    sides: [["Song", "Zhenzong, Kou Zhun, Li Jilong"], ["Liao", "Shengzong, Empress Dowager Chengtian, Xiao Talin"]],
    body: "In the autumn of 1004 the Liao emperor Shengzong and Empress Dowager Chengtian led a great army south in person, bypassing Song fortresses to close on Chanzhou on the north bank of the Yellow River — barely 150 kilometers from the capital Kaifeng. Some at court urged moving the capital south, but the chief minister Kou Zhun insisted that Emperor Zhenzong lead the army himself, and had him cross the river and raise the imperial banner over Chanzhou’s northern city, lifting the troops’ spirits. When Xiao Talin, leading the Liao vanguard, was killed by a bolt from a great Song crossbow, both sides leaned toward peace. Under the resulting “Treaty of Chanyuan,” the Song would send 200,000 bolts of silk and 100,000 taels of silver every year, and the two emperors would treat each other as brothers. Some criticized it as humiliating, but it cost far less than war, and peace between the two states lasted about 120 years.",
    portrait: portrait(KOUZHUN), links: [{ href: EV_CHANYUAN, label: "Read the Treaty of Chanyuan" }] },
  { no: 4, id: "early-battle-4", year: "1041", name: "The Battle of Haoshuichuan (the Song–Western Xia war)", location: "Haoshuichuan (near Longde County, Ningxia)", x: 261, y: 185,
    sides: [["Song", "Ren Fu, Han Qi (commander in Shaanxi)"], ["Western Xia", "Li Yuanhao (Jingzong)"]],
    body: "In 1038 Li Yuanhao of the Tanguts declared independence from the Song, proclaimed himself emperor of “Great Xia” (the Western Xia) and invaded the Song’s northwestern frontier. In 1041 the Song general Ren Fu, pursuing a Western Xia force, found clay boxes left on the road in the valley of Haoshuichuan; when they were opened, pigeons flew out — the signal, it is said, for Western Xia troops hidden in the surrounding hills to attack. Ren Fu was killed and the Song lost more than 10,000 men. The Song lost again the next year at Dingchuanzhai, but the long war exhausted the Western Xia too, and under the Qingli peace of 1044 it became nominally a Song vassal in return for annual gifts of silk, silver and tea. Han Qi and Fan Zhongyan, who commanded on this front, later made their names as reforming statesmen." },
  { no: 5, id: "early-battle-5", year: "1114–1115", name: "The Battles of Ningjiang and Hubudagang (the rise of the Jin)", location: "Ningjiang (near Songyuan, Jilin) and elsewhere", x: 408, y: 94,
    sides: [["Jurchens (Jin)", "Wanyan Aguda"], ["Liao", "Emperor Tianzuo"]],
    body: "The Jurchens of the northeast, ruled by the Liao, suffered under heavy tribute — including the prized gyrfalcons used for hunting — and the high-handedness of Liao officials. In 1114 Wanyan Aguda, who had united the Jurchen tribes, rose with about 2,500 men, took Ningjiang and then defeated a large Liao army at Chuhedian. In 1115 he founded the Jin and took the throne, and that winter crushed a great Liao army led by Emperor Tianzuo himself at Hubudagang. The Liao crumbled before the formidable Jurchen cavalry — “with ten thousand Jurchens, none can stand against them,” it was said — and the Jin, joining the Song in the “Alliance Conducted at Sea” to attack the Liao from both sides, destroyed it in 1125. The Song army had meanwhile failed even to take Yanjing, and seeing its weakness, the Jin soon turned on the Song itself.",
    portrait: portrait(AGUDA), links: [{ href: EV_JIN_FOUND, label: "Read the founding of the Jin" }] },
  { no: 6, id: "early-battle-6", year: "1126–1127", name: "The struggle for Kaifeng (the Jingkang Incident)", location: "Kaifeng (capital of the Northern Song, Henan)", x: 324, y: 193,
    sides: [["Song", "Huizong, Qinzong, Li Gang"], ["Jin", "Wanyan Zongwang, Wanyan Zonghan"]],
    body: "When Jin armies marched south in two columns in the winter of 1125, Emperor Huizong hastily abdicated in favor of the crown prince (Qinzong) and fled south. In the first siege, in the first month of 1126, Li Gang led the defense of the capital and held out, and the Jin withdrew after being promised a huge indemnity and the cession of three northern garrison cities. But the Song court hesitated to keep its promises and sidelined Li Gang and the war party. Returning that autumn, the Jin took Kaifeng in the intercalary eleventh month, and in the fourth month of 1127 carried off Huizong, Qinzong and several thousand members of the imperial family and officials to the north. In this “Jingkang Incident,” named for the era, the Northern Song fell, and the city whose prosperity is pictured in Along the River During the Qingming Festival passed under Jin rule.",
    portrait: portrait(HUIZONG), links: [{ href: EV_JINGKANG, label: "Read the Jingkang Incident" }] },
];

const LATE_BATTLES = [
  { no: 1, id: "late-battle-1", year: "1130", name: "The Battle of Huangtiandang", location: "Huangtiandang (on the Yangtze northeast of Nanjing, Jiangsu)", x: 363, y: 214,
    sides: [["Southern Song", "Han Shizhong, Liang Hongyu"], ["Jin", "Wanyan Zongbi (Wuzhu)"]],
    body: "Pursuing Gaozong of the Southern Song across the Yangtze, the Jin general Wanyan Zongbi (Wuzhu) drove as far as Lin’an (Hangzhou) and Mingzhou (Ningbo), and Gaozong had to flee out to sea by ship. In the spring of 1130, as the Jin army headed north again laden with plunder, Han Shizhong lay in wait on the Yangtze with a fleet of only 8,000 men and bottled it up for 48 days in an inlet called Huangtiandang. The story that his wife Liang Hongyu beat the war drums herself to rally the men became famous in later fiction and Peking opera. In the end the Jin dug a canal and, on a windless day, burned the big Song ships with fire arrows and escaped — but after this battle the Jin refrained from deep invasions across the Yangtze.",
    links: [{ href: EV_NANSONG_FOUND, label: "Read the founding of the Southern Song" }] },
  { no: 2, id: "late-battle-2", year: "1140", name: "The Battle of Yancheng (Yue Fei’s northern campaign)", location: "Yancheng (Luohe, Henan) and Yingchang (Xuchang, Henan)", x: 320, y: 200,
    sides: [["Southern Song (Yue family army)", "Yue Fei, Yue Yun"], ["Jin", "Wanyan Zongbi (Wuzhu)"]],
    body: "When the Jin broke the peace and marched south again in 1140, Yue Fei advanced north from Ezhou (Wuhan) and recovered much of Henan. At Yancheng he clashed with the elite cavalry led by Wanyan Zongbi himself, and is said to have beaten it by having his infantry strike at the horses’ legs with long-handled blades. In the battle of Yingchang that followed, the hard fighting of his son Yue Yun and others drove the Jin back again. It was around this time that Jin soldiers are said to have lamented, “It is easier to shake a mountain than to shake the Yue family army.” But with the recapture of Kaifeng in sight, Gaozong and his chief minister Qin Hui, eager for peace, ordered a withdrawal; Yue Fei is said to have been recalled by twelve gold-lettered tablets in a single day. The next year he was imprisoned on suspicion of treason, and in the first month of 1142 he was killed in prison.",
    portrait: portrait(YUEFEI), links: [{ href: EV_YUEFEI, label: "Read Yue Fei’s death and the peace with the Jin" }, ...life(YUEFEI)] },
  { no: 3, id: "late-battle-3", year: "1161", name: "The Battle of Caishi", location: "Caishiji (Ma’anshan, Anhui)", x: 352, y: 225,
    sides: [["Southern Song", "Yu Yunwen"], ["Jin", "Prince Hailing (Wanyan Liang)"]],
    body: "Intent on destroying the Southern Song and unifying the realm, Prince Hailing of Jin broke the peace in 1161 and marched south with a great army. The Song forces north of the Yangtze fell back without a fight, and the garrison facing Caishi across the river was in disarray, its commander just dismissed. By chance the civil official Yu Yunwen, sent to reward the troops, arrived on the scene, rallied the scattered soldiers and took command of the defense. The Song navy, with paddle-wheel ships driven by men turning treadles, sank the small Jin boats one after another as they tried to cross, and drove the Jin back. Meanwhile, back in the Jin homeland, Shizong had taken the throne and declared Prince Hailing deposed; having moved to near Yangzhou, the prince was killed by his own officers as he tried to force a crossing." },
  { no: 4, id: "late-battle-4", year: "1233–1234", name: "The Battle of Caizhou (the fall of the Jin)", location: "Caizhou (Runan County, Zhumadian, Henan)", x: 327, y: 211,
    sides: [["Mongol–Southern Song alliance", "Tachar (Mongols), Meng Gong (Southern Song)"], ["Jin", "Aizong, the Last Emperor (Chenglin)"]],
    body: "Attacked ever since the days of Genghis Khan, the Jin moved its capital to Kaifeng and fought on, but lost its main army at Sanfengshan in 1232, and Kaifeng too was besieged by the Mongols. Emperor Aizong escaped the capital to Caizhou, but in the autumn of 1233 he was surrounded there by the Mongols and by the Southern Song army of Meng Gong, eager to avenge the Northern Song. After a three-month siege, just before the city fell in the first month of 1234, Aizong handed the throne to his kinsman Wanyan Chenglin and took his own life, and the newly enthroned Chenglin was killed in the fighting. So the Jin fell, 120 years after its founding. But the Southern Song promptly sent troops to recover the old capitals of Kaifeng and Luoyang — and brought on all-out war with the Mongols.",
    links: [{ href: EV_JIN_FALL, label: "Read the fall of the Jin" }] },
  { no: 5, id: "late-battle-5", year: "1259", name: "The Battle of Diaoyu Fortress", location: "Diaoyu Fortress (Hechuan District, Chongqing)", x: 264, y: 237,
    sides: [["Southern Song", "Wang Jian, Zhang Jue"], ["Mongols", "Möngke (Xianzong)"]],
    body: "To finish off the Southern Song in one stroke, Möngke, fourth Great Khan of the Mongol Empire, launched a three-pronged campaign, leading one army into Sichuan himself while his brother Khubilai headed for Ezhou on the middle Yangtze. The Song forces in Sichuan held out in mountain fortresses walled atop river-girt cliffs, and Diaoyu Fortress, rising where three rivers including the Jialing meet, was the most impregnable of all. Möngke besieged the fortress, held by Wang Jian, from the second month of 1259, attacked for nearly half a year without taking it, and died in camp in the seventh month — of illness, or, by some accounts, of wounds from a missile fired from the walls. To contest the succession, Khubilai lifted the siege of Ezhou and returned north, and the Southern Song’s fall was put off by some twenty years. Diaoyu Fortress held out until 1279, after the Southern Song itself had fallen." },
  { no: 6, id: "late-battle-6", year: "1268–1273", name: "The Battle of Xiangyang and Fancheng", location: "Xiangyang and Fancheng (Xiangyang, Hubei)", x: 308, y: 219,
    sides: [["Southern Song", "Lü Wenhuan, Zhang Shun, Zhang Gui"], ["Yuan", "Aju, Liu Zheng, Shi Tianze"]],
    body: "Facing each other across the Han River, Xiangyang and Fancheng were the key to the Southern Song’s defense of the Yangtze basin. On the advice of Liu Zheng, a general who had defected from the Song, Khubilai began a long siege of both cities in 1268. The Yuan army ringed them with forts, built a powerful navy using soldiers from the south, and cut the cities’ supply lines. Lü Wenhuan held out for nearly five years, and the brothers Zhang Shun and Zhang Gui died leading a desperate relief force. The decisive weapon was the counterweight trebuchet — the “Muslim catapult” — built by engineers brought from western Asia: Fancheng fell in 1273, and when the trebuchets turned on Xiangyang, Lü Wenhuan surrendered too. With its gateway lost, the Southern Song was overrun by Bayan’s great army, and three years later its capital Lin’an opened its gates.",
    portrait: portrait(KUBILAI), links: [{ href: EV_LINAN, label: "Read the fall of Lin’an" }, ...life(KUBILAI)] },
  { no: 7, id: "late-battle-7", year: "1279", name: "The Battle of Yamen", location: "Off Yamen (Xinhui District, Jiangmen, Guangdong)", x: 315, y: 312,
    sides: [["Southern Song", "Zhang Shijie, Lu Xiufu, Zhao Bing (Prince of Wei)"], ["Yuan", "Zhang Hongfan, Li Heng"]],
    body: "Even after Lin’an surrendered, Zhang Shijie, Lu Xiufu and others fought on, moving from place to place along the coasts of Fujian and Guangdong with child princes as their figureheads. At Yamen, at the mouth of the Pearl River, their last stronghold, Zhang Shijie chained together more than a thousand ships into a floating fortress to meet the Yuan commander Zhang Hongfan. But cut off from fresh water on land and worn down, the fleet broke when the Yuan attacked from north and south on the ebb and flow of the tide in the second month of 1279. The chancellor Lu Xiufu leapt into the sea with the eight-year-old emperor Zhao Bing on his back, and many officers, soldiers and officials are said to have followed them. Wen Tianxiang, captured the year before, watched the end from a Yuan ship. So the Song fell, some 320 years after its founding, and the Yuan brought all of China under its rule.",
    links: [{ href: EV_YASHAN, label: "Read the Battle of Yamen" }] },
  { no: 8, id: "late-battle-8", year: "1274 & 1281", name: "The Mongol invasions of Japan (Bun’ei and Kōan)", location: "Tsushima, Iki, Hakata Bay (Fukuoka) and Takashima (Nagasaki)", x: 445, y: 204,
    sides: [["Yuan and Goryeo", "Hindu, Hong Dagu, Fan Wenhu (Jiangnan army)"], ["Kamakura shogunate", "Hōjō Tokimune (regent) and the warriors of Kyushu"]],
    body: "Khubilai sent letters demanding the submission of Japan, which had close ties with the Southern Song, but the regent Hōjō Tokimune rejected them. In the Bun’ei invasion of 1274, a Yuan–Goryeo army of about 30,000 attacked Tsushima and Iki and landed in Hakata Bay, troubling the Japanese warriors with massed tactics and gunpowder weapons called teppō, but withdrew after a day’s fighting. In the Kōan invasion of 1281, after the fall of the Southern Song, an eastern army of about 40,000 from the Korean peninsula was joined by a Jiangnan army of about 100,000 made up mainly of former Southern Song troops. Blocked from landing by the stone walls the shogunate had built along Hakata Bay, the fleet gathered off Takashima, where it was struck by a storm; badly damaged, the Yuan army withdrew. The map shows the location of Hakata Bay.",
    portrait: portrait(KUBILAI), links: [{ href: EV_BUNEI, label: "Read the Bun’ei invasion" }, { href: EV_KOAN, label: "Read the Kōan invasion" }] },
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

export default function EnglishSongYuanBattlesPage() {
  return (
    <FeaturePage
      title="Song, Jin and Yuan Battle Map"
      jaPath="/song-yuan-battles"
      intro="From the founding of the Song in 960 to the fall of the Southern Song at Yamen in 1279, these three centuries saw the Song — a time of great economic and cultural flowering — face one powerful northern neighbor after another: the Liao, the Western Xia, the Jin and finally the Mongols. This page covers the Northern Song against the Liao, Western Xia and Jin, then the Southern Song against the Jin and the Mongols, with their major battles and the people who fought them, on a map. The Mongol invasions of Japan are included too."
      related={[
        { href: "/en/eras/northernsong", label: "The Northern Song" },
        { href: "/en/eras/southernsong", label: "The Southern Song" },
        { href: "/en/eras/yuan", label: "The Yuan dynasty" },
        { href: "/en/suitang-battles", label: "Sui and Tang battles" },
        { href: "/en/yangjiajiang", label: "The Generals of the Yang Family" },
        { href: "/en/suikoden", label: "Water Margin" },
        { href: "/en/japan-china-timeline", label: "Japan and China: a comparative timeline" },
      ]}
    >
      <div className="flex gap-4 flex-wrap" style={{ fontSize: 14, marginBottom: 28 }}>
        <Link href="#early" style={{ color: COLORS.vermilion }}>→ Northern Song (960–1127)</Link>
        <Link href="#late" style={{ color: COLORS.vermilion }}>→ Southern Song, Jin and the Mongols (1127–1281)</Link>
        <Link href="#map" style={{ color: COLORS.vermilion }}>→ The shifting map</Link>
      </div>

      <div id="early" style={{ scrollMarginTop: 16 }}>
        <PeriodHeader range="960 – 1127" title="Battles of the Northern Song against the Liao, Western Xia and Jin"
          text="Having unified China proper, the Song lost its wars with the Liao over the Sixteen Prefectures and prospered by buying peace with annual gifts — until the newly risen Jin took its capital Kaifeng with startling ease." />
        <Section title="The course of events"><FlowList items={EARLY_FLOW} /></Section>
        <Section title="Battle map">
          <PointMap outline={CHINA_OUTLINE} taiwan={TAIWAN_OUTLINE} points={EARLY_BATTLES}
            note="A map based on China’s real coastline. The red numbers mark the battles below (the Yongxi campaign is shown at Chenjiagu, where Yang Ye fell)."
            labels={[{ label: "Liao (Khitan)", x: 330, y: 112 }, { label: "Jurchens", x: 432, y: 74 }, { label: "Western Xia", x: 250, y: 160 }, { label: "Northern Song", x: 322, y: 240 }, { label: "Dali", x: 226, y: 280 }]} />
        </Section>
        <Section title="The major battles">
          <div className="flex flex-col gap-5">{EARLY_BATTLES.map((b) => <BattleCard key={b.id} b={b} />)}</div>
        </Section>
      </div>

      <div id="late" style={{ scrollMarginTop: 16, marginTop: 16 }}>
        <PeriodHeader range="1127 – 1281" title="Battles of the Southern Song against the Jin and the Mongols"
          text="Escaping south, the Southern Song stood face to face with the Jin across the Huai River — until the Mongols, rising from the steppe, swallowed first the Jin and then the Southern Song." />
        <Section title="The course of events"><FlowList items={LATE_FLOW} /></Section>
        <Section title="Battle map">
          <PointMap outline={CHINA_OUTLINE} taiwan={TAIWAN_OUTLINE} points={LATE_BATTLES}
            note="A map based on China’s real coastline. The red numbers mark the battles below (Japan and the Korean peninsula are not drawn; the Mongol invasions are shown at the approximate position of Hakata Bay)."
            labels={[{ label: "Mongols", x: 290, y: 105 }, { label: "Jin", x: 340, y: 165 }, { label: "Western Xia", x: 250, y: 160 }, { label: "Southern Song", x: 330, y: 255 }, { label: "Dali", x: 226, y: 280 }, { label: "Japan", x: 452, y: 222 }]} />
        </Section>
        <Section title="Animated map of the shifting balance of power" id="map">
          <Paras items={["The Song alongside the Liao and Western Xia, the rise of the Jin and the fall of the Northern Song, the north–south division between the Southern Song and the Jin, and finally unification by the Mongols — use the play button or the year tabs to watch the map change."]} />
          <SongYuanBorderMap t={SONGYUAN_MAP_EN} />
        </Section>
        <Section title="The major battles">
          <div className="flex flex-col gap-5">{LATE_BATTLES.map((b) => <BattleCard key={b.id} b={b} />)}</div>
        </Section>
      </div>

      <Paras items={["The battles of the Sui, Tang and Five Dynasties that came before the Song are covered in their own battle map. See also the features on the Generals of the Yang Family, set in the wars between the Song and the Liao, and on Water Margin, set at the end of the Northern Song."]} />
    </FeaturePage>
  );
}
