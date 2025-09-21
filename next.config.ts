import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true } // Cloudflare Pages에서 이미지 최적화 비활성화
};

export default nextConfig;