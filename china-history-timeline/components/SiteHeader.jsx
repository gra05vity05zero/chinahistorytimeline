"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS } from "@/lib/constants";
import LanguageSwitch from "@/components/en/LanguageSwitch";

// トップページ以外の全ページ上部に出す1行のヘッダー（サイト名＝トップへのリンクと言語切替）。
// 検索から記事に直接来た人に何のサイトかを示しつつ、H1と冒頭の答えがすぐ見えるよう小さくしている。
// トップページは自前のヒーロー（H1）があるので出さない。
export default function SiteHeader() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <header className="px-5 py-2.5 flex items-center justify-between" style={{ backgroundColor: COLORS.paper, borderBottom: `1px solid ${COLORS.mist}` }}>
      <Link
        href="/"
        title="トップページへ"
        style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 900, color: COLORS.ink, textDecoration: "none" }}
      >
        中国史年表
      </Link>
      <LanguageSwitch lang="ja" style={{ fontSize: 13 }} />
    </header>
  );
}
