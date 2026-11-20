// English top page (/en). Same structure as the Japanese top page (components/HomePage.jsx): a hub of entry points
// plus a light timeline of all 24 eras. Event summaries and era essays live on the era and event pages,
// and the scrolling timeline with summaries is at /en/timeline.
//
// Server component: the era data stays out of the client bundle, and every era and event link is in the initial HTML.
import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { ERAS_EN, displayPeriodEn, displayYearEn, getEraFiguresEn } from "@/lib/en";
import { getEraOverviewEn } from "@/lib/en/overviews";
import { FEATURES_READY } from "@/lib/en/features";
import { formatNewsDateEn } from "@/lib/en/news";
import { EN_ARTICLE_CATEGORIES } from "@/lib/en/articles";
import { SealMark } from "@/components/Shared";
import LanguageSwitch from "@/components/en/LanguageSwitch";

const serif = "var(--font-serif), serif";
const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, textUnderlineOffset: 3 };

// Popular articles: English feature pages with the most Search Console impressions over the 90 days to November 2026
const POPULAR_SLUGS = ["kingdom", "qin-fall", "idioms", "saiyuki", "dramas", "china-capitals"];
const FEATURE_BY_SLUG = new Map(FEATURES_READY.map((f) => [f.slug, f]));
const POPULAR_ARTICLES = POPULAR_SLUGS.map((s) => FEATURE_BY_SLUG.get(s)).filter(Boolean);

// Feature articles shown next to "Explore the … era" in the timeline
const ERA_FEATURE_LINKS = {
  qin: FEATURE_BY_SLUG.has("qin-fall") ? [{ href: "/en/qin-fall", label: "Why did the Qin fall in only 15 years?" }] : [],
};

