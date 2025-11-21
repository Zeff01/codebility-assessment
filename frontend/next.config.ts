import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Pastikan menggunakan HTTPS
        hostname: 'fakestoreapi.com', // Hostname utama
      },
    ],
  },
};

export default nextConfig;
