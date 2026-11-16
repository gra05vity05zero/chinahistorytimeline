import { ERAS, stripRuby, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, EventListItem, MiscLinksSection, KeyFacts } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const PATH = "/qin-fall";
const title = "秦はなぜ滅亡したのか？わずか15年で滅びた5つの理由";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "始皇帝が天下を統一した秦は、なぜわずか15年で滅亡したのか。厳しい法治と重税、万里の長城や阿房宮などの大規模土木事業、始皇帝の急死と後継者問題、趙高による政治の混乱、陳勝・呉広の乱という5つの理由を、統一から滅亡までの年表・人物相関図・比較表で解説します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: PATH, type: "article" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const qinEra = ERAS.find((e) => e.id === "qin");
const westernhanEra = ERAS.find((e) => e.id === "westernhan");
const findEvent = (era, keyword) => era?.events.find((ev) => stripRuby(ev.title).includes(keyword));

const eventUnification = findEvent(qinEra, "中国統一");
const eventGreatWall = findEvent(qinEra, "万里の長城");
const eventBurning = findEvent(qinEra, "焚書坑儒");
const eventChenSheng = findEvent(qinEra, "陳勝");
const eventFall = findEvent(qinEra, "秦の滅亡");
const eventHan = findEvent(westernhanEra, "漢を建国");

const RELATED_EVENTS = [eventUnification, eventGreatWall, eventBurning, eventChenSheng, eventFall, eventHan].filter(Boolean);

const h2Style = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 12 };
const h3Style = { fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 8 };
const pStyle = { fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 };
const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 14 };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const thStyle = { textAlign: "left", fontWeight: 700, color: COLORS.ink, padding: "8px 10px", borderBottom: `1.5px solid ${COLORS.mist}`, whiteSpace: "nowrap" };
const tdStyle = { padding: "8px 10px", borderBottom: "1px solid #DCD3B8", verticalAlign: "top", color: COLORS.inkSoft };

const KEY_FACTS = [
  { q: "いつ{{滅|ほろ}}んだ？", a: "紀元前206年。{{秦王|しんおう}}{{子嬰|しえい}}が{{劉邦|りゅうほう}}に{{降伏|こうふく}}し、{{秦|しん}}は{{滅亡|めつぼう}}した。" },
  { q: "何年続いた？", a: "前221年の中国統一から数えてわずか15年。{{始皇帝|しこうてい}}の死からはたった4年で崩れた。" },
  { q: "誰が{{滅|ほろ}}ぼした？", a: "都{{咸陽|かんよう}}を{{開城|かいじょう}}させたのは{{劉邦|りゅうほう}}。あとから入った{{項羽|こうう}}が{{子嬰|しえい}}を殺し、{{咸陽|かんよう}}を焼き{{払|はら}}った。" },
  { q: "5つの理由", a: "①厳しい法治と重税 ②大規模な土木事業 ③{{始皇帝|しこうてい}}の急死と{{後継者|こうけいしゃ}}問題 ④{{趙高|ちょうこう}}による政治の混乱 ⑤{{陳勝|ちんしょう}}・{{呉広|ごこう}}の乱による反乱の拡大" },
];

const EMPERORS = [
  { name: "{{始皇帝|しこうてい}}（{{嬴政|えいせい}}）", reign: "前221年-前210年", note: "{{秦王|しんおう}}としては前247年に{{即位|そくい}}。{{巡幸|じゅんこう}}中に{{沙丘|さきゅう}}で病死" },
  { name: "{{二世皇帝|にせいこうてい}}（{{胡亥|こがい}}）", reign: "前210年-前207年", note: "{{始皇帝|しこうてい}}の末子。{{趙高|ちょうこう}}に追い{{詰|つ}}められ自害" },
  { name: "{{秦王|しんおう}}{{子嬰|しえい}}", reign: "前207年-前206年", note: "{{皇帝|こうてい}}号をやめ「{{秦王|しんおう}}」を名乗る。在位46日で{{劉邦|りゅうほう}}に{{降伏|こうふく}}し、のち{{項羽|こうう}}に殺された。{{続柄|つづきがら}}には{{諸説|しょせつ}}ある" },
];

