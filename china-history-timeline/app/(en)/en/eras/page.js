import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { SealMark } from "@/components/Shared";
import { ERAS_EN, SITE_NAME_EN, displayPeriodEn, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";

const title = "Chinese Dynasties and Eras: A Complete List";
const description =
  "Every dynasty and period of Chinese history from the Neolithic to the People’s Republic, in order — with dates, an introduction to each era and its key events and people.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/eras", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/eras", image: { title: "Chinese Dynasties and Eras", seal: "代" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

export default function EnglishErasPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/en" style={{ color: COLORS.vermilion, fontFamily: "var(--font-serif), serif", fontSize: 13 }}>
          ← Back to the timeline
        </Link>
        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14, lineHeight: 1.3 }}>
          Chinese Dynasties and Eras
        </h1>
        <p style={{ fontSize: 14, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 24 }}>
          Each page introduces one dynasty or period and walks through its key events and people. Choose an era to begin.
        </p>

        <div className="flex flex-col gap-2">
          {ERAS_EN.map((era) => (
            <Link
              key={era.id}
              href={`/en/eras/${era.id}`}
              className="flex items-center gap-3 px-4 py-3"
              style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}
            >
              <SealMark char={era.seal} />
              <div className="flex-1 min-w-0">
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{era.name}</div>
                <div style={{ fontSize: 11.5, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>{displayPeriodEn(era.period)}</div>
              </div>
              <div style={{ fontSize: 11, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>
                {era.events.length} events
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
