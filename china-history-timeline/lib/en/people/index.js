// English text for the person pages (/en/people/[eraId]/[slug]).
// Keys are the same as lib/personDetails: "eraId/<Japanese person slug>" (e.g. "qin/始皇帝").
//
// Each entry:
//   bio   … the "Life and achievements" text (paragraphs separated by \n\n)
//   life  … the English text of each row of the Japanese life table (lib/personDetails), in the same order.
//           Years and "c." markers come from the Japanese data. Omit when the Japanese entry has no life table.
//   slug  … optional URL slug; by default it is made from the English name (see enPersonSlug)
import ancient from "./ancient";
import classical from "./classical";
import han from "./han";
import sanguo from "./sanguo";
import medieval from "./medieval";
import songYuan from "./songYuan";
import modern from "./modern";

export const PEOPLE_EN = { ...ancient, ...classical, ...han, ...sanguo, ...medieval, ...songYuan, ...modern };

// "Qin Shi Huang (Ying Zheng)" → "qin-shi-huang"; "Jiang Ziya (Lü Shang)" → "jiang-ziya"
export function enPersonSlug(name) {
  return name
    .replace(/\s*\(.*\)\s*$/, "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// -221 → "221 BC"; 25 → "AD 25"; 1912 → "1912"; approx → "c. 551 BC"
export function formatLifeYearEn(year, approx) {
  if (year === null) return "Unknown";
  const base = year < 0 ? `${-year} BC` : year < 1000 ? `AD ${year}` : String(year);
  return approx ? `c. ${base}` : base;
}
