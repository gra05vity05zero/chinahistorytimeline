import Link from "next/link";
import { ERAS, stripRuby, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Paras, NoteCard, cardStyle, serif, jaEventSlug } from "@/components/en/EnFeature";

const title = "Chinese Idioms from History: Chengyu and the Stories Behind Them";
const description =
  "“Sleeping on brushwood and tasting gall,” “songs of Chu on four sides,” “spear and shield” — chengyu idioms born from events and people in Chinese history, still used in Chinese and Japanese today, with their meanings, the stories behind them and the eras they come from.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/idioms", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/idioms", image: { title: "Chinese Idioms from History", seal: "語" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const ev = (eraId, key) => {
  const s = jaEventSlug(ERAS, stripRuby, eraId, key);
  return s ? `/en/events/${s}` : null;
};
const person = (eraId, ja) => figureEnByJa(eraId, ja)?.href || null;

const IDIOMS = [
  { zh: "卧薪尝胆 wòxīn chángdǎn", en: "Sleeping on brushwood and tasting gall", meaning: "Enduring hardship to achieve a goal.", origin: "From the struggle between Wu and Yue: King Goujian of Yue, defeated by Wu, tasted bitter gall every day so as never to forget his humiliation, while King Fuchai of Wu slept on brushwood to keep alive his own vow of revenge.", era: "Spring and Autumn", href: ev("chunqiu", "臥薪嘗胆"), label: "Read the struggle between Wu and Yue" },
  { zh: "四面楚歌 sìmiàn chǔgē", en: "Songs of Chu on four sides", meaning: "Being surrounded by enemies, utterly alone.", origin: "At the end of the Chu–Han war, Xiang Yu, surrounded by the Han army at Gaixia, heard the songs of his homeland Chu from every side and despaired: “Has Han already taken all of Chu?”", era: "End of the Qin and the Chu–Han war", href: person("qin", "項羽"), label: "Read about Xiang Yu" },
  { zh: "破釜沉舟 pòfǔ chénzhōu", en: "Break the cauldrons and sink the boats", meaning: "To commit oneself with no way back.", origin: "Leading his army against Qin at Julu, Xiang Yu smashed the cooking pots and sank the boats to cut off retreat, so that his soldiers would fight to the death.", era: "End of the Qin", href: person("qin", "項羽"), label: "Read about Xiang Yu" },
  { zh: "三顾茅庐 sāngù máolú", en: "Three visits to the thatched cottage", meaning: "A superior going out of his way, with every courtesy, to recruit someone talented.", origin: "Liu Bei visited the retired Zhuge Liang three times before he finally agreed to become his strategist.", era: "Three Kingdoms", href: person("sanguo", "諸葛亮"), label: "Read about Zhuge Liang" },
  { zh: "完璧归赵 wánbì guī Zhào", en: "Returning the jade intact to Zhao", meaning: "Perfect, without a flaw (in Japanese, kanpeki); returning something intact to its owner.", origin: "Lin Xiangru, a minister of Zhao, brought the precious He Shi jade disc — which Qin had nearly seized — back to Zhao without a scratch.", era: "Warring States" },
  { zh: "矛盾 máodùn", en: "Spear and shield", meaning: "A contradiction; something that does not add up.", origin: "A story from the Han Feizi: a merchant of Chu sold “a spear that can pierce any shield” and “a shield no spear can pierce” — and had no answer when asked what would happen if the spear struck the shield.", era: "Warring States" },
  { zh: "五十步笑百步 wǔshí bù xiào bǎi bù", en: "Fifty paces laughing at a hundred", meaning: "There is little real difference, whatever the details.", origin: "A parable from the Mencius: a soldier who fled fifty paces from battle mocked one who fled a hundred as a coward.", era: "Warring States" },
  { zh: "渔翁得利 yúwēng dé lì", en: "The fisherman’s gain", meaning: "A third party profiting while two others fight.", origin: "A story from the Strategies of the Warring States: while a snipe and a clam were locked in a struggle, a passing fisherman caught them both.", era: "Warring States" },
  { zh: "画蛇添足 huà shé tiān zú", en: "Drawing legs on a snake", meaning: "An unnecessary addition that spoils things.", origin: "A story from Chu: in a race to draw a snake, the man who finished first got carried away and added legs — and was declared the loser.", era: "Warring States" },
  { zh: "吴越同舟 Wú Yuè tóng zhōu", en: "Wu and Yue in the same boat", meaning: "Enemies thrown together in the same place or circumstances.", origin: "From a passage in the Art of War of Sunzi: even men of the rival states of Wu and Yue will help each other if their boat is caught in a storm.", era: "Spring and Autumn" },
  { zh: "背水一战 bèi shuǐ yī zhàn", en: "Fighting with one’s back to the river", meaning: "Cutting off one’s own retreat and giving everything.", origin: "The Han general Han Xin deliberately camped with his back to a river, so that his men knew retreat meant death, and defeated Zhao’s great army.", era: "Chu–Han war", href: "/en/chuhan-battles", label: "See the Chu–Han battle map" },
  { zh: "囊萤映雪 náng yíng yìng xuě", en: "Fireflies in a bag and the glow of snow", meaning: "The fruits of hard study. (The Japanese phrase keisetsu no kō, “the merit of fireflies and snow,” comes from this.)", origin: "Too poor to buy lamp oil, Che Yin read at night by the light of fireflies, and Sun Kang by the light reflected from snow.", era: "Eastern Jin" },
  { zh: "挥泪斩马谡 huī lèi zhǎn Mǎ Sù", en: "Weeping as he beheaded Ma Su", meaning: "Punishing even someone you love, setting feelings aside, to uphold discipline.", origin: "Zhuge Liang tearfully executed his favorite protégé, the general Ma Su, who had disobeyed orders and caused a crushing defeat.", era: "Three Kingdoms", href: "/en/sanguo-battles", label: "See the Three Kingdoms battle map" },
  { zh: "髀肉之叹 bì ròu zhī tàn", en: "Lamenting the flesh on one’s thighs", meaning: "Lamenting time wasted without a chance to show one’s ability.", origin: "During his years of frustration, Liu Bei noticed that, not having ridden for a long time, his thighs had grown fat — and lamented the years slipping by without achievement.", era: "Three Kingdoms" },
  { zh: "杞人忧天 Qǐ rén yōu tiān", en: "The man of Qi who feared the sky would fall", meaning: "Needless worry about things that will never happen.", origin: "A parable from the Liezi: a man of the state of Qi worried so seriously that the sky might fall in that he could not sleep at night.", era: "Zhou (a philosophers’ parable)" },
  { zh: "塞翁失马 sài wēng shī mǎ", en: "The old man at the frontier lost his horse", meaning: "Fortune and misfortune are unpredictable — don’t rejoice or despair too soon.", origin: "A story from the Huainanzi: an old man at the frontier lost his horse, which then returned with a fine steed; his son broke his leg falling from it, which then spared him from going to war — fortune and misfortune turning again and again.", era: "Western Han (a philosophers’ parable)" },
  { zh: "揠苗助长 yà miáo zhù zhǎng", en: "Pulling up seedlings to help them grow", meaning: "Doing harm by trying too hard to help.", origin: "A parable from the Mencius: a farmer of Song, impatient that his seedlings grew slowly, pulled on them to stretch them — and killed them.", era: "Warring States" },
];

