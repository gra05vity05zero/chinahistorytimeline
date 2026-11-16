import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";
import { FeaturePage, Section, Paras, HeroImage, Facts, ItemCard, cardStyle, serif, eventLink } from "@/components/en/EnFeature";

const title = "The Silk Road: Routes, Oasis Cities and History";
const description =
  "What was the Silk Road, who opened it, and where did it run? Its history and routes, the goods and ideas it carried, and the oasis cities from Lanzhou and Dunhuang to Kashgar and Khotan on a map.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/silk-road", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/silk-road", image: { title: "The Silk Road", seal: "絲" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const FACTS = [
  { q: "When?", a: "Opened in the 2nd century BC after the Western Han envoy Zhang Qian’s mission to the Western Regions; it reached its height under the Tang (7th–9th centuries)." },
  { q: "From where to where?", a: "From Chang’an (present-day Xi’an) through the Hexi Corridor, Dunhuang and the oasis cities around the Taklamakan Desert, on to Central and West Asia and the Mediterranean. Not one road but a network of routes." },
  { q: "What was carried?", a: "From China, silk, paper and ceramics; from the west, glassware, gold and silver work, grapes and more. Religions such as Buddhism and Islam, and techniques such as papermaking, traveled too." },
  { q: "The name", a: "Coined in the 19th century by the German geographer Ferdinand von Richthofen as “Seidenstraßen” (silk roads)." },
  { q: "And Japan?", a: "The Shōsōin repository in Nara, which holds objects brought back from Tang Chang’an by Japanese envoys, is sometimes called “the eastern end of the Silk Road.”" },
];

const findSlug = (eraId, jaTitle) => ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(jaTitle))?.slug || null;

