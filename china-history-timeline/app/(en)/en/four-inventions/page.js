import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { HeritageThumb } from "@/components/Shared";
import { FeaturePage, cardStyle, serif, eventLink } from "@/components/en/EnFeature";
import Link from "next/link";

const title = "The Four Great Inventions of Ancient China: Paper, Printing, Gunpowder and the Compass";
const description =
  "What are China’s Four Great Inventions? How paper, printing, gunpowder and the compass were invented, the people and books behind them, and how they changed the history of the world.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/four-inventions", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/four-inventions", image: { title: "The Four Great Inventions", seal: "明" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const paperEvent = ERAS.find((e) => e.id === "easternhan")?.events.find((ev) => stripRuby(ev.title).includes("製紙法の改良"))?.slug || null;

const INVENTIONS = [
  {
    name: "Paper (papermaking)",
    period: "Eastern Han (1st–2nd centuries)",
    key: "Cai Lun perfects a practical way of making paper",
    body: "Paper-like materials existed before, but they were expensive or poorly suited to writing. According to the History of the Later Han, the Eastern Han eunuch Cai Lun experimented with cheap, everyday materials — tree bark, hemp waste, rags and fishing nets — and established a method of making thin, even paper good for writing. Records that had depended on bamboo and wooden slips or costly silk became far easier to make, and the circulation of learning, administration and culture leapt forward. The technique later traveled west along the Silk Road, reaching the Islamic world in the 8th century and Europe around the 12th, an invention that changed the history of civilization.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cai-lun.jpg",
    caption: "Portrait of Cai Lun, known as the inventor of paper",
    credit: "Wikimedia Commons (public domain)",
    links: [...eventLink(paperEvent, "Read the related event"), { href: "/en/people/easternhan/cai-lun", label: "Cai Lun" }],
  },
  {
    name: "Printing",
    period: "Tang to Northern Song (7th–11th centuries)",
    key: "From woodblock printing to Bi Sheng’s movable type",
    body: "Woodblock printing — carving a whole page of a text into a single block — was already in practical use under the Tang; the Diamond Sutra printed in 868 (British Library) is known as the oldest surviving printed book bearing a date. The Northern Song scholar Shen Kuo recorded in his Dream Pool Essays that Bi Sheng devised movable type, printing with individual characters of fired clay set together. Gutenberg would put movable-type printing into practical use in the West only in the 15th century, some four hundred years later.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Diamond_Sutra_of_868_AD_-_The_Diamond_Sutra_(868),_frontispiece_and_text_-_BL_Or._8210-P.2.jpg",
    caption: "Frontispiece of the Diamond Sutra printed in 868, the oldest surviving dated printed book (British Library)",
    credit: "British Library / Wikimedia Commons (public domain)",
    links: [{ href: "/en/eras/northernsong", label: "The Northern Song" }],
  },
  {
    name: "Gunpowder",
    period: "Tang to Northern Song (9th–11th centuries)",
    key: "A chance discovery by Daoists seeking the elixir of life",
    body: "Gunpowder is said to have been discovered by chance by Tang-dynasty Daoists who, searching for an elixir of immortality, mixed saltpeter, sulfur and charcoal. At first it was used for fireworks and firecrackers at festivals, but under the Northern Song it was put to military use, and the military manual Wujing Zongyao, compiled in 1044, records how to make early fire lances and fire bombs. Gunpowder weapons developed further under the Yuan and Ming and spread west through the Mongol conquests and other routes, transforming the way wars were fought in Europe.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Chinese_Fire_Lance_with_Pellets.JPG",
    caption: "A fire lance firing lead pellets — an early firearm — from the Ming military manual Huolongjing",
    credit: "Wikimedia Commons (public domain)",
    links: [{ href: "/en/eras/northernsong", label: "The Northern Song" }],
  },
  {
    name: "The compass",
    period: "Warring States to Northern Song (3rd century BC – 12th century)",
    key: "From the divining “south-pointer” to the mariner’s compass",
    body: "The way natural magnets (lodestone) always point north–south was known early, and in the Warring States period a divination device using this property, the sinan (“south-pointer”), is said to have been used. It later developed into a compass with an artificially magnetized needle; Zhu Yu’s Pingzhou Table Talks, written in 1119 under the Northern Song, records its practical use at sea, with sailors checking direction by the compass on cloudy days and at night. The practical compass made long ocean voyages far safer and became one of the technological foundations of the later Age of Discovery.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Model_Si_Nan_of_Han_Dynasty.jpg",
    caption: "Reconstructed model of a Han-dynasty sinan (south-pointer)",
    credit: "Wikimedia Commons, CC BY-SA 3.0 / GFDL",
    links: [{ href: "/en/eras/northernsong", label: "The Northern Song" }],
  },
];

export default function EnglishFourInventionsPage() {
  return (
    <FeaturePage
      title="The Four Great Inventions of Ancient China"
      jaPath="/four-inventions"
      intro="Paper, printing, gunpowder and the compass are called the “Four Great Inventions” because, of all China’s inventions, they did most to change the history of the world. In the 17th century the English philosopher Francis Bacon named printing, gunpowder and the compass as inventions that had “changed the whole face and state of things throughout the world,” without mentioning that they came from China. In the 20th century the research of the British historian of Chinese science Joseph Needham and others made their Chinese origin widely known, and with paper added they came to be grouped as today’s Four Great Inventions."
      related={[
        { href: "/en/four-great-novels", label: "The Four Great Classical Novels" },
        { href: "/en/great-wall", label: "The Great Wall" },
        { href: "/en/silk-road", label: "The Silk Road" },
      ]}
    >
      <div className="flex flex-col gap-5">
        {INVENTIONS.map((inv, i) => (
          <div key={inv.name} style={cardStyle}>
            <div className="relative" style={{ width: "100%", height: 190, backgroundColor: "#EFE7D0", overflow: "hidden" }}>
              <HeritageThumb imageUrl={inv.imageUrl} name={inv.name} type="building" />
              <span className="absolute flex items-center justify-center" style={{ top: 8, left: 8, width: 26, height: 26, borderRadius: 13, backgroundColor: COLORS.vermilion, color: "#FBF8F0", ...serif, fontSize: 12, fontWeight: 700 }}>
                {i + 1}
              </span>
            </div>
            <div style={{ padding: "14px 16px" }}>
              <div style={{ fontSize: 10.5, color: COLORS.mist, marginBottom: 8 }}>
                {inv.caption} / {inv.credit}
              </div>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h2 style={{ ...serif, fontSize: 19, fontWeight: 700, color: COLORS.ink }}>{inv.name}</h2>
                <span style={{ fontSize: 12, color: COLORS.gold, ...serif }}>{inv.period}</span>
              </div>
              <p style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>{inv.key}</p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>{inv.body}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                {inv.links.map((l) => (
                  <Link key={l.href} href={l.href} style={{ fontSize: 13, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                    {l.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </FeaturePage>
  );
}
