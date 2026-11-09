import { ERAS, COLORS, SITE_NAME, SITE_URL, buildOpenGraph, buildTwitter } from "@/lib/data";
import { japaneseErasDuring, formatPeriodJa } from "@/lib/japanChinaTimeline";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { PrintButton } from "@/components/PrintButton";

const title = "印刷できる中国史年表（A4一枚・無料）｜王朝の流れ・都・出来事・同じ頃の日本";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "中国の歴代王朝をA4用紙1枚にまとめた、無料で印刷できる中国史年表。新石器時代から中華人民共和国までの25の時代について、期間・都・主な出来事・同じ頃の日本の時代を一覧にし、統一王朝と分裂時代を色分けしました。世界史の勉強や授業の配布資料に。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/printable-timeline" },
  openGraph: buildOpenGraph({
    title: fullTitle,
    description,
    path: "/printable-timeline",
    image: { title: "印刷できる中国史年表", subtitle: "A4一枚で王朝の流れがわかる", kicker: "年表", seal: "印" },
  }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

// 時代の種類：古代王朝・統一王朝・分裂（対立）時代
const KIND = {
  ancient: { label: "古代", color: "#8A7A5C", bg: "#F1EBDD" },
  unified: { label: "統一", color: "#A8322D", bg: "#F8E6E0" },
  divided: { label: "分裂", color: "#3D6B7A", bg: "#E2ECEE" },
};

// 印刷用にしぼった、時代ごとの都と主な出来事（ERASのidと対応）
const SHEET = {
  neolithic: { kind: "ancient", capital: "—", events: "{{河姆渡|かぼと}}文化の{{稲作|いなさく}}、{{仰韶|ぎょうしょう}}文化の{{彩陶|さいとう}}、{{竜山|りゅうざん}}文化の{{黒陶|こくとう}}" },
  xia: { kind: "ancient", capital: "（{{二里頭|にりとう}}か）", events: "{{禹|う}}が黄河を治め、王位の{{世襲|せしゅう}}が始まる（伝説の最初の王朝）" },
  shang: { kind: "ancient", capital: "{{殷墟|いんきょ}}（{{安陽|あんよう}}）", events: "{{甲骨文字|こうこつもじ}}・青銅器。前1046年、{{牧野|ぼくや}}の戦いで{{紂王|ちゅうおう}}が敗れる" },
  westernzhou: { kind: "ancient", capital: "{{鎬京|こうけい}}", events: "{{封建制|ほうけんせい}}と天命思想。前771年、{{犬戎|けんじゅう}}の{{侵入|しんにゅう}}で都が落ちる" },
  chunqiu: { kind: "divided", capital: "{{洛邑|らくゆう}}", events: "春秋の五{{覇|は}}が争う。{{孔子|こうし}}が{{儒教|じゅきょう}}を説く" },
  zhanguo: { kind: "divided", capital: "（七雄が{{割拠|かっきょ}}）", events: "戦国の七雄。諸子百家。前356年、{{商鞅|しょうおう}}の変法で{{秦|しん}}が強国に" },
  qin: { kind: "unified", capital: "{{咸陽|かんよう}}", events: "前221年、{{始皇帝|しこうてい}}が統一。文字・{{度量衡|どりょうこう}}の統一、万里の長城" },
  westernhan: { kind: "unified", capital: "{{長安|ちょうあん}}", events: "{{劉邦|りゅうほう}}が建国。{{武帝|ぶてい}}の時代に{{張騫|ちょうけん}}が西域へ。{{司馬遷|しばせん}}『史記』" },
  xin: { kind: "unified", capital: "{{常安|じょうあん}}（長安）", events: "{{王莽|おうもう}}が漢を{{奪|うば}}い復古的な改革。{{赤眉|せきび}}の乱で{{滅|ほろ}}ぶ" },
  easternhan: { kind: "unified", capital: "{{洛陽|らくよう}}", events: "{{光武帝|こうぶてい}}が漢を再興。105年、{{蔡倫|さいりん}}が紙を改良。184年、{{黄巾|こうきん}}の乱" },
  sanguo: { kind: "divided", capital: "{{洛陽|らくよう}}・{{成都|せいと}}・{{建業|けんぎょう}}", events: "{{魏|ぎ}}・{{蜀|しょく}}・{{呉|ご}}の三国が争う。239年、{{卑弥呼|ひみこ}}が{{魏|ぎ}}に使いを送る" },
  westernjin: { kind: "unified", capital: "{{洛陽|らくよう}}", events: "280年、{{司馬炎|しばえん}}が三国を統一。八王の乱で{{混乱|こんらん}}" },
  sixteenkingdoms: { kind: "divided", capital: "{{建康|けんこう}}（{{東晋|とうしん}}）", events: "{{五胡|ごこ}}が{{華北|かほく}}に国を建てる。383年、{{淝水|ひすい}}の戦い。{{王羲之|おうぎし}}" },
  nanbei: { kind: "divided", capital: "{{建康|けんこう}}・{{洛陽|らくよう}}など", events: "{{北魏|ほくぎ}}の{{孝文帝|こうぶんてい}}の漢化政策。{{雲崗|うんこう}}・{{竜門|りゅうもん}}石窟。倭の五王が{{遣使|けんし}}" },
  sui: { kind: "unified", capital: "{{大興城|だいこうじょう}}（長安）", events: "589年に統一。{{科挙|かきょ}}の始まり、大運河。607年、{{遣隋使|けんずいし}}" },
  tang: { kind: "unified", capital: "{{長安|ちょうあん}}", events: "{{貞観|じょうがん}}の治、{{武則天|ぶそくてん}}、{{遣唐使|けんとうし}}。755年、安史の乱" },
  wudai: { kind: "divided", capital: "{{開封|かいほう}}など", events: "華北で五つの王朝が{{交代|こうたい}}し、地方に十国が{{分立|ぶんりつ}}" },
  northernsong: { kind: "unified", capital: "{{開封|かいほう}}", events: "{{趙匡胤|ちょうきょういん}}の文治主義。{{殿試|でんし}}で{{科挙|かきょ}}が完成。1127年、{{靖康|せいこう}}の変" },
  southernsong: { kind: "divided", capital: "{{臨安|りんあん}}（{{杭州|こうしゅう}}）", events: "北の金と対立。{{岳飛|がくひ}}、{{朱子学|しゅしがく}}。1279年、{{崖山|がいざん}}の戦いで{{滅|ほろ}}ぶ" },
  yuan: { kind: "unified", capital: "{{大都|だいと}}（北京）", events: "クビライが中国を支配。元寇（1274・1281年）。マルコ・ポーロ" },
  ming: { kind: "unified", capital: "南京→北京", events: "{{洪武帝|こうぶてい}}が建国。{{永楽帝|えいらくてい}}と{{鄭和|ていわ}}の南海遠征。{{勘合|かんごう}}貿易" },
  qing: { kind: "unified", capital: "北京", events: "{{康熙|こうき}}・{{雍正|ようせい}}・{{乾隆|けんりゅう}}の{{盛世|せいせい}}。1840年アヘン戦争、1911年{{辛亥|しんがい}}革命" },
  roc: { kind: "divided", capital: "南京・北京", events: "{{孫文|そんぶん}}が建国。{{軍閥|ぐんばつ}}の{{割拠|かっきょ}}。1937年、日中戦争。国共内戦" },
  prc: { kind: "unified", capital: "北京", events: "1949年建国。1966年、文化大革命。1978年から改革開放" },
};

// 「飛鳥時代・奈良時代・平安時代」を「飛鳥・奈良・平安時代」と短くする（1行に収めるため）
function joinJapaneseEras(names) {
  if (names.length === 0) return "—";
  // 「{{江戸時代|えどじだい}}」のように時代ごとルビが付いたものは「{{江戸|えど}}時代」に直してから縮める
  names = names.map((n) => n.replace(/^\{\{(.+)時代\|(.+)じだい\}\}$/, "{{$1|$2}}時代"));
  const all = names.every((n) => n.endsWith("時代"));
  if (!all) return names.join("・");
  return names.map((n) => n.replace(/時代$/, "")).join("・") + "時代";
}

// 王朝の順番の語呂（/mnemonics と同じ並び）。印刷シートの下に色つきで並べる
const CHANT = [
  { text: "{{殷|いん}}", kind: "ancient" },
  { text: "{{周|しゅう}}", kind: "ancient" },
  { text: "{{秦|しん}}", kind: "unified" },
  { text: "{{漢|かん}}", kind: "unified" },
  { text: "{{三国|さんごく}}", kind: "divided" },
  { text: "{{晋|しん}}", kind: "unified" },
  { text: "{{南北朝|なんぼくちょう}}", kind: "divided" },
  { text: "{{隋|ずい}}", kind: "unified" },
  { text: "{{唐|とう}}", kind: "unified" },
  { text: "{{五代|ごだい}}", kind: "divided" },
  { text: "{{宋|そう}}", kind: "unified" },
  { text: "{{元|げん}}", kind: "unified" },
  { text: "{{明|みん}}", kind: "unified" },
  { text: "{{清|しん}}", kind: "unified" },
];

const ROWS = ERAS.filter((era) => SHEET[era.id]).map((era) => ({
  id: era.id,
  seal: era.seal,
  name: era.name,
  period: formatPeriodJa(era.period),
  japan: joinJapaneseEras(japaneseErasDuring(era.id)),
  ...SHEET[era.id],
}));

// 印刷時はシートだけを出す。ヘッダー・フッター・広告・画面用の説明は消す
const PRINT_CSS = `
@page { size: A4 portrait; margin: 7mm; }
@media print {
  html, body { background: #fff !important; }
  body > header, body > footer, .no-print, ins.adsbygoogle, iframe { display: none !important; }
  .print-page { padding: 0 !important; max-width: none !important; background: #fff !important; }
  .print-sheet { box-shadow: none !important; border: none !important; padding: 0 !important; width: auto !important; }
  .print-sheet * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .print-sheet tr { break-inside: avoid; }
}
.print-sheet rt { font-size: 0.5em; }
.print-sheet span[style*="background-color"] rt { color: #FFF; }
`;

const th = { padding: "3px 5px", textAlign: "left", fontWeight: 700, fontSize: 9.5, color: "#FFF", backgroundColor: COLORS.ink, whiteSpace: "nowrap" };
const td = { padding: "4.5px 5px", verticalAlign: "middle", borderBottom: "0.5px solid #D8CFB4", fontSize: 10.5, lineHeight: 1.5, color: COLORS.ink };

function Sheet() {
  return (
    <div
      className="print-sheet"
      style={{ backgroundColor: "#FFF", border: "1px solid #DCD3B8", boxShadow: "0 2px 10px rgba(0,0,0,0.08)", padding: "14px 14px 10px", minWidth: 680 }}
    >
      <div className="flex items-end justify-between" style={{ borderBottom: `2px solid ${COLORS.vermilion}`, paddingBottom: 4, marginBottom: 6 }}>
        <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 20, fontWeight: 900, color: COLORS.ink, letterSpacing: "0.05em" }}>
          中国史年表 <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.vermilion }}>王朝の流れと同じ頃の日本</span>
        </div>
        <div className="flex gap-2" style={{ fontSize: 9 }}>
          {Object.values(KIND).map((k) => (
            <span key={k.label} className="inline-flex items-center gap-1">
              <span style={{ display: "inline-block", width: 10, height: 10, backgroundColor: k.color }} />
              {k.label === "古代" ? "古代王朝" : k.label === "統一" ? "統一王朝" : "分裂・対立の時代"}
            </span>
          ))}
        </div>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
        <colgroup>
          <col style={{ width: "4%" }} />
          <col style={{ width: "14%" }} />
          <col style={{ width: "15.5%" }} />
          <col style={{ width: "13%" }} />
          <col style={{ width: "37.5%" }} />
          <col style={{ width: "16%" }} />
        </colgroup>
        <thead>
          <tr>
            <th style={th} />
            <th style={th}>王朝・時代</th>
            <th style={th}>期間</th>
            <th style={th}>都</th>
            <th style={th}>主な出来事</th>
            <th style={th}>同じ頃の日本</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => {
            const k = KIND[r.kind];
            return (
              <tr key={r.id} style={{ backgroundColor: k.bg }}>
                <td style={{ ...td, padding: "2px 0", textAlign: "center", backgroundColor: k.color }}>
                  <span style={{ fontFamily: "var(--font-serif), serif", fontWeight: 900, fontSize: 12.5, color: "#FFF" }}>{r.seal}</span>
                </td>
                <td style={{ ...td, fontFamily: "var(--font-serif), serif", fontWeight: 900, fontSize: 11.5 }}>
                  <RubyText text={r.name} />
                </td>
                <td style={{ ...td, fontSize: 10 }}>
                  <RubyText text={r.period} />
                </td>
                <td style={{ ...td, fontSize: 10 }}>
                  <RubyText text={r.capital} />
                </td>
                <td style={{ ...td, fontSize: 10 }}>
                  <RubyText text={r.events} />
                </td>
                <td style={{ ...td, fontSize: 10 }}>
                  <RubyText text={r.japan} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ marginTop: 10, border: "1px solid #D8CFB4", padding: "6px 8px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: COLORS.ink, marginBottom: 5 }}>
          王朝の順番の覚え方 <span style={{ fontWeight: 400, color: COLORS.inkSoft }}>— 童謡「うさぎとかめ」のリズムで唱える</span>
        </div>
        <div className="flex items-center flex-wrap" style={{ gap: 3 }}>
          {CHANT.map((c, i) => (
            <span key={i} className="inline-flex items-center" style={{ gap: 3 }}>
              <span
                style={{ fontFamily: "var(--font-serif), serif", fontWeight: 900, fontSize: 13, color: "#FFF", backgroundColor: KIND[c.kind].color, padding: "1px 6px" }}
              >
                <RubyText text={c.text} />
              </span>
              {i < CHANT.length - 1 && <span style={{ fontSize: 10, color: COLORS.inkSoft }}>→</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-x-3" style={{ marginTop: 5, fontSize: 8.5, color: COLORS.inkSoft, lineHeight: 1.5 }}>
        <span>
          <RubyText text="※期間は始まりと終わりの年の目安。{{五胡十六国|ごこじゅうろっこく}}・南北朝・{{南宋|なんそう}}などは並び立った国の代表で示す。" />
        </span>
        <span style={{ whiteSpace: "nowrap" }}>
          {SITE_NAME}　{SITE_URL.replace("https://", "")}
        </span>
      </div>
    </div>
  );
}

export default function PrintableTimelinePage() {
  return (
    <div className="print-page" style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />
      <div className="print-page max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="no-print">
          <BackToTopButton />
          <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
            印刷できる中国史年表（A4一枚）
          </h1>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 12 }}>
            <RubyText text="中国の歴代王朝を、A4用紙1枚にまとめた年表です。新石器時代から中華人民共和国までの25の時代について、期間・都・主な出来事・同じ頃の日本の時代を一覧にしました。{{秦|しん}}・漢・{{隋|ずい}}・唐のような統一王朝と、三国や南北朝のような分裂の時代を色で分けているので、「統一と分裂を{{繰|く}}り返す」中国史の流れがひと目でわかります。" />
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            下のボタンを押すと印刷画面が開きます。印刷先で「PDFに保存」を選べば、PDFファイルとして保存することもできます。個人の学習や、学校・塾の授業での配布には自由にお使いください。
          </p>
          <div style={{ marginBottom: 20 }}>
            <PrintButton />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Sheet />
        </div>

        <div className="no-print">
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginTop: 36, marginBottom: 10 }}>
            年表の使い方
          </h2>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 12 }}>
            <RubyText text="まず左の色の帯だけを上から{{追|お}}ってみてください。赤い統一王朝と青い分裂の時代が交互に現れ、{{秦|しん}}・漢の統一 → 三国・南北朝の分裂 → {{隋|ずい}}・唐の再統一 → 五代十国 → {{宋|そう}}・元・明・清、という大きな流れがつかめます。次に右端の「同じ頃の日本」を見ると、{{卑弥呼|ひみこ}}の使いが三国時代の{{魏|ぎ}}へ、{{遣隋使|けんずいし}}・{{遣唐使|けんとうし}}が飛鳥・奈良時代に送られたことなど、日本史とのつながりも確かめられます。" />
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            <RubyText text="それぞれの時代の詳しい解説は、下の時代一覧から読めます。王朝の順番を覚えるには、ゴロ合わせや歌も{{役立|やくだ}}ちます。" />
          </p>

          <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}>
            {ROWS.map((r) => (
              <a
                key={r.id}
                href={`/eras/${r.id}`}
                className="flex items-center gap-2 px-3 py-2 hover:opacity-90"
                style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", fontFamily: "var(--font-serif), serif", fontSize: 13, fontWeight: 700, color: COLORS.ink }}
              >
                <span style={{ display: "inline-block", width: 8, height: 8, backgroundColor: KIND[r.kind].color, flexShrink: 0 }} />
                <RubyText text={r.name} />
              </a>
            ))}
          </div>

          <section style={{ marginTop: 32 }}>
            <div className="flex items-center gap-2.5 flex-wrap">
              <NavButton href="/mnemonics" variant="solid">王朝の覚え方</NavButton>
              <NavButton href="/japan-china-timeline" variant="outline">日本史・中国史 対照年表</NavButton>
              <NavButton href="/year-mnemonics" variant="outline">年号ゴロ合わせ集</NavButton>
              <NavButton href="/quiz" variant="outline">中国史クイズ</NavButton>
            </div>
          </section>

          <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
            <MiscLinksSection />
          </div>
        </div>
      </div>
    </div>
  );
}
