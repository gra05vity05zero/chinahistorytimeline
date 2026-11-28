import { ERAS, stripRuby, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter, buildAmazonUrl } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection, InArticleAd } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";
import { bilingualAlternates } from "@/lib/en";
import { PageJsonLd } from "@/components/JsonLd";

const title = "中国歴史映画おすすめ27選｜時代順に史実との違いを解説";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "『HERO』『レッドクリフ』『キングダム』『ラストエンペラー』から『活きる』『紅いコーリャン』などの中国映画の名作まで、中国の歴史を描いた映画27本を描かれる時代の順に紹介。どの出来事が舞台か、どこまで史実でどこが創作かを、史実度の目安つきで解説します。";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/history-movies", "ja"),
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/history-movies", image: { title: "中国歴史映画おすすめ27選", subtitle: "時代順に史実との違いを解説" } }),
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

// 作品は「作中で描かれる時代」の古い順。year は本国での公開年。
// score は史実度の目安（5: ほぼ史実どおり／1: 時代設定だけ借りた創作）。主要人物の実在・主要事件・時系列の3点で判断した当サイトの目安。
// eventTitle は年表の出来事へのリンク、personName は人物ページへのリンクに使う（見つからなければ出さない）。
// 作品の画像は products の Amazon 商品画像（パッケージ）だけを使い、セリフは引用しない。
// products の ASIN・画像IDは amazon.co.jp で実在を確認したものだけを入れる（推測で書かない）。
const GROUPS = [
  {
    id: "ancient",
    heading: "春秋戦国・{{秦|しん}}・{{楚漢|そかん}}を描いた映画",
    films: [
      {
        id: "bokko",
        products: [{ label: "DVD", asin: "B000R17JM4", image: "51NX6mn+-BL" }],
        title: "{{墨攻|ぼっこう}}",
        original: "{{墨攻|ぼっこう}}",
        year: "2006",
        director: "ジェイコブ・チャン（{{張之亮|ちょうしりょう}}）",
        era: "戦国時代",
        score: 2,
        setting: "{{墨家|ぼっか}}の守城術",
        body:
          "{{趙|ちょう}}の大軍に{{狙|ねら}}われた小国・{{梁|りょう}}に、{{墨家|ぼっか}}の{{革離|かくり}}がたった一人で{{駆|か}}けつけ、城を守る{{策|さく}}を授ける。原作は{{酒見賢一|さけみけんいち}}の小説と{{森秀樹|もりひでき}}の漫画で、日本・中国・香港・韓国の合作。戦闘シーンは{{攻城|こうじょう}}兵器と防御の工夫が中心で、戦国時代の戦争の{{雰囲気|ふんいき}}をつかみやすい。",
        diff:
          "{{梁|りょう}}の城と{{革離|かくり}}は架空。ただし「侵略戦争を認めず（{{非攻|ひこう}}）、攻められた側を守る」という{{墨家|ぼっか}}の思想と、城を守る技術に通じた集団だったことは史実で、『{{墨子|ぼくし}}』には守城の方法を記した{{篇|へん}}が残っている。",
        eraId: "zhanguo",
        eventTitle: "諸子百家",
      },
      {
        id: "kingdom",
        products: [{ label: "Blu-ray＆DVD", asin: "B07VN6KFJC", image: "81j6RRh9KsL" }],
        title: "キングダム",
        original: "キングダム",
        year: "2019",
        director: "{{佐藤信介|さとうしんすけ}}",
        era: "戦国時代末期（{{秦|しん}}）",
        score: 2,
        setting: "若き{{秦王|しんおう}}・{{政|せい}}と王弟{{成蟜|せいきょう}}の反乱",
        body:
          "{{原泰久|はらやすひさ}}の漫画を実写化した日本映画。戦争孤児の{{信|しん}}が、のちの{{始皇帝|しこうてい}}・{{嬴政|えいせい}}と出会い、王弟{{成蟜|せいきょう}}に奪われた王都{{咸陽|かんよう}}を取り戻すまでを描く。2024年の『大将軍の帰還』まで4作が公開され、{{馬陽|ばよう}}の戦いや{{王騎|おうき}}の最期へと物語が進む。",
        diff:
          "{{信|しん}}のモデルは{{秦|しん}}の将軍{{李信|りしん}}、{{楊端和|ようたんわ}}や{{王騎|おうき}}（{{王齮|おうき}}）も『史記』に名前がある。一方、{{漂|ひょう}}や{{河了貂|かりょうてん}}は創作。史実の{{成蟜|せいきょう}}の反乱は前239年、{{趙|ちょう}}を攻める途中で起こしたもので、王都を{{乗|の}}っ取ったという記録はない。",
        eraId: "zhanguo",
        eventTitle: "戦国の終結",
        extra: { href: "/kingdom", label: "『キングダム』と史実を詳しく →" },
      },
      {
        id: "assassin",
        products: [{ label: "DVD", asin: "B002TUEW8U", image: "91iSPobEEYL" }],
        title: "{{始皇帝|しこうてい}}暗殺",
        original: "{{荊軻刺秦王|けいかしいしんおう}}",
        year: "1998",
        director: "チェン・カイコー（{{陳凱歌|ちんがいか}}）",
        era: "戦国時代末期（{{秦|しん}}）",
        score: 3,
        setting: "{{荊軻|けいか}}による{{秦王|しんおう}}暗殺未遂（前227年）",
        body:
          "天下統一を目指す{{秦王|しんおう}}{{政|せい}}と、{{燕|えん}}から送りこまれた刺客{{荊軻|けいか}}、二人の間で{{揺|ゆ}}れる{{趙|ちょう}}の女性を描く大作。{{嫪毐|ろうあい}}の反乱や{{呂不韋|りょふい}}が{{政|せい}}の実の父だという{{噂|うわさ}}など、『史記』に記された宮廷の{{醜聞|しゅうぶん}}も取りこんでいる。",
        diff:
          "{{荊軻|けいか}}が{{燕|えん}}の太子{{丹|たん}}の依頼で、{{樊於期|はんおき}}の首と{{督亢|とくこう}}の地図を{{献上|けんじょう}}すると見せかけて{{秦王|しんおう}}に{{迫|せま}}った筋は『史記』{{刺客列伝|しかくれつでん}}どおり。ヒロインの女性と、{{秦王|しんおう}}が{{燕|えん}}を攻める口実のために刺客を{{招|まね}}こうとしたという設定は創作。",
        eraId: "qin",
        eventTitle: "中国統一",
        personName: "始皇帝",
        personLabel: "{{始皇帝|しこうてい}}",
      },
      {
        id: "hero",
        products: [{ label: "Blu-ray", asin: "B00BG54QAI", image: "51D-6gsPYPL" }],
        title: "{{英雄|えいゆう}} -HERO-",
        original: "{{英雄|えいゆう}}",
        year: "2002",
        director: "チャン・イーモウ（{{張芸謀|ちょうげいぼう}}）",
        era: "戦国時代末期（{{秦|しん}}）",
        score: 1,
        setting: "{{秦王|しんおう}}を{{狙|ねら}}う刺客たちの物語",
        body:
          "{{秦王|しんおう}}を{{狙|ねら}}う3人の刺客を討ったという男・{{無名|むめい}}が{{秦王|しんおう}}の前に通され、その手柄話が語り直されるたびに真相が変わっていく武侠映画。赤・青・白など場面ごとに色を変える映像で知られ、中国の武侠映画が世界でヒットするきっかけになった。",
        diff:
          "{{無名|むめい}}・{{残剣|ざんけん}}・{{飛雪|ひせつ}}・{{長空|ちょうくう}}はすべて架空の人物。{{秦王|しんおう}}が刺客に{{迫|せま}}られる場面は{{荊軻|けいか}}の暗殺未遂が下敷きになっている。「天下のために{{秦王|しんおう}}を殺さない」という結末は、統一のための武力を正当化しているという批判も受けた。",
        eraId: "qin",
        eventTitle: "中国統一",
      },
      {
        id: "last-supper",
        products: [{ label: "DVD", asin: "B00ML0OPVW", image: "71zEAGUJkrL" }],
        title: "{{項羽|こうう}}と{{劉邦|りゅうほう}} {{鴻門|こうもん}}の会",
        original: "{{王的盛宴|おうのせいえん}}",
        year: "2012",
        director: "ルー・チューアン（{{陸川|りくせん}}）",
        era: "{{秦|しん}}末〜前漢初め",
        score: 3,
        setting: "{{鴻門|こうもん}}の会（前206年）と{{楚漢|そかん}}戦争",
        body:
          "皇帝となった晩年の{{劉邦|りゅうほう}}が、悪夢と{{猜疑心|さいぎしん}}に苦しみながら、{{項羽|こうう}}と天下を争った日々と、運命を分けた{{鴻門|こうもん}}の会を思い返していく。{{項羽|こうう}}をダニエル・ウー、{{劉邦|りゅうほう}}をリウ・イエ、{{韓信|かんしん}}をチャン・チェンが演じた。",
        diff:
          "{{范増|はんぞう}}が{{項荘|こうそう}}に剣舞をさせて{{劉邦|りゅうほう}}を討とうとし、{{樊噲|はんかい}}が宴席に乗りこみ、{{劉邦|りゅうほう}}が{{厠|かわや}}に立つふりをして逃げ出す流れは『史記』{{項羽本紀|こううほんぎ}}どおり。{{韓信|かんしん}}が前196年に{{呂后|りょこう}}によって殺されたことも史実。ただし映画は{{鴻門|こうもん}}の会の裏側を独自に解釈しており、{{劉邦|りゅうほう}}を功臣たちを疑い続ける暗い皇帝として描いている。",
        eraId: "qin",
        eventTitle: "鴻門の会",
        personName: "項羽",
        personLabel: "{{項羽|こうう}}",
        extra: { href: "/chuhan-battles", label: "楚漢戦争 合戦マップ →" },
      },
    ],
  },
  {
    id: "sanguo",
    heading: "三国志・南北朝を描いた映画",
    films: [
      {
        id: "redcliff",
        products: [{ label: "Part I＆II Blu-ray", asin: "B002CATE7G", image: "71-tDmIyZML" }],
        title: "レッドクリフ Part I／Part II",
        original: "{{赤壁|せきへき}}",
        year: "2008・2009",
        director: "ジョン・ウー（{{呉宇森|ごうしん}}）",
        era: "後漢末・三国時代",
        score: 2,
        setting: "{{赤壁|せきへき}}の戦い（208年）",
        body:
          "{{曹操|そうそう}}の大軍に、{{劉備|りゅうび}}と{{孫権|そんけん}}が手を組んで立ち向かう{{赤壁|せきへき}}の戦いを2部作で描く。{{周瑜|しゅうゆ}}と{{諸葛亮|しょかつりょう}}の友情が軸で、{{八卦|はっけ}}の陣や{{十万本|じゅうまんぼん}}の矢を集める話、東南の風を待つ火攻めなど、小説『{{三国志演義|さんごくしえんぎ}}』の名場面が次々に出てくる。",
        diff:
          "矢を集める話や風を呼ぶ話は『演義』の創作。さらに映画では、{{孫権|そんけん}}の妹{{孫尚香|そんしょうこう}}が{{曹操|そうそう}}の陣に{{潜入|せんにゅう}}したり、{{周瑜|しゅうゆ}}の妻{{小喬|しょうきょう}}が一人で{{曹操|そうそう}}のもとへ向かって時間を{{稼|かせ}}いだりと、独自の創作が加わっている。正史『三国志』では、{{曹操|そうそう}}軍の{{敗因|はいいん}}として疫病の流行も大きかったとされる。",
        eraId: "sanguo",
        eventTitle: "赤壁の戦い",
        extra: { href: "/sanguo-battles", label: "三国時代 合戦マップ →" },
      },
      {
        id: "guanyu",
        products: [{ label: "Blu-ray", asin: "B007AD0U0A", image: "51kxID2KbiL" }],
        title: "三国志{{英傑伝|えいけつでん}} {{関羽|かんう}}",
        original: "{{関雲長|かんうんちょう}}",
        year: "2011",
        director: "アラン・マック、フェリックス・チョン（{{麦兆輝|ばくちょうき}}・{{荘文強|そうぶんきょう}}）",
        era: "後漢末",
        score: 2,
        setting: "{{関羽|かんう}}の千里行（200年）",
        body:
          "{{曹操|そうそう}}に{{降|くだ}}っていた{{関羽|かんう}}が、{{劉備|りゅうび}}のもとへ帰るために{{関所|せきしょ}}を次々に{{突破|とっぱ}}する「千里行」を描くアクション映画。{{関羽|かんう}}をドニー・イェンが演じ、{{青竜偃月刀|せいりゅうえんげつとう}}を使った{{狭|せま}}い場所での{{殺陣|たて}}が見どころ。",
        diff:
          "{{関羽|かんう}}が{{曹操|そうそう}}に{{降|くだ}}り、{{白馬|はくば}}の戦いで{{顔良|がんりょう}}を討った後に{{劉備|りゅうび}}のもとへ帰ったことは史実。しかし、5つの関所で6人の武将を斬った「{{五関六将|ごかんろくしょう}}」は『演義』の創作で、{{劉備|りゅうび}}に{{嫁|とつ}}ぐ予定の女性との恋は映画のオリジナル。",
        eraId: "sanguo",
        eventTitle: null,
        personName: "関羽",
        personLabel: "{{関羽|かんう}}",
      },
      {
        id: "mulan",
        products: [{ label: "アニメ版（1998）", asin: "B0G43VXXKB", image: "81ikbrV3ahL" }, { label: "実写版（2020）", asin: "B0FXWQZQ69", image: "71badMhoS5L" }],
        title: "ムーラン",
        original: "Mulan",
        year: "1998・2020",
        director: "1998年アニメ版：トニー・バンクロフト、バリー・クック／2020年実写版：ニキ・カーロ",
        era: "南北朝時代（{{北魏|ほくぎ}}）とされる",
        score: 1,
        setting: "{{花木蘭|かもくらん}}の伝説",
        body:
          "年老いた父の代わりに男装して{{従軍|じゅうぐん}}した娘・{{木蘭|もくらん}}の物語。ディズニーが1998年にアニメ映画、2020年に実写映画にした。もとになったのは北朝の民歌「{{木蘭辞|もくらんじ}}」で、中国では京劇やドラマでも古くから親しまれている。",
        diff:
          "{{木蘭|もくらん}}が実在したかどうかはわかっていない。「{{木蘭辞|もくらんじ}}」では君主が「{{可汗|かがん}}」と呼ばれ、北方の遊牧民と戦う内容から、{{鮮卑|せんぴ}}の{{北魏|ほくぎ}}と{{柔然|じゅうぜん}}の戦いが背景と考えられている。アニメ版の敵「フン族」や、実写版の魔女などは映画の創作。",
        eraId: "nanbei",
        eventTitle: "北魏による華北統一",
      },
    ],
  },
  {
    id: "tang",
    heading: "{{唐|とう}}・五代・宋を描いた映画",
    films: [
      {
        id: "detective-dee",
        products: [{ label: "DVD", asin: "B00F27D4WM", image: "81vOkI2RCsL" }],
        title: "王朝の{{陰謀|いんぼう}} {{判事|はんじ}}ディーと人体発火{{怪奇|かいき}}事件",
        original: "{{狄仁傑之通天帝国|てきじんけつのつうてんていこく}}",
        year: "2010",
        director: "ツイ・ハーク（{{徐克|じょこく}}）",
        era: "{{唐|とう}}（{{武則天|ぶそくてん}}の時代）",
        score: 2,
        setting: "{{武則天|ぶそくてん}}の即位（690年）",
        body:
          "中国史上ただ一人の女帝・{{武則天|ぶそくてん}}の即位式を目前に、{{洛陽|らくよう}}で役人が体の内側から燃え上がる怪事件が続く。{{投獄|とうごく}}されていた{{狄仁傑|てきじんけつ}}が呼び戻され、謎を追う。巨大な{{仏像|ぶつぞう}}「{{通天浮屠|つうてんふと}}」を舞台にしたミステリー仕立ての武侠映画で、続編も作られた。",
        diff:
          "{{狄仁傑|てきじんけつ}}は{{武則天|ぶそくてん}}に重く用いられた実在の{{宰相|さいしょう}}。名探偵「ディー判事」の人物像は、オランダの外交官ロバート・ファン・フーリックが書いた推理小説から広まった。人体発火事件や{{通天浮屠|つうてんふと}}は架空だが、{{武則天|ぶそくてん}}が{{洛陽|らくよう}}に巨大な{{明堂|めいどう}}や{{天枢|てんすう}}を建てたことは史実。",
        eraId: "tang",
        eventTitle: "武則天",
        personName: "武則天",
        personLabel: "{{武則天|ぶそくてん}}",
        extra: { href: "/women-rulers", label: "女帝・権力を握った女性 →" },
      },
      {
        id: "kukai",
        products: [{ label: "Blu-ray", asin: "B07DJ157X8", image: "91yBrgjk-bL" }],
        title: "空海-KU-KAI- 美しき{{王妃|おうひ}}の謎",
        original: "{{妖猫伝|ようびょうでん}}",
        year: "2017",
        director: "チェン・カイコー（{{陳凱歌|ちんがいか}}）",
        era: "{{唐|とう}}（9世紀初め）",
        score: 2,
        setting: "{{遣唐使|けんとうし}}の空海と{{楊貴妃|ようきひ}}の死の謎",
        body:
          "{{遣唐使|けんとうし}}として{{長安|ちょうあん}}に渡った若き{{僧|そう}}・空海が、詩人{{白楽天|はくらくてん}}（{{白居易|はくきょい}}）とともに、皇帝の急死と{{言葉|ことば}}を話す黒猫の怪事件を追ううちに、約50年前の{{楊貴妃|ようきひ}}の死の真相にたどり着く。原作は{{夢枕獏|ゆめまくらばく}}の小説『{{沙門|しゃもん}}空海{{唐|とう}}の国にて鬼と{{宴|うたげ}}す』。日中合作で、{{長安|ちょうあん}}の街が巨大なセットで再現された。",
        diff:
          "空海が804年に{{唐|とう}}へ渡ったこと、{{白居易|はくきょい}}が同じころ{{玄宗|げんそう}}と{{楊貴妃|ようきひ}}を{{詠|よ}}んだ『{{長恨歌|ちょうごんか}}』を書いたことは史実。ただし二人が会ったという記録はない。{{楊貴妃|ようきひ}}は安史の乱のさなかの756年、{{馬嵬|ばかい}}で殺されたというのが史書の記録で、映画の「真相」は創作。",
        eraId: "tang",
        eventTitle: "安史の乱",
        personName: "楊貴妃",
        personLabel: "{{楊貴妃|ようきひ}}",
      },
      {
        id: "golden-flower",
        products: [{ label: "Blu-ray", asin: "B001CPPUNO", image: "51fqONnOLFL" }],
        title: "{{王妃|おうひ}}の{{紋章|もんしょう}}",
        original: "{{満城尽帯黄金甲|まんじょうじんたいおうごんこう}}",
        year: "2006",
        director: "チャン・イーモウ（{{張芸謀|ちょうげいぼう}}）",
        era: "五代十国（{{後唐|こうとう}}という設定）",
        score: 1,
        setting: "架空の皇帝一家の{{愛憎劇|あいぞうげき}}",
        body:
          "重陽の節句を前にした宮廷で、皇帝が{{王妃|おうひ}}に毒を盛り、{{王妃|おうひ}}は反乱を{{企|くわだ}}てる。皇帝一家の秘密が暴かれていく{{悲劇|ひげき}}で、黄金の{{鎧|よろい}}の大軍と、宮殿を埋めつくす{{菊|きく}}の花の映像で知られる。",
        diff:
          "皇帝一家は架空で、物語のもとは中国の劇作家{{曹禺|そうぐう}}の{{戯曲|ぎきょく}}『{{雷雨|らいう}}』。原題の「{{満城尽帯黄金甲|まんじょうじんたいおうごんこう}}」は、{{唐|とう}}末に反乱を起こした{{黄巣|こうそう}}が{{菊|きく}}を{{詠|よ}}んだ詩の一句から取られている。",
        eraId: "wudai",
        eventTitle: "後唐の建国",
      },
      {
        id: "great-wall",
        products: [{ label: "Blu-ray", asin: "B07912ZQ3X", image: "51I2LoMtNtL" }],
        title: "グレートウォール",
        original: "{{長城|ちょうじょう}}",
        year: "2016",
        director: "チャン・イーモウ（{{張芸謀|ちょうげいぼう}}）",
        era: "宋代",
        score: 1,
        setting: "長城で怪物と戦う架空の軍団",
        body:
          "火薬を求めて中国へやってきた西洋の{{傭兵|ようへい}}が、60年に一度押し寄せる怪物「{{饕餮|とうてつ}}」と長城で戦う秘密の軍団に加わる。ハリウッドと中国の合作で、マット・デイモンが主演した。",
        diff:
          "{{饕餮|とうてつ}}は{{殷|いん}}・{{周|しゅう}}の青銅器に刻まれた{{文様|もんよう}}の怪物で、物語は完全なファンタジー。現在残る長城の多くは{{明|みん}}代に築かれたもので、宋は長城の大規模な{{修築|しゅうちく}}を行っていない。宋代に火薬兵器が実戦で使われ始めたことは史実。",
        eraId: "northernsong",
        eventTitle: null,
        extra: { href: "/great-wall", label: "万里の長城とは →" },
      },
      {
        id: "full-river-red",
        products: [{ label: "Blu-ray", asin: "B0GLXRRYKX", image: "81nn40FlQPL" }],
        title: "{{満江紅|まんこうこう}}／マンジャンホン",
        original: "{{満江紅|まんこうこう}}",
        year: "2023",
        director: "チャン・イーモウ（{{張芸謀|ちょうげいぼう}}）",
        era: "{{南宋|なんそう}}",
        score: 1,
        setting: "{{岳飛|がくひ}}の死後、{{秦檜|しんかい}}の屋敷で起きた殺人事件",
        body:
          "{{岳飛|がくひ}}の死から4年後、{{宰相|さいしょう}}{{秦檜|しんかい}}が金の使者と会う前夜に使者が殺され、下級兵士たちが期限つきで犯人と消えた密書を追う。ほぼ一夜の出来事を屋敷の中だけで描くミステリーで、2023年の{{春節|しゅんせつ}}に公開されて中国で大ヒットした。",
        diff:
          "{{秦檜|しんかい}}が金との和議を進め、{{岳飛|がくひ}}が1142年に処刑されたことは史実だが、事件と登場人物の多くは創作。題名の{{詞|し}}「{{満江紅|まんこうこう}}」（{{怒髪衝冠|どはつしょうかん}}）は{{岳飛|がくひ}}の作として有名だが、宋代の記録には見えず{{明|みん}}代になって現れるため、本当に{{岳飛|がくひ}}が作ったのかは議論がある。",
        eraId: "southernsong",
        eventTitle: "岳飛",
        personName: "岳飛",
        personLabel: "{{岳飛|がくひ}}",
      },
    ],
  },
  {
    id: "qing",
    heading: "清を描いた映画",
    films: [
      {
        id: "crouching-tiger",
        products: [{ label: "Blu-ray", asin: "B003CNVPEW", image: "516LwOECCQL" }],
        title: "グリーン・デスティニー",
        original: "{{臥虎蔵龍|がこぞうりゅう}}",
        year: "2000",
        director: "アン・リー（{{李安|りあん}}）",
        era: "清代",
        score: 1,
        setting: "名剣をめぐる武侠の物語",
        body:
          "引退を決めた剣士{{李慕白|りぼはく}}が{{託|たく}}した名剣「{{青冥剣|せいめいけん}}」が北京で盗まれ、貴族の娘{{玉嬌龍|ぎょくきょうりゅう}}の秘密が明らかになっていく。竹林の上で戦うワイヤーアクションが話題になり、アカデミー賞外国語映画賞を受賞した。",
        diff:
          "原作は民国期の武侠作家{{王度廬|おうどろ}}の小説で、登場人物はすべて架空。清代の北京の役人の{{屋敷|やしき}}や、{{旗人|きじん}}（満洲人の貴族）の娘が親の決めた結婚をさせられる設定には、当時の社会がよく表れている。",
        eraId: "qing",
        eventTitle: null,
      },
      {
        id: "opium-war",
        products: [{ label: "DVD", asin: "B00005FX1H", image: "31EnYFZwSqL" }],
        title: "{{阿片|あへん}}戦争",
        original: "{{鴉片戦争|あへんせんそう}}",
        year: "1997",
        director: "シエ・チン（{{謝晋|しゃしん}}）",
        era: "清（19世紀半ば）",
        score: 4,
        setting: "アヘン戦争（1840〜1842年）",
        body:
          "アヘンの{{密輸|みつゆ}}を取り締まるため{{広州|こうしゅう}}に送られた{{林則徐|りんそくじょ}}が、イギリス商人のアヘンを{{没収|ぼっしゅう}}して処分し、戦争へと進んでいく過程を描く。香港がイギリスから中国に返還された1997年に、それを記念して作られた。",
        diff:
          "{{林則徐|りんそくじょ}}が1839年に{{虎門|こもん}}で没収したアヘンを処分したことや、敗れた清が{{南京|なんきん}}条約で香港島を割譲したことなど、大筋は史実に沿う。人物どうしのやりとりなど細部には脚色があり、中国側から見た「屈辱の歴史」として描かれている。",
        eraId: "qing",
        eventTitle: "アヘン戦争",
        personName: "林則徐",
        personLabel: "{{林則徐|りんそくじょ}}",
      },
      {
        id: "warlords",
        products: [{ label: "Blu-ray", asin: "B002HP7UZ4", image: "917iBXh-vSL" }],
        title: "ウォーロード／男たちの{{誓|ちか}}い",
        original: "{{投名状|とうめいじょう}}",
        year: "2007",
        director: "ピーター・チャン（{{陳可辛|ちんかしん}}）",
        era: "清（19世紀後半）",
        score: 2,
        setting: "太平天国の乱と、ある高官の暗殺事件",
        body:
          "太平天国の乱のさなか、清軍の将軍と{{盗賊|とうぞく}}あがりの二人の男が義兄弟の契り（{{投名状|とうめいじょう}}）を結んで戦うが、出世と{{裏切|うらぎ}}りが三人の{{絆|きずな}}を壊していく。ジェット・リー、アンディ・ラウ、金城武が共演した。",
        diff:
          "もとになったのは、1870年に{{両江総督|りょうこうそうとく}}の{{馬新貽|ばしんい}}が{{張汶祥|ちょうぶんしょう}}に刺殺された「{{刺馬|しば}}」事件。この事件は動機がはっきりしないまま処理されたため、清末から{{芝居|しばい}}や小説の題材となり、映画の義兄弟の物語もそこから生まれた創作。",
        eraId: "qing",
        eventTitle: "太平天国",
      },
      {
        id: "55-days",
        products: [{ label: "Blu-ray", asin: "B07HC24YBQ", image: "71seG53uQ3L" }],
        title: "北京の55日",
        original: "55 Days at Peking",
        year: "1963",
        director: "ニコラス・レイ",
        era: "清末",
        score: 3,
        setting: "義和団事件と北京の公使館{{籠城|ろうじょう}}（1900年）",
        body:
          "「{{扶清滅洋|ふしんめつよう}}」を{{掲|かか}}げる義和団と清軍に包囲された北京の外国公使館区域で、各国の外交官や兵士が援軍の到着まで55日間持ちこたえるハリウッド映画。チャールトン・ヘストンが主演し、日本の{{柴五郎|しばごろう}}中佐を{{伊丹十三|いたみじゅうぞう}}が演じた。",
        diff:
          "公使館区域が約2か月包囲され、8か国の連合軍が北京に入って解放したことは史実。{{籠城|ろうじょう}}戦では{{柴五郎|しばごろう}}の指揮が各国から高く評価された。一方で主人公のアメリカ人将校と{{恋人|こいびと}}の話は創作で、欧米側の視点から描かれている点にも注意。",
        eraId: "qing",
        eventTitle: "義和団",
      },
      {
        id: "1911",
        products: [{ label: "Blu-ray", asin: "B007B5OV52", image: "81yXnGnH8VL" }],
        title: "1911",
        original: "辛亥革命",
        year: "2011",
        director: "チャン・リー（{{張黎|ちょうれい}}）",
        era: "清末〜中華民国",
        score: 4,
        setting: "辛亥革命（1911年）",
        body:
          "辛亥革命100周年を記念した作品で、ジャッキー・チェンが革命軍を率いた{{黄興|こうこう}}を演じ、出演100本目の記念作ともなった。{{黄花崗|こうかこう}}の{{蜂起|ほうき}}の失敗から、{{武昌|ぶしょう}}{{蜂起|ほうき}}、{{孫文|そんぶん}}の臨時大総統就任、{{袁世凱|えんせいがい}}との{{駆|か}}け{{引|ひ}}きまでを描く。",
        diff:
          "主な事件の流れは史実に近い。ただし、{{孫文|そんぶん}}と{{黄興|こうこう}}を英雄的に描き、清朝や{{袁世凱|えんせいがい}}側の事情は簡単にしか描いていない。{{孫文|そんぶん}}が{{武昌|ぶしょう}}{{蜂起|ほうき}}の知らせをアメリカで聞いたことなど、細部も記録に沿っている。",
        eraId: "qing",
        eventTitle: "辛亥革命",
        personName: "孫文",
        personLabel: "{{孫文|そんぶん}}",
      },
    ],
  },
  {
    id: "modern",
    heading: "中華民国・日中戦争を描いた映画",
    films: [
      {
        id: "last-emperor",
        products: [{ label: "4Kリマスター版 Blu-ray", asin: "B0CGPGYTX5", image: "81mKCB30neL" }],
        title: "ラストエンペラー",
        original: "The Last Emperor",
        year: "1987",
        director: "ベルナルド・ベルトルッチ",
        era: "清末〜中華人民共和国",
        score: 4,
        setting: "清最後の皇帝{{溥儀|ふぎ}}の生涯（1906〜1967年）",
        body:
          "2歳で即位した{{宣統帝|せんとうてい}}{{溥儀|ふぎ}}が、辛亥革命で退位したあとも{{紫禁城|しきんじょう}}で暮らし、満洲国の皇帝となり、戦後は戦犯として収容所で過ごして一市民として生涯を終えるまでを描く。西洋の映画で初めて{{紫禁城|しきんじょう}}での撮影が許された作品で、アカデミー賞で作品賞など9部門を受賞した。",
        diff:
          "{{溥儀|ふぎ}}の自伝『わが{{半生|はんせい}}』などをもとにしており、大きな流れは史実どおり。ただし、満洲国での{{溥儀|ふぎ}}を日本に利用された被害者として描く面が強い。{{坂本龍一|さかもとりゅういち}}が演じた{{甘粕正彦|あまかすまさひこ}}が最期に拳銃で自殺する場面も脚色で、実際の{{甘粕|あまかす}}は1945年に青酸カリで自殺した。",
        eraId: "roc",
        eventTitle: "満洲事変",
        personName: "溥儀",
        personLabel: "{{溥儀|ふぎ}}",
        extra: { href: "/emperors#qing", label: "清の歴代皇帝 →" },
      },
      {
        id: "red-sorghum",
        products: [{ label: "Blu-ray", asin: "B0DVJF31VV", image: "614Sdm5UPjL" }],
        title: "紅いコーリャン",
        original: "{{紅高粱|こうこうりょう}}",
        year: "1987",
        director: "チャン・イーモウ（{{張芸謀|ちょうげいぼう}}）",
        era: "中華民国（1920〜30年代）",
        score: 2,
        setting: "山東の農村と日本軍の侵攻",
        body:
          "山東省の{{高密|こうみつ}}で、{{高粱|コーリャン}}酒の酒造りを営むことになった女性と男たちの{{激|はげ}}しい生き方を、孫の語りで描く。チャン・イーモウの監督デビュー作で、ベルリン国際映画祭で金熊賞を受け、中国映画が世界に注目されるきっかけになった。原作はのちにノーベル文学賞を受ける{{莫言|ばくげん}}の小説。",
        diff:
          "登場人物と酒造りの物語は創作。後半では日本軍が村人を動員して{{高粱|コーリャン}}畑に道路を造らせ、残虐な処刑を行う場面が描かれる。日中戦争で日本軍が華北の農村から人や物資を{{徴発|ちょうはつ}}したことは史実だが、作中の出来事は特定の事件をもとにしたものではない。",
        eraId: "roc",
        eventTitle: "日中戦争",
      },
      {
        id: "yellow-earth",
        products: [{ label: "DVD", asin: "B00013F6YG", image: "81-3LhjVasL" }],
        title: "黄色い大地",
        original: "{{黄土地|こうどち}}",
        year: "1984",
        director: "チェン・カイコー（{{陳凱歌|ちんがいか}}）",
        era: "中華民国（1939年）",
        score: 3,
        setting: "{{陝西|せんせい}}省北部の農村と共産党の民謡集め",
        body:
          "1939年、共産党の八路軍の兵士が民謡を集めに{{陝西|せんせい}}省北部の貧しい村を訪れ、親の決めた結婚を{{控|ひか}}えた少女と出会う。撮影はチャン・イーモウ。中国映画の「第五世代」と呼ばれる監督たちの出発点となった作品で、黄土高原の広大な風景を印象的にとらえた。",
        diff:
          "人物は架空。共産党が{{延安|えんあん}}を中心とする地域で民謡を集め、新しい歌に作りかえて宣伝に使ったことや、農村で売買婚が行われていたことは当時の実情を反映している。共産党の兵士が少女を救えないまま終わる結末は、中国国内で議論を呼んだ。",
        eraId: "roc",
        eventTitle: "日中戦争",
      },
      {
        id: "devils",
        products: [{ label: "DVD", asin: "B082K8274H", image: "51fUMUoaEJL" }],
        title: "鬼が来た！",
        original: "{{鬼子来了|グイズライラ}}",
        year: "2000",
        director: "チアン・ウェン（{{姜文|きょうぶん}}）",
        era: "中華民国（1945年）",
        score: 2,
        setting: "日本の降伏前後の華北の村",
        body:
          "日本軍に占領された華北の村で、正体不明の男から日本兵の{{捕虜|ほりょ}}と通訳を無理やり預けられた村人たちの{{騒動|そうどう}}を、白黒の映像とブラックユーモアで描く。監督のチアン・ウェンが主演し、日本兵を{{香川照之|かがわてるゆき}}が演じた。カンヌ国際映画祭でグランプリを受賞したが、中国では上映が許可されなかった。",
        diff:
          "村と人物は架空。日本の降伏の前後、占領地の村人が日本軍・国民党軍・共産党軍のあいだで{{翻弄|ほんろう}}された状況が背景にある。日本兵も中国の村人も善悪の一方だけで描かない点が、当時の中国の抗日映画とは大きく異なる。",
        eraId: "roc",
        eventTitle: "日本の敗戦",
      },
      {
        id: "assembly",
        products: [{ label: "DVD", asin: "B0024AFDQA", image: "613QfYyygWL" }],
        title: "戦場のレクイエム",
        original: "{{集結号|しゅうけつごう}}",
        year: "2007",
        director: "フォン・シャオガン（{{馮小剛|ふうしょうごう}}）",
        era: "中華民国〜中華人民共和国",
        score: 3,
        setting: "国共内戦の{{淮海|わいかい}}戦役（1948年）",
        body:
          "国共内戦のさなか、共産党軍の中隊長が「集合ラッパが鳴るまで陣地を守れ」と命じられるが、ラッパは聞こえないまま部下47人を失う。生き残った彼は、戦死した部下たちが「行方不明」扱いされていると知り、名誉を取り戻すために戦後も奔走する。迫力ある戦闘シーンで中国で大ヒットした。",
        diff:
          "中隊長と部下たちは架空。国民党軍と共産党軍が{{徐州|じょしゅう}}周辺で戦い、内戦の勝敗を決めた{{淮海|わいかい}}戦役（1948〜1949年）は史実で、後半には朝鮮戦争の場面も出てくる。勝者の側の兵士の犠牲や名誉という、それまでの中国の戦争映画が描かなかった題材を扱った。",
        eraId: "roc",
        eventTitle: "国共内戦",
      },
    ],
  },
  {
    id: "prc",
    heading: "中華人民共和国を描いた映画",
    films: [
      {
        id: "farewell",
        products: [{ label: "4K修復版 Blu-ray", asin: "B0CGRHS95C", image: "91jZ6cvpg0L" }],
        title: "さらば、わが愛／{{覇王別姫|はおうべっき}}",
        original: "{{覇王別姫|はおうべっき}}",
        year: "1993",
        director: "チェン・カイコー（{{陳凱歌|ちんがいか}}）",
        era: "中華民国〜文化大革命",
        score: 3,
        setting: "京劇俳優の50年（1920年代〜1970年代）",
        body:
          "京劇の養成所で育った二人の俳優が、{{項羽|こうう}}と{{虞美人|ぐびじん}}の別れを演じる『{{覇王別姫|はおうべっき}}』で人気を得るが、日中戦争、国共内戦、中華人民共和国の成立、そして文化大革命の中で引き裂かれていく。カンヌ国際映画祭で最高賞のパルム・ドールを受賞した。",
        diff:
          "主人公たちは架空だが、京劇の厳しい修業、日本軍の占領下での上演、文化大革命で伝統劇の俳優が「批判大会」にかけられたことなど、背景はよく史実を反映している。中国では一時上映が禁止された。劇中劇の『{{覇王別姫|はおうべっき}}』は、{{楚漢|そかん}}戦争の{{垓下|がいか}}の戦いが題材。",
        eraId: "prc",
        eventTitle: "文化大革命",
        extra: { href: "/chuhan-battles", label: "楚漢戦争 合戦マップ →" },
      },
      {
        id: "to-live",
        products: [{ label: "HDリマスター版 Blu-ray", asin: "B07H4SQGXV", image: "81HHLG7cSIL" }],
        title: "活きる",
        original: "{{活着|フオジャ}}",
        year: "1994",
        director: "チャン・イーモウ（{{張芸謀|ちょうげいぼう}}）",
        era: "中華民国〜文化大革命",
        score: 3,
        setting: "ある家族の30年（1940年代〜1970年代）",
        body:
          "{{博打|ばくち}}で家の財産を失った男・{{福貴|フーグイ}}が、国共内戦、大{{躍進|やくしん}}、文化大革命と続く時代の波にもまれながら、家族とともに生きていく。原作は{{余華|よか}}の小説。カンヌ国際映画祭で審査員グランプリと男優賞（グォ・ヨウ）を受賞したが、中国では上映が禁止された。",
        diff:
          "家族は架空だが、土地改革で地主が処刑されたこと、大{{躍進|やくしん}}で村中の鍋や鉄を集めて製鉄したこと、文化大革命で医師が批判されて病院に経験の浅い学生しかいなかったことなど、庶民が体験した政治運動を具体的に描いている。",
        eraId: "prc",
        eventTitle: "大躍進",
      },
      {
        id: "hibiscus-town",
        products: [{ label: "DVD", asin: "B000GETXR6", image: "51KJQEF1GAL" }],
        title: "{{芙蓉鎮|ふようちん}}",
        original: "{{芙蓉鎮|ふようちん}}",
        year: "1986",
        director: "シエ・チン（{{謝晋|しゃしん}}）",
        era: "中華人民共和国（1963〜1979年）",
        score: 3,
        setting: "{{湖南|こなん}}の小さな町と文化大革命",
        body:
          "{{湖南|こなん}}省の小さな町で米豆腐の店を{{繁盛|はんじょう}}させた女性が、1963年に始まった政治運動で「新富農」とされて財産を{{没収|ぼっしゅう}}され、文化大革命で{{迫害|はくがい}}される。それでも生きぬき、1979年に名誉を回復されるまでを描く。原作は{{古華|こか}}の小説で、のちに監督としても知られるチアン・ウェンが共演した。",
        diff:
          "人物と町は架空。農村で「階級の敵」を摘発した四清運動、文化大革命での批判大会や強制労働、1978年以降の名誉回復（{{平反|へいはん}}）など、背景となる政治運動の流れは史実に沿っている。文化大革命の傷あとを描いた代表作の一つ。",
        eraId: "prc",
        eventTitle: "文化大革命",
      },
      {
        id: "youth",
        products: [{ label: "Blu-ray", asin: "B07VKMYM5H", image: "81HnN82pn-L" }],
        title: "{{芳華|ほうか}}-Youth-",
        original: "{{芳華|ほうか}}",
        year: "2017",
        director: "フォン・シャオガン（{{馮小剛|ふうしょうごう}}）",
        era: "中華人民共和国（1970年代〜）",
        score: 3,
        setting: "人民解放軍の文芸工作団と中越戦争（1979年）",
        body:
          "1970年代、人民解放軍で歌や踊りを披露する文芸工作団（文工団）に入った若者たちの青春と、その後の人生を描く。毛沢東の死、中越戦争、改革開放と時代が移るなかで、仲間たちはばらばらになっていく。原作・脚本は文工団にいた経験を持つ作家{{厳歌苓|げんかれい}}。",
        diff:
          "人物は架空だが、文工団は実在した組織で、作者自身の体験がもとになっている。1979年の中越戦争の戦闘場面や、改革開放後に文工団が解散していく様子も描かれる。中国では公開が直前に延期されたのち、上映された。",
        eraId: "prc",
        eventTitle: "改革開放",
      },
    ],
  },
];

