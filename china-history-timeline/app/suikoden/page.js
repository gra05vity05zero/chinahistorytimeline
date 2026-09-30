import { ERAS, stripRuby, getEraFigures, personSlug, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection, HeritageThumb } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "水滸伝とは？梁山泊・108人の好漢・史実の宋江をわかりやすく解説";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "中国四大名著の一つ『水滸伝』を、あらすじ・時代背景・主要人物・百八星の仕組みから解説。舞台となった梁山泊の実像を地図でたどり、史実の宋江の乱と物語の違い、成り立ちと版本、日本での受容や北方謙三『水滸伝』の読む順番も紹介します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/suikoden" },
  openGraph: buildOpenGraph({
    title: fullTitle,
    description,
    path: "/suikoden",
    type: "article",
    image: { title: "水滸伝とは？", subtitle: "梁山泊と108人の好漢", kicker: "北宋", seal: "梁" },
  }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const HERO_COLOR = "#B5452F";
const COURT_COLOR = "#4F6FA0";

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

const HREF_WANG_ANSHI = findEventHref("northernsong", "王安石");
const HREF_JIN = findEventHref("northernsong", "金の建国");
const HREF_JINGKANG = findEventHref("northernsong", "靖康の変");

const HUIZONG = findFigure("徽宗");

// 物語の好漢の画像は、清代に刊行された金聖嘆本（『第五才子書水滸伝』）の挿絵を用いる
const JSS_CREDIT = "清代（1883年）刊本『第五才子書水滸伝』挿絵 / Wikimedia Commons（パブリックドメイン）";
const jssImage = (name) => ({
  imageUrl: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(`${name}（第五才子書水滸傳）.jpg`)}`,
  credit: JSS_CREDIT,
});

// 地図の投影。/sanguo-battlesなどと同じ線形近似（経緯度→SVG座標）
const project = (lon, lat) => [340 + 7.495 * (lon - 116.4), 145 - 9.343 * (lat - 39.9)];

// 中国本土の輪郭（/sanguo-battlesと同じ海岸線データ）。華北〜江南部分だけをviewBoxで切り出して拡大表示する
const CHINA_OUTLINE =
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";

// あらすじ（100回本・120回本の流れに沿った4段階）
const STORY = [
  {
    no: 1,
    title: "好漢たちが集まる",
    range: "第1〜40回ごろ",
    body: "朝廷の重臣・洪太尉が封印を解いたことで、108の魔星が世に放たれる場面から物語は始まる。やがて蹴鞠の腕ひとつで出世した{{高俅|こうきゅう}}が軍の最高位に就き、その横暴によって禁軍の槍棒師範{{林冲|りんちゅう}}は無実の罪で流罪にされる。{{晁蓋|ちょうがい}}らは奸臣への誕生祝いの財宝「{{生辰綱|せいしんこう}}」を奪い、役人の{{宋江|そうこう}}は人を殺めて逃亡の身となる。それぞれの事情で世を追われた者たちが、次々と梁山泊へ向かう。",
  },
  {
    no: 2,
    title: "梁山泊の繁栄",
    range: "第41〜71回ごろ",
    body: "宋江が梁山泊に迎えられると、各地の官軍や豪族との戦いを重ねるたびに好漢の数は増え、梁山泊は一大勢力に成長する。頭領の晁蓋が戦いで命を落とした後、宋江が跡を継ぎ、名士{{盧俊義|ろしゅんぎ}}も仲間に加わる。第71回で天から降った石碑に108人の名と星が刻まれていたことが明かされ、「替天行道（天に替わりて道を行う）」の旗のもと、108人の席次が定まる。",
  },
  {
    no: 3,
    title: "招安（朝廷への帰順）",
    range: "第72〜90回ごろ",
    body: "宋江はもともと朝廷への忠義を捨てておらず、罪を許されて官軍となる「{{招安|しょうあん}}」を望み続けていた。高俅ら奸臣の妨害を退けたのち、ついに梁山泊は招安を受け入れ、108人は朝廷の軍として北方の遼と戦う。120回本では、さらに{{田虎|でんこ}}・{{王慶|おうけい}}という反乱勢力の討伐が加わる。",
  },
  {
    no: 4,
    title: "方臘討伐と悲劇の結末",
    range: "第90回ごろ〜最終回",
    body: "最後の戦いは江南で反乱を起こした{{方臘|ほうろう}}の討伐である。激戦の末に方臘は平定されるが、好漢たちは次々と戦死・病死し、都へ凱旋できたのは3分の1ほどにすぎなかった。生き残った宋江も奸臣に毒酒を賜って世を去り、義兄弟の{{李逵|りき}}も道連れとなる。梁山泊の物語は、忠義を尽くした者たちが報われないまま幕を閉じる。",
  },
];

// 時代の流れ。hrefは/eventsへの直接リンク、anchorは本ページ内のセクションへのリンク
const FLOW = [
  { year: "1069", title: "{{王安石|おうあんせき}}の新法", note: "改革をめぐる新法・旧法の党争が長く続き、朝廷は分裂していく。", href: HREF_WANG_ANSHI },
  { year: "1100", title: "{{徽宗|きそう}}の即位", note: "芸術を愛した皇帝のもとで、{{蔡京|さいけい}}・{{童貫|どうかん}}らが権勢をふるう。", anchor: "background" },
  { year: "1115", title: "金の建国", note: "女真族の金が遼から自立。宋は金と結んで遼を挟み撃ちにしようとする。", href: HREF_JIN },
  { year: "1119頃", title: "{{宋江|そうこう}}の乱", note: "宋江ら36人が山東・淮南一帯を荒らし回る。", anchor: "history-vs-legend" },
  { year: "1120", title: "{{方臘|ほうろう}}の乱", note: "{{花石綱|かせきこう}}の徴発に苦しむ江南で方臘が蜂起。翌年、{{童貫|どうかん}}の軍に鎮圧される。", anchor: "history-vs-legend" },
  { year: "1121", title: "宋江の投降", note: "{{海州|かいしゅう}}の知州{{張叔夜|ちょうしゅくや}}に敗れ、宋江は降伏したと『宋史』は記す。", anchor: "history-vs-legend" },
  { year: "1127", title: "{{靖康|せいこう}}の変・北宋滅亡", note: "金軍が都{{開封|かいほう}}を陥とし、徽宗・欽宗が北方へ連れ去られる。", href: HREF_JINGKANG },
  { year: "元代", title: "『{{大宋宣和遺事|だいそうせんないじ}}』", note: "宋江と36人の物語が書物にまとめられ、元雑劇でも好漢たちが演じられる。", anchor: "versions" },
  { year: "明代", title: "『水滸伝』の成立", note: "{{施耐庵|したいあん}}・{{羅貫中|らかんちゅう}}の作と伝わる長編小説にまとまる。", anchor: "versions" },
];

// 地図上の地点。番号は物語に登場する順
const PLACES = [
  { no: 1, name: "{{梁山泊|りょうざんぱく}}", label: "梁山泊", lon: 116.1, lat: 35.8, labelSide: "right", note: "好漢たちの本拠地。現在の山東省{{梁山県|りょうざんけん}}付近。宋江が役人として勤めた{{鄆城|うんじょう}}県もすぐ南にある。" },
  { no: 2, name: "{{景陽岡|けいようこう}}（{{陽穀|ようこく}}）", label: "景陽岡", lon: 115.78, lat: 36.12, labelSide: "right", note: "{{武松|ぶしょう}}が素手で人食い虎を退治した峠。" },
  { no: 3, name: "{{大名府|たいめいふ}}", label: "大名府", lon: 115.15, lat: 36.28, labelSide: "left", note: "盧俊義の故郷。梁山泊軍が攻め込み、盧俊義を救い出す。" },
  { no: 4, name: "{{江州|こうしゅう}}", label: "江州", lon: 116.0, lat: 29.7, labelSide: "left", note: "流罪となった宋江が反逆の詩を書き、処刑されかける町（現在の九江）。" },
  { no: 5, name: "{{睦州|ぼくしゅう}}", label: "睦州", lon: 119.0, lat: 29.6, labelSide: "right", note: "方臘が蜂起した地（現在の浙江省淳安・建徳一帯）。物語でも最後の決戦の場となる。" },
  { no: 6, name: "{{海州|かいしゅう}}", label: "海州", lon: 119.2, lat: 34.6, labelSide: "right", note: "史実の宋江が張叔夜に敗れて降伏した地（現在の連雲港）。" },
];

const PEOPLE = [
  {
    side: "梁山泊の好漢",
    color: HERO_COLOR,
    members: [
      { name: "{{宋江|そうこう}}", role: "第1位・天魁星「{{呼保義|こほうぎ}}」", note: "鄆城県の小役人。困った人に惜しみなく施すことから「{{及時雨|きゅうじう}}（恵みの雨）」と慕われた。晁蓋の死後、梁山泊の首領となり、招安を実現させる。", ...jssImage("宋江") },
      { name: "{{呉用|ごよう}}", role: "第3位・天機星「{{智多星|ちたせい}}」", note: "村の塾の教師だった梁山泊の軍師。生辰綱強奪の計略を立て、以後も数々の作戦を指揮する。", ...jssImage("吳用") },
      { name: "{{林冲|りんちゅう}}", role: "第6位・天雄星「{{豹子頭|ひょうしとう}}」", note: "80万禁軍の槍棒師範。高俅の養子に妻を狙われ、罠にかけられて流罪となり、梁山泊へ落ちのびる。", ...jssImage("林冲") },
      { name: "{{魯智深|ろちしん}}", role: "第13位・天孤星「{{花和尚|かおしょう}}」", note: "もとは軍官で、弱い者を助けるために人を殺めて出家した豪傑僧。全身に花の刺青がある。", ...jssImage("魯智深") },
      { name: "{{武松|ぶしょう}}", role: "第14位・天傷星「{{行者|ぎょうじゃ}}」", note: "景陽岡で素手で虎を打ち殺した英雄。兄を毒殺した{{潘金蓮|はんきんれん}}と{{西門慶|せいもんけい}}への仇討ちでも知られる。", ...jssImage("武松") },
      { name: "{{楊志|ようし}}", role: "第17位・天暗星「{{青面獣|せいめんじゅう}}」", note: "顔に青いあざのある武官。楊家将の{{楊業|ようぎょう}}の子孫という設定で、生辰綱の護送に失敗して梁山泊へ加わる。", ...jssImage("楊志") },
      { name: "{{李逵|りき}}", role: "第22位・天殺星「{{黒旋風|こくせんぷう}}」", note: "二丁の板斧をふるう乱暴者だが、宋江を兄と慕って一途に従う。物語随一の人気者。", ...jssImage("李逵") },
      { name: "{{燕青|えんせい}}", role: "第36位・天巧星「{{浪子|ろうし}}」", note: "盧俊義に仕える美青年。相撲・弓・楽器に通じた多芸の人で、招安の実現にも一役買う。", ...jssImage("燕青") },
    ],
  },
  {
    side: "朝廷・史実の人物",
    color: COURT_COLOR,
    members: [
      { name: "{{徽宗|きそう}}", role: "北宋第8代皇帝", note: "書画の天才だったが政治を顧みず、奸臣たちに国政を委ねた。物語では好漢の忠義を理解しながらも、奸臣に欺かれる皇帝として描かれる。", ...HUIZONG },
      { name: "{{高俅|こうきゅう}}", role: "殿帥府太尉（物語の最大の悪役）", note: "徽宗が即位する前に蹴鞠の腕を見込まれて取り立てられた人物。史実でも軍の高官に上ったが、物語では好漢たちを追い詰める奸臣の筆頭とされた。" },
      { name: "{{張叔夜|ちょうしゅくや}}", role: "海州の知州", note: "『宋史』によれば、海州に侵入した宋江の船団を焼き払って降伏させた。のちに靖康の変で金軍と戦い、捕らえられて北へ送られる途中で世を去った。" },
      { name: "{{方臘|ほうろう}}", role: "江南の反乱指導者", note: "1120年に睦州で蜂起し、一時は江南の広い範囲を支配した。翌年、童貫の率いる官軍に捕らえられて処刑された。" },
    ],
  },
];

// 百八星の席次上位10人（70回本・100回本共通）
const TOP_TEN = [
  { rank: 1, star: "天魁星", name: "{{宋江|そうこう}}", nickname: "呼保義" },
  { rank: 2, star: "天罡星", name: "{{盧俊義|ろしゅんぎ}}", nickname: "玉麒麟" },
  { rank: 3, star: "天機星", name: "{{呉用|ごよう}}", nickname: "智多星" },
  { rank: 4, star: "天閑星", name: "{{公孫勝|こうそんしょう}}", nickname: "入雲龍" },
  { rank: 5, star: "天勇星", name: "{{関勝|かんしょう}}", nickname: "大刀" },
  { rank: 6, star: "天雄星", name: "{{林冲|りんちゅう}}", nickname: "豹子頭" },
  { rank: 7, star: "天猛星", name: "{{秦明|しんめい}}", nickname: "霹靂火" },
  { rank: 8, star: "天威星", name: "{{呼延灼|こえんしゃく}}", nickname: "双鞭" },
  { rank: 9, star: "天英星", name: "{{花栄|かえい}}", nickname: "小李広" },
  { rank: 10, star: "天貴星", name: "{{柴進|さいしん}}", nickname: "小旋風" },
];

// 『宋史』などの史実と、小説『水滸伝』との違い
const COMPARE_ROWS = [
  { label: "人数", history: "「宋江ら36人」と記録される。", legend: "108人の好漢と、数万の兵を擁する大勢力。" },
  { label: "本拠地", history: "山東から淮南にかけて各地を転戦した流賊で、梁山泊を根拠地とした記録は乏しい。", legend: "{{梁山泊|りょうざんぱく}}に堅固な山寨を築き、水軍で守りを固める。" },
  { label: "結末", history: "1121年、海州で{{張叔夜|ちょうしゅくや}}に敗れて投降。その後は記録が少なく、はっきりしない。", legend: "招安を受けて官軍となり、遼・方臘と戦ったのち、奸臣に毒殺される。" },
  { label: "方臘討伐", history: "投降した宋江が方臘討伐に加わったとする記録と、それと矛盾する記録があり、説が分かれる。", legend: "梁山泊軍の最後の大戦として詳しく描かれ、好漢の多くがここで命を落とす。" },
  { label: "高俅", history: "徽宗に重用された軍の高官。悪名高い「六賊」には数えられていない。", legend: "好漢たちを苦しめる奸臣の筆頭で、物語最大の悪役。" },
];

const VERSIONS = [
  { name: "100回本", note: "明代の刊本。招安・遼との戦い・方臘討伐を経て、宋江の死で終わる。現存する版本の中で古い形を伝えるとされる。" },
  { name: "120回本", note: "明末の1614年ごろに刊行された『忠義水滸全書』。100回本に、{{田虎|でんこ}}・{{王慶|おうけい}}の討伐の20回分を加えた完全版。" },
  { name: "70回本", note: "明末清初の批評家{{金聖嘆|きんせいたん}}が、108人の席次が定まる第71回までで物語を打ち切り、{{盧俊義|ろしゅんぎ}}の悪夢で締めくくった版。清代に最も広く読まれた。" },
];

const JAPAN = [
  {
    era: "江戸時代",
    title: "翻訳と読本（よみほん）",
    body: "18世紀半ばに『通俗忠義水滸伝』として翻訳が刊行され、庶民にも広く読まれるようになった。{{曲亭馬琴|きょくていばきん}}は{{葛飾北斎|かつしかほくさい}}の挿絵による『新編水滸画伝』の翻訳を手がけ、代表作『南総里見八犬伝』の構想にも水滸伝の影響が色濃く見られる。",
  },
  {
    era: "江戸時代",
    title: "{{歌川国芳|うたがわくによし}}の武者絵",
    body: "1827年ごろから刊行された国芳の連作「通俗水滸伝豪傑百八人之一個」は、全身に刺青を施した豪傑たちの躍動的な姿で大評判となり、国芳を武者絵の第一人者に押し上げた。江戸の刺青の流行にも影響を与えたといわれる。",
  },
  {
    era: "近代以降",
    title: "小説・漫画・ドラマ",
    body: "{{吉川英治|よしかわえいじ}}の『新・水滸伝』（作者の死により未完）、{{柴田錬三郎|しばたれんざぶろう}}による翻案、{{横山光輝|よこやまみつてる}}の漫画などを通じて、水滸伝は日本でも繰り返し語り直されてきた。",
  },
];

// 北方謙三の「大水滸伝」シリーズ（集英社）
const BOOKS = [
  {
    no: 1,
    title: "『水滸伝』",
    meta: "北方謙三 / 全19巻（集英社）",
    body: "原典の骨格を借りながら、登場人物の設定や物語の展開を大胆に組み替えた長編。梁山泊を、腐敗した宋に挑む組織として描き直している。",
  },
  {
    no: 2,
    title: "『楊令伝』",
    meta: "北方謙三 / 全15巻（集英社）",
    body: "『水滸伝』の続編で、北方版オリジナルの人物・{{楊令|ようれい}}が主人公。梁山泊の志を継ぐ者たちの戦いを、北宋の滅亡と重ねて描く。",
  },
  {
    no: 3,
    title: "『岳飛伝』",
    meta: "北方謙三 / 全17巻（集英社）",
    body: "シリーズの完結編。南宋の名将{{岳飛|がくひ}}を軸に、梁山泊の流れをくむ者たちの行く末が描かれる。",
  },
];

const FAQ = [
  {
    q: "水滸伝は実話ですか？",
    a: "北宋末に宋江という人物が36人の仲間とともに反乱を起こし、官軍に降伏したことは『宋史』に記録された史実です。ただし108人の好漢の多くや、梁山泊を拠点とした活躍、招安後の遼・方臘との戦いといった物語の大部分は、講談や芝居を通じて膨らんだ創作です。",
  },
  {
    q: "梁山泊は実在した場所ですか？",
    a: "実在しました。現在の山東省梁山県にある梁山のふもとに、黄河の氾濫によって広がった大きな湖沼があり、それが梁山泊です。その後、黄河の流路が変わったことで干上がり、今はその名残が近くの東平湖などに残っています。",
  },
  {
    q: "「梁山泊」が「豪傑や野心家の集まる場所」という意味で使われるのはなぜですか？",
    a: "水滸伝で、世に容れられない優れた人物たちが梁山泊に集まったことにちなみます。日本語では、才能ある人々が集まって腕を競い合う場所のたとえとして使われます。",
  },
  {
    q: "楊志と楊家将には関係がありますか？",
    a: "水滸伝の中で、楊志は楊家将の祖である楊業（楊令公）の子孫という設定になっています。北宋の武門の名家の末裔が、没落して盗賊の仲間入りをするという点に、物語の皮肉が込められています。",
  },
  {
    q: "70回本・100回本・120回本はどれを読めばいいですか？",
    a: "物語の結末まで読みたいなら、招安から方臘討伐、宋江の死までを収めた100回本か120回本がおすすめです。70回本は108人が揃う最高潮の場面で終わるため、テンポよく読める一方、好漢たちのその後は描かれません。",
  },
];

function SuikodenMap() {
  const [kx, ky] = project(114.31, 34.8);
  const [lx, ly] = project(116.1, 35.8);
  return (
    <div style={{ ...card, padding: 16, marginBottom: 16 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        実際の海岸線をもとにした位置関係図です。朱色の番号は下の各地点、水色の範囲は梁山泊のおおよその位置、金色の丸は宋の都・開封です。
      </p>
      <svg viewBox="316 158 64 96" style={{ width: "100%", maxHeight: 520, display: "block", margin: "0 auto" }} role="img" aria-label="水滸伝ゆかりの地の地図">
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="0.3" strokeLinejoin="round" />
        <ellipse cx={lx} cy={ly} rx="2.6" ry="1.8" fill={COURT_COLOR} fillOpacity="0.28" stroke={COURT_COLOR} strokeWidth="0.25" strokeDasharray="0.8 0.5" />

        <circle cx={kx} cy={ky} r="0.9" fill={COLORS.gold} stroke={COLORS.paper} strokeWidth="0.3" />
        <text x={kx - 1.6} y={ky + 0.6} textAnchor="end" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 1.7, fill: COLORS.inkSoft }}>
          開封（宋の都）
        </text>

        {PLACES.map((p) => {
          const [x, y] = project(p.lon, p.lat);
          const right = p.labelSide === "right";
          return (
            <a key={p.no} href={`#place-${p.no}`}>
              <circle cx={x} cy={y} r="1.35" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="0.3" />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="central" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 1.6, fontWeight: 700, fill: "#FBF8F0" }}>
                {p.no}
              </text>
              <text
                x={right ? x + 2 : x - 2}
                y={y + 0.6}
                textAnchor={right ? "start" : "end"}
                style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 1.7, fontWeight: 700, fill: COLORS.ink }}
              >
                {p.label}
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
      <HeritageThumb imageUrl={imageUrl} name={name} type="figure" objectPosition="top" />
    </div>
  );
}

