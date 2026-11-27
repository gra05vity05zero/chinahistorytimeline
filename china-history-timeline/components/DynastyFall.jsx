// 「〇〇はなぜ滅亡したのか」記事（/sanguo-fall・/tang-fall・/ming-fall・/qing-fall）の共通レイアウト。
// /qin-fall と同じ構成（結論 → 基本情報 → 人物相関図 → 5つの理由 → 比較表 → 年表 → もしも → その後 → まとめ → FAQ）を、
// ページごとのデータで組み立てる。文字列はすべてルビ記法 {{漢字|ふりがな}} に対応する。
import { stripRuby, COLORS, SITE_URL } from "@/lib/data";
import { BackToTopButton, NavButton, EventListItem, MiscLinksSection, KeyFacts, InArticleAd } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const serif = "var(--font-serif), serif";
const h2Style = { fontFamily: serif, fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 12 };
const h3Style = { fontFamily: serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 8 };
const pStyle = { fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 };
const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 14 };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const thStyle = { textAlign: "left", fontWeight: 700, color: COLORS.ink, padding: "8px 10px", borderBottom: `1.5px solid ${COLORS.mist}`, whiteSpace: "nowrap" };
const tdStyle = { padding: "8px 10px", borderBottom: "1px solid #DCD3B8", verticalAlign: "top", color: COLORS.inkSoft };

const KIND_COLOR = { 土台: COLORS.jade, 転機: COLORS.gold, 加速: COLORS.vermilionSoft, 引き金: COLORS.vermilion };
const NUMS = "①②③④⑤⑥⑦";

function Paras({ items, style = pStyle }) {
  return items.map((t, i) => (
    <p key={i} style={style}>
      <RubyText text={t} />
    </p>
  ));
}

function MoreLink({ href, children, block = false }) {
  return (
    <a href={href} style={{ ...linkStyle, fontSize: 12, ...(block ? { display: "inline-block", marginTop: 12 } : {}) }}>
      {children}
    </a>
  );
}

function EventMore({ event, block }) {
  if (!event) return null;
  return (
    <MoreLink href={`/events/${event.slug}`} block={block}>
      「<RubyText text={event.title} />」を年表で読む →
    </MoreLink>
  );
}

// 人物相関図。SVGにはルビを振れないので、本文で読みを示した人物だけを載せる。
// 座標はページ側で指定する（viewBox 380 × height、人物の箱は 104 × 48 で中心座標を指定）
const NODE_W = 104;
const NODE_H = 48;

