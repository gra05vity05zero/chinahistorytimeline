import EnTimeline from "@/components/en/EnTimeline";
import { yearNumber } from "@/components/EraOverview";
import { ERAS_EN, CATEGORY_LABEL_EN, displayYearEn, displayPeriodEn } from "@/lib/en";

// title/description/openGraph come from the English root layout
export default function EnglishHomePage() {
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
