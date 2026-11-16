import { stripRuby, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter, buildAmazonUrl } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection, A8AdBlock } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";

const title = "漫画『キングダム』の史実｜登場人物は実在した？史実との違い・アニメ・映画まとめ";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "原泰久の漫画『キングダム』を紹介し、信（李信）・嬴政・王騎・李牧・桓騎・王翦など登場人物を『史記』の史実と比較。作中の戦いが史実の何年にあたるか、漫画の先に待つ秦の天下統一、アニメ第1〜6シリーズと実写映画5作もまとめます。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/kingdom" },
  openGraph: buildOpenGraph({
    title: fullTitle,
    description,
    path: "/kingdom",
    type: "article",
    image: { title: "漫画『キングダム』と史実", subtitle: "登場人物は実在した？", kicker: "戦国", seal: "秦" },
  }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const sectionHeading = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 14 };
const card = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const bodyText = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft };

// Amazonの商品画像。image（商品画像ID）があればそれを、なければASINから商品画像を引く
function productImage(p) {
  if (p.image) return `https://m.media-amazon.com/images/I/${p.image}._SL300_.jpg`;
  return `https://images-na.ssl-images-amazon.com/images/P/${p.asin}.09.MZZZZZZZ.jpg`;
}

// 史実との距離。real=史書に記録のある実在人物、model=名前や事績にモデルがある、fiction=作者の創作
const FACT_LEVEL = {
  real: { label: "実在", color: COLORS.jade },
  model: { label: "モデルあり", color: COLORS.gold },
  fiction: { label: "創作", color: COLORS.vermilion },
};

