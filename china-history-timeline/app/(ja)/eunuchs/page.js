import { ERAS, stripRuby, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const title = "宦官とは？中国史で権力を握った有名な宦官となぜ力を持ったかを解説";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "宦官とは、去勢されて皇帝や後宮に仕えた男性のこと。秦の趙高、後漢の十常侍、唐の高力士、明の鄭和・魏忠賢、清の李蓮英まで、王朝を動かした有名な宦官を時代順に紹介し、なぜ宦官が権力を握れたのか、日本に宦官がいなかった理由もまとめます。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/eunuchs" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/eunuchs" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

function findEventSlug(eraId, eventTitle) {
  const era = ERAS.find((e) => e.id === eraId);
  const event = era?.events.find((ev) => stripRuby(ev.title).includes(eventTitle));
  return event?.slug || null;
}

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

// 時代順の有名な宦官。eventTitle は年表の出来事へのリンク、personName は人物ページへのリンクに使う
const EUNUCHS = [
  {
    id: "zhaogao",
    name: "{{趙高|ちょうこう}}",
    period: "{{秦|しん}}（前3世紀）",
    key: "{{始皇帝|しこうてい}}の死を隠し、{{秦|しん}}を内側から{{崩|くず}}した",
    body:
      "{{始皇帝|しこうてい}}に仕えた{{側近|そっきん}}で、前210年に{{始皇帝|しこうてい}}が旅の途中で死ぬと、{{丞相|じょうしょう}}{{李斯|りし}}と組んでその死を隠し、遺言を書きかえて末子の{{胡亥|こがい}}を{{二世皇帝|にせいこうてい}}に立てた（{{沙丘|さきゅう}}の{{謀|はかりごと}}）。正統な{{後継者|こうけいしゃ}}の{{扶蘇|ふそ}}は自害に追いこまれ、のちに{{李斯|りし}}も殺された。" +
      "{{鹿|しか}}を「馬」だと言って{{献上|けんじょう}}し、「{{鹿|しか}}だ」と正直に答えた家臣を{{陥|おとしい}}れた「{{指鹿為馬|しろくいば}}」の話は、日本語の「馬鹿」の語源の一つともいわれる。最後は自分が立てた{{子嬰|しえい}}に殺された。",
    fact: "『史記』の記述から{{宦官|かんがん}}とされてきたが、{{近年|きんねん}}は{{宦官|かんがん}}ではなかったとする説もある。",
    eraId: "qin",
    eventTitle: "秦の滅亡",
  },
  {
    id: "cailun",
    name: "{{蔡倫|さいりん}}",
    period: "後漢（2世紀初め）",
    key: "紙の作り方を改良した{{宦官|かんがん}}",
    body:
      "後漢の{{和帝|わてい}}に仕えた{{宦官|かんがん}}で、宮中の道具を作る{{尚方|しょうほう}}の長官を務めた。105年、木の皮や{{麻|あさ}}くず、古い{{漁網|ぎょもう}}から{{丈夫|じょうぶ}}な紙を作る方法を皇帝に{{献上|けんじょう}}し、その紙は「{{蔡侯紙|さいこうし}}」と呼ばれた。" +
      "紙そのものはそれ以前からあったが、安く大量に作れるようにした功績から、中国の四大発明の一つ「製紙法」の立役者とされる。{{宦官|かんがん}}が権力争いだけでなく、技術や文化の{{担|にな}}い手でもあったことを示す人物である。",
    fact: "『{{後漢書|ごかんじょ}}』{{宦者伝|かんじゃでん}}に伝が立てられた実在の人物。",
    eraId: "easternhan",
    eventTitle: "製紙法の改良",
  },
  {
    id: "shichangshi",
    name: "{{十常侍|じゅうじょうじ}}",
    period: "後漢末（2世紀後半）",
    key: "皇帝を{{操|あやつ}}り、三国志の{{乱世|らんせ}}の{{引|ひ}}き{{金|がね}}になった",
    body:
      "後漢の後半は、皇后の一族（{{外戚|がいせき}}）と{{宦官|かんがん}}が{{交互|こうご}}に権力を握る争いが続いた。159年、{{桓帝|かんてい}}は{{宦官|かんがん}}の力を借りて{{外戚|がいせき}}{{梁冀|りょうき}}を{{倒|たお}}し、以後{{宦官|かんがん}}が政治を左右するようになる。{{宦官|かんがん}}を批判した{{官僚|かんりょう}}や学者たちは「党人」として{{弾圧|だんあつ}}された（党錮の禁）。" +
      "次の{{霊帝|れいてい}}は{{張譲|ちょうじょう}}・{{趙忠|ちょうちゅう}}ら「{{十常侍|じゅうじょうじ}}」と呼ばれる{{宦官|かんがん}}を「わが父、わが母」と呼ぶほど信頼した。189年、{{宦官|かんがん}}を{{除|のぞ}}こうとした{{外戚|がいせき}}{{何進|かしん}}が逆に殺されると、{{袁紹|えんしょう}}らが宮中に{{攻|せ}}め{{込|こ}}んで2000人以上の{{宦官|かんがん}}を殺した。この混乱に乗じて{{董卓|とうたく}}が都に入り、時代は三国志の{{乱世|らんせ}}へと進んでいく。",
    fact: "{{曹操|そうそう}}の祖父{{曹騰|そうとう}}も{{宦官|かんがん}}で、{{曹操|そうそう}}の父{{曹嵩|そうすう}}はその{{養子|ようし}}だった。",
    eraId: "easternhan",
    eventTitle: "党錮の禁",
    personName: "曹操",
    personLabel: "{{曹操|そうそう}}",
  },
  {
    id: "gaolishi",
    name: "{{高力士|こうりきし}}",
    period: "{{唐|とう}}（8世紀）",
    key: "{{玄宗|げんそう}}にもっとも信頼された{{側近|そっきん}}",
    body:
      "{{玄宗|げんそう}}が即位する前から仕え、皇帝に届く書類はまず{{高力士|こうりきし}}が目を通すほどの信頼を得た。皇太子までが「兄」と呼んだという。{{楊貴妃|ようきひ}}を{{玄宗|げんそう}}に{{引|ひ}}き合わせた一人ともされ、酔った{{李白|りはく}}が{{高力士|こうりきし}}に{{靴|くつ}}を{{脱|ぬ}}がせたという有名な逸話もある。" +
      "安史の乱で{{玄宗|げんそう}}が都を{{逃|のが}}れたときも付き従い、{{馬嵬|ばかい}}で{{楊貴妃|ようきひ}}に死を{{賜|たま}}る役目を負った。{{玄宗|げんそう}}の死を知ると{{嘆|なげ}}き悲しみ、まもなく自らも世を去った。{{忠臣|ちゅうしん}}型の{{宦官|かんがん}}の代表として語られる。",
    fact: "唐の後半になると{{宦官|かんがん}}は{{禁軍|きんぐん}}（{{神策軍|しんさくぐん}}）を指揮し、皇帝を立てたり殺したりするほどの力を持った。835年には{{宦官|かんがん}}を{{一掃|いっそう}}しようとした{{文宗|ぶんそう}}の計画が失敗し（{{甘露|かんろ}}の変）、逆に多くの{{官僚|かんりょう}}が殺された。",
    eraId: "tang",
    eventTitle: "安史の乱",
    personName: "楊貴妃",
    personLabel: "{{楊貴妃|ようきひ}}",
  },
  {
    id: "zhenghe",
    name: "{{鄭和|ていわ}}",
    period: "{{明|みん}}（15世紀初め）",
    key: "大船団を率いてアフリカまで航海した",
    body:
      "雲南のイスラム教徒の家に生まれ、少年時代に明軍の{{捕虜|ほりょ}}となって{{宦官|かんがん}}にされた。{{燕王|えんおう}}（のちの{{永楽帝|えいらくてい}}）に仕えて{{靖難|せいなん}}の変で手柄を立て、{{鄭|てい}}の{{姓|せい}}を{{賜|たま}}わった。" +
      "1405年から7回にわたり、数十隻・2万人を{{超|こ}}える大船団を率いて東南アジア、インド、アラビア半島、アフリカ東岸まで航海し、各地の国に明への{{朝貢|ちょうこう}}を{{促|うなが}}した。コロンブスより80年以上早い、当時世界最大の航海だった。",
    fact: "{{永楽帝|えいらくてい}}は{{宦官|かんがん}}を重く用い、{{官僚|かんりょう}}を見張る秘密警察「{{東廠|とうしょう}}」も{{宦官|かんがん}}に任せた。これが明の{{宦官|かんがん}}政治の始まりになった。",
    eraId: "ming",
    eventTitle: "鄭和",
    personName: "鄭和",
    personLabel: "{{鄭和|ていわ}}",
  },
  {
    id: "wangzhen",
    name: "{{王振|おうしん}}",
    period: "{{明|みん}}（15世紀半ば）",
    key: "皇帝を戦場に連れ出し、{{捕虜|ほりょ}}にさせた",
    body:
      "{{正統帝|せいとうてい}}（{{英宗|えいそう}}）の幼いころの教育係で、即位後は皇帝の信頼を背景に政治を思うままにした。1449年、モンゴル系の{{オイラト|おいらと}}が攻めてくると、軍事の経験がないまま皇帝の親征を強くすすめた。" +
      "準備不足の明軍は{{土木堡|どぼくほ}}で大敗し、皇帝はオイラトの{{捕虜|ほりょ}}となった（土木の変）。{{王振|おうしん}}自身もこの{{混乱|こんらん}}の中で殺された。皇帝が敵の{{捕虜|ほりょ}}になるという、明の歴史でも最大級の{{屈辱|くつじょく}}だった。",
    fact: "その後も{{正徳帝|せいとくてい}}の{{劉瑾|りゅうきん}}など、皇帝の{{寵愛|ちょうあい}}を受けて権力を{{振|ふ}}るう{{宦官|かんがん}}が続いた。{{劉瑾|りゅうきん}}は{{謀反|むほん}}の{{疑|うたが}}いで{{凌遅刑|りょうちけい}}に処された。",
    eraId: "ming",
    eventTitle: "土木の変",
  },
  {
    id: "weizhongxian",
    name: "{{魏忠賢|ぎちゅうけん}}",
    period: "{{明|みん}}末（17世紀前半）",
    key: "「九千歳」と呼ばれ、明の{{滅亡|めつぼう}}を早めた",
    body:
      "{{賭博|とばく}}の借金から{{逃|のが}}れるため自ら{{宦官|かんがん}}になったといわれる。政治に関心のない{{天啓帝|てんけいてい}}のもとで実権を握り、{{東廠|とうしょう}}を使って{{反対派|はんたいは}}の{{東林党|とうりんとう}}の{{官僚|かんりょう}}たちを次々と{{投獄|とうごく}}・{{拷問|ごうもん}}した。" +
      "皇帝の「{{万歳|ばんざい}}」に次ぐ「九千歳」と呼ばれ、全国に{{魏忠賢|ぎちゅうけん}}を生きながら{{祀|まつ}}る{{祠|ほこら}}（{{生祠|せいし}}）が建てられるほどだった。1627年、次の{{崇禎帝|すうていてい}}が即位するとすぐに{{罷免|ひめん}}され、自ら命を{{絶|た}}った。しかし政治の{{混乱|こんらん}}はおさまらず、17年後に明は{{滅亡|めつぼう}}した。",
    fact: "明末の{{宦官|かんがん}}は数万人にのぼったといわれる。",
    eraId: "ming",
    eventTitle: "明の滅亡",
  },
  {
    id: "lilianying",
    name: "{{李蓮英|りれんえい}}",
    period: "{{清|しん}}末（19世紀後半）",
    key: "{{西太后|せいたいこう}}にもっとも近かった{{宦官|かんがん}}",
    body:
      "清は明の失敗に学び、{{宦官|かんがん}}が政治に口を出すことを厳しく禁じた。1869年には、{{西太后|せいたいこう}}のお気に入りだった{{宦官|かんがん}}{{安徳海|あんとくかい}}が、許可なく都を出たとして地方長官に処刑されている。" +
      "その後、{{西太后|せいたいこう}}に{{仕|つか}}えて{{寵愛|ちょうあい}}を受けたのが{{李蓮英|りれんえい}}で、{{宦官|かんがん}}としては{{異例|いれい}}の二品の位を与えられた。{{西太后|せいたいこう}}の{{髪|かみ}}を{{結|ゆ}}う腕で取り立てられたという話もある。ドラマなどでは{{悪役|あくやく}}として{{描|えが}}かれることが多いが、表立って政治を動かした記録は少ない。",
    fact: "1923年、{{紫禁城|しきんじょう}}に住み続けていた{{溥儀|ふぎ}}が{{宦官|かんがん}}の大半を追放し、二千年以上続いた制度は事実上終わった。最後の{{宦官|かんがん}}とされる{{孫耀庭|そんようてい}}は1996年まで生きた。",
    eraId: "qing",
    eventTitle: null,
  },
];

const RESOLVED = EUNUCHS.map((e) => {
  const eventSlug = e.eventTitle ? findEventSlug(e.eraId, e.eventTitle) : null;
  return {
    ...e,
    eventHref: eventSlug ? `/events/${eventSlug}` : ERAS.some((x) => x.id === e.eraId) ? `/eras/${e.eraId}` : null,
    personLink: e.personName ? personHref(e.personName) : null,
  };
});

const FAQ = [
  {
    q: "なぜ宦官は権力を握れたのか？",
    a: "{{宦官|かんがん}}は皇帝の生活の世話から書類の取り次ぎまでを担い、一日中皇帝のそばにいた。幼い皇帝にとっては育ての親のような存在で、子孫を残せないため自分の家を{{興|おこ}}して王朝を{{乗|の}}っ取る心配も少ないと考えられた。そのため皇帝は、力をつけた{{外戚|がいせき}}や{{官僚|かんりょう}}に対抗する味方として{{宦官|かんがん}}を頼り、{{宦官|かんがん}}は皇帝の命令を伝える立場を利用して権力をふくらませていった。",
  },
  {
    q: "宦官はどうやってなったのか？",
    a: "古くは{{宮刑|きゅうけい}}という刑罰や戦争の{{捕虜|ほりょ}}が{{宦官|かんがん}}にされたが、明・清の時代には、{{貧|まず}}しい家の男性が出世や生活のために自ら志願するケースが多くなった。{{宮刑|きゅうけい}}を受けた人としては、『史記』を書いた{{司馬遷|しばせん}}が有名で、{{匈奴|きょうど}}に降った将軍{{李陵|りりょう}}をかばって皇帝の{{怒|いか}}りを買い、死刑の代わりに{{宮刑|きゅうけい}}を選んで歴史書を完成させた。",
  },
  {
    q: "日本に宦官はいたの？",
    a: "日本は{{遣唐使|けんとうし}}を通じて律令制など唐の制度を多く取り入れたが、{{宦官|かんがん}}と科挙は取り入れなかった。日本の宮中では{{女官|にょかん}}が天皇の身の回りの世話や命令の取り次ぎを担い、その役目を{{宦官|かんがん}}が担う必要がなかったことや、{{牧畜|ぼくちく}}の文化が{{薄|うす}}く{{去勢|きょせい}}の習慣自体がなかったことが理由として挙げられる。",
  },
];

const h2Style = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginTop: 36, marginBottom: 10, scrollMarginTop: 16 };
const pStyle = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 12 };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const smallLinkStyle = { ...linkStyle, fontSize: 12 };
const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };

