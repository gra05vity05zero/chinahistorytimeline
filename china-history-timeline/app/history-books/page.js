import { ERAS, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageThumb, MiscLinksSection, A8AdBlock } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "中国の歴史書（史書）とは？史記・漢書・三国志・資治通鑑などを紹介";
const fullTitle = `${title} | ${SITE_NAME}`;
const description =
  "『史記』『漢書』『三国志』『資治通鑑』『十八史略』など、中国の代表的な歴史書を成立年代・著者・内容とあわせて紹介。紀伝体と編年体の違いや、正史「二十四史」の一覧もまとめて解説します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/history-books" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/history-books" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

function eraHref(id) {
  return ERAS.some((e) => e.id === id) ? `/eras/${id}` : null;
}

const BOOKS = [
  {
    name: "{{尚書|しょうしょ}}（{{書経|しょきょう}}）",
    period: "成立：周〜戦国",
    author: "編者{{不詳|ふしょう}}（{{孔子|こうし}}の{{編纂|へんさん}}と伝わる）",
    style: "記言体",
    key: "伝説の聖王から周までの「言葉」を集めた最古の史書",
    body:
      "{{堯|ぎょう}}・{{舜|しゅん}}・{{禹|う}}といった伝説上の聖王から夏・{{殷|いん}}・周の君主や重臣の{{詔勅|しょうちょく}}・{{訓戒|くんかい}}・{{誓|ちか}}いの言葉を集めた書物。出来事を年代順に並べるのではなく、{{為政者|いせいしゃ}}の発言を記録する形式で、{{儒教|じゅきょう}}の経典「五経」の一つとして重んじられた。{{秦|しん}}の{{焚書|ふんしょ}}で多くが失われ、後に伝えられたテキストには後世の{{偽作|ぎさく}}とされる部分も{{含|ふく}}まれる。",
    eraId: "westernzhou",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Shujing_NCL_1.png",
    imageCaption: "{{宋末元初|そうまつげんしょ}}の{{金履祥|きんりしょう}}による{{注釈本|ちゅうしゃくぼん}}『{{尚書表注|しょうしょひょうちゅう}}』の{{冒頭|ぼうとう}}（{{台湾|たいわん}}・国家図書館蔵）",
    credit: "{{台湾|たいわん}}国家図書館 / Wikimedia Commons（パブリックドメイン）",
  },
  {
    name: "{{春秋|しゅんじゅう}}・{{春秋左氏伝|しゅんじゅうさしでん}}",
    period: "成立：春秋〜戦国",
    author: "{{孔子|こうし}}（『春秋』）／{{左丘明|さきゅうめい}}（『左伝』と伝わる）",
    style: "編年体",
    key: "「春秋時代」の名の由来となった{{魯国|ろこく}}の年代記",
    body:
      "『春秋』は{{魯|ろ}}の国の紀元前722年から前481年までの出来事を年月順に簡潔に記した年代記で、{{孔子|こうし}}が{{編纂|へんさん}}したとされる。わずかな言葉の選び方に{{褒貶|ほうへん}}（善悪の評価）を{{込|こ}}める書き方は「{{春秋の筆法|しゅんじゅうのひっぽう}}」と呼ばれた。その簡潔な本文に{{詳|くわ}}しい物語や背景を補った{{注釈書|ちゅうしゃくしょ}}が『{{左伝|さでん}}』で、戦や外交、人物の言動を生き生きと{{描|えが}}き、後の歴史{{叙述|じょじゅつ}}に大きな{{影響|えいきょう}}を{{与|あた}}えた。",
    eraId: "chunqiu",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Li_Yuanyang_Zuo_zhuan_first_page.png",
    imageCaption: "16世紀に刊行された『春秋左氏伝』の{{冒頭|ぼうとう}}ページ",
    credit: "Wikimedia Commons（パブリックドメイン）",
  },
  {
    name: "{{戦国策|せんごくさく}}",
    period: "成立：前漢（前1世紀に{{編纂|へんさん}}）",
    author: "{{劉向|りゅうきょう}}（{{編纂|へんさん}}）",
    style: "国別体",
    key: "遊説家たちの弁論と策略を国ごとにまとめた書",
    body:
      "戦国時代に諸国を{{渡|わた}}り歩いた{{蘇秦|そしん}}・{{張儀|ちょうぎ}}ら縦横家の{{献策|けんさく}}や弁舌を、{{秦|しん}}・{{斉|せい}}・{{楚|そ}}・{{趙|ちょう}}など国別に整理した書物。前漢末の{{劉向|りゅうきょう}}が{{宮廷|きゅうてい}}に残る資料を{{校訂|こうてい}}してまとめ、「戦国」という時代名もこの書名に由来する。「{{蛇足|だそく}}」「{{漁夫の利|ぎょふのり}}」「{{隗より始めよ|かいよりはじめよ}}」など、日本でもなじみ深い故事成語の出典が数多く{{含|ふく}}まれる。",
    eraId: "zhanguo",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/ZhanGuoCe.jpeg",
    imageCaption: "古い刊本の『戦国策』の{{冒頭|ぼうとう}}ページ",
    credit: "Wikimedia Commons（パブリックドメイン）",
  },
  {
    name: "{{史記|しき}}",
    period: "成立：前漢（前91年{{頃|ごろ}}）",
    author: "{{司馬遷|しばせん}}",
    style: "紀伝体",
    key: "伝説の{{黄帝|こうてい}}から漢の{{武帝|ぶてい}}まで、約2000年を{{描|えが}}いた「正史」の第一",
    body:
      "前漢の歴史家{{司馬遷|しばせん}}が、父{{司馬談|しばたん}}の遺志を{{継|つ}}いで完成させた通史。{{武帝|ぶてい}}の{{怒|いか}}りに{{触|ふ}}れて{{宮刑|きゅうけい}}という{{屈辱的|くつじょくてき}}な{{刑罰|けいばつ}}を受けながらも{{執筆|しっぴつ}}を続けた。{{帝王|ていおう}}の年代記「本紀」、{{諸侯|しょこう}}の家の歴史「世家」、個人の伝記「列伝」、年表「表」、制度史「書」を組み合わせた紀伝体という形式を確立し、以後の正史はすべてこれにならった。{{項羽|こうう}}と{{劉邦|りゅうほう}}の戦いや「{{鴻門の会|こうもんのかい}}」、{{刺客|しかく}}や商人の列伝など、人間ドラマとしての文学的評価も高い。",
    eraId: "westernhan",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/『史記』唐写本.jpg",
    imageCaption: "{{唐代|とうだい}}に書写された『史記』{{河渠書|かきょしょ}}の写本。巻末に{{司馬遷|しばせん}}自身の論評が記される（東京国立博物館蔵）",
    credit: "東京国立博物館 / Wikimedia Commons, CC BY 4.0",
  },
  {
    name: "{{漢書|かんじょ}}",
    period: "成立：後漢（1世紀後半）",
    author: "{{班固|はんこ}}（妹の{{班昭|はんしょう}}が補完）",
    style: "紀伝体・断代史",
    key: "一つの王朝だけを{{扱|あつか}}う「断代史」の手本",
    body:
      "前漢の建国から{{王莽|おうもう}}の新の{{滅亡|めつぼう}}までを{{扱|あつか}}った歴史書。『史記』が複数の時代をまたぐ通史だったのに対し、一王朝の歴史だけをまとめる「断代史」の形式をとり、以後の正史の基本形となった。父{{班彪|はんぴょう}}が始め、{{班固|はんこ}}が書き{{継|つ}}ぎ、班固の死後は妹の{{班昭|はんしょう}}が未完部分を仕上げた。地理志には「{{楽浪海中|らくろうかいちゅう}}に{{倭人|わじん}}あり」と、日本についての最古級の記述が見える。",
    eraId: "westernhan",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/《漢書·卷二十八·地理志》.jpg",
    imageCaption: "{{南宋|なんそう}}・{{紹興年間|しょうこうねんかん}}に刊行された『漢書』地理志（{{倭人|わじん}}の記述を{{含|ふく}}む巻）",
    credit: "Wikimedia Commons（CC0）",
  },
  {
    name: "{{三国志|さんごくし}}",
    period: "成立：{{西晋|せいしん}}（3世紀末）",
    author: "{{陳寿|ちんじゅ}}（{{注釈|ちゅうしゃく}}：{{南朝宋|なんちょうそう}}の{{裴松之|はいしょうし}}）",
    style: "紀伝体",
    key: "{{魏|ぎ}}・{{呉|ご}}・{{蜀|しょく}}の正史。{{卑弥呼|ひみこ}}が登場する「{{魏志倭人伝|ぎしわじんでん}}」を{{含|ふく}}む",
    body:
      "{{蜀|しょく}}に仕え、後に{{西晋|せいしん}}の{{官僚|かんりょう}}となった{{陳寿|ちんじゅ}}が著した{{魏|ぎ}}・{{呉|ご}}・{{蜀|しょく}}三国の正史。{{晋|しん}}が{{魏|ぎ}}から{{禅譲|ぜんじょう}}を受けた王朝であったため、{{魏|ぎ}}を正統として{{扱|あつか}}っている。記述は簡潔で、後に{{南朝宋|なんちょうそう}}の{{裴松之|はいしょうし}}が多くの史料を引いて{{詳細|しょうさい}}な注を付けた。小説『三国志演義』とは別物で、こちらは史実を記録した歴史書である。「{{魏書|ぎしょ}}」{{東夷伝倭人条|とういでんわじんじょう}}、{{通称|つうしょう}}「{{魏志倭人伝|ぎしわじんでん}}」には{{邪馬台国|やまたいこく}}と女王{{卑弥呼|ひみこ}}の記録があり、日本古代史の第一級史料となっている。",
    eraId: "sanguo",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Fragment_of_Biography_of_Bu_Zhi_History_Books_of_Three_Kingdoms_01_2012-12.JPG",
    imageCaption: "トルファンで出土した{{東晋|とうしん}}時代の写本『三国志』{{呉書|ごしょ}}・{{歩騭|ほしつ}}伝の断片",
    credit: "Wikimedia Commons, CC BY-SA 3.0",
  },
  {
    name: "{{後漢書|ごかんじょ}}",
    period: "成立：{{南朝宋|なんちょうそう}}（5世紀）",
    author: "{{范曄|はんよう}}",
    style: "紀伝体",
    key: "{{光武帝|こうぶてい}}の再興から後漢の{{滅亡|めつぼう}}までを{{描|えが}}く",
    body:
      "後漢王朝の歴史を記した正史。成立は『三国志』よりも後の{{南朝宋|なんちょうそう}}の時代で、{{范曄|はんよう}}がそれまでに書かれた複数の後漢史を整理して著した。{{蔡倫|さいりん}}の製紙法改良や、{{黄巾の乱|こうきんのらん}}など後漢末の混乱も{{描|えが}}かれる。{{東夷伝|とういでん}}には、57年に{{倭|わ}}の{{奴国|なこく}}が使者を送り{{光武帝|こうぶてい}}から{{印綬|いんじゅ}}を授かった記事があり、志賀島で発見された金印「{{漢委奴国王|かんのわのなのこくおう}}」との関係で知られる。",
    eraId: "easternhan",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/後漢書（宋紹興）.jpg",
    imageCaption: "{{南宋|なんそう}}・{{紹興年間|しょうこうねんかん}}に刊行された『後漢書』",
    credit: "Wikimedia Commons（パブリックドメイン）",
  },
  {
    name: "{{貞観政要|じょうがんせいよう}}",
    period: "成立：{{唐|とう}}（8世紀前半）",
    author: "{{呉兢|ごきょう}}",
    style: "言行録",
    key: "名君・{{唐|とう}}の太宗と家臣の問答を記した「{{帝王学|ていおうがく}}の教科書」",
    body:
      "{{唐|とう}}の二代{{皇帝|こうてい}}・{{太宗|たいそう}}（{{李世民|りせいみん}}）と、{{魏徴|ぎちょう}}・{{房玄齢|ぼうげんれい}}ら名臣たちの政治をめぐる問答を、テーマ別にまとめた書。太宗の治世は「{{貞観の治|じょうがんのち}}」と{{称|たた}}えられ、臣下の厳しい{{諫言|かんげん}}を受け入れた姿勢がよく知られる。日本でも北条政子や徳川家康が愛読したと伝えられ、現代でもリーダー論の古典として読まれている。",
    eraId: "tang",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tang_Emperor_Taizong.jpg",
    imageType: "figure",
    imageCaption: "『{{貞観政要|じょうがんせいよう}}』の主人公・{{唐|とう}}の{{太宗|たいそう}}（{{李世民|りせいみん}}）の{{肖像画|しょうぞうが}}",
    credit: "Wikimedia Commons（パブリックドメイン）",
  },
  {
    name: "{{資治通鑑|しじつがん}}",
    period: "成立：{{北宋|ほくそう}}（1084年）",
    author: "{{司馬光|しばこう}}",
    style: "編年体・通史",
    key: "戦国時代から五代十国まで1362年を年代順に{{描|えが}}いた大著",
    body:
      "{{北宋|ほくそう}}の政治家・歴史家{{司馬光|しばこう}}が、約19年をかけて完成させた全294巻の大編年史。紀元前403年（{{韓|かん}}・{{魏|ぎ}}・{{趙|ちょう}}の三家が{{諸侯|しょこう}}と認められた年）から959年までを、年月順に一続きに{{叙述|じょじゅつ}}する。書名は「治世に資する鏡」という意味で、{{皇帝|こうてい}}が政治の手本や{{戒|いまし}}めとするために編まれた。紀伝体の正史では人物ごとに散らばる出来事を一つの流れで追えるため、通史としての評価が非常に高い。",
    eraId: "northernsong",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Zizhi_Tongjian_by_Sima_Guang.jpg",
    imageCaption: "{{司馬光|しばこう}}自筆の『{{資治通鑑|しじつがん}}』{{草稿|そうこう}}（中国国家図書館蔵）",
    credit: "中国国家図書館 / Wikimedia Commons（パブリックドメイン）",
  },
  {
    name: "{{十八史略|じゅうはっしりゃく}}",
    period: "成立：元（13世紀末〜14世紀初め）",
    author: "{{曾先之|そうせんし}}",
    style: "編年体・通史（簡略本）",
    key: "日本で中国史入門書として広く読まれた要約版",
    body:
      "『史記』をはじめとする17の正史と{{宋代|そうだい}}の史料、あわせて18の歴史書を要約し、伝説の時代から{{南宋|なんそう}}の{{滅亡|めつぼう}}までを一冊にまとめた初学者向けの歴史書。中国本国ではそれほど重視されなかったが、日本では室町時代に伝わり、{{江戸時代|えどじだい}}から明治にかけて漢文の教科書として広く読まれた。「{{臥薪嘗胆|がしんしょうたん}}」「{{鶏口牛後|けいこうぎゅうご}}」などの故事も多く収められ、日本人の中国史のイメージ形成に大きな役割を果たした。",
    eraId: "yuan",
    imageUrl:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/NAJDA-286-0018_%E7%AB%8B%E6%96%8E%E5%85%88%E7%94%9F%E6%A8%99%E9%A1%8C%E8%A7%A3%E8%A8%BB%E9%9F%B3%E9%87%88%E5%8D%81%E5%85%AB%E5%8F%B2%E7%95%A5_%E5%B7%BB1.pdf/page3-500px-NAJDA-286-0018_%E7%AB%8B%E6%96%8E%E5%85%88%E7%94%9F%E6%A8%99%E9%A1%8C%E8%A7%A3%E8%A8%BB%E9%9F%B3%E9%87%88%E5%8D%81%E5%85%AB%E5%8F%B2%E7%95%A5_%E5%B7%BB1.pdf.jpg",
    imageCaption: "日本で刊行された『{{立斎先生標題解註音釈十八史略|りっさいせんせいひょうだいかいちゅうおんしゃくじゅうはっしりゃく}}』。右ページに書名、左ページに要約元の「十七史」の書名が並ぶ（国立公文書館蔵）",
    credit: "国立公文書館 / Wikimedia Commons",
  },
];

