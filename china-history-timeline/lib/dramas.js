// 中国歴史ドラマの史実解説（/dramas, /dramas/[slug]）のデータ。
// 作品を1件追加するときは DRAMAS に1オブジェクト足すだけでよい。
// ハブページ・詳細ページ・サイトマップ・時代ページ／出来事ページの逆引きブロックはすべてここから自動で生成される。
//
// 文字列はほかのデータと同じくルビ記法 {{漢字|ふりがな}} が使える（title・description 等のメタデータでは自動で除去される）。
// 史実の記述で確信のないものは断定せず、下書きの箇所には「TODO: 要確認」のコメントを付けておくこと。
// 配信URL・ASINは推測で書かず、確認できたものだけを入れる（不明なら空配列のまま）。
//
// ドラマのスチール・ポスター・俳優写真は使わない。セリフも引用しない。

import { ERAS, findEventBySlug, getEraFigures, personSlug, stripRuby } from "./data";

/**
 * @typedef {Object} DramaCharacter
 * @property {string} role              ドラマでの役名
 * @property {string} [realPersonId]    既存の人物ページがあれば "eraId/人物名"（/emperors の person と同じ形式）
 * @property {string} [realName]        人物ページがない場合の実在名
 * @property {"real" | "composite" | "fictional"} type  実在 / 合成（複数人物のモデル） / 架空
 * @property {string} historicalNote    史実での人物像
 * @property {string} difference        ドラマとの違い
 */

/**
 * @typedef {Object} Drama
 * @property {string} slug              英語のケバブケース（URL）
 * @property {string} titleJa           日本語題（正式名）
 * @property {string} titleShort        title・OGP・カード用の短い日本語題
 * @property {string} titleOriginal     原題
 * @property {string[]} aliases         略称・表記ゆれ
 * @property {number} year              本国放送年
 * @property {number} episodes          話数
 * @property {string[]} eraIds          ERAS の時代ID
 * @property {{ start: number, end: number }} period  作中で描かれる年代（西暦。紀元前は負の数）
 * @property {{ score: 1 | 2 | 3 | 4 | 5, basis: string }} historicity
 *   史実度。basis には「主要人物の実在／主要事件／時系列／人物像」の4基準の内訳を書く
 * @property {string} summary           結論ボックス用（3行程度）。1文目はmeta descriptionの冒頭にもなる
 * @property {string} background        時代背景の短い説明
 * @property {DramaCharacter[]} characters  先頭を主人公とする（結論ボックス・カードの「主人公のモデル」に使う）
 * @property {{ title: string, body: string }[]} divergences  史実と違うポイント（3〜5件）
 * @property {string} aftermath         史実の「その後」（ネタバレ）
 * @property {string[]} relatedEventIds 出来事の slug（ERAS の events）
 * @property {{ year: number, text: string }[]} timeline  ミニ年表に出来事と並べる補足項目（出来事ページが無いもの）
 * @property {{ service: string, url: string, checkedAt: string }[]} streaming  checkedAt は "YYYY-MM-DD"。空配列可
 * @property {{ asin: string, note: string }[]} books  空配列可
 * @property {string} publishedAt       "YYYY-MM-DD"
 * @property {string} updatedAt         "YYYY-MM-DD"
 */

