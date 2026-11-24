import { COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection, InArticleAd } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";
import { EtoCalculator } from "@/components/EtoCalculator";
import { bilingualAlternates } from "@/lib/en";

const title = "干支（十二支）の由来とは？中国史で読む十干十二支と2027年の未年";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "干支（えと）は十干と十二支を組み合わせた60通りの暦で、3000年以上前の殷の甲骨文字にも刻まれています。十二支に動物が当てはめられた経緯、黄巾の乱・辛亥革命など干支の名がついた歴史上の出来事、2027年の干支「丁未（ひのとひつじ）」を解説。西暦から干支がわかる計算ツール付き。";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/eto", "ja"),
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/eto" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const H2 = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginTop: 40, marginBottom: 12, paddingLeft: 10, borderLeft: `4px solid ${COLORS.vermilion}` };
const P = { fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 14 };
const CARD = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const TH = { padding: "7px 8px", fontSize: 11.5, fontWeight: 700, color: "#FBF8F0", backgroundColor: COLORS.ink, textAlign: "left", whiteSpace: "nowrap" };
const TD = { padding: "7px 8px", fontSize: 12.5, color: COLORS.inkSoft, borderTop: "1px solid #DCD3B8", verticalAlign: "top" };
const LINK = { fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

const STEMS = [
  { k: "甲", r: "きのえ", el: "木", yin: "陽（兄）" },
  { k: "乙", r: "きのと", el: "木", yin: "陰（弟）" },
  { k: "丙", r: "ひのえ", el: "火", yin: "陽（兄）" },
  { k: "丁", r: "ひのと", el: "火", yin: "陰（弟）" },
  { k: "戊", r: "つちのえ", el: "土", yin: "陽（兄）" },
  { k: "己", r: "つちのと", el: "土", yin: "陰（弟）" },
  { k: "庚", r: "かのえ", el: "金", yin: "陽（兄）" },
  { k: "辛", r: "かのと", el: "金", yin: "陰（弟）" },
  { k: "壬", r: "みずのえ", el: "水", yin: "陽（兄）" },
  { k: "癸", r: "みずのと", el: "水", yin: "陰（弟）" },
];

const BRANCHES = [
  { k: "子", r: "ね", animal: "ネズミ", time: "23〜1時", dir: "北" },
  { k: "丑", r: "うし", animal: "ウシ", time: "1〜3時", dir: "北北東" },
  { k: "寅", r: "とら", animal: "トラ", time: "3〜5時", dir: "東北東" },
  { k: "卯", r: "う", animal: "ウサギ", time: "5〜7時", dir: "東" },
  { k: "辰", r: "たつ", animal: "竜", time: "7〜9時", dir: "東南東" },
  { k: "巳", r: "み", animal: "ヘビ", time: "9〜11時", dir: "南南東" },
  { k: "午", r: "うま", animal: "ウマ", time: "11〜13時", dir: "南" },
  { k: "未", r: "ひつじ", animal: "ヒツジ", time: "13〜15時", dir: "南南西" },
  { k: "申", r: "さる", animal: "サル", time: "15〜17時", dir: "西南西" },
  { k: "酉", r: "とり", animal: "ニワトリ", time: "17〜19時", dir: "西" },
  { k: "戌", r: "いぬ", animal: "イヌ", time: "19〜21時", dir: "西北西" },
  { k: "亥", r: "い", animal: "イノシシ（中国ではブタ）", time: "21〜23時", dir: "北北西" },
];

const EVENTS = [
  {
    year: "184年",
    eto: "{{甲子|きのえね}}",
    name: "{{黄巾|こうきん}}の乱",
    body: "{{太平道|たいへいどう}}の{{張角|ちょうかく}}は「{{蒼天|そうてん}}{{已|すで}}に死す、{{黄天|こうてん}}{{当|まさ}}に立つべし、{{歳|とし}}は{{甲子|かっし}}に在り、天下{{大吉|だいきち}}」と{{唱|とな}}えて{{蜂起|ほうき}}した。六十干支の始まりである{{甲子|かっし}}の年は、新しい時代が始まる年と考えられていた。この乱が後漢の{{衰退|すいたい}}と三国時代の幕開けにつながる。",
    href: "/events/easternhan--4",
  },
  {
    year: "672年",
    eto: "{{壬申|じんしん}}",
    name: "{{壬申|じんしん}}の乱（日本）",
    body: "天智天皇の死後、弟の{{大海人皇子|おおあまのおうじ}}と子の{{大友皇子|おおとものおうじ}}が皇位を争った古代日本最大の内乱。日本でも中国にならって、事件をその年の干支で呼ぶ習慣が定着した。",
    href: "/japan-china-timeline",
  },
  {
    year: "1894年",
    eto: "{{甲午|こうご}}",
    name: "日清戦争（中国名：{{甲午|こうご}}戦争）",
    body: "朝鮮半島をめぐって日本と{{清|しん}}が戦った戦争を、中国では今も「{{甲午|こうご}}戦争」と呼ぶ。同じ年に朝鮮で起きた農民の{{蜂起|ほうき}}も「{{甲午|こうご}}農民戦争」と呼ばれる。",
    href: "/events/qing--4",
  },
  {
    year: "1898年",
    eto: "{{戊戌|ぼじゅつ}}",
    name: "{{戊戌|ぼじゅつ}}の変法",
    body: "日清戦争の敗北を受け、{{光緒帝|こうしょてい}}と{{康有為|こうゆうい}}らが日本の明治維新にならった改革を進めたが、{{西太后|せいたいごう}}らのクーデター（{{戊戌|ぼじゅつ}}の政変）によりわずか100日ほどで{{挫折|ざせつ}}した。",
    href: "/eras/qing",
  },
  {
    year: "1900年",
    eto: "{{庚子|こうし}}",
    name: "義和団事件（{{庚子|こうし}}事変）",
    body: "「{{扶清滅洋|ふしんめつよう}}」を{{掲|かか}}げた義和団が北京の各国公使館を包囲し、日本を含む8か国の連合軍が出兵した。翌1901年（{{辛丑|しんちゅう}}）に結ばれた北京議定書は、中国では「{{辛丑|しんちゅう}}条約」と呼ばれる。",
    href: "/events/qing--5",
  },
  {
    year: "1911年",
    eto: "{{辛亥|しんがい}}",
    name: "{{辛亥|しんがい}}革命",
    body: "武昌での{{蜂起|ほうき}}をきっかけに各地の省が{{清|しん}}からの独立を宣言し、翌年に中華民国が成立、2000年以上続いた皇帝の時代が終わった。中国の近代史で最も有名な干支の名前と言える。",
    href: "/events/qing--6",
  },
];

export default function EtoPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          干支（十二支）の由来とは？
        </h1>
        <p style={P}>
          <RubyText
            text={
              "年賀状でおなじみの「えと」は、正しくは「{{十干|じっかん}}」と「十二支」を組み合わせた「干支（かんし）」のことで、全部で60通りあります。" +
              "60年で一回りして生まれた年の干支に戻るのが「{{還暦|かんれき}}」です。干支は3000年以上前の中国・{{殷|いん}}の時代にはすでに日付を数えるのに使われ、" +
              "やがて年・月・時刻・方角まで表すようになりました。このページでは、干支の成り立ちと動物の由来、干支の名前がついた歴史上の出来事を紹介します。"
            }
          />
        </p>

        <InArticleAd />

        <div style={{ ...CARD, padding: "14px 18px", marginBottom: 8, borderLeft: `4px solid ${COLORS.gold}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.gold }}>2027年の干支</div>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 22, fontWeight: 900, color: COLORS.ink, marginTop: 4 }}>
            <RubyText text="{{丁未|ひのとひつじ}}（ひつじ年）" />
          </div>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 6 }}>
            <RubyText text="2026年は{{丙午|ひのえうま}}、2027年は{{丁未|ひのとひつじ}}、2028年は{{戊申|つちのえさる}}です。前回の{{丁未|ひのとひつじ}}は1967年、次は2087年です。" />
          </p>
        </div>

        <h2 style={H2}>西暦から干支を調べる</h2>
        <EtoCalculator defaultYear={2027} />

        <h2 style={H2}>干支のしくみ：十干と十二支</h2>
        <p style={P}>
          <RubyText
            text={
              "{{十干|じっかん}}は「{{甲|こう}}・{{乙|おつ}}・{{丙|へい}}・{{丁|てい}}…」の10文字、十二支は「子・丑・寅・卯…」の12文字です。" +
              "{{甲子|きのえね}}、{{乙丑|きのとうし}}、{{丙寅|ひのえとら}}…と両方を一つずつ進めていくと、10と12の最小公倍数である60番目の{{癸亥|みずのとい}}で一回りし、また{{甲子|きのえね}}に戻ります。" +
              "日本語の「きのえ（木の兄）」「きのと（木の弟）」という読み方は、{{十干|じっかん}}を{{陰陽五行説|いんようごぎょうせつ}}の「木・火・土・金・水」と陰陽（兄＝陽、弟＝陰）に当てはめたものです。"
            }
          />
        </p>

        <div style={{ overflowX: "auto", marginBottom: 20 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", ...CARD }}>
            <caption style={{ captionSide: "top", textAlign: "left", fontSize: 12, fontWeight: 700, color: COLORS.ink, paddingBottom: 6 }}>十干（じっかん）</caption>
            <thead>
              <tr><th style={TH}>十干</th><th style={TH}>読み</th><th style={TH}>五行</th><th style={TH}>陰陽</th></tr>
            </thead>
            <tbody>
              {STEMS.map((s) => (
                <tr key={s.k}>
                  <td style={{ ...TD, fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{s.k}</td>
                  <td style={TD}>{s.r}</td>
                  <td style={TD}>{s.el}</td>
                  <td style={TD}>{s.yin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", ...CARD }}>
            <caption style={{ captionSide: "top", textAlign: "left", fontSize: 12, fontWeight: 700, color: COLORS.ink, paddingBottom: 6 }}>十二支（じゅうにし）</caption>
            <thead>
              <tr><th style={TH}>十二支</th><th style={TH}>読み</th><th style={TH}>動物</th><th style={TH}>時刻</th><th style={TH}>方角</th></tr>
            </thead>
            <tbody>
              {BRANCHES.map((b) => (
                <tr key={b.k}>
                  <td style={{ ...TD, fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{b.k}</td>
                  <td style={TD}>{b.r}</td>
                  <td style={TD}>{b.animal}</td>
                  <td style={{ ...TD, whiteSpace: "nowrap" }}>{b.time}</td>
                  <td style={TD}>{b.dir}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...P, fontSize: 12, marginTop: 10 }}>
          <RubyText text="「{{丑三|うしみ}}つ時」（午前2時ごろ）や、昼の12時を「正午」、その前後を「午前・午後」と呼ぶのは、十二支で時刻を表していた名残です。" />
        </p>

        <h2 style={H2}>始まりは殷の甲骨文字</h2>
        <p style={P}>
          <RubyText
            text={
              "干支が確認できる最古の記録は、{{殷|いん}}（商）の王が{{占|うらな}}いの結果を{{亀|かめ}}の{{甲羅|こうら}}や牛の骨に刻んだ{{甲骨|こうこつ}}文字です。" +
              "{{殷|いん}}の人々は干支で日付を数えており、{{甲子|かっし}}から{{癸亥|きがい}}までの60日を一覧にした「干支表」を刻んだ骨も見つかっています。" +
              "{{殷|いん}}の王の名前に「{{太甲|たいこう}}」「{{帝辛|ていしん}}（{{紂王|ちゅうおう}}）」のように{{十干|じっかん}}の文字が入っているのも、干支と深く結びついていたためと考えられています。"
            }
          />
        </p>
        <p style={P}>
          <RubyText
            text={
              "干支を「年」に当てはめる習慣が広まったのは、ずっと後の漢の時代です。それ以前は、約12年で天を一周する木星（{{歳星|さいせい}}）の位置で年を数える方法なども使われており、" +
              "十二支が12で区切られているのはこの木星の周期と関係があるとする説もあります。"
            }
          />
        </p>
        <a href="/events/shang--2" style={LINK}>年表で「甲骨文字の使用」を読む →</a>

        <h2 style={H2}>十二支はなぜ動物になったのか</h2>
        <p style={P}>
          <RubyText
            text={
              "子・丑・寅…の文字は、もともと動物を意味していたわけではありません。十二支と動物の組み合わせが確認できる早い例は、" +
              "1975年に湖北省で見つかった{{睡虎地秦簡|すいこちしんかん}}（戦国時代末〜秦の竹簡）の{{占|うらな}}いの書「{{日書|にっしょ}}」で、ここでは現在とは一部ちがう動物が当てられています。" +
              "今とほぼ同じ12の動物がそろって記されるのは、後漢の学者{{王充|おうじゅう}}の『{{論衡|ろんこう}}』です。字の読めない人にも覚えやすいよう身近な動物が当てられた、という説がよく知られています。"
            }
          />
        </p>
        <p style={P}>
          <RubyText
            text={
              "ネズミが一番になった理由や、ネコが十二支に入っていない理由を語る「神様のもとへの競争」の話は、後の時代に生まれた民話です。" +
              "動物の顔ぶれは国によって少しずつちがい、亥は中国ではブタ、日本ではイノシシ、ベトナムでは卯がウサギではなくネコになっています。"
            }
          />
        </p>

        <h2 style={H2}>干支の名がついた歴史上の出来事</h2>
        <p style={P}>
          <RubyText text="中国や日本では、大きな事件をその年の干支で呼ぶことがよくあります。教科書に出てくる名前の多くが、実は干支です。" />
        </p>
        <div className="flex flex-col gap-3">
          {EVENTS.map((ev) => (
            <div key={ev.year} style={{ ...CARD, padding: "12px 16px" }}>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}>
                  <RubyText text={ev.name} />
                </span>
                <span style={{ fontSize: 11.5, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>
                  {ev.year}・<RubyText text={ev.eto} />
                </span>
              </div>
              <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                <RubyText text={ev.body} />
              </p>
              <a href={ev.href} style={{ ...LINK, display: "inline-block", marginTop: 6 }}>くわしく読む →</a>
            </div>
          ))}
        </div>
        <p style={{ ...P, fontSize: 12.5, marginTop: 14 }}>
          <RubyText text="日本でも、{{戊辰|ぼしん}}戦争（1868年）、甲子園球場（1924年の{{甲子|きのえね}}の年に完成）など、干支から名前をとったものが数多くあります。" />
        </p>

        <h2 style={H2}>日本への伝来と「丙午」の迷信</h2>
        <p style={P}>
          <RubyText
            text={
              "干支は暦とともに朝鮮半島を経由して日本へ伝わりました。『日本書紀』には、6世紀に{{百済|くだら}}から暦の専門家（{{暦博士|れきはかせ}}）が送られたことや、" +
              "602年に{{百済|くだら}}の僧・{{観勒|かんろく}}が暦の本をもたらしたことが記されています。"
            }
          />
        </p>
        <p style={P}>
          <RubyText
            text={
              "日本では、{{丙午|ひのえうま}}の年に生まれた女性は気性が激しいという迷信が江戸時代に広まりました。前回の{{丙午|ひのえうま}}だった1966年には、" +
              "日本の出生数が前の年より約25%も減っています。この迷信は日本独自のもので、中国にはありません。そして2026年が、60年ぶりの{{丙午|ひのえうま}}でした。"
            }
          />
        </p>

        <h2 style={H2}>中国では「春節」から新しい干支</h2>
        <p style={P}>
          <RubyText
            text={
              "日本では1月1日から新しい干支になりますが、中国では旧暦の正月である春節（2027年は2月6日）を境に「ひつじ年」が始まると考えるのが一般的です。" +
              "占いや暦の世界では、二十四節気の{{立春|りっしゅん}}（2月4日ごろ）で干支が切り替わるとする考え方もあります。"
            }
          />
        </p>

        <section style={{ marginTop: 32 }}>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/shunsetsu" variant="solid">春節（旧正月）の由来と歴史</NavButton>
            <NavButton href="/year-mnemonics" variant="outline">年号の語呂合わせ</NavButton>
            <NavButton href="/japan-china-timeline" variant="outline">日中関係年表</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/eto" eraIds={["shang", "easternhan", "qing"]} />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
