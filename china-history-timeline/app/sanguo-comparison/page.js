import { ERAS, stripRuby, getEraFigures, personSlug, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageThumb, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { SanguoBorderMap } from "@/components/SanguoBorderMap";

const title = "魏・呉・蜀の違いとは？三国の国力・君主・人物を比較";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "三国志の魏・呉・蜀は何が違うのか。建国者・都・領土・人口・皇帝の数・滅亡の経緯を一覧表で比較し、各国の強みと弱み、代表的な武将・軍師、「一番強かったのはどこか」「なぜ蜀と呼ぶのか」などのよくある疑問まで解説します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/sanguo-comparison" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/sanguo-comparison", type: "article" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const SANGUO = ERAS.find((e) => e.id === "sanguo");
const FIGURES = getEraFigures(SANGUO);

// 人物名から、年表データ上の肖像画と伝記ページ（bioがある場合のみ）を引く
function findFigure(name) {
  const figure = FIGURES.find((p) => stripRuby(p.name).startsWith(name));
  if (!figure) return { imageUrl: null, href: null };
  return {
    imageUrl: figure.imageUrl || null,
    credit: figure.credit || null,
    href: figure.bio ? `/people/sanguo/${encodeURIComponent(personSlug(figure.name))}` : null,
  };
}

function findEventSlug(eraId, eventTitle) {
  const era = ERAS.find((e) => e.id === eraId);
  const event = era?.events.find((ev) => stripRuby(ev.title).includes(eventTitle));
  return event?.slug || null;
}

// 色は/sanguo-battlesの勢力図アニメーション（SanguoBorderMap）と揃えている
const KINGDOMS = [
  {
    id: "wei",
    seal: "魏",
    name: "{{魏|ぎ}}",
    aka: "{{曹魏|そうぎ}}",
    color: "#4F6FA0",
    founder: "{{曹操|そうそう}}",
    catch: "{{華北|かほく}}を{{押|お}}さえた最大の大国",
    body:
      "{{曹操|そうそう}}が後漢の{{献帝|けんてい}}を{{擁|よう}}して{{華北|かほく}}を平定し、その子{{曹丕|そうひ}}が220年に{{献帝|けんてい}}から{{帝位|ていい}}を{{譲|ゆず}}られて（{{禅譲|ぜんじょう}}）建てた王朝。" +
      "人口・農業生産力ともに三国の中で群を{{抜|ぬ}}き、{{屯田制|とんでんせい}}による{{食糧|しょくりょう}}確保や、人材登用制度「{{九品官人法|きゅうひんかんじんほう}}」の整備など、" +
      "制度面でも後の王朝の土台を築いた。しかし{{曹叡|そうえい}}（{{明帝|めいてい}}）の死後は{{幼帝|ようてい}}が続き、249年の{{高平陵|こうへいりょう}}の変で{{司馬懿|しばい}}が実権を{{掌握|しょうあく}}。" +
      "265年、{{司馬懿|しばい}}の孫{{司馬炎|しばえん}}に{{帝位|ていい}}を{{譲|ゆず}}って{{滅|ほろ}}んだ。",
    strengths: ["人口・生産力が三国最大", "{{屯田制|とんでんせい}}や{{官僚|かんりょう}}制度など統治の仕組みが整っていた", "「漢から正式に{{禅譲|ぜんじょう}}を受けた」という正統性"],
    weaknesses: ["{{皇帝|こうてい}}権力が早くから弱まり、重臣の司馬氏に国を{{奪|うば}}われた", "北方の異民族や東の{{呉|ご}}・西の{{蜀|しょく}}と、多方面の防衛が必要だった"],
    people: ["{{曹操|そうそう}}", "{{曹丕|そうひ}}", "{{司馬懿|しばい}}", "{{荀彧|じゅんいく}}", "{{郭嘉|かくか}}", "{{夏侯惇|かこうとん}}", "{{張遼|ちょうりょう}}", "{{鄧艾|とうがい}}"],
  },
  {
    id: "wu",
    seal: "呉",
    name: "{{呉|ご}}",
    aka: "{{孫呉|そんご}}・{{東呉|とうご}}",
    color: COLORS.vermilion,
    founder: "孫権",
    catch: "{{長江|ちょうこう}}と水軍に守られた{{江南|こうなん}}の国",
    body:
      "{{孫堅|そんけん}}・{{孫策|そんさく}}父子が築いた{{江東|こうとう}}（{{長江|ちょうこう}}下流域）の{{地盤|じばん}}を、{{孫権|そんけん}}が受け{{継|つ}}いで建てた国。" +
      "208年の{{赤壁|せきへき}}の戦いで{{曹操|そうそう}}の南下を退け、219年には関羽を破って{{荊州|けいしゅう}}の大部分を手に入れた。222年に独自の元号を定めて自立し、229年に{{皇帝|こうてい}}に{{即位|そくい}}した。" +
      "{{長江|ちょうこう}}という天然の{{防壁|ぼうへき}}と強力な水軍に守られ、{{江南|こうなん}}の開発を大きく進めたことは、後の南朝や中国経済の重心の南下につながっていく。" +
      "孫権の晩年は{{後継者|こうけいしゃ}}争い（二宮事件）で国が{{揺|ゆ}}らぎ、最後の{{皇帝|こうてい}}{{孫晧|そんこう}}の暴政もあって、280年に{{西晋|せいしん}}に{{降伏|こうふく}}した。",
    strengths: ["{{長江|ちょうこう}}と水軍による{{鉄壁|てっぺき}}の守り", "{{江南|こうなん}}の開発で経済力を{{伸|の}}ばした", "三国の中で最も長く存続した"],
    weaknesses: ["{{豪族|ごうぞく}}の連合という性格が強く、{{皇帝|こうてい}}の求心力が弱かった", "孫権晩年の{{後継者|こうけいしゃ}}争いで人材を失った"],
    people: ["{{孫堅|そんけん}}", "孫策", "孫権", "{{周瑜|しゅうゆ}}", "{{魯粛|ろしゅく}}", "{{呂蒙|りょもう}}", "{{陸遜|りくそん}}", "{{甘寧|かんねい}}"],
  },
  {
    id: "shu",
    seal: "蜀",
    name: "{{蜀|しょく}}",
    aka: "{{蜀漢|しょくかん}}（正式な国号は「漢」）",
    color: "#5F7A3D",
    founder: "{{劉備|りゅうび}}",
    catch: "漢の復興を{{掲|かか}}げた最小の国",
    body:
      "漢の皇族の{{末裔|まつえい}}を{{称|しょう}}する{{劉備|りゅうび}}が、軍師{{諸葛亮|しょかつりょう}}の「天下三分の計」に沿って{{荊州|けいしゅう}}・益州（現在の四川省）を手に入れ、" +
      "{{曹丕|そうひ}}の{{即位|そくい}}に{{対抗|たいこう}}して221年に{{皇帝|こうてい}}に{{即位|そくい}}した国。国号はあくまで「漢」で、漢王朝の正統な{{後継者|こうけいしゃ}}を名乗った。" +
      "{{劉備|りゅうび}}の死後は{{諸葛亮|しょかつりょう}}が幼い{{劉禅|りゅうぜん}}を補佐し、南中（南方）を平定したうえで{{魏|ぎ}}への{{北伐|ほくばつ}}を{{繰|く}}り返したが、234年に{{五丈原|ごじょうげん}}の{{陣中|じんちゅう}}で{{病没|びょうぼつ}}。" +
      "その後も{{姜維|きょうい}}が{{北伐|ほくばつ}}を続けたが国力は{{疲弊|ひへい}}し、263年に{{魏|ぎ}}の{{鄧艾|とうがい}}が成都に{{迫|せま}}ると{{劉禅|りゅうぜん}}は{{降伏|こうふく}}した。",
    strengths: ["四方を山に囲まれた四川{{盆地|ぼんち}}は守りやすく豊か", "{{諸葛亮|しょかつりょう}}による厳格で公平な政治", "「漢の復興」という明確な大義名分"],
    weaknesses: ["人口・国力が三国で最も小さい", "関羽の敗死と{{夷陵|いりょう}}の戦いの大敗で{{荊州|けいしゅう}}と多くの人材を失った", "度重なる{{北伐|ほくばつ}}で国力を{{消耗|しょうもう}}した"],
    people: ["{{劉備|りゅうび}}", "{{諸葛亮|しょかつりょう}}", "関羽", "張飛", "{{趙雲|ちょううん}}", "{{馬超|ばちょう}}", "黄忠", "{{姜維|きょうい}}"],
  },
];

// 一覧比較表。各行の値は KINGDOMS と同じ魏・呉・蜀の順
const COMPARE_ROWS = [
  { label: "建国者", values: ["{{曹丕|そうひ}}（{{基礎|きそ}}を築いたのは父の{{曹操|そうそう}}）", "孫権（{{基盤|きばん}}は父{{孫堅|そんけん}}・兄孫策）", "{{劉備|りゅうび}}"] },
  { label: "建国", values: ["220年", "222年（自立）\n229年（{{皇帝|こうてい}}{{即位|そくい}}）", "221年"] },
  { label: "{{滅亡|めつぼう}}", values: ["265年", "280年", "263年"] },
  { label: "存続期間", values: ["約45年", "約58年", "約42年"] },
  { label: "都", values: ["{{洛陽|らくよう}}（らくよう）", "建業（けんぎょう、現在の南京）", "成都（せいと）"] },
  { label: "主な領土", values: ["{{華北|かほく}}一帯（黄河流域）", "{{長江|ちょうこう}}中・下流域〜{{江南|こうなん}}、交州（ベトナム北部）", "益州（四川{{盆地|ぼんち}}）と漢中"] },
  { label: "{{戸籍上|こせきじょう}}の人口", values: ["約443万人", "約230万人", "約94万人"] },
  { label: "{{皇帝|こうてい}}の数", values: ["5人", "4人", "2人"] },
  { label: "最後の{{皇帝|こうてい}}", values: ["{{曹奐|そうかん}}（そうかん）", "{{孫晧|そんこう}}（そんこう）", "{{劉禅|りゅうぜん}}（りゅうぜん）"] },
  { label: "{{滅亡|めつぼう}}の{{経緯|けいい}}", values: ["{{司馬炎|しばえん}}に{{帝位|ていい}}を{{譲|ゆず}}り、{{西晋|せいしん}}に交代", "{{西晋|せいしん}}の大軍に{{攻|せ}}められ{{降伏|こうふく}}", "{{魏|ぎ}}の{{鄧艾|とうがい}}・{{鍾会|しょうかい}}の{{侵攻|しんこう}}で{{降伏|こうふく}}"] },
  { label: "代表的な軍師", values: ["{{荀彧|じゅんいく}}・{{郭嘉|かくか}}・{{司馬懿|しばい}}", "{{周瑜|しゅうゆ}}・{{魯粛|ろしゅく}}・{{陸遜|りくそん}}", "{{諸葛亮|しょかつりょう}}・{{龐統|ほうとう}}・法正"] },
];

// 戸籍に登録された人口。魏・蜀は263年、呉は280年時点の数字（『三国志』裴松之注・『晋書』などによる）
const POPULATION = [
  { id: "wei", label: "{{魏|ぎ}}", value: 443, households: "約66万戸", note: "263年" },
  { id: "wu", label: "{{呉|ご}}", value: 230, households: "約52万戸", note: "280年" },
  { id: "shu", label: "{{蜀|しょく}}", value: 94, households: "約28万戸", note: "263年" },
];

const TIMELINE = [
  { year: "208年", text: "{{赤壁|せきへき}}の戦い。孫権・{{劉備|りゅうび}}の連合軍が{{曹操|そうそう}}を破り、天下三分の形勢が生まれる", eventTitle: "赤壁の戦い" },
  { year: "219年", text: "{{呉|ご}}の{{呂蒙|りょもう}}が{{荊州|けいしゅう}}を守る関羽を討ち、{{荊州|けいしゅう}}の大部分が{{呉|ご}}の領土に" },
  { year: "220年", text: "{{曹操|そうそう}}が死去し、子の{{曹丕|そうひ}}が{{献帝|けんてい}}から{{禅譲|ぜんじょう}}を受けて{{魏|ぎ}}を建国。後漢が{{滅亡|めつぼう}}", eventTitle: "魏の建国" },
  { year: "221年", text: "{{劉備|りゅうび}}が成都で{{皇帝|こうてい}}に{{即位|そくい}}（{{蜀漢|しょくかん}}）", eventTitle: "蜀漢の建国" },
  { year: "222年", text: "{{夷陵|いりょう}}の戦いで{{呉|ご}}の{{陸遜|りくそん}}が{{劉備|りゅうび}}を大破。孫権が独自の元号を立てて自立", eventTitle: "呉の建国" },
  { year: "223年", text: "{{劉備|りゅうび}}が{{白帝城|はくていじょう}}で死去。{{諸葛亮|しょかつりょう}}が{{劉禅|りゅうぜん}}の後見となり、{{呉|ご}}との同盟を回復" },
  { year: "229年", text: "孫権が{{皇帝|こうてい}}に{{即位|そくい}}し、三人の{{皇帝|こうてい}}が並び立つ「{{三国鼎立|さんごくていりつ}}」が完成" },
  { year: "234年", text: "{{諸葛亮|しょかつりょう}}が{{五丈原|ごじょうげん}}で{{司馬懿|しばい}}と{{対陣中|たいじんちゅう}}に{{病没|びょうぼつ}}", eventTitle: "五丈原の戦い" },
  { year: "249年", text: "{{高平陵|こうへいりょう}}の変。{{司馬懿|しばい}}がクーデターで{{魏|ぎ}}の実権を{{握|にぎ}}る" },
  { year: "263年", text: "{{魏軍|ぎぐん}}が成都に{{迫|せま}}り、{{劉禅|りゅうぜん}}が{{降伏|こうふく}}して{{蜀|しょく}}が{{滅亡|めつぼう}}", eventTitle: "蜀漢の滅亡" },
  { year: "265年", text: "{{司馬炎|しばえん}}が{{魏|ぎ}}の{{元帝|げんてい}}から{{禅譲|ぜんじょう}}を受けて{{西晋|せいしん}}を建国。{{魏|ぎ}}が{{滅亡|めつぼう}}", eraId: "westernjin", eventTitle: "西晋の建国" },
  { year: "280年", text: "{{西晋|せいしん}}が{{呉|ご}}を{{滅|ほろ}}ぼし、約60年ぶりに中国が再統一される", eraId: "westernjin", eventTitle: "西晋による中国再統一" },
];

const FAQ = [
  {
    q: "{{魏|ぎ}}・{{呉|ご}}・{{蜀|しょく}}で一番強かったのはどこ？",
    a: "国力では{{魏|ぎ}}が{{圧倒的|あっとうてき}}で、{{戸籍上|こせきじょう}}の人口は{{魏|ぎ}}が約443万人、{{呉|ご}}が約230万人、{{蜀|しょく}}が約94万人と、{{魏|ぎ}}だけで{{呉|ご}}と{{蜀|しょく}}の合計を上回っていました。最終的に天下を統一したのも、{{魏|ぎ}}の実権を{{握|にぎ}}った司馬氏が建てた{{西晋|せいしん}}です。",
  },
  {
    q: "なぜ{{劉備|りゅうび}}の国を「{{蜀|しょく}}」と呼ぶの？",
    a: "{{劉備|りゅうび}}の国の正式な国号は「漢」でした。前漢・後漢と区別するため、後世には{{本拠地|ほんきょち}}の地名（{{蜀|しょく}}＝現在の四川省）から「{{蜀|しょく}}」や「{{蜀漢|しょくかん}}」と呼ばれます。正史『三国志』でも{{劉備|りゅうび}}の国の記録は「{{蜀書|しょくしょ}}」としてまとめられています。",
  },
  {
    q: "三国で最後まで残ったのはどこ？",
    a: "{{呉|ご}}です。{{蜀|しょく}}は263年に{{魏|ぎ}}に{{滅|ほろ}}ぼされ、{{魏|ぎ}}も265年に{{司馬炎|しばえん}}に{{帝位|ていい}}を{{譲|ゆず}}って{{西晋|せいしん}}に代わりました。{{呉|ご}}はその後も15年間存続しましたが、280年に{{西晋|せいしん}}に{{降伏|こうふく}}し、三国時代は幕を閉じました。",
  },
  {
    q: "正史『三国志』と『三国志演義』では、どの国が主役？",
    a: "{{西晋|せいしん}}の歴史家・{{陳寿|ちんじゅ}}がまとめた正史『三国志』は、{{晋|しん}}に{{帝位|ていい}}を{{譲|ゆず}}った{{魏|ぎ}}を正統な王朝として{{扱|あつか}}っています。一方、明代に成立した小説『三国志演義』は、漢の復興を{{掲|かか}}げた{{劉備|りゅうび}}と{{諸葛亮|しょかつりょう}}の{{蜀|しょく}}を主人公側として{{描|えが}}き、{{曹操|そうそう}}を敵役にしています。日本で広く親しまれている三国志のイメージの多くは、この『演義』に由来します。",
  },
  {
    q: "三国を統一したのは{{誰|だれ}}？",
    a: "{{西晋|せいしん}}の初代{{皇帝|こうてい}}・{{司馬炎|しばえん}}（{{武帝|ぶてい}}）です。祖父は{{諸葛亮|しょかつりょう}}のライバルとして知られる{{魏|ぎ}}の重臣・{{司馬懿|しばい}}で、司馬氏は三代かけて{{魏|ぎ}}の実権を{{握|にぎ}}り、265年に{{魏|ぎ}}から{{帝位|ていい}}を{{譲|ゆず}}り受けました。そして280年に{{呉|ご}}を{{滅|ほろ}}ぼして中国を再統一しました。",
  },
];

const RESOLVED_TIMELINE = TIMELINE.map((t) => ({
  ...t,
  eventSlug: t.eventTitle ? findEventSlug(t.eraId || "sanguo", t.eventTitle) : null,
}));

const sectionHeading = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 14 };
const card = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

