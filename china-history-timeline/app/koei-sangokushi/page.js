import { ERAS, stripRuby, getEraFigures, personSlug, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter, buildAmazonUrl } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection, A8AdBlock, HeritageThumb } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "コーエー『三國志』シリーズ一覧｜最新作・歴史・シブサワ・コウとおすすめの選び方";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "1985年に始まったコーエー（コーエーテクモゲームス）の歴史シミュレーション『三國志』シリーズを、初代から『三國志14』『三國志8 REMAKE』までの作品一覧で解説。最新作の情報、君主プレイと武将プレイの違い、生みの親シブサワ・コウ（襟川陽一）の紹介、ゲームの次に読みたい三国志の本も紹介します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/koei-sangokushi" },
  openGraph: buildOpenGraph({
    title: fullTitle,
    description,
    path: "/koei-sangokushi",
    type: "article",
    image: { title: "ゲーム『三國志』シリーズ", subtitle: "初代から最新作まで", kicker: "三国", seal: "三" },
  }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const LORD_COLOR = "#B5452F";
const OFFICER_COLOR = "#4F6FA0";

const sectionHeading = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 14 };
const card = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const bodyText = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft };

const SANGUO = ERAS.find((e) => e.id === "sanguo");
const SANGUO_FIGURES = getEraFigures(SANGUO);

// 人物名（前方一致）から、年表データ上の肖像画と伝記ページ（bioがある場合のみ）を引く
function findFigure(name) {
  const figure = SANGUO_FIGURES.find((p) => stripRuby(p.name).startsWith(name));
  if (!figure) return {};
  return {
    imageUrl: figure.imageUrl || null,
    credit: figure.credit || null,
    href: figure.bio ? `/people/sanguo/${encodeURIComponent(personSlug(figure.name))}` : null,
  };
}

// Amazonの書影・パッケージ画像（ASINごとの商品画像ID）
const amazonImage = (id) => `https://m.media-amazon.com/images/I/${id}._SL300_.jpg`;

// 最新作。products は各機種のパッケージ版のASINと商品画像
const LATEST = [
  {
    title: "{{三國志|さんごくし}}14 with パワーアップキット Complete Edition",
    date: "2026年9月10日発売",
    platforms: "Nintendo Switch / PS5 / PS4 / Windows",
    body: "2020年発売の『{{三國志|さんごくし}}14』に、パワーアップキットとその後の追加コンテンツをまとめた決定版。土地を自勢力の色で{{塗|ぬ}}り広げていく一枚マップの戦略性が特徴で、登場武将は1000人を{{超|こ}}えシリーズ最多。2026年6月には『14』シリーズの累計出荷が100万本を{{突破|とっぱ}}したと発表された。",
    products: [
      { label: "Switch版", asin: "B0H5NWHFGQ", image: "81Na6G2OOKL" },
      { label: "PS5版", asin: "B0H5NKXY9G", image: "81zBZTgLqhL" },
      { label: "Windows版", asin: "B0H5NHHBKN", image: "813UW5CKHbL" },
    ],
  },
  {
    title: "{{三國志|さんごくし}}8 REMAKE with パワーアップキット",
    date: "2026年1月29日発売",
    platforms: "Nintendo Switch / PS5 / PS4 / Windows",
    body: "2001年の『{{三國志|さんごくし}}VIII』を作り直し、2024年10月に発売された『{{三國志|さんごくし}}8 REMAKE』のパワーアップキット版で、シリーズ40周年の記念作。好きな武将になりきって{{生涯|しょうがい}}を送る「武将プレイ」が{{魅力|みりょく}}で、身分ごとに異なるコマンドを得られる「{{宝珠|ほうじゅ}}」や、勢力の{{膠着|こうちゃく}}を打ち破る「{{転機|てんき}}」、5本の{{仮想|かそう}}シナリオなどが追加された。",
    products: [
      { label: "Switch版", asin: "B0FVDM8S99", image: "81Q2wq+TBIL" },
      { label: "PS5版", asin: "B0FVDSGZFZ", image: "81SDLM11dRL" },
      { label: "PS4版", asin: "B0FVDQ7P26", image: "81qSq8RRtzL" },
      { label: "Windows版", asin: "B0FX4RV9PX", image: "81lO7kbs1GL" },
    ],
  },
];

