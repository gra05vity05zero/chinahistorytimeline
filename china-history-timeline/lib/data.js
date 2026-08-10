// ---- デザイントークン ------------------------------------------------
// paper: 経年した絹布のような生成り色 / ink: 墨の黒
// vermilion: 印章の朱 / gold: 詔勅の金 / jade: 玉の緑（文化イベント用アクセント）
export const COLORS = {
  paper: "#EDE6D3",
  paperDeep: "#E4DBC4",
  ink: "#211D18",
  inkSoft: "#4A443B",
  vermilion: "#A6332A",
  vermilionSoft: "#C25C4E",
  gold: "#A9822F",
  jade: "#3E5C4E",
  mist: "#B9AD90",
};

export const CATEGORY_STYLE = {
  王朝: { color: COLORS.gold, label: "王朝" },
  戦争: { color: COLORS.vermilion, label: "戦争・動乱" },
  文化: { color: COLORS.jade, label: "文化" },
  対外: { color: COLORS.inkSoft, label: "対外関係" },
};

// ---- アフィリエイト設定 ------------------------------------------------
// Amazonアソシエイトのトラッキングタグ（例: "yourid-22"）をここに設定する。
// 個々の作品にはASINを指定すれば自動でリンクが組み立てられる。
export const AMAZON_ASSOCIATE_TAG = "YOUR_AMAZON_TAG-22"; // ← 自分のアソシエイトタグに置き換える

export function buildAmazonUrl(asin) {
  if (!asin) return null;
  return `https://www.amazon.co.jp/dp/${asin}?tag=${AMAZON_ASSOCIATE_TAG}`;
}

// mediaオブジェクトから実際に開くURLを解決する（関連作品＝Amazonアソシエイトのみ）
export function resolveMediaUrl(med) {
  if (med.asin) return buildAmazonUrl(med.asin);
  return null;
}

// ---- Google AdSense 設定 -----------------------------------------------
export const ADSENSE_CLIENT_ID = "ca-pub-YOUR_ADSENSE_CLIENT_ID"; // ← 自分のパブリッシャーIDに置き換える
export const ADSENSE_SLOT_DETAIL = "YOUR_AD_SLOT_ID_DETAIL";
export const ADSENSE_SLOT_TIMELINE = "YOUR_AD_SLOT_ID_TIMELINE";

// ---- A8.net 広告枠（ページ下部・カテゴリ/王朝に応じた興味連動広告） --------
export const A8_ADS = {
  byCategory: {
    戦争: [{ label: "歴史シミュレーションゲーム特集", clickUrl: "https://px.a8.net/svt/ejp?a8mat=PLACEHOLDER_WAR" }],
    文化: [{ label: "中国茶・工芸品ストア", clickUrl: "https://px.a8.net/svt/ejp?a8mat=PLACEHOLDER_CULTURE" }],
    王朝: [{ label: "歴史ドキュメンタリー配信サービス", clickUrl: "https://px.a8.net/svt/ejp?a8mat=PLACEHOLDER_DYNASTY" }],
    対外: [{ label: "中華圏 旅行・ツアー予約", clickUrl: "https://px.a8.net/svt/ejp?a8mat=PLACEHOLDER_TRAVEL" }],
  },
  byEra: {
    // 例: sanguo: [{ label: "三国志グッズ特集", clickUrl: "https://px.a8.net/svt/ejp?a8mat=PLACEHOLDER_SANGUO" }],
  },
};

export function getAdsForEvent(event, era) {
  const eraAds = A8_ADS.byEra[era.id] || [];
  const categoryAds = A8_ADS.byCategory[event.category] || [];
  return eraAds.length ? eraAds : categoryAds;
}

