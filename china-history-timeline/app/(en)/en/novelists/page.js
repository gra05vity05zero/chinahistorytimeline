import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, ItemCard, Paras } from "@/components/en/EnFeature";

const title = "Japanese Novelists Who Wrote About Chinese History";
const description =
  "Yoshikawa Eiji’s Three Kingdoms, Shiba Ryotaro’s Kou to Ryuho, Inoue Yasushi’s Tun-huang and more: the Japanese novelists who made China’s past part of Japanese popular culture, with the eras their books are set in.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/novelists", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/novelists", image: { title: "Japanese Novelists of Chinese History", seal: "筆" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const NOVELISTS = [
  { name: "Yoshikawa Eiji", works: "Sangokushi (The Three Kingdoms)", era: "Three Kingdoms", eraId: "sanguo",
    body: "A national classic that retold the Romance of the Three Kingdoms in readable Japanese. It is regarded as the starting point of Japan’s enduring Three Kingdoms boom, including the games and manga that followed." },
  { name: "Chin Shunshin (Chen Shunchen)", works: "The First Emperor of Qin, The Taiping Heavenly Kingdom, A Novel of the Eighteen Histories and others", era: "Qin to Qing", eraId: "qin",
    body: "Born into a family with Taiwanese roots and raised in Kobe, he left a vast body of work set across the whole of Chinese history and is highly regarded as a writer of historical fiction based on careful research. Winner of the Naoki Prize." },
  { name: "Inoue Yasushi", works: "Tun-huang, Lou-lan, Confucius", era: "Northern Song, Western Han and others", eraId: "northernsong",
    body: "A literary giant known for works set on the Silk Road and in the Western Regions. Tun-huang, set in the western borderlands in the Northern Song era, is among his best-known books; several of his China novels have been translated into English." },
  { name: "Miyagitani Masamitsu", works: "Chōji (Chong’er), Taikōbō, Gakki (Yue Yi), Mōshōkun (Lord Mengchang) and others", era: "Spring and Autumn and Warring States", eraId: "zhanguo",
    body: "The leading writer of historical novels about the figures of ancient China, above all the Spring and Autumn and Warring States periods. He holds a unique place in Japan as an author devoted to this era." },
  { name: "Shiba Ryōtarō", works: "Kōu to Ryūhō (Xiang Yu and Liu Bang)", era: "End of the Qin and the Chu–Han Contention", eraId: "qin", page: "/en/chuhan-battles", pageLabel: "See the Chu–Han battle map",
    body: "Best known as the master of Japanese historical fiction, he also wrote Kōu to Ryūhō, about the turmoil at the end of the Qin and the Chu–Han Contention, which remains widely read as his major work on Chinese history." },
  { name: "Kitakata Kenzō", works: "Sangokushi, Yōkashō (The Yang Family Generals), Suikoden (Water Margin), Yōreiden, Gakuhiden (Yue Fei)", era: "Three Kingdoms and Northern Song", eraId: "sanguo", page: "/en/suikoden", pageLabel: "Read about Water Margin",
    body: "Known as a hard-boiled novelist, he has rewritten Chinese classics such as the Three Kingdoms and Water Margin in series of his own, with his own interpretations." },
  { name: "Tsukamoto Seishi", works: "Ryūhō (Liu Bang), Go Etsu shunjū (Wu and Yue), Shokatsu Kōmei (Zhuge Liang)", era: "Western Han and Three Kingdoms", eraId: "westernhan",
    body: "He has written many novels about the heroes of Chinese history, such as Liu Bang, founder of the Western Han, and Zhuge Liang of the Three Kingdoms." },
  { name: "Sakemi Ken’ichi", works: "Kōkyū shōsetsu (A Harem Tale), Bokkō (Mozi’s defense)", era: "Warring States", eraId: "zhanguo",
    body: "His debut, Kōkyū shōsetsu, set in an imaginary Chinese dynasty, won the Japan Fantasy Novel Award. Bokkō, about the Mohist philosopher’s defense of a besieged city in the Warring States period, was adapted as a manga and as the film Battle of Wits." },
  { name: "Tanaka Yoshiki", works: "Honryū (Torrent) and others", era: "Northern and Southern Dynasties", eraId: "nanbei",
    body: "Known for Legend of the Galactic Heroes, he has also written novels on Chinese history, such as Honryū, set in the Northern and Southern Dynasties." },
  { name: "Anō Tsutomu", works: "Hōshin engi (Investiture of the Gods), Saiyūki, Sangokushi engi (retellings)", era: "End of the Shang to the Three Kingdoms", eraId: "shang",
    body: "Known for translating and reworking classics such as the Four Great Novels into forms easy for modern readers. His Hōshin engi was widely read as the source for later manga and anime adaptations." },
  { name: "Shibata Renzaburō", works: "Suikoden (Water Margin)", era: "Northern Song", eraId: "northernsong", page: "/en/suikoden", pageLabel: "Read about Water Margin",
    body: "One of the leading popular novelists of postwar Japan, known for his adaptation of Water Margin, the story of the outlaw heroes who gather at Mount Liang at the end of the Northern Song." },
];

export default function EnglishNovelistsPage() {
  return (
    <FeaturePage
      title="Japanese Novelists of Chinese History"
      jaPath="/novelists"
      intro="Ever since the Romance of the Three Kingdoms was translated into Japanese in the Edo period, Chinese history has fascinated Japanese novelists. Here are the major writers and their best-known works, with the era each is set in. Most are available only in Japanese, but the history behind them can be explored on this timeline."
      related={[
        { href: "/en/four-great-novels", label: "The Four Great Classical Novels" },
        { href: "/en/history-books", label: "The great histories of China" },
        { href: "/en/kingdom", label: "Kingdom: the history behind the manga" },
      ]}
    >
      <div className="flex flex-col gap-4">
        {NOVELISTS.map((n) => (
          <ItemCard key={n.name} title={n.name} subtitle={n.works} meta={`Setting: ${n.era}`}
            links={[{ href: `/en/eras/${n.eraId}`, label: "Read about the era on the timeline" }, ...(n.page ? [{ href: n.page, label: n.pageLabel }] : [])]}>
            {n.body}
          </ItemCard>
        ))}
      </div>
      <div style={{ marginTop: 24 }}>
        <Paras items={["The events and people of the eras these novels are set in can be explored through the timeline and the people index."]} />
      </div>
    </FeaturePage>
  );
}
