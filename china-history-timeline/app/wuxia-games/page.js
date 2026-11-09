import { stripRuby, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const PATH = "/wuxia-games";
const title = "中国発の武侠・神話ゲームと元ネタの歴史｜黒神話：悟空・風燕伝・Phantom Blade Zeroの時代背景";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "『黒神話：悟空』『風燕伝（燕雲十六声）』『Phantom Blade Zero』『明末：ウツロノハネ』『黒神話：鍾馗』など、近年の中国開発の武侠・歴史・神話ゲームを紹介。西遊記と玄奘三蔵、燕雲十六州と五代十国、明末の四川、鍾馗伝説など、舞台になった時代と元ネタを史実と比べて解説します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  openGraph: buildOpenGraph({
    title: fullTitle,
    description,
    path: PATH,
    type: "article",
    image: { title: "中国発の武侠・神話ゲーム", subtitle: "元ネタの時代と史実", kicker: "唐〜明", seal: "侠" },
  }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const serif = "var(--font-serif), serif";
const sectionHeading = { fontFamily: serif, fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 14, scrollMarginTop: 16 };
const card = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const bodyText = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft };
const thStyle = { padding: "8px 10px", borderBottom: `2px solid ${COLORS.vermilion}`, textAlign: "left", fontFamily: serif, fontSize: 12, color: COLORS.gold, whiteSpace: "nowrap" };
const tdStyle = { padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.inkSoft, lineHeight: 1.6, verticalAlign: "top" };

