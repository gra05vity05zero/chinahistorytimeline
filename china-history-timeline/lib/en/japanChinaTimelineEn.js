// English version of the Japan–China comparative timeline (/en/japan-china-timeline).
// Event text is index-aligned with CHINA_EVENTS / JAPAN_EVENTS in lib/japanChinaTimeline.js;
// years, era ids, icons and links come from there.
import { CHINA_EVENTS, JAPAN_EVENTS } from "@/lib/japanChinaTimeline";
import { ERAS_EN, displayPeriodEn } from "@/lib/en";

const CN_TEXT = [
  "Peking Man lives at Zhoukoudian (use of fire)",
  "Some of the world’s oldest pottery is made at Xianrendong Cave",
  "Yangtze civilization: rice is farmed in the Hemudu culture",
  "Yellow River civilization: the Yangshao culture flourishes (painted pottery)",
  "The Dawenkou culture spreads",
  "The Longshan culture flourishes (black pottery, walled settlements)",
  "The battle of the Yellow Emperor and Chiyou (legend)",
  "Yao and Shun hand on the throne to the worthy (legend)",
  "Yu founds the Xia",
  "King Tang founds the Shang",
  "The Zhou is founded",
  "The Quanrong invade and King You is killed (end of the Western Zhou)",
  "Confucius is born",
  "The Warring States period begins (partition of Jin recognized)",
  "Qin unifies China",
  "The Great Wall is rebuilt",
  "Liu Bang founds the Han",
  "Zhang Qian travels to the Western Regions (start of the Silk Road)",
  "Wang Mang takes the throne (the Xin dynasty)",
  "Emperor Guangwu restores the Han (the Eastern Han begins)",
  "Cai Lun improves papermaking",
  "The Yellow Turban Rebellion breaks out",
  "The Battle of Red Cliffs",
  "Wei is founded; the Eastern Han ends",
  "The Western Jin reunifies China",
  "The Western Jin falls",
  "The Battle of the Fei River",
  "The Northern Wei unifies North China",
  "The Sui reunifies China",
  "The Tang is founded",
  "The Xuanwu Gate Incident; Taizong takes the throne",
  "The An Lushan Rebellion breaks out",
  "The Tang falls",
  "Zhao Kuangyin founds the Song",
  "The Jingkang Incident; the Northern Song falls",
  "Gaozong founds the Southern Song",
  "Khubilai founds the Yuan",
  "The Yuan destroys the Southern Song and unifies China",
  "Zhu Yuanzhang founds the Ming",
  "Zheng He begins his great voyages",
  "The Ming sends an army to aid Korea (the Imjin War)",
  "The Qing enter Beijing",
  "The Opium War breaks out",
  "The First Sino-Japanese War breaks out",
  "The 1911 Revolution breaks out",
  "The Republic of China is founded",
  "The Mukden Incident",
  "The Second Sino-Japanese War breaks out",
  "The People’s Republic of China is founded",
  "Reform and opening up begins",
  "Beijing hosts the Olympic Games",
];

const JP_TEXT = [
  "The Jōmon period begins",
  "Rice farming spreads and the Yayoi period begins",
  "Envoys to the Eastern Han receive the gold seal “King of Na of Wa of Han”",
  "Himiko sends envoys to Wei and receives the title “King of Wa, Friend of Wei”",
  "The Kofun period begins",
  "Buddhism arrives from Baekje",
  "Prince Shōtoku becomes regent and the Asuka period begins",
  "The Seventeen-Article Constitution is issued",
  "Ono no Imoko is sent as envoy to the Sui",
  "The Taika Reforms begin",
  "Japan is defeated by Tang and Silla at the Battle of Baekgang",
  "The Taihō Code is issued",
  "The capital moves to Heijō-kyō and the Nara period begins",
  "The Great Buddha of Tōdai-ji is dedicated",
  "The capital moves to Heian-kyō and the Heian period begins",
  "Embassies to the Tang are discontinued",
  "Fujiwara no Michinaga becomes regent (height of Fujiwara rule)",
  "Taira no Kiyomori wins the Heiji Rebellion and takes power",
  "The Kamakura shogunate is established",
  "The first Mongol invasion (Bun’ei)",
  "The second Mongol invasion (Kōan)",
  "The Kamakura shogunate falls",
  "The Muromachi shogunate is established",
  "The tally trade with the Ming begins",
  "The Ōnin War begins",
  "Firearms arrive in Japan",
  "The Muromachi shogunate falls (the Azuchi–Momoyama period begins)",
  "Toyotomi Hideyoshi unifies Japan",
  "Hideyoshi invades Korea (the Imjin War)",
  "The Battle of Sekigahara",
  "The Edo shogunate is established",
  "The closed-country (sakoku) policy is completed",
  "The Treaty of Kanagawa opens Japan",
  "The Meiji Restoration",
  "The First Sino-Japanese War breaks out",
  "The Russo-Japanese War breaks out",
  "Emperor Meiji dies and the Taishō period begins",
  "The Great Kantō Earthquake",
  "The Mukden (Manchurian) Incident",
  "The Second Sino-Japanese War begins",
  "The Pacific War begins",
  "Japan is defeated",
  "Japan–China diplomatic relations are normalized",
  "Emperor Shōwa dies and the Heisei period begins",
  "The Reiwa period begins after the emperor’s abdication",
];

