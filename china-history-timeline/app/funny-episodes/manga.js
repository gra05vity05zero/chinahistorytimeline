// 各エピソードの4コマ漫画の台本（components/FourKoma.jsx で描画）。
// キーは page.js の各エピソードの id。座標系は 320×210、足元の地面は y=196。
// 表情 m: n普通 h笑い a怒り s驚き c泣き m得意 w困り z目を閉じる k輝き b無表情

// 冠を取られた儒者は commoner の髪型に儒者の衣の色で描く
const SCHOLAR_ROBE = "#6F8296";

export const MANGA = {
  youwang: [
    {
      cap: "西周の幽王と、笑わない后・褒姒",
      chars: [
        { r: "emperor", m: "w", x: 85, n: "幽王", p: "up" },
        { r: "woman", m: "b", x: 235, f: true, n: "褒姒" },
      ],
      bubbles: [
        { t: "ほら笑って〜\nにこっと〜", x: 95, y: 70, by: 0 },
        { t: "……", x: 245, y: 70, by: 1 },
      ],
    },
    {
      chars: [{ r: "emperor", m: "m", x: 80, p: "point", n: "幽王" }],
      props: [{ t: "beacon", x: 235 }],
      bubbles: [{ t: "のろしを\n上げよ！", x: 85, y: 62, by: 0 }],
      sfx: [{ t: "ボォォ", x: 185, y: 60, s: 18, r: -10 }],
    },
    {
      chars: [
        { r: "general", m: "s", x: 60, n: "諸侯" },
        { r: "soldier", m: "s", x: 125 },
        { r: "woman", m: "h", x: 255, f: true, n: "褒姒" },
      ],
      bubbles: [
        { t: "敵は！？", x: 55, y: 50, by: 0, k: "y" },
        { t: "どこだ！？", x: 145, y: 82, by: 1 },
        { t: "あはははは！", x: 250, y: 50, by: 2 },
      ],
      fx: "focus",
      focus: [255, 140],
    },
    {
      cap: "ところが本当に敵が来ると…",
      chars: [{ r: "emperor", m: "s", x: 175, n: "幽王" }],
      props: [{ t: "beacon", x: 60 }],
      bubbles: [{ t: "誰も来ない！！", x: 225, y: 68, by: 0, k: "y" }],
      sfx: [{ t: "ヒュ〜", x: 270, y: 150, s: 14, c: "#6A6A8A" }],
      fx: "gloom",
    },
  ],

  xianggong: [
    {
      chars: [
        { r: "official", m: "w", x: 55, n: "家臣" },
        { r: "king", m: "b", x: 120, n: "襄公" },
        { r: "soldier", m: "w", x: 250, f: true, n: "楚軍" },
      ],
      props: [{ t: "river", x: 180, w: 140 }],
      bubbles: [
        { t: "敵は川を渡る途中！\n今です！", x: 75, y: 40, by: 0 },
        { t: "ならぬ", x: 160, y: 88, by: 1 },
      ],
    },
    {
      chars: [
        { r: "official", m: "s", x: 55, n: "家臣" },
        { r: "king", m: "b", x: 120, n: "襄公" },
        { r: "soldier", m: "n", x: 220, f: true },
        { r: "soldier", m: "n", x: 275, f: true },
      ],
      bubbles: [
        { t: "まだ陣が整って\nいません！今こそ！", x: 85, y: 40, by: 0 },
        { t: "まだならぬ", x: 175, y: 92, by: 1 },
      ],
    },
    {
      chars: [
        { r: "king", m: "m", x: 85, n: "襄公", p: "hips" },
        { r: "general", m: "m", x: 220, f: true },
        { r: "soldier", m: "m", x: 275, f: true },
      ],
      bubbles: [
        { t: "準備できました〜", x: 235, y: 50, by: 1 },
        { t: "よし！\n正々堂々参る！", x: 85, y: 62, by: 0 },
      ],
    },
    {
      cap: "大敗",
      chars: [
        { r: "king", m: "c", x: 95, n: "襄公" },
        { r: "official", m: "a", x: 235, f: true, n: "家臣" },
      ],
      props: [{ t: "dust", x: 165, y: -4, s: 0.9, back: false }],
      bubbles: [
        { t: "君子は弱った敵を\n討たぬのだ…", x: 95, y: 64, by: 0 },
        { t: "言うてる\n場合ですか！", x: 245, y: 56, by: 1, k: "y" },
      ],
      sfx: [{ t: "ドカーン", x: 170, y: 150, s: 18, r: -6 }],
    },
  ],

  jingong: [
    {
      cap: "晋の景公、病に伏す",
      chars: [
        { r: "king", m: "w", x: 80, n: "景公" },
        { r: "shaman", m: "b", x: 235, f: true, n: "巫" },
      ],
      bubbles: [
        { t: "殿は今年の新麦を\n召し上がれませぬ", x: 215, y: 62, by: 1 },
        { t: "なんと…", x: 70, y: 72, by: 0 },
      ],
    },
    {
      cap: "新麦の季節",
      chars: [
        { r: "king", m: "m", x: 85, n: "景公", p: "hold" },
        { r: "shaman", m: "s", x: 240, f: true, n: "巫" },
      ],
      props: [{ t: "bowl", x: 106, y: -20, back: false }],
      bubbles: [
        { t: "ほれ見よ新麦じゃ！\n予言は外れたな！", x: 100, y: 52, by: 0 },
        { t: "ひぇっ", x: 265, y: 82, by: 1 },
      ],
    },
    {
      chars: [{ r: "king", m: "w", x: 130, n: "景公", p: "belly", e: ["sweat", "lines"] }],
      props: [{ t: "bowl", x: 220, y: -36 }, { t: "table", x: 220, food: false }],
      bubbles: [{ t: "いざ一口…\nう、腹が…！", x: 120, y: 62, by: 0 }],
      sfx: [{ t: "ギュルル", x: 60, y: 160, s: 15, r: -8 }],
    },
    {
      cap: "そして厠へ",
      props: [
        { t: "toilet", x: 130 },
        { t: "bowl", x: 262, y: -36 },
        { t: "table", x: 262, food: false },
      ],
      bubbles: [{ t: "（新麦…一口も\n食べられず）", x: 255, y: 60, k: "t" }],
      sfx: [{ t: "ボチャン", x: 130, y: 64, s: 20, r: -8 }],
    },
  ],

  yanying: [
    {
      cap: "斉の晏嬰、楚へ使いする",
      chars: [
        { r: "official", m: "b", x: 70, s: 0.82, n: "晏嬰" },
        { r: "minister", m: "m", x: 250, f: true, n: "楚の役人" },
      ],
      props: [{ t: "wall", x: 130, w: 90, door: 175 }],
      bubbles: [{ t: "晏子どのは小さいので\nこちらの小門から", x: 220, y: 40, by: 1 }],
    },
    {
      chars: [{ r: "official", m: "m", x: 110, s: 0.95, n: "晏嬰", p: "hips" }],
      props: [{ t: "wall", x: 200, w: 120, door: 260 }],
      bubbles: [{ t: "犬の国に来た者は\n犬の門をくぐる\nものですが…", x: 115, y: 55, by: 0 }],
    },
    {
      chars: [
        { r: "official", m: "m", x: 80, s: 0.82, n: "晏嬰", p: "point" },
        { r: "minister", m: "s", x: 235, f: true, n: "楚の役人" },
      ],
      bubbles: [
        { t: "ここは楚の国\nでしたよね？", x: 85, y: 62, by: 0 },
        { t: "ぐっ…！", x: 260, y: 66, by: 1, k: "y" },
      ],
      fx: "focus",
      focus: [235, 140],
    },
    {
      chars: [
        { r: "minister", m: "w", x: 70, n: "楚の役人", tilt: 12 },
        { r: "official", m: "m", x: 175, s: 0.82, n: "晏嬰" },
      ],
      props: [{ t: "gate", x: 230 }],
      bubbles: [{ t: "せ、正門へ\nどうぞ…", x: 70, y: 66, by: 0 }],
      sfx: [{ t: "スタスタ", x: 175, y: 92, s: 13, c: "#4A443B" }],
    },
  ],

  zhaogao: [
    {
      chars: [
        { r: "eunuch", m: "m", x: 65, n: "趙高" },
        { r: "emperor", m: "h", x: 265, f: true, n: "二世皇帝" },
      ],
      props: [{ t: "deer", x: 150 }],
      bubbles: [
        { t: "陛下、馬で\nございます", x: 70, y: 52, by: 0 },
        { t: "それ鹿じゃろ\nわはは", x: 255, y: 52, by: 1 },
      ],
    },
    {
      cap: "群臣、空気を読む",
      chars: [
        { r: "official", m: "w", x: 60 },
        { r: "official", m: "s", x: 160 },
        { r: "official", m: "w", x: 260 },
      ],
      bubbles: [
        { t: "う…", x: 55, y: 74, by: 0 },
        { t: "う、馬です！", x: 160, y: 62, by: 1, k: "y" },
        { t: "……", x: 265, y: 74, by: 2 },
      ],
    },
    {
      chars: [
        { r: "eunuch", m: "m", x: 75, n: "趙高", p: "write" },
        { r: "official", m: "b", x: 235, f: true, n: "正直者" },
      ],
      props: [{ t: "paper", x: 100, y: -30, back: false }],
      bubbles: [
        { t: "鹿です", x: 245, y: 68, by: 1 },
        { t: "ほう…\n（メモメモ）", x: 80, y: 50, by: 0 },
      ],
    },
    {
      cap: "後日",
      chars: [{ r: "eunuch", m: "m", x: 110, n: "趙高", p: "hold", e: ["gloom"] }],
      props: [{ t: "paper", x: 132, y: -26, text: "鹿派", back: false }],
      bubbles: [{ t: "鹿と言った者は\n…フフフ", x: 225, y: 70, by: 0 }],
      fx: "gloom",
    },
  ],

  liubangcap: [
    {
      chars: [
        { r: "commoner", m: "m", x: 80, n: "劉邦", beard: true },
        { r: "scholar", m: "n", x: 235, f: true, n: "儒者" },
      ],
      bubbles: [
        { t: "儒学を修めし者で\nございます", x: 225, y: 56, by: 1 },
        { t: "ほう…いい冠\nしとるのう", x: 85, y: 64, by: 0 },
      ],
    },
    {
      chars: [
        { r: "commoner", m: "h", x: 90, n: "劉邦", beard: true, p: "up" },
        { r: "commoner", m: "s", x: 235, f: true, n: "儒者", c: SCHOLAR_ROBE },
      ],
      props: [{ t: "cap", x: 112, y: -50, back: false }],
      sfx: [{ t: "ヒョイ", x: 165, y: 70, s: 20, r: -10 }],
      bubbles: [{ t: "あっ！", x: 255, y: 80, by: 1, k: "y" }],
    },
    {
      chars: [
        { r: "commoner", m: "m", x: 95, f: true, n: "劉邦", beard: true },
        { r: "commoner", m: "c", x: 240, f: true, n: "儒者", c: SCHOLAR_ROBE },
      ],
      props: [{ t: "censor", x: 75, y: -8, w: 60, h: 36, back: false }],
      bubbles: [{ t: "わ、私の冠が\nーーっ！", x: 235, y: 58, by: 1 }],
      sfx: [{ t: "ジョボボボ", x: 75, y: 92, s: 15, c: "#5A9BD5" }],
    },
    {
      cap: "この男、のちの漢の初代皇帝である",
      chars: [{ r: "emperor", m: "h", x: 150, n: "劉邦", beard: true, p: "hips" }],
      bubbles: [{ t: "儒者はキライじゃ！\nがっはっは", x: 150, y: 66, by: 0 }],
      fx: "flash",
    },
  ],

  liubangsoup: [
    {
      cap: "項羽、劉邦の父を人質に",
      chars: [
        { r: "commoner", m: "c", x: 150, y: -30, n: "劉邦の父", beard: true, s: 0.9 },
        { r: "general", m: "a", x: 260, f: true, n: "項羽", p: "point" },
      ],
      props: [{ t: "pot", x: 150, back: false }],
      bubbles: [{ t: "降伏せねば\nお前の父を煮るぞ！", x: 225, y: 42, by: 1, k: "y" }],
    },
    {
      chars: [{ r: "king", m: "b", x: 150, n: "劉邦", beard: true }],
      bubbles: [{ t: "うーむ…", x: 75, y: 60, by: 0, k: "t" }],
      sfx: [{ t: "シーン…", x: 255, y: 110, s: 14, c: "#4A443B" }],
    },
    {
      chars: [{ r: "king", m: "m", x: 110, n: "劉邦", beard: true, p: "hips" }],
      bubbles: [{ t: "わしとお前は義兄弟\nわしの父はお前の父\nならば…", x: 200, y: 60, by: 0 }],
    },
    {
      chars: [
        { r: "king", m: "h", x: 70, n: "劉邦", beard: true, p: "hold" },
        { r: "general", m: "s", x: 250, f: true, n: "項羽", e: ["anger", "sweat"] },
      ],
      props: [{ t: "bowl", x: 92, y: -20, back: false }],
      bubbles: [
        { t: "わしにもスープを\n一杯わけてくれ！", x: 100, y: 44, by: 0 },
        { t: "な…\nなんだと！？", x: 255, y: 70, by: 1, k: "y" },
      ],
      fx: "focus",
      focus: [70, 140],
    },
  ],

  dongfangshuo: [
    {
      cap: "暑い日、肉を下賜されることに",
      chars: [
        { r: "official", m: "w", x: 60 },
        { r: "official", m: "w", x: 255, f: true },
      ],
      props: [{ t: "meat", x: 150, y: -24 }, { t: "table", x: 155, food: false }, { t: "sun", x: 290, y: 30 }],
      bubbles: [{ t: "分配役まだ…？", x: 70, y: 66, by: 0 }],
      sfx: [{ t: "ジリジリ", x: 210, y: 46, s: 14 }],
    },
    {
      chars: [{ r: "official", m: "m", x: 100, n: "東方朔", p: "hold" }],
      props: [
        { t: "meat", x: 175, y: -24 },
        { t: "table", x: 180, food: false },
        { t: "sword", x: 120, y: -24, back: false },
      ],
      bubbles: [{ t: "暑いので\nお先に失礼！", x: 90, y: 56, by: 0 }],
      sfx: [{ t: "ザクッ", x: 200, y: 120, s: 20, r: -10 }],
    },
    {
      chars: [
        { r: "official", m: "m", x: 75, n: "東方朔", p: "hips" },
        { r: "emperor", m: "a", x: 245, f: true, n: "武帝" },
      ],
      bubbles: [
        { t: "自分で自分を\n責めてみよ", x: 240, y: 46, by: 1 },
        { t: "勝手に取るとは無礼！\n剣で切るとは勇ましい！", x: 100, y: 90, by: 0, fs: 10.5 },
      ],
    },
    {
      chars: [
        { r: "official", m: "k", x: 75, n: "東方朔", p: "up" },
        { r: "emperor", m: "h", x: 245, f: true, n: "武帝" },
      ],
      bubbles: [
        { t: "少しだけとは清廉！\n妻に贈るとは愛妻家！", x: 95, y: 34, by: 0, fs: 10.5 },
        { t: "褒めとるではないか！\n酒と肉を追加じゃ", x: 225, y: 80, by: 1, fs: 10.5 },
      ],
    },
  ],

  guangwu: [
    {
      cap: "若き日の劉秀",
      chars: [
        { r: "commoner", m: "k", x: 70, n: "劉秀" },
        { r: "general", m: "m", x: 220, f: true, n: "執金吾" },
      ],
      props: [{ t: "banner", x: 268, text: "執金吾" }],
      bubbles: [{ t: "かっこいい…\n官に就くなら\n執金吾じゃ！", x: 85, y: 56, by: 0 }],
    },
    {
      chars: [
        { r: "commoner", m: "k", x: 80, n: "劉秀", e: ["hearts"] },
        { r: "woman", m: "n", x: 240, f: true, n: "陰麗華" },
      ],
      bubbles: [{ t: "妻をめとるなら\n陰麗華じゃ！", x: 105, y: 52, by: 0 }],
      fx: "pink",
    },
    {
      cap: "数年後",
      chars: [
        { r: "commoner", m: "h", x: 120, n: "劉秀" },
        { r: "woman", m: "h", x: 195, f: true, n: "陰麗華" },
      ],
      props: [{ t: "heart", x: 158, y: 92, s: 1.6 }],
      bubbles: [{ t: "夢がひとつ\nかなった！", x: 75, y: 70, by: 0 }],
      fx: "pink",
    },
    {
      chars: [
        { r: "emperor", m: "h", x: 85, n: "光武帝（劉秀）" },
        { r: "general", m: "w", x: 240, f: true, n: "執金吾", tilt: 14 },
      ],
      bubbles: [
        { t: "執金吾どころか\n皇帝になって\nしもうた", x: 95, y: 56, by: 0 },
        { t: "へへーっ", x: 255, y: 82, by: 1 },
      ],
      fx: "flash",
    },
  ],

  jilei: [
    {
      cap: "219年 漢中の陣",
      chars: [
        { r: "king", m: "w", x: 85, n: "曹操", beard: true, p: "hold" },
        { r: "official", m: "n", x: 240, f: true, n: "部下" },
      ],
      props: [{ t: "bone", x: 108, y: -24, back: false }],
      bubbles: [
        { t: "今夜の合言葉は？", x: 235, y: 52, by: 1 },
        { t: "…鶏肋", x: 80, y: 72, by: 0 },
      ],
    },
    {
      chars: [
        { r: "official", m: "s", x: 90 },
        { r: "general", m: "w", x: 220, f: true },
      ],
      bubbles: [
        { t: "けいろく…？\n鶏のあばら骨？", x: 95, y: 56, by: 0 },
        { t: "？？？", x: 235, y: 70, by: 1 },
      ],
    },
    {
      chars: [{ r: "official", m: "m", x: 100, n: "楊修", p: "hold" }],
      props: [{ t: "bag", x: 125, y: -20, back: false }],
      bubbles: [{ t: "捨てるには惜しいが\n食べる肉もない…\nつまり撤退ですな", x: 210, y: 64, by: 0 }],
      sfx: [{ t: "いそいそ", x: 60, y: 186, s: 13, c: "#4A443B" }],
    },
    {
      chars: [
        { r: "king", m: "w", x: 80, n: "曹操", beard: true },
        { r: "official", m: "k", x: 235, f: true, n: "楊修" },
      ],
      props: [{ t: "bag", x: 270, y: 0 }],
      bubbles: [
        { t: "荷造り完了\nしました！", x: 240, y: 58, by: 1 },
        { t: "（こやつ…\n読みすぎじゃ）", x: 80, y: 60, by: 0, k: "t" },
      ],
    },
  ],

  plum: [
    {
      cap: "水場への道を見失った行軍",
      chars: [
        { r: "soldier", m: "c", x: 70 },
        { r: "soldier", m: "w", x: 150 },
        { r: "soldier", m: "c", x: 230 },
      ],
      props: [{ t: "sun", x: 290, y: 34 }],
      bubbles: [{ t: "のどが…\nカラカラ…", x: 150, y: 64, by: 1 }],
    },
    {
      chars: [{ r: "general", m: "m", x: 120, n: "曹操", beard: true, p: "point" }],
      bubbles: [{ t: "この先に梅林がある！\n甘酸っぱい実が\nどっさりじゃ！", x: 215, y: 60, by: 0 }],
    },
    {
      chars: [
        { r: "soldier", m: "s", x: 80 },
        { r: "soldier", m: "k", x: 220, f: true },
      ],
      props: [
        { t: "plum", x: 150, y: 54, s: 1.5 },
        { t: "plum", x: 125, y: 70 },
      ],
      bubbles: [{ t: "梅…！", x: 70, y: 60, by: 0 }],
      sfx: [
        { t: "じゅわっ", x: 245, y: 70, s: 16, c: "#5A9BD5" },
        { t: "じゅるっ", x: 70, y: 110, s: 13, c: "#5A9BD5" },
      ],
    },
    {
      chars: [
        { r: "soldier", m: "h", x: 70, p: "up" },
        { r: "soldier", m: "h", x: 135, p: "up" },
        { r: "general", m: "m", x: 255, f: true, n: "曹操", beard: true },
      ],
      props: [{ t: "river", x: 0, w: 190 }],
      bubbles: [
        { t: "水だーっ！", x: 100, y: 56, by: 1, k: "y" },
        { t: "（梅林は…\n知らん）", x: 255, y: 70, by: 2, k: "w" },
      ],
    },
  ],

  wangcan: [
    {
      cap: "王粲はロバの声が大好き",
      chars: [{ r: "scholar", m: "k", x: 85, n: "王粲" }],
      props: [{ t: "donkey", x: 220, f: true }],
      sfx: [{ t: "ヒーホー", x: 235, y: 100, s: 16 }],
      bubbles: [{ t: "いい声じゃ〜", x: 80, y: 70, by: 0 }],
    },
    {
      cap: "217年 王粲の葬儀",
      chars: [
        { r: "official", m: "c", x: 60 },
        { r: "official", m: "c", x: 255, f: true },
      ],
      props: [{ t: "tablet", x: 158 }],
      bubbles: [{ t: "ううっ…", x: 255, y: 80, by: 1 }],
      fx: "gloom",
    },
    {
      chars: [
        { r: "official", m: "b", x: 100, n: "曹丕" },
        { r: "official", m: "s", x: 245, f: true },
      ],
      bubbles: [
        { t: "王粲はロバの声が\n好きだった\n皆で一声ずつ鳴いて\n送ろうではないか", x: 115, y: 52, by: 0, fs: 10.5 },
        { t: "えっ", x: 265, y: 90, by: 1 },
      ],
    },
    {
      chars: [
        { r: "official", m: "c", x: 55 },
        { r: "official", m: "c", x: 130, n: "曹丕" },
        { r: "official", m: "c", x: 205 },
      ],
      props: [{ t: "tablet", x: 282 }],
      bubbles: [
        { t: "ヒーホー", x: 50, y: 70, by: 0 },
        { t: "ヒーホー", x: 130, y: 52, by: 1 },
        { t: "ヒィーホォー", x: 215, y: 80, by: 2 },
      ],
    },
  ],

  zhugejin: [
    {
      cap: "呉の宴会",
      chars: [
        { r: "official", m: "b", x: 80, n: "諸葛瑾", long: true },
        { r: "king", m: "h", x: 240, f: true, n: "孫権" },
      ],
      bubbles: [{ t: "子瑜どのの顔は\nロバに似ておるのう", x: 225, y: 46, by: 1 }],
    },
    {
      chars: [{ r: "official", m: "c", x: 60, n: "諸葛瑾", long: true }],
      props: [{ t: "donkey", x: 190, text: "諸葛子瑜" }],
      sfx: [
        { t: "ドッ", x: 260, y: 60, s: 22 },
        { t: "わはは", x: 140, y: 52, s: 14 },
      ],
    },
    {
      chars: [
        { r: "child", m: "n", x: 110, s: 0.8, n: "息子・諸葛恪", p: "hold" },
        { r: "king", m: "n", x: 245, f: true, n: "孫権" },
      ],
      props: [{ t: "brush", x: 124, y: -22, back: false }],
      bubbles: [{ t: "筆をお貸しください\n二文字だけ\n書き足します", x: 115, y: 52, by: 0 }],
    },
    {
      chars: [
        { r: "child", m: "m", x: 60, s: 0.8, n: "諸葛恪" },
        { r: "king", m: "h", x: 270, f: true, n: "孫権" },
      ],
      props: [{ t: "donkey", x: 160, text: "諸葛子瑜之驢" }],
      bubbles: [{ t: "「諸葛子瑜のロバ」\nあっぱれ！\nロバはお前にやろう", x: 225, y: 46, by: 1, fs: 10.5 }],
    },
  ],

  liushan: [
    {
      cap: "蜀の滅亡後、洛陽にて",
      chars: [
        { r: "king", m: "h", x: 80, n: "劉禅", p: "hold" },
        { r: "official", m: "c", x: 200 },
        { r: "official", m: "c", x: 265, f: true },
      ],
      props: [{ t: "cup", x: 102, y: -20, back: false }],
      bubbles: [{ t: "うう…蜀の音楽…", x: 235, y: 70, by: 1 }],
      sfx: [{ t: "♪〜", x: 150, y: 50, s: 18 }],
    },
    {
      chars: [
        { r: "king", m: "h", x: 80, n: "劉禅" },
        { r: "minister", m: "m", x: 240, f: true, n: "司馬昭" },
      ],
      bubbles: [
        { t: "蜀が恋しくは\nありませんか？", x: 235, y: 44, by: 1 },
        { t: "ここが楽しいので\nぜんぜん！", x: 95, y: 88, by: 0 },
      ],
    },
    {
      chars: [
        { r: "king", m: "b", x: 80, n: "劉禅" },
        { r: "official", m: "w", x: 220, f: true, n: "郤正", beard: true },
      ],
      bubbles: [{ t: "次は泣きながら\n「先祖の墓が蜀に…」\nと言って目を閉じて", x: 195, y: 58, by: 1, k: "w", fs: 10.5 }],
    },
    {
      chars: [
        { r: "king", m: "s", x: 80, n: "劉禅" },
        { r: "minister", m: "m", x: 240, f: true, n: "司馬昭" },
      ],
      bubbles: [
        { t: "郤正の言葉に\nそっくりですな", x: 235, y: 42, by: 1 },
        { t: "えっ、そうなんです！\nなぜそれを！？", x: 100, y: 84, by: 0 },
      ],
      sfx: [{ t: "ドッ", x: 290, y: 120, s: 20 }],
    },
  ],

  liuling: [
    {
      cap: "竹林の七賢・劉伶",
      chars: [{ r: "naked", m: "h", x: 110, n: "劉伶", p: "hold" }],
      props: [{ t: "jar", x: 210 }],
      sfx: [{ t: "ぐびぐび", x: 210, y: 110, s: 15 }],
      bubbles: [{ t: "ぷは〜っ\n酒はうまい！", x: 95, y: 64, by: 0 }],
    },
    {
      chars: [
        { r: "naked", m: "h", x: 80, n: "劉伶" },
        { r: "scholar", m: "s", x: 235, f: true, n: "客" },
      ],
      bubbles: [{ t: "は、裸！？\nなんと無礼な！", x: 225, y: 52, by: 1, k: "y" }],
    },
    {
      chars: [{ r: "naked", m: "m", x: 110, n: "劉伶", p: "up" }],
      bubbles: [{ t: "わしは天地を家とし\nこの部屋を\nふんどしとしておる", x: 210, y: 62, by: 0 }],
      fx: "flash",
    },
    {
      chars: [
        { r: "naked", m: "m", x: 80, n: "劉伶", p: "point" },
        { r: "scholar", m: "c", x: 235, f: true, n: "客" },
      ],
      bubbles: [
        { t: "君はなぜ、わしの\nふんどしの中に\n入ってくるのかね", x: 95, y: 50, by: 0 },
        { t: "えぇ…", x: 260, y: 88, by: 1 },
      ],
    },
  ],

  panyue: [
    {
      cap: "美男子・潘岳のお出かけ",
      chars: [
        { r: "official", m: "k", x: 80, n: "潘岳" },
        { r: "woman", m: "k", x: 210, f: true, e: ["hearts"] },
        { r: "woman", m: "h", x: 270, f: true },
      ],
      props: [{ t: "fruits", x: 140, y: -70 }],
      bubbles: [{ t: "キャー！\n潘岳さまー！", x: 245, y: 52, by: 1 }],
      fx: "pink",
    },
    {
      chars: [{ r: "official", m: "m", x: 80, n: "潘岳", p: "hips" }],
      props: [{ t: "cart", x: 210, full: true }],
      bubbles: [{ t: "今日も果物で\n満車だな", x: 85, y: 62, by: 0 }],
    },
    {
      chars: [{ r: "scholar", m: "m", x: 140, n: "左思", p: "up" }],
      bubbles: [{ t: "よし、ぼくも\n街に出てみよう！", x: 230, y: 70, by: 0 }],
    },
    {
      chars: [
        { r: "scholar", m: "c", x: 80, n: "左思" },
        { r: "woman", m: "a", x: 210, f: true },
        { r: "woman", m: "a", x: 270, f: true },
      ],
      props: [{ t: "spit", x: 125, y: -70 }],
      sfx: [{ t: "ペッ", x: 230, y: 70, s: 22 }, { t: "ペッ", x: 285, y: 92, s: 18 }],
      bubbles: [{ t: "な、なぜ…", x: 70, y: 70, by: 0 }],
      fx: "gloom",
    },
  ],

  huidi: [
    {
      chars: [
        { r: "emperor", m: "b", x: 80, n: "恵帝" },
        { r: "official", m: "w", x: 240, f: true, n: "家臣" },
      ],
      bubbles: [{ t: "陛下、飢饉で民に\n食べる穀物が\nありません！", x: 225, y: 52, by: 1 }],
    },
    {
      chars: [
        { r: "emperor", m: "b", x: 80, n: "恵帝" },
        { r: "official", m: "s", x: 240, f: true, n: "家臣" },
      ],
      bubbles: [
        { t: "ならば肉のおかゆを\n食べればよかろう？", x: 105, y: 52, by: 0 },
        { t: "………", x: 260, y: 92, by: 1 },
      ],
    },
    {
      chars: [{ r: "emperor", m: "n", x: 85, n: "恵帝" }],
      props: [{ t: "frog", x: 230 }],
      sfx: [{ t: "ゲコゲコ", x: 235, y: 160, s: 14, c: "#3E5C4E" }],
      bubbles: [{ t: "あのカエルは\n官のために鳴くのか\n私のためか？", x: 205, y: 58, by: 0 }],
    },
    {
      cap: "このあと「八王の乱」が起こる",
      chars: [
        { r: "emperor", m: "h", x: 80, n: "恵帝" },
        { r: "official", m: "w", x: 210, f: true },
        { r: "official", m: "w", x: 270, f: true },
      ],
      bubbles: [{ t: "（この国…\n大丈夫か…）", x: 240, y: 64, by: 1, k: "t" }],
      fx: "gloom",
    },
  ],

  shichong: [
    {
      chars: [
        { r: "official", m: "m", x: 70, n: "王愷", p: "point" },
        { r: "official", m: "b", x: 255, f: true, n: "石崇", c: "#6A4A8A" },
      ],
      props: [{ t: "coral", x: 160 }],
      bubbles: [{ t: "陛下から賜った\n珊瑚じゃ！どうだ！", x: 95, y: 50, by: 0 }],
    },
    {
      chars: [
        { r: "official", m: "s", x: 60, n: "王愷" },
        { r: "official", m: "b", x: 230, f: true, n: "石崇", c: "#6A4A8A", p: "hold" },
      ],
      props: [{ t: "coral", x: 160, broken: true }, { t: "ruyi", x: 205, y: -20, back: false, f: true }],
      sfx: [{ t: "バキーン", x: 160, y: 100, s: 22, r: -8 }],
      fx: "focus",
      focus: [160, 170],
    },
    {
      chars: [
        { r: "official", m: "a", x: 80, n: "王愷" },
        { r: "official", m: "m", x: 240, f: true, n: "石崇", c: "#6A4A8A" },
      ],
      bubbles: [
        { t: "な、なにを\nするかーっ！", x: 85, y: 60, by: 0, k: "y" },
        { t: "惜しむほどでも\nない。お返しします", x: 230, y: 96, by: 1, fs: 10.5 },
      ],
    },
    {
      chars: [{ r: "official", m: "c", x: 55, n: "王愷", e: ["gloom"] }],
      props: [
        { t: "coral", x: 140, s: 1.3, big: true },
        { t: "coral", x: 190, s: 1.5, big: true },
        { t: "coral", x: 240, s: 1.3, big: true },
        { t: "coral", x: 288, s: 1.4, big: true },
      ],
      sfx: [{ t: "ドーン", x: 215, y: 50, s: 22 }],
      bubbles: [{ t: "ま…負けた…", x: 70, y: 70, by: 0 }],
    },
  ],

  wangxizhi: [
    {
      cap: "名門王家に、婿選びの使者が来た",
      chars: [
        { r: "official", m: "n", x: 50, n: "使者" },
        { r: "scholar", m: "k", x: 150 },
        { r: "scholar", m: "k", x: 210 },
        { r: "scholar", m: "k", x: 270 },
      ],
      sfx: [{ t: "ビシッ", x: 210, y: 84, s: 18 }],
    },
    {
      chars: [{ r: "commoner", m: "z", x: 160, y: -18, n: "東の寝台の若者", belly: true, e: ["zz"] }],
      props: [{ t: "bed", x: 160 }],
      bubbles: [{ t: "ぐう…むにゃ", x: 245, y: 70, by: 0 }],
    },
    {
      chars: [
        { r: "official", m: "w", x: 80, n: "使者" },
        { r: "official", m: "h", x: 240, f: true, n: "郗鑒", beard: true },
      ],
      bubbles: [
        { t: "皆すましてましたが\n一人だけ腹を出して\n寝転がってまして…", x: 95, y: 52, by: 0, fs: 10.5 },
        { t: "そやつじゃ！", x: 250, y: 96, by: 1, k: "y" },
      ],
    },
    {
      cap: "のちの「書聖」王羲之である",
      chars: [
        { r: "scholar", m: "k", x: 110, n: "王羲之", p: "write" },
        { r: "official", m: "h", x: 255, f: true, n: "郗鑒", beard: true },
      ],
      props: [{ t: "paper", x: 150, y: -20, text: "書", back: false }],
      bubbles: [{ t: "婿どの〜！", x: 250, y: 70, by: 1 }],
    },
  ],

  loushide: [
    {
      chars: [
        { r: "minister", m: "b", x: 80, n: "婁師徳" },
        { r: "official", m: "m", x: 240, f: true, n: "弟" },
      ],
      bubbles: [{ t: "顔につばを吐かれても\n黙って拭きます！", x: 210, y: 52, by: 1 }],
    },
    {
      chars: [
        { r: "minister", m: "z", x: 80, n: "婁師徳" },
        { r: "official", m: "s", x: 240, f: true, n: "弟" },
      ],
      bubbles: [{ t: "それでは\nだめじゃ", x: 90, y: 62, by: 0 }],
      sfx: [{ t: "ふるふる", x: 160, y: 130, s: 13, c: "#4A443B" }],
    },
    {
      chars: [{ r: "minister", m: "m", x: 110, n: "婁師徳" }],
      bubbles: [{ t: "拭けば相手の怒りに\n逆らうことになる", x: 210, y: 64, by: 0 }],
    },
    {
      chars: [
        { r: "minister", m: "z", x: 80, n: "婁師徳", e: ["sparkle"] },
        { r: "official", m: "s", x: 240, f: true, n: "弟" },
      ],
      bubbles: [
        { t: "自然に乾くのを\n待つのじゃ", x: 85, y: 56, by: 0 },
        { t: "そ、そこまで…！？", x: 230, y: 84, by: 1 },
      ],
      fx: "flash",
    },
  ],

  jiadao: [
    {
      cap: "詩人の賈島、ロバの上で",
      chars: [{ r: "scholar", m: "z", x: 150, y: -26 }],
      props: [{ t: "donkey", x: 140 }, { t: "moon", x: 270, y: 40 }],
      bubbles: [{ t: "僧は推す\n月下の門…", x: 60, y: 72, by: 0 }],
      fx: "night",
    },
    {
      chars: [{ r: "scholar", m: "w", x: 150, y: -26, p: "hold" }],
      props: [{ t: "donkey", x: 140 }],
      bubbles: [
        { t: "推す？", x: 60, y: 50, by: 0 },
        { t: "いや敲く？", x: 250, y: 60, by: 0 },
      ],
      sfx: [{ t: "ブツブツ", x: 150, y: 54, s: 14, c: "#4A443B" }],
    },
    {
      chars: [
        { r: "scholar", m: "s", x: 90, y: -26 },
        { r: "minister", m: "s", x: 245, f: true, n: "韓愈" },
      ],
      props: [{ t: "donkey", x: 80 }, { t: "banner", x: 300, text: "京兆尹" }],
      sfx: [{ t: "ドーン", x: 170, y: 80, s: 24, r: -8 }],
      fx: "focus",
      focus: [170, 140],
    },
    {
      cap: "「推敲」の誕生",
      chars: [
        { r: "scholar", m: "k", x: 80, n: "賈島" },
        { r: "minister", m: "m", x: 240, f: true, n: "韓愈", beard: true },
      ],
      bubbles: [
        { t: "「敲く」が\nよかろう", x: 240, y: 56, by: 1 },
        { t: "なるほど！", x: 85, y: 76, by: 0 },
      ],
    },
  ],

  wanganshi: [
    {
      chars: [
        { r: "minister", m: "b", x: 80, n: "王安石", dirty: true },
        { r: "scholar", m: "w", x: 240, f: true, n: "門人" },
      ],
      bubbles: [{ t: "先生、お顔が黒い…\nご病気では？", x: 220, y: 52, by: 1 }],
    },
    {
      chars: [
        { r: "minister", m: "b", x: 70, n: "王安石", dirty: true },
        { r: "scholar", m: "b", x: 245, f: true, n: "医者", beard: true },
      ],
      bubbles: [{ t: "これは垢です\n病気ではありません", x: 210, y: 52, by: 1 }],
      sfx: [{ t: "ズコッ", x: 150, y: 120, s: 20, r: 8 }],
    },
    {
      chars: [
        { r: "minister", m: "b", x: 80, n: "王安石", dirty: true },
        { r: "scholar", m: "h", x: 240, f: true, n: "門人", p: "hold" },
      ],
      props: [{ t: "box", x: 220, y: -22, back: false }],
      bubbles: [{ t: "澡豆で洗いましょう！\nさあさあ", x: 225, y: 52, by: 1 }],
    },
    {
      chars: [
        { r: "minister", m: "m", x: 90, n: "王安石", dirty: true, p: "hips" },
        { r: "scholar", m: "c", x: 245, f: true, n: "門人" },
      ],
      bubbles: [{ t: "天がわしを黒く生んだ\n澡豆で何ができる", x: 115, y: 50, by: 0 }],
      sfx: [{ t: "ガーン", x: 265, y: 92, s: 16, c: "#4A443B" }],
    },
  ],

  mifu: [
    {
      cap: "赴任先の役所にて",
      chars: [{ r: "minister", m: "s", x: 90, n: "米芾", e: ["sparkle"] }],
      props: [{ t: "rock", x: 225, s: 1.3 }],
      bubbles: [{ t: "な、なんと見事な\n奇石…！", x: 95, y: 56, by: 0 }],
    },
    {
      chars: [{ r: "minister", m: "k", x: 130, n: "米芾", p: "up", c: "#2E4A8A" }],
      bubbles: [{ t: "これは正装で\n拝まねば！", x: 225, y: 66, by: 0 }],
      sfx: [{ t: "いそいそ", x: 60, y: 110, s: 14, c: "#4A443B" }],
    },
    {
      chars: [{ r: "minister", m: "z", x: 110, n: "米芾", p: "hold", tilt: 22, c: "#2E4A8A" }],
      props: [{ t: "rock", x: 225, s: 1.3 }],
      bubbles: [{ t: "兄上ーっ！！", x: 120, y: 52, by: 0, k: "y" }],
      fx: "flash",
    },
    {
      chars: [
        { r: "minister", m: "h", x: 75, n: "米芾", p: "up", c: "#2E4A8A" },
        { r: "official", m: "w", x: 215, f: true },
        { r: "official", m: "w", x: 275, f: true },
      ],
      bubbles: [{ t: "（また米顛さまが…）", x: 235, y: 64, by: 1, k: "t" }],
    },
  ],

  sushi: [
    {
      chars: [
        { r: "scholar", m: "h", x: 80, n: "陳慥" },
        { r: "minister", m: "h", x: 240, f: true, n: "蘇軾", beard: true },
      ],
      props: [{ t: "table", x: 160 }],
      bubbles: [{ t: "今宵も仏の教えを\n語り明かそう！", x: 95, y: 52, by: 0 }],
    },
    {
      chars: [
        { r: "scholar", m: "s", x: 80, n: "陳慥" },
        { r: "woman", m: "a", x: 230, f: true, n: "妻・柳氏", s: 1.15 },
      ],
      sfx: [{ t: "ガオォォ", x: 150, y: 70, s: 24, r: -8 }],
      fx: "focus",
      focus: [230, 130],
    },
    {
      chars: [{ r: "scholar", m: "c", x: 130, n: "陳慥" }],
      props: [{ t: "staff", x: 210 }],
      sfx: [{ t: "カラーン", x: 225, y: 160, s: 15 }],
      bubbles: [{ t: "あわわ…", x: 130, y: 64, by: 0 }],
      fx: "gloom",
    },
    {
      cap: "その詩は千年後まで残った",
      chars: [{ r: "minister", m: "m", x: 110, n: "蘇軾", beard: true, p: "write" }],
      props: [{ t: "paper", x: 150, y: -20, text: "河東獅吼", back: false }],
      bubbles: [{ t: "河東の獅子吼…\nいい詩ができた", x: 220, y: 70, by: 0 }],
    },
  ],

  zhengde: [
    {
      chars: [
        { r: "emperor", m: "k", x: 80, n: "正徳帝", p: "up" },
        { r: "minister", m: "s", x: 210, f: true },
        { r: "minister", m: "s", x: 275, f: true },
      ],
      bubbles: [
        { t: "朕も戦に\n出たい！", x: 85, y: 56, by: 0 },
        { t: "なりませぬ！", x: 245, y: 52, by: 2, k: "y" },
      ],
    },
    {
      chars: [{ r: "emperor", m: "m", x: 110, n: "正徳帝" }],
      bubbles: [{ t: "では「朱寿」という\n大将軍を任命する", x: 215, y: 64, by: 0 }],
    },
    {
      chars: [
        { r: "general", m: "k", x: 90, n: "大将軍・朱寿", p: "hips" },
        { r: "minister", m: "s", x: 245, f: true },
      ],
      bubbles: [
        { t: "朱寿じゃ！", x: 85, y: 60, by: 0 },
        { t: "どう見ても\n陛下では…", x: 245, y: 60, by: 1 },
      ],
    },
    {
      cap: "褒美を出すのも受け取るのも本人",
      chars: [
        { r: "emperor", m: "m", x: 70, n: "正徳帝", p: "hold" },
        { r: "general", m: "k", x: 245, f: true, n: "朱寿", p: "hold" },
      ],
      props: [{ t: "sack", x: 158 }],
      bubbles: [
        { t: "よくやった！\n鎮国公に封ず", x: 80, y: 66, by: 0 },
        { t: "ありがたき\n幸せ！", x: 250, y: 66, by: 1 },
      ],
    },
  ],

  tianqi: [
    {
      chars: [{ r: "emperor", m: "k", x: 110, n: "天啓帝", p: "hold" }],
      props: [{ t: "chair", x: 220 }, { t: "saw", x: 128, y: -24, back: false }],
      sfx: [{ t: "ギコギコ", x: 200, y: 70, s: 18 }],
    },
    {
      chars: [{ r: "eunuch", m: "m", x: 160, n: "魏忠賢" }],
      fx: "gloom",
      bubbles: [{ t: "（陛下が夢中の\n今がチャンス…）", x: 160, y: 60, by: 0, k: "t" }],
    },
    {
      chars: [
        { r: "emperor", m: "a", x: 80, n: "天啓帝", p: "hold" },
        { r: "eunuch", m: "m", x: 240, f: true, n: "魏忠賢", p: "hold" },
      ],
      props: [{ t: "paper", x: 215, y: -22, back: false }, { t: "saw", x: 98, y: -24, back: false }],
      bubbles: [
        { t: "陛下、政務の\nご報告を…", x: 245, y: 40, by: 1 },
        { t: "うるさい！わかっとる\nよきにはからえ！", x: 100, y: 70, by: 0, k: "y", fs: 10.5 },
      ],
    },
    {
      cap: "こうして明は傾いていく",
      chars: [
        { r: "emperor", m: "h", x: 75, n: "天啓帝", p: "up" },
        { r: "eunuch", m: "m", x: 245, f: true, n: "魏忠賢" },
      ],
      props: [{ t: "chair", x: 150, done: true }],
      bubbles: [
        { t: "できたーっ！", x: 75, y: 70, by: 0 },
        { t: "ははーっ\n（ニヤリ）", x: 250, y: 70, by: 1 },
      ],
    },
  ],

  zhupi: [
    {
      cap: "清の康熙帝",
      chars: [{ r: "emperor", m: "n", x: 90, n: "康熙帝", p: "write" }],
      props: [{ t: "pile", x: 220, n: 10 }, { t: "paper", x: 125, y: -22, text: "知道了", back: false }],
      sfx: [{ t: "サラサラ", x: 150, y: 80, s: 14, c: "#4A443B" }],
    },
    {
      chars: [{ r: "emperor", m: "b", x: 90, n: "康熙帝", p: "write" }],
      props: [{ t: "pile", x: 230, n: 14 }],
      bubbles: [
        { t: "知道了", x: 70, y: 40 },
        { t: "知道了", x: 160, y: 60 },
        { t: "知道了", x: 90, y: 80 },
      ],
      sfx: [{ t: "（わかった）", x: 230, y: 40, s: 12, c: "#4A443B" }],
    },
    {
      cap: "息子の雍正帝",
      chars: [{ r: "emperor", m: "a", x: 90, n: "雍正帝", p: "write", e: ["sweat"] }],
      props: [{ t: "pile", x: 200, n: 18 }, { t: "pile", x: 260, n: 15 }],
      sfx: [{ t: "カリカリカリ", x: 120, y: 60, s: 16 }],
      bubbles: [{ t: "全部長文で\n返事する！", x: 230, y: 40, by: 0 }],
      fx: "focus",
      focus: [90, 140],
    },
    {
      chars: [
        { r: "emperor", m: "m", x: 85, n: "雍正帝", p: "hips" },
        { r: "minister", m: "s", x: 245, f: true, n: "地方官", p: "hold" },
      ],
      props: [{ t: "paper", x: 222, y: -22, back: false }],
      bubbles: [
        { t: "朕はこういう男だ！\nこういう皇帝なのだ！", x: 110, y: 44, by: 0 },
        { t: "は、はい…", x: 250, y: 96, by: 1 },
      ],
      fx: "flash",
    },
  ],

  qianlong: [
    {
      chars: [{ r: "emperor", m: "k", x: 95, n: "乾隆帝", p: "up" }],
      props: [{ t: "pile", x: 230, n: 16, text: "4万首" }],
      bubbles: [{ t: "今日も詩が\nできたぞ！", x: 95, y: 56, by: 0 }],
    },
    {
      cap: "ただし名作として残った詩はほぼない",
      chars: [
        { r: "minister", m: "w", x: 110 },
        { r: "minister", m: "w", x: 210, f: true },
      ],
      bubbles: [{ t: "（数は…すごい…）", x: 160, y: 70, by: 0, k: "t" }],
    },
    {
      chars: [{ r: "emperor", m: "h", x: 80, n: "乾隆帝", p: "point" }],
      props: [{ t: "painting", x: 220, stamps: true }],
      sfx: [
        { t: "ポン！", x: 175, y: 40, s: 16 },
        { t: "ポン！", x: 270, y: 60, s: 16 },
      ],
      bubbles: [{ t: "これぞ本物の\n名画じゃ！", x: 85, y: 56, by: 0 }],
    },
    {
      cap: "実はそれは模本だった",
      chars: [{ r: "emperor", m: "m", x: 70, n: "乾隆帝", p: "point" }],
      props: [
        { t: "painting", x: 170, stamps: true },
        { t: "painting", x: 265 },
        { t: "sign", x: 265, y: 0, text: "本物", post: false, fs: 9 },
      ],
      bubbles: [
        { t: "そっちは偽物じゃ", x: 90, y: 56, by: 0 },
        { t: "（助かった…）", x: 262, y: 42, k: "t" },
      ],
    },
  ],
};

