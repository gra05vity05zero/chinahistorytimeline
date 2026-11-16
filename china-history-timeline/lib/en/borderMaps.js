// English text for the animated border maps (see lib/borderMapI18n.js). Index-aligned with each component's FRAMES.
const UI = { prev: "Previous period", next: "Next period", play: "Play", pause: "Pause", replay: "Play from the start" };

export const SANGUO_MAP_EN = {
  ...UI,
  intro: "A simplified, province-by-province animation of the shifting balance of power from the Yellow Turban Rebellion in 184 to reunification in 280 (the borders are approximate, not exact historical boundaries).",
  frames: [
    { year: "c. 190", era: "Rival warlords", desc: "After the Yellow Turban Rebellion, Eastern Han authority collapsed and warlords across the country carved out territories of their own.",
      names: ["Gongsun Zan", "Yuan Shao", "Cao Cao", "Tao Qian", "Yuan Shu", "Liu Biao", "Sun Jian", "Liu Zhang", "Ma Teng & Han Sui"] },
    { year: "200", era: "The Battle of Guandu", desc: "Having pacified Yan, Yu, Xu and Huainan, Cao Cao clashes at Guandu with Yuan Shao of Hebei for mastery of North China.",
      names: ["Yuan Shao", "Cao Cao", "Liu Biao", "Sun Ce & Sun Quan", "Liu Zhang", "Ma Teng & Han Sui"] },
    { year: "208", era: "The Battle of Red Cliffs", desc: "After Guandu, Cao Cao conquers Hebei and all but unifies the north. Taking over Jing Province after Liu Biao’s death, his great army presses south to the Yangtze.",
      names: ["Cao Cao", "Sun Quan", "Liu Zhang"] },
    { year: "c. 215", era: "The realm divided in three", desc: "Defeated at Red Cliffs, Cao Cao withdraws north of the Yangtze, while Liu Bei expands from Jing Province into Yi Province and the three-way division takes shape.",
      names: ["Cao Cao (Wei)", "Liu Bei", "Sun Quan"] },
    { year: "222", era: "The Three Kingdoms", desc: "Having repulsed Shu Han at Yiling, Wu secures all of Jing Province, and Wei, Shu and Wu stand side by side.",
      names: ["Wei", "Shu Han", "Wu"] },
    { year: "263", era: "The fall of Shu Han", desc: "Wei destroys Shu Han, leaving just two powers: Wei and Wu.",
      names: ["Wei", "Wu"] },
    { year: "280", era: "Reunification (Western Jin)", desc: "The Western Jin, heir to Wei by abdication, destroys Wu; the Three Kingdoms era ends and China is unified once more.",
      names: ["Western Jin"] },
  ],
};

