import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow specific remote hosts for Next/Image
    domains: ["fakestoreapi.com", "i.pravatar.cc"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
