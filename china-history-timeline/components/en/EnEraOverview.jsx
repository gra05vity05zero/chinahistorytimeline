import Link from "next/link";
import { COLORS, CATEGORY_STYLE } from "@/lib/constants";
import { HeritageGrid } from "@/components/Shared";
import { yearNumber } from "@/components/EraOverview";
import { CATEGORY_LABEL_EN, displayYearEn } from "@/lib/en";
import { formatYearEn } from "@/lib/en/overviews";

// English counterpart of components/EraOverview.jsx (server component).

const PHASE_COLORS = [COLORS.gold, COLORS.vermilion, COLORS.jade, COLORS.inkSoft];
const serif = { fontFamily: "var(--font-serif), serif" };
const panel = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const bodyText = { fontSize: 15, lineHeight: 1.85, color: COLORS.inkSoft };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const LINE_X = 11;
const RAIL = 34;

function SectionHeading({ id, kicker, children }) {
  return (
    <div id={id} style={{ scrollMarginTop: 16 }}>
      {kicker && <div style={{ ...serif, fontSize: 11.5, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 4 }}>{kicker}</div>}
      <h2 style={{ ...serif, fontSize: 22, fontWeight: 900, color: COLORS.ink, marginBottom: 12, lineHeight: 1.3 }}>{children}</h2>
    </div>
  );
}

function buildTimeline(era, overview) {
  const items = [
    ...era.events.map((ev, order) => ({ kind: "event", sortYear: yearNumber(ev.year), order, event: ev })),
    ...overview.milestones.map((m, i) => ({ kind: "milestone", year: m.yearLabel, sortYear: m.sortYear, order: 1000 + i, text: m.text })),
  ].sort((a, b) => a.sortYear - b.sortYear || a.order - b.order);
  const groups = overview.phases.map((p) => ({ phase: p, items: [] }));
  items.forEach((it) => {
    let idx = 0;
    overview.phases.forEach((p, i) => {
      if (it.sortYear >= p.start) idx = i;
    });
    groups[idx].items.push(it);
  });
  return groups;
}

function TimelineEvent({ ev }) {
  const cat = CATEGORY_STYLE[ev.category] || CATEGORY_STYLE["文化"];
  return (
    <li className="relative" style={{ paddingLeft: RAIL }}>
      <span
        aria-hidden
        className="absolute"
        style={{ left: LINE_X - 6, top: 14, width: 12, height: 12, borderRadius: "50%", backgroundColor: cat.color, boxShadow: `0 0 0 3px ${COLORS.paper}` }}
      />
      <Link href={`/en/events/${ev.slug}`} className="block group">
        <div className="px-4 py-3 transition-all duration-200 group-hover:shadow-sm" style={panel}>
          <div className="flex items-baseline justify-between gap-3">
            <span style={{ ...serif, fontSize: 13, fontWeight: 700, color: cat.color }}>{displayYearEn(ev.year)}</span>
            <span className="shrink-0" style={{ fontSize: 10, color: cat.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {CATEGORY_LABEL_EN[ev.category]}
            </span>
          </div>
          <h4 style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink, marginTop: 2, lineHeight: 1.4 }}>{ev.title}</h4>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.7,
              color: COLORS.inkSoft,
              marginTop: 4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {ev.summary}
          </p>
          <div style={{ fontSize: 12, color: COLORS.vermilion, marginTop: 4, textAlign: "right" }}>Read more →</div>
        </div>
      </Link>
    </li>
  );
}

function TimelineMilestone({ item }) {
  return (
    <li className="relative flex gap-3" style={{ paddingLeft: RAIL }}>
      <span
        aria-hidden
        className="absolute"
        style={{ left: LINE_X - 4, top: 7, width: 8, height: 8, borderRadius: "50%", backgroundColor: COLORS.paper, border: `2px solid ${COLORS.mist}` }}
      />
      <span className="shrink-0" style={{ ...serif, minWidth: 64, fontSize: 12.5, color: COLORS.gold, fontWeight: 700 }}>
        {item.year}
      </span>
      <span style={{ fontSize: 14, lineHeight: 1.7, color: COLORS.inkSoft }}>{item.text}</span>
    </li>
  );
}

