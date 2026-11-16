import Link from "next/link";
import { ERAS, ERA_ALIASES, COLORS, SITE_NAME, getEraFigures, buildOpenGraph, buildTwitter } from "@/lib/data";
import { SealMark, BackToTopButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { personSlug } from "@/lib/constants";

// 解説文の最初の一文だけを取り出して簡素な説明にする
function shortDescription(text) {
  if (!text) return "";
  const idx = text.indexOf("。");
  return idx >= 0 ? text.slice(0, idx + 1) : text;
}

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
  const rows = ERAS.map((era) => ({ era, people: getEraFigures(era) }));

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />
        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          人物一覧
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 24 }}>
          王朝・時代ごとに、登場する人物とゆかりの出来事をまとめています。気になる時代を選んでご覧ください。
        </p>

        <div className="flex flex-col gap-4">
          {rows.map(({ era, people }) => (
            <section key={era.id}>
            <Link
              href={`/people/${era.id}`}
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
              <div style={{ fontSize: 11, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>{people.length}人</div>
            </Link>
            {people.length > 0 && (
              <ul style={{ borderLeft: "1px solid #DCD3B8", borderRight: "1px solid #DCD3B8", borderBottom: "1px solid #DCD3B8", backgroundColor: "#fff" }}>
                {people.map((person) => {
                  const href = person.bio ? `/people/${era.id}/${encodeURIComponent(personSlug(person.name))}` : `/people/${era.id}`;
                  return (
                    <li key={person.name} style={{ borderTop: "1px solid #EFE7D0" }}>
                      <Link href={href} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3 px-4 py-2">
                        <span className="shrink-0 sm:w-36" style={{ fontFamily: "var(--font-serif), serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink }}>
                          <RubyText text={person.name} />
                        </span>
                        <span style={{ fontSize: 12, lineHeight: 1.8, color: COLORS.inkSoft }}>
                          <RubyText text={shortDescription(person.description)} />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
            </section>
          ))}
        </div>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
