import { ERAS, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "中国史を題材にした日本人小説家一覧";
const fullTitle = `中国史を題材にした日本人小説家一覧 | ${SITE_NAME}`;
const description =
  "『三国志』『項羽と劉邦』『敦煌』など、中国の歴史を題材に数々の名作を残した日本人小説家をまとめました。読書感想文や次に読む一冊探しにもどうぞ。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/novelists" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/novelists" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

function eraHref(id) {
  return ERAS.some((e) => e.id === id) ? `/eras/${id}` : null;
}

const NOVELISTS = [
  {
    name: "{{吉川英治|よしかわえいじ}}",
    works: "『三国志』",
    body: "『{{三国志演義|さんごくしぎえん}}』を日本語で読みやすく再構成した国民的名作。以後の日本における三国志ブーム（ゲームや漫画も含む）の原点とされる。",
    era: "三国時代",
    href: eraHref("sanguo"),
  },
  {
    name: "{{陳舜臣|ちんしゅんしん}}",
    works: "『{{秦始皇帝|しんのしこうてい}}』『{{太平天国|たいへいてんごく}}』『{{小説十八史略|しょうせつじゅうはっしりゃく}}』ほか",
    body: "台湾系の家系に生まれ、神戸で育った作家。中国史全域を舞台に膨大な作品を残し、綿密な考証に基づく歴史小説の書き手として高く評価されている。{{直木賞|なおきしょう}}受賞。",
    era: "秦〜清",
    href: eraHref("qin"),
  },
  {
    name: "{{井上靖|いのうえやすし}}",
    works: "『{{敦煌|とんこう}}』『{{楼蘭|ろうらん}}』『{{孔子|こうし}}』",
    body: "シルクロードや西域を舞台にした作品で知られる文豪。『敦煌』は北宋時代の西域を舞台にした代表作の一つ。",
    era: "北宋・前漢ほか",
    href: eraHref("northernsong"),
  },
  {
    name: "{{宮城谷昌光|みやぎたにまさみつ}}",
    works: "『{{重耳|ちょうじ}}』『{{太公望|たいこうぼう}}』『{{楽毅|がっき}}』『{{孟嘗君|もうしょうくん}}』ほか",
    body: "春秋戦国時代を中心に、古代中国史の人物を丹念に描く歴史小説の第一人者。この時代を専門的に扱う作家として国内でも独自の位置を占める。",
    era: "春秋・戦国時代",
    href: eraHref("zhanguo"),
  },
  {
    name: "{{司馬遼太郎|しばりょうたろう}}",
    works: "『項羽と劉邦』",
    body: "日本史小説の巨匠として知られるが、秦末の動乱から{{楚漢戦争|そかんせんそう}}を描いた『項羽と劉邦』は中国史題材の代表作として広く読まれている。",
    era: "秦末〜楚漢戦争",
    href: eraHref("qin"),
  },
  {
    name: "{{北方謙三|きたかたけんぞう}}",
    works: "『三国志』『水滸伝』『楊令伝』『岳飛伝』",
    body: "ハードボイルド作家として知られる筆致で、三国志や水滸伝など中国の古典を独自の解釈で書き直したシリーズを多数手がける。",
    era: "三国時代・北宋",
    href: eraHref("sanguo"),
  },
  {
    name: "{{塚本青史|つかもとせいし}}",
    works: "『劉邦』『呉・越春秋』『諸葛孔明』",
    body: "前漢の建国者{{劉邦|りゅうほう}}や三国志の{{諸葛亮|しょかつりょう}}など、中国史の英雄たちを主題にした作品を多く手がける。",
    era: "前漢・三国時代",
    href: eraHref("westernhan"),
  },
  {
    name: "{{酒見賢一|さかみけんいち}}",
    works: "『後宮小説』『墨攻』",
    body: "架空の中国王朝を舞台にしたデビュー作『後宮小説』で日本SF大賞を受賞。戦国時代の思想家{{墨子|ぼくし}}の守城戦を描いた『墨攻』は映画化・漫画化もされた。",
    era: "戦国時代",
    href: eraHref("zhanguo"),
  },
  {
    name: "{{田中芳樹|たなかよしき}}",
    works: "『奔流』ほか",
    body: "『銀河英雄伝説』で知られるが、南北朝時代を舞台にした『奔流』など中国史を題材にした作品も手がけている。",
    era: "南北朝時代",
    href: eraHref("nanbei"),
  },
  {
    name: "{{安能務|あんのうつとむ}}",
    works: "『封神演義』『西遊記』『三国志演義』（現代語訳・再構成）",
    body: "中国の四大奇書などの古典を、現代の読者にも読みやすい形で翻訳・再構成したことで知られる。後のアニメ・漫画化された作品の原典として広く読まれた。",
    era: "殷末〜三国時代",
    href: eraHref("sanguo"),
  },
  {
    name: "{{柴田錬三郎|しばたれんざぶろう}}",
    works: "『水滸伝』",
    body: "戦後日本を代表する大衆小説家の一人。北宋末の梁山泊に集う好漢たちを描いた『水滸伝』の翻案で知られる。",
    era: "北宋",
    href: eraHref("northernsong"),
  },
];

export default function NovelistsPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国史を題材にした日本人小説家一覧
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          日本では江戸時代の『三国志演義』翻訳以来、中国の歴史は多くの小説家たちを魅了してきました。
          代表作とあわせて紹介しますので、興味のある時代の一冊から手に取ってみてください。
        </p>

        <div className="flex flex-col gap-3">
          {NOVELISTS.map((n, i) => (
            <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "14px 16px" }}>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}>
                  <RubyText text={n.name} />
                </span>
                <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>{n.era}</span>
              </div>
              <p style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>
                <RubyText text={n.works} />
              </p>
              <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 4 }}>
                <RubyText text={n.body} />
              </p>
              {n.href && (
                <a href={n.href} style={{ display: "inline-block", marginTop: 8, fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                  舞台となった時代を年表で読む →
                </a>
              )}
            </div>
          ))}
        </div>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            小説の舞台になった時代の詳しい出来事や人物は、年表・人物一覧からたどれます。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras" variant="solid">出来事一覧を見る</NavButton>
            <NavButton href="/people" variant="outline">人物一覧を見る</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
