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
    name: "魏",
    aka: "曹魏",
    color: "#4F6FA0",
    founder: "曹操",
    catch: "華北を押さえた最大の大国",
    body:
      "{{曹操|そうそう}}が後漢の献帝を擁して華北を平定し、その子{{曹丕|そうひ}}が220年に献帝から帝位を譲られて（禅譲）建てた王朝。" +
      "人口・農業生産力ともに三国の中で群を抜き、{{屯田制|とんでんせい}}による食糧確保や、人材登用制度「{{九品官人法|きゅうひんかんじんほう}}」の整備など、" +
      "制度面でも後の王朝の土台を築いた。しかし曹叡（明帝）の死後は幼帝が続き、249年の{{高平陵|こうへいりょう}}の変で{{司馬懿|しばい}}が実権を掌握。" +
      "265年、司馬懿の孫{{司馬炎|しばえん}}に帝位を譲って滅んだ。",
    strengths: ["人口・生産力が三国最大", "屯田制や官僚制度など統治の仕組みが整っていた", "「漢から正式に禅譲を受けた」という正統性"],
    weaknesses: ["皇帝権力が早くから弱まり、重臣の司馬氏に国を奪われた", "北方の異民族や東の呉・西の蜀と、多方面の防衛が必要だった"],
    people: ["曹操", "曹丕", "司馬懿", "荀彧", "郭嘉", "夏侯惇", "張遼", "鄧艾"],
  },
  {
    id: "wu",
    seal: "呉",
    name: "呉",
    aka: "孫呉・東呉",
    color: COLORS.vermilion,
    founder: "孫権",
    catch: "長江と水軍に守られた江南の国",
    body:
      "{{孫堅|そんけん}}・{{孫策|そんさく}}父子が築いた江東（長江下流域）の地盤を、{{孫権|そんけん}}が受け継いで建てた国。" +
      "208年の赤壁の戦いで曹操の南下を退け、219年には関羽を破って荊州の大部分を手に入れた。222年に独自の元号を定めて自立し、229年に皇帝に即位した。" +
      "長江という天然の防壁と強力な水軍に守られ、江南の開発を大きく進めたことは、後の南朝や中国経済の重心の南下につながっていく。" +
      "孫権の晩年は後継者争い（二宮事件）で国が揺らぎ、最後の皇帝{{孫晧|そんこう}}の暴政もあって、280年に西晋に降伏した。",
    strengths: ["長江と水軍による鉄壁の守り", "江南の開発で経済力を伸ばした", "三国の中で最も長く存続した"],
    weaknesses: ["豪族の連合という性格が強く、皇帝の求心力が弱かった", "孫権晩年の後継者争いで人材を失った"],
    people: ["孫堅", "孫策", "孫権", "周瑜", "魯粛", "呂蒙", "陸遜", "甘寧"],
  },
  {
    id: "shu",
    seal: "蜀",
    name: "蜀",
    aka: "蜀漢（正式な国号は「漢」）",
    color: "#5F7A3D",
    founder: "劉備",
    catch: "漢の復興を掲げた最小の国",
    body:
      "漢の皇族の末裔を称する{{劉備|りゅうび}}が、軍師{{諸葛亮|しょかつりょう}}の「天下三分の計」に沿って荊州・益州（現在の四川省）を手に入れ、" +
      "曹丕の即位に対抗して221年に皇帝に即位した国。国号はあくまで「漢」で、漢王朝の正統な後継者を名乗った。" +
      "劉備の死後は諸葛亮が幼い{{劉禅|りゅうぜん}}を補佐し、南中（南方）を平定したうえで魏への北伐を繰り返したが、234年に五丈原の陣中で病没。" +
      "その後も{{姜維|きょうい}}が北伐を続けたが国力は疲弊し、263年に魏の{{鄧艾|とうがい}}が成都に迫ると劉禅は降伏した。",
    strengths: ["四方を山に囲まれた四川盆地は守りやすく豊か", "諸葛亮による厳格で公平な政治", "「漢の復興」という明確な大義名分"],
    weaknesses: ["人口・国力が三国で最も小さい", "関羽の敗死と夷陵の戦いの大敗で荊州と多くの人材を失った", "度重なる北伐で国力を消耗した"],
    people: ["劉備", "諸葛亮", "関羽", "張飛", "趙雲", "馬超", "黄忠", "姜維"],
  },
];

