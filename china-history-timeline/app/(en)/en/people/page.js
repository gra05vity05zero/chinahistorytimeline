import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { SealMark } from "@/components/Shared";
import { SITE_NAME_EN, getPeopleByEraEn, displayPeriodEn, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";

const serif = { fontFamily: "var(--font-serif), serif" };
const title = "People of Chinese History by Era";
const description =
  "Emperors, generals, thinkers and poets of Chinese history, from the legendary sage kings to the twentieth century — arranged by dynasty, with the life and achievements of each.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/people", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/people", image: { title: "People of Chinese History", seal: "人" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

export default function EnglishPeoplePage() {
  const rows = getPeopleByEraEn().filter((r) => r.people.length > 0);
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/en" style={{ color: COLORS.vermilion, ...serif, fontSize: 13 }}>
          ← Back to the timeline
        </Link>
        <h1 style={{ ...serif, fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14, lineHeight: 1.3 }}>
          People of Chinese History
        </h1>
        <p style={{ fontSize: 14, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 24 }}>
          The key figures of each era, with their life and achievements and the events they took part in.
        </p>

        <div className="flex flex-col gap-4">
          {rows.map(({ era, people }) => (
            <section key={era.id} id={era.id} style={{ scrollMarginTop: 16 }}>
              <Link
                href={`/en/eras/${era.id}`}
                className="flex items-center gap-3 px-4 py-3"
                style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}
              >
                <SealMark char={era.seal} />
                <div className="flex-1 min-w-0">
                  <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{era.name}</div>
                  <div style={{ fontSize: 11.5, color: COLORS.gold, ...serif }}>{displayPeriodEn(era.period)}</div>
                </div>
                <div style={{ fontSize: 11, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>
                  {people.length} {people.length === 1 ? "person" : "people"}
                </div>
              </Link>
              <ul style={{ borderLeft: "1px solid #DCD3B8", borderRight: "1px solid #DCD3B8", borderBottom: "1px solid #DCD3B8", backgroundColor: "#fff" }}>
                {people.map((p) => (
                  <li key={p.slug} style={{ borderTop: "1px solid #EFE7D0" }}>
                    <Link href={p.href} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3 px-4 py-2">
                      <span className="shrink-0 sm:w-44" style={{ ...serif, fontSize: 13.5, fontWeight: 700, color: COLORS.ink }}>
                        {p.name}
                      </span>
                      <span style={{ fontSize: 12.5, lineHeight: 1.7, color: COLORS.inkSoft }}>{p.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
