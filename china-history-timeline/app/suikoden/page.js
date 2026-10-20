import { ERAS, stripRuby, getEraFigures, personSlug, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection, A8AdBlock, HeritageThumb } from "@/components/Shared";
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

const sectionHeading = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 14 };
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
const JSS_CREDIT = "清代（1883年）刊本『第五才子書{{水滸伝|すいこでん}}』{{挿絵|さしえ}} / Wikimedia Commons（パブリックドメイン）";
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
    body: "{{朝廷|ちょうてい}}の重臣・{{洪太尉|こうたいい}}が{{封印|ふういん}}を解いたことで、108の{{魔星|ませい}}が世に放たれる場面から物語は始まる。やがて{{蹴鞠|けまり}}の{{腕|うで}}ひとつで出世した{{高俅|こうきゅう}}が軍の最高位に就き、その横暴によって禁軍の{{槍棒|そうぼう}}{{師範|しはん}}{{林冲|りんちゅう}}は無実の罪で流罪にされる。{{晁蓋|ちょうがい}}らは{{奸臣|かんしん}}への誕生祝いの財宝「{{生辰綱|せいしんこう}}」を{{奪|うば}}い、役人の{{宋江|そうこう}}は人を殺めて{{逃亡|とうぼう}}の身となる。それぞれの事情で世を追われた者たちが、次々と{{梁山泊|りょうざんぱく}}へ向かう。",
  },
  {
    no: 2,
    title: "{{梁山泊|りょうざんぱく}}の{{繁栄|はんえい}}",
    range: "第41〜71回ごろ",
    body: "{{宋江|そうこう}}が{{梁山泊|りょうざんぱく}}に{{迎|むか}}えられると、各地の官軍や{{豪族|ごうぞく}}との戦いを重ねるたびに好漢の数は増え、{{梁山泊|りょうざんぱく}}は一大勢力に成長する。頭領の{{晁蓋|ちょうがい}}が戦いで命を落とした後、{{宋江|そうこう}}が{{跡|あと}}を{{継|つ}}ぎ、名士{{盧俊義|ろしゅんぎ}}も仲間に加わる。第71回で天から降った{{石碑|せきひ}}に108人の名と星が刻まれていたことが明かされ、「{{替天行道|たいてんこうどう}}（天に{{替|か}}わりて道を行う）」の旗のもと、108人の席次が定まる。",
  },
  {
    no: 3,
    title: "招安（{{朝廷|ちょうてい}}への帰順）",
    range: "第72〜90回ごろ",
    body: "{{宋江|そうこう}}はもともと{{朝廷|ちょうてい}}への忠義を捨てておらず、罪を許されて官軍となる「{{招安|しょうあん}}」を望み続けていた。{{高俅|こうきゅう}}ら{{奸臣|かんしん}}の{{妨害|ぼうがい}}を退けたのち、ついに{{梁山泊|りょうざんぱく}}は招安を受け入れ、108人は{{朝廷|ちょうてい}}の軍として北方の{{遼|りょう}}と戦う。120回本では、さらに{{田虎|でんこ}}・{{王慶|おうけい}}という反乱勢力の{{討伐|とうばつ}}が加わる。",
  },
  {
    no: 4,
    title: "{{方臘|ほうろう}}{{討伐|とうばつ}}と悲劇の結末",
    range: "第90回ごろ〜最終回",
    body: "最後の戦いは{{江南|こうなん}}で反乱を起こした{{方臘|ほうろう}}の{{討伐|とうばつ}}である。激戦の末に{{方臘|ほうろう}}は平定されるが、好漢たちは次々と戦死・病死し、都へ{{凱旋|がいせん}}できたのは3分の1ほどにすぎなかった。生き残った{{宋江|そうこう}}も{{奸臣|かんしん}}に毒酒を{{賜|たまわ}}って世を去り、義兄弟の{{李逵|りき}}も道連れとなる。{{梁山泊|りょうざんぱく}}の物語は、忠義を{{尽|つ}}くした者たちが報われないまま幕を閉じる。",
  },
];

// 時代の流れ。hrefは/eventsへの直接リンク、anchorは本ページ内のセクションへのリンク
const FLOW = [
  { year: "1069", title: "{{王安石|おうあんせき}}の新法", note: "改革をめぐる新法・旧法の党争が長く続き、{{朝廷|ちょうてい}}は{{分裂|ぶんれつ}}していく。", href: HREF_WANG_ANSHI },
  { year: "1100", title: "{{徽宗|きそう}}の{{即位|そくい}}", note: "芸術を愛した{{皇帝|こうてい}}のもとで、{{蔡京|さいけい}}・{{童貫|どうかん}}らが権勢をふるう。", anchor: "background" },
  { year: "1115", title: "金の建国", note: "女真族の金が{{遼|りょう}}から自立。{{宋|そう}}は金と結んで{{遼|りょう}}を{{挟|はさ}}み{{撃|う}}ちにしようとする。", href: HREF_JIN },
  { year: "1119{{頃|ごろ}}", title: "{{宋江|そうこう}}の乱", note: "{{宋江|そうこう}}ら36人が山東・{{淮南|わいなん}}一帯を{{荒|あ}}らし回る。", anchor: "history-vs-legend" },
  { year: "1120", title: "{{方臘|ほうろう}}の乱", note: "{{花石綱|かせきこう}}の{{徴発|ちょうはつ}}に苦しむ{{江南|こうなん}}で{{方臘|ほうろう}}が{{蜂起|ほうき}}。翌年、{{童貫|どうかん}}の軍に{{鎮圧|ちんあつ}}される。", anchor: "history-vs-legend" },
  { year: "1121", title: "{{宋江|そうこう}}の投降", note: "{{海州|かいしゅう}}の知州{{張叔夜|ちょうしゅくや}}に敗れ、{{宋江|そうこう}}は{{降伏|こうふく}}したと『{{宋史|そうし}}』は記す。", anchor: "history-vs-legend" },
  { year: "1127", title: "{{靖康|せいこう}}の変・{{北宋|ほくそう}}{{滅亡|めつぼう}}", note: "金軍が都{{開封|かいほう}}を{{陥|お}}とし、{{徽宗|きそう}}・{{欽宗|きんそう}}が北方へ連れ去られる。", href: HREF_JINGKANG },
  { year: "元代", title: "『{{大宋宣和遺事|だいそうせんないじ}}』", note: "{{宋江|そうこう}}と36人の物語が書物にまとめられ、元雑劇でも好漢たちが演じられる。", anchor: "versions" },
  { year: "明代", title: "『{{水滸伝|すいこでん}}』の成立", note: "{{施耐庵|したいあん}}・{{羅貫中|らかんちゅう}}の作と伝わる長編小説にまとまる。", anchor: "versions" },
];

