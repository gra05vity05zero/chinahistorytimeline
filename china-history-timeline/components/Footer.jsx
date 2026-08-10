import Link from "next/link";
import { COLORS } from "@/lib/data";

export default function Footer() {
  const linkStyle = { color: COLORS.inkSoft, textDecoration: "none" };
  return (
    <footer
      className="flex flex-wrap items-center justify-center gap-4 px-6 py-8"
      style={{ backgroundColor: COLORS.paperDeep, borderTop: `1px solid ${COLORS.mist}`, fontSize: 12 }}
    >
      <Link href="/about" style={linkStyle}>このサイトについて</Link>
      <span style={{ color: COLORS.mist }}>|</span>
      <Link href="/privacy" style={linkStyle}>プライバシーポリシー</Link>
      <span style={{ color: COLORS.mist }}>|</span>
      <Link href="/contact" style={linkStyle}>お問い合わせ</Link>
      <span style={{ width: "100%", textAlign: "center", color: COLORS.mist, marginTop: 8, fontSize: 11 }}>
        © {new Date().getFullYear()} 中国五千年史
      </span>
    </footer>
  );
}
