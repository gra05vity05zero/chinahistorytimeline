import Link from "next/link";
import { EnThemeLinks } from "@/components/en/EnMiscLinks";
import { notFound } from "next/navigation";
import { COLORS, CATEGORY_STYLE } from "@/lib/constants";
import { SealMark, HeritageGrid, InArticleAd } from "@/components/Shared";
import {
  ERAS_EN,
  SITE_URL,
  SITE_NAME_EN,
  CATEGORY_LABEL_EN,
  HERITAGE_LABEL_EN,
  findEventEn,
  getAdjacentEventsEn,
  displayYearEn,
  bilingualAlternates,
} from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn, leadSentencesEn } from "@/lib/en/seo";
import { getEventDetailEn } from "@/lib/en/eventDetails";
import EventArticle from "@/components/EventArticle";

const serif = { fontFamily: "var(--font-serif), serif" };

export function generateStaticParams() {
  return ERAS_EN.flatMap((era) => era.events.map((ev) => ({ slug: ev.slug })));
}

export function generateMetadata({ params }) {
  const found = findEventEn(params.slug);
  if (!found) return {};
  const { event, era } = found;
  const year = displayYearEn(event.year);
  const title = `${event.title} (${year}) – ${era.name}`;
  const description = `${year}, ${era.name}. ${leadSentencesEn(event.summary)}`;
  const path = `/en/events/${event.slug}`;
  return {
    title,
    description,
    alternates: bilingualAlternates(`/events/${event.slug}`, "en"),
    openGraph: buildOpenGraphEn({
      title: `${title} | ${SITE_NAME_EN}`,
      description,
      path,
      type: "article",
      image: { title: event.title, kicker: `${era.name} · ${year}`, seal: era.seal },
    }),
    twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
  };
}

function AdjacentLink({ item, label, align }) {
  if (!item) return <div />;
  return (
    <Link
      href={`/en/events/${item.event.slug}`}
      className="block px-4 py-3"
      style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", textAlign: align }}
    >
      <span style={{ display: "block", fontSize: 11, color: COLORS.inkSoft }}>
        {label} · {displayYearEn(item.event.year)}
      </span>
      <span style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.ink, lineHeight: 1.4 }}>{item.event.title}</span>
    </Link>
  );
}

export default function EnglishEventPage({ params }) {
  const found = findEventEn(params.slug);
  if (!found) notFound();
  const { event, era } = found;
  const { prev, next } = getAdjacentEventsEn(event.slug);
  const cat = CATEGORY_STYLE[event.category] || CATEGORY_STYLE["文化"];
  const year = displayYearEn(event.year);
  const detail = getEventDetailEn(event.slug);
  const groups = ["building", "artifact", "figure"]
    .map((type) => ({ type, items: event.heritage.filter((h) => h.type === type) }))
    .filter((g) => g.items.length > 0);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${event.title} (${year})`,
    description: leadSentencesEn(event.summary),
    inLanguage: "en",
    articleSection: era.name,
    ...(detail && { datePublished: detail.publishedAt, dateModified: detail.updatedAt }),
    isPartOf: { "@type": "WebSite", name: SITE_NAME_EN, url: `${SITE_URL}/en` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/events/${event.slug}` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Timeline", item: `${SITE_URL}/en` },
      { "@type": "ListItem", position: 2, name: era.name, item: `${SITE_URL}/en/eras/${era.id}` },
      { "@type": "ListItem", position: 3, name: event.title, item: `${SITE_URL}/en/events/${event.slug}` },
    ],
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {detail?.faq?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: detail.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            }),
          }}
        />
      )}
      <article className="max-w-2xl mx-auto px-6 py-8">
        <nav className="flex items-center gap-2 flex-wrap" style={{ fontSize: 12.5 }} aria-label="Breadcrumb">
          <Link href="/en" style={{ color: COLORS.vermilion }}>Timeline</Link>
          <span style={{ color: COLORS.mist }}>›</span>
          <Link href={`/en/eras/${era.id}`} style={{ color: COLORS.vermilion }}>{era.name}</Link>
        </nav>

        <div className="flex items-center gap-3 mt-5">
          <SealMark char={era.seal} active />
          <div>
            <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: cat.color }}>{year}</div>
            <div style={{ fontSize: 10.5, color: cat.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>{CATEGORY_LABEL_EN[event.category]}</div>
          </div>
        </div>

        <h1 style={{ ...serif, fontSize: 28, fontWeight: 900, color: COLORS.ink, lineHeight: 1.3, marginTop: 14 }}>{event.title}</h1>

        <p style={{ fontSize: 16, lineHeight: 1.9, color: COLORS.ink, marginTop: 16 }}>{event.summary}</p>

        <InArticleAd lang="en" />

        {detail && <EventArticle detail={detail} lang="en" />}

        {groups.map((g) => (
          <section key={g.type} className="mt-8">
            <h2 style={{ ...serif, fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10, paddingBottom: 5, borderBottom: `1.5px solid ${COLORS.gold}` }}>
              {HERITAGE_LABEL_EN[g.type]}
            </h2>
            <HeritageGrid items={g.items} />
          </section>
        ))}

        <nav className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Previous and next events">
          <AdjacentLink item={prev} label="← Previous" align="left" />
          <AdjacentLink item={next} label="Next →" align="right" />
        </nav>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <EnThemeLinks />
        </div>

        <div className="mt-8 pt-5 flex flex-wrap gap-x-6 gap-y-2" style={{ borderTop: `1px solid ${COLORS.mist}`, fontSize: 13 }}>
          <Link href={`/en/eras/${era.id}`} style={{ color: COLORS.vermilion }}>More from the {era.name} era →</Link>
          <Link href={`/events/${event.slug}`} hrefLang="ja" lang="ja" style={{ color: COLORS.inkSoft }}>
            この出来事を日本語で読む
          </Link>
        </div>
      </article>
    </div>
  );
}
