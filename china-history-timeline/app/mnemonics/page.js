import Link from "next/link";
import { ERAS, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { formatPeriodJa } from "@/lib/japanChinaTimeline";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

// 「五代十国 覚え方」「中学 歴史 中国 覚え方」での表示が多いため、その2つもタイトルに含める
const title = "中国王朝の覚え方｜順番の語呂合わせ（中学生向け・五代十国も）";
const fullTitle = `${title} | ${SITE_NAME}`;
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
  { text: "{{殷|いん}}", note: "{{甲骨文字|こうこつもじ}}・青銅器" },
  { text: "{{周|しゅう}}", note: "{{封建制|ほうけんせい}}" },
  { text: "{{秦|しん}}", note: "初の統一" },
  { text: "{{漢|かん}}", note: "長期安定" },
  { text: "{{三国|さんごく}}", note: "{{魏呉蜀|ぎごしょく}}" },
  { text: "{{晋|しん}}", note: "一時統一" },
  { text: "{{南北朝|なんぼくちょう}}", note: "{{分裂|ぶんれつ}}" },
  { text: "{{隋|ずい}}", note: "再統一" },
  { text: "{{唐|とう}}", note: "長期安定" },
  { text: "{{五代|ごだい}}", note: "{{再分裂|さいぶんれつ}}" },
  { text: "{{宋|そう}}", note: "文治主義" },
  { text: "{{元|げん}}", note: "モンゴル" },
  { text: "{{明|みん}}", note: "漢族復権" },
  { text: "{{清|しん}}", note: "満州族" },
];

// 中学の歴史で出てくる王朝だけに絞った短い版
const JUNIOR_CHANT = "{{殷|いん}}・{{周|しゅう}}・{{秦|しん}}・{{漢|かん}}・{{隋|ずい}}・{{唐|とう}}・{{宋|そう}}・{{元|げん}}・{{明|みん}}・{{清|しん}}";
const JUNIOR_NOTE =
  "中学の歴史で出てくる中国の王朝は、ほぼ次の10個です。上の語呂合わせから三国・{{晋|しん}}・南北朝・五代を{{抜|ぬ}}いた形なので、まずはここから覚えましょう。";
const JUNIOR_JAPAN =
  "日本との関わりとセットにすると忘れにくくなります。{{漢|かん}}は金印（{{弥生|やよい}}時代）、{{隋|ずい}}は{{遣隋使|けんずいし}}（飛鳥時代）、{{唐|とう}}は{{遣唐使|けんとうし}}（奈良・平安時代）、" +
  "{{元|げん}}は{{元寇|げんこう}}（{{鎌倉|かまくら}}時代）、{{明|みん}}は日明貿易（室町時代）、{{清|しん}}は日清戦争（明治時代）。";

// 五代（華北で交代した5つの王朝）と十国（主に南方の地方政権）
const WUDAI = [
  { name: "{{後梁|こうりょう}}", period: "907〜923年" },
  { name: "{{後唐|こうとう}}", period: "923〜936年" },
  { name: "{{後晋|こうしん}}", period: "936〜947年" },
  { name: "{{後漢|ごかん}}", period: "947〜950年" },
  { name: "{{後周|こうしゅう}}", period: "951〜960年" },
];
const WUDAI_NOTE =
  "五代は、{{唐|とう}}が{{滅|ほろ}}んだ907年から{{宋|そう}}が建つ960年までの約50年間に、{{華北|かほく}}で次々と交代した5つの王朝です。どれも頭に「後」が付くので、" +
  "「後」を外して「{{梁|りょう}}・{{唐|とう}}・{{晋|しん}}・{{漢|かん}}・{{周|しゅう}}（りょう・とう・しん・かん・しゅう）」と唱えるのが定番の覚え方です。" +
  "{{唐|とう}}・{{晋|しん}}・{{漢|かん}}・{{周|しゅう}}はどれも昔の王朝と同じ名前なので、過去の王朝名を借りたと考えると覚えやすくなります。";
const SHIKOKU_NOTE =
  "十国は同じ頃、主に南方に分立した地方政権で、{{呉|ご}}・{{南唐|なんとう}}・{{呉越|ごえつ}}・{{閩|びん}}・{{楚|そ}}・{{南漢|なんかん}}・{{前蜀|ぜんしょく}}・{{後蜀|こうしょく}}・{{荊南|けいなん}}・{{北漢|ほくかん}}の10国です。" +
  "こちらを全部順番に問われることはまれなので、「五代は{{華北|かほく}}の王朝の交代、十国は南の地方政権の並立」という区別を押さえておけば十分です。";

