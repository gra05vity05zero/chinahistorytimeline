import Link from "next/link";
import { ERAS, COLORS } from "@/lib/data";
import { getEraIdsLinkingTo } from "@/lib/eraOverviews";
import { SealMark } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

// 特集ページの末尾に置く「この時代を詳しく」リンク集。
// 時代ページ（lib/eraOverviews/）の related にこのページを挙げている時代を自動で並べるので、
// 時代ページ側に関連リンクを足せば、特集ページ側にも逆向きのリンクが出る。
// eraIds を渡すと、自動で求めた時代に加えてその時代も表示する
export function RelatedEraGuides({ path, eraIds = [], className = "mt-10 pt-6" }) {
  const ids = new Set([...eraIds, ...getEraIdsLinkingTo(path)]);
  const eras = ERAS.filter((era) => ids.has(era.id));
  if (eras.length === 0) return null;
  return (
    <section className={className} style={{ borderTop: `1px solid ${COLORS.mist}` }}>
      <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
        この時代を詳しく
      </h2>
      <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
        {eras.map((era) => (
          <Link
            key={era.id}
            href={`/eras/${era.id}`}
            className="flex items-center gap-3 px-3 py-2.5 hover:opacity-90"
            style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}
          >
            <SealMark char={era.seal} />
            <div className="min-w-0">
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
                <RubyText text={era.name} />とはどんな時代？
              </div>
              <div style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>
                <RubyText text={era.period} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
