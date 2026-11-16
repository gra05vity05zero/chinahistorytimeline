import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, Paras, ItemCard, DataTable, cardStyle, serif } from "@/components/en/EnFeature";

const title = "The Imperial Examinations (Keju): How China Chose Its Officials for 1,300 Years";
const description =
  "The keju, China’s civil service examinations, ran from the Sui to 1905. The stages from county exam to palace exam, what zhuangyuan means, pass rates, exam halls with 20,000 cells, cheating underwear and punishments, and famous successes and failures.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/keju", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/keju", image: { title: "The Imperial Examinations", seal: "科" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const slug = (eraId, key) => ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(key))?.slug || null;

const HISTORY = [
  { period: "Sui", text: "Emperor Wen abandoned the nine-rank system, which chose officials by family, and began selecting them by examination. The jinshi degree was created under Emperor Yang — regarded as the beginning of the keju.", href: slug("sui", "科挙制度の創設") ? `/en/events/${slug("sui", "科挙制度の創設")}` : "/en/eras/sui" },
  { period: "Tang", text: "The jinshi degree became the most prestigious, but only a few dozen passed each year. Even after passing, family and recommendations counted, and the aristocracy remained strong. Wu Zetian introduced military examinations to choose officers.", href: "/en/eras/tang" },
  { period: "Song", text: "Taizu, Zhao Kuangyin, began the palace examination held by the emperor himself; later, candidates’ names were sealed and answers recopied so handwriting could not be recognized, making the exams far fairer. Officials who had passed — the scholar-officials — came to run the state.", href: slug("northernsong", "宋の建国") ? `/en/events/${slug("northernsong", "宋の建国")}` : "/en/eras/northernsong" },
  { period: "Yuan", text: "Under the Mongol dynasty the exams were suspended for a long time; revived in 1315, they passed only a few candidates.", href: "/en/eras/yuan" },
  { period: "Ming & Qing", text: "The sequence of county, provincial, metropolitan and palace exams became fixed, and candidates had to write the “eight-legged essay,” a rigid form based on Zhu Xi’s Neo-Confucianism. The number of candidates swelled into the millions.", href: "/en/eras/ming" },
  { period: "1905", text: "The Qing, hurrying to modernize, abolished the examinations, ending some 1,300 years of history.", href: "/en/eras/qing" },
];

const STAGES = [
  ["1. County exam (tongshi)", "County, prefecture and provincial education officials; twice every three years", "Shengyuan (“licentiate,” also xiucai)", "Passing gave the right to sit the provincial exam and privileges such as exemption from labor service"],
  ["2. Provincial exam (xiangshi)", "Provincial capitals (examination halls); once every three years, in autumn", "Juren (“recommended man”)", "The hardest hurdle. Simply becoming a juren made one a local notable, with a path to office"],
  ["3. Metropolitan exam (huishi)", "The capital (Beijing); spring of the following year", "Gongshi (“tribute scholar”)", "The juren of the whole country gathered for it"],
  ["4. Palace exam (dianshi)", "The palace; right after the metropolitan exam", "Jinshi (“presented scholar”)", "Set in the emperor’s name; no one failed — it only decided the ranking"],
];

const FAQ = [
  { q: "What do zhuangyuan, bangyan and tanhua mean?", a: "The top three in the palace examination: first place was the zhuangyuan, second the bangyan and third the tanhua. These three formed the “first class” and received the special title “jinshi with distinction.” A zhuangyuan, the nation’s top scholar, came only once every three years — such an honor that commemorative gates were built in his hometown. In China today “zhuangyuan” still means the top scorer in each province in the university entrance exam." },
  { q: "How hard was it to pass?", a: "It varied greatly by period and region, but under the Ming and Qing the narrowest gate was the provincial exam: in Jiangnan (Nanjing), with its many candidates, nearly 20,000 might sit it in a year with just over 100 passing. Final jinshi numbered roughly 200–300 per round under the Qing. Many kept trying for decades, and gray-haired old men could be seen sitting beside young candidates." },
  { q: "How long did the exams last, and where were they held?", a: "The provincial and metropolitan exams had three sessions of two nights and three days each — about nine days in all. Candidates sat in individual cells in the examination hall, where they also ate and slept. Each cell was about the size of a single tatami mat, with boards laid across to serve as desk and seat. The Jiangnan Examination Hall in Nanjing had over 20,000 cells, part of which survives today as a museum." },
  { q: "Could anyone sit the exams?", a: "In principle any man could, regardless of family. Women could not, and certain groups such as actors and bondservants were excluded, as were those in mourning for a parent. And years devoted to study required money, so in practice most successful candidates came from well-off families of landlords or merchants." },
  { q: "Did Japan have the examinations?", a: "Japan adopted the ritsuryō legal system through its embassies to the Sui and Tang and created an examination system for officials too, but in practice appointment by family prevailed and nothing like the Chinese keju took root (the eunuch system was not adopted either). On the Korean Peninsula (Goryeo and Joseon) and in Vietnam, by contrast, examinations were held in earnest. Abe no Nakamaro, who went to Tang China, is said to have passed the Tang examinations and become an official." },
];

