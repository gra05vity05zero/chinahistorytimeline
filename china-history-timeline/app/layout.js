import "./globals.css";
import Script from "next/script";
import Footer from "@/components/Footer";
import { ADSENSE_CLIENT_ID, GA_MEASUREMENT_ID, SITE_URL, SITE_NAME, SITE_DESCRIPTION, buildOpenGraph, buildTwitter } from "@/lib/data";

const DEFAULT_TITLE = `${SITE_NAME} | 文明の黎明から現代までの年表`;

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
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "ja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;700;900&family=Noto+Sans+SC:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {ADSENSE_CLIENT_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="beforeInteractive"
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
