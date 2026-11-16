import { ERAS, stripRuby, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter, findEventBySlug as findEventEntry } from "@/lib/data";
import { BackToTopButton, NavButton, EventListItem, MiscLinksSection, KeyFacts } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const PATH = "/hundred-schools";
const title = "諸子百家とは？儒家・道家・法家・墨家・兵家の思想と系譜をマップで解説";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "春秋戦国時代に登場した諸子百家とは何か。孔子・孟子・荀子の儒家、老子・荘子の道家、商鞅・韓非の法家、墨子の墨家、孫子の兵家などの主張を、師弟関係がひと目でわかる系譜マップと比較表で解説。性善説と性悪説の違いや、焚書坑儒・儒教の国教化を経たその後の行方、日本への影響まで紹介します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: PATH, type: "article" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const h2Style = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 12 };
const pStyle = { fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 };
const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 14 };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const thStyle = { textAlign: "left", fontWeight: 700, color: COLORS.ink, padding: "8px 10px", borderBottom: `1.5px solid ${COLORS.mist}`, whiteSpace: "nowrap" };
const tdStyle = { padding: "8px 10px", borderBottom: "1px solid #DCD3B8", verticalAlign: "top", color: COLORS.inkSoft };

// 学派ごとの色。系譜マップ・カード・比較表で共通に使う
const SCHOOL_COLOR = {
  儒家: COLORS.vermilion,
  道家: COLORS.jade,
  法家: COLORS.ink,
  墨家: COLORS.gold,
  兵家: "#6B5B3E",
};

const KEY_FACTS = [
  { q: "いつ", a: "春秋時代の末〜戦国時代（前6世紀〜前3世紀）" },
  { q: "意味", a: "「諸子」は多くの思想家、「百家」は多くの学派のこと" },
  { q: "主な学派", a: "{{儒家|じゅか}}・{{道家|どうか}}・{{法家|ほうか}}・{{墨家|ぼっか}}・{{兵家|へいか}}・{{縦横家|じゅうおうか}}・{{陰陽家|いんようか}}など" },
  { q: "生まれた理由", a: "周の{{権威|けんい}}が{{衰|おとろ}}え、生き残りをかけた{{諸侯|しょこう}}が身分を問わず有能な人材を求めたため" },
  { q: "その後", a: "{{秦|しん}}は法家を採用して天下を統一し、漢の{{武帝|ぶてい}}以降は儒家が国家の正統な学問となった" },
];

// ---- 系譜マップ ----------------------------------------------------------
const MAP_W = 424;
const COL_X = { 道家: 82, 儒家: 158, 法家: 234, 墨家: 310, 兵家: 386 };
const COL_KEYWORD = { 儒家: "仁・礼", 道家: "無為自然", 法家: "法・賞罰", 墨家: "兼愛・非攻", 兵家: "戦略・兵法" };
const ROWS = [
  { label: "春秋末", y: 80 },
  { label: "戦国前期", y: 150 },
  { label: "戦国中期", y: 220 },
  { label: "戦国後期", y: 290 },
  { label: "戦国末", y: 360 },
  { label: "秦", y: 430 },
];
const NODE_W = 68;
const NODE_H = 40;
const MAP_NODES = [
  { name: "老子", sub: "生没年不詳", school: "道家", row: 0 },
  { name: "孔子", sub: "前551–前479", school: "儒家", row: 0 },
  { name: "孫武", sub: "前6〜前5世紀", school: "兵家", row: 0 },
  { name: "墨子", sub: "前470–前390", school: "墨家", row: 1 },
  { name: "荘子", sub: "前369–前286", school: "道家", row: 2 },
  { name: "孟子", sub: "前372–前289", school: "儒家", row: 2 },
  { name: "商鞅", sub: "?–前338", school: "法家", row: 2 },
  { name: "孫臏", sub: "前4世紀", school: "兵家", row: 2 },
  { name: "荀子", sub: "前313–前238", school: "儒家", row: 3 },
  { name: "韓非", sub: "?–前233", school: "法家", row: 4 },
  { name: "李斯", sub: "?–前208・丞相", school: "法家", row: 5 },
];
const FATE = {
  道家: ["黄老思想", "→道教へ"],
  儒家: ["漢で正統に", "→朱子学"],
  法家: ["秦の統一を", "支える"],
  墨家: ["秦漢以降", "ほぼ途絶"],
  兵家: ["兵法書として", "読み継がれる"],
};

