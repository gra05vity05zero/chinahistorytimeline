import { ERAS, stripRuby, getEraFigures, personSlug, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, MiscLinksSection } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "春秋・戦国時代 合戦マップ";
const fullTitle = `春秋・戦国時代 合戦マップ | ${SITE_NAME}`;
const description =
  "周の東遷から秦の中国統一まで、550年におよぶ春秋・戦国時代の流れを主要な合戦とともにたどる特集ページ。城濮・長平・馬陵など各合戦での武将の活躍と、戦場の位置がわかる地図つきで解説します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/chunqiu-zhanguo-battles" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/chunqiu-zhanguo-battles" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

// 出来事タイトルの部分一致から該当イベントページへのリンクを探す
function findEvent(eraId, titleIncludes) {
  const era = ERAS.find((e) => e.id === eraId);
  if (!era) return null;
  const event = era.events.find((ev) => stripRuby(ev.title).includes(titleIncludes));
  return event ? { slug: event.slug, title: event.title, year: event.year } : null;
}

// 人物名から、伝記（bio）が用意されている場合のみ個別ページへのリンクを探す
function findPersonHref(eraId, name) {
  const era = ERAS.find((e) => e.id === eraId);
  if (!era) return null;
  const figure = getEraFigures(era).find((f) => stripRuby(f.name) === name);
  return figure && figure.bio ? `/people/${eraId}/${encodeURIComponent(personSlug(figure.name))}` : null;
}

const EV_TOSEN = findEvent("chunqiu", "平王");
const EV_QIHUANGONG = findEvent("chunqiu", "斉桓公");
const EV_JOBOKU = findEvent("chunqiu", "城濮");
const EV_KOUSHI = findEvent("chunqiu", "孔子");
const EV_GOETSU = findEvent("chunqiu", "呉");
const EV_SANKABUNSHIN_CQ = findEvent("chunqiu", "三家分晋");
const EV_SANKABUNSHIN_ZG = findEvent("zhanguo", "三家分晋");
const EV_SHOUOU = findEvent("zhanguo", "商鞅");
const EV_GASSHOU = findEvent("zhanguo", "合従連衡");
const EV_CHOUHEI = findEvent("zhanguo", "長平");
const EV_SHUUKETSU = findEvent("zhanguo", "戦国の終結");

const HREF_KOUSHI = findPersonHref("chunqiu", "孔子");
const HREF_SHOKOUTEI = findPersonHref("qin", "始皇帝（嬴政）");

// 春秋時代（前770〜前403年）の流れ
const CQ_FLOW = [
  { year: "770", title: "{{平王|へいおう}}の東遷", note: "都が洛邑へ移り、周王室の権威が形骸化していく「春秋時代」が始まる。", href: EV_TOSEN && `/events/${EV_TOSEN.slug}` },
  { year: "707", title: "{{繻葛|じゅかつ}}の戦い", note: "周の桓王が一諸侯に敗れ、周王室の武威は完全に地に落ちる。", anchor: "cq-battle-1" },
  { year: "679", title: "{{斉桓公|せいかんこう}}、覇者となる", note: "管仲の補佐を得た斉の桓公が、春秋最初の覇者となる。", href: EV_QIHUANGONG && `/events/${EV_QIHUANGONG.slug}` },
  { year: "632", title: "{{城濮|じょうぼく}}の戦い", note: "晋文公が「退避三舎」の後、楚を破り新たな覇者となる。", anchor: "cq-battle-2" },
  { year: "597", title: "{{邲|ひつ}}の戦い", note: "楚荘王が晋を破り、「春秋五覇」の一人に数えられる。", anchor: "cq-battle-3" },
  { year: "575", title: "{{鄢陵|えんりょう}}の戦い", note: "晋が楚を破り、楚の中原進出をいったん食い止める。", anchor: "cq-battle-4" },
  { year: "551", title: "{{孔子|こうし}}の誕生", note: "後の東アジア思想史に絶大な影響を与える儒家の祖が生まれる。", href: EV_KOUSHI && `/events/${EV_KOUSHI.slug}` },
  { year: "494–473", title: "{{呉越|ごえつ}}の攻防・{{臥薪嘗胆|がしんしょうたん}}", note: "会稽の恥から雌伏した越王勾践が、ついに呉を滅ぼす。", anchor: "cq-battle-5" },
  { year: "453", title: "{{三家分晋|さんかぶんしん}}", note: "大国晋が韓・魏・趙に分裂。戦国時代への転換点となる。", href: EV_SANKABUNSHIN_CQ && `/events/${EV_SANKABUNSHIN_CQ.slug}` },
];

