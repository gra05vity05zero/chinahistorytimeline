import { COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { getNews } from "@/lib/news";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { NewsList } from "@/components/NewsList";
import { RubyText } from "@/components/Ruby";

const title = "中国史・考古学のニュース｜遺跡の発掘や新発見、文化財の最新情報";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "中国の遺跡の発掘調査、考古学の新発見、文化財や博物館の話題など、中国史に関するニュースを毎日更新でまとめます。各記事に出典と、関連する時代・人物の解説ページへのリンク付き。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/news" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/news" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

export default function NewsPage() {
  const news = getNews();
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国史のニュース
        </h1>
        <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 20 }}>
          <RubyText text="中国の遺跡の{{発掘|はっくつ}}や考古学の新発見、文化財に関するニュースを、内容を要約して新しい順に紹介します（毎日更新）。くわしくは各記事の出典元をご覧ください。" />
        </p>

        <NewsList items={news} />

        <section style={{ marginTop: 32 }}>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/" variant="solid">中国史年表を見る</NavButton>
            <NavButton href="/world-heritage" variant="outline">中国の世界遺産</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
