import Link from "next/link";
import { notFound } from "next/navigation";
import { ERAS, COLORS, SITE_URL, SITE_NAME, stripRuby, buildOpenGraph, buildTwitter, buildAmazonUrl, findEventBySlug } from "@/lib/data";
import {
  DRAMAS,
  getDramaBySlug,
  getSameEraDramas,
  toDramaCard,
  formatPeriod,
  realPersonHref,
  dramaDescription,
} from "@/lib/dramas";
import { MiscLinksSection, SealMark } from "@/components/Shared";
import { SectionHeading, yearNumber, displayEventYear } from "@/components/EraOverview";
import { StarRating, CharacterTypeBadge, DramaCard } from "@/components/DramaBlocks";
import { RubyText } from "@/components/Ruby";

const serif = { fontFamily: "var(--font-serif), serif" };
const panel = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const bodyText = { fontSize: 13.5, lineHeight: 1.95, color: COLORS.inkSoft };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

export function generateStaticParams() {
  return DRAMAS.map((d) => ({ slug: d.slug }));
}

function headline(drama) {
  return `『${stripRuby(drama.titleJa)}』は史実？実在モデルと史実との違いを解説`;
}

export function generateMetadata({ params }) {
  const drama = getDramaBySlug(params.slug);
  if (!drama) return {};
  const short = stripRuby(drama.titleShort);
  const title = `『${short}』は史実？実在モデルと違いを解説`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  const description = dramaDescription(drama);
  const path = `/dramas/${drama.slug}`;
  const era = ERAS.find((e) => e.id === drama.eraIds[0]);
  const image = { title: `『${short}』は史実？`, subtitle: "実在モデルと史実との違い", kicker: `${stripRuby(era.name)} ・ ${formatPeriod(drama.period)}`, seal: era.seal };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: buildOpenGraph({ title: fullTitle, description, path, type: "article", image }),
    twitter: buildTwitter({ title: fullTitle, description }),
  };
}

// "2026-10-28" → "2026年10月時点"
function checkedLabel(date) {
  const [y, m] = date.split("-");
  return `${y}年${Number(m)}月時点`;
}

