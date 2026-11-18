import { stripRuby, SITE_URL } from "@/lib/data";

// 特集ページ用の構造化データ（Article + パンくず + 任意でFAQ）。
// faq は [{ q, a }]（ルビ記法 {{漢字|かな}} はそのまま渡してよい。出力時に除去する）
export function PageJsonLd({ path, title, description, breadcrumbName, faq }) {
  const url = `${SITE_URL}${path}`;
  const items = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      inLanguage: "ja",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: breadcrumbName, item: url },
      ],
    },
  ];
  if (faq?.length) {
    items.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: stripRuby(f.q),
        acceptedAnswer: { "@type": "Answer", text: stripRuby(f.a) },
      })),
    });
  }
  return (
    <>
      {items.map((item, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(item)) }} />
      ))}
    </>
  );
}
