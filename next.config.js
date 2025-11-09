// next.config.js (CommonJS)
const isProd = process.env.NODE_ENV === 'production'
const repo = 'myportfoilo'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                  // جایگزین next export
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },     // چون GitHub Pages بهینه‌ساز تصویر ندارد
  trailingSlash: true,               // از 404 روی مسیرها جلوگیری می‌کند
}

module.exports = nextConfig
