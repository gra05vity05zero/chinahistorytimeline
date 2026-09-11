import { ERAS, stripRuby, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageThumb, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "中国の四大発明とは？紙・印刷術・火薬・羅針盤を解説";
const fullTitle = `中国の四大発明とは？紙・印刷術・火薬・羅針盤を解説 | ${SITE_NAME}`;
const description =
  "紙（製紙法）・印刷術・火薬・羅針盤の「中国四大発明」とは何かを、発明の経緯や代表的な人物・文献とあわせて解説。世界の文明史をどう変えたのか、年表に登場する関連の出来事もリンクで紹介します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/four-inventions" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/four-inventions" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

function findEventSlug(eraId, eventTitle) {
  const era = ERAS.find((e) => e.id === eraId);
  const event = era?.events.find((ev) => stripRuby(ev.title).includes(eventTitle));
  return event?.slug || null;
}

function eraHref(id) {
  return ERAS.some((e) => e.id === id) ? `/eras/${id}` : null;
}

const INVENTIONS = [
  {
    name: "紙（製紙法）",
    period: "後漢（1〜2世紀）",
    key: "{{蔡倫|さいりん}}が実用的な製紙法を改良",
    body:
      "紙に類するものはそれ以前から存在したが、高価だったり書写に適さなかったりと実用性に乏しかった。後漢の宦官{{蔡倫|さいりん}}は、樹皮・麻くず・ぼろ布・漁網など身近で安価な材料を組み合わせて改良を重ね、薄く均質で書写に適した製紙法を確立したと『{{後漢書|ごかんじょ}}』は伝える。これにより竹簡・木簡や高価な絹布に頼っていた文書の記録が格段に容易になり、学問・行政・文化の情報流通が飛躍的に進んだ。製法は後にシルクロードを通じて西方へ伝わり、8世紀にはイスラム世界、12世紀頃にはヨーロッパにも達し、世界の文明史を変える発明となった。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cai-lun.jpg",
    imageCaption: "紙の発明者として知られる蔡倫の肖像画",
    credit: "Wikimedia Commons（パブリックドメイン）",
    eraId: "easternhan",
    eventTitle: "製紙法の改良",
  },
  {
    name: "印刷術",
    period: "唐〜北宋（7〜11世紀）",
    key: "木版印刷から{{畢昇|ひっしょう}}の活字印刷へ",
    body:
      "経典を一枚の板に彫って刷る木版印刷は唐代にはすでに実用化されており、868年に刷られた『{{金剛経|こんごうきょう}}』（大英図書館蔵）は、年代の判明する現存最古の印刷物として知られる。さらに北宋の{{畢昇|ひっしょう}}は、粘土を焼き固めた一字ずつの活字を組み合わせて印刷する活字印刷術を考案したと、同時代の学者{{沈括|しんかつ}}が随筆『{{夢渓筆談|むけいひつだん}}』に記録している。西洋でグーテンベルクが活版印刷を実用化するのは、これよりおよそ400年後の15世紀のことである。",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Diamond_Sutra_of_868_AD_-_The_Diamond_Sutra_(868),_frontispiece_and_text_-_BL_Or._8210-P.2.jpg",
    imageCaption: "868年に刷られた現存最古の印刷物『金剛経』の巻頭図（大英図書館蔵）",
    credit: "大英図書館 / Wikimedia Commons（パブリックドメイン）",
    eraId: "northernsong",
    eventTitle: null,
  },
  {
    name: "火薬",
    period: "唐〜北宋（9〜11世紀）",
    key: "不老不死の薬を求めた道士の偶然の発見",
    body:
      "火薬は、不老不死の仙薬を求めていた唐代の道士たちが硝石・硫黄・木炭を配合する過程で偶然発見したとされる。当初は花火や祭礼の爆竹として使われたが、北宋代には軍事利用が進み、1044年に編まれた兵法書『{{武経総要|ぶけいそうよう}}』には、火薬を用いた原始的な火槍・火砲の製法が記録されている。以後、元・明代にかけて火薬兵器はさらに発達し、モンゴルの西征などを通じて西方にも伝わり、ヨーロッパの戦争のあり方を大きく変えることになった。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Chinese_Fire_Lance_with_Pellets.JPG",
    imageCaption: "明代の兵法書『火龍経』に描かれた火槍（鉛弾を撃ち出す初期の火器）の図",
    credit: "Wikimedia Commons（パブリックドメイン）",
    eraId: "northernsong",
    eventTitle: null,
  },
  {
    name: "羅針盤（指南針）",
    period: "戦国〜北宋（3世紀BC〜12世紀）",
    key: "占いの道具「{{司南|しなん}}」が航海の羅針盤へ",
    body:
      "天然の磁石（{{磁鉄鉱|じてっこう}}）が常に南北を指す性質は早くから知られ、戦国時代にはこれを利用した占い道具「{{司南|しなん}}」が使われていたと伝わる。これが後に人工的に磁化した針を使う指南針へと発展し、北宋代の1119年に成立した{{朱彧|しゅいく}}の『{{萍洲可談|へいしゅうかだん}}』には、曇りや夜間の航海で指南針を頼りに方角を確かめたという、海上での実用例が記録されている。羅針盤の実用化は、遠洋航海を飛躍的に安全にし、後の大航海時代を支える技術基盤の一つともなった。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Model_Si_Nan_of_Han_Dynasty.jpg",
    imageCaption: "漢代の「司南」を再現した復元模型",
    credit: "Wikimedia Commons, CC BY-SA 3.0 / GFDL",
    eraId: "northernsong",
    eventTitle: null,
  },
];

const RESOLVED = INVENTIONS.map((inv) => ({
  ...inv,
  eventSlug: inv.eventTitle ? findEventSlug(inv.eraId, inv.eventTitle) : null,
  eraLink: eraHref(inv.eraId),
}));

export default function FourInventionsPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国の四大発明とは？
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          <RubyText
            text={
              "「紙」「印刷術」「火薬」「羅針盤（指南針）」の四つは、中国が生んだ発明の中でも特に世界の歴史を大きく動かしたとして" +
              "「四大発明」と呼ばれる。17世紀の英国の哲学者フランシス・ベーコンは、印刷術・火薬・羅針盤の三つを" +
              "「世界の様相を一変させた」発明として挙げたが、その発祥が中国であることには触れていなかった。20世紀に入り、" +
              "英国の中国科学史家ジョゼフ・ニーダムらの研究を通じてこれらが中国起源であることが広く知られるようになり、" +
              "紙の発明を加えた四つが現在の「四大発明」としてまとめられるようになった。"
            }
          />
        </p>

        <div className="flex flex-col gap-5">
          {RESOLVED.map((inv, i) => (
            <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
              <div className="relative" style={{ width: "100%", height: 180, backgroundColor: "#EFE7D0", overflow: "hidden" }}>
                <HeritageThumb imageUrl={inv.imageUrl} name={inv.name} type="building" />
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
                {inv.imageCaption && (
                  <div style={{ fontSize: 10.5, color: COLORS.mist, marginBottom: 8 }}>
                    <RubyText text={inv.imageCaption} />
                    {inv.credit && <span> ／ {inv.credit}</span>}
                  </div>
                )}
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={inv.name} />
                  </span>
                  <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>{inv.period}</span>
                </div>
                <p style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>
                  <RubyText text={inv.key} />
                </p>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={inv.body} />
                </p>
                {inv.eventSlug ? (
                  <a
                    href={`/events/${inv.eventSlug}`}
                    style={{ display: "inline-block", marginTop: 10, fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
                  >
                    関連する出来事を年表で読む →
                  </a>
                ) : inv.eraLink ? (
                  <a
                    href={inv.eraLink}
                    style={{ display: "inline-block", marginTop: 10, fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
                  >
                    関連する時代を年表で読む →
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            四大発明とあわせて、中国文学を代表する「四大名著」や、万里の長城の歴史も別ページで紹介しています。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/four-great-novels" variant="solid">中国の四大名著を見る</NavButton>
            <NavButton href="/great-wall" variant="outline">万里の長城とは</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
