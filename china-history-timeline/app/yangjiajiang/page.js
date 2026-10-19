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
  credit: "清代刊本『{{北宋|ほくそう}}志伝（{{楊|よう}}家将演義）』{{挿絵|さしえ}} / Wikimedia Commons（パブリックドメイン）",
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
    name: "{{太原|たいげん}}{{攻略|こうりゃく}}（{{北漢|ほっかん}}の{{滅亡|めつぼう}}）",
    location: "山西省太原市",
    lon: 112.55,
    lat: 37.87,
    label: "太原",
    labelSide: "right",
    factions: [
      { side: "{{宋軍|そうぐん}}", color: SONG_COLOR, people: "{{太宗|たいそう}}・{{潘美|はんび}}" },
      { side: "北漢軍", color: COLORS.gold, people: "{{劉継元|りゅうけいげん}}・{{劉継業|りゅうけいぎょう}}（{{楊業|ようぎょう}}）" },
    ],
    body: "五代十国で最後まで残った{{北漢|ほっかん}}は、{{遼|りょう}}の後ろ{{盾|だて}}を得て{{宋|そう}}に{{抵抗|ていこう}}を続けていた。{{宋|そう}}の{{太宗|たいそう}}は自ら大軍を率いて都{{太原|たいげん}}を包囲し、{{救援|きゅうえん}}に来た{{遼|りょう}}軍を退けて北漢を{{降伏|こうふく}}させる。最後まで戦い続けた北漢の将・{{劉継業|りゅうけいぎょう}}は、主君の説得を受けてようやく投降した。その武勇を{{惜|お}}しんだ太宗は{{彼|かれ}}を{{厚遇|こうぐう}}し、{{劉継業|りゅうけいぎょう}}は{{楊姓|ようせい}}に{{戻|もど}}して{{楊業|ようぎょう}}と名乗り、{{宋|そう}}の将として{{遼|りょう}}と戦うことになる。",
    portrait: { name: "{{宋太宗|そうたいそう}}", ...TAIZONG },
    personHref: TAIZONG.href,
    personLabel: "{{宋太宗|そうたいそう}}の{{生涯|しょうがい}}を読む",
  },
  {
    no: 2,
    id: "battle-2",
    year: "979",
    name: "{{高梁河|こうりょうが}}の戦い",
    location: "北京市（{{遼|りょう}}の南京・{{幽州|ゆうしゅう}}）付近",
    lon: 116.35,
    lat: 39.95,
    label: "{{高梁河|こうりょうが}}",
    labelSide: "right",
    factions: [
      { side: "{{宋軍|そうぐん}}", color: SONG_COLOR, people: "{{太宗|たいそう}}" },
      { side: "{{遼|りょう}}軍", color: LIAO_COLOR, people: "{{耶律休哥|やりつきゅうか}}・{{耶律斜軫|やりつしゃしん}}" },
    ],
    body: "北漢を{{滅|ほろ}}ぼした勢いのまま、{{太宗|たいそう}}は休む間もなく軍を北へ進め、{{燕雲十六州|えんうんじゅうろくしゅう}}の中心である{{遼|りょう}}の{{幽州|ゆうしゅう}}（現在の北京）を包囲した。しかし長い{{遠征|えんせい}}で{{宋軍|そうぐん}}は{{疲弊|ひへい}}しており、{{救援|きゅうえん}}に{{駆|か}}けつけた{{耶律休哥|やりつきゅうか}}らの{{遼|りょう}}軍に{{高梁河|こうりょうが}}のほとりで大敗する。太宗自身も矢傷を負い、ロバの引く車で{{逃|に}}げ延びたと伝えられる。{{燕雲|えんうん}}{{奪還|だっかん}}の最初の試みは、こうして失敗に終わった。",
    portrait: { name: "{{宋太宗|そうたいそう}}", ...TAIZONG },
    personHref: null,
  },
  {
    no: 3,
    id: "battle-3",
    year: "980",
    name: "{{雁門関|がんもんかん}}の戦い",
    location: "山西省{{忻州|きんしゅう}}市代県",
    lon: 112.87,
    lat: 39.18,
    label: "{{雁門関|がんもんかん}}",
    labelSide: "right",
    factions: [
      { side: "{{宋軍|そうぐん}}", color: SONG_COLOR, people: "{{楊業|ようぎょう}}・{{潘美|はんび}}" },
      { side: "{{遼|りょう}}軍", color: LIAO_COLOR, people: "{{遼|りょう}}の大軍" },
    ],
    body: "{{高梁河|こうりょうが}}の勝利の翌年、{{遼|りょう}}は大軍で長城の{{要衝|ようしょう}}{{雁門関|がんもんかん}}に{{迫|せま}}った。{{代州|だいしゅう}}を守る{{楊業|ようぎょう}}はわずか数百の{{騎兵|きへい}}を率いて間道から敵の背後に回り{{込|こ}}み、正面の{{潘美|はんび}}の軍と呼応して{{挟撃|きょうげき}}し、{{遼|りょう}}軍を大いに打ち破った。以後、{{遼|りょう}}の兵は{{楊業|ようぎょう}}の旗を見ただけで退いたといわれ、{{彼|かれ}}は「{{楊|よう}}無敵」の異名で呼ばれるようになる。",
    portrait: { name: "{{楊業|ようぎょう}}", ...YANG_YE },
    personHref: YANG_YE.href,
    personLabel: "{{楊業|ようぎょう}}の{{生涯|しょうがい}}を読む",
  },
  {
    no: 4,
    id: "battle-4",
    year: "986",
    name: "{{岐溝関|きこうかん}}の戦い（{{雍熙|ようき}}の{{北伐|ほくばつ}}）",
    location: "河北省{{涿州|たくしゅう}}市付近",
    lon: 115.97,
    lat: 39.49,
    label: "{{岐溝関|きこうかん}}",
    labelSide: "right",
    factions: [
      { side: "{{宋軍|そうぐん}}（東路）", color: SONG_COLOR, people: "{{曹彬|そうひん}}・{{米信|べいしん}}" },
      { side: "{{遼|りょう}}軍", color: LIAO_COLOR, people: "{{耶律休哥|やりつきゅうか}}・{{蕭太后|しょうたいごう}}" },
    ],
    body: "986年、{{遼|りょう}}で幼い{{聖宗|せいそう}}が{{即位|そくい}}したのを好機とみた{{太宗|たいそう}}は、東・中・西の三路から{{燕雲|えんうん}}{{奪還|だっかん}}の大軍を送り出した（{{雍熙|ようき}}の{{北伐|ほくばつ}}）。主力の東路軍を率いる{{曹彬|そうひん}}は{{涿州|たくしゅう}}まで進んだが、{{耶律休哥|やりつきゅうか}}に補給路を{{執拗|しつよう}}に{{襲|おそ}}われて{{撤退|てったい}}を{{余儀|よぎ}}なくされ、{{退却|たいきゃく}}の{{途中|とちゅう}}、{{岐溝関|きこうかん}}で{{遼|りょう}}軍に追いつかれて{{壊滅|かいめつ}}的な敗北を{{喫|きっ}}する。この敗戦で{{北伐|ほくばつ}}は{{総崩|そうくず}}れとなり、各方面の軍に{{撤退|てったい}}が命じられた。",
    portrait: null,
    relatedHref: HREF_YONGXI,
    relatedLabel: "{{雍熙|ようき}}の{{北伐|ほくばつ}}を年表で読む",
  },
  {
    no: 5,
    id: "battle-5",
    year: "986",
    name: "{{陳家谷|ちんかこく}}の戦い（{{楊業|ようぎょう}}の最期）",
    location: "山西省{{朔州|さくしゅう}}市付近",
    lon: 112.43,
    lat: 39.33,
    label: "{{陳家谷|ちんかこく}}",
    labelSide: "left",
    factions: [
      { side: "{{宋軍|そうぐん}}（西路）", color: SONG_COLOR, people: "{{楊業|ようぎょう}}・{{楊延玉|ようえんぎょく}}・{{潘美|はんび}}・{{王侁|おうしん}}" },
      { side: "{{遼|りょう}}軍", color: LIAO_COLOR, people: "{{耶律斜軫|やりつしゃしん}}" },
    ],
    body: "西路軍の副将{{楊業|ようぎょう}}は、{{攻略|こうりゃく}}した四州の住民を{{宋|そう}}の領内へ{{逃|に}}がす{{撤退|てったい}}戦の中で、勢いに乗る{{遼|りょう}}軍との正面{{衝突|しょうとつ}}は{{避|さ}}けるべきだと主張した。しかし{{監|かん}}軍{{王侁|おうしん}}に{{臆病|おくびょう}}者とそしられ、やむなく{{出撃|しゅつげき}}する。{{楊業|ようぎょう}}は{{陳家谷|ちんかこく}}の谷口に{{援軍|えんぐん}}を{{伏|ふ}}せておくよう主将{{潘美|はんび}}に{{頼|たの}}んだが、戦いの末に谷口へ退いたとき、そこに味方の姿はなかった。息子{{楊延玉|ようえんぎょく}}も討ち死にし、{{捕|と}}らえられた{{楊業|ようぎょう}}は食を絶って死んだと伝えられる。この悲劇が、のちの「{{楊|よう}}家将」物語の{{核|かく}}となった。",
    portrait: { name: "{{楊業|ようぎょう}}", ...YANG_YE },
    relatedHref: HREF_YONGXI,
    relatedLabel: "{{雍熙|ようき}}の{{北伐|ほくばつ}}と{{楊業|ようぎょう}}の戦死を年表で読む",
    personHref: YANG_YE.href,
    personLabel: "{{楊業|ようぎょう}}の{{生涯|しょうがい}}を読む",
  },
  {
    no: 6,
    id: "battle-6",
    year: "999",
    name: "{{遂城|すいじょう}}の防衛",
    location: "河北省保定市{{徐|じょ}}水区付近",
    lon: 115.65,
    lat: 39.02,
    label: "{{遂城|すいじょう}}",
    labelSide: "right",
    factions: [
      { side: "{{宋軍|そうぐん}}", color: SONG_COLOR, people: "{{楊延昭|ようえんしょう}}" },
      { side: "{{遼|りょう}}軍", color: LIAO_COLOR, people: "{{蕭太后|しょうたいごう}}・{{聖宗|せいそう}}" },
    ],
    body: "父の死後も国境の守りについていた{{楊延昭|ようえんしょう}}は、999年、{{蕭太后|しょうたいごう}}自らが率いる{{遼|りょう}}の大軍に小城{{遂城|すいじょう}}を包囲された。兵も少なく城内が{{動揺|どうよう}}する中、{{楊延昭|ようえんしょう}}は厳冬の夜に{{城壁|じょうへき}}へ水をかけて一面の氷の{{壁|かべ}}とし、敵が{{攀|よ}}じ登れないようにして城を守り{{抜|ぬ}}いたと伝えられる。{{楊延昭|ようえんしょう}}はその後も20年以上にわたって北辺を守り、物語では「{{楊六郎|ようろくろう}}」として父に{{劣|おと}}らぬ名将に{{描|えが}}かれている。",
    portrait: { name: "{{楊延昭|ようえんしょう}}", ...YANG_YANZHAO },
    personHref: YANG_YANZHAO.href,
    personLabel: "{{楊延昭|ようえんしょう}}の{{生涯|しょうがい}}を読む",
  },
  {
    no: 7,
    id: "battle-7",
    year: "1004",
    name: "{{澶淵|せんえん}}の盟",
    location: "河南省{{濮陽|ぼくよう}}市（{{澶州|せんしゅう}}）",
    lon: 115.03,
    lat: 35.76,
    label: "{{澶州|せんしゅう}}",
    labelSide: "right",
    factions: [
      { side: "{{宋|そう}}", color: SONG_COLOR, people: "{{真宗|しんそう}}・{{寇準|こうじゅん}}" },
      { side: "{{遼|りょう}}", color: LIAO_COLOR, people: "{{聖宗|せいそう}}・{{蕭太后|しょうたいごう}}" },
    ],
    body: "{{蕭太后|しょうたいごう}}と{{聖宗|せいそう}}が{{親征|しんせい}}して大軍を南下させ、{{宋|そう}}の都{{開封|かいほう}}に近い{{澶州|せんしゅう}}まで{{迫|せま}}ると、{{宋|そう}}では{{遷都|せんと}}論も出たが、{{宰相|さいしょう}}{{寇準|こうじゅん}}の進言で{{真宗|しんそう}}が前線に出て両軍は講和した。{{宋|そう}}が毎年絹20万{{匹|ひき}}・銀10万両を{{贈|おく}}る代わりに国境を現状で確定するこの盟約により、{{燕雲十六州|えんうんじゅうろくしゅう}}は{{遼|りょう}}の領土として固定され、以後約120年にわたって両国の平和が続いた。{{楊|よう}}家が戦い続けた{{宋遼|そうりょう}}の戦争は、ここにひとまずの終わりを{{迎|むか}}える。",
    portrait: { name: "{{寇準|こうじゅん}}", ...KOU_ZHUN },
    relatedHref: HREF_CHANYUAN,
    relatedLabel: "{{澶淵|せんえん}}の盟を年表で読む",
  },
];

