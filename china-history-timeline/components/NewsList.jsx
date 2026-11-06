import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { formatNewsDate } from "@/lib/news";
import { RubyText } from "@/components/Ruby";

const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

// compact: トップページ用（要約を省き、見出しと出典だけ）
export function NewsList({ items, compact = false }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item.id} id={compact ? undefined : item.id} style={{ ...cardStyle, padding: "12px 14px", scrollMarginTop: 16 }}>
          <div style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>
            <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
          </div>
          {compact ? (
            <Link
              href={`/news#${item.id}`}
              className="block"
              style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, lineHeight: 1.6, color: COLORS.ink, marginTop: 2 }}
            >
              <RubyText text={item.title} />
            </Link>
          ) : (
            <>
              <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, lineHeight: 1.6, color: COLORS.ink, marginTop: 2 }}>
                <RubyText text={item.title} />
              </h2>
              <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                <RubyText text={item.summary} />
              </p>
              {item.related?.length > 0 && (
                <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ fontSize: 12, marginTop: 8 }}>
                  {item.related.map((r) => (
                    <Link key={r.href} href={r.href} style={linkStyle}>
                      <RubyText text={r.label} /> →
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
          <div style={{ fontSize: 11, color: COLORS.inkSoft, marginTop: 6 }}>
            出典：
            <a href={item.url} target="_blank" rel="noopener noreferrer nofollow" style={linkStyle}>
              {item.source}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
