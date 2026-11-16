import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, translateCredit } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";
import { HeritageThumb } from "@/components/Shared";
import { FeaturePage, Section, ItemCard, PointMap, DataTable, cardStyle, serif, isLive } from "@/components/en/EnFeature";
import Link from "next/link";

const title = "The Great Ancient Capitals of China Today: Xi’an, Luoyang, Nanjing, Beijing and More";
const description =
  "Chang’an is Xi’an, Jiankang is Nanjing, Bianjing is Kaifeng, Lin’an is Hangzhou: what China’s historic capitals have become. The Eight Great Ancient Capitals plus Datong and Chengdu — their history as capitals, the cities today, and their great historic sights.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/ancient-capitals", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/ancient-capitals", type: "article", image: { title: "The Great Ancient Capitals of China", seal: "京" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

// Image and related event from the timeline heritage data, by Japanese name (partial match)
function heritage(name) {
  if (!name) return null;
  for (const era of ERAS) {
    for (const ev of era.events) {
      const h = ev.heritage?.find((x) => stripRuby(x.name).includes(name));
      if (h) return { imageUrl: h.imageUrl, credit: translateCredit(h.credit), type: h.type, eventSlug: ev.slug };
    }
  }
  return null;
}

const CITIES = [
  { id: "xian", city: "Xi’an", province: "Capital of Shaanxi province", population: "about 13 million", old: "Haojing, Xianyang (nearby), Chang’an, Daxing",
    dynasties: "Over ten dynasties, including the Western Zhou, Qin, Western Han, Xin, Former Qin, Northern Zhou, Sui and Tang",
    history: "At the heart of the Guanzhong basin on the Wei River, this was the capital for some 1,100 years — the Zhou’s Haojing, the Qin’s Xianyang, the Han’s and Tang’s Chang’an — the “ancient capital of thirteen dynasties.” Tang Chang’an, with over a million people, was one of the largest cosmopolitan cities in the world; as the eastern terminus of the Silk Road it drew merchants and students from afar, and served as the model for Japan’s Heijō-kyō and Heian-kyō. After the Tang fell the political center moved east, and under the Ming it was renamed “Xi’an.”",
    today: "Today it is the largest city in northwest China, with aerospace and semiconductor industries and many universities. Its Ming city walls survive almost intact, and inside the old town are the Bell and Drum Towers and the food stalls of the Muslim Quarter. Ancient sites coexist with skyscrapers and a subway, making it one of China’s leading tourist cities.",
    hero: "大雁塔",
    spots: [
      ["The Terracotta Army and the Mausoleum of the First Qin Emperor", "The First Emperor’s underground army, found in 1974 by farmers digging a well, with life-size soldiers said to number 8,000. World Heritage.", "兵馬俑", "/en/terracotta-army"],
      ["The Xi’an City Wall", "A wall about 13.7 km around, built in the Hongwu era of the Ming on the foundations of the Tang imperial city. You can ride a rented bicycle all the way around the top."],
      ["The Great Wild Goose Pagoda and Da Ci’en Temple", "A pagoda built in 652 to house the scriptures Xuanzang brought back from India. A great fountain show is held in the square to the north at night. World Heritage.", "大雁塔"],
      ["Daming Palace National Heritage Park", "The site of the palace where Tang emperors held court. The main gate, Danfeng Gate, has been rebuilt, and the vast grounds are now a park. World Heritage.", "大明宮"],
      ["Huaqing Pool", "The hot-spring palace where Xuanzong and Yang Guifei stayed, the setting of Bai Juyi’s “Song of Everlasting Regret,” in the same Lintong district as the Terracotta Army.", "華清池"],
      ["Shaanxi History Museum and Beilin Museum", "A museum of the treasures of the Zhou, Han and Tang, and a “library in stone” of steles carved by the great calligraphers."],
    ], x: 284, y: 198 },
  { id: "luoyang", city: "Luoyang", province: "Prefecture-level city, Henan", population: "about 7 million", old: "Luoyi, Luoyang, the Eastern Capital, the Divine Capital",
    dynasties: "Eastern Zhou, Eastern Han, Wei, Western Jin, Northern Wei, Sui and Tang (eastern capital), Later Tang and others",
    history: "On the Luo River, a tributary of the Yellow River, Luoyang is the ancient capital that best represents the Central Plain, the “center of the world.” The Eastern Zhou, Eastern Han, Wei, Western Jin and Northern Wei made it their capital, and under the Sui and Tang it flourished as the “Eastern Capital” alongside Chang’an. Wu Zetian, after renaming the dynasty Zhou, called Luoyang the “Divine Capital” and made it the center of government. In Japanese, “going up to the capital” is still called jōraku — “going up to Luo.”",
    today: "Today it is a major city of western Henan, known for machinery such as tractors. Every April crowds come to its Peony Festival, and it is called the “City of Peonies.” The Yingtian Gate of the Sui–Tang palace city has been rebuilt and is lit up at night.",
    hero: "龍門石窟",
    spots: [
      ["The Longmen Grottoes", "Cave temples carved into the cliffs on both banks of the Yi River from the Northern Wei to the Tang. The Vairocana Buddha, said to have been funded by Wu Zetian, is about 17 m tall. World Heritage.", "龍門石窟"],
      ["White Horse Temple", "Said to be China’s first Buddhist temple, with the legend that a white horse carried scriptures here under the Eastern Han."],
      ["Guanlin Temple", "Where the head of Guan Yu, killed by Wu, is said to be buried — a place of pilgrimage for Three Kingdoms fans."],
      ["The Sui–Tang Luoyang palace city (Yingtian Gate and the Mingtang)", "The site of the eastern capital’s palace built by Emperor Yang of Sui; the huge Mingtang and Heavenly Hall built by Wu Zetian have been reconstructed over the ruins."],
      ["Museum of the Zhou King’s Six-Horse Chariot", "Displays the remains of a six-horse chariot used by an Eastern Zhou king, exactly as excavated.", "洛陽周王城"],
      ["Erlitou Site Museum of the Xia Capital", "A museum of finds from the Erlitou site (Yanshi District), thought to be the capital of the Xia dynasty.", "二里頭"],
    ], x: 306, y: 197 },
  { id: "nanjing", city: "Nanjing", province: "Capital of Jiangsu province", population: "about 9.3 million", old: "Jinling, Jianye, Jiankang, Yingtian, Tianjing",
    dynasties: "Wu, Eastern Jin, Song, Qi, Liang, Chen (the Six Dynasties), Southern Tang, early Ming, the Taiping Heavenly Kingdom, the Republic of China",
    history: "A strategic point on the lower Yangtze, it was the capital of the “Six Dynasties” from Wu of the Three Kingdoms to Chen of the Southern Dynasties — the center of the south, where aristocratic and Buddhist culture flowered while North China was torn by war. The Ming founder Zhu Yuanzhang built a wall over 30 km long and made it his capital; when the Yongle Emperor later moved to Beijing, the name “Nanjing” — “southern capital” — stuck. In modern times it was the capital of the Taiping Heavenly Kingdom, of Sun Yat-sen’s provisional government and of the Nationalist government.",
    today: "Today it is the capital of Jiangsu and one of the great cities of the Yangtze Delta, as well as a university city. More than 20 km of its Ming walls survive, and with its avenues of plane trees it keeps the look of an old capital. In 1937, during the war with Japan, the Nanjing Massacre took place, and a memorial hall to its victims stands in the city.",
    hero: "明孝陵",
    spots: [
      ["Ming Xiaoling Mausoleum", "The tomb of the Ming founder Zhu Yuanzhang and his empress, known for its Sacred Way lined with stone animals. World Heritage.", "明孝陵"],
      ["Sun Yat-sen Mausoleum", "Sun Yat-sen’s tomb on the slopes of Purple Mountain, its memorial hall at the top of 392 stone steps."],
      ["The Ming City Wall and the Gate of China", "One of the largest surviving city walls in the world. The Gate of China is a huge barbican with four layers of gates and caverns for hiding troops."],
      ["Confucius Temple and the Qinhuai River", "A lively district around a temple to Confucius; at night you can tour the lantern-lit Qinhuai River by boat."],
      ["The Presidential Palace", "A building that changed hands from the Qing viceroy’s office to the Taiping palace to the Republic’s presidential palace — a walk through modern Chinese history."],
      ["Six Dynasties Museum", "A museum built over remains of the walls of Jiankang, conveying the capital of the Six Dynasties.", "六朝建康城"],
    ], x: 358, y: 218 },
  { id: "beijing", city: "Beijing", province: "Capital of the People’s Republic (municipality)", population: "about 21.9 million", old: "Ji, Yanjing, Zhongdu, Dadu, Beiping",
    dynasties: "Liao (secondary capital), Jin, Yuan, Ming, Qing, People’s Republic of China",
    history: "Long ago it was Ji, capital of the Warring States kingdom of Yan, on the frontier between northern peoples and Han Chinese. After serving as a secondary capital of the Liao, it became the Jin capital Zhongdu in 1153, and Kublai of the Yuan built a new capital, Dadu. The Ming Yongle Emperor moved the capital here from Nanjing in 1421 and completed the Forbidden City, and for some five hundred years, to the end of the Qing, it remained the political center of China.",
    today: "As capital of the People’s Republic it is the political and cultural center, a giant city of over 20 million — and the only city to have hosted both the Summer (2008) and Winter (2022) Olympics. The north–south axis of the city through the Forbidden City became a World Heritage Site in 2024 as the “Beijing Central Axis,” and traditional courtyard houses survive in the lanes called hutongs.",
    hero: "紫禁城",
    spots: [
      ["The Forbidden City (Palace Museum)", "The palace where Ming and Qing emperors lived — a 720,000 m² compound crowded with buildings, one of the largest surviving wooden palace complexes in the world. World Heritage.", "紫禁城"],
      ["The Temple of Heaven", "The altar where emperors prayed to Heaven for good harvests, famed for the round, blue-tiled Hall of Prayer for Good Harvests. World Heritage."],
      ["The Summer Palace", "An imperial garden that Empress Dowager Cixi is said to have rebuilt with navy funds, with Kunming Lake and the Long Corridor. World Heritage."],
      ["The Great Wall (Badaling, Mutianyu)", "The Ming wall runs along the mountains in the north of the municipality, an easy day trip from the center. World Heritage.", "万里の長城", "/en/great-wall"],
      ["The Ming Tombs", "The tombs of thirteen Ming emperors from Yongle on; Dingling, whose underground palace is open, is the best known. World Heritage."],
      ["Tiananmen and the hutongs", "The main gate of the Forbidden City, where the founding of the People’s Republic was proclaimed in 1949. Rickshaw tours of the nearby hutongs are popular."],
    ], x: 340, y: 147 },
  { id: "kaifeng", city: "Kaifeng", province: "Prefecture-level city, Henan", population: "about 4.8 million", old: "Daliang, Bianzhou, Bianjing, Dongjing",
    dynasties: "“Capital of eight dynasties”: Wei of the Warring States, Later Liang, Later Jin, Later Han, Later Zhou, Northern Song and the late Jin",
    history: "A crossroads where the Yellow River met the canals, it began as Daliang, capital of Wei in the Warring States, and was the capital of the Five Dynasties and the Northern Song. The Northern Song capital, Dongjing, was a commercial city said to have held a million people, with shops open late into the night — its bustle captured in the scroll Along the River During the Qingming Festival. After the Jin took it in the Jingkang Incident of 1127, it was never a capital again.",
    today: "Today it is a mid-sized city in eastern Henan, which gave up its role as provincial capital to Zhengzhou in 1954. Buried again and again by Yellow River floods, with new cities built on top, it has the capitals of successive eras stacked in layers underground — “a city upon a city.” It is known for its old streets, night markets and autumn chrysanthemum festival.",
    hero: "清明上河図",
    spots: [
      ["Qingming Riverside Landscape Garden", "A theme park recreating the streets of Along the River During the Qingming Festival, with costumed Song-style performances and a night show on the water.", "清明上河図"],
      ["The Iron Pagoda", "A Buddhist pagoda about 56 m tall, built in 1049; its brown glazed bricks look like iron, hence the name."],
      ["Dragon Pavilion", "A Qing-dynasty pavilion on the site of the Northern Song imperial palace, between two lakes."],
      ["Daxiangguo Temple", "A famous temple closely tied to the Northern Song imperial family; in the Water Margin, Lu Zhishen keeps its vegetable garden."],
      ["Kaifeng Prefecture Hall and Lord Bao Memorial", "The office and shrine associated with Bao Zheng, the judge famed for fair verdicts. The prefecture hall is a reconstruction."],
    ], x: 334, y: 196 },
  { id: "hangzhou", city: "Hangzhou", province: "Capital of Zhejiang province", population: "about 11.9 million", old: "Qiantang, Lin’an",
    dynasties: "Wuyue (Five Dynasties and Ten Kingdoms), Southern Song",
    history: "It grew as the southern terminus of the Sui Grand Canal, and the Wuyue kingdom of the Ten Kingdoms made it its capital. The Southern Song, having lost Kaifeng in the Jingkang Incident, named it Lin’an as a “temporary residence” and made it the de facto capital for some 150 years. Marco Polo, visiting under the Yuan, is said to have praised it as the finest and most splendid city in the world.",
    today: "Today it is the capital of Zhejiang and, as home to Alibaba’s headquarters, a great hub of IT and e-commerce; it hosted the G20 summit in 2016 and the Asian Games in 2023. The scenery of water and greenery celebrated in the saying “Above there is heaven; below there are Suzhou and Hangzhou” is still intact, with Longjing tea plantations around West Lake.",
    hero: "臨安城",
    spots: [
      ["West Lake", "A lake whose causeways were built by Bai Juyi and Su Shi, dotted with the famous “Ten Scenes of West Lake.” World Heritage."],
      ["Lingyin Temple", "An old temple said to have been founded under the Eastern Jin; on Feilai Peak in its grounds many Buddhist figures are carved into the rock."],
      ["Yue Fei Temple", "A temple to Yue Fei, the Southern Song general who fought the Jin, with kneeling statues of Qin Hui and his wife, who brought him down.", "岳王廟"],
      ["Leifeng Pagoda and Liuhe Pagoda", "Pagodas built under the Wuyue kingdom. Leifeng Pagoda collapsed in 1924 and was rebuilt in 2002; Liuhe Pagoda overlooks the Qiantang River."],
      ["The Southern Song Imperial Street and Lin’an city site", "The avenue the Southern Song emperors used is now a pedestrian street of old shops; excavation of the palace city continues.", "臨安城"],
      ["The Grand Canal and the ruins of Liangzhu", "The end of the Grand Canal to Beijing (near Gongchen Bridge), and the remains of a city about 5,000 years old. Both World Heritage.", "京杭大運河"],
    ], x: 368, y: 235 },
  { id: "anyang", city: "Anyang", province: "Prefecture-level city, Henan", population: "about 5.5 million", old: "Yin, Ye (nearby), Xiangzhou",
    dynasties: "Shang (later period); at nearby Ye, Wei (as kingdom), Later Zhao, Former Yan, Eastern Wei and Northern Qi",
    history: "The Shang king Pan Geng is said to have moved his capital here, and it was the capital of the later Shang for some 250 years. In the 20th century huge numbers of bones and turtle shells inscribed with oracle-bone script were found here, proving that the Shang dynasty, once thought legendary, really existed. Ye, to the north, was Cao Cao’s base as King of Wei, and later the capital of several Northern Dynasties.",
    today: "Today it is a provincial city in northern Henan with steel and other industries. In 1988 it was counted among China’s ancient capitals, becoming one of the “Eight Great Ancient Capitals.” As the birthplace of Chinese writing it has a museum of the script, and in 2009 the announcement of the discovery of the “Cao Cao Mausoleum” made headlines.",
    hero: "殷墟遺跡",
    spots: [
      ["Yinxu", "The site of the Shang palaces, ancestral temples and royal tombs. You can see the pits where oracle bones were found and the pits of buried chariots. World Heritage.", "殷墟遺跡"],
      ["National Museum of Chinese Writing", "A national museum tracing the history of writing from oracle-bone script to modern characters, opened in 2009."],
      ["Cao Cao Mausoleum Site Museum", "Built over the tomb thought to be Cao Cao’s and opened in 2023; visitors look down into the burial chambers."],
      ["Youli City and Yue Fei Temple", "Where King Wen of Zhou is said to have been imprisoned by King Zhou of Shang, and a temple in Yue Fei’s hometown — both in Tangyin County in the south of the city."],
      ["Red Flag Canal", "An irrigation canal about 1,500 km long, cut by hand through the cliffs by the people of Linzhou in the 1960s."],
    ], x: 329, y: 175 },
  { id: "zhengzhou", city: "Zhengzhou", province: "Capital of Henan province", population: "about 12.6 million", old: "Bo (theory), Ao (theory), Guan, Zheng",
    dynasties: "Shang (early period); candidate sites for the Xia capital nearby",
    history: "In the city center survive the walls of an early Shang capital about 3,600 years old, the “Zhengzhou Shang City” — thought by some to be Bo, capital of Tang, founder of the Shang, and by others to be Ao, where a later king, Zhong Ding, moved. At Dengfeng nearby is a site some identify as a Xia capital. It was added to the “Eight Great Ancient Capitals” in 2004.",
    today: "Today it is the capital of Henan and, with over 12 million people, the largest city of the Central Plain. Where the main north–south and east–west railways cross, it is one of China’s great transport hubs and a center of the high-speed rail network, and it is also known as an industrial city with a huge smartphone factory.",
    hero: null,
    spots: [
      ["Shaolin Temple and Mount Song", "The temple of Chan (Zen) Buddhism and Shaolin kung fu, where Bodhidharma is said to have meditated, on Mount Song, one of the Five Sacred Peaks; with nearby historic buildings it is the World Heritage Site “the Centre of Heaven and Earth.”"],
      ["Zhongyue Temple, Songyang Academy and the Observatory", "A temple to the god of Mount Song, one of the four great academies of the Song, and the tower where Guo Shoujing of the Yuan observed the heavens — all World Heritage."],
      ["Henan Museum", "One of China’s leading museums, with bronzes and jades excavated in the Central Plain; concerts on ancient instruments are also held."],
      ["Zhengzhou Shang City site", "The remains of early Shang walls in the city center, laid out as a heritage park and museum."],
      ["Yellow River Scenic Area", "A scenic spot on the banks of the Yellow River, with huge figures of the legendary Yan and Huang Emperors carved into the hillside."],
    ], x: 320, y: 188 },
  { id: "datong", city: "Datong", province: "Prefecture-level city, Shanxi", population: "about 3.1 million", old: "Pingcheng, Xijing",
    dynasties: "Northern Wei (early period); secondary capital of the Liao and Jin",
    history: "The site of Pingcheng, where the Xianbei Northern Wei made its capital in 398. It flourished as the capital of the Northern Wei, which unified North China, for about a century, until Emperor Xiaowen moved the capital to Luoyang in 494. The Yungang Grottoes were carved in this period, making it a great center of Buddhist culture. The Liao and Jin later made it a secondary capital, “Xijing.”",
    today: "Today it is a city in northern Shanxi that long grew as a “coal capital.” In recent years it has focused on tourism, restoring and rebuilding its Ming walls and reviving its old streets. Close to the Great Wall, it keeps the feel of an old northern capital.",
    hero: "雲岡石窟",
    spots: [
      ["The Yungang Grottoes", "Cave temples carved from around 460 on the orders of Northern Wei emperors, famous for an open-air Great Buddha about 14 m tall. World Heritage.", "雲岡石窟"],
      ["The Hanging Temple", "A temple clinging to the face of a cliff, said to have been founded under the Northern Wei, enshrining Buddhism, Daoism and Confucianism together."],
      ["Huayan Temple", "A temple built under the Liao, with 11th-century buildings and statues."],
      ["The Nine Dragon Screen", "A wall of glazed tiles depicting nine dragons, which stood before the mansion of a Ming prince."],
    ], x: 317, y: 145 },
  { id: "chengdu", city: "Chengdu", province: "Capital of Sichuan province", population: "about 20.9 million", old: "Shu, Yizhou, Jinguan (“City of the Brocade Officer”)",
    dynasties: "Ancient Shu, Chengjia, Shu Han, Cheng Han, Former Shu, Later Shu",
    history: "The heart of the Sichuan basin, made a rich granary by the Dujiangyan irrigation system built by Li Bing of Qin and called the “Land of Abundance.” In the Three Kingdoms Liu Bei founded Shu Han here and Zhuge Liang governed it. Under the Tang the poet Du Fu made his thatched cottage here, and the Former and Later Shu of the Ten Kingdoms also made it their capital.",
    today: "Today it is the largest city in the southwest, with over 20 million people and a hub of IT and electronics. It is also known for its giant panda research base, fiery Sichuan cuisine and hotpot, and is popular as a city of “unhurried living,” where people while away the day in teahouses.",
    hero: "武侯祠（成都）",
    spots: [
      ["Wuhou Shrine", "A temple to Zhuge Liang and Liu Bei, with Liu Bei’s tomb, Huiling; next door, Jinli is a lively street recreating old Chengdu.", "武侯祠（成都）"],
      ["Du Fu Thatched Cottage", "The site of the home where Du Fu lived after fleeing the An Lushan Rebellion, now a garden surrounded by bamboo."],
      ["Dujiangyan", "An irrigation system built in the 3rd century BC and still in use; World Heritage together with Mount Qingcheng, a sacred mountain of Daoism."],
      ["Jinsha and Sanxingdui", "Sites of the ancient Shu civilization: Jinsha is in the city, while Sanxingdui, famous for bronze masks with protruding eyes, is in Guanghan, about 40 km north."],
      ["Giant Panda Breeding Research Base", "A center for the protection and breeding of giant pandas; morning feeding time is the best time to see them."],
    ], x: 248, y: 231 },
].map((c) => ({ ...c, photo: heritage(c.hero), spots: c.spots.map(([name, note, h, href]) => ({ name, note, photo: heritage(h), href })) }));

