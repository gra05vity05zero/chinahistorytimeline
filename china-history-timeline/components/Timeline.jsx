"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ERAS, COLORS, ADSENSE_SLOT_TIMELINE } from "@/lib/data";
import { SealMark, EventCard, AdSenseSlot, MiscLinksSection } from "@/components/Shared";
import { SiteTitle } from "@/components/SiteHeader";
import { RubyText } from "@/components/Ruby";

// トップページ上部の主要な入口
const PRIMARY_LINKS = [
  { href: "/people", seal: "人", label: "人物一覧", desc: "時代別の人物事典" },
  { href: "/eras", seal: "代", label: "時代一覧", desc: "各時代の解説と年表" },
  { href: "/japan-china-timeline", seal: "日", label: "日中対照年表", desc: "同じ時期の日本と{{比較|ひかく}}" },
  { href: "/search", seal: "検", label: "サイト内{{検索|けんさく}}", desc: "人物・出来事を探す" },
];

// 合戦マップ（時代順）
const BATTLE_MAP_LINKS = [
  { href: "/chunqiu-zhanguo-battles", label: "春秋・戦国" },
  { href: "/chuhan-battles", label: "{{楚漢戦争|そかんせんそう}}" },
  { href: "/sanguo-battles", label: "三国時代" },
  { href: "/suitang-battles", label: "{{隋唐|ずいとう}}・五代" },
];

// トップページの導入文（ルビ記法 {{漢字|ふりがな}} 対応）
const INTRO_PARAGRAPHS = [
  "中国史は、{{黄河|こうが}}・{{長江|ちょうこう}}流域で生まれた新石器文化から始まります。{{殷|いん}}・周の時代を経て、{{諸侯|しょこう}}が争った春秋・戦国時代のあと、紀元前221年に{{秦|しん}}の{{始皇帝|しこうてい}}が初めて中国を統一しました。",
  "その後、漢・三国・{{晋|しん}}・南北朝・{{隋|ずい}}・{{唐|とう}}・五代十国・{{宋|そう}}・元・明・{{清|しん}}と、王朝の{{興亡|こうぼう}}を{{繰|く}}り返しながら五千年の歴史が続き、1912年の{{中華民国|ちゅうかみんこく}}、1949年の{{中華人民共和国|ちゅうかじんみんきょうわこく}}へとつながります。",
  "このサイトでは、中国の歴史を王朝ごとに区切った年表で、主な出来事・人物・文化を年代順に解説しています。気になる出来事をタップすると、背景や{{影響|えいきょう}}、関連する人物・{{史跡|しせき}}をくわしく読めます。",
];

export default function Timeline() {
  const router = useRouter();
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

  const openEvent = (slug, eraId) => {
    sessionStorage.setItem("returnToEra", eraId);
    router.push(`/events/${slug}`);
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
              <RubyText text={ERAS[activeIndex]?.period} />
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
              <span style={{ fontSize: 11, color: COLORS.inkSoft, marginLeft: "auto" }}><RubyText text={era.period} /></span>
            </button>
          ))}
        </div>
      )}

      <div className="px-6 pt-10 pb-6 text-center">
        <SiteTitle headingAs="h1" />
        <div className="max-w-3xl mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          {PRIMARY_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-start gap-3 px-3 py-3 transition-shadow hover:shadow-md"
              style={{ backgroundColor: "#FBF8F0", border: `1.5px solid ${COLORS.vermilion}` }}
            >
              <span
                className="flex items-center justify-center shrink-0"
                style={{ width: 32, height: 32, backgroundColor: COLORS.vermilion, color: "#fff", fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700 }}
              >
                <RubyText text={item.seal} />
              </span>
              <span className="min-w-0">
                <span className="block" style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
                  <RubyText text={item.label} />
                </span>
                <span className="block" style={{ fontSize: 11, lineHeight: 1.5, color: COLORS.inkSoft, marginTop: 2 }}>
                  <RubyText text={item.desc} />
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-4 flex items-center justify-center gap-2 flex-wrap">
          <span className="w-full sm:w-auto sm:mr-1" style={{ fontFamily: "var(--font-serif), serif", fontSize: 12, fontWeight: 700, color: COLORS.inkSoft }}>
            合戦マップ
          </span>
          {BATTLE_MAP_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center"
              style={{
                height: 34,
                padding: "0 14px",
                fontFamily: "var(--font-serif), serif",
                fontSize: 12.5,
                fontWeight: 700,
                color: COLORS.vermilion,
                border: `1.5px solid ${COLORS.vermilion}`,
              }}
            >
              <RubyText text={item.label} />
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <MiscLinksSection variant="full" />
        </div>
      </div>

      {/* 「中国史」「中国の歴史」で検索した人向けの導入文。年表本体の前に全体の流れを短く示す */}
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
          中国史年表（全{ERAS.length}時代）
        </h2>
      </section>

      <div className="relative max-w-2xl mx-auto px-5 pb-24">
        <div className="absolute top-0 bottom-0" style={{ left: 20, width: 2, backgroundColor: COLORS.mist }} />

        {ERAS.map((era) => (
          <div key={era.id} ref={(el) => (sectionRefs.current[era.id] = el)} data-era-id={era.id} className="relative pl-14 pt-2 pb-8">
            <div className="absolute left-0 top-2">
              <SealMark char={era.seal} active={era.id === activeEra} />
            </div>
            <div className="mb-3">
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 20, fontWeight: 700, color: COLORS.ink }}><RubyText text={era.name} /></div>
              <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}><RubyText text={era.period} /></div>
              {era.description && (
                <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 8 }}><RubyText text={era.description} /></p>
              )}
              <Link
                href={`/eras/${era.id}`}
                className="inline-block mt-2"
                style={{ fontSize: 12.5, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
              >
                <RubyText text={era.name} />とはどんな時代？ →
              </Link>
            </div>
            <div>
              {era.events.map((ev, i) => (
                <EventCard key={i} event={ev} onOpen={(slug) => openEvent(slug, era.id)} />
              ))}
            </div>
          </div>
        ))}
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
