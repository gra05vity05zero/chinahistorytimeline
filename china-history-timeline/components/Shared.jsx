"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { COLORS, CATEGORY_STYLE, ADSENSE_CLIENT_ID, stripRuby } from "@/lib/data";
import { RubyText } from "@/components/Ruby";

export function NavButton({ href, children, variant = "solid" }) {
  const solid = variant === "solid";
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center"
      style={{
        fontFamily: "'Noto Serif SC', serif",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.05em",
        padding: "9px 18px",
        color: solid ? "#fff" : COLORS.vermilion,
        backgroundColor: solid ? COLORS.vermilion : "transparent",
        border: `1.5px solid ${COLORS.vermilion}`,
      }}
    >
      {children}
    </Link>
  );
}

export function BackToTopButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5"
      style={{ color: COLORS.vermilion, fontFamily: "'Noto Serif SC', serif", fontSize: 13 }}
    >
      <span aria-hidden>←</span> 年表トップへ戻る
    </Link>
  );
}

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
              <RubyText text={event.title} />
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
            {stripRuby(event.summary)}
          </p>
          <span className="shrink-0" style={{ color: COLORS.vermilion, fontSize: 13 }}>→</span>
        </div>
      </div>
    </button>
  );
}

function HeritageThumb({ imageUrl, name, type }) {
  const [failed, setFailed] = useState(false);
  if (imageUrl && !failed) {
    // 人物の肖像画は縦長の掛け軸などが多く、4:3の枠でcoverすると顔や全身が
    // 切れてしまうため、containで画像全体が必ず収まるようにする。
    // 建造物・国宝の写真は横長が多くcoverの方が枠を綺麗に埋められる。
    const isFigure = type === "figure";
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={imageUrl}
        alt={stripRuby(name)}
        style={{ width: "100%", height: "100%", objectFit: isFigure ? "contain" : "cover", objectPosition: isFigure ? "center" : "top" }}
        onError={() => setFailed(true)}
      />
    );
  }
  return (
    <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 700, color: COLORS.mist }}>
      {stripRuby(name).slice(0, 1)}
    </span>
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
            <HeritageThumb imageUrl={it.imageUrl} name={it.name} type={it.type} />
          </div>
          <div className="px-2.5 py-2">
            <div style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.ink, fontFamily: "'Noto Serif SC', serif" }}>
              <RubyText text={it.name} />
            </div>
            <div style={{ fontSize: 11, color: COLORS.inkSoft, lineHeight: 1.5, marginTop: 2 }}>
              <RubyText text={it.description} />
            </div>
            {it.credit && <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 3 }}>{it.credit}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

export function PersonCard({ person }) {
  return (
    <div style={{ border: `1px solid ${COLORS.mist}`, backgroundColor: "#fff" }}>
      <div
        className="flex items-center justify-center"
        style={{ aspectRatio: "4 / 3", backgroundColor: "#EFE7D0", borderBottom: `1px solid ${COLORS.mist}`, overflow: "hidden" }}
      >
        <HeritageThumb imageUrl={person.imageUrl} name={person.name} type="figure" />
      </div>
      <div className="px-2.5 py-2.5">
        <div style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.ink, fontFamily: "'Noto Serif SC', serif" }}>
          <RubyText text={person.name} />
        </div>
        <div style={{ fontSize: 11.5, color: COLORS.inkSoft, lineHeight: 1.6, marginTop: 3 }}>
          <RubyText text={person.description} />
        </div>
        {person.credit && <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 3 }}>{person.credit}</div>}
        {person.events && person.events.length > 0 && (
          <div className="mt-2.5 pt-2" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
            <div style={{ fontSize: 10, color: COLORS.gold, marginBottom: 4, letterSpacing: "0.05em" }}>関連する出来事</div>
            <div className="flex flex-col gap-1">
              {person.events.map((ev, i) => (
                <Link
                  key={i}
                  href={`/events/${ev.slug}`}
                  style={{ fontSize: 11.5, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
                >
                  {ev.year}　{stripRuby(ev.title)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function PersonGrid({ people }) {
  if (!people || people.length === 0) return null;
  return (
    <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
      {people.map((person, idx) => (
        <PersonCard key={idx} person={person} />
      ))}
    </div>
  );
}

export function EventListItem({ event, eraName }) {
  const cat = CATEGORY_STYLE[event.category] || CATEGORY_STYLE["文化"];
  return (
    <Link href={`/events/${event.slug}`} className="block mb-3 last:mb-0 group">
      <div
        className="px-4 py-3 transition-all duration-200 group-hover:shadow-sm"
        style={{ backgroundColor: "#FBF8F0", border: `1px solid #DCD3B8`, borderLeft: `3px solid ${cat.color}` }}
      >
        <div className="flex items-baseline justify-between gap-3">
          <div className="flex items-baseline gap-2">
            <span style={{ fontFamily: "'Noto Serif SC', serif", color: COLORS.inkSoft, fontSize: 13 }}>{event.year}</span>
            <span style={{ fontFamily: "'Noto Serif SC', serif", color: COLORS.ink, fontSize: 16, fontWeight: 600 }}>
              <RubyText text={event.title} />
            </span>
          </div>
          <span className="shrink-0 uppercase tracking-wider" style={{ fontSize: 10, color: cat.color, letterSpacing: "0.08em" }}>
            {cat.label}
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <p
            className="pr-4"
            style={{ fontSize: 12.5, lineHeight: 1.6, color: COLORS.inkSoft, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          >
            {stripRuby(event.summary)}
          </p>
          <span className="shrink-0" style={{ color: COLORS.vermilion, fontSize: 13 }}>→</span>
        </div>
      </div>
    </Link>
  );
}

export function A8Banner({ href, imgSrc, gifSrc, width, height }) {
  return (
    <div style={{ textAlign: "center" }}>
      <a href={href} rel="nofollow noreferrer sponsored" target="_blank">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          border="0"
          width={width}
          height={height}
          alt=""
          src={imgSrc}
          style={{ display: "inline-block", maxWidth: "100%", height: "auto" }}
        />
      </a>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img border="0" width="1" height="1" src={gifSrc} alt="" style={{ display: "none" }} />
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
