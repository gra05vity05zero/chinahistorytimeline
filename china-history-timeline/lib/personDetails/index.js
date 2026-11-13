// 人物の個別ページ（/people/[eraId]/[personName]）に載せる詳細データ。
// キーは "時代ID/人物名"（人物名は personSlug と同じく、ルビと括弧内の別名を除いた形。例: "qin/始皇帝"）。
//
// 各項目:
//   bio   … 「生涯・業績」の本文（段落は \n\n 区切り、ルビ記法可）。
//           lib/data.js の人物に bio がすでにある場合はそちらを優先し、ここでは省略する
//   life  … 「生涯年表」の行 [年, 出来事, "頃"?] の配列。先頭行が生年、最後の行が没年。
//           年は数値で、紀元前は負の数（例: 前259年 → -259）。生年が分からない場合は先頭行の年を null にする
//           （その場合は年齢欄を出さない）。3つ目に "頃" を付けると「前551年頃」のように表示する。
//           伝説上の人物など年代が定まらない人物は life を省略し、「生涯・業績」までのページにする
import ancient from "./ancient";
import classical from "./classical";
import han from "./han";
import sanguo from "./sanguo";
import medieval from "./medieval";
import songYuan from "./songYuan";
import modern from "./modern";

export const PERSON_DETAILS = {
  ...ancient,
  ...classical,
  ...han,
  ...sanguo,
  ...medieval,
  ...songYuan,
  ...modern,
};

// ---- 整合性チェック（年の並びの誤りをビルド時に見つける） ----
Object.entries(PERSON_DETAILS).forEach(([key, d]) => {
  if (!d.bio && !d.life) throw new Error(`人物の詳細データが空です: ${key}`);
  if (!d.life) return;
  if (d.life.length < 2) throw new Error(`生涯年表は生年と没年の2行以上が必要です: ${key}`);
  let prev = -Infinity;
  d.life.forEach(([year, text], i) => {
    if (!text) throw new Error(`生涯年表の出来事が空です: ${key} ${i}行目`);
    if (year === null) {
      if (i !== 0) throw new Error(`年が null にできるのは先頭行（生年不詳）だけです: ${key}`);
      return;
    }
    if (typeof year !== "number" || year === 0) throw new Error(`生涯年表の年が不正です: ${key} ${year}`);
    if (year < prev) throw new Error(`生涯年表の年が逆順です: ${key} ${year}`);
    prev = year;
  });
});

// 年を表示用の文字列にする（-221 → "前221年"、"頃" 付きなら "前551年頃"）
export function formatLifeYear(year, approx) {
  if (year === null) return "生年不詳";
  const base = year < 0 ? `前${-year}年` : `${year}年`;
  return approx ? `${base}頃` : base;
}

// 生年からの年齢（西暦0年は存在しないため、紀元前→紀元後をまたぐ場合は1を引く）
export function lifeAge(born, year) {
  if (born === null || year === null) return null;
  const diff = year - born - (born < 0 && year > 0 ? 1 : 0);
  return diff;
}
