import { ERAS, stripRuby, getEraFigures, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection, HeritageThumb } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { SuitangBorderMap } from "@/components/SuitangBorderMap";

const title = "隋唐・五代 合戦マップ";
const fullTitle = `隋唐・五代 合戦マップ | ${SITE_NAME}`;
const description =
  "隋の南北統一から唐の興亡、五代十国の分裂を経て宋が天下を統一するまで、約400年の流れを主要な合戦とともにたどる特集ページ。虎牢関・玄武門・安史の乱・黄巣の乱・高平の戦いなどを、戦場の位置がわかる地図と勢力図アニメーションつきで解説します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/suitang-battles" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/suitang-battles" }),
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

// 人物名から、肖像画像（あれば）とクレジットを探す
function findPersonImage(eraId, name) {
  const era = ERAS.find((e) => e.id === eraId);
  if (!era) return null;
  const figure = getEraFigures(era).find((f) => stripRuby(f.name) === name);
  return figure ? { imageUrl: figure.imageUrl, credit: figure.credit } : null;
}

const EV_SUI_FOUND = findEvent("sui", "隋の建国");
const EV_CHEN = findEvent("sui", "陳を滅ぼし");
const EV_GOGURYEO = findEvent("sui", "高句麗");
const EV_SUI_FALL = findEvent("sui", "隋の滅亡");
const EV_GENBUMON = findEvent("tang", "玄武門");
const EV_TUJUE = findEvent("tang", "東突厥");
const EV_WUZETIAN = findEvent("tang", "武則天");
const EV_ANSHI = findEvent("tang", "安史の乱");
const EV_TANG_FALL = findEvent("tang", "朱全忠");
const EV_HOUTANG = findEvent("wudai", "後唐");
const EV_ENUN = findEvent("wudai", "燕雲十六州");
const EV_CHAIRONG = findEvent("wudai", "柴栄");
const EV_CHENQIAO = findEvent("wudai", "趙匡胤");

const HREF_TAIZONG = findPersonHref("tang", "唐太宗（李世民）");
const HREF_YANGGUIFEI = findPersonHref("tang", "楊貴妃");

const IMG_WENDI = findPersonImage("sui", "隋文帝（楊堅）");
const IMG_YANGDI = findPersonImage("sui", "隋煬帝（楊広）");
const IMG_TAIZONG = findPersonImage("tang", "唐太宗（李世民）");
const IMG_LIJING = findPersonImage("tang", "李靖");
const IMG_ZHUQUANZHONG = findPersonImage("tang", "朱全忠（朱温）");
const IMG_LICUNXU = findPersonImage("wudai", "李存勗（後唐荘宗）");
const IMG_CHAIRONG = findPersonImage("wudai", "柴栄（後周世宗）");
const IMG_SONGTAIZU = findPersonImage("northernsong", "宋太祖（趙匡胤）");

// 隋・唐前半（581〜755年）の流れ
const EARLY_FLOW = [
  { year: "581", title: "隋の建国（{{楊堅|ようけん}}）", note: "北周の外戚楊堅が禅譲を受けて即位し、文帝となる。", href: EV_SUI_FOUND && `/events/${EV_SUI_FOUND.slug}` },
  { year: "589", title: "隋の{{陳|ちん}}征服・南北統一", note: "長江を渡った隋軍が建康を落とし、約270年ぶりに中国が一つになる。", anchor: "early-battle-1" },
  { year: "612", title: "{{高句麗|こうくり}}遠征・{{薩水|さっすい}}の戦い", note: "煬帝の大遠征軍が薩水で壊滅。民衆の不満が隋を揺るがし始める。", anchor: "early-battle-2" },
  { year: "618", title: "{{煬帝|ようだい}}の死・唐の建国", note: "煬帝が江都で殺され、長安の李淵が皇帝に即位して唐を建てる。", href: EV_SUI_FALL && `/events/${EV_SUI_FALL.slug}` },
  { year: "621", title: "{{虎牢関|ころうかん}}の戦い", note: "李世民が竇建徳と王世充を同時に屈服させ、統一の流れを決める。", anchor: "early-battle-3" },
  { year: "626", title: "{{玄武門|げんぶもん}}の変", note: "李世民が兄の皇太子を討ち、太宗として即位。「貞観の治」が始まる。", anchor: "early-battle-4" },
  { year: "630", title: "{{東突厥|とうとっけつ}}の平定", note: "李靖が頡利可汗を捕らえ、太宗は「天可汗」と仰がれる。", anchor: "early-battle-5" },
  { year: "663", title: "{{白村江|はくすきのえ}}の戦い", note: "唐・新羅連合軍が倭・百済連合軍を破る。敗れた日本は国防と律令国家づくりを急ぐ。" },
  { year: "690", title: "{{武則天|ぶそくてん}}、皇帝に", note: "中国史上唯一の女帝が即位し、国号を一時「周」と改める。", href: EV_WUZETIAN && `/events/${EV_WUZETIAN.slug}` },
  { year: "751", title: "タラス{{河畔|かはん}}の戦い", note: "中央アジアで唐軍がアッバース朝に敗れる。捕虜を通じて製紙法が西方へ伝わったとする説がある。", href: "/four-inventions" },
];

