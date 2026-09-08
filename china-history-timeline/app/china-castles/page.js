import { ERAS, stripRuby, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageThumb, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "中国の城まとめ";
const fullTitle = `中国の城まとめ | ${SITE_NAME}`;
const description =
  "城子崖遺跡、万里の長城、紫禁城、山海関など、このサイトの年表に登場する中国の城郭・関所をまとめました。それぞれがどの時代に築かれ、どんな出来事の舞台になったのかとあわせて紹介します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/china-castles" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/china-castles" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

// 各城を、由来する王朝(era)・その中の該当イベントのタイトル(部分一致)・
// heritage配列内での表記名(部分一致)で特定する
// location: 所在地情報 / mapX,mapY: 下の地図(viewBox 0 0 500 366)上での位置。
// 実際の経緯度を/world-heritageと同じ図法（緯度補正付き正距円筒図法）で投影した座標を基準にしている。
const SITES = [
  { eraId: "neolithic", eventTitle: "竜山", heritageName: "城子崖", location: "山東省章丘県", mapX: 348, mapY: 175 },
  { eraId: "shang", eventTitle: "殷の建国", heritageName: "鄭州商城", location: "河南省鄭州市", mapX: 319, mapY: 193 },
  { eraId: "chunqiu", eventTitle: "覇者となる", heritageName: "斉国故城", location: "山東省淄博市臨淄区", mapX: 354, mapY: 174 },
  { eraId: "qin", eventTitle: "万里の長城の修築", heritageName: "万里の長城", location: "北京市（八達嶺）ほか", mapX: 327, mapY: 132 },
  { eraId: "nanbei", eventTitle: "劉宋の建国", heritageName: "建康城遺跡", location: "江蘇省南京市", mapX: 358, mapY: 218 },
  { eraId: "ming", eventTitle: "北京遷都", heritageName: "紫禁城", location: "北京市", mapX: 340, mapY: 145 },
  { eraId: "ming", eventTitle: "土木の変", heritageName: "土木堡遺跡", location: "河北省懐来県", mapX: 333, mapY: 141 },
  { eraId: "qing", eventTitle: "清の北京入城", heritageName: "山海関", location: "河北省秦皇島市", mapX: 365, mapY: 144 },
];

function resolveSite(spec) {
  const era = ERAS.find((e) => e.id === spec.eraId);
  if (!era) return null;
  const event = era.events.find((ev) => stripRuby(ev.title).includes(spec.eventTitle));
  const heritage = event?.heritage?.find((h) => stripRuby(h.name).includes(spec.heritageName));
  if (!heritage) return null;
  return { ...heritage, era, eventSlug: event.slug, location: spec.location, mapX: spec.mapX, mapY: spec.mapY };
}

const RESOLVED = SITES.map(resolveSite).filter(Boolean);

// 中国本土＋海南島の輪郭。/world-heritageと同じ海岸線データ（Natural Earthベースの簡略化済み国境ポリゴン、
// 経緯度→緯度補正付き正距円筒図法で投影）を再利用している。
const CHINA_OUTLINE =
  "M294.9,341.64L288.42,346.09L282.27,343.22L282.06,335.26L285.75,331.07L293.94,328.48L298.25,328.7L299.93,332.23L296.64,336.3L294.9,341.64Z " +
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";

// 台湾。/world-heritageと同じ地物データ（同じ図法・同じ座標系で投影）
const TAIWAN_OUTLINE =
  "M380.66,288.78L376.15,303.61L372.94,311.2L368.99,303.39L368.13,296.53L372.54,287.45L378.54,280.45L381.97,283.2L380.66,288.78Z";

// 世界的に知られる主要都市（点＋ラベル）。座標は上の海岸線データと同じ図法で経緯度から算出。
const REFERENCE_CITIES = [
  { label: "上海", x: 378, y: 226, dx: 10, dy: -6, anchor: "start" },
  { label: "広州", x: 317, y: 300, dx: -10, dy: -6, anchor: "end" },
  { label: "香港", x: 324, y: 308, dx: 10, dy: 13, anchor: "start" },
  { label: "成都", x: 248, y: 231, dx: -10, dy: -6, anchor: "end" },
  { label: "ラサ", x: 151, y: 240, dx: 0, dy: 17, anchor: "middle" },
  { label: "ウルムチ", x: 124, y: 109, dx: 0, dy: 16, anchor: "middle" },
  { label: "フフホト", x: 305, y: 137, dx: 0, dy: -9, anchor: "middle" },
];

// 世界的に知られる地方・地域名（点なし、範囲を示すラベルのみ）
const REGION_LABELS = [
  { label: "北京", x: 340, y: 145, dx: 15, dy: 9, anchor: "start" },
  { label: "西安", x: 284, y: 197, dx: 0, dy: 33, anchor: "middle" },
  { label: "内モンゴル自治区", x: 420, y: 90, anchor: "middle" },
  { label: "新疆・シルクロード", x: 105, y: 165, anchor: "middle" },
  { label: "チベット", x: 195, y: 265, anchor: "middle" },
  { label: "台湾", x: 375, y: 296, dx: 10, dy: 4, anchor: "start" },
  { label: "海南島", x: 290, y: 337, dx: 0, dy: 17, anchor: "middle" },
];

function ChinaMap({ sites }) {
  return (
    <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        実際の海岸線をもとにした中国の位置関係図です。朱色の番号は下の一覧の城、白丸は主要都市の目安です。
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

        {REFERENCE_CITIES.map((c, i) => (
          <g key={`city-${i}`}>
            <circle cx={c.x} cy={c.y} r="3.5" fill={COLORS.paper} stroke={COLORS.ink} strokeWidth="1.2" />
            <text
              x={c.x + c.dx}
              y={c.y + c.dy}
              textAnchor={c.anchor}
              style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 10, fill: COLORS.inkSoft }}
            >
              {c.label}
            </text>
          </g>
        ))}

        {sites.map((site, i) => (
          <g key={i}>
            <circle cx={site.mapX} cy={site.mapY} r="8" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="1.5" />
            <text
              x={site.mapX}
              y={site.mapY}
              textAnchor="middle"
              dominantBaseline="central"
              style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 9, fontWeight: 700, fill: "#FBF8F0" }}
            >
              {i + 1}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function ChinaCastlesPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国の城まとめ
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          中国史には、都を守る城壁や国境を分かつ長城、要衝を扼する関所など、数多くの「城」が登場します。
          ここでは、このサイトの年表に登場する城郭・関所を、由来となった時代とあわせて紹介します。
        </p>

        <div className="relative">
          <div className="sticky top-3 z-10">
            <ChinaMap sites={RESOLVED} />
          </div>

          <div className="flex flex-col gap-4">
            {RESOLVED.map((site, i) => (
              <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
                <div className="flex gap-3 p-3">
                  <div
                    className="flex items-center justify-center shrink-0 relative"
                    style={{ width: 96, height: 96, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}
                  >
                    <HeritageThumb imageUrl={site.imageUrl} name={site.name} type={site.type} />
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
                        <RubyText text={site.name} />
                      </span>
                      <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>{site.era.name}</span>
                    </div>
                    {site.location && (
                      <div style={{ fontSize: 11, color: COLORS.vermilionSoft, marginTop: 2 }}>
                        <span aria-hidden>📍</span> {site.location}
                      </div>
                    )}
                    <p style={{ fontSize: 12, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 4 }}>
                      <RubyText text={site.description} />
                    </p>
                    {site.credit && <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 4 }}>{site.credit}</div>}
                  </div>
                </div>
                <div className="px-3 pb-3">
                  <a
                    href={`/events/${site.eventSlug}`}
                    style={{ fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
                  >
                    関連する出来事を年表で読む →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            歴代王朝の都の移り変わりや、中国の世界遺産も別ページで紹介しています。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/china-capitals" variant="solid">歴代王朝の都一覧を見る</NavButton>
            <NavButton href="/world-heritage" variant="outline">中国の世界遺産まとめを見る</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