const resolved = GROUPS.map((g) => ({
  ...g,
  films: g.films.map((f) => {
    const eventSlug = f.eventTitle ? findEventSlug(f.eraId, f.eventTitle) : null;
    return {
      ...f,
      eventHref: eventSlug ? `/events/${eventSlug}` : ERAS.some((x) => x.id === f.eraId) ? `/eras/${f.eraId}` : null,
      hasEvent: Boolean(eventSlug),
      personLink: f.personName ? personHref(f.personName) : null,
    };
  }),
}));
const ALL_FILMS = resolved.flatMap((g) => g.films);

// 冒頭の「目的別」ボックス。すぐ答えがほしい人向け
const PICKS = [
  { label: "史実を学ぶなら", ids: ["last-emperor", "1911", "opium-war"] },
  { label: "三国志が好きなら", ids: ["redcliff", "guanyu"] },
  { label: "{{始皇帝|しこうてい}}の時代なら", ids: ["assassin", "kingdom", "hero"] },
  { label: "映像美と武侠なら", ids: ["hero", "crouching-tiger", "golden-flower"] },
  { label: "中国映画の名作なら", ids: ["farewell", "to-live", "red-sorghum", "devils"] },
];

const FAQ = [
  {
    q: "史実に一番近い中国の歴史映画は？",
    a: "このページで史実度がもっとも高いのは、{{溥儀|ふぎ}}の自伝などをもとにした『ラストエンペラー』、辛亥革命の流れを追った『1911』、{{林則徐|りんそくじょ}}を主人公にした『{{阿片|あへん}}戦争』。いずれも近代の出来事で、記録が多く残っているぶん史実に沿って描きやすい。古代では、『史記』の{{荊軻|けいか}}の話を下敷きにした『{{始皇帝|しこうてい}}暗殺』が比較的史実に近い。",
  },
  {
    q: "三国志の映画で史実に近いものは？",
    a: "三国志の映画の多くは、正史『三国志』ではなく、明代の小説『{{三国志演義|さんごくしえんぎ}}』をもとにしている。『レッドクリフ』も『三国志{{英傑伝|えいけつでん}} {{関羽|かんう}}』も、名場面の多くは『演義』の創作か映画のオリジナル。史実の三国志を知りたい場合は、映画を入口にして正史との違いを調べるのがおすすめ。",
  },
  {
    q: "映画『キングダム』はどこまで史実？",
    a: "{{嬴政|えいせい}}（のちの{{始皇帝|しこうてい}}）や{{李信|りしん}}・{{王騎|おうき}}・{{楊端和|ようたんわ}}は実在の人物で、{{秦|しん}}が他の6国を{{滅|ほろ}}ぼして統一へ進む大きな流れも史実。しかし主人公{{信|しん}}の生い立ちや{{漂|ひょう}}との友情、戦いの具体的な展開はほとんどが創作。史書に残る{{李信|りしん}}の記録はごくわずかしかない。",
  },
  {
    q: "中国で作られた有名な歴史映画は？",
    a: "1980年代に「第五世代」と呼ばれる監督たちが登場し、チェン・カイコーの『黄色い大地』やチャン・イーモウの『紅いコーリャン』が海外の映画祭で注目された。1990年代には『さらば、わが愛／{{覇王別姫|はおうべっき}}』がカンヌのパルム・ドール、『活きる』がカンヌの審査員グランプリを受賞している。2000年代以降は『HERO』『{{王妃|おうひ}}の{{紋章|もんしょう}}』のような大作が増え、近年も『{{満江紅|まんこうこう}}／マンジャンホン』などがヒットしている。",
  },
  {
    q: "中国の歴史映画とドラマはどちらがおすすめ？",
    a: "映画は2〜3時間で一つの事件や人物を描くので、時代の雰囲気をつかむ入口に向いている。ドラマは50〜70話と長く、{{後宮|こうきゅう}}や宮廷の人間関係、一人の人物の生涯をじっくり描くものが多い。歴史ドラマについては、当サイトの「中国歴史ドラマの史実」で作品ごとに解説している。",
  },
  {
    q: "『HERO』や『王妃の紋章』の話は史実？",
    a: "どちらもチャン・イーモウ監督の作品で、登場する刺客や皇帝一家は架空の人物。『HERO』は{{荊軻|けいか}}による{{秦王|しんおう}}暗殺未遂を、『王妃の紋章』は劇作家{{曹禺|そうぐう}}の{{戯曲|ぎきょく}}『{{雷雨|らいう}}』を下敷きにしている。歴史の舞台を借りた武侠映画・宮廷劇として楽しむのがよい。",
  },
];

