import { SITE_NAME_EN } from "./index";

// English counterpart of buildOpenGraph (lib/constants.js). OG images come from
// the /og route with l=en so the English site name is drawn.
export function buildOgImageUrlEn({ title, subtitle, kicker, seal }) {
  const params = new URLSearchParams({ t: title, l: "en" });
  if (subtitle) params.set("s", subtitle);
  if (kicker) params.set("k", kicker);
  if (seal) params.set("m", seal);
  return `/og?${params.toString()}`;
}

export function buildOpenGraphEn({ title, description, path, type = "website", image = {} }) {
  const url = buildOgImageUrlEn({ title: image.title ?? title, ...image });
  return {
    type,
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    url: path,
    siteName: SITE_NAME_EN,
    title,
    description,
    images: [{ url, width: 1200, height: 630, alt: title }],
  };
}

export function buildTwitterEn({ title, description }) {
  return { card: "summary_large_image", title, description };
}

// Cut the summary at a sentence boundary for meta descriptions (about 155 characters).
export function leadSentencesEn(text, maxLength = 155) {
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
  let lead = "";
  for (const s of sentences) {
    if ((lead + s).length > maxLength) break;
    lead += s;
  }
  return (lead || `${text.slice(0, maxLength - 1)}…`).trim();
}
