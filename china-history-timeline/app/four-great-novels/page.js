import { ERAS, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageThumb, MiscLinksSection, A8AdBlock } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

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
    period: "成立: 元末〜明初（14世紀）／{{舞台|ぶたい}}: 後漢末〜三国時代（2〜3世紀）",
    body:
      "後漢末の混乱から{{魏|ぎ}}・{{呉|ご}}・{{蜀|しょく}}が{{覇|は}}を競った三国時代を{{描|えが}}いた長編小説。{{劉備|りゅうび}}・{{関羽|かんう}}・{{張飛|ちょうひ}}が義兄弟の{{契|ちぎ}}りを結ぶ「{{桃園の誓い|とうえんのちかい}}」の場面から物語は始まり、{{諸葛亮|しょかつりょう}}の知略、{{赤壁|せきへき}}の戦いなど数々の名場面で知られる。正史『三国志』を土台に民間伝承や講談を取り{{込|こ}}みながら発展し、日本でも{{吉川英治|よしかわえいじ}}の{{翻案|ほんあん}}『三国志』などを通じて絶大な人気を{{誇|ほこ}}る。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Peach_garden_ceremony.jpg",
    imageCaption: "1591年刊・明代の『三国志演義』に{{描|えが}}かれた「{{桃園の誓い|とうえんのちかい}}」（北京大学図書館蔵）",
    credit: "Wikimedia Commons（パブリックドメイン）",
    era: "sanguo",
  },
  {
    name: "『{{水滸伝|すいこでん}}』",
    author: "{{施耐庵|したいあん}}（伝）",
    period: "成立: 元末〜明初（14世紀）／{{舞台|ぶたい}}: {{北宋末|ほくそうまつ}}（12世紀）",
    body:
      "{{腐敗|ふはい}}した{{官吏|かんり}}に追われ、あるいは自ら世を捨てた108人の好漢たちが{{梁山泊|りょうざんぱく}}に集い、{{義賊|ぎぞく}}として{{朝廷|ちょうてい}}に立ち向かう物語。{{武松|ぶしょう}}が素手で{{虎|とら}}を退治する場面や、{{魯智深|ろちしん}}の{{豪快|ごうかい}}な立ち回りなど、個性豊かな{{豪傑|ごうけつ}}たちの{{活躍|かつやく}}が読みどころ。日本でも{{柴田錬三郎|しばたれんざぶろう}}や{{北方謙三|きたかたけんぞう}}による{{翻案|ほんあん}}が広く読まれている。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Wu_Song_Water_Margin.jpg",
    imageCaption: "『{{水滸伝|すいこでん}}』の{{豪傑|ごうけつ}}・武松を{{描|えが}}いた19世紀の{{壁画|へきが}}（北京・{{頤和園|いわえん}}{{長廊|ちょうろう}}）",
    credit: "Wikimedia Commons（パブリックドメイン）",
    era: "northernsong",
    pageHref: "/suikoden",
    pageLabel: "{{水滸伝|すいこでん}}をくわしく読む",
  },
  {
    name: "『{{西遊記|さいゆうき}}』",
    author: "{{呉承恩|ごしょうおん}}（伝）",
    period: "成立: 明代（16世紀）／{{舞台|ぶたい}}: {{唐代|とうだい}}（7世紀）",
    body:
      "{{唐僧|とうそう}}{{三蔵法師|さんぞうほうし}}が{{孫悟空|そんごくう}}・{{猪八戒|ちょはっかい}}・{{沙悟浄|さごじょう}}を供にインドへ経典を求める旅を{{描|えが}}いた{{奇想|きそう}}天外な物語。モデルとなったのは、実際に国禁を破ってインドへ{{渡|わた}}った{{唐代|とうだい}}の{{僧|そう}}{{玄奘|げんじょう}}の旅である。{{妖怪|ようかい}}変化との戦いをユーモラスに{{描|えが}}く展開は、日本でも『{{西遊記|さいゆうき}}』のドラマ化やアニメ化を通じて古くから親しまれている。",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/The_Journey_to_the_West,_Shidetang_Hall_of_Jinling_in_1592.jpg",
    imageCaption: "現存する最古の版とされる1592年刊・南京「世徳堂」版『西遊記』の{{挿絵|さしえ}}",
    credit: "Wikimedia Commons（パブリックドメイン）",
    era: "tang",
    pageHref: "/saiyuki",
    pageLabel: "西遊記をくわしく読む",
  },
  {
    name: "『{{紅楼夢|こうろうむ}}』",
    author: "{{曹雪芹|そうせつきん}}",
    period: "成立: 清代（18世紀）／{{舞台|ぶたい}}: 清代（18世紀）",
    body:
      "{{没落|ぼつらく}}してゆく貴族の名家・{{賈家|かけ}}を{{舞台|ぶたい}}に、病弱な貴公子{{賈宝玉|かほうぎょく}}と、いとこの{{林黛玉|りんたいぎょく}}・{{薛宝釵|せつほうさい}}らとの{{恋愛|れんあい}}模様を、清代の貴族社会の{{栄華|えいが}}と{{衰退|すいたい}}とともに{{描|えが}}いた大作。他の三作と{{違|ちが}}い後世の講談ではなく作者自身の創作による純文学的な性格が強く、{{精緻|せいち}}な人物{{描写|びょうしゃ}}と細部にわたる生活{{描写|びょうしゃ}}から中国古典文学の{{最高峰|さいこうほう}}とも評される。作者の死により未完のまま伝わり、後半部分の成立には現在も議論が続く。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cao_Xueqin,_Dream_of_the_Red_Chamber_(4140083340).jpg",
    imageCaption: "『{{紅楼夢|こうろうむ}}』の名場面を{{描|えが}}いた石造レリーフ（北京{{郊外|こうがい}}）",
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

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国の四大名著とは？
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          <RubyText
            text={
              "『{{三国志演義|さんごくしぎえん}}』『{{水滸伝|すいこでん}}』『{{西遊記|さいゆうき}}』『{{紅楼夢|こうろうむ}}』の四つは、" +
              "中国文学史上{{最高峰|さいこうほう}}の長編小説として「四大名著（四大古典小説）」と呼ばれる。もとは『{{金瓶梅|きんぺいばい}}』を加えた" +
              "「{{四大奇書|しだいきしょ}}」という{{括|くく}}りが先に成立していたが、近代以降『{{紅楼夢|こうろうむ}}』がこれに取って代わり、現在の四大名著の顔ぶれが定着した。" +
              "三国志演義・{{水滸伝|すいこでん}}・西遊記は口承の講談を土台に長い年月をかけて完成した集団的な作品であるのに対し、{{紅楼夢|こうろうむ}}は" +
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
                    fontFamily: "var(--font-serif), serif",
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
                    {n.credit && <span> ／ <RubyText text={n.credit} /></span>}
                  </div>
                )}
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={n.name} />
                  </span>
                  <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif", textAlign: "right" }}>
                    <RubyText text={n.period} />
                  </span>
                </div>
                <p style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>
                  作者: <RubyText text={n.author} />
                </p>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={n.body} />
                </p>
                <div className="flex items-center gap-4 flex-wrap" style={{ marginTop: 10 }}>
                  {n.pageHref && (
                    <a href={n.pageHref} style={{ fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                      <RubyText text={n.pageLabel} /> →
                    </a>
                  )}
                  {n.eraLink && (
                    <a href={n.eraLink} style={{ fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                      舞台となった時代を年表で読む →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            四大名著を<ruby>翻案<rt>ほんあん</rt></ruby>した日本人小説家は「小説家一覧」ページに、これらの物語のモデルとなった史実は年表・人物一覧でたどれます。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/novelists" variant="solid">日本人小説家一覧を見る</NavButton>
            <NavButton href="/people" variant="outline">人物一覧を見る</NavButton>
          </div>
        </section>

        <A8AdBlock ad="audible" className="mt-10" />

        <RelatedEraGuides path="/four-great-novels" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
