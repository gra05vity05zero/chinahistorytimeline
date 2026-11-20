import ScrollTimeline from "@/components/ScrollTimeline";
import { bilingualAlternates } from "@/lib/en";
import { ERAS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { getEraOverview } from "@/lib/eraOverviews";

const title = "スクロールで辿る中国史年表｜全24時代の出来事を年代順に";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "新石器時代から中華人民共和国まで、中国史の全24時代の主な出来事を要約つきで年代順に並べた縦スクロールの年表。今どの時代を読んでいるかが常に表示され、王朝一覧から好きな時代へ移動できます。";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/timeline", "ja"),
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/timeline" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

export default function TimelinePage() {
  // 時代解説の補足項目（milestones）だけを渡し、解説本文はクライアントのバンドルに含めない
  const milestonesByEra = Object.fromEntries(ERAS.map((era) => [era.id, getEraOverview(era.id)?.milestones || []]));
  return <ScrollTimeline milestonesByEra={milestonesByEra} />;
}
