"use client";

// 4コマ漫画をSVGで描くコンポーネント。
// 28話×4コマのSVGをサーバーで描くとHTMLが約1MB増えるため、台本データだけを渡し、
// 画面に近づいたコマからブラウザ側で描画する（それまでは同じ比率の枠を置いてレイアウトのずれを防ぐ）。
// 台本はデータで渡す: 1コマ = { cap, chars, props, bubbles, sfx, fx }
//   chars:   { r: 役柄, m: 表情, x, y?, s?(拡大率), f?(左向き), p?(ポーズ), c?(衣の色), n?(名札), e?(効果) ... }
//   props:   { t: 種類, x, y?, s?, f?, text? }
//   bubbles: { t: 台詞("\n"で改行), x, y, by?(話者のchars添字), k?: "y"叫び | "t"心の声 | "w"ささやき }
//   sfx:     { t, x, y, s?(文字サイズ), r?(回転), c?(色) }
//   fx:      "focus" 集中線 | "gloom" どんより | "flash" 衝撃 | "night" 夜
import { useEffect, useRef, useState } from "react";
import { COLORS } from "@/lib/constants";

const W = 320;
const H = 210;
const G = 196; // 地面のy座標（キャラの足元）

const INK = COLORS.ink;
const SKIN = "#F7E4C9";
const PAPER = "#FFFDF6";
const FONT = "'Hiragino Kaku Gothic ProN','Hiragino Sans','Noto Sans JP','Yu Gothic','Meiryo',sans-serif";

const ROBE = {
  emperor: "#D9A630",
  king: "#B5443A",
  official: "#3E5C4E",
  minister: "#A6332A",
  scholar: "#6F8296",
  commoner: "#8A6A48",
  general: "#7A4A33",
  soldier: "#8C7A5B",
  woman: "#D98C8C",
  eunuch: "#5A4A6A",
  child: "#C9A35A",
  shaman: "#5E6E4E",
  naked: SKIN,
};

// ---- 文字幅の概算（全角1em・半角0.55em） ----------------------------------
function textWidth(line, fs) {
  let w = 0;
  for (const ch of line) w += /[\x20-\x7E｡-ﾟ]/.test(ch) ? 0.55 : 1;
  return w * fs;
}

// ---- 顔 ------------------------------------------------------------------
function Face({ m, dirty }) {
  const fx = 3;
  const ex = [fx - 6, fx + 6];
  const ey = -54;
  const eyes = (shape) => ex.map((x, i) => <g key={i}>{shape(x)}</g>);
  const cheeks = (
    <>
      <ellipse cx={fx - 10} cy={-47} rx={3.2} ry={1.8} fill="#F2A3A0" opacity={0.7} />
      <ellipse cx={fx + 10} cy={-47} rx={3.2} ry={1.8} fill="#F2A3A0" opacity={0.7} />
    </>
  );
  switch (m) {
    case "h": // 笑い
      return (
        <g>
          {eyes((x) => <path d={`M${x - 3},${ey + 1} Q${x},${ey - 3.5} ${x + 3},${ey + 1}`} stroke={INK} strokeWidth={1.6} fill="none" strokeLinecap="round" />)}
          <path d={`M${fx - 5},-47 Q${fx},-38.5 ${fx + 5},-47 Z`} fill="#8B2A22" stroke={INK} strokeWidth={1} strokeLinejoin="round" />
          {!dirty && cheeks}
        </g>
      );
    case "a": // 怒り
      return (
        <g>
          <path d={`M${ex[0] - 4},${ey - 7} L${ex[0] + 3},${ey - 4}`} stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
          <path d={`M${ex[1] + 4},${ey - 7} L${ex[1] - 3},${ey - 4}`} stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
          {eyes((x) => <circle cx={x} cy={ey} r={1.8} fill={INK} />)}
          <path d={`M${fx - 4.5},-43.5 Q${fx},-48 ${fx + 4.5},-43.5`} stroke={INK} strokeWidth={1.6} fill="none" strokeLinecap="round" />
        </g>
      );
    case "s": // 驚き
      return (
        <g>
          {eyes((x) => (
            <>
              <circle cx={x} cy={ey} r={3.6} fill="#fff" stroke={INK} strokeWidth={1.2} />
              <circle cx={x} cy={ey} r={1.2} fill={INK} />
            </>
          ))}
          <ellipse cx={fx} cy={-44} rx={2.8} ry={3.8} fill="#8B2A22" stroke={INK} strokeWidth={1} />
        </g>
      );
    case "c": // 泣き
      return (
        <g>
          {eyes((x) => (
            <>
              <path d={`M${x - 3},${ey - 1} Q${x},${ey + 2} ${x + 3},${ey - 1}`} stroke={INK} strokeWidth={1.6} fill="none" strokeLinecap="round" />
              <path d={`M${x},${ey + 2} Q${x - 1},${ey + 8} ${x + 0.5},${ey + 14}`} stroke="#5A9BD5" strokeWidth={2.4} fill="none" strokeLinecap="round" opacity={0.85} />
            </>
          ))}
          <path d={`M${fx - 4},-43 Q${fx - 2},-46 ${fx},-44 Q${fx + 2},-46 ${fx + 4},-43`} stroke={INK} strokeWidth={1.4} fill="none" strokeLinecap="round" />
        </g>
      );
    case "m": // したり顔
      return (
        <g>
          {eyes((x) => (
            <>
              <path d={`M${x - 3.5},${ey - 1} L${x + 3.5},${ey - 1}`} stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
              <path d={`M${x - 2},${ey} Q${x},${ey + 2.2} ${x + 2},${ey}`} fill={INK} />
            </>
          ))}
          <path d={`M${fx - 4},-46 Q${fx + 1},-43.5 ${fx + 5.5},-48.5`} stroke={INK} strokeWidth={1.6} fill="none" strokeLinecap="round" />
        </g>
      );
    case "w": // 困り
      return (
        <g>
          <path d={`M${ex[0] - 3.5},${ey - 5} L${ex[0] + 3},${ey - 7.5}`} stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
          <path d={`M${ex[1] + 3.5},${ey - 5} L${ex[1] - 3},${ey - 7.5}`} stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
          {eyes((x) => <circle cx={x} cy={ey} r={1.6} fill={INK} />)}
          <path d={`M${fx - 4.5},-44.5 Q${fx - 2.2},-47 ${fx},-44.5 Q${fx + 2.2},-42 ${fx + 4.5},-44.5`} stroke={INK} strokeWidth={1.4} fill="none" strokeLinecap="round" />
        </g>
      );
    case "z": // 寝ている・目を閉じる
      return (
        <g>
          {eyes((x) => <path d={`M${x - 3},${ey} Q${x},${ey + 2.5} ${x + 3},${ey}`} stroke={INK} strokeWidth={1.6} fill="none" strokeLinecap="round" />)}
          <circle cx={fx} cy={-44.5} r={1.6} fill="#8B2A22" />
        </g>
      );
    case "k": // キラキラ
      return (
        <g>
          {eyes((x) => (
            <>
              <circle cx={x} cy={ey} r={3.3} fill={INK} />
              <circle cx={x + 1.1} cy={ey - 1.2} r={1.2} fill="#fff" />
            </>
          ))}
          <path d={`M${fx - 4},-46.5 Q${fx},-41 ${fx + 4},-46.5 Z`} fill="#8B2A22" stroke={INK} strokeWidth={1} strokeLinejoin="round" />
          {!dirty && cheeks}
        </g>
      );
    case "b": // 無表情・ぽかん
      return (
        <g>
          {eyes((x) => <circle cx={x} cy={ey} r={1.4} fill={INK} />)}
          <path d={`M${fx - 3},-45 L${fx + 3},-45`} stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
        </g>
      );
    default: // 普通
      return (
        <g>
          {eyes((x) => <ellipse cx={x} cy={ey} rx={1.6} ry={2.2} fill={INK} />)}
          <path d={`M${fx - 3},-46 Q${fx},-43.5 ${fx + 3},-46`} stroke={INK} strokeWidth={1.4} fill="none" strokeLinecap="round" />
        </g>
      );
  }
}

