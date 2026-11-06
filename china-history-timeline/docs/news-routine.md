# 中国史ニュースの毎日更新（クラウド定期実行の手順）

クラウドの定期実行（Claude Code のルーチン）が毎日この手順に従って `lib/news.json` を更新し、`main` に push する。push されるとサイトが再デプロイされ、`/news` とトップページの「中国史の最新ニュース」に反映される。

## 手順

1. `china-history-timeline/lib/news.json` を読み、既存の `url` と `title` を把握する（重複防止）。
2. Web 検索で、**直近 3 日以内に公開された**中国史に関するニュースを探す。対象：
   - 中国の遺跡の発掘・考古学の新発見（新石器時代〜清）
   - 文化財・世界遺産・博物館の展示、古文書や竹簡の解読
   - 日本で開かれる中国史関連の展覧会
   - 検索例：`China archaeology`, `Chinese archaeologists discover`, `考古 新发现`, `中国 遺跡 発見`, `Xinhua archaeology`, `China Daily cultural relics`
   - 現代の政治・外交・軍事のニュースは対象外。
3. 候補ごとに記事ページを WebFetch で開き、**実在すること・公開日・内容を確認**する。確認できないものは載せない。
4. 新しいニュースを **0〜3 件** 選び、`news.json` の配列の**先頭**に追加する。該当がなければ何も追加せず、コミットもしない。
5. 古い項目は削除しない（ただし配列が 200 件を超えたら古い順に削除）。
6. `cd china-history-timeline && npm ci && npm run build` が通ることを確認する。
7. 変更があれば `git commit -m "Add history news for YYYY-MM-DD"` して `main` に push する。

## 項目の形式

```json
{
  "id": "2026-11-06-短い英語スラッグ",
  "date": "2026-11-06",
  "title": "日本語の見出し（自分の言葉で、60字程度まで）",
  "summary": "日本語の要約 2〜3 文（120〜200字）。",
  "source": "出典媒体名（例：新華社、China Daily）",
  "url": "https://記事の URL",
  "eras": ["shang"],
  "related": [{ "href": "/eras/shang", "label": "{{殷|いん}}（商）とはどんな時代？" }]
}
```

- `date` は元記事の公開日（日本時間ではなく記事に書かれた日付）。
- `id` は一意にする（`date` + 英語スラッグ）。
- **著作権**：元記事の文章を翻訳・転載しない。事実だけを拾い、自分の言葉で短く要約する。引用はしない。
- 数字・地名・年代は元記事どおりに書き、推測で補わない。
- 難読漢字には `{{漢字|よみ}}` 形式でルビを付けてよい（サイト全体と同じ記法）。
- `eras` は `lib/data.js` の時代 ID（neolithic, xia, shang, westernzhou, chunqiu, zhanguo, qin, westernhan, xin, easternhan, sanguo, westernjin, sixteenkingdoms, nanbei, sui, tang, wudai, northernsong, southernsong, yuan, ming, qing, roc, prc）。
- `related` はサイト内に実在するページだけ（`/eras/<時代ID>`, `/world-heritage`, `/great-wall`, `/silk-road`, `/terracotta-army`, `/qinshihuang` など。`app/` 配下で存在を確認する）。