// 一覧比較表。各行の値は KINGDOMS と同じ魏・呉・蜀の順
const COMPARE_ROWS = [
  { label: "建国者", values: ["曹丕（基礎を築いたのは父の曹操）", "孫権（基盤は父孫堅・兄孫策）", "劉備"] },
  { label: "建国", values: ["220年", "222年（自立）\n229年（皇帝即位）", "221年"] },
  { label: "滅亡", values: ["265年", "280年", "263年"] },
  { label: "存続期間", values: ["約45年", "約58年", "約42年"] },
  { label: "都", values: ["洛陽（らくよう）", "建業（けんぎょう、現在の南京）", "成都（せいと）"] },
  { label: "主な領土", values: ["華北一帯（黄河流域）", "長江中・下流域〜江南、交州（ベトナム北部）", "益州（四川盆地）と漢中"] },
  { label: "戸籍上の人口", values: ["約443万人", "約230万人", "約94万人"] },
  { label: "皇帝の数", values: ["5人", "4人", "2人"] },
  { label: "最後の皇帝", values: ["曹奐（そうかん）", "孫晧（そんこう）", "劉禅（りゅうぜん）"] },
  { label: "滅亡の経緯", values: ["司馬炎に帝位を譲り、西晋に交代", "西晋の大軍に攻められ降伏", "魏の鄧艾・鍾会の侵攻で降伏"] },
  { label: "代表的な軍師", values: ["荀彧・郭嘉・司馬懿", "周瑜・魯粛・陸遜", "諸葛亮・龐統・法正"] },
];

// 戸籍に登録された人口。魏・蜀は263年、呉は280年時点の数字（『三国志』裴松之注・『晋書』などによる）
const POPULATION = [
  { id: "wei", label: "魏", value: 443, households: "約66万戸", note: "263年" },
  { id: "wu", label: "呉", value: 230, households: "約52万戸", note: "280年" },
  { id: "shu", label: "蜀", value: 94, households: "約28万戸", note: "263年" },
];

const TIMELINE = [
  { year: "208年", text: "赤壁の戦い。孫権・劉備の連合軍が曹操を破り、天下三分の形勢が生まれる", eventTitle: "赤壁の戦い" },
  { year: "219年", text: "呉の呂蒙が荊州を守る関羽を討ち、荊州の大部分が呉の領土に" },
  { year: "220年", text: "曹操が死去し、子の曹丕が献帝から禅譲を受けて魏を建国。後漢が滅亡", eventTitle: "魏の建国" },
  { year: "221年", text: "劉備が成都で皇帝に即位（蜀漢）", eventTitle: "蜀漢の建国" },
  { year: "222年", text: "夷陵の戦いで呉の陸遜が劉備を大破。孫権が独自の元号を立てて自立", eventTitle: "呉の建国" },
  { year: "223年", text: "劉備が白帝城で死去。諸葛亮が劉禅の後見となり、呉との同盟を回復" },
  { year: "229年", text: "孫権が皇帝に即位し、三人の皇帝が並び立つ「三国鼎立」が完成" },
  { year: "234年", text: "諸葛亮が五丈原で司馬懿と対陣中に病没", eventTitle: "五丈原の戦い" },
  { year: "249年", text: "高平陵の変。司馬懿がクーデターで魏の実権を握る" },
  { year: "263年", text: "魏軍が成都に迫り、劉禅が降伏して蜀が滅亡", eventTitle: "蜀漢の滅亡" },
  { year: "265年", text: "司馬炎が魏の元帝から禅譲を受けて西晋を建国。魏が滅亡", eraId: "westernjin", eventTitle: "西晋の建国" },
  { year: "280年", text: "西晋が呉を滅ぼし、約60年ぶりに中国が再統一される", eraId: "westernjin", eventTitle: "西晋による中国再統一" },
];

