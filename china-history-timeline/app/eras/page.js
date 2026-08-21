import Link from "next/link";
import { ERAS, ERA_ALIASES, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { SealMark } from "@/components/Shared";

const title = "王朝・時代別の出来事一覧";
const fullTitle = `王朝・時代別の出来事一覧 | ${SITE_NAME}`;
const description =
  "新石器文化から中華人民共和国まで、中国史の出来事を王朝・時代ごとにまとめました。三国志の合戦から近代の革命まで、時代別の出来事一覧から詳しい解説へたどれます。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/eras" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/eras" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

export default function ErasIndexPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginBottom: 14 }}>
          王朝・時代別の出来事一覧
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 24 }}>
          王朝・時代ごとに、起きた出来事を一覧できます。気になる時代を選んでご覧ください。
        </p>

        <div className="flex flex-col gap-2">
          {ERAS.map((era) => (
            <Link
              key={era.id}
              href={`/eras/${era.id}`}
              className="flex items-center gap-3 px-4 py-3"
              style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}
            >
              <SealMark char={era.seal} />
              <div className="flex-1">
                <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                  {era.name}
                  {ERA_ALIASES[era.id] && (
                    <span style={{ fontSize: 11, color: COLORS.inkSoft, fontWeight: 400, marginLeft: 6 }}>
                      （{ERA_ALIASES[era.id]}）
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 11, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>{era.period}</div>
              </div>
              <div style={{ fontSize: 11, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>{era.events.length}件</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
