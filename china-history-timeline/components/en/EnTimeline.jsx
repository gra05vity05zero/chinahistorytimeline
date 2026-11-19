"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { EnThemeLinks } from "@/components/en/EnMiscLinks";
import { COLORS, CATEGORY_STYLE } from "@/lib/constants";
import { SealMark } from "@/components/Shared";
import { EnSiteTitle } from "@/components/en/EnSiteHeader";
import LanguageSwitch from "@/components/en/LanguageSwitch";

const serif = { fontFamily: "var(--font-serif), serif" };
const LINE_X = 20;
const RAIL = 56;

const PRIMARY_LINKS = [
  { href: "/en/eras", seal: "代", label: "All Eras", desc: "24 dynasties and periods, one page each" },
  { href: "/en/eras/qin", seal: "秦", label: "The First Emperor", desc: "How Qin unified China in 221 BC" },
  { href: "/en/eras/sanguo", seal: "三", label: "Three Kingdoms", desc: "Cao Cao, Liu Bei and Sun Quan" },
  { href: "/en/eras/tang", seal: "唐", label: "Tang Dynasty", desc: "China’s cosmopolitan golden age" },
];

const INTRO_PARAGRAPHS = [
  "Chinese history begins with the Neolithic cultures of the Yellow River and Yangtze basins. After the Shang and Zhou, and the rivalries of the Spring and Autumn and Warring States periods, the First Emperor of Qin unified China for the first time in 221 BC.",
  "Then came the Han, the Three Kingdoms, the Jin, the Northern and Southern Dynasties, the Sui, Tang, Five Dynasties, Song, Yuan, Ming and Qing — five thousand years of dynasties rising and falling — leading to the Republic of China in 1912 and the People’s Republic in 1949.",
  "This timeline divides Chinese history by dynasty and walks through its key events, people and culture in chronological order. Tap any event to read its background and significance, along with the people, sites and treasures connected to it.",
];

function gapHeight(years) {
  return years < 2 ? 0 : Math.min(84, Math.round(Math.log2(years) * 8));
}

function EventItem({ ev, onClick }) {
  const cat = CATEGORY_STYLE[ev.category] || CATEGORY_STYLE["文化"];
  return (
    <li className="relative" style={{ paddingLeft: RAIL }}>
      <span
        aria-hidden
        className="absolute"
        style={{ left: LINE_X - 6, top: 14, width: 12, height: 12, borderRadius: "50%", backgroundColor: cat.color, boxShadow: `0 0 0 3px ${COLORS.paper}` }}
      />
      <Link href={`/en/events/${ev.slug}`} onClick={onClick} className="block group">
        <div className="px-4 py-3 transition-all duration-200 group-hover:shadow-sm" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
          <div className="flex items-baseline justify-between gap-3">
            <span style={{ ...serif, fontSize: 13, fontWeight: 700, color: cat.color }}>{ev.yearLabel}</span>
            <span className="shrink-0" style={{ fontSize: 10, color: cat.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {ev.categoryLabel}
            </span>
          </div>
          <div style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink, marginTop: 2, lineHeight: 1.4 }}>{ev.title}</div>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.7,
              color: COLORS.inkSoft,
              marginTop: 4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {ev.summary}
          </p>
          <div style={{ fontSize: 12, color: COLORS.vermilion, marginTop: 4, textAlign: "right" }}>Read more →</div>
        </div>
      </Link>
    </li>
  );
}

