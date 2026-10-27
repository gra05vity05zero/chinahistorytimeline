import { ERAS, stripRuby, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageThumb, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const title = "中国四大美女とは？西施・王昭君・貂蝉・楊貴妃を解説";
const fullTitle = `中国四大美女とは？西施・王昭君・貂蝉・楊貴妃を解説 | ${SITE_NAME}`;
const description =
  "西施・王昭君・貂蝉・楊貴妃の「中国四大美女」とは誰かを、生きた時代や有名な逸話、「沈魚落雁・閉月羞花」の由来とあわせて解説。実在の人物か物語の登場人物か、年表に登場する関連の出来事もリンクで紹介します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/four-beauties" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/four-beauties" }),
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

// 年表データに経歴（bio）付きで載っている人物なら人物ページへのリンクを返す
function personHref(eraId, name) {
  const era = ERAS.find((e) => e.id === eraId);
  const found = era?.events.some((ev) =>
    (ev.heritage || []).some((it) => it.type === "figure" && it.bio && personSlug(it.name) === name)
  );
  return found ? `/people/${eraId}/${encodeURIComponent(name)}` : null;
}

const BEAUTIES = [
  {
    id: "xishi",
    name: "{{西施|せいし}}",
    epithet: "{{沈魚|ちんぎょ}}",
    period: "春秋時代末期（前5世紀）・{{越|えつ}}",
    key: "{{呉王|ごおう}}{{夫差|ふさ}}を{{骨抜|ほねぬ}}きにした{{越|えつ}}の美女",
    body:
      "{{越|えつ}}の{{苧蘿村|ちょらそん}}で生まれ、川で{{紗|しゃ}}（薄い絹布）を洗っていたところを見出されたと伝わる。{{会稽|かいけい}}で{{呉|ご}}に大敗した{{越王|えつおう}}{{勾践|こうせん}}は、{{重臣|じゅうしん}}{{范蠡|はんれい}}の策により{{西施|せいし}}を{{呉王|ごおう}}{{夫差|ふさ}}に{{献上|けんじょう}}した。{{夫差|ふさ}}は{{西施|せいし}}に{{溺|おぼ}}れて政治を{{怠|おこた}}るようになり、やがて{{呉|ご}}は前473年に{{越|えつ}}に{{滅|ほろ}}ぼされた。その後の{{消息|しょうそく}}は、{{范蠡|はんれい}}とともに{{五湖|ごこ}}へ去ったとも、長江に{{沈|しず}}められたともいわれる。" +
      "{{胸|むね}}を病んで{{眉|まゆ}}をひそめる姿まで美しく、それを{{真似|まね}}た村の女がかえって人に{{避|さ}}けられたという『{{荘子|そうじ}}』の話は、{{故事成語|こじせいご}}「{{顰|ひそみ}}に{{倣|なら}}う」の由来となった。日本でも{{松尾芭蕉|まつおばしょう}}が『{{奥|おく}}の{{細道|ほそみち}}』で「{{象潟|きさかた}}や雨に{{西施|せいし}}がねぶの花」と{{詠|よ}}んでいる。",
    epithetNote: "川面に映る姿に見とれた魚が泳ぐのを忘れて{{沈|しず}}んだ",
    fact: "『史記』など正史には名が見えず、後漢の『{{呉越春秋|ごえつしゅんじゅう}}』『{{越絶書|えつぜつしょ}}』などで物語が整えられた{{伝説的|でんせつてき}}な人物。",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%A4%E4%BB%8A%E7%99%BE%E7%BE%8E%E5%9C%96%E4%B9%8B%E9%84%AD%E6%97%A6%E8%A5%BF%E6%96%BD%EF%BC%88One_hundred_beauties_Zheng_Dan_and_Xi_Shi%EF%BC%89.png",
    imageCaption: "清代の画集『{{古今百美図|ここんひゃくびず}}』に{{描|えが}}かれた{{西施|せいし}}と、ともに{{呉|ご}}へ送られた{{鄭旦|ていたん}}",
    credit: "Wikimedia Commons（パブリックドメイン）",
    eraId: "chunqiu",
    eventTitle: "臥薪嘗胆",
  },
  {
    id: "wangzhaojun",
    name: "{{王昭君|おうしょうくん}}",
    epithet: "{{落雁|らくがん}}",
    period: "前漢（前1世紀）",
    key: "{{匈奴|きょうど}}に{{嫁|とつ}}ぎ、漢との和平を支えた{{後宮|こうきゅう}}の女性",
    body:
      "名は{{嬙|しょう}}、{{昭君|しょうくん}}は{{字|あざな}}。前漢の{{元帝|げんてい}}の{{後宮|こうきゅう}}に入ったが、{{皇帝|こうてい}}の目に留まらないまま数年を過ごした。前33年、北方の{{遊牧国家|ゆうぼくこっか}}{{匈奴|きょうど}}の{{呼韓邪単于|こかんやぜんう}}が漢の{{婿|むこ}}となることを望むと、{{王昭君|おうしょうくん}}が{{嫁|とつ}}ぐことになった。後世の『{{西京雑記|せいけいざっき}}』は、{{後宮|こうきゅう}}の女性たちは画工の{{描|えが}}いた{{肖像画|しょうぞうが}}で選ばれており、{{賄賂|わいろ}}を{{贈|おく}}らなかった{{王昭君|おうしょうくん}}だけが{{醜|みにく}}く{{描|えが}}かれていたため、別れの日に初めてその姿を見た{{元帝|げんてい}}が{{激|はげ}}しく後悔したという逸話を伝える。" +
      "{{匈奴|きょうど}}では{{寧胡閼氏|ねいこえんし}}と呼ばれ、{{単于|ぜんう}}の死後は{{匈奴|きょうど}}の{{慣習|かんしゅう}}に従って次の{{単于|ぜんう}}の妻となり、異郷で生涯を終えた。その{{婚姻|こんいん}}は漢と{{匈奴|きょうど}}の間に長い平和をもたらしたとされ、内モンゴルのフフホト{{郊外|こうがい}}には{{王昭君|おうしょうくん}}の墓と伝わる「{{青冢|せいちょう}}」が残る。",
    epithetNote: "{{旅|たび}}の{{途中|とちゅう}}で{{琵琶|びわ}}を{{奏|かな}}でると、空を行く{{雁|がん}}が羽ばたくのを忘れて落ちた",
    fact: "『{{漢書|かんじょ}}』{{匈奴伝|きょうどでん}}や『{{後漢書|ごかんじょ}}』{{南匈奴伝|みなみきょうどでん}}に記録がある実在の人物。",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%A4%E4%BB%8A%E7%99%BE%E7%BE%8E%E5%9C%96%E4%B9%8B%E7%8E%8B%E6%98%AD%E5%90%9B%EF%BC%88One_hundred_beauties_Wang_Zhaojun%EF%BC%89.png",
    imageCaption: "清代の画集『{{古今百美図|ここんひゃくびず}}』に{{描|えが}}かれた{{王昭君|おうしょうくん}}",
    credit: "Wikimedia Commons（パブリックドメイン）",
    eraId: "westernhan",
    eventTitle: null,
  },
  {
    id: "diaochan",
    name: "{{貂蝉|ちょうせん}}",
    epithet: "{{閉月|へいげつ}}",
    period: "後漢末（2世紀末）",
    key: "「{{連環|れんかん}}の計」で{{董卓|とうたく}}と{{呂布|りょふ}}を仲たがいさせた",
    body:
      "『{{三国志演義|さんごくしえんぎ}}』では、後漢の{{司徒|しと}}{{王允|おういん}}に養われた{{歌妓|かぎ}}として登場する。都で{{暴政|ぼうせい}}を{{振|ふ}}るう{{董卓|とうたく}}を{{除|のぞ}}くため、{{王允|おういん}}は{{貂蝉|ちょうせん}}を{{董卓|とうたく}}の{{養子|ようし}}で{{猛将|もうしょう}}の{{呂布|りょふ}}に{{嫁|とつ}}がせると約束しながら、{{董卓|とうたく}}にも{{差|さ}}し出した。{{貂蝉|ちょうせん}}は二人の間で{{巧|たく}}みに{{振|ふ}}る{{舞|ま}}って{{嫉妬|しっと}}をあおり、ついに192年、{{呂布|りょふ}}は{{董卓|とうたく}}を{{殺害|さつがい}}する。この{{計略|けいりゃく}}は「{{連環|れんかん}}の計」と呼ばれ、{{京劇|きょうげき}}などでも人気の場面となった。" +
      "{{正史|せいし}}『三国志』の{{呂布伝|りょふでん}}には、{{呂布|りょふ}}が{{董卓|とうたく}}の{{侍女|じじょ}}と{{密通|みっつう}}し、発覚を{{恐|おそ}}れていたという短い記述があるだけで、名前は記されていない。この{{侍女|じじょ}}が{{貂蝉|ちょうせん}}の物語のもとになったと考えられている。",
    epithetNote: "{{庭|にわ}}で月を{{眺|なが}}めていると、その美しさに月が{{恥|は}}じらって雲に{{隠|かく}}れた",
    fact: "四人のうち唯一、実在が確かめられない人物。主に元代の{{雑劇|ざつげき}}や明代の『{{三国志演義|さんごくしえんぎ}}』で形づくられた。",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%A4%E4%BB%8A%E7%99%BE%E7%BE%8E%E5%9C%96%E4%B9%8B%E8%B2%82%E8%9F%AC%EF%BC%88One_hundred_beauties_Diaochan%EF%BC%89.png",
    imageCaption: "清代の画集『{{古今百美図|ここんひゃくびず}}』に{{描|えが}}かれた{{貂蝉|ちょうせん}}",
    credit: "Wikimedia Commons（パブリックドメイン）",
    eraId: "easternhan",
    eventTitle: null,
  },
  {
    id: "yangguifei",
    name: "{{楊貴妃|ようきひ}}",
    personName: "楊貴妃",
    epithet: "{{羞花|しゅうか}}",
    period: "{{唐|とう}}（8世紀）",
    key: "{{玄宗|げんそう}}の{{寵愛|ちょうあい}}を一身に受け、安史の乱の中で{{散|ち}}った",
    body:
      "名は{{玉環|ぎょくかん}}。はじめは{{玄宗|げんそう}}の息子{{寿王|じゅおう}}の妃だったが、{{玄宗|げんそう}}に見初められていったん{{女道士|じょどうし}}となり、745年に{{貴妃|きひ}}に立てられた。{{歌舞|かぶ}}や音楽に通じ、{{玄宗|げんそう}}の{{寵愛|ちょうあい}}を一身に集めて、{{一族|いちぞく}}の{{楊国忠|ようこくちゅう}}は{{宰相|さいしょう}}にまで出世した。好物の{{茘枝|れいし}}（ライチ）を、はるか南方から早馬で運ばせたという話も知られる。" +
      "しかし政治の{{乱|みだ}}れは755年の安史の乱を招き、{{都落|みやこお}}ちの途中、{{馬嵬|ばかい}}で兵士たちが{{楊国忠|ようこくちゅう}}を殺して{{楊貴妃|ようきひ}}の処刑を求めたため、{{玄宗|げんそう}}はやむなく死を命じた。二人の愛と別れは{{白居易|はくきょい}}の長編詩『{{長恨歌|ちょうごんか}}』に{{詠|うた}}われ、日本でも『源氏物語』などに大きな影響を与えた。{{山口県|やまぐちけん}}{{長門市|ながとし}}には、{{楊貴妃|ようきひ}}が生き延びて日本に流れ着いたという伝説と、その墓と伝わる{{五輪塔|ごりんとう}}が残っている。",
    epithetNote: "{{庭|にわ}}で花に{{触|ふ}}れると、その美しさに花が{{恥|は}}じらって花びらを閉じた",
    fact: "『{{旧唐書|くとうじょ}}』『{{新唐書|しんとうじょ}}』に{{伝|でん}}が立てられた実在の人物。日本では「世界三大美女」の一人にも数えられる。",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%A4%E4%BB%8A%E7%99%BE%E7%BE%8E%E5%9C%96%E4%B9%8B%E6%A5%8A%E7%8E%89%E7%92%B0%EF%BC%88One_hundred_beauties_Yang_Yuhuan%EF%BC%89.png",
    imageCaption: "清代の画集『{{古今百美図|ここんひゃくびず}}』に{{描|えが}}かれた{{楊貴妃|ようきひ}}（{{楊玉環|ようぎょくかん}}）",
    credit: "Wikimedia Commons（パブリックドメイン）",
    eraId: "tang",
    eventTitle: "安史の乱",
  },
];

const RESOLVED = BEAUTIES.map((b) => ({
  ...b,
  eventSlug: b.eventTitle ? findEventSlug(b.eraId, b.eventTitle) : null,
  eraLink: eraHref(b.eraId),
  personLink: b.personName ? personHref(b.eraId, b.personName) : null,
}));

const linkStyle = { fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

export default function FourBeautiesPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国四大美女とは？
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 20 }}>
          <RubyText
            text={
              "{{西施|せいし}}・{{王昭君|おうしょうくん}}・{{貂蝉|ちょうせん}}・{{楊貴妃|ようきひ}}の四人は、中国の歴史と物語に登場する女性の中でも特に美しかったとして" +
              "「中国四大美女」と呼ばれる。四人の美しさは「{{沈魚落雁|ちんぎょらくがん}}、{{閉月羞花|へいげつしゅうか}}」という言葉で表され、" +
              "魚が{{沈|しず}}み、{{雁|がん}}が落ち、月が{{隠|かく}}れ、花が{{恥|は}}じらうほどだったという。" +
              "いずれも美しさだけでなく、国の興亡や外交、{{権力争|けんりょくあらそ}}いに深く関わった人物として語り{{継|つ}}がれてきた。"
            }
          />
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" style={{ marginBottom: 28 }}>
          {RESOLVED.map((b) => (
            <a
              key={b.id}
              href={`#${b.id}`}
              className="text-center hover:opacity-90"
              style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "10px 6px" }}
            >
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 18, fontWeight: 900, color: COLORS.vermilion }}>
                <RubyText text={b.epithet} />
              </div>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink, marginTop: 2 }}>
                <RubyText text={b.name} />
              </div>
              <div style={{ fontSize: 10.5, color: COLORS.gold, marginTop: 2 }}>
                <RubyText text={b.period} />
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          {RESOLVED.map((b, i) => (
            <div key={b.id} id={b.id} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", scrollMarginTop: 16 }}>
              <div className="relative flex items-center justify-center" style={{ width: "100%", height: 240, backgroundColor: "#EFE7D0", overflow: "hidden" }}>
                <HeritageThumb imageUrl={b.imageUrl} name={b.name} type="figure" />
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
                {b.imageCaption && (
                  <div style={{ fontSize: 10.5, color: COLORS.mist, marginBottom: 8 }}>
                    <RubyText text={b.imageCaption} />
                    {b.credit && <span> ／ <RubyText text={b.credit} /></span>}
                  </div>
                )}
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={b.name} />
                  </h2>
                  <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}><RubyText text={b.period} /></span>
                </div>
                <p style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>
                  <RubyText text={b.key} />
                </p>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={b.body} />
                </p>
                <div style={{ marginTop: 10, padding: "8px 10px", backgroundColor: "#F3ECD9", fontSize: 12, lineHeight: 1.8, color: COLORS.inkSoft }}>
                  <div>
                    <span style={{ fontWeight: 700, color: COLORS.ink }}>「<RubyText text={b.epithet} />」の由来：</span>
                    <RubyText text={b.epithetNote} />
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <span style={{ fontWeight: 700, color: COLORS.ink }}>史実では：</span>
                    <RubyText text={b.fact} />
                  </div>
                </div>
                <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ marginTop: 10 }}>
                  {b.eventSlug ? (
                    <a href={`/events/${b.eventSlug}`} style={linkStyle}>
                      関連する出来事を年表で読む →
                    </a>
                  ) : b.eraLink ? (
                    <a href={b.eraLink} style={linkStyle}>
                      関連する時代を年表で読む →
                    </a>
                  ) : null}
                  {b.personLink && (
                    <a href={b.personLink} style={linkStyle}>
                      人物ページを見る →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            <RubyText text="{{貂蝉|ちょうせん}}が活躍する『{{三国志演義|さんごくしえんぎ}}』を含む「四大名著」や、中国が生んだ「四大発明」も別ページで紹介しています。" />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/four-great-novels" variant="solid">中国の四大名著を見る</NavButton>
            <NavButton href="/four-inventions" variant="outline">中国の四大発明とは</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/four-beauties" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
