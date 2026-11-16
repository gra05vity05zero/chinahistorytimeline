import Link from "next/link";
import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, Paras, ItemCard, DataTable, cardStyle, serif } from "@/components/en/EnFeature";

const title = "Ranks of the Chinese Imperial Harem: Empress, Imperial Noble Consort, Noble Consort and More";
const description =
  "The ranks of China’s imperial harem, centered on the Qing’s eight grades — huanghou, huang guifei, guifei, fei, pin, guiren, changzai, daying — with quotas and stipends, the Tang’s Four Consorts and Nine Concubines, the Han’s zhaoyi and jieyu, and where Yang Guifei and Wu Zetian ranked.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/harem-ranks", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/harem-ranks", image: { title: "Ranks of the Imperial Harem", seal: "宮" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const QING = [
  ["1. Huanghou (Empress)", "1", "1,000 taels", "The emperor’s principal wife, head of the whole harem (the “Central Palace”)"],
  ["2. Huang guifei (Imperial Noble Consort)", "1", "800 taels", "Next to the empress; ran the harem in her place when there was no empress"],
  ["3. Guifei (Noble Consort)", "2", "600 taels", ""],
  ["4. Fei (Consort)", "4", "300 taels", "Called by a title plus rank, such as “Consort Ling” (Lingfei)"],
  ["5. Pin (Concubine)", "6", "200 taels", "The lowest rank that could be mistress of a palace"],
  ["6. Guiren (Noble Lady)", "No limit", "100 taels", ""],
  ["7. Changzai (First Class Female Attendant)", "No limit", "50 taels", ""],
  ["8. Daying (Second Class Female Attendant)", "No limit", "30 taels", "The lowest formal rank"],
];

const TANG = [
  ["Empress", "Empress", "1", "(above the grades)"],
  ["The Four Consorts", "guifei, shufei, defei, xianfei", "1 each", "1a"],
  ["The Nine Concubines", "zhaoyi, zhaorong, zhaoyuan, xiuyi, xiurong, xiuyuan, chongyi, chongrong, chongyuan", "1 each", "2a"],
  ["The 27 Hereditary Consorts", "jieyu / meiren / cairen", "9 each", "3a / 4a / 5a"],
  ["The 81 Imperial Wives", "baolin / yunü / cainü", "27 each", "6a / 7a / 8a"],
];

const FAQ = [
  { q: "What is the difference between the empress and the imperial noble consort?", a: "The empress was the emperor’s formal wife, and only one could be installed. The imperial noble consort was the highest of the secondary consorts and did not share the empress’s ritual status. Under the Qing, however, when the empress died or was deposed, the imperial noble consort was often entrusted with running the harem and seen as the next empress; the Qianlong Emperor’s second empress (the model for the heroine of the drama Ruyi’s Royal Love in the Palace) became empress after serving as imperial noble consort." },
  { q: "Which is higher, guifei or fei?", a: "Under the Qing system the guifei (noble consort) ranked one step above the fei (consort). In English all of them may loosely be called “consorts,” but in the Chinese harem “fei” was a specific rank below the huang guifei and guifei and above the pin." },
  { q: "How many consorts did an emperor have?", a: "The Qing quota from empress down to pin was fourteen, but there was no limit below guiren, so the real number varied greatly. The Qianlong Emperor has more than forty ranked consorts on record. The Tang’s official quota, excluding the empress, came to 121 — an ideal number; in Xuanzong’s time poets spoke of “three thousand beauties in the rear palace” (most of them unranked palace women)." },
  { q: "How were the women of the harem chosen?", a: "Under the Qing, daughters of Eight Banner families aged roughly 13 to 16 were examined every three years in the “selection of beautiful women,” and those chosen became candidates for consort. Separately, daughters of the imperial household’s bondservant families were gathered every year as palace maids, and if one caught the emperor’s eye she could be given a rank. Consort Ling (Lady Wei), the model for the heroine of Story of Yanxi Palace, began as such a maid, rose to imperial noble consort, and her son became the next emperor, Jiaqing." },
];

