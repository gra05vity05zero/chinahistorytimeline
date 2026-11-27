// Shared layout for the English "Why did ... fall?" pages (/en/sanguo-fall, /en/tang-fall, /en/ming-fall, /en/qing-fall).
// Same structure as /en/qin-fall: facts → basics → reasons → comparison → timeline → what if → aftermath → summary → FAQ.
import Link from "next/link";
import { COLORS } from "@/lib/data";
import { SITE_URL, findEventEn, displayYearEn } from "@/lib/en";
import { FeaturePage, Section, Paras, Facts, ItemCard, DataTable, cardStyle, serif } from "@/components/en/EnFeature";

const h3 = { ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink, margin: "18px 0 8px" };

export function EnDynastyFallArticle({ a }) {
  const events = a.relatedSlugs.filter(Boolean).map((s) => findEventEn(s)).filter(Boolean);
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", headline: a.title, description: a.description, inLanguage: "en", mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en${a.jaPath}` } };

  return (
    <FeaturePage title={a.h1} jaPath={a.jaPath} intro={a.intro} related={a.related}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ ...serif, fontSize: 13, color: COLORS.gold, marginTop: -8, marginBottom: 20 }}>{a.meta}</div>

      <Facts heading={a.factsHeading} items={a.facts} />

      <Section title={a.basics.heading}>
        {a.basics.blocks.map((b, i) => (
          <div key={i}>
            {b.h3 && <h3 style={i === 0 ? { ...h3, marginTop: 0 } : h3}>{b.h3}</h3>}
            {b.paras && <Paras items={b.paras} />}
            {b.rulers && (
              <div className="flex flex-col gap-2">
                {b.rulers.map((r) => (
                  <ItemCard key={r.name} title={r.name} subtitle={r.reign}>
                    {r.note}
                  </ItemCard>
                ))}
              </div>
            )}
            {b.table && <DataTable head={b.table.head} rows={b.table.rows} />}
          </div>
        ))}
      </Section>

      <Section title={a.reasonsHeading}>
        <Paras items={[a.reasonsLead]} />
        <div className="flex flex-col gap-4 mt-4">
          {a.reasons.map((r, i) => (
            <div key={r.title} style={{ ...cardStyle, padding: 14 }}>
              <h3 style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink, marginBottom: 8 }}>
                <span style={{ color: COLORS.vermilion, marginRight: 8 }}>{i + 1}.</span>
                {r.title}
              </h3>
              <Paras items={r.body} />
            </div>
          ))}
        </div>
      </Section>

      <Section title={`The ${a.reasons.length === 5 ? "five" : a.reasons.length} reasons compared`}>
        <Paras items={["Sorted by the role each played, the reasons run from foundation (long-standing causes) to turning point, accelerant and trigger."]} />
        <div className="mt-3">
          <DataTable head={["Reason", "Role", "When", "Main people", "Effect on the fall"]} rows={a.comparison} />
        </div>
      </Section>

      <Section title={a.chronology.heading}>
        <Paras items={[a.chronology.lead]} />
        <div className="flex flex-col gap-3 mt-3">
          {a.chronology.items.map((c) => (
            <div key={c.y + c.text.slice(0, 12)} className="flex gap-3">
              <div className="shrink-0" style={{ width: 92, ...serif, paddingTop: 1 }}>
                <div style={{ fontSize: 13, color: COLORS.vermilion }}>{c.y}</div>
                {c.sub && <div style={{ fontSize: 11, color: COLORS.gold }}>{c.sub}</div>}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.75, color: COLORS.inkSoft, borderLeft: `2px solid ${c.late ? COLORS.vermilion : COLORS.mist}`, paddingLeft: 12 }}>{c.text}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title={a.whatIf.heading}>
        <Paras items={a.whatIf.paras} />
      </Section>

      <Section title={a.after.heading}>
        <Paras items={a.after.paras} />
        {a.after.cards && (
          <div className="grid gap-3 mt-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {a.after.cards.map(([head, text]) => (
              <ItemCard key={head} title={head}>
                {text}
              </ItemCard>
            ))}
          </div>
        )}
      </Section>

      <Section title="Summary">
        <Paras items={a.summary} />
      </Section>

      <Section title="Frequently asked questions">
        <div className="flex flex-col gap-3">
          {a.faq.map((f) => (
            <ItemCard key={f.q} title={f.q}>
              {f.a}
            </ItemCard>
          ))}
        </div>
      </Section>

      {events.length > 0 && (
        <Section title="Related events">
          <div className="flex flex-col gap-2">
            {events.map(({ event }) => (
              <Link key={event.slug} href={`/en/events/${event.slug}`} className="block px-4 py-3" style={{ ...cardStyle, borderLeft: `3px solid ${COLORS.vermilion}` }}>
                <span style={{ ...serif, color: COLORS.inkSoft, fontSize: 13 }}>{displayYearEn(event.year)}</span>
                <span style={{ ...serif, color: COLORS.ink, fontSize: 15, fontWeight: 600, marginLeft: 10 }}>{event.title}</span>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </FeaturePage>
  );
}
