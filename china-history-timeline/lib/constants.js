// このファイルには「軽量な」定数・ヘルパーだけを置く。
// lib/data.js の年表データ（ERAS、約250行超の全イベント本文）と分離することで、
// クライアントコンポーネント（Shared.jsx、EventDetail.jsx、Search.jsxなど）が
// 色やstripRubyのようなちょっとした値のためだけに全イベントデータを
// JSバンドルへ引き込んでしまう事態を防いでいる。

// ---- サイト基本情報 ---------------------------------------------------
export const SITE_URL = "https://chinahistorytimeline.com";
export const SITE_NAME = "中国五千年史";
export const SITE_DESCRIPTION =
  "中国史（中国の歴史）を年表でたどるサイト。新石器時代から中華人民共和国まで、24王朝・約150の出来事を年代順に解説します。王朝の覚え方や人物一覧、故事成語、兵馬俑・万里の長城といった雑学もあわせて掲載。";

// Next.jsはopenGraph/twitterをページ単位で完全に上書きする（親と深いマージをしない）ため、
// 各ページで欠落フィールド（type, siteName, card, image等）が出ないよう共通ヘルパーで組み立てる。
//
// OGP画像はトップページだけサイト共通の /opengraph-image を使い、それ以外は
// /og ルート（app/og/route.js）でページごとにタイトル入りの画像を生成する。
// image: { title, subtitle, kicker, seal } で画像の文言を指定できる。省略時は
// title から「 | 中国五千年史」を除き、「？」の後ろをサブタイトルに回して使う。
export function buildOgImageUrl({ title, image = {} }) {
  let main = image.title ?? title.replace(new RegExp(`\\s*\\|\\s*${SITE_NAME}$`), "");
  let subtitle = image.subtitle ?? "";
  const q = main.indexOf("？");
  if (!image.title && q > 0 && q < main.length - 1) {
    subtitle = main.slice(q + 1);
    main = main.slice(0, q + 1);
  }
  const params = new URLSearchParams({ t: main });
  if (subtitle) params.set("s", subtitle);
  if (image.kicker) params.set("k", image.kicker);
  if (image.seal) params.set("m", image.seal);
  return `/og?${params.toString()}`;
}

export function buildOpenGraph({ title, description, path, type = "website", image }) {
  const url = path === "/" ? "/opengraph-image" : buildOgImageUrl({ title, image });
  return {
    type,
    locale: "ja_JP",
    url: path,
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url, width: 1200, height: 630, alt: title }],
  };
}

// twitter:image を省略するとXは og:image を使うため、画像はOGP側だけで指定する
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
export const AMAZON_ASSOCIATE_TAG = "gra05vity05-22";

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

