import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/rewrite-from/:path*',
        destination: `https://next-x-forwarded-for.vercel.app/rewrite-to/:path*`,
      },
    ];
  },
};

export default nextConfig;