/** @type {Drama[]} */
export const DRAMAS = [
  {
    slug: "yanxi-palace",
    titleJa: "瓔珞〈エイラク〉～{{紫禁城|しきんじょう}}に{{燃|も}}ゆる{{逆襲|ぎゃくしゅう}}の王妃～",
    titleShort: "瓔珞〈エイラク〉",
    titleOriginal: "{{延禧攻略|えんきこうりゃく}}",
    aliases: ["瓔珞", "エイラク", "延禧攻略", "Story of Yanxi Palace"],
    year: 2018,
    episodes: 70,
    eraIds: ["qing"],
    // TODO: 要確認（作中で描かれる年代の始まりと終わり）
    period: { start: 1736, end: 1766 },
    historicity: {
      // TODO: 要確認（スコアと内訳は下書き）
      score: 2,
      basis:
        "主要人物の実在：◎（{{乾隆帝|けんりゅうてい}}・{{富察|ふちゃ}}皇后・{{継皇后|けいこうごう}}・主人公のモデルなど主な{{后妃|こうひ}}は実在）／" +
        "主要事件：△（{{後宮|こうきゅう}}の{{陰謀|いんぼう}}と主人公の{{復讐劇|ふくしゅうげき}}は{{創作|そうさく}}が中心）／" +
        "時系列：○（皇后の死や{{継皇后|けいこうごう}}の{{断髪|だんぱつ}}などの大きな出来事の順序はおおむね史実に沿う）／" +
        "人物像：△（史料に性格の記録がほとんどなく、人物像の多くは脚色）",
    },
    // TODO: 要確認（「生前の位は皇貴妃まで」「皇后号は1795年の追贈」の部分）
    summary:
      "主人公の{{魏瓔珞|ぎえいらく}}のモデルは、{{乾隆帝|けんりゅうてい}}の{{妃|きさき}}で{{嘉慶帝|かけいてい}}の生母となった{{孝儀純皇后|こうぎじゅんこうごう}}（{{魏佳氏|ぎかし}}）。" +
      "{{富察|ふちゃ}}皇后や{{継皇后|けいこうごう}}など主要な{{后妃|こうひ}}は実在するが、{{復讐劇|ふくしゅうげき}}を軸にした物語の大半は創作。" +
      "史実の{{魏佳氏|ぎかし}}は生前は{{皇貴妃|こうきひ}}までで、皇后の位は息子が皇太子に立てられた後に{{追贈|ついぞう}}されたものだった。",
    // TODO: 要確認（乾隆帝の在位年・退位後の扱い）
    background:
      "{{康熙帝|こうきてい}}・{{雍正帝|ようせいてい}}・{{乾隆帝|けんりゅうてい}}の三代は「{{康雍乾盛世|こうようけんせいせい}}」と呼ばれる清の最盛期。" +
      "1735年に{{即位|そくい}}した{{乾隆帝|けんりゅうてい}}は約60年在位し、{{新疆|しんきょう}}の平定などで清の版図を最大にした。" +
      "ドラマの舞台はその前半、北京の{{紫禁城|しきんじょう}}の{{後宮|こうきゅう}}。皇后を頂点に{{皇貴妃|こうきひ}}・{{貴妃|きひ}}・{{妃|ひ}}・{{嬪|ひん}}・{{貴人|きじん}}と続く位階の中で、{{妃|きさき}}たちが{{皇帝|こうてい}}の{{寵愛|ちょうあい}}と子の地位を競った。",
    characters: [
      {
        role: "{{魏瓔珞|ぎえいらく}}",
        realName: "{{孝儀純皇后|こうぎじゅんこうごう}}（{{魏佳氏|ぎかし}}）",
        type: "real",
        // TODO: 要確認（生没年・出自・位の変遷の年）
        historicalNote:
          "1727〜1775年。内務府に属する{{包衣|ボーイ}}（皇室に仕える家）の出身とされる。{{貴人|きじん}}から{{令嬪|れいひん}}・{{令妃|れいひ}}・{{令貴妃|れいきひ}}と昇り、{{継皇后|けいこうごう}}の失脚後に{{皇貴妃|こうきひ}}となって{{後宮|こうきゅう}}を取りまとめた。後の{{嘉慶帝|かけいてい}}を含む多くの子を産んだ。",
        // TODO: 要確認
        difference:
          "姉の死の真相を追って{{後宮|こうきゅう}}に入り、知略で敵を打ち破っていく{{復讐|ふくしゅう}}の物語は創作。史料には性格をうかがわせる記録がほとんど残っていない。",
      },
      {
        role: "{{富察|ふちゃ}}皇后（{{富察容音|ふちゃようおん}}）",
        realName: "{{孝賢純皇后|こうけんじゅんこうごう}}（{{富察|ふちゃ}}氏）",
        type: "real",
        // TODO: 要確認（生年・皇子の没年・死去の場所）
        historicalNote:
          "{{乾隆帝|けんりゅうてい}}の最初の皇后で、1748年に死去。{{質素|しっそ}}を好んだと伝わり、{{乾隆帝|けんりゅうてい}}との仲は{{睦|むつ}}まじかったとされる。産んだ二人の皇子をいずれも幼くして失い、その後の{{東巡|とうじゅん}}（山東への{{行幸|ぎょうこう}}）の帰途に病で亡くなった。",
        // TODO: 要確認
        difference:
          "ドラマでは主人公の{{庇護者|ひごしゃ}}として描かれ、最期も劇的に演出される。史実では{{行幸|ぎょうこう}}先からの帰り道での病死とされる。",
      },
      {
        role: "{{嫻妃|かんひ}}（{{輝発那拉|ホイファナラ}}・{{淑慎|しゅくしん}}、後の{{継皇后|けいこうごう}}）",
        realName: "{{継皇后|けいこうごう}}（{{輝発那拉|ホイファナラ}}氏／ウラナラ氏）",
        type: "real",
        // TODO: 要確認（立后年・断髪の年と場所・死去年・葬礼の扱い）
        historicalNote:
          "{{嫻妃|かんひ}}・{{嫻貴妃|かんきひ}}を経て、{{富察|ふちゃ}}皇后の死後に{{皇貴妃|こうきひ}}、1750年に皇后となった。1765年の{{南巡|なんじゅん}}の途中で自ら髪を切り（満洲の習俗では{{喪|も}}を意味し、大きなタブーとされた）、北京へ送り返されて事実上{{廃|はい}}された。翌1766年に死去したが、皇后としての{{葬礼|そうれい}}や{{諡号|しごう}}は与えられなかった。",
        // TODO: 要確認
        difference:
          "ドラマでは{{後宮|こうきゅう}}の陰謀の中心人物として描かれる。断髪の理由は史料に残っておらず、ドラマが示す動機は創作による解釈。",
      },
      {
        role: "{{乾隆帝|けんりゅうてい}}（{{弘暦|こうれき}}）",
        realPersonId: "qing/乾隆帝",
        realName: "{{乾隆帝|けんりゅうてい}}（{{弘暦|こうれき}}）",
        type: "real",
        // TODO: 要確認（在位年・退位の年）
        historicalNote:
          "清の第6代{{皇帝|こうてい}}（1711〜1799年）。祖父{{康熙帝|こうきてい}}の在位年数を超えないとして1796年に{{嘉慶帝|かけいてい}}へ位を{{譲|ゆず}}ったが、{{太上皇|たいじょうこう}}として死去まで実権を{{握|にぎ}}った。{{十全武功|じゅうぜんぶこう}}を誇り、詩作や美術品の収集でも知られる。",
        // TODO: 要確認
        difference:
          "{{後宮|こうきゅう}}の{{妃|きさき}}たちとの恋愛や{{駆|か}}け引きが物語の中心で、政治・{{遠征|えんせい}}の面はほとんど描かれない。",
      },
      {
        role: "{{富察傅恒|ふちゃふこう}}",
        realName: "{{傅恒|ふこう}}",
        type: "real",
        // TODO: 要確認（没年・役職）
        historicalNote:
          "{{富察|ふちゃ}}皇后の弟。{{軍機大臣|ぐんきだいじん}}として{{乾隆帝|けんりゅうてい}}に重用され、金川の役やビルマ遠征などで軍を率いた。1770年に死去。",
        // TODO: 要確認
        difference: "主人公との恋愛は創作。史実で二人の関係を示す記録はない。",
      },
      {
        role: "{{爾晴|じせい}}",
        type: "fictional",
        // TODO: 要確認（傅恒の正室の出自）
        historicalNote: "該当する実在の人物はいない。史実の{{傅恒|ふこう}}の正室は{{那拉|ナラ}}氏とされる。",
        difference: "ドラマオリジナルの登場人物。",
      },
    ],
    divergences: [
      {
        title: "主人公の「{{復讐|ふくしゅう}}」は創作",
        // TODO: 要確認
        body:
          "物語は主人公が姉の死の真相を追って{{後宮|こうきゅう}}に入るところから始まるが、モデルの{{魏佳氏|ぎかし}}にそのような経歴は伝わっていない。史料からわかるのは、内務府の家から{{後宮|こうきゅう}}に入り、位を上げていったという経過がほとんどである。",
      },
      {
        title: "{{富察|ふちゃ}}皇后の最期",
        // TODO: 要確認
        body:
          "{{富察|ふちゃ}}皇后は1748年、{{乾隆帝|けんりゅうてい}}の山東{{行幸|ぎょうこう}}に同行した帰り道で病没したとされる。前年に幼い皇子を{{天然痘|てんねんとう}}で失っており、心身ともに弱っていたと考えられている。ドラマの最期の描き方は脚色である。",
      },
      {
        title: "生前に皇后にはなっていない",
        // TODO: 要確認
        body:
          "日本語題の「王妃」や「皇后」の{{呼称|こしょう}}から皇后に上り詰めた印象を受けるが、{{魏佳氏|ぎかし}}の生前の最高位は{{皇貴妃|こうきひ}}。皇后の位は死後20年たった1795年、息子（後の{{嘉慶帝|かけいてい}}）が皇太子に立てられた際に{{追贈|ついぞう}}された。",
      },
      {
        title: "{{傅恒|ふこう}}とのロマンス",
        // TODO: 要確認
        body:
          "{{傅恒|ふこう}}は実在の重臣だが、主人公との恋愛を示す史料はない。{{傅恒|ふこう}}の妻とされる{{爾晴|じせい}}もドラマオリジナルの人物である。",
      },
      {
        title: "{{継皇后|けいこうごう}}の{{断髪|だんぱつ}}の理由",
        // TODO: 要確認
        body:
          "{{継皇后|けいこうごう}}が1765年の{{南巡|なんじゅん}}中に髪を切って失脚したこと自体は史実だが、なぜ切ったのかは記録に残っていない。{{乾隆帝|けんりゅうてい}}も詳しい理由を公にしておらず、ドラマの描写はひとつの解釈にすぎない。",
      },
    ],
    // TODO: 要確認（年・子の数・陵墓）
    aftermath:
      "{{継皇后|けいこうごう}}は1766年に死去し、皇后の{{葬礼|そうれい}}は行われなかった。皇后を立てないまま、{{皇貴妃|こうきひ}}となった{{魏佳氏|ぎかし}}が{{後宮|こうきゅう}}を取りまとめたが、1775年に49歳で死去した。" +
      "1795年、{{乾隆帝|けんりゅうてい}}は{{魏佳氏|ぎかし}}の産んだ{{永琰|えいえん}}を皇太子とし、母の{{魏佳氏|ぎかし}}に{{孝儀純皇后|こうぎじゅんこうごう}}の位を追贈した。翌1796年に{{永琰|えいえん}}が{{即位|そくい}}して{{嘉慶帝|かけいてい}}となる。" +
      "{{乾隆帝|けんりゅうてい}}は1799年に死去し、{{孝賢純皇后|こうけんじゅんこうごう}}・{{孝儀純皇后|こうぎじゅんこうごう}}とともに{{裕陵|ゆうりょう}}（{{清東陵|しんとうりょう}}）に{{葬|ほうむ}}られた。",
    relatedEventIds: ["qing--1"],
    // TODO: 要確認（すべての年）
    timeline: [
      { year: 1735, text: "{{乾隆帝|けんりゅうてい}}が{{即位|そくい}}する（翌年、{{乾隆|けんりゅう}}に改元）" },
      { year: 1748, text: "{{富察|ふちゃ}}皇后（{{孝賢純皇后|こうけんじゅんこうごう}}）が{{東巡|とうじゅん}}の帰途に死去" },
      { year: 1750, text: "{{嫻貴妃|かんきひ}}{{那拉|ナラ}}氏が皇后に立てられる" },
      { year: 1760, text: "{{魏佳氏|ぎかし}}が皇子{{永琰|えいえん}}（後の{{嘉慶帝|かけいてい}}）を産む" },
      { year: 1765, text: "{{南巡|なんじゅん}}中に{{継皇后|けいこうごう}}が{{断髪|だんぱつ}}し、北京へ送り返される。{{魏佳氏|ぎかし}}が{{皇貴妃|こうきひ}}となる" },
      { year: 1775, text: "{{皇貴妃|こうきひ}}{{魏佳氏|ぎかし}}が死去" },
      { year: 1795, text: "{{永琰|えいえん}}が皇太子に立てられ、{{魏佳氏|ぎかし}}に{{孝儀純皇后|こうぎじゅんこうごう}}の位が追贈される" },
      { year: 1796, text: "{{乾隆帝|けんりゅうてい}}が退位し、{{嘉慶帝|かけいてい}}が{{即位|そくい}}" },
    ],
    streaming: [],
    books: [],
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
  },
];

