import Link from "next/link";
import { notFound } from "next/navigation";
import { COLORS } from "@/lib/constants";
import { SealMark, HeritageThumb } from "@/components/Shared";
import { SITE_URL, SITE_NAME_EN, getPeopleByEraEn, findPersonEn, displayYearEn, displayPeriodEn } from "@/lib/en";
import { formatLifeYearEn } from "@/lib/en/people";
import { lifeAge } from "@/lib/personDetails";
import { buildOpenGraphEn, buildTwitterEn, leadSentencesEn } from "@/lib/en/seo";

const serif = { fontFamily: "var(--font-serif), serif" };
const h2 = { ...serif, fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 12, paddingBottom: 5, borderBottom: `1.5px solid ${COLORS.gold}` };

export function generateStaticParams() {
  return getPeopleByEraEn().flatMap(({ era, people }) => people.map((p) => ({ eraId: era.id, slug: p.slug })));
}

export function generateMetadata({ params }) {
  const found = findPersonEn(params.eraId, params.slug);
  if (!found) return {};
  const { era, person } = found;
  const title = `${person.name}: Life and Achievements`;
  const description = leadSentencesEn(`${person.description} ${person.bio.split("\n\n")[0]}`);
  const jaPath = `/people/${era.id}/${person.jaSlug}`;
  return {
    title,
    description,
    alternates: { canonical: person.href, languages: { ja: jaPath, en: person.href, "x-default": jaPath } },
    openGraph: buildOpenGraphEn({
      title: `${title} | ${SITE_NAME_EN}`,
      description,
      path: person.href,
      type: "article",
      image: { title: person.name, subtitle: "Life and Achievements", kicker: era.name, seal: era.seal },
    }),
    twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
  };
}

function buildLifeRows(life) {
  if (!life) return [];
  const born = life[0][0];
  return life.map(([year, text, approx], i) => ({
    year: formatLifeYearEn(year, approx === "頃"),
    age: i === 0 ? (born === null ? null : 0) : lifeAge(born, year),
    text,
    kind: i === 0 ? (born === null ? null : "birth") : i === life.length - 1 ? "death" : null,
  }));
}

