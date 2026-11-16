// English versions of the news items in lib/news.json, keyed by id.
// Items without an entry here are simply not shown on /en/news (the Japanese list is updated daily).
import { getNews } from "@/lib/news";

const NEWS_EN = {
  "2026-04-30-top10-2025": {
    title: "China’s “Top 10 Archaeological Discoveries” of 2025 announced, including Paleolithic sites on Changbai Mountain and a Shang city at Zhengzhou",
    summary: "The 2025 list of China’s “Top 10 New Archaeological Discoveries,” one of the country’s most prestigious archaeological honors, has been announced. Selections include a group of Paleolithic sites on Changbai Mountain (Jilin), dating from about 220,000 to 15,000 years ago; a city site at Zhengzhou that is the largest known capital of the early Shang; and the Zhongcun site in Shanxi.",
    related: ["The Shang dynasty"],
  },
  "2026-04-30-zhongcun": {
    title: "18 elite tombs of the Xia–Shang era found at Zhongcun, Shanxi, reshaping the picture of society west of the Taihang Mountains",
    summary: "Eighteen tombs from the Xia to Shang periods have been found at the Zhongcun site in Xiyang County, Shanxi; six are large tombs of 18 to 46 square meters. Turquoise ornaments, lacquered wooden objects and cinnabar were recovered, and they are regarded as the highest-ranking aristocratic tombs of this region and period. The find is seen as a clue to how far social stratification had advanced on the periphery of the Erlitou culture.",
    related: ["The Xia dynasty"],
  },
  "2026-02-23-roots-of-civilisation": {
    title: "Erlitou, Liangzhu and more: what archaeology reveals about the beginnings of Chinese civilization — over 130,000 artifacts in five years",
    summary: "A Xinhua feature highlights that the Erlitou site in Henan, which many scholars take to be a Xia capital, has China’s earliest grid-planned city layout, and that the Liangzhu site, more than 5,300 years old, is one of East Asia’s earliest urban civilizations. It reports that more than 7,700 excavations were carried out nationwide in 2021–2025, uncovering more than 130,000 cultural relics.",
    related: ["The Neolithic period", "UNESCO World Heritage Sites in China"],
  },
};

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export function formatNewsDateEn(date) {
  const [y, m, d] = date.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export function getNewsEn() {
  return getNews()
    .filter((n) => NEWS_EN[n.id])
    .map((n) => {
      const t = NEWS_EN[n.id];
      return { ...n, title: t.title, summary: t.summary, related: (n.related || []).map((r, i) => ({ href: `/en${r.href}`, label: t.related[i] || r.href })) };
    });
}
