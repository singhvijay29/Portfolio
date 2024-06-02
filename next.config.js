/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    RESUME_LINK: process.env.RESUME_LINK,
  },
  async rewrites() {
    return {};
  },
};
module.exports = nextConfig;
