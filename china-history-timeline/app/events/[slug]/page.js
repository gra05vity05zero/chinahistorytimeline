import { notFound } from "next/navigation";
import { ERAS, findEventBySlug } from "@/lib/data";
import EventDetail from "@/components/EventDetail";

// ビルド時に全イベントの静的ページを生成（SSG）
export function generateStaticParams() {
  return ERAS.flatMap((era) => era.events.map((ev) => ({ slug: ev.slug })));
}

export function generateMetadata({ params }) {
  const found = findEventBySlug(params.slug);
  if (!found) return {};
  const { event, era } = found;
  return {
    title: `${event.title}（${event.year}）| 中国五千年史`,
    description: event.summary,
    openGraph: {
      title: `${event.title}（${event.year}）`,
      description: event.summary,
      type: "article",
    },
  };
}

export default function EventPage({ params }) {
  const found = findEventBySlug(params.slug);
  if (!found) notFound();
  const { event, era } = found;
  return <EventDetail event={event} era={era} />;
}
