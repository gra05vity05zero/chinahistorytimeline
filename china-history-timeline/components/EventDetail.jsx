"use client";

import { useRouter } from "next/navigation";
import {
  COLORS,
  CATEGORY_STYLE,
  HERITAGE_TYPES,
  resolveMediaUrl,
  getNextEvent,
  getPrevEvent,
} from "@/lib/data";
import { SealMark, HeritageGrid } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const MEDIA_TYPES = [
  { key: "movie", label: "映画・ドラマ" },
  { key: "anime", label: "アニメ" },
  { key: "game", label: "ゲーム" },
  { key: "book", label: "書籍・漫画" },
];

export default function EventDetail({ event, era }) {
  const router = useRouter();
  const cat = CATEGORY_STYLE[event.category] || CATEGORY_STYLE["文化"];
  const next = getNextEvent(event.slug);
  const prev = getPrevEvent(event.slug);

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
        <button onClick={onBack} className="flex items-center gap-2" style={{ color: COLORS.vermilion, fontFamily: "'Noto Serif SC', serif", fontSize: 13 }}>
          <span aria-hidden>←</span> 年表に戻る
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-5">
          <SealMark char={era.seal} active />
          <div>
            <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>
              {era.name} ／ {era.period}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span style={{ fontFamily: "'Noto Serif SC', serif", color: COLORS.inkSoft, fontSize: 14 }}>{event.year}</span>
          <span className="uppercase tracking-wider px-2 py-0.5" style={{ fontSize: 10, color: "#fff", backgroundColor: cat.color, letterSpacing: "0.08em" }}>
            {cat.label}
          </span>
        </div>

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginBottom: 16 }}>
          <RubyText text={event.title} />
        </h1>

        <p style={{ fontSize: 15, lineHeight: 1.9, color: COLORS.inkSoft }}>
          <RubyText text={event.summary} />
        </p>

        {event.heritage && event.heritage.length > 0 && (
          <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
            <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 13, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 4 }}>
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
                    {HERITAGE_TYPES[typeKey].label}
                  </div>
                  <HeritageGrid items={items} />
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 13, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 4 }}>
            関連作品
          </div>
          <div style={{ fontSize: 10.5, color: COLORS.inkSoft, marginBottom: 12 }}>
            ※ 一部のリンクはAmazonアソシエイトによるアフィリエイト広告を含みます
          </div>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
            {MEDIA_TYPES.map((m) => {
              const items = (event.media || []).filter((med) => med.type === m.key);
              return (
                <div key={m.key} className="px-3 py-4" style={{ border: items.length ? `1px solid ${COLORS.mist}` : `1px dashed ${COLORS.mist}`, backgroundColor: items.length ? "#fff" : "#FBF8F0" }}>
                  <div style={{ fontSize: 11, color: COLORS.vermilion, letterSpacing: "0.06em", marginBottom: 8, textAlign: items.length ? "left" : "center" }}>
                    {m.label}
                  </div>
                  {items.length ? (
                    <ul className="space-y-1.5">
                      {items.map((med, idx) => {
                        const href = resolveMediaUrl(med);
                        return (
                          <li key={idx} style={{ fontSize: 12.5, color: COLORS.ink, lineHeight: 1.5 }}>
                            {href ? (
                              <a href={href} target="_blank" rel="noopener noreferrer sponsored" style={{ color: COLORS.ink, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                                {med.title}
                              </a>
                            ) : (
                              med.title
                            )}
                            {med.year && <span style={{ color: COLORS.inkSoft, fontSize: 11 }}> （{med.year}）</span>}
                            {href && (
                              <span className="ml-1 align-middle" style={{ fontSize: 9, color: "#fff", backgroundColor: COLORS.vermilionSoft, padding: "1px 4px", letterSpacing: "0.05em" }}>
                                PR
                              </span>
                            )}
                            {med.description && (
                              <div style={{ fontSize: 11, color: COLORS.inkSoft, lineHeight: 1.5, marginTop: 2 }}>
                                {med.description}
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <div style={{ fontSize: 11, color: COLORS.mist, textAlign: "center" }}>まだ登録されていません</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {prev && (
          <button
            onClick={onPrev}
            className="w-full mt-10 flex items-center justify-between gap-3 px-5 py-4 text-left"
            style={{ backgroundColor: COLORS.vermilionSoft, color: "#fff" }}
          >
            <span aria-hidden style={{ fontSize: 20 }}>←</span>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 10.5, letterSpacing: "0.15em", opacity: 0.85 }}>前のイベントへ</div>
              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 16, fontWeight: 700, marginTop: 2 }}>
                {prev.event.year}　<RubyText text={prev.event.title} />
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
              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 16, fontWeight: 700, marginTop: 2 }}>
                {next.event.year}　<RubyText text={next.event.title} />
              </div>
            </div>
            <span aria-hidden style={{ fontSize: 20 }}>→</span>
          </button>
        ) : (
          <div className="mt-10 px-5 py-4 text-center" style={{ backgroundColor: "#F5EFDC", color: COLORS.inkSoft, fontSize: 13 }}>
            これが年表の最後のイベントです
          </div>
        )}

      </div>
    </div>
  );
}