// 戦国時代（前403〜前221年）の流れ
const ZG_FLOW = [
  { year: "403", title: "三家分晋の公認", note: "韓・魏・趙が周王室から正式に諸侯と認められ、戦国時代が本格化する。", href: EV_SANKABUNSHIN_ZG && `/events/${EV_SANKABUNSHIN_ZG.slug}` },
  { year: "356", title: "{{商鞅|しょうおう}}の変法", note: "秦で徹底した法治改革が断行され、後の統一への国力基盤が築かれる。", href: EV_SHOUOU && `/events/${EV_SHOUOU.slug}` },
  { year: "353・341", title: "{{桂陵|けいりょう}}・{{馬陵|ばりょう}}の戦い", note: "軍師孫臏が宿敵龐涓を二度にわたり打ち破る。", anchor: "zg-battle-1" },
  { year: "333", title: "{{合従連衡|がっしょうれんこう}}の外交戦", note: "蘇秦・張儀ら縦横家が武力によらぬ駆け引きを繰り広げる。", href: EV_GASSHOU && `/events/${EV_GASSHOU.slug}` },
  { year: "293", title: "{{伊闕|いけつ}}の戦い", note: "秦の若き将軍白起が、韓魏連合軍24万を壊滅させる。", anchor: "zg-battle-2" },
  { year: "278", title: "{{鄢郢|えんえい}}の戦い", note: "白起が楚の都を陥落させ、詩人屈原が汨羅に身を投げる。", anchor: "zg-battle-3" },
  { year: "260", title: "{{長平|ちょうへい}}の戦い", note: "趙の40万の兵が生き埋めにされ、秦の統一が決定的となる。", anchor: "zg-battle-4" },
  { year: "257", title: "{{邯鄲|かんたん}}の戦い", note: "魏の信陵君が割符を盗み、趙を滅亡の淵から救う。", anchor: "zg-battle-5" },
  { year: "230–221", title: "秦滅六国・戦国の終結", note: "秦王政が六国を次々と滅ぼし、中国史上初の統一を成し遂げる。", anchor: "zg-battle-6" },
];

