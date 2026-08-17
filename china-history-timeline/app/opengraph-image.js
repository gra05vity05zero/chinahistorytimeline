import { ImageResponse } from "next/og";
import { COLORS } from "@/lib/data";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "中国五千年史 — 文明の黎明から現代までの中国史年表";

// Satori（next/ogの内部レンダラ）は日本語グリフを内蔵していないため、
// Google FontsからCJKサブセットのみを動的に取得してレンダリングする。
// 古いSafari向けUAを指定するとwoff2ではなくttf形式が返るため、Satoriで読み込める。
async function loadFont(text, weight) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@${weight}&text=${encodeURIComponent(text)}`,
      { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2" } }
    ).then((r) => r.text());
    const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:woff|truetype|opentype)'\)/);
    if (!match) return null;
    const data = await fetch(match[1]).then((r) => r.arrayBuffer());
    return data;
  } catch {
    return null;
  }
}

export default async function Image() {
  const title = "中国五千年史";
  const subtitle = "文明の黎明から現代までの年表";

  const [titleFont, subtitleFont] = await Promise.all([
    loadFont(`${title}史`, 900),
    loadFont(subtitle, 500),
  ]);

  const fonts = [];
  if (titleFont) fonts.push({ name: "title", data: titleFont, weight: 900, style: "normal" });
  if (subtitleFont) fonts.push({ name: "subtitle", data: subtitleFont, weight: 500, style: "normal" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.paper,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", position: "absolute", top: 28, left: 28, right: 28, bottom: 28, border: `2px solid ${COLORS.gold}` }} />
        <div
          style={{
            display: "flex",
            width: 140,
            height: 140,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.vermilion,
            color: COLORS.paper,
            fontSize: 78,
            fontFamily: titleFont ? "title" : undefined,
            fontWeight: 900,
            marginBottom: 40,
          }}
        >
          史
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 900,
            color: COLORS.ink,
            fontFamily: titleFont ? "title" : undefined,
            letterSpacing: 6,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: COLORS.inkSoft,
            marginTop: 22,
            fontFamily: subtitleFont ? "subtitle" : undefined,
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
