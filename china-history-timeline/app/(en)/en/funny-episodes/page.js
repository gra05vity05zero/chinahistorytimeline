import Link from "next/link";
import { ERAS, COLORS } from "@/lib/data";
import { SITE_NAME_EN, bilingualAlternates, figureEnByJa, findEraEn } from "@/lib/en";
import { buildOpenGraphEn, buildTwitterEn } from "@/lib/en/seo";
import { FeaturePage, Section, NoteCard, cardStyle, serif } from "@/components/en/EnFeature";

const title = "Funny Episodes from Chinese History: The Strangest and Silliest True Stories";
const description =
  "A ruler who died falling into a latrine, an emperor who appointed himself generalissimo, Cao Pi leading mourners in braying like donkeys at a funeral — funny and strange stories from Chinese history, in order from the Western Zhou to the Qing, with their sources and whether each is history or legend.";

export const metadata = {
  title,
  description,
  alternates: bilingualAlternates("/funny-episodes", "en"),
  openGraph: buildOpenGraphEn({ title: `${title} | ${SITE_NAME_EN}`, description, path: "/en/funny-episodes", image: { title: "Funny Episodes from Chinese History", seal: "笑" } }),
  twitter: buildTwitterEn({ title: `${title} | ${SITE_NAME_EN}`, description }),
};

const KIND = {
  history: { label: "History", color: COLORS.jade, note: "Recorded in an official history or chronicle" },
  anecdote: { label: "Anecdote collection", color: COLORS.gold, note: "Handed down in collections of sayings and doings such as A New Account of Tales of the World, or in essays" },
  legend: { label: "Legend", color: COLORS.inkSoft, note: "Of doubtful historicity even if found in a history, or heavily embellished later" },
};

function personHref(jaName) {
  for (const era of ERAS) {
    const p = figureEnByJa(era.id, jaName);
    if (p?.href) return { href: p.href, name: p.name };
  }
  return null;
}

