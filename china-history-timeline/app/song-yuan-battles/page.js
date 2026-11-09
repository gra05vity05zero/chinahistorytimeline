import { ERAS, stripRuby, getEraFigures, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection, HeritageThumb } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { SongYuanBorderMap } from "@/components/SongYuanBorderMap";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const title = "宋・金・元 合戦マップ";
const fullTitle = `宋・金・元 合戦マップ | ${SITE_NAME}`;
const description =
  "宋の建国から遼・西夏・金との攻防、靖康の変、岳飛の北伐、モンゴルの南下を経て崖山の戦いで南宋が滅び、元が中国を統一するまで、約300年の流れを主要な合戦とともにたどる特集ページ。澶淵の盟・郾城の戦い・釣魚城・襄陽樊城・崖山・元寇などを、戦場の位置がわかる地図と勢力図アニメーションつきで解説します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/song-yuan-battles" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/song-yuan-battles" }),
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

const EV_SONG_FOUND = findEvent("northernsong", "宋の建国");
const EV_YONGXI = findEvent("northernsong", "雍熙");
const EV_CHANYUAN = findEvent("northernsong", "澶淵");
const EV_XINFA = findEvent("northernsong", "新法");
const EV_JIN_FOUND = findEvent("northernsong", "金の建国");
const EV_JINGKANG = findEvent("northernsong", "靖康");
const EV_NANSONG_FOUND = findEvent("southernsong", "南宋の建国");
const EV_YUEFEI = findEvent("southernsong", "岳飛");
const EV_JIN_FALL = findEvent("southernsong", "金の滅亡");
const EV_LINAN = findEvent("southernsong", "臨安");
const EV_YASHAN = findEvent("southernsong", "崖山");
const EV_YUAN_FOUND = findEvent("yuan", "元の建国");
const EV_BUNEI = findEvent("yuan", "文永の役");
const EV_KOAN = findEvent("yuan", "弘安の役");

const HREF_TAIZONG = findPersonHref("northernsong", "宋太宗（趙光義）");
const HREF_YANGYE = findPersonHref("northernsong", "楊業");
const HREF_YUEFEI = findPersonHref("southernsong", "岳飛");
const HREF_KUBILAI = findPersonHref("yuan", "クビライ（世祖）");

const IMG_TAIZONG = findPersonImage("northernsong", "宋太宗（趙光義）");
const IMG_YANGYE = findPersonImage("northernsong", "楊業");
const IMG_KOUZHUN = findPersonImage("northernsong", "寇準");
const IMG_AGUDA = findPersonImage("northernsong", "完顔阿骨打（金太祖）");
const IMG_HUIZONG = findPersonImage("northernsong", "徽宗");
const IMG_YUEFEI = findPersonImage("southernsong", "岳飛");
const IMG_KUBILAI = findPersonImage("yuan", "クビライ（世祖）");

// 北宋（960〜1127年）の流れ
const EARLY_FLOW = [
  { year: "960", title: "{{宋|そう}}の建国（{{趙匡胤|ちょうきょういん}}）", note: "{{陳橋|ちんきょう}}の変で{{即位|そくい}}した太祖が{{開封|かいほう}}を都に{{宋|そう}}を建て、文治主義の国づくりを始める。", href: EV_SONG_FOUND && `/events/${EV_SONG_FOUND.slug}` },
  { year: "979", title: "{{北漢|ほっかん}}平定・{{高梁河|こうりょうが}}の戦い", note: "太宗が中国本土の統一を果たすが、勢いに乗って{{燕雲十六州|えんうんじゅうろくしゅう}}へ進んだ{{宋軍|そうぐん}}は{{遼軍|りょうぐん}}に大敗する。", anchor: "early-battle-1" },
  { year: "986", title: "{{雍熙|ようき}}の{{北伐|ほくばつ}}・{{陳家谷|ちんかこく}}の戦い", note: "二度目の{{北伐|ほくばつ}}も失敗し、「{{楊無敵|ようむてき}}」と{{恐|おそ}}れられた{{楊業|ようぎょう}}が戦死する。", anchor: "early-battle-2" },
  { year: "1004", title: "{{澶淵|せんえん}}の盟", note: "南下した{{遼軍|りょうぐん}}と{{澶州|せんしゅう}}で{{対峙|たいじ}}し和議。毎年の{{贈与|ぞうよ}}と引き{{換|か}}えに約120年の平和を得る。", anchor: "early-battle-3" },
  { year: "1038", title: "{{西夏|せいか}}の建国", note: "{{党項|タングート}}の{{李元昊|りげんこう}}が{{皇帝|こうてい}}を{{称|しょう}}し、{{宋|そう}}の西北で自立する。" },
  { year: "1041", title: "{{好水川|こうすいせん}}の戦い", note: "{{西夏軍|せいかぐん}}の{{伏兵|ふくへい}}に{{宋軍|そうぐん}}が{{壊滅|かいめつ}}。1044年の和約で{{宋|そう}}は{{西夏|せいか}}にも{{贈与|ぞうよ}}を約束する。", anchor: "early-battle-4" },
  { year: "1069", title: "{{王安石|おうあんせき}}の新法", note: "重い軍事費と財政難を打開するため、富国強兵の改革が始まる。", href: EV_XINFA && `/events/${EV_XINFA.slug}` },
  { year: "1115", title: "金の建国", note: "{{女真|じょしん}}の{{完顔阿骨打|わんやんあくだ}}が{{遼軍|りょうぐん}}を破って自立し、{{皇帝|こうてい}}に{{即位|そくい}}する。", anchor: "early-battle-5" },
  { year: "1125", title: "{{遼|りょう}}の{{滅亡|めつぼう}}", note: "{{宋|そう}}と結んだ金が{{遼|りょう}}を{{滅|ほろ}}ぼす。{{宋軍|そうぐん}}の弱さを見た金は、{{宋|そう}}への{{侵攻|しんこう}}を始める。" },
  { year: "1127", title: "{{靖康|せいこう}}の変・{{北宋|ほくそう}}の{{滅亡|めつぼう}}", note: "{{開封|かいほう}}が{{陥落|かんらく}}し、{{徽宗|きそう}}・{{欽宗|きんそう}}ら皇族が北方へ連れ去られる。", anchor: "early-battle-6" },
];