function RelationDiagram({ id, diagram }) {
  const { title, height, bands, nodes, lines = [], labels = [] } = diagram;
  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 380 ${height}`} role="img" aria-labelledby={`${id}-diagram-title`} style={{ width: "100%", maxWidth: 440, display: "block", margin: "0 auto" }}>
        <title id={`${id}-diagram-title`}>{title}</title>
        <defs>
          <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={COLORS.inkSoft} />
          </marker>
          <marker id={`${id}-arrow-accent`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={COLORS.vermilion} />
          </marker>
        </defs>

        {bands.map((b) => (
          <g key={b.label}>
            <rect x={4} y={b.y} width={372} height={b.h} fill="#FBF8F0" stroke="#DCD3B8" />
            <text x={12} y={b.y + 14} fontSize={10} fill={b.color} style={{ fontFamily: serif, letterSpacing: "0.1em" }}>
              {b.label}
            </text>
          </g>
        ))}

        <g fill="none">
          {lines.map((l, i) => {
            const marker = `url(#${id}-arrow${l.accent ? "-accent" : ""})`;
            return (
              <polyline
                key={i}
                points={l.points.map((p) => p.join(",")).join(" ")}
                stroke={l.accent ? COLORS.vermilion : COLORS.inkSoft}
                strokeWidth={l.accent ? 1.8 : 1.2}
                markerEnd={marker}
                markerStart={l.both ? marker : undefined}
              />
            );
          })}
        </g>
        {labels.map((t, i) => (
          <text
            key={i}
            x={t.x}
            y={t.y}
            textAnchor={t.anchor || "middle"}
            fontSize={10}
            fill={t.accent ? COLORS.vermilion : COLORS.inkSoft}
            style={{ fontFamily: serif }}
          >
            {t.text}
          </text>
        ))}

        {nodes.map((n) => (
          <g key={n.name}>
            <rect x={n.x - NODE_W / 2} y={n.y - NODE_H / 2} width={NODE_W} height={NODE_H} fill="#fff" stroke={bands[n.band].color} strokeWidth={1.5} />
            <text x={n.x} y={n.y - 4} textAnchor="middle" fontSize={n.name.length > 5 ? 13 : 15} fontWeight={700} fill={COLORS.ink} style={{ fontFamily: serif }}>
              {n.name}
            </text>
            <text x={n.x} y={n.y + 15} textAnchor="middle" fontSize={9.5} fill={COLORS.inkSoft} style={{ fontFamily: serif }}>
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}

function Rulers({ items }) {
  return (
    <div className="flex flex-col gap-2" style={{ marginBottom: 10 }}>
      {items.map((e, i) => (
        <div key={i} style={{ ...cardStyle, padding: "10px 14px" }}>
          <div className="flex items-baseline gap-2 flex-wrap">
            <span style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
              <RubyText text={e.name} />
            </span>
            <span style={{ fontSize: 11.5, color: COLORS.gold }}>{e.reign}</span>
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 2 }}>
            <RubyText text={e.note} />
          </p>
        </div>
      ))}
    </div>
  );
}

