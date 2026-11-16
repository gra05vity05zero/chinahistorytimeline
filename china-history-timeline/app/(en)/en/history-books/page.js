import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, Paras, ItemCard, DataTable, NoteCard } from "@/components/en/EnFeature";

const title = "The Great Histories of China: Records of the Grand Historian, the Book of Han, Zizhi Tongjian and More";
const description =
  "China’s classic works of history — the Records of the Grand Historian, the Book of Han, the Records of the Three Kingdoms, the Zizhi Tongjian, the Eighteen Histories in Brief and more — with their dates, authors and contents, the difference between annals-biography and chronicle styles, and a list of the Twenty-Four Histories.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/history-books", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/history-books", image: { title: "The Great Histories of China", seal: "史" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const PD = "Wikimedia Commons (public domain)";
const BOOKS = [
  { name: "Book of Documents (Shangshu)", period: "Compiled: Zhou to Warring States", author: "Unknown (traditionally said to have been edited by Confucius)", style: "Record of speeches",
    key: "The oldest history: the “words” of rulers from the legendary sage kings to the Zhou",
    body: "A collection of edicts, admonitions and oaths of rulers and ministers, from the legendary sage kings Yao, Shun and Yu through the Xia, Shang and Zhou. Rather than arranging events in order, it records what rulers said, and it was revered as one of the Five Classics of Confucianism. Much of it was lost in the Qin burning of the books, and the text handed down later includes parts regarded as later forgeries.",
    eraId: "westernzhou", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Shujing_NCL_1.png",
    caption: "The opening of Shangshu biaozhu, a commentary by Jin Lüxiang of the late Song and early Yuan (National Central Library, Taiwan)", credit: "National Central Library, Taiwan / Wikimedia Commons (public domain)" },
  { name: "Spring and Autumn Annals and the Zuo Commentary", period: "Compiled: Spring and Autumn to Warring States", author: "Confucius (Spring and Autumn Annals); traditionally Zuo Qiuming (Zuo Commentary)", style: "Chronicle",
    key: "The chronicle of Lu that gave the “Spring and Autumn period” its name",
    body: "The Spring and Autumn Annals is a terse chronicle of events in the state of Lu from 722 to 481 BC, said to have been compiled by Confucius. Its way of passing judgment through the slightest choice of words became known as “the brush method of the Spring and Autumn.” The Zuo Commentary fills out its spare text with detailed stories and background, bringing wars, diplomacy and people vividly to life, and it deeply influenced later historical writing.",
    eraId: "chunqiu", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Li_Yuanyang_Zuo_zhuan_first_page.png",
    caption: "The first page of a 16th-century printed edition of the Zuo Commentary", credit: PD },
  { name: "Strategies of the Warring States (Zhanguo ce)", period: "Compiled: Western Han (1st century BC)", author: "Liu Xiang (compiler)", style: "Arranged by state",
    key: "The speeches and stratagems of the wandering persuaders, arranged state by state",
    body: "A collection of the proposals and speeches of persuaders such as Su Qin and Zhang Yi, who traveled from state to state in the Warring States period, arranged by state — Qin, Qi, Chu, Zhao and the rest. Liu Xiang of the late Western Han edited it from materials in the palace archives, and the very name of the “Warring States” period comes from its title. It is the source of many familiar idioms, such as “drawing legs on a snake” and “the fisherman’s gain.”",
    eraId: "zhanguo", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/ZhanGuoCe.jpeg",
    caption: "The first page of an old printed edition of the Strategies of the Warring States", credit: PD },
  { name: "Records of the Grand Historian (Shiji)", period: "Completed: Western Han (c. 91 BC)", author: "Sima Qian", style: "Annals-biography",
    key: "About 2,000 years from the legendary Yellow Emperor to Emperor Wu of Han — the first of the official histories",
    body: "A comprehensive history completed by the Western Han historian Sima Qian, carrying on the work of his father Sima Tan. Having angered Emperor Wu, he suffered the humiliating punishment of castration, yet kept on writing. Combining “basic annals” of rulers, “hereditary houses” of noble families, “biographies” of individuals, tables and treatises on institutions, he established the annals-biography form that every later official history followed. With its stories of Xiang Yu and Liu Bang, the Feast at Hong Gate, and its biographies of assassins and merchants, it is also highly prized as literature.",
    eraId: "westernhan", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/『史記』唐写本.jpg",
    caption: "A Tang-dynasty manuscript of the Records’ treatise on rivers and canals, ending with Sima Qian’s own comment (Tokyo National Museum)", credit: "Tokyo National Museum / Wikimedia Commons, CC BY 4.0" },
  { name: "Book of Han (Hanshu)", period: "Compiled: Eastern Han (late 1st century)", author: "Ban Gu (completed by his sister Ban Zhao)", style: "Annals-biography, single dynasty",
    key: "The model for histories of a single dynasty",
    body: "A history from the founding of the Western Han to the fall of Wang Mang’s Xin dynasty. Where the Records of the Grand Historian spans many ages, it covers just one dynasty, and this “dynastic history” became the standard form for the official histories that followed. Begun by Ban Biao, it was continued by his son Ban Gu, and after Ban Gu’s death his sister Ban Zhao finished the unfinished parts. Its treatise on geography contains one of the earliest references to Japan: “In the sea beyond Lelang live the people of Wa.”",
    eraId: "westernhan", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/《漢書·卷二十八·地理志》.jpg",
    caption: "The geography treatise of the Book of Han, including the passage on the people of Wa, in a Southern Song edition of the Shaoxing era", credit: "Wikimedia Commons (CC0)" },
  { name: "Records of the Three Kingdoms (Sanguozhi)", period: "Compiled: Western Jin (late 3rd century)", author: "Chen Shou (commentary by Pei Songzhi of the Liu Song)", style: "Annals-biography",
    key: "The official history of Wei, Wu and Shu, including the account of Himiko",
    body: "The official history of the three kingdoms of Wei, Wu and Shu, written by Chen Shou, who served Shu and later became an official of the Western Jin. Because Jin had received the throne from Wei, it treats Wei as the legitimate dynasty. Its text is concise, and Pei Songzhi of the Southern Dynasties’ Liu Song later added a detailed commentary drawing on many other sources. It is not the same as the novel Romance of the Three Kingdoms: this is a work of history. Its account of the people of Wa — the “Wei Zhi account of the Wa” — records the land of Yamatai and its queen Himiko, and is a primary source for the earliest history of Japan.",
    eraId: "sanguo", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Fragment_of_Biography_of_Bu_Zhi_History_Books_of_Three_Kingdoms_01_2012-12.JPG",
    caption: "A fragment of an Eastern Jin manuscript of the Records of the Three Kingdoms (the biography of Bu Zhi in the Book of Wu), excavated at Turpan", credit: "Wikimedia Commons, CC BY-SA 3.0" },
  { name: "Book of the Later Han (Hou Hanshu)", period: "Compiled: Liu Song (5th century)", author: "Fan Ye", style: "Annals-biography",
    key: "From Emperor Guangwu’s restoration to the fall of the Eastern Han",
    body: "The official history of the Eastern Han. Written later than the Records of the Three Kingdoms, in the Liu Song dynasty, it was composed by Fan Ye from several earlier histories of the Later Han. It covers Cai Lun’s improvements to papermaking and the chaos of the late Eastern Han, including the Yellow Turban Rebellion. Its account of the eastern peoples records that in 57 the state of Na in Wa sent an envoy and received a seal from Emperor Guangwu — famous for its connection with the gold seal “King of Na of Wa of Han” found on Shikanoshima island.",
    eraId: "easternhan", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/後漢書（宋紹興）.jpg",
    caption: "A Southern Song edition of the Book of the Later Han, printed in the Shaoxing era", credit: PD },
  { name: "Essentials of Government of the Zhenguan Era (Zhenguan zhengyao)", period: "Compiled: Tang (early 8th century)", author: "Wu Jing", style: "Sayings and deeds",
    key: "A “textbook for rulers”: dialogues between the great Emperor Taizong and his ministers",
    body: "A collection, arranged by theme, of the discussions on government between Emperor Taizong (Li Shimin), second emperor of the Tang, and great ministers such as Wei Zheng and Fang Xuanling. Taizong’s reign is celebrated as the “Reign of Zhenguan,” and he is well known for accepting even harsh criticism from his ministers. In Japan, Hōjō Masako and Tokugawa Ieyasu are said to have read it closely, and it is still read today as a classic on leadership.",
    eraId: "tang", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tang_Emperor_Taizong.jpg", imageType: "figure",
    caption: "A portrait of Emperor Taizong of Tang (Li Shimin), the central figure of the book", credit: PD },
  { name: "Comprehensive Mirror in Aid of Governance (Zizhi Tongjian)", period: "Completed: Northern Song (1084)", author: "Sima Guang", style: "Chronicle, comprehensive history",
    key: "A monumental chronicle of 1,362 years, from the Warring States to the Five Dynasties",
    body: "A great chronicle in 294 chapters, completed over some nineteen years by the Northern Song statesman and historian Sima Guang. It narrates events in a single continuous sequence from 403 BC — the year Han, Wei and Zhao were recognized as lords — to 959. Its title means “a comprehensive mirror to aid in government”: it was compiled as a source of examples and warnings for emperors. Because it lets readers follow as one story events that are scattered across many biographies in the official histories, it is very highly regarded as a general history.",
    eraId: "northernsong", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Zizhi_Tongjian_by_Sima_Guang.jpg",
    caption: "Sima Guang’s own draft of the Zizhi Tongjian (National Library of China)", credit: "National Library of China / Wikimedia Commons (public domain)" },
  { name: "Eighteen Histories in Brief (Shiba shi lüe)", period: "Compiled: Yuan (late 13th to early 14th century)", author: "Zeng Xianzhi", style: "Chronicle, abridged general history",
    key: "The digest that served as Japan’s introduction to Chinese history",
    body: "A history for beginners that condenses seventeen official histories, beginning with the Records of the Grand Historian, together with Song-era sources — eighteen works in all — into a single book running from legendary times to the fall of the Southern Song. It was never highly regarded in China itself, but after reaching Japan in the Muromachi period it was widely read as a textbook of classical Chinese from the Edo period through the Meiji era. It contains many of the stories behind idioms, such as “sleeping on brushwood and tasting gall,” and did much to shape the Japanese image of Chinese history.",
    eraId: "yuan", imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/NAJDA-286-0018_%E7%AB%8B%E6%96%8E%E5%85%88%E7%94%9F%E6%A8%99%E9%A1%8C%E8%A7%A3%E8%A8%BB%E9%9F%B3%E9%87%88%E5%8D%81%E5%85%AB%E5%8F%B2%E7%95%A5_%E5%B7%BB1.pdf/page3-500px-NAJDA-286-0018_%E7%AB%8B%E6%96%8E%E5%85%88%E7%94%9F%E6%A8%99%E9%A1%8C%E8%A7%A3%E8%A8%BB%E9%9F%B3%E9%87%88%E5%8D%81%E5%85%AB%E5%8F%B2%E7%95%A5_%E5%B7%BB1.pdf.jpg",
    caption: "A Japanese edition of the Eighteen Histories in Brief: the title on the right page, the titles of the seventeen histories it abridges on the left (National Archives of Japan)", credit: "National Archives of Japan / Wikimedia Commons" },
];

