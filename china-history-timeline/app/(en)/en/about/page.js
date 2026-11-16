import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Paras } from "@/components/en/EnFeature";

const title = "About This Site";
const description = `${SITE_NAME_EN} follows Chinese history dynasty by dynasty, from the Neolithic to the People’s Republic. About the site and how it is made.`;

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/about", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/about" }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

export default function EnglishAboutPage() {
  return (
    <FeaturePage title="About This Site" jaPath="/about" intro={`${SITE_NAME_EN} is a timeline of Chinese history, divided by dynasty, that you can follow by scrolling — from the Neolithic cultures to the People’s Republic of China.`}>
      <Paras items={[
        "Each event has its own page covering its background and consequences, along with related buildings, historic sites and people, and the films, games and books connected with it. Feature pages look at themes that cut across the eras, from the Great Wall and the Silk Road to battle maps, historical dramas and the history behind popular manga and games.",
        "We made this site because history feels closer when you meet it not only in textbooks but through films, games and the buildings that still stand today.",
        "The site was first written in Japanese, and this English edition translates its timeline, event articles, people and feature pages. Some pages written mainly for Japanese readers — such as Japanese wordplay for memorizing dates — have been adapted rather than translated word for word.",
        "We try to record history as accurately as we can, but cannot guarantee that everything is correct or complete. For academic citation or research, please check primary sources and specialist literature as well.",
      ]} />
    </FeaturePage>
  );
}
