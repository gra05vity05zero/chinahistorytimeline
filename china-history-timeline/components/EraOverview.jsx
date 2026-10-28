import Link from "next/link";
import { COLORS, CATEGORY_STYLE } from "@/lib/constants";
import { RubyText } from "@/components/Ruby";
import { HeritageGrid } from "@/components/Shared";

// 時代ページの解説パート（lib/eraOverviews/ に登録された王朝のみ表示）。
// サーバーコンポーネントとして描画し、出来事・人物は lib/data.js のデータをそのまま使う

const PHASE_COLORS = [COLORS.gold, COLORS.vermilion, COLORS.jade, COLORS.inkSoft];

const serif = { fontFamily: "var(--font-serif), serif" };
const panel = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const bodyText = { fontSize: 13.5, lineHeight: 1.95, color: COLORS.inkSoft };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

export function SectionHeading({ id, kicker, children }) {
  return (
    <div id={id} style={{ scrollMarginTop: 16 }}>
      {kicker && (
        <div style={{ ...serif, fontSize: 11.5, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 4 }}>{kicker}</div>
      )}
      <h2 style={{ ...serif, fontSize: 20, fontWeight: 900, color: COLORS.ink, marginBottom: 12 }}>{children}</h2>
    </div>
  );
}

// "630s"・"c. 7000 BC"・"AD 23"・"4世紀 BC" のような年表記から、並べ替え・時代区分の判定用に数値の年を取り出す。
// 紀元前は負の数にする（年表データ・milestones・時代区分の start/end も紀元前は負の数で書く）
export function yearNumber(year) {
  if (typeof year === "number") return year;
  const str = String(year);
  const m = str.match(/\d+/);
  if (!m) return null;
  let n = Number(m[0]);
  if (str.includes("世紀")) n = (n - 1) * 100 + 50;
  return /BC/.test(str) ? -n : n;
}

// 数値の年を「前221」「618」の形で表示する
export function formatYear(n) {
  return n < 0 ? `前${-n}` : `${n}`;
}

// 出来事データの年表記（"c. 2070 BC"・"356 BC"・"AD 23"・"4世紀 BC"）を、
// milestones と同じ「前2070頃」「前356」「23」「前4世紀」の形にそろえて表示する
export function displayEventYear(year) {
  const str = String(year).trim();
  const approx = /^c\.\s*/.test(str);
  const bc = /\s*BC$/.test(str);
  const core = str
    .replace(/^c\.\s*/, "")
    .replace(/\s*BC$/, "")
    .replace(/^AD\s*/, "")
    .replace(/^(\d+)s$/, "$1年代");
  return `${bc ? "前" : ""}${core}${approx ? "頃" : ""}`;
}