// 各作品の解説。history の href は年表の出来事・特集ページへのリンク
const GAMES = [
  {
    id: "wukong",
    name: "黒神話：{{悟空|ごくう}}",
    en: "Black Myth: Wukong",
    developer: "Game Science（{{遊戯科学|ゆうぎかがく}}）",
    release: "2024年8月20日",
    platforms: "PS5 / Windows",
    era: "{{唐|とう}}（物語の時代）・明（原作の成立）",
    source: "小説『西遊記』",
    summary:
      "『西遊記』の“その後”を描くアクションRPG。{{取経|しゅきょう}}の旅を終えて仏になった{{孫悟空|そんごくう}}は、その位を捨てて天界の軍勢と戦い、{{二郎真君|じろうしんくん}}に敗れる。{{悟空|ごくう}}の力は6つの「{{根器|こんき}}」に分かれて散らばり、プレイヤーは{{猿|さる}}の戦士「{{天命人|てんめいびと}}」として、{{黒風山|こくふうざん}}・{{黄風嶺|こうふうれい}}・{{火焔山|かえんざん}}など西遊記ゆかりの地で{{妖怪|ようかい}}の王たちと戦いながら、それを集めていく。発売から3日で1,000万本を売り上げ、The Game Awards 2024ではベストアクション賞などを受賞。中国の家庭用・PC向け大作ゲームが世界で通用することを示した作品となった。",
    points: [
      {
        title: "ボスは原作の{{妖怪|ようかい}}たち",
        text: "{{観音|かんのん}}の{{袈裟|けさ}}を{{盗|ぬす}}んだ{{黒熊精|こくゆうせい}}、風で{{悟空|ごくう}}の目を痛めた{{黄風大王|こうふうだいおう}}、ニセの{{雷音寺|らいおんじ}}を作った{{黄眉大王|こうびだいおう}}、{{蜘蛛|くも}}の{{精|せい}}、{{紅孩児|こうがいじ}}と{{牛魔王|ぎゅうまおう}}の親子など、章ごとの敵は原作のエピソードがもと。原作を知っていると「あの話の続きか」とわかるつくりになっている。",
      },
      {
        title: "舞台は実在する山西省の古建築",
        text: "ゲーム内の寺や{{廟|びょう}}は、実在する古建築を3Dスキャンして作られた。ロケ地36か所のうち27か所が山西省にあり、{{隰県|しつけん}}の{{小西天|しょうさいてん}}（明末の寺）や{{晋城|しんじょう}}の{{玉皇廟|ぎょくこうびょう}}などは、発売後に観光客が大きく増えた。山西省は戦乱が少なかったため、{{宋|そう}}・{{遼|りょう}}・金・元代の木造建築が中国で最も多く残る地域でもある。",
      },
      {
        title: "{{二郎真君|じろうしんくん}}のルーツは{{秦|しん}}の治水",
        text: "{{悟空|ごくう}}を{{倒|たお}}す{{二郎真君|じろうしんくん}}は、もとは四川の{{灌口|かんこう}}で{{祀|まつ}}られた水の神。{{秦|しん}}の時代に{{都江堰|とこうえん}}を造った{{蜀郡|しょくぐん}}太守{{李冰|りひょう}}の息子とする伝承があり、治水の英雄が神となり、のちに物語の中で{{悟空|ごくう}}のライバルになった。",
      },
    ],
    history: [
      { href: "/events/tang--4", label: "モデルになった{{玄奘|げんじょう}}のインド旅（{{唐|とう}}・629〜645年）" },
      { href: "/saiyuki", label: "西遊記とは（あらすじと史実の違い）" },
      { href: "/four-great-novels", label: "中国の四大名著" },
    ],
  },
  {
    id: "yanyun",
    name: "{{風燕伝|ふうえんでん}}：Where Winds Meet",
    en: "中国題『{{燕雲十六声|えんうんじゅうろくせい}}』",
    developer: "Everstone Studio（NetEase Games）",
    release: "中国版 2024年12月27日／グローバル版（日本語対応）2025年11月",
    platforms: "Windows / PS5 / iOS / Android（基本プレイ無料）",
    era: "五代十国の末（10世紀）",
    source: "{{燕雲十六州|えんうんじゅうろくしゅう}}をめぐる史実と武侠小説",
    summary:
      "10世紀、{{唐|とう}}が{{滅|ほろ}}んで短命な王朝が入れ替わった五代十国の終わりごろを舞台にしたオープンワールドの武侠アクションRPG。プレイヤーは{{江湖|こうこ}}（武術家や{{侠客|きょうかく}}の世界）に生きる若い剣士となり、{{軽功|けいこう}}で屋根や{{崖|がけ}}を{{駆|か}}け、{{門派|もんぱ}}の武術を身につけながら、乱世の陰謀に巻き込まれていく。中国題の『{{燕雲十六声|えんうんじゅうろくせい}}』は、この時代に中国の北の守りを決定的に{{揺|ゆ}}るがした「{{燕雲十六州|えんうんじゅうろくしゅう}}」にちなむ。",
    points: [
      {
        title: "{{燕雲十六州|えんうんじゅうろくしゅう}}とは",
        text: "936年、{{後唐|こうとう}}の武将{{石敬瑭|せきけいとう}}は{{契丹|きったん}}（のちの{{遼|りょう}}）の軍事支援を受けて{{後晋|こうしん}}を建て、その見返りに今の北京・大同を中心とする16の州を{{契丹|きったん}}に{{譲|ゆず}}った。これで{{万里の長城|ばんりのちょうじょう}}の内側の要地が北方民族の手に{{渡|わた}}り、中原の王朝は平原で騎馬軍団と向き合うことになった。",
      },
      {
        title: "取り戻そうとした皇帝たち",
        text: "{{後周|こうしゅう}}の{{世宗|せいそう}}{{柴栄|さいえい}}は959年に北伐して一部を取り戻したが、その直後に病死。翌960年に{{趙匡胤|ちょうきょういん}}が{{宋|そう}}を建て、2代{{太宗|たいそう}}も986年に大軍を送ったが大敗し、名将{{楊業|ようぎょう}}が戦死した。1004年の{{澶淵|せんえん}}の盟で{{宋|そう}}は{{遼|りょう}}に毎年銀と絹を贈ることになり、16州は結局取り戻せなかった。",
      },
      {
        title: "ゲームの「武侠」と史実の距離",
        text: "王朝の興亡や{{契丹|きったん}}との緊張は史実の空気を取り入れているが、主人公の物語や{{門派|もんぱ}}、空を飛ぶような{{軽功|けいこう}}・{{点穴|てんけつ}}は、{{金庸|きんよう}}らの武侠小説に由来するフィクション。歴史の「すき間」に架空の{{江湖|こうこ}}を置くのは、武侠小説の伝統的な書き方でもある。",
      },
    ],
    history: [
      { href: "/events/wudai--2", label: "{{燕雲十六州|えんうんじゅうろくしゅう}}の{{割譲|かつじょう}}（936年）" },
      { href: "/events/wudai--5", label: "{{世宗|せいそう}}{{柴栄|さいえい}}の死（959年）" },
      { href: "/events/wudai--6", label: "{{趙匡胤|ちょうきょういん}}のクーデター（960年）" },
      { href: "/events/northernsong--yongxi", label: "{{雍熙|ようき}}の北伐と{{楊業|ようぎょう}}の戦死（986年）" },
      { href: "/events/northernsong--2", label: "{{澶淵|せんえん}}の盟（1004年）" },
      { href: "/yangjiajiang", label: "{{楊家将|ようかしょう}}とは" },
    ],
  },
  {
    id: "phantomblade",
    name: "Phantom Blade Zero",
    en: "中国題『{{影之刃零|えいしじんぜろ}}』",
    developer: "S-GAME（北京）",
    release: "2026年10月29日",
    platforms: "PS5 / Windows",
    era: "特定の時代なし（架空の世界）",
    source: "武侠小説・香港アクション映画",
    summary:
      "古代中国風の世界に{{蒸気機関|じょうききかん}}や機械じかけの武器をまぜた「カンフーパンク」の高速アクションゲーム。主人公の暗殺者「{{魂|ソウル}}」は、所属する組織の首領殺しの{{濡|ぬ}}れ{{衣|ぎぬ}}を着せられ、命が残りわずかとなった体で真犯人を追う。スマートフォン向けの2Dアクション『{{影之刃|えいしじん}}』シリーズを手がけたS-GAMEの初の家庭用大作で、発売から3日で400万本を売り上げた（開発元の発表）。",
    points: [
      {
        title: "モデルの王朝はない",
        text: "『黒神話』や『{{風燕伝|ふうえんでん}}』と違い、舞台は実在の時代ではない「{{影|かげ}}の世界」。ただし剣・{{刀|とう}}・{{槍|やり}}や暗器（かくし武器）、{{門派|もんぱ}}や{{江湖|こうこ}}のしきたりなど、武侠もののお約束がぎっしり詰め込まれている。アクションの{{振付|ふりつけ}}には、香港映画や『るろうに剣心』の実写版で知られる日本のアクション監督も参加した。",
      },
      {
        title: "武侠のルーツは『史記』の刺客と{{侠客|きょうかく}}",
        text: "権力に属さず、義のために剣をふるう「{{侠|きょう}}」の物語は2000年以上前からある。前漢の{{司馬遷|しばせん}}は『史記』に「{{刺客列伝|しかくれつでん}}」「{{遊侠列伝|ゆうきょうれつでん}}」を立て、{{始皇帝|しこうてい}}暗殺を試みた{{荊軻|けいか}}らを記録した。{{唐|とう}}の伝奇小説の女刺客{{聶隠娘|じょういんじょう}}、明の『{{水滸伝|すいこでん}}』の{{好漢|こうかん}}たちを経て、20世紀の{{金庸|きんよう}}・{{古龍|こりゅう}}が現代の武侠小説を完成させた。暗殺者が主人公の本作も、この流れの先にある。",
      },
    ],
    history: [
      { href: "/qinshihuang", label: "{{荊軻|けいか}}に命を{{狙|ねら}}われた{{始皇帝|しこうてい}}" },
      { href: "/history-books", label: "『史記』など中国の歴史書" },
      { href: "/suikoden", label: "{{水滸伝|すいこでん}}とは" },
    ],
  },
  {
    id: "wuchang",
    name: "明末：ウツロノハネ",
    en: "Wuchang: Fallen Feathers",
    developer: "Leenzee（中国・成都）",
    release: "2025年7月24日",
    platforms: "PS5 / Xbox Series X|S / Windows",
    era: "明の末（17世紀前半）",
    source: "明末の四川の戦乱・疫病と、冥界の使者「{{無常|むじょう}}」",
    summary:
      "明の末、戦乱と疫病に包まれた{{蜀|しょく}}（今の四川省）を舞台にしたダークファンタジーのアクションRPG。人の体に羽が生えて怪物に変わる奇病「{{羽化病|うかびょう}}」が広がるなか、記憶を失った女海賊の{{白無常|はくむじょう}}が、自分も同じ病に{{冒|おか}}されながら真相を探る。四川・成都のスタジオが、地元の歴史を舞台に選んだ作品でもある。",
    points: [
      {
        title: "本当にあった「明末の四川」の災厄",
        text: "{{羽化病|うかびょう}}は架空の病気だが、背景にある明末の惨状は史実に近い。17世紀の中国は寒冷化（小氷期）による{{凶作|きょうさく}}と飢饉、華北の大流行病に見舞われ、{{李自成|りじせい}}・{{張献忠|ちょうけんちゅう}}の反乱が広がった。{{張献忠|ちょうけんちゅう}}は1644年に成都で「大西」を建てたが、戦乱と虐殺、その後の清との戦いで四川の人口は激減し、清代には湖北・湖南などから大量の移民が送り込まれた（「湖広{{填|てん}}四川」）。",
      },
      {
        title: "伝説の「{{江口|こうこう}}の沈銀」は実在した",
        text: "{{張献忠|ちょうけんちゅう}}は清軍に追われ、大量の金銀を船に積んで{{岷江|びんこう}}で沈めたと伝えられてきた。長く伝説とされていたが、2017年に四川省{{彭山|ほうざん}}の{{江口|こうこう}}で発掘が行われ、「大西」の銘が入った銀や金の印章などが大量に見つかり、言い伝えが事実だったことがわかった。",
      },
      {
        title: "主人公の名は冥界の使者「{{無常|むじょう}}」",
        text: "中国の民間信仰では、死者の魂を冥界へ連れて行く使者を「{{無常|むじょう}}」と呼び、白い服の{{白無常|はくむじょう}}と黒い服の{{黒無常|こくむじょう}}の二人組で表す。生と死のはざまで戦う主人公に、この名がつけられている。",
      },
    ],
    history: [
      { href: "/events/ming--6", label: "{{李自成|りじせい}}の乱と明の{{滅亡|めつぼう}}（1644年）" },
      { href: "/events/qing--0", label: "清の北京入城（1644年）" },
      { href: "/eunuchs", label: "明を{{傾|かたむ}}けた{{宦官|かんがん}}たち" },
    ],
  },
  {
    id: "zhongkui",
    name: "黒神話：{{鍾馗|しょうき}}",
    en: "Black Myth: Zhong Kui（開発中）",
    developer: "Game Science（{{遊戯科学|ゆうぎかがく}}）",
    release: "発売日未定（2025年8月に発表）",
    platforms: "PC・家庭用ゲーム機",
    era: "{{唐|とう}}（伝説の時代）",
    source: "{{鍾馗|しょうき}}伝説",
    summary:
      "『黒神話：{{悟空|ごくう}}』に続く「黒神話」シリーズの第2作。2025年8月のゲームイベントgamescomで、{{悟空|ごくう}}とは別の独立した物語として発表された。主役は、鬼を退治する神として中国でも日本でも親しまれてきた{{鍾馗|しょうき}}。",
    points: [
      {
        title: "{{玄宗|げんそう}}の夢から生まれた鬼退治の神",
        text: "{{北宋|ほくそう}}の{{沈括|しんかつ}}『{{夢渓筆談|むけいひつだん}}』などが伝える話では、{{唐|とう}}の{{玄宗|げんそう}}が{{熱病|ねつびょう}}で寝込んだとき、夢に大きな鬼が現れて小鬼を捕らえて食べた。鬼は「{{終南山|しゅうなんざん}}の{{鍾馗|しょうき}}。科挙に落ちて命を絶ったが、手厚く{{葬|ほうむ}}ってもらった恩返しに天下の妖怪を退治する」と名乗った。目覚めると病は治っており、{{玄宗|げんそう}}は画家{{呉道子|ごどうし}}にその姿を描かせたという。",
      },
      {
        title: "日本でもおなじみ",
        text: "{{鍾馗|しょうき}}の絵は{{魔除|まよ}}けとして広まり、日本でも端午の節句の{{鍾馗|しょうき}}人形や{{幟|のぼり}}、京都の町家の屋根に置かれる「{{鍾馗|しょうき}}さん」の{{瓦|かわら}}人形として今も見ることができる。",
      },
    ],
    history: [
      { href: "/keju", label: "{{鍾馗|しょうき}}が落ちた科挙とは" },
      { href: "/eras/tang", label: "{{玄宗|げんそう}}の時代（{{唐|とう}}）とは" },
    ],
  },
];

