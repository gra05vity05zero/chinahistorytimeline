import { ERAS, stripRuby, getEraFigures, personSlug, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter, buildAmazonUrl } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection, HeritageThumb } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const title = "『真・三國無双』シリーズ一覧と史実｜最新作ORIGINS・武将や武器は本当？を解説";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "コーエーテクモゲームスのアクションゲーム『真・三國無双』シリーズを、2000年の初代から『真・三國無双 ORIGINS』『真・三國無双2 with 猛将伝 Remastered』までの作品一覧で解説。呂布・関羽・趙雲などの武将、貂蝉や孫尚香などの女性武将、青龍偃月刀や方天画戟、虎牢関・長坂・赤壁の名場面が史実ではどうだったのかも紹介します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/musou" },
  openGraph: buildOpenGraph({
    title: fullTitle,
    description,
    path: "/musou",
    type: "article",
    image: { title: "ゲーム『真・三國無双』シリーズ", subtitle: "作品一覧と武将の史実", kicker: "三国", seal: "無" },
  }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const sectionHeading = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 14, scrollMarginTop: 16 };
const card = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const bodyText = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft };
const thStyle = { padding: "8px 10px", borderBottom: `2px solid ${COLORS.vermilion}`, textAlign: "left", fontFamily: "var(--font-serif), serif", fontSize: 12, color: COLORS.gold, whiteSpace: "nowrap" };
const tdStyle = { padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.inkSoft, lineHeight: 1.6, verticalAlign: "top" };

const SANGUO = ERAS.find((e) => e.id === "sanguo");
const SANGUO_FIGURES = getEraFigures(SANGUO);

// 人物名（前方一致）から、年表データ上の肖像画と伝記ページ（bioがある場合のみ）を引く
function findFigure(name) {
  const figure = SANGUO_FIGURES.find((p) => stripRuby(p.name).startsWith(name));
  if (!figure) return {};
  return {
    imageUrl: figure.imageUrl || null,
    credit: figure.credit || null,
    href: figure.bio ? `/people/sanguo/${encodeURIComponent(personSlug(figure.name))}` : null,
  };
}

// Amazonの書影・パッケージ画像（ASINごとの商品画像ID）
const amazonImage = (id) => `https://m.media-amazon.com/images/I/${id}._SL300_.jpg`;

// 最新の動き（2026年11月時点）
const LATEST = [
  {
    title: "真・{{三國無双|さんごくむそう}} ORIGINS",
    date: "2025年1月17日発売（Switch 2版は2026年1月22日）",
    platforms: "PS5 / Xbox Series X|S / Windows（Steam） / Nintendo Switch 2",
    body: "『8』から7年ぶりのシリーズ新作で、記憶を失った{{名|な}}もなき英雄を主人公に、{{黄巾の乱|こうきんのらん}}から{{赤壁|せきへき}}の戦いまでの乱世を{{描|えが}}く。画面を{{埋|う}}め{{尽|つ}}くす数千人規模の大軍勢と、一人の兵として戦場を生き{{抜|ぬ}}く{{手応|てごた}}えが特徴。発売から約1か月で全世界累計出荷100万本を{{突破|とっぱ}}し、2026年1月にはSwitch 2版と、本編で描かれなかった展開を体験できる大型ダウンロードコンテンツ『{{夢幻|むげん}}の{{四英傑|しえいけつ}}』が発売された。",
    products: [
      { label: "PS5版", asin: "B0DHTD3MR7", image: "81eM+pzXvnL" },
      { label: "Switch2版", asin: "B0FR8GYZ8B", image: "71iXQ03+UQL" },
    ],
  },
  {
    title: "真・{{三國無双|さんごくむそう}}2 with {{猛将伝|もうしょうでん}} Remastered",
    date: "2026年10月1日発売",
    platforms: "PS5 / Xbox Series X|S / Nintendo Switch 2 / Windows（Steam）",
    body: "シリーズ25周年記念プロジェクトとして2025年9月に発表された、シリーズ初のリマスター作品。2001年の『真・{{三國無双|さんごくむそう}}2』と追加ディスク『{{猛将伝|もうしょうでん}}』をまとめ、グラフィックを{{一新|いっしん}}した。当初は2026年3月発売の予定だったが、品質向上のために延期されていた。",
    products: [
      { label: "PS5版", asin: "B0H3RKD7TX", image: "81Y+LcwUIJL" },
      { label: "Switch2版", asin: "B0H3RGXNBB", image: "71Z2bDhSxtL" },
    ],
  },
];

