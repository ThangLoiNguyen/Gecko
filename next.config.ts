import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000, 
        aggregateTimeout: 300, 
        ignored: /node_modules/,
      };
    }
    return config;
  },
};

export default nextConfig;