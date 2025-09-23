// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  output: "export", // Enable static export for compatibility
};

export default nextConfig;