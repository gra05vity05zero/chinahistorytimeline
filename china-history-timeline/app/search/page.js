import { COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import SearchClient from "@/components/Search";

const title = "サイト内検索";
const fullTitle = `サイト内検索 | ${SITE_NAME}`;
const description = "人物名・出来事・王朝名から中国史の年表を検索できます。三国志の英雄や歴代皇帝、合戦や建造物などキーワードでお探しください。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/search" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/search" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

export default function SearchPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 24, fontWeight: 900, color: COLORS.ink, marginBottom: 16 }}>
          サイト内検索
        </h1>
        <SearchClient />
      </div>
    </div>
  );
}