const FAQ = [
  {
    q: "魏・呉・蜀で一番強かったのはどこ？",
    a: "国力では魏が圧倒的で、戸籍上の人口は魏が約443万人、呉が約230万人、蜀が約94万人と、魏だけで呉と蜀の合計を上回っていました。最終的に天下を統一したのも、魏の実権を握った司馬氏が建てた西晋です。",
  },
  {
    q: "なぜ劉備の国を「蜀」と呼ぶの？",
    a: "劉備の国の正式な国号は「漢」でした。前漢・後漢と区別するため、後世には本拠地の地名（蜀＝現在の四川省）から「蜀」や「蜀漢」と呼ばれます。正史『三国志』でも劉備の国の記録は「蜀書」としてまとめられています。",
  },
  {
    q: "三国で最後まで残ったのはどこ？",
    a: "呉です。蜀は263年に魏に滅ぼされ、魏も265年に司馬炎に帝位を譲って西晋に代わりました。呉はその後も15年間存続しましたが、280年に西晋に降伏し、三国時代は幕を閉じました。",
  },
  {
    q: "正史『三国志』と『三国志演義』では、どの国が主役？",
    a: "西晋の歴史家・陳寿がまとめた正史『三国志』は、晋に帝位を譲った魏を正統な王朝として扱っています。一方、明代に成立した小説『三国志演義』は、漢の復興を掲げた劉備と諸葛亮の蜀を主人公側として描き、曹操を敵役にしています。日本で広く親しまれている三国志のイメージの多くは、この『演義』に由来します。",
  },
  {
    q: "三国を統一したのは誰？",
    a: "西晋の初代皇帝・司馬炎（武帝）です。祖父は諸葛亮のライバルとして知られる魏の重臣・司馬懿で、司馬氏は三代かけて魏の実権を握り、265年に魏から帝位を譲り受けました。そして280年に呉を滅ぼして中国を再統一しました。",
  },
];

const RESOLVED_TIMELINE = TIMELINE.map((t) => ({
  ...t,
  eventSlug: t.eventTitle ? findEventSlug(t.eraId || "sanguo", t.eventTitle) : null,
}));

