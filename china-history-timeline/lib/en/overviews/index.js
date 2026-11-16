// English era overviews (the "what was this era like?" guide on /en/eras/[eraId]).
// Each file in this folder holds only the English text, in the same order as lib/eraOverviews/<id>.js;
// years, phase boundaries and theme ids are taken from the Japanese file so they stay single-sourced.
//
// File format:
//   title, metaDescription, lead
//   facts:      [[label, value], ...]
//   keyPoints:  [text, text, text]
//   milestones: [text, ...]                   (years from the Japanese milestones, same order)
//   phases:     [[name, headline, text], ...] (start/end from the Japanese phases)
//   themes:     [{ title, paragraphs }]        (ids from the Japanese themes)
//   japan:      { title?, intro, items: [text, ...] }   when the Japanese file has japan
//   fallTitle?, fallToc?, fall: [[title, text], ...]     when the Japanese file has fall
//   faq:        [[q, a], ...]
import { getEraOverview } from "@/lib/eraOverviews";
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
import wudai from "./wudai";
import northernsong from "./northernsong";
import southernsong from "./southernsong";
import yuan from "./yuan";
import ming from "./ming";
import qing from "./qing";
import roc from "./roc";
import prc from "./prc";

const EN_OVERVIEWS = {
  neolithic,
  xia,
  shang,
  westernzhou,
  chunqiu,
  zhanguo,
  qin,
  westernhan,
  xin,
  easternhan,
  sanguo,
  westernjin,
  sixteenkingdoms,
  nanbei,
  sui,
  tang,
  wudai,
  northernsong,
  southernsong,
  yuan,
  ming,
  qing,
  roc,
  prc,
};

export function formatYearEn(n) {
  if (n < 0) return `${-n} BC`;
  return n < 300 ? `AD ${n}` : `${n}`;
}

function ordinal(n) {
  const v = n % 100;
  return n + (["th", "st", "nd", "rd"][(v - 20) % 10] || ["th", "st", "nd", "rd"][v] || "th");
}

// Year labels in the Japanese "japan" items: numbers, or strings such as "前1世紀", "2世紀後半", "11世紀", "248頃"
export function yearLabelEn(year) {
  if (typeof year === "number" || /^-?\d+$/.test(year)) return formatYearEn(Number(year));
  const c = year.match(/^(前)?(\d+)世紀(後半|前半)?$/);
  if (c) return `${c[3] === "後半" ? "late " : c[3] === "前半" ? "early " : ""}${ordinal(Number(c[2]))} century${c[1] ? " BC" : ""}`;
  const a = year.match(/^(前)?(\d+)頃$/);
  if (a) return `c. ${formatYearEn(a[1] ? -Number(a[2]) : Number(a[2]))}`;
  throw new Error(`Unknown year label: ${year}`);
}

// The Japanese phase endLabel values: "前2070頃", "前1600頃", "220", "現在"
function endLabelEn(label) {
  if (!label) return null;
  if (label === "現在") return "present";
  const m = label.match(/^(前)?(\d+)(頃)?$/);
  if (!m) throw new Error(`Unknown phase endLabel: ${label}`);
  const n = m[1] ? -Number(m[2]) : Number(m[2]);
  return `${m[3] ? "c. " : ""}${formatYearEn(n)}`;
}

function check(cond, eraId, what) {
  if (!cond) throw new Error(`English era overview for ${eraId}: ${what} does not match lib/eraOverviews`);
}

export function getEraOverviewEn(eraId) {
  const en = EN_OVERVIEWS[eraId];
  const ja = getEraOverview(eraId);
  if (!en || !ja) return null;

  const milestones = ja.milestones || [];
  check(en.facts.length === ja.facts.length, eraId, "facts");
  check((en.milestones || []).length === milestones.length, eraId, "milestones");
  check(en.phases.length === ja.phases.length, eraId, "phases");
  check(en.themes.length === ja.themes.length, eraId, "themes");
  check(!!en.japan === !!ja.japan, eraId, "japan");
  check((en.japan?.items || []).length === (ja.japan?.items || []).length, eraId, "japan.items");
  check(!!en.fall === !!ja.fall, eraId, "fall");
  check((en.fall || []).length === (ja.fall || []).length, eraId, "fall items");

  return {
    title: en.title,
    metaDescription: en.metaDescription,
    lead: en.lead,
    facts: en.facts.map(([label, value]) => ({ label, value })),
    keyPoints: en.keyPoints,
    milestones: milestones.map((m, i) => ({ yearLabel: yearLabelEn(m.year), sortYear: Number(m.year), text: en.milestones[i] })),
    phases: ja.phases.map((p, i) => ({
      name: en.phases[i][0],
      headline: en.phases[i][1],
      text: en.phases[i][2],
      start: p.start,
      end: p.end,
      endLabel: endLabelEn(p.endLabel),
    })),
    themes: ja.themes.map((t, i) => ({ id: t.id, title: en.themes[i].title, paragraphs: en.themes[i].paragraphs })),
    japan: ja.japan
      ? {
          title: en.japan.title,
          intro: en.japan.intro,
          items: (ja.japan.items || []).map((it, i) => ({ yearLabel: yearLabelEn(it.year), text: en.japan.items[i] })),
        }
      : null,
    fallTitle: en.fallTitle,
    fallToc: en.fallToc,
    fall: en.fall ? en.fall.map(([title, text]) => ({ title, text })) : null,
    faq: en.faq.map(([q, a]) => ({ q, a })),
  };
}
