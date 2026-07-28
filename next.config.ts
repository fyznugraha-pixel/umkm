import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/portofolio',
        destination: 'https://portfolio-fayiz-pied.vercel.app/portofolio',
      },
      {
        source: '/portofolio/:path*',
        destination: 'https://portfolio-fayiz-pied.vercel.app/portofolio/:path*',
      },
      {
        source: '/sertifikat/:path*',
        destination: 'https://tactlink-e-sertifikat.vercel.app/sertifikat/:path*',
        basePath: false,
      },
      {
        source: '/sertifikat',
        destination: 'https://tactlink-e-sertifikat.vercel.app/sertifikat',
        basePath: false,
      }
    ];
  },
};

export default nextConfig;