// 中国本土＋海南島の輪郭（/world-heritage・/sanguo-battles・/chuhan-battlesと同じ、実際の海岸線をもとにした投影データ）
const CHINA_OUTLINE =
  "M294.9,341.64L288.42,346.09L282.27,343.22L282.06,335.26L285.75,331.07L293.94,328.48L298.25,328.7L299.93,332.23L296.64,336.3L294.9,341.64Z " +
  "M424.75,54.2L437.8,57.16L446.68,63.73L449.72,72.42L461.11,72.43L467.61,68.79L480,66.06L476.06,74.38L473.15,77.76L470.58,87.9L465.54,96.89L456.44,95.25L450,98.52L451.97,106.44L450.9,117.37L447.07,117.62L447.11,122.32L442.27,116.86L439.29,122.04L427.71,126.02L428.88,130.9L422.4,130.56L418.84,127.66L413.69,134.22L405.42,139.19L399.32,145.12L388.84,147.81L383.32,152.14L375.24,154.66L379.23,150.37L377.66,146.77L383.59,140.56L379.63,135.71L373.1,138.98L364.63,145.41L360.01,151.38L352.66,151.82L348.84,156.14L352.79,162.39L358.92,163.91L359.17,168.06L365.11,170.76L373.51,164.16L380.17,167.76L385.01,168L386.23,172.85L375.61,175.43L372.11,180.42L364.82,185.06L360.97,191.54L369.04,196.62L371.99,205.71L376.55,214.19L381.64,221.29L381.52,228.16L376.81,230.69L378.61,235.62L383.02,238.49L381.87,246.02L379.96,253.35L375.78,254.18L370.3,264.19L364.23,276.33L357.26,287.37L346.95,295.9L336.52,303.68L328.07,304.75L323.49,308.85L320.9,305.85L316.66,310.45L306.18,315.08L298.25,316.5L295.69,326.26L291.53,326.81L289.56,320.09L291.34,316.52L281.28,313.56L277.74,315.06L270.19,312.66L266.62,308.91L267.8,303.58L260.95,301.89L257.34,298.42L250.94,303.35L243.65,304.42L237.67,304.37L233.65,306.63L229.76,307.98L230.9,318.56L226.9,318.31L226.23,316.13L226,312.31L220.5,315L217.25,313.3L211.69,309.83L213.87,302.15L209.12,300.36L207.33,291.84L199.42,293.38L200.32,282.41L207.42,274.68L207.72,267.06L207.5,259.98L204.23,257.77L201.72,252.33L197.34,253.02L189.25,251.64L191.78,247.75L188.27,242L182.92,245.9L176.63,243.62L167.99,249.51L161.17,256.39L155.12,257.55L151.84,255.06L147.88,254.84L142.52,252.7L138.47,255.04L133.51,261.92L132.88,254.63L128.31,256.58L119.56,255.67L111.08,253.55L105,249.49L99.17,247.67L96.66,243.23L92.44,241.9L84.87,235.88L78.86,233.03L75.75,235.24L65.33,228.78L57.97,222.92L55.86,212.73L61.24,213.97L61.49,209.25L58.51,204.52L59.27,196.97L51.21,186.13L38.88,182.39L36.66,175.29L31.12,170.98L29.78,168.32L28.66,163.05L28.92,159.46L24.36,157.35L21.9,158.28L20,149.72L22.13,147.61L21.1,145.44L28.26,141.08L33.44,139.27L41.38,140.51L44.21,134.6L53.83,133.5L56.5,129.83L68.32,124.82L69.37,122.73L68.77,117.46L73.92,115.05L67.17,98.99L82.02,95.29L85.86,93.23L91.27,76.68L106.14,79.72L110.31,75.54L110.67,66.27L116.9,65.4L122.6,59.25L125.54,58.49L127.51,64.94L133.81,69.84L144.51,73.32L149.68,80.76L146.79,91.57L149.49,95.58L158.4,97.16L168.5,98.45L177.56,104.21L182.19,105.24L185.61,113.77L190.01,119.26L198.27,119.04L213.75,121.12L223.72,119.83L231.12,121.21L242.21,126.82L251.29,126.82L254.6,129.69L263.33,124.73L275.45,121.52L286.69,121.16L295.45,117.91L300.83,112.96L306.07,109.85L304.86,106.8L302.47,103.24L306.4,97.28L310.62,98.12L318.33,99.99L325.8,95.08L337.23,91.5L342.73,85.39L348,82.76L358.89,81.53L364.81,82.57L365.63,79.28L358.84,72.82L352.82,69.86L347.06,73.28L339.66,71.84L335.42,73.01L333.48,69.23L338.78,59.99L342.43,53.02L351.43,56.51L362,50.66L361.93,46.6L368.7,36.79L372.87,33.82L372.78,28.72L368.66,26.52L374.86,21.92L384.17,20.25L394.11,20L405.34,22.75L411.92,26.16L416.55,35.49L419.36,39.47L421.98,45.14L424.75,54.2Z";
const TAIWAN_OUTLINE =
  "M380.66,288.78L376.15,303.61L372.94,311.2L368.99,303.39L368.13,296.53L372.54,287.45L378.54,280.45L381.97,283.2L380.66,288.78Z";

