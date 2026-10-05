"use client";

import { useEffect, useState } from "react";
import { COLORS, stripRuby } from "@/lib/constants";
import { RubyText } from "@/components/Ruby";

// 中国本土の輪郭（/chunqiu-zhanguo-battlesの合戦マップと同じ、実際の海岸線をもとにした投影データ）
const CHINA_OUTLINE =
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";

// 戦国七雄の舞台を、領有が入れ替わった単位で大まかに区切った地図座標（史実の国境を厳密に示すものではない）。
// 合戦マップと同じ図法（X ≈ 340 + 7.495×(経度-116.4) / Y ≈ 145 - 9.343×(緯度-39.9)）で主要都市の位置に合わせてあり、
// 海にはみ出す部分は輪郭でクリップされる
const REGIONS = {
  qin: "238,182 262,165 286,172 290,196 298,193 300,206 290,203 262,204 258,212 236,215", // 関中・隴西（咸陽）
  hexi: "286,172 286,148 298,142 298,193 290,196", // 河西・上郡
  bashu: "236,215 258,212 280,222 284,240 270,255 240,252 232,235", // 巴蜀（成都）
  hanzhong: "262,204 290,203 300,206 298,216 280,222 258,212", // 漢中
  hedong: "298,178 308,178 308,191 304,192 298,193", // 河東（安邑）
  yunzhong: "282,128 318,124 316,136 307,139 298,142 286,148", // 雲中・九原
  dai: "307,139 316,136 318,124 336,126 334,140 332,153 318,153 307,153", // 代
  taiyuan: "298,142 307,139 307,153 318,153 320,166 316,172 312,172 308,178 298,178", // 太原（晋陽）
  handan: "320,166 334,165 336,168 334,178 322,180 322,172 316,172", // 邯鄲
  zhongshan: "318,153 332,153 334,165 320,166", // 中山
  shangdang: "308,178 312,172 322,172 322,180 318,187 308,187", // 上党
  wei: "308,187 318,187 322,180 334,178 338,186 333,193 330,200 322,199 322,193 314,192 308,191", // 大梁・河内
  zhou: "304,192 308,191 314,192 314,198 304,198", // 洛陽
  han: "298,193 304,192 304,198 314,198 314,192 322,193 322,199 330,200 326,207 312,205 300,206", // 新鄭・宜陽
  nanyang: "300,206 312,205 326,207 322,216 310,220 298,216", // 南陽（宛）
  ying: "298,216 310,220 322,216 326,232 322,246 296,246 284,240 280,222", // 江漢平原（郢）
  chuSouth: "270,255 284,240 296,246 322,246 340,244 346,262 330,278 296,278 276,268", // 洞庭湖以南
  chuEast: "326,207 330,200 340,202 352,204 356,216 350,228 340,244 322,246 326,232 322,216", // 淮河流域（陳・寿春）
  song: "333,193 346,191 352,198 352,204 340,202 330,200", // 宋（睢陽・彭城）
  lu: "338,186 348,181 354,188 395,188 395,198 352,204 352,198 346,191 333,193", // 魯・泗上
  yue: "352,204 395,198 395,265 362,270 346,262 340,244 350,228 356,216", // 呉越の故地
  qi: "334,165 347,158 395,160 395,188 354,188 348,181 338,186 334,178 336,168", // 斉（臨淄）
  yan: "334,140 336,126 362,122 368,146 360,157 347,158 334,165 332,153", // 燕（薊）
  liaodong: "362,122 374,110 405,110 405,156 376,156 368,146", // 遼西・遼東
};

