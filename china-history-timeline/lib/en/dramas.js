// English text for the historical-drama pages (/en/dramas, /en/dramas/[slug]).
// Structure (years, eras, score, related events, character types) comes from lib/dramas.js;
// characters, divergences and timeline rows are index-aligned with it.
import { getSortedDramas, getDramaBySlug } from "@/lib/dramas";

const TEXT = {
  "yanxi-palace": {
    title: "Story of Yanxi Palace",
    alt: "Original title: Yanxi gonglüe",
    basis: [
      ["Real main characters", "◎", "the Qianlong Emperor, Empress Fucha, the Step Empress and the heroine’s model are all real"],
      ["Main events", "△", "the palace intrigues and the heroine’s revenge are mostly invented"],
      ["Chronology", "○", "big events such as the empress’s death and the Step Empress cutting her hair broadly follow history"],
      ["Characterization", "△", "the sources say almost nothing about personality, so most characterization is invented"],
    ],
    summary: "The heroine Wei Yingluo is modeled on Empress Xiaoyichun (Lady Weigiya), a consort of the Qianlong Emperor and mother of the Jiaqing Emperor. The main consorts, such as Empress Fucha and the Step Empress, are real, but most of the revenge-driven story is invented. The real Lady Weigiya rose no higher than Imperial Noble Consort in her lifetime; the title of empress was conferred posthumously, after her son was named crown prince.",
    background: "The reigns of the Kangxi, Yongzheng and Qianlong Emperors, known as the “Prosperous Age of Kang–Yong–Qian,” were the height of the Qing. Enthroned in 1735, the Qianlong Emperor reigned for about sixty years and brought Qing territory to its greatest extent with the conquest of Xinjiang. The drama is set in the first half of his reign, in the inner palace of the Forbidden City in Beijing, where consorts ranked from empress down through imperial noble consort, noble consort, consort, concubine and noble lady competed for the emperor’s favor and their children’s standing.",
    characters: [
      { role: "Wei Yingluo", real: "Empress Xiaoyichun (Lady Weigiya)", note: "1727–1775. Said to have come from a booi family of the Imperial Household Department. She rose from noble lady to Concubine Ling, Consort Ling and Noble Consort Ling, and after the Step Empress’s fall became Imperial Noble Consort and head of the inner palace. She bore many children, including the future Jiaqing Emperor.", diff: "The story of a woman who enters the palace to uncover the truth about her sister’s death and defeats her enemies by cunning is invented. Almost nothing in the sources reveals her personality." },
      { role: "Empress Fucha (Fucha Rongyin)", real: "Empress Xiaoxianchun (Lady Fuca)", note: "The Qianlong Emperor’s first empress, who died in 1748. Said to have loved simplicity and to have been close to the emperor. She lost both her sons in childhood, and died of illness on the way back from an imperial tour of Shandong.", diff: "In the drama she is the heroine’s protector, and her death is staged dramatically. In history she died of illness on the way back from the tour." },
      { role: "Consort Xian (Hoifa-Nara Shushen, later the Step Empress)", real: "The Step Empress (Lady Hoifa-Nara / Ula-Nara)", note: "After serving as Consort Xian and Noble Consort Xian, she became Imperial Noble Consort after Empress Fucha’s death and empress in 1750. On the southern tour of 1765 she cut her own hair — in Manchu custom a sign of mourning, and a grave taboo — and was sent back to Beijing and in effect deposed. She died the next year, 1766, without the funeral rites or posthumous title of an empress.", diff: "The drama makes her the center of the palace intrigues. Why she cut her hair is not recorded; the motive the drama gives is its own interpretation." },
      { role: "The Qianlong Emperor (Hongli)", real: "The Qianlong Emperor (Hongli)", note: "Sixth emperor of the Qing (1711–1799). Unwilling to reign longer than his grandfather Kangxi, he abdicated in favor of the Jiaqing Emperor in 1796 but held real power as retired emperor until his death. He boasted of his “Ten Great Campaigns” and is also known for his poetry and art collecting.", diff: "The story centers on his romances and maneuverings with the consorts; politics and campaigns hardly appear." },
      { role: "Fucha Fuheng", real: "Fuheng", note: "Empress Fucha’s younger brother. Trusted by the Qianlong Emperor as a Grand Councillor, he led armies in the Jinchuan campaigns and the Burma campaign. He died in 1770.", diff: "His romance with the heroine is invented; no record links the two." },
      { role: "Erqing", real: null, note: "There is no corresponding real person. Fuheng’s real principal wife is said to have been a Lady Nara.", diff: "A character original to the drama." },
    ],
    divergences: [
      { title: "The heroine’s “revenge” is invented", body: "The story begins with the heroine entering the palace to find out the truth about her sister’s death, but nothing of the kind is recorded of her model, Lady Weigiya. The sources tell us little more than that she entered the palace from an Imperial Household Department family and rose through the ranks." },
      { title: "Empress Fucha’s death", body: "Empress Fucha is said to have died of illness in 1748 on the way back from the Qianlong Emperor’s tour of Shandong, which she had accompanied. She had lost a young son to smallpox the year before and is thought to have been weak in body and spirit. The way the drama stages her death is fiction." },
      { title: "She never became empress in her lifetime", body: "Titles such as “empress” in the drama’s marketing suggest she rose to the very top, but Lady Weigiya’s highest rank in life was Imperial Noble Consort. The title of empress was conferred in 1795, twenty years after her death, when her son (the future Jiaqing Emperor) was named crown prince." },
      { title: "The romance with Fuheng", body: "Fuheng was a real senior minister, but there is no evidence of a romance with the heroine. Erqing, presented as Fuheng’s wife, is also an original character." },
      { title: "Why the Step Empress cut her hair", body: "That the Step Empress cut her hair on the 1765 southern tour and fell from power is historical, but why she did it is not recorded. The Qianlong Emperor never made the reasons public, and the drama’s version is only one interpretation." },
    ],
    aftermath: "The Step Empress died in 1766 without an empress’s funeral. No new empress was named, and Lady Weigiya, as Imperial Noble Consort, headed the inner palace until her death in 1775 at the age of 49. In 1795 the Qianlong Emperor named her son Yongyan crown prince and posthumously made her Empress Xiaoyichun; in 1796 Yongyan took the throne as the Jiaqing Emperor. The Qianlong Emperor died in 1799 and was buried in the Yu Mausoleum (Eastern Qing Tombs) with Empresses Xiaoxianchun and Xiaoyichun.",
    timeline: [
      "The Qianlong Emperor takes the throne (the era name changes the next year)",
      "Empress Fucha (Xiaoxianchun) dies on the way back from the eastern tour",
      "Noble Consort Xian (Lady Nara) is made empress",
      "Lady Weigiya gives birth to Prince Yongyan (the future Jiaqing Emperor)",
      "On the southern tour the Step Empress cuts her hair and is sent back to Beijing; Lady Weigiya becomes Imperial Noble Consort",
      "Imperial Noble Consort Weigiya dies",
      "Yongyan is named crown prince, and Lady Weigiya is posthumously made Empress Xiaoyichun",
      "The Qianlong Emperor abdicates and the Jiaqing Emperor takes the throne",
    ],
  },
  "ruyis-royal-love-in-the-palace": {
    title: "Ruyi’s Royal Love in the Palace",
    alt: "Original title: Ruyi zhuan",
    basis: [
      ["Real main characters", "◎", "the heroine’s model, the Step Empress, the Qianlong Emperor and the main consorts are all real"],
      ["Main events", "○", "the broad outline — Empress Fucha’s death, the Step Empress’s elevation and her cutting her hair — follows history"],
      ["Chronology", "○", "the order of major events broadly follows history"],
      ["Characterization", "△", "the sources say almost nothing about personality; the heroine’s love story with the emperor is invented"],
    ],
    summary: "The heroine Ruyi is modeled on the Step Empress (Lady Hoifa-Nara), the Qianlong Emperor’s second empress. The broad outline — her elevation to empress and the hair-cutting incident of 1765 — follows history, but her childhood romance with the emperor and most of the palace intrigues are inventions of the original novel. Why she cut her hair is not recorded; the motive the drama gives is one interpretation.",
    background: "The reigns of the Kangxi, Yongzheng and Qianlong Emperors, known as the “Prosperous Age of Kang–Yong–Qian,” were the height of the Qing. The drama begins late in the Yongzheng Emperor’s reign with the choosing of consorts for Prince Hongli (the future Qianlong Emperor), and is set in the inner palace during the first half of Qianlong’s reign. Part of the fun is that, compared with Story of Yanxi Palace — which portrays the same period and the same consorts — the heroes and villains are almost reversed.",
    characters: [
      { role: "Ruyi (Qingying)", real: "The Step Empress (Lady Hoifa-Nara / Ula-Nara)", note: "1718–1766. She became a secondary consort of Prince Hongli, then after his accession Consort Xian and Noble Consort Xian; after Empress Fucha’s death she became Imperial Noble Consort and in 1750 empress. On the southern tour of 1765 she cut her own hair, was sent back to Beijing, and died the next year without an empress’s funeral.", diff: "The names Ruyi and Qingying, and her childhood romance with Hongli, are inventions of the original novel. Her real given name is not recorded." },
      { role: "The Qianlong Emperor (Hongli)", real: "The Qianlong Emperor (Hongli)", note: "Sixth emperor of the Qing (1711–1799). Enthroned in 1735, he reigned for about sixty years and kept real power as retired emperor afterwards.", diff: "His love for the heroine, and its cooling, are the heart of the story; politics and campaigns appear little." },
      { role: "Fucha Langhua (Empress Fucha)", real: "Empress Xiaoxianchun (Lady Fuca)", note: "The Qianlong Emperor’s first empress, who died in 1748. She lost two sons in childhood and is said to have died of illness on the way back from the eastern tour.", diff: "She is often shown in conflict with the heroine, but the sources tell us almost nothing about the two women’s relationship." },
      { role: "Wei Yanwan", real: "Empress Xiaoyichun (Lady Weigiya)", note: "After serving as Consort Ling and Noble Consort Ling, she became Imperial Noble Consort after the Step Empress’s fall. She died in 1775; her son became the Jiaqing Emperor, and in 1795 she was posthumously made empress.", diff: "She is portrayed as an ambitious villain, but nothing in the sources supports this. In Story of Yanxi Palace the same woman is the heroine." },
      { role: "Hailan", real: "Consort Yu (Lady Keliyete)", note: "A consort of the Qianlong Emperor and mother of Prince Yongqi.", diff: "She is the heroine’s closest friend, but no source records their relationship." },
      { role: "Ling Yunche", real: null, note: "There is no corresponding real person.", diff: "The guard who secretly supports the heroine is original to the drama (and the novel)." },
    ],
    divergences: [
      { title: "The heroine and the emperor were not childhood sweethearts", body: "The drama opens with Hongli choosing his childhood friend as his consort, but no source records how the two met or any romance between them. That the future Step Empress married Hongli while he was still a prince is regarded as historical." },
      { title: "Why she cut her hair is not recorded", body: "That the Step Empress cut her hair on the 1765 southern tour is historical, but the official records do not give the reason. In Manchu custom, hair was cut only in mourning, and cutting it while the emperor and empress dowager were alive was a grave taboo. The motive the drama gives is the novel’s interpretation." },
      { title: "Was Wei Yanwan (Consort Ling) a villain?", body: "In the drama she schemes to destroy the heroine, but no source says her model, Lady Weigiya, plotted against anyone. Almost nothing about her character is recorded at all, and Story of Yanxi Palace, set in the same period, portrays her in exactly the opposite way." },
      { title: "The heroine’s name", body: "Qing consorts were usually recorded only by clan name and rank, and the Step Empress’s given name is unknown. “Ruyi,” said in the story to be a name given her by the emperor, is an invention of the drama and novel." },
    ],
    aftermath: "Sent back to Beijing, the Step Empress was stripped of the patents and seals of her office and died in 1766. Her funeral was held with rites lower than those of an imperial noble consort, she was given no posthumous title, and she was buried not in the emperor’s mausoleum but in a consorts’ tomb. The Qianlong Emperor never named another empress, and Lady Weigiya, as Imperial Noble Consort, headed the inner palace. Her son Yongyan took the throne in 1796 as the Jiaqing Emperor.",
    timeline: [
      "The Yongzheng Emperor dies and the Qianlong Emperor takes the throne",
      "Empress Fucha (Xiaoxianchun) dies; Noble Consort Xian becomes Imperial Noble Consort",
      "Imperial Noble Consort Hoifa-Nara is made empress",
      "On the southern tour the empress cuts her hair and is sent back to Beijing",
      "The Step Empress dies",
    ],
  },
  "the-long-ballad": {
    title: "The Long Ballad",
    alt: "Original title: Chang ge xing",
    basis: [
      ["Real main characters", "△", "Li Shimin and his ministers are real, but the heroine Li Changge and the hero Ashile Sun are fictional"],
      ["Main events", "○", "the Xuanwu Gate Incident, the revolt of Li Yuan, Prince of Lujiang, and the conflict with the Eastern Göktürks are historical"],
      ["Chronology", "○", "the order of early Tang events broadly follows history"],
      ["Characterization", "△", "the relationships around the heroine are almost entirely invented"],
    ],
    summary: "The heroine Li Changge is fictional — the daughter of Crown Prince Li Jiancheng, killed in the Xuanwu Gate Incident. The events in the background, such as the Xuanwu Gate Incident, Li Yuan’s revolt at Youzhou and the struggle with the Göktürks, are historical. In history Li Jiancheng’s sons were all killed right after the incident, and there is no record of a daughter plotting revenge.",
    background: "In the Tang, founded by Li Yuan (Emperor Gaozu) in 618, the crown prince Li Jiancheng clashed with Li Shimin, the second son, who had done much to found the dynasty. In 626 Li Shimin killed his elder brother Li Jiancheng and younger brother Li Yuanji at the Xuanwu Gate in Chang’an and soon took the throne as Emperor Taizong. To the north, the nomadic Eastern Göktürk khaganate was at the height of its power and threatened the newly enthroned emperor. The drama portrays this turbulent time just after the Tang’s founding.",
    characters: [
      { role: "Li Changge", real: null, note: "There is no corresponding real person. The histories record that Li Jiancheng’s five sons were killed in the Xuanwu Gate Incident.", diff: "A crown prince’s daughter who survives and, disguised as a man, seeks revenge — the whole setup is invented (the original is a manhua by Xia Da)." },
      { role: "Li Shimin", real: "Emperor Taizong of Tang (Li Shimin)", note: "Second emperor of the Tang (r. 626–649). He took the throne after killing his brothers in the Xuanwu Gate Incident and, governing with an ear to the criticism of ministers such as Wei Zheng, built the stable era known as the “Reign of Zhenguan.”", diff: "He appears as the heroine’s uncle and enemy; there is no record of Taizong clashing with a niece." },
      { role: "Ashile Sun", real: null, note: "There is no corresponding real person. The royal clan of the Eastern Göktürks was the Ashina; the “Ashile tribe” is an invented name that recalls it.", diff: "His role as a prince of a steppe tribe is an invention of the drama (and manhua)." },
      { role: "Wei Shuyu", real: "Wei Shuyu", note: "Named in the histories as a son of Taizong’s famous minister Wei Zheng, though almost nothing of his life is known.", diff: "His role as the heroine’s childhood friend who loves her is invented." },
      { role: "Li Yuan, Prince of Lujiang", real: "Li Yuan (Prince of Lujiang)", note: "A member of the Tang imperial family who governed Youzhou. Close to Li Jiancheng, he raised troops at Youzhou after the Xuanwu Gate Incident but was betrayed and killed by his subordinate Wang Junkuo.", diff: "The revolt and Wang Junkuo’s betrayal follow history; the heroine’s involvement in it is invented." },
      { role: "Du Ruhui and Fang Xuanling", real: "Du Ruhui and Fang Xuanling", note: "Both were Li Shimin’s close advisers and took part in planning the Xuanwu Gate Incident; later they were celebrated together as the great chancellors of the Zhenguan era.", diff: "Their scenes pursuing the heroine are invented." },
    ],
    divergences: [
      { title: "Li Jiancheng’s daughter is fictional", body: "According to the histories, after the Xuanwu Gate Incident all the sons of Li Jiancheng and Li Yuanji were killed. Almost nothing is recorded of their daughters, and Li Changge, who escapes alone and swears revenge, is an invention of the original manhua." },
      { title: "Li Yuan’s revolt is historical", body: "That Li Yuan, Prince of Lujiang, who governed Youzhou, rose in revolt in 626 and was betrayed and killed by his confidant Wang Junkuo is historical. The drama builds its story by weaving a fictional heroine into this event." },
      { title: "The “Ashile tribe” and the Eastern Göktürks", body: "The drama’s “Ashile tribe” is a fictional people recalling the Ashina, royal clan of the Eastern Göktürks who fought the Tang. In history, in 626, just after Li Shimin took the throne, Illig Qaghan of the Eastern Göktürks advanced to near Chang’an, and Taizong went out in person to make peace (the Pact of the Wei River)." },
    ],
    aftermath: "Emperor Taizong stabilized the realm by relying on ministers such as Fang Xuanling, Du Ruhui and Wei Zheng. In 630 the great general Li Jing defeated the Eastern Göktürks and captured Illig Qaghan, and the northern nomads hailed Taizong as “Heavenly Khan.” His reign, known as the “Reign of Zhenguan,” was held up as a model of government for centuries.",
    timeline: ["Li Yuan, Prince of Lujiang, revolts at Youzhou and is killed by Wang Junkuo; the Pact of the Wei River with the Eastern Göktürks"],
  },
  "qin-dynasty-epic": {
    title: "Qin Dynasty Epic",
    alt: "Original title: Da Qin fu",
    basis: [
      ["Real main characters", "◎", "Ying Zheng, Lü Buwei, Li Si, Lady Zhao and almost all the main characters are real"],
      ["Main events", "◎", "Lao Ai’s revolt, Lü Buwei’s fall, Jing Ke’s assassination attempt and the fall of the six states follow the Records of the Grand Historian"],
      ["Chronology", "○", "broadly as in history"],
      ["Characterization", "○", "tends to portray the First Emperor sympathetically, as a ruler with a vision of unification"],
    ],
    summary: "The hero is Ying Zheng, king of Qin — the First Emperor himself. From his birth in Handan through Lü Buwei’s dominance, Lao Ai’s revolt and the annexation of the six states, it follows the events recorded in the Records of the Grand Historian, making it highly faithful to history. Dialogue, the characters’ inner lives and the finer details of their relationships, however, are heavily dramatized.",
    background: "In the Warring States period, after Zhou authority had collapsed, seven states — Qin, Chu, Qi, Yan, Han, Wei and Zhao — fought one another. Qin, strengthened by Shang Yang’s reforms, crushed Zhao at Changping in 260 BC, opening the road to unification. The next year, in Handan, the Zhao capital, Ying Zheng was born, the son of a Qin prince held there as a hostage.",
    characters: [
      { role: "Ying Zheng", real: "The First Emperor (Ying Zheng)", note: "259–210 BC. King of Qin at thirteen, he seized real power once he began to rule in person by removing Lao Ai and Lü Buwei. In the ten years from 230 BC he destroyed Han, Zhao, Wei, Chu, Yan and Qi, and in 221 BC unified China and took the title “emperor.”", diff: "He is portrayed largely as an ideal ruler who cares for his people; the harsh side of his rule after unification, such as the burning of books and burying of scholars, hardly appears." },
      { role: "Lü Buwei", real: "Lü Buwei", note: "A great merchant who invested in Yiren (the future King Zhuangxiang), a hostage in Zhao, helped him to the throne and wielded great power as chancellor of Qin. He had the Annals of Lü Buwei compiled. Implicated in the Lao Ai affair, he fell from power and took his own life in 235 BC.", diff: "The treatment of the Records’ claim that he was Ying Zheng’s real father, and the way the two men’s conflict is portrayed, are dramatized." },
      { role: "Lady Zhao", real: "The Queen Dowager (Lady Zhao)", note: "Ying Zheng’s mother. The Records say she was originally Lü Buwei’s favorite concubine. She had two children with Lao Ai, and after his revolt was moved for a time to Yong.", diff: "The sources stress her misconduct, but the drama treats her feelings sympathetically." },
      { role: "Li Si", real: "Li Si", note: "A Legalist statesman from Chu who studied under Xunzi. After unification he became chancellor and pushed through the commandery-county system and the standardization of script, weights and measures.", diff: "Broadly historical; his relationship with his fellow student Han Fei and other details are dramatized." },
      { role: "Jing Ke", real: "Jing Ke", note: "The assassin who, at the request of Crown Prince Dan of Yan, tried and failed to kill King Ying Zheng of Qin in 227 BC — famous from the “Biographies of Assassins” in the Records.", diff: "The course of the assassination attempt follows the Records’ account." },
    ],
    divergences: [
      { title: "Was Lü Buwei Ying Zheng’s real father?", body: "The Records’ biography of Lü Buwei says Lady Zhao was already pregnant with Lü Buwei’s child when she married Yiren. But the Records’ own Basic Annals of Qin say nothing of this, and many scholars see it as a later invention or slander. Viewers should bear in mind that it is not established fact." },
      { title: "A sympathetic First Emperor", body: "The Records portray the First Emperor partly as a suspicious tyrant, but the drama shows him as a ruler striving for unification and peace. In recent years an assessment that weighs his achievement in creating a unified state more heavily has spread in China." },
      { title: "The finer relationships are dramatized", body: "While the main events follow the histories, the exchanges and inner lives of Ying Zheng, Lü Buwei, Li Si, Han Fei and others fill in scenes the sources never describe. The histories record the outcomes of events; the words spoken at the time are almost never preserved." },
    ],
    aftermath: "Having unified China in 221 BC, the First Emperor extended the commandery-county system across the country, standardized script, coinage and weights and measures, and rebuilt the Great Wall — while oppressing the people with the burning of books, the burying of scholars and vast building projects. When he died at Shaqiu on a tour of inspection in 210 BC, the eunuch Zhao Gao and Li Si rewrote his will to put his youngest son Huhai on the throne. Revolts broke out everywhere, and Qin fell in 206 BC, just fifteen years after unification.",
    timeline: [
      "Ying Zheng is born in Handan, the Zhao capital",
      "Ying Zheng becomes king of Qin at thirteen; Lü Buwei holds real power",
      "Lao Ai’s revolt is crushed, and Ying Zheng begins to rule in person",
      "Lü Buwei takes his own life",
      "Qin destroys Han, beginning the annexation of the six states",
      "Jing Ke’s attempt to assassinate the king of Qin",
    ],
  },
  "royal-feast": {
    title: "Royal Feast",
    alt: "Original title: Shang shi",
    basis: [
      ["Real main characters", "△", "Zhu Zhanji, the Yongle Emperor and Hu Shanxiang are real, but the heroine Yao Zijin is fictional"],
      ["Main events", "△", "the palace-cooking story is invented; parts of the background, such as Zhu Gaoxu’s revolt, are historical"],
      ["Chronology", "○", "the succession from the Yongle Emperor to the Xuande Emperor broadly follows history"],
      ["Characterization", "△", "the romance-centered characterization is invented"],
    ],
    summary: "The heroine Yao Zijin is fictional, a woman official of the Palace Food Service, which cooked for the court. The hero, Imperial Grandson Zhu Zhanji, later the Xuande Emperor, is real, as are his grandfather the Yongle Emperor and his first consort Hu Shanxiang. The Palace Food Service itself really existed in the Ming palace, but the story of cooking and love is almost entirely invented.",
    background: "Having seized the throne from his nephew in the Jingnan campaign, the Yongle Emperor sent Zheng He on his voyages to the southern seas, campaigned against the Mongols, and in 1421 moved the capital to Beijing. Envoys from many lands visited the newly built Forbidden City, and inside the palace the “Six Services” of women officials, such as the Palace Service and the Food Service, supported the lives of the empress and consorts. The drama covers the last years of the Yongle Emperor up to the accession of his grandson Zhu Zhanji.",
    characters: [
      { role: "Yao Zijin", real: null, note: "No corresponding real person can be identified.", diff: "The heroine who aims for the top of the Food Service with her cooking talent and falls in love with the imperial grandson is original to the drama." },
      { role: "Zhu Zhanji", real: "The Xuande Emperor (Zhu Zhanji)", note: "1399–1435. A favorite of the Yongle Emperor, he was named imperial grandson early. He took the throne in 1425, and his reign and his father’s are known together as the “Rule of Ren and Xuan.” He is also known for his love of painting and cricket fighting.", diff: "His love affair with a woman cook is invented. His known historical consorts are Hu Shanxiang and Lady Sun (later Empress Sun)." },
      { role: "Hu Shanxiang", real: "Empress Gongrang Zhang (Hu Shanxiang)", note: "Zhu Zhanji’s first principal consort, who became empress after his accession. She had no son, and in 1428 was made to give up her position as empress, with Lady Sun becoming the new empress.", diff: "In the drama she appears as a woman official; in history it was her elder sister, Hu Shanwei, who is said to have served as one." },
      { role: "The Yongle Emperor (Zhu Di)", real: "The Yongle Emperor (Zhu Di)", note: "Third emperor of the Ming (r. 1402–1424). He seized the throne in the Jingnan campaign, moved the capital to Beijing and sent Zheng He on his voyages. He died in 1424 on the way back from a campaign against the Mongols.", diff: "He is portrayed as a stern but loving grandfather watching over his grandson." },
      { role: "Zhu Gaoxu (Prince of Han)", real: "Zhu Gaoxu", note: "The Yongle Emperor’s second son. He contended for the throne with his elder brother (the Hongxi Emperor), and in 1426, the year after his nephew the Xuande Emperor took the throne, he rebelled and was crushed.", diff: "His role as Zhu Zhanji’s antagonist follows history." },
    ],
    divergences: [
      { title: "The heroine is a fictional palace official", body: "Yao Zijin is not a real person. That the Ming palace had a Food Service of women officials is historical, but the names and deeds of the individual women who worked there are almost never recorded." },
      { title: "Hu Shanxiang’s background", body: "In the drama Hu Shanxiang rises from official of the Food Service to consort of the imperial grandson, but according to the sources it was her elder sister, Hu Shanwei, who served in the palace as an official. Hu Shanxiang herself is thought to have been chosen as consort on the strength of her family." },
      { title: "Zhu Zhanji’s consorts", body: "The historical Zhu Zhanji favored Lady Sun; after taking the throne the Xuande Emperor set aside Empress Hu Shanxiang and made Lady Sun, who had borne a son (the future Yingzong), empress. The romance with a cook is the drama’s invention." },
    ],
    aftermath: "When the Yongle Emperor died in 1424 his son the Hongxi Emperor succeeded, but died within a year, and in 1425 Zhu Zhanji took the throne as the Xuande Emperor. The next year he personally put down the revolt of his uncle Zhu Gaoxu. In 1428 he set aside Empress Hu Shanxiang and made Lady Sun empress. The Xuande Emperor died in 1435 at the age of 38, and his nine-year-old son Zhu Qizhen (Yingzong) took the throne — the same Yingzong who was captured by the Mongols in 1449 in the Tumu Crisis.",
    timeline: [
      "The Yongle Emperor dies and the Hongxi Emperor takes the throne",
      "Zhu Zhanji takes the throne as the Xuande Emperor",
      "The revolt of Zhu Gaoxu, Prince of Han, is crushed",
      "Empress Hu Shanxiang is set aside and Lady Sun becomes empress",
      "The Xuande Emperor dies",
    ],
  },
};

