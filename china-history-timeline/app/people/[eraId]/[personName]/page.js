import { notFound } from "next/navigation";
import { ERAS, SITE_URL, getEraFigures, personSlug, stripRuby, buildOpenGraph, buildTwitter } from "@/lib/data";
import PersonDetail from "@/components/PersonDetail";
import { formatLifeYear, lifeAge } from "@/lib/personDetails";

// 生涯年表の行を表示用に整える（先頭行=誕生、最後の行=死去）
function buildLifeRows(life) {
  if (!life) return [];
  const born = life[0][0];
  return life.map(([year, text, approx], i) => ({
    year: formatLifeYear(year, approx === "頃"),
    age: i === 0 ? (born === null ? null : 0) : lifeAge(born, year),
    text,
    kind: i === 0 ? (born === null ? null : "birth") : i === life.length - 1 ? "death" : null,
  }));
}

function findPerson(eraId, personName) {
  const era = ERAS.find((e) => e.id === eraId);
  if (!era) return null;
  const person = getEraFigures(era).find((p) => p.bio && personSlug(p.name) === personName);
  if (!person) return null;
  return { era, person };
}

// ビルド時に、伝記本文（bio）が用意されている人物のみ静的ページを生成する（SSG）
// bioが未整備の人物はページ化せず、空コンテンツのインデックスを避ける
export function generateStaticParams() {
  return ERAS.flatMap((era) =>
    getEraFigures(era)
      .filter((p) => p.bio)
      .map((p) => ({ eraId: era.id, personName: personSlug(p.name) }))
  );
}

export function generateMetadata({ params }) {
  const found = findPerson(params.eraId, decodeURIComponent(params.personName));
  if (!found) return {};
  const { era, person } = found;
  const name = stripRuby(person.name);
  // 検索される呼び名が見出しの表記と違う人物（例: 唐太宗→李世民）は、データ側のseoTitleを優先する
  const title = person.seoTitle ?? `${name}とは？生涯と業績`;
  const description = stripRuby(person.description);
  const path = `/people/${era.id}/${personSlug(person.name)}`;
  const image = { title: `${name}とは？`, subtitle: "生涯と業績", kicker: `${stripRuby(era.name)}の人物`, seal: era.seal };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: buildOpenGraph({ title, description, path, type: "article", image }),
    twitter: buildTwitter({ title, description }),
  };
}

export default function PersonPage({ params }) {
  const found = findPerson(params.eraId, decodeURIComponent(params.personName));
  if (!found) notFound();
  const { era, person } = found;
  const name = stripRuby(person.name);
  const description = stripRuby(person.description);
  const path = `/people/${era.id}/${personSlug(person.name)}`;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    description,
    ...(person.imageUrl ? { image: person.imageUrl } : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "人物一覧", item: `${SITE_URL}/people` },
      { "@type": "ListItem", position: 3, name: era.name, item: `${SITE_URL}/people/${era.id}` },
      { "@type": "ListItem", position: 4, name, item: `${SITE_URL}${path}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(personJsonLd)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(breadcrumbJsonLd)) }}
      />
      <PersonDetail
        person={person}
        era={era}
        lifeRows={buildLifeRows(person.life)}
        relatedPeople={getEraFigures(era)
          .filter((p) => p.bio && p.name !== person.name)
          .map((p) => ({ href: `/people/${era.id}/${personSlug(p.name)}`, label: p.name }))}
      />
    </>
  );
}
