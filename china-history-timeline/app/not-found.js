import Link from "next/link";
import { COLORS } from "@/lib/data";

export default function NotFound() {
  return (
    <div
      style={{ backgroundColor: COLORS.paper, minHeight: "100vh" }}
      className="flex flex-col items-center justify-center px-6 text-center"
    >
      <div
        style={{
          fontFamily: "'Noto Serif SC', serif",
          fontSize: 48,
          fontWeight: 900,
          color: COLORS.vermilion,
          marginBottom: 12,
        }}
      >
        404
      </div>
      <p style={{ fontSize: 15, color: COLORS.inkSoft, marginBottom: 24, lineHeight: 1.8 }}>
        お探しのページは見つかりませんでした。
        <br />
        時代の狭間に消えてしまったようです。
      </p>
      <Link
        href="/"
        style={{
          fontSize: 14,
          color: "#fff",
          backgroundColor: COLORS.vermilion,
          padding: "10px 24px",
          textDecoration: "none",
        }}
      >
        年表に戻る
      </Link>
    </div>
  );
}
