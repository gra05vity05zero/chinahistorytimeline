import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, Paras, DataTable, FlowList, ItemCard, cardStyle, bodyText } from "@/components/en/EnFeature";

const title = "The History of Chinese Food: Where Mapo Tofu, Peking Duck and Dumplings Came From";
const description =
  "A 4,000-year-old bowl of noodles, Shang-dynasty chopsticks, sesame and wheat from the Silk Road, chili peppers from the Americas in the Ming — the history of Chinese cuisine era by era, the origins of famous dishes such as mapo tofu, Peking duck, Dongpo pork and kung pao chicken, and the regional cuisines of China.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/chinese-food", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/chinese-food", image: { title: "The History of Chinese Food", seal: "食" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const HISTORY = [
  {
    year: "c. 7000–2000 BC",
    title: "Millet in the north, rice in the south",
    note: "Millet was farmed along the Yellow River and rice along the Yangtze; the Hemudu site on the lower Yangtze has yielded masses of rice some 7,000 years old. The familiar divide between the rice-eating south and the wheat-eating north begins here. In 2005 a bowl of millet noodles about 4,000 years old was found at the Lajia site in Qinghai — the oldest noodles known anywhere.",
    href: "/en/events/neolithic--0",
  },
  {
    year: "Shang & Zhou",
    title: "Boiled in a ding, steamed in a yan",
    note: "Meat was boiled in three-legged ding cauldrons and grain steamed in yan and zeng steamers. Food was bound up with sacrifices to gods and ancestors, and bronze vessels were symbols of power. Bronze chopsticks have been excavated at Yinxu, and the Han Feizi tells how a minister feared for the state when King Zhou of Shang ordered chopsticks of ivory — the first step, he warned, toward ruinous luxury.",
    href: "/en/events/shang--1",
  },
  {
    year: "Western Han",
    title: "The Silk Road and “barbarian” foods",
    note: "After Zhang Qian’s missions to the Western Regions, grapes, pomegranates, sesame (huma, “barbarian hemp”) and cucumbers (hugua, “barbarian melon”) are said to have reached China; the prefix hu marked things from the peoples of the west. Rotary stone mills spread at the same time, and wheat ground into flour for noodles and bing (flatbreads and buns) became an everyday food.",
    href: "/en/events/westernhan--4",
  },
  {
    year: "6th century",
    title: "The oldest surviving cookery text",
    note: "The Qimin Yaoshu, an agricultural manual compiled by Jia Sixie under the Northern Wei, explains how to make jiang (fermented bean and grain pastes), vinegar and wine, and gives recipes from roast meats to soups. The fermented seasonings at the heart of Chinese cooking were already mature.",
    href: "/en/eras/nanbei",
  },
  {
    year: "Tang",
    title: "A cosmopolitan table, and tea",
    note: "Merchants from Central Asia filled Chang’an, and hubing — sesame-topped baked bread — was the rage. In the 8th century Lu Yu wrote The Classic of Tea, and tea drinking spread across society. Tang tombs at Astana near Turpan have yielded dried dumplings almost identical in shape to today’s jiaozi.",
    href: "/en/eras/tang",
  },
  {
    year: "Song",
    title: "The age of stir-frying and restaurants",
    note: "With more coal and cheaper iron, stir-frying — cooking quickly in a thin iron wok over fierce heat — became common. Kaifeng and Hangzhou were lined with eateries open late into the night, some serving dishes to order, much like restaurants today. Three meals a day is also said to have become the norm in this period.",
    href: "/en/eras/northernsong",
  },
  {
    year: "Ming",
    title: "Chili peppers arrive from the Americas",
    note: "In the 16th century, European voyages brought New World crops to China: maize, sweet potatoes, potatoes, peanuts and chili peppers. Chilies were first recorded as ornamental plants. Sichuan and Hunan cooking became fiery only after chilies entered the kitchen under the Qing — China’s love of heat is surprisingly recent.",
    href: "/en/eras/ming",
  },
  {
    year: "Qing",
    title: "Imperial banquets and regional classics",
    note: "The Manchu–Han Imperial Feast combined Manchu and Han dishes in lavish banquets, and wealthy trading cities such as Yangzhou developed brilliant food cultures. Many dishes loved today, including mapo tofu and kung pao chicken, were born in this era.",
    href: "/en/eras/qing",
  },
];