export default function EunuchsPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          宦官とは？
        </h1>
        <p style={pStyle}>
          <RubyText
            text={
              "{{宦官|かんがん}}とは、{{去勢|きょせい}}されたうえで皇帝や{{後宮|こうきゅう}}に{{仕|つか}}えた男性のこと。後宮の女性たちと接しても問題が起きないよう{{去勢|きょせい}}された者だけが宮殿の奥に入ることを許され、皇帝の身の回りの世話や命令の取り次ぎを担った。" +
              "皇帝にもっとも近い存在だったため、ときに皇帝を{{操|あやつ}}って国を動かし、王朝の{{滅亡|めつぼう}}の原因になることもあった。中国では遅くとも{{周|しゅう}}の時代から清の終わりまで、二千年以上にわたって存在した。"
            }
          />
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" style={{ marginBottom: 8 }}>
          {RESOLVED.map((e) => (
            <a key={e.id} href={`#${e.id}`} className="text-center hover:opacity-90" style={{ ...cardStyle, padding: "8px 6px" }}>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
                <RubyText text={e.name} />
              </div>
              <div style={{ fontSize: 10.5, color: COLORS.gold, marginTop: 2 }}>
                <RubyText text={e.period} />
              </div>
            </a>
          ))}
        </div>
        <nav className="flex gap-x-4 gap-y-1 flex-wrap" style={{ fontSize: 12, marginBottom: 8 }}>
          <a href="#famous" style={linkStyle}>有名な宦官（時代順）</a>
          <a href="#faq" style={linkStyle}>なぜ権力を握れたか・日本にいなかった理由</a>
        </nav>

        <h2 id="famous" style={h2Style}>歴史を動かした有名な宦官</h2>
        <div className="flex flex-col gap-4">
          {RESOLVED.map((e, i) => (
            <div key={e.id} id={e.id} style={{ ...cardStyle, padding: "14px 16px", scrollMarginTop: 16 }}>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink }}>
                  <span style={{ color: COLORS.gold, fontSize: 12, marginRight: 8 }}>{i + 1}</span>
                  <RubyText text={e.name} />
                </h3>
                <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>
                  <RubyText text={e.period} />
                </span>
              </div>
              <p style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>
                <RubyText text={e.key} />
              </p>
              <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                <RubyText text={e.body} />
              </p>
              <div style={{ marginTop: 10, padding: "8px 10px", backgroundColor: "#F3ECD9", fontSize: 12, lineHeight: 1.8, color: COLORS.inkSoft }}>
                <RubyText text={e.fact} />
              </div>
              <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ marginTop: 10 }}>
                {e.eventHref && (
                  <a href={e.eventHref} style={smallLinkStyle}>
                    {e.eventTitle ? "関連する出来事を年表で読む →" : "この時代を年表で読む →"}
                  </a>
                )}
                {e.personLink && (
                  <a href={e.personLink} style={smallLinkStyle}>
                    <RubyText text={`${e.personLabel}の人物ページ →`} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 id="faq" style={h2Style}>宦官についてよくある疑問</h2>
        <div className="flex flex-col gap-3">
          {FAQ.map((f, i) => (
            <div key={i} style={{ ...cardStyle, padding: "12px 14px" }}>
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
            <RubyText text="{{宦官|かんがん}}が仕えた後宮の女性たちの位や、{{宦官|かんがん}}と権力を争った{{官僚|かんりょう}}を選ぶ科挙のしくみも解説しています。" />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/harem-ranks" variant="solid">後宮の位一覧</NavButton>
            <NavButton href="/keju" variant="outline">科挙とは</NavButton>
            <NavButton href="/history-books" variant="outline">中国の歴史書とは</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/eunuchs" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
