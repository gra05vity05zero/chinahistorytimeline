"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS } from "@/lib/constants";

// Same pairing rule as englishPathFor / japanesePathFor in lib/en/index.js
// (kept here so this client component does not pull in the era data).
const PAIRED = [/^\/$/, /^\/eras$/, /^\/eras\/[^/]+$/, /^\/events\/[^/]+$/];

function counterpart(pathname, lang) {
  if (lang === "ja") {
    if (!PAIRED.some((re) => re.test(pathname))) return "/en";
    return pathname === "/" ? "/en" : `/en${pathname}`;
  }
  const p = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return PAIRED.some((re) => re.test(p)) ? p : "/";
}

// lang: the language of the page this is shown on. Links to the same page in the other language when it exists.
export default function LanguageSwitch({ lang, style }) {
  const pathname = usePathname() || "/";
  const href = counterpart(pathname, lang);
  const linkStyle = { color: COLORS.vermilion, textDecoration: "none", ...style };
  return lang === "ja" ? (
    <Link href={href} hrefLang="en" lang="en" style={linkStyle}>
      English
    </Link>
  ) : (
    <Link href={href} hrefLang="ja" lang="ja" style={linkStyle}>
      日本語
    </Link>
  );
}
