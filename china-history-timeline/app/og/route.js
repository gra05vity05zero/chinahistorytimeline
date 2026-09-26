import { ImageResponse } from "next/og";
import { COLORS, SITE_NAME } from "@/lib/constants";

// ページごとのOGP画像を生成するルート。buildOpenGraph（lib/constants.js）が
// 各ページのタイトル等をクエリに詰めたURLを og:image に設定する。
// 例: /og?t=万里の長城とは？&s=歴史と見どころを解説&k=雑学&m=城
export const runtime = "edge";

const SIZE = { width: 1200, height: 630 };
const MAX_LEN = 80; // 任意の長文を描かせないための上限

// Satoriは日本語グリフを内蔵していないため、描画する文字だけのサブセットを
// Google Fontsから取得する（古いSafariのUAだとSatoriが読めるttfが返る）。
async function loadFont(text, weight) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@${weight}&text=${encodeURIComponent(text)}`,
      { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2" } }
    ).then((r) => r.text());
    const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:woff|truetype|opentype)'\)/);
    if (!match) return null;
    return await fetch(match[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

// タイトルの長さに応じて文字サイズを落とし、2〜3行に収める
function titleFontSize(title) {
  const len = [...title].length;
  if (len <= 8) return 110;
  if (len <= 13) return 90;
  if (len <= 20) return 72;
  if (len <= 30) return 60;
  return 50;
}

export async function GET(request) {
  const params = new URL(request.url).searchParams;
  const get = (key) => (params.get(key) || "").slice(0, MAX_LEN);
  const title = get("t") || SITE_NAME;
  const subtitle = get("s");
  const kicker = get("k");
  const seal = [...(get("m") || "史")][0];

  const [boldFont, regularFont] = await Promise.all([
    loadFont(`${title}${seal}${SITE_NAME}`, 900),
    loadFont(`${subtitle}${kicker}chinahistorytimeline.com`, 500),
  ]);
  const fonts = [];
  if (boldFont) fonts.push({ name: "bold", data: boldFont, weight: 900, style: "normal" });
  if (regularFont) fonts.push({ name: "regular", data: regularFont, weight: 500, style: "normal" });
  const bold = boldFont ? "bold" : undefined;
  const regular = regularFont ? "regular" : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: COLORS.paper,
          padding: "76px 88px 64px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", position: "absolute", top: 28, left: 28, right: 28, bottom: 28, border: `2px solid ${COLORS.gold}` }} />
        <div style={{ display: "flex", position: "absolute", top: 36, left: 36, right: 36, bottom: 36, border: `1px solid ${COLORS.mist}` }} />

        {/* 上段：印章＋見出しラベル */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              width: 96,
              height: 96,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.vermilion,
              color: COLORS.paper,
              fontSize: 60,
              fontWeight: 900,
              fontFamily: bold,
            }}
          >
            {seal}
          </div>
          {kicker ? (
            <div style={{ display: "flex", marginLeft: 28, fontSize: 36, color: COLORS.gold, fontFamily: regular, letterSpacing: 2 }}>
              {kicker}
            </div>
          ) : null}
        </div>

        {/* 中段：タイトル */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: 1 }}>
          <div
            style={{
              display: "flex",
              fontSize: titleFontSize(title),
              fontWeight: 900,
              color: COLORS.ink,
              fontFamily: bold,
              lineHeight: 1.25,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div style={{ display: "flex", fontSize: 36, color: COLORS.inkSoft, fontFamily: regular, marginTop: 20, lineHeight: 1.4 }}>
              {subtitle}
            </div>
          ) : null}
        </div>

        {/* 下段：サイト名 */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", width: 80, height: 2, backgroundColor: COLORS.vermilion, marginRight: 20 }} />
          <div style={{ display: "flex", fontSize: 34, fontWeight: 900, color: COLORS.ink, fontFamily: bold, letterSpacing: 4 }}>
            {SITE_NAME}
          </div>
          <div style={{ display: "flex", fontSize: 22, color: COLORS.inkSoft, fontFamily: regular, marginLeft: 20 }}>
            chinahistorytimeline.com
          </div>
        </div>
      </div>
    ),
    { ...SIZE, fonts }
  );
}