const DISHES = [
  {
    name: "Mapo tofu",
    meta: "Late 19th century · Chengdu, Sichuan",
    body: "Said to have been first served by the wife of the Chen family, who ran an eatery just north of Chengdu, as a cheap, spicy dish of tofu and minced beef for local laborers. Her pockmarked (ma) face gave the dish its name: “pockmarked old woman’s tofu.” In Japan it was popularized by the Sichuan-born chef Chen Kenmin, who adapted it to Japanese tastes.",
  },
  {
    name: "Peking duck",
    meta: "Ming–Qing · from Nanjing to Beijing",
    body: "Roast duck was eaten in Nanjing, the first Ming capital, and is said to have followed the court north when the Yongle Emperor moved the capital to Beijing. Bianyifang, which claims Ming-era origins, and Quanjude, founded in 1864, are the two most famous old houses.",
    links: [{ href: "/en/events/ming--3", label: "The move of the capital to Beijing" }],
  },
  {
    name: "Dongpo pork",
    meta: "Northern Song · the poet Su Shi",
    body: "Slow-braised pork belly named after the poet Su Shi, whose literary name was Dongpo. In exile at Huangzhou he wrote a verse on cooking cheap pork slowly over a low fire, and a story tells of him sharing it with the people while serving as an official in Hangzhou. The tōba-ni of Nagasaki’s shippoku cuisine is said to descend from it.",
    links: [{ href: "/en/eras/northernsong", label: "The Northern Song" }],
  },
  {
    name: "Kung pao chicken",
    meta: "19th century · Ding Baozhen, governor-general of Sichuan",
    body: "Chicken stir-fried with peanuts and chilies. It is said to have been a favorite of Ding Baozhen, governor-general of Sichuan, and named after his honorary title gongbao (“palace guardian”). Using both chilies and peanuts from the Americas, it is a dish only possible after the Ming.",
  },
  {
    name: "Dumplings (jiaozi)",
    meta: "Tang at the latest",
    body: "A famous legend credits Zhang Zhongjing, an Eastern Han physician, who wrapped mutton and medicinal herbs in dough for villagers with frostbitten ears. The firm evidence is the real dumplings found in Tang tombs at Turpan. In China boiled dumplings are the standard; pan-fried gyōza became the star only in post-war Japan.",
  },
  {
    name: "Mantou (steamed buns)",
    meta: "A Three Kingdoms legend",
    body: "A story recorded in Song-dynasty books says Zhuge Liang, returning from his southern campaign, calmed a river spirit by offering dough wrapped around meat in place of human heads. Today mantou means a plain steamed bun, while filled buns are baozi.",
    links: [{ href: "/en/eras/sanguo", label: "The Three Kingdoms" }],
  },
  {
    name: "Youtiao (fried dough sticks)",
    meta: "A Southern Song legend",
    body: "The breakfast staple is said to represent Qin Hui — the chancellor who had the general Yue Fei put to death on false charges — and his wife: two strips of dough stuck together and thrown into hot oil. It was once called youzha hui, “Qin Hui fried in oil.”",
    links: [{ href: "/en/eras/southernsong", label: "The Southern Song" }],
  },
  {
    name: "Tofu",
    meta: "Han legend · recorded from the Song",
    body: "Legend credits Liu An, Prince of Huainan under the Western Han, with inventing tofu, but it first appears in reliable texts only at the start of the Song. It is thought to have reached Japan in the Nara or Heian period with envoys and monks returning from Tang China.",
  },
];