// 主な登場人物と史実の比較
const CHARACTERS = [
  {
    name: "信（{{李信|りしん}}）",
    level: "real",
    manga: "戦争孤児の{{下僕|げぼく}}から身を起こし、親友・{{漂|ひょう}}との{{約束|やくそく}}である「天下の大将軍」を目指す主人公。{{飛信隊|ひしんたい}}を率いて{{武功|ぶこう}}を重ね、将軍に{{昇|のぼ}}りつめる。",
    history: "{{秦|しん}}の将軍・{{李信|りしん}}は実在する。『{{史記|しき}}』では前226年に{{燕|えん}}の{{太子丹|たいしたん}}を追撃して手柄を立て、前225年には20万の兵で{{楚|そ}}を攻めたが、{{項燕|こうえん}}に大敗した。その後{{王賁|おうほん}}とともに{{燕|えん}}・{{斉|せい}}の平定に加わっている。{{下僕|げぼく}}出身という生い立ちや若き日の{{活躍|かつやく}}は記録がなく、作者の創作。前漢の名将・{{李広|りこう}}は{{李信|りしん}}の子孫とされる。",
  },
  {
    name: "{{嬴政|えいせい}}（{{秦王|しんおう}}・政）",
    level: "real",
    href: "/qinshihuang",
    manga: "13{{歳|さい}}で即位した{{秦|しん}}の若き王。{{趙|ちょう}}での{{過酷|かこく}}な人質生活を経て、{{武力|ぶりょく}}による中華統一で戦争のない世をつくろうと決意する。",
    history: "のちの{{始皇帝|しこうてい}}。前259年に{{趙|ちょう}}の都{{邯鄲|かんたん}}で生まれ、前247年に13{{歳|さい}}で{{秦王|しんおう}}となった。前221年に六国を{{滅|ほろ}}ぼして天下を統一する。作中の「中華を一つにして戦をなくす」という理想は創作で、史実の{{始皇帝|しこうてい}}は統一後に{{厳|きび}}しい法と大工事で民を{{苦|くる}}しめ、死後まもなく{{秦|しん}}は{{滅|ほろ}}んだ。",
  },
  {
    name: "{{王騎|おうき}}",
    level: "model",
    manga: "{{昭王|しょうおう}}時代の「{{秦|しん}}の六大将軍」の最後の一人。{{馬陽|ばよう}}の戦いで{{龐煖|ほうけん}}と{{李牧|りぼく}}の{{策|さく}}に{{敗|やぶ}}れ、{{矛|ほこ}}を信に{{託|たく}}して世を去る。",
    history: "モデルは『{{史記|しき}}』{{秦始皇本紀|しんしこうほんぎ}}に名が見える将軍・{{王齮|おうき}}。前244年に死んだことが一行記されているだけで、人物像や{{馬陽|ばよう}}での戦死はすべて創作。「六大将軍」という制度も史書にはない。",
  },
  {
    name: "{{李牧|りぼく}}",
    level: "real",
    manga: "{{趙|ちょう}}の{{三大天|さんだいてん}}・{{宰相|さいしょう}}。{{知略|ちりゃく}}に優れ、{{合従軍|がっしょうぐん}}を組織するなど{{秦|しん}}の前に立ちはだかる最大の{{敵|てき}}。",
    history: "{{趙|ちょう}}の名将として実在。北方で{{匈奴|きょうど}}を大破し、前233年の{{肥|ひ}}の戦い、前232年の{{番吾|はんご}}の戦いで{{秦軍|しんぐん}}を{{退|しりぞ}}けた。しかし前229年、{{秦|しん}}の{{離間策|りかんさく}}にのった{{趙王|ちょうおう}}によって殺され、その翌年{{趙|ちょう}}は{{滅亡|めつぼう}}する。{{合従軍|がっしょうぐん}}の総指揮は作中の{{脚色|きゃくしょく}}。",
  },
  {
    name: "{{桓騎|かんき}}",
    level: "model",
    manga: "{{野盗|やとう}}あがりの{{秦|しん}}の大将軍。{{残虐|ざんぎゃく}}だが{{奇策|きさく}}に長け、{{黒羊丘|こくようきゅう}}・{{平陽|へいよう}}などで{{勝利|しょうり}}を重ねる。{{肥下|ひか}}の戦いで{{李牧|りぼく}}に{{敗|やぶ}}れ戦死。",
    history: "モデルは{{秦|しん}}の将軍・{{桓齮|かんき}}。前234年に{{平陽|へいよう}}で{{趙軍|ちょうぐん}}10万を{{斬|き}}ったと記録される。翌年{{李牧|りぼく}}に{{敗|やぶ}}れ、『{{史記|しき}}』は「{{走|はし}}った（逃げた）」と書くだけで最期ははっきりしない。{{燕|えん}}に{{亡命|ぼうめい}}した{{樊於期|はんおき}}と同一人物とする説もある。",
  },
  {
    name: "{{王翦|おうせん}}",
    level: "real",
    manga: "{{仮面|かめん}}をかぶった{{謎|なぞ}}の多い大将軍。「自分が王になる」{{野心|やしん}}を{{疑|うたが}}われながらも、{{鄴|ぎょう}}攻略など大きな戦で総大将を{{務|つと}}める。",
    history: "{{秦|しん}}の統一戦争で最大の{{功労者|こうろうしゃ}}。{{趙|ちょう}}を{{滅|ほろ}}ぼし、{{楚|そ}}攻めでは60万の兵を求めて{{項燕|こうえん}}を{{破|やぶ}}った。出陣前に王へ田畑や屋敷を{{何度|なんど}}もねだり、「{{謀反|むほん}}の心はない」と示したという{{逸話|いつわ}}が残る。王になる{{野心|やしん}}は作中の{{脚色|きゃくしょく}}。",
  },
  {
    name: "{{蒙恬|もうてん}}",
    level: "real",
    manga: "{{名門|めいもん}}{{蒙家|もうけ}}の{{御曹司|おんぞうし}}で、信・{{王賁|おうほん}}と出世を競うライバル。{{楽華隊|がくかたい}}を率いる。",
    history: "{{祖父|そふ}}{{蒙驁|もうごう}}・父{{蒙武|もうぶ}}とも実在の{{秦|しん}}の将軍。{{蒙恬|もうてん}}は統一後に30万の兵で{{匈奴|きょうど}}を{{討|う}}ち、万里の長城を築いた。{{始皇帝|しこうてい}}の死後、{{趙高|ちょうこう}}らの{{陰謀|いんぼう}}で自害に追い{{込|こ}}まれる。筆を発明したという言い伝えもある。",
  },
  {
    name: "{{王賁|おうほん}}",
    level: "real",
    manga: "{{王翦|おうせん}}の{{息子|むすこ}}。{{誇|ほこ}}り高い{{槍|やり}}の名手で、{{玉鳳隊|ぎょくほうたい}}を率いる。信とは{{衝突|しょうとつ}}しながら{{認|みと}}め合う。",
    history: "実在の将軍で、統一戦争の後半に大{{活躍|かつやく}}した。前225年に{{黄河|こうが}}の水を引き{{込|こ}}んで{{魏|ぎ}}の都{{大梁|たいりょう}}を水{{攻|ぜ}}めにして{{魏|ぎ}}を{{滅|ほろ}}ぼし、のちに{{燕|えん}}・{{代|だい}}、最後の{{斉|せい}}も平定した。",
  },
  {
    name: "{{羌瘣|きょうかい}}",
    level: "model",
    manga: "{{暗殺|あんさつ}}一族「{{蚩尤|しゆう}}」出身の少女。{{巫舞|みぶ}}という{{剣技|けんぎ}}を使い、{{飛信隊|ひしんたい}}の副長として信を支える。",
    history: "『{{史記|しき}}』には前229年、{{王翦|おうせん}}とともに{{趙|ちょう}}を攻めた将として名前が出るだけ。性別の記述がないため、作者は女性として描いたと語っている。{{蚩尤|しゆう}}の一族という設定は創作。",
  },
  {
    name: "{{昌平君|しょうへいくん}}",
    level: "real",
    manga: "{{秦|しん}}の軍総司令。{{呂不韋|りょふい}}{{陣営|じんえい}}から政の側へ移り、統一戦争の作戦を立てる。{{楚|そ}}の王族の血を引く。",
    history: "{{楚|そ}}の公子で、{{秦|しん}}で{{嫪毐|ろうあい}}の乱の{{鎮圧|ちんあつ}}にあたった。のちに{{楚|そ}}へ{{戻|もど}}り、{{項燕|こうえん}}に{{擁立|ようりつ}}されて{{秦|しん}}に{{抵抗|ていこう}}し、前223年に戦死したとされる。作中で{{秦|しん}}の軍師であるほどの記録はない。",
  },
  {
    name: "{{呂不韋|りょふい}}",
    level: "real",
    manga: "{{秦|しん}}の{{相国|しょうこく}}。巨大な{{財力|ざいりょく}}と{{人脈|じんみゃく}}で政と王権を争う。",
    history: "大商人から{{秦|しん}}の{{宰相|さいしょう}}にまで{{昇|のぼ}}った実在の人物。人質だった{{子楚|しそ}}（政の父）を王位につけ、学者を集めて『{{呂氏春秋|りょししゅんじゅう}}』を編ませた。{{嫪毐|ろうあい}}の乱に連座して失脚し、前235年に自ら毒を飲んだ。『{{史記|しき}}』には政の実の父だとする説も書かれている。",
  },
  {
    name: "{{成蟜|せいきょう}}",
    level: "real",
    manga: "政の異母弟。物語の冒頭で王位を{{奪|うば}}う反乱を起こすが、のちに政と和解し、{{屯留|とんりゅう}}で命を落とす。",
    history: "{{長安君|ちょうあんくん}}{{成蟜|せいきょう}}として実在。前239年、{{趙|ちょう}}を攻める{{途中|とちゅう}}の{{屯留|とんりゅう}}で反乱を起こし死んだと記録される。1巻の「王弟反乱」で王宮を{{乗|の}}っ取る話は創作。",
  },
  {
    name: "{{龐煖|ほうけん}}",
    level: "model",
    manga: "「{{武神|ぶしん}}」を名乗る{{趙|ちょう}}の{{三大天|さんだいてん}}。{{王騎|おうき}}や{{麃公|ひょうこう}}を{{討|う}}つ{{圧倒的|あっとうてき}}な{{武人|ぶじん}}。",
    history: "{{趙|ちょう}}の将軍として実在し、前242年に{{燕|えん}}の{{劇辛|げきしん}}を{{破|やぶ}}り、前241年の{{合従軍|がっしょうぐん}}では{{秦|しん}}の{{蕞|さい}}を攻めた。{{兵法|へいほう}}書の著者とも伝わり、むしろ{{知将|ちしょう}}・{{論客|ろんきゃく}}の顔を持つ。{{武神|ぶしん}}という人物像は創作。",
  },
  {
    name: "{{廉頗|れんぱ}}",
    level: "real",
    manga: "かつての{{趙|ちょう}}の{{三大天|さんだいてん}}。{{魏|ぎ}}に{{亡命|ぼうめい}}し、山陽の戦いで{{秦|しん}}と{{戦|たたか}}う。",
    history: "{{藺相如|りんしょうじょ}}との「{{刎頸|ふんけい}}の交わり」で知られる{{趙|ちょう}}の名将。{{趙王|ちょうおう}}に{{疎|うと}}まれて{{魏|ぎ}}へ、さらに{{楚|そ}}へ移り、{{楚|そ}}で{{没|ぼっ}}した。山陽で{{秦|しん}}と戦った記録はない。",
  },
  {
    name: "{{楊端和|ようたんわ}}",
    level: "model",
    manga: "山の民を{{束|たば}}ねる美しき女王。政と同盟を結び、{{鄴|ぎょう}}攻略などで{{秦|しん}}とともに戦う。",
    history: "{{秦|しん}}の将軍として実在し、{{鄴|ぎょう}}攻め（前236年）や{{邯鄲|かんたん}}攻め（前229年）に名が見える。山の民の王で女性という設定は創作。",
  },
  {
    name: "{{漂|ひょう}}・{{河了貂|かりょうてん}}・{{紫夏|しか}}",
    level: "fiction",
    manga: "政の{{影武者|かげむしゃ}}として命を落とす信の親友・{{漂|ひょう}}、{{飛信隊|ひしんたい}}の軍師となる山民族の少女・{{河了貂|かりょうてん}}、少年時代の政を{{趙|ちょう}}から{{逃|に}}がした{{闇商人|やみしょうにん}}・{{紫夏|しか}}。",
    history: "いずれも史書に登場しない作者オリジナルの人物。とくに{{漂|ひょう}}と{{河了貂|かりょうてん}}は、記録の少ない{{李信|りしん}}の{{若|わか}}き日を物語として{{膨|ふく}}らませるために{{生|う}}み出された。",
  },
];

