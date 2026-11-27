// トップページ（/）。中国史の各コンテンツへの入口と、全24時代の軽量な年表だけを置く。
// 出来事の要約・時代の解説本文は各時代ページ（/eras/<id>）・出来事ページ（/events/<slug>）に任せる。
//
// サーバーコンポーネントなので、年表データ（lib/data.js）はクライアントのJSバンドルに入らない。
// 24時代・全出来事へのリンクはすべて初期HTMLに出力する（JavaScriptで後から生成しない）。
import Link from "next/link";
import { ERAS, COLORS, ADSENSE_SLOT_TIMELINE, displayPeriod, displayEventYear, getEraFigures, personSlug, stripRuby } from "@/lib/data";
import { getEraOverview } from "@/lib/eraOverviews";
import { ARTICLE_CATEGORIES } from "@/lib/articles";
import { SealMark, AdSenseSlot } from "@/components/Shared";
import LanguageSwitch from "@/components/en/LanguageSwitch";
import HeroImage from "@/components/HeroImage";
import { RubyText } from "@/components/Ruby";
import { NewsList } from "@/components/NewsList";

const serif = "var(--font-serif), serif";
const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, textUnderlineOffset: 3 };

// ③ 目的別の入口。カード全体が記事一覧ページ（/articles）の該当カテゴリへのリンク。
//   7枚目（作品で楽しむ中国史）は3列表示の3段目中央に置く（.hp-purpose-last）
const PURPOSE_CARDS = ARTICLE_CATEGORIES;

// ④ よく読まれている記事。Search Console の過去90日（〜2026年11月）の実測から選定：
//   クリック数上位3件（日中対照年表・故事成語・後宮の位）／表示回数が多く順位改善の余地がある記事（宦官）／
//   主要人物への入口（始皇帝）／独自性の高い合戦地図（春秋・戦国の合戦マップ）
const POPULAR_ARTICLES = [
  { href: "/japan-china-timeline", title: "日本史・中国史 対照年表", desc: "中国の王朝と同じ頃の日本が何時代かがわかる早見表。" },
  { href: "/idioms", title: "中国史から生まれた故事成語", desc: "「{{臥薪嘗胆|がしんしょうたん}}」「{{四面楚歌|しめんそか}}」などの由来になった出来事。" },
  { href: "/harem-ranks", title: "後宮の位（妃の階級）一覧", desc: "{{皇后|こうごう}}・{{皇貴妃|こうきひ}}・{{貴妃|きひ}}の違いを清・唐・漢で比較。" },
  { href: "/eunuchs", title: "{{宦官|かんがん}}とは", desc: "中国史で権力を握った有名な{{宦官|かんがん}}と、力を持った理由。" },
  { href: "/qinshihuang", title: "{{始皇帝|しこうてい}}とは", desc: "生涯・中国統一・{{兵馬俑|へいばよう}}まで、最初の{{皇帝|こうてい}}を解説。" },
  { href: "/chunqiu-zhanguo-battles", title: "春秋・戦国時代 合戦マップ", desc: "{{秦|しん}}の統一までの約550年を主要な合戦と地図でたどる。" },
];

// 年表の各時代に「〜とはどんな時代？」と並べて出す特集記事へのリンク
const ERA_FEATURE_LINKS = {
  qin: [{ href: "/qin-fall", label: "{{秦|しん}}はなぜ15年で{{滅亡|めつぼう}}したのか？" }],
  sanguo: [{ href: "/sanguo-fall", label: "三国はなぜ{{滅|ほろ}}び、{{晋|しん}}が統一したのか？" }],
  tang: [{ href: "/tang-fall", label: "{{唐|とう}}はなぜ{{滅亡|めつぼう}}したのか？" }],
  ming: [{ href: "/ming-fall", label: "明はなぜ{{滅亡|めつぼう}}したのか？" }],
  qing: [{ href: "/qing-fall", label: "{{清|しん}}はなぜ{{滅亡|めつぼう}}したのか？" }],
};

// 時代ページの導入文（lead）の最初の1文を、年表の1行説明として使う
function eraOneLiner(era) {
  const lead = getEraOverview(era.id)?.lead;
  if (!lead) return null;
  const end = lead.indexOf("。");
  return end > 0 ? lead.slice(0, end + 1) : lead;
}

// 主要人物：個別ページ（bioあり）がある人物のうち、登場する出来事が多い順に最大3人
function eraKeyFigures(era) {
  return getEraFigures(era)
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => p.bio)
    .sort((a, b) => b.p.events.length - a.p.events.length || a.i - b.i)
    .slice(0, 3)
    .map(({ p }) => ({ href: `/people/${era.id}/${personSlug(p.name)}`, name: p.name.replace(/（.*?）$/, "") }));
}

