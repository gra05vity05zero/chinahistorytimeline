import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { SealMark } from "@/components/Shared";
import { SITE_NAME_EN } from "@/lib/en";
import { EN_ARTICLE_CATEGORIES } from "@/lib/en/articles";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";

const serif = { fontFamily: "var(--font-serif), serif" };
const title = "All Articles on Chinese History, by Theme";
const description =
  "Every guide on this site, grouped by purpose: eras, people, wars and battle maps, maps and historic places, culture and literature, study aids, and Chinese history in dramas, manga and games.";

export const metadata = {
  title,
  description,
  // The Japanese article list lives at /articles (different path, so the pair is declared here)
  alternates: { canonical: "/en/topics", languages: { ja: "/articles", en: "/en/topics", "x-default": "/en/topics" } },
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
        <h1 style={{ ...serif, fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14, lineHeight: 1.3 }}>All Articles</h1>
        <p style={{ fontSize: 14, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 24 }}>
          Every guide on this site, grouped into {EN_ARTICLE_CATEGORIES.length} categories. For the story of each period start with “Learn by Era”; for individual events, use the timeline on the top page.
        </p>
        <nav className="flex flex-wrap gap-x-4 gap-y-1.5 mb-8" style={{ fontSize: 13 }} aria-label="Themes">
          {EN_ARTICLE_CATEGORIES.map((s) => (
            <a key={s.id} href={`#${s.id}`} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
              {s.title}
            </a>
          ))}
        </nav>
        {EN_ARTICLE_CATEGORIES.map((s) => (
          <section key={s.id} id={s.id} style={{ marginBottom: 32, scrollMarginTop: 16 }}>
            <h2 style={{ ...serif, fontSize: 20, fontWeight: 900, color: COLORS.ink, paddingBottom: 5, borderBottom: `1.5px solid ${COLORS.gold}` }}>
              {s.title}
              <span style={{ fontSize: 12, fontWeight: 400, color: COLORS.inkSoft, marginLeft: 8 }}>{s.links.length} articles</span>
            </h2>
            <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 6, marginBottom: 12 }}>{s.desc}</p>
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
