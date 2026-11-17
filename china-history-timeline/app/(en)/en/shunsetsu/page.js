import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, Paras, DataTable, FlowList, NoteCard, cardStyle, serif, bodyText } from "@/components/en/EnFeature";
import Link from "next/link";

const title = "Chinese New Year (Spring Festival): History, Customs and the 2027 Date";
const description =
  "Chinese New Year 2027 falls on 6 February. How Emperor Wu’s Taichu calendar fixed the date of the new year, how the name “Spring Festival” was born in the Republic of China, the origins of firecrackers, couplets, red envelopes and dumplings, and why Japan stopped celebrating the lunar new year.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/shunsetsu", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/shunsetsu", image: { title: "Chinese New Year", seal: "春" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const DATES = [
  ["2027", "Saturday 6 February", "Goat (丁未 dingwei)", "20 February"],
  ["2028", "Wednesday 26 January", "Monkey (戊申 wushen)", "9 February"],
  ["2029", "Tuesday 13 February", "Rooster (己酉 jiyou)", "27 February"],
  ["2030", "Sunday 3 February", "Dog (庚戌 gengxu)", "17 February"],
];

const HISTORY = [
  {
    year: "Shang & Zhou",
    title: "Year-end festivals of thanksgiving",
    note: "After the harvest, sacrifices were offered to gods and ancestors in thanks and in prayer for the next year’s crops — the distant roots of the new year festival. But the month that began the year differed by dynasty: the Zhou started it in what is now the 11th lunar month, the Qin in the 10th.",
    href: "/en/eras/westernzhou",
  },
  {
    year: "104 BC",
    title: "Emperor Wu’s Taichu calendar fixes the new year",
    note: "Emperor Wu of the Western Han adopted the new Taichu (“Grand Inception”) calendar and, following the legendary Xia dynasty, began the year with the month of the Tiger — today’s first lunar month. Dynasties came and went, but the new year has stayed in almost the same place for more than two thousand years since.",
    href: "/en/events/westernhan--3",
  },
  {
    year: "6th century",
    title: "The first record of firecrackers",
    note: "The Jingchu Suishiji, a record of the seasonal customs of the middle Yangtze, describes throwing bamboo onto a fire on the morning of New Year’s Day so that it bursts with a bang, to drive away evil spirits — the original “firecracker.” Gunpowder firecrackers came only after gunpowder was invented in the Tang and Song.",
    href: "/en/four-inventions",
  },
  {
    year: "Song dynasty",
    title: "A great urban celebration",
    note: "The Dongjing Meng Hua Lu, a memoir of life in the Northern Song capital Kaifeng, describes crowds in their best clothes filling the streets at the new year, with markets and gambling in full swing. Pasting poetic couplets on gateways is also said to have spread in this period.",
    href: "/en/eras/northernsong",
  },
  {
    year: "1914",
    title: "The name “Spring Festival” is born",
    note: "The Republic of China, founded in 1912, adopted the Gregorian calendar and made 1 January the official new year. People kept celebrating the lunar new year anyway, so in 1914 Yuan Shikai’s government named the first day of the lunar year the “Spring Festival” (Chunjie) and made it a holiday — the origin of the name.",
    href: "/en/events/roc--0",
  },
  {
    year: "1949 – today",
    title: "Cultural Revolution, then the Spring Festival Gala",
    note: "The People’s Republic kept the arrangement: 1 January is Yuandan, the lunar new year is Chunjie. During the Cultural Revolution the holiday was at times cancelled as an old custom, but it returned with Reform and Opening Up. CCTV’s Spring Festival Gala, first broadcast in 1983, is now a fixture of New Year’s Eve.",
    href: "/en/events/prc--2",
  },
];

const CUSTOMS = [
  ["Firecrackers and fireworks", "Loud bangs scare away evil. At midnight on New Year’s Eve they go off all at once across the country — though many cities now ban or restrict them because of air pollution and fire risk."],
  ["Spring couplets (chunlian)", "Pairs of auspicious lines written on red paper and pasted either side of the door. They grew out of peach-wood charms (taofu) hung against evil; the couplet written by Meng Chang, ruler of Later Shu in the Five Dynasties period, is traditionally called the oldest."],
  ["The upside-down “福”", "The character fu, “good fortune,” is often hung upside down. “Upside down” (倒 dào) sounds the same as “arrived” (到 dào), so it reads as “good fortune has arrived.”"],
  ["Red envelopes (hongbao)", "Money in red envelopes is given to children. Also called yasuiqian, “money to hold down the year,” it was once a charm to protect children at the turn of the year. Today digital hongbao sent by phone are just as popular."],
  ["Dumplings and niangao", "In the north, families make and eat jiaozi dumplings on New Year’s Eve; their shape recalls old silver ingots. In the south people eat niangao, a rice cake whose name sounds like “higher every year.”"],
  ["Fish", "Fish (鱼 yú) sounds the same as “surplus” (余 yú). A fish on the New Year’s Eve table carries the wish niannian you yu — “may there be plenty every year.”"],
  ["Chunyun, the travel rush", "The roughly forty days around the festival when people travel home. With billions of journeys, it is often called the largest annual human migration on Earth."],
  ["The Lantern Festival", "The 15th day of the first month closes the festival with lanterns and sweet glutinous rice balls (tangyuan or yuanxiao). The Nagasaki Lantern Festival in Japan grew out of this celebration."],
];

