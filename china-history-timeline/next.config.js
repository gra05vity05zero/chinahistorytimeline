/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // OGP画像（/og?t=… と /opengraph-image）はSNSのカード用で、検索結果に出すものではない。
    // robots.txtでブロックするとX（Twitter）などがカード画像を取得できなくなるため、
    // クロールは許可したままnoindexヘッダーだけ付けて、Search Consoleの
    // 「クロール済み - インデックス未登録」に画像URLが溜まらないようにする。
    const noindex = [{ key: "X-Robots-Tag", value: "noindex" }];
    return [
      { source: "/og", headers: noindex },
      { source: "/opengraph-image:path*", headers: noindex },
    ];
  },
};

module.exports = nextConfig;