// ---- 髪型・かぶりもの ------------------------------------------------------
const HAIR = "M-17,-54 Q-18,-73 0,-73 Q18,-73 17,-54 Q14,-63 4,-65 Q-6,-66 -17,-54 Z";

function Headgear({ r }) {
  switch (r) {
    case "emperor":
    case "king":
      return (
        <g>
          <path d={HAIR} fill={INK} />
          <rect x={-9} y={-79} width={18} height={10} rx={2} fill={INK} />
          <rect x={-24} y={-83} width={48} height={4.5} rx={1} fill={INK} />
          {[-21, -15, 15, 21].map((x) => (
            <g key={x}>
              <line x1={x} y1={-79} x2={x} y2={-66} stroke={INK} strokeWidth={0.9} />
              {[-75, -70, -66].map((y) => (
                <circle key={y} cx={x} cy={y} r={1.5} fill={r === "emperor" ? COLORS.vermilion : COLORS.gold} />
              ))}
            </g>
          ))}
        </g>
      );
    case "official":
      return (
        <g>
          <path d={HAIR} fill={INK} />
          <path d="M-11,-68 L-9,-80 Q0,-84 9,-80 L11,-68 Z" fill={INK} />
          <path d="M-6,-80 L8,-88 L10,-82 Z" fill={INK} />
        </g>
      );
    case "minister":
      return (
        <g>
          <path d="M-16,-62 Q-16,-80 0,-80 Q16,-80 16,-62 Z" fill={INK} />
          <rect x={-8} y={-86} width={16} height={8} rx={4} fill={INK} />
          <line x1={-15} y1={-67} x2={-34} y2={-69} stroke={INK} strokeWidth={2.6} strokeLinecap="round" />
          <line x1={15} y1={-67} x2={34} y2={-69} stroke={INK} strokeWidth={2.6} strokeLinecap="round" />
        </g>
      );
    case "scholar":
      return (
        <g>
          <path d={HAIR} fill={INK} />
          <circle cx={0} cy={-77} r={6} fill={INK} />
          <rect x={-3} y={-86} width={6} height={9} fill="#3B3B3B" />
          <line x1={-9} y1={-81} x2={9} y2={-81} stroke={INK} strokeWidth={1.4} />
        </g>
      );
    case "commoner":
    case "naked":
      return (
        <g>
          <path d={HAIR} fill={INK} />
          <circle cx={0} cy={-76} r={5} fill={INK} />
          <path d="M-17,-61 Q0,-68 17,-61" stroke="#C9B48A" strokeWidth={3} fill="none" />
        </g>
      );
    case "general":
    case "soldier":
      return (
        <g>
          <path d="M-19,-56 Q-19,-80 0,-80 Q19,-80 19,-56 L13,-60 Q0,-66 -13,-60 Z" fill="#6E7B85" stroke={INK} strokeWidth={1.2} />
          <path d="M-4,-80 L0,-86 L4,-80 Z" fill="#B8C0C6" stroke={INK} strokeWidth={1} />
          {r === "general" && <path d="M0,-86 Q-10,-98 -16,-90 Q-8,-90 0,-86" fill={COLORS.vermilion} stroke={INK} strokeWidth={0.8} />}
        </g>
      );
    case "woman":
      return (
        <g>
          <path d="M-18,-48 Q-20,-74 0,-74 Q20,-74 18,-48 Q15,-62 5,-65 Q-6,-66 -14,-58 Q-16,-52 -18,-48 Z" fill={INK} />
          <ellipse cx={-7} cy={-79} rx={7} ry={5} fill={INK} />
          <ellipse cx={7} cy={-80} rx={7} ry={5} fill={INK} />
          <line x1={-14} y1={-84} x2={16} y2={-76} stroke={COLORS.gold} strokeWidth={1.6} strokeLinecap="round" />
          <circle cx={16} cy={-76} r={2} fill={COLORS.vermilion} />
        </g>
      );
    case "eunuch":
      return (
        <g>
          <path d={HAIR} fill={INK} />
          <path d="M-13,-66 L-11,-92 Q0,-96 11,-92 L13,-66 Z" fill={INK} />
          <rect x={-13} y={-72} width={26} height={4} fill={COLORS.gold} />
        </g>
      );
    case "child":
      return (
        <g>
          <path d={HAIR} fill={INK} />
          <circle cx={-12} cy={-72} r={6} fill={INK} />
          <circle cx={12} cy={-72} r={6} fill={INK} />
          <path d="M-15,-75 L-9,-69 M15,-75 L9,-69" stroke={COLORS.vermilion} strokeWidth={1.6} />
        </g>
      );
    case "shaman":
      return (
        <g>
          <path d={HAIR} fill={INK} />
          <path d="M-12,-70 Q-18,-92 -6,-88 M0,-73 Q0,-98 6,-94 M12,-70 Q20,-90 8,-86" stroke="#6B8E4E" strokeWidth={3} fill="none" strokeLinecap="round" />
          <path d="M-17,-62 Q0,-69 17,-62" stroke={COLORS.vermilion} strokeWidth={2.4} fill="none" />
        </g>
      );
    default:
      return <path d={HAIR} fill={INK} />;
  }
}

// ---- 腕（ポーズ） -----------------------------------------------------------
const POSES = {
  down: [[[-9, -30], [-14, -11]], [[9, -30], [14, -11]]],
  up: [[[-9, -30], [-18, -50]], [[9, -30], [18, -50]]],
  point: [[[-9, -30], [-14, -11]], [[9, -30], [25, -36]]],
  hold: [[[-9, -30], [12, -22]], [[9, -30], [19, -24]]],
  hips: [[[-9, -30], [-17, -20], [-9, -15]], [[9, -30], [17, -20], [9, -15]]],
  head: [[[-9, -30], [-14, -11]], [[9, -30], [16, -48], [12, -63]]],
  belly: [[[-9, -30], [-10, -20], [2, -17]], [[9, -30], [11, -21], [5, -18]]],
  write: [[[-9, -30], [-14, -11]], [[9, -30], [20, -24], [24, -18]]],
};