// 唐後半・五代十国（755〜979年）の流れ
const LATE_FLOW = [
  { year: "755", title: "{{安史|あんし}}の乱の勃発", note: "節度使安禄山が范陽で挙兵し、たちまち洛陽を落とす。", href: EV_ANSHI && `/events/${EV_ANSHI.slug}` },
  { year: "756", title: "{{潼関|どうかん}}の戦い・{{馬嵬|ばかい}}の悲劇", note: "長安の関門が破られ、玄宗は蜀へ逃れる途中で楊貴妃を失う。", anchor: "late-battle-1" },
  { year: "757", title: "{{睢陽|すいよう}}の戦い", note: "張巡らが10か月の籠城で反乱軍の南下を食い止める。", anchor: "late-battle-2" },
  { year: "875–884", title: "{{黄巣|こうそう}}の乱", note: "塩の密売人黄巣が長安を占領。唐の支配は事実上崩壊する。", anchor: "late-battle-3" },
  { year: "907", title: "唐の滅亡・五代十国の始まり", note: "朱全忠が唐を滅ぼして後梁を建て、各地の勢力が次々と自立する。", href: EV_TANG_FALL && `/events/${EV_TANG_FALL.slug}` },
  { year: "923", title: "{{後唐|こうとう}}、{{後梁|こうりょう}}を滅ぼす", note: "李存勗が汴州を急襲し、父李克用の宿敵朱氏の王朝を倒す。", anchor: "late-battle-4" },
  { year: "936", title: "{{燕雲十六州|えんうんじゅうろくしゅう}}の割譲", note: "後晋の石敬瑭が契丹の援助の見返りに長城以南の要地を譲る。", href: EV_ENUN && `/events/${EV_ENUN.slug}` },
  { year: "954", title: "{{高平|こうへい}}の戦い", note: "後周の世宗柴栄が北漢・遼軍を破り、統一への道を開く。", anchor: "late-battle-5" },
  { year: "960", title: "{{陳橋|ちんきょう}}の変・宋の建国", note: "禁軍の将兵に推された趙匡胤が即位し、宋を建てる。", href: EV_CHENQIAO && `/events/${EV_CHENQIAO.slug}` },
  { year: "979", title: "{{北漢|ほっかん}}の滅亡・宋の統一", note: "十国最後の北漢が降り、約70年続いた分裂の時代が終わる。", anchor: "late-battle-6" },
];

// 中国本土＋海南島の輪郭（/world-heritage・/sanguo-battles・/chunqiu-zhanguo-battlesと同じ、実際の海岸線をもとにした投影データ）
const CHINA_OUTLINE =
  "M294.9,341.64L288.42,346.09L282.27,343.22L282.06,335.26L285.75,331.07L293.94,328.48L298.25,328.7L299.93,332.23L296.64,336.3L294.9,341.64Z " +
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";
const TAIWAN_OUTLINE =
  "M380.66,288.78L376.15,303.61L372.94,311.2L368.99,303.39L368.13,296.53L372.54,287.45L378.54,280.45L381.97,283.2L380.66,288.78Z";

