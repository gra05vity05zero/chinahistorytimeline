import { ERAS, stripRuby, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageThumb, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "万里の長城とは？歴史と八達嶺・嘉峪関など見どころを解説";
const fullTitle = `万里の長城とは？歴史と八達嶺・嘉峪関など見どころを解説 | ${SITE_NAME}`;
const description =
  "万里の長城はいつ・誰が・なぜ築いたのか。戦国時代の個別築城から秦の始皇帝による連結、明代の大改修までの歴史と、八達嶺・慕田峪・山海関・嘉峪関など主要区間の見どころを地図とともに解説します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/great-wall" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/great-wall" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

// 万里の長城の主要区間・関所。年表に対応イベントがあるものはeraId/eventTitleでリンク先を特定する
// （/silk-roadのSTOPS/resolveStopと同じ方式）。
// location: 現在の行政区分 / mapX,mapY: 下の地図(viewBox 0 0 500 366)上での位置。
// 実際の経緯度を/world-heritageと同じ図法（緯度補正付き正距円筒図法）で投影した座標を基準にしている。
const STOPS = [
  {
    name: "{{山海関|さんかいかん}}",
    subtitle: "万里の長城 最東端の関所「天下第一関」",
    location: "河北省秦皇島市",
    description:
      "渤海湾に臨む万里の長城の東の起点で、「天下第一関」の額を掲げる楼閣が今も残る。1644年、明の武将{{呉三桂|ごさんけい}}がここの門を開いて清軍を招き入れたことで、明はついに滅亡し清の中国支配が始まった。西の果て{{嘉峪関|かよくかん}}と対をなす存在として知られる。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Wall_near_the_Shanhai_Pass.jpg",
    imageCaption: "山海関に残る城壁と楼閣",
    credit: "写真: PQ77wd / Wikimedia Commons, CC BY-SA 4.0",
    eraId: "qing",
    eventTitle: "清の北京入城",
    mapX: 365,
    mapY: 144,
  },
  {
    name: "{{老龍頭|ろうりゅうとう}}",
    subtitle: "長城が海に没する地点",
    location: "河北省秦皇島市（山海関の南）",
    description:
      "山海関からほど近い渤海の海岸に築かれた、長城が海へと突き出して終わる地点。まるで龍が首を海に浸すように見えることから「老龍頭」と呼ばれ、明代には海上からの侵入に備える砲台としての役割も担っていた。万里の長城が陸の防壁であると同時に、海岸線をも意識した防衛線であったことを物語る場所である。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/View_of_the_Old_Dragon_Head.jpg",
    imageCaption: "渤海に突き出す老龍頭の城壁",
    credit: "写真: Dquai / Wikimedia Commons, CC BY-SA 4.0",
    mapX: 369,
    mapY: 150,
  },
  {
    name: "{{慕田峪|ぼでんよく}}",
    subtitle: "険しい山稜に築かれた保存状態良好な区間",
    location: "北京市懐柔区",
    description:
      "北京市街の北東に位置し、緑豊かな山稜に沿って城壁が幾重にも連なる区間。明代に大規模な改修を受けた石造りの城壁は保存状態が良く、見張り台（{{敵楼|てきろう}}）の数が多いことでも知られる。八達嶺に比べて観光客が少なく、静かに城壁歩きを楽しめる区間として近年人気を集めている。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Wall_of_China_at_Mutianyu.JPG",
    imageCaption: "山稜に沿って連なる慕田峪長城",
    credit: "写真: CTLiotta / Wikimedia Commons, CC0",
    mapX: 334,
    mapY: 136,
  },
  {
    name: "{{八達嶺|はったつれい}}",
    subtitle: "最も広く知られる観光の定番区間",
    location: "北京市延慶区",
    description:
      "北京から日帰りで訪れやすく、万里の長城といえばまずこの区間の姿が思い浮かぶという、最も有名な観光地区間。明代に軍事上の要衝として大規模に改修され、1957年には中国で最初に一般公開された長城区間となった。歴代の外国要人が公式に訪問する定番の観光ルートとしても知られる。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Badaling_China_Great-Wall-of-China-01.jpg",
    imageCaption: "整備された八達嶺長城の城壁と見張り台",
    credit: "写真: Cccefalon / Wikimedia Commons, CC BY-SA 3.0",
    eraId: "qin",
    eventTitle: "万里の長城の修築",
    mapX: 327,
    mapY: 132,
  },
  {
    name: "{{雁門関|がんもんかん}}",
    subtitle: "「中華第一関」と称される内陸の要衝",
    location: "山西省忻州市代県",
    description:
      "山西省北部の峠に築かれた関所で、南北を結ぶ交通の難所を扼する軍事上の要地として、匈奴や北方遊牧民との攻防の舞台に幾度となく登場する。渤海側の山海関・西端の嘉峪関と並び「中華第一関」を称することもある古くからの要衝で、峠道沿いには今も複数の門や城壁が残されている。",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Barbican_gate_of_Yanmen_Pass_(20250712165843).jpg",
    imageCaption: "山峡にそびえる雁門関の関門",
    credit: "写真: N509FZ / Wikimedia Commons, CC BY-SA 4.0",
    mapX: 302,
    mapY: 157,
  },
  {
    name: "{{嘉峪関|かよくかん}}",
    subtitle: "万里の長城 最西端の関所「天下第一雄関」",
    location: "甘粛省嘉峪関市",
    description:
      "明代に築かれた万里の長城の西の果てに立つ関所で、その先はもう漢民族の版図の外という意味を込めて「天下第一雄関」と呼ばれた。西方へ旅立つ兵士や商隊が抱いた望郷・不安の思いは、後世多くの詩に詠まれている。この先はシルクロードが西域へと続く道でもあり、詳しくは別ページ「シルクロードとは」でも紹介している。",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/JiayuguanFort.jpg",
    imageCaption: "「天下第一雄関」嘉峪関の城楼",
    credit: "写真: Doron / Wikimedia Commons（CC BY-SA）",
    mapX: 204,
    mapY: 146,
  },
];

function resolveStop(spec) {
  if (!spec.eraId || !spec.eventTitle) return { ...spec, eventSlug: null };
  const era = ERAS.find((e) => e.id === spec.eraId);
  const event = era?.events.find((ev) => stripRuby(ev.title).includes(spec.eventTitle));
  return { ...spec, eventSlug: event?.slug || null };
}

const RESOLVED = STOPS.map(resolveStop);

// 中国本土＋海南島の輪郭。/world-heritageと同じ海岸線データ（Natural Earthベースの簡略化済み国境ポリゴン、
// 経緯度→緯度補正付き正距円筒図法で投影）を再利用している。
const CHINA_OUTLINE =
  "M294.9,341.64L288.42,346.09L282.27,343.22L282.06,335.26L285.75,331.07L293.94,328.48L298.25,328.7L299.93,332.23L296.64,336.3L294.9,341.64Z " +
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";

const TAIWAN_OUTLINE =
  "M380.66,288.78L376.15,303.61L372.94,311.2L368.99,303.39L368.13,296.53L372.54,287.45L378.54,280.45L381.97,283.2L380.66,288.78Z";

const REGION_LABELS = [
  { label: "北京", x: 340, y: 145, dx: -12, dy: 20, anchor: "end" },
  { label: "内モンゴル自治区", x: 420, y: 90, anchor: "middle" },
  { label: "新疆・シルクロード", x: 105, y: 165, anchor: "middle" },
  { label: "チベット", x: 195, y: 265, anchor: "middle" },
];

function GreatWallMap({ stops }) {
  return (
    <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        実際の海岸線をもとにした中国の位置関係図です。朱色の番号は下の一覧の区間・関所で、東の山海関から西の嘉峪関まで、
        実際にはおよそ2,000km以上離れた広い範囲に長城が延びています。
      </p>
      <svg viewBox="0 0 500 366" style={{ width: "100%", maxHeight: 400, display: "block", margin: "0 auto" }}>
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />
        <path d={TAIWAN_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />

        {REGION_LABELS.map((r, i) => (
          <text
            key={`region-${i}`}
            x={r.x + (r.dx || 0)}
            y={r.y + (r.dy || 0)}
            textAnchor={r.anchor}
            style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 10.5, fill: COLORS.inkSoft, opacity: 0.85 }}
          >
            {r.label}
          </text>
        ))}

        <polyline
          points={stops.map((s) => `${s.mapX},${s.mapY}`).join(" ")}
          fill="none"
          stroke={COLORS.vermilionSoft}
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {stops.map((stop, i) => (
          <g key={i}>
            <circle cx={stop.mapX} cy={stop.mapY} r="7.5" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="1.4" />
            <text
              x={stop.mapX}
              y={stop.mapY}
              textAnchor="middle"
              dominantBaseline="central"
              style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 8.5, fontWeight: 700, fill: "#FBF8F0" }}
            >
              {i + 1}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function GreatWallPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          万里の長城とは？
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 20 }}>
          <RubyText
            text={
              "戦国時代に各国が個別に築いた防壁を、天下を統一した秦の始皇帝が連結・修築させたのが始まりとされる万里の長城。" +
              "以後も歴代の王朝が北方の遊牧民に備えて築城を重ね、現在観光地として知られる姿の多くは、明代に大規模な改修が" +
              "施されたものである。東は渤海に臨む{{山海関|さんかいかん}}から、西は砂漠の縁に立つ{{嘉峪関|かよくかん}}まで、" +
              "総延長は2万kmを超えるとされる。"
            }
          />
        </p>

        <div
          className="relative"
          style={{ width: "100%", height: 220, backgroundColor: "#EFE7D0", border: "1px solid #DCD3B8", overflow: "hidden", marginBottom: 24 }}
        >
          <HeritageThumb
            imageUrl="https://commons.wikimedia.org/wiki/Special:FilePath/The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
            name="金山嶺長城"
            type="building"
          />
          <span
            className="absolute"
            style={{
              left: 0,
              right: 0,
              bottom: 0,
              padding: "18px 12px 8px",
              fontSize: 11.5,
              color: "#FBF8F0",
              background: "linear-gradient(to top, rgba(30,20,10,0.72), rgba(30,20,10,0))",
            }}
          >
            <RubyText text="山稜に沿って蛇行する金山嶺長城。明代改修区間の中でも特に景観が美しいことで知られる" />
          </span>
        </div>
        <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: -18, marginBottom: 24 }}>
          {"写真: Severin.stalder / Wikimedia Commons, CC BY-SA 3.0"}
        </div>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            万里の長城の歴史
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText
              text={
                "「万里の長城」という一つの城壁が最初から存在したわけではない。春秋戦国時代、{{燕|えん}}・{{趙|ちょう}}・{{秦|しん}}・" +
                "{{斉|せい}}・{{魏|ぎ}}・{{楚|そ}}など各国は、北方の遊牧民や敵国からの侵入に備え、それぞれ独自に土を突き固めた防壁を" +
                "築いていた。紀元前221年に中国を統一した秦の始皇帝は、将軍{{蒙恬|もうてん}}に命じてこれらの防壁を連結・修築させ、" +
                "西は{{臨洮|りんとう}}（現・甘粛省）から東は{{遼東|りょうとう}}に至る大規模な防衛線を築き上げた。これが「万里の長城」の" +
                "直接の起源とされる。工事には全国から徴発された数十万人ともいわれる民衆が動員され、過酷な労役は秦への不満を高める" +
                "一因にもなったと伝えられる。"
              }
            />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginBottom: 10 }}>
            <RubyText
              text={
                "前漢代には、{{張騫|ちょうけん}}の西域派遣を機に長城はさらに西の{{敦煌|とんこう}}付近まで延伸され、シルクロード交易路を" +
                "保護する役割も担うようになった。一方、周辺の異民族との融和や外交を重視した唐代には大規模な長城建設はほとんど" +
                "行われず、長城が再び大工事の対象となるのは、北方民族の脅威が続いた明代のことである。特に1449年の" +
                "{{土木の変|どぼくのへん}}で皇帝が北方民族の捕虜となる屈辱を味わって以降、明は防衛強化のため長城の大改修を進め、" +
                "土を突き固めただけの脆い構造から、レンガや石材を用いた堅固な城壁へと造り替えていった。現在、観光地として世界的に" +
                "知られる八達嶺・慕田峪・金山嶺などの姿は、いずれもこの明代の大改修によるものである。"
              }
            />
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft }}>
            <RubyText
              text={
                "1644年、明の武将{{呉三桂|ごさんけい}}が長城最東端の関門{{山海関|さんかいかん}}を開いて清軍を招き入れたことで、明は" +
                "滅亡し清が中国支配を確立した。満州族の清は長城の外側にあたる満州の出身であり、長城の北側も版図に含めたことで、" +
                "この巨大な防衛線は軍事上の意味をほぼ失うことになる。皮肉にも、万里の長城の歴史における最後の大きな出来事は、" +
                "長城そのものが破られた瞬間だったのである。"
              }
            />
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            主要な区間・関所
          </h2>

          <GreatWallMap stops={RESOLVED} />

          <div className="flex flex-col gap-4">
            {RESOLVED.map((stop, i) => (
              <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
                <div className="flex gap-3 p-3">
                  <div
                    className="flex items-center justify-center shrink-0 relative"
                    style={{ width: 96, height: 96, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}
                  >
                    <HeritageThumb imageUrl={stop.imageUrl} name={stop.name} type="building" />
                    <span
                      className="absolute flex items-center justify-center"
                      style={{
                        top: 4,
                        left: 4,
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        backgroundColor: COLORS.vermilion,
                        color: "#FBF8F0",
                        fontFamily: "'Noto Serif SC', serif",
                        fontSize: 10,
                        fontWeight: 700,
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                        <RubyText text={stop.name} />
                      </span>
                    </div>
                    <p style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 2 }}>
                      <RubyText text={stop.subtitle} />
                    </p>
                    {stop.location && (
                      <div style={{ fontSize: 11, color: COLORS.inkSoft, marginTop: 2 }}>
                        <span aria-hidden>📍</span> {stop.location}
                      </div>
                    )}
                    <p style={{ fontSize: 12, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 4 }}>
                      <RubyText text={stop.description} />
                    </p>
                    {stop.credit && <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 4 }}>{stop.credit}</div>}
                  </div>
                </div>
                {stop.eventSlug && (
                  <div className="px-3 pb-3">
                    <a
                      href={`/events/${stop.eventSlug}`}
                      style={{ fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
                    >
                      関連する出来事を年表で読む →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 19, fontWeight: 900, color: COLORS.ink, marginBottom: 10 }}>
            万里の長城にまつわる逸話・豆知識
          </h2>
          <div className="flex flex-col gap-3">
            <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "14px 16px" }}>
              <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                夫を長城建設で失った女性の伝説「孟姜女泣長城」
              </p>
              <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft }}>
                <RubyText
                  text={
                    "秦代の長城建設は数十万人ともいわれる民衆を動員した過酷な労役であり、これを象徴する説話として" +
                    "「{{孟姜女|もうきょうじょ}}泣長城」が広く語り継がれている。夫が長城建設に徴発されたまま帰らず、後を追って" +
                    "長城のもとへたどり着いた孟姜女が、夫の死を知って泣き崩れたところ、城壁の一部が崩れ落ちて夫の遺骨が現れたという。" +
                    "史実そのものではないが、民衆にとって長城建設がいかに過酷な労苦であったかを今に伝える物語である。"
                  }
                />
              </p>
            </div>
            <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "14px 16px" }}>
              <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                「宇宙から肉眼で見える唯一の建造物」は本当か？
              </p>
              <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft }}>
                万里の長城は「宇宙から肉眼で見える唯一の人工建造物」としてしばしば語られるが、実際に宇宙へ行った多くの宇宙飛行士は、
                低軌道からでも肉眼で長城を確認するのは難しいと証言しており、この話は広く流布した誤解（都市伝説）とされる。
                幅数mから十数m程度の構造物は、月はおろか地球低軌道からでも肉眼で識別するのは容易ではない。
              </p>
            </div>
            <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "14px 16px" }}>
              <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14, fontWeight: 700, color: COLORS.ink, marginBottom: 6 }}>
                総延長は2万kmを超える
              </p>
              <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft }}>
                中国国家文物局が2012年に発表した調査結果によれば、歴代の各王朝が築いた城壁・関所・壕なども含めた万里の長城の
                総延長は21,196.18kmにおよぶとされる。単一の連続した壁ではなく、各時代に築かれた城壁網の総体であることを踏まえた数字であり、
                地球一周（約4万km）の半分以上に相当する規模である。
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            長城が西へ続く先のシルクロードや、中国の他の城郭・世界遺産も別ページで紹介しています。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/silk-road" variant="solid">シルクロードとは</NavButton>
            <NavButton href="/china-castles" variant="outline">中国の城まとめを見る</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
