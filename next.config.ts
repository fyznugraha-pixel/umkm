import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/portofolio',
        destination: 'https://portfolio-fayiz-pied.vercel.app/portfolio',
      },
      {
        source: '/portofolio/:path*',
        destination: 'https://portfolio-fayiz-pied.vercel.app/portfolio/:path*',
      },
    ];
  },
};

export default nextConfig;