export default function EnglishHaremRanksPage() {
  const link = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
  return (
    <FeaturePage
      title="Ranks of the Imperial Harem"
      jaPath="/harem-ranks"
      intro="The harem was the inner palace where the emperor’s wife and consorts lived. Its women were given finely graded ranks, which decided the palace they lived in, the number of maids who served them, their stipend and even the colors they could wear. Names and numbers of ranks changed from dynasty to dynasty; the most complete — and the one familiar from Chinese TV dramas — was the Qing system, with eight grades under the empress."
      related={[
        { href: "/en/women-rulers", label: "Women who ruled China" },
        { href: "/en/emperors", label: "Emperors of China" },
        { href: "/en/four-beauties", label: "The Four Beauties" },
      ]}
    >
      <div style={{ ...cardStyle, padding: "12px 14px", marginBottom: 24 }}>
        <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.08em", color: COLORS.gold, marginBottom: 6 }}>IN SHORT: QING HAREM RANKS, HIGHEST FIRST</div>
        <div style={{ ...serif, fontSize: 15, fontWeight: 700, color: COLORS.ink, lineHeight: 1.8 }}>
          Huanghou › Huang guifei › Guifei › Fei › Pin › Guiren › Changzai › Daying
        </div>
      </div>

      <Section title="Qing harem ranks, quotas and stipends">
        <Paras items={["The Palace History of the Dynasty, compiled in the Qianlong era, set out the ranks of the harem, their quotas and the silver paid each year as follows."]} />
        <div className="mt-3"><DataTable head={["Rank", "Quota", "Annual stipend", "Notes"]} rows={QING} /></div>
        <div style={{ marginTop: 10, padding: "8px 10px", backgroundColor: "#F3ECD9", fontSize: 13, lineHeight: 1.75, color: COLORS.inkSoft }}>
          Some dramas show a “guan nüzi” below daying, but this was a term for a palace maid who had received the emperor’s favor, not a formal rank. The empress dowager (the previous emperor’s empress, or the emperor’s birth mother) was not the emperor’s wife and stood outside this ranking.
        </div>
        <div className="mt-4">
          <Paras
            items={[
              "Women of pin rank and above became mistress of one of the twelve palaces of the Forbidden City known as the “Six Eastern and Six Western Palaces,” while those of guiren and below lived in side buildings and attended the mistress. Ranks were conferred by investiture and paired with a one-character title — the “Ling” of Consort Ling, the “Chun” of Noble Consort Chun. Bearing a child or winning the emperor’s favor raised a woman’s rank; she could also be demoted as punishment.",
              "The empress’s proper residence was the Palace of Earthly Tranquility, but because the Qing used it for rituals and imperial weddings, the empress too lived in one of the Six Eastern and Six Western Palaces. Popular dramas set in the Qianlong Emperor’s harem, such as Story of Yanxi Palace and Ruyi’s Royal Love in the Palace, are built on this system.",
            ]}
          />
        </div>
      </Section>

      <Section title="Tang harem ranks: the Four Consorts and the Nine Concubines">
        <Paras items={["The Tang harem was modeled on the scheme in the Confucian Book of Rites — “one empress, three consorts, nine concubines, twenty-seven hereditary consorts and eighty-one imperial wives” — with ranks expressed in the same numbered grades as officials."]} />
        <div className="mt-3"><DataTable head={["Group", "Ranks", "Quota", "Grade"]} rows={TANG} /></div>
        <div className="mt-4">
          <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft }}>
            Yang Guifei’s “guifei” is not a name but a rank — the first of the Four Consorts. Xuanzong had renamed the four consorts for a time, but in 745 he made Yang Yuhuan guifei. With no empress in place, she was in effect the head of the harem.{" "}
            <Link href="/en/people/tang/yang-guifei" style={link}>Yang Guifei →</Link>
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 12 }}>
            Wu Zetian entered Taizong’s harem at fourteen as a mere cairen (grade 5a). After Taizong’s death she returned to the harem as zhaoyi (first of the Nine Concubines) under the next emperor, Gaozong, became empress in 655, and later rose to be the only woman emperor in Chinese history.{" "}
            <Link href="/en/people/tang/wu-zetian" style={link}>Wu Zetian →</Link>
          </p>
        </div>
      </Section>

      <Section title="Han harem ranks: zhaoyi, jieyu and more">
        <Paras
          items={[
            "At the start of the Western Han, the ranks below the empress were furen, meiren, liangren, bazi, qizi, changshi and shaoshi. Emperor Wu added ranks such as jieyu, and Emperor Yuan created zhaoyi at the top, until there were fourteen grades in all. A zhaoyi’s standing was said to equal a chancellor’s, and a jieyu’s a senior minister’s. Emperor Guangwu, founder of the Eastern Han, simplified this to just four ranks below the empress — guiren, meiren, gongren and cainü. The Qing “guiren” inherited the name of this Eastern Han rank.",
            "Wang Zhaojun of the Western Han is known as a woman who entered Emperor Yuan’s harem without ever receiving a rank and was married to the Xiongnu instead (see the Four Beauties). Empress Lü, wife of Liu Bang, who after her husband’s death cruelly killed his consort Lady Qi, became a byword for the terrors of harem rivalry.",
          ]}
        />
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2" style={{ fontSize: 13 }}>
          <Link href="/en/four-beauties" style={link}>The Four Beauties →</Link>
          <Link href="/en/people/westernhan/empress-lu" style={link}>Empress Lü →</Link>
        </div>
      </Section>

      <Section title="Compared with the Japanese court">
        <Paras items={["The Heian court in Japan also ranked imperial consorts — empress (chūgū), nyōgo and kōi. The Tale of Genji opens in a reign when “many nyōgo and kōi served,” and the hero’s mother, Lady Kiritsubo, was envied because she won the emperor’s love despite her low rank of kōi. “Chūgū” was originally a Chinese word for the empress’s palace, and in Japan became another name for the empress. Japan modeled its harem on the Tang system, but with far fewer ranks and nothing like the Qing’s detailed quotas and stipends."]} />
      </Section>

      <Section title="Frequently asked questions">
        <div className="flex flex-col gap-3">
          {FAQ.map((f) => (
            <ItemCard key={f.q} title={f.q}>{f.a}</ItemCard>
          ))}
        </div>
      </Section>
    </FeaturePage>
  );
}
