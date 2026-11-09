import { ERAS, stripRuby, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, EventListItem, MiscLinksSection, KeyFacts } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const PATH = "/qin-fall";
const title = "秦はなぜ滅亡したのか？わずか15年で滅びた理由";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "始皇帝が天下を統一した秦は、なぜわずか15年で滅亡したのか。重い労役と厳しい法、始皇帝の急死と沙丘の変、趙高の専横、陳勝・呉広の乱と旧六国の反発まで、滅亡の理由を年表とともに解説。漢が秦の失敗から何を学んだのか、出土史料による最新の見方も紹介します。";

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
const pStyle = { fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 };
const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 14 };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

const KEY_FACTS = [
  { q: "いつ{{滅|ほろ}}んだ？", a: "紀元前206年。{{秦王|しんおう}}{{子嬰|しえい}}が{{劉邦|りゅうほう}}に{{降伏|こうふく}}し、{{秦|しん}}は{{滅亡|めつぼう}}した。" },
  { q: "何年続いた？", a: "前221年の中国統一から数えてわずか15年。{{始皇帝|しこうてい}}の死からはたった4年で崩れた。" },
  { q: "誰が{{滅|ほろ}}ぼした？", a: "都{{咸陽|かんよう}}を最初に{{開城|かいじょう}}させたのは{{劉邦|りゅうほう}}。その後に入った{{項羽|こうう}}が{{子嬰|しえい}}を殺し、{{咸陽|かんよう}}を焼き{{払|はら}}った。" },
  { q: "主な理由", a: "①重い労役と税 ②厳しすぎる法 ③{{始皇帝|しこうてい}}の急死と{{後継|こうけい}}争い ④{{趙高|ちょうこう}}の{{専横|せんおう}} ⑤旧六国の反発 ⑥地方を守る{{藩屏|はんぺい}}の不在 ⑦主力軍が辺境に{{釘付|くぎづ}}け" },
];

const CHRONOLOGY = [
  ["前221年", "{{秦王政|しんおうせい}}が{{斉|せい}}を降して六国を{{滅|ほろ}}ぼし、中国を統一。「{{皇帝|こうてい}}」を名乗り{{始皇帝|しこうてい}}となる。全土に郡県制を{{敷|し}}く。"],
  ["前215年-前214年", "将軍{{蒙恬|もうてん}}が30万の兵で{{匈奴|きょうど}}を討ち、長城の修築を始める。南では{{嶺南|れいなん}}（現在の広東・広西）へ大軍を送り込む。"],
  ["前213年-前212年", "{{焚書|ふんしょ}}・{{坑儒|こうじゅ}}。同じ{{頃|ころ}}、{{阿房宮|あぼうきゅう}}と{{驪山|りざん}}の{{陵墓|りょうぼ}}の工事に、刑徒70万人あまりが動員されたと『{{史記|しき}}』は記す。"],
  ["前210年", "{{始皇帝|しこうてい}}が{{巡幸|じゅんこう}}の{{途中|とちゅう}}、{{沙丘|さきゅう}}で急死。{{趙高|ちょうこう}}・{{李斯|りし}}が{{遺詔|いしょう}}を{{偽造|ぎぞう}}し（{{沙丘|さきゅう}}の変）、長子{{扶蘇|ふそ}}と{{蒙恬|もうてん}}を自害させ、末子{{胡亥|こがい}}を{{二世皇帝|にせいこうてい}}に立てる。"],
  ["前209年", "{{陳勝|ちんしょう}}・{{呉広|ごこう}}の乱。これを合図に旧六国の王族や{{項梁|こうりょう}}・{{項羽|こうう}}、{{劉邦|りゅうほう}}らが各地で挙兵する。"],
  ["前208年", "{{秦|しん}}の将軍{{章邯|しょうかん}}が反乱軍を{{次々|つぎつぎ}}に破り、{{項梁|こうりょう}}も戦死。一方で都では{{趙高|ちょうこう}}の{{讒言|ざんげん}}により{{李斯|りし}}が{{処刑|しょけい}}される。"],
  ["前207年", "{{鉅鹿|きょろく}}の戦いで{{項羽|こうう}}が{{秦|しん}}軍主力を破り、{{章邯|しょうかん}}は{{降伏|こうふく}}。{{趙高|ちょうこう}}は{{胡亥|こがい}}を自害に追い込み{{子嬰|しえい}}を立てるが、{{子嬰|しえい}}はすぐに{{趙高|ちょうこう}}を殺す。"],
  ["前206年", "{{劉邦|りゅうほう}}が{{関中|かんちゅう}}に入り、{{子嬰|しえい}}が{{降伏|こうふく}}して{{秦|しん}}は{{滅亡|めつぼう}}。遅れて入った{{項羽|こうう}}は{{鴻門|こうもん}}の会ののち{{子嬰|しえい}}を殺し、{{咸陽|かんよう}}を焼いた。"],
  ["前202年", "{{楚漢|そかん}}戦争に勝った{{劉邦|りゅうほう}}が皇帝に{{即位|そくい}}し、漢王朝が天下を{{治|おさ}}める。"],
];

