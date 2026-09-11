import { ERAS, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageThumb, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "中国の四大名著とは？三国志演義・水滸伝・西遊記・紅楼夢を解説";
const fullTitle = `中国の四大名著とは？三国志演義・水滸伝・西遊記・紅楼夢を解説 | ${SITE_NAME}`;
const description =
  "『三国志演義』『水滸伝』『西遊記』『紅楼夢』の中国四大名著を、作者や成立年代、あらすじとあわせて解説。それぞれの舞台となった時代を年表・人物ページとリンクで紹介します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/four-great-novels" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/four-great-novels" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

function eraHref(id) {
  return ERAS.some((e) => e.id === id) ? `/eras/${id}` : null;
}

const NOVELS = [
  {
    name: "『{{三国志演義|さんごくしぎえん}}』",
    author: "{{羅貫中|らかんちゅう}}（伝）",
    period: "成立: 元末〜明初（14世紀）／舞台: 後漢末〜三国時代（2〜3世紀）",
    body:
      "後漢末の混乱から{{魏|ぎ}}・{{呉|ご}}・{{蜀|しょく}}が覇を競った三国時代を描いた長編小説。{{劉備|りゅうび}}・{{関羽|かんう}}・{{張飛|ちょうひ}}が義兄弟の契りを結ぶ「桃園の誓い」の場面から物語は始まり、{{諸葛亮|しょかつりょう}}の知略、{{赤壁|せきへき}}の戦いなど数々の名場面で知られる。正史『三国志』を土台に民間伝承や講談を取り込みながら発展し、日本でも{{吉川英治|よしかわえいじ}}の翻案『三国志』などを通じて絶大な人気を誇る。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Peach_garden_ceremony.jpg",
    imageCaption: "1591年刊・明代の『三国志演義』に描かれた「桃園の誓い」（北京大学図書館蔵）",
    credit: "Wikimedia Commons（パブリックドメイン）",
    era: "sanguo",
  },
  {
    name: "『{{水滸伝|すいこでん}}』",
    author: "{{施耐庵|したいあん}}（伝）",
    period: "成立: 元末〜明初（14世紀）／舞台: 北宋末（12世紀）",
    body:
      "腐敗した官吏に追われ、あるいは自ら世を捨てた108人の好漢たちが{{梁山泊|りょうざんぱく}}に集い、義賊として朝廷に立ち向かう物語。{{武松|ぶしょう}}が素手で虎を退治する場面や、{{魯智深|ろちしん}}の豪快な立ち回りなど、個性豊かな豪傑たちの活躍が読みどころ。日本でも{{柴田錬三郎|しばたれんざぶろう}}や{{北方謙三|きたかたけんぞう}}による翻案が広く読まれている。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Wu_Song_Water_Margin.jpg",
    imageCaption: "『水滸伝』の豪傑・武松を描いた19世紀の壁画（北京・頤和園長廊）",
    credit: "Wikimedia Commons（パブリックドメイン）",
    era: "northernsong",
  },
  {
    name: "『{{西遊記|さいゆうき}}』",
    author: "{{呉承恩|ごしょうおん}}（伝）",
    period: "成立: 明代（16世紀）／舞台: 唐代（7世紀）",
    body:
      "唐僧{{三蔵法師|さんぞうほうし}}が孫悟空・猪八戒・沙悟浄を供にインドへ経典を求める旅を描いた奇想天外な物語。モデルとなったのは、実際に国禁を破ってインドへ渡った唐代の僧{{玄奘|げんじょう}}の旅である。妖怪変化との戦いをユーモラスに描く展開は、日本でも『{{西遊記|さいゆうき}}』のドラマ化やアニメ化を通じて古くから親しまれている。",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/The_Journey_to_the_West,_Shidetang_Hall_of_Jinling_in_1592.jpg",
    imageCaption: "現存する最古の版とされる1592年刊・南京「世徳堂」版『西遊記』の挿絵",
    credit: "Wikimedia Commons（パブリックドメイン）",
    era: "tang",
  },
  {
    name: "『{{紅楼夢|こうろうむ}}』",
    author: "{{曹雪芹|そうせつきん}}",
    period: "成立: 清代（18世紀）／舞台: 清代（18世紀）",
    body:
      "没落してゆく貴族の名家・賈家を舞台に、病弱な貴公子{{賈宝玉|かほうぎょく}}と、いとこの{{林黛玉|りんたいぎょく}}・{{薛宝釵|せつほうさい}}らとの恋愛模様を、清代の貴族社会の栄華と衰退とともに描いた大作。他の三作と違い後世の講談ではなく作者自身の創作による純文学的な性格が強く、精緻な人物描写と細部にわたる生活描写から中国古典文学の最高峰とも評される。作者の死により未完のまま伝わり、後半部分の成立には現在も議論が続く。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cao_Xueqin,_Dream_of_the_Red_Chamber_(4140083340).jpg",
    imageCaption: "『紅楼夢』の名場面を描いた石造レリーフ（北京郊外）",
    credit: "写真: klarititemplateshop / Wikimedia Commons, CC BY 2.0",
    era: "qing",
  },
];

const RESOLVED = NOVELS.map((n) => ({ ...n, eraLink: eraHref(n.era) }));

export default function FourGreatNovelsPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国の四大名著とは？
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          <RubyText
            text={
              "『{{三国志演義|さんごくしぎえん}}』『{{水滸伝|すいこでん}}』『{{西遊記|さいゆうき}}』『{{紅楼夢|こうろうむ}}』の四つは、" +
              "中国文学史上最高峰の長編小説として「四大名著（四大古典小説）」と呼ばれる。もとは『{{金瓶梅|きんぺいばい}}』を加えた" +
              "「四大奇書」という括りが先に成立していたが、近代以降『紅楼夢』がこれに取って代わり、現在の四大名著の顔ぶれが定着した。" +
              "三国志演義・水滸伝・西遊記は口承の講談を土台に長い年月をかけて完成した集団的な作品であるのに対し、紅楼夢は" +
              "作者{{曹雪芹|そうせつきん}}個人の創作である点が大きく異なる。"
            }
          />
        </p>

        <div className="flex flex-col gap-5">
          {RESOLVED.map((n, i) => (
            <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
              <div className="relative" style={{ width: "100%", height: 180, backgroundColor: "#EFE7D0", overflow: "hidden" }}>
                <HeritageThumb imageUrl={n.imageUrl} name={n.name} type="building" />
                <span
                  className="absolute flex items-center justify-center"
                  style={{
                    top: 8,
                    left: 8,
                    minWidth: 26,
                    height: 26,
                    padding: "0 8px",
                    borderRadius: 13,
                    backgroundColor: COLORS.vermilion,
                    color: "#FBF8F0",
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {i + 1}
                </span>
              </div>
              <div style={{ padding: "14px 16px" }}>
                {n.imageCaption && (
                  <div style={{ fontSize: 10.5, color: COLORS.mist, marginBottom: 8 }}>
                    <RubyText text={n.imageCaption} />
                    {n.credit && <span> ／ {n.credit}</span>}
                  </div>
                )}
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={n.name} />
                  </span>
                  <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif", textAlign: "right" }}>
                    {n.period}
                  </span>
                </div>
                <p style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>
                  作者: <RubyText text={n.author} />
                </p>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={n.body} />
                </p>
                {n.eraLink && (
                  <a
                    href={n.eraLink}
                    style={{ display: "inline-block", marginTop: 10, fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
                  >
                    舞台となった時代を年表で読む →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            四大名著を翻案した日本人小説家は「小説家一覧」ページに、これらの物語のモデルとなった史実は年表・人物一覧でたどれます。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/novelists" variant="solid">日本人小説家一覧を見る</NavButton>
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