const GROUPS = [
  { id: "pre-qin", title: "Western Zhou and Spring and Autumn", lead: "The older the record, the stronger the whiff of legend — but the blunders of these rulers are written down in oddly specific detail.", episodes: [
    { id: "youwang", title: "The king who fooled his lords with beacon fires to make his queen laugh", who: "King You of Zhou and Bao Si", when: "End of the Western Zhou (8th century BC)", kind: "legend", source: "Records of the Grand Historian, Basic Annals of Zhou", eraId: "westernzhou",
      body: "King You’s favorite, Bao Si, never laughed. One day the beacon fires that warned of enemy attack were lit; the lords came rushing in a panic — and found no enemy at all. At the sight of their bewildered faces, Bao Si burst out laughing for the first time. Delighted, King You lit the beacons again and again, and the lords came less and less. When the Quanrong barbarians really did attack, the beacons brought no one, King You was killed and the Western Zhou fell.",
      note: "Famous as China’s “boy who cried wolf,” but Warring States bamboo-slip sources make no mention of the beacons, and many scholars regard it as a later invention." },
    { id: "xianggong", title: "Waiting politely for the enemy to finish crossing the river — and losing badly", who: "Duke Xiang of Song", when: "638 BC", kind: "history", source: "Zuo Commentary, 22nd year of Duke Xi", eraId: "chunqiu",
      body: "Facing the army of the great state of Chu by the Hong River, Duke Xiang was urged to attack while the Chu army was in the middle of crossing. “No,” he said. Urged again when they had crossed but not yet formed up, he said, “Not yet.” He opened battle squarely only when the enemy was fully ready — and was soundly beaten. He was wounded in the thigh himself and died of it the next year. His defense: “A gentleman does not wound the wounded again, nor take gray-haired men prisoner.”",
      note: "Misplaced mercy that ends in disaster is still called “the benevolence of Duke Xiang of Song.”" },
    { id: "jingong", title: "Executes the shaman for a failed prophecy — then falls into the latrine", who: "Duke Jing of Jin", when: "581 BC", kind: "history", source: "Zuo Commentary, 10th year of Duke Cheng", eraId: "chunqiu",
      body: "As Duke Jing lay ill, a shaman foretold, “You will not eat this year’s new wheat.” When the new wheat came in, the duke showed the cooked grain to the shaman — “Your prophecy was wrong” — and had him executed. But just as he was about to eat, his belly swelled; he went to the latrine, fell in and died. He never ate a single mouthful of the new wheat.",
      note: "The same passage includes the dream of the illness hiding “above the vitals and below the heart,” the origin of an idiom for a hopeless case." },
    { id: "yanying", title: "“Those who visit a dog country enter by the dog gate”", who: "Yan Ying (Yanzi) of Qi", when: "Late Spring and Autumn (6th century BC)", kind: "anecdote", source: "Annals of Master Yan", eraId: "chunqiu",
      body: "Yan Ying, the great chief minister of Qi, was short. When he came to Chu as an envoy, the Chu court mocked him by having him enter through a small side door beside the main gate. Yan Ying would not move: “An envoy to a dog country enters by the dog gate. I have come to the country of Chu, so I cannot enter by this door.” Chu had to open the main gate. When the king of Chu later paraded a thief from Qi and asked, “Are the people of Qi good at stealing?” Yan Ying shot back: “Oranges grown south of the Huai become bitter trifoliate oranges when planted north of it. It must be the water and soil of Chu that turn men into thieves.”",
      note: "The source of the saying that people change with their surroundings: “the orange becomes a trifoliate orange.”" },
  ] },
  { id: "qin-han", title: "Qin and Han", lead: "The Records of the Grand Historian and the Book of Han portray people vividly — down to the bad manners of a dynasty’s founding hero.", episodes: [
    { id: "zhaogao", title: "Bringing a deer and calling it a horse", who: "Zhao Gao and the Second Emperor, Huhai", when: "207 BC", kind: "history", source: "Records of the Grand Historian, Basic Annals of Qin Shi Huang", eraId: "qin",
      body: "The eunuch Zhao Gao, who seized power after the First Emperor’s death, decided to test whether the officials would obey him. He brought a deer before the Second Emperor and said, “Here is a horse.” The emperor laughed: “The chancellor is mistaken — he calls a deer a horse,” and asked those around him. Some kept silent; some flattered Zhao Gao and said, “A horse.” Those who honestly said “a deer” were later brought down by Zhao Gao.",
      note: "The idiom “point at a deer and call it a horse.” It is popularly said to be the origin of the Japanese word baka (“fool,” written with the characters for horse and deer), but this is folk etymology." },
    { id: "liubangcap", title: "Snatching a Confucian scholar’s cap and urinating in it", who: "Liu Bang", when: "End of the Qin (late 3rd century BC)", kind: "history", source: "Records of the Grand Historian, Biographies of Li Yiji and Lu Jia", eraId: "qin", person: "劉邦",
      body: "Liu Bang, the future founding emperor of Han, loathed Confucian scholars from his youth. When a visitor came wearing a scholar’s cap, he would snatch it off and urinate in it, and he was forever shouting abuse when he talked to people — so the Records state plainly. When the old scholar Li Yiji came to see him, Liu Bang received him sitting on a couch while two women washed his feet. Rebuked by Li Yiji — “That is no way to meet an elder” — he hastily straightened his clothes and invited him to the seat of honor." },
    { id: "liubangsoup", title: "Threatened that his father would be boiled: “Then send me a bowl of the soup”", who: "Liu Bang and Xiang Yu", when: "203 BC", kind: "history", source: "Records of the Grand Historian, Basic Annals of Xiang Yu", eraId: "qin", person: "劉邦",
      body: "During the Chu–Han war, tired of the stalemate, Xiang Yu put Liu Bang’s father, whom he held hostage, on a huge chopping block and announced: “Surrender now, or I boil your father.” Liu Bang replied: “You and I swore brotherhood — so my father is your father too. If you insist on boiling your own father, be kind enough to send me a bowl of the soup.” Xiang Yu was enraged, but on the advice of his uncle Xiang Bo he held back.",
      note: "A famous scene, read as either heartless or iron-nerved. This brazen reply saved his father’s life." },
    { id: "dongfangshuo", title: "Ordered to rebuke himself, he ends up praising himself", who: "Dongfang Shuo and Emperor Wu of Han", when: "Western Han (2nd century BC)", kind: "history", source: "Book of Han, Biography of Dongfang Shuo", eraId: "westernhan",
      body: "On a hot summer day, Emperor Wu was to give meat to his officials, but the official in charge of handing it out never came. Dongfang Shuo drew his sword, cut off a piece himself — “It’s hot, so I’ll be going home early” — and took it away. The next day the emperor ordered him to rebuke himself, and he said: “To accept a gift without waiting for the edict — how rude! To draw a sword and cut the meat — how brave! To cut only a little — how honest! To take it home to my wife — how kind!” The emperor laughed — “I told you to rebuke yourself, and you praise yourself instead” — and gave him a further measure of wine and a hundred catties of meat to take home to his wife." },
    { id: "guangwu", title: "The man who far exceeded his youthful “ambitions”", who: "Emperor Guangwu (Liu Xiu)", when: "End of the Xin to early Eastern Han (1st century)", kind: "history", source: "Book of the Later Han, Annals of the Empresses", eraId: "easternhan", person: "光武帝",
      body: "As a young man, Liu Xiu admired the splendid procession of the zhijinwu, the commander of the capital guard, and was in love with Yin Lihua, a famous beauty of his home district. So he declared: “If I take office, let it be as zhijinwu; if I take a wife, let it be Yin Lihua.” It was the height of his dreams at the time. He did indeed marry Yin Lihua — and as for office, he went far beyond zhijinwu, becoming emperor and founding the Eastern Han." },
  ] },
  { id: "sanguo-jin", title: "Three Kingdoms and Jin", lead: "Thanks to A New Account of Tales of the World, a collection of the witty words and deeds of the famous, this age is a treasure house of funny stories.", episodes: [
    { id: "jilei", title: "Tonight’s password: “chicken ribs”", who: "Cao Cao and Yang Xiu", when: "219", kind: "history", source: "Spring and Autumn of the Nine Provinces, quoted in the commentary to the Annals of Emperor Wu in the Records of the Three Kingdoms", eraId: "sanguo", person: "曹操",
      body: "Fighting Liu Bei at Hanzhong, Cao Cao found it hard either to advance or to hold, and one day gave the order simply as “chicken ribs.” None of his officers understood — except Yang Xiu, who promptly began packing. Asked why, he answered: “Chicken ribs are a pity to throw away, but there’s not enough meat on them to eat. The king is comparing them to Hanzhong. He means to withdraw.” And soon Cao Cao did pull his army back.",
      note: "Something of little use but a pity to discard is still called “chicken ribs.” In the novel Romance of the Three Kingdoms, this foresight leads to Yang Xiu’s execution." },
    { id: "plum", title: "Getting through the march with “There’s a plum grove ahead!”", who: "Cao Cao", when: "Late Eastern Han", kind: "anecdote", source: "A New Account of Tales of the World, “Trickery”", eraId: "sanguo", person: "曹操",
      body: "On the march, the army lost its way to water and the soldiers were suffering from thirst. So Cao Cao sent word: “There is a great plum grove ahead, laden with fruit, sweet and sour enough to quench your thirst.” Hearing it, the soldiers’ mouths watered, and so they made it to a place with water. Nowhere does it say that the plum grove really existed.",
      note: "The idiom “gazing at plums to quench thirst.” The story is collected in the chapter on deceiving people." },
    { id: "wangcan", title: "All the mourners bray like donkeys at a funeral", who: "Cao Pi and Wang Can", when: "217", kind: "anecdote", source: "A New Account of Tales of the World, “Grieving for the Departed”", eraId: "sanguo", person: "曹丕",
      body: "The celebrated writer Wang Can loved the braying of donkeys. When he died and his funeral was held, Cao Pi (later Emperor Wen of Wei), who came to pay his respects, turned to the mourners and proposed: “Wang Can loved the sound of donkeys. Let each of us bray once to send him off.” And so, one by one, the mourners brayed like donkeys.",
      note: "Remembered as a mourning true to the spirit of the age, honoring the dead man’s tastes over formal ritual." },
    { id: "zhugejin", title: "His father’s face is likened to a donkey’s — a son’s two-word comeback", who: "Sun Quan, Zhuge Jin and Zhuge Ke", when: "Three Kingdoms (early 3rd century)", kind: "history", source: "Records of the Three Kingdoms, Book of Wu, Biography of Zhuge Ke", eraId: "sanguo", person: "孫権",
      body: "Zhuge Jin, a senior minister of Wu and Zhuge Liang’s elder brother, had a long face rather like a donkey’s. One day at a banquet Sun Quan had a donkey led in with a label stuck on its face reading “Zhuge Ziyu” (Ziyu was Jin’s courtesy name), and everyone laughed. Then Jin’s son Zhuge Ke, still a boy, knelt and asked, “May I borrow a brush to add two characters?” Permitted, he added “’s donkey,” so that the label read “Zhuge Ziyu’s donkey.” The whole company roared, and Sun Quan, impressed, gave the donkey to Zhuge Ke." },
    { id: "liushan", title: "“It’s so pleasant here, I don’t think of Shu”", who: "Liu Shan and Sima Zhao", when: "c. 264", kind: "history", source: "Spring and Autumn of Han and Jin, quoted in the commentary to the Biography of the Later Ruler in the Records of the Three Kingdoms", eraId: "sanguo", person: "劉禅",
      body: "After Shu fell, Liu Shan was moved to Luoyang. When the music of Shu was played at a banquet, his former ministers all wept — but Liu Shan sat smiling happily. Sima Zhao asked, “Don’t you miss Shu?” “It’s so pleasant here, I don’t think of Shu.” Unable to bear it, his old minister Xi Zheng coached him: “Next time you’re asked, weep and say, ‘My ancestors’ graves are in Shu; not a day passes that I don’t think of it,’ and close your eyes.” When Sima Zhao asked again, Liu Shan answered just so, and Sima Zhao said, “That sounds exactly like Xi Zheng.” Liu Shan opened his eyes in surprise — “Just as you say!” — and everyone laughed.",
      note: "The source of the idiom “so happy he doesn’t think of Shu,” for being too contented to think of home." },
    { id: "liuling", title: "“Why have you gentlemen come into my trousers?”", who: "Liu Ling (one of the Seven Sages of the Bamboo Grove)", when: "Wei to Western Jin (3rd century)", kind: "anecdote", source: "A New Account of Tales of the World, “Free and Unrestrained”", eraId: "westernjin",
      body: "Liu Ling, one of the Seven Sages of the Bamboo Grove and a famous drinker, would take off his clothes at home when drunk and sit there naked. When visitors reproached him, he retorted: “I take heaven and earth as my house, and this room as my trousers. Why, gentlemen, have you come into my trousers?”",
      note: "Known as a story that captures the spirit of intellectuals of this age, who hated to be bound by etiquette." },
    { id: "panyue", title: "Imitating a handsome man about town — and getting spat on", who: "Pan Yue and Zuo Si", when: "Western Jin (late 3rd century)", kind: "anecdote", source: "A New Account of Tales of the World, “Appearance and Manner”; Book of Jin, Biography of Pan Yue", eraId: "westernjin",
      body: "Pan Yue was so handsome that his name became a byword for male beauty in China. When as a young man he went out in Luoyang, women joined hands to surround him and threw fruit into his carriage until it was full by the time he got home. Zuo Si, a fine writer but no beauty, tried strolling about the town in the same way — and the women spat at him all together, so that he came home exhausted.",
      note: "Zuo Si, however, later wrote the Rhapsody on the Three Capitals, which was such a sensation that so many people copied it that “the price of paper in Luoyang rose.”" },
    { id: "huidi", title: "“If they have no grain, why don’t they eat meat porridge?”", who: "Emperor Hui of Western Jin (Sima Zhong)", when: "Western Jin (late 3rd century)", kind: "history", source: "Book of Jin, Annals of Emperor Hui", eraId: "westernjin",
      body: "Told that the realm was in chaos and that many people were starving to death in a famine, Emperor Hui asked in puzzlement, “Why don’t they eat meat porridge?” And hearing frogs croak in a palace garden, he asked his attendants, “Are they croaking for the government, or for themselves?”",
      note: "Often cited as the Chinese “let them eat cake.” It was under this emperor that the War of the Eight Princes broke out and the Western Jin rapidly declined." },
    { id: "shichong", title: "Smashing a coral tree from the emperor: a contest of excess between tycoons", who: "Shi Chong and Wang Kai", when: "Western Jin (late 3rd century)", kind: "anecdote", source: "A New Account of Tales of the World, “Extravagance and Ostentation”", eraId: "westernjin",
      body: "Shi Chong, the great tycoon of the Western Jin, and Wang Kai, a relative of the emperor by marriage, competed in luxury at every turn: if Wang Kai had his pots scoured with malt sugar, Shi Chong burned candles for firewood. One day Wang Kai showed off to Shi Chong a magnificent coral tree about two feet tall, a gift from Emperor Wu. Shi Chong looked at it and smashed it with the iron ruyi scepter in his hand. To the furious Wang Kai he said, “Nothing to regret — I’ll give you another,” and had his servants bring out six or seven coral trees three and four feet tall. Wang Kai was crushed." },
    { id: "wangxizhi", title: "The young man lying belly-up when the matchmaker came", who: "Wang Xizhi", when: "Eastern Jin (early 4th century)", kind: "anecdote", source: "A New Account of Tales of the World, “Cultivated Tolerance”", eraId: "sixteenkingdoms",
      body: "The senior minister Xi Jian sent an envoy to choose a son-in-law from among the young men of the great Wang clan. Hearing of it, the Wang youths all dressed up and waited, on their best behavior — except one, who lay on a couch by the east wall with his belly bared, as if he had heard nothing. When this was reported, Xi Jian decided at once: “That is the one.” It turned out to be Wang Xizhi, later revered as the “Sage of Calligraphy.”",
      note: "A son-in-law is still called dongchuang, “the east couch,” after this story." },
  ] },
  { id: "tang-song", title: "Tang and Song", lead: "An age whose stars were poets and men of letters — and the slightly off-kilter daily lives of its finest minds are preserved in essays.", episodes: [
    { id: "loushide", title: "“If someone spits in your face, don’t wipe it — let it dry”", who: "Lou Shide", when: "Tang, reign of Wu Zetian (late 7th century)", kind: "history", source: "New Book of Tang, Biography of Lou Shide", eraId: "tang",
      body: "The chief minister Lou Shide was famous for his patience. When his younger brother was posted as a regional governor, he asked, “If two brothers both rise high, people will envy us. How will you protect yourself?” The brother answered, “From now on, if anyone spits in my face, I’ll just wipe it off and say nothing.” Lou Shide shook his head. “No good. Wiping it off defies the other man’s anger. Don’t wipe it — wait for it to dry by itself.”",
      note: "The idiom “let the spittle dry on your face” — a survival strategy for the fierce politics of Wu Zetian’s reign." },
    { id: "jiadao", title: "So absorbed in one word that he rode into the governor’s procession", who: "Jia Dao and Han Yu", when: "Tang (early 9th century)", kind: "legend", source: "Records of Tang Poetry and others", eraId: "tang",
      body: "Riding his donkey, the poet Jia Dao came up with the line, “The monk pushes the gate beneath the moon.” But perhaps “knocks” would be better than “pushes”? Absorbed in miming pushing and knocking on his donkey, he rode straight into the procession of Han Yu, governor of the capital. Hauled before him, Jia Dao explained, and Han Yu — himself one of the greatest prose writers of the day — thought for a while and said, “Knocks is better.” The two then rode on side by side discussing poetry.",
      note: "The origin of tuiqiao (“push-knock”), the word for polishing a piece of writing. The story appears in later anecdote collections and may not be true." },
    { id: "wanganshi", title: "Feared to look ill — but it was only dirt", who: "Wang Anshi", when: "Northern Song (11th century)", kind: "anecdote", source: "Shen Kuo, Dream Pool Essays", eraId: "northernsong", person: "王安石",
      body: "Wang Anshi, the chief minister famed for his “New Policies,” cared nothing for his appearance. Once his disciples, worried by how dark his face had become, had a doctor examine him. The diagnosis: “This is dirt, not illness.” He was urged to wash with bean soap, but Wang Anshi would have none of it: “Heaven made me dark. What can bean soap do about it?”",
      note: "Shen Kuo, who recorded this, was a contemporary who worked on Wang Anshi’s reforms; his Dream Pool Essays is also famous for describing movable type and the compass." },
    { id: "mifu", title: "Bowing in formal dress to a strange rock and calling it “Elder Brother”", who: "Mi Fu", when: "Northern Song (late 11th to early 12th century)", kind: "history", source: "History of Song, Biography of Mi Fu", eraId: "northernsong",
      body: "Mi Fu, one of the great calligraphers and painters of the Northern Song, was a passionate collector of strange stones. Finding a huge rock of grotesque shape at the office where he took up a post, he was overjoyed — “This deserves my obeisance” — changed into formal dress, bowed deeply to it and called it “Elder Brother.” He was also known for his extreme fastidiousness, and his eccentricities earned him the nickname “Mad Mi.”" },
    { id: "sushi", title: "Immortalizing a friend’s fear of his wife in a poem for a thousand years", who: "Su Shi and Chen Zao", when: "Northern Song (late 11th century)", kind: "anecdote", source: "A poem by Su Shi; Hong Mai, Rongzhai Essays", eraId: "northernsong",
      body: "Su Shi’s friend Chen Zao loved to invite guests and discuss Buddhism all night. But his wife, Lady Liu, was said to be fiercely jealous and hot-tempered. Su Shi teased him in a poem: “Suddenly he hears the lion of Hedong roar; the staff falls from his hand, his mind goes blank.” Hedong was the ancestral seat of the Liu clan, and “the lion’s roar” is a Buddhist term for the majesty of the Buddha’s preaching — a pun aimed at the Buddhism-loving Chen Zao.",
      note: "Ever since, a wife shouting at a henpecked husband has been called “the lion of Hedong roars” in Chinese." },
  ] },
  { id: "ming-qing", title: "Ming and Qing", lead: "An age of abundant records — the overly colorful hobbies of its emperors can be confirmed from the official histories and surviving objects.", episodes: [
    { id: "zhengde", title: "The emperor who appointed himself generalissimo and paid himself a salary", who: "The Zhengde Emperor of Ming (Wuzong)", when: "1517–1518", kind: "history", source: "History of Ming, Basic Annals of Wuzong", eraId: "ming",
      body: "The pleasure-loving Zhengde Emperor longed to lead armies in battle, but his ministers fiercely opposed an emperor going to the front himself. His solution: invent a man named Zhu Shou and appoint him “Generalissimo of Awesome Might, Supreme Commander of Military Affairs.” Zhu Shou, of course, was the emperor himself. The next year, in honor of Zhu Shou’s achievements, he even gave him the title Duke Who Guards the State and a salary of 5,000 piculs a year — the emperor, as his own vassal, rewarding himself.",
      note: "His ministers desperately protested that “an emperor lowering himself to a subject’s rank is unheard of,” but he would not listen." },
    { id: "tianqi", title: "Carpentry over government: “Enough, I understand — handle it”", who: "The Tianqi Emperor of Ming (Xizong) and Wei Zhongxian", when: "1620s", kind: "history", source: "History of Ming, Biography of Wei Zhongxian", eraId: "ming",
      body: "The Tianqi Emperor was clever with his hands, and nothing pleased him more than working wood and lacquer with saw and axe. The eunuch Wei Zhongxian deliberately chose the moments when the emperor was absorbed in his work to come and report on government business. Annoyed, the emperor would answer, “I already understand it all. You people handle it properly.” And so Wei Zhongxian came to wield power as he pleased.",
      note: "It sounds like a joke, but the result was grave: Wei Zhongxian’s domination is regarded as one of the decisive causes of the Ming decline." },
    { id: "zhupi", title: "The emperors’ blunt replies, written on their officials’ reports", who: "The Kangxi and Yongzheng Emperors of Qing", when: "Late 17th to early 18th century", kind: "history", source: "Surviving vermilion-rescript memorials (reports annotated by the emperor in red ink)", eraId: "qing",
      body: "Qing emperors wrote their replies directly on the reports from provincial officials in vermilion ink. Huge numbers of these survive, and in them the emperors’ own voices can be read. Kangxi’s most frequent reply was a curt zhidao le — “Noted.” The workaholic Yongzheng Emperor, by contrast, who wrote long replies on dozens of reports a day, is famous for writing to an official: “This is the kind of man I am, this is my nature, this is the kind of emperor I am.”",
      note: "Zhidao le is still perfectly ordinary modern Chinese, and merchandise bearing the words became a bestseller at the National Palace Museum in Taiwan." },
    { id: "qianlong", title: "Over 40,000 poems — and comments scribbled all over masterpieces", who: "The Qianlong Emperor of Qing", when: "18th century", kind: "history", source: "The emperor’s collected poems; surviving paintings and calligraphy", eraId: "qing",
      body: "The Qianlong Emperor left more than 40,000 poems in his lifetime — close to the roughly 49,000 poems by more than two thousand poets in the Complete Tang Poems, the whole output of a dynasty, almost single-handed. Hardly any are loved as great poems, however. He was also a keen collector of painting and calligraphy, stamping his favorite masterpieces with seal after seal and filling their margins with comments and poems. Of the two versions he acquired of the great Yuan painting Dwelling in the Fuchun Mountains, he took the copy for the original and inscribed it dozens of times — sparing the real one almost entirely.",
      note: "An ironic ending, in which a mistaken attribution saved a masterpiece. Qianlong’s seals and inscriptions are still clues to the history of the works today." },
  ] },
];