// 合戦地点。経緯度から/world-heritage・/sanguo-battles・/chunqiu-zhanguo-battlesと同じ図法（線形近似）で算出し、
// 近接する史跡同士は視認性のため数px調整している
// X ≈ 340 + 7.495×(経度-116.4) / Y ≈ 145 - 9.343×(緯度-39.9)
const EARLY_BATTLES = [
  {
    no: 1,
    id: "early-battle-1",
    year: "588〜589年",
    name: "隋の{{陳|ちん}}征服（{{建康|けんこう}}攻略）",
    location: "建康（江蘇省南京市）",
    mapX: 358,
    mapY: 218,
    factions: [
      { side: "隋軍", people: "{{楊広|ようこう}}（晋王・のちの煬帝）・{{賀若弼|がじゃくひつ}}・{{韓擒虎|かんきんこ}}" },
      { side: "陳軍", people: "{{陳叔宝|ちんしゅくほう}}（{{後主|こうしゅ}}）" },
    ],
    body: "588年冬、文帝は次男の晋王{{楊広|ようこう}}を総帥とし、総勢51万余とされる大軍を長江の上流から下流まで八つの方面に分けて進発させた。翌589年正月、{{賀若弼|がじゃくひつ}}と{{韓擒虎|かんきんこ}}の軍が長江を渡って都{{建康|けんこう}}に迫ると、享楽にふけっていた陳の宮廷は組織的な抵抗もできないまま韓擒虎の軍の突入を許した。後主{{陳叔宝|ちんしゅくほう}}は寵姫とともに宮中の井戸に隠れていたところを引き出されて捕らえられたと伝えられる。こうして{{西晋|せいしん}}の滅亡以来約270年続いた南北の分裂は終わりを告げた。",
    relatedHref: EV_CHEN && `/events/${EV_CHEN.slug}`,
    relatedLabel: "隋による中国再統一を年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "隋文帝", ...IMG_WENDI },
  },
  {
    no: 2,
    id: "early-battle-2",
    year: "612年",
    name: "{{高句麗|こうくり}}遠征（{{薩水|さっすい}}の戦い）",
    location: "遼東城（遼寧省遼陽市）〜薩水（朝鮮半島北部の清川江）",
    mapX: 390,
    mapY: 132,
    factions: [
      { side: "隋軍", people: "{{煬帝|ようだい}}・{{宇文述|うぶんじゅつ}}・{{于仲文|うちゅうぶん}}" },
      { side: "高句麗軍", people: "{{乙支文徳|いつしぶんとく}}" },
    ],
    body: "{{煬帝|ようだい}}は612年、号して200万（戦闘部隊だけで113万余とされる）という空前の大軍で高句麗に親征した。しかし{{遼東城|りょうとうじょう}}の攻略に手間取ったため、{{宇文述|うぶんじゅつ}}らが30万余の別働隊を率いて都の平壌を直接目指す。高句麗の名将{{乙支文徳|いつしぶんとく}}は偽りの降伏と退却で隋軍を奥深くへ誘い込み、疲れ果てて引き返す隋軍が{{薩水|さっすい}}を渡るところを襲って壊滅させた。生きて遼東へ戻れたのは2700人ほどだったと伝えられる。煬帝はその後も遠征を繰り返したが成果はなく、重い負担に苦しむ民衆の反乱が隋の滅亡を早めることになった。",
    relatedHref: EV_GOGURYEO && `/events/${EV_GOGURYEO.slug}`,
    relatedLabel: "高句麗遠征の失敗を年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "隋煬帝", ...IMG_YANGDI },
  },
  {
    no: 3,
    id: "early-battle-3",
    year: "621年",
    name: "{{虎牢関|ころうかん}}の戦い",
    location: "虎牢関（河南省滎陽市）",
    mapX: 316,
    mapY: 192,
    factions: [
      { side: "唐軍", people: "{{李世民|りせいみん}}（秦王）・{{尉遅敬徳|うっちけいとく}}" },
      { side: "夏・鄭軍", people: "{{竇建徳|とうけんとく}}・{{王世充|おうせいじゅう}}" },
    ],
    body: "洛陽に拠って「鄭」を称した{{王世充|おうせいじゅう}}を秦王{{李世民|りせいみん}}が包囲すると、河北の{{竇建徳|とうけんとく}}が10万余とされる大軍で救援に向かった。李世民は洛陽の包囲を続けさせたまま、自らわずか3500の精鋭を率いて東の要衝{{虎牢関|ころうかん}}に先回りし、竇建徳軍の進路を塞ぐ。約1か月のにらみ合いの末、疲れて陣形の乱れた夏軍に騎兵で突撃してこれを大破し、竇建徳を捕虜とした。援軍の望みを絶たれた王世充も降伏し、一戦で二大勢力を同時に屈服させたこの勝利によって、唐による天下統一の流れが決定づけられた。",
    relatedHref: null,
    relatedLabel: null,
    personHref: HREF_TAIZONG,
    personLabel: "唐太宗（李世民）の生涯を読む",
    portrait: { name: "唐太宗", ...IMG_TAIZONG },
  },
  {
    no: 4,
    id: "early-battle-4",
    year: "626年",
    name: "{{玄武門|げんぶもん}}の変",
    location: "長安・太極宮の北門（陝西省西安市）",
    mapX: 282,
    mapY: 200,
    factions: [
      { side: "秦王府", people: "{{李世民|りせいみん}}・{{長孫無忌|ちょうそんむき}}・{{尉遅敬徳|うっちけいとく}}" },
      { side: "東宮", people: "皇太子{{李建成|りけんせい}}・斉王{{李元吉|りげんきつ}}" },
    ],
    body: "唐建国の最大の功労者となった次男の秦王{{李世民|りせいみん}}と、皇太子の兄{{李建成|りけんせい}}・弟{{李元吉|りげんきつ}}との対立は、やがて互いの命を狙うほどに深まった。626年6月、李世民は宮城の北門である{{玄武門|げんぶもん}}に兵を伏せ、参内しようとした建成と元吉を待ち伏せて、自ら建成を射殺し、元吉も{{尉遅敬徳|うっちけいとく}}に討たれた。父の高祖{{李淵|りえん}}は事態を追認して李世民を皇太子に立て、2か月後には譲位する。こうして即位した太宗は「{{貞観|じょうがん}}の治」と称される名君の治世を築いたが、兄弟を手にかけた即位の経緯は後世まで議論の的となった。",
    relatedHref: EV_GENBUMON && `/events/${EV_GENBUMON.slug}`,
    relatedLabel: "玄武門の変を年表で読む",
    personHref: HREF_TAIZONG,
    personLabel: "唐太宗（李世民）の生涯を読む",
    portrait: { name: "唐太宗", ...IMG_TAIZONG },
  },
  {
    no: 5,
    id: "early-battle-5",
    year: "630年",
    name: "{{東突厥|とうとっけつ}}の平定（{{陰山|いんざん}}の戦い）",
    location: "定襄・陰山山脈一帯（内モンゴル自治区）",
    mapX: 305,
    mapY: 137,
    factions: [
      { side: "唐軍", people: "{{李靖|りせい}}・{{李勣|りせき}}" },
      { side: "東突厥", people: "{{頡利可汗|けつりかがん}}" },
    ],
    body: "唐の建国当初、北方の{{東突厥|とうとっけつ}}は強大で、626年には{{頡利可汗|けつりかがん}}の大軍が長安近郊の渭水まで迫り、即位直後の太宗が自ら出向いて盟約を結ぶほどであった。その後、東突厥で内紛や雪害が続いて弱体化すると、太宗は反撃に転じる。630年、名将{{李靖|りせい}}はわずか3000の騎兵で夜襲をかけて{{定襄|ていじょう}}を落とし、さらに{{李勣|りせき}}とともに{{陰山|いんざん}}の頡利可汗の本営を急襲して大破した。捕らえられた頡利可汗は長安へ送られ、北方の遊牧諸部族は太宗に「{{天可汗|てんかがん}}」の称号を奉って、唐は東アジアの盟主としての地位を確立した。",
    relatedHref: EV_TUJUE && `/events/${EV_TUJUE.slug}`,
    relatedLabel: "東突厥の平定を年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "李靖", ...IMG_LIJING },
  },
];

