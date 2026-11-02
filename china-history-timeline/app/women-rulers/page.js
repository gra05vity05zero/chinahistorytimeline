import { ERAS, stripRuby, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const title = "中国の女帝と三大悪女とは？呂后・武則天・西太后ら権力を握った女性を解説";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "中国史上ただ一人の女帝・武則天と、「中国三大悪女」と呼ばれる呂后・西太后をはじめ、皇太后として国を動かした女性たちを時代順に紹介。垂簾聴政とは何か、本当に悪女だったのか、同じ年に即位した日本の持統天皇との比較もまとめます。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/women-rulers" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/women-rulers" }),
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

// 時代順。badge は「女帝」「三大悪女」などの目印、extra はサイト内の関連特集へのリンク
const WOMEN = [
  {
    id: "lvhou",
    name: "{{呂后|りょこう}}（{{呂雉|りょち}}）",
    period: "前漢（前2世紀）",
    badge: "三大悪女",
    key: "夫{{劉邦|りゅうほう}}の死後、15年にわたって漢を動かした",
    body:
      "漢を開いた{{劉邦|りゅうほう}}の皇后。{{劉邦|りゅうほう}}が死ぬと息子の{{恵帝|けいてい}}を立て、皇太后として実権を握った。{{劉邦|りゅうほう}}に愛された{{側室|そくしつ}}{{戚夫人|せきふじん}}の手足を切り落として「人{{彘|てい}}（人ブタ）」と呼ばせ、その子を毒殺した話はあまりに有名で、それを見た{{恵帝|けいてい}}は心を病んで政治を{{投|な}}げ出したという。" +
      "{{恵帝|けいてい}}の死後も幼い皇帝を立てて自ら政治を行い（{{臨朝称制|りんちょうしょうせい}}）、{{呂氏|りょし}}の一族を次々と王にした。前180年に{{呂后|りょこう}}が死ぬと、重臣たちが{{呂氏|りょし}}一族を{{滅|ほろ}}ぼし、{{文帝|ぶんてい}}が迎えられた。",
    fact: "司馬遷は『史記』で{{呂后|りょこう}}の{{伝|でん}}を皇帝と同じ「本紀」として立て、宮中の{{残酷|ざんこく}}さとは別に、天下の民は戦乱から解放されて安らかだったと評価している。",
    eraId: "westernhan",
    eventTitle: "呂后専権",
  },
  {
    id: "dengsui",
    name: "{{鄧綏|とうすい}}（{{和熹|わき}}{{鄧|とう}}皇后）",
    period: "後漢（2世紀初め）",
    key: "16年間国を支えた「賢い皇太后」",
    body:
      "後漢の{{和帝|わてい}}の皇后。105年に{{和帝|わてい}}が死ぬと、生まれて100日あまりの{{殤帝|しょうてい}}、続いて13歳の{{安帝|あんてい}}を立て、121年に死ぬまで16年間、皇太后として政治を行った。" +
      "{{洪水|こうずい}}や{{干|かん}}ばつ、{{羌|きょう}}族の反乱が続く苦しい時代に、宮中の{{贅沢|ぜいたく}}を{{削|けず}}って{{被災者|ひさいしゃ}}の救済にあて、学問も重んじた。紙を改良した{{宦官|かんがん}}{{蔡倫|さいりん}}を取り立てたのも{{鄧綏|とうすい}}である。",
    fact: "後漢では幼い皇帝が続いたため、{{鄧綏|とうすい}}のほかにも多くの皇太后が政治を行い、その一族（{{外戚|がいせき}}）と{{宦官|かんがん}}の争いが王朝を弱らせていった。",
    eraId: "easternhan",
    extra: { href: "/eunuchs#cailun", label: "{{宦官|かんがん}}{{蔡倫|さいりん}}について読む →" },
  },
  {
    id: "jianafeng",
    name: "{{賈南風|かなんぷう}}",
    period: "{{西晋|せいしん}}（3世紀末）",
    key: "{{権力争|けんりょくあらそ}}いで八王の乱に火をつけた皇后",
    body:
      "{{西晋|せいしん}}の{{恵帝|けいてい}}の皇后。夫の{{恵帝|けいてい}}は政治ができないほど{{暗愚|あんぐ}}だったといわれ、{{賈南風|かなんぷう}}は291年、皇族の力を借りて皇太后の一族{{楊氏|ようし}}を{{滅|ほろ}}ぼし、実権を握った。" +
      "その後も皇族や重臣を次々と{{陥|おとしい}}れ、自分の子ではない皇太子まで殺害したため、300年に皇族の{{司馬倫|しばりん}}に殺された。皇族どうしの殺し合いはここから本格化し（八王の乱）、{{西晋|せいしん}}は{{滅亡|めつぼう}}へと向かった。",
    fact: "",
    eraId: "westernjin",
    eventTitle: "八王の乱",
  },
  {
    id: "fengtaihou",
    name: "{{馮|ふう}}太后（{{文明|ぶんめい}}太后）",
    period: "{{北魏|ほくぎ}}（5世紀後半）",
    key: "{{孝文帝|こうぶんてい}}を育て、{{北魏|ほくぎ}}の大改革を進めた",
    body:
      "{{北魏|ほくぎ}}の{{文成帝|ぶんせいてい}}の皇后。夫の死後、皇太后として政治に関わり、孫の{{孝文帝|こうぶんてい}}が幼くして即位すると、490年に死ぬまで実権を握った。" +
      "土地を国が民に分け与える{{均田制|きんでんせい}}（485年）や、村の組織を整える{{三長制|さんちょうせい}}など、のちの{{隋|ずい}}・{{唐|とう}}にまで受け{{継|つ}}がれる制度を作った。{{孝文帝|こうぶんてい}}の{{漢化政策|かんかせいさく}}は、この祖母の改革の上に築かれている。",
    fact: "",
    eraId: "nanbei",
    eventTitle: "北魏の漢化政策",
  },
  {
    id: "dugu",
    name: "{{独孤|どっこ}}皇后",
    period: "{{隋|ずい}}（6世紀末）",
    key: "夫と並んで「二聖」と呼ばれた",
    body:
      "{{隋|ずい}}を建てた{{文帝|ぶんてい}}（{{楊堅|ようけん}}）の皇后。朝廷に出る{{文帝|ぶんてい}}と同じ{{輿|こし}}で宮殿へ向かい、政治の相談にもあずかったため、二人は「二聖」と呼ばれた。" +
      "{{文帝|ぶんてい}}に{{側室|そくしつ}}を持たせないことでも知られ、皇太子{{楊勇|ようゆう}}が{{側室|そくしつ}}を{{寵愛|ちょうあい}}すると{{嫌|きら}}って、質素にふるまっていた次男{{楊広|ようこう}}を{{後継|こうけい}}に{{推|お}}した。その{{楊広|ようこう}}こそが、のちに{{隋|ずい}}を{{滅|ほろ}}ぼす{{煬帝|ようだい}}である。",
    fact: "",
    eraId: "sui",
    eventTitle: "隋の建国",
    personName: "隋煬帝",
    personLabel: "{{煬帝|ようだい}}",
  },
  {
    id: "wuzetian",
    name: "{{武則天|ぶそくてん}}（{{則天武后|そくてんぶこう}}）",
    period: "{{唐|とう}}（7〜8世紀）",
    badge: "唯一の女帝",
    key: "中国史上ただ一人、皇帝として即位した女性",
    body:
      "{{太宗|たいそう}}の後宮に{{才人|さいじん}}として入り、次の{{高宗|こうそう}}の皇后となった。病気がちな{{高宗|こうそう}}に代わって政治を行い、{{高宗|こうそう}}の死後は息子の皇帝を次々と{{廃|はい}}して、690年、国号を「{{周|しゅう}}」と改めて自ら皇帝に即位した。" +
      "{{密告|みっこく}}を{{奨励|しょうれい}}し、{{酷吏|こくり}}を使って反対派を{{粛清|しゅくせい}}した一方で、科挙で家柄にとらわれず人材を登用し、{{狄仁傑|てきじんけつ}}のような名臣も育てた。705年、80歳を過ぎて退位させられ、唐が復活した。",
    fact: "夫{{高宗|こうそう}}と並んで{{葬|ほうむ}}られた{{乾陵|けんりょう}}には、功績を刻むはずの石碑に一文字も書かれていない「{{無字碑|むじひ}}」が立つ。評価は後世にゆだねる、という意味だったともいわれる。",
    eraId: "tang",
    eventTitle: "武則天",
    personName: "武則天",
    personLabel: "{{武則天|ぶそくてん}}",
    extra: { href: "/harem-ranks#tang", label: "{{才人|さいじん}}から皇后への出世を後宮の位で見る →" },
  },
  {
    id: "weihou",
    name: "{{韋|い}}皇后と{{太平公主|たいへいこうしゅ}}",
    period: "{{唐|とう}}（8世紀初め）",
    key: "第二の女帝をめざした女性たち",
    body:
      "{{武則天|ぶそくてん}}の退位後、息子の{{中宗|ちゅうそう}}の皇后{{韋氏|いし}}は、{{武則天|ぶそくてん}}にならって政治に口を出し、娘の{{安楽公主|あんらくこうしゅ}}は自分を「皇太女」にするよう父に求めた。710年に{{中宗|ちゅうそう}}が急死すると、{{韋|い}}皇后が毒殺したとうわさされた。" +
      "これに対し、{{武則天|ぶそくてん}}の娘{{太平公主|たいへいこうしゅ}}とおいの{{李隆基|りりゅうき}}が兵を挙げて{{韋|い}}皇后を殺した。しかし今度は{{太平公主|たいへいこうしゅ}}が、即位した{{李隆基|りりゅうき}}（{{玄宗|げんそう}}）と権力を争い、713年に自害に追いこまれた。",
    fact: "{{武則天|ぶそくてん}}と{{韋|い}}皇后の時代は、のちに「{{武韋|ぶい}}の{{禍|か}}」と呼ばれた。この混乱を収めた{{玄宗|げんそう}}のもとで、唐は「開元の治」と呼ばれる全盛期を{{迎|むか}}える。",
    eraId: "tang",
  },
  {
    id: "liue",
    name: "{{劉娥|りゅうが}}（{{章献|しょうけん}}皇后）",
    period: "{{北宋|ほくそう}}（11世紀前半）",
    key: "皇帝の礼服を着たが、女帝にはならなかった",
    body:
      "{{北宋|ほくそう}}の{{真宗|しんそう}}の皇后。もとは{{芸人|げいにん}}だったともいわれる低い身分から皇后に上りつめた。1022年に{{真宗|しんそう}}が死ぬと、幼い{{仁宗|じんそう}}に代わって11年間政治を行った。" +
      "{{武則天|ぶそくてん}}のように即位するよう勧める者もいたが、{{劉娥|りゅうが}}は「祖先にそむくことはできない」と退けた。ただ晩年には、皇帝だけが着る礼服で祖先の{{霊廟|れいびょう}}に参拝し、周囲を{{驚|おどろ}}かせている。",
    fact: "{{仁宗|じんそう}}の生母は{{劉娥|りゅうが}}ではなく{{侍女|じじょ}}の{{李氏|りし}}で、このことから生まれた「{{狸猫|りびょう}}、太子に{{換|か}}う」（生まれた皇子を{{山猫|やまねこ}}とすり{{替|か}}えた）という物語は、{{京劇|きょうげき}}やドラマの人気の題材になった。ただしすり{{替|か}}えは創作である。",
    eraId: "northernsong",
  },
  {
    id: "xiaotaihou",
    name: "{{蕭|しょう}}太后（{{蕭綽|しょうしゃく}}）",
    period: "{{遼|りょう}}（10〜11世紀）",
    key: "自ら軍を率いて{{北宋|ほくそう}}と戦った",
    body:
      "北方の{{契丹|きったん}}人の国{{遼|りょう}}の皇后で、夫の死後、12歳の息子{{聖宗|せいそう}}に代わって27年間国を治めた。{{北宋|ほくそう}}の{{楊業|ようぎょう}}を{{捕|と}}らえた986年の戦いの時期にも{{遼|りょう}}を率いており、{{楊家将|ようかしょう}}の物語では{{宿敵|しゅくてき}}として登場する。" +
      "1004年には自ら{{聖宗|せいそう}}とともに大軍を率いて{{北宋|ほくそう}}に{{攻|せ}}め{{込|こ}}み、{{北宋|ほくそう}}から毎年銀と{{絹|きぬ}}を受け取る「{{澶淵|せんえん}}の{{盟|めい}}」を結ばせた。この和約で両国の間には100年あまりの平和が続いた。",
    fact: "",
    eraId: "northernsong",
    eventTitle: "澶淵の盟",
    extra: { href: "/yangjiajiang", label: "{{楊家将|ようかしょう}}の物語を読む →" },
  },
  {
    id: "xiaozhuang",
    name: "{{孝荘文|こうそうぶん}}皇后",
    period: "{{清|しん}}（17世紀）",
    key: "二人の幼い皇帝を支えた清初の「国母」",
    body:
      "モンゴルの王族の出身で、清の{{ホンタイジ|ほんたいじ}}の妃。息子の{{順治帝|じゅんちてい}}が6歳で即位し、その{{順治帝|じゅんちてい}}も若くして死ぬと、今度は8歳の孫{{康熙帝|こうきてい}}を立てた。" +
      "自らは表に出て政治を行うことはなかったが、{{康熙帝|こうきてい}}の教育に力を注ぎ、権力を{{振|ふ}}るう重臣{{オボイ|おぼい}}を{{除|のぞ}}くときにも孫を支えた。清の最盛期を開いた{{康熙帝|こうきてい}}を育てた祖母として、中国では今も評価が高い。",
    fact: "皇太后が{{摂政|せっしょう}}の{{ドルゴン|どるごん}}と再婚したという「太后{{下嫁|かか}}」の話が広く知られるが、確かな記録はなく俗説とされる。",
    eraId: "qing",
    eventTitle: "康熙帝",
    personName: "康熙帝",
    personLabel: "{{康熙帝|こうきてい}}",
  },
  {
    id: "cixi",
    name: "{{西太后|せいたいこう}}（{{慈禧|じき}}太后）",
    period: "{{清|しん}}末（19世紀後半〜20世紀初め）",
    badge: "三大悪女",
    key: "約半世紀にわたって清の実権を握った",
    body:
      "{{咸豊帝|かんぽうてい}}の妃で、ただ一人の息子{{同治帝|どうちてい}}を産んだ。1861年に{{咸豊帝|かんぽうてい}}が死ぬと、{{東太后|とうたいこう}}・{{恭親王|きょうしんのう}}と組んで重臣たちを{{倒|たお}}し、6歳の{{同治帝|どうちてい}}の後ろで{{垂簾聴政|すいれんちょうせい}}を始めた。{{同治帝|どうちてい}}が19歳で死ぬと、4歳のおい{{光緒帝|こうしょてい}}を立てて、再び実権を握った。" +
      "1898年、{{光緒帝|こうしょてい}}が近代化の改革（{{戊戌|ぼじゅつ}}の{{変法|へんぽう}}）を始めると、わずか100日あまりでこれを{{潰|つぶ}}して皇帝を{{幽閉|ゆうへい}}した。1900年には義和団を後押しして列強に宣戦し、北京を{{占領|せんりょう}}されて西安へ{{逃|のが}}れた。1908年、{{光緒帝|こうしょてい}}が死んだ翌日に世を去り、その数年後に清は{{滅|ほろ}}んだ。",
    fact: "海軍の予算を{{頤和園|いわえん}}の再建に回したことが日清戦争の敗北につながった、とよくいわれる。一方で、{{洋務運動|ようむうんどう}}を認めて近代的な工場や軍を育てた面もあり、近年は評価の見直しも進んでいる。",
    eraId: "qing",
    eventTitle: "義和団事件",
  },
];

const RESOLVED = WOMEN.map((w) => {
  const eventSlug = w.eventTitle ? findEventSlug(w.eraId, w.eventTitle) : null;
  return {
    ...w,
    eventHref: eventSlug ? `/events/${eventSlug}` : ERAS.some((e) => e.id === w.eraId) ? `/eras/${w.eraId}` : null,
    personLink: w.personName ? personHref(w.personName) : null,
  };
});

const FAQ = [
  {
    q: "中国の女帝は何人いた？",
    a: "正式に皇帝として即位し、国を治めた女性は{{武則天|ぶそくてん}}ただ一人である。528年の{{北魏|ほくぎ}}で、生まれたばかりの皇女が男の子と{{偽|いつわ}}られて皇帝に立てられ、すぐに{{廃|はい}}された例があるが、ふつうは女帝に数えない。{{呂后|りょこう}}や{{西太后|せいたいこう}}は皇帝以上の権力を握ったが、あくまで皇太后として政治を行い、自ら即位はしていない。",
  },
  {
    q: "垂簾聴政（すいれんちょうせい）とは？",
    a: "皇帝が幼いときなどに、皇太后が代わって政治を行うこと。男性の{{臣下|しんか}}と直接顔を合わせないよう、玉座の後ろに{{簾|すだれ}}を垂らし、その向こうから政治を聞いたことからこう呼ばれる。漢代には「{{臨朝称制|りんちょうしょうせい}}」と呼ばれ、清末の{{西太后|せいたいこう}}がもっとも有名な例である。",
  },
  {
    q: "「中国三大悪女」は本当に悪女だった？",
    a: "日本では{{呂后|りょこう}}・{{武則天|ぶそくてん}}・{{西太后|せいたいこう}}の三人がよく「中国三大悪女」と呼ばれる。たしかに三人とも{{政敵|せいてき}}や{{側室|そくしつ}}に{{残酷|ざんこく}}な仕打ちをしたが、{{呂后|りょこう}}の時代は民の生活が安定し、{{武則天|ぶそくてん}}の時代には人口が増え、{{西太后|せいたいこう}}も清の立て直しを支えた面がある。歴史書を書いたのは「女性が政治をするのは国が乱れるもと」と考える男性の{{官僚|かんりょう}}たちだったため、悪い面が強調されてきたという指摘も多い。",
  },
  {
    q: "日本の女性天皇との違いは？",
    a: "日本では{{推古天皇|すいこてんのう}}から江戸時代の{{後桜町天皇|ごさくらまちてんのう}}まで、8人（10代）の女性天皇が即位している。中国で女帝が{{武則天|ぶそくてん}}一人だけだったのとは対照的である。偶然にも、{{武則天|ぶそくてん}}が皇帝に即位した690年は、日本で{{持統天皇|じとうてんのう}}が正式に即位した年でもあり、同じ年に日本と中国の両方で女性が頂点に立っていた。",
  },
];

const h2Style = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginTop: 36, marginBottom: 10, scrollMarginTop: 16 };
const pStyle = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 12 };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const smallLinkStyle = { ...linkStyle, fontSize: 12 };
const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };

function Badge({ text }) {
  return (
    <span
      style={{
        display: "inline-block",
        marginLeft: 8,
        padding: "1px 7px",
        fontSize: 10.5,
        fontWeight: 700,
        color: "#FBF8F0",
        backgroundColor: COLORS.vermilion,
        verticalAlign: "middle",
      }}
    >
      {text}
    </span>
  );
}

export default function WomenRulersPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国の女帝と権力を握った女性たち
        </h1>
        <p style={pStyle}>
          <RubyText
            text={
              "中国の長い歴史の中で、正式に皇帝となった女性は{{武則天|ぶそくてん}}ただ一人しかいない。しかし皇帝の母や妻として、皇帝に代わって国を動かした女性は数多くいた。" +
              "幼い皇帝の後ろで政治を行った皇太后、皇帝と並んで政治に加わった皇后、自ら軍を率いた太后まで、時代順に紹介する。"
            }
          />
        </p>

        <div style={{ ...cardStyle, padding: "12px 14px", marginBottom: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: COLORS.gold, marginBottom: 6 }}>結論</div>
          <div style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.ink }}>
            <div>
              <span style={{ fontWeight: 700 }}>中国唯一の女帝：</span>
              <RubyText text="{{武則天|ぶそくてん}}（{{唐|とう}}、690〜705年に在位）" />
            </div>
            <div>
              <span style={{ fontWeight: 700 }}>中国三大悪女：</span>
              <RubyText text="{{呂后|りょこう}}・{{武則天|ぶそくてん}}・{{西太后|せいたいこう}}" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2" style={{ marginBottom: 8 }}>
          {RESOLVED.map((w) => (
            <a key={w.id} href={`#${w.id}`} className="hover:opacity-90" style={{ ...cardStyle, padding: "8px 10px" }}>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink }}>
                <RubyText text={w.name.replace(/（.*$/, "")} />
              </div>
              <div style={{ fontSize: 10.5, color: COLORS.gold, marginTop: 2 }}>
                <RubyText text={w.period} />
              </div>
            </a>
          ))}
        </div>
        <nav className="flex gap-x-4 gap-y-1 flex-wrap" style={{ fontSize: 12, marginBottom: 8 }}>
          <a href="#list" style={linkStyle}>権力を握った女性（時代順）</a>
          <a href="#faq" style={linkStyle}>垂簾聴政・三大悪女・日本の女性天皇</a>
        </nav>

        <h2 id="list" style={h2Style}>権力を握った中国の女性たち（時代順）</h2>
        <div className="flex flex-col gap-4">
          {RESOLVED.map((w, i) => (
            <div key={w.id} id={w.id} style={{ ...cardStyle, padding: "14px 16px", scrollMarginTop: 16 }}>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink }}>
                  <span style={{ color: COLORS.gold, fontSize: 12, marginRight: 8 }}>{i + 1}</span>
                  <RubyText text={w.name} />
                  {w.badge && <Badge text={w.badge} />}
                </h3>
                <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>
                  <RubyText text={w.period} />
                </span>
              </div>
              <p style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>
                <RubyText text={w.key} />
              </p>
              <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                <RubyText text={w.body} />
              </p>
              {w.fact && (
                <div style={{ marginTop: 10, padding: "8px 10px", backgroundColor: "#F3ECD9", fontSize: 12, lineHeight: 1.8, color: COLORS.inkSoft }}>
                  <RubyText text={w.fact} />
                </div>
              )}
              <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ marginTop: 10 }}>
                {w.eventHref && (
                  <a href={w.eventHref} style={smallLinkStyle}>
                    {w.eventTitle ? "関連する出来事を年表で読む →" : "この時代を年表で読む →"}
                  </a>
                )}
                {w.personLink && (
                  <a href={w.personLink} style={smallLinkStyle}>
                    <RubyText text={`${w.personLabel}の人物ページ →`} />
                  </a>
                )}
                {w.extra && (
                  <a href={w.extra.href} style={smallLinkStyle}>
                    <RubyText text={w.extra.label} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 id="faq" style={h2Style}>女帝・皇太后についてよくある疑問</h2>
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
            <RubyText text="皇后や{{妃|ひ}}たちの後宮での位、歴史に名を残した四大美女、後宮の女性を{{描|えが}}いたドラマの史実も解説しています。" />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/harem-ranks" variant="solid">後宮の位一覧</NavButton>
            <NavButton href="/four-beauties" variant="outline">中国四大美女とは</NavButton>
            <NavButton href="/dramas" variant="outline">中国歴史ドラマの史実</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/women-rulers" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