const REASONS = [
  {
    id: "rouyaku",
    title: "重い労役と税で民の生活が限界に",
    body: [
      "統一後の{{秦|しん}}は、北の長城、南の{{嶺南|れいなん}}遠征、{{阿房宮|あぼうきゅう}}と{{始皇帝陵|しこうていりょう}}の造営、全国を結ぶ{{馳道|ちどう}}（幹線道路）や運河の建設を、ほぼ同時に進めた。" +
        "当時の人口は2000万〜3000万人ほどと見られるが、そのうち数十万から百万人規模が{{常時|じょうじ}}どこかの工事や{{守備|しゅび}}に{{駆|か}}り出されていた計算になる。",
      "働き手を取られた農村では耕作が{{滞|とどこお}}り、そこへ重い税がのしかかった。前漢の思想家{{董仲舒|とうちゅうじょ}}は、{{秦|しん}}の民の負担は古代の30倍にのぼったと{{批判|ひはん}}している。" +
        "どれも国の{{基盤|きばん}}づくりとして意味のある事業だったが、{{戦国|せんごく}}の{{長|なが}}い戦乱で{{疲|つか}}れきった人々に、休む間を与えずに{{課|か}}したことが{{致命的|ちめいてき}}だった。",
    ],
  },
  {
    id: "hou",
    title: "厳しすぎる法と連帯責任",
    body: [
      "{{秦|しん}}は{{商鞅|しょうおう}}以来の{{法家|ほうか}}思想にもとづき、細かな法と厳しい{{罰|ばつ}}で国を動かした。隣近所に連帯責任を負わせる{{什伍|じゅうご}}の制度もあり、一人の罪が家族や近隣に及んだ。" +
        "戦国時代の{{秦|しん}}ではこの{{仕組|しく}}みが{{強|つよ}}い軍隊と{{効率|こうりつ}}のよい役所を生んだが、文化も習慣も違う旧六国の人々にまで同じ法を一気に{{押|お}}し付けたことで、強い反発を{{招|まね}}いた。",
      "『{{史記|しき}}』によれば、{{陳勝|ちんしょう}}・{{呉広|ごこう}}は大雨で{{集合|しゅうごう}}の期日に間に合わなくなり、「遅れれば死罪、逃げても死罪。ならば{{挙兵|きょへい}}して死ぬほうがましだ」と考えて反乱を起こした。" +
        "{{秦|しん}}の法そのものへの{{恐怖|きょうふ}}が、{{秦|しん}}を{{倒|たお}}す最初の火をつけたことになる（ただし後述のように、実際の{{秦|しん}}の法はこれほど{{一律|いちりつ}}に{{残酷|ざんこく}}ではなかったという見方もある）。",
    ],
  },
  {
    id: "kokei",
    title: "始皇帝の急死と、偽りの後継",
    body: [
      "{{始皇帝|しこうてい}}は不老不死を求めながらも、生前に正式な{{後継者|こうけいしゃ}}を定めないまま50{{歳|さい}}で急死した。{{巡幸|じゅんこう}}に同行していた{{宦官|かんがん}}{{趙高|ちょうこう}}と{{丞相|じょうしょう}}{{李斯|りし}}は、" +
        "人望のあった長子{{扶蘇|ふそ}}が{{即位|そくい}}すれば自分たちの立場が{{危|あや}}うくなると考え、{{遺詔|いしょう}}を{{書|か}}き{{換|か}}えて{{扶蘇|ふそ}}と将軍{{蒙恬|もうてん}}に自害を命じた。",
      "{{扶蘇|ふそ}}は{{焚書坑儒|ふんしょこうじゅ}}を{{諫|いさ}}めたほど{{穏健|おんけん}}な人物で、北方の30万の軍を{{率|ひき}}いる{{蒙恬|もうてん}}と組んでいた。もし{{扶蘇|ふそ}}が{{即位|そくい}}していれば、{{秦|しん}}は政策を{{緩|ゆる}}めて生き{{延|の}}びたかもしれない。" +
        "{{秦|しん}}は、{{有能|ゆうのう}}な{{後継者|こうけいしゃ}}と最強の将軍を、敵ではなく自らの{{手|て}}で失ったのである。",
    ],
  },
  {
    id: "chokou",
    title: "趙高の専横と二世皇帝の暴政",
    body: [
      "{{即位|そくい}}した{{二世皇帝|にせいこうてい}}{{胡亥|こがい}}は、{{帝位|ていい}}を{{脅|おびや}}かしかねない兄弟姉妹を{{次々|つぎつぎ}}に{{処刑|しょけい}}し、{{父|ちち}}の代からの重臣も遠ざけた。{{阿房宮|あぼうきゅう}}の工事も再開させ、負担は{{軽|かる}}くなるどころか重くなった。",
      "実権を{{握|にぎ}}った{{趙高|ちょうこう}}は、反乱の{{報告|ほうこく}}を{{握|にぎ}}りつぶし、ついには{{李斯|りし}}まで{{処刑|しょけい}}させる。宮中で鹿を「馬です」と言って{{献上|けんじょう}}し、「鹿だ」と答えた臣下を{{陥|おとしい}}れた「{{指鹿為馬|しろくいば}}（鹿を指して馬と{{為|な}}す）」の話は、" +
        "{{皇帝|こうてい}}に正しい情報が{{届|とど}}かなくなった{{秦|しん}}の宮廷を{{象徴|しょうちょう}}している。中央の{{判断力|はんだんりょく}}が{{失|うしな}}われたことで、反乱への対応は{{後手|ごて}}に回り続けた。",
    ],
  },
  {
    id: "rikkoku",
    title: "滅ぼされた旧六国の恨み",
    body: [
      "統一からわずか十数年では、{{韓|かん}}・{{趙|ちょう}}・{{魏|ぎ}}・{{楚|そ}}・{{燕|えん}}・{{斉|せい}}の人々にとって{{秦|しん}}は「自分たちの国」ではなく、{{故郷|こきょう}}を{{滅|ほろ}}ぼした{{征服者|せいふくしゃ}}のままだった。" +
        "とくに{{楚|そ}}では、{{懐王|かいおう}}が{{秦|しん}}に{{騙|だま}}されて客死した恨みが深く、「{{楚|そ}}は三戸になっても、{{秦|しん}}を{{滅|ほろ}}ぼすのは必ず{{楚|そ}}だ」という言葉が語り{{継|つ}}がれていた。",
      "{{陳勝|ちんしょう}}が国号を「{{張楚|ちょうそ}}（{{楚|そ}}を{{張|は}}る）」としたこと、{{楚|そ}}の名将の家に生まれた{{項羽|こうう}}が反乱の中心になったこと、{{劉邦|りゅうほう}}もまた{{楚|そ}}の出身であったことは、偶然ではない。" +
        "ひとたび火がつくと、各地で旧王族が{{次々|つぎつぎ}}と王を名乗り、反乱は「農民の一揆」から「六国の復活戦争」へと{{姿|すがた}}を変えた。",
    ],
  },
  {
    id: "gunken",
    title: "郡県制で地方を守る味方がいなかった",
    body: [
      "{{秦|しん}}は{{周|しゅう}}の封建制をやめ、全国を中央から{{派遣|はけん}}した役人が{{治|おさ}}める郡県制に切り替えた。統一の{{直後|ちょくご}}、{{博士|はかせ}}の{{淳于越|じゅんうえつ}}は「皇子や功臣を各地の王に{{封|ほう}}じて{{帝室|ていしつ}}を守らせるべきだ」と進言したが、" +
        "{{李斯|りし}}は「封建こそ戦乱のもと」と{{退|しりぞ}}け、この議論が{{焚書|ふんしょ}}のきっかけにもなった。",
      "郡県制は中央集権には向いていたが、中央が乱れると地方に{{皇室|こうしつ}}を助けに{{駆|か}}けつける{{一族|いちぞく}}がいない。反乱が起きると、役人は{{逃|に}}げるか反乱側に{{寝返|ねがえ}}り、{{秦|しん}}は各地で{{孤立|こりつ}}した。" +
        "のちに漢が郡県制と封建制を組み合わせた「郡国制」を採ったのは、この反省からである。",
    ],
  },
  {
    id: "gun",
    title: "主力軍が辺境に釘付けだった",
    body: [
      "反乱が起きたとき、{{秦|しん}}の精鋭は北の{{匈奴|きょうど}}への備えと、南の{{嶺南|れいなん}}の守りに{{割|さ}}かれていた。{{蒙恬|もうてん}}の死後も北方軍はすぐには動けず、南の軍を{{率|ひき}}いた{{趙佗|ちょうだ}}はついに中原へ戻らず、のちに南越国を建てて独立してしまう。",
      "{{都|みやこ}}の守りが手薄だったため、{{秦|しん}}は{{驪山|りざん}}の{{陵墓|りょうぼ}}で働いていた刑徒を{{急遽|きゅうきょ}}兵士にして{{章邯|しょうかん}}に{{率|ひき}}いさせた。{{章邯|しょうかん}}は一時は反乱軍を押し返したものの、" +
        "前207年の{{鉅鹿|きょろく}}の戦いで{{項羽|こうう}}に敗れて{{降伏|こうふく}}。これで{{秦|しん}}には、{{関中|かんちゅう}}を守れる軍がほとんど残らなかった。",
    ],
  },
];

