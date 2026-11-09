"use client";

import { useEffect, useState } from "react";
import { COLORS, stripRuby } from "@/lib/constants";
import { RubyText } from "@/components/Ruby";
import { CHINA_OUTLINE, REGIONS, CHINA_PROPER } from "@/components/SuitangBorderMap";

// 宋・金・元の勢力図。区画は/suitang-battlesの勢力図（SuitangBorderMap）と共通で、
// 区画ごとの所属だけを時代ごとに入れ替える（史実の国境を厳密に示すものではない）

// 統一王朝（宋・元）は墨と朱の濃い色、周辺の諸勢力は淡い色で示す
const F = {
  song: { name: "{{宋|そう}}（{{北宋|ほくそう}}）", color: "#3B3530" },
  nansong: { name: "{{南宋|なんそう}}", color: "#3B3530" },
  liao: { name: "{{遼|りょう}}（{{契丹|きったん}}）", color: "#9A8F6A" },
  jin: { name: "金（{{女真|じょしん}}）", color: "#4F6FA0" },
  xixia: { name: "{{西夏|せいか}}（{{党項|タングート}}）", color: "#6E6A86" },
  mongol: { name: "モンゴル{{帝国|ていこく}}", color: COLORS.vermilion },
  yuan: { name: "元", color: COLORS.vermilion },
  dali: { name: "{{大理|だいり}}", color: "#BFA77A" },
  tubo: { name: "{{吐蕃|とばん}}諸部", color: "#A67C52", minor: true },
  mongolTribes: { name: "モンゴル高原の諸部族", color: "#8C9B6E", minor: true },
};

const ALL_REGIONS = Object.keys(REGIONS);
const except = (...ids) => CHINA_PROPER.filter((r) => !ids.includes(r));

// 金が淮河・秦嶺以北を、南宋がそれより南を治めた時代の区画
const JIN_NORTH = ["liaoxi", "youzhou", "hedong", "hebei", "shandong", "guanzhong", "luoyang", "henan"];
const SOUTHERN_SONG = ["shu", "shannan", "huainan", "jingnan", "jiangdong", "jiangxi", "hunan", "fujian", "lingnan"];