function KingdomBadge({ kingdom, size = 28 }) {
  return (
    <span
      className="inline-flex items-center justify-center shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: kingdom.color,
        color: "#FBF8F0",
        fontFamily: "var(--font-serif), serif",
        fontSize: size * 0.55,
        fontWeight: 900,
      }}
    >
      <RubyText text={kingdom.seal} />
    </span>
  );
}

function PersonLinks({ names }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1" style={{ fontSize: 12.5 }}>
      {names.map((name) => {
        const { href } = findFigure(name);
        return href ? (
          <a key={name} href={href} style={linkStyle}>
            <RubyText text={name} />
          </a>
        ) : (
          <span key={name} style={{ color: COLORS.ink }}>
            <RubyText text={name} />
          </span>
        );
      })}
    </div>
  );
}

export default function SanguoComparisonPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    about: ["魏", "呉", "蜀", "三国時代"],
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/sanguo-comparison` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "{{魏|ぎ}}・{{呉|ご}}・{{蜀|しょく}}の{{違|ちが}}い", item: `${SITE_URL}/sanguo-comparison` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const maxPopulation = Math.max(...POPULATION.map((p) => p.value));

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(articleJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(breadcrumbJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(faqJsonLd)) }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          <ruby>魏<rt>ぎ</rt></ruby>・<ruby>呉<rt>ご</rt></ruby>・<ruby>蜀<rt>しょく</rt></ruby>の<ruby>違<rt>ちが</rt></ruby>いとは？
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
          <RubyText
            text={
              "後漢が{{滅|ほろ}}んだ220年から、{{西晋|せいしん}}が天下を再統一する280年まで、中国は{{曹操|そうそう}}の流れをくむ「{{魏|ぎ}}」、{{孫権|そんけん}}の「{{呉|ご}}」、" +
              "{{劉備|りゅうび}}の「{{蜀|しょく}}」の三国に分かれて争った。これが三国志で知られる三国時代である。" +
              "三国は同時代に並び立ったものの、領土の広さや人口、国の成り立ちや政治のあり方は大きく異なっていた。" +
              "このページでは、{{魏|ぎ}}・{{呉|ご}}・{{蜀|しょく}}の{{違|ちが}}いを一覧表と国力のデータで{{比較|ひかく}}し、それぞれの強みと弱み、代表的な人物をわかりやすく解説する。"
            }
          />
        </p>

        <div className="flex gap-2 mb-8">
          {KINGDOMS.map((k) => (
            <a key={k.id} href={`#${k.id}`} className="flex-1 flex items-center gap-2 px-3 py-2.5" style={{ ...card, borderTop: `3px solid ${k.color}` }}>
              <KingdomBadge kingdom={k} size={30} />
              <span className="min-w-0">
                <span style={{ display: "block", fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}><RubyText text={k.name} /></span>
                <span style={{ display: "block", fontSize: 10.5, color: COLORS.inkSoft, lineHeight: 1.4 }}><RubyText text={k.founder} />の国</span>
              </span>
            </a>
          ))}
        </div>

        <section style={{ marginBottom: 36 }} id="hikaku">
          <h2 style={sectionHeading}><ruby>魏<rt>ぎ</rt></ruby>・<ruby>呉<rt>ご</rt></ruby>・<ruby>蜀<rt>しょく</rt></ruby>の<ruby>比較<rt>ひかく</rt></ruby>一覧表</h2>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 460 }}>
              <thead>
                <tr>
                  <th style={{ width: 84, padding: "10px 8px", borderBottom: "1px solid #DCD3B8" }} />
                  {KINGDOMS.map((k) => (
                    <th key={k.id} style={{ padding: "10px 8px", borderBottom: `2px solid ${k.color}`, textAlign: "left" }}>
                      <span className="inline-flex items-center gap-1.5">
                        <KingdomBadge kingdom={k} size={22} />
                        <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}><RubyText text={k.name} /></span>
                      </span>
                      <span style={{ display: "block", fontSize: 10, fontWeight: 400, color: COLORS.inkSoft, marginTop: 3 }}><RubyText text={k.aka} /></span>
                    </th>
                  ))}
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
                    {row.values.map((v, i) => (
                      <td key={i} style={{ padding: "9px 8px", color: COLORS.ink, lineHeight: 1.6, borderTop: "1px solid #E8E0CA", verticalAlign: "top", whiteSpace: "pre-line" }}>
                        <RubyText text={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 11, color: COLORS.mist, marginTop: 6 }}>
            ※存続期間は建国（<ruby>呉<rt>ご</rt></ruby>は自立した222年）から<ruby>滅亡<rt>めつぼう</rt></ruby>までの<ruby>概数<rt>がいすう</rt></ruby>。人口は<ruby>戸籍<rt>こせき</rt></ruby>に登録された数で、下の「国力の<ruby>比較<rt>ひかく</rt></ruby>」を参照。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="kokuryoku">
          <h2 style={sectionHeading}>国力の<ruby>比較<rt>ひかく</rt></ruby>：人口は<ruby>魏<rt>ぎ</rt></ruby>が<ruby>蜀<rt>しょく</rt></ruby>の約5倍</h2>
          <div style={{ ...card, padding: "16px 16px 12px" }}>
            <div style={{ fontSize: 11, color: COLORS.gold, marginBottom: 10, letterSpacing: "0.05em" }}><ruby>戸籍上<rt>こせきじょう</rt></ruby>の人口（<ruby>滅亡<rt>めつぼう</rt></ruby>時点）</div>
            <div className="flex flex-col gap-3">
              {POPULATION.map((p) => {
                const k = KINGDOMS.find((x) => x.id === p.id);
                return (
                  <div key={p.id} className="flex items-center gap-3">
                    <KingdomBadge kingdom={k} size={26} />
                    <div className="flex-1 min-w-0">
                      <div style={{ height: 18, width: `${(p.value / maxPopulation) * 100}%`, backgroundColor: k.color, minWidth: 4 }} />
                      <div style={{ fontSize: 11, color: COLORS.inkSoft, marginTop: 3 }}>
                        <RubyText text={p.households} />（<RubyText text={p.note} />）
                      </div>
                    </div>
                    <div style={{ width: 72, textAlign: "right", fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                      <RubyText text={p.value} />
                      <span style={{ fontSize: 11, fontWeight: 400 }}>万人</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginTop: 12 }}>
            <ruby>魏<rt>ぎ</rt></ruby>の人口は<ruby>呉<rt>ご</rt></ruby>と<ruby>蜀<rt>しょく</rt></ruby>を合わせた数より多く、国力の差は歴然としていた。<ruby>蜀<rt>しょく</rt></ruby>の<ruby>諸葛亮<rt>しょかつりょう</rt></ruby>が<ruby>繰<rt>く</rt></ruby>り返した<ruby>北伐<rt>ほくばつ</rt></ruby>は、この差が広がる前に先手を打とうとする戦いでもあった。
            なお、後漢の最盛期（2世紀半ば）には<ruby>戸籍上<rt>こせきじょう</rt></ruby>の人口が約5600万人あったとされ、三国の合計はその7分の1ほどにすぎない。
            戦乱による<ruby>犠牲<rt>ぎせい</rt></ruby>に加え、国家が<ruby>戸籍<rt>こせき</rt></ruby>で<ruby>把握<rt>はあく</rt></ruby>できない流民や<ruby>豪族<rt>ごうぞく</rt></ruby>の支配下の人々が増えたためと考えられており、実際の人口はこれよりかなり多かったとみられる。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="kakkoku">
          <h2 style={sectionHeading}>それぞれの国の<ruby>特徴<rt>とくちょう</rt></ruby></h2>
          <div className="flex flex-col gap-5">
            {KINGDOMS.map((k) => {
              const founder = findFigure(k.founder);
              return (
                <div key={k.id} id={k.id} style={{ ...card, borderTop: `4px solid ${k.color}`, scrollMarginTop: 16 }}>
                  <div className="flex gap-3 p-4">
                    {founder.imageUrl && (
                      <div
                        className="flex items-center justify-center shrink-0"
                        style={{ width: 88, height: 104, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}
                      >
                        <HeritageThumb imageUrl={founder.imageUrl} name={k.founder} type="figure" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <KingdomBadge kingdom={k} size={30} />
                        <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 18, fontWeight: 900, color: COLORS.ink }}>
                          <RubyText text={k.name} />
                          <span style={{ fontSize: 12, fontWeight: 400, color: COLORS.inkSoft, marginLeft: 6 }}><RubyText text={k.aka} /></span>
                        </h3>
                      </div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: k.color, marginTop: 8 }}><RubyText text={k.catch} /></p>
                      {founder.imageUrl && (
                        <p style={{ fontSize: 10.5, color: COLORS.mist, marginTop: 6 }}>
                          <ruby>肖像<rt>しょうぞう</rt></ruby>：<RubyText text={k.founder} />
                          {founder.credit && <span> ／ <RubyText text={founder.credit} /></span>}
                        </p>
                      )}
                    </div>
                  </div>
                  <div style={{ padding: "0 16px 16px" }}>
                    <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
                      <RubyText text={k.body} />
                    </p>
                    <div className="grid gap-3 mt-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                      {[
                        ["強み", k.strengths, COLORS.jade],
                        ["弱み", k.weaknesses, COLORS.vermilion],
                      ].map(([label, items, color]) => (
                        <div key={label} style={{ backgroundColor: "#fff", border: `1px solid #E8E0CA`, padding: "10px 12px" }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color, marginBottom: 6, letterSpacing: "0.1em" }}><RubyText text={label} /></div>
                          <ul className="flex flex-col gap-1" style={{ fontSize: 12, lineHeight: 1.6, color: COLORS.ink }}>
                            {items.map((item) => (
                              <li key={item} className="flex gap-1.5">
                                <span style={{ color }}>・</span>
                                <span><RubyText text={item} /></span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <div style={{ fontSize: 11, color: COLORS.gold, marginBottom: 6, letterSpacing: "0.05em" }}>代表的な人物</div>
                      <PersonLinks names={k.people} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="nenpyo">
          <h2 style={sectionHeading}>三国の興亡年表</h2>
          <div className="flex flex-col gap-2">
            {RESOLVED_TIMELINE.map((t) => {
              const content = (
                <div className="flex items-baseline gap-3 px-4 py-2.5" style={{ ...card, borderLeft: `3px solid ${COLORS.vermilion}` }}>
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 12.5, color: COLORS.inkSoft, whiteSpace: "nowrap" }}><RubyText text={t.year} /></span>
                  <span className="flex-1 min-w-0" style={{ fontSize: 12.5, lineHeight: 1.7, color: COLORS.ink }}>
                    <RubyText text={t.text} />
                  </span>
                  {t.eventSlug && (
                    <span className="shrink-0" style={{ color: COLORS.vermilion, fontSize: 13 }}>
                      →
                    </span>
                  )}
                </div>
              );
              return t.eventSlug ? (
                <a key={t.year} href={`/events/${t.eventSlug}`}>
                  {content}
                </a>
              ) : (
                <div key={t.year}>{content}</div>
              );
            })}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="seiryokuzu">
          <h2 style={sectionHeading}>勢力図の移り変わり</h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 12 }}>
            <ruby>群雄割拠<rt>ぐんゆうかっきょ</rt></ruby>の時代から<ruby>三国鼎立<rt>さんごくていりつ</rt></ruby>、そして<ruby>西晋<rt>せいしん</rt></ruby>による統一まで、<ruby>魏<rt>ぎ</rt></ruby>（青）・<ruby>呉<rt>ご</rt></ruby>（<ruby>朱<rt>しゅ</rt></ruby>）・<ruby>蜀<rt>しょく</rt></ruby>（緑）の領土がどう変わったかをアニメーションで確認できます。
          </p>
          <SanguoBorderMap />
        </section>

        <section style={{ marginBottom: 36 }} id="faq">
          <h2 style={sectionHeading}><ruby>魏<rt>ぎ</rt></ruby>・<ruby>呉<rt>ご</rt></ruby>・<ruby>蜀<rt>しょく</rt></ruby>についてのよくある疑問</h2>
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
            三国が<ruby>激突<rt>げきとつ</rt></ruby>した<ruby>官渡<rt>かんと</rt></ruby>・<ruby>赤壁<rt>せきへき</rt></ruby>・<ruby>夷陵<rt>いりょう</rt></ruby>・<ruby>五丈原<rt>ごじょうげん</rt></ruby>などの合戦は「三国時代 合戦マップ」で、登場人物の<ruby>詳<rt>くわ</rt></ruby>しい<ruby>生涯<rt>しょうがい</rt></ruby>は人物一覧で<ruby>紹介<rt>しょうかい</rt></ruby>しています。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/sanguo-battles" variant="solid">三国時代 合戦マップ</NavButton>
            <NavButton href="/people/sanguo" variant="outline">三国時代の人物一覧</NavButton>
            <NavButton href="/four-great-novels" variant="outline">三国志演義など四大名著</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
