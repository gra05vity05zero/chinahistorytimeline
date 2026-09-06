import { ERAS, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "日本史・中国史 対照年表";
const fullTitle = `日本史・中国史 対照年表 | ${SITE_NAME}`;
const description =
  "縄文時代から現代まで、日本の時代区分と中国の王朝を並べて比較できる対照年表。遣隋使・遣唐使、元寇、日明貿易、日清戦争など、日中の関わりが深い出来事もあわせて解説します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/japan-china-timeline" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/japan-china-timeline" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

function eraHref(id) {
  return ERAS.some((e) => e.id === id) ? `/eras/${id}` : null;
}

const ROWS = [
  {
    jpEra: "縄文時代",
    jpPeriod: "c. 14000 BC 頃 – 前300年頃",
    cnEra: "新石器文化 〜 西周",
    relation: "まだ日中間で明確な交流の記録は残っていないが、稲作技術などが大陸から伝わり始めたとされる時期。",
    href: eraHref("neolithic"),
  },
  {
    jpEra: "弥生時代",
    jpPeriod: "前300年頃 – 300年頃",
    cnEra: "戦国 〜 秦 〜 漢 〜 三国",
    relation:
      "57年、倭の奴国の使者が後漢に朝貢し「{{漢委奴国王|かんのわのなのこくおう}}」の金印を授かる。239年には{{卑弥呼|ひみこ}}が魏に遣使し「{{親魏倭王|しんぎわおう}}」の称号を得た。",
    href: eraHref("sanguo"),
  },
  {
    jpEra: "古墳時代",
    jpPeriod: "300年頃 – 593年",
    cnEra: "五胡十六国・東晋 〜 南北朝",
    relation:
      "「{{倭の五王|わのごおう}}」（讃・珍・済・興・武）が中国南朝に相次いで朝貢し、朝鮮半島南部での立場を有利にするための称号を求めた。",
    href: eraHref("nanbei"),
  },
  {
    jpEra: "飛鳥時代",
    jpPeriod: "593年 – 710年",
    cnEra: "隋 〜 唐（建国期）",
    relation:
      "607年、{{聖徳太子|しょうとくたいし}}が{{小野妹子|おののいもこ}}を遣隋使として派遣。「日出づる処の天子、書を日没する処の天子に致す」の国書は{{煬帝|ようだい}}を怒らせたと伝わる。630年からは遣唐使の派遣も始まった。",
    href: eraHref("sui"),
  },
  {
    jpEra: "奈良時代",
    jpPeriod: "710年 – 794年",
    cnEra: "唐（最盛期）",
    relation:
      "遣唐使の派遣が本格化し、都・{{平城京|へいじょうきょう}}は唐の都{{長安|ちょうあん}}をモデルに造営された。753年には僧{{鑑真|がんじん}}が苦難の末に来日し、日本に戒律を伝えた。",
    href: eraHref("tang"),
  },
  {
    jpEra: "平安時代",
    jpPeriod: "794年 – 1185年",
    cnEra: "唐（後半）〜 五代十国 〜 北宋",
    relation: "894年、{{菅原道真|すがわらのみちざね}}の提言により遣唐使が廃止される。平安後期には{{平清盛|たいらのきよもり}}が日宋貿易を推進した。",
    href: eraHref("northernsong"),
  },
  {
    jpEra: "鎌倉時代",
    jpPeriod: "1185年 – 1333年",
    cnEra: "南宋 〜 元",
    relation:
      "元の皇帝{{クビライ|くびらい}}が二度にわたり日本へ遠征軍を送った「{{元寇|げんこう}}」（1274年 文永の役・1281年 弘安の役）が起こる。いずれも暴風雨（神風）などにより撃退された。",
    href: eraHref("yuan"),
  },
  {
    jpEra: "室町時代",
    jpPeriod: "1336年 – 1573年",
    cnEra: "元（末期）〜 明",
    relation:
      "{{足利義満|あしかがよしみつ}}が明との間に{{勘合貿易|かんごうぼうえき}}（日明貿易）を開始する一方、海賊集団「{{倭寇|わこう}}」の活動も中国沿岸を悩ませた。",
    href: eraHref("ming"),
  },
  {
    jpEra: "安土桃山時代",
    jpPeriod: "1573年 – 1603年",
    cnEra: "明",
    relation: "{{豊臣秀吉|とよとみひでよし}}が朝鮮出兵（文禄・慶長の役、1592〜1598年）を行い、朝鮮を支援する明の援軍と戦うことになった。",
    href: eraHref("ming"),
  },
  {
    jpEra: "江戸時代",
    jpPeriod: "1603年 – 1868年",
    cnEra: "明（末期）〜 清",
    relation:
      "「鎖国」下でも長崎では清の商船との貿易が続けられた。1840〜42年の{{阿片戦争|あへんせんそう}}で清が英国に敗れた衝撃は日本にも伝わり、幕末の対外政策に大きな影響を与えた。",
    href: eraHref("qing"),
  },
  {
    jpEra: "明治時代",
    jpPeriod: "1868年 – 1912年",
    cnEra: "清（末期）",
    relation: "1894〜95年に{{日清戦争|にっしんせんそう}}が起こり、日本が勝利。1911年の{{辛亥革命|しんがいかくめい}}によって清朝が倒れたのも、この時期にあたる。",
    href: eraHref("qing"),
  },
  {
    jpEra: "大正 〜 昭和前期",
    jpPeriod: "1912年 – 1945年",
    cnEra: "中華民国",
    relation: "1931年の満州事変を経て、1937年から{{日中戦争|にっちゅうせんそう}}へと拡大し、1945年の日本の敗戦まで続いた。",
    href: eraHref("roc"),
  },
  {
    jpEra: "昭和後期 〜 現代",
    jpPeriod: "1945年 –",
    cnEra: "中華人民共和国",
    relation: "1972年、日本と中華人民共和国の間で日中共同声明が発表され、国交が正常化した。",
    href: eraHref("prc"),
  },
];

export default function JapanChinaTimelinePage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          日本史・中国史 対照年表
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          日本史の教科書に出てくる「遣隋使」「元寇」「日明貿易」といった出来事は、実は中国側の王朝の動きと表裏一体です。
          日本の時代区分と中国の王朝を並べて眺めることで、両方の歴史がつながって見えてきます。
        </p>

        <div className="flex flex-col gap-3">
          {ROWS.map((row, i) => (
            <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "14px 16px" }}>
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 16, fontWeight: 700, color: COLORS.ink }}>
                    {row.jpEra}
                  </div>
                  <div style={{ fontSize: 11, color: COLORS.inkSoft }}>{row.jpPeriod}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, fontWeight: 700, color: COLORS.vermilion }}>
                    {row.cnEra}
                  </div>
                  <div style={{ fontSize: 10, color: COLORS.gold }}>（中国）</div>
                </div>
              </div>
              <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 8 }}>
                <RubyText text={row.relation} />
              </p>
              {row.href && (
                <a href={row.href} style={{ display: "inline-block", marginTop: 8, fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                  この時代の中国側の出来事を見る →
                </a>
              )}
            </div>
          ))}
        </div>

        <section style={{ marginTop: 32 }}>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/eras" variant="solid">出来事一覧を見る</NavButton>
            <NavButton href="/mnemonics" variant="outline">王朝の覚え方を見る</NavButton>
          </div>
        </section>
      </div>
    </div>
  );
}
