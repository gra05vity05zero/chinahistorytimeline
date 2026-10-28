import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { RubyText } from "@/components/Ruby";
import { SealMark } from "@/components/Shared";

// 中国歴史ドラマ（/dramas）関連の表示部品。
// 出来事ページ（クライアントコンポーネント）からも使うので、ここでは lib/data.js・lib/dramas.js を import せず、
// lib/dramas.js の toDramaCard() で作った軽量なオブジェクトを props で受け取る

const serif = { fontFamily: "var(--font-serif), serif" };
const panel = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };

export const CHARACTER_TYPES = {
  real: { label: "実在", color: COLORS.jade },
  composite: { label: "合成", color: COLORS.gold },
  fictional: { label: "架空", color: COLORS.inkSoft },
};

export function StarRating({ score, size = 13 }) {
  return (
    <span role="img" aria-label={`史実度 5段階中${score}`} style={{ color: COLORS.vermilion, fontSize: size, letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
      {"★".repeat(score)}
      <span style={{ color: COLORS.mist }}>{"★".repeat(5 - score)}</span>
    </span>
  );
}

export function CharacterTypeBadge({ type }) {
  const t = CHARACTER_TYPES[type] || CHARACTER_TYPES.fictional;
  return (
    <span
      className="inline-block"
      style={{ fontSize: 10.5, color: "#fff", backgroundColor: t.color, padding: "1px 6px", letterSpacing: "0.05em", whiteSpace: "nowrap" }}
    >
      {t.label}
    </span>
  );
}

export function DramaCard({ drama }) {
  return (
    <Link href={`/dramas/${drama.slug}`} className="flex gap-3 px-4 py-3 hover:opacity-90" style={panel}>
      <SealMark char={drama.seal} />
      <div className="min-w-0 flex-1">
        <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, lineHeight: 1.5 }}>
          『<RubyText text={drama.title} />』
        </div>
        <div style={{ fontSize: 11.5, color: COLORS.gold, ...serif, marginTop: 2 }}>
          {drama.eraNames.map((n, i) => (
            <span key={i}>
              {i > 0 && "・"}
              <RubyText text={n} />
            </span>
          ))}
          ｜{drama.period}
        </div>
        <div className="flex items-center gap-2 flex-wrap" style={{ fontSize: 11.5, color: COLORS.inkSoft, marginTop: 4 }}>
          <span>
            史実度 <StarRating score={drama.score} size={12} />
          </span>
          {drama.leadModel && (
            <span>
              主人公のモデル：<RubyText text={drama.leadModel} />
            </span>
          )}
        </div>
      </div>
      <span aria-hidden className="self-center" style={{ color: COLORS.vermilion }}>
        →
      </span>
    </Link>
  );
}

// 時代ページ・出来事ページの末尾に置く逆引きブロック。該当作品がなければ何も出さない
export function DramaBacklinks({ heading, dramas, className = "mt-10 pt-6" }) {
  if (!dramas || dramas.length === 0) return null;
  return (
    <section className={className} style={{ borderTop: `1px solid ${COLORS.mist}` }}>
      <h2 style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink, marginBottom: 4 }}>{heading}</h2>
      <p style={{ fontSize: 12, color: COLORS.inkSoft, marginBottom: 10 }}>ドラマと史実の違い、登場人物の実在モデルを解説しています。</p>
      <div className="grid gap-2">
        {dramas.map((d) => (
          <DramaCard key={d.slug} drama={d} />
        ))}
      </div>
      <Link href="/dramas" className="inline-block mt-3 hover:underline" style={{ fontSize: 12.5, color: COLORS.vermilion }}>
        中国歴史ドラマを時代順に見る →
      </Link>
    </section>
  );
}
