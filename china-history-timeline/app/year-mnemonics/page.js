import { ERAS, stripRuby, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "中国史 年号ゴロ合わせ集";
const fullTitle = `中国史 年号ゴロ合わせ集 | ${SITE_NAME}`;
const description =
  "秦の中国統一（前221年）から中華人民共和国の建国（1949年）まで、中国史の重要な年号をゴロ合わせで覚えるページ。中学・高校の定期テストや大学入試対策にどうぞ。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/year-mnemonics" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/year-mnemonics" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

function findEventHref(eraId, titleIncludes) {
  const era = ERAS.find((e) => e.id === eraId);
  if (!era) return null;
  const event = era.events.find((ev) => stripRuby(ev.title).includes(titleIncludes));
  return event ? `/events/${event.slug}` : null;
}

const YEARS = [
  {
    year: "紀元前221年",
    event: "{{秦|しん}}が中国を統一",
    goro: "{{鈍|にぶ}}い（にぶい）",
    breakdown: "に(2)ぶ(2)い(1)",
    note: "対応が{{鈍|にぶ}}かった六国を、{{秦|しん}}がまとめて{{滅|ほろ}}ぼし統一。",
    href: findEventHref("qin", "中国統一"),
  },
  {
    year: "紀元前202年",
    event: "{{劉邦|りゅうほう}}が漢を建国",
    goro: "庭に（にわに）",
    breakdown: "に(2)わ(0)に(2)",
    note: "{{楚漢戦争|そかんせんそう}}を制した{{劉邦|りゅうほう}}が、庭に旗を立てるように漢を建てた、とイメージ。",
    href: findEventHref("westernhan", "漢を建国"),
  },
  {
    year: "220年",
    event: "{{魏|ぎ}}が建国・後漢が{{滅亡|めつぼう}}",
    goro: "ふふわ",
    breakdown: "ふ(2)ふ(2)わ(0)",
    note: "{{曹丕|そうひ}}が{{献帝|けんてい}}から{{禅譲|ぜんじょう}}を受け、ふわっと（{{穏便|おんびん}}に）王朝が交代した。",
    href: findEventHref("sanguo", "魏の建国"),
  },
  {
    year: "581年",
    event: "{{隋|ずい}}が建国（{{楊堅|ようけん}}）",
    goro: "五倍（ごばい）",
    breakdown: "ご(5)ば(8)い(1)",
    note: "南北朝の{{分裂|ぶんれつ}}を経て、{{隋|ずい}}が中国統一への力を五倍にたくわえた、とイメージ。",
    href: findEventHref("sui", "隋の建国"),
  },
  {
    year: "618年",
    event: "{{唐|とう}}が建国（{{李淵|りえん}}）",
    goro: "{{無為|むい}}は（むいは）",
    breakdown: "む(6)い(1)は(8)",
    note: "{{隋末|ずいまつ}}の混乱をよそに、{{李淵|りえん}}はしばらく{{無為|むい}}（何もしない）を装ってから挙兵したとイメージ。",
    href: findEventHref("tang", "唐の建国"),
  },
  {
    year: "907年",
    event: "{{唐|とう}}が{{滅亡|めつぼう}}（{{朱全忠|しゅぜんちゅう}}が{{簒奪|さんだつ}}）",
    goro: "{{桑名|くわな}}（くわな）",
    breakdown: "く(9)わ(0)な(7)",
    note: "{{唐|とう}}の都から遠く{{離|はな}}れた「{{桑名|くわな}}」に旅立つように、王朝が幕を下ろした、とイメージ。",
    href: findEventHref("tang", "唐を簒奪"),
  },
  {
    year: "960年",
    event: "{{趙匡胤|ちょうきょういん}}が{{宋|そう}}を建国",
    goro: "黒羽（くろわ）",
    breakdown: "く(9)ろ(6)わ(0)",
    note: "{{趙匡胤|ちょうきょういん}}は部下に黄色い衣（{{黄袍|こうほう}}）を着せられて{{即位|そくい}}した。黒ではなく黄色だった点に注意。",
    href: findEventHref("northernsong", "宋の建国"),
  },
  {
    year: "1279年",
    event: "{{南宋|なんそう}}が{{滅亡|めつぼう}}し元が中国統一",
    goro: "いになく",
    breakdown: "い(1)に(2)な(7)く(9)",
    note: "{{崖山|がいざん}}の戦いに敗れた{{南宋|なんそう}}の{{幼帝|ようてい}}と臣下が、海に身を投げて泣くように{{滅|ほろ}}んだ。",
    href: findEventHref("southernsong", "崖山"),
  },
  {
    year: "1368年",
    event: "明が建国（{{朱元璋|しゅげんしょう}}）",
    goro: "勇は（いさむは）",
    breakdown: "い(1)さ(3)む(6)は(8)",
    note: "貧しい農民から{{皇帝|こうてい}}にまで上りつめた{{朱元璋|しゅげんしょう}}の勇気ある{{生涯|しょうがい}}にちなむ。",
    href: findEventHref("ming", "明の建国"),
  },
  {
    year: "1644年",
    event: "清が北京に入城",
    goro: "色よし（いろよし）",
    breakdown: "い(1)ろ(6)よ(4)し(4)",
    note: "{{満洲族|まんしゅうぞく}}の色（{{辮髪|べんぱつ}}・衣装）に世が変わった年、とイメージ。",
    href: findEventHref("qing", "清の北京入城"),
  },
  {
    year: "1911年",
    event: "{{辛亥革命|しんがいかくめい}}が起こる",
    goro: "一級いい（いっきゅういい）",
    breakdown: "い(1)っきゅう(9)い(1)い(1)",
    note: "2000年以上続いた{{皇帝|こうてい}}支配に{{終止符|しゅうしふ}}を打った、まさに一級の大事件。",
    href: findEventHref("qing", "辛亥革命"),
  },
  {
    year: "1949年",
    event: "{{中華人民共和国|ちゅうかじんみんきょうわこく}}が建国",
    goro: "いくよく",
    breakdown: "い(1)く(9)よ(4)く(9)",
    note: "国共内戦を経て、新しい中国がいくよく（{{幾|いく}}よく）歩み出した年、とイメージ。",
    href: findEventHref("prc", "中華人民共和国の建国"),
  },
];

export default function YearMnemonicsPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国史 年号ゴロ合わせ集
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 14 }}>
          中学・高校のテストや大学入試の世界史では、王朝の順番だけでなく、建国・<ruby>滅亡<rt>めつぼう</rt></ruby>の年号そのものを問われることもあります。
          数字の音を言葉に置き<ruby>換<rt>か</rt></ruby>えるゴロ合わせで、重要な年号を覚えてしまいましょう。
        </p>
        <p style={{ fontSize: 12, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 28 }}>
          ※ ここで<ruby>紹介<rt>しょうかい</rt></ruby>するゴロ合わせは、覚えやすさを優先した一例です。自分なりの言葉に置き<ruby>換<rt>か</rt></ruby>えてもかまいません。
        </p>

        <div className="flex flex-col gap-3">
          {YEARS.map((item, i) => (
            <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "14px 16px" }}>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.gold }}>
                  <RubyText text={item.year} />
                </span>
                <span style={{ fontSize: 12, color: COLORS.inkSoft }}><RubyText text={item.event} /></span>
              </div>
              <div className="flex items-baseline gap-2 mt-2 flex-wrap">
                <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 700, color: COLORS.vermilion }}>
                  <RubyText text={item.goro} />
                </span>
                <span style={{ fontSize: 11, color: COLORS.mist }}><RubyText text={item.breakdown} /></span>
              </div>
              <p style={{ fontSize: 12.5, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 6 }}><RubyText text={item.note} /></p>
              {item.href && (
                <a href={item.href} style={{ display: "inline-block", marginTop: 8, fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                  この出来事を年表で読む →
                </a>
              )}
            </div>
          ))}
        </div>

        <section style={{ marginTop: 32 }}>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/mnemonics" variant="solid">王朝の覚え方を見る</NavButton>
            <NavButton href="/eras" variant="outline">出来事一覧を見る</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
