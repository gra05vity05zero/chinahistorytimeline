import { COLORS, buildOpenGraph, buildTwitter } from "@/lib/data";

const title = "このサイトについて";
const fullTitle = "このサイトについて | 中国五千年史";
const description =
  "「中国五千年史」は、新石器文化から中華人民共和国まで中国の歴史を王朝ごとにたどれる年表サイトです。サイトの目的や運営方針について紹介します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/about" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 24, fontWeight: 900, color: COLORS.ink, marginBottom: 20 }}>
          このサイトについて
        </h1>
        <p style={{ fontSize: 14, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
          「中国五千年史」は、新石器文化から中華人民共和国まで、中国の歴史を王朝ごとに区切って縦スクロールの年表でたどれるサイトです。
          各出来事の詳細ページでは、背景や影響に加えて、関連する映画・ゲーム・書籍、建造物や人物の情報もあわせて掲載しています。
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
          歴史は教科書で学ぶだけでなく、映画やゲーム、実際に残る建造物を通して触れることでより身近に感じられると考え、
          このサイトを作成しました。
        </p>
      </div>
    </div>
  );
}
