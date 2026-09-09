import { ERAS, stripRuby, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageGrid, EventListItem, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

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

const heritageItems = eventUnification?.heritage?.filter((h) => ["兵馬俑", "秦始皇陵"].some((k) => stripRuby(h.name).includes(k))) || [];

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
    role: "丞相・後見人",
    text: "元は大商人。人質だった始皇帝の父を秦に帰国・即位させた黒幕とされ、幼くして即位した始皇帝の後見として長らく実権を握った。始皇帝の親政開始後に失脚し、自ら命を絶った。",
  },
  {
    name: "{{李斯|りし}}",
    role: "丞相・法家",
    text: "法家思想を実務に落とし込んだ始皇帝の腹心。郡県制の導入や度量衡・文字の統一、焚書坑儒を推し進めた中心人物だが、始皇帝の死後は趙高に取り込まれ、最後は趙高の讒言により処刑された。",
  },
  {
    name: "{{蒙恬|もうてん}}",
    role: "将軍",
    text: "北方の{{匈奴|きょうど}}を討って万里の長城の修築を指揮した秦の名将。始皇帝の死後、偽の遺詔により自害を強いられ、長城建設の労苦を思い「天に対して罪がある」と嘆いたと伝えられる。",
  },
  {
    name: "{{扶蘇|ふそ}}",
    role: "長子",
    text: "始皇帝の長男で、焚書坑儒を諫めたとされる温厚な人物。本来の後継候補だったが、始皇帝の死後に趙高・李斯が仕組んだ偽の遺詔により自害を命じられ、弟の胡亥に帝位を奪われた。",
  },
  {
    name: "{{胡亥|こがい}}",
    role: "二世皇帝",
    text: "始皇帝の末子。趙高の擁立で即位すると趙高の傀儡と化し、重税と圧政を続けた末、各地の反乱の責任を問われる形で趙高に自害へ追い込まれた。",
  },
  {
    name: "{{趙高|ちょうこう}}",
    role: "宦官",
    text: "始皇帝の死に際して李斯と共謀し遺詔を偽造した張本人。胡亥擁立後は権力を恣にし、鹿を馬と言い張って群臣の忠誠を試した「{{指鹿為馬|しろくいば}}」の故事でも知られる。最後は自らが擁立した子嬰に誅殺された。",
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
      { "@type": "ListItem", position: 2, name: "始皇帝とは", item: `${SITE_URL}/qinshihuang` },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 6 }}>
          始皇帝とは？
        </h1>
        <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif", marginBottom: 14 }}>
          前259年 – 前210年　秦王：前247年-前221年　皇帝：前221年-前210年
        </div>

        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }} id="towa">
          <RubyText
            text={
              "始皇帝は、紀元前221年に中国史上はじめて天下を統一し、王に代わる「皇帝」という称号を自ら創始した人物である。" +
              "姓は{{嬴|えい}}、諱（いみな）は{{政|せい}}といい、秦王として即位した当初は{{秦王政|しんおうせい}}と呼ばれた。" +
              "統一後は「最初の皇帝」を意味する「始皇帝」を自称し、子孫が二世・三世と皇帝の位を万世にわたって継承していくことを望んだ。" +
              "度量衡・貨幣・文字の統一、郡県制による中央集権体制、万里の長城の修築など、その治世に定めた統治の骨格は、" +
              "以後2000年以上続く中国の国家運営の原型となった。一方で{{焚書坑儒|ふんしょこうじゅ}}に代表される過酷な思想統制や、" +
              "長城・陵墓建設のための苛烈な労役から「暴君」とも評され、中国史上もっとも評価の分かれる皇帝の一人とされる。"
            }
          />
        </p>

        <nav
          aria-label="目次"
          style={{ backgroundColor: "#FBF8F0", border: `1px solid #DCD3B8`, padding: "14px 18px", marginBottom: 32 }}
        >
          <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 11, letterSpacing: "0.15em", color: COLORS.gold, marginBottom: 8 }}>
            目次
          </div>
          <ol className="grid gap-x-4 gap-y-1.5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", fontSize: 12.5 }}>
            {[
              ["towa", "始皇帝とは"],
              ["shogai", "始皇帝の生涯"],
              ["touitsu", "中国統一"],
              ["seiji", "秦の政治"],
              ["houka", "法家思想"],
              ["chojo", "万里の長城"],
              ["ryo", "始皇帝陵"],
              ["heibayou", "兵馬俑"],
              ["shi", "始皇帝の死"],
              ["metsubou", "秦の滅亡"],
              ["jinbutsu", "始皇帝に関係する人物"],
              ["dekigoto", "始皇帝に関係する出来事"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section style={{ marginBottom: 32 }} id="shogai">
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 14 }}>
            始皇帝の生涯
          </h2>
          <div className="flex flex-col gap-3">
            {[
              [
                "前259年",
                "趙の都{{邯鄲|かんたん}}で誕生。父は人質として趙に送られていた秦の公子{{異人|いじん}}（後の{{荘襄王|そうじょうおう}}）、母は{{趙姫|ちょうき}}。大商人{{呂不韋|りょふい}}の画策で父が秦に帰国・即位したことで、政も秦の太子となった。",
              ],
              ["前247年", "父荘襄王の死により、わずか13歳で秦王に即位。若年のため丞相{{呂不韋|りょふい}}が後見し、国政を代行した。"],
              [
                "前238年",
                "22歳で親政を開始。母の愛人であった{{嫪毐|ろうあい}}が反乱を起こすとこれを鎮圧し、翌年には後見役だった呂不韋も失脚に追い込んで実権を完全に掌握した。",
              ],
              ["前230年-前221年", "{{李斯|りし}}ら法家の臣を重用し、将軍{{王翦|おうせん}}らを派遣して韓・趙・魏・楚・燕・斉の六国を次々に滅ぼした。"],
              ["前221年", "最後まで抵抗した斉を降し、中国史上初の統一を達成。「皇帝」の称号を創始し、自ら始皇帝と号した。"],
              [
                "前220年-前211年",
                "度量衡・文字・貨幣の統一、郡県制の施行、万里の長城・{{阿房宮|あぼうきゅう}}・自身の陵墓の造営を進め、全土を巡幸。前213年には焚書、翌年には坑儒を断行した。",
              ],
              ["前210年", "5度目の巡幸の途上、河北の{{沙丘|さきゅう}}で急死。享年50。"],
            ].map(([year, text], i) => (
              <div key={i} className="flex gap-3">
                <div
                  className="shrink-0"
                  style={{ width: 108, fontFamily: "'Noto Serif SC', serif", fontSize: 12, color: COLORS.vermilion, paddingTop: 1 }}
                >
                  {year}
                </div>
                <div style={{ fontSize: 12.5, lineHeight: 1.75, color: COLORS.inkSoft, borderLeft: `2px solid ${COLORS.mist}`, paddingLeft: 12 }}>
                  <RubyText text={text} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 28 }} id="touitsu">
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            中国統一
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "秦は長年にわたる{{合従連衡|がっしょうれんこう}}の外交戦を経て着実に国力を蓄え、前260年の{{長平の戦い|ちょうへいのたたかい}}で" +
                "最大の対抗馬であった趙に壊滅的な打撃を与えたことで、統一への道が決定的なものとなった。始皇帝は{{李斯|りし}}ら法家の臣を用いて" +
                "富国強兵をさらに推し進めると、韓（前230年）・趙（前228年）・魏（前225年）・楚（前223年）・燕（前222年）・斉（前221年）の" +
                "順に六国を次々と滅ぼし、前221年、中国史上初めて単一の権力のもとに広大な領域をまとめ上げた。従来の「王」では" +
                "もはや自らの偉業を表すのにふさわしくないとして、伝説上の三皇五帝を超える権威を示すべく「皇帝」という新たな称号を創始し、" +
                "自らを最初の皇帝を意味する始皇帝と号した。この統一は、前403年の三家分晋の公認から数えて約180年、前770年の平王東遷から" +
                "数えるとおよそ550年に及んだ分裂と抗争の時代についに終止符を打つ画期的な出来事であった。"
              }
            />
          </p>
          {eventUnificationZhanguo && (
            <a
              href={`/events/${eventUnificationZhanguo.slug}`}
              style={{ display: "inline-block", fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, marginTop: 10 }}
            >
              「{stripRuby(eventUnificationZhanguo.title)}」を年表で読む →
            </a>
          )}
        </section>

        <section style={{ marginBottom: 28 }} id="seiji">
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            秦の政治
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText
              text={
                "統一後の始皇帝は、周代以来の血縁を基盤とした封建制（分封制）を廃止し、全国を36（後に40余り）の郡に分け、" +
                "その下に県を置く{{郡県制|ぐんけんせい}}を導入した。郡には皇帝が任免する官僚が置かれて世襲は認められず、" +
                "地方勢力が独自の軍事力を蓄えて中央に反旗を翻す危険を未然に防ぐ狙いがあった。あわせて度量衡・貨幣（{{半両銭|はんりょうせん}}）・" +
                "文字（{{小篆|しょうてん}}）に加え、車軌（車輪の幅）まで規格を統一し、分裂していた社会基盤を隅々まで均質化する政策を" +
                "矢継ぎ早に打ち出した。"
              }
            />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "こうした中央集権体制は、皇帝の命令一つで全土を統治する仕組みとして、以後2000年余り続く中国的統治システムの原型となった。" +
                "その一方で、都{{咸陽|かんよう}}近郊に築かせた壮麗な宮殿{{阿房宮|あぼうきゅう}}や、全国を結ぶ幹線道路「{{馳道|ちどう}}」の整備など、" +
                "大規模事業を次々と推し進めたことは民の負担を増大させ、後の秦滅亡の遠因ともなった。"
              }
            />
          </p>
        </section>

        <section style={{ marginBottom: 28 }} id="houka">
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            法家思想
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText
              text={
                "秦は元来、戦国中期の{{商鞅|しょうおう}}による変法以来、法治と信賞必罰を徹底する{{法家|ほうか}}思想を国是としてきた国であり、" +
                "始皇帝もこれを引き継いで丞相{{李斯|りし}}に統治の実務を担わせた。法家は、血縁や身分ではなく明文化された法と厳格な賞罰のみに" +
                "基づいて国を治めるべきだと説き、儒家が重んじる仁愛や礼、旧来の身分秩序を軽視・否定する立場をとった。始皇帝は{{韓非子|かんぴし}}の" +
                "著作を愛読したと伝えられ、法家の徹底した現実主義・中央集権思想は、六国を滅ぼし広大な統一国家をまとめ上げる原動力となった。"
              }
            />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "しかし前213年、丞相李斯の提言により、医薬・占卜・農業に関する実用書と秦の記録を除く諸国の史書や儒家の経典などを焼却させ、" +
                "思想・言論を統制しようとした「焚書」が行われる。翌前212年には、方士が不老不死の仙薬を得られなかったことへの始皇帝の怒りを" +
                "発端に、皇帝を批判したとされる儒者・方士数百人を生き埋めにしたと『{{史記|しき}}』は伝えており、この二つの弾圧はあわせて" +
                "「{{焚書坑儒|ふんしょこうじゅ}}」と呼ばれる。以後の儒教社会において始皇帝が暴君として断罪される最大の根拠の一つとなったが、" +
                "焼却の対象や坑儒の実態については後世の誇張も指摘されており、近年の研究では規模や性格をめぐって様々な議論が続いている。"
              }
            />
          </p>
          {eventBurning && (
            <a
              href={`/events/${eventBurning.slug}`}
              style={{ display: "inline-block", fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, marginTop: 10 }}
            >
              「{stripRuby(eventBurning.title)}」を年表で読む →
            </a>
          )}
        </section>

        <section style={{ marginBottom: 28 }} id="chojo">
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            万里の長城
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "前214年、始皇帝は将軍{{蒙恬|もうてん}}に命じて北方の{{匈奴|きょうど}}を討たせ、戦国時代に燕・趙・秦などが個別に築いていた" +
                "防壁を連結・修築し、西は{{臨洮|りんとう}}（現・甘粛省）から東は{{遼東|りょうとう}}に至る大規模な防衛線を築き上げた。" +
                "工事には全国から徴発された数十万人ともいわれる民衆が動員され、過酷な労役により多くの犠牲者を出したと伝えられる。" +
                "夫を長城建設で失った女性が城壁を泣き崩したという「{{孟姜女|もうきょうじょ}}泣長城」の伝説はこの労苦を象徴する説話として" +
                "後世広く語り継がれ、長城建設への民衆の恨みは秦への不満を高めた一因ともされる。現存する秦代の城壁遺構は少なく、" +
                "現在観光地として知られる長城の多くは明代に大規模改修・増築された部分だが、この時定まった北方防衛線という構想そのものは" +
                "以後の歴代王朝にも受け継がれていった。"
              }
            />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap mt-3">
            {eventGreatWall && (
              <a
                href={`/events/${eventGreatWall.slug}`}
                style={{ fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
              >
                「{stripRuby(eventGreatWall.title)}」を年表で読む →
              </a>
            )}
            <a href="/china-castles" style={{ fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
              中国の城まとめも見る →
            </a>
          </div>
        </section>

        <section style={{ marginBottom: 28 }} id="ryo">
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            始皇帝陵
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 14 }}>
            <RubyText
              text={
                "即位直後から始皇帝は、都{{咸陽|かんよう}}近郊の{{驪山|りざん}}のふもとに、自らの陵墓の造営を開始させたと伝えられる。" +
                "統一後はさらに規模を拡大し、延べ70万人が動員されたとも『{{史記|しき}}』は記す。歴史書には、地下宮殿の中に水銀で川や海を" +
                "再現し、天井には夜空に見立てて真珠がちりばめられ、侵入者を射抜く仕掛けの弩まで備えられていた、との記述が残る。" +
                "荒唐無稽な伝説のようにも思えるが、現代の調査では墳丘周辺の土壌から通常より高い濃度の水銀が検出されたとの報告もあり、" +
                "盗掘や保存技術の限界に加えた未知のリスクへの懸念もあって、地下宮殿本体の本格的な発掘は現在も見送られたままとなっている。"
              }
            />
          </p>
          {heritageItems.length > 0 && <HeritageGrid items={heritageItems} eraId="qin" />}
          <a
            href="/terracotta-army"
            style={{ display: "inline-block", fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, marginTop: 12 }}
          >
            始皇帝陵・兵馬俑にまつわる謎の詳しい解説を見る →
          </a>
        </section>

        <section style={{ marginBottom: 28 }} id="heibayou">
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            兵馬俑
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "兵馬俑は、始皇帝陵の副葬（陪葬）として陵墓の東側に配置された、等身大の陶製兵士・軍馬・戦車の像群である。" +
                "1974年、{{陝西省|せんせいしょう}}{{臨潼|りんとう}}の農民が井戸を掘っていたところ偶然発見され、20世紀最大級の考古学的発見の" +
                "一つとして世界中に知られることになった。発掘された3つの坑からは推定8000体以上の像が見つかっており、一体ずつ顔つきが" +
                "異なる点や、当初は鮮やかに彩色されていた点でも知られる。あの世でも死後の始皇帝を守護する軍団として作られたと考えられて" +
                "おり、1987年には{{秦始皇陵|しんしこうていりょう}}とあわせてユネスコの世界遺産に登録された。"
              }
            />
          </p>
        </section>

        <section style={{ marginBottom: 28 }} id="shi">
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            始皇帝の死
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText
              text={
                "始皇帝は前210年、5度目となる全国巡幸の途上、河北の{{沙丘|さきゅう}}で急死した。享年50。正史『{{史記|しき}}』は死因を明記して" +
                "おらず、単に病没とのみ記す。晩年の始皇帝は死への強い恐れから不老不死を追い求め、方士に命じて仙薬を探させており、" +
                "水銀を含む「仙薬」を服用し続けたことによる中毒死説が有力視されているが、巡幸の疲労や持病による病死説もあり、確たる結論は" +
                "出ていない。方士{{徐福|じょふく}}が「東方の{{蓬莱|ほうらい}}の島に仙薬がある」と説いて数千人を率いて船出したものの、二度と" +
                "戻らなかったという伝説もこの時期のものである。"
              }
            />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "側近の宦官{{趙高|ちょうこう}}と丞相{{李斯|りし}}は、巡幸に同行していなかった長子{{扶蘇|ふそ}}が即位すれば自分たちの立場が" +
                "危うくなることを恐れ、始皇帝の死を隠したまま偽の遺詔を作成する（「沙丘の変」）。遺体の腐敗による異臭をごまかすため、" +
                "車列に大量の塩漬け魚を積ませて隠し通したという逸話も伝わる。都に戻ると偽の遺詔により扶蘇と将軍{{蒙恬|もうてん}}に自害を" +
                "命じ、末子{{胡亥|こがい}}を二世皇帝として擁立した。"
              }
            />
          </p>
        </section>

        <section style={{ marginBottom: 28 }} id="metsubou">
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            秦の滅亡
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText
              text={
                "趙高の擁立で即位した二世皇帝{{胡亥|こがい}}は趙高の傀儡と化し、重税と過酷な法をそのまま継続した。趙高はやがて丞相李斯をも" +
                "讒言により処刑して権力を独占し、群臣の忠誠を試すため鹿を馬と言い張ったという「{{指鹿為馬|しろくいば}}」の故事はこの頃の" +
                "専横ぶりを象徴する逸話として知られる。前209年、辺境警備に徴発された農民{{陳勝|ちんしょう}}・{{呉広|ごこう}}が、大雨で" +
                "期日に間に合わず処刑される運命に直面したことから蜂起すると、反乱はまたたく間に各地へ広がり、{{項羽|こうう}}・{{劉邦|りゅうほう}}を" +
                "はじめとする反秦勢力が次々と挙兵して秦崩壊への流れを決定づけた。"
              }
            />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "追い詰められた趙高は、責任を胡亥に押し付けるべく自害に追い込み、代わって{{子嬰|しえい}}を王として擁立するが、子嬰は即位" +
                "早々に趙高を誅殺した。しかしもはや大勢は覆せず、いち早く都{{咸陽|かんよう}}へ迫った{{劉邦|りゅうほう}}に子嬰が降伏したことで、" +
                "秦は建国よりわずか15年、始皇帝の統一からはわずか十数年で滅亡した。その後、項羽と劉邦は天下の覇権を争う楚漢戦争へと" +
                "突入し、最終的に勝利した劉邦が漢王朝を開くことになる。"
              }
            />
          </p>
          {eventFall && (
            <a
              href={`/events/${eventFall.slug}`}
              style={{ display: "inline-block", fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, marginTop: 10 }}
            >
              「{stripRuby(eventFall.title)}」を年表で読む →
            </a>
          )}
        </section>

        <section style={{ marginBottom: 28 }} id="jinbutsu">
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            始皇帝に関係する人物
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 14 }}>
            始皇帝の統一事業を支え、あるいはその死後に帝国を揺るがすことになった主な人物です。
          </p>
          <div className="flex flex-col gap-3">
            {RELATED_PEOPLE.map((p, i) => (
              <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 14 }}>
                <div className="flex items-baseline gap-2 flex-wrap" style={{ marginBottom: 4 }}>
                  <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={p.name} />
                  </span>
                  <span style={{ fontSize: 11, color: COLORS.gold }}>{p.role}</span>
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
                <RubyText text="秦を滅ぼした{{陳勝|ちんしょう}}・{{呉広|ごこう}}の後を継いで挙兵した項羽・劉邦には、詳しい伝記ページも用意しています。" />
              </p>
              <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
                {xiangYuFigure && <HeritageGrid items={[xiangYuFigure]} eraId="qin" />}
                {liuBangFigure && <HeritageGrid items={[liuBangFigure]} eraId="westernhan" />}
              </div>
            </div>
          )}
        </section>

        <section style={{ marginBottom: 28 }} id="dekigoto">
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            始皇帝に関係する出来事
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 14 }}>
            始皇帝の生涯に関わる出来事を、年表の詳細ページとあわせて紹介します。
          </p>
          <div>
            {RELATED_EVENTS.map((ev, i) => (
              <EventListItem key={i} event={ev} />
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            よくある質問
          </h2>
          <div className="flex flex-col gap-3">
            <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 14 }}>
              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                Q. 始皇帝は何をした人？
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft }}>
                紀元前221年に六国を滅ぼして中国史上初めて天下を統一し、「皇帝」の称号を創始した秦の王です。度量衡・文字・貨幣の統一、
                郡県制の導入、万里の長城の修築などを行い、以後の中国の統治体制の原型を作りました。
              </p>
            </div>
            <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 14 }}>
              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                Q. 始皇帝はなぜ暴君と言われるのか？
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft }}>
                焚書坑儒による思想統制や、長城・阿房宮・陵墓建設のための過酷な労役に民衆を動員したことが主な理由です。統一そのものの
                功績は大きいものの、統治手法の苛烈さから評価が大きく分かれています。
              </p>
            </div>
            <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 14 }}>
              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                Q. 始皇帝の死因は？
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft }}>
                『史記』は病没とのみ記しており、死因を明記していません。不老不死を求めて水銀を含む仙薬を飲み続けた中毒死説が有力視
                されていますが、過労や持病による病死説もあり確定していません。
              </p>
            </div>
          </div>
        </section>

        <section>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            秦の出来事は年表ページで、始皇帝陵・兵馬俑にまつわる謎はより詳しい別記事でも紹介しています。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/qin" variant="solid">秦の出来事一覧を見る</NavButton>
            <NavButton href="/terracotta-army" variant="outline">兵馬俑・始皇帝陵の謎を見る</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
