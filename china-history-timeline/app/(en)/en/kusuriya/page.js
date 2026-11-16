import Link from "next/link";
import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, Paras, DataTable, NoteCard } from "@/components/en/EnFeature";

const title = "The Apothecary Diaries and Real Chinese History: The Inner Palace, Eunuchs, Food Tasters and the Pleasure Quarter";
const description =
  "Which era inspired The Apothecary Diaries (Kusuriya no Hitorigoto)? The Tang “four consorts” behind the high consorts, food tasters and silver chopsticks, lead poisoning from face powder, eunuchs, the pleasure quarter, palace physicians and Chinese pharmacology — the story’s world compared with real Chinese history.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/kusuriya", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/kusuriya", image: { title: "The Apothecary Diaries and History", subtitle: "Palace, poison and the pleasure quarter", seal: "薬" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const YANG = figureEnByJa("tang", "楊貴妃");
const WU = figureEnByJa("tang", "武則天");

const MODELS = [
  ["The high consorts (Gui, Xian, De and Shu)", "The Tang “four consorts” (first rank)", "Tang", "#ranks"],
  ["The food taster", "The palace kitchen officials who “tasted first”; silver chopsticks and tokens", "Tang to Qing", "#poison"],
  ["Poisonous face powder", "Lead poisoning from lead-white cosmetics", "Antiquity to modern times", "#oshiroi"],
  ["Eunuchs serving in the inner palace", "Castrated palace servants", "Shang/Zhou to Qing", "#eunuch"],
  ["Servants, ladies-in-waiting and palace women", "Palace women and the Tang “Six Services” of women officials", "Tang to Qing", "#maids"],
  ["The pleasure quarter and its courtesans", "Pingkang Ward (Beili) in Chang’an and its accomplished courtesans", "Tang", "#hanamachi"],
  ["Palace physicians", "The Tang Imperial Medical Office; the Ming–Qing Imperial Academy of Medicine", "Tang to Qing", "#medicine"],
  ["Knowledge of herbs and poisons", "Shennong’s Classic of Materia Medica, the Newly Revised Materia Medica, the Compendium of Materia Medica", "Han to Ming", "#medicine"],
  ["Officials chosen by examination", "The imperial examinations (keju)", "Sui to Qing", "#others"],
  ["Foreign-looking people and trade with the west", "The Silk Road and the “Hu” foreigners of Chang’an (Sogdians and others)", "Tang", "#others"],
];

const FAQ = [
  { q: "Which period of Chinese history is The Apothecary Diaries based on?", a: "Its country is fictional and doesn’t copy any one dynasty. But the names of the high consorts’ ranks, the cosmopolitan capital and the lively pleasure quarter read as drawn mainly from the institutions and culture of the Tang (618–907). At the same time, the huge inner palace staffed by many eunuchs and the organization of palace physicians are closer to the Ming and Qing courts. It is best thought of as a Chinese-style world built on the Tang, with elements of later periods mixed in." },
  { q: "Is the order of the high consorts the same as in history?", a: "Under the Tang system the four consorts ranked “Gui, Shu, De, Xian” — Noble Consort first and Worthy Consort last. All four held the same first rank, just below the empress. The story uses the four titles as they are, but their order and balance of power in the story are its own." },
  { q: "Were there really food tasters?", a: "Yes. At the Tang court, the head of the Palace Kitchen Office, which prepared the emperor’s meals, was required to taste each dish himself before serving it. The women officials of the inner palace also had a “Service of Food” that likewise tasted food first. In the Qing palace, silver tokens are said to have been put into dishes to check for discoloration, and eunuchs then tasted them as well." },
  { q: "Can silver chopsticks really detect poison?", a: "Only some poisons. Arsenic poison in the past (pishuang) often contained sulfur picked up in its manufacture, and the sulfur turned silver black — hence the belief that silver could detect poison. But it does not react to pure arsenic or to most plant poisons." },
  { q: "Could palace women never leave the inner palace?", a: "It depended on the dynasty. Under the Tang, palace women were often released in groups and sent home on occasions such as an emperor’s accession or a natural disaster. Under the Qing, palace women recruited through the Imperial Household Department normally finished their service around the age of 25 and returned home. Consorts who had been given rank, however, could rarely leave even after the emperor died." },
];

