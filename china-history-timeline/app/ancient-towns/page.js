import { stripRuby, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageThumb, MiscLinksSection, A8AdBlock } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";

const title = "中国の古城めぐり｜平遥・麗江など城壁に囲まれた古い町並みと歴史";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "中国で「古城」とは、城壁に囲まれた昔ながらの町並みのこと。中国四大古城の平遥・麗江・閬中・歙県をはじめ、鳳凰・大理・荊州・襄陽・興城・カシュガルの10の古城について、築かれた時代、舞台になった歴史の出来事、いま訪ねられる見どころを紹介します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/ancient-towns" },
  openGraph: buildOpenGraph({
    title: fullTitle,
    description,
    path: "/ancient-towns",
    type: "article",
    image: { title: "中国の古城めぐり", subtitle: "城壁に囲まれた古い町並みと歴史", kicker: "古城", seal: "城" },
  }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const sectionHeading = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 14 };
const card = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const bodyText = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft };
const labelStyle = { fontFamily: "var(--font-serif), serif", fontSize: 12, fontWeight: 700, color: COLORS.gold, marginBottom: 4 };

// Wikimedia Commonsのファイル名から画像URLと出典表記を作る
function commons(file, author, license) {
  return {
    imageUrl: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replace(/ /g, "_"))}`,
    credit:
      license === "CC0" || license === "Public domain"
        ? `写真: ${author} / Wikimedia Commons（${license === "CC0" ? "CC0" : "パブリックドメイン"}）`
        : `写真: ${author} / Wikimedia Commons, ${license}`,
  };
}

// 古城ごとのデータ。
// mapX,mapY: 地図（lib/chinaOutlineと同じ図法）上の位置。/ancient-capitalsの基準点から経緯度を投影して求めた
// big4: 「中国四大古城」に数えられるもの / heritage: 世界遺産の登録
// links: 年表・特集ページへの関連リンク
const TOWNS = [
  {
    id: "pingyao",
    name: "{{平遥|へいよう}}古城",
    reading: "へいようこじょう（ピンヤオ）",
    location: "山西省{{晋中市|しんちゅうし}}{{平遥県|へいようけん}}",
    built: "明の{{洪武|こうぶ}}3年（1370年）に現在の規模へ拡張",
    wall: "周囲約6.2km・高さ約10m・城門6",
    big4: true,
    heritage: "世界遺産（1997年）",
    photo: commons("PingYaoCityWall.jpg", "Peellden", "Public domain"),
    history:
      "西周の{{宣王|せんおう}}の時代に築かれたのが始まりと伝わり、明の初めに{{城壁|じょうへき}}が{{拡|ひろ}}げられて今の姿になった。城門が亀の頭・尾・足のように配置されていることから「{{亀城|きじょう}}」とも呼ばれる。清代には山西商人（{{晋商|しんしょう}}）の本拠地として栄え、1823年には中国初の{{為替|かわせ}}専門の金融機関「{{票号|ひょうごう}}」である{{日昇昌|にっしょうしょう}}が開業し、「清代中国のウォール街」と呼ばれるほどの金融の中心になった。近代化から取り残されたことで、明清の町並みがほぼ丸ごと残った。",
    spots: [
      { name: "平遥{{城壁|じょうへき}}・{{迎薫門|げいくんもん}}", note: "72の{{敵楼|てきろう}}と約3000の{{狭間|さま}}は、孔子の弟子「七十二{{賢|けん}}・三千人」にちなむと伝わる。南門の{{迎薫門|げいくんもん}}などから上がり、歩いて一周できる。", photo: commons("Pingyao Yingxun Gate.jpg", "Bairuilong", "CC BY-SA 4.0") },
      { name: "{{日昇昌|にっしょうしょう}}{{票号|ひょうごう}}", note: "中国最初の{{票号|ひょうごう}}の店舗兼住居。中国の銀行の{{原点|げんてん}}として博物館になっている。", photo: commons("Pingyao Rishengchang Jiuzhi 2013.08.25 06-53-01.jpg", "Zhangzhugang", "CC BY-SA 3.0") },
      { name: "{{市楼|しろう}}", note: "古城の中心の南大街にまたがって建つ楼閣。上から灰色の{{瓦|かわら}}屋根が続く町並みを見渡せる。", photo: commons("Pingyao Shilou 2013.08.26 13-22-12.jpg", "Zhangzhugang", "CC BY-SA 3.0") },
      { name: "南大街（明清街）", note: "古城の目抜き通り。かつての{{票号|ひょうごう}}や{{老舗|しにせ}}の商店が軒を連ね、名物の平遥牛肉や{{麺|めん}}料理の店も多い。", photo: commons("Pingyao street (6240799738).jpg", "Francisco Anzola", "CC BY 2.0") },
      { name: "平遥{{県署|けんしょ}}", note: "明清時代の県の役所がほぼ完全に残る。裁判を行った大堂や{{牢獄|ろうごく}}まで見学でき、地方役人の仕事ぶりがわかる。", photo: commons("Pingyao County Government Office 平遙縣署 - panoramio.jpg", "lienyuan lee", "CC BY 3.0") },
      { name: "{{双林寺|そうりんじ}}", note: "古城の南西にある古寺。明代を中心とする2000体を{{超|こ}}える彩色{{塑像|そぞう}}は「東方の彩塑芸術の宝庫」と呼ばれる。世界遺産。", photo: commons("Shuanglin Temple.JPG", "Gisling", "CC BY 3.0") },
      { name: "{{鎮国寺|ちんこくじ}}", note: "古城の北東にある寺。963年に建てられた{{万仏殿|まんぶつでん}}は、中国に残る最古級の木造建築の一つ。世界遺産。", photo: commons("Pingyao Zhenguo Si 2013.08.26 15-13-07.jpg", "Zhangzhugang", "CC BY-SA 3.0") },
      { name: "夜の古城", note: "日が暮れると城門や通りがライトアップされ、赤い{{提灯|ちょうちん}}がともる。古城内の伝統的な{{四合院|しごういん}}の宿に泊まるのもおすすめ。", photo: commons("平遥南门夜景-流浪的狗狗 - panoramio.jpg", "aisccd", "CC BY 3.0") },
    ],
    links: [{ href: "/events/ming--0", label: "明の建国（朱元璋）を年表で読む" }],
    mapX: 309,
    mapY: 171,
  },
  {
    id: "lijiang",
    name: "{{麗江|れいこう}}古城",
    reading: "れいこうこじょう（リージャン）",
    location: "雲南省{{麗江市|れいこうし}}{{古城区|こじょうく}}",
    built: "南宋末〜元の初め（13世紀）ごろに町が形成",
    wall: "城壁を持たない古城",
    big4: true,
    heritage: "世界遺産（1997年）",
    photo: commons("Lijiang Yunnan Old-town-02.jpg", "CEphoto, Uwe Aranas", "CC BY-SA 3.0"),
    history:
      "標高約2400mの高原にある、少数民族ナシ族の町。中心の{{大研|だいけん}}地区は、明代にこの地を治めたナシ族の{{土司|どし}}（世襲の地方長官）・{{木|もく}}氏のもとで栄えた。中国の古城としては珍しく{{城壁|じょうへき}}がなく、「木の字を囲むと『困』になるのを{{嫌|きら}}った」という{{俗説|ぞくせつ}}がある。{{玉龍雪山|ぎょくりゅうせつざん}}の雪解け水を引いた水路が町中を網の目のように流れ、石畳の路地沿いに木造の家々が並ぶ。1996年の大地震で{{被害|ひがい}}を受けたが修復され、翌年世界遺産に登録された。",
    spots: [
      { name: "{{四方街|しほうがい}}", note: "古城の中心にある広場。かつては茶馬古道の商人が集まった市場で、周りに{{土産物|みやげもの}}店や茶店が並ぶ。夕方にはナシ族の人々の輪踊りが見られることも。", photo: commons("Sifang Road of Dayan - panoramio.jpg", "钟启明", "CC BY-SA 3.0") },
      { name: "水路と石畳の路地", note: "{{玉龍雪山|ぎょくりゅうせつざん}}の雪解け水を引いた水路が家々の軒先を流れる。柳の下に小さな橋がいくつも架かり、歩くだけで楽しい。", photo: commons("Old Town of Lijiang canal 2.JPG", "BrokenSphere", "CC BY-SA 3.0") },
      { name: "{{木府|もくふ}}", note: "{{木|もく}}氏の役所兼{{邸宅|ていたく}}を再建したもの。「雲南の{{紫禁城|しきんじょう}}」とも呼ばれる。", photo: commons("丽江古城 木府 2026-04-01 11.jpg", "Roller Coaster Philosophy", "CC BY 4.0") },
      { name: "{{黒龍潭|こくりゅうたん}}", note: "古城の北にある池。白い石橋と楼閣の向こうに{{玉龍雪山|ぎょくりゅうせつざん}}がそびえる景色は、{{麗江|れいこう}}を代表する絶景。", photo: commons("Lijiang Yunnan Black-Dragon-Pool-01.jpg", "CEphoto, Uwe Aranas", "CC BY-SA 3.0") },
      { name: "{{玉龍雪山|ぎょくりゅうせつざん}}", note: "古城の北にそびえる標高約5600mの雪山。ロープウェイで標高4500m付近まで上ることができる。", photo: commons("Lijiang Yunnan China Jade-Dragon-Snow-Mountain-01.jpg", "CEphoto, Uwe Aranas", "CC BY-SA 3.0") },
      { name: "{{束河|そくが}}古鎮", note: "古城の北西にあるナシ族の古い集落。{{大研|だいけん}}より落ち着いた雰囲気で、古城とあわせて世界遺産。", photo: commons("Shuhe Street, Lijiang, Yunnan, China.jpg", "Luke Chantrell", "CC BY-SA 4.0") },
      { name: "{{白沙|はくさ}}古鎮", note: "{{木|もく}}氏が{{大研|だいけん}}へ移る前の拠点とされる村。明代の仏教・道教の壁画「白沙壁画」が残る。世界遺産。", photo: commons("Baisha Street (33439287988).jpg", "Rod Waddington", "CC BY-SA 2.0") },
      { name: "トンパ文字", note: "ナシ族の祭司トンパが経典に使った象形文字。古城の看板には漢字と並んで書かれ、トンパ文字の古文書はユネスコ「世界の記憶」に登録されている。", photo: commons("Naxi Dongba script on the wall.jpg", "Jody McIntyre", "CC BY-SA 2.0") },
    ],
    links: [{ href: "/world-heritage", label: "中国の世界遺産まとめ" }],
    mapX: 219,
    mapY: 266,
  },
  {
    id: "langzhong",
    name: "{{閬中|ろうちゅう}}古城",
    reading: "ろうちゅうこじょう（ランジョン）",
    location: "四川省{{南充市|なんじゅうし}}{{閬中市|ろうちゅうし}}",
    built: "古代の{{巴国|はこく}}以来の要地。現在の町並みは明清期のもの",
    wall: "{{嘉陵江|かりょうこう}}が三方を囲む",
    big4: true,
    heritage: "国家歴史文化名城",
    photo: commons("Langzhong Ancient Town.jpg", "Panzer VI-II", "CC BY-SA 4.0"),
    history:
      "{{嘉陵江|かりょうこう}}が大きく曲がって三方を囲む地にあり、山と川に守られた{{風水|ふうすい}}の理想の地とされた。三国時代、{{劉備|りゅうび}}の義弟・{{張飛|ちょうひ}}はここを守って{{巴西|はせい}}太守を務め、221年、{{関羽|かんう}}の{{敵討|かたきう}}ちに出陣する直前に部下の{{張達|ちょうたつ}}・{{范彊|はんきょう}}に殺された。また前漢の天文学者{{落下閎|らくかこう}}の出身地で、彼が作った{{太初暦|たいしょれき}}で正月が一年の始まりと定められたことから「春節の{{故郷|ふるさと}}」も名乗る。",
    spots: [
      { name: "{{張桓侯祠|ちょうかんこうし}}", note: "{{張飛|ちょうひ}}を{{祀|まつ}}る{{廟|びょう}}で、裏手に{{張飛|ちょうひ}}の墓がある。三国志ファンの聖地の一つ。", photo: commons("Langzhong Zhangfei Temple (1).jpg", "STW932", "CC BY-SA 4.0") },
      { name: "{{川北道貢院|せんほくどうこういん}}", note: "清代の科挙の試験場。受験生が{{籠|こ}}もった小部屋が並び、現存する貢院としては保存状態が良い。", href: "/keju", hrefLabel: "科挙とは", photo: commons("Langzhong Gongyuan.jpg", "STW932", "CC BY-SA 4.0") },
      { name: "{{中天楼|ちゅうてんろう}}からの眺め", note: "古城の中心に建つ3層の楼閣。上に登ると、黒い{{瓦|かわら}}屋根が碁盤の目のように広がる古城を見渡せる。", photo: commons("Langzhong Roofs (1).jpg", "STW932", "CC BY-SA 4.0") },
      { name: "{{川北道|せんほくどう}}{{衙門|がもん}}", note: "清代に四川北部を治めた役所の跡。{{閬中|ろうちゅう}}が長く地方行政の中心だったことを伝える。", photo: commons("Langzhong Yamen.jpg", "STW932", "CC BY-SA 4.0") },
      { name: "古い{{院子|いんず}}（中庭式の屋敷）", note: "胡家大院など、中庭を囲む明清時代の屋敷が路地に点在し、宿や茶館として公開されているものも多い。", photo: commons("Langzhong Hu Family Compound.jpg", "STW932", "CC BY-SA 4.0") },
      { name: "東山から望む古城", note: "{{嘉陵江|かりょうこう}}対岸の山からは、川に囲まれた古城の全景を一望できる。{{風水|ふうすい}}の古城と呼ばれる理由がよくわかる眺め。", photo: commons("Langzhong City View (1).jpg", "STW932", "CC BY-SA 4.0") },
      { name: "{{閬中|ろうちゅう}}の{{保寧酢|ほねいす}}・張飛牛肉", note: "中国四大名酢の一つに数えられる{{保寧酢|ほねいす}}と、{{張飛|ちょうひ}}にちなむ牛肉の干物が名物。" },
    ],
    links: [{ href: "/events/sanguo--2", label: "蜀漢の建国（劉備）を年表で読む" }],
    mapX: 262,
    mapY: 223,
  },
  {
    id: "shexian",
    name: "{{歙県|きゅうけん}}古城（{{徽州|きしゅう}}古城）",
    reading: "きゅうけんこじょう（シェーシエン）",
    location: "安徽省{{黄山市|こうざんし}}{{歙県|きゅうけん}}",
    built: "秦代に県が置かれ、宋代以降は{{徽州|きしゅう}}府の府城",
    wall: "西門の{{甕城|おうじょう}}などが残る",
    big4: true,
    heritage: "国家歴史文化名城",
    photo: commons("Chaoshui Gate in Shexian 02 2014-11.JPG", "猫猫的日记本", "CC BY-SA 4.0"),
    history:
      "黄山のふもとに広がる{{徽州|きしゅう}}地方の中心として、千年近く役所が置かれた町。明清時代には、塩や茶の取引で巨万の富を築いた「{{徽商|きしょう}}」の故郷として栄え、彼らが建てた白壁と黒瓦の屋敷や、科挙合格者・功臣をたたえる石の門（{{牌坊|はいぼう}}）が今も町に点在する。{{文房四宝|ぶんぼうしほう}}の名品{{歙硯|きゅうけん}}・{{徽墨|きぼく}}の産地でもある。朱子学を大成した{{朱熹|しゅき}}の家も代々{{徽州|きしゅう}}の出身で、この地は「東南の{{鄒魯|すうろ}}（学問の地）」と呼ばれた。",
    spots: [
      { name: "{{許国石坊|きょこくせきぼう}}", note: "明の1584年、大学士{{許国|きょこく}}の功績をたたえて建てられた石の{{牌坊|はいぼう}}。4面8本の柱をもつ珍しい形から「八脚牌坊」と呼ばれる。", photo: commons("Xuguoshifang 5173.jpg", "Doctoroftcm", "CC BY-SA 3.0") },
      { name: "{{徽州府衙|きしゅうふが}}", note: "{{徽州|きしゅう}}府の役所を復元したもの。明清の地方政治のしくみを伝える。", photo: commons("徽州古城——徽州府衙 - panoramio.jpg", "江上清风1961", "CC BY 3.0") },
      { name: "{{斗山街|とざんがい}}", note: "{{徽商|きしょう}}の屋敷が並ぶ古い通り。高い白壁と、火事の延焼を防ぐ階段状の{{馬頭壁|ばとうへき}}が特徴。", photo: commons("Shexian Doushan Jie 2016.11.13 13-13-29.jpg", "Zhangzhugang", "CC BY-SA 4.0") },
      { name: "{{漁梁壩|ぎょりょうは}}", note: "{{練江|れんこう}}に築かれた古い石の{{堰|せき}}。{{徽商|きしょう}}はここから船で杭州へ向かった。堰のそばには石畳の古い船着き場の町並みが残る。", photo: commons("Shexian Yuliang 2016.11.13 07-17-19.jpg", "Zhangzhugang", "CC BY-SA 4.0") },
      { name: "{{棠樾|とうえつ}}{{牌坊群|はいぼうぐん}}", note: "古城の西の{{棠樾|とうえつ}}村に、明清時代の7基の石の{{牌坊|はいぼう}}が一列に並ぶ。{{徽州|きしゅう}}の{{牌坊|はいぼう}}文化を象徴する景観。", photo: commons("Tangyue Village, 2021-09-26 03.jpg", "Siyuwj", "CC BY-SA 4.0") },
      { name: "{{宏村|こうそん}}・{{西逓|せいてい}}（足をのばして）", note: "同じ黄山市の{{黟県|いけん}}にある{{徽州|きしゅう}}の古村落。池と水路を巡らせた村の景観は「水墨画の村」と呼ばれ、2000年に世界遺産に登録された。", photo: commons("Ancient Villages in Southern Anhui – Xidi and Hongcun-114145.jpg", "Giovanni Boccardi", "CC BY-SA 3.0 IGO") },
    ],
    links: [{ href: "/events/southernsong--2", label: "朱子学の大成（朱熹）を年表で読む" }],
    mapX: 355,
    mapY: 238,
  },
  {
    id: "fenghuang",
    name: "{{鳳凰|ほうおう}}古城",
    reading: "ほうおうこじょう（フォンホワン）",
    location: "湖南省{{湘西|しょうせい}}トゥチャ族ミャオ族自治州{{鳳凰県|ほうおうけん}}",
    built: "明清時代に軍事拠点として築城",
    wall: "東門・北門の{{城楼|じょうろう}}が残る",
    heritage: "国家歴史文化名城",
    photo: commons("Tuo River in Fenghuang County, Hunan, China1.jpg", "Huangdan2060", "CC0"),
    history:
      "明清時代、王朝が南西の山地に暮らすミャオ族を{{押|お}}さえるために置いた軍事拠点が起源。明代には近くに「南方長城」とも呼ばれる長い{{防壁|ぼうへき}}も築かれた。町を流れる{{沱江|だこう}}の岸には、川の上に柱を立てて張り出した{{吊脚楼|ちょうきゃくろう}}という高床式の家々が並び、夜はその灯りが川面に映る。近代中国を代表する作家・{{沈従文|しんじゅうぶん}}の故郷で、小説『{{辺城|へんじょう}}』に描かれた{{湘西|しょうせい}}の風景を求めて多くの人が訪れる。",
    spots: [
      { name: "{{沱江|だこう}}と{{吊脚楼|ちょうきゃくろう}}", note: "川沿いに並ぶ高床式の家並み。川を小舟で下りながら眺めるのが定番。", photo: commons("Tuo River in Fenghuang County, Hunan, China4.jpg", "Huangdan2060", "CC0") },
      { name: "夜の{{沱江|だこう}}", note: "日が暮れると川沿いの家々がいっせいにライトアップされ、川面に灯りが映る。{{鳳凰|ほうおう}}古城でいちばん人気の時間帯。", photo: commons("Fenghuang County night view 20190727.jpg", "Sunyiming", "CC BY-SA 4.0") },
      { name: "{{虹橋|こうきょう}}", note: "{{沱江|だこう}}に架かる屋根付きの橋。橋の中にも店が並び、夜は虹のように光る姿が見どころ。", photo: commons("Fenghuang Hongqiao (Fenghuang Rainbow-Shaped Bridge) 1, 9 November 2010.jpg", "Huangdan2060", "CC0") },
      { name: "{{城壁|じょうへき}}と東門・北門{{城楼|じょうろう}}", note: "清代に石造りで築き直された城門。赤い砂岩の{{城壁|じょうへき}}が川沿いに続く。", photo: commons("A wall, Fenghuang County, Hunan, China.jpg", "Huangdan2060", "CC0") },
      { name: "水路沿いの路地", note: "古城の中を細い水路が流れ、石畳の路地沿いにミャオ族の銀細工や{{生姜|しょうが}}あめの店が並ぶ。", photo: commons("Canal alleyway Fenghuang ancient town Hunan.jpg", "Lianguanlun", "CC BY 4.0") },
      { name: "{{沈従文|しんじゅうぶん}}{{故居|こきょ}}", note: "作家・{{沈従文|しんじゅうぶん}}が生まれ育った家。郊外には墓もある。" },
      { name: "南方長城", note: "明代にミャオ族の地との境に築かれた{{防壁|ぼうへき}}の一部が復元されている。", href: "/great-wall", hrefLabel: "万里の長城とは" },
    ],
    links: [],
    mapX: 289,
    mapY: 256,
  },
  {
    id: "dali",
    name: "{{大理|だいり}}古城",
    reading: "だいりこじょう（ダーリー）",
    location: "雲南省{{大理|だいり}}ペー族自治州{{大理市|だいりし}}",
    built: "明の{{洪武|こうぶ}}15年（1382年）に築城",
    wall: "南門・北門などが再建されている",
    heritage: "国家歴史文化名城",
    photo: commons("Dali Old Town 05.JPG", "Brücke-Osteuropa", "Public domain"),
    history:
      "{{蒼山|そうざん}}と湖・{{洱海|じかい}}にはさまれたこの地は、8〜9世紀の{{南詔|なんしょう}}国、そして937年から約300年続いた{{大理|だいり}}国の都があった場所。{{大理|だいり}}国は宋と並び立つ独立国だったが、1253年にクビライ率いるモンゴル軍に{{滅|ほろ}}ぼされた。現在の古城は、明が雲南を平定したのち、その北に築いた城が基になっている。町にはペー族の白壁の家が並び、金庸の武侠小説『{{天龍八部|てんりゅうはちぶ}}』で{{大理|だいり}}国の王子・{{段誉|だんよ}}の故郷として描かれたことでも知られる。",
    spots: [
      { name: "{{崇聖寺|すうせいじ}}三塔", note: "{{南詔|なんしょう}}・{{大理|だいり}}国時代の寺の塔。中央の{{千尋塔|せんじんとう}}は高さ約69mで、{{大理|だいり}}の象徴になっている。池に映る「倒影」の眺めが有名。", photo: commons("Three Pagodas of Chongsheng Temple view from reflecting pond.jpg", "Jason Zhang", "CC BY-SA 3.0") },
      { name: "{{洱海|じかい}}", note: "古城の東に広がる耳の形をした湖。湖畔をサイクリングで{{巡|めぐ}}る人が多い。", photo: commons("Erhai Lake in 2023.jpg", "Nishino Asuka", "CC BY-SA 4.0") },
      { name: "{{蒼山|そうざん}}", note: "古城の西にそびえる4000m級の山並み。ロープウェイで中腹へ上れ、{{洱海|じかい}}と古城を見下ろせる。", photo: commons("Dali-Cangshan Erhai Lake 2017-11-16.jpg", "Toni Wöhrl", "CC BY-SA 4.0") },
      { name: "南門", note: "古城の正面玄関となる城門。城楼に上ると、{{瓦|かわら}}屋根の町並みと背後の{{蒼山|そうざん}}を一度に眺められる。", photo: commons("Dali south gate at night.JPG", "Brian Dell", "Public domain") },
      { name: "古城の町並み・{{洋人街|ようじんがい}}", note: "{{蒼山|そうざん}}から引いた水路が流れる石畳の通り。カフェや雑貨店が並ぶ{{洋人街|ようじんがい}}は夜遅くまでにぎわう。", photo: commons("202605 Streets in Dali Old Town 05.jpg", "Jonashtand", "CC BY-SA 4.0") },
      { name: "{{喜洲|きしゅう}}古鎮（足をのばして）", note: "{{洱海|じかい}}の西岸にあるペー族の古い町。白壁に絵を描いた商人の屋敷が残り、名物の焼きパン「{{喜洲粑粑|きしゅうぱーぱ}}」が人気。", photo: commons("Xizhou Old Town.jpg", "Mx. Granger", "CC0") },
      { name: "ペー族の三道茶", note: "苦い・甘い・後味の3杯で人生を表すという、ペー族のもてなしの茶。" },
    ],
    links: [
      { href: "/dynasty-territory-map", label: "歴代王朝の領土の変遷（宋と大理国）" },
      { href: "/wuxia-games", label: "中国発の武侠・神話ゲーム" },
    ],
    mapX: 218,
    mapY: 277,
  },
  {
    id: "jingzhou",
    name: "{{荊州|けいしゅう}}古城",
    reading: "けいしゅうこじょう（ジンジョウ）",
    location: "湖北省{{荊州市|けいしゅうし}}",
    built: "現在の城壁は明代の城を基に清の1646年に再建",
    wall: "周囲約11km・城門6",
    heritage: "国家歴史文化名城",
    photo: commons("Muraille Est de Jingzhou.JPG", "Popolon", "CC BY-SA 3.0"),
    history:
      "{{長江|ちょうこう}}中流の要地で、春秋戦国時代には近くに{{楚|そ}}の都・{{郢|えい}}（{{紀南城|きなんじょう}}）があった。三国時代には「{{荊州|けいしゅう}}を制する者が天下を制する」と言われるほどの争奪の的となり、{{赤壁|せきへき}}の戦いの後は{{劉備|りゅうび}}が{{孫権|そんけん}}から借りる形で領有し、{{関羽|かんう}}が守った。219年、{{関羽|かんう}}が北の{{樊城|はんじょう}}を攻めている隙に{{呉|ご}}の{{呂蒙|りょもう}}が奇襲して{{荊州|けいしゅう}}を奪い、{{関羽|かんう}}は{{敗死|はいし}}した。レンガ造りの{{城壁|じょうへき}}と外側の堀がほぼ一周残り、上を歩いて回れる。",
    spots: [
      { name: "{{賓陽楼|ひんようろう}}（東門）", note: "レンガの{{城壁|じょうへき}}の内側に古い土の{{城壁|じょうへき}}が重なる構造。東門の{{賓陽楼|ひんようろう}}をはじめ、城門の上に楼閣が復元されている。", photo: commons("Binyang Tower 賓陽樓 - panoramio.jpg", "lienyuan lee", "CC BY 3.0") },
      { name: "{{荊州|けいしゅう}}博物館", note: "{{楚|そ}}の墓から出土した漆器・絹織物や、前漢の男性の遺体などを展示する。", photo: commons("Jingzhou Museum.jpg", "Doris Antony", "CC BY-SA 3.0") },
      { name: "{{楚|そ}}の漆器", note: "博物館に並ぶ戦国時代の{{楚|そ}}の漆器。赤と黒で描かれた鳳凰の文様は、{{楚|そ}}の美術を代表する。", photo: commons("Lacquer box of phoenix design, Warring States, Jingzhou, Hubei, Jingzhou Museum.jpg", "Huangdan2060", "CC BY 3.0") },
      { name: "{{関帝廟|かんていびょう}}", note: "{{関羽|かんう}}の屋敷の跡に建てられたと伝わる{{廟|びょう}}。", photo: commons("荆州关帝庙 - panoramio.jpg", "guan", "CC BY 3.0") },
      { name: "{{関羽|かんう}}像", note: "古城の内外には{{関羽|かんう}}の像がいくつも立つ。郊外の{{関公義園|かんこうぎえん}}には高さ約58mの巨大な{{関羽|かんう}}像もある。", photo: commons("Guan Yu Statue.jpg", "SifaV6", "CC BY-SA 4.0") },
      { name: "{{紀南城|きなんじょう}}{{遺跡|いせき}}", note: "古城の北約5kmにある{{楚|そ}}の都の跡。土の{{城壁|じょうへき}}が今も残る。" },
    ],
    links: [
      { href: "/sanguo-battles#battle-2", label: "三国時代の合戦マップ（赤壁の戦い）" },
      { href: "/events/sanguo--0", label: "赤壁の戦いを年表で読む" },
    ],
    mapX: 309,
    mapY: 234,
  },
  {
    id: "xiangyang",
    name: "{{襄陽|じょうよう}}古城",
    reading: "じょうようこじょう（シャンヤン）",
    location: "湖北省{{襄陽市|じょうようし}}",
    built: "漢代以来の城。現在の城壁は明代のもの",
    wall: "最大幅約250mの堀が囲む",
    heritage: "国家歴史文化名城",
    photo: commons("Xiangyang City Wall 01.jpg", "Fxqf", "CC BY-SA 4.0"),
    history:
      "{{漢水|かんすい}}をはさんで北の{{樊城|はんじょう}}と向かい合い、華北と江南を結ぶ南北の交通路を{{押|お}}さえる要の城。後漢末には{{劉表|りゅうひょう}}が{{荊州|けいしゅう}}の拠点とし、西の{{隆中|りゅうちゅう}}に隠れ住んでいた{{諸葛亮|しょかつりょう}}を{{劉備|りゅうび}}が訪ねた「三顧の礼」もこの近くの出来事。南宋の末には、元軍に5年あまり包囲されながら持ちこたえたが、1273年にイスラム技術者が造った投石機「{{回回砲|かいかいほう}}」で{{降伏|こうふく}}に追い込まれ、南宋{{滅亡|めつぼう}}への道が開かれた。金庸の『{{神鵰侠侶|しんちょうきょうりょ}}』で{{郭靖|かくせい}}夫妻が守る城としても有名。",
    spots: [
      { name: "{{襄陽|じょうよう}}{{城壁|じょうへき}}と{{護城河|ごじょうが}}", note: "中国でも有数の幅をもつ堀に囲まれ、「{{華夏|かか}}第一城池」と呼ばれる。{{城壁|じょうへき}}の上を歩ける区間もある。", photo: commons("Xiangyang City Wall 03.jpg", "Fxqf", "CC BY-SA 4.0") },
      { name: "{{臨漢門|りんかんもん}}", note: "{{漢水|かんすい}}に面した北門。城楼が残り、古城の顔になっている。", photo: commons("20250525 Linhan Men.jpg", "Yumeto", "CC BY-SA 4.0") },
      { name: "{{漢水|かんすい}}の岸辺", note: "{{臨漢門|りんかんもん}}の外を流れる{{漢水|かんすい}}。対岸が{{樊城|はんじょう}}で、元軍は両城を結ぶ浮橋を断って{{襄陽|じょうよう}}を孤立させた。", photo: commons("20250525 Han River outside the Linhan Gate.jpg", "Yumeto", "CC BY-SA 4.0") },
      { name: "古{{隆中|りゅうちゅう}}", note: "{{諸葛亮|しょかつりょう}}が若いころ畑を耕しながら暮らしたと伝わる地。三顧の礼の舞台で、古城から西へ約13km。", photo: commons("Longzhong, Nanyang, China1.jpg", "Sherbet", "CC BY 2.5") },
      { name: "{{米公祠|べいこうし}}", note: "北宋の書家・画家{{米芾|べいふつ}}を{{祀|まつ}}る{{祠|ほこら}}。{{米芾|べいふつ}}は{{襄陽|じょうよう}}の出身で、境内には彼の書を刻んだ石碑が多く残る。", photo: commons("米公祠.jpg", "三猎", "CC BY-SA 4.0") },
      { name: "{{唐城|とうじょう}}", note: "映画の撮影のために造られた唐代の街並みのテーマパーク。", photo: commons("China Hubei Xiangyang Tang Dynasty City Film and TV Base1.jpg", "Sherbet", "CC BY 2.5") },
    ],
    links: [
      { href: "/song-yuan-battles#late-battle-6", label: "宋・金・元の合戦マップ（襄陽・樊城の戦い）" },
      { href: "/events/yuan--1", label: "元が南宋を滅ぼし中国統一を年表で読む" },
    ],
    mapX: 308,
    mapY: 219,
  },
  {
    id: "xingcheng",
    name: "{{興城|こうじょう}}古城（{{寧遠|ねいえん}}城）",
    reading: "こうじょうこじょう（シンチョン）",
    location: "{{遼寧省|りょうねいしょう}}{{葫蘆島市|ころとうし}}{{興城市|こうじょうし}}",
    built: "明の{{宣徳|せんとく}}3年（1428年）に{{寧遠衛|ねいえんえい}}城として築城",
    wall: "周囲約3.3km・城門4",
    heritage: "全国重点文物保護単位",
    photo: commons("Xingcheng Defensive wall 2010.09.JPG", "猫猫的日记本", "CC BY-SA 3.0"),
    history:
      "北京から{{山海関|さんかいかん}}を抜けて東北へ向かう細長い平地「{{遼西|りょうせい}}回廊」に、明が置いた防衛の城。1626年、後金のヌルハチが大軍で攻め寄せたが、守将の{{袁崇煥|えんすうかん}}はポルトガル製の大砲（{{紅夷砲|こういほう}}）で迎え撃ち、連戦連勝だったヌルハチを初めて退けた（{{寧遠|ねいえん}}の戦い）。ヌルハチはその年のうちに{{亡|な}}くなる。正方形の{{城壁|じょうへき}}と、中央の鼓楼から十字に延びる大通りという明代の城の形が、ほぼ当時のまま残っている。",
    spots: [
      { name: "{{興城|こうじょう}}{{城壁|じょうへき}}と城門", note: "四方の城門と中央の鼓楼を結ぶ十字の大通りが残る。{{城壁|じょうへき}}の上を一周できる。", photo: commons("Xingcheng East Gate.jpg", "Pechorin04", "CC BY-SA 3.0") },
      { name: "古城の町並み", note: "城内には明清時代の役所や屋敷が残り、鼓楼の周りには{{土産物|みやげもの}}店が並ぶ。", photo: commons("兴城古城 - panoramio.jpg", "周李", "CC BY-SA 3.0") },
      { name: "{{祖氏石坊|そしせきぼう}}", note: "明の将軍{{祖大寿|そだいじゅ}}・{{祖大楽|そだいらく}}兄弟をたたえて建てられた2基の石の門。{{祖大寿|そだいじゅ}}はのちに清に降った。写真は戦前に日本で出版された写真集のもの。", photo: commons("亜東印画輯 08 035 \"祖氏石坊（興城）\".jpg", "亜東印画協会", "Public domain") },
      { name: "{{興城|こうじょう}}{{文廟|ぶんびょう}}", note: "城内にある明代創建の孔子廟。{{寧遠衛|ねいえんえい}}城の築城からまもなく建てられた。" },
      { name: "{{興城|こうじょう}}の海浜・温泉", note: "古城の近くに海水浴場と温泉があり、保養地としても知られる。", photo: commons("Xingcheng beach, Liaoning Province, China.jpg", "Pixabay", "CC0") },
    ],
    links: [
      { href: "/events/ming--6", label: "李自成の乱・明の滅亡を年表で読む" },
      { href: "/events/qing--0", label: "清の北京入城を年表で読む" },
    ],
    mapX: 373,
    mapY: 139,
  },
  {
    id: "kashgar",
    name: "カシュガル古城",
    reading: "カシュガルこじょう（中国名：{{喀什|カシ}}）",
    location: "{{新疆|しんきょう}}ウイグル自治区カシュガル市",
    built: "漢代の{{疏勒|そろく}}国以来のオアシス都市",
    wall: "東門などが再建されている",
    heritage: "国家歴史文化名城",
    photo: commons("East gate of the Ancient City of Kashi (20230923104429).jpg", "N509FZ", "CC BY-SA 4.0"),
    history:
      "タクラマカン砂漠の西の端、シルクロードの天山南路と西域南道が合流する交通の要地。漢代には{{疏勒|そろく}}国と呼ばれ、後漢の{{班超|はんちょう}}はここを拠点に30年近く西域諸国をまとめ上げた。のちにイスラム教が広まり、ウイグル族の商業と信仰の中心として栄えた。日干しレンガの家が迷路のように連なる旧市街は、2009年以降の大規模な改修で多くが建て替えられたが、古城の門では毎朝、民族衣装の踊りで観光客を迎える「開城式」が行われている。",
    spots: [
      { name: "エイティガール・モスク", note: "1442年創建と伝わる、中国最大級のモスク。黄色いタイルの正門が古城の顔。", photo: commons("Id Kah Mosque (24052287545).jpg", "Laika ac", "CC BY-SA 2.0") },
      { name: "{{高台民居|こうだいみんきょ}}", note: "{{崖|がけ}}の上に日干しレンガの家が積み重なるように並ぶ、古い住宅街。", photo: commons("20250525喀什高台民居.jpg", "MasaneMiyaPA", "CC BY-SA 4.0") },
      { name: "旧市街の路地", note: "土色の壁の路地が迷路のように続き、木の扉や窓に施された彫刻、パンを焼く窯など、ウイグルの暮らしの風景に出会える。", photo: commons("Kashgar old town (2).jpg", "Radosław Botev", "CC BY 3.0 PL") },
      { name: "職人街・帽子バザール", note: "古城の中の通りに、ウイグルの刺繍帽子や銅器・楽器を作る職人の店が並ぶ。", photo: commons("Bazaar of Hats at Aria Rd, Ancient City of Kashi (20230923192011).jpg", "N509FZ", "CC BY-SA 4.0") },
      { name: "大バザール", note: "中央アジア各地の商人が集まった市場の伝統を受け継ぐ巨大市場。じゅうたん・ドライフルーツ・ナイフなどが山積みに並ぶ。", photo: commons("Kashgar Bazaar (23412139614).jpg", "Laika ac", "CC BY-SA 2.0") },
      { name: "アパク・ホージャ{{廟|びょう}}", note: "17世紀のイスラム指導者一族の墓廟。緑のタイルのドームが美しく、乾隆帝の{{妃|きさき}}「香妃」の墓という伝説がある。", photo: commons("Kashgar - Afaq Khoja Mausoleum.jpg", "Radosław Botev", "CC BY 3.0 PL") },
    ],
    links: [
      { href: "/silk-road", label: "シルクロードとは" },
      { href: "/events/westernhan--4", label: "張騫、西域へを年表で読む" },
    ],
    mapX: 37,
    mapY: 150,
  },
];

const FAQ = [
  {
    q: "中国の「古城」は日本の「古城」と何が違う？",
    a: "日本語の「古城」はふつう古いお城（天守や石垣）を指しますが、中国語の「{{城|じょう}}」は町全体を囲む{{城壁|じょうへき}}、またはその{{城壁|じょうへき}}に囲まれた町そのものを意味します。そのため中国で「古城」といえば、{{城壁|じょうへき}}や城門に囲まれ、昔ながらの町並みが残る旧市街のことです。中には{{麗江|れいこう}}のように{{城壁|じょうへき}}がなくても古い町並みを「古城」と呼ぶ例もあります。",
  },
  {
    q: "「中国四大古城」とはどこ？",
    a: "一般に、山西省の{{平遥|へいよう}}古城、雲南省の{{麗江|れいこう}}古城、四川省の{{閬中|ろうちゅう}}古城、安徽省の{{歙県|きゅうけん}}古城の4つを指します。北・南西・西・東南と地域も時代も異なり、それぞれ金融・少数民族・風水・商人文化と違った個性を持っています。",
  },
  {
    q: "世界遺産に登録されている古城は？",
    a: "このページで紹介した中では、{{平遥|へいよう}}古城と{{麗江|れいこう}}古城がどちらも1997年に世界遺産に登録されています。ほかの古城の多くも、歴史的な町並みを保存する国の制度「国家歴史文化名城」に指定されています。",
  },
  {
    q: "城壁が完全な形で残っている町は？",
    a: "{{平遥|へいよう}}・{{荊州|けいしゅう}}・{{興城|こうじょう}}・{{襄陽|じょうよう}}などは、{{城壁|じょうへき}}が町をほぼ一周する形で残っており、上を歩いて回れます。大都市では西安と南京の明代の{{城壁|じょうへき}}が有名で、こちらは「古都からたどる現在の中国の都市」のページで紹介しています。",
  },
];

// 世界的に知られる主要都市（点＋ラベル）。/ancient-capitalsと同じ図法・座標
const REFERENCE_CITIES = [
  { label: "北京", x: 340, y: 145, dx: -10, dy: -6, anchor: "end" },
  { label: "上海", x: 378, y: 226, dx: 10, dy: -6, anchor: "start" },
  { label: "西安", x: 284, y: 198, dx: -10, dy: -4, anchor: "end" },
  { label: "成都", x: 248, y: 231, dx: -10, dy: 4, anchor: "end" },
  { label: "広州", x: 317, y: 300, dx: -10, dy: -6, anchor: "end" },
  { label: "香港", x: 324, y: 308, dx: 10, dy: 13, anchor: "start" },
  { label: "ラサ", x: 151, y: 240, dx: 0, dy: 17, anchor: "middle" },
  { label: "ウルムチ", x: 124, y: 109, dx: 0, dy: 16, anchor: "middle" },
];

// 世界的に知られる地方・地域名（点なし、範囲を示すラベルのみ）
const REGION_LABELS = [
  { label: "内モンゴル自治区", x: 420, y: 90, anchor: "middle" },
  { label: "新疆", x: 90, y: 135, anchor: "middle" },
  { label: "チベット", x: 175, y: 270, anchor: "middle" },
  { label: "台湾", x: 375, y: 296, dx: 10, dy: 4, anchor: "start" },
  { label: "海南島", x: 290, y: 337, dx: 0, dy: 17, anchor: "middle" },
];

function TownsMap() {
  return (
    <div style={{ ...card, padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        実際の海岸線をもとにした中国の位置関係図です。朱色の番号は下で紹介する古城、白丸は主要都市の目安です。番号を押すと各古城の紹介へ移動します。
      </p>
      <svg viewBox="0 0 500 366" style={{ width: "100%", maxHeight: 420, display: "block", margin: "0 auto" }} role="img" aria-label="古城の位置図">
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />
        <path d={TAIWAN_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />

        {REGION_LABELS.map((r) => (
          <text
            key={r.label}
            x={r.x + (r.dx || 0)}
            y={r.y + (r.dy || 0)}
            textAnchor={r.anchor}
            style={{ fontFamily: "var(--font-serif), serif", fontSize: 10.5, fill: COLORS.inkSoft, opacity: 0.85 }}
          >
            {r.label}
          </text>
        ))}

        {REFERENCE_CITIES.map((c) => (
          <g key={c.label}>
            <circle cx={c.x} cy={c.y} r="3.5" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="1.2" />
            <text x={c.x + c.dx} y={c.y + c.dy} textAnchor={c.anchor} style={{ fontFamily: "var(--font-serif), serif", fontSize: 10, fill: COLORS.inkSoft }}>
              {c.label}
            </text>
          </g>
        ))}

        {TOWNS.map((t, i) => (
          <a key={t.id} href={`#${t.id}`}>
            <title>{stripRuby(t.name)}</title>
            <circle cx={t.mapX} cy={t.mapY} r="7" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="1.3" />
            <text
              x={t.mapX}
              y={t.mapY}
              textAnchor="middle"
              dominantBaseline="central"
              style={{ fontFamily: "var(--font-serif), serif", fontSize: 8, fontWeight: 700, fill: "#FBF8F0" }}
            >
              {i + 1}
            </text>
          </a>
        ))}
      </svg>
      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3" style={{ fontSize: 11.5, color: COLORS.ink }}>
        {TOWNS.map((t, i) => (
          <a key={t.id} href={`#${t.id}`} className="flex items-center gap-1">
            <span
              className="flex items-center justify-center"
              style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: COLORS.vermilion, color: "#FBF8F0", fontSize: 9, fontWeight: 700, fontFamily: "var(--font-serif), serif" }}
            >
              {i + 1}
            </span>
            <RubyText text={t.name.replace(/（.*）$/, "")} />
          </a>
        ))}
      </div>
    </div>
  );
}

function Tag({ children, strong }) {
  return (
    <span
      style={{
        fontSize: 11,
        color: strong ? "#FBF8F0" : COLORS.ink,
        backgroundColor: strong ? COLORS.vermilion : "#FFFDF7",
        border: `1px solid ${strong ? COLORS.vermilion : COLORS.mist}`,
        padding: "1px 7px",
        fontFamily: "var(--font-serif), serif",
      }}
    >
      {children}
    </span>
  );
}

function TownSection({ town, index }) {
  return (
    <section id={town.id} style={{ ...card, marginBottom: 20, scrollMarginTop: 16 }}>
      <div style={{ height: 190, overflow: "hidden", backgroundColor: "#EFE7D0" }}>
        <HeritageThumb imageUrl={town.photo.imageUrl} name={town.name} type="building" objectPosition="center" />
      </div>
      <div className="p-4">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 12, fontWeight: 700, color: COLORS.vermilion }}>{index + 1}</span>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 21, fontWeight: 900, color: COLORS.ink }}>
            <RubyText text={town.name} />
          </h2>
        </div>
        <div style={{ fontSize: 11.5, color: COLORS.inkSoft, marginTop: 1 }}>
          <RubyText text={town.reading} />
        </div>
        <div style={{ fontSize: 11.5, color: COLORS.vermilionSoft, marginTop: 4 }}>
          <span aria-hidden>📍</span> <RubyText text={town.location} />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mt-3">
          {town.big4 && <Tag strong>中国四大古城</Tag>}
          <Tag>
            <RubyText text={town.heritage} />
          </Tag>
        </div>

        <dl className="grid mt-3" style={{ gridTemplateColumns: "auto 1fr", columnGap: 10, rowGap: 3, fontSize: 12, lineHeight: 1.7 }}>
          <dt style={{ color: COLORS.gold, fontFamily: "var(--font-serif), serif", fontWeight: 700 }}>成り立ち</dt>
          <dd style={{ color: COLORS.inkSoft }}>
            <RubyText text={town.built} />
          </dd>
          <dt style={{ color: COLORS.gold, fontFamily: "var(--font-serif), serif", fontWeight: 700 }}>城の姿</dt>
          <dd style={{ color: COLORS.inkSoft }}>
            <RubyText text={town.wall} />
          </dd>
        </dl>

        <div className="mt-4">
          <div style={labelStyle}>古城の歴史</div>
          <p style={{ ...bodyText, fontSize: 12.5 }}>
            <RubyText text={town.history} />
          </p>
        </div>

        <div className="mt-4">
          <div style={labelStyle}>見どころ</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {town.spots.map((s) => (
              <figure key={s.name} style={{ backgroundColor: "#FFFDF7", border: "1px solid #E8E0CA" }}>
                {s.photo && (
                  <div style={{ aspectRatio: "4 / 3", overflow: "hidden", backgroundColor: "#EFE7D0" }}>
                    <HeritageThumb imageUrl={s.photo.imageUrl} name={s.name} type="building" objectPosition="center" />
                  </div>
                )}
                <figcaption className="p-2.5">
                  <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink }}>
                    <RubyText text={s.name} />
                  </div>
                  <p style={{ fontSize: 11.5, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 2 }}>
                    <RubyText text={s.note} />
                  </p>
                  {s.href && (
                    <a href={s.href} style={{ ...linkStyle, fontSize: 11 }}>
                      {s.hrefLabel} →
                    </a>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {town.links.length > 0 && (
          <div className="flex flex-col gap-1 mt-4">
            {town.links.map((l) => (
              <a key={l.href} href={l.href} style={{ ...linkStyle, fontSize: 12 }}>
                <RubyText text={l.label} /> →
              </a>
            ))}
          </div>
        )}

        <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 10, lineHeight: 1.6 }}>
          {[...new Set([town.photo, ...town.spots.map((s) => s.photo)].filter(Boolean).map((p) => p.credit))].map((c) => (
            <div key={c}>{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AncientTownsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    about: ["中国の古城", "中国四大古城", ...TOWNS.map((t) => stripRuby(t.name))],
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/ancient-towns` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "中国の古城めぐり", item: `${SITE_URL}/ancient-towns` },
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
          中国の古城めぐり
        </h1>
        <p style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, color: COLORS.gold, marginBottom: 14 }}>
          城壁に囲まれた古い町並みと、そこで起きた歴史
        </p>
        <p style={{ ...bodyText, fontSize: 13.5, marginBottom: 24 }}>
          <RubyText text="中国で「古城」といえば、お城の建物ではなく、{{城壁|じょうへき}}に囲まれた昔ながらの町並みのこと。明清時代の石畳や商家がそのまま残る町もあれば、三国志の武将が守り、王朝の運命を決める戦いの舞台になった町もあります。" />
          <RubyText text="このページでは「中国四大古城」の{{平遥|へいよう}}・{{麗江|れいこう}}・{{閬中|ろうちゅう}}・{{歙県|きゅうけん}}をはじめ、中国史の年表とゆかりの深い10の古城について、成り立ちと歴史、いま訪ねられる見どころを写真とともに{{紹介|しょうかい}}します。" />
        </p>

        <nav aria-label="目次" className="p-4 mb-8" style={card}>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>目次</div>
          <ol className="flex flex-col gap-1" style={{ fontSize: 12.5, listStyle: "decimal", paddingLeft: 20 }}>
            <li>
              <a href="#quick" style={linkStyle}>古城の早見表</a>
            </li>
            {TOWNS.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} style={linkStyle}>
                  <RubyText text={t.name} />
                </a>
              </li>
            ))}
            <li>
              <a href="#faq" style={linkStyle}>よくある疑問</a>
            </li>
          </ol>
        </nav>

        <TownsMap />

        <section id="quick" style={{ marginBottom: 32, scrollMarginTop: 16 }}>
          <h2 style={sectionHeading}>古城の早見表</h2>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, minWidth: 420 }}>
              <thead>
                <tr>
                  {["古城", "所在地", "ゆかりの歴史"].map((h) => (
                    <th
                      key={h}
                      style={{ padding: "8px 10px", borderBottom: `2px solid ${COLORS.vermilion}`, textAlign: "left", fontFamily: "var(--font-serif), serif", fontSize: 12, color: COLORS.gold }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {QUICK.map((q) => {
                  const town = TOWNS.find((t) => t.id === q.id);
                  return (
                    <tr key={q.id}>
                      <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", fontFamily: "var(--font-serif), serif", fontWeight: 700, whiteSpace: "nowrap" }}>
                        <a href={`#${q.id}`} style={linkStyle}>
                          <RubyText text={town.name.replace(/（.*）$/, "")} />
                        </a>
                        {town.big4 && <span style={{ fontSize: 10, color: COLORS.vermilion, marginLeft: 4 }}>四大</span>}
                      </td>
                      <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.inkSoft, whiteSpace: "nowrap" }}>{q.province}</td>
                      <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.ink }}>
                        <RubyText text={q.point} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {TOWNS.map((t, i) => (
          <TownSection key={t.id} town={t} index={i} />
        ))}

        <section id="faq" style={{ marginTop: 32, marginBottom: 32, scrollMarginTop: 16 }}>
          <h2 style={sectionHeading}>よくある疑問</h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((f) => (
              <div key={f.q} className="p-4" style={card}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, fontWeight: 700, color: COLORS.ink }}>
                  Q. <RubyText text={f.q} />
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={f.a} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ ...bodyText, marginBottom: 16 }}>
            西安・南京・北京のような大都市になった古都や、年表に登場する城郭・関所は別のページで紹介しています。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/ancient-capitals" variant="solid">古都の今と観光地を見る</NavButton>
            <NavButton href="/china-castles" variant="outline">中国の城まとめ</NavButton>
            <NavButton href="/world-heritage" variant="outline">中国の世界遺産</NavButton>
          </div>
        </section>

        <A8AdBlock ad="agoda" className="mt-10" />

        <RelatedEraGuides path="/ancient-towns" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}

// 早見表の内容（TOWNSと同じ順）
const QUICK = [
  { id: "pingyao", province: "山西省", point: "明代の城壁と清代の金融街（{{晋商|しんしょう}}）" },
  { id: "lijiang", province: "雲南省", point: "ナシ族の水の町・茶馬古道" },
  { id: "langzhong", province: "四川省", point: "{{張飛|ちょうひ}}が守り、最期を迎えた町" },
  { id: "shexian", province: "安徽省", point: "{{徽商|きしょう}}の故郷・{{徽州|きしゅう}}府の府城" },
  { id: "fenghuang", province: "湖南省", point: "明清の軍事拠点・作家{{沈従文|しんじゅうぶん}}の故郷" },
  { id: "dali", province: "雲南省", point: "{{南詔|なんしょう}}・{{大理|だいり}}国の都の地" },
  { id: "jingzhou", province: "湖北省", point: "{{関羽|かんう}}が守った三国志の{{荊州|けいしゅう}}" },
  { id: "xiangyang", province: "湖北省", point: "三顧の礼と南宋末の{{襄陽|じょうよう}}攻防戦" },
  { id: "xingcheng", province: "遼寧省", point: "{{袁崇煥|えんすうかん}}がヌルハチを退けた{{寧遠|ねいえん}}城" },
  { id: "kashgar", province: "新疆", point: "{{班超|はんちょう}}が拠点にしたシルクロードのオアシス" },
];
