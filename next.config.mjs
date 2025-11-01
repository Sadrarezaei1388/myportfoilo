/** @type {import('next').NextConfig} */
const isGH = process.env.GITHUB_ACTIONS === 'true';          // داخل اکشن
const repo = 'myportfoilo';                                    // 👈 نام ریپوی خودت

export default {
  output: 'export',                                          // مهم
  images: { unoptimized: true },                             // برای next/image
  // اگر Pages در مسیر /REPO_NAME میاد (Project Page):
  assetPrefix: isGH ? `/${repo}` : '',
  basePath:   isGH ? `/${repo}` : '',
  trailingSlash: true,                                       // 404 کمتر در Pages
};