// 正史「二十四史」。成立は書かれた時代（扱う王朝の時代ではない）
const TWENTY_FOUR = [
  ["史記", "{{司馬遷|しばせん}}", "前漢"],
  ["漢書", "班固", "後漢"],
  ["後漢書", "{{范曄|はんよう}}", "{{南朝宋|なんちょうそう}}"],
  ["三国志", "{{陳寿|ちんじゅ}}", "{{西晋|せいしん}}"],
  ["{{晋書|しんじょ}}", "{{房玄齢|ぼうげんれい}} 他", "{{唐|とう}}"],
  ["{{宋書|そうじょ}}", "{{沈約|しんやく}}", "{{南朝梁|なんちょうりょう}}"],
  ["{{南斉書|なんせいしょ}}", "{{蕭子顕|しょうしけん}}", "{{南朝梁|なんちょうりょう}}"],
  ["{{梁書|りょうしょ}}", "{{姚思廉|ようしれん}}", "{{唐|とう}}"],
  ["{{陳書|ちんしょ}}", "{{姚思廉|ようしれん}}", "{{唐|とう}}"],
  ["{{魏書|ぎしょ}}", "{{魏収|ぎしゅう}}", "{{北斉|ほくせい}}"],
  ["{{北斉書|ほくせいしょ}}", "{{李百薬|りひゃくやく}}", "{{唐|とう}}"],
  ["周書", "{{令狐徳棻|れいことくふん}} 他", "{{唐|とう}}"],
  ["{{隋書|ずいしょ}}", "{{魏徴|ぎちょう}} 他", "{{唐|とう}}"],
  ["南史", "{{李延寿|りえんじゅ}}", "{{唐|とう}}"],
  ["北史", "{{李延寿|りえんじゅ}}", "{{唐|とう}}"],
  ["{{旧唐書|くとうじょ}}", "{{劉昫|りゅうく}} 他", "{{後晋|こうしん}}"],
  ["{{新唐書|しんとうじょ}}", "{{欧陽脩|おうようしゅう}}・{{宋祁|そうき}}", "{{北宋|ほくそう}}"],
  ["旧五代史", "{{薛居正|せつきょせい}} 他", "{{北宋|ほくそう}}"],
  ["新五代史", "{{欧陽脩|おうようしゅう}}", "{{北宋|ほくそう}}"],
  ["{{宋史|そうし}}", "{{脱脱|とくと}} 他", "元"],
  ["{{遼史|りょうし}}", "{{脱脱|とくと}} 他", "元"],
  ["金史", "{{脱脱|とくと}} 他", "元"],
  ["元史", "{{宋濂|そうれん}} 他", "明"],
  ["明史", "{{張廷玉|ちょうていぎょく}} 他", "清"],
];

