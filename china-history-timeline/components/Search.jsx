"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { COLORS, CATEGORY_STYLE } from "@/lib/constants";

// 全角/半角の揺れやひらがな・カタカナの違いを吸収するための簡易正規化
function normalize(str) {
  return String(str)
    .toLowerCase()
    .replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60)); // カタカナ→ひらがな
}

export default function SearchClient({ index }) {
  const [query, setQuery] = useState("");

  const q = normalize(query.trim());
  const results = useMemo(() => {
    if (!q) return [];
    return index
      .filter((item) => {
        const haystack = normalize(
          [item.title, item.summary, item.eraName, item.category, ...(item.figures || [])].join(" ")
        );
        return haystack.includes(q);
      })
      .slice(0, 50);
  }, [index, q]);

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="人物名・出来事・王朝名で検索（例: 三国志、諸葛亮、赤壁）"
        className="w-full px-4 py-3 outline-none"
        style={{ backgroundColor: "#fff", border: `1px solid ${COLORS.mist}`, fontSize: 14, color: COLORS.ink }}
        autoFocus
      />

      <div className="mt-6">
        {q && results.length === 0 && (
          <div className="px-3 py-6 text-center" style={{ border: `1px dashed ${COLORS.mist}`, backgroundColor: "#FBF8F0" }}>
            <div style={{ fontSize: 12, color: COLORS.mist }}>「{query}」に一致する出来事は見つかりませんでした</div>
          </div>
        )}

        {results.length > 0 && (
          <div style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>{results.length}件の出来事が見つかりました</div>
        )}

        <div className="flex flex-col gap-2">
          {results.map((item) => {
            const cat = CATEGORY_STYLE[item.category] || CATEGORY_STYLE["文化"];
            return (
              <Link
                key={item.slug}
                href={`/events/${item.slug}`}
                className="block px-4 py-3 group"
                style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", borderLeft: `3px solid ${cat.color}` }}
              >
                <div className="flex items-baseline gap-2">
                  <span style={{ fontFamily: "'Noto Serif SC', serif", color: COLORS.inkSoft, fontSize: 12 }}>{item.year}</span>
                  <span style={{ fontFamily: "'Noto Serif SC', serif", color: COLORS.ink, fontSize: 15, fontWeight: 600 }}>
                    {item.title}
                  </span>
                  <span style={{ fontSize: 10, color: COLORS.gold, marginLeft: "auto" }}>{item.eraName}</span>
                </div>
                <p
                  className="mt-1"
                  style={{ fontSize: 12, lineHeight: 1.6, color: COLORS.inkSoft, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                >
                  {item.summary}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
