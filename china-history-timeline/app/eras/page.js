import Link from "next/link";
import { ERAS, ERA_ALIASES, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { SealMark, BackToTopButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "中国の王朝・時代一覧｜各時代の解説と年表";
const fullTitle = `中国の王朝・時代一覧｜各時代の解説と年表 | ${SITE_NAME}`;
const description =
  "新石器時代から中華人民共和国まで、中国史の王朝・時代を一覧にまとめました。各時代の特徴・年表・政治や文化・日本との関係・滅亡の理由を、時代ごとのページでわかりやすく解説します。";

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
        <BackToTopButton />
        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国の王朝・時代一覧
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 24 }}>
          王朝・時代ごとに、その時代の特徴・年表・主な出来事と人物を解説しています。気になる時代を選んでご覧ください。
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
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                  <RubyText text={era.name} />
                  {ERA_ALIASES[era.id] && (
                    <span style={{ fontSize: 11, color: COLORS.inkSoft, fontWeight: 400, marginLeft: 6 }}>
                      （<RubyText text={ERA_ALIASES[era.id]} />）
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}><RubyText text={era.period} /></div>
              </div>
              <div style={{ fontSize: 11, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>{era.events.length}件</div>
            </Link>
          ))}
        </div>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