const FRAMES = [
  {
    year: "1004年",
    era: "{{澶淵|せんえん}}の盟",
    desc: "979年に中国本土を統一した{{宋|そう}}は、{{遼|りょう}}の手にある{{燕雲十六州|えんうんじゅうろくしゅう}}の{{奪回|だっかい}}を目指したが、{{高梁河|こうりょうが}}・{{雍熙|ようき}}の{{北伐|ほくばつ}}と続けて敗れた。1004年、逆に{{遼|りょう}}の大軍が黄河まで南下し、{{澶州|せんしゅう}}で和議が結ばれる。{{宋|そう}}が毎年{{絹|きぬ}}と銀を{{贈|おく}}る代わりに、以後約120年の平和が続いた。",
    factions: [
      { ...F.song, regions: except("youzhou", "hetao", "longyou"), label: { x: 318, y: 218 } },
      { ...F.liao, regions: ["mobei", "liaoxi", "youzhou"], label: { x: 330, y: 132 } },
      { name: "{{定難軍|ていなんぐん}}（{{李継遷|りけいせん}}）", color: F.xixia.color, minor: true, regions: ["hetao"], label: { x: 281, y: 160 } },
      { name: "{{吐蕃|とばん}}・ウイグル諸部", color: F.tubo.color, minor: true, regions: ["longyou", "qingzang"], label: { x: 236, y: 186 } },
      { ...F.dali, regions: ["nanzhao"], label: { x: 232, y: 270 } },
    ],
  },
  {
    year: "1044年",
    era: "{{西夏|せいか}}の自立",
    desc: "1038年、{{党項|タングート}}の{{李元昊|りげんこう}}が{{皇帝|こうてい}}を{{称|しょう}}して{{西夏|せいか}}を建て、{{好水川|こうすいせん}}の戦いなどで{{宋軍|そうぐん}}を相次いで破った。1044年の{{慶暦|けいれき}}の和約で{{西夏|せいか}}は形の上で{{宋|そう}}に臣従したが、{{宋|そう}}は{{遼|りょう}}に続いて{{西夏|せいか}}にも毎年の{{贈与|ぞうよ}}を負うことになる。",
    factions: [
      { ...F.song, regions: except("youzhou", "hetao", "longyou"), label: { x: 318, y: 218 } },
      { ...F.liao, regions: ["mobei", "liaoxi", "youzhou"], label: { x: 330, y: 132 } },
      { ...F.xixia, regions: ["hetao", "longyou"], label: { x: 258, y: 168 } },
      { ...F.tubo, regions: ["qingzang"], label: { x: 226, y: 222 } },
      { ...F.dali, regions: ["nanzhao"], label: { x: 232, y: 270 } },
    ],
  },
  {
    year: "1125年",
    era: "金の{{台頭|たいとう}}と{{遼|りょう}}の{{滅亡|めつぼう}}",
    desc: "1115年に{{完顔阿骨打|わんやんあくだ}}が建てた金は、{{宋|そう}}と「海上の盟」を結んで{{遼|りょう}}を{{挟|はさ}}み{{撃|う}}ちにし、1125年に{{遼|りょう}}を{{滅|ほろ}}ぼした。しかし{{宋軍|そうぐん}}の弱さと約束違反を見た金は、同じ年のうちに{{宋|そう}}へ{{矛先|ほこさき}}を向ける。{{遼|りょう}}の皇族の一部は中央アジアへ{{逃|のが}}れて{{西遼|せいりょう}}を建てた。",
    factions: [
      { ...F.song, regions: except("youzhou", "hetao", "longyou"), label: { x: 318, y: 218 } },
      { ...F.jin, regions: ["mobei", "liaoxi", "youzhou"], label: { x: 330, y: 132 } },
      { ...F.xixia, regions: ["hetao", "longyou"], label: { x: 258, y: 168 } },
      { ...F.tubo, regions: ["qingzang"], label: { x: 226, y: 222 } },
      { ...F.dali, regions: ["nanzhao"], label: { x: 232, y: 270 } },
    ],
  },
  {
    year: "1142年",
    era: "{{紹興|しょうこう}}の和議（南北の{{分立|ぶんりつ}}）",
    desc: "1127年の{{靖康|せいこう}}の変で{{北宋|ほくそう}}は{{滅|ほろ}}び、{{江南|こうなん}}に{{逃|のが}}れた{{高宗|こうそう}}が{{南宋|なんそう}}を建てた。{{岳飛|がくひ}}らの{{北伐|ほくばつ}}は{{和平派|わへいは}}の{{秦檜|しんかい}}によって打ち切られ、1142年の和議で淮河から{{大散関|だいさんかん}}を結ぶ線が国境と定められる。{{南宋|なんそう}}は金に臣下の礼をとり、毎年銀と{{絹|きぬ}}を{{贈|おく}}ることになった。",
    factions: [
      { ...F.nansong, regions: SOUTHERN_SONG, label: { x: 330, y: 250 } },
      { ...F.jin, regions: JIN_NORTH, label: { x: 330, y: 172 } },
      { ...F.xixia, regions: ["hetao", "longyou"], label: { x: 258, y: 168 } },
      { ...F.mongolTribes, regions: ["mobei"], label: { x: 290, y: 124 } },
      { ...F.tubo, regions: ["qingzang"], label: { x: 226, y: 222 } },
      { ...F.dali, regions: ["nanzhao"], label: { x: 232, y: 270 } },
    ],
  },
  {
    year: "1227年",
    era: "モンゴル{{帝国|ていこく}}の{{南下|なんか}}",
    desc: "1206年にチンギス・ハンがモンゴル高原を統一すると、モンゴル軍は金の{{中都|ちゅうと}}（北京）を落とし（1215年）、1227年には{{西夏|せいか}}を{{滅|ほろ}}ぼした。都を{{開封|かいほう}}へ移した金は、黄河以南と{{関中|かんちゅう}}に追い{{詰|つ}}められていく（勢力{{範囲|はんい}}は簡略化している）。",
    factions: [
      { ...F.nansong, regions: SOUTHERN_SONG, label: { x: 330, y: 250 } },
      { ...F.jin, regions: ["guanzhong", "luoyang", "henan"], label: { x: 312, y: 198 } },
      { ...F.mongol, regions: ["mobei", "hetao", "longyou", "liaoxi", "youzhou", "hedong", "hebei", "shandong"], label: { x: 318, y: 150 } },
      { ...F.tubo, regions: ["qingzang"], label: { x: 226, y: 222 } },
      { ...F.dali, regions: ["nanzhao"], label: { x: 232, y: 270 } },
    ],
  },
  {
    year: "1234年",
    era: "金の{{滅亡|めつぼう}}",
    desc: "モンゴルと{{南宋|なんそう}}の連合軍が{{蔡州|さいしゅう}}を落とし、金は{{滅|ほろ}}んだ。かつて{{北宋|ほくそう}}を{{滅|ほろ}}ぼした仇敵を討ったことで{{南宋|なんそう}}は{{沸|わ}}いたが、こんどは{{南宋|なんそう}}自身がモンゴルと直接国境を接することになった。",
    factions: [
      { ...F.nansong, regions: SOUTHERN_SONG, label: { x: 330, y: 250 } },
      { ...F.mongol, regions: ["mobei", "hetao", "longyou", ...JIN_NORTH], label: { x: 318, y: 172 } },
      { ...F.tubo, regions: ["qingzang"], label: { x: 226, y: 222 } },
      { ...F.dali, regions: ["nanzhao"], label: { x: 232, y: 270 } },
    ],
  },
  {
    year: "1260年",
    era: "クビライの{{即位|そくい}}",
    desc: "モンゴルは1253年に{{大理|だいり}}を{{滅|ほろ}}ぼし、チベットも服属させて{{南宋|なんそう}}を西と南から包み{{込|こ}}んだ。1259年、四川へ{{親征|しんせい}}した大ハーンのモンケが{{釣魚城|ちょうぎょじょう}}の攻囲中に{{陣没|じんぼつ}}すると、{{鄂州|がくしゅう}}を囲んでいた弟のクビライは兵を返し、翌年に大ハーンに{{即位|そくい}}した。",
    factions: [
      { ...F.nansong, regions: SOUTHERN_SONG, label: { x: 330, y: 250 } },
      { ...F.mongol, regions: ["mobei", "hetao", "longyou", ...JIN_NORTH, "qingzang", "nanzhao"], label: { x: 318, y: 172 } },
    ],
  },
  {
    year: "1276年",
    era: "{{臨安|りんあん}}の{{開城|かいじょう}}",
    desc: "5年におよぶ{{襄陽|じょうよう}}・{{樊城|はんじょう}}の攻防を制した元軍は、{{伯顔|バヤン}}に率いられて{{長江|ちょうこう}}を下り、1276年に都の{{臨安|りんあん}}（{{杭州|こうしゅう}}）を{{無血開城|むけつかいじょう}}させた。幼い{{恭帝|きょうてい}}は北へ送られたが、{{張世傑|ちょうせいけつ}}・{{陸秀夫|りくしゅうふ}}らは幼い皇子を{{擁|よう}}して福建・広東の沿岸で{{抵抗|ていこう}}を続ける。",
    factions: [
      { ...F.yuan, regions: ALL_REGIONS.filter((r) => r !== "fujian" && r !== "lingnan"), label: { x: 318, y: 200 } },
      { name: "{{南宋|なんそう}}の残存勢力", color: "#3B3530", regions: ["fujian", "lingnan"], label: { x: 330, y: 290 } },
    ],
  },
  {
    year: "1279年",
    era: "元の中国統一",
    desc: "広東沖の{{崖山|がいざん}}の戦いで{{南宋|なんそう}}の最後の{{艦隊|かんたい}}が{{壊滅|かいめつ}}し、{{陸秀夫|りくしゅうふ}}は8{{歳|さい}}の{{皇帝|こうてい}}を背負って海に身を投じた。こうして元は、遊牧民の王朝として初めて中国全土を支配する。その後も元は日本（1281年の{{弘安|こうあん}}の役）や東南アジアへの{{遠征|えんせい}}を続けた。",
    factions: [
      { ...F.yuan, regions: ALL_REGIONS, label: { x: 318, y: 218 } },
    ],
  },
];