// 合戦地点。経緯度から/world-heritage・/sanguo-battles・/chuhan-battlesと同じ図法（線形近似）で算出し、
// 近接する史跡同士は視認性のため数px調整している
// X ≈ 340 + 7.495×(経度-116.4) / Y ≈ 145 - 9.343×(緯度-39.9)
const CQ_BATTLES = [
  {
    no: 1,
    id: "cq-battle-1",
    year: "前707年",
    name: "{{繻葛|じゅかつ}}の戦い",
    location: "河南省長葛市付近",
    mapX: 321,
    mapY: 198,
    factions: [
      { side: "周王室軍", people: "{{周桓王|しゅうかんおう}}" },
      { side: "鄭軍", people: "{{鄭荘公|ていそうこう}}・{{祝聃|しゅくたん}}" },
    ],
    body: "周王室の権威回復を図る{{桓王|かんおう}}は、自ら軍を率いて有力諸侯{{鄭|てい}}の{{荘公|そうこう}}を討とうとしたが、逆に大敗を喫し、桓王自身も家臣{{祝聃|しゅくたん}}の放った矢を肩に受けて負傷したと伝えられる。天下の宗主であるはずの周王が一諸侯に武力で打ち負かされたこの一戦は周王室の権威が完全に形骸化したことを天下に知らしめ、以後は実力を背景とした「覇者」が秩序を主導する春秋時代の力学を決定づけた。",
    relatedHref: null,
    relatedLabel: null,
    personHref: null,
    personLabel: null,
  },
  {
    no: 2,
    id: "cq-battle-2",
    year: "前632年",
    name: "{{城濮|じょうぼく}}の戦い",
    location: "山東省鄄城県付近",
    mapX: 335,
    mapY: 178,
    factions: [
      { side: "晋軍", people: "{{晋文公|しんぶんこう}}（{{重耳|ちょうじ}}）・{{先軫|せんしん}}" },
      { side: "楚軍", people: "{{子玉|しぎょく}}" },
    ],
    body: "19年に及ぶ亡命生活の末に即位した{{晋文公|しんぶんこう}}は、南方の大国{{楚|そ}}と中原の覇権を争った。開戦にあたり、かつて楚に世話になった恩義から自軍を三舎（90里）後退させる「{{退避三舎|たいひさんしゃ}}」を実行しつつ、油断した楚将{{子玉|しぎょく}}の軍を巧みな伏兵戦術で打ち破る。この勝利により晋文公は斉桓公に続く新たな覇者としての地位を不動のものとした。",
    relatedHref: EV_JOBOKU && `/events/${EV_JOBOKU.slug}`,
    relatedLabel: "晋文公の覇権・城濮の戦いを年表で読む",
    personHref: null,
    personLabel: null,
  },
  {
    no: 3,
    id: "cq-battle-3",
    year: "前597年",
    name: "{{邲|ひつ}}の戦い",
    location: "河南省滎陽市付近",
    mapX: 305,
    mapY: 185,
    factions: [
      { side: "楚軍", people: "{{楚荘王|そそうおう}}" },
      { side: "晋軍", people: "{{荀林父|じゅんりんぷ}}" },
    ],
    body: "即位当初は遊興にふけって「三年鳴かず飛ばず」と評された{{楚荘王|そそうおう}}であったが、実は臣下の器量を見極めていたに過ぎず、いざ親政を始めると瞬く間に国力を充実させた。晋との激突となった邲の戦いでは、指揮系統の乱れた晋軍を打ち破り黄河への敗走に追い込む大勝を収め、この勝利により荘王は「春秋五覇」の一人に数えられる新たな覇者としての地位を確立した。",
    relatedHref: null,
    relatedLabel: null,
    personHref: null,
    personLabel: null,
  },
  {
    no: 4,
    id: "cq-battle-4",
    year: "前575年",
    name: "{{鄢陵|えんりょう}}の戦い",
    location: "河南省鄢陵県付近",
    mapX: 338,
    mapY: 208,
    factions: [
      { side: "晋軍", people: "{{晋厲公|しんれいこう}}・{{欒書|らんしょ}}" },
      { side: "楚軍", people: "{{楚共王|そきょうおう}}" },
    ],
    body: "邲の戦いで晋を破り覇権を握った楚であったが、その勢いも長くは続かなかった。鄢陵の戦いで晋軍は楚の{{共王|きょうおう}}を矢で負傷させるほどの猛攻を見せて大勝し、楚の北進を食い止めることに成功する。この敗戦を機に楚の中原への影響力は後退し、以後しばらく晋が中原諸侯に対する主導権を握り続けることになった。",
    relatedHref: null,
    relatedLabel: null,
    personHref: null,
    personLabel: null,
  },
  {
    no: 5,
    id: "cq-battle-5",
    year: "前494〜前473年",
    name: "{{呉越|ごえつ}}の攻防（{{臥薪嘗胆|がしんしょうたん}}）",
    location: "会稽（浙江省紹興市）〜姑蘇（江蘇省蘇州市）",
    mapX: 372,
    mapY: 225,
    factions: [
      { side: "呉軍", people: "{{夫差|ふさ}}" },
      { side: "越軍", people: "{{勾践|こうせん}}・{{范蠡|はんれい}}" },
    ],
    body: "会稽山で呉に大敗し屈辱的な講和を強いられた越王{{勾践|こうせん}}は、苦い肝を嘗めて雪辱を誓う「{{臥薪嘗胆|がしんしょうたん}}」の日々を送りながら、名臣{{范蠡|はんれい}}らの補佐のもと国力の回復に努めた。二十年近くの雌伏を経てついに反撃に転じた越は、驕り高ぶった呉王{{夫差|ふさ}}の軍を各地で撃破し、最終的に呉の都{{姑蘇|こそ}}を陥落させて呉を滅ぼす。勾践はその後、中原にまでその名を知られる最後の「春秋の覇者」となった。",
    relatedHref: EV_GOETSU && `/events/${EV_GOETSU.slug}`,
    relatedLabel: "呉越の抗争・臥薪嘗胆を年表で読む",
    personHref: null,
    personLabel: null,
  },
];

