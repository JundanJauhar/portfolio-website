import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Membantu dengan deployment di Vercel
    domains: [],
  },
  output: 'export' // Untuk static export jika diperlukan
};

export default nextConfig;
