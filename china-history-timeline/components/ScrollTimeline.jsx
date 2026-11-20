"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ERAS, COLORS, ADSENSE_SLOT_TIMELINE, displayPeriod } from "@/lib/data";
import { SealMark, AdSenseSlot, MiscLinksSection } from "@/components/Shared";
import { TimelineEvent, TimelineMilestone, yearNumber, formatYear } from "@/components/EraOverview";
import { RubyText } from "@/components/Ruby";

// 年表の各時代見出しの下に「〜とはどんな時代？」と並べて出す特集記事へのリンク
const ERA_FEATURE_LINKS = {
  qin: [{ href: "/qin-fall", label: "{{秦|しん}}はなぜ15年で{{滅亡|めつぼう}}したのか？" }],
};

// 導入文（ルビ記法 {{漢字|ふりがな}} 対応）
const INTRO_PARAGRAPHS = [
  "中国史は、{{黄河|こうが}}・{{長江|ちょうこう}}流域で生まれた新石器文化から始まります。{{殷|いん}}・周の時代を経て、{{諸侯|しょこう}}が争った春秋・戦国時代のあと、紀元前221年に{{秦|しん}}の{{始皇帝|しこうてい}}が初めて中国を統一しました。",
  "その後、漢・三国・{{晋|しん}}・南北朝・{{隋|ずい}}・{{唐|とう}}・五代十国・{{宋|そう}}・元・明・{{清|しん}}と、王朝の{{興亡|こうぼう}}を{{繰|く}}り返しながら五千年の歴史が続き、1912年の{{中華民国|ちゅうかみんこく}}、1949年の{{中華人民共和国|ちゅうかじんみんきょうわこく}}へとつながります。",
  "このサイトでは、中国の歴史を王朝ごとに区切った年表で、主な出来事・人物・文化を年代順に解説しています。気になる出来事をタップすると、背景や{{影響|えいきょう}}、関連する人物・{{史跡|しせき}}をくわしく読めます。",
];

// 年表の縦線は王朝の印（40px角）の中心を通す
const LINE_X = 20;
const RAIL = 56;

// 出来事と補足項目（milestones）を年順に並べる。時代ページの年表と同じ並べ方
function eraItems(era, milestones) {
  return [
    ...era.events.map((ev, order) => ({ kind: "event", sortYear: yearNumber(ev.year), order, event: ev })),
    ...milestones.map((m, i) => ({ kind: "milestone", year: formatYear(m.year), sortYear: yearNumber(m.year), order: 1000 + i, text: m.text })),
  ].sort((a, b) => a.sortYear - b.sortYear || a.order - b.order);
}

// 前の項目からの年数に応じて間をあける（対数で伸ばし、数千年の差でも上限で止める）
function gapHeight(years) {
  return years < 2 ? 0 : Math.min(84, Math.round(Math.log2(years) * 8));
}

function YearGap({ years }) {
  const height = gapHeight(years);
  if (!height) return null;
  return <li aria-hidden style={{ height }} />;
}

