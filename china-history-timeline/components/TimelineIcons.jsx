// 日中対照年表の、時代の転換点に添える小さなアイコン（オリジナルSVG）。
// 40×40の丸い印の中に、墨線と朱・金・翡翠の配色で描く。
import { COLORS } from "@/lib/constants";

const INK = COLORS.ink;
const CLAY = "#B07A4A";
const WAVE = <path d="M7 33 q3 -2 6 0 t6 0 t6 0 t6 0" fill="none" stroke={COLORS.jade} strokeWidth="1.4" strokeLinecap="round" />;

const ICONS = {
  // 仰韶文化の彩陶
  caitao: {
    label: "彩陶",
    body: (
      <>
        <path d="M9 15 H31 C31 23 26 29 20 29 C14 29 9 23 9 15 Z" fill={COLORS.vermilionSoft} stroke={INK} strokeWidth="1.2" />
        <polyline points="11,18 14,21.5 17,18 20,21.5 23,18 26,21.5 29,18" fill="none" stroke={INK} strokeWidth="1.3" strokeLinejoin="round" />
        <circle cx="16" cy="25" r="1" fill={INK} />
        <circle cx="20" cy="26" r="1" fill={INK} />
        <circle cx="24" cy="25" r="1" fill={INK} />
      </>
    ),
  },
  // 夏の建国（禹の治水・鋤と水）
  yu: {
    label: "治水の鋤",
    body: (
      <>
        <line x1="20" y1="8" x2="20" y2="22" stroke={CLAY} strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="9" x2="24" y2="9" stroke={CLAY} strokeWidth="2" strokeLinecap="round" />
        <path d="M15 22 H25 L24 27 Q20 30 16 27 Z" fill={COLORS.gold} stroke={INK} strokeWidth="1" />
        <path d="M7 29 q3 -2 6 0 t6 0 t6 0 t6 0" fill="none" stroke={COLORS.jade} strokeWidth="1.4" strokeLinecap="round" />
        {WAVE}
      </>
    ),
  },
  // 殷の建国（青銅の鼎）
  ding: {
    label: "青銅の鼎",
    body: (
      <>
        <path d="M13.5 16 V10 H16.5 V16 M23.5 16 V10 H26.5 V16" fill="none" stroke={INK} strokeWidth="1.3" />
        {[[14, 13], [20, 20], [26, 27]].map(([x1, x2]) => (
          <line key={x1} x1={x1} y1="25" x2={x2} y2="31" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        ))}
        <path d="M10.5 16 H29.5 Q29.5 27 20 27 Q10.5 27 10.5 16 Z" fill={COLORS.jade} stroke={INK} strokeWidth="1.1" />
        <polyline points="13,19.5 15.5,22 18,19.5 20.5,22 23,19.5 25.5,22 28,19.5" fill="none" stroke={COLORS.gold} strokeWidth="1.1" />
      </>
    ),
  },
  // 孔子（竹簡）
  zhujian: {
    label: "竹簡",
    body: (
      <>
        {[10.5, 14.5, 18.5, 22.5, 26.5].map((x) => (
          <g key={x}>
            <rect x={x} y="9.5" width="3.4" height="21" fill="#D8C38A" stroke={INK} strokeWidth="0.6" />
            {[17, 20, 23].map((y) => <line key={y} x1={x + 1} y1={y} x2={x + 2.4} y2={y} stroke={INK} strokeWidth="0.9" />)}
          </g>
        ))}
        <line x1="9.5" y1="13" x2="30.5" y2="13" stroke={COLORS.vermilion} strokeWidth="1" />
        <line x1="9.5" y1="27" x2="30.5" y2="27" stroke={COLORS.vermilion} strokeWidth="1" />
      </>
    ),
  },
  // 万里の長城
  wall: {
    label: "万里の長城",
    body: (
      <>
        <path d="M5 20 L12 14 L18 18 L26 11 L35 19" fill="none" stroke={COLORS.jade} strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M6 22 H34 V29 H6 Z" fill="#C9B48A" stroke={INK} strokeWidth="1" />
        {[7, 11, 26, 30].map((x) => <rect key={x} x={x} y="19.5" width="2.4" height="2.5" fill="#C9B48A" stroke={INK} strokeWidth="0.8" />)}
        <path d="M15 14 H25 V29 H15 Z" fill="#C9B48A" stroke={INK} strokeWidth="1" />
        {[15, 18.8, 22.6].map((x) => <rect key={x} x={x} y="11.5" width="2.4" height="2.5" fill="#C9B48A" stroke={INK} strokeWidth="0.8" />)}
        <path d="M18.5 29 V25 Q20 23 21.5 25 V29 Z" fill={INK} />
      </>
    ),
  },
  // 張騫の西域行き（ラクダ）
  camel: {
    label: "ラクダ",
    body: (
      <>
        {[12.5, 15.5, 23.5, 26.5].map((x) => <line key={x} x1={x} y1="23" x2={x} y2="30" stroke={CLAY} strokeWidth="1.7" strokeLinecap="round" />)}
        <path d="M10 22 Q11.5 14 15.5 17.5 Q19 11.5 22.5 17.5 Q24.5 19.5 26.5 18.5 L28 13.5 Q29.5 11.5 31.5 12.5 L31.5 14.5 L30 14.8 L29 21 Q28 24 25 24 H12.5 Q10 24 10 22 Z" fill={CLAY} stroke={INK} strokeWidth="0.9" strokeLinejoin="round" />
        <path d="M6 32 Q13 29 20 32 T34 31" fill="none" stroke={COLORS.gold} strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  // 秦の統一（皇帝の冕冠）
  qin: {
    label: "皇帝の冠",
    body: (
      <>
        <path d="M13 16 H27 V25 Q20 28 13 25 Z" fill={COLORS.gold} stroke={INK} strokeWidth="1.2" />
        <rect x="8" y="12" width="24" height="4" rx="0.8" fill={INK} />
        {[10, 12.8, 27.2, 30].map((x) => (
          <g key={x}>
            <line x1={x} y1="16" x2={x} y2="24" stroke={INK} strokeWidth="0.9" />
            <circle cx={x} cy="25" r="1.2" fill={COLORS.vermilion} />
          </g>
        ))}
      </>
    ),
  },
  // 赤壁の戦い（炎上する船）
  chibi: {
    label: "炎上する船",
    body: (
      <>
        <path d="M14 25 C11 20 15 17 14 11 C18 14 18 17 19.5 16 C20.5 13 22.5 11.5 23 9 C27 14 28 20 25.5 25 Z" fill={COLORS.vermilion} />
        <path d="M17 25 C16 22 18 20 18 17 C20 19 21 20 22 18.5 C24 21 24 23 23 25 Z" fill={COLORS.gold} />
        <path d="M8 25 H32 L29 29.5 H11 Z" fill="#7A4A33" stroke={INK} strokeWidth="1" />
        {WAVE}
      </>
    ),
  },
  // 唐の建国（長安の城門）
  tang: {
    label: "長安の城門",
    body: (
      <>
        <path d="M6.5 16 Q12 15.5 14 11.5 H26 Q28 15.5 33.5 16 Z" fill={INK} />
        <rect x="11" y="16" width="18" height="11" fill={COLORS.vermilion} />
        <path d="M17 27 V22.5 Q20 19.5 23 22.5 V27 Z" fill="#F6F0E1" />
        <rect x="9" y="27" width="22" height="3" fill={COLORS.gold} />
      </>
    ),
  },
  // 元の建国（モンゴルのゲル）
  ger: {
    label: "ゲル",
    body: (
      <>
        <path d="M8.5 27 V20 Q20 9 31.5 20 V27 Z" fill="#F6F0E1" stroke={INK} strokeWidth="1.1" />
        <path d="M8.5 20 H31.5" stroke={INK} strokeWidth="0.9" />
        <path d="M12 16.5 Q20 11.5 28 16.5" fill="none" stroke={COLORS.vermilion} strokeWidth="1" />
        <rect x="17" y="20.5" width="6" height="6.5" fill={COLORS.vermilion} stroke={INK} strokeWidth="0.8" />
        <circle cx="20" cy="12" r="1.4" fill={COLORS.gold} stroke={INK} strokeWidth="0.6" />
        <line x1="6" y1="29" x2="34" y2="29" stroke={COLORS.jade} strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  // アヘン戦争（英国の帆船）
  opium: {
    label: "帆船",
    body: (
      <>
        <line x1="15" y1="25" x2="15" y2="8.5" stroke={INK} strokeWidth="1.2" />
        <line x1="25" y1="25" x2="25" y2="11" stroke={INK} strokeWidth="1.2" />
        <path d="M10.5 10.5 H19.5 V16 H10.5 Z M10.5 17.5 H19.5 V23 H10.5 Z" fill="#F6F0E1" stroke={INK} strokeWidth="0.9" />
        <path d="M21.5 13 H28.5 V17.5 H21.5 Z M21.5 19 H28.5 V23.5 H21.5 Z" fill="#F6F0E1" stroke={INK} strokeWidth="0.9" />
        <path d="M7 25 H33 L30 30 H10 Z" fill={INK} />
        {[13, 18, 23, 28].map((x) => <circle key={x} cx={x} cy="27.3" r="0.9" fill={COLORS.gold} />)}
        {WAVE}
      </>
    ),
  },
  // 縄文時代（火焔型土器）
  jomon: {
    label: "火焔型土器",
    body: (
      <>
        <path d="M13 19 L15 31 H25 L27 19 Z" fill={CLAY} stroke={INK} strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M11 19 C11 14 13 12 14 9 C15 12 16 13.5 17 12.5 C17 10.5 19 9.5 20 7.5 C21 9.5 23 10.5 23 12.5 C24 13.5 25 12 26 9 C27 12 29 14 29 19 Z" fill={CLAY} stroke={INK} strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M17 26 a2 2 0 1 1 2.5 1.8 M21 23.5 a2 2 0 1 0 2.5 -1.6" fill="none" stroke={INK} strokeWidth="1" strokeLinecap="round" />
      </>
    ),
  },
  // 金印（漢委奴国王・蛇の形のつまみ）
  kinin: {
    label: "金印",
    body: (
      <>
        <rect x="11" y="21" width="18" height="9" fill={COLORS.gold} stroke={INK} strokeWidth="1" />
        <path d="M14 21 Q13.5 14.5 20 14.5 Q26 14.5 26 18 Q26 21 22 21 Q18.5 21 18.5 18.5 Q18.5 17 20.5 17" fill="none" stroke={INK} strokeWidth="3.2" strokeLinecap="round" />
        <path d="M14 21 Q13.5 14.5 20 14.5 Q26 14.5 26 18 Q26 21 22 21 Q18.5 21 18.5 18.5 Q18.5 17 20.5 17" fill="none" stroke={COLORS.gold} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="21" cy="17" r="1.6" fill={COLORS.gold} stroke={INK} strokeWidth="0.8" />
      </>
    ),
  },
  // 卑弥呼の遣使（銅鏡）
  kyo: {
    label: "銅鏡",
    body: (
      <>
        <circle cx="20" cy="20" r="12" fill="#7C8F70" stroke={INK} strokeWidth="1.1" />
        <circle cx="20" cy="20" r="8.5" fill="none" stroke={COLORS.gold} strokeWidth="0.9" />
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i * Math.PI) / 6;
          return <circle key={i} cx={20 + 10.3 * Math.cos(a)} cy={20 + 10.3 * Math.sin(a)} r="0.8" fill={COLORS.gold} />;
        })}
        <circle cx="20" cy="20" r="2.6" fill={COLORS.gold} stroke={INK} strokeWidth="0.8" />
      </>
    ),
  },
  // 古墳時代（前方後円墳）
  kofun: {
    label: "前方後円墳",
    body: (
      <>
        <path d="M20 6 A9.5 9.5 0 0 1 26.5 22.5 L31 33 H9 L13.5 22.5 A9.5 9.5 0 0 1 20 6 Z" fill="#9DB8C0" />
        <path d="M20 9 A6.8 6.8 0 0 1 24.5 21 L28 30.5 H12 L15.5 21 A6.8 6.8 0 0 1 20 9 Z" fill={COLORS.jade} stroke={INK} strokeWidth="1" strokeLinejoin="round" />
      </>
    ),
  },
  // 鉄砲伝来（火縄銃）
  teppo: {
    label: "火縄銃",
    body: (
      <g transform="rotate(-28 20 20)">
        <rect x="11" y="18.5" width="23" height="2.2" fill={INK} />
        <path d="M5 18.5 H14 V22.5 L6 25 Q4.5 25 5 23 Z" fill={CLAY} stroke={INK} strokeWidth="0.8" />
        <rect x="14" y="20.5" width="3" height="2" fill={COLORS.gold} />
        <path d="M15 22.5 q-2 3 1 4 t1 4" fill="none" stroke={COLORS.vermilion} strokeWidth="1" />
      </g>
    ),
  },
  // 遣隋使（帆に網代を張った船）
  kenzuishi: {
    label: "遣隋使の船",
    body: (
      <>
        <line x1="20" y1="25" x2="20" y2="8.5" stroke={INK} strokeWidth="1.2" />
        <rect x="13.5" y="10" width="13" height="12" fill="#F6F0E1" stroke={INK} strokeWidth="1" />
        {[13, 16, 19].map((y) => <line key={y} x1="13.5" y1={y} x2="26.5" y2={y} stroke={INK} strokeWidth="0.7" />)}
        <path d="M6.5 24 Q20 28.5 33.5 24 L30.5 29.5 H9.5 Z" fill={COLORS.vermilion} stroke={INK} strokeWidth="1" />
        {WAVE}
      </>
    ),
  },
  // 鎌倉幕府の成立（武士の兜）
  kabuto: {
    label: "兜",
    body: (
      <>
        <path d="M17.5 14 L12 5.5 H14.5 L19.5 13 Z M22.5 14 L28 5.5 H25.5 L20.5 13 Z" fill={COLORS.gold} stroke={INK} strokeWidth="0.8" />
        <path d="M11 22 Q11 12 20 12 Q29 12 29 22 Z" fill={INK} />
        <path d="M8.5 22 H31.5 L33.5 28 H6.5 Z" fill={COLORS.jade} stroke={INK} strokeWidth="1" />
        <line x1="7.6" y1="25" x2="32.4" y2="25" stroke={INK} strokeWidth="0.8" />
      </>
    ),
  },
  // 元寇（てつはう）
  genko: {
    label: "てつはう",
    body: (
      <>
        <circle cx="18" cy="23" r="8" fill={INK} />
        <circle cx="15.5" cy="20.5" r="1.8" fill="#F6F0E1" opacity="0.5" />
        <path d="M23 17 Q24.5 14.5 26 12.5" fill="none" stroke={COLORS.inkSoft} strokeWidth="1.3" />
        <path d="M27 6.5 L28 10 L31.5 9.5 L28.8 11.8 L30.8 14.8 L27.4 13.3 L25.6 16.3 L25.8 12.8 L22.5 11.8 L25.8 10.6 Z" fill={COLORS.gold} stroke={COLORS.vermilion} strokeWidth="0.8" strokeLinejoin="round" />
      </>
    ),
  },
  // 開国（黒船）
  kurofune: {
    label: "黒船",
    body: (
      <>
        <circle cx="24" cy="9.5" r="3" fill={COLORS.mist} />
        <circle cx="28.5" cy="7.5" r="2.3" fill={COLORS.mist} />
        <rect x="18" y="12.5" width="4" height="12" fill={INK} />
        <line x1="11" y1="25" x2="11" y2="11" stroke={INK} strokeWidth="1.2" />
        <line x1="29" y1="25" x2="29" y2="13" stroke={INK} strokeWidth="1.2" />
        <path d="M6.5 25 H33.5 L30.5 30 H9.5 Z" fill={INK} />
        <path d="M15 25 A5 5 0 0 1 25 25 Z" fill={COLORS.inkSoft} stroke={INK} strokeWidth="0.8" />
        {WAVE}
      </>
    ),
  },
};

export function TimelineIcon({ name, size = 40 }) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" role="img" aria-label={icon.label} style={{ display: "inline-block", verticalAlign: "top" }}>
      <title>{icon.label}</title>
      <circle cx="20" cy="20" r="19" fill="#F6F0E1" stroke={COLORS.mist} strokeWidth="1" />
      {icon.body}
    </svg>
  );
}
