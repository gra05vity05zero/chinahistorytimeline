import Timeline from "@/components/Timeline";
import { ERAS } from "@/lib/data";
import { getEraOverview } from "@/lib/eraOverviews";

// title・description・openGraph・twitterはルートlayoutの既定値をそのまま使う
export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  // 時代解説の補足項目（milestones）だけを渡し、解説本文はクライアントのバンドルに含めない
  const milestonesByEra = Object.fromEntries(ERAS.map((era) => [era.id, getEraOverview(era.id)?.milestones || []]));
  return <Timeline milestonesByEra={milestonesByEra} />;
}