// /timeline：旧トップページの「時代をスクロールして辿る」年表をそのまま1ページにしたもの。
// 上部に現在の時代を示す固定ナビ（タップで王朝一覧）、各時代の出来事を要約つきで年代順に並べる。
export default function ScrollTimeline({ milestonesByEra = {} }) {
  const [activeEra, setActiveEra] = useState(ERAS[0].id);
  const [navOpen, setNavOpen] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveEra(entry.target.dataset.eraId);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));

    // 詳細ページから戻ってきた際、直前に見ていた王朝までスクロール復元する
    const returnTo = typeof window !== "undefined" ? sessionStorage.getItem("returnToEra") : null;
    if (returnTo) {
      sessionStorage.removeItem("returnToEra");
      const el = sectionRefs.current[returnTo];
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    }

    return () => observer.disconnect();
  }, []);

  const activeIndex = ERAS.findIndex((e) => e.id === activeEra);

  // 出来事ページへの遷移はLink側で行い、ここでは戻ってきたときに復元する王朝だけを記録する
  const rememberEra = (eraId) => {
    sessionStorage.setItem("returnToEra", eraId);
  };

  const scrollToEra = (eraId) => {
    setNavOpen(false);
    const el = sectionRefs.current[eraId];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <button
        onClick={() => setNavOpen((v) => !v)}
        className="sticky top-0 z-20 w-full flex items-center gap-3 px-5 py-3 text-left"
        style={{ backgroundColor: COLORS.paperDeep, borderBottom: `1px solid ${COLORS.mist}` }}
      >
        <SealMark char={ERAS[activeIndex]?.seal || "史"} active />
        <div className="flex-1">
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 12, color: COLORS.vermilion, letterSpacing: "0.1em" }}>
            現在表示中の時代（タップで王朝一覧）
          </div>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 18, fontWeight: 700, color: COLORS.ink }}>
            <RubyText text={ERAS[activeIndex]?.name} />
            <span style={{ fontSize: 12, color: COLORS.inkSoft, marginLeft: 8, fontFamily: "var(--font-sans), sans-serif" }}>
              <RubyText text={displayPeriod(ERAS[activeIndex]?.period)} />
            </span>
          </div>
        </div>
        <span style={{ color: COLORS.vermilion, fontSize: 12, transform: navOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
      </button>

      {navOpen && (
        <div className="sticky z-20 overflow-y-auto" style={{ top: 64, maxHeight: "60vh", backgroundColor: "#FBF8F0", borderBottom: `1px solid ${COLORS.mist}` }}>
          {ERAS.map((era) => (
            <button
              key={era.id}
              onClick={() => scrollToEra(era.id)}
              className="w-full flex items-center gap-3 px-5 py-2 text-left"
              style={{ backgroundColor: era.id === activeEra ? "#F0E8D2" : "transparent", borderBottom: `1px solid #E4DBC4` }}
            >
              <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 13, fontWeight: 700, color: COLORS.vermilion, width: 20 }}>
                <RubyText text={era.seal} />
              </span>
              <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, color: COLORS.ink }}><RubyText text={era.name} /></span>
              <span style={{ fontSize: 11, color: COLORS.inkSoft, marginLeft: "auto" }}><RubyText text={displayPeriod(era.period)} /></span>
            </button>
          ))}
        </div>
      )}

      <div className="max-w-2xl mx-auto px-5 pt-8 pb-4">
        <Link href="/" className="hover:underline" style={{ fontSize: 13, color: COLORS.vermilion }}>
          ← トップに戻る
        </Link>
        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, lineHeight: 1.4 }}>
          スクロールで辿る中国史年表
        </h1>
        <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginTop: 10 }}>
          新石器時代から中華人民共和国まで、全{ERAS.length}時代の出来事を要約つきで年代順に並べた年表です。上の帯をタップすると、王朝一覧から好きな時代へ移動できます。
        </p>
      </div>

      {/* 年表本体の前に全体の流れを短く示す */}
      <section className="max-w-2xl mx-auto px-5 pb-8">
        <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 18, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
          中国史（中国の歴史）の流れ
        </h2>
        {INTRO_PARAGRAPHS.map((text, i) => (
          <p key={i} style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText text={text} />
          </p>
        ))}
        <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 18, fontWeight: 700, color: COLORS.ink, marginTop: 24 }}>
          年表（全{ERAS.length}時代）
        </h2>
      </section>

      <div className="relative max-w-2xl mx-auto px-5 pb-24">
        <div className="relative">
          <span aria-hidden className="absolute" style={{ left: LINE_X - 1, top: 8, bottom: 8, width: 2, backgroundColor: COLORS.mist }} />

          {ERAS.map((era) => {
            const items = eraItems(era, milestonesByEra[era.id] || []);
            return (
              <div key={era.id} id={`era-${era.id}`} ref={(el) => (sectionRefs.current[era.id] = el)} data-era-id={era.id} className="relative pt-2 pb-10" style={{ scrollMarginTop: 72 }}>
                <div className="relative mb-4" style={{ paddingLeft: RAIL }}>
                  <div className="absolute left-0 top-0">
                    <SealMark char={era.seal} active={era.id === activeEra} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 20, fontWeight: 700, color: COLORS.ink }}><RubyText text={era.name} /></h3>
                  <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}><RubyText text={displayPeriod(era.period)} /></div>
                  {era.description && (
                    <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 8 }}><RubyText text={era.description} /></p>
                  )}
                  <Link
                    href={`/eras/${era.id}`}
                    className="inline-block mt-2 mr-4"
                    style={{ fontSize: 12.5, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
                  >
                    <RubyText text={era.name} />とはどんな時代？ →
                  </Link>
                  {(ERA_FEATURE_LINKS[era.id] || []).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="inline-block mt-2"
                      style={{ fontSize: 12.5, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
                    >
                      <RubyText text={item.label} /> →
                    </Link>
                  ))}
                </div>
                <ol className="flex flex-col gap-3">
                  {items.map((it, i) => {
                    const key = it.kind === "event" ? it.event.slug : `m-${it.order}`;
                    const gap = i > 0 ? it.sortYear - items[i - 1].sortYear : 0;
                    return [
                      gap >= 2 && <YearGap key={`gap-${key}`} years={gap} />,
                      it.kind === "event" ? (
                        <TimelineEvent key={key} item={it} onClick={() => rememberEra(era.id)} lineX={LINE_X} rail={RAIL} />
                      ) : (
                        <TimelineMilestone key={key} item={it} lineX={LINE_X} rail={RAIL} />
                      ),
                    ];
                  })}
                </ol>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 pb-10">
        <MiscLinksSection />
      </div>

      {ADSENSE_SLOT_TIMELINE && (
        <div className="max-w-2xl mx-auto px-5 pb-16">
          <div style={{ fontSize: 10.5, color: COLORS.inkSoft, marginBottom: 8 }}>広告</div>
          <AdSenseSlot slot={ADSENSE_SLOT_TIMELINE} />
        </div>
      )}
    </div>
  );
}
