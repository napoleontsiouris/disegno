/**
 * @type {import('next').NextConfig}
 */

const { i18n } = require('./next-i18next.config')

module.exports = {
  
  i18n: {
    locales: [ 'el'], // Replace with your supported locales
    defaultLocale: 'el',  
  },
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  }
}