// 時代の流れ。hrefは/eventsへの直接リンク、anchorは本ページ内の戦いセクションへのリンク
const FLOW = [
  { year: "936", title: "{{燕雲十六州|えんうんじゅうろくしゅう}}の{{割譲|かつじょう}}", note: "{{後晋|こうしん}}の{{石敬瑭|せっけいとう}}が建国の{{援助|えんじょ}}と引き{{換|か}}えに、長城以南の16州を{{契丹|きったん}}（{{遼|りょう}}）に{{譲|ゆず}}る。", href: HREF_YANYUN },
  { year: "960", title: "{{宋|そう}}の建国（{{趙匡胤|ちょうきょういん}}）", note: "{{燕雲十六州|えんうんじゅうろくしゅう}}の{{奪還|だっかん}}は、建国当初からの{{宋|そう}}の悲願となる。", href: HREF_SONG },
  { year: "979", title: "{{北漢|ほっかん}}の{{滅亡|めつぼう}}", note: "{{太宗|たいそう}}が中国本土の統一を完成。北漢の将・{{劉継業|りゅうけいぎょう}}が{{宋|そう}}に降り{{楊業|ようぎょう}}と名乗る。", anchor: "battle-1" },
  { year: "979", title: "{{高梁河|こうりょうが}}の戦い", note: "{{燕雲|えんうん}}{{奪還|だっかん}}を{{狙|ねら}}った太宗が、{{遼|りょう}}の{{耶律休哥|やりつきゅうか}}らに大敗。", anchor: "battle-2" },
  { year: "980", title: "{{雁門関|がんもんかん}}の戦い", note: "{{楊業|ようぎょう}}が{{寡兵|かへい}}で{{遼|りょう}}の大軍を破り「{{楊|よう}}無敵」と{{恐|おそ}}れられる。", anchor: "battle-3" },
  { year: "986", title: "{{雍熙|ようき}}の{{北伐|ほくばつ}}・{{岐溝関|きこうかん}}の戦い", note: "三路からの{{燕雲|えんうん}}{{奪還|だっかん}}作戦。主力の東路軍が{{耶律休哥|やりつきゅうか}}に大敗する。", anchor: "battle-4" },
  { year: "986", title: "{{陳家谷|ちんかこく}}の戦い", note: "{{撤退|てったい}}戦の中で{{援軍|えんぐん}}を得られなかった{{楊業|ようぎょう}}が{{捕|と}}らわれ、絶食して死ぬ。", anchor: "battle-5" },
  { year: "999", title: "{{遂城|すいじょう}}の防衛", note: "{{楊業|ようぎょう}}の子{{楊延昭|ようえんしょう}}が氷の{{城壁|じょうへき}}で{{遼|りょう}}軍を退ける。", anchor: "battle-6" },
  { year: "1004", title: "{{澶淵|せんえん}}の盟", note: "{{宋|そう}}と{{遼|りょう}}が講和。{{燕雲十六州|えんうんじゅうろくしゅう}}は{{遼|りょう}}領として確定する。", anchor: "battle-7" },
];

