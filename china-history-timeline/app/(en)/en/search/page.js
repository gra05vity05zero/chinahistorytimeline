import { SITE_NAME_EN, bilingualAlternates, ERAS_EN, CATEGORY_LABEL_EN } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import SearchClient from "@/components/Search";
import { FeaturePage } from "@/components/en/EnFeature";

const title = "Search";
const description = "Search the Chinese history timeline by person, event or dynasty — the heroes of the Three Kingdoms, emperors, battles, buildings and more.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/search", "en"),
  // A search UI with no content of its own: not indexed, but links are followed
  robots: { index: false, follow: true },
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/search" }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

export default function EnglishSearchPage() {
  const index = ERAS_EN.flatMap((era) =>
    era.events.map((ev) => ({
      slug: ev.slug,
      eraId: era.id,
      eraName: era.name,
      year: ev.year,
      title: ev.title,
      summary: ev.summary,
      category: ev.category,
      figures: [CATEGORY_LABEL_EN[ev.category], ...(ev.heritage || []).filter((h) => h.type === "figure").map((h) => h.name)].filter(Boolean),
    }))
  );
  return (
    <FeaturePage title="Search" jaPath="/search">
      <SearchClient index={index} lang="en" />
    </FeaturePage>
  );
}