const TWENTY_FOUR = [
  ["Records of the Grand Historian (Shiji)", "Sima Qian", "Western Han"],
  ["Book of Han (Hanshu)", "Ban Gu", "Eastern Han"],
  ["Book of the Later Han (Hou Hanshu)", "Fan Ye", "Liu Song"],
  ["Records of the Three Kingdoms (Sanguozhi)", "Chen Shou", "Western Jin"],
  ["Book of Jin (Jinshu)", "Fang Xuanling et al.", "Tang"],
  ["Book of Song (Songshu)", "Shen Yue", "Liang"],
  ["Book of Southern Qi (Nan Qi shu)", "Xiao Zixian", "Liang"],
  ["Book of Liang (Liangshu)", "Yao Silian", "Tang"],
  ["Book of Chen (Chenshu)", "Yao Silian", "Tang"],
  ["Book of Wei (Weishu)", "Wei Shou", "Northern Qi"],
  ["Book of Northern Qi (Bei Qi shu)", "Li Baiyao", "Tang"],
  ["Book of Zhou (Zhoushu)", "Linghu Defen et al.", "Tang"],
  ["Book of Sui (Suishu)", "Wei Zheng et al.", "Tang"],
  ["History of the Southern Dynasties (Nanshi)", "Li Yanshou", "Tang"],
  ["History of the Northern Dynasties (Beishi)", "Li Yanshou", "Tang"],
  ["Old Book of Tang (Jiu Tangshu)", "Liu Xu et al.", "Later Jin"],
  ["New Book of Tang (Xin Tangshu)", "Ouyang Xiu, Song Qi", "Northern Song"],
  ["Old History of the Five Dynasties", "Xue Juzheng et al.", "Northern Song"],
  ["New History of the Five Dynasties", "Ouyang Xiu", "Northern Song"],
  ["History of Song (Songshi)", "Toqto’a et al.", "Yuan"],
  ["History of Liao (Liaoshi)", "Toqto’a et al.", "Yuan"],
  ["History of Jin (Jinshi)", "Toqto’a et al.", "Yuan"],
  ["History of Yuan (Yuanshi)", "Song Lian et al.", "Ming"],
  ["History of Ming (Mingshi)", "Zhang Tingyu et al.", "Qing"],
].map((r, i) => [String(i + 1), ...r]);

