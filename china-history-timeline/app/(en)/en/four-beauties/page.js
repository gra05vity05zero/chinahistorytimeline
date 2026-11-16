import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { HeritageThumb } from "@/components/Shared";
import { FeaturePage, cardStyle, serif } from "@/components/en/EnFeature";

const title = "The Four Beauties of Ancient China: Xi Shi, Wang Zhaojun, Diaochan and Yang Guifei";
const description =
  "Who were the Four Beauties of ancient China? Xi Shi, Wang Zhaojun, Diaochan and Yang Guifei — when they lived, the stories told about them, the origin of “fish sink, geese fall, the moon hides, flowers shy,” and which of them really existed.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/four-beauties", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/four-beauties", image: { title: "The Four Beauties of Ancient China", seal: "美" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const slug = (eraId, key) => ERAS.find((e) => e.id === eraId)?.events.find((ev) => stripRuby(ev.title).includes(key))?.slug || null;

const BEAUTIES = [
  {
    id: "xishi", name: "Xi Shi", epithet: "Fish sink", period: "End of the Spring and Autumn period (5th c. BC), Yue",
    key: "The beauty of Yue who bewitched King Fuchai of Wu",
    body: "Born in Zhuluo village in Yue, she is said to have been discovered washing gauze in a river. After King Goujian of Yue was crushed by Wu at Kuaiji, on the advice of his minister Fan Li he presented Xi Shi to King Fuchai of Wu. Fuchai became infatuated and neglected government, and in 473 BC Wu was destroyed by Yue. Of her later life, some say she left with Fan Li for the Five Lakes, others that she was drowned in the Yangtze. The story in the Zhuangzi that she was beautiful even when frowning with heartache — and that a village woman who imitated her only drove people away — gave rise to the proverb “imitating the frown.” In Japan, Matsuo Bashō evoked her in The Narrow Road to the Deep North.",
    epithetNote: "Fish, gazing at her reflection on the water, forgot to swim and sank.",
    fact: "Her name does not appear in official histories such as the Records of the Grand Historian; her story was shaped in Eastern Han works such as the Annals of Wu and Yue — she is a legendary figure.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%A4%E4%BB%8A%E7%99%BE%E7%BE%8E%E5%9C%96%E4%B9%8B%E9%84%AD%E6%97%A6%E8%A5%BF%E6%96%BD%EF%BC%88One_hundred_beauties_Zheng_Dan_and_Xi_Shi%EF%BC%89.png",
    caption: "Xi Shi and Zheng Dan, who was sent to Wu with her, in the Qing album One Hundred Beauties Past and Present",
    event: slug("chunqiu", "臥薪嘗胆"), era: "chunqiu",
  },
  {
    id: "wangzhaojun", name: "Wang Zhaojun", epithet: "Geese fall", period: "Western Han (1st c. BC)",
    key: "A palace lady married to the Xiongnu, who helped keep the peace with Han",
    body: "Her name was Qiang; Zhaojun was her courtesy name. She entered the harem of Emperor Yuan of the Western Han but spent years without catching the emperor’s eye. In 33 BC, when Huhanye Chanyu of the Xiongnu, the northern nomadic power, asked to become a son-in-law of the Han, Wang Zhaojun was chosen to marry him. The later Miscellaneous Records of the Western Capital says the palace women were chosen from portraits by court painters, and that Wang Zhaojun alone, having refused to bribe them, was painted as ugly — so that Emperor Yuan, seeing her for the first time on the day of her departure, bitterly regretted it. Among the Xiongnu she was called Ninghu Yanzhi; after the chanyu’s death she married the next chanyu according to Xiongnu custom, and ended her life far from home. Her marriage is credited with bringing a long peace between Han and Xiongnu, and outside Hohhot in Inner Mongolia stands the “Green Mound,” said to be her tomb.",
    epithetNote: "When she played the pipa on her journey, wild geese flying overhead forgot to beat their wings and fell.",
    fact: "A real person, recorded in the History of the Former Han and the History of the Later Han.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%A4%E4%BB%8A%E7%99%BE%E7%BE%8E%E5%9C%96%E4%B9%8B%E7%8E%8B%E6%98%AD%E5%90%9B%EF%BC%88One_hundred_beauties_Wang_Zhaojun%EF%BC%89.png",
    caption: "Wang Zhaojun in the Qing album One Hundred Beauties Past and Present",
    era: "westernhan",
  },
  {
    id: "diaochan", name: "Diaochan", epithet: "The moon hides", period: "End of the Eastern Han (late 2nd c.)",
    key: "Set Dong Zhuo and Lü Bu against each other with the “chain stratagem”",
    body: "In the Romance of the Three Kingdoms she appears as a singing girl raised by the Eastern Han minister Wang Yun. To rid the capital of the tyrant Dong Zhuo, Wang Yun promised Diaochan to Dong Zhuo’s adopted son, the fierce general Lü Bu, while also presenting her to Dong Zhuo. Playing cleverly between the two, Diaochan stoked their jealousy until, in 192, Lü Bu killed Dong Zhuo. This scheme, the “chain stratagem,” became a favorite scene of Peking opera. The official Records of the Three Kingdoms says only, in Lü Bu’s biography, that he had an affair with one of Dong Zhuo’s maids and feared discovery — without naming her; this maid is thought to be the seed of Diaochan’s story.",
    epithetNote: "As she gazed at the moon in the garden, the moon, ashamed beside her beauty, hid behind the clouds.",
    fact: "The only one of the four whose existence cannot be confirmed; she took shape mainly in Yuan drama and the Ming Romance of the Three Kingdoms.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%A4%E4%BB%8A%E7%99%BE%E7%BE%8E%E5%9C%96%E4%B9%8B%E8%B2%82%E8%9F%AC%EF%BC%88One_hundred_beauties_Diaochan%EF%BC%89.png",
    caption: "Diaochan in the Qing album One Hundred Beauties Past and Present",
    era: "easternhan",
  },
  {
    id: "yangguifei", name: "Yang Guifei", epithet: "Flowers shy", period: "Tang (8th c.)",
    key: "Held Xuanzong’s love entirely, and perished in the An Lushan Rebellion",
    body: "Her name was Yuhuan. She was first the consort of Xuanzong’s son, Prince Shou, but caught Xuanzong’s eye, became a Daoist nun for a time, and in 745 was made guifei (precious consort). Versed in song, dance and music, she won all of Xuanzong’s affection, and her kinsman Yang Guozhong rose to chief minister. The story that her favorite fruit, lychees, were rushed to her by express horses from the far south is well known. But disorder in government led to the An Lushan Rebellion of 755; during the flight from the capital, at Mawei, soldiers killed Yang Guozhong and demanded her execution, and Xuanzong reluctantly ordered her death. Their love and parting were sung in Bai Juyi’s long poem “The Song of Everlasting Regret,” which greatly influenced works in Japan such as The Tale of Genji. In Nagato, Yamaguchi Prefecture, there is even a legend that she survived and drifted to Japan, and a stone pagoda said to be her grave.",
    epithetNote: "When she touched the flowers in the garden, the flowers, ashamed beside her beauty, closed their petals.",
    fact: "A real person, with biographies in both the Old and New Books of Tang.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%8F%A4%E4%BB%8A%E7%99%BE%E7%BE%8E%E5%9C%96%E4%B9%8B%E6%A5%8A%E7%8E%89%E7%92%B0%EF%BC%88One_hundred_beauties_Yang_Yuhuan%EF%BC%89.png",
    caption: "Yang Guifei (Yang Yuhuan) in the Qing album One Hundred Beauties Past and Present",
    event: slug("tang", "安史の乱"), era: "tang", person: "/en/people/tang/yang-guifei",
  },
];

