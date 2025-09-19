"use client";
import Script from "next/script";

export default function Contact() {
  return (
    <section style={{padding:"48px 16px"}}>
      <div style={{maxWidth:820,margin:"0 auto"}}>
        <h1>문의 / 견적 요청</h1>
        <p>아래 양식을 작성해 주시면 담당자가 빠르게 연락드립니다.</p>

        {/* Turnstile */}
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />

        <form action="https://formspree.io/f/PUT_YOUR_FORM_ID" method="POST" style={{display:"grid",gap:16}}>
          <div style={grid2}>
            <div><label>성함*</label><input name="name" required style={input}/></div>
            <div><label>연락처*</label><input name="phone" required style={input}/></div>
            <div><label>이메일</label><input type="email" name="email" style={input}/></div>
            <div><label>현장 위치(시/구)</label><input name="location" style={input}/></div>
            <div><label>공사 구분</label>
              <select name="category" style={input as any}>
                <option>건축/리모델링</option><option>토목/외부</option>
                <option>설비</option><option>전기</option><option>기타</option>
              </select>
            </div>
            <div><label>예상 일정</label><input name="schedule" placeholder="예: 2025년 10월 착공 희망" style={input}/></div>
          </div>

          <div>
            <label>상세 내용*</label>
            <textarea name="message" required style={{...input,minHeight:140}} />
            <p style={{fontSize:12,color:"#667"}}>개인정보는 상담 목적 외 사용하지 않습니다.</p>
          </div>

          {/* Turnstile 위젯: sitekey 교체 */}
          <div className="cf-turnstile" data-sitekey="YOUR_TURNSTILE_SITE_KEY" />

          <input type="hidden" name="_subject" value="주연기술산업 홈페이지 신규 문의" />
          <input type="hidden" name="_language" value="ko" />
          <div style={{display:"flex",gap:12}}>
            <button type="submit" style={btnPrimary}>보내기</button>
            <a href="/" style={btnGhost as any}>홈으로</a>
          </div>
        </form>

        <hr style={{margin:"28px 0"}} />
        <div style={grid3}>
          <div style={card}><h3>대표번호</h3><p><a href="tel:+821012345678">010-1234-5678</a></p></div>
          <div style={card}><h3>이메일</h3><p><a href="mailto:hello@jytechindustry.com">hello@jytechindustry.com</a></p></div>
          <div style={card}><h3>주소</h3><p>서울특별시 ○○구 ○○로 00 (샘플)</p></div>
        </div>
      </div>
    </section>
  );
}
const input: React.CSSProperties = {width:"100%",padding:"12px",border:"1px solid #e5e7eb",borderRadius:10};
const grid2: React.CSSProperties = {display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16};
const grid3: React.CSSProperties = {display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16};
const btnPrimary: React.CSSProperties = {padding:"12px 16px",borderRadius:10,border:"1px solid #f59e0b",background:"#f59e0b",fontWeight:700};
const btnGhost: React.CSSProperties = {padding:"12px 16px",borderRadius:10,border:"1px solid #e5e7eb",fontWeight:700};
const card: React.CSSProperties = {border:"1px solid #e5e7eb",borderRadius:12,padding:18,background:"#fff"};