function Arms({ p, color }) {
  const arms = POSES[p] || POSES.down;
  return (
    <g>
      {arms.map((pts, i) => {
        const d = "M" + pts.map((pt) => pt.join(",")).join(" L");
        const end = pts[pts.length - 1];
        return (
          <g key={i}>
            <path d={d} stroke={INK} strokeWidth={8.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d={d} stroke={color} strokeWidth={5.8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx={end[0]} cy={end[1]} r={3.3} fill={SKIN} stroke={INK} strokeWidth={1.1} />
          </g>
        );
      })}
    </g>
  );
}

// ---- 頭まわりの効果（反転しない） ------------------------------------------
function HeadEffects({ list, hx, hy, s }) {
  if (!list || list.length === 0) return null;
  return (
    <g>
      {list.map((e) => {
        switch (e) {
          case "anger":
            return (
              <g key={e} transform={`translate(${hx + 16 * s},${hy - 18 * s}) scale(${s})`} stroke={COLORS.vermilion} strokeWidth={2} fill="none" strokeLinecap="round">
                <path d="M-6,-2 Q-2,-2 -2,-6 M2,-6 Q2,-2 6,-2 M6,2 Q2,2 2,6 M-2,6 Q-2,2 -6,2" />
              </g>
            );
          case "sweat":
            return (
              <path key={e} transform={`translate(${hx + 19 * s},${hy - 6 * s}) scale(${s})`} d="M0,-6 Q5,2 0,5 Q-5,2 0,-6 Z" fill="#9CCBEB" stroke={INK} strokeWidth={0.9} />
            );
          case "lines":
            return (
              <g key={e} stroke={INK} strokeWidth={1.4} strokeLinecap="round">
                {[-9, 0, 9].map((dx) => (
                  <line key={dx} x1={hx + dx * s} y1={hy - (26 + (dx === 0 ? 6 : 3)) * s} x2={hx + dx * 1.15 * s} y2={hy - (36 + (dx === 0 ? 6 : 3)) * s} />
                ))}
              </g>
            );
          case "hearts":
            return (
              <g key={e} fill="#E0607E">
                {[[-20, -22, 1], [18, -28, 0.8]].map(([dx, dy, k], i) => (
                  <path key={i} transform={`translate(${hx + dx * s},${hy + dy * s}) scale(${s * k})`} d="M0,4 C-8,-2 -4,-8 0,-4 C4,-8 8,-2 0,4 Z" />
                ))}
              </g>
            );
          case "sparkle":
            return (
              <g key={e} fill={COLORS.gold}>
                {[[-24, -16, 1], [22, -24, 0.8], [26, 4, 0.6]].map(([dx, dy, k], i) => (
                  <path key={i} transform={`translate(${hx + dx * s},${hy + dy * s}) scale(${s * k})`} d="M0,-7 Q1,-1 7,0 Q1,1 0,7 Q-1,1 -7,0 Q-1,-1 0,-7 Z" />
                ))}
              </g>
            );
          case "zz":
            return (
              <text key={e} x={hx + 18 * s} y={hy - 20 * s} fontSize={12 * s} fontWeight={900} fill={INK} fontFamily={FONT}>
                Zz
              </text>
            );
          case "gloom":
            return (
              <g key={e} stroke="#6A6A8A" strokeWidth={1.2} opacity={0.7}>
                {[-14, -7, 0, 7, 14].map((dx) => (
                  <line key={dx} x1={hx + dx * s} y1={hy - 40 * s} x2={hx + dx * s} y2={hy - 22 * s} />
                ))}
              </g>
            );
          default:
            return null;
        }
      })}
    </g>
  );
}

const AUTO_EFFECTS = { a: ["anger"], s: ["lines", "sweat"], w: ["sweat"], k: ["sparkle"], z: [] };

export function Figure({ ch }) {
  const { r = "commoner", m = "n", x, y = 0, s = 1, f = false, p = "down", c, n, beard, long, belly, dirty, tilt = 0 } = ch;
  const color = c || ROBE[r] || ROBE.commoner;
  const effects = ch.e ?? AUTO_EFFECTS[m] ?? [];
  const hx = x + (f ? -3 : 3) * s;
  const hy = G + y - 54 * s;
  return (
    <g>
      <g transform={`translate(${x},${G + y}) scale(${f ? -s : s},${s}) rotate(${tilt})`}>
        <ellipse cx={0} cy={1} rx={17} ry={3} fill={INK} opacity={0.12} />
        {/* 衣 */}
        <path d="M-14,0 L-10,-33 Q0,-37 10,-33 L14,0 Z" fill={color} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
        {r === "naked" ? (
          <g>
            <rect x={-9} y={-14} width={18} height={9} fill="#fff" stroke={INK} strokeWidth={1} />
            {[0, 1, 2].map((i) => [0, 1].map((j) => <rect key={`${i}${j}`} x={-9 + i * 6} y={-14 + j * 4.5} width={6} height={4.5} fill={(i + j) % 2 ? "#D8D0C0" : "#9C9484"} />))}
          </g>
        ) : (
          <>
            <path d="M-6,-34 L0,-24 L6,-34" stroke={INK} strokeWidth={1.2} fill="none" />
            <line x1={-12} y1={-17} x2={12} y2={-17} stroke={INK} strokeWidth={1.1} opacity={0.6} />
            {(r === "general" || r === "soldier") && (
              <path d="M-11,-28 L11,-28 M-11.5,-23 L11.5,-23" stroke="#5A3A28" strokeWidth={1.2} />
            )}
          </>
        )}
        {belly && <ellipse cx={3} cy={-20} rx={8} ry={6} fill={SKIN} stroke={INK} strokeWidth={1} />}
        <Arms p={p} color={color} />
        {/* 頭 */}
        {long ? (
          <ellipse cx={0} cy={-51} rx={15} ry={21} fill={dirty ? "#A8937A" : SKIN} stroke={INK} strokeWidth={1.6} />
        ) : (
          <circle cx={0} cy={-54} r={17} fill={dirty ? "#A8937A" : SKIN} stroke={INK} strokeWidth={1.6} />
        )}
        {dirty && (
          <g fill="#7A6650" opacity={0.6}>
            <circle cx={-8} cy={-60} r={1.5} />
            <circle cx={11} cy={-48} r={1.8} />
            <circle cx={-4} cy={-42} r={1.2} />
          </g>
        )}
        <Face m={m} dirty={dirty} />
        {beard && <path d="M-8,-43 Q-6,-30 2,-26 Q10,-30 12,-43 Q3,-38 -8,-43 Z" fill={INK} />}
        <Headgear r={r} />
      </g>
      <HeadEffects list={effects} hx={hx} hy={hy} s={s} />
      {n && (
        <text x={x} y={G + y + 11} textAnchor="middle" fontSize={8.5} fontWeight={700} fill={INK} fontFamily={FONT} paintOrder="stroke" stroke={PAPER} strokeWidth={3}>
          {n}
        </text>
      )}
    </g>
  );
}

// ---- 小道具 ------------------------------------------------------------------
function SignText({ x, y, text, vertical, fs = 10, color = INK }) {
  if (vertical) {
    const chars = [...text];
    return (
      <text x={x} y={y} textAnchor="middle" fontSize={fs} fontWeight={700} fill={color} stroke="none" fontFamily={FONT}>
        {chars.map((chr, i) => (
          <tspan key={i} x={x} dy={i === 0 ? 0 : fs * 1.05}>
            {chr}
          </tspan>
        ))}
      </text>
    );
  }
  return (
    <text x={x} y={y} textAnchor="middle" fontSize={fs} fontWeight={700} fill={color} stroke="none" fontFamily={FONT}>
      {text}
    </text>
  );
}

function Animal({ kind }) {
  // 右向き・原点は足元中央
  const body = kind === "deer" ? "#B07A45" : kind === "horse" ? "#8A5A3A" : "#9A9088";
  return (
    <g stroke={INK} strokeWidth={1.3} strokeLinejoin="round">
      {[-14, -6, 8, 15].map((lx) => (
        <line key={lx} x1={lx} y1={-14} x2={lx} y2={0} strokeWidth={3} strokeLinecap="round" />
      ))}
      <ellipse cx={0} cy={-20} rx={22} ry={11} fill={body} />
      <path d="M-21,-22 Q-27,-20 -26,-14" fill="none" strokeWidth={2} />
      <path d="M14,-26 L22,-40 L30,-38 L24,-24 Z" fill={body} />
      <ellipse cx={30} cy={-40} rx={9} ry={6} fill={body} />
      <circle cx={31} cy={-42} r={1.3} fill={INK} stroke="none" />
      {kind === "donkey" && (
        <>
          <ellipse cx={23} cy={-52} rx={2.6} ry={9} fill={body} transform="rotate(-15 23 -52)" />
          <ellipse cx={28} cy={-53} rx={2.6} ry={9} fill={body} transform="rotate(10 28 -53)" />
          <ellipse cx={37} cy={-39} rx={3} ry={3.6} fill="#CFC6BC" />
        </>
      )}
      {kind === "deer" && (
        <>
          <path d="M25,-45 L20,-58 L15,-62 M20,-58 L24,-64 M31,-46 L34,-60 L30,-66 M34,-60 L40,-64" fill="none" strokeWidth={1.8} strokeLinecap="round" />
          <circle cx={-6} cy={-24} r={2} fill="#F3E2C2" stroke="none" />
          <circle cx={4} cy={-19} r={2} fill="#F3E2C2" stroke="none" />
        </>
      )}
      {kind === "horse" && <path d="M18,-38 Q12,-30 14,-24" fill="none" strokeWidth={4} stroke="#3A2A1A" />}
    </g>
  );
}

function Prop({ pr }) {
  const { t, x, y = 0, s = 1, f = false, text } = pr;
  const at = (inner, flip = f) => <g transform={`translate(${x},${G + y}) scale(${flip ? -s : s},${s})`}>{inner}</g>;
  switch (t) {
    case "beacon":
      return at(
        <g stroke={INK} strokeWidth={1.3}>
          <path d="M-18,0 L-14,-60 L14,-60 L18,0 Z" fill="#B9A27E" />
          {[-15, -30, -45].map((yy) => (
            <line key={yy} x1={-17} y1={yy} x2={17} y2={yy} strokeWidth={0.8} opacity={0.6} />
          ))}
          <rect x={-18} y={-66} width={36} height={6} fill="#9C8662" />
          <path d="M-12,-66 Q-14,-82 -4,-90 Q-6,-80 2,-78 Q0,-92 10,-98 Q8,-84 14,-80 Q16,-72 12,-66 Z" fill="#F08A2C" />
          <path d="M-5,-66 Q-6,-76 0,-80 Q2,-72 6,-70 Q7,-67 5,-66 Z" fill="#FFD34D" stroke="none" />
          <path d="M-2,-100 Q-14,-112 -4,-124 Q6,-134 -2,-148" fill="none" stroke="#9A9A9A" strokeWidth={5} opacity={0.6} strokeLinecap="round" />
        </g>
      );
    case "river":
      return (
        <g>
          <rect x={x} y={G - 14} width={pr.w || 140} height={18} fill="#9CC7E0" opacity={0.75} />
          <path
            d={`M${x + 6},${G - 6} q8,-4 16,0 t16,0 M${x + 50},${G - 2} q8,-4 16,0 t16,0 M${x + 96},${G - 8} q8,-4 16,0 t16,0`}
            stroke="#fff"
            strokeWidth={1.4}
            fill="none"
          />
        </g>
      );
    case "gate":
      return at(
        <g stroke={INK} strokeWidth={1.4}>
          <rect x={-48} y={-110} width={14} height={110} fill={COLORS.vermilion} />
          <rect x={34} y={-110} width={14} height={110} fill={COLORS.vermilion} />
          <path d="M-62,-110 L62,-110 L52,-124 L-52,-124 Z" fill="#4A4038" />
          <rect x={-34} y={-104} width={68} height={10} fill={COLORS.gold} />
          {text && <SignText x={0} y={-96} text={text} fs={8} />}
        </g>,
        false
      );
    case "wall":
      return (
        <g stroke={INK} strokeWidth={1.3}>
          <rect x={x} y={G - 100} width={pr.w || 120} height={100} fill="#CDBB98" />
          {[20, 40, 60, 80].map((yy) => (
            <line key={yy} x1={x} y1={G - yy} x2={x + (pr.w || 120)} y2={G - yy} strokeWidth={0.6} opacity={0.5} />
          ))}
          {pr.door && <path d={`M${pr.door - 11},${G} L${pr.door - 11},${G - 26} Q${pr.door},${G - 36} ${pr.door + 11},${G - 26} L${pr.door + 11},${G} Z`} fill="#3A2E25" />}
        </g>
      );
    case "pot":
      return at(
        <g stroke={INK} strokeWidth={1.4}>
          <path d="M-30,-40 L30,-40 Q30,-6 0,-4 Q-30,-6 -30,-40 Z" fill="#5A5048" />
          <rect x={-34} y={-44} width={68} height={6} rx={2} fill="#4A4038" />
          <path d="M-22,-4 L-26,0 M22,-4 L26,0 M0,-4 L0,0" strokeWidth={3} />
          <path d="M-14,-50 Q-20,-60 -12,-68 M0,-50 Q-6,-62 2,-72 M14,-50 Q8,-60 16,-68" stroke="#AAA" strokeWidth={2} fill="none" strokeLinecap="round" />
          <path d="M-26,-12 Q-18,-20 -10,-12 Q-2,-20 6,-12 Q14,-20 22,-12" stroke={COLORS.vermilion} fill="none" strokeWidth={2} opacity={0.7} />
        </g>
      );
    case "bowl":
      return at(
        <g stroke={INK} strokeWidth={1.2}>
          <path d="M-12,-10 L12,-10 Q11,0 0,1 Q-11,0 -12,-10 Z" fill="#E8E2D2" />
          <path d="M-11,-10 Q0,-17 11,-10 Z" fill="#E9CF8C" />
          <path d="M-4,-18 Q-8,-24 -3,-29 M4,-18 Q0,-24 5,-29" stroke="#AAA" fill="none" strokeWidth={1.5} />
        </g>
      );
    case "toilet":
      return at(
        <g stroke={INK} strokeWidth={1.4}>
          <path d="M-46,-90 L46,-90 L40,-104 L-40,-104 Z" fill="#6A5A4A" />
          <line x1={-42} y1={-90} x2={-42} y2={0} strokeWidth={3} />
          <line x1={42} y1={-90} x2={42} y2={0} strokeWidth={3} />
          <rect x={-14} y={-88} width={28} height={16} fill="#F3EBD6" />
          <SignText x={0} y={-76} text="厠" fs={12} />
          <ellipse cx={0} cy={-2} rx={26} ry={6} fill="#2A231C" />
          <path d="M-8,-4 L-12,-30 L-6,-31 L-2,-6 M6,-4 L12,-28 L18,-26 L10,-4" fill={SKIN} strokeWidth={1.2} />
          <path d="M-15,-31 L-5,-33 M10,-29 L20,-26" strokeWidth={3} strokeLinecap="round" />
        </g>,
        false
      );
    case "sign":
      return (
        <g>
          {pr.post !== false && <line x1={x} y1={G + y} x2={x} y2={G + y - 30} stroke={INK} strokeWidth={2.5} />}
          {(() => {
            const fs = pr.fs || 10;
            const vertical = pr.v;
            const len = [...text].length;
            const w = vertical ? fs + 10 : len * fs + 12;
            const h = vertical ? len * fs * 1.05 + 10 : fs + 10;
            const top = G + y - (pr.post === false ? 0 : 30) - h;
            return (
              <g>
                <rect x={x - w / 2} y={top} width={w} height={h} fill="#F3EBD6" stroke={INK} strokeWidth={1.3} />
                <SignText x={x} y={top + fs + (vertical ? 3 : 2.5)} text={text} vertical={vertical} fs={fs} color={pr.color || INK} />
              </g>
            );
          })()}
        </g>
      );
    case "deer":
    case "donkey":
    case "horse":
      return (
        <g>
          {at(<Animal kind={t} />)}
          {text && (() => {
            const fs = 8.5;
            const w = [...text].length * fs + 8;
            const sx = x + (f ? -30 : 30) * s;
            const sy = G + y - 30 * s;
            return (
              <g>
                <rect x={sx - w / 2} y={sy} width={w} height={fs + 6} fill="#fff" stroke={INK} strokeWidth={1} />
                <SignText x={sx} y={sy + fs + 1.5} text={text} fs={fs} />
              </g>
            );
          })()}
        </g>
      );
    case "table":
      return at(
        <g stroke={INK} strokeWidth={1.3}>
          <rect x={-40} y={-24} width={80} height={6} fill="#7A4A2E" />
          <line x1={-34} y1={-18} x2={-34} y2={0} strokeWidth={3} />
          <line x1={34} y1={-18} x2={34} y2={0} strokeWidth={3} />
          {pr.food !== false && (
            <>
              <ellipse cx={-16} cy={-28} rx={10} ry={4} fill="#E8E2D2" />
              <ellipse cx={14} cy={-28} rx={10} ry={4} fill="#E8E2D2" />
              <path d="M8,-30 Q14,-38 20,-30" fill="#C9763E" />
              <path d="M-26,-28 L-22,-40 L-18,-28 Z" fill="#D9A630" />
            </>
          )}
        </g>
      );
    case "meat":
      return at(
        <g stroke={INK} strokeWidth={1.3}>
          <path d="M-18,-10 Q-22,-30 0,-32 Q22,-30 18,-10 Q0,-2 -18,-10 Z" fill="#C25C4E" />
          <path d="M-10,-24 Q0,-28 10,-24" stroke="#F3D3C4" strokeWidth={2} fill="none" />
          <path d="M18,-14 L30,-18" strokeWidth={5} stroke="#F3EBD6" strokeLinecap="round" />
          <circle cx={31} cy={-19} r={3.5} fill="#F3EBD6" />
        </g>
      );
    case "sword":
      return at(
        <g stroke={INK} strokeWidth={1.1}>
          <path d="M0,0 L2,-40 L4,0 Z" fill="#D8DDE2" />
          <rect x={-4} y={0} width={12} height={3} fill={COLORS.gold} />
          <rect x={0.5} y={3} width={3} height={9} fill="#5A3A28" />
        </g>
      );
    case "cap":
      return at(
        <g stroke={INK} strokeWidth={1.2}>
          <path d="M-9,-2 L-7,-14 Q0,-17 7,-14 L9,-2 Z" fill={INK} />
          <rect x={-2.5} y={-22} width={5} height={8} fill="#3B3B3B" />
        </g>
      );
    case "censor": {
      const w = pr.w || 46;
      const h = pr.h || 30;
      return (
        <g>
          <rect x={x - w / 2} y={G + y - h} width={w} height={h} fill="#E9E2D0" stroke={INK} strokeWidth={1.3} />
          <SignText x={x} y={G + y - h / 2 + 4} text={text || "自主規制"} fs={9} color={COLORS.vermilion} />
        </g>
      );
    }
    case "jar":
      return at(
        <g stroke={INK} strokeWidth={1.3}>
          <path d="M-10,-34 L10,-34 L12,-28 Q22,-18 14,0 L-14,0 Q-22,-18 -12,-28 Z" fill="#8C5A3C" />
          <rect x={-12} y={-38} width={24} height={5} fill="#C9A35A" />
          <rect x={-7} y={-22} width={14} height={12} fill="#F3EBD6" />
          <SignText x={0} y={-12.5} text="酒" fs={9} />
        </g>,
        false
      );
    case "cart":
      return at(
        <g stroke={INK} strokeWidth={1.3}>
          <rect x={-36} y={-34} width={72} height={20} fill="#9A6A3E" />
          <circle cx={-20} cy={-12} r={12} fill="none" strokeWidth={3} />
          <circle cx={20} cy={-12} r={12} fill="none" strokeWidth={3} />
          {pr.full &&
            [[-26, -40], [-14, -44], [-2, -40], [10, -46], [22, -40], [-20, -52], [-6, -54], [8, -56], [18, -50], [0, -64], [-12, -62], [12, -66]].map(([fx2, fy], i) => (
              <circle key={i} cx={fx2} cy={fy} r={6} fill={["#E0703A", "#D93A3A", "#E8C23A", "#7AAE4A"][i % 4]} />
            ))}
        </g>
      );
    case "fruits":
      return (
        <g stroke={INK} strokeWidth={1}>
          {[[0, 0], [24, -14], [-18, -22], [36, 8], [10, -30]].map(([dx, dy], i) => (
            <g key={i}>
              <circle cx={x + dx} cy={G + y + dy} r={5} fill={["#E0703A", "#D93A3A", "#E8C23A", "#7AAE4A", "#E0703A"][i]} />
              <path d={`M${x + dx + 6},${G + y + dy - 3} l7,-3`} stroke={INK} strokeWidth={0.8} opacity={0.6} />
            </g>
          ))}
        </g>
      );
    case "spit":
      return (
        <g fill="#BFE3F5" stroke={INK} strokeWidth={0.8}>
          {[[0, 0], [10, -8], [-6, -12], [14, 6], [4, 10]].map(([dx, dy], i) => (
            <path key={i} d={`M${x + dx},${G + y + dy - 3} q3,4 0,6 q-3,-2 0,-6 z`} />
          ))}
        </g>
      );
    case "frog":
      return at(
        <g stroke={INK} strokeWidth={1.2}>
          <ellipse cx={0} cy={-8} rx={13} ry={8} fill="#6BA34A" />
          <circle cx={-6} cy={-16} r={4} fill="#6BA34A" />
          <circle cx={6} cy={-16} r={4} fill="#6BA34A" />
          <circle cx={-6} cy={-16} r={1.5} fill={INK} />
          <circle cx={6} cy={-16} r={1.5} fill={INK} />
          <path d="M-6,-7 Q0,-3 6,-7" fill="none" />
        </g>
      );
    case "coral":
      return at(
        <g stroke={INK} strokeWidth={1.2}>
          <rect x={-10} y={-8} width={20} height={8} fill="#4A4038" />
          {pr.broken ? (
            <g fill="#E05A4A">
              <path d="M-3,-8 L-2,-20 L3,-18 L2,-8 Z" />
              <path d="M-26,-4 l8,-6 l3,4 l-8,5 z M18,-6 l10,-2 l0,4 l-9,2 z M-14,-28 l6,-4 l2,5 z M14,-26 l5,3 l-3,4 z" />
            </g>
          ) : (
            <path
              d="M0,-8 L0,-30 M0,-22 L-10,-34 M-10,-34 L-14,-44 M-10,-34 L-4,-44 M0,-30 L6,-46 M6,-46 L2,-56 M6,-46 L12,-54 M0,-18 L10,-28 M10,-28 L16,-36"
              stroke="#E05A4A"
              strokeWidth={4 * (pr.big ? 1.4 : 1)}
              strokeLinecap="round"
              fill="none"
            />
          )}
        </g>
      );
    case "ruyi":
      return at(
        <g stroke={INK} strokeWidth={1.2}>
          <path d="M0,0 Q4,-20 2,-34" stroke="#7A8088" strokeWidth={4} fill="none" strokeLinecap="round" />
          <path d="M-4,-36 Q2,-46 8,-36 Q2,-30 -4,-36 Z" fill="#7A8088" />
        </g>
      );
    case "bed":
      return at(
        <g stroke={INK} strokeWidth={1.3}>
          <rect x={-50} y={-22} width={100} height={8} fill="#7A4A2E" />
          <rect x={-50} y={-40} width={8} height={26} fill="#7A4A2E" />
          <line x1={-44} y1={-14} x2={-44} y2={0} strokeWidth={3} />
          <line x1={44} y1={-14} x2={44} y2={0} strokeWidth={3} />
        </g>
      );
    case "tablet":
      return at(
        <g stroke={INK} strokeWidth={1.3}>
          <rect x={-30} y={-16} width={60} height={16} fill="#5A3A28" />
          <rect x={-9} y={-56} width={18} height={40} fill="#2A231C" />
          <path d="M-11,-56 L0,-62 L11,-56 Z" fill="#2A231C" />
          <SignText x={0} y={-44} text={text || "王粲"} vertical fs={8} color={COLORS.gold} />
        </g>,
        false
      );
    case "rock":
      return at(
        <g stroke={INK} strokeWidth={1.4}>
          <path d="M-22,0 Q-30,-20 -18,-36 Q-26,-52 -8,-62 Q4,-74 14,-60 Q28,-50 20,-34 Q30,-16 20,0 Z" fill="#9AA3A0" />
          <ellipse cx={-6} cy={-44} rx={5} ry={7} fill="#5A6360" />
          <ellipse cx={8} cy={-24} rx={6} ry={4} fill="#5A6360" />
          <ellipse cx={4} cy={-58} rx={3} ry={3} fill="#5A6360" />
        </g>
      );
    case "staff":
      return at(<line x1={-24} y1={-2} x2={24} y2={-6} stroke="#7A4A2E" strokeWidth={3.5} strokeLinecap="round" />);
    case "paper": {
      const pw = Math.max(32, text ? [...text].length * 9 + 10 : 0);
      return at(
        <g stroke={INK} strokeWidth={1.1}>
          <rect x={-pw / 2} y={-24} width={pw} height={22} fill="#fff" />
          {(text ? [] : [-18, -13, -8]).map((yy) => (
            <line key={yy} x1={-11} y1={yy} x2={11} y2={yy} strokeWidth={0.7} opacity={0.6} />
          ))}
          {text && <SignText x={0} y={-9} text={text} fs={9} />}
        </g>,
        false
      );
    }
    case "pile": {
      const n = pr.n || 6;
      return (
        <g stroke={INK} strokeWidth={1}>
          {Array.from({ length: n }).map((_, i) => (
            <rect key={i} x={x - 18 + (i % 2) * 3} y={G + y - (i + 1) * 7} width={36} height={7} fill={i % 2 ? "#F3EBD6" : "#E9DDBE"} />
          ))}
          {text && <SignText x={x} y={G + y - n * 7 - 5} text={text} fs={10} color={COLORS.vermilion} />}
        </g>
      );
    }
    case "sack":
      return at(
        <g stroke={INK} strokeWidth={1.3}>
          <path d="M-14,0 Q-20,-20 -8,-28 L-10,-34 L10,-34 L8,-28 Q20,-20 14,0 Z" fill="#D8C69A" />
          <SignText x={0} y={-10} text={text || "禄"} fs={11} color={COLORS.vermilion} />
        </g>,
        false
      );
    case "saw":
      return at(
        <g stroke={INK} strokeWidth={1.1}>
          <path d="M0,0 L34,-10 L36,-4 L2,6 Z" fill="#C8CDD2" />
          <rect x={-10} y={-2} width={12} height={7} fill="#7A4A2E" transform="rotate(-16)" />
        </g>
      );
    case "chair":
      return at(
        <g stroke={INK} strokeWidth={1.3} fill="#C9935A">
          <rect x={-18} y={-26} width={36} height={5} />
          <rect x={-18} y={-58} width={5} height={58} />
          <rect x={13} y={-21} width={5} height={21} />
          <rect x={-18} y={-58} width={30} height={5} />
          {pr.done && <rect x={-13} y={-21} width={4} height={21} />}
        </g>
      );
    case "painting":
      return at(
        <g stroke={INK} strokeWidth={1.2}>
          <rect x={-40} y={-80} width={80} height={56} fill="#F1E6C8" />
          <path d="M-34,-34 Q-22,-60 -10,-44 Q0,-66 14,-42 Q24,-58 34,-34 Z" fill="#8FA88A" stroke="none" opacity={0.8} />
          <line x1={0} y1={-24} x2={0} y2={0} strokeWidth={2} />
          {pr.stamps &&
            [[-32, -74], [-20, -70], [26, -72], [18, -62], [-28, -52], [30, -48], [-6, -74], [8, -54], [-14, -40], [24, -32]].map(([sx, sy], i) => (
              <rect key={i} x={sx} y={sy} width={6} height={6} fill={COLORS.vermilion} stroke="none" />
            ))}
          {pr.stamps &&
            [[-36, -66], [10, -76], [-36, -30]].map(([sx, sy], i) => (
              <path key={`w${i}`} d={`M${sx},${sy} l20,0 M${sx},${sy + 3} l16,0`} strokeWidth={0.8} />
            ))}
        </g>,
        false
      );
    case "moon":
      return (
        <g>
          <circle cx={x} cy={y} r={14 * s} fill="#F6E7A6" stroke={INK} strokeWidth={1} />
        </g>
      );
    case "sun":
      return (
        <g stroke="#E0A030" strokeWidth={2}>
          <circle cx={x} cy={y} r={11 * s} fill="#F7C948" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            return <line key={i} x1={x + Math.cos(a) * 15 * s} y1={y + Math.sin(a) * 15 * s} x2={x + Math.cos(a) * 21 * s} y2={y + Math.sin(a) * 21 * s} />;
          })}
        </g>
      );
    case "plum":
      return (
        <g transform={`translate(${x},${y}) scale(${s})`} stroke={INK} strokeWidth={1}>
          <circle cx={0} cy={0} r={12} fill="#C8D86A" />
          <circle cx={-4} cy={-4} r={3} fill="#fff" opacity={0.5} stroke="none" />
          <path d="M0,-12 Q4,-18 10,-16" fill="none" strokeWidth={1.5} />
          <path d="M6,-16 Q12,-24 16,-14 Q10,-12 6,-16 Z" fill="#6BA34A" />
        </g>
      );
    case "bone":
      return at(
        <g stroke={INK} strokeWidth={1.1}>
          <path d="M-12,0 L12,-6" stroke="#F3EBD6" strokeWidth={4} strokeLinecap="round" />
          <circle cx={-13} cy={1} r={3} fill="#F3EBD6" />
          <circle cx={13} cy={-7} r={3} fill="#F3EBD6" />
        </g>
      );
    case "bag":
      return at(
        <g stroke={INK} strokeWidth={1.3}>
          <path d="M-16,0 L-14,-22 Q0,-26 14,-22 L16,0 Z" fill="#B58A5A" />
          <path d="M-14,-22 Q0,-34 14,-22" fill="#9A7448" />
          <path d="M-6,-28 Q0,-38 6,-28" fill="none" strokeWidth={2} />
        </g>
      );
    case "box":
      return at(
        <g stroke={INK} strokeWidth={1.2}>
          <rect x={-10} y={-12} width={20} height={12} fill="#F3EBD6" />
          <SignText x={0} y={-3} text={text || "澡豆"} fs={6.5} />
        </g>,
        false
      );
    case "brush":
      return at(
        <g stroke={INK} strokeWidth={1}>
          <line x1={0} y1={0} x2={0} y2={-22} stroke="#7A4A2E" strokeWidth={3} />
          <path d="M-2.5,0 Q0,9 2.5,0 Z" fill={INK} />
        </g>
      );
    case "banner":
      return at(
        <g stroke={INK} strokeWidth={1.3}>
          <line x1={0} y1={0} x2={0} y2={-120} strokeWidth={2.4} />
          <path d="M0,-118 L-30,-118 L-30,-62 L0,-62 Z" fill={COLORS.vermilion} />
          <SignText x={-15} y={-104} text={text} vertical fs={11} color="#fff" />
        </g>,
        false
      );
    case "cup":
      return at(
        <g stroke={INK} strokeWidth={1.1}>
          <path d="M-6,-10 L6,-10 L4,0 L-4,0 Z" fill={COLORS.gold} />
        </g>
      );
    case "heart":
      return (
        <path transform={`translate(${x},${y}) scale(${s})`} d="M0,6 C-12,-3 -6,-12 0,-6 C6,-12 12,-3 0,6 Z" fill="#E0607E" stroke={INK} strokeWidth={0.8} />
      );
    case "dust":
      return (
        <g fill="#E8DFC8" stroke={INK} strokeWidth={1.1}>
          {[[-40, -8, 16], [-14, -18, 20], [14, -12, 18], [40, -6, 14], [0, -2, 16]].map(([dx, dy, rr], i) => (
            <circle key={i} cx={x + dx * s} cy={G + y + dy * s} r={rr * s} />
          ))}
        </g>
      );
    default:
      return null;
  }
}

