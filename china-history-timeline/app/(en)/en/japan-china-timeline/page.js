import Link from "next/link";
import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { ROWS_EN, ERA_CORRESPONDENCE_EN, CN_JUMPS_EN, JP_JUMPS_EN, hasAnchorEn } from "@/lib/en/japanChinaTimelineEn";
import { TimelineIcon } from "@/components/TimelineIcons";
import { FeaturePage, Section, cardStyle, serif } from "@/components/en/EnFeature";

const title = "Japan and China: A Comparative Timeline of Dynasties and Periods";
const description =
  "Which Japanese period lines up with each Chinese dynasty? The Tang ran alongside Japan’s Asuka to Heian periods, the Ming alongside Muromachi to Edo. A quick-reference table plus a single timeline of Chinese and Japanese events in date order.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/japan-china-timeline", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/japan-china-timeline", image: { title: "Japan and China: A Comparative Timeline", seal: "日" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const BAND = { cn: ["rgba(166, 51, 42, 0.06)", "rgba(166, 51, 42, 0.13)"], jp: ["rgba(62, 92, 78, 0.07)", "rgba(62, 92, 78, 0.15)"] };
const LINK = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

function bandStyle(side, row) {
  const i = row.band[side];
  if (i < 0) return {};
  const boundary = row.starts && row.entry.side === side && i > 0;
  return { backgroundColor: BAND[side][i % 2], borderTop: boundary ? `1px dashed ${COLORS.mist}` : undefined };
}

function Entry({ entry, isFirst }) {
  const cn = entry.side === "cn";
  return (
    <div>
      {entry.icon && <div style={{ marginBottom: 2 }}><TimelineIcon name={entry.icon} lang="en" /></div>}
      <div style={{ ...serif, fontSize: 13.5, fontWeight: 700, color: COLORS.gold }}>{entry.yearLabel}</div>
      {cn && entry.href ? (
        <Link href={entry.href} style={{ ...serif, fontSize: 13.5, fontWeight: 700, ...LINK }}>{entry.event}</Link>
      ) : (
        <div style={{ ...serif, fontSize: 13.5, fontWeight: 700, color: cn ? COLORS.vermilion : COLORS.ink }}>{entry.event}</div>
      )}
      <div style={{ fontSize: 10.5, color: COLORS.inkSoft, marginTop: 2 }}>
        {cn && !["paleolithic"].includes(entry.eraId) && entry.era !== "Age of legend" ? (
          <>
            <Link href={`/en/eras/${entry.eraId}`} style={LINK}>{entry.era}</Link>
            {isFirst && <><span style={{ color: COLORS.mist }}> · </span><Link href={`/en/people#${entry.eraId}`} style={LINK}>People</Link></>}
          </>
        ) : entry.era}
      </div>
      {entry.china && (
        <Link href={entry.china.href} className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5" style={{ fontSize: 11, color: COLORS.vermilion, ...cardStyle }}>
          <span aria-hidden>←</span><span>China: {entry.china.label}</span>
        </Link>
      )}
    </div>
  );
}

function Chips({ heading, jumps, side, color }) {
  return (
    <div className="flex items-baseline gap-2">
      <div className="shrink-0" style={{ fontSize: 11, fontWeight: 700, color, width: 44 }}>{heading}</div>
      <div className="flex flex-wrap gap-1.5">
        {jumps.filter((j) => hasAnchorEn(`${side}-${j.eraId}`)).map((j) => (
          <a key={j.eraId} href={`#${side}-${j.eraId}`} className="px-2 py-0.5" style={{ fontSize: 12, color, backgroundColor: "#fff", border: `1px solid ${COLORS.mist}` }}>{j.label}</a>
        ))}
      </div>
    </div>
  );
}

export default function EnglishJapanChinaTimelinePage() {
  const cell = { padding: "6px 6px", verticalAlign: "top" };
  return (
    <FeaturePage
      title="Japan and China: A Comparative Timeline"
      jaPath="/japan-china-timeline"
      intro="Japan and China divide their histories into periods that don’t line up neatly, so rather than forcing periods side by side, this page sets Chinese and Japanese events in a single line in date order — China on the left, Japan on the right. It shows at a glance how the two countries’ histories overlap, as with the envoys to the Sui or the Mongol invasions. The table first shows which Japanese periods ran alongside each Chinese dynasty."
      related={[
        { href: "/en/mnemonics", label: "How to remember the dynasties" },
        { href: "/en/printable-timeline", label: "Printable timeline" },
        { href: "/en/song-yuan-battles", label: "Song, Jin and Yuan battles (incl. the Mongol invasions)" },
      ]}
    >
      <Section title="Chinese dynasties and Japanese periods">
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, color: COLORS.inkSoft }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${COLORS.mist}`, textAlign: "left" }}>
                <th style={cell}>Chinese dynasty / period</th><th style={cell}>Dates</th><th style={cell}>Japan at the same time</th>
              </tr>
            </thead>
            <tbody>
              {ERA_CORRESPONDENCE_EN.map((r) => (
                <tr key={r.eraId} style={{ borderBottom: "1px solid #E6DEC6" }}>
                  <td style={{ ...cell, fontWeight: 700 }}><Link href={`/en/eras/${r.eraId}`} style={LINK}>{r.name}</Link></td>
                  <td style={{ ...cell, whiteSpace: "nowrap" }}>{r.period}</td>
                  <td style={cell}><a href={r.timelineHref} style={{ color: COLORS.ink }}>{r.japaneseEras.join(", ")}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <nav id="era-jump" aria-label="Jump to a period" className="px-3 py-3 mb-6 flex flex-col gap-2" style={{ ...cardStyle, scrollMarginTop: 16 }}>
        <div style={{ ...serif, fontSize: 12, fontWeight: 700, color: COLORS.gold, letterSpacing: "0.1em" }}>JUMP TO A PERIOD</div>
        <Chips heading="China" jumps={CN_JUMPS_EN} side="cn" color={COLORS.vermilion} />
        <Chips heading="Japan" jumps={JP_JUMPS_EN} side="jp" color={COLORS.ink} />
      </nav>

      <div className="flex items-center justify-center gap-4 mb-3" style={{ fontSize: 11, color: COLORS.inkSoft }}>
        <span style={{ color: COLORS.vermilion, fontWeight: 700 }}>← China</span>
        <span style={{ color: COLORS.mist }}>|</span>
        <span style={{ color: COLORS.ink, fontWeight: 700 }}>Japan →</span>
      </div>
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-1/2" style={{ width: 2, backgroundColor: COLORS.mist, transform: "translateX(-50%)" }} />
        <div className="flex flex-col relative">
          {ROWS_EN.map((row, i) => (
            <div key={i} id={row.anchorId || undefined} className="flex items-stretch" style={{ scrollMarginTop: 16 }}>
              <div className="flex-1 text-right pr-4 pl-2 py-2.5" style={bandStyle("cn", row)}>
                {row.entry.side === "cn" && <Entry entry={row.entry} isFirst={!!row.anchorId} />}
              </div>
              <div className="shrink-0" style={{ width: 16 }} />
              <div className="flex-1 text-left pl-4 pr-2 py-2.5" style={bandStyle("jp", row)}>
                {row.entry.side === "jp" && <Entry entry={row.entry} isFirst={!!row.anchorId} />}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p style={{ marginTop: 20, fontSize: 13 }}><a href="#era-jump" style={LINK}>↑ Choose another period</a></p>
    </FeaturePage>
  );
}
