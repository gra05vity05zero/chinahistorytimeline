import Timeline from "@/components/Timeline";

// title・description・openGraph・twitterはルートlayoutの既定値をそのまま使う
export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <Timeline />;
}
