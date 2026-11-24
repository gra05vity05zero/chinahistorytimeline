import { ERAS, stripRuby, getEraFigures, personSlug, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection, A8AdBlock, HeritageThumb, InArticleAd } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";
import { WORLD_OUTLINE } from "@/lib/worldOutline";
import { bilingualAlternates } from "@/lib/en";

const title = "西遊記とは？あらすじ・登場人物と、モデルになった玄奘三蔵の旅をわかりやすく解説";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "中国四大名著の一つ『西遊記』を、あらすじ・孫悟空や猪八戒ら登場人物・有名なエピソードから解説。モデルとなった唐の僧・玄奘三蔵の17年にわたるインドへの旅を地図でたどり、史実と物語の違い、成り立ちと版本、ドラマや『ドラゴンボール』など日本での受容も紹介します。";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/saiyuki", "ja"),
  openGraph: buildOpenGraph({
    title: fullTitle,
    description,
    path: "/saiyuki",
    type: "article",
    image: { title: "西遊記とは？", subtitle: "孫悟空と玄奘三蔵の旅", kicker: "唐", seal: "猿" },
  }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const PILGRIM_COLOR = "#B5452F";
const HEAVEN_COLOR = "#4F6FA0";

const sectionHeading = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 14 };
const card = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const bodyText = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft };

// 出来事タイトルの部分一致から該当イベントページへのリンクを探す
function findEventHref(eraId, titleIncludes) {
  const era = ERAS.find((e) => e.id === eraId);
  const event = era?.events.find((ev) => stripRuby(ev.title).includes(titleIncludes));
  return event ? `/events/${event.slug}` : null;
}

const TANG = ERAS.find((e) => e.id === "tang");
const TANG_FIGURES = getEraFigures(TANG);

// 人物名（前方一致）から、年表データ上の肖像画と伝記ページ（bioがある場合のみ）を引く
function findFigure(name) {
  const figure = TANG_FIGURES.find((p) => stripRuby(p.name).startsWith(name));
  if (!figure) return {};
  return {
    imageUrl: figure.imageUrl || null,
    credit: figure.credit || null,
    href: figure.bio ? `/people/tang/${encodeURIComponent(personSlug(figure.name))}` : null,
  };
}

const HREF_XUANZANG = findEventHref("tang", "玄奘");
const HREF_TAIZONG = findEventHref("tang", "太宗即位");

const XUANZANG = findFigure("玄奘");
const TAIZONG = findFigure("唐太宗");