// 出来事（lib/data.js）と補足の年表項目（milestones）を年順に並べ、開始年で各時代区分へ振り分ける。
// 出来事は全件どこかの区分に入るので、この年表がそのまま時代の出来事一覧を兼ねる
function buildTimeline(era, overview) {
  const items = [
    ...era.events.map((ev, order) => ({ kind: "event", year: ev.year, sortYear: yearNumber(ev.year), order, event: ev })),
    ...(overview.milestones || []).map((m, i) => ({ kind: "milestone", year: formatYear(m.year), sortYear: yearNumber(m.year), order: 1000 + i, text: m.text })),
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

const LINE_X = 11; // 縦線の中心位置（px）
const RAIL = 34; // 縦線から本文までの左余白（px）

// lineX・rail はトップページの年表（王朝の印に縦線を合わせる）で差し替える。onClick はスクロール復元用の記録に使う
export function TimelineEvent({ item, onClick, lineX = LINE_X, rail = RAIL }) {
  const ev = item.event;
  const cat = CATEGORY_STYLE[ev.category] || CATEGORY_STYLE["文化"];
  return (
    <li className="relative" style={{ paddingLeft: rail }}>
      <span
        aria-hidden
        className="absolute"
        style={{ left: lineX - 6, top: 14, width: 12, height: 12, borderRadius: "50%", backgroundColor: cat.color, boxShadow: `0 0 0 3px ${COLORS.paper}` }}
      />
      <Link href={`/events/${ev.slug}`} onClick={onClick} className="block group">
        <div className="px-4 py-3 transition-all duration-200 group-hover:shadow-sm" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
          <div className="flex items-baseline justify-between gap-3">
            <span style={{ ...serif, fontSize: 13, fontWeight: 700, color: cat.color }}>
              <RubyText text={displayEventYear(ev.year)} />
            </span>
            <span className="shrink-0" style={{ fontSize: 10, color: cat.color, letterSpacing: "0.08em" }}>
              <RubyText text={cat.label} />
            </span>
          </div>
          <div style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink, marginTop: 2 }}>
            <RubyText text={ev.title} />
          </div>
          <p
            style={{
              fontSize: 12.5,
              lineHeight: 1.9,
              color: COLORS.inkSoft,
              marginTop: 4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            <RubyText text={ev.summary} />
          </p>
          <div style={{ fontSize: 12, color: COLORS.vermilion, marginTop: 4, textAlign: "right" }}>詳しく見る →</div>
        </div>
      </Link>
    </li>
  );
}

export function TimelineMilestone({ item, lineX = LINE_X, rail = RAIL }) {
  return (
    <li className="relative flex gap-3" style={{ paddingLeft: rail }}>
      <span
        aria-hidden
        className="absolute"
        style={{ left: lineX - 4, top: 7, width: 8, height: 8, borderRadius: "50%", backgroundColor: COLORS.paper, border: `2px solid ${COLORS.mist}` }}
      />
      <span className="shrink-0" style={{ ...serif, minWidth: 40, fontSize: 12.5, color: COLORS.gold, fontWeight: 700 }}>
        {item.year}
      </span>
      <span style={{ fontSize: 13, lineHeight: 1.75, color: COLORS.inkSoft }}>
        <RubyText text={item.text} />
      </span>
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
            <li key={phase.name} id={`phase-${i}`} style={{ scrollMarginTop: 16 }}>
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
                  {phase.name.slice(0, 1)}
                </span>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ ...serif, fontSize: 15, fontWeight: 900, color }}>{phase.name}</span>
                  <span style={{ ...serif, fontSize: 12, color: COLORS.gold }}>
                    {formatYear(phase.start)} – {phase.endLabel || formatYear(phase.end)}
                  </span>
                </div>
                <h3 style={{ ...serif, fontSize: 17, fontWeight: 700, color: COLORS.ink, marginTop: 4, marginBottom: 6 }}>
                  <RubyText text={phase.headline} />
                </h3>
                <p style={bodyText}>
                  <RubyText text={phase.text} />
                </p>
              </div>
              {items.length > 0 && (
                <ol className="mt-4 flex flex-col gap-3">
                  {items.map((it) =>
                    it.kind === "event" ? (
                      <TimelineEvent key={it.event.slug} item={it} />
                    ) : (
                      <TimelineMilestone key={`m-${it.order}`} item={it} />
                    )
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

export function EraOverview({ era, overview, figures, prevEra, nextEra, japanCallout }) {
  const toc = [
    { href: "#facts", label: "基本データ" },
    { href: "#flow", label: "年表" },
    ...overview.themes.map((t) => ({ href: `#${t.id}`, label: t.title.split("：")[0] })),
    ...(overview.japan ? [{ href: "#japan", label: overview.japan.title || "日本との関係" }] : []),
    ...(overview.fall ? [{ href: "#fall", label: overview.fallToc || "{{滅亡|めつぼう}}の理由" }] : []),
    { href: "#people", label: "主な人物" },
    { href: "#faq", label: "よくある質問" },
  ];

  return (
    <>
      <p style={{ ...bodyText, fontSize: 14, color: COLORS.ink, marginTop: 12 }}>
        <RubyText text={overview.lead} />
      </p>

      <nav aria-label="目次" className="mt-6 px-4 py-3" style={panel}>
        <div style={{ fontSize: 11, color: COLORS.gold, letterSpacing: "0.1em", marginBottom: 6 }}>目次</div>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5" style={{ fontSize: 12.5 }}>
          {toc.map((t) => (
            <a key={t.href} href={t.href} style={linkStyle}>
              <RubyText text={t.label} />
            </a>
          ))}
        </div>
      </nav>

      <section className="mt-10">
        <SectionHeading id="facts" kicker="PROFILE">
          ひと目でわかる<RubyText text={era.name} />
        </SectionHeading>
        <dl style={panel}>
          {overview.facts.map((f, i) => (
            <div key={f.label} className="flex gap-3 px-4 py-2.5" style={{ borderTop: i === 0 ? "none" : "1px solid #E6DDC4" }}>
              <dt className="shrink-0" style={{ width: 64, fontSize: 12, color: COLORS.gold, ...serif, fontWeight: 700, paddingTop: 1 }}>
                <RubyText text={f.label} />
              </dt>
              <dd style={{ fontSize: 13.5, color: COLORS.ink, lineHeight: 1.7 }}>
                <RubyText text={f.value} />
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 px-4 py-4" style={{ ...panel, borderLeft: `3px solid ${COLORS.vermilion}` }}>
          <div style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.ink, marginBottom: 8 }}>
            3行でわかる<RubyText text={era.name} />
          </div>
          <ol className="flex flex-col gap-2">
            {overview.keyPoints.map((pt, i) => (
              <li key={i} className="flex gap-2.5" style={{ fontSize: 13.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
                <span style={{ ...serif, color: COLORS.vermilion, fontWeight: 700 }}>{i + 1}</span>
                <span>
                  <RubyText text={pt} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading id="flow" kicker="CHRONOLOGY">
          <RubyText text={era.name} />の年表
        </SectionHeading>
        <EraTimeline era={era} overview={overview} />
      </section>

      {overview.themes.map((t) => (
        <section key={t.id} className="mt-12">
          <SectionHeading id={t.id}>
            <RubyText text={t.title} />
          </SectionHeading>
          <div className="flex flex-col gap-3">
            {t.paragraphs.map((para, i) => (
              <p key={i} style={bodyText}>
                <RubyText text={para} />
              </p>
            ))}
          </div>
        </section>
      ))}

      {overview.japan && (
        <section className="mt-12">
          <SectionHeading id="japan" kicker="JAPAN">
            <RubyText text={overview.japan.title || "日本との関係"} />
          </SectionHeading>
          <p style={bodyText}>
            <RubyText text={overview.japan.intro} />
          </p>
          {overview.japan.items?.length > 0 && (
            <ol className="mt-4" style={panel}>
              {overview.japan.items.map((it, i) => (
                <li key={i} className="flex gap-3 px-4 py-2.5" style={{ borderTop: i === 0 ? "none" : "1px solid #E6DDC4" }}>
                  <span className="shrink-0" style={{ ...serif, minWidth: 44, fontSize: 13, color: COLORS.vermilion, fontWeight: 700 }}>
                    {formatYear(it.year)}
                  </span>
                  <span style={{ fontSize: 13, lineHeight: 1.75, color: COLORS.ink }}>
                    <RubyText text={it.text} />
                  </span>
                </li>
              ))}
            </ol>
          )}
          {japanCallout}
        </section>
      )}
      {!overview.japan && japanCallout}

      {overview.fall && (
        <section className="mt-12">
          <SectionHeading id="fall" kicker="DECLINE">
            {overview.fallTitle ? (
              <RubyText text={overview.fallTitle} />
            ) : (
              <>
                <RubyText text={era.name} />はなぜ<RubyText text="{{滅|ほろ}}" />んだのか
              </>
            )}
          </SectionHeading>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {overview.fall.map((f, i) => (
              <div key={i} className="px-4 py-3" style={panel}>
                <div className="flex items-baseline gap-2">
                  <span style={{ ...serif, fontSize: 18, fontWeight: 900, color: COLORS.vermilion }}>{i + 1}</span>
                  <span style={{ ...serif, fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={f.title} />
                  </span>
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 4 }}>
                  <RubyText text={f.text} />
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {figures.length > 0 && (
        <section className="mt-12">
          <SectionHeading id="people" kicker="PEOPLE">
            主な人物
          </SectionHeading>
          <HeritageGrid items={figures} eraId={era.id} />
          <div className="mt-3" style={{ fontSize: 13 }}>
            <Link href={`/people/${era.id}`} style={linkStyle}>
              <RubyText text={era.name} />の人物一覧を見る →
            </Link>
          </div>
        </section>
      )}

      <section className="mt-12">
        <SectionHeading id="faq" kicker="FAQ">
          よくある質問
        </SectionHeading>
        <div className="flex flex-col gap-3">
          {overview.faq.map((f, i) => (
            <div key={i} style={{ ...panel, padding: 14 }}>
              <div style={{ ...serif, fontSize: 13.5, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                Q. <RubyText text={f.q} />
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft }}>
                <RubyText text={f.a} />
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading kicker="RELATED">もっと詳しく</SectionHeading>
        <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {overview.related.map((r) => (
            <Link key={r.href} href={r.href} className="flex items-center justify-between gap-3 px-4 py-3 hover:opacity-90" style={panel}>
              <div>
                <div style={{ ...serif, fontSize: 13.5, fontWeight: 700, color: COLORS.ink }}>
                  <RubyText text={r.label} />
                </div>
                <div style={{ fontSize: 11.5, color: COLORS.inkSoft, marginTop: 2 }}>
                  <RubyText text={r.note} />
                </div>
              </div>
              <span aria-hidden style={{ color: COLORS.vermilion }}>→</span>
            </Link>
          ))}
        </div>
      </section>

      {(prevEra || nextEra) && (
        <nav aria-label="前後の時代" className="mt-10 grid grid-cols-2 gap-2">
          {prevEra ? (
            <Link href={`/eras/${prevEra.id}`} className="px-4 py-3" style={panel}>
              <div style={{ fontSize: 11, color: COLORS.gold }}>← 前の時代</div>
              <div style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
                <RubyText text={prevEra.name} />
              </div>
            </Link>
          ) : (
            <span />
          )}
          {nextEra && (
            <Link href={`/eras/${nextEra.id}`} className="px-4 py-3 text-right" style={panel}>
              <div style={{ fontSize: 11, color: COLORS.gold }}>次の時代 →</div>
              <div style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
                <RubyText text={nextEra.name} />
              </div>
            </Link>
          )}
        </nav>
      )}
    </>
  );
}
