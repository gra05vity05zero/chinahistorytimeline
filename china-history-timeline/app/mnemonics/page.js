import { ERAS, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "中国王朝の覚え方（語呂合わせ）";
const fullTitle = `中国王朝の覚え方（語呂合わせ）| ${SITE_NAME}`;
const description =
  "中学・高校の定期テストや大学入試の世界史対策に。殷・周・秦・漢から中華人民共和国まで、中国史の王朝を順番どおりに覚えられる語呂合わせと、時代ごとの暗記のコツをまとめました。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/mnemonics" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/mnemonics" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

// 語呂合わせの区切り（王朝暗記の定番チャンク分け。「うさぎとかめ」の節に乗せて口ずさむと覚えやすい）
const CHANT = [
  { text: "{{殷|いん}}", note: "甲骨文字・青銅器" },
  { text: "{{周|しゅう}}", note: "封建制" },
  { text: "{{秦|しん}}", note: "初の統一" },
  { text: "{{漢|かん}}", note: "長期安定" },
  { text: "{{三国|さんごく}}", note: "魏呉蜀" },
  { text: "{{晋|しん}}", note: "一時統一" },
  { text: "{{南北朝|なんぼくちょう}}", note: "分裂" },
  { text: "{{隋|ずい}}", note: "再統一" },
  { text: "{{唐|とう}}", note: "長期安定" },
  { text: "{{五代|ごだい}}", note: "再分裂" },
  { text: "{{宋|そう}}", note: "文治主義" },
  { text: "{{元|げん}}", note: "モンゴル" },
  { text: "{{明|みん}}", note: "漢族復権" },
  { text: "{{清|しん}}", note: "満州族" },
];

const TIPS = [
  {
    heading: "殷（商）・周",
    body: "「殷」は{{甲骨文字|こうこつもじ}}と青銅器、「周」は一族や功臣に土地を分け与える{{封建制|ほうけんせい}}、とセットで覚えると区別しやすい。",
  },
  {
    heading: "春秋・戦国",
    body: "どちらも周の権威が弱まった時代の前半・後半にすぎない。「周から独立していく流れの前半が春秋、後半が戦国」と1つの流れで捉えれば別々に暗記する必要はない。",
  },
  {
    heading: "秦・漢",
    body: "秦は中国を初めて統一したが{{始皇帝|しこうてい}}の死後わずか十数年で滅亡。「統一の反動で短命に終わった王朝の後に、長期安定した王朝が続く」というパターンは、隋→唐でも繰り返される。",
  },
  {
    heading: "前漢・新・後漢",
    body: "「漢」は{{王莽|おうもう}}の建てた「新」を挟んでいったん途切れる。長い漢の歴史の途中に短命な新がサンドイッチされている、とイメージすると前漢と後漢の順番で迷わない。",
  },
  {
    heading: "三国・晋",
    body: "後漢の滅亡後に{{魏|ぎ}}・{{呉|ご}}・{{蜀|しょく}}が並び立ち（三国志の時代）、最終的に魏から実権を奪った{{司馬氏|しばし}}の晋（西晋）が一時的に中国を統一する。",
  },
  {
    heading: "五胡十六国・東晋、南北朝",
    body: "西晋が北方民族の侵入で崩壊すると、北は異民族の国々が乱立し（五胡十六国）、晋の一族は南へ逃れて東晋を建てる。この南北分裂がそのまま南北朝時代へと続く。",
  },
  {
    heading: "隋・唐",
    body: "南北朝の分裂を隋が再統一するが、こちらも秦と同様に短命。その後を継いだ唐が約300年続く長期安定政権となる。",
  },
  {
    heading: "五代十国",
    body: "唐の滅亡後、再び分裂した時代。「統一王朝の後には必ず分裂期が来る」という中国史のリズムを意識すると、唐→五代十国の流れも自然に覚えられる。",
  },
  {
    heading: "北宋・南宋",
    body: "宋は北方民族の{{金|きん}}に華北を奪われ、都を南へ移した。都が北にあった前半が北宋、南へ移った後半が南宋なので、方角の順番どおりに覚えればよい。",
  },
  {
    heading: "元・明・清",
    body: "モンゴル民族が中国全土を支配した元の後、漢民族が明で王朝を取り戻し、その明を満州民族の清が倒す。「漢民族→異民族→漢民族→異民族」と支配民族が交互に入れ替わる点に注目すると記憶が定着しやすい。",
  },
  {
    heading: "中華民国・中華人民共和国",
    body: "1911年の{{辛亥革命|しんがいかくめい}}で清が倒れて中華民国が成立し、国共内戦を経て1949年に中華人民共和国が建国された。ここは王朝ではなく近代の国家なので、語呂合わせより出来事の流れで覚えるのが確実。",
  },
];

export default function MnemonicsPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国王朝の覚え方（語呂合わせ）
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 12 }}>
          中学・高校の定期テストや大学入試の世界史では、中国の王朝を正しい順番で答えさせる問題が繰り返し出題されます。
          殷から中華人民共和国までの流れを語呂合わせで一気に暗記し、続く一覧と暗記のコツで理解を固めましょう。
        </p>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
            語呂合わせで唱える王朝の順番
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 12 }}>
            童謡「うさぎとかめ」（もしもしかめよ、かめさんよ……）のリズムに乗せて口ずさむと、テスト前に短時間で記憶に定着させやすくなります。
          </p>
          <div
            className="flex flex-wrap items-stretch gap-2"
            style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "16px 14px" }}
          >
            {CHANT.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex flex-col items-center" style={{ minWidth: 44 }}>
                  <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 20, fontWeight: 700, color: COLORS.vermilion }}>
                    <RubyText text={item.text} />
                  </span>
                  <span style={{ fontSize: 9.5, color: COLORS.inkSoft, marginTop: 2, whiteSpace: "nowrap" }}>{item.note}</span>
                </div>
                {i < CHANT.length - 1 && (
                  <span style={{ color: COLORS.mist, fontSize: 13 }} aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 10 }}>
            ※ 先史時代の新石器文化・夏、短命だった新（王莽）、五胡十六国・東晋、十国、中華民国・中華人民共和国は、
            語呂合わせでは前後の王朝にまとめて含めています。詳しい位置づけは下の一覧と暗記のコツで確認してください。
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            王朝・時代の一覧（{ERAS.length}区分）
          </h2>
          <div className="flex flex-col gap-1.5">
            {ERAS.map((era, i) => (
              <div
                key={era.id}
                className="flex items-center gap-3 px-3 py-2"
                style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}
              >
                <span
                  className="shrink-0 text-center"
                  style={{ fontSize: 11, color: COLORS.mist, width: 22, fontFamily: "'Noto Serif SC', serif" }}
                >
                  {i + 1}
                </span>
                <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, fontWeight: 700, color: COLORS.ink, minWidth: 132 }}>
                  {era.name}
                </span>
                <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>{era.period}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 12 }}>
            混同しやすい時代の暗記のコツ
          </h2>
          <div className="flex flex-col gap-4">
            {TIPS.map((tip, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${COLORS.vermilion}`, paddingLeft: 12 }}>
                <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink, marginBottom: 4 }}>
                  {tip.heading}
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft }}>
                  <RubyText text={tip.body} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            それぞれの王朝で実際に何が起きたのかを知ると、語呂合わせの記憶はより忘れにくくなります。
            年表や人物一覧もあわせて確認してみてください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras" variant="solid">出来事一覧を見る</NavButton>
            <NavButton href="/people" variant="outline">人物一覧を見る</NavButton>
          </div>
        </section>
      </div>
    </div>
  );
}
