import { ERAS, stripRuby, COLORS, SITE_URL, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageThumb, MiscLinksSection, A8AdBlock } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";
import { RelatedEraGuides } from "@/components/RelatedEraGuides";
import { CHINA_OUTLINE, TAIWAN_OUTLINE } from "@/lib/chinaOutline";

const title = "古都からたどる現在の中国の都市｜長安・洛陽は今どんな街？歴史と観光地";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "長安は西安、建康は南京、汴京は開封、臨安は杭州――中国の歴代王朝の都や有名な古都が、現在どのような都市になっているのかを紹介します。中国八大古都を中心に、古都としての歩み、高層ビルが並ぶ今の街並みの写真、兵馬俑・龍門石窟・故宮・西湖などの歴史的な観光地をまとめました。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/ancient-capitals" },
  openGraph: buildOpenGraph({
    title: fullTitle,
    description,
    path: "/ancient-capitals",
    type: "article",
    image: { title: "古都からたどる中国の都市", subtitle: "長安・洛陽は今どんな街？", kicker: "古都", seal: "都" },
  }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const sectionHeading = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 14 };
const card = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };
const bodyText = { fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft };
const labelStyle = { fontFamily: "var(--font-serif), serif", fontSize: 12, fontWeight: 700, color: COLORS.gold, marginBottom: 4 };

// 年表データ（全時代のheritage）から名称（部分一致）で画像と関連する出来事を引く
function findHeritage(name) {
  for (const era of ERAS) {
    for (const ev of era.events) {
      const h = ev.heritage?.find((x) => stripRuby(x.name).includes(name));
      if (h) return { imageUrl: h.imageUrl, credit: h.credit, type: h.type, eventSlug: ev.slug };
    }
  }
  return null;
}

