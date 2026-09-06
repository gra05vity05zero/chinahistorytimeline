import { ERAS, stripRuby, COLORS, SITE_NAME, buildOpenGraph, buildTwitter } from "@/lib/data";
import { BackToTopButton, NavButton, HeritageThumb } from "@/components/Shared";
import { RubyText } from "@/components/Ruby";

const title = "中国の世界遺産まとめ";
const fullTitle = `中国の世界遺産まとめ | ${SITE_NAME}`;
const description =
  "万里の長城、兵馬俑、故宮など、このサイトの年表に登場する中国の世界遺産をまとめました。それぞれの建造物がどの王朝・時代に作られたのかとあわせて紹介します。";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/world-heritage" },
  openGraph: buildOpenGraph({ title: fullTitle, description, path: "/world-heritage" }),
  twitter: buildTwitter({ title: fullTitle, description }),
};

// 各世界遺産を、由来する王朝(era)・その中の該当イベントのタイトル(部分一致)・
// heritage配列内での表記名(部分一致)で特定する
const SITES = [
  { eraId: "shang", eventTitle: "甲骨文字", heritageName: "殷墟遺跡" },
  { eraId: "chunqiu", eventTitle: "孔子の誕生", heritageName: "曲阜" },
  { eraId: "qin", eventTitle: "中国統一", heritageName: "秦始皇陵" },
  { eraId: "qin", eventTitle: "万里の長城", heritageName: "万里の長城" },
  { eraId: "westernhan", eventTitle: "西域へ", heritageName: "張騫" },
  { eraId: "nanbei", eventTitle: "華北統一", heritageName: "雲岡石窟" },
  { eraId: "nanbei", eventTitle: "漢化政策", heritageName: "龍門石窟" },
  { eraId: "sui", eventTitle: "大運河の建設", heritageName: "京杭大運河" },
  { eraId: "tang", eventTitle: "唐の建国", heritageName: "大明宮" },
  { eraId: "yuan", eventTitle: "元の建国", heritageName: "元上都" },
  { eraId: "ming", eventTitle: "明の建国", heritageName: "明孝陵" },
  { eraId: "ming", eventTitle: "北京遷都", heritageName: "紫禁城" },
  { eraId: "qing", eventTitle: "治世（最盛期へ）", heritageName: "避暑山荘" },
];

function resolveSite(spec) {
  const era = ERAS.find((e) => e.id === spec.eraId);
  if (!era) return null;
  const event = era.events.find((ev) => stripRuby(ev.title).includes(spec.eventTitle));
  const heritage = event?.heritage?.find((h) => stripRuby(h.name).includes(spec.heritageName));
  if (!heritage) return null;
  return { ...heritage, era, eventSlug: event.slug };
}

const RESOLVED = SITES.map(resolveSite).filter(Boolean);

export default function WorldHeritagePage() {
  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100%" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <BackToTopButton />

        <h1 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 26, fontWeight: 900, color: COLORS.ink, marginTop: 16, marginBottom: 14 }}>
          中国の世界遺産まとめ
        </h1>
        <p style={{ fontSize: 13.5, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 28 }}>
          中国には数多くのユネスコ世界遺産がありますが、その多くは特定の王朝の歴史と深く結びついています。
          ここでは、このサイトの年表に登場する世界遺産を、由来となった時代とあわせて紹介します。
        </p>

        <div className="flex flex-col gap-4">
          {RESOLVED.map((site, i) => (
            <div key={i} style={{ backgroundColor: "#FBF8F0", border: "1px solid #DCD3B8" }}>
              <div className="flex gap-3 p-3">
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{ width: 96, height: 96, backgroundColor: "#EFE7D0", border: `1px solid ${COLORS.mist}`, overflow: "hidden" }}
                >
                  <HeritageThumb imageUrl={site.imageUrl} name={site.name} type={site.type} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 15, fontWeight: 700, color: COLORS.ink }}>
                      <RubyText text={site.name} />
                    </span>
                    <span style={{ fontSize: 11, color: COLORS.gold, fontFamily: "'Noto Serif SC', serif" }}>{site.era.name}</span>
                  </div>
                  <p style={{ fontSize: 12, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 4 }}>
                    <RubyText text={site.description} />
                  </p>
                  {site.credit && <div style={{ fontSize: 9.5, color: COLORS.mist, marginTop: 4 }}>{site.credit}</div>}
                </div>
              </div>
              <div className="px-3 pb-3">
                <a
                  href={`/events/${site.eventSlug}`}
                  style={{ fontSize: 12, color: COLORS.vermilion, textDecoration: "underline", textDecorationColor: COLORS.mist }}
                >
                  関連する出来事を年表で読む →
                </a>
              </div>
            </div>
          ))}
        </div>

        <section style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: COLORS.inkSoft, marginBottom: 16 }}>
            兵馬俑・始皇帝陵についての詳しい謎解きは、別記事でも紹介しています。
          </p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <NavButton href="/terracotta-army" variant="solid">兵馬俑・始皇帝陵の謎を見る</NavButton>
            <NavButton href="/eras" variant="outline">出来事一覧を見る</NavButton>
          </div>
        </section>
      </div>
    </div>
  );
}