const commons = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`;

// 頤和園（北京）の長廊に描かれた西遊記の彩色画
const LONG_CORRIDOR_CREDIT = "Wikimedia Commons（パブリックドメイン）";

// あらすじ（全100回の流れに沿った5段階）
const STORY = [
  {
    no: 1,
    title: "{{孫悟空|そんごくう}}の誕生と天界での大暴れ",
    range: "第1〜7回",
    body: "東勝神州の{{花果山|かかざん}}の石から生まれた{{猿|さる}}は、{{水簾洞|すいれんどう}}を見つけて{{猿|さる}}たちの王「{{美猴王|びこうおう}}」となる。不老不死を求めて{{仙人|せんにん}}・{{須菩提祖師|すぼだいそし}}に弟子入りし、「{{孫悟空|そんごくう}}」の名と、{{觔斗雲|きんとうん}}・七十二変化の術を授かる。東海{{竜王|りゅうおう}}から{{如意金箍棒|にょいきんこぼう}}を手に入れ、天界に招かれても馬の番人「{{弼馬温|ひつばおん}}」の役に{{怒|おこ}}って暴れ、「{{斉天大聖|せいてんたいせい}}」を名乗る。{{蟠桃|ばんとう}}や{{仙丹|せんたん}}を{{盗|ぬす}}み食いして天界の軍勢と戦い{{抜|ぬ}}くが、最後は{{釈迦如来|しゃかにょらい}}の手のひらから{{逃|のが}}れられず、{{五行山|ごぎょうざん}}の下に500年間{{封|ふう}}じ{{込|こ}}められる。",
  },
  {
    no: 2,
    title: "取経の始まり",
    range: "第8〜12回",
    body: "{{釈迦如来|しゃかにょらい}}は、東の国（{{唐|とう}}）に{{大乗|だいじょう}}の経典を伝えるため、西天まで経を取りに来る者を探すよう{{観音菩薩|かんのんぼさつ}}に命じる。一方、{{唐|とう}}では{{太宗|たいそう}}が{{冥界|めいかい}}をめぐってよみがえる{{騒動|そうどう}}があり、死者を{{供養|くよう}}する大法会が開かれる。その場で観音の導きを受けた若き{{僧|そう}}・{{玄奘|げんじょう}}が、太宗から「{{三蔵|さんぞう}}」の号を授かり、{{天竺|てんじく}}への旅に出ることになる。",
  },
  {
    no: 3,
    title: "仲間がそろう",
    range: "第13〜22回",
    body: "三蔵は五行山で{{孫悟空|そんごくう}}を救い出し、最初の弟子とする。乱暴な{{悟空|ごくう}}を{{抑|おさ}}えるため、観音は頭を{{締|し}}めつける{{緊箍児|きんこじ}}（輪）と、それを{{締|し}}める{{呪文|じゅもん}}を三蔵に授けた。続いて三蔵の馬を食べた{{竜王|りゅうおう}}の子・{{玉竜|ぎょくりゅう}}が白馬に姿を変えて乗り物となり、{{高老荘|こうろうそう}}では{{婿入|むこい}}りしていた{{猪八戒|ちょはっかい}}を、{{流沙河|りゅうさが}}では川に住む{{沙悟浄|さごじょう}}を弟子に加える。ここに三蔵と三人の弟子、白馬の一行がそろう。",
  },
  {
    no: 4,
    title: "八十一の災難",
    range: "第23〜97回",
    body: "物語の大部分を{{占|し}}めるのが、{{妖怪|ようかい}}や{{魔王|まおう}}との戦いの連続である。三蔵の肉を食べれば不老{{長寿|ちょうじゅ}}になれるという{{噂|うわさ}}から、{{妖怪|ようかい}}たちは次々と一行を{{襲|おそ}}う。{{悟空|ごくう}}が三度化け物を打ち殺して三蔵に破門される「白骨夫人」、名前を呼ばれて返事をすると吸い{{込|こ}}まれる{{瓢箪|ひょうたん}}をもつ「金角・銀角」、{{炎|ほのお}}を消すため{{芭蕉扇|ばしょうせん}}を{{奪|うば}}い合う「{{火焔山|かえんざん}}」など、名場面の多くがこの部分にある。",
  },
  {
    no: 5,
    title: "{{天竺|てんじく}}{{到着|とうちゃく}}と成仏",
    range: "第98〜100回",
    body: "14年の旅の末、一行はついに{{天竺|てんじく}}の{{霊山|りょうぜん}}に{{到|いた}}り、{{釈迦如来|しゃかにょらい}}から経典を授かる。ところが最初に{{渡|わた}}されたのは文字のない白紙の経で、取り{{替|か}}えてもらった帰り道にも、八十一に一つ足りない最後の災難が待っていた。経典を{{唐|とう}}に届けた後、三蔵は{{旃檀功徳仏|せんだんくどくぶつ}}、{{悟空|ごくう}}は{{闘戦勝仏|とうせんしょうぶつ}}となり、{{八戒|はっかい}}・{{悟浄|ごじょう}}・白馬もそれぞれ位を授かって物語は幕を閉じる。",
  },
];

// 年表。hrefは/eventsへの直接リンク、anchorは本ページ内のセクションへのリンク
const FLOW = [
  { year: "602", title: "{{玄奘|げんじょう}}の誕生", note: "{{洛陽|らくよう}}{{近郊|きんこう}}の{{緱氏県|こうしけん}}に生まれる。{{俗名|ぞくみょう}}は{{陳褘|ちんい}}。13{{歳|さい}}で出家した。" },
  { year: "626", title: "{{唐|とう}}の{{太宗|たいそう}}の{{即位|そくい}}", note: "{{玄武門|げんぶもん}}の変を経て{{李世民|りせいみん}}が{{即位|そくい}}。西域への出国はまだ厳しく禁じられていた。", href: HREF_TAIZONG },
  { year: "629", title: "長安を出発", note: "国の許可を得られないまま、{{玄奘|げんじょう}}はひそかにインドへの旅に出る（627年とする説もある）。", anchor: "journey" },
  { year: "631{{頃|ごろ}}", title: "ナーランダ{{僧院|そういん}}に{{到着|とうちゃく}}", note: "インド仏教の最高学府で{{戒賢|かいけん}}に師事し、約5年間学ぶ。", anchor: "journey" },
  { year: "645", title: "長安に{{帰還|きかん}}", note: "657部の経典を持ち帰り、{{熱狂的|ねっきょうてき}}な{{歓迎|かんげい}}を受ける。", href: HREF_XUANZANG },
  { year: "646", title: "『{{大唐西域記|だいとうさいいきき}}』の完成", note: "太宗の求めに応じて、旅した国々の地理や{{風俗|ふうぞく}}をまとめた。", anchor: "history-vs-legend" },
  { year: "652", title: "{{大雁塔|だいがんとう}}の建立", note: "持ち帰った経典を納めるため、長安の{{大慈恩寺|だいじおんじ}}に{{塔|とう}}が建てられる。" },
  { year: "664", title: "{{玄奘|げんじょう}}の死", note: "帰国後は経典の{{翻訳|ほんやく}}に{{生涯|しょうがい}}をささげ、75部1335巻を漢訳した。" },
  { year: "{{南宋|なんそう}}", title: "『{{大唐三蔵取経詩話|だいとうさんぞうしゅきょうしわ}}』", note: "{{猿|さる}}の姿をした「{{猴行者|こうぎょうじゃ}}」が三蔵を守る、現存最古の西遊記物語。", anchor: "versions" },
  { year: "1592", title: "『西遊記』の刊行", note: "現存最古の100回本「世徳堂本」が南京で刊行される。", anchor: "versions" },
];

// 地図の投影。/silk-roadの広域図（WORLD_OUTLINE）と同じ、緯度補正付き正距円筒図法（標準緯度32°）
const project = (lon, lat) => [6.2 * (lon + 8) + 8, 271.19 - 7.3108 * (lat - 14)];

// ローマ〜長安を含む範囲（経度-8°〜112°、緯度14°〜50°）の海岸線。/silk-roadのWORLD_OUTLINEと同じデータ
// 玄奘のおおよその経路（『大唐西域記』『大慈恩寺三蔵法師伝』による）。[経度, 緯度]
const OUTBOUND_ROUTE = [
  [108.94, 34.26], // 長安
  [102.64, 37.93], // 涼州
  [95.78, 40.52], // 瓜州
  [93.51, 42.83], // 伊吾（ハミ）
  [89.19, 42.95], // 高昌
  [86.57, 42.06], // 焉耆
  [82.96, 41.72], // 亀茲
  [78.4, 41.6], // 凌山（ベデル峠）
  [77.3, 42.25], // イシク・クル湖
  [75.3, 42.84], // 素葉城
  [69.24, 41.3], // タシケント
  [66.96, 39.65], // サマルカンド
  [66.9, 38.3], // 鉄門
  [66.9, 36.76], // バルフ
  [67.83, 34.82], // バーミヤン
  [69.2, 35.0], // カーピシー
  [71.58, 34.01], // ガンダーラ
  [74.8, 34.08], // カシミール
  [77.67, 27.49], // マトゥラー
  [79.92, 27.05], // 曲女城
  [81.85, 25.44], // プラヤーガ
  [85.44, 25.13], // ナーランダ
];

const RETURN_ROUTE = [
  [85.44, 25.13], // ナーランダ
  [79.92, 27.05], // 曲女城
  [75.58, 31.33], // ジャーランダラ
  [72.83, 33.75], // タキシラ
  [69.2, 35.0], // カーピシー
  [71.0, 36.9], // バダフシャン
  [75.23, 37.77], // タシュクルガン（パミール）
  [75.99, 39.47], // カシュガル
  [77.24, 38.42], // ヤルカンド
  [79.92, 37.11], // 于闐（ホータン）
  [82.7, 37.0], // ニヤ
  [89.9, 40.5], // 楼蘭
  [94.66, 40.14], // 敦煌
  [102.64, 37.93], // 涼州
  [108.94, 34.26], // 長安
];

// 地図上の地点。番号は玄奘が訪れた順
const PLACES = [
  { no: 1, name: "長安", label: "長安", lon: 108.94, lat: 34.26, labelSide: "bottom", note: "{{唐|とう}}の都（現在の西安）。629年にひそかに出発し、645年に{{帰還|きかん}}した旅の起点と終点。" },
  { no: 2, name: "{{瓜州|かしゅう}}・{{玉門関|ぎょくもんかん}}", label: "{{瓜州|かしゅう}}", lon: 95.78, lat: 40.52, labelSide: "right", note: "{{唐|とう}}の国境の関所を夜中に{{越|こ}}えた後、{{莫賀延磧|ばくがえんせき}}の{{砂漠|さばく}}で{{水袋|みずぶくろ}}を落とし、4夜5日のあいだ水を口にできずに進んだ。" },
  { no: 3, name: "{{高昌|こうしょう}}（トルファン）", label: "{{高昌|こうしょう}}", lon: 89.19, lat: 42.95, labelSide: "top", note: "仏教を{{篤|あつ}}く信じる{{高昌王|こうしょうおう}}{{麹文泰|きくぶんたい}}に引き留められるが、断食して出発を願い、義兄弟の{{契|ちぎ}}りを結んで旅の資金や従者を得た。近くには『西遊記』で知られる{{火焔山|かえんざん}}がそびえる。" },
  { no: 4, name: "{{亀茲|きじ}}（クチャ）", label: "{{亀茲|きじ}}", lon: 82.96, lat: 41.72, labelSide: "bottom", note: "{{名僧|めいそう}}{{鳩摩羅什|くまらじゅう}}の故郷として知られる仏教王国。雪で閉ざされた天山の{{峠|とうげ}}が開くのを60日あまり待った。" },
  { no: 5, name: "{{素葉城|すいようじょう}}（スイアブ）", label: "素葉城", lon: 75.3, lat: 42.84, labelSide: "top", note: "{{凍死者|とうししゃ}}が続出した{{凌山|りょうざん}}の{{峠|とうげ}}を{{越|こ}}えて{{到着|とうちゃく}}。西{{突厥|とっけつ}}の{{可汗|かがん}}に{{歓迎|かんげい}}され、西方の国々への{{紹介状|しょうかいじょう}}を得た。" },
  { no: 6, name: "サマルカンド（{{康国|こうこく}}）", label: "サマルカンド", lon: 66.96, lat: 39.65, labelSide: "left", note: "ソグド人の交易都市。{{玄奘|げんじょう}}は、仏教を信じていなかった王に教えを説いたと伝わる。" },
  { no: 7, name: "バーミヤン", label: "バーミヤン", lon: 67.83, lat: 34.82, labelSide: "left", note: "{{玄奘|げんじょう}}は岩山に刻まれた金色に{{輝|かがや}}く{{巨大|きょだい}}な立像を記録した。この大仏は2001年に{{破壊|はかい}}された。" },
  { no: 8, name: "ガンダーラ", label: "ガンダーラ", lon: 71.58, lat: 34.01, labelSide: "bottom", note: "仏像が初めてつくられた仏教美術の中心地（現在のパキスタン北西部）。{{玄奘|げんじょう}}の{{頃|ころ}}にはすでに{{衰|おとろ}}えていた。" },
  { no: 9, name: "ナーランダ", label: "ナーランダ", lon: 85.44, lat: 25.13, labelSide: "right", note: "数千人の{{僧|そう}}が学んだインド仏教の最高学府。{{玄奘|げんじょう}}は{{高僧|こうそう}}{{戒賢|かいけん}}のもとで約5年間学び、その後インド各地をめぐった。" },
  { no: 10, name: "{{曲女城|きょくじょじょう}}（カナウジ）", label: "曲女城", lon: 79.92, lat: 27.05, labelSide: "left", note: "北インドを統一した{{戒日王|かいにちおう}}（ハルシャ王）が開いた大討論会で、{{玄奘|げんじょう}}は論主を務めて名声を得た。" },
  { no: 11, name: "{{于闐|うてん}}（ホータン）", label: "{{于闐|うてん}}", lon: 79.92, lat: 37.11, labelSide: "bottom", note: "帰路、国禁を破った罪を許してもらうため太宗に上表文を送り、返事を待った。太宗は帰国を{{歓迎|かんげい}}すると応じた。" },
];

const PEOPLE = [
  {
    side: "取経の一行",
    color: PILGRIM_COLOR,
    members: [
      { name: "{{三蔵法師|さんぞうほうし}}（{{玄奘|げんじょう}}）", role: "{{唐|とう}}の{{僧|そう}}／{{旃檀功徳仏|せんだんくどくぶつ}}", note: "前世は{{釈迦|しゃか}}の弟子・{{金蝉子|きんせんし}}。{{慈悲深|じひぶか}}いが気弱で、{{妖怪|ようかい}}にさらわれてばかりいる。{{悟空|ごくう}}の言うことを聞かず、だまされて{{悟空|ごくう}}を破門することもある。", ...XUANZANG, href: null },
      { name: "{{孫悟空|そんごくう}}", role: "{{斉天大聖|せいてんたいせい}}／{{闘戦勝仏|とうせんしょうぶつ}}", note: "石から生まれた{{猿|さる}}の王。{{觔斗雲|きんとうん}}で一飛び十万八千里を{{駆|か}}け、{{如意金箍棒|にょいきんこぼう}}をふるい、72通りに姿を変える。頭の{{緊箍児|きんこじ}}に苦しめられながらも、一行の主力として{{妖怪|ようかい}}と戦う。" },
      { name: "{{猪八戒|ちょはっかい}}", role: "元・{{天蓬元帥|てんぽうげんすい}}／{{浄壇使者|じょうだんししゃ}}", note: "天界の水軍の大将だったが、月の女神{{嫦娥|じょうが}}に言い寄った罪で地上に落とされ、{{豚|ぶた}}の姿に生まれた。法名は{{悟能|ごのう}}。大食いで{{怠|なま}}け者、すぐ「荷物を分けて解散しよう」と言い出す。" },
      { name: "{{沙悟浄|さごじょう}}", role: "元・{{捲簾大将|けんれんたいしょう}}／{{金身羅漢|こんしんらかん}}", note: "天界の{{宴|えん}}で{{玻璃|はり}}の器を割った罪で{{流沙河|りゅうさが}}に落とされ、旅人を食べる{{妖怪|ようかい}}になっていた。まじめで温厚な性格で、荷物を担いで一行を支える。" },
      { name: "{{玉竜|ぎょくりゅう}}（{{白竜馬|はくりゅうば}}）", role: "西海{{竜王|りゅうおう}}の子／八部{{天竜|てんりゅう}}", note: "父の{{宝珠|ほうしゅ}}を焼いた罪で{{罰|ばつ}}を受けていたところを観音に救われ、白馬に姿を変えて三蔵を乗せて旅をする。" },
    ],
  },
  {
    side: "神仏と{{妖怪|ようかい}}",
    color: HEAVEN_COLOR,
    members: [
      { name: "{{観音菩薩|かんのんぼさつ}}", role: "取経の旅の発案者", note: "{{釈迦如来|しゃかにょらい}}の命で取経の人を探し、{{悟空|ごくう}}・{{八戒|はっかい}}・{{悟浄|ごじょう}}・{{玉竜|ぎょくりゅう}}を弟子になるよう導いた。旅の{{途中|とちゅう}}でも、一行が{{窮地|きゅうち}}に{{陥|おちい}}るたびに救いの手を差しのべる。" },
      { name: "{{釈迦如来|しゃかにょらい}}", role: "西天・{{霊山|りょうぜん}}の仏", note: "天界で暴れる{{悟空|ごくう}}と{{賭|か}}けをし、手のひらから飛び出せなかった{{悟空|ごくう}}を五行山に{{封|ふう}}じた。経典を東の国に伝える取経の旅を計画する。" },
      { name: "{{牛魔王|ぎゅうまおう}}", role: "{{悟空|ごくう}}のかつての義兄弟", note: "{{悟空|ごくう}}が花果山の王だった{{頃|ころ}}に義兄弟の{{契|ちぎ}}りを結んだ{{魔王|まおう}}。妻の{{羅刹女|らせつにょ}}（{{鉄扇公主|てっせんこうしゅ}}）、子の{{紅孩児|こうがいじ}}とともに一行の前に立ちはだかる。" },
      { name: "{{白骨夫人|はっこつふじん}}", role: "白骨の{{妖怪|ようかい}}", note: "{{娘|むすめ}}・{{老婆|ろうば}}・老人と三度姿を変えて三蔵に近づく{{妖怪|ようかい}}。正体を{{見抜|みぬ}}いて打ち殺した{{悟空|ごくう}}は、人殺しと誤解されて三蔵に破門されてしまう。" },
    ],
  },
];

// 物語の名場面。noは章（回）
const EPISODES = [
  { title: "{{大鬧天宮|だいどうてんぐう}}（天界で大暴れ）", range: "第5〜7回", body: "天界の{{桃園|とうえん}}の番人に任じられた{{悟空|ごくう}}は、{{仙桃|せんもも}}や太上老君の{{仙丹|せんたん}}を食べ{{尽|づ}}くし、天の軍勢を相手に大立ち回りを演じる。{{八卦炉|はっけろ}}で49日間焼かれても死なず、かえって物を見破る「{{火眼金睛|かがんきんせい}}」を得た。" },
  { title: "{{釈迦|しゃか}}の手のひら", range: "第7回", body: "「手のひらから飛び出せたら天界を{{譲|ゆず}}ろう」という{{釈迦|しゃか}}との{{賭|か}}けで、{{悟空|ごくう}}は{{觔斗雲|きんとうん}}で世界の果ての五本の柱まで飛び、目印に落書きをして{{戻|もど}}る。ところがそれは{{釈迦|しゃか}}の指で、{{悟空|ごくう}}は一歩も手のひらから出ていなかった。" },
  { title: "三打白骨精（白骨夫人を三度打つ）", range: "第27回", body: "{{悟空|ごくう}}は化けた{{妖怪|ようかい}}を三度打ち殺すが、三蔵には罪のない人を殺したとしか見えず、ついに{{悟空|ごくう}}を破門する。師弟のすれ{{違|ちが}}いを{{描|えが}}いた、中国で最も人気のある場面の一つ。" },
  { title: "金角・銀角", range: "第32〜35回", body: "太上老君の童子だった兄弟の{{魔王|まおう}}が、名前を呼ばれて返事をした者を吸い{{込|こ}}む紅い{{瓢箪|ひょうたん}}で{{悟空|ごくう}}を苦しめる。{{悟空|ごくう}}は{{偽名|ぎめい}}を名乗るなどの{{知恵比|ちえくら}}べで逆転する。" },
  { title: "女人国", range: "第53〜54回", body: "女性だけが住む{{西梁女国|せいりょうじょこく}}で、川の水を飲んだ三蔵と{{八戒|はっかい}}が身ごもってしまう。女王に{{結婚|けっこん}}を{{迫|せま}}られた三蔵は、計略で国を{{抜|ぬ}}け出す。" },
  { title: "{{火焔山|かえんざん}}と{{芭蕉扇|ばしょうせん}}", range: "第59〜61回", body: "燃えさかる{{火焔山|かえんざん}}を{{越|こ}}えるため、{{悟空|ごくう}}は{{羅刹女|らせつにょ}}の{{芭蕉扇|ばしょうせん}}を借りようとするが、だまされて{{偽物|にせもの}}をつかまされる。やがて{{牛魔王|ぎゅうまおう}}との総力戦となる、物語{{中盤|ちゅうばん}}の山場。" },
];

// 『大唐西域記』などの史実と、小説『西遊記』との違い
const COMPARE_ROWS = [
  { label: "出発", history: "国外への{{渡航|とこう}}は禁じられており、許可のないまま国境をひそかに{{越|こ}}えた。", legend: "太宗に「{{御弟|ぎょてい}}」と呼ばれ、国を挙げて送り出される。" },
  { label: "同行者", history: "基本的には単独行。土地ごとに案内人や従者を{{雇|やと}}い、{{途中|とちゅう}}で別れた。", legend: "{{孫悟空|そんごくう}}・{{猪八戒|ちょはっかい}}・{{沙悟浄|さごじょう}}と{{白竜馬|はくりゅうば}}が全行程を守る。" },
  { label: "苦難", history: "{{砂漠|さばく}}での{{渇|かわ}}き、雪山での{{凍死|とうし}}の危険、{{盗賊|とうぞく}}の{{襲撃|しゅうげき}}など、自然と人間による苦難。", legend: "三蔵の肉を{{狙|ねら}}う{{妖怪|ようかい}}や{{魔王|まおう}}による「八十一難」。" },
  { label: "期間", history: "629年（627年説もある）〜645年の約17年。インドでの留学期間が長い。", legend: "14年の旅で、{{天竺|てんじく}}の{{霊山|りょうぜん}}に着くとすぐ経典を授かる。" },
  { label: "経典", history: "657部の経典を持ち帰り、帰国後19年をかけて{{翻訳|ほんやく}}した。", legend: "{{釈迦|しゃか}}から5048巻の経を授かり、雲に乗って{{唐|とう}}へ届ける。" },
];

const VERSIONS = [
  { name: "『{{大唐西域記|だいとうさいいきき}}』・『{{大慈恩寺三蔵法師伝|だいじおんじさんぞうほうしでん}}』", note: "{{唐代|とうだい}}。{{玄奘|げんじょう}}が語った旅の記録と、弟子の{{慧立|えりゅう}}・{{彦悰|げんそう}}による伝記。史実を伝えるが、伝記にはすでに神秘的な{{逸話|いつわ}}も{{含|ふく}}まれる。" },
  { name: "『{{大唐三蔵取経詩話|だいとうさんぞうしゅきょうしわ}}』", note: "{{南宋期|なんそうき}}の刊本とされる語り物。白衣の{{秀才|しゅうさい}}に化けた{{猿|さる}}「{{猴行者|こうぎょうじゃ}}」が三蔵を守り、{{沙悟浄|さごじょう}}の原型「{{深沙神|じんじゃしん}}」も登場するが、{{猪八戒|ちょはっかい}}はまだいない。" },
  { name: "元代の雑劇・平話", note: "演劇（雑劇）や講談の台本（平話）で、{{猪八戒|ちょはっかい}}が加わり、一行の顔ぶれがそろっていく。平話は失われたが、明の『永楽大典』や{{朝鮮|ちょうせん}}の中国語教科書にその一部が残る。" },
  { name: "100回本（世徳堂本）", note: "1592年に南京の書店・世徳堂が刊行した、現存最古の100回本。作者名は記されていない。" },
  { name: "清代の{{改訂本|かいていぼん}}", note: "1663年刊の『西遊証道書』は、三蔵の出生の物語（父が殺され、赤子の三蔵が川に流される話）を第9回として加えた。今日の多くの版はこの形を受け{{継|つ}}いでいる。" },
];

const JAPAN = [
  {
    era: "{{江戸時代|えどじだい}}",
    title: "{{翻訳|ほんやく}}と{{挿絵本|さしえぼん}}",
    body: "18世紀半ばから{{翻訳|ほんやく}}『{{通俗|つうぞく}}西遊記』が刊行され、続編を重ねて広く読まれた。{{挿絵入|さしえい}}りの『絵本西遊記』も人気を集め、{{浮世絵|うきよえ}}にも{{孫悟空|そんごくう}}がたびたび{{描|えが}}かれた。",
  },
  {
    era: "昭和",
    title: "文学・{{漫画|まんが}}・アニメ",
    body: "{{中島敦|なかじまあつし}}は{{沙悟浄|さごじょう}}を主人公に、自分の生き方に{{悩|なや}}む姿を{{描|えが}}いた『{{悟浄出世|ごじょうしゅっせ}}』『{{悟浄歎異|ごじょうたんい}}』を書いた。{{手塚治虫|てづかおさむ}}の{{漫画|まんが}}『ぼくのそんごくう』は、東映動画の長編アニメ『西遊記』（1960年）の原案にもなった。",
  },
  {
    era: "1978年〜",
    title: "テレビドラマ『西遊記』",
    body: "日本テレビのドラマ『西遊記』は、{{堺正章|さかいまさあき}}の{{孫悟空|そんごくう}}、{{夏目雅子|なつめまさこ}}の三蔵法師で大ヒットした。三蔵法師を女性が演じるイメージはこの作品から定着し、2006年のフジテレビ版（{{香取慎吾|かとりしんご}}主演）にも受け{{継|つ}}がれた。エンディング曲のゴダイゴ「ガンダーラ」は、{{玄奘|げんじょう}}も訪れた仏教の地の名を歌っている。",
  },
  {
    era: "1984年〜",
    title: "『ドラゴンボール』",
    body: "{{鳥山明|とりやまあきら}}の{{漫画|まんが}}『ドラゴンボール』は、西遊記を{{下敷|したじ}}きに始まった作品である。主人公・{{孫悟空|そんごくう}}の名前や、{{伸|の}}び縮みする{{如意棒|にょいぼう}}、空飛ぶ{{筋斗雲|きんとうん}}は西遊記から取られ、{{豚|ぶた}}のウーロンには{{猪八戒|ちょはっかい}}の{{面影|おもかげ}}がある。",
  },
];

const FAQ = [
  {
    q: "西遊記は実話ですか？",
    a: "{{唐|とう}}の{{僧|そう}}・{{玄奘|げんじょう}}が7世紀に国禁を破ってインドへ旅し、多くの経典を持ち帰ったことは史実です。ただし{{孫悟空|そんごくう}}・{{猪八戒|ちょはっかい}}・{{沙悟浄|さごじょう}}や{{妖怪|ようかい}}との戦いは、{{玄奘|げんじょう}}の死後数百年をかけて講談や{{芝居|しばい}}の中で{{膨|ふく}}らんだ創作です。{{玄奘|げんじょう}}は実際には、ほとんど一人で旅をしました。",
  },
  {
    q: "「三蔵法師」は名前ですか？",
    a: "名前ではなく{{称号|しょうごう}}です。仏教の聖典である経（教え）・律（{{戒律|かいりつ}}）・論（{{注釈|ちゅうしゃく}}）の「三蔵」に通じた{{僧|そう}}を三蔵法師と呼び、{{鳩摩羅什|くまらじゅう}}など{{玄奘|げんじょう}}以外にも多くの三蔵法師がいます。日本ではとくに{{玄奘|げんじょう}}を指すことが多く、「{{玄奘三蔵|げんじょうさんぞう}}」とも呼ばれます。",
  },
  {
    q: "{{沙悟浄|さごじょう}}はなぜカッパの姿なのですか？",
    a: "原作の{{沙悟浄|さごじょう}}は{{流沙河|りゅうさが}}という川に住む{{妖怪|ようかい}}で、カッパではありません。川の{{妖怪|ようかい}}であることから、日本ではなじみ深い水の{{妖怪|ようかい}}であるカッパに重ねられ、テレビドラマや{{漫画|まんが}}などを通じてその姿が広く定着しました。中国では、首に{{髑髏|どくろ}}の{{首飾|くびかざ}}りをかけた{{僧|そう}}の姿で{{描|えが}}かれるのが{{一般的|いっぱんてき}}です。",
  },
  {
    q: "{{孫悟空|そんごくう}}にモデルはいますか？",
    a: "はっきりとはわかっていません。インドの{{叙事詩|じょじし}}『ラーマーヤナ』に登場する{{猿|さる}}の神ハヌマーンがもとになったとする説（{{胡適|こせき}}など）と、中国の古い伝説に出てくる{{淮河|わいが}}の{{猿|さる}}の姿をした水の{{怪物|かいぶつ}}・{{無支祁|むしき}}がもとになったとする説（{{魯迅|ろじん}}など）が知られています。",
  },
  {
    q: "物語の「{{天竺|てんじく}}」や「{{霊山|りょうぜん}}」はどこですか？",
    a: "{{天竺|てんじく}}はインドの古い呼び名です。{{霊山|りょうぜん}}は、{{釈迦|しゃか}}が説法をしたと伝わるインドの{{霊鷲山|りょうじゅせん}}（グリドラクータ）をもとにしていると考えられ、{{玄奘|げんじょう}}が学んだナーランダ{{僧院|そういん}}とも近い場所にあります。",
  },
];

function RouteMap() {
  const toPoints = (route) => route.map(([lon, lat]) => project(lon, lat).join(",")).join(" ");
  const labelPos = (x, y, side) => {
    if (side === "right") return { x: x + 5.4, y: y + 2, anchor: "start" };
    if (side === "left") return { x: x - 5.4, y: y + 2, anchor: "end" };
    if (side === "top") return { x, y: y - 5.6, anchor: "middle" };
    return { x, y: y + 9.6, anchor: "middle" };
  };
  return (
    <div style={{ ...card, padding: 16, marginBottom: 16 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        実際の海岸線をもとにした位置関係図です。朱色の実線は往路、緑の破線は帰路のおおよその経路、番号は下の各地点です。
      </p>
      <svg viewBox="420 36 330 164" style={{ width: "100%", maxHeight: 460, display: "block", margin: "0 auto" }} role="img" aria-label="玄奘の旅の経路図">
        <path d={WORLD_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="0.6" strokeLinejoin="round" />

        <polyline points={toPoints(RETURN_ROUTE)} fill="none" stroke={COLORS.jade} strokeWidth="1.2" strokeDasharray="3 2" strokeLinejoin="round" />
        <polyline points={toPoints(OUTBOUND_ROUTE)} fill="none" stroke={COLORS.vermilionSoft} strokeWidth="1.4" strokeLinejoin="round" />

        {PLACES.map((p) => {
          const [x, y] = project(p.lon, p.lat);
          const l = labelPos(x, y, p.labelSide);
          return (
            <a key={p.no} href={`#place-${p.no}`}>
              <circle cx={x} cy={y} r="3.8" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="0.6" />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="central" style={{ fontFamily: "var(--font-serif), serif", fontSize: 4.4, fontWeight: 700, fill: "#FBF8F0" }}>
                {p.no}
              </text>
              <text x={l.x} y={l.y} textAnchor={l.anchor} style={{ fontFamily: "var(--font-serif), serif", fontSize: 6, fontWeight: 700, fill: COLORS.ink }}>
                {stripRuby(p.label)}
              </text>
            </a>
          );
        })}
      </svg>
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

