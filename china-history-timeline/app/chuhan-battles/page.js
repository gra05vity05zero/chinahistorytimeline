import { ERAS, stripRuby, getEraFigures, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection, HeritageThumb } from "@/components/Shared";
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

// 人物名から、肖像画像（あれば）とクレジットを探す
function findPersonImage(eraId, name) {
  const era = ERAS.find((e) => e.id === eraId);
  if (!era) return null;
  const figure = getEraFigures(era).find((f) => stripRuby(f.name) === name);
  return figure ? { imageUrl: figure.imageUrl, credit: figure.credit } : null;
}

const EV_CHENSHENG = findEvent("qin", "陳勝");
const EV_HONGMEN = findEvent("qin", "鴻門");
const EV_HANFOUND = findEvent("westernhan", "漢を建国");

const HREF_XIANGYU = findPersonHref("qin", "項羽");
const HREF_LIUBANG = findPersonHref("westernhan", "劉邦");

const IMG_XIANGYU = findPersonImage("qin", "項羽");
const IMG_LIUBANG = findPersonImage("westernhan", "劉邦");

// 秦滅亡〜楚漢戦争の流れ。hrefは/eventsへの直接リンク、anchorは本ページ内の合戦セクションへのリンク
const FLOW = [
  { year: "209", title: "{{陳勝|ちんしょう}}・{{呉広|ごこう}}の乱", note: "農民出身の{{陳勝|ちんしょう}}・{{呉広|ごこう}}が挙兵し、各地の{{反秦|はんしん}}勢力が動き出す。", anchor: "battle-1" },
  { year: "208", title: "{{項梁|こうりょう}}・{{項羽|こうう}}ら挙兵", note: "{{楚|そ}}の名門出身の{{項羽|こうう}}が、{{叔父|おじ}}{{項梁|こうりょう}}とともに{{反秦軍|はんしんぐん}}の中心となっていく。", href: null },
  { year: "207", title: "{{鉅鹿|きょろく}}の戦い", note: "「{{破釜沈舟|はふちんしゅう}}」の決死の{{覚悟|かくご}}で{{項羽|こうう}}が{{秦|しん}}の主力軍を{{撃破|げきは}}する。", anchor: "battle-2" },
  { year: "206", title: "{{秦|しん}}の{{滅亡|めつぼう}}・{{鴻門|こうもん}}の会", note: "先に{{咸陽入|かんようい}}りした{{劉邦|りゅうほう}}を{{項羽|こうう}}が{{詰問|きつもん}}。暗殺の危機を{{劉邦|りゅうほう}}は{{辛|つら}}くも{{脱|だっ}}する。", anchor: "battle-3" },
  { year: "206", title: "{{陳倉|ちんそう}}の戦い", note: "{{劉邦|りゅうほう}}・{{韓信|かんしん}}が「{{明修桟道|めいしゅうさんどう}}、{{暗渡陳倉|あんとちんそう}}」の{{奇策|きさく}}で関中を{{奪還|だっかん}}、{{楚漢戦争|そかんせんそう}}が始まる。", anchor: "battle-4" },
  { year: "205", title: "{{彭城|ほうじょう}}の戦い", note: "56万の{{劉邦|りゅうほう}}連合軍を、{{項羽|こうう}}がわずか3万の{{精鋭|せいえい}}で{{壊滅|かいめつ}}させる。", anchor: "battle-5" },
  { year: "204", title: "{{井陘|せいけい}}の戦い（{{背水の陣|はいすいのじん}}）", note: "{{韓信|かんしん}}が{{寡兵|かへい}}で{{趙|ちょう}}の大軍を破り、「{{背水の陣|はいすいのじん}}」の故事を生む。", anchor: "battle-6" },
  { year: "204–203", title: "{{滎陽|けいよう}}・{{成皋|せいこう}}の{{攻防|こうぼう}}", note: "{{劉邦|りゅうほう}}は{{幾度|いくど}}も追い{{詰|つ}}められながら、{{粘|ねば}}り強く持久戦を続ける。", anchor: "battle-7" },
  { year: "202", title: "{{垓下|がいか}}の戦い", note: "「{{四面楚歌|しめんそか}}」に囲まれた{{項羽|こうう}}が{{自刎|じふん}}し、{{楚漢戦争|そかんせんそう}}が終結する。", anchor: "battle-8" },
  { year: "202", title: "{{劉邦|りゅうほう}}、漢を建国", note: "農民出身の{{劉邦|りゅうほう}}が{{皇帝|こうてい}}に{{即位|そくい}}し、400年続く漢王朝が始まる。", href: EV_HANFOUND && `/events/${EV_HANFOUND.slug}` },
];