// 七雄は最後まで色を保ち、秦の墨色が地図を塗りつぶしていく様子で統一の過程を示す
const F = {
  qin: { name: "{{秦|しん}}", color: "#3B3530" },
  chu: { name: "{{楚|そ}}", color: COLORS.vermilion },
  qi: { name: "{{斉|せい}}", color: "#4F6FA0" },
  yan: { name: "{{燕|えん}}", color: "#5E9A9B" },
  zhao: { name: "{{趙|ちょう}}", color: "#5F7A3D" },
  wei: { name: "{{魏|ぎ}}", color: "#C08A45" },
  han: { name: "{{韓|かん}}", color: "#8A6BA0" },
  yue: { name: "{{越|えつ}}", color: "#B06B8F" },
  bashu: { name: "{{巴|は}}・{{蜀|しょく}}", color: "#9A8F6A" },
  zhou: { name: "{{周|しゅう}}", color: COLORS.gold, minor: true },
  song: { name: "{{宋|そう}}", color: "#A67C52", minor: true },
  lu: { name: "{{魯|ろ}}", color: "#8C9B6E", minor: true },
  zhongshan: { name: "{{中山|ちゅうざん}}", color: "#7B7FA8", minor: true },
};

const ALL_REGIONS = Object.keys(REGIONS);

