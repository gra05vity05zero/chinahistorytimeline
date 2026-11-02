"use client";

import { useState } from "react";
import { COLORS } from "@/lib/constants";
import { RubyText } from "@/components/Ruby";

// 中国史クイズ（/quiz）。問題はボタンを押してからクライアント側で作るので、
// サーバーで描画した初期表示とランダムな出題がずれることはない
const QUESTION_COUNT = 10;

const MODES = [
  { id: "next", label: "王朝の順番クイズ", note: "この王朝の次はどれ？" },
  { id: "year", label: "年号クイズ", note: "この出来事は何年？" },
  { id: "era", label: "出来事と王朝クイズ", note: "この出来事が起きた王朝は？" },
];

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
function buildNextQuestions(eras) {
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
      promptSub: `${eras[i].period}　の次の王朝・時代は？`,
      choices: shuffle([answer, ...others]).map((e) => ({ key: e.id, text: e.name })),
      answerKey: answer.id,
      explain: `${eras[i].name}（${eras[i].period}）→ ${answer.name}（${answer.period}）`,
      href: `/eras/${answer.id}`,
    };
  });
}

// 年号：出来事の年を4択で選ぶ。ほかの選択肢は年の近い別の出来事から取り、勘で当てにくくする
function buildYearQuestions(events) {
  return sample(events, QUESTION_COUNT).map((ev) => {
    const values = [...new Set(events.map((e) => e.value))].filter((v) => v !== ev.value);
    const near = values.sort((a, b) => Math.abs(a - ev.value) - Math.abs(b - ev.value)).slice(0, 6);
    const others = sample(near, 3);
    const label = (v) => events.find((e) => e.value === v).yearLabel;
    return {
      promptText: ev.title,
      promptSub: `${ev.eraName}の出来事。何年？`,
      choices: shuffle([ev.value, ...others]).map((v) => ({ key: String(v), text: label(v) })),
      answerKey: String(ev.value),
      explain: `${ev.title}は${ev.yearLabel}（${ev.eraName}）`,
      href: `/events/${ev.slug}`,
    };
  });
}

// 出来事と王朝：出来事が起きた王朝を4択で選ぶ。ほかの選択肢は前後の王朝から取る
function buildEraQuestions(events, eras) {
  return sample(events, QUESTION_COUNT).map((ev) => {
    const idx = eras.findIndex((e) => e.id === ev.eraId);
    const nearby = eras.filter((e, i) => e.id !== ev.eraId && Math.abs(i - idx) <= 4);
    const others = sample(nearby, 3);
    const answer = eras[idx];
    return {
      promptText: ev.title,
      promptSub: `${ev.yearLabel}の出来事。どの王朝・時代？`,
      choices: shuffle([answer, ...others]).map((e) => ({ key: e.id, text: e.name })),
      answerKey: answer.id,
      explain: `${ev.title}（${ev.yearLabel}）は${answer.name}の出来事`,
      href: `/events/${ev.slug}`,
    };
  });
}

const cardStyle = { backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" };
const linkStyle = { color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist, fontSize: 12 };

export function HistoryQuiz({ eras, events }) {
  const [mode, setMode] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);

  const start = (id) => {
    const qs = id === "next" ? buildNextQuestions(eras) : id === "year" ? buildYearQuestions(events) : buildEraQuestions(events, eras);
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
            <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.vermilion, marginTop: 8 }}>全{QUESTION_COUNT}問 スタート →</div>
          </button>
        ))}
      </div>
    );
  }

  const modeInfo = MODES.find((m) => m.id === mode);

  if (current >= questions.length) {
    const comment = score === QUESTION_COUNT ? "満点！完璧です。" : score >= 7 ? "よくできました。あと少しで満点です。" : score >= 4 ? "まずまず。間違えた問題を年表で確認しましょう。" : "年表や覚え方のページで復習してから、もう一度挑戦してみましょう。";
    return (
      <div style={{ ...cardStyle, padding: "16px" }}>
        <div style={{ fontSize: 12, color: COLORS.gold, fontWeight: 700 }}>{modeInfo.label}　結果</div>
        <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 28, fontWeight: 900, color: COLORS.ink, marginTop: 4 }}>
          {score} / {QUESTION_COUNT} 問正解
        </div>
        <p style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 4 }}>{comment}</p>
        <ol style={{ marginTop: 12, fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft }}>
          {history.map((h, i) => (
            <li key={i} className="flex gap-2" style={{ padding: "4px 0", borderTop: "1px solid #E8E0C8" }}>
              <span style={{ fontWeight: 700, color: h.ok ? "#3B7A57" : COLORS.vermilion, minWidth: 16 }}>{h.ok ? "○" : "×"}</span>
              <span>
                <RubyText text={h.explain} />{" "}
                <a href={h.href} style={linkStyle}>
                  確認する →
                </a>
              </span>
            </li>
          ))}
        </ol>
        <div className="flex gap-2.5 flex-wrap" style={{ marginTop: 14 }}>
          <button type="button" onClick={() => start(mode)} style={{ padding: "8px 14px", backgroundColor: COLORS.vermilion, color: "#FBF8F0", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
            もう一度（問題が変わります）
          </button>
          <button type="button" onClick={() => setMode(null)} style={{ padding: "8px 14px", border: `1px solid ${COLORS.vermilion}`, color: COLORS.vermilion, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
            ほかのクイズを選ぶ
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
          第{current + 1}問 / {QUESTION_COUNT}　正解 {score}
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
          <span style={{ fontWeight: 700, color: picked === q.answerKey ? "#3B7A57" : COLORS.vermilion }}>{picked === q.answerKey ? "正解！" : "残念…"}</span>{" "}
          <RubyText text={q.explain} />{" "}
          <a href={q.href} target="_blank" rel="noopener" style={linkStyle}>
            詳しく（別タブ）→
          </a>
          <div style={{ marginTop: 10 }}>
            <button type="button" onClick={next} style={{ padding: "8px 16px", backgroundColor: COLORS.vermilion, color: "#FBF8F0", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
              {current + 1 === QUESTION_COUNT ? "結果を見る" : "次の問題へ →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
