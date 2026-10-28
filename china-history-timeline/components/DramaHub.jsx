"use client";

import { useState } from "react";
import { COLORS } from "@/lib/constants";
import { RubyText } from "@/components/Ruby";
import { DramaCard, StarRating } from "@/components/DramaBlocks";

// /dramas の一覧と絞り込み（時代・史実度）。データは件数が少ないのでクライアント側で絞り込む。
// eras: 作品のある時代のみ（時代順） / dramas: toDramaCard() の配列（描かれる年代の古い順）。
// 複数の時代にまたがる作品は、「すべて」表示では最初の時代の見出しの下に置く

const serif = { fontFamily: "var(--font-serif), serif" };

const SCORE_FILTERS = [
  { min: 0, label: "すべて" },
  { min: 4, label: "★4以上" },
  { min: 3, label: "★3以上" },
  { min: 2, label: "★2以上" },
];

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={{
        ...serif,
        fontSize: 12.5,
        minHeight: 34,
        padding: "0 12px",
        color: active ? "#fff" : COLORS.vermilion,
        backgroundColor: active ? COLORS.vermilion : "transparent",
        border: `1px solid ${COLORS.vermilion}`,
      }}
    >
      {children}
    </button>
  );
}

export default function DramaHub({ eras, dramas }) {
  const [eraId, setEraId] = useState(null);
  const [minScore, setMinScore] = useState(0);

  const matched = dramas.filter((d) => d.score >= minScore && (!eraId || d.eraIds.includes(eraId)));
  const visible = eras
    .map((era) => ({ ...era, dramas: matched.filter((d) => (eraId || d.eraIds[0]) === era.id) }))
    .filter((g) => g.dramas.length > 0);

  return (
    <>
      <div className="mt-6 px-4 py-3" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
        <div style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 6 }}>時代で絞り込む</div>
        <div className="flex flex-wrap gap-2">
          <Chip active={!eraId} onClick={() => setEraId(null)}>
            すべて
          </Chip>
          {eras.map((era) => (
            <Chip key={era.id} active={eraId === era.id} onClick={() => setEraId(era.id)}>
              <RubyText text={era.name} />
            </Chip>
          ))}
        </div>
        <div style={{ fontSize: 11.5, color: COLORS.inkSoft, marginTop: 12, marginBottom: 6 }}>史実度で絞り込む</div>
        <div className="flex flex-wrap gap-2">
          {SCORE_FILTERS.map((f) => (
            <Chip key={f.min} active={minScore === f.min} onClick={() => setMinScore(f.min)}>
              {f.label}
            </Chip>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="mt-8 text-center" style={{ fontSize: 13, color: COLORS.inkSoft }}>
          条件に合う作品はありません。
        </p>
      ) : (
        visible.map((g) => (
          <section key={g.id} className="mt-8">
            <h2 className="flex items-baseline gap-2 flex-wrap" style={{ ...serif, fontSize: 18, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
              <span>
                <RubyText text={g.name} />
                を描いたドラマ
              </span>
              <span style={{ fontSize: 11.5, fontWeight: 400, color: COLORS.gold }}>
                <RubyText text={g.period} />
              </span>
            </h2>
            <div className="grid gap-2">
              {g.dramas.map((d) => (
                <DramaCard key={d.slug} drama={d} />
              ))}
            </div>
          </section>
        ))
      )}

      <p className="mt-6" style={{ fontSize: 11.5, lineHeight: 1.8, color: COLORS.inkSoft }}>
        史実度 <StarRating score={5} size={11.5} /> は「主要人物が実在するか」「主要な事件が史実に沿っているか」「時系列が正しいか」「人物像が史料と合っているか」の4点から、当サイトが独自に付けた目安です。
      </p>
    </>
  );
}
