import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { WORLD_OUTLINE } from "@/lib/worldOutline";
import { HeritageThumb } from "@/components/Shared";
import { FeaturePage, Section, Paras, FlowList, DataTable, NoteCard, NumberBadge, cardStyle, serif, bodyText, jaEventSlug } from "@/components/en/EnFeature";

const title = "Journey to the West Explained: The Story, the Characters and Xuanzang’s Real Journey to India";
const description =
  "A guide to Journey to the West, one of the Four Great Classical Novels: the plot, Sun Wukong, Zhu Bajie and the other characters, the famous episodes, a map of the Tang monk Xuanzang’s real seventeen-year journey to India, how history differs from the novel, how the book took shape, and its legacy in Japan.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/saiyuki", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/saiyuki", image: { title: "Journey to the West", subtitle: "Sun Wukong and Xuanzang’s journey", seal: "猿" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const PILGRIM_COLOR = "#B5452F";
const HEAVEN_COLOR = "#4F6FA0";
const ev = (key) => {
  const s = jaEventSlug(ERAS, stripRuby, "tang", key);
  return s ? `/en/events/${s}` : null;
};
const HREF_XUANZANG = ev("玄奘");
const HREF_TAIZONG = ev("太宗即位");
const XUANZANG = figureEnByJa("tang", "玄奘");
const TAIZONG = figureEnByJa("tang", "唐太宗（李世民）");
const commons = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`;

const STORY = [
  { no: 1, title: "The birth of Sun Wukong and havoc in heaven", range: "Chapters 1–7",
    body: "A monkey born from a stone on the Mountain of Flowers and Fruit finds the Water Curtain Cave and becomes king of the monkeys, the “Handsome Monkey King.” Seeking immortality, he becomes the disciple of the sage Subhuti, who gives him the name Sun Wukong and teaches him the somersault cloud and the seventy-two transformations. He takes the As-You-Will Gold-Banded Staff from the Dragon King of the Eastern Sea; invited to heaven, he rebels in fury at being made a mere keeper of horses and calls himself “Great Sage Equal to Heaven.” He gorges on the peaches of immortality and the elixir of life and fights off the armies of heaven — until he fails to escape from the palm of the Buddha’s hand, and is imprisoned under the Mountain of Five Elements for five hundred years." },
  { no: 2, title: "The pilgrimage begins", range: "Chapters 8–12",
    body: "To bring the Mahayana scriptures to the land in the east (Tang China), the Buddha has the bodhisattva Guanyin seek someone to come all the way to the Western Heaven to fetch them. Meanwhile in Tang China, Emperor Taizong tours the underworld and returns to life, and a great mass is held for the dead. There the young monk Xuanzang, guided by Guanyin, receives from Taizong the title “Tripitaka” (Sanzang) and sets out for India." },
  { no: 3, title: "The companions assemble", range: "Chapters 13–22",
    body: "Tripitaka frees Sun Wukong from under the Mountain of Five Elements and makes him his first disciple. To restrain the unruly monkey, Guanyin gives Tripitaka a golden band that tightens around Wukong’s head, and the spell that tightens it. Then the dragon prince who ate Tripitaka’s horse takes the form of a white horse to carry him; at Gao Village they take on Zhu Bajie, who had married into a family there, and at the River of Flowing Sands, Sha Wujing, who lived in the river. Tripitaka, his three disciples and the white horse are now complete." },
  { no: 4, title: "The eighty-one ordeals", range: "Chapters 23–97",
    body: "Most of the novel is an endless series of battles with demons and monster kings. Rumor has it that eating Tripitaka’s flesh will grant eternal life, and demon after demon attacks the pilgrims. Most of the famous scenes are here: the White Bone Demon, for whose killing Wukong is banished by Tripitaka; the Golden and Silver Horned Kings, whose gourd swallows anyone who answers to his name; and the Flaming Mountains, where the pilgrims fight for the palm-leaf fan that can put out the fire." },
  { no: 5, title: "Arrival in India and enlightenment", range: "Chapters 98–100",
    body: "After fourteen years on the road, the pilgrims at last reach Vulture Peak in India and receive the scriptures from the Buddha. But the first scriptures they are given are blank, and even after exchanging them, a final ordeal — the one needed to make up the full eighty-one — awaits them on the way home. Once the scriptures are delivered to Tang China, Tripitaka becomes the Buddha of Sandalwood Merit, Wukong the Victorious Fighting Buddha, and Bajie, Wujing and the white horse also receive their ranks, and the story ends." },
];

const PEOPLE = [
  { side: "The pilgrims", color: PILGRIM_COLOR, list: [
    { name: "Tripitaka (Xuanzang)", role: "Tang monk · Buddha of Sandalwood Merit", note: "In a former life the Buddha’s disciple Golden Cicada. Compassionate but timid, he is forever being carried off by demons; he ignores Wukong’s warnings and is sometimes tricked into banishing him.", img: XUANZANG },
    { name: "Sun Wukong (the Monkey King)", role: "Great Sage Equal to Heaven · Victorious Fighting Buddha", note: "The monkey king born from a stone. His somersault cloud carries him 108,000 li in a single leap; he wields the As-You-Will staff and can take seventy-two forms. Tormented by the golden band on his head, he is still the pilgrims’ chief fighter against the demons." },
    { name: "Zhu Bajie (Pigsy)", role: "Former Marshal of the Heavenly Canopy · Altar Cleanser", note: "Once commander of heaven’s navy, he was cast down to earth for making advances to the moon goddess Chang’e and reborn with the face of a pig. His Buddhist name is Wuneng. Greedy and lazy, he is always proposing to “split the luggage and go home.”" },
    { name: "Sha Wujing (Sandy)", role: "Former Curtain-Raising General · Golden-Bodied Arhat", note: "Cast down to the River of Flowing Sands for breaking a crystal goblet at a heavenly banquet, he had become a demon who ate travelers. Earnest and good-natured, he carries the baggage and supports the group." },
    { name: "The White Dragon Horse", role: "Son of the Dragon King of the Western Sea", note: "Being punished for burning his father’s pearl, he is saved by Guanyin and turns into a white horse to carry Tripitaka on his journey." },
  ] },
  { side: "Gods, buddhas and demons", color: HEAVEN_COLOR, list: [
    { name: "Guanyin", role: "The bodhisattva behind the pilgrimage", note: "At the Buddha’s command she looks for the pilgrim, and guides Wukong, Bajie, Wujing and the dragon to become his disciples. Whenever the pilgrims are in trouble on the road, she comes to their rescue." },
    { name: "The Buddha (Tathagata)", role: "The Buddha of Vulture Peak in the Western Heaven", note: "He makes a wager with the rampaging Wukong and, when Wukong cannot leap out of his palm, imprisons him under the Mountain of Five Elements. He plans the pilgrimage to bring the scriptures to the east." },
    { name: "The Bull Demon King", role: "Wukong’s former sworn brother", note: "A demon king who swore brotherhood with Wukong when he was king of the Mountain of Flowers and Fruit. With his wife Princess Iron Fan and their son Red Boy, he stands in the pilgrims’ way." },
    { name: "The White Bone Demon", role: "A demon of white bones", note: "She approaches Tripitaka three times — as a girl, an old woman and an old man. Wukong sees through her and kills her, but is mistaken for a murderer and banished by Tripitaka." },
  ] },
];

const EPISODES = [
  { title: "Havoc in Heaven", range: "Chapters 5–7", body: "Made keeper of heaven’s peach orchard, Wukong eats up the peaches of immortality and Laozi’s elixir, and takes on the armies of heaven. Burned for 49 days in the Eight Trigrams Furnace, he does not die — instead he gains the “fiery eyes and golden pupils” that see through any disguise." },
  { title: "The Buddha’s palm", range: "Chapter 7", body: "In a wager with the Buddha — “leap out of my palm and heaven is yours” — Wukong somersaults to five pillars at the end of the world, scrawls his name on one as proof and returns. But the pillars were the Buddha’s fingers: Wukong had never left his palm." },
  { title: "Thrice beating the White Bone Demon", range: "Chapter 27", body: "Wukong kills the disguised demon three times, but to Tripitaka it looks as if he has killed innocent people, and he finally banishes Wukong. A story of master and disciple at cross purposes, it is one of the best-loved episodes in China." },
  { title: "The Golden and Silver Horned Kings", range: "Chapters 32–35", body: "Two demon brothers, once servant boys of Laozi, torment Wukong with a red gourd that swallows anyone who answers when his name is called. Wukong turns the tables with a battle of wits, including giving false names." },
  { title: "The Kingdom of Women", range: "Chapters 53–54", body: "In the Kingdom of Women of Western Liang, where only women live, Tripitaka and Bajie drink from a river and become pregnant. Pressed by the queen to marry her, Tripitaka escapes the kingdom by a ruse." },
  { title: "The Flaming Mountains and the palm-leaf fan", range: "Chapters 59–61", body: "To cross the blazing Flaming Mountains, Wukong tries to borrow Princess Iron Fan’s palm-leaf fan, but is tricked into taking a fake. It ends in an all-out battle with the Bull Demon King — the high point of the middle of the story." },
];

const FLOW = [
  { year: "602", title: "Xuanzang is born", note: "Born in Goushi County near Luoyang, with the lay name Chen Hui. He became a monk at thirteen." },
  { year: "626", title: "Taizong takes the throne", note: "Li Shimin becomes emperor after the Xuanwu Gate Incident. Travel abroad to the Western Regions is still strictly forbidden.", href: HREF_TAIZONG },
  { year: "629", title: "Departure from Chang’an", note: "Without official permission, Xuanzang secretly sets out for India (some accounts say 627).", anchor: "journey" },
  { year: "c. 631", title: "Arrival at Nalanda", note: "At the greatest center of Buddhist learning in India he studies under Śīlabhadra for about five years.", anchor: "journey" },
  { year: "645", title: "Return to Chang’an", note: "He brings back 657 texts and is welcomed with enthusiasm.", href: HREF_XUANZANG },
  { year: "646", title: "Great Tang Records on the Western Regions", note: "At Taizong’s request he sets down the geography and customs of the lands he visited.", anchor: "history-vs-legend" },
  { year: "652", title: "The Big Wild Goose Pagoda", note: "A pagoda is built at Ci’en Temple in Chang’an to house the scriptures he brought back." },
  { year: "664", title: "Xuanzang dies", note: "After his return he devoted his life to translation, rendering 75 works in 1,335 scrolls into Chinese." },
  { year: "Southern Song", title: "The Tale of How Tripitaka Fetched the Scriptures", note: "The oldest surviving Journey to the West story, in which a monkey “pilgrim” protects Tripitaka.", anchor: "versions" },
  { year: "1592", title: "Journey to the West is published", note: "The Shidetang edition, the oldest surviving 100-chapter version, is published in Nanjing.", anchor: "versions" },
];

const project = (lon, lat) => [6.2 * (lon + 8) + 8, 271.19 - 7.3108 * (lat - 14)];
const OUTBOUND = [[108.94, 34.26], [102.64, 37.93], [95.78, 40.52], [93.51, 42.83], [89.19, 42.95], [86.57, 42.06], [82.96, 41.72], [78.4, 41.6], [77.3, 42.25], [75.3, 42.84], [69.24, 41.3], [66.96, 39.65], [66.9, 38.3], [66.9, 36.76], [67.83, 34.82], [69.2, 35.0], [71.58, 34.01], [74.8, 34.08], [77.67, 27.49], [79.92, 27.05], [81.85, 25.44], [85.44, 25.13]];
const RETURN = [[85.44, 25.13], [79.92, 27.05], [75.58, 31.33], [72.83, 33.75], [69.2, 35.0], [71.0, 36.9], [75.23, 37.77], [75.99, 39.47], [77.24, 38.42], [79.92, 37.11], [82.7, 37.0], [89.9, 40.5], [94.66, 40.14], [102.64, 37.93], [108.94, 34.26]];

const PLACES = [
  { no: 1, name: "Chang’an", label: "Chang’an", lon: 108.94, lat: 34.26, side: "bottom", note: "The Tang capital (modern Xi’an): the start and end of the journey, which he secretly began in 629 and ended on his return in 645." },
  { no: 2, name: "Guazhou and the Jade Gate", label: "Guazhou", lon: 95.78, lat: 40.52, side: "right", note: "After slipping past the Tang frontier posts at night, he dropped his water bag in the Mohoyan Desert and went on for four nights and five days without a drop to drink." },
  { no: 3, name: "Gaochang (Turpan)", label: "Gaochang", lon: 89.19, lat: 42.95, side: "top", note: "The devoutly Buddhist king of Gaochang, Qu Wentai, tried to keep him there, but Xuanzang went on hunger strike until allowed to leave; the two swore brotherhood, and the king provided funds and attendants. Nearby rise the Flaming Mountains of Journey to the West." },
  { no: 4, name: "Kucha", label: "Kucha", lon: 82.96, lat: 41.72, side: "bottom", note: "A Buddhist kingdom famous as the home of the great monk Kumarajiva. He waited more than sixty days here for the snowbound passes of the Tianshan to open." },
  { no: 5, name: "Suyab", label: "Suyab", lon: 75.3, lat: 42.84, side: "top", note: "Reached after crossing the Bedel Pass, where many froze to death. The khagan of the Western Turks welcomed him and gave him letters of introduction to the lands further west." },
  { no: 6, name: "Samarkand", label: "Samarkand", lon: 66.96, lat: 39.65, side: "left", note: "A Sogdian trading city. Xuanzang is said to have preached to its king, who did not then follow Buddhism." },
  { no: 7, name: "Bamiyan", label: "Bamiyan", lon: 67.83, lat: 34.82, side: "left", note: "Xuanzang recorded the gigantic golden standing Buddhas carved into the cliff. They were destroyed in 2001." },
  { no: 8, name: "Gandhara", label: "Gandhara", lon: 71.58, lat: 34.01, side: "bottom", note: "The center of Buddhist art where images of the Buddha were first made (in modern northwestern Pakistan); by Xuanzang’s time it was already in decline." },
  { no: 9, name: "Nalanda", label: "Nalanda", lon: 85.44, lat: 25.13, side: "right", note: "The greatest center of Buddhist learning in India, with thousands of monks. Xuanzang studied for about five years under the eminent Śīlabhadra, then traveled across India." },
  { no: 10, name: "Kannauj", label: "Kannauj", lon: 79.92, lat: 27.05, side: "left", note: "At a great debate held by King Harsha, who had united northern India, Xuanzang served as chief debater and won renown." },
  { no: 11, name: "Khotan", label: "Khotan", lon: 79.92, lat: 37.11, side: "bottom", note: "On the way home he sent a memorial to Taizong asking pardon for having broken the ban on leaving the country, and waited for an answer. Taizong replied that he would welcome his return." },
];

const COMPARE = [
  ["Departure", "Travel abroad was forbidden, and he crossed the frontier secretly without permission.", "Called “imperial brother” by Taizong and sent off with the whole nation’s blessing."],
  ["Companions", "Essentially alone; he hired guides and attendants in each region and parted from them along the way.", "Sun Wukong, Zhu Bajie, Sha Wujing and the white dragon horse protect him all the way."],
  ["Hardships", "Thirst in the desert, the danger of freezing in the mountains, attacks by bandits — the hardships of nature and of men.", "The “eighty-one ordeals” at the hands of demons and monster kings who want to eat his flesh."],
  ["Duration", "About seventeen years, 629 (or 627) to 645, much of it spent studying in India.", "A fourteen-year journey; the scriptures are handed over as soon as he reaches Vulture Peak."],
  ["Scriptures", "He brought back 657 texts and spent nineteen years after his return translating them.", "He receives 5,048 scrolls from the Buddha and delivers them to Tang China riding on clouds."],
];

const VERSIONS = [
  { name: "Great Tang Records on the Western Regions and the Biography of the Tripitaka Master", note: "Tang dynasty. The account of the journey told by Xuanzang, and the biography written by his disciples Huili and Yancong. They record history, but the biography already contains miraculous episodes." },
  { name: "The Tale of How Tripitaka of the Great Tang Fetched the Scriptures", note: "A storyteller’s text believed to be a Southern Song printing. A monkey “pilgrim,” disguised as a scholar in white, protects Tripitaka, and a deity who prefigures Sha Wujing appears — but there is no Zhu Bajie yet." },
  { name: "Yuan plays and pinghua", note: "In drama (zaju) and storytellers’ scripts (pinghua), Zhu Bajie joins and the full company takes shape. The pinghua is lost, but fragments survive in the Ming Yongle Encyclopedia and in a Korean textbook of colloquial Chinese." },
  { name: "The 100-chapter version (Shidetang edition)", note: "The oldest surviving 100-chapter version, published in 1592 by the Shidetang bookshop in Nanjing. It names no author." },
  { name: "Qing revisions", note: "Xiyou zhengdao shu (1663) added, as chapter 9, the story of Tripitaka’s birth — his father murdered and the infant set adrift on a river. Most modern editions follow this form." },
];

const JAPAN = [
  { era: "Edo period", title: "Translations and illustrated books", body: "A translation was published from the mid-18th century, extended with sequels and widely read. The illustrated Ehon Saiyūki was also popular, and Sun Wukong often appeared in ukiyo-e prints." },
  { era: "Shōwa era", title: "Literature, manga and anime", body: "Nakajima Atsushi wrote two stories with Sha Wujing as their hero, a figure troubled about how to live. Tezuka Osamu’s manga Boku no Son Gokū became the basis for Toei’s 1960 animated feature, released in English as Alakazam the Great." },
  { era: "From 1978", title: "The television drama Saiyūki", body: "Nippon TV’s drama Saiyūki — shown abroad as Monkey — was a huge hit, with Sakai Masaaki as Sun Wukong and Natsume Masako as Tripitaka. The image of Tripitaka played by a woman took hold with this series and carried over to Fuji TV’s 2006 version. Its ending theme, Godiego’s “Gandhara,” sings of the Buddhist land Xuanzang himself visited." },
  { era: "From 1984", title: "Dragon Ball", body: "Toriyama Akira’s manga Dragon Ball began as a riff on Journey to the West. The hero’s name Son Goku, his extending staff and his flying cloud all come from the novel, and the pig Oolong recalls Zhu Bajie." },
];

const FAQ = [
  { q: "Is Journey to the West a true story?", a: "It is historical fact that the Tang monk Xuanzang defied a ban on foreign travel in the 7th century to journey to India and brought back many scriptures. But Sun Wukong, Zhu Bajie, Sha Wujing and the battles with demons are fiction that grew over the centuries after his death through storytelling and drama. In reality Xuanzang traveled almost alone." },
  { q: "Is “Tripitaka” a name?", a: "It is a title, not a name. A monk versed in the “three baskets” (tripitaka) of Buddhist scripture — sutras (teachings), vinaya (monastic rules) and abhidharma (commentary) — was called a Tripitaka master, and there were many besides Xuanzang, such as Kumarajiva. In East Asia, though, the title most often refers to Xuanzang." },
  { q: "Why is Sha Wujing shown as a kappa in Japan?", a: "In the novel Sha Wujing is a demon who lives in a river, the River of Flowing Sands — not a kappa. Because he is a river demon, Japanese adaptations identified him with the kappa, a familiar water spirit of Japanese folklore, and that image spread through television dramas and manga. In China he is usually drawn as a monk wearing a necklace of skulls." },
  { q: "Was Sun Wukong based on anyone?", a: "No one knows for sure. One theory (Hu Shi and others) traces him to Hanuman, the monkey god of the Indian epic Ramayana; another (Lu Xun and others) to Wuzhiqi, a monkey-like water monster of the Huai River in old Chinese legend." },
  { q: "Where are the “India” and “Vulture Peak” of the story?", a: "Tianzhu, the name used in the novel, is an old Chinese name for India. Vulture Peak is thought to be based on Gridhrakuta in India, where the Buddha is said to have preached — not far from Nalanda, where Xuanzang studied." },
];

function RouteMap() {
  const pts = (route) => route.map(([lon, lat]) => project(lon, lat).join(",")).join(" ");
  const pos = (x, y, side) => {
    if (side === "right") return { x: x + 5.4, y: y + 2, anchor: "start" };
    if (side === "left") return { x: x - 5.4, y: y + 2, anchor: "end" };
    if (side === "top") return { x, y: y - 5.6, anchor: "middle" };
    return { x, y: y + 9.6, anchor: "middle" };
  };
  return (
    <div style={{ ...cardStyle, padding: 16, marginBottom: 16 }}>
      <p style={{ fontSize: 12, color: COLORS.inkSoft, marginBottom: 10 }}>A map based on real coastlines. The solid red line shows the approximate outward route, the dashed green line the return, and the numbers the places below.</p>
      <svg viewBox="420 36 330 164" style={{ width: "100%", maxHeight: 460, display: "block", margin: "0 auto" }} role="img" aria-label="Map of Xuanzang’s route">
        <path d={WORLD_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="0.6" strokeLinejoin="round" />
        <polyline points={pts(RETURN)} fill="none" stroke={COLORS.jade} strokeWidth="1.2" strokeDasharray="3 2" strokeLinejoin="round" />
        <polyline points={pts(OUTBOUND)} fill="none" stroke={COLORS.vermilionSoft} strokeWidth="1.4" strokeLinejoin="round" />
        {PLACES.map((p) => {
          const [x, y] = project(p.lon, p.lat);
          const l = pos(x, y, p.side);
          return (
            <a key={p.no} href={`#place-${p.no}`}>
              <circle cx={x} cy={y} r="3.8" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="0.6" />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="central" style={{ ...serif, fontSize: 4.4, fontWeight: 700, fill: "#FBF8F0" }}>{p.no}</text>
              <text x={l.x} y={l.y} textAnchor={l.anchor} style={{ ...serif, fontSize: 6, fontWeight: 700, fill: COLORS.ink }}>{p.label}</text>
            </a>
          );
        })}
      </svg>
    </div>
  );
}