const RESOLVED = BOOKS.map((b) => ({ ...b, eraLink: eraHref(b.eraId) }));

const headingStyle = { fontFamily: "var(--font-serif), serif", fontSize: 19, fontWeight: 700, color: COLORS.ink, marginBottom: 12 };
const tagStyle = {
  display: "inline-block",
  fontSize: 10.5,
  padding: "1px 8px",
  border: `1px solid ${COLORS.gold}`,
  color: COLORS.gold,
  fontFamily: "var(--font-serif), serif",
};

export default function HistoryBooksPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国の歴史書（史書）を読む
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          <RubyText
            text={
              "中国では古くから、王朝ごとに過去の歴史を記録することが国家の重要な事業とされてきた。新しい王朝は前の王朝の歴史をまとめ、" +
              "自らの正統性を示すとともに、後の{{為政者|いせいしゃ}}への教訓とした。こうして国家が公認した歴史書を「{{正史|せいし}}」と呼び、" +
              "『史記』から『明史』までの24書は「{{二十四史|にじゅうしし}}」と{{総称|そうしょう}}される。" +
              "ここでは正史に加え、日本でも広く読まれてきた代表的な歴史書を、成立の古い順に{{紹介|しょうかい}}する。"
            }
          />
        </p>

        <section style={{ marginBottom: 32, backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "14px 16px" }}>
          <h2 style={{ ...headingStyle, fontSize: 16, marginBottom: 8 }}>紀伝体と編年体</h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "中国の歴史書の書き方には大きく二つの形式がある。「{{紀伝体|きでんたい}}」は、{{皇帝|こうてい}}の年代記（本紀）と人物の伝記（列伝）を柱に、" +
                "制度史や年表を組み合わせる形式で、『史記』に始まり歴代の正史に受け{{継|つ}}がれた。人物像はよくわかるが、一つの出来事が複数の伝に分かれて記される。" +
                "一方「{{編年体|へんねんたい}}」は、出来事を年月の順に並べて記す形式で、『春秋』や『{{資治通鑑|しじつがん}}』が代表例。時代の流れを追いやすいのが特長である。"
              }
            />
          </p>
        </section>

        <h2 style={headingStyle}>代表的な歴史書</h2>
        <div className="flex flex-col gap-5">
          {RESOLVED.map((b, i) => (
            <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
              {b.imageUrl && (
                <div className="flex items-center justify-center" style={{ width: "100%", height: 200, backgroundColor: "#EFE7D0", overflow: "hidden" }}>
                  <HeritageThumb imageUrl={b.imageUrl} name={b.name} type={b.imageType || "building"} objectPosition={b.imageType ? undefined : "center"} />
                </div>
              )}
              <div style={{ padding: "14px 16px" }}>
                {b.imageCaption && (
                  <div style={{ fontSize: 10.5, color: COLORS.mist, marginBottom: 8 }}>
                    <RubyText text={b.imageCaption} />
                    {b.credit && <span> ／ <RubyText text={b.credit} /></span>}
                  </div>
                )}
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <span className="flex items-baseline gap-2">
                    <span
                      className="flex items-center justify-center"
                      style={{
                        minWidth: 22,
                        height: 22,
                        borderRadius: 11,
                        backgroundColor: COLORS.vermilion,
                        color: "#FBF8F0",
                        fontFamily: "var(--font-serif), serif",
                        fontSize: 11,
                        fontWeight: 700,
                        alignSelf: "center",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 17, fontWeight: 700, color: COLORS.ink }}>
                      <RubyText text={b.name} />
                    </span>
                  </span>
                  <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}><RubyText text={b.period} /></span>
                </div>
                <div className="flex items-center gap-2 flex-wrap" style={{ marginTop: 8 }}>
                  <span style={tagStyle}><RubyText text={b.style} /></span>
                  <span style={{ fontSize: 11.5, color: COLORS.mist }}>
                    著者：<RubyText text={b.author} />
                  </span>
                </div>
                <p style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 8 }}>
                  <RubyText text={b.key} />
                </p>
                <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>
                  <RubyText text={b.body} />
                </p>
                {b.eraLink && (
                  <a
                    href={b.eraLink}
                    style={{ display: "inline-block", marginTop: 10, fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
                  >
                    関連する時代を年表で読む →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <section style={{ marginTop: 36 }}>
          <h2 style={headingStyle}>正史「二十四史」一覧</h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 12 }}>
            <RubyText
              text={
                "清の{{乾隆帝|けんりゅうてい}}の時代に正史として公認された24の歴史書。「成立」は書物が{{編纂|へんさん}}された時代を示す。" +
                "民国期に編まれた『新元史』や、{{未定稿|みていこう}}の『{{清史稿|しんしこう}}』を加えて「二十五史」「二十六史」と呼ぶこともある。"
              }
            />
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5, color: COLORS.inkSoft, backgroundColor: "#FBF8F0" }}>
              <thead>
                <tr style={{ fontFamily: "var(--font-serif), serif", color: COLORS.ink }}>
                  {["#", "書名", "主な編者", "成立"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", borderBottom: `2px solid ${COLORS.gold}`, whiteSpace: "nowrap" }}>
                      <RubyText text={h} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TWENTY_FOUR.map(([name, editor, era], i) => (
                  <tr key={name}>
                    <td style={{ padding: "5px 10px", borderBottom: "1px solid #DCD3B8", color: COLORS.mist }}>{i + 1}</td>
                    <td style={{ padding: "5px 10px", borderBottom: "1px solid #DCD3B8", fontFamily: "var(--font-serif), serif", fontWeight: 700, color: COLORS.ink, whiteSpace: "nowrap" }}>
                      <RubyText text={name} />
                    </td>
                    <td style={{ padding: "5px 10px", borderBottom: "1px solid #DCD3B8" }}><RubyText text={editor} /></td>
                    <td style={{ padding: "5px 10px", borderBottom: "1px solid #DCD3B8", whiteSpace: "nowrap" }}><RubyText text={era} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            <RubyText text="歴史書をもとに書かれた小説「四大名著」や、史書に由来する故事成語も別ページで{{紹介|しょうかい}}しています。" />
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/four-great-novels" variant="solid">中国の四大名著を見る</NavButton>
            <NavButton href="/idioms" variant="outline">故事成語を見る</NavButton>
          </div>
        </section>

        <A8AdBlock ad="audible" className="mt-10" />

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