export const ZHANGUO_MAP_EN = {
  ...UI,
  intro: "A simplified, region-by-region animation of the shifting map from the rise of the Seven Warring States in 403 BC to Qin’s unification in 221 BC (the borders are approximate, not exact historical boundaries).",
  dict: {
    秦: "Qin", 楚: "Chu", 斉: "Qi", 燕: "Yan", 趙: "Zhao", 魏: "Wei", 韓: "Han", 越: "Yue", "巴・蜀": "Ba & Shu",
    周: "Zhou", 宋: "Song", 魯: "Lu", 中山: "Zhongshan", "代（趙の残存勢力）": "Dai (Zhao remnant)",
  },
  frames: [
    { year: "403 BC", era: "The Seven Warring States emerge", desc: "Han, Wei and Zhao, which had partitioned Jin, are recognized as lords by the Zhou king, and the Warring States period begins. The strongest state at first is Wei, reformed under Marquis Wen; it holds Hexi west of the Yellow River and Zhongshan in the north, and keeps Qin boxed in to the west." },
    { year: "328 BC", era: "Wei declines, Qin pushes east", desc: "Defeated by Qi at Guiling and Maling, Wei loses its supremacy and also gives up the revived Zhongshan. Qin, strengthened by Shang Yang’s reforms, takes Hexi and Shang Commandery from Wei and advances east to the line of the Yellow River." },
    { year: "296 BC", era: "Qin annexes Ba and Shu; Zhao and Yan expand north", desc: "Qin annexes Ba and Shu in 316 BC, then takes Hanzhong from Chu, gaining a rich hinterland. Zhao builds a cavalry army through King Wuling’s “barbarian dress and mounted archery,” expands north and destroys Zhongshan in 296 BC. Yan advances into Liaodong, and Chu defeats Yue to take the lower Yangtze (dates vary between accounts)." },
    { year: "278 BC", era: "Bai Qi takes Ying, the Chu capital", desc: "After defeating Han and Wei at Yique, Qin’s Bai Qi takes Hedong from Wei and then Nanyang, and in 278 BC captures Ying, the capital of Chu; Chu moves its capital east to Chen. In the east, Qi, having annexed Song, is invaded by a five-state coalition and briefly brought to the brink of destruction, and most of Song’s old lands pass to Wei." },
    { year: "260 BC", era: "The Battle of Changping", desc: "Qin and Zhao clash over Han’s Shangdang commandery. Bai Qi destroys a Zhao army of more than 400,000 and Shangdang falls to Qin. No state can now stand against Qin alone, and the path to unification is set." },
    { year: "230 BC", era: "The fall of Han — the wars of unification begin", desc: "Qin destroys Zhou in 256 BC and takes Taiyuan from Zhao, securing a foothold in the east. In 230 BC King Zheng of Qin (the future First Emperor) begins annexing the six states, starting with the weakest, Han. Meanwhile Chu has destroyed Lu and moved its capital to Shouchun." },
    { year: "225 BC", era: "The fall of Zhao and Wei", desc: "Qin takes Handan, the Zhao capital, in 228 BC; after Jing Ke’s failed assassination attempt it also captures Ji, the capital of Yan; and in 225 BC it floods Daliang and destroys Wei. The Zhao royal family hangs on in Dai to the north, and the king of Yan in Liaodong." },
    { year: "223 BC", era: "The fall of Chu", desc: "After Li Xin’s defeat, the veteran general Wang Jian invades Chu with an army of 600,000, defeats Xiang Yan and destroys Chu, Qin’s greatest rival. Only Yan and Dai on the northern frontier and Qi in the east remain." },
    { year: "221 BC", era: "Qin unifies China", desc: "Having subdued Yan in Liaodong and Dai in 222 BC, Qin forces Qi, the last state standing, to surrender without a fight the following year. King Zheng takes the title “First Emperor,” ending 550 years of division in the Spring and Autumn and Warring States periods." },
  ],
};

