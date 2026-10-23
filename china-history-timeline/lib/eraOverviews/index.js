// 時代ページ（/eras/[eraId]）の解説コンテンツ。1王朝1ファイルで、ここに登録した王朝は
// 「概要・年表・テーマ別解説・日本との関係・滅亡の理由・FAQ・関連ページ」の解説ページになる。
// 未登録の王朝は従来どおり出来事一覧のみのページになる。
//
// 各ファイルの項目:
//   title / metaDescription / lead … ページタイトル・説明文・導入文
//   facts       … 基本データ表 [{ label, value }]
//   keyPoints   … 「3行でわかる」[文, 文, 文]
//   milestones  … 年表に出来事と並べる補足項目 [{ year, text }]（出来事ページが無いもの）
//   phases      … 時代区分 [{ name, start, end, endLabel?, headline, text }]
//                 出来事・milestones は年で自動的に各区分へ振り分ける。紀元前の年は負の数で書く
//   themes      … テーマ別解説 [{ id, title, paragraphs }]
//   japan       … 日本との関係 { title?, intro, items?: [{ year, text }] }（省略可）
//   fall        … 滅亡の理由 [{ title, text }]（省略可。fallTitle / fallToc で見出しを差し替え可）
//   faq         … よくある質問 [{ q, a }]（FAQPage構造化データにも使う）
//   related     … 関連する特集ページ [{ href, label, note }]。
//                 ここに載せた特集ページには、逆向きに時代ページへのリンクが自動で表示される（RelatedEraGuides）

import neolithic from "./neolithic";
import xia from "./xia";
import shang from "./shang";
import westernzhou from "./westernzhou";
import chunqiu from "./chunqiu";
import zhanguo from "./zhanguo";
import qin from "./qin";
import westernhan from "./westernhan";
import xin from "./xin";
import easternhan from "./easternhan";
import sanguo from "./sanguo";
import westernjin from "./westernjin";
import sixteenkingdoms from "./sixteenkingdoms";
import nanbei from "./nanbei";
import sui from "./sui";
import tang from "./tang";
import wudai from "./wudai";
import northernsong from "./northernsong";
import southernsong from "./southernsong";
import yuan from "./yuan";
import ming from "./ming";
import qing from "./qing";
import roc from "./roc";
import prc from "./prc";

export const ERA_OVERVIEWS = {
  neolithic,
  xia,
  shang,
  westernzhou,
  chunqiu,
  zhanguo,
  qin,
  westernhan,
  xin,
  easternhan,
  sanguo,
  westernjin,
  sixteenkingdoms,
  nanbei,
  sui,
  tang,
  wudai,
  northernsong,
  southernsong,
  yuan,
  ming,
  qing,
  roc,
  prc,
};

export function getEraOverview(eraId) {
  return ERA_OVERVIEWS[eraId] || null;
}

// 指定した特集ページ（"/silk-road" など）を関連ページに挙げている時代のIDを、年代順に返す
export function getEraIdsLinkingTo(path) {
  return Object.entries(ERA_OVERVIEWS)
    .filter(([, ov]) => (ov.related || []).some((r) => r.href.split("#")[0] === path))
    .map(([id]) => id);
}
