import { ERAS, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const title = "『薬屋のひとりごと』のモデルの時代は？｜後宮・宦官・毒見・花街を中国史で解説";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "『薬屋のひとりごと』の舞台はどの時代がモデル？上級妃（貴妃・賢妃・徳妃・淑妃）の元になった唐の四夫人、毒見役と銀の箸、白粉の鉛の毒、宦官、花街の妓楼、宮廷医と本草学まで、作中の設定を実際の中国史と比べて解説します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/kusuriya" },
  openGraph: buildOpenGraph({
    title: fullTitle,
    description,
    path: "/kusuriya",
    type: "article",
    image: { title: "『薬屋のひとりごと』のモデル", subtitle: "後宮・毒見・花街の史実", kicker: "唐", seal: "薬" },
  }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

// 年表データに経歴（bio）付きで載っている人物なら人物ページへのリンクを返す（時代は問わず探す）
function personHref(name) {
  for (const era of ERAS) {
    const found = era.events.some((ev) =>
      (ev.heritage || []).some((it) => it.type === "figure" && it.bio && personSlug(it.name) === name)
    );
    if (found) return `/people/${era.id}/${encodeURIComponent(name)}`;
  }
  return null;
}

// 作中の要素と、モデルと考えられる史実の対応表
const MODELS = [
  { item: "上級妃（{{貴妃|きひ}}・{{賢妃|けんぴ}}・{{徳妃|とくひ}}・{{淑妃|しゅくひ}}）", real: "唐の{{四夫人|しふじん}}（正一品）", era: "唐", href: "#ranks" },
  { item: "{{毒見|どくみ}}役", real: "{{尚食|しょうしょく}}の「先に{{嘗|な}}める」役目、銀の{{箸|はし}}・銀{{牌|はい}}", era: "唐〜清", href: "#poison" },
  { item: "{{白粉|おしろい}}の毒", real: "化粧用の{{鉛白|えんぱく}}（{{鉛粉|えんぷん}}）による{{鉛中毒|なまりちゅうどく}}", era: "古代〜近代", href: "#oshiroi" },
  { item: "後宮で働く{{宦官|かんがん}}", real: "去勢された{{宮廷|きゅうてい}}の{{使用人|しようにん}}", era: "{{殷|いん}}・周〜清", href: "#eunuch" },
  { item: "{{下女|げじょ}}・{{侍女|じじょ}}・女官", real: "{{宮女|きゅうじょ}}と、唐の女官組織「{{六尚|りくしょう}}」", era: "唐〜清", href: "#maids" },
  { item: "花街の{{妓楼|ぎろう}}と{{妓女|ぎじょ}}", real: "長安の{{平康坊|へいこうぼう}}（{{北里|ほくり}}）、教養ある名{{妓|ぎ}}", era: "唐", href: "#hanamachi" },
  { item: "宮中の{{医官|いかん}}", real: "唐の{{太医署|たいいしょ}}、明・清の{{太医院|たいいいん}}", era: "唐〜清", href: "#medicine" },
  { item: "薬草と毒の知識", real: "『{{神農本草経|しんのうほんぞうきょう}}』『{{新修本草|しんしゅうほんぞう}}』『{{本草綱目|ほんぞうこうもく}}』", era: "漢〜明", href: "#medicine" },
  { item: "役人の試験", real: "{{科挙|かきょ}}", era: "{{隋|ずい}}〜清", href: "#others" },
  { item: "異国風の{{容姿|ようし}}の人々・西方との交易", real: "シルクロードと長安の{{胡人|こじん}}（ソグド人など）", era: "唐", href: "#others" },
];

const FAQ = [
  {
    q: "『薬屋のひとりごと』は中国のどの時代がモデル？",
    a: "作中の国は架空で、特定の王朝をそのまま写したものではない。ただし上級妃の位の名前、国際色豊かな都、花街のにぎわいなど、中心にあるのは唐（618〜907年）の制度や文化と読める。一方で、{{宦官|かんがん}}が大勢働く巨大な後宮や{{太医院|たいいいん}}のような{{医官|いかん}}の組織には、明・清の宮廷に近い部分もある。「唐を土台に、後の時代の要素も混ぜた中華風の世界」と考えるのが近い。",
  },
  {
    q: "上級妃の順番は史実と同じ？",
    a: "唐の制度では{{四夫人|しふじん}}の順番は「{{貴妃|きひ}}・{{淑妃|しゅくひ}}・{{徳妃|とくひ}}・{{賢妃|けんぴ}}」で、{{貴妃|きひ}}が筆頭、{{賢妃|けんぴ}}が最後だった。4人とも同じ正一品で、皇后の次に位置する。作品では4つの位の名前はそのまま使われているが、物語上の順番や力関係は作品独自のものとして描かれている。",
  },
  {
    q: "毒見役は本当にいた？",
    a: "いた。唐の宮廷では、皇帝の食事を{{担当|たんとう}}する{{尚食局|しょうしょくきょく}}の長官が、料理を{{差|さ}}し出す前に自分で先に{{嘗|な}}めることが決まりとされていた。後宮の女官組織にも食事を担当する「{{尚食|しょうしょく}}」があり、同じように味を見た。清の宮中では、料理に銀の{{牌|はい}}を入れて色の変化を確かめ、さらに{{宦官|かんがん}}が{{試食|ししょく}}したと伝わる。",
  },
  {
    q: "銀の箸で本当に毒がわかる？",
    a: "わかるのは一部の毒だけ。昔の{{砒素|ひそ}}の毒「{{砒霜|ひそう}}」は、作るときに混ざる{{硫黄|いおう}}を含むことが多く、その{{硫黄|いおう}}が銀と反応して黒く変わった。そのため銀で毒がわかると信じられたが、{{純粋|じゅんすい}}な{{砒素|ひそ}}や、植物の毒の多くには反応しない。",
  },
  {
    q: "後宮の宮女は一生出られなかった？",
    a: "王朝による。唐では、皇帝の{{即位|そくい}}や{{災害|さいがい}}のときに、宮女をまとめて家に帰す「{{放宮人|ほうきゅうじん}}」がたびたび行われた。清では、{{内務府|ないむふ}}から集められた宮女は25歳前後で宮仕えを終えて実家に帰るのが原則だった。一方で、位を得た{{妃嬪|ひひん}}は皇帝が{{亡|な}}くなっても後宮を出ることはほとんどできなかった。",
  },
];

const thStyle = { padding: "8px 10px", textAlign: "left", fontWeight: 700, color: COLORS.ink, borderBottom: "1px solid #DCD3B8", whiteSpace: "nowrap" };
const tdStyle = { padding: "8px 10px", verticalAlign: "top", borderBottom: "1px solid #E8E0C8", color: COLORS.inkSoft };
const h2Style = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginTop: 36, marginBottom: 10, scrollMarginTop: 16 };
const pStyle = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 12 };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

