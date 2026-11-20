import Link from "next/link";
import { COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { ARTICLE_CATEGORIES } from "@/lib/articles";
import { BackToTopButton } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const serif = "var(--font-serif), serif";
const title = "中国史の記事一覧｜時代・人物・合戦・文化のテーマ別解説";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "中国史の解説記事をテーマ別に一覧にまとめました。時代・王朝、歴史上の人物、合戦マップ、歴史地図と名所、文化・文学、覚え方やクイズ、ドラマや漫画と史実まで、目的に合わせて探せます。";

export const metadata = {
  title,
  description,
  // 英語版の記事一覧は /en/topics（URLが異なるので明示的にペアにする）
  alternates: { canonical: "/articles", languages: { ja: "/articles", en: "/en/topics", "x-default": "/en/topics" } },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/articles" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

export default function ArticlesPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-3xl mx-auto px-5 py-12">
        <BackToTopButton />
        <h1 style={{ fontFamily: serif, fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国史の記事一覧
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 20 }}>
          中国史の解説記事を、目的別に{ARTICLE_CATEGORIES.length}つのカテゴリに分けて紹介します。各時代の解説は「時代から学ぶ」、個々の出来事はトップページの年表からご覧ください。
        </p>

        <nav aria-label="カテゴリ" style={{ marginBottom: 8 }}>
          <ul className="flex flex-wrap gap-2">
            {ARTICLE_CATEGORIES.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="hp-chip" style={{ paddingRight: 12 }}>
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {ARTICLE_CATEGORIES.map((c) => (
          <section key={c.id} id={c.id} aria-labelledby={`${c.id}-h`} style={{ marginTop: 36, scrollMarginTop: 16 }}>
            <div className="flex items-center gap-3" style={{ paddingBottom: 8, marginBottom: 6, borderBottom: `2px solid ${COLORS.vermilion}` }}>
              <span
                aria-hidden="true"
                className="seal-char flex items-center justify-center shrink-0"
                data-char={c.seal}
                style={{ width: 32, height: 32, backgroundColor: COLORS.vermilion, color: "#fff", fontFamily: serif, fontSize: 16, fontWeight: 700 }}
              />
              <div className="min-w-0">
                <h2 id={`${c.id}-h`} style={{ fontFamily: serif, fontSize: 20, fontWeight: 900, color: COLORS.ink }}>
                  {c.title}
                  <span style={{ fontSize: 12, fontWeight: 400, color: COLORS.inkSoft, marginLeft: 8 }}>{c.links.length}件</span>
                </h2>
                <p style={{ fontSize: 12.5, color: COLORS.inkSoft }}>
                  <RubyText text={c.desc} />
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
              {c.links.map((l) => (
                <li key={l.href} style={{ borderBottom: "1px dashed #DCD3B8" }}>
                  <Link href={l.href} className="flex items-center gap-1.5 hover:underline" style={{ minHeight: 44, fontSize: 14.5, color: COLORS.vermilion }}>
                    <span aria-hidden style={{ color: COLORS.mist }}>›</span>
                    <RubyText text={l.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="mt-12 text-center">
          <Link href="/" className="hover:underline" style={{ fontSize: 14, color: COLORS.vermilion }}>
            ← 中国史年表（トップ）に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
