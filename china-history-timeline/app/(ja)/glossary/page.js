import { ERAS, stripRuby, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const title = "中国史の用語集｜世界史の頻出用語（郡県制・均田制・両税法・一条鞭法など）と違いを解説";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "世界史の中国史でよく出る用語を、政治制度・土地と税・兵制・思想・外交の分野別に時代順で解説。郡県制と郡国制、租庸調制と両税法、一条鞭法と地丁銀制、府兵制と募兵制、朱子学と陽明学の違いも表でまとめます。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/glossary" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/glossary" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

function eventHref(eraId, eventTitle) {
  const era = ERAS.find((e) => e.id === eraId);
  const event = era?.events.find((ev) => stripRuby(ev.title).includes(eventTitle));
  return event ? `/events/${event.slug}` : null;
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

// link: { event: [eraId, 出来事タイトルの一部] } / { person: 人物名 } / { page: パス } のどれか。見つからなければリンクを出さない
function resolveLink(link) {
  if (!link) return null;
  if (link.event) return eventHref(...link.event);
  if (link.person) return personHref(link.person);
  return link.page;
}

const SECTIONS = [
  {
    id: "politics",
    title: "政治のしくみ",
    terms: [
      { term: "{{封建制|ほうけんせい}}", era: "西周", body: "周王が一族や功臣に土地を与えて{{諸侯|しょこう}}とし、{{諸侯|しょこう}}は王に{{貢|みつ}}ぎ物と軍役で仕えた制度。一族の血のつながり（{{宗法|そうほう}}）で結びついていたのが特徴で、ヨーロッパの封建制とはしくみが異なる。", link: { page: "/eras/westernzhou" } },
      { term: "{{郡県制|ぐんけんせい}}", era: "{{秦|しん}}", body: "全国を郡と県に分け、中央から役人を派遣して直接治める制度。{{始皇帝|しこうてい}}が統一後に全国で実施し、中央集権の基本形となった。", link: { event: ["qin", "郡県制"] } },
      { term: "{{郡国制|ぐんこくせい}}", era: "前漢", body: "都の周りは郡県制で直接治め、地方には一族などを王として{{封|ほう}}じる、郡県制と{{封建制|ほうけんせい}}の{{併用|へいよう}}。前154年の{{呉楚七国|ごそしちこく}}の乱のあと、王の力が{{削|けず}}られ実質的に郡県制に近づいた。", link: { event: ["westernhan", "呉楚七国"] } },
      { term: "{{九品中正|きゅうひんちゅうせい}}", era: "{{魏|ぎ}}〜南北朝", body: "地方の{{中正官|ちゅうせいかん}}が人物を9等級に評価して役人に{{推薦|すいせん}}する制度。実際には有力な{{豪族|ごうぞく}}の子弟ばかりが高く評価され、「{{上品|じょうほん}}に{{寒門|かんもん}}なく、{{下品|げほん}}に{{勢族|せいぞく}}なし」といわれて門閥貴族を生んだ。{{隋|ずい}}で廃止され科挙に代わった。", link: { page: "/keju" } },
      { term: "{{三省六部|さんしょうりくぶ}}", era: "{{隋|ずい}}・{{唐|とう}}", body: "{{詔勅|しょうちょく}}を起草する{{中書省|ちゅうしょしょう}}、それを審議する{{門下省|もんかしょう}}、実行する{{尚書省|しょうしょしょう}}の三省と、{{尚書省|しょうしょしょう}}の下で実務を分担する{{吏|り}}・{{戸|こ}}・{{礼|れい}}・{{兵|へい}}・{{刑|けい}}・{{工|こう}}の六部からなる中央官制。日本の律令制のお手本になった。", link: { page: "/eras/tang" } },
      { term: "{{節度使|せつどし}}", era: "{{唐|とう}}", body: "{{辺境|へんきょう}}の防衛のため置かれた軍団の長。やがて軍事だけでなく財政や行政まで握って半ば独立し、{{安禄山|あんろくざん}}が安史の乱を起こした。乱のあとは各地の{{節度使|せつどし}}（{{藩鎮|はんちん}}）が{{割拠|かっきょ}}し、唐を弱らせた。", link: { event: ["tang", "安史の乱"] } },
      { term: "{{文治主義|ぶんちしゅぎ}}", era: "{{宋|そう}}", body: "唐末・五代に{{武人|ぶじん}}が{{割拠|かっきょ}}した反省から、軍人の力を{{抑|おさ}}え、科挙で選んだ文官に政治を任せた方針。国内は安定したが軍事力が弱まり、北方の{{遼|りょう}}・金に苦しむ原因にもなった。", link: { event: ["northernsong", "杯酒釈兵権"] } },
      { term: "{{八旗|はっき}}", era: "{{清|しん}}", body: "ヌルハチが作った満州人の軍事・社会組織。8色の旗で軍団を分け、兵士とその家族を所属させた。清の中国支配の柱となった。", link: { page: "/eras/qing" } },
      { term: "{{軍機処|ぐんきしょ}}", era: "{{清|しん}}", body: "{{雍正帝|ようせいてい}}の時代に、西北での戦争の機密を扱うために設けられた皇帝直属の機関。やがて政治の最高機関となり、皇帝の{{独裁|どくさい}}を支えた。", link: { page: "/emperors#qing" } },
    ],
  },
  {
    id: "land",
    title: "土地・税・兵の制度",
    terms: [
      { term: "{{井田制|せいでんせい}}", era: "周（伝説）", body: "土地を「井」の字に9等分し、周りの8区画を8家が耕し、中央の1区画を共同で耕して収穫を納めたという制度。{{孟子|もうし}}が理想として説いたもので、実際に行われたかは疑問とされる。", link: null },
      { term: "{{屯田制|とんでんせい}}", era: "{{魏|ぎ}}", body: "{{曹操|そうそう}}が始めた、兵士や{{流民|るみん}}に土地を耕させて食糧を確保する制度。戦乱で荒れた土地を{{復興|ふっこう}}させ、{{魏|ぎ}}が三国でもっとも強くなる{{土台|どだい}}となった。", link: { person: "曹操" } },
      { term: "{{均田制|きんでんせい}}", era: "{{北魏|ほくぎ}}〜{{唐|とう}}", body: "国が成年男子などに土地を{{支給|しきゅう}}し、死ぬと返させる制度。485年に{{北魏|ほくぎ}}で{{馮|ふう}}太后のもと始まり、{{隋|ずい}}・{{唐|とう}}に受け{{継|つ}}がれた。日本の{{班田収授法|はんでんしゅうじゅのほう}}はこれにならったもの。", link: { page: "/women-rulers#fengtaihou" } },
      { term: "{{租庸調|そようちょう}}制", era: "{{隋|ずい}}・{{唐|とう}}", body: "{{均田制|きんでんせい}}で土地を受けた農民に課した税。{{租|そ}}は{{穀物|こくもつ}}、{{庸|よう}}は都での労役（または代わりの{{絹|きぬ}}・布）、{{調|ちょう}}は{{絹|きぬ}}や布などの特産物。人に対してかける税だった。", link: { page: "/eras/tang" } },
      { term: "{{府兵制|ふへいせい}}", era: "{{西魏|せいぎ}}〜{{唐|とう}}", body: "{{均田制|きんでんせい}}で土地を受けた農民から兵を出させる制度。兵士は武器や食糧を自分で用意して交代で勤務した。農民の負担が重く、{{均田制|きんでんせい}}がくずれると成り立たなくなった。", link: null },
      { term: "{{募兵制|ぼへいせい}}", era: "{{唐|とう}}（中期以降）", body: "給料を払って兵士を{{雇|やと}}う制度。{{府兵制|ふへいせい}}がくずれた8世紀前半から広まり、{{節度使|せつどし}}が率いる職業軍人の軍団が生まれた。", link: null },
      { term: "{{両税法|りょうぜいほう}}", era: "{{唐|とう}}（780年）", body: "{{宰相|さいしょう}}{{楊炎|ようえん}}の献策で始まった税制。今住んでいる土地で、持っている土地や財産の多さに応じて、夏と秋の年2回納めさせた。人ではなく財産に税をかける方式で、以後の中国の税制の基本となった。", link: null },
      { term: "{{一条鞭法|いちじょうべんぽう}}", era: "{{明|みん}}（16世紀）", body: "土地の税と労役など、複雑に分かれていた税をまとめて銀で納めさせる制度。日本やアメリカ大陸から銀が大量に流れこんだことが背景にあり、{{張居正|ちょうきょせい}}が全国に広めた。", link: null },
      { term: "{{地丁銀|ちていぎん}}制", era: "{{清|しん}}（18世紀）", body: "人にかける税（{{丁銀|ていぎん}}）を土地の税（{{地銀|ちぎん}}）に組みこみ、土地の税だけにした制度。{{康熙帝|こうきてい}}が人頭税の額を固定し、{{雍正帝|ようせいてい}}の時代に全国に広まった。人頭税がなくなったため、登録される人口が急増した。", link: { person: "康熙帝" } },
    ],
  },
  {
    id: "thought",
    title: "思想・学問",
    terms: [
      { term: "{{諸子百家|しょしひゃっか}}", era: "春秋・戦国", body: "{{戦乱|せんらん}}の時代に現れた多くの思想家と学派のこと。{{儒家|じゅか}}（孔子・{{孟子|もうし}}・{{荀子|じゅんし}}）、{{道家|どうか}}（{{老子|ろうし}}・{{荘子|そうし}}）、{{法家|ほうか}}（{{商鞅|しょうおう}}・{{韓非|かんぴ}}）、{{墨家|ぼっか}}（{{墨子|ぼくし}}）、{{兵家|へいか}}（{{孫子|そんし}}）などがある。", link: { person: "孔子" } },
      { term: "{{性善説|せいぜんせつ}}・{{性悪説|せいあくせつ}}", era: "戦国", body: "人の本性は善であり、それを育てればよいとする{{孟子|もうし}}の{{性善説|せいぜんせつ}}と、人の本性は悪であり、礼によって正す必要があるとする{{荀子|じゅんし}}の{{性悪説|せいあくせつ}}。{{荀子|じゅんし}}の弟子から{{法家|ほうか}}の{{韓非|かんぴ}}や{{李斯|りし}}が出た。", link: null },
      { term: "{{焚書坑儒|ふんしょこうじゅ}}", era: "{{秦|しん}}", body: "{{始皇帝|しこうてい}}が{{法家|ほうか}}の{{李斯|りし}}の意見で、医薬・{{占|うらな}}い・農業以外の書物を焼かせ、批判した学者らを生き埋めにしたとされる思想統制。", link: { event: ["qin", "焚書坑儒"] } },
      { term: "{{儒学|じゅがく}}の{{官学化|かんがくか}}", era: "前漢", body: "{{武帝|ぶてい}}が{{董仲舒|とうちゅうじょ}}の意見を取り入れ、{{儒学|じゅがく}}を国の学問とし、{{五経博士|ごきょうはかせ}}を置いたこと。以後、{{儒学|じゅがく}}は2000年にわたって中国の政治と教育の中心となった。", link: { event: ["westernhan", "儒教"] } },
      { term: "{{朱子学|しゅしがく}}", era: "{{南宋|なんそう}}", body: "{{朱熹|しゅき}}が大成した新しい{{儒学|じゅがく}}。世界は「{{理|り}}」と「{{気|き}}」からなるとし、物事の{{理|り}}をきわめて知を深める（{{格物致知|かくぶつちち}}）ことを重んじた。元以降は科挙の基準となり、日本では江戸幕府の公式の学問となった。", link: { person: "朱熹" } },
      { term: "{{陽明学|ようめいがく}}", era: "{{明|みん}}", body: "{{王守仁|おうしゅじん}}（{{王陽明|おうようめい}}）が始めた{{儒学|じゅがく}}。人の心そのものに{{理|り}}がある（{{心即理|しんそくり}}）とし、知ることと行うことは一つ（{{知行合一|ちこうごういつ}}）と説いた。日本では{{大塩平八郎|おおしおへいはちろう}}や幕末の志士に{{影響|えいきょう}}を与えた。", link: null },
      { term: "{{考証学|こうしょうがく}}", era: "{{清|しん}}", body: "古い書物の文字や内容を、証拠にもとづいて実証的に研究する学問。{{顧炎武|こえんぶ}}らが基礎を築いた。清朝が政治批判を厳しく取りしまった（文字の{{獄|ごく}}）ことも、学者が政治から{{離|はな}}れて文献研究に向かう一因になったといわれる。", link: null },
    ],
  },
  {
    id: "diplomacy",
    title: "外交・経済",
    terms: [
      { term: "{{冊封|さくほう}}体制", era: "漢〜清", body: "中国の皇帝が周りの国の君主に王などの称号を与えて君臣関係を結び、相手国が{{貢|みつ}}ぎ物を送る（{{朝貢|ちょうこう}}）国際秩序。57年に{{倭|わ}}の{{奴国|なこく}}王が後漢の光武帝から金印を受け、239年に{{卑弥呼|ひみこ}}が{{魏|ぎ}}から「{{親魏倭王|しんぎわおう}}」の称号を受けたのもこのしくみ。", link: { page: "/japan-china-timeline" } },
      { term: "{{羈縻|きび}}政策", era: "{{唐|とう}}", body: "従えた異民族の土地に{{都護府|とごふ}}を置いて監督しながら、実際の統治はその民族の{{首長|しゅちょう}}に任せる政策。唐の広い領土を支えた。", link: { page: "/dynasty-territory-map" } },
      { term: "{{市舶司|しはくし}}", era: "{{唐|とう}}〜{{明|みん}}", body: "海上貿易を管理し、関税を取る役所。唐代に{{広州|こうしゅう}}に置かれ、海の貿易がさかんになった宋代には各地の港に増やされた。", link: null },
      { term: "{{交子|こうし}}", era: "{{北宋|ほくそう}}", body: "四川で商人たちが使い始め、のちに国が発行した紙幣。世界でもっとも早い時期の紙幣の一つで、南宋の{{会子|かいし}}、元の{{交鈔|こうしょう}}へと続いた。", link: { page: "/eras/northernsong" } },
      { term: "{{海禁|かいきん}}", era: "{{明|みん}}", body: "民間の人が海外と貿易したり海に出たりすることを禁じた政策。貿易は国どうしの{{朝貢|ちょうこう}}に限られた。{{倭寇|わこう}}の対策でもあったが、かえって{{密貿易|みつぼうえき}}を増やし、16世紀後半にゆるめられた。", link: null },
      { term: "{{勘合|かんごう}}貿易", era: "{{明|みん}}", body: "明と室町幕府の間の{{朝貢|ちょうこう}}貿易。{{倭寇|わこう}}と区別するため、正式な船は「{{勘合|かんごう}}」という合い札を持って行き来した。{{足利義満|あしかがよしみつ}}が始めた。", link: { page: "/japan-china-timeline" } },
      { term: "{{公行|こうこう}}", era: "{{清|しん}}", body: "ヨーロッパとの貿易を独占した{{広州|こうしゅう}}の特許商人の組合。1757年に西洋との貿易港は{{広州|こうしゅう}}一つに限られた。イギリスはこの制限に不満を強め、アヘン戦争後の南京条約で{{公行|こうこう}}は廃止された。", link: { event: ["qing", "アヘン戦争"] } },
    ],
  },
];

// 試験でよく比べられる用語のペア
const COMPARISONS = [
  { a: "{{郡県制|ぐんけんせい}}（{{秦|しん}}）", b: "{{郡国制|ぐんこくせい}}（前漢）", point: "全国を直接治めるか、地方に王を置く{{併用|へいよう}}か" },
  { a: "{{租庸調|そようちょう}}制（{{隋|ずい}}・{{唐|とう}}）", b: "{{両税法|りょうぜいほう}}（{{唐|とう}}・780年）", point: "人にかける税から、土地・財産にかける税へ" },
  { a: "{{府兵制|ふへいせい}}", b: "{{募兵制|ぼへいせい}}", point: "農民に兵役を課すか、給料で兵を{{雇|やと}}うか" },
  { a: "{{一条鞭法|いちじょうべんぽう}}（{{明|みん}}）", b: "{{地丁銀|ちていぎん}}制（{{清|しん}}）", point: "税を銀でまとめて納める → さらに人頭税をなくして土地税だけに" },
  { a: "{{朱子学|しゅしがく}}（{{南宋|なんそう}}・{{朱熹|しゅき}}）", b: "{{陽明学|ようめいがく}}（{{明|みん}}・{{王陽明|おうようめい}}）", point: "{{理|り}}を外の物事にきわめるか、心の中に求めるか" },
];

const RESOLVED = SECTIONS.map((s) => ({ ...s, terms: s.terms.map((t) => ({ ...t, href: resolveLink(t.link) })) }));

const thStyle = { padding: "8px 10px", textAlign: "left", fontWeight: 700, color: COLORS.ink, borderBottom: "1px solid #DCD3B8", whiteSpace: "nowrap" };
const tdStyle = { padding: "8px 10px", verticalAlign: "top", borderBottom: "1px solid #E8E0C8", color: COLORS.inkSoft };
const h2Style = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginTop: 36, marginBottom: 10, scrollMarginTop: 16 };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };

export default function GlossaryPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国史の用語集
        </h1>
        <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
          <RubyText text="世界史の中国史でよく出る用語を、分野ごとに時代順で並べました。制度の名前は、前の時代の何を受け{{継|つ}}ぎ、何を改めたのかという流れで覚えると忘れにくくなります。まぎらわしい用語の違いは最初の表にまとめています。" />
        </p>

        <nav className="flex gap-x-4 gap-y-1 flex-wrap" style={{ fontSize: 12, marginBottom: 8 }}>
          <a href="#compare" style={linkStyle}>まぎらわしい用語の違い</a>
          {RESOLVED.map((s) => (
            <a key={s.id} href={`#${s.id}`} style={linkStyle}>
              {s.title}
            </a>
          ))}
        </nav>

        <h2 id="compare" style={h2Style}>まぎらわしい用語の違い</h2>
        <div className="overflow-x-auto" style={cardStyle}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
            <thead>
              <tr style={{ backgroundColor: "#F3ECD9" }}>
                <th style={thStyle}>用語A</th>
                <th style={thStyle}>用語B</th>
                <th style={thStyle}>違いのポイント</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISONS.map((c, i) => (
                <tr key={i}>
                  <td style={{ ...tdStyle, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={c.a} />
                  </td>
                  <td style={{ ...tdStyle, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={c.b} />
                  </td>
                  <td style={{ ...tdStyle, fontSize: 12 }}>
                    <RubyText text={c.point} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {RESOLVED.map((s) => (
          <section key={s.id}>
            <h2 id={s.id} style={h2Style}>
              {s.title}
            </h2>
            <div className="flex flex-col gap-2.5">
              {s.terms.map((t, i) => (
                <div key={i} style={{ ...cardStyle, padding: "12px 14px" }}>
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}>
                      <RubyText text={t.term} />
                    </h3>
                    <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>
                      <RubyText text={t.era} />
                    </span>
                  </div>
                  <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 4 }}>
                    <RubyText text={t.body} />
                    {t.href && (
                      <>
                        {" "}
                        <a href={t.href} style={{ ...linkStyle, fontSize: 12 }}>
                          関連ページ →
                        </a>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            <RubyText text="用語を覚えたら、クイズで王朝の順番や年号もあわせて確認してみましょう。" />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/quiz" variant="solid">中国史クイズに挑戦</NavButton>
            <NavButton href="/mnemonics" variant="outline">王朝の覚え方</NavButton>
            <NavButton href="/keju" variant="outline">科挙とは</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/glossary" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
