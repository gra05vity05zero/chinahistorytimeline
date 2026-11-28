import { ERAS, stripRuby, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection, InArticleAd, ArticleEndAd } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";
import { bilingualAlternates } from "@/lib/en";
import { PageJsonLd } from "@/components/JsonLd";

const title = "中国の暴君・暗君ランキング｜紂王・煬帝から徽宗・万暦帝まで国を傾けた皇帝を解説";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "中国史の暴君・暗君をランキング形式で紹介。酒池肉林の紂王、大運河と高句麗遠征の煬帝、売官の霊帝、芸術に溺れた徽宗、30年政務を放棄した万暦帝まで、何をして国を傾けたのかと、近年の再評価・異説もあわせて解説します。";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/tyrants", "ja"),
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/tyrants" }),
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

// 順位は「民や国に与えた被害の大きさ」と「史書での悪名」をもとにした編集部の目安。
// eventTitle は年表の出来事へのリンク、personName は人物ページへのリンクに使う（見つからなければ出さない）
const TYRANTS = [
  {
    id: "zhouwang",
    name: "{{紂王|ちゅうおう}}（{{帝辛|ていしん}}）",
    dynasty: "{{殷|いん}}",
    period: "前11世紀",
    key: "「酒池肉林」と{{炮烙|ほうらく}}の刑。暴君の代名詞",
    body:
      "{{殷|いん}}最後の王。『史記』によれば、もとは{{弁舌|べんぜつ}}に優れ、猛獣と素手で戦えるほどの力を持つ有能な王だったが、{{寵姫|ちょうき}}{{妲己|だっき}}を{{溺愛|できあい}}して政治を{{顧|かえり}}みなくなった。酒を池に満たし、肉を林のように{{吊|つ}}るして{{宴|うたげ}}を開いた「酒池肉林」はこの王の故事である。" +
      "{{諫|いさ}}める者は、油を塗った銅の柱を炭火の上に渡して歩かせる「{{炮烙|ほうらく}}の刑」に処し、叔父の{{比干|ひかん}}は「聖人の心臓には七つの穴があるというから見てみたい」と胸を裂かれたという。前1046年ごろ、{{周|しゅう}}の{{武王|ぶおう}}に{{牧野|ぼくや}}の戦いで敗れ、{{鹿台|ろくだい}}に火を放って自ら命を絶った。",
    fact: "{{殷|いん}}を{{倒|たお}}した{{周|しゅう}}が自らの正しさを示すため、悪行を大げさに伝えたとする見方は古くからある。孔子の弟子{{子貢|しこう}}も「{{紂|ちゅう}}の悪は言われるほどひどくはなかった」と述べている（『論語』）。実際には東方への遠征で国力を使い果たしたことが{{滅亡|めつぼう}}の大きな原因だったと考えられている。",
    eraId: "shang",
    eventTitle: "牧野の戦い",
    personName: "紂王",
    personLabel: "{{紂王|ちゅうおう}}",
  },
  {
    id: "yangdi",
    name: "{{煬帝|ようだい}}（{{楊広|ようこう}}）",
    dynasty: "{{隋|ずい}}",
    period: "在位604〜618年",
    key: "大運河と三度の{{高句麗|こうくり}}遠征で民を使い{{潰|つぶ}}した",
    body:
      "{{隋|ずい}}の2代皇帝。兄の皇太子{{楊勇|ようゆう}}を{{陥|おとしい}}れて{{後継|こうけい}}の座を奪い、父の文帝の死も{{煬帝|ようだい}}による殺害だったという説がある。即位すると新しい都・{{洛陽|らくよう}}の造営と大運河の{{開削|かいさく}}に{{数百万|すうひゃくまん}}人の民を{{動員|どういん}}し、完成した運河を豪華な{{竜船|りゅうせん}}で{{巡幸|じゅんこう}}した。" +
      "612年からは三度にわたって{{高句麗|こうくり}}に大軍を送ったが、いずれも失敗。重い{{負担|ふたん}}に{{耐|た}}えかねた民の反乱が全国に広がり、{{煬帝|ようだい}}は{{江都|こうと}}（{{揚州|ようしゅう}}）にこもって酒に{{溺|おぼ}}れた末、618年に近衛軍の{{宇文化及|うぶんかきゅう}}に殺された。{{隋|ずい}}は統一からわずか38年で{{滅|ほろ}}んだ。",
    fact: "「{{煬|よう}}」は「天に{{逆|さか}}らい民を{{虐|しいた}}げた」という意味の悪い{{諡|おくりな}}で、次の{{唐|とう}}がつけたもの。一方で、大運河はその後千年以上も中国の南北を結ぶ大動脈となり、科挙の整備も{{唐|とう}}に受け継がれた。「時代を先取りしすぎた皇帝」として再評価する声もある。日本の{{遣隋使|けんずいし}}が「日出づる{{処|ところ}}の天子」と書いた国書を受け取って不快に思ったのも{{煬帝|ようだい}}である。",
    eraId: "sui",
    eventTitle: "大運河",
    personName: "隋煬帝",
    personLabel: "{{煬帝|ようだい}}",
  },
  {
    id: "shihu",
    name: "{{石虎|せきこ}}",
    dynasty: "{{後趙|こうちょう}}（五胡十六国）",
    period: "在位334〜349年",
    key: "わが子さえ焼き殺した、五胡十六国きっての暴君",
    body:
      "{{羯|けつ}}族の{{石勒|せきろく}}が建てた{{後趙|こうちょう}}の3代目。{{石勒|せきろく}}の死後、その子を{{廃|はい}}して実権を握った。{{鄴|ぎょう}}や{{洛陽|らくよう}}に{{壮麗|そうれい}}な宮殿を次々と建て、そのたびに数十万人の民を{{徴発|ちょうはつ}}した。各地から美女を集めるために多くの家庭を引き{{裂|さ}}き、{{逆|さか}}らった者を容赦なく殺したと伝わる。" +
      "348年には、弟を殺した皇太子{{石宣|せきせん}}を、目をえぐり手足を切ったうえで焼き殺し、その妻子まで処刑した。翌年{{石虎|せきこ}}が死ぬと息子たちが殺し合い、{{後趙|こうちょう}}はわずか2年で{{滅|ほろ}}んだ。",
    fact: "記録を残したのは{{後趙|こうちょう}}と敵対した{{漢人|かんじん}}王朝側の史書（『{{晋書|しんじょ}}』）であり、異民族の君主を悪く描く傾向がある点には注意が必要。それでも残虐さの記録は具体的で数も多く、暴君とする評価はほぼ動かない。",
    eraId: "sixteenkingdoms",
    eventTitle: null,
  },
  {
    id: "huhai",
    name: "{{胡亥|こがい}}（{{二世皇帝|にせいこうてい}}）",
    dynasty: "{{秦|しん}}",
    period: "在位前210〜前207年",
    key: "兄弟を皆殺しにし、わずか3年で{{秦|しん}}を{{崩壊|ほうかい}}させた",
    body:
      "{{始皇帝|しこうてい}}の末子。{{始皇帝|しこうてい}}が旅の途中で死ぬと、{{趙高|ちょうこう}}と{{李斯|りし}}が遺言を書きかえ、正統な{{後継者|こうけいしゃ}}の{{扶蘇|ふそ}}を自害させて{{胡亥|こがい}}を皇帝に立てた。即位後は地位を{{脅|おびや}}かされるのを{{恐|おそ}}れて兄弟12人と姉妹10人を処刑し、古くからの重臣も次々と殺した。" +
      "{{阿房宮|あぼうきゅう}}や{{始皇帝陵|しこうていりょう}}の工事を続けて民の負担はさらに重くなり、前209年に{{陳勝|ちんしょう}}・{{呉広|ごこう}}の乱が起きる。政治は{{趙高|ちょうこう}}に任せきりで、{{鹿|しか}}を「馬」と言われても{{真偽|しんぎ}}を確かめられなかった（{{指鹿為馬|しろくいば}}）。最後は{{趙高|ちょうこう}}に{{迫|せま}}られて自殺した。",
    fact: "残虐さの多くは{{趙高|ちょうこう}}の{{入|い}}れ{{知恵|ぢえ}}とされ、{{胡亥|こがい}}は「暴君」と「{{操|あやつ}}られた暗君」の両方の顔を持つ。2013年に見つかった{{竹簡|ちっかん}}（{{益陽|えきよう}}{{兎子山|とすざん}}{{秦簡|しんかん}}）には、{{胡亥|こがい}}が「{{始皇帝|しこうてい}}の遺言を受けて即位した」と宣言する{{詔書|しょうしょ}}が書かれており、『史記』の{{簒奪|さんだつ}}説を疑う研究者もいる。",
    eraId: "qin",
    eventTitle: "陳勝",
  },
  {
    id: "jie",
    name: "{{桀|けつ}}",
    dynasty: "夏",
    period: "前16世紀ごろとされる",
    key: "{{紂王|ちゅうおう}}と並び「{{桀紂|けっちゅう}}」と呼ばれる元祖暴君",
    body:
      "中国最古の王朝とされる夏の最後の王。美女{{妺喜|ばっき}}を{{寵愛|ちょうあい}}して{{贅沢|ぜいたく}}を{{極|きわ}}め、宮殿を建てて民を苦しめ、{{諫|いさ}}めた{{忠臣|ちゅうしん}}{{関竜逢|かんりゅうほう}}を殺したと伝わる。「太陽がなくならないように、自分もなくならない」と言い放ち、民は「太陽よ、いつ{{滅|ほろ}}ぶのか。お前と一緒に{{滅|ほろ}}んでもいい」と{{恨|うら}}んだという。" +
      "最後は{{殷|いん}}の{{湯王|とうおう}}に{{鳴条|めいじょう}}の戦いで敗れ、{{南巣|なんそう}}に追放された。以後「{{桀紂|けっちゅう}}」は暴君を指す言葉になり、「{{湯武放伐|とうぶほうばつ}}」（徳を失った王は{{討|う}}ってよい）という考え方の手本とされた。",
    fact: "夏王朝の実在自体がまだ確定していないため、{{桀|けつ}}の悪行は{{紂王|ちゅうおう}}の話をもとに後から作られたとみる研究者も多い。{{妺喜|ばっき}}と{{妲己|だっき}}、酒池の逸話など、二人の話はよく似ている。",
    eraId: "xia",
    eventTitle: "鳴条の戦い",
    personName: "桀",
    personLabel: "{{桀|けつ}}",
  },
];

