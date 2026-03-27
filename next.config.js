/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'github' ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
  devIndicators: false,
}

module.exports = nextConfig