// 作中の主な戦いと史実の年代。fact は史書での記録の有無
const BATTLES = [
  { year: "前245年ごろ", name: "{{蛇甘平原|だかんへいげん}}の戦い", vol: "5〜7巻", fact: "{{麃公|ひょうこう}}が{{魏|ぎ}}の{{巻|けん}}を攻めた記録（前245年）をもとにした創作の{{会戦|かいせん}}。" },
  { year: "前244年", name: "{{馬陽|ばよう}}の戦い", vol: "9〜16巻", fact: "{{王齮|おうき}}が死んだ年。{{馬陽|ばよう}}での{{会戦|かいせん}}は創作。" },
  { year: "前242年", name: "山陽攻略", vol: "17〜23巻", fact: "{{蒙驁|もうごう}}が{{魏|ぎ}}を攻めて20の城を取り、{{東郡|とうぐん}}を置いた。史実どおり。" },
  { year: "前241年", name: "{{合従軍|がっしょうぐん}}（{{函谷関|かんこくかん}}・{{蕞|さい}}）", vol: "25〜33巻", fact: "{{楚|そ}}・{{趙|ちょう}}・{{魏|ぎ}}・{{韓|かん}}などが連合して{{秦|しん}}を攻め、{{龐煖|ほうけん}}が{{蕞|さい}}に{{迫|せま}}った。史実どおり。" },
  { year: "前239年", name: "{{屯留|とんりゅう}}・{{成蟜|せいきょう}}の乱", vol: "34〜35巻", fact: "{{成蟜|せいきょう}}が{{屯留|とんりゅう}}で反乱して死んだ。史実どおり。" },
  { year: "前238年", name: "{{加冠|かかん}}の{{儀|ぎ}}と{{嫪毐|ろうあい}}の乱", vol: "37〜40巻", fact: "政の成人の{{儀式|ぎしき}}の年に、{{太后|たいこう}}の{{寵臣|ちょうしん}}{{嫪毐|ろうあい}}が反乱し{{鎮圧|ちんあつ}}された。史実どおり。" },
  { year: "前236年", name: "{{鄴|ぎょう}}攻略（{{朱海平原|しゅかいへいげん}}）", vol: "46〜59巻", fact: "{{王翦|おうせん}}・{{桓齮|かんき}}・{{楊端和|ようたんわ}}が{{趙|ちょう}}の{{鄴|ぎょう}}などを攻め取った。大筋は史実。" },
  { year: "前234年", name: "{{平陽|へいよう}}・{{武城|ぶじょう}}の戦い", vol: "62〜64巻", fact: "{{桓齮|かんき}}が{{趙軍|ちょうぐん}}を{{破|やぶ}}り、10万を{{斬|き}}った。史実どおり。" },
  { year: "前233年", name: "{{肥下|ひか}}の戦い（{{宜安|ぎあん}}）", vol: "65〜69巻", fact: "{{李牧|りぼく}}が{{桓齮|かんき}}を{{破|やぶ}}った。史実どおり。" },
  { year: "前232年", name: "{{番吾|はんご}}の戦い", vol: "70〜72巻", fact: "{{李牧|りぼく}}が再び{{秦軍|しんぐん}}を退けた。史実どおり。" },
  { year: "前230年", name: "{{韓|かん}}の{{滅亡|めつぼう}}", vol: "73巻〜", fact: "{{内史騰|ないしとう}}が{{韓王|かんおう}}{{安|あん}}を捕らえ、六国で最初に{{韓|かん}}が{{滅|ほろ}}んだ。史実どおり。" },
];

