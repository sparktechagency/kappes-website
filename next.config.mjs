/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.10.7.79",
      },
      {
        protocol: "https",
        hostname: "10.10.7.79",
      },
      {
        protocol: "https",
        hostname: "asif7001.binarybards.online",
      },
    ],
  },
};

export default nextConfig;
