import { COLORS } from "@/lib/data";

export const metadata = {
  title: "お問い合わせ | 中国五千年史",
};

// TODO: 実際の連絡先メールアドレスに置き換える
const CONTACT_EMAIL = "contact@chinahistorytimeline.com";

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 24, fontWeight: 900, color: COLORS.ink, marginBottom: 20 }}>
          お問い合わせ
        </h1>
        <p style={{ fontSize: 14, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
          内容の誤り、ご指摘、広告掲載に関するお問い合わせなどは、以下のメールアドレスまでご連絡ください。
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          style={{
            display: "inline-block",
            fontSize: 14,
            color: "#fff",
            backgroundColor: COLORS.vermilion,
            padding: "10px 20px",
            textDecoration: "none",
          }}
        >
          {CONTACT_EMAIL}
        </a>
        <p style={{ fontSize: 12, color: COLORS.mist, marginTop: 20 }}>
          {/* TODO: フォーム化する場合はGoogle FormsやFormspreeなどの外部サービス連携が簡単です */}
          お問い合わせフォームを設置したい場合は、Google FormsやFormspreeなどの外部サービスと連携する方法もあります。
        </p>
      </div>
    </div>
  );
}
