import EnTimeline from "@/components/en/EnTimeline";
import { yearNumber } from "@/components/EraOverview";
import { ERAS_EN, CATEGORY_LABEL_EN, SITE_NAME_EN, displayYearEn, displayPeriodEn, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";

const title = "Scroll Through the Chinese History Timeline: Every Event, Era by Era";
const description =
  "A scrolling timeline of Chinese history from the Neolithic to the People’s Republic: the key events of all 24 eras in order, each with a short summary. The current era stays pinned at the top, and you can jump to any dynasty.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/timeline", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/timeline", image: { title: "Scroll Through the Timeline", seal: "年" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

export default function EnglishScrollTimelinePage() {
  // Only what the timeline cards show goes to the client (summaries are clamped to two lines anyway).
  const eras = ERAS_EN.map((era) => ({
    id: era.id,
    seal: era.seal,
    name: era.name,
    periodLabel: displayPeriodEn(era.period),
    description: era.description,
    events: era.events.map((ev) => ({
      slug: ev.slug,
      yearLabel: displayYearEn(ev.year),
      sortYear: yearNumber(ev.year),
      category: ev.category,
      categoryLabel: CATEGORY_LABEL_EN[ev.category] || "",
      title: ev.title,
      summary: ev.summary.length > 260 ? `${ev.summary.slice(0, 260)}…` : ev.summary,
    })),
  }));
  return <EnTimeline eras={eras} />;
}
