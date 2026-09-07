import { ERAS, stripRuby, getEraFigures, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "楚漢戦争 合戦マップ";
const fullTitle = `楚漢戦争 合戦マップ | ${SITE_NAME}`;
const description =
  "陳勝・呉広の乱から垓下の戦いまで、秦の滅亡と項羽・劉邦の覇権争い「楚漢戦争」の流れをたどる特集ページ。鉅鹿・鴻門・彭城・垓下など各合戦での武将の活躍と、戦場の位置がわかる地図つきで解説します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/chuhan-battles" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/chuhan-battles" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

// 出来事タイトルの部分一致から該当イベントページへのリンクを探す
function findEvent(eraId, titleIncludes) {
  const era = ERAS.find((e) => e.id === eraId);
  if (!era) return null;
  const event = era.events.find((ev) => stripRuby(ev.title).includes(titleIncludes));
  return event ? { slug: event.slug, title: event.title, year: event.year } : null;
}

// 人物名から、伝記（bio）が用意されている場合のみ個別ページへのリンクを探す
function findPersonHref(eraId, name) {
  const era = ERAS.find((e) => e.id === eraId);
  if (!era) return null;
  const figure = getEraFigures(era).find((f) => stripRuby(f.name) === name);
  return figure && figure.bio ? `/people/${eraId}/${encodeURIComponent(personSlug(figure.name))}` : null;
}

const EV_CHENSHENG = findEvent("qin", "陳勝");
const EV_HONGMEN = findEvent("qin", "鴻門");
const EV_HANFOUND = findEvent("westernhan", "漢を建国");

const HREF_XIANGYU = findPersonHref("qin", "項羽");
const HREF_LIUBANG = findPersonHref("westernhan", "劉邦");

// 秦滅亡〜楚漢戦争の流れ。hrefは/eventsへの直接リンク、anchorは本ページ内の合戦セクションへのリンク
const FLOW = [
  { year: "209", title: "{{陳勝|ちんしょう}}・{{呉広|ごこう}}の乱", note: "農民出身の陳勝・呉広が挙兵し、各地の反秦勢力が動き出す。", anchor: "battle-1" },
  { year: "208", title: "{{項梁|こうりょう}}・{{項羽|こうう}}ら挙兵", note: "楚の名門出身の項羽が、叔父項梁とともに反秦軍の中心となっていく。", href: null },
  { year: "207", title: "{{鉅鹿|きょろく}}の戦い", note: "「破釜沈舟」の決死の覚悟で項羽が秦の主力軍を撃破する。", anchor: "battle-2" },
  { year: "206", title: "秦の滅亡・{{鴻門|こうもん}}の会", note: "先に咸陽入りした劉邦を項羽が詰問。暗殺の危機を劉邦は辛くも脱する。", anchor: "battle-3" },
  { year: "206", title: "{{陳倉|ちんそう}}の戦い", note: "劉邦・韓信が「明修桟道、暗渡陳倉」の奇策で関中を奪還、楚漢戦争が始まる。", anchor: "battle-4" },
  { year: "205", title: "{{彭城|ほうじょう}}の戦い", note: "56万の劉邦連合軍を、項羽がわずか3万の精鋭で壊滅させる。", anchor: "battle-5" },
  { year: "204", title: "{{井陘|せいけい}}の戦い（背水の陣）", note: "韓信が寡兵で趙の大軍を破り、「背水の陣」の故事を生む。", anchor: "battle-6" },
  { year: "204–203", title: "{{滎陽|けいよう}}・{{成皋|せいこう}}の攻防", note: "劉邦は幾度も追い詰められながら、粘り強く持久戦を続ける。", anchor: "battle-7" },
  { year: "202", title: "{{垓下|がいか}}の戦い", note: "「四面楚歌」に囲まれた項羽が自刎し、楚漢戦争が終結する。", anchor: "battle-8" },
  { year: "202", title: "{{劉邦|りゅうほう}}、漢を建国", note: "農民出身の劉邦が皇帝に即位し、400年続く漢王朝が始まる。", href: EV_HANFOUND && `/events/${EV_HANFOUND.slug}` },
];

// 中国本土＋海南島の輪郭（/world-heritage・/sanguo-battlesと同じ、実際の海岸線をもとにした投影データ）
const CHINA_OUTLINE =
  "M294.9,341.64L288.42,346.09L282.27,343.22L282.06,335.26L285.75,331.07L293.94,328.48L298.25,328.7L299.93,332.23L296.64,336.3L294.9,341.64Z " +
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";
const TAIWAN_OUTLINE =
  "M380.66,288.78L376.15,303.61L372.94,311.2L368.99,303.39L368.13,296.53L372.54,287.45L378.54,280.45L381.97,283.2L380.66,288.78Z";

// 両陣営の大まかな勢力圏ラベル（範囲を厳密に示すものではない）
const REGION_LABELS = [
  { label: "漢（劉邦の勢力基盤）", x: 245, y: 165 },
  { label: "楚（項羽の本拠地）", x: 392, y: 183 },
];

// 合戦地点。経緯度から/world-heritage・/sanguo-battlesと同じ図法（線形近似）で算出し、
// 近接する史跡同士は視認性のため数px調整している
// X ≈ 340 + 7.495×(経度-116.4) / Y ≈ 145 - 9.343×(緯度-39.9)
const BATTLES = [
  {
    no: 1,
    id: "battle-1",
    year: "209 BC",
    name: "{{大澤郷|だいたくきょう}}の蜂起（{{陳勝|ちんしょう}}・{{呉広|ごこう}}の乱）",
    location: "安徽省宿州市（大澤郷）",
    mapX: 330,
    mapY: 215,
    factions: [
      { side: "反乱軍", people: "{{陳勝|ちんしょう}}・{{呉広|ごこう}}" },
      { side: "秦軍", people: "地方の郡県守備隊" },
    ],
    body: "辺境警備に向かう途上、大雨で期日に遅れ処刑される運命に直面した農民{{陳勝|ちんしょう}}と{{呉広|ごこう}}は、「王侯将相いずくんぞ種あらんや」の言葉とともに蜂起した。反乱は瞬く間に華北一帯へ広がり、陳勝は自ら「{{張楚|ちょうそ}}」を名乗って独立政権を樹立するまでに至る。蜂起そのものは半年ほどで鎮圧されたが、これに触発されて{{項羽|こうう}}・{{劉邦|りゅうほう}}をはじめ各地の反秦勢力が次々と挙兵し、秦崩壊への流れを決定づけることになった。",
    relatedHref: EV_CHENSHENG && `/events/${EV_CHENSHENG.slug}`,
    relatedLabel: "陳勝・呉広の乱を年表で読む",
    personHref: null,
    personLabel: null,
  },
  {
    no: 2,
    id: "battle-2",
    year: "207 BC",
    name: "{{鉅鹿|きょろく}}の戦い",
    location: "河北省邢台市鉅鹿県付近",
    mapX: 329,
    mapY: 169,
    factions: [
      { side: "反秦諸侯連合軍", people: "{{項羽|こうう}}" },
      { side: "秦軍", people: "{{章邯|しょうかん}}・{{王離|おうり}}" },
    ],
    body: "秦の主力軍に包囲された{{鉅鹿|きょろく}}の反秦勢力を救援するため、{{項羽|こうう}}は自ら軍を率いて渡河すると、乗ってきた船を沈め、炊事用の釜を破壊して兵に退路を断たせ、決死の覚悟で戦わせた。この「{{破釜沈舟|はふちんしゅう}}」の奇策により項羽軍は九度にわたる激戦のすべてに勝利し、秦の主力軍を壊滅させる。観戦していた諸侯の軍勢はその勇猛さに恐れをなし戦わずして降ったと伝えられ、この勝利により項羽は反秦諸侯連合の中心的指導者としての地位を確立した。",
    relatedHref: null,
    relatedLabel: null,
    personHref: HREF_XIANGYU,
    personLabel: "項羽の生涯を読む",
  },
  {
    no: 3,
    id: "battle-3",
    year: "206 BC",
    name: "秦の滅亡・{{鴻門|こうもん}}の会",
    location: "陝西省西安市臨潼区",
    mapX: 287,
    mapY: 197,
    factions: [
      { side: "劉邦陣営", people: "{{劉邦|りゅうほう}}・{{張良|ちょうりょう}}・{{樊噲|はんかい}}" },
      { side: "項羽陣営", people: "{{項羽|こうう}}・{{范増|はんぞう}}" },
    ],
    body: "諸侯連合が鉅鹿で秦の主力を退ける間に、{{劉邦|りゅうほう}}は別動隊を率いて先に秦の都{{咸陽|かんよう}}へ入城していた。遅れて到着した{{項羽|こうう}}はこれに激怒し、鴻門の酒宴に劉邦を招く。参謀{{范増|はんぞう}}は剣舞に見せかけて暗殺を図るが、劉邦配下の{{樊噲|はんかい}}が剣と盾を手に強引に宴席へ乱入して睨みを利かせ、劉邦は隙をついて脱出に成功したと伝えられる。この「鴻門の会」を経て項羽は諸侯に領土を分け与え自ら「{{西楚覇王|せいそはおう}}」を称するが、論功行賞への不満はまもなく楚漢戦争の火種となっていく。",
    relatedHref: EV_HONGMEN && `/events/${EV_HONGMEN.slug}`,
    relatedLabel: "秦の滅亡・鴻門の会を年表で読む",
    personHref: HREF_LIUBANG,
    personLabel: "劉邦の生涯を読む",
  },
  {
    no: 4,
    id: "battle-4",
    year: "206 BC",
    name: "{{陳倉|ちんそう}}の戦い",
    location: "陝西省宝鶏市",
    mapX: 266,
    mapY: 200,
    factions: [
      { side: "漢軍", people: "{{劉邦|りゅうほう}}・{{韓信|かんしん}}" },
      { side: "雍王軍", people: "{{章邯|しょうかん}}" },
    ],
    body: "鴻門の会の後、辺境の{{漢中|かんちゅう}}に追いやられた{{劉邦|りゅうほう}}は、大将軍に抜擢した{{韓信|かんしん}}の献策により関中奪還に動く。表向きは山中の桟道を修復すると見せかけて敵の目を引きつけ、その裏で別働隊がひそかに{{陳倉|ちんそう}}の間道を踏破するという「{{明修桟道|めいしゅうさんどう}}、{{暗渡陳倉|あんとちんそう}}」の奇策により、関中を守っていた元秦将{{章邯|しょうかん}}の軍を撃破した。これにより劉邦は関中の地盤を取り戻し、項羽との本格的な覇権争い「楚漢戦争」の幕が切って落とされることになる。",
    relatedHref: EV_HANFOUND && `/events/${EV_HANFOUND.slug}`,
    relatedLabel: "劉邦の漢建国を年表で読む",
    personHref: HREF_LIUBANG,
    personLabel: "劉邦の生涯を読む",
  },
  {
    no: 5,
    id: "battle-5",
    year: "205 BC",
    name: "{{彭城|ほうじょう}}の戦い",
    location: "江蘇省徐州市",
    mapX: 347,
    mapY: 198,
    factions: [
      { side: "楚軍", people: "{{項羽|こうう}}" },
      { side: "漢連合軍", people: "{{劉邦|りゅうほう}}" },
    ],
    body: "項羽が斉の反乱鎮圧に出た隙をつき、{{劉邦|りゅうほう}}は諸侯を糾合した56万ともいわれる大軍で楚の都{{彭城|ほうじょう}}を陥落させた。しかし急報を受けた項羽はわずか3万の精鋭騎兵のみを率いて取って返すと、油断していた漢軍を明け方に奇襲し、たちまち総崩れに追い込んだ。逃げ惑う漢兵の多くが{{睢水|すいすい}}に追い落とされて溺死したと伝えられ、劉邦自身もわずかな供回りとともに辛くも脱出する有様であった。数の上では圧倒的だった漢連合軍が、機動力に優れた項羽の精鋭にあっけなく打ち破られた、楚漢戦争屈指の逆転劇である。",
    relatedHref: null,
    relatedLabel: null,
    personHref: HREF_XIANGYU,
    personLabel: "項羽の生涯を読む",
  },
  {
    no: 6,
    id: "battle-6",
    year: "204 BC",
    name: "{{井陘|せいけい}}の戦い（{{背水|はいすい}}の陣）",
    location: "河北省石家荘市井陘県付近",
    mapX: 315,
    mapY: 155,
    factions: [
      { side: "漢軍", people: "{{韓信|かんしん}}・{{張耳|ちょうじ}}" },
      { side: "趙軍", people: "{{陳余|ちんよ}}" },
    ],
    body: "劉邦の別働隊を率いる{{韓信|かんしん}}は、寡兵で趙の大軍を打ち破るため、あえて川を背にして陣を敷くという兵法の定石に反する布陣をとった。退路を断たれた漢兵は「進んで戦うほかに生きる道はない」という決死の覚悟で奮戦し、その間に別動隊が手薄になった趙の本営を急襲して漢の旗を立てたことで趙軍は総崩れとなった。この戦法は後世「{{背水の陣|はいすいのじん}}」の故事成語として広く知られ、韓信の用兵はこの戦い以後「{{国士無双|こくしむそう}}」と評されるようになる。",
    relatedHref: null,
    relatedLabel: null,
    personHref: null,
    personLabel: null,
  },
  {
    no: 7,
    id: "battle-7",
    year: "204–203 BC",
    name: "{{滎陽|けいよう}}・{{成皋|せいこう}}の攻防",
    location: "河南省滎陽市付近",
    mapX: 317,
    mapY: 193,
    factions: [
      { side: "漢軍", people: "{{劉邦|りゅうほう}}・{{紀信|きしん}}" },
      { side: "楚軍", people: "{{項羽|こうう}}" },
    ],
    body: "彭城での大敗後、{{劉邦|りゅうほう}}は{{滎陽|けいよう}}・{{成皋|せいこう}}の要害に拠って項羽と長期にわたる持久戦を繰り広げた。一時は完全に包囲され絶体絶命に陥るが、忠臣{{紀信|きしん}}が劉邦の身代わりとなって偽って降伏し、その隙に劉邦本人が西門から脱出するという捨て身の策で危機を脱したと伝えられる。にらみ合いの末、両軍はいったん{{鴻溝|こうこう}}を境に天下を東西に分ける和議を結ぶが、劉邦は{{張良|ちょうりょう}}・{{陳平|ちんぺい}}の進言を容れてこの盟約を破り、撤退する項羽の背後を追撃する道を選ぶ。",
    relatedHref: EV_HANFOUND && `/events/${EV_HANFOUND.slug}`,
    relatedLabel: "劉邦の漢建国を年表で読む",
    personHref: HREF_LIUBANG,
    personLabel: "劉邦の生涯を読む",
  },
  {
    no: 8,
    id: "battle-8",
    year: "202 BC",
    name: "{{垓下|がいか}}の戦い",
    location: "安徽省宿州市固鎮県付近",
    mapX: 360,
    mapY: 213,
    factions: [
      { side: "漢連合軍", people: "{{韓信|かんしん}}・{{劉邦|りゅうほう}}・{{彭越|ほうえつ}}・{{英布|えいふ}}" },
      { side: "楚軍", people: "{{項羽|こうう}}" },
    ],
    body: "{{韓信|かんしん}}を総指揮とする漢の大軍が{{垓下|がいか}}で疲弊した項羽の軍を幾重にも包囲した。夜、四方の漢軍の陣から項羽の故郷である楚の歌が聞こえてくると、項羽は「漢は既に楚をことごとく手に入れたのか」と嘆じたと伝えられ、この「{{四面楚歌|しめんそか}}」に楚兵の戦意は完全に失われた。項羽は愛姫{{虞美人|ぐびじん}}との今生の別れを詩に詠んだ後、わずかな騎兵とともに包囲を突破するが、追い詰められた{{烏江|うこう}}のほとりでついに自害した。項羽の死により楚漢戦争は終結し、勝者となった劉邦は皇帝に即位して漢王朝を開くことになる。",
    relatedHref: EV_HANFOUND && `/events/${EV_HANFOUND.slug}`,
    relatedLabel: "劉邦、漢を建国を年表で読む",
    personHref: HREF_XIANGYU,
    personLabel: "項羽の生涯を読む",
  },
];

function BattleMap() {
  return (
    <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        実際の海岸線をもとにした位置関係図です。朱色の番号は下の各合戦の位置を示しています。
      </p>
      <svg viewBox="0 0 500 366" style={{ width: "100%", maxHeight: 400, display: "block", margin: "0 auto" }}>
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />
        <path d={TAIWAN_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />

        {REGION_LABELS.map((r, i) => (
          <text
            key={`region-${i}`}
            x={r.x}
            y={r.y}
            textAnchor="middle"
            style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12, fontWeight: 700, fill: COLORS.inkSoft, opacity: 0.55 }}
          >
            {r.label}
          </text>
        ))}

        {BATTLES.map((b) => (
          <g key={b.no}>
            <circle cx={b.mapX} cy={b.mapY} r="8" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="1.5" />
            <text
              x={b.mapX}
              y={b.mapY}
              textAnchor="middle"
              dominantBaseline="central"
              style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 9, fontWeight: 700, fill: "#FBF8F0" }}
            >
              {b.no}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function ChuHanBattlesPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          楚漢戦争 合戦マップ
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          209年の陳勝・呉広の乱に始まり、202年の垓下の戦いで幕を閉じるまで——秦の滅亡から漢の統一までのわずか数年間は、
          項羽と劉邦という対照的な二人の英雄が天下を賭けて戦った、中国史でも屈指の劇的な時代です。
          このページでは、鉅鹿・鴻門・彭城・垓下など8つの主要な合戦と、そこで活躍した武将たちにスポットを当てて詳しく紹介します。
        </p>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 12 }}>
            時代の流れ
          </h2>
          <div className="flex flex-col gap-2">
            {FLOW.map((f, i) => {
              const content = (
                <div className="flex items-baseline gap-3 px-4 py-2.5" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", borderLeft: `3px solid ${COLORS.vermilion}` }}>
                  <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12.5, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>
                    {f.year}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
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
              if (f.href) {
                return (
                  <a key={i} href={f.href}>
                    {content}
                  </a>
                );
              }
              if (f.anchor) {
                return (
                  <a key={i} href={`#${f.anchor}`}>
                    {content}
                  </a>
                );
              }
              return <div key={i}>{content}</div>;
            })}
          </div>
        </section>

        <section style={{ marginBottom: 12 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 12 }}>
            合戦地図
          </h2>
          <BattleMap />
        </section>

        <section>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 16 }}>
            主要な戦い
          </h2>
          <div className="flex flex-col gap-5">
            {BATTLES.map((b) => (
              <div key={b.no} id={b.id} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", scrollMarginTop: 16 }}>
                <div className="p-4">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        backgroundColor: COLORS.vermilion,
                        color: "#FBF8F0",
                        fontFamily: "'Noto Serif SC', serif",
                        fontSize: 11,
                        fontWeight: 700,
                      }}
                    >
                      {b.no}
                    </span>
                    <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 16.5, fontWeight: 700, color: COLORS.ink }}>
                      <RubyText text={b.name} />
                    </span>
                    <span style={{ fontSize: 12, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>{b.year}</span>
                  </div>
                  <div style={{ fontSize: 11, color: COLORS.vermilionSoft, marginTop: 4 }}>
                    <span aria-hidden>📍</span> {b.location}
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3" style={{ fontSize: 11.5 }}>
                    {b.factions.map((f, i) => (
                      <div key={i}>
                        <span style={{ color: COLORS.gold, fontWeight: 700 }}>{f.side}：</span>
                        <span style={{ color: COLORS.inkSoft }}><RubyText text={f.people} /></span>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 10 }}>
                    <RubyText text={b.body} />
                  </p>

                  <div className="flex items-center gap-3 flex-wrap mt-3" style={{ fontSize: 11.5 }}>
                    {b.relatedHref && (
                      <a href={b.relatedHref} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                        {b.relatedLabel} →
                      </a>
                    )}
                    {b.personHref && (
                      <a href={b.personHref} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                        {b.personLabel} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            楚漢戦争の前史にあたる春秋・戦国時代、後日談にあたる三国時代の合戦については、
            あわせて下記の特集ページもご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/qin" variant="solid">秦の出来事一覧を見る</NavButton>
            <NavButton href="/chunqiu-zhanguo-battles" variant="outline">春秋・戦国 合戦マップを見る</NavButton>
            <NavButton href="/sanguo-battles" variant="outline">三国時代 合戦マップを見る</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
