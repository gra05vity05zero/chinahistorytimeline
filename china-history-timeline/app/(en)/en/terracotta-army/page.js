import { ERAS, stripRuby } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, findEventEn } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { HeritageGrid } from "@/components/Shared";
import { FeaturePage, Section, Paras } from "@/components/en/EnFeature";

const title = "The Terracotta Army and the Mysteries of the First Emperor’s Tomb";
const description =
  "Found in 1974 by farmers digging a well, the Terracotta Army has no two faces alike — and the First Emperor’s own tomb, said to hold rivers of mercury, has never been opened. The mysteries and facts of the Qin mausoleum.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/terracotta-army", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/terracotta-army", image: { title: "The Terracotta Army", seal: "俑" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

// The heritage items of the Qin unification event that show the army, the mausoleum and the emperor
const jaEvent = ERAS.find((e) => e.id === "qin")?.events.find((ev) => stripRuby(ev.title).includes("中国統一"));
const picks = (jaEvent?.heritage || [])
  .map((h, i) => (["兵馬俑", "秦始皇陵", "始皇帝"].some((k) => stripRuby(h.name).includes(k)) ? i : -1))
  .filter((i) => i >= 0);
const enEvent = jaEvent ? findEventEn(jaEvent.slug)?.event : null;
const items = enEvent ? picks.map((i) => enEvent.heritage[i]).filter(Boolean) : [];

export default function EnglishTerracottaArmyPage() {
  return (
    <FeaturePage
      title="The Terracotta Army and the First Emperor’s Tomb"
      jaPath="/terracotta-army"
      intro="The vast mausoleum where Qin Shi Huang, the first ruler to unify China, is said to lie, and the Terracotta Army made to accompany him in death, still hold many unsolved mysteries. Here is how the army was found, and why the tomb itself has still not been excavated."
      related={[
        { href: "/en/qinshihuang", label: "Qin Shi Huang" },
        { href: "/en/eras/qin", label: "The Qin dynasty" },
        { href: "/en/world-heritage", label: "World Heritage in China" },
      ]}
    >
      {items.length > 0 && (
        <section style={{ marginBottom: 28 }}>
          <HeritageGrid items={items} />
        </section>
      )}

      <Section title="It began with farmers digging a well">
        <Paras items={["The Terracotta Army was discovered in 1974. Farmers in Lintong, Shaanxi, digging a well against drought, kept turning up fragments of pottery figures. At first no one imagined they were over 2,000 years old; it is said they were nearly treated as the village’s common property. Then archaeologists began full-scale excavations, and the find became known worldwide as one of the greatest archaeological discoveries of the 20th century."]} />
      </Section>

      <Section title="8,000 soldiers, each with a different face">
        <Paras items={["The three excavated pits have yielded an estimated 8,000 or more life-size pottery figures of soldiers, horses and chariots. Remarkably, almost all their faces differ — no two are said to be alike. Heads and limbs were mass-produced from molds, but craftsmen are thought to have finished each figure by hand. We also know they were originally brightly painted: just after excavation, vivid reds, greens and purples remained on the figures."]} />
      </Section>

      <Section title="Why does the paint vanish so quickly?">
        <Paras items={["The paint survived for more than 2,000 years in the damp underground, but once exposed to air by excavation it dries, shrinks and flakes off within minutes to hours. That is why most of the excavated figures are displayed today in the dull tones of bare fired clay. Developing preservation techniques remains a challenge — one reason excavation of the tomb itself has been cautiously postponed."]} />
      </Section>

      <Section title="Why has the tomb itself never been excavated?">
        <Paras
          items={[
            "The Terracotta Army is only an accompanying burial placed around the mausoleum; the great mound and underground palace where the First Emperor’s body is said to lie remain almost untouched. The Records of the Grand Historian describes rivers and seas reproduced in mercury inside the underground palace, a ceiling painted with the heavens, and even crossbows rigged to shoot intruders.",
            "It sounds like legend, but modern surveys have reported unusually high concentrations of mercury in the soil around the mound, suggesting that the account may not be pure invention. Besides the risk of looting and the limits of preservation, concern over such unknown dangers is one reason full excavation of the underground palace is still on hold.",
          ]}
        />
      </Section>

      <Section title="An emperor who sought immortality">
        <Paras items={["Behind the building of so vast a tomb, it is said, lay the First Emperor’s intense fear of death and his obsession with immortality. In his later years he sent magicians far and wide in search of an elixir of life. Best known is the legend of Xu Fu, who claimed that the elixir could be found on the eastern island of Penglai, set sail with thousands of people and never returned. Places across Japan claim to be where Xu Fu landed, but none is confirmed by history.", "The Terracotta Army and the Mausoleum of the First Qin Emperor were inscribed as a UNESCO World Heritage Site in 1987."]} />
      </Section>
    </FeaturePage>
  );
}
