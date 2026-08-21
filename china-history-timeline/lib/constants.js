// このファイルには「軽量な」定数・ヘルパーだけを置く。
// lib/data.js の年表データ（ERAS、約250行超の全イベント本文）と分離することで、
// クライアントコンポーネント（Shared.jsx、EventDetail.jsx、Search.jsxなど）が
// 色やstripRubyのようなちょっとした値のためだけに全イベントデータを
// JSバンドルへ引き込んでしまう事態を防いでいる。

// ---- サイト基本情報 ---------------------------------------------------
export const SITE_URL = "https://chinahistorytimeline.com";
export const SITE_NAME = "中国五千年史";
export const SITE_DESCRIPTION =
  "新石器文化から中華人民共和国まで、24王朝・約170の出来事を縦スクロールでたどる中国史年表。関連する映画・ゲーム・書籍、建造物や人物の情報も掲載。";

// Next.jsはopenGraph/twitterをページ単位で完全に上書きする（親と深いマージをしない）ため、
// 各ページで欠落フィールド（type, siteName, card, image等）が出ないよう共通ヘルパーで組み立てる。
export function buildOpenGraph({ title, description, path, type = "website" }) {
  return {
    type,
    locale: "ja_JP",
    url: path,
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE_NAME} — ${SITE_DESCRIPTION}` }],
  };
}

export function buildTwitter({ title, description }) {
  return {
    card: "summary_large_image",
    title,
    description,
  };
}

// ---- デザイントークン ------------------------------------------------
// paper: 経年した絹布のような生成り色 / ink: 墨の黒
// vermilion: 印章の朱 / gold: 詔勅の金 / jade: 玉の緑（文化イベント用アクセント）
export const COLORS = {
  paper: "#EDE6D3",
  paperDeep: "#E4DBC4",
  ink: "#211D18",
  inkSoft: "#4A443B",
  vermilion: "#A6332A",
  vermilionSoft: "#C25C4E",
  gold: "#A9822F",
  jade: "#3E5C4E",
  mist: "#B9AD90",
};

export const CATEGORY_STYLE = {
  王朝: { color: COLORS.gold, label: "王朝" },
  戦争: { color: COLORS.vermilion, label: "戦争・動乱" },
  文化: { color: COLORS.jade, label: "文化" },
  対外: { color: COLORS.inkSoft, label: "対外関係" },
};

// ---- アフィリエイト設定 ------------------------------------------------
// Amazonアソシエイトのトラッキングタグ（例: "yourid-22"）をここに設定する。
// 個々の作品にはASINを指定すれば自動でリンクが組み立てられる。
export const AMAZON_ASSOCIATE_TAG = "YOUR_AMAZON_TAG-22"; // ← 自分のアソシエイトタグに置き換える

export function buildAmazonUrl(asin) {
  if (!asin) return null;
  return `https://www.amazon.co.jp/dp/${asin}?tag=${AMAZON_ASSOCIATE_TAG}`;
}

// mediaオブジェクトから実際に開くURLを解決する（関連作品＝Amazonアソシエイトのみ）
export function resolveMediaUrl(med) {
  if (med.url) return med.url;
  if (med.asin) return buildAmazonUrl(med.asin);
  return null;
}

// Wikimedia CommonsのSpecial:FilePathは無指定だと原寸画像（数MB）を返してしまうため、
// widthパラメータを付けてサムネイル版（軽量なリサイズ画像）を取得する
export function wikimediaThumb(url, width = 480) {
  if (!url) return url;
  if (!url.includes("commons.wikimedia.org/wiki/Special:FilePath/")) return url;
  return url.includes("?") ? `${url}&width=${width}` : `${url}?width=${width}`;
}

// ---- Google AdSense 設定 -----------------------------------------------
export const ADSENSE_CLIENT_ID = "ca-pub-4606423913155675";
export const ADSENSE_SLOT_TIMELINE = "YOUR_AD_SLOT_ID_TIMELINE";

// ---- Google Analytics（GA4）設定 ---------------------------------------
export const GA_MEASUREMENT_ID = "G-GRELCCWWNV";

// ルビ記法 {{漢字|ふりがな}} を除去し、素のテキストを返す（メタデータ用）
export function stripRuby(text) {
  if (!text) return text;
  return text.replace(/\{\{(.+?)\|(.+?)\}\}/g, "$1");
}

export const HERITAGE_TYPES = {
  building: { label: "建造物・遺跡" },
  artifact: { label: "国宝・出土品" },
  figure: { label: "関連する人物" },
};

// 王朝IDに対応する、検索されやすい通称・別名（人物一覧・出来事一覧ページのタイトルやSEO説明文に使用）
export const ERA_ALIASES = {
  sanguo: "三国志",
  zhanguo: "戦国時代",
  chunqiu: "春秋時代",
  sixteenkingdoms: "五胡十六国時代",
  nanbei: "南北朝時代",
  wudai: "五代十国時代",
};
