import { notFound } from "next/navigation";
import { ERAS, SITE_URL, getEraFigures, personSlug, stripRuby, buildOpenGraph, buildTwitter } from "@/lib/data";
import PersonDetail from "@/components/PersonDetail";

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
  const title = `${name}とは？生涯と業績`;
  const description = stripRuby(person.description);
  const path = `/people/${era.id}/${personSlug(person.name)}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: buildOpenGraph({ title, description, path, type: "article" }),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PersonDetail person={person} era={era} />
    </>
  );
}
