// 日本史・中国史 対照年表のデータ。対照年表ページのほか、時代ページ・出来事ページから
// 「この頃の日本は？」として該当箇所へリンクするためにも使う（サーバー側専用）。
import { ERAS, stripRuby } from "@/lib/data";

export const JAPAN_CHINA_TIMELINE_PATH = "/japan-china-timeline";

// 中国側は、このサイトの年表データから実際の出来事を引いてリンクを張る
function findEvent(eraId, titleIncludes) {
  const era = ERAS.find((e) => e.id === eraId);
  if (!era) return null;
  const event = era.events.find((ev) => stripRuby(ev.title).includes(titleIncludes));
  return event ? { era, event } : null;
}

function findEventHref(eraId, titleIncludes) {
  const found = findEvent(eraId, titleIncludes);
  return found ? `/events/${found.event.slug}` : null;
}

// 日本側の出来事から、関わりの深い中国側のページへ張るリンク
function eventLink(eraId, titleIncludes) {
  const found = findEvent(eraId, titleIncludes);
  if (!found) return null;
  return { href: `/events/${found.event.slug}`, label: found.event.title, eraName: found.era.name };
}

function eraLink(eraId) {
  const era = ERAS.find((e) => e.id === eraId);
  if (!era) return null;
  return { href: `/eras/${era.id}`, label: `${era.name}の時代解説`, eraName: era.name };
}

