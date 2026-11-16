"use client";

import { useState } from "react";
import { COLORS } from "@/lib/constants";
import { RubyText } from "@/components/Ruby";

// 中国史クイズ（/quiz）。問題はボタンを押してからクライアント側で作るので、
// サーバーで描画した初期表示とランダムな出題がずれることはない
const QUESTION_COUNT = 10;

// UI text per language (lang="en" is used by /en/quiz; data passed in is already English there)
const TEXT = {
  ja: {
    modes: [
      { id: "next", label: "王朝の順番クイズ", note: "この王朝の次はどれ？" },
      { id: "year", label: "年号クイズ", note: "この出来事は何年？" },
      { id: "era", label: "出来事と王朝クイズ", note: "この出来事が起きた王朝は？" },
    ],
    nextSub: (era) => `${era.period}　の次の王朝・時代は？`,
    nextExplain: (era, ans) => `${era.name}（${era.period}）→ ${ans.name}（${ans.period}）`,
    yearSub: (ev) => `${ev.eraName}の出来事。何年？`,
    yearExplain: (ev) => `${ev.title}は${ev.yearLabel}（${ev.eraName}）`,
    eraSub: (ev) => `${ev.yearLabel}の出来事。どの王朝・時代？`,
    eraExplain: (ev, ans) => `${ev.title}（${ev.yearLabel}）は${ans.name}の出来事`,
    eraHref: (id) => `/eras/${id}`,
    eventHref: (slug) => `/events/${slug}`,
    start: (n) => `全${n}問 スタート →`,
    comment: (score, n) => (score === n ? "満点！完璧です。" : score >= 7 ? "よくできました。あと少しで満点です。" : score >= 4 ? "まずまず。間違えた問題を年表で確認しましょう。" : "年表や覚え方のページで復習してから、もう一度挑戦してみましょう。"),
    result: "結果",
    scoreLine: (score, n) => `${score} / ${n} 問正解`,
    check: "確認する →",
    again: "もう一度（問題が変わります）",
    other: "ほかのクイズを選ぶ",
    progress: (i, n, score) => `第${i}問 / ${n}　正解 ${score}`,
    correct: "正解！",
    wrong: "残念…",
    more: "詳しく（別タブ）→",
    seeResult: "結果を見る",
    nextQ: "次の問題へ →",
  },
  en: {
    modes: [
      { id: "next", label: "Dynasty order quiz", note: "Which dynasty came next?" },
      { id: "year", label: "Dates quiz", note: "In what year did this happen?" },
      { id: "era", label: "Events and dynasties quiz", note: "In which dynasty did this happen?" },
    ],
    nextSub: (era) => `${era.period} — which dynasty or period came next?`,
    nextExplain: (era, ans) => `${era.name} (${era.period}) → ${ans.name} (${ans.period})`,
    yearSub: (ev) => `An event of ${ev.eraName}. In what year?`,
    yearExplain: (ev) => `${ev.title}: ${ev.yearLabel} (${ev.eraName})`,
    eraSub: (ev) => `An event of ${ev.yearLabel}. Which dynasty or period?`,
    eraExplain: (ev, ans) => `${ev.title} (${ev.yearLabel}) happened in ${ans.name}`,
    eraHref: (id) => `/en/eras/${id}`,
    eventHref: (slug) => `/en/events/${slug}`,
    start: (n) => `Start · ${n} questions →`,
    comment: (score, n) => (score === n ? "A perfect score!" : score >= 7 ? "Well done — nearly perfect." : score >= 4 ? "Not bad. Check the ones you missed on the timeline." : "Review the timeline and the memory tips, then try again."),
    result: "Result",
    scoreLine: (score, n) => `${score} / ${n} correct`,
    check: "Check →",
    again: "Try again (new questions)",
    other: "Choose another quiz",
    progress: (i, n, score) => `Question ${i} / ${n} · Score ${score}`,
    correct: "Correct!",
    wrong: "Not quite…",
    more: "More (new tab) →",
    seeResult: "See results",
    nextQ: "Next question →",
  },
};

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample(list, n) {
  return shuffle(list).slice(0, n);
}

