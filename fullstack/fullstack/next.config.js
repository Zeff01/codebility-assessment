// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // The following is no longer necessary for src directory in Next.js 13+
    // as it's supported by default, but including for clarity
    // In older Next.js versions, this would be needed:
    // experimental: {
    //   appDir: true,
    // },
  }
  
  module.exports = nextConfig