// 中国本土＋海南島の輪郭（/world-heritage・/sanguo-battlesと同じ、実際の海岸線をもとにした投影データ）
const CHINA_OUTLINE =
  "M294.9,341.64L288.42,346.09L282.27,343.22L282.06,335.26L285.75,331.07L293.94,328.48L298.25,328.7L299.93,332.23L296.64,336.3L294.9,341.64Z " +
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";
const TAIWAN_OUTLINE =
  "M380.66,288.78L376.15,303.61L372.94,311.2L368.99,303.39L368.13,296.53L372.54,287.45L378.54,280.45L381.97,283.2L380.66,288.78Z";

// 両陣営の大まかな勢力圏ラベル（範囲を厳密に示すものではない）
const REGION_LABELS = [
  { label: "漢（{{劉邦|りゅうほう}}の勢力{{基盤|きばん}}）", x: 245, y: 165 },
  { label: "{{楚|そ}}（{{項羽|こうう}}の{{本拠地|ほんきょち}}）", x: 392, y: 183 },
];

// 合戦地点。経緯度から/world-heritage・/sanguo-battlesと同じ図法（線形近似）で算出し、
// 近接する史跡同士は視認性のため数px調整している
// X ≈ 340 + 7.495×(経度-116.4) / Y ≈ 145 - 9.343×(緯度-39.9)
const BATTLES = [
  {
    no: 1,
    id: "battle-1",
    year: "209 BC",
    name: "{{大澤郷|だいたくきょう}}の{{蜂起|ほうき}}（{{陳勝|ちんしょう}}・{{呉広|ごこう}}の乱）",
    location: "{{安徽|あんき}}省宿州市（{{大澤郷|だいたくきょう}}）",
    mapX: 330,
    mapY: 215,
    factions: [
      { side: "反乱軍", people: "{{陳勝|ちんしょう}}・{{呉広|ごこう}}" },
      { side: "{{秦軍|しんぐん}}", people: "地方の郡県守備隊" },
    ],
    body: "辺境警備に向かう{{途上|とじょう}}、大雨で期日に{{遅|おく}}れ{{処刑|しょけい}}される運命に直面した農民{{陳勝|ちんしょう}}と{{呉広|ごこう}}は、「{{王侯将相|おうこうしょうしょう}}いずくんぞ種あらんや」の言葉とともに{{蜂起|ほうき}}した。反乱は{{瞬|またた}}く間に{{華北|かほく}}一帯へ広がり、{{陳勝|ちんしょう}}は自ら「{{張楚|ちょうそ}}」を名乗って独立政権を樹立するまでに至る。{{蜂起|ほうき}}そのものは半年ほどで{{鎮圧|ちんあつ}}されたが、これに{{触発|しょくはつ}}されて{{項羽|こうう}}・{{劉邦|りゅうほう}}をはじめ各地の{{反秦|はんしん}}勢力が次々と挙兵し、{{秦崩壊|しんほうかい}}への流れを決定づけることになった。",
    relatedHref: EV_CHENSHENG && `/events/${EV_CHENSHENG.slug}`,
    relatedLabel: "{{陳勝|ちんしょう}}・{{呉広|ごこう}}の乱を年表で読む",
    personHref: null,
    personLabel: null,
    portrait: { name: "{{陳勝|ちんしょう}}" },
  },
  {
    no: 2,
    id: "battle-2",
    year: "207 BC",
    name: "{{鉅鹿|きょろく}}の戦い",
    location: "河北省{{邢台市|けいだいし}}{{鉅鹿県|きょろくけん}}付近",
    mapX: 329,
    mapY: 169,
    factions: [
      { side: "{{反秦|はんしん}}{{諸侯|しょこう}}連合軍", people: "{{項羽|こうう}}" },
      { side: "{{秦軍|しんぐん}}", people: "{{章邯|しょうかん}}・{{王離|おうり}}" },
    ],
    body: "{{秦|しん}}の主力軍に包囲された{{鉅鹿|きょろく}}の{{反秦|はんしん}}勢力を{{救援|きゅうえん}}するため、{{項羽|こうう}}は自ら軍を率いて{{渡河|とか}}すると、乗ってきた船を{{沈|しず}}め、{{炊事用|すいじよう}}の{{釜|かま}}を{{破壊|はかい}}して兵に退路を断たせ、決死の{{覚悟|かくご}}で戦わせた。この「{{破釜沈舟|はふちんしゅう}}」の{{奇策|きさく}}により{{項羽軍|こううぐん}}は九度にわたる激戦のすべてに勝利し、{{秦|しん}}の主力軍を{{壊滅|かいめつ}}させる。観戦していた{{諸侯|しょこう}}の軍勢はその{{勇猛|ゆうもう}}さに{{恐|おそ}}れをなし戦わずして降ったと伝えられ、この勝利により{{項羽|こうう}}は{{反秦|はんしん}}{{諸侯|しょこう}}連合の中心的指導者としての地位を確立した。",
    relatedHref: null,
    relatedLabel: null,
    personHref: HREF_XIANGYU,
    personLabel: "{{項羽|こうう}}の{{生涯|しょうがい}}を読む",
    portrait: { name: "{{項羽|こうう}}", ...IMG_XIANGYU },
  },
  {
    no: 3,
    id: "battle-3",
    year: "206 BC",
    name: "{{秦|しん}}の{{滅亡|めつぼう}}・{{鴻門|こうもん}}の会",
    location: "{{陝西省|せんせいしょう}}西安市{{臨潼区|りんとうく}}",
    mapX: 287,
    mapY: 197,
    factions: [
      { side: "{{劉邦|りゅうほう}}{{陣営|じんえい}}", people: "{{劉邦|りゅうほう}}・{{張良|ちょうりょう}}・{{樊噲|はんかい}}" },
      { side: "{{項羽|こうう}}{{陣営|じんえい}}", people: "{{項羽|こうう}}・{{范増|はんぞう}}" },
    ],
    body: "{{諸侯|しょこう}}連合が{{鉅鹿|きょろく}}で{{秦|しん}}の主力を退ける間に、{{劉邦|りゅうほう}}は別動隊を率いて先に{{秦|しん}}の都{{咸陽|かんよう}}へ入城していた。{{遅|おく}}れて{{到着|とうちゃく}}した{{項羽|こうう}}はこれに{{激怒|げきど}}し、{{鴻門|こうもん}}の{{酒宴|しゅえん}}に{{劉邦|りゅうほう}}を招く。{{参謀|さんぼう}}{{范増|はんぞう}}は{{剣舞|けんぶ}}に見せかけて暗殺を図るが、{{劉邦|りゅうほう}}配下の{{樊噲|はんかい}}が{{剣|けん}}と{{盾|たて}}を手に強引に{{宴席|えんせき}}へ乱入して{{睨|にら}}みを利かせ、{{劉邦|りゅうほう}}は{{隙|すき}}をついて{{脱出|だっしゅつ}}に成功したと伝えられる。この「{{鴻門の会|こうもんのかい}}」を経て{{項羽|こうう}}は{{諸侯|しょこう}}に領土を分け{{与|あた}}え自ら「{{西楚覇王|せいそはおう}}」を{{称|しょう}}するが、論功行賞への不満はまもなく{{楚漢戦争|そかんせんそう}}の火種となっていく。",
    relatedHref: EV_HONGMEN && `/events/${EV_HONGMEN.slug}`,
    relatedLabel: "{{秦|しん}}の{{滅亡|めつぼう}}・{{鴻門の会|こうもんのかい}}を年表で読む",
    personHref: HREF_LIUBANG,
    personLabel: "{{劉邦|りゅうほう}}の{{生涯|しょうがい}}を読む",
    portrait: { name: "{{劉邦|りゅうほう}}", ...IMG_LIUBANG },
  },
  {
    no: 4,
    id: "battle-4",
    year: "206 BC",
    name: "{{陳倉|ちんそう}}の戦い",
    location: "{{陝西省|せんせいしょう}}{{宝鶏市|ほうけいし}}",
    mapX: 266,
    mapY: 200,
    factions: [
      { side: "漢軍", people: "{{劉邦|りゅうほう}}・{{韓信|かんしん}}" },
      { side: "{{雍|よう}}王軍", people: "{{章邯|しょうかん}}" },
    ],
    body: "{{鴻門の会|こうもんのかい}}の後、辺境の{{漢中|かんちゅう}}に追いやられた{{劉邦|りゅうほう}}は、大将軍に{{抜擢|ばってき}}した{{韓信|かんしん}}の{{献策|けんさく}}により関中{{奪還|だっかん}}に動く。表向きは山中の{{桟道|さんどう}}を修復すると見せかけて敵の目を引きつけ、その裏で別働隊がひそかに{{陳倉|ちんそう}}の間道を{{踏破|とうは}}するという「{{明修桟道|めいしゅうさんどう}}、{{暗渡陳倉|あんとちんそう}}」の{{奇策|きさく}}により、関中を守っていた元{{秦|しん}}将{{章邯|しょうかん}}の軍を{{撃破|げきは}}した。これにより{{劉邦|りゅうほう}}は関中の{{地盤|じばん}}を取り{{戻|もど}}し、{{項羽|こうう}}との本格的な{{覇権|はけん}}争い「{{楚漢戦争|そかんせんそう}}」の幕が切って落とされることになる。",
    relatedHref: EV_HANFOUND && `/events/${EV_HANFOUND.slug}`,
    relatedLabel: "{{劉邦|りゅうほう}}の漢建国を年表で読む",
    personHref: HREF_LIUBANG,
    personLabel: "{{劉邦|りゅうほう}}の{{生涯|しょうがい}}を読む",
    portrait: { name: "{{劉邦|りゅうほう}}", ...IMG_LIUBANG },
  },
  {
    no: 5,
    id: "battle-5",
    year: "205 BC",
    name: "{{彭城|ほうじょう}}の戦い",
    location: "{{江蘇省|こうそしょう}}{{徐州市|じょしゅうし}}",
    mapX: 347,
    mapY: 198,
    factions: [
      { side: "{{楚軍|そぐん}}", people: "{{項羽|こうう}}" },
      { side: "漢連合軍", people: "{{劉邦|りゅうほう}}" },
    ],
    body: "{{項羽|こうう}}が{{斉|せい}}の反乱{{鎮圧|ちんあつ}}に出た{{隙|すき}}をつき、{{劉邦|りゅうほう}}は{{諸侯|しょこう}}を{{糾合|きゅうごう}}した56万ともいわれる大軍で{{楚|そ}}の都{{彭城|ほうじょう}}を{{陥落|かんらく}}させた。しかし急報を受けた{{項羽|こうう}}はわずか3万の{{精鋭|せいえい}}{{騎兵|きへい}}のみを率いて取って返すと、油断していた漢軍を明け方に{{奇襲|きしゅう}}し、たちまち{{総崩|そうくず}}れに追い{{込|こ}}んだ。{{逃|に}}げ{{惑|まど}}う漢兵の多くが{{睢水|すいすい}}に追い落とされて{{溺死|できし}}したと伝えられ、{{劉邦|りゅうほう}}自身もわずかな供回りとともに{{辛|つら}}くも{{脱出|だっしゅつ}}する有様であった。数の上では{{圧倒的|あっとうてき}}だった漢連合軍が、機動力に優れた{{項羽|こうう}}の{{精鋭|せいえい}}にあっけなく打ち破られた、{{楚漢戦争|そかんせんそう}}{{屈指|くっし}}の逆転劇である。",
    relatedHref: null,
    relatedLabel: null,
    personHref: HREF_XIANGYU,
    personLabel: "{{項羽|こうう}}の{{生涯|しょうがい}}を読む",
    portrait: { name: "{{項羽|こうう}}", ...IMG_XIANGYU },
  },
  {
    no: 6,
    id: "battle-6",
    year: "204 BC",
    name: "{{井陘|せいけい}}の戦い（{{背水|はいすい}}の{{陣|じん}}）",
    location: "河北省{{石家荘市|せっかそうし}}{{井陘県|せいけいけん}}付近",
    mapX: 315,
    mapY: 155,
    factions: [
      { side: "漢軍", people: "{{韓信|かんしん}}・{{張耳|ちょうじ}}" },
      { side: "{{趙軍|ちょうぐん}}", people: "{{陳余|ちんよ}}" },
    ],
    body: "{{劉邦|りゅうほう}}の別働隊を率いる{{韓信|かんしん}}は、{{寡兵|かへい}}で{{趙|ちょう}}の大軍を打ち破るため、あえて川を背にして{{陣|じん}}を{{敷|し}}くという兵法の定石に反する{{布陣|ふじん}}をとった。退路を断たれた漢兵は「進んで戦うほかに生きる道はない」という決死の{{覚悟|かくご}}で奮戦し、その間に別動隊が{{手薄|てうす}}になった{{趙|ちょう}}の本営を{{急襲|きゅうしゅう}}して漢の旗を立てたことで{{趙軍|ちょうぐん}}は{{総崩|そうくず}}れとなった。この戦法は後世「{{背水の陣|はいすいのじん}}」の故事成語として広く知られ、{{韓信|かんしん}}の用兵はこの戦い以後「{{国士無双|こくしむそう}}」と評されるようになる。",
    relatedHref: null,
    relatedLabel: null,
    personHref: null,
    personLabel: null,
    portrait: { name: "{{韓信|かんしん}}" },
  },
  {
    no: 7,
    id: "battle-7",
    year: "204–203 BC",
    name: "{{滎陽|けいよう}}・{{成皋|せいこう}}の{{攻防|こうぼう}}",
    location: "河南省{{滎陽市|けいようし}}付近",
    mapX: 317,
    mapY: 193,
    factions: [
      { side: "漢軍", people: "{{劉邦|りゅうほう}}・{{紀信|きしん}}" },
      { side: "{{楚軍|そぐん}}", people: "{{項羽|こうう}}" },
    ],
    body: "{{彭城|ほうじょう}}での大敗後、{{劉邦|りゅうほう}}は{{滎陽|けいよう}}・{{成皋|せいこう}}の要害に{{拠|よ}}って{{項羽|こうう}}と長期にわたる持久戦を{{繰|く}}り広げた。一時は完全に包囲され絶体絶命に{{陥|おちい}}るが、忠臣{{紀信|きしん}}が{{劉邦|りゅうほう}}の身代わりとなって{{偽|いつわ}}って{{降伏|こうふく}}し、その{{隙|すき}}に{{劉邦|りゅうほう}}本人が西門から{{脱出|だっしゅつ}}するという捨て身の策で危機を{{脱|だっ}}したと伝えられる。にらみ合いの末、両軍はいったん{{鴻溝|こうこう}}を境に天下を東西に分ける和議を結ぶが、{{劉邦|りゅうほう}}は{{張良|ちょうりょう}}・{{陳平|ちんぺい}}の進言を容れてこの盟約を破り、{{撤退|てったい}}する{{項羽|こうう}}の背後を{{追撃|ついげき}}する道を選ぶ。",
    relatedHref: EV_HANFOUND && `/events/${EV_HANFOUND.slug}`,
    relatedLabel: "{{劉邦|りゅうほう}}の漢建国を年表で読む",
    personHref: HREF_LIUBANG,
    personLabel: "{{劉邦|りゅうほう}}の{{生涯|しょうがい}}を読む",
    portrait: { name: "{{劉邦|りゅうほう}}", ...IMG_LIUBANG },
  },
  {
    no: 8,
    id: "battle-8",
    year: "202 BC",
    name: "{{垓下|がいか}}の戦い",
    location: "{{安徽|あんき}}省宿州市{{固鎮県|こちんけん}}付近",
    mapX: 360,
    mapY: 213,
    factions: [
      { side: "漢連合軍", people: "{{韓信|かんしん}}・{{劉邦|りゅうほう}}・{{彭越|ほうえつ}}・{{英布|えいふ}}" },
      { side: "{{楚軍|そぐん}}", people: "{{項羽|こうう}}" },
    ],
    body: "{{韓信|かんしん}}を総指揮とする漢の大軍が{{垓下|がいか}}で{{疲弊|ひへい}}した{{項羽|こうう}}の軍を{{幾重|いくえ}}にも包囲した。夜、四方の漢軍の{{陣|じん}}から{{項羽|こうう}}の故郷である{{楚|そ}}の歌が聞こえてくると、{{項羽|こうう}}は「漢は{{既|すで}}に{{楚|そ}}をことごとく手に入れたのか」と{{嘆|たん}}じたと伝えられ、この「{{四面楚歌|しめんそか}}」に{{楚兵|そへい}}の戦意は完全に失われた。{{項羽|こうう}}は{{愛姫|あいき}}{{虞美人|ぐびじん}}との今生の別れを詩に{{詠|よ}}んだ後、わずかな{{騎兵|きへい}}とともに包囲を{{突破|とっぱ}}するが、追い{{詰|つ}}められた{{烏江|うこう}}のほとりでついに自害した。{{項羽|こうう}}の死により{{楚漢戦争|そかんせんそう}}は終結し、勝者となった{{劉邦|りゅうほう}}は{{皇帝|こうてい}}に{{即位|そくい}}して漢王朝を開くことになる。",
    relatedHref: EV_HANFOUND && `/events/${EV_HANFOUND.slug}`,
    relatedLabel: "{{劉邦|りゅうほう}}、漢を建国を年表で読む",
    personHref: HREF_XIANGYU,
    personLabel: "{{項羽|こうう}}の{{生涯|しょうがい}}を読む",
    portrait: { name: "{{項羽|こうう}}", ...IMG_XIANGYU },
  },
];

