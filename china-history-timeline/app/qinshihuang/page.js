import { ERAS, stripRuby, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageGrid, EventListItem, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const title = "始皇帝とは？生涯・中国統一・兵馬俑まで徹底解説";
const fullTitle = `始皇帝とは？生涯・中国統一・兵馬俑まで徹底解説 | ${SITE_NAME}`;
const description =
  "中国史上はじめて天下を統一し「皇帝」を名乗った始皇帝。その生涯から中国統一の経緯、郡県制や法家思想に基づく秦の政治、万里の長城・始皇帝陵・兵馬俑、暴君と呼ばれる所以、死因の謎、秦の滅亡まで、始皇帝についてまとめて解説します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/qinshihuang" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/qinshihuang", type: "article" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const zhanguoEra = ERAS.find((e) => e.id === "zhanguo");
const qinEra = ERAS.find((e) => e.id === "qin");

const eventUnificationZhanguo = zhanguoEra?.events.find((ev) => stripRuby(ev.title).includes("戦国の終結"));
const eventUnification = qinEra?.events.find((ev) => stripRuby(ev.title).includes("中国統一"));
const eventCounties = qinEra?.events.find((ev) => stripRuby(ev.title).includes("郡県制"));
const eventGreatWall = qinEra?.events.find((ev) => stripRuby(ev.title).includes("万里の長城"));
const eventBurning = qinEra?.events.find((ev) => stripRuby(ev.title).includes("焚書坑儒"));
const eventChenSheng = qinEra?.events.find((ev) => stripRuby(ev.title).includes("陳勝"));
const eventFall = qinEra?.events.find((ev) => stripRuby(ev.title).includes("秦の滅亡"));

const RELATED_EVENTS = [eventUnificationZhanguo, eventUnification, eventCounties, eventGreatWall, eventBurning, eventChenSheng, eventFall].filter(
  Boolean
);

const heritageItems = eventUnification?.heritage?.filter((h) => ["{{兵馬俑|へいばよう}}", "{{秦始皇陵|しんしこうていりょう}}"].some((k) => stripRuby(h.name).includes(k))) || [];

// 項羽・劉邦は年表側に伝記(bio)付きの人物データがあるためHeritageGridで写真付きカードとして表示し、
// それ以外(呂不韋・李斯・蒙恬・扶蘇・胡亥・趙高)は年表側に個別の人物データが無いためテキストカードで紹介する。
// 項羽はqin era、劉邦はwesternhan eraに人物データがあるため、eraIdが異なる2件を別々に保持する。
const westernhanEra = ERAS.find((e) => e.id === "westernhan");
const xiangYuFigure = qinEra?.events
  .flatMap((ev) => ev.heritage || [])
  .find((h) => h.type === "figure" && stripRuby(h.name).includes("項羽"));
const liuBangFigure = westernhanEra?.events
  .flatMap((ev) => ev.heritage || [])
  .find((h) => h.type === "figure" && stripRuby(h.name).includes("劉邦"));

const RELATED_PEOPLE = [
  {
    name: "{{呂不韋|りょふい}}",
    role: "{{丞相|じょうしょう}}・後見人",
    text: "元は大商人。人質だった{{始皇帝|しこうてい}}の父を{{秦|しん}}に帰国・{{即位|そくい}}させた黒幕とされ、幼くして{{即位|そくい}}した{{始皇帝|しこうてい}}の後見として長らく実権を{{握|にぎ}}った。{{始皇帝|しこうてい}}の親政開始後に{{失脚|しっきゃく}}し、自ら命を絶った。",
  },
  {
    name: "{{李斯|りし}}",
    role: "{{丞相|じょうしょう}}・法家",
    text: "法家思想を実務に落とし{{込|こ}}んだ{{始皇帝|しこうてい}}の腹心。郡県制の導入や{{度量衡|どりょうこう}}・文字の統一、{{焚書坑儒|ふんしょこうじゅ}}を推し進めた中心人物だが、{{始皇帝|しこうてい}}の死後は{{趙高|ちょうこう}}に取り{{込|こ}}まれ、最後は{{趙高|ちょうこう}}の{{讒言|ざんげん}}により{{処刑|しょけい}}された。",
  },
  {
    name: "{{蒙恬|もうてん}}",
    role: "将軍",
    text: "北方の{{匈奴|きょうど}}を討って万里の長城の修築を指揮した{{秦|しん}}の名将。{{始皇帝|しこうてい}}の死後、{{偽|にせ}}の{{遺詔|いしょう}}により自害を強いられ、長城建設の労苦を思い「天に対して罪がある」と{{嘆|なげ}}いたと伝えられる。",
  },
  {
    name: "{{扶蘇|ふそ}}",
    role: "長子",
    text: "{{始皇帝|しこうてい}}の長男で、{{焚書坑儒|ふんしょこうじゅ}}を{{諫|いさ}}めたとされる温厚な人物。本来の{{後継|こうけい}}候補だったが、{{始皇帝|しこうてい}}の死後に{{趙高|ちょうこう}}・{{李斯|りし}}が仕組んだ{{偽|にせ}}の{{遺詔|いしょう}}により自害を命じられ、弟の{{胡亥|こがい}}に{{帝位|ていい}}を{{奪|うば}}われた。",
  },
  {
    name: "{{胡亥|こがい}}",
    role: "{{二世皇帝|にせいこうてい}}",
    text: "{{始皇帝|しこうてい}}の末子。{{趙高|ちょうこう}}の{{擁立|ようりつ}}で{{即位|そくい}}すると{{趙高|ちょうこう}}の{{傀儡|かいらい}}と化し、重税と圧政を続けた末、各地の反乱の責任を問われる形で{{趙高|ちょうこう}}に自害へ追い{{込|こ}}まれた。",
  },
  {
    name: "{{趙高|ちょうこう}}",
    role: "{{宦官|かんがん}}",
    text: "{{始皇帝|しこうてい}}の死に際して{{李斯|りし}}と{{共謀|きょうぼう}}し{{遺詔|いしょう}}を{{偽造|ぎぞう}}した張本人。{{胡亥|こがい}}{{擁立後|ようりつご}}は権力を{{恣|ほしいまま}}にし、鹿を馬と言い張って群臣の忠誠を試した「{{指鹿為馬|しろくいば}}」の故事でも知られる。最後は自らが{{擁立|ようりつ}}した{{子嬰|しえい}}に{{誅殺|ちゅうさつ}}された。",
  },
];

export default function QinShiHuangPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "始皇帝",
    alternateName: ["秦始皇", "嬴政", "秦王政"],
    description: stripRuby(description),
    birthDate: "-0259",
    deathDate: "-0210",
    ...(heritageItems[1]?.imageUrl ? { image: heritageItems[1].imageUrl } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/qinshihuang` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "{{始皇帝|しこうてい}}とは", item: `${SITE_URL}/qinshihuang` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "始皇帝は何をした人？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "紀元前221年に韓・趙・魏・楚・燕・斉の六国を滅ぼして中国史上初めて天下を統一し、「皇帝」の称号を創始した秦の王。度量衡・文字・貨幣の統一、郡県制による中央集権体制の確立、万里の長城の修築などを行い、以後2000年以上続く中国の統治体制の原型を作った。",
        },
      },
      {
        "@type": "Question",
        name: "始皇帝はなぜ暴君と言われるのか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "儒家の書物などを焼き学者を生き埋めにしたとされる焚書坑儒による思想統制、万里の長城・阿房宮・自身の陵墓建設に大量の民衆を過酷な労役に動員したことなどが理由。ただし統一後の統治体制そのものは後世の王朝に受け継がれており、評価は分かれている。",
        },
      },
      {
        "@type": "Question",
        name: "始皇帝の死因は何か？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "正史『史記』は前210年、5度目の巡幸中に沙丘で病没したと記すのみで死因は明記していない。不老不死を求めて水銀を含む仙薬を服用し続けた中毒死説が有力視されているが、過労や持病による病死説もあり確定していない。",
        },
      },
    ],
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(personJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(breadcrumbJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(faqJsonLd)) }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 6 }}>
          <ruby>始皇帝<rt>しこうてい</rt></ruby>とは？
        </h1>
        <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "var(--font-serif), serif", marginBottom: 14 }}>
          前259年 – 前210年　<ruby>秦王<rt>しんおう</rt></ruby>：前247年-前221年　皇帝：前221年-前210年
        </div>

        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }} id="towa">
          <RubyText
            text={
              "{{始皇帝|しこうてい}}は、紀元前221年に中国史上はじめて天下を統一し、王に代わる「{{皇帝|こうてい}}」という{{称号|しょうごう}}を自ら創始した人物である。" +
              "{{姓|せい}}は{{嬴|えい}}、{{諱|いみな}}（いみな）は{{政|せい}}といい、{{秦王|しんおう}}として{{即位|そくい}}した当初は{{秦王政|しんおうせい}}と呼ばれた。" +
              "統一後は「最初の{{皇帝|こうてい}}」を意味する「{{始皇帝|しこうてい}}」を{{自称|じしょう}}し、子孫が二世・三世と{{皇帝|こうてい}}の位を万世にわたって{{継承|けいしょう}}していくことを望んだ。" +
              "{{度量衡|どりょうこう}}・{{貨幣|かへい}}・文字の統一、郡県制による中央集権体制、万里の長城の修築など、その治世に定めた統治の骨格は、" +
              "以後2000年以上続く中国の国家運営の原型となった。一方で{{焚書坑儒|ふんしょこうじゅ}}に代表される{{過酷|かこく}}な思想統制や、" +
              "長城・{{陵墓|りょうぼ}}建設のための{{苛烈|かれつ}}な労役から「暴君」とも評され、中国史上もっとも評価の分かれる{{皇帝|こうてい}}の一人とされる。"
            }
          />
        </p>

        <nav
          aria-label="目次"
          style={{ backgroundColor: "#FBF8F0", border: `1px solid #DCD3B8`, padding: "14px 18px", marginBottom: 32 }}
        >
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 11, letterSpacing: "0.15em", color: COLORS.gold, marginBottom: 8 }}>
            目次
          </div>
          <ol className="grid gap-x-4 gap-y-1.5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", fontSize: 12.5 }}>
            {[
              ["towa", "{{始皇帝|しこうてい}}とは"],
              ["shogai", "{{始皇帝|しこうてい}}の{{生涯|しょうがい}}"],
              ["touitsu", "中国統一"],
              ["seiji", "{{秦|しん}}の政治"],
              ["houka", "法家思想"],
              ["chojo", "万里の長城"],
              ["ryo", "{{始皇帝陵|しこうていりょう}}"],
              ["heibayou", "{{兵馬俑|へいばよう}}"],
              ["shi", "{{始皇帝|しこうてい}}の死"],
              ["metsubou", "{{秦|しん}}の{{滅亡|めつぼう}}"],
              ["jinbutsu", "{{始皇帝|しこうてい}}に関係する人物"],
              ["dekigoto", "{{始皇帝|しこうてい}}に関係する出来事"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                  <RubyText text={label} />
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section style={{ marginBottom: 32 }} id="shogai">
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 14 }}>
            <ruby>始皇帝<rt>しこうてい</rt></ruby>の生涯
          </h2>
          <div className="flex flex-col gap-3">
            {[
              [
                "前259年",
                "{{趙|ちょう}}の都{{邯鄲|かんたん}}で誕生。父は人質として{{趙|ちょう}}に送られていた{{秦|しん}}の公子{{異人|いじん}}（後の{{荘襄王|そうじょうおう}}）、母は{{趙姫|ちょうき}}。大商人{{呂不韋|りょふい}}の画策で父が{{秦|しん}}に帰国・{{即位|そくい}}したことで、政も{{秦|しん}}の太子となった。",
              ],
              ["前247年", "父{{荘襄王|そうじょうおう}}の死により、わずか13{{歳|さい}}で{{秦王|しんおう}}に{{即位|そくい}}。若年のため{{丞相|じょうしょう}}{{呂不韋|りょふい}}が後見し、国政を代行した。"],
              [
                "前238年",
                "22{{歳|さい}}で親政を開始。母の愛人であった{{嫪毐|ろうあい}}が反乱を起こすとこれを{{鎮圧|ちんあつ}}し、翌年には後見役だった{{呂不韋|りょふい}}も{{失脚|しっきゃく}}に追い{{込|こ}}んで実権を完全に{{掌握|しょうあく}}した。",
              ],
              ["前230年-前221年", "{{李斯|りし}}ら法家の臣を重用し、将軍{{王翦|おうせん}}らを{{派遣|はけん}}して{{韓|かん}}・{{趙|ちょう}}・{{魏|ぎ}}・{{楚|そ}}・{{燕|えん}}・{{斉|せい}}の六国を次々に{{滅|ほろ}}ぼした。"],
              ["前221年", "最後まで{{抵抗|ていこう}}した{{斉|せい}}を降し、中国史上初の統一を達成。「{{皇帝|こうてい}}」の{{称号|しょうごう}}を創始し、自ら{{始皇帝|しこうてい}}と号した。"],
              [
                "前220年-前211年",
                "{{度量衡|どりょうこう}}・文字・{{貨幣|かへい}}の統一、郡県制の{{施行|しこう}}、万里の長城・{{阿房宮|あぼうきゅう}}・自身の{{陵墓|りょうぼ}}の造営を進め、全土を{{巡幸|じゅんこう}}。前213年には{{焚書|ふんしょ}}、翌年には{{坑儒|こうじゅ}}を断行した。",
              ],
              ["前210年", "5度目の{{巡幸|じゅんこう}}の{{途上|とじょう}}、河北の{{沙丘|さきゅう}}で急死。{{享年|きょうねん}}50。"],
            ].map(([year, text], i) => (
              <div key={i} className="flex gap-3">
                <div
                  className="shrink-0"
                  style={{ width: 108, fontFamily: "var(--font-serif), serif", fontSize: 12, color: COLORS.vermilion, paddingTop: 1 }}
                >
                  <RubyText text={year} />
                </div>
                <div style={{ fontSize: 12.5, lineHeight: 1.75, color: COLORS.inkSoft, borderLeft: `2px solid ${COLORS.mist}`, paddingLeft: 12 }}>
                  <RubyText text={text} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 28 }} id="touitsu">
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            中国統一
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "{{秦|しん}}は長年にわたる{{合従連衡|がっしょうれんこう}}の外交戦を経て着実に国力を{{蓄|たくわ}}え、前260年の{{長平の戦い|ちょうへいのたたかい}}で" +
                "最大の{{対抗馬|たいこうば}}であった{{趙|ちょう}}に{{壊滅的|かいめつてき}}な{{打撃|だげき}}を{{与|あた}}えたことで、統一への道が決定的なものとなった。{{始皇帝|しこうてい}}は{{李斯|りし}}ら法家の臣を用いて" +
                "富国強兵をさらに推し進めると、{{韓|かん}}（前230年）・{{趙|ちょう}}（前228年）・{{魏|ぎ}}（前225年）・{{楚|そ}}（前223年）・{{燕|えん}}（前222年）・{{斉|せい}}（前221年）の" +
                "順に六国を次々と{{滅|ほろ}}ぼし、前221年、中国史上初めて単一の権力のもとに広大な領域をまとめ上げた。従来の「王」では" +
                "もはや自らの{{偉業|いぎょう}}を表すのにふさわしくないとして、伝説上の{{三皇五帝|さんこうごてい}}を{{超|こ}}える{{権威|けんい}}を示すべく「{{皇帝|こうてい}}」という新たな{{称号|しょうごう}}を創始し、" +
                "自らを最初の{{皇帝|こうてい}}を意味する{{始皇帝|しこうてい}}と号した。この統一は、前403年の{{三家分晋|さんかぶんしん}}の公認から数えて約180年、前770年の平王{{東遷|とうせん}}から" +
                "数えるとおよそ550年に{{及|およ}}んだ{{分裂|ぶんれつ}}と{{抗争|こうそう}}の時代についに{{終止符|しゅうしふ}}を打つ画期的な出来事であった。"
              }
            />
          </p>
          {eventUnificationZhanguo && (
            <a
              href={`/events/${eventUnificationZhanguo.slug}`}
              style={{ display: "inline-block", fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, marginTop: 10 }}
            >
              「<RubyText text={eventUnificationZhanguo.title} />」を年表で読む →
            </a>
          )}
        </section>

        <section style={{ marginBottom: 28 }} id="seiji">
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            <ruby>秦<rt>しん</rt></ruby>の政治
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText
              text={
                "統一後の{{始皇帝|しこうてい}}は、周代以来の{{血縁|けつえん}}を{{基盤|きばん}}とした{{封建制|ほうけんせい}}（{{分封制|ぶんぽうせい}}）を{{廃止|はいし}}し、全国を36（後に40余り）の郡に分け、" +
                "その下に県を置く{{郡県制|ぐんけんせい}}を導入した。郡には{{皇帝|こうてい}}が{{任免|にんめん}}する{{官僚|かんりょう}}が置かれて{{世襲|せしゅう}}は認められず、" +
                "地方勢力が独自の軍事力を{{蓄|たくわ}}えて中央に反旗を{{翻|ひるがえ}}す危険を未然に防ぐ{{狙|ねら}}いがあった。あわせて{{度量衡|どりょうこう}}・{{貨幣|かへい}}（{{半両銭|はんりょうせん}}）・" +
                "文字（{{小篆|しょうてん}}）に加え、{{車軌|しゃき}}（車輪の{{幅|はば}}）まで規格を統一し、{{分裂|ぶんれつ}}していた社会{{基盤|きばん}}を{{隅々|すみずみ}}まで均質化する政策を" +
                "{{矢継|やつ}}ぎ早に打ち出した。"
              }
            />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "こうした中央集権体制は、{{皇帝|こうてい}}の命令一つで全土を統治する仕組みとして、以後2000年余り続く中国的統治システムの原型となった。" +
                "その一方で、都{{咸陽|かんよう}}{{近郊|きんこう}}に築かせた{{壮麗|そうれい}}な{{宮殿|きゅうでん}}{{阿房宮|あぼうきゅう}}や、全国を結ぶ幹線道路「{{馳道|ちどう}}」の整備など、" +
                "大規模事業を次々と推し進めたことは民の負担を増大させ、後の{{秦|しん}}{{滅亡|めつぼう}}の遠因ともなった。"
              }
            />
          </p>
        </section>

        <section style={{ marginBottom: 28 }} id="houka">
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            法家思想
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText
              text={
                "{{秦|しん}}は元来、戦国中期の{{商鞅|しょうおう}}による変法以来、法治と{{信賞必罰|しんしょうひつばつ}}を{{徹底|てってい}}する{{法家|ほうか}}思想を{{国是|こくぜ}}としてきた国であり、" +
                "{{始皇帝|しこうてい}}もこれを引き{{継|つ}}いで{{丞相|じょうしょう}}{{李斯|りし}}に統治の実務を担わせた。法家は、{{血縁|けつえん}}や身分ではなく明文化された法と厳格な{{賞罰|しょうばつ}}のみに" +
                "基づいて国を治めるべきだと説き、{{儒家|じゅか}}が重んじる仁愛や礼、旧来の身分{{秩序|ちつじょ}}を軽視・否定する立場をとった。{{始皇帝|しこうてい}}は{{韓非子|かんぴし}}の" +
                "著作を愛読したと伝えられ、法家の{{徹底|てってい}}した現実主義・中央集権思想は、六国を{{滅|ほろ}}ぼし広大な統一国家をまとめ上げる原動力となった。"
              }
            />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "しかし前213年、{{丞相|じょうしょう}}{{李斯|りし}}の提言により、医薬・{{占卜|せんぼく}}・農業に関する実用書と{{秦|しん}}の記録を除く諸国の史書や{{儒家|じゅか}}の経典などを{{焼却|しょうきゃく}}させ、" +
                "思想・言論を統制しようとした「{{焚書|ふんしょ}}」が行われる。翌前212年には、方士が不老不死の{{仙薬|せんやく}}を得られなかったことへの{{始皇帝|しこうてい}}の{{怒|いか}}りを" +
                "{{発端|ほったん}}に、{{皇帝|こうてい}}を批判したとされる{{儒者|じゅしゃ}}・方士数百人を生き{{埋|う}}めにしたと『{{史記|しき}}』は伝えており、この二つの{{弾圧|だんあつ}}はあわせて" +
                "「{{焚書坑儒|ふんしょこうじゅ}}」と呼ばれる。以後の{{儒教|じゅきょう}}社会において{{始皇帝|しこうてい}}が暴君として断罪される最大の{{根拠|こんきょ}}の一つとなったが、" +
                "{{焼却|しょうきゃく}}の対象や{{坑儒|こうじゅ}}の実態については後世の{{誇張|こちょう}}も{{指摘|してき}}されており、近年の研究では規模や性格をめぐって様々な議論が続いている。"
              }
            />
          </p>
          {eventBurning && (
            <a
              href={`/events/${eventBurning.slug}`}
              style={{ display: "inline-block", fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, marginTop: 10 }}
            >
              「<RubyText text={eventBurning.title} />」を年表で読む →
            </a>
          )}
        </section>

        <section style={{ marginBottom: 28 }} id="chojo">
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            万里の長城
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "前214年、{{始皇帝|しこうてい}}は将軍{{蒙恬|もうてん}}に命じて北方の{{匈奴|きょうど}}を討たせ、戦国時代に{{燕|えん}}・{{趙|ちょう}}・{{秦|しん}}などが個別に築いていた" +
                "{{防壁|ぼうへき}}を連結・修築し、西は{{臨洮|りんとう}}（現・{{甘粛省|かんしゅくしょう}}）から東は{{遼東|りょうとう}}に至る大規模な防衛線を築き上げた。" +
                "工事には全国から{{徴発|ちょうはつ}}された数十万人ともいわれる民衆が動員され、{{過酷|かこく}}な労役により多くの{{犠牲者|ぎせいしゃ}}を出したと伝えられる。" +
                "夫を長城建設で失った女性が{{城壁|じょうへき}}を泣き{{崩|くず}}したという「{{孟姜女|もうきょうじょ}}泣長城」の伝説はこの労苦を{{象徴|しょうちょう}}する説話として" +
                "後世広く語り{{継|つ}}がれ、長城建設への民衆の{{恨|うら}}みは{{秦|しん}}への不満を高めた一因ともされる。現存する{{秦代|しんだい}}の{{城壁|じょうへき}}遺構は少なく、" +
                "現在観光地として知られる長城の多くは明代に大規模改修・増築された部分だが、この時定まった北方防衛線という構想そのものは" +
                "以後の歴代王朝にも受け{{継|つ}}がれていった。"
              }
            />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap mt-3">
            {eventGreatWall && (
              <a
                href={`/events/${eventGreatWall.slug}`}
                style={{ fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
              >
                「<RubyText text={eventGreatWall.title} />」を年表で読む →
              </a>
            )}
            <a href="/china-castles" style={{ fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
              中国の城まとめも見る →
            </a>
          </div>
        </section>

        <section style={{ marginBottom: 28 }} id="ryo">
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            <ruby>始皇帝陵<rt>しこうていりょう</rt></ruby>
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 14 }}>
            <RubyText
              text={
                "{{即位|そくい}}直後から{{始皇帝|しこうてい}}は、都{{咸陽|かんよう}}{{近郊|きんこう}}の{{驪山|りざん}}のふもとに、自らの{{陵墓|りょうぼ}}の造営を開始させたと伝えられる。" +
                "統一後はさらに規模を拡大し、延べ70万人が動員されたとも『{{史記|しき}}』は記す。歴史書には、地下{{宮殿|きゅうでん}}の中に水銀で川や海を" +
                "再現し、天井には天体（星空）が{{描|えが}}かれ、{{侵入者|しんにゅうしゃ}}を{{射抜|いぬ}}く{{仕掛|しか}}けの{{弩|いしゆみ}}まで備えられていた、との記述が残る。" +
                "{{荒唐無稽|こうとうむけい}}な伝説のようにも思えるが、現代の調査では{{墳丘|ふんきゅう}}周辺の{{土壌|どじょう}}から通常より高い{{濃度|のうど}}の水銀が検出されたとの報告もあり、" +
                "{{盗掘|とうくつ}}や保存技術の限界に加えた未知のリスクへの{{懸念|けねん}}もあって、地下{{宮殿|きゅうでん}}本体の本格的な{{発掘|はっくつ}}は現在も見送られたままとなっている。"
              }
            />
          </p>
          {heritageItems.length > 0 && <HeritageGrid items={heritageItems} eraId="qin" />}
          <a
            href="/terracotta-army"
            style={{ display: "inline-block", fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, marginTop: 12 }}
          >
            <ruby>始皇帝陵<rt>しこうていりょう</rt></ruby>・<ruby>兵馬俑<rt>へいばよう</rt></ruby>にまつわる謎の詳しい解説を見る →
          </a>
        </section>

        <section style={{ marginBottom: 28 }} id="heibayou">
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            <ruby>兵馬俑<rt>へいばよう</rt></ruby>
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "{{兵馬俑|へいばよう}}は、{{始皇帝陵|しこうていりょう}}の{{副葬|ふくそう}}（{{陪葬|ばいそう}}）として{{陵墓|りょうぼ}}の東側に配置された、等身大の{{陶製|とうせい}}兵士・軍馬・戦車の像群である。" +
                "1974年、{{陝西省|せんせいしょう}}{{臨潼|りんとう}}の農民が井戸を{{掘|ほ}}っていたところ{{偶然|ぐうぜん}}発見され、20世紀最大級の考古学的発見の" +
                "一つとして世界中に知られることになった。{{発掘|はっくつ}}された3つの{{坑|こう}}からは推定8000体以上の像が見つかっており、一体ずつ顔つきが" +
                "異なる点や、当初は{{鮮|あざ}}やかに{{彩色|さいしき}}されていた点でも知られる。あの世でも死後の{{始皇帝|しこうてい}}を守護する軍団として作られたと考えられて" +
                "おり、1987年には{{秦始皇陵|しんしこうていりょう}}とあわせてユネスコの世界遺産に登録された。"
              }
            />
          </p>
        </section>

        <section style={{ marginBottom: 28 }} id="shi">
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            <ruby>始皇帝<rt>しこうてい</rt></ruby>の死
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText
              text={
                "{{始皇帝|しこうてい}}は前210年、5度目となる全国{{巡幸|じゅんこう}}の{{途上|とじょう}}、河北の{{沙丘|さきゅう}}で急死した。{{享年|きょうねん}}50。正史『{{史記|しき}}』は死因を明記して" +
                "おらず、単に{{病没|びょうぼつ}}とのみ記す。晩年の{{始皇帝|しこうてい}}は死への強い{{恐|おそ}}れから不老不死を追い求め、方士に命じて{{仙薬|せんやく}}を探させており、" +
                "水銀を{{含|ふく}}む「{{仙薬|せんやく}}」を服用し続けたことによる中毒死説が有力視されているが、{{巡幸|じゅんこう}}の{{疲労|ひろう}}や持病による病死説もあり、確たる結論は" +
                "出ていない。方士{{徐福|じょふく}}が「東方の{{蓬莱|ほうらい}}の島に{{仙薬|せんやく}}がある」と説いて数千人を率いて船出したものの、二度と" +
                "{{戻|もど}}らなかったという伝説もこの時期のものである。"
              }
            />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "側近の{{宦官|かんがん}}{{趙高|ちょうこう}}と{{丞相|じょうしょう}}{{李斯|りし}}は、{{巡幸|じゅんこう}}に同行していなかった長子{{扶蘇|ふそ}}が{{即位|そくい}}すれば自分たちの立場が" +
                "危うくなることを{{恐|おそ}}れ、{{始皇帝|しこうてい}}の死を{{隠|かく}}したまま{{偽|にせ}}の{{遺詔|いしょう}}を作成する（「{{沙丘|さきゅう}}の変」）。遺体の{{腐敗|ふはい}}による{{異臭|いしゅう}}をごまかすため、" +
                "車列に大量の{{塩漬|しおづ}}け魚を積ませて{{隠|かく}}し通したという{{逸話|いつわ}}も伝わる。都に{{戻|もど}}ると{{偽|にせ}}の{{遺詔|いしょう}}により{{扶蘇|ふそ}}と将軍{{蒙恬|もうてん}}に自害を" +
                "命じ、末子{{胡亥|こがい}}を{{二世皇帝|にせいこうてい}}として{{擁立|ようりつ}}した。"
              }
            />
          </p>
        </section>

        <section style={{ marginBottom: 28 }} id="metsubou">
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            <ruby>秦<rt>しん</rt></ruby>の滅亡
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText
              text={
                "{{趙高|ちょうこう}}の{{擁立|ようりつ}}で{{即位|そくい}}した{{二世皇帝|にせいこうてい}}{{胡亥|こがい}}は{{趙高|ちょうこう}}の{{傀儡|かいらい}}と化し、重税と{{過酷|かこく}}な法をそのまま{{継続|けいぞく}}した。{{趙高|ちょうこう}}はやがて{{丞相|じょうしょう}}{{李斯|りし}}をも" +
                "{{讒言|ざんげん}}により{{処刑|しょけい}}して権力を{{独占|どくせん}}し、群臣の忠誠を試すため鹿を馬と言い張ったという「{{指鹿為馬|しろくいば}}」の故事はこの{{頃|ころ}}の" +
                "専横ぶりを{{象徴|しょうちょう}}する{{逸話|いつわ}}として知られる。前209年、辺境警備に{{徴発|ちょうはつ}}された農民{{陳勝|ちんしょう}}・{{呉広|ごこう}}が、大雨で" +
                "期日に間に合わず{{処刑|しょけい}}される運命に直面したことから{{蜂起|ほうき}}すると、反乱はまたたく間に各地へ広がり、{{項羽|こうう}}・{{劉邦|りゅうほう}}を" +
                "はじめとする{{反秦|はんしん}}勢力が次々と挙兵して{{秦崩壊|しんほうかい}}への流れを決定づけた。"
              }
            />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "追い{{詰|つ}}められた{{趙高|ちょうこう}}は、責任を{{胡亥|こがい}}に{{押|お}}し付けるべく自害に追い{{込|こ}}み、代わって{{子嬰|しえい}}を王として{{擁立|ようりつ}}するが、{{子嬰|しえい}}は{{即位|そくい}}" +
                "早々に{{趙高|ちょうこう}}を{{誅殺|ちゅうさつ}}した。しかしもはや大勢は{{覆|くつがえ}}せず、いち早く都{{咸陽|かんよう}}へ{{迫|せま}}った{{劉邦|りゅうほう}}に{{子嬰|しえい}}が{{降伏|こうふく}}したことで、" +
                "{{秦|しん}}は建国よりわずか15年、{{始皇帝|しこうてい}}の統一からはわずか十数年で{{滅亡|めつぼう}}した。その後、{{項羽|こうう}}と{{劉邦|りゅうほう}}は天下の{{覇権|はけん}}を争う{{楚漢戦争|そかんせんそう}}へと" +
                "{{突入|とつにゅう}}し、最終的に勝利した{{劉邦|りゅうほう}}が漢王朝を開くことになる。"
              }
            />
          </p>
          {eventFall && (
            <a
              href={`/events/${eventFall.slug}`}
              style={{ display: "inline-block", fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, marginTop: 10 }}
            >
              「<RubyText text={eventFall.title} />」を年表で読む →
            </a>
          )}
        </section>

        <section style={{ marginBottom: 28 }} id="jinbutsu">
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            <ruby>始皇帝<rt>しこうてい</rt></ruby>に関係する人物
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 14 }}>
            <ruby>始皇帝<rt>しこうてい</rt></ruby>の統一事業を支え、あるいはその死後に帝国を揺るがすことになった主な人物です。
          </p>
          <div className="flex flex-col gap-3">
            {RELATED_PEOPLE.map((p, i) => (
              <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 14 }}>
                <div className="flex items-baseline gap-2 flex-wrap" style={{ marginBottom: 4 }}>
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={p.name} />
                  </span>
                  <span style={{ fontSize: 11, color: COLORS.gold }}><RubyText text={p.role} /></span>
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft }}>
                  <RubyText text={p.text} />
                </p>
              </div>
            ))}
          </div>
          {(xiangYuFigure || liuBangFigure) && (
            <div className="mt-4">
              <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 10 }}>
                <RubyText text="{{秦|しん}}を{{滅|ほろ}}ぼした{{陳勝|ちんしょう}}・{{呉広|ごこう}}の後を{{継|つ}}いで挙兵した{{項羽|こうう}}・{{劉邦|りゅうほう}}には、{{詳|くわ}}しい伝記ページも用意しています。" />
              </p>
              <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
                {xiangYuFigure && <HeritageGrid items={[xiangYuFigure]} eraId="qin" />}
                {liuBangFigure && <HeritageGrid items={[liuBangFigure]} eraId="westernhan" />}
              </div>
            </div>
          )}
        </section>

        <section style={{ marginBottom: 28 }} id="dekigoto">
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            <ruby>始皇帝<rt>しこうてい</rt></ruby>に関係する出来事
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 14 }}>
            <ruby>始皇帝<rt>しこうてい</rt></ruby>の生涯に関わる出来事を、年表の詳細ページとあわせて紹介します。
          </p>
          <div>
            {RELATED_EVENTS.map((ev, i) => (
              <EventListItem key={i} event={ev} />
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            よくある質問
          </h2>
          <div className="flex flex-col gap-3">
            <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 14 }}>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                Q. <ruby>始皇帝<rt>しこうてい</rt></ruby>は何をした人？
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft }}>
                紀元前221年に六国を滅ぼして中国史上初めて天下を統一し、「皇帝」の称号を創始した<ruby>秦<rt>しん</rt></ruby>の王です。<ruby>度量衡<rt>どりょうこう</rt></ruby>・文字・貨幣の統一、
                郡県制の導入、万里の長城の修築などを行い、以後の中国の統治体制の原型を作りました。
              </p>
            </div>
            <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 14 }}>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                Q. <ruby>始皇帝<rt>しこうてい</rt></ruby>はなぜ暴君と言われるのか？
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft }}>
                <ruby>焚書坑儒<rt>ふんしょこうじゅ</rt></ruby>による思想統制や、長城・<ruby>阿房宮<rt>あぼうきゅう</rt></ruby>・<ruby>陵墓<rt>りょうぼ</rt></ruby>建設のための過酷な労役に民衆を動員したことが主な理由です。統一そのものの
                功績は大きいものの、統治手法の苛烈さから評価が大きく分かれています。
              </p>
            </div>
            <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 14 }}>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                Q. <ruby>始皇帝<rt>しこうてい</rt></ruby>の死因は？
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft }}>
                『史記』は病没とのみ記しており、死因を明記していません。不老不死を求めて水銀を含む<ruby>仙薬<rt>せんやく</rt></ruby>を飲み続けた中毒死説が有力視
                されていますが、過労や持病による病死説もあり確定していません。
              </p>
            </div>
          </div>
        </section>

        <section>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            <ruby>秦<rt>しん</rt></ruby>の出来事は年表ページで、<ruby>始皇帝陵<rt>しこうていりょう</rt></ruby>・<ruby>兵馬俑<rt>へいばよう</rt></ruby>にまつわる謎はより詳しい別記事でも紹介しています。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/qin" variant="solid"><ruby>秦<rt>しん</rt></ruby>の時代解説を見る</NavButton>
            <NavButton href="/terracotta-army" variant="outline"><ruby>兵馬俑<rt>へいばよう</rt></ruby>・<ruby>始皇帝陵<rt>しこうていりょう</rt></ruby>の謎を見る</NavButton>
            <NavButton href="/kingdom" variant="outline">漫画『キングダム』と史実</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/qinshihuang" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