export default function EnglishPersonPage({ params }) {
  const found = findPersonEn(params.eraId, params.slug);
  if (!found) notFound();
  const { era, person } = found;
  const paragraphs = person.bio.split("\n\n").filter(Boolean);
  const lifeRows = buildLifeRows(person.life);
  const showAge = lifeRows.some((r) => r.age !== null);
  const others = getPeopleByEraEn()
    .find((r) => r.era.id === era.id)
    .people.filter((p) => p.slug !== person.slug);
  const jaPath = `/people/${era.id}/${encodeURIComponent(person.jaSlug)}`;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    description: person.description,
    ...(person.imageUrl ? { image: person.imageUrl } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${person.href}` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Timeline", item: `${SITE_URL}/en` },
      { "@type": "ListItem", position: 2, name: "People", item: `${SITE_URL}/en/people` },
      { "@type": "ListItem", position: 3, name: era.name, item: `${SITE_URL}/en/eras/${era.id}` },
      { "@type": "ListItem", position: 4, name: person.name, item: `${SITE_URL}${person.href}` },
    ],
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <article className="max-w-2xl mx-auto px-6 py-8">
        <nav className="flex items-center gap-2 flex-wrap" style={{ fontSize: 12.5 }} aria-label="Breadcrumb">
          <Link href="/en" style={{ color: COLORS.vermilion }}>Timeline</Link>
          <span style={{ color: COLORS.mist }}>›</span>
          <Link href={`/en/people#${era.id}`} style={{ color: COLORS.vermilion }}>People</Link>
          <span style={{ color: COLORS.mist }}>›</span>
          <Link href={`/en/eras/${era.id}`} style={{ color: COLORS.vermilion }}>{era.name}</Link>
        </nav>

        <div className="flex items-center gap-3 mt-5">
          <SealMark char={era.seal} active />
          <div style={{ ...serif, fontSize: 12.5, color: COLORS.gold }}>
            {era.name} · {displayPeriodEn(era.period)}
          </div>
        </div>

        <h1 style={{ ...serif, fontSize: 28, fontWeight: 900, color: COLORS.ink, lineHeight: 1.3, marginTop: 14 }}>{person.name}</h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: COLORS.inkSoft, fontWeight: 600, marginTop: 12 }}>{person.description}</p>

        {person.imageUrl && (
          <figure className="mt-6" style={{ maxWidth: 280 }}>
            <div style={{ aspectRatio: "4 / 3", backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}>
              <HeritageThumb imageUrl={person.imageUrl} name={person.name} type="figure" />
            </div>
            {person.credit && <figcaption style={{ fontSize: 10, color: COLORS.mist, marginTop: 4 }}>{person.credit}</figcaption>}
          </figure>
        )}

        <section className="mt-10">
          <h2 style={h2}>Life and achievements</h2>
          {paragraphs.map((para, i) => (
            <p key={i} style={{ fontSize: 15, lineHeight: 1.85, color: COLORS.ink, marginTop: i > 0 ? 14 : 0 }}>
              {para}
            </p>
          ))}
        </section>

        {lifeRows.length > 0 && (
          <section className="mt-10">
            <h2 style={h2}>Timeline of {person.name.replace(/\s*\(.*\)$/, "")}’s life</h2>
            <table className="w-full" style={{ borderCollapse: "collapse", fontSize: 14, lineHeight: 1.7 }}>
              <thead>
                <tr style={{ backgroundColor: COLORS.paperDeep, color: COLORS.ink, ...serif }}>
                  <th scope="col" className="text-left px-3 py-2" style={{ width: "7.5em", fontWeight: 700, borderBottom: `2px solid ${COLORS.vermilion}` }}>Year</th>
                  {showAge && (
                    <th scope="col" className="text-left px-2 py-2" style={{ width: "3.4em", fontWeight: 700, borderBottom: `2px solid ${COLORS.vermilion}` }}>Age</th>
                  )}
                  <th scope="col" className="text-left px-3 py-2" style={{ fontWeight: 700, borderBottom: `2px solid ${COLORS.vermilion}` }}>Event</th>
                </tr>
              </thead>
              <tbody>
                {lifeRows.map((row, i) => {
                  const edge = row.kind !== null;
                  return (
                    <tr key={i} style={{ borderBottom: "1px solid #E6DEC6", backgroundColor: edge ? "#FBF8F0" : "transparent" }}>
                      <th scope="row" className="text-left align-top px-3 py-2" style={{ ...serif, fontWeight: 700, color: edge ? COLORS.vermilion : COLORS.ink, whiteSpace: "nowrap" }}>
                        {row.year}
                      </th>
                      {showAge && (
                        <td className="align-top px-2 py-2" style={{ color: COLORS.inkSoft, whiteSpace: "nowrap" }}>
                          {row.age === null ? "" : row.age}
                        </td>
                      )}
                      <td className="align-top px-3 py-2" style={{ color: COLORS.inkSoft }}>
                        {row.kind === "birth" && <span style={{ fontSize: 11, color: COLORS.vermilion, fontWeight: 700, marginRight: 6 }}>Born</span>}
                        {row.kind === "death" && row.text !== "Dies." && <span style={{ fontSize: 11, color: COLORS.vermilion, fontWeight: 700, marginRight: 6 }}>Died</span>}
                        {row.text}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {showAge && (
              <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginTop: 8 }}>
                Ages are rough figures counted from the birth year (traditional East Asian reckoning can differ by about a year). Some dates are disputed.
              </p>
            )}
          </section>
        )}

        {person.events.length > 0 && (
          <section className="mt-10">
            <h2 style={h2}>Related events</h2>
            <div className="flex flex-col gap-2">
              {person.events.map((ev) => (
                <Link
                  key={ev.slug}
                  href={`/en/events/${ev.slug}`}
                  className="block px-4 py-3"
                  style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", borderLeft: `3px solid ${COLORS.vermilion}` }}
                >
                  <span style={{ ...serif, color: COLORS.inkSoft, fontSize: 13 }}>{displayYearEn(ev.year)}</span>
                  <span style={{ ...serif, color: COLORS.ink, fontSize: 15, fontWeight: 600, marginLeft: 10 }}>{ev.title}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {others.length > 0 && (
          <section className="mt-10">
            <h2 style={h2}>Other people of the {era.name} era</h2>
            <ul className="flex flex-col">
              {others.map((p) => (
                <li key={p.slug} style={{ borderBottom: "1px solid #E6DEC6" }}>
                  <Link href={p.href} className="block py-2 hover:underline" style={{ ...serif, fontSize: 14, color: COLORS.ink, fontWeight: 600 }}>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-8 pt-5 flex flex-wrap gap-x-6 gap-y-2" style={{ borderTop: `1px solid ${COLORS.mist}`, fontSize: 13 }}>
          <Link href={`/en/eras/${era.id}`} style={{ color: COLORS.vermilion }}>About the {era.name} era →</Link>
          <Link href={jaPath} hrefLang="ja" lang="ja" style={{ color: COLORS.inkSoft }}>
            この人物のページを日本語で読む
          </Link>
        </div>
      </article>
    </div>
  );
}
