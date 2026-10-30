import Link from "next/link";
import { notFound } from "next/navigation";
import { ERAS, ERA_ALIASES, COLORS, stripRuby, SITE_URL, buildOpenGraph, buildTwitter, getEraFigures } from "@/lib/data";
import { getEraOverview } from "@/lib/eraOverviews";
import { EraOverview } from "@/components/EraOverview";
import { SealMark, EventListItem, BackToTopButton, MiscLinksSection, JapanTimelineCallout } from "@/components/Shared";
import { japanChinaTimelineHref, japaneseErasDuring } from "@/lib/japanChinaTimeline";
import { RubyText } from "@/components/Ruby";
import { getDramaIndex, toDramaCard } from "@/lib/dramas";
import { DramaBacklinks } from "@/components/DramaBlocks";

export function generateStaticParams() {
  return ERAS.map((era) => ({ eraId: era.id }));
}

export function generateMetadata({ params }) {
  const era = ERAS.find((e) => e.id === params.eraId);
  if (!era) return {};
  const alias = stripRuby(ERA_ALIASES[era.id]);
  const eraName = stripRuby(era.name);
  const path = `/eras/${era.id}`;
  // 解説コンテンツ登録済みの王朝は「〇〇とはどんな時代？」の解説ページとして扱う
  const overview = getEraOverview(era.id);
  // 「唐 日本何時代」のような検索に説明文の時点で答えるため、同じ頃の日本の時代を末尾に添える
  const japaneseEras = japaneseErasDuring(era.id).map(stripRuby);
  const japanNote = japaneseEras.length > 0 ? `同じ頃の日本は${japaneseEras.join("・")}。` : "";
  if (overview) {
    const title = stripRuby(overview.title);
    const description = overview.metaDescription + japanNote;
    const image = { title: `${eraName}とはどんな時代？`, subtitle: alias || "", kicker: era.period, seal: era.seal };
    return {
      title,
      description,
      alternates: { canonical: path },
      openGraph: buildOpenGraph({ title, description, path, type: "article", image }),
      twitter: buildTwitter({ title, description }),
    };
  }
  const title = `${eraName}の出来事一覧${alias ? `（${alias}）` : ""}`;
  const description = `${eraName}（${era.period}）に起きた出来事を年表順にまとめて紹介します。${
    alias ? `${alias}` : eraName
  }の歴史について知りたい方はこちら。${japanNote}`;
  const image = { title: `${eraName}の出来事一覧`, subtitle: alias || "", kicker: era.period, seal: era.seal };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: buildOpenGraph({ title, description, path, image }),
    twitter: buildTwitter({ title, description }),
  };
}

export default function EraEventsPage({ params }) {
  const era = ERAS.find((e) => e.id === params.eraId);
  if (!era) notFound();
  const alias = ERA_ALIASES[era.id];
  const overview = getEraOverview(era.id);
  const dramaBlock = (
    <DramaBacklinks heading="この時代を描いたドラマ" dramas={(getDramaIndex().byEra.get(era.id) || []).map(toDramaCard)} />
  );
  const japanCallout = (
    <JapanTimelineCallout eraName={era.name} href={japanChinaTimelineHref(era.id)} japaneseEras={japaneseErasDuring(era.id)} />
  );

  if (overview) {
    const idx = ERAS.indexOf(era);
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: overview.faq.map((f) => ({
        "@type": "Question",
        name: stripRuby(f.q),
        acceptedAnswer: { "@type": "Answer", text: stripRuby(f.a) },
      })),
    };
    const overviewBreadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "中国の王朝・時代一覧", item: `${SITE_URL}/eras` },
        { "@type": "ListItem", position: 3, name: `${era.name}とはどんな時代？`, item: `${SITE_URL}/eras/${era.id}` },
      ],
    };

    return (
      <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(overviewBreadcrumbJsonLd)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <div className="max-w-2xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <BackToTopButton />
            <Link href="/eras" style={{ color: COLORS.vermilion, fontSize: 13 }}>
              ← 時代一覧へ
            </Link>
          </div>

          <div className="flex items-center gap-3 mt-5 mb-4">
            <SealMark char={era.seal} active />
            <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}><RubyText text={era.period} /></div>
          </div>

          <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 24, fontWeight: 900, color: COLORS.ink, lineHeight: 1.6 }}>
            <RubyText text={overview.title} />
          </h1>

          <EraOverview
            era={era}
            overview={overview}
            figures={getEraFigures(era)}
            prevEra={ERAS[idx - 1]}
            nextEra={ERAS[idx + 1]}
            japanCallout={japanCallout}
          />

          {dramaBlock}

          <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
            <MiscLinksSection />
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "中国の王朝・時代一覧", item: `${SITE_URL}/eras` },
      { "@type": "ListItem", position: 3, name: era.name, item: `${SITE_URL}/eras/${era.id}` },
    ],
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(breadcrumbJsonLd)) }}
      />
      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <BackToTopButton />
          <Link href="/eras" style={{ color: COLORS.vermilion, fontSize: 13 }}>
            ← 出来事一覧トップへ
          </Link>
        </div>

        <div className="flex items-center gap-3 mt-5 mb-4">
          <SealMark char={era.seal} active />
          <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}><RubyText text={era.period} /></div>
        </div>

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 24, fontWeight: 900, color: COLORS.ink }}>
          <RubyText text={era.name} />の出来事一覧
          {alias && (
            <span style={{ fontSize: 13, color: COLORS.inkSoft, fontWeight: 400, marginLeft: 8 }}>（<RubyText text={alias} />）</span>
          )}
        </h1>

        {era.description && (
          <p style={{ fontSize: 13, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 10 }}><RubyText text={era.description} /></p>
        )}

        <div className="mt-8">
          {era.events.map((ev, i) => (
            <EventListItem key={i} event={ev} />
          ))}
        </div>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <Link href={`/people/${era.id}`} style={{ color: COLORS.vermilion, fontSize: 13, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            <RubyText text={era.name} />の人物一覧を見る →
          </Link>
          {japanCallout}
        </div>

        {dramaBlock}

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