// シリーズの歩み（時期区分）
const HISTORY = [
  {
    period: "1985〜1990年代前半",
    title: "{{歴史|れきし}}シミュレーションの{{誕生|たんじょう}}",
    body: "1983年の『{{信長の野望|のぶながのやぼう}}』で{{歴史|れきし}}シミュレーションという分野を切り開いた光栄（現コーエーテクモゲームス）は、1985年12月、パソコン向けに『{{三國志|さんごくし}}』を発売した。プレイヤーは{{群雄|ぐんゆう}}の一人となって内政・外交・戦争を指揮し、中国全土の統一を目指す。武将一人ひとりの能力が数値で表され、有能な人材を集めて国を育てる面白さは、その後のシリーズの土台となった。『II』で計略や新君主、『III』で統率・水軍の能力が加わり、ファミコンやスーパーファミコンへの移植で家庭用ゲーム機にもファンを広げた。",
  },
  {
    period: "1990年代",
    title: "システムの{{深化|しんか}}",
    body: "『IV』（1994年）では投石車などの兵器や{{捕虜|ほりょ}}となった武将の{{扱|あつか}}いが加わり、追加シナリオや新機能を収めた「パワーアップキット」もこのころから定番となった。『V』（1995年）は{{陣形|じんけい}}や名声、『VI』（1998年）は年齢とともに変化する能力値や武将の主義・{{派閥|はばつ}}を取り入れ、作品ごとに異なる{{切|き}}り口で三国時代を再現していく。",
  },
  {
    period: "2000年代",
    title: "武将プレイと一枚マップ",
    body: "『VII』（2000年）で、君主だけでなく{{在野|ざいや}}の人物や一武将としても遊べる「全武将プレイ」が{{登場|とうじょう}}。『VIII』（2001年）では結婚や子育ても{{描|えが}}かれた。一方で『IX』（2003年）は君主制に{{戻|もど}}り、中国全土を一枚の地図で表して各勢力が同時に動く半リアルタイム制を{{採用|さいよう}}、『11』（2006年）は3Dの一枚マップに施設を配置する「{{箱庭|はこにわ}}内政」で高い評価を得た。以後、シリーズは君主制と武将プレイの作品が交互に出る流れが続く。",
  },
  {
    period: "2010年代〜現在",
    title: "30周年・40周年へ",
    body: "『12』（2012年）はオンライン対戦を、30周年記念作の『13』（2016年）は武将同士の{{絆|きずな}}を重視した全武将プレイを打ち出した。『14』（2020年）は土地を{{塗|ぬ}}り広げる一枚マップと1000人超の武将で人気を集め、2024年には『{{三國志|さんごくし}}8 REMAKE』でシリーズ初の本格リメイクに{{挑|いど}}んだ。2025年にシリーズは40周年を{{迎|むか}}え、世界累計販売は950万本を{{超|こ}}えている。",
  },
];

// ナンバリング作品一覧。style は主なプレイ形式（lord=君主プレイ、officer=全武将プレイ）
const SERIES = [
  { no: "I", year: "1985", style: "lord", note: "シリーズ第1作。パソコン（PC-8801シリーズ）向けに発売。" },
  { no: "II", year: "1989", style: "lord", note: "計略・新君主の登録が加わる。" },
  { no: "III", year: "1992", style: "lord", note: "都市単位の戦闘、統率・水軍の能力、新武将作成。" },
  { no: "IV", year: "1994", style: "lord", note: "兵器や捕虜の扱いが加わる。パワーアップキットが定番に。" },
  { no: "V", year: "1995", style: "lord", note: "陣形と名声を導入。" },
  { no: "VI", year: "1998", style: "lord", note: "年齢で変化する能力値、主義・派閥。" },
  { no: "VII", year: "2000", style: "officer", note: "シリーズ初の全武将プレイ。" },
  { no: "VIII", year: "2001", style: "officer", note: "結婚・子育て、50本を超えるシナリオ。2024年にリメイク。" },
  { no: "IX", year: "2003", style: "lord", note: "一枚マップと半リアルタイム制、城以外の拠点。" },
  { no: "X", year: "2004", style: "officer", note: "全武将プレイ。「戦役」を追加。" },
  { no: "11", year: "2006", style: "lord", note: "3D一枚マップ、施設を建てる箱庭内政。" },
  { no: "12", year: "2012", style: "lord", note: "無料のオンライン対戦モード。" },
  { no: "13", year: "2016", style: "officer", note: "シリーズ30周年記念作。武将同士の絆を重視。" },
  { no: "14", year: "2020", style: "lord", note: "土地を塗り広げる一枚マップ、1000人超の武将。" },
  { no: "8 REMAKE", year: "2024", style: "officer", note: "『VIII』を一新したシリーズ初の本格リメイク。" },
];