function NumberBadge({ children, size = 22, outline = false }) {
  return (
    <span
      className="flex items-center justify-center shrink-0"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: outline ? "transparent" : COLORS.vermilion,
        border: outline ? `1.5px solid ${COLORS.vermilion}` : "none",
        color: outline ? COLORS.vermilion : "#FBF8F0",
        fontFamily: "'Noto Serif SC', serif",
        fontSize: size > 24 ? 13 : 11,
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );
}

export default function SuikodenPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    about: ["水滸伝", "梁山泊", "宋江", "北宋", "四大名著"],
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/suikoden` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "水滸伝とは", item: `${SITE_URL}/suikoden` },
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
          水滸伝とは？
        </h1>
        <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, color: COLORS.gold, marginBottom: 14 }}>
          梁山泊に集う108人の好漢と、史実の宋江
        </p>
        <p style={{ ...bodyText, fontSize: 13.5, marginBottom: 28 }}>
          <RubyText text="『{{水滸伝|すいこでん}}』は、北宋末の徽宗の時代を舞台に、腐敗した役人や奸臣に追われた108人の好漢たちが{{梁山泊|りょうざんぱく}}に集い、「替天行道（天に替わりて道を行う）」を掲げて戦う長編小説です。『三国志演義』『西遊記』『紅楼夢』と並ぶ中国の四大名著の一つに数えられます。" />
          物語のもとになったのは、北宋末に実際に起きた宋江の反乱でした。このページでは、あらすじや人物の紹介に加えて、梁山泊の実像や史実と物語の違いまで、水滸伝の世界をひととおりたどります。
        </p>

        <section style={{ marginBottom: 36 }} id="story">
          <h2 style={sectionHeading}>あらすじ</h2>
          <div className="flex flex-col gap-3">
            {STORY.map((s) => (
              <div key={s.no} className="flex gap-3 p-4" style={card}>
                <NumberBadge size={28} outline>{s.no}</NumberBadge>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}>{s.title}</span>
                    <span style={{ fontSize: 11, color: COLORS.gold }}>{s.range}</span>
                  </div>
                  <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                    <RubyText text={s.body} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="background">
          <h2 style={sectionHeading}>時代背景：徽宗の治世</h2>
          <div className="flex flex-col gap-3" style={bodyText}>
            <p>
              <RubyText text="1100年に即位した{{徽宗|きそう}}は、「痩金体」という独自の書体を生み出し、花鳥画の名手としても知られる芸術家肌の皇帝でした。その一方で政治への関心は薄く、宰相の{{蔡京|さいけい}}や宦官の{{童貫|どうかん}}らが実権を握って、朝廷の腐敗が進みます。" />
            </p>
            <p>
              <RubyText text="徽宗が庭園造りのために江南から珍しい石や木を都へ運ばせた「{{花石綱|かせきこう}}」は、民衆に重い負担を強いました。各地で反乱や盗賊が相次ぎ、1120年には江南で{{方臘|ほうろう}}の乱が起こります。宋江の反乱も、こうした社会不安のなかで起きた出来事の一つでした。水滸伝が「悪いのは皇帝ではなく、皇帝を欺く奸臣だ」という立場で書かれているのも、この時代の記憶を反映しています。" />
            </p>
            <p>
              <RubyText text="やがて宋は北方で台頭した金と結んで遼を攻めますが、その金に攻め込まれ、1127年の{{靖康|せいこう}}の変で北宋は滅亡します。水滸伝の好漢たちが活躍したのは、北宋が滅びに向かう最後の十数年間でした。" />
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 32 }} id="flow">
          <h2 style={sectionHeading}>年表：水滸伝の時代と成立</h2>
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

        <section style={{ marginBottom: 36 }} id="liangshanpo">
          <h2 style={sectionHeading}>梁山泊はどこにあった？</h2>
          <div className="flex flex-col gap-3" style={{ ...bodyText, marginBottom: 20 }}>
            <p>
              <RubyText text="{{梁山泊|りょうざんぱく}}は架空の場所ではなく、現在の山東省{{梁山県|りょうざんけん}}にある{{梁山|りょうざん}}という小さな山のふもとに広がっていた湖沼です。「泊」は湖や沼を意味します。この一帯にはもともと古代から「{{大野沢|だいやたく}}（{{鉅野沢|きょやたく}}）」と呼ばれる沼沢地があり、五代から北宋にかけて黄河がたびたび決壊して水が流れ込んだことで、大きな湖に広がりました。" />
            </p>
            <p>
              <RubyText text="入り組んだ水路と葦の茂みに囲まれた梁山泊は、官軍が攻めにくく、北宋の時代には実際に盗賊の隠れ家になることがありました。水滸伝で「八百里の梁山泊」と語られる広大な水の要塞は、こうした土地の記憶をもとに誇張されたものです。" />
            </p>
            <p>
              <RubyText text="その後、黄河の流路が南へ移ったことで水が引き、湖は次第に干上がっていきました。現在の梁山は水滸伝の聖地として整備され、山上には物語にちなんだ忠義堂などが再現されています。近くの{{東平湖|とうへいこ}}は、かつての広大な水域の名残の一つとされます。なお日本語では、水滸伝にちなんで「優れた人物や野心家が集まる場所」のたとえとしても「梁山泊」という言葉が使われます。" />
            </p>
          </div>

          <SuikodenMap />
          <div className="flex flex-col gap-2">
            {PLACES.map((p) => (
              <div key={p.no} id={`place-${p.no}`} className="flex items-baseline gap-3 px-4 py-2.5" style={{ ...card, scrollMarginTop: 16 }}>
                <NumberBadge>{p.no}</NumberBadge>
                <div className="flex-1 min-w-0">
                  <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={p.name} />
                  </span>
                  <span style={{ fontSize: 12, color: COLORS.inkSoft, marginLeft: 8 }}>
                    <RubyText text={p.note} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="people">
          <h2 style={sectionHeading}>主要人物</h2>
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
                        <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>
                          <RubyText text={m.role} />
                        </div>
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
          <p style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 10 }}>
            好漢の肖像: {JSS_CREDIT}。徽宗: {HUIZONG.credit}
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="108-stars">
          <h2 style={sectionHeading}>百八星の仕組み</h2>
          <div className="flex flex-col gap-3" style={{ ...bodyText, marginBottom: 14 }}>
            <p>
              水滸伝の108人は、天に輝く108の星の生まれ変わりとされています。上位の36人は「天罡星（てんこうせい）」、残る72人は「地煞星（ちさつせい）」と呼ばれ、それぞれに「天魁星」「地魁星」といった固有の星の名が割り当てられています。
            </p>
            <p>
              第71回、梁山泊で天を祀る儀式を行うと、天から石碑が降ってきます。そこには108人の名と星、そして席次が刻まれており、これによって梁山泊の序列が天命として定まりました。好漢たちには「及時雨」「豹子頭」のようなあだ名（綽号）もそれぞれにつけられており、人物の特徴を一言で表しています。
            </p>
          </div>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, minWidth: 360 }}>
              <caption style={{ captionSide: "top", textAlign: "left", padding: "10px 10px 4px", fontFamily: "'Noto Serif SC', serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink }}>
                席次上位10人
              </caption>
              <thead>
                <tr>
                  {["席次", "星", "名前", "あだ名"].map((h) => (
                    <th key={h} style={{ padding: "8px 10px", borderBottom: `2px solid ${COLORS.vermilion}`, textAlign: "left", fontFamily: "'Noto Serif SC', serif", fontSize: 12, color: COLORS.gold }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TOP_TEN.map((r) => (
                  <tr key={r.rank}>
                    <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.inkSoft, fontFamily: "'Noto Serif SC', serif" }}>{r.rank}</td>
                    <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.inkSoft }}>{r.star}</td>
                    <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.ink, fontWeight: 700 }}>
                      <RubyText text={r.name} />
                    </td>
                    <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.ink }}>{r.nickname}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="history-vs-legend">
          <h2 style={sectionHeading}>史実の宋江と物語の違い</h2>
          <div className="flex flex-col gap-3" style={{ ...bodyText, marginBottom: 14 }}>
            <p>
              <RubyText text="正史『宋史』によれば、宣和年間（1119〜1125年）に宋江は36人の仲間とともに反乱を起こし、山東から淮南にかけての各地を荒らし回りました。官軍も手を焼くほどの勢いでしたが、1121年、{{海州|かいしゅう}}に現れたところを知州の{{張叔夜|ちょうしゅくや}}に待ち伏せされ、船を焼かれて降伏したと記されています。" />
            </p>
            <p>
              <RubyText text="降伏した宋江がその後どうなったかは、はっきりしません。同じ時期に起きた{{方臘|ほうろう}}の乱の討伐に加わったとする記録がある一方で、方臘平定の後に宋江がなお盗賊として捕らえられたと読める史料もあり、研究者の間でも説が分かれています。こうした断片的な史実が、講談や芝居の中で108人の壮大な物語へと膨らんでいきました。" />
            </p>
          </div>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 460 }}>
              <thead>
                <tr>
                  <th style={{ width: 84, padding: "10px 8px", borderBottom: "1px solid #DCD3B8" }} />
                  <th style={{ padding: "10px 8px", borderBottom: `2px solid ${COLORS.ink}`, textAlign: "left", fontFamily: "'Noto Serif SC', serif", fontSize: 14, color: COLORS.ink }}>史実（『宋史』など）</th>
                  <th style={{ padding: "10px 8px", borderBottom: `2px solid ${COLORS.vermilion}`, textAlign: "left", fontFamily: "'Noto Serif SC', serif", fontSize: 14, color: COLORS.ink }}>小説『水滸伝』</th>
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

        <section style={{ marginBottom: 36 }} id="versions">
          <h2 style={sectionHeading}>水滸伝の成り立ちと版本</h2>
          <div className="flex flex-col gap-3" style={{ ...bodyText, marginBottom: 14 }}>
            <p>
              <RubyText text="宋江たちの物語は、南宋の頃から盛り場の講談で語られるようになりました。元代の『{{大宋宣和遺事|だいそうせんないじ}}』には、{{楊志|ようし}}が刀を売る場面や、{{晁蓋|ちょうがい}}らが生辰綱を奪う場面など、のちの水滸伝につながる筋書きがすでに見られ、元雑劇（元代の演劇）でも{{李逵|りき}}らを主人公にした演目が数多く作られました。" />
            </p>
            <p>
              <RubyText text="こうした語り物や芝居を集大成して、明代に長編小説『水滸伝』がまとめられます。作者は{{施耐庵|したいあん}}、あるいは施耐庵と{{羅貫中|らかんちゅう}}の合作と伝えられますが、確かなことはわかっていません。水滸伝には長さや結末の異なる複数の版本があり、主に次の3系統が知られています。" />
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {VERSIONS.map((v) => (
              <div key={v.name} className="px-4 py-3" style={{ ...card, borderLeft: `3px solid ${COLORS.gold}` }}>
                <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>{v.name}</div>
                <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 2 }}>
                  <RubyText text={v.note} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="japan">
          <h2 style={sectionHeading}>日本での水滸伝</h2>
          <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
            {JAPAN.map((j) => (
              <div key={j.title} className="p-4" style={card}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={j.title} />
                  </span>
                  <span style={{ fontSize: 11, color: COLORS.gold }}>{j.era}</span>
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={j.body} />
                </p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 16, fontWeight: 700, color: COLORS.ink, marginBottom: 8 }}>
            北方謙三の「大水滸伝」シリーズを読む順番
          </h3>
          <p style={{ ...bodyText, marginBottom: 12 }}>
            北方謙三は、水滸伝を独自の解釈で書き直した『水滸伝』に続けて、『楊令伝』『岳飛伝』を発表しました。3作は一つながりの物語で、刊行順に読むのがおすすめです。
          </p>
          <div className="flex flex-col gap-3">
            {BOOKS.map((book) => (
              <div key={book.no} className="flex gap-3 p-4" style={card}>
                <NumberBadge size={28} outline>{book.no}</NumberBadge>
                <div className="flex-1 min-w-0">
                  <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}>{book.title}</div>
                  <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>{book.meta}</div>
                  <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                    <RubyText text={book.body} />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 12 }}>
            楊志の祖先にあたる楊業たちの物語は、<a href="/yangjiajiang" style={linkStyle}>楊家将とは</a>のページで紹介しています。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="faq">
          <h2 style={sectionHeading}>水滸伝についてのよくある疑問</h2>
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
            北宋末の出来事や人物の詳しい解説は、年表・人物ページもあわせてご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/northernsong" variant="solid">北宋の出来事一覧を見る</NavButton>
            <NavButton href="/people/northernsong" variant="outline">北宋の人物一覧を見る</NavButton>
            <NavButton href="/four-great-novels" variant="outline">中国の四大名著とは</NavButton>
            <NavButton href="/yangjiajiang" variant="outline">楊家将とは</NavButton>
            <NavButton href="/novelists" variant="outline">中国史を題材にした日本人小説家一覧</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
