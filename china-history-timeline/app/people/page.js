import Link from "next/link";
import { ERAS, ERA_ALIASES, COLORS, SITE_NAME, getEraFigures, buildOpenGraph, buildTwitter } from "@/lib/data";
import { SealMark } from "@/components/Shared";

const title = "人物一覧";
const fullTitle = `人物一覧 | ${SITE_NAME}`;
const description =
  "新石器文化から中華人民共和国まで、中国史に登場する人物を王朝・時代ごとにまとめました。三国志の英雄から歴代皇帝まで、時代別の人物一覧からゆかりの出来事へたどれます。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/people" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/people" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

export default function PeopleIndexPage() {
  const rows = ERAS.map((era) => ({ era, count: getEraFigures(era).length }));

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginBottom: 14 }}>
          人物一覧
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 24 }}>
          王朝・時代ごとに、登場する人物とゆかりの出来事をまとめています。気になる時代を選んでご覧ください。
        </p>

        <div className="flex flex-col gap-2">
          {rows.map(({ era, count }) => (
            <Link
              key={era.id}
              href={`/people/${era.id}`}
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
              <div style={{ fontSize: 11, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>{count}人</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