function Figure({ imageUrl, alt, caption, credit, height = 220 }) {
  return (
    <figure style={{ ...cardStyle, marginBottom: 16 }}>
      <div className="flex items-center justify-center" style={{ width: "100%", height, backgroundColor: "#EFE7D0", overflow: "hidden" }}>
        <HeritageThumb imageUrl={imageUrl} name={alt} type="building" />
      </div>
      <figcaption style={{ fontSize: 11, color: COLORS.inkSoft, padding: "8px 12px" }}>{caption}{credit && <span style={{ color: COLORS.mist }}> — {credit}</span>}</figcaption>
    </figure>
  );
}

export default function EnglishSaiyukiPage() {
  return (
    <FeaturePage
      title="Journey to the West"
      jaPath="/saiyuki"
      intro="Journey to the West (Xiyou ji) is a long novel in which the Tang monk Tripitaka, escorted by three disciples — Sun Wukong, Zhu Bajie and Sha Wujing — makes his way through one demon attack after another to fetch the Buddhist scriptures from India. It took its 100-chapter form in the 16th century under the Ming, and is counted among China’s Four Great Classical Novels alongside Romance of the Three Kingdoms, Water Margin and Dream of the Red Chamber. Behind it lies the real journey of Xuanzang, a Tang monk who traveled to India. This page covers the plot, characters and famous episodes, then follows Xuanzang’s route and how history differs from the novel."
      related={[
        { href: "/en/eras/tang", label: "The Tang dynasty" },
        { href: "/en/silk-road", label: "The Silk Road" },
        { href: "/en/four-great-novels", label: "The Four Great Classical Novels" },
        { href: "/en/suikoden", label: "Water Margin" },
        { href: "/en/wuxia-games", label: "Black Myth: Wukong and other games" },
      ]}
    >
      <Figure imageUrl={commons("Journey to the West at Long Corridor.JPG")} alt="Tripitaka and his three disciples"
        caption="Tripitaka with Wukong, Bajie and Wujing — said to show the White Bone Demon story, as Tripitaka sends Wukong away (Long Corridor, Summer Palace, Beijing)" credit="Wikimedia Commons (public domain)" />

      <Section title="The story">
        <div className="flex flex-col gap-3">
          {STORY.map((s) => (
            <div key={s.no} className="flex gap-3 p-4" style={cardStyle}>
              <NumberBadge n={s.no} />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink }}>{s.title}</span>
                  <span style={{ fontSize: 12, color: COLORS.gold }}>{s.range}</span>
                </div>
                <p style={{ ...bodyText, marginTop: 6 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Main characters">
        {PEOPLE.map((g) => (
          <div key={g.side} style={{ marginBottom: 20 }}>
            <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: g.color, marginBottom: 8 }}>{g.side}</div>
            <div className="flex flex-col gap-3">
              {g.list.map((p) => (
                <div key={p.name} className="flex gap-3 p-3" style={cardStyle}>
                  {p.img?.imageUrl && (
                    <div className="flex items-center justify-center shrink-0" style={{ width: 72, height: 72, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}>
                      <HeritageThumb imageUrl={p.img.imageUrl} name={p.name} type="figure" objectPosition="top" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div style={{ ...serif, fontSize: 16, fontWeight: 700, color: COLORS.ink }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: g.color, marginTop: 2 }}>{p.role}</div>
                    <p style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 4 }}>{p.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {XUANZANG?.credit && <p style={{ fontSize: 10.5, color: COLORS.mist }}>Portrait of Xuanzang: {XUANZANG.credit}</p>}
      </Section>

      <Section title="Famous episodes">
        <div className="grid sm:grid-cols-2 gap-3">
          {EPISODES.map((e) => <NoteCard key={e.title} title={`${e.title} (${e.range})`}>{e.body}</NoteCard>)}
        </div>
      </Section>

      <Section title="Timeline: Xuanzang’s life and the making of the novel"><FlowList items={FLOW} /></Section>

      <Section title="Following Xuanzang’s journey" id="journey">
        <Paras items={[
          "As he studied in different parts of China, Xuanzang came to see that the Buddhist scriptures then available in Chinese were full of mistranslations and contradictions, and resolved to study the originals in India, where Buddhism was born. But the young Tang dynasty forbade travel abroad, and permission was refused. In 629 Xuanzang secretly left Chang’an.",
          "Through the oasis states of the Western Regions, over the Tianshan, across Central Asia and over the Hindu Kush into India he went. After studying at Nalanda and traveling across India, he returned over the Pamirs and along the southern edge of the Taklamakan Desert, reaching Chang’an in 645. The round trip took some seventeen years, and the countries he visited are said to have numbered 110.",
        ]} />
        <div style={{ marginTop: 16 }}><RouteMap /></div>
        <div className="flex flex-col gap-2">
          {PLACES.map((p) => (
            <div key={p.no} id={`place-${p.no}`} className="flex gap-3 px-4 py-3" style={{ ...cardStyle, scrollMarginTop: 16 }}>
              <NumberBadge n={p.no} />
              <div>
                <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{p.name}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.7, color: COLORS.inkSoft }}>{p.note}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 12 }}>
          Oasis cities on Xuanzang’s route, such as Gaochang and Kucha, also appear on <Link href="/en/silk-road" style={{ color: COLORS.vermilion }}>The Silk Road</Link>.
        </p>
      </Section>

      <Section title="The historical Xuanzang and the novel" id="history-vs-legend">
        <Paras items={[
          "Far from punishing Xuanzang for breaking the ban, Emperor Taizong received him with honor on his return. Eager for information about the west, Taizong ordered him to write an account of his travels; his disciple Bianji took down what Xuanzang told him, and in 646 the Great Tang Records on the Western Regions was complete. Describing the geography, climate, customs and Buddhism of each country, it is a primary source for 7th-century Central Asia and India.",
          "The biography his disciples compiled after his death, however, also records marvels — visions of phantom armies in the desert, escapes from danger by praying to Guanyin. As such tales were retold, the journey turned into an adventure story full of gods, buddhas and demons.",
        ]} />
        <div style={{ marginTop: 12 }}>
          <DataTable head={["", "History (Great Tang Records and other sources)", "The novel Journey to the West"]} rows={COMPARE} />
        </div>
        <div className="grid sm:grid-cols-2 gap-3" style={{ marginTop: 16 }}>
          <Figure imageUrl={commons("Xuanzang returned from India. Dunhuang mural, Cave 103. High Tang period (712-765)..jpg")} alt="Dunhuang mural of Xuanzang returning from India" height={180}
            caption="A mural thought to show Xuanzang returning from India, Mogao Cave 103, Dunhuang (High Tang)" credit="Wikimedia Commons (public domain)" />
          <Figure imageUrl="https://commons.wikimedia.org/wiki/Special:FilePath/Giant_Wild_Goose_Pagoda.jpg" alt="Big Wild Goose Pagoda" height={180}
            caption="The Big Wild Goose Pagoda in Xi’an, built to house the scriptures Xuanzang brought back" credit="Photo: Alex Kwok / Wikimedia Commons, CC BY-SA 3.0" />
        </div>
      </Section>

      <Section title="How the novel took shape, and its author" id="versions">
        <Paras items={[
          "By the Song dynasty, Xuanzang’s journey was being told by storytellers in the entertainment quarters, and in those tellings a protector in the shape of a monkey appears. In Yuan drama and storytellers’ scripts Zhu Bajie and Sha Wujing joined, and in the 16th century, under the Ming, all this was brought together in the 100-chapter novel Journey to the West.",
          "Its author is generally said to be Wu Cheng’en (c. 1500–c. 1582), a man of letters from Huai’an in modern Jiangsu. But the Ming editions name no author; the attribution spread in the 20th century from a local record listing a “Journey to the West” among Wu Cheng’en’s works, and whether that entry refers to the novel is disputed.",
        ]} />
        <div className="flex flex-col gap-3" style={{ marginTop: 12 }}>
          {VERSIONS.map((v) => <NoteCard key={v.name} title={v.name}>{v.note}</NoteCard>)}
        </div>
      </Section>

      <Section title="Journey to the West in Japan">
        <div className="flex flex-col gap-3">
          {JAPAN.map((j) => <NoteCard key={j.title} title={`${j.title} (${j.era})`}>{j.body}</NoteCard>)}
        </div>
      </Section>

      <Section title="Common questions about Journey to the West">
        <div className="flex flex-col gap-3">
          {FAQ.map((f) => <NoteCard key={f.q} title={f.q}>{f.a}</NoteCard>)}
        </div>
        {TAIZONG?.href && (
          <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 12 }}>
            See also <Link href={TAIZONG.href} style={{ color: COLORS.vermilion }}>the life of Emperor Taizong of Tang</Link>.
          </p>
        )}
      </Section>
    </FeaturePage>
  );
}
