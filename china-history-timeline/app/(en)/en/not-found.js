import Link from "next/link";
import { COLORS } from "@/lib/constants";

export default function EnglishNotFound() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "70vh" }} className="flex flex-col items-center justify-center px-6 text-center">
      <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 48, fontWeight: 900, color: COLORS.vermilion, marginBottom: 12 }}>404</div>
      <p style={{ fontSize: 15, color: COLORS.inkSoft, marginBottom: 24, lineHeight: 1.8 }}>
        We couldn’t find that page.
        <br />
        It seems to have slipped through the cracks of history.
      </p>
      <Link href="/en" style={{ fontSize: 14, color: "#fff", backgroundColor: COLORS.vermilion, padding: "10px 24px", textDecoration: "none" }}>
        Back to the timeline
      </Link>
    </div>
  );
}
