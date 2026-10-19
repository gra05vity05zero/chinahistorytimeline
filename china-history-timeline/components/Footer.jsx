import Link from "next/link";
import { COLORS } from "@/lib/data";
import { A8Banner } from "@/components/Shared";

export default function Footer() {
  const linkStyle = { color: COLORS.inkSoft, textDecoration: "none" };
  return (
    <footer
      className="flex flex-wrap items-center justify-center gap-4 px-6 py-8"
      style={{ backgroundColor: COLORS.paperDeep, borderTop: `1px solid ${COLORS.mist}`, fontSize: 12 }}
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <div style={{ fontSize: 10.5, color: COLORS.inkSoft, marginBottom: 6 }}>広告</div>
        <A8Banner
          href="https://px.a8.net/svt/ejp?a8mat=4BA6D9+BJKLSQ+4XZI+HVNAP"
          imgSrc="https://www29.a8.net/svt/bgt?aid=260815293698&wid=002&eno=01&mid=s00000023067003003000&mc=1"
          gifSrc="https://www17.a8.net/0.gif?a8mat=4BA6D9+BJKLSQ+4XZI+HVNAP"
          width="300"
          height="250"
        />
        <div style={{ marginTop: 10 }}>
          <A8Banner
            href="https://px.a8.net/svt/ejp?a8mat=4BA6D9+BFZZEA+39GM+4GVBNL"
            imgSrc="https://www26.a8.net/svt/bgt?aid=260815293692&wid=001&eno=01&mid=s00000015223027020000&mc=1"
            gifSrc="https://www18.a8.net/0.gif?a8mat=4BA6D9+BFZZEA+39GM+4GVBNL"
            width="468"
            height="60"
          />
        </div>
      </div>
      <Link href="/about" style={linkStyle}>このサイトについて</Link>
      <span style={{ color: COLORS.mist }}>|</span>
      <Link href="/privacy" style={linkStyle}>プライバシーポリシー</Link>
      <span style={{ width: "100%", textAlign: "center", color: COLORS.mist, marginTop: 8, fontSize: 11 }}>
        © {new Date().getFullYear()} 中国五千年史
      </span>
    </footer>
  );
}