export default function EnglishShunsetsuPage() {
  return (
    <FeaturePage
      title="Chinese New Year (the Spring Festival)"
      jaPath="/shunsetsu"
      intro="Chinese New Year, or the Spring Festival (Chunjie), celebrates the first day of the traditional lunisolar calendar. Because each month of that calendar begins with a new moon, the date moves every year, falling somewhere between late January and mid-February. It is the most important holiday of the Chinese year: families gather for a reunion dinner on New Year’s Eve and welcome the year with firecrackers. This page gives the coming dates, the more than two-thousand-year history of the new year, and the origins of its customs."
      related={[
        { href: "/en/eto", label: "The Chinese Zodiac and the 60-Year Cycle" },
        { href: "/en/four-inventions", label: "The Four Great Inventions" },
        { href: "/en/japan-china-timeline", label: "Japan and China Timeline" },
      ]}
    >
      <div style={{ ...cardStyle, padding: "14px 18px", marginBottom: 24, borderLeft: `4px solid ${COLORS.gold}` }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.gold }}>Chinese New Year 2027</div>
        <div style={{ ...serif, fontSize: 22, fontWeight: 900, color: COLORS.ink, marginTop: 4 }}>Saturday 6 February — Year of the Goat</div>
        <p style={{ ...bodyText, fontSize: 13.5, marginTop: 6 }}>
          New Year’s Eve (Chuxi) is Friday 5 February. Since 2025 China’s statutory holiday has been four days including New Year’s Eve; combined with weekends and swapped working days, the break usually runs to around eight or nine days. The official schedule is announced by China’s State Council, normally in the autumn or winter of the year before.
        </p>
      </div>

      <Section title="Dates of Chinese New Year">
        <DataTable head={["Year", "New Year’s Day (1st day, 1st lunar month)", "Zodiac", "Lantern Festival"]} rows={DATES} />
        <p style={{ ...bodyText, fontSize: 13, marginTop: 10 }}>
          In China the new zodiac animal is usually reckoned from New Year’s Day. How the twelve animals and the 60-year cycle work is explained in{" "}
          <Link href="/en/eto" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>The Chinese Zodiac and the 60-Year Cycle</Link>.
        </p>
      </Section>

      <Section title="A short history of the new year">
        <FlowList items={HISTORY} />
      </Section>

      <Section title="The legend of Nian, the new year monster">
        <Paras
          items={[
            "The best-known story behind the customs is that of Nian, a beast that attacked villages every New Year’s Eve. Nian feared the colour red, loud noises and firelight, so people pasted up red paper, set off firecrackers and kept lights burning all night — the origin, so the story goes, of the couplets, the firecrackers and shousui, staying up to see the year in.",
            "The tale does not appear in old texts, however, and is thought to be a folk story that spread in modern times — perhaps born from the phrase guonian, “getting past the year,” the everyday word for celebrating the new year.",
          ]}
        />
      </Section>

      <Section title="Customs and what they mean">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CUSTOMS.map(([name, body]) => (
            <NoteCard key={name} title={name}>{body}</NoteCard>
          ))}
        </div>
      </Section>

      <Section title="Why doesn’t Japan celebrate the lunar new year?">
        <Paras
          items={[
            "Japan once celebrated the new year by the same lunisolar calendar as China. But in 1872 the Meiji government abruptly announced a calendar reform: the 3rd day of the 12th month of Meiji 5 became 1 January of Meiji 6, and Japan switched to the Gregorian calendar. It was part of modernisation on Western lines, and it is also said to have saved the government a month of officials’ salaries. Since then New Year in Japan has been 1 January, and lunar new year customs have all but vanished outside a few regions.",
            "Today the best places to experience the Spring Festival in Japan are the Chinese New Year festivals of Yokohama Chinatown and Kobe’s Nankinmachi, and the Nagasaki Lantern Festival. Elsewhere in Asia the lunar new year remains the biggest holiday of the year — Seollal in Korea and Tết in Vietnam.",
          ]}
        />
      </Section>
    </FeaturePage>
  );
}
