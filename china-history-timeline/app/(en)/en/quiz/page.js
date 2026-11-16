import { SITE_NAME_EN, bilingualAlternates, ERAS_EN, displayPeriodEn } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { HistoryQuiz } from "@/components/HistoryQuiz";
import { FeaturePage, Paras } from "@/components/en/EnFeature";

const title = "Chinese History Quiz: Dynasties, Dates and Events (Multiple Choice)";
const description =
  "A multiple-choice Chinese history quiz: the order of the dynasties, the dates of events, and which dynasty an event happened in. Ten questions a round, different every time, with links from each answer to the timeline.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/quiz", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/quiz", image: { title: "Chinese History Quiz", seal: "問" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

// The Neolithic cultures are not a dynasty, so they are left out
const QUIZ_ERAS = ERAS_EN.filter((e) => e.id !== "neolithic").map((e) => ({ id: e.id, name: e.name, period: displayPeriodEn(e.period) }));

// Only events with a definite year ("221 BC", "AD 25", "1004") — not "c. 1000 BC" or "630s"
function parseYear(year) {
  const m = /^(?:AD )?(\d+)( BC)?$/.exec(String(year));
  if (!m) return null;
  return m[2] ? -Number(m[1]) : Number(m[1]);
}
const formatYear = (v) => (v < 0 ? `${-v} BC` : `${v}`);

// Modern (PRC) events have little to do with learning the dynasties, so they are left out
const QUIZ_EVENTS = ERAS_EN.filter((e) => e.id !== "neolithic" && e.id !== "prc").flatMap((era) =>
  era.events
    .map((ev) => ({ ev, value: parseYear(ev.year) }))
    .filter(({ value }) => value !== null)
    .map(({ ev, value }) => ({ slug: ev.slug, title: ev.title, value, yearLabel: formatYear(value), eraId: era.id, eraName: era.name }))
);

export default function EnglishQuizPage() {
  return (
    <FeaturePage
      title="Chinese History Quiz"
      jaPath="/quiz"
      intro="Answer multiple-choice questions on the order of the dynasties, the dates of events, and which dynasty an event belongs to. Each round has ten questions, and they change every time you play. Every answer links to the timeline, so you can check anything you get wrong."
      related={[
        { href: "/en/mnemonics", label: "How to remember the dynasties" },
        { href: "/en/year-mnemonics", label: "Key dates in Chinese history" },
        { href: "/en/glossary", label: "Glossary of Chinese history" },
      ]}
    >
      <HistoryQuiz eras={QUIZ_ERAS} events={QUIZ_EVENTS} lang="en" />
      <div style={{ marginTop: 28 }}>
        <Paras items={["Learning the order of the dynasties with the dynasty song and the key dates with simple hooks will push your score right up. Check the questions you miss on the timeline, then try again."]} />
      </div>
    </FeaturePage>
  );
}
