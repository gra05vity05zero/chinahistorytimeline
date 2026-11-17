import { COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";
import { bilingualAlternates } from "@/lib/en";

const title = "春節（旧正月）とは？由来と歴史、2027年はいつ？";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "中国の春節（旧正月）は2027年は2月6日。正月の位置を定めた漢の武帝の太初暦、「春節」という名前が生まれた中華民国時代、爆竹・春聯・紅包・餃子などの風習の由来、日本で旧正月が廃れた明治の改暦まで、春節の歴史をわかりやすく解説します。";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/shunsetsu", "ja"),
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/shunsetsu" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const H2 = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginTop: 40, marginBottom: 12, paddingLeft: 10, borderLeft: `4px solid ${COLORS.vermilion}` };
const P = { fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 14 };
const CARD = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const TH = { padding: "7px 10px", fontSize: 11.5, fontWeight: 700, color: "#FBF8F0", backgroundColor: COLORS.ink, textAlign: "left", whiteSpace: "nowrap" };
const TD = { padding: "7px 10px", fontSize: 12.5, color: COLORS.inkSoft, borderTop: "1px solid #DCD3B8" };
const LINK = { fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

const DATES = [
  { year: 2027, date: "2月6日（土）", eto: "{{丁未|ひのとひつじ}}", lantern: "2月20日" },
  { year: 2028, date: "1月26日（水）", eto: "{{戊申|つちのえさる}}", lantern: "2月9日" },
  { year: 2029, date: "2月13日（火）", eto: "{{己酉|つちのととり}}", lantern: "2月27日" },
  { year: 2030, date: "2月3日（日）", eto: "{{庚戌|かのえいぬ}}", lantern: "2月17日" },
];

const HISTORY = [
  {
    era: "{{殷|いん}}・周",
    title: "年の終わりの祭りが起源",
    body: "{{収穫|しゅうかく}}を終えた年の終わりに、神々や祖先に感謝して来年の{{豊作|ほうさく}}を祈る祭りが行われていた。これが新年を祝う行事の源流と考えられている。ただし、どの月を一年の始まり（{{歳首|さいしゅ}}）とするかは王朝ごとにちがい、周は現在の旧暦11月、秦は10月を年の始まりとしていた。",
    href: "/eras/westernzhou",
  },
  {
    era: "前漢・前104年",
    title: "武帝の「{{太初暦|たいしょれき}}」で正月の位置が決まる",
    body: "前漢の武帝は新しい暦「{{太初暦|たいしょれき}}」を定め、夏王朝にならった寅の月（現在の旧暦1月）を一年の始まりとした。以後、王朝が代わっても正月の位置はほとんど変わらず、2000年以上たった現在の春節につながっている。",
    href: "/events/westernhan--3",
  },
  {
    era: "南北朝・6世紀",
    title: "爆竹の記録が登場",
    body: "長江中流域の年中行事を記した『{{荊楚歳時記|けいそさいじき}}』には、正月一日の朝に竹を火にくべて{{破裂|はれつ}}させ、悪い鬼を追い払う「爆竹」の風習が記されている。火薬を使った爆竹が広まるのは、火薬が発明された{{唐|とう}}・宋の時代以降のこと。",
    href: "/four-inventions",
  },
  {
    era: "宋",
    title: "都がにぎわう一大イベントに",
    body: "{{北宋|ほくそう}}の都・{{開封|かいほう}}の暮らしを記した『{{東京夢華録|とうけいむかろく}}』には、正月に人々が着飾って街に出て、店や{{賭|か}}け事でにぎわう様子が{{描|えが}}かれている。家々の門に{{貼|は}}る「{{春聯|しゅんれん}}」の習慣も、この時代に広まったとされる。",
    href: "/eras/northernsong",
  },
  {
    era: "中華民国・1914年",
    title: "「春節」という名前の誕生",
    body: "1912年に成立した中華民国は太陽暦（グレゴリオ暦）を採用し、1月1日を正式な新年とした。それでも人々は旧暦の正月を祝い続けたため、1914年に{{袁世凱|えんせいがい}}の政府は旧暦の元日を「春節」と名づけて休日とした。これが「春節」という呼び名の始まりとされる。",
    href: "/events/roc--0",
  },
  {
    era: "中華人民共和国",
    title: "文化大革命の中断と、春節聯歓晩会",
    body: "1949年に建国した中華人民共和国でも、太陽暦の1月1日を「元旦」、旧暦の正月を「春節」と呼ぶ形が受け継がれた。文化大革命の時期には古い習慣として休みが取りやめられたこともあったが、改革開放とともに復活。1983年に始まった国営テレビの年越し番組「春節聯歓晩会（春晩）」は、今では大晦日の定番になっている。",
    href: "/events/prc--2",
  },
];

const CUSTOMS = [
  { name: "{{爆竹|ばくちく}}・花火", body: "大きな音で悪いものを追い払う。大晦日の夜0時には各地で一斉に鳴らされる。近年は大気汚染や火災防止のため、都市部では禁止・制限されることも多い。" },
  { name: "{{春聯|しゅんれん}}", body: "門の左右に{{貼|は}}る、赤い紙に縁起のよい対句を書いたもの。魔よけの桃の木の札「{{桃符|とうふ}}」が起源で、五代十国の{{後蜀|こうしょく}}の君主{{孟昶|もうちょう}}が書いた句が最古の{{春聯|しゅんれん}}として伝わる。" },
  { name: "逆さまの「福」", body: "「福」の字を上下逆さまに{{貼|は}}る。中国語で「逆さま（倒）」と「来る（到）」はどちらも「ダオ」という同じ発音なので、「福が来る」という{{語呂|ごろ}}合わせになる。" },
  { name: "{{紅包|ホンバオ}}（お年玉）", body: "赤い袋にお金を入れて子どもに渡す。「{{圧歳銭|あっさいせん}}」とも呼ばれ、年の変わり目に子どもを守るお守りの意味があった。現在はスマホ決済で送る「電子{{紅包|ホンバオ}}」も定番。" },
  { name: "{{餃子|ギョーザ}}と{{年糕|ニェンガオ}}", body: "北方では大晦日に家族で{{餃子|ギョーザ}}を包んで食べる。形が昔のお金（{{馬蹄銀|ばていぎん}}）に似ていて縁起がよいとされる。南方では「年々高く」に通じる{{餅|もち}}菓子の{{年糕|ニェンガオ}}を食べる。" },
  { name: "魚料理", body: "中国語の「魚」と「余（余る）」はどちらも「ユー」という同じ発音。「{{年年有余|ねんねんゆうよ}}（毎年ゆとりがありますように）」の願いを込めて、大晦日の食卓には魚が並ぶ。" },
  { name: "{{春運|しゅんうん}}（帰省ラッシュ）", body: "春節の前後40日間ほどの帰省・旅行シーズン。のべ数十億人が移動するとされ、「世界最大の人の移動」と呼ばれる。" },
  { name: "{{元宵節|げんしょうせつ}}", body: "旧暦1月15日、春節の締めくくりの日。{{灯籠|とうろう}}を飾り、甘い団子の{{湯円|タンユェン}}（{{元宵|げんしょう}}）を食べる。長崎ランタンフェスティバルはこの行事がもとになっている。" },
];

export default function ShunsetsuPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          春節（旧正月）とは？
        </h1>
        <p style={P}>
          <RubyText
            text={
              "春節（しゅんせつ）は、旧暦（太陰太陽暦）の1月1日を祝う中国の正月です。新月の日を月の始まりとする旧暦に合わせるため、" +
              "日付は毎年変わり、太陽暦では1月下旬〜2月中旬のどこかになります。中国では一年で最も大切な祝日で、家族が集まって年越しの食事をし、" +
              "爆竹を鳴らして新年を迎えます。このページでは、春節の日付と、2000年以上にわたる正月の歴史、風習の由来を紹介します。"
            }
          />
        </p>

        <div style={{ ...CARD, padding: "14px 18px", borderLeft: `4px solid ${COLORS.gold}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.gold }}>2027年の春節</div>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 22, fontWeight: 900, color: COLORS.ink, marginTop: 4 }}>
            2月6日（土）
          </div>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 6 }}>
            <RubyText text="大晦日（{{除夕|じょせき}}）は2月5日（金）。中国の法定休日は2025年から大晦日を含む4日間となり、前後の週末と振替を組み合わせて8〜9連休前後になるのが一般的です。正式な休日の日程は、中国の国務院が例年、前年の秋から冬にかけて発表します。" />
          </p>
        </div>

        <h2 style={H2}>今後の春節の日付</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", ...CARD }}>
            <thead>
              <tr><th style={TH}>年</th><th style={TH}>春節（旧暦1月1日）</th><th style={TH}>干支</th><th style={TH}>元宵節</th></tr>
            </thead>
            <tbody>
              {DATES.map((d) => (
                <tr key={d.year}>
                  <td style={{ ...TD, fontWeight: 700, color: COLORS.ink }}>{d.year}年</td>
                  <td style={TD}>{d.date}</td>
                  <td style={TD}><RubyText text={d.eto} /></td>
                  <td style={TD}>{d.lantern}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...P, fontSize: 12, marginTop: 10 }}>
          中国では春節から新しい干支の年が始まると考えるのが一般的です。干支のしくみは「<a href="/eto" style={LINK}>干支（十二支）の由来</a>」で解説しています。
        </p>

        <h2 style={H2}>春節の歴史</h2>
        <div className="flex flex-col" style={{ borderLeft: `2px solid ${COLORS.mist}`, marginLeft: 6 }}>
          {HISTORY.map((h) => (
            <div key={h.title} style={{ position: "relative", paddingLeft: 20, paddingBottom: 22 }}>
              <span style={{ position: "absolute", left: -7, top: 4, width: 12, height: 12, borderRadius: 6, backgroundColor: COLORS.vermilion }} />
              <div style={{ fontSize: 11.5, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}><RubyText text={h.era} /></div>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, color: COLORS.ink, marginTop: 2 }}>
                <RubyText text={h.title} />
              </div>
              <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                <RubyText text={h.body} />
              </p>
              <a href={h.href} style={LINK}>関連ページを読む →</a>
            </div>
          ))}
        </div>

        <h2 style={H2}>「年」という怪物の伝説</h2>
        <p style={P}>
          <RubyText
            text={
              "春節の風習の由来としてよく語られるのが、大晦日の夜に村を{{襲|おそ}}う怪物「{{年|ニェン}}」の伝説です。{{年|ニェン}}は赤い色と大きな音、火の光を{{嫌|きら}}うので、" +
              "人々は赤い紙を{{貼|は}}り、爆竹を鳴らし、一晩中明かりをつけて{{年|ニェン}}を追い払った――これが春聯や爆竹、夜通し起きている「{{守歳|しゅさい}}」の始まりだというものです。" +
              "ただしこの話は古い文献には見当たらず、近代になって広まった民話と考えられています。新年を「{{過年|グオニェン}}（年を越す）」と呼ぶ言葉から生まれた物語なのかもしれません。"
            }
          />
        </p>

        <h2 style={H2}>春節の風習とその意味</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CUSTOMS.map((c) => (
            <div key={c.name} style={{ ...CARD, padding: "12px 14px" }}>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.vermilion }}>
                <RubyText text={c.name} />
              </div>
              <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 6 }}>
                <RubyText text={c.body} />
              </p>
            </div>
          ))}
        </div>

        <h2 style={H2}>日本ではなぜ旧正月を祝わないのか</h2>
        <p style={P}>
          <RubyText
            text={
              "日本もかつては中国と同じく旧暦で正月を祝っていました。ところが明治政府は1872年（明治5年）に突然の{{改暦|かいれき}}を発表し、" +
              "明治5年12月3日を明治6年1月1日として太陽暦に切り替えました。欧米にならった近代化の一環で、役人の給料を1か月分減らせるという財政上の理由もあったといわれます。" +
              "以後、日本では新暦の1月1日が正月として定着し、旧正月の行事は一部の地域を除いてほとんど行われなくなりました。"
            }
          />
        </p>
        <p style={P}>
          <RubyText
            text={
              "現在の日本で春節の雰囲気を味わえるのは、横浜中華街・神戸{{南京町|なんきんまち}}の春節祭や、長崎ランタンフェスティバルなどです。" +
              "アジアでは、韓国の「ソルラル」、ベトナムの「テト」なども旧暦の正月で、今も一年で最も大きな祝日になっています。"
            }
          />
        </p>

        <section style={{ marginTop: 32 }}>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eto" variant="solid">干支（十二支）の由来</NavButton>
            <NavButton href="/four-inventions" variant="outline">中国の四大発明</NavButton>
            <NavButton href="/japan-china-timeline" variant="outline">日中関係年表</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/shunsetsu" eraIds={["westernhan", "roc", "prc"]} />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
