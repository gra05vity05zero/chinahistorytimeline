import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { DYNASTIES_EN, RECORDS_EN } from "@/lib/en/emperorsData";
import { FeaturePage, cardStyle, serif } from "@/components/en/EnFeature";

const title = "List of Chinese Emperors: From Qin Shi Huang to Puyi";
const description =
  "Every emperor of China’s unified dynasties — plus the Three Kingdoms, Southern Dynasties and Five Dynasties — from Qin Shi Huang to Puyi, the Last Emperor, with reign dates, personal names and a short note on each.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/emperors", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/emperors", image: { title: "Emperors of China", seal: "帝" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const TOTAL = DYNASTIES_EN.reduce((n, d) => n + d.emperors.length, 0);

function EmperorRow({ e, i }) {
  return (
    <li className="px-3 py-2.5" style={{ borderTop: i === 0 ? "none" : "1px solid #E6DDC4", borderLeft: `3px solid ${e.star ? COLORS.vermilion : "transparent"}` }}>
      <div className="flex items-baseline justify-between gap-2 flex-wrap">
        <div className="flex items-baseline gap-1.5 flex-wrap min-w-0">
          <span style={{ fontSize: 11, color: COLORS.mist, ...serif, minWidth: 16 }}>{i + 1}</span>
          <span style={{ ...serif, fontSize: 15.5, fontWeight: 700, color: COLORS.ink }}>{e.name}</span>
          {e.alt && <span style={{ fontSize: 12, color: COLORS.gold, ...serif }}>{e.alt}</span>}
          {e.personal !== e.name && <span style={{ fontSize: 13, color: COLORS.inkSoft, ...serif }}>({e.personal})</span>}
          {e.star && <span aria-label="Especially famous" style={{ fontSize: 11, color: COLORS.vermilion }}>★</span>}
        </div>
        <span style={{ fontSize: 12, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>{e.reign}</span>
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 3, paddingLeft: 22 }}>
        {e.note}
        {e.person && (
          <>
            {" "}
            <Link href={e.person} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, whiteSpace: "nowrap" }}>Profile →</Link>
          </>
        )}
      </p>
    </li>
  );
}

function Header({ d }) {
  return (
    <div className="flex items-baseline justify-between gap-2 flex-wrap">
      <h2 style={{ ...serif, fontSize: 19, fontWeight: 900, color: COLORS.ink }}>{d.name}</h2>
      <span style={{ fontSize: 12, color: COLORS.gold, ...serif }}>{d.period} · {d.emperors.length} {d.emperors.length === 1 ? "ruler" : "rulers"}</span>
    </div>
  );
}

function Body({ d }) {
  return (
    <>
      <p style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 6 }}>{d.summary}</p>
      <div style={{ fontSize: 12, color: COLORS.vermilionSoft, marginTop: 4, marginBottom: 10 }}>
        Capital: {d.capital}
        <span style={{ color: COLORS.mist }}> | </span>
        <Link href={`/en/eras/${d.eraId}`} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>About this era</Link>
      </div>
      <ol style={cardStyle}>
        {d.emperors.map((e, i) => (
          <EmperorRow key={i} e={e} i={i} />
        ))}
      </ol>
    </>
  );
}

export default function EnglishEmperorsPage() {
  return (
    <FeaturePage
      title="Emperors of China"
      jaPath="/emperors"
      intro={`The title “emperor” was first taken by Qin Shi Huang in 221 BC and was handed down for about 2,100 years, until the Xuantong Emperor, Puyi, abdicated in 1912. Counting the rival states of the periods of division, there were around four hundred. This page introduces ${TOTAL} emperors of the unified dynasties, the Three Kingdoms, the Southern Dynasties and the Five Dynasties in order of reign, each with a short note. ★ marks especially famous emperors.`}
      related={[
        { href: "/en/qinshihuang", label: "Qin Shi Huang" },
        { href: "/en/women-rulers", label: "Women who ruled China" },
        { href: "/en/china-capitals", label: "Capitals of China" },
      ]}
    >
      <section className="p-4 mb-8" style={cardStyle}>
        <h2 style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink, marginBottom: 8 }}>How emperors are named</h2>
        <p style={{ fontSize: 13.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 8 }}>
          Chinese emperors are almost never called by their personal names, and the usual way of naming them changes with the period.
        </p>
        <ul style={{ fontSize: 13.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
          <li><b style={{ color: COLORS.ink }}>Han to Sui: posthumous names</b> — names given after death, such as Emperor Wu, Emperor Guangwu, Emperor Yang.</li>
          <li><b style={{ color: COLORS.ink }}>Tang to Yuan: temple names</b> — the names used in the ancestral temple, such as Taizong, Xuanzong, Huizong.</li>
          <li><b style={{ color: COLORS.ink }}>Ming and Qing: era names</b> — with one era name per reign, emperors are called by it, such as the Hongwu Emperor or the Kangxi Emperor.</li>
        </ul>
      </section>

      <nav aria-label="Dynasties" className="mb-10">
        <div style={{ ...serif, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", color: COLORS.gold, marginBottom: 8 }}>JUMP TO A DYNASTY</div>
        <div className="flex flex-wrap gap-1.5">
          {DYNASTIES_EN.map((d) => (
            <a key={d.id} href={`#${d.id}`} className="inline-flex items-center" style={{ ...serif, fontSize: 13, minHeight: 32, padding: "0 10px", color: d.split ? COLORS.inkSoft : COLORS.vermilion, border: `1px solid ${d.split ? COLORS.mist : COLORS.vermilion}`, backgroundColor: "#FBF8F0" }}>
              {d.name.replace(/\s*\(.*$/, "")}
            </a>
          ))}
        </div>
      </nav>

      <div className="flex flex-col gap-10">
        {DYNASTIES_EN.map((d) =>
          d.split ? (
            <details key={d.id} id={d.id} style={{ scrollMarginTop: 16 }}>
              <summary className="cursor-pointer" style={{ listStyle: "revert" }}>
                <div className="inline-block w-[calc(100%-1.5rem)] align-top"><Header d={d} /></div>
              </summary>
              <Body d={d} />
            </details>
          ) : (
            <section key={d.id} id={d.id} style={{ scrollMarginTop: 16 }}>
              <Header d={d} />
              <Body d={d} />
            </section>
          )
        )}
      </div>

      <section className="mt-12">
        <h2 style={{ ...serif, fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 12 }}>Imperial records</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {RECORDS_EN.map((r) => (
            <div key={r.label} className="p-3" style={cardStyle}>
              <div style={{ fontSize: 11.5, color: COLORS.gold, ...serif, fontWeight: 700 }}>{r.label}</div>
              <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, marginTop: 2 }}>{r.value}</div>
              <p style={{ fontSize: 12.5, lineHeight: 1.65, color: COLORS.inkSoft, marginTop: 4 }}>{r.note}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 14 }}>
          Even after the fall of the Qing, Yuan Shikai proclaimed a monarchy in 1915 as the “Hongxian Emperor,” but under opposition at home and abroad he cancelled it after just 83 days.
        </p>
      </section>
    </FeaturePage>
  );
}