// eras: [{ id, seal, name, periodLabel, description, events: [{ slug, yearLabel, sortYear, category, categoryLabel, title, summary }] }]
export default function EnTimeline({ eras }) {
  const [activeEra, setActiveEra] = useState(eras[0].id);
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

    let returnTo = null;
    try {
      returnTo = sessionStorage.getItem("returnToEraEn");
      sessionStorage.removeItem("returnToEraEn");
    } catch {}
    if (returnTo) sectionRefs.current[returnTo]?.scrollIntoView({ behavior: "auto", block: "start" });

    return () => observer.disconnect();
  }, []);

  const active = eras.find((e) => e.id === activeEra) || eras[0];

  const rememberEra = (eraId) => {
    try {
      sessionStorage.setItem("returnToEraEn", eraId);
    } catch {}
  };

  const scrollToEra = (eraId) => {
    setNavOpen(false);
    sectionRefs.current[eraId]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <button
        onClick={() => setNavOpen((v) => !v)}
        className="sticky top-0 z-20 w-full flex items-center gap-3 px-5 py-3 text-left"
        style={{ backgroundColor: COLORS.paperDeep, borderBottom: `1px solid ${COLORS.mist}` }}
      >
        <SealMark char={active.seal} active />
        <div className="flex-1 min-w-0">
          <div style={{ ...serif, fontSize: 12, color: COLORS.vermilion, letterSpacing: "0.05em" }}>Now viewing (tap for all dynasties)</div>
          <div style={{ ...serif, fontSize: 18, fontWeight: 700, color: COLORS.ink }}>
            {active.name}
            <span style={{ fontSize: 12, color: COLORS.inkSoft, marginLeft: 8, fontFamily: "var(--font-sans), sans-serif", fontWeight: 400 }}>
              {active.periodLabel}
            </span>
          </div>
        </div>
        <span style={{ color: COLORS.vermilion, fontSize: 12, transform: navOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
      </button>

      {navOpen && (
        <div className="sticky z-20 overflow-y-auto" style={{ top: 64, maxHeight: "60vh", backgroundColor: "#FBF8F0", borderBottom: `1px solid ${COLORS.mist}` }}>
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => scrollToEra(era.id)}
              className="w-full flex items-center gap-3 px-5 py-2 text-left"
              style={{ backgroundColor: era.id === activeEra ? "#F0E8D2" : "transparent", borderBottom: "1px solid #E4DBC4" }}
            >
              <span style={{ ...serif, fontSize: 13, fontWeight: 700, color: COLORS.vermilion, width: 20 }}>{era.seal}</span>
              <span style={{ ...serif, fontSize: 14, color: COLORS.ink }}>{era.name}</span>
              <span style={{ fontSize: 11, color: COLORS.inkSoft, marginLeft: "auto", whiteSpace: "nowrap" }}>{era.periodLabel}</span>
            </button>
          ))}
        </div>
      )}

      <div className="relative px-6 pt-10 pb-6 text-center">
        <div className="absolute" style={{ top: 12, right: 16 }}>
          <LanguageSwitch lang="en" style={{ fontSize: 13 }} />
        </div>
        <EnSiteTitle headingAs="h1" />
        <div className="max-w-3xl mx-auto mt-6" style={{ border: `1.5px solid ${COLORS.gold}` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero.webp"
            width={1774}
            height={887}
            alt="Bronze vessels and terracotta warriors, mounted armies, the Great Wall, the Forbidden City, a pagoda, sailing ships on a great river and the skyline of modern Shanghai, painted as one continuous scroll with a dragon in the sky"
            fetchPriority="high"
            style={{ display: "block", width: "100%", height: "auto", aspectRatio: "5 / 2", objectFit: "cover", objectPosition: "50% 35%" }}
          />
        </div>
        <div className="max-w-3xl mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          {PRIMARY_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-start gap-3 px-3 py-3 transition-shadow hover:shadow-md"
              style={{ backgroundColor: "#FBF8F0", border: `1.5px solid ${COLORS.vermilion}` }}
            >
              <span
                aria-hidden="true"
                className="seal-char flex items-center justify-center shrink-0"
                data-char={item.seal}
                style={{ width: 32, height: 32, backgroundColor: COLORS.vermilion, color: "#fff", ...serif, fontSize: 16, fontWeight: 700 }}
              />
              <span className="min-w-0">
                <span className="block" style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.ink }}>{item.label}</span>
                <span className="block" style={{ fontSize: 11, lineHeight: 1.5, color: COLORS.inkSoft, marginTop: 2 }}>{item.desc}</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <EnThemeLinks variant="full" />
        </div>
      </div>

      <section className="max-w-2xl mx-auto px-5 pb-8">
        <h2 style={{ ...serif, fontSize: 18, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>Chinese history at a glance</h2>
        {INTRO_PARAGRAPHS.map((text, i) => (
          <p key={i} style={{ fontSize: 14, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 10 }}>
            {text}
          </p>
        ))}
        <h2 style={{ ...serif, fontSize: 18, fontWeight: 700, color: COLORS.ink, marginTop: 24 }}>Timeline of Chinese history ({eras.length} eras)</h2>
      </section>

      <div className="relative max-w-2xl mx-auto px-5 pb-24">
        <div className="relative">
          <span aria-hidden className="absolute" style={{ left: LINE_X - 1, top: 8, bottom: 8, width: 2, backgroundColor: COLORS.mist }} />
          {eras.map((era) => (
            <div key={era.id} id={era.id} ref={(el) => (sectionRefs.current[era.id] = el)} data-era-id={era.id} className="relative pt-2 pb-10">
              <div className="relative mb-4" style={{ paddingLeft: RAIL }}>
                <div className="absolute left-0 top-0">
                  <SealMark char={era.seal} active={era.id === activeEra} />
                </div>
                <h3 style={{ ...serif, fontSize: 20, fontWeight: 700, color: COLORS.ink }}>{era.name}</h3>
                <div style={{ fontSize: 12, color: COLORS.gold, ...serif }}>{era.periodLabel}</div>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 8 }}>{era.description}</p>
                <Link
                  href={`/en/eras/${era.id}`}
                  className="inline-block mt-2"
                  style={{ fontSize: 12.5, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
                >
                  Explore this era →
                </Link>
              </div>
              <ol className="flex flex-col gap-3">
                {era.events.map((ev, i) => {
                  const gap = i > 0 ? ev.sortYear - era.events[i - 1].sortYear : 0;
                  const h = gapHeight(gap);
                  return [
                    h > 0 && <li key={`gap-${ev.slug}`} aria-hidden style={{ height: h }} />,
                    <EventItem key={ev.slug} ev={ev} onClick={() => rememberEra(era.id)} />,
                  ];
                })}
              </ol>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 pb-16">
        <EnThemeLinks />
      </div>
    </div>
  );
}