const YEAR_LABELS = (e) => {
  const y = e.sortYear;
  const approx = /頃/.test(e.yearLabel);
  if (/万年前/.test(e.yearLabel)) return "c. 700,000 years ago";
  const base = y < 0 ? `${-y} BC` : `${y}`;
  return approx ? `c. ${base}` : base;
};

const JP_ERA_NAMES = {
  jomon: "Jōmon", yayoi: "Yayoi", kofun: "Kofun", asuka: "Asuka", nara: "Nara", heian: "Heian", kamakura: "Kamakura",
  muromachi: "Muromachi", azuchimomoyama: "Azuchi–Momoyama", edo: "Edo", meiji: "Meiji", taisho: "Taishō", showa: "Shōwa", heisei: "Heisei", reiwa: "Reiwa",
};
// Chinese era labels; sub-labels in the Japanese data ("（長江文明）", "伝説の時代", "（末期）") are kept apart
function cnEraName(e) {
  if (e.eraId === "paleolithic") return "Paleolithic";
  if (e.era === "伝説の時代") return "Age of legend";
  const base = ERAS_EN.find((x) => x.id === e.eraId)?.name || e.eraId;
  if (/長江/.test(e.era)) return `${base} (Yangtze)`;
  if (/黄河/.test(e.era)) return `${base} (Yellow River)`;
  return base;
}

if (CN_TEXT.length !== CHINA_EVENTS.length || JP_TEXT.length !== JAPAN_EVENTS.length) {
  throw new Error("English Japan–China timeline text is out of step with lib/japanChinaTimeline.js");
}

const enHref = (href) => (href ? `/en${href}` : null);
const linkEn = (link) => {
  if (!link) return null;
  const eraId = link.href.startsWith("/eras/") ? link.href.slice(6) : null;
  const ev = !eraId ? link.href.replace("/events/", "") : null;
  if (eraId) return { href: `/en/eras/${eraId}`, label: `${ERAS_EN.find((x) => x.id === eraId)?.name}` };
  const found = ERAS_EN.flatMap((era) => era.events).find((x) => x.slug === ev);
  return { href: `/en/events/${ev}`, label: found?.title || "the Chinese side" };
};

const TIMELINE = [
  ...CHINA_EVENTS.map((e, i) => ({ side: "cn", eraId: e.eraId, sortYear: e.sortYear, icon: e.icon, yearLabel: YEAR_LABELS(e), event: CN_TEXT[i], era: cnEraName(e), eraKey: e.eraId === "neolithic" ? "neolithic" : e.era === "伝説の時代" ? "legend" : e.eraId, href: enHref(e.href) })),
  ...JAPAN_EVENTS.map((e, i) => ({ side: "jp", eraId: e.eraId, sortYear: e.sortYear, icon: e.icon, yearLabel: YEAR_LABELS(e), event: JP_TEXT[i], era: JP_ERA_NAMES[e.eraId], eraKey: e.eraId, china: linkEn(e.china) })),
].sort((a, b) => a.sortYear - b.sortYear);

export const ROWS_EN = (() => {
  const current = { cn: null, jp: null };
  const currentEraId = { cn: null, jp: null };
  const label = { cn: null, jp: null };
  const band = { cn: -1, jp: -1 };
  return TIMELINE.map((entry) => {
    const { side } = entry;
    const starts = current[side] !== entry.eraKey;
    if (starts) {
      current[side] = entry.eraKey;
      band[side] += 1;
    }
    const anchorId = currentEraId[side] !== entry.eraId ? `${side}-${entry.eraId}` : null;
    currentEraId[side] = entry.eraId;
    label[side] = entry.era;
    return { entry, starts, anchorId, band: { ...band }, eraIds: { ...currentEraId }, labels: { ...label } };
  });
})();

const ANCHORS = new Set(ROWS_EN.map((r) => r.anchorId).filter(Boolean));
export const hasAnchorEn = (id) => ANCHORS.has(id);

// For each Chinese era, the Japanese periods running at the same time
export const ERA_CORRESPONDENCE_EN = ERAS_EN.map((era) => {
  const names = [];
  for (const row of ROWS_EN) {
    if (row.eraIds.cn !== era.id || !row.eraIds.jp) continue;
    const n = JP_ERA_NAMES[row.eraIds.jp];
    if (!names.includes(n)) names.push(n);
  }
  return { eraId: era.id, name: era.name, period: displayPeriodEn(era.period), japaneseEras: names, timelineHref: `#${ANCHORS.has(`cn-${era.id}`) ? `cn-${era.id}` : "era-jump"}` };
});

export const CN_JUMPS_EN = [
  ["Prehistory", "paleolithic"], ["Xia", "xia"], ["Shang", "shang"], ["Zhou", "westernzhou"], ["Spring & Autumn", "chunqiu"], ["Warring States", "zhanguo"],
  ["Qin", "qin"], ["Han", "westernhan"], ["Three Kingdoms", "sanguo"], ["Jin", "westernjin"], ["N. & S. Dynasties", "nanbei"], ["Sui", "sui"], ["Tang", "tang"],
  ["Song", "northernsong"], ["Yuan", "yuan"], ["Ming", "ming"], ["Qing", "qing"], ["Republic", "roc"], ["PRC", "prc"],
].map(([label, eraId]) => ({ label, eraId }));

export const JP_JUMPS_EN = Object.entries(JP_ERA_NAMES).map(([eraId, label]) => ({ label, eraId }));
