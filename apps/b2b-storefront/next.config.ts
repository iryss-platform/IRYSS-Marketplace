import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.iryss.com' },
      { protocol: 'https', hostname: 'medusa-public-images.s3.eu-west-1.amazonaws.com' },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },
}

export default nextConfig
