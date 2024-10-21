import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/rewrite-from/',
        destination: `https://next-x-forwarded-for.vercel.app/rewrite-to/`,
      },
    ];
  },
};

export default nextConfig;
