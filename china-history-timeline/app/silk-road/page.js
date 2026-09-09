import { ERAS, stripRuby, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageThumb, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "シルクロードとは？歴史・ルートとオアシス都市を解説";
const fullTitle = `シルクロードとは？歴史・ルートとオアシス都市を解説 | ${SITE_NAME}`;
const description =
  "シルクロードとは何か、その名前の由来や歴史、ルート、行き交った交易品を解説。あわせて敦煌・トルファン・カシュガルなど沿線に栄えたオアシス都市を地図とともに紹介します。張騫・班超・玄奘・マルコ・ポーロら年表に登場する人物の逸話や、楼蘭の美女・敦煌文書の発見といった面白いエピソードも掲載。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/silk-road" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/silk-road" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

// 各都市の代表的な建造物・自然景観の写真（Wikimedia Commons）を掲載する。
// galleryには、莫高窟や火焔山など、その都市周辺で特に有名な遺跡・寺院・自然景観の写真を追加で並べる。
// eraId/eventTitleを指定した都市は、年表の該当イベント(部分一致)へのリンクも表示する。
// location: 現在の行政区分 / mapX,mapY: 下の地図(viewBox 0 0 500 366)上での位置。
// 実際の経緯度を/world-heritageと同じ図法（緯度補正付き正距円筒図法）で投影した座標を基準にしている。
const STOPS = [
  {
    name: "{{蘭州|らんしゅう}}（{{金城|きんじょう}}）",
    subtitle: "黄河が貫く河西回廊の玄関口",
    location: "甘粛省蘭州市",
    description:
      "長安から河西回廊へ向かう際に必ず黄河を渡らねばならない交通の要衝で、前漢代には「{{金城|きんじょう}}」の名で郡が置かれ、以後シルクロードを守る軍事拠点として発展した。現在は甘粛省の省都として栄え、市街を貫く黄河には、1907年にドイツの技術協力で架けられ黄河に現存する最古の橋として知られる{{中山橋|ちゅうざんきょう}}が今も残る。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Zhongshan_Bridge_in_Lanzhou.jpg",
    imageCaption: "黄河に架かる中山橋（1907年築、現存最古の黄河橋）",
    credit: "写真: Ken Marshall / Wikimedia Commons, CC BY 2.0",
    gallery: [
      {
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Mother_Huang_He_Lanzhou.jpg",
        caption: "黄河のほとりに立つ「黄河母親」像",
        credit: "写真: Brücke-Osteuropa / Wikimedia Commons, CC0",
      },
    ],
    mapX: 262,
    mapY: 182,
  },
  {
    name: "{{武威|ぶい}}（{{涼州|りょうしゅう}}）",
    subtitle: "河西回廊の東の入り口",
    location: "甘粛省武威市",
    description:
      "長安から河西回廊へ入る最初の要衝で、漢代には{{匈奴|きょうど}}から奪った要地として軍事・交易の拠点となった。市街には五代十国期に建てられた{{鳩摩羅什|くまらじゅう}}寺塔などの古刹が残り、今も交通の要所として賑わう。郊外の{{雷台漢墓|らいだいかんぼ}}から出土した銅製の「馬踏飛燕」（飛燕を踏む天馬）は、甘粛省のシンボルとしても知られる。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Wuwei_Wenmiao_2013.12.30_11-40-23.jpg",
    imageCaption: "武威市街に残る武威文庙（文昌宮牌坊）",
    credit: "写真: Zhangzhugang / Wikimedia Commons, CC BY-SA 4.0",
    gallery: [
      {
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Eastern_Han_Bronze_Galloping_Horse_(10095118805).jpg",
        caption: "雷台漢墓出土の「馬踏飛燕」（甘粛省博物館蔵）",
        credit: "写真: Gary Todd / Wikimedia Commons（パブリックドメイン）",
      },
      {
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/20240321_Aerial_view_of_Qilian_Mountains_01.jpg",
        caption: "武威の水源となる祁連山",
        credit: "写真: Windmemories / Wikimedia Commons, CC BY-SA 4.0",
      },
    ],
    mapX: 237,
    mapY: 163,
  },
  {
    name: "{{張掖|ちょうえき}}（{{甘州|かんしゅう}}）",
    subtitle: "虹色の丹霞地形で知られるオアシス",
    location: "甘粛省張掖市",
    description:
      "祁連山の雪解け水が育む緑豊かなオアシス都市で、マルコ・ポーロも訪れ長期滞在したと『東方見聞録』に記したと伝えられる。郊外に広がる張掖丹霞地質公園は、幾重にも色の異なる岩肌が波打つ絶景として近年の人気観光地となっている。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Zhangye_Danxia_2016.jpg",
    imageCaption: "張掖丹霞地質公園の虹色の岩肌",
    credit: "写真: Marcus Hsu / Wikimedia Commons, CC BY-SA 4.0",
    mapX: 220,
    mapY: 154,
  },
  {
    name: "{{嘉峪関|かよくかん}}",
    subtitle: "万里の長城 最西端の関所",
    location: "甘粛省嘉峪関市",
    description:
      "明代に築かれた万里の長城の西の果てに立つ関所で、その先はもう漢民族の版図の外という意味を込めて「天下第一雄関」と呼ばれた。東端の{{山海関|さんかいかん}}と対をなす存在で、当時の兵士や商隊が抱いた望郷・不安の思いが多くの詩に詠まれている。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/JiayuguanFort.jpg",
    imageCaption: "「天下第一雄関」嘉峪関の城楼",
    credit: "写真: Doron / Wikimedia Commons（CC BY-SA）",
    mapX: 204,
    mapY: 146,
  },
  {
    name: "{{敦煌|とんこう}}",
    subtitle: "シルクロード随一のオアシス都市",
    location: "甘粛省敦煌市",
    description:
      "{{張騫|ちょうけん}}の西域派遣を機に漢が経営を始めた最重要のオアシスで、東西の隊商が必ず経由した交易の要衝。断崖に穿たれた仏教石窟寺院{{莫高窟|ばっこうくつ}}（千仏洞）は、4世紀から14世紀にかけて千年にわたり彫り続けられた仏教美術の宝庫で、現在も中国有数の観光地として知られる。",
    eraId: "westernhan",
    eventTitle: "西域へ",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Jiucenglou_of_Mogao_Caves.jpg",
    imageCaption: "断崖に建つ莫高窟の象徴「九層楼」（第96窟）",
    credit: "写真: 慕尼黑啤酒 / Wikimedia Commons, CC BY-SA 3.0",
    gallery: [
      {
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Crescent_Lake_(41853077232).jpg",
        caption: "鳴沙山・月牙泉",
        credit: "写真: David Stanley / Wikimedia Commons, CC BY 2.0",
      },
      {
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Yumenguan.jpg",
        caption: "玉門関跡",
        credit: "写真: 张骐 / Wikimedia Commons, CC BY-SA 3.0",
      },
    ],
    mapX: 177,
    mapY: 143,
  },
  {
    name: "{{楼蘭|ろうらん}}古城",
    subtitle: "砂漠に消えた幻のオアシス",
    location: "新疆ウイグル自治区（ロプノール湖畔）",
    description:
      "漢代にはシルクロード南道の中継地として栄えたが、水源であったロプノール湖の移動・干上がりに伴い唐代以降に放棄され、タクラマカン砂漠の中に埋もれた「幻のオアシス都市」となった。20世紀初頭の探検家スヴェン・ヘディンらによる発見以来、今もその興亡の謎が人々を惹きつけている。現地は立入が厳しく制限されており、渦を巻くような特異な地形は「砂漠の大耳」とも呼ばれ、人工衛星写真で世界的に知られるようになった。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/楼兰佛塔2005_-_panoramio.jpg",
    imageCaption: "砂の中にそびえる楼蘭仏塔の遺構",
    credit: "写真: 許天喜 / Wikimedia Commons, CC BY-SA 3.0",
    gallery: [
      {
        imageUrl:
          "https://commons.wikimedia.org/wiki/Special:FilePath/楼兰古城_Loulan_city_China_Xinjiang_Urumqi_Welcome_you_to_tour_the_-_panoramio.jpg",
        caption: "砂に埋もれた建物の残骸",
        credit: "写真: 罗布泊 / Wikimedia Commons, CC BY 3.0",
      },
      {
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Helix_of_Lop_Nur_90.55E,_40.10N.jpg",
        caption: "「砂漠の大耳」ロプノール湖跡の衛星写真（NASA撮影）",
        credit: "写真: NASA / Wikimedia Commons（パブリックドメイン）",
      },
    ],
    mapX: 141,
    mapY: 139,
  },
  {
    name: "{{吐魯番|トルファン}}",
    subtitle: "灼熱の盆地に広がるブドウの都",
    location: "新疆ウイグル自治区吐魯番市",
    description:
      "海抜マイナス154mの盆地に位置し夏は灼熱となる一方、地下水路「{{坎児井|カレーズ}}」の灌漑によって豊かなブドウ畑が広がるオアシス。{{玄奘|げんじょう}}がインドへ向かう途上に立ち寄り、高昌国王の厚遇を受けたと伝えられる地でもあり、廃墟となった{{交河故城|こうがこじょう}}・{{高昌故城|こうしょうこじょう}}が今も残る。",
    eraId: "tang",
    eventTitle: "インド旅",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Turpan_old_district.jpg",
    imageCaption: "土壁の家々が続く吐魯番旧市街の路地",
    credit: "写真: Radosław Botev / Wikimedia Commons, CC BY 3.0",
    gallery: [
      {
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Jiaohe_City(Yarkhoto),Turpan,Xinjiang_HY2.jpg",
        caption: "交河故城の遺構",
        credit: "写真: Hiroooooo / Wikimedia Commons, CC BY-SA 3.0",
      },
      {
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Turpan-flaming-mountains-d02.jpg",
        caption: "火焔山（『西遊記』の舞台）",
        credit: "写真: Colegota / Wikimedia Commons, CC BY-SA 2.5",
      },
    ],
    mapX: 136,
    mapY: 117,
  },
  {
    name: "{{焉耆|えんき}}（カラシャール）",
    subtitle: "天山南路に栄えた仏教王国",
    location: "新疆ウイグル自治区焉耆回族自治県",
    description:
      "天山南路の要衝に栄えた仏教王国{{焉耆|えんき}}（カラシャール）は、西域三十六国の一つに数えられ、{{玄奘|げんじょう}}も『大唐西域記』にその繁栄ぶりを記している。近郊には西域最大の内陸淡水湖{{博斯騰湖|はくしとうこ}}（ボステン湖）が広がり、市街を流れる{{開都河|かいとが}}のほとりには今も緑豊かなオアシスの街並みが残る。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Kaidu_river_yanqi_xinjiang.jpg",
    imageCaption: "焉耆の市街を流れる開都河",
    credit: "写真: Rolf Müller / Wikimedia Commons, CC BY-SA 3.0",
    gallery: [
      {
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Soldiers_from_Karasahr,_8th_century.jpg",
        caption: "8世紀頃の焉耆の兵士を描いた壁画",
        credit: "Albert von Le Coq『Von Land und Leuten in Ostturkistan』(1926年) / Wikimedia Commons（パブリックドメイン）",
      },
    ],
    mapX: 113,
    mapY: 122,
  },
  {
    name: "{{亀茲|きじ}}（クチャ）",
    subtitle: "西域屈指の仏教王国",
    location: "新疆ウイグル自治区庫車市",
    description:
      "漢訳仏典で名高い訳経僧{{鳩摩羅什|くまらじゅう}}を輩出した西域屈指の仏教国。郊外の{{キジル千仏洞|きじるせんぶつどう}}は莫高窟よりも古い時期から開削が始まったとされる石窟群で、中央アジア色濃い壁画様式は今も研究者の関心を集めている。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Kizil_caves_2006_10_01.jpg",
    imageCaption: "断崖に開かれたキジル千仏洞",
    credit: "写真: Rolfmueller / Wikimedia Commons（CC BY-SA）",
    mapX: 89,
    mapY: 128,
  },
  {
    name: "{{喀什|カシュガル}}",
    subtitle: "中央アジアへの玄関口",
    location: "新疆ウイグル自治区カシュガル市",
    description:
      "パミール高原を越えれば中央アジアという、シルクロードが西方世界と接する最後の大オアシス。後漢の{{班超|はんちょう}}はこの一帯を含む西域諸国を服属させて交易路の安定を回復させた。中国最大級のモスク{{艾提尕爾清真寺|イディカーモスク}}が旧市街の中心にそびえ、周辺の日曜大バザールは今も活気ある市場として知られる。",
    eraId: "easternhan",
    eventTitle: "西域経営",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/2015-09-10-111321_-_Blick_zur_Altstadt_vom_Kashgar.jpg",
    imageCaption: "公園の池越しに望むカシュガル旧市街の街並み",
    credit: "写真: Zossolino / Wikimedia Commons, CC BY-SA 4.0",
    gallery: [
      {
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/20160513_China_6367_Kashgar_sRGB_(29700620670).jpg",
        caption: "黄色いタイルで彩られたイディカー・モスクの門",
        credit: "写真: Dan Lundberg / Wikimedia Commons, CC BY-SA 2.0",
      },
      {
        imageUrl:
          "https://commons.wikimedia.org/wiki/Special:FilePath/7,546m_Muztagh_Ata_3,600m_Lake_Karakul_Kyrgyz_Xinjiang_China_新疆_吉爾吉斯_喀拉庫勒湖_慕士塔格峰_-_panoramio.jpg",
        caption: "カシュガル郊外、パミール高原の慕士塔格峰",
        credit: "写真: Hiroki Ogawa / Wikimedia Commons, CC BY 3.0",
      },
    ],
    mapX: 37,
    mapY: 149,
  },
  {
    name: "{{和田|ホータン}}",
    subtitle: "崑崙の玉が集まる南のオアシス",
    location: "新疆ウイグル自治区和田市",
    description:
      "崑崙山脈の雪解け水が支えるシルクロード南道最大のオアシスで、古来「玉（ぎょく）」の産地として中国の宮廷に珍重されてきた。市内を流れる玉龍喀什河の川底から今も玉を探す人々の姿が見られ、養蚕や絨毯織りの伝統工芸でも知られる。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Khotan-mezquita-d04.jpg",
    imageCaption: "バザールに面したヘイィトカー・モスクと和田の街並み",
    credit: "写真: Colegota / Wikimedia Commons, CC BY-SA 2.5",
    gallery: [
      {
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Jade_collecting_under_Yurungkash_River_Bridge_in_Hotan.jpg",
        caption: "玉龍喀什河で玉を探す人々",
        credit: "写真: Voidvector / Wikimedia Commons, CC BY-SA 4.0",
        objectPosition: "center 75%",
      },
    ],
    mapX: 67,
    mapY: 171,
  },
];

function resolveStop(spec) {
  if (!spec.eraId || !spec.eventTitle) return { ...spec, eventSlug: null };
  const era = ERAS.find((e) => e.id === spec.eraId);
  const event = era?.events.find((ev) => stripRuby(ev.title).includes(spec.eventTitle));
  return { ...spec, eventSlug: event?.slug || null };
}

const RESOLVED = STOPS.map(resolveStop);

// シルクロードにまつわる逸話。年表イベントに対応するものはeraId/eventTitleでリンク先を特定し、
// 年表に対応イベントがない逸話（考古学的発見など）は独自の解説のみとする。
const ANECDOTES = [
  {
    title: "張騫、十年抑留の末の脱出行",
    text:
      "{{大月氏|だいげっし}}との同盟を求めて西域へ向かった{{張騫|ちょうけん}}は、道半ばで匈奴に捕らえられ、匈奴の女性を娶り子をもうけながらも十年以上にわたり抑留され続けた。それでも脱出の機会をうかがい続け、ついに西へ逃れて使命を果たそうとしたその執念が、後にシルクロードと呼ばれる交易路を開く端緒となった。",
    eraId: "westernhan",
    eventTitle: "西域へ",
  },
  {
    title: "「虎穴に入らずんば虎子を得ず」——班超の西域経営",
    text:
      "後漢の{{班超|はんちょう}}は、西域の小国で従者たちにこう説いたと伝えられる。「虎穴に入らずんば虎子を得ず」。少人数の手勢で敵陣に夜襲をかけるという大胆な決断を促したこの言葉は、故事成語として今も語り継がれている。班超はこうした果断な行動を重ねて西域諸国を次々に服属させ、一時中断していた交易路の安定を回復させた。",
    eraId: "easternhan",
    eventTitle: "西域経営",
  },
  {
    title: "甘英、幻のローマ行",
    text:
      "班超の部下{{甘英|かんえい}}は、遠くローマ帝国（{{大秦|たいしん}}）を目指して西へ派遣された最初の中国人使節として知られる。ペルシア湾岸まで到達したとも伝えられるが、渡航の危険を誇張して聞かされたためか、海を渡ることなく引き返したという。もし甘英が海を渡っていたら、東西交流の歴史はまた違った形になっていたかもしれない。",
    eraId: "easternhan",
    eventTitle: "西域経営",
  },
  {
    title: "玄奘、国禁を破っての単身インド行",
    text:
      "当時、唐から国外へ出ることは禁じられていたが、{{玄奘|げんじょう}}はより正確な仏典を求めて密かに国境を越え、砂漠と山岳を越える過酷な旅の末にインドへとたどり着いた。帰国後にまとめた旅行記『大唐西域記』は、後世の小説『西遊記』で三蔵法師が孫悟空らを伴い天竺を目指す物語のモデルとなったことでも知られている。",
    eraId: "tang",
    eventTitle: "インド旅",
  },
  {
    title: "獄中で語られた『東方見聞録』——「百万法螺吹きのマルコ」",
    text:
      "ヴェネツィアの商人マルコ・ポーロは、陸路シルクロードを経て元の宮廷に至り、クビライに仕えたと伝えられる。帰国後、ジェノヴァとの海戦で捕虜となった獄中において、同房の作家に東方での見聞を口述筆記させたのが『東方見聞録』の成立事情とされる。あまりに壮大な内容ゆえに誇張と疑われ、マルコ自身「百万法螺吹きのマルコ（イル・ミリオーネ）」とあだ名されたという逸話も残る。",
    eraId: "yuan",
    eventTitle: "東方見聞録",
  },
  {
    title: "紙、シルクロードを越えて世界へ",
    text:
      "後漢の宦官{{蔡倫|さいりん}}が改良した製紙法は、宮廷から民間へ広まった後、シルクロードを通じて西方へも伝播していった。8世紀にはイスラム世界に伝わり、さらに12世紀頃にはヨーロッパにまで達したとされ、紙の普及は世界の文明史そのものを大きく変えることになった。",
    eraId: "easternhan",
    eventTitle: "製紙法の改良",
  },
  {
    title: "楼蘭の美女——3800年前のミイラが語る東西交流",
    text:
      "1980年、楼蘭古城近郊のタクラマカン砂漠で、乾燥した気候により奇跡的に保存された約3800年前の女性のミイラが発見され、「楼蘭の美女」と呼ばれ話題となった。彫りの深い顔立ちや衣服の特徴から、当時すでに西方の人々がこの地に暮らしていた可能性が指摘されており、シルクロードが遥か古代から東西の人々が行き交う道であったことを物語っている。",
  },
  {
    title: "敦煌・蔵経洞の大発見と流出",
    text:
      "1900年、莫高窟を管理していた道士{{王円籙|おうえんろく}}は、壁の奥に隠された小さな洞窟「蔵経洞」を偶然発見した。中には4世紀から11世紀にわたる数万点もの経典・古文書が眠っていたが、その存在を知ったイギリスのスタインやフランスのペリオら西洋の探検家たちが次々と訪れ、貴重な文書の多くを買い取って持ち帰った。散逸した敦煌文書の行方と返還は、今なお文化財保護をめぐる議論の的となっている。",
  },
];

function resolveAnecdote(spec) {
  if (!spec.eraId || !spec.eventTitle) return { ...spec, eventSlug: null };
  const era = ERAS.find((e) => e.id === spec.eraId);
  const event = era?.events.find((ev) => stripRuby(ev.title).includes(spec.eventTitle));
  return { ...spec, eventSlug: event?.slug || null };
}

const RESOLVED_ANECDOTES = ANECDOTES.map(resolveAnecdote);

// 中国本土＋海南島の輪郭。/world-heritageと同じ海岸線データ（Natural Earthベースの簡略化済み国境ポリゴン、
// 経緯度→緯度補正付き正距円筒図法で投影）を再利用している。
const CHINA_OUTLINE =
  "M294.9,341.64L288.42,346.09L282.27,343.22L282.06,335.26L285.75,331.07L293.94,328.48L298.25,328.7L299.93,332.23L296.64,336.3L294.9,341.64Z " +
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";

const TAIWAN_OUTLINE =
  "M380.66,288.78L376.15,303.61L372.94,311.2L368.99,303.39L368.13,296.53L372.54,287.45L378.54,280.45L381.97,283.2L380.66,288.78Z";

// 起点・長安（現西安）。/china-capitalsの唐代長安と同じ座標。
const XIAN = { x: 292, y: 205 };

// 幹線ルート：長安〜蘭州〜河西回廊〜敦煌
const TRUNK_ROUTE = [XIAN, { x: 262, y: 182 }, { x: 237, y: 163 }, { x: 220, y: 154 }, { x: 204, y: 146 }, { x: 177, y: 143 }];
// 敦煌から分岐する天山南路（北道）：トルファン・焉耆・クチャ・カシュガル方面
const NORTH_ROUTE = [{ x: 177, y: 143 }, { x: 136, y: 117 }, { x: 113, y: 122 }, { x: 89, y: 128 }, { x: 37, y: 149 }];
// 敦煌から分岐する崑崙山北路（南道）：楼蘭・ホータン方面
const SOUTH_ROUTE = [{ x: 177, y: 143 }, { x: 141, y: 139 }, { x: 67, y: 171 }];

function toPoints(route) {
  return route.map((p) => `${p.x},${p.y}`).join(" ");
}

// タクラマカン砂漠のおおよその輪郭（周囲を天山南路・崑崙山北路のオアシス都市が取り囲む位置関係）。
const TAKLAMAKAN_DESERT =
  "M55,152 L72,136 L100,138 L128,140 L136,153 L118,169 L88,177 L65,166 Z";

// 漢代以降「西域」と呼ばれた領域のおおよその目安（東は玉門関・陽関、西はパミール高原、
// 北は天山山脈、南は崑崙山脈に囲まれたタリム盆地一帯）。現代の行政境界ではない。
const WESTERN_REGIONS_BOUNDARY =
  "M165,110 L130,103 L95,108 L50,120 L22,152 L35,180 L75,192 L120,178 L155,155 Z";

const REGION_LABELS = [
  { label: "内モンゴル自治区", x: 420, y: 90, anchor: "middle" },
  { label: "チベット", x: 195, y: 265, anchor: "middle" },
  { label: "台湾", x: 375, y: 296, dx: 10, dy: 4, anchor: "start" },
  { label: "海南島", x: 290, y: 337, dx: 0, dy: 17, anchor: "middle" },
];

function SilkRoadMap({ stops }) {
  return (
    <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        実際の海岸線をもとにした中国の位置関係図です。敦煌で天山南路（北道）と崑崙山北路（南道）に分かれ、
        いずれもパミール高原を越えて中央アジアへと続きます。朱色の番号は下の一覧のオアシス都市、
        砂色の部分はタクラマカン砂漠、金色の破線は漢代以降「西域」と呼ばれた領域のおおよその目安です。
      </p>
      <svg viewBox="0 0 500 366" style={{ width: "100%", maxHeight: 420, display: "block", margin: "0 auto" }}>
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />
        <path d={TAIWAN_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />

        <path
          d={WESTERN_REGIONS_BOUNDARY}
          fill={COLORS.gold}
          fillOpacity="0.07"
          stroke={COLORS.gold}
          strokeWidth="1.2"
          strokeDasharray="6 4"
          strokeLinejoin="round"
        />
        <text
          x="93"
          y="100"
          textAnchor="middle"
          style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 11, fontWeight: 700, fill: COLORS.gold, letterSpacing: "0.15em" }}
        >
          西域
        </text>

        <path d={TAKLAMAKAN_DESERT} fill="#D8B978" fillOpacity="0.6" stroke="#B99A4E" strokeWidth="1" strokeDasharray="1 2" strokeLinejoin="round" />
        <text
          x="95"
          y="154"
          textAnchor="middle"
          style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 9, fill: "#7A5C22", opacity: 0.9 }}
        >
          タクラマカン砂漠
        </text>

        {REGION_LABELS.map((r, i) => (
          <text
            key={`region-${i}`}
            x={r.x + (r.dx || 0)}
            y={r.y + (r.dy || 0)}
            textAnchor={r.anchor}
            style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 10.5, fill: COLORS.inkSoft, opacity: 0.85 }}
          >
            {r.label}
          </text>
        ))}

        <polyline points={toPoints(TRUNK_ROUTE)} fill="none" stroke={COLORS.vermilionSoft} strokeWidth="1.5" strokeDasharray="4 3" />
        <polyline points={toPoints(NORTH_ROUTE)} fill="none" stroke={COLORS.vermilionSoft} strokeWidth="1.5" strokeDasharray="4 3" />
        <polyline points={toPoints(SOUTH_ROUTE)} fill="none" stroke={COLORS.vermilionSoft} strokeWidth="1.5" strokeDasharray="4 3" />

        <circle cx={XIAN.x} cy={XIAN.y} r="4" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="1.4" />
        <text
          x={XIAN.x + 8}
          y={XIAN.y - 6}
          style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 10.5, fill: COLORS.inkSoft }}
        >
          長安（起点）
        </text>

        {stops.map((stop, i) => (
          <g key={i}>
            <circle cx={stop.mapX} cy={stop.mapY} r="7.5" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="1.4" />
            <text
              x={stop.mapX}
              y={stop.mapY}
              textAnchor="middle"
              dominantBaseline="central"
              style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 8.5, fontWeight: 700, fill: "#FBF8F0" }}
            >
              {i + 1}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function SilkRoadPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          シルクロードとは？
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 20 }}>
          <RubyText
            text={
              "前漢の{{張騫|ちょうけん}}が切り開き、後漢の{{班超|はんちょう}}が守り、唐の{{玄奘|げんじょう}}が旅したシルクロード。" +
              "長安を出て河西回廊を抜け、タクラマカン砂漠の縁に点在するオアシス都市を経て中央アジアへと至るこの道は、" +
              "絹だけでなく紙・仏教・文物が行き交う東西交流の大動脈でした。"
            }
          />
        </p>

        <div
          className="relative"
          style={{ width: "100%", height: 220, backgroundColor: "#EFE7D0", border: "1px solid #DCD3B8", overflow: "hidden", marginBottom: 24 }}
        >
          <HeritageThumb
            imageUrl="https://commons.wikimedia.org/wiki/Special:FilePath/Caravane_sur_la_Route_de_la_soie_-_Atlas_catalan.jpg"
            name="シルクロードを行くキャラバン"
            type="building"
          />
          <span
            className="absolute"
            style={{
              left: 0,
              right: 0,
              bottom: 0,
              padding: "18px 12px 8px",
              fontSize: 11.5,
              color: "#FBF8F0",
              background: "linear-gradient(to top, rgba(30,20,10,0.72), rgba(30,20,10,0))",
            }}
          >
            <RubyText text="シルクロードを行くキャラバン（『{{カタルーニャ地図|カタルーニャちず}}』1375年頃）" />
          </span>
        </div>
        <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: -18, marginBottom: 24 }}>
          {"アブラハム・クレスケス作 / Wikimedia Commons（パブリックドメイン）"}
        </div>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            シルクロードとは
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText
              text={
                "シルクロード（絹の道）とは、古代から中世にかけて中国と地中海世界を結んだ東西交易路の総称である。中国から西方へ" +
                "大量に運ばれた{{絹|きぬ}}に由来する呼び名で、19世紀のドイツ人地理学者{{フェルディナント・フォン・リヒトホーフェン|ふぇるでぃなんと・ふぉん・りひとほーふぇん}}が" +
                "「{{ザイデンシュトラーセン|Seidenstraßen}}」（絹の道）と名付けたのが始まりとされる。ある一本の決まった道があったわけではなく、" +
                "オアシスや都市を結ぶ複数のルートの総称である点も特徴である。"
              }
            />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText
              text={
                "起点として知られる{{長安|ちょうあん}}（現・西安）を出発し、河西回廊を抜けて{{敦煌|とんこう}}に至ると、道はタクラマカン砂漠の" +
                "北縁を行く天山南路（北道）と、南縁を行く崑崙山北路（南道）に分かれ、いずれも{{パミール高原|パミールこうげん}}を越えて中央アジア、" +
                "さらに西アジアや地中海世界へと続いた。開通のきっかけは、前漢の{{武帝|ぶてい}}の命を受けた{{張騫|ちょうけん}}が同盟相手を" +
                "求めて西域に派遣されたことにあるとされ、後漢の{{班超|はんちょう}}による西域経営を経て交易路として確立し、唐代に最盛期を迎えた。"
              }
            />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "シルクロードを通じて西方へは絹だけでなく紙や火薬の製法が伝わり、東方へは仏教やガラス製品、香辛料、{{汗血馬|かんけつば}}などが" +
                "もたらされた。単なる交易路にとどまらず、宗教・思想・文化が行き交う東西交流の大動脈として機能し、沿線には敦煌をはじめとする" +
                "数多くのオアシス都市が繁栄した。2014年には、中国・カザフスタン・キルギスにまたがるシルクロードの関連遺跡群がユネスコの" +
                "世界遺産に登録されている。ここでは、そうしたシルクロード沿いに栄えたオアシス都市を、地図や逸話とあわせて紹介する。"
              }
            />
          </p>
        </section>

        <div className="relative">
          <div className="sticky top-3 z-10">
            <SilkRoadMap stops={RESOLVED} />
          </div>

          <div className="flex flex-col gap-5">
            {RESOLVED.map((stop, i) => (
              <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
                <div className="relative" style={{ width: "100%", height: 260, backgroundColor: "#EFE7D0", overflow: "hidden" }}>
                  <HeritageThumb imageUrl={stop.imageUrl} name={stop.name} type="building" objectPosition={stop.objectPosition} />
                  <span
                    className="absolute flex items-center justify-center"
                    style={{
                      top: 10,
                      left: 10,
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      backgroundColor: COLORS.vermilion,
                      color: "#FBF8F0",
                      fontFamily: "'Noto Serif SC', serif",
                      fontSize: 13,
                      fontWeight: 700,
                      boxShadow: "0 1px 3px rgba(0,0,0,0.35)",
                    }}
                  >
                    {i + 1}
                  </span>
                  {stop.imageCaption && (
                    <span
                      className="absolute"
                      style={{
                        left: 0,
                        right: 0,
                        bottom: 0,
                        padding: "18px 12px 8px",
                        fontSize: 11.5,
                        color: "#FBF8F0",
                        background: "linear-gradient(to top, rgba(30,20,10,0.72), rgba(30,20,10,0))",
                      }}
                    >
                      {stop.imageCaption}
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 17, fontWeight: 700, color: COLORS.ink }}>
                      <RubyText text={stop.name} />
                    </span>
                  </div>
                  {stop.subtitle && <div style={{ fontSize: 12, color: COLORS.gold, marginTop: 3 }}>{stop.subtitle}</div>}
                  {stop.location && (
                    <div style={{ fontSize: 11.5, color: COLORS.vermilionSoft, marginTop: 3 }}>
                      <span aria-hidden>📍</span> {stop.location}
                    </div>
                  )}
                  <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 8 }}>
                    <RubyText text={stop.description} />
                  </p>
                  {stop.credit && <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 6 }}>{stop.credit}</div>}

                  {stop.gallery && stop.gallery.length > 0 && (
                    <div className="grid gap-2 mt-3" style={{ gridTemplateColumns: `repeat(${stop.gallery.length}, 1fr)` }}>
                      {stop.gallery.map((g, gi) => (
                        <div key={gi}>
                          <div
                            className="relative"
                            style={{ width: "100%", height: 130, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}
                          >
                            <HeritageThumb imageUrl={g.imageUrl} name={g.caption} type="building" objectPosition={g.objectPosition} />
                          </div>
                          <div style={{ fontSize: 11, color: COLORS.inkSoft, marginTop: 3 }}>{g.caption}</div>
                          {g.credit && <div style={{ fontSize: 9, color: COLORS.mist, marginTop: 1 }}>{g.credit}</div>}
                        </div>
                      ))}
                    </div>
                  )}

                  {stop.eventSlug && (
                    <a
                      href={`/events/${stop.eventSlug}`}
                      style={{
                        display: "inline-block",
                        fontSize: 12,
                        color: COLORS.vermilion,
                        textDecoration: "underline",
                        textDecorationColor: COLORS.mist,
                        marginTop: 10,
                      }}
                    >
                      関連する出来事を年表で読む →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            シルクロードにまつわる逸話
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 16 }}>
            交易路の開拓者たちが残した逸話から、20世紀の考古学的発見まで。シルクロードにまつわる、読んで面白いエピソードを集めました。
          </p>
          <div className="flex flex-col gap-3">
            {RESOLVED_ANECDOTES.map((a, i) => (
              <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 14 }}>
                <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                  {a.title}
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.75, color: COLORS.inkSoft }}>
                  <RubyText text={a.text} />
                </p>
                {a.eventSlug && (
                  <a
                    href={`/events/${a.eventSlug}`}
                    style={{
                      display: "inline-block",
                      fontSize: 12,
                      color: COLORS.vermilion,
                      textDecoration: "underline",
                      textDecorationColor: COLORS.mist,
                      marginTop: 8,
                    }}
                  >
                    関連する出来事を年表で読む →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            シルクロードの起点となった歴代の都や、道中の関所・城壁も別ページで紹介しています。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/china-capitals" variant="solid">歴代王朝の都一覧を見る</NavButton>
            <NavButton href="/china-castles" variant="outline">中国の城まとめを見る</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
