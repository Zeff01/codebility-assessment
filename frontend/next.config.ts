import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.moola.com",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "api.moola.com",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
