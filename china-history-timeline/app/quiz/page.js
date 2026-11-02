import { ERAS, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { HistoryQuiz } from "@/components/HistoryQuiz";

const title = "中国史クイズ｜王朝の順番・年号・出来事を4択で確認（世界史の暗記チェック）";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "中国の王朝の順番、出来事の年号、出来事が起きた王朝を4択で答える中国史クイズ。1回10問、毎回問題が変わります。定期テストや共通テストの世界史対策、王朝の覚え方の確認に。答えから年表の解説ページへ飛べます。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/quiz" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/quiz" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

// 新石器文化は王朝ではないので出題から外す
const QUIZ_ERAS = ERAS.filter((e) => e.id !== "neolithic").map((e) => ({ id: e.id, name: e.name, period: formatPeriod(e.period) }));

function formatYear(value) {
  return value < 0 ? `前${-value}年` : `${value}年`;
}

// "221 BC" / "AD 25" / "1004" のように年がはっきりした出来事だけを年号クイズに使う（"c. 1000 BC" や "630s" は除く）
function parseYear(year) {
  const m = /^(?:AD )?(\d+)( BC)?$/.exec(year);
  if (!m) return null;
  return m[2] ? -Number(m[1]) : Number(m[1]);
}

function formatPeriod(period) {
  return period
    .replace(/c\. /g, "約")
    .replace(/(\d+) BC/g, "前$1")
    .replace(/(\d+) AD/g, "$1")
    .replace(/ – /g, "〜");
}

// 現代（中華人民共和国）の出来事は王朝の暗記と関係が薄いので外す
const QUIZ_EVENTS = ERAS.filter((e) => e.id !== "neolithic" && e.id !== "prc").flatMap((era) =>
  era.events
    .map((ev) => ({ ev, value: parseYear(ev.year) }))
    .filter(({ value }) => value !== null)
    .map(({ ev, value }) => ({
      slug: ev.slug,
      title: ev.title,
      value,
      yearLabel: formatYear(value),
      eraId: era.id,
      eraName: era.name,
    }))
);

const pStyle = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 12 };

export default function QuizPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国史クイズ
        </h1>
        <p style={pStyle}>
          <RubyText
            text={`王朝の順番、出来事の年号、出来事が起きた王朝を4択で答えるクイズです。1回${10}問で、挑戦するたびに問題が入れかわります。年表に{{載|の}}っている${QUIZ_EVENTS.length}の出来事と${QUIZ_ERAS.length}の王朝・時代から出題されるので、定期テストや共通テストの前の暗記チェックに使ってください。`}
          />
        </p>

        <HistoryQuiz eras={QUIZ_ERAS} events={QUIZ_EVENTS} />

        <section style={{ marginTop: 32 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 8 }}>覚えてから挑戦する</h2>
          <p style={{ ...pStyle, marginBottom: 16 }}>
            <RubyText text="王朝の順番は語呂合わせで、年号はゴロ合わせで覚えると、クイズの正解率がぐっと上がります。{{間違|まちが}}えた問題は、年表の解説ページで流れごと確認しましょう。" />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/mnemonics" variant="solid">王朝の覚え方</NavButton>
            <NavButton href="/year-mnemonics" variant="outline">年号ゴロ合わせ集</NavButton>
            <NavButton href="/glossary" variant="outline">中国史の用語集</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
