import { ERAS, stripRuby, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "日本史・中国史 対照年表";
const fullTitle = `日本史・中国史 対照年表 | ${SITE_NAME}`;
const description =
  "縄文時代から現代まで、中国の王朝の出来事と日本史の出来事を、実際の年代順に1本の年表として並べました。遣隋使・遣唐使、元寇、日明貿易、日清戦争など、日中の関わりが深い出来事もひと目で分かります。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/japan-china-timeline" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/japan-china-timeline" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

// 中国側は、このサイトの年表データから実際の出来事を引いてリンクを張る
function findEventHref(eraId, titleIncludes) {
  const era = ERAS.find((e) => e.id === eraId);
  if (!era) return null;
  const event = era.events.find((ev) => stripRuby(ev.title).includes(titleIncludes));
  return event ? `/events/${event.slug}` : null;
}

// sortYear: 紀元前はマイナスの数値。中国イベント（cn）と日本イベント（jp）を
// 実際の年代順に1本のリストへマージして表示する。
const CHINA_EVENTS = [
  { sortYear: -2070, yearLabel: "前2070年頃", event: "禹が夏を建国", era: "夏", href: findEventHref("xia", "禹による夏の建国") },
  { sortYear: -1600, yearLabel: "前1600年頃", event: "湯王が殷を建国", era: "殷", href: findEventHref("shang", "湯王による殷の建国") },
  { sortYear: -1046, yearLabel: "前1046年", event: "周が建国", era: "西周", href: findEventHref("westernzhou", "周の建国") },
  { sortYear: -771, yearLabel: "前771年", event: "犬戎の侵入・幽王の死（西周滅亡）", era: "西周", href: findEventHref("westernzhou", "幽王の死") },
  { sortYear: -551, yearLabel: "前551年", event: "{{孔子|こうし}}が生まれる", era: "春秋時代", href: findEventHref("chunqiu", "孔子の誕生") },
  { sortYear: -403, yearLabel: "前403年", event: "戦国時代がはじまる（三家分晋の公認）", era: "戦国時代", href: findEventHref("zhanguo", "三家分晋の公認") },
  { sortYear: -221, yearLabel: "前221年", event: "秦が中国を統一", era: "秦", href: findEventHref("qin", "中国統一") },
  { sortYear: -214, yearLabel: "前214年", event: "万里の長城を修築", era: "秦", href: findEventHref("qin", "万里の長城の修築") },
  { sortYear: -202, yearLabel: "前202年", event: "劉邦が漢を建国", era: "前漢", href: findEventHref("westernhan", "漢を建国") },
  { sortYear: -138, yearLabel: "前138年", event: "{{張騫|ちょうけん}}が西域へ（シルクロードの起点）", era: "前漢", href: findEventHref("westernhan", "西域へ") },
  { sortYear: 8, yearLabel: "8年", event: "{{王莽|おうもう}}が皇帝に即位（新の建国）", era: "新", href: findEventHref("xin", "皇帝に即位") },
  { sortYear: 25, yearLabel: "25年", event: "{{光武帝|こうぶてい}}が漢を再興（後漢はじまる）", era: "後漢", href: findEventHref("easternhan", "漢を再興") },
  { sortYear: 105, yearLabel: "105年", event: "{{蔡倫|さいりん}}が製紙法を改良", era: "後漢", href: findEventHref("easternhan", "製紙法の改良") },
  { sortYear: 184, yearLabel: "184年", event: "{{黄巾|こうきん}}の乱が起こる", era: "後漢", href: findEventHref("easternhan", "黄巾の乱") },
  { sortYear: 208, yearLabel: "208年", event: "{{赤壁|せきへき}}の戦い", era: "三国", href: findEventHref("sanguo", "赤壁の戦い") },
  { sortYear: 220, yearLabel: "220年", event: "魏が建国・後漢が滅亡", era: "三国", href: findEventHref("sanguo", "魏の建国") },
  { sortYear: 280, yearLabel: "280年", event: "西晋が中国を再統一", era: "西晋", href: findEventHref("westernjin", "中国再統一") },
  { sortYear: 316, yearLabel: "316年", event: "西晋が滅亡", era: "西晋", href: findEventHref("westernjin", "西晋の滅亡") },
  { sortYear: 383, yearLabel: "383年", event: "{{淝水|ひすい}}の戦い", era: "五胡十六国", href: findEventHref("sixteenkingdoms", "淝水") },
  { sortYear: 439, yearLabel: "439年", event: "北魏が華北を統一", era: "南北朝", href: findEventHref("nanbei", "華北統一") },
  { sortYear: 589, yearLabel: "589年", event: "隋が中国を再統一", era: "隋", href: findEventHref("sui", "陳を滅ぼし中国再統一") },
  { sortYear: 618, yearLabel: "618年", event: "唐が建国", era: "唐", href: findEventHref("tang", "唐の建国") },
  { sortYear: 626, yearLabel: "626年", event: "{{玄武門|げんぶもん}}の変・太宗が即位", era: "唐", href: findEventHref("tang", "玄武門") },
  { sortYear: 755, yearLabel: "755年", event: "安史の乱が起こる", era: "唐", href: findEventHref("tang", "安史の乱") },
  { sortYear: 907, yearLabel: "907年", event: "唐が滅亡", era: "五代十国", href: findEventHref("tang", "唐を簒奪") },
  { sortYear: 960, yearLabel: "960年", event: "趙匡胤が宋を建国", era: "北宋", href: findEventHref("northernsong", "宋の建国") },
  { sortYear: 1127, yearLabel: "1127年", event: "靖康の変・北宋が滅亡", era: "北宋", href: findEventHref("northernsong", "靖康の変") },
  { sortYear: 1271, yearLabel: "1271年", event: "クビライが元を建国", era: "元", href: findEventHref("yuan", "元の建国") },
  { sortYear: 1279, yearLabel: "1279年", event: "元が南宋を滅ぼし中国統一", era: "元", href: findEventHref("yuan", "南宋を滅ぼし中国統一") },
  { sortYear: 1368, yearLabel: "1368年", event: "朱元璋が明を建国", era: "明", href: findEventHref("ming", "明の建国") },
  { sortYear: 1405, yearLabel: "1405年", event: "{{鄭和|ていわ}}が南海大遠征を開始", era: "明", href: findEventHref("ming", "鄭和") },
  { sortYear: 1592, yearLabel: "1592年", event: "明が朝鮮に援軍を派遣（文禄の役）", era: "明", href: findEventHref("ming", "文禄・慶長の役への援軍") },
  { sortYear: 1644, yearLabel: "1644年", event: "清が北京に入城", era: "清", href: findEventHref("qing", "清の北京入城") },
  { sortYear: 1839, yearLabel: "1839年", event: "アヘン戦争が起こる", era: "清", href: findEventHref("qing", "アヘン戦争") },
  { sortYear: 1894, yearLabel: "1894年", event: "日清戦争が起こる", era: "清", href: findEventHref("qing", "日清戦争") },
  { sortYear: 1911, yearLabel: "1911年", event: "辛亥革命が起こる", era: "清（末期）", href: findEventHref("qing", "辛亥革命") },
  { sortYear: 1912, yearLabel: "1912年", event: "中華民国が成立", era: "中華民国", href: findEventHref("roc", "中華民国の成立") },
  { sortYear: 1931, yearLabel: "1931年", event: "満洲事変が起こる", era: "中華民国", href: findEventHref("roc", "満洲事変") },
  { sortYear: 1937, yearLabel: "1937年", event: "日中戦争が勃発", era: "中華民国", href: findEventHref("roc", "日中戦争の勃発") },
  { sortYear: 1949, yearLabel: "1949年", event: "中華人民共和国が建国", era: "中華人民共和国", href: findEventHref("prc", "中華人民共和国の建国") },
  { sortYear: 1978, yearLabel: "1978年", event: "改革開放政策が始まる", era: "中華人民共和国", href: findEventHref("prc", "改革開放") },
];

const JAPAN_EVENTS = [
  { sortYear: -14000, yearLabel: "前14000年頃", event: "縄文時代がはじまる", era: "縄文時代" },
  { sortYear: -300, yearLabel: "前300年頃", event: "稲作が広がり弥生時代がはじまる", era: "弥生時代" },
  { sortYear: 57, yearLabel: "57年", event: "後漢に朝貢し「{{漢委奴国王|かんのわのなのこくおう}}」の金印を授かる", era: "弥生時代" },
  { sortYear: 239, yearLabel: "239年", event: "{{卑弥呼|ひみこ}}が魏に遣使し「{{親魏倭王|しんぎわおう}}」の称号を得る", era: "弥生時代" },
  { sortYear: 300, yearLabel: "300年頃", event: "古墳時代がはじまる", era: "古墳時代" },
  { sortYear: 538, yearLabel: "538年頃", event: "百済から仏教が伝わる", era: "古墳時代" },
  { sortYear: 593, yearLabel: "593年", event: "{{聖徳太子|しょうとくたいし}}が摂政となり飛鳥時代がはじまる", era: "飛鳥時代" },
  { sortYear: 604, yearLabel: "604年", event: "十七条の憲法を制定", era: "飛鳥時代" },
  { sortYear: 607, yearLabel: "607年", event: "{{小野妹子|おののいもこ}}を遣隋使として派遣", era: "飛鳥時代" },
  { sortYear: 645, yearLabel: "645年", event: "大化の改新がはじまる", era: "飛鳥時代" },
  { sortYear: 663, yearLabel: "663年", event: "{{白村江|はくすきのえ}}の戦いで唐・新羅連合軍に敗れる", era: "飛鳥時代" },
  { sortYear: 701, yearLabel: "701年", event: "{{大宝律令|たいほうりつりょう}}を制定", era: "飛鳥時代" },
  { sortYear: 710, yearLabel: "710年", event: "{{平城京|へいじょうきょう}}に遷都し奈良時代がはじまる", era: "奈良時代" },
  { sortYear: 752, yearLabel: "752年", event: "東大寺の大仏が開眼", era: "奈良時代" },
  { sortYear: 794, yearLabel: "794年", event: "{{平安京|へいあんきょう}}に遷都し平安時代がはじまる", era: "平安時代" },
  { sortYear: 894, yearLabel: "894年", event: "遣唐使を廃止", era: "平安時代" },
  { sortYear: 1016, yearLabel: "1016年", event: "{{藤原道長|ふじわらのみちなが}}が摂政となる（摂関政治の全盛）", era: "平安時代" },
  { sortYear: 1159, yearLabel: "1159年", event: "{{平治|へいじ}}の乱に勝ち{{平清盛|たいらのきよもり}}が実権を握る", era: "平安時代" },
  { sortYear: 1185, yearLabel: "1185年", event: "鎌倉幕府が成立", era: "鎌倉時代" },
  { sortYear: 1274, yearLabel: "1274年", event: "{{元寇|げんこう}}（文永の役）が起こる", era: "鎌倉時代" },
  { sortYear: 1281, yearLabel: "1281年", event: "元寇（弘安の役）が起こる", era: "鎌倉時代" },
  { sortYear: 1333, yearLabel: "1333年", event: "鎌倉幕府が滅亡", era: "鎌倉時代" },
  { sortYear: 1336, yearLabel: "1336年", event: "室町幕府が成立", era: "室町時代" },
  { sortYear: 1404, yearLabel: "1404年", event: "{{勘合貿易|かんごうぼうえき}}（日明貿易）を開始", era: "室町時代" },
  { sortYear: 1467, yearLabel: "1467年", event: "{{応仁|おうにん}}の乱がはじまる", era: "室町時代" },
  { sortYear: 1543, yearLabel: "1543年", event: "鉄砲が伝わる", era: "室町時代" },
  { sortYear: 1573, yearLabel: "1573年", event: "室町幕府が滅亡（安土桃山時代はじまる）", era: "安土桃山時代" },
  { sortYear: 1590, yearLabel: "1590年", event: "{{豊臣秀吉|とよとみひでよし}}が天下統一", era: "安土桃山時代" },
  { sortYear: 1592, yearLabel: "1592年", event: "豊臣秀吉が朝鮮出兵（文禄の役）", era: "安土桃山時代" },
  { sortYear: 1600, yearLabel: "1600年", event: "{{関ヶ原|せきがはら}}の戦い", era: "安土桃山時代" },
  { sortYear: 1603, yearLabel: "1603年", event: "江戸幕府が成立", era: "江戸時代" },
  { sortYear: 1639, yearLabel: "1639年", event: "鎖国が完成", era: "江戸時代" },
  { sortYear: 1854, yearLabel: "1854年", event: "{{日米和親条約|にちべいわしんじょうやく}}を結び開国", era: "江戸時代" },
  { sortYear: 1868, yearLabel: "1868年", event: "明治維新が起こる", era: "明治時代" },
  { sortYear: 1894, yearLabel: "1894年", event: "{{日清戦争|にっしんせんそう}}が起こる", era: "明治時代" },
  { sortYear: 1904, yearLabel: "1904年", event: "{{日露戦争|にちろせんそう}}が起こる", era: "明治時代" },
  { sortYear: 1912, yearLabel: "1912年", event: "明治天皇が崩御し大正時代がはじまる", era: "大正時代" },
  { sortYear: 1923, yearLabel: "1923年", event: "{{関東大震災|かんとうだいしんさい}}が起こる", era: "大正時代" },
  { sortYear: 1931, yearLabel: "1931年", event: "満州事変が起こる", era: "昭和時代" },
  { sortYear: 1937, yearLabel: "1937年", event: "{{日中戦争|にっちゅうせんそう}}がはじまる", era: "昭和時代" },
  { sortYear: 1941, yearLabel: "1941年", event: "太平洋戦争がはじまる", era: "昭和時代" },
  { sortYear: 1945, yearLabel: "1945年", event: "日本が敗戦", era: "昭和時代" },
  { sortYear: 1972, yearLabel: "1972年", event: "日中国交正常化", era: "昭和時代" },
];

const TIMELINE = [
  ...CHINA_EVENTS.map((e) => ({ ...e, side: "cn" })),
  ...JAPAN_EVENTS.map((e) => ({ ...e, side: "jp" })),
].sort((a, b) => a.sortYear - b.sortYear);

function EntryContent({ entry }) {
  const isCn = entry.side === "cn";
  return (
    <div>
      <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 11, color: COLORS.gold }}>{entry.yearLabel}</div>
      {isCn && entry.href ? (
        <a
          href={entry.href}
          style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 13.5, fontWeight: 700, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
        >
          <RubyText text={entry.event} />
        </a>
      ) : (
        <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 13.5, fontWeight: 700, color: isCn ? COLORS.vermilion : COLORS.ink }}>
          <RubyText text={entry.event} />
        </div>
      )}
      <div style={{ fontSize: 10.5, color: COLORS.inkSoft, marginTop: 2 }}>{entry.era}</div>
    </div>
  );
}

