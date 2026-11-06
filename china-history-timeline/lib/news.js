import NEWS from "./news.json";

// 新しい順に並べたニュース一覧。news.json はクラウドの定期実行で毎日追記される（docs/news-routine.md）
export function getNews() {
  return [...NEWS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getLatestNews(count = 3) {
  return getNews().slice(0, count);
}

// "2026-04-30" → "2026年4月30日"
export function formatNewsDate(date) {
  const [y, m, d] = date.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}