const PEOPLE = [
  {
    side: "{{宋|そう}}",
    color: SONG_COLOR,
    members: [
      { name: "{{楊業|ようぎょう}}", role: "{{楊|よう}}家の当主。「{{楊|よう}}無敵」", note: "北漢から{{宋|そう}}に降った{{猛将|もうしょう}}。{{雁門関|がんもんかん}}で{{遼|りょう}}を破り、{{陳家谷|ちんかこく}}で非業の死を{{遂|と}}げた。物語では「{{楊令|ようれい}}公」「{{楊継業|ようけいぎょう}}」とも呼ばれる。", ...YANG_YE },
      { name: "{{楊延昭|ようえんしょう}}", role: "{{楊業|ようぎょう}}の子。物語の「{{楊六郎|ようろくろう}}」", note: "父の死後も20年以上にわたって北辺を守り{{抜|ぬ}}いた名将。", ...YANG_YANZHAO },
      { name: "{{潘美|はんび}}", role: "西路軍の主将", note: "{{宋|そう}}初の統一戦争の功臣。{{陳家谷|ちんかこく}}で{{楊業|ようぎょう}}を救えず降格され、物語では悪役「{{潘|はん}}仁美」とされた。", ...PAN_MEI },
      { name: "{{宋太宗|そうたいそう}}（{{趙光義|ちょうこうぎ}}）", role: "{{北宋|ほくそう}}の第2代{{皇帝|こうてい}}", note: "北漢を{{滅|ほろ}}ぼして統一を完成させたが、{{燕雲十六州|えんうんじゅうろくしゅう}}の{{奪還|だっかん}}には二度失敗した。", ...TAIZONG },
    ],
  },
  {
    side: "{{遼|りょう}}",
    color: LIAO_COLOR,
    members: [
      { name: "{{耶律休哥|やりつきゅうか}}", role: "{{遼|りょう}}の名将", note: "{{高梁河|こうりょうが}}・{{岐溝関|きこうかん}}の両戦で{{宋軍|そうぐん}}を{{撃破|げきは}}し、{{遼|りょう}}の最高の{{栄誉|えいよ}}である「{{于越|うえつ}}」の{{称号|しょうごう}}を{{与|あた}}えられた。" },
      { name: "{{蕭太后|しょうたいごう}}（{{蕭綽|しょうしゃく}}）", role: "聖宗の母・{{摂政|せっしょう}}", note: "夫の景宗の死後、幼い聖宗に代わって国政を担った{{女傑|じょけつ}}。{{宋|そう}}の{{北伐|ほくばつ}}を退け、{{澶淵|せんえん}}の盟を実現させた。", ...XIAO_TAIHOU_IMAGE },
      { name: "{{耶律斜軫|やりつしゃしん}}", role: "{{遼|りょう}}の武将", note: "986年、西路の{{宋軍|そうぐん}}を{{迎|むか}}え{{撃|う}}ち、{{陳家谷|ちんかこく}}で{{楊業|ようぎょう}}を{{捕|と}}らえた。" },
    ],
  },
];