// First sentence of the era page's lead (falls back to the era description)
function eraOneLiner(era) {
  const text = getEraOverviewEn(era.id)?.lead || era.description;
  if (!text) return null;
  const m = text.match(/^(.+?[.!?])\s+(?=[A-Z“"])/);
  return m ? m[1] : text;
}

// Key figures: people with their own page, by number of events they appear in, at most 3
function eraKeyFigures(era) {
  return getEraFiguresEn(era)
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => p.href)
    .sort((a, b) => b.p.events.length - a.p.events.length || a.i - b.i)
    .slice(0, 3)
    .map(({ p }) => ({ href: p.href, name: p.name }));
}

function SectionHeading({ id, children, sub }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <h2 id={id} style={{ fontFamily: serif, fontSize: 21, fontWeight: 900, color: COLORS.ink, letterSpacing: "0.01em", scrollMarginTop: 16, lineHeight: 1.3 }}>
        {children}
      </h2>
      {sub && <p style={{ fontSize: 13, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 4 }}>{sub}</p>}
    </div>
  );
}

function EraChips() {
  return (
    <nav aria-label="Browse by era" className="mt-6 text-left">
      <div className="flex items-baseline justify-between gap-3" style={{ marginBottom: 8 }}>
        <span style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: COLORS.ink }}>Browse all {ERAS_EN.length} eras</span>
        <a href="#timeline" style={{ ...linkStyle, fontSize: 12 }}>See the timeline ↓</a>
      </div>
      <ol className="era-chips era-chips-wrap">
        {ERAS_EN.map((era, i) => (
          <li key={era.id}>
            <Link href={`/en/eras/${era.id}`} className="hp-chip" style={{ fontSize: 13 }}>
              <span aria-hidden>{i + 1}</span>
              {era.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function PurposeCards() {
  return (
    <section aria-labelledby="purpose" className="max-w-4xl mx-auto px-5 pt-10">
      <SectionHeading id="purpose">Find by Purpose</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {EN_ARTICLE_CATEGORIES.map((card) => (
          <Link key={card.id} href={`/en/topics#${card.id}`} className={card.id === "works" ? "hp-purpose hp-purpose-last" : "hp-purpose"}>
            <span aria-hidden="true" className="seal-char hp-purpose-seal" data-char={card.seal} />
            <div className="min-w-0 flex flex-col">
              <h3 className="hp-purpose-title">{card.title}</h3>
              <p className="hp-purpose-desc">{card.desc}</p>
              <p className="hp-purpose-more">
                See {card.links.length} articles<span aria-hidden> →</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function PopularArticles() {
  return (
    <section aria-labelledby="popular" className="max-w-4xl mx-auto px-5 pt-10">
      <SectionHeading id="popular">Popular Articles</SectionHeading>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {POPULAR_ARTICLES.map((a) => (
          <li key={a.slug}>
            <Link href={`/en/${a.slug}`} className="block h-full hover:shadow-md transition-shadow" style={{ ...cardStyle, padding: "12px 14px", borderLeft: `3px solid ${COLORS.vermilion}` }}>
              <span className="block" style={{ fontFamily: serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, lineHeight: 1.4 }}>
                {a.title}
              </span>
              <span className="block" style={{ fontSize: 12.5, lineHeight: 1.6, color: COLORS.inkSoft, marginTop: 4 }}>
                {a.blurb}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function EraTimelineCard({ era }) {
  const oneLiner = eraOneLiner(era);
  const figures = eraKeyFigures(era);
  return (
    <section id={`era-${era.id}`} aria-labelledby={`era-h-${era.id}`} className="hp-card hp-era">
      <div className="flex items-start gap-3">
        <SealMark char={era.seal} />
        <div className="min-w-0">
          <h3 id={`era-h-${era.id}`} className="hp-era-name">
            <Link href={`/en/eras/${era.id}`}>{era.name}</Link>
          </h3>
          <p className="hp-era-period">{displayPeriodEn(era.period)}</p>
        </div>
      </div>
      {oneLiner && <p className="hp-era-lead" style={{ fontSize: 13, lineHeight: 1.6 }}>{oneLiner}</p>}
      {figures.length > 0 && (
        <p className="hp-era-people" style={{ fontSize: 13, lineHeight: 1.6 }}>
          <b>Key figures:</b>
          {figures.map((f, i) => (
            <span key={f.href}>
              {i > 0 && ", "}
              <Link href={f.href} className="hp-link">
                {f.name}
              </Link>
            </span>
          ))}
        </p>
      )}
      <ol className="hp-events">
        {era.events.map((ev) => (
          <li key={ev.slug} style={{ lineHeight: 1.45 }}>
            <span>{displayYearEn(ev.year)}</span>
            <Link href={`/en/events/${ev.slug}`}>{ev.title}</Link>
          </li>
        ))}
      </ol>
      <div className="hp-era-more">
        <Link href={`/en/eras/${era.id}`} className="hp-link">
          Explore the {era.name} era →
        </Link>
        {(ERA_FEATURE_LINKS[era.id] || []).map((item) => (
          <Link key={item.href} href={item.href} className="hp-link">
            {item.label} →
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function EnHomePage({ latestNews = [] }) {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      {/* Hero + quick navigation to all 24 eras */}
      <div className="relative max-w-4xl mx-auto px-5 pt-8 pb-2">
        <div className="absolute" style={{ top: 10, right: 16 }}>
          <LanguageSwitch lang="en" style={{ fontSize: 13 }} />
        </div>
        <div className="text-center">
          <div style={{ fontFamily: serif, fontSize: 12, letterSpacing: "0.3em", color: COLORS.vermilion }}>5,000 YEARS OF CHINA</div>
          <h1 style={{ fontFamily: serif, fontWeight: 900, color: COLORS.ink, marginTop: 6, lineHeight: 1.25 }}>
            <span className="block" style={{ fontSize: 32 }}>Chinese History Timeline</span>
            <span className="sr-only">: </span>
            <span className="block" style={{ fontSize: 17, fontWeight: 700, marginTop: 4 }}>5,000 Years of Dynasties, People and Events</span>
          </h1>
          <p className="max-w-xl mx-auto" style={{ fontSize: 14, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 10 }}>
            Chinese history from the Neolithic to the present, explained clearly through its eras, dynasties, people and events.
          </p>
          <form action="/en/search" method="get" role="search" className="max-w-xl mx-auto flex" style={{ marginTop: 14 }}>
            <label htmlFor="home-search" className="sr-only">Search the site</label>
            <input
              id="home-search"
              type="search"
              name="q"
              placeholder="Search eras, people and events"
              className="flex-1 min-w-0 px-4 outline-none"
              style={{ height: 46, backgroundColor: "#fff", border: `1.5px solid ${COLORS.mist}`, borderRight: "none", fontSize: 15, color: COLORS.ink }}
            />
            <button
              type="submit"
              className="shrink-0"
              style={{ height: 46, padding: "0 18px", backgroundColor: COLORS.vermilion, color: "#fff", fontFamily: serif, fontSize: 14, fontWeight: 700 }}
            >
              Search
            </button>
          </form>
        </div>
        <EraChips />
        <div className="mt-6" style={{ border: `1.5px solid ${COLORS.gold}` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero.webp"
            width={1774}
            height={887}
            alt="Bronze vessels and terracotta warriors, mounted armies, the Great Wall, the Forbidden City, a pagoda, sailing ships on a great river and the skyline of modern Shanghai, painted as one continuous scroll with a dragon in the sky"
            fetchPriority="high"
            style={{ display: "block", width: "100%", height: "auto", aspectRatio: "5 / 2", objectFit: "cover", objectPosition: "50% 35%" }}
          />
        </div>
      </div>

      <PurposeCards />

      <PopularArticles />

      {/* Timeline of all 24 eras: one line, key figures and every event title per era (details on era and event pages) */}
      <section aria-labelledby="timeline" className="max-w-4xl mx-auto px-5 pt-12">
        <SectionHeading
          id="timeline"
          sub="From the Neolithic to the People’s Republic, the key people and events of each era in chronological order. Pick an event to read its background and significance, or an era for the full story of that period."
        >
          Timeline of Chinese History ({ERAS_EN.length} Eras)
        </SectionHeading>
        <p style={{ marginTop: -4, marginBottom: 14 }}>
          <Link href="/en/timeline" className="hp-all-articles" style={{ fontSize: 14, minHeight: 40, padding: "0 16px" }}>
            Scroll through every event with summaries<span aria-hidden> →</span>
          </Link>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
          {ERAS_EN.map((era) => (
            <EraTimelineCard key={era.id} era={era} />
          ))}
        </div>
      </section>

      {/* Latest archaeology and history news (only while the newest item is within 60 days) */}
      {latestNews.length > 0 && (
        <section aria-labelledby="news" className="max-w-4xl mx-auto px-5 pt-12">
          <div className="flex items-baseline justify-between gap-3">
            <SectionHeading id="news">Latest Archaeology and History News</SectionHeading>
            <Link href="/en/news" style={{ ...linkStyle, fontSize: 12.5, whiteSpace: "nowrap" }}>
              All news →
            </Link>
          </div>
          <ul className="flex flex-col gap-2.5">
            {latestNews.map((item) => (
              <li key={item.id} style={{ ...cardStyle, padding: "12px 14px" }}>
                <div style={{ fontSize: 11.5, color: COLORS.gold, fontFamily: serif }}>
                  <time dateTime={item.date}>{formatNewsDateEn(item.date)}</time>
                </div>
                <Link href={`/en/news#${item.id}`} className="block hover:underline" style={{ fontFamily: serif, fontSize: 14.5, fontWeight: 700, lineHeight: 1.5, color: COLORS.ink, marginTop: 2 }}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Every feature article is on the article list */}
      <div className="max-w-4xl mx-auto px-5 pt-12 pb-12 text-center">
        <Link href="/en/topics" className="hp-all-articles">
          See all articles<span aria-hidden> →</span>
        </Link>
      </div>
    </div>
  );
}
