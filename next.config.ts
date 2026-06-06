import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [],
  },
  // Compress output
  compress: true,
}

export default nextConfig