const ZG_BATTLES = [
  {
    no: 1,
    id: "zg-battle-1",
    year: "前353・前341年",
    name: "{{桂陵|けいりょう}}・{{馬陵|ばりょう}}の戦い",
    location: "桂陵・馬陵（いずれも山東省菏沢市付近）",
    mapX: 339,
    mapY: 184,
    factions: [
      { side: "斉軍", people: "{{孫臏|そんぴん}}・{{田忌|でんき}}" },
      { side: "魏軍", people: "{{龐涓|ほうけん}}" },
    ],
    body: "かつて同門で学んだ{{孫臏|そんぴん}}と{{龐涓|ほうけん}}は、龐涓の讒言により孫臏が両足を切断される刑を受けたことで宿敵となった。斉に亡命した孫臏は、趙を攻める魏の背後を突いて自国を救う「{{囲魏救趙|いぎきゅうちょう}}」の策で桂陵の戦いに勝利する。さらに十年余り後の馬陵の戦いでは、退却と見せかけて日ごとに野営のかまどの数を減らし敵を油断させる「{{減竈之計|げんそうのけい}}」で龐涓をおびき寄せて大破し、窮地に陥った龐涓は自害した。孫臏はこの二戦により兵法家として不朽の名声を得ている。",
    relatedHref: null,
    relatedLabel: null,
    personHref: null,
    personLabel: null,
  },
  {
    no: 2,
    id: "zg-battle-2",
    year: "前293年",
    name: "{{伊闕|いけつ}}の戦い",
    location: "河南省洛陽市南郊（伊闕）",
    mapX: 310,
    mapY: 195,
    factions: [
      { side: "秦軍", people: "{{白起|はくき}}" },
      { side: "韓魏連合軍", people: "{{公孫喜|こうそんき}}" },
    ],
    body: "台頭著しい秦に対し、韓・魏は連合軍24万を組んでこれを迎え撃ったが、秦の若き将軍{{白起|はくき}}は寡兵ながら各個撃破の戦術で連合軍を翻弄し、司令官{{公孫喜|こうそんき}}を捕らえて連合軍を事実上全滅させる大勝利を収めた。この一戦で白起は一躍秦軍随一の名将としての名声を確立し、以後の数十年にわたり東方六国を震撼させ続けることになる。",
    relatedHref: null,
    relatedLabel: null,
    personHref: null,
    personLabel: null,
  },
  {
    no: 3,
    id: "zg-battle-3",
    year: "前278年",
    name: "{{鄢郢|えんえい}}の戦い",
    location: "湖北省荊州市（{{郢|えい}}）",
    mapX: 308,
    mapY: 234,
    factions: [
      { side: "秦軍", people: "{{白起|はくき}}" },
      { side: "楚軍", people: "{{楚頃襄王|そけいじょうおう}}" },
    ],
    body: "伊闕の戦いで名を上げた白起はさらに南下し、楚の都{{郢|えい}}（現在の湖北省荊州）を水攻めも用いて攻略した。都を追われた楚は東方への遷都を余儀なくされ、大国としての勢いに深刻な打撃を受ける。この報に絶望した楚の詩人{{屈原|くつげん}}は汨羅の淵に身を投げて命を絶ったと伝えられ、この故事が後の{{端午節|たんごせつ}}（ちまきを供える風習）の起源になったとされる。",
    relatedHref: null,
    relatedLabel: null,
    personHref: null,
    personLabel: null,
  },
  {
    no: 4,
    id: "zg-battle-4",
    year: "前260年",
    name: "{{長平|ちょうへい}}の戦い",
    location: "山西省高平市付近",
    mapX: 305,
    mapY: 168,
    factions: [
      { side: "秦軍", people: "{{白起|はくき}}" },
      { side: "趙軍", people: "{{趙括|ちょうかつ}}" },
    ],
    body: "持久戦を貫いていた趙の名将{{廉頗|れんぱ}}が更迭され、実戦経験に乏しい{{趙括|ちょうかつ}}に指揮が交代したところを、秦の{{白起|はくき}}に完全包囲されて趙軍40万は降伏に追い込まれた。白起は降伏兵の反乱を恐れてその大半を生き埋めにしたと伝えられ、戦国時代を通じて最大規模の犠牲を出した戦いとして知られる。この敗北で趙は再起不能なほどの国力を失い、秦による天下統一への流れは決定的なものとなった。",
    relatedHref: EV_CHOUHEI && `/events/${EV_CHOUHEI.slug}`,
    relatedLabel: "長平の戦いを年表で読む",
    personHref: null,
    personLabel: null,
  },
  {
    no: 5,
    id: "zg-battle-5",
    year: "前257年",
    name: "{{邯鄲|かんたん}}の戦い（{{窃符救趙|せっぷきゅうちょう}}）",
    location: "河北省邯鄲市",
    mapX: 322,
    mapY: 168,
    factions: [
      { side: "魏・楚救援軍", people: "{{信陵君|しんりょうくん}}" },
      { side: "秦軍", people: "邯鄲包囲軍" },
    ],
    body: "長平の勝利に乗じた秦軍は趙の都{{邯鄲|かんたん}}を包囲し、趙は滅亡の淵に立たされた。魏の公子{{信陵君|しんりょうくん}}は同盟国の危機を見過ごせず、王の寵姫の手を借りて軍権を示す割符を盗み出し、独断で魏の援軍を動かして秦軍を撃退した「{{窃符救趙|せっぷきゅうちょう}}」の故事で知られる。この決断は主命に背く重大な越権行為であったが、結果的に趙を滅亡から救い、信陵君は「{{戦国四公子|せんごくのよんこうし}}」の一人として侠気ある名声を後世に残した。",
    relatedHref: null,
    relatedLabel: null,
    personHref: null,
    personLabel: null,
  },
  {
    no: 6,
    id: "zg-battle-6",
    year: "前230〜前221年",
    name: "秦滅六国・戦国の終結",
    location: "山東省淄博市（斉の都・{{臨淄|りんし}}）ほか",
    mapX: 354,
    mapY: 174,
    factions: [
      { side: "秦軍", people: "{{秦王政|しんおうせい}}（{{始皇帝|しこうてい}}）・{{王翦|おうせん}}" },
      { side: "六国", people: "韓・趙・魏・楚・燕・斉" },
    ],
    body: "長平の戦いから半世紀、秦王{{政|せい}}はわずか10年ほどの間に韓・趙・魏・楚・燕を次々と滅ぼした。この過程では、燕の太子{{丹|たん}}が刺客{{荊軻|けいか}}を放って秦王暗殺を図るも失敗する「{{荊軻刺秦王|けいかしんおうをさす}}」の事件も起きている。最後まで独立を保っていた東方の大国{{斉|せい}}も無血開城で降伏し、紀元前221年、秦王政は中国史上初めて全土を統一して「{{始皇帝|しこうてい}}」を名乗った。550年に及んだ春秋戦国の分裂の時代はここに終わりを告げる。",
    relatedHref: EV_SHUUKETSU && `/events/${EV_SHUUKETSU.slug}`,
    relatedLabel: "戦国の終結を年表で読む",
    personHref: HREF_SHOKOUTEI,
    personLabel: "始皇帝の生涯を読む",
  },
];