// 史実と、明代に成立した演義（『北宋志伝』『楊家府演義』）との違い
const COMPARE_ROWS = [
  { label: "{{楊業|ようぎょう}}の最期", history: "{{陳家谷|ちんかこく}}で{{捕|と}}らえられ、食を絶って3日後に死去。", legend: "敵に囲まれ、{{李陵|りりょう}}の{{碑|ひ}}に頭を打ちつけて自害する。" },
  { label: "{{潘美|はんび}}", history: "{{救援|きゅうえん}}を果たせなかった責任で官位を三等下げられたが、のちに復権。", legend: "「{{潘|はん}}仁美」の名で、{{楊|よう}}家に{{私怨|しえん}}を{{抱|いだ}}き{{楊業|ようぎょう}}父子を死に追いやる{{奸臣|かんしん}}。" },
  { label: "{{楊業|ようぎょう}}の妻", history: "名門・{{折|せつ}}氏の出身と伝わるが、事績はほとんど記録にない。", legend: "「{{佘太君|しゃたいくん}}」として、夫や息子の亡き後も一族を率いる{{女傑|じょけつ}}。" },
  { label: "息子たち", history: "7人の男子が記録され、{{楊延玉|ようえんぎょく}}は{{陳家谷|ちんかこく}}で戦死。家を{{継|つ}}いだのは{{楊延昭|ようえんしょう}}。", legend: "「{{七郎|しちろう}}八{{虎|とら}}」と呼ばれる勇将ぞろいで、多くが戦場に散る。{{四郎|しろう}}は{{遼|りょう}}の{{捕虜|ほりょ}}となって{{遼|りょう}}の公主と{{結婚|けっこん}}する。" },
  { label: "女性の武将", history: "記録なし。", legend: "{{穆桂英|ぼくけいえい}}をはじめとする「{{楊|よう}}門女将」が戦場で{{活躍|かつやく}}する。" },
];

