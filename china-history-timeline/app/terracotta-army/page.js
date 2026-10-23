import { ERAS, stripRuby, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageGrid, MiscLinksSection, A8AdBlock } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

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
const heritageItems = unificationEvent?.heritage?.filter((h) => ["{{兵馬俑|へいばよう}}", "{{秦始皇陵|しんしこうていりょう}}", "{{始皇帝|しこうてい}}"].some((k) => stripRuby(h.name).includes(k))) || [];

export default function TerracottaArmyPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          <ruby>兵馬俑<rt>へいばよう</rt></ruby>・<ruby>始皇帝陵<rt>しこうていりょう</rt></ruby>の<ruby>謎<rt>なぞ</rt></ruby>
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          <RubyText text="中国を初めて統一した{{始皇帝|しこうてい}}が{{眠|ねむ}}るとされる{{巨大|きょだい}}な{{陵墓|りょうぼ}}と、その{{副葬|ふくそう}}として作られた{{兵馬俑|へいばよう}}には、今なお解明されていない{{謎|なぞ}}が数多く残されています。発見の{{経緯|けいい}}から本体の{{陵墓|りょうぼ}}が{{未発掘|みはっくつ}}のままである理由まで、まとめて{{紹介|しょうかい}}します。" />
        </p>

        {heritageItems.length > 0 && (
          <section style={{ marginBottom: 28 }}>
            <HeritageGrid items={heritageItems} eraId="qin" />
          </section>
        )}

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            きっかけは農民の<ruby>井戸掘<rt>いどほ</rt></ruby>りだった
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText text="{{兵馬俑|へいばよう}}が発見されたのは1974年のこと。{{陝西省|せんせいしょう}}{{臨潼|りんとう}}の農民が日照りに備えて井戸を{{掘|ほ}}っていたところ、地中から{{陶製|とうせい}}の人体の破片が次々と出てきたのが{{発端|ほったん}}だった。当初は{{誰|だれ}}もそれが2000年以上前の遺物だとは思わず、村の共同財産として{{扱|あつか}}われかけたとも伝えられる。その後、考古学者による本格的な{{発掘|はっくつ}}調査が始まり、20世紀最大級の考古学的発見の一つとして世界中に知られることになった。" />
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            一体ずつ顔が<ruby>違<rt>ちが</rt></ruby>う、8000体の兵士たち
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText text="{{発掘|はっくつ}}された3つの{{坑|こう}}からは、等身大の兵士や軍馬、戦車をかたどった{{陶製|とうせい}}の像が推定8000体以上見つかっている。{{驚|おどろ}}くべきことに、その顔つきはほぼすべてが異なっており、同じ顔は一つとしてないとされる。頭部や手足などのパーツを型を使って量産しつつ、最後は職人が一体ずつ手作業で仕上げたためと考えられている。当初はカラフルに{{彩色|さいしき}}されていたことも分かっており、{{発掘|はっくつ}}直後の{{兵馬俑|へいばよう}}には赤や緑、{{紫|むらさき}}などの{{鮮|あざ}}やかな色が残っていた。" />
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            なぜ<ruby>彩色<rt>さいしき</rt></ruby>はすぐに消えてしまうのか
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText text="{{兵馬俑|へいばよう}}の{{彩色|さいしき}}は、地中の{{湿|しめ}}った{{環境|かんきょう}}で2000年以上安定して保たれてきたが、{{発掘|はっくつ}}によって空気にさらされると、わずか数分から数時間で{{乾燥|かんそう}}・収縮して{{剥落|はくらく}}してしまうことが分かっている。このため現在{{発掘済|はっくつず}}みの{{兵馬俑|へいばよう}}の多くは、素焼きに近いくすんだ色合いで展示されている。保存技術の確立が課題となっており、これは{{始皇帝陵|しこうていりょう}}本体の{{発掘|はっくつ}}が{{慎重|しんちょう}}に見送られている理由の一つでもある。" />
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            なぜ<ruby>陵墓<rt>りょうぼ</rt></ruby>の本体はいまだ<ruby>発掘<rt>はっくつ</rt></ruby>されないのか
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText text="{{兵馬俑|へいばよう}}はあくまで{{始皇帝陵|しこうていりょう}}の周辺に配置された{{副葬|ふくそう}}（{{陪葬|ばいそう}}）にすぎず、{{始皇帝|しこうてい}}自身の遺体が納められているとされる{{巨大|きょだい}}な{{墳丘|ふんきゅう}}・地下{{宮殿|きゅうでん}}の本体は、現在もほとんど手つかずのまま残されている。歴史書『{{史記|しき}}』には、地下{{宮殿|きゅうでん}}の中に{{水銀|すいぎん}}で川や海を再現し、天井には夜空に見立てて{{真珠|しんじゅ}}がちりばめられ、{{侵入者|しんにゅうしゃ}}を{{射抜|いぬ}}く{{仕掛|しか}}けの{{弩|ど}}（自動発射式の弓）まで備えられていた、という記述が残る。" />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText text="{{荒唐無稽|こうとうむけい}}な伝説のようにも思えるが、現代の調査では{{墳丘|ふんきゅう}}周辺の{{土壌|どじょう}}から通常より高い{{濃度|のうど}}の水銀が検出されたとの報告もあり、『史記』の記述が単なる作り話ではない可能性を{{示唆|しさ}}している。{{盗掘|とうくつ}}や保存技術の限界に加え、こうした未知のリスクへの{{懸念|けねん}}もあって、地下{{宮殿|きゅうでん}}本体の本格的な{{発掘|はっくつ}}は現在も見送られたままとなっている。" />
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            不老不死を求め続けた<ruby>始皇帝<rt>しこうてい</rt></ruby>
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText text="これほど{{巨大|きょだい}}な{{陵墓|りょうぼ}}を築かせた背景には、{{始皇帝|しこうてい}}自身の死への強い{{恐|おそ}}れと、不老不死への{{執着|しゅうちゃく}}があったとされる。晩年の{{始皇帝|しこうてい}}は{{仙薬|せんやく}}を求めて方士を各地に{{派遣|はけん}}しており、なかでも{{徐福|じょふく}}という方士が「東方の{{蓬莱|ほうらい}}の島に{{仙薬|せんやく}}がある」と説いて数千人を率いて船出したものの、二度と{{戻|もど}}らなかったという伝説はよく知られている。日本各地には{{徐福|じょふく}}が{{漂着|ひょうちゃく}}したという伝承地も伝わっているが、史実として確認されたものではない。" />
          </p>
        </section>

        <section>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            <ruby>兵馬俑<rt>へいばよう</rt></ruby>と<ruby>始皇帝陵<rt>しこうていりょう</rt></ruby>は1987年にユネスコの世界遺産に登録されている。<ruby>始皇帝<rt>しこうてい</rt></ruby>その人の<ruby>生涯<rt>しょうがい</rt></ruby>や、<ruby>秦<rt>しん</rt></ruby>が中国を統一した<ruby>経緯<rt>けいい</rt></ruby>については、年表・人物ページもあわせてご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/qin" variant="solid"><ruby>秦<rt>しん</rt></ruby>の時代解説を見る</NavButton>
            <NavButton href="/world-heritage" variant="outline">中国の世界遺産まとめを見る</NavButton>
          </div>
        </section>

        <A8AdBlock ad="agoda" className="mt-10" />

        <RelatedEraGuides path="/terracotta-army" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
