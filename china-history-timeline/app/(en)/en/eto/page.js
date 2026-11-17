import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, Paras, DataTable, ItemCard, cardStyle, serif, bodyText, eventLink } from "@/components/en/EnFeature";
import { EtoCalculator } from "@/components/EtoCalculator";
import Link from "next/link";

const title = "The Chinese Zodiac and the 60-Year Cycle: Origins, History and 2027, the Year of the Goat";
const description =
  "Where do the twelve animals of the Chinese zodiac come from? How the ten Heavenly Stems and twelve Earthly Branches make a 60-year cycle first recorded on Shang oracle bones, famous events named after their year, and 2027, the Year of the Goat (dingwei). With a year calculator.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/eto", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/eto", image: { title: "The Chinese Zodiac", seal: "支" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const STEMS = [
  ["甲", "jiǎ", "Wood", "yang"], ["乙", "yǐ", "Wood", "yin"], ["丙", "bǐng", "Fire", "yang"], ["丁", "dīng", "Fire", "yin"], ["戊", "wù", "Earth", "yang"],
  ["己", "jǐ", "Earth", "yin"], ["庚", "gēng", "Metal", "yang"], ["辛", "xīn", "Metal", "yin"], ["壬", "rén", "Water", "yang"], ["癸", "guǐ", "Water", "yin"],
];

const BRANCHES = [
  ["子", "zǐ", "Rat", "11 pm – 1 am", "North"],
  ["丑", "chǒu", "Ox", "1 – 3 am", "NNE"],
  ["寅", "yín", "Tiger", "3 – 5 am", "ENE"],
  ["卯", "mǎo", "Rabbit", "5 – 7 am", "East"],
  ["辰", "chén", "Dragon", "7 – 9 am", "ESE"],
  ["巳", "sì", "Snake", "9 – 11 am", "SSE"],
  ["午", "wǔ", "Horse", "11 am – 1 pm", "South"],
  ["未", "wèi", "Goat (Sheep)", "1 – 3 pm", "SSW"],
  ["申", "shēn", "Monkey", "3 – 5 pm", "WSW"],
  ["酉", "yǒu", "Rooster", "5 – 7 pm", "West"],
  ["戌", "xū", "Dog", "7 – 9 pm", "WNW"],
  ["亥", "hài", "Pig", "9 – 11 pm", "NNW"],
];

const EVENTS = [
  {
    name: "The Yellow Turban Rebellion",
    meta: "184 · 甲子 jiazi",
    body: "Zhang Jue of the Way of Great Peace rose in revolt with the slogan “The Blue Heaven is dead, the Yellow Heaven shall rise; the year is jiazi, and all under heaven will prosper.” Jiazi, the first year of the 60-year cycle, was seen as the start of a new age. The rebellion fatally weakened the Eastern Han and opened the road to the Three Kingdoms.",
    links: eventLink("easternhan--4", "Read the event"),
  },
  {
    name: "The Jinshin War (Japan)",
    meta: "672 · 壬申 renshen (Japanese: jinshin)",
    body: "The largest civil war of ancient Japan, fought over the throne after the death of Emperor Tenji, is named after its year. Japan adopted the Chinese habit of naming great events by the sexagenary year.",
    links: [{ href: "/en/japan-china-timeline", label: "Japan and China: A Comparative Timeline" }],
  },
  {
    name: "The First Sino-Japanese War",
    meta: "1894 · 甲午 jiawu",
    body: "The war between Japan and the Qing over Korea is still called the “Jiawu War” in China. The peasant uprising in Korea that same year is likewise known as the Gabo (jiawu) Peasant Revolution.",
    links: eventLink("qing--4", "Read the event"),
  },
  {
    name: "The Hundred Days’ Reform",
    meta: "1898 · 戊戌 wuxu",
    body: "After defeat by Japan, the Guangxu Emperor and Kang Youwei launched reforms modelled partly on Japan’s Meiji Restoration. Empress Dowager Cixi’s coup — the “Wuxu Coup” — ended them after about a hundred days.",
    links: [{ href: "/en/eras/qing", label: "The Qing dynasty" }],
  },
  {
    name: "The Boxer Rebellion",
    meta: "1900 · 庚子 gengzi",
    body: "The Boxers, under the slogan “Support the Qing, destroy the foreign,” besieged the legations in Beijing, and an eight-nation force including Japan marched on the city. The Boxer Protocol signed the next year, 1901, is known in China as the Xinchou (辛丑) Treaty.",
    links: eventLink("qing--5", "Read the event"),
  },
  {
    name: "The Xinhai Revolution",
    meta: "1911 · 辛亥 xinhai",
    body: "The Wuchang Uprising set off a wave of provinces declaring independence from the Qing; the Republic of China was founded the next year, ending more than two thousand years of imperial rule. It is the most famous year name in modern Chinese history.",
    links: eventLink("qing--6", "Read the event"),
  },
];