const ANKUN = [
  {
    id: "lingdi",
    name: "{{霊帝|れいてい}}（{{劉宏|りゅうこう}}）",
    dynasty: "後漢",
    period: "在位168〜189年",
    key: "官位を売りに出し、{{黄巾|こうきん}}の乱を招いた",
    body:
      "12歳で即位し、{{宦官|かんがん}}の{{張譲|ちょうじょう}}・{{趙忠|ちょうちゅう}}ら「{{十常侍|じゅうじょうじ}}」を「わが父、わが母」と呼んで政治を任せきりにした。宮廷の{{財政難|ざいせいなん}}を理由に、{{西園|せいえん}}という役所で官位を値段をつけて売り出し、大臣の位まで金で買えるようにした。" +
      "金で官職を買った役人は元を取ろうと民から{{搾|しぼ}}り取り、184年に{{太平道|たいへいどう}}の{{張角|ちょうかく}}が{{黄巾|こうきん}}の乱を起こす。宮中では{{後宮|こうきゅう}}に市場を作って自ら商人のまねをして遊び、ロバに引かせた車を走らせて楽しんだという。{{霊帝|れいてい}}の死後、都は{{董卓|とうたく}}に{{占拠|せんきょ}}され、三国志の{{乱世|らんせ}}が始まった。",
    fact: "{{諸葛亮|しょかつりょう}}の『{{出師表|すいしのひょう}}』にも、{{劉備|りゅうび}}と語り合うたびに{{桓帝|かんてい}}・{{霊帝|れいてい}}の時代を嘆き悔しがったという一節があり、当時から{{漢|かん}}を衰えさせた皇帝と見られていた。売官で集めた金は{{霊帝|れいてい}}個人の{{蓄財|ちくざい}}に回されたとされる。",
    eraId: "easternhan",
    eventTitle: "黄巾の乱",
  },
  {
    id: "wanli",
    name: "{{万暦帝|ばんれきてい}}（{{神宗|しんそう}}）",
    dynasty: "{{明|みん}}",
    period: "在位1572〜1620年",
    key: "約30年、朝廷に出ずに政治を放り出した",
    body:
      "10歳で即位し、はじめの10年は{{宰相|さいしょう}}{{張居正|ちょうきょせい}}の改革で{{明|みん}}の財政が立ち直った。ところが1582年に{{張居正|ちょうきょせい}}が死ぬと、厳しかった師への反動からその財産を{{没収|ぼっしゅう}}し、以後しだいに政治から遠ざかる。" +
      "{{寵愛|ちょうあい}}する{{鄭貴妃|ていきひ}}の子を皇太子にしたいと望んで{{官僚|かんりょう}}と対立すると（{{国本|こくほん}}問題）、約30年にわたって朝廷の会議に出ず、空いた官職も{{補充|ほじゅう}}しなかった。その一方で各地に{{宦官|かんがん}}を送って{{鉱税|こうぜい}}・{{商税|しょうぜい}}を取り立て、自分の陵墓（{{定陵|ていりょう}}）には巨費を投じた。",
    fact: "『{{明史|みんし}}』は「{{明|みん}}の{{滅亡|めつぼう}}は実は{{神宗|しんそう}}（{{万暦帝|ばんれきてい}}）の時に始まった」と書く。ただし、日本の豊臣秀吉の朝鮮出兵への援軍を含む「万暦の三大征」には勝利しており、政治に出なくても重要な軍事には決裁を下していた。{{定陵|ていりょう}}は発掘され、現在は観光地として公開されている。",
    eraId: "ming",
    eventTitle: "万暦の三大征",
  },
  {
    id: "huizong",
    name: "{{徽宗|きそう}}",
    dynasty: "{{北宋|ほくそう}}",
    period: "在位1100〜1125年",
    key: "天才芸術家だが、国を金に{{滅|ほろ}}ぼされ{{捕虜|ほりょ}}に",
    body:
      "書画の才能は歴代皇帝でも{{群|ぐん}}を{{抜|ぬ}}き、細く鋭い独自の書体「{{痩金体|そうきんたい}}」を生み、花鳥画の名品を残した。しかし政治は{{宰相|さいしょう}}{{蔡京|さいけい}}らに任せ、庭園を飾る珍しい石や木を江南から運ばせる「{{花石綱|かせきこう}}」で民を苦しめ、1120年には{{方臘|ほうろう}}の乱を招いた。" +
      "北方では新しく{{興|おこ}}った金と結んで{{遼|りょう}}を{{挟|はさ}}み{{撃|う}}ちにしたが（海上の盟）、宋軍の弱さを見抜いた金に逆に攻めこまれる。あわてて息子の{{欽宗|きんそう}}に位を{{譲|ゆず}}ったものの、1127年に都{{開封|かいほう}}が{{陥落|かんらく}}し、父子そろって北方へ連れ去られた（{{靖康|せいこう}}の変）。{{徽宗|きそう}}は{{五国城|ごこくじょう}}で{{捕|と}}らわれたまま死んだ。",
    fact: "「皇帝としては失格、芸術家としては一流」と評される代表格。小説『{{水滸伝|すいこでん}}』は{{徽宗|きそう}}の時代が舞台で、悪役の{{高俅|こうきゅう}}は{{蹴鞠|けまり}}の腕で{{徽宗|きそう}}に取り立てられた実在の人物がモデル。",
    eraId: "northernsong",
    eventTitle: "靖康の変",
    personName: "徽宗",
    personLabel: "{{徽宗|きそう}}",
  },
  {
    id: "huidi",
    name: "{{恵帝|けいてい}}（{{司馬衷|しばちゅう}}）",
    dynasty: "{{西晋|せいしん}}",
    period: "在位290〜306年",
    key: "「肉粥を食べればいい」。八王の乱を止められなかった",
    body:
      "{{西晋|せいしん}}を建てた{{武帝|ぶてい}}{{司馬炎|しばえん}}の子。幼いころから知能に問題があるといわれ、{{臣下|しんか}}から{{後継|こうけい}}に反対する声も出たが、{{武帝|ぶてい}}は息子を皇太子のままにした。民が飢えて死んでいると聞いて「米がないなら、なぜ肉粥を食べないのか」と言ったという逸話が残る。" +
      "即位後は{{皇后|こうごう}}{{賈南風|かなんぷう}}が実権を握って{{政敵|せいてき}}を殺し、これをきっかけに一族の王たちが皇帝の身柄を奪い合う八王の乱（291〜306年）が起きた。{{恵帝|けいてい}}はこの間、{{廃位|はいい}}されたり連れ回されたりと操り人形にすぎず、306年に毒殺されたともいわれる。{{西晋|せいしん}}は{{恵帝|けいてい}}の死から10年ほどで{{滅|ほろ}}んだ。",
    fact: "悪意のある暗君ではなく、「暗君を後継にした父と周囲」の責任が大きい例。戦場で矢が飛び交うなか{{恵帝|けいてい}}をかばって死んだ{{忠臣|ちゅうしん}}{{嵆紹|けいしょう}}の血が衣に付いたとき、「これは{{嵆|けい}}侍中の血だから洗うな」と言ったという話も伝わっている。",
    eraId: "westernjin",
    eventTitle: "八王の乱",
  },
  {
    id: "youwang",
    name: "{{幽王|ゆうおう}}",
    dynasty: "西周",
    period: "在位前781〜前771年",
    key: "笑わない{{褒姒|ほうじ}}のために{{偽|いつわ}}りの{{烽火|のろし}}を上げた",
    body:
      "西周最後の王。{{寵姫|ちょうき}}{{褒姒|ほうじ}}を愛するあまり、正妻の{{申后|しんこう}}と皇太子を{{廃|はい}}し、{{褒姒|ほうじ}}とその子を立てた。『史記』によると、{{褒姒|ほうじ}}はめったに笑わなかったが、敵の{{襲来|しゅうらい}}を知らせる{{烽火|のろし}}を上げて{{諸侯|しょこう}}があわてて集まる様子を見て大笑いした。{{幽王|ゆうおう}}は喜んで何度も{{烽火|のろし}}を上げたので、{{諸侯|しょこう}}は信じなくなった。" +
      "前771年、{{廃|はい}}された{{申后|しんこう}}の父・{{申侯|しんこう}}が{{犬戎|けんじゅう}}と組んで攻めてくると、{{烽火|のろし}}を上げても誰も来ず、{{幽王|ゆうおう}}は{{驪山|りざん}}のふもとで殺された。都は東の{{洛邑|らくゆう}}に移り、春秋時代が始まる。",
    fact: "{{烽火|のろし}}の話は「オオカミ少年」とよく似た作り話とみられている。2011年に公表された戦国時代の{{竹簡|ちっかん}}『{{繋年|けいねん}}』（{{清華簡|せいかかん}}）には{{烽火|のろし}}の話がなく、そもそも当時はまだ{{烽火|のろし}}のしくみがなかったという指摘もある。",
    eraId: "westernzhou",
    eventTitle: "犬戎",
    personName: "幽王",
    personLabel: "{{幽王|ゆうおう}}",
  },
];

