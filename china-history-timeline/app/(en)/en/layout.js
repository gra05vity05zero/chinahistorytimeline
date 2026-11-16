import "../../globals.css";
import { Noto_Serif, Noto_Sans, Noto_Serif_JP } from "next/font/google";
import EnSiteHeader from "@/components/en/EnSiteHeader";
import EnFooter from "@/components/en/EnFooter";
import { ADSENSE_CLIENT_ID, GA_MEASUREMENT_ID } from "@/lib/constants";
import { SITE_URL, SITE_NAME_EN, SITE_DESCRIPTION_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";

// Root layout of the English edition (/en). The Japanese pages live under app/(ja) with their own root layout,
// so <html lang> is correct on both sides. Latin text uses Noto Serif / Noto Sans; the Chinese characters on the
// seals fall back to Noto Serif JP, the same face the Japanese edition uses.
const serif = Noto_Serif({ weight: ["400", "700", "900"], subsets: ["latin"], display: "swap", variable: "--font-serif-latin" });
const sans = Noto_Sans({ weight: ["400", "500"], subsets: ["latin"], display: "swap", variable: "--font-sans-latin" });
const serifCjk = Noto_Serif_JP({ weight: ["700"], subsets: ["latin"], display: "swap", preload: false, variable: "--font-serif-cjk" });

const DEFAULT_TITLE = "Chinese History Timeline | 5,000 Years of Dynasties, People and Events";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME_EN}` },
  description: SITE_DESCRIPTION_EN,
  alternates: bilingualAlternates("/", "en"),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: buildOpenGraphEn({
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION_EN,
    path: "/en",
    image: { title: "Chinese History Timeline", subtitle: "5,000 years of dynasties, people and events", seal: "史" },
  }),
  twitter: buildTwitterEn({ title: DEFAULT_TITLE, description: SITE_DESCRIPTION_EN }),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME_EN,
  url: `${SITE_URL}/en`,
  description: SITE_DESCRIPTION_EN,
  inLanguage: "en",
};

export default function EnglishRootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${serifCjk.variable}`}
      style={{
        "--font-serif": "var(--font-serif-latin), var(--font-serif-cjk)",
        "--font-sans": "var(--font-sans-latin), var(--font-serif-cjk)",
      }}
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        {ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
        {GA_MEASUREMENT_ID && (
          <>
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
        <EnSiteHeader />
        {children}
        <EnFooter />
      </body>
    </html>
  );
}
