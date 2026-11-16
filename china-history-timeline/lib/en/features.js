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
  { slug: "dynasty-territory-map", title: "Map of Chinese Dynasties’ Territory", seal: "図", blurb: "How the territory of each dynasty grew and shrank, era by era." },
];

// Only slugs whose English page has been written are paired / listed.
const READY = new Set(["great-wall", "silk-road", "terracotta-army", "qinshihuang", "qin-fall", "four-inventions", "emperors", "hundred-schools", "keju", "world-heritage", "four-great-novels", "four-beauties", "eunuchs", "women-rulers", "harem-ranks", "china-capitals", "ancient-capitals", "dynasty-territory-map", "china-castles", "ancient-towns"]);
export const FEATURES_READY = FEATURES_EN.filter((f) => READY.has(f.slug));
export const FEATURE_SLUGS = FEATURES_READY.map((f) => f.slug);
