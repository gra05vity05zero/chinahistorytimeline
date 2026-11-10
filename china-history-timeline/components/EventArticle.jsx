import { useId } from "react";
import Link from "next/link";
import { COLORS, stripRuby, wikimediaThumb } from "@/lib/constants";
import { CHINA_OUTLINE } from "@/lib/chinaOutline";
import { RubyText } from "@/components/Ruby";

// 出来事ページの詳しい解説（lib/eventDetails.js に登録された出来事のみ）。
// 文章・箇条書き・表・流れ図・比較カードを、内容に合わせて組み合わせて表示する

const serif = { fontFamily: "var(--font-serif), serif" };
const panel = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const bodyText = { fontSize: 14.5, lineHeight: 1.95, color: COLORS.inkSoft };

function Paragraph({ text }) {
  return (
    <p style={bodyText}>
      <RubyText text={text} />
    </p>
  );
}

function BulletList({ items }) {
  return (
    <ul className="grid gap-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2" style={bodyText}>
          <span aria-hidden style={{ color: COLORS.vermilion, flexShrink: 0 }}>
            ●
          </span>
          {/* item は文字列か、太字の見出し付きの { title, text } */}
          <span>
            {typeof item === "string" ? (
              <RubyText text={item} />
            ) : (
              <>
                <strong style={{ color: COLORS.ink }}>
                  <RubyText text={item.title} />
                </strong>
                ：<RubyText text={item.text} />
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Table({ caption, head, rows }) {
  // スマホでも横スクロールせずに収まるよう、見出しも折り返す
  const cell = { padding: "8px 8px", borderBottom: "1px solid #E4DBC4", verticalAlign: "top", textAlign: "left" };
  return (
    <div className="overflow-x-auto" style={{ border: "1px solid #DCD3B8" }}>
      <table className="w-full" style={{ borderCollapse: "collapse", fontSize: 13.5, lineHeight: 1.75, color: COLORS.ink, backgroundColor: "#fff" }}>
        {caption && (
          <caption className="text-left" style={{ ...serif, fontSize: 12.5, color: COLORS.gold, padding: "8px 10px 0", captionSide: "top", backgroundColor: "#fff" }}>
            <RubyText text={caption} />
          </caption>
        )}
        <thead>
          <tr style={{ backgroundColor: "#F0E8D2" }}>
            {head.map((h, i) => (
              <th key={i} scope="col" style={{ ...cell, ...serif, fontWeight: 700 }}>
                <RubyText text={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((c, i) =>
                i === 0 ? (
                  <th key={i} scope="row" style={{ ...cell, ...serif, fontWeight: 700, color: COLORS.vermilion, minWidth: "4.5em" }}>
                    <RubyText text={c} />
                  </th>
                ) : (
                  <td key={i} style={{ ...cell, color: COLORS.inkSoft }}>
                    <RubyText text={c} />
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 縦の流れ図。label は年や順番、text は内容
function Flow({ steps }) {
  return (
    <ol className="relative" style={{ paddingLeft: 22 }}>
      <span aria-hidden className="absolute" style={{ left: 6, top: 8, bottom: 8, width: 2, backgroundColor: "#E4DBC4" }} />
      {steps.map((s, i) => (
        <li key={i} className="relative pb-4 last:pb-0">
          <span
            aria-hidden
            className="absolute"
            style={{ left: -22, top: 6, width: 14, height: 14, borderRadius: "50%", backgroundColor: s.highlight ? COLORS.vermilion : COLORS.paper, border: `2px solid ${COLORS.vermilion}` }}
          />
          <div style={{ ...serif, fontSize: 13, fontWeight: 700, color: s.highlight ? COLORS.vermilion : COLORS.gold }}>
            <RubyText text={s.label} />
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 2 }}>
            <RubyText text={s.text} />
          </div>
        </li>
      ))}
    </ol>
  );
}

// 2〜3列の比較カード（スマホでは縦に並ぶ）
function Compare({ columns }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {columns.map((col, i) => (
        <div key={i} className="px-4 py-3" style={{ ...panel, borderTop: `3px solid ${col.color || COLORS.vermilion}` }}>
          <div style={{ ...serif, fontSize: 15, fontWeight: 900, color: COLORS.ink }}>
            <RubyText text={col.title} />
          </div>
          {col.sub && (
            <div style={{ fontSize: 12, color: COLORS.gold, marginTop: 2 }}>
              <RubyText text={col.sub} />
            </div>
          )}
          <ul className="mt-2 grid gap-1.5">
            {col.items.map((item, j) => (
              <li key={j} className="flex gap-2" style={{ fontSize: 13.5, lineHeight: 1.8, color: COLORS.inkSoft }}>
                <span aria-hidden style={{ color: col.color || COLORS.vermilion, flexShrink: 0 }}>
                  ・
                </span>
                <span>
                  <RubyText text={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// 補足のひとこと（豆知識・注意書き）
function Note({ title, text }) {
  return (
    <div className="px-4 py-3" style={{ backgroundColor: "#F5EFDC", borderLeft: `3px solid ${COLORS.gold}` }}>
      {title && (
        <div style={{ ...serif, fontSize: 13, fontWeight: 700, color: COLORS.gold, marginBottom: 2 }}>
          <RubyText text={title} />
        </div>
      )}
      <div style={{ fontSize: 13.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
        <RubyText text={text} />
      </div>
    </div>
  );
}

function Related({ items }) {
  return (
    <div className="grid gap-2">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="flex items-center justify-between gap-3 px-4 py-2.5 hover:opacity-90" style={panel}>
          <span className="min-w-0">
            <span className="block" style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
              <RubyText text={item.label} />
            </span>
            {item.note && (
              <span className="block" style={{ fontSize: 12, lineHeight: 1.6, color: COLORS.inkSoft, marginTop: 2 }}>
                <RubyText text={item.note} />
              </span>
            )}
          </span>
          <span aria-hidden style={{ color: COLORS.vermilion }}>
            →
          </span>
        </Link>
      ))}
    </div>
  );
}

// 数字で見るカード（規模・期間などをひと目で）
function Figures({ items }) {
  return (
    <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}>
      {items.map((item, i) => (
        <div key={i} className="px-3 py-3 text-center" style={panel}>
          <div style={{ ...serif, fontSize: 22, fontWeight: 900, color: COLORS.vermilion, lineHeight: 1.3 }}>
            <RubyText text={item.value} />
          </div>
          <div style={{ fontSize: 12, lineHeight: 1.6, color: COLORS.inkSoft, marginTop: 4 }}>
            <RubyText text={item.label} />
          </div>
        </div>
      ))}
    </div>
  );
}

// Wikimedia Commonsの画像（file はCommonsのファイル名）。credit は作者・ライセンスの表記
function Figure({ file, alt, caption, credit, maxHeight = 360 }) {
  const href = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, "_"))}`;
  const src = wikimediaThumb(`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replace(/ /g, "_"))}`, 800);
  return (
    <figure style={{ ...panel, padding: 8 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={stripRuby(alt || caption)} loading="lazy" decoding="async" style={{ width: "100%", maxHeight, objectFit: "contain", display: "block", backgroundColor: "#fff" }} />
      <figcaption style={{ fontSize: 12.5, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 6 }}>
        <RubyText text={caption} />
        <a href={href} target="_blank" rel="noopener noreferrer" className="block" style={{ fontSize: 10.5, color: COLORS.mist, marginTop: 2 }}>
          {credit}
        </a>
      </figcaption>
    </figure>
  );
}

// 中国の輪郭（lib/chinaOutline.jsと同じ図法）に地点・経路・範囲を描く地図。座標は経度・緯度で書く
const projX = (lon) => 7.458 * lon - 528.2;
const projY = (lat) => 511.6 - 9.138 * lat;
const toPoints = (coords) => coords.map(([lon, lat]) => `${projX(lon).toFixed(1)},${projY(lat).toFixed(1)}`).join(" ");

function MapBlock({ caption, viewBox = [0, 0, 500, 366], points = [], routes = [], areas = [], legend }) {
  const [, , w] = viewBox;
  const k = w / 500; // 拡大しても文字や線の太さが変わらないようにする係数
  const id = useId().replace(/:/g, "");
  return (
    <figure style={{ ...panel, padding: 8 }}>
      <svg viewBox={viewBox.join(" ")} role="img" aria-label={stripRuby(caption || "地図")} style={{ width: "100%", maxHeight: 520, display: "block", backgroundColor: "#F4F1E8" }}>
        <defs>
          {routes.map((r, i) => (
            <marker key={i} id={`${id}-arrow-${i}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={r.color || COLORS.vermilion} />
            </marker>
          ))}
        </defs>
        <path d={CHINA_OUTLINE} fill="#FFFDF7" stroke={COLORS.mist} strokeWidth={1 * k} />
        {areas.map((a, i) => (
          <g key={i}>
            <polygon points={toPoints(a.coords)} fill={a.color || COLORS.vermilion} fillOpacity={0.22} stroke={a.color || COLORS.vermilion} strokeWidth={1.2 * k} strokeDasharray={`${4 * k} ${3 * k}`} />
            {a.label && (
              <text x={projX(a.labelAt[0])} y={projY(a.labelAt[1])} textAnchor="middle" fontSize={11 * k} fontWeight="700" fill={a.color || COLORS.vermilion} style={serif}>
                {stripRuby(a.label)}
              </text>
            )}
          </g>
        ))}
        {routes.map((r, i) => (
          <polyline
            key={i}
            points={toPoints(r.coords)}
            fill="none"
            stroke={r.color || COLORS.vermilion}
            strokeWidth={2.2 * k}
            strokeLinejoin="round"
            strokeDasharray={r.dashed ? `${5 * k} ${4 * k}` : undefined}
            markerEnd={r.arrow === false ? undefined : `url(#${id}-arrow-${i})`}
          />
        ))}
        {points.map((p, i) => {
          const x = projX(p.lon);
          const y = projY(p.lat);
          const anchor = p.anchor || "start";
          const dx = p.dx ?? (anchor === "end" ? -7 : anchor === "middle" ? 0 : 7);
          const dy = p.dy ?? (anchor === "middle" ? -8 : 4);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={(p.main ? 5 : 3.5) * k} fill={p.main ? COLORS.vermilion : COLORS.ink} stroke="#fff" strokeWidth={1.2 * k} />
              <text x={x + dx * k} y={y + dy * k} textAnchor={anchor} fontSize={(p.main ? 12.5 : 11) * k} fontWeight={p.main ? 700 : 500} fill={COLORS.ink} stroke="#FFFDF7" strokeWidth={3 * k} paintOrder="stroke" style={serif}>
                {stripRuby(p.name)}
              </text>
            </g>
          );
        })}
      </svg>
      {(caption || legend) && (
        <figcaption style={{ fontSize: 12.5, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 6 }}>
          {legend && (
            <span className="flex flex-wrap gap-x-4 gap-y-1 mb-1">
              {legend.map((l, i) => (
                <span key={i} className="inline-flex items-center gap-1.5">
                  <svg width="22" height="8" aria-hidden>
                    <line x1="1" y1="4" x2="21" y2="4" stroke={l.color || COLORS.vermilion} strokeWidth="2.5" strokeDasharray={l.dashed ? "4 3" : undefined} />
                  </svg>
                  <RubyText text={l.label} />
                </span>
              ))}
            </span>
          )}
          {caption && <RubyText text={caption} />}
        </figcaption>
      )}
    </figure>
  );
}

const BLOCKS = { p: Paragraph, list: BulletList, table: Table, flow: Flow, compare: Compare, note: Note, related: Related, figures: Figures, image: Figure, map: MapBlock };

function Block({ block }) {
  const Component = BLOCKS[block.type];
  return Component ? <Component {...block} /> : null;
}

export default function EventArticle({ detail }) {
  return (
    <div className="mt-8">
      <div className="px-5 py-4" style={{ ...panel, borderLeft: `4px solid ${COLORS.vermilion}` }}>
        <div style={{ ...serif, fontSize: 14, fontWeight: 900, color: COLORS.vermilion, letterSpacing: "0.1em", marginBottom: 8 }}>ざっくり言うと</div>
        <ol className="grid gap-2">
          {detail.points.map((point, i) => (
            <li key={i} className="flex gap-3" style={{ fontSize: 14.5, lineHeight: 1.85, color: COLORS.ink }}>
              <span
                aria-hidden
                className="flex items-center justify-center shrink-0"
                style={{ ...serif, width: 22, height: 22, marginTop: 3, fontSize: 12, fontWeight: 700, color: "#fff", backgroundColor: COLORS.vermilion }}
              >
                {i + 1}
              </span>
              <span>
                <RubyText text={point} />
              </span>
            </li>
          ))}
        </ol>
      </div>

      {detail.sections.map((section) => (
        <section key={section.heading} className="mt-9">
          <h2 style={{ ...serif, fontSize: 19, fontWeight: 900, color: COLORS.ink, lineHeight: 1.6, paddingBottom: 6, marginBottom: 14, borderBottom: `2px solid ${COLORS.vermilion}` }}>
            <RubyText text={section.heading} />
          </h2>
          <div className="grid gap-4">
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </section>
      ))}

      {detail.faq && detail.faq.length > 0 && (
        <section className="mt-9">
          <h2 style={{ ...serif, fontSize: 19, fontWeight: 900, color: COLORS.ink, paddingBottom: 6, marginBottom: 14, borderBottom: `2px solid ${COLORS.vermilion}` }}>
            よくある質問
          </h2>
          <div className="grid gap-3">
            {detail.faq.map((f) => (
              <div key={f.q} className="px-4 py-3" style={panel}>
                <div className="flex gap-2" style={{ ...serif, fontSize: 14.5, fontWeight: 700, color: COLORS.ink, lineHeight: 1.7 }}>
                  <span aria-hidden style={{ color: COLORS.vermilion }}>
                    Q.
                  </span>
                  <RubyText text={f.q} />
                </div>
                <div className="flex gap-2 mt-1" style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft }}>
                  <span aria-hidden style={{ ...serif, color: COLORS.gold, fontWeight: 700 }}>
                    A.
                  </span>
                  <span>
                    <RubyText text={f.a} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <p className="mt-6" style={{ fontSize: 11.5, color: COLORS.inkSoft }}>
        更新日：<time dateTime={detail.updatedAt}>{detail.updatedAt.replace(/^(\d+)-0?(\d+)-0?(\d+)$/, "$1年$2月$3日")}</time>
        {detail.sources && <>　主な出典：{detail.sources}</>}
      </p>
    </div>
  );
}