const STYLE_LABEL = {
  lord: { label: "君主", color: LORD_COLOR },
  officer: { label: "全武将", color: OFFICER_COLOR },
};

// プレイ形式ごとの遊び方とおすすめ作品
const STYLES = [
  {
    key: "lord",
    title: "君主プレイ",
    sub: "国のトップとして天下統一を目指す",
    body: "{{曹操|そうそう}}や{{劉備|りゅうび}}などの君主となり、内政・人事・外交・戦争のすべてを指揮する。勢力を大きくしていく{{達成感|たっせいかん}}を味わいたい人、戦略を練るのが好きな人向け。",
    picks: "おすすめ：『{{三國志|さんごくし}}14』（最新の操作性と1000人超の武将）、『{{三國志|さんごくし}}11』（{{根強|ねづよ}}い人気の名作）",
  },
  {
    key: "officer",
    title: "全武将プレイ",
    sub: "一人の武将として乱世を生きる",
    body: "君主に限らず、{{在野|ざいや}}の人物や配下の武将としても遊べる。仕官・出世・{{独立|どくりつ}}、ほかの武将との交流や結婚など、物語の登場人物になりきる楽しみがある。お気に入りの武将がいる人向け。",
    picks: "おすすめ：『{{三國志|さんごくし}}8 REMAKE』（遊びやすさと物語性を両立）、『{{三國志|さんごくし}}13』",
  },
];

// ゲームでおなじみの武将。sanguo時代の人物データから肖像画と伝記ページを引く
const FIGURES = [
  { name: "{{曹操|そうそう}}", role: "{{魏|ぎ}}の{{基礎|きそ}}を築いた{{群雄|ぐんゆう}}", note: "どの作品でも政治・統率・知力がそろって高く、人材も豊富。初心者が天下統一を体験するのに向いた最有力の君主。", ...findFigure("曹操") },
  { name: "{{劉備|りゅうび}}", role: "{{蜀漢|しょくかん}}の初代{{皇帝|こうてい}}", note: "1985年の初代から{{魅力|みりょく}}の高さで知られる。序盤は領地を持たない作品も多く、{{関羽|かんう}}・{{張飛|ちょうひ}}らと流浪しながら国を興すのが定番の遊び方。", ...findFigure("劉備") },
  { name: "{{孫権|そんけん}}", role: "{{呉|ご}}の初代{{皇帝|こうてい}}", note: "{{長江|ちょうこう}}に守られた{{江東|こうとう}}を本拠とし、{{周瑜|しゅうゆ}}・{{魯粛|ろしゅく}}などの名臣を{{抱|かか}}える。水軍を生かした守りの戦いが持ち味。", ...findFigure("孫権") },
  { name: "{{諸葛亮|しょかつりょう}}", role: "{{蜀漢|しょくかん}}の{{丞相|じょうしょう}}", note: "知力・政治の数値はシリーズを通じて最高クラス。{{三顧の礼|さんこのれい}}を{{再現|さいげん}}して{{登用|とうよう}}するイベントは多くの作品に登場する。", ...findFigure("諸葛亮") },
  { name: "{{関羽|かんう}}", role: "{{劉備|りゅうび}}の義兄弟", note: "武力・統率に優れ、{{義理|ぎり}}{{堅|がた}}く{{引|ひ}}き{{抜|ぬ}}きにくい武将として{{描|えが}}かれることが多い。", ...findFigure("関羽") },
  { name: "{{司馬懿|しばい}}", role: "{{魏|ぎ}}の重臣・{{晋|しん}}の{{礎|いしずえ}}", note: "知略で{{諸葛亮|しょかつりょう}}と{{渡|わた}}り合う名将。後期のシナリオでは事実上の主役となり、{{晋|しん}}による統一への流れを{{担|にな}}う。", ...findFigure("司馬懿") },
];