function SimpleTable({ head, rows, minWidth = 520 }) {
  return (
    <div style={{ overflowX: "auto", backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
      <table style={{ width: "100%", minWidth, borderCollapse: "collapse", fontSize: 12, lineHeight: 1.6 }}>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} style={thStyle}>
                <RubyText text={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((c, j) => (
                <td key={j} style={j === 0 ? { ...tdStyle, fontWeight: 700, color: COLORS.ink, whiteSpace: "nowrap" } : tdStyle}>
                  <RubyText text={c} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 基本情報セクションの中身：見出し＋段落、歴代皇帝カード、表を順に並べる
function BasicBlock({ block, first }) {
  const h3 = block.h3 && (
    <h3 style={{ ...h3Style, marginTop: first ? 0 : 20 }}>
      <RubyText text={block.h3} />
    </h3>
  );
  return (
    <>
      {h3}
      {block.lead && <Paras items={[block.lead]} />}
      {block.paras && <Paras items={block.paras} />}
      {block.rulers && <Rulers items={block.rulers} />}
      {block.table && <SimpleTable head={block.table.head} rows={block.table.rows} />}
      {block.link && (
        <MoreLink href={block.link.href}>
          <RubyText text={block.link.label} /> →
        </MoreLink>
      )}
      {block.event && <EventMore event={block.event} />}
    </>
  );
}

export function DynastyFallArticle({ a }) {
  const url = `${SITE_URL}${a.path}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    inLanguage: "ja",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: a.breadcrumb, item: url },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const toc = [
    ["kihon", a.basics.heading],
    ["soukan", "人物相関図"],
    ["riyu", a.reasonsHeading],
    ["hikaku", `${a.reasons.length}つの理由の比較表`],
    ["nenpyo", a.chronology.heading],
    ["moshi", a.whatIf.heading],
    ["sonogo", a.after.heading],
    ["matome", "まとめ"],
  ];

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(articleJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(breadcrumbJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(faqJsonLd)) }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: serif, fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 6, lineHeight: 1.5 }}>
          <RubyText text={a.h1} />
          <span style={{ display: "block", fontSize: 17, marginTop: 4 }}>
            <RubyText text={a.h1Sub} />
          </span>
        </h1>
        <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: serif, marginBottom: 14 }}>
          <RubyText text={a.meta} />
        </div>

        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 20 }}>
          <RubyText text={a.intro} />
        </p>

        <InArticleAd />

        <KeyFacts heading={a.keyFactsHeading} items={a.keyFacts} />

        <nav aria-label="目次" style={{ backgroundColor: "#FBF8F0", border: `1px solid #DCD3B8`, padding: "14px 18px", marginBottom: 32 }}>
          <div style={{ fontFamily: serif, fontSize: 11, letterSpacing: "0.15em", color: COLORS.gold, marginBottom: 8 }}>目次</div>
          <ol className="grid gap-x-4 gap-y-1.5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", fontSize: 12.5 }}>
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} style={linkStyle}>
                  <RubyText text={label} />
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section style={{ marginBottom: 36 }} id="kihon">
          <h2 style={h2Style}>
            <RubyText text={a.basics.heading} />
          </h2>
          {a.basics.blocks.map((b, i) => (
            <BasicBlock key={i} block={b} first={i === 0} />
          ))}
        </section>

        <section style={{ marginBottom: 36 }} id="soukan">
          <h2 style={h2Style}>人物相関図</h2>
          <Paras items={[a.diagram.lead]} />
          <RelationDiagram id={a.id} diagram={a.diagram} />
        </section>

        <section style={{ marginBottom: 36 }} id="riyu">
          <h2 style={h2Style}>
            <RubyText text={a.reasonsHeading} />
          </h2>
          <Paras items={[a.reasonsLead]} />
          <div className="flex flex-col gap-4">
            {a.reasons.map((r, i) => (
              <div key={r.id} id={r.id} style={cardStyle}>
                <h3 className="flex items-baseline gap-2" style={h3Style}>
                  <span style={{ color: COLORS.vermilion }}>{NUMS[i]}</span>
                  <RubyText text={r.title} />
                </h3>
                {r.body.map((t, j) => (
                  <p key={j} style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: j < r.body.length - 1 ? 8 : 0 }}>
                    <RubyText text={t} />
                  </p>
                ))}
              </div>
            ))}
          </div>
          <EventMore event={a.reasonsEvent} block />
        </section>

        <section style={{ marginBottom: 36 }} id="hikaku">
          <h2 style={h2Style}>{a.reasons.length}つの理由の比較表</h2>
          <p style={pStyle}>
            {a.reasons.length}つの理由を、<ruby>滅亡<rt>めつぼう</rt></ruby>の中で果たした役割で分けると「土台（長く続いた原因）→ 転機 → 加速 → 引き金」の流れになります。
          </p>
          <div style={{ overflowX: "auto", backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
            <table style={{ width: "100%", minWidth: 560, borderCollapse: "collapse", fontSize: 12, lineHeight: 1.6 }}>
              <thead>
                <tr>
                  <th style={thStyle}>理由</th>
                  <th style={thStyle}>役割</th>
                  <th style={thStyle}>時期</th>
                  <th style={thStyle}>主な人物</th>
                  <th style={thStyle}>
                    <ruby>滅亡<rt>めつぼう</rt></ruby>への影響
                  </th>
                </tr>
              </thead>
              <tbody>
                {a.comparison.map((row) => (
                  <tr key={row.cause}>
                    <td style={{ ...tdStyle, fontWeight: 700, color: COLORS.ink, whiteSpace: "nowrap" }}>
                      <RubyText text={row.cause} />
                    </td>
                    <td style={{ ...tdStyle, whiteSpace: "nowrap" }}>
                      <span style={{ fontSize: 11, color: "#fff", backgroundColor: KIND_COLOR[row.kind], padding: "2px 7px" }}>{row.kind}</span>
                    </td>
                    <td style={{ ...tdStyle, whiteSpace: "nowrap" }}>
                      <RubyText text={row.when} />
                    </td>
                    <td style={tdStyle}>
                      <RubyText text={row.who} />
                    </td>
                    <td style={tdStyle}>
                      <RubyText text={row.effect} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 36 }} id="nenpyo">
          <h2 style={h2Style}>
            <RubyText text={a.chronology.heading} />
          </h2>
          <Paras items={[a.chronology.lead]} />
          <div className="flex flex-col gap-3">
            {a.chronology.items.map((c) => (
              <div key={c.y + c.text.slice(0, 8)} className="flex gap-3">
                <div className="shrink-0" style={{ width: 84, fontFamily: serif, paddingTop: 1 }}>
                  <div style={{ fontSize: 12.5, color: COLORS.vermilion }}>{c.y}</div>
                  {c.sub && (
                    <div style={{ fontSize: 10.5, color: COLORS.gold }}>
                      <RubyText text={c.sub} />
                    </div>
                  )}
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    lineHeight: 1.75,
                    color: COLORS.inkSoft,
                    borderLeft: `2px solid ${c.late ? COLORS.vermilion : COLORS.mist}`,
                    paddingLeft: 12,
                  }}
                >
                  <RubyText text={c.text} />
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginTop: 10 }}>
            <RubyText text={a.chronology.note} />
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="moshi">
          <h2 style={h2Style}>
            <RubyText text={a.whatIf.heading} />
          </h2>
          <Paras items={a.whatIf.paras} />
        </section>

        <section style={{ marginBottom: 36 }} id="sonogo">
          <h2 style={h2Style}>
            <RubyText text={a.after.heading} />
          </h2>
          {a.after.blocks.map((b, i) => (
            <div key={i}>
              <h3 style={{ ...h3Style, marginTop: i === 0 ? 0 : 18 }}>
                <RubyText text={b.h3} />
              </h3>
              <Paras items={b.paras} />
            </div>
          ))}
          {a.after.cards && (
            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {a.after.cards.map(([head, text]) => (
                <div key={head} style={cardStyle}>
                  <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: COLORS.ink, marginBottom: 4 }}>
                    <RubyText text={head} />
                  </div>
                  <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft }}>
                    <RubyText text={text} />
                  </p>
                </div>
              ))}
            </div>
          )}
          {a.after.link && (
            <MoreLink href={a.after.link.href} block>
              <RubyText text={a.after.link.label} /> →
            </MoreLink>
          )}
        </section>

        <section style={{ marginBottom: 36 }} id="matome">
          <h2 style={h2Style}>まとめ</h2>
          <div style={cardStyle}>
            <ul className="flex flex-col gap-1.5" style={{ fontSize: 12.5, lineHeight: 1.75, color: COLORS.inkSoft }}>
              {a.summary.bullets.map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden style={{ color: COLORS.vermilion }}>・</span>
                  <span>
                    <RubyText text={t} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ marginTop: 12 }}>
            <Paras items={a.summary.paras} />
          </div>
        </section>

        <section style={{ marginBottom: 32 }} id="faq">
          <h2 style={h2Style}>よくある質問</h2>
          <div className="flex flex-col gap-3">
            {a.faq.map((f) => (
              <div key={f.q} style={cardStyle}>
                <div style={{ fontFamily: serif, fontSize: 13.5, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                  Q. <RubyText text={f.q} />
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft }}>
                  <RubyText text={f.a} />
                </p>
              </div>
            ))}
          </div>
        </section>

        {a.relatedEvents.length > 0 && (
          <section style={{ marginBottom: 28 }} id="dekigoto">
            <h2 style={h2Style}>
              <RubyText text={a.relatedEventsHeading} />
            </h2>
            <div>
              {a.relatedEvents.map((ev) => (
                <EventListItem key={ev.slug} event={ev} />
              ))}
            </div>
          </section>
        )}

        <section>
          <div className="flex items-center gap-2.5 flex-wrap">
            {a.nav.map((n, i) => (
              <NavButton key={n.href} href={n.href} variant={i === 0 ? "solid" : "outline"}>
                <RubyText text={n.label} />
              </NavButton>
            ))}
          </div>
        </section>

        <RelatedEraGuides path={a.path} eraIds={a.relatedEraIds} />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
