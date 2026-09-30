import { ERAS, stripRuby, getEraFigures, personSlug, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection, HeritageThumb } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "楊家将とは？北方謙三『楊家将』で読む宋と遼の戦い";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "北宋の武門・楊一族の物語「楊家将」を、史実・明代の演義・北方謙三の小説の3つの視点で解説。燕雲十六州をめぐる宋と遼の戦い、楊業の最期となった陳家谷の戦いを地図と年表でたどり、主要人物や史実と物語の違いも紹介します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/yangjiajiang" },
  openGraph: buildOpenGraph({
    title: fullTitle,
    description,
    path: "/yangjiajiang",
    type: "article",
    image: { title: "楊家将とは？", subtitle: "宋と遼の戦い", kicker: "北宋", seal: "楊" },
  }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const SONG_COLOR = "#B5452F";
const LIAO_COLOR = "#4F6FA0";

const sectionHeading = { fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 14 };
const card = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const bodyText = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft };

// 出来事タイトルの部分一致から該当イベントページへのリンクを探す
function findEventHref(eraId, titleIncludes) {
  const era = ERAS.find((e) => e.id === eraId);
  const event = era?.events.find((ev) => stripRuby(ev.title).includes(titleIncludes));
  return event ? `/events/${event.slug}` : null;
}

const NORTHERN_SONG = ERAS.find((e) => e.id === "northernsong");
const SONG_FIGURES = getEraFigures(NORTHERN_SONG);

// 人物名（前方一致）から、年表データ上の肖像画と伝記ページ（bioがある場合のみ）を引く
function findFigure(name) {
  const figure = SONG_FIGURES.find((p) => stripRuby(p.name).startsWith(name));
  if (!figure) return {};
  return {
    imageUrl: figure.imageUrl || null,
    credit: figure.credit || null,
    href: figure.bio ? `/people/northernsong/${encodeURIComponent(personSlug(figure.name))}` : null,
  };
}

const HREF_YANYUN = findEventHref("wudai", "燕雲十六州");
const HREF_SONG = findEventHref("northernsong", "宋の建国");
const HREF_YONGXI = findEventHref("northernsong", "雍熙の北伐");
const HREF_CHANYUAN = findEventHref("northernsong", "澶淵の盟");

const YANG_YE = findFigure("楊業");
const YANG_YANZHAO = findFigure("楊延昭");
const PAN_MEI = findFigure("潘美");
const TAIZONG = findFigure("宋太宗");
const KOU_ZHUN = findFigure("寇準");

// 遼の人物は年表データ（宋側の王朝）に含まれないため、このページ内だけで紹介する
const XIAO_TAIHOU_IMAGE = {
  imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Empress_Dowager_Xiao_1892.jpg",
  credit: "清代刊本『北宋志伝（楊家将演義）』挿絵 / Wikimedia Commons（パブリックドメイン）",
};

// 地図の投影。/sanguo-battlesなどと同じ線形近似（経緯度→SVG座標）
const project = (lon, lat) => [340 + 7.495 * (lon - 116.4), 145 - 9.343 * (lat - 39.9)];

// 中国本土の輪郭（/sanguo-battlesと同じ海岸線データ）。華北部分だけをviewBoxで切り出して拡大表示する
const CHINA_OUTLINE =
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";

// 燕雲十六州のおおよその範囲（幽州〜雲州〜瀛州・莫州を結んだ概略。厳密な州境ではない）
const YANYUN_POLYGON = [
  [112.0, 40.3], [113.8, 40.8], [115.8, 41.0], [117.4, 40.8], [118.1, 40.1], [117.6, 39.3],
  [116.9, 38.5], [116.0, 38.3], [115.3, 38.6], [114.8, 39.1], [113.6, 39.0], [112.2, 39.0],
]
  .map(([lon, lat]) => project(lon, lat).map((v) => v.toFixed(1)).join(","))
  .join(" ");