// 漫画の先に待つ史実（統一までの流れ）
const AHEAD = [
  { year: "前229年", text: "{{趙|ちょう}}の{{李牧|りぼく}}、{{秦|しん}}の{{離間策|りかんさく}}によって{{趙王|ちょうおう}}に殺される" },
  { year: "前228年", text: "{{王翦|おうせん}}が{{邯鄲|かんたん}}を落とし、{{趙|ちょう}}が{{滅亡|めつぼう}}" },
  { year: "前227年", text: "{{燕|えん}}の{{太子丹|たいしたん}}が送った{{刺客|しかく}}・{{荊軻|けいか}}が政の暗殺に失敗" },
  { year: "前225年", text: "{{王賁|おうほん}}の水{{攻|ぜ}}めで{{魏|ぎ}}が{{滅亡|めつぼう}}。同じ年、{{李信|りしん}}が{{楚|そ}}に大敗" },
  { year: "前223年", text: "{{王翦|おうせん}}が{{楚|そ}}を{{滅|ほろ}}ぼす。{{昌平君|しょうへいくん}}と{{項燕|こうえん}}が戦死" },
  { year: "前222年", text: "{{王賁|おうほん}}・{{李信|りしん}}が{{燕|えん}}と{{代|だい}}を平定" },
  { year: "前221年", text: "{{斉|せい}}が{{降伏|こうふく}}し天下統一。政は「{{始皇帝|しこうてい}}」を名乗る" },
];

// テレビアニメ（NHK）
const ANIME = [
  { season: "第1シリーズ", date: "2012年6月〜2013年2月", ep: "全38話", arc: "王弟反乱〜{{馬陽|ばよう}}の戦い" },
  { season: "第2シリーズ", date: "2013年6月〜2014年3月", ep: "全39話", arc: "山陽攻略〜{{合従軍|がっしょうぐん}}の始まり" },
  { season: "第3シリーズ", date: "2020年4月〜2021年10月", ep: "全26話", arc: "{{合従軍|がっしょうぐん}}編（{{函谷関|かんこくかん}}・{{蕞|さい}}）" },
  { season: "第4シリーズ", date: "2022年4月〜10月", ep: "全26話", arc: "{{成蟜|せいきょう}}の{{変|へん}}・{{著雍|ちょよう}}攻略・{{毐国|あいこく}}反乱" },
  { season: "第5シリーズ", date: "2024年1月〜3月", ep: "全13話", arc: "{{黒羊丘|こくようきゅう}}の戦い" },
  { season: "第6シリーズ", date: "2025年10月〜12月", ep: "全13話", arc: "{{鄴|ぎょう}}攻略戦（{{朱海平原|しゅかいへいげん}}）" },
];

