import Link from "next/link";
import { COLORS, SITE_URL } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, ERAS_EN } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { ERA_CORRESPONDENCE_EN } from "@/lib/en/japanChinaTimelineEn";
import { PrintButton } from "@/components/PrintButton";

const title = "Printable Timeline of Chinese Dynasties (One A4 Page, Free)";
const description =
  "A free, printable one-page timeline of the Chinese dynasties: 25 periods from the Neolithic to the People’s Republic with their dates, capitals, main events and the Japanese period at the same time, color-coded into unified dynasties and ages of division.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/printable-timeline", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/printable-timeline", image: { title: "Printable Timeline of Chinese Dynasties", subtitle: "One A4 page", seal: "印" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const KIND = {
  ancient: { label: "Ancient dynasties", color: "#8A7A5C", bg: "#F1EBDD" },
  unified: { label: "Unified dynasties", color: "#A8322D", bg: "#F8E6E0" },
  divided: { label: "Ages of division", color: "#3D6B7A", bg: "#E2ECEE" },
};

const SHEET = {
  neolithic: { kind: "ancient", capital: "—", events: "Rice farming at Hemudu, Yangshao painted pottery, Longshan black pottery" },
  xia: { kind: "ancient", capital: "(Erlitou?)", events: "Yu tames the Yellow River; hereditary kingship begins (the first, legendary dynasty)" },
  shang: { kind: "ancient", capital: "Yinxu (Anyang)", events: "Oracle-bone script and bronzes. King Zhou defeated at Muye, 1046 BC" },
  westernzhou: { kind: "ancient", capital: "Haojing", events: "Fengjian and the Mandate of Heaven. The capital falls to the Quanrong, 771 BC" },
  chunqiu: { kind: "divided", capital: "Luoyi", events: "The Five Hegemons contend. Confucius teaches" },
  zhanguo: { kind: "divided", capital: "(Seven rival states)", events: "The Seven Warring States; the Hundred Schools. Shang Yang’s reforms make Qin strong, 356 BC" },
  qin: { kind: "unified", capital: "Xianyang", events: "The First Emperor unifies China, 221 BC. Standard script and measures; the Great Wall" },
  westernhan: { kind: "unified", capital: "Chang’an", events: "Founded by Liu Bang. Zhang Qian goes west under Emperor Wu. Sima Qian’s Records" },
  xin: { kind: "unified", capital: "Chang’an", events: "Wang Mang usurps the Han and attempts archaizing reforms; falls to the Red Eyebrows" },
  easternhan: { kind: "unified", capital: "Luoyang", events: "Emperor Guangwu restores the Han. Cai Lun improves paper, 105. Yellow Turbans, 184" },
  sanguo: { kind: "divided", capital: "Luoyang, Chengdu, Jianye", events: "Wei, Shu and Wu contend. Himiko sends envoys to Wei, 239" },
  westernjin: { kind: "unified", capital: "Luoyang", events: "Sima Yan unifies the Three Kingdoms, 280. The War of the Eight Princes" },
  sixteenkingdoms: { kind: "divided", capital: "Jiankang (Eastern Jin)", events: "Northern peoples found states in the north. Battle of the Fei River, 383. Wang Xizhi" },
  nanbei: { kind: "divided", capital: "Jiankang, Luoyang, etc.", events: "Emperor Xiaowen’s sinicization. Yungang and Longmen grottoes. Envoys of the Five Kings of Wa" },
  sui: { kind: "unified", capital: "Daxing (Chang’an)", events: "Unification, 589. The examinations begin; the Grand Canal. Japanese envoys, 607" },
  tang: { kind: "unified", capital: "Chang’an", events: "The Zhenguan reign, Wu Zetian, Japanese embassies. An Lushan Rebellion, 755" },
  wudai: { kind: "divided", capital: "Kaifeng, etc.", events: "Five dynasties succeed one another in the north; ten kingdoms in the provinces" },
  northernsong: { kind: "unified", capital: "Kaifeng", events: "Zhao Kuangyin’s civil rule; the palace examination completes the keju. Jingkang Incident, 1127" },
  southernsong: { kind: "divided", capital: "Lin’an (Hangzhou)", events: "Rivalry with the Jin in the north. Yue Fei; Neo-Confucianism. Falls at Yamen, 1279" },
  yuan: { kind: "unified", capital: "Dadu (Beijing)", events: "Khubilai rules China. Mongol invasions of Japan (1274, 1281). Marco Polo" },
  ming: { kind: "unified", capital: "Nanjing → Beijing", events: "Founded by the Hongwu Emperor. The Yongle Emperor and Zheng He’s voyages. Tally trade with Japan" },
  qing: { kind: "unified", capital: "Beijing", events: "The Kangxi–Yongzheng–Qianlong golden age. Opium War, 1840; 1911 Revolution" },
  roc: { kind: "divided", capital: "Nanjing, Beijing", events: "Founded by Sun Yat-sen. Warlords. War with Japan, 1937. Civil war" },
  prc: { kind: "unified", capital: "Beijing", events: "Founded 1949. Cultural Revolution, 1966. Reform and opening up from 1978" },
};

