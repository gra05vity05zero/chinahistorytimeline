// ルビ記法 {{漢字|ふりがな}} を含むテキストを <ruby> 要素として描画する
export function RubyText({ text }) {
  if (!text) return null;
  const parts = String(text).split(/\{\{(.+?)\|(.+?)\}\}/g);
  const nodes = [];
  for (let i = 0; i < parts.length; i += 3) {
    if (parts[i]) nodes.push(parts[i]);
    if (parts[i + 1] !== undefined) {
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
