import { ERAS, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { TERRITORY_FRAMES } from "@/lib/dynastyTerritories";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { DynastyTerritoryMap } from "@/components/DynastyTerritoryMap";

const title = "中国 歴代王朝の領土（版図）の変遷を地図で見る";
const fullTitle = `中国 歴代王朝の領土（版図）の変遷を地図で見る | ${SITE_NAME}`;
const description =
  "殷・周から秦・漢・唐・宋・元・明・清まで、中国の歴代王朝の領土（版図）がどう広がり、どう縮んだのかを、時代ごとに切り替わるアニメーション地図でたどります。匈奴・突厥・遼・金などの周辺勢力との関係もあわせて解説。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/dynasty-territory-map" },
  openGraph: buildOpenGraph({
    title: fullTitle,
    description,
    path: "/dynasty-territory-map",
    image: { title: "歴代王朝の領土の変遷", subtitle: "殷から清まで、地図で見る中国の版図" },
  }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const ERA_BY_ID = Object.fromEntries(ERAS.map((era) => [era.id, era]));

// 版図の大きさをめぐるよくある疑問への短い答え
const POINTS = [
  {
    heading: "広がる時代と{{縮|ちぢ}}む時代が{{交互|こうご}}にくる",
    body: "{{秦|しん}}・漢、{{隋|ずい}}・{{唐|とう}}、元・清のような統一王朝の最盛期には版図が大きく外へ広がる一方、三国・南北朝・五代十国・宋金のような分裂期には、中国本土そのものが複数の政権に分かれた。漢・{{唐|とう}}の西域や{{唐|とう}}の{{都護府|とごふ}}のように、最盛期の外縁部は現地の首長を通じたゆるやかな支配であることも多い。",
  },
  {
    heading: "北方の遊牧勢力との関係が国境を決めた",
    body: "{{匈奴|きょうど}}・{{鮮卑|せんぴ}}・{{突厥|とっけつ}}・モンゴルなど、モンゴル高原の遊牧勢力との力関係が、歴代王朝の北の国境を左右し続けた。長城が築かれた位置は、おおむね農耕地帯と草原の境目にあたる。{{遼|りょう}}・{{金|きん}}・元・清のように、北方から中国本土へ入って王朝を建てた例も多い。",
  },
  {
    heading: "版図がいちばん広かったのは元と清",
    body: "元はモンゴル帝国の一部として、中国本土にモンゴル高原・{{満洲|まんしゅう}}・チベットを加えた広大な領域を直轄した。清は{{乾隆帝|けんりゅうてい}}の時代に{{新疆|しんきょう}}を{{併合|へいごう}}して最大版図に達し、この範囲が現在の中国の国境の{{基礎|きそ}}になっている。{{唐|とう}}も7世紀後半には{{都護府|とごふ}}を通じて中央アジアにまで勢力を{{及|およ}}ぼしたが、その期間は比較的短かった。",
  },
];

export default function DynastyTerritoryMapPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国 歴代王朝の領土（<ruby>版図<rt>はんと</rt></ruby>）の<ruby>変遷<rt>へんせん</rt></ruby>を地図で見る
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          「中国」の範囲は、時代によって大きく変わってきました。黄河中流域の小さな王朝から始まり、<ruby>秦<rt>しん</rt></ruby>・漢で中国本土の原型ができ、
          <ruby>唐<rt>とう</rt></ruby>や元、清の時代には中央アジアやモンゴル高原にまで広がります。
          ここでは<ruby>殷<rt>いん</rt></ruby>から清まで16の時点を選び、各王朝と周辺勢力の<ruby>版図<rt>はんと</rt></ruby>の移り変わりを地図でたどります。
        </p>

        <section style={{ marginBottom: 12 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 18, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            領域<ruby>変遷<rt>へんせん</rt></ruby>マップ
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 12 }}>
            再生ボタンで時代が順に切り替わります。下の王朝名のボタンで、見たい時代へ直接移動することもできます。
            朱色が各時代の中国の王朝、点線は現在の中国の範囲です。
            版図は勢力範囲の目安として大まかに<ruby>描<rt>えが</rt></ruby>いたもので、国境を<ruby>厳密<rt>げんみつ</rt></ruby>に示すものではありません（名目的な支配や時期による増減には<ruby>諸説<rt>しょせつ</rt></ruby>があります）。
          </p>
          <DynastyTerritoryMap />
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 18, fontWeight: 700, color: COLORS.ink, marginBottom: 14 }}>
            <ruby>版図<rt>はんと</rt></ruby>の移り変わりから見えること
          </h2>
          <div className="flex flex-col gap-3">
            {POINTS.map((p) => (
              <div key={p.heading} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "12px 14px" }}>
                <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink, marginBottom: 4 }}>
                  <RubyText text={p.heading} />
                </h3>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
                  <RubyText text={p.body} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 18, fontWeight: 700, color: COLORS.ink, marginBottom: 14 }}>
            時代ごとの<ruby>版図<rt>はんと</rt></ruby>
          </h2>
          <ol className="flex flex-col gap-3">
            {TERRITORY_FRAMES.map((frame, i) => (
              <li key={frame.id} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "12px 14px" }}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 12, fontWeight: 700, color: COLORS.vermilion }}>{i + 1}</span>
                  <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={frame.title} />
                  </h3>
                  <span style={{ fontSize: 11.5, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>{frame.year}</span>
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 4 }}>
                  <RubyText text={frame.desc} />
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2" style={{ fontSize: 12 }}>
                  {frame.eraIds
                    .map((id) => ERA_BY_ID[id])
                    .filter(Boolean)
                    .map((era) => (
                      <a key={era.id} href={`/eras/${era.id}`} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                        <RubyText text={era.name} />の年表を読む →
                      </a>
                    ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            戦国七雄・三国・<ruby>隋唐<rt>ずいとう</rt></ruby>の各時代については、勢力図がより細かく移り変わる様子を合戦マップのページで見ることができます。
            歴代王朝が都を置いた場所は「歴代王朝の都一覧」で<ruby>紹介<rt>しょうかい</rt></ruby>しています。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/china-capitals" variant="solid">歴代王朝の都一覧を見る</NavButton>
            <NavButton href="/chunqiu-zhanguo-battles" variant="outline">春秋・戦国の合戦マップ</NavButton>
            <NavButton href="/sanguo-battles" variant="outline">三国時代の合戦マップ</NavButton>
            <NavButton href="/suitang-battles" variant="outline"><ruby>隋唐<rt>ずいとう</rt></ruby>の合戦マップ</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
