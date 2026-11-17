"use client";

import { useState } from "react";
import { COLORS } from "@/lib/constants";

// [漢字, 日本語読み, ピンイン]
const STEMS = [
  ["甲", "きのえ", "jiǎ"], ["乙", "きのと", "yǐ"], ["丙", "ひのえ", "bǐng"], ["丁", "ひのと", "dīng"], ["戊", "つちのえ", "wù"],
  ["己", "つちのと", "jǐ"], ["庚", "かのえ", "gēng"], ["辛", "かのと", "xīn"], ["壬", "みずのえ", "rén"], ["癸", "みずのと", "guǐ"],
];
// [漢字, 日本語読み, 動物（日本語）, ピンイン, 動物（英語）]
const BRANCHES = [
  ["子", "ね", "ネズミ", "zǐ", "Rat"], ["丑", "うし", "ウシ", "chǒu", "Ox"], ["寅", "とら", "トラ", "yín", "Tiger"],
  ["卯", "う", "ウサギ", "mǎo", "Rabbit"], ["辰", "たつ", "竜", "chén", "Dragon"], ["巳", "み", "ヘビ", "sì", "Snake"],
  ["午", "うま", "ウマ", "wǔ", "Horse"], ["未", "ひつじ", "ヒツジ", "wèi", "Goat"], ["申", "さる", "サル", "shēn", "Monkey"],
  ["酉", "とり", "ニワトリ", "yǒu", "Rooster"], ["戌", "いぬ", "イヌ", "xū", "Dog"], ["亥", "い", "イノシシ", "hài", "Pig"],
];

// 西暦4年が甲子。紀元前（0年なし）は天文学的年に直して計算する
function etoOf(year) {
  const astro = year < 0 ? year + 1 : year;
  const i = (((astro - 4) % 60) + 60) % 60;
  const s = STEMS[i % 10];
  const b = BRANCHES[i % 12];
  return { kanji: s[0] + b[0], reading: s[1] + b[1], animal: b[2], pinyin: s[2] + b[3], animalEn: b[4], index: i + 1 };
}

const TEXT = {
  ja: {
    label: "西暦を入れると干支がわかります（紀元前はマイナスで入力。例：-221）",
    unit: "年",
    result: (e) => `${e.reading}・${e.animal}年（六十干支の${e.index}番目）`,
    cycle: (y) => `この年に生まれた人の還暦（同じ干支に戻る年）は ${y} 年です。`,
    invalid: "西暦を数字で入力してください（0年はありません）。",
    note: "※ 1月1日で切り替える日本式の数え方です。中国の伝統的な考え方では、立春（2月4日ごろ）や春節で年の干支が変わります。",
  },
  en: {
    label: "Enter a year to find its sexagenary (ganzhi) name and zodiac animal. Use a minus sign for BC, e.g. -221.",
    unit: "",
    result: (e) => `(${e.pinyin}) — Year of the ${e.animalEn}, no. ${e.index} of the 60-year cycle`,
    cycle: (y) => `Someone born in this year sees the same year name come round again in ${y}.`,
    invalid: "Enter a year as a number (there is no year 0).",
    note: "Note: the Chinese zodiac year begins at Chinese New Year (late January to mid-February), not on 1 January — if you were born in January or early February, check the date of that year’s New Year: you may belong to the previous animal.",
  },
};

export function EtoCalculator({ defaultYear = 2027, lang = "ja" }) {
  const t = TEXT[lang] || TEXT.ja;
  const [value, setValue] = useState(String(defaultYear));
  const year = parseInt(value, 10);
  const valid = Number.isFinite(year) && year !== 0 && Math.abs(year) <= 9999;
  const eto = valid ? etoOf(year) : null;
  const cycleYear = valid && year > 0 ? year + 60 : null;

  return (
    <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: "16px 18px" }}>
      <label htmlFor="eto-year" style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.ink }}>
        {t.label}
      </label>
      <div className="flex items-center gap-2" style={{ marginTop: 8 }}>
        <input
          id="eto-year"
          type="number"
          inputMode="numeric"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ width: 120, padding: "6px 10px", fontSize: 16, border: `1px solid ${COLORS.mist}`, backgroundColor: "#fff", color: COLORS.ink }}
        />
        {t.unit && <span style={{ fontSize: 13, color: COLORS.inkSoft }}>{t.unit}</span>}
      </div>
      <div aria-live="polite" style={{ marginTop: 12, minHeight: 48 }}>
        {eto ? (
          <>
            <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 24, fontWeight: 900, color: COLORS.vermilion }}>
              {eto.kanji}
              <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.inkSoft, marginLeft: 10 }}>{t.result(eto)}</span>
            </div>
            {cycleYear && <div style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 4 }}>{t.cycle(cycleYear)}</div>}
          </>
        ) : (
          <div style={{ fontSize: 12, color: COLORS.mist }}>{t.invalid}</div>
        )}
      </div>
      <p style={{ fontSize: 11, color: COLORS.mist, marginTop: 8, lineHeight: 1.7 }}>{t.note}</p>
    </div>
  );
}