const BOOKS = [
  {
    no: 1,
    title: "『{{楊|よう}}家将』",
    meta: "{{北方謙三|きたかたけんぞう}} / 2003年（PHP研究所） / 第38回{{吉川英治|よしかわえいじ}}文学賞",
    body: "{{楊業|ようぎょう}}と{{楊|よう}}家の男たちを主人公に、{{宋|そう}}と{{遼|りょう}}の戦いを{{描|えが}}く。原典である演義を{{大幅|おおはば}}に再構成した、オリジナル色の強い作品。",
  },
  {
    no: 2,
    title: "『{{血涙|けつるい}} 新{{楊|よう}}家将』",
    meta: "{{北方謙三|きたかたけんぞう}} / 2006年（PHP研究所）",
    body: "『{{楊|よう}}家将』の続編。前作に続いて{{楊|よう}}家と{{遼|りょう}}の戦いを{{描|えが}}く、同じくオリジナル色の強い作品。『{{楊|よう}}家将』を読んでから手に取るのがおすすめ。",
  },
];

const FAQ = [
  {
    q: "{{楊|よう}}家将は実話ですか？",
    a: "{{楊業|ようぎょう}}・{{楊延昭|ようえんしょう}}・{{楊文広|ようぶんこう}}の三代が{{宋|そう}}の武将として{{遼|りょう}}や西夏と戦ったことは、正史『{{宋史|そうし}}』にも記録された史実です。一方で、{{佘太君|しゃたいくん}}や{{穆桂英|ぼくけいえい}}の{{活躍|かつやく}}、{{七郎|しちろう}}八{{虎|とら}}の兄弟の物語などは、明代の演義や京劇で{{脚色|きゃくしょく}}・創作された部分が大きく、史実と物語は分けて楽しむのがよいでしょう。",
  },
  {
    q: "{{北方謙三|きたかたけんぞう}}の『{{楊|よう}}家将』と『{{血涙|けつるい}}』はどちらから読めばいいですか？",
    a: "刊行順どおり『{{楊|よう}}家将』から読むのがおすすめです。『{{血涙|けつるい}} 新{{楊|よう}}家将』は『{{楊|よう}}家将』の続編にあたります。",
  },
  {
    q: "{{楊業|ようぎょう}}はなぜ「{{楊|よう}}無敵」と呼ばれたのですか？",
    a: "980年の{{雁門関|がんもんかん}}の戦いで、わずか数百の{{騎兵|きへい}}で{{遼|りょう}}の大軍の背後を{{突|つ}}いて大勝したためです。以後、{{遼|りょう}}の兵は{{楊業|ようぎょう}}の旗を見ただけで退いたといわれ、「{{楊|よう}}無敵」の異名が生まれました。",
  },
  {
    q: "『{{水滸伝|すいこでん}}』にも{{楊|よう}}家の子孫が登場しますか？",
    a: "登場します。{{梁山泊|りょうざんぱく}}の好漢の一人「{{青面獣|せいめんじゅう}}」{{楊志|ようし}}は、{{楊業|ようぎょう}}（{{楊令|ようれい}}公）の子孫という設定です。{{水滸伝|すいこでん}}については「{{水滸伝|すいこでん}}とは」のページで{{詳|くわ}}しく{{紹介|しょうかい}}しています。",
  },
];

