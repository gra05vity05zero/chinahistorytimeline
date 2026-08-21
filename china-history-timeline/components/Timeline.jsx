"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ERAS, COLORS, ADSENSE_SLOT_TIMELINE } from "@/lib/data";
import { SealMark, EventCard, AdSenseSlot } from "@/components/Shared";

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
          <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12, color: COLORS.vermilion, letterSpacing: "0.1em" }}>
            現在表示中の時代（タップで王朝一覧）
          </div>
          <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 18, fontWeight: 700, color: COLORS.ink }}>
            {ERAS[activeIndex]?.name}
            <span style={{ fontSize: 12, color: COLORS.inkSoft, marginLeft: 8, fontFamily: "'Noto Sans SC', sans-serif" }}>
              {ERAS[activeIndex]?.period}
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
              <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 13, fontWeight: 700, color: COLORS.vermilion, width: 20 }}>
                {era.seal}
              </span>
              <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, color: COLORS.ink }}>{era.name}</span>
              <span style={{ fontSize: 11, color: COLORS.inkSoft, marginLeft: "auto" }}>{era.period}</span>
            </button>
          ))}
        </div>
      )}

      <div className="px-6 pt-10 pb-6 text-center">
        <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12, letterSpacing: "0.3em", color: COLORS.vermilion }}>
          CHINESE HISTORY TIMELINE
        </div>
        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 32, fontWeight: 900, color: COLORS.ink, marginTop: 6 }}>
          中国五千年史
        </h1>
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 6 }}>文明の黎明から現代まで — スクロールして辿る</p>
        <div className="flex items-center justify-center gap-3 mt-4" style={{ fontSize: 12 }}>
          <Link href="/search" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            サイト内検索
          </Link>
          <span style={{ color: COLORS.mist }}>|</span>
          <Link href="/people" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            人物一覧
          </Link>
          <span style={{ color: COLORS.mist }}>|</span>
          <Link href="/eras" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            出来事一覧
          </Link>
        </div>
      </div>

      <div className="relative max-w-2xl mx-auto px-5 pb-24">
        <div className="absolute top-0 bottom-0" style={{ left: 20, width: 2, backgroundColor: COLORS.mist }} />

        {ERAS.map((era) => (
          <div key={era.id} ref={(el) => (sectionRefs.current[era.id] = el)} data-era-id={era.id} className="relative pl-14 pt-2 pb-8">
            <div className="absolute left-0 top-2">
              <SealMark char={era.seal} active={era.id === activeEra} />
            </div>
            <div className="mb-3">
              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 20, fontWeight: 700, color: COLORS.ink }}>{era.name}</div>
              <div style={{ fontSize: 12, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>{era.period}</div>
              {era.description && (
                <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 8 }}>{era.description}</p>
              )}
            </div>
            <div>
              {era.events.map((ev, i) => (
                <EventCard key={i} event={ev} onOpen={(slug) => openEvent(slug, era.id)} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto px-5 pb-16">
        <div style={{ fontSize: 10.5, color: COLORS.inkSoft, marginBottom: 8 }}>広告</div>
        <AdSenseSlot slot={ADSENSE_SLOT_TIMELINE} />
      </div>
    </div>
  );
}
