import Link from "next/link";
import { COLORS } from "@/lib/data";
import { TERRITORY_FRAMES } from "@/lib/dynastyTerritories";
import { SITE_NAME_EN, bilingualAlternates, findEraEn } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { TERRITORY_TEXT_EN } from "@/lib/en/territoriesEn";
import { DynastyTerritoryMap } from "@/components/DynastyTerritoryMap";
import { FeaturePage, Section, Paras, NoteCard, cardStyle, serif } from "@/components/en/EnFeature";

const title = "Map of Chinese Dynasties’ Territory: How China’s Borders Changed";
const description =
  "From the Shang and Zhou through Qin, Han, Tang, Song, Yuan, Ming and Qing: an animated map of how the territory of China’s dynasties grew and shrank, with their neighbors such as the Xiongnu, Turks, Liao and Jin.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/dynasty-territory-map", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/dynasty-territory-map", image: { title: "Territory of Chinese Dynasties", subtitle: "From the Shang to the Qing", seal: "図" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const POINTS = [
  ["Ages of expansion alternate with ages of contraction", "At the height of unified dynasties — Qin and Han, Sui and Tang, Yuan and Qing — territory spread far outward, while in periods of division — the Three Kingdoms, the Northern and Southern Dynasties, the Five Dynasties and Ten Kingdoms, Song and Jin — China proper itself was split among several regimes. The outer edges at a dynasty’s height, such as the Western Regions under Han and Tang or the Tang protectorates, were often ruled loosely through local chiefs."],
  ["Relations with the northern nomads set the borders", "The balance of power with the nomadic peoples of the Mongolian plateau — the Xiongnu, Xianbei, Turks, Mongols and others — kept deciding where the northern frontier lay. The Great Wall was built roughly along the boundary between farmland and steppe. Many dynasties, such as the Liao, Jin, Yuan and Qing, came from the north into China proper and founded dynasties there."],
  ["The Yuan and Qing were the largest", "The Yuan, as part of the Mongol Empire, directly ruled a vast realm adding the Mongolian plateau, Manchuria and Tibet to China proper. The Qing reached its greatest extent when the Qianlong Emperor annexed Xinjiang, and this territory became the basis of China’s present borders. The Tang also extended its power into Central Asia through its protectorates in the late 7th century, but only for a relatively short time."],
];

export default function EnglishTerritoryMapPage() {
  return (
    <FeaturePage
      title="Map of Chinese Dynasties’ Territory"
      jaPath="/dynasty-territory-map"
      intro="The extent of “China” has changed enormously over time. Beginning as small dynasties on the middle Yellow River, it took the shape of China proper under Qin and Han, and under the Tang, Yuan and Qing reached into Central Asia and the Mongolian plateau. Here sixteen moments from the Shang to the Qing trace how the territories of each dynasty and its neighbors shifted."
      related={[
        { href: "/en/china-capitals", label: "Capitals of China" },
        { href: "/en/great-wall", label: "The Great Wall" },
        { href: "/en/eras", label: "All eras" },
      ]}
    >
      <Section title="Animated territory map">
        <Paras items={["Press play to step through the eras, or use the buttons to jump to any period. Each era’s Chinese dynasty is shown in vermilion; the dotted line is the extent of present-day China. Territories are drawn roughly as spheres of power, not as exact borders (nominal rule and changes over time are often disputed)."]} />
        <div className="mt-3"><DynastyTerritoryMap t={TERRITORY_TEXT_EN} /></div>
      </Section>

      <Section title="What the changing map shows">
        <div className="flex flex-col gap-3">
          {POINTS.map(([h, b]) => (
            <NoteCard key={h} title={h}>{b}</NoteCard>
          ))}
        </div>
      </Section>

      <Section title="Territory era by era">
        <ol className="flex flex-col gap-3">
          {TERRITORY_FRAMES.map((frame, i) => {
            const t = TERRITORY_TEXT_EN.frames[frame.id];
            return (
              <li key={frame.id} style={{ ...cardStyle, padding: "12px 14px" }}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ ...serif, fontSize: 12, fontWeight: 700, color: COLORS.vermilion }}>{i + 1}</span>
                  <h3 style={{ ...serif, fontSize: 15.5, fontWeight: 700, color: COLORS.ink }}>{t.title}</h3>
                  <span style={{ fontSize: 12, color: COLORS.gold, ...serif }}>{t.year}</span>
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 4 }}>{t.desc}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2" style={{ fontSize: 13 }}>
                  {frame.eraIds.map((id) => findEraEn(id)).filter(Boolean).map((era) => (
                    <Link key={era.id} href={`/en/eras/${era.id}`} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                      About the {era.name} →
                    </Link>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>
      </Section>
    </FeaturePage>
  );
}
