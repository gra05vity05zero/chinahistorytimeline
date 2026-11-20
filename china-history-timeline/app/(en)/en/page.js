import EnHomePage from "@/components/en/EnHomePage";
import { getFreshNewsEn } from "@/lib/en/news";

// title/description/openGraph/alternates come from the English root layout.
// Rebuilt daily so the news block disappears on its own once the newest item is 60 days old.
export const revalidate = 86400;

export default function EnglishHomePage() {
  return <EnHomePage latestNews={getFreshNewsEn(3, 60)} />;
}
