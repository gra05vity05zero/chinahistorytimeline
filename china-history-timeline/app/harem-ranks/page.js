import { ERAS, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { DRAMAS } from "@/lib/dramas";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const title = "後宮の位（妃の階級）一覧｜皇后・皇貴妃・貴妃の違いを清・唐・漢で解説";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "中国の後宮の位を、清代の「皇后・皇貴妃・貴妃・妃・嬪・貴人・常在・答応」の8段階を中心に表で解説。定員や年俸の違い、唐の四夫人・九嬪、漢の昭儀・婕妤、楊貴妃や武則天がどの位にいたか、中国ドラマの呼び方までまとめます。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/harem-ranks" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/harem-ranks" }),
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

function dramaHref(slug) {
  return DRAMAS.some((d) => d.slug === slug) ? `/dramas/${slug}` : null;
}

// 清代の後宮の位。定員と年例銀（年俸）は乾隆年間の『国朝宮史』による
const QING_RANKS = [
  { rank: "{{皇后|こうごう}}", quota: "1人", pay: "1000両", note: "皇帝の正妻。後宮全体を{{統|す}}べる「{{中宮|ちゅうぐう}}」" },
  { rank: "{{皇貴妃|こうきひ}}", quota: "1人", pay: "800両", note: "皇后に次ぐ位。皇后がいないときは後宮を代わって{{取|と}}り{{仕切|しき}}る" },
  { rank: "{{貴妃|きひ}}", quota: "2人", pay: "600両", note: "" },
  { rank: "{{妃|ひ}}", quota: "4人", pay: "300両", note: "「{{令妃|れいひ}}」のように{{封号|ほうごう}}＋位で呼ばれる" },
  { rank: "{{嬪|ひん}}", quota: "6人", pay: "200両", note: "ここまでが一つの宮殿の主になれる位" },
  { rank: "{{貴人|きじん}}", quota: "定員なし", pay: "100両", note: "" },
  { rank: "{{常在|じょうざい}}", quota: "定員なし", pay: "50両", note: "" },
  { rank: "{{答応|とうおう}}", quota: "定員なし", pay: "30両", note: "正式な位の最下位" },
];

// 唐代（『唐六典』『旧唐書』職官志による）
const TANG_RANKS = [
  { group: "{{皇后|こうごう}}", ranks: "{{皇后|こうごう}}", count: "1人", grade: "（{{品階|ひんかい}}の外）" },
  { group: "{{四夫人|しふじん}}", ranks: "{{貴妃|きひ}}・{{淑妃|しゅくひ}}・{{徳妃|とくひ}}・{{賢妃|けんぴ}}", count: "各1人", grade: "正一品" },
  { group: "{{九嬪|きゅうひん}}", ranks: "{{昭儀|しょうぎ}}・{{昭容|しょうよう}}・{{昭媛|しょうえん}}・{{修儀|しゅうぎ}}・{{修容|しゅうよう}}・{{修媛|しゅうえん}}・{{充儀|じゅうぎ}}・{{充容|じゅうよう}}・{{充媛|じゅうえん}}", count: "各1人", grade: "正二品" },
  { group: "{{二十七世婦|にじゅうしちせいふ}}", ranks: "{{婕妤|しょうよ}}／{{美人|びじん}}／{{才人|さいじん}}", count: "各9人", grade: "正三品／正四品／正五品" },
  { group: "{{八十一御妻|はちじゅういちぎょさい}}", ranks: "{{宝林|ほうりん}}／{{御女|ぎょじょ}}／{{采女|さいじょ}}", count: "各27人", grade: "正六品／正七品／正八品" },
];

const FAQ = [
  {
    q: "皇后と皇貴妃の違いは？",
    a: "{{皇后|こうごう}}は皇帝の正式な妻で、ただ一人だけが{{冊立|さくりつ}}される。{{皇貴妃|こうきひ}}はあくまで{{側室|そくしつ}}の最上位で、皇后の{{儀礼|ぎれい}}上の地位には{{及|およ}}ばない。ただし清では皇后が{{亡|な}}くなったり{{廃|はい}}されたりしたとき、{{皇貴妃|こうきひ}}が後宮の実務を任されることが多く、次の皇后候補と見なされた。{{乾隆帝|けんりゅうてい}}の{{継皇后|けいこうごう}}（ドラマ『{{如懿伝|にょいでん}}』の主人公のモデル）も、{{皇貴妃|こうきひ}}を経て皇后に立てられている。",
  },
  {
    q: "貴妃と妃はどちらが上？",
    a: "清の制度では{{貴妃|きひ}}の方が上で、{{妃|ひ}}より一段高い。日本語では{{側室|そくしつ}}をまとめて「妃」と呼ぶことも多いが、中国の後宮では「{{妃|ひ}}」は{{皇貴妃|こうきひ}}・{{貴妃|きひ}}の下、{{嬪|ひん}}の上にあたる特定の位を指す。",
  },
  {
    q: "皇帝の側室は何人いた？",
    a: "清の定員は皇后から{{嬪|ひん}}までで14人だが、{{貴人|きじん}}以下には定員がないため、実際の人数は皇帝によって大きく違う。{{乾隆帝|けんりゅうてい}}は位を持つ{{后妃|こうひ}}だけで40人あまりが記録されている。唐の制度上の定員は皇后を{{除|のぞ}}いて121人にのぼるが、これは理想を示した数字で、{{玄宗|げんそう}}の時代には「後宮三千人」と{{詠|うた}}われるほど多くの女性が宮中にいた（多くは位のない{{宮女|きゅうじょ}}）。",
  },
  {
    q: "後宮の女性はどうやって選ばれた？",
    a: "清では、{{八旗|はっき}}に属する家の13〜16歳ほどの娘が3年に一度の「{{選秀女|せんしゅうじょ}}」で{{審査|しんさ}}され、選ばれると{{妃嬪|ひひん}}の候補になった。これとは別に、皇室の{{使用人|しようにん}}の家（{{内務府|ないむふ}}{{包衣|ボーイ}}）の娘も毎年{{宮女|きゅうじょ}}として集められ、皇帝の目に留まれば位を{{与|あた}}えられた。『{{瓔珞|エイラク}}』の主人公のモデル{{令妃|れいひ}}（{{魏佳氏|ぎかし}}）はこの{{宮女|きゅうじょ}}出身で、最後は{{皇貴妃|こうきひ}}にまで上り、その子が次の皇帝{{嘉慶帝|かけいてい}}になった。",
  },
  {
    q: "ドラマの「娘娘（ニャンニャン）」「小主（シャオジュ）」とは？",
    a: "清朝を{{舞台|ぶたい}}にした中国ドラマでは、{{嬪|ひん}}以上の位の女性を「{{娘娘|ニャンニャン}}」、{{貴人|きじん}}以下を「{{小主|シャオジュ}}」と呼び分けることが多い。どちらも{{敬称|けいしょう}}で、ドラマでは呼び方の違いで位の高さがすぐわかるように使われている。実際の宮中では「{{主子|ジュズ}}」などの呼び方も使われており、ドラマの呼び分けは{{演出|えんしゅつ}}上の{{約束事|やくそくごと}}という面が強い。",
  },
];

const thStyle = { padding: "8px 10px", textAlign: "left", fontWeight: 700, color: COLORS.ink, borderBottom: "1px solid #DCD3B8", whiteSpace: "nowrap" };
const tdStyle = { padding: "8px 10px", verticalAlign: "top", borderBottom: "1px solid #E8E0C8", color: COLORS.inkSoft };
const h2Style = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginTop: 36, marginBottom: 10 };
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
    <div style={{ marginTop: 10, padding: "8px 10px", backgroundColor: "#F3ECD9", fontSize: 12, lineHeight: 1.8, color: COLORS.inkSoft }}>{children}</div>
  );
}

