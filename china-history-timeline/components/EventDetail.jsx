"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { COLORS, CATEGORY_STYLE, HERITAGE_TYPES, resolveMediaUrl, stripRuby } from "@/lib/constants";
import { SealMark, HeritageGrid, A8AdBlock, MiscLinksSection, JapanTimelineCallout } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const MEDIA_TYPES = [
  { key: "movie", label: "映画・ドラマ" },
  { key: "anime", label: "アニメ" },
  { key: "game", label: "ゲーム" },
  { key: "book", label: "{{書籍|しょせき}}・{{漫画|まんが}}" },
];

// 楚漢戦争特集ページに関連する出来事（秦滅亡前後の挙兵・鴻門の会・漢の建国）かどうかを判定する
function isChuHanEvent(era, event) {
  const t = stripRuby(event.title);
  if (era.id === "qin") return t.includes("陳勝") || t.includes("鴻門");
  if (era.id === "westernhan") return t.includes("劉邦") && t.includes("建国");
  return false;
}

// 春秋・戦国時代の合戦特集ページに関連する出来事かどうかを判定する
function isChunqiuZhanguoEvent(era) {
  return era.id === "chunqiu" || era.id === "zhanguo";
}

function isSuitangEvent(era) {
  return era.id === "sui" || era.id === "tang" || era.id === "wudai";
}