// 地図上の地点。番号は物語に登場する順
const PLACES = [
  { no: 1, name: "{{梁山泊|りょうざんぱく}}", label: "{{梁山泊|りょうざんぱく}}", lon: 116.1, lat: 35.8, labelSide: "right", note: "好漢たちの{{本拠地|ほんきょち}}。現在の山東省{{梁山県|りょうざんけん}}付近。{{宋江|そうこう}}が役人として勤めた{{鄆城県|うんじょうけん}}もすぐ南にある。" },
  { no: 2, name: "{{景陽岡|けいようこう}}（{{陽穀|ようこく}}）", label: "景陽岡", lon: 115.78, lat: 36.12, labelSide: "right", note: "{{武松|ぶしょう}}が素手で人食い{{虎|とら}}を退治した{{峠|とうげ}}。" },
  { no: 3, name: "{{大名府|たいめいふ}}", label: "大名府", lon: 115.15, lat: 36.28, labelSide: "left", note: "{{盧俊義|ろしゅんぎ}}の故郷。{{梁山泊軍|りょうざんぱくぐん}}が{{攻|せ}}め{{込|こ}}み、{{盧俊義|ろしゅんぎ}}を救い出す。" },
  { no: 4, name: "{{江州|こうしゅう}}", label: "{{江州|こうしゅう}}", lon: 116.0, lat: 29.7, labelSide: "left", note: "流罪となった{{宋江|そうこう}}が反逆の詩を書き、{{処刑|しょけい}}されかける町（現在の{{九江|きゅうこう}}）。" },
  { no: 5, name: "{{睦州|ぼくしゅう}}", label: "{{睦州|ぼくしゅう}}", lon: 119.0, lat: 29.6, labelSide: "right", note: "{{方臘|ほうろう}}が{{蜂起|ほうき}}した地（現在の{{浙江省|せっこうしょう}}{{淳安|じゅんあん}}・建徳一帯）。物語でも最後の決戦の場となる。" },
  { no: 6, name: "{{海州|かいしゅう}}", label: "海州", lon: 119.2, lat: 34.6, labelSide: "right", note: "史実の{{宋江|そうこう}}が{{張叔夜|ちょうしゅくや}}に敗れて{{降伏|こうふく}}した地（現在の連雲港）。" },
];

