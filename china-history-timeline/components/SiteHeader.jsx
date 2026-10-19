"use client";

import { usePathname } from "next/navigation";
import { COLORS } from "@/lib/constants";

// トップページ上部と同じタイトルブロック。クリックで現在のページを再読み込みする。
// headingAs: トップページでは h1、他ページは各ページ側に h1 があるので div にする。
export function SiteTitle({ headingAs: Heading = "div" }) {
  return (
    <>
      <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12, letterSpacing: "0.3em", color: COLORS.vermilion }}>
        CHINESE HISTORY TIMELINE
      </div>
      <Heading style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 32, fontWeight: 900, color: COLORS.ink, marginTop: 6 }}>
        <button
          type="button"
          onClick={() => window.location.reload()}
          title="ページを更新"
          style={{ font: "inherit", color: "inherit", background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          中国史年表
        </button>
      </Heading>
      <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 6 }}>
        「中国五千年史」－ 新石器時代から現代まで、王朝・人物・出来事をスクロールして辿る
      </p>
    </>
  );
}

// トップページ以外の全ページ上部に表示（トップページはTimeline内に同じブロックがある）
export default function SiteHeader() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <header className="px-6 pt-8 pb-6 text-center" style={{ backgroundColor: COLORS.paper, borderBottom: `1px solid ${COLORS.mist}` }}>
      <SiteTitle />
    </header>
  );
}