const STOPS = [
  { name: "Lanzhou (Jincheng)", subtitle: "Gateway to the Hexi Corridor, where the Yellow River runs through", location: "Lanzhou, Gansu", x: 262, y: 182,
    text: "A key crossing where travelers heading from Chang’an into the Hexi Corridor had to cross the Yellow River. Under the Western Han a commandery called Jincheng was set up here, and it grew as a military base guarding the Silk Road. Today the capital of Gansu, it still has the Zhongshan Bridge over the Yellow River, completed in 1909 with German help and known as the oldest surviving bridge on the river.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Zhongshan_Bridge_in_Lanzhou.jpg", credit: "Photo: Ken Marshall / Wikimedia Commons, CC BY 2.0" },
  { name: "Wuwei (Liangzhou)", subtitle: "The eastern entrance of the Hexi Corridor", location: "Wuwei, Gansu", x: 237, y: 163,
    text: "The first strategic point on the way into the Hexi Corridor from Chang’an; under the Han, after it was taken from the Xiongnu, it became a base for war and trade. Old temples such as the Kumarajiva Temple pagoda survive in the city. The bronze “Galloping Horse Treading on a Flying Swallow,” excavated from the Leitai Han tomb on its outskirts, is a symbol of Gansu province.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Eastern_Han_Bronze_Galloping_Horse_(10095118805).jpg", credit: "Photo: Gary Todd / Wikimedia Commons (public domain)" },
  { name: "Zhangye (Ganzhou)", subtitle: "An oasis famous for its rainbow-colored Danxia landforms", location: "Zhangye, Gansu", x: 220, y: 154,
    text: "A green oasis fed by snowmelt from the Qilian Mountains; Marco Polo is said to have recorded a long stay here. The Zhangye Danxia Geopark on its outskirts, with rippling bands of differently colored rock, has become a popular sight in recent years.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Zhangye_Danxia_2016.jpg", credit: "Photo: Marcus Hsu / Wikimedia Commons, CC BY-SA 4.0" },
  { name: "Jiayu Pass", subtitle: "The westernmost pass of the Great Wall", location: "Jiayuguan, Gansu", x: 204, y: 146,
    text: "Built under the Ming at the western end of the Great Wall, beyond which lay lands outside Han rule — hence its name, “the Mightiest Pass Under Heaven.” The counterpart of Shanhai Pass at the eastern end, it inspired many poems about the homesickness and unease of soldiers and caravans.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/JiayuguanFort.jpg", credit: "Photo: Doron / Wikimedia Commons (CC BY-SA)" },
  { name: "Dunhuang", subtitle: "The greatest oasis city of the Silk Road", location: "Dunhuang, Gansu", x: 177, y: 143, event: findSlug("westernhan", "西域へ"),
    text: "The most important oasis, which the Han began to administer after Zhang Qian’s mission; every caravan between east and west passed through it. The Mogao Caves, Buddhist cave temples cut into the cliff and worked on for a thousand years from the 4th to the 14th century, are a treasure house of Buddhist art and one of China’s major sights.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Jiucenglou_of_Mogao_Caves.jpg", credit: "Photo: 慕尼黑啤酒 / Wikimedia Commons, CC BY-SA 3.0" },
  { name: "Loulan", subtitle: "The lost oasis swallowed by the desert", location: "Xinjiang (by Lop Nur)", x: 141, y: 139,
    text: "A thriving stop on the southern route under the Han, Loulan was abandoned by the 4th–5th centuries as Lop Nur, its water source, shifted and dried up, and it became a “phantom oasis city” buried in the Taklamakan. Since its discovery by explorers such as Sven Hedin in the early 20th century, the mystery of its rise and fall has fascinated people. Access is tightly restricted; the swirling landforms of the dry lakebed, the “Ear of Lop Nur,” became famous worldwide through satellite photographs.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/楼兰佛塔2005_-_panoramio.jpg", credit: "Photo: 許天喜 / Wikimedia Commons, CC BY-SA 3.0" },
  { name: "Turpan", subtitle: "City of grapes in a scorching basin", location: "Turpan, Xinjiang", x: 136, y: 117, event: findSlug("tang", "インド旅"),
    text: "Lying in a basin 154 m below sea level, it is blazing hot in summer, yet underground channels called karez irrigate rich vineyards. Xuanzang is said to have stopped here on his way to India and been warmly received by the king of Gaochang, and the ruined cities of Jiaohe and Gaochang still stand nearby.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Turpan_old_district.jpg", credit: "Photo: Radosław Botev / Wikimedia Commons, CC BY 3.0" },
  { name: "Karashahr (Yanqi)", subtitle: "A Buddhist kingdom on the route south of the Tianshan", location: "Yanqi Hui Autonomous County, Xinjiang", x: 113, y: 122,
    text: "The Buddhist kingdom of Karashahr, at a key point on the route south of the Tianshan, was counted among the “thirty-six states of the Western Regions,” and Xuanzang described its prosperity in his Great Tang Records on the Western Regions. Nearby lies Bosten Lake, the largest inland freshwater lake in the region, and the green oasis town still lines the Kaidu River.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Kaidu_river_yanqi_xinjiang.jpg", credit: "Photo: Rolf Müller / Wikimedia Commons, CC BY-SA 3.0" },
  { name: "Kucha (Qiuci)", subtitle: "One of the great Buddhist kingdoms of the Western Regions", location: "Kuqa, Xinjiang", x: 89, y: 128,
    text: "A leading Buddhist kingdom and home of Kumarajiva, the celebrated translator of Buddhist scriptures into Chinese. The Kizil Thousand Buddha Caves outside the city are thought to have been begun even earlier than the Mogao Caves, and their strongly Central Asian style of wall painting still draws scholars.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Kizil_caves_2006_10_01.jpg", credit: "Photo: Rolfmueller / Wikimedia Commons (CC BY-SA)" },
  { name: "Kashgar", subtitle: "Gateway to Central Asia", location: "Kashgar, Xinjiang", x: 37, y: 149, event: findSlug("easternhan", "西域経営"),
    text: "The last great oasis where the Silk Road met the western world — beyond the Pamirs lay Central Asia. The Eastern Han general Ban Chao brought the states of this region under Han control and restored the safety of the trade routes. The Id Kah Mosque, one of the largest in China, rises at the heart of the old town, and the great Sunday bazaar is still a lively market.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/2015-09-10-111321_-_Blick_zur_Altstadt_vom_Kashgar.jpg", credit: "Photo: Zossolino / Wikimedia Commons, CC BY-SA 4.0" },
  { name: "Khotan (Hotan)", subtitle: "The southern oasis where Kunlun jade was gathered", location: "Hotan, Xinjiang", x: 67, y: 171,
    text: "The largest oasis on the southern route, sustained by snowmelt from the Kunlun Mountains, and since ancient times the source of the jade prized by the Chinese court. People can still be seen searching for jade in the bed of the Yurungkash River, and the town is known for its traditions of sericulture and carpet weaving.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Khotan-mezquita-d04.jpg", credit: "Photo: Colegota / Wikimedia Commons, CC BY-SA 2.5" },
];

