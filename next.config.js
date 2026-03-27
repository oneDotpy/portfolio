/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.DEPLOY_TARGET === 'github' ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
  devIndicators: false,
}

module.exports = nextConfig