const FAQ = [
  {
    q: "{{秦|しん}}は何年で{{滅亡|めつぼう}}した？",
    a: "紀元前221年に中国を統一してから、前206年に{{滅亡|めつぼう}}するまでわずか15年です。諸侯の国としての{{秦|しん}}は{{周|しゅう}}の時代から数百年続いていましたが、統一王朝としては中国史上もっとも短命な部類に入ります。",
  },
  {
    q: "{{秦|しん}}が{{滅亡|めつぼう}}した一番の理由は？",
    a: "一つに{{絞|しぼ}}るのは{{難|むずか}}しいものの、統一直後の{{疲|つか}}れた民に重い労役と厳しい法を休みなく課したことが根本にあり、{{始皇帝|しこうてい}}の急死と{{趙高|ちょうこう}}による{{偽|にせ}}の{{後継|こうけい}}が、それを{{修正|しゅうせい}}する{{機会|きかい}}を{{奪|うば}}ったと考えられています。",
  },
  {
    q: "{{秦|しん}}の最後の{{皇帝|こうてい}}は誰？",
    a: "{{皇帝|こうてい}}としては{{二世皇帝|にせいこうてい}}{{胡亥|こがい}}が最後です。その後に立った{{子嬰|しえい}}は、領土が{{縮|ちぢ}}んだことを理由に{{皇帝|こうてい}}ではなく「{{秦王|しんおう}}」を名乗り、即位から46日で{{劉邦|りゅうほう}}に{{降伏|こうふく}}しました。",
  },
  {
    q: "{{秦|しん}}を{{滅|ほろ}}ぼしたのは{{劉邦|りゅうほう}}？{{項羽|こうう}}？",
    a: "{{秦王|しんおう}}{{子嬰|しえい}}の{{降伏|こうふく}}を受けたのは{{劉邦|りゅうほう}}です。ただし{{秦|しん}}軍の主力を{{鉅鹿|きょろく}}で{{壊滅|かいめつ}}させたのは{{項羽|こうう}}で、{{咸陽|かんよう}}に入った{{項羽|こうう}}が{{子嬰|しえい}}と{{秦|しん}}の王族を殺し、都を焼き{{払|はら}}ったことで{{秦|しん}}は完全に終わりました。",
  },
];

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
          <span style={{ display: "block", fontSize: 17, marginTop: 4 }}>わずか15年で滅びた理由</span>
        </h1>
        <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "var(--font-serif), serif", marginBottom: 14 }}>
          統一：前221年　<ruby>滅亡<rt>めつぼう</rt></ruby>：前206年　都：<ruby>咸陽<rt>かんよう</rt></ruby>
        </div>

        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 20 }}>
          <RubyText
            text={
              "紀元前221年、{{始皇帝|しこうてい}}は500年以上続いた戦乱を終わらせ、中国をはじめて一つの国にまとめた。文字や{{度量衡|どりょうこう}}を統一し、郡県制で全土を中央から{{治|おさ}}める仕組みを作り、" +
              "自らの子孫が「万世」にわたって{{皇帝|こうてい}}を{{継|つ}}ぐことを望んだ。ところが{{秦|しん}}は、{{始皇帝|しこうてい}}の死からわずか4年、統一からは15年で{{滅|ほろ}}んでしまう。" +
              "最強の軍隊と{{精密|せいみつ}}な法を持っていた帝国は、なぜこれほど早く崩れたのか。その理由を、{{滅亡|めつぼう}}までの流れとあわせて見ていく。"
            }
          />
        </p>

        <KeyFacts heading="{{秦|しん}}の{{滅亡|めつぼう}}を一言でいうと" items={KEY_FACTS} />

        <nav aria-label="目次" style={{ backgroundColor: "#FBF8F0", border: `1px solid #DCD3B8`, padding: "14px 18px", marginBottom: 32 }}>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 11, letterSpacing: "0.15em", color: COLORS.gold, marginBottom: 8 }}>目次</div>
          <ol className="grid gap-x-4 gap-y-1.5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", fontSize: 12.5 }}>
            {[
              ["nenpyo", "{{滅亡|めつぼう}}までの年表"],
              ["riyu", "{{滅亡|めつぼう}}の7つの理由"],
              ["kashinron", "『{{過秦論|かしんろん}}』の答え"],
              ["kan", "漢は{{秦|しん}}から何を学んだか"],
              ["kenkyu", "出土史料が変えた「暴{{秦|しん}}」像"],
              ["faq", "よくある質問"],
              ["dekigoto", "関係する出来事"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} style={linkStyle}>
                  <RubyText text={label} />
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section style={{ marginBottom: 32 }} id="nenpyo">
          <h2 style={h2Style}>
            <ruby>滅亡<rt>めつぼう</rt></ruby>までの年表
          </h2>
          <p style={pStyle}>統一から漢の成立まで、<ruby>秦<rt>しん</rt></ruby>が崩れていった流れを年ごとにたどります。<ruby>始皇帝<rt>しこうてい</rt></ruby>の死（前210年）を境に、崩壊が一気に進んだことがわかります。</p>
          <div className="flex flex-col gap-3">
            {CHRONOLOGY.map(([year, text], i) => (
              <div key={i} className="flex gap-3">
                <div className="shrink-0" style={{ width: 108, fontFamily: "var(--font-serif), serif", fontSize: 12, color: COLORS.vermilion, paddingTop: 1 }}>
                  <RubyText text={year} />
                </div>
                <div style={{ fontSize: 12.5, lineHeight: 1.75, color: COLORS.inkSoft, borderLeft: `2px solid ${COLORS.mist}`, paddingLeft: 12 }}>
                  <RubyText text={text} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 32 }} id="riyu">
          <h2 style={h2Style}>
            <ruby>秦<rt>しん</rt></ruby>が<ruby>滅亡<rt>めつぼう</rt></ruby>した7つの理由
          </h2>
          <p style={pStyle}>
            <ruby>秦<rt>しん</rt></ruby>の<ruby>滅亡<rt>めつぼう</rt></ruby>は一つの失敗ではなく、統一の時点から抱えていた無理と、<ruby>始皇帝<rt>しこうてい</rt></ruby>の死後に重なった不運や失策が組み合わさった結果でした。
          </p>
          <div className="flex flex-col gap-4">
            {REASONS.map((r, i) => (
              <div key={r.id} id={r.id} style={cardStyle}>
                <h3 className="flex items-baseline gap-2" style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 8 }}>
                  <span style={{ color: COLORS.vermilion, fontSize: 13 }}>理由{i + 1}</span>
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

        <section style={{ marginBottom: 32 }} id="kashinron">
          <h2 style={h2Style}>
            『<ruby>過秦論<rt>かしんろん</rt></ruby>』の答え ― 攻めと守りは違う
          </h2>
          <p style={pStyle}>
            <RubyText
              text={
                "「{{秦|しん}}はなぜ{{滅|ほろ}}んだのか」という問いは、漢の時代から{{繰|く}}り返し論じられてきた。もっとも有名なのが、前漢初めの若き学者{{賈誼|かぎ}}が書いた『{{過秦論|かしんろん}}』（{{秦|しん}}の{{過|あやま}}ちを論ず）である。" +
                "{{賈誼|かぎ}}は、六国を{{滅|ほろ}}ぼすほど強大だった{{秦|しん}}が、身分も武器も{{乏|とぼ}}しい{{陳勝|ちんしょう}}の反乱をきっかけに{{崩|くず}}れたことの{{不思議|ふしぎ}}を問い、"
              }
            />
            その原因を「<ruby>仁義<rt>じんぎ</rt></ruby>施さずして、<ruby>攻守<rt>こうしゅ</rt></ruby>の勢い異なればなり」とまとめました。
          </p>
          <p style={pStyle}>
            <RubyText
              text={
                "天下を「取る」ときには力と法による{{強引|ごういん}}さが役に立つが、天下を「守る」ときには民を{{休|やす}}ませ、{{心|こころ}}をつかむことが必要になる。{{秦|しん}}は統一したあとも、戦時の{{厳|きび}}しいやり方を{{改|あらた}}めなかった、という{{指摘|してき}}である。" +
                "上で見た7つの理由も、ほとんどがこの「{{攻|せ}}めから守りへの切り替えに失敗した」という一点に集約できる。"
              }
            />
          </p>
        </section>

        <section style={{ marginBottom: 32 }} id="kan">
          <h2 style={h2Style}>
            漢は<ruby>秦<rt>しん</rt></ruby>から何を学んだか
          </h2>
          <p style={pStyle}>
            <ruby>秦<rt>しん</rt></ruby>を倒した<ruby>劉邦<rt>りゅうほう</rt></ruby>の漢は、<ruby>秦<rt>しん</rt></ruby>の失敗を反面教師にしながらも、その制度の多くをそのまま受け継ぎました。「漢は<ruby>秦<rt>しん</rt></ruby>の制度を<ruby>承<rt>う</rt></ruby>く」と言われるゆえんです。
          </p>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {[
              ["法三章", "{{咸陽|かんよう}}に入った{{劉邦|りゅうほう}}は、{{秦|しん}}の{{煩雑|はんざつ}}な法を廃し「人を殺した者は死刑、人を傷つけた者と{{盗|ぬす}}んだ者は{{罰|ばっ}}する」の3条だけを約束して、民の心をつかんだ。"],
              ["郡国制", "都の周辺は郡県制で直接{{治|おさ}}め、地方には一族や功臣を王として{{封|ほう}}じる。中央が乱れても{{帝室|ていしつ}}を守る{{藩屏|はんぺい}}を置こうとした。"],
              ["休養と減税", "前漢の初めは{{黄老|こうろう}}思想にもとづく「無為の政治」を{{掲|かか}}げ、税を{{軽|かる}}くして民を{{休|やす}}ませた。この{{蓄|たくわ}}えがのちの{{武帝|ぶてい}}の時代の繁栄につながる。"],
              ["受け継いだもの", "{{皇帝|こうてい}}の{{称号|しょうごう}}、郡県による地方支配、文字や{{度量衡|どりょうこう}}の統一、役人の仕組みなど、{{秦|しん}}が作った国の骨組みはそのまま漢へ、さらにその後の王朝へと受け継がれた。"],
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
        </section>

        <section style={{ marginBottom: 32 }} id="kenkyu">
          <h2 style={h2Style}>
            出土史料が変えた「暴<ruby>秦<rt>しん</rt></ruby>」像
          </h2>
          <p style={pStyle}>
            <RubyText
              text={
                "{{秦|しん}}の歴史の多くは、{{秦|しん}}を{{倒|たお}}した漢の時代に書かれた『{{史記|しき}}』などに{{頼|たよ}}っている。そのため「{{秦|しん}}は残酷な暴政で{{滅|ほろ}}んだ」という見方には、新しい王朝が自らの正しさを示すための{{誇張|こちょう}}も{{含|ふく}}まれている可能性がある。"
              }
            />
          </p>
          <p style={pStyle}>
            <RubyText
              text={
                "1975年に湖北省で見つかった{{睡虎地秦簡|すいこちしんかん}}や、2002年に湖南省で見つかった{{里耶秦簡|りやしんかん}}には、{{秦|しん}}の役所が実際に使っていた法律や文書が大量に残っていた。" +
                "それによると、労役の集合に数日遅れた場合の{{罰|ばつ}}は{{叱責|しっせき}}や{{罰金|ばっきん}}程度で、雨で遅れた場合は{{免除|めんじょ}}される規定もあった。{{陳勝|ちんしょう}}・{{呉広|ごこう}}の「遅れれば死罪」という話は、少なくとも法の{{条文|じょうぶん}}とは{{食|く}}い{{違|ちが}}うのである。"
              }
            />
          </p>
          <p style={pStyle}>
            <RubyText
              text={
                "同じように、{{項羽|こうう}}が焼いて「火が三か月消えなかった」と伝わる{{阿房宮|あぼうきゅう}}も、発掘では基壇から大規模な{{焼|や}}け{{跡|あと}}が見つからず、そもそも完成していなかったと考えられている。" +
                "近年の研究では、{{秦|しん}}の法は細かく{{合理的|ごうりてき}}だった一方、その法を新しく{{支配|しはい}}した旧六国の地にまで{{杓子定規|しゃくしじょうぎ}}に当てはめ、膨大な労役を{{課|か}}したことが反発を生んだ、という見方が強まっている。" +
                "「残酷だったから{{滅|ほろ}}んだ」というより、「{{性急|せいきゅう}}すぎたから{{滅|ほろ}}んだ」と言うほうが実像に近いのかもしれない。"
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
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            <ruby>始皇帝<rt>しこうてい</rt></ruby>の生涯や、<ruby>秦<rt>しん</rt></ruby>の<ruby>滅亡<rt>めつぼう</rt></ruby>後に続く<ruby>項羽<rt>こうう</rt></ruby>と<ruby>劉邦<rt>りゅうほう</rt></ruby>の戦いは、別の記事でも詳しく紹介しています。
          </p>
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
