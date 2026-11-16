import { ERAS, stripRuby, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const title = "科挙とは？しくみ・倍率・カンニングまで中国の官僚試験をわかりやすく解説";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "科挙とは、隋から清まで約1300年続いた中国の官僚登用試験。童試・郷試・会試・殿試の流れ、状元・榜眼・探花の意味、合格率や2万人を収容した試験場、カンニング下着や不正への処罰、王安石・朱熹ら合格者と洪秀全ら不合格者の逸話、日本に導入されなかった理由までまとめます。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/keju" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/keju" }),
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

// 科挙の歴史の流れ
const HISTORY = [
  { period: "{{隋|ずい}}", text: "{{文帝|ぶんてい}}が家柄で官僚を選ぶ{{九品中正|きゅうひんちゅうせい}}をやめ、試験による登用を始める。{{煬帝|ようだい}}の時代に{{進士科|しんしか}}が置かれ、科挙の始まりとされる。", eraId: "sui", eventTitle: "科挙制度の創設" },
  { period: "{{唐|とう}}", text: "{{進士科|しんしか}}が花形となるが、合格者は年に数十人ほど。合格しても家柄や{{推薦|すいせん}}がものをいい、貴族の力はまだ強かった。{{武則天|ぶそくてん}}は武官を選ぶ{{武挙|ぶきょ}}を始めた。", eraId: "tang" },
  { period: "{{宋|そう}}", text: "太祖{{趙匡胤|ちょうきょういん}}が皇帝みずから試験する{{殿試|でんし}}を始め、その後も受験者の名前を隠す{{糊名|こめい}}や答案の書き写し（{{謄録|とうろく}}）が取り入れられて{{公平|こうへい}}さが高まった。合格者が政治を担う「{{士大夫|したいふ}}」の時代になる。", eraId: "northernsong", eventTitle: "宋の建国" },
  { period: "{{元|げん}}", text: "モンゴル人の王朝のもとで長く中止され、1315年に再開されたが、合格者の数は少なかった。", eraId: "yuan" },
  { period: "{{明|みん}}・{{清|しん}}", text: "{{童試|どうし}}→{{郷試|きょうし}}→{{会試|かいし}}→{{殿試|でんし}}の流れが固まり、{{朱子学|しゅしがく}}にもとづく{{八股文|はっこぶん}}という決まった形式の論文が課された。受験者は数百万人規模にふくらんだ。", eraId: "ming" },
  { period: "1905年", text: "近代化を急ぐ清朝が科挙を{{廃止|はいし}}。約1300年の歴史に幕を下ろした。", eraId: "qing" },
];

// 明・清の科挙の段階
const STAGES = [
  { stage: "{{童試|どうし}}", place: "県・府・省の{{学政|がくせい}}", when: "3年に2回", pass: "{{生員|せいいん}}（{{秀才|しゅうさい}}）", note: "ここに受かると{{郷試|きょうし}}の受験資格と、{{労役|ろうえき}}の{{免除|めんじょ}}などの{{特権|とっけん}}を得る" },
  { stage: "{{郷試|きょうし}}", place: "各省の都（{{貢院|こういん}}）", when: "3年に1回・秋", pass: "{{挙人|きょじん}}", note: "最大の{{難関|なんかん}}。{{挙人|きょじん}}になるだけで地方の名士として役人に{{任官|にんかん}}できる道も開けた" },
  { stage: "{{会試|かいし}}", place: "都（北京）", when: "{{郷試|きょうし}}の翌年・春", pass: "{{貢士|こうし}}", note: "全国の{{挙人|きょじん}}が集まる試験" },
  { stage: "{{殿試|でんし}}", place: "宮中", when: "{{会試|かいし}}の直後", pass: "{{進士|しんし}}", note: "皇帝が出題する形の試験で、落第はなく順位だけを決める" },
];

const FAQ = [
  {
    q: "状元・榜眼・探花とは？",
    a: "{{殿試|でんし}}の成績上位3人のこと。1位を{{状元|じょうげん}}、2位を{{榜眼|ぼうがん}}、3位を{{探花|たんか}}と呼び、この3人は「一甲」として特別に{{進士及第|しんしきゅうだい}}の{{称号|しょうごう}}を受けた。{{状元|じょうげん}}は3年に一度しか出ない全国の首席で、{{故郷|こきょう}}には{{記念|きねん}}の門が建てられるほどの名誉だった。「{{状元|じょうげん}}」という言葉は、いまも中国で大学入試の各省トップを指す言葉として使われている。",
  },
  {
    q: "科挙の倍率はどれくらい？",
    a: "時代や地域で大きく違うが、明・清でもっとも{{狭|せま}}き門だったのは{{郷試|きょうし}}で、受験者の多い{{江南|こうなん}}（南京）では2万人近くが受けて合格者は100人あまりという年もあった。最終的な{{進士|しんし}}は清代で1回あたりおよそ200〜300人ほど。何十年も受け続ける人は珍しくなく、白髪の老人が若者と{{並|なら}}んで受験する光景も見られた。",
  },
  {
    q: "試験は何日間？どこで受けた？",
    a: "{{郷試|きょうし}}と{{会試|かいし}}は3回の試験（3場）からなり、1回ごとに2泊3日、合計9日ほどかかった。受験者は{{貢院|こういん}}という試験場に並ぶ「{{号舎|ごうしゃ}}」と呼ばれる個室に入り、そこで食事も{{睡眠|すいみん}}もとった。{{号舎|ごうしゃ}}は{{畳|たたみ}}1枚ほどの{{狭|せま}}さで、板を{{渡|わた}}して机と{{椅子|いす}}にした。南京の{{江南貢院|こうなんこういん}}には2万を{{超|こ}}える{{号舎|ごうしゃ}}が並び、その一部は今も{{博物館|はくぶつかん}}として残っている。",
  },
  {
    q: "科挙は誰でも受けられた？",
    a: "建前では家柄に関係なく、男性なら受験できた。ただし女性は受けられず、役者や{{奴婢|ぬひ}}など一部の身分の人や、親の{{喪中|もちゅう}}の人も{{除|のぞ}}かれた。また何年も勉強に{{専念|せんねん}}するには{{経済的|けいざいてき}}な{{余裕|よゆう}}が必要で、実際の合格者は地主や商人など{{裕福|ゆうふく}}な家の出身者が多かった。",
  },
  {
    q: "日本に科挙はなかったの？",
    a: "日本は{{遣隋使|けんずいし}}・{{遣唐使|けんとうし}}を通じて律令制を取り入れ、役人の試験の制度も作ったが、実際には家柄による{{任官|にんかん}}が中心で、中国のような科挙は根づかなかった。同じように{{宦官|かんがん}}の制度も日本には入っていない。一方、朝鮮半島（{{高麗|こうらい}}・{{朝鮮王朝|ちょうせんおうちょう}}）やベトナムでは科挙が本格的に行われた。{{唐|とう}}に渡った{{阿倍仲麻呂|あべのなかまろ}}は、唐の科挙に合格して役人になったと伝えられている。",
  },
];

const RESOLVED_HISTORY = HISTORY.map((h) => ({
  ...h,
  href: h.eventTitle ? (findEventSlug(h.eraId, h.eventTitle) ? `/events/${findEventSlug(h.eraId, h.eventTitle)}` : null) : ERAS.some((e) => e.id === h.eraId) ? `/eras/${h.eraId}` : null,
}));

const thStyle = { padding: "8px 10px", textAlign: "left", fontWeight: 700, color: COLORS.ink, borderBottom: "1px solid #DCD3B8", whiteSpace: "nowrap" };
const tdStyle = { padding: "8px 10px", verticalAlign: "top", borderBottom: "1px solid #E8E0C8", color: COLORS.inkSoft };
const h2Style = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginTop: 36, marginBottom: 10, scrollMarginTop: 16 };
const pStyle = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 12 };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "12px 14px" };