export default function EnglishEtoPage() {
  return (
    <FeaturePage
      title="The Chinese Zodiac and the 60-Year Cycle"
      jaPath="/eto"
      intro="The twelve animals of the Chinese zodiac are only half of a much older system. Combined with ten “Heavenly Stems,” the twelve “Earthly Branches” form a cycle of sixty named years — the ganzhi or sexagenary cycle. It was already in use more than 3,000 years ago under the Shang dynasty to count days, and over time came to name years, months, hours and compass directions. This page explains how the cycle works, where the animals came from, and the famous events in history that are still known by the name of their year."
      related={[
        { href: "/en/shunsetsu", label: "Chinese New Year: History and Customs" },
        { href: "/en/year-mnemonics", label: "Key Dates in Chinese History" },
        { href: "/en/japan-china-timeline", label: "Japan and China Timeline" },
      ]}
    >
      <div style={{ ...cardStyle, padding: "14px 18px", marginBottom: 24, borderLeft: `4px solid ${COLORS.gold}` }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.gold }}>The year 2027</div>
        <div style={{ ...serif, fontSize: 22, fontWeight: 900, color: COLORS.ink, marginTop: 4 }}>丁未 dīngwèi — the Year of the Goat</div>
        <p style={{ ...bodyText, fontSize: 13.5, marginTop: 6 }}>
          The Year of the Goat begins with Chinese New Year on 6 February 2027. 2026 was 丙午 bingwu (Horse) and 2028 will be 戊申 wushen (Monkey). The previous dingwei year was 1967; the next will be 2087.
        </p>
      </div>

      <Section title="Find the year name and animal for any year">
        <EtoCalculator defaultYear={2027} lang="en" />
      </Section>

      <Section title="How the cycle works: stems and branches">
        <Paras
          items={[
            "The ten Heavenly Stems are 甲, 乙, 丙, 丁… and the twelve Earthly Branches are 子, 丑, 寅, 卯…. Pairing them off one step at a time — jiazi, yichou, bingyin… — you return to the start only after sixty steps, the least common multiple of 10 and 12. The sixtieth is guihai, after which jiazi comes round again. This is why a 60th birthday has long been celebrated in China, Japan and Korea as completing a full cycle of life.",
            "The stems were later matched to the five phases of yin–yang theory (Wood, Fire, Earth, Metal, Water), two to each phase, one yang and one yin. That is why 2027 is sometimes called the year of the “Fire Goat.”",
          ]}
        />
        <div className="flex flex-col gap-4 mt-4">
          <DataTable head={["Stem", "Pinyin", "Phase", "Yin/yang"]} rows={STEMS.map((s) => [s[0], s[1], s[2], s[3]])} />
          <DataTable head={["Branch", "Pinyin", "Animal", "Double hour", "Direction"]} rows={BRANCHES.map((b) => [b[0], b[1], b[2], b[3], b[4]])} />
        </div>
        <p style={{ ...bodyText, marginTop: 12 }}>
          The branches also divided the day into twelve “double hours.” In Japanese, noon is still called shōgo (正午), “exactly at the Horse hour,” and a.m. and p.m. are gozen and gogo — “before the Horse” and “after the Horse.”
        </p>
      </Section>

      <Section title="It began on Shang oracle bones">
        <Paras
          items={[
            "The oldest records of the cycle are the oracle bone inscriptions of the Shang dynasty, in which kings recorded divinations on turtle shells and ox bones. The Shang counted days with the sixty stem-branch names, and bones carved with a complete table of all sixty — from jiazi to guihai — have been found. Even the names of Shang kings, such as Tai Jia and Di Xin, contain stem characters.",
            "Using the cycle to name years came much later, under the Han. Before that, years were also counted by the position of Jupiter (the “year star”), which takes about twelve years to circle the sky; one theory links the twelve branches to this twelve-year orbit.",
          ]}
        />
        <div className="mt-3 flex flex-wrap gap-x-4" style={{ fontSize: 13 }}>
          {eventLink("shang--2", "Read: the use of oracle bone script").map((l) => (
            <Link key={l.href} href={l.href} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>{l.label} →</Link>
          ))}
        </div>
      </Section>

      <Section title="Why animals?">
        <Paras
          items={[
            "The characters 子, 丑, 寅… did not originally mean animals at all. One of the earliest pairings of branches with animals appears in the Daybooks (rishu), almanacs for divination found among the Shuihudi bamboo slips, excavated in Hubei in 1975 and dating from the end of the Warring States into the Qin; some of their animals differ from today’s. The familiar set of twelve is first listed in full in the Lunheng by the Eastern Han scholar Wang Chong. A common explanation is that familiar animals made the system easy to remember for people who could not read.",
            "The story of the great race to the Jade Emperor — in which the Rat wins by riding on the Ox, and the Cat is left out — is a much later folk tale. The animals also vary by country: in Vietnam the Cat replaces the Rabbit, and in Japan the Pig is a wild boar.",
          ]}
        />
      </Section>

      <Section title="Events named after their year">
        <p style={{ ...bodyText, marginBottom: 12 }}>
          In China, Japan and Korea, great events are often known simply by the sexagenary name of the year they happened in. Many names that look puzzling in English textbooks are in fact year names.
        </p>
        <div className="flex flex-col gap-3">
          {EVENTS.map((ev) => (
            <ItemCard key={ev.name} title={ev.name} meta={ev.meta} links={ev.links}>
              {ev.body}
            </ItemCard>
          ))}
        </div>
        <p style={{ ...bodyText, marginTop: 12 }}>
          Japan has many more: the Boshin War of 1868 (戊辰 wuchen), and Koshien Stadium, home of Japan’s high-school baseball championship, named after the jiazi (kōshi) year 1924 in which it opened.
        </p>
      </Section>

      <Section title="The cycle in Japan, and the “Fire Horse” superstition">
        <Paras
          items={[
            "The cycle reached Japan together with the Chinese calendar by way of Korea. The Nihon Shoki records that calendar experts were sent from the Korean kingdom of Baekje in the 6th century, and that the Baekje monk Kwalleuk brought calendar books in 602.",
            "In Japan a superstition spread during the Edo period that women born in a hinoe-uma (丙午, “Fire Horse”) year are hot-tempered and dangerous to marry. In the last Fire Horse year, 1966, the number of births in Japan fell by about 25% from the year before. The belief is purely Japanese — it does not exist in China. 2026 was the first Fire Horse year in sixty years.",
          ]}
        />
      </Section>

      <Section title="When does the zodiac year begin?">
        <Paras
          items={[
            "In Japan the year name changes on 1 January, but in China the new animal year is usually reckoned from Chinese New Year — in 2027, 6 February. In fortune-telling and the traditional almanac, the year is often taken to change at Lichun, the “beginning of spring” in the 24 solar terms, around 4 February. Anyone born in January or early February should check which side of the line their birthday falls on.",
          ]}
        />
      </Section>
    </FeaturePage>
  );
}