// 年表と地図の番号は同じ並び（年代順）
const BATTLES = [
  {
    no: 1,
    id: "battle-1",
    year: "979",
    name: "{{太原|たいげん}}攻略（{{北漢|ほっかん}}の滅亡）",
    location: "山西省太原市",
    lon: 112.55,
    lat: 37.87,
    label: "太原",
    labelSide: "right",
    factions: [
      { side: "宋軍", color: SONG_COLOR, people: "{{太宗|たいそう}}・{{潘美|はんび}}" },
      { side: "北漢軍", color: COLORS.gold, people: "{{劉継元|りゅうけいげん}}・{{劉継業|りゅうけいぎょう}}（{{楊業|ようぎょう}}）" },
    ],
    body: "五代十国で最後まで残った{{北漢|ほっかん}}は、遼の後ろ盾を得て宋に抵抗を続けていた。宋の{{太宗|たいそう}}は自ら大軍を率いて都{{太原|たいげん}}を包囲し、救援に来た遼軍を退けて北漢を降伏させる。最後まで戦い続けた北漢の将・劉継業は、主君の説得を受けてようやく投降した。その武勇を惜しんだ太宗は彼を厚遇し、劉継業は楊姓に戻して{{楊業|ようぎょう}}と名乗り、宋の将として遼と戦うことになる。",
    portrait: { name: "宋太宗", ...TAIZONG },
    personHref: TAIZONG.href,
    personLabel: "宋太宗の生涯を読む",
  },
  {
    no: 2,
    id: "battle-2",
    year: "979",
    name: "{{高梁河|こうりょうが}}の戦い",
    location: "北京市（遼の南京・幽州）付近",
    lon: 116.35,
    lat: 39.95,
    label: "高梁河",
    labelSide: "right",
    factions: [
      { side: "宋軍", color: SONG_COLOR, people: "{{太宗|たいそう}}" },
      { side: "遼軍", color: LIAO_COLOR, people: "{{耶律休哥|やりつきゅうか}}・{{耶律斜軫|やりつしゃしん}}" },
    ],
    body: "北漢を滅ぼした勢いのまま、{{太宗|たいそう}}は休む間もなく軍を北へ進め、{{燕雲十六州|えんうんじゅうろくしゅう}}の中心である遼の{{幽州|ゆうしゅう}}（現在の北京）を包囲した。しかし長い遠征で宋軍は疲弊しており、救援に駆けつけた{{耶律休哥|やりつきゅうか}}らの遼軍に{{高梁河|こうりょうが}}のほとりで大敗する。太宗自身も矢傷を負い、ロバの引く車で逃げ延びたと伝えられる。燕雲奪還の最初の試みは、こうして失敗に終わった。",
    portrait: { name: "宋太宗", ...TAIZONG },
    personHref: null,
  },
  {
    no: 3,
    id: "battle-3",
    year: "980",
    name: "{{雁門関|がんもんかん}}の戦い",
    location: "山西省忻州市代県",
    lon: 112.87,
    lat: 39.18,
    label: "雁門関",
    labelSide: "right",
    factions: [
      { side: "宋軍", color: SONG_COLOR, people: "{{楊業|ようぎょう}}・{{潘美|はんび}}" },
      { side: "遼軍", color: LIAO_COLOR, people: "遼の大軍" },
    ],
    body: "高梁河の勝利の翌年、遼は大軍で長城の要衝{{雁門関|がんもんかん}}に迫った。{{代州|だいしゅう}}を守る{{楊業|ようぎょう}}はわずか数百の騎兵を率いて間道から敵の背後に回り込み、正面の{{潘美|はんび}}の軍と呼応して挟撃し、遼軍を大いに打ち破った。以後、遼の兵は楊業の旗を見ただけで退いたといわれ、彼は「楊無敵」の異名で呼ばれるようになる。",
    portrait: { name: "楊業", ...YANG_YE },
    personHref: YANG_YE.href,
    personLabel: "楊業の生涯を読む",
  },
  {
    no: 4,
    id: "battle-4",
    year: "986",
    name: "{{岐溝関|きこうかん}}の戦い（{{雍熙|ようき}}の北伐）",
    location: "河北省涿州市付近",
    lon: 115.97,
    lat: 39.49,
    label: "岐溝関",
    labelSide: "right",
    factions: [
      { side: "宋軍（東路）", color: SONG_COLOR, people: "{{曹彬|そうひん}}・{{米信|べいしん}}" },
      { side: "遼軍", color: LIAO_COLOR, people: "{{耶律休哥|やりつきゅうか}}・{{蕭太后|しょうたいごう}}" },
    ],
    body: "986年、遼で幼い{{聖宗|せいそう}}が即位したのを好機とみた{{太宗|たいそう}}は、東・中・西の三路から燕雲奪還の大軍を送り出した（{{雍熙|ようき}}の北伐）。主力の東路軍を率いる{{曹彬|そうひん}}は{{涿州|たくしゅう}}まで進んだが、{{耶律休哥|やりつきゅうか}}に補給路を執拗に襲われて撤退を余儀なくされ、退却の途中、{{岐溝関|きこうかん}}で遼軍に追いつかれて壊滅的な敗北を喫する。この敗戦で北伐は総崩れとなり、各方面の軍に撤退が命じられた。",
    portrait: null,
    relatedHref: HREF_YONGXI,
    relatedLabel: "雍熙の北伐を年表で読む",
  },
  {
    no: 5,
    id: "battle-5",
    year: "986",
    name: "{{陳家谷|ちんかこく}}の戦い（{{楊業|ようぎょう}}の最期）",
    location: "山西省朔州市付近",
    lon: 112.43,
    lat: 39.33,
    label: "陳家谷",
    labelSide: "left",
    factions: [
      { side: "宋軍（西路）", color: SONG_COLOR, people: "{{楊業|ようぎょう}}・{{楊延玉|ようえんぎょく}}・{{潘美|はんび}}・{{王侁|おうしん}}" },
      { side: "遼軍", color: LIAO_COLOR, people: "{{耶律斜軫|やりつしゃしん}}" },
    ],
    body: "西路軍の副将{{楊業|ようぎょう}}は、攻略した四州の住民を宋の領内へ逃がす撤退戦の中で、勢いに乗る遼軍との正面衝突は避けるべきだと主張した。しかし監軍{{王侁|おうしん}}に臆病者とそしられ、やむなく出撃する。楊業は{{陳家谷|ちんかこく}}の谷口に援軍を伏せておくよう主将{{潘美|はんび}}に頼んだが、戦いの末に谷口へ退いたとき、そこに味方の姿はなかった。息子{{楊延玉|ようえんぎょく}}も討ち死にし、捕らえられた楊業は食を絶って死んだと伝えられる。この悲劇が、のちの「楊家将」物語の核となった。",
    portrait: { name: "楊業", ...YANG_YE },
    relatedHref: HREF_YONGXI,
    relatedLabel: "雍熙の北伐と楊業の戦死を年表で読む",
    personHref: YANG_YE.href,
    personLabel: "楊業の生涯を読む",
  },
  {
    no: 6,
    id: "battle-6",
    year: "999",
    name: "{{遂城|すいじょう}}の防衛",
    location: "河北省保定市徐水区付近",
    lon: 115.65,
    lat: 39.02,
    label: "遂城",
    labelSide: "right",
    factions: [
      { side: "宋軍", color: SONG_COLOR, people: "{{楊延昭|ようえんしょう}}" },
      { side: "遼軍", color: LIAO_COLOR, people: "{{蕭太后|しょうたいごう}}・{{聖宗|せいそう}}" },
    ],
    body: "父の死後も国境の守りについていた{{楊延昭|ようえんしょう}}は、999年、{{蕭太后|しょうたいごう}}自らが率いる遼の大軍に小城{{遂城|すいじょう}}を包囲された。兵も少なく城内が動揺する中、楊延昭は厳冬の夜に城壁へ水をかけて一面の氷の壁とし、敵が攀じ登れないようにして城を守り抜いたと伝えられる。楊延昭はその後も20年以上にわたって北辺を守り、物語では「楊六郎」として父に劣らぬ名将に描かれている。",
    portrait: { name: "楊延昭", ...YANG_YANZHAO },
    personHref: YANG_YANZHAO.href,
    personLabel: "楊延昭の生涯を読む",
  },
  {
    no: 7,
    id: "battle-7",
    year: "1004",
    name: "{{澶淵|せんえん}}の盟",
    location: "河南省濮陽市（澶州）",
    lon: 115.03,
    lat: 35.76,
    label: "澶州",
    labelSide: "right",
    factions: [
      { side: "宋", color: SONG_COLOR, people: "{{真宗|しんそう}}・{{寇準|こうじゅん}}" },
      { side: "遼", color: LIAO_COLOR, people: "{{聖宗|せいそう}}・{{蕭太后|しょうたいごう}}" },
    ],
    body: "{{蕭太后|しょうたいごう}}と{{聖宗|せいそう}}が親征して大軍を南下させ、宋の都{{開封|かいほう}}に近い{{澶州|せんしゅう}}まで迫ると、宋では遷都論も出たが、宰相{{寇準|こうじゅん}}の進言で{{真宗|しんそう}}が前線に出て両軍は講和した。宋が毎年絹20万匹・銀10万両を贈る代わりに国境を現状で確定するこの盟約により、燕雲十六州は遼の領土として固定され、以後約120年にわたって両国の平和が続いた。楊家が戦い続けた宋遼の戦争は、ここにひとまずの終わりを迎える。",
    portrait: { name: "寇準", ...KOU_ZHUN },
    relatedHref: HREF_CHANYUAN,
    relatedLabel: "澶淵の盟を年表で読む",
  },
];