function Para({ text }) {
  return (
    <p style={pStyle}>
      <RubyText text={text} />
    </p>
  );
}

function PersonLink({ name, label }) {
  const href = personHref(name);
  if (!href) return null;
  return (
    <>
      {" "}
      <a href={href} style={linkStyle}>
        <RubyText text={`${label}の人物ページ →`} />
      </a>
    </>
  );
}

export default function KejuPage() {
  const taipingSlug = findEventSlug("qing", "太平天国");

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          科挙とは？
        </h1>
        <Para
          text={
            "科挙とは、{{隋|ずい}}の時代に始まり、清の1905年に{{廃止|はいし}}されるまで約1300年続いた、中国の{{官僚|かんりょう}}を選ぶための試験制度のこと。" +
            "「科目による{{選挙|せんきょ}}（人材の選び出し）」を意味し、家柄ではなく試験の成績で役人を選ぶという、当時の世界では{{珍|めずら}}しい仕組みだった。" +
            "合格すれば{{貧|まず}}しい家の出身でも高い地位と富を手にできたため、多くの男性が人生をかけて勉強に打ちこんだ。"
          }
        />

        <div style={{ ...cardStyle, marginBottom: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: COLORS.gold, marginBottom: 6 }}>結論：明・清の科挙の流れ</div>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, lineHeight: 1.9 }}>
            <RubyText text="{{童試|どうし}}（{{秀才|しゅうさい}}）→ {{郷試|きょうし}}（{{挙人|きょじん}}）→ {{会試|かいし}}（{{貢士|こうし}}）→ {{殿試|でんし}}（{{進士|しんし}}）" />
          </div>
          <div style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 4 }}>
            <RubyText text="{{殿試|でんし}}の1位が「{{状元|じょうげん}}」。最後まで合格するのは、受験者全体のごく一部だった。" />
          </div>
        </div>
        <nav className="flex gap-x-4 gap-y-1 flex-wrap" style={{ fontSize: 12, marginBottom: 8 }}>
          <a href="#history" style={linkStyle}>科挙の歴史</a>
          <a href="#stages" style={linkStyle}>試験の段階</a>
          <a href="#cheating" style={linkStyle}>カンニングと不正</a>
          <a href="#people" style={linkStyle}>合格者・不合格者の逸話</a>
          <a href="#faq" style={linkStyle}>よくある疑問</a>
        </nav>

        <h2 id="history" style={h2Style}>科挙の歴史（隋から清まで）</h2>
        <div className="flex flex-col gap-2">
          {RESOLVED_HISTORY.map((h, i) => (
            <div key={i} className="flex gap-3" style={cardStyle}>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 900, color: COLORS.vermilion, minWidth: 56 }}>
                <RubyText text={h.period} />
              </div>
              <div style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
                <RubyText text={h.text} />
                {h.href && (
                  <>
                    {" "}
                    <a href={h.href} style={{ ...linkStyle, fontSize: 12 }}>
                      年表で読む →
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 id="stages" style={h2Style}>明・清の科挙の段階と合格者の呼び名</h2>
        <Para text="科挙のしくみがもっとも整った明・清では、受験者は次の4段階を順に勝ち{{抜|ぬ}}く必要があった。それぞれの合格者には呼び名があり、それ自体が社会的な身分になった。" />
        <div className="overflow-x-auto" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
            <thead>
              <tr style={{ backgroundColor: "#F3ECD9" }}>
                <th style={thStyle}>試験</th>
                <th style={thStyle}>場所・時期</th>
                <th style={thStyle}>合格者</th>
                <th style={thStyle}>ポイント</th>
              </tr>
            </thead>
            <tbody>
              {STAGES.map((s, i) => (
                <tr key={i}>
                  <td style={{ ...tdStyle, fontFamily: "var(--font-serif), serif", fontWeight: 700, color: COLORS.ink, whiteSpace: "nowrap" }}>
                    <span style={{ color: COLORS.gold, fontSize: 11, marginRight: 6 }}>{i + 1}</span>
                    <RubyText text={s.stage} />
                  </td>
                  <td style={{ ...tdStyle, fontSize: 12 }}>
                    <RubyText text={s.place} />
                    <br />
                    <RubyText text={s.when} />
                  </td>
                  <td style={{ ...tdStyle, fontWeight: 700, color: COLORS.ink, whiteSpace: "nowrap" }}>
                    <RubyText text={s.pass} />
                  </td>
                  <td style={{ ...tdStyle, fontSize: 12 }}>
                    <RubyText text={s.note} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 14 }}>
          <Para text="出題の中心は『{{論語|ろんご}}』『{{孟子|もうし}}』などの{{四書|ししょ}}と{{五経|ごきょう}}で、答えは{{南宋|なんそう}}の{{朱熹|しゅき}}の{{注釈|ちゅうしゃく}}に沿って書くことが求められた。明代からは{{八股文|はっこぶん}}と呼ばれる、{{対句|ついく}}を重ねる厳しい形式の論文が課され、内容よりも形式に合っているかが重視されたため、のちに「中身のない文章」の代名詞にもなった。" />
        </div>

        <h2 id="cheating" style={h2Style}>カンニングと不正、そして厳しい処罰</h2>
        <Para
          text={
            "合格すれば一族の運命が変わる試験だけに、不正もあとを{{絶|た}}たなかった。{{米粒|こめつぶ}}ほどの文字で{{四書五経|ししょごきょう}}を写した{{豆本|まめほん}}や、{{肌着|はだぎ}}の裏一面に{{模範解答|もはんかいとう}}をびっしり書きこんだ「カンニング下着」が今も残っている。" +
            "受験者は試験場の入口で服や持ち物を細かく調べられ、{{饅頭|まんじゅう}}まで割って中を確かめられたという。答案は名前を{{糊|のり}}で{{封|ふう}}じたうえ、{{筆跡|ひっせき}}でだれの答案かわからないよう別の人が書き写してから採点された。"
          }
        />
        <Para text="不正が発覚したときの処罰は重く、清の1858年には北京の{{郷試|きょうし}}で合格者の入れかえが明るみに出て、翌年、試験の責任者だった{{大学士|だいがくし}}{{柏葰|はくしゅん}}が{{死刑|しけい}}になった。{{宰相|さいしょう}}級の{{高官|こうかん}}でさえ{{処刑|しょけい}}されるほど、科挙の{{公正|こうせい}}さは国の{{威信|いしん}}に関わる問題だった。" />

        <h2 id="people" style={h2Style}>科挙に合格した人・落ち続けた人</h2>
        <div className="flex flex-col gap-3">
          <div style={cardStyle}>
            <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 4 }}>
              <RubyText text="合格して歴史を動かした人" />
            </h3>
            <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
              <RubyText text="{{北宋|ほくそう}}の改革者{{王安石|おうあんせき}}、その{{政敵|せいてき}}で『{{資治通鑑|しじつがん}}』を著した{{司馬光|しばこう}}、詩人の{{蘇軾|そしょく}}は、いずれも{{進士|しんし}}出身。{{朱子学|しゅしがく}}をおこした{{朱熹|しゅき}}は19歳で{{進士|しんし}}に合格した。{{南宋|なんそう}}末に元と戦い続けた{{文天祥|ぶんてんしょう}}は{{状元|じょうげん}}だった。" />
              <PersonLink name="王安石" label="{{王安石|おうあんせき}}" />
              <PersonLink name="司馬光" label="{{司馬光|しばこう}}" />
              <PersonLink name="朱熹" label="{{朱熹|しゅき}}" />
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 4 }}>
              <RubyText text="落ち続けて歴史を動かした人" />
            </h3>
            <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
              <RubyText text="清末の{{洪秀全|こうしゅうぜん}}は、科挙の最初の段階（{{秀才|しゅうさい}}になる試験）に4度落ち、その{{挫折|ざせつ}}の中でキリスト教の{{影響|えいきょう}}を受けた{{幻|まぼろし}}を見たとして宗教結社を作った。これがのちに清を{{揺|ゆ}}るがす太平天国の乱になる。また唐末に大反乱を起こした{{黄巣|こうそう}}も、科挙に落ちた{{塩|しお}}の{{密売人|みつばいにん}}だったといわれる。" />
              {taipingSlug && (
                <>
                  {" "}
                  <a href={`/events/${taipingSlug}`} style={linkStyle}>
                    太平天国の乱を年表で読む →
                  </a>
                </>
              )}
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 4 }}>
              <RubyText text="合格して{{喜|よろこ}}びのあまり…" />
            </h3>
            <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
              <RubyText text="清代の小説『{{儒林外史|じゅりんがいし}}』には、50歳を過ぎてようやく{{郷試|きょうし}}に合格した{{范進|はんしん}}が、知らせを聞いた{{瞬間|しゅんかん}}に{{喜|よろこ}}びのあまり正気を失ってしまう話がある。{{物語|ものがたり}}ではあるが、科挙に人生を{{捧|ささ}}げた人々の姿を{{皮肉|ひにく}}たっぷりに{{描|えが}}いた場面として、中国の教科書にも{{載|の}}っている。" />
            </p>
          </div>
        </div>

        <h2 id="faq" style={h2Style}>科挙についてよくある疑問</h2>
        <div className="flex flex-col gap-3">
          {FAQ.map((f, i) => (
            <div key={i} style={cardStyle}>
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
            <RubyText text="科挙で選ばれた{{官僚|かんりょう}}と、皇帝の身近で{{権力|けんりょく}}を争った{{宦官|かんがん}}の歴史や、後宮の位についても解説しています。" />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eunuchs" variant="solid">宦官とは</NavButton>
            <NavButton href="/harem-ranks" variant="outline">後宮の位一覧</NavButton>
            <NavButton href="/emperors" variant="outline">歴代皇帝一覧</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/keju" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
