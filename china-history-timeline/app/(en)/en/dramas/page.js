import Link from "next/link";
import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, findEraEn } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { getSortedDramasEn, formatPeriodEn } from "@/lib/en/dramas";
import { FeaturePage, NoteCard, cardStyle, serif } from "@/components/en/EnFeature";
import { Stars } from "@/components/en/Stars";

const title = "Chinese Historical Dramas in Order of Era: How Accurate Are They?";
const description =
  "Chinese historical dramas arranged by the period they portray: were the main characters real, where do the dramas depart from history, and what really happened next — with a historical-accuracy rating for each.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/dramas", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/dramas", image: { title: "Chinese Historical Dramas", subtitle: "History vs. drama", seal: "劇" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

export default function EnglishDramasPage() {
  const dramas = getSortedDramasEn();
  const eraIds = [...new Set(dramas.map((d) => d.eraIds[0]))];
  return (
    <FeaturePage
      title="Chinese Historical Dramas"
      jaPath="/dramas"
      intro="Chinese historical dramas, arranged in order of the period they portray. For each one we look at whether the hero and other characters were real, where the drama departs from history, and what really happened next — with links to the events and eras of the timeline."
      related={[
        { href: "/en/harem-ranks", label: "Ranks of the imperial harem" },
        { href: "/en/women-rulers", label: "Women who ruled China" },
        { href: "/en/kusuriya", label: "The Apothecary Diaries and history" },
      ]}
    >
      <NoteCard title="About the accuracy rating">
        Each drama is rated from ★1 to ★5 on four points: whether the main characters were real, whether the main events happened, whether the chronology is right, and how the characters are portrayed. The ratings are this site’s own rough guide.
      </NoteCard>
      <div style={{ marginTop: 24 }}>
        {eraIds.map((eraId) => {
          const era = findEraEn(eraId);
          return (
            <section key={eraId} style={{ marginBottom: 28 }}>
              <h2 style={{ ...serif, fontSize: 18, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
                <Link href={`/en/eras/${eraId}`} style={{ color: COLORS.ink }}>{era?.name}</Link>
              </h2>
              <div className="flex flex-col gap-3">
                {dramas.filter((d) => d.eraIds[0] === eraId).map((d) => {
                  const lead = d.characters[0];
                  return (
                    <Link key={d.slug} href={`/en/dramas/${d.slug}`} className="block p-4" style={{ ...cardStyle, borderLeft: `3px solid ${COLORS.vermilion}` }}>
                      <div style={{ ...serif, fontSize: 17, fontWeight: 700, color: COLORS.ink }}>{d.title}</div>
                      <div style={{ fontSize: 12.5, color: COLORS.inkSoft, marginTop: 2 }}>{d.alt} · {d.year} · {d.episodes} episodes</div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1" style={{ fontSize: 12.5, marginTop: 6 }}>
                        <span style={{ color: COLORS.gold }}>Set in {formatPeriodEn(d.period)}</span>
                        <span>Accuracy <Stars score={d.score} /></span>
                      </div>
                      <div style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 6 }}>
                        Hero: {lead.role} — {lead.type === "fictional" ? "fictional" : `modeled on ${lead.real}`}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </FeaturePage>
  );
}