const h2Style = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginTop: 36, marginBottom: 10, scrollMarginTop: 16 };
const pStyle = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 12 };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const smallLinkStyle = { ...linkStyle, fontSize: 12 };
const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };

// Amazonの商品画像。image（商品画像ID）があればそれを、なければASINから商品画像を引く（/kingdom と同じ）
function productImage(p) {
  if (p.image) return `https://m.media-amazon.com/images/I/${p.image}._SL500_.jpg`;
  return `https://images-na.ssl-images-amazon.com/images/P/${p.asin}.09.MZZZZZZZ.jpg`;
}

function Stars({ score }) {
  return (
    <span aria-label={`史実度 5段階中${score}`} style={{ color: COLORS.vermilion, letterSpacing: 1 }}>
      {"★".repeat(score)}
      <span style={{ color: COLORS.mist }}>{"★".repeat(5 - score)}</span>
    </span>
  );
}

function FilmCard({ f }) {
  return (
    <div id={f.id} style={{ ...cardStyle, padding: "14px 16px", scrollMarginTop: 16 }}>
      <div className="flex flex-col sm:flex-row gap-4">
        {f.products?.length > 0 && <ProductImages title={f.title} products={f.products} />}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-x-3 flex-wrap">
            <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink }}>
              『<RubyText text={f.title} />』
            </h3>
            <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>{f.year}年</span>
          </div>
          <div style={{ fontSize: 11.5, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 4 }}>
            原題：<RubyText text={f.original} />　監督：<RubyText text={f.director} />
          </div>
          <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ fontSize: 12, marginTop: 6 }}>
            <span>
              <span style={{ color: COLORS.gold, fontWeight: 700, marginRight: 4 }}>時代</span>
              <RubyText text={f.era} />
            </span>
            <span>
              <span style={{ color: COLORS.gold, fontWeight: 700, marginRight: 4 }}>史実度</span>
              <Stars score={f.score} />
            </span>
          </div>
        </div>
      </div>
      <p style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>
        <RubyText text={`舞台：${f.setting}`} />
      </p>
      <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
        <RubyText text={f.body} />
      </p>
      <div style={{ marginTop: 10, padding: "8px 10px", backgroundColor: "#F3ECD9", fontSize: 12, lineHeight: 1.8, color: COLORS.inkSoft }}>
        <span style={{ fontWeight: 700, color: COLORS.gold, marginRight: 6 }}>史実との違い</span>
        <RubyText text={f.diff} />
      </div>
      <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ marginTop: 10 }}>
        {f.eventHref && (
          <a href={f.eventHref} style={smallLinkStyle}>
            {f.hasEvent ? "舞台の出来事を年表で読む →" : "この時代を年表で読む →"}
          </a>
        )}
        {f.personLink && (
          <a href={f.personLink} style={smallLinkStyle}>
            <RubyText text={`${f.personLabel}の人物ページ →`} />
          </a>
        )}
        {f.extra && (
          <a href={f.extra.href} style={smallLinkStyle}>
            <RubyText text={f.extra.label} />
          </a>
        )}
      </div>
    </div>
  );
}

