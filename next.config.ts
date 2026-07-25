import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/portofolio',
        destination: 'https://portfolio-fayiz-pied.vercel.app/',
        permanent: true, // Permanent redirect to the external portfolio
      },
    ];
  },
};

export default nextConfig;
