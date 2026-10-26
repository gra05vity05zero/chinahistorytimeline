// トップページの説明文の下に置くサイトのイメージ画像。
// 左の青銅器・兵馬俑から、長城、紫禁城、仏塔を経て、右の現代の上海まで、
// 時代が左から右へ進んでいく様子を一枚の絵巻風に描いたもの。
export default function HeroImage() {
  return (
    <img
      src="/hero.webp"
      width={1774}
      height={887}
      alt="青銅器と兵馬俑、騎馬の軍勢、万里の長城、紫禁城、仏塔、帆船の浮かぶ大河、現代の上海の高層ビル群までが一続きに描かれ、空に龍が舞う中国史のイメージ画像"
      fetchPriority="high"
      // 元画像（2:1）の上下を少し切って横長に見せる。上の龍を残すため、下側を多めに切る
      style={{ display: "block", width: "100%", height: "auto", aspectRatio: "5 / 2", objectFit: "cover", objectPosition: "50% 35%" }}
    />
  );
}