// 時代の流れ。hrefは/eventsへの直接リンク、anchorは本ページ内の戦いセクションへのリンク
const FLOW = [
  { year: "936", title: "{{燕雲十六州|えんうんじゅうろくしゅう}}の割譲", note: "{{後晋|こうしん}}の{{石敬瑭|せっけいとう}}が建国の援助と引き換えに、長城以南の16州を契丹（遼）に譲る。", href: HREF_YANYUN },
  { year: "960", title: "宋の建国（{{趙匡胤|ちょうきょういん}}）", note: "燕雲十六州の奪還は、建国当初からの宋の悲願となる。", href: HREF_SONG },
  { year: "979", title: "{{北漢|ほっかん}}の滅亡", note: "{{太宗|たいそう}}が中国本土の統一を完成。北漢の将・劉継業が宋に降り{{楊業|ようぎょう}}と名乗る。", anchor: "battle-1" },
  { year: "979", title: "{{高梁河|こうりょうが}}の戦い", note: "燕雲奪還を狙った太宗が、遼の{{耶律休哥|やりつきゅうか}}らに大敗。", anchor: "battle-2" },
  { year: "980", title: "{{雁門関|がんもんかん}}の戦い", note: "楊業が寡兵で遼の大軍を破り「楊無敵」と恐れられる。", anchor: "battle-3" },
  { year: "986", title: "{{雍熙|ようき}}の北伐・{{岐溝関|きこうかん}}の戦い", note: "三路からの燕雲奪還作戦。主力の東路軍が耶律休哥に大敗する。", anchor: "battle-4" },
  { year: "986", title: "{{陳家谷|ちんかこく}}の戦い", note: "撤退戦の中で援軍を得られなかった楊業が捕らわれ、絶食して死ぬ。", anchor: "battle-5" },
  { year: "999", title: "{{遂城|すいじょう}}の防衛", note: "楊業の子{{楊延昭|ようえんしょう}}が氷の城壁で遼軍を退ける。", anchor: "battle-6" },
  { year: "1004", title: "{{澶淵|せんえん}}の盟", note: "宋と遼が講和。燕雲十六州は遼領として確定する。", anchor: "battle-7" },
];

