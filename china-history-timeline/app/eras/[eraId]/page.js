import Link from "next/link";
import { notFound } from "next/navigation";
import { ERAS, ERA_ALIASES, COLORS, SITE_URL, buildOpenGraph, buildTwitter } from "@/lib/data";
import { SealMark, EventListItem } from "@/components/Shared";

export function generateStaticParams() {
  return ERAS.map((era) => ({ eraId: era.id }));
}

export function generateMetadata({ params }) {
  const era = ERAS.find((e) => e.id === params.eraId);
  if (!era) return {};
  const alias = ERA_ALIASES[era.id];
  const title = `${era.name}の出来事一覧${alias ? `（${alias}）` : ""}`;
  const description = `${era.name}（${era.period}）に起きた出来事を年表順にまとめて紹介します。${
    alias ? `${alias}` : era.name
  }の歴史について知りたい方はこちら。`;
  const path = `/eras/${era.id}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: buildOpenGraph({ title, description, path }),
    twitter: buildTwitter({ title, description }),
  };
}

export default function EraEventsPage({ params }) {
  const era = ERAS.find((e) => e.id === params.eraId);
  if (!era) notFound();
  const alias = ERA_ALIASES[era.id];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "王朝・時代別の出来事一覧", item: `${SITE_URL}/eras` },
      { "@type": "ListItem", position: 3, name: era.name, item: `${SITE_URL}/eras/${era.id}` },
    ],
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="max-w-2xl mx-auto px-6 py-10">
        <Link href="/eras" style={{ color: COLORS.vermilion, fontSize: 13 }}>
          ← 出来事一覧トップへ
        </Link>

        <div className="flex items-center gap-3 mt-5 mb-4">
          <SealMark char={era.seal} active />
          <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>{era.period}</div>
        </div>

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 24, fontWeight: 900, color: COLORS.ink }}>
          {era.name}の出来事一覧
          {alias && (
            <span style={{ fontSize: 13, color: COLORS.inkSoft, fontWeight: 400, marginLeft: 8 }}>（{alias}）</span>
          )}
        </h1>

        {era.description && (
          <p style={{ fontSize: 13, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 10 }}>{era.description}</p>
        )}

        <div className="mt-8">
          {era.events.map((ev, i) => (
            <EventListItem key={i} event={ev} />
          ))}
        </div>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <Link href={`/people/${era.id}`} style={{ color: COLORS.vermilion, fontSize: 13, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            {era.name}の人物一覧を見る →
          </Link>
        </div>
      </div>
    </div>
  );
}
