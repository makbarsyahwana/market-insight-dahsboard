/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['localhost:3000'],
  },
}

module.exports = nextConfig
