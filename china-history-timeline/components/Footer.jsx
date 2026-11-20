import Link from "next/link";
import { COLORS } from "@/lib/data";
import FooterAds from "@/components/FooterAds";
import LanguageSwitch from "@/components/en/LanguageSwitch";

export default function Footer() {
  const linkStyle = { color: COLORS.inkSoft, textDecoration: "none" };
  return (
    <footer
      className="flex flex-wrap items-center justify-center gap-4 px-6 py-8"
      style={{ backgroundColor: COLORS.paperDeep, borderTop: `1px solid ${COLORS.mist}`, fontSize: 12 }}
    >
      <FooterAds />
      <Link href="/eras" style={linkStyle}>時代一覧</Link>
      <span style={{ color: COLORS.mist }}>|</span>
      <Link href="/people" style={linkStyle}>人物事典</Link>
      <span style={{ color: COLORS.mist }}>|</span>
      <Link href="/articles" style={linkStyle}>記事一覧</Link>
      <span style={{ color: COLORS.mist }}>|</span>
      <Link href="/about" style={linkStyle}>このサイトについて</Link>
      <span style={{ color: COLORS.mist }}>|</span>
      <Link href="/privacy" style={linkStyle}>プライバシーポリシー</Link>
      <span style={{ color: COLORS.mist }}>|</span>
      <LanguageSwitch lang="ja" />
      <span style={{ width: "100%", textAlign: "center", color: COLORS.mist, marginTop: 8, fontSize: 11 }}>
        © {new Date().getFullYear()} 中国五千年史
      </span>
    </footer>
  );
}
