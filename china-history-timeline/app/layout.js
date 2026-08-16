import "./globals.css";
import Script from "next/script";
import Footer from "@/components/Footer";
import { ADSENSE_CLIENT_ID } from "@/lib/data";

export const metadata = {
  title: "中国五千年史",
  description: "文明の黎明から現代まで、中国史をたどる年表サイト",
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
        {ADSENSE_CLIENT_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