function SchoolsMap() {
  const serif = "var(--font-serif), serif";
  const top = (row) => ROWS[row].y - NODE_H / 2;
  const bottom = (row) => ROWS[row].y + NODE_H / 2;
  // 線の途中に置くラベル。背景を敷いて線の上でも読めるようにする
  const label = (x, y, text) => (
    <g>
      <rect x={x - (text.length * 9.5 + 8) / 2} y={y - 8} width={text.length * 9.5 + 8} height={15} fill="#FBF8F0" />
      <text x={x} y={y + 3.5} textAnchor="middle" fontSize={9.5} fill={COLORS.inkSoft} style={{ fontFamily: serif }}>
        {text}
      </text>
    </g>
  );
  const fateY = 476;

  return (
    <figure style={{ margin: 0, ...cardStyle, padding: "12px 8px" }}>
      <svg viewBox={`0 0 ${MAP_W} 540`} role="img" aria-labelledby="schools-map-title" style={{ width: "100%", maxWidth: 520, display: "block", margin: "0 auto" }}>
        <title id="schools-map-title">
          諸子百家の系譜マップ。道家は老子から荘子へ、儒家は孔子から孟子・荀子へ、荀子の弟子の韓非と李斯が法家を大成、商鞅の法治も韓非に受け継がれ、兵家は孫武から孫臏へ続く
        </title>
        <defs>
          <marker id="schools-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={COLORS.inkSoft} />
          </marker>
        </defs>

        {/* 時代の行と区切り線 */}
        {ROWS.map((r, i) => (
          <g key={r.label}>
            {i > 0 && <line x1={4} y1={r.y - 35} x2={MAP_W - 4} y2={r.y - 35} stroke="#E6DCC2" strokeDasharray="3 3" />}
            <text x={4} y={r.y + 3.5} fontSize={9.5} fill={COLORS.gold} style={{ fontFamily: serif }}>
              {r.label}
            </text>
          </g>
        ))}
        <line x1={4} y1={fateY - 12} x2={MAP_W - 4} y2={fateY - 12} stroke={COLORS.mist} />
        <text x={4} y={fateY + 29} fontSize={9.5} fill={COLORS.gold} style={{ fontFamily: serif }}>
          その後
        </text>

        {/* 学派の見出し */}
        {Object.entries(COL_X).map(([school, x]) => (
          <g key={school}>
            <rect x={x - NODE_W / 2} y={6} width={NODE_W} height={22} fill={SCHOOL_COLOR[school]} />
            <text x={x} y={21.5} textAnchor="middle" fontSize={13} fontWeight={700} fill="#FBF8F0" style={{ fontFamily: serif, letterSpacing: "0.1em" }}>
              {school}
            </text>
            <text x={x} y={44} textAnchor="middle" fontSize={9.5} fill={SCHOOL_COLOR[school]} style={{ fontFamily: serif }}>
              {COL_KEYWORD[school]}
            </text>
          </g>
        ))}

        {/* 系譜の線 */}
        <g stroke={COLORS.inkSoft} strokeWidth={1.2} fill="none">
          <line x1={COL_X.道家} y1={bottom(0)} x2={COL_X.道家} y2={top(2) - 1} markerEnd="url(#schools-arrow)" />
          <line x1={COL_X.儒家} y1={bottom(0)} x2={COL_X.儒家} y2={top(2) - 1} markerEnd="url(#schools-arrow)" />
          <line x1={COL_X.兵家} y1={bottom(0)} x2={COL_X.兵家} y2={top(2) - 1} markerEnd="url(#schools-arrow)" />
          <line x1={COL_X.法家} y1={bottom(2)} x2={COL_X.法家} y2={top(4) - 1} markerEnd="url(#schools-arrow)" />
          <line x1={COL_X.儒家} y1={bottom(2) + 1} x2={COL_X.儒家} y2={top(3) - 1} strokeDasharray="4 3" markerStart="url(#schools-arrow)" markerEnd="url(#schools-arrow)" />
          {/* 荀子から弟子の韓非・李斯へ */}
          <path d={`M${COL_X.儒家},${bottom(3)} V${ROWS[5].y} H${COL_X.法家 - NODE_W / 2 - 1}`} markerEnd="url(#schools-arrow)" />
          <line x1={COL_X.儒家} y1={ROWS[4].y} x2={COL_X.法家 - NODE_W / 2 - 1} y2={ROWS[4].y} markerEnd="url(#schools-arrow)" />
        </g>
        {label(COL_X.道家, 150, "老荘思想")}
        {label(COL_X.儒家, 150, "思想を継承")}
        {label(COL_X.兵家, 150, "子孫とされる")}
        {label(COL_X.儒家, 255, "性善⇔性悪")}
        {label(COL_X.法家, 290, "法治を理論化")}
        {label(COL_X.儒家, 395, "弟子")}

        {/* 人物 */}
        {MAP_NODES.map((n) => {
          const x = COL_X[n.school];
          const y = ROWS[n.row].y;
          return (
            <g key={n.name}>
              <rect x={x - NODE_W / 2} y={y - NODE_H / 2} width={NODE_W} height={NODE_H} fill="#fff" stroke={SCHOOL_COLOR[n.school]} strokeWidth={1.5} />
              <text x={x} y={y - 2} textAnchor="middle" fontSize={15} fontWeight={700} fill={COLORS.ink} style={{ fontFamily: serif }}>
                {n.name}
              </text>
              <text x={x} y={y + 14} textAnchor="middle" fontSize={8.5} fill={COLORS.inkSoft} style={{ fontFamily: serif }}>
                {n.sub}
              </text>
            </g>
          );
        })}

        {/* その後の行方 */}
        {Object.entries(FATE).map(([school, lines]) => {
          const x = COL_X[school];
          return (
            <g key={school}>
              <rect x={x - NODE_W / 2} y={fateY} width={NODE_W} height={48} fill="none" stroke={SCHOOL_COLOR[school]} strokeDasharray="3 2" />
              {lines.map((t, i) => (
                <text key={t} x={x} y={fateY + 20 + i * 15} textAnchor="middle" fontSize={9.5} fill={COLORS.ink} style={{ fontFamily: serif }}>
                  {t}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
      <figcaption style={{ fontSize: 11, color: COLORS.mist, marginTop: 8, textAlign: "center" }}>
        実線の矢印は師弟・思想の継承、点線は対立する説を表す。生没年はおおよそで、諸説ある。
      </figcaption>
    </figure>
  );
}

// ---- 主要5学派 ------------------------------------------------------------
const SCHOOLS = [
  {
    school: "儒家",
    ruby: "じゅか",
    figures: "{{孔子|こうし}}・{{孟子|もうし}}・{{荀子|じゅんし}}",
    books: "『{{論語|ろんご}}』『{{孟子|もうし}}』『{{荀子|じゅんし}}』",
    key: "{{仁|じん}}と{{礼|れい}}による、徳の政治",
    body: [
      "{{孔子|こうし}}は、周の初めの礼楽制度を理想とし、人を思いやる心「{{仁|じん}}」と、それを社会の秩序として形にした「{{礼|れい}}」を身につけた君子が国を治める政治（{{徳治|とくち}}主義）を説いた。生前は{{魯|ろ}}をはじめ諸国を巡って登用を求めたが重く用いられず、晩年は弟子の教育に力を注いだ。その言行は弟子たちによって『{{論語|ろんご}}』にまとめられた。",
      "戦国時代の{{孟子|もうし}}は、人の本性は善であるとする「{{性善説|せいぜんせつ}}」に立ち、武力ではなく徳で治める{{王道|おうどう}}政治を主張した。民を苦しめる君主は天命を失い、交代させられても仕方がないという{{易姓革命|えきせいかくめい}}の考えも示している。一方、{{荀子|じゅんし}}は人の本性は利己的だとする「{{性悪説|せいあくせつ}}」を唱え、{{礼|れい}}による教育と規範で人を正すべきだとした。この考えは弟子の{{韓非|かんぴ}}・{{李斯|りし}}を通じて法家へとつながっていく。",
    ],
    quote: { text: "{{己|おのれ}}の{{欲|ほっ}}せざる{{所|ところ}}は人に{{施|ほどこ}}すこと{{勿|なか}}れ", source: "『論語』" },
    idioms: "{{温故知新|おんこちしん}}（論語）、{{五十歩百歩|ごじっぽひゃっぽ}}（孟子）、{{出藍|しゅつらん}}の{{誉|ほま}}れ（荀子）",
    links: [
      { kind: "event", slug: "chunqiu--3" },
      { kind: "person", href: "/people/chunqiu/孔子", label: "{{孔子|こうし}}の生涯を読む" },
    ],
  },
  {
    school: "道家",
    ruby: "どうか",
    figures: "{{老子|ろうし}}・{{荘子|そうし}}",
    books: "『{{老子|ろうし}}（{{道徳経|どうとくきょう}}）』『{{荘子|そうし}}』",
    key: "{{無為自然|むいしぜん}}——作為を捨てて自然に従う",
    body: [
      "{{老子|ろうし}}は、宇宙と万物の根源を「{{道|どう}}（タオ）」と呼び、儒家の説く人為的な道徳や制度こそが争いを生むと考えた。君主は余計なことをせず（{{無為|むい}}）、民の自然な営みに任せるべきだとし、小さな国に少ない民が素朴に暮らす「{{小国寡民|しょうこくかみん}}」を理想とした。ただし老子の実在や生没年ははっきりせず、『{{老子|ろうし}}』も長い時間をかけて多くの人の手で成立したと考えられている。",
      "{{荘子|そうし}}は、善悪・美醜・生死といった区別は人間の立場から見た相対的なものにすぎないとする「{{万物斉同|ばんぶつせいどう}}」を説き、何ものにもとらわれない自由な生き方を数々の{{寓話|ぐうわ}}で描いた。二人の思想は「{{老荘|ろうそう}}思想」と呼ばれ、漢の初めには「{{黄老|こうろう}}思想」として政治にも用いられたほか、のちに民間信仰と結びついて{{道教|どうきょう}}の源流の一つとなった。",
    ],
    quote: { text: "{{上善|じょうぜん}}は水の{{如|ごと}}し", source: "『老子』" },
    idioms: "{{胡蝶|こちょう}}の夢（荘子）、{{朝三暮四|ちょうさんぼし}}（荘子）",
    links: [],
  },
  {
    school: "法家",
    ruby: "ほうか",
    figures: "{{商鞅|しょうおう}}・{{韓非|かんぴ}}・{{李斯|りし}}",
    books: "『{{商君書|しょうくんしょ}}』『{{韓非子|かんぴし}}』",
    key: "{{法|ほう}}と{{賞罰|しょうばつ}}で国を治める{{法治|ほうち}}主義",
    body: [
      "法家は、君主の徳や人々の道徳心に頼るのではなく、誰にでも同じように適用される法と、厳格な{{賞罰|しょうばつ}}によって国を治めるべきだと考えた。{{秦|しん}}の{{孝公|こうこう}}に仕えた{{商鞅|しょうおう}}は、{{什伍|じゅうご}}の制（連帯責任）や、軍功に応じて{{爵位|しゃくい}}を与える制度などの改革（{{変法|へんぽう}}）を{{断行|だんこう}}し、西方の後進国だった秦を強国へと変えた。",
      "戦国末の{{韓非|かんぴ}}は、商鞅の「法」に、臣下を操る「{{術|じゅつ}}」、君主の権勢である「{{勢|せい}}」を合わせて法家思想を大成した。その著作に感銘を受けた{{秦王|しんおう}}{{政|せい}}（のちの{{始皇帝|しこうてい}}）に{{招|まね}}かれたが、同門の{{李斯|りし}}らに{{陥|おとしい}}れられ、獄中で命を落としたと『史記』は伝える。李斯は始皇帝の{{丞相|じょうしょう}}として郡県制や文字・{{度量衡|どりょうこう}}の統一、{{焚書坑儒|ふんしょこうじゅ}}を進め、法家思想を統一国家の制度として形にした。",
    ],
    quote: null,
    idioms: "{{矛盾|むじゅん}}、{{守株|しゅしゅ}}（株を守りて{{兎|うさぎ}}を待つ）、{{逆鱗|げきりん}}に{{触|ふ}}れる（いずれも韓非子）",
    links: [
      { kind: "event", slug: "zhanguo--1" },
      { kind: "event", slug: "qin--3" },
    ],
  },
  {
    school: "墨家",
    ruby: "ぼっか",
    figures: "{{墨子|ぼくし}}",
    books: "『{{墨子|ぼくし}}』",
    key: "{{兼愛|けんあい}}と{{非攻|ひこう}}——分け{{隔|へだ}}てない愛と侵略戦争の否定",
    body: [
      "{{墨子|ぼくし}}は、儒家の説く愛は家族や身分の近い者を優先する「差別のある愛」だと批判し、すべての人を分け隔てなく愛する「{{兼愛|けんあい}}」を唱えた。また他国への侵略戦争を否定する「{{非攻|ひこう}}」を{{掲|かか}}げ、儒家が重んじる{{盛大|せいだい}}な葬儀や音楽も民の負担になるとして退けた。",
      "墨家は単なる思想家の集まりではなく、厳しい規律で結ばれた集団で、攻められた小国に{{駆|か}}けつけて{{籠城|ろうじょう}}戦を指揮する防衛の専門家でもあった。戦国時代には儒家と並んで「{{儒墨|じゅぼく}}」と呼ばれるほどの一大勢力だったが、統一国家が生まれた秦漢以降は急速に{{衰|おとろ}}え、ほぼ{{途絶|とだ}}えてしまった。",
    ],
    quote: { text: "天下の利を{{興|おこ}}し、天下の害を{{除|のぞ}}く", source: "『墨子』" },
    idioms: "{{墨守|ぼくしゅ}}（墨子が{{楚|そ}}の攻城を防ぎきった故事から、自分の考えを固く守ること）",
    links: [],
  },
  {
    school: "兵家",
    ruby: "へいか",
    figures: "{{孫武|そんぶ}}・{{孫臏|そんぴん}}",
    books: "『{{孫子|そんし}}』『{{孫臏兵法|そんぴんへいほう}}』",
    key: "戦わずして勝つ——戦争を合理的に考える",
    body: [
      "兵家は、戦争の勝敗を天運ではなく、情報・地形・補給・士気といった条件から合理的に分析した学派である。春秋末に{{呉王|ごおう}}{{闔閭|こうりょ}}に仕えたとされる{{孫武|そんぶ}}の『{{孫子|そんし}}』は、実際に戦う前に外交や{{謀略|ぼうりゃく}}で相手を屈服させることを最上の策とした。",
      "戦国時代の{{孫臏|そんぴん}}は孫武の子孫とされ、{{斉|せい}}の軍師として{{桂陵|けいりょう}}・{{馬陵|ばりょう}}の戦いで{{魏|ぎ}}を破った。その兵法書は長く失われていたが、1972年に山東省の{{銀雀山|ぎんじゃくざん}}漢墓から竹簡が見つかり、二千年ぶりに姿を現した。『孫子』は今も経営書として読み継がれ、日本でも戦国武将・{{武田信玄|たけだしんげん}}の旗印「{{風林火山|ふうりんかざん}}」が『孫子』の一節に由来することで知られる。",
    ],
    quote: { text: "{{彼|かれ}}を知り{{己|おのれ}}を知れば{{百戦|ひゃくせん}}{{殆|あや}}うからず", source: "『孫子』" },
    idioms: "{{呉越同舟|ごえつどうしゅう}}（孫子）、{{背水|はいすい}}の{{陣|じん}}（『孫子』の兵法を{{韓信|かんしん}}が応用）",
    links: [],
  },
];

const OTHER_SCHOOLS = [
  {
    name: "{{縦横家|じゅうおうか}}",
    figures: "{{蘇秦|そしん}}・{{張儀|ちょうぎ}}",
    body: "諸国を渡り歩いて外交策を説いた弁論家たち。『史記』によれば、蘇秦は六国が同盟して秦に対抗する「{{合従|がっしょう}}」を、張儀は六国がそれぞれ秦と手を結ぶ「{{連衡|れんこう}}」を説いた。「{{合従連衡|がっしょうれんこう}}」の語源だが、二人の活動年代には近年の研究で疑問も出ている。",
  },
  {
    name: "{{陰陽家|いんようか}}",
    figures: "{{鄒衍|すうえん}}",
    body: "万物を{{陰|いん}}と{{陽|よう}}、木・火・土・金・水の五つの要素で説明する{{陰陽五行説|いんようごぎょうせつ}}を唱えた。王朝の交代も五行の循環で説明し、秦は自らを「水」の{{徳|とく}}をもつ王朝と称した。日本の{{陰陽道|おんみょうどう}}にも影響を与えている。",
  },
  {
    name: "{{名家|めいか}}",
    figures: "{{公孫龍|こうそんりゅう}}・{{恵施|けいし}}",
    body: "言葉と実体の関係を分析した論理学の学派。公孫龍の「{{白馬|はくば}}は馬に{{非|あら}}ず」（「白馬」という概念は「馬」という概念と同じではない）という議論が有名で、{{詭弁|きべん}}の代名詞にもなった。",
  },
  {
    name: "{{農家|のうか}}",
    figures: "{{許行|きょこう}}",
    body: "農業を国の根本とし、君主も民とともに自ら耕して暮らすべきだと説いた。身分による分業を否定したため、『孟子』の中で厳しく批判されている。",
  },
  {
    name: "{{雑家|ざっか}}",
    figures: "{{呂不韋|りょふい}}",
    body: "諸学派の説を取り入れて総合した学派。秦の{{相国|しょうこく}}呂不韋が{{食客|しょっかく}}に編ませた『{{呂氏春秋|りょししゅんじゅう}}』が代表で、一字でも直せる者には千金を与えると{{豪語|ごうご}}した「{{一字千金|いちじせんきん}}」の故事を生んだ。",
  },
];

// ---- 比較表 ---------------------------------------------------------------
const COMPARISON = [
  { label: "理想の政治", 儒家: "徳と礼による政治（{{徳治|とくち}}）", 道家: "何もしない政治（{{無為|むい}}の治）", 法家: "法と賞罰による政治（{{法治|ほうち}}）", 墨家: "兼愛と倹約による政治" },
  { label: "人間の見方", 儒家: "孟子は{{性善説|せいぜんせつ}}、荀子は{{性悪説|せいあくせつ}}", 道家: "作為を捨てれば自然と調和する", 法家: "人は利益を求め罰を恐れる", 墨家: "誰もが互いに愛し合える" },
  { label: "儒家への態度", 儒家: "—", 道家: "道徳は人為で争いの元", 法家: "徳では国は治まらない", 墨家: "身内びいきの愛だと批判" },
  { label: "採用した国・時代", 儒家: "漢の武帝以降の歴代王朝", 道家: "漢の初め（{{黄老|こうろう}}思想）", 法家: "{{秦|しん}}", 墨家: "国家には採用されず" },
];

// ---- その後の流れ ---------------------------------------------------------
const AFTERMATH = [
  { year: "前4世紀", text: "{{斉|せい}}の都・{{臨淄|りんし}}の{{稷門|しょくもん}}に学者が集められ、「{{稷下|しょくか}}の学」として諸学派が論争を繰り広げる" },
  { year: "前356年", text: "{{商鞅|しょうおう}}の{{変法|へんぽう}}。法家の政策で秦が強国になる", slug: "zhanguo--1" },
  { year: "前221年", text: "法家の思想を採用した秦が天下を統一" },
  { year: "前213年", text: "{{焚書坑儒|ふんしょこうじゅ}}。法家以外の思想書が統制される", slug: "qin--3" },
  { year: "前134年", text: "{{董仲舒|とうちゅうじょ}}の献策で、儒学が漢の正統な学問に（いわゆる儒教の国教化）", slug: "westernhan--5" },
  { year: "2世紀", text: "後漢末に{{太平道|たいへいどう}}・{{五斗米道|ごとべいどう}}が広まり、道家思想を取り込んだ{{道教|どうきょう}}が形づくられる", eraId: "easternhan" },
  { year: "12世紀", text: "{{南宋|なんそう}}の{{朱熹|しゅき}}が{{朱子学|しゅしがく}}を大成。のちに科挙の公式解釈となる", slug: "southernsong--2" },
];

const FAQ = [
  {
    q: "諸子百家の「百家」は、本当に百の学派があったの？",
    a: "「百」は「数多くの」という意味で、実際に百の学派があったわけではありません。漢代の歴史書『漢書』芸文志は、儒家・道家・陰陽家・法家・名家・墨家・縦横家・雑家・農家・小説家の十の学派（九流十家）に整理しています。兵家は兵法書として別に分類されました。",
  },
  {
    q: "なぜ春秋戦国時代に多くの思想家が現れたの？",
    a: "周王室の権威が衰え、諸侯が生き残りをかけて争うようになると、各国は富国強兵のために身分を問わず有能な人材を求めました。思想家たちは諸国を巡って君主に自説を売り込み（遊説）、斉の「稷下の学」のように国が学者を集めて厚遇する例も生まれました。",
  },
  {
    q: "性善説と性悪説の違いは？",
    a: "どちらも儒家の説です。孟子の性善説は、人には生まれつき善の芽（思いやりの心など）があり、それを育てれば徳のある人になれるという考え。荀子の性悪説は、人は生まれつき利己的なので、礼による教育で後天的に正す必要があるという考えです。性悪説は「人は悪人だ」という意味ではなく、努力と教育の大切さを説いたものです。",
  },
  {
    q: "最終的にどの学派が勝ったの？",
    a: "天下を統一した秦は法家を採用しましたが、厳しすぎる統治もあって15年で滅びました。続く漢では、武帝の時代に儒学が国家の正統な学問とされ、以後二千年以上、中国の政治と科挙の中心に置かれます。ただし実際の統治は法家的な制度も使い続けたため、「表は儒家、裏は法家（外儒内法）」とも言われます。",
  },
  {
    q: "日本にはどんな影響があった？",
    a: "『論語』は古代に日本へ伝わり、江戸時代には朱子学が幕府の正統な学問とされました。明治の実業家・渋沢栄一の『論語と算盤』も有名です。また武田信玄の「風林火山」は『孫子』の一節から、「矛盾」「温故知新」「呉越同舟」などの日常の言葉も諸子百家の書物から生まれています。",
  },
];

// lib/data の findEventBySlug は { event, era } を返すので、出来事だけを取り出す
const findEventBySlug = (slug) => findEventEntry(slug)?.event ?? null;

function resolveLink(link) {
  if (link.kind === "event") {
    const event = findEventBySlug(link.slug);
    return event ? { href: `/events/${event.slug}`, label: `${event.title}を年表で読む` } : null;
  }
  return link;
}

const ZHANGUO_ERA = ERAS.find((e) => e.id === "zhanguo");
const PEAK_EVENT = findEventBySlug("zhanguo--2");

export default function HundredSchoolsPage() {
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
      { "@type": "ListItem", position: 2, name: "諸子百家とは", item: `${SITE_URL}${PATH}` },
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
          <ruby>諸子百家<rt>しょしひゃっか</rt></ruby>とは？
          <span style={{ display: "block", fontSize: 17, marginTop: 4 }}>思想の系譜をマップで読む</span>
        </h1>
        <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "var(--font-serif), serif", marginBottom: 14 }}>
          春秋時代末〜戦国時代（前6世紀〜前3世紀）
        </div>

        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 20 }}>
          <RubyText
            text={
              "周王室の{{権威|けんい}}が失われ、{{諸侯|しょこう}}が互いに{{覇|は}}を競った春秋戦国時代。各国が富国強兵のために身分を問わず有能な人材を求めるなか、" +
              "「どうすれば国はうまく治まるのか」「人はどう生きるべきか」を説く思想家が次々と現れた。彼らとその学派をまとめて「{{諸子百家|しょしひゃっか}}」と呼ぶ。" +
              "ここで生まれた{{儒家|じゅか}}・{{道家|どうか}}・{{法家|ほうか}}などの思想は、その後二千年以上にわたって中国の政治と文化の土台となり、日本を含む東アジア全体に大きな影響を与えた。"
            }
          />
        </p>

        <KeyFacts heading="諸子百家の基本データ" items={KEY_FACTS} />

        <section className="mb-10">
          <h2 style={h2Style}>諸子百家の系譜マップ</h2>
          <p style={pStyle}>
            <RubyText text="主要5学派の思想家を、活躍した時代順に並べた。{{荀子|じゅんし}}の弟子から法家の{{韓非|かんぴ}}・{{李斯|りし}}が出たように、学派どうしは師弟関係や批判を通じてつながっている。" />
          </p>
          <SchoolsMap />
        </section>

        <section className="mb-10">
          <h2 style={h2Style}>主要5学派の思想</h2>
          <div className="flex flex-col gap-5">
            {SCHOOLS.map((s) => {
              const color = SCHOOL_COLOR[s.school];
              const links = s.links.map(resolveLink).filter(Boolean);
              return (
                <article key={s.school} id={stripRuby(s.ruby)} style={{ ...cardStyle, borderTop: `3px solid ${color}` }}>
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 18, fontWeight: 900, color }}>
                      <ruby>{s.school}<rt>{s.ruby}</rt></ruby>
                    </h3>
                    <span style={{ fontSize: 11.5, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>
                      <RubyText text={s.figures} />
                    </span>
                  </div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: COLORS.ink, marginTop: 6, marginBottom: 8 }}>
                    <RubyText text={s.key} />
                  </p>
                  {s.body.map((para, i) => (
                    <p key={i} style={pStyle}>
                      <RubyText text={para} />
                    </p>
                  ))}
                  {s.quote && (
                    <blockquote style={{ borderLeft: `3px solid ${color}`, padding: "4px 12px", margin: "4px 0 10px", fontFamily: "var(--font-serif), serif", fontSize: 14, color: COLORS.ink }}>
                      <RubyText text={`「${s.quote.text}」`} />
                      <span style={{ fontSize: 11, color: COLORS.inkSoft, marginLeft: 6 }}>{s.quote.source}</span>
                    </blockquote>
                  )}
                  <dl style={{ fontSize: 12, lineHeight: 1.8, color: COLORS.inkSoft }}>
                    <div className="flex gap-2">
                      <dt className="shrink-0" style={{ fontWeight: 700, color: COLORS.ink }}>主な書物</dt>
                      <dd><RubyText text={s.books} /></dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="shrink-0" style={{ fontWeight: 700, color: COLORS.ink }}>生まれた言葉</dt>
                      <dd><RubyText text={s.idioms} /></dd>
                    </div>
                  </dl>
                  {links.length > 0 && (
                    <div className="flex flex-col gap-1" style={{ marginTop: 10, fontSize: 12 }}>
                      {links.map((l) => (
                        <a key={l.href} href={l.href} style={linkStyle}>
                          <RubyText text={l.label} /> →
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="mb-10">
          <h2 style={h2Style}>儒家・道家・法家・墨家の違い</h2>
          <div style={{ overflowX: "auto", ...cardStyle, padding: 0 }}>
            <table style={{ width: "100%", minWidth: 560, borderCollapse: "collapse", fontSize: 12, lineHeight: 1.7 }}>
              <thead>
                <tr>
                  <th style={thStyle}></th>
                  {["儒家", "道家", "法家", "墨家"].map((s) => (
                    <th key={s} style={{ ...thStyle, color: SCHOOL_COLOR[s] }}>{s}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" style={{ ...tdStyle, fontWeight: 700, color: COLORS.ink, whiteSpace: "nowrap" }}>{row.label}</th>
                    {["儒家", "道家", "法家", "墨家"].map((s) => (
                      <td key={s} style={tdStyle}><RubyText text={row[s]} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 style={h2Style}>そのほかの学派</h2>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
            {OTHER_SCHOOLS.map((o) => (
              <div key={o.name} style={cardStyle}>
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={o.name} />
                  </span>
                  <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>
                    <RubyText text={o.figures} />
                  </span>
                </div>
                <p style={{ ...pStyle, marginTop: 6, marginBottom: 0 }}>
                  <RubyText text={o.body} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 style={h2Style}>諸子百家のその後</h2>
          <p style={pStyle}>
            <RubyText text="百家が{{争鳴|そうめい}}した時代は、秦の統一で終わりを迎える。思想どうしの競争は、どの学派が国家に採用されるかという形で決着していった。" />
          </p>
          <ol style={{ ...cardStyle, listStyle: "none", margin: 0 }}>
            {AFTERMATH.map((a) => {
              const event = a.slug ? findEventBySlug(a.slug) : null;
              const href = event ? `/events/${event.slug}` : a.eraId ? `/eras/${a.eraId}` : null;
              return (
                <li key={a.year} className="flex gap-3" style={{ fontSize: 12.5, lineHeight: 1.8, padding: "6px 0", borderBottom: "1px solid #E6DCC2" }}>
                  <span className="shrink-0" style={{ width: 64, fontFamily: "var(--font-serif), serif", fontWeight: 700, color: COLORS.vermilion }}>
                    {a.year}
                  </span>
                  <span style={{ color: COLORS.inkSoft }}>
                    <RubyText text={a.text} />
                    {href && (
                      <>
                        {" "}
                        <a href={href} style={linkStyle}>{event ? "詳しく" : "時代を見る"}</a>
                      </>
                    )}
                  </span>
                </li>
              );
            })}
          </ol>
          {PEAK_EVENT && ZHANGUO_ERA && (
            <div style={{ marginTop: 14 }}>
              <EventListItem event={PEAK_EVENT} eraName={ZHANGUO_ERA.name} />
            </div>
          )}
        </section>

        <section className="mb-10">
          <h2 style={h2Style}>よくある質問</h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((f) => (
              <div key={f.q} style={cardStyle}>
                <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>Q. {f.q}</h3>
                <p style={{ ...pStyle, marginBottom: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            <RubyText text="諸子百家から生まれた言葉は故事成語のページで、法家を採用した{{始皇帝|しこうてい}}や、韓非・李斯が登場する漫画『キングダム』の史実も別ページで紹介しています。" />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/idioms" variant="solid">故事成語を見る</NavButton>
            <NavButton href="/qinshihuang" variant="outline">始皇帝とは</NavButton>
            <NavButton href="/kingdom" variant="outline">キングダムと史実</NavButton>
            <NavButton href="/keju" variant="outline">科挙とは</NavButton>
          </div>
        </section>

        <RelatedEraGuides path={PATH} />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