// ナンバリング作品一覧
const SERIES = [
  { name: "{{三國無双|さんごくむそう}}", year: "1997", hw: "PS", note: "シリーズの原点となる1対1の3D{{対戦格闘|たいせんかくとう}}ゲーム。" },
  { name: "真・{{三國無双|さんごくむそう}}", year: "2000", hw: "PS2", note: "一人で大軍をなぎ{{倒|たお}}す{{一騎当千|いっきとうせん}}のアクションに生まれ変わった第1作。" },
  { name: "真・{{三國無双|さんごくむそう}}2", year: "2001", hw: "PS2", note: "武将ごとの物語「{{無双|むそう}}モード」を導入。追加版『{{猛将伝|もうしょうでん}}』が定番に。" },
  { name: "真・{{三國無双|さんごくむそう}}3", year: "2003", hw: "PS2", note: "武将ごとの物語をたどる「{{無双演武|むそうえんぶ}}」。戦略要素を加えた『Empires』も始まる。" },
  { name: "真・{{三國無双|さんごくむそう}}4", year: "2005", hw: "PS2", note: "武将の物語をさらに描き込み、{{攻城|こうじょう}}兵器などの戦場ギミックも増えた。" },
  { name: "真・{{三國無双|さんごくむそう}}5", year: "2007", hw: "PS3 / Xbox 360", note: "次世代機で武将のデザインやアクションを一新。" },
  { name: "真・{{三國無双|さんごくむそう}}6", year: "2011", hw: "PS3 / Xbox 360", note: "{{司馬懿|しばい}}らの「{{晋|しん}}」が独立した勢力として登場。" },
  { name: "真・{{三國無双|さんごくむそう}}7", year: "2013", hw: "PS3 / Xbox 360ほか", note: "史実と異なる展開をたどる「IFルート」を導入。" },
  { name: "真・{{三國無双|さんごくむそう}}8", year: "2018", hw: "PS4 / Xbox One / PC", note: "中国全土を{{駆|か}}け回るオープンワールドを採用。登場武将は約90人に。" },
  { name: "真・{{三國無双|さんごくむそう}} ORIGINS", year: "2025", hw: "PS5 / Xbox Series X|S / PC", note: "オリジナル主人公の視点で{{黄巾の乱|こうきんのらん}}から{{赤壁|せきへき}}までを描く。" },
];

