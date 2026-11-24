import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { HeritageThumb, NavButton, InArticleAd } from "@/components/Shared";
import { FEATURES_EN, FEATURES_READY } from "@/lib/en/features";
import { EnThemeLinks } from "@/components/en/EnMiscLinks";

// Building blocks for the English feature pages (app/(en)/en/<slug>).
export const serif = { fontFamily: "var(--font-serif), serif" };
export const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
export const bodyText = { fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft };

// Links to planned-but-unwritten feature pages are dropped so they never 404
const PLANNED = new Set(FEATURES_EN.map((f) => `/en/${f.slug}`));
const READY_PATHS = new Set(FEATURES_READY.map((f) => `/en/${f.slug}`));
export const isLive = (href) => !PLANNED.has(href) || READY_PATHS.has(href);

export function FeaturePage({ title, intro, jaPath, children, related: relatedAll = [] }) {
  const related = relatedAll.filter((r) => isLive(r.href));
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <article className="max-w-2xl mx-auto px-6 py-10">
        <nav className="flex items-center gap-2 flex-wrap" style={{ fontSize: 12.5 }} aria-label="Breadcrumb">
          <Link href="/en" style={{ color: COLORS.vermilion }}>Timeline</Link>
          <span style={{ color: COLORS.mist }}>›</span>
          <Link href="/en/topics" style={{ color: COLORS.vermilion }}>Topics</Link>
        </nav>
        <h1 style={{ ...serif, fontSize: 28, fontWeight: 900, color: COLORS.ink, lineHeight: 1.3, marginTop: 14, marginBottom: 14 }}>{title}</h1>
        {intro && <p style={{ fontSize: 15.5, lineHeight: 1.85, color: COLORS.ink, marginBottom: 22 }}>{intro}</p>}
        {intro && <InArticleAd lang="en" className="mb-6" />}

        {children}

        {related.length > 0 && (
          <div className="flex items-center gap-2.5 flex-wrap mt-8">
            {related.map((r, i) => (
              <NavButton key={r.href} href={r.href} variant={i === 0 ? "solid" : "outline"}>
                {r.label}
              </NavButton>
            ))}
          </div>
        )}

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <EnThemeLinks />
        </div>

        <div className="mt-8 pt-5" style={{ borderTop: `1px solid ${COLORS.mist}`, fontSize: 13 }}>
          <Link href={jaPath} hrefLang="ja" lang="ja" style={{ color: COLORS.inkSoft }}>
            このページを日本語で読む
          </Link>
        </div>
      </article>
    </div>
  );
}

