// English versions of the detailed event articles (lib/eventDetails.js).
//
// Each translation is a flat array of English strings: one entry for every string in the
// Japanese article that contains Japanese text, in document order (the order the Japanese
// object's keys and array items are written). Everything else — block types, table shapes,
// map coordinates, image file names, colors, link targets, dates — is taken from the Japanese
// article, so the two cannot drift apart.
import { getEventDetail } from "@/lib/eventDetails";
import { englishPathFor } from "@/lib/en";
import neolithic from "./neolithic";
import xia from "./xia";
import shang from "./shang";
import westernzhou from "./westernzhou";
import chunqiu from "./chunqiu";
import zhanguo from "./zhanguo";
import qin from "./qin";
import westernhan from "./westernhan";
import xin from "./xin";
import easternhan from "./easternhan";
import sanguo from "./sanguo";
import westernjin from "./westernjin";
import sixteenkingdoms from "./sixteenkingdoms";
import nanbei from "./nanbei";
import sui from "./sui";
import tang from "./tang";

const EN_STRINGS = {
  ...neolithic,
  ...xia,
  ...shang,
  ...westernzhou,
  ...chunqiu,
  ...zhanguo,
  ...qin,
  ...westernhan,
  ...xin,
  ...easternhan,
  ...sanguo,
  ...westernjin,
  ...sixteenkingdoms,
  ...nanbei,
  ...sui,
  ...tang,
};

const CJK = /[　-ヿ㐀-鿿＀-￯]/;
// keys whose values are never shown as text
const SKIP_KEYS = new Set(["type", "href", "file", "color", "publishedAt", "updatedAt"]);

// Calls fn(string, key) for every translatable string in document order and returns a copy with the results.
export function mapTranslatable(node, fn, key = null) {
  if (typeof node === "string") return CJK.test(node) && !SKIP_KEYS.has(key) ? fn(node, key) : node;
  if (Array.isArray(node)) return node.map((v) => mapTranslatable(v, fn, key));
  if (node && typeof node === "object") {
    const out = {};
    for (const [k, v] of Object.entries(node)) out[k] = mapTranslatable(v, fn, k);
    return out;
  }
  return node;
}

// Related links: event and era pages exist in English; links to Japanese-only pages are dropped.
function localizeRelated(detail) {
  const sections = detail.sections
    .map((s) => ({
      ...s,
      blocks: s.blocks
        .map((b) => {
          if (b.type !== "related") return b;
          const items = b.items
            .map((item) => {
              const [path, hash] = item.href.split("#");
              const en = englishPathFor(path);
              return en ? { ...item, href: hash ? `${en}#${hash}` : en } : null;
            })
            .filter(Boolean);
          return items.length ? { ...b, items } : null;
        })
        .filter(Boolean),
    }))
    .filter((s) => s.blocks.length > 0);
  return { ...detail, sections };
}

function build(slug) {
  const ja = getEventDetail(slug);
  const en = EN_STRINGS[slug];
  if (!ja || !en) return null;
  let i = 0;
  const merged = mapTranslatable(ja, () => en[i++]);
  if (i !== en.length) {
    throw new Error(`English article for ${slug} has ${en.length} strings, but the Japanese article has ${i}`);
  }
  return localizeRelated(merged);
}

// Build every translation once at import time so a misaligned file fails the build.
const EN_DETAILS = Object.fromEntries(Object.keys(EN_STRINGS).map((slug) => [slug, build(slug)]));

export function getEventDetailEn(slug) {
  return EN_DETAILS[slug] || null;
}