// 両陣営の大まかな勢力圏ラベル（範囲を厳密に示すものではない）
const CQ_REGION_LABELS = [
  { label: "晋", x: 300, y: 150 },
  { label: "斉", x: 368, y: 155 },
  { label: "楚", x: 300, y: 250 },
  { label: "呉・越", x: 388, y: 245 },
];
const ZG_REGION_LABELS = [
  { label: "秦", x: 250, y: 195 },
  { label: "楚", x: 300, y: 255 },
  { label: "斉", x: 368, y: 150 },
  { label: "燕", x: 340, y: 115 },
];

function BattleMap({ battles, regionLabels, note }) {
  return (
    <div style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", padding: 16, marginBottom: 28 }}>
      <p style={{ fontSize: 11.5, color: COLORS.inkSoft, marginBottom: 10 }}>{note}</p>
      <svg viewBox="0 0 500 366" style={{ width: "100%", maxHeight: 400, display: "block", margin: "0 auto" }}>
        <path d={CHINA_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />
        <path d={TAIWAN_OUTLINE} fill="#DCD3B8" stroke={COLORS.mist} strokeWidth="1.2" strokeLinejoin="round" />

        {regionLabels.map((r, i) => (
          <text
            key={`region-${i}`}
            x={r.x}
            y={r.y}
            textAnchor="middle"
            style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12, fontWeight: 700, fill: COLORS.inkSoft, opacity: 0.55 }}
          >
            {r.label}
          </text>
        ))}

        {battles.map((b) => (
          <g key={b.no}>
            <circle cx={b.mapX} cy={b.mapY} r="8" fill={COLORS.vermilion} stroke={COLORS.paper} strokeWidth="1.5" />
            <text
              x={b.mapX}
              y={b.mapY}
              textAnchor="middle"
              dominantBaseline="central"
              style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 9, fontWeight: 700, fill: "#FBF8F0" }}
            >
              {b.no}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function FlowList({ items }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((f, i) => {
        const content = (
          <div className="flex items-baseline gap-3 px-4 py-2.5" style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", borderLeft: `3px solid ${COLORS.vermilion}` }}>
            <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12.5, color: COLORS.inkSoft, whiteSpace: "nowrap" }}>
              {f.year}
            </span>
            <div className="flex-1 min-w-0">
              <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 14.5, fontWeight: 700, color: COLORS.ink }}>
                <RubyText text={f.title} />
              </div>
              <div style={{ fontSize: 11.5, color: COLORS.inkSoft, lineHeight: 1.6, marginTop: 2 }}>
                <RubyText text={f.note} />
              </div>
            </div>
            {(f.href || f.anchor) && <span className="shrink-0" style={{ color: COLORS.vermilion, fontSize: 13 }}>→</span>}
          </div>
        );
        if (f.href) {
          return <a key={i} href={f.href}>{content}</a>;
        }
        if (f.anchor) {
          return <a key={i} href={`#${f.anchor}`}>{content}</a>;
        }
        return <div key={i}>{content}</div>;
      })}
    </div>
  );
}