const PEOPLE = [
  {
    side: "{{梁山泊|りょうざんぱく}}の好漢",
    color: HERO_COLOR,
    members: [
      { name: "{{宋江|そうこう}}", role: "第1位・{{天魁星|てんかいせい}}「{{呼保義|こほうぎ}}」", note: "{{鄆城県|うんじょうけん}}の小役人。困った人に{{惜|お}}しみなく{{施|ほどこ}}すことから「{{及時雨|きゅうじう}}（{{恵|めぐ}}みの雨）」と{{慕|した}}われた。{{晁蓋|ちょうがい}}の死後、{{梁山泊|りょうざんぱく}}の首領となり、招安を実現させる。", ...jssImage("宋江") },
      { name: "{{呉用|ごよう}}", role: "第3位・天機星「{{智多星|ちたせい}}」", note: "村の{{塾|じゅく}}の教師だった{{梁山泊|りょうざんぱく}}の軍師。{{生辰綱|せいしんこう}}{{強奪|ごうだつ}}の計略を立て、以後も数々の作戦を指揮する。", ...jssImage("吳用") },
      { name: "{{林冲|りんちゅう}}", role: "第6位・{{天雄星|てんゆうせい}}「{{豹子頭|ひょうしとう}}」", note: "80万禁軍の{{槍棒|そうぼう}}{{師範|しはん}}。{{高俅|こうきゅう}}の養子に妻を{{狙|ねら}}われ、{{罠|わな}}にかけられて流罪となり、{{梁山泊|りょうざんぱく}}へ落ちのびる。", ...jssImage("林冲") },
      { name: "{{魯智深|ろちしん}}", role: "第13位・{{天孤星|てんこせい}}「{{花和尚|かおしょう}}」", note: "もとは軍官で、弱い者を助けるために人を殺めて出家した{{豪傑僧|ごうけっそう}}。全身に花の{{刺青|いれずみ}}がある。", ...jssImage("魯智深") },
      { name: "{{武松|ぶしょう}}", role: "第14位・天傷星「{{行者|ぎょうじゃ}}」", note: "景陽岡で素手で{{虎|とら}}を打ち殺した{{英雄|えいゆう}}。兄を毒殺した{{潘金蓮|はんきんれん}}と{{西門慶|せいもんけい}}への{{仇討|あだう}}ちでも知られる。", ...jssImage("武松") },
      { name: "{{楊志|ようし}}", role: "第17位・天暗星「{{青面獣|せいめんじゅう}}」", note: "顔に青いあざのある武官。{{楊家将|ようかしょう}}の{{楊業|ようぎょう}}の子孫という設定で、{{生辰綱|せいしんこう}}の護送に失敗して{{梁山泊|りょうざんぱく}}へ加わる。", ...jssImage("楊志") },
      { name: "{{李逵|りき}}", role: "第22位・天殺星「{{黒旋風|こくせんぷう}}」", note: "二丁の{{板斧|はんぷ}}をふるう乱暴者だが、{{宋江|そうこう}}を兄と{{慕|した}}って{{一途|いちず}}に従う。物語{{随一|ずいいち}}の人気者。", ...jssImage("李逵") },
      { name: "{{燕青|えんせい}}", role: "第36位・{{天巧星|てんこうせい}}「{{浪子|ろうし}}」", note: "{{盧俊義|ろしゅんぎ}}に仕える美青年。{{相撲|すもう}}・弓・楽器に通じた多芸の人で、招安の実現にも一役買う。", ...jssImage("燕青") },
    ],
  },
  {
    side: "{{朝廷|ちょうてい}}・史実の人物",
    color: COURT_COLOR,
    members: [
      { name: "{{徽宗|きそう}}", role: "{{北宋|ほくそう}}第8代{{皇帝|こうてい}}", note: "書画の天才だったが政治を{{顧|かえり}}みず、{{奸臣|かんしん}}たちに国政を委ねた。物語では好漢の忠義を理解しながらも、{{奸臣|かんしん}}に{{欺|あざむ}}かれる{{皇帝|こうてい}}として{{描|えが}}かれる。", ...HUIZONG },
      { name: "{{高俅|こうきゅう}}", role: "{{殿帥府|でんすいふ}}{{太尉|たいい}}（物語の最大の悪役）", note: "{{徽宗|きそう}}が{{即位|そくい}}する前に{{蹴鞠|けまり}}の{{腕|うで}}を{{見込|みこ}}まれて取り立てられた人物。史実でも軍の高官に上ったが、物語では好漢たちを追い{{詰|つ}}める{{奸臣|かんしん}}の筆頭とされた。" },
      { name: "{{張叔夜|ちょうしゅくや}}", role: "海州の知州", note: "『{{宋史|そうし}}』によれば、海州に{{侵入|しんにゅう}}した{{宋江|そうこう}}の船団を焼き{{払|はら}}って{{降伏|こうふく}}させた。のちに{{靖康の変|せいこうのへん}}で金軍と戦い、{{捕|と}}らえられて北へ送られる{{途中|とちゅう}}で世を去った。" },
      { name: "{{方臘|ほうろう}}", role: "{{江南|こうなん}}の反乱指導者", note: "1120年に{{睦州|ぼくしゅう}}で{{蜂起|ほうき}}し、一時は{{江南|こうなん}}の広い{{範囲|はんい}}を支配した。翌年、{{童貫|どうかん}}の率いる官軍に{{捕|と}}らえられて{{処刑|しょけい}}された。" },
    ],
  },
];

// 百八星の席次上位10人（70回本・100回本共通）
const TOP_TEN = [
  { rank: 1, star: "{{天魁星|てんかいせい}}", name: "{{宋江|そうこう}}", nickname: "呼保義" },
  { rank: 2, star: "{{天罡星|てんこうせい}}", name: "{{盧俊義|ろしゅんぎ}}", nickname: "玉{{麒麟|きりん}}" },
  { rank: 3, star: "天機星", name: "{{呉用|ごよう}}", nickname: "{{智多星|ちたせい}}" },
  { rank: 4, star: "{{天閑星|てんかんせい}}", name: "{{公孫勝|こうそんしょう}}", nickname: "入{{雲龍|うんりゅう}}" },
  { rank: 5, star: "天勇星", name: "{{関勝|かんしょう}}", nickname: "大刀" },
  { rank: 6, star: "{{天雄星|てんゆうせい}}", name: "{{林冲|りんちゅう}}", nickname: "{{豹子頭|ひょうしとう}}" },
  { rank: 7, star: "{{天猛星|てんもうせい}}", name: "{{秦明|しんめい}}", nickname: "{{霹靂火|へきれきか}}" },
  { rank: 8, star: "{{天威星|てんいせい}}", name: "{{呼延灼|こえんしゃく}}", nickname: "{{双鞭|そうべん}}" },
  { rank: 9, star: "天英星", name: "{{花栄|かえい}}", nickname: "{{小李広|しょうりこう}}" },
  { rank: 10, star: "天貴星", name: "{{柴進|さいしん}}", nickname: "{{小旋風|しょうせんぷう}}" },
];

// 『宋史』などの史実と、小説『水滸伝』との違い
const COMPARE_ROWS = [
  { label: "人数", history: "「{{宋江|そうこう}}ら36人」と記録される。", legend: "108人の好漢と、数万の兵を{{擁|よう}}する大勢力。" },
  { label: "{{本拠地|ほんきょち}}", history: "山東から{{淮南|わいなん}}にかけて各地を転戦した{{流賊|りゅうぞく}}で、{{梁山泊|りょうざんぱく}}を{{根拠地|こんきょち}}とした記録は{{乏|とぼ}}しい。", legend: "{{梁山泊|りょうざんぱく}}に{{堅固|けんご}}な{{山寨|さんさい}}を築き、水軍で守りを固める。" },
  { label: "結末", history: "1121年、海州で{{張叔夜|ちょうしゅくや}}に敗れて投降。その後は記録が少なく、はっきりしない。", legend: "招安を受けて官軍となり、{{遼|りょう}}・{{方臘|ほうろう}}と戦ったのち、{{奸臣|かんしん}}に毒殺される。" },
  { label: "{{方臘|ほうろう}}{{討伐|とうばつ}}", history: "投降した{{宋江|そうこう}}が{{方臘|ほうろう}}{{討伐|とうばつ}}に加わったとする記録と、それと{{矛盾|むじゅん}}する記録があり、説が分かれる。", legend: "{{梁山泊軍|りょうざんぱくぐん}}の最後の大戦として{{詳|くわ}}しく{{描|えが}}かれ、好漢の多くがここで命を落とす。" },
  { label: "{{高俅|こうきゅう}}", history: "{{徽宗|きそう}}に重用された軍の高官。悪名高い「{{六賊|ろくぞく}}」には数えられていない。", legend: "好漢たちを苦しめる{{奸臣|かんしん}}の筆頭で、物語最大の悪役。" },
];