// 関連シリーズ・スピンオフ。products はAmazonのASINと商品画像
const SPINOFFS = [
  {
    title: "{{三國志|さんごくし}}{{英傑伝|えいけつでん}}・{{孔明伝|こうめいでん}}・{{曹操伝|そうそうでん}}",
    meta: "1995〜1998年",
    body: "決まった主人公の物語に{{沿|そ}}って進むシミュレーションRPG。{{劉備|りゅうび}}・{{諸葛亮|しょかつりょう}}・{{曹操|そうそう}}それぞれの視点で三国志の名場面をたどる。",
  },
  {
    title: "真・{{三國無双|さんごくむそう}}シリーズ",
    meta: "2000年〜 / アクション",
    body: "武将を{{操作|そうさ}}して戦場の敵をなぎ{{倒|たお}}す「{{一騎当千|いっきとうせん}}」のアクションゲーム。2025年の『真・{{三國無双|さんごくむそう}} ORIGINS』は、名もなき主人公の目から{{黄巾の乱|こうきんのらん}}以後の乱世を{{描|えが}}く。",
    products: [
      { label: "ORIGINS PS5版", asin: "B0DHTD3MR7", image: "81eM+pzXvnL" },
      { label: "ORIGINS Switch2版", asin: "B0FR8GYZ8B", image: "71iXQ03+UQL" },
    ],
  },
  {
    title: "{{三國志|さんごくし}} {{覇道|はどう}}",
    meta: "2020年〜 / スマートフォン・PC",
    body: "全国のプレイヤーと同じ地図の上で{{領土|りょうど}}を争うオンライン戦略ゲーム。シリーズの武将グラフィックや能力値を受け{{継|つ}}いでいる。",
  },
];

// ゲームの次に読みたい本
const BOOKS = [
  {
    title: "『{{三国志|さんごくし}}』",
    meta: "{{吉川英治|よしかわえいじ}} / 新潮文庫ほか 全10巻",
    body: "日本人の三国志のイメージをつくった歴史小説。『{{三国志演義|さんごくしえんぎ}}』をもとに、{{劉備|りゅうび}}・{{関羽|かんう}}・{{張飛|ちょうひ}}の{{桃園|とうえん}}の{{誓|ちか}}いから{{諸葛亮|しょかつりょう}}の死までを{{描|えが}}く。",
    products: [{ label: "第1巻", asin: "4101154511", image: "81dG1on7W3L" }],
  },
  {
    title: "『{{三国志|さんごくし}}』",
    meta: "{{横山光輝|よこやまみつてる}} / 漫画 全60巻",
    body: "{{吉川英治|よしかわえいじ}}版をもとにした大長編漫画。シブサワ・コウも愛読者として知られ、ゲームで三国志に興味を持った人が最初に手に取る定番の一作。",
    products: [{ label: "第1巻（Kindle版）", asin: "B0F2LPB85J", image: "81m5s1cVH9L" }],
  },
  {
    title: "『正史 {{三国志|さんごくし}}』",
    meta: "{{陳寿|ちんじゅ}} 著・{{裴松之|はいしょうし}} 注 / ちくま学芸文庫 全8巻",
    body: "ゲームの武将列伝の元になっている{{歴史書|れきししょ}}の全訳。物語の『{{演義|えんぎ}}』とは異なる、史実の人物像を確かめたいときに。",
    products: [{ label: "全8巻セット", asin: "4480080406", image: "612r8QYu-zL" }],
  },
  {
    title: "『{{三國志|さんごくし}}14 公式コンプリートガイド』",
    meta: "KADOKAWA",
    body: "『14』のシステムや武将データを網羅した攻略本。武将一人ひとりの能力や個性を調べながら遊ぶのにも便利。",
    products: [{ label: "攻略本", asin: "4047334545", image: "71CqDbedatL" }],
  },
];

