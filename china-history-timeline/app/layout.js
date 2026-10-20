import "./globals.css";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import { ADSENSE_CLIENT_ID, GA_MEASUREMENT_ID, SITE_URL, SITE_NAME, SITE_DESCRIPTION, buildOpenGraph, buildTwitter } from "@/lib/data";

// 日本語サイトなので日本の字形（JP）のフォントを使う（SCだと「直」「骨」などが中国式の字形になる）。
// next/fontでセルフホストし、各コンポーネントのインラインstyleからはCSS変数で参照する。
const serif = Noto_Serif_JP({ weight: ["500", "700", "900"], subsets: ["latin"], display: "swap", preload: false, variable: "--font-serif" });
const sans = Noto_Sans_JP({ weight: ["400", "500"], subsets: ["latin"], display: "swap", preload: false, variable: "--font-sans" });

// ホームページの<title>は検索されやすい語を先頭に置き、ブランド名（SITE_NAME）は
// 他ページと違いあえて付けない（末尾に付けると文字数が伸びSERP上で見切れやすくなるため）。
// サイト自体のブランド名はWebSiteのJSON-LD（name）やOGP（siteName）側で担保する。
// 「中国史」「中国の歴史（中国歴史）」の両方の検索語に対応するよう、両表記を含める。
const DEFAULT_TITLE = "中国史年表｜中国の歴史五千年を王朝・人物・出来事で年代順に解説";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: buildOpenGraph({ title: DEFAULT_TITLE, description: SITE_DESCRIPTION, path: "/" }),
  twitter: buildTwitter({ title: DEFAULT_TITLE, description: SITE_DESCRIPTION }),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: ["中国史年表", "中国の歴史年表", "Chinese History Timeline"],
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "ja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {ADSENSE_CLIENT_ID && (
          // Plain <script> (not next/script) so the AdSense crawler finds a
          // literal tag in the server-rendered <head>; next/script with
          // beforeInteractive only emits a <link rel="preload"> there.
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
        {GA_MEASUREMENT_ID && (
          <>
            {/* Plain <script> tags (not next/script) so Search Console's
                Google Analytics verification finds a literal snippet in
                the server-rendered <head>, not Next's __next_s bootstrap. */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