// 番外：暗君の代名詞だが、評価が分かれる人物
const REEVAL = [
  {
    id: "liushan",
    name: "{{劉禅|りゅうぜん}}",
    dynasty: "{{蜀漢|しょくかん}}",
    period: "在位223〜263年",
    key: "「ここは楽しいので{{蜀|しょく}}のことは思い出しません」",
    body:
      "{{劉備|りゅうび}}の子で、幼名から「{{阿斗|あと}}」とも呼ばれる。263年に{{魏|ぎ}}軍が{{成都|せいと}}に{{迫|せま}}ると戦わずに降伏し、{{洛陽|らくよう}}へ移された。{{司馬昭|しばしょう}}の{{宴|うたげ}}で{{蜀|しょく}}の音楽を聞いて{{旧臣|きゅうしん}}たちが涙を流すなか、{{劉禅|りゅうぜん}}だけは笑って「ここは楽しいので{{蜀|しょく}}のことは思い出しません」（{{此間楽|しかんらく}}、{{不思蜀|ふししょく}}）と答えた。中国では今も「助けても立ち上がれない{{阿斗|あと}}」が、だめな人のたとえに使われる。",
    fact: "一方で、在位41年は三国の皇帝で最長。{{諸葛亮|しょかつりょう}}に政治を任せきって口を出さず、{{諸葛亮|しょかつりょう}}の死後も国を約30年保った。降伏も、{{成都|せいと}}の民を戦火から守った判断とみることができる。{{此間楽|しかんらく}}の答えも、{{司馬昭|しばしょう}}に{{警戒|けいかい}}されないための「とぼけ」だったという解釈がある。",
    eraId: "sanguo",
    eventTitle: "蜀漢の滅亡",
    personName: "劉禅",
    personLabel: "{{劉禅|りゅうぜん}}",
  },
];