const FAQ = [
  {
    q: "コーエーの『{{三國志|さんごくし}}』は何作出ていますか？",
    a: "ナンバリング作品は1985年の初代から2020年の『{{三國志|さんごくし}}14』まで14作あります。これに2024年のリメイク作『{{三國志|さんごくし}}8 REMAKE』が加わり、多くの作品には追加要素を収めた「パワーアップキット」版も発売されています。",
  },
  {
    q: "初心者はどの作品から遊ぶのがおすすめですか？",
    a: "今の機種で手軽に遊べ、チュートリアルも整った『{{三國志|さんごくし}}14』か『{{三國志|さんごくし}}8 REMAKE』がおすすめです。国を動かす戦略を楽しみたいなら君主プレイの『14』、好きな武将になりきりたいなら武将プレイの『8 REMAKE』を選ぶとよいでしょう。",
  },
  {
    q: "タイトルが「{{三国志|さんごくし}}」ではなく「{{三國志|さんごくし}}」なのはなぜですか？",
    a: "「{{國|こく}}」は「国」の旧字体です。コーエーのゲームは初代から一貫して旧字体の「{{三國志|さんごくし}}」を正式なタイトルにしており、小説や{{歴史書|れきししょ}}の『{{三国志|さんごくし}}』と区別する目印にもなっています。",
  },
  {
    q: "ゲームの内容は史実どおりですか？",
    a: "ゲームの人物像やイベントの多くは、明代の小説『{{三国志演義|さんごくしえんぎ}}』にもとづいています。{{赤壁|せきへき}}の戦いのような大きな出来事は史実ですが、{{諸葛亮|しょかつりょう}}が風を呼ぶ場面などは物語の創作です。最近の作品では正史『{{三国志|さんごくし}}』の記述も取り入れられ、史実と{{演義|えんぎ}}の両方の顔が見られます。",
  },
  {
    q: "パワーアップキットとは何ですか？",
    a: "本編の発売後に出る追加版で、新しいシナリオ・イベント・システムや、武将データの編集機能などが加わります。本編とのセット版（with パワーアップキット）と、本編を持っている人向けの単体版があります。",
  },
];

function ProductLinks({ title, products }) {
  return (
    <div className="flex gap-3 flex-wrap mt-3">
      {products.map((p) => (
        <a
          key={p.asin}
          href={buildAmazonUrl(p.asin)}
          target="_blank"
          rel="nofollow noreferrer sponsored"
          className="flex flex-col items-center gap-2"
          style={{ width: 118 }}
        >
          <img
            src={amazonImage(p.image)}
            alt={`${stripRuby(title)} ${p.label}の画像`}
            loading="lazy"
            style={{ width: 96, height: 120, objectFit: "contain", border: `1px solid ${COLORS.mist}`, backgroundColor: "#FFFDF7" }}
          />
          <span
            className="px-2 py-1 text-center"
            style={{ width: "100%", fontSize: 11.5, fontWeight: 700, color: COLORS.vermilion, border: `1px solid ${COLORS.vermilion}`, backgroundColor: "#FFFDF7" }}
          >
            {p.label} →
          </span>
        </a>
      ))}
    </div>
  );
}

function Portrait({ imageUrl, name, size = 88 }) {
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{ width: size, height: size, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}
    >
      <HeritageThumb imageUrl={imageUrl} name={name} type="figure" objectPosition="top" />
    </div>
  );
}

function AffiliateNote() {
  return (
    <p style={{ fontSize: 10.5, color: COLORS.mist, marginTop: 10 }}>
      ※ 一部のリンクはAmazonアソシエイトによるアフィリエイト広告を<ruby>含<rt>ふく</rt></ruby>みます。価格・在庫はリンク先でご確認ください
    </p>
  );
}

