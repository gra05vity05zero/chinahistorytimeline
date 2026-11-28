import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { FEATURES_READY } from "@/lib/en/features";

// English counterpart of MiscLinksSection (components/Shared.jsx): "Read by theme" links grouped by category.
// Shared by the English top page, /en/topics and the end of English articles.
const serif = { fontFamily: "var(--font-serif), serif" };

const CATEGORIES = [
  {
    title: "Learn & Remember",
    links: [
      ["mnemonics", "Remembering the dynasties"],
      ["year-mnemonics", "Key dates"],
      ["idioms", "Idioms from history"],
      ["funny-episodes", "Funny episodes"],
      ["quiz", "Chinese history quiz"],
      ["glossary", "Glossary"],
      ["japan-china-timeline", "Japan–China timeline"],
      ["printable-timeline", "Printable timeline"],
      { href: "/en/eras", label: "All dynasties and eras" },
      ["history-books", "The great histories"],
    ],
  },
  {
    title: "People & Dynasties",
    links: [
      ["qinshihuang", "Qin Shi Huang"],
      ["qin-fall", "Why the Qin fell"],
      ["sanguo-fall", "Why the Three Kingdoms fell"],
      ["tang-fall", "Why the Tang fell"],
      ["ming-fall", "Why the Ming fell"],
      ["qing-fall", "Why the Qing fell"],
      ["terracotta-army", "The Terracotta Army"],
      ["emperors", "Emperors of China"],
      ["china-capitals", "Capitals through history"],
      ["dynasty-territory-map", "Territory map"],
      ["sanguo-comparison", "Wei, Wu and Shu compared"],
      ["harem-ranks", "Harem ranks"],
      ["keju", "Imperial examinations"],
      ["eunuchs", "Eunuchs"],
      ["women-rulers", "Women who ruled"],
      ["tyrants", "Tyrants and incompetent rulers"],
    ],
  },
  {
    title: "Battles",
    links: [
      ["chunqiu-zhanguo-battles", "Spring & Autumn / Warring States"],
      ["chuhan-battles", "Chu–Han Contention"],
      ["sanguo-battles", "Three Kingdoms"],
      ["suitang-battles", "Sui, Tang & Five Dynasties"],
      ["song-yuan-battles", "Song, Jin & Yuan"],
    ],
  },
  {
    title: "Places & Heritage",
    links: [
      ["world-heritage", "World Heritage Sites"],
      ["great-wall", "The Great Wall"],
      ["silk-road", "The Silk Road"],
      ["china-castles", "Walled cities and fortresses"],
      ["ancient-towns", "Ancient towns"],
      ["ancient-capitals", "Ancient capitals today"],
    ],
  },
  {
    title: "Culture & Literature",
    links: [
      ["hundred-schools", "Hundred Schools of Thought"],
      ["four-inventions", "Four Great Inventions"],
      ["eto", "The Chinese zodiac"],
      ["shunsetsu", "Chinese New Year"],
      ["chinese-food", "The history of Chinese food"],
      ["four-great-novels", "Four Great Novels"],
      ["four-beauties", "Four Beauties"],
      ["yangjiajiang", "Generals of the Yang Family"],
      ["suikoden", "Water Margin"],
      ["saiyuki", "Journey to the West"],
    ],
  },
  {
    title: "History in Fiction & Games",
    links: [
      ["dramas", "Historical dramas"],
      ["history-movies", "Movies about Chinese history"],
      ["kingdom", "Kingdom (manga)"],
      ["kusuriya", "The Apothecary Diaries"],
      ["koei-sangokushi", "Romance of the Three Kingdoms games"],
      ["musou", "Dynasty Warriors"],
      ["wuxia-games", "Wuxia and myth games"],
      ["novelists", "Japanese novelists"],
    ],
  },
];

const READY = new Map(FEATURES_READY.map((f) => [f.slug, f]));

// Resolve to { href, label, title, seal, blurb }, dropping features whose English page isn't written yet
export const EN_THEME_SECTIONS = CATEGORIES.map((c) => ({
  title: c.title,
  links: c.links
    .map((l) => {
      if (!Array.isArray(l)) return l;
      const f = READY.get(l[0]);
      return f && { href: `/en/${f.slug}`, label: l[1], title: f.title, seal: f.seal, blurb: f.blurb };
    })
    .filter(Boolean),
})).filter((c) => c.links.length > 0);

const linkColor = { color: COLORS.vermilion };

export function EnThemeLinks({ variant = "compact", heading = "Read by Theme" }) {
  const head = heading && (
    <h2 className="text-center" style={{ ...serif, fontSize: 17, fontWeight: 900, letterSpacing: "0.04em", color: COLORS.ink, marginBottom: 14 }}>
      {heading}
    </h2>
  );

  if (variant === "full") {
    return (
      <section className="max-w-3xl mx-auto text-left">
        {head}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {EN_THEME_SECTIONS.map((s) => (
            <div key={s.title} className="px-3 pt-2.5 pb-1.5" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
              <h3 style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.ink, paddingBottom: 6, marginBottom: 2, borderBottom: `1px solid ${COLORS.mist}` }}>
                {s.title}
              </h3>
              <ul>
                {s.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="flex items-center gap-1.5 hover:underline" style={{ minHeight: 34, fontSize: 13.5, ...linkColor }}>
                      <span aria-hidden style={{ color: COLORS.mist }}>›</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-right" style={{ marginTop: 12, fontSize: 13 }}>
          <Link href="/en/topics" className="hover:underline" style={linkColor}>
            See all articles →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-2xl mx-auto text-left">
      {head}
      <div className="flex flex-col gap-3">
        {EN_THEME_SECTIONS.map((s) => (
          <div key={s.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <h3 className="shrink-0" style={{ width: 150, ...serif, fontSize: 13, fontWeight: 700, color: COLORS.ink }}>
              {s.title}
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5" style={{ fontSize: 13.5 }}>
              {s.links.map((l) => (
                <Link key={l.href} href={l.href} className="hover:underline" style={linkColor}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-right" style={{ marginTop: 12, fontSize: 13 }}>
        <Link href="/en/topics" className="hover:underline" style={linkColor}>
          See all articles →
        </Link>
      </div>
    </section>
  );
}