const PEOPLE = [
  {
    side: "宋",
    color: SONG_COLOR,
    members: [
      { name: "{{楊業|ようぎょう}}", role: "楊家の当主。「楊無敵」", note: "北漢から宋に降った猛将。雁門関で遼を破り、陳家谷で非業の死を遂げた。物語では「楊令公」「楊継業」とも呼ばれる。", ...YANG_YE },
      { name: "{{楊延昭|ようえんしょう}}", role: "楊業の子。物語の「楊六郎」", note: "父の死後も20年以上にわたって北辺を守り抜いた名将。", ...YANG_YANZHAO },
      { name: "{{潘美|はんび}}", role: "西路軍の主将", note: "宋初の統一戦争の功臣。陳家谷で楊業を救えず降格され、物語では悪役「潘仁美」とされた。", ...PAN_MEI },
      { name: "{{宋太宗|そうたいそう}}（{{趙光義|ちょうこうぎ}}）", role: "北宋の第2代皇帝", note: "北漢を滅ぼして統一を完成させたが、燕雲十六州の奪還には二度失敗した。", ...TAIZONG },
    ],
  },
  {
    side: "遼",
    color: LIAO_COLOR,
    members: [
      { name: "{{耶律休哥|やりつきゅうか}}", role: "遼の名将", note: "高梁河・岐溝関の両戦で宋軍を撃破し、遼の最高の栄誉である「{{于越|うえつ}}」の称号を与えられた。" },
      { name: "{{蕭太后|しょうたいごう}}（{{蕭綽|しょうしゃく}}）", role: "聖宗の母・摂政", note: "夫の景宗の死後、幼い聖宗に代わって国政を担った女傑。宋の北伐を退け、澶淵の盟を実現させた。", ...XIAO_TAIHOU_IMAGE },
      { name: "{{耶律斜軫|やりつしゃしん}}", role: "遼の武将", note: "986年、西路の宋軍を迎え撃ち、陳家谷で楊業を捕らえた。" },
    ],
  },
];