// ---- 吹き出し ------------------------------------------------------------------
const FS = 11.5;
const LH = 14;

function Bubble({ b, chars }) {
  const lines = String(b.t).split("\n");
  const fs = b.fs || FS;
  const lh = (LH * fs) / FS;
  const tw = Math.max(...lines.map((l) => textWidth(l, fs)));
  const w = tw + 16;
  const h = lines.length * lh + 10;
  const cx = Math.min(Math.max(b.x, w / 2 + 4), W - w / 2 - 4);
  const cy = Math.min(Math.max(b.y, h / 2 + 4), H - h / 2 - 4);
  const kind = b.k || "s";

  let tail = null;
  const speaker = b.by !== undefined ? chars[b.by] : null;
  if (speaker) {
    const s = speaker.s || 1;
    const hx = speaker.x + (speaker.f ? -3 : 3) * s;
    const hy = G + (speaker.y || 0) - 54 * s;
    const dx = hx - cx;
    const dy = hy - cy;
    const dist = Math.hypot(dx, dy) || 1;
    const ux = dx / dist;
    const uy = dy / dist;
    const reach = Math.max(dist - 24 * s, 6);
    const tipX = cx + ux * Math.min(reach, Math.abs(uy) > 0.3 ? h / 2 + 18 : w / 2 + 16);
    const tipY = cy + uy * Math.min(reach, Math.abs(uy) > 0.3 ? h / 2 + 18 : w / 2 + 16);
    tail = { tipX, tipY, ux, uy };
  }

  const bodyPath = (() => {
    if (kind === "y") {
      const rx = w / 2 + 10;
      const ry = h / 2 + 9;
      const n = 22;
      let d = "";
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2;
        const k = i % 2 ? 0.84 : 1.06;
        d += `${i ? "L" : "M"}${(cx + Math.cos(a) * rx * k).toFixed(1)},${(cy + Math.sin(a) * ry * k).toFixed(1)}`;
      }
      return d + "Z";
    }
    const rr = Math.min(h / 2, 12);
    const x0 = cx - w / 2;
    const y0 = cy - h / 2;
    return `M${x0 + rr},${y0} H${x0 + w - rr} A${rr},${rr} 0 0 1 ${x0 + w},${y0 + rr} V${y0 + h - rr} A${rr},${rr} 0 0 1 ${x0 + w - rr},${y0 + h} H${x0 + rr} A${rr},${rr} 0 0 1 ${x0},${y0 + h - rr} V${y0 + rr} A${rr},${rr} 0 0 1 ${x0 + rr},${y0} Z`;
  })();

  const tailPath =
    tail && kind !== "t" && kind !== "y"
      ? `M${cx - tail.uy * 6},${cy + tail.ux * 6} L${tail.tipX},${tail.tipY} L${cx + tail.uy * 6},${cy - tail.ux * 6} Z`
      : null;
  const thinkDots =
    tail && kind === "t"
      ? [6, 13].map((gap, i) => {
          const d = (Math.abs(tail.uy) > 0.3 ? h / 2 : w / 2) + gap;
          return { x: cx + tail.ux * d, y: cy + tail.uy * d, r: 3.4 - i * 1.3 };
        })
      : [];

  const stroke = kind === "w" ? { strokeDasharray: "3 2.5" } : {};
  return (
    <g>
      <path d={bodyPath} fill="none" stroke={INK} strokeWidth={kind === "y" ? 3 : 2.6} {...stroke} strokeLinejoin="round" />
      {tailPath && <path d={tailPath} fill="none" stroke={INK} strokeWidth={2.6} strokeLinejoin="round" />}
      <path d={bodyPath} fill="#fff" />
      {tailPath && <path d={tailPath} fill="#fff" />}
      {thinkDots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#fff" stroke={INK} strokeWidth={1.2} />
      ))}
      <text textAnchor="middle" fontSize={fs} fontWeight={kind === "y" ? 900 : 700} fill={INK} fontFamily={FONT}>
        {lines.map((l, i) => (
          <tspan key={i} x={cx} y={cy - (lines.length * lh) / 2 + lh * (i + 0.78)}>
            {l}
          </tspan>
        ))}
      </text>
    </g>
  );
}