export default function EnglishKejuPage() {
  const taiping = slug("qing", "太平天国");
  return (
    <FeaturePage
      title="The Imperial Examinations (Keju)"
      jaPath="/keju"
      intro="The keju was the examination system for choosing China’s officials, begun under the Sui and lasting some 1,300 years until the Qing abolished it in 1905. Its name means “selection by subjects”: officials were chosen not by birth but by examination results — a rare system in the world of its time. Because success could bring even a man from a poor family high rank and wealth, countless men devoted their lives to study."
      related={[
        { href: "/en/hundred-schools", label: "The Hundred Schools of Thought" },
        { href: "/en/eunuchs", label: "Eunuchs in Chinese history" },
        { href: "/en/emperors", label: "Emperors of China" },
      ]}
    >
      <div style={{ ...cardStyle, padding: "12px 14px", marginBottom: 24 }}>
        <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.08em", color: COLORS.gold, marginBottom: 6 }}>IN SHORT: THE MING–QING SEQUENCE</div>
        <div style={{ ...serif, fontSize: 15.5, fontWeight: 700, color: COLORS.ink, lineHeight: 1.8 }}>
          County exam (shengyuan) → provincial exam (juren) → metropolitan exam (gongshi) → palace exam (jinshi)
        </div>
        <div style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 4 }}>The top scorer in the palace exam was the “zhuangyuan.” Only a tiny fraction of candidates made it all the way.</div>
      </div>

      <Section title="History: from the Sui to the Qing">
        <div className="flex flex-col gap-2">
          {HISTORY.map((h) => (
            <div key={h.period} className="flex gap-3" style={{ ...cardStyle, padding: "12px 14px" }}>
              <div style={{ ...serif, fontSize: 14.5, fontWeight: 900, color: COLORS.vermilion, minWidth: 64 }}>{h.period}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.8, color: COLORS.inkSoft }}>
                {h.text}{" "}
                <Link href={h.href} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, fontSize: 12.5 }}>More →</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="The stages of the Ming–Qing exams and their titles">
        <Paras items={["Under the Ming and Qing, when the system was most fully developed, candidates had to win through four stages in turn. Each level of success brought a title that was itself a social rank."]} />
        <div className="mt-3"><DataTable head={["Exam", "Where and when", "Title", "Notes"]} rows={STAGES} /></div>
        <div className="mt-4">
          <Paras items={["Questions centered on the Four Books, such as the Analects and Mencius, and the Five Classics, and answers had to follow the commentaries of Zhu Xi of the Southern Song. From the Ming on, candidates wrote the “eight-legged essay,” a strict form built of parallel passages; because conformity to form mattered more than content, it later became a byword for empty writing."]} />
        </div>
      </Section>

      <Section title="Cheating, fraud and harsh punishment">
        <Paras
          items={[
            "With a family’s fortunes riding on the result, cheating never stopped. Miniature books copying the Four Books and Five Classics in characters the size of rice grains, and “cheat shirts” with model answers written all over the lining, survive to this day. Candidates were searched minutely at the entrance — even steamed buns were broken open to check inside. Answer papers had the names sealed over with paste and were copied out by clerks before marking, so that no one could tell whose paper it was from the handwriting.",
            "Punishment for fraud was severe. In 1858, when the swapping of successful candidates in the Beijing provincial exam came to light, the official in charge, Grand Secretary Baijun, was executed the following year. That even an official of near-chancellor rank could be put to death shows how much the fairness of the examinations mattered to the prestige of the state.",
          ]}
        />
      </Section>

      <Section title="Those who passed, and those who kept failing">
        <div className="flex flex-col gap-3">
          <ItemCard
            title="Passed — and changed history"
            links={[
              { href: "/en/people/northernsong/wang-anshi", label: "Wang Anshi" },
              { href: "/en/people/northernsong/sima-guang", label: "Sima Guang" },
              { href: "/en/people/southernsong/zhu-xi", label: "Zhu Xi" },
              { href: "/en/people/southernsong/wen-tianxiang", label: "Wen Tianxiang" },
            ]}
          >
            The Northern Song reformer Wang Anshi, his rival Sima Guang, author of the Comprehensive Mirror in Aid of Governance, and the poet Su Shi were all jinshi. Zhu Xi, founder of Neo-Confucianism, became a jinshi at nineteen. Wen Tianxiang, who fought the Yuan to the end of the Southern Song, was a zhuangyuan.
          </ItemCard>
          <ItemCard title="Kept failing — and changed history" links={[...(taiping ? [{ href: `/en/events/${taiping}`, label: "The Taiping Rebellion" }] : []), { href: "/en/people/qing/hong-xiuquan", label: "Hong Xiuquan" }]}>
            Hong Xiuquan of the late Qing failed the first stage of the examinations repeatedly, and amid that despair claimed to have had visions influenced by Christianity and founded a religious society — which became the Taiping Rebellion that shook the Qing. Huang Chao, who led a great rebellion at the end of the Tang, is also said to have been a salt smuggler who had failed the examinations.
          </ItemCard>
          <ItemCard title="Passed — and lost his mind for joy">
            The Qing novel The Scholars tells of Fan Jin, who finally passes the provincial exam after the age of fifty and goes mad with joy the moment he hears the news. It is fiction, but as a biting portrait of people who gave their lives to the examinations it appears in Chinese school textbooks.
          </ItemCard>
        </div>
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
