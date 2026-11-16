import { COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section } from "@/components/en/EnFeature";

const title = "Privacy Policy";
const description = `How ${SITE_NAME_EN} handles advertising, affiliate programs, analytics and personal information.`;

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/privacy", "en"),
  robots: { index: false, follow: true },
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/privacy" }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const p = { fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft };
const a = { color: COLORS.vermilion, textDecoration: "underline" };

export default function EnglishPrivacyPage() {
  return (
    <FeaturePage title="Privacy Policy" jaPath="/privacy" intro={`${SITE_NAME_EN} (“this site”) respects the privacy of its visitors and handles personal and access information according to the following policy. The Japanese version of this policy is the authoritative one.`}>
      <Section title="Advertising">
        <p style={p}>This site uses Google AdSense, a third-party advertising service. Third-party vendors, including Google, use cookies to serve ads based on a user’s previous visits to this site and other sites. Google’s use of advertising cookies enables it and its partners to serve ads based on visits to this site and/or other sites on the internet.</p>
        <p style={{ ...p, marginTop: 8 }}>You can opt out of personalized advertising in <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer" style={a}>Google’s Ads Settings</a>, or opt out of third-party vendors’ cookies for personalized advertising at <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" style={a}>aboutads.info</a>.</p>
      </Section>
      <Section title="Affiliate programs">
        <p style={p}>This site is a participant in the Amazon Associates Program (Amazon.co.jp), an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon. This site may earn income from Amazon on qualifying purchases. This site also participates in affiliate programs through A8.net and may receive commissions on contracts or purchases of products and services it introduces.</p>
      </Section>
      <Section title="Analytics">
        <p style={p}>This site uses Google Analytics to improve its service. Google Analytics uses cookies to collect traffic data; this data is collected anonymously and does not identify individuals. You can refuse collection by disabling cookies in your browser settings. For details, see the <a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank" rel="noopener noreferrer" style={a}>Google Analytics Terms of Service</a> and <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={a}>Google’s policies</a>.</p>
      </Section>
      <Section title="Accuracy of content">
        <p style={p}>We try to present historical information as accurately as possible, but do not guarantee its accuracy or completeness. For academic citation or research, please also consult primary sources, specialist books and other reliable sources.</p>
      </Section>
      <Section title="Copyright">
        <p style={p}>Copyright in the text and images on this site belongs to the site operator or the respective rights holders. Images are shown with their sources and licenses. Please do not reproduce content without permission.</p>
      </Section>
      <Section title="Changes to this policy">
        <p style={p}>This site complies with the laws applicable to personal information and will review and improve this policy as needed. The latest version will always be published on this page.</p>
      </Section>
    </FeaturePage>
  );
}