// Wikimedia Commonsのファイル名から画像URLと出典表記を作る（現在の街並みの写真用）
function commons(file, author, license, caption) {
  return {
    imageUrl: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replace(/ /g, "_"))}`,
    credit: license === "CC0" ? `写真: ${author} / Wikimedia Commons（CC0）` : `写真: ${author} / Wikimedia Commons, ${license}`,
    caption,
  };
}

// 古都ごとのデータ。
// population: 2020年の第7次全国人口調査による市域全体の常住人口（概数）
// mapX,mapY: 地図（lib/chinaOutlineと同じ図法）上の位置。鄭州・開封・洛陽は近接するため数px調整
// heritage: 冒頭の写真に使うheritageの名称 / spots[].heritage: 観光地の写真に使うheritageの名称
// modern: 現在の街並みの写真
const CITIES = [
  {
    id: "xian",
    city: "西安",
    reading: "せいあん（シーアン）",
    province: "{{陝西省|せんせいしょう}}の省都",
    population: "約1,300万人",
    oldNames: ["{{鎬京|こうけい}}", "{{咸陽|かんよう}}（近郊）", "{{長安|ちょうあん}}", "{{大興城|だいこうじょう}}"],
    dynasties: "西周・{{秦|しん}}・前漢・{{新|しん}}・{{前秦|ぜんしん}}・{{北周|ほくしゅう}}・{{隋|ずい}}・{{唐|とう}}など十余の王朝",
    history:
      "{{渭水|いすい}}の流れる{{関中|かんちゅう}}盆地の中心にあり、周の{{鎬京|こうけい}}、{{秦|しん}}の{{咸陽|かんよう}}、漢と{{唐|とう}}の{{長安|ちょうあん}}と、約1100年にわたって都が置かれた「十三朝古都」。{{唐代|とうだい}}の{{長安|ちょうあん}}は人口100万を{{超|こ}}える世界最大級の国際都市で、シルクロードの東の起点として西方の商人や{{留学生|りゅうがくせい}}が集まり、日本の平城京・平安京の手本にもなった。{{唐|とう}}の{{滅亡|めつぼう}}後は政治の中心が東へ移り、明代に「西安」と名を改められた。",
    today:
      "現在は中国西北地方最大の都市で、航空宇宙・半導体などの産業と、多くの大学が集まる学術都市の顔を持つ。明代の{{城壁|じょうへき}}がほぼ完全な形で残り、その内側の旧市街には{{鐘楼|しょうろう}}・{{鼓楼|ころう}}や{{回族|かいぞく}}の人々が暮らす「回民街」の{{屋台|やたい}}街が広がる。古都の{{遺跡|いせき}}と高層ビル・地下鉄が同居する、中国有数の観光都市である。",
    modern: [
      commons("丈八三路十字路口高樓群.jpg", "Nishino Asuka", "CC BY-SA 4.0", "IT企業が集まる高新区のビル群"),
      commons("Night Scene,High-Tech develop zone,xi'an,CHINA - panoramio.jpg", "miumiu熊", "CC BY-SA 3.0", "高新区の夜景"),
      commons("Chang'an Tower.jpg", "Jucember", "CC BY-SA 3.0", "2011年の国際園芸博覧会で建てられた長安塔"),
    ],
    heritage: "大雁塔",
    spots: [
      { name: "{{兵馬俑|へいばよう}}・{{秦始皇帝陵|しんしこうていりょう}}", note: "1974年に農民の井戸{{掘|ほ}}りで発見された{{始皇帝|しこうてい}}の地下軍団。8000体ともいわれる等身大の兵士像が並ぶ。世界遺産。", heritage: "兵馬俑", href: "/terracotta-army" },
      { name: "西安{{城壁|じょうへき}}", note: "明の{{洪武|こうぶ}}年間に{{唐|とう}}の皇城を基礎として築かれた、周囲約13.7kmの{{城壁|じょうへき}}。上をレンタサイクルで一周できる。" },
      { name: "{{大雁塔|だいがんとう}}・{{大慈恩寺|だいじおんじ}}", note: "インドから帰った{{玄奘|げんじょう}}が持ち帰った経典を納めるため652年に建てられた塔。北側の広場では夜に大{{噴水|ふんすい}}ショーが行われる。世界遺産。", heritage: "大雁塔" },
      { name: "{{大明宮|だいめいきゅう}}国家{{遺址|いし}}公園", note: "{{唐|とう}}の皇帝が政務をとった宮殿の跡。正門の{{丹鳳門|たんぽうもん}}が復元され、広大な敷地が公園になっている。世界遺産。", heritage: "大明宮" },
      { name: "{{華清池|かせいち}}", note: "{{玄宗|げんそう}}と{{楊貴妃|ようきひ}}が過ごした{{離宮|りきゅう}}の温泉。{{白居易|はくきょい}}の『{{長恨歌|ちょうごんか}}』の{{舞台|ぶたい}}で、{{兵馬俑|へいばよう}}と同じ{{臨潼区|りんどうく}}にある。", heritage: "華清池" },
      { name: "{{陝西|せんせい}}歴史博物館・{{碑林|ひりん}}博物館", note: "周・漢・{{唐|とう}}の{{至宝|しほう}}を集めた博物館と、歴代の名筆の石碑を集めた「石の書庫」。" },
    ],
    mapX: 284,
    mapY: 198,
    labelDx: 0,
    labelDy: 10,
    anchor: "middle",
  },
  {
    id: "luoyang",
    city: "{{洛陽|らくよう}}",
    reading: "らくよう（ルオヤン）",
    province: "河南省の地級市",
    population: "約700万人",
    oldNames: ["{{洛邑|らくゆう}}", "{{雒陽|らくよう}}", "東都", "{{神都|しんと}}"],
    dynasties: "東周・後漢・{{曹魏|そうぎ}}・{{西晋|せいしん}}・{{北魏|ほくぎ}}・{{隋|ずい}}・{{唐|とう}}（東都）・{{後唐|こうとう}}など",
    history:
      "黄河の支流・{{洛河|らくが}}のほとりにあり、天下の中心「{{中原|ちゅうげん}}」を代表する古都。東周以来、後漢・{{曹魏|そうぎ}}・{{西晋|せいしん}}・{{北魏|ほくぎ}}が都を置き、{{隋|ずい}}・{{唐|とう}}では{{長安|ちょうあん}}と並ぶ「東都」として栄えた。{{武則天|ぶそくてん}}は国号を周と改めると洛陽を「{{神都|しんと}}」と呼んで政治の中心とした。日本で都へ上ることを「{{上洛|じょうらく}}」というのは、この洛陽に由来する。",
    today:
      "現在は河南省西部の中核都市で、トラクターなどの機械工業で知られる。毎年4月の「牡丹文化祭」には満開の{{牡丹|ぼたん}}を目当てに多くの人が訪れ、「牡丹の都」とも呼ばれる。市内には{{隋唐|ずいとう}}洛陽城の{{応天門|おうてんもん}}が復元され、夜にはライトアップされた古都の景観を楽しめる。",
    modern: [
      commons("洛南夜景a - panoramio.jpg", "张志强（西海山人）", "CC BY-SA 3.0", "{{洛河|らくが}}の南に広がる新市街の夜景"),
      commons("New Luoyang City Museum - a.jpg", "Gary Todd", "CC0", "新市街に移転した洛陽博物館"),
      commons("Luoyang Longmen Railway Station 20240809 06.jpg", "沈澄心", "CC0", "高速鉄道の洛陽{{龍門|りゅうもん}}駅"),
    ],
    heritage: "龍門石窟",
    spots: [
      { name: "{{龍門石窟|りゅうもんせっくつ}}", note: "{{北魏|ほくぎ}}から{{唐|とう}}にかけて{{伊河|いが}}両岸の岩山に彫られた石窟群。{{武則天|ぶそくてん}}が資金を寄せたと伝わる{{盧舎那仏|るしゃなぶつ}}は高さ約17m。世界遺産。", heritage: "龍門石窟" },
      { name: "{{白馬寺|はくばじ}}", note: "後漢の時代、白い馬が経典を運んできたという伝説をもつ、中国で最初の仏教寺院とされる寺。" },
      { name: "{{関林|かんりん}}", note: "{{呉|ご}}に討たれた{{関羽|かんう}}の首が{{葬|ほうむ}}られたと伝わる場所。三国志ファンの聖地の一つ。" },
      { name: "{{隋唐|ずいとう}}洛陽城（{{応天門|おうてんもん}}・{{明堂|めいどう}}）", note: "{{隋|ずい}}の{{煬帝|ようだい}}が築いた東都の宮城跡。{{武則天|ぶそくてん}}が建てた巨大な{{明堂|めいどう}}・{{天堂|てんどう}}が{{遺跡|いせき}}の上に復元されている。" },
      { name: "{{周王城|しゅうおうじょう}}{{天子駕六|てんしがろく}}博物館", note: "東周の王が乗った6頭立ての馬車の{{遺構|いこう}}を、{{発掘|はっくつ}}された状態のまま展示する。", heritage: "洛陽周王城" },
      { name: "{{二里頭|にりとう}}夏都{{遺址|いし}}博物館", note: "夏王朝の都とされる{{二里頭|にりとう}}{{遺跡|いせき}}（{{偃師区|えんしく}}）の出土品を展示する博物館。", heritage: "二里頭" },
    ],
    mapX: 309,
    mapY: 196,
    labelDx: -5,
    labelDy: 2,
    anchor: "end",
  },
  {
    id: "nanjing",
    city: "南京",
    reading: "なんきん（ナンジン）",
    province: "{{江蘇省|こうそしょう}}の省都",
    population: "約930万人",
    oldNames: ["{{金陵|きんりょう}}", "{{建業|けんぎょう}}", "{{建康|けんこう}}", "{{応天府|おうてんふ}}", "{{天京|てんけい}}"],
    dynasties: "{{呉|ご}}・{{東晋|とうしん}}・{{宋|そう}}・{{斉|せい}}・{{梁|りょう}}・{{陳|ちん}}（六朝）・{{南唐|なんとう}}・明（初期）・{{太平天国|たいへいてんごく}}・中華民国",
    history:
      "{{長江|ちょうこう}}下流の要地で、三国の{{呉|ご}}から南朝の{{陳|ちん}}までの「六朝」が都とした。{{華北|かほく}}が戦乱に{{揺|ゆ}}れた時代、貴族文化や仏教文化が花開いた江南の中心であった。明の{{朱元璋|しゅげんしょう}}は全長30kmを{{超|こ}}える{{城壁|じょうへき}}を築いて都とし、のちに{{永楽帝|えいらくてい}}が北京へ移したことで「南の都＝南京」の名が定着した。近代には{{太平天国|たいへいてんごく}}の首都、{{孫文|そんぶん}}の臨時政府と国民政府の首都にもなっている。",
    today:
      "現在は{{江蘇省|こうそしょう}}の省都で、{{長江|ちょうこう}}デルタを代表する大都市の一つ。多くの大学をもつ教育都市でもある。明代の{{城壁|じょうへき}}は今も20km以上が残り、街路を{{覆|おお}}うプラタナスの並木とともに古都らしい景観をつくっている。日中戦争中の1937年には南京事件が起き、その犠牲者を{{追悼|ついとう}}する記念館も市内にある。",
    modern: [
      commons("Nanjing Xinjiekou Skyline.jpg", "Haha169", "CC BY-SA 4.0", "繁華街・{{新街口|しんがいこう}}の高層ビル群"),
      commons("南京河西CBD航拍20220626 01.jpg", "西安兵马俑", "CC BY-SA 4.0", "{{長江|ちょうこう}}沿いに開発された河西の新しいビジネス街"),
      commons("南京站南广场玄武湖边南向紫峰大厦夜景.jpg", "董辰兴", "CC BY-SA 4.0", "{{玄武湖|げんぶこ}}越しに見る夜の{{紫峰|しほう}}大厦"),
    ],
    heritage: "明孝陵",
    spots: [
      { name: "{{明孝陵|みんこうりょう}}", note: "明の初代皇帝{{朱元璋|しゅげんしょう}}と皇后の{{陵墓|りょうぼ}}。石の動物が並ぶ参道（{{神道|しんどう}}）で知られる。世界遺産。", heritage: "明孝陵" },
      { name: "{{中山陵|ちゅうざんりょう}}", note: "{{紫金山|しきんざん}}の中腹にある{{孫文|そんぶん}}の{{陵墓|りょうぼ}}。392段の石段の上に{{祭堂|さいどう}}が建つ。" },
      { name: "明{{城壁|じょうへき}}・{{中華門|ちゅうかもん}}", note: "現存する世界最大級の{{城壁|じょうへき}}。{{中華門|ちゅうかもん}}は4重の門をもつ巨大な{{甕城|おうじょう}}で、兵を隠す{{洞窟|どうくつ}}も残る。" },
      { name: "{{夫子廟|ふうしびょう}}・{{秦淮河|しんわいが}}", note: "孔子を{{祀|まつ}}る{{廟|びょう}}を中心とした繁華街。夜は灯りのともる{{秦淮河|しんわいが}}を{{遊覧船|ゆうらんせん}}でめぐれる。" },
      { name: "{{総統府|そうとうふ}}", note: "清の{{両江総督|りょうこうそうとく}}の役所、{{太平天国|たいへいてんごく}}の宮殿、中華民国の総統府と主を変えてきた建物。近代中国の歩みをたどれる。" },
      { name: "{{六朝|りくちょう}}博物館", note: "{{建康|けんこう}}城の{{城壁|じょうへき}}の{{遺構|いこう}}の上に建てられた博物館で、六朝時代の都の姿を伝える。", heritage: "六朝建康城" },
    ],
    mapX: 358,
    mapY: 218,
    labelDx: -5,
    labelDy: 2,
    anchor: "end",
  },
  {
    id: "beijing",
    city: "北京",
    reading: "ぺきん（ベイジン）",
    province: "中華人民共和国の首都（直轄市）",
    population: "約2,190万人",
    oldNames: ["{{薊|けい}}", "{{燕京|えんけい}}", "中都", "{{大都|だいと}}", "{{北平|ほくへい}}"],
    dynasties: "{{遼|りょう}}（副都）・{{金|きん}}・元・明・清・中華人民共和国",
    history:
      "古くは戦国時代の{{燕|えん}}の都・{{薊|けい}}があった地で、北方民族と漢民族の境目に位置する。{{遼|りょう}}の副都を経て、{{金|きん}}が1153年に都「中都」を置き、元のクビライが新たに「{{大都|だいと}}」を築いた。明の{{永楽帝|えいらくてい}}が1421年に南京から都を移して{{紫禁城|しきんじょう}}を完成させ、以後清末まで約500年にわたって中国の政治の中心であり続けた。",
    today:
      "中華人民共和国の首都として政治・文化の中心であり、人口2000万人を{{超|こ}}える{{巨大|きょだい}}都市。2008年の夏季五輪と2022年の冬季五輪を開いた世界で{{唯一|ゆいいつ}}の都市でもある。{{故宮|こきゅう}}を中心に南北へ{{貫|つらぬ}}く都市の軸線は「北京中軸線」として2024年に世界遺産となり、{{胡同|フートン}}と呼ばれる路地には伝統的な住まい・{{四合院|しごういん}}が残る。",
    modern: [
      commons("Beijing CBD Skyline (20190104160952).jpg", "N509FZ", "CC BY-SA 4.0", "超高層ビルが立ち並ぶ東部の中心業務地区（CBD）"),
      commons("Beijing skyline (cropped).jpg", "Picrazy2", "CC BY-SA 4.0", "夕暮れの環状道路とCBDの高層ビル"),
      commons("Bird's Nest from Beichen West Road,Beijing.jpg", "Daniel Case", "CC BY-SA 3.0", "2008年五輪のメイン会場・国家体育場（{{鳥|とり}}の{{巣|す}}）"),
    ],
    heritage: "紫禁城",
    spots: [
      { name: "{{故宮|こきゅう}}（{{紫禁城|しきんじょう}}）", note: "明・清の皇帝が暮らした宮殿。72万㎡の敷地に建物がひしめく、現存する世界最大級の木造宮殿群。世界遺産。", heritage: "紫禁城" },
      { name: "{{天壇|てんだん}}", note: "皇帝が{{豊作|ほうさく}}を天に祈った祭壇。青い瓦の円形の{{祈年殿|きねんでん}}が名高い。世界遺産。" },
      { name: "{{頤和園|いわえん}}", note: "清の{{西太后|せいたいこう}}が海軍の予算を流用して再建したともいわれる皇室庭園。{{昆明湖|こんめいこ}}と{{長廊|ちょうろう}}が見どころ。世界遺産。" },
      { name: "万里の長城（{{八達嶺|はったつれい}}・{{慕田峪|ぼでんよく}}）", note: "市の北部の山並みに明代の長城が続く。都心から日帰りで訪れることができる。世界遺産。", heritage: "万里の長城", href: "/great-wall" },
      { name: "明の十三{{陵|りょう}}", note: "{{永楽帝|えいらくてい}}以降、明の13人の皇帝が眠る{{陵墓|りょうぼ}}群。{{地下宮殿|ちかきゅうでん}}が公開されている{{定陵|ていりょう}}が有名。世界遺産。" },
      { name: "{{天安門|てんあんもん}}・{{胡同|フートン}}", note: "{{紫禁城|しきんじょう}}の正門で、1949年に建国が宣言された場所。周辺の{{胡同|フートン}}は人力車でめぐるツアーも人気。" },
    ],
    mapX: 340,
    mapY: 147,
    labelDx: 5,
    labelDy: 2,
    anchor: "start",
  },
  {
    id: "kaifeng",
    city: "{{開封|かいほう}}",
    reading: "かいほう（カイフォン）",
    province: "河南省の地級市",
    population: "約480万人",
    oldNames: ["{{大梁|たいりょう}}", "{{汴州|べんしゅう}}", "{{汴京|べんけい}}", "東京開封府"],
    dynasties: "戦国の{{魏|ぎ}}・{{後梁|こうりょう}}・{{後晋|こうしん}}・{{後漢|こうかん}}・{{後周|こうしゅう}}・{{北宋|ほくそう}}・{{金|きん}}（末期）の「八朝古都」",
    history:
      "黄河と運河が交わる交通の{{要衝|ようしょう}}で、戦国時代の{{魏|ぎ}}の都・{{大梁|たいりょう}}に始まり、五代の諸王朝と{{北宋|ほくそう}}が都を置いた。{{北宋|ほくそう}}の都「東京」は人口100万ともいわれる商業都市で、夜まで店が開き、その{{賑|にぎ}}わいは『{{清明上河図|せいめいじょうかず}}』に{{描|えが}}かれている。1127年の{{靖康の変|せいこうのへん}}で{{金|きん}}に{{攻|せ}}め落とされた後は都に{{戻|もど}}ることはなかった。",
    today:
      "現在は河南省東部の中規模な地方都市で、1954年に省都の座を{{鄭州|ていしゅう}}に{{譲|ゆず}}った。黄河の{{氾濫|はんらん}}で何度も土砂に埋もれ、その上に新しい街が築かれてきたため、地下には各時代の都が何層にも重なる「{{城摞城|じょうらじょう}}（城の上に城）」が眠っている。古い町並みと{{屋台|やたい}}の夜市、秋の{{菊|きく}}まつりで知られる。",
    modern: [
      commons("20210902 Kaifeng Dahong Wanda Plaza 02.jpg", "Windmemories", "CC BY-SA 4.0", "新市街の大型商業施設"),
      commons("Kaifeng North Railway Station.jpg", "Kestreltail", "CC BY-SA 4.0", "宋代風の屋根をもつ高速鉄道の{{開封|かいほう}}北駅"),
      commons("鼓楼新天地商业街 - panoramio.jpg", "caoyuan", "CC BY-SA 3.0", "{{提灯|ちょうちん}}のともる{{鼓楼|ころう}}周辺の商店街"),
    ],
    heritage: "清明上河図",
    spots: [
      { name: "{{清明上河園|せいめいじょうかえん}}", note: "『{{清明上河図|せいめいじょうかず}}』の街並みを再現したテーマパーク。宋代の衣装をまとった役者の芝居や夜の{{水上|すいじょう}}ショーが楽しめる。", heritage: "清明上河図" },
      { name: "{{開封|かいほう}}{{鉄塔|てっとう}}", note: "1049年に建てられた高さ約56mの{{仏塔|ぶっとう}}。茶色い{{瑠璃|るり}}{{煉瓦|れんが}}の色が鉄に見えることからこう呼ばれる。" },
      { name: "{{龍亭|りゅうてい}}", note: "{{北宋|ほくそう}}の皇宮があった場所に建つ清代の{{楼閣|ろうかく}}。両側に湖が広がる。" },
      { name: "{{大相国寺|だいしょうこくじ}}", note: "{{北宋|ほくそう}}の皇室とゆかりの深かった名刹。『{{水滸伝|すいこでん}}』では{{魯智深|ろちしん}}が菜園番をした寺として登場する。", href: "/suikoden" },
      { name: "{{開封府|かいほうふ}}・{{包公祠|ほうこうし}}", note: "公正な裁きで知られる名{{判官|はんがん}}・{{包拯|ほうじょう}}（{{包青天|ほうせいてん}}）ゆかりの役所と{{祠|ほこら}}。開封府は復元された建物。" },
    ],
    mapX: 330,
    mapY: 194,
    labelDx: 5,
    labelDy: 2,
    anchor: "start",
  },
  {
    id: "hangzhou",
    city: "{{杭州|こうしゅう}}",
    reading: "こうしゅう（ハンジョウ）",
    province: "{{浙江省|せっこうしょう}}の省都",
    population: "約1,190万人",
    oldNames: ["{{銭塘|せんとう}}", "{{臨安|りんあん}}"],
    dynasties: "{{呉越|ごえつ}}（五代十国）・{{南宋|なんそう}}",
    history:
      "{{隋|ずい}}の大運河の南の終点として発展し、五代十国の{{呉越|ごえつ}}国が都を置いた。{{靖康の変|せいこうのへん}}で{{開封|かいほう}}を失った{{南宋|なんそう}}は、仮の都「{{行在|あんざい}}」としてこの地を{{臨安|りんあん}}と名づけ、約150年にわたり事実上の首都とした。元代に訪れたマルコ・ポーロは「世界で最も美しく{{華|はな}}やかな都市」と{{称|たた}}えたと伝えられる。",
    today:
      "現在は{{浙江省|せっこうしょう}}の省都で、アリババの本社があることで知られるIT・ネット通販の一大拠点。2016年のG20サミット、2023年のアジア競技大会の開催地でもある。「上に天国あり、下に{{蘇州|そしゅう}}・{{杭州|こうしゅう}}あり」とうたわれた水と緑の景観は今も健在で、西湖の周りでは龍井茶の茶畑も見られる。",
    modern: [
      commons("20201012从钱塘江江面上空观看钱江新城 2.jpg", "MasaneMiyaPA", "CC BY-SA 4.0", "{{銭塘江|せんとうこう}}沿いの新都心・{{銭江|せんこう}}新城"),
      commons("Hangzhou CBD at night 2.jpg", "EditQ", "CC BY-SA 4.0", "球形の{{杭州|こうしゅう}}国際会議センターと{{銭江|せんこう}}新城の夜景"),
      commons("Huanglong & Broken Bridge - Hangzhou Skylines.jpg", "User:CatOnMars", "CC BY 4.0", "西湖のほとりに広がる市街地"),
    ],
    heritage: "臨安城",
    spots: [
      { name: "西湖", note: "{{白居易|はくきょい}}や{{蘇軾|そしょく}}が{{堤|つつみ}}を築いた湖で、「西湖十景」と呼ばれる名所が点在する。世界遺産。" },
      { name: "{{霊隠寺|れいいんじ}}", note: "東晋の時代に創建されたと伝わる古刹。境内の{{飛来峰|ひらいほう}}には、岩壁に彫られた数多くの仏像が残る。" },
      { name: "{{岳王廟|がくおうびょう}}", note: "金と戦った{{南宋|なんそう}}の名将・{{岳飛|がくひ}}を{{祀|まつ}}る{{廟|びょう}}。{{岳飛|がくひ}}を{{陥|おとしい}}れた{{秦檜|しんかい}}夫妻の{{跪|ひざまず}}く像がある。", heritage: "岳王廟" },
      { name: "{{雷峰塔|らいほうとう}}・{{六和塔|りくわとう}}", note: "{{呉越|ごえつ}}国の時代に建てられた塔。{{雷峰塔|らいほうとう}}は1924年に倒れて2002年に再建、{{六和塔|りくわとう}}は{{銭塘江|せんとうこう}}を見下ろす。" },
      { name: "{{南宋|なんそう}}{{御街|ぎょがい}}・{{臨安城|りんあんじょう}}{{遺跡|いせき}}", note: "{{南宋|なんそう}}の皇帝が通った大通りの跡は、古い商店が並ぶ{{歩行者|ほこうしゃ}}天国に。皇城跡の{{発掘|はっくつ}}も進む。", heritage: "臨安城" },
      { name: "京杭大運河・{{良渚|りょうしょ}}古城{{遺跡|いせき}}", note: "北京へ続く大運河の終点（{{拱宸橋|きょうしんきょう}}付近）と、約5000年前の都市{{遺跡|いせき}}。どちらも世界遺産。", heritage: "京杭大運河" },
    ],
    mapX: 368,
    mapY: 235,
    labelDx: 0,
    labelDy: 10,
    anchor: "middle",
  },
  {
    id: "anyang",
    city: "{{安陽|あんよう}}",
    reading: "あんよう（アンヤン）",
    province: "河南省の地級市",
    population: "約550万人",
    oldNames: ["{{殷|いん}}", "{{鄴|ぎょう}}（近郊）", "{{相州|そうしゅう}}"],
    dynasties: "{{殷|いん}}（後期）／近郊の{{鄴|ぎょう}}に{{曹魏|そうぎ}}（王都）・{{後趙|こうちょう}}・{{前燕|ぜんえん}}・{{東魏|とうぎ}}・{{北斉|ほくせい}}",
    history:
      "{{殷|いん}}の王{{盤庚|ばんこう}}が都を移したと伝わり、約250年にわたって{{殷|いん}}後期の都が置かれた。20世紀にここから{{甲骨文字|こうこつもじ}}を刻んだ骨や{{亀|かめ}}の{{甲羅|こうら}}が大量に見つかり、伝説とされていた{{殷|いん}}王朝の実在が{{証明|しょうめい}}された。市の北の{{鄴|ぎょう}}は{{曹操|そうそう}}が魏王として{{本拠|ほんきょ}}とした都市で、のちに北朝の諸王朝も都を置いた。",
    today:
      "現在は河南省北部の地方都市で、鉄鋼などの工業が盛ん。1988年に中国の古都に数えられ、「八大古都」の一つとなった。漢字のふるさととして文字の博物館があり、2009年には{{曹操|そうそう}}の墓とされる「{{曹操高陵|そうそうこうりょう}}」の発見が発表されて話題を集めた。",
    modern: [
      commons("26111-Anyang (49068485362).jpg", "xiquinhosilva", "CC BY 2.0", "高層住宅が並ぶ市街地"),
      commons("Anyangdong Railway Station (49068283086).jpg", "xiquinhosilva", "CC BY 2.0", "北京と広州を結ぶ高速鉄道の{{安陽|あんよう}}東駅"),
    ],
    heritage: "殷墟遺跡",
    spots: [
      { name: "{{殷墟|いんきょ}}", note: "{{殷|いん}}の王宮・{{宗廟|そうびょう}}の跡と王墓群。{{甲骨文字|こうこつもじ}}が見つかった坑や、{{戦車|せんしゃ}}を{{埋|う}}めた{{車馬坑|しゃばこう}}が見学できる。世界遺産。", heritage: "殷墟遺跡" },
      { name: "中国文字博物館", note: "{{甲骨文字|こうこつもじ}}から現代の漢字まで、文字の歴史をたどる国立の博物館。2009年開館。" },
      { name: "{{曹操高陵|そうそうこうりょう}}{{遺址|いし}}博物館", note: "{{曹操|そうそう}}の墓とされる{{陵墓|りょうぼ}}の上に建てられ、2023年に開館。{{埋葬|まいそう}}された部屋を見下ろすことができる。" },
      { name: "{{羑里城|ゆうりじょう}}・{{岳飛|がくひ}}{{廟|びょう}}", note: "周の文王が{{殷|いん}}の{{紂王|ちゅうおう}}に{{幽閉|ゆうへい}}されたと伝わる地と、{{岳飛|がくひ}}の故郷に建つ{{廟|びょう}}。ともに市南部の{{湯陰県|とういんけん}}にある。" },
      { name: "{{紅旗渠|こうきょ}}", note: "1960年代に{{林州|りんしゅう}}の人々が{{断崖|だんがい}}を切り開いて手作業で築いた全長約1500kmの用水路。" },
    ],
    mapX: 325,
    mapY: 181,
    labelDx: 5,
    labelDy: 2,
    anchor: "start",
  },
  {
    id: "zhengzhou",
    city: "{{鄭州|ていしゅう}}",
    reading: "ていしゅう（ジョンジョウ）",
    province: "河南省の省都",
    population: "約1,260万人",
    oldNames: ["{{亳|はく}}（説）", "{{隞|ごう}}（説）", "{{管|かん}}", "{{鄭|てい}}"],
    dynasties: "{{殷|いん}}（前期）／周辺に夏の都の候補地も",
    history:
      "市の中心部に、約3600年前の{{殷|いん}}（商）前期の都の{{城壁|じょうへき}}「{{鄭州|ていしゅう}}{{商城|しょうじょう}}」が残る。{{殷|いん}}を開いた{{湯王|とうおう}}の都「{{亳|はく}}」とする説と、のちの王{{仲丁|ちゅうてい}}が移った「{{隞|ごう}}」とする説がある。近郊の{{登封|とうほう}}には夏の都とする説のある{{遺跡|いせき}}もあり、2004年に「八大古都」に加えられた。",
    today:
      "現在は河南省の省都で、人口1200万人を{{超|こ}}える{{中原|ちゅうげん}}最大の都市。南北・東西の幹線鉄道が交わる中国{{屈指|くっし}}の交通の{{要|かなめ}}で、高速鉄道網の{{拠点|きょてん}}となっている。スマートフォンの大工場がある工業都市としても知られる。",
    modern: [
      commons("20240801 Skyline of Zhengdong New Area 02.jpg", "Windmemories", "CC BY-SA 4.0", "新都心・{{鄭東|ていとう}}新区の高層ビル群"),
      commons("Zhengdong New Area CBD on 29 Oct 2018.jpg", "Windmemories", "CC BY-SA 4.0", "遠くから望む{{鄭東|ていとう}}新区の中心業務地区"),
      commons("Longzihu 20190417 02.jpg", "Windmemories", "CC BY-SA 4.0", "大学が集まる{{龍子湖|りゅうしこ}}地区"),
    ],
    heritage: null,
    spots: [
      { name: "{{少林寺|しょうりんじ}}・{{嵩山|すうざん}}", note: "{{達磨|だるま}}が修行したと伝わる禅宗と少林拳の寺。五岳の一つ・{{嵩山|すうざん}}にあり、周辺の古建築とともに世界遺産「天地之中」に登録。" },
      { name: "{{中岳廟|ちゅうがくびょう}}・{{嵩陽書院|すうようしょいん}}・{{観星台|かんせいだい}}", note: "{{嵩山|すうざん}}の神を{{祀|まつ}}る{{廟|びょう}}、宋代の四大書院の一つ、元の{{郭守敬|かくしゅけい}}が天体観測を行った台。いずれも世界遺産。" },
      { name: "河南博物院", note: "{{中原|ちゅうげん}}で出土した青銅器や玉器を集めた中国有数の博物館。古代の楽器を使った演奏会も開かれる。" },
      { name: "{{鄭州|ていしゅう}}{{商城|しょうじょう}}{{遺址|いし}}", note: "市街地に残る{{殷|いん}}代前期の{{城壁|じょうへき}}の跡。{{遺址|いし}}公園と博物館で整備されている。" },
      { name: "黄河風景名勝区", note: "黄河のほとりの景勝地。伝説上の帝王・{{炎帝|えんてい}}と{{黄帝|こうてい}}の巨大な像が山に彫られている。" },
    ],
    mapX: 320,
    mapY: 190,
    labelDx: -4,
    labelDy: -3,
    anchor: "end",
  },
  {
    id: "datong",
    city: "大同",
    reading: "だいどう（ダートン）",
    province: "山西省の地級市",
    population: "約310万人",
    oldNames: ["{{平城|へいじょう}}", "西京"],
    dynasties: "{{北魏|ほくぎ}}（前期）／{{遼|りょう}}・{{金|きん}}の副都",
    history:
      "{{鮮卑|せんぴ}}族の{{北魏|ほくぎ}}が398年に都を置いた「{{平城|へいじょう}}」の地。{{華北|かほく}}を統一した{{北魏|ほくぎ}}の都として栄え、{{孝文帝|こうぶんてい}}が494年に洛陽へ都を移すまで約100年続いた。その間に{{雲岡石窟|うんこうせっくつ}}が彫られ、仏教文化の一大中心地となった。のちに{{遼|りょう}}と{{金|きん}}も副都「西京」を置いている。",
    today:
      "現在は山西省北部の都市で、長く「石炭の都」として発展してきた。近年は観光に力を入れ、明代の{{城壁|じょうへき}}を修復・再建して古い町並みを{{蘇|よみがえ}}らせた。万里の長城に近い、北方の古都の{{趣|おもむき}}を残している。",
    modern: [
      commons("The skyline of Datong（Southgate）2019.jpg", "Charlie fong", "CC BY-SA 4.0", "南門付近から望む旧市街と市街地"),
      commons("Datongnan Railway Station.jpg", "Vikarna", "CC BY-SA 4.0", "高速鉄道の大同南駅"),
    ],
    heritage: "雲岡石窟",
    spots: [
      { name: "{{雲岡石窟|うんこうせっくつ}}", note: "460年ごろから{{北魏|ほくぎ}}の皇帝の命で彫られた石窟群。高さ約14mの{{露坐|ろざ}}の大仏が有名。世界遺産。", heritage: "雲岡石窟" },
      { name: "{{懸空寺|けんくうじ}}", note: "{{断崖|だんがい}}の中腹に張りつくように建つ寺。{{北魏|ほくぎ}}の創建と伝わり、仏教・道教・{{儒教|じゅきょう}}をあわせて{{祀|まつ}}る。" },
      { name: "{{華厳寺|けごんじ}}", note: "{{遼|りょう}}の時代に建てられた寺。11世紀の建物と仏像が残る。" },
      { name: "九龍壁", note: "明の皇族の屋敷の前に置かれた、9頭の龍を{{瑠璃|るり}}{{煉瓦|れんが}}で{{描|えが}}いた{{壁|かべ}}。" },
    ],
    mapX: 317,
    mapY: 145,
    labelDx: -5,
    labelDy: 2,
    anchor: "end",
  },
  {
    id: "chengdu",
    city: "{{成都|せいと}}",
    reading: "せいと（チョンドゥー）",
    province: "四川省の省都",
    population: "約2,090万人",
    oldNames: ["{{蜀|しょく}}", "{{益州|えきしゅう}}", "{{錦官城|きんかんじょう}}"],
    dynasties: "古{{蜀|しょく}}・{{成家|せいか}}・{{蜀漢|しょくかん}}・{{成漢|せいかん}}・{{前蜀|ぜんしょく}}・{{後蜀|こうしょく}}",
    history:
      "{{秦|しん}}の{{李冰|りひょう}}が築いた{{都江堰|とこうえん}}の水利によって豊かな{{穀倉地帯|こくそうちたい}}となり、「天府の国」と呼ばれた四川盆地の中心。三国時代には{{劉備|りゅうび}}が{{蜀漢|しょくかん}}を建てて都とし、{{諸葛亮|しょかつりょう}}が国を治めた。{{唐|とう}}の時代には{{杜甫|とほ}}がこの地に{{草堂|そうどう}}を結び、五代十国の{{前蜀|ぜんしょく}}・{{後蜀|こうしょく}}も都を置いている。",
    today:
      "現在は人口2000万人を{{超|こ}}える西南地方最大の都市で、IT・電子産業の拠点。ジャイアントパンダの研究基地や、辛い{{四川料理|しせんりょうり}}・{{火鍋|ひなべ}}でも知られる。茶館でのんびり過ごす「ゆったりした暮らし」の街としても人気が高い。",
    modern: [
      commons("Tianfu Financial Center 2.jpg", "Kkkev999", "CC BY-SA 4.0", "南部の天府新区に広がる金融・ビジネス街"),
      commons("Chengdu skyline June 2017.jpg", "George N", "CC BY 2.0", "市街地とテレビ塔"),
      commons("雪山下的成都市天际线 Chengdu skyline with snow capped mountains.jpg", "FISU", "CC BY 3.0", "晴れた日には市街地の向こうに雪山が見える"),
    ],
    heritage: "武侯祠（成都）",
    spots: [
      { name: "{{武侯祠|ぶこうし}}", note: "{{諸葛亮|しょかつりょう}}と{{劉備|りゅうび}}を{{祀|まつ}}る{{廟|びょう}}で、{{劉備|りゅうび}}の墓「{{恵陵|けいりょう}}」もある。隣の{{錦里|きんり}}は古い街並みを再現した{{繁華街|はんかがい}}。", heritage: "武侯祠（成都）", href: "/sanguo-comparison" },
      { name: "{{杜甫|とほ}}{{草堂|そうどう}}", note: "{{安史の乱|あんしのらん}}を{{逃|のが}}れた{{杜甫|とほ}}が暮らした住まいの跡。竹林に囲まれた庭園になっている。" },
      { name: "{{都江堰|とこうえん}}", note: "紀元前3世紀に築かれ、今も使われ続ける水利施設。道教の聖地・{{青城山|せいじょうざん}}とあわせて世界遺産。" },
      { name: "{{金沙|きんさ}}{{遺跡|いせき}}・{{三星堆|さんせいたい}}", note: "古{{蜀|しょく}}文明の{{遺跡|いせき}}。金沙は市内、目の飛び出た青銅仮面で知られる{{三星堆|さんせいたい}}は北へ約40kmの{{広漢市|こうかんし}}にある。" },
      { name: "パンダ{{繁育|はんいく}}研究基地", note: "ジャイアントパンダの保護と繁殖を行う施設。朝の食事どきが観察のねらい目。" },
    ],
    mapX: 248,
    mapY: 231,
    labelDx: 0,
    labelDy: 10,
    anchor: "middle",
  },
].map((c) => {
  const photo = c.heritage ? findHeritage(c.heritage) : null;
  return {
    ...c,
    photo,
    spots: c.spots.map((s) => ({ ...s, photo: s.heritage ? findHeritage(s.heritage) : null })),
  };
});

// 古都の名前から現在の都市を引く早見表
const QUICK = [
  { old: "{{長安|ちょうあん}}", now: "西安", id: "xian" },
  { old: "{{咸陽|かんよう}}・{{鎬京|こうけい}}", now: "西安（周辺）", id: "xian" },
  { old: "{{洛邑|らくゆう}}・{{洛陽|らくよう}}", now: "{{洛陽|らくよう}}", id: "luoyang" },
  { old: "{{建業|けんぎょう}}・{{建康|けんこう}}・{{金陵|きんりょう}}", now: "南京", id: "nanjing" },
  { old: "{{大都|だいと}}・{{燕京|えんけい}}・{{北平|ほくへい}}", now: "北京", id: "beijing" },
  { old: "{{汴京|べんけい}}・{{大梁|たいりょう}}", now: "{{開封|かいほう}}", id: "kaifeng" },
  { old: "{{臨安|りんあん}}", now: "{{杭州|こうしゅう}}", id: "hangzhou" },
  { old: "{{殷墟|いんきょ}}・{{鄴|ぎょう}}", now: "{{安陽|あんよう}}（{{鄴|ぎょう}}は近郊）", id: "anyang" },
  { old: "{{亳|はく}}（説）", now: "{{鄭州|ていしゅう}}", id: "zhengzhou" },
  { old: "{{平城|へいじょう}}", now: "大同", id: "datong" },
  { old: "{{益州|えきしゅう}}・{{錦官城|きんかんじょう}}", now: "{{成都|せいと}}", id: "chengdu" },
];

const FAQ = [
  {
    q: "{{長安|ちょうあん}}は今のどこですか？",
    a: "{{陝西省|せんせいしょう}}の省都・西安市です。漢の{{長安|ちょうあん}}城は現在の市街地の北西に、{{隋|ずい}}・{{唐|とう}}の{{長安|ちょうあん}}城は現在の旧市街を中心とする一帯にありました。明代に築かれた今の西安{{城壁|じょうへき}}は、{{唐|とう}}の皇城を基礎にしています。",
  },
  {
    q: "中国の「八大古都」とはどこですか？",
    a: "西安・{{洛陽|らくよう}}・南京・北京・{{開封|かいほう}}・{{杭州|こうしゅう}}・{{安陽|あんよう}}・{{鄭州|ていしゅう}}の8都市です。はじめは西安・{{洛陽|らくよう}}・南京・北京の「四大古都」、{{開封|かいほう}}を加えた「五大古都」と呼ばれ、のちに{{杭州|こうしゅう}}・{{安陽|あんよう}}（1988年）・{{鄭州|ていしゅう}}（2004年）が加わりました。",
  },
  {
    q: "古都をめぐる旅行ならどこから行くのがおすすめですか？",
    a: "初めてなら、{{兵馬俑|へいばよう}}や{{城壁|じょうへき}}がそろう西安と、{{故宮|こきゅう}}・長城のある北京が定番です。西安・{{洛陽|らくよう}}・{{鄭州|ていしゅう}}・{{開封|かいほう}}は高速鉄道で結ばれているため、{{中原|ちゅうげん}}の古都をまとめてめぐることもできます。南京と{{杭州|こうしゅう}}も上海から高速鉄道で1時間ほどです。",
  },
  {
    q: "日本の都はどの中国の古都を手本にしたのですか？",
    a: "奈良の平城京や京都の平安京は、{{唐|とう}}の{{長安|ちょうあん}}城を手本にしたとされます。碁盤の目のような街路や、北の中央に宮城を置き南へ朱雀大路を通す配置は{{長安|ちょうあん}}にならったものです。京都の東半分を「洛陽」、西半分を「{{長安|ちょうあん}}」と呼んだこともあり、「{{上洛|じょうらく}}」「洛中」の「洛」はその名残です。",
  },
];

// 古都の位置図。東部〜中部を拡大して表示する
function CapitalsMap() {
  return (
    <div className="p-3 mb-8" style={card}>
      <svg viewBox="225 118 172 134" style={{ width: "100%", maxHeight: 440, display: "block", margin: "0 auto" }} role="img" aria-label="古都の位置図">
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="0.6" strokeLinejoin="round" />
        <path d={TAIWAN_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="0.6" strokeLinejoin="round" />
        <g>
          <circle cx={378} cy={226} r="1.8" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="0.6" />
          <text x={382} y={228} style={{ fontFamily: "var(--font-serif), serif", fontSize: 5, fill: COLORS.inkSoft }}>上海</text>
        </g>
        {CITIES.map((c) => (
          <a key={c.id} href={`#${c.id}`}>
            <circle cx={c.mapX} cy={c.mapY} r="2.6" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="0.7" />
            <text
              x={c.mapX + c.labelDx}
              y={c.mapY + c.labelDy}
              textAnchor={c.anchor}
              style={{ fontFamily: "var(--font-serif), serif", fontSize: 6, fontWeight: 700, fill: COLORS.ink }}
            >
              {stripRuby(c.city)}
            </text>
          </a>
        ))}
      </svg>
      <p style={{ fontSize: 11, color: COLORS.inkSoft, marginTop: 6 }}>
        <ruby>朱色<rt>しゅいろ</rt></ruby>の点が紹介する古都（現在の都市名）。点を押すと各都市の紹介へ移動します。
      </p>
    </div>
  );
}

