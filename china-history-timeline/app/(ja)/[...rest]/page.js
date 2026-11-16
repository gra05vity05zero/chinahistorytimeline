import { notFound } from "next/navigation";

// ルートレイアウトが (ja) と (en) に分かれているため、存在しないURLは
// このキャッチオールで受けて日本語レイアウト内の not-found.js を表示する。
export default function JapaneseCatchAll() {
  notFound();
}