// ゲームのイメージと史実。sanguo時代の人物データから肖像画と伝記ページを引く
const FIGURES = [
  {
    name: "{{呂布|りょふ}}",
    game: "{{方天画戟|ほうてんがげき}}を{{振|ふ}}るう最強の武将",
    real: "正史でも弓と馬の腕前で「{{飛将|ひしょう}}」と呼ばれた{{猛将|もうしょう}}。名馬{{赤兎|せきと}}に乗っていたことも正史に見え、「人中に{{呂布|りょふ}}あり、馬中に{{赤兎|せきと}}あり」とたたえられた。一方で{{丁原|ていげん}}・{{董卓|とうたく}}と主君を二度殺して信用を失い、198年に{{下邳|かひ}}で{{曹操|そうそう}}に敗れて処刑された。",
    ...findFigure("呂布"),
  },
  {
    name: "{{関羽|かんう}}",
    game: "{{青龍偃月刀|せいりゅうえんげつとう}}の{{軍神|ぐんしん}}",
    real: "200年の{{白馬|はくば}}の戦いで、大軍の中から敵将{{顔良|がんりょう}}を討ち取ったのは正史どおり。ただし{{華雄|かゆう}}を斬ったのは正史では{{孫堅|そんけん}}の軍で、{{関羽|かんう}}の手柄は『{{演義|えんぎ}}』の創作。219年、{{荊州|けいしゅう}}を{{呉|ご}}に{{奪|うば}}われて捕らえられ、斬られた。のちに神として{{祀|まつ}}られ、今も「{{関帝|かんてい}}」として信仰されている。",
    ...findFigure("関羽"),
  },
  {
    name: "{{張飛|ちょうひ}}",
    game: "{{蛇矛|だぼう}}で暴れる{{豪傑|ごうけつ}}",
    real: "208年の{{長坂|ちょうはん}}で、わずか20騎で橋を{{背|せ}}にして{{曹操|そうそう}}軍の追撃を食い止めた話は正史にもある。正史では「{{矛|ほこ}}を横たえて」{{名乗|なの}}りを上げたとされ、{{矛|ほこ}}を使っていたのは確か。部下に厳しく、221年に部下に殺された。",
    ...findFigure("張飛"),
  },
  {
    name: "{{趙雲|ちょううん}}",
    game: "{{槍|やり}}一本で大軍を{{駆|か}}け抜ける",
    real: "{{長坂|ちょうはん}}で{{劉備|りゅうび}}の子{{阿斗|あと}}（のちの{{劉禅|りゅうぜん}}）と{{甘夫人|かんふじん}}を守ったのは正史どおり。ただし{{曹操|そうそう}}の大軍に何度も{{斬|き}}り込む「七{{進|しん}}七{{出|しゅつ}}」は『{{演義|えんぎ}}』の{{脚色|きゃくしょく}}。正史の伝記は短く、活躍の多くは{{裴松之|はいしょうし}}の注に引かれた『{{趙雲別伝|ちょううんべつでん}}』に書かれている。",
    ...findFigure("趙雲"),
  },
  {
    name: "{{張遼|ちょうりょう}}",
    game: "{{呉|ご}}の軍勢を{{震|ふる}}え上がらせる{{猛将|もうしょう}}",
    real: "215年の{{合肥|がっぴ}}の戦いで、800人の決死隊を{{率|ひき}}いて{{孫権|そんけん}}の大軍に{{突撃|とつげき}}し、{{孫権|そんけん}}をあと一歩まで追い{{詰|つ}}めた。これは正史の記録で、ゲームの{{誇張|こちょう}}ではない。{{江東|こうとう}}では「{{張遼|ちょうりょう}}が来る」と言えば泣く子も{{黙|だま}}ったと伝わる。",
    ...findFigure("張遼"),
  },
  {
    name: "{{夏侯惇|かこうとん}}",
    game: "{{隻眼|せきがん}}の{{猛将|もうしょう}}",
    real: "{{呂布|りょふ}}との戦いで流れ矢を受けて左目を失い、「{{盲夏侯|もうかこう}}」と呼ばれたのは正史どおり。射られた目玉を「父の{{精|せい}}、母の血」と言って食べる場面は『{{演義|えんぎ}}』の創作。正史では戦場よりも、{{曹操|そうそう}}の留守を守る{{後方|こうほう}}の{{統治|とうち}}や{{屯田|とんでん}}で力を発揮した。",
    ...findFigure("夏侯惇"),
  },
  {
    name: "{{諸葛亮|しょかつりょう}}",
    game: "{{羽扇|うせん}}で戦場を操る天才軍師",
    real: "{{赤壁|せきへき}}で東南の風を呼ぶ場面は『{{演義|えんぎ}}』の創作。正史の{{陳寿|ちんじゅ}}は{{諸葛亮|しょかつりょう}}を、国を治める政治家として高く評価する一方、「臨機応変の{{軍略|ぐんりゃく}}は得意ではなかった」とも書いている。234年、{{五丈原|ごじょうげん}}の陣中で{{病死|びょうし}}した。",
    ...findFigure("諸葛亮"),
  },
  {
    name: "{{周瑜|しゅうゆ}}",
    game: "{{呉|ご}}を率いる{{美周郎|びしゅうろう}}",
    real: "『{{演義|えんぎ}}』では{{諸葛亮|しょかつりょう}}に{{出|だ}}し{{抜|ぬ}}かれる役回りだが、正史で{{赤壁|せきへき}}の勝利を導いた主役は{{周瑜|しゅうゆ}}。音楽にも通じ、演奏に誤りがあると必ず振り返ったので「曲に誤りあれば{{周郎|しゅうろう}}振り返る」と歌われた。210年、36歳で{{病死|びょうし}}した。",
    ...findFigure("周瑜"),
  },
];