const CHANT = [["Shang", "ancient"], ["Zhou", "ancient"], ["Qin", "unified"], ["Han", "unified"], ["Three Kingdoms", "divided"], ["Jin", "unified"], ["N. & S. Dynasties", "divided"], ["Sui", "unified"], ["Tang", "unified"], ["Five Dynasties", "divided"], ["Song", "unified"], ["Yuan", "unified"], ["Ming", "unified"], ["Qing", "unified"]];

const ROWS = ERAS_EN.filter((era) => SHEET[era.id]).map((era) => {
  const corr = ERA_CORRESPONDENCE_EN.find((c) => c.eraId === era.id);
  return { id: era.id, seal: era.seal, name: era.name, period: corr?.period, japan: corr?.japaneseEras.join(", ") || "", ...SHEET[era.id] };
});

const PRINT_CSS = `
@page { size: A4 portrait; margin: 7mm; }
@media print {
  html, body { background: #fff !important; }
  body > header, body > footer, header, footer, .no-print, ins.adsbygoogle, iframe { display: none !important; }
  .print-page { padding: 0 !important; max-width: none !important; background: #fff !important; }
  .print-sheet { box-shadow: none !important; border: none !important; padding: 0 !important; width: auto !important; }
  .print-sheet * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .print-sheet tr { break-inside: avoid; }
}`;

const serif = { fontFamily: "var(--font-serif), serif" };
const th = { padding: "3px 5px", textAlign: "left", fontWeight: 700, fontSize: 9.5, color: "#FFF", backgroundColor: COLORS.ink, whiteSpace: "nowrap" };
const td = { padding: "4.5px 5px", verticalAlign: "middle", borderBottom: "0.5px solid #D8CFB4", fontSize: 10, lineHeight: 1.45, color: COLORS.ink };