function Para({ text }) {
  return (
    <p style={pStyle}>
      <RubyText text={text} />
    </p>
  );
}

function Note({ children }) {
  return (
    <div style={{ marginTop: 4, marginBottom: 12, padding: "8px 10px", backgroundColor: "#F3ECD9", fontSize: 12, lineHeight: 1.8, color: COLORS.inkSoft }}>{children}</div>
  );
}

// 本文中の「→ 詳しいページ」リンク
function MoreLink({ href, text }) {
  if (!href) return null;
  return (
    <p style={{ fontSize: 12.5, marginTop: -4, marginBottom: 12 }}>
      <a href={href} style={linkStyle}>
        <RubyText text={text} />
      </a>
    </p>
  );
}

export default function KusuriyaPage() {
  const wuHref = personHref("武則天");
  const yangHref = personHref("楊貴妃");

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          『<RubyText text="{{薬屋|くすりや}}" />のひとりごと』のモデルの時代と制度
        </h1>
        <Para
          text={
            "{{日向夏|ひゅうがなつ}}の小説『{{薬屋|くすりや}}のひとりごと』は、薬と毒に{{詳|くわ}}しい少女{{猫猫|マオマオ}}が、{{後宮|こうきゅう}}で起こる事件の{{謎|なぞ}}を解いていく物語。漫画とアニメでも人気を集めている。" +
            "舞台は中華風の架空の国だが、後宮の位、{{毒見|どくみ}}、{{宦官|かんがん}}、花街といった設定の多くは、実際の中国の歴史にモデルを見つけることができる。このページでは、作品の設定と史実を並べて解説する。"
          }
        />
        <Note>
          <RubyText text="作品の序盤の基本設定には触れますが、物語の大きなネタバレは書いていません。作品との対応は、制度や風俗の共通点から読み取った当サイトの見立てです。" />
        </Note>

        <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "12px 14px", marginBottom: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: COLORS.gold, marginBottom: 6 }}>結論：モデルの中心は唐の時代</div>
          <div style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.ink }}>
            <RubyText text="上級妃の位、国際色豊かな都、花街の文化は{{唐|とう}}（618〜907年）がもと。そこに、{{宦官|かんがん}}が大勢働く後宮や宮廷医の組織など、{{明|みん}}・{{清|しん}}の宮廷に近い要素が混ざっている。" />
          </div>
        </div>
        <nav className="flex gap-x-4 gap-y-1 flex-wrap" style={{ fontSize: 12, marginBottom: 8 }}>
          <a href="#table" style={linkStyle}>対応表</a>
          <a href="#ranks" style={linkStyle}>上級妃と唐の四夫人</a>
          <a href="#poison" style={linkStyle}>毒見役</a>
          <a href="#oshiroi" style={linkStyle}>白粉の毒</a>
          <a href="#eunuch" style={linkStyle}>宦官</a>
          <a href="#maids" style={linkStyle}>宮女</a>
          <a href="#hanamachi" style={linkStyle}>花街</a>
          <a href="#medicine" style={linkStyle}>宮廷医と本草学</a>
          <a href="#faq" style={linkStyle}>よくある疑問</a>
        </nav>

        <h2 id="table" style={h2Style}>作中の設定と史実の対応表</h2>
        <div className="overflow-x-auto" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "36%" }} />
              <col style={{ width: "44%" }} />
              <col style={{ width: "20%" }} />
            </colgroup>
            <thead>
              <tr style={{ backgroundColor: "#F3ECD9" }}>
                <th style={thStyle}>作中の設定</th>
                <th style={thStyle}>史実のモデル</th>
                <th style={thStyle}>時代</th>
              </tr>
            </thead>
            <tbody>
              {MODELS.map((m, i) => (
                <tr key={i}>
                  <td style={{ ...tdStyle, fontFamily: "var(--font-serif), serif", fontWeight: 700, color: COLORS.ink }}>
                    <a href={m.href} style={{ color: COLORS.ink, textDecoration: "none" }}>
                      <RubyText text={m.item} />
                    </a>
                  </td>
                  <td style={{ ...tdStyle, fontSize: 12 }}>
                    <RubyText text={m.real} />
                  </td>
                  <td style={{ ...tdStyle, fontSize: 12 }}>
                    <RubyText text={m.era} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="ranks" style={h2Style}>上級妃のモデルは唐の「四夫人」</h2>
        <Para
          text={
            "作中で後宮の頂点に立つ4人の上級妃、{{貴妃|きひ}}・{{賢妃|けんぴ}}・{{徳妃|とくひ}}・{{淑妃|しゅくひ}}。この4つの位は、唐の後宮で皇后のすぐ下に置かれた「{{四夫人|しふじん}}」の名前そのものだ。唐では4人とも正一品で、{{宰相|さいしょう}}と{{並|なら}}ぶ最高の{{品階|ひんかい}}を{{与|あた}}えられていた。" +
            "その下には{{九嬪|きゅうひん}}・{{二十七世婦|にじゅうしちせいふ}}・{{八十一御妻|はちじゅういちぎょさい}}が続き、皇后を除く定員は121人にのぼった。作中の中級妃・下級妃という分け方も、この何段階もの序列を思わせる。"
          }
        />
        <Para
          text={
            "唐の制度での順番は{{貴妃|きひ}}・{{淑妃|しゅくひ}}・{{徳妃|とくひ}}・{{賢妃|けんぴ}}で、{{楊貴妃|ようきひ}}の「{{貴妃|きひ}}」は名前ではなくこの筆頭の位の名前である。皇后が置かれなかった{{玄宗|げんそう}}の後宮で、{{楊貴妃|ようきひ}}は事実上の頂点に立った。" +
            "また{{武則天|ぶそくてん}}は、{{太宗|たいそう}}の後宮に入ったときは{{才人|さいじん}}（正五品）にすぎなかったが、次の{{高宗|こうそう}}の{{昭儀|しょうぎ}}から皇后、さらに女帝へと上りつめた。後宮の位は、生まれた子や皇帝の{{寵愛|ちょうあい}}しだいで大きく動くものだった。"
          }
        />
        <p style={{ fontSize: 12.5, lineHeight: 1.9, marginTop: -4, marginBottom: 12 }}>
          <a href="/harem-ranks#tang" style={linkStyle}>
            <RubyText text="唐・清・漢の後宮の位を表で見る →" />
          </a>
          {yangHref && (
            <>
              {"　"}
              <a href={yangHref} style={linkStyle}>
                <RubyText text="{{楊貴妃|ようきひ}}の人物ページ →" />
              </a>
            </>
          )}
          {wuHref && (
            <>
              {"　"}
              <a href={wuHref} style={linkStyle}>
                <RubyText text="{{武則天|ぶそくてん}}の人物ページ →" />
              </a>
            </>
          )}
        </p>

        <h2 id="poison" style={h2Style}>毒見役は実在した：尚食と銀の箸</h2>
        <Para
          text={
            "{{猫猫|マオマオ}}が任される{{毒見|どくみ}}役にも、はっきりしたモデルがある。唐の宮廷では、皇帝の食事を作る{{尚食局|しょうしょくきょく}}の長官（{{尚食奉御|しょうしょくほうぎょ}}）が、料理を{{差|さ}}し出す前に自分で先に{{嘗|な}}めることが定められていた。後宮の女官組織にも食事を担当する「{{尚食|しょうしょく}}」があり、やはり味見をしてから出した。" +
            "清の宮中では、料理に銀の{{牌|はい}}を差して色の変化を確かめ、さらに{{宦官|かんがん}}が{{試食|ししょく}}してから皇帝に出したと伝わる。"
          }
        />
        <Para
          text={
            "銀で毒を見分ける方法は古くからある。昔の{{砒素|ひそ}}の毒「{{砒霜|ひそう}}」は{{硫黄|いおう}}を含むことが多く、その{{硫黄|いおう}}が銀を黒く変えたため、「銀が黒くなれば毒」と信じられた。ただし植物の毒の多くには反応しないので、銀の器は確実な毒見の方法ではなかった。人が自分の舌で確かめる毒見役が、いつの時代も{{欠|か}}かせなかったのはそのためだ。"
          }
        />
        <Para
          text={
            "後宮で毒が使われた実例もある。前漢の紀元前71年、{{宣帝|せんてい}}の{{許皇后|きょこうごう}}は出産の後、女医の{{淳于衍|じゅんうえん}}が{{丸薬|がんやく}}に混ぜた{{附子|ぶし}}（トリカブトの根）を飲んで{{亡|な}}くなった。{{娘|むすめ}}を皇后にしたかった大将軍{{霍光|かくこう}}の妻が女医に頼んだもので、事件はのちに{{霍氏|かくし}}一族が{{滅|ほろ}}ぼされるきっかけの一つとなった。{{附子|ぶし}}は少量なら薬、多ければ毒になる生薬で、作中の「薬と毒は表裏一体」という考え方そのものの事件といえる。"
          }
        />

        <h2 id="oshiroi" style={h2Style}>白粉（おしろい）の毒は鉛中毒</h2>
        <Para
          text={
            "物語の始まりでは、{{白粉|おしろい}}の毒が大きな{{鍵|かぎ}}になる。昔の{{白粉|おしろい}}には、{{鉛|なまり}}から作った白い粉「{{鉛白|えんぱく}}」が使われていた。中国では{{鉛粉|えんぷん}}・{{胡粉|ごふん}}などと呼ばれ、遅くとも戦国時代から化粧に使われている。化粧を落として飾らない姿になることを「{{鉛華|えんか}}を洗い{{尽|つ}}くす」というほど、{{白粉|おしろい}}と{{鉛|なまり}}は結びついていた。"
          }
        />
        <Para
          text={
            "{{鉛|なまり}}は肌や口から体に入って少しずつたまり、{{貧血|ひんけつ}}や{{腹痛|ふくつう}}、神経の病気を引き起こす。とくに体の小さな{{乳児|にゅうじ}}は影響を受けやすい。日本でも、明治から昭和のはじめに「脳膜炎」と呼ばれていた乳児の病気の多くが、実は母親や乳母の{{白粉|おしろい}}の{{鉛|なまり}}による中毒だったことが、1920年代に京都帝国大学の{{平井毓太郎|ひらいいくたろう}}らの研究で明らかになった。その後、{{鉛白|えんぱく}}を使った{{白粉|おしろい}}は日本で製造が禁止されている。"
          }
        />

        <h2 id="eunuch" style={h2Style}>宦官：後宮に入れる男性</h2>
        <Para
          text={
            "作中の後宮では、去勢した男性である{{宦官|かんがん}}が多く働いている。皇帝以外の男性が後宮に入れないのは、生まれた子が皇帝の子であることを確かにするためで、男の手が必要な{{力仕事|ちからしごと}}や{{警備|けいび}}、{{取次|とりつぎ}}を{{宦官|かんがん}}が担った。" +
            "{{宦官|かんがん}}は{{殷|いん}}・周の時代からいたとされ、唐の後期には皇帝の{{廃立|はいりつ}}を左右するほどの力を持った。明には最も多いときで数万人の{{宦官|かんがん}}がいたといわれ、作中のように後宮の{{隅々|すみずみ}}まで{{宦官|かんがん}}が行き交う光景は、明・清の宮廷に近い。"
          }
        />
        <MoreLink href="/eunuchs" text="{{宦官|かんがん}}の歴史と有名な宦官を読む →" />

        <h2 id="maids" style={h2Style}>宮女と女官：後宮で働く女性たち</h2>
        <Para
          text={
            "後宮には、皇帝の妻である{{妃嬪|ひひん}}のほかに、何千人もの{{宮女|きゅうじょ}}が働いていた。唐の後宮には、{{尚宮|しょうきゅう}}・{{尚儀|しょうぎ}}・{{尚服|しょうふく}}・{{尚食|しょうしょく}}・{{尚寝|しょうしん}}・{{尚功|しょうこう}}の「{{六尚|りくしょう}}」と呼ばれる女官の組織があり、記録・儀式・衣服・食事・寝所・{{裁縫|さいほう}}などを{{分担|ぶんたん}}した。女官にも{{品階|ひんかい}}があり、{{宮女|きゅうじょ}}から女官へと出世する道もあった。"
          }
        />
        <Para
          text={
            "{{猫猫|マオマオ}}は{{下女|げじょ}}として後宮に入り、のちに妃の{{侍女|じじょ}}に取り立てられる。史実でも、位の低い{{宮女|きゅうじょ}}が{{妃嬪|ひひん}}の身の回りの世話を任されることはよくあった。唐では皇帝の{{即位|そくい}}や{{災害|さいがい}}のときに宮女をまとめて家に帰す「{{放宮人|ほうきゅうじん}}」が行われ、清では宮女は25歳前後で宮仕えを終えるのが原則だった。年季が明ければ後宮を出られるという作中の設定は、こうした制度と重なる。"
          }
        />

        <h2 id="hanamachi" style={h2Style}>花街のモデル：長安の平康坊</h2>
        <Para
          text={
            "{{猫猫|マオマオ}}が育った花街にもモデルが考えられる。唐の都・長安では、東の市場に近い{{平康坊|へいこうぼう}}（{{北里|ほくり}}）に{{妓楼|ぎろう}}が集まり、{{科挙|かきょ}}の合格者や役人たちが{{宴|うたげ}}を開く社交の場になっていた。そのにぎわいは、唐の末期に{{孫棨|そんけい}}が書いた『{{北里志|ほくりし}}』に記録されている。"
          }
        />
        <Para
          text={
            "唐の名{{妓|ぎ}}には、詩や音楽、会話の才で知られる者が多かった。{{薛濤|せっとう}}は詩人として{{白居易|はくきょい}}らと詩を{{交|か}}わし、自分で作った紙「{{薛濤箋|せっとうせん}}」の名を今に残している。作中の{{妓楼|ぎろう}}で、位の高い{{妓女|ぎじょ}}が歌や{{舞|まい}}、{{囲碁|いご}}などの教養を{{誇|ほこ}}る存在として描かれるのは、こうした唐の名{{妓|ぎ}}の姿と重なる。"
          }
        />

        <h2 id="medicine" style={h2Style}>宮廷医と本草学：猫猫の薬の知識のルーツ</h2>
        <Para
          text={
            "宮中の{{医官|いかん}}にも実在の組織がある。唐の{{太医署|たいいしょ}}は医療と医学教育を担う役所で、医・{{鍼|はり}}・{{按摩|あんま}}・{{呪禁|じゅごん}}の{{博士|はかせ}}が学生を教え、薬草園まで持っていた。明・清では{{太医院|たいいいん}}が皇帝と後宮の医療を受け持ち、{{妃嬪|ひひん}}の{{診察|しんさつ}}もした。ただし男性の医者が{{妃|ひ}}の体に直接触れることには{{制限|せいげん}}があり、{{出産|しゅっさん}}などでは女医や{{産婆|さんば}}が頼られた。"
          }
        />
        <Para
          text={
            "{{猫猫|マオマオ}}の薬草と毒の知識は、中国の「{{本草学|ほんぞうがく}}」の流れにある。伝説の帝王{{神農|しんのう}}は自ら百草を{{嘗|な}}めて、一日に七十もの毒にあたりながら薬を見つけたと伝えられ、その名を{{冠|かんむり}}した『{{神農本草経|しんのうほんぞうきょう}}』が漢の時代にまとめられた。" +
            "唐の659年には、国が編集した薬の本『{{新修本草|しんしゅうほんぞう}}』が作られ、日本にも伝わった。明の{{李時珍|りじちん}}が約30年をかけて書いた『{{本草綱目|ほんぞうこうもく}}』（1596年刊行）は、1800種あまりの薬を収めた本草学の集大成となっている。自分の体で毒を試す{{猫猫|マオマオ}}の姿は、まるで{{神農|しんのう}}の伝説のようだ。"
          }
        />

        <h2 id="others" style={h2Style}>そのほかの設定：科挙・西方との交易</h2>
        <Para
          text={
            "作中の役人たちの{{背景|はいけい}}には、試験で役人を選ぶ{{科挙|かきょ}}がある。{{科挙|かきょ}}は{{隋|ずい}}に始まり、唐で整えられ、清の末の1905年まで続いた。" +
            "また作中には、西方の国の人々や異国風の{{容姿|ようし}}を持つ人物も登場する。唐の長安はシルクロードの東の終点で、ソグド人やペルシア人など「{{胡人|こじん}}」と呼ばれた外国人が大勢暮らし、{{胡服|こふく}}や{{胡楽|こがく}}が流行した。異国の文化が当たり前のように行き交う作中の都の空気も、唐の長安を思わせる。"
          }
        />
        <p style={{ fontSize: 12.5, lineHeight: 1.9, marginTop: -4, marginBottom: 12 }}>
          <a href="/keju" style={linkStyle}>
            <RubyText text="{{科挙|かきょ}}とは →" />
          </a>
          {"　"}
          <a href="/silk-road" style={linkStyle}>
            <RubyText text="シルクロードとは →" />
          </a>
        </p>

        <h2 id="faq" style={h2Style}>『薬屋のひとりごと』と史実についてよくある疑問</h2>
        <div className="flex flex-col gap-3">
          {FAQ.map((f, i) => (
            <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "12px 14px" }}>
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
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            <RubyText text="後宮の制度や、後宮を{{舞台|ぶたい}}にした中国ドラマの史実も別ページで紹介しています。" />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/harem-ranks" variant="solid">後宮の位一覧</NavButton>
            <NavButton href="/eunuchs" variant="outline">宦官とは</NavButton>
            <NavButton href="/dramas" variant="outline">中国歴史ドラマの史実</NavButton>
            <NavButton href="/women-rulers" variant="outline">女帝と権力を握った女性</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/kusuriya" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
