import { notFound } from "next/navigation";
import { ERAS, findEventBySlug, getNextEvent, getPrevEvent, stripRuby, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import EventDetail from "@/components/EventDetail";
import { getDramaIndex, toDramaCard } from "@/lib/dramas";
import { japanChinaTimelineHref, japaneseErasDuring } from "@/lib/japanChinaTimeline";

// ビルド時に全イベントの静的ページを生成（SSG）
export function generateStaticParams() {
  return ERAS.flatMap((era) => era.events.map((ev) => ({ slug: ev.slug })));
}

// 検索結果のスニペットに収まるよう、本文の冒頭を文の区切りで切り出す（目安100字）
function leadSentences(text, maxLength = 100) {
  const sentences = text.match(/[^。]+。?/g) || [];
  let lead = "";
  for (const s of sentences) {
    if ((lead + s).length > maxLength) break;
    lead += s;
  }
  return lead || `${text.slice(0, maxLength - 1)}…`;
}

export function generateMetadata({ params }) {
  const found = findEventBySlug(params.slug);
  if (!found) return {};
  const { event, era } = found;
  const title = stripRuby(event.title);
  const eraName = stripRuby(era.name);
  // 「c. 1300 BC」→「前1300年頃」、「AD 8」→「8年」、「630s」→「630年代」。「12世紀」などはそのまま
  const yearLabel = event.year
    .replace(/^c\. (.+)$/, "$1頃")
    .replace(/^(\S+) BC/, "前$1")
    .replace(/^AD /, "")
    .replace(/^(\d+)-(\d+)$/, "$1〜$2")
    .replace(/^(\d+)s$/, "$1年代")
    .replace(/\d(?=頃|$)/, "$&年");
  // 「〇〇が起きた時の王朝は？」「〇〇 日本は何時代」といった検索に、タイトルと説明文の時点で答える
  const pageTitle = `${title}（${yearLabel}）｜${eraName}の出来事をわかりやすく解説`;
  const japaneseEras = japaneseErasDuring(era.id).map(stripRuby);
  const description =
    `${yearLabel}、${eraName}の時代の出来事。${leadSentences(stripRuby(event.summary))}` +
    (japaneseEras.length > 0 ? `同じ頃の日本は${japaneseEras.join("・")}。` : "");
  const path = `/events/${event.slug}`;
  const image = { title, kicker: `${stripRuby(era.name)} ・ ${yearLabel}`, seal: era.seal };
  return {
    title: pageTitle,
    description,
    alternates: { canonical: path },
    openGraph: buildOpenGraph({ title: pageTitle, description, path, type: "article", image }),
    twitter: buildTwitter({ title: pageTitle, description }),
  };
}

export default function EventPage({ params }) {
  const found = findEventBySlug(params.slug);
  if (!found) notFound();
  const { event, era } = found;
  const title = stripRuby(event.title);
  const description = stripRuby(event.summary);
  const next = getNextEvent(event.slug);
  const prev = getPrevEvent(event.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${title}（${event.year}）`,
    description,
    about: era.name,
    articleSection: era.name,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/events/${event.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: era.name, item: `${SITE_URL}/#${era.id}` },
      { "@type": "ListItem", position: 3, name: title, item: `${SITE_URL}/events/${event.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(articleJsonLd)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(breadcrumbJsonLd)) }}
      />
      <EventDetail
        event={event}
        era={era}
        prev={prev}
        next={next}
        japanTimeline={{ href: japanChinaTimelineHref(era.id), japaneseEras: japaneseErasDuring(era.id) }}
        dramas={(getDramaIndex().byEvent.get(event.slug) || []).map(toDramaCard)}
      />
    </>
  );
}
