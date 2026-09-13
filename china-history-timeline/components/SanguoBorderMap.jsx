"use client";

import { useEffect, useState } from "react";
import { COLORS, stripRuby } from "@/lib/constants";
import { RubyText } from "@/components/Ruby";

// 中国本土＋海南島の輪郭（/sanguo-battlesの合戦マップと同じ、実際の海岸線をもとにした投影データ）
const CHINA_OUTLINE =
  "M294.9,341.64L288.42,346.09L282.27,343.22L282.06,335.26L285.75,331.07L293.94,328.48L298.25,328.7L299.93,332.23L296.64,336.3L294.9,341.64Z " +
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";
const TAIWAN_OUTLINE =
  "M380.66,288.78L376.15,303.61L372.94,311.2L368.99,303.39L368.13,296.53L372.54,287.45L378.54,280.45L381.97,283.2L380.66,288.78Z";

// 三国志の舞台となる中国内陸部を、大まかな「州」単位で簡略化した地図座標（史実の州境を厳密に示すものではない）
const PROVINCES = {
  youzhou: "290,128 336,128 332,100 315,106 300,120",
  jizhou: "265,128 336,128 336,172 296,182 262,166 258,140",
  liangzhou: "192,140 258,132 262,166 252,205 214,215 188,182 184,158",
  guanzhong: "252,205 262,166 296,182 296,200 278,222",
  siliyu: "296,182 336,172 345,205 338,215 310,210 300,215 296,200",
  xuzhou: "338,215 345,205 336,172 336,128 332,100 385,95 385,135 372,136.5 369.5,138 363.5,142 358.5,146 355.5,150 345,154 344.5,158 347,162 353.5,166 357.5,170 364,182 356,190",
  yizhou: "214,215 252,205 278,222 268,255 260,270 215,270 205,245 195,220",
  jingzhou: "268,255 278,222 296,200 300,215 310,210 338,215 345,240 330,270 260,270",
  huainan: "338,215 356,190 362,200 368,210 370,220 365,233 345,240",
  jiangdong: "365,233 372,245 358,270 330,270 345,240",
  jiaozhou: "215,270 358,270 340,290 298,296 232,296 210,282",
};

// 曹操・孫氏・劉備の系譜は最後まで色を保ち、西晋統一で金色に収束させる
const C = {
  cao: "#4F6FA0",
  sun: COLORS.vermilion,
  liu: "#5F7A3D",
  jin: COLORS.gold,
  gongsun: "#7A9E9F",
  yuanshao: "#7B7FA8",
  taoqian: "#C08A45",
  yuanshu: "#B06B8F",
  liubiao: "#8C9B6E",
  liuzhang: "#8A6BA0",
  mahan: "#A67C52",
};