const ANECDOTES = [
  { title: "Zhang Qian’s escape after ten years in captivity", event: findSlug("westernhan", "西域へ"),
    text: "Sent west to seek an alliance with the Yuezhi, Zhang Qian was captured by the Xiongnu on the way and held for more than ten years, even marrying a Xiongnu woman and fathering a child. Yet he kept watching for his chance, finally escaped westward and tried to complete his mission — and that persistence opened what would later be called the Silk Road." },
  { title: "“If you do not enter the tiger’s den…” — Ban Chao in the Western Regions", event: findSlug("easternhan", "西域経営"),
    text: "In a small state of the Western Regions, the Eastern Han general Ban Chao is said to have told his men, “If you do not enter the tiger’s den, you cannot catch its cub,” urging a bold night attack with a handful of followers. The words live on as a proverb. Through such decisive actions Ban Chao brought state after state under Han control and restored the interrupted trade routes." },
  { title: "Gan Ying’s journey toward Rome", event: findSlug("easternhan", "西域経営"),
    text: "Ban Chao’s subordinate Gan Ying is known as the first Chinese envoy sent west toward the Roman Empire (Daqin). He is said to have reached the Persian Gulf, but turned back without crossing the sea — perhaps because the dangers of the voyage were exaggerated to him. Had he crossed, the history of exchange between east and west might have taken a different shape." },
  { title: "Xuanzang’s forbidden journey to India", event: findSlug("tang", "インド旅"),
    text: "Leaving Tang China was forbidden at the time, but Xuanzang, seeking more accurate Buddhist texts, secretly crossed the border and reached India after a grueling journey over deserts and mountains. His travel record, the Great Tang Records on the Western Regions, became the model for the later novel Journey to the West, in which the monk Tripitaka travels to India with the Monkey King and his companions." },
  { title: "The Travels told in prison — “Marco of the Millions”", event: findSlug("yuan", "東方見聞録"),
    text: "The Venetian merchant Marco Polo is said to have reached the Yuan court overland along the Silk Road and served Kublai. After returning home he was captured in a sea battle with Genoa, and in prison dictated his experiences of the East to a fellow prisoner, a writer — the origin of his famous book. Its contents seemed so grand that they were suspected of exaggeration, and Marco himself is said to have been nicknamed “Il Milione,” Marco of the Millions." },
  { title: "Paper crosses the Silk Road to the world", event: findSlug("easternhan", "製紙法の改良"),
    text: "The papermaking method improved by the Eastern Han eunuch Cai Lun spread from the court to the people and then westward along the Silk Road. It reached the Islamic world in the 8th century and Europe around the 12th, and the spread of paper transformed the history of civilization itself." },
  { title: "The Beauty of Loulan — a 3,800-year-old mummy",
    text: "In 1980, in the Taklamakan near the ruins of Loulan, the mummy of a woman who lived about 3,800 years ago was found, miraculously preserved by the dry climate, and became famous as the “Beauty of Loulan.” Her deep-set features and clothing suggest that people from the west were already living there, showing that the Silk Road was a road where people of east and west met since remote antiquity." },
  { title: "The Library Cave of Dunhuang — a great discovery and its dispersal",
    text: "In 1900 the Daoist Wang Yuanlu, caretaker of the Mogao Caves, chanced upon a small cave hidden behind a wall, the “Library Cave.” Inside lay tens of thousands of scriptures and documents from the 4th to the 11th century. Western explorers such as Aurel Stein of Britain and Paul Pelliot of France came one after another and bought and carried off many of the precious documents. The whereabouts and return of the scattered Dunhuang manuscripts remain a subject of debate over cultural heritage." },
];