const VERSIONS = [
  { name: "100回本", note: "明代の刊本。招安・{{遼|りょう}}との戦い・{{方臘|ほうろう}}{{討伐|とうばつ}}を経て、{{宋江|そうこう}}の死で終わる。現存する版本の中で古い形を伝えるとされる。" },
  { name: "120回本", note: "明末の1614年ごろに刊行された『忠義{{水滸|すいこ}}全書』。100回本に、{{田虎|でんこ}}・{{王慶|おうけい}}の{{討伐|とうばつ}}の20回分を加えた完全版。" },
  { name: "70回本", note: "明末清初の批評家{{金聖嘆|きんせいたん}}が、108人の席次が定まる第71回までで物語を打ち切り、{{盧俊義|ろしゅんぎ}}の悪夢で{{締|し}}めくくった版。清代に最も広く読まれた。" },
];

const JAPAN = [
  {
    era: "{{江戸時代|えどじだい}}",
    title: "{{翻訳|ほんやく}}と読本（よみほん）",
    body: "18世紀半ばに『{{通俗|つうぞく}}忠義{{水滸伝|すいこでん}}』として{{翻訳|ほんやく}}が刊行され、{{庶民|しょみん}}にも広く読まれるようになった。{{曲亭馬琴|きょくていばきん}}は{{葛飾北斎|かつしかほくさい}}の{{挿絵|さしえ}}による『新編{{水滸画伝|すいこがでん}}』の{{翻訳|ほんやく}}を手がけ、代表作『南総里見八犬伝』の構想にも{{水滸伝|すいこでん}}の{{影響|えいきょう}}が{{色濃|いろこ}}く見られる。",
  },
  {
    era: "{{江戸時代|えどじだい}}",
    title: "{{歌川国芳|うたがわくによし}}の武者絵",
    body: "1827年ごろから刊行された{{国芳|くによし}}の連作「{{通俗|つうぞく}}{{水滸伝|すいこでん}}{{豪傑|ごうけつ}}百八人{{之|の}}一個」は、全身に{{刺青|いれずみ}}を{{施|ほどこ}}した{{豪傑|ごうけつ}}たちの{{躍動的|やくどうてき}}な姿で大評判となり、{{国芳|くによし}}を武者絵の第一人者に{{押|お}}し上げた。{{江戸|えど}}の{{刺青|いれずみ}}の流行にも{{影響|えいきょう}}を{{与|あた}}えたといわれる。",
  },
  {
    era: "近代以降",
    title: "小説・{{漫画|まんが}}・ドラマ",
    body: "{{吉川英治|よしかわえいじ}}の『新・{{水滸伝|すいこでん}}』（作者の死により未完）、{{柴田錬三郎|しばたれんざぶろう}}による{{翻案|ほんあん}}、{{横山光輝|よこやまみつてる}}の{{漫画|まんが}}などを通じて、{{水滸伝|すいこでん}}は日本でも{{繰|く}}り返し語り直されてきた。",
  },
];

// 北方謙三の「大水滸伝」シリーズ（集英社）
const BOOKS = [
  {
    no: 1,
    title: "『{{水滸伝|すいこでん}}』",
    meta: "{{北方謙三|きたかたけんぞう}} / 全19巻（集英社）",
    body: "原典の骨格を借りながら、登場人物の設定や物語の展開を{{大胆|だいたん}}に組み{{替|か}}えた長編。{{梁山泊|りょうざんぱく}}を、{{腐敗|ふはい}}した{{宋|そう}}に{{挑|いど}}む組織として{{描|か}}き直している。",
  },
  {
    no: 2,
    title: "『{{楊令伝|ようれいでん}}』",
    meta: "{{北方謙三|きたかたけんぞう}} / 全15巻（集英社）",
    body: "『{{水滸伝|すいこでん}}』の続編で、北方版オリジナルの人物・{{楊令|ようれい}}が主人公。{{梁山泊|りょうざんぱく}}の志を{{継|つ}}ぐ者たちの戦いを、{{北宋|ほくそう}}の{{滅亡|めつぼう}}と重ねて{{描|えが}}く。",
  },
  {
    no: 3,
    title: "『{{岳飛伝|がくひでん}}』",
    meta: "{{北方謙三|きたかたけんぞう}} / 全17巻（集英社）",
    body: "シリーズの完結編。{{南宋|なんそう}}の名将{{岳飛|がくひ}}を{{軸|じく}}に、{{梁山泊|りょうざんぱく}}の流れをくむ者たちの行く末が{{描|えが}}かれる。",
  },
];

