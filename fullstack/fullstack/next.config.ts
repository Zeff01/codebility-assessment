import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,

  images: {
    domains: ["lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/todo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
