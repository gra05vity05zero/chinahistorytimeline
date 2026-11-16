import { ERAS, stripRuby } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";
import { FeaturePage, Section, Paras, HeroImage, Facts, ItemCard, NoteCard, PointMap, eventLink } from "@/components/en/EnFeature";

const title = "The Great Wall of China: When, Who and Why It Was Built";
const description =
  "When was the Great Wall built, who built it and why? Its history from the walls of the Warring States, through the First Emperor’s linking and the great Ming rebuilding, with facts, myths and its main passes on a map.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/great-wall", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/great-wall", image: { title: "The Great Wall of China", seal: "城" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const FACTS = [
  { q: "When was it built?", a: "The states of the Spring and Autumn and Warring States periods began building separate walls, and the Qin, which unified China in 221 BC, linked them. Most of the stone-and-brick wall seen at tourist sites today was rebuilt under the Ming (14th–17th centuries)." },
  { q: "Who built it?", a: "Qin Shi Huang, the First Emperor, ordered the walls linked (the work was directed by General Meng Tian); the Ming later rebuilt it on a grand scale. The actual labor was done by soldiers and peasants conscripted from across the country." },
  { q: "What for?", a: "To keep out the nomadic peoples of the north — the Xiongnu and, later, the Mongols and others." },
  { q: "How long is it?", a: "21,196.18 km in total, according to China’s National Cultural Heritage Administration (2012) — more than half the circumference of the Earth." },
  { q: "Visible from space?", a: "Often said, but it is generally agreed that it cannot be seen with the naked eye. See the facts below." },
];

const jaEventSlug = (eraId, jaTitle) => ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(jaTitle))?.slug || null;

const STOPS = [
  {
    name: "Shanhai Pass",
    subtitle: "The easternmost pass — “the First Pass Under Heaven”",
    location: "Qinhuangdao, Hebei",
    text: "The eastern starting point of the Great Wall, facing the Bohai Sea, where a gate tower bearing the inscription “First Pass Under Heaven” still stands. In 1644 the Ming general Wu Sangui opened its gates to the Qing army; the Ming fell at last, and Qing rule over China began. It is known as the counterpart of Jiayu Pass at the far western end.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Wall_near_the_Shanhai_Pass.jpg",
    credit: "Photo: PQ77wd / Wikimedia Commons, CC BY-SA 4.0",
    event: jaEventSlug("qing", "清の北京入城"),
    x: 365, y: 144,
  },
  {
    name: "Old Dragon’s Head (Laolongtou)",
    subtitle: "Where the wall runs into the sea",
    location: "Qinhuangdao, Hebei (south of Shanhai Pass)",
    text: "Built on the Bohai shore close to Shanhai Pass, this is where the wall juts out into the sea and ends. It looks like a dragon dipping its head in the water — hence the name — and under the Ming it also served as a battery against attack from the sea, a reminder that the wall was meant to guard the coastline as well as the land.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/View_of_the_Old_Dragon_Head.jpg",
    credit: "Photo: Dquai / Wikimedia Commons, CC BY-SA 4.0",
    x: 369, y: 150,
  },
  {
    name: "Mutianyu",
    subtitle: "A well-preserved section on steep, green ridges",
    location: "Huairou District, Beijing",
    text: "Northeast of central Beijing, the walls here run in layers along wooded ridges. Rebuilt in stone under the Ming, the section is well preserved and known for its many watchtowers. Less crowded than Badaling, it has become popular in recent years for quieter walks along the wall.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Wall_of_China_at_Mutianyu.JPG",
    credit: "Photo: CTLiotta / Wikimedia Commons, CC0",
    x: 334, y: 136,
  },
  {
    name: "Badaling",
    subtitle: "The best-known section for visitors",
    location: "Yanqing District, Beijing",
    text: "Easy to reach on a day trip from Beijing, this is the section most people picture when they think of the Great Wall. Rebuilt on a large scale under the Ming as a key military point, in 1957 it became the first section of the wall opened to the public, and it is the standard stop for visiting foreign dignitaries.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Badaling_China_Great-Wall-of-China-01.jpg",
    credit: "Photo: Cccefalon / Wikimedia Commons, CC BY-SA 3.0",
    event: jaEventSlug("qin", "万里の長城の修築"),
    x: 327, y: 132,
  },
  {
    name: "Yanmen Pass",
    subtitle: "An inland stronghold called “the First Pass of China”",
    location: "Dai County, Xinzhou, Shanxi",
    text: "A pass in the mountains of northern Shanxi, commanding a difficult north–south route, which appears again and again as a battleground against the Xiongnu and other northern nomads. An ancient stronghold sometimes styled, like Shanhai and Jiayu Passes, “the First Pass of China,” it still has several gates and walls along its mountain road.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Barbican_gate_of_Yanmen_Pass_(20250712165843).jpg",
    credit: "Photo: N509FZ / Wikimedia Commons, CC BY-SA 4.0",
    x: 302, y: 157,
  },
  {
    name: "Jiayu Pass",
    subtitle: "The westernmost pass — “the Mightiest Pass Under Heaven”",
    location: "Jiayuguan, Gansu",
    text: "Built under the Ming at the western end of the wall, beyond which lay lands outside Han rule; it was called “the Mightiest Pass Under Heaven.” The homesickness and unease of soldiers and caravans setting out westward from here were sung in many later poems. Beyond it the Silk Road continued into the Western Regions.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/JiayuguanFort.jpg",
    credit: "Photo: Doron / Wikimedia Commons (CC BY-SA)",
    x: 204, y: 146,
  },
];