// Merge with the structural data, checking alignment so a new Japanese entry can't silently lose its English text.
function merge(d) {
  const t = TEXT[d.slug];
  if (!t) throw new Error(`Missing English text for drama: ${d.slug}`);
  if (t.characters.length !== d.characters.length) throw new Error(`English drama characters differ: ${d.slug}`);
  if (t.divergences.length !== d.divergences.length) throw new Error(`English drama divergences differ: ${d.slug}`);
  if (t.timeline.length !== d.timeline.length) throw new Error(`English drama timeline differs: ${d.slug}`);
  return {
    slug: d.slug,
    title: t.title,
    alt: t.alt,
    year: d.year,
    episodes: d.episodes,
    eraIds: d.eraIds,
    period: d.period,
    score: d.historicity.score,
    basis: t.basis,
    summary: t.summary,
    background: t.background,
    characters: d.characters.map((c, i) => ({ ...t.characters[i], type: c.type, realPersonId: c.realPersonId || null })),
    divergences: t.divergences,
    aftermath: t.aftermath,
    relatedEventIds: d.relatedEventIds,
    timeline: d.timeline.map((row, i) => ({ year: row.year, text: t.timeline[i] })),
  };
}

export function getSortedDramasEn() {
  return getSortedDramas().map(merge);
}

export function getDramaEn(slug) {
  const d = getDramaBySlug(slug);
  return d ? merge(d) : null;
}

export function formatYearEn(y) {
  return y < 0 ? `${-y} BC` : `${y}`;
}

export function formatPeriodEn({ start, end }) {
  return start < 0 && end < 0 ? `${-start}–${-end} BC` : `${formatYearEn(start)}–${formatYearEn(end)}`;
}