// 史実と、明代に成立した演義（『北宋志伝』『楊家府演義』）との違い
const COMPARE_ROWS = [
  { label: "楊業の最期", history: "陳家谷で捕らえられ、食を絶って3日後に死去。", legend: "敵に囲まれ、{{李陵|りりょう}}の碑に頭を打ちつけて自害する。" },
  { label: "潘美", history: "救援を果たせなかった責任で官位を三等下げられたが、のちに復権。", legend: "「潘仁美」の名で、楊家に私怨を抱き楊業父子を死に追いやる奸臣。" },
  { label: "楊業の妻", history: "名門・{{折|せつ}}氏の出身と伝わるが、事績はほとんど記録にない。", legend: "「{{佘太君|しゃたいくん}}」として、夫や息子の亡き後も一族を率いる女傑。" },
  { label: "息子たち", history: "7人の男子が記録され、{{楊延玉|ようえんぎょく}}は陳家谷で戦死。家を継いだのは{{楊延昭|ようえんしょう}}。", legend: "「七郎八虎」と呼ばれる勇将ぞろいで、多くが戦場に散る。四郎は遼の捕虜となって遼の公主と結婚する。" },
  { label: "女性の武将", history: "記録なし。", legend: "{{穆桂英|ぼくけいえい}}をはじめとする「楊門女将」が戦場で活躍する。" },
];

const BOOKS = [
  {
    no: 1,
    title: "『楊家将』",
    meta: "北方謙三 / 2003年（PHP研究所） / 第38回吉川英治文学賞",
    body: "楊業と楊家の男たちを主人公に、宋と遼の戦いを描く。原典である演義を大幅に再構成した、オリジナル色の強い作品。",
  },
  {
    no: 2,
    title: "『血涙 新楊家将』",
    meta: "北方謙三 / 2006年（PHP研究所）",
    body: "『楊家将』の続編。前作に続いて楊家と遼の戦いを描く、同じくオリジナル色の強い作品。『楊家将』を読んでから手に取るのがおすすめ。",
  },
];

