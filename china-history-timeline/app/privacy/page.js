import { COLORS } from "@/lib/data";

export const metadata = {
  title: "プライバシーポリシー | 中国五千年史",
};

const sectionStyle = { marginBottom: 28 };
const headingStyle = {
  fontFamily: "'Noto Serif SC', serif",
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
        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 24, fontWeight: 900, color: COLORS.ink, marginBottom: 24 }}>
          プライバシーポリシー
        </h1>

        <div style={sectionStyle}>
          <p style={bodyStyle}>
            「中国五千年史」（以下「当サイト」）では、訪問者のプライバシーを尊重し、以下の方針に基づいて個人情報・アクセス情報を取り扱います。
            {/* TODO: 運営者名・連絡先を明記する（個人運営の場合も名前かハンドルネームの記載が望ましい） */}
          </p>
        </div>

        <div style={sectionStyle}>
          <div style={headingStyle}>広告の配信について</div>
          <p style={bodyStyle}>
            当サイトは、第三者配信の広告サービス「Google AdSense」を利用しています。Google
            を含む第三者配信事業者は、Cookie を使用して、ユーザーが当サイトや他のサイトに過去にアクセスした際の情報に基づいて広告を配信します。
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
            当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが広告料を獲得できる手段を提供することを目的に設定された
            アフィリエイトプログラムである「Amazonアソシエイト・プログラム」の参加者です。商品の購入等によって生じた成果に応じ、
            当サイトはAmazonから収益を得ることがあります。
          </p>
          <p style={{ ...bodyStyle, marginTop: 8 }}>
            また、当サイトは「A8.net」を通じたアフィリエイトプログラムにも参加しており、紹介した商品・サービスの契約や購入等によって
            成果報酬を得ることがあります。
          </p>
        </div>

        <div style={sectionStyle}>
          <div style={headingStyle}>アクセス解析ツールについて</div>
          <p style={bodyStyle}>
            当サイトでは、サービス向上のためアクセス解析ツールを導入する場合があります。これらはトラフィックデータの収集のためにCookieを使用することがありますが、
            このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            {/* TODO: 実際にGoogle Analytics等を導入する場合はここに明記する */}
          </p>
        </div>

        <div style={sectionStyle}>
          <div style={headingStyle}>コンテンツの正確性について</div>
          <p style={bodyStyle}>
            当サイトは歴史情報をできるだけ正確に記載するよう努めていますが、内容の正確性・完全性を保証するものではありません。
            学術的な引用や研究目的でご利用の際は、一次資料や専門書籍など信頼できる情報源とあわせてご確認ください。
          </p>
        </div>

        <div style={sectionStyle}>
          <div style={headingStyle}>著作権について</div>
          <p style={bodyStyle}>
            当サイトに掲載されている文章・画像等の著作権は、運営者または各権利者に帰属します。画像には出典・ライセンス表記を付しています。
            無断転載はご遠慮ください。
          </p>
        </div>

        <div style={sectionStyle}>
          <div style={headingStyle}>プライバシーポリシーの変更について</div>
          <p style={bodyStyle}>
            当サイトは、個人情報に関して適用される法令を遵守するとともに、本ポリシーの内容を適宜見直し、改善に努めます。
            修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </p>
        </div>

        <div style={sectionStyle}>
          <div style={headingStyle}>お問い合わせ</div>
          <p style={bodyStyle}>
            本ポリシーに関するお問い合わせは、
            <a href="/contact" style={{ color: COLORS.vermilion, textDecoration: "underline" }}>
              お問い合わせページ
            </a>
            よりご連絡ください。
          </p>
        </div>

        <p style={{ fontSize: 11.5, color: COLORS.mist, marginTop: 32 }}>
          制定日: {/* TODO: 公開日を記入 */} ／ 最終改定日: {/* TODO: 改定日を記入 */}
        </p>
      </div>
    </div>
  );
}