function Caption({ text }) {
  const lines = String(text).split("\n");
  const fs = 9.5;
  const w = Math.max(...lines.map((l) => textWidth(l, fs))) + 12;
  const h = lines.length * 12 + 7;
  return (
    <g>
      <rect x={5} y={5} width={w} height={h} fill="#F3E6BE" stroke={INK} strokeWidth={1.2} />
      <text fontSize={fs} fontWeight={700} fill={INK} fontFamily={FONT}>
        {lines.map((l, i) => (
          <tspan key={i} x={11} y={5 + 12 * (i + 1) - 1.5}>
            {l}
          </tspan>
        ))}
      </text>
    </g>
  );
}

function Sfx({ sx }) {
  const size = sx.s || 16;
  return (
    <text
      x={sx.x}
      y={sx.y}
      fontSize={size}
      fontWeight={900}
      fill={sx.c || COLORS.vermilion}
      stroke="#fff"
      strokeWidth={3.5}
      paintOrder="stroke"
      strokeLinejoin="round"
      fontFamily={FONT}
      textAnchor="middle"
      transform={sx.r ? `rotate(${sx.r} ${sx.x} ${sx.y})` : undefined}
      fontStyle="italic"
    >
      {sx.t}
    </text>
  );
}

function Background({ fx, focus }) {
  switch (fx) {
    case "focus": {
      const [fxc, fyc] = focus || [W / 2, H / 2];
      const lines = Array.from({ length: 40 }).map((_, i) => {
        const a = (i / 40) * Math.PI * 2 + (i % 3) * 0.03;
        const r0 = 70 + (i % 4) * 12;
        return (
          <line key={i} x1={fxc + Math.cos(a) * r0} y1={fyc + Math.sin(a) * r0} x2={fxc + Math.cos(a) * 260} y2={fyc + Math.sin(a) * 260} stroke={INK} strokeWidth={i % 2 ? 0.8 : 1.6} opacity={0.35} />
        );
      });
      return <g>{lines}</g>;
    }
    case "gloom":
      return (
        <g>
          <rect x={0} y={0} width={W} height={H} fill="#DCD8E4" />
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={i} x1={6 + i * 11} y1={0} x2={6 + i * 11} y2={40 + (i % 5) * 12} stroke="#7A7890" strokeWidth={1} opacity={0.5} />
          ))}
        </g>
      );
    case "flash":
      return (
        <g>
          <rect x={0} y={0} width={W} height={H} fill="#FFF3C4" />
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            return <path key={i} d={`M${W / 2},${H / 2} L${W / 2 + Math.cos(a) * 300},${H / 2 + Math.sin(a) * 300} L${W / 2 + Math.cos(a + 0.08) * 300},${H / 2 + Math.sin(a + 0.08) * 300} Z`} fill="#F7D774" opacity={0.6} />;
          })}
        </g>
      );
    case "night":
      return (
        <g>
          <rect x={0} y={0} width={W} height={H} fill="#2E3550" />
          {[[40, 30], [90, 18], [150, 40], [260, 22], [290, 54], [210, 14]].map(([sx, sy], i) => (
            <circle key={i} cx={sx} cy={sy} r={1.2} fill="#fff" />
          ))}
        </g>
      );
    case "pink":
      return <rect x={0} y={0} width={W} height={H} fill="#FBE3E6" />;
    default:
      return null;
  }
}