function NumberBadge({ children, size = 22, outline = false }) {
  return (
    <span
      className="flex items-center justify-center shrink-0"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: outline ? "transparent" : COLORS.vermilion,
        border: outline ? `1.5px solid ${COLORS.vermilion}` : "none",
        color: outline ? COLORS.vermilion : "#FBF8F0",
        fontFamily: "var(--font-serif), serif",
        fontSize: size > 24 ? 13 : 11,
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );
}

function Figure({ imageUrl, alt, caption, credit, height = 220, objectPosition = "center" }) {
  return (
    <figure style={{ ...card, marginBottom: 16 }}>
      <div className="flex items-center justify-center" style={{ width: "100%", height, backgroundColor: "#EFE7D0", overflow: "hidden" }}>
        <HeritageThumb imageUrl={imageUrl} name={alt} type="building" objectPosition={objectPosition} />
      </div>
      <figcaption style={{ fontSize: 10.5, color: COLORS.mist, padding: "8px 12px" }}>
        <RubyText text={caption} />
        {credit && <span> ／ <RubyText text={credit} /></span>}
      </figcaption>
    </figure>
  );
}

export default function SaiyukiPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    about: ["西遊記", "孫悟空", "玄奘", "唐", "四大名著"],
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/saiyuki` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "西遊記とは", item: `${SITE_URL}/saiyuki` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(articleJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(breadcrumbJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(faqJsonLd)) }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 6 }}>
          西遊記とは？
        </h1>
        <p style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, color: COLORS.gold, marginBottom: 14 }}>
          <ruby>孫悟空<rt>そんごくう</rt></ruby>たちの<ruby>天竺<rt>てんじく</rt></ruby>への旅と、史実の<ruby>玄奘三蔵<rt>げんじょうさんぞう</rt></ruby>
        </p>
        <p style={{ ...bodyText, fontSize: 13.5, marginBottom: 20 }}>
          <RubyText text="『{{西遊記|さいゆうき}}』は、{{唐|とう}}の{{僧|そう}}・{{三蔵法師|さんぞうほうし}}が、{{孫悟空|そんごくう}}・{{猪八戒|ちょはっかい}}・{{沙悟浄|さごじょう}}の三人の弟子を供に、{{妖怪|ようかい}}たちの{{襲撃|しゅうげき}}をくぐり{{抜|ぬ}}けながら{{天竺|てんじく}}（インド）へ経典を取りに行く長編小説です。明代の16世紀に全100回の形にまとまり、『三国志演義』『{{水滸伝|すいこでん}}』『{{紅楼夢|こうろうむ}}』と並ぶ中国の四大名著の一つに数えられます。" />
          物語のもとになったのは、<ruby>唐<rt>とう</rt></ruby>の時代に実際にインドへ旅した僧・<ruby>玄奘<rt>げんじょう</rt></ruby>の大旅行でした。このページでは、あらすじや登場人物に加えて、<ruby>玄奘<rt>げんじょう</rt></ruby>の旅の道のりや史実と物語の違いまで、西遊記の世界をひととおりたどります。
        </p>

        <InArticleAd />

        <Figure
          imageUrl={commons("Journey to the West at Long Corridor.JPG")}
          alt="三蔵法師と三人の弟子"
          caption="三蔵法師と{{悟空|ごくう}}・{{八戒|はっかい}}・{{悟浄|ごじょう}}。白骨夫人の話で、三蔵が{{悟空|ごくう}}を追い{{払|はら}}おうとする場面とされる（北京・{{頤和園|いわえん}}の{{長廊|ちょうろう}}）"
          credit={LONG_CORRIDOR_CREDIT}
          height={240}
        />

        <section style={{ marginTop: 28, marginBottom: 36 }} id="story">
          <h2 style={sectionHeading}>あらすじ</h2>
          <div className="flex flex-col gap-3">
            {STORY.map((s) => (
              <div key={s.no} className="flex gap-3 p-4" style={card}>
                <NumberBadge size={28} outline>{s.no}</NumberBadge>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}><RubyText text={s.title} /></span>
                    <span style={{ fontSize: 11, color: COLORS.gold }}><RubyText text={s.range} /></span>
                  </div>
                  <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                    <RubyText text={s.body} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="people">
          <h2 style={sectionHeading}>主な登場人物</h2>
          <div className="flex flex-col gap-6">
            {PEOPLE.map((group) => (
              <div key={group.side}>
                <div
                  style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: group.color, borderBottom: `2px solid ${group.color}`, paddingBottom: 4, marginBottom: 10 }}
                >
                  <RubyText text={group.side} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.members.map((m) => (
                    <div key={m.name} className="flex gap-3 p-3" style={card}>
                      <Portrait imageUrl={m.imageUrl} name={m.name} size={72} />
                      <div className="flex-1 min-w-0">
                        <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                          <RubyText text={m.name} />
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
              </div>
            ))}
          </div>
          {XUANZANG.credit && (
            <p style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 10 }}>
              三蔵法師の肖像: <ruby>玄奘三蔵像<rt>げんじょうさんぞうぞう</rt></ruby> <RubyText text={XUANZANG.credit} />
            </p>
          )}
        </section>

        <section style={{ marginBottom: 36 }} id="episodes">
          <h2 style={sectionHeading}>有名なエピソード</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {EPISODES.map((e) => (
              <div key={e.title} className="p-4" style={{ ...card, borderTop: `3px solid ${COLORS.vermilion}` }}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                  <RubyText text={e.title} />
                </div>
                <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}><RubyText text={e.range} /></div>
                <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={e.body} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 32 }} id="flow">
          <h2 style={sectionHeading}>年表：<ruby>玄奘<rt>げんじょう</rt></ruby>の生涯と西遊記の成立</h2>
          <div className="flex flex-col gap-2">
            {FLOW.map((f, i) => {
              const content = (
                <div className="flex items-baseline gap-3 px-4 py-2.5" style={{ ...card, borderLeft: `3px solid ${COLORS.vermilion}` }}>
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 12.5, color: COLORS.inkSoft, whiteSpace: "nowrap" }}><RubyText text={f.year} /></span>
                  <div className="flex-1 min-w-0">
                    <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                      <RubyText text={f.title} />
                    </div>
                    <div style={{ fontSize: 11.5, color: COLORS.inkSoft, lineHeight: 1.6, marginTop: 2 }}>
                      <RubyText text={f.note} />
                    </div>
                  </div>
                  {(f.href || f.anchor) && (
                    <span className="shrink-0" style={{ color: COLORS.vermilion, fontSize: 13 }}>→</span>
                  )}
                </div>
              );
              const href = f.href || (f.anchor && `#${f.anchor}`);
              return href ? <a key={i} href={href}>{content}</a> : <div key={i}>{content}</div>;
            })}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="journey">
          <h2 style={sectionHeading}><ruby>玄奘三蔵<rt>げんじょうさんぞう</rt></ruby>の旅をたどる</h2>
          <div className="flex flex-col gap-3" style={{ ...bodyText, marginBottom: 20 }}>
            <p>
              <RubyText text="{{玄奘|げんじょう}}は、各地で学ぶうちに、当時の中国に伝わっていた経典の{{翻訳|ほんやく}}には誤りや食い{{違|ちが}}いが多いことに気づき、仏教が生まれたインドで原典を学びたいと考えるようになりました。しかし建国まもない{{唐|とう}}は国外への{{渡航|とこう}}を禁じており、許可は下りません。{{玄奘|げんじょう}}は629年、ひそかに長安を出発します。" />
            </p>
            <p>
              <RubyText text="西域のオアシス国家を経て天山山脈を{{越|こ}}え、中央アジアからヒンドゥークシュ山脈を{{越|こ}}えてインドへ。ナーランダ{{僧院|そういん}}で学び、インド各地をめぐった{{玄奘|げんじょう}}は、帰りはパミール高原を{{越|こ}}えてタクラマカン{{砂漠|さばく}}の南側を通り、645年に長安へ{{戻|もど}}りました。往復およそ17年、訪れた国は110か国にのぼったといいます。" />
            </p>
          </div>

          <RouteMap />
          <div className="flex flex-col gap-2">
            {PLACES.map((p) => (
              <div key={p.no} id={`place-${p.no}`} className="flex items-baseline gap-3 px-4 py-2.5" style={{ ...card, scrollMarginTop: 16 }}>
                <NumberBadge>{p.no}</NumberBadge>
                <div className="flex-1 min-w-0">
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={p.name} />
                  </span>
                  <span style={{ fontSize: 12, color: COLORS.inkSoft, marginLeft: 8 }}>
                    <RubyText text={p.note} />
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 12 }}>
            <ruby>高昌<rt>こうしょう</rt></ruby>や<ruby>亀茲<rt>きじ</rt></ruby>など、<ruby>玄奘<rt>げんじょう</rt></ruby>が通ったオアシス都市については<a href="/silk-road" style={linkStyle}>シルクロードとは</a>のページでも紹介しています。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="history-vs-legend">
          <h2 style={sectionHeading}>史実の<ruby>玄奘<rt>げんじょう</rt></ruby>と物語の違い</h2>
          <div className="flex flex-col gap-3" style={{ ...bodyText, marginBottom: 14 }}>
            <p>
              <RubyText text="帰国した{{玄奘|げんじょう}}を、{{唐|とう}}の{{太宗|たいそう}}は国禁を破った罪に問うどころか厚くもてなしました。太宗は西方の情報を求めて旅の記録をまとめるよう命じ、{{玄奘|げんじょう}}が語った内容を弟子の{{弁機|べんき}}が筆録して、646年に『{{大唐西域記|だいとうさいいきき}}』が完成します。各国の地理・気候・{{風俗|ふうぞく}}・仏教の様子を記したこの書は、7世紀の中央アジアやインドを知るための第一級の史料となっています。" />
            </p>
            <p>
              <RubyText text="一方、{{玄奘|げんじょう}}の死後に弟子たちがまとめた伝記『{{大慈恩寺三蔵法師伝|だいじおんじさんぞうほうしでん}}』には、{{砂漠|さばく}}で{{幻|まぼろし}}の軍勢を見る話や、{{観音菩薩|かんのんぼさつ}}に{{祈|いの}}って危機を{{脱|だっ}}する話など、不思議な出来事も記されています。こうした{{逸話|いつわ}}が語り{{継|つ}}がれるうちに、旅は神仏と{{妖怪|ようかい}}が入り乱れる{{冒険|ぼうけん}}物語へと姿を変えていきました。" />
            </p>
          </div>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 460 }}>
              <thead>
                <tr>
                  <th style={{ width: 70, padding: "10px 8px", borderBottom: "1px solid #DCD3B8" }} />
                  <th style={{ padding: "10px 8px", borderBottom: `2px solid ${COLORS.ink}`, textAlign: "left", fontFamily: "var(--font-serif), serif", fontSize: 14, color: COLORS.ink }}>史実（『<ruby>大唐西域記<rt>だいとうさいいきき</rt></ruby>』など）</th>
                  <th style={{ padding: "10px 8px", borderBottom: `2px solid ${COLORS.vermilion}`, textAlign: "left", fontFamily: "var(--font-serif), serif", fontSize: 14, color: COLORS.ink }}>小説『西遊記』</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      style={{ padding: "9px 8px", textAlign: "left", fontWeight: 700, fontSize: 11.5, color: COLORS.gold, borderTop: "1px solid #E8E0CA", verticalAlign: "top", whiteSpace: "nowrap" }}
                    >
                      <RubyText text={row.label} />
                    </th>
                    <td style={{ padding: "9px 8px", color: COLORS.ink, lineHeight: 1.6, borderTop: "1px solid #E8E0CA", verticalAlign: "top" }}>
                      <RubyText text={row.history} />
                    </td>
                    <td style={{ padding: "9px 8px", color: COLORS.ink, lineHeight: 1.6, borderTop: "1px solid #E8E0CA", verticalAlign: "top" }}>
                      <RubyText text={row.legend} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ marginTop: 16 }}>
            <Figure
              imageUrl={commons("Xuanzang returned from India. Dunhuang mural, Cave 103. High Tang period (712-765)..jpg")}
              alt="インドから帰る玄奘を描いた敦煌の壁画"
              caption="インドから帰る{{玄奘|げんじょう}}を{{描|えが}}いたとされる、{{敦煌|とんこう}}{{莫高窟|ばっこうくつ}}第103{{窟|くつ}}の{{壁画|へきが}}（{{盛唐|せいとう}}）"
              credit="Wikimedia Commons（パブリックドメイン）"
              height={180}
            />
            <Figure
              imageUrl="https://commons.wikimedia.org/wiki/Special:FilePath/Giant_Wild_Goose_Pagoda.jpg"
              alt="大雁塔"
              caption="{{玄奘|げんじょう}}が持ち帰った経典を納めるために建てられた、西安の{{大雁塔|だいがんとう}}"
              credit="写真: Alex Kwok / Wikimedia Commons, CC BY-SA 3.0"
              height={180}
            />
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="versions">
          <h2 style={sectionHeading}>西遊記の成り立ちと作者</h2>
          <div className="flex flex-col gap-3" style={{ ...bodyText, marginBottom: 14 }}>
            <p>
              <RubyText text="{{玄奘|げんじょう}}の旅の物語は、{{宋代|そうだい}}には盛り場の講談で語られるようになり、そのなかで{{猿|さる}}の姿をした守り手が登場します。元代には{{芝居|しばい}}や講談の台本で{{猪八戒|ちょはっかい}}や{{沙悟浄|さごじょう}}が加わり、明代の16世紀に、それらを集大成した全100回の長編小説『西遊記』が完成しました。" />
            </p>
            <p>
              <RubyText text="作者は{{淮安|わいあん}}（現在の{{江蘇省|こうそしょう}}）の文人・{{呉承恩|ごしょうおん}}（1500{{頃|ごろ}}〜1582{{頃|ごろ}}）とされるのが{{一般的|いっぱんてき}}です。ただし、明代の刊本には作者名がなく、20世紀に入って郷土の記録に「{{呉承恩|ごしょうおん}}の著作に『西遊記』がある」とあることから{{呉承恩説|ごしょうおんせつ}}が広まったもので、それが小説を指すのかどうかには異論もあります。" />
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {VERSIONS.map((v) => (
              <div key={v.name} className="px-4 py-3" style={{ ...card, borderLeft: `3px solid ${COLORS.gold}` }}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                  <RubyText text={v.name} />
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 2 }}>
                  <RubyText text={v.note} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="japan">
          <h2 style={sectionHeading}>日本での西遊記</h2>
          <div className="flex flex-col gap-3">
            {JAPAN.map((j) => (
              <div key={j.title} className="p-4" style={card}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={j.title} />
                  </span>
                  <span style={{ fontSize: 11, color: COLORS.gold }}><RubyText text={j.era} /></span>
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={j.body} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="faq">
          <h2 style={sectionHeading}>西遊記についてのよくある疑問</h2>
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
            <ruby>玄奘<rt>げんじょう</rt></ruby>が生きた<ruby>唐<rt>とう</rt></ruby>の時代の出来事や人物は、年表・人物ページもあわせてご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/tang" variant="solid"><ruby>唐<rt>とう</rt></ruby>の時代解説を見る</NavButton>
            <NavButton href="/people/tang" variant="outline"><ruby>唐<rt>とう</rt></ruby>の人物一覧を見る</NavButton>
            {TAIZONG.href && <NavButton href={TAIZONG.href} variant="outline"><ruby>唐<rt>とう</rt></ruby>の太宗（<ruby>李世民<rt>りせいみん</rt></ruby>）</NavButton>}
            <NavButton href="/silk-road" variant="outline">シルクロードとは</NavButton>
            <NavButton href="/four-great-novels" variant="outline">中国の四大名著とは</NavButton>
            <NavButton href="/suikoden" variant="outline"><ruby>水滸伝<rt>すいこでん</rt></ruby>とは</NavButton>
            <NavButton href="/wuxia-games" variant="outline">ゲーム『黒神話：<ruby>悟空<rt>ごくう</rt></ruby>』の元ネタ</NavButton>
          </div>
        </section>

        <A8AdBlock ad="audible" className="mt-10" />

        <RelatedEraGuides path="/saiyuki" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