const TOTAL = GROUPS.reduce((n, g) => n + g.episodes.length, 0);

export default function EnglishFunnyEpisodesPage() {
  return (
    <FeaturePage
      title="Funny Episodes from Chinese History"
      jaPath="/funny-episodes"
      intro={`Chinese histories don’t record only the rise and fall of dynasties and wars. A ruler who died falling into a latrine, a dynasty’s founding hero who urinated in a scholar’s cap, an emperor who appointed himself generalissimo — stories that make you laugh out loud are written down in all seriousness too. Here are ${TOTAL} such episodes, in order from the Western Zhou to the Qing. (The Japanese version of this page also illustrates each story with a four-panel comic.)`}
      related={[
        { href: "/en/idioms", label: "Chinese idioms from history" },
        { href: "/en/people", label: "People of Chinese history" },
        { href: "/en/emperors", label: "Emperors of China" },
      ]}
    >
      <NoteCard title="Before you read: history or anecdote?">
        The funnier the story, the more it tends to grow in the retelling. Each episode here gives its source and one of three labels:
        <ul style={{ marginTop: 6 }}>
          {Object.values(KIND).map((k) => (
            <li key={k.label}><span style={{ color: k.color, fontWeight: 700 }}>{k.label}</span> — {k.note}</li>
          ))}
        </ul>
        Even stories labeled “History” are not necessarily true in every detail.
      </NoteCard>

      <nav aria-label="By period" className="flex flex-wrap gap-x-4 gap-y-2" style={{ margin: "20px 0 28px", fontSize: 14 }}>
        {GROUPS.map((g) => (
          <a key={g.id} href={`#${g.id}`} style={{ color: COLORS.vermilion }}>{g.title} ({g.episodes.length})</a>
        ))}
      </nav>

      {GROUPS.map((g) => (
        <Section key={g.id} id={g.id} title={g.title}>
          <p style={{ fontSize: 13.5, color: COLORS.inkSoft, marginBottom: 14 }}>{g.lead}</p>
          <div className="flex flex-col gap-4">
            {g.episodes.map((ep) => {
              const k = KIND[ep.kind];
              const person = ep.person ? personHref(ep.person) : null;
              const era = findEraEn(ep.eraId);
              return (
                <div key={ep.id} id={ep.id} className="p-4" style={{ ...cardStyle, scrollMarginTop: 16 }}>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span style={{ fontSize: 11, color: "#fff", backgroundColor: k.color, padding: "1px 6px", fontWeight: 700 }}>{k.label}</span>
                    <span style={{ fontSize: 12, color: COLORS.gold }}>{ep.when}</span>
                  </div>
                  <div style={{ ...serif, fontSize: 17, fontWeight: 700, color: COLORS.ink, marginTop: 4 }}>{ep.title}</div>
                  <div style={{ fontSize: 12.5, color: COLORS.vermilion, marginTop: 2 }}>{ep.who}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 8 }}>{ep.body}</p>
                  {ep.note && <p style={{ fontSize: 13, lineHeight: 1.75, color: COLORS.ink, marginTop: 8, paddingLeft: 10, borderLeft: `2px solid ${COLORS.gold}` }}>{ep.note}</p>}
                  <div style={{ fontSize: 11.5, color: COLORS.mist, marginTop: 8 }}>Source: {ep.source}</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1" style={{ fontSize: 12.5, marginTop: 6 }}>
                    {person && <Link href={person.href} style={{ color: COLORS.vermilion }}>Read about {person.name} →</Link>}
                    {era && <Link href={`/en/eras/${ep.eraId}`} style={{ color: COLORS.vermilion }}>{era.name} on the timeline →</Link>}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      ))}

      <p style={{ fontSize: 13.5, lineHeight: 1.8, color: COLORS.inkSoft }}>
        Many of these stories — “the benevolence of Duke Xiang,” “chicken ribs,” “push or knock” — live on as idioms. See the <Link href="/en/idioms" style={{ color: COLORS.vermilion }}>idioms page</Link> for more, and the people and eras of the timeline for the full picture.
      </p>
    </FeaturePage>
  );
}
