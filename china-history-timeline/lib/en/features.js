// English feature pages (app/(en)/en/<slug>). Each has a Japanese counterpart at /<slug>.
// Kept free of era data so the client LanguageSwitch can import it.
// A slug listed here becomes a ja⇄en pair (hreflang, language switch, sitemap, /en/topics).
export const FEATURES_EN = [
  { slug: "great-wall", title: "The Great Wall of China", seal: "城", blurb: "Who built it, when and why — and its main passes from Shanhai Pass to Jiayu Pass." },
  { slug: "silk-road", title: "The Silk Road", seal: "絲", blurb: "The trade routes linking China with Central Asia and beyond, and the cities along the way." },
  { slug: "terracotta-army", title: "The Terracotta Army", seal: "俑", blurb: "The First Emperor’s buried army: its discovery, its scale and what it tells us." },
  { slug: "qinshihuang", title: "Qin Shi Huang, the First Emperor", seal: "秦", blurb: "The man who unified China in 221 BC, his reforms and his legend." },
  { slug: "qin-fall", title: "Why the Qin Dynasty Fell So Fast", seal: "亡", blurb: "How the first unified empire collapsed only fifteen years after unification." },
  { slug: "four-inventions", title: "The Four Great Inventions", seal: "明", blurb: "Paper, printing, gunpowder and the compass — and how they changed the world." },
  { slug: "emperors", title: "Emperors of China", seal: "帝", blurb: "The famous emperors of each dynasty, from the First Emperor to Puyi." },
  { slug: "hundred-schools", title: "The Hundred Schools of Thought", seal: "思", blurb: "Confucianism, Daoism, Legalism, Mohism and the other philosophies of the Warring States." },
  { slug: "keju", title: "The Imperial Examinations (Keju)", seal: "科", blurb: "1,300 years of choosing officials by examination: how it worked and what it cost." },
  { slug: "world-heritage", title: "UNESCO World Heritage Sites in China", seal: "遺", blurb: "China’s great historic sites on a map, with the eras they belong to." },
  { slug: "four-great-novels", title: "The Four Great Classical Novels", seal: "書", blurb: "Romance of the Three Kingdoms, Water Margin, Journey to the West and Dream of the Red Chamber." },
  { slug: "four-beauties", title: "The Four Beauties of Ancient China", seal: "美", blurb: "Xi Shi, Wang Zhaojun, Diaochan and Yang Guifei — history and legend." },
  { slug: "eunuchs", title: "Eunuchs in Chinese History", seal: "宦", blurb: "Palace servants who sometimes ruled empires: famous eunuchs and their times." },
  { slug: "women-rulers", title: "Women Who Ruled China", seal: "后", blurb: "Empress Lü, Wu Zetian, Empress Dowager Cixi and other women who held power." },
  { slug: "harem-ranks", title: "Ranks of the Imperial Harem", seal: "宮", blurb: "Empress, consorts and concubines: how the inner palace was ranked, dynasty by dynasty." },
  { slug: "china-capitals", title: "Capitals of China Through History", seal: "都", blurb: "Where each dynasty ruled from, from Anyang and Xi’an to Nanjing and Beijing." },
  { slug: "ancient-capitals", title: "The Great Ancient Capitals of China", seal: "京", blurb: "Xi’an, Luoyang, Nanjing, Beijing, Kaifeng, Hangzhou and more, on a map." },
  { slug: "ancient-towns", title: "Ancient Towns of China", seal: "鎮", blurb: "Water towns and old towns that preserve the look of historic China." },
  { slug: "china-castles", title: "Walled Cities and Fortresses of China", seal: "塁", blurb: "City walls, passes and forts that guarded China’s cities and frontiers." },
  { slug: "chunqiu-zhanguo-battles", title: "Spring and Autumn and Warring States Battle Map", seal: "覇", blurb: "From Chengpu to Changping: the wars of the hegemons and the seven warring states." },
  { slug: "sanguo-battles", title: "Three Kingdoms Battle Map", seal: "戦", blurb: "Guandu, Red Cliffs, Yiling and Wuzhang Plains, with an animated map of the three kingdoms." },
  { slug: "sanguo-comparison", title: "Wei, Wu and Shu Compared", seal: "鼎", blurb: "The three kingdoms side by side: founders, population, strengths, weaknesses and key people." },
  { slug: "suitang-battles", title: "Sui and Tang Battle Map", seal: "唐", blurb: "From the founding of the Sui to the An Lushan Rebellion and the fall of the Tang." },
  { slug: "song-yuan-battles", title: "Song and Yuan Battle Map", seal: "宋", blurb: "The Song against the Liao, Jin and Mongols, from Chanyuan to Yamen." },
  { slug: "history-books", title: "The Great Histories of China", seal: "史", blurb: "Records of the Grand Historian and the Twenty-Four Histories: who wrote them and how." },
  { slug: "novelists", title: "Japanese Novelists of Chinese History", seal: "筆", blurb: "Yoshikawa Eiji, Shiba Ryotaro, Miyagitani Masamitsu and the authors who made China’s past popular in Japan." },
  { slug: "suikoden", title: "Water Margin: The 108 Heroes", seal: "梁", blurb: "The outlaws of Mount Liang, the real history behind them and the novel’s legacy." },
  { slug: "saiyuki", title: "Journey to the West", seal: "猿", blurb: "Sun Wukong, Tripitaka and the real monk Xuanzang’s journey to India." },
  { slug: "yangjiajiang", title: "The Generals of the Yang Family", seal: "楊", blurb: "The loyal Yang family of the Northern Song in history, drama and legend." },
  { slug: "wuxia-games", title: "Wuxia and Chinese History in Games", seal: "侠", blurb: "Black Myth: Wukong, Where Winds Meet, Phantom Blade Zero and the real history and legends behind them." },
  { slug: "kingdom", title: "Kingdom: The History Behind the Manga", seal: "王", blurb: "The real Warring States history behind Hara Yasuhisa’s manga about the unification of China." },
  { slug: "koei-sangokushi", title: "Romance of the Three Kingdoms Games", seal: "志", blurb: "Koei Tecmo’s strategy series from 1985 to today, and the real officers behind the stats." },
  { slug: "musou", title: "Dynasty Warriors: The History Behind the Games", seal: "無", blurb: "Every game in the series, and whether its officers, women warriors and weapons were real." },
  { slug: "kusuriya", title: "The Apothecary Diaries and Chinese History", seal: "薬", blurb: "The Tang inner palace, food tasters, eunuchs and pharmacology behind Maomao’s world." },
  { slug: "funny-episodes", title: "Strange and Funny Episodes from Chinese History", seal: "笑", blurb: "The odd, absurd and very human side of China’s emperors and officials." },
  { slug: "dramas", title: "Chinese Historical Dramas", seal: "劇", blurb: "Popular Chinese period dramas and the eras they are set in." },
  { slug: "glossary", title: "Glossary of Chinese History", seal: "辞", blurb: "Key terms of Chinese history explained in plain English." },
  { slug: "idioms", title: "Chinese Idioms from History", seal: "語", blurb: "Chengyu born from historical events, and the stories behind them." },
  { slug: "mnemonics", title: "How to Remember the Chinese Dynasties", seal: "憶", blurb: "Tips and a song for memorizing the order of the dynasties." },
  { slug: "year-mnemonics", title: "Key Dates in Chinese History", seal: "年", blurb: "The most important dates, with simple tricks for remembering them." },
  { slug: "quiz", title: "Chinese History Quiz", seal: "問", blurb: "Test your knowledge of Chinese history, era by era." },
  { slug: "japan-china-timeline", title: "Japan and China: A Comparative Timeline", seal: "日", blurb: "What was happening in Japan while each Chinese dynasty rose and fell." },
  { slug: "printable-timeline", title: "Printable Timeline of Chinese Dynasties", seal: "印", blurb: "A one-page chart of the dynasties to print or save." },
  { slug: "chuhan-battles", title: "The Chu–Han Contention: Battle Map", seal: "楚", blurb: "Xiang Yu against Liu Bang, from Julu and Hong Gate to the songs of Chu at Gaixia." },
  { slug: "dynasty-territory-map", title: "Map of Chinese Dynasties’ Territory", seal: "図", blurb: "How the territory of each dynasty grew and shrank, era by era." },
];

