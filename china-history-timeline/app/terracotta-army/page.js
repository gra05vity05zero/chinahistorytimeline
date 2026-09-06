import { ERAS, stripRuby, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageGrid, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "兵馬俑・始皇帝陵の謎";
const fullTitle = `兵馬俑・始皇帝陵の謎 | ${SITE_NAME}`;
const description =
  "1974年、農民の井戸掘りをきっかけに発見された兵馬俑。一体ずつ違う顔、いまだ未発掘の始皇帝陵本体に眠るとされる水銀の川の伝説など、始皇帝陵にまつわる謎と雑学をまとめました。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/terracotta-army" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/terracotta-army" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const qinEra = ERAS.find((e) => e.id === "qin");
const unificationEvent = qinEra?.events.find((ev) => stripRuby(ev.title).includes("中国統一"));
const heritageItems = unificationEvent?.heritage?.filter((h) => ["兵馬俑", "秦始皇陵", "始皇帝"].some((k) => stripRuby(h.name).includes(k))) || [];

export default function TerracottaArmyPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          兵馬俑・始皇帝陵の謎
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          <RubyText text="中国を初めて統一した{{始皇帝|しこうてい}}が眠るとされる巨大な陵墓と、その副葬として作られた兵馬俑には、今なお解明されていない謎が数多く残されています。発見の経緯から本体の陵墓が未発掘のままである理由まで、まとめて紹介します。" />
        </p>

        {heritageItems.length > 0 && (
          <section style={{ marginBottom: 28 }}>
            <HeritageGrid items={heritageItems} eraId="qin" />
          </section>
        )}

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            きっかけは農民の井戸掘りだった
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText text="兵馬俑が発見されたのは1974年のこと。{{陝西省|せんせいしょう}}{{臨潼|りんとう}}の農民が日照りに備えて井戸を掘っていたところ、地中から陶製の人体の破片が次々と出てきたのが発端だった。当初は誰もそれが2000年以上前の遺物だとは思わず、村の共同財産として扱われかけたとも伝えられる。その後、考古学者による本格的な発掘調査が始まり、20世紀最大級の考古学的発見の一つとして世界中に知られることになった。" />
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            一体ずつ顔が違う、8000体の兵士たち
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText text="発掘された3つの{{坑|こう}}からは、等身大の兵士や軍馬、戦車をかたどった陶製の像が推定8000体以上見つかっている。驚くべきことに、その顔つきはほぼすべてが異なっており、同じ顔は一つとしてないとされる。頭部や手足などのパーツを型を使って量産しつつ、最後は職人が一体ずつ手作業で仕上げたためと考えられている。当初はカラフルに彩色されていたことも分かっており、発掘直後の兵馬俑には赤や緑、紫などの鮮やかな色が残っていた。" />
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            なぜ彩色はすぐに消えてしまうのか
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText text="兵馬俑の彩色は、地中の湿った環境で2000年以上安定して保たれてきたが、発掘によって空気にさらされると、わずか数分から数時間で乾燥・収縮して剥落してしまうことが分かっている。このため現在発掘済みの兵馬俑の多くは、素焼きに近いくすんだ色合いで展示されている。保存技術の確立が課題となっており、これは始皇帝陵本体の発掘が慎重に見送られている理由の一つでもある。" />
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            なぜ陵墓の本体はいまだ発掘されないのか
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText text="兵馬俑はあくまで始皇帝陵の周辺に配置された副葬（陪葬）にすぎず、始皇帝自身の遺体が納められているとされる巨大な墳丘・地下宮殿の本体は、現在もほとんど手つかずのまま残されている。歴史書『{{史記|しき}}』には、地下宮殿の中に{{水銀|すいぎん}}で川や海を再現し、天井には夜空に見立てて真珠がちりばめられ、侵入者を射抜く仕掛けの{{弩|ど}}（自動発射式の弓）まで備えられていた、という記述が残る。" />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText text="荒唐無稽な伝説のようにも思えるが、現代の調査では墳丘周辺の土壌から通常より高い濃度の水銀が検出されたとの報告もあり、『史記』の記述が単なる作り話ではない可能性を示唆している。盗掘や保存技術の限界に加え、こうした未知のリスクへの懸念もあって、地下宮殿本体の本格的な発掘は現在も見送られたままとなっている。" />
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            不老不死を求め続けた始皇帝
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText text="これほど巨大な陵墓を築かせた背景には、始皇帝自身の死への強い恐れと、不老不死への執着があったとされる。晩年の始皇帝は仙薬を求めて方士を各地に派遣しており、なかでも{{徐福|じょふく}}という方士が「東方の{{蓬莱|ほうらい}}の島に仙薬がある」と説いて数千人を率いて船出したものの、二度と戻らなかったという伝説はよく知られている。日本各地には徐福が漂着したという伝承地も伝わっているが、史実として確認されたものではない。" />
          </p>
        </section>

        <section>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            兵馬俑と始皇帝陵は1987年にユネスコの世界遺産に登録されている。始皇帝その人の生涯や、秦が中国を統一した経緯については、年表・人物ページもあわせてご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/qin" variant="solid">秦の出来事一覧を見る</NavButton>
            <NavButton href="/world-heritage" variant="outline">中国の世界遺産まとめを見る</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
