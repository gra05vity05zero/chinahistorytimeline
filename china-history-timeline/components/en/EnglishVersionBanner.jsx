"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { useCounterpartHref } from "@/components/en/LanguageSwitch";

const DISMISS_KEY = "enBannerDismissed";

// Shown on Japanese pages to visitors whose browser languages include no Japanese.
// A suggestion only (no automatic redirect), so crawlers and visitors who chose Japanese are unaffected.
export default function EnglishVersionBanner() {
  const href = useCounterpartHref("ja");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const langs = navigator.languages?.length ? navigator.languages : [navigator.language || ""];
    if (langs.some((l) => /^ja\b/i.test(l))) return;
    try {
      if (localStorage.getItem(DISMISS_KEY)) return;
    } catch {}
    setShow(true);
  }, []);

  if (!show) return null;

  const dismiss = () => {
    setShow(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  };

  return (
    <div
      lang="en"
      role="region"
      aria-label="English version"
      className="flex items-center justify-center gap-3 px-4 py-2 text-center"
      style={{ backgroundColor: COLORS.ink, color: COLORS.paper, fontSize: 14 }}
    >
      <span>
        This page is in Japanese.{" "}
        <Link href={href} hrefLang="en" style={{ color: COLORS.paper, fontWeight: 700, textDecoration: "underline" }}>
          Read it in English →
        </Link>
      </span>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss"
        style={{ background: "none", border: "none", color: COLORS.paper, fontSize: 18, lineHeight: 1, cursor: "pointer", padding: "0 4px" }}
      >
        ×
      </button>
    </div>
  );
}