const CUISINES = [
  ["Shandong (Lu)", "Shandong", "Foundation of imperial court cooking; scallion stir-fries and rich broths", "Sea cucumber braised with scallions"],
  ["Sichuan (Chuan)", "Sichuan, Chongqing", "The heat of chili and the numbing tingle of Sichuan pepper (mala)", "Mapo tofu, twice-cooked pork"],
  ["Cantonese (Yue)", "Guangdong, Hong Kong", "Bringing out natural flavors; dim sum and yum cha", "Char siu, dim sum"],
  ["Huaiyang", "Jiangsu", "Refined, lightly sweet; served at state banquets", "Lion’s head meatballs"],
];

export default function EnglishChineseFoodPage() {
  return (
    <FeaturePage
      title="The History of Chinese Food"
      jaPath="/chinese-food"
      intro="Chinese cuisine is often called thousands of years old, but the food we think of as Chinese took shape bit by bit. Stir-frying spread under the Song, Sichuan food turned fiery under the Qing, and much of what overseas diners know as “Chinese food” was invented abroad. This page traces Chinese food through the dynasties and tells when and how some of its most famous dishes were born — separating what the sources record from what legend tells."
      related={[
        { href: "/en/silk-road", label: "The Silk Road" },
        { href: "/en/shunsetsu", label: "Chinese New Year" },
        { href: "/en/kusuriya", label: "The Apothecary Diaries and Chinese History" },
      ]}
    >
      <div style={{ ...cardStyle, padding: "14px 18px", marginBottom: 24, borderLeft: `4px solid ${COLORS.gold}` }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.gold, marginBottom: 6 }}>Older — and newer — than you think</div>
        <ul style={{ ...bodyText, fontSize: 13.5, paddingLeft: 18, listStyle: "disc" }}>
          <li>Noodles: about 4,000 years ago (the oldest known, found in Qinghai)</li>
          <li>Chopsticks: the Shang dynasty, over 3,000 years ago</li>
          <li>Stir-frying becomes common: the Song (10th–13th centuries)</li>
          <li>Chili peppers arrive: the Ming (16th century); spicy Sichuan food: the Qing</li>
          <li>Mapo tofu: the late 19th century</li>
        </ul>
      </div>

      <Section title="Chinese food through the dynasties">
        <FlowList items={HISTORY} />
      </Section>

      <Section title="Where famous dishes came from">
        <p style={{ ...bodyText, marginBottom: 12 }}>
          Dish origins attract legends about famous people. Here, what the sources confirm is kept apart from what is only told.
        </p>
        <div className="flex flex-col gap-3">
          {DISHES.map((d) => (
            <ItemCard key={d.name} title={d.name} meta={d.meta} links={d.links}>
              {d.body}
            </ItemCard>
          ))}
        </div>
      </Section>

      <Section title="The four great regional cuisines">
        <p style={{ ...bodyText, marginBottom: 12 }}>
          China is vast, and its cooking varies enormously by region. Four traditions are classed as the “four great cuisines”; adding Fujian, Zhejiang, Hunan and Anhui makes the “eight great cuisines.”
        </p>
        <DataTable head={["Cuisine", "Region", "Character", "Signature dishes"]} rows={CUISINES} />
      </Section>

      <Section title="Chinese food made in Japan">
        <Paras
          items={[
            "Japan has its own “Chinese” dishes that you will not find in China. Tenshinhan — a crab omelette on rice — has nothing to do with the city of Tianjin it is named after. Ebi-chili, prawns in chili sauce, was created by Chen Kenmin, who toned down the Sichuan dish ganshao xiaren and added ketchup for Japanese tastes. Hiyashi chūka, chilled noodles, was also born in Japan.",
            "The ancestor of Japanese ramen is usually traced to Rairaiken, which opened in Asakusa, Tokyo, in 1910 with cooks brought in from Yokohama’s Chinatown. Pan-fried gyōza spread after the Second World War, when people returning from Manchuria opened shops across Japan.",
          ]}
        />
      </Section>
    </FeaturePage>
  );
}