// 王朝の順番：ある王朝の「次の王朝」を4択で選ぶ
function buildNextQuestions(eras, T) {
  const indexes = sample(
    eras.slice(0, -1).map((_, i) => i),
    QUESTION_COUNT
  );
  return indexes.map((i) => {
    const answer = eras[i + 1];
    // 遠い時代の王朝だとすぐ見分けがつくので、ほかの選択肢は前後5つ以内の王朝から取る
    const others = sample(
      eras.filter((e, j) => e.id !== answer.id && j !== i && Math.abs(j - i) <= 5),
      3
    );
    return {
      promptText: eras[i].name,
      promptSub: T.nextSub(eras[i]),
      choices: shuffle([answer, ...others]).map((e) => ({ key: e.id, text: e.name })),
      answerKey: answer.id,
      explain: T.nextExplain(eras[i], answer),
      href: T.eraHref(answer.id),
    };
  });
}

// 年号：出来事の年を4択で選ぶ。ほかの選択肢は年の近い別の出来事から取り、勘で当てにくくする
function buildYearQuestions(events, T) {
  return sample(events, QUESTION_COUNT).map((ev) => {
    const values = [...new Set(events.map((e) => e.value))].filter((v) => v !== ev.value);
    const near = values.sort((a, b) => Math.abs(a - ev.value) - Math.abs(b - ev.value)).slice(0, 6);
    const others = sample(near, 3);
    const label = (v) => events.find((e) => e.value === v).yearLabel;
    return {
      promptText: ev.title,
      promptSub: T.yearSub(ev),
      choices: shuffle([ev.value, ...others]).map((v) => ({ key: String(v), text: label(v) })),
      answerKey: String(ev.value),
      explain: T.yearExplain(ev),
      href: T.eventHref(ev.slug),
    };
  });
}

// 出来事と王朝：出来事が起きた王朝を4択で選ぶ。ほかの選択肢は前後の王朝から取る
function buildEraQuestions(events, eras, T) {
  return sample(events, QUESTION_COUNT).map((ev) => {
    const idx = eras.findIndex((e) => e.id === ev.eraId);
    const nearby = eras.filter((e, i) => e.id !== ev.eraId && Math.abs(i - idx) <= 4);
    const others = sample(nearby, 3);
    const answer = eras[idx];
    return {
      promptText: ev.title,
      promptSub: T.eraSub(ev),
      choices: shuffle([answer, ...others]).map((e) => ({ key: e.id, text: e.name })),
      answerKey: answer.id,
      explain: T.eraExplain(ev, answer),
      href: T.eventHref(ev.slug),
    };
  });
}

const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, fontSize: 12 };