export default function EnglishGreatWallPage() {
  return (
    <FeaturePage
      title="The Great Wall of China"
      jaPath="/great-wall"
      intro="The Great Wall began when Qin Shi Huang, the First Emperor, who unified China, had the separate walls built by the Warring States linked and repaired. Later dynasties kept building against the northern nomads, and most of what visitors see today is the result of the great Ming rebuilding. From Shanhai Pass on the Bohai Sea in the east to Jiayu Pass on the edge of the desert in the west, its total length is said to exceed 20,000 km."
      related={[
        { href: "/en/silk-road", label: "The Silk Road" },
        { href: "/en/eras/qin", label: "The Qin dynasty" },
        { href: "/en/eras/ming", label: "The Ming dynasty" },
      ]}
    >
      <HeroImage
        imageUrl="https://commons.wikimedia.org/wiki/Special:FilePath/The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
        alt="The Great Wall at Jinshanling"
        caption="The wall at Jinshanling winding along the ridges — one of the most scenic of the Ming sections"
        credit="Photo: Severin.stalder / Wikimedia Commons, CC BY-SA 3.0"
      />

      <Facts heading="The Great Wall at a glance" items={FACTS} />

      <Section title="History of the Great Wall">
        <Paras
          items={[
            "There was never a single “Great Wall” from the start. In the Spring and Autumn and Warring States periods, states such as Yan, Zhao, Qin, Qi, Wei and Chu each built their own walls of rammed earth against nomads from the north and against rival states. After unifying China in 221 BC, Qin Shi Huang ordered General Meng Tian to link and repair these walls, creating a vast line of defense from Lintao (in present-day Gansu) in the west to Liaodong in the east. This is regarded as the direct origin of the “Great Wall.” Hundreds of thousands of people conscripted from across the country are said to have been put to work, and the cruel labor is said to have fed discontent with the Qin.",
            "Under the Western Han, after Zhang Qian’s mission to the Western Regions, the wall was extended further west to around Dunhuang, also protecting the Silk Road trade routes. The Tang, which favored conciliation and diplomacy with neighboring peoples, built almost no new wall; it became a great building project again only under the Ming, which faced a continuing northern threat. Especially after the humiliation of 1449, when an emperor was captured by northern nomads in the Tumu Crisis, the Ming rebuilt the wall to strengthen its defenses, replacing fragile rammed earth with solid brick and stone. The famous sections at Badaling, Mutianyu and Jinshanling all date from this Ming rebuilding.",
            "In 1644 the Ming general Wu Sangui opened Shanhai Pass, the easternmost gate of the wall, to the Qing army; the Ming fell and the Qing established its rule over China. The Manchu Qing came from Manchuria, outside the wall, and since its territory included the lands north of the wall, this huge line of defense lost almost all its military meaning. Ironically, the last great event in the history of the Great Wall was the moment the wall itself was breached.",
          ]}
        />
      </Section>

      <Section title="Main sections and passes">
        <PointMap
          outline={CHINA_OUTLINE}
          taiwan={TAIWAN_OUTLINE}
          points={STOPS}
          connect
          note="A map based on China’s real coastline. The numbers match the list below; from Shanhai Pass in the east to Jiayu Pass in the west, the wall spans more than 2,000 km."
          labels={[
            { label: "Beijing", x: 328, y: 165, anchor: "end" },
            { label: "Inner Mongolia", x: 420, y: 90 },
            { label: "Xinjiang · Silk Road", x: 105, y: 165 },
            { label: "Tibet", x: 195, y: 265 },
          ]}
        />
        <div className="flex flex-col gap-4">
          {STOPS.map((s, i) => (
            <ItemCard key={s.name} index={i + 1} title={s.name} subtitle={s.subtitle} meta={s.location} imageUrl={s.imageUrl} credit={s.credit} links={eventLink(s.event, "Read the related event")}>
              {s.text}
            </ItemCard>
          ))}
        </div>
      </Section>

      <Section title="Stories and facts">
        <div className="flex flex-col gap-3">
          <NoteCard title="Lady Meng Jiang, whose tears brought down the wall">
            Building the wall under the Qin was brutal forced labor involving hundreds of thousands of people, and the tale of “Lady Meng Jiang weeping at the Great Wall” has long been told as its symbol. Her husband was conscripted to build the wall and never returned; she followed him there, and when she learned of his death and wept, part of the wall collapsed to reveal his bones. It is not history, but it conveys how bitter the work was for ordinary people.
          </NoteCard>
          <NoteCard title="Is it “the only man-made structure visible from space”?">
            The claim is often repeated, but many astronauts who have been to space say it is hard to make out the wall with the naked eye even from low orbit, and it is considered a widespread myth. A structure a few meters to a dozen or so meters wide is not easy to pick out from low Earth orbit, let alone from the Moon.
          </NoteCard>
          <NoteCard title="More than 20,000 km in total">
            According to a survey published in 2012 by China’s National Cultural Heritage Administration, the Great Wall — counting the walls, passes and trenches built by every dynasty — totals 21,196.18 km. The figure reflects that it is not one continuous wall but a network of walls from many eras; it is more than half the Earth’s circumference (about 40,000 km).
          </NoteCard>
        </div>
      </Section>
    </FeaturePage>
  );
}