function BattleMap() {
  return (
    <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        実際の海岸線をもとにした位置関係図です。<ruby>朱色<rt>しゅいろ</rt></ruby>の番号は下の各合戦の位置を示しています。
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
            style={{ fontFamily: "var(--font-serif), serif", fontSize: 12, fontWeight: 700, fill: COLORS.inkSoft, opacity: 0.55 }}
          >
            {stripRuby(r.label)}
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

export default function ChuHanBattlesPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          <ruby>楚漢戦争<rt>そかんせんそう</rt></ruby> 合戦マップ
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          209年の<ruby>陳勝<rt>ちんしょう</rt></ruby>・<ruby>呉広<rt>ごこう</rt></ruby>の乱に始まり、202年の<ruby>垓下<rt>がいか</rt></ruby>の戦いで幕を閉じるまで——<ruby>秦<rt>しん</rt></ruby>の<ruby>滅亡<rt>めつぼう</rt></ruby>から漢の統一までのわずか数年間は、
          <ruby>項羽<rt>こうう</rt></ruby>と<ruby>劉邦<rt>りゅうほう</rt></ruby>という対照的な二人の<ruby>英雄<rt>えいゆう</rt></ruby>が天下を<ruby>賭<rt>か</rt></ruby>けて戦った、中国史でも<ruby>屈指<rt>くっし</rt></ruby>の劇的な時代です。
          このページでは、<ruby>鉅鹿<rt>きょろく</rt></ruby>・<ruby>鴻門<rt>こうもん</rt></ruby>・<ruby>彭城<rt>ほうじょう</rt></ruby>・<ruby>垓下<rt>がいか</rt></ruby>など8つの主要な合戦と、そこで<ruby>活躍<rt>かつやく</rt></ruby>した武将たちにスポットを当てて<ruby>詳<rt>くわ</rt></ruby>しく<ruby>紹介<rt>しょうかい</rt></ruby>します。
        </p>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 12 }}>
            時代の流れ
          </h2>
          <div className="flex flex-col gap-2">
            {FLOW.map((f, i) => {
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
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 12 }}>
            合戦地図
          </h2>
          <BattleMap />
        </section>

        <section>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 16 }}>
            主要な戦い
          </h2>
          <div className="flex flex-col gap-5">
            {BATTLES.map((b) => (
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
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            <ruby>楚漢戦争<rt>そかんせんそう</rt></ruby>の前史にあたる春秋・戦国時代、後日談にあたる三国時代の合戦については、
            あわせて下記の特集ページもご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/qin" variant="solid"><ruby>秦<rt>しん</rt></ruby>の出来事一覧を見る</NavButton>
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
