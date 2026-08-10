"use client";

import { useEffect, useRef } from "react";
import { COLORS, CATEGORY_STYLE, ADSENSE_CLIENT_ID } from "@/lib/data";

export function SealMark({ char, active }) {
  return (
    <div
      className="flex items-center justify-center shrink-0 transition-all duration-300"
      style={{
        width: 40,
        height: 40,
        border: `2px solid ${COLORS.vermilion}`,
        color: active ? "#fff" : COLORS.vermilion,
        backgroundColor: active ? COLORS.vermilion : COLORS.paper,
        transform: "rotate(2deg)",
        boxShadow: active ? `0 0 0 3px ${COLORS.paper}, 0 0 0 4px ${COLORS.vermilion}55` : "none",
      }}
    >
      <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 18, fontWeight: 700, transform: "rotate(-2deg)" }}>
        {char}
      </span>
    </div>
  );
}

export function EventCard({ event, onOpen }) {
  const cat = CATEGORY_STYLE[event.category] || CATEGORY_STYLE["文化"];
  return (
    <button
      onClick={() => onOpen(event.slug)}
      className="w-full text-left mb-3 last:mb-0 group"
      style={{ display: "block" }}
    >
      <div
        className="px-4 py-3 transition-all duration-200 group-hover:shadow-sm"
        style={{
          backgroundColor: "#FBF8F0",
          border: `1px solid #DCD3B8`,
          borderLeft: `3px solid ${cat.color}`,
        }}
      >
        <div className="flex items-baseline justify-between gap-3">
          <div className="flex items-baseline gap-2">
            <span style={{ fontFamily: "'Noto Serif SC', serif", color: COLORS.inkSoft, fontSize: 13 }}>
              {event.year}
            </span>
            <span style={{ fontFamily: "'Noto Serif SC', serif", color: COLORS.ink, fontSize: 16, fontWeight: 600 }}>
              {event.title}
            </span>
          </div>
          <span className="shrink-0 uppercase tracking-wider flex items-center gap-1.5" style={{ fontSize: 10, color: cat.color, letterSpacing: "0.08em" }}>
            {event.media && event.media.length > 0 && (
              <span title="関連作品あり" style={{ color: COLORS.vermilion, fontSize: 11 }}>●</span>
            )}
            {event.heritage && event.heritage.length > 0 && (
              <span title="関連する建造物・人物あり" style={{ color: COLORS.gold, fontSize: 11 }}>●</span>
            )}
            {cat.label}
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <p
            className="pr-4"
            style={{ fontSize: 12.5, lineHeight: 1.6, color: COLORS.inkSoft, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          >
            {event.summary}
          </p>
          <span className="shrink-0" style={{ color: COLORS.vermilion, fontSize: 13 }}>→</span>
        </div>
      </div>
    </button>
  );
}

export function HeritageGrid({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
      {items.map((it, idx) => (
        <div key={idx} style={{ border: `1px solid ${COLORS.mist}`, backgroundColor: "#fff" }}>
          <div
            className="flex items-center justify-center"
            style={{ aspectRatio: "4 / 3", backgroundColor: "#EFE7D0", borderBottom: `1px solid ${COLORS.mist}`, overflow: "hidden" }}
          >
            {it.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={it.imageUrl} alt={it.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 700, color: COLORS.mist }}>
                {it.name.slice(0, 1)}
              </span>
            )}
          </div>
          <div className="px-2.5 py-2">
            <div style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.ink, fontFamily: "'Noto Serif SC', serif" }}>
              {it.name}
            </div>
            <div style={{ fontSize: 11, color: COLORS.inkSoft, lineHeight: 1.5, marginTop: 2 }}>{it.description}</div>
            {it.credit && <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 3 }}>{it.credit}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

export function AdSenseSlot({ slot }) {
  const loaded = useRef(false);
  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // AdSenseスクリプト未読み込み時は何もしない
    }
  }, []);
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={ADSENSE_CLIENT_ID}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