const QUICK = [
  ["Chang’an", "Xi’an", "xian"],
  ["Xianyang, Haojing", "Xi’an (area)", "xian"],
  ["Luoyi, Luoyang", "Luoyang", "luoyang"],
  ["Jianye, Jiankang, Jinling", "Nanjing", "nanjing"],
  ["Dadu, Yanjing, Beiping", "Beijing", "beijing"],
  ["Bianjing, Daliang", "Kaifeng", "kaifeng"],
  ["Lin’an", "Hangzhou", "hangzhou"],
  ["Yinxu, Ye", "Anyang (Ye nearby)", "anyang"],
  ["Bo (theory)", "Zhengzhou", "zhengzhou"],
  ["Pingcheng", "Datong", "datong"],
  ["Yizhou, Jinguan", "Chengdu", "chengdu"],
];

const FAQ = [
  { q: "Where is Chang’an today?", a: "Xi’an, the capital of Shaanxi province. Han Chang’an lay northwest of today’s city center, and Sui–Tang Chang’an covered the area centered on today’s old town. The present Xi’an city wall, built under the Ming, rests on the foundations of the Tang imperial city." },
  { q: "What are China’s “Eight Great Ancient Capitals”?", a: "Xi’an, Luoyang, Nanjing, Beijing, Kaifeng, Hangzhou, Anyang and Zhengzhou. They began as the “Four Great Ancient Capitals” (Xi’an, Luoyang, Nanjing, Beijing), then five with Kaifeng; Hangzhou, Anyang (1988) and Zhengzhou (2004) were added later." },
  { q: "Where should a trip to the ancient capitals start?", a: "For a first visit, Xi’an, with the Terracotta Army and its walls, and Beijing, with the Forbidden City and the Great Wall, are the classics. Xi’an, Luoyang, Zhengzhou and Kaifeng are linked by high-speed rail, so the old capitals of the Central Plain can be toured together. Nanjing and Hangzhou are each about an hour from Shanghai by high-speed train." },
  { q: "Which Chinese capital did Japan’s capitals copy?", a: "Nara’s Heijō-kyō and Kyoto’s Heian-kyō are thought to have been modeled on Tang Chang’an — the grid of streets and the palace at the north center with a great avenue running south. Kyoto’s eastern half was even called “Luoyang” and its western half “Chang’an.”" },
];