const FRAMES = [
  {
    year: "190年頃",
    era: "群雄割拠",
    desc: "{{黄巾|こうきん}}の乱の後、後漢の統制は崩れ、各地の群雄がそれぞれ自立した勢力圏を築いていた。",
    factions: [
      { name: "{{公孫瓚|こうそんさん}}", color: C.gongsun, provinces: ["youzhou"], label: { x: 315, y: 116 } },
      { name: "{{袁紹|えんしょう}}", color: C.yuanshao, provinces: ["jizhou"], label: { x: 292, y: 153 } },
      { name: "{{曹操|そうそう}}", color: C.cao, provinces: ["siliyu"], label: { x: 317, y: 200 } },
      { name: "{{陶謙|とうけん}}", color: C.taoqian, provinces: ["xuzhou"], label: { x: 355, y: 155 } },
      { name: "{{袁術|えんじゅつ}}", color: C.yuanshu, provinces: ["huainan"], label: { x: 358, y: 215 } },
      { name: "{{劉表|りゅうひょう}}", color: C.liubiao, provinces: ["jingzhou"], label: { x: 303, y: 233 } },
      { name: "{{孫堅|そんけん}}", color: C.sun, provinces: ["jiangdong"], label: { x: 354, y: 252 } },
      { name: "{{劉璋|りゅうしょう}}", color: C.liuzhang, provinces: ["yizhou"], label: { x: 236, y: 238 } },
      { name: "{{馬騰|ばとう}}・{{韓遂|かんすい}}", color: C.mahan, provinces: ["liangzhou", "guanzhong"], label: { x: 249, y: 183 } },
    ],
  },
  {
    year: "200年",
    era: "{{官渡|かんと}}の戦い",
    desc: "{{曹操|そうそう}}が{{兗州|えんしゅう}}・{{豫州|よしゅう}}・徐州・淮南を平定し、河北の{{袁紹|えんしょう}}と華北の覇権を賭けて{{官渡|かんと}}で激突する。",
    factions: [
      { name: "{{袁紹|えんしょう}}", color: C.yuanshao, provinces: ["jizhou", "youzhou"], label: { x: 304, y: 135 } },
      { name: "{{曹操|そうそう}}", color: C.cao, provinces: ["siliyu", "xuzhou", "huainan"], label: { x: 343, y: 190 } },
      { name: "{{劉表|りゅうひょう}}", color: C.liubiao, provinces: ["jingzhou"], label: { x: 303, y: 233 } },
      { name: "{{孫策|そんさく}}・{{孫権|そんけん}}", color: C.sun, provinces: ["jiangdong"], label: { x: 354, y: 252 } },
      { name: "{{劉璋|りゅうしょう}}", color: C.liuzhang, provinces: ["yizhou"], label: { x: 236, y: 238 } },
      { name: "{{馬騰|ばとう}}・{{韓遂|かんすい}}", color: C.mahan, provinces: ["liangzhou", "guanzhong"], label: { x: 249, y: 183 } },
    ],
  },
  {
    year: "208年",
    era: "{{赤壁|せきへき}}の戦い",
    desc: "{{官渡|かんと}}の勝利後、{{曹操|そうそう}}は河北を平定して華北をほぼ統一。{{劉表|りゅうひょう}}死後の荊州も接収し、南下する大軍が長江に迫る。",
    factions: [
      { name: "{{曹操|そうそう}}", color: C.cao, provinces: ["youzhou", "jizhou", "liangzhou", "guanzhong", "siliyu", "xuzhou", "huainan", "jingzhou"], label: { x: 305, y: 180 } },
      { name: "{{孫権|そんけん}}", color: C.sun, provinces: ["jiangdong"], label: { x: 354, y: 252 } },
      { name: "{{劉璋|りゅうしょう}}", color: C.liuzhang, provinces: ["yizhou"], label: { x: 236, y: 238 } },
    ],
  },
  {
    year: "215年頃",
    era: "天下三分の形成",
    desc: "{{赤壁|せきへき}}の敗戦で{{曹操|そうそう}}は長江以北へ退き、{{劉備|りゅうび}}が荊州から{{益州|えきしゅう}}へと勢力を広げて、天下三分の形勢が固まっていく。",
    factions: [
      { name: "{{曹操|そうそう}}（魏）", color: C.cao, provinces: ["youzhou", "jizhou", "liangzhou", "guanzhong", "siliyu", "xuzhou", "huainan"], label: { x: 305, y: 172 } },
      { name: "{{劉備|りゅうび}}", color: C.liu, provinces: ["yizhou", "jingzhou"], label: { x: 270, y: 236 } },
      { name: "{{孫権|そんけん}}", color: C.sun, provinces: ["jiangdong"], label: { x: 354, y: 252 } },
    ],
  },
  {
    year: "222年",
    era: "三国鼎立",
    desc: "{{夷陵|いりょう}}の戦いで蜀漢を退けた呉が荊州全域を確保し、魏・蜀・呉三国が並び立つ形勢が完成する。",
    factions: [
      { name: "魏", color: C.cao, provinces: ["youzhou", "jizhou", "liangzhou", "guanzhong", "siliyu", "xuzhou", "huainan"], label: { x: 305, y: 172 } },
      { name: "蜀漢", color: C.liu, provinces: ["yizhou"], label: { x: 236, y: 238 } },
      { name: "呉", color: C.sun, provinces: ["jingzhou", "jiangdong", "jiaozhou"], label: { x: 311, y: 256 } },
    ],
  },
  {
    year: "263年",
    era: "蜀漢の滅亡",
    desc: "魏が蜀漢を滅ぼし、天下は魏と呉の二強にまで絞られる。",
    factions: [
      { name: "魏", color: C.cao, provinces: ["youzhou", "jizhou", "liangzhou", "guanzhong", "siliyu", "xuzhou", "huainan", "yizhou"], label: { x: 296, y: 180 } },
      { name: "呉", color: C.sun, provinces: ["jingzhou", "jiangdong", "jiaozhou"], label: { x: 311, y: 256 } },
    ],
  },
  {
    year: "280年",
    era: "天下統一（西晋）",
    desc: "魏の禅譲を受けた西晋が呉を滅ぼし、三国時代は幕を閉じて中国は再び統一される。",
    factions: [
      {
        name: "西晋",
        color: C.jin,
        provinces: ["youzhou", "jizhou", "liangzhou", "guanzhong", "siliyu", "xuzhou", "huainan", "yizhou", "jingzhou", "jiangdong", "jiaozhou"],
        label: { x: 300, y: 201 },
      },
    ],
  },
];

const STEP_MS = 3200;

