# 中国五千年史 (china-history-timeline)

中国史の年表サイト。Next.js（App Router）+ Tailwind CSS。

## ローカルで動かす

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## ディレクトリ構成

- `app/page.js` — トップページ（年表）
- `app/events/[slug]/page.js` — イベント詳細ページ（URLごとにSEOメタデータを自動生成）
- `lib/data.js` — 全イベントデータ、Amazon/A8.net/AdSenseの設定
- `components/` — 表示用コンポーネント

## 公開前にやること

1. `lib/data.js` 内の `AMAZON_ASSOCIATE_TAG` を実際の値に置き換える
2. AdSenseの `data-ad-client` / `data-ad-slot` は `lib/data.js` の
   `ADSENSE_CLIENT_ID` / `ADSENSE_SLOT_DETAIL` / `ADSENSE_SLOT_TIMELINE` を編集
3. AdSenseのスクリプト読み込みは `.env.local` に
   `NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxx` を設定すると自動で有効になる
4. プライバシーポリシーページを追加する（AdSense利用には必須）

## GitHubへのアップロード手順

```bash
cd china-history-timeline
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<あなたのユーザー名>/china-history-timeline.git
git push -u origin main
```

## Vercelへのデプロイ手順

1. https://vercel.com にGitHubアカウントでログイン
2. 「Add New... → Project」から、上でpushしたリポジトリを選択
3. Framework Presetは自動で「Next.js」と認識される（そのままでOK）
4. 「Deploy」をクリック → 数分でビルドが完了し、`xxx.vercel.app` のURLが発行される

## 独自ドメイン（chinahistorytimeline.com）の接続

1. Vercelのプロジェクト画面 → 「Settings → Domains」
2. `chinahistorytimeline.com` を入力して追加
3. 表示されるDNSレコード（AレコードまたはCNAME）を、お名前.comの管理画面の
   DNS設定に追加する
4. 反映まで数分〜数時間（DNSの伝播による）
