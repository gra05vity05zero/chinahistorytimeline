"use client";

import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { SealMark, HeritageThumb } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

export default function PersonDetail({ person, era }) {
  const bioParagraphs = (person.bio || "").split("\n\n").filter(Boolean);

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="sticky top-0 z-20 px-5 py-3" style={{ backgroundColor: COLORS.paperDeep, borderBottom: `1px solid ${COLORS.mist}` }}>
        <Link href={`/people/${era.id}`} className="flex items-center gap-2" style={{ color: COLORS.vermilion, fontFamily: "'Noto Serif SC', serif", fontSize: 13 }}>
          <span aria-hidden>←</span> {era.name}の人物一覧に戻る
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-5">
          <SealMark char={era.seal} active />
          <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>
            {era.name} ／ {era.period}
          </div>
        </div>

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginBottom: 14 }}>
          <RubyText text={person.name} />
        </h1>

        <p style={{ fontSize: 15, lineHeight: 1.9, color: COLORS.inkSoft, fontWeight: 600 }}>
          <RubyText text={person.description} />
        </p>

        {person.imageUrl && (
          <div className="mt-6" style={{ maxWidth: 280 }}>
            <div style={{ aspectRatio: "4 / 3", backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}>
              <HeritageThumb imageUrl={person.imageUrl} name={person.name} type="figure" />
            </div>
            {person.credit && <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 4 }}>{person.credit}</div>}
          </div>
        )}

        {bioParagraphs.length > 0 && (
          <div className="mt-10">
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 16, fontWeight: 900, color: COLORS.vermilion, letterSpacing: "0.1em", marginBottom: 12 }}>
              生涯・業績
            </h2>
            {bioParagraphs.map((para, idx) => (
              <p key={idx} style={{ fontSize: 14, lineHeight: 1.9, color: COLORS.inkSoft, marginTop: idx > 0 ? 14 : 0 }}>
                <RubyText text={para} />
              </p>
            ))}
          </div>
        )}

        {person.events && person.events.length > 0 && (
          <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
            <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 13, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 10 }}>
              関連する出来事
            </h2>
            <div className="flex flex-col gap-2">
              {person.events.map((ev, i) => (
                <Link
                  key={i}
                  href={`/events/${ev.slug}`}
                  className="block px-4 py-3"
                  style={{ backgroundColor: "#FBF8F0", border: `1px solid #DCD3B8`, borderLeft: `3px solid ${COLORS.vermilion}` }}
                >
                  <span style={{ fontFamily: "'Noto Serif SC', serif", color: COLORS.inkSoft, fontSize: 13 }}>{ev.year}</span>{"　"}
                  <span style={{ fontFamily: "'Noto Serif SC', serif", color: COLORS.ink, fontSize: 15, fontWeight: 600 }}>
                    <RubyText text={ev.title} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-3 mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}`, fontSize: 12 }}>
          <Link href={`/people/${era.id}`} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            {era.name}の人物一覧
          </Link>
          <span style={{ color: COLORS.mist }}>|</span>
          <Link href={`/eras/${era.id}`} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            {era.name}の出来事一覧
          </Link>
        </div>
      </div>
    </div>
  );
}
