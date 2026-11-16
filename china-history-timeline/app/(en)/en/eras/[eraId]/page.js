import Link from "next/link";
import { notFound } from "next/navigation";
import { COLORS, CATEGORY_STYLE } from "@/lib/constants";
import { SealMark, HeritageGrid } from "@/components/Shared";
import { ERAS_EN, SITE_URL, SITE_NAME_EN, CATEGORY_LABEL_EN, findEraEn, getEraFiguresEn, displayYearEn, displayPeriodEn, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn, leadSentencesEn } from "@/lib/en/seo";

const serif = { fontFamily: "var(--font-serif), serif" };

export function generateStaticParams() {
  return ERAS_EN.map((era) => ({ eraId: era.id }));
}

export function generateMetadata({ params }) {
  const era = findEraEn(params.eraId);
  if (!era) return {};
  const period = displayPeriodEn(era.period);
  const title = `${era.name} (${period}): Key Events and People`;
  const description = `${leadSentencesEn(era.description, 120)} Explore ${era.events.length} key events of the ${era.name} era in order.`;
  return {
    title,
    description,
    alternates: bilingualAlternates(`/eras/${era.id}`, "en"),
    openGraph: buildOpenGraphEn({
      title: `${title} | ${SITE_NAME_EN}`,
      description,
      path: `/en/eras/${era.id}`,
      type: "article",
      image: { title: era.name, subtitle: "Key events and people", kicker: period, seal: era.seal },
    }),
    twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
  };
}

function EventRow({ ev }) {
  const cat = CATEGORY_STYLE[ev.category] || CATEGORY_STYLE["文化"];
  return (
    <Link href={`/en/events/${ev.slug}`} className="block py-4" style={{ borderBottom: "1px solid #DCD3B8" }}>
      <div className="flex items-baseline gap-3 flex-wrap">
        <span style={{ ...serif, fontSize: 13, fontWeight: 700, color: cat.color }}>{displayYearEn(ev.year)}</span>
        <span style={{ fontSize: 10, color: cat.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>{CATEGORY_LABEL_EN[ev.category]}</span>
      </div>
      <h3 style={{ ...serif, fontSize: 17, fontWeight: 700, color: COLORS.ink, marginTop: 2, lineHeight: 1.4 }}>{ev.title}</h3>
      <p style={{ fontSize: 13, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 4 }}>{leadSentencesEn(ev.summary, 220)}</p>
      <div style={{ fontSize: 12, color: COLORS.vermilion, marginTop: 4 }}>Read more →</div>
    </Link>
  );
}

export default function EnglishEraPage({ params }) {
  const era = findEraEn(params.eraId);
  if (!era) notFound();
  const idx = ERAS_EN.indexOf(era);
  const prevEra = ERAS_EN[idx - 1];
  const nextEra = ERAS_EN[idx + 1];
  const figures = getEraFiguresEn(era);
  const period = displayPeriodEn(era.period);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Timeline", item: `${SITE_URL}/en` },
      { "@type": "ListItem", position: 2, name: "Chinese Dynasties and Eras", item: `${SITE_URL}/en/eras` },
      { "@type": "ListItem", position: 3, name: era.name, item: `${SITE_URL}/en/eras/${era.id}` },
    ],
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Link href="/en" style={{ color: COLORS.vermilion, ...serif, fontSize: 13 }}>← Back to the timeline</Link>
          <Link href="/en/eras" style={{ color: COLORS.vermilion, fontSize: 13 }}>All eras</Link>
        </div>

        <div className="flex items-center gap-3 mt-5 mb-4">
          <SealMark char={era.seal} active />
          <div style={{ fontSize: 13, color: COLORS.gold, ...serif }}>{period}</div>
        </div>

        <h1 style={{ ...serif, fontSize: 28, fontWeight: 900, color: COLORS.ink, lineHeight: 1.3 }}>{era.name}</h1>
        <p style={{ fontSize: 15, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 12 }}>{era.description}</p>

        <h2 style={{ ...serif, fontSize: 20, fontWeight: 700, color: COLORS.ink, marginTop: 32, paddingBottom: 6, borderBottom: `2px solid ${COLORS.vermilion}` }}>
          Key events
        </h2>
        <div>
          {era.events.map((ev) => (
            <EventRow key={ev.slug} ev={ev} />
          ))}
        </div>

        {figures.length > 0 && (
          <>
            <h2 style={{ ...serif, fontSize: 20, fontWeight: 700, color: COLORS.ink, marginTop: 36, marginBottom: 12, paddingBottom: 6, borderBottom: `2px solid ${COLORS.vermilion}` }}>
              Key figures
            </h2>
            <HeritageGrid items={figures} />
          </>
        )}

        <nav className="mt-12 pt-6 grid grid-cols-2 gap-3" style={{ borderTop: `1px solid ${COLORS.mist}` }} aria-label="Previous and next eras">
          <div>
            {prevEra && (
              <Link href={`/en/eras/${prevEra.id}`} className="block" style={{ color: COLORS.vermilion, fontSize: 13 }}>
                <span style={{ display: "block", fontSize: 11, color: COLORS.inkSoft }}>Previous era</span>← {prevEra.name}
              </Link>
            )}
          </div>
          <div className="text-right">
            {nextEra && (
              <Link href={`/en/eras/${nextEra.id}`} className="block" style={{ color: COLORS.vermilion, fontSize: 13 }}>
                <span style={{ display: "block", fontSize: 11, color: COLORS.inkSoft }}>Next era</span>
                {nextEra.name} →
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