// Only slugs whose English page has been written are paired / listed.
const READY = new Set(["great-wall", "silk-road", "terracotta-army", "qinshihuang", "qin-fall", "four-inventions", "emperors", "hundred-schools", "keju", "world-heritage", "four-great-novels", "four-beauties", "eunuchs", "women-rulers", "harem-ranks", "china-capitals", "ancient-capitals", "dynasty-territory-map", "china-castles", "ancient-towns", "chuhan-battles", "sanguo-battles", "sanguo-comparison", "chunqiu-zhanguo-battles", "suitang-battles", "song-yuan-battles", "history-books", "novelists", "suikoden", "yangjiajiang", "saiyuki", "kingdom", "wuxia-games", "koei-sangokushi", "musou", "kusuriya", "funny-episodes", "dramas", "glossary", "idioms", "mnemonics", "year-mnemonics", "quiz", "japan-china-timeline", "printable-timeline"]);
export const FEATURES_READY = FEATURES_EN.filter((f) => READY.has(f.slug));
export const FEATURE_SLUGS = FEATURES_READY.map((f) => f.slug);

// Sub-pages paired along with a ready feature (every drama has an English page)
export const SITE_PAGES = ["about", "privacy", "search", "news"];
export const EXTRA_PAIRED = [...(READY.has("dramas") ? [/^\/dramas\/[^/]+$/] : []), ...SITE_PAGES.map((p) => new RegExp(`^/${p}$`))];
