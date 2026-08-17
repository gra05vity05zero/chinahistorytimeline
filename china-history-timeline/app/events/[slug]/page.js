import { notFound } from "next/navigation";
import { ERAS, findEventBySlug, stripRuby, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import EventDetail from "@/components/EventDetail";

// ビルド時に全イベントの静的ページを生成（SSG）
export function generateStaticParams() {
  return ERAS.flatMap((era) => era.events.map((ev) => ({ slug: ev.slug })));
}

export function generateMetadata({ params }) {
  const found = findEventBySlug(params.slug);
  if (!found) return {};
  const { event, era } = found;
  const title = stripRuby(event.title);
  const description = stripRuby(event.summary);
  const pageTitle = `${title}（${event.year}）`;
  const path = `/events/${event.slug}`;
  return {
    title: pageTitle,
    description,
    alternates: { canonical: path },
    openGraph: buildOpenGraph({ title: pageTitle, description, path, type: "article" }),
    twitter: buildTwitter({ title: pageTitle, description }),
  };
}

export default function EventPage({ params }) {
  const found = findEventBySlug(params.slug);
  if (!found) notFound();
  const { event, era } = found;
  const title = stripRuby(event.title);
  const description = stripRuby(event.summary);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <EventDetail event={event} era={era} />
    </>
  );
}