export default function EnglishIdiomsPage() {
  return (
    <FeaturePage
      title="Chinese Idioms from History"
      jaPath="/idioms"
      intro="Many idioms still used today in Chinese — and in Japanese, which borrowed them — come from events and people in Chinese history. Here are some of the best known, with their meanings and the stories and eras behind them."
      related={[
        { href: "/en/funny-episodes", label: "Funny episodes from Chinese history" },
        { href: "/en/history-books", label: "The great histories of China" },
        { href: "/en/hundred-schools", label: "The Hundred Schools of Thought" },
      ]}
    >
      <NoteCard title="What is a chengyu?">
        A chengyu is a set phrase — usually of four characters — that grew out of a story (gushi) about an event or a person. Most come from classic texts such as the Records of the Grand Historian, the Han Feizi and the Mencius. Unlike an ordinary four-character phrase, each carries a specific story behind it, which is what makes its meaning memorable. In Japan they are known as koji seigo and are a staple of school Japanese and classical Chinese lessons.
      </NoteCard>
      <div className="flex flex-col gap-3" style={{ marginTop: 24 }}>
        {IDIOMS.map((i) => (
          <div key={i.en} className="p-4" style={cardStyle}>
            <div style={{ ...serif, fontSize: 17, fontWeight: 700, color: COLORS.ink }}>{i.en}</div>
            <div style={{ fontSize: 13, color: COLORS.gold, marginTop: 2 }}>{i.zh} · {i.era}</div>
            <p style={{ fontSize: 14, color: COLORS.ink, marginTop: 6 }}><span style={{ fontWeight: 700 }}>Meaning: </span>{i.meaning}</p>
            <p style={{ fontSize: 13.5, lineHeight: 1.75, color: COLORS.inkSoft, marginTop: 4 }}><span style={{ fontWeight: 700, color: COLORS.ink }}>Origin: </span>{i.origin}</p>
            {i.href && <Link href={i.href} style={{ fontSize: 12.5, color: COLORS.vermilion, display: "inline-block", marginTop: 6 }}>{i.label} →</Link>}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24 }}>
        <Paras items={["The eras in which these idioms were born can be explored through the timeline and the people index."]} />
      </div>
    </FeaturePage>
  );
}