const REASONS = [
  {
    id: "riyu1",
    title: "厳しい法治と重税",
    body: [
      "{{秦|しん}}は{{商鞅|しょうおう}}以来の{{法家|ほうか}}思想にもとづき、細かな法と厳しい{{罰|ばつ}}で国を動かした。隣近所に連帯責任を負わせる{{什伍|じゅうご}}の制度もあり、一人の罪が家族や近隣に及んだ。" +
        "戦国時代の{{秦|しん}}ではこの{{仕組|しく}}みが強い軍隊と{{効率|こうりつ}}のよい役所を生んだが、文化も習慣も違う旧六国の人々にまで同じ法を一気に{{押|お}}し付けたことで、強い反発を{{招|まね}}いた。",
      "そこへ重い税がのしかかる。前漢の思想家{{董仲舒|とうちゅうじょ}}は、{{秦|しん}}の民の負担は労役が古代の30倍、税が20倍にのぼったと{{批判|ひはん}}している。" +
        "なお、1975年に見つかった{{睡虎地秦簡|すいこちしんかん}}など出土した{{秦|しん}}の法律を見ると、労役の集合に数日遅れた場合の{{罰|ばつ}}は{{叱責|しっせき}}や{{罰金|ばっきん}}程度だった。" +
        "{{秦|しん}}の法は『{{史記|しき}}』が伝えるほど一律に{{残酷|ざんこく}}ではなく、問題は法の{{厳|きび}}しさそのものより、新しく{{支配|しはい}}した土地に{{杓子定規|しゃくしじょうぎ}}に当てはめた{{性急|せいきゅう}}さにあった、という見方も強まっている。",
    ],
  },
  {
    id: "riyu2",
    title: "万里の長城や阿房宮などの大規模土木事業",
    body: [
      "統一後の{{秦|しん}}は、北の長城、{{阿房宮|あぼうきゅう}}と{{始皇帝陵|しこうていりょう}}の造営、全国を結ぶ{{馳道|ちどう}}（幹線道路）や運河の建設、南の{{嶺南|れいなん}}（現在の広東・広西）への遠征を、ほぼ同時に進めた。" +
        "『{{史記|しき}}』は{{阿房宮|あぼうきゅう}}と{{驪山|りざん}}の{{陵墓|りょうぼ}}だけで刑徒70万人あまりが働いたと記す。当時の人口は2000万〜3000万人ほどと見られ、数十万から百万人規模が{{常時|じょうじ}}どこかの工事や{{守備|しゅび}}に{{駆|か}}り出されていた計算になる。",
      "働き手を取られた農村では耕作が{{滞|とどこお}}り、税を{{納|おさ}}める力も失われていった。どれも国の{{基盤|きばん}}づくりとして意味のある事業だったが、戦国の長い戦乱で{{疲|つか}}れきった人々に、休む間を与えずに{{課|か}}したことが{{致命的|ちめいてき}}だった。" +
        "{{二世皇帝|にせいこうてい}}は{{即位|そくい}}後に{{阿房宮|あぼうきゅう}}の工事を再開させており、負担は{{始皇帝|しこうてい}}の死後も軽くならなかった（発掘では{{阿房宮|あぼうきゅう}}は完成しないまま終わったと考えられている）。",
    ],
  },
  {
    id: "riyu3",
    title: "始皇帝の急死と後継者問題",
    body: [
      "{{始皇帝|しこうてい}}は不老不死を求めながらも、正式な{{後継者|こうけいしゃ}}を定めないまま前210年、{{巡幸|じゅんこう}}中の{{沙丘|さきゅう}}で50{{歳|さい}}で急死した。同行していた{{宦官|かんがん}}{{趙高|ちょうこう}}と{{丞相|じょうしょう}}{{李斯|りし}}は、" +
        "人望のあった長子{{扶蘇|ふそ}}が{{即位|そくい}}すれば自分たちの立場が{{危|あや}}うくなると考え、{{遺詔|いしょう}}を書き換えて{{扶蘇|ふそ}}と将軍{{蒙恬|もうてん}}に自害を命じ、末子{{胡亥|こがい}}を{{即位|そくい}}させた（{{沙丘|さきゅう}}の変）。",
      "{{扶蘇|ふそ}}は{{焚書坑儒|ふんしょこうじゅ}}を{{諫|いさ}}めたほど{{穏健|おんけん}}な人物で、北方の30万の軍を{{率|ひき}}いる{{蒙恬|もうてん}}と組んでいた。もし{{扶蘇|ふそ}}が{{即位|そくい}}していれば、{{秦|しん}}は政策を{{緩|ゆる}}めて生き{{延|の}}びたかもしれない。" +
        "{{秦|しん}}は、政策を改める{{機会|きかい}}と最強の将軍を、敵ではなく自らの手で失ったのである。",
    ],
  },
  {
    id: "riyu4",
    title: "趙高による政治の混乱",
    body: [
      "{{即位|そくい}}した{{二世皇帝|にせいこうてい}}{{胡亥|こがい}}は、{{帝位|ていい}}を{{脅|おびや}}かしかねない兄弟姉妹を{{次々|つぎつぎ}}に{{処刑|しょけい}}し、父の代からの重臣も遠ざけた。実権を{{握|にぎ}}った{{趙高|ちょうこう}}は、反乱の報告を{{握|にぎ}}りつぶし、ついには共謀者の{{李斯|りし}}まで{{処刑|しょけい}}させる。",
      "宮中で鹿を「馬です」と言って{{献上|けんじょう}}し、「鹿だ」と答えた臣下を{{陥|おとしい}}れた「{{指鹿為馬|しろくいば}}（鹿を指して馬と{{為|な}}す）」の話は、{{皇帝|こうてい}}に正しい情報が届かなくなった{{秦|しん}}の宮廷を{{象徴|しょうちょう}}している。" +
        "前207年、反乱軍が{{迫|せま}}ると{{趙高|ちょうこう}}は責任を{{逃|のが}}れるため{{胡亥|こがい}}を自害に追い込むが、自ら立てた{{子嬰|しえい}}に殺された。中央の{{判断力|はんだんりょく}}が失われたことで、反乱への対応は{{後手|ごて}}に回り続けた。",
    ],
  },
  {
    id: "riyu5",
    title: "陳勝・呉広の乱による反乱の拡大",
    body: [
      "前209年、北方の守備に送られる途中の農民{{陳勝|ちんしょう}}・{{呉広|ごこう}}は、大雨で期日に間に合わなくなり「遅れれば死罪、逃げても死罪。ならば挙兵して死ぬほうがましだ」と{{蜂起|ほうき}}した（『{{史記|しき}}』）。" +
        "「{{王侯将相|おうこうしょうしょう}}いずくんぞ種あらんや」の言葉で知られるこの反乱は、半年ほどで{{鎮圧|ちんあつ}}されたものの、{{項梁|こうりょう}}・{{項羽|こうう}}や{{劉邦|りゅうほう}}、旧六国の王族が{{次々|つぎつぎ}}に後に続いた。",
      "反乱がここまで広がったのは、{{滅|ほろ}}ぼされた六国の恨みが消えていなかったからだ。とくに{{楚|そ}}では「{{楚|そ}}は三戸になっても、{{秦|しん}}を{{滅|ほろ}}ぼすのは必ず{{楚|そ}}だ」と語り{{継|つ}}がれ、{{陳勝|ちんしょう}}は国号を「{{張楚|ちょうそ}}」とし、{{項羽|こうう}}も{{劉邦|りゅうほう}}も{{楚|そ}}の出身だった。" +
        "一方の{{秦|しん}}は、郡県制で地方に{{皇室|こうしつ}}を守る王族を置かず、精鋭は北の{{匈奴|きょうど}}と南の{{嶺南|れいなん}}に{{割|さ}}かれていた。{{驪山|りざん}}の刑徒を{{急遽|きゅうきょ}}兵にした{{章邯|しょうかん}}の軍が前207年の{{鉅鹿|きょろく}}の戦いで{{項羽|こうう}}に敗れると、{{秦|しん}}に{{関中|かんちゅう}}を守れる軍はほとんど残らなかった。",
    ],
  },
];

