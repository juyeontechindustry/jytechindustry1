// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  // ❌ 절대 넣지 말 것: output: "export"
};

export default nextConfig;