// 女性武将のモデル。type: real=実在、legend=実在だが名前は後世の伝承、fiction=物語・ゲームの創作
const WOMEN = [
  { name: "{{貂蝉|ちょうせん}}", type: "fiction", note: "『{{演義|えんぎ}}』の創作の人物。正史には、{{呂布|りょふ}}が{{董卓|とうたく}}の{{侍女|じじょ}}とひそかに通じていたという記述だけがあり、ここから「連環の計」の物語がふくらんだと考えられる。" },
  { name: "{{大喬|だいきょう}}・{{小喬|しょうきょう}}", type: "legend", note: "正史では「{{橋公|きょうこう}}の二人の娘」とだけあり、姉を{{孫策|そんさく}}、妹を{{周瑜|しゅうゆ}}が{{妻|つま}}に迎えた。本当の名前は伝わっていない。" },
  { name: "{{孫尚香|そんしょうこう}}", type: "legend", note: "{{孫権|そんけん}}の妹で{{劉備|りゅうび}}に嫁いだ「{{孫夫人|そんふじん}}」は実在。正史には、気性が激しく、{{侍女|じじょ}}百人あまりに刀を持たせて仕えさせたとある。「{{尚香|しょうこう}}」の名は後世の{{京劇|きょうげき}}などに由来する。" },
  { name: "{{甄姫|しんき}}", type: "legend", note: "{{袁紹|えんしょう}}の子{{袁熙|えんき}}の妻から、{{曹丕|そうひ}}の妻になった{{甄氏|しんし}}がモデル。{{魏|ぎ}}の2代皇帝{{曹叡|そうえい}}の母だが、221年に{{曹丕|そうひ}}から死を{{命|めい}}じられた。" },
  { name: "{{蔡文姫|さいぶんき}}", type: "real", note: "学者{{蔡邕|さいよう}}の娘で、実在の詩人{{蔡琰|さいえん}}。戦乱で{{匈奴|きょうど}}に連れ去られ、12年後に{{曹操|そうそう}}が{{身代金|みのしろきん}}を払って帰国させた。その苦しみを{{詠|よ}}んだ『{{悲憤詩|ひふんし}}』が残る。" },
  { name: "{{月英|げつえい}}", type: "legend", note: "{{諸葛亮|しょかつりょう}}の妻は正史では「{{黄承彦|こうしょうげん}}の娘」とだけあり、名前はわからない。「{{月英|げつえい}}」は後世の民間伝承でつけられた名前。" },
  { name: "{{王異|おうい}}", type: "real", note: "{{馬超|ばちょう}}と戦った{{趙昂|ちょうこう}}の妻で、自ら武器をとって城を守った実在の女性。{{裴松之|はいしょうし}}の注に引かれた『{{列女伝|れつじょでん}}』に記録がある。" },
  { name: "{{祝融|しゅくゆう}}", type: "fiction", note: "南方の王{{孟獲|もうかく}}の妻として『{{演義|えんぎ}}』に登場する創作の人物。名前は中国神話の火の神から取られている。" },
  { name: "{{星彩|せいさい}}", type: "fiction", note: "{{張飛|ちょうひ}}の娘としてゲームで生まれたオリジナルの人物。史実の{{張飛|ちょうひ}}には娘が二人いて、二人とも{{劉禅|りゅうぜん}}の皇后になったが、名前は伝わっていない。" },
];

const WOMEN_TYPE = {
  real: { label: "実在", color: "#4F6FA0" },
  legend: { label: "実在・名は伝承", color: "#8A6D2F" },
  fiction: { label: "創作", color: "#B5452F" },
};

// 武器の史実
const WEAPONS = [
  { name: "{{青龍偃月刀|せいりゅうえんげつとう}}（{{関羽|かんう}}）", note: "正史に{{関羽|かんう}}の武器の記録はない。三日月形の刃を長い柄につけた「{{偃月刀|えんげつとう}}」は、{{北宋|ほくそう}}の兵法書『{{武経総要|ぶけいそうよう}}』（1044年）などに現れる後の時代の武器で、三国時代にはまだなかったと考えられている。" },
  { name: "{{方天画戟|ほうてんがげき}}（{{呂布|りょふ}}）", note: "{{戟|げき}}そのものは古くからある武器で、正史にも{{呂布|りょふ}}が遠くに立てた{{戟|げき}}の小枝を矢で射当てて{{争|あらそ}}いを収めた話（{{轅門射戟|えんもんしゃげき}}）がある。ただし左右に三日月形の刃がつく「{{方天画戟|ほうてんがげき}}」の形は、{{宋|そう}}・{{明|みん}}以降のものとされる。" },
  { name: "{{蛇矛|だぼう}}（{{張飛|ちょうひ}}）", note: "{{蛇|へび}}のように波打つ刃の「{{丈八蛇矛|じょうはちだぼう}}」は『{{演義|えんぎ}}』で有名になった。正史でも{{長坂|ちょうはん}}で{{矛|ほこ}}を構えたとあるので、{{矛|ほこ}}を使った武将だったことは確か。" },
];

