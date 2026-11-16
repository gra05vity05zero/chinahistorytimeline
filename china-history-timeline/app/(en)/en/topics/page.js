import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { SealMark } from "@/components/Shared";
import { SITE_NAME_EN } from "@/lib/en";
import { FEATURES_READY } from "@/lib/en/features";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";

const serif = { fontFamily: "var(--font-serif), serif" };
const title = "Topics in Chinese History";
const description =
  "In-depth guides to the big themes of Chinese history: the Great Wall, the Silk Road, the First Emperor, the Four Great Inventions, the imperial examinations, emperors, capitals and more.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/en/topics" },
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/topics", image: { title, seal: "題" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

export default function EnglishTopicsPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/en" style={{ color: COLORS.vermilion, ...serif, fontSize: 13 }}>
          ← Back to the timeline
        </Link>
        <h1 style={{ ...serif, fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14, lineHeight: 1.3 }}>{title}</h1>
        <p style={{ fontSize: 14, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 24 }}>
          Guides that cut across the eras — monuments, ideas, institutions and the people behind them.
        </p>
        <div className="flex flex-col gap-2">
          {FEATURES_READY.map((f) => (
            <Link key={f.slug} href={`/en/${f.slug}`} className="flex items-center gap-3 px-4 py-3" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
              <SealMark char={f.seal} />
              <div className="flex-1 min-w-0">
                <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{f.title}</div>
                <div style={{ fontSize: 12.5, color: COLORS.inkSoft, lineHeight: 1.6 }}>{f.blurb}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