function YangMap() {
  const [kx, ky] = project(114.31, 34.8);
  const [lx, ly] = project(114.6, 40.35);
  return (
    <div style={{ ...card, padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        実際の海岸線をもとにした<ruby>華北<rt>かほく</rt></ruby>の位置関係図です。<ruby>朱色<rt>しゅいろ</rt></ruby>の番号は下の各戦い、<ruby>斜線<rt>しゃせん</rt></ruby>の<ruby>範囲<rt>はんい</rt></ruby>は<ruby>燕雲十六州<rt>えんうんじゅうろくしゅう</rt></ruby>のおおよその<ruby>範囲<rt>はんい</rt></ruby>、金色の丸は<ruby>宋<rt>そう</rt></ruby>の都・<ruby>開封<rt>かいほう</rt></ruby>です。
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
                {stripRuby(b.label)}
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
      { "@type": "ListItem", position: 2, name: "{{楊|よう}}家将とは", item: `${SITE_URL}/yangjiajiang` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(articleJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(breadcrumbJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(faqJsonLd)) }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 6 }}>
          <ruby>楊<rt>よう</rt></ruby>家将とは？
        </h1>
        <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, color: COLORS.gold, marginBottom: 14 }}>
          <ruby>北方謙三<rt>きたかたけんぞう</rt></ruby>『<ruby>楊<rt>よう</rt></ruby>家将』で読む<ruby>宋<rt>そう</rt></ruby>と<ruby>遼<rt>りょう</rt></ruby>の戦い
        </p>
        <p style={{ ...bodyText, fontSize: 13.5, marginBottom: 28 }}>
          「<ruby>楊<rt>よう</rt></ruby>家将（ようかしょう）」とは、<ruby>北宋<rt>ほくそう</rt></ruby>の時代に北方の強国・<ruby>遼<rt>りょう</rt></ruby>と戦い続けた武門、<ruby>楊<rt>よう</rt></ruby>一族の物語です。
          「<ruby>楊<rt>よう</rt></ruby>無敵」と<ruby>恐<rt>おそ</rt></ruby>れられた{" "}<RubyText text="{{楊業|ようぎょう}}" />{" "}と、その子{" "}<RubyText text="{{楊延昭|ようえんしょう}}" />{" "}らの史実の<ruby>活躍<rt>かつやく</rt></ruby>は、
          民間の語り物や<ruby>芝居<rt>しばい</rt></ruby>を通じて広まり、明代には小説（演義）としてまとめられ、現代日本では<ruby>北方謙三<rt>きたかたけんぞう</rt></ruby>の小説『<ruby>楊<rt>よう</rt></ruby>家将』によって新たな読者を得ました。
          このページでは、史実・演義・北方版の3つの視点から、<ruby>楊<rt>よう</rt></ruby>家将の<ruby>舞台<rt>ぶたい</rt></ruby>となった<ruby>宋<rt>そう</rt></ruby>と<ruby>遼<rt>りょう</rt></ruby>の戦いをたどります。
        </p>

        <section style={{ marginBottom: 36 }} id="background">
          <h2 style={sectionHeading}>時代背景：<ruby>燕雲十六州<rt>えんうんじゅうろくしゅう</rt></ruby>をめぐる<ruby>宋<rt>そう</rt></ruby>と<ruby>遼<rt>りょう</rt></ruby></h2>
          <div className="flex flex-col gap-3" style={bodyText}>
            <p>
              <RubyText text="五代十国時代の936年、{{後晋|こうしん}}を建てた{{石敬瑭|せっけいとう}}は、北方の{{契丹|きったん}}（のちの{{遼|りょう}}）から建国の{{援助|えんじょ}}を受けた見返りに、現在の北京・大同を{{含|ふく}}む長城以南の16の州を{{譲|ゆず}}り{{渡|わた}}しました。これが「{{燕雲十六州|えんうんじゅうろくしゅう}}」です。" />
            </p>
            <p>
              <RubyText text="長城という天然の{{防壁|ぼうへき}}を失った中原の王朝は、{{遼|りょう}}の{{騎兵|きへい}}に対して無防備な状態に置かれました。960年に建国した{{宋|そう}}にとって{{燕雲十六州|えんうんじゅうろくしゅう}}の{{奪還|だっかん}}は悲願となり、第2代{{皇帝|こうてい}}{{太宗|たいそう}}は979年と986年の二度にわたって大規模な{{北伐|ほくばつ}}を行います。{{楊|よう}}家の男たちが命を{{懸|か}}けて戦ったのは、まさにこの{{燕雲十六州|えんうんじゅうろくしゅう}}をめぐる戦争でした。" />
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 32 }} id="flow">
          <h2 style={sectionHeading}>年表：<ruby>楊<rt>よう</rt></ruby>家将の時代の流れ</h2>
          <div className="flex flex-col gap-2">
            {FLOW.map((f, i) => {
              const content = (
                <div className="flex items-baseline gap-3 px-4 py-2.5" style={{ ...card, borderLeft: `3px solid ${COLORS.vermilion}` }}>
                  <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12.5, color: COLORS.inkSoft, whiteSpace: "nowrap" }}><RubyText text={f.year} /></span>
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
          <h2 style={sectionHeading}>地図：<ruby>宋<rt>そう</rt></ruby>と<ruby>遼<rt>りょう</rt></ruby>の戦場</h2>
          <YangMap />
        </section>

        <section style={{ marginBottom: 36 }} id="battles">
          <h2 style={sectionHeading}><ruby>楊<rt>よう</rt></ruby>家将ゆかりの戦い</h2>
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
                      <span style={{ fontSize: 12, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}><RubyText text={b.year} />年</span>
                    </div>
                    <div style={{ fontSize: 11, color: COLORS.vermilionSoft, marginTop: 4 }}>
                      <span aria-hidden>📍</span> <RubyText text={b.location} />
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3" style={{ fontSize: 11.5 }}>
                      {b.factions.map((f, i) => (
                        <div key={i}>
                          <span style={{ color: f.color, fontWeight: 700 }}><RubyText text={f.side} />：</span>
                          <span style={{ color: COLORS.inkSoft }}><RubyText text={f.people} /></span>
                        </div>
                      ))}
                    </div>

                    <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 10 }}>
                      <RubyText text={b.body} />
                    </p>

                    {b.portrait?.credit && (
                      <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 4 }}>
                        <ruby>肖像<rt>しょうぞう</rt></ruby>: <RubyText text={b.portrait.name} />（<RubyText text={b.portrait.credit} />）
                      </div>
                    )}

                    {(b.relatedHref || b.personHref) && (
                      <div className="flex items-center gap-3 flex-wrap mt-3" style={{ fontSize: 11.5 }}>
                        {b.relatedHref && <a href={b.relatedHref} style={linkStyle}><RubyText text={b.relatedLabel} /> →</a>}
                        {b.personHref && <a href={b.personHref} style={linkStyle}><RubyText text={b.personLabel} /> →</a>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="people">
          <h2 style={sectionHeading}>主要人物：<ruby>宋<rt>そう</rt></ruby>と<ruby>遼<rt>りょう</rt></ruby>の武将たち</h2>
          <div className="flex flex-col gap-6">
            {PEOPLE.map((group) => (
              <div key={group.side}>
                <div
                  style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: group.color, borderBottom: `2px solid ${group.color}`, paddingBottom: 4, marginBottom: 10 }}
                >
                  <RubyText text={group.side} />
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
                        <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}><RubyText text={m.role} /></div>
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
          <h2 style={sectionHeading}>史実と演義の<ruby>違<rt>ちが</rt></ruby>い</h2>
          <p style={{ ...bodyText, marginBottom: 12 }}>
            <ruby>楊<rt>よう</rt></ruby>家の物語は、元代の雑劇などを経て、明代に『<ruby>北宋<rt>ほくそう</rt></ruby>志伝』『<ruby>楊<rt>よう</rt></ruby>家府演義』といった小説（演義）にまとめられ、清代以降は京劇の人気演目にもなりました。
            演義では史実が大きく<ruby>脚色<rt>きゃくしょく</rt></ruby>されており、よく知られた場面の多くは創作です。
          </p>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 460 }}>
              <thead>
                <tr>
                  <th style={{ width: 84, padding: "10px 8px", borderBottom: "1px solid #DCD3B8" }} />
                  <th style={{ padding: "10px 8px", borderBottom: `2px solid ${COLORS.ink}`, textAlign: "left", fontFamily: "'Noto Serif SC', serif", fontSize: 14, color: COLORS.ink }}>史実（『<ruby>宋史<rt>そうし</rt></ruby>』など）</th>
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
                      <RubyText text={row.label} />
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
          <h2 style={sectionHeading}><ruby>北方謙三<rt>きたかたけんぞう</rt></ruby>の『<ruby>楊<rt>よう</rt></ruby>家将』を読む順番</h2>
          <p style={{ ...bodyText, marginBottom: 12 }}>
            <ruby>北方謙三<rt>きたかたけんぞう</rt></ruby>の<ruby>楊<rt>よう</rt></ruby>家将は2作。いずれも原典を<ruby>大幅<rt>おおはば</rt></ruby>に再構成したオリジナル色の強い作品で、演義とは異なる<ruby>楊<rt>よう</rt></ruby>家の物語として楽しめます。
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
                  <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}><RubyText text={book.title} /></div>
                  <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}><RubyText text={book.meta} /></div>
                  <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}><RubyText text={book.body} /></p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="faq">
          <h2 style={sectionHeading}><ruby>楊<rt>よう</rt></ruby>家将についてのよくある疑問</h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((f) => (
              <div key={f.q} style={{ ...card, padding: "14px 16px" }}>
                <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
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
            <ruby>北宋<rt>ほくそう</rt></ruby>の出来事や人物の<ruby>詳<rt>くわ</rt></ruby>しい解説は、年表・人物ページもあわせてご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/northernsong" variant="solid"><ruby>北宋<rt>ほくそう</rt></ruby>の出来事一覧を見る</NavButton>
            <NavButton href="/people/northernsong" variant="outline"><ruby>北宋<rt>ほくそう</rt></ruby>の人物一覧を見る</NavButton>
            <NavButton href="/novelists" variant="outline">中国史を題材にした日本人小説家一覧</NavButton>
            <NavButton href="/four-great-novels" variant="outline">中国の四大名著とは</NavButton>
            <NavButton href="/suikoden" variant="outline"><ruby>水滸伝<rt>すいこでん</rt></ruby>とは</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
