/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // AWS Amplify specific optimizations
  // Ensure static assets are properly handled
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Optimize for Amplify deployment
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig