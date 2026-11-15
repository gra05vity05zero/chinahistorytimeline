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
      { name: "平遥{{城壁|じょうへき}}", note: "72の{{敵楼|てきろう}}と約3000の{{狭間|さま}}は、孔子の弟子「七十二{{賢|けん}}・三千人」にちなむと伝わる。上を歩いて一周できる。" },
      { name: "{{日昇昌|にっしょうしょう}}{{票号|ひょうごう}}", note: "中国最初の{{票号|ひょうごう}}の店舗兼住居。中国の銀行の{{原点|げんてん}}として博物館になっている。" },
      { name: "{{市楼|しろう}}", note: "古城の中心の南大街にまたがって建つ楼閣。上から灰色の{{瓦|かわら}}屋根が続く町並みを見渡せる。" },
      { name: "{{双林寺|そうりんじ}}・{{鎮国寺|ちんこくじ}}", note: "郊外にある古寺。{{双林寺|そうりんじ}}の2000体を{{超|こ}}える彩色{{塑像|そぞう}}が有名で、古城とあわせて世界遺産。" },
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
      { name: "{{四方街|しほうがい}}", note: "古城の中心にある広場。かつては茶馬古道の商人が集まった市場で、周りに{{土産物|みやげもの}}店や茶店が並ぶ。" },
      { name: "{{木府|もくふ}}", note: "{{木|もく}}氏の役所兼{{邸宅|ていたく}}を再建したもの。「雲南の{{紫禁城|しきんじょう}}」とも呼ばれる。" },
      { name: "{{黒龍潭|こくりゅうたん}}", note: "古城の北にある池。水面に{{玉龍雪山|ぎょくりゅうせつざん}}が映る景色が有名。" },
      { name: "{{束河|そくが}}・{{白沙|はくさ}}", note: "郊外に残るナシ族の古い集落。古城とあわせて世界遺産。ナシ族が使う象形文字・トンパ文字も見どころの一つ。" },
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
      { name: "{{張桓侯祠|ちょうかんこうし}}", note: "{{張飛|ちょうひ}}を{{祀|まつ}}る{{廟|びょう}}で、裏手に{{張飛|ちょうひ}}の墓がある。三国志ファンの聖地の一つ。" },
      { name: "{{川北道貢院|せんほくどうこういん}}", note: "清代の科挙の試験場。受験生が{{籠|こ}}もった小部屋が並び、現存する貢院としては保存状態が良い。", href: "/keju", hrefLabel: "科挙とは" },
      { name: "{{中天楼|ちゅうてんろう}}", note: "古城の中心に建つ3層の楼閣。ここを起点に碁盤の目の町並みが広がる。" },
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
    photo: commons("Xuguoshifang 5173.jpg", "Doctoroftcm", "CC BY-SA 3.0"),
    history:
      "黄山のふもとに広がる{{徽州|きしゅう}}地方の中心として、千年近く役所が置かれた町。明清時代には、塩や茶の取引で巨万の富を築いた「{{徽商|きしょう}}」の故郷として栄え、彼らが建てた白壁と黒瓦の屋敷や、科挙合格者・功臣をたたえる石の門（{{牌坊|はいぼう}}）が今も町に点在する。{{文房四宝|ぶんぼうしほう}}の名品{{歙硯|きゅうけん}}・{{徽墨|きぼく}}の産地でもある。朱子学を大成した{{朱熹|しゅき}}の家も代々{{徽州|きしゅう}}の出身で、この地は「東南の{{鄒魯|すうろ}}（学問の地）」と呼ばれた。",
    spots: [
      { name: "{{許国石坊|きょこくせきぼう}}", note: "明の1584年、大学士{{許国|きょこく}}の功績をたたえて建てられた石の{{牌坊|はいぼう}}。4面8本の柱をもつ珍しい形から「八脚牌坊」と呼ばれる。" },
      { name: "{{徽州府衙|きしゅうふが}}", note: "{{徽州|きしゅう}}府の役所を復元したもの。明清の地方政治のしくみを伝える。" },
      { name: "{{斗山街|とざんがい}}", note: "{{徽商|きしょう}}の屋敷が並ぶ古い通り。高い白壁と、火事の延焼を防ぐ階段状の{{馬頭壁|ばとうへき}}が特徴。" },
      { name: "{{漁梁壩|ぎょりょうは}}", note: "{{練江|れんこう}}に築かれた古い石の{{堰|せき}}。{{徽商|きしょう}}はここから船で杭州へ向かった。" },
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
      { name: "{{沱江|だこう}}と{{吊脚楼|ちょうきゃくろう}}", note: "川沿いに並ぶ高床式の家並み。川を小舟で下りながら眺めるのが定番。" },
      { name: "東門・北門{{城楼|じょうろう}}", note: "清代に石造りで築き直された城門。赤い砂岩の{{城壁|じょうへき}}が川沿いに続く。" },
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
      { name: "{{崇聖寺|すうせいじ}}三塔", note: "{{南詔|なんしょう}}・{{大理|だいり}}国時代の寺の塔。中央の{{千尋塔|せんじんとう}}は高さ約69mで、{{大理|だいり}}の象徴になっている。" },
      { name: "{{洱海|じかい}}", note: "古城の東に広がる耳の形をした湖。湖畔をサイクリングで{{巡|めぐ}}る人が多い。" },
      { name: "{{蒼山|そうざん}}", note: "古城の西にそびえる4000m級の山並み。ロープウェイで中腹へ上れる。" },
      { name: "{{洋人街|ようじんがい}}・ペー族の三道茶", note: "古城のにぎやかな通りと、苦い・甘い・後味の3杯で人生を表すというペー族のもてなしの茶。" },
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
      { name: "{{荊州|けいしゅう}}{{城壁|じょうへき}}", note: "レンガの{{城壁|じょうへき}}の内側に、古い土の{{城壁|じょうへき}}が重なる構造。東門の{{賓陽楼|ひんようろう}}などの城門が残る。" },
      { name: "{{荊州|けいしゅう}}博物館", note: "{{楚|そ}}の墓から出土した漆器・絹織物や、前漢の男性の遺体などを展示する。" },
      { name: "{{関帝廟|かんていびょう}}", note: "{{関羽|かんう}}の屋敷の跡に建てられたと伝わる{{廟|びょう}}。郊外の{{関公義園|かんこうぎえん}}には巨大な{{関羽|かんう}}像が立つ。" },
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
      { name: "{{襄陽|じょうよう}}{{城壁|じょうへき}}と{{護城河|ごじょうが}}", note: "中国でも有数の幅をもつ堀に囲まれ、「{{華夏|かか}}第一城池」と呼ばれる。北門の{{臨漢門|りんかんもん}}などが残る。" },
      { name: "古{{隆中|りゅうちゅう}}", note: "{{諸葛亮|しょかつりょう}}が若いころ畑を耕しながら暮らしたと伝わる地。三顧の礼の舞台。" },
      { name: "{{米公祠|べいこうし}}", note: "北宋の書家・画家{{米芾|べいふつ}}を{{祀|まつ}}る{{祠|ほこら}}。{{米芾|べいふつ}}は{{襄陽|じょうよう}}の出身。" },
      { name: "{{唐城|とうじょう}}", note: "映画の撮影のために造られた唐代の街並みのテーマパーク。" },
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
      { name: "{{興城|こうじょう}}{{城壁|じょうへき}}と鼓楼", note: "四方の城門と中央の鼓楼を結ぶ十字の大通りが残る。{{城壁|じょうへき}}の上を一周できる。" },
      { name: "{{祖氏石坊|そしせきぼう}}", note: "明の将軍{{祖大寿|そだいじゅ}}・{{祖大楽|そだいらく}}兄弟をたたえて建てられた2基の石の門。{{祖大寿|そだいじゅ}}はのちに清に降った。" },
      { name: "{{興城|こうじょう}}{{文廟|ぶんびょう}}", note: "城内にある明代創建の孔子廟。{{寧遠衛|ねいえんえい}}城の築城からまもなく建てられた。" },
      { name: "{{興城|こうじょう}}の海浜・温泉", note: "古城の近くに海水浴場と温泉があり、保養地としても知られる。" },
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
      { name: "エイティガール・モスク", note: "1442年創建と伝わる、中国最大級のモスク。黄色いタイルの正門が古城の顔。" },
      { name: "{{高台民居|こうだいみんきょ}}", note: "{{崖|がけ}}の上に日干しレンガの家が積み重なるように並ぶ、古い住宅街。" },
      { name: "大バザール", note: "中央アジア各地の商人が集まった市場の伝統を受け継ぐ巨大市場。" },
      { name: "アパク・ホージャ{{廟|びょう}}", note: "17世紀のイスラム指導者一族の墓廟。乾隆帝の{{妃|きさき}}「香妃」の墓という伝説がある。" },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {town.spots.map((s) => (
              <div key={s.name} className="p-2.5" style={{ backgroundColor: "#FFFDF7", border: "1px solid #E8E0CA" }}>
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
              </div>
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

        <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 10 }}>
          <RubyText text={town.photo.credit} />
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
          <RubyText text="このページでは「中国四大古城」の{{平遥|へいよう}}・{{麗江|れいこう}}・{{閬中|ろうちゅう}}・{{歙県|きゅうけん}}をはじめ、中国史の年表とゆかりの深い10の古城について、成り立ちと歴史、いま訪ねられる見どころを{{紹介|しょうかい}}します。" />
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