// 年表マップ。年 → y座標（600年〜1700年）
const Y0 = 34;
const YEAR0 = 600;
const SCALE = 0.42;
const yOf = (year) => Y0 + (year - YEAR0) * SCALE;
const BANDS = [
  { name: "唐", start: 618, end: 907, fill: "#EFD9C7" },
  { name: "五代", start: 907, end: 960, fill: "#E6DCC2" },
  { name: "北宋", start: 960, end: 1127, fill: "#DCE6D9" },
  { name: "南宋", start: 1127, end: 1279, fill: "#E6EDE2" },
  { name: "元", start: 1279, end: 1368, fill: "#E8E2D2" },
  { name: "明", start: 1368, end: 1644, fill: "#F0E4C8" },
  { name: "清", start: 1644, end: 1700, fill: "#E2DDE8" },
];
// start/end は史実の年。labelY で文字の重なりを避ける
const MARKERS = [
  { start: 629, end: 645, fact: "玄奘のインド旅", game: "黒神話：悟空", color: COLORS.vermilion },
  { start: 730, end: 745, fact: "鍾馗伝説（玄宗の夢）", game: "黒神話：鍾馗", color: COLORS.vermilion },
  { start: 936, end: 960, fact: "燕雲十六州の割譲〜宋の建国", game: "風燕伝", color: COLORS.jade },
  { start: 1592, end: 1592, fact: "小説『西遊記』刊行", game: "黒神話：悟空（原作）", color: COLORS.vermilion, labelY: -10 },
  { start: 1630, end: 1647, fact: "明末の四川・張献忠の乱", game: "明末：ウツロノハネ", color: COLORS.ink, labelY: 10 },
];