function resolve(list) {
  return list.map((e) => {
    const eventSlug = e.eventTitle ? findEventSlug(e.eraId, e.eventTitle) : null;
    return {
      ...e,
      eventHref: eventSlug ? `/events/${eventSlug}` : ERAS.some((x) => x.id === e.eraId) ? `/eras/${e.eraId}` : null,
      hasEvent: Boolean(eventSlug),
      personLink: e.personName ? personHref(e.personName) : null,
    };
  });
}

const TYRANTS_R = resolve(TYRANTS);
const ANKUN_R = resolve(ANKUN);
const REEVAL_R = resolve(REEVAL);

// ページ冒頭の「ひとことで」ボックス。「暴君とは」「暗君とは」と調べた人がすぐ答えを得られるようにする
const KEY_POINTS = [
  { label: "暴君", text: "{{残虐|ざんぎゃく}}な刑罰や重い労役・{{増税|ぞうぜい}}で民を苦しめた君主" },
  { label: "暗君", text: "政治を{{怠|おこた}}ったり、{{側近|そっきん}}に任せきりにしたりして国を{{衰|おとろ}}えさせた{{愚|おろ}}かな君主" },
  { label: "反対語", text: "{{名君|めいくん}}・{{明君|めいくん}}（{{唐|とう}}の{{太宗|たいそう}}、清の{{康熙帝|こうきてい}}など）" },
  { label: "共通点", text: "多くが王朝最後か、{{滅亡|めつぼう}}直前の君主。次の王朝が書いた歴史で悪く描かれやすい" },
];

