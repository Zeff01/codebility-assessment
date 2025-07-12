import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.moola.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.moola.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "content.moola.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
