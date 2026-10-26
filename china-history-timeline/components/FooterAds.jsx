"use client";

import { usePathname } from "next/navigation";
import { COLORS, A8_ADS } from "@/lib/constants";
import { A8Banner, isSingleAdBlockPage } from "@/components/Shared";

// 全ページ共通のフッターバナー。出来事・人物ページは本文の後ろのA8AdBlockにまとめるため出さない
export default function FooterAds() {
  const pathname = usePathname();
  if (isSingleAdBlockPage(pathname)) return null;
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <div style={{ fontSize: 10.5, color: COLORS.inkSoft, marginBottom: 6 }}>広告</div>
      <A8Banner {...A8_ADS.travelist} />
      <div style={{ marginTop: 10 }}>
        <A8Banner {...A8_ADS.solahapi} />
      </div>
    </div>
  );
}