// eraId: 中国側はERASのid（旧石器時代のみ独自）、日本側は時代ごとの独自id。時代ジャンプのアンカーに使う。
// sortYear: 紀元前はマイナスの数値。中国イベント（cn）と日本イベント（jp）を
// 実際の年代順に1本のリストへマージして表示する。
const CHINA_EVENTS = [
  { eraId: "paleolithic", sortYear: -700000, yearLabel: "約70万年前", event: "北京原人が{{周口店|しゅうこうてん}}で暮らす（火の使用）", era: "旧石器時代" },
  { eraId: "paleolithic", sortYear: -18000, yearLabel: "前18000年{{頃|ごろ}}", event: "{{仙人洞|せんにんどう}}{{遺跡|いせき}}で世界最古級の土器がつくられる", era: "旧石器時代" },
  { eraId: "neolithic", sortYear: -7000, yearLabel: "前7000年{{頃|ごろ}}", event: "{{長江|ちょうこう}}文明：{{河姆渡|かぼと}}文化で{{稲作|いなさく}}が営まれる", era: "新石器文化（{{長江|ちょうこう}}文明）", href: findEventHref("neolithic", "河姆渡") },
  { eraId: "neolithic", sortYear: -5000, icon: "caitao", yearLabel: "前5000年{{頃|ごろ}}", event: "黄河文明：{{仰韶|ぎょうしょう}}文化が栄える（{{彩陶|さいとう}}）", era: "新石器文化（黄河文明）", href: findEventHref("neolithic", "仰韶") },
  { eraId: "neolithic", sortYear: -4000, yearLabel: "前4000年{{頃|ごろ}}", event: "{{大汶口|だいぶんこう}}文化が広がる", era: "新石器文化（黄河文明）", href: findEventHref("neolithic", "大汶口") },
  { eraId: "neolithic", sortYear: -3000, yearLabel: "前3000年{{頃|ごろ}}", event: "{{竜山|りゅうざん}}文化が栄える（{{黒陶|こくとう}}・{{城壁|じょうへき}}集落）", era: "新石器文化（黄河文明）", href: findEventHref("neolithic", "竜山") },
  { eraId: "neolithic", sortYear: -2700, yearLabel: "前2700年{{頃|ごろ}}", event: "{{黄帝|こうてい}}と{{蚩尤|しゆう}}の戦い（伝説）", era: "伝説の時代", href: findEventHref("neolithic", "黄帝") },
  { eraId: "neolithic", sortYear: -2200, yearLabel: "前2200年{{頃|ごろ}}", event: "{{堯|ぎょう}}・{{舜|しゅん}}の{{禅譲|ぜんじょう}}（伝説）", era: "伝説の時代", href: findEventHref("neolithic", "禅譲") },
  { eraId: "xia", sortYear: -2070, icon: "yu", yearLabel: "前2070年{{頃|ごろ}}", event: "{{禹|う}}が夏を建国", era: "夏", href: findEventHref("xia", "禹による夏の建国") },
  { eraId: "shang", sortYear: -1600, icon: "ding", yearLabel: "前1600年{{頃|ごろ}}", event: "湯王が{{殷|いん}}を建国", era: "{{殷|いん}}", href: findEventHref("shang", "湯王による殷の建国") },
  { eraId: "westernzhou", sortYear: -1046, yearLabel: "前1046年", event: "周が建国", era: "西周", href: findEventHref("westernzhou", "周の建国") },
  { eraId: "westernzhou", sortYear: -771, yearLabel: "前771年", event: "{{犬戎|けんじゅう}}の{{侵入|しんにゅう}}・{{幽王|ゆうおう}}の死（西周{{滅亡|めつぼう}}）", era: "西周", href: findEventHref("westernzhou", "幽王の死") },
  { eraId: "chunqiu", sortYear: -551, icon: "zhujian", yearLabel: "前551年", event: "{{孔子|こうし}}が生まれる", era: "春秋時代", href: findEventHref("chunqiu", "孔子の誕生") },
  { eraId: "zhanguo", sortYear: -403, yearLabel: "前403年", event: "戦国時代がはじまる（{{三家分晋|さんかぶんしん}}の公認）", era: "戦国時代", href: findEventHref("zhanguo", "三家分晋の公認") },
  { eraId: "qin", sortYear: -221, icon: "qin", yearLabel: "前221年", event: "{{秦|しん}}が中国を統一", era: "{{秦|しん}}", href: findEventHref("qin", "中国統一") },
  { eraId: "qin", sortYear: -214, icon: "wall", yearLabel: "前214年", event: "万里の長城を修築", era: "{{秦|しん}}", href: findEventHref("qin", "万里の長城の修築") },
  { eraId: "westernhan", sortYear: -202, yearLabel: "前202年", event: "{{劉邦|りゅうほう}}が漢を建国", era: "前漢", href: findEventHref("westernhan", "漢を建国") },
  { eraId: "westernhan", sortYear: -138, icon: "camel", yearLabel: "前138年", event: "{{張騫|ちょうけん}}が西域へ（シルクロードの起点）", era: "前漢", href: findEventHref("westernhan", "西域へ") },
  { eraId: "xin", sortYear: 8, yearLabel: "8年", event: "{{王莽|おうもう}}が{{皇帝|こうてい}}に{{即位|そくい}}（新の建国）", era: "新", href: findEventHref("xin", "皇帝に即位") },
  { eraId: "easternhan", sortYear: 25, yearLabel: "25年", event: "{{光武帝|こうぶてい}}が漢を再興（後漢はじまる）", era: "後漢", href: findEventHref("easternhan", "漢を再興") },
  { eraId: "easternhan", sortYear: 105, yearLabel: "105年", event: "{{蔡倫|さいりん}}が製紙法を改良", era: "後漢", href: findEventHref("easternhan", "製紙法の改良") },
  { eraId: "easternhan", sortYear: 184, yearLabel: "184年", event: "{{黄巾|こうきん}}の乱が起こる", era: "後漢", href: findEventHref("easternhan", "黄巾の乱") },
  { eraId: "sanguo", sortYear: 208, icon: "chibi", yearLabel: "208年", event: "{{赤壁|せきへき}}の戦い", era: "三国", href: findEventHref("sanguo", "赤壁の戦い") },
  { eraId: "sanguo", sortYear: 220, yearLabel: "220年", event: "{{魏|ぎ}}が建国・後漢が{{滅亡|めつぼう}}", era: "三国", href: findEventHref("sanguo", "魏の建国") },
  { eraId: "westernjin", sortYear: 280, yearLabel: "280年", event: "{{西晋|せいしん}}が中国を再統一", era: "{{西晋|せいしん}}", href: findEventHref("westernjin", "中国再統一") },
  { eraId: "westernjin", sortYear: 316, yearLabel: "316年", event: "{{西晋|せいしん}}が{{滅亡|めつぼう}}", era: "{{西晋|せいしん}}", href: findEventHref("westernjin", "西晋の滅亡") },
  { eraId: "sixteenkingdoms", sortYear: 383, yearLabel: "383年", event: "{{淝水|ひすい}}の戦い", era: "{{五胡十六国|ごこじゅうろっこく}}", href: findEventHref("sixteenkingdoms", "淝水") },
  { eraId: "nanbei", sortYear: 439, yearLabel: "439年", event: "{{北魏|ほくぎ}}が{{華北|かほく}}を統一", era: "南北朝", href: findEventHref("nanbei", "華北統一") },
  { eraId: "sui", sortYear: 589, yearLabel: "589年", event: "{{隋|ずい}}が中国を再統一", era: "{{隋|ずい}}", href: findEventHref("sui", "陳を滅ぼし中国再統一") },
  { eraId: "tang", sortYear: 618, icon: "tang", yearLabel: "618年", event: "{{唐|とう}}が建国", era: "{{唐|とう}}", href: findEventHref("tang", "唐の建国") },
  { eraId: "tang", sortYear: 626, yearLabel: "626年", event: "{{玄武門|げんぶもん}}の変・太宗が{{即位|そくい}}", era: "{{唐|とう}}", href: findEventHref("tang", "玄武門") },
  { eraId: "tang", sortYear: 755, yearLabel: "755年", event: "安史の乱が起こる", era: "{{唐|とう}}", href: findEventHref("tang", "安史の乱") },
  { eraId: "wudai", sortYear: 907, yearLabel: "907年", event: "{{唐|とう}}が{{滅亡|めつぼう}}", era: "五代十国", href: findEventHref("tang", "唐を簒奪") },
  { eraId: "northernsong", sortYear: 960, yearLabel: "960年", event: "{{趙匡胤|ちょうきょういん}}が{{宋|そう}}を建国", era: "{{北宋|ほくそう}}", href: findEventHref("northernsong", "宋の建国") },
  { eraId: "northernsong", sortYear: 1127, yearLabel: "1127年", event: "{{靖康の変|せいこうのへん}}・{{北宋|ほくそう}}が{{滅亡|めつぼう}}", era: "{{北宋|ほくそう}}", href: findEventHref("northernsong", "靖康の変") },
  { eraId: "southernsong", sortYear: 1127, yearLabel: "1127年", event: "{{高宗|こうそう}}が{{南宋|なんそう}}を建国", era: "{{南宋|なんそう}}", href: findEventHref("southernsong", "南宋の建国") },
  { eraId: "yuan", sortYear: 1271, icon: "ger", yearLabel: "1271年", event: "クビライが元を建国", era: "元", href: findEventHref("yuan", "元の建国") },
  { eraId: "yuan", sortYear: 1279, yearLabel: "1279年", event: "元が{{南宋|なんそう}}を{{滅|ほろ}}ぼし中国統一", era: "元", href: findEventHref("yuan", "南宋を滅ぼし中国統一") },
  { eraId: "ming", sortYear: 1368, yearLabel: "1368年", event: "{{朱元璋|しゅげんしょう}}が明を建国", era: "明", href: findEventHref("ming", "明の建国") },
  { eraId: "ming", sortYear: 1405, yearLabel: "1405年", event: "{{鄭和|ていわ}}が南海{{大遠征|だいえんせい}}を開始", era: "明", href: findEventHref("ming", "鄭和") },
  { eraId: "ming", sortYear: 1592, yearLabel: "1592年", event: "明が{{朝鮮|ちょうせん}}に{{援軍|えんぐん}}を{{派遣|はけん}}（{{文禄|ぶんろく}}の役）", era: "明", href: findEventHref("ming", "文禄・慶長の役への援軍") },
  { eraId: "qing", sortYear: 1644, yearLabel: "1644年", event: "清が北京に入城", era: "清", href: findEventHref("qing", "清の北京入城") },
  { eraId: "qing", sortYear: 1839, icon: "opium", yearLabel: "1839年", event: "アヘン戦争が起こる", era: "清", href: findEventHref("qing", "アヘン戦争") },
  { eraId: "qing", sortYear: 1894, yearLabel: "1894年", event: "日清戦争が起こる", era: "清", href: findEventHref("qing", "日清戦争") },
  { eraId: "qing", sortYear: 1911, yearLabel: "1911年", event: "{{辛亥革命|しんがいかくめい}}が起こる", era: "清（末期）", href: findEventHref("qing", "辛亥革命") },
  { eraId: "roc", sortYear: 1912, yearLabel: "1912年", event: "{{中華民国|ちゅうかみんこく}}が成立", era: "{{中華民国|ちゅうかみんこく}}", href: findEventHref("roc", "中華民国の成立") },
  { eraId: "roc", sortYear: 1931, yearLabel: "1931年", event: "{{満洲事変|まんしゅうじへん}}が起こる", era: "{{中華民国|ちゅうかみんこく}}", href: findEventHref("roc", "満洲事変") },
  { eraId: "roc", sortYear: 1937, yearLabel: "1937年", event: "日中戦争が{{勃発|ぼっぱつ}}", era: "{{中華民国|ちゅうかみんこく}}", href: findEventHref("roc", "日中戦争の勃発") },
  { eraId: "prc", sortYear: 1949, yearLabel: "1949年", event: "{{中華人民共和国|ちゅうかじんみんきょうわこく}}が建国", era: "{{中華人民共和国|ちゅうかじんみんきょうわこく}}", href: findEventHref("prc", "中華人民共和国の建国") },
  { eraId: "prc", sortYear: 1978, yearLabel: "1978年", event: "改革開放政策が始まる", era: "{{中華人民共和国|ちゅうかじんみんきょうわこく}}", href: findEventHref("prc", "改革開放") },
  { eraId: "prc", sortYear: 2008, yearLabel: "2008年", event: "北京オリンピックが{{開催|かいさい}}される", era: "{{中華人民共和国|ちゅうかじんみんきょうわこく}}", href: findEventHref("prc", "北京オリンピック") },
];

const JAPAN_EVENTS = [
  { eraId: "jomon", sortYear: -14000, icon: "jomon", yearLabel: "前14000年{{頃|ごろ}}", event: "縄文時代がはじまる", era: "縄文時代" },
  { eraId: "yayoi", sortYear: -300, yearLabel: "前300年{{頃|ごろ}}", event: "{{稲作|いなさく}}が広がり{{弥生|やよい}}時代がはじまる", era: "{{弥生|やよい}}時代" },
  { eraId: "yayoi", sortYear: 57, icon: "kinin", yearLabel: "57年", event: "後漢に{{朝貢|ちょうこう}}し「{{漢委奴国王|かんのわのなのこくおう}}」の金印を授かる", era: "{{弥生|やよい}}時代", china: eraLink("easternhan") },
  { eraId: "yayoi", sortYear: 239, icon: "kyo", yearLabel: "239年", event: "{{卑弥呼|ひみこ}}が{{魏|ぎ}}に{{遣使|けんし}}し「{{親魏倭王|しんぎわおう}}」の{{称号|しょうごう}}を得る", era: "{{弥生|やよい}}時代", china: eventLink("sanguo", "魏の建国") },
  { eraId: "kofun", sortYear: 300, icon: "kofun", yearLabel: "300年{{頃|ごろ}}", event: "{{古墳|こふん}}時代がはじまる", era: "{{古墳|こふん}}時代" },
  { eraId: "kofun", sortYear: 538, yearLabel: "538年{{頃|ごろ}}", event: "百済から仏教が伝わる", era: "{{古墳|こふん}}時代", china: eraLink("nanbei") },
  { eraId: "asuka", sortYear: 593, yearLabel: "593年", event: "{{聖徳太子|しょうとくたいし}}が{{摂政|せっしょう}}となり飛鳥時代がはじまる", era: "飛鳥時代" },
  { eraId: "asuka", sortYear: 604, yearLabel: "604年", event: "十七条の憲法を制定", era: "飛鳥時代" },
  { eraId: "asuka", sortYear: 607, icon: "kenzuishi", yearLabel: "607年", event: "{{小野妹子|おののいもこ}}を{{遣隋使|けんずいし}}として{{派遣|はけん}}", era: "飛鳥時代", china: eraLink("sui") },
  { eraId: "asuka", sortYear: 645, yearLabel: "645年", event: "大化の改新がはじまる", era: "飛鳥時代" },
  { eraId: "asuka", sortYear: 663, yearLabel: "663年", event: "{{白村江|はくすきのえ}}の戦いで{{唐|とう}}・{{新羅|しらぎ}}連合軍に敗れる", era: "飛鳥時代", china: eraLink("tang") },
  { eraId: "asuka", sortYear: 701, yearLabel: "701年", event: "{{大宝律令|たいほうりつりょう}}を制定", era: "飛鳥時代" },
  { eraId: "nara", sortYear: 710, yearLabel: "710年", event: "{{平城京|へいじょうきょう}}に{{遷都|せんと}}し奈良時代がはじまる", era: "奈良時代" },
  { eraId: "nara", sortYear: 752, yearLabel: "752年", event: "東大寺の大仏が開眼", era: "奈良時代", china: eventLink("tang", "玄奘") },
  { eraId: "heian", sortYear: 794, yearLabel: "794年", event: "{{平安京|へいあんきょう}}に{{遷都|せんと}}し平安時代がはじまる", era: "平安時代" },
  { eraId: "heian", sortYear: 894, yearLabel: "894年", event: "{{遣唐使|けんとうし}}を{{廃止|はいし}}", era: "平安時代", china: eraLink("tang") },
  { eraId: "heian", sortYear: 1016, yearLabel: "1016年", event: "{{藤原道長|ふじわらのみちなが}}が{{摂政|せっしょう}}となる（{{摂関|せっかん}}政治の全盛）", era: "平安時代" },
  { eraId: "heian", sortYear: 1159, yearLabel: "1159年", event: "{{平治|へいじ}}の乱に勝ち{{平清盛|たいらのきよもり}}が実権を{{握|にぎ}}る", era: "平安時代", china: eraLink("southernsong") },
  { eraId: "kamakura", sortYear: 1185, icon: "kabuto", yearLabel: "1185年", event: "{{鎌倉幕府|かまくらばくふ}}が成立", era: "{{鎌倉|かまくら}}時代" },
  { eraId: "kamakura", sortYear: 1274, icon: "genko", yearLabel: "1274年", event: "{{元寇|げんこう}}（文永の役）が起こる", era: "{{鎌倉|かまくら}}時代", china: eventLink("yuan", "文永の役") },
  { eraId: "kamakura", sortYear: 1281, yearLabel: "1281年", event: "{{元寇|げんこう}}（{{弘安の役|こうあんのえき}}）が起こる", era: "{{鎌倉|かまくら}}時代", china: eventLink("yuan", "弘安の役") },
  { eraId: "kamakura", sortYear: 1333, yearLabel: "1333年", event: "{{鎌倉幕府|かまくらばくふ}}が{{滅亡|めつぼう}}", era: "{{鎌倉|かまくら}}時代" },
  { eraId: "muromachi", sortYear: 1336, yearLabel: "1336年", event: "室町幕府が成立", era: "室町時代" },
  { eraId: "muromachi", sortYear: 1404, yearLabel: "1404年", event: "{{勘合貿易|かんごうぼうえき}}（日明貿易）を開始", era: "室町時代", china: eventLink("ming", "永楽帝即位") },
  { eraId: "muromachi", sortYear: 1467, yearLabel: "1467年", event: "{{応仁|おうにん}}の乱がはじまる", era: "室町時代" },
  { eraId: "muromachi", sortYear: 1543, icon: "teppo", yearLabel: "1543年", event: "{{鉄砲|てっぽう}}が伝わる", era: "室町時代", china: eraLink("ming") },
  { eraId: "azuchimomoyama", sortYear: 1573, yearLabel: "1573年", event: "室町幕府が{{滅亡|めつぼう}}（{{安土桃山|あづちももやま}}時代はじまる）", era: "{{安土桃山|あづちももやま}}時代" },
  { eraId: "azuchimomoyama", sortYear: 1590, yearLabel: "1590年", event: "{{豊臣秀吉|とよとみひでよし}}が天下統一", era: "{{安土桃山|あづちももやま}}時代" },
  { eraId: "azuchimomoyama", sortYear: 1592, yearLabel: "1592年", event: "{{豊臣秀吉|とよとみひでよし}}が{{朝鮮|ちょうせん}}出兵（{{文禄|ぶんろく}}の役）", era: "{{安土桃山|あづちももやま}}時代", china: eventLink("ming", "文禄・慶長の役への援軍") },
  { eraId: "azuchimomoyama", sortYear: 1600, yearLabel: "1600年", event: "{{関ヶ原|せきがはら}}の戦い", era: "{{安土桃山|あづちももやま}}時代" },
  { eraId: "edo", sortYear: 1603, yearLabel: "1603年", event: "{{江戸幕府|えどばくふ}}が成立", era: "{{江戸時代|えどじだい}}" },
  { eraId: "edo", sortYear: 1639, yearLabel: "1639年", event: "{{鎖国|さこく}}が完成", era: "{{江戸時代|えどじだい}}" },
  { eraId: "edo", sortYear: 1854, icon: "kurofune", yearLabel: "1854年", event: "{{日米和親条約|にちべいわしんじょうやく}}を結び開国", era: "{{江戸時代|えどじだい}}", china: eventLink("qing", "アヘン戦争") },
  { eraId: "meiji", sortYear: 1868, yearLabel: "1868年", event: "明治{{維新|いしん}}が起こる", era: "明治時代" },
  { eraId: "meiji", sortYear: 1894, yearLabel: "1894年", event: "{{日清戦争|にっしんせんそう}}が起こる", era: "明治時代", china: eventLink("qing", "日清戦争") },
  { eraId: "meiji", sortYear: 1904, yearLabel: "1904年", event: "{{日露戦争|にちろせんそう}}が起こる", era: "明治時代", china: eventLink("qing", "義和団事件") },
  { eraId: "taisho", sortYear: 1912, yearLabel: "1912年", event: "明治天皇が{{崩御|ほうぎょ}}し大正時代がはじまる", era: "大正時代" },
  { eraId: "taisho", sortYear: 1923, yearLabel: "1923年", event: "{{関東大震災|かんとうだいしんさい}}が起こる", era: "大正時代" },
  { eraId: "showa", sortYear: 1931, yearLabel: "1931年", event: "満州事変が起こる", era: "昭和時代", china: eventLink("roc", "満洲事変") },
  { eraId: "showa", sortYear: 1937, yearLabel: "1937年", event: "{{日中戦争|にっちゅうせんそう}}がはじまる", era: "昭和時代", china: eventLink("roc", "日中戦争の勃発") },
  { eraId: "showa", sortYear: 1941, yearLabel: "1941年", event: "太平洋戦争がはじまる", era: "昭和時代" },
  { eraId: "showa", sortYear: 1945, yearLabel: "1945年", event: "日本が敗戦", era: "昭和時代", china: eventLink("roc", "日本の敗戦") },
  { eraId: "showa", sortYear: 1972, yearLabel: "1972年", event: "日中国交正常化", era: "昭和時代", china: eventLink("prc", "米中接近") },
  { eraId: "heisei", sortYear: 1989, yearLabel: "1989年", event: "{{昭和天皇|しょうわてんのう}}が{{崩御|ほうぎょ}}し平成時代がはじまる", era: "平成時代" },
  { eraId: "reiwa", sortYear: 2019, yearLabel: "2019年", event: "{{天皇|てんのう}}の{{退位|たいい}}にともない令和時代がはじまる", era: "令和時代" },
];

const TIMELINE = [
  ...CHINA_EVENTS.map((e) => ({ ...e, side: "cn" })),
  ...JAPAN_EVENTS.map((e) => ({ ...e, side: "jp" })),
].sort((a, b) => a.sortYear - b.sortYear);

// 時代ごとの背景帯。行ごとに「その時点で日中それぞれが何時代か」を持たせ、
// 時代が変わるたびに濃淡2色を交互に切り替える。「清（末期）」のような補足は同じ時代とみなす。
// あわせて、各時代の最初の行に時代ジャンプ用のアンカーid（cn-tang, jp-heian など）を付ける。
const eraKey = (era) => era.replace(/（.*?）/g, "");
export const ROWS = (() => {
  const current = { cn: null, jp: null };
  const currentEraId = { cn: null, jp: null };
  const currentLabel = { cn: null, jp: null };
  const bandIndex = { cn: -1, jp: -1 };
  return TIMELINE.map((entry) => {
    const { side } = entry;
    const key = eraKey(entry.era);
    const starts = current[side] !== key;
    if (starts) {
      current[side] = key;
      bandIndex[side] += 1;
    }
    const anchorId = currentEraId[side] !== entry.eraId ? `${side}-${entry.eraId}` : null;
    currentEraId[side] = entry.eraId;
    currentLabel[side] = key;
    return { entry, starts, anchorId, band: { ...bandIndex }, eraIds: { ...currentEraId }, labels: { ...currentLabel } };
  });
})();

const ANCHOR_IDS = new Set(ROWS.map((row) => row.anchorId).filter(Boolean));

export function hasAnchor(id) {
  return ANCHOR_IDS.has(id);
}

// 中国の王朝（ERASのid）について、対照年表の該当箇所へのリンクを返す
export function japanChinaTimelineHref(eraId) {
  const id = `cn-${eraId}`;
  return ANCHOR_IDS.has(id) ? `${JAPAN_CHINA_TIMELINE_PATH}#${id}` : JAPAN_CHINA_TIMELINE_PATH;
}

// 中国の王朝（ERASのid）と同じ頃の日本の時代名（ルビ記法つき）を古い順に返す
export function japaneseErasDuring(eraId) {
  const names = [];
  for (const row of ROWS) {
    if (row.eraIds.cn !== eraId || !row.labels.jp) continue;
    if (!names.includes(row.labels.jp)) names.push(row.labels.jp);
  }
  return names;
}

// 「c. 2070 BC – 1600 BC」「1949 – 現在」のような英語表記の期間を「前2070年頃〜前1600年」の形にする
export function formatPeriodJa(period) {
  return period
    .split(/\s*–\s*/)
    .map((part) => {
      if (part === "現在") return part;
      const approx = /^c\.\s*/.test(part);
      const bc = /\s*BC$/.test(part);
      const year = part.replace(/^c\.\s*/, "").replace(/\s*(BC|AD)$/, "");
      return `${bc ? "前" : ""}${year}年${approx ? "頃" : ""}`;
    })
    .join("〜");
}

// 中国の王朝ごとに、同じ頃の日本の時代を並べた早見表の行（対照年表ページの冒頭に表示）
export const ERA_CORRESPONDENCE = ERAS.map((era) => ({
  eraId: era.id,
  name: era.name,
  period: formatPeriodJa(era.period),
  japaneseEras: japaneseErasDuring(era.id),
  timelineHref: `#${hasAnchor(`cn-${era.id}`) ? `cn-${era.id}` : "era-jump"}`,
}));

// 時代ジャンプのチップ
export const CN_JUMPS = [
  { label: "先史", eraId: "paleolithic" },
  { label: "夏", eraId: "xia" },
  { label: "{{殷|いん}}", eraId: "shang" },
  { label: "周", eraId: "westernzhou" },
  { label: "春秋", eraId: "chunqiu" },
  { label: "戦国", eraId: "zhanguo" },
  { label: "{{秦|しん}}", eraId: "qin" },
  { label: "漢", eraId: "westernhan" },
  { label: "三国", eraId: "sanguo" },
  { label: "{{晋|しん}}", eraId: "westernjin" },
  { label: "南北朝", eraId: "nanbei" },
  { label: "{{隋|ずい}}", eraId: "sui" },
  { label: "{{唐|とう}}", eraId: "tang" },
  { label: "{{宋|そう}}", eraId: "northernsong" },
  { label: "元", eraId: "yuan" },
  { label: "明", eraId: "ming" },
  { label: "清", eraId: "qing" },
  { label: "{{中華民国|ちゅうかみんこく}}", eraId: "roc" },
  { label: "現代", eraId: "prc" },
];

export const JP_JUMPS = [
  { label: "縄文", eraId: "jomon" },
  { label: "{{弥生|やよい}}", eraId: "yayoi" },
  { label: "{{古墳|こふん}}", eraId: "kofun" },
  { label: "飛鳥", eraId: "asuka" },
  { label: "奈良", eraId: "nara" },
  { label: "平安", eraId: "heian" },
  { label: "{{鎌倉|かまくら}}", eraId: "kamakura" },
  { label: "室町", eraId: "muromachi" },
  { label: "{{安土桃山|あづちももやま}}", eraId: "azuchimomoyama" },
  { label: "江戸", eraId: "edo" },
  { label: "明治", eraId: "meiji" },
  { label: "大正", eraId: "taisho" },
  { label: "昭和", eraId: "showa" },
  { label: "平成", eraId: "heisei" },
  { label: "令和", eraId: "reiwa" },
];