export default function EventDetail({ event, era, prev, next, japanTimeline }) {
  const router = useRouter();
  const cat = CATEGORY_STYLE[event.category] || CATEGORY_STYLE["文化"];

  const onBack = () => {
    // Timeline側がsessionStorageの returnToEra を見てスクロール復元する
    router.push("/");
  };

  const onNext = () => {
    if (next) router.push(`/events/${next.event.slug}`);
  };

  const onPrev = () => {
    if (prev) router.push(`/events/${prev.event.slug}`);
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="sticky top-0 z-20 px-5 py-3" style={{ backgroundColor: COLORS.paperDeep, borderBottom: `1px solid ${COLORS.mist}` }}>
        <button onClick={onBack} className="flex items-center gap-2" style={{ color: COLORS.vermilion, fontFamily: "var(--font-serif), serif", fontSize: 13 }}>
          <span aria-hidden>←</span> 年表に<ruby>戻<rt>もど</rt></ruby>る
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-5">
          <SealMark char={era.seal} active />
          <div>
            <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>
              <RubyText text={era.name} /> ／ <RubyText text={era.period} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span style={{ fontFamily: "var(--font-serif), serif", color: COLORS.inkSoft, fontSize: 14 }}><RubyText text={event.year} /></span>
          <span className="uppercase tracking-wider px-2 py-0.5" style={{ fontSize: 10, color: "#fff", backgroundColor: cat.color, letterSpacing: "0.08em" }}>
            <RubyText text={cat.label} />
          </span>
        </div>

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginBottom: 16 }}>
          <RubyText text={event.title} />
        </h1>

        <p style={{ fontSize: 15, lineHeight: 1.9, color: COLORS.inkSoft }}>
          <RubyText text={event.summary} />
        </p>

        <div className="flex items-center gap-3 mt-5" style={{ fontSize: 12 }}>
          <Link href={`/people/${era.id}`} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            <RubyText text={era.name} />の人物一覧
          </Link>
          <span style={{ color: COLORS.mist }}>|</span>
          <Link href={`/eras/${era.id}`} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            <RubyText text={era.name} />の時代解説・年表
          </Link>
          {era.id === "sanguo" && (
            <>
              <span style={{ color: COLORS.mist }}>|</span>
              <Link href="/sanguo-battles" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                三国時代 合戦マップ
              </Link>
            </>
          )}
          {isChuHanEvent(era, event) && (
            <>
              <span style={{ color: COLORS.mist }}>|</span>
              <Link href="/chuhan-battles" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                <ruby>楚漢戦争<rt>そかんせんそう</rt></ruby> 合戦マップ
              </Link>
            </>
          )}
          {isChunqiuZhanguoEvent(era) && (
            <>
              <span style={{ color: COLORS.mist }}>|</span>
              <Link href="/chunqiu-zhanguo-battles" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                春秋・戦国 合戦マップ
              </Link>
            </>
          )}
          {isSuitangEvent(era) && (
            <>
              <span style={{ color: COLORS.mist }}>|</span>
              <Link href="/suitang-battles" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                <ruby>隋唐<rt>ずいとう</rt></ruby>・五代 合戦マップ
              </Link>
            </>
          )}
        </div>

        {japanTimeline && (
          <JapanTimelineCallout eraName={era.name} href={japanTimeline.href} japaneseEras={japanTimeline.japaneseEras} />
        )}

        {event.heritage && event.heritage.length > 0 && (
          <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
            <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 4 }}>
              関連する建造物・国宝・人物
            </div>
            <div style={{ fontSize: 10.5, color: COLORS.inkSoft, marginBottom: 12 }}>
              ※ 画像はWikimedia Commonsのパブリックドメイン／CCライセンス素材を使用しています（各画像下にクレジット表記）
            </div>
            {Object.keys(HERITAGE_TYPES).map((typeKey) => {
              const items = event.heritage.filter((h) => h.type === typeKey);
              if (!items.length) return null;
              return (
                <div key={typeKey} className="mb-5 last:mb-0">
                  <div style={{ fontSize: 11, color: COLORS.gold, marginBottom: 6, letterSpacing: "0.05em" }}>
                    <RubyText text={HERITAGE_TYPES[typeKey].label} />
                  </div>
                  <HeritageGrid items={items} eraId={era.id} />
                </div>
              );
            })}

            <A8AdBlock ad="travelWest" />
          </div>
        )}

        {event.media && event.media.length > 0 && (
          <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
            <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 4 }}>
              関連作品
            </div>
            <div style={{ fontSize: 10.5, color: COLORS.inkSoft, marginBottom: 12 }}>
              ※ 一部のリンクはAmazonアソシエイトによるアフィリエイト広告を<ruby>含<rt>ふく</rt></ruby>みます
            </div>
            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
              {event.media.map((med, idx) => {
                const href = resolveMediaUrl(med);
                const typeLabel = MEDIA_TYPES.find((m) => m.key === med.type)?.label || med.type;
                return (
                  <div key={idx} className="px-3 py-3" style={{ border: `1px solid ${COLORS.mist}`, backgroundColor: "#fff" }}>
                    <div style={{ fontSize: 10, color: COLORS.vermilion, letterSpacing: "0.06em", marginBottom: 6 }}>
                      <RubyText text={typeLabel} />
                    </div>
                    <div style={{ fontSize: 12.5, color: COLORS.ink, lineHeight: 1.5 }}>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer sponsored" style={{ color: COLORS.ink, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                          <RubyText text={med.title} />
                        </a>
                      ) : (
                        <RubyText text={med.title} />
                      )}
                      {med.year && <span style={{ color: COLORS.inkSoft, fontSize: 11 }}> （<RubyText text={med.year} />）</span>}
                      {href && (
                        <span className="ml-1 align-middle" style={{ fontSize: 9, color: "#fff", backgroundColor: COLORS.vermilionSoft, padding: "1px 4px", letterSpacing: "0.05em" }}>
                          PR
                        </span>
                      )}
                    </div>
                    {med.description && (
                      <div style={{ fontSize: 11, color: COLORS.inkSoft, lineHeight: 1.5, marginTop: 4 }}>
                        <RubyText text={med.description} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <A8AdBlock ad="audible" />
          </div>
        )}

        {prev && (
          <button
            onClick={onPrev}
            className="w-full mt-10 flex items-center justify-between gap-3 px-5 py-4 text-left"
            style={{ backgroundColor: COLORS.vermilionSoft, color: "#fff" }}
          >
            <span aria-hidden style={{ fontSize: 20 }}>←</span>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 10.5, letterSpacing: "0.15em", opacity: 0.85 }}>前のイベントへ</div>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, marginTop: 2 }}>
                <RubyText text={prev.event.year} />　<RubyText text={prev.event.title} />
              </div>
            </div>
          </button>
        )}

        {next ? (
          <button
            onClick={onNext}
            className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left ${prev ? "mt-3" : "mt-10"}`}
            style={{ backgroundColor: COLORS.vermilion, color: "#fff" }}
          >
            <div>
              <div style={{ fontSize: 10.5, letterSpacing: "0.15em", opacity: 0.85 }}>次のイベントへ</div>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, marginTop: 2 }}>
                <RubyText text={next.event.year} />　<RubyText text={next.event.title} />
              </div>
            </div>
            <span aria-hidden style={{ fontSize: 20 }}>→</span>
          </button>
        ) : (
          <div className="mt-10 px-5 py-4 text-center" style={{ backgroundColor: "#F5EFDC", color: COLORS.inkSoft, fontSize: 13 }}>
            これが年表の最後のイベントです
          </div>
        )}

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