// A8.netの参加中プログラムのバナー（掲載サイト「中国五千年史」で発行したリンク）。
// ページの内容に合わせて A8AdBlock の ad にキーを指定して使う
export const A8_ADS = {
  // 書籍・古典の内容に添える：AmazonのオーディオブックAudible
  audible: {
    alt: "Amazonのオーディオブック Audible の広告バナー",
    href: "https://px.a8.net/svt/ejp?a8mat=4BEL1P+45FTMA+5TB0+5ZMCH",
    imgSrc: "https://www24.a8.net/svt/bgt?aid=261020941251&wid=001&eno=01&mid=s00000027126001006000&mc=1",
    gifSrc: "https://www12.a8.net/0.gif?a8mat=4BEL1P+45FTMA+5TB0+5ZMCH",
    width: "300",
    height: "250",
  },
  // 史跡・都市・世界遺産の内容に添える：アゴダ（航空券）
  agoda: {
    alt: "アゴダの航空券予約の広告バナー",
    href: "https://px.a8.net/svt/ejp?a8mat=4BEK9L+59BV5E+4X1W+NU729",
    imgSrc: "https://www24.a8.net/svt/bgt?aid=261019929318&wid=001&eno=01&mid=s00000022946004004000&mc=1",
    gifSrc: "https://www19.a8.net/0.gif?a8mat=4BEK9L+59BV5E+4X1W+NU729",
    width: "300",
    height: "250",
  },
  // 出来事に関連する建造物・国宝の下に添える：トラベルウエスト（海外ツアー）
  travelWest: {
    alt: "トラベルウエストの海外ツアーの広告バナー",
    href: "https://px.a8.net/svt/ejp?a8mat=4BA6D9+BE7OKY+4R2M+TSQTT",
    imgSrc: "https://www24.a8.net/svt/bgt?aid=260815293689&wid=001&eno=01&mid=s00000022171005005000&mc=1",
    gifSrc: "https://www16.a8.net/0.gif?a8mat=4BA6D9+BE7OKY+4R2M+TSQTT",
    width: "300",
    height: "250",
  },
  // 全ページ共通（フッター）：Travelist（海外格安航空券）
  travelist: {
    alt: "Travelistの海外格安航空券の広告バナー",
    href: "https://px.a8.net/svt/ejp?a8mat=4BA6D9+BJKLSQ+4XZI+HVNAP",
    imgSrc: "https://www29.a8.net/svt/bgt?aid=260815293698&wid=002&eno=01&mid=s00000023067003003000&mc=1",
    gifSrc: "https://www17.a8.net/0.gif?a8mat=4BA6D9+BJKLSQ+4XZI+HVNAP",
    width: "300",
    height: "250",
  },
  // 全ページ共通（フッター）：ソラハピ
  solahapi: {
    alt: "ソラハピの航空券予約の広告バナー",
    href: "https://px.a8.net/svt/ejp?a8mat=4BA6D9+BFZZEA+39GM+4GVBNL",
    imgSrc: "https://www26.a8.net/svt/bgt?aid=260815293692&wid=001&eno=01&mid=s00000015223027020000&mc=1",
    gifSrc: "https://www18.a8.net/0.gif?a8mat=4BA6D9+BFZZEA+39GM+4GVBNL",
    width: "468",
    height: "60",
  },
};

// Wikimedia CommonsのSpecial:FilePathは無指定だと原寸画像（数MB）を返してしまうため、
// widthパラメータを付けてサムネイル版（軽量なリサイズ画像）を取得する
export function wikimediaThumb(url, width = 480) {
  if (!url) return url;
  if (!url.includes("commons.wikimedia.org/wiki/Special:FilePath/")) return url;
  return url.includes("?") ? `${url}&width=${width}` : `${url}?width=${width}`;
}

// ---- Google AdSense 設定 -----------------------------------------------
export const ADSENSE_CLIENT_ID = "ca-pub-4606423913155675";
// 手動広告ユニットのスロットID。未設定（空）の間は広告枠を描画しない（自動広告のみ）
export const ADSENSE_SLOT_TIMELINE = "";

// ---- Google Analytics（GA4）設定 ---------------------------------------
export const GA_MEASUREMENT_ID = "G-GRELCCWWNV";

// ルビ記法 {{漢字|ふりがな}} を除去し、素のテキストを返す（メタデータ用）
export function stripRuby(text) {
  if (!text) return text;
  return text.replace(/\{\{(.+?)\|(.+?)\}\}/g, "$1");
}

// 人物名から個別ページのURLスラッグを作る。
// 「武帝（劉徹）」のような別名付き表記は括弧より前の主要な呼び名だけを使う。
export function personSlug(name) {
  if (!name) return name;
  return stripRuby(name).replace(/[（(].*$/, "").trim();
}

export const HERITAGE_TYPES = {
  building: { label: "建造物・{{遺跡|いせき}}" },
  artifact: { label: "国宝・出土品" },
  figure: { label: "関連する人物" },
};

// 王朝IDに対応する、検索されやすい通称・別名（人物一覧・出来事一覧ページのタイトルやSEO説明文に使用）
export const ERA_ALIASES = {
  sanguo: "三国志",
  zhanguo: "戦国時代",
  chunqiu: "春秋時代",
  sixteenkingdoms: "{{五胡十六国|ごこじゅうろっこく}}時代",
  nanbei: "南北朝時代",
  wudai: "五代十国時代",
};