// 南宋・金・モンゴル（1127〜1281年）の流れ
const LATE_FLOW = [
  { year: "1127", title: "{{南宋|なんそう}}の建国（{{高宗|こうそう}}）", note: "難を{{逃|のが}}れた{{欽宗|きんそう}}の弟{{趙構|ちょうこう}}が{{即位|そくい}}し、やがて{{臨安|りんあん}}（{{杭州|こうしゅう}}）に都を置く。", href: EV_NANSONG_FOUND && `/events/${EV_NANSONG_FOUND.slug}` },
  { year: "1130", title: "{{黄天蕩|こうてんとう}}の戦い", note: "{{江南|こうなん}}を荒らして引き返す金軍を、{{韓世忠|かんせいちゅう}}の水軍が{{長江|ちょうこう}}で48日間{{封|ふう}}じ{{込|こ}}める。", anchor: "late-battle-1" },
  { year: "1140", title: "{{郾城|えんじょう}}の戦い（{{岳飛|がくひ}}の{{北伐|ほくばつ}}）", note: "{{岳家軍|がくかぐん}}が金の{{精鋭|せいえい}}{{騎兵|きへい}}を破り、{{開封|かいほう}}{{奪回|だっかい}}を目前にする。", anchor: "late-battle-2" },
  { year: "1142", title: "{{紹興|しょうこう}}の和議・{{岳飛|がくひ}}の死", note: "{{秦檜|しんかい}}が金と和議を結び、{{抗戦|こうせん}}を{{唱|とな}}えた{{岳飛|がくひ}}は{{獄死|ごくし}}させられる。", href: EV_YUEFEI && `/events/${EV_YUEFEI.slug}` },
  { year: "1161", title: "{{采石|さいせき}}の戦い", note: "{{長江|ちょうこう}}を{{渡|わた}}ろうとした金の{{海陵王|かいりょうおう}}を、文官の{{虞允文|ぐいんぶん}}が{{撃退|げきたい}}する。", anchor: "late-battle-3" },
  { year: "1206", title: "チンギス・ハンの{{即位|そくい}}", note: "モンゴル高原を統一したテムジンがハーンとなり、金・{{西夏|せいか}}への{{侵攻|しんこう}}を始める。" },
  { year: "1234", title: "{{蔡州|さいしゅう}}の戦い・金の{{滅亡|めつぼう}}", note: "モンゴルと{{南宋|なんそう}}の連合軍が金の最後の{{拠点|きょてん}}を落とす。", anchor: "late-battle-4" },
  { year: "1259", title: "{{釣魚城|ちょうぎょじょう}}の戦い", note: "四川の山城を攻めた大ハーンのモンケが{{陣没|じんぼつ}}し、モンゴルの{{攻勢|こうせい}}が一時止まる。", anchor: "late-battle-5" },
  { year: "1271", title: "元の成立（クビライ）", note: "クビライが国号を「大元」と定め、{{大都|だいと}}（北京）を都とする。", href: EV_YUAN_FOUND && `/events/${EV_YUAN_FOUND.slug}` },
  { year: "1273", title: "{{襄陽|じょうよう}}・{{樊城|はんじょう}}の{{陥落|かんらく}}", note: "5年にわたる{{籠城|ろうじょう}}の末、{{長江|ちょうこう}}への{{入口|いりぐち}}を守る{{要塞|ようさい}}が元に降る。", anchor: "late-battle-6" },
  { year: "1274", title: "{{文永|ぶんえい}}の役（{{元寇|げんこう}}）", note: "元・{{高麗|こうらい}}の連合軍が{{対馬|つしま}}・{{壱岐|いき}}を{{襲|おそ}}い、博多湾に上陸する。", anchor: "late-battle-8" },
  { year: "1276", title: "{{臨安|りんあん}}の{{開城|かいじょう}}", note: "{{伯顔|バヤン}}の元軍が{{長江|ちょうこう}}を下り、{{南宋|なんそう}}の都が戦わずに降る。", href: EV_LINAN && `/events/${EV_LINAN.slug}` },
  { year: "1279", title: "{{崖山|がいざん}}の戦い・{{南宋|なんそう}}の{{滅亡|めつぼう}}", note: "広東沖の海戦で{{南宋|なんそう}}の残存勢力が{{壊滅|かいめつ}}し、元が中国全土を統一する。", anchor: "late-battle-7" },
  { year: "1281", title: "{{弘安|こうあん}}の役（{{元寇|げんこう}}）", note: "旧{{南宋|なんそう}}の兵も加えた14万の大軍が再び日本を{{襲|おそ}}うが、{{暴風雨|ぼうふうう}}で大きな{{損害|そんがい}}を受けて{{撤退|てったい}}する。", href: EV_KOAN && `/events/${EV_KOAN.slug}` },
];

// 中国本土＋海南島の輪郭（/suitang-battlesなどと同じ、実際の海岸線をもとにした投影データ）
const CHINA_OUTLINE =
  "M294.9,341.64L288.42,346.09L282.27,343.22L282.06,335.26L285.75,331.07L293.94,328.48L298.25,328.7L299.93,332.23L296.64,336.3L294.9,341.64Z " +
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";
const TAIWAN_OUTLINE =
  "M380.66,288.78L376.15,303.61L372.94,311.2L368.99,303.39L368.13,296.53L372.54,287.45L378.54,280.45L381.97,283.2L380.66,288.78Z";

