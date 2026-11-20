// サーバーコンポーネント（トップページ）とクライアントコンポーネント（Shared.jsx）の両方から使うため、
// "use client" のファイルではなくこの軽量モジュールに置く。
// 「テーマ別に読む」記事をカテゴリ別にまとめたリンク定義（トップページと各ページ末尾で共有）
export const MISC_SECTIONS = [
  {
    title: "覚える・学ぶ",
    links: [
      { href: "/mnemonics", label: "王朝の覚え方" },
      { href: "/year-mnemonics", label: "年号ゴロ合わせ集" },
      { href: "/idioms", label: "故事成語" },
      { href: "/funny-episodes", label: "笑えるエピソード集" },
      { href: "/quiz", label: "中国史クイズ" },
      { href: "/glossary", label: "中国史の用語集" },
      { href: "/japan-china-timeline", label: "日本史・中国史 対照年表" },
      { href: "/printable-timeline", label: "印刷できる一枚年表" },
      { href: "/eras", label: "王朝・時代一覧" },
      { href: "/history-books", label: "中国の歴史書" },
    ],
  },
  {
    title: "人物・王朝",
    links: [
      { href: "/qinshihuang", label: "{{始皇帝|しこうてい}}とは" },
      { href: "/qin-fall", label: "{{秦|しん}}はなぜ{{滅亡|めつぼう}}した？" },
      { href: "/terracotta-army", label: "{{兵馬俑|へいばよう}}・{{始皇帝陵|しこうていりょう}}の{{謎|なぞ}}" },
      { href: "/emperors", label: "歴代{{皇帝|こうてい}}一覧" },
      { href: "/china-capitals", label: "歴代王朝の都一覧" },
      { href: "/dynasty-territory-map", label: "王朝の領土の変遷マップ" },
      { href: "/sanguo-comparison", label: "{{魏|ぎ}}・{{呉|ご}}・{{蜀|しょく}}の{{違|ちが}}い" },
      { href: "/harem-ranks", label: "後宮の位（妃の階級）" },
      { href: "/keju", label: "科挙とは" },
      { href: "/eunuchs", label: "{{宦官|かんがん}}とは" },
      { href: "/women-rulers", label: "女帝・権力を握った女性" },
    ],
  },
  {
    title: "合戦",
    links: [
      { href: "/chunqiu-zhanguo-battles", label: "春秋・戦国時代の合戦マップ" },
      { href: "/chuhan-battles", label: "楚漢戦争の合戦マップ" },
      { href: "/sanguo-battles", label: "三国時代の合戦マップ" },
      { href: "/suitang-battles", label: "隋唐・五代の合戦マップ" },
      { href: "/song-yuan-battles", label: "宋・金・元の合戦マップ" },
    ],
  },
  {
    title: "名所・遺産",
    links: [
      { href: "/world-heritage", label: "中国の世界遺産" },
      { href: "/great-wall", label: "万里の長城" },
      { href: "/silk-road", label: "シルクロード" },
      { href: "/china-castles", label: "中国の城" },
      { href: "/ancient-towns", label: "中国の古城めぐり" },
      { href: "/ancient-capitals", label: "古都の今と観光地" },
    ],
  },
  {
    title: "文化・文学",
    links: [
      { href: "/hundred-schools", label: "{{諸子百家|しょしひゃっか}}とは" },
      { href: "/four-inventions", label: "四大発明" },
      { href: "/eto", label: "干支（十二支）の由来" },
      { href: "/shunsetsu", label: "春節（旧正月）とは" },
      { href: "/chinese-food", label: "中国料理の起源と歴史" },
      { href: "/four-great-novels", label: "四大名著" },
      { href: "/four-beauties", label: "中国四大美女" },
      { href: "/yangjiajiang", label: "{{楊家将|ようかしょう}}とは" },
      { href: "/suikoden", label: "{{水滸伝|すいこでん}}とは" },
      { href: "/saiyuki", label: "西遊記とは" },
    ],
  },
  {
    title: "作品で楽しむ中国史",
    links: [
      { href: "/dramas", label: "中国歴史ドラマの史実" },
      { href: "/kingdom", label: "漫画『キングダム』と史実" },
      { href: "/kusuriya", label: "『{{薬屋|くすりや}}のひとりごと』のモデル" },
      { href: "/koei-sangokushi", label: "ゲーム『{{三國志|さんごくし}}』シリーズ" },
      { href: "/musou", label: "ゲーム『真・{{三國無双|さんごくむそう}}』シリーズ" },
      { href: "/wuxia-games", label: "中国発の武侠・神話ゲーム" },
      { href: "/novelists", label: "日本人小説家一覧" },
    ],
  },
];
