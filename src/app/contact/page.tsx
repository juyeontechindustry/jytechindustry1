"use client";

import Script from "next/script";
import Link from "next/link";
import React from "react";

export default function ContactPage() {
  // 스타일 객체 정의 (연락처 페이지 전용)
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    border: "1px solid #e5e7eb",
    borderRadius: 10,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };
  const grid2: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
  };
  const grid3: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
  };
  const btnPrimary: React.CSSProperties = {
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid #f59e0b",
    background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
    fontWeight: 700,
    color: "#fff", // 버튼 텍스트를 밝은 색으로 변경
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background 0.3s ease",
  };
  const btnGhost: React.CSSProperties = {
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid #e5e7eb",
    fontWeight: 700,
    textDecoration: "none",
    color: "#111",
    display: "inline-block",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "color 0.3s ease, border-color 0.3s ease",
  };
  const cardStyle: React.CSSProperties = {
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 18,
    background: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    textAlign: "center",
  };

  return (
    <section style={{ padding: "48px 16px", background: "#f9fafb" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "16px" }}>문의 / 견적 요청</h1>
        <p style={{ fontSize: "1.125rem", color: "#555", marginBottom: "24px" }}>아래 양식을 작성해 주시면 담당자가 빠르게 연락드립니다.</p>

        {/* Cloudflare Turnstile 스크립트 로드 */}
        <Script 
          src="https://challenges.cloudflare.com/turnstile/v0/api.js" 
          async 
          defer 
        />

        {/* 연락처/견적 문의 폼 시작 */}
        <form 
          action="https://formspree.io/f/xnnbedwe" 
          method="POST" 
          style={{ display: "grid", gap: 16 }}
        >
          {/* 성함, 연락처 등 기본 정보 입력 필드 */}
          <div style={grid2}>
            <div>
              <label htmlFor="name" style={{ fontWeight: 600 }}>성함<span style={{color:'red'}}>*</span></label>
              <input id="name" name="name" required style={inputStyle} />
            </div>
            <div>
              <label htmlFor="phone" style={{ fontWeight: 600 }}>연락처<span style={{color:'red'}}>*</span></label>
              <input id="phone" name="phone" required style={inputStyle} />
            </div>
            <div>
              <label htmlFor="email" style={{ fontWeight: 600 }}>이메일</label>
              <input id="email" type="email" name="email" style={inputStyle} />
            </div>
            <div>
              <label htmlFor="location" style={{ fontWeight: 600 }}>현장 위치 (시/구)</label>
              <input id="location" name="location" style={inputStyle} />
            </div>
            <div>
              <label htmlFor="category" style={{ fontWeight: 600 }}>공사 구분</label>
              <select id="category" name="category" style={inputStyle}>
                <option value="건축/리모델링">건축/리모델링</option>
                <option value="토목/외부">토목/외부</option>
                <option value="설비">설비</option>
                <option value="전기">전기</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <div>
              <label htmlFor="schedule" style={{ fontWeight: 600 }}>예상 일정</label>
              <input 
                id="schedule" 
                name="schedule" 
                placeholder="예: 2025년 10월 착공 희망" 
                style={inputStyle} 
              />
            </div>
          </div>

          {/* 상세 내용 입력란 */}
          <div>
            <label htmlFor="message" style={{ fontWeight: 600 }}>상세 내용<span style={{color:'red'}}>*</span></label>
            <textarea 
              id="message" 
              name="message" 
              required 
              style={{ ...inputStyle, minHeight: 140 }} 
            />
            <p style={{ fontSize: 12, color: "#667" }}>
              ※ 작성해주신 개인정보는 상담 목적 외에는 사용되지 않습니다.
            </p>
          </div>

          {/* Cloudflare Turnstile 위젯이 여기에 삽입됨 */}
          <div 
            className="cf-turnstile" 
            data-sitekey="YOUR_TURNSTILE_SITE_KEY" 
          />

          {/* 폼 제출 시 Formspree를 통해 발송되는 이메일 설정 */}
          <input type="hidden" name="_subject" value="주연기술산업 홈페이지 신규 문의" />
          <input type="hidden" name="_language" value="ko" />

          {/* 제출 및 홈으로 이동 버튼 */}
          <div style={{ display: "flex", gap: 12 }}>
            <button type="submit" style={btnPrimary}>보내기</button>
            <Link href="/" style={btnGhost}>홈으로</Link>
          </div>
        </form>
        {/* 연락처 폼 끝 */}

        <hr style={{ margin: "28px 0", borderColor: "#e5e7eb" }} />

        {/* 하단 연락처 정보 카드 */}
        <div style={grid3}>
          <div style={cardStyle}>
            <img src="/public/phone-icon.svg" alt="Phone Icon" style={{ width: "40px", marginBottom: "8px" }} />
            <h3 style={{ fontWeight: 600 }}>대표번호</h3>
            <p><a href="tel:+821012345678" style={{ color: "#f59e0b", textDecoration: "none" }}>010-1234-5678</a></p>
          </div>
          <div style={cardStyle}>
            <img src="/public/email-icon.svg" alt="Email Icon" style={{ width: "40px", marginBottom: "8px" }} />
            <h3 style={{ fontWeight: 600 }}>이메일</h3>
            <p><a href="mailto:hello@jytechindustry.com" style={{ color: "#f59e0b", textDecoration: "none" }}>hello@jytechindustry.com</a></p>
          </div>
          <div style={cardStyle}>
            <img src="/public/location-icon.svg" alt="Location Icon" style={{ width: "40px", marginBottom: "8px" }} />
            <h3 style={{ fontWeight: 600 }}>주소</h3>
            <p>서울특별시 ○○구 ○○로 00 (샘플)</p>
          </div>
        </div>
      </div>
    </section>
   );
}