function EraTimeline({ era, overview }) {
  const groups = buildTimeline(era, overview);
  return (
    <div className="relative">
      <span aria-hidden className="absolute" style={{ left: LINE_X - 1, top: 8, bottom: 8, width: 2, backgroundColor: COLORS.mist }} />
      <ol className="flex flex-col gap-8">
        {groups.map(({ phase, items }, i) => {
          const color = PHASE_COLORS[i % PHASE_COLORS.length];
          return (
            <li key={i} id={`phase-${i}`} style={{ scrollMarginTop: 16 }}>
              <div className="relative" style={{ paddingLeft: RAIL }}>
                <span
                  aria-hidden
                  className="absolute flex items-center justify-center"
                  style={{
                    left: LINE_X - 11,
                    top: 0,
                    width: 22,
                    height: 22,
                    backgroundColor: color,
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    ...serif,
                    transform: "rotate(2deg)",
                    boxShadow: `0 0 0 3px ${COLORS.paper}`,
                  }}
                >
                  {i + 1}
                </span>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ ...serif, fontSize: 15, fontWeight: 900, color }}>{phase.name}</span>
                  <span style={{ ...serif, fontSize: 12, color: COLORS.gold }}>
                    {formatYearEn(phase.start)} – {phase.endLabel || formatYearEn(phase.end)}
                  </span>
                </div>
                <h3 style={{ ...serif, fontSize: 18, fontWeight: 700, color: COLORS.ink, marginTop: 4, marginBottom: 6, lineHeight: 1.35 }}>{phase.headline}</h3>
                <p style={bodyText}>{phase.text}</p>
              </div>
              {items.length > 0 && (
                <ol className="mt-4 flex flex-col gap-3">
                  {items.map((it) =>
                    it.kind === "event" ? <TimelineEvent key={it.event.slug} ev={it.event} /> : <TimelineMilestone key={`m-${it.order}`} item={it} />
                  )}
                </ol>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function EnEraOverview({ era, overview, figures, prevEra, nextEra }) {
  const toc = [
    { href: "#facts", label: "Quick facts" },
    { href: "#flow", label: "Timeline" },
    ...overview.themes.map((t) => ({ href: `#${t.id}`, label: t.title.split(":")[0] })),
    ...(overview.japan ? [{ href: "#japan", label: overview.japan.title || "Relations with Japan" }] : []),
    ...(overview.fall ? [{ href: "#fall", label: overview.fallToc || "Why it fell" }] : []),
    ...(figures.length > 0 ? [{ href: "#people", label: "Key figures" }] : []),
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <p style={{ ...bodyText, fontSize: 16, color: COLORS.ink, marginTop: 12 }}>{overview.lead}</p>

      <nav aria-label="Contents" className="mt-6 px-4 py-3" style={panel}>
        <div style={{ fontSize: 11, color: COLORS.gold, letterSpacing: "0.1em", marginBottom: 6 }}>CONTENTS</div>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5" style={{ fontSize: 13 }}>
          {toc.map((t) => (
            <a key={t.href} href={t.href} style={linkStyle}>
              {t.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="mt-10">
        <SectionHeading id="facts" kicker="PROFILE">
          {era.name} at a glance
        </SectionHeading>
        <dl style={panel}>
          {overview.facts.map((f, i) => (
            <div key={i} className="flex gap-3 px-4 py-2.5" style={{ borderTop: i === 0 ? "none" : "1px solid #E6DDC4" }}>
              <dt className="shrink-0" style={{ width: 96, fontSize: 12.5, color: COLORS.gold, ...serif, fontWeight: 700, paddingTop: 1 }}>
                {f.label}
              </dt>
              <dd style={{ fontSize: 14, color: COLORS.ink, lineHeight: 1.6 }}>{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 px-4 py-4" style={{ ...panel, borderLeft: `3px solid ${COLORS.vermilion}` }}>
          <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 8 }}>{era.name} in three points</div>
          <ol className="flex flex-col gap-2">
            {overview.keyPoints.map((pt, i) => (
              <li key={i} className="flex gap-2.5" style={{ fontSize: 14.5, lineHeight: 1.75, color: COLORS.inkSoft }}>
                <span style={{ ...serif, color: COLORS.vermilion, fontWeight: 700 }}>{i + 1}</span>
                <span>{pt}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading id="flow" kicker="CHRONOLOGY">
          Timeline of the {era.name} era
        </SectionHeading>
        <EraTimeline era={era} overview={overview} />
      </section>

      {overview.themes.map((t) => (
        <section key={t.id} className="mt-12">
          <SectionHeading id={t.id}>{t.title}</SectionHeading>
          <div className="flex flex-col gap-3">
            {t.paragraphs.map((para, i) => (
              <p key={i} style={bodyText}>
                {para}
              </p>
            ))}
          </div>
        </section>
      ))}

      {overview.japan && (
        <section className="mt-12">
          <SectionHeading id="japan" kicker="JAPAN">
            {overview.japan.title || "Relations with Japan"}
          </SectionHeading>
          <p style={bodyText}>{overview.japan.intro}</p>
          {overview.japan.items.length > 0 && (
            <ol className="mt-4" style={panel}>
              {overview.japan.items.map((it, i) => (
                <li key={i} className="flex gap-3 px-4 py-2.5" style={{ borderTop: i === 0 ? "none" : "1px solid #E6DDC4" }}>
                  <span className="shrink-0" style={{ ...serif, minWidth: 64, fontSize: 13, color: COLORS.vermilion, fontWeight: 700 }}>
                    {it.yearLabel}
                  </span>
                  <span style={{ fontSize: 14, lineHeight: 1.7, color: COLORS.ink }}>{it.text}</span>
                </li>
              ))}
            </ol>
          )}
        </section>
      )}

      {overview.fall && (
        <section className="mt-12">
          <SectionHeading id="fall" kicker="DECLINE">
            {overview.fallTitle || `Why did the ${era.name} fall?`}
          </SectionHeading>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {overview.fall.map((f, i) => (
              <div key={i} className="px-4 py-3" style={panel}>
                <div className="flex items-baseline gap-2">
                  <span style={{ ...serif, fontSize: 18, fontWeight: 900, color: COLORS.vermilion }}>{i + 1}</span>
                  <span style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{f.title}</span>
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 4 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {figures.length > 0 && (
        <section className="mt-12">
          <SectionHeading id="people" kicker="PEOPLE">
            Key figures
          </SectionHeading>
          <HeritageGrid items={figures} />
        </section>
      )}

      <section className="mt-12">
        <SectionHeading id="faq" kicker="FAQ">
          Frequently asked questions
        </SectionHeading>
        <div className="flex flex-col gap-3">
          {overview.faq.map((f, i) => (
            <div key={i} style={{ ...panel, padding: 14 }}>
              <h3 style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>Q. {f.q}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: COLORS.inkSoft }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {(prevEra || nextEra) && (
        <nav aria-label="Previous and next eras" className="mt-10 grid grid-cols-2 gap-2">
          {prevEra ? (
            <Link href={`/en/eras/${prevEra.id}`} className="px-4 py-3" style={panel}>
              <div style={{ fontSize: 11, color: COLORS.gold }}>← Previous era</div>
              <div style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.ink }}>{prevEra.name}</div>
            </Link>
          ) : (
            <span />
          )}
          {nextEra && (
            <Link href={`/en/eras/${nextEra.id}`} className="px-4 py-3 text-right" style={panel}>
              <div style={{ fontSize: 11, color: COLORS.gold }}>Next era →</div>
              <div style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.ink }}>{nextEra.name}</div>
            </Link>
          )}
        </nav>
      )}
    </>
  );
}
