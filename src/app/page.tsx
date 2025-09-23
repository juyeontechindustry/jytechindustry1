export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>토지·인허가부터 시공·운영까지, 소규모·중소 규모 개발에 강한 시행사 건설기업</h1>
          <p>건축 · 토목 · 설비 · 전기 — 일정·원가·품질 리스크를 투명하게 관리합니다.</p>
          <div className="row" style={{marginTop:16}}>
            <a href="#process" className="btn btn-primary">진행 절차 보기</a>
            <a href="/contact" className="btn">상담 요청</a>
          </div>
        </div>
      </section>

      {/* 회사소개 */}
      <section id="about" className="section">
        <div className="container stack">
          <h2>회사소개</h2>
          <p className="muted">
            주연기술산업은 시행사 관점에서 사업 초기의 타당성 검토부터 인허가, 시공 관리, 분양/임대, 준공 이후 운영 안정화까지
            개발 전 과정을 총괄합니다. 현재는 건축·토목·설비·전기 등 다양한 공사를 수행하며, 소규모·중소 규모 개발사업에
            강점을 갖고 있습니다. 앞으로는 종합건설 전환과 함께 소프트웨어/모바일앱/정보보안 영역으로 확장해, 데이터 기반
            현장 운영·안전·품질 관리 솔루션을 제공할 계획입니다. 주연기술산업은 ‘A lot with 종합건설’ 비전 아래 고객의
            사업성과·안전·지속가능성을 함께 높이겠습니다.
          </p>
          <div className="grid3">
            <div className="card soft"><h3>리스크 선대응</h3><p>일정·원가·품질·안전의 핵심 리스크를 사전 식별·관리</p></div>
            <div className="card soft"><h3>로컬 실행력</h3><p>지자체·설계/시공·금융 네트워크로 신속 대응</p></div>
            <div className="card soft"><h3>투명 보고</h3><p>주간 공정/원가 리포트와 변경 이슈 실시간 공유</p></div>
          </div>
        </div>
      </section>

      {/* 사업범위 */}
      <section id="services" className="section" style={{background:"#fafafa"}}>
        <div className="container stack">
          <h2>사업범위</h2>
          <div className="grid3">
            <div className="card"><h3>사전 단계</h3><p>입지·수지 타당성, 토지/권리 검토, 사업 구조 설계</p></div>
            <div className="card"><h3>인허가</h3><p>기획/설계 협의, 지자체 인허가, 각종 허가·신고</p></div>
            <div className="card"><h3>시공 관리</h3><p>견적/계약, 공정·원가·품질·안전 관리, 협력사 관리</p></div>
            <div className="card"><h3>분양·임대</h3><p>마케팅, 분양/임대 운영, 민원/하자 대응</p></div>
            <div className="card"><h3>금융/세무</h3><p>자금 계획, PF/브릿지 협의, 세무·법무 연계</p></div>
            <div className="card"><h3>사후 관리</h3><p>운영 안정화, 유지보수, 정산/성과 보고</p></div>
          </div>
        </div>
      </section>

      {/* 진행절차 */}
      <section id="process" className="section">
        <div className="container stack">
          <h2>진행절차</h2>
          <ol className="stack" style={{counterReset:"step"}}>
            {[
              "초기 상담 · 자료 수집",
              "현장/수지 타당성 간이 검토(무상)",
              "기획안·개략 공정/원가 제시",
              "인허가 계획 수립 · 설계사 선정",
              "시공사/협력사 선정 · 계약",
              "착공 · 공정/원가/품질/안전 관리",
              "분양/임대 집행 · 준공",
              "사후 관리 · 정산 보고"
            ].map((t,i)=>(
              <li key={i} className="card" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <strong>STEP {i+1}</strong><span>{t}</span>
              </li>
            ))}
          </ol>

          <div className="card" style={{marginTop:8}}>
            <b>간이 타당성 무상</b>
            <p className="muted" style={{marginTop:6}}>
              지번/면적/용도만 주시면 2~3영업일 내 사업성 메모를 회신드립니다.
            </p>
            <div className="row">
              <a href="/contact" className="btn btn-primary">문의하기</a>
              <a href="tel:+821012345678" className="btn">전화 연결</a>
            </div>
          </div>
        </div>
      </section>

      {/* 보증·자격 */}
      <section id="assurance" className="section" style={{background:"#fafafa"}}>
        <div className="container stack">
          <h2>보증·자격</h2>
          <div className="grid3">
            <div className="card"><h3>등록/자격</h3><p>건설업 등록(종별), 법인 등기, 사업자 등록</p></div>
            <div className="card"><h3>보험/보증</h3><p>공사/근재/배상 책임보험, 계약이행·하자이행 보증</p></div>
            <div className="card"><h3>안전/품질</h3><p>안전관리계획, 품질시험/검측 체크리스트 운영</p></div>
          </div>
          <p className="muted">증빙 서류는 요청 시 열람/제공 가능합니다.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container stack" style={{maxWidth:880}}>
          <h2>FAQ</h2>
          {[
            ["초기 상담은 비용이 드나요?", "간이 타당성까지는 무상입니다. 정밀 검토/용역은 범위에 따라 안내드립니다."],
            ["어떤 규모까지 수행하나요?", "연면적 ○○㎡ 내외의 소규모·중소 규모 개발사업을 주력으로 합니다."],
            ["공사 품질과 원가는 어떻게 관리하나요?", "주간 공정/원가 리포트와 주요 변경 이슈를 투명하게 공유합니다."],
            ["인허가 일정은 얼마나 걸리나요?", "지역/용도에 따라 다릅니다. 초기 상담 시 사업계획표에 예상 일정을 제시합니다."]
          ].map(([q,a],i)=>(
            <details key={i} className="card">
              <summary><b>Q.</b> {q}</summary>
              <p style={{marginTop:8}}>{a}</p>
            </details>
          ))}
          <div className="row" style={{justifyContent:"center"}}>
            <a href="/contact" className="btn btn-primary">상담 문의</a>
            <a href="tel:+821012345678" className="btn">전화 연결</a>
          </div>
        </div>
      </section>
    </>
  );
}