const sectionHeading = { fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 14 };
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
        fontFamily: "'Noto Serif SC', serif",
        fontSize: size * 0.55,
        fontWeight: 900,
      }}
    >
      {kingdom.seal}
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
            {name}
          </a>
        ) : (
          <span key={name} style={{ color: COLORS.ink }}>
            {name}
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
      { "@type": "ListItem", position: 2, name: "魏・呉・蜀の違い", item: `${SITE_URL}/sanguo-comparison` },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          魏・呉・蜀の違いとは？
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
          <RubyText
            text={
              "後漢が滅んだ220年から、西晋が天下を再統一する280年まで、中国は{{曹操|そうそう}}の流れをくむ「魏」、{{孫権|そんけん}}の「呉」、" +
              "{{劉備|りゅうび}}の「蜀」の三国に分かれて争った。これが三国志で知られる三国時代である。" +
              "三国は同時代に並び立ったものの、領土の広さや人口、国の成り立ちや政治のあり方は大きく異なっていた。" +
              "このページでは、魏・呉・蜀の違いを一覧表と国力のデータで比較し、それぞれの強みと弱み、代表的な人物をわかりやすく解説する。"
            }
          />
        </p>

        <div className="flex gap-2 mb-8">
          {KINGDOMS.map((k) => (
            <a key={k.id} href={`#${k.id}`} className="flex-1 flex items-center gap-2 px-3 py-2.5" style={{ ...card, borderTop: `3px solid ${k.color}` }}>
              <KingdomBadge kingdom={k} size={30} />
              <span className="min-w-0">
                <span style={{ display: "block", fontFamily: "'Noto Serif SC', serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}>{k.name}</span>
                <span style={{ display: "block", fontSize: 10.5, color: COLORS.inkSoft, lineHeight: 1.4 }}>{k.founder}の国</span>
              </span>
            </a>
          ))}
        </div>

        <section style={{ marginBottom: 36 }} id="hikaku">
          <h2 style={sectionHeading}>魏・呉・蜀の比較一覧表</h2>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 460 }}>
              <thead>
                <tr>
                  <th style={{ width: 84, padding: "10px 8px", borderBottom: "1px solid #DCD3B8" }} />
                  {KINGDOMS.map((k) => (
                    <th key={k.id} style={{ padding: "10px 8px", borderBottom: `2px solid ${k.color}`, textAlign: "left" }}>
                      <span className="inline-flex items-center gap-1.5">
                        <KingdomBadge kingdom={k} size={22} />
                        <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}>{k.name}</span>
                      </span>
                      <span style={{ display: "block", fontSize: 10, fontWeight: 400, color: COLORS.inkSoft, marginTop: 3 }}>{k.aka}</span>
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
                      {row.label}
                    </th>
                    {row.values.map((v, i) => (
                      <td key={i} style={{ padding: "9px 8px", color: COLORS.ink, lineHeight: 1.6, borderTop: "1px solid #E8E0CA", verticalAlign: "top", whiteSpace: "pre-line" }}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 11, color: COLORS.mist, marginTop: 6 }}>
            ※存続期間は建国（呉は自立した222年）から滅亡までの概数。人口は戸籍に登録された数で、下の「国力の比較」を参照。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="kokuryoku">
          <h2 style={sectionHeading}>国力の比較：人口は魏が蜀の約5倍</h2>
          <div style={{ ...card, padding: "16px 16px 12px" }}>
            <div style={{ fontSize: 11, color: COLORS.gold, marginBottom: 10, letterSpacing: "0.05em" }}>戸籍上の人口（滅亡時点）</div>
            <div className="flex flex-col gap-3">
              {POPULATION.map((p) => {
                const k = KINGDOMS.find((x) => x.id === p.id);
                return (
                  <div key={p.id} className="flex items-center gap-3">
                    <KingdomBadge kingdom={k} size={26} />
                    <div className="flex-1 min-w-0">
                      <div style={{ height: 18, width: `${(p.value / maxPopulation) * 100}%`, backgroundColor: k.color, minWidth: 4 }} />
                      <div style={{ fontSize: 11, color: COLORS.inkSoft, marginTop: 3 }}>
                        {p.households}（{p.note}）
                      </div>
                    </div>
                    <div style={{ width: 72, textAlign: "right", fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                      {p.value}
                      <span style={{ fontSize: 11, fontWeight: 400 }}>万人</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginTop: 12 }}>
            魏の人口は呉と蜀を合わせた数より多く、国力の差は歴然としていた。蜀の諸葛亮が繰り返した北伐は、この差が広がる前に先手を打とうとする戦いでもあった。
            なお、後漢の最盛期（2世紀半ば）には戸籍上の人口が約5600万人あったとされ、三国の合計はその7分の1ほどにすぎない。
            戦乱による犠牲に加え、国家が戸籍で把握できない流民や豪族の支配下の人々が増えたためと考えられており、実際の人口はこれよりかなり多かったとみられる。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="kakkoku">
          <h2 style={sectionHeading}>それぞれの国の特徴</h2>
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
                        <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 18, fontWeight: 900, color: COLORS.ink }}>
                          {k.name}
                          <span style={{ fontSize: 12, fontWeight: 400, color: COLORS.inkSoft, marginLeft: 6 }}>{k.aka}</span>
                        </h3>
                      </div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: k.color, marginTop: 8 }}>{k.catch}</p>
                      {founder.imageUrl && (
                        <p style={{ fontSize: 10.5, color: COLORS.mist, marginTop: 6 }}>
                          肖像：{k.founder}
                          {founder.credit && <span> ／ {founder.credit}</span>}
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
                          <div style={{ fontSize: 11, fontWeight: 700, color, marginBottom: 6, letterSpacing: "0.1em" }}>{label}</div>
                          <ul className="flex flex-col gap-1" style={{ fontSize: 12, lineHeight: 1.6, color: COLORS.ink }}>
                            {items.map((item) => (
                              <li key={item} className="flex gap-1.5">
                                <span style={{ color }}>・</span>
                                <span>{item}</span>
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
                  <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12.5, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>{t.year}</span>
                  <span className="flex-1 min-w-0" style={{ fontSize: 12.5, lineHeight: 1.7, color: COLORS.ink }}>
                    {t.text}
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
            群雄割拠の時代から三国鼎立、そして西晋による統一まで、魏（青）・呉（朱）・蜀（緑）の領土がどう変わったかをアニメーションで確認できます。
          </p>
          <SanguoBorderMap />
        </section>

        <section style={{ marginBottom: 36 }} id="faq">
          <h2 style={sectionHeading}>魏・呉・蜀についてのよくある疑問</h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((f) => (
              <div key={f.q} style={{ ...card, padding: "14px 16px" }}>
                <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                  <span style={{ color: COLORS.vermilion, marginRight: 6 }}>Q.</span>
                  {f.q}
                </h3>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            三国が激突した官渡・赤壁・夷陵・五丈原などの合戦は「三国時代 合戦マップ」で、登場人物の詳しい生涯は人物一覧で紹介しています。
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
