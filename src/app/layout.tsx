import Link from "next/link";

export const metadata = {
  title: "주연기술산업 | 건설·토목·설비·전기 전문",
  description: "현장 안전과 품질을 최우선으로 하는 주연기술산업",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body style={{fontFamily:"system-ui, Apple SD Gothic Neo, Malgun Gothic, Segoe UI, Roboto"}}>
        <header style={{position:"sticky",top:0,background:"#fff",borderBottom:"1px solid #eee",zIndex:10}}>
          <div style={{maxWidth:1100,margin:"0 auto",padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Link href="/" style={{fontWeight:800,display:"flex",gap:8}}>
              <span style={{background:"#111",color:"#fff",borderRadius:10,padding:"6px 8px"}}>JY</span>
              <span>주연기술산업</span>
            </Link>
            <nav style={{display:"flex",gap:14}}>
              <Link href="/#about">회사소개</Link>
              <Link href="/#services">사업분야</Link>
              <Link href="/#projects">시공사례</Link>
              <Link href="/contact" style={{fontWeight:700,border:"1px solid #eee",borderRadius:10,padding:"8px 12px"}}>문의하기</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer style={{borderTop:"1px solid #eee",marginTop:40}}>
          <div style={{maxWidth:1100,margin:"0 auto",padding:"20px 16px",display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
            <div>
              <div style={{fontWeight:800,display:"flex",gap:8,alignItems:"center"}}>
                <span style={{background:"#111",color:"#fff",borderRadius:10,padding:"6px 8px"}}>JY</span>
                <span>주연기술산업</span>
              </div>
              <p style={{color:"#667",marginTop:8}}>© 2025 JY Tech Industry. All rights reserved.</p>
            </div>
            <div>
              <b>문의</b>
              {/* tel:, mailto:는 외부 링크라 <a> 그대로 사용 OK */}
              <p>전화 <a href="tel:+821012345678">010-1234-5678</a><br/>
                 이메일 <a href="mailto:hello@jytechindustry.com">hello@jytechindustry.com</a></p>
              <p><Link href="/contact" style={{fontWeight:700}}>견적 요청</Link></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}