const COMPARISON = [
  { cause: "①厳しい法治と重税", kind: "土台", when: "統一直後から", who: "{{李斯|りし}}ら{{法家|ほうか}}の官僚", effect: "旧六国の民に不満がたまり、反乱の動機になった" },
  { cause: "②大規模土木事業", kind: "土台", when: "前215年ごろから", who: "{{始皇帝|しこうてい}}・{{胡亥|こがい}}", effect: "農村から働き手を奪い、暮らしを{{破綻|はたん}}させた" },
  { cause: "③急死と{{後継者|こうけいしゃ}}問題", kind: "転機", when: "前210年", who: "{{趙高|ちょうこう}}・{{李斯|りし}}・{{扶蘇|ふそ}}", effect: "政策を改める{{機会|きかい}}と名将{{蒙恬|もうてん}}を失った" },
  { cause: "④{{趙高|ちょうこう}}の専横", kind: "加速", when: "前210年-前207年", who: "{{趙高|ちょうこう}}・{{胡亥|こがい}}", effect: "宮廷が機能を失い、反乱への対応が遅れた" },
  { cause: "⑤{{陳勝|ちんしょう}}・{{呉広|ごこう}}の乱", kind: "引き金", when: "前209年から", who: "{{陳勝|ちんしょう}}・{{項羽|こうう}}・{{劉邦|りゅうほう}}", effect: "旧六国の反発と結びつき、全土に広がった" },
];

const KIND_COLOR = { 土台: COLORS.jade, 転機: COLORS.gold, 加速: COLORS.vermilionSoft, 引き金: COLORS.vermilion };

const CHRONOLOGY = [
  [221, "{{秦王政|しんおうせい}}が{{斉|せい}}を降して六国を{{滅|ほろ}}ぼし、中国を統一。「{{皇帝|こうてい}}」を名乗り{{始皇帝|しこうてい}}となる。全土に郡県制を{{敷|し}}き、{{度量衡|どりょうこう}}・文字・貨幣を統一。"],
  [218, "{{博浪沙|はくろうさ}}で、旧{{韓|かん}}の貴族{{張良|ちょうりょう}}が{{巡幸|じゅんこう}}中の{{始皇帝|しこうてい}}を{{襲|おそ}}うが失敗。旧六国の恨みが早くも表に出る。"],
  [215, "将軍{{蒙恬|もうてん}}が30万の兵で{{匈奴|きょうど}}を討ち、長城の修築を始める。南では{{嶺南|れいなん}}へ大軍を送り込む。"],
  [213, "{{焚書|ふんしょ}}。翌年には{{坑儒|こうじゅ}}。この{{頃|ころ}}、{{阿房宮|あぼうきゅう}}と{{驪山|りざん}}の{{陵墓|りょうぼ}}の工事に刑徒70万人あまりが動員される。"],
  [211, "東郡に落ちた{{隕石|いんせき}}に「{{始皇帝|しこうてい}}死して地分かれん」と{{刻|きざ}}まれる事件が起き、周辺の住民が{{処刑|しょけい}}される。"],
  [210, "{{始皇帝|しこうてい}}が{{巡幸|じゅんこう}}の途中、{{沙丘|さきゅう}}で急死。{{沙丘|さきゅう}}の変で{{扶蘇|ふそ}}と{{蒙恬|もうてん}}が自害させられ、末子{{胡亥|こがい}}が{{二世皇帝|にせいこうてい}}に。"],
  [209, "{{陳勝|ちんしょう}}・{{呉広|ごこう}}の乱。これを合図に旧六国の王族や{{項梁|こうりょう}}・{{項羽|こうう}}、{{劉邦|りゅうほう}}らが各地で挙兵する。"],
  [208, "{{秦|しん}}の将軍{{章邯|しょうかん}}が反乱軍を破り、{{項梁|こうりょう}}も戦死。一方で都では{{趙高|ちょうこう}}の{{讒言|ざんげん}}により{{李斯|りし}}が{{処刑|しょけい}}される。"],
  [207, "{{鉅鹿|きょろく}}の戦いで{{項羽|こうう}}が{{秦|しん}}軍主力を破り、{{章邯|しょうかん}}は{{降伏|こうふく}}。{{趙高|ちょうこう}}は{{胡亥|こがい}}を自害させて{{子嬰|しえい}}を立てるが、{{子嬰|しえい}}に殺される。"],
  [206, "{{劉邦|りゅうほう}}が{{関中|かんちゅう}}に入り、{{子嬰|しえい}}が{{降伏|こうふく}}して{{秦|しん}}は{{滅亡|めつぼう}}。遅れて入った{{項羽|こうう}}が{{子嬰|しえい}}を殺し、{{咸陽|かんよう}}を焼いた。"],
];

