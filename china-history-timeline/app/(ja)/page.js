import HomePage from "@/components/HomePage";
import { bilingualAlternates } from "@/lib/en";
import { buildOpenGraph, buildTwitter } from "@/lib/data";
import { getFreshNews } from "@/lib/news";

// <title> はルートlayoutの既定値（DEFAULT_TITLE）を使う
const title = "中国史年表｜中国の歴史五千年を王朝・人物・出来事でわかりやすく";
const description =
  "中国史（中国の歴史）を新石器時代から現代まで年表形式で紹介。夏・殷・周・秦・漢・唐・宋・元・明・清などの王朝、歴史上の人物、合戦、重要な出来事を時代別にわかりやすく解説します。";

export const metadata = {
  description,
  alternates: bilingualAlternates("/", "ja"),
  openGraph: buildOpenGraph({ title, description, path: "/" }),
  twitter: buildTwitter({ title, description }),
};

// ニュース欄の表示判定（最新記事が60日以内か）を日付の経過に合わせて切り替えるため、1日ごとに再生成する
export const revalidate = 86400;

export default function Page() {
  return <HomePage latestNews={getFreshNews(3, 60)} />;
}