const STEP_MS = 3800;

export function SongYuanBorderMap() {
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
        1004年の<ruby>澶淵<rt>せんえん</rt></ruby>の盟から1279年の元の統一まで、勢力図の移り変わりを簡略化した区画単位のアニメーションでたどります（国境は史実を厳密に示すものではありません）。
      </p>

      {/* 長安から江南・嶺南までを収めるよう、合戦マップの東半分を拡大表示する（SuitangBorderMapと同じ範囲） */}
      <svg viewBox="215 108 195 212" style={{ width: "100%", maxHeight: 480, display: "block", margin: "0 auto" }}>
        <defs>
          <clipPath id="songyuan-border-clip">
            <path d={CHINA_OUTLINE} />
          </clipPath>
        </defs>

        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="0.6" strokeLinejoin="round" />

        {/* 同じ勢力の区画どうしの継ぎ目が見えないよう、半透明化は個々の区画ではなくグループ全体にかける */}
        <g clipPath="url(#songyuan-border-clip)" opacity={0.85}>
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
              fontFamily: "var(--font-serif), serif",
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
            fontFamily: "var(--font-serif), serif",
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
                fontFamily: "var(--font-serif), serif",
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
          <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
            <RubyText text={frame.era} />
          </span>
          <span style={{ fontSize: 12, color: COLORS.gold, fontFamily: "var(--font-serif), serif" }}><RubyText text={frame.year} /></span>
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