const FAQ = [
  {
    q: "暴君と暗君の違いは？",
    a: "暴君は、{{残虐|ざんぎゃく}}な刑罰や{{無謀|むぼう}}な工事・戦争で民を積極的に苦しめた君主のこと。暗君は、政治に関心がなかったり能力が足りなかったりして、{{宦官|かんがん}}や{{外戚|がいせき}}に国を任せ、結果的に国を{{衰|おとろ}}えさせた君主のことを指す。「暴」は{{乱暴|らんぼう}}、「暗」は物事に暗い（{{愚|おろ}}か）という意味で、{{殷|いん}}の{{紂王|ちゅうおう}}は暴君、後漢の{{霊帝|れいてい}}は暗君の典型とされる。",
  },
  {
    q: "中国史で一番の暴君は誰？",
    a: "伝統的には、夏の{{桀|けつ}}と{{殷|いん}}の{{紂王|ちゅうおう}}が「{{桀紂|けっちゅう}}」と並び称され、暴君の代名詞とされてきた。実際の被害の大きさでは、大運河の建設と三度の{{高句麗|こうくり}}遠征で数百万人を{{動員|どういん}}し、{{隋|ずい}}を38年で{{滅|ほろ}}ぼした{{煬帝|ようだい}}を挙げる人も多い。",
  },
  {
    q: "始皇帝は暴君なのか？",
    a: "{{焚書坑儒|ふんしょこうじゅ}}や万里の長城・{{阿房宮|あぼうきゅう}}・陵墓の大工事で民を苦しめたため、{{儒教|じゅきょう}}の立場からは長く暴君とされてきた。しかし、中国を初めて統一し、文字・{{貨幣|かへい}}・度量衡を統一した功績はきわめて大きく、現在は「暴君」の一言では語れない人物と考えられている。このページでは、統一の功績が評価を上回るとみて順位には入れていない。",
  },
  {
    q: "暴君・暗君の話はどこまで本当？",
    a: "中国では、新しい王朝が前の王朝の歴史を書くのが習わしだった。自分たちが前の王朝を{{倒|たお}}したことを正当化するため、最後の君主はとくに悪く描かれやすい。{{紂王|ちゅうおう}}の酒池肉林や{{幽王|ゆうおう}}の{{烽火|のろし}}の話のように、のちの時代の{{竹簡|ちっかん}}や考古学の発見から、{{誇張|こちょう}}や作り話の可能性が指摘されているものも多い。",
  },
  {
    q: "暴君の反対の名君は誰？",
    a: "よく名君に挙げられるのは、「{{貞観|じょうがん}}の治」を行った{{唐|とう}}の{{太宗|たいそう}}（{{李世民|りせいみん}}）、{{漢|かん}}を全盛期に導いた{{文帝|ぶんてい}}・{{景帝|けいてい}}（{{文景|ぶんけい}}の治）、61年にわたって清を治めた{{康熙帝|こうきてい}}など。{{太宗|たいそう}}と臣下の問答をまとめた『{{貞観政要|じょうがんせいよう}}』は、日本でも帝王学の教科書として読まれてきた。",
  },
];

