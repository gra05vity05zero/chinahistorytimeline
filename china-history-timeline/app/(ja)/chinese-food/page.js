import { COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";
import { bilingualAlternates } from "@/lib/en";
import { PageJsonLd } from "@/components/JsonLd";

const title = "中国料理の起源と歴史｜麻婆豆腐・北京ダック・餃子はいつ生まれた？";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "4000年前の麺、殷の時代の箸、シルクロードで伝わった小麦とゴマ、明代に新大陸から来た唐辛子――中国料理の歴史を年表で解説。麻婆豆腐・北京ダック・東坡肉・宮保鶏丁・餃子などの名物料理の起源と、天津飯やエビチリが日本生まれである理由も紹介します。";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/chinese-food", "ja"),
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/chinese-food" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const H2 = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginTop: 40, marginBottom: 12, paddingLeft: 10, borderLeft: `4px solid ${COLORS.vermilion}` };
const P = { fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 14 };
const CARD = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const TH = { padding: "7px 10px", fontSize: 11.5, fontWeight: 700, color: "#FBF8F0", backgroundColor: COLORS.ink, textAlign: "left", whiteSpace: "nowrap" };
const TD = { padding: "7px 10px", fontSize: 12.5, color: COLORS.inkSoft, borderTop: "1px solid #DCD3B8", verticalAlign: "top" };
const LINK = { fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

const HISTORY = [
  {
    era: "新石器時代（約9000〜4000年前）",
    title: "北はアワ、南は米",
    body: "黄河流域ではアワやキビ、長江流域では稲の栽培が始まった。長江下流の{{河姆渡|かぼと}}遺跡からは約7000年前の大量の{{籾|もみ}}が見つかっている。今も言われる「南は米、北は小麦（粉もの）」という食文化の{{違|ちが}}いの出発点はここにある。また2005年には、青海省の{{喇家|らつか}}遺跡で約4000年前のアワで作られた麺が{{椀|わん}}に入ったまま見つかり、世界最古の麺として話題になった。",
    href: "/events/neolithic--0",
  },
  {
    era: "{{殷|いん}}・周",
    title: "{{鼎|かなえ}}で煮て、{{甑|こしき}}で蒸す",
    body: "{{殷|いん}}・周の時代には、三本足の{{鼎|かなえ}}で肉を煮たり、{{甗|げん}}や{{甑|こしき}}で穀物を蒸したりしていた。料理は神や祖先に{{捧|ささ}}げる{{祭祀|さいし}}と深く結びつき、青銅の食器は権力の象徴でもあった。{{殷墟|いんきょ}}からは青銅製の箸が出土しており、{{紂王|ちゅうおう}}が{{象牙|ぞうげ}}の箸を作らせたことを家臣が{{贅沢|ぜいたく}}の始まりとして{{憂|うれ}}えたという話が『{{韓非子|かんぴし}}』に残る。",
    href: "/events/shang--1",
  },
  {
    era: "前漢",
    title: "シルクロードと「胡」の食材",
    body: "{{張騫|ちょうけん}}の西域遠征をきっかけに東西の交流が盛んになり、ブドウ・ザクロ・ゴマ（{{胡麻|ごま}}）・キュウリ（{{胡瓜|こうり}}）などが伝わったとされる。「胡」は西方の異民族を指す字で、名前に「胡」がつく食材の多くは西から来たものだ。同じころ回転式の石臼が広まり、小麦を粉にして{{麺|めん}}や{{餅|ビン}}（小麦粉の生地を焼いたり蒸したりしたもの）にする「粉食」が普及していった。",
    href: "/events/westernhan--4",
  },
  {
    era: "北魏（6世紀）",
    title: "現存最古の料理書『{{斉民要術|せいみんようじゅつ}}』",
    body: "北魏の{{賈思勰|かしきょう}}がまとめた農業書『{{斉民要術|せいみんようじゅつ}}』には、{{醤|ジャン}}（みそ）や酢、酒の造り方から、肉の{{炙|あぶ}}り焼きや{{羹|あつもの}}（スープ）まで、多くの調理法が記されている。中国料理の基本となる発酵調味料の技術は、この時代にはすでに完成していた。",
    href: "/eras/nanbei",
  },
  {
    era: "{{唐|とう}}",
    title: "国際色豊かな食卓と茶の文化",
    body: "長安には西域の商人が集まり、ゴマをのせて焼いた「{{胡餅|こべい}}」が大流行した。8世紀には{{陸羽|りくう}}が茶の専門書『茶経』を著し、茶を飲む習慣が広く定着する。新疆のトルファンにある{{唐代|とうだい}}の墓からは、今とほとんど同じ形の{{餃子|ギョーザ}}が乾燥した状態で見つかっている。",
    href: "/eras/tang",
  },
  {
    era: "宋",
    title: "炒め物とレストランの時代",
    body: "石炭の利用と鉄の生産が増え、薄い鉄鍋を強火で{{熱|ねっ}}して短時間で仕上げる「炒め物」が一般に広まった。{{開封|かいほう}}や{{杭州|こうしゅう}}には夜遅くまで営業する飲食店が立ち並び、注文を受けて料理を出す、今のレストランに近い店が現れた。一日三食の習慣が定着したのもこのころとされる。",
    href: "/eras/northernsong",
  },
  {
    era: "明",
    title: "新大陸から唐辛子がやってきた",
    body: "16世紀、ヨーロッパ人の航海によってアメリカ大陸原産のトウモロコシ・サツマイモ・ジャガイモ・落花生・唐辛子が中国に伝わった。唐辛子は最初、観賞用の植物として記録されている。四川料理や湖南料理が今のように辛くなったのは、唐辛子が料理に使われ始めた清代以降のことで、中国料理の「辛さ」の歴史は意外に新しい。",
    href: "/eras/ming",
  },
  {
    era: "清",
    title: "宮廷料理と各地の名物料理",
    body: "満洲族の料理と漢族の料理をあわせた豪華な宴席「{{満漢全席|まんかんぜんせき}}」が生まれ、{{揚州|ようしゅう}}などの豊かな商業都市では料理文化が花開いた。麻婆豆腐や宮保鶏丁など、今も愛される名物料理の多くはこの時代に生まれている。",
    href: "/eras/qing",
  },
];

const DISHES = [
  {
    name: "麻婆豆腐",
    origin: "清・19世紀後半／四川省成都",
    body: "成都の北にあった食堂の{{陳|ちん}}家のおかみさんが、近くの労働者のために豆腐と牛ひき肉を辛く煮込んで出したのが始まりとされる。おかみさんの顔に「あばた（麻）」があったので「麻婆」と呼ばれた。日本には四川出身の料理人・{{陳建民|ちんけんみん}}が、日本人の口に合うようアレンジして広めた。",
  },
  {
    name: "北京ダック",
    origin: "明〜清／南京から北京へ",
    body: "もとは明の最初の都・南京で食べられていたアヒルの丸焼きで、{{永楽帝|えいらくてい}}が北京に都を移すとともに北京に伝わったとされる。明代創業を名乗る「{{便宜坊|べんぎぼう}}」と、1864年創業の「{{全聚徳|ぜんしゅうとく}}」が二大老舗として知られる。",
    href: "/events/ming--3",
  },
  {
    name: "{{東坡肉|トンポーロー}}",
    origin: "北宋／詩人{{蘇軾|そしょく}}",
    body: "豚の{{角煮|かくに}}の元祖とされる料理で、名前は詩人{{蘇軾|そしょく}}（号は{{東坡|とうば}}）に由来する。左遷先の{{黄州|こうしゅう}}で安い豚肉をじっくり煮る食べ方を詩に{{詠|よ}}んでおり、杭州の役人時代に人々にふるまったという話も伝わる。長崎の{{卓袱|しっぽく}}料理の「{{東坡煮|とうばに}}」は、この料理が日本に伝わったものとされる。",
    href: "/eras/northernsong",
  },
  {
    name: "{{宮保鶏丁|ゴンバオジーディン}}",
    origin: "清・19世紀／四川総督{{丁宝楨|ていほうてい}}",
    body: "鶏肉とピーナッツを唐辛子で炒めた料理。四川総督{{丁宝楨|ていほうてい}}が好んだ料理で、彼の称号「{{宮保|きゅうほう}}」から名前がついたとされる。新大陸から来た唐辛子と落花生の両方を使う、明清以降ならではの料理だ。",
  },
  {
    name: "{{餃子|ギョーザ}}",
    origin: "遅くとも{{唐|とう}}代",
    body: "後漢の医者{{張仲景|ちょうちゅうけい}}が、耳がしもやけになった人々のために羊肉と薬草を生地で包んで配ったのが始まり、という伝説が有名。確かな証拠としては、トルファンの{{唐代|とうだい}}の墓から実物が出土している。中国では水餃子が主流で、焼き餃子が主役になったのは戦後の日本でのこと。",
  },
  {
    name: "{{饅頭|マントウ}}",
    origin: "三国時代の伝説",
    body: "{{諸葛亮|しょかつりょう}}が南方遠征の帰りに川の神を{{鎮|しず}}めるため、人の頭の代わりに小麦粉の生地で肉を包んで供えたのが始まり、という伝説が宋代の書物に記されている。今の中国では、具の入っていない蒸しパンを{{饅頭|マントウ}}、具入りを{{包子|パオズ}}と呼び分ける。",
    href: "/eras/sanguo",
  },
  {
    name: "{{油条|ヨウティアオ}}",
    origin: "南宋の伝説",
    body: "朝食の定番の揚げパン。南宋の名将{{岳飛|がくひ}}を無実の罪で死なせた宰相{{秦檜|しんかい}}とその妻に見立てて、二本の生地をくっつけて油で揚げたのが始まりだという伝説があり、「油炸{{檜|かい}}（{{秦檜|しんかい}}を油で揚げる）」とも呼ばれた。",
    href: "/eras/southernsong",
  },
  {
    name: "豆腐",
    origin: "前漢の伝説／記録は宋代から",
    body: "前漢の{{淮南王|わいなんおう}}{{劉安|りゅうあん}}が発明したという伝説がよく知られるが、確かな文献に豆腐が登場するのは宋代の初め。日本へは奈良〜平安時代に{{遣唐使|けんとうし}}や僧によって伝えられたとされる。",
  },
];

const FAQ = [
  {
    q: "「中国料理」と「中華料理」のちがいは？",
    a: "どちらも中国の料理を指す言葉だが、日本では、中国本来の料理を「中国料理」、ラーメンや天津飯のように日本で独自に発展したものを含む身近な料理を「中華料理」と呼び分けることが多い。厳密な定義があるわけではない。",
  },
  {
    q: "中国料理は何年の歴史がある？",
    a: "「4000年の歴史」という言い方は、約4000年前の麺が見つかったことなど、古い食文化の積み重ねを指している。ただし炒め物の普及は宋代（10〜13世紀）、唐辛子の伝来は明代（16世紀）で、今の中国料理の姿ができたのはここ数百年のことだ。",
  },
  {
    q: "四川料理はいつから辛い？",
    a: "唐辛子はアメリカ大陸原産で、中国に伝わったのは16世紀の明代。料理に広く使われるようになったのは清代以降なので、四川料理が今のように辛くなったのは、長くても300年ほど前からと考えられている。それ以前の四川では、{{花椒|かしょう}}（山椒の仲間）のしびれる辛さが中心だった。",
  },
  {
    q: "天津飯やエビチリは中国にある？",
    a: "天津飯は日本で生まれた料理で、中国の天津にはない。エビチリは四川の{{乾焼蝦仁|カンシャオシャーレン}}をもとに、料理人の{{陳建民|ちんけんみん}}が日本人向けにアレンジしたもの。冷やし中華も日本生まれだ。",
  },
];

const CUISINES = [
  ["山東料理（魯菜）", "山東省", "宮廷料理の土台。ネギを使った炒め物や濃厚なスープ", "{{葱焼海参|ツォンシャオハイシェン}}（ナマコのネギ煮）"],
  ["四川料理（川菜）", "四川省・重慶", "唐辛子の辛さと{{花椒|ホアジャオ}}のしびれ（麻辣）", "麻婆豆腐、回鍋肉"],
  ["広東料理（粤菜）", "広東省・香港", "素材の味を生かす。点心や飲茶", "{{叉焼|チャーシュー}}、点心"],
  ["{{淮揚|わいよう}}料理（{{淮揚菜|わいようさい}}）", "江蘇省", "上品で甘めの味つけ。国の公式晩餐会でも採用", "{{獅子頭|シーズートウ}}（大きな肉団子）"],
];

export default function ChineseFoodPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <PageJsonLd path="/chinese-food" title={title} description={description} breadcrumbName="中国料理の起源と歴史" faq={FAQ} />
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国料理の起源と歴史
        </h1>
        <p style={P}>
          <RubyText
            text={
              "中国料理とは、約4000年前の麺にさかのぼる古い食文化に、シルクロードや新大陸から来た食材が加わって形づくられてきた料理の総称です。" +
              "「中華料理4000年の歴史」とよく言われますが、今わたしたちが思い浮かべる中国料理の姿は、長い時間をかけて少しずつできあがってきたものです。" +
              "炒め物が広まったのは宋の時代、四川料理が辛くなったのは清の時代、焼き餃子が主役になったのは戦後の日本――。" +
              "このページでは、中国の食の歩みを時代順にたどり、おなじみの料理がいつ、どのように生まれたのかを紹介します。"
            }
          />
        </p>

        <div style={{ ...CARD, padding: "14px 18px", borderLeft: `4px solid ${COLORS.gold}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.gold, marginBottom: 6 }}>意外と新しい？ 中国料理の「はじまり」</div>
          <ul style={{ fontSize: 12.5, lineHeight: 1.9, color: COLORS.inkSoft, paddingLeft: 18, listStyle: "disc" }}>
            <li>麺：約4000年前（世界最古の麺が青海省で出土）</li>
            <li>箸：殷の時代（3000年以上前）</li>
            <li>炒め物の普及：宋（10〜13世紀）</li>
            <li>唐辛子の伝来：明（16世紀）／辛い四川料理：清以降</li>
            <li>麻婆豆腐：清の19世紀後半</li>
          </ul>
        </div>

        <h2 style={H2}>年表で見る中国の食の歴史</h2>
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
              <a href={h.href} style={LINK}>関連する時代・出来事を読む →</a>
            </div>
          ))}
        </div>

        <h2 style={H2}>名物料理の起源</h2>
        <p style={P}>
          <RubyText text="料理の由来には、有名人にちなんだ伝説がつきものです。ここでは史料で確かめられることと、伝説として語られていることを分けて紹介します。" />
        </p>
        <div className="flex flex-col gap-3">
          {DISHES.map((d) => (
            <div key={d.name} style={{ ...CARD, padding: "12px 16px" }}>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}>
                  <RubyText text={d.name} />
                </span>
                <span style={{ fontSize: 11.5, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>
                  <RubyText text={d.origin} />
                </span>
              </div>
              <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                <RubyText text={d.body} />
              </p>
              {d.href && <a href={d.href} style={{ ...LINK, display: "inline-block", marginTop: 6 }}>関連する時代・出来事を読む →</a>}
            </div>
          ))}
        </div>

        <h2 style={H2}>中国の四大料理</h2>
        <p style={P}>
          <RubyText text="広い中国では地方ごとに料理が大きくちがい、代表的な4つの系統を「四大料理」と呼びます。ここに{{福建|ふっけん}}・{{浙江|せっこう}}・湖南・{{安徽|あんき}}を加えて「八大料理」とすることもあります。" />
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", minWidth: 520, borderCollapse: "collapse", ...CARD }}>
            <thead>
              <tr><th style={TH}>系統</th><th style={TH}>地域</th><th style={TH}>特徴</th><th style={TH}>代表的な料理</th></tr>
            </thead>
            <tbody>
              {CUISINES.map((c) => (
                <tr key={c[0]}>
                  <td style={{ ...TD, fontWeight: 700, color: COLORS.ink, whiteSpace: "nowrap" }}><RubyText text={c[0]} /></td>
                  <td style={TD}>{c[1]}</td>
                  <td style={TD}><RubyText text={c[2]} /></td>
                  <td style={TD}><RubyText text={c[3]} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={H2}>天津飯もエビチリも日本生まれ</h2>
        <p style={P}>
          <RubyText
            text={
              "日本の「中華料理」には、中国にはない日本生まれの料理がたくさんあります。かに玉をご飯にのせた天津飯は、天津とは関係なく日本で考え出されたもの。" +
              "エビチリは、四川の{{乾焼蝦仁|カンシャオシャーレン}}をもとに{{陳建民|ちんけんみん}}が辛さを抑え、ケチャップを使って日本人好みにしたものです。冷やし中華も日本で生まれました。"
            }
          />
        </p>
        <p style={P}>
          <RubyText
            text={
              "ラーメンの元祖とされるのは、1910年に東京・浅草で開店した「{{来々軒|らいらいけん}}」で、横浜の中華街から招いた料理人が作る「支那そば」が人気を集めました。" +
              "焼き餃子が広まったのは戦後、旧満洲から引き揚げてきた人々が各地で店を開いたことがきっかけとされています。"
            }
          />
        </p>

        <h2 id="faq" style={H2}>中国料理についてよくある疑問</h2>
        <div className="flex flex-col gap-3">
          {FAQ.map((f, i) => (
            <div key={i} style={{ ...CARD, padding: "12px 16px" }}>
              <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                Q. <RubyText text={f.q} />
              </h3>
              <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
                <RubyText text={f.a} />
              </p>
            </div>
          ))}
        </div>

        <section style={{ marginTop: 32 }}>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/silk-road" variant="solid">シルクロードとは</NavButton>
            <NavButton href="/shunsetsu" variant="outline">春節（旧正月）の由来</NavButton>
            <NavButton href="/kusuriya" variant="outline">『薬屋のひとりごと』のモデル</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/chinese-food" eraIds={["neolithic", "westernhan", "northernsong", "ming", "qing"]} />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