// ---- 整合性チェック（data.js の slug チェックと同じく、ビルド時に壊れた参照を見つける） ----
{
  const seen = new Set();
  DRAMAS.forEach((d) => {
    if (seen.has(d.slug)) throw new Error(`ドラマのslugが重複しています: ${d.slug}`);
    seen.add(d.slug);
    d.eraIds.forEach((id) => {
      if (!ERAS.some((e) => e.id === id)) throw new Error(`存在しない時代IDです: ${d.slug} → ${id}`);
    });
    d.relatedEventIds.forEach((id) => {
      if (!findEventBySlug(id)) throw new Error(`存在しない出来事IDです: ${d.slug} → ${id}`);
    });
  });
}

// 時代ID・出来事IDからドラマを引く逆引きインデックス。import時に1度だけ作る
const DRAMA_INDEX = (() => {
  const byEra = new Map();
  const byEvent = new Map();
  const add = (map, key, drama) => {
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(drama);
  };
  sortDramas(DRAMAS).forEach((d) => {
    d.eraIds.forEach((id) => add(byEra, id, d));
    d.relatedEventIds.forEach((id) => add(byEvent, id, d));
  });
  return { byEra, byEvent };
})();

// 描かれる年代の古い順に並べる
function sortDramas(list) {
  return [...list].sort((a, b) => a.period.start - b.period.start || a.period.end - b.period.end);
}

