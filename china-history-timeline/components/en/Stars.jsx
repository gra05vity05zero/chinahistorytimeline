import { COLORS } from "@/lib/constants";

// Historical-accuracy rating (1–5) for the drama pages
export function Stars({ score }) {
  return (
    <span aria-label={`Historical accuracy ${score} out of 5`} style={{ color: COLORS.gold, letterSpacing: 1 }}>
      {"★".repeat(score)}
      <span style={{ color: COLORS.mist }}>{"★".repeat(5 - score)}</span>
    </span>
  );
}
