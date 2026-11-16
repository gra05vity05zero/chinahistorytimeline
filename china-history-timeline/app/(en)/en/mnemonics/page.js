import Link from "next/link";
import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, ERAS_EN, displayPeriodEn } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, Paras, NoteCard, DataTable, cardStyle, serif } from "@/components/en/EnFeature";

const title = "How to Remember the Chinese Dynasties in Order: A Song, a List and Memory Tips";
const description =
  "Remember the Chinese dynasties in order, from the Shang and Zhou to the People’s Republic: the classic dynasty song, the core list of ten, how to keep the Five Dynasties straight, and tips for the periods students most often confuse.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/mnemonics", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/mnemonics", image: { title: "How to Remember the Dynasties", seal: "憶" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const CHANT = [
  ["Shang", "oracle bones, bronze"], ["Zhou", "fengjian “feudalism”"], ["Qin", "first unification"], ["Han", "long stability"],
  ["Three Kingdoms", "Wei, Shu, Wu"], ["Jin", "brief reunification"], ["Northern & Southern", "division"], ["Sui", "reunification"],
  ["Tang", "long stability"], ["Five Dynasties", "division again"], ["Song", "civil government"], ["Yuan", "Mongols"],
  ["Ming", "Han Chinese restored"], ["Qing", "Manchus"],
];

const WUDAI = [
  ["Later Liang", "907–923"], ["Later Tang", "923–936"], ["Later Jin", "936–947"], ["Later Han", "947–950"], ["Later Zhou", "951–960"],
];

const TIPS = [
  { h: "Shang and Zhou", b: "Pair the Shang with oracle-bone writing and bronzes, and the Zhou with fengjian — granting land to kinsmen and followers — and they are easy to tell apart." },
  { h: "Spring and Autumn and Warring States", b: "These are just the first and second halves of the age when Zhou authority faded. Think of them as one process — lords breaking away from the Zhou, early (Spring and Autumn) and late (Warring States) — and there’s nothing separate to memorize." },
  { h: "Qin and Han", b: "The Qin first unified China but collapsed barely fifteen years after the First Emperor’s death. The pattern — a short-lived unifying dynasty followed by a long, stable one — repeats with the Sui and Tang." },
  { h: "Western Han, Xin, Eastern Han", b: "The Han is interrupted once, by Wang Mang’s Xin. Picture the short Xin sandwiched in the middle of the long Han, and you won’t mix up the order of the Western and Eastern Han." },
  { h: "Three Kingdoms and Jin", b: "After the Eastern Han fell, Wei, Wu and Shu stood side by side (the age of the Romance of the Three Kingdoms); in the end the Sima family, who took control of Wei, briefly unified China as the Jin (Western Jin)." },
  { h: "Sixteen Kingdoms, Eastern Jin, Northern and Southern Dynasties", b: "When the Western Jin collapsed under invasions from the north, many states of non-Han peoples rose in the north (the Sixteen Kingdoms), while the Jin house fled south and founded the Eastern Jin. That north–south split runs straight on into the Northern and Southern Dynasties." },
  { h: "Sui and Tang", b: "The Sui reunified the divided north and south — but, like the Qin, it was short-lived. The Tang that followed lasted about three hundred years." },
  { h: "Five Dynasties and Ten Kingdoms", b: "After the Tang fell, China split again. Keep in mind the rhythm of Chinese history — a period of division always follows a unifying dynasty — and the move from Tang to the Five Dynasties and Ten Kingdoms comes naturally." },
  { h: "Northern and Southern Song", b: "The Song lost North China to the Jurchen Jin and moved its capital south. With the capital in the north it is the Northern Song; after the move, the Southern Song — just follow the compass." },
  { h: "Yuan, Ming, Qing", b: "After the Mongol Yuan ruled all of China, the Han Chinese took back the throne with the Ming, and then the Manchu Qing overthrew the Ming. Notice the ruling people alternating — Mongol, Han, Manchu — and it sticks." },
  { h: "Republic of China and People’s Republic", b: "The 1911 Revolution brought down the Qing and created the Republic of China; after the civil war between the Nationalists and Communists, the People’s Republic was founded in 1949. These are modern states, not dynasties, so learn them through the flow of events rather than a rhyme." },
];