export default function KoeiSangokushiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    about: ["三國志 (ゲーム)", "コーエーテクモゲームス", "シブサワ・コウ", "三国志", "歴史シミュレーションゲーム"],
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/koei-sangokushi` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "コーエー『三國志』シリーズ", item: `${SITE_URL}/koei-sangokushi` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const figureCredits = FIGURES.filter((f) => f.credit);

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(articleJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(breadcrumbJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(faqJsonLd)) }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 6 }}>
          コーエー『<ruby>三國志<rt>さんごくし</rt></ruby>』シリーズとは？
        </h1>
        <p style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, color: COLORS.gold, marginBottom: 14 }}>
          40年続く<ruby>歴史<rt>れきし</rt></ruby>シミュレーションの歩みと最新作
        </p>
        <p style={{ ...bodyText, fontSize: 13.5, marginBottom: 28 }}>
          <RubyText text="『{{三國志|さんごくし}}』は、1985年に光栄（現・コーエーテクモゲームス）が発売した{{歴史|れきし}}シミュレーションゲームのシリーズです。プレイヤーは後漢末から三国時代の{{群雄|ぐんゆう}}や武将となり、内政・外交・戦争を通じて天下統一を目指します。" />
          <RubyText text="生みの親はシブサワ・コウ（{{襟川陽一|えりかわよういち}}）。2025年に40周年を{{迎|むか}}え、世界累計950万本を{{超|こ}}えるロングセラーとなりました。このページでは、最新作からシリーズの{{歴史|れきし}}、作品一覧、選び方までをまとめ、ゲームに登場する武将の史実もあわせて{{紹介|しょうかい}}します。" />
        </p>

        <nav aria-label="目次" className="p-4 mb-9" style={card}>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>目次</div>
          <ol className="flex flex-col gap-1" style={{ fontSize: 12.5, listStyle: "decimal", paddingLeft: 20 }}>
            {[
              ["latest", "最新作（2026年）"],
              ["history", "シリーズの{{歴史|れきし}}"],
              ["series", "シリーズ作品一覧"],
              ["how-to-choose", "君主プレイと武将プレイ：おすすめの選び方"],
              ["creator", "生みの親・シブサワ・コウ"],
              ["figures", "ゲームでおなじみの武将と史実"],
              ["spinoffs", "関連シリーズ・スピンオフ"],
              ["books", "ゲームの次に読みたい三国志の本"],
              ["faq", "よくある疑問"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} style={linkStyle}>
                  <RubyText text={label} />
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section style={{ marginBottom: 36 }} id="latest">
          <h2 style={sectionHeading}>最新作（2026年）</h2>
          <p style={{ ...bodyText, marginBottom: 14 }}>
            <RubyText text="40周年を記念して、2026年には人気作の決定版が2本発売されました。新作のナンバリング『15』は、2026年10月時点では発表されていません。" />
          </p>
          <div className="flex flex-col gap-3">
            {LATEST.map((g) => (
              <div key={g.title} className="p-4" style={{ ...card, borderLeft: `3px solid ${COLORS.vermilion}` }}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}>
                  <RubyText text={g.title} />
                </div>
                <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>
                  {g.date} ／ {g.platforms}
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={g.body} />
                </p>
                <ProductLinks title={g.title} products={g.products} />
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 12 }}>
            最新情報は
            <a href="https://www.gamecity.ne.jp/sangokushi40th/jp/" target="_blank" rel="noreferrer" style={linkStyle}>
              「<ruby>三國志<rt>さんごくし</rt></ruby>」シリーズ40周年記念サイト（公式）
            </a>
            で発表されています。
          </p>
          <AffiliateNote />
        </section>

        <section style={{ marginBottom: 36 }} id="history">
          <h2 style={sectionHeading}>シリーズの<ruby>歴史<rt>れきし</rt></ruby></h2>
          <div className="flex flex-col gap-3">
            {HISTORY.map((h) => (
              <div key={h.period} className="p-4" style={card}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={h.title} />
                  </span>
                  <span style={{ fontSize: 11, color: COLORS.gold }}>{h.period}</span>
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={h.body} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="series">
          <h2 style={sectionHeading}>シリーズ作品一覧</h2>
          <p style={{ ...bodyText, marginBottom: 12 }}>
            発売年は最初の機種での発売年です。多くの作品はその後、別の機種への移植やパワーアップキット版が発売されています。
          </p>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, minWidth: 420 }}>
              <thead>
                <tr>
                  {["作品", "発売年", "形式", "主な特徴"].map((h) => (
                    <th
                      key={h}
                      style={{ padding: "8px 10px", borderBottom: `2px solid ${COLORS.vermilion}`, textAlign: "left", fontFamily: "var(--font-serif), serif", fontSize: 12, color: COLORS.gold, whiteSpace: "nowrap" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SERIES.map((s) => {
                  const style = STYLE_LABEL[s.style];
                  return (
                    <tr key={s.no}>
                      <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.ink, fontWeight: 700, fontFamily: "var(--font-serif), serif", whiteSpace: "nowrap" }}>
                        <ruby>三國志<rt>さんごくし</rt></ruby>{s.no === "I" ? "" : ` ${s.no}`}
                      </td>
                      <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.inkSoft, fontFamily: "var(--font-serif), serif" }}>{s.year}</td>
                      <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", whiteSpace: "nowrap" }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: style.color, border: `1px solid ${style.color}`, padding: "1px 6px" }}>{style.label}</span>
                      </td>
                      <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.inkSoft, lineHeight: 1.6 }}>{s.note}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 11, color: COLORS.inkSoft, marginTop: 8 }}>
            形式：「君主」は君主として勢力を動かす作品、「全武将」は君主以外の武将としても遊べる作品。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="how-to-choose">
          <h2 style={sectionHeading}>君主プレイと武将プレイ：おすすめの選び方</h2>
          <p style={{ ...bodyText, marginBottom: 14 }}>
            <RubyText text="『{{三國志|さんごくし}}』シリーズは、作品によって遊び方の{{軸|じく}}が大きく{{異|こと}}なります。まずは「国を動かしたいか」「一人の武将として生きたいか」で選ぶのがおすすめです。" />
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {STYLES.map((s) => {
              const color = STYLE_LABEL[s.key].color;
              return (
                <div key={s.key} className="p-4" style={{ ...card, borderTop: `3px solid ${color}` }}>
                  <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, color }}>{s.title}</div>
                  <div style={{ fontSize: 11.5, color: COLORS.gold, marginTop: 2 }}>{s.sub}</div>
                  <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                    <RubyText text={s.body} />
                  </p>
                  <p style={{ fontSize: 12, lineHeight: 1.7, color: COLORS.ink, marginTop: 8, fontWeight: 700 }}>
                    <RubyText text={s.picks} />
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="creator">
          <h2 style={sectionHeading}>生みの親・シブサワ・コウ</h2>
          <div className="flex flex-col gap-3" style={bodyText}>
            <p>
              <RubyText text="シブサワ・コウは、コーエーテクモの創業者・{{襟川陽一|えりかわよういち}}のゲームクリエイターとしての名前です。1950年に栃木県{{足利市|あしかがし}}で生まれ、慶應義塾大学を卒業後、1978年に足利で{{染料|せんりょう}}・工業薬品の問屋「光栄」を創業しました。" />
            </p>
            <p>
              <RubyText text="転機は1980年、30{{歳|さい}}の誕生日に妻の{{襟川恵子|えりかわけいこ}}から{{贈|おく}}られたパソコンでした。独学でプログラミングを覚え、1981年に初のゲーム『川中島の合戦』を発表。1983年の『{{信長の野望|のぶながのやぼう}}』、1985年の『{{三國志|さんごくし}}』のヒットで、光栄は{{歴史|れきし}}シミュレーションの代名詞となります。経営面では恵子が二人三脚で会社を支え、のちに社長も務めました。" />
            </p>
            <p>
              <RubyText text="『{{三國志|さんごくし}}』では長くプロデューサーとしてシリーズを見守り、{{横山光輝|よこやまみつてる}}の漫画『{{三国志|さんごくし}}』の愛読者としても知られます。2009年のテクモとの経営統合後はコーエーテクモホールディングスの経営を担い、2026年にはクリエイター{{活動|かつどう}}45周年と『{{三國志|さんごくし}}』40周年を記念したコンサートも予定されています。" />
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="figures">
          <h2 style={sectionHeading}>ゲームでおなじみの武将と史実</h2>
          <p style={{ ...bodyText, marginBottom: 14 }}>
            ゲームの能力値やイベントの<ruby>裏<rt>うら</rt></ruby>には、実在の人物の<ruby>生涯<rt>しょうがい</rt></ruby>があります。名前のリンクから、史実の人物<ruby>紹介<rt>しょうかい</rt></ruby>を読むことができます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FIGURES.map((m) => (
              <div key={m.name} className="flex gap-3 p-3" style={card}>
                <Portrait imageUrl={m.imageUrl} name={m.name} size={72} />
                <div className="flex-1 min-w-0">
                  <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                    {m.href ? (
                      <a href={m.href} style={{ color: COLORS.ink, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                        <RubyText text={m.name} />
                      </a>
                    ) : (
                      <RubyText text={m.name} />
                    )}
                  </div>
                  <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>
                    <RubyText text={m.role} />
                  </div>
                  <p style={{ fontSize: 12, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 4 }}>
                    <RubyText text={m.note} />
                  </p>
                </div>
              </div>
            ))}
          </div>
          {figureCredits.length > 0 && (
            <p style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 10 }}>
              {figureCredits.map((f, i) => (
                <span key={f.name}>
                  {i > 0 && "、"}
                  <RubyText text={f.name} />: <RubyText text={f.credit} />
                </span>
              ))}
            </p>
          )}
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 12 }}>
            三国それぞれの国力や人材の<ruby>違<rt>ちが</rt></ruby>いは<a href="/sanguo-comparison" style={linkStyle}><ruby>魏<rt>ぎ</rt></ruby>・<ruby>呉<rt>ご</rt></ruby>・<ruby>蜀<rt>しょく</rt></ruby>の<ruby>違<rt>ちが</rt></ruby>い</a>、ゲームのシナリオにもなる名勝負は<a href="/sanguo-battles" style={linkStyle}>三国時代 合戦マップ</a>で<ruby>紹介<rt>しょうかい</rt></ruby>しています。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="spinoffs">
          <h2 style={sectionHeading}>関連シリーズ・スピンオフ</h2>
          <div className="flex flex-col gap-3">
            {SPINOFFS.map((s) => (
              <div key={s.title} className="p-4" style={card}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                  <RubyText text={s.title} />
                </div>
                <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>{s.meta}</div>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={s.body} />
                </p>
                {s.products && <ProductLinks title={s.title} products={s.products} />}
              </div>
            ))}
          </div>
          <AffiliateNote />
        </section>

        <section style={{ marginBottom: 36 }} id="books">
          <h2 style={sectionHeading}>ゲームの次に読みたい三国志の本</h2>
          <p style={{ ...bodyText, marginBottom: 14 }}>
            ゲームで武将の名前を覚えたら、物語や<ruby>歴史書<rt>れきししょ</rt></ruby>で人物の<ruby>素顔<rt>すがお</rt></ruby>に<ruby>触<rt>ふ</rt></ruby>れてみると、次のプレイがいっそう楽しくなります。
          </p>
          <div className="flex flex-col gap-3">
            {BOOKS.map((b) => (
              <div key={b.products[0].asin} className="p-4" style={card}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                  <RubyText text={b.title} />
                </div>
                <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>
                  <RubyText text={b.meta} />
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={b.body} />
                </p>
                <ProductLinks title={b.title} products={b.products} />
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 12 }}>
            『<ruby>三国志演義<rt>さんごくしえんぎ</rt></ruby>』と正史の関係は<a href="/four-great-novels" style={linkStyle}>中国の四大名著とは</a>や<a href="/history-books" style={linkStyle}>中国の<ruby>歴史書<rt>れきししょ</rt></ruby></a>、三国志を書いた作家は<a href="/novelists" style={linkStyle}>中国史を題材にした日本人小説家一覧</a>で<ruby>詳<rt>くわ</rt></ruby>しく<ruby>紹介<rt>しょうかい</rt></ruby>しています。
          </p>
          <AffiliateNote />
        </section>

        <section style={{ marginBottom: 36 }} id="faq">
          <h2 style={sectionHeading}>コーエー『<ruby>三國志<rt>さんごくし</rt></ruby>』についてのよくある疑問</h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((f) => (
              <div key={f.q} style={{ ...card, padding: "14px 16px" }}>
                <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                  <span style={{ color: COLORS.vermilion, marginRight: 6 }}>Q.</span>
                  <RubyText text={f.q} />
                </h3>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}><RubyText text={f.a} /></p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            ゲームの<ruby>舞台<rt>ぶたい</rt></ruby>になった三国時代の出来事や人物は、年表・人物ページもあわせてご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/sanguo" variant="solid">三国の出来事一覧を見る</NavButton>
            <NavButton href="/people/sanguo" variant="outline">三国の人物一覧を見る</NavButton>
            <NavButton href="/sanguo-battles" variant="outline">三国時代 合戦マップ</NavButton>
            <NavButton href="/sanguo-comparison" variant="outline"><ruby>魏<rt>ぎ</rt></ruby>・<ruby>呉<rt>ご</rt></ruby>・<ruby>蜀<rt>しょく</rt></ruby>の<ruby>違<rt>ちが</rt></ruby>い</NavButton>
          </div>
        </section>

        <A8AdBlock ad="audible" className="mt-10" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