export default function EnglishAncientCapitalsPage() {
  const link = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
  return (
    <FeaturePage
      title="The Great Ancient Capitals of China"
      jaPath="/ancient-capitals"
      intro="Tang Chang’an is today’s Xi’an, the Six Dynasties’ Jiankang is Nanjing, the Northern Song’s Bianjing is Kaifeng — many of the ancient capitals of China’s dynasties live on as great cities under new names. This page covers ten of them — the eight known as China’s “Eight Great Ancient Capitals,” plus Datong of the Northern Wei and Chengdu of Shu Han — with their history as capitals, the cities they are today, and historic sights worth visiting."
      related={[
        { href: "/en/china-capitals", label: "Capitals of China through history" },
        { href: "/en/world-heritage", label: "World Heritage in China" },
        { href: "/en/ancient-towns", label: "Ancient towns of China" },
      ]}
    >
      <Section title="Old name → today’s city">
        <DataTable head={["Old capital", "Today"]} rows={QUICK.map(([o, n, id]) => [o, <a key={id} href={`#${id}`} style={link}>{n}</a>])} />
        <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 8 }}>Populations are approximate figures for the whole municipal area from China’s 2020 census; a Chinese “city” includes a wide surrounding rural area.</p>
      </Section>

      <PointMap outline={CHINA_OUTLINE} taiwan={TAIWAN_OUTLINE} points={CITIES} note="A map based on China’s real coastline. The numbers are the ancient capitals (today’s cities) introduced below." />

      <div className="flex flex-col gap-8">
        {CITIES.map((c, i) => (
          <section key={c.id} id={c.id} style={{ ...cardStyle, scrollMarginTop: 16 }}>
            {c.photo && (
              <div style={{ width: "100%", height: 220, backgroundColor: "#EFE7D0", overflow: "hidden" }}>
                <HeritageThumb imageUrl={c.photo.imageUrl} name={c.city} type="building" />
              </div>
            )}
            <div style={{ padding: "14px 16px" }}>
              {c.photo?.credit && <div style={{ fontSize: 10, color: COLORS.mist, marginBottom: 6 }}>{c.photo.credit}</div>}
              <h2 style={{ ...serif, fontSize: 22, fontWeight: 900, color: COLORS.ink }}>
                <span style={{ color: COLORS.vermilion, fontSize: 15, marginRight: 8 }}>{i + 1}</span>
                {c.city}
              </h2>
              <div style={{ fontSize: 12.5, color: COLORS.vermilionSoft, marginTop: 2 }}>{c.province} · population {c.population}</div>
              <div style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 8 }}><b style={{ color: COLORS.gold }}>Old names</b> {c.old}</div>
              <div style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 2 }}><b style={{ color: COLORS.gold }}>Capital of</b> {c.dynasties}</div>
              <h3 style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, marginTop: 12 }}>As a capital</h3>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 4 }}>{c.history}</p>
              <h3 style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, marginTop: 12 }}>The city today</h3>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 4 }}>{c.today}</p>
              <h3 style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, marginTop: 14, marginBottom: 8 }}>Historic sights</h3>
              <div className="flex flex-col gap-3">
                {c.spots.map((s) => {
                  const links = [];
                  if (s.href && isLive(s.href)) links.push({ href: s.href, label: "Read more" });
                  if (s.photo?.eventSlug) links.push({ href: `/en/events/${s.photo.eventSlug}`, label: "Related event" });
                  return (
                    <ItemCard key={s.name} title={s.name} imageUrl={s.photo?.imageUrl} imageType={s.photo?.type} credit={s.photo?.credit} links={links}>
                      {s.note}
                    </ItemCard>
                  );
                })}
              </div>
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
      <p style={{ fontSize: 13, color: COLORS.inkSoft }}>
        See also <Link href="/en/eras" style={link}>all the eras</Link> to follow which dynasty ruled from where.
      </p>
    </FeaturePage>
  );
}
