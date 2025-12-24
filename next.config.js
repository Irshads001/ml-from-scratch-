/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = false; // disable sourcemaps in dev (Windows fix)
    }
    return config;
  },
};

module.exports = nextConfig;
