"use client";

import { useEffect, useState } from "react";
import { COLORS, stripRuby } from "@/lib/constants";
import { RubyText } from "@/components/Ruby";

// 中国本土の輪郭（/suitang-battlesの合戦マップと同じ、実際の海岸線をもとにした投影データ）
const CHINA_OUTLINE =
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";

// 隋唐・五代の舞台を、唐の道や十国の領域を目安に大まかに区切った地図座標（史実の国境を厳密に示すものではない）。
// 合戦マップと同じ図法（X ≈ 340 + 7.495×(経度-116.4) / Y ≈ 145 - 9.343×(緯度-39.9)）で主要都市の位置に合わせてあり、
// 海や国外にはみ出す部分は輪郭でクリップされる
const REGIONS = {
  mobei: "120,60 480,60 480,118 372,118 345,128 318,128 300,135 262,140 120,140", // 北方草原（突厥・ウイグル・契丹）
  liaoxi: "345,128 372,118 480,118 480,160 352,156 360,140", // 遼西・遼東（営州・遼東城）
  longyou: "120,140 262,140 262,206 240,195 120,195", // 隴右・河西（涼州）
  hetao: "262,140 300,135 300,170 290,175 262,180", // オルドス（夏州・霊州）
  hedong: "300,135 318,128 322,150 320,172 304,180 300,170", // 河東（太原・雲州）
  youzhou: "318,128 345,128 360,140 352,156 334,158 322,150", // 幽州（燕雲）
  hebei: "322,150 334,158 352,156 352,182 334,184 320,172", // 河北（鎮州・魏州）
  shandong: "352,156 480,160 480,192 352,192 352,182", // 山東（青州）
  guanzhong: "262,180 290,175 300,170 304,180 300,190 300,206 280,210 262,206", // 関中（長安）
  luoyang: "300,190 304,180 320,172 322,190 318,206 300,206", // 洛陽
  henan: "320,172 334,184 352,182 352,192 356,204 330,210 318,206 322,190", // 河南（汴州・宋州・徐州）
  shannan: "280,210 300,206 318,206 330,210 330,224 296,226 284,220", // 山南東道（襄陽）
  huainan: "330,210 356,204 352,192 480,192 480,222 365,224 340,226 330,224", // 淮南・金陵（揚州）
  jingnan: "296,226 330,224 340,226 326,240 296,238", // 荊南（江陵）
  jiangdong: "365,224 480,222 480,258 372,256 360,240", // 両浙（杭州）
  jiangxi: "340,226 365,224 360,240 372,256 360,262 345,270 330,262 326,240", // 江西（洪州）
  hunan: "296,238 326,240 330,262 322,272 296,272 288,256", // 湖南（長沙）
  fujian: "360,262 372,256 480,258 480,300 350,290 345,270", // 福建（福州）
  lingnan: "260,256 288,256 296,272 322,272 330,262 345,270 350,290 480,300 480,360 260,360", // 嶺南（広州・桂州）
  shu: "225,195 240,195 262,206 280,210 284,220 296,226 296,238 288,256 260,256 245,250 230,249.4", // 剣南・蜀（成都・漢中）
  qingzang: "120,195 225,195 230,249.4 120,245", // 青蔵高原（吐蕃）
  nanzhao: "120,245 245,250 260,256 260,360 120,360", // 雲南（南詔）
};

const CHINA_PROPER = [
  "longyou", "hetao", "hedong", "youzhou", "hebei", "shandong", "guanzhong", "luoyang", "henan", "shannan",
  "huainan", "jingnan", "jiangdong", "jiangxi", "hunan", "fujian", "lingnan", "shu",
];

// 統一王朝（隋・唐・宋）は朱や墨の濃い色、分裂期の諸勢力は淡い色で示す
const F = {
  sui: { name: "{{隋|ずい}}", color: "#C08A45" },
  tang: { name: "{{唐|とう}}", color: COLORS.vermilion },
  song: { name: "{{宋|そう}}", color: "#3B3530" },
  tujue: { name: "{{突厥|とっけつ}}", color: "#9A8F6A" },
  uighur: { name: "ウイグル（{{回紇|かいこつ}}）", color: "#9A8F6A" },
  khitan: { name: "{{契丹|きったん}}", color: "#9A8F6A" },
  liao: { name: "{{遼|りょう}}（{{契丹|きったん}}）", color: "#9A8F6A" },
  goguryeo: { name: "{{高句麗|こうくり}}", color: "#5E9A9B" },
  tubo: { name: "{{吐蕃|とばん}}", color: "#A67C52" },
  nanzhao: { name: "{{南詔|なんしょう}}", color: "#BFA77A" },
  dali: { name: "{{大理|だいり}}", color: "#BFA77A" },
};