// 実写映画（監督：佐藤信介、主演：山﨑賢人）
const MOVIES = [
  { title: "キングダム", year: "2019年4月", body: "信と{{嬴政|えいせい}}の出会い、{{漂|ひょう}}の死、王弟{{成蟜|せいきょう}}の反乱から王宮を取り{{戻|もど}}すまで（原作1〜5巻）。" },
  { title: "キングダム2 {{遥|はる}}かなる大地へ", year: "2022年7月", body: "信の{{初陣|ういじん}}となる{{魏|ぎ}}との{{蛇甘平原|だかんへいげん}}の戦い。{{羌瘣|きょうかい}}が初登場する。" },
  { title: "キングダム {{運命|うんめい}}の{{炎|ほのお}}", year: "2023年7月", body: "政の少年時代を救った{{紫夏|しか}}の物語と、{{趙|ちょう}}との{{馬陽|ばよう}}の戦いの始まり。" },
  { title: "キングダム 大将軍の{{帰還|きかん}}", year: "2024年7月", body: "{{馬陽|ばよう}}の戦いの決着と{{王騎|おうき}}の最期。興行収入80億円を{{超|こ}}え、シリーズ最高のヒットとなった。" },
  { title: "キングダム {{魂|たましい}}の決戦", year: "2026年7月", body: "{{馬陽|ばよう}}から3年後、六国が手を結んで{{秦|しん}}に{{攻|せ}}め{{込|こ}}む{{合従軍|がっしょうぐん}}編へ。{{李牧|りぼく}}役は小栗旬。" },
];

const MANGA_PRODUCTS = [
  { label: "第1巻", asin: "408877079X" },
  { label: "最新80巻", asin: "4088942671", image: "71+dBlS8bYL" },
];

const MEDIA_PRODUCTS = [
  { label: "映画 Blu-ray BOX", asin: "B0H1W7DK8R", image: "71I3APjogPL" },
  { label: "アニメ第6シリーズ BOX", asin: "B0G8Z97RSS" },
];

const BOOK_PRODUCTS = [{ label: "集英社新書", asin: "4087210758" }];

const FAQ = [
  {
    q: "『キングダム』は実話ですか？",
    a: "{{秦|しん}}の天下統一という大きな流れと、{{嬴政|えいせい}}・{{李信|りしん}}・{{李牧|りぼく}}・{{王翦|おうせん}}などの人物は『{{史記|しき}}』に記録された史実です。ただし史書の記述はごく短いため、人物の性格や会話、戦いの細かな{{展開|てんかい}}の多くは作者の創作です。{{漂|ひょう}}・{{河了貂|かりょうてん}}などのオリジナルの人物もいます。",
  },
  {
    q: "主人公の信は実在しますか？",
    a: "実在します。{{秦|しん}}の将軍{{李信|りしん}}で、{{燕|えん}}の{{太子丹|たいしたん}}の追撃や{{楚|そ}}攻め、{{燕|えん}}・{{斉|せい}}の平定に名前が見えます。ただし{{下僕|げぼく}}出身という生い立ちや、{{若|わか}}いころの{{活躍|かつやく}}は記録になく創作です。",
  },
  {
    q: "『キングダム』は何年ごろの話ですか？",
    a: "物語の始まりは{{嬴政|えいせい}}が{{秦王|しんおう}}になって間もない紀元前245年ごろで、戦国時代の末期にあたります。最新の展開では紀元前230年の{{韓|かん}}の{{滅亡|めつぼう}}前後までが描かれており、天下統一（前221年）まではあと10年ほどです。",
  },
  {
    q: "『キングダム』は何巻まで出ていますか？",
    a: "2026年8月発売の80巻が最新刊です（2026年10月時点）。『週刊ヤングジャンプ』で2006年から連載中で、累計発行部数は1億2000万部を{{超|こ}}えています。",
  },
  {
    q: "史実ではこの後どうなりますか？",
    a: "{{趙|ちょう}}では{{李牧|りぼく}}が{{讒言|ざんげん}}で殺され、前228年に{{趙|ちょう}}が{{滅|ほろ}}びます。続いて{{魏|ぎ}}・{{楚|そ}}・{{燕|えん}}・{{斉|せい}}が{{滅|ほろ}}び、前221年に{{秦|しん}}が天下を統一します。{{李信|りしん}}は{{楚|そ}}攻めで大敗を{{喫|きっ}}しますが、その後も将軍として統一戦争の最後まで戦いました。",
  },
];