export default function EnglishKusuriyaPage() {
  return (
    <FeaturePage
      title="The Apothecary Diaries and Chinese History"
      jaPath="/kusuriya"
      intro="Natsu Hyuuga’s novel The Apothecary Diaries (Kusuriya no Hitorigoto) follows Maomao, a girl with a deep knowledge of medicines and poisons, as she solves mysteries in the inner palace; its manga and anime adaptations are hugely popular. The setting is a fictional Chinese-style country, but many of its details — the ranks of the inner palace, food tasters, eunuchs, the pleasure quarter — have real models in Chinese history. This page sets the story’s world side by side with history. It touches on the basic setup of the early story, but contains no major spoilers; the correspondences are this site’s reading, based on shared institutions and customs."
      related={[
        { href: "/en/harem-ranks", label: "Ranks of the imperial harem" },
        { href: "/en/eunuchs", label: "Eunuchs in Chinese history" },
        { href: "/en/women-rulers", label: "Women who ruled China" },
        { href: "/en/dramas", label: "Chinese historical dramas" },
      ]}
    >
      <NoteCard title="In short: the model is mainly the Tang">
        The ranks of the high consorts, the cosmopolitan capital and the culture of the pleasure quarter come from the Tang (618–907). Mixed in are elements closer to the Ming and Qing courts, such as an inner palace staffed by large numbers of eunuchs and the organization of palace physicians.
      </NoteCard>

      <div style={{ marginTop: 28 }}>
        <Section title="The story’s world and its historical models" id="table">
          <DataTable head={["In the story", "Historical model", "Period"]} rows={MODELS.map(([a, b, c]) => [a, b, c])} />
        </Section>
      </div>

      <Section title="The high consorts and the Tang “four consorts”" id="ranks">
        <Paras items={[
          "At the top of the story’s inner palace stand four high consorts: the Gui (Noble), Xian (Worthy), De (Virtuous) and Shu (Pure) Consorts. These four titles are exactly those of the “four consorts” placed just below the empress in the Tang inner palace. Under the Tang all four held the first rank, the highest grade, on a par with the chancellors. Below them came the Nine Concubines, the Twenty-Seven Hereditary Consorts and the Eighty-One Imperial Wives — 121 women in all, not counting the empress. The story’s division into high, middle and low consorts recalls these many tiers.",
          "Under the Tang system the order was Gui, Shu, De, Xian; the guifei in Yang Guifei’s name is not a personal name but the title of this highest rank. In the inner palace of Emperor Xuanzong, who appointed no empress, Yang Guifei was in effect at the top. Wu Zetian, by contrast, entered Taizong’s inner palace as a mere cairen (fifth rank), then rose under the next emperor, Gaozong, from zhaoyi to empress, and finally to emperor in her own right. Rank in the inner palace could change dramatically with the birth of children and the emperor’s favor.",
        ]} />
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 10 }}>
          <Link href="/en/harem-ranks" style={{ color: COLORS.vermilion }}>See the ranks of the Tang, Qing and Han inner palaces →</Link>
          {YANG?.href && <> · <Link href={YANG.href} style={{ color: COLORS.vermilion }}>Yang Guifei →</Link></>}
          {WU?.href && <> · <Link href={WU.href} style={{ color: COLORS.vermilion }}>Wu Zetian →</Link></>}
        </p>
      </Section>

      <Section title="Food tasters were real: the palace kitchen and silver chopsticks" id="poison">
        <Paras items={[
          "Maomao’s job as food taster has a clear model. At the Tang court, the head of the Palace Kitchen Office, which prepared the emperor’s meals, was required to taste each dish before it was served. The women officials of the inner palace had a “Service of Food” of their own, which likewise tasted before serving. In the Qing palace, silver tokens were reportedly put into dishes to check for discoloration, and eunuchs tasted them before they reached the emperor.",
          "Detecting poison with silver is an old practice. The arsenic poison of the past, pishuang, often contained sulfur, which blackened silver — hence the belief that “if the silver turns black, it is poison.” But silver does not react to most plant poisons, so silver vessels were never a reliable test. That is why a taster checking with their own tongue was always indispensable.",
          "Poison was really used in the inner palace. In 71 BC, under the Western Han, Empress Xu, consort of Emperor Xuan, died after childbirth from pills into which the woman physician Chunyu Yan had mixed fuzi (aconite root). It was done at the request of the wife of the generalissimo Huo Guang, who wanted her own daughter to become empress — and the affair became one of the causes of the Huo family’s destruction. Fuzi is a medicine in small doses and a poison in large ones: the very idea, central to the story, that medicine and poison are two sides of one coin.",
        ]} />
      </Section>

      <Section title="Poisonous face powder was lead poisoning" id="oshiroi">
        <Paras items={[
          "At the start of the story, poisonous face powder is a vital clue. Face powder in the past was made with lead white, a white powder produced from lead. In China it was called qianfen or hufen and was used in cosmetics from the Warring States period at the latest — so closely tied to lead that “washing off the lead flowers” was a way of saying a woman had given up makeup.",
          "Lead enters the body through the skin and mouth and gradually builds up, causing anemia, abdominal pain and nerve damage; small infants are especially vulnerable. In Japan, research in the 1920s by Hirai Ikutarō and others at Kyoto Imperial University showed that many cases of the infant illness then called “meningitis” were actually lead poisoning from the face powder of mothers and wet nurses. Lead-white face powder was later banned in Japan.",
        ]} />
      </Section>

      <Section title="Eunuchs: the men allowed in the inner palace" id="eunuch">
        <Paras items={[
          "The story’s inner palace is staffed by many eunuchs — castrated men. Men other than the emperor were barred from the inner palace to make certain that any child born there was the emperor’s, and eunuchs took on the heavy work, guard duty and message-carrying that needed a man. Eunuchs are said to have existed since the Shang and Zhou; in the late Tang they grew powerful enough to make and unmake emperors, and the Ming is said to have had tens of thousands at its peak. The sight of eunuchs moving through every corner of the inner palace, as in the story, is closest to the Ming and Qing courts.",
        ]} />
        <p style={{ fontSize: 13, marginTop: 10 }}><Link href="/en/eunuchs" style={{ color: COLORS.vermilion }}>Read the history of eunuchs and famous eunuchs →</Link></p>
      </Section>

      <Section title="Palace women and women officials" id="maids">
        <Paras items={[
          "Besides the emperor’s consorts, thousands of palace women worked in the inner palace. The Tang inner palace had an organization of women officials known as the “Six Services” — of the palace, ceremonies, wardrobe, food, the bedchamber and needlework — dividing records, rituals, clothing, meals, sleeping quarters and sewing among them. Women officials held ranks too, and a palace woman could rise to become one.",
          "Maomao enters the inner palace as a lowly servant and is later made lady-in-waiting to a consort. In history too, low-ranking palace women were often put in charge of a consort’s personal care. Under the Tang, palace women were released in groups on occasions such as an emperor’s accession or a disaster, and under the Qing they normally finished service around 25. The story’s rule that a servant may leave once her term is up overlaps with such systems.",
        ]} />
      </Section>

      <Section title="The model for the pleasure quarter: Pingkang Ward in Chang’an" id="hanamachi">
        <Paras items={[
          "The pleasure quarter where Maomao grew up has a likely model too. In the Tang capital Chang’an, courtesan houses clustered in Pingkang Ward (Beili), near the eastern market, which became a social hub where successful examination candidates and officials held banquets. Its bustle is recorded in the Records of the Northern Quarter, written by Sun Qi at the end of the Tang.",
          "Many famous Tang courtesans were known for their talent in poetry, music and conversation. Xue Tao exchanged poems with poets such as Bai Juyi, and the writing paper she made, “Xue Tao paper,” still bears her name. The story’s portrayal of high-ranking courtesans prized for their accomplishments in song, dance and go overlaps with the image of these Tang courtesans.",
        ]} />
      </Section>

      <Section title="Palace physicians and pharmacology: the roots of Maomao’s knowledge" id="medicine">
        <Paras items={[
          "The palace physicians also have a real counterpart. The Tang Imperial Medical Office handled medical care and medical education, with professors of medicine, acupuncture, massage and exorcism teaching students, and even had its own herb garden. Under the Ming and Qing, the Imperial Academy of Medicine cared for the emperor and the inner palace, examining consorts too — though there were limits on male doctors touching consorts directly, and women doctors and midwives were relied on for matters such as childbirth.",
          "Maomao’s knowledge of herbs and poisons belongs to the Chinese tradition of bencao, or materia medica. The legendary ruler Shennong is said to have tasted a hundred herbs himself, poisoning himself seventy times in a single day, to discover medicines, and Shennong’s Classic of Materia Medica, bearing his name, was compiled in the Han. In 659 the Tang state produced the Newly Revised Materia Medica, which also reached Japan, and the Compendium of Materia Medica (published 1596), on which Li Shizhen of the Ming spent some thirty years, covers more than 1,800 drugs — the culmination of the tradition. Maomao, testing poisons on her own body, is like a figure from the Shennong legend.",
        ]} />
      </Section>

      <Section title="Other details: examinations and trade with the west" id="others">
        <Paras items={[
          "Behind the story’s officials lies the system of choosing officials by examination, the keju, which began under the Sui, was developed under the Tang and lasted until 1905, at the end of the Qing. The story also features people from western lands and characters of foreign appearance. Tang Chang’an was the eastern terminus of the Silk Road, home to many foreigners known as Hu — Sogdians, Persians and others — and foreign dress and music were in fashion. The air of the story’s capital, where foreign cultures pass freely, recalls Tang Chang’an.",
        ]} />
        <p style={{ fontSize: 13, marginTop: 10 }}>
          <Link href="/en/keju" style={{ color: COLORS.vermilion }}>The imperial examinations →</Link> · <Link href="/en/silk-road" style={{ color: COLORS.vermilion }}>The Silk Road →</Link>
        </p>
      </Section>

      <Section title="The novels, manga and anime" id="books">
        <Paras items={["The original is Natsu Hyuuga’s series of light novels. Two manga adaptations run in parallel: one drawn by Nekokurage (Square Enix) and one drawn by Minoji Kurata (Shogakukan), subtitled “Maomao’s Inner Palace Mystery Notebook.” The anime’s first season aired in 2023 and its second in 2025, with a third in production. The anime is streamed internationally, and English editions of the novels and manga have been published."]} />
      </Section>

      <Section title="Common questions about The Apothecary Diaries and history" id="faq">
        <div className="flex flex-col gap-3">
          {FAQ.map((f) => <NoteCard key={f.q} title={f.q}>{f.a}</NoteCard>)}
        </div>
      </Section>
    </FeaturePage>
  );
}