export function Section({ title, children, id }) {
  return (
    <section id={id} style={{ marginBottom: 32, scrollMarginTop: 16 }}>
      <h2 style={{ ...serif, fontSize: 20, fontWeight: 900, color: COLORS.ink, marginBottom: 12, paddingBottom: 5, borderBottom: `1.5px solid ${COLORS.gold}` }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Paras({ items }) {
  return items.map((t, i) => (
    <p key={i} style={{ ...bodyText, marginTop: i > 0 ? 12 : 0 }}>
      {t}
    </p>
  ));
}

export function HeroImage({ imageUrl, alt, caption, credit }) {
  return (
    <figure style={{ marginBottom: 24 }}>
      <div className="relative" style={{ width: "100%", height: 220, backgroundColor: "#EFE7D0", border: "1px solid #DCD3B8", overflow: "hidden" }}>
        <HeritageThumb imageUrl={imageUrl} name={alt} type="building" />
        {caption && (
          <figcaption
            className="absolute"
            style={{ left: 0, right: 0, bottom: 0, padding: "18px 12px 8px", fontSize: 12, color: "#FBF8F0", background: "linear-gradient(to top, rgba(30,20,10,0.72), rgba(30,20,10,0))" }}
          >
            {caption}
          </figcaption>
        )}
      </div>
      {credit && <div style={{ fontSize: 10, color: COLORS.mist, marginTop: 4 }}>{credit}</div>}
    </figure>
  );
}

export function Facts({ heading, items }) {
  return (
    <section className="mb-8" style={{ ...cardStyle, padding: "14px 16px" }}>
      <h2 style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink, marginBottom: 8 }}>{heading}</h2>
      <dl className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item.q} className="flex flex-col sm:flex-row sm:gap-3" style={{ fontSize: 13.5, lineHeight: 1.75 }}>
            <dt className="shrink-0" style={{ fontWeight: 700, color: COLORS.vermilion, minWidth: 110 }}>{item.q}</dt>
            <dd style={{ color: COLORS.inkSoft }}>{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

// A numbered or plain item with an optional thumbnail (sites, people, works...)
export function ItemCard({ index, title, subtitle, meta, children, imageUrl, imageType = "building", credit, links: allLinks = [] }) {
  const links = allLinks.filter((l) => l?.href && isLive(l.href));
  return (
    <div style={cardStyle}>
      <div className="flex gap-3 p-3">
        {imageUrl && (
          <div className="flex items-center justify-center shrink-0 relative" style={{ width: 96, height: 96, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}>
            <HeritageThumb imageUrl={imageUrl} name={title} type={imageType} />
            {index != null && <NumberBadge n={index} style={{ position: "absolute", top: 4, left: 4 }} />}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            {!imageUrl && index != null && <NumberBadge n={index} />}
            <span style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink }}>{title}</span>
          </div>
          {subtitle && <p style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 2 }}>{subtitle}</p>}
          {meta && <div style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 2 }}>{meta}</div>}
          <div style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 4 }}>{children}</div>
          {credit && <div style={{ fontSize: 10, color: COLORS.mist, marginTop: 4 }}>{credit}</div>}
        </div>
      </div>
      {links.length > 0 && (
        <div className="px-3 pb-3 flex flex-wrap gap-x-4 gap-y-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{ fontSize: 12.5, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
              {l.label} →
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function NumberBadge({ n, style }) {
  return (
    <span
      className="inline-flex items-center justify-center shrink-0"
      style={{ width: 18, height: 18, borderRadius: "50%", backgroundColor: COLORS.vermilion, color: "#FBF8F0", ...serif, fontSize: 10, fontWeight: 700, ...style }}
    >
      {n}
    </span>
  );
}

export function NoteCard({ title, children }) {
  return (
    <div style={{ ...cardStyle, padding: "14px 16px" }}>
      <p style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>{title}</p>
      <div style={{ fontSize: 13.5, lineHeight: 1.8, color: COLORS.inkSoft }}>{children}</div>
    </div>
  );
}

export function DataTable({ head, rows }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="w-full" style={{ borderCollapse: "collapse", fontSize: 13.5, lineHeight: 1.7, minWidth: 480 }}>
        <thead>
          <tr style={{ backgroundColor: COLORS.paperDeep, color: COLORS.ink, ...serif }}>
            {head.map((h) => (
              <th key={h} scope="col" className="text-left px-3 py-2" style={{ fontWeight: 700, borderBottom: `2px solid ${COLORS.vermilion}` }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #E6DEC6" }}>
              {r.map((c, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="text-left align-top px-3 py-2" style={{ ...serif, fontWeight: 700, color: COLORS.ink }}>{c}</th>
                ) : (
                  <td key={j} className="align-top px-3 py-2" style={{ color: COLORS.inkSoft }}>{c}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Map of China (same projection as lib/chinaOutline, viewBox 0 0 500 366) with numbered points.
export function PointMap({ outline, taiwan, points, note, connect = false, labels = [], refs = [] }) {
  return (
    <div style={{ ...cardStyle, padding: 16, marginBottom: 24 }}>
      {note && <p style={{ fontSize: 12, color: COLORS.inkSoft, marginBottom: 10 }}>{note}</p>}
      <svg viewBox="0 0 500 366" style={{ width: "100%", maxHeight: 400, display: "block", margin: "0 auto" }} role="img" aria-label="Map of China">
        <path d={outline} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />
        {taiwan && <path d={taiwan} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />}
        {labels.map((r, i) => (
          <text key={`l${i}`} x={r.x} y={r.y} textAnchor={r.anchor || "middle"} style={{ ...serif, fontSize: 10.5, fill: COLORS.inkSoft, opacity: 0.85 }}>
            {r.label}
          </text>
        ))}
        {refs.map((r, i) => (
          <g key={`r${i}`}>
            <circle cx={r.x} cy={r.y} r="4" fill={COLORS.gold} stroke={COLORS.paper} strokeWidth="1.2" />
            <text x={r.x + (r.dx ?? -8)} y={r.y + (r.dy ?? -9)} textAnchor={r.anchor || "end"} style={{ ...serif, fontSize: 10, fill: COLORS.inkSoft }}>{r.label}</text>
          </g>
        ))}
        {connect && (
          <polyline points={points.map((p) => `${p.x},${p.y}`).join(" ")} fill="none" stroke={COLORS.vermilionSoft} strokeWidth="1.5" strokeDasharray="4 3" />
        )}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="7.5" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="1.4" />
            <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central" style={{ ...serif, fontSize: 8.5, fontWeight: 700, fill: "#FBF8F0" }}>
              {i + 1}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// Find an English event by slug for "related event" links
export function eventLink(slug, label = "Read the event") {
  return slug ? [{ href: `/en/events/${slug}`, label }] : [];
}

// A vertical list of dated steps; each item may link to an event (href) or an anchor on the page.
export function FlowList({ items }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((f, i) => {
        const inner = (
          <div className="flex items-baseline gap-3 px-4 py-2.5" style={{ ...cardStyle, borderLeft: `3px solid ${COLORS.vermilion}` }}>
            <span style={{ ...serif, fontSize: 13, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>{f.year}</span>
            <div className="flex-1 min-w-0">
              <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{f.title}</div>
              {f.note && <div style={{ fontSize: 13, color: COLORS.inkSoft, lineHeight: 1.6, marginTop: 2 }}>{f.note}</div>}
            </div>
            {(f.href || f.anchor) && <span className="shrink-0" style={{ color: COLORS.vermilion, fontSize: 13 }}>→</span>}
          </div>
        );
        if (f.href) return <Link key={i} href={f.href}>{inner}</Link>;
        if (f.anchor) return <a key={i} href={`#${f.anchor}`}>{inner}</a>;
        return <div key={i}>{inner}</div>;
      })}
    </div>
  );
}

// One battle: number, name, year, place, the two sides, narrative, optional portrait and links.
export function BattleCard({ b }) {
  return (
    <div id={b.id} style={{ ...cardStyle, scrollMarginTop: 16 }}>
      <div className="flex gap-3 p-4">
        {b.portrait?.imageUrl && (
          <div className="flex items-center justify-center shrink-0" style={{ width: 88, height: 88, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}>
            <HeritageThumb imageUrl={b.portrait.imageUrl} name={b.portrait.name} type="figure" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <NumberBadge n={b.no} />
            <span style={{ ...serif, fontSize: 17, fontWeight: 700, color: COLORS.ink }}>{b.name}</span>
            <span style={{ fontSize: 12.5, color: COLORS.gold, ...serif }}>{b.year}</span>
          </div>
          {b.location && <div style={{ fontSize: 12, color: COLORS.vermilionSoft, marginTop: 4 }}>{b.location}</div>}
          {b.sides?.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3" style={{ fontSize: 13 }}>
              {b.sides.map(([side, people]) => (
                <div key={side}>
                  <span style={{ color: COLORS.gold, fontWeight: 700 }}>{side}: </span>
                  <span style={{ color: COLORS.inkSoft }}>{people}</span>
                </div>
              ))}
            </div>
          )}
          <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 10 }}>{b.body}</p>
          {b.portrait?.credit && <div style={{ fontSize: 10, color: COLORS.mist, marginTop: 4 }}>{b.portrait.credit}</div>}
          {b.links?.filter((l) => l.href && isLive(l.href)).length > 0 && (
            <div className="flex items-center gap-3 flex-wrap mt-3" style={{ fontSize: 13 }}>
              {b.links.filter((l) => l.href && isLive(l.href)).map((l) => (
                <Link key={l.href + l.label} href={l.href} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>{l.label} →</Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Helpers for feature pages: find a Japanese event by era and title fragment, and an English figure by era and Japanese name.
export function jaEventSlug(ERAS, stripRuby, eraId, key) {
  return ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(key))?.slug || null;
}
