import { ERAS, stripRuby, getEraFigures, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "三国時代 合戦マップ";
const fullTitle = `三国時代 合戦マップ | ${SITE_NAME}`;
const description =
  "黄巾の乱から天下統一まで、三国時代の流れを主要な合戦とともにたどる特集ページ。官渡・赤壁・夷陵・五丈原など各合戦での武将の活躍と、戦場の位置がわかる地図つきで解説します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/sanguo-battles" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/sanguo-battles" }),
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

const EV_HUANGJIN = findEvent("easternhan", "黄巾の乱");
const EV_CHIBI = findEvent("sanguo", "赤壁");
const EV_WEI = findEvent("sanguo", "魏の建国");
const EV_SHU = findEvent("sanguo", "蜀漢の建国");
const EV_WU = findEvent("sanguo", "呉の建国");
const EV_WUZHANGYUAN = findEvent("sanguo", "五丈原");
const EV_SHUFALL = findEvent("sanguo", "蜀漢の滅亡");
const EV_REUNIFY = findEvent("westernjin", "西晋による中国再統一");

const HREF_ZHUGE = findPersonHref("sanguo", "諸葛亮");
const HREF_CAOCAO = findPersonHref("sanguo", "曹操");
const HREF_LIUBEI = findPersonHref("sanguo", "劉備");
const HREF_SUNQUAN = findPersonHref("sanguo", "孫権");

// 時代の流れ（黄巾の乱〜天下統一）。hrefは/eventsへの直接リンク、anchorは本ページ内の合戦セクションへのリンク
const FLOW = [
  { year: "184", title: "{{黄巾|こうきん}}の乱", note: "太平道の信徒による大反乱。群雄割拠の幕開け。", href: EV_HUANGJIN && `/events/${EV_HUANGJIN.slug}` },
  { year: "190年代", title: "群雄割拠", note: "{{曹操|そうそう}}が{{献帝|けんてい}}を擁立し、袁紹ら群雄が各地に割拠する。", href: null },
  { year: "200", title: "{{官渡|かんと}}の戦い", note: "曹操が河北の袁紹を破り、華北統一の主導権を握る。", anchor: "battle-1" },
  { year: "208", title: "{{赤壁|せきへき}}の戦い", note: "孫権・劉備連合軍が曹操の南下を退け、天下三分の形勢を決定づける。", anchor: "battle-2" },
  { year: "215", title: "{{合肥|がっぴ}}の戦い", note: "魏の{{張遼|ちょうりょう}}が寡兵で孫権の大軍を撃退。", anchor: "battle-3" },
  { year: "220", title: "魏の建国（{{曹丕|そうひ}}）", note: "後漢が滅び、曹丕が皇帝に即位。", href: EV_WEI && `/events/${EV_WEI.slug}` },
  { year: "221", title: "蜀漢の建国（{{劉備|りゅうび}}）", note: "劉備が漢の正統を称して皇帝に即位。", href: EV_SHU && `/events/${EV_SHU.slug}` },
  { year: "222", title: "{{夷陵|いりょう}}の戦い・呉の建国", note: "劉備の呉侵攻が大敗に終わり、孫権が皇帝を称する。", anchor: "battle-4" },
  { year: "228", title: "{{街亭|がいてい}}の戦い", note: "諸葛亮の第一次北伐が{{馬謖|ばしょく}}の敗戦で頓挫する。", anchor: "battle-5" },
  { year: "234", title: "{{五丈原|ごじょうげん}}の戦い", note: "諸葛亮、北伐半ばで陣中に没す。", anchor: "battle-6" },
  { year: "263", title: "蜀漢の滅亡", note: "魏の奇襲により成都が陥落。", anchor: "battle-7" },
  { year: "280", title: "西晋による中国再統一", note: "呉が滅び、三国時代が名実ともに終わる。", anchor: "battle-8" },
];

// 中国本土＋海南島の輪郭（/world-heritageと同じ、実際の海岸線をもとにした投影データ）
const CHINA_OUTLINE =
  "M294.9,341.64L288.42,346.09L282.27,343.22L282.06,335.26L285.75,331.07L293.94,328.48L298.25,328.7L299.93,332.23L296.64,336.3L294.9,341.64Z " +
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";
const TAIWAN_OUTLINE =
  "M380.66,288.78L376.15,303.61L372.94,311.2L368.99,303.39L368.13,296.53L372.54,287.45L378.54,280.45L381.97,283.2L380.66,288.78Z";

// 三国それぞれの勢力圏を示す大まかなラベル（範囲を厳密に示すものではない）
const REGION_LABELS = [
  { label: "魏（華北）", x: 330, y: 158 },
  { label: "蜀（益州）", x: 220, y: 258 },
  { label: "呉（江南）", x: 383, y: 250 },
];

// 魏の都・洛陽（参考地点）。座標は/world-heritageの龍門石窟と同一の投影に基づく
const CAPITAL_REF = { label: "洛陽（魏の都）", x: 310, y: 194, dx: -8, dy: -9, anchor: "end" };

// 合戦地点。経緯度から/world-heritageと同じ図法（線形近似）で算出した座標
// X ≈ 340 + 7.495×(経度-116.4) / Y ≈ 145 - 9.343×(緯度-39.9)
const BATTLES = [
  {
    no: 1,
    id: "battle-1",
    year: "200",
    name: "{{官渡|かんと}}の戦い",
    location: "河南省中牟県付近",
    mapX: 322,
    mapY: 193,
    factions: [
      { side: "曹操軍", people: "{{曹操|そうそう}}・{{荀彧|じゅんいく}}・{{許攸|きょゆう}}" },
      { side: "袁紹軍", people: "{{袁紹|えんしょう}}・{{顔良|がんりょう}}・{{文醜|ぶんしゅう}}" },
    ],
    body: "華北の覇権を賭け、寡兵の{{曹操|そうそう}}が河北随一の大軍閥{{袁紹|えんしょう}}と対峙した決戦。兵力で圧倒的に劣る曹操軍は苦しい持久戦を強いられたが、袁紹陣営から寝返った{{許攸|きょゆう}}の情報をもとに、兵糧庫のあった{{烏巣|うそう}}を自ら奇襲して焼き払う奇策に打って出た。兵糧を失った袁紹軍は総崩れとなり、この勝利によって曹操は華北統一の主導権を決定的なものとした。",
    relatedHref: EV_WEI && `/events/${EV_WEI.slug}`,
    relatedLabel: "魏の建国（曹丕）を年表で読む",
    personHref: HREF_CAOCAO,
    personLabel: "曹操の生涯を読む",
  },
  {
    no: 2,
    id: "battle-2",
    year: "208",
    name: "{{赤壁|せきへき}}の戦い",
    location: "湖北省赤壁市付近（長江沿岸）",
    mapX: 321,
    mapY: 240,
    factions: [
      { side: "孫権・劉備連合軍", people: "{{周瑜|しゅうゆ}}・{{魯粛|ろしゅく}}・{{黄蓋|こうがい}}・{{諸葛亮|しょかつりょう}}" },
      { side: "曹操軍", people: "{{曹操|そうそう}}" },
    ],
    body: "華北をほぼ統一した{{曹操|そうそう}}の大軍が長江を渡って南下する中、{{孫権|そんけん}}と{{劉備|りゅうび}}の連合軍がこれを迎え撃った、三国志随一の決戦。船上戦に不慣れな曹操軍は疫病にも苦しめられ、{{黄蓋|こうがい}}の偽りの降伏と火船による奇襲によって水軍が壊滅した。この敗北で曹操の天下統一の野望は挫かれ、魏・呉・蜀による三国鼎立の構図が定まる転機となった。",
    relatedHref: EV_CHIBI && `/events/${EV_CHIBI.slug}`,
    relatedLabel: "赤壁の戦いを年表で読む",
    personHref: HREF_ZHUGE,
    personLabel: "諸葛亮の生涯を読む",
  },
  {
    no: 3,
    id: "battle-3",
    year: "215",
    name: "{{合肥|がっぴ}}の戦い（{{逍遥津|しょうようしん}}の戦い）",
    location: "安徽省合肥市付近",
    mapX: 347,
    mapY: 220,
    factions: [
      { side: "魏軍", people: "{{張遼|ちょうりょう}}・{{楽進|がくしん}}・{{李典|りてん}}" },
      { side: "呉軍", people: "{{孫権|そんけん}}・{{甘寧|かんねい}}・{{凌統|りょうとう}}" },
    ],
    body: "赤壁の敗戦後も江南への圧力を強める呉に対し、魏の防衛拠点{{合肥|がっぴ}}を守っていた{{張遼|ちょうりょう}}は、寡兵ながら夜明け前に自ら突撃を敢行し、十万ともいわれる孫権の大軍を大混乱に陥れたと伝えられる。孫権自身も危うく討ち取られかけたとされ、以後「{{張遼|ちょうりょう}}が来る（{{遼来来|りょうらいらい}}）」と言うだけで泣く子も黙ったという逸話が残るほど、その武名は呉の兵に恐れられた。",
    relatedHref: EV_WU && `/events/${EV_WU.slug}`,
    relatedLabel: "呉の建国（孫権）を年表で読む",
    personHref: HREF_SUNQUAN,
    personLabel: "孫権の生涯を読む",
  },
  {
    no: 4,
    id: "battle-4",
    year: "222",
    name: "{{夷陵|いりょう}}の戦い",
    location: "湖北省宜昌市付近（長江沿岸）",
    mapX: 302,
    mapY: 231,
    factions: [
      { side: "蜀漢軍", people: "{{劉備|りゅうび}}・{{馮習|ふうしゅう}}・{{張南|ちょうなん}}" },
      { side: "呉軍", people: "{{陸遜|りくそん}}・{{朱然|しゅぜん}}・{{韓当|かんとう}}" },
    ],
    body: "義弟{{関羽|かんう}}を討たれた仇討ちとして、皇帝に即位したばかりの{{劉備|りゅうび}}が自ら大軍を率いて呉へ侵攻した。呉の若き将{{陸遜|りくそん}}は緒戦であえて後退を重ねて劉備軍を長江沿いの山中深くまで誘い込み、酷暑の中で陣営を長々と連ねさせたところを見計らって火計を仕掛け、蜀軍の連なる陣営を一夜にして焼き払った。この大敗で蜀漢は建国直後に多くの将兵を失い、劉備もまもなく病没することになる。",
    relatedHref: EV_SHU && `/events/${EV_SHU.slug}`,
    relatedLabel: "蜀漢の建国（劉備）を年表で読む",
    personHref: HREF_LIUBEI,
    personLabel: "劉備の生涯を読む",
  },
  {
    no: 5,
    id: "battle-5",
    year: "228",
    name: "{{街亭|がいてい}}の戦い",
    location: "甘粛省天水市秦安県付近",
    mapX: 258,
    mapY: 193,
    factions: [
      { side: "蜀漢軍", people: "{{諸葛亮|しょかつりょう}}・{{馬謖|ばしょく}}" },
      { side: "魏軍", people: "{{張郃|ちょうこう}}" },
    ],
    body: "劉備の死後、丞相{{諸葛亮|しょかつりょう}}が「漢室の再興」を掲げて敢行した第一次北伐。緒戦は順調に進んだが、要衝{{街亭|がいてい}}の守備を託された{{馬謖|ばしょく}}は諸葛亮の指示に反し、水源から離れた山上に布陣する定石破りの采配をとった結果、魏の{{張郃|ちょうこう}}に水路を断たれて大敗を喫する。この敗戦により北伐の前線基盤を失った諸葛亮はやむなく全軍を撤退させ、軍規を守るため愛弟子であった馬謖を涙ながらに処刑した「{{泣斬馬謖|きゅうざんばしょく}}」の故事はあまりにも名高い。",
    relatedHref: EV_WUZHANGYUAN && `/events/${EV_WUZHANGYUAN.slug}`,
    relatedLabel: "五丈原の戦い（北伐の顛末）を年表で読む",
    personHref: HREF_ZHUGE,
    personLabel: "諸葛亮の生涯を読む",
  },
  {
    no: 6,
    id: "battle-6",
    year: "234",
    name: "{{五丈原|ごじょうげん}}の戦い",
    location: "陝西省宝鶏市岐山県付近",
    mapX: 274,
    mapY: 196,
    factions: [
      { side: "蜀漢軍", people: "{{諸葛亮|しょかつりょう}}・{{姜維|きょうい}}" },
      { side: "魏軍", people: "{{司馬懿|しばい}}" },
    ],
    body: "国力で大きく劣る魏に対し、たびたび北伐を繰り返した{{諸葛亮|しょかつりょう}}の最後の戦い。渭水南岸の{{五丈原|ごじょうげん}}に布陣した蜀軍に対し、魏の{{司馬懿|しばい}}は野戦を避けて徹底した持久策をとり、両軍は長期にわたりにらみ合いを続けた。諸葛亮は屯田策で長期戦に備えていたが過労が重なり陣中で病に倒れ、そのまま没する。総司令官を失った蜀軍は撤退を余儀なくされ、以後蜀漢が魏へ大規模な攻勢に出ることは事実上なくなった。",
    relatedHref: EV_WUZHANGYUAN && `/events/${EV_WUZHANGYUAN.slug}`,
    relatedLabel: "五丈原の戦いを年表で読む",
    personHref: HREF_ZHUGE,
    personLabel: "諸葛亮の生涯を読む",
  },
  {
    no: 7,
    id: "battle-7",
    year: "263",
    name: "蜀漢の滅亡（成都陥落）",
    location: "四川省成都市",
    mapX: 248,
    mapY: 231,
    factions: [
      { side: "魏軍", people: "{{鄧艾|とうがい}}・{{鍾会|しょうかい}}" },
      { side: "蜀漢軍", people: "{{姜維|きょうい}}・{{劉禅|りゅうぜん}}" },
    ],
    body: "{{諸葛亮|しょかつりょう}}の死後、その北伐路線を受け継いだ{{姜維|きょうい}}であったが大きな戦果は挙げられず、蜀漢の国力は次第に消耗していった。魏の{{鄧艾|とうがい}}は正面の姜維軍をやり過ごし、道なき険しい山道を踏破して成都に迫るという大胆な奇襲策を敢行する。予期せぬ方面からの敵軍出現に成都の守りは崩れ、皇帝{{劉禅|りゅうぜん}}はほとんど抵抗することなく降伏を選んだ。劉備の建国から43年、蜀漢はここに滅亡し、三国の一角が初めて消え去ることになった。",
    relatedHref: EV_SHUFALL && `/events/${EV_SHUFALL.slug}`,
    relatedLabel: "蜀漢の滅亡を年表で読む",
    personHref: HREF_LIUBEI,
    personLabel: "劉備の生涯を読む",
  },
  {
    no: 8,
    id: "battle-8",
    year: "280",
    name: "西晋の呉討伐（建業陥落）",
    location: "江蘇省南京市（呉の都・建業）",
    mapX: 358,
    mapY: 218,
    factions: [
      { side: "西晋軍", people: "{{王濬|おうしゅん}}・{{杜預|とよ}}" },
      { side: "呉軍", people: "{{孫皓|そんこう}}" },
    ],
    body: "魏の禅譲を受けて建った西晋は、三国最後の一角として残る呉への攻勢を強めた。西晋の{{王濬|おうしゅん}}は益州で建造した大規模な水軍を長江に浮かべ、呉が川に張り巡らせた鉄鎖の防柵を焼き切って突破しながら、都{{建業|けんぎょう}}（現在の南京）へと進軍した。暴君として知られた呉の最後の皇帝{{孫皓|そんこう}}はついに降伏し、後漢末の黄巾の乱以来約1世紀近く分裂を続けた中国は、ここに再び統一されることになった。",
    relatedHref: EV_REUNIFY && `/events/${EV_REUNIFY.slug}`,
    relatedLabel: "西晋による中国再統一を年表で読む",
    personHref: null,
    personLabel: null,
  },
];

function BattleMap() {
  return (
    <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        実際の海岸線をもとにした位置関係図です。朱色の番号は下の各合戦、金色の丸は魏の都・洛陽の目安です。
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
            style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 13, fontWeight: 700, fill: COLORS.inkSoft, opacity: 0.55 }}
          >
            {r.label}
          </text>
        ))}

        <g>
          <circle cx={CAPITAL_REF.x} cy={CAPITAL_REF.y} r="4" fill={COLORS.gold} stroke={COLORS.paper} strokeWidth="1.2" />
          <text
            x={CAPITAL_REF.x + CAPITAL_REF.dx}
            y={CAPITAL_REF.y + CAPITAL_REF.dy}
            textAnchor={CAPITAL_REF.anchor}
            style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 10, fill: COLORS.inkSoft }}
          >
            {CAPITAL_REF.label}
          </text>
        </g>

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

export default function SanguoBattlesPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          三国時代 合戦マップ
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          184年の黄巾の乱に始まり、280年の天下統一で幕を閉じるまで——三国時代は中国史上もっとも語り継がれる乱世です。
          このページでは、後漢の滅亡から西晋による再統一までの流れを、官渡・赤壁・夷陵・五丈原など8つの主要な合戦と、
          そこで活躍した武将たちにスポットを当てて詳しく紹介します。
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
                    <span style={{ fontSize: 12, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>{b.year}年</span>
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
            三国時代の各出来事の詳細や関連する人物・建造物については、年表・人物ページもあわせてご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/sanguo" variant="solid">三国の出来事一覧を見る</NavButton>
            <NavButton href="/people/sanguo" variant="outline">三国の人物一覧を見る</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