const FAQ = [
  {
    q: "{{水滸伝|すいこでん}}は実話ですか？",
    a: "{{北宋末|ほくそうまつ}}に{{宋江|そうこう}}という人物が36人の仲間とともに反乱を起こし、官軍に{{降伏|こうふく}}したことは『{{宋史|そうし}}』に記録された史実です。ただし108人の好漢の多くや、{{梁山泊|りょうざんぱく}}を{{拠点|きょてん}}とした{{活躍|かつやく}}、招安後の{{遼|りょう}}・{{方臘|ほうろう}}との戦いといった物語の大部分は、講談や{{芝居|しばい}}を通じて{{膨|ふく}}らんだ創作です。",
  },
  {
    q: "{{梁山泊|りょうざんぱく}}は実在した場所ですか？",
    a: "実在しました。現在の山東省{{梁山県|りょうざんけん}}にある{{梁山|りょうざん}}のふもとに、黄河の{{氾濫|はんらん}}によって広がった大きな{{湖沼|こしょう}}があり、それが{{梁山泊|りょうざんぱく}}です。その後、黄河の流路が変わったことで干上がり、今はその名残が近くの東平湖などに残っています。",
  },
  {
    q: "「{{梁山泊|りょうざんぱく}}」が「{{豪傑|ごうけつ}}や野心家の集まる場所」という意味で使われるのはなぜですか？",
    a: "{{水滸伝|すいこでん}}で、世に容れられない優れた人物たちが{{梁山泊|りょうざんぱく}}に集まったことにちなみます。日本語では、才能ある人々が集まって{{腕|うで}}を競い合う場所のたとえとして使われます。",
  },
  {
    q: "{{楊志|ようし}}と{{楊家将|ようかしょう}}には関係がありますか？",
    a: "{{水滸伝|すいこでん}}の中で、{{楊志|ようし}}は{{楊家将|ようかしょう}}の祖である{{楊業|ようぎょう}}（{{楊令公|ようれいこう}}）の子孫という設定になっています。{{北宋|ほくそう}}の武門の名家の{{末裔|まつえい}}が、{{没落|ぼつらく}}して{{盗賊|とうぞく}}の仲間入りをするという点に、物語の皮肉が{{込|こ}}められています。",
  },
  {
    q: "70回本・100回本・120回本はどれを読めばいいですか？",
    a: "物語の結末まで読みたいなら、招安から{{方臘|ほうろう}}{{討伐|とうばつ}}、{{宋江|そうこう}}の死までを収めた100回本か120回本がおすすめです。70回本は108人が{{揃|そろ}}う最高潮の場面で終わるため、テンポよく読める一方、好漢たちのその後は{{描|えが}}かれません。",
  },
];