const LATE_BATTLES = [
  {
    no: 1,
    id: "late-battle-1",
    year: "756年",
    name: "{{潼関|どうかん}}の戦い（安史の乱）",
    location: "潼関（陝西省渭南市潼関県）",
    mapX: 297,
    mapY: 193,
    factions: [
      { side: "唐軍", people: "{{哥舒翰|かじょかん}}" },
      { side: "燕軍", people: "{{安禄山|あんろくざん}}・{{崔乾祐|さいけんゆう}}" },
    ],
    body: "755年冬、{{范陽|はんよう}}（現在の北京付近）で挙兵した節度使{{安禄山|あんろくざん}}の軍はたちまち洛陽を落とし、翌年正月には「大燕皇帝」を称した。唐は長安の東の関門{{潼関|どうかん}}に老将{{哥舒翰|かじょかん}}を置いて守りを固めたが、哥舒翰に兵権を握られることを恐れた宰相{{楊国忠|ようこくちゅう}}の進言もあって、玄宗は出撃を強く命じる。やむなく打って出た唐軍は隘路で{{崔乾祐|さいけんゆう}}の伏兵に遭って壊滅し、哥舒翰も捕らえられた。潼関が破られると玄宗は長安を捨てて蜀へ逃れ、その途上の{{馬嵬駅|ばかいえき}}では怒った兵士たちが楊国忠を殺し、玄宗は{{楊貴妃|ようきひ}}にも死を賜らざるを得なくなった。",
    relatedHref: EV_ANSHI && `/events/${EV_ANSHI.slug}`,
    relatedLabel: "安史の乱を年表で読む",
    personHref: HREF_YANGGUIFEI,
    personLabel: "楊貴妃の生涯を読む",
    portrait: { name: "楊貴妃" },
  },
  {
    no: 2,
    id: "late-battle-2",
    year: "757年",
    name: "{{睢陽|すいよう}}の戦い",
    location: "睢陽（河南省商丘市）",
    mapX: 336,
    mapY: 198,
    factions: [
      { side: "唐軍", people: "{{張巡|ちょうじゅん}}・{{許遠|きょえん}}" },
      { side: "燕軍", people: "{{尹子奇|いんしき}}" },
    ],
    body: "安禄山が息子に殺された後も反乱軍の勢いは衰えず、唐の財政を支える江淮地方への南下をうかがった。その通り道にあたる{{睢陽|すいよう}}城では、{{張巡|ちょうじゅん}}と{{許遠|きょえん}}がわずか数千の兵で、十数万ともいわれる{{尹子奇|いんしき}}の大軍を相手に約10か月にわたって籠城を続けた。救援もないまま食糧が尽き、城内では雀や鼠、樹皮まで食べ尽くしたと伝えられる凄惨な状況の末、757年10月に城は陥落して張巡らは処刑された。しかしこの長期の抗戦で反乱軍の江淮進出は阻まれ、南方からの物資が守られたことが、同じ年の唐による長安・洛陽の奪回を支えたと評価されている。",
    relatedHref: null,
    relatedLabel: null,
    personHref: null,
    personLabel: null,
    portrait: { name: "張巡" },
  },
  {
    no: 3,
    id: "late-battle-3",
    year: "875〜884年",
    name: "{{黄巣|こうそう}}の乱（長安占領）",
    location: "長安（陝西省西安市）ほか華北・江南・嶺南の各地",
    mapX: 280,
    mapY: 201,
    factions: [
      { side: "反乱軍", people: "{{王仙芝|おうせんし}}・{{黄巣|こうそう}}・{{朱温|しゅおん}}（のちの朱全忠）" },
      { side: "唐軍", people: "{{李克用|りこくよう}}（{{沙陀|さだ}}軍）・各地の節度使" },
    ],
    body: "塩の密売人であった{{王仙芝|おうせんし}}と{{黄巣|こうそう}}は、重税と飢饉にあえぐ農民を集めて875年ごろ相次いで挙兵した。王仙芝の死後に反乱軍を率いた黄巣は、官軍との正面衝突を避けて江南から遠く広州まで転戦したのち北へ転じ、880年末に洛陽、続いて長安を占領して「大斉」の皇帝に即位した。しかし配下の{{朱温|しゅおん}}が唐に寝返って{{全忠|ぜんちゅう}}の名を賜り、{{沙陀|さだ}}族の{{李克用|りこくよう}}の騎兵軍が加わると形勢は逆転する。883年に長安を追われた黄巣は、翌884年に泰山の近くで滅んだ。乱は鎮圧されたものの唐の権威は地に落ち、鎮圧に功のあった朱全忠と李克用の宿命の対立が、次の五代の時代を形作っていく。",
    relatedHref: EV_TANG_FALL && `/events/${EV_TANG_FALL.slug}`,
    relatedLabel: "朱全忠による唐の滅亡を年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "朱全忠", ...IMG_ZHUQUANZHONG },
  },
  {
    no: 4,
    id: "late-battle-4",
    year: "923年",
    name: "{{後唐|こうとう}}の{{汴州|べんしゅう}}急襲（後梁の滅亡）",
    location: "汴州（河南省開封市）",
    mapX: 324,
    mapY: 192,
    factions: [
      { side: "後唐軍", people: "{{李存勗|りそんきょく}}（荘宗）・{{李嗣源|りしげん}}" },
      { side: "後梁軍", people: "{{末帝|まってい}}（{{朱友貞|しゅゆうてい}}）・{{王彦章|おうげんしょう}}" },
    ],
    body: "父{{李克用|りこくよう}}の跡を継いだ晋王{{李存勗|りそんきょく}}は、黄河を挟んで朱全忠の{{後梁|こうりょう}}と十数年にわたる攻防を続けた。923年4月に皇帝に即位して国号を唐（後唐）とすると、同年10月、後梁の主力が黄河沿いに釘付けになっている隙を突き、{{李嗣源|りしげん}}を先鋒にわずか数日で後梁の都{{汴州|べんしゅう}}へ急進する。不意を突かれた後梁の末帝は自ら命を絶ち、後梁は建国17年で滅んだ。李克用が臨終に三本の矢を託して燕・契丹・梁への復讐を命じたという「三矢の遺言」の伝説は、この勝利で果たされたとされる。しかし李存勗は即位後、役者を寵愛して政治を乱し、わずか3年後に反乱のなかで命を落とした。",
    relatedHref: EV_HOUTANG && `/events/${EV_HOUTANG.slug}`,
    relatedLabel: "後唐の建国を年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "李存勗", ...IMG_LICUNXU },
  },
  {
    no: 5,
    id: "late-battle-5",
    year: "954年",
    name: "{{高平|こうへい}}の戦い",
    location: "高平（山西省晋城市高平市）",
    mapX: 314,
    mapY: 183,
    factions: [
      { side: "後周軍", people: "{{世宗|せいそう}}（{{柴栄|さいえい}}）・{{趙匡胤|ちょうきょういん}}" },
      { side: "北漢・遼軍", people: "{{劉崇|りゅうすう}}（北漢）・{{楊袞|ようこん}}（遼）" },
    ],
    body: "954年、{{後周|こうしゅう}}の太祖{{郭威|かくい}}が没して養子の{{柴栄|さいえい}}（世宗）が即位すると、その隙を突いて太原の{{北漢|ほっかん}}が遼（契丹）の援軍を得て南下した。世宗は重臣の反対を押し切って親征し、{{高平|こうへい}}で北漢軍と激突する。開戦直後に右翼の将軍たちが逃げ出して全軍が崩れかけたが、世宗が自ら矢の飛び交う最前線に馬を進めて督戦し、禁軍の将校であった{{趙匡胤|ちょうきょういん}}らが決死の突撃をかけて形勢を逆転、北漢軍を大破した。戦後、世宗は逃亡した将校70余人を処刑して軍紀を引き締め、禁軍の改革に着手する。この戦いで頭角を現した趙匡胤が、6年後に宋を建国することになる。なお高平は、戦国時代の{{長平|ちょうへい}}の戦いの古戦場でもある。",
    relatedHref: EV_CHAIRONG && `/events/${EV_CHAIRONG.slug}`,
    relatedLabel: "世宗柴栄の治世を年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "柴栄", ...IMG_CHAIRONG },
  },
  {
    no: 6,
    id: "late-battle-6",
    year: "963〜979年",
    name: "宋の天下統一（北漢平定）",
    location: "太原（山西省太原市・北漢の都）ほか",
    mapX: 311,
    mapY: 164,
    factions: [
      { side: "宋軍", people: "{{太祖|たいそ}}（{{趙匡胤|ちょうきょういん}}）・{{太宗|たいそう}}（{{趙光義|ちょうこうぎ}}）・{{曹彬|そうひん}}" },
      { side: "十国", people: "荊南・湖南・後蜀・南漢・南唐・北漢など" },
    ],
    body: "960年の{{陳橋|ちんきょう}}の変で即位した太祖{{趙匡胤|ちょうきょういん}}は、豊かな南方を先に平定し、遼と結ぶ強敵の北漢は後回しにする「{{先南後北|せんなんこうほく}}」の方針をとった。963年の荊南・湖南を皮切りに、965年に{{後蜀|こうしょく}}、971年に{{南漢|なんかん}}を降し、975年には名将{{曹彬|そうひん}}が長江に浮橋を架けて{{南唐|なんとう}}の都金陵を落とし、詞人として名高い後主{{李煜|りいく}}を降伏させた。太祖の急死後に即位した弟の太宗は、978年に{{呉越|ごえつ}}などを戦わずして帰順させ、979年には遼の援軍を退けて{{北漢|ほっかん}}の太原を陥落させる。こうして約70年続いた五代十国の分裂は終わったが、遼の手にある燕雲十六州の奪回は果たせず、宋はその後も北方の脅威に悩まされ続けることになる。",
    relatedHref: EV_CHENQIAO && `/events/${EV_CHENQIAO.slug}`,
    relatedLabel: "陳橋の変・宋の建国を年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "宋太祖", ...IMG_SONGTAIZU },
  },
];

