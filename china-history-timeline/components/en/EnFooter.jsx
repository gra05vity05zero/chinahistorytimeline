import Link from "next/link";
import { COLORS } from "@/lib/constants";
import LanguageSwitch from "@/components/en/LanguageSwitch";

export default function EnFooter() {
  const linkStyle = { color: COLORS.inkSoft, textDecoration: "none" };
  const sep = <span style={{ color: COLORS.mist }}>|</span>;
  return (
    <footer
      className="flex flex-wrap items-center justify-center gap-4 px-6 py-8"
      style={{ backgroundColor: COLORS.paperDeep, borderTop: `1px solid ${COLORS.mist}`, fontSize: 12 }}
    >
      <Link href="/en" style={linkStyle}>Timeline</Link>
      {sep}
      <Link href="/en/eras" style={linkStyle}>All Eras</Link>
      {sep}
      <Link href="/en/people" style={linkStyle}>People</Link>
      {sep}
      <Link href="/privacy" hrefLang="ja" style={linkStyle}>Privacy Policy (Japanese)</Link>
      {sep}
      <LanguageSwitch lang="en" />
      <span style={{ width: "100%", textAlign: "center", color: COLORS.mist, marginTop: 8, fontSize: 11 }}>
        © {new Date().getFullYear()} Chinese History Timeline · Images from Wikimedia Commons under their respective licenses
      </span>
    </footer>
  );
}