export function SanguoBorderMap() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return undefined;
    if (index >= FRAMES.length - 1) {
      setPlaying(false);
      return undefined;
    }
    const timer = setTimeout(() => setIndex((i) => Math.min(i + 1, FRAMES.length - 1)), STEP_MS);
    return () => clearTimeout(timer);
  }, [playing, index]);

  const frame = FRAMES[index];

  // 州id → 現在のフレームでの所属勢力（色・勢力名）を引く
  const ownerByProvince = {};
  frame.factions.forEach((f) => {
    f.provinces.forEach((p) => {
      ownerByProvince[p] = f;
    });
  });

  function handlePlayClick() {
    if (!playing && index >= FRAMES.length - 1) setIndex(0);
    setPlaying((p) => !p);
  }

  return (
    <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        184年の黄巾の乱から280年の天下統一まで、勢力図の移り変わりを簡略化した州単位のアニメーションでたどります（州境は史実を厳密に示すものではありません）。
      </p>

      <svg viewBox="0 0 500 366" style={{ width: "100%", maxHeight: 400, display: "block", margin: "0 auto" }}>
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />
        <path d={TAIWAN_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />

        {Object.entries(PROVINCES).map(([id, points]) => {
          const owner = ownerByProvince[id];
          return (
            <polygon
              key={id}
              points={points}
              fill={owner ? owner.color : "#DCD3B8"}
              fillOpacity={owner ? 0.82 : 0}
              stroke={COLORS.mist}
              strokeWidth="1"
              strokeOpacity={0.6}
              style={{ transition: "fill 900ms ease, fill-opacity 900ms ease" }}
            />
          );
        })}

        <path d={CHINA_OUTLINE} fill="none" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />
        <path d={TAIWAN_OUTLINE} fill="none" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />

        {frame.factions.map((f, i) => (
          <text
            key={`${index}-${i}`}
            x={f.label.x}
            y={f.label.y}
            textAnchor="middle"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: 11.5,
              fontWeight: 700,
              fill: "#FBF8F0",
              paintOrder: "stroke",
              stroke: COLORS.ink,
              strokeWidth: 2.5,
              strokeLinejoin: "round",
            }}
          >
            {stripRuby(f.name)}
          </text>
        ))}
      </svg>

      <div className="flex items-center gap-2 flex-wrap mt-3">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          aria-label="前の時代へ"
          style={{
            width: 30,
            height: 30,
            border: `1px solid ${COLORS.mist}`,
            backgroundColor: "#FBF8F0",
            color: COLORS.ink,
            opacity: index === 0 ? 0.35 : 1,
          }}
        >
          ←
        </button>
        <button
          type="button"
          onClick={handlePlayClick}
          style={{
            height: 30,
            padding: "0 14px",
            fontFamily: "'Noto Serif SC', serif",
            fontSize: 12,
            fontWeight: 700,
            border: `1px solid ${COLORS.vermilion}`,
            backgroundColor: playing ? "transparent" : COLORS.vermilion,
            color: playing ? COLORS.vermilion : "#fff",
          }}
        >
          {playing ? "一時停止" : index >= FRAMES.length - 1 ? "はじめから再生" : "再生"}
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(FRAMES.length - 1, i + 1))}
          disabled={index === FRAMES.length - 1}
          aria-label="次の時代へ"
          style={{
            width: 30,
            height: 30,
            border: `1px solid ${COLORS.mist}`,
            backgroundColor: "#FBF8F0",
            color: COLORS.ink,
            opacity: index === FRAMES.length - 1 ? 0.35 : 1,
          }}
        >
          →
        </button>

        <div className="flex items-center gap-1.5 flex-wrap ml-1">
          {FRAMES.map((f, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setPlaying(false);
                setIndex(i);
              }}
              title={`${f.year} ${f.era}`}
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: 10.5,
                padding: "3px 7px",
                border: `1px solid ${i === index ? COLORS.vermilion : COLORS.mist}`,
                backgroundColor: i === index ? COLORS.vermilion : "transparent",
                color: i === index ? "#fff" : COLORS.inkSoft,
              }}
            >
              {f.year}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 12, paddingTop: 10, borderTop: `1px solid ${COLORS.mist}` }}>
        <div className="flex items-baseline gap-2 flex-wrap">
          <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
            <RubyText text={frame.era} />
          </span>
          <span style={{ fontSize: 12, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>{frame.year}</span>
        </div>
        <p style={{ fontSize: 12, lineHeight: 1.8, color: COLORS.inkSoft, marginTop: 4 }}>
          <RubyText text={frame.desc} />
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
          {frame.factions.map((f, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span style={{ width: 11, height: 11, backgroundColor: f.color, display: "inline-block", border: `1px solid ${COLORS.ink}` }} />
              <span style={{ fontSize: 11.5, color: COLORS.inkSoft }}>
                <RubyText text={f.name} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