const h2Style = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginTop: 36, marginBottom: 10, scrollMarginTop: 16 };
const pStyle = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 12 };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const smallLinkStyle = { ...linkStyle, fontSize: 12 };
const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };

function RankCard({ e, rank }) {
  return (
    <div id={e.id} style={{ ...cardStyle, padding: "14px 16px", scrollMarginTop: 16 }}>
      <div className="flex items-baseline justify-between gap-3 flex-wrap">
        <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink }}>
          {rank && (
            <span style={{ color: rank === 1 ? COLORS.vermilion : COLORS.gold, fontSize: 13, marginRight: 8 }}>第{rank}位</span>
          )}
          <RubyText text={e.name} />
        </h3>
        <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}>
          <RubyText text={`${e.dynasty}・${e.period}`} />
        </span>
      </div>
      <p style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>
        <RubyText text={e.key} />
      </p>
      <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
        <RubyText text={e.body} />
      </p>
      <div style={{ marginTop: 10, padding: "8px 10px", backgroundColor: "#F3ECD9", fontSize: 12, lineHeight: 1.8, color: COLORS.inkSoft }}>
        <span style={{ fontWeight: 700, color: COLORS.gold, marginRight: 6 }}>再評価・異説</span>
        <RubyText text={e.fact} />
      </div>
      <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ marginTop: 10 }}>
        {e.eventHref && (
          <a href={e.eventHref} style={smallLinkStyle}>
            {e.hasEvent ? "関連する出来事を年表で読む →" : "この時代を年表で読む →"}
          </a>
        )}
        {e.personLink && (
          <a href={e.personLink} style={smallLinkStyle}>
            <RubyText text={`${e.personLabel}の人物ページ →`} />
          </a>
        )}
      </div>
    </div>
  );
}