export default function EnglishMnemonicsPage() {
  return (
    <FeaturePage
      title="How to Remember the Chinese Dynasties"
      jaPath="/mnemonics"
      intro="Putting the Chinese dynasties in the right order is a classic stumbling block. Start with the song below to fix the sequence from the Shang to the Qing, then use the list and the memory tips to make it stick."
      related={[
        { href: "/en/year-mnemonics", label: "Key dates in Chinese history" },
        { href: "/en/quiz", label: "Chinese history quiz" },
        { href: "/en/printable-timeline", label: "Printable timeline" },
        { href: "/en/glossary", label: "Glossary of Chinese history" },
      ]}
    >
      <Section title="The dynasty song">
        <Paras items={["A well-known way to learn the order is to sing the dynasties to the tune of “Frère Jacques” (“Are you sleeping, Brother John?”):"]} />
        <div className="p-4" style={{ ...cardStyle, marginTop: 12, ...serif, fontSize: 17, lineHeight: 2, color: COLORS.ink, textAlign: "center" }}>
          Shang, Zhou, Qin, Han — Shang, Zhou, Qin, Han<br />
          Sui, Tang, Song — Sui, Tang, Song<br />
          Yuan, Ming, Qing, Republic — Yuan, Ming, Qing, Republic<br />
          Mao Zedong — Deng Xiaoping
        </div>
        <p style={{ fontSize: 12.5, color: COLORS.inkSoft, marginTop: 8 }}>The song skips the periods of division (Three Kingdoms, Jin, Northern and Southern Dynasties, Five Dynasties). Here is the fuller sequence, with a hook for each:</p>
        <div className="flex flex-wrap gap-2" style={{ marginTop: 12 }}>
          {CHANT.map(([n, note], i) => (
            <div key={n} className="px-3 py-2" style={{ ...cardStyle, minWidth: 120 }}>
              <div style={{ fontSize: 11, color: COLORS.gold }}>{i + 1}</div>
              <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{n}</div>
              <div style={{ fontSize: 11.5, color: COLORS.inkSoft }}>{note}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 10 }}>The prehistoric cultures and the Xia, Wang Mang’s short-lived Xin, the Sixteen Kingdoms and Eastern Jin, the Ten Kingdoms, and the Republic and People’s Republic are folded into their neighbors here; see the list and tips below for where they fit.</p>
      </Section>

      <Section title="Start with these ten">
        <div className="p-4" style={{ ...cardStyle, ...serif, fontSize: 18, fontWeight: 700, color: COLORS.vermilion, textAlign: "center" }}>Shang · Zhou · Qin · Han · Sui · Tang · Song · Yuan · Ming · Qing</div>
        <div style={{ marginTop: 12 }}>
          <Paras items={[
            "Most introductory courses mention roughly these ten dynasties: the sequence above minus the Three Kingdoms, Jin, Northern and Southern Dynasties and Five Dynasties. Learn these first.",
            "Linking them to world history helps them stick: the Han was Rome’s contemporary at the other end of the Silk Road; the Tang flourished as Islam spread west; the Song invented printing with movable type, gunpowder weapons and the compass; the Yuan was part of the Mongol Empire that Marco Polo described; the Ming sent Zheng He’s fleets across the Indian Ocean; the Qing fought the Opium Wars with Britain.",
          ]} />
        </div>
      </Section>

      <Section title="Remembering the Five Dynasties and Ten Kingdoms">
        <DataTable head={["Dynasty", "Years"]} rows={WUDAI} />
        <div style={{ marginTop: 12 }}>
          <Paras items={[
            "The Five Dynasties were the five regimes that followed one another in North China in the roughly fifty years between the fall of the Tang in 907 and the founding of the Song in 960. All carry the prefix “Later,” so the standard trick is to drop it and chant “Liang, Tang, Jin, Han, Zhou.” Tang, Jin, Han and Zhou are all names of earlier dynasties — think of them as borrowed names, and they’re easy to recall.",
            "The Ten Kingdoms were regional states, mostly in the south, at the same time: Wu, Southern Tang, Wuyue, Min, Chu, Southern Han, Former Shu, Later Shu, Jingnan and Northern Han. You’re rarely asked to list them all in order — it’s enough to know that the Five Dynasties were a succession of regimes in the north, and the Ten Kingdoms regional states side by side, mainly in the south.",
          ]} />
        </div>
        <Link href="/en/eras/wudai" style={{ fontSize: 13, color: COLORS.vermilion }}>Read about the Five Dynasties and Ten Kingdoms →</Link>
      </Section>

      <Section title={`All the periods on this timeline (${ERAS_EN.length})`}>
        <div className="flex flex-col gap-1.5">
          {ERAS_EN.map((era, i) => (
            <Link key={era.id} href={`/en/eras/${era.id}`} className="flex items-baseline gap-3 px-4 py-2" style={cardStyle}>
              <span style={{ fontSize: 11, color: COLORS.gold, minWidth: 18 }}>{i + 1}</span>
              <span style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, flex: 1 }}>{era.name}</span>
              <span style={{ fontSize: 11.5, color: COLORS.gold }}>{displayPeriodEn(era.period)}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Tips for the periods people mix up">
        <div className="flex flex-col gap-3">
          {TIPS.map((t) => <NoteCard key={t.h} title={t.h}>{t.b}</NoteCard>)}
        </div>
      </Section>
    </FeaturePage>
  );
}