const FAQ = [
  {
    q: "楊家将は実話ですか？",
    a: "楊業・楊延昭・楊文広の三代が宋の武将として遼や西夏と戦ったことは、正史『宋史』にも記録された史実です。一方で、佘太君や穆桂英の活躍、七郎八虎の兄弟の物語などは、明代の演義や京劇で脚色・創作された部分が大きく、史実と物語は分けて楽しむのがよいでしょう。",
  },
  {
    q: "北方謙三の『楊家将』と『血涙』はどちらから読めばいいですか？",
    a: "刊行順どおり『楊家将』から読むのがおすすめです。『血涙 新楊家将』は『楊家将』の続編にあたります。",
  },
  {
    q: "楊業はなぜ「楊無敵」と呼ばれたのですか？",
    a: "980年の雁門関の戦いで、わずか数百の騎兵で遼の大軍の背後を突いて大勝したためです。以後、遼の兵は楊業の旗を見ただけで退いたといわれ、「楊無敵」の異名が生まれました。",
  },
  {
    q: "『水滸伝』にも楊家の子孫が登場しますか？",
    a: "登場します。梁山泊の好漢の一人「青面獣」楊志は、楊業（楊令公）の子孫という設定です。水滸伝については「水滸伝とは」のページで詳しく紹介しています。",
  },
];

function YangMap() {
  const [kx, ky] = project(114.31, 34.8);
  const [lx, ly] = project(114.6, 40.35);
  return (
    <div style={{ ...card, padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        実際の海岸線をもとにした華北の位置関係図です。朱色の番号は下の各戦い、斜線の範囲は燕雲十六州のおおよその範囲、金色の丸は宋の都・開封です。
      </p>
      <svg viewBox="298 122 64 76" style={{ width: "100%", maxHeight: 460, display: "block", margin: "0 auto" }} role="img" aria-label="宋と遼の戦いの地図">
        <defs>
          <pattern id="yanyun-hatch" width="1.2" height="1.2" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="1.2" stroke={LIAO_COLOR} strokeWidth="0.25" strokeOpacity="0.45" />
          </pattern>
        </defs>
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="0.3" strokeLinejoin="round" />
        <polygon points={YANYUN_POLYGON} fill="url(#yanyun-hatch)" stroke={LIAO_COLOR} strokeWidth="0.3" strokeDasharray="1 0.7" />

        <text x={lx} y={ly} textAnchor="middle" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 1.9, fontWeight: 700, fill: LIAO_COLOR }}>
          燕雲十六州
        </text>
        <text x={331} y={129} textAnchor="middle" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 3.6, fontWeight: 900, fill: LIAO_COLOR, opacity: 0.55 }}>
          遼
        </text>
        <text x={320} y={178} textAnchor="middle" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 3.6, fontWeight: 900, fill: SONG_COLOR, opacity: 0.5 }}>
          宋
        </text>

        <circle cx={kx} cy={ky} r="0.9" fill={COLORS.gold} stroke={COLORS.paper} strokeWidth="0.3" />
        <text x={kx + 1.6} y={ky + 0.6} style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 1.7, fill: COLORS.inkSoft }}>
          開封（宋の都）
        </text>

        {BATTLES.map((b) => {
          const [x, y] = project(b.lon, b.lat);
          const right = b.labelSide === "right";
          return (
            <a key={b.no} href={`#${b.id}`}>
              <circle cx={x} cy={y} r="1.35" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="0.3" />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="central" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 1.6, fontWeight: 700, fill: "#FBF8F0" }}>
                {b.no}
              </text>
              <text
                x={right ? x + 2 : x - 2}
                y={y + 0.6}
                textAnchor={right ? "start" : "end"}
                style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 1.7, fontWeight: 700, fill: COLORS.ink }}
              >
                {b.label}
              </text>
            </a>
          );
        })}
      </svg>
    </div>
  );
}

function Portrait({ imageUrl, name, size = 88 }) {
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{ width: size, height: size, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}
    >
      <HeritageThumb imageUrl={imageUrl} name={name} type="figure" />
    </div>
  );
}

