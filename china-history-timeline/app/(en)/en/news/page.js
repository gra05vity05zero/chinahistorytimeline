import Link from "next/link";
import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { getNewsEn, formatNewsDateEn } from "@/lib/en/news";
import { FeaturePage, cardStyle, serif } from "@/components/en/EnFeature";

const title = "Chinese History and Archaeology News: Excavations, Discoveries and Cultural Heritage";
const description = "News on Chinese history: excavations of ancient sites, new archaeological discoveries, and cultural heritage and museums — summarized with sources and links to the related eras.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/news", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/news" }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const link = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

export default function EnglishNewsPage() {
  const news = getNewsEn();
  return (
    <FeaturePage
      title="Chinese History News"
      jaPath="/news"
      intro="News on excavations of ancient sites in China, new archaeological discoveries and cultural heritage, summarized newest first. See each item’s source for the full story. (The Japanese news page is updated more often.)"
      related={[{ href: "/en/world-heritage", label: "UNESCO World Heritage Sites in China" }]}
    >
      <ul className="flex flex-col gap-2.5">
        {news.map((item) => (
          <li key={item.id} id={item.id} style={{ ...cardStyle, padding: "12px 14px", scrollMarginTop: 16 }}>
            <div style={{ fontSize: 12, color: COLORS.gold, ...serif }}><time dateTime={item.date}>{formatNewsDateEn(item.date)}</time></div>
            <h2 style={{ ...serif, fontSize: 16, fontWeight: 700, lineHeight: 1.6, color: COLORS.ink, marginTop: 2 }}>{item.title}</h2>
            <p style={{ fontSize: 13.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 6 }}>{item.summary}</p>
            {item.related.length > 0 && (
              <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ fontSize: 12.5, marginTop: 8 }}>
                {item.related.map((r) => <Link key={r.href} href={r.href} style={link}>{r.label} →</Link>)}
              </div>
            )}
            <div style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 6 }}>
              Source: <a href={item.url} target="_blank" rel="noopener noreferrer nofollow" style={link}>{item.source}</a>
            </div>
          </li>
        ))}
      </ul>
    </FeaturePage>
  );
}
