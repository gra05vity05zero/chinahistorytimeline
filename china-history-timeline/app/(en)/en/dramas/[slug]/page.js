import Link from "next/link";
import { notFound } from "next/navigation";
import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, findEraEn, findEventEn, englishPersonPath, displayYearEn } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { getSortedDramasEn, getDramaEn, formatPeriodEn, formatYearEn } from "@/lib/en/dramas";
import { FeaturePage, Section, Paras, NoteCard, DataTable, cardStyle, serif } from "@/components/en/EnFeature";
import { Stars } from "@/components/en/Stars";

export function generateStaticParams() {
  return getSortedDramasEn().map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const d = getDramaEn(params.slug);
  if (!d) return {};
  const title = `Is ${d.title} Historically Accurate? The Real People and History Behind the Drama`;
  const description = d.summary;
  const path = `/en/dramas/${d.slug}`;
  const era = findEraEn(d.eraIds[0]);
  return {
    title,
    description,
    alternates: bilingualAlternates(`/dramas/${d.slug}`, "en"),
    openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path, image: { title: `Is ${d.title} accurate?`, subtitle: "The real people and history", seal: era?.seal } }),
    twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
  };
}

// "c. 5000 BC" → -5000, "1735" → 1735
function yearNum(y) {
  const m = String(y).match(/(\d+)/);
  if (!m) return 0;
  return /BC/.test(String(y)) ? -Number(m[1]) : Number(m[1]);
}

const TYPE = {
  real: { label: "Real", color: COLORS.jade },
  composite: { label: "Composite", color: COLORS.gold },
  fictional: { label: "Fictional", color: COLORS.vermilion },
};

export default function EnglishDramaPage({ params }) {
  const d = getDramaEn(params.slug);
  if (!d) notFound();
  const others = getSortedDramasEn().filter((o) => o.slug !== d.slug && o.eraIds.some((id) => d.eraIds.includes(id)));
  const events = d.relatedEventIds.map((slug) => findEventEn(slug)).filter(Boolean);
  const timeline = [
    ...events.map(({ event }) => ({ year: event.year, sortYear: yearNum(event.year), text: event.title, href: `/en/events/${event.slug}` })),
    ...d.timeline.map((t) => ({ year: formatYearEn(t.year), sortYear: t.year, text: t.text })),
  ].sort((a, b) => a.sortYear - b.sortYear);

  return (
    <FeaturePage
      title={`Is ${d.title} historically accurate?`}
      jaPath={`/dramas/${d.slug}`}
      intro={`${d.title} (${d.alt.replace(/^Original title: /, "")}, ${d.year}, ${d.episodes} episodes) is set in ${d.eraIds.map((id) => findEraEn(id)?.name).join(" and ")}, ${formatPeriodEn(d.period)}. Here we compare its characters and story with the historical record.`}
      related={[
        { href: "/en/dramas", label: "All Chinese historical dramas" },
        ...d.eraIds.map((id) => ({ href: `/en/eras/${id}`, label: findEraEn(id)?.name })),
      ]}
    >
      <div className="p-4" style={{ ...cardStyle, borderTop: `3px solid ${COLORS.vermilion}`, marginBottom: 28 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.gold, letterSpacing: "0.05em" }}>IN SHORT</div>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.ink, marginTop: 6 }}>{d.summary}</p>
        <div style={{ fontSize: 13, marginTop: 8 }}>Historical accuracy: <Stars score={d.score} /> ({d.score}/5)</div>
      </div>

      <Section title="How accurate is it?">
        <DataTable head={["Criterion", "Rating", "Why"]} rows={d.basis} />
        <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 6 }}>◎ largely historical · ○ broadly historical · △ largely invented. Ratings are this site’s rough guide.</p>
      </Section>

      <Section title="Historical background">
        <Paras items={[d.background]} />
      </Section>

      <Section title="Were the characters real?">
        <div className="flex flex-col gap-3">
          {d.characters.map((c) => {
            const t = TYPE[c.type];
            let href = null;
            if (c.realPersonId) {
              const [eraId, jaSlug] = c.realPersonId.split("/");
              href = englishPersonPath(eraId, jaSlug);
            }
            return (
              <div key={c.role} className="p-4" style={cardStyle}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink }}>{c.role}</span>
                  <span style={{ fontSize: 11, color: "#fff", backgroundColor: t.color, padding: "1px 6px", fontWeight: 700 }}>{t.label}</span>
                </div>
                {c.real && (
                  <div style={{ fontSize: 12.5, color: COLORS.gold, marginTop: 2 }}>
                    Historical model: {href ? <Link href={href} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>{c.real}</Link> : c.real}
                  </div>
                )}
                <p style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 6 }}><span style={{ fontWeight: 700, color: COLORS.jade }}>In history: </span>{c.note}</p>
                <p style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 4 }}><span style={{ fontWeight: 700, color: COLORS.vermilion }}>In the drama: </span>{c.diff}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Where the drama departs from history">
        <div className="flex flex-col gap-3">
          {d.divergences.map((v) => <NoteCard key={v.title} title={v.title}>{v.body}</NoteCard>)}
        </div>
      </Section>

      <Section title="What really happened next (spoilers)">
        <Paras items={[d.aftermath]} />
      </Section>

      <Section title="Timeline">
        <div className="flex flex-col gap-2">
          {timeline.map((row, i) => {
            const inner = (
              <div className="flex items-baseline gap-3 px-4 py-2.5" style={{ ...cardStyle, borderLeft: `3px solid ${row.href ? COLORS.vermilion : COLORS.mist}` }}>
                <span style={{ ...serif, fontSize: 13, color: COLORS.inkSoft, whiteSpace: "nowrap", minWidth: 64 }}>{row.href ? displayYearEn(row.year) : row.year}</span>
                <span style={{ fontSize: 14, color: COLORS.ink, flex: 1 }}>{row.text}</span>
                {row.href && <span style={{ color: COLORS.vermilion, fontSize: 13 }}>→</span>}
              </div>
            );
            return row.href ? <Link key={i} href={row.href}>{inner}</Link> : <div key={i}>{inner}</div>;
          })}
        </div>
      </Section>

      {others.length > 0 && (
        <Section title="Other dramas set in the same era">
          <div className="flex flex-col gap-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/en/dramas/${o.slug}`} className="block px-4 py-3" style={cardStyle}>
                <span style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{o.title}</span>
                <span style={{ fontSize: 12.5, color: COLORS.inkSoft }}> · {formatPeriodEn(o.period)} · <Stars score={o.score} /></span>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </FeaturePage>
  );
}