function EraMap() {
  const bandX = 34;
  const bandW = 36;
  const lineX = 92;
  const height = yOf(1700) + 56;
  return (
    <figure style={{ margin: 0, ...card, padding: "12px 8px" }}>
      <svg viewBox={`0 0 360 ${height}`} role="img" aria-labelledby="games-map-title" style={{ width: "100%", maxWidth: 440, display: "block", margin: "0 auto" }}>
        <title id="games-map-title">
          ゲームの舞台と元ネタの年代マップ。唐の玄奘の旅と鍾馗伝説、五代十国の燕雲十六州、明代の小説『西遊記』刊行、明末の四川を、それぞれのゲームと並べている
        </title>
        {BANDS.map((b) => (
          <g key={b.name}>
            <rect x={bandX} y={yOf(b.start)} width={bandW} height={(b.end - b.start) * SCALE} fill={b.fill} stroke="#FBF8F0" />
            <text x={bandX + bandW / 2} y={yOf((b.start + b.end) / 2) + 4} textAnchor="middle" fontSize={11} fontWeight={700} fill={COLORS.ink} style={{ fontFamily: serif }}>
              {b.name}
            </text>
          </g>
        ))}
        {[600, 800, 1000, 1200, 1400, 1600].map((y) => (
          <text key={y} x={bandX - 4} y={yOf(y) + 3.5} textAnchor="end" fontSize={9} fill={COLORS.gold} style={{ fontFamily: serif }}>
            {y}
          </text>
        ))}
        {MARKERS.map((m) => {
          const y1 = yOf(m.start);
          const y2 = Math.max(yOf(m.end), y1 + 3);
          const ly = (y1 + y2) / 2 + (m.labelY || 0);
          return (
            <g key={m.fact}>
              <rect x={bandX + bandW + 2} y={y1} width={6} height={y2 - y1} fill={m.color} />
              <line x1={bandX + bandW + 8} y1={(y1 + y2) / 2} x2={lineX} y2={ly} stroke={m.color} strokeWidth={1} />
              <text x={lineX + 4} y={ly - 2} fontSize={10.5} fontWeight={700} fill={COLORS.ink} style={{ fontFamily: serif }}>
                {m.game}
              </text>
              <text x={lineX + 4} y={ly + 10} fontSize={9.5} fill={COLORS.inkSoft} style={{ fontFamily: serif }}>
                {m.start === m.end ? m.start : `${m.start}〜${m.end}`}年　{m.fact}
              </text>
            </g>
          );
        })}
        <line x1={8} y1={height - 34} x2={352} y2={height - 34} stroke={COLORS.mist} />
        <text x={12} y={height - 16} fontSize={10.5} fontWeight={700} fill={COLORS.ink} style={{ fontFamily: serif }}>
          Phantom Blade Zero
        </text>
        <text x={136} y={height - 16} fontSize={9.5} fill={COLORS.inkSoft} style={{ fontFamily: serif }}>
          … 実在の時代ではない架空の武侠世界
        </text>
      </svg>
      <figcaption style={{ fontSize: 11, color: COLORS.inkSoft, textAlign: "center", marginTop: 6 }}>
        色の帯が史実の年代。『黒神話：悟空』は物語の時代（唐）と原作の成立（明）の両方に関わる
      </figcaption>
    </figure>
  );
}