export default function YangjiajiangPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    about: ["楊家将", "楊業", "北宋", "遼", "北方謙三"],
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/yangjiajiang` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "楊家将とは", item: `${SITE_URL}/yangjiajiang` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 6 }}>
          楊家将とは？
        </h1>
        <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, color: COLORS.gold, marginBottom: 14 }}>
          北方謙三『楊家将』で読む宋と遼の戦い
        </p>
        <p style={{ ...bodyText, fontSize: 13.5, marginBottom: 28 }}>
          「楊家将（ようかしょう）」とは、北宋の時代に北方の強国・遼と戦い続けた武門、楊一族の物語です。
          「楊無敵」と恐れられた{" "}<RubyText text="{{楊業|ようぎょう}}" />{" "}と、その子{" "}<RubyText text="{{楊延昭|ようえんしょう}}" />{" "}らの史実の活躍は、
          民間の語り物や芝居を通じて広まり、明代には小説（演義）としてまとめられ、現代日本では北方謙三の小説『楊家将』によって新たな読者を得ました。
          このページでは、史実・演義・北方版の3つの視点から、楊家将の舞台となった宋と遼の戦いをたどります。
        </p>

        <section style={{ marginBottom: 36 }} id="background">
          <h2 style={sectionHeading}>時代背景：燕雲十六州をめぐる宋と遼</h2>
          <div className="flex flex-col gap-3" style={bodyText}>
            <p>
              <RubyText text="五代十国時代の936年、{{後晋|こうしん}}を建てた{{石敬瑭|せっけいとう}}は、北方の契丹（のちの遼）から建国の援助を受けた見返りに、現在の北京・大同を含む長城以南の16の州を譲り渡しました。これが「{{燕雲十六州|えんうんじゅうろくしゅう}}」です。" />
            </p>
            <p>
              <RubyText text="長城という天然の防壁を失った中原の王朝は、遼の騎兵に対して無防備な状態に置かれました。960年に建国した宋にとって燕雲十六州の奪還は悲願となり、第2代皇帝{{太宗|たいそう}}は979年と986年の二度にわたって大規模な北伐を行います。楊家の男たちが命を懸けて戦ったのは、まさにこの燕雲十六州をめぐる戦争でした。" />
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 32 }} id="flow">
          <h2 style={sectionHeading}>年表：楊家将の時代の流れ</h2>
          <div className="flex flex-col gap-2">
            {FLOW.map((f, i) => {
              const content = (
                <div className="flex items-baseline gap-3 px-4 py-2.5" style={{ ...card, borderLeft: `3px solid ${COLORS.vermilion}` }}>
                  <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12.5, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>{f.year}</span>
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
              const href = f.href || (f.anchor && `#${f.anchor}`);
              return href ? <a key={i} href={href}>{content}</a> : <div key={i}>{content}</div>;
            })}
          </div>
        </section>

        <section style={{ marginBottom: 12 }} id="map">
          <h2 style={sectionHeading}>地図：宋と遼の戦場</h2>
          <YangMap />
        </section>

        <section style={{ marginBottom: 36 }} id="battles">
          <h2 style={sectionHeading}>楊家将ゆかりの戦い</h2>
          <div className="flex flex-col gap-5">
            {BATTLES.map((b) => (
              <div key={b.no} id={b.id} style={{ ...card, scrollMarginTop: 16 }}>
                <div className="flex gap-3 p-4">
                  {b.portrait?.imageUrl && <Portrait imageUrl={b.portrait.imageUrl} name={b.portrait.name} />}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span
                        className="flex items-center justify-center shrink-0"
                        style={{ width: 22, height: 22, borderRadius: "50%", backgroundColor: COLORS.vermilion, color: "#FBF8F0", fontFamily: "'Noto Serif SC', serif", fontSize: 11, fontWeight: 700 }}
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
                          <span style={{ color: f.color, fontWeight: 700 }}>{f.side}：</span>
                          <span style={{ color: COLORS.inkSoft }}><RubyText text={f.people} /></span>
                        </div>
                      ))}
                    </div>

                    <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 10 }}>
                      <RubyText text={b.body} />
                    </p>

                    {b.portrait?.credit && (
                      <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 4 }}>
                        肖像: {b.portrait.name}（{b.portrait.credit}）
                      </div>
                    )}

                    {(b.relatedHref || b.personHref) && (
                      <div className="flex items-center gap-3 flex-wrap mt-3" style={{ fontSize: 11.5 }}>
                        {b.relatedHref && <a href={b.relatedHref} style={linkStyle}>{b.relatedLabel} →</a>}
                        {b.personHref && <a href={b.personHref} style={linkStyle}>{b.personLabel} →</a>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="people">
          <h2 style={sectionHeading}>主要人物：宋と遼の武将たち</h2>
          <div className="flex flex-col gap-6">
            {PEOPLE.map((group) => (
              <div key={group.side}>
                <div
                  style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: group.color, borderBottom: `2px solid ${group.color}`, paddingBottom: 4, marginBottom: 10 }}
                >
                  {group.side}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.members.map((m) => (
                    <div key={m.name} className="flex gap-3 p-3" style={card}>
                      <Portrait imageUrl={m.imageUrl} name={m.name} size={72} />
                      <div className="flex-1 min-w-0">
                        <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                          {m.href ? (
                            <a href={m.href} style={{ color: COLORS.ink, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                              <RubyText text={m.name} />
                            </a>
                          ) : (
                            <RubyText text={m.name} />
                          )}
                        </div>
                        <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>{m.role}</div>
                        <p style={{ fontSize: 12, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 4 }}>
                          <RubyText text={m.note} />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="history-vs-legend">
          <h2 style={sectionHeading}>史実と演義の違い</h2>
          <p style={{ ...bodyText, marginBottom: 12 }}>
            楊家の物語は、元代の雑劇などを経て、明代に『北宋志伝』『楊家府演義』といった小説（演義）にまとめられ、清代以降は京劇の人気演目にもなりました。
            演義では史実が大きく脚色されており、よく知られた場面の多くは創作です。
          </p>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 460 }}>
              <thead>
                <tr>
                  <th style={{ width: 84, padding: "10px 8px", borderBottom: "1px solid #DCD3B8" }} />
                  <th style={{ padding: "10px 8px", borderBottom: `2px solid ${COLORS.ink}`, textAlign: "left", fontFamily: "'Noto Serif SC', serif", fontSize: 14, color: COLORS.ink }}>史実（『宋史』など）</th>
                  <th style={{ padding: "10px 8px", borderBottom: `2px solid ${COLORS.vermilion}`, textAlign: "left", fontFamily: "'Noto Serif SC', serif", fontSize: 14, color: COLORS.ink }}>演義・京劇</th>
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
                    <td style={{ padding: "9px 8px", color: COLORS.ink, lineHeight: 1.6, borderTop: "1px solid #E8E0CA", verticalAlign: "top" }}>
                      <RubyText text={row.history} />
                    </td>
                    <td style={{ padding: "9px 8px", color: COLORS.ink, lineHeight: 1.6, borderTop: "1px solid #E8E0CA", verticalAlign: "top" }}>
                      <RubyText text={row.legend} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="kitakata">
          <h2 style={sectionHeading}>北方謙三の『楊家将』を読む順番</h2>
          <p style={{ ...bodyText, marginBottom: 12 }}>
            北方謙三の楊家将は2作。いずれも原典を大幅に再構成したオリジナル色の強い作品で、演義とは異なる楊家の物語として楽しめます。
          </p>
          <div className="flex flex-col gap-3">
            {BOOKS.map((book) => (
              <div key={book.no} className="flex gap-3 p-4" style={card}>
                <span
                  className="flex items-center justify-center shrink-0"
                  style={{ width: 28, height: 28, borderRadius: "50%", border: `1.5px solid ${COLORS.vermilion}`, color: COLORS.vermilion, fontFamily: "'Noto Serif SC', serif", fontSize: 13, fontWeight: 700 }}
                >
                  {book.no}
                </span>
                <div className="flex-1 min-w-0">
                  <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}>{book.title}</div>
                  <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>{book.meta}</div>
                  <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>{book.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="faq">
          <h2 style={sectionHeading}>楊家将についてのよくある疑問</h2>
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
            北宋の出来事や人物の詳しい解説は、年表・人物ページもあわせてご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/northernsong" variant="solid">北宋の出来事一覧を見る</NavButton>
            <NavButton href="/people/northernsong" variant="outline">北宋の人物一覧を見る</NavButton>
            <NavButton href="/novelists" variant="outline">中国史を題材にした日本人小説家一覧</NavButton>
            <NavButton href="/four-great-novels" variant="outline">中国の四大名著とは</NavButton>
            <NavButton href="/suikoden" variant="outline">水滸伝とは</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