const FAQ = [
  {
    q: "{{秦|しん}}は何年で{{滅亡|めつぼう}}した？",
    a: "紀元前221年に中国を統一してから、前206年に{{滅亡|めつぼう}}するまでわずか15年です。諸侯の国としての{{秦|しん}}は{{周|しゅう}}の時代から数百年続いていましたが、統一王朝としては中国史上もっとも短命な部類に入ります。",
  },
  {
    q: "{{秦|しん}}が{{滅亡|めつぼう}}した一番の理由は？",
    a: "根本にあるのは、統一直後の{{疲|つか}}れた民に厳しい法と重い労役・税を休みなく課したことです。そこへ{{始皇帝|しこうてい}}の急死と{{趙高|ちょうこう}}による{{偽|にせ}}の{{後継|こうけい}}が重なり、政策を改める{{機会|きかい}}が失われたまま{{陳勝|ちんしょう}}・{{呉広|ごこう}}の乱を迎えました。",
  },
  {
    q: "{{秦|しん}}の最後の{{皇帝|こうてい}}は誰？",
    a: "{{皇帝|こうてい}}としては{{二世皇帝|にせいこうてい}}{{胡亥|こがい}}が最後です。その後に立った{{子嬰|しえい}}は、領土が{{縮|ちぢ}}んだことを理由に{{皇帝|こうてい}}ではなく「{{秦王|しんおう}}」を名乗り、在位46日で{{劉邦|りゅうほう}}に{{降伏|こうふく}}しました。",
  },
  {
    q: "{{秦|しん}}を{{滅|ほろ}}ぼしたのは{{劉邦|りゅうほう}}？{{項羽|こうう}}？",
    a: "{{秦王|しんおう}}{{子嬰|しえい}}の{{降伏|こうふく}}を受けたのは{{劉邦|りゅうほう}}です。ただし{{秦|しん}}軍の主力を{{鉅鹿|きょろく}}で{{壊滅|かいめつ}}させたのは{{項羽|こうう}}で、{{咸陽|かんよう}}に入った{{項羽|こうう}}が{{子嬰|しえい}}と{{秦|しん}}の王族を殺し、都を焼き{{払|はら}}ったことで{{秦|しん}}は完全に終わりました。",
  },
];

// 人物相関図。ルビを振れないSVGなので、本文で読みを示した人物だけを載せる
const NODE_W = 104;
const NODE_H = 48;
const BANDS = [
  { label: "皇帝と皇子", y: 12, h: 160, color: COLORS.vermilion },
  { label: "宮廷", y: 196, h: 80, color: COLORS.gold },
  { label: "反乱軍", y: 330, h: 104, color: COLORS.ink },
];
const NODES = [
  { name: "始皇帝", sub: "前210年に急死", x: 190, y: 56, band: 0 },
  { name: "扶蘇", sub: "長子・偽詔で自害", x: 70, y: 136, band: 0 },
  { name: "胡亥", sub: "二世皇帝・のち自害", x: 190, y: 136, band: 0 },
  { name: "子嬰", sub: "最後の秦王・降伏", x: 310, y: 136, band: 0 },
  { name: "李斯", sub: "丞相・法家", x: 90, y: 236, band: 1 },
  { name: "趙高", sub: "宦官・実権を独占", x: 290, y: 236, band: 1 },
  { name: "陳勝・呉広", sub: "最初の農民反乱", x: 65, y: 376, band: 2 },
  { name: "項羽", sub: "楚の名門・秦軍を撃破", x: 190, y: 376, band: 2 },
  { name: "劉邦", sub: "咸陽に入城→漢を建国", x: 315, y: 376, band: 2 },
];

