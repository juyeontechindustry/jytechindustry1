// src/app/page.tsx (홈 페이지)
export default function HomePage() {
  const cardStyle: React.CSSProperties = {
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 18,
    background: "#fff",
  };

  return (
    <>
      {/* 헤더 섹션 */}
      <section style={{ background: "linear-gradient(180deg,#0f172a,#111827)", color: "#fff", padding: "70px 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ margin: "0 0 10px", fontSize: 40 }}>현장 안전, 정확한 납기, 책임 시공</h1>
          <p style={{ opacity: .85, margin: "0 0 20px" }}>건축 · 토목 · 설비 · 전기</p>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="/contact" style={{ background: "#f59e0b", color: "#111", padding: "12px 16px", borderRadius: 10, fontWeight: 700 }}>견적 문의</a>
            <a href="#services" style={{ padding: "12px 16px", border: "1px solid #fff3", borderRadius: 10, fontWeight: 700, color: "#fff" }}>사업분야 보기</a>
          </div>
        </div>
      </section>

      {/* 회사소개 섹션 */}
      <section id="about" style={{ padding: "48px 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2>회사소개</h2>
          <p>주연기술산업은 현장 안전과 품질을 최우선으로 하는 건설 전문 회사입니다. 건축, 토목, 설비, 전기 등 다양한 프로젝트를 수행합니다.</p>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
            <li style={cardStyle}>
              <h3>안전</h3>
              <p>표준 작업 절차·정기 교육·보호구 상시 비치</p>
            </li>
            <li style={cardStyle}>
              <h3>품질</h3>
              <p>검측 체크리스트·자재 이력·철저한 마감</p>
            </li>
            <li style={cardStyle}>
              <h3>납기</h3>
              <p>공정 관리·리스크 선대응·신속 의사결정</p>
            </li>
          </ul>
        </div>
      </section>

      {/* 사업분야 섹션 */}
      <section id="services" style={{ padding: "48px 16px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2>사업분야</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
            <li style={cardStyle}>
              <h3>건축/리모델링</h3>
              <p>상가·주거 리모델링, 내/외장 공사</p>
            </li>
            <li style={cardStyle}>
              <h3>토목/외부</h3>
              <p>배수·포장, 옹벽, 조경·외부 시설물</p>
            </li>
            <li style={cardStyle}>
              <h3>설비</h3>
              <p>배관/배수, 환기, 위생 설비</p>
            </li>
            <li style={cardStyle}>
              <h3>전기</h3>
              <p>조명, 배선, 분전반, 전력 증설</p>
            </li>
          </ul>
        </div>
      </section>

      {/* 시공사례 섹션 (샘플) */}
      <section id="projects" style={{ padding: "48px 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2>시공사례 (샘플)</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))" }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <li 
                key={i} 
                style={{ 
                  height: 120, 
                  border: "1px dashed #e5e7eb", 
                  borderRadius: 10, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  color: "#667" 
                }}
              >
                사례 {i + 1}
              </li>
            ))}
          </ul>
        </div>
      </section>
     </>
    );
  }