// 合戦地点。経緯度から/suitang-battlesなどと同じ図法（線形近似）で算出し、
// 近接する史跡同士は視認性のため数px調整している
// X ≈ 340 + 7.495×(経度-116.4) / Y ≈ 145 - 9.343×(緯度-39.9)
const EARLY_BATTLES = [
  {
    no: 1,
    id: "early-battle-1",
    year: "979年",
    name: "{{高梁河|こうりょうが}}の戦い",
    location: "{{幽州|ゆうしゅう}}（{{遼|りょう}}の{{南京|なんけい}}、現在の北京市）西北の{{高梁河|こうりょうが}}",
    mapX: 339,
    mapY: 145,
    factions: [
      { side: "{{宋軍|そうぐん}}", people: "{{太宗|たいそう}}（{{趙光義|ちょうこうぎ}}）" },
      { side: "{{遼軍|りょうぐん}}", people: "{{耶律休哥|やりつきゅうか}}・{{耶律斜軫|やりつしゃしん}}" },
    ],
    body: "979年5月、{{北漢|ほっかん}}の太原を落として五代十国の{{分裂|ぶんれつ}}を終わらせた太宗は、将兵の{{疲|つか}}れも{{顧|かえり}}みず、そのまま{{遼|りょう}}の手にある{{燕雲十六州|えんうんじゅうろくしゅう}}の{{奪回|だっかい}}に向かった。{{宋軍|そうぐん}}は{{幽州|ゆうしゅう}}を包囲したが、城は落ちないまま{{遼|りょう}}の{{援軍|えんぐん}}が到着し、{{高梁河|こうりょうが}}のほとりで{{耶律休哥|やりつきゅうか}}・{{耶律斜軫|やりつしゃしん}}の{{騎兵|きへい}}に左右から{{挟|はさ}}み{{撃|う}}ちにされて{{総崩|そうくず}}れとなる。太宗自身も{{脚|あし}}に矢を受け、ロバの引く車で{{辛|かろ}}うじて{{逃|のが}}れたと伝えられる。この敗戦で{{宋|そう}}は{{燕雲十六州|えんうんじゅうろくしゅう}}を取り{{戻|もど}}す好機を失い、以後、北方の{{騎馬軍団|きばぐんだん}}に対して守勢に回ることが多くなった。",
    relatedHref: null,
    relatedLabel: null,
    personHref: HREF_TAIZONG,
    personLabel: "{{宋|そう}}の太宗（{{趙光義|ちょうこうぎ}}）の{{生涯|しょうがい}}を読む",
    portrait: { name: "{{宋太宗|そうたいそう}}", ...IMG_TAIZONG },
  },
  {
    no: 2,
    id: "early-battle-2",
    year: "986年",
    name: "{{雍熙|ようき}}の{{北伐|ほくばつ}}（{{陳家谷|ちんかこく}}の戦い）",
    location: "{{岐溝関|きこうかん}}（河北省{{涿州市|たくしゅうし}}）・{{陳家谷|ちんかこく}}（山西省{{朔州市|さくしゅうし}}付近）",
    mapX: 310,
    mapY: 151,
    factions: [
      { side: "{{宋軍|そうぐん}}", people: "{{曹彬|そうひん}}・{{潘美|はんび}}・{{楊業|ようぎょう}}" },
      { side: "{{遼軍|りょうぐん}}", people: "{{承天太后|しょうてんたいこう}}（{{蕭綽|しょうしゃく}}）・{{耶律休哥|やりつきゅうか}}・{{耶律斜軫|やりつしゃしん}}" },
    ],
    body: "{{遼|りょう}}で幼い{{聖宗|せいそう}}が{{即位|そくい}}し、母の{{承天太后|しょうてんたいこう}}が政治を{{執|と}}っていると聞いた太宗は、好機と見て986年に三方面から{{北伐|ほくばつ}}の軍を送った。しかし主力の東路軍を率いる{{曹彬|そうひん}}は{{補給|ほきゅう}}に苦しんで{{岐溝関|きこうかん}}で大敗し、全軍に{{撤退|てったい}}が命じられる。西路軍の副将{{楊業|ようぎょう}}は、住民を連れて退く{{殿|しんがり}}を務めるなかで、{{監軍|かんぐん}}の{{王侁|おうしん}}に{{無謀|むぼう}}な{{出撃|しゅつげき}}を{{強|し}}いられた。{{楊業|ようぎょう}}は{{陳家谷|ちんかこく}}に{{援軍|えんぐん}}を置くよう頼んで出陣したが、{{援軍|えんぐん}}は持ち場を{{離|はな}}れており、{{孤立|こりつ}}したまま{{捕|と}}らえられて、食を{{断|た}}って死んだという。「{{楊無敵|ようむてき}}」と{{恐|おそ}}れられた{{楊業|ようぎょう}}とその一族の物語は、のちに『{{楊家将|ようかしょう}}』として語り{{継|つ}}がれていく。",
    relatedHref: EV_YONGXI && `/events/${EV_YONGXI.slug}`,
    relatedLabel: "{{雍熙|ようき}}の{{北伐|ほくばつ}}を年表で読む",
    personHref: HREF_YANGYE,
    personLabel: "{{楊業|ようぎょう}}の{{生涯|しょうがい}}を読む",
    portrait: { name: "{{楊業|ようぎょう}}", ...IMG_YANGYE },
  },
  {
    no: 3,
    id: "early-battle-3",
    year: "1004年",
    name: "{{澶淵|せんえん}}の戦い（{{澶淵|せんえん}}の盟）",
    location: "{{澶州|せんしゅう}}（河南省{{濮陽市|ぼくようし}}）",
    mapX: 330,
    mapY: 184,
    factions: [
      { side: "{{宋軍|そうぐん}}", people: "{{真宗|しんそう}}・{{寇準|こうじゅん}}・{{李継隆|りけいりゅう}}" },
      { side: "{{遼軍|りょうぐん}}", people: "{{聖宗|せいそう}}・{{承天太后|しょうてんたいこう}}・{{蕭撻凜|しょうたつりん}}" },
    ],
    body: "1004年秋、{{遼|りょう}}の{{聖宗|せいそう}}と{{承天太后|しょうてんたいこう}}は自ら大軍を率いて南下し、{{宋|そう}}の{{城塞|じょうさい}}を{{避|さ}}けながら黄河北岸の{{澶州|せんしゅう}}に{{迫|せま}}った。都の{{開封|かいほう}}までわずか百数十キロの地である。{{宮廷|きゅうてい}}では南方への{{遷都|せんと}}を説く声も上がったが、{{宰相|さいしょう}}{{寇準|こうじゅん}}は{{真宗|しんそう}}の{{親征|しんせい}}を強く{{求|もと}}め、黄河を{{渡|わた}}って{{澶州|せんしゅう}}の北城に{{皇帝|こうてい}}の{{旗|はた}}を{{掲|かか}}げさせて将兵の士気を高めた。{{遼軍|りょうぐん}}の{{先鋒|せんぽう}}を率いる{{蕭撻凜|しょうたつりん}}が{{宋軍|そうぐん}}の大型の{{弩|いしゆみ}}（{{床子弩|しょうしど}}）に{{射|い}}られて戦死すると、両国は和議に傾く。結ばれた「{{澶淵|せんえん}}の盟」では、{{宋|そう}}が毎年{{絹|きぬ}}20万{{匹|ひき}}・銀10万両を{{贈|おく}}り、両国の{{皇帝|こうてい}}が兄弟の関係を結ぶことが定められた。{{屈辱|くつじょく}}的との批判もあったが、戦費に比べればはるかに安く、両国のあいだには約120年におよぶ平和が続いた。",
    relatedHref: EV_CHANYUAN && `/events/${EV_CHANYUAN.slug}`,
    relatedLabel: "{{澶淵|せんえん}}の盟を年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "{{寇準|こうじゅん}}", ...IMG_KOUZHUN },
  },
  {
    no: 4,
    id: "early-battle-4",
    year: "1041年",
    name: "{{好水川|こうすいせん}}の戦い（{{宋|そう}}と{{西夏|せいか}}の戦争）",
    location: "{{好水川|こうすいせん}}（{{寧夏回族自治区|ねいかかいぞくじちく}}{{隆徳県|りゅうとくけん}}付近）",
    mapX: 261,
    mapY: 185,
    factions: [
      { side: "{{宋軍|そうぐん}}", people: "{{任福|じんふく}}・{{韓琦|かんき}}（{{陝西|せんせい}}方面の司令官）" },
      { side: "{{西夏軍|せいかぐん}}", people: "{{李元昊|りげんこう}}（{{景宗|けいそう}}）" },
    ],
    body: "1038年、{{党項|タングート}}族の{{李元昊|りげんこう}}は{{宋|そう}}からの自立を宣言して「大夏」（{{西夏|せいか}}）の{{皇帝|こうてい}}を{{称|しょう}}し、{{宋|そう}}の西北辺境に{{攻|せ}}め{{込|こ}}んだ。1041年、{{西夏軍|せいかぐん}}を追った{{宋|そう}}の将{{任福|じんふく}}は、{{好水川|こうすいせん}}の谷で道に置かれた{{泥|どろ}}の{{箱|はこ}}を見つける。開けると中から{{鳩|はと}}が飛び立ち、それを合図に周囲の山から{{西夏|せいか}}の{{伏兵|ふくへい}}が{{襲|おそ}}いかかったと伝えられる。{{任福|じんふく}}は戦死し、{{宋軍|そうぐん}}は1万人以上を失った。翌年の{{定川寨|ていせんさい}}の戦いでも{{宋|そう}}は敗れたが、{{西夏|せいか}}も長い戦争で{{疲弊|ひへい}}し、1044年の{{慶暦|けいれき}}の和約で、{{西夏|せいか}}が形式上{{宋|そう}}に臣従する代わりに{{宋|そう}}が毎年{{絹|きぬ}}・銀・茶を{{贈|おく}}ることで決着した。この戦争で前線を指揮した{{韓琦|かんき}}と{{范仲淹|はんちゅうえん}}は、のちに改革派の政治家として名を残している。",
    relatedHref: null,
    relatedLabel: null,
    personHref: null,
    personLabel: null,
    portrait: { name: "{{李元昊|りげんこう}}" },
  },
  {
    no: 5,
    id: "early-battle-5",
    year: "1114〜1115年",
    name: "{{寧江州|ねいこうしゅう}}・{{護歩達岡|ごほたつこう}}の戦い（金の{{台頭|たいとう}}）",
    location: "{{寧江州|ねいこうしゅう}}（{{吉林省|きつりんしょう}}{{松原市|しょうげんし}}付近）ほか",
    mapX: 408,
    mapY: 94,
    factions: [
      { side: "{{女真|じょしん}}（金）", people: "{{完顔阿骨打|わんやんあくだ}}" },
      { side: "{{遼軍|りょうぐん}}", people: "{{天祚帝|てんそてい}}" },
    ],
    body: "{{遼|りょう}}に支配されていた東北の{{女真|じょしん}}族は、{{狩猟|しゅりょう}}用の{{鷹|たか}}「海東青」などの重い{{貢納|こうのう}}や{{遼|りょう}}の役人の横暴に苦しんでいた。1114年、{{女真|じょしん}}諸部をまとめた{{完顔阿骨打|わんやんあくだ}}は2500ほどの兵で挙兵して{{寧江州|ねいこうしゅう}}を落とし、続く{{出河店|しゅつかてん}}の戦いでも{{遼|りょう}}の大軍を破った。翌1115年に金を建国して{{皇帝|こうてい}}に{{即位|そくい}}すると、同年冬には{{天祚帝|てんそてい}}が自ら率いた{{遼|りょう}}の大軍を{{護歩達岡|ごほたつこう}}で{{撃破|げきは}}する。「{{女真|じょしん}}は一万を満たせば{{敵|かな}}う者なし」と言われた{{精強|せいきょう}}な{{騎兵|きへい}}の前に{{遼|りょう}}は{{崩|くず}}れ、金は{{宋|そう}}と「海上の盟」を結んで{{遼|りょう}}を{{挟|はさ}}み{{撃|う}}ちにし、1125年に{{遼|りょう}}を{{滅|ほろ}}ぼした。このとき{{宋軍|そうぐん}}は{{燕京|えんけい}}の{{攻略|こうりゃく}}にも失敗しており、その弱さを見た金は、まもなく{{宋|そう}}そのものに{{矛先|ほこさき}}を向ける。",
    relatedHref: EV_JIN_FOUND && `/events/${EV_JIN_FOUND.slug}`,
    relatedLabel: "金の建国を年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "{{完顔阿骨打|わんやんあくだ}}", ...IMG_AGUDA },
  },
  {
    no: 6,
    id: "early-battle-6",
    year: "1126〜1127年",
    name: "{{開封|かいほう}}の{{攻防|こうぼう}}（{{靖康|せいこう}}の変）",
    location: "{{開封|かいほう}}（{{北宋|ほくそう}}の都、河南省{{開封市|かいほうし}}）",
    mapX: 324,
    mapY: 193,
    factions: [
      { side: "{{宋軍|そうぐん}}", people: "{{徽宗|きそう}}・{{欽宗|きんそう}}・{{李綱|りこう}}" },
      { side: "金軍", people: "{{完顔宗望|わんやんそうぼう}}・{{完顔宗翰|わんやんそうかん}}" },
    ],
    body: "1125年冬、金軍が二手に分かれて南下すると、{{徽宗|きそう}}はあわてて皇太子に{{譲位|じょうい}}し（{{欽宗|きんそう}}）、自らは南へ{{逃|のが}}れた。翌1126年正月の第一次包囲では、{{李綱|りこう}}が都の防衛を指揮して持ちこたえ、多額の{{賠償|ばいしょう}}と北方三{{鎮|ちん}}の{{割譲|かつじょう}}を約束して金軍を引き揚げさせた。しかし{{宋|そう}}の{{宮廷|きゅうてい}}は約束の{{履行|りこう}}をためらい、主戦派の{{李綱|りこう}}も遠ざけてしまう。同年秋に再び南下した金軍は閏11月に{{開封|かいほう}}を{{陥落|かんらく}}させ、1127年4月、{{徽宗|きそう}}・{{欽宗|きんそう}}をはじめとする皇族や{{官僚|かんりょう}}など数千人を北方へ連れ去った。年号をとって「{{靖康|せいこう}}の変」と呼ばれるこの事件で{{北宋|ほくそう}}は{{滅|ほろ}}び、{{開封|かいほう}}の{{繁栄|はんえい}}を{{描|えが}}いた『{{清明上河図|せいめいじょうかず}}』の都は金の支配下に入った。",
    relatedHref: EV_JINGKANG && `/events/${EV_JINGKANG.slug}`,
    relatedLabel: "{{靖康|せいこう}}の変を年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "{{徽宗|きそう}}", ...IMG_HUIZONG },
  },
];

