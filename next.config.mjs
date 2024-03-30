/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.apple.com",
      },
      {
        hostname: "images.samsung.com",
      },
      {
        hostname: "fdn2.gsmarena.com",
      },
    ],
  },
};

export default nextConfig;