// Amazonの商品画像（パッケージ）を大きく出し、画像とボタンの両方にアソシエイトリンクを付ける。
// 2商品ある作品（アニメ版・実写版など）は少し小さくして横に並べる
function ProductImages({ title, products }) {
  const w = products.length > 1 ? 124 : 160;
  return (
    <div className="flex gap-3 justify-center sm:justify-start shrink-0">
      {products.map((p) => (
        <a
          key={p.asin}
          href={buildAmazonUrl(p.asin)}
          target="_blank"
          rel="nofollow noreferrer sponsored"
          className="flex flex-col items-center gap-2 hover:opacity-90"
          style={{ width: w }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={productImage(p)}
            alt={`『${stripRuby(title)}』${p.label}のパッケージ画像`}
            loading="lazy"
            decoding="async"
            style={{ width: w, height: Math.round(w * 1.33), objectFit: "contain", border: `1px solid ${COLORS.mist}`, backgroundColor: "#FFFDF7" }}
          />
          <span
            className="px-2 py-1 text-center"
            style={{ width: "100%", fontSize: 11.5, fontWeight: 700, lineHeight: 1.4, color: COLORS.vermilion, border: `1px solid ${COLORS.vermilion}`, backgroundColor: "#FFFDF7" }}
          >
            {p.label}をAmazonで見る →
          </span>
        </a>
      ))}
    </div>
  );
}

export default function HistoryMoviesPage() {
  const byId = new Map(ALL_FILMS.map((f) => [f.id, f]));
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <PageJsonLd path="/history-movies" title={title} description={description} breadcrumbName="中国歴史映画おすすめ" faq={FAQ} />
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国歴史映画おすすめ27選
        </h1>
        <p style={pStyle}>
          <RubyText
            text={
              "中国の歴史を描いた映画で、史実を学ぶのに向いているのは『ラストエンペラー』『1911』『{{阿片|あへん}}戦争』など近代を描いた作品。『HERO』や『レッドクリフ』のような古代の大作は、史実を土台にしながらも物語の多くが創作である。また『活きる』『{{芙蓉鎮|ふようちん}}』など中国で作られた名作には、庶民が体験した政治運動を正面から描いた作品が多い。" +
              "このページでは、春秋戦国から改革開放まで、中国史を舞台にした映画27本を描かれる時代の順に並べ、どの出来事が舞台なのか、どこまでが史実でどこが創作なのかを紹介する。"
            }
          />
        </p>

        <InArticleAd />

        <div style={{ ...cardStyle, padding: "12px 14px", marginBottom: 12 }}>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13, fontWeight: 700, color: COLORS.vermilion, marginBottom: 6 }}>
            目的別のおすすめ
          </div>
          <dl style={{ display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 12, rowGap: 4, fontSize: 12.5, lineHeight: 1.75 }}>
            {PICKS.map((p) => (
              <div key={p.label} style={{ display: "contents" }}>
                <dt style={{ color: COLORS.gold, fontWeight: 700, whiteSpace: "nowrap" }}>
                  <RubyText text={p.label} />
                </dt>
                <dd style={{ color: COLORS.inkSoft }}>
                  {p.ids.map((id, i) => (
                    <span key={id}>
                      {i > 0 && "・"}
                      <a href={`#${id}`} style={linkStyle}>
                        『<RubyText text={byId.get(id).title} />』
                      </a>
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p style={{ fontSize: 11.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 14 }}>
          ※史実度（★5段階）は、主要人物が実在するか、主要な事件が史実か、時代の流れが記録に沿っているかをもとにした当サイトの目安です。年は本国での公開年です。
          <br />※ 一部のリンクはAmazonアソシエイトによるアフィリエイト広告を含みます。価格・在庫はリンク先でご確認ください。
        </p>

        <h2 id="list" style={h2Style}>時代順の作品一覧</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, lineHeight: 1.6 }}>
            <thead>
              <tr style={{ color: COLORS.gold, textAlign: "left", borderBottom: `1px solid ${COLORS.mist}` }}>
                <th style={{ padding: "6px 6px 6px 0", fontWeight: 700 }}>作品</th>
                <th style={{ padding: 6, fontWeight: 700 }}>舞台</th>
                <th style={{ padding: 6, fontWeight: 700, whiteSpace: "nowrap" }}>史実度</th>
              </tr>
            </thead>
            <tbody>
              {ALL_FILMS.map((f) => (
                <tr key={f.id} style={{ borderBottom: `1px solid ${COLORS.mist}`, color: COLORS.inkSoft }}>
                  <td style={{ padding: "6px 6px 6px 0" }}>
                    <a href={`#${f.id}`} style={linkStyle}>
                      『<RubyText text={f.title} />』
                    </a>
                    <span style={{ fontSize: 10.5, color: COLORS.gold, marginLeft: 4 }}>{f.year}</span>
                  </td>
                  <td style={{ padding: 6 }}>
                    <RubyText text={f.setting} />
                  </td>
                  <td style={{ padding: 6, whiteSpace: "nowrap" }}>
                    <Stars score={f.score} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {resolved.map((g) => (
          <section key={g.id}>
            <h2 id={g.id} style={h2Style}>
              <RubyText text={g.heading} />
            </h2>
            <div className="flex flex-col gap-4">
              {g.films.map((f) => (
                <FilmCard key={f.id} f={f} />
              ))}
            </div>
          </section>
        ))}

        <h2 id="faq" style={h2Style}>中国の歴史映画についてよくある疑問</h2>
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
            <RubyText text="長編の歴史ドラマや、漫画・ゲームで描かれた中国史もあわせてどうぞ。" />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/dramas" variant="solid">中国歴史ドラマの史実</NavButton>
            <NavButton href="/kingdom" variant="outline">『キングダム』と史実</NavButton>
            <NavButton href="/four-great-novels" variant="outline">中国四大奇書</NavButton>
            <NavButton href="/wuxia-games" variant="outline">武侠・神話ゲーム</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/history-movies" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
