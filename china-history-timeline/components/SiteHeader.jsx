"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS } from "@/lib/constants";

// トップページ上部と同じタイトルブロック。クリックでトップページへ移動する。
// headingAs: トップページでは h1、他ページは各ページ側に h1 があるので div にする。
export function SiteTitle({ headingAs: Heading = "div" }) {
  return (
    <>
      <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 12, letterSpacing: "0.3em", color: COLORS.vermilion }}>
        CHINESE HISTORY TIMELINE
      </div>
      <Heading style={{ fontFamily: "var(--font-serif), serif", fontSize: 32, fontWeight: 900, color: COLORS.ink, marginTop: 6 }}>
        <Link href="/" title="トップページへ" style={{ color: "inherit", textDecoration: "none" }}>
          中国史年表
        </Link>
      </Heading>
      <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 6 }}>
        「中国五千年史」－ 新石器時代から現代まで、王朝・人物・出来事を年表と地図で<ruby>辿<rt>たど</rt></ruby>る。日本史との対照や、歴史小説・漫画の紹介も
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