export default function JapanChinaTimelinePage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          日本史・中国史 対照年表
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          日本と中国では時代区分の年代がそれぞれ異なるため、無理に時代同士を横並びにせず、中国の出来事と日本の出来事を実際の年代順に1本の年表として並べました。
          遣隋使や元寇のように、両国の出来事が近い時期に重なっていることも見えてきます。
        </p>

        <div className="flex items-center justify-center gap-4 mb-3" style={{ fontSize: 11, color: COLORS.inkSoft }}>
          <span style={{ color: COLORS.vermilion, fontWeight: 700 }}>← 中国</span>
          <span style={{ color: COLORS.mist }}>|</span>
          <span style={{ color: COLORS.ink, fontWeight: 700 }}>日本 →</span>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2" style={{ width: 2, backgroundColor: COLORS.mist, transform: "translateX(-50%)" }} />
          <div className="flex flex-col gap-5 relative">
            {TIMELINE.map((entry, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-1 text-right pr-4">{entry.side === "cn" && <EntryContent entry={entry} />}</div>
                <div className="shrink-0" style={{ width: 16 }} />
                <div className="flex-1 text-left pl-4">{entry.side === "jp" && <EntryContent entry={entry} />}</div>
              </div>
            ))}
          </div>
        </div>

        <section style={{ marginTop: 32 }}>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras" variant="solid">出来事一覧を見る</NavButton>
            <NavButton href="/mnemonics" variant="outline">王朝の覚え方を見る</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