const LATE_BATTLES = [
  {
    no: 1,
    id: "late-battle-1",
    year: "1130年",
    name: "{{黄天蕩|こうてんとう}}の戦い",
    location: "{{黄天蕩|こうてんとう}}（江蘇省南京市東北の{{長江|ちょうこう}}）",
    mapX: 363,
    mapY: 214,
    factions: [
      { side: "{{南宋軍|なんそうぐん}}", people: "{{韓世忠|かんせいちゅう}}・{{梁紅玉|りょうこうぎょく}}" },
      { side: "金軍", people: "{{完顔宗弼|わんやんそうひつ}}（{{兀朮|ウジュ}}）" },
    ],
    body: "{{南宋|なんそう}}の{{高宗|こうそう}}を追って{{長江|ちょうこう}}を{{渡|わた}}った金の{{完顔宗弼|わんやんそうひつ}}（{{兀朮|ウジュ}}）は、{{臨安|りんあん}}（{{杭州|こうしゅう}}）や明州（{{寧波|ニンポー}}）まで攻め{{込|こ}}み、{{高宗|こうそう}}は船で海上へ{{逃|のが}}れるほどだった。1130年春、{{略奪品|りゃくだつひん}}を積んで北へ引き返す金軍を、{{韓世忠|かんせいちゅう}}はわずか8000の水軍で{{長江|ちょうこう}}上に待ち受け、{{黄天蕩|こうてんとう}}と呼ばれる{{入江|いりえ}}に48日間にわたって{{封|ふう}}じ{{込|こ}}めた。妻の{{梁紅玉|りょうこうぎょく}}が自ら{{陣太鼓|じんだいこ}}を打って兵を{{励|はげ}}ましたという話は、のちの物語や{{京劇|きょうげき}}で有名になる。最後は金軍が{{水路|すいろ}}を{{掘|ほ}}り、風の{{止|や}}んだ日に火矢で{{宋|そう}}の大型船を焼いて{{脱出|だっしゅつ}}したが、この戦いを機に金は{{長江|ちょうこう}}を{{越|こ}}えた深い{{侵攻|しんこう}}を控えるようになった。",
    relatedHref: EV_NANSONG_FOUND && `/events/${EV_NANSONG_FOUND.slug}`,
    relatedLabel: "{{南宋|なんそう}}の建国を年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "{{韓世忠|かんせいちゅう}}" },
  },
  {
    no: 2,
    id: "late-battle-2",
    year: "1140年",
    name: "{{郾城|えんじょう}}の戦い（{{岳飛|がくひ}}の{{北伐|ほくばつ}}）",
    location: "{{郾城|えんじょう}}（河南省{{漯河市|るいかし}}）・{{潁昌|えいしょう}}（河南省{{許昌市|きょしょうし}}）",
    mapX: 320,
    mapY: 200,
    factions: [
      { side: "{{南宋軍|なんそうぐん}}（{{岳家軍|がくかぐん}}）", people: "{{岳飛|がくひ}}・{{岳雲|がくうん}}" },
      { side: "金軍", people: "{{完顔宗弼|わんやんそうひつ}}（{{兀朮|ウジュ}}）" },
    ],
    body: "1140年、金が和議を破って再び南下すると、{{岳飛|がくひ}}は{{鄂州|がくしゅう}}（{{武漢|ぶかん}}）から北上して河南の各地を取り{{戻|もど}}した。{{郾城|えんじょう}}では{{完顔宗弼|わんやんそうひつ}}が自ら率いる{{精鋭|せいえい}}{{騎兵|きへい}}と{{激突|げきとつ}}し、{{歩兵|ほへい}}に長い{{柄|え}}の{{刀|かたな}}で馬の脚を{{狙|ねら}}わせる戦法でこれを破ったと伝えられる。続く{{潁昌|えいしょう}}の戦いでも、子の{{岳雲|がくうん}}らの{{奮戦|ふんせん}}で金軍を退けた。「山を{{撼|うご}}かすは{{易|やす}}く、{{岳家軍|がくかぐん}}を{{撼|うご}}かすは{{難|かた}}し」と金の兵が{{嘆|なげ}}いたのはこのころとされる。しかし{{開封|かいほう}}の{{奪回|だっかい}}が目前に{{迫|せま}}ったところで、和平を急ぐ{{高宗|こうそう}}と{{宰相|さいしょう}}{{秦檜|しんかい}}は{{撤退|てったい}}を命じ、{{岳飛|がくひ}}は一日に12通もの金字牌で呼び{{戻|もど}}されたという。翌年{{岳飛|がくひ}}は{{謀反|むほん}}の{{疑|うたが}}いで投獄され、1142年1月に{{獄中|ごくちゅう}}で殺された。",
    relatedHref: EV_YUEFEI && `/events/${EV_YUEFEI.slug}`,
    relatedLabel: "{{岳飛|がくひ}}の死と金との和議を年表で読む",
    personHref: HREF_YUEFEI,
    personLabel: "{{岳飛|がくひ}}の{{生涯|しょうがい}}を読む",
    portrait: { name: "{{岳飛|がくひ}}", ...IMG_YUEFEI },
  },
  {
    no: 3,
    id: "late-battle-3",
    year: "1161年",
    name: "{{采石|さいせき}}の戦い",
    location: "{{采石磯|さいせきき}}（{{安徽省|あんきしょう}}{{馬鞍山市|ばあんざんし}}）",
    mapX: 352,
    mapY: 225,
    factions: [
      { side: "{{南宋軍|なんそうぐん}}", people: "{{虞允文|ぐいんぶん}}" },
      { side: "金軍", people: "{{海陵王|かいりょうおう}}（{{完顔亮|わんやんりょう}}）" },
    ],
    body: "{{南宋|なんそう}}を{{滅|ほろ}}ぼして天下を統一しようと考えた金の{{海陵王|かいりょうおう}}は、1161年、和議を破って大軍で南下した。{{長江|ちょうこう}}北岸の{{宋軍|そうぐん}}は戦わずに退き、{{采石|さいせき}}の対岸の守備隊も指揮官が{{解任|かいにん}}されたばかりで{{浮|う}}き足立っていた。そこへ{{兵糧|ひょうろう}}の{{慰労|いろう}}のため{{派遣|はけん}}されていた文官の{{虞允文|ぐいんぶん}}が来合わせ、散り散りの将兵をまとめて{{防衛|ぼうえい}}の指揮をとる。{{宋|そう}}の水軍は、人力で{{外輪|がいりん}}を回して進む{{車船|しゃせん}}（{{海鰍船|かいしゅうせん}}）などで、{{渡河|とか}}しようとする金の小舟を{{次々|つぎつぎ}}と{{沈|しず}}め、金軍を{{撃退|げきたい}}した。その間、金の本国では{{世宗|せいそう}}が{{即位|そくい}}して{{海陵王|かいりょうおう}}の{{廃位|はいい}}を宣言しており、{{揚州|ようしゅう}}近くまで{{移動|いどう}}した{{海陵王|かいりょうおう}}は、{{渡河|とか}}を{{強行|きょうこう}}しようとしたところを{{部下|ぶか}}に殺された。",
    relatedHref: null,
    relatedLabel: null,
    personHref: null,
    personLabel: null,
    portrait: { name: "{{虞允文|ぐいんぶん}}" },
  },
  {
    no: 4,
    id: "late-battle-4",
    year: "1233〜1234年",
    name: "{{蔡州|さいしゅう}}の戦い（金の{{滅亡|めつぼう}}）",
    location: "{{蔡州|さいしゅう}}（河南省{{駐馬店市|ちゅうばてんし}}{{汝南県|じょなんけん}}）",
    mapX: 327,
    mapY: 211,
    factions: [
      { side: "モンゴル・{{南宋|なんそう}}連合軍", people: "{{塔察児|タガチャル}}（モンゴル）・{{孟珙|もうきょう}}（{{南宋|なんそう}}）" },
      { side: "金軍", people: "{{哀宗|あいそう}}・{{末帝|まってい}}（{{承麟|しょうりん}}）" },
    ],
    body: "チンギス・ハンの時代から{{攻|せ}}め続けられた金は、都を{{開封|かいほう}}へ移して{{抵抗|ていこう}}したが、1232年の{{三峰山|さんぽうざん}}の戦いで主力を失い、{{開封|かいほう}}もモンゴル軍に包囲された。{{哀宗|あいそう}}は都を{{脱出|だっしゅつ}}して{{蔡州|さいしゅう}}に{{逃|のが}}れたが、1233年秋にはモンゴル軍と、かつての仇敵{{北宋|ほくそう}}の{{恨|うら}}みを晴らそうとする{{南宋|なんそう}}の{{孟珙|もうきょう}}の軍に囲まれる。3か月の{{籠城|ろうじょう}}の末、1234年正月に城が破られる直前、{{哀宗|あいそう}}は一族の{{完顔承麟|わんやんしょうりん}}に位を{{譲|ゆず}}って自ら命を絶ち、{{即位|そくい}}したばかりの{{承麟|しょうりん}}も乱戦のなかで討たれた。こうして金は建国から120年で{{滅|ほろ}}んだ。しかし{{南宋|なんそう}}はこの直後、旧都の{{開封|かいほう}}・{{洛陽|らくよう}}の{{奪回|だっかい}}を{{狙|ねら}}って出兵し（{{端平入洛|たんぺいにゅうらく}}）、モンゴルとの全面戦争を招くことになる。",
    relatedHref: EV_JIN_FALL && `/events/${EV_JIN_FALL.slug}`,
    relatedLabel: "金の{{滅亡|めつぼう}}を年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "{{孟珙|もうきょう}}" },
  },
  {
    no: 5,
    id: "late-battle-5",
    year: "1259年",
    name: "{{釣魚城|ちょうぎょじょう}}の戦い",
    location: "{{釣魚城|ちょうぎょじょう}}（{{重慶市|じゅうけいし}}{{合川区|ごうせんく}}）",
    mapX: 264,
    mapY: 237,
    factions: [
      { side: "{{南宋軍|なんそうぐん}}", people: "{{王堅|おうけん}}・{{張珏|ちょうかく}}" },
      { side: "モンゴル軍", people: "モンケ（{{憲宗|けんそう}}）" },
    ],
    body: "モンゴル{{帝国|ていこく}}の第4代大ハーン・モンケは、{{南宋|なんそう}}を一気に{{滅|ほろ}}ぼすため、自らは四川へ、弟のクビライは{{長江|ちょうこう}}中流の{{鄂州|がくしゅう}}へ向かう三方面作戦を始めた。四川の{{南宋軍|なんそうぐん}}は、川に囲まれた{{断崖|だんがい}}の上に{{城壁|じょうへき}}を{{巡|めぐ}}らせた山城を各地に築いて{{抵抗|ていこう}}しており、なかでも{{嘉陵江|かりょうこう}}など三つの川の合流点にそびえる{{釣魚城|ちょうぎょじょう}}は難攻不落を{{誇|ほこ}}った。1259年2月から{{王堅|おうけん}}の守る城を包囲したモンケは、半年近く{{攻|せ}}め続けても落とせないまま、7月に陣中で{{没|ぼっ}}する（{{病死|びょうし}}とも、{{城|しろ}}からの{{砲撃|ほうげき}}による{{負傷|ふしょう}}がもとともいわれる）。{{後継|こうけい}}争いのためクビライは{{鄂州|がくしゅう}}の包囲を解いて北へ帰り、{{南宋|なんそう}}は{{滅亡|めつぼう}}を約20年先延ばしにすることになった。{{釣魚城|ちょうぎょじょう}}は{{南宋|なんそう}}の{{滅亡|めつぼう}}後の1279年まで守り{{抜|ぬ}}かれている。",
    relatedHref: null,
    relatedLabel: null,
    personHref: null,
    personLabel: null,
    portrait: { name: "{{王堅|おうけん}}" },
  },
  {
    no: 6,
    id: "late-battle-6",
    year: "1268〜1273年",
    name: "{{襄陽|じょうよう}}・{{樊城|はんじょう}}の戦い",
    location: "{{襄陽|じょうよう}}・{{樊城|はんじょう}}（{{湖北省|こほくしょう}}{{襄陽市|じょうようし}}）",
    mapX: 308,
    mapY: 219,
    factions: [
      { side: "{{南宋軍|なんそうぐん}}", people: "{{呂文煥|りょぶんかん}}・{{張順|ちょうじゅん}}・{{張貴|ちょうき}}" },
      { side: "元軍", people: "{{阿朮|アジュ}}・{{劉整|りゅうせい}}・{{史天沢|してんたく}}" },
    ],
    body: "{{漢水|かんすい}}を{{挟|はさ}}んで向かい合う{{襄陽|じょうよう}}と{{樊城|はんじょう}}は、{{長江|ちょうこう}}流域へ通じる{{南宋|なんそう}}防衛の{{要|かなめ}}だった。クビライは{{南宋|なんそう}}から{{降|くだ}}った将{{劉整|りゅうせい}}の進言を入れ、1268年から両城を長期包囲する。元軍は周囲に{{砦|とりで}}を連ね、{{南宋|なんそう}}出身の兵も使って強力な水軍を育てて、城への{{補給|ほきゅう}}路を{{断|た}}った。{{呂文煥|りょぶんかん}}は5年近く{{籠城|ろうじょう}}を続け、決死の{{救援|きゅうえん}}隊を率いた{{張順|ちょうじゅん}}・{{張貴|ちょうき}}兄弟も戦死した。決め手となったのは、西アジアから招かれた技術者が作った{{平衡錘|へいこうすい}}式の{{投石機|とうせきき}}「{{回回砲|かいかいほう}}」で、1273年に{{樊城|はんじょう}}が落ち、その{{砲撃|ほうげき}}が{{襄陽|じょうよう}}に向けられると{{呂文煥|りょぶんかん}}も{{降伏|こうふく}}した。{{関門|かんもん}}を失った{{南宋|なんそう}}に{{伯顔|バヤン}}の大軍が{{殺到|さっとう}}し、3年後には都の{{臨安|りんあん}}が開城する。",
    relatedHref: EV_LINAN && `/events/${EV_LINAN.slug}`,
    relatedLabel: "{{臨安|りんあん}}の{{陥落|かんらく}}を年表で読む",
    personHref: HREF_KUBILAI,
    personLabel: "クビライの{{生涯|しょうがい}}を読む",
    portrait: { name: "クビライ", ...IMG_KUBILAI },
  },
  {
    no: 7,
    id: "late-battle-7",
    year: "1279年",
    name: "{{崖山|がいざん}}の戦い",
    location: "{{崖山|がいざん}}（広東省{{江門市|こうもんし}}{{新会区|しんかいく}}沖）",
    mapX: 315,
    mapY: 312,
    factions: [
      { side: "{{南宋軍|なんそうぐん}}", people: "{{張世傑|ちょうせいけつ}}・{{陸秀夫|りくしゅうふ}}・{{趙昺|ちょうへい}}（{{衛王|えいおう}}）" },
      { side: "元軍", people: "{{張弘範|ちょうこうはん}}・{{李恒|りこう}}" },
    ],
    body: "{{臨安|りんあん}}の開城後も、{{張世傑|ちょうせいけつ}}・{{陸秀夫|りくしゅうふ}}らは幼い皇子を{{擁|よう}}して福建・広東の沿岸を転々としながら{{抵抗|ていこう}}を続けた。最後の{{拠点|きょてん}}となった{{珠江|しゅこう}}河口の{{崖山|がいざん}}で、{{張世傑|ちょうせいけつ}}は1000隻を{{超|こ}}える船を鎖でつないで海上の{{要塞|ようさい}}とし、元の{{張弘範|ちょうこうはん}}を{{迎|むか}}え{{撃|う}}つ。しかし陸からの水の{{補給|ほきゅう}}を断たれて{{疲弊|ひへい}}したところへ、1279年2月、元軍が潮の満ち引きを利用して南北から総攻撃をかけ、{{南宋|なんそう}}の{{艦隊|かんたい}}は{{崩壊|ほうかい}}した。{{宰相|さいしょう}}の{{陸秀夫|りくしゅうふ}}は8{{歳|さい}}の{{皇帝|こうてい}}{{趙昺|ちょうへい}}を背負って海に身を投げ、多くの将兵や{{官僚|かんりょう}}がそのあとを追ったと伝えられる。前年に{{捕|と}}らえられていた{{文天祥|ぶんてんしょう}}は、元の船の上からこの{{最期|さいご}}を見届けた。こうして{{宋|そう}}は建国から約320年で{{滅|ほろ}}び、元が中国全土を支配下に置いた。",
    relatedHref: EV_YASHAN && `/events/${EV_YASHAN.slug}`,
    relatedLabel: "{{崖山|がいざん}}の戦いを年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "{{陸秀夫|りくしゅうふ}}" },
  },
  {
    no: 8,
    id: "late-battle-8",
    year: "1274年・1281年",
    name: "{{元寇|げんこう}}（{{文永|ぶんえい}}の役・{{弘安|こうあん}}の役）",
    location: "{{対馬|つしま}}・{{壱岐|いき}}・博多湾（福岡県）・{{鷹島|たかしま}}（長崎県）",
    mapX: 445,
    mapY: 204,
    factions: [
      { side: "元・{{高麗|こうらい}}軍", people: "{{忻都|きんと}}・{{洪茶丘|こうさきゅう}}・{{范文虎|はんぶんこ}}（{{江南軍|こうなんぐん}}）" },
      { side: "{{鎌倉幕府|かまくらばくふ}}", people: "{{北条時宗|ほうじょうときむね}}（{{執権|しっけん}}）・九州の{{御家人|ごけにん}}" },
    ],
    body: "クビライは{{南宋|なんそう}}と{{結|むす}}びつきの深い日本を服属させようと国書を送ったが、{{執権|しっけん}}{{北条時宗|ほうじょうときむね}}はこれを{{退|しりぞ}}けた。1274年の{{文永|ぶんえい}}の役では、元と{{高麗|こうらい}}の連合軍約3万が{{対馬|つしま}}・{{壱岐|いき}}を{{襲|おそ}}って博多湾に上陸し、集団戦法や「てつはう」と呼ばれる火薬兵器で{{御家人|ごけにん}}を苦しめたが、1日の戦いののち{{撤退|てったい}}した。{{南宋|なんそう}}を{{滅|ほろ}}ぼした後の1281年の{{弘安|こうあん}}の役では、朝鮮半島からの東路軍約4万に、旧{{南宋|なんそう}}の兵を中心とする{{江南軍|こうなんぐん}}約10万が加わった。幕府が博多湾岸に築いた石の{{防塁|ぼうるい}}に上陸を{{阻|はば}}まれ、{{鷹島|たかしま}}沖に集結していたところを{{暴風雨|ぼうふうう}}に{{襲|おそ}}われて、元軍は大きな{{損害|そんがい}}を受けて{{撤退|てったい}}した。地図では博多湾の位置を示している。",
    relatedHref: EV_BUNEI && `/events/${EV_BUNEI.slug}`,
    relatedLabel: "{{文永|ぶんえい}}の役を年表で読む",
    personHref: EV_KOAN && `/events/${EV_KOAN.slug}`,
    personLabel: "{{弘安|こうあん}}の役を年表で読む",
    portrait: { name: "クビライ", ...IMG_KUBILAI },
  },
];

