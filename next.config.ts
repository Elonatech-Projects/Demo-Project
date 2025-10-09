import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'elonatech.com.ng',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