const FRAMES = [
  {
    year: "前403年",
    era: "戦国七雄の成立",
    desc: "{{晋|しん}}を三分した韓・魏・趙が周王から諸侯と認められ、戦国時代が幕を開ける。当初の最強国は{{文侯|ぶんこう}}のもとで改革を進めた魏で、黄河の西の{{河西|かせい}}や北方の{{中山|ちゅうざん}}までを押さえ、秦を西方に封じ込めていた。",
    factions: [
      { ...F.qin, regions: ["qin"], label: { x: 264, y: 191 } },
      { ...F.wei, regions: ["hexi", "hedong", "wei", "zhongshan"], label: { x: 327, y: 189 } },
      { ...F.han, regions: ["han", "shangdang"], label: { x: 316, y: 204 } },
      { ...F.zhao, regions: ["taiyuan", "handan", "dai"], label: { x: 309, y: 164 } },
      { ...F.yan, regions: ["yan"], label: { x: 349, y: 142 } },
      { ...F.qi, regions: ["qi"], label: { x: 364, y: 176 } },
      { ...F.chu, regions: ["hanzhong", "nanyang", "ying", "chuSouth", "chuEast"], label: { x: 314, y: 238 } },
      { ...F.yue, regions: ["yue"], label: { x: 368, y: 234 } },
      { ...F.bashu, regions: ["bashu"], label: { x: 257, y: 236 } },
      { ...F.zhou, regions: ["zhou"], label: { x: 309, y: 196.5 } },
      { ...F.song, regions: ["song"], label: { x: 341, y: 199 } },
      { ...F.lu, regions: ["lu"], label: { x: 347, y: 189 } },
    ],
  },
  {
    year: "前328年",
    era: "魏の没落と秦の東進",
    desc: "{{桂陵|けいりょう}}・{{馬陵|ばりょう}}の戦いで斉に連敗した魏は覇権を失い、復興した{{中山|ちゅうざん}}も手放す。{{商鞅|しょうおう}}の変法で国力を高めた秦は、魏から{{河西|かせい}}・{{上郡|じょうぐん}}を相次いで奪い、黄河の線まで東へ進出した。",
    factions: [
      { ...F.qin, regions: ["qin", "hexi"], label: { x: 270, y: 190 } },
      { ...F.wei, regions: ["hedong", "wei"], label: { x: 327, y: 189 } },
      { ...F.han, regions: ["han", "shangdang"], label: { x: 316, y: 204 } },
      { ...F.zhao, regions: ["taiyuan", "handan", "dai"], label: { x: 309, y: 164 } },
      { ...F.yan, regions: ["yan"], label: { x: 349, y: 142 } },
      { ...F.qi, regions: ["qi"], label: { x: 364, y: 176 } },
      { ...F.chu, regions: ["hanzhong", "nanyang", "ying", "chuSouth", "chuEast"], label: { x: 314, y: 238 } },
      { ...F.yue, regions: ["yue"], label: { x: 368, y: 234 } },
      { ...F.bashu, regions: ["bashu"], label: { x: 257, y: 236 } },
      { ...F.zhou, regions: ["zhou"], label: { x: 309, y: 196.5 } },
      { ...F.song, regions: ["song"], label: { x: 341, y: 199 } },
      { ...F.lu, regions: ["lu"], label: { x: 347, y: 189 } },
      { ...F.zhongshan, regions: ["zhongshan"], label: { x: 326, y: 161 } },
    ],
  },
  {
    year: "前296年",
    era: "秦の{{巴蜀|はしょく}}併合と趙・燕の北方拡大",
    desc: "秦は前316年に{{巴蜀|はしょく}}を併合し、続いて楚から{{漢中|かんちゅう}}を奪って豊かな後背地を得た。趙は{{武霊王|ぶれいおう}}の「{{胡服騎射|こふくきしゃ}}」で騎馬軍団を整えて北方へ領土を広げ、前296年に{{中山|ちゅうざん}}を滅ぼす。燕も{{遼東|りょうとう}}へ進出し、楚は越を破って長江下流域を手に入れた（年代には諸説ある）。",
    factions: [
      { ...F.qin, regions: ["qin", "hexi", "bashu", "hanzhong"], label: { x: 262, y: 203 } },
      { ...F.wei, regions: ["hedong", "wei"], label: { x: 327, y: 189 } },
      { ...F.han, regions: ["han", "shangdang"], label: { x: 316, y: 204 } },
      { ...F.zhao, regions: ["taiyuan", "handan", "dai", "zhongshan", "yunzhong"], label: { x: 311, y: 152 } },
      { ...F.yan, regions: ["yan", "liaodong"], label: { x: 358, y: 138 } },
      { ...F.qi, regions: ["qi"], label: { x: 364, y: 176 } },
      { ...F.chu, regions: ["nanyang", "ying", "chuSouth", "chuEast", "yue"], label: { x: 330, y: 236 } },
      { ...F.zhou, regions: ["zhou"], label: { x: 309, y: 196.5 } },
      { ...F.song, regions: ["song"], label: { x: 341, y: 199 } },
      { ...F.lu, regions: ["lu"], label: { x: 347, y: 189 } },
    ],
  },
  {
    year: "前278年",
    era: "{{白起|はくき}}、楚の都{{郢|えい}}を落とす",
    desc: "秦の{{白起|はくき}}は{{伊闕|いけつ}}の戦いで韓・魏を破ったのち、魏から{{河東|かとう}}を、さらに{{南陽|なんよう}}を手に入れ、前278年には楚の都{{郢|えい}}を陥落させた。楚は東の{{陳|ちん}}へ遷都する。東方では宋を併合した斉が五国連合軍に攻め込まれて一時滅亡寸前となり、宋の故地の多くは魏に渡った。",
    factions: [
      { ...F.qin, regions: ["qin", "hexi", "bashu", "hanzhong", "hedong", "nanyang", "ying"], label: { x: 276, y: 208 } },
      { ...F.wei, regions: ["wei", "song"], label: { x: 331, y: 192 } },
      { ...F.han, regions: ["han", "shangdang"], label: { x: 316, y: 204 } },
      { ...F.zhao, regions: ["taiyuan", "handan", "dai", "zhongshan", "yunzhong"], label: { x: 311, y: 152 } },
      { ...F.yan, regions: ["yan", "liaodong"], label: { x: 358, y: 138 } },
      { ...F.qi, regions: ["qi"], label: { x: 364, y: 176 } },
      { ...F.chu, regions: ["chuSouth", "chuEast", "yue"], label: { x: 346, y: 232 } },
      { ...F.zhou, regions: ["zhou"], label: { x: 309, y: 196.5 } },
      { ...F.lu, regions: ["lu"], label: { x: 347, y: 189 } },
    ],
  },
  {
    year: "前260年",
    era: "{{長平|ちょうへい}}の戦い",
    desc: "韓の{{上党|じょうとう}}をめぐって秦と趙が激突。{{白起|はくき}}が趙軍40万余を壊滅させ、上党は秦の手に落ちた。秦に単独で対抗できる国はなくなり、統一への流れが決定的となる。",
    factions: [
      { ...F.qin, regions: ["qin", "hexi", "bashu", "hanzhong", "hedong", "nanyang", "ying", "shangdang"], label: { x: 276, y: 208 } },
      { ...F.wei, regions: ["wei", "song"], label: { x: 331, y: 192 } },
      { ...F.han, regions: ["han"], label: { x: 316, y: 204 } },
      { ...F.zhao, regions: ["taiyuan", "handan", "dai", "zhongshan", "yunzhong"], label: { x: 311, y: 152 } },
      { ...F.yan, regions: ["yan", "liaodong"], label: { x: 358, y: 138 } },
      { ...F.qi, regions: ["qi"], label: { x: 364, y: 176 } },
      { ...F.chu, regions: ["chuSouth", "chuEast", "yue"], label: { x: 346, y: 232 } },
      { ...F.zhou, regions: ["zhou"], label: { x: 309, y: 196.5 } },
      { ...F.lu, regions: ["lu"], label: { x: 347, y: 189 } },
    ],
  },
  {
    year: "前230年",
    era: "韓の滅亡——統一戦争の開始",
    desc: "秦は前256年に周を滅ぼし、趙から{{太原|たいげん}}を奪って東方への足場を固めた。秦王{{政|せい}}（のちの{{始皇帝|しこうてい}}）は前230年、まず最も弱い韓を滅ぼして六国併合に乗り出す。この間に楚は魯を滅ぼし、都を{{寿春|じゅしゅん}}へ移している。",
    factions: [
      { ...F.qin, regions: ["qin", "hexi", "bashu", "hanzhong", "hedong", "nanyang", "ying", "shangdang", "zhou", "taiyuan", "han"], label: { x: 280, y: 204 } },
      { ...F.wei, regions: ["wei", "song"], label: { x: 331, y: 192 } },
      { ...F.zhao, regions: ["handan", "dai", "zhongshan", "yunzhong"], label: { x: 324, y: 150 } },
      { ...F.yan, regions: ["yan", "liaodong"], label: { x: 358, y: 138 } },
      { ...F.qi, regions: ["qi"], label: { x: 364, y: 176 } },
      { ...F.chu, regions: ["chuSouth", "chuEast", "yue", "lu"], label: { x: 346, y: 232 } },
    ],
  },
  {
    year: "前225年",
    era: "趙・魏の滅亡",
    desc: "秦は前228年に趙の都{{邯鄲|かんたん}}を落とし、{{荊軻|けいか}}の暗殺未遂を受けて燕の都{{薊|けい}}も攻略、前225年には{{大梁|たいりょう}}を水攻めにして魏を滅ぼした。趙の王族は北の{{代|だい}}で、燕王は{{遼東|りょうとう}}でかろうじて命脈を保つ。",
    factions: [
      {
        ...F.qin,
        regions: ["qin", "hexi", "bashu", "hanzhong", "hedong", "nanyang", "ying", "shangdang", "zhou", "taiyuan", "han", "handan", "zhongshan", "yunzhong", "wei", "song", "yan"],
        label: { x: 292, y: 196 },
      },
      { ...F.zhao, name: "{{代|だい}}（趙の残存勢力）", minor: true, regions: ["dai"], label: { x: 321, y: 147 } },
      { ...F.yan, regions: ["liaodong"], label: { x: 388, y: 131 } },
      { ...F.qi, regions: ["qi"], label: { x: 364, y: 176 } },
      { ...F.chu, regions: ["chuSouth", "chuEast", "yue", "lu"], label: { x: 346, y: 232 } },
    ],
  },
  {
    year: "前223年",
    era: "楚の滅亡",
    desc: "{{李信|りしん}}の敗北を受けて起用された老将{{王翦|おうせん}}が60万の大軍で楚に侵攻し、{{項燕|こうえん}}を破って最大の強敵だった楚を滅ぼした。残るは北辺の燕・代と、東の斉だけとなる。",
    factions: [
      {
        ...F.qin,
        regions: ["qin", "hexi", "bashu", "hanzhong", "hedong", "nanyang", "ying", "shangdang", "zhou", "taiyuan", "han", "handan", "zhongshan", "yunzhong", "wei", "song", "yan", "chuSouth", "chuEast", "yue", "lu"],
        label: { x: 300, y: 204 },
      },
      { ...F.zhao, name: "{{代|だい}}（趙の残存勢力）", minor: true, regions: ["dai"], label: { x: 321, y: 147 } },
      { ...F.yan, regions: ["liaodong"], label: { x: 388, y: 131 } },
      { ...F.qi, regions: ["qi"], label: { x: 364, y: 176 } },
    ],
  },
  {
    year: "前221年",
    era: "秦の天下統一",
    desc: "前222年に{{遼東|りょうとう}}の燕と{{代|だい}}を平定した秦は、翌年、最後に残った斉を戦わずして降伏させた。秦王{{政|せい}}は「{{始皇帝|しこうてい}}」を名乗り、550年におよんだ春秋・戦国の分裂に終止符が打たれる。",
    factions: [{ ...F.qin, regions: ALL_REGIONS, label: { x: 312, y: 200 } }],
  },
];