// 大まかな勢力圏・地域のラベル（範囲を厳密に示すものではない）
const EARLY_REGION_LABELS = [
  { label: "{{遼|りょう}}（{{契丹|きったん}}）", x: 330, y: 112 },
  { label: "{{女真|じょしん}}", x: 432, y: 74 },
  { label: "{{西夏|せいか}}", x: 250, y: 160 },
  { label: "{{北宋|ほくそう}}", x: 322, y: 240 },
  { label: "{{大理|だいり}}", x: 226, y: 280 },
];
const LATE_REGION_LABELS = [
  { label: "モンゴル", x: 290, y: 105 },
  { label: "金", x: 340, y: 165 },
  { label: "{{西夏|せいか}}", x: 250, y: 160 },
  { label: "{{南宋|なんそう}}", x: 330, y: 255 },
  { label: "{{大理|だいり}}", x: 226, y: 280 },
  { label: "日本", x: 452, y: 222 },
];

function BattleMap({ battles, regionLabels, note }) {
  return (
    <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}><RubyText text={note} /></p>
      <svg viewBox="0 0 500 366" style={{ width: "100%", maxHeight: 400, display: "block", margin: "0 auto" }}>
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />
        <path d={TAIWAN_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />

        {regionLabels.map((r, i) => (
          <text
            key={`region-${i}`}
            x={r.x}
            y={r.y}
            textAnchor="middle"
            style={{ fontFamily: "var(--font-serif), serif", fontSize: 12, fontWeight: 700, fill: COLORS.inkSoft, opacity: 0.55 }}
          >
            {stripRuby(r.label)}
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
              style={{ fontFamily: "var(--font-serif), serif", fontSize: 9, fontWeight: 700, fill: "#FBF8F0" }}
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
            <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 12.5, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>
              <RubyText text={f.year} />
            </span>
            <div className="flex-1 min-w-0">
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
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
                  fontFamily: "var(--font-serif), serif",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {b.no}
              </span>
              <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 16.5, fontWeight: 700, color: COLORS.ink }}>
                <RubyText text={b.name} />
              </span>
              <span style={{ fontSize: 12, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}><RubyText text={b.year} /></span>
            </div>
            <div style={{ fontSize: 11, color: COLORS.vermilionSoft, marginTop: 4 }}>
              <span aria-hidden>📍</span> <RubyText text={b.location} />
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3" style={{ fontSize: 11.5 }}>
              {b.factions.map((f, i) => (
                <div key={i}>
                  <span style={{ color: COLORS.gold, fontWeight: 700 }}><RubyText text={f.side} />：</span>
                  <span style={{ color: COLORS.inkSoft }}><RubyText text={f.people} /></span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 10 }}>
              <RubyText text={b.body} />
            </p>

            {b.portrait?.credit && (
              <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 4 }}><RubyText text={b.portrait.credit} /></div>
            )}

            <div className="flex items-center gap-3 flex-wrap mt-3" style={{ fontSize: 11.5 }}>
              {b.relatedHref && (
                <a href={b.relatedHref} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                  <RubyText text={b.relatedLabel} /> →
                </a>
              )}
              {b.personHref && (
                <a href={b.personHref} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                  <RubyText text={b.personLabel} /> →
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


export default function SongYuanBattlesPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          <ruby>宋<rt>そう</rt></ruby>・金・元 合戦マップ
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 20 }}>
          960年に<ruby>宋<rt>そう</rt></ruby>が建国してから、1279年の<ruby>崖山<rt>がいざん</rt></ruby>の戦いで<ruby>南宋<rt>なんそう</rt></ruby>が滅びるまで——この約300年は、
          経済と文化が大きく花開いた<ruby>宋<rt>そう</rt></ruby>が、<ruby>遼<rt>りょう</rt></ruby>・<ruby>西夏<rt>せいか</rt></ruby>・金、そしてモンゴルと、北方の強国に次々と立ち向かった時代です。
          このページでは前半の「<ruby>北宋<rt>ほくそう</rt></ruby>と<ruby>遼<rt>りょう</rt></ruby>・<ruby>西夏<rt>せいか</rt></ruby>・金」と後半の「<ruby>南宋<rt>なんそう</rt></ruby>と金・モンゴル」に分けて、代表的な合戦とそこで活躍した人物たちを地図とともに紹介します。日本を<ruby>襲<rt>おそ</rt></ruby>った<ruby>元寇<rt>げんこう</rt></ruby>も取り上げています。
        </p>

        <div className="flex items-center gap-2.5 flex-wrap mb-10" style={{ fontSize: 12.5 }}>
          <a href="#early" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            → <ruby>北宋<rt>ほくそう</rt></ruby>（960〜1127）へ
          </a>
          <span style={{ color: COLORS.mist }}>|</span>
          <a href="#late" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            → <ruby>南宋<rt>なんそう</rt></ruby>・金・モンゴル（1127〜1281）へ
          </a>
          <span style={{ color: COLORS.mist }}>|</span>
          <a href="#border-map" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            → 勢力図の変遷へ
          </a>
        </div>

        <section id="early" style={{ marginBottom: 20, scrollMarginTop: 16 }}>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 12, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 4 }}>
            960 – 1127
          </div>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 21, fontWeight: 900, color: COLORS.ink, marginBottom: 4 }}>
            <ruby>北宋<rt>ほくそう</rt></ruby>と<ruby>遼<rt>りょう</rt></ruby>・<ruby>西夏<rt>せいか</rt></ruby>・金の合戦
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 16 }}>
            中国本土を統一した<ruby>宋<rt>そう</rt></ruby>が、<ruby>燕雲十六州<rt>えんうんじゅうろくしゅう</rt></ruby>をめぐる<ruby>遼<rt>りょう</rt></ruby>との戦いに敗れ、毎年の<ruby>贈与<rt>ぞうよ</rt></ruby>で平和を買いながら繁栄した時代。新たに興った金によって、都の<ruby>開封<rt>かいほう</rt></ruby>はあっけなく落ちる。
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            時代の流れ
          </h3>
          <FlowList items={EARLY_FLOW} />
        </section>

        <section style={{ marginBottom: 12 }}>
          <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            合戦地図
          </h3>
          <BattleMap
            battles={EARLY_BATTLES}
            regionLabels={EARLY_REGION_LABELS}
            note="実際の海岸線をもとにした位置関係図です。{{朱色|しゅいろ}}の番号は下の各合戦の位置を示しています（{{雍熙|ようき}}の{{北伐|ほくばつ}}は{{楊業|ようぎょう}}が戦死した{{陳家谷|ちんかこく}}の位置で示しています）。"
          />
        </section>

        <section style={{ marginBottom: 40 }}>
          <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 16 }}>
            主要な戦い
          </h3>
          <BattleCards battles={EARLY_BATTLES} />
        </section>

        <section id="late" style={{ marginBottom: 20, paddingTop: 8, borderTop: `1px solid ${COLORS.mist}`, scrollMarginTop: 16 }}>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 12, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 4, marginTop: 24 }}>
            1127 – 1281
          </div>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 21, fontWeight: 900, color: COLORS.ink, marginBottom: 4 }}>
            <ruby>南宋<rt>なんそう</rt></ruby>と金・モンゴルの合戦
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 16 }}>
            <ruby>江南<rt>こうなん</rt></ruby>に逃れた<ruby>南宋<rt>なんそう</rt></ruby>が淮河を境に金と南北に並び立ち、やがて草原から興ったモンゴルが金を、そして<ruby>南宋<rt>なんそう</rt></ruby>をのみこんでいく時代。
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            時代の流れ
          </h3>
          <FlowList items={LATE_FLOW} />
        </section>

        <section style={{ marginBottom: 12 }}>
          <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            合戦地図
          </h3>
          <BattleMap
            battles={LATE_BATTLES}
            regionLabels={LATE_REGION_LABELS}
            note="実際の海岸線をもとにした位置関係図です。{{朱色|しゅいろ}}の番号は下の各合戦の位置を示しています（日本列島と{{朝鮮|ちょうせん}}半島は省略しており、{{元寇|げんこう}}は博多湾のおおよその位置で示しています）。"
          />
        </section>

        <section id="border-map" style={{ marginBottom: 12, scrollMarginTop: 16 }}>
          <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            勢力図の変遷アニメーション
          </h3>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 12 }}>
            <ruby>宋<rt>そう</rt></ruby>と<ruby>遼<rt>りょう</rt></ruby>・<ruby>西夏<rt>せいか</rt></ruby>の並立、金の台頭と<ruby>北宋<rt>ほくそう</rt></ruby>の滅亡、<ruby>南宋<rt>なんそう</rt></ruby>と金の南北分立、そしてモンゴルによる統一まで——再生ボタンまたは年代タブで、勢力図が移り変わる様子を確認できます。
          </p>
          <SongYuanBorderMap />
        </section>

        <section>
          <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 16 }}>
            主要な戦い
          </h3>
          <BattleCards battles={LATE_BATTLES} />
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            <ruby>宋<rt>そう</rt></ruby>が生まれるまでの<ruby>隋唐<rt>ずいとう</rt></ruby>・五代十国の合戦は、下記の特集ページで紹介しています。
            <ruby>宋<rt>そう</rt></ruby>と<ruby>遼<rt>りょう</rt></ruby>の攻防を描いた『<ruby>楊家将<rt>ようかしょう</rt></ruby>』や、<ruby>北宋<rt>ほくそう</rt></ruby>末期の『<ruby>水滸伝<rt>すいこでん</rt></ruby>』の特集もあわせてご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/suitang-battles" variant="solid"><ruby>隋唐<rt>ずいとう</rt></ruby>・五代 合戦マップを見る</NavButton>
            <NavButton href="/yangjiajiang" variant="outline"><ruby>楊家将<rt>ようかしょう</rt></ruby>の特集を見る</NavButton>
            <NavButton href="/suikoden" variant="outline"><ruby>水滸伝<rt>すいこでん</rt></ruby>とは</NavButton>
            <NavButton href="/japan-china-timeline" variant="outline">日中対照年表を見る</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/song-yuan-battles" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