// 名場面の史実
const SCENES = [
  { name: "{{虎牢関|ころうかん}}の戦い（190年）", game: "{{劉備|りゅうび}}・{{関羽|かんう}}・{{張飛|ちょうひ}}の三人が{{呂布|りょふ}}に挑む", real: "「三英、{{呂布|りょふ}}と戦う」は『{{演義|えんぎ}}』の創作。{{汜水関|しすいかん}}と{{虎牢関|ころうかん}}は物語では別の関だが、実際は同じ関の時代ごとの呼び名とされる。正史で{{董卓|とうたく}}軍と激しく戦ったのは{{孫堅|そんけん}}だった。" },
  { name: "{{長坂|ちょうはん}}の戦い（208年）", game: "{{趙雲|ちょううん}}の単騎突破、{{張飛|ちょうひ}}の{{仁王立|におうだ}}ち", real: "{{趙雲|ちょううん}}が{{阿斗|あと}}を守り、{{張飛|ちょうひ}}が橋で追手を止めたのは正史にもある。{{劉備|りゅうび}}は民衆を連れて逃げたため追いつかれ、妻子を置いて逃げるほどの大敗だった。" },
  { name: "{{赤壁|せきへき}}の戦い（208年）", game: "{{連環|れんかん}}の計と火計で{{曹操|そうそう}}の大船団を焼く", real: "{{呉|ご}}の{{黄蓋|こうがい}}が{{偽|いつわ}}りの{{降伏|こうふく}}で船に火を放ち、{{曹操|そうそう}}軍が敗れたのは史実。{{龐統|ほうとう}}の{{連環|れんかん}}の計や{{諸葛亮|しょかつりょう}}が風を呼ぶ場面は『{{演義|えんぎ}}』の創作で、{{曹操|そうそう}}軍の{{疫病|えきびょう}}も敗因だった。" },
  { name: "{{五丈原|ごじょうげん}}の戦い（234年）", game: "{{諸葛亮|しょかつりょう}}と{{司馬懿|しばい}}の最後の知恵比べ", real: "{{司馬懿|しばい}}は守りを固めて決戦を{{避|さ}}け、{{諸葛亮|しょかつりょう}}は陣中で{{病死|びょうし}}した。退く{{蜀|しょく}}軍を追った{{司馬懿|しばい}}が反撃の構えに驚いて引き返した話から、「死せる{{孔明|こうめい}}、生ける{{仲達|ちゅうたつ}}を走らす」という言葉が生まれた。" },
];

const FAQ = [
  {
    q: "『{{三國無双|さんごくむそう}}』の「{{無双|むそう}}」とはどういう意味？",
    a: "「{{並|なら}}ぶものがない」という意味です。前漢の{{蕭何|しょうか}}が{{韓信|かんしん}}を「{{国士無双|こくしむそう}}」（国に二人といない人物）と評した『{{史記|しき}}』の言葉が有名で、一人で大軍を倒すゲームの内容をよく表しています。",
  },
  {
    q: "『{{三國無双|さんごくむそう}}』と『{{三國志|さんごくし}}』はどう違う？",
    a: "どちらもコーエーテクモゲームスの三国志ゲームですが、『{{三國志|さんごくし}}』は国や武将を動かして天下統一を目指す{{歴史|れきし}}シミュレーション、『真・{{三國無双|さんごくむそう}}』は武将を直接{{操作|そうさ}}して戦場で戦うアクションゲームです。開発も『{{無双|むそう}}』はω-Force（オメガフォース）というチームが担当しています。",
  },
  {
    q: "ゲームの話は史実どおり？",
    a: "大きな流れは明代の小説『{{三国志演義|さんごくしえんぎ}}』に{{沿|そ}}っていて、そこにゲーム独自の人物や展開が加わっています。{{赤壁|せきへき}}の戦いや{{長坂|ちょうはん}}での{{趙雲|ちょううん}}の活躍のように史実が元になった場面もあれば、{{貂蝉|ちょうせん}}や{{虎牢関|ころうかん}}の三英戦のように物語の創作もあります。",
  },
  {
    q: "武将が一騎打ちで戦うことは本当にあった？",
    a: "まれでした。正史に残る例は、{{関羽|かんう}}が{{顔良|がんりょう}}を討ち取った場面や、{{孫策|そんさく}}と{{太史慈|たいしじ}}が{{取|と}}っ{{組|く}}み合った場面など、ごくわずかです。当時の戦いは大勢の兵を指揮する集団戦が中心で、武将が一人で何千人も倒すのはゲームならではの{{醍醐味|だいごみ}}です。",
  },
  {
    q: "初めて遊ぶならどの作品がおすすめ？",
    a: "今の機種で遊べる『真・{{三國無双|さんごくむそう}} ORIGINS』がおすすめです。{{黄巾の乱|こうきんのらん}}から物語が始まるので、三国志を知らない人でも流れをつかみやすくなっています。昔ながらの多人数の武将で遊びたいなら『8』や、2026年発売の『2 with {{猛将伝|もうしょうでん}} Remastered』もあります。",
  },
];

