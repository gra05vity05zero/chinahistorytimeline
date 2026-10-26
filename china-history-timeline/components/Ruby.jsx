import { RUBY_COMMON_WORDS } from "@/lib/rubyCommonWords";

// ルビ記法 {{漢字|ふりがな}} を含むテキストを <ruby> 要素として描画する。
// 一般語（lib/rubyCommonWords.js）はルビを付けず漢字だけを出す
export function RubyText({ text }) {
  if (!text) return null;
  const parts = String(text).split(/\{\{(.+?)\|(.+?)\}\}/g);
  const nodes = [];
  for (let i = 0; i < parts.length; i += 3) {
    if (parts[i]) nodes.push(parts[i]);
    if (parts[i + 1] !== undefined) {
      if (RUBY_COMMON_WORDS.has(`${parts[i + 1]}|${parts[i + 2]}`)) {
        nodes.push(parts[i + 1]);
        continue;
      }
      nodes.push(
        <ruby key={i}>
          {parts[i + 1]}
          <rt>{parts[i + 2]}</rt>
        </ruby>
      );
    }
  }
  return <>{nodes}</>;
}