// ---- データ（王朝ごとに詳細化） ----------------------------------------
export const ERAS = [
  {
    id: "neolithic",
    seal: "新",
    name: "新石器文化",
    period: "c. 8000 BC – 2070 BC",
    events: [
      { year: "c. 7000 BC", title: "河姆渡文化の稲作", category: "文化", summary: "長江下流域で稲作農耕の痕跡が見つかっており、中国最古級の農耕文化とされる。骨製農具や高床式住居の遺構も出土している。" },
      { year: "c. 5000 BC", title: "仰韶文化の成立", category: "文化", summary: "黄河中流域で彩陶（彩色土器）を特徴とする新石器文化が興り、集落遺跡からは初期の農耕・牧畜生活の様子がうかがえる。" },
      { year: "c. 4000 BC", title: "大汶口文化の展開", category: "文化", summary: "山東地方で独自の玉器・陶器文化が発展し、副葬品の格差から社会の階層化が進んでいたことがうかがえる。" },
      { year: "c. 3000 BC", title: "竜山文化の成立", category: "文化", summary: "黒陶を特徴とする文化で、城壁を持つ集落も出現し始める。より組織化された社会構造への移行を示す時代とされる。" },
      { year: "c. 2700 BC", title: "黄帝と蚩尤の戦い（伝説）", category: "戦争", summary: "涿鹿の戦いの伝承で、中国神話における始祖抗争として語られる。黄帝は後に漢民族共通の祖として神格化されていく。" },
      { year: "c. 2200 BC", title: "堯舜禅譲の伝説", category: "文化", summary: "徳のある人物へ王位を譲る「禅譲」の理想として、後世長く儒教的な統治観の模範として語り継がれる。" },
    ],
  },
  {
    id: "xia",
    seal: "夏",
    name: "夏",
    period: "c. 2070 BC – 1600 BC",
    events: [
      { year: "c. 2070 BC", title: "禹による夏の建国", category: "王朝", summary: "中国最古とされる王朝。禹が黄河の治水事業を成功させた功績により人々の信頼を得て、王位を確立したと伝わる。" },
      { year: "c. 2070 BC", title: "治水事業の完成", category: "文化", summary: "黄河の氾濫を治めた功績により禹が絶大な信頼を得て、後継者への世襲を可能にする権威が形成されたとされる。" },
      { year: "c. 2000 BC", title: "太康失国", category: "戦争", summary: "後継者太康が政務を怠り遊興にふけったため、有力な弓の名手であった有窮氏の羿に国を奪われる内乱が起こる。" },
      { year: "c. 1940 BC", title: "少康中興", category: "王朝", summary: "亡命生活を経た少康が勢力を立て直して夏を再興し、王朝の支配基盤を改めて固めたとされる出来事。" },
      { year: "c. 1600 BC", title: "桀王の暴政", category: "王朝", summary: "暴虐な統治と享楽的な生活により諸侯の離反を招いたと伝えられる、夏最後の王。後世、暴君の代名詞として語られる。" },
      { year: "c. 1600 BC", title: "鳴条の戦い・夏の滅亡", category: "戦争", summary: "殷（商）の湯王に敗れ、夏王朝が終焉を迎える。以後、殷が中原の新たな支配者として台頭する。" },
    ],
  },
  {
    id: "shang",
    seal: "殷",
    name: "殷（商）",
    period: "1600 BC – 1046 BC",
    events: [
      { year: "c. 1600 BC", title: "湯王による殷の建国", category: "王朝", summary: "夏を滅ぼした湯王が新たな王朝を開く。以後、青銅器文化と占卜による統治が本格化していく。" },
      { year: "c. 1300 BC", title: "盤庚の遷都", category: "王朝", summary: "度重なる遷都の末に都を殷（現・河南省安陽）に定め、以後長期にわたり安定した王朝運営が続いたとされる。" },
      { year: "c. 1250 BC", title: "甲骨文字の使用", category: "文化", summary: "亀甲や獣骨を用いた占いの記録として、現存する最古の体系的な漢字群が残されている。王の意思決定に深く関わった。", heritage: [
        { type: "artifact", name: "殷墟出土の甲骨", description: "河南省安陽で発見された亀甲・獣骨の占卜記録。漢字の起源を示す一級の史料。", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ancient_Chinese_Writing_on_Ox_Scapula,_Shang_Dynasty_Oracle_Bone,_Yinxu.jpg", credit: "Wikimedia Commons（パブリックドメイン）" },
        { type: "building", name: "殷墟遺跡", description: "殷後期の王都跡。2006年に世界遺産に登録された考古学上の重要遺跡。" },
      ] },
      { year: "c. 1200 BC", title: "武丁の治世と婦好の活躍", category: "対外", summary: "王妃婦好が自ら軍を率いて周辺諸族を征討したと甲骨文に記されており、殷の勢力圏が大きく拡大した時期とされる。" },
      { year: "c. 1075 BC", title: "紂王の暴政", category: "王朝", summary: "酒池肉林の逸話で知られる暴君として後世語られる殷最後の王。実際の史実性については諸説ある。" },
      { year: "1046 BC", title: "牧野の戦い", category: "戦争", summary: "周の武王が殷の紂王を破り、約550年続いた殷王朝が終わりを告げる。以後、周による封建的な統治体制が始まる。" },
    ],
  },
  {
    id: "westernzhou",
    seal: "周",
    name: "西周",
    period: "1046 BC – 771 BC",
    events: [
      { year: "1046 BC", title: "周の建国", category: "王朝", summary: "武王が鎬京（現・西安付近）に都を置き、殷に代わる新王朝を開く。天命思想により統治の正統性が説かれた。" },
      { year: "1043 BC", title: "封建制（分封制）の確立", category: "文化", summary: "一族や功臣を各地の諸侯として封じ、血縁関係を軸にした統治体制の基礎を築く。後の中国統治の原型となった。" },
      { year: "c. 1042 BC", title: "周公旦の摂政と礼楽制度", category: "文化", summary: "幼い成王を補佐した周公旦が、礼（儀礼）と楽（音楽）による統治規範を整備し、儒教思想の源流の一つとなる。" },
      { year: "c. 1000 BC", title: "成康の治", category: "王朝", summary: "成王・康王の治世は刑罰を用いる必要がないほど太平が続いたと伝えられ、周の最盛期の一つとされる。" },
      { year: "841 BC", title: "国人暴動（共和行政）", category: "戦争", summary: "圧政に耐えかねた都の民衆が蜂起し厲王が追放され、大臣らによる共和行政という異例の統治体制が敷かれる。" },
      { year: "771 BC", title: "犬戎の侵入・幽王の死", category: "戦争", summary: "西方異民族犬戎の侵入により幽王が殺害され西周は滅亡、都を東の洛邑へ移す「東遷」が行われる。" },
    ],
  },
  {
    id: "chunqiu",
    seal: "春",
    name: "春秋",
    period: "770 BC – 403 BC",
    events: [
      { year: "770 BC", title: "平王の東遷", category: "王朝", summary: "洛邑への遷都により周王室の権威は形式的なものとなり、実質的な統治力を持つ有力諸侯が台頭する時代が始まる。" },
      { year: "679 BC", title: "斉桓公、覇者となる", category: "王朝", summary: "名宰相管仲の補佐を得て国力を高め、諸侯を集めた会盟を主催する「覇者」として初めて認められる存在となる。" },
      { year: "632 BC", title: "晋文公の覇権・城濮の戦い", category: "戦争", summary: "南方の大国楚を破り、晋が中原の覇権を確立する。亡命生活を経た文公の劇的な半生も後世語り継がれる。" },
      { year: "551 BC", title: "孔子の誕生", category: "文化", summary: "儒教の祖となる思想家が生まれる。その教えは後の中国のみならず東アジア全体の思想・統治観に長く影響を与えた。", heritage: [
        { type: "figure", name: "孔子", description: "春秋時代の思想家・教育者。『論語』に残る言行録は東アジアの思想史に絶大な影響を与えた。" },
        { type: "building", name: "曲阜孔廟", description: "孔子を祀るため山東省曲阜に建てられた廟。歴代王朝により拡張され世界遺産に登録されている。" },
      ] },
      { year: "494 BC", title: "呉越の抗争・臥薪嘗胆", category: "戦争", summary: "呉王夫差と越王勾践による長年の抗争が繰り広げられ、その執念の物語は「臥薪嘗胆」の故事成語として現代にも残る。" },
      { year: "453 BC", title: "三家分晋", category: "戦争", summary: "有力な大夫であった韓・魏・趙の三氏が晋の領土を分割し、名門大国の解体は戦国時代への移行を象徴する出来事となる。" },
    ],
  },
  {
    id: "zhanguo",
    seal: "戦",
    name: "戦国",
    period: "403 BC – 221 BC",
    events: [
      { year: "403 BC", title: "三家分晋の公認", category: "王朝", summary: "周王室が韓・魏・趙の独立を正式に認め、これをもって戦国時代の始まりとする区分が一般的に用いられる。" },
      { year: "356 BC", title: "商鞅の変法（秦）", category: "文化", summary: "法治主義に基づく大改革により身分に依らない実力主義が導入され、秦の国力が飛躍的に高まる転機となった。" },
      { year: "4世紀 BC", title: "諸子百家の最盛期", category: "文化", summary: "孟子・荘子・墨子など多様な思想家が各国を遊説し、政治・倫理・宇宙観をめぐる活発な議論が交わされた時代。" },
      { year: "333 BC", title: "合従連衡の外交戦", category: "対外", summary: "蘇秦・張儀ら弁論家の巧みな外交戦略により、諸国の同盟関係が離合集散を繰り返す複雑な国際情勢が展開する。" },
      { year: "260 BC", title: "長平の戦い", category: "戦争", summary: "秦と趙の大軍が激突し、趙が壊滅的な敗北を喫する。この戦いを境に秦の中国統一への流れが決定的になる。" },
      { year: "221 BC", title: "戦国の終結", category: "王朝", summary: "秦が最後まで残っていた斉を滅ぼし、約550年続いた分裂の時代に終止符が打たれ中国が統一される。" },
    ],
  },
  {
    id: "qin",
    seal: "秦",
    name: "秦",
    period: "221 BC – 206 BC",
    events: [
      { year: "221 BC", title: "始皇帝、中国統一", category: "王朝", summary: "度量衡・文字・貨幣を統一し、郡県制による中央集権体制を確立する。中国史上初の統一王朝の皇帝として君臨した。", media: [
        { type: "movie", title: "英雄 -HERO-", year: "2002" },
        { type: "movie", title: "始皇帝暗殺", year: "1998" },
        { type: "book", title: "『秦の始皇帝』（陳舜臣）", asin: "PLACEHOLDER_ASIN" }, // ← ここに実際のASINを入れるとAmazonリンクが自動生成される
      ], heritage: [
        { type: "artifact", name: "兵馬俑", description: "始皇帝陵の副葬として作られた等身大の陶製兵士像群。1974年に発見された20世紀最大級の考古学的発見の一つ。", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Qin_Shihuang_Terracotta_Army,_Pit_1.jpg", credit: "Wikimedia Commons（パブリックドメイン）" },
        { type: "building", name: "秦始皇陵", description: "陝西省西安近郊にある始皇帝の陵墓。兵馬俑を含む広大な陪葬区を持ち、世界遺産に登録されている。" },
        { type: "figure", name: "始皇帝（嬴政）", description: "秦王として即位後、中国史上初めて全土を統一し「皇帝」の称号を初めて用いた人物。" },
      ] },
      { year: "221 BC", title: "郡県制の施行", category: "文化", summary: "従来の封建制を廃し、全国を郡・県に分けて中央から官僚を派遣する体制を敷く。以後の中国統治の基本形となった。" },
      { year: "214 BC", title: "万里の長城の修築", category: "文化", summary: "従来各国が築いていた防壁を連結・拡張し、北方の遊牧民族匈奴への備えとする大規模な土木事業が行われる。", heritage: [
        { type: "building", name: "万里の長城", description: "秦代の版は現存部分が少ないが、後代の明代に大規模改修された部分が現在最もよく知られる姿として残る。", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Badaling_China_Great-Wall-of-China-01.jpg", credit: "写真: Cccefalon / Wikimedia Commons, CC BY-SA 3.0" },
      ] },
      { year: "213 BC", title: "焚書坑儒", category: "文化", summary: "思想統制を目的に医薬・農業書などを除く書物を焼き、体制を批判した儒者を弾圧したとされる。後世厳しく評価される。" },
      { year: "209 BC", title: "陳勝・呉広の乱", category: "戦争", summary: "徴発された農民が反乱を起こし、秦末の混乱の幕開けとなる。短命に終わった反乱だが秦崩壊の直接のきっかけとなった。" },
      { year: "206 BC", title: "秦の滅亡・鴻門の会", category: "戦争", summary: "項羽と劉邦の軍が咸陽に迫り、秦は建国からわずか15年で滅亡へと追い込まれる。両者の緊張の宴も語り草となる。" },
    ],
  },
  {
    id: "westernhan",
    seal: "前",
    name: "前漢",
    period: "206 BC – 8 AD",
    events: [
      { year: "202 BC", title: "劉邦、漢を建国", category: "王朝", summary: "宿敵項羽との楚漢戦争を制し、庶民出身の劉邦が皇帝に即位する。以後400年余り続く漢王朝の礎が築かれる。" },
      { year: "180 BC", title: "呂后専権の終焉", category: "王朝", summary: "劉邦の死後実権を握った呂氏一族の専権が排除され、劉氏の血統である文帝が新たに擁立される。" },
      { year: "154 BC", title: "呉楚七国の乱", category: "戦争", summary: "中央集権化に反発した諸侯王七国が反乱を起こすが鎮圧され、以後皇帝への権力集中がさらに進むことになる。" },
      { year: "141 BC", title: "武帝の即位", category: "王朝", summary: "積極的な対外拡張と儒教の国教化を進め、漢の最盛期を築いた皇帝が即位する。在位期間は半世紀を超えた。" },
      { year: "138 BC", title: "張騫、西域へ", category: "対外", summary: "西方の大月氏との同盟を目指して派遣されるが、この旅がシルクロード開通の端緒となり西域諸国との交流が始まる。" },
      { year: "134 BC", title: "儒教の国教化", category: "文化", summary: "董仲舒の献策により儒学が国家の正統思想として採用され、以後の中国の統治理念に長期的な影響を与えることになる。" },
    ],
  },
  {
    id: "xin",
    seal: "新",
    name: "新（王莽）",
    period: "8 AD – 23 AD",
    events: [
      { year: "AD 8", title: "王莽、皇帝に即位", category: "王朝", summary: "外戚として権勢を強めた王莽が前漢を簒奪し、新王朝を建てる。周代の理想を掲げた急進的改革を進めていく。" },
      { year: "AD 9", title: "復古的な土地・貨幣改革", category: "文化", summary: "周代の井田制を理想化した土地国有化や度重なる貨幣改鋳を強行し、経済の混乱と社会の強い反発を招くことになる。" },
      { year: "AD 18", title: "赤眉の乱", category: "戦争", summary: "改革の失敗による困窮を背景に山東で農民反乱が起こり、眉を赤く染めた反乱軍が急速に勢力を拡大していく。" },
      { year: "AD 17", title: "緑林の乱", category: "戦争", summary: "湖北で蜂起した反乱勢力が新への抵抗運動として拡大し、各地の混乱をさらに加速させる要因となった。" },
      { year: "AD 23", title: "昆陽の戦い", category: "戦争", summary: "劉秀率いる寡兵が新の圧倒的な大軍を打ち破り、この勝利が新の権威崩壊と後漢建国への大きな転機となる。" },
      { year: "AD 23", title: "王莽の死・新の滅亡", category: "戦争", summary: "反乱軍により長安が陥落し王莽が殺害され、わずか15年で新王朝は滅亡、漢王朝の復興への道が開かれる。" },
    ],
  },
  {
    id: "easternhan",
    seal: "後",
    name: "後漢",
    period: "25 AD – 220 AD",
    events: [
      { year: "AD 25", title: "光武帝、漢を再興", category: "王朝", summary: "漢の一族であった劉秀が皇帝に即位し、洛陽を新たな都として漢王朝を復興する。後漢の始まりとされる。" },
      { year: "AD 73", title: "班超の西域経営", category: "対外", summary: "武力よりも巧みな外交で西域諸国を服属させ、シルクロード交易路の安定に大きく寄与した将軍として知られる。" },
      { year: "AD 105", title: "製紙法の改良（蔡倫）", category: "文化", summary: "従来より安価で実用的な製紙法が確立され、文書の記録・普及が飛躍的に進み後の文化発展を支えることになった。", heritage: [
        { type: "figure", name: "蔡倫", description: "後漢の宦官。樹皮や麻くずなどを原料とする実用的な製紙法を改良し、後世「紙の発明者」として広く知られる。" },
      ] },
      { year: "AD 166", title: "党錮の禁", category: "文化", summary: "宦官による専横政治を批判した官僚・学者が弾圧され、政界から排除される事件。後漢衰退の一因ともされる。" },
      { year: "AD 184", title: "黄巾の乱", category: "戦争", summary: "太平道の教団が主導した大規模な農民反乱で、これを契機に各地の軍閥が台頭し後漢の実質的な統制力が失われていく。" },
      { year: "AD 220", title: "曹丕、禅譲を受け漢滅亡", category: "王朝", summary: "献帝から帝位を譲られる形で漢王朝が終焉を迎え、約400年続いた漢の時代に幕が下ろされる。" },
    ],
  },
  {
    id: "sanguo",
    seal: "三",
    name: "三国",
    period: "220 – 280",
    events: [
      { year: "208", title: "赤壁の戦い", category: "戦争", summary: "曹操の大軍を孫権・劉備の連合軍が火攻めで破り、魏・呉・蜀による三国鼎立の構図を決定づけた大戦となった。", media: [
        { type: "movie", title: "レッドクリフ" , year: "2008-2009" },
        { type: "game", title: "真・三國無双シリーズ" },
        { type: "game", title: "三國志シリーズ（コーエー）" },
        { type: "book", title: "『三国志演義』" },
      ], heritage: [
        { type: "figure", name: "諸葛亮", description: "劉備に仕えた軍師・政治家。卓越した知略で知られ、後世「知恵者」の代名詞として語り継がれる。" },
        { type: "figure", name: "曹操", description: "後漢末の群雄の一人で魏の基礎を築いた人物。政治家・軍略家であると同時に詩人としても知られる。" },
        { type: "building", name: "赤壁古戦場遺跡", description: "湖北省に伝わる古戦場跡地。摩崖の題字などが残り、観光地として整備されている。" },
      ] },
      { year: "220", title: "魏の建国（曹丕）", category: "王朝", summary: "後漢の献帝から禅譲を受け、洛陽を都に魏を建てる。父曹操の築いた基盤の上に正式な王朝として成立した。" },
      { year: "221", title: "蜀漢の建国（劉備）", category: "王朝", summary: "成都を都とし、漢王室の血を引くことを根拠に漢王朝の正統な継承者であると称して独立を宣言する。" },
      { year: "222", title: "呉の建国（孫権）", category: "王朝", summary: "父兄から受け継いだ江南の地盤を基に、建業（現・南京）を都として独立を宣言し三国の一角を占める。" },
      { year: "234", title: "五丈原の戦い", category: "戦争", summary: "諸葛亮による度重なる北伐の最終局面。魏軍と対峙する陣中で病没し、蜀の対外的な攻勢はここで終わりを迎える。" },
      { year: "263", title: "蜀漢の滅亡", category: "戦争", summary: "国力の衰えた蜀漢が魏の攻勢を受けて降伏し、三国の一角が消滅、三国時代終焉への流れが始まる。" },
    ],
  },
  {
    id: "westernjin",
    seal: "西",
    name: "西晋",
    period: "266 – 316",
    events: [
      { year: "266", title: "西晋の建国（司馬炎）", category: "王朝", summary: "魏の実権を握っていた司馬氏が禅譲を受け、洛陽を都に晋を建てる。三国分立の終結へ向けた布石となった。" },
      { year: "280", title: "西晋による中国再統一", category: "王朝", summary: "残っていた呉を滅ぼし、分裂していた中国が約60年ぶりに再統一される。しかしその安定は長くは続かなかった。" },
      { year: "291", title: "八王の乱の勃発", category: "戦争", summary: "皇族の諸王同士による皇位・権力をめぐる内紛が激化し、10年以上にわたる争乱で国力が急速に消耗する。" },
      { year: "304", title: "五胡の侵入始まる", category: "戦争", summary: "内紛で疲弊した隙をつき匈奴の劉淵が自立して漢を建てる。以後、異民族政権が華北に相次いで興る時代が始まる。" },
      { year: "311", title: "永嘉の乱", category: "戦争", summary: "匈奴の軍によって都洛陽が陥落し皇帝が捕らえられる大事件。これが後の五胡十六国時代の直接の引き金となった。" },
      { year: "316", title: "西晋の滅亡", category: "戦争", summary: "長安に逃れていた愍帝も降伏し、統一からわずか37年で西晋は滅亡、華北の統一政権が失われる。" },
    ],
  },
  {
    id: "sixteenkingdoms",
    seal: "東",
    name: "五胡十六国・東晋",
    period: "317 – 420",
    events: [
      { year: "317", title: "東晋の成立", category: "王朝", summary: "皇族の一人司馬睿が江南の建康に亡命政権を樹立する。以後、華北と江南で異なる政権が並立する南北分断の時代が始まる。" },
      { year: "351", title: "前秦の華北統一（苻堅）", category: "王朝", summary: "氐族出身の苻堅が名宰相王猛の補佐を得て華北の大半を統一し、南の東晋への進出を狙う勢いを見せる。" },
      { year: "383", title: "淝水の戦い", category: "戦争", summary: "圧倒的兵力差にもかかわらず前秦の南下を東晋の軍が撃退し、華北の再統一という苻堅の野望が頓挫することとなった。" },
      { year: "4世紀", title: "五胡十六国の興亡", category: "戦争", summary: "匈奴・鮮卑・羯・氐・羌という五つの異民族を中心に、華北で数多くの短命な政権が興っては滅びる混乱が続いた。" },
      { year: "369", title: "桓温の北伐", category: "戦争", summary: "東晋の実力者桓温が三度にわたり北伐を試みるが目立った成果は得られず、しかしその軍事的名声が権勢を強めることになる。" },
      { year: "420", title: "東晋の滅亡", category: "王朝", summary: "軍人出身の実力者劉裕が皇帝から禅譲を受けて宋（劉宋）を建て、約100年続いた東晋の歴史に幕を下ろす。" },
    ],
  },
  {
    id: "nanbei",
    seal: "南",
    name: "南北朝",
    period: "420 – 589",
    events: [
      { year: "420", title: "劉宋の建国", category: "王朝", summary: "劉裕が東晋の帝位を継承し、南朝で最初の王朝を開く。以後、南朝では宋・斉・梁・陳と王朝交代が続いていく。" },
      { year: "439", title: "北魏による華北統一", category: "王朝", summary: "鮮卑族拓跋部が建てた北魏が太武帝のもとで華北を統一し、以後南の宋（後に斉・梁・陳）との南北並立時代が続く。" },
      { year: "494", title: "北魏の漢化政策", category: "文化", summary: "孝文帝による洛陽への遷都、服装・言語の中国化など、大規模な漢化政策が進められ北魏社会は大きく変容していく。" },
      { year: "502", title: "梁の建国（蕭衍）", category: "王朝", summary: "後に武帝と呼ばれる蕭衍が即位し、仏教を篤く信仰しながら南朝文化の最盛期を築いていくことになる。" },
      { year: "534", title: "北魏の分裂", category: "戦争", summary: "内紛の末に北魏は東魏・西魏へと分裂し、それぞれが後の北斉・北周へと発展していく複雑な政局が続いた。" },
      { year: "589", title: "隋による南北統一", category: "王朝", summary: "隋の文帝が最後まで残った南朝陳を滅ぼし、約300年近く続いた南北分裂の時代がついに終わりを告げる。" },
    ],
  },
  {
    id: "sui",
    seal: "隋",
    name: "隋",
    period: "581 – 618",
    events: [
      { year: "581", title: "隋の建国（楊堅）", category: "王朝", summary: "北周の実権を握っていた楊堅が禅譲を受け、文帝として即位する。以後急速な勢いで中国の再統一を進めていく。" },
      { year: "589", title: "陳を滅ぼし中国再統一", category: "王朝", summary: "南朝最後の王朝陳を滅ぼし、南北朝時代以来約300年ぶりに中国全土が単一の王朝のもとに統一される。" },
      { year: "605", title: "科挙制度の創設", category: "文化", summary: "家柄によらず試験の成績で官僚を登用する制度が始まり、以後1300年以上にわたり中国の官僚登用の根幹となった。" },
      { year: "605", title: "大運河の建設", category: "文化", summary: "南北を結ぶ大規模な運河を完成させ、経済的な統合と物資輸送の効率化を進めるが、その負担は民衆に重くのしかかった。", heritage: [
        { type: "building", name: "京杭大運河", description: "北京と杭州を結ぶ全長約1800kmの運河。世界最長の人工運河とされ、世界遺産に登録されている。" },
      ] },
      { year: "612", title: "高句麗遠征の失敗", category: "対外", summary: "朝鮮半島の高句麗への遠征を三度にわたり試みるがいずれも失敗し、莫大な戦費と兵力の損失が国力を大きく疲弊させた。" },
      { year: "618", title: "煬帝暗殺・隋の滅亡", category: "戦争", summary: "度重なる遠征や大規模事業への不満から各地で反乱が相次ぎ、皇帝煬帝が殺害されて短命の統一王朝は終わりを迎える。" },
    ],
  },
  {
    id: "tang",
    seal: "唐",
    name: "唐",
    period: "618 – 907",
    events: [
      { year: "618", title: "唐の建国（李淵）", category: "王朝", summary: "隋末の混乱に乗じて挙兵した李淵が長安を都に唐を建てる。約300年近く続くことになる大帝国の始まりとなった。" },
      { year: "626", title: "玄武門の変・太宗即位", category: "戦争", summary: "次男李世民が兄弟を討って帝位につき、その後「貞観の治」と呼ばれる安定した善政の時代を切り開いていく。" },
      { year: "630", title: "東突厥の平定", category: "対外", summary: "北方の強大な脅威であった東突厥を退け、唐は東アジアにおける中心的な大国として国際的地位を確立していく。" },
      { year: "690", title: "武則天、周を建て皇帝に", category: "王朝", summary: "皇后から実権を掌握し、中国史上唯一の女帝として即位する。その治世は賛否が分かれつつも大きな存在感を残した。", media: [
        { type: "movie", title: "The Empress -武則天-" },
        { type: "book", title: "『則天武后』（陳舜臣）" },
      ], heritage: [
        { type: "figure", name: "武則天", description: "唐の高宗の皇后から皇帝に即位した中国史上唯一の女帝。科挙官僚の登用を進めるなど独自の統治を行った。" },
        { type: "building", name: "乾陵", description: "武則天と高宗の合葬陵。文字の刻まれていない「無字碑」など多くの謎を残す陵墓として知られる。" },
      ] },
      { year: "630s", title: "玄奘のインド旅と仏教文化の隆盛", category: "文化", summary: "経典を求め命がけでインドへ渡った玄奘の記録『大唐西域記』が著され、唐代の仏教文化の発展を大きく後押しした。", media: [
        { type: "book", title: "『西遊記』" },
        { type: "game", title: "黒神話：悟空（Black Myth: Wukong）", year: "2024" },
        { type: "movie", title: "西遊記 -妖怪の逆襲-" },
      ], heritage: [
        { type: "figure", name: "玄奘三蔵", description: "唐代の僧。インドへ渡り仏典を持ち帰り漢訳した。その旅の記録は後に『西遊記』のモデルとなった。" },
        { type: "building", name: "大雁塔", description: "玄奘が持ち帰った経典を保管するため西安に建てられた仏塔。現在も西安の象徴的建造物として残る。" },
      ] },
      { year: "755", title: "安史の乱", category: "戦争", summary: "節度使安禄山らによる大反乱で長安が陥落し、唐の国力を大きく揺るがす。以後、唐は緩やかな衰退期へと向かう。", media: [
        { type: "movie", title: "空海-KU-KAI- 美しき王妃の謎", year: "2017" },
      ] },
      { year: "907", title: "朱全忠、唐を簒奪", category: "戦争", summary: "節度使朱全忠が皇帝から禅譲を受けて後梁を建て、約290年続いた唐王朝が滅亡、分裂の五代十国時代へと移行する。" },
    ],
  },
  {
    id: "wudai",
    seal: "五",
    name: "五代十国",
    period: "907 – 960",
    events: [
      { year: "907", title: "後梁の建国", category: "王朝", summary: "唐を滅ぼした朱全忠が華北で最初の五代政権を開く。しかしその支配は安定せず、後の政権交代の連鎖が始まる。" },
      { year: "923", title: "後唐の建国", category: "王朝", summary: "突厥系の沙陀族出身の李存勗が後梁を滅ぼし、政権を交代させる。五代の中で最も広い版図を持った政権とされる。" },
      { year: "936", title: "燕雲十六州の割譲", category: "対外", summary: "後晋の建国者石敬瑭が契丹（遼）の軍事支援を得る代償として北方の要地を割譲し、後の中国の防衛上の弱点となった。" },
      { year: "947", title: "後漢の建国", category: "王朝", summary: "契丹の侵攻による後晋滅亡の混乱に乗じ、劉知遠が新たな政権を建てる。しかし短命な政権としてすぐに交代する。" },
      { year: "951", title: "後周の建国（郭威）", category: "王朝", summary: "軍人出身の郭威が政権を樹立し、農業振興や軍制改革など中央集権化を進め、後の宋建国への基盤を整えていく。" },
      { year: "959", title: "世宗柴栄の死", category: "王朝", summary: "積極的な統一事業を推し進めていた名君柴栄が改革半ばで病没し、幼い後継者のもとで権力の空白が生じることになる。" },
      { year: "960", title: "趙匡胤のクーデター", category: "戦争", summary: "武将趙匡胤が陳橋の変と呼ばれる無血クーデターにより皇帝に擁立され、五代十国の分裂終結へと道を開くことになる。" },
    ],
  },
  {
    id: "northernsong",
    seal: "北",
    name: "北宋",
    period: "960 – 1127",
    events: [
      { year: "960", title: "宋の建国（趙匡胤）", category: "王朝", summary: "後周から禅譲を受け、開封を都に宋を建てる。武断政治が続いた五代の時代を終わらせ、文治国家への転換を図った。" },
      { year: "961", title: "杯酒釈兵権", category: "文化", summary: "有力な武将たちを酒宴の席で穏便に説得し兵権を解除させ、軍閥割拠を防ぎながら文治主義体制を確立した巧みな政策。" },
      { year: "1004", title: "澶淵の盟", category: "対外", summary: "北方の遼との軍事的緊張の末に和議が結ばれ、宋が毎年一定の銀・絹を贈る条件のもと、以後長期の平和がもたらされた。" },
      { year: "1069", title: "王安石の新法", category: "文化", summary: "財政再建と軍事力強化を目指した急進的な改革が進められるが、既得権益層の反発を招き新法・旧法の激しい党争が起こる。" },
      { year: "1115", title: "金の建国", category: "対外", summary: "女真族の完顔阿骨打が遼からの自立を果たし金を建てる。当初は宋と同盟関係にあったが、後に宋を大きく圧迫する存在となる。" },
      { year: "1127", title: "靖康の変・北宋滅亡", category: "戦争", summary: "同盟していたはずの金軍に開封を包囲され陥落、皇帝以下皇族が北方へ連行される屈辱的な形で北宋は滅亡した。" },
    ],
  },
  {
    id: "southernsong",
    seal: "南",
    name: "南宋",
    period: "1127 – 1279",
    events: [
      { year: "1127", title: "南宋の建国（高宗）", category: "王朝", summary: "北宋滅亡を逃れた皇族の一人が江南に逃れ、臨安（現・杭州）を新たな都として宋王朝を再興する。" },
      { year: "1141", title: "岳飛の死・金との和議", category: "戦争", summary: "金への抗戦を強く主張していた名将岳飛が、和平路線を進める宰相秦檜により処刑され、金との屈辱的な和議が結ばれる。" },
      { year: "12世紀", title: "朱子学の大成（朱熹）", category: "文化", summary: "儒教の諸学説を体系的に整理・統合した朱子学が確立され、以後の中国のみならず朝鮮・日本にも大きな影響を及ぼした。" },
      { year: "1234", title: "金の滅亡", category: "戦争", summary: "南宋とモンゴルが一時的に手を組み、かつて北宋を滅ぼした金を挟撃する形で滅亡へと追い込む。" },
      { year: "1276", title: "臨安の陥落", category: "戦争", summary: "モンゴル（元）の圧倒的な軍事力の前に首都臨安が占領され、南宋の実質的な滅亡が決定的となる。" },
      { year: "1279", title: "崖山の戦い・南宋滅亡", category: "戦争", summary: "広東沖の海上での最終決戦に敗れ、幼い皇帝とともに多くの臣下が身を投げたと伝わる悲劇的な最期を遂げる。" },
    ],
  },
  {
    id: "yuan",
    seal: "元",
    name: "元",
    period: "1271 – 1368",
    events: [
      { year: "1271", title: "元の建国（クビライ）", category: "王朝", summary: "モンゴル帝国の第5代皇帝クビライが中国風の国号「元」を定め、以後モンゴルによる中国統治の体制が本格化していく。" },
      { year: "1279", title: "南宋を滅ぼし中国統一", category: "王朝", summary: "崖山の戦いを経て南宋を完全に滅ぼし、中国全土がモンゴルの支配下に入る。異民族による初の全土統一となった。" },
      { year: "1274", title: "文永の役（元寇）", category: "対外", summary: "高麗軍も加えた大艦隊で日本への遠征を試みるが、暴風雨などの影響もあり撤退、上陸作戦は失敗に終わる。", media: [
        { type: "book", title: "『アンゴルモア -元寇合戦記-』（漫画）" },
      ], heritage: [
        { type: "building", name: "元寇防塁", description: "弘安の役に備え博多湾岸に築かれた石造りの防塁。福岡県内に一部が現存し史跡として保存されている。" },
      ] },
      { year: "1281", title: "弘安の役（元寇）", category: "対外", summary: "南宋を滅ぼした後、より大規模な軍を再度日本へ派遣するが、またも暴風雨に見舞われ壊滅的な損害を受けて失敗する。", media: [
        { type: "book", title: "『アンゴルモア -元寇合戦記-』（漫画）" },
      ], heritage: [
        { type: "building", name: "元寇防塁", description: "弘安の役に備え博多湾岸に築かれた石造りの防塁。福岡県内に一部が現存し史跡として保存されている。" },
      ] },
      { year: "1298", title: "『東方見聞録』の口述", category: "対外", summary: "ヴェネツィアの商人マルコ・ポーロが語った元朝での見聞が書物にまとめられ、当時の西方に大きな衝撃を与えた。", media: [
        { type: "book", title: "『東方見聞録』" },
      ] },
      { year: "1351", title: "紅巾の乱の勃発", category: "戦争", summary: "重税と自然災害への不満を背景に白蓮教徒を中心とした大反乱が各地で相次ぎ、元の支配体制を急速に揺るがしていく。" },
      { year: "1368", title: "元の北走・明の建国", category: "戦争", summary: "反乱勢力の一人朱元璋が勢力を伸ばし、元の皇帝を大都（現・北京）から北のモンゴル高原へ追いやり明を建てる。" },
    ],
  },
  {
    id: "ming",
    seal: "明",
    name: "明",
    period: "1368 – 1644",
    events: [
      { year: "1368", title: "明の建国（朱元璋）", category: "王朝", summary: "貧しい農民出身の朱元璋が南京を都とし、元をモンゴル高原へ追いやって新王朝を開く。中国史上異色の出自を持つ皇帝。" },
      { year: "1402", title: "靖難の変・永楽帝即位", category: "戦争", summary: "甥である建文帝から武力で帝位を奪った燕王が永楽帝として即位し、後に北京への遷都や対外積極策を推し進めていく。" },
      { year: "1405", title: "鄭和の南海大遠征（開始）", category: "対外", summary: "永楽帝の命により大艦隊を率いた鄭和が南海遠征を開始し、東南アジアを経てアフリカ東岸にまで到達する快挙を成し遂げた。", heritage: [
        { type: "figure", name: "鄭和", description: "永楽帝に仕えたムスリムの宦官提督。7回にわたる大航海を指揮し、当時世界最大級の船団を率いた。" },
        { type: "artifact", name: "鄭和宝船の復元模型", description: "南京の鄭和宝船廠遺跡公園などに展示される、当時の大型船「宝船」を再現した模型。" },
      ] },
      { year: "1421", title: "北京遷都", category: "王朝", summary: "永楽帝が紫禁城を築き北京へ都を移し、以後明・清両王朝の首都として500年近くにわたり機能し続けることになる。", heritage: [
        { type: "building", name: "紫禁城（故宮）", description: "明・清両王朝の皇居として使われた宮殿群。現在は故宮博物院として多数の文物を収蔵・公開している。", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Forbidden_City,_Beijing,_China_(%E6%95%85%E5%AE%AB%E5%8D%9A%E7%89%A9%E9%99%A2).jpg", credit: "Wikimedia Commons, CC BY-SA 4.0" },
      ] },
      { year: "1449", title: "土木の変", category: "戦争", summary: "皇帝自らが親征したモンゴル系オイラトとの戦いで大敗を喫し、皇帝が捕虜となる屈辱的な事態を招いた。" },
      { year: "1592", title: "文禄・慶長の役への援軍", category: "対外", summary: "朝鮮に出兵した豊臣秀吉の軍に対し、宗主国として朝鮮救援の援軍を送るが、長期の戦争は明の国力を大きく消耗させた。" },
      { year: "1644", title: "李自成の乱・明の滅亡", category: "戦争", summary: "農民反乱を率いた李自成の軍により北京が陥落し皇帝が自害、約270年続いた明は滅亡し清への移行が始まる。" },
    ],
  },
  {
    id: "qing",
    seal: "清",
    name: "清",
    period: "1644 – 1912",
    events: [
      { year: "1644", title: "清の北京入城", category: "王朝", summary: "山海関を越えて満洲族の清軍が明の旧都北京を占領し、以後中国全土の支配を本格的に進めていくことになる。" },
      { year: "1661", title: "康熙帝の治世（最盛期へ）", category: "王朝", summary: "60年以上の長期にわたる安定政権のもと、版図拡大と学芸振興が進められ、清の最盛期の礎が築かれていく。", heritage: [
        { type: "building", name: "避暑山荘", description: "河北省承徳に築かれた清朝皇帝の離宮。壮大な庭園を持ち世界遺産に登録されている。" },
      ] },
      { year: "1839", title: "アヘン戦争", category: "戦争", summary: "アヘン貿易の取り締まりを機に開戦した英国との戦争に敗れ、南京条約により不平等な形での開港・割譲を強いられる。", media: [
        { type: "movie", title: "阿片戦争", year: "1997" },
      ], heritage: [
        { type: "building", name: "円明園遺跡", description: "北京郊外にあった清朝の離宮庭園。第二次アヘン戦争時に破壊され、現在は廃墟として保存されている。" },
      ] },
      { year: "1851", title: "太平天国の乱", category: "戦争", summary: "洪秀全が率いるキリスト教的思想を掲げた大規模反乱が起こり、10年以上続いた戦乱で清朝の統治基盤が大きく揺らいだ。", media: [
        { type: "movie", title: "投名状", year: "2007" },
      ] },
      { year: "1894", title: "日清戦争", category: "戦争", summary: "朝鮮半島の権益をめぐり日本と衝突し敗北、台湾割譲や巨額の賠償金を強いられるなど東アジアの国際秩序が大きく変化する。" },
      { year: "1900", title: "義和団事件", category: "戦争", summary: "排外主義を掲げる義和団の蜂起をきっかけに列強諸国が連合軍を派遣し北京を占領、さらなる不平等条約を強いられる結果となった。", media: [
        { type: "movie", title: "北京の55日", year: "1963" },
      ] },
      { year: "1911", title: "辛亥革命", category: "戦争", summary: "武昌での軍隊蜂起を機に各地で独立運動が連鎖的に広がり、約270年続いた清朝の滅亡への道が急速に開かれていく。", media: [
        { type: "movie", title: "1911", year: "2011" },
      ], heritage: [
        { type: "building", name: "武昌起義紀念館", description: "辛亥革命の発端となった武昌蜂起の指揮所跡に建てられた記念館。湖北省武漢市に所在する。" },
      ] },
    ],
  },
  {
    id: "roc",
    seal: "民",
    name: "中華民国",
    period: "1912 – 1949",
    events: [
      { year: "1912", title: "中華民国の成立", category: "王朝", summary: "辛亥革命の結果、孫文を臨時大総統として中華民国が成立し、約2000年続いた皇帝支配の歴史に終止符が打たれる。" },
      { year: "1919", title: "五四運動", category: "文化", summary: "パリ講和会議での中国の権益をめぐる決定への抗議から始まった学生運動が全国に広がり、以後の思想・政治運動に大きな影響を与えた。" },
      { year: "1927", title: "国共分裂", category: "戦争", summary: "北伐の過程で国民党と共産党の協力関係（第一次国共合作）が崩れ、両者の武力衝突が続く内戦の火種となっていく。" },
      { year: "1931", title: "満洲事変", category: "戦争", summary: "関東軍による軍事行動を機に満洲全域が占領され、翌年には清朝最後の皇帝溥儀を担いだ満洲国が建てられる。", media: [
        { type: "movie", title: "ラストエンペラー", year: "1987" },
      ], heritage: [
        { type: "building", name: "偽満皇宮博物院", description: "満洲国執政・皇帝時代の溥儀が居住した宮殿跡。現在の吉林省長春市に博物院として保存されている。" },
      ] },
      { year: "1937", title: "日中戦争の勃発", category: "戦争", summary: "盧溝橋事件を発端に日中間の全面戦争へと拡大し、南京事件をはじめ多大な犠牲を伴う長期の戦争が続くことになる。", media: [
        { type: "movie", title: "金陵十三釵", year: "2011" },
        { type: "movie", title: "南京！南京！", year: "2009" },
      ] },
      { year: "1945", title: "日本の敗戦・国共内戦の再燃", category: "戦争", summary: "対日戦勝利後、いったん協力していた国民党と共産党の主導権争いが再燃し、全面的な内戦へと突入していく。" },
      { year: "1949", title: "国民政府の台湾移転", category: "戦争", summary: "内戦に敗れた国民政府が中国大陸から台湾へと拠点を移し、以後の両岸分断という現在まで続く構図が形作られる。" },
    ],
  },
  {
    id: "prc",
    seal: "今",
    name: "中華人民共和国",
    period: "1949 – 現在",
    events: [
      { year: "1949", title: "中華人民共和国の建国", category: "王朝", summary: "長期にわたる国共内戦を経て、毛沢東が北京の天安門で建国を宣言する。以後の中国の政治体制の出発点となった。", media: [
        { type: "movie", title: "建国大業", year: "2009" },
      ], heritage: [
        { type: "building", name: "天安門", description: "北京中心部にある城門。建国宣言が行われた場所として、現在も中国の象徴的建造物となっている。", imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing-Tiananmen-38-Tor_des_himmlischen_Friedens-gje.jpg", credit: "写真: Gerd Eichmann / Wikimedia Commons, CC BY-SA 4.0" },
        { type: "building", name: "人民英雄紀念碑", description: "天安門広場中央に建つ記念碑。近代中国の革命で犠牲となった人々を追悼するために建立された。" },
      ] },
      { year: "1958", title: "大躍進政策", category: "文化", summary: "急速な工業化と農業集団化を目指す急進的な経済政策が推し進められるが、実態を伴わない生産目標などが深刻な混乱と大飢饉を招いた。" },
      { year: "1966", title: "文化大革命の開始", category: "文化", summary: "毛沢東主導の政治闘争が全国的な社会運動へと発展し、教育・文化・経済に大きな打撃を与えながら約10年にわたり続いた。", media: [
        { type: "movie", title: "さらば、わが愛／覇王別姫", year: "1993" },
        { type: "book", title: "『ワイルド・スワン』（ユン・チアン）" },
      ] },
      { year: "1972", title: "米中接近（ニクソン訪中）", category: "対外", summary: "冷戦下で対立していた米中両国の関係改善が進み、以後の中国の国際社会への復帰を大きく後押しする転機となった。" },
      { year: "1978", title: "改革開放政策の開始", category: "文化", summary: "鄧小平の主導のもと市場経済の要素を導入する大転換が図られ、以後数十年にわたる急速な経済成長の出発点となった。" },
      { year: "1989", title: "天安門事件", category: "戦争", summary: "民主化や政治改革を求める学生・市民らの運動が広がるが、最終的に軍による武力鎮圧という形で収束することとなった。" },
      { year: "2001", title: "WTO加盟", category: "対外", summary: "世界貿易機関への加盟が実現し、中国経済の国際市場への本格的な統合が加速、以後「世界の工場」としての地位を確立していく。" },
      { year: "2008", title: "北京オリンピック開催", category: "文化", summary: "改革開放から30年を経て開催された夏季オリンピックは、国際社会における中国の存在感の高まりを象徴する出来事となった。" },
    ],
  },
];

// 各イベントに一意のslugを付与（詳細ページのルーティングに使用）
ERAS.forEach((era) => {
  era.events.forEach((ev, i) => {
    ev.slug = `${era.id}--${i}`;
  });
});

export function findEventBySlug(slug) {
  for (const era of ERAS) {
    const event = era.events.find((ev) => ev.slug === slug);
    if (event) return { event, era };
  }
  return null;
}

export const HERITAGE_TYPES = {
  building: { label: "建造物・遺跡" },
  artifact: { label: "国宝・出土品" },
  figure: { label: "関連する人物" },
};