function Streaming({ streaming, className }) {
  if (streaming.length === 0) return null;
  return (
    <section className={className} style={{ ...panel, padding: "12px 16px" }}>
      <div style={{ ...serif, fontSize: 13, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>このドラマを見る</div>
      <ul className="flex flex-wrap gap-2">
        {streaming.map((s) => (
          <li key={s.service}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center"
              style={{ ...serif, fontSize: 13, fontWeight: 700, minHeight: 40, padding: "0 16px", color: "#fff", backgroundColor: COLORS.vermilion }}
            >
              {s.service}で見る
            </a>
          </li>
        ))}
      </ul>
      <p style={{ fontSize: 10.5, color: COLORS.inkSoft, marginTop: 6 }}>
        ※ 配信状況は{checkedLabel(streaming[0].checkedAt)}のものです。最新の情報は各サービスでご確認ください。
      </p>
    </section>
  );
}

function CharacterModel({ c }) {
  const href = realPersonHref(c.realPersonId);
  if (!c.realName) return <span style={{ color: COLORS.mist }}>—</span>;
  return href ? (
    <Link href={href} style={linkStyle}>
      <RubyText text={c.realName} />
    </Link>
  ) : (
    <RubyText text={c.realName} />
  );
}

// 出来事（lib/data.js）とドラマ独自の補足項目を年順に並べる
function buildTimeline(drama) {
  const events = drama.relatedEventIds.map((id) => {
    const { event } = findEventBySlug(id);
    return { key: id, sortYear: yearNumber(event.year), label: displayEventYear(event.year), text: event.title, href: `/events/${id}` };
  });
  const extras = drama.timeline.map((t, i) => ({ key: `t${i}`, sortYear: t.year, label: t.year < 0 ? `前${-t.year}` : `${t.year}`, text: t.text }));
  return [...events, ...extras].sort((a, b) => a.sortYear - b.sortYear);
}

export default function DramaPage({ params }) {
  const drama = getDramaBySlug(params.slug);
  if (!drama) notFound();
  const eras = drama.eraIds.map((id) => ERAS.find((e) => e.id === id));
  const lead = drama.characters[0];
  const sameEra = getSameEraDramas(drama).map(toDramaCard);
  const timeline = buildTimeline(drama);
  const path = `/dramas/${drama.slug}`;
  const h1 = headline(drama);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    description: dramaDescription(drama),
    datePublished: drama.publishedAt,
    dateModified: drama.updatedAt,
    about: { "@type": "TVSeries", name: stripRuby(drama.titleJa), alternateName: [stripRuby(drama.titleOriginal), ...drama.aliases] },
    articleSection: "中国歴史ドラマ",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "中国歴史ドラマ", item: `${SITE_URL}/dramas` },
      { "@type": "ListItem", position: 3, name: `『${stripRuby(drama.titleShort)}』`, item: `${SITE_URL}${path}` },
    ],
  };

  const facts = [
    { label: "原題", value: <RubyText text={drama.titleOriginal} /> },
    { label: "放送年", value: `${drama.year}年（中国）` },
    { label: "話数", value: `全${drama.episodes}話` },
    { label: "描かれる期間", value: `${formatPeriod(drama.period)}頃` },
    ...(drama.streaming.length > 0
      ? [{ label: "配信状況", value: `${drama.streaming.map((s) => s.service).join("・")}（${checkedLabel(drama.streaming[0].checkedAt)}）` }]
      : []),
  ];

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="max-w-2xl mx-auto px-6 py-8">
        <nav aria-label="パンくずリスト" style={{ fontSize: 12, color: COLORS.inkSoft }}>
          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
            <li>
              <Link href="/" style={linkStyle}>トップ</Link>
            </li>
            <li aria-hidden style={{ color: COLORS.mist }}>›</li>
            <li>
              <Link href="/dramas" style={linkStyle}>中国歴史ドラマ</Link>
            </li>
            <li aria-hidden style={{ color: COLORS.mist }}>›</li>
            <li aria-current="page">
              『<RubyText text={drama.titleShort} />』
            </li>
          </ol>
        </nav>

        <h1 className="mt-5" style={{ ...serif, fontSize: 22, fontWeight: 900, color: COLORS.ink, lineHeight: 1.6 }}>
          『<RubyText text={drama.titleJa} />』は史実？実在モデルと史実との違いを解説
        </h1>

        {/* 結論ボックス */}
        <section className="mt-6" style={{ backgroundColor: "#fff", border: `1.5px solid ${COLORS.vermilion}`, padding: "14px 16px" }}>
          <div style={{ ...serif, fontSize: 12, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 8 }}>結論</div>
          <dl className="grid gap-y-1.5" style={{ gridTemplateColumns: "auto 1fr", columnGap: 12, fontSize: 13 }}>
            <dt style={{ color: COLORS.inkSoft }}>時代</dt>
            <dd style={{ color: COLORS.ink }}>
              {eras.map((era, i) => (
                <span key={era.id}>
                  {i > 0 && "・"}
                  <RubyText text={era.name} />
                </span>
              ))}
              （{formatPeriod(drama.period)}頃）
            </dd>
            {lead && (
              <>
                <dt style={{ color: COLORS.inkSoft }}>主人公のモデル</dt>
                <dd style={{ color: COLORS.ink }}>
                  {lead.type === "fictional" ? "架空の人物" : <CharacterModel c={lead} />}
                </dd>
              </>
            )}
            <dt style={{ color: COLORS.inkSoft }}>史実度</dt>
            <dd>
              <StarRating score={drama.historicity.score} size={15} />
              <span style={{ fontSize: 12, color: COLORS.inkSoft, marginLeft: 6 }}>{drama.historicity.score} / 5</span>
            </dd>
          </dl>
          <p style={{ ...bodyText, color: COLORS.ink, marginTop: 10 }}>
            <RubyText text={drama.summary} />
          </p>
          <div style={{ fontSize: 11.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 8, paddingTop: 8, borderTop: `1px dashed ${COLORS.mist}` }}>
            <div style={{ fontWeight: 700 }}>史実度の内訳</div>
            {/* basis は「／」区切りで4基準を書く */}
            <ul>
              {drama.historicity.basis.split("／").map((b, i) => (
                <li key={i}>・<RubyText text={b} /></li>
              ))}
            </ul>
          </div>
        </section>

        <Streaming streaming={drama.streaming} className="mt-6" />

        <section className="mt-10">
          <SectionHeading id="info" kicker="DATA">作品の基本情報</SectionHeading>
          <dl style={panel}>
            {facts.map((f, i) => (
              <div key={f.label} className="flex gap-3 px-4 py-2.5" style={{ borderTop: i > 0 ? "1px solid #DCD3B8" : "none", fontSize: 13 }}>
                <dt className="shrink-0" style={{ width: 96, color: COLORS.inkSoft }}>{f.label}</dt>
                <dd style={{ color: COLORS.ink }}>{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-10">
          <SectionHeading id="background" kicker="BACKGROUND">時代背景</SectionHeading>
          <p style={bodyText}>
            <RubyText text={drama.background} />
          </p>
          <div className="grid gap-2 mt-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
            {eras.map((era) => (
              <Link key={era.id} href={`/eras/${era.id}`} className="flex items-center gap-3 px-3 py-2.5 hover:opacity-90" style={panel}>
                <SealMark char={era.seal} />
                <div className="min-w-0">
                  <div style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={era.name} />とはどんな時代？
                  </div>
                  <div style={{ fontSize: 11, color: COLORS.gold, ...serif }}>
                    <RubyText text={era.period} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <SectionHeading id="characters" kicker="CHARACTERS">登場人物と実在モデルの対照表</SectionHeading>
          {/* PC幅は表、スマホ幅はカードで表示する */}
          <div className="hidden md:block" style={{ marginLeft: -40, marginRight: -40 }}>
            <table className="w-full" style={{ fontSize: 12.5, lineHeight: 1.75, borderCollapse: "collapse", backgroundColor: "#FBF8F0" }}>
              <thead>
                <tr style={{ backgroundColor: COLORS.paperDeep, color: COLORS.ink, ...serif }}>
                  {["ドラマでの役", "実在モデル", "区分", "史実での人物像", "ドラマとの違い"].map((h) => (
                    <th key={h} scope="col" className="text-left px-3 py-2" style={{ border: "1px solid #DCD3B8", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {drama.characters.map((c) => (
                  <tr key={stripRuby(c.role)} className="align-top" style={{ color: COLORS.inkSoft }}>
                    <th scope="row" className="text-left px-3 py-2" style={{ border: "1px solid #DCD3B8", color: COLORS.ink, fontWeight: 700, width: 130 }}>
                      <RubyText text={c.role} />
                    </th>
                    <td className="px-3 py-2" style={{ border: "1px solid #DCD3B8", width: 130 }}><CharacterModel c={c} /></td>
                    <td className="px-3 py-2" style={{ border: "1px solid #DCD3B8" }}><CharacterTypeBadge type={c.type} /></td>
                    <td className="px-3 py-2" style={{ border: "1px solid #DCD3B8" }}><RubyText text={c.historicalNote} /></td>
                    <td className="px-3 py-2" style={{ border: "1px solid #DCD3B8" }}><RubyText text={c.difference} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="md:hidden grid gap-3">
            {drama.characters.map((c) => (
              <li key={stripRuby(c.role)} className="px-4 py-3" style={panel}>
                <div className="flex items-center gap-2 flex-wrap">
                  <span style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink }}><RubyText text={c.role} /></span>
                  <CharacterTypeBadge type={c.type} />
                </div>
                <div style={{ fontSize: 12.5, color: COLORS.inkSoft, marginTop: 4 }}>
                  実在モデル：<CharacterModel c={c} />
                </div>
                <div style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 8 }}>
                  <div style={{ fontWeight: 700, color: COLORS.ink }}>史実での人物像</div>
                  <RubyText text={c.historicalNote} />
                </div>
                <div style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 6, padding: "6px 8px", backgroundColor: "#F3ECD9" }}>
                  <div style={{ fontWeight: 700, color: COLORS.ink }}>ドラマとの違い</div>
                  <RubyText text={c.difference} />
                </div>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 11, color: COLORS.inkSoft, marginTop: 8 }}>
            区分：実在＝史料に記録のある人物／合成＝複数の人物をもとにした人物／架空＝ドラマオリジナルの人物
          </p>
        </section>

        <section className="mt-10">
          <SectionHeading id="divergences" kicker="FACT CHECK">史実と違うポイント</SectionHeading>
          <div className="grid gap-5">
            {drama.divergences.map((d, i) => (
              <div key={i}>
                <h3 className="flex items-baseline gap-2" style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink }}>
                  <span style={{ color: COLORS.vermilion, fontSize: 13 }}>{i + 1}.</span>
                  <span><RubyText text={d.title} /></span>
                </h3>
                <p style={{ ...bodyText, marginTop: 4 }}>
                  <RubyText text={d.body} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <SectionHeading id="aftermath" kicker="AFTERMATH">史実の「その後」</SectionHeading>
          <details style={panel}>
            <summary className="cursor-pointer px-4 py-3" style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.vermilion }}>
              【ネタバレあり】史実ではその後どうなった？（タップで開く）
            </summary>
            <p className="px-4 pb-4" style={bodyText}>
              <RubyText text={drama.aftermath} />
            </p>
          </details>
        </section>

        {timeline.length > 0 && (
          <section className="mt-10">
            <SectionHeading id="timeline" kicker="TIMELINE">ミニ年表</SectionHeading>
            <ol style={{ borderLeft: `2px solid ${COLORS.mist}`, marginLeft: 6 }}>
              {timeline.map((t) => (
                <li key={t.key} className="relative pl-5 pb-4" style={{ fontSize: 13, lineHeight: 1.75 }}>
                  <span
                    aria-hidden
                    className="absolute"
                    style={{ left: -6, top: 6, width: 10, height: 10, borderRadius: 999, backgroundColor: t.href ? COLORS.vermilion : COLORS.paper, border: `2px solid ${COLORS.vermilion}` }}
                  />
                  <span style={{ ...serif, fontWeight: 700, color: COLORS.gold, marginRight: 8 }}>{t.label}年</span>
                  {t.href ? (
                    <Link href={t.href} style={{ ...linkStyle, fontWeight: 700 }}>
                      <RubyText text={t.text} />
                    </Link>
                  ) : (
                    <span style={{ color: COLORS.inkSoft }}>
                      <RubyText text={t.text} />
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <p style={{ fontSize: 11, color: COLORS.inkSoft }}>● 印の出来事は、年表の解説ページにリンクしています。</p>
          </section>
        )}

        {sameEra.length > 0 && (
          <section className="mt-10">
            <SectionHeading id="same-era" kicker="SAME ERA">同じ時代のドラマ</SectionHeading>
            <div className="grid gap-2">
              {sameEra.map((d) => (
                <DramaCard key={d.slug} drama={d} />
              ))}
            </div>
          </section>
        )}

        {drama.books.length > 0 && (
          <section className="mt-10">
            <SectionHeading id="books" kicker="BOOKS">関連書籍</SectionHeading>
            <div style={{ fontSize: 10.5, color: COLORS.inkSoft, marginBottom: 10 }}>
              ※ 一部のリンクはAmazonアソシエイトによるアフィリエイト広告を含みます
            </div>
            <ul className="grid gap-2">
              {drama.books.map((b) => (
                <li key={b.asin} className="px-4 py-3" style={{ border: `1px solid ${COLORS.mist}`, backgroundColor: "#fff", fontSize: 12.5 }}>
                  <a href={buildAmazonUrl(b.asin)} target="_blank" rel="noopener noreferrer sponsored" style={{ ...linkStyle, color: COLORS.ink }}>
                    <RubyText text={b.note} />
                  </a>
                  <span className="ml-1 align-middle" style={{ fontSize: 9, color: "#fff", backgroundColor: COLORS.vermilionSoft, padding: "1px 4px", letterSpacing: "0.05em" }}>
                    PR
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <Streaming streaming={drama.streaming} className="mt-10" />

        <div className="mt-10 flex items-center justify-between flex-wrap gap-2" style={{ fontSize: 13 }}>
          <Link href="/dramas" style={{ color: COLORS.vermilion }}>
            ← 中国歴史ドラマ一覧へ
          </Link>
          <span style={{ fontSize: 11, color: COLORS.inkSoft }}>最終更新：{drama.updatedAt.replaceAll("-", "/")}</span>
        </div>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