export function getDramaIndex() {
  return DRAMA_INDEX;
}

export function getDramaBySlug(slug) {
  return DRAMAS.find((d) => d.slug === slug) || null;
}

export function getSortedDramas() {
  return sortDramas(DRAMAS);
}

// 指定ドラマと時代が重なる他作品
export function getSameEraDramas(drama) {
  return getSortedDramas().filter((d) => d.slug !== drama.slug && d.eraIds.some((id) => drama.eraIds.includes(id)));
}

// 紀元前は「前N年」と表記する
export function formatYear(y) {
  return y < 0 ? `前${-y}年` : `${y}年`;
}

export function formatPeriod({ start, end }) {
  return `${formatYear(start)}〜${formatYear(end)}`;
}

// 人物ページへのリンク。経歴（bio）付きで年表データに載っている人物だけリンクする
export function realPersonHref(realPersonId) {
  if (!realPersonId) return null;
  const [eraId, name] = realPersonId.split("/");
  const era = ERAS.find((e) => e.id === eraId);
  const found = era && getEraFigures(era).some((p) => p.bio && personSlug(p.name) === name);
  return found ? `/people/${eraId}/${encodeURIComponent(name)}` : null;
}

// カード・逆引きブロック用に、クライアントコンポーネントへ渡せる軽量な形へ変換する
export function toDramaCard(drama) {
  const lead = drama.characters[0];
  const eras = drama.eraIds.map((id) => ERAS.find((e) => e.id === id));
  return {
    slug: drama.slug,
    title: drama.titleShort,
    titleOriginal: drama.titleOriginal,
    year: drama.year,
    eraIds: drama.eraIds,
    eraNames: eras.map((e) => e.name),
    seal: eras[0].seal,
    period: formatPeriod(drama.period),
    periodStart: drama.period.start,
    score: drama.historicity.score,
    leadRole: lead?.role || null,
    leadModel: lead && lead.type !== "fictional" ? lead.realName || null : null,
  };
}

export function dramaDescription(drama) {
  return stripRuby(drama.summary);
}
