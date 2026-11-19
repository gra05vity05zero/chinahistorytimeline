import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { SealMark } from "@/components/Shared";
import { SITE_NAME_EN } from "@/lib/en";
import { EN_THEME_SECTIONS } from "@/components/en/EnMiscLinks";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";

const serif = { fontFamily: "var(--font-serif), serif" };
const title = "Chinese History by Theme";
const description =
  "In-depth guides to the big themes of Chinese history: the Great Wall, the Silk Road, the First Emperor, the Four Great Inventions, the imperial examinations, emperors, capitals and more.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/en/topics" },
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/topics", image: { title, seal: "題" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

export default function EnglishTopicsPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/en" style={{ color: COLORS.vermilion, ...serif, fontSize: 13 }}>
          ← Back to the timeline
        </Link>
        <h1 style={{ ...serif, fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14, lineHeight: 1.3 }}>{title}</h1>
        <p style={{ fontSize: 14, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 24 }}>
          Guides that cut across the eras, grouped by theme: study aids, people and dynasties, battles, historic sites, culture and literature, and Chinese history in dramas, manga and games.
        </p>
        <nav className="flex flex-wrap gap-x-4 gap-y-1.5 mb-8" style={{ fontSize: 13 }} aria-label="Themes">
          {EN_THEME_SECTIONS.map((s, i) => (
            <a key={s.title} href={`#theme-${i + 1}`} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
              {s.title}
            </a>
          ))}
        </nav>
        {EN_THEME_SECTIONS.map((s, i) => (
          <section key={s.title} id={`theme-${i + 1}`} style={{ marginBottom: 32, scrollMarginTop: 16 }}>
            <h2 style={{ ...serif, fontSize: 20, fontWeight: 900, color: COLORS.ink, marginBottom: 12, paddingBottom: 5, borderBottom: `1.5px solid ${COLORS.gold}` }}>{s.title}</h2>
            <div className="flex flex-col gap-2">
              {s.links.map((f) => (
                <Link key={f.href} href={f.href} className="flex items-center gap-3 px-4 py-3" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
                  {f.seal && <SealMark char={f.seal} />}
                  <div className="flex-1 min-w-0">
                    <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{f.title || f.label}</div>
                    {f.blurb && <div style={{ fontSize: 12.5, color: COLORS.inkSoft, lineHeight: 1.6 }}>{f.blurb}</div>}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
