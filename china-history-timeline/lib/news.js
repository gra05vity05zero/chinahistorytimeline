import NEWS from "./news.json";

// 新しい順に並べたニュース一覧。news.json はクラウドの定期実行で追記される（docs/news-routine.md）
export function getNews() {
  return [...NEWS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getLatestNews(count = 3) {
  return getNews().slice(0, count);
}

// トップページ用：最新記事が maxAgeDays 日より古ければ空配列を返す（更新が止まっているのに新着として見せないため）
export function getFreshNews(count = 3, maxAgeDays = 60, now = new Date()) {
  const latest = getLatestNews(count);
  if (latest.length === 0) return [];
  const ageDays = (now.getTime() - new Date(`${latest[0].date}T00:00:00Z`).getTime()) / 86400000;
  return ageDays > maxAgeDays ? [] : latest;
}

// "2026-04-30" → "2026年4月30日"
export function formatNewsDate(date) {
  const [y, m, d] = date.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}