const TIPS = [
  {
    heading: "{{殷|いん}}（商）・周",
    body: "「{{殷|いん}}」は{{甲骨文字|こうこつもじ}}と青銅器、「周」は一族や功臣に土地を分け{{与|あた}}える{{封建制|ほうけんせい}}、とセットで覚えると区別しやすい。",
  },
  {
    heading: "春秋・戦国",
    body: "どちらも周の{{権威|けんい}}が弱まった時代の前半・後半にすぎない。「周から独立していく流れの前半が春秋、後半が戦国」と1つの流れで{{捉|とら}}えれば別々に暗記する必要はない。",
  },
  {
    heading: "{{秦|しん}}・漢",
    body: "{{秦|しん}}は中国を初めて統一したが{{始皇帝|しこうてい}}の死後わずか十数年で{{滅亡|めつぼう}}。「統一の反動で短命に終わった王朝の後に、長期安定した王朝が続く」というパターンは、{{隋|ずい}}→{{唐|とう}}でも{{繰|く}}り返される。",
  },
  {
    heading: "前漢・新・後漢",
    body: "「漢」は{{王莽|おうもう}}の建てた「新」を{{挟|はさ}}んでいったん{{途切|とぎ}}れる。長い漢の歴史の{{途中|とちゅう}}に短命な新がサンドイッチされている、とイメージすると前漢と後漢の順番で迷わない。",
  },
  {
    heading: "三国・{{晋|しん}}",
    body: "後漢の{{滅亡後|めつぼうご}}に{{魏|ぎ}}・{{呉|ご}}・{{蜀|しょく}}が並び立ち（三国志の時代）、最終的に{{魏|ぎ}}から実権を{{奪|うば}}った{{司馬氏|しばし}}の{{晋|しん}}（{{西晋|せいしん}}）が一時的に中国を統一する。",
  },
  {
    heading: "{{五胡十六国|ごこじゅうろっこく}}・{{東晋|とうしん}}、南北朝",
    body: "{{西晋|せいしん}}が北方民族の{{侵入|しんにゅう}}で{{崩壊|ほうかい}}すると、北は異民族の国々が乱立し（{{五胡十六国|ごこじゅうろっこく}}）、{{晋|しん}}の一族は南へ{{逃|のが}}れて{{東晋|とうしん}}を建てる。この南北{{分裂|ぶんれつ}}がそのまま南北朝時代へと続く。",
  },
  {
    heading: "{{隋|ずい}}・{{唐|とう}}",
    body: "南北朝の{{分裂|ぶんれつ}}を{{隋|ずい}}が再統一するが、こちらも{{秦|しん}}と同様に短命。その後を{{継|つ}}いだ{{唐|とう}}が約300年続く長期安定政権となる。",
  },
  {
    heading: "五代十国",
    body: "{{唐|とう}}の{{滅亡後|めつぼうご}}、再び{{分裂|ぶんれつ}}した時代。「統一王朝の後には必ず{{分裂期|ぶんれつき}}が来る」という中国史のリズムを意識すると、{{唐|とう}}→五代十国の流れも自然に覚えられる。",
  },
  {
    heading: "{{北宋|ほくそう}}・{{南宋|なんそう}}",
    body: "{{宋|そう}}は北方民族の{{金|きん}}に{{華北|かほく}}を{{奪|うば}}われ、都を南へ移した。都が北にあった前半が{{北宋|ほくそう}}、南へ移った後半が{{南宋|なんそう}}なので、方角の順番どおりに覚えればよい。",
  },
  {
    heading: "元・明・清",
    body: "モンゴル民族が中国全土を支配した元の後、漢民族が明で王朝を取り{{戻|もど}}し、その明を満州民族の清が{{倒|たお}}す。「漢民族→異民族→漢民族→異民族」と支配民族が{{交互|こうご}}に入れ{{替|か}}わる点に注目すると{{記憶|きおく}}が定着しやすい。",
  },
  {
    heading: "{{中華民国|ちゅうかみんこく}}・{{中華人民共和国|ちゅうかじんみんきょうわこく}}",
    body: "1911年の{{辛亥革命|しんがいかくめい}}で清が{{倒|たお}}れて{{中華民国|ちゅうかみんこく}}が成立し、国共内戦を経て1949年に{{中華人民共和国|ちゅうかじんみんきょうわこく}}が建国された。ここは王朝ではなく近代の国家なので、{{語呂合|ごろあ}}わせより出来事の流れで覚えるのが確実。",
  },
];