const ALL_REGIONS = Object.keys(REGIONS);
const except = (...ids) => CHINA_PROPER.filter((r) => !ids.includes(r));

const FRAMES = [
  {
    year: "589年",
    era: "{{隋|ずい}}の南北統一",
    desc: "{{北周|ほくしゅう}}から{{禅譲|ぜんじょう}}を受けた{{楊堅|ようけん}}（{{文帝|ぶんてい}}）が581年に{{隋|ずい}}を建て、589年に南朝の{{陳|ちん}}を{{滅|ほろ}}ぼして約270年ぶりに中国を再統一した。北方の草原には{{突厥|とっけつ}}、東北の{{遼東|りょうとう}}には{{高句麗|こうくり}}が{{控|ひか}}える。",
    factions: [
      { ...F.sui, regions: CHINA_PROPER, label: { x: 318, y: 218 } },
      { ...F.tujue, regions: ["mobei"], label: { x: 286, y: 129 } },
      { ...F.goguryeo, regions: ["liaoxi"], label: { x: 392, y: 132 } },
    ],
  },
  {
    year: "617年",
    era: "{{隋末|ずいまつ}}の{{群雄割拠|ぐんゆうかっきょ}}",
    desc: "{{煬帝|ようだい}}の度重なる{{高句麗|こうくり}}{{遠征|えんせい}}と大土木事業に民衆が{{耐|た}}えかね、各地で反乱が続発した。{{太原|たいげん}}で挙兵した{{李淵|りえん}}は617年に長安へ入り、翌年に{{唐|とう}}を建国する。{{洛陽|らくよう}}と{{江都|こうと}}（{{揚州|ようしゅう}}）に{{隋|ずい}}の残存勢力が残るなか、{{李密|りみつ}}・{{竇建徳|とうけんとく}}・{{蕭銑|しょうせん}}らが天下を争った（勢力{{範囲|はんい}}は{{大幅|おおはば}}に簡略化している）。",
    factions: [
      { name: "{{李淵|りえん}}（{{唐|とう}}）", color: COLORS.vermilion, regions: ["hedong", "guanzhong", "shu"], label: { x: 270, y: 216 } },
      { name: "{{隋|ずい}}（残存勢力）", color: F.sui.color, regions: ["luoyang", "shannan", "huainan", "youzhou"], label: { x: 372, y: 210 } },
      { name: "{{李密|りみつ}}", color: "#8A6BA0", regions: ["henan"], label: { x: 337, y: 197 } },
      { name: "{{竇建徳|とうけんとく}}", color: "#5F7A3D", regions: ["hebei"], label: { x: 336, y: 170 } },
      { name: "{{蕭銑|しょうせん}}", color: "#B06B8F", regions: ["jingnan", "hunan", "lingnan"], label: { x: 306, y: 262 } },
      { name: "{{薛挙|せっきょ}}", color: "#A67C52", regions: ["longyou"], label: { x: 242, y: 172 } },
      { name: "{{梁師都|りょうしと}}", color: "#7B7FA8", minor: true, regions: ["hetao"], label: { x: 281, y: 160 } },
      { name: "その他の{{群雄|ぐんゆう}}", color: "#8C9B6E", minor: true, regions: ["shandong", "jiangdong", "jiangxi", "fujian"], label: { x: 350, y: 252 } },
      { ...F.tujue, regions: ["mobei"], label: { x: 286, y: 129 } },
      { ...F.goguryeo, regions: ["liaoxi"], label: { x: 392, y: 132 } },
    ],
  },
  {
    year: "628年",
    era: "{{唐|とう}}の天下統一",
    desc: "{{秦王|しんおう}}{{李世民|りせいみん}}が621年の{{虎牢関|ころうかん}}の戦いで{{竇建徳|とうけんとく}}・{{王世充|おうせいじゅう}}を同時に{{屈服|くっぷく}}させ、{{唐|とう}}の優勢が決定的となった。{{玄武門|げんぶもん}}の変を経て{{即位|そくい}}した太宗は、628年に北辺の{{梁師都|りょうしと}}を{{滅|ほろ}}ぼして国内の統一を完成させる。",
    factions: [
      { ...F.tang, regions: CHINA_PROPER, label: { x: 318, y: 218 } },
      { ...F.tujue, regions: ["mobei"], label: { x: 286, y: 129 } },
      { ...F.goguryeo, regions: ["liaoxi"], label: { x: 392, y: 132 } },
    ],
  },
  {
    year: "668年",
    era: "{{唐|とう}}の最大版図",
    desc: "630年に{{李靖|りせい}}が{{東突厥|とうとっけつ}}を{{滅|ほろ}}ぼし、太宗は北方諸部族から「{{天可汗|てんかがん}}」と{{仰|あお}}がれた。続く高宗の時代には{{百済|くだら}}（660年）、{{高句麗|こうくり}}（668年）を{{滅|ほろ}}ぼし、{{唐|とう}}の勢力は草原から{{朝鮮|ちょうせん}}半島北部、西域にまでおよんだ。",
    factions: [
      { ...F.tang, regions: [...CHINA_PROPER, "mobei", "liaoxi"], label: { x: 318, y: 218 } },
      { ...F.tubo, regions: ["qingzang"], label: { x: 226, y: 222 } },
    ],
  },
  {
    year: "756年",
    era: "安史の乱",
    desc: "755年、{{范陽|はんよう}}（{{幽州|ゆうしゅう}}）の節度使{{安禄山|あんろくざん}}が挙兵して{{洛陽|らくよう}}を落とし、翌年「{{大燕|だいえん}}{{皇帝|こうてい}}」を{{称|しょう}}した。{{潼関|どうかん}}の{{唐軍|とうぐん}}が敗れると長安も{{陥落|かんらく}}し、{{玄宗|げんそう}}は{{蜀|しょく}}へ{{逃|のが}}れる。乱は{{史思明|ししめい}}に引き{{継|つ}}がれ、763年まで続いた。北方の草原ではウイグルが興り、{{唐|とう}}の{{援軍|えんぐん}}として乱の{{鎮圧|ちんあつ}}に加わっている。",
    factions: [
      { name: "{{燕|えん}}（{{安禄山|あんろくざん}}の反乱軍）", color: "#3B3530", regions: ["youzhou", "hebei", "luoyang", "henan", "guanzhong"], label: { x: 318, y: 186 } },
      { ...F.tang, regions: except("youzhou", "hebei", "luoyang", "henan", "guanzhong"), label: { x: 322, y: 232 } },
      { ...F.uighur, regions: ["mobei"], label: { x: 286, y: 129 } },
      { name: "{{契丹|きったん}}・{{奚|けい}}", color: "#5E9A9B", minor: true, regions: ["liaoxi"], label: { x: 392, y: 132 } },
      { ...F.tubo, regions: ["qingzang"], label: { x: 226, y: 222 } },
      { ...F.nanzhao, regions: ["nanzhao"], label: { x: 232, y: 270 } },
    ],
  },
  {
    year: "800年ごろ",
    era: "{{藩鎮|はんちん}}の{{割拠|かっきょ}}",
    desc: "乱は終わったものの、{{降伏|こうふく}}した反乱軍の将がそのまま{{河北|かほく}}の節度使に任じられ、「{{河朔三鎮|かさくさんちん}}」は{{唐|とう}}の統制が{{及|およ}}ばない半独立の状態となった。西では{{吐蕃|とばん}}が{{隴右|ろうゆう}}・{{河西|かせい}}を{{奪|うば}}い、763年には一時長安を{{占領|せんりょう}}している。",
    factions: [
      { ...F.tang, regions: except("youzhou", "hebei", "longyou"), label: { x: 322, y: 232 } },
      { name: "{{河朔三鎮|かさくさんちん}}（半独立）", color: "#5F7A3D", regions: ["youzhou", "hebei"], label: { x: 336, y: 160 } },
      { ...F.tubo, regions: ["longyou", "qingzang"], label: { x: 222, y: 190 } },
      { ...F.uighur, regions: ["mobei"], label: { x: 286, y: 129 } },
      { name: "{{契丹|きったん}}・{{奚|けい}}", color: "#5E9A9B", minor: true, regions: ["liaoxi"], label: { x: 392, y: 132 } },
      { ...F.nanzhao, regions: ["nanzhao"], label: { x: 232, y: 270 } },
    ],
  },
  {
    year: "881年",
    era: "{{黄巣|こうそう}}、長安を{{占領|せんりょう}}",
    desc: "塩の密売人{{黄巣|こうそう}}の反乱軍は{{江南|こうなん}}から広州まで転戦したのち北上し、880年末に{{洛陽|らくよう}}、続いて長安を落として「{{大斉|だいせい}}」{{皇帝|こうてい}}を{{称|しょう}}した。{{僖宗|きそう}}は{{蜀|しょく}}へ{{逃|のが}}れる。各地の節度使は自立の色を強め、{{唐|とう}}の支配はもはや名ばかりとなっていく。",
    factions: [
      { name: "{{斉|せい}}（黄巣の反乱軍）", color: "#3B3530", regions: ["guanzhong", "luoyang"], label: { x: 293, y: 196 } },
      { name: "{{唐|とう}}（{{僖宗|きそう}}は{{蜀|しょく}}へ）", color: COLORS.vermilion, regions: except("guanzhong", "luoyang", "youzhou", "hebei", "longyou"), label: { x: 322, y: 232 } },
      { name: "{{河朔三鎮|かさくさんちん}}", color: "#5F7A3D", regions: ["youzhou", "hebei"], label: { x: 336, y: 160 } },
      { ...F.khitan, regions: ["mobei", "liaoxi"], label: { x: 300, y: 129 } },
      { ...F.nanzhao, regions: ["nanzhao"], label: { x: 232, y: 270 } },
    ],
  },
  {
    year: "907年",
    era: "{{唐|とう}}の{{滅亡|めつぼう}}と五代十国",
    desc: "{{黄巣|こうそう}}から{{唐|とう}}に{{寝返|ねがえ}}った{{朱全忠|しゅぜんちゅう}}が{{唐|とう}}を{{滅|ほろ}}ぼして{{後梁|こうりょう}}を建てた。{{太原|たいげん}}の{{李克用|りこくよう}}（{{晋|しん}}）はこれを認めず、南方では{{呉|ご}}・{{呉越|ごえつ}}・{{前蜀|ぜんしょく}}・{{楚|そ}}・{{閩|びん}}などが自立する。北方では同じ年に{{耶律阿保機|やりつあぼき}}が{{契丹|きったん}}の君主となった。",
    factions: [
      { name: "{{後梁|こうりょう}}", color: "#4F6FA0", regions: ["guanzhong", "luoyang", "henan", "shannan", "shandong", "hebei"], label: { x: 326, y: 196 } },
      { name: "{{晋|しん}}（{{李克用|りこくよう}}）", color: "#5F7A3D", regions: ["hedong"], label: { x: 311, y: 156 } },
      { name: "{{燕|えん}}（{{劉仁恭|りゅうじんきょう}}）", color: "#7B7FA8", minor: true, regions: ["youzhou"], label: { x: 336, y: 142 } },
      { name: "{{前蜀|ぜんしょく}}", color: "#B06B8F", regions: ["shu"], label: { x: 256, y: 230 } },
      { name: "{{呉|ご}}", color: "#8A6BA0", regions: ["huainan", "jiangxi"], label: { x: 352, y: 214 } },
      { name: "{{呉越|ごえつ}}", color: "#5E9A9B", minor: true, regions: ["jiangdong"], label: { x: 370, y: 242 } },
      { name: "{{閩|びん}}", color: "#C08A45", minor: true, regions: ["fujian"], label: { x: 357, y: 276 } },
      { name: "{{楚|そ}}", color: "#A67C52", minor: true, regions: ["hunan"], label: { x: 310, y: 258 } },
      { name: "{{荊南|けいなん}}", color: COLORS.gold, minor: true, regions: ["jingnan"], label: { x: 312, y: 234 } },
      { name: "{{南漢|なんかん}}（{{劉氏|りゅうし}}）", color: "#8C9B6E", minor: true, regions: ["lingnan"], label: { x: 302, y: 292 } },
      { name: "{{定難軍|ていなんぐん}}（{{党項|タングート}}）", color: "#6E6A86", minor: true, regions: ["hetao"], label: { x: 281, y: 160 } },
      { ...F.khitan, regions: ["mobei", "liaoxi"], label: { x: 300, y: 129 } },
      { ...F.nanzhao, regions: ["nanzhao"], label: { x: 232, y: 270 } },
    ],
  },
  {
    year: "936年",
    era: "{{燕雲十六州|えんうんじゅうろくしゅう}}の{{割譲|かつじょう}}",
    desc: "923年に{{晋|しん}}の{{李存勗|りそんきょく}}が{{後梁|こうりょう}}を{{滅|ほろ}}ぼして{{後唐|こうとう}}を建てたが、{{内紛|ないふん}}が続き、936年には{{石敬瑭|せきけいとう}}が{{契丹|きったん}}の{{援軍|えんぐん}}を得て{{後唐|こうとう}}を{{倒|たお}}し{{後晋|こうしん}}を建てた。その見返りとして、長城の内側にある{{幽州|ゆうしゅう}}・{{雲州|うんしゅう}}など「{{燕雲十六州|えんうんじゅうろくしゅう}}」が{{契丹|きったん}}に{{割譲|かつじょう}}され、以後400年以上にわたって漢民族王朝の手を{{離|はな}}れる。",
    factions: [
      { name: "{{後晋|こうしん}}", color: "#4F6FA0", regions: ["guanzhong", "luoyang", "henan", "shannan", "shandong", "hebei", "hedong"], label: { x: 326, y: 196 } },
      { name: "{{後蜀|こうしょく}}", color: "#B06B8F", regions: ["shu"], label: { x: 256, y: 230 } },
      { name: "{{呉|ご}}（翌年{{南唐|なんとう}}に）", color: "#8A6BA0", regions: ["huainan", "jiangxi"], label: { x: 352, y: 214 } },
      { name: "{{呉越|ごえつ}}", color: "#5E9A9B", minor: true, regions: ["jiangdong"], label: { x: 370, y: 242 } },
      { name: "{{閩|びん}}", color: "#C08A45", minor: true, regions: ["fujian"], label: { x: 357, y: 276 } },
      { name: "{{楚|そ}}", color: "#A67C52", minor: true, regions: ["hunan"], label: { x: 310, y: 258 } },
      { name: "{{荊南|けいなん}}", color: COLORS.gold, minor: true, regions: ["jingnan"], label: { x: 312, y: 234 } },
      { name: "{{南漢|なんかん}}", color: "#8C9B6E", minor: true, regions: ["lingnan"], label: { x: 302, y: 292 } },
      { name: "{{定難軍|ていなんぐん}}（{{党項|タングート}}）", color: "#6E6A86", minor: true, regions: ["hetao"], label: { x: 281, y: 160 } },
      { ...F.liao, regions: ["mobei", "liaoxi", "youzhou"], label: { x: 330, y: 132 } },
      { name: "{{大長和|だいちょうわ}}など（雲南）", color: F.nanzhao.color, minor: true, regions: ["nanzhao"], label: { x: 232, y: 270 } },
    ],
  },
  {
    year: "960年",
    era: "{{宋|そう}}の建国",
    desc: "{{後周|こうしゅう}}の{{世宗|せいそう}}{{柴栄|さいえい}}は{{高平|こうへい}}の戦いで{{北漢|ほっかん}}を破り、さらに{{南唐|なんとう}}から{{長江|ちょうこう}}以北の{{淮南|わいなん}}を{{奪|うば}}って統一の{{基礎|きそ}}を築いた。世宗の急死後、960年に禁軍の総司令官{{趙匡胤|ちょうきょういん}}が{{陳橋|ちんきょう}}の変で{{即位|そくい}}し、{{宋|そう}}が成立する。",
    factions: [
      { ...F.song, regions: ["guanzhong", "luoyang", "henan", "shannan", "shandong", "hebei", "huainan"], label: { x: 330, y: 200 } },
      { name: "{{北漢|ほっかん}}", color: "#5F7A3D", regions: ["hedong"], label: { x: 311, y: 156 } },
      { name: "{{後蜀|こうしょく}}", color: "#B06B8F", regions: ["shu"], label: { x: 256, y: 230 } },
      { name: "{{南唐|なんとう}}", color: "#8A6BA0", regions: ["jiangxi"], label: { x: 344, y: 246 } },
      { name: "{{呉越|ごえつ}}", color: "#5E9A9B", minor: true, regions: ["jiangdong"], label: { x: 370, y: 242 } },
      { name: "{{清源軍|せいげんぐん}}", color: "#C08A45", minor: true, regions: ["fujian"], label: { x: 357, y: 276 } },
      { name: "{{湖南|こなん}}（{{武平軍|ぶへいぐん}}）", color: "#A67C52", minor: true, regions: ["hunan"], label: { x: 310, y: 258 } },
      { name: "{{荊南|けいなん}}", color: COLORS.gold, minor: true, regions: ["jingnan"], label: { x: 312, y: 234 } },
      { name: "{{南漢|なんかん}}", color: "#8C9B6E", minor: true, regions: ["lingnan"], label: { x: 302, y: 292 } },
      { name: "{{定難軍|ていなんぐん}}（{{党項|タングート}}）", color: "#6E6A86", minor: true, regions: ["hetao"], label: { x: 281, y: 160 } },
      { ...F.liao, regions: ["mobei", "liaoxi", "youzhou"], label: { x: 330, y: 132 } },
      { ...F.dali, regions: ["nanzhao"], label: { x: 232, y: 270 } },
    ],
  },
  {
    year: "979年",
    era: "{{宋|そう}}の天下統一",
    desc: "{{宋|そう}}は「{{先南後北|せんなんこうほく}}」の方針で{{荊南|けいなん}}・湖南（963年）、{{後蜀|こうしょく}}（965年）、南漢（971年）、{{南唐|なんとう}}（975年）を次々と平定し、978年には{{呉越|ごえつ}}・清源軍が自ら領土を{{献上|けんじょう}}した。979年、太宗が{{北漢|ほっかん}}の太原を落として約70年ぶりの統一を果たすが、{{遼|りょう}}の手にある{{燕雲十六州|えんうんじゅうろくしゅう}}の{{奪回|だっかい}}は果たせなかった。",
    factions: [
      { ...F.song, regions: except("youzhou", "hetao"), label: { x: 318, y: 218 } },
      { name: "{{定難軍|ていなんぐん}}（のちの{{西夏|せいか}}）", color: "#6E6A86", minor: true, regions: ["hetao"], label: { x: 281, y: 160 } },
      { ...F.liao, regions: ["mobei", "liaoxi", "youzhou"], label: { x: 330, y: 132 } },
      { ...F.dali, regions: ["nanzhao"], label: { x: 232, y: 270 } },
    ],
  },
];

