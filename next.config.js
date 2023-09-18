/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "picsum.photos", protocol: "https" }],
    domains: ["picsum.photos"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
