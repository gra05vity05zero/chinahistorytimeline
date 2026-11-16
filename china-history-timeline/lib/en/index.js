// English edition data layer.
// lib/data.js stays the single source for years, slugs, categories and images;
// the files in lib/en/eras/ supply only the English text (name, description,
// event title/summary, heritage [name, description]) and are merged onto it here.
import { ERAS, stripRuby, SITE_URL } from "@/lib/data";
import ancient from "./eras/ancient";
import zhou from "./eras/zhou";
import qinhan from "./eras/qinhan";
import hanSanguo from "./eras/hanSanguo";
import jin from "./eras/jin";
import suitang from "./eras/suitang";
import wudaiSong from "./eras/wudaiSong";
import songYuan from "./eras/songYuan";
import mingQing from "./eras/mingQing";
import modern from "./eras/modern";

const EN_TEXT = { ...ancient, ...zhou, ...qinhan, ...hanSanguo, ...jin, ...suitang, ...wudaiSong, ...songYuan, ...mingQing, ...modern };

export { SITE_URL };
export const SITE_NAME_EN = "Chinese History Timeline";
export const SITE_DESCRIPTION_EN =
  "An illustrated timeline of Chinese history, from Neolithic cultures to the People’s Republic. Explore 24 eras and about 150 key events — dynasties, wars, culture and foreign relations — with the people, sites and treasures behind them.";

export const CATEGORY_LABEL_EN = {
  王朝: "Dynasty",
  戦争: "War & Conflict",
  文化: "Culture",
  対外: "Foreign Relations",
};

export const HERITAGE_LABEL_EN = {
  building: "Sites & Buildings",
  artifact: "Treasures & Artifacts",
  figure: "Key Figures",
};

// Image credits are written in Japanese in lib/data.js. Photo credits keep the
// photographer and licence; descriptive Japanese prefixes on public-domain
// images (source books, painters) are dropped.
export function translateCredit(credit) {
  if (!credit) return credit;
  const text = stripRuby(credit);
  const photo = text.match(/写真:\s*(.+)$/);
  const core = photo ? `Photo: ${photo[1]}` : text.slice(text.indexOf("Wikimedia Commons"));
  return core
    .replace(/パブリックドメイン/g, "public domain")
    .replace(/陝西歴史博物館/g, "Shaanxi History Museum")
    .replace(/金上京歴史博物館/g, "Jin Shangjing History Museum")
    .replace(/(\d{3,4})年/g, "$1")
    .replace(/, 中国/g, ", China")
    .replace(/（/g, " (")
    .replace(/）/g, ")")
    .replace(/\s+/g, " ")
    .trim();
}

function mergeEra(era) {
  const t = EN_TEXT[era.id];
  if (!t) throw new Error(`Missing English translation for era: ${era.id}`);
  return {
    id: era.id,
    seal: stripRuby(era.seal),
    period: era.period,
    name: t.name,
    description: t.description,
    events: era.events.map((ev) => {
      const e = t.events[ev.slug];
      if (!e) throw new Error(`Missing English translation for event: ${ev.slug}`);
      if ((e.heritage?.length || 0) !== (ev.heritage?.length || 0)) {
        throw new Error(`English heritage count differs from lib/data.js for event: ${ev.slug}`);
      }
      const heritage = (ev.heritage || []).map((h, i) => {
        const pair = e.heritage?.[i];
        if (!pair) throw new Error(`Missing English heritage #${i} for event: ${ev.slug}`);
        return {
          type: h.type,
          name: pair[0],
          description: pair[1],
          imageUrl: h.imageUrl,
          objectPosition: h.objectPosition,
          credit: translateCredit(h.credit),
        };
      });
      return { year: ev.year, slug: ev.slug, category: ev.category, title: e.title, summary: e.summary, heritage };
    }),
  };
}

export const ERAS_EN = ERAS.map(mergeEra);

const FLAT = ERAS_EN.flatMap((era) => era.events.map((event) => ({ event, era })));

export function findEraEn(id) {
  return ERAS_EN.find((e) => e.id === id) || null;
}

export function findEventEn(slug) {
  return FLAT.find((item) => item.event.slug === slug) || null;
}

export function getAdjacentEventsEn(slug) {
  const idx = FLAT.findIndex((item) => item.event.slug === slug);
  return { prev: idx > 0 ? FLAT[idx - 1] : null, next: idx >= 0 && idx < FLAT.length - 1 ? FLAT[idx + 1] : null };
}

// Key figures of an era (heritage type "figure"), de-duplicated by name, with the events they appear in.
export function getEraFiguresEn(era) {
  const map = new Map();
  era.events.forEach((ev) => {
    ev.heritage.forEach((h) => {
      if (h.type !== "figure") return;
      if (!map.has(h.name)) map.set(h.name, { ...h, events: [] });
      map.get(h.name).events.push({ slug: ev.slug, year: ev.year, title: ev.title });
    });
  });
  return Array.from(map.values());
}

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// "c. 2070 BC" stays as is; "AD 23" → "AD 23"; "4世紀 BC" → "4th century BC"; "12世紀" → "12th century";
// "630s" and "755-763" pass through ("755–763").
export function displayYearEn(year) {
  return String(year)
    .trim()
    .replace(/(\d+)世紀/, (_, n) => `${ordinal(Number(n))} century`)
    .replace(/^(\d+)-(\d+)$/, "$1–$2");
}

export function displayPeriodEn(period) {
  if (!period) return period;
  return String(period)
    .split(/\s+–\s+/)
    .map((part) => (part === "現在" ? "present" : displayYearEn(part)))
    .join(" – ");
}

// Japanese path ⇄ English path for pages that exist in both languages.
const PAIRED = [/^\/$/, /^\/eras$/, /^\/eras\/[^/]+$/, /^\/events\/[^/]+$/];

export function englishPathFor(jaPath) {
  return PAIRED.some((re) => re.test(jaPath)) ? (jaPath === "/" ? "/en" : `/en${jaPath}`) : null;
}

export function japanesePathFor(enPath) {
  const p = enPath.replace(/^\/en(?=\/|$)/, "") || "/";
  return PAIRED.some((re) => re.test(p)) ? p : null;
}

// alternates for generateMetadata: canonical + hreflang pair
export function bilingualAlternates(jaPath, lang) {
  const enPath = englishPathFor(jaPath);
  return {
    canonical: lang === "en" ? enPath : jaPath,
    languages: { ja: jaPath, en: enPath, "x-default": jaPath },
  };
}