function panelLabel(panel) {
  const parts = [];
  if (panel.cap) parts.push(`（${panel.cap.replace(/\n/g, "")}）`);
  (panel.bubbles || []).forEach((b) => {
    const who = b.by !== undefined ? panel.chars?.[b.by]?.n : null;
    parts.push(`${who ? who + "「" : "「"}${String(b.t).replace(/\n/g, "")}」`);
  });
  return parts.join(" ");
}

function Panel({ panel, index, clipId }) {
  const chars = panel.chars || [];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${index + 1}コマ目：${panelLabel(panel)}`} style={{ display: "block", width: "100%", height: "auto" }}>
      <defs>
        <clipPath id={clipId}>
          <rect x={0} y={0} width={W} height={H} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <Background fx={panel.fx} focus={panel.focus} />
        {panel.fx !== "night" && panel.fx !== "gloom" && <line x1={0} y1={G + 1} x2={W} y2={G + 1} stroke={INK} strokeWidth={0.8} opacity={0.25} />}
        {(panel.props || []).filter((p) => p.back !== false).map((p, i) => (
          <Prop key={`p${i}`} pr={p} />
        ))}
        {chars.map((ch, i) => (
          <Figure key={`c${i}`} ch={ch} />
        ))}
        {(panel.props || []).filter((p) => p.back === false).map((p, i) => (
          <Prop key={`f${i}`} pr={p} />
        ))}
        {(panel.sfx || []).map((sx, i) => (
          <Sfx key={`s${i}`} sx={sx} />
        ))}
        {(panel.bubbles || []).map((b, i) => (
          <Bubble key={`b${i}`} b={b} chars={chars} />
        ))}
        {panel.cap && <Caption text={panel.cap} />}
        <g>
          <circle cx={W - 13} cy={H - 13} r={8} fill={INK} />
          <text x={W - 13} y={H - 9.5} textAnchor="middle" fontSize={10} fontWeight={700} fill="#fff" fontFamily={FONT}>
            {index + 1}
          </text>
        </g>
      </g>
      <rect x={1} y={1} width={W - 2} height={H - 2} fill="none" stroke={INK} strokeWidth={2.4} />
    </svg>
  );
}

// 4コマを、スマホでは横スワイプ、sm以上では2×2のグリッドで並べる
export default function FourKoma({ id, panels, title }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure ref={ref} style={{ margin: 0 }} aria-label={`4コマ漫画「${title}」`}>
      <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-1 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0">
        {panels.map((panel, i) => (
          <div key={i} className="shrink-0 snap-center w-[92%] sm:w-auto">
            {visible ? (
              <Panel panel={panel} index={i} clipId={`koma-${id}-${i}`} />
            ) : (
              <div style={{ aspectRatio: `${W} / ${H}`, backgroundColor: PAPER, border: `2px solid ${COLORS.mist}` }} />
            )}
          </div>
        ))}
      </div>
      <figcaption className="flex justify-between" style={{ fontSize: 10.5, color: COLORS.mist, marginTop: 4 }}>
        <span>4コマ漫画「{title}」</span>
        <span className="sm:hidden">横にスワイプ →</span>
      </figcaption>
    </figure>
  );
}
