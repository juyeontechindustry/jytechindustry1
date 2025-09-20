import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",                 // ★ 정적 내보내기
  eslint: { ignoreDuringBuilds: true }, // (선택)
};
export default nextConfig;