function BattleCards({ battles }) {
  return (
    <div className="flex flex-col gap-5">
      {battles.map((b) => (
        <div key={b.no} id={b.id} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8", scrollMarginTop: 16 }}>
          <div className="p-4">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  backgroundColor: COLORS.vermilion,
                  color: "#FBF8F0",
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {b.no}
              </span>
              <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 16.5, fontWeight: 700, color: COLORS.ink }}>
                <RubyText text={b.name} />
              </span>
              <span style={{ fontSize: 12, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>{b.year}</span>
            </div>
            <div style={{ fontSize: 11, color: COLORS.vermilionSoft, marginTop: 4 }}>
              <span aria-hidden>📍</span> <RubyText text={b.location} />
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3" style={{ fontSize: 11.5 }}>
              {b.factions.map((f, i) => (
                <div key={i}>
                  <span style={{ color: COLORS.gold, fontWeight: 700 }}>{f.side}：</span>
                  <span style={{ color: COLORS.inkSoft }}><RubyText text={f.people} /></span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 12.5, lineHeight: 1.85, color: COLORS.inkSoft, marginTop: 10 }}>
              <RubyText text={b.body} />
            </p>

            <div className="flex items-center gap-3 flex-wrap mt-3" style={{ fontSize: 11.5 }}>
              {b.relatedHref && (
                <a href={b.relatedHref} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                  {b.relatedLabel} →
                </a>
              )}
              {b.personHref && (
                <a href={b.personHref} style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
                  {b.personLabel} →
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ChunqiuZhanguoBattlesPage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          春秋・戦国時代 合戦マップ
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 20 }}>
          紀元前770年の周の東遷から、紀元前221年の秦による中国統一まで——550年におよぶ春秋・戦国時代は、
          数十の国が興亡を繰り返した中国史上もっとも長い分裂の時代です。このページでは前半の「春秋時代」と
          後半の「戦国時代」に分けて、代表的な合戦とそこで活躍した武将たちを地図とともに紹介します。
        </p>

        <div className="flex items-center gap-2.5 flex-wrap mb-10" style={{ fontSize: 12.5 }}>
          <a href="#chunqiu" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            → 春秋時代（前770〜前403）へ
          </a>
          <span style={{ color: COLORS.mist }}>|</span>
          <a href="#zhanguo" style={{ color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}>
            → 戦国時代（前403〜前221）へ
          </a>
        </div>

        <section id="chunqiu" style={{ marginBottom: 20, scrollMarginTop: 16 }}>
          <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 4 }}>
            前770 – 前403
          </div>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 21, fontWeight: 900, color: COLORS.ink, marginBottom: 4 }}>
            春秋時代の合戦
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 16 }}>
            周王室の権威が形だけのものとなり、斉・晋・楚・呉・越など有力諸侯が「覇者」を称して天下に号令した時代。
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            時代の流れ
          </h3>
          <FlowList items={CQ_FLOW} />
        </section>

        <section style={{ marginBottom: 12 }}>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            合戦地図
          </h3>
          <BattleMap
            battles={CQ_BATTLES}
            regionLabels={CQ_REGION_LABELS}
            note="実際の海岸線をもとにした位置関係図です。朱色の番号は下の各合戦の位置を示しています。"
          />
        </section>

        <section style={{ marginBottom: 40 }}>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 16 }}>
            主要な戦い
          </h3>
          <BattleCards battles={CQ_BATTLES} />
        </section>

        <section id="zhanguo" style={{ marginBottom: 20, paddingTop: 8, borderTop: `1px solid ${COLORS.mist}`, scrollMarginTop: 16 }}>
          <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12, color: COLORS.vermilion, letterSpacing: "0.15em", marginBottom: 4, marginTop: 24 }}>
            前403 – 前221
          </div>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 21, fontWeight: 900, color: COLORS.ink, marginBottom: 4 }}>
            戦国時代の合戦
          </h2>
          <p style={{ fontSize: 12.5, lineHeight: 1.8, color: COLORS.inkSoft, marginBottom: 16 }}>
            晋の分裂を経て、秦・楚・斉・燕・韓・魏・趙の「戦国七雄」が生き残りをかけて争った、より苛烈な弱肉強食の時代。
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            時代の流れ
          </h3>
          <FlowList items={ZG_FLOW} />
        </section>

        <section style={{ marginBottom: 12 }}>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 10 }}>
            合戦地図
          </h3>
          <BattleMap
            battles={ZG_BATTLES}
            regionLabels={ZG_REGION_LABELS}
            note="実際の海岸線をもとにした位置関係図です。朱色の番号は下の各合戦の位置を示しています。"
          />
        </section>

        <section>
          <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink, marginBottom: 16 }}>
            主要な戦い
          </h3>
          <BattleCards battles={ZG_BATTLES} />
        </section>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            戦国の統一以後、秦の滅亡から漢の統一までの「楚漢戦争」、そして400年後の「三国時代」の合戦については、
            あわせて下記の特集ページもご覧ください。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/chuhan-battles" variant="solid">楚漢戦争 合戦マップを見る</NavButton>
            <NavButton href="/sanguo-battles" variant="outline">三国時代 合戦マップを見る</NavButton>
          </div>
        </section>

        <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${COLORS.mist}` }}>
          <MiscLinksSection />
        </div>
      </div>
    </div>
  );
}