function Sheet() {
  return (
    <div className="print-sheet" style={{ backgroundColor: "#FFF", border: "1px solid #DCD3B8", boxShadow: "0 2px 10px rgba(0,0,0,0.08)", padding: "14px 14px 10px", minWidth: 680 }}>
      <div className="flex items-end justify-between" style={{ borderBottom: `2px solid ${COLORS.vermilion}`, paddingBottom: 4, marginBottom: 6 }}>
        <div style={{ ...serif, fontSize: 19, fontWeight: 900, color: COLORS.ink }}>
          Chinese Dynasties <span style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.vermilion }}>with the Japanese period at the same time</span>
        </div>
        <div className="flex gap-2" style={{ fontSize: 9 }}>
          {Object.values(KIND).map((k) => (
            <span key={k.label} className="inline-flex items-center gap-1"><span style={{ display: "inline-block", width: 10, height: 10, backgroundColor: k.color }} />{k.label}</span>
          ))}
        </div>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
        <colgroup>
          <col style={{ width: "4%" }} /><col style={{ width: "15%" }} /><col style={{ width: "14.5%" }} /><col style={{ width: "13%" }} /><col style={{ width: "38.5%" }} /><col style={{ width: "15%" }} />
        </colgroup>
        <thead>
          <tr><th style={th} /><th style={th}>Dynasty / period</th><th style={th}>Dates</th><th style={th}>Capital</th><th style={th}>Main events</th><th style={th}>Japan</th></tr>
        </thead>
        <tbody>
          {ROWS.map((r) => {
            const k = KIND[r.kind];
            return (
              <tr key={r.id} style={{ backgroundColor: k.bg }}>
                <td style={{ ...td, padding: "2px 0", textAlign: "center", backgroundColor: k.color }}><span style={{ ...serif, fontWeight: 900, fontSize: 12.5, color: "#FFF" }}>{r.seal}</span></td>
                <td style={{ ...td, ...serif, fontWeight: 900, fontSize: 11 }}>{r.name}</td>
                <td style={td}>{r.period}</td>
                <td style={td}>{r.capital}</td>
                <td style={td}>{r.events}</td>
                <td style={td}>{r.japan}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ marginTop: 10, border: "1px solid #D8CFB4", padding: "6px 8px" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: COLORS.ink, marginBottom: 5 }}>The order of the dynasties <span style={{ fontWeight: 400, color: COLORS.inkSoft }}>— try singing it to “Frère Jacques”</span></div>
        <div className="flex items-center flex-wrap" style={{ gap: 3 }}>
          {CHANT.map(([t, kind], i) => (
            <span key={t} className="inline-flex items-center" style={{ gap: 3 }}>
              <span style={{ ...serif, fontWeight: 900, fontSize: 12, color: "#FFF", backgroundColor: KIND[kind].color, padding: "1px 6px" }}>{t}</span>
              {i < CHANT.length - 1 && <span style={{ fontSize: 10, color: COLORS.inkSoft }}>→</span>}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-x-3" style={{ marginTop: 5, fontSize: 8.5, color: COLORS.inkSoft }}>
        <span>Dates are approximate start and end years. The Sixteen Kingdoms, Northern and Southern Dynasties and Southern Song are shown by their representative states.</span>
        <span style={{ whiteSpace: "nowrap" }}>{SITE_NAME_EN}　{SITE_URL.replace("https://", "")}/en</span>
      </div>
    </div>
  );
}

export default function EnglishPrintableTimelinePage() {
  return (
    <div className="print-page" style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />
      <div className="print-page max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="no-print">
          <div className="flex justify-between flex-wrap gap-2" style={{ fontSize: 13 }}>
            <Link href="/en" style={{ color: COLORS.vermilion }}>← Timeline</Link>
            <Link href="/printable-timeline" hrefLang="ja" style={{ color: COLORS.vermilion }}>日本語で読む</Link>
          </div>
          <h1 style={{ ...serif, fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>Printable Timeline of Chinese Dynasties</h1>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 12 }}>
            The Chinese dynasties on a single A4 page: 25 periods from the Neolithic to the People’s Republic, with their dates, capitals, main events and the Japanese period at the same time. Unified dynasties such as the Qin, Han, Sui and Tang are colored differently from ages of division such as the Three Kingdoms and the Northern and Southern Dynasties, so the rhythm of Chinese history — unity and division, again and again — shows at a glance.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 16 }}>
            The button below opens your browser’s print dialog; choose “Save as PDF” to keep a PDF copy. Feel free to use it for personal study or to hand out in class.
          </p>
          <div style={{ marginBottom: 20 }}><PrintButton label="Print this timeline" /></div>
        </div>
        <div className="overflow-x-auto"><Sheet /></div>
        <div className="no-print">
          <h2 style={{ ...serif, fontSize: 19, fontWeight: 900, color: COLORS.ink, marginTop: 36, marginBottom: 10 }}>How to use it</h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 16 }}>
            First follow just the colored band on the left from top to bottom. Red unified dynasties and blue ages of division alternate: unification under the Qin and Han → division in the Three Kingdoms and Northern and Southern Dynasties → reunification under the Sui and Tang → the Five Dynasties → Song, Yuan, Ming and Qing. Then look at the Japan column on the right to see the links with Japanese history — Himiko’s envoys to Wei in the Three Kingdoms, or Japan’s embassies to the Sui and Tang in the Asuka and Nara periods.
          </p>
          <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}>
            {ROWS.map((r) => (
              <Link key={r.id} href={`/en/eras/${r.id}`} className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", ...serif, fontSize: 13, fontWeight: 700, color: COLORS.ink }}>
                <span style={{ display: "inline-block", width: 8, height: 8, backgroundColor: KIND[r.kind].color, flexShrink: 0 }} />{r.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap" style={{ fontSize: 13, marginTop: 20 }}>
            <Link href="/en/mnemonics" style={{ color: COLORS.vermilion }}>How to remember the dynasties →</Link>
            <Link href="/en/japan-china-timeline" style={{ color: COLORS.vermilion }}>Japan and China: a comparative timeline →</Link>
            <Link href="/en/quiz" style={{ color: COLORS.vermilion }}>Chinese history quiz →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
