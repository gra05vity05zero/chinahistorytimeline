// English article list (/en/topics) categories, shared with the "Find by Purpose" cards on the English top page.
// Same categories and ids as the Japanese list (lib/articles.js); the id is the /en/topics#<id> anchor, so keep it stable.
// Feature slugs whose English page isn't written yet (not in FEATURES_READY) are dropped automatically.
import { FEATURES_READY } from "@/lib/en/features";

const CATEGORIES = [
  {
    id: "eras",
    seal: "代",
    title: "Learn by Era",
    desc: "Chinese history era by era, from the Neolithic to the present.",
    links: [
      { href: "/en/eras", title: "All Dynasties and Eras", blurb: "The 24 dynasties and periods of Chinese history, one page each.", seal: "代" },
      { href: "/en/timeline", title: "Scroll Through the Timeline", blurb: "Every era and event in order, with a short summary of each.", seal: "年" },
      "japan-china-timeline",
      "qin-fall",
      "sanguo-comparison",
      "keju",
      "harem-ranks",
      "eunuchs",
      "history-books",
    ],
  },
  {
    id: "people",
    seal: "人",
    title: "People",
    desc: "Emperors, generals, thinkers and poets of Chinese history.",
    links: [
      { href: "/en/people", title: "People of Chinese History by Era", blurb: "The key figures of each era, with their life and achievements.", seal: "人" },
      "emperors",
      "qinshihuang",
      "women-rulers",
      "four-beauties",
    ],
  },
  {
    id: "battles",
    seal: "戦",
    title: "Wars & Battles",
    desc: "The wars that shaped Chinese history, on maps.",
    links: ["chunqiu-zhanguo-battles", "chuhan-battles", "sanguo-battles", "suitang-battles", "song-yuan-battles"],
  },
  {
    id: "maps",
    seal: "図",
    title: "Maps & Places",
    desc: "Dynastic territories, capitals, World Heritage Sites and historic places.",
    links: ["dynasty-territory-map", "china-capitals", "ancient-capitals", "world-heritage", "great-wall", "silk-road", "terracotta-army", "china-castles", "ancient-towns"],
  },
  {
    id: "culture",
    seal: "文",
    title: "Culture & Literature",
    desc: "Philosophy, inventions, festivals, food and the classic novels.",
    links: ["idioms", "hundred-schools", "four-inventions", "eto", "shunsetsu", "chinese-food", "four-great-novels", "suikoden", "saiyuki", "yangjiajiang"],
  },
  {
    id: "learn",
    seal: "学",
    title: "Learn & Remember",
    desc: "Quizzes, memory aids and a printable chart.",
    links: ["quiz", "mnemonics", "year-mnemonics", "printable-timeline", "glossary", "funny-episodes"],
  },
  {
    id: "works",
    seal: "作",
    title: "History in Fiction & Games",
    desc: "Dramas, manga, games and novels, and the real history behind them.",
    links: ["dramas", "kingdom", "kusuriya", "koei-sangokushi", "musou", "wuxia-games", "novelists"],
  },
];

const READY = new Map(FEATURES_READY.map((f) => [f.slug, f]));

// links resolve to { href, title, blurb, seal }
export const EN_ARTICLE_CATEGORIES = CATEGORIES.map((c) => ({
  ...c,
  links: c.links
    .map((l) => {
      if (typeof l !== "string") return l;
      const f = READY.get(l);
      return f && { href: `/en/${f.slug}`, title: f.title, blurb: f.blurb, seal: f.seal };
    })
    .filter(Boolean),
})).filter((c) => c.links.length > 0);
