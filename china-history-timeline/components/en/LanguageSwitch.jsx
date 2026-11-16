"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS } from "@/lib/constants";
import { FEATURE_SLUGS } from "@/lib/en/features";

// Same pairing rule as englishPathFor / japanesePathFor in lib/en/index.js
// (kept here so this client component does not pull in the era data).
const PAIRED = [
  /^\/$/,
  /^\/eras$/,
  /^\/people$/,
  /^\/eras\/[^/]+$/,
  /^\/events\/[^/]+$/,
  ...FEATURE_SLUGS.map((s) => new RegExp(`^/${s}$`)),
];

function counterpart(pathname, lang) {
  if (lang === "ja") {
    if (!PAIRED.some((re) => re.test(pathname))) return "/en";
    return pathname === "/" ? "/en" : `/en${pathname}`;
  }
  const p = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return PAIRED.some((re) => re.test(p)) ? p : "/";
}

// Pages whose URLs differ between languages (e.g. person pages) declare the pair with
// <link rel="alternate" hreflang> in their metadata; that link wins over the rule above.
function alternateFromHead(lang) {
  const el = document.querySelector(`link[rel="alternate"][hreflang="${lang === "ja" ? "en" : "ja"}"]`);
  if (!el) return null;
  try {
    return new URL(el.getAttribute("href"), window.location.href).pathname;
  } catch {
    return null;
  }
}

// lang: the language of the page this is shown on. Links to the same page in the other language when it exists.
export default function LanguageSwitch({ lang, style }) {
  const pathname = usePathname() || "/";
  const [fromHead, setFromHead] = useState(null);
  useEffect(() => {
    setFromHead(alternateFromHead(lang));
    // metadata of a client-side navigation can land just after the path changes
    const t = setTimeout(() => setFromHead(alternateFromHead(lang)), 300);
    return () => clearTimeout(t);
  }, [pathname, lang]);
  const href = fromHead || counterpart(pathname, lang);
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
