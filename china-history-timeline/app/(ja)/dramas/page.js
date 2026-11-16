import Link from "next/link";
import { ERAS, COLORS, SITE_URL, SITE_NAME, stripRuby, buildOpenGraph, buildTwitter } from "@/lib/data";
import { getSortedDramas, toDramaCard } from "@/lib/dramas";
import { BackToTopButton, MiscLinksSection } from "@/components/Shared";
import DramaHub from "@/components/DramaHub";

const title = "中国歴史ドラマを時代順に解説｜史実との違い・実在モデル";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "中国の歴史ドラマを、描かれる時代の順に並べて解説。主人公や登場人物は実在したのか、史実との違いはどこか、史実での「その後」はどうなったのかを、作品ごとに史実度の目安つきで紹介します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/dramas" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/dramas", image: { title: "中国歴史ドラマを時代順に解説", subtitle: "史実との違い・実在モデル" } }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

export default function DramasPage() {
  const dramas = getSortedDramas().map(toDramaCard);
  // 作品が少ないうちは、作品のない時代を出さない
  const eras = ERAS.filter((era) => dramas.some((d) => d.eraIds.includes(era.id))).map((era) => ({
    id: era.id,
    name: era.name,
    period: era.period,
  }));

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "中国歴史ドラマ", item: `${SITE_URL}/dramas` },
    ],
  };
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: dramas.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `『${stripRuby(d.title)}』`,
      url: `${SITE_URL}/dramas/${d.slug}`,
    })),
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <BackToTopButton />
          <Link href="/eras" style={{ color: COLORS.vermilion, fontSize: 13 }}>
            時代一覧へ →
          </Link>
        </div>

        <h1 className="mt-6" style={{ fontFamily: "var(--font-serif), serif", fontSize: 24, fontWeight: 900, color: COLORS.ink, lineHeight: 1.6 }}>
          中国歴史ドラマを時代順に解説｜史実との違い・実在モデル
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginTop: 10 }}>
          中国の歴史ドラマを、作中で描かれる時代の古い順に並べました。主人公や登場人物は実在したのか、どこが史実と違うのか、史実ではその後どうなったのかを作品ごとに解説しています。各作品から、同じ時代の出来事や時代解説のページにも進めます。
        </p>

        <DramaHub eras={eras} dramas={dramas} />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