export const SUITANG_MAP_EN = {
  ...UI,
  intro: "A simplified, region-by-region animation of the shifting map from the Sui unification in 589 to the Song unification in 979 (the borders are approximate, not exact historical boundaries).",
  dict: {
    隋: "Sui", 唐: "Tang", 宋: "Song", 突厥: "Göktürks", "ウイグル（回紇）": "Uyghurs", 契丹: "Khitan", "遼（契丹）": "Liao (Khitan)", 高句麗: "Goguryeo",
    吐蕃: "Tibetan Empire", 南詔: "Nanzhao", 大理: "Dali", "李淵（唐）": "Li Yuan (Tang)", "隋（残存勢力）": "Sui (remnants)", 李密: "Li Mi", 竇建徳: "Dou Jiande",
    蕭銑: "Xiao Xian", 薛挙: "Xue Ju", 梁師都: "Liang Shidu", その他の群雄: "Other rebels", "燕（安禄山の反乱軍）": "Yan (An Lushan’s rebels)", "契丹・奚": "Khitan & Xi",
    "河朔三鎮（半独立）": "Hebei garrisons (semi-independent)", 河朔三鎮: "Hebei garrisons", "斉（黄巣の反乱軍）": "Qi (Huang Chao’s rebels)",
    "唐（僖宗は蜀へ）": "Tang (Xizong fled to Shu)", 後梁: "Later Liang", "晋（李克用）": "Jin (Li Keyong)", "燕（劉仁恭）": "Yan (Liu Rengong)", 前蜀: "Former Shu",
    呉: "Wu", 呉越: "Wuyue", 閩: "Min", 楚: "Chu", 荊南: "Jingnan", "南漢（劉氏）": "Southern Han (Liu clan)", 南漢: "Southern Han", "定難軍（党項）": "Dingnan (Tanguts)",
    "定難軍（のちの西夏）": "Dingnan (later Western Xia)", 後晋: "Later Jin", "呉（翌年南唐に）": "Wu (Southern Tang from 937)", 後蜀: "Later Shu", 南唐: "Southern Tang",
    北漢: "Northern Han", 清源軍: "Qingyuan", "湖南（武平軍）": "Hunan (Wuping)", "大長和など（雲南）": "Dachanghe etc. (Yunnan)",
  },
  frames: [
    { year: "589", era: "Sui reunites north and south", desc: "Yang Jian (Emperor Wen), who received the throne from the Northern Zhou, founded the Sui in 581 and in 589 destroyed Chen, the last Southern Dynasty, reuniting China for the first time in about 270 years. The Göktürks hold the northern steppe, and Goguryeo stands in Liaodong to the northeast." },
    { year: "617", era: "Rebellion at the end of the Sui", desc: "Unable to bear Emperor Yang’s repeated campaigns against Goguryeo and his vast building projects, people rose in revolt everywhere. Li Yuan, who raised troops in Taiyuan, entered Chang’an in 617 and founded the Tang the following year. With Sui loyalists still holding Luoyang and Jiangdu (Yangzhou), Li Mi, Dou Jiande, Xiao Xian and others fought for the realm (their territories are greatly simplified)." },
    { year: "628", era: "Tang unifies China", desc: "At Hulao Pass in 621, Li Shimin, Prince of Qin, forced the submission of both Dou Jiande and Wang Shichong, making Tang supremacy decisive. Enthroned as Emperor Taizong after the Xuanwu Gate Incident, he destroyed Liang Shidu on the northern frontier in 628, completing the unification." },
    { year: "668", era: "The Tang at its greatest extent", desc: "In 630 Li Jing destroyed the Eastern Göktürks, and Taizong was hailed by the northern peoples as “Heavenly Khan.” Under Gaozong, Baekje (660) and Goguryeo (668) were destroyed, and Tang power reached from the steppe to the northern Korean peninsula and the Western Regions." },
    { year: "756", era: "The An Lushan Rebellion", desc: "In 755 An Lushan, military governor of Fanyang (Youzhou), rose in revolt, took Luoyang and the next year proclaimed himself “Emperor of Great Yan.” When the Tang army at Tong Pass was defeated, Chang’an fell too and Xuanzong fled to Shu. Carried on by Shi Siming, the rebellion lasted until 763. On the northern steppe the Uyghurs rose to power and helped the Tang suppress it." },
    { year: "c. 800", era: "The rule of the military governors", desc: "The rebellion was over, but rebel generals who had surrendered were made military governors in Hebei, and the “Three Garrisons of Hebei” became semi-independent, beyond Tang control. In the west the Tibetan Empire took Longyou and Hexi, and even occupied Chang’an briefly in 763." },
    { year: "881", era: "Huang Chao takes Chang’an", desc: "The rebel army of the salt smuggler Huang Chao campaigned from Jiangnan as far as Guangzhou, then turned north, taking Luoyang at the end of 880 and then Chang’an, where he proclaimed himself emperor of “Great Qi.” Emperor Xizong fled to Shu. Military governors everywhere grew more independent, and Tang rule became a matter of name only." },
    { year: "907", era: "The fall of the Tang; the Five Dynasties and Ten Kingdoms", desc: "Zhu Quanzhong, who had defected from Huang Chao to the Tang, overthrew the Tang and founded the Later Liang. Li Keyong (Jin) in Taiyuan refused to recognize him, and in the south Wu, Wuyue, Former Shu, Chu, Min and others became independent. In the north, in the same year, Yelü Abaoji became ruler of the Khitan." },
    { year: "936", era: "The cession of the Sixteen Prefectures", desc: "In 923 Li Cunxu of Jin destroyed the Later Liang and founded the Later Tang, but infighting followed, and in 936 Shi Jingtang overthrew it with Khitan help and founded the Later Jin. In return, the “Sixteen Prefectures of Yan and Yun” inside the Great Wall, including Youzhou and Yunzhou, were ceded to the Khitan, and stayed out of Han Chinese hands for more than four hundred years." },
    { year: "960", era: "The founding of the Song", desc: "Emperor Shizong of the Later Zhou (Chai Rong) defeated the Northern Han at Gaoping and took Huainan, north of the Yangtze, from the Southern Tang, laying the foundations for unification. After Shizong’s sudden death, the commander of the palace army, Zhao Kuangyin, was enthroned in the Chenqiao Mutiny of 960, and the Song was founded." },
    { year: "979", era: "Song unifies China", desc: "Following a policy of “south first, then north,” the Song conquered Jingnan and Hunan (963), Later Shu (965), Southern Han (971) and Southern Tang (975), and in 978 Wuyue and Qingyuan surrendered their lands. In 979 Emperor Taizong took Taiyuan, capital of the Northern Han, unifying China for the first time in about seventy years — but he could not recover the Sixteen Prefectures held by the Liao." },
  ],
};