// ⑧ 記事一覧：記事一覧ページと同じ7カテゴリで、全記事のタイトルだけを並べる（説明文なし）
function ArticleIndex() {
  return (
    <section aria-labelledby="all-articles" className="max-w-4xl mx-auto px-5 pt-12 pb-12">
      <SectionHeading id="all-articles">記事一覧</SectionHeading>
      <div className="hp-index">
        {ARTICLE_CATEGORIES.map((c) => (
          <div key={c.id}>
            <h3 className="hp-index-title">
              <Link href={`/articles#${c.id}`}>{c.title}</Link>
            </h3>
            <ul>
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <RubyText text={l.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/articles" className="hp-all-articles">
          カテゴリの説明つきで記事一覧を見る<span aria-hidden> →</span>
        </Link>
      </div>
    </section>
  );
}

function SectionHeading({ id, children, sub }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <h2 id={id} style={{ fontFamily: serif, fontSize: 21, fontWeight: 900, color: COLORS.ink, letterSpacing: "0.04em", scrollMarginTop: 16 }}>
        {children}
      </h2>
      {sub && <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 4 }}>{sub}</p>}
    </div>
  );
}

function EraChips() {
  return (
    <nav aria-label="時代から探す" className="mt-6 text-left">
      <div className="flex items-baseline justify-between gap-3" style={{ marginBottom: 8 }}>
        <span style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: COLORS.ink }}>全{ERAS.length}時代から探す</span>
        <a href="#timeline" style={{ ...linkStyle, fontSize: 12 }}>年表で見る ↓</a>
      </div>
      {/* スマホは2段の横スクロール、PCは全24時代を格子で一覧（すべて初期HTMLのリンク） */}
      <ol className="era-chips">
        {ERAS.map((era, i) => (
          <li key={era.id}>
            <Link href={`/eras/${era.id}`} className="hp-chip">
              <span aria-hidden>{i + 1}</span>
              {stripRuby(era.name)}
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
      <SectionHeading id="purpose">目的から探す</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {PURPOSE_CARDS.map((card) => (
          <Link
            key={card.id}
            href={`/articles#${card.id}`}
            className={card.id === "works" ? "hp-purpose hp-purpose-last" : "hp-purpose"}
          >
            <span aria-hidden="true" className="seal-char hp-purpose-seal" data-char={card.seal} />
            <div className="min-w-0 flex flex-col">
              <h3 className="hp-purpose-title">{card.title}</h3>
              <p className="hp-purpose-desc">
                <RubyText text={card.desc} />
              </p>
              <p className="hp-purpose-more">
                記事を見る（{card.links.length}件）<span aria-hidden> →</span>
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
      <SectionHeading id="popular">よく読まれている記事</SectionHeading>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {POPULAR_ARTICLES.map((a) => (
          <li key={a.href}>
            <Link href={a.href} className="block h-full hover:shadow-md transition-shadow" style={{ ...cardStyle, padding: "12px 14px", borderLeft: `3px solid ${COLORS.vermilion}` }}>
              <span className="block" style={{ fontFamily: serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, lineHeight: 1.5 }}>
                <RubyText text={a.title} />
              </span>
              <span className="block" style={{ fontSize: 12, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 4 }}>
                <RubyText text={a.desc} />
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
  const eraName = stripRuby(era.name);
  return (
    <section id={`era-${era.id}`} aria-labelledby={`era-h-${era.id}`} className="hp-card hp-era">
      <div className="flex items-start gap-3">
        <SealMark char={era.seal} />
        <div className="min-w-0">
          <h3 id={`era-h-${era.id}`} className="hp-era-name">
            <Link href={`/eras/${era.id}`}>
              <RubyText text={era.name} />
            </Link>
          </h3>
          <p className="hp-era-period">
            <RubyText text={displayPeriod(era.period)} />
          </p>
        </div>
      </div>
      {oneLiner && (
        <p className="hp-era-lead">
          <RubyText text={oneLiner} />
        </p>
      )}
      {figures.length > 0 && (
        <p className="hp-era-people">
          <b>主要人物</b>
          {figures.map((f, i) => (
            <span key={f.href}>
              {i > 0 && "・"}
              <Link href={f.href} className="hp-link">
                <RubyText text={f.name} />
              </Link>
            </span>
          ))}
        </p>
      )}
      <ol className="hp-events">
        {era.events.map((ev) => (
          <li key={ev.slug}>
            <span>{displayEventYear(ev.year)}</span>
            <Link href={`/events/${ev.slug}`}>
              <RubyText text={ev.title} />
            </Link>
          </li>
        ))}
      </ol>
      <div className="hp-era-more">
        <Link href={`/eras/${era.id}`} className="hp-link">
          {eraName}の時代を詳しく読む →
        </Link>
        {(ERA_FEATURE_LINKS[era.id] || []).map((item) => (
          <Link key={item.href} href={item.href} className="hp-link">
            <RubyText text={item.label} /> →
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function HomePage({ latestNews = [] }) {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      {/* ① ヒーロー ＋ ② 24時代クイックナビ */}
      <div className="relative max-w-4xl mx-auto px-5 pt-8 pb-2">
        <div className="absolute" style={{ top: 10, right: 16 }}>
          <LanguageSwitch lang="ja" style={{ fontSize: 13 }} />
        </div>
        <div className="text-center">
          <div style={{ fontFamily: serif, fontSize: 12, letterSpacing: "0.3em", color: COLORS.vermilion }}>CHINESE HISTORY TIMELINE</div>
          <h1 style={{ fontFamily: serif, fontWeight: 900, color: COLORS.ink, marginTop: 6, lineHeight: 1.35 }}>
            <span className="block" style={{ fontSize: 32 }}>中国史年表</span>
            <span className="sr-only">｜</span>
            <span className="block" style={{ fontSize: 17, fontWeight: 700, marginTop: 2 }}>五千年を時代・人物・出来事でたどる</span>
          </h1>
          <p className="max-w-xl mx-auto" style={{ fontSize: 13.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 10 }}>
            中国の歴史を、古代から現代まで時代・王朝・人物・出来事から分かりやすく紹介します。
          </p>
          <form action="/search" method="get" role="search" className="max-w-xl mx-auto flex" style={{ marginTop: 14 }}>
            <label htmlFor="home-search" className="sr-only">サイト内検索</label>
            <input
              id="home-search"
              type="search"
              name="q"
              placeholder="時代・人物・出来事を検索"
              className="flex-1 min-w-0 px-4 outline-none"
              style={{ height: 46, backgroundColor: "#fff", border: `1.5px solid ${COLORS.mist}`, borderRight: "none", fontSize: 15, color: COLORS.ink }}
            />
            <button
              type="submit"
              className="shrink-0"
              style={{ height: 46, padding: "0 18px", backgroundColor: COLORS.vermilion, color: "#fff", fontFamily: serif, fontSize: 14, fontWeight: 700 }}
            >
              検索
            </button>
          </form>
        </div>
        <EraChips />
        <div className="mt-6" style={{ border: `1.5px solid ${COLORS.gold}` }}>
          <HeroImage />
        </div>
      </div>

      {/* ③ 目的別の入口 */}
      <PurposeCards />

      {/* ④ よく読まれている記事 */}
      <PopularArticles />

      {/* ⑤ 中国史年表（全24時代）。各時代は1行説明・主要人物・全出来事の見出しだけ（本文は時代・出来事ページ） */}
      <section aria-labelledby="timeline" className="max-w-4xl mx-auto px-5 pt-12">
        <SectionHeading
          id="timeline"
          sub="新石器時代から中華人民共和国まで、各時代の主な人物と出来事を年代順にまとめました。出来事名を選ぶと背景や影響の解説、時代名を選ぶとその時代の詳しい解説を読めます。"
        >
          中国史年表（全{ERAS.length}時代）
        </SectionHeading>
        <p style={{ marginTop: -4, marginBottom: 14 }}>
          <Link href="/timeline" className="hp-all-articles" style={{ fontSize: 14, minHeight: 40, padding: "0 16px" }}>
            出来事の要約つきでスクロールして辿る<span aria-hidden> →</span>
          </Link>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
          {ERAS.map((era) => (
            <EraTimelineCard key={era.id} era={era} />
          ))}
        </div>
      </section>

      {/* ⑦ 考古学・歴史の最新ニュース（最新記事が60日以内のときだけ） */}
      {latestNews.length > 0 && (
        <section aria-labelledby="news" className="max-w-4xl mx-auto px-5 pt-12">
          <div className="flex items-baseline justify-between gap-3">
            <SectionHeading id="news">考古学・歴史の最新ニュース</SectionHeading>
            <Link href="/news" style={{ ...linkStyle, fontSize: 12.5, whiteSpace: "nowrap" }}>
              ニュース一覧 →
            </Link>
          </div>
          <NewsList items={latestNews} compact />
        </section>
      )}

      {/* ⑧ 記事一覧（タイトルだけ）。全特集記事へトップから直接リンクする */}
      <ArticleIndex />

      {ADSENSE_SLOT_TIMELINE && (
        <div className="max-w-2xl mx-auto px-5 pb-16">
          <div style={{ fontSize: 10.5, color: COLORS.inkSoft, marginBottom: 8 }}>広告</div>
          <AdSenseSlot slot={ADSENSE_SLOT_TIMELINE} />
        </div>
      )}
    </div>
  );
}
