import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
        images: {remotePatterns: [new URL('http://192.168.1.137')],},
};

export default nextConfig;
