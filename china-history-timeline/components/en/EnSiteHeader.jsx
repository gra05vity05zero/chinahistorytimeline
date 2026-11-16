"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS } from "@/lib/constants";
import LanguageSwitch from "@/components/en/LanguageSwitch";

export function EnSiteTitle({ headingAs: Heading = "div" }) {
  return (
    <>
      <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 12, letterSpacing: "0.3em", color: COLORS.vermilion }}>
        5,000 YEARS OF CHINA
      </div>
      <Heading style={{ fontFamily: "var(--font-serif), serif", fontSize: 32, fontWeight: 900, color: COLORS.ink, marginTop: 6, lineHeight: 1.2 }}>
        <Link href="/en" title="Back to the timeline" style={{ color: "inherit", textDecoration: "none" }}>
          Chinese History Timeline
        </Link>
      </Heading>
      <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 8 }}>
        From Neolithic villages to the modern state — dynasties, people and events of Chinese history in one timeline.
      </p>
    </>
  );
}

function CompactHeader() {
  return (
    <header className="px-5 py-2.5 flex items-center justify-between" style={{ backgroundColor: COLORS.paper, borderBottom: `1px solid ${COLORS.mist}` }}>
      <Link
        href="/en"
        title="Back to the timeline"
        style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 900, color: COLORS.ink, textDecoration: "none" }}
      >
        Chinese History Timeline
      </Link>
      <LanguageSwitch lang="en" style={{ fontSize: 13 }} />
    </header>
  );
}

// Shown on every English page except the top page (the timeline renders its own title block).
export default function EnSiteHeader() {
  const pathname = usePathname();
  if (pathname === "/en") return null;
  if (pathname.startsWith("/en/events/")) return <CompactHeader />;
  return (
    <header className="relative px-6 pt-8 pb-6 text-center" style={{ backgroundColor: COLORS.paper, borderBottom: `1px solid ${COLORS.mist}` }}>
      <div className="absolute" style={{ top: 10, right: 16 }}>
        <LanguageSwitch lang="en" style={{ fontSize: 13 }} />
      </div>
      <EnSiteTitle />
    </header>
  );
}
