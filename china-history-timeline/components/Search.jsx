"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { COLORS, CATEGORY_STYLE } from "@/lib/constants";
import { RubyText } from "@/components/Ruby";

// 全角/半角の揺れやひらがな・カタカナの違いを吸収するための簡易正規化
function normalize(str) {
  return String(str)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // "Lü" → "lu"（英語版向け。仮名の濁点は下でNFCに戻す）
    .normalize("NFC")
    .toLowerCase()
    .replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60)); // カタカナ→ひらがな
}

const TEXT = {
  ja: {
    placeholder: "人物名・出来事・王朝名で検索（例: 三国志、諸葛亮、赤壁）",
    none: (q) => <>「<RubyText text={q} />」に<ruby>一致<rt>いっち</rt></ruby>する出来事は見つかりませんでした</>,
    count: (n) => `${n}件の出来事が見つかりました`,
    href: (slug) => `/events/${slug}`,
  },
  en: {
    placeholder: "Search people, events or dynasties (e.g. Red Cliffs, Zhuge Liang, Tang)",
    none: (q) => `No events match “${q}”.`,
    count: (n) => `${n} event${n === 1 ? "" : "s"} found`,
    href: (slug) => `/en/events/${slug}`,
  },
};

export default function SearchClient({ index, lang = "ja" }) {
  const T = TEXT[lang];
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
        placeholder={T.placeholder}
        className="w-full px-4 py-3 outline-none"
        style={{ backgroundColor: "#fff", border: `1px solid ${COLORS.mist}`, fontSize: 14, color: COLORS.ink }}
        autoFocus
      />

      <div className="mt-6">
        {q && results.length === 0 && (
          <div className="px-3 py-6 text-center" style={{ border: `1px dashed ${COLORS.mist}`, backgroundColor: "#FBF8F0" }}>
            <div style={{ fontSize: 12, color: COLORS.mist }}>{T.none(query)}</div>
          </div>
        )}

        {results.length > 0 && (
          <div style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>{T.count(results.length)}</div>
        )}

        <div className="flex flex-col gap-2">
          {results.map((item) => {
            const cat = CATEGORY_STYLE[item.category] || CATEGORY_STYLE["文化"];
            return (
              <Link
                key={item.slug}
                href={T.href(item.slug)}
                className="block px-4 py-3 group"
                style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", borderLeft: `3px solid ${cat.color}` }}
              >
                <div className="flex items-baseline gap-2">
                  <span style={{ fontFamily: "var(--font-serif), serif", color: COLORS.inkSoft, fontSize: 12 }}><RubyText text={item.year} /></span>
                  <span style={{ fontFamily: "var(--font-serif), serif", color: COLORS.ink, fontSize: 15, fontWeight: 600 }}>
                    <RubyText text={item.title} />
                  </span>
                  <span style={{ fontSize: 10, color: COLORS.gold, marginLeft: "auto" }}><RubyText text={item.eraName} /></span>
                </div>
                <p
                  className="mt-1"
                  style={{ fontSize: 12, lineHeight: 1.6, color: COLORS.inkSoft, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                >
                  <RubyText text={item.summary} />
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