const link = { fontSize: 13, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist };

export default function EnglishFourBeautiesPage() {
  return (
    <FeaturePage
      title="The Four Beauties of Ancient China"
      jaPath="/four-beauties"
      intro="Xi Shi, Wang Zhaojun, Diaochan and Yang Guifei are called the “Four Beauties” of China, the most beautiful of the women in Chinese history and legend. Their beauty is summed up in the phrase “fish sink and geese fall, the moon hides and flowers are put to shame.” Each is remembered not only for her beauty but for her part in the rise and fall of states, in diplomacy and in struggles for power."
      related={[
        { href: "/en/four-great-novels", label: "The Four Great Classical Novels" },
        { href: "/en/four-inventions", label: "The Four Great Inventions" },
        { href: "/en/women-rulers", label: "Women who ruled China" },
      ]}
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" style={{ marginBottom: 28 }}>
        {BEAUTIES.map((b) => (
          <a key={b.id} href={`#${b.id}`} className="text-center hover:opacity-90" style={{ ...cardStyle, padding: "10px 6px" }}>
            <div style={{ ...serif, fontSize: 15, fontWeight: 900, color: COLORS.vermilion }}>{b.epithet}</div>
            <div style={{ ...serif, fontSize: 14, fontWeight: 700, color: COLORS.ink, marginTop: 2 }}>{b.name}</div>
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-5">
        {BEAUTIES.map((b, i) => (
          <div key={b.id} id={b.id} style={{ ...cardStyle, scrollMarginTop: 16 }}>
            <div className="relative flex items-center justify-center" style={{ width: "100%", height: 240, backgroundColor: "#EFE7D0", overflow: "hidden" }}>
              <HeritageThumb imageUrl={b.imageUrl} name={b.name} type="figure" />
              <span className="absolute flex items-center justify-center" style={{ top: 8, left: 8, width: 26, height: 26, borderRadius: 13, backgroundColor: COLORS.vermilion, color: "#FBF8F0", ...serif, fontSize: 12, fontWeight: 700 }}>{i + 1}</span>
            </div>
            <div style={{ padding: "14px 16px" }}>
              <div style={{ fontSize: 10.5, color: COLORS.mist, marginBottom: 8 }}>{b.caption} / Wikimedia Commons (public domain)</div>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h2 style={{ ...serif, fontSize: 19, fontWeight: 700, color: COLORS.ink }}>{b.name}</h2>
                <span style={{ fontSize: 12, color: COLORS.gold, ...serif }}>{b.period}</span>
              </div>
              <p style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.vermilion, marginTop: 6 }}>{b.key}</p>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 6 }}>{b.body}</p>
              <div style={{ marginTop: 10, padding: "8px 10px", backgroundColor: "#F3ECD9", fontSize: 13, lineHeight: 1.75, color: COLORS.inkSoft }}>
                <div><b style={{ color: COLORS.ink }}>Why “{b.epithet}”: </b>{b.epithetNote}</div>
                <div style={{ marginTop: 4 }}><b style={{ color: COLORS.ink }}>In history: </b>{b.fact}</div>
              </div>
              <div className="flex gap-x-4 gap-y-1 flex-wrap" style={{ marginTop: 10 }}>
                <Link href={b.event ? `/en/events/${b.event}` : `/en/eras/${b.era}`} style={link}>{b.event ? "Read the related event" : "About this era"} →</Link>
                {b.person && <Link href={b.person} style={link}>Profile →</Link>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </FeaturePage>
  );
}