function ProductLinks({ title, products }) {
  return (
    <div className="flex gap-3 flex-wrap mt-3">
      {products.map((p) => (
        <a
          key={p.asin}
          href={buildAmazonUrl(p.asin)}
          target="_blank"
          rel="nofollow noreferrer sponsored"
          className="flex flex-col items-center gap-2"
          style={{ width: 118 }}
        >
          <img
            src={amazonImage(p.image)}
            alt={`${stripRuby(title)} ${p.label}の画像`}
            loading="lazy"
            style={{ width: 96, height: 120, objectFit: "contain", border: `1px solid ${COLORS.mist}`, backgroundColor: "#FFFDF7" }}
          />
          <span
            className="px-2 py-1 text-center"
            style={{ width: "100%", fontSize: 11.5, fontWeight: 700, color: COLORS.vermilion, border: `1px solid ${COLORS.vermilion}`, backgroundColor: "#FFFDF7" }}
          >
            {p.label} →
          </span>
        </a>
      ))}
    </div>
  );
}

function Portrait({ imageUrl, name, size = 72 }) {
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{ width: size, height: size, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}
    >
      <HeritageThumb imageUrl={imageUrl} name={name} type="figure" objectPosition="top" />
    </div>
  );
}

export default function MusouPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    about: ["真・三國無双", "コーエーテクモゲームス", "三国志", "三国志演義"],
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/musou` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "ゲーム『真・三國無双』シリーズ", item: `${SITE_URL}/musou` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const figureCredits = FIGURES.filter((f) => f.credit);

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(articleJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(breadcrumbJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(faqJsonLd)) }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 6 }}>
          ゲーム『真・<RubyText text="{{三國無双|さんごくむそう}}" />』シリーズとは？
        </h1>
        <p style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, color: COLORS.gold, marginBottom: 14 }}>
          作品一覧と、武将・武器・名場面の史実
        </p>
        <p style={{ ...bodyText, fontSize: 13.5, marginBottom: 16 }}>
          <RubyText text="『真・{{三國無双|さんごくむそう}}』は、コーエー（現・コーエーテクモゲームス）が2000年に発売したアクションゲームのシリーズです。プレイヤーは{{呂布|りょふ}}や{{関羽|かんう}}、{{趙雲|ちょううん}}などの武将を{{操作|そうさ}}し、戦場にあふれる敵兵を次々となぎ{{倒|たお}}す「{{一騎当千|いっきとうせん}}」の{{爽快感|そうかいかん}}で人気を集め、2025年に25周年を{{迎|むか}}えました。" />
          <RubyText text="このページでは、作品の歩みと最新作に加えて、ゲームでおなじみの武将や武器、名場面が実際の歴史ではどうだったのかを紹介します。" />
        </p>
        <div style={{ ...card, padding: "12px 14px", marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: COLORS.gold, marginBottom: 6 }}>結論：ベースは『三国志演義』、そこにゲーム独自の創作</div>
          <div style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.ink }}>
            <RubyText text="武将の人物像や名場面の多くは明代の小説『{{三国志演義|さんごくしえんぎ}}』がもと。{{張遼|ちょうりょう}}の{{合肥|がっぴ}}の戦いのように正史どおりの活躍もあれば、{{青龍偃月刀|せいりゅうえんげつとう}}のように後の時代の武器や、{{星彩|せいさい}}のようなオリジナルの人物もいる。" />
          </div>
        </div>

        <nav aria-label="目次" className="p-4 mb-9" style={card}>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>目次</div>
          <ol className="flex flex-col gap-1" style={{ fontSize: 12.5, listStyle: "decimal", paddingLeft: 20 }}>
            {[
              ["latest", "最新作と最近の動き（2026年）"],
              ["series", "シリーズ作品一覧"],
              ["figures", "人気武将の「ゲーム」と「史実」"],
              ["women", "女性武将のモデルは実在した？"],
              ["weapons", "{{青龍偃月刀|せいりゅうえんげつとう}}・{{方天画戟|ほうてんがげき}}は三国時代にあった？"],
              ["scenes", "名場面の史実"],
              ["faq", "よくある疑問"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} style={linkStyle}>
                  <RubyText text={label} />
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section style={{ marginBottom: 36 }}>
          <h2 id="latest" style={sectionHeading}>最新作と最近の動き（2026年）</h2>
          <div className="flex flex-col gap-3">
            {LATEST.map((g) => (
              <div key={g.title} className="p-4" style={{ ...card, borderLeft: `3px solid ${COLORS.vermilion}` }}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}>
                  <RubyText text={g.title} />
                </div>
                <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>
                  {g.date} ／ {g.platforms}
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={g.body} />
                </p>
                {g.products && <ProductLinks title={g.title} products={g.products} />}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 12 }}>
            最新情報は
            <a href="https://www.gamecity.ne.jp/smusou25th/jp/index.html" target="_blank" rel="noreferrer" style={linkStyle}>
              「真・<ruby>三國無双<rt>さんごくむそう</rt></ruby>」シリーズ25周年記念サイト（公式）
            </a>
            で発表されています。
          </p>
          <p style={{ fontSize: 10.5, color: COLORS.mist, marginTop: 10 }}>
            ※ 一部のリンクはAmazonアソシエイトによるアフィリエイト広告を含みます。価格・在庫はリンク先でご確認ください
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 id="series" style={sectionHeading}>シリーズ作品一覧</h2>
          <p style={{ ...bodyText, marginBottom: 12 }}>
            <RubyText text="発売年は日本で最初に発売された年です。多くの作品には、追加要素を収めた『{{猛将伝|もうしょうでん}}』や、国取りの戦略要素を加えた『Empires』も発売されています。" />
          </p>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, minWidth: 460 }}>
              <thead>
                <tr>
                  {["作品", "発売年", "主な機種", "主な特徴"].map((h) => (
                    <th key={h} style={thStyle}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SERIES.map((s) => (
                  <tr key={s.name}>
                    <td style={{ ...tdStyle, color: COLORS.ink, fontWeight: 700, fontFamily: "var(--font-serif), serif", whiteSpace: "nowrap" }}>
                      <RubyText text={s.name} />
                    </td>
                    <td style={{ ...tdStyle, fontFamily: "var(--font-serif), serif" }}>{s.year}</td>
                    <td style={{ ...tdStyle, fontSize: 11.5 }}>{s.hw}</td>
                    <td style={tdStyle}>
                      <RubyText text={s.note} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...bodyText, fontSize: 12.5, marginTop: 12 }}>
            <RubyText text="同じ「{{無双|むそう}}」の仕組みは、日本の戦国時代を舞台にした『{{戦国無双|せんごくむそう}}』（2004年〜）や、両シリーズの武将が共演する『{{無双|むそう}}OROCHI』（2007年〜）にも広がっています。" />
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 id="figures" style={sectionHeading}>人気武将の「ゲーム」と「史実」</h2>
          <p style={{ ...bodyText, marginBottom: 14 }}>
            <RubyText text="ゲームでは誰もが一騎当千の{{豪傑|ごうけつ}}ですが、正史『{{三国志|さんごくし}}』に書かれた実際の姿は少し違います。名前のリンクから、史実の人物紹介を読むことができます。" />
          </p>
          <div className="flex flex-col gap-3">
            {FIGURES.map((m) => (
              <div key={m.name} className="flex gap-3 p-3" style={card}>
                <Portrait imageUrl={m.imageUrl} name={m.name} />
                <div className="flex-1 min-w-0">
                  <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                    {m.href ? (
                      <a href={m.href} style={{ color: COLORS.ink, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                        <RubyText text={m.name} />
                      </a>
                    ) : (
                      <RubyText text={m.name} />
                    )}
                  </div>
                  <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>
                    ゲーム：<RubyText text={m.game} />
                  </div>
                  <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 4 }}>
                    <span style={{ fontWeight: 700, color: COLORS.ink }}>史実：</span>
                    <RubyText text={m.real} />
                  </p>
                </div>
              </div>
            ))}
          </div>
          {figureCredits.length > 0 && (
            <p style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 10 }}>
              {figureCredits.map((f, i) => (
                <span key={f.name}>
                  {i > 0 && "、"}
                  <RubyText text={f.name} />: <RubyText text={f.credit} />
                </span>
              ))}
            </p>
          )}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 id="women" style={sectionHeading}>女性武将のモデルは実在した？</h2>
          <p style={{ ...bodyText, marginBottom: 14 }}>
            <RubyText text="『{{無双|むそう}}』シリーズには多くの女性武将が登場しますが、正史に戦った記録が残る女性はごくわずかです。実在の人物、名前だけが伝承の人物、物語やゲームの創作の人物に分けて紹介します。" />
          </p>
          <div className="flex flex-col gap-2.5">
            {WOMEN.map((w) => {
              const t = WOMEN_TYPE[w.type];
              return (
                <div key={w.name} className="p-3" style={card}>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                      <RubyText text={w.name} />
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: t.color, border: `1px solid ${t.color}`, padding: "0 6px" }}>{t.label}</span>
                  </div>
                  <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 4 }}>
                    <RubyText text={w.note} />
                  </p>
                </div>
              );
            })}
          </div>
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 12 }}>
            <a href="/four-beauties" style={linkStyle}>
              <RubyText text="{{貂蝉|ちょうせん}}も数えられる中国四大美女とは →" />
            </a>
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 id="weapons" style={sectionHeading}>青龍偃月刀・方天画戟は三国時代にあった？</h2>
          <p style={{ ...bodyText, marginBottom: 14 }}>
            <RubyText text="武将と{{一体|いったい}}になった武器のイメージも、多くは『{{演義|えんぎ}}』から来ています。三国時代の主な武器は{{矛|ほこ}}・{{戟|げき}}・{{環首刀|かんしゅとう}}（{{柄頭|つかがしら}}に輪のついたまっすぐな刀）・弓・{{弩|ど}}（ボウガン）でした。" />
          </p>
          <div className="flex flex-col gap-2.5">
            {WEAPONS.map((w) => (
              <div key={w.name} className="p-3" style={card}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                  <RubyText text={w.name} />
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 4 }}>
                  <RubyText text={w.note} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 id="scenes" style={sectionHeading}>名場面の史実</h2>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, minWidth: 460 }}>
              <thead>
                <tr>
                  {["戦い", "ゲームの見どころ", "史実"].map((h) => (
                    <th key={h} style={thStyle}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SCENES.map((s) => (
                  <tr key={s.name}>
                    <td style={{ ...tdStyle, color: COLORS.ink, fontWeight: 700, fontFamily: "var(--font-serif), serif", minWidth: 96 }}>
                      <RubyText text={s.name} />
                    </td>
                    <td style={{ ...tdStyle, minWidth: 110 }}>
                      <RubyText text={s.game} />
                    </td>
                    <td style={tdStyle}>
                      <RubyText text={s.real} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 12 }}>
            それぞれの戦いの場所と流れは<a href="/sanguo-battles" style={linkStyle}>三国時代 合戦マップ</a>、三国の国力や人材の違いは<a href="/sanguo-comparison" style={linkStyle}><ruby>魏<rt>ぎ</rt></ruby>・<ruby>呉<rt>ご</rt></ruby>・<ruby>蜀<rt>しょく</rt></ruby>の違い</a>で詳しく紹介しています。
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 id="faq" style={sectionHeading}>『真・<ruby>三國無双<rt>さんごくむそう</rt></ruby>』についてのよくある疑問</h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((f) => (
              <div key={f.q} style={{ ...card, padding: "14px 16px" }}>
                <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                  <span style={{ color: COLORS.vermilion, marginRight: 6 }}>Q.</span>
                  <RubyText text={f.q} />
                </h3>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={f.a} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            ゲームの舞台になった三国時代の出来事や人物は、年表・人物ページもあわせてご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/sanguo" variant="solid">三国時代の解説を見る</NavButton>
            <NavButton href="/people/sanguo" variant="outline">三国の人物一覧を見る</NavButton>
            <NavButton href="/koei-sangokushi" variant="outline">ゲーム『<ruby>三國志<rt>さんごくし</rt></ruby>』シリーズ</NavButton>
            <NavButton href="/four-great-novels" variant="outline">中国の四大名著とは</NavButton>
          </div>
        </section>

        <RelatedEraGuides path="/musou" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
