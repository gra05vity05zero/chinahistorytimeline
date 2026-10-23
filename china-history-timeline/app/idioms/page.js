import { ERAS, getEraFigures, personSlug, stripRuby, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const title = "中国史から生まれた故事成語・慣用句";
const fullTitle = `中国史から生まれた故事成語・慣用句 | ${SITE_NAME}`;
const description =
  "「臥薪嘗胆」「四面楚歌」「矛盾」など、中国の歴史上の出来事や人物のエピソードに由来し、今も日本語として使われている故事成語・慣用句をまとめました。国語や漢文のテスト対策、中高生・大学生の学習にどうぞ。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/idioms" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/idioms" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

// 出来事タイトルの部分一致から該当イベントページへのリンクを探す
function findEventHref(eraId, titleIncludes) {
  const era = ERAS.find((e) => e.id === eraId);
  if (!era) return null;
  const event = era.events.find((ev) => stripRuby(ev.title).includes(titleIncludes));
  return event ? `/events/${event.slug}` : null;
}

// 人物名から、伝記（bio）が用意されている場合のみ個別ページへのリンクを探す
function findPersonHref(eraId, name) {
  const era = ERAS.find((e) => e.id === eraId);
  if (!era) return null;
  const figure = getEraFigures(era).find((f) => stripRuby(f.name) === name);
  return figure && figure.bio ? `/people/${eraId}/${encodeURIComponent(personSlug(figure.name))}` : null;
}

const IDIOMS = [
  {
    phrase: "{{臥薪嘗胆|がしんしょうたん}}",
    meaning: "目的を達成するために、苦労を{{耐|た}}え{{忍|しの}}ぶこと。",
    origin:
      "{{呉|ご}}に敗れた{{越王|えつおう}}{{勾践|こうせん}}が{{屈辱|くつじょく}}を忘れぬよう苦い{{肝|きも}}を{{嘗|な}}め続け、{{呉王|ごおう}}{{夫差|ふさ}}もまた{{薪|たきぎ}}の上に{{寝|ね}}て{{復讐|ふくしゅう}}を{{誓|ちか}}ったという、{{呉越|ごえつ}}の{{抗争|こうそう}}にまつわる故事。",
    era: "春秋時代",
    href: findEventHref("chunqiu", "臥薪嘗胆"),
    linkLabel: "{{呉越|ごえつ}}の{{抗争|こうそう}}を年表で読む",
  },
  {
    phrase: "{{四面楚歌|しめんそか}}",
    meaning: "周囲を敵に囲まれ、味方のいない{{孤立無援|こりつむえん}}の状態。",
    origin:
      "{{楚漢戦争|そかんせんそう}}の末、{{垓下|がいか}}で漢軍に包囲された{{項羽|こうう}}が、四方から聞こえる{{楚|そ}}の歌声に「{{楚|そ}}はすでに漢に降ったのか」と絶望したという故事。",
    era: "{{秦末|しんまつ}}〜{{楚漢戦争|そかんせんそう}}",
    href: findPersonHref("qin", "項羽"),
    linkLabel: "{{項羽|こうう}}のページを読む",
  },
  {
    phrase: "{{破釜沈舟|はふちんしゅう}}",
    meaning: "決死の{{覚悟|かくご}}で物事にあたること。",
    origin:
      "{{秦打倒|しんだとう}}の兵を挙げた{{項羽|こうう}}が、{{鉅鹿|きょろく}}の戦いで自軍の{{釜|かま}}を破り船を{{沈|しず}}めて退路を断ち、兵に決死の{{覚悟|かくご}}で戦わせたという故事。",
    era: "{{秦末|しんまつ}}",
    href: findPersonHref("qin", "項羽"),
    linkLabel: "{{項羽|こうう}}のページを読む",
  },
  {
    phrase: "{{三顧の礼|さんこのれい}}",
    meaning: "目上の者が礼を{{尽|つ}}くして、目的の人材を招くこと。",
    origin:
      "{{劉備|りゅうび}}が{{隠棲|いんせい}}していた{{諸葛亮|しょかつりょう}}のもとを三度たずね、ようやく軍師として{{迎|むか}}え入れたという故事。",
    era: "三国時代",
    href: findPersonHref("sanguo", "諸葛亮"),
    linkLabel: "{{諸葛亮|しょかつりょう}}のページを読む",
  },
  {
    phrase: "{{完璧|かんぺき}}",
    meaning: "欠けたところがまったくないこと。",
    origin:
      "{{趙|ちょう}}の家臣{{藺相如|りんしょうじょ}}が、{{秦|しん}}に{{奪|うば}}われかけた宝玉「{{和氏の璧|かしのへき}}」を、傷つけることなく（{{完璧|かんぺき}}に）{{趙|ちょう}}へ持ち帰ったという故事。",
    era: "戦国時代",
  },
  {
    phrase: "{{矛盾|むじゅん}}",
    meaning: "話や物事のつじつまが合わないこと。",
    origin:
      "{{楚|そ}}の商人が「どんな{{盾|たて}}も{{突|つ}}き通す{{矛|ほこ}}」と「どんな{{矛|ほこ}}も防ぐ{{盾|たて}}」を同時に売り、客に「その{{矛|ほこ}}でその{{盾|たて}}を{{突|つ}}いたらどうなるか」と問われて答えられなかったという『{{韓非子|かんぴし}}』の説話。",
    era: "戦国時代",
  },
  {
    phrase: "{{五十歩百歩|ごじっぽひゃっぽ}}",
    meaning: "多少の{{違|ちが}}いはあっても、本質的には大差ないこと。",
    origin: "戦場で50歩{{逃|に}}げた兵が、100歩{{逃|に}}げた兵を{{臆病|おくびょう}}だと笑ったという『{{孟子|もうし}}』の説話。",
    era: "戦国時代",
  },
  {
    phrase: "{{漁夫の利|ぎょふのり}}",
    meaning: "両者が争っている{{隙|すき}}に、無関係な第三者が利益を横取りすること。",
    origin: "シギとハマグリが争ううちに、通りかかった漁師が両方とも{{捕|と}}らえてしまったという『{{戦国策|せんごくさく}}』の説話。",
    era: "戦国時代",
  },
  {
    phrase: "{{蛇足|だそく}}",
    meaning: "余計な、なくてもよい付け足し。",
    origin: "{{蛇|へび}}の絵を早く{{描|えが}}く競争で、一番早く{{描|えが}}き終えた者が調子に乗って足まで{{描|えが}}き足したため負けにされたという{{楚|そ}}の故事。",
    era: "戦国時代",
  },
  {
    phrase: "{{呉越同舟|ごえつどうしゅう}}",
    meaning: "仲の悪い者同士が、同じ場所や{{境遇|きょうぐう}}に居合わせること。",
    origin: "敵対する{{呉|ご}}と{{越|えつ}}の人間でも、同じ{{舟|ふね}}が{{嵐|あらし}}に{{遭|あ}}えば{{互|たが}}いに助け合う、と説いた兵法書『{{孫子|そんし}}』の一節に由来。",
    era: "春秋時代",
  },
  {
    phrase: "{{背水の陣|はいすいのじん}}",
    meaning: "退路を断ち、全力で事にあたる決死の{{覚悟|かくご}}。",
    origin:
      "漢の武将{{韓信|かんしん}}が、わざと川を背にして{{布陣|ふじん}}し、兵に「退けば死ぬのみ」という決死の{{覚悟|かくご}}をさせて{{趙|ちょう}}の大軍を打ち破ったという故事。",
    era: "{{楚漢戦争期|そかんせんそうき}}",
  },
  {
    phrase: "{{蛍雪の功|けいせつのこう}}",
    meaning: "苦労して勉学に{{励|はげ}}んだ成果。「{{蛍雪|けいせつ}}時代」の語源。",
    origin: "貧しくて灯油が買えなかった{{車胤|しゃいん}}は{{蛍|ほたる}}の光で、{{孫康|そんこう}}は雪明かりで、それぞれ夜も書を読んだという故事。",
    era: "{{東晋|とうしん}}",
  },
  {
    phrase: "{{泣いて馬謖を斬る|ないてばしょくをきる}}",
    meaning: "たとえ愛する者でも、規律を守るために私情を捨てて{{処罰|しょばつ}}すること。",
    origin: "{{諸葛亮|しょかつりょう}}が、命令に背いて大敗を招いた愛弟子の武将{{馬謖|ばしょく}}を、{{涙|なみだ}}をのんで{{処刑|しょけい}}したという故事。",
    era: "三国時代",
  },
  {
    phrase: "{{髀肉の嘆|ひにくのたん}}",
    meaning: "実力を発揮する機会に{{恵|めぐ}}まれず、時を{{無駄|むだ}}に過ごすことを{{嘆|なげ}}くこと。",
    origin: "{{不遇|ふぐう}}の時代を送っていた{{劉備|りゅうび}}が、久しく馬に乗らず{{腿|もも}}に肉がついたことに気づき、功を立てられぬまま{{歳月|さいげつ}}が過ぎることを{{嘆|なげ}}いたという故事。",
    era: "三国時代",
  },
  {
    phrase: "{{杞憂|きゆう}}",
    meaning: "実際には起こりえないことを、あれこれ心配すること。",
    origin: "{{杞|き}}の国のある人が「天が{{崩|くず}}れ落ちてきたらどうしよう」と本気で心配し、夜も{{眠|ねむ}}れなくなったという『{{列子|れっし}}』の説話。",
    era: "周（思想書の説話）",
  },
  {
    phrase: "{{塞翁が馬|さいおうがうま}}",
    meaning: "人生の幸不幸は予測しがたく、簡単に喜んだり悲しんだりできないということ。",
    origin:
      "国境の老人（{{塞翁|さいおう}}）の馬が{{逃|に}}げたり、{{駿馬|しゅんば}}を連れて{{戻|もど}}ってきたり、息子が落馬して足を折ったり、そのおかげで戦争を{{免|まぬが}}れたりと、{{禍福|かふく}}が二転三転したという『{{淮南子|えなんじ}}』の説話。",
    era: "前漢（思想書の説話）",
  },
  {
    phrase: "{{助長|じょちょう}}",
    meaning: "余計な{{力添|ちからぞ}}えが、かえって物事を悪くすること。",
    origin: "{{苗|なえ}}の生長が{{遅|おそ}}いのを気にした{{宋|そう}}の農夫が、{{苗|なえ}}を引っ張って{{伸|の}}ばそうとし、かえって{{枯|か}}らしてしまったという『{{孟子|もうし}}』の説話。",
    era: "戦国時代",
  },
];

export default function IdiomsPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国史から生まれた故事成語・慣用句
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          「<ruby>臥薪嘗胆<rt>がしんしょうたん</rt></ruby>」や「<ruby>矛盾<rt>むじゅん</rt></ruby>」のように、中国の歴史上の出来事や人物のエピソードがもとになって、今も日本語の慣用句・四字熟語として使われている言葉があります。
          国語や漢文のテスト対策として、由来となった時代とあわせて覚えておきましょう。
        </p>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            故事成語とは
          </h2>
          <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "14px 16px" }}>
            <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
              <RubyText text="故事成語とは、昔の出来事や人物のエピソード（故事）がもとになってできた熟語・慣用句のことです。中国の古典（『{{史記|しき}}』『{{韓非子|かんぴし}}』『{{孟子|もうし}}』など）に記された歴史上の事件や{{逸話|いつわ}}が由来となっているものが多く、単なる四字熟語と{{違|ちが}}って、背景にある具体的な物語を知ることで意味を忘れにくくなるという{{特徴|とくちょう}}があります。" />
            </p>
            <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 10 }}>
              日本の国語や漢文の授業・入試では、意味だけでなく由来となった故事（<ruby>誰<rt>だれ</rt></ruby>が、いつ、何をした話か）まで問われることが多いため、
              下の一覧では熟語・意味に加えて、由来となった時代や出来事もあわせて確認できるようにしています。
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-3">
          {IDIOMS.map((idiom, i) => (
            <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "14px 16px" }}>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 18, fontWeight: 700, color: COLORS.vermilion }}>
                  <RubyText text={idiom.phrase} />
                </span>
                <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}><RubyText text={idiom.era} /></span>
              </div>
              <p style={{ fontSize: 13, fontWeight: 700, color: COLORS.ink, marginTop: 6 }}><RubyText text={idiom.meaning} /></p>
              <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 4 }}>
                <RubyText text={idiom.origin} />
              </p>
              {idiom.href && (
                <a href={idiom.href} style={{ display: "inline-block", marginTop: 8, fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                  <RubyText text={idiom.linkLabel} /> →
                </a>
              )}
            </div>
          ))}
        </div>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            それぞれの故事成語が生まれた時代の全体像は、年表や人物一覧からたどれます。あわせて確認してみてください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras" variant="solid">時代一覧を見る</NavButton>
            <NavButton href="/people" variant="outline">人物一覧を見る</NavButton>
            <NavButton href="/mnemonics" variant="outline">王朝の覚え方を見る</NavButton>
            <NavButton href="/funny-episodes" variant="outline">笑えるエピソード集を見る</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/idioms" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
