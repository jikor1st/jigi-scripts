/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  /* page 파일 정의를 .page가 붙은 파일로 재정의 해줍니다. */
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  // experimental: {
  //   forceSwcTransforms: true,
  // },
  // compiler: {
  //   emotion: true,
  // },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/resume',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['jikor1st.github.io'],
  },
};