const XIAN = { x: 292, y: 205 };
const TRUNK = [XIAN, STOPS[0], STOPS[1], STOPS[2], STOPS[3], STOPS[4]];
const NORTH = [STOPS[4], STOPS[6], STOPS[7], STOPS[8], STOPS[9]];
const SOUTH = [STOPS[4], STOPS[5], STOPS[10]];
const pts = (r) => r.map((p) => `${p.x},${p.y}`).join(" ");

function SilkRoadMap() {
  return (
    <div style={{ ...cardStyle, padding: 16, marginBottom: 24 }}>
      <p style={{ fontSize: 12, color: COLORS.inkSoft, marginBottom: 10 }}>
        At Dunhuang the road divided into a northern route along the foot of the Tianshan and a southern route along the Kunlun, both crossing the Pamirs into Central Asia. Numbers match the list below; the sand-colored area is the Taklamakan Desert and the gold dashed line roughly marks the “Western Regions.”
      </p>
      <svg viewBox="0 0 500 366" style={{ width: "100%", maxHeight: 420, display: "block", margin: "0 auto" }} role="img" aria-label="Map of the Silk Road in China">
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />
        <path d={TAIWAN_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M165,110 L130,103 L95,108 L50,120 L22,152 L35,180 L75,192 L120,178 L155,155 Z" fill={COLORS.gold} fillOpacity="0.07" stroke={COLORS.gold} strokeWidth="1.2" strokeDasharray="6 4" />
        <text x="93" y="100" textAnchor="middle" style={{ ...serif, fontSize: 10, fontWeight: 700, fill: COLORS.gold }}>Western Regions</text>
        <path d="M55,152 L72,136 L100,138 L128,140 L136,153 L118,169 L88,177 L65,166 Z" fill="#D8B978" fillOpacity="0.6" stroke="#B99A4E" strokeWidth="1" strokeDasharray="1 2" />
        <text x="95" y="156" textAnchor="middle" style={{ ...serif, fontSize: 8.5, fill: "#7A5C22" }}>Taklamakan</text>
        {[TRUNK, NORTH, SOUTH].map((r, i) => (
          <polyline key={i} points={pts(r)} fill="none" stroke={COLORS.vermilionSoft} strokeWidth="1.5" strokeDasharray="4 3" />
        ))}
        <circle cx={XIAN.x} cy={XIAN.y} r="4" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="1.4" />
        <text x={XIAN.x + 8} y={XIAN.y - 6} style={{ ...serif, fontSize: 10.5, fill: COLORS.inkSoft }}>Chang’an (start)</text>
        {STOPS.map((s, i) => (
          <g key={s.name}>
            <circle cx={s.x} cy={s.y} r="7.5" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="1.4" />
            <text x={s.x} y={s.y} textAnchor="middle" dominantBaseline="central" style={{ ...serif, fontSize: 8.5, fontWeight: 700, fill: "#FBF8F0" }}>{i + 1}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function EnglishSilkRoadPage() {
  return (
    <FeaturePage
      title="The Silk Road"
      jaPath="/silk-road"
      intro="Opened by Zhang Qian of the Western Han, defended by Ban Chao of the Eastern Han and traveled by Xuanzang of the Tang, the Silk Road ran from Chang’an through the Hexi Corridor and the oasis cities on the edge of the Taklamakan Desert into Central Asia. It was the great artery of exchange between east and west, carrying not only silk but paper, Buddhism and much more."
      related={[
        { href: "/en/great-wall", label: "The Great Wall" },
        { href: "/en/people/westernhan/zhang-qian", label: "Zhang Qian" },
        { href: "/en/people/tang/xuanzang", label: "Xuanzang" },
      ]}
    >
      <HeroImage
        imageUrl="https://commons.wikimedia.org/wiki/Special:FilePath/Camel_convoys_at_Singing_Sand_Dunes_(20230918084548).jpg"
        alt="Camel caravans at the Singing Sand Dunes"
        caption="Camel caravans at the Singing Sand Dunes, Dunhuang — one of the Silk Road’s best-known sights"
        credit="Photo: N509FZ / Wikimedia Commons, CC BY-SA 4.0"
      />

      <Facts heading="The Silk Road at a glance" items={FACTS} />

      <Section title="History and routes">
        <Paras
          items={[
            "The Silk Road is the collective name for the trade routes that linked China and the Mediterranean world from antiquity to the Middle Ages. It takes its name from the vast quantities of silk carried west from China; the term was coined in the 19th century by the German geographer Ferdinand von Richthofen as “Seidenstraßen.” There was never one fixed road — it was a network of routes connecting oases and cities.",
            "Setting out from Chang’an (present-day Xi’an), its best-known starting point, travelers passed through the Hexi Corridor to Dunhuang, where the road split into a northern route along the northern edge of the Taklamakan and a southern route along its southern edge; both crossed the Pamirs into Central Asia and continued to West Asia and the Mediterranean. Its opening is traced to Zhang Qian, sent to the Western Regions by Emperor Wu of Han in search of allies; it was established as a trade route through Ban Chao’s campaigns under the Eastern Han, and reached its height under the Tang.",
            "Along the Silk Road, not only silk but the techniques of papermaking and gunpowder traveled west, while Buddhism, glassware, spices and the “blood-sweating” horses of Fergana came east. More than a trade route, it was a highway for religions, ideas and cultures, and many oasis cities, Dunhuang above all, flourished along it. In 2014 Silk Road sites in China, Kazakhstan and Kyrgyzstan were inscribed together as a UNESCO World Heritage Site.",
          ]}
        />
      </Section>

      <Section title="Oasis cities along the route">
        <SilkRoadMap />
        <div className="flex flex-col gap-4">
          {STOPS.map((s, i) => (
            <ItemCard key={s.name} index={i + 1} title={s.name} subtitle={s.subtitle} meta={s.location} imageUrl={s.imageUrl} credit={s.credit} links={eventLink(s.event, "Read the related event")}>
              {s.text}
            </ItemCard>
          ))}
        </div>
      </Section>

      <Section title="The Silk Road and Japan">
        <Paras
          items={[
            "Chang’an is usually called the eastern starting point of the Silk Road, but beyond it the road continued across the sea to Japan. Japanese envoys to the Sui and Tang encountered in cosmopolitan Chang’an goods brought from the Western Regions and Persia, and took some of them home. The treasures of the Shōsōin in Nara — begun in 756, when Empress Kōmyō dedicated the late Emperor Shōmu’s belongings to Tōdai-ji — include a cut-glass bowl thought to be Sasanian Persian and the only surviving five-stringed pipa in the world, objects that came along the Silk Road or show its influence.",
            "For this reason the Shōsōin is sometimes called “the eastern end of the Silk Road.” Buddhism, which entered China along the Silk Road, reached Japan in the 6th century by way of Baekje on the Korean Peninsula, and the teachings Xuanzang brought back from India were carried to Japan by Dōshō, who studied under him.",
          ]}
        />
      </Section>

      <Section title="Stories of the Silk Road">
        <div className="flex flex-col gap-3">
          {ANECDOTES.map((a) => (
            <ItemCard key={a.title} title={a.title} links={eventLink(a.event, "Read the related event")}>
              {a.text}
            </ItemCard>
          ))}
        </div>
      </Section>
    </FeaturePage>
  );
}