export default function MnemonicsPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国王朝の覚え方（語呂合わせ）
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 12 }}>
          中学・高校の定期テストや大学入試の世界史では、中国の王朝を正しい順番で答えさせる問題が繰り返し出題されます。
          <ruby>殷<rt>いん</rt></ruby>から<ruby>中華人民共和国<rt>ちゅうかじんみんきょうわこく</rt></ruby>までの流れを語呂合わせで一気に暗記し、続く一覧と暗記のコツで理解を固めましょう。
        </p>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
            語呂合わせで唱える王朝の順番
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 12 }}>
            <ruby>童謡<rt>どうよう</rt></ruby>「うさぎとかめ」（もしもしかめよ、かめさんよ……）のリズムに乗せて口ずさむと、テスト前に短時間で記憶に定着させやすくなります。
          </p>
          <div
            className="flex flex-wrap items-stretch gap-2"
            style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "16px 14px" }}
          >
            {CHANT.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex flex-col items-center" style={{ minWidth: 44 }}>
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 20, fontWeight: 700, color: COLORS.vermilion }}>
                    <RubyText text={item.text} />
                  </span>
                  <span style={{ fontSize: 9.5, color: COLORS.inkSoft, marginTop: 2, whiteSpace: "nowrap" }}><RubyText text={item.note} /></span>
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
            ※ 先史時代の新石器文化・夏、短命だった新（<ruby>王莽<rt>おうもう</rt></ruby>）、<ruby>五胡十六国<rt>ごこじゅうろっこく</rt></ruby>・<ruby>東晋<rt>とうしん</rt></ruby>、十国、<ruby>中華民国<rt>ちゅうかみんこく</rt></ruby>・<ruby>中華人民共和国<rt>ちゅうかじんみんきょうわこく</rt></ruby>は、
            語呂合わせでは前後の王朝にまとめて含めています。詳しい位置づけは下の一覧と暗記のコツで確認してください。
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 8 }}>
            中学生向け：まずはこの10王朝を順番に
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText text={JUNIOR_NOTE} />
          </p>
          <div
            className="text-center"
            style={{ fontFamily: "var(--font-serif), serif", fontSize: 18, fontWeight: 700, color: COLORS.vermilion, backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "12px 10px" }}
          >
            <RubyText text={JUNIOR_CHANT} />
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 10 }}>
            <RubyText text={JUNIOR_JAPAN} />
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 8 }}>
            五代十国の覚え方
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText text={WUDAI_NOTE} />
          </p>
          <div className="flex flex-wrap items-center gap-2" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "12px 14px" }}>
            {WUDAI.map((w, i) => (
              <div key={w.name} className="flex items-center gap-2">
                <div className="flex flex-col items-center" style={{ minWidth: 56 }}>
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.vermilion }}>
                    <RubyText text={w.name} />
                  </span>
                  <span style={{ fontSize: 9.5, color: COLORS.inkSoft, marginTop: 2, whiteSpace: "nowrap" }}>{w.period}</span>
                </div>
                {i < WUDAI.length - 1 && <span style={{ color: COLORS.mist, fontSize: 13 }} aria-hidden>→</span>}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 10 }}>
            <RubyText text={SHIKOKU_NOTE} />
          </p>
          <div style={{ marginTop: 8 }}>
            <Link href="/eras/wudai" style={{ fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
              五代十国の時代解説を読む →
            </Link>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
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
                  style={{ fontSize: 11, color: COLORS.mist, width: 22, fontFamily: "var(--font-serif), serif" }}
                >
                  {i + 1}
                </span>
                <Link
                  href={`/eras/${era.id}`}
                  style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink, minWidth: 132, textDecoration: "underline", textDecorationColor: COLORS.mist }}
                >
                  <RubyText text={era.name} />
                </Link>
                <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>{formatPeriodJa(era.period)}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 12 }}>
            混同しやすい時代の暗記のコツ
          </h2>
          <div className="flex flex-col gap-4">
            {TIPS.map((tip, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${COLORS.vermilion}`, paddingLeft: 12 }}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink, marginBottom: 4 }}>
                  <RubyText text={tip.heading} />
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
            <NavButton href="/eras" variant="solid">時代一覧を見る</NavButton>
            <NavButton href="/people" variant="outline">人物一覧を見る</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/mnemonics" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