const STEP_MS = 3600;

export function ZhanguoBorderMap() {
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

  // 区画id → 現在のフレームでの所属勢力（色・勢力名）を引く
  const ownerByRegion = {};
  frame.factions.forEach((f) => {
    f.regions.forEach((r) => {
      ownerByRegion[r] = f;
    });
  });

  function handlePlayClick() {
    if (!playing && index >= FRAMES.length - 1) setIndex(0);
    setPlaying((p) => !p);
  }

  return (
    <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>
        前403年の戦国七雄の成立から前221年の秦の統一まで、勢力図の移り変わりを簡略化した区画単位のアニメーションでたどります（国境は史実を厳密に示すものではありません）。
      </p>

      {/* 七雄がひしめく中原を読み取れるよう、合戦マップの東半分を拡大表示する */}
      <svg viewBox="228 104 180 180" style={{ width: "100%", maxHeight: 440, display: "block", margin: "0 auto" }}>
        <defs>
          <clipPath id="zhanguo-border-clip">
            <path d={CHINA_OUTLINE} />
          </clipPath>
        </defs>

        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="0.6" strokeLinejoin="round" />

        {/* 同じ勢力の区画どうしの継ぎ目が見えないよう、半透明化は個々の区画ではなくグループ全体にかける */}
        <g clipPath="url(#zhanguo-border-clip)" opacity={0.85}>
          {Object.entries(REGIONS).map(([id, points]) => {
            const owner = ownerByRegion[id];
            return (
              <polygon
                key={id}
                points={points}
                fill={owner ? owner.color : "#DCD3B8"}
                fillOpacity={owner ? 1 : 0}
                stroke={owner ? owner.color : "#DCD3B8"}
                strokeOpacity={owner ? 1 : 0}
                strokeWidth="0.5"
                strokeLinejoin="round"
                style={{ transition: "fill 900ms ease, fill-opacity 900ms ease, stroke 900ms ease, stroke-opacity 900ms ease" }}
              />
            );
          })}
        </g>

        <path d={CHINA_OUTLINE} fill="none" stroke={COLORS.mist} strokeWidth="0.6" strokeLinejoin="round" />

        {frame.factions.map((f, i) => (
          <text
            key={`${index}-${i}`}
            x={f.label.x}
            y={f.label.y}
            textAnchor="middle"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: f.minor ? 3.8 : 5.6,
              fontWeight: 700,
              fill: "#FBF8F0",
              paintOrder: "stroke",
              stroke: COLORS.ink,
              strokeWidth: f.minor ? 0.9 : 1.2,
              strokeLinejoin: "round",
            }}
          >
            {stripRuby(f.name).replace(/（.*$/, "")}
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
              title={`${f.year} ${stripRuby(f.era)}`}
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
