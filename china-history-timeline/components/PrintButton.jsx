"use client";

import { COLORS } from "@/lib/constants";

// ブラウザの印刷ダイアログを開くボタン（PDF保存もここから選べる）
export function PrintButton({ label = "この年表を印刷する" }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-5 py-2.5 hover:opacity-90"
      style={{ backgroundColor: COLORS.vermilion, color: "#FFF", fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer" }}
    >
      <span aria-hidden>🖨</span> {label}
    </button>
  );
}
