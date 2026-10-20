import { COLORS, buildOpenGraph, buildTwitter } from "@/lib/data";

const title = "プライバシーポリシー";
const fullTitle = "プライバシーポリシー | 中国五千年史";
const description = "「中国五千年史」における広告配信・アフィリエイトプログラム・個人情報の取り扱いについて説明するプライバシーポリシーページです。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/privacy" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

const sectionStyle = { marginBottom: 28 };
const headingStyle = {
  fontFamily: "var(--font-serif), serif",
  fontSize: 16,
  fontWeight: 700,
  color: COLORS.ink,
  marginBottom: 8,
};
const bodyStyle = { fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft };

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 style={{ fontFamily: "var(--font-serif), serif", fontSize: 24, fontWeight: 900, color: COLORS.ink, marginBottom: 24 }}>
          プライバシーポリシー
        </h1>

        <div style={sectionStyle}>
          <p style={bodyStyle}>
            「中国五千年史」（以下「当サイト」）では、訪問者のプライバシーを尊重し、以下の方針に基づいて個人情報・アクセス情報を取り<ruby>扱<rt>あつか</rt></ruby>います。
            {/* TODO: 運営者名・連絡先を明記する（個人運営の場合も名前かハンドルネームの記載が望ましい） */}
          </p>
        </div>

        <div style={sectionStyle}>
          <div style={headingStyle}>広告の配信について</div>
          <p style={bodyStyle}>
            当サイトは、第三者配信の広告サービス「Google AdSense」を利用しています。Google
            を<ruby>含<rt>ふく</rt></ruby>む第三者配信事業者は、Cookie を使用して、ユーザーが当サイトや他のサイトに過去にアクセスした際の情報に基づいて広告を配信します。
            Google が広告 Cookie を使用することにより、Google およびそのパートナーは、当サイトや他のサイトへのアクセス情報に基づいて、ユーザーに適切な広告を配信できます。
          </p>
          <p style={{ ...bodyStyle, marginTop: 8 }}>
            ユーザーは
            <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.vermilion, textDecoration: "underline" }}>
              Google広告設定ページ
            </a>
            でパーソナライズ広告を無効にできます。また
            <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.vermilion, textDecoration: "underline" }}>
              aboutads.info
            </a>
            にアクセスして、パーソナライズ広告に使われる第三者配信事業者の Cookie を無効にできます。
          </p>
        </div>

        <div style={sectionStyle}>
          <div style={headingStyle}>アフィリエイトプログラムについて</div>
          <p style={bodyStyle}>
            当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが広告料を<ruby>獲得<rt>かくとく</rt></ruby>できる手段を提供することを目的に設定された
            アフィリエイトプログラムである「Amazonアソシエイト・プログラム」の参加者です。商品の<ruby>購入<rt>こうにゅう</rt></ruby>等によって生じた成果に応じ、
            当サイトはAmazonから収益を得ることがあります。
          </p>
          <p style={{ ...bodyStyle, marginTop: 8 }}>
            また、当サイトは「A8.net」を通じたアフィリエイトプログラムにも参加しており、<ruby>紹介<rt>しょうかい</rt></ruby>した商品・サービスの<ruby>契約<rt>けいやく</rt></ruby>や<ruby>購入<rt>こうにゅう</rt></ruby>等によって
            成果<ruby>報酬<rt>ほうしゅう</rt></ruby>を得ることがあります。
          </p>
        </div>

        <div style={sectionStyle}>
          <div style={headingStyle}>アクセス<ruby>解析<rt>かいせき</rt></ruby>ツールについて</div>
          <p style={bodyStyle}>
            当サイトでは、サービス向上のためGoogleアナリティクスを導入しています。Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しますが、
            このトラフィックデータは<ruby>匿名<rt>とくめい</rt></ruby>で収集されており、個人を特定するものではありません。
            この機能はCookieを無効にすることで収集を<ruby>拒否<rt>きょひ</rt></ruby>することが出来ますので、お使いのブラウザの設定をご確認ください。
            この規約に関して、<ruby>詳<rt>くわ</rt></ruby>しくは
            <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.vermilion, textDecoration: "underline" }}>
              Googleアナリティクス利用規約
            </a>
            のページや
            <a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.vermilion, textDecoration: "underline" }}>
              Googleポリシーと規約
            </a>
            のページをご覧ください。
          </p>
        </div>

        <div style={sectionStyle}>
          <div style={headingStyle}>コンテンツの正確性について</div>
          <p style={bodyStyle}>
            当サイトは歴史情報をできるだけ正確に<ruby>記載<rt>きさい</rt></ruby>するよう努めていますが、内容の正確性・完全性を保証するものではありません。
            学術的な引用や研究目的でご利用の際は、一次資料や専門<ruby>書籍<rt>しょせき</rt></ruby>など<ruby>信頼<rt>しんらい</rt></ruby>できる情報源とあわせてご確認ください。
          </p>
        </div>

        <div style={sectionStyle}>
          <div style={headingStyle}>著作権について</div>
          <p style={bodyStyle}>
            当サイトに<ruby>掲載<rt>けいさい</rt></ruby>されている文章・画像等の著作権は、運営者または各権利者に帰属します。画像には出典・ライセンス表記を付しています。
            無断<ruby>転載<rt>てんさい</rt></ruby>はご<ruby>遠慮<rt>えんりょ</rt></ruby>ください。
          </p>
        </div>

        <div style={sectionStyle}>
          <div style={headingStyle}>プライバシーポリシーの<ruby>変更<rt>へんこう</rt></ruby>について</div>
          <p style={bodyStyle}>
            当サイトは、個人情報に関して適用される法令を<ruby>遵守<rt>じゅんしゅ</rt></ruby>するとともに、本ポリシーの内容を<ruby>適宜<rt>てきぎ</rt></ruby>見直し、改善に努めます。
            修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </p>
        </div>

        <p style={{ fontSize: 11.5, color: COLORS.mist, marginTop: 32 }}>
          制定日: {/* TODO: 公開日を記入 */} ／ 最終改定日: {/* TODO: 改定日を記入 */}
        </p>
      </div>
    </div>
  );
}