const STEP_MS = 3800;

export function SuitangBorderMap() {
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
        589年の<ruby>隋<rt>ずい</rt></ruby>の統一から979年の<ruby>宋<rt>そう</rt></ruby>の統一まで、勢力図の移り変わりを簡略化した区画単位のアニメーションでたどります（国境は史実を厳密に示すものではありません）。
      </p>

      {/* 長安から江南・嶺南までを収めるよう、合戦マップの東半分を拡大表示する */}
      <svg viewBox="215 108 195 212" style={{ width: "100%", maxHeight: 480, display: "block", margin: "0 auto" }}>
        <defs>
          <clipPath id="suitang-border-clip">
            <path d={CHINA_OUTLINE} />
          </clipPath>
        </defs>

        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="0.6" strokeLinejoin="round" />

        {/* 同じ勢力の区画どうしの継ぎ目が見えないよう、半透明化は個々の区画ではなくグループ全体にかける */}
        <g clipPath="url(#suitang-border-clip)" opacity={0.85}>
          {ALL_REGIONS.map((id) => {
            const owner = ownerByRegion[id];
            return (
              <polygon
                key={id}
                points={REGIONS[id]}
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
              fontSize: f.minor ? 4.4 : 6.4,
              fontWeight: 700,
              fill: "#FBF8F0",
              paintOrder: "stroke",
              stroke: COLORS.ink,
              strokeWidth: f.minor ? 1 : 1.3,
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
              <RubyText text={f.year} />
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 12, paddingTop: 10, borderTop: `1px solid ${COLORS.mist}` }}>
        <div className="flex items-baseline gap-2 flex-wrap">
          <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
            <RubyText text={frame.era} />
          </span>
          <span style={{ fontSize: 12, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}><RubyText text={frame.year} /></span>
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