export function HistoryQuiz({ eras, events, lang = "ja" }) {
  const T = TEXT[lang];
  const MODES = T.modes;
  const [mode, setMode] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);

  const start = (id) => {
    const qs = id === "next" ? buildNextQuestions(eras, T) : id === "year" ? buildYearQuestions(events, T) : buildEraQuestions(events, eras, T);
    setMode(id);
    setQuestions(qs);
    setCurrent(0);
    setPicked(null);
    setScore(0);
    setHistory([]);
  };

  const choose = (key) => {
    if (picked !== null) return;
    const q = questions[current];
    const ok = key === q.answerKey;
    setPicked(key);
    if (ok) setScore((s) => s + 1);
    setHistory((h) => [...h, { ...q, ok }]);
  };

  const next = () => {
    setPicked(null);
    setCurrent((c) => c + 1);
  };

  if (!mode) {
    return (
      <div className="grid gap-2 sm:grid-cols-3">
        {MODES.map((m) => (
          <button key={m.id} type="button" onClick={() => start(m.id)} className="text-left hover:opacity-90" style={{ ...cardStyle, padding: "14px 14px", cursor: "pointer" }}>
            <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>{m.label}</div>
            <div style={{ fontSize: 12, color: COLORS.inkSoft, marginTop: 4 }}>{m.note}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.vermilion, marginTop: 8 }}>{T.start(QUESTION_COUNT)}</div>
          </button>
        ))}
      </div>
    );
  }

  const modeInfo = MODES.find((m) => m.id === mode);

  if (current >= questions.length) {
    const comment = T.comment(score, QUESTION_COUNT);
    return (
      <div style={{ ...cardStyle, padding: "16px" }}>
        <div style={{ fontSize: 12, color: COLORS.gold, fontWeight: 700 }}>{modeInfo.label}　{T.result}</div>
        <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 28, fontWeight: 900, color: COLORS.ink, marginTop: 4 }}>
          {T.scoreLine(score, QUESTION_COUNT)}
        </div>
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 4 }}>{comment}</p>
        <ol style={{ marginTop: 12, fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft }}>
          {history.map((h, i) => (
            <li key={i} className="flex gap-2" style={{ padding: "4px 0", borderTop: "1px solid #E8E0C8" }}>
              <span style={{ fontWeight: 700, color: h.ok ? "#3B7A57" : COLORS.vermilion, minWidth: 16 }}>{h.ok ? "○" : "×"}</span>
              <span>
                <RubyText text={h.explain} />{" "}
                <a href={h.href} style={linkStyle}>
                  {T.check}
                </a>
              </span>
            </li>
          ))}
        </ol>
        <div className="flex gap-2.5 flex-wrap" style={{ marginTop: 14 }}>
          <button type="button" onClick={() => start(mode)} style={{ padding: "8px 14px", backgroundColor: COLORS.vermilion, color: "#FBF8F0", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
            {T.again}
          </button>
          <button type="button" onClick={() => setMode(null)} style={{ padding: "8px 14px", border: `1px solid ${COLORS.vermilion}`, color: COLORS.vermilion, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
            {T.other}
          </button>
        </div>
      </div>
    );
  }

  const q = questions[current];
  return (
    <div style={{ ...cardStyle, padding: "16px" }}>
      <div className="flex justify-between" style={{ fontSize: 12, color: COLORS.gold, fontWeight: 700 }}>
        <span>{modeInfo.label}</span>
        <span>
          {T.progress(current + 1, QUESTION_COUNT, score)}
        </span>
      </div>
      <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 20, fontWeight: 900, color: COLORS.ink, marginTop: 10, lineHeight: 1.6 }}>
        <RubyText text={q.promptText} />
      </div>
      <div style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 2 }}>
        <RubyText text={q.promptSub} />
      </div>
      <div className="grid gap-2 sm:grid-cols-2" style={{ marginTop: 14 }}>
        {q.choices.map((c) => {
          const isAnswer = c.key === q.answerKey;
          const isPicked = c.key === picked;
          let bg = "#FFFDF7";
          let border = "#DCD3B8";
          if (picked !== null && isAnswer) {
            bg = "#E4F0E6";
            border = "#3B7A57";
          } else if (isPicked) {
            bg = "#F8E1DC";
            border = COLORS.vermilion;
          }
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => choose(c.key)}
              disabled={picked !== null}
              className="text-left"
              style={{ padding: "12px 14px", minHeight: 48, backgroundColor: bg, border: `1.5px solid ${border}`, fontSize: 15, color: COLORS.ink, cursor: picked === null ? "pointer" : "default" }}
            >
              <RubyText text={c.text} />
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div style={{ marginTop: 14, padding: "10px 12px", backgroundColor: "#F3ECD9", fontSize: 13, lineHeight: 1.8, color: COLORS.inkSoft }}>
          <span style={{ fontWeight: 700, color: picked === q.answerKey ? "#3B7A57" : COLORS.vermilion }}>{picked === q.answerKey ? T.correct : T.wrong}</span>{" "}
          <RubyText text={q.explain} />{" "}
          <a href={q.href} target="_blank" rel="noopener" style={linkStyle}>
            {T.more}
          </a>
          <div style={{ marginTop: 10 }}>
            <button type="button" onClick={next} style={{ padding: "8px 16px", backgroundColor: COLORS.vermilion, color: "#FBF8F0", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
              {current + 1 === QUESTION_COUNT ? T.seeResult : T.nextQ}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
