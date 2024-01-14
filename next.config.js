/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // svg 사용할 때 <Icon /> 처럼 사용하기 위함
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  images: {
    domains: ['finfellowsbucket.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