// 大まかな勢力圏・地域のラベル（範囲を厳密に示すものではない）
const EARLY_REGION_LABELS = [
  { label: "突厥", x: 270, y: 112 },
  { label: "高句麗", x: 418, y: 120 },
  { label: "関中", x: 262, y: 186 },
  { label: "河北", x: 345, y: 170 },
  { label: "江南", x: 350, y: 240 },
];
const LATE_REGION_LABELS = [
  { label: "契丹（遼）", x: 300, y: 112 },
  { label: "関中", x: 262, y: 186 },
  { label: "河北", x: 345, y: 165 },
  { label: "蜀", x: 248, y: 232 },
  { label: "江南", x: 350, y: 240 },
];

function BattleMap({ battles, regionLabels, note }) {
  return (
    <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>{note}</p>
      <svg viewBox="0 0 500 366" style={{ width: "100%", maxHeight: 400, display: "block", margin: "0 auto" }}>
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />
        <path d={TAIWAN_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />

        {regionLabels.map((r, i) => (
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

        {battles.map((b) => (
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

function FlowList({ items }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((f, i) => {
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
            {(f.href || f.anchor) && <span className="shrink-0" style={{ color: COLORS.vermilion, fontSize: 13 }}>→</span>}
          </div>
        );
        if (f.href) {
          return <a key={i} href={f.href}>{content}</a>;
        }
        if (f.anchor) {
          return <a key={i} href={`#${f.anchor}`}>{content}</a>;
        }
        return <div key={i}>{content}</div>;
      })}
    </div>
  );
}

function BattleCards({ battles }) {
  return (
    <div className="flex flex-col gap-5">
      {battles.map((b) => (
        <div key={b.no} id={b.id} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", scrollMarginTop: 16 }}>
          <div className="flex gap-3 p-4">
            {b.portrait?.imageUrl && (
              <div
                className="flex items-center justify-center shrink-0"
                style={{ width: 88, height: 88, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}
              >
                <HeritageThumb imageUrl={b.portrait.imageUrl} name={b.portrait.name} type="figure" />
              </div>
            )}
            <div className="flex-1 min-w-0">
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
              <span aria-hidden>📍</span> <RubyText text={b.location} />
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

            {b.portrait?.credit && (
              <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 4 }}>{b.portrait.credit}</div>
            )}

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
        </div>
      ))}
    </div>
  );
}

export default function SuitangBattlesPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          隋唐・五代 合戦マップ
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 20 }}>
          589年、隋が約270年ぶりに南北を統一してから、979年に宋が五代十国の分裂を終わらせるまで——この約400年は、
          世界帝国・唐の繁栄と、安史の乱・黄巣の乱を経た崩壊、そして目まぐるしく王朝が入れ替わる五代十国の動乱が続いた時代です。
          このページでは前半の「隋・唐前期」と後半の「唐後期・五代十国」に分けて、代表的な合戦とそこで活躍した人物たちを地図とともに紹介します。
        </p>

        <div className="flex items-center gap-2.5 flex-wrap mb-10" style={{ fontSize: 12.5 }}>
          <a href="#early" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            → 隋・唐前期（581〜755）へ
          </a>
          <span style={{ color: COLORS.mist }}>|</span>
          <a href="#late" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            → 唐後期・五代十国（755〜979）へ
          </a>
          <span style={{ color: COLORS.mist }}>|</span>
          <a href="#border-map" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            → 勢力図の変遷へ
          </a>
        </div>

        <section id="early" style={{ marginBottom: 20, scrollMarginTop: 16 }}>
          <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 4 }}>
            581 – 755
          </div>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 21, fontWeight: 900, color: COLORS.ink, marginBottom: 4 }}>
            隋・唐前期の合戦
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 16 }}>
            隋が南北を統一するも二代で倒れ、代わった唐が太宗のもとで草原から西域までを従える世界帝国へと成長した時代。
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            時代の流れ
          </h3>
          <FlowList items={EARLY_FLOW} />
        </section>

        <section style={{ marginBottom: 12 }}>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            合戦地図
          </h3>
          <BattleMap
            battles={EARLY_BATTLES}
            regionLabels={EARLY_REGION_LABELS}
            note="実際の海岸線をもとにした位置関係図です。朱色の番号は下の各合戦の位置を示しています（薩水の戦いは、遠征の拠点となった遼東城の位置で示しています）。"
          />
        </section>

        <section style={{ marginBottom: 40 }}>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 16 }}>
            主要な戦い
          </h3>
          <BattleCards battles={EARLY_BATTLES} />
        </section>

        <section id="late" style={{ marginBottom: 20, paddingTop: 8, borderTop: `1px solid ${COLORS.mist}`, scrollMarginTop: 16 }}>
          <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 4, marginTop: 24 }}>
            755 – 979
          </div>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 21, fontWeight: 900, color: COLORS.ink, marginBottom: 4 }}>
            唐後期・五代十国の合戦
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 16 }}>
            安史の乱で揺らいだ唐が藩鎮の自立と黄巣の乱によって崩れ、華北では5つの王朝が、南方では十余りの国が興亡を繰り返した時代。
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            時代の流れ
          </h3>
          <FlowList items={LATE_FLOW} />
        </section>

        <section style={{ marginBottom: 12 }}>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            合戦地図
          </h3>
          <BattleMap
            battles={LATE_BATTLES}
            regionLabels={LATE_REGION_LABELS}
            note="実際の海岸線をもとにした位置関係図です。朱色の番号は下の各合戦の位置を示しています（黄巣の乱は長安占領の位置で示しています）。"
          />
        </section>

        <section id="border-map" style={{ marginBottom: 12, scrollMarginTop: 16 }}>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            勢力図の変遷アニメーション
          </h3>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 12 }}>
            隋の統一、唐の最盛期、安史の乱と藩鎮の割拠、そして五代十国の分裂から宋の統一まで——再生ボタンまたは年代タブで、勢力図が移り変わる様子を確認できます。
          </p>
          <SuitangBorderMap />
        </section>

        <section>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 16 }}>
            主要な戦い
          </h3>
          <BattleCards battles={LATE_BATTLES} />
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            隋による統一の前、約400年前の「三国時代」や、さらにさかのぼる「春秋・戦国時代」の合戦については、
            あわせて下記の特集ページもご覧ください。宋と遼の攻防を描いた『楊家将』の特集もあります。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/sanguo-battles" variant="solid">三国時代 合戦マップを見る</NavButton>
            <NavButton href="/chunqiu-zhanguo-battles" variant="outline">春秋・戦国 合戦マップを見る</NavButton>
            <NavButton href="/yangjiajiang" variant="outline">楊家将の特集を見る</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