function RelationDiagram() {
  const serif = "var(--font-serif), serif";
  const label = (x, y, text, anchor = "middle") => (
    <text x={x} y={y} textAnchor={anchor} fontSize={10} fill={COLORS.inkSoft} style={{ fontFamily: serif }}>
      {text}
    </text>
  );
  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox="0 0 380 444" role="img" aria-labelledby="qin-diagram-title" style={{ width: "100%", maxWidth: 440, display: "block", margin: "0 auto" }}>
        <title id="qin-diagram-title">
          始皇帝・扶蘇・胡亥・子嬰・李斯・趙高・陳勝・項羽・劉邦の人物相関図
        </title>
        <defs>
          <marker id="qin-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={COLORS.inkSoft} />
          </marker>
        </defs>

        {BANDS.map((b) => (
          <g key={b.label}>
            <rect x={4} y={b.y} width={372} height={b.h} fill="#FBF8F0" stroke="#DCD3B8" />
            <text x={12} y={b.y + 14} fontSize={10} fill={b.color} style={{ fontFamily: serif, letterSpacing: "0.1em" }}>
              {b.label}
            </text>
          </g>
        ))}

        <g stroke={COLORS.inkSoft} strokeWidth={1.2} fill="none">
          <line x1={150} y1={80} x2={92} y2={111} markerEnd="url(#qin-arrow)" />
          <line x1={190} y1={80} x2={190} y2={111} markerEnd="url(#qin-arrow)" />
          <line x1={142} y1={236} x2={238} y2={236} markerStart="url(#qin-arrow)" markerEnd="url(#qin-arrow)" />
          <line x1={262} y1={212} x2={212} y2={161} markerEnd="url(#qin-arrow)" />
          <line x1={318} y1={161} x2={312} y2={211} markerEnd="url(#qin-arrow)" />
          <line x1={117} y1={376} x2={137} y2={376} markerEnd="url(#qin-arrow)" />
          <line x1={190} y1={326} x2={190} y2={282} strokeWidth={2} stroke={COLORS.vermilion} markerEnd="url(#qin-arrow)" />
        </g>
        {label(116, 92, "長子", "end")}
        {label(196, 100, "末子", "start")}
        {label(190, 230, "遺詔を偽造")}
        {label(190, 250, "のち李斯を処刑")}
        {label(232, 190, "擁立して操る", "end")}
        {label(320, 192, "誅殺", "start")}
        <text x={190} y={300} textAnchor="middle" fontSize={10} fill={COLORS.vermilion} style={{ fontFamily: serif }}>
          <tspan x={110}>前209年から反乱が全土へ</tspan>
          <tspan x={275}>前206年 秦が滅亡</tspan>
        </text>
        {label(252, 424, "秦の滅亡後、項羽と劉邦は楚漢戦争で争う")}

        {NODES.map((n) => (
          <g key={n.name}>
            <rect
              x={n.x - NODE_W / 2}
              y={n.y - NODE_H / 2}
              width={NODE_W}
              height={NODE_H}
              fill="#fff"
              stroke={BANDS[n.band].color}
              strokeWidth={1.5}
            />
            <text x={n.x} y={n.y - 4} textAnchor="middle" fontSize={15} fontWeight={700} fill={COLORS.ink} style={{ fontFamily: serif }}>
              {n.name}
            </text>
            <text x={n.x} y={n.y + 15} textAnchor="middle" fontSize={9.5} fill={COLORS.inkSoft} style={{ fontFamily: serif }}>
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}

export default function QinFallPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: "ja",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PATH}` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "秦はなぜ滅亡したのか", item: `${SITE_URL}${PATH}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(articleJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(breadcrumbJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(faqJsonLd)) }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 6, lineHeight: 1.5 }}>
          <ruby>秦<rt>しん</rt></ruby>はなぜ<ruby>滅亡<rt>めつぼう</rt></ruby>したのか？
          <span style={{ display: "block", fontSize: 17, marginTop: 4 }}>わずか15年で滅びた5つの理由</span>
        </h1>
        <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "var(--font-serif), serif", marginBottom: 14 }}>
          統一：前221年　<ruby>滅亡<rt>めつぼう</rt></ruby>：前206年　都：<ruby>咸陽<rt>かんよう</rt></ruby>
        </div>

        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 20 }}>
          <RubyText
            text={
              "紀元前221年、{{始皇帝|しこうてい}}は500年以上続いた戦乱を終わらせ、中国をはじめて一つの国にまとめた。自らの子孫が「万世」にわたって{{皇帝|こうてい}}を{{継|つ}}ぐことを望んだが、" +
              "{{秦|しん}}は{{始皇帝|しこうてい}}の死からわずか4年、統一からは15年で{{滅|ほろ}}んでしまう。最強の軍隊と{{精密|せいみつ}}な法を持っていた帝国は、なぜこれほど早く崩れたのか。" +
              "その5つの理由を、年表・人物相関図・比較表とあわせて見ていく。"
            }
          />
        </p>

        <KeyFacts heading="{{秦|しん}}の{{滅亡|めつぼう}}を一言でいうと" items={KEY_FACTS} />

        <nav aria-label="目次" style={{ backgroundColor: "#FBF8F0", border: `1px solid #DCD3B8`, padding: "14px 18px", marginBottom: 32 }}>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 11, letterSpacing: "0.15em", color: COLORS.gold, marginBottom: 8 }}>目次</div>
          <ol className="grid gap-x-4 gap-y-1.5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", fontSize: 12.5 }}>
            {[
              ["kihon", "{{秦|しん}}王朝の基本情報と歴史"],
              ["soukan", "人物相関図"],
              ["riyu", "{{秦|しん}}が{{滅亡|めつぼう}}した5つの理由"],
              ["hikaku", "5つの理由の比較表"],
              ["nenpyo", "{{秦|しん}}{{滅亡|めつぼう}}までの年表"],
              ["moshi", "もし{{始皇帝|しこうてい}}が長生きしていたら？"],
              ["sonogo", "{{秦|しん}}の{{滅亡|めつぼう}}後、中国はどうなった？"],
              ["matome", "まとめ"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} style={linkStyle}>
                  <RubyText text={label} />
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section style={{ marginBottom: 36 }} id="kihon">
          <h2 style={h2Style}>
            <ruby>秦<rt>しん</rt></ruby>王朝の基本情報と歴史
          </h2>

          <h3 style={h3Style}>
            <ruby>始皇帝<rt>しこうてい</rt></ruby>による中国統一（紀元前221年）
          </h3>
          <p style={pStyle}>
            <RubyText
              text={
                "{{秦|しん}}は{{周|しゅう}}の時代から西方にあった諸侯の国で、戦国時代に{{商鞅|しょうおう}}の改革で力をつけた。{{秦王政|しんおうせい}}（のちの{{始皇帝|しこうてい}}）は前230年の{{韓|かん}}を皮切りに、" +
                "{{趙|ちょう}}・{{魏|ぎ}}・{{楚|そ}}・{{燕|えん}}と{{次々|つぎつぎ}}に{{滅|ほろ}}ぼし、前221年に最後の{{斉|せい}}を降して天下を統一した。王に代わる「{{皇帝|こうてい}}」の{{称号|しょうごう}}を作り、" +
                "全国を36の郡に分けて中央から役人を送る郡県制を{{敷|し}}き、{{度量衡|どりょうこう}}・文字・貨幣・車の{{幅|はば}}まで統一した。都は{{咸陽|かんよう}}（現在の{{陝西省|せんせいしょう}}西安市の北西）。"
              }
            />
          </p>

          <h3 style={{ ...h3Style, marginTop: 18 }}>
            <ruby>秦<rt>しん</rt></ruby>王朝の歴代皇帝
          </h3>
          <p style={pStyle}>統一後の<ruby>秦<rt>しん</rt></ruby>の君主はわずか3人。最後の<ruby>子嬰<rt>しえい</rt></ruby>は皇帝を名乗りませんでした。</p>
          <div className="flex flex-col gap-2" style={{ marginBottom: 10 }}>
            {EMPERORS.map((e, i) => (
              <div key={i} style={{ ...cardStyle, padding: "10px 14px" }}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={e.name} />
                  </span>
                  <span style={{ fontSize: 11.5, color: COLORS.gold }}>{e.reign}</span>
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 2 }}>
                  <RubyText text={e.note} />
                </p>
              </div>
            ))}
          </div>
          <a href="/emperors#qin" style={{ ...linkStyle, fontSize: 12 }}>
            歴代<ruby>皇帝<rt>こうてい</rt></ruby>一覧で見る →
          </a>

          <h3 style={{ ...h3Style, marginTop: 22 }}>
            <ruby>秦<rt>しん</rt></ruby>の<ruby>滅亡<rt>めつぼう</rt></ruby>（紀元前206年）
          </h3>
          <p style={pStyle}>
            <RubyText
              text={
                "前207年、{{趙高|ちょうこう}}を殺して{{秦王|しんおう}}となった{{子嬰|しえい}}のもとへ、{{項羽|こうう}}より先に{{関中|かんちゅう}}へ入った{{劉邦|りゅうほう}}が{{迫|せま}}る。{{子嬰|しえい}}は白い{{車|くるま}}に乗り、首に{{紐|ひも}}をかけ、{{皇帝|こうてい}}の{{印|いん}}を差し出して{{降伏|こうふく}}した。" +
                "これが前206年（漢の元年）で、{{秦|しん}}の{{滅亡|めつぼう}}とされる。その後{{咸陽|かんよう}}に入った{{項羽|こうう}}は{{子嬰|しえい}}と{{秦|しん}}の王族を殺し、宮殿に火を放った。"
              }
            />
          </p>
          {eventFall && (
            <a href={`/events/${eventFall.slug}`} style={{ ...linkStyle, fontSize: 12 }}>
              「<RubyText text={eventFall.title} />」を年表で読む →
            </a>
          )}
        </section>

        <section style={{ marginBottom: 36 }} id="soukan">
          <h2 style={h2Style}>人物相関図</h2>
          <p style={pStyle}>
            <ruby>秦<rt>しん</rt></ruby>の<ruby>滅亡<rt>めつぼう</rt></ruby>に関わった主な人物の関係です。<ruby>始皇帝<rt>しこうてい</rt></ruby>の死後、宮廷の<ruby>趙高<rt>ちょうこう</rt></ruby>が皇子たちの運命を左右し、外では反乱軍が<ruby>秦<rt>しん</rt></ruby>を追い詰めていきました。
          </p>
          <RelationDiagram />
        </section>

        <section style={{ marginBottom: 36 }} id="riyu">
          <h2 style={h2Style}>
            <ruby>秦<rt>しん</rt></ruby>が<ruby>滅亡<rt>めつぼう</rt></ruby>した5つの理由
          </h2>
          <p style={pStyle}>
            <ruby>秦<rt>しん</rt></ruby>の<ruby>滅亡<rt>めつぼう</rt></ruby>は一つの失敗ではなく、統一の時点から抱えていた無理（①②）に、<ruby>始皇帝<rt>しこうてい</rt></ruby>の死後の失策（③④）が重なり、反乱（⑤）がとどめを刺した結果でした。
          </p>
          <div className="flex flex-col gap-4">
            {REASONS.map((r, i) => (
              <div key={r.id} id={r.id} style={cardStyle}>
                <h3 className="flex items-baseline gap-2" style={h3Style}>
                  <span style={{ color: COLORS.vermilion }}>{"①②③④⑤"[i]}</span>
                  <RubyText text={r.title} />
                </h3>
                {r.body.map((t, j) => (
                  <p key={j} style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: j < r.body.length - 1 ? 8 : 0 }}>
                    <RubyText text={t} />
                  </p>
                ))}
              </div>
            ))}
          </div>
          {eventChenSheng && (
            <a href={`/events/${eventChenSheng.slug}`} style={{ ...linkStyle, display: "inline-block", fontSize: 12, marginTop: 12 }}>
              「<RubyText text={eventChenSheng.title} />」を年表で読む →
            </a>
          )}
        </section>

        <section style={{ marginBottom: 36 }} id="hikaku">
          <h2 style={h2Style}>5つの理由の比較表</h2>
          <p style={pStyle}>
            5つの理由を、<ruby>滅亡<rt>めつぼう</rt></ruby>の中で果たした役割で分けると「土台（長く続いた原因）→ 転機 → 加速 → 引き金」の流れになります。
          </p>
          <div style={{ overflowX: "auto", backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
            <table style={{ width: "100%", minWidth: 560, borderCollapse: "collapse", fontSize: 12, lineHeight: 1.6 }}>
              <thead>
                <tr>
                  <th style={thStyle}>理由</th>
                  <th style={thStyle}>役割</th>
                  <th style={thStyle}>時期</th>
                  <th style={thStyle}>主な人物</th>
                  <th style={thStyle}><ruby>滅亡<rt>めつぼう</rt></ruby>への影響</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.cause}>
                    <td style={{ ...tdStyle, fontWeight: 700, color: COLORS.ink, whiteSpace: "nowrap" }}>
                      <RubyText text={row.cause} />
                    </td>
                    <td style={{ ...tdStyle, whiteSpace: "nowrap" }}>
                      <span style={{ fontSize: 11, color: "#fff", backgroundColor: KIND_COLOR[row.kind], padding: "2px 7px" }}>{row.kind}</span>
                    </td>
                    <td style={{ ...tdStyle, whiteSpace: "nowrap" }}>{row.when}</td>
                    <td style={tdStyle}>
                      <RubyText text={row.who} />
                    </td>
                    <td style={tdStyle}>
                      <RubyText text={row.effect} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="nenpyo">
          <h2 style={h2Style}>
            <ruby>秦<rt>しん</rt></ruby><ruby>滅亡<rt>めつぼう</rt></ruby>までの年表
          </h2>
          <p style={pStyle}>
            統一から<ruby>滅亡<rt>めつぼう</rt></ruby>までの15年間です。前半の11年で不満がたまり、<ruby>始皇帝<rt>しこうてい</rt></ruby>の死（前210年）から後のわずか4年で一気に崩れたことがわかります。
          </p>
          <div className="flex flex-col gap-3">
            {CHRONOLOGY.map(([year, text]) => {
              const after = year >= 210 ? null : "after";
              return (
                <div key={year} className="flex gap-3">
                  <div className="shrink-0" style={{ width: 84, fontFamily: "var(--font-serif), serif", paddingTop: 1 }}>
                    <div style={{ fontSize: 12.5, color: COLORS.vermilion }}>前{year}年</div>
                    <div style={{ fontSize: 10.5, color: COLORS.gold }}>{year === 221 ? "統一" : `統一から${221 - year}年`}</div>
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      lineHeight: 1.75,
                      color: COLORS.inkSoft,
                      borderLeft: `2px solid ${after ? COLORS.vermilion : COLORS.mist}`,
                      paddingLeft: 12,
                    }}
                  >
                    <RubyText text={text} />
                  </div>
                </div>
              );
            })}
          </div>
          <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginTop: 10 }}>
            赤い線は<ruby>始皇帝<rt>しこうてい</rt></ruby>の死後の出来事です。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="moshi">
          <h2 style={h2Style}>
            もし<ruby>始皇帝<rt>しこうてい</rt></ruby>が長生きしていたら？
          </h2>
          <p style={pStyle}>
            <RubyText
              text={
                "歴史に「もしも」はないが、この問いは{{秦|しん}}の{{滅亡|めつぼう}}の原因を考えるうえで役に立つ。{{始皇帝|しこうてい}}が亡くなったのは50{{歳|さい}}。あと10年生きていたら、少なくとも③の{{後継者|こうけいしゃ}}問題と④の{{趙高|ちょうこう}}の{{専横|せんおう}}は起きなかった可能性が高い。" +
                "{{始皇帝|しこうてい}}自身が{{扶蘇|ふそ}}を正式な{{後継|こうけい}}に定め、{{蒙恬|もうてん}}の軍とともに{{帝位|ていい}}を{{継|つ}}がせることもできたはずだ。"
              }
            />
          </p>
          <p style={pStyle}>
            <RubyText
              text={
                "一方で、①の厳しい法治と重税、②の大規模な土木事業は、ほかならぬ{{始皇帝|しこうてい}}自身の政策だった。{{張良|ちょうりょう}}による暗殺未遂や「{{始皇帝|しこうてい}}死して地分かれん」の{{隕石|いんせき}}事件が示すように、不満は{{生前|せいぜん}}から{{表面化|ひょうめんか}}していた。" +
                "強い{{皇帝|こうてい}}が{{健在|けんざい}}なうちは反乱を{{抑|おさ}}え込めたとしても、政策を改めないまま代替わりを迎えれば、同じ道をたどったかもしれない。"
              }
            />
          </p>
          <p style={pStyle}>
            <RubyText
              text={
                "つまり{{秦|しん}}の運命を分けたのは、{{始皇帝|しこうてい}}の{{寿命|じゅみょう}}そのものより、「戦時のやり方を平時のやり方に切り替えられる{{後継者|こうけいしゃ}}にバトンを渡せたかどうか」だったと言える。" +
                "（この節は史料にもとづく推測です）"
              }
            />
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="sonogo">
          <h2 style={h2Style}>
            <ruby>秦<rt>しん</rt></ruby>の<ruby>滅亡<rt>めつぼう</rt></ruby>後、中国はどうなったのか？
          </h2>
          <h3 style={h3Style}>
            <ruby>項羽<rt>こうう</rt></ruby>と<ruby>劉邦<rt>りゅうほう</rt></ruby>の<ruby>楚漢<rt>そかん</rt></ruby>戦争（前206年-前202年）
          </h3>
          <p style={pStyle}>
            <RubyText
              text={
                "{{秦|しん}}を{{倒|たお}}した反乱軍の{{盟主|めいしゅ}}{{項羽|こうう}}は、自ら「西{{楚|そ}}の{{覇王|はおう}}」と名乗り、{{諸将|しょしょう}}を18の王に{{封|ほう}}じた。{{劉邦|りゅうほう}}は辺境の{{漢中|かんちゅう}}に{{押|お}}し込められて「漢王」となるが、" +
                "{{封|ほう}}じ方への不満から各地で戦いが再燃し、天下は再び{{項羽|こうう}}と{{劉邦|りゅうほう}}の争いに。前202年、{{垓下|がいか}}の戦いで「四面{{楚歌|そか}}」の状態に追い込まれた{{項羽|こうう}}は{{烏江|うこう}}で自害し、{{劉邦|りゅうほう}}が{{皇帝|こうてい}}に{{即位|そくい}}して漢王朝が始まった。"
              }
            />
          </p>
          <h3 style={{ ...h3Style, marginTop: 18 }}>
            漢は<ruby>秦<rt>しん</rt></ruby>の失敗から何を学んだか
          </h3>
          <p style={pStyle}>
            漢は<ruby>秦<rt>しん</rt></ruby>を反面教師にしながらも、その制度の多くを受け継ぎました。「漢は<ruby>秦<rt>しん</rt></ruby>の制度を<ruby>承<rt>う</rt></ruby>く」と言われるゆえんで、漢はその後約400年続きます。
          </p>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {[
              ["法三章", "{{咸陽|かんよう}}に入った{{劉邦|りゅうほう}}は{{秦|しん}}の{{煩雑|はんざつ}}な法を廃し、「人を殺した者は死刑、人を傷つけた者と{{盗|ぬす}}んだ者は{{罰|ばっ}}する」の3条だけを約束して民の心をつかんだ。（①への反省）"],
              ["休養と減税", "前漢の初めは{{黄老|こうろう}}思想にもとづく「無為の政治」で税を軽くし、民を休ませた。この{{蓄|たくわ}}えがのちの{{武帝|ぶてい}}の時代の{{繁栄|はんえい}}につながる。（①②への反省）"],
              ["郡国制", "都の周辺は郡県制で直接{{治|おさ}}め、地方には一族や功臣を王として{{封|ほう}}じた。中央が乱れても{{帝室|ていしつ}}を守る{{藩屏|はんぺい}}を置こうとした。（⑤への反省）"],
              ["受け継いだもの", "{{皇帝|こうてい}}の{{称号|しょうごう}}、郡県による地方支配、文字や{{度量衡|どりょうこう}}の統一など、{{秦|しん}}が作った国の骨組みは漢へ、さらにその後の王朝へと受け継がれた。"],
            ].map(([head, text]) => (
              <div key={head} style={cardStyle}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink, marginBottom: 4 }}>
                  <RubyText text={head} />
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft }}>
                  <RubyText text={text} />
                </p>
              </div>
            ))}
          </div>
          <a href="/chuhan-battles" style={{ ...linkStyle, display: "inline-block", fontSize: 12, marginTop: 12 }}>
            <ruby>楚漢<rt>そかん</rt></ruby>戦争の合戦マップを見る →
          </a>
        </section>

        <section style={{ marginBottom: 36 }} id="matome">
          <h2 style={h2Style}>まとめ</h2>
          <div style={cardStyle}>
            <ul className="flex flex-col gap-1.5" style={{ fontSize: 12.5, lineHeight: 1.75, color: COLORS.inkSoft }}>
              {[
                "{{秦|しん}}は前221年に中国を統一し、前206年に{{滅亡|めつぼう}}した。統一王朝としてはわずか15年",
                "①厳しい法治と重税、②大規模な土木事業が、旧六国の民に不満をためた（土台）",
                "③{{始皇帝|しこうてい}}の急死と{{偽|にせ}}の{{遺詔|いしょう}}で、{{穏健|おんけん}}な{{扶蘇|ふそ}}と名将{{蒙恬|もうてん}}が失われた（転機）",
                "④{{趙高|ちょうこう}}の{{専横|せんおう}}で宮廷が機能を失い、反乱への対応が遅れた（加速）",
                "⑤{{陳勝|ちんしょう}}・{{呉広|ごこう}}の乱が旧六国の反発と結びつき、全土に広がった（引き金）",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden style={{ color: COLORS.vermilion }}>・</span>
                  <span>
                    <RubyText text={t} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p style={{ ...pStyle, marginTop: 12 }}>
            <RubyText
              text={
                "前漢の学者{{賈誼|かぎ}}は『{{過秦論|かしんろん}}』で、{{秦|しん}}の{{滅亡|めつぼう}}の原因を「{{仁義|じんぎ}}施さずして、{{攻守|こうしゅ}}の勢い異なればなり」とまとめた。天下を取るときと守るときでは必要なものが違うのに、" +
                "{{秦|しん}}は統一後も戦時の{{厳|きび}}しいやり方を改めなかった、という意味だ。5つの理由はすべて、この「攻めから守りへの切り替えの失敗」に行き着く。"
              }
            />
          </p>
        </section>

        <section style={{ marginBottom: 32 }} id="faq">
          <h2 style={h2Style}>よくある質問</h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((f) => (
              <div key={f.q} style={cardStyle}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                  Q. <RubyText text={f.q} />
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft }}>
                  <RubyText text={f.a} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 28 }} id="dekigoto">
          <h2 style={h2Style}>
            <ruby>秦<rt>しん</rt></ruby>の<ruby>滅亡<rt>めつぼう</rt></ruby>に関係する出来事
          </h2>
          <div>
            {RELATED_EVENTS.map((ev) => (
              <EventListItem key={ev.slug} event={ev} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/qin" variant="solid"><ruby>秦<rt>しん</rt></ruby>の時代解説を見る</NavButton>
            <NavButton href="/qinshihuang" variant="outline"><ruby>始皇帝<rt>しこうてい</rt></ruby>とは</NavButton>
            <NavButton href="/chuhan-battles" variant="outline"><ruby>楚漢<rt>そかん</rt></ruby>戦争の合戦マップ</NavButton>
            <NavButton href="/eunuchs" variant="outline"><ruby>宦官<rt>かんがん</rt></ruby>とは</NavButton>
          </div>
        </section>

        <RelatedEraGuides path={PATH} eraIds={["westernhan"]} />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
