import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";
import { HeritageThumb } from "@/components/Shared";
import { FeaturePage, Section, ItemCard, PointMap, cardStyle, serif, isLive } from "@/components/en/EnFeature";

const title = "Ancient Towns of China: Pingyao, Lijiang and Other Walled Old Towns";
const description =
  "In China an “ancient town” (gucheng) is an old town inside its walls. The four great ancient towns — Pingyao, Lijiang, Langzhong and Shexian — plus Fenghuang, Dali, Jingzhou, Xiangyang, Xingcheng and Kashgar: when they were built, the history they saw and what to see today.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/ancient-towns", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/ancient-towns", type: "article", image: { title: "Ancient Towns of China", seal: "鎮" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

// Wikimedia Commons file → image URL and credit
function c(file, author, license) {
  const pd = license === "CC0" || license === "Public domain";
  return {
    imageUrl: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replace(/ /g, "_"))}`,
    credit: pd ? `Photo: ${author} / Wikimedia Commons (${license === "CC0" ? "CC0" : "public domain"})` : `Photo: ${author} / Wikimedia Commons, ${license}`,
  };
}

const TOWNS = [
  { id: "pingyao", name: "Pingyao Ancient City", location: "Pingyao County, Jinzhong, Shanxi", built: "Expanded to its present size in 1370 (third year of Hongwu, Ming)", wall: "About 6.2 km around, about 10 m high, six gates", big4: true, heritage: "World Heritage (1997)",
    photo: c("PingYaoCityWall.jpg", "Peellden", "Public domain"),
    history: "Said to have been founded under King Xuan of the Western Zhou, it took its present form when its walls were enlarged at the start of the Ming. Because its gates are arranged like a turtle’s head, tail and feet, it is also called the “Turtle City.” Under the Qing it flourished as the home base of the Shanxi merchants, and in 1823 Rishengchang, China’s first draft bank (piaohao), opened here — making it a financial center called “the Wall Street of Qing China.” Left behind by modernization, its Ming–Qing streets survived almost intact.",
    spots: [
      ["The city wall and Yingxun Gate", "Its 72 watchtowers and some 3,000 crenellations are said to stand for Confucius’s “seventy-two worthies and three thousand disciples.” You can climb up at the south gate, Yingxun Gate, and walk all the way around.", c("Pingyao Yingxun Gate.jpg", "Bairuilong", "CC BY-SA 4.0")],
      ["Rishengchang draft bank", "The shop and residence of China’s first piaohao, now a museum of the origins of Chinese banking.", c("Pingyao Rishengchang Jiuzhi 2013.08.25 06-53-01.jpg", "Zhangzhugang", "CC BY-SA 3.0")],
      ["The Market Tower", "A tower straddling South Street at the heart of the old city; from the top you can look out over the gray tiled roofs.", c("Pingyao Shilou 2013.08.26 13-22-12.jpg", "Zhangzhugang", "CC BY-SA 3.0")],
      ["South Street (Ming–Qing Street)", "The main street of the old city, lined with former draft banks and old shops, and many places serving local Pingyao beef and noodles.", c("Pingyao street (6240799738).jpg", "Francisco Anzola", "CC BY 2.0")],
      ["Pingyao County Government Office", "An almost complete Ming–Qing county office; you can see the main hall where trials were held and even the jail — a window on the work of local officials.", c("Pingyao County Government Office 平遙縣署 - panoramio.jpg", "lienyuan lee", "CC BY 3.0")],
      ["Shuanglin Temple", "An old temple southwest of the city whose 2,000-plus painted clay statues, mostly Ming, are called “a treasure house of Eastern painted sculpture.” World Heritage.", c("Shuanglin Temple.JPG", "Gisling", "CC BY 3.0")],
      ["Zhenguo Temple", "A temple northeast of the city whose Hall of Ten Thousand Buddhas, built in 963, is among the oldest wooden buildings in China. World Heritage.", c("Pingyao Zhenguo Si 2013.08.26 15-13-07.jpg", "Zhangzhugang", "CC BY-SA 3.0")],
      ["The old city at night", "After dark the gates and streets are lit up and red lanterns glow. Staying in a traditional courtyard-house inn inside the walls is recommended.", c("平遥南门夜景-流浪的狗狗 - panoramio.jpg", "aisccd", "CC BY 3.0")],
    ],
    links: [{ href: "/en/events/ming--0", label: "The founding of the Ming (Zhu Yuanzhang)" }], x: 309, y: 171 },
  { id: "lijiang", name: "Lijiang Old Town", location: "Gucheng District, Lijiang, Yunnan", built: "Took shape around the late Southern Song to early Yuan (13th century)", wall: "An old town without walls", big4: true, heritage: "World Heritage (1997)",
    photo: c("Lijiang Yunnan Old-town-02.jpg", "CEphoto, Uwe Aranas", "CC BY-SA 3.0"),
    history: "A town of the Naxi minority on a plateau about 2,400 m high. Its central Dayan district flourished under the Mu family, hereditary Naxi chieftains who governed the area under the Ming. Unusually for a Chinese old town it has no walls — a folk story says the Mu disliked that enclosing the character 木 (Mu) makes 困 (“trapped”). Canals carrying snowmelt from Jade Dragon Snow Mountain flow through the town in a web, with wooden houses lining the stone-paved lanes. Damaged in a great earthquake in 1996, it was restored and inscribed as a World Heritage Site the next year.",
    spots: [
      ["Sifang Square", "The square at the center of the old town, once the market where Tea Horse Road traders gathered, ringed with souvenir shops and teahouses; in the evening Naxi people sometimes dance in a circle.", c("Sifang Road of Dayan - panoramio.jpg", "钟启明", "CC BY-SA 3.0")],
      ["Canals and stone lanes", "Snowmelt from Jade Dragon Snow Mountain flows past the doorsteps; small bridges cross under willows, and simply walking is a pleasure.", c("Old Town of Lijiang canal 2.JPG", "BrokenSphere", "CC BY-SA 3.0")],
      ["Mu Mansion", "A reconstruction of the Mu family’s office and residence, nicknamed “the Forbidden City of Yunnan.”", c("丽江古城 木府 2026-04-01 11.jpg", "Roller Coaster Philosophy", "CC BY 4.0")],
      ["Black Dragon Pool", "A pond north of the old town; the view of Jade Dragon Snow Mountain beyond its white stone bridge and pavilion is Lijiang’s signature sight.", c("Lijiang Yunnan Black-Dragon-Pool-01.jpg", "CEphoto, Uwe Aranas", "CC BY-SA 3.0")],
      ["Jade Dragon Snow Mountain", "A snow peak of about 5,600 m north of the town; a cable car climbs to around 4,500 m.", c("Lijiang Yunnan China Jade-Dragon-Snow-Mountain-01.jpg", "CEphoto, Uwe Aranas", "CC BY-SA 3.0")],
      ["Shuhe Old Town", "An old Naxi village northwest of the town, quieter than Dayan and part of the same World Heritage Site.", c("Shuhe Street, Lijiang, Yunnan, China.jpg", "Luke Chantrell", "CC BY-SA 4.0")],
      ["Baisha Old Town", "Said to be the Mu family’s base before they moved to Dayan, with the Ming Buddhist and Daoist “Baisha murals.” World Heritage.", c("Baisha Street (33439287988).jpg", "Rod Waddington", "CC BY-SA 2.0")],
      ["Dongba script", "The pictographic script used by Naxi dongba priests for their scriptures. Signs in the old town show it alongside Chinese characters, and Dongba manuscripts are on UNESCO’s Memory of the World register.", c("Naxi Dongba script on the wall.jpg", "Jody McIntyre", "CC BY-SA 2.0")],
    ],
    links: [{ href: "/en/world-heritage", label: "World Heritage Sites in China" }], x: 219, y: 266 },
  { id: "langzhong", name: "Langzhong Ancient Town", location: "Langzhong, Nanchong, Sichuan", built: "A strategic site since the ancient state of Ba; the present streets are Ming–Qing", wall: "Surrounded on three sides by the Jialing River", big4: true, heritage: "National Famous Historical and Cultural City",
    photo: c("Langzhong Ancient Town.jpg", "Panzer VI-II", "CC BY-SA 4.0"),
    history: "Set where the Jialing River bends to surround it on three sides, it was considered an ideal site by feng shui, guarded by mountains and water. In the Three Kingdoms, Liu Bei’s sworn brother Zhang Fei held it as governor of Baxi, and in 221, just before marching to avenge Guan Yu, he was killed here by his subordinates Zhang Da and Fan Qiang. It is also the home of the Western Han astronomer Luoxia Hong, whose Taichu calendar fixed the first month as the start of the year — so Langzhong calls itself “the home of the Spring Festival.”",
    spots: [
      ["Zhang Huanhou Temple", "A temple to Zhang Fei with his tomb behind it — a place of pilgrimage for Three Kingdoms fans.", c("Langzhong Zhangfei Temple (1).jpg", "STW932", "CC BY-SA 4.0"), "/en/people/sanguo/zhang-fei"],
      ["Chuanbei Examination Hall", "A Qing examination hall with rows of the small cells where candidates were shut in — one of the best preserved.", c("Langzhong Gongyuan.jpg", "STW932", "CC BY-SA 4.0"), "/en/keju"],
      ["The view from Zhongtian Tower", "A three-story tower at the center of the old town; from the top, black tiled roofs spread out in a grid.", c("Langzhong Roofs (1).jpg", "STW932", "CC BY-SA 4.0")],
      ["Chuanbei Circuit Office", "The site of the Qing office that governed northern Sichuan, a reminder that Langzhong long was a seat of regional government.", c("Langzhong Yamen.jpg", "STW932", "CC BY-SA 4.0")],
      ["Old courtyard houses", "Ming–Qing houses around courtyards, such as the Hu family compound, dot the lanes; many now serve as inns or teahouses.", c("Langzhong Hu Family Compound.jpg", "STW932", "CC BY-SA 4.0")],
      ["The view from East Mountain", "From the hill across the Jialing you can see the whole town wrapped by the river — and why it is called a feng shui town.", c("Langzhong City View (1).jpg", "STW932", "CC BY-SA 4.0")],
      ["Baoning vinegar and Zhang Fei beef", "Local specialties: Baoning vinegar, one of China’s four famous vinegars, and dried beef named after Zhang Fei."],
    ],
    links: [], x: 262, y: 223 },
  { id: "shexian", name: "Shexian Ancient Town (Huizhou Ancient City)", location: "She County, Huangshan, Anhui", built: "A county from the Qin; seat of Huizhou prefecture from the Song", wall: "The west gate barbican and other parts survive", big4: true, heritage: "National Famous Historical and Cultural City",
    photo: c("Chaoshui Gate in Shexian 02 2014-11.JPG", "猫猫的日记本", "CC BY-SA 4.0"),
    history: "For nearly a thousand years the seat of government of the Huizhou region at the foot of the Yellow Mountains. Under the Ming and Qing it flourished as home of the Huizhou merchants, who made vast fortunes in salt and tea; their white-walled, black-tiled mansions and the stone memorial arches (paifang) honoring examination graduates and loyal officials still stand around the town. It is also the source of She inkstones and Hui ink, prized among the scholar’s “four treasures.” Zhu Xi, who perfected Neo-Confucianism, came from a Huizhou family, and the region was called a southeastern home of learning.",
    spots: [
      ["Xu Guo Memorial Arch", "A stone arch built in 1584 to honor the Grand Secretary Xu Guo; its unusual four-sided, eight-pillared form gives it the name “Eight-Legged Arch.”", c("Xuguoshifang 5173.jpg", "Doctoroftcm", "CC BY-SA 3.0")],
      ["Huizhou Prefecture Office", "A reconstruction of the Huizhou prefectural office, showing how Ming–Qing local government worked.", c("徽州古城——徽州府衙 - panoramio.jpg", "江上清风1961", "CC BY 3.0")],
      ["Doushan Street", "An old street of merchants’ mansions, with tall white walls and stepped “horse-head walls” to stop fires spreading.", c("Shexian Doushan Jie 2016.11.13 13-13-29.jpg", "Zhangzhugang", "CC BY-SA 4.0")],
      ["Yuliang Dam", "An old stone weir on the Lian River, from which Huizhou merchants set out by boat for Hangzhou; an old stone-paved landing town survives beside it.", c("Shexian Yuliang 2016.11.13 07-17-19.jpg", "Zhangzhugang", "CC BY-SA 4.0")],
      ["Tangyue memorial arches", "In Tangyue village west of the town, seven Ming–Qing stone arches stand in a row — the emblem of Huizhou’s arch culture.", c("Tangyue Village, 2021-09-26 03.jpg", "Siyuwj", "CC BY-SA 4.0")],
      ["Hongcun and Xidi (a short trip)", "Old Huizhou villages in Yi County, also in Huangshan, whose landscapes of ponds and channels are called “villages in an ink painting”; World Heritage since 2000.", c("Ancient Villages in Southern Anhui – Xidi and Hongcun-114145.jpg", "Giovanni Boccardi", "CC BY-SA 3.0 IGO")],
    ],
    links: [{ href: "/en/people/southernsong/zhu-xi", label: "Zhu Xi" }], x: 355, y: 238 },
  { id: "fenghuang", name: "Fenghuang Ancient Town", location: "Fenghuang County, Xiangxi Tujia and Miao Autonomous Prefecture, Hunan", built: "Fortified as a military base under the Ming and Qing", wall: "The east and north gate towers survive", heritage: "National Famous Historical and Cultural City",
    photo: c("Tuo River in Fenghuang County, Hunan, China1.jpg", "Huangdan2060", "CC0"),
    history: "It began as a military base set up by the Ming and Qing to control the Miao people of the southwestern hills; under the Ming a long barrier, sometimes called the “Southern Great Wall,” was also built nearby. Along the Tuo River that runs through the town stand diaojiaolou — stilt houses projecting over the water on posts — whose lights shine on the river at night. It is the hometown of Shen Congwen, one of the great writers of modern China, and many come in search of the western Hunan scenery of his novel Border Town.",
    spots: [
      ["The Tuo River and its stilt houses", "Houses on stilts lining the river — best seen drifting downstream in a small boat.", c("Tuo River in Fenghuang County, Hunan, China4.jpg", "Huangdan2060", "CC0")],
      ["The Tuo River at night", "At dusk the riverside houses light up all at once and their lights shimmer on the water — the town’s most popular hour.", c("Fenghuang County night view 20190727.jpg", "Sunyiming", "CC BY-SA 4.0")],
      ["Rainbow Bridge", "A covered bridge across the Tuo, with shops inside; at night it glows like a rainbow.", c("Fenghuang Hongqiao (Fenghuang Rainbow-Shaped Bridge) 1, 9 November 2010.jpg", "Huangdan2060", "CC0")],
      ["The wall and the east and north gate towers", "Gates rebuilt in stone under the Qing; the red sandstone wall runs along the river.", c("A wall, Fenghuang County, Hunan, China.jpg", "Huangdan2060", "CC0")],
      ["Canal-side lanes", "Narrow canals run through the town, with Miao silversmiths and ginger-candy shops along the stone lanes.", c("Canal alleyway Fenghuang ancient town Hunan.jpg", "Lianguanlun", "CC BY 4.0")],
      ["Former residence of Shen Congwen", "The house where the writer Shen Congwen was born and grew up; his grave is on the outskirts."],
      ["The Southern Great Wall", "Part of the barrier built by the Ming along the border with the Miao lands has been reconstructed.", null, "/en/great-wall"],
    ],
    links: [], x: 289, y: 256 },
  { id: "dali", name: "Dali Ancient Town", location: "Dali, Dali Bai Autonomous Prefecture, Yunnan", built: "Built in 1382 (15th year of Hongwu, Ming)", wall: "The south and north gates and others have been rebuilt", heritage: "National Famous Historical and Cultural City",
    photo: c("Dali Old Town 05.JPG", "Brücke-Osteuropa", "Public domain"),
    history: "Between the Cang Mountains and Erhai Lake lay the capitals of the Nanzhao kingdom of the 8th–9th centuries and of the Dali kingdom, which lasted some three hundred years from 937. Dali was an independent state standing beside the Song until a Mongol army under Kublai destroyed it in 1253. The present old town grew from the city the Ming built after conquering Yunnan. Its streets are lined with the white-walled houses of the Bai people, and it is famous as the hometown of Duan Yu, prince of Dali, in Jin Yong’s wuxia novel Demi-Gods and Semi-Devils.",
    spots: [
      ["The Three Pagodas of Chongsheng Temple", "Pagodas of a temple from the Nanzhao and Dali kingdoms; the central Qianxun Pagoda, about 69 m tall, is the symbol of Dali. The reflection in the pond is the classic view.", c("Three Pagodas of Chongsheng Temple view from reflecting pond.jpg", "Jason Zhang", "CC BY-SA 3.0")],
      ["Erhai Lake", "The ear-shaped lake east of the old town; many people tour its shores by bicycle.", c("Erhai Lake in 2023.jpg", "Nishino Asuka", "CC BY-SA 4.0")],
      ["The Cang Mountains", "A range of 4,000-m peaks west of the town; a cable car climbs partway, with views down over Erhai and the town.", c("Dali-Cangshan Erhai Lake 2017-11-16.jpg", "Toni Wöhrl", "CC BY-SA 4.0")],
      ["South Gate", "The main gate of the old town; from its tower you can take in the tiled roofs and the Cang Mountains behind at once.", c("Dali south gate at night.JPG", "Brian Dell", "Public domain")],
      ["Old-town streets and Foreigners’ Street", "Stone-paved streets with channels of water from the Cang Mountains; the cafés and shops of Foreigners’ Street stay busy late into the night.", c("202605 Streets in Dali Old Town 05.jpg", "Jonashtand", "CC BY-SA 4.0")],
      ["Xizhou Old Town (a short trip)", "An old Bai town on the west shore of Erhai, with merchants’ mansions with painted white walls and the popular local flatbread, Xizhou baba.", c("Xizhou Old Town.jpg", "Mx. Granger", "CC0")],
      ["Bai three-course tea", "The Bai welcoming tea of three cups — bitter, sweet and lingering — said to represent life."],
    ],
    links: [{ href: "/en/dynasty-territory-map", label: "Territory map (the Song and Dali)" }], x: 218, y: 277 },
  { id: "jingzhou", name: "Jingzhou Ancient City", location: "Jingzhou, Hubei", built: "The present wall was rebuilt in 1646 (Qing) on the Ming city", wall: "About 11 km around, six gates", heritage: "National Famous Historical and Cultural City",
    photo: c("Muraille Est de Jingzhou.JPG", "Popolon", "CC BY-SA 3.0"),
    history: "A strategic point on the middle Yangtze; in the Spring and Autumn and Warring States periods Ying (Jinan City), the capital of Chu, lay nearby. In the Three Kingdoms it was so fought over that people said “whoever holds Jingzhou holds the realm”: after Red Cliffs Liu Bei held it, nominally on loan from Sun Quan, with Guan Yu as its defender. In 219, while Guan Yu was attacking Fancheng to the north, Lü Meng of Wu took Jingzhou in a surprise attack, and Guan Yu was defeated and killed. The brick wall and the moat outside it survive almost all the way around, and you can walk along the top.",
    spots: [
      ["Binyang Tower (East Gate)", "The brick wall has an older earthen wall inside it; gate towers such as Binyang Tower over the east gate have been rebuilt.", c("Binyang Tower 賓陽樓 - panoramio.jpg", "lienyuan lee", "CC BY 3.0")],
      ["Jingzhou Museum", "Displays lacquerware and silks from Chu tombs and the preserved body of a Western Han man, among much else.", c("Jingzhou Museum.jpg", "Doris Antony", "CC BY-SA 3.0")],
      ["Chu lacquerware", "Warring States Chu lacquerware in the museum; phoenix patterns painted in red and black typify Chu art.", c("Lacquer box of phoenix design, Warring States, Jingzhou, Hubei, Jingzhou Museum.jpg", "Huangdan2060", "CC BY 3.0")],
      ["Guandi Temple", "A temple said to stand on the site of Guan Yu’s residence.", c("荆州关帝庙 - panoramio.jpg", "guan", "CC BY 3.0"), "/en/people/sanguo/guan-yu"],
      ["Statues of Guan Yu", "Several statues of Guan Yu stand in and around the old city; in Guangong Yiyuan park on the outskirts there is a giant one about 58 m tall.", c("Guan Yu Statue.jpg", "SifaV6", "CC BY-SA 4.0")],
      ["Jinan City ruins", "The site of the Chu capital about 5 km north of the old city, where earthen walls still stand."],
    ],
    links: [{ href: "/en/events/sanguo--0", label: "The Battle of Red Cliffs" }], x: 309, y: 234 },
  { id: "xiangyang", name: "Xiangyang Ancient City", location: "Xiangyang, Hubei", built: "A walled city since the Han; the present wall is Ming", wall: "Surrounded by a moat up to about 250 m wide", heritage: "National Famous Historical and Cultural City",
    photo: c("Xiangyang City Wall 01.jpg", "Fxqf", "CC BY-SA 4.0"),
    history: "Facing Fancheng across the Han River, it was the key fortress commanding the north–south route between North China and the south. At the end of the Eastern Han, Liu Biao made it his base in Jing province, and Liu Bei’s “three visits” to Zhuge Liang, living in seclusion at Longzhong to the west, took place nearby. At the end of the Southern Song it held out for more than five years under siege by the Yuan, until in 1273 trebuchets built by Muslim engineers forced its surrender, opening the way to the fall of the Southern Song. It is also famous as the city defended by Guo Jing and his wife in Jin Yong’s The Return of the Condor Heroes.",
    spots: [
      ["The city wall and moat", "Surrounded by one of the widest moats in China, it is called “the First Walled City of China.” Parts of the wall can be walked.", c("Xiangyang City Wall 03.jpg", "Fxqf", "CC BY-SA 4.0")],
      ["Linhan Gate", "The north gate facing the Han River; its tower survives as the face of the old city.", c("20250525 Linhan Men.jpg", "Yumeto", "CC BY-SA 4.0")],
      ["The Han River shore", "The Han River outside Linhan Gate; Fancheng is on the far bank, and the Yuan army cut the pontoon bridge between the two cities to isolate Xiangyang.", c("20250525 Han River outside the Linhan Gate.jpg", "Yumeto", "CC BY-SA 4.0")],
      ["Gulongzhong", "Where Zhuge Liang is said to have farmed in his youth — the scene of the “three visits,” about 13 km west of the old city.", c("Longzhong, Nanyang, China1.jpg", "Sherbet", "CC BY 2.5"), "/en/people/sanguo/zhuge-liang"],
      ["Mi Fu Memorial Temple", "A shrine to the Northern Song calligrapher and painter Mi Fu, a native of Xiangyang, with many steles carved with his calligraphy.", c("米公祠.jpg", "三猎", "CC BY-SA 4.0")],
      ["Tang City", "A theme park of Tang-dynasty streets built as a film set.", c("China Hubei Xiangyang Tang Dynasty City Film and TV Base1.jpg", "Sherbet", "CC BY 2.5")],
    ],
    links: [{ href: "/en/events/yuan--1", label: "The Yuan conquers the Southern Song" }], x: 308, y: 219 },
  { id: "xingcheng", name: "Xingcheng Ancient City (Ningyuan)", location: "Xingcheng, Huludao, Liaoning", built: "Built in 1428 (third year of Xuande, Ming) as Ningyuan Garrison", wall: "About 3.3 km around, four gates", heritage: "Major Historical and Cultural Site Protected at the National Level",
    photo: c("Xingcheng Defensive wall 2010.09.JPG", "猫猫的日记本", "CC BY-SA 3.0"),
    history: "A defensive city the Ming placed in the Liaoxi Corridor, the narrow plain leading from Beijing through Shanhai Pass to the northeast. In 1626 Nurhaci of the Later Jin attacked with a great army, but the commander Yuan Chonghuan met him with Portuguese cannon and, for the first time, turned back the hitherto unbeaten Nurhaci (the Battle of Ningyuan); Nurhaci died that same year. The square wall and the cross-shaped avenues running from the central Drum Tower survive almost as they were in the Ming.",
    spots: [
      ["The wall and gates", "The cross-shaped avenues linking the four gates with the central Drum Tower survive, and you can walk all the way around the top of the wall.", c("Xingcheng East Gate.jpg", "Pechorin04", "CC BY-SA 3.0")],
      ["The old-town streets", "Ming–Qing offices and houses survive inside the walls, with souvenir shops around the Drum Tower.", c("兴城古城 - panoramio.jpg", "周李", "CC BY-SA 3.0")],
      ["The Zu family memorial arches", "Two stone arches honoring the Ming generals Zu Dashou and Zu Dale; Zu Dashou later went over to the Qing. (Photo from a prewar Japanese photo collection.)", c("亜東印画輯 08 035 \"祖氏石坊（興城）\".jpg", "Atō Inga Kyōkai", "Public domain")],
      ["Xingcheng Confucian Temple", "A Confucian temple inside the walls, founded in the Ming soon after Ningyuan was built."],
      ["Xingcheng beaches and hot springs", "With a beach and hot springs near the old city, it is also known as a resort.", c("Xingcheng beach, Liaoning Province, China.jpg", "Pixabay", "CC0")],
    ],
    links: [{ href: "/en/events/ming--6", label: "Li Zicheng and the fall of the Ming" }, { href: "/en/events/qing--0", label: "The Qing enter Beijing" }], x: 373, y: 139 },
  { id: "kashgar", name: "Kashgar Old City", location: "Kashgar, Xinjiang Uyghur Autonomous Region", built: "An oasis city since the Han-era kingdom of Shule", wall: "The east gate and others have been rebuilt", heritage: "National Famous Historical and Cultural City",
    photo: c("East gate of the Ancient City of Kashi (20230923104429).jpg", "N509FZ", "CC BY-SA 4.0"),
    history: "At the western edge of the Taklamakan Desert, where the northern and southern Silk Road routes meet. Under the Han it was the kingdom of Shule, and the Eastern Han general Ban Chao used it as his base for nearly thirty years to bring the states of the Western Regions together. Later Islam spread here, and it flourished as a center of Uyghur trade and faith. Much of the old city, a maze of mud-brick houses, was rebuilt in large-scale renovations from 2009, but every morning at the old city gate an “opening ceremony” welcomes visitors with dancers in traditional dress.",
    spots: [
      ["Id Kah Mosque", "Said to have been founded in 1442, one of the largest mosques in China; its yellow-tiled gate is the face of the old city.", c("Id Kah Mosque (24052287545).jpg", "Laika ac", "CC BY-SA 2.0")],
      ["Gaotai residences", "An old neighborhood of mud-brick houses piled one upon another on top of a cliff.", c("20250525喀什高台民居.jpg", "MasaneMiyaPA", "CC BY-SA 4.0")],
      ["Lanes of the old city", "Earth-colored lanes wind like a maze, with carved wooden doors and windows and bread ovens — scenes of Uyghur life.", c("Kashgar old town (2).jpg", "Radosław Botev", "CC BY 3.0 PL")],
      ["Craftsmen’s street and hat bazaar", "Streets in the old city lined with workshops making embroidered Uyghur caps, copperware and musical instruments.", c("Bazaar of Hats at Aria Rd, Ancient City of Kashi (20230923192011).jpg", "N509FZ", "CC BY-SA 4.0")],
      ["The Grand Bazaar", "A huge market carrying on the tradition of a meeting place for Central Asian traders, piled with carpets, dried fruit and knives.", c("Kashgar Bazaar (23412139614).jpg", "Laika ac", "CC BY-SA 2.0")],
      ["Afaq Khoja Mausoleum", "The tomb of a 17th-century family of Islamic leaders, with a beautiful green-tiled dome — and a legend that it is the tomb of the Qianlong Emperor’s “Fragrant Concubine.”", c("Kashgar - Afaq Khoja Mausoleum.jpg", "Radosław Botev", "CC BY 3.0 PL")],
    ],
    links: [{ href: "/en/silk-road", label: "The Silk Road" }, { href: "/en/events/westernhan--4", label: "Zhang Qian travels west" }], x: 37, y: 150 },
];

const FAQ = [
  { q: "What is a Chinese “ancient town” (gucheng)?", a: "In Chinese, cheng means a city wall, or the town enclosed by it. So a gucheng, often translated “ancient city” or “old town,” is not a castle but an old town district surrounded by walls and gates, with traditional streets intact. Some, like Lijiang, are called gucheng even without walls." },
  { q: "What are the “Four Great Ancient Towns of China”?", a: "Usually Pingyao in Shanxi, Lijiang in Yunnan, Langzhong in Sichuan and Shexian in Anhui. They lie in the north, southwest, west and southeast, from different eras, each with its own character — finance, minority culture, feng shui and merchant culture." },
  { q: "Which ancient towns are World Heritage Sites?", a: "Of those on this page, Pingyao and Lijiang were both inscribed in 1997. Most of the others are designated “National Famous Historical and Cultural Cities,” a national program for preserving historic townscapes." },
  { q: "Which towns still have complete walls?", a: "Pingyao, Jingzhou, Xingcheng and Xiangyang keep walls running almost all the way around, and you can walk along the top. Among big cities, the Ming walls of Xi’an and Nanjing are famous — see the Great Ancient Capitals page." },
];

export default function EnglishAncientTownsPage() {
  return (
    <FeaturePage
      title="Ancient Towns of China"
      jaPath="/ancient-towns"
      intro="In China an “ancient town” (gucheng) means not a castle but an old town inside its walls. Some keep their Ming–Qing stone streets and merchants’ houses intact; others were defended by Three Kingdoms generals and saw battles that decided the fate of dynasties. This page introduces ten — the “Four Great Ancient Towns” of Pingyao, Lijiang, Langzhong and Shexian, and six more closely tied to the timeline — with their origins, history and what you can see today."
      related={[
        { href: "/en/ancient-capitals", label: "The great ancient capitals" },
        { href: "/en/china-castles", label: "Walled cities and fortresses" },
        { href: "/en/world-heritage", label: "World Heritage in China" },
      ]}
    >
      <PointMap outline={CHINA_OUTLINE} taiwan={TAIWAN_OUTLINE} points={TOWNS} note="A map based on China’s real coastline. The numbers are the ancient towns introduced below." />
      <div className="flex flex-col gap-8">
        {TOWNS.map((t, i) => (
          <section key={t.id} id={t.id} style={{ ...cardStyle, scrollMarginTop: 16 }}>
            <div style={{ width: "100%", height: 220, backgroundColor: "#EFE7D0", overflow: "hidden" }}>
              <HeritageThumb imageUrl={t.photo.imageUrl} name={t.name} type="building" />
            </div>
            <div style={{ padding: "14px 16px" }}>
              <div style={{ fontSize: 10, color: COLORS.mist, marginBottom: 6 }}>{t.photo.credit}</div>
              <h2 style={{ ...serif, fontSize: 21, fontWeight: 900, color: COLORS.ink }}>
                <span style={{ color: COLORS.vermilion, fontSize: 15, marginRight: 8 }}>{i + 1}</span>
                {t.name}
                {t.big4 && <span style={{ display: "inline-block", marginLeft: 8, padding: "1px 7px", fontSize: 10.5, fontWeight: 700, color: "#FBF8F0", backgroundColor: COLORS.vermilion, verticalAlign: "middle" }}>Four Great</span>}
              </h2>
              <div style={{ fontSize: 12.5, color: COLORS.vermilionSoft, marginTop: 2 }}>{t.location}</div>
              <dl style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 8, lineHeight: 1.7 }}>
                <div><b style={{ color: COLORS.gold }}>Built</b> {t.built}</div>
                <div><b style={{ color: COLORS.gold }}>Walls</b> {t.wall}</div>
                <div><b style={{ color: COLORS.gold }}>Status</b> {t.heritage}</div>
              </dl>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 10 }}>{t.history}</p>
              <h3 style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, marginTop: 14, marginBottom: 8 }}>What to see</h3>
              <div className="flex flex-col gap-3">
                {t.spots.map(([name, note, photo, href]) => (
                  <ItemCard key={name} title={name} imageUrl={photo?.imageUrl} credit={photo?.credit} links={href && isLive(href) ? [{ href, label: "Read more" }] : []}>
                    {note}
                  </ItemCard>
                ))}
              </div>
              {t.links.filter((l) => isLive(l.href)).length > 0 && (
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3" style={{ fontSize: 13 }}>
                  {t.links.filter((l) => isLive(l.href)).map((l) => (
                    <a key={l.href} href={l.href} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>{l.label} →</a>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <Section title="Frequently asked questions">
        <div className="flex flex-col gap-3 mt-8">
          {FAQ.map((f) => (
            <ItemCard key={f.q} title={f.q}>{f.a}</ItemCard>
          ))}
        </div>
      </Section>
    </FeaturePage>
  );
}
