// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 사이트로 내보내기
  output: "export",
  // (빌드 막는 ESLint 경고 무시하고 싶으면 켜두기)
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;