function JumpGrid({ list, label }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.gold, marginBottom: 4 }}>{label}</div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {list.map((e, i) => (
          <a key={e.id} href={`#${e.id}`} className="text-center hover:opacity-90" style={{ ...cardStyle, padding: "8px 6px" }}>
            <div style={{ fontSize: 10.5, color: COLORS.gold }}>第{i + 1}位</div>
            <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink, marginTop: 2 }}>
              <RubyText text={e.name.replace(/（.*$/, "")} />
            </div>
            <div style={{ fontSize: 10.5, color: COLORS.inkSoft, marginTop: 2 }}>
              <RubyText text={e.dynasty.replace(/（.*$/, "")} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function TyrantsPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <PageJsonLd path="/tyrants" title={title} description={description} breadcrumbName="中国の暴君・暗君ランキング" faq={FAQ} />
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国の暴君・暗君ランキング
        </h1>
        <p style={pStyle}>
          <RubyText
            text={
              "中国史で暴君の代表とされるのは、「酒池肉林」の{{殷|いん}}の{{紂王|ちゅうおう}}と、大運河と{{高句麗|こうくり}}遠征で{{隋|ずい}}を{{滅|ほろ}}ぼした{{煬帝|ようだい}}。暗君の代表は、官位を売って{{黄巾|こうきん}}の乱を招いた後漢の{{霊帝|れいてい}}や、約30年政治を放り出した{{明|みん}}の{{万暦帝|ばんれきてい}}である。" +
              "このページでは、民を苦しめた「暴君」と、国を{{衰|おとろ}}えさせた「暗君」をそれぞれ5人ずつ選び、何をしたのかと、近年の研究による再評価や異説をあわせて紹介する。"
            }
          />
        </p>

        <InArticleAd />

        <div style={{ ...cardStyle, padding: "12px 14px", marginBottom: 12 }}>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13, fontWeight: 700, color: COLORS.vermilion, marginBottom: 6 }}>
            暴君と暗君の違い
          </div>
          <dl style={{ display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 12, rowGap: 4, fontSize: 12.5, lineHeight: 1.75 }}>
            {KEY_POINTS.map((k) => (
              <div key={k.label} style={{ display: "contents" }}>
                <dt style={{ color: COLORS.gold, fontWeight: 700, whiteSpace: "nowrap" }}>{k.label}</dt>
                <dd style={{ color: COLORS.inkSoft }}>
                  <RubyText text={k.text} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p style={{ fontSize: 11.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 14 }}>
          ※順位は、民や国に与えた被害の大きさと、史書の中での悪名の高さをもとにした当サイトの目安です。どの人物も、悪行を記録したのは多くの場合その王朝を倒した側である点にご注意ください。
        </p>

        <JumpGrid list={TYRANTS_R} label="暴君ランキング" />
        <JumpGrid list={ANKUN_R} label="暗君ランキング" />
        <nav className="flex gap-x-4 gap-y-1 flex-wrap" style={{ fontSize: 12, marginBottom: 8 }}>
          <a href="#tyrants" style={linkStyle}>暴君ランキング</a>
          <a href="#ankun" style={linkStyle}>暗君ランキング</a>
          <a href="#reeval" style={linkStyle}>番外：本当に暗君？</a>
          <a href="#faq" style={linkStyle}>よくある疑問</a>
        </nav>

        <h2 id="tyrants" style={h2Style}>暴君ランキング TOP5</h2>
        <p style={pStyle}>
          <RubyText text="{{残虐|ざんぎゃく}}な刑罰や{{無謀|むぼう}}な工事・戦争で、民を積極的に苦しめた君主たち。" />
        </p>
        <div className="flex flex-col gap-4">
          {TYRANTS_R.map((e, i) => (
            <RankCard key={e.id} e={e} rank={i + 1} />
          ))}
        </div>

        <h2 id="ankun" style={h2Style}>暗君ランキング TOP5</h2>
        <p style={pStyle}>
          <RubyText text="政治を{{怠|おこた}}ったり、{{側近|そっきん}}や{{寵姫|ちょうき}}の言いなりになったりして、国を{{滅亡|めつぼう}}へ向かわせた君主たち。" />
        </p>
        <div className="flex flex-col gap-4">
          {ANKUN_R.map((e, i) => (
            <RankCard key={e.id} e={e} rank={i + 1} />
          ))}
        </div>

        <h2 id="reeval" style={h2Style}>番外：本当に暗君？評価が分かれる皇帝</h2>
        <p style={pStyle}>
          <RubyText text="暗君の代名詞として語られながら、見直しが進んでいる人物もいる。" />
        </p>
        <div className="flex flex-col gap-4">
          {REEVAL_R.map((e) => (
            <RankCard key={e.id} e={e} />
          ))}
        </div>

        <h2 id="faq" style={h2Style}>暴君・暗君についてよくある疑問</h2>
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
            <RubyText text="暗君のそばで権力を握った{{宦官|かんがん}}や、各王朝の歴代{{皇帝|こうてい}}の一覧もあわせてどうぞ。" />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/emperors" variant="solid">歴代皇帝一覧</NavButton>
            <NavButton href="/eunuchs" variant="outline">宦官とは</NavButton>
            <NavButton href="/qin-fall" variant="outline">秦はなぜ滅亡した？</NavButton>
            <NavButton href="/women-rulers" variant="outline">権力を握った女性</NavButton>
          </div>
        </section>

        <ArticleEndAd />

        <RelatedEraGuides path="/tyrants" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