function Thumb({ photo, name, size }) {
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{ width: size, height: size, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}
    >
      <HeritageThumb imageUrl={photo?.imageUrl} name={name} type={photo?.type || "building"} />
    </div>
  );
}

function CitySection({ city, index }) {
  const credits = [city.photo, ...city.spots.map((s) => s.photo)].filter((p) => p?.credit);
  const uniqueCredits = [...new Set(credits.map((p) => p.credit))];
  return (
    <section id={city.id} style={{ ...card, marginBottom: 20, scrollMarginTop: 16 }}>
      {city.photo?.imageUrl && (
        <div style={{ height: 180, overflow: "hidden", backgroundColor: "#EFE7D0" }}>
          <HeritageThumb imageUrl={city.photo.imageUrl} name={city.city} type="building" objectPosition="center" />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 12, fontWeight: 700, color: COLORS.vermilion }}>{index + 1}</span>
          <h2 style={{ fontFamily: "var(--font-serif), serif", fontSize: 21, fontWeight: 900, color: COLORS.ink }}>
            <RubyText text={city.city} />
          </h2>
          <span style={{ fontSize: 11.5, color: COLORS.inkSoft }}>{city.reading}</span>
        </div>
        <div style={{ fontSize: 11.5, color: COLORS.vermilionSoft, marginTop: 2 }}>
          <span aria-hidden>📍</span> <RubyText text={city.province} />・人口 {city.population}
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mt-3">
          <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif", fontWeight: 700 }}>古都の名</span>
          {city.oldNames.map((n) => (
            <span key={n} style={{ fontSize: 12, color: COLORS.ink, border: `1px solid ${COLORS.mist}`, backgroundColor: "#FFFDF7", padding: "1px 7px", fontFamily: "var(--font-serif), serif" }}>
              <RubyText text={n} />
            </span>
          ))}
        </div>
        <p style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 6, lineHeight: 1.7 }}>
          <span style={{ color: COLORS.gold, fontFamily: "var(--font-serif), serif", fontWeight: 700 }}>都とした王朝</span>　<RubyText text={city.dynasties} />
        </p>

        <div className="mt-4">
          <div style={labelStyle}>古都としての歩み</div>
          <p style={{ ...bodyText, fontSize: 12.5 }}>
            <RubyText text={city.history} />
          </p>
        </div>
        <div className="mt-3">
          <div style={labelStyle}>現在の姿</div>
          <p style={{ ...bodyText, fontSize: 12.5 }}>
            <RubyText text={city.today} />
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3">
            {city.modern.map((m) => (
              <figure key={m.imageUrl} style={{ backgroundColor: "#FFFDF7", border: "1px solid #E8E0CA" }}>
                <div style={{ aspectRatio: "4 / 3", overflow: "hidden", backgroundColor: "#EFE7D0" }}>
                  <HeritageThumb imageUrl={m.imageUrl} name={m.caption} type="building" objectPosition="center" />
                </div>
                <figcaption className="px-2 py-1.5">
                  <div style={{ fontSize: 11, lineHeight: 1.5, color: COLORS.ink }}>
                    <RubyText text={m.caption} />
                  </div>
                  <div style={{ fontSize: 9, lineHeight: 1.4, color: COLORS.mist, marginTop: 2 }}>{m.credit}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div style={labelStyle}>歴史的な観光地</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {city.spots.map((s) => {
              const href = s.href || (s.photo?.eventSlug ? `/events/${s.photo.eventSlug}` : null);
              return (
                <div key={s.name} className="flex gap-2.5 p-2.5" style={{ backgroundColor: "#FFFDF7", border: "1px solid #E8E0CA" }}>
                  {s.photo?.imageUrl && <Thumb photo={s.photo} name={s.name} size={64} />}
                  <div className="flex-1 min-w-0">
                    <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13.5, fontWeight: 700, color: COLORS.ink }}>
                      <RubyText text={s.name} />
                    </div>
                    <p style={{ fontSize: 11.5, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 2 }}>
                      <RubyText text={s.note} />
                    </p>
                    {href && (
                      <a href={href} style={{ ...linkStyle, fontSize: 11 }}>
                        {s.href ? "特集ページを読む →" : "関連する出来事を年表で読む →"}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {uniqueCredits.length > 0 && (
          <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 10, lineHeight: 1.6 }}>
            {uniqueCredits.map((c) => (
              <div key={c}>
                <RubyText text={c} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function AncientCapitalsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    about: ["中国の古都", "八大古都", "長安", "洛陽", "西安", "南京", "北京", "開封", "杭州"],
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/ancient-capitals` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "年表", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "古都からたどる現在の中国の都市", item: `${SITE_URL}/ancient-capitals` },
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
          古都からたどる現在の中国の都市
        </h1>
        <p style={{ fontFamily: "var(--font-serif), serif", fontSize: 14, color: COLORS.gold, marginBottom: 14 }}>
          <ruby>長安<rt>ちょうあん</rt></ruby>・<ruby>洛陽<rt>らくよう</rt></ruby>は今どんな街？ 歴史と観光地ガイド
        </p>
        <p style={{ ...bodyText, fontSize: 13.5, marginBottom: 24 }}>
          <RubyText text="{{唐|とう}}の都・{{長安|ちょうあん}}は今の西安、六朝の都・{{建康|けんこう}}は今の南京、{{北宋|ほくそう}}の都・{{汴京|べんけい}}は今の{{開封|かいほう}}――。中国の歴代王朝が都を置いた古都の多くは、名前を変えながら現在も大都市として続いています。" />
          <RubyText text="このページでは「中国八大古都」と呼ばれる8都市に、{{北魏|ほくぎ}}の大同と{{蜀漢|しょくかん}}の{{成都|せいと}}を加えた10の古都について、都としての歩み、高層ビルや高速鉄道の駅が立ち並ぶ現在の街並みの写真、訪ねてみたい歴史的な観光地を{{紹介|しょうかい}}します。" />
        </p>

        <nav aria-label="目次" className="p-4 mb-8" style={card}>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 13, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>目次</div>
          <ol className="flex flex-col gap-1" style={{ fontSize: 12.5, listStyle: "decimal", paddingLeft: 20 }}>
            <li>
              <a href="#quick" style={linkStyle}>古都の名前と現在の都市 早見表</a>
            </li>
            {CITIES.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} style={linkStyle}>
                  <RubyText text={c.city} />（<RubyText text={c.oldNames.filter((n) => !n.includes("（")).slice(0, 2).join("・")} />）
                </a>
              </li>
            ))}
            <li>
              <a href="#faq" style={linkStyle}>よくある疑問</a>
            </li>
          </ol>
        </nav>

        <CapitalsMap />

        <section id="quick" style={{ marginBottom: 32, scrollMarginTop: 16 }}>
          <h2 style={sectionHeading}>古都の名前と現在の都市 早見表</h2>
          <div style={{ ...card, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, minWidth: 320 }}>
              <thead>
                <tr>
                  {["古都の名", "現在の都市"].map((h) => (
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
                {QUICK.map((q) => (
                  <tr key={q.old}>
                    <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA", color: COLORS.ink, fontFamily: "var(--font-serif), serif", fontWeight: 700 }}>
                      <RubyText text={q.old} />
                    </td>
                    <td style={{ padding: "7px 10px", borderTop: "1px solid #E8E0CA" }}>
                      <a href={`#${q.id}`} style={linkStyle}>
                        <RubyText text={q.now} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 11, color: COLORS.inkSoft, marginTop: 8 }}>
            人口は2020年の中国の国勢調査（第7次全国人口調査）による市域全体の常住人口の概数です。中国の「市」は周辺の農村部も含む広い範囲を指します。
          </p>
        </section>

        {CITIES.map((c, i) => (
          <CitySection key={c.id} city={c} index={i} />
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
            夏から<ruby>中華人民共和国<rt>ちゅうかじんみんきょうわこく</rt></ruby>まで、どの王朝がどこに都を置いたのかを時代順にたどるページや、世界遺産のまとめもあわせてどうぞ。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/china-capitals" variant="solid">歴代王朝の都一覧を見る</NavButton>
            <NavButton href="/world-heritage" variant="outline">中国の世界遺産</NavButton>
            <NavButton href="/silk-road" variant="outline">シルクロード</NavButton>
          </div>
        </section>

        <A8AdBlock ad="agoda" className="mt-10" />

        <RelatedEraGuides path="/ancient-capitals" eraIds={["westernhan", "tang", "northernsong", "southernsong", "ming"]} />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