export default function HaremRanksPage() {
  const yangHref = personHref("楊貴妃");
  const wuHref = personHref("武則天");
  const lvHref = personHref("呂后");
  const yanxiHref = dramaHref("yanxi-palace");
  const ruyiHref = dramaHref("ruyis-royal-love-in-the-palace");

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          後宮の位（妃の階級）一覧
        </h1>
        <Para
          text={
            "{{後宮|こうきゅう}}とは、皇帝の妻や{{側室|そくしつ}}たちが暮らした宮殿の奥の空間のこと。そこに住む女性には細かな位が定められ、位によって住む宮殿、{{仕|つか}}える{{侍女|じじょ}}の数、年俸、着る服の色までが決められていた。" +
            "位の名前と数は王朝ごとに変わったが、もっとも整い、中国ドラマでもおなじみなのが清の制度で、{{皇后|こうごう}}を頂点に8段階に分かれていた。"
          }
        />

        <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "12px 14px", marginBottom: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: COLORS.gold, marginBottom: 6 }}>結論：清の後宮の位（上から順に）</div>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, lineHeight: 1.9 }}>
            <RubyText text="{{皇后|こうごう}} ＞ {{皇貴妃|こうきひ}} ＞ {{貴妃|きひ}} ＞ {{妃|ひ}} ＞ {{嬪|ひん}} ＞ {{貴人|きじん}} ＞ {{常在|じょうざい}} ＞ {{答応|とうおう}}" />
          </div>
        </div>
        <nav className="flex gap-x-4 gap-y-1 flex-wrap" style={{ fontSize: 12, marginBottom: 8 }}>
          <a href="#qing" style={linkStyle}>清の8段階</a>
          <a href="#tang" style={linkStyle}>唐の四夫人・九嬪</a>
          <a href="#han" style={linkStyle}>漢の昭儀・婕妤</a>
          <a href="#japan" style={linkStyle}>日本の女御・更衣との比較</a>
          <a href="#faq" style={linkStyle}>よくある疑問</a>
        </nav>

        <h2 id="qing" style={{ ...h2Style, scrollMarginTop: 16 }}>清の後宮の位と定員・年俸</h2>
        <Para text="乾隆年間にまとめられた『{{国朝宮史|こくちょうきゅうし}}』では、後宮の位と定員、毎年支給される銀（{{年例銀|ねんれいぎん}}）が次のように定められている。" />
        <div className="overflow-x-auto" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
            <thead>
              <tr style={{ backgroundColor: "#F3ECD9" }}>
                <th style={thStyle}>位</th>
                <th style={thStyle}>定員</th>
                <th style={thStyle}>年俸</th>
                <th style={thStyle}>ポイント</th>
              </tr>
            </thead>
            <tbody>
              {QING_RANKS.map((r, i) => (
                <tr key={i}>
                  <td style={{ ...tdStyle, fontFamily: "var(--font-serif), serif", fontWeight: 700, color: COLORS.ink, whiteSpace: "nowrap" }}>
                    <span style={{ color: COLORS.gold, fontSize: 11, marginRight: 6 }}>{i + 1}</span>
                    <RubyText text={r.rank} />
                  </td>
                  <td style={{ ...tdStyle, whiteSpace: "nowrap" }}>{r.quota}</td>
                  <td style={{ ...tdStyle, whiteSpace: "nowrap" }}>{r.pay}</td>
                  <td style={{ ...tdStyle, fontSize: 12 }}>
                    <RubyText text={r.note} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>
          <RubyText text="{{答応|とうおう}}の下に「{{官女子|かんじょし}}」が出てくるドラマもあるが、これは皇帝の{{寵愛|ちょうあい}}を受けた{{宮女|きゅうじょ}}を指す呼び名で、正式な位ではない。また{{皇太后|こうたいごう}}（先代皇帝の皇后や、皇帝の生母）は皇帝の妻ではないため、この序列の外にいる。" />
        </Note>
        <div style={{ marginTop: 14 }}>
          <Para
            text={
              "{{嬪|ひん}}以上の女性は、{{紫禁城|しきんじょう}}の「{{東西六宮|とうざいりっきゅう}}」と呼ばれる12の宮殿のどれかの主（{{主位|しゅい}}）となり、{{貴人|きじん}}以下の女性はその宮殿の{{脇|わき}}の建物に住んで主に{{従|したが}}った。" +
              "位は「{{冊封|さくほう}}」によって{{与|あた}}えられ、{{令妃|れいひ}}の「{{令|れい}}」、{{純貴妃|じゅんきひ}}の「{{純|じゅん}}」のような一文字の{{封号|ほうごう}}を{{添|そ}}えて呼ばれた。子を産んだり皇帝の{{寵愛|ちょうあい}}を受けたりすると位が上がり、{{罰|ばつ}}として下げられることもあった。"
            }
          />
          <Para text="皇后の住まいは本来{{坤寧宮|こんねいきゅう}}だが、清では{{坤寧宮|こんねいきゅう}}が{{祭祀|さいし}}と皇帝の{{婚礼|こんれい}}の場に使われたため、皇后も{{東西六宮|とうざいりっきゅう}}の一つで暮らした。" />
        </div>
        {(yanxiHref || ruyiHref) && (
          <p style={{ fontSize: 12.5, lineHeight: 1.9, color: COLORS.inkSoft }}>
            <RubyText text="{{乾隆帝|けんりゅうてい}}の後宮を{{舞台|ぶたい}}にしたドラマの史実との違いは、" />
            {yanxiHref && (
              <a href={yanxiHref} style={linkStyle}>
                <RubyText text="『{{瓔珞|エイラク}}』" />
              </a>
            )}
            {yanxiHref && ruyiHref && "・"}
            {ruyiHref && (
              <a href={ruyiHref} style={linkStyle}>
                <RubyText text="『{{如懿伝|にょいでん}}』" />
              </a>
            )}
            のページで解説しています。
          </p>
        )}

        <h2 id="tang" style={{ ...h2Style, scrollMarginTop: 16 }}>唐の後宮の位（四夫人・九嬪・二十七世婦・八十一御妻）</h2>
        <Para text="唐の後宮は、古代の{{儒教|じゅきょう}}の{{経典|けいてん}}『{{礼記|らいき}}』に見える「一后・三夫人・九嬪・二十七世婦・八十一御妻」の考え方をもとに、{{役人|やくにん}}と同じ「{{品|ひん}}」で位が表された。" />
        <div className="overflow-x-auto" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
            <thead>
              <tr style={{ backgroundColor: "#F3ECD9" }}>
                <th style={thStyle}>区分</th>
                <th style={thStyle}>位</th>
                <th style={thStyle}>定員</th>
                <th style={thStyle}>品階</th>
              </tr>
            </thead>
            <tbody>
              {TANG_RANKS.map((r, i) => (
                <tr key={i}>
                  <td style={{ ...tdStyle, fontFamily: "var(--font-serif), serif", fontWeight: 700, color: COLORS.ink, whiteSpace: "nowrap" }}>
                    <RubyText text={r.group} />
                  </td>
                  <td style={{ ...tdStyle, fontSize: 12 }}>
                    <RubyText text={r.ranks} />
                  </td>
                  <td style={{ ...tdStyle, whiteSpace: "nowrap" }}>{r.count}</td>
                  <td style={{ ...tdStyle, fontSize: 12 }}>
                    <RubyText text={r.grade} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 14 }}>
          <p style={pStyle}>
            <RubyText text="{{楊貴妃|ようきひ}}の「{{貴妃|きひ}}」は名前ではなく位の名で、四夫人の筆頭にあたる。{{玄宗|げんそう}}は一時期四夫人の名前を改めていたが、745年に{{楊玉環|ようぎょくかん}}を{{貴妃|きひ}}に立てた。皇后は置かれていなかったため、{{楊貴妃|ようきひ}}は事実上の後宮の頂点だった。" />
            {yangHref && (
              <>
                {" "}
                <a href={yangHref} style={linkStyle}>
                  <RubyText text="{{楊貴妃|ようきひ}}の人物ページ →" />
                </a>
              </>
            )}
          </p>
          <p style={pStyle}>
            <RubyText text="{{武則天|ぶそくてん}}は14歳で{{太宗|たいそう}}の後宮に入ったときは{{才人|さいじん}}（正五品）にすぎなかった。{{太宗|たいそう}}の死後、次の{{高宗|こうそう}}の{{昭儀|しょうぎ}}（九嬪の筆頭）として後宮に{{戻|もど}}り、655年に皇后となって、のちには中国史上ただ一人の女帝にまで上りつめた。" />
            {wuHref && (
              <>
                {" "}
                <a href={wuHref} style={linkStyle}>
                  <RubyText text="{{武則天|ぶそくてん}}の人物ページ →" />
                </a>
              </>
            )}
          </p>
        </div>
        <Note>
          <RubyText text="漫画・アニメ『{{薬屋|くすりや}}のひとりごと』の「{{貴妃|きひ}}・{{賢妃|けんぴ}}・{{徳妃|とくひ}}・{{淑妃|しゅくひ}}」の上級{{妃|ひ}}四人は、この唐の四夫人がモデルと考えられる。作品の後宮は架空の国のものだが、位の名前は実在の制度から取られている。" />
        </Note>

        <h2 id="han" style={{ ...h2Style, scrollMarginTop: 16 }}>漢の後宮の位（昭儀・婕妤など）</h2>
        <Para
          text={
            "前漢のはじめ、皇后の下には{{夫人|ふじん}}・{{美人|びじん}}・{{良人|りょうじん}}・{{八子|はっし}}・{{七子|しちし}}・{{長使|ちょうし}}・{{少使|しょうし}}の位があった。{{武帝|ぶてい}}が{{婕妤|しょうよ}}などの位を加え、{{元帝|げんてい}}が最上位に{{昭儀|しょうぎ}}を置いて、最終的に十四等にまで細かく分かれた。{{昭儀|しょうぎ}}の待遇は{{丞相|じょうしょう}}（宰相）に、{{婕妤|しょうよ}}は大臣（{{上卿|じょうけい}}）に{{並|なら}}ぶとされた。" +
            "後漢を開いた{{光武帝|こうぶてい}}はこれを{{簡素|かんそ}}にし、皇后の下は{{貴人|きじん}}・{{美人|びじん}}・{{宮人|きゅうじん}}・{{采女|さいじょ}}の4つだけになった。清の「{{貴人|きじん}}」はこの後漢の位の名前を受け{{継|つ}}いだものである。"
          }
        />
        <p style={pStyle}>
          <RubyText text="{{前漢|ぜんかん}}の{{王昭君|おうしょうくん}}は、{{元帝|げんてい}}の後宮に入りながら位を得られず、{{匈奴|きょうど}}に{{嫁|とつ}}ぐことになった女性として知られる（" />
          <a href="/four-beauties#wangzhaojun" style={linkStyle}>中国四大美女</a>
          <RubyText text="）。また{{劉邦|りゅうほう}}の皇后{{呂后|りょこう}}は、夫の死後に{{側室|そくしつ}}の{{戚夫人|せきふじん}}を{{残酷|ざんこく}}な方法で殺したことで、後宮の{{争|あらそ}}いの{{恐|おそ}}ろしさを伝える人物となった。" />
          {lvHref && (
            <>
              {" "}
              <a href={lvHref} style={linkStyle}>
                <RubyText text="{{呂后|りょこう}}の人物ページ →" />
              </a>
            </>
          )}
        </p>

        <h2 id="japan" style={{ ...h2Style, scrollMarginTop: 16 }}>日本の後宮（中宮・女御・更衣）との比較</h2>
        <Para
          text={
            "日本の平安時代の宮中にも、{{皇后|こうごう}}（{{中宮|ちゅうぐう}}）・{{女御|にょうご}}・{{更衣|こうい}}といった{{后妃|こうひ}}の位があった。『{{源氏物語|げんじものがたり}}』は「いづれの{{御時|おほんとき}}にか、{{女御|にょうご}}、{{更衣|かうい}}あまたさぶらひたまひける」と始まり、主人公の母{{桐壺更衣|きりつぼのこうい}}は、位の低い{{更衣|こうい}}でありながら{{帝|みかど}}の{{寵愛|ちょうあい}}を受けたために{{妬|ねた}}まれた。" +
            "「{{中宮|ちゅうぐう}}」はもともと皇后の住む宮殿を指す中国の言葉で、日本では皇后の別名として使われるようになった。日本の{{後宮|こうきゅう}}は唐の制度にならって作られたが、位の数ははるかに少なく、清のような細かな定員や年俸の表は持たなかった。"
          }
        />

        <h2 id="faq" style={{ ...h2Style, scrollMarginTop: 16 }}>後宮の位についてよくある疑問</h2>
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
            <RubyText text="後宮の女性たちが仕えた歴代の皇帝や、後宮を{{舞台|ぶたい}}にしたドラマの史実も別ページで紹介しています。" />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/dramas" variant="solid">中国歴史ドラマの史実を見る</NavButton>
            <NavButton href="/emperors" variant="outline">歴代皇帝一覧</NavButton>
            <NavButton href="/four-beauties" variant="outline">中国四大美女とは</NavButton>
            <NavButton href="/women-rulers" variant="outline">女帝と権力を握った女性</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/harem-ranks" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