const FAQ = [
  {
    q: "「武侠」とは何ですか？",
    a: "武術にすぐれた「侠客」が、国の法や権力の外にある「江湖」の世界で義のために戦う物語のジャンルです。『史記』の刺客・遊侠の記録や唐の伝奇小説、『水滸伝』などを源流に、20世紀の金庸・古龍の小説で現在の形になりました。日本の時代劇や忍者もののように、史実の時代を借りながら架空の英雄を描くのが特徴です。",
  },
  {
    q: "『黒神話：悟空』は西遊記を知らなくても楽しめますか？",
    a: "楽しめますが、物語は西遊記の後日談なので、原作のあらすじや妖怪の名前を知っているとボスの会話や演出の意味がよくわかります。孫悟空・猪八戒・牛魔王・紅孩児など主な登場人物と、火焔山などの名場面は「西遊記とは」のページで紹介しています。",
  },
  {
    q: "『風燕伝』（燕雲十六声）はどの時代が舞台ですか？",
    a: "10世紀、五代十国の終わりごろです。唐が滅んだ907年から宋が中国をほぼ再統一する979年までの乱世で、中国題の「燕雲」は、936年に後晋が契丹（遼）に譲った燕雲十六州から取られています。",
  },
  {
    q: "『Phantom Blade Zero』は実在の歴史に基づいていますか？",
    a: "いいえ。古代中国風の武侠と蒸気機関の技術をまぜた架空の世界が舞台で、特定の王朝や人物のモデルはありません。暗殺者や侠客を主人公にする武侠もののお約束を、現代のアクションゲームとして描いた作品です。",
  },
  {
    q: "最近、中国開発の歴史・神話ゲームが増えたのはなぜですか？",
    a: "中国ではこれまでスマートフォン向けやオンラインゲームが市場の中心でしたが、2024年の『黒神話：悟空』が世界的なヒットとなり、自国の神話や歴史を題材にした家庭用・PC向けの大作にも大きな需要があることが示されました。西遊記・武侠・明末など、国内では誰もが知っている題材が、海外のプレイヤーには新鮮な世界として受け入れられています。",
  },
];

