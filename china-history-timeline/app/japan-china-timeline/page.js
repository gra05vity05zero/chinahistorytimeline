import Link from "next/link";
import { ERAS, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { ROWS, CN_JUMPS, JP_JUMPS, hasAnchor } from "@/lib/japanChinaTimeline";
import { BackToTopButton, NavButton, MiscLinksSection, A8AdBlock } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { TimelineIcon } from "@/components/TimelineIcons";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const title = "日本史・中国史 対照年表";
const fullTitle = `日本史・中国史 対照年表 | ${SITE_NAME}`;
const description =
  "北京原人・黄河文明・長江文明・縄文時代から現代まで、中国の王朝の出来事と日本史の出来事を、実際の年代順に1本の年表として並べました。遣隋使・遣唐使、元寇、日明貿易、日清戦争など、日中の関わりが深い出来事もひと目で分かります。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/japan-china-timeline" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/japan-china-timeline" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const ERA_IDS = new Set(ERAS.map((e) => e.id));
const BAND_COLORS = {
  cn: ["rgba(166, 51, 42, 0.06)", "rgba(166, 51, 42, 0.13)"],
  jp: ["rgba(62, 92, 78, 0.07)", "rgba(62, 92, 78, 0.15)"],
};

function bandStyle(side, row) {
  const index = row.band[side];
  if (index < 0) return {};
  const isBoundary = row.starts && row.entry.side === side && index > 0;
  return {
    backgroundColor: BAND_COLORS[side][index % 2],
    borderTop: isBoundary ? `1px dashed ${COLORS.mist}` : undefined,
  };
}

const LINK_STYLE = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

// 時代ラベル。中国側はその王朝の出来事一覧へ、時代の最初の行には人物一覧へのリンクも添える
function EraLabel({ entry, isFirst }) {
  const linkable = entry.side === "cn" && ERA_IDS.has(entry.eraId);
  return (
    <div style={{ fontSize: 10.5, color: COLORS.inkSoft, marginTop: 2 }}>
      {linkable ? (
        <>
          <Link href={`/eras/${entry.eraId}`} style={LINK_STYLE}>
            <RubyText text={entry.era} />
          </Link>
          {isFirst && (
            <>
              <span style={{ color: COLORS.mist }}> ・ </span>
              <Link href={`/people/${entry.eraId}`} style={LINK_STYLE}>人物</Link>
            </>
          )}
        </>
      ) : (
        <RubyText text={entry.era} />
      )}
    </div>
  );
}

function EntryContent({ entry, isFirst }) {
  const isCn = entry.side === "cn";
  return (
    <div>
      {entry.icon && (
        <div style={{ marginBottom: 2 }}>
          <TimelineIcon name={entry.icon} />
        </div>
      )}
      <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13.5, fontWeight: 700, color: COLORS.gold }}><RubyText text={entry.yearLabel} /></div>
      {isCn && entry.href ? (
        <Link
          href={entry.href}
          style={{ fontFamily: "var(--font-serif), serif", fontSize: 13.5, fontWeight: 700, ...LINK_STYLE }}
        >
          <RubyText text={entry.event} />
        </Link>
      ) : (
        <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13.5, fontWeight: 700, color: isCn ? COLORS.vermilion : COLORS.ink }}>
          <RubyText text={entry.event} />
        </div>
      )}
      <EraLabel entry={entry} isFirst={isFirst} />
      {entry.china && (
        <Link
          href={entry.china.href}
          className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5"
          style={{ fontSize: 11, color: COLORS.vermilion, backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}
        >
          <span aria-hidden>←</span>
          <span>中国側：<RubyText text={entry.china.label} /></span>
        </Link>
      )}
    </div>
  );
}

// 時代を選んで年表の該当箇所へジャンプする
function JumpChips({ heading, jumps, side, color }) {
  return (
    <div className="flex items-baseline gap-2">
      <div className="shrink-0" style={{ fontSize: 11, fontWeight: 700, color, width: 32 }}>{heading}</div>
      <div className="flex flex-wrap gap-1.5">
        {jumps
          .filter((jump) => hasAnchor(`${side}-${jump.eraId}`))
          .map((jump) => (
            <a
              key={jump.eraId}
              href={`#${side}-${jump.eraId}`}
              className="px-2 py-0.5 hover:underline"
              style={{ fontSize: 12, color, backgroundColor: "#fff", border: `1px solid ${COLORS.mist}` }}
            >
              <RubyText text={jump.label} />
            </a>
          ))}
      </div>
    </div>
  );
}

function EraJumpNav() {
  return (
    <nav id="era-jump" aria-label="時代ジャンプ" className="px-3 py-3 mb-6 flex flex-col gap-2" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
      <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 12, fontWeight: 700, color: COLORS.gold, letterSpacing: "0.1em" }}>
        時代を選んでジャンプ
      </div>
      <JumpChips heading="中国" jumps={CN_JUMPS} side="cn" color={COLORS.vermilion} />
      <JumpChips heading="日本" jumps={JP_JUMPS} side="jp" color={COLORS.ink} />
    </nav>
  );
}

export default function JapanChinaTimelinePage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          日本史・中国史 対照年表
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          日本と中国では時代区分の年代がそれぞれ異なるため、無理に時代同士を横並びにせず、中国の出来事と日本の出来事を実際の年代順に1本の年表として並べました。
          <ruby>遣隋使<rt>けんずいし</rt></ruby>や<ruby>元寇<rt>げんこう</rt></ruby>のように、両国の出来事が近い時期に重なっていることも見えてきます。中国側の出来事や王朝名、日本側の「中国側：」から、それぞれの詳しい解説へ進めます。
        </p>

        <EraJumpNav />

        <div className="flex items-center justify-center gap-4 mb-3" style={{ fontSize: 11, color: COLORS.inkSoft }}>
          <span style={{ color: COLORS.vermilion, fontWeight: 700 }}>← 中国</span>
          <span style={{ color: COLORS.mist }}>|</span>
          <span style={{ color: COLORS.ink, fontWeight: 700 }}>日本 →</span>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2" style={{ width: 2, backgroundColor: COLORS.mist, transform: "translateX(-50%)" }} />
          <div className="flex flex-col relative">
            {ROWS.map((row, i) => (
              <div key={i} id={row.anchorId || undefined} className="flex items-stretch" style={{ scrollMarginTop: 16 }}>
                <div className="flex-1 text-right pr-4 pl-2 py-2.5" style={bandStyle("cn", row)}>
                  {row.entry.side === "cn" && <EntryContent entry={row.entry} isFirst={!!row.anchorId} />}
                </div>
                <div className="shrink-0" style={{ width: 16 }} />
                <div className="flex-1 text-left pl-4 pr-2 py-2.5" style={bandStyle("jp", row)}>
                  {row.entry.side === "jp" && <EntryContent entry={row.entry} isFirst={!!row.anchorId} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <section style={{ marginTop: 32 }}>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras" variant="solid">時代一覧を見る</NavButton>
            <NavButton href="/mnemonics" variant="outline">王朝の覚え方を見る</NavButton>
            <NavButton href="#era-jump" variant="outline">↑ 時代を選び直す</NavButton>
          </div>
        </section>

        <A8AdBlock ad="audible" className="mt-10" />

        <RelatedEraGuides path="/japan-china-timeline" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