export default function EnglishHistoryBooksPage() {
  return (
    <FeaturePage
      title="The Great Histories of China"
      jaPath="/history-books"
      intro="From early times, recording the past was an important task of the Chinese state. Each new dynasty compiled the history of the one before it, both to show its own legitimacy and to leave lessons for future rulers. These state-sanctioned histories are called the “official histories” (zhengshi), and the twenty-four from the Records of the Grand Historian to the History of Ming are known together as the “Twenty-Four Histories.” Here are the major official histories, along with other classic histories widely read in Japan and beyond, in order of composition."
      related={[
        { href: "/en/four-great-novels", label: "The Four Great Classical Novels" },
        { href: "/en/idioms", label: "Chinese idioms from history" },
        { href: "/en/hundred-schools", label: "The Hundred Schools of Thought" },
      ]}
    >
      <div style={{ marginBottom: 28 }}>
        <NoteCard title="Annals-biography and chronicle">
          Chinese histories come in two main forms. The annals-biography style (jizhuanti) is built around the annals of emperors and the biographies of individuals, with treatises on institutions and chronological tables; it began with the Records of the Grand Historian and was carried on by every later official history. It gives a vivid picture of people, but a single event may be split across several biographies. The chronicle style (biannianti) sets down events in order of year and month, as in the Spring and Autumn Annals and the Zizhi Tongjian, and makes the flow of history easy to follow.
        </NoteCard>
      </div>

      <Section title="The great histories">
        <div className="flex flex-col gap-4">
          {BOOKS.map((b) => (
            <ItemCard key={b.name} title={b.name} subtitle={b.key} meta={`${b.period} · ${b.author} · ${b.style}`} imageUrl={b.imageUrl} imageType={b.imageType || "building"}
              credit={`${b.caption} — ${b.credit}`} links={[{ href: `/en/eras/${b.eraId}`, label: "Read about the period on the timeline" }]}>
              {b.body}
            </ItemCard>
          ))}
        </div>
      </Section>

      <Section title="The Twenty-Four Histories">
        <Paras items={["The twenty-four histories recognized as official in the reign of the Qianlong Emperor of the Qing. “Compiled” gives the period in which each book was written. With the New History of Yuan, compiled in the Republican era, and the unfinished Draft History of Qing, they are sometimes counted as twenty-five or twenty-six."]} />
        <div style={{ marginTop: 12 }}>
          <DataTable head={["#", "Title", "Main compiler", "Compiled"]} rows={TWENTY_FOUR} />
        </div>
      </Section>
    </FeaturePage>
  );
}