export default function WuxiaGamesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    about: ["黒神話：悟空", "風燕伝", "燕雲十六声", "Phantom Blade Zero", "明末：ウツロノハネ", "黒神話：鍾馗", "武侠"],
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PATH}` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "中国発の武侠・神話ゲーム", item: `${SITE_URL}${PATH}` },
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

        <h1 style={{ fontFamily: serif, fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 6 }}>
          中国発の武侠・神話ゲームと元ネタの歴史
        </h1>
        <p style={{ fontFamily: serif, fontSize: 14, color: COLORS.gold, marginBottom: 14 }}>
          <RubyText text="黒神話：{{悟空|ごくう}}・{{風燕伝|ふうえんでん}}・Phantom Blade Zeroの時代背景" />
        </p>
        <p style={{ ...bodyText, fontSize: 13.5, marginBottom: 16 }}>
          <RubyText text="2024年の『黒神話：{{悟空|ごくう}}』の大ヒットをきっかけに、中国のゲーム会社が自国の歴史や神話、武侠を題材にした大作を次々と送り出しています。このページでは、近年話題になった5つの作品について、ゲームの内容と、舞台になった時代や元ネタの史実・伝説を紹介します。" />
        </p>
        <div style={{ ...card, padding: "12px 14px", marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: COLORS.gold, marginBottom: 6 }}>まとめ：元ネタは3タイプ</div>
          <div style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.ink }}>
            <RubyText text="①古典小説や伝説がもと（『黒神話：{{悟空|ごくう}}』『黒神話：{{鍾馗|しょうき}}』）、②実在の時代に架空の主人公を置く（『{{風燕伝|ふうえんでん}}』『明末』）、③時代を決めない架空の武侠世界（『Phantom Blade Zero』）。" />
          </div>
        </div>

        <nav aria-label="目次" className="p-4 mb-9" style={card}>
          <div style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>目次</div>
          <ol className="flex flex-col gap-1" style={{ fontSize: 12.5, listStyle: "decimal", paddingLeft: 20 }}>
            <li>
              <a href="#list" style={linkStyle}>作品一覧と舞台の時代</a>
            </li>
            <li>
              <a href="#map" style={linkStyle}>年代マップ</a>
            </li>
            {GAMES.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`} style={linkStyle}>
                  『<RubyText text={g.name} />』
                </a>
              </li>
            ))}
            <li>
              <a href="#faq" style={linkStyle}>よくある疑問</a>
            </li>
          </ol>
        </nav>

        <section style={{ marginBottom: 36 }}>
          <h2 id="list" style={sectionHeading}>作品一覧と舞台の時代</h2>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, minWidth: 480 }}>
              <thead>
                <tr>
                  {["作品", "発売", "舞台の時代", "元ネタ"].map((h) => (
                    <th key={h} style={thStyle}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {GAMES.map((g) => (
                  <tr key={g.id}>
                    <td style={{ ...tdStyle, color: COLORS.ink, fontWeight: 700, fontFamily: serif, minWidth: 120 }}>
                      <a href={`#${g.id}`} style={{ color: COLORS.ink, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                        <RubyText text={g.name} />
                      </a>
                    </td>
                    <td style={{ ...tdStyle, fontSize: 11.5, minWidth: 90 }}>
                      <RubyText text={g.release.replace(/／.*$/, "")} />
                    </td>
                    <td style={{ ...tdStyle, minWidth: 100 }}>
                      <RubyText text={g.era} />
                    </td>
                    <td style={tdStyle}>
                      <RubyText text={g.source} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 id="map" style={sectionHeading}>年代マップ：ゲームの元ネタはいつの時代？</h2>
          <EraMap />
        </section>

        {GAMES.map((g) => (
          <section key={g.id} style={{ marginBottom: 36 }}>
            <h2 id={g.id} style={{ ...sectionHeading, marginBottom: 4 }}>
              『<RubyText text={g.name} />』
            </h2>
            <div style={{ fontSize: 11.5, color: COLORS.gold, marginBottom: 12 }}>
              <RubyText text={g.en} />
            </div>
            <dl className="p-3 mb-3 grid gap-x-3 gap-y-1" style={{ ...card, borderLeft: `3px solid ${COLORS.vermilion}`, gridTemplateColumns: "auto 1fr", fontSize: 12 }}>
              {[
                ["開発", g.developer],
                ["発売", g.release],
                ["機種", g.platforms],
                ["舞台", g.era],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "contents" }}>
                  <dt style={{ fontWeight: 700, color: COLORS.ink, whiteSpace: "nowrap" }}>{k}</dt>
                  <dd style={{ color: COLORS.inkSoft }}>
                    <RubyText text={v} />
                  </dd>
                </div>
              ))}
            </dl>
            <p style={{ ...bodyText, marginBottom: 14 }}>
              <RubyText text={g.summary} />
            </p>
            <div className="flex flex-col gap-2.5">
              {g.points.map((p) => (
                <div key={p.title} className="p-3" style={card}>
                  <h3 style={{ fontFamily: serif, fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={p.title} />
                  </h3>
                  <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 4 }}>
                    <RubyText text={p.text} />
                  </p>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 12 }}>
              <span style={{ fontWeight: 700, color: COLORS.ink }}>史実をくわしく：</span>
              <ul className="flex flex-col gap-1 mt-1" style={{ paddingLeft: 18, listStyle: "disc" }}>
                {g.history.map((h) => (
                  <li key={h.href}>
                    <a href={h.href} style={linkStyle}>
                      <RubyText text={h.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section style={{ marginBottom: 36 }}>
          <h2 id="faq" style={sectionHeading}>よくある疑問</h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((f) => (
              <div key={f.q} style={{ ...card, padding: "14px 16px" }}>
                <h3 style={{ fontFamily: serif, fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                  <span style={{ color: COLORS.vermilion, marginRight: 6 }}>Q.</span>
                  <RubyText text={f.q} />
                </h3>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={f.a} />
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 10.5, color: COLORS.mist, marginTop: 12 }}>
            ※ 発売日・販売本数は2026年11月時点の公式発表・報道にもとづきます
          </p>
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            日本のゲーム会社が作った中国史ゲームや、ゲームの元になった物語もあわせてどうぞ。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/saiyuki" variant="solid">西遊記とは</NavButton>
            <NavButton href="/musou" variant="outline">ゲーム『真・<ruby>三國無双<rt>さんごくむそう</rt></ruby>』</NavButton>
            <NavButton href="/koei-sangokushi" variant="outline">ゲーム『<ruby>三國志<rt>さんごくし</rt></ruby>』シリーズ</NavButton>
            <NavButton href="/dramas" variant="outline">中国歴史ドラマの史実</NavButton>
          </div>
        </section>

        <RelatedEraGuides path={PATH} />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