export const SONGYUAN_MAP_EN = {
  ...UI,
  intro: "A simplified, region-by-region animation of the shifting map from the Treaty of Chanyuan in 1004 to the Yuan unification in 1279 (the borders are approximate, not exact historical boundaries).",
  dict: {
    モンゴル帝国: "Mongol Empire", モンゴル高原の諸部族: "Mongolian tribes", 元: "Yuan", 南宋: "Southern Song", 南宋の残存勢力: "Southern Song remnants",
    "吐蕃・ウイグル諸部": "Tibetan & Uyghur tribes", 吐蕃諸部: "Tibetan tribes", 大理: "Dali", "宋（北宋）": "Song (Northern Song)",
    "定難軍（李継遷）": "Dingnan (Li Jiqian)", "西夏（党項）": "Western Xia (Tanguts)", "遼（契丹）": "Liao (Khitan)", "金（女真）": "Jin (Jurchens)",
  },
  frames: [
    { year: "1004", era: "The Treaty of Chanyuan", desc: "Having unified China proper in 979, the Song set out to recover the Sixteen Prefectures held by the Liao, but its northern campaigns at the Gaoliang River and in the Yongxi era both failed. In 1004 a great Liao army instead drove south to the Yellow River, and peace was made at Chanzhou: in return for annual gifts of silk and silver from the Song, about 120 years of peace followed." },
    { year: "1044", era: "Western Xia breaks away", desc: "In 1038 Li Yuanhao of the Tanguts proclaimed himself emperor and founded the Western Xia, defeating Song armies again and again, as at Haoshuichuan. Under the Qingli peace of 1044 the Western Xia became nominally a Song vassal, but the Song now owed annual gifts to the Western Xia as well as to the Liao." },
    { year: "1125", era: "The rise of the Jin and the fall of the Liao", desc: "The Jin, founded by Wanyan Aguda in 1115, made the “Alliance Conducted at Sea” with the Song to attack the Liao from both sides, and destroyed it in 1125. But seeing the weakness of the Song army and its broken promises, the Jin turned on the Song that same year. Part of the Liao royal family fled to Central Asia and founded the Western Liao." },
    { year: "1142", era: "The Shaoxing peace: north and south divided", desc: "In the Jingkang Incident of 1127 the Northern Song fell, and Gaozong, who fled south, founded the Southern Song. The northern campaigns of Yue Fei and others were called off by the peace party under Qin Hui, and the peace of 1142 fixed the border on a line from the Huai River to Dasan Pass. The Southern Song acknowledged itself a vassal of the Jin and sent annual tribute in silver and silk." },
    { year: "1227", era: "The Mongol Empire moves south", desc: "After Genghis Khan unified the Mongolian plateau in 1206, Mongol armies took the Jin central capital Zhongdu (Beijing) in 1215 and destroyed the Western Xia in 1227. The Jin, having moved its capital to Kaifeng, was pushed back to the lands south of the Yellow River and Guanzhong (territories simplified)." },
    { year: "1234", era: "The fall of the Jin", desc: "A joint Mongol and Southern Song army took Caizhou, and the Jin fell. The Southern Song rejoiced at the destruction of the old enemy that had destroyed the Northern Song — but it now shared a border directly with the Mongols." },
    { year: "1260", era: "Khubilai becomes Great Khan", desc: "The Mongols destroyed Dali in 1253 and brought Tibet under their rule, enveloping the Southern Song from the west and south. When the Great Khan Möngke, campaigning in person in Sichuan, died in 1259 while besieging Diaoyu Fortress, his brother Khubilai, then besieging Ezhou, withdrew and became Great Khan the following year." },
    { year: "1276", era: "Lin’an surrenders", desc: "Having won the five-year struggle for Xiangyang and Fancheng, the Yuan army under Bayan sailed down the Yangtze and in 1276 took the capital Lin’an (Hangzhou) without a fight. The young Emperor Gong was sent north, but Zhang Shijie, Lu Xiufu and others kept up the resistance along the coasts of Fujian and Guangdong with child princes as their figureheads." },
    { year: "1279", era: "The Yuan unifies China", desc: "At the Battle of Yamen off the Guangdong coast the last Southern Song fleet was destroyed, and Lu Xiufu leapt into the sea with the eight-year-old emperor on his back. The Yuan thus became the first dynasty of nomadic origin to rule all of China. It went on to send expeditions against Japan (in 1281) and Southeast Asia." },
  ],
};