function SuikodenMap() {
  const [kx, ky] = project(114.31, 34.8);
  const [lx, ly] = project(116.1, 35.8);
  return (
    <div style={{ ...card, padding: 16, marginBottom: 16 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        実際の海岸線をもとにした位置関係図です。<ruby>朱色<rt>しゅいろ</rt></ruby>の番号は下の各地点、水色の<ruby>範囲<rt>はんい</rt></ruby>は<ruby>梁山泊<rt>りょうざんぱく</rt></ruby>のおおよその位置、金色の丸は<ruby>宋<rt>そう</rt></ruby>の都・<ruby>開封<rt>かいほう</rt></ruby>です。
      </p>
      <svg viewBox="316 158 64 96" style={{ width: "100%", maxHeight: 520, display: "block", margin: "0 auto" }} role="img" aria-label="水滸伝ゆかりの地の地図">
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="0.3" strokeLinejoin="round" />
        <ellipse cx={lx} cy={ly} rx="2.6" ry="1.8" fill={COURT_COLOR} fillOpacity="0.28" stroke={COURT_COLOR} strokeWidth="0.25" strokeDasharray="0.8 0.5" />

        <circle cx={kx} cy={ky} r="0.9" fill={COLORS.gold} stroke={COLORS.paper} strokeWidth="0.3" />
        <text x={kx - 1.6} y={ky + 0.6} textAnchor="end" style={{ fontFamily: "var(--font-serif), serif", fontSize: 1.7, fill: COLORS.inkSoft }}>
          開封（宋の都）
        </text>

        {PLACES.map((p) => {
          const [x, y] = project(p.lon, p.lat);
          const right = p.labelSide === "right";
          return (
            <a key={p.no} href={`#place-${p.no}`}>
              <circle cx={x} cy={y} r="1.35" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="0.3" />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="central" style={{ fontFamily: "var(--font-serif), serif", fontSize: 1.6, fontWeight: 700, fill: "#FBF8F0" }}>
                {p.no}
              </text>
              <text
                x={right ? x + 2 : x - 2}
                y={y + 0.6}
                textAnchor={right ? "start" : "end"}
                style={{ fontFamily: "var(--font-serif), serif", fontSize: 1.7, fontWeight: 700, fill: COLORS.ink }}
              >
                {stripRuby(p.label)}
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
        fontFamily: "var(--font-serif), serif",
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
      { "@type": "ListItem", position: 2, name: "{{水滸伝|すいこでん}}とは", item: `${SITE_URL}/suikoden` },
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

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 6 }}>
          <ruby>水滸伝<rt>すいこでん</rt></ruby>とは？
        </h1>
        <p style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, color: COLORS.gold, marginBottom: 14 }}>
          <ruby>梁山泊<rt>りょうざんぱく</rt></ruby>に集う108人の好漢と、史実の<ruby>宋江<rt>そうこう</rt></ruby>
        </p>
        <p style={{ ...bodyText, fontSize: 13.5, marginBottom: 28 }}>
          <RubyText text="『{{水滸伝|すいこでん}}』は、{{北宋末|ほくそうまつ}}の{{徽宗|きそう}}の時代を{{舞台|ぶたい}}に、{{腐敗|ふはい}}した役人や{{奸臣|かんしん}}に追われた108人の好漢たちが{{梁山泊|りょうざんぱく}}に集い、「{{替天行道|たいてんこうどう}}（天に{{替|か}}わりて道を行う）」を{{掲|かか}}げて戦う長編小説です。『三国志演義』『西遊記』『{{紅楼夢|こうろうむ}}』と並ぶ中国の四大名著の一つに数えられます。" />
          物語のもとになったのは、<ruby>北宋末<rt>ほくそうまつ</rt></ruby>に実際に起きた<ruby>宋江<rt>そうこう</rt></ruby>の反乱でした。このページでは、あらすじや人物の<ruby>紹介<rt>しょうかい</rt></ruby>に加えて、<ruby>梁山泊<rt>りょうざんぱく</rt></ruby>の実像や史実と物語の<ruby>違<rt>ちが</rt></ruby>いまで、<ruby>水滸伝<rt>すいこでん</rt></ruby>の世界をひととおりたどります。
        </p>

        <section style={{ marginBottom: 36 }} id="story">
          <h2 style={sectionHeading}>あらすじ</h2>
          <div className="flex flex-col gap-3">
            {STORY.map((s) => (
              <div key={s.no} className="flex gap-3 p-4" style={card}>
                <NumberBadge size={28} outline>{s.no}</NumberBadge>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}><RubyText text={s.title} /></span>
                    <span style={{ fontSize: 11, color: COLORS.gold }}><RubyText text={s.range} /></span>
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
          <h2 style={sectionHeading}>時代背景：<ruby>徽宗<rt>きそう</rt></ruby>の治世</h2>
          <div className="flex flex-col gap-3" style={bodyText}>
            <p>
              <RubyText text="1100年に{{即位|そくい}}した{{徽宗|きそう}}は、「{{痩金体|そうきんたい}}」という独自の書体を生み出し、花鳥画の名手としても知られる{{芸術家肌|げいじゅつかはだ}}の{{皇帝|こうてい}}でした。その一方で政治への関心は{{薄|うす}}く、{{宰相|さいしょう}}の{{蔡京|さいけい}}や{{宦官|かんがん}}の{{童貫|どうかん}}らが実権を{{握|にぎ}}って、{{朝廷|ちょうてい}}の{{腐敗|ふはい}}が進みます。" />
            </p>
            <p>
              <RubyText text="{{徽宗|きそう}}が庭園造りのために{{江南|こうなん}}から{{珍|めずら}}しい石や木を都へ運ばせた「{{花石綱|かせきこう}}」は、民衆に重い負担を強いました。各地で反乱や{{盗賊|とうぞく}}が相次ぎ、1120年には{{江南|こうなん}}で{{方臘|ほうろう}}の乱が起こります。{{宋江|そうこう}}の反乱も、こうした社会不安のなかで起きた出来事の一つでした。{{水滸伝|すいこでん}}が「悪いのは{{皇帝|こうてい}}ではなく、{{皇帝|こうてい}}を{{欺|あざむ}}く{{奸臣|かんしん}}だ」という立場で書かれているのも、この時代の{{記憶|きおく}}を反映しています。" />
            </p>
            <p>
              <RubyText text="やがて{{宋|そう}}は北方で台頭した金と結んで{{遼|りょう}}を{{攻|せ}}めますが、その金に{{攻|せ}}め{{込|こ}}まれ、1127年の{{靖康|せいこう}}の変で{{北宋|ほくそう}}は{{滅亡|めつぼう}}します。{{水滸伝|すいこでん}}の好漢たちが{{活躍|かつやく}}したのは、{{北宋|ほくそう}}が{{滅|ほろ}}びに向かう最後の十数年間でした。" />
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 32 }} id="flow">
          <h2 style={sectionHeading}>年表：<ruby>水滸伝<rt>すいこでん</rt></ruby>の時代と成立</h2>
          <div className="flex flex-col gap-2">
            {FLOW.map((f, i) => {
              const content = (
                <div className="flex items-baseline gap-3 px-4 py-2.5" style={{ ...card, borderLeft: `3px solid ${COLORS.vermilion}` }}>
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 12.5, color: COLORS.inkSoft, whiteSpace: "nowrap" }}><RubyText text={f.year} /></span>
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
              const href = f.href || (f.anchor && `#${f.anchor}`);
              return href ? <a key={i} href={href}>{content}</a> : <div key={i}>{content}</div>;
            })}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="liangshanpo">
          <h2 style={sectionHeading}><ruby>梁山泊<rt>りょうざんぱく</rt></ruby>はどこにあった？</h2>
          <div className="flex flex-col gap-3" style={{ ...bodyText, marginBottom: 20 }}>
            <p>
              <RubyText text="{{梁山泊|りょうざんぱく}}は{{架空|かくう}}の場所ではなく、現在の山東省{{梁山県|りょうざんけん}}にある{{梁山|りょうざん}}という小さな山のふもとに広がっていた{{湖沼|こしょう}}です。「{{泊|はく}}」は湖や{{沼|ぬま}}を意味します。この一帯にはもともと古代から「{{大野沢|だいやたく}}（{{鉅野沢|きょやたく}}）」と呼ばれる{{沼沢地|しょうたくち}}があり、五代から{{北宋|ほくそう}}にかけて黄河がたびたび{{決壊|けっかい}}して水が流れ{{込|こ}}んだことで、大きな湖に広がりました。" />
            </p>
            <p>
              <RubyText text="入り組んだ水路と{{葦|あし}}の{{茂|しげ}}みに囲まれた{{梁山泊|りょうざんぱく}}は、官軍が{{攻|せ}}めにくく、{{北宋|ほくそう}}の時代には実際に{{盗賊|とうぞく}}の{{隠|かく}}れ家になることがありました。{{水滸伝|すいこでん}}で「八百里の{{梁山泊|りょうざんぱく}}」と語られる広大な水の{{要塞|ようさい}}は、こうした土地の{{記憶|きおく}}をもとに{{誇張|こちょう}}されたものです。" />
            </p>
            <p>
              <RubyText text="その後、黄河の流路が南へ移ったことで水が引き、湖は次第に干上がっていきました。現在の{{梁山|りょうざん}}は{{水滸伝|すいこでん}}の聖地として整備され、山上には物語にちなんだ忠義堂などが再現されています。近くの{{東平湖|とうへいこ}}は、かつての広大な水域の名残の一つとされます。なお日本語では、{{水滸伝|すいこでん}}にちなんで「優れた人物や野心家が集まる場所」のたとえとしても「{{梁山泊|りょうざんぱく}}」という言葉が使われます。" />
            </p>
          </div>

          <SuikodenMap />
          <div className="flex flex-col gap-2">
            {PLACES.map((p) => (
              <div key={p.no} id={`place-${p.no}`} className="flex items-baseline gap-3 px-4 py-2.5" style={{ ...card, scrollMarginTop: 16 }}>
                <NumberBadge>{p.no}</NumberBadge>
                <div className="flex-1 min-w-0">
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
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
                  style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: group.color, borderBottom: `2px solid ${group.color}`, paddingBottom: 4, marginBottom: 10 }}
                >
                  <RubyText text={group.side} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.members.map((m) => (
                    <div key={m.name} className="flex gap-3 p-3" style={card}>
                      <Portrait imageUrl={m.imageUrl} name={m.name} size={72} />
                      <div className="flex-1 min-w-0">
                        <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
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
            好漢の<ruby>肖像<rt>しょうぞう</rt></ruby>: <RubyText text={JSS_CREDIT} />。<ruby>徽宗<rt>きそう</rt></ruby>: <RubyText text={HUIZONG.credit} />
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="108-stars">
          <h2 style={sectionHeading}>百八星の仕組み</h2>
          <div className="flex flex-col gap-3" style={{ ...bodyText, marginBottom: 14 }}>
            <p>
              <ruby>水滸伝<rt>すいこでん</rt></ruby>の108人は、天に<ruby>輝<rt>かがや</rt></ruby>く108の星の生まれ変わりとされています。上位の36人は「<ruby>天罡星<rt>てんこうせい</rt></ruby>（てんこうせい）」、残る72人は「<ruby>地煞星<rt>ちさつせい</rt></ruby>（ちさつせい）」と呼ばれ、それぞれに「<ruby>天魁星<rt>てんかいせい</rt></ruby>」「<ruby>地魁星<rt>ちかいせい</rt></ruby>」といった固有の星の名が割り当てられています。
            </p>
            <p>
              第71回、<ruby>梁山泊<rt>りょうざんぱく</rt></ruby>で天を<ruby>祀<rt>まつ</rt></ruby>る<ruby>儀式<rt>ぎしき</rt></ruby>を行うと、天から<ruby>石碑<rt>せきひ</rt></ruby>が降ってきます。そこには108人の名と星、そして席次が刻まれており、これによって<ruby>梁山泊<rt>りょうざんぱく</rt></ruby>の序列が天命として定まりました。好漢たちには「<ruby>及時雨<rt>きゅうじう</rt></ruby>」「<ruby>豹子頭<rt>ひょうしとう</rt></ruby>」のようなあだ名（<ruby>綽号<rt>しゃくごう</rt></ruby>）もそれぞれにつけられており、人物の<ruby>特徴<rt>とくちょう</rt></ruby>を一言で表しています。
            </p>
          </div>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, minWidth: 360 }}>
              <caption style={{ captionSide: "top", textAlign: "left", padding: "10px 10px 4px", fontFamily: "var(--font-serif), serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink }}>
                席次上位10人
              </caption>
              <thead>
                <tr>
                  {["席次", "星", "名前", "あだ名"].map((h) => (
                    <th key={h} style={{ padding: "8px 10px", borderBottom: `2px solid ${COLORS.vermilion}`, textAlign: "left", fontFamily: "var(--font-serif), serif", fontSize: 12, color: COLORS.gold }}>
                      <RubyText text={h} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TOP_TEN.map((r) => (
                  <tr key={r.rank}>
                    <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.inkSoft, fontFamily: "var(--font-serif), serif" }}><RubyText text={r.rank} /></td>
                    <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.inkSoft }}><RubyText text={r.star} /></td>
                    <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.ink, fontWeight: 700 }}>
                      <RubyText text={r.name} />
                    </td>
                    <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.ink }}><RubyText text={r.nickname} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="history-vs-legend">
          <h2 style={sectionHeading}>史実の<ruby>宋江<rt>そうこう</rt></ruby>と物語の<ruby>違<rt>ちが</rt></ruby>い</h2>
          <div className="flex flex-col gap-3" style={{ ...bodyText, marginBottom: 14 }}>
            <p>
              <RubyText text="正史『{{宋史|そうし}}』によれば、宣和年間（1119〜1125年）に{{宋江|そうこう}}は36人の仲間とともに反乱を起こし、山東から{{淮南|わいなん}}にかけての各地を{{荒|あ}}らし回りました。官軍も手を焼くほどの勢いでしたが、1121年、{{海州|かいしゅう}}に現れたところを知州の{{張叔夜|ちょうしゅくや}}に待ち{{伏|ぶ}}せされ、船を焼かれて{{降伏|こうふく}}したと記されています。" />
            </p>
            <p>
              <RubyText text="{{降伏|こうふく}}した{{宋江|そうこう}}がその後どうなったかは、はっきりしません。同じ時期に起きた{{方臘|ほうろう}}の乱の{{討伐|とうばつ}}に加わったとする記録がある一方で、{{方臘|ほうろう}}平定の後に{{宋江|そうこう}}がなお{{盗賊|とうぞく}}として{{捕|と}}らえられたと読める史料もあり、研究者の間でも説が分かれています。こうした断片的な史実が、講談や{{芝居|しばい}}の中で108人の{{壮大|そうだい}}な物語へと{{膨|ふく}}らんでいきました。" />
            </p>
          </div>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 460 }}>
              <thead>
                <tr>
                  <th style={{ width: 84, padding: "10px 8px", borderBottom: "1px solid #DCD3B8" }} />
                  <th style={{ padding: "10px 8px", borderBottom: `2px solid ${COLORS.ink}`, textAlign: "left", fontFamily: "var(--font-serif), serif", fontSize: 14, color: COLORS.ink }}>史実（『<ruby>宋史<rt>そうし</rt></ruby>』など）</th>
                  <th style={{ padding: "10px 8px", borderBottom: `2px solid ${COLORS.vermilion}`, textAlign: "left", fontFamily: "var(--font-serif), serif", fontSize: 14, color: COLORS.ink }}>小説『<ruby>水滸伝<rt>すいこでん</rt></ruby>』</th>
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

        <section style={{ marginBottom: 36 }} id="versions">
          <h2 style={sectionHeading}><ruby>水滸伝<rt>すいこでん</rt></ruby>の成り立ちと版本</h2>
          <div className="flex flex-col gap-3" style={{ ...bodyText, marginBottom: 14 }}>
            <p>
              <RubyText text="{{宋江|そうこう}}たちの物語は、{{南宋|なんそう}}の{{頃|ころ}}から盛り場の講談で語られるようになりました。元代の『{{大宋宣和遺事|だいそうせんないじ}}』には、{{楊志|ようし}}が刀を売る場面や、{{晁蓋|ちょうがい}}らが{{生辰綱|せいしんこう}}を{{奪|うば}}う場面など、のちの{{水滸伝|すいこでん}}につながる筋書きがすでに見られ、元雑劇（元代の演劇）でも{{李逵|りき}}らを主人公にした演目が数多く作られました。" />
            </p>
            <p>
              <RubyText text="こうした語り物や{{芝居|しばい}}を集大成して、明代に長編小説『{{水滸伝|すいこでん}}』がまとめられます。作者は{{施耐庵|したいあん}}、あるいは{{施耐庵|したいあん}}と{{羅貫中|らかんちゅう}}の合作と伝えられますが、確かなことはわかっていません。{{水滸伝|すいこでん}}には長さや結末の異なる複数の版本があり、主に次の3系統が知られています。" />
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {VERSIONS.map((v) => (
              <div key={v.name} className="px-4 py-3" style={{ ...card, borderLeft: `3px solid ${COLORS.gold}` }}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}><RubyText text={v.name} /></div>
                <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 2 }}>
                  <RubyText text={v.note} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="japan">
          <h2 style={sectionHeading}>日本での<ruby>水滸伝<rt>すいこでん</rt></ruby></h2>
          <div className="flex flex-col gap-3" style={{ marginBottom: 24 }}>
            {JAPAN.map((j) => (
              <div key={j.title} className="p-4" style={card}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={j.title} />
                  </span>
                  <span style={{ fontSize: 11, color: COLORS.gold }}><RubyText text={j.era} /></span>
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={j.body} />
                </p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, color: COLORS.ink, marginBottom: 8 }}>
            <ruby>北方謙三<rt>きたかたけんぞう</rt></ruby>の「<ruby>大水滸伝<rt>だいすいこでん</rt></ruby>」シリーズを読む順番
          </h3>
          <p style={{ ...bodyText, marginBottom: 12 }}>
            <ruby>北方謙三<rt>きたかたけんぞう</rt></ruby>は、<ruby>水滸伝<rt>すいこでん</rt></ruby>を独自の<ruby>解釈<rt>かいしゃく</rt></ruby>で書き直した『<ruby>水滸伝<rt>すいこでん</rt></ruby>』に続けて、『<ruby>楊令伝<rt>ようれいでん</rt></ruby>』『<ruby>岳飛伝<rt>がくひでん</rt></ruby>』を発表しました。3作は一つながりの物語で、刊行順に読むのがおすすめです。
          </p>
          <div className="flex flex-col gap-3">
            {BOOKS.map((book) => (
              <div key={book.no} className="flex gap-3 p-4" style={card}>
                <NumberBadge size={28} outline>{book.no}</NumberBadge>
                <div className="flex-1 min-w-0">
                  <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}><RubyText text={book.title} /></div>
                  <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}><RubyText text={book.meta} /></div>
                  <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                    <RubyText text={book.body} />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 12 }}>
            <ruby>楊志<rt>ようし</rt></ruby>の祖先にあたる<ruby>楊業<rt>ようぎょう</rt></ruby>たちの物語は、<a href="/yangjiajiang" style={linkStyle}><ruby>楊家将<rt>ようかしょう</rt></ruby>とは</a>のページで<ruby>紹介<rt>しょうかい</rt></ruby>しています。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="faq">
          <h2 style={sectionHeading}><ruby>水滸伝<rt>すいこでん</rt></ruby>についてのよくある疑問</h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((f) => (
              <div key={f.q} style={{ ...card, padding: "14px 16px" }}>
                <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
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
            <ruby>北宋末<rt>ほくそうまつ</rt></ruby>の出来事や人物の<ruby>詳<rt>くわ</rt></ruby>しい解説は、年表・人物ページもあわせてご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/northernsong" variant="solid"><ruby>北宋<rt>ほくそう</rt></ruby>の出来事一覧を見る</NavButton>
            <NavButton href="/people/northernsong" variant="outline"><ruby>北宋<rt>ほくそう</rt></ruby>の人物一覧を見る</NavButton>
            <NavButton href="/four-great-novels" variant="outline">中国の四大名著とは</NavButton>
            <NavButton href="/yangjiajiang" variant="outline"><ruby>楊家将<rt>ようかしょう</rt></ruby>とは</NavButton>
            <NavButton href="/novelists" variant="outline">中国史を題材にした日本人小説家一覧</NavButton>
          </div>
        </section>

        <A8AdBlock ad="audible" className="mt-10" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