function ProductLinks({ title, products }) {
  return (
    <div className="flex gap-3 flex-wrap mt-3">
      {products.map((p) => (
        <a
          key={p.label}
          href={buildAmazonUrl(p.asin)}
          target="_blank"
          rel="nofollow noreferrer sponsored"
          className="flex flex-col items-center gap-2"
          style={{ width: 118 }}
        >
          <img
            src={productImage(p)}
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

function AffiliateNote() {
  return (
    <p style={{ fontSize: 10.5, color: COLORS.mist, marginTop: 10 }}>
      ※ 一部のリンクはAmazonアソシエイトによるアフィリエイト広告を含みます。価格・在庫はリンク先でご確認ください
    </p>
  );
}

const cellStyle = { padding: "7px 10px", borderTop: "1px solid #E8E0CA", verticalAlign: "top" };

export default function KingdomPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    about: ["キングダム (漫画)", "原泰久", "始皇帝", "李信", "戦国時代 (中国)"],
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/kingdom` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "漫画『キングダム』と史実", item: `${SITE_URL}/kingdom` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(articleJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(breadcrumbJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stripRuby(JSON.stringify(faqJsonLd)) }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 6 }}>
          漫画『キングダム』と<ruby>史実<rt>しじつ</rt></ruby>
        </h1>
        <p style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, color: COLORS.gold, marginBottom: 14 }}>
          登場人物は実在した？ 物語と『<ruby>史記<rt>しき</rt></ruby>』を<ruby>比<rt>くら</rt></ruby>べる
        </p>
        <p style={{ ...bodyText, fontSize: 13.5, marginBottom: 28 }}>
          <RubyText text="『キングダム』は、原{{泰久|やすひさ}}が『週刊ヤングジャンプ』で2006年から連載している歴史漫画です。舞台は紀元前3世紀、中国の戦国時代の末期。{{下僕|げぼく}}の少年・信が「天下の大将軍」を、{{秦|しん}}の若き王・{{嬴政|えいせい}}（のちの{{始皇帝|しこうてい}}）が中華統一を目指し、ともに乱世を{{駆|か}}け上がっていきます。" />
          <RubyText text="登場人物の多くは司馬{{遷|せん}}の『{{史記|しき}}』に名前が残る実在の人物ですが、史書の記述はほんの数行ということも少なくありません。このページでは作品の{{紹介|しょうかい}}とあわせて、主な登場人物と戦いを史実と{{比|くら}}べ、アニメ・実写映画もまとめて{{紹介|しょうかい}}します。" />
        </p>

        <nav aria-label="目次" className="p-4 mb-9" style={card}>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>目次</div>
          <ol className="flex flex-col gap-1" style={{ fontSize: 12.5, listStyle: "decimal", paddingLeft: 20 }}>
            {[
              ["about", "漫画『キングダム』とは"],
              ["characters", "登場人物は実在した？史実との{{比較|ひかく}}"],
              ["battles", "作中の戦いは史実の何年？"],
              ["ahead", "漫画の先に待つ史実（ネタバレ注意）"],
              ["anime", "アニメ『キングダム』"],
              ["movies", "実写映画『キングダム』"],
              ["books", "史実をもっと知りたい人へ"],
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

        <section style={{ marginBottom: 36 }} id="about">
          <h2 style={sectionHeading}>漫画『キングダム』とは</h2>
          <div className="flex flex-col gap-3" style={bodyText}>
            <p>
              <RubyText text="物語は、{{秦|しん}}の田舎で{{下僕|げぼく}}として育った信と{{漂|ひょう}}の二人の少年から始まります。王宮に召し{{抱|かか}}えられた{{漂|ひょう}}は、{{秦王|しんおう}}・{{嬴政|えいせい}}の{{影武者|かげむしゃ}}として命を落とし、信は{{漂|ひょう}}に{{瓜|うり}}二つの政と出会います。王弟{{成蟜|せいきょう}}の反乱から政を守った信は、{{戦場|せんじょう}}で{{武功|ぶこう}}を重ねて百人{{将|しょう}}、千人{{将|しょう}}、将軍へと{{昇|のぼ}}っていきます。" />
            </p>
            <p>
              <RubyText text="{{王騎|おうき}}・{{李牧|りぼく}}・{{桓騎|かんき}}といった{{強烈|きょうれつ}}な{{個性|こせい}}を持つ将軍たちの{{駆|か}}け引きと、数十万の軍がぶつかる{{迫力|はくりょく}}ある{{合戦|かっせん}}の描写が大きな{{魅力|みりょく}}です。2013年に第17回手塚治虫文化賞マンガ大賞を受賞し、累計発行部数は1億2000万部を{{超|こ}}えています（2025年10月時点）。物語は{{秦|しん}}国内の{{争|あらそ}}いを描く前半と、六国を{{滅|ほろ}}ぼしていく「六国{{征覇|せいは}}編」に分かれ、2026年10月時点の最新刊は80巻です。" />
            </p>
          </div>
          <ProductLinks title="キングダム" products={MANGA_PRODUCTS} />
          <AffiliateNote />
        </section>

        <section style={{ marginBottom: 36 }} id="characters">
          <h2 style={sectionHeading}>登場人物は実在した？<ruby>史実<rt>しじつ</rt></ruby>との比較</h2>
          <p style={{ ...bodyText, marginBottom: 10 }}>
            <RubyText text="史実の出典は主に『{{史記|しき}}』です。人物ごとに、史書との{{距離|きょり}}を三つに分けて示しました。" />
          </p>
          <div className="flex gap-3 flex-wrap mb-4" style={{ fontSize: 11.5, color: COLORS.inkSoft }}>
            {[
              ["real", "史書に記録のある実在の人物"],
              ["model", "名前や事績にモデルがあるが、人物像は大きく創作"],
              ["fiction", "作者オリジナル"],
            ].map(([key, note]) => (
              <span key={key} className="flex items-center gap-1.5">
                <span style={{ fontSize: 11, fontWeight: 700, color: FACT_LEVEL[key].color, border: `1px solid ${FACT_LEVEL[key].color}`, padding: "1px 6px" }}>{FACT_LEVEL[key].label}</span>
                {note}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {CHARACTERS.map((c) => {
              const level = FACT_LEVEL[c.level];
              return (
                <div key={c.name} className="p-4" style={{ ...card, borderLeft: `3px solid ${level.color}` }}>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}>
                      {c.href ? (
                        <a href={c.href} style={{ color: COLORS.ink, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                          <RubyText text={c.name} />
                        </a>
                      ) : (
                        <RubyText text={c.name} />
                      )}
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: level.color, border: `1px solid ${level.color}`, padding: "1px 6px" }}>{level.label}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.gold }}>漫画では</div>
                      <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 2 }}>
                        <RubyText text={c.manga} />
                      </p>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.jade }}>史実では</div>
                      <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 2 }}>
                        <RubyText text={c.history} />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 12 }}>
            政の生涯は<a href="/qinshihuang" style={linkStyle}><ruby>始皇帝<rt>しこうてい</rt></ruby>とは</a>、戦国時代の人物は<a href="/people/zhanguo" style={linkStyle}>戦国時代の人物一覧</a>で詳しく紹介しています。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="battles">
          <h2 style={sectionHeading}>作中の戦いは史実の何年？</h2>
          <p style={{ ...bodyText, marginBottom: 12 }}>
            <RubyText text="作中には年号がほとんど出てきませんが、主な戦いは『{{史記|しき}}』{{秦始皇本紀|しんしこうほんぎ}}などの記録と対応させることができます。巻数はおおよその{{目安|めやす}}です。" />
          </p>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, minWidth: 460 }}>
              <thead>
                <tr>
                  {["史実の年", "作中の戦い", "巻", "史書の記録"].map((h) => (
                    <th
                      key={h}
                      style={{ padding: "8px 10px", borderBottom: `2px solid ${COLORS.vermilion}`, textAlign: "left", fontFamily: "var(--font-serif), serif", fontSize: 12, color: COLORS.gold, whiteSpace: "nowrap" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BATTLES.map((b) => (
                  <tr key={b.name}>
                    <td style={{ ...cellStyle, color: COLORS.inkSoft, fontFamily: "var(--font-serif), serif", whiteSpace: "nowrap" }}>{b.year}</td>
                    <td style={{ ...cellStyle, color: COLORS.ink, fontWeight: 700, fontFamily: "var(--font-serif), serif" }}>
                      <RubyText text={b.name} />
                    </td>
                    <td style={{ ...cellStyle, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>{b.vol}</td>
                    <td style={{ ...cellStyle, color: COLORS.inkSoft, lineHeight: 1.6 }}>
                      <RubyText text={b.fact} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 12 }}>
            <ruby>長平<rt>ちょうへい</rt></ruby>の戦いなど作中で語られる過去の戦いも含め、戦国時代の合戦は<a href="/chunqiu-zhanguo-battles" style={linkStyle}>春秋・戦国時代 合戦マップ</a>で地図とともに紹介しています。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="ahead">
          <h2 style={sectionHeading}>漫画の先に待つ史実（ネタバレ注意）</h2>
          <p style={{ ...bodyText, marginBottom: 12 }}>
            <RubyText text="史実をたどると、物語がこの先どこへ向かうのかが見えてきます。原作の展開を知りたくない人は読み飛ばしてください。" />
          </p>
          <ol className="flex flex-col" style={{ ...card, padding: "6px 16px" }}>
            {AHEAD.map((a, i) => (
              <li key={a.year} className="flex gap-3 py-2" style={{ borderTop: i === 0 ? "none" : "1px solid #E8E0CA" }}>
                <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 12.5, fontWeight: 700, color: COLORS.vermilion, minWidth: 64 }}>{a.year}</span>
                <span style={{ fontSize: 12.5, lineHeight: 1.7, color: COLORS.inkSoft }}>
                  <RubyText text={a.text} />
                </span>
              </li>
            ))}
          </ol>
          <p style={{ ...bodyText, marginTop: 12 }}>
            <RubyText text="統一からわずか11年後の前210年、{{始皇帝|しこうてい}}は旅の途中で{{病死|びょうし}}します。{{蒙恬|もうてん}}は{{趙高|ちょうこう}}の{{陰謀|いんぼう}}で自害させられ、{{秦|しん}}は前206年に{{滅亡|めつぼう}}。その{{秦|しん}}を{{倒|たお}}した{{項羽|こうう}}は、{{李信|りしん}}を{{破|やぶ}}った{{楚|そ}}の将軍{{項燕|こうえん}}の孫でした。" />
          </p>
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 8 }}>
            その後の<ruby>項羽<rt>こうう</rt></ruby>と<ruby>劉邦<rt>りゅうほう</rt></ruby>の争いは<a href="/chuhan-battles" style={linkStyle}><ruby>楚漢戦争<rt>そかんせんそう</rt></ruby> 合戦マップ</a>をご覧ください。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="anime">
          <h2 style={sectionHeading}>アニメ『キングダム』</h2>
          <p style={{ ...bodyText, marginBottom: 12 }}>
            <RubyText text="テレビアニメはNHKで放送され、2025年までに6シリーズが作られました。アニメーション制作はぴえろ（第3シリーズからスタジオサインポストと共同）。信の声は森田成一、{{嬴政|えいせい}}は福山潤が演じています。第6シリーズの続編の制作も決まっています。" />
          </p>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, minWidth: 420 }}>
              <thead>
                <tr>
                  {["シリーズ", "放送", "話数", "主な内容"].map((h) => (
                    <th
                      key={h}
                      style={{ padding: "8px 10px", borderBottom: `2px solid ${COLORS.vermilion}`, textAlign: "left", fontFamily: "var(--font-serif), serif", fontSize: 12, color: COLORS.gold, whiteSpace: "nowrap" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ANIME.map((a) => (
                  <tr key={a.season}>
                    <td style={{ ...cellStyle, color: COLORS.ink, fontWeight: 700, fontFamily: "var(--font-serif), serif", whiteSpace: "nowrap" }}>{a.season}</td>
                    <td style={{ ...cellStyle, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>{a.date}</td>
                    <td style={{ ...cellStyle, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>{a.ep}</td>
                    <td style={{ ...cellStyle, color: COLORS.inkSoft, lineHeight: 1.6 }}>
                      <RubyText text={a.arc} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 11, color: COLORS.inkSoft, marginTop: 8 }}>
            第1・第2シリーズはNHK BSプレミアム、第3シリーズ以降はNHK総合で放送。
          </p>
        </section>

        <section style={{ marginBottom: 36 }} id="movies">
          <h2 style={sectionHeading}>実写映画『キングダム』</h2>
          <p style={{ ...bodyText, marginBottom: 12 }}>
            <RubyText text="監督は佐藤信介、信を山﨑賢人、{{嬴政|えいせい}}を吉沢亮が演じる実写映画シリーズ。{{王騎|おうき}}役の大沢たかお、{{楊端和|ようたんわ}}役の長澤まさみなど豪華なキャストと、中国ロケによる大規模な{{合戦|かっせん}}シーンで、5作続けて興行収入50億円を{{超|こ}}えるヒットとなっています。" />
          </p>
          <div className="flex flex-col gap-3">
            {MOVIES.map((m, i) => (
              <div key={m.title} className="p-4" style={{ ...card, borderLeft: `3px solid ${COLORS.vermilion}` }}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span style={{ fontSize: 11, fontWeight: 700, color: COLORS.vermilion }}>第{i + 1}作</span>
                  <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                    『<RubyText text={m.title} />』
                  </span>
                  <span style={{ fontSize: 11, color: COLORS.gold }}>{m.year}公開</span>
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={m.body} />
                </p>
              </div>
            ))}
          </div>
          <ProductLinks title="キングダム" products={MEDIA_PRODUCTS} />
          <AffiliateNote />
        </section>

        <section style={{ marginBottom: 36 }} id="books">
          <h2 style={sectionHeading}>史実をもっと知りたい人へ</h2>
          <div className="p-4" style={card}>
            <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
              『<ruby>始皇帝<rt>しこうてい</rt></ruby> 中華統一の思想 『キングダム』で<ruby>解<rt>と</rt></ruby>く中国大陸の謎』
            </div>
            <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>
              <ruby>渡邉義浩<rt>わたなべよしひろ</rt></ruby> / 集英社新書（2019年）
            </div>
            <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
              <RubyText text="中国古代史の研究者が、作中の場面を手がかりに{{秦|しん}}の統一を支えた{{法家|ほうか}}の思想や戦国時代の社会を解説する入門書。漫画と史実の橋渡しにちょうどよい一冊です。" />
            </p>
            <ProductLinks title="始皇帝 中華統一の思想" products={BOOK_PRODUCTS} />
          </div>
          <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 12 }}>
            『<ruby>史記<rt>しき</rt></ruby>』そのものについては<a href="/history-books" style={linkStyle}>中国の<ruby>歴史書<rt>れきししょ</rt></ruby></a>、戦国時代を描いた小説は<a href="/novelists" style={linkStyle}>中国史を題材にした日本人小説家一覧</a>で紹介しています。
          </p>
          <AffiliateNote />
        </section>

        <section style={{ marginBottom: 36 }} id="faq">
          <h2 style={sectionHeading}>『キングダム』についてのよくある疑問</h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((f) => (
              <div key={f.q} style={{ ...card, padding: "14px 16px" }}>
                <h3 style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                  <span style={{ color: COLORS.vermilion, marginRight: 6 }}>Q.</span>
                  <RubyText text={f.q} />
                </h3>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}><RubyText text={f.a} /></p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            『キングダム』の舞台になった時代の出来事や人物は、年表・人物ページもあわせてご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras/zhanguo" variant="solid">戦国時代の解説を見る</NavButton>
            <NavButton href="/qinshihuang" variant="outline"><ruby>始皇帝<rt>しこうてい</rt></ruby>とは</NavButton>
            <NavButton href="/chunqiu-zhanguo-battles" variant="outline">春秋・戦国 合戦マップ</NavButton>
            <NavButton href="/terracotta-army" variant="outline"><ruby>兵馬俑<rt>へいばよう</rt></ruby>の謎</NavButton>
          </div>
        </section>

        <A8AdBlock ad="audible" className="mt-10" />

        <RelatedEraGuides path="/kingdom" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
