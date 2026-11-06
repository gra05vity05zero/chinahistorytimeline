import { findEventBySlug } from "./data";
import QIN_ZHANGUO from "./eventDetailData/qinZhanguo";
import SANGUO_TANG from "./eventDetailData/sanguoTang";
import QING from "./eventDetailData/qing";

// 出来事ページの「詳しい解説」。lib/data.js の summary（年表と共通の要約）の下に表示する。
// 主要な出来事から順に追加していく。項目の意味：
//   points       「ざっくり言うと」の3点（1文ずつ、結論から）
//   sections     見出しごとのまとまり。blocks には内容に合う形を選んで並べる
//     { type: "p", text }                               文章
//     { type: "list", items }                           箇条書き
//     { type: "table", caption?, head, rows }           表（各行の先頭セルが行見出し）
//     { type: "flow", steps: [{ label, text, highlight? }] }  縦の流れ図（年・順番ごとの経過）
//     { type: "compare", columns: [{ title, sub?, color?, items }] }  比較カード
//     { type: "note", title?, text }                    補足・豆知識
//     { type: "related", items: [{ href, label, note? }] }  関連ページへのリンク
//   faq          よくある質問（FAQPageの構造化データにも使う）
//   sources      主な出典（表示用の短い文）
//   publishedAt / updatedAt  "YYYY-MM-DD"
const EVENT_DETAILS = {
  ...QIN_ZHANGUO,
  ...SANGUO_TANG,
  ...QING,
};

// ---- 整合性チェック（ビルド時に壊れた参照を見つける） ----
Object.entries(EVENT_DETAILS).forEach(([slug, d]) => {
  if (!findEventBySlug(slug)) throw new Error(`存在しない出来事の解説です: ${slug}`);
  if (!d.points?.length || !d.sections?.length) throw new Error(`解説の points / sections が空です: ${slug}`);
  d.sections.forEach((s) =>
    s.blocks.forEach((b) => {
      if (b.type !== "related") return;
      b.items.forEach((item) => {
        const m = item.href.match(/^\/events\/(.+)$/);
        if (m && !findEventBySlug(m[1])) throw new Error(`存在しない出来事へのリンクです: ${slug} → ${item.href}`);
      });
    })
  );
});

export function getEventDetail(slug) {
  return EVENT_DETAILS[slug